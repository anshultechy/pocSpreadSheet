import { Base, Type } from './type';
import { IFormatProvider } from './type';
import { CompareOptions } from './string';
export declare const enum CalendarWeekRule {
    FirstDay = 0,
    FirstFullWeek = 1,
    FirstFourDayWeek = 2
}
export declare class Calendar extends Base {
    eras(): number[];
    getEra(time: Date): number;
    getDayOfMonth(time: Date): number;
    getDaysInMonth(year: number, month: number, era: number): number;
    getDaysInYear(year: number, era: number): number;
    getMonth(time: Date): number;
    getYear(time: Date): number;
    toDateTime(year: number, month: number, day: number, hour: number, minute: number, second: number, millisecond: number, era: number): Date;
    addMonths(time: Date, months: number): Date;
    addYears(time: Date, years: number): Date;
    static $t: Type;
}
export declare class CompareInfo extends Base {
    compare1(string1: string, offset1: number, length1: number, string2: string, offset2: number, length2: number, options: CompareOptions): number;
    compare4(string1: string, string2: string): number;
    compare5(string1: string, string2: string, options: CompareOptions): number;
    indexOf1(source: string, value: string): number;
    indexOf3(source: string, value: string, options: CompareOptions): number;
    indexOf6(source: string, value: string, startIndex: number, options: CompareOptions): number;
    indexOf5(source: string, value: string, options: CompareOptions): number;
    referenceEquals(a: CompareInfo, b: CompareInfo): boolean;
    static $t: Type;
}
export declare class DateTimeFormat extends Base {
    private _cultureName;
    private _isInvariant;
    constructor(cultureName: string, isInvariant: boolean);
    clone(): DateTimeFormat;
    private _dateSeparator;
    dateSeparator: string;
    private _timeSeparator;
    timeSeparator: string;
    private _longDatePattern;
    longDatePattern: string;
    private _shortDatePattern;
    shortDatePattern: string;
    private _shortTimePattern;
    shortTimePattern: string;
}
export declare class NumberFormatInfo extends Base {
    constructor(cultureName: string, isInvariant: boolean);
    private _cultureName;
    private _isInvariant;
    clone(): NumberFormatInfo;
    private _currencySymbol;
    currencySymbol: string;
    private _nativeDigits;
    readonly nativeDigits: string[];
    private _negativeSign;
    negativeSign: string;
    private _percentSymbol;
    percentSymbol: string;
    private _positiveSign;
    positiveSign: string;
    private _numberDecimalSeparator;
    numberDecimalSeparator: string;
    private _numberGroupSeparator;
    numberGroupSeparator: string;
    private _numberGroupSizes;
    numberGroupSizes: number[];
    static $t: Type;
}
export declare class Thread extends Base {
    private static _currentThread;
    static readonly currentThread: Thread;
    private _currentCulture;
    currentCulture: CultureInfo;
    static $t: Type;
}
export declare class CultureInfo extends Base implements IFormatProvider {
    private _name;
    private _isInvariant;
    constructor(name: string);
    clone(): CultureInfo;
    readonly compareInfo: CompareInfo;
    getFormat<T>($t: Type): DateTimeFormat | NumberFormatInfo;
    readonly name: string;
    readonly calendar: Calendar;
    private _dateTimeFormat;
    dateTimeFormat: DateTimeFormat;
    private _numberFormat;
    numberFormat: NumberFormatInfo;
    readonly twoLetterISOLanguageName: string;
    static getCultureInfo(lcid: string | number): CultureInfo;
    static readonly currentCulture: CultureInfo;
    private static _cachedInvariant;
    static readonly invariantCulture: CultureInfo;
    static $t: Type;
}