import { CultureInfo } from "./culture";
export declare function boolToString(value: boolean, provider: any): string;
export declare function boolToInt16(value: boolean, provider: CultureInfo): number;
export declare let boolToUInt16: typeof boolToInt16;
export declare let boolToInt32: typeof boolToInt16;
export declare let boolToInt64: typeof boolToInt16;
export declare let boolToUInt64: typeof boolToInt16;
export declare let boolToUInt32: typeof boolToInt16;
export declare let boolToSingle: typeof boolToInt16;
export declare let boolToDouble: typeof boolToInt16;
export declare let boolToDecimal: typeof boolToInt16;
export declare function toBoolean(value: boolean, provider: CultureInfo): boolean;
export declare function toString1(value: boolean, provider: CultureInfo): string;