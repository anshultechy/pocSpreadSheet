/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { markEnum } from "./type";
export let DateTimeKind_$type = markEnum("DateTimeKind", "Unspecified,0|Utc,1|Local,2");
export function dateKind() {
    return 2 /* Local */;
}
;
export function defaultDVDateParse(str) {
    return new Date(parseInt(str.replace("/Date(", "").replace(")/", ""), 10));
}
export function dateNow() {
    return new Date();
}
;
export function dateMinValue() {
    return new Date(1, 0, 1, 0, 0, 0, 0);
}
;
export function dateMaxValue() {
    return new Date(9999, 12, 31, 23, 59, 59, 0.9999999);
}
;
export function dateFromMilliseconds(value) {
    return new Date(value);
}
;
export function dateStdTimezoneOffset(date) {
    var jan, jul, janOffset, julOffset;
    jan = new Date(date.getFullYear(), 0, 1);
    jul = new Date(date.getFullYear(), 6, 1);
    julOffset = jul.getTimezoneOffset();
    janOffset = jan.getTimezoneOffset();
    return Math.max(janOffset, julOffset);
}
;
export function dateIsDST(date) {
    return date.getTimezoneOffset() < dateStdTimezoneOffset(date);
}
;
export function dateFromValues(year, month, day, hour, minute, second, millisecond) {
    return new Date(year, month - 1, day, hour, minute, second, millisecond);
}
export function dateFromTicks(ticks) {
    return new Date(ticks);
}
export function dateAddSeconds(value, seconds) {
    return dateAddDays(value, seconds / 86400);
}
export function dateAddMinutes(value, minutes) {
    return dateAddDays(value, minutes / 1440);
}
export function dateAddHours(value, hours) {
    return dateAddDays(value, hours / 24);
}
export function dateAddDays(value, days) {
    var result = new Date(+value + (days * 86400000));
    // Correct for any daylight saving time shifts
    if (dateIsDST(value)) {
        if (!dateIsDST(value)) {
            if (dateIsDST(result)) {
                result = new Date(+result - 3600000);
            }
        }
        else {
            if (!dateIsDST(result)) {
                result = new Date(+result + 3600000);
            }
        }
    }
    return result;
}
export function dateAddMonths(value, num) {
    var result = new Date(value.getTime());
    var currentMonth = result.getMonth() + result.getFullYear() * 12;
    result.setMonth(result.getMonth() + num);
    var diff = result.getMonth() + result.getFullYear() * 12 - currentMonth;
    // If don't get the right number, set date to
    // last day of previous month
    if (diff != num) {
        result.setDate(0);
    }
    return result;
}
export function dateAddYears(value, num) {
    var result = new Date(value.getTime());
    result.setFullYear(result.getFullYear() + num);
    return result;
}
export function dateIsLeapYear(year) {
    return year % 4 === 0 && (year % 100 !== 0 || year % 400 == 0);
}
export function dateToFileTime(value) {
    return (+value - +new Date(1600, 11, 31, 19, 0, 0, 0)) * 10000;
}
export function dateFromFileTime(value) {
    // TODO: Test this
    return +(value / 10000) + +new Date(1600, 11, 31, 19, 0, 0, 0);
}
export function dateFromFileTimeUtc(value) {
    return new Date(+(value / 10000) + +Date.UTC(1600, 12, 1, 0, 0, 0, 0));
}
export function dateGetMonth(value) {
    return value.getMonth() + 1;
}
export function dateToday() {
    var r = new Date();
    r.setHours(0, 0, 0, 0);
    return r;
}
export function dateGetTimeOfDay(value) {
    return (value.getHours() * 3600000) +
        (value.getMinutes() * 60000) +
        (value.getSeconds() * 1000) +
        value.getMilliseconds();
}
export function dateGetDate(value) {
    return new Date(+value - dateGetTimeOfDay(value));
}
export function dateEquals(d1, d2) {
    return d2 instanceof Date && +d1 === +d2;
}
export function dateAdd(d, t) { return new Date(+d + t); }
;
export function dateSubtract(d, t) { return new Date(+d - t); }
;
export function daysInMonth(year, month) {
    switch (month) {
        case 1: return 31; // Jan
        case 2: return dateIsLeapYear(year) ? 29 : 28; // Feb
        case 3: return 31; // Mar
        case 4: return 30; // Apr
        case 5: return 31; // May
        case 6: return 30; // Jun
        case 7: return 31; // Jul
        case 8: return 31; // Aug
        case 9: return 30; // Sep
        case 10: return 31; // Oct
        case 11: return 30; // Nov
        case 12: return 31; // Dec
    }
    // TODO: throw error here?
    return 0;
}
//# sourceMappingURL=date.js.map