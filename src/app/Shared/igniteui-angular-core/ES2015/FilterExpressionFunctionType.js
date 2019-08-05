/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { markEnum } from "./type";
/**
 * Indentifies the function type for a filter function expression.
 */
export var FilterExpressionFunctionType;
(function (FilterExpressionFunctionType) {
    /**
     * Determines if a string contains another.
     */
    FilterExpressionFunctionType[FilterExpressionFunctionType["Contains"] = 0] = "Contains";
    /**
     * Determines if a string ends with another.
     */
    FilterExpressionFunctionType[FilterExpressionFunctionType["EndsWith"] = 1] = "EndsWith";
    /**
     * Determines if a string starts with another.
     */
    FilterExpressionFunctionType[FilterExpressionFunctionType["StartsWith"] = 2] = "StartsWith";
    /**
     * Gets the length of a string.
     */
    FilterExpressionFunctionType[FilterExpressionFunctionType["Length1"] = 3] = "Length1";
    /**
     * Gets the index of a string within another.
     */
    FilterExpressionFunctionType[FilterExpressionFunctionType["IndexOf"] = 4] = "IndexOf";
    /**
     * Replaces instances of a string within another with a separate string.
     */
    FilterExpressionFunctionType[FilterExpressionFunctionType["Replace"] = 5] = "Replace";
    /**
     * Gets the substring of a string based on start index and optionally length.
     */
    FilterExpressionFunctionType[FilterExpressionFunctionType["Substring"] = 6] = "Substring";
    /**
     * Gets the lowercase representation of a string.
     */
    FilterExpressionFunctionType[FilterExpressionFunctionType["ToLower"] = 7] = "ToLower";
    /**
     * Gets the uppercase representation of a string.
     */
    FilterExpressionFunctionType[FilterExpressionFunctionType["ToUpper"] = 8] = "ToUpper";
    /**
     * Trims the starting and ending whitespace from a string.
     */
    FilterExpressionFunctionType[FilterExpressionFunctionType["Trim"] = 9] = "Trim";
    /**
     * Concatenates strings together.
     */
    FilterExpressionFunctionType[FilterExpressionFunctionType["Concat"] = 10] = "Concat";
    /**
     * Gets the day from a date/time.
     */
    FilterExpressionFunctionType[FilterExpressionFunctionType["Day"] = 11] = "Day";
    /**
     * Gets the hour from a date/time.
     */
    FilterExpressionFunctionType[FilterExpressionFunctionType["Hour"] = 12] = "Hour";
    /**
     * Gets the minute from a date/time.
     */
    FilterExpressionFunctionType[FilterExpressionFunctionType["Minute"] = 13] = "Minute";
    /**
     * Gets the month from a date/time.
     */
    FilterExpressionFunctionType[FilterExpressionFunctionType["Month"] = 14] = "Month";
    /**
     * Gets teh second from a date/time.
     */
    FilterExpressionFunctionType[FilterExpressionFunctionType["Second"] = 15] = "Second";
    /**
     * Gets the year from a date/time.
     */
    FilterExpressionFunctionType[FilterExpressionFunctionType["Year"] = 16] = "Year";
    /**
     * Rounds a numeric value.
     */
    FilterExpressionFunctionType[FilterExpressionFunctionType["Round"] = 17] = "Round";
    /**
     * Floors a numeric value.
     */
    FilterExpressionFunctionType[FilterExpressionFunctionType["Floor"] = 18] = "Floor";
    /**
     * Ceilings a numeric value.
     */
    FilterExpressionFunctionType[FilterExpressionFunctionType["Ceiling"] = 19] = "Ceiling";
    /**
     * Gets the date from a date/time.
     */
    FilterExpressionFunctionType[FilterExpressionFunctionType["Date"] = 20] = "Date";
    /**
     * Gets the time from a date/time.
     */
    FilterExpressionFunctionType[FilterExpressionFunctionType["Time"] = 21] = "Time";
    /**
     * Gets the current date/time.
     */
    FilterExpressionFunctionType[FilterExpressionFunctionType["Now"] = 22] = "Now";
    /**
     * Gets whether the value matches a certain type.
     */
    FilterExpressionFunctionType[FilterExpressionFunctionType["IsOf"] = 23] = "IsOf";
    /**
     * Gets a value cast to a specific type.
     */
    FilterExpressionFunctionType[FilterExpressionFunctionType["Cast"] = 24] = "Cast";
})(FilterExpressionFunctionType || (FilterExpressionFunctionType = {}));
/**
 * @hidden
 */
export let FilterExpressionFunctionType_$type = markEnum('FilterExpressionFunctionType', 'Contains,0|EndsWith,1|StartsWith,2|Length:Length1,3|IndexOf,4|Replace,5|Substring,6|ToLower,7|ToUpper,8|Trim,9|Concat,10|Day,11|Hour,12|Minute,13|Month,14|Second,15|Year,16|Round,17|Floor,18|Ceiling,19|Date,20|Time,21|Now,22|IsOf,23|Cast,24');
//# sourceMappingURL=FilterExpressionFunctionType.js.map