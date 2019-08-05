import { IEnumerable$1, Type } from "./type";
export declare const enum CompareOptions {
    None = 0,
    IgnoreCase = 1,
    IgnoreNonSpace = 2,
    IgnoreSymbols = 4,
    IgnoreKanaType = 8,
    IgnoreWidth = 16,
    OrdinalIgnoreCase = 268435456,
    StringSort = 536870912,
    Ordinal = 1073741824
}
export declare const enum StringComparison {
    CurrentCulture = 0,
    CurrentCultureIgnoreCase = 1,
    InvariantCulture = 2,
    InvariantCultureIgnoreCase = 3,
    Ordinal = 4,
    OrdinalIgnoreCase = 5
}
export declare function stringStartsWith(str: string, check: string): boolean;
export declare function stringEndsWith(str: string, check: string): boolean;
export declare function stringContains(str: string, check: string): boolean;
export declare function stringCreateFromCharArray(charArray: string[]): string;
export declare function stringCreateFromChar(char: string, count: number): string;
export declare function stringCreateFromCharArraySlice(charArray: string[], start: number, length: number): string;
export declare function stringToCharArray(target: string): string[];
export declare function stringCopyToCharArray(source: string, sourceIndex: number, destination: string[], destinationIndex: number, count: number): void;
export declare function stringIsDigit(str: string, index?: number): boolean;
export declare function charMaxValue(): string;
export declare function charMinValue(): string;
export declare function stringToString1(target: string): string;
export declare function stringRemove(target: string, index: number, count?: number): string;
export declare function stringCompareTo(target: string, other: string): 1 | 0 | -1;
export declare let stringCompare: typeof stringCompareTo;
export declare function stringIsNullOrEmpty(target: string): boolean;
export declare function stringIsNullOrWhiteSpace(target: string): boolean;
export declare function stringEmpty(): string;
export declare function stringEquals(target: string, other: string): boolean;
export declare function stringEscapeRegExp(str: string): string;
export declare function createGuid(): string;
export declare function stringConcat(...s: string[]): string;
export declare function stringReplace(str: string, oldValue: string, newValue: string): string;
export declare function stringJoin(sep: string, ...vals: string[]): string;
export declare function stringJoin1<T>($t: Type, sep: string, vals: IEnumerable$1<T>): any;
export declare function stringToString$1<T>($t: Type, v: any): any;
export declare function stringToLocaleLower(str: string, locale?: any): string;
export declare function stringToLocaleUpper(str: string, locale?: any): string;