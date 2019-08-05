export declare function log10(value: number): number;
export declare function toDouble(value: number): number;
export declare let toDecimal: typeof toDouble;
export declare function compareTo(value: number, other: number): 1 | 0 | -1;
export declare function isInfinity(value: number): boolean;
export declare function intDivide(value: number, divisor: number): number;
export declare function truncate(val: number): number;
export declare function logBase(n: number, n2: number): number;
export declare function tryParseNumber(s: string, v?: number): {
    p1: number;
    ret: boolean;
};
export declare function isNegativeInfinity(v: number): boolean;
export declare function isPositiveInfinity(v: number): boolean;
export declare function isNaN_(v: number): boolean;
