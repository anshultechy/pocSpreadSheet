import { Type } from "./type";
export declare function arrayClear1(array: any[], index: number, length: number): void;
export declare function arrayCopy1(source: any[], sourceIndex: number, dest: any[], destIndex: number, count: number): void;
export declare function arrayCopy2(source: any[], dest: any[], count: number): void;
export declare function arrayCopyTo(source: any[], dest: any[], index: number): void;
export declare function arrayIndexOf1<T>($t: Type, array: any[], value: any): number;
export declare function arrayContains<T>(array: T[], value: T): boolean;
export declare function arrayLast<T>(array: T[]): T;