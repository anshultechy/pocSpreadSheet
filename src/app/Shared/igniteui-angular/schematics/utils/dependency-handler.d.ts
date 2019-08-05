import { Rule } from '@angular-devkit/schematics';
import { Tree } from '@angular-devkit/schematics/src/tree/interface';
import { Options } from '../interfaces/options';
export declare function overwriteJsonFile(tree: Tree, targetFile: string, data: any): void;
export declare function logSuccess(options: Options): Rule;
export declare function addDependencies(options: Options): Rule;
/**
 * Recursively search for the first property that matches targetProp within the angular.json file.
 */
export declare function getPropertyFromWorkspace(targetProp: string, workspace: any, curKey?: string): any;