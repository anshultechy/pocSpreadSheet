import { CultureInfo } from "./culture";
export declare function dateToString(value: Date, provider: any): any;
export declare function fromOADate(value: number): Date;
export declare function toOADate(value: Date): number;
export declare function dateToStringFormat(value: Date, format: string, provider?: CultureInfo): any;
export declare function dateTryParse(s: string, result?: Date): {
    p1: Date;
    ret: boolean;
};
export declare function dateParseExact(s: string, format?: string, provider?: any): Date;
export declare function toLocalTime(value: Date): Date;
export declare function toUniversalTime(value: Date): Date;
export declare function dateParse(s: string, provider?: any): any;
export declare function toLongDateString(value: Date): string;
export declare function toLongTimeString(value: Date): string;
export declare enum DayOfWeek {
    Sunday = 0,
    Monday = 1,
    Tuesday = 2,
    Wednesday = 3,
    Thursday = 4,
    Friday = 5,
    Saturday = 6
}