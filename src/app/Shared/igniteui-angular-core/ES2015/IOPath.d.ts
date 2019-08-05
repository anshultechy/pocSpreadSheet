import { Base, Type } from "./type";
/**
 * @hidden
 */
export declare class IOPath extends Base {
    static $t: Type;
    static readonly altDirectorySeparatorChar: string;
    static readonly directorySeparatorChar: string;
    static readonly pathSeparator: string;
    static readonly volumeSeparatorChar: string;
    static getExtension(a: string): string;
    static getDirectoryName(a: string): string;
    static getFileName(a: string): string;
    static combine1(a: string, b: string): string;
    static isPathRooted(a: string): boolean;
    static changeExtension(a: string, b: string): string;
    static combine(...a: string[]): string;
    static combine2(a: string, b: string, c: string): string;
    static getFileNameWithoutExtension(a: string): string;
    static getFullPath(a: string): string;
    static getInvalidPathChars(): string[];
    private static h;
    private static i;
    static getPathRoot(a: string): string;
    static getTempFileName(): string;
    static getTempPath(): string;
    static hasExtension(a: string): boolean;
}