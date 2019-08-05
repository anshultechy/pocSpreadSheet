import { Type, Nullable$1 } from "./type";
export declare function nullableConcat(v1: any, v2: any): string;
export declare function nullableAdd(v1: any, v2: any): Nullable$1<number>;
export declare function nullableSubtract(v1: any, v2: any): Nullable$1<number>;
export declare function nullableMultiply(v1: any, v2: any): Nullable$1<number>;
export declare function nullableDivide(v1: any, v2: any): Nullable$1<number>;
export declare function nullableModulus(v1: any, v2: any): Nullable$1<number>;
export declare function nullableGreaterThan(v1: any, v2: any): boolean;
export declare function nullableGreaterThanOrEqual(v1: any, v2: any): boolean;
export declare function nullableLessThan(v1: any, v2: any): boolean;
export declare function nullableLessThanOrEqual(v1: any, v2: any): boolean;
export declare function nullableIsNull(v: any): boolean;
export declare function nullableEquals(v1: any, v2: any): boolean;
export declare function nullableNotEquals(v1: any, v2: any): boolean;
export declare function unwrapNullable(v: any): any;
export declare function wrapNullable($t: Type, v: any): any;