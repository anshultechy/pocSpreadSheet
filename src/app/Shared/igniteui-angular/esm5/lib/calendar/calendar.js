/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DateRangeType } from '../core/dates';
/** @type {?} */
var MDAYS = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
/** @type {?} */
var FEBRUARY = 1;
/**
 * @param {?=} start
 * @param {?=} stop
 * @param {?=} step
 * @return {?}
 */
export function range(start, stop, step) {
    if (start === void 0) { start = 0; }
    if (step === void 0) { step = 1; }
    /** @type {?} */
    var res = [];
    /** @type {?} */
    var cur = (stop === undefined) ? 0 : start;
    /** @type {?} */
    var max = (stop === undefined) ? start : stop;
    for (var i = cur; step < 0 ? i > max : i < max; i += step) {
        res.push(i);
    }
    return res;
}
/**
 * Returns true for leap years, false for non-leap years.
 *
 * @export
 * @param {?} year
 * @return {?}
 */
export function isLeap(year) {
    return (year % 4 === 0) && ((year % 100 !== 0) || (year % 400 === 0));
}
/**
 * @param {?} year
 * @param {?} month
 * @param {?} day
 * @return {?}
 */
export function weekDay(year, month, day) {
    return new Date(year, month, day).getDay();
}
/**
 * Return weekday and number of days for year, month.
 *
 * @export
 * @param {?} year
 * @param {?} month
 * @return {?}
 */
export function monthRange(year, month) {
    if ((month < 0) || (month > 11)) {
        throw new Error('Invalid month specified');
    }
    /** @type {?} */
    var day = weekDay(year, month, 1);
    /** @type {?} */
    var nDays = MDAYS[month];
    if ((month === FEBRUARY) && (isLeap(year))) {
        nDays++;
    }
    return [day, nDays];
}
/**
 * @param {?} date
 * @param {?} ranges
 * @return {?}
 */
export function isDateInRanges(date, ranges) {
    var e_1, _a, e_2, _b;
    date = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    /** @type {?} */
    var dateInMs = date.getTime();
    try {
        for (var ranges_1 = tslib_1.__values(ranges), ranges_1_1 = ranges_1.next(); !ranges_1_1.done; ranges_1_1 = ranges_1.next()) {
            var descriptor = ranges_1_1.value;
            /** @type {?} */
            var dRanges = descriptor.dateRange ? descriptor.dateRange.map(function (r) { return new Date(r.getFullYear(), r.getMonth(), r.getDate()); }) : undefined;
            switch (descriptor.type) {
                case (DateRangeType.After):
                    if (dateInMs > dRanges[0].getTime()) {
                        return true;
                    }
                    break;
                case (DateRangeType.Before):
                    if (dateInMs < dRanges[0].getTime()) {
                        return true;
                    }
                    break;
                case (DateRangeType.Between):
                    /** @type {?} */
                    var dRange = dRanges.map(function (d) { return d.getTime(); });
                    /** @type {?} */
                    var min = Math.min(dRange[0], dRange[1]);
                    /** @type {?} */
                    var max = Math.max(dRange[0], dRange[1]);
                    if (dateInMs >= min && dateInMs <= max) {
                        return true;
                    }
                    break;
                case (DateRangeType.Specific):
                    /** @type {?} */
                    var datesInMs = dRanges.map(function (d) { return d.getTime(); });
                    try {
                        for (var datesInMs_1 = tslib_1.__values(datesInMs), datesInMs_1_1 = datesInMs_1.next(); !datesInMs_1_1.done; datesInMs_1_1 = datesInMs_1.next()) {
                            var specificDateInMs = datesInMs_1_1.value;
                            if (dateInMs === specificDateInMs) {
                                return true;
                            }
                        }
                    }
                    catch (e_2_1) { e_2 = { error: e_2_1 }; }
                    finally {
                        try {
                            if (datesInMs_1_1 && !datesInMs_1_1.done && (_b = datesInMs_1.return)) _b.call(datesInMs_1);
                        }
                        finally { if (e_2) throw e_2.error; }
                    }
                    break;
                case (DateRangeType.Weekdays):
                    /** @type {?} */
                    var day = date.getDay();
                    if (day % 6 !== 0) {
                        return true;
                    }
                    break;
                case (DateRangeType.Weekends):
                    /** @type {?} */
                    var weekday = date.getDay();
                    if (weekday % 6 === 0) {
                        return true;
                    }
                    break;
                default:
                    return false;
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (ranges_1_1 && !ranges_1_1.done && (_a = ranges_1.return)) _a.call(ranges_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return false;
}
/**
 * @record
 */
export function ICalendarDate() { }
if (false) {
    /** @type {?} */
    ICalendarDate.prototype.date;
    /** @type {?} */
    ICalendarDate.prototype.isCurrentMonth;
    /** @type {?} */
    ICalendarDate.prototype.isPrevMonth;
    /** @type {?} */
    ICalendarDate.prototype.isNextMonth;
}
/**
 * @record
 */
export function IFormattedParts() { }
if (false) {
    /** @type {?} */
    IFormattedParts.prototype.value;
    /** @type {?|undefined} */
    IFormattedParts.prototype.literal;
    /** @type {?} */
    IFormattedParts.prototype.combined;
}
/**
 * @record
 */
export function IFormattingOptions() { }
if (false) {
    /** @type {?|undefined} */
    IFormattingOptions.prototype.day;
    /** @type {?|undefined} */
    IFormattingOptions.prototype.month;
    /** @type {?|undefined} */
    IFormattingOptions.prototype.weekday;
    /** @type {?|undefined} */
    IFormattingOptions.prototype.year;
}
/**
 * @record
 */
export function IFormattingViews() { }
if (false) {
    /** @type {?|undefined} */
    IFormattingViews.prototype.day;
    /** @type {?|undefined} */
    IFormattingViews.prototype.month;
    /** @type {?|undefined} */
    IFormattingViews.prototype.year;
}
/** @enum {number} */
var WEEKDAYS = {
    SUNDAY: 0,
    MONDAY: 1,
    TUESDAY: 2,
    WEDNESDAY: 3,
    THURSDAY: 4,
    FRIDAY: 5,
    SATURDAY: 6,
};
export { WEEKDAYS };
WEEKDAYS[WEEKDAYS.SUNDAY] = 'SUNDAY';
WEEKDAYS[WEEKDAYS.MONDAY] = 'MONDAY';
WEEKDAYS[WEEKDAYS.TUESDAY] = 'TUESDAY';
WEEKDAYS[WEEKDAYS.WEDNESDAY] = 'WEDNESDAY';
WEEKDAYS[WEEKDAYS.THURSDAY] = 'THURSDAY';
WEEKDAYS[WEEKDAYS.FRIDAY] = 'FRIDAY';
WEEKDAYS[WEEKDAYS.SATURDAY] = 'SATURDAY';
var Calendar = /** @class */ (function () {
    function Calendar(firstWeekDay) {
        if (firstWeekDay === void 0) { firstWeekDay = WEEKDAYS.SUNDAY; }
        this._firstWeekDay = firstWeekDay;
    }
    Object.defineProperty(Calendar.prototype, "firstWeekDay", {
        get: /**
         * @return {?}
         */
        function () {
            return this._firstWeekDay % 7;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._firstWeekDay = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Returns an array of weekdays for one week starting
     * with the currently set `firstWeekDay`
     *
     * this.firstWeekDay = 0 (Sunday) --> [0, 1, 2, 3, 4, 5, 6]
     * this.firstWeekDay = 1 (Monday) --> [1, 2, 3, 4, 5, 6, 0]
     *
     * @returns
     *
     * @memberof Calendar
     */
    /**
     * Returns an array of weekdays for one week starting
     * with the currently set `firstWeekDay`
     *
     * this.firstWeekDay = 0 (Sunday) --> [0, 1, 2, 3, 4, 5, 6]
     * this.firstWeekDay = 1 (Monday) --> [1, 2, 3, 4, 5, 6, 0]
     *
     * \@memberof Calendar
     * @return {?}
     *
     */
    Calendar.prototype.weekdays = /**
     * Returns an array of weekdays for one week starting
     * with the currently set `firstWeekDay`
     *
     * this.firstWeekDay = 0 (Sunday) --> [0, 1, 2, 3, 4, 5, 6]
     * this.firstWeekDay = 1 (Monday) --> [1, 2, 3, 4, 5, 6, 0]
     *
     * \@memberof Calendar
     * @return {?}
     *
     */
    function () {
        var e_3, _a;
        /** @type {?} */
        var res = [];
        try {
            for (var _b = tslib_1.__values(range(this.firstWeekDay, this.firstWeekDay + 7)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var i = _c.value;
                res.push(i % 7);
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_3) throw e_3.error; }
        }
        return res;
    };
    /**
     * Returns the date values for one month. It will always iterate throught
     * complete weeks, so it will contain dates outside the specified month.
     *
     * @param year
     * @param month
     * @param boolean
     * @returns
     *
     * @memberof Calendar
     */
    /**
     * Returns the date values for one month. It will always iterate throught
     * complete weeks, so it will contain dates outside the specified month.
     *
     * \@memberof Calendar
     * @param {?} year
     * @param {?} month
     * @param {?=} extraWeek
     * @return {?}
     *
     */
    Calendar.prototype.monthdates = /**
     * Returns the date values for one month. It will always iterate throught
     * complete weeks, so it will contain dates outside the specified month.
     *
     * \@memberof Calendar
     * @param {?} year
     * @param {?} month
     * @param {?=} extraWeek
     * @return {?}
     *
     */
    function (year, month, extraWeek) {
        var e_4, _a;
        if (extraWeek === void 0) { extraWeek = false; }
        /** @type {?} */
        var date = new Date(year, month, 1);
        /** @type {?} */
        var days = (date.getDay() - this.firstWeekDay) % 7;
        if (days < 0) {
            days = 7 - Math.abs(days);
        }
        date = this.timedelta(date, 'day', -days);
        /** @type {?} */
        var res = [];
        /** @type {?} */
        var value;
        while (true) {
            value = this.generateICalendarDate(date, year, month);
            res.push(value);
            date = this.timedelta(date, 'day', 1);
            if ((date.getMonth() !== month) && (date.getDay() === this.firstWeekDay)) {
                if (extraWeek && res.length <= 35) {
                    try {
                        for (var _b = tslib_1.__values(range(0, 7)), _c = _b.next(); !_c.done; _c = _b.next()) {
                            var i = _c.value;
                            value = this.generateICalendarDate(date, year, month);
                            res.push(value);
                            date = this.timedelta(date, 'day', 1);
                        }
                    }
                    catch (e_4_1) { e_4 = { error: e_4_1 }; }
                    finally {
                        try {
                            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                        }
                        finally { if (e_4) throw e_4.error; }
                    }
                }
                break;
            }
        }
        return res;
    };
    /**
     * Returns a matrix (array of arrays) representing a month's calendar.
     * Each row represents a full week; week entries are ICalendarDate objects.
     *
     * @param year
     * @param month
     * @returns
     *
     * @memberof Calendar
     */
    /**
     * Returns a matrix (array of arrays) representing a month's calendar.
     * Each row represents a full week; week entries are ICalendarDate objects.
     *
     * \@memberof Calendar
     * @param {?} year
     * @param {?} month
     * @param {?=} extraWeek
     * @return {?}
     *
     */
    Calendar.prototype.monthdatescalendar = /**
     * Returns a matrix (array of arrays) representing a month's calendar.
     * Each row represents a full week; week entries are ICalendarDate objects.
     *
     * \@memberof Calendar
     * @param {?} year
     * @param {?} month
     * @param {?=} extraWeek
     * @return {?}
     *
     */
    function (year, month, extraWeek) {
        var e_5, _a;
        if (extraWeek === void 0) { extraWeek = false; }
        /** @type {?} */
        var dates = this.monthdates(year, month, extraWeek);
        /** @type {?} */
        var res = [];
        try {
            for (var _b = tslib_1.__values(range(0, dates.length, 7)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var i = _c.value;
                res.push(dates.slice(i, i + 7));
            }
        }
        catch (e_5_1) { e_5 = { error: e_5_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_5) throw e_5.error; }
        }
        return res;
    };
    /**
     * @param {?} date
     * @param {?} interval
     * @param {?} units
     * @return {?}
     */
    Calendar.prototype.timedelta = /**
     * @param {?} date
     * @param {?} interval
     * @param {?} units
     * @return {?}
     */
    function (date, interval, units) {
        /** @type {?} */
        var ret = new Date(date);
        /** @type {?} */
        var checkRollover = function () {
            if (ret.getDate() !== date.getDate()) {
                ret.setDate(0);
            }
        };
        switch (interval.toLowerCase()) {
            case 'year':
                ret.setFullYear(ret.getFullYear() + units);
                checkRollover();
                break;
            case 'quarter':
                ret.setMonth(ret.getMonth() + 3 * units);
                checkRollover();
                break;
            case 'month':
                ret.setMonth(ret.getMonth() + units);
                checkRollover();
                break;
            case 'week':
                ret.setDate(ret.getDate() + 7 * units);
                break;
            case 'day':
                ret.setDate(ret.getDate() + units);
                break;
            case 'hour':
                ret.setTime(ret.getTime() + units * 3600000);
                break;
            case 'minute':
                ret.setTime(ret.getTime() + units * 60000);
                break;
            case 'second':
                ret.setTime(ret.getTime() + units * 1000);
                break;
            default:
                throw new Error('Invalid interval specifier');
        }
        return ret;
    };
    /**
     * @param {?} date
     * @param {?} locale
     * @param {?} options
     * @param {?} parts
     * @return {?}
     */
    Calendar.prototype.formatToParts = /**
     * @param {?} date
     * @param {?} locale
     * @param {?} options
     * @param {?} parts
     * @return {?}
     */
    function (date, locale, options, parts) {
        var e_6, _a, e_7, _b;
        /** @type {?} */
        var formatter = new Intl.DateTimeFormat(locale, options);
        /** @type {?} */
        var result = {
            date: date,
            full: formatter.format(date)
        };
        if (((/** @type {?} */ (formatter))).formatToParts) {
            /** @type {?} */
            var formattedParts_1 = ((/** @type {?} */ (formatter))).formatToParts(date);
            /** @type {?} */
            var toType = function (partType) {
                /** @type {?} */
                var index = formattedParts_1.findIndex(function (_a) {
                    var type = _a.type;
                    return type === partType;
                });
                /** @type {?} */
                var o = { value: '', literal: '', combined: '' };
                if (partType === 'era' && index > -1) {
                    o.value = formattedParts_1[index].value;
                    return o;
                }
                else if (partType === 'era' && index === -1) {
                    return o;
                }
                o.value = formattedParts_1[index].value;
                o.literal = formattedParts_1[index + 1] ? formattedParts_1[index + 1].value : '';
                o.combined = [o.value, o.literal].join('');
                return o;
            };
            try {
                for (var parts_1 = tslib_1.__values(parts), parts_1_1 = parts_1.next(); !parts_1_1.done; parts_1_1 = parts_1.next()) {
                    var each = parts_1_1.value;
                    result[each] = toType(each);
                }
            }
            catch (e_6_1) { e_6 = { error: e_6_1 }; }
            finally {
                try {
                    if (parts_1_1 && !parts_1_1.done && (_a = parts_1.return)) _a.call(parts_1);
                }
                finally { if (e_6) throw e_6.error; }
            }
        }
        else {
            try {
                for (var parts_2 = tslib_1.__values(parts), parts_2_1 = parts_2.next(); !parts_2_1.done; parts_2_1 = parts_2.next()) {
                    var each = parts_2_1.value;
                    result[each] = { value: '', literal: '', combined: '' };
                }
            }
            catch (e_7_1) { e_7 = { error: e_7_1 }; }
            finally {
                try {
                    if (parts_2_1 && !parts_2_1.done && (_b = parts_2.return)) _b.call(parts_2);
                }
                finally { if (e_7) throw e_7.error; }
            }
        }
        return result;
    };
    /**
     * @private
     * @param {?} date
     * @param {?} year
     * @param {?} month
     * @return {?}
     */
    Calendar.prototype.generateICalendarDate = /**
     * @private
     * @param {?} date
     * @param {?} year
     * @param {?} month
     * @return {?}
     */
    function (date, year, month) {
        return {
            date: date,
            isCurrentMonth: date.getFullYear() === year && date.getMonth() === month,
            isNextMonth: this.isNextMonth(date, year, month),
            isPrevMonth: this.isPreviousMonth(date, year, month)
        };
    };
    /**
     * @private
     * @param {?} date
     * @param {?} year
     * @param {?} month
     * @return {?}
     */
    Calendar.prototype.isPreviousMonth = /**
     * @private
     * @param {?} date
     * @param {?} year
     * @param {?} month
     * @return {?}
     */
    function (date, year, month) {
        if (date.getFullYear() === year) {
            return date.getMonth() < month;
        }
        return date.getFullYear() < year;
    };
    /**
     * @private
     * @param {?} date
     * @param {?} year
     * @param {?} month
     * @return {?}
     */
    Calendar.prototype.isNextMonth = /**
     * @private
     * @param {?} date
     * @param {?} year
     * @param {?} month
     * @return {?}
     */
    function (date, year, month) {
        if (date.getFullYear() === year) {
            return date.getMonth() > month;
        }
        return date.getFullYear() > year;
    };
    return Calendar;
}());
export { Calendar };
if (false) {
    /**
     * @type {?}
     * @private
     */
    Calendar.prototype._firstWeekDay;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9pZ25pdGV1aS1hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL2NhbGVuZGFyL2NhbGVuZGFyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUF1QixhQUFhLEVBQUUsTUFBTSxlQUFlLENBQUM7O0lBRTdELEtBQUssR0FBRyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDOztJQUN4RCxRQUFRLEdBQUcsQ0FBQzs7Ozs7OztBQUVsQixNQUFNLFVBQVUsS0FBSyxDQUFDLEtBQVMsRUFBRSxJQUFJLEVBQUUsSUFBUTtJQUF6QixzQkFBQSxFQUFBLFNBQVM7SUFBUSxxQkFBQSxFQUFBLFFBQVE7O1FBQ3JDLEdBQUcsR0FBRyxFQUFFOztRQUNSLEdBQUcsR0FBRyxDQUFDLElBQUksS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLOztRQUN0QyxHQUFHLEdBQUcsQ0FBQyxJQUFJLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSTtJQUMvQyxLQUFLLElBQUksQ0FBQyxHQUFHLEdBQUcsRUFBRSxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsSUFBSSxJQUFJLEVBQUU7UUFDdkQsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUNmO0lBQ0QsT0FBTyxHQUFHLENBQUM7QUFDZixDQUFDOzs7Ozs7OztBQVNELE1BQU0sVUFBVSxNQUFNLENBQUMsSUFBWTtJQUMvQixPQUFPLENBQUMsSUFBSSxH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QUFDO1NBQ3ZELENBQUM7SUFDTixDQUFDOzs7Ozs7OztJQUVPLGtDQUFlOzs7Ozs7O0lBQXZCLFVBQXdCLElBQVUsRUFBRSxJQUFZLEVBQUUsS0FBYTtRQUMzRCxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUUsS0FBSyxJQUFJLEVBQUU7WUFDN0IsT0FBTyxJQUFJLENBQUMsUUFBUSxFQUFFLEdBQUcsS0FBSyxDQUFDO1NBQ2xDO1FBQ0QsT0FBTyxJQUFJLENBQUMsV0FBVyxFQUFFLEdBQUcsSUFBSSxDQUFDO0lBQ3JDLENBQUM7Ozs7Ozs7O0lBRU8sOEJBQVc7Ozs7Ozs7SUFBbkIsVUFBb0IsSUFBVSxFQUFFLElBQVksRUFBRSxLQUFhO1FBQ3ZELElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRSxLQUFLLElBQUksRUFBRTtZQUM3QixPQUFPLElBQUksQ0FBQyxRQUFRLEVBQUUsR0FBRyxLQUFLLENBQUM7U0FDbEM7UUFFRCxPQUFPLElBQUksQ0FBQyxXQUFXLEVBQUUsR0FBRyxJQUFJLENBQUM7SUFDckMsQ0FBQztJQUNMLGVBQUM7QUFBRCxDQUFDLEFBeE1ELElBd01DOzs7Ozs7O0lBdE1HLGlDQUF5QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGVSYW5nZURlc2NyaXB0b3IsIERhdGVSYW5nZVR5cGUgfSBmcm9tICcuLi9jb3JlL2RhdGVzJztcblxuY29uc3QgTURBWVMgPSBbMzEsIDI4LCAzMSwgMzAsIDMxLCAzMCwgMzEsIDMxLCAzMCwgMzEsIDMwLCAzMV07XG5jb25zdCBGRUJSVUFSWSA9IDE7XG5cbmV4cG9ydCBmdW5jdGlvbiByYW5nZShzdGFydCA9IDAsIHN0b3AsIHN0ZXAgPSAxKSB7XG4gICAgY29uc3QgcmVzID0gW107XG4gICAgY29uc3QgY3VyID0gKHN0b3AgPT09IHVuZGVmaW5lZCkgPyAwIDogc3RhcnQ7XG4gICAgY29uc3QgbWF4ID0gKHN0b3AgPT09IHVuZGVmaW5lZCkgPyBzdGFydCA6IHN0b3A7XG4gICAgZm9yIChsZXQgaSA9IGN1cjsgc3RlcCA8IDAgPyBpID4gbWF4IDogaSA8IG1heDsgaSArPSBzdGVwKSB7XG4gICAgICAgIHJlcy5wdXNoKGkpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzO1xufVxuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBmb3IgbGVhcCB5ZWFycywgZmFsc2UgZm9yIG5vbi1sZWFwIHllYXJzLlxuICpcbiAqIEBleHBvcnRcbiAqIEBwYXJhbSB5ZWFyXG4gKiBAcmV0dXJuc1xuICovXG5leHBvcnQgZnVuY3Rpb24gaXNMZWFwKHllYXI6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoeWVhciAlIDQgPT09IDApICYmICgoeWVhciAlIDEwMCAhPT0gMCkgfHwgKHllYXIgJSA0MDAgPT09IDApKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHdlZWtEYXkoeWVhcjogbnVtYmVyLCBtb250aDogbnVtYmVyLCBkYXk6IG51bWJlcik6IG51bWJlciB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKHllYXIsIG1vbnRoLCBkYXkpLmdldERheSgpO1xufVxuXG4vKipcbiAqIFJldHVybiB3ZWVrZGF5IGFuZCBudW1iZXIgb2YgZGF5cyBmb3IgeWVhciwgbW9udGguXG4gKlxuICogQGV4cG9ydFxuICogQHBhcmFtIHllYXJcbiAqIEBwYXJhbSBtb250aFxuICogQHJldHVybnNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1vbnRoUmFuZ2UoeWVhcjogbnVtYmVyLCBtb250aDogbnVtYmVyKTogbnVtYmVyW10ge1xuICAgIGlmICgobW9udGggPCAwKSB8fCAobW9udGggPiAxMSkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIG1vbnRoIHNwZWNpZmllZCcpO1xuICAgIH1cbiAgICBjb25zdCBkYXkgPSB3ZWVrRGF5KHllYXIsIG1vbnRoLCAxKTtcbiAgICBsZXQgbkRheXMgPSBNREFZU1ttb250aF07XG4gICAgaWYgKChtb250aCA9PT0gRkVCUlVBUlkpICYmIChpc0xlYXAoeWVhcikpKSB7XG4gICAgICAgIG5EYXlzKys7XG4gICAgfVxuICAgIHJldHVybiBbZGF5LCBuRGF5c107XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0RhdGVJblJhbmdlcyhkYXRlOiBEYXRlLCByYW5nZXM6IERhdGVSYW5nZURlc2NyaXB0b3JbXSk6IGJvb2xlYW4ge1xuICAgIGRhdGUgPSBuZXcgRGF0ZShkYXRlLmdldEZ1bGxZZWFyKCksIGRhdGUuZ2V0TW9udGgoKSwgZGF0ZS5nZXREYXRlKCkpO1xuICAgIGNvbnN0IGRhdGVJbk1zID0gZGF0ZS5nZXRUaW1lKCk7XG5cbiAgICBmb3IgKGNvbnN0IGRlc2NyaXB0b3Igb2YgcmFuZ2VzKSB7XG4gICAgICAgIGNvbnN0IGRSYW5nZXMgPSBkZXNjcmlwdG9yLmRhdGVSYW5nZSA/IGRlc2NyaXB0b3IuZGF0ZVJhbmdlLm1hcChcbiAgICAgICAgICAgIHIgPT4gbmV3IERhdGUoci5nZXRGdWxsWWVhcigpLCByLmdldE1vbnRoKCksIHIuZ2V0RGF0ZSgpKSkgOiB1bmRlZmluZWQ7XG4gICAgICAgIHN3aXRjaCAoZGVzY3JpcHRvci50eXBlKSB7XG4gICAgICAgICAgICBjYXNlIChEYXRlUmFuZ2VUeXBlLkFmdGVyKTpcbiAgICAgICAgICAgICAgICBpZiAoZGF0ZUluTXMgPiBkUmFuZ2VzWzBdLmdldFRpbWUoKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgKERhdGVSYW5nZVR5cGUuQmVmb3JlKTpcbiAgICAgICAgICAgICAgICBpZiAoZGF0ZUluTXMgPCBkUmFuZ2VzWzBdLmdldFRpbWUoKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgKERhdGVSYW5nZVR5cGUuQmV0d2Vlbik6XG4gICAgICAgICAgICAgICAgY29uc3QgZFJhbmdlID0gZFJhbmdlcy5tYXAoZCA9PiBkLmdldFRpbWUoKSk7XG4gICAgICAgICAgICAgICAgY29uc3QgbWluID0gTWF0aC5taW4oZFJhbmdlWzBdLCBkUmFuZ2VbMV0pO1xuICAgICAgICAgICAgICAgIGNvbnN0IG1heCA9IE1hdGgubWF4KGRSYW5nZVswXSwgZFJhbmdlWzFdKTtcbiAgICAgICAgICAgICAgICBpZiAoZGF0ZUluTXMgPj0gbWluICYmIGRhdGVJbk1zIDw9IG1heCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgKERhdGVSYW5nZVR5cGUuU3BlY2lmaWMpOlxuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGVzSW5NcyA9IGRSYW5nZXMubWFwKGQgPT4gZC5nZXRUaW1lKCkpO1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3Qgc3BlY2lmaWNEYXRlSW5NcyBvZiBkYXRlc0luTXMpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGVJbk1zID09PSBzcGVjaWZpY0RhdGVJbk1zKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAoRGF0ZVJhbmdlVHlwZS5XZWVrZGF5cyk6XG4gICAgICAgICAgICAgICAgY29uc3QgZGF5ID0gZGF0ZS5nZXREYXkoKTtcbiAgICAgICAgICAgICAgICBpZiAoZGF5ICUgNiAhPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgKERhdGVSYW5nZVR5cGUuV2Vla2VuZHMpOlxuICAgICAgICAgICAgICAgIGNvbnN0IHdlZWtkYXkgPSBkYXRlLmdldERheSgpO1xuICAgICAgICAgICAgICAgIGlmICh3ZWVrZGF5ICUgNiA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElDYWxlbmRhckRhdGUge1xuICAgIGRhdGU6IERhdGU7XG4gICAgaXNDdXJyZW50TW9udGg6IGJvb2xlYW47XG4gICAgaXNQcmV2TW9udGg6IGJvb2xlYW47XG4gICAgaXNOZXh0TW9udGg6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUZvcm1hdHRlZFBhcnRzIHtcbiAgICB2YWx1ZTogc3RyaW5nO1xuICAgIGxpdGVyYWw/OiBzdHJpbmc7XG4gICAgY29tYmluZWQ6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJRm9ybWF0dGluZ09wdGlvbnMge1xuICAgIGRheT86IHN0cmluZztcbiAgICBtb250aD86IHN0cmluZztcbiAgICB3ZWVrZGF5Pzogc3RyaW5nO1xuICAgIHllYXI/OiBzdHJpbmc7XG59XG5cblxuZXhwb3J0IGludGVyZmFjZSBJRm9ybWF0dGluZ1ZpZXdzIHtcbiAgICBkYXk/OiBib29sZWFuO1xuICAgIG1vbnRoPzogYm9vbGVhbjtcbiAgICB5ZWFyPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGVudW0gV0VFS0RBWVMge1xuICAgIFNVTkRBWSA9IDAsXG4gICAgTU9OREFZID0gMSxcbiAgICBUVUVTREFZID0gMixcbiAgICBXRURORVNEQVkgPSAzLFxuICAgIFRIVVJTREFZID0gNCxcbiAgICBGUklEQVkgPSA1LFxuICAgIFNBVFVSREFZID0gNlxufVxuXG5leHBvcnQgY2xhc3MgQ2FsZW5kYXIge1xuXG4gICAgcHJpdmF0ZSBfZmlyc3RXZWVrRGF5OiBudW1iZXIgfCBXRUVLREFZUztcblxuICAgIGNvbnN0cnVjdG9yKGZpcnN0V2Vla0RheTogbnVtYmVyIHwgV0VFS0RBWVMgPSBXRUVLREFZUy5TVU5EQVkpIHtcbiAgICAgICAgdGhpcy5fZmlyc3RXZWVrRGF5ID0gZmlyc3RXZWVrRGF5O1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgZmlyc3RXZWVrRGF5KCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9maXJzdFdlZWtEYXkgJSA3O1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgZmlyc3RXZWVrRGF5KHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fZmlyc3RXZWVrRGF5ID0gdmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbiBhcnJheSBvZiB3ZWVrZGF5cyBmb3Igb25lIHdlZWsgc3RhcnRpbmdcbiAgICAgKiB3aXRoIHRoZSBjdXJyZW50bHkgc2V0IGBmaXJzdFdlZWtEYXlgXG4gICAgICpcbiAgICAgKiB0aGlzLmZpcnN0V2Vla0RheSA9IDAgKFN1bmRheSkgLS0+IFswLCAxLCAyLCAzLCA0LCA1LCA2XVxuICAgICAqIHRoaXMuZmlyc3RXZWVrRGF5ID0gMSAoTW9uZGF5KSAtLT4gWzEsIDIsIDMsIDQsIDUsIDYsIDBdXG4gICAgICpcbiAgICAgKiBAcmV0dXJuc1xuICAgICAqXG4gICAgICogQG1lbWJlcm9mIENhbGVuZGFyXG4gICAgICovXG4gICAgcHVibGljIHdlZWtkYXlzKCk6IG51bWJlcltdIHtcbiAgICAgICAgY29uc3QgcmVzID0gW107XG4gICAgICAgIGZvciAoY29uc3QgaSBvZiByYW5nZSh0aGlzLmZpcnN0V2Vla0RheSwgdGhpcy5maXJzdFdlZWtEYXkgKyA3KSkge1xuICAgICAgICAgICAgcmVzLnB1c2goaSAlIDcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgZGF0ZSB2YWx1ZXMgZm9yIG9uZSBtb250aC4gSXQgd2lsbCBhbHdheXMgaXRlcmF0ZSB0aHJvdWdodFxuICAgICAqIGNvbXBsZXRlIHdlZWtzLCBzbyBpdCB3aWxsIGNvbnRhaW4gZGF0ZXMgb3V0c2lkZSB0aGUgc3BlY2lmaWVkIG1vbnRoLlxuICAgICAqXG4gICAgICogQHBhcmFtIHllYXJcbiAgICAgKiBAcGFyYW0gbW9udGhcbiAgICAgKiBAcGFyYW0gYm9vbGVhblxuICAgICAqIEByZXR1cm5zXG4gICAgICpcbiAgICAgKiBAbWVtYmVyb2YgQ2FsZW5kYXJcbiAgICAgKi9cbiAgICBwdWJsaWMgbW9udGhkYXRlcyh5ZWFyOiBudW1iZXIsIG1vbnRoOiBudW1iZXIsIGV4dHJhV2VlazogYm9vbGVhbiA9IGZhbHNlKTogSUNhbGVuZGFyRGF0ZVtdIHtcbiAgICAgICAgbGV0IGRhdGUgPSBuZXcgRGF0ZSh5ZWFyLCBtb250aCwgMSk7XG4gICAgICAgIGxldCBkYXlzID0gKGRhdGUuZ2V0RGF5KCkgLSB0aGlzLmZpcnN0V2Vla0RheSkgJSA3O1xuICAgICAgICBpZiAoZGF5cyA8IDApIHtcbiAgICAgICAgICAgIGRheXMgPSA3IC0gTWF0aC5hYnMoZGF5cyk7XG4gICAgICAgIH1cbiAgICAgICAgZGF0ZSA9IHRoaXMudGltZWRlbHRhKGRhdGUsICdkYXknLCAtZGF5cyk7XG4gICAgICAgIGNvbnN0IHJlcyA9IFtdO1xuICAgICAgICBsZXQgdmFsdWU6IElDYWxlbmRhckRhdGU7XG5cbiAgICAgICAgd2hpbGUgKHRydWUpIHtcblxuICAgICAgICAgICAgdmFsdWUgPSB0aGlzLmdlbmVyYXRlSUNhbGVuZGFyRGF0ZShkYXRlLCB5ZWFyLCBtb250aCk7XG4gICAgICAgICAgICByZXMucHVzaCh2YWx1ZSk7XG5cbiAgICAgICAgICAgIGRhdGUgPSB0aGlzLnRpbWVkZWx0YShkYXRlLCAnZGF5JywgMSk7XG5cbiAgICAgICAgICAgIGlmICgoZGF0ZS5nZXRNb250aCgpICE9PSBtb250aCkgJiYgKGRhdGUuZ2V0RGF5KCkgPT09IHRoaXMuZmlyc3RXZWVrRGF5KSkge1xuICAgICAgICAgICAgICAgIGlmIChleHRyYVdlZWsgJiYgcmVzLmxlbmd0aCA8PSAzNSkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGkgb2YgcmFuZ2UoMCwgNykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gdGhpcy5nZW5lcmF0ZUlDYWxlbmRhckRhdGUoZGF0ZSwgeWVhciwgbW9udGgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzLnB1c2godmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZSA9IHRoaXMudGltZWRlbHRhKGRhdGUsICdkYXknLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSBtYXRyaXggKGFycmF5IG9mIGFycmF5cykgcmVwcmVzZW50aW5nIGEgbW9udGgncyBjYWxlbmRhci5cbiAgICAgKiBFYWNoIHJvdyByZXByZXNlbnRzIGEgZnVsbCB3ZWVrOyB3ZWVrIGVudHJpZXMgYXJlIElDYWxlbmRhckRhdGUgb2JqZWN0cy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB5ZWFyXG4gICAgICogQHBhcmFtIG1vbnRoXG4gICAgICogQHJldHVybnNcbiAgICAgKlxuICAgICAqIEBtZW1iZXJvZiBDYWxlbmRhclxuICAgICAqL1xuICAgIHB1YmxpYyBtb250aGRhdGVzY2FsZW5kYXIoeWVhcjogbnVtYmVyLCBtb250aDogbnVtYmVyLCBleHRyYVdlZWs6IGJvb2xlYW4gPSBmYWxzZSk6IElDYWxlbmRhckRhdGVbXVtdIHtcbiAgICAgICAgY29uc3QgZGF0ZXMgPSB0aGlzLm1vbnRoZGF0ZXMoeWVhciwgbW9udGgsIGV4dHJhV2Vlayk7XG4gICAgICAgIGNvbnN0IHJlcyA9IFtdO1xuICAgICAgICBmb3IgKGNvbnN0IGkgb2YgcmFuZ2UoMCwgZGF0ZXMubGVuZ3RoLCA3KSkge1xuICAgICAgICAgICAgcmVzLnB1c2goZGF0ZXMuc2xpY2UoaSwgaSArIDcpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzO1xuICAgIH1cblxuICAgIHB1YmxpYyB0aW1lZGVsdGEoZGF0ZTogRGF0ZSwgaW50ZXJ2YWw6IHN0cmluZywgdW5pdHM6IG51bWJlcik6IERhdGUge1xuICAgICAgICBjb25zdCByZXQgPSBuZXcgRGF0ZShkYXRlKTtcblxuICAgICAgICBjb25zdCBjaGVja1JvbGxvdmVyID0gKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHJldC5nZXREYXRlKCkgIT09IGRhdGUuZ2V0RGF0ZSgpKSB7XG4gICAgICAgICAgICAgICAgcmV0LnNldERhdGUoMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgc3dpdGNoIChpbnRlcnZhbC50b0xvd2VyQ2FzZSgpKSB7XG4gICAgICAgICAgICBjYXNlICd5ZWFyJzpcbiAgICAgICAgICAgICAgICByZXQuc2V0RnVsbFllYXIocmV0LmdldEZ1bGxZZWFyKCkgKyB1bml0cyk7XG4gICAgICAgICAgICAgICAgY2hlY2tSb2xsb3ZlcigpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAncXVhcnRlcic6XG4gICAgICAgICAgICAgICAgcmV0LnNldE1vbnRoKHJldC5nZXRNb250aCgpICsgMyAqIHVuaXRzKTtcbiAgICAgICAgICAgICAgICBjaGVja1JvbGxvdmVyKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdtb250aCc6XG4gICAgICAgICAgICAgICAgcmV0LnNldE1vbnRoKHJldC5nZXRNb250aCgpICsgdW5pdHMpO1xuICAgICAgICAgICAgICAgIGNoZWNrUm9sbG92ZXIoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3dlZWsnOlxuICAgICAgICAgICAgICAgIHJldC5zZXREYXRlKHJldC5nZXREYXRlKCkgKyA3ICogdW5pdHMpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnZGF5JzpcbiAgICAgICAgICAgICAgICByZXQuc2V0RGF0ZShyZXQuZ2V0RGF0ZSgpICsgdW5pdHMpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnaG91cic6XG4gICAgICAgICAgICAgICAgcmV0LnNldFRpbWUocmV0LmdldFRpbWUoKSArIHVuaXRzICogMzYwMDAwMCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdtaW51dGUnOlxuICAgICAgICAgICAgICAgIHJldC5zZXRUaW1lKHJldC5nZXRUaW1lKCkgKyB1bml0cyAqIDYwMDAwKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3NlY29uZCc6XG4gICAgICAgICAgICAgICAgcmV0LnNldFRpbWUocmV0LmdldFRpbWUoKSArIHVuaXRzICogMTAwMCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBpbnRlcnZhbCBzcGVjaWZpZXInKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmV0O1xuICAgIH1cblxuICAgIHB1YmxpYyBmb3JtYXRUb1BhcnRzKGRhdGU6IERhdGUsIGxvY2FsZTogc3RyaW5nLCBvcHRpb25zOiBhbnksIHBhcnRzOiBzdHJpbmdbXSkge1xuICAgICAgICBjb25zdCBmb3JtYXR0ZXIgPSBuZXcgSW50bC5EYXRlVGltZUZvcm1hdChsb2NhbGUsIG9wdGlvbnMpO1xuICAgICAgICBjb25zdCByZXN1bHQgPSB7XG4gICAgICAgICAgICBkYXRlLFxuICAgICAgICAgICAgZnVsbDogZm9ybWF0dGVyLmZvcm1hdChkYXRlKVxuICAgICAgICB9O1xuXG4gICAgICAgIGlmICgoZm9ybWF0dGVyIGFzIGFueSkuZm9ybWF0VG9QYXJ0cykge1xuICAgICAgICAgICAgY29uc3QgZm9ybWF0dGVkUGFydHMgPSAoZm9ybWF0dGVyIGFzIGFueSkuZm9ybWF0VG9QYXJ0cyhkYXRlKTtcblxuICAgICAgICAgICAgY29uc3QgdG9UeXBlID0gKHBhcnRUeXBlOiBzdHJpbmcpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBpbmRleCA9IGZvcm1hdHRlZFBhcnRzLmZpbmRJbmRleCgoeyB0eXBlIH0pID0+IHR5cGUgPT09IHBhcnRUeXBlKTtcbiAgICAgICAgICAgICAgICBjb25zdCBvOiBJRm9ybWF0dGVkUGFydHMgPSB7IHZhbHVlOiAnJywgbGl0ZXJhbDogJycsIGNvbWJpbmVkOiAnJ307XG5cbiAgICAgICAgICAgICAgICBpZiAocGFydFR5cGUgPT09ICdlcmEnICYmIGluZGV4ID4gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgby52YWx1ZSA9IGZvcm1hdHRlZFBhcnRzW2luZGV4XS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG87XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChwYXJ0VHlwZSA9PT0gJ2VyYScgJiYgaW5kZXggPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIG8udmFsdWUgPSBmb3JtYXR0ZWRQYXJ0c1tpbmRleF0udmFsdWU7XG4gICAgICAgICAgICAgICAgby5saXRlcmFsID0gZm9ybWF0dGVkUGFydHNbaW5kZXggKyAxXSA/IGZvcm1hdHRlZFBhcnRzW2luZGV4ICsgMV0udmFsdWUgOiAnJztcbiAgICAgICAgICAgICAgICBvLmNvbWJpbmVkID0gW28udmFsdWUsIG8ubGl0ZXJhbF0uam9pbignJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG87XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGVhY2ggb2YgcGFydHMpIHtcbiAgICAgICAgICAgICAgICByZXN1bHRbZWFjaF0gPSB0b1R5cGUoZWFjaCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGVhY2ggb2YgcGFydHMpIHtcbiAgICAgICAgICAgICAgICByZXN1bHRbZWFjaF0gPSB7IHZhbHVlOiAnJywgbGl0ZXJhbDogJycsIGNvbWJpbmVkOiAnJ307XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdlbmVyYXRlSUNhbGVuZGFyRGF0ZShkYXRlOiBEYXRlLCB5ZWFyOiBudW1iZXIsIG1vbnRoOiBudW1iZXIpOiBJQ2FsZW5kYXJEYXRlIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGRhdGUsXG4gICAgICAgICAgICBpc0N1cnJlbnRNb250aDogZGF0ZS5nZXRGdWxsWWVhcigpID09PSB5ZWFyICYmIGRhdGUuZ2V0TW9udGgoKSA9PT0gbW9udGgsXG4gICAgICAgICAgICBpc05leHRNb250aDogdGhpcy5pc05leHRNb250aChkYXRlLCB5ZWFyLCBtb250aCksXG4gICAgICAgICAgICBpc1ByZXZNb250aDogdGhpcy5pc1ByZXZpb3VzTW9udGgoZGF0ZSwgeWVhciwgbW9udGgpXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBpc1ByZXZpb3VzTW9udGgoZGF0ZTogRGF0ZSwgeWVhcjogbnVtYmVyLCBtb250aDogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgICAgIGlmIChkYXRlLmdldEZ1bGxZZWFyKCkgPT09IHllYXIpIHtcbiAgICAgICAgICAgIHJldHVybiBkYXRlLmdldE1vbnRoKCkgPCBtb250aDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZGF0ZS5nZXRGdWxsWWVhcigpIDwgeWVhcjtcbiAgICB9XG5cbiAgICBwcml2YXRlIGlzTmV4dE1vbnRoKGRhdGU6IERhdGUsIHllYXI6IG51bWJlciwgbW9udGg6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgICAgICBpZiAoZGF0ZS5nZXRGdWxsWWVhcigpID09PSB5ZWFyKSB7XG4gICAgICAgICAgICByZXR1cm4gZGF0ZS5nZXRNb250aCgpID4gbW9udGg7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZGF0ZS5nZXRGdWxsWWVhcigpID4geWVhcjtcbiAgICB9XG59XG4iXX0=