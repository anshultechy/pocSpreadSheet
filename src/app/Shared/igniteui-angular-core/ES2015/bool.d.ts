export declare function boolCompare(value: boolean, other: boolean): 1 | 0 | -1;
export declare function parseBool(s: string): boolean;
export declare function tryParseBool(s: string, v?: boolean): {
    p1: boolean;
    ret: boolean;
};