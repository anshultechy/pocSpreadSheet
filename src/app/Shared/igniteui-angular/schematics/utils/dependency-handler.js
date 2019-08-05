"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schematics_1 = require("@angular-devkit/schematics");
const config_1 = require("@schematics/angular/utility/config");
function logIncludingDependency(context, pkg, version) {
    context.logger.info(`Including ${pkg} - Version: ${version}`);
}
function getTargetedProjectOptions(project, target) {
    if (project.targets &&
        project.targets[target] &&
        project.targets[target].options) {
        return project.targets[target].options;
    }
    if (project.architect &&
        project.architect[target] &&
        project.architect[target].options) {
        return project.architect[target].options;
    }
    throw new schematics_1.SchematicsException(`Cannot determine the project's configuration for: ${target}`);
}
function getMainFile(project) {
    const buildOptions = getTargetedProjectOptions(project, 'build');
    if (!buildOptions.main) {
        throw new schematics_1.SchematicsException(`Could not find the project main file inside of the ` +
            `workspace config (${project.sourceRoot})`);
    }
    return buildOptions.main;
}
function overwriteJsonFile(tree, targetFile, data) {
    tree.overwrite(targetFile, JSON.stringify(data, null, 2) + '\n');
}
exports.overwriteJsonFile = overwriteJsonFile;
function logSuccess(options) {
    return (tree, context) => {
        context.logger.info('');
        context.logger.warn('Ignite UI for Angular installed');
        context.logger.info('Learn more: https://www.infragistics.com/products/ignite-ui-angular');
        context.logger.info('');
    };
}
exports.logSuccess = logSuccess;
function addDependencies(options) {
    return (tree, context) => {
        const pkgJson = require('../../package.json');
        const dependencies = 'dependencies';
        const devDependencies = 'devDependencies';
        includeDependencies(pkgJson, context, tree, dependencies);
        // Add web-animations-js to dependencies
        Object.keys(pkgJson.peerDependencies).forEach(pkg => {
            const version = pkgJson.peerDependencies[pkg];
            if (pkg.includes('web-animations')) {
                addPackageToPkgJson(tree, pkg, version, dependencies);
                logIncludingDependency(context, pkg, version);
                return;
            }
        });
        addPackageToPkgJson(tree, 'igniteui-cli', pkgJson.devDependencies['igniteui-cli'], devDependencies);
        return tree;
    };
}
exports.addDependencies = addDependencies;
/**
 * Recursively search for the first property that matches targetProp within the angular.json file.
 */
function getPropertyFromWorkspace(targetProp, workspace, curKey = '') {
    if (workspace.hasOwnProperty(targetProp)) {
        return { key: targetProp, value: workspace[targetProp] };
    }
    const workspaceKeys = Object.keys(workspace);
    for (const key of workspaceKeys) {
        // If the target property is an array, return its key and its contents.
        if (Array.isArray(workspace[key])) {
            return {
                key: curKey,
                value: workspace[key]
            };
        }
        else if (workspace[key] instanceof Object) {
            // If the target property is an object, go one level in.
            if (workspace.hasOwnProperty(key)) {
                const newValue = getPropertyFromWorkspace(targetProp, workspace[key], key);
                if (newValue !== null) {
                    return newValue;
                }
            }
        }
    }
    return null;
}
exports.getPropertyFromWorkspace = getPropertyFromWorkspace;
function includeDependencies(pkgJson, context, tree, dependenciesKey) {
    Object.keys(pkgJson.dependencies).forEach(pkg => {
        const version = pkgJson.dependencies[pkg];
        switch (pkg) {
            case 'hammerjs':
                logIncludingDependency(context, pkg, version);
                addPackageToPkgJson(tree, pkg, version, dependenciesKey);
                const workspace = config_1.getWorkspace(tree);
                const project = workspace.projects[workspace.defaultProject];
                const projectOptions = getTargetedProjectOptions(project, 'build');
                const mainTsPath = getMainFile(project);
                const hammerImport = 'import \'hammerjs\';\n';
                const mainTsContent = tree.read(mainTsPath).toString();
                // if there are no elements in the architect.build.options.scripts array that contain hammerjs
                // and main.ts does not contain an import with hammerjs
                if (!projectOptions.scripts.some(el => el.includes('hammerjs')) && !mainTsContent.includes(hammerImport)) {
                    // import hammerjs in the main.ts file
                    const contents = hammerImport + mainTsContent;
                    tree.overwrite(mainTsPath, contents);
                }
                break;
            default:
                logIncludingDependency(context, pkg, version);
                addPackageToPkgJson(tree, pkg, version, dependenciesKey);
                break;
        }
    });
}
/**
 * Add an item to an angular.json section, within the architect
 * @param workspace Angular Workspace Schema (angular.json)
 * @param key Architect tool key to add option to
 */
function addItemToAngularWorkspace(workspace, key, item) {
    const currentProjectName = workspace.defaultProject;
    if (currentProjectName) {
        if (!workspace.projects[currentProjectName].architect) {
            workspace.projects[currentProjectName].architect = {};
        }
        if (!workspace.projects[currentProjectName].architect[key]) {
            workspace.projects[currentProjectName].architect[key] = {};
        }
        if (!workspace.projects[currentProjectName].architect[key].options) {
            workspace.projects[currentProjectName].architect[key].options = {};
        }
        if (!workspace.projects[currentProjectName].architect[key].options.scripts) {
            workspace.projects[currentProjectName].architect[key].options.scripts = [];
        }
        if (!workspace.projects[currentProjectName].architect[key].options.scripts.includes(item)) {
            workspace.projects[currentProjectName].architect[key].options.scripts.push(item);
            return true;
        }
        return false;
    }
}
function addPackageToPkgJson(tree, pkg, version, target) {
    const targetFile = 'package.json';
    if (tree.exists(targetFile)) {
        const sourceText = tree.read(targetFile).toString();
        const json = JSON.parse(sourceText);
        if (!json[target]) {
            json[target] = {};
        }
        if (!json.dependencies[pkg]) {
            json[target][pkg] = version;
            json[target] =
                Object.keys(json[target])
                    .sort()
                    .reduce((result, key) => (result[key] = json[target][key]) && result, {});
            tree.overwrite(targetFile, JSON.stringify(json, null, 2) + '\n');
        }
    }
    return tree;
}