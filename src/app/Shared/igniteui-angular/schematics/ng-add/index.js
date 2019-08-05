"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schematics_1 = require("@angular-devkit/schematics");
const package_handler_1 = require("../utils/package-handler");
const dependency_handler_1 = require("../utils/dependency-handler");
const add_normalize_1 = require("./add-normalize");
const config_1 = require("@schematics/angular/utility/config");
/**
 * Checks whether a property exists in the angular workspace.
 */
function propertyExistsInWorkspace(targetProp, workspace) {
    const foundProp = dependency_handler_1.getPropertyFromWorkspace(targetProp, workspace);
    return foundProp !== null && foundProp.key === targetProp;
}
function enablePolyfills(tree, context) {
    const targetFile = 'src/polyfills.ts';
    if (!tree.exists(targetFile)) {
        context.logger.warn(`${targetFile} not found. You may need to update polyfills.ts manually.`);
        return;
    }
    // Match all commented import statements that are core-js/es6/*
    const pattern = /\/{2}\s{0,}(import\s{0,}\'core\-js\/es6\/.+)/;
    let polyfillsData = tree.read(targetFile).toString();
    if (pattern.test(polyfillsData)) {
        let result;
        while (result = pattern.exec(polyfillsData)) {
            polyfillsData = polyfillsData.replace(result[0], result[1]);
        }
    }
    return polyfillsData;
}
function enableWebAnimationsAndGridSupport(tree, targetFile, polyfillsData) {
    // Target the web-animations-js commented import statement and uncomment it.
    const webAnimationsLine = '// import \'web-animations-js\';';
    polyfillsData = polyfillsData.replace(webAnimationsLine, webAnimationsLine.substring(3, webAnimationsLine.length));
    tree.overwrite(targetFile, polyfillsData);
}
function readInput(options) {
    return (tree, context) => {
        if (options.polyfills) {
            const workspace = config_1.getWorkspace(tree);
            const targetProperty = 'es5BrowserSupport';
            const polyfillsFile = 'src/polyfills.ts';
            const propertyExists = propertyExistsInWorkspace(targetProperty, workspace);
            let polyfillsData = tree.read(polyfillsFile).toString();
            if (propertyExists) {
                // If project targets angular cli version >= 7.3
                workspace.projects[workspace.defaultProject].architect.build.options[targetProperty] = true;
                enableWebAnimationsAndGridSupport(tree, polyfillsFile, polyfillsData);
                dependency_handler_1.overwriteJsonFile(tree, 'angular.json', workspace);
            }
            else {
                // If project targets angular cli version < 7.3
                polyfillsData = enablePolyfills(tree, context);
                enableWebAnimationsAndGridSupport(tree, polyfillsFile, polyfillsData);
            }
        }
    };
}
function addNormalize(options) {
    return (tree, context) => {
        if (options.resetCss) {
            const result = add_normalize_1.addResetCss(tree);
            if (!result) {
                context.logger.warn(`Could not complete adding reset styles. Those may need to be added manually.`);
            }
        }
    };
}
function default_1(options) {
    return schematics_1.chain([
        readInput(options),
        addNormalize(options),
        dependency_handler_1.addDependencies(options),
        package_handler_1.installPackageJsonDependencies(options),
        dependency_handler_1.logSuccess(options)
    ]);
}
exports.default = default_1;