import { Type } from "./type";
/**
 * Indentifies the function type for a filter function expression.
 */
export declare enum FilterExpressionFunctionType {
    /**
     * Determines if a string contains another.
     */
    Contains = 0,
    /**
     * Determines if a string ends with another.
     */
    EndsWith = 1,
    /**
     * Determines if a string starts with another.
     */
    StartsWith = 2,
    /**
     * Gets the length of a string.
     */
    Length1 = 3,
    /**
     * Gets the index of a string within another.
     */
    IndexOf = 4,
    /**
     * Replaces instances of a string within another with a separate string.
     */
    Replace = 5,
    /**
     * Gets the substring of a string based on start index and optionally length.
     */
    Substring = 6,
    /**
     * Gets the lowercase representation of a string.
     */
    ToLower = 7,
    /**
     * Gets the uppercase representation of a string.
     */
    ToUpper = 8,
    /**
     * Trims the starting and ending whitespace from a string.
     */
    Trim = 9,
    /**
     * Concatenates strings together.
     */
    Concat = 10,
    /**
     * Gets the day from a date/time.
     */
    Day = 11,
    /**
     * Gets the hour from a date/time.
     */
    Hour = 12,
    /**
     * Gets the minute from a date/time.
     */
    Minute = 13,
    /**
     * Gets the month from a date/time.
     */
    Month = 14,
    /**
     * Gets teh second from a date/time.
     */
    Second = 15,
    /**
     * Gets the year from a date/time.
     */
    Year = 16,
    /**
     * Rounds a numeric value.
     */
    Round = 17,
    /**
     * Floors a numeric value.
     */
    Floor = 18,
    /**
     * Ceilings a numeric value.
     */
    Ceiling = 19,
    /**
     * Gets the date from a date/time.
     */
    Date = 20,
    /**
     * Gets the time from a date/time.
     */
    Time = 21,
    /**
     * Gets the current date/time.
     */
    Now = 22,
    /**
     * Gets whether the value matches a certain type.
     */
    IsOf = 23,
    /**
     * Gets a value cast to a specific type.
     */
    Cast = 24
}
/**
 * @hidden
 */
export declare let FilterExpressionFunctionType_$type: Type;