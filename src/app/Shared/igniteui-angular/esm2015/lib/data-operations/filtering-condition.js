/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Provides base filtering operations
 * Implementations should be Singleton
 *
 * @export
 */
export class IgxFilteringOperand {
    constructor() {
        this.operations = [{
                name: 'null',
                isUnary: true,
                iconName: 'is_null',
                logic: (target) => {
                    return target === null;
                }
            }, {
                name: 'notNull',
                isUnary: true,
                iconName: 'is_not_null',
                logic: (target) => {
                    return target !== null;
                }
            }, {
                name: 'in',
                isUnary: false,
                iconName: 'is_in',
                hidden: true,
                logic: (target, searchVal) => {
                    return this.findValueInSet(target, searchVal);
                }
            }];
    }
    /**
     * @return {?}
     */
    static instance() {
        return this._instance || (this._instance = new this());
    }
    /**
     * @hidden
     * @protected
     * @param {?} target
     * @param {?} searchVal
     * @return {?}
     */
    findValueInSet(target, searchVal) {
        return searchVal.has(target);
    }
    /**
     * Returns an array of names of the conditions which are visible in the UI
     * @return {?}
     */
    conditionList() {
        return this.operations.filter(f => !f.hidden).map((element) => element.name);
    }
    /**
     * Returns an instance of the condition with the specified name.
     * @param {?} name The name of the condition.
     * @return {?}
     */
    condition(name) {
        return this.operations.find((element) => element.name === name);
    }
    /**
     * Adds a new condition to the filtering operations.
     * @param {?} operation The filtering operation.
     * @return {?}
     */
    append(operation) {
        this.operations.push(operation);
    }
}
IgxFilteringOperand._instance = null;
if (false) {
    /**
     * @type {?}
     * @protected
     */
    IgxFilteringOperand._instance;
    /** @type {?} */
    IgxFilteringOperand.prototype.operations;
}
/**
 * Provides filtering operations for booleans
 *
 * @export
 */
export class IgxBooleanFilteringOperand extends IgxFilteringOperand {
    /**
     * @protected
     */
    constructor() {
        super();
        this.operations = [{
                name: 'all',
                isUnary: true,
                iconName: 'all',
                logic: (target) => {
                    return true;
                }
            }, {
                name: 'true',
                isUnary: true,
                iconName: 'is_true',
                logic: (target) => {
                    return !!(target && target !== null && target !== undefined);
                }
            }, {
                name: 'false',
                isUnary: true,
                iconName: 'is_false',
                logic: (target) => {
                    return !target && target !== null && target !== undefined;
                }
            }, {
                name: 'empty',
                isUnary: true,
                iconName: 'empty',
                logic: (target) => {
                    return target === null || target === undefined;
                }
            }, {
                name: 'notEmpty',
                isUnary: true,
                iconName: 'not_empty',
                logic: (target) => {
                    return target !== null && target !== undefined;
                }
            }].concat(this.operations);
    }
}
/**
 * Provides filtering operations for Dates
 *
 * @export
 */
export class IgxDateFilteringOperand extends IgxFilteringOperand {
    /**
     * @protected
     */
    constructor() {
        super();
        this.operations = [{
                name: 'equals',
                isUnary: false,
                iconName: 'equals',
                logic: (target, searchVal) => {
                    if (!target) {
                        return false;
                    }
                    this.validateInputData(target);
                    /** @type {?} */
                    const targetp = IgxDateFilteringOperand.getDateParts(target, 'yMd');
                    /** @type {?} */
                    const searchp = IgxDateFilteringOperand.getDateParts(searchVal, 'yMd');
                    return targetp.year === searchp.year &&
                        targetp.month === searchp.month &&
                        targetp.day === searchp.day;
                }
            }, {
                name: 'doesNotEqual',
                isUnary: false,
                iconName: 'not_equal',
                logic: (target, searchVal) => {
                    if (!target) {
                        return true;
                    }
                    this.validateInputData(target);
                    /** @type {?} */
                    const targetp = IgxDateFilteringOperand.getDateParts(target, 'yMd');
                    /** @type {?} */
                    const searchp = IgxDateFilteringOperand.getDateParts(searchVal, 'yMd');
                    return targetp.year !== searchp.year ||
                        targetp.month !== searchp.month ||
                        targetp.day !== searchp.day;
                }
            }, {
                name: 'before',
                isUnary: false,
                iconName: 'is_before',
                logic: (target, searchVal) => {
                    if (!target) {
                        return false;
                    }
                    this.validateInputData(target);
                    return target < searchVal;
                }
            }, {
                name: 'after',
                isUnary: false,
                iconName: 'is_after',
                logic: (target, searchVal) => {
                    if (!target) {
                        return false;
                    }
                    this.validateInputData(target);
                    return target > searchVal;
                }
            }, {
                name: 'today',
                isUnary: true,
                iconName: 'today',
                logic: (target) => {
                    if (!target) {
                        return false;
                    }
                    this.validateInputData(target);
                    /** @type {?} */
                    const d = IgxDateFilteringOperand.getDateParts(target, 'yMd');
                    /** @type {?} */
                    const now = IgxDateFilteringOperand.getDateParts(new Date(), 'yMd');
                    return d.year === now.year &&
                        d.month === now.month &&
                        d.day === now.day;
                }
            }, {
                name: 'yesterday',
                isUnary: true,
                iconName: 'yesterday',
                logic: (target) => {
                    if (!target) {
                        return false;
                    }
                    this.validateInputData(target);
                    /** @type {?} */
                    const td = IgxDateFilteringOperand.getDateParts(target, 'yMd');
                    /** @type {?} */
                    const y = ((d) => new Date(d.setDate(d.getDate() - 1)))(new Date());
                    /** @type {?} */
                    const yesterday = IgxDateFilteringOperand.getDateParts(y, 'yMd');
                    return td.year === yesterday.year &&
                        td.month === yesterday.month &&
                        td.day === yesterday.day;
                }
            }, {
                name: 'thisMonth',
                isUnary: true,
                iconName: 'this_month',
                logic: (target) => {
                    if (!target) {
                        return false;
                    }
                    this.validateInputData(target);
                    /** @type {?} */
                    const d = IgxDateFilteringOperand.getDateParts(target, 'yM');
                    /** @type {?} */
                    const now = IgxDateFilteringOperand.getDateParts(new Date(), 'yM');
                    return d.year === now.year &&
                        d.month === now.month;
                }
            }, {
                name: 'lastMonth',
                isUnary: true,
                iconName: 'last_month',
                logic: (target) => {
                    if (!target) {
                        return false;
                    }
                    this.validateInputData(target);
                    /** @type {?} */
                    const d = IgxDateFilteringOperand.getDateParts(target, 'yM');
                    /** @type {?} */
                    const now = IgxDateFilteringOperand.getDateParts(new Date(), 'yM');
                    if (!now.month) {
                        now.month = 11;
                        now.year -= 1;
                    }
                    else {
                        now.month--;
                    }
                    return d.year === now.year &&
                        d.month === now.month;
                }
            }, {
                name: 'nextMonth',
                isUnary: true,
                iconName: 'next_month',
                logic: (target) => {
                    if (!target) {
                        return false;
                    }
                    this.validateInputData(target);
                    /** @type {?} */
                    const d = IgxDateFilteringOperand.getDateParts(target, 'yM');
                    /** @type {?} */
                    const now = IgxDateFilteringOperand.getDateParts(new Date(), 'yM');
                    if (now.month === 11) {
                        now.month = 0;
                        now.year += 1;
                    }
                    else {
                        now.month++;
                    }
                    return d.year === now.year &&
                        d.month === now.month;
                }
            }, {
                name: 'thisYear',
                isUnary: true,
                iconName: 'this_year',
                logic: (target) => {
                    if (!target) {
                        return false;
                    }
                    this.validateInputData(target);
                    /** @type {?} */
                    const d = IgxDateFilteringOperand.getDateParts(target, 'y');
                    /** @type {?} */
                    const now = IgxDateFilteringOperand.getDateParts(new Date(), 'y');
                    return d.year === now.year;
                }
            }, {
                name: 'lastYear',
                isUnary: true,
                iconName: 'last_year',
                logic: (target) => {
                    if (!target) {
                        return false;
                    }
                    this.validateInputData(target);
                    /** @type {?} */
                    const d = IgxDateFilteringOperand.getDateParts(target, 'y');
                    /** @type {?} */
                    const now = IgxDateFilteringOperand.getDateParts(new Date(), 'y');
                    return d.year === now.year - 1;
                }
            }, {
                name: 'nextYear',
                isUnary: true,
                iconName: 'next_year',
                logic: (target) => {
                    if (!target) {
                        return false;
                    }
                    this.validateInputData(target);
                    /** @type {?} */
                    const d = IgxDateFilteringOperand.getDateParts(target, 'y');
                    /** @type {?} */
                    const now = IgxDateFilteringOperand.getDateParts(new Date(), 'y');
                    return d.year === now.year + 1;
                }
            }, {
                name: 'empty',
                isUnary: true,
                iconName: 'empty',
                logic: (target) => {
                    return target === null || target === undefined;
                }
            }, {
                name: 'notEmpty',
                isUnary: true,
                iconName: 'not_empty',
                logic: (target) => {
                    return target !== null && target !== undefined;
                }
            }].concat(this.operations);
    }
    /**
     * Splits a Date object into parts
     *
     * \@memberof IgxDateFilteringOperand
     * @param {?} date
     * @param {?=} dateFormat
     * @return {?}
     */
    static getDateParts(date, dateFormat) {
        /** @type {?} */
        const res = {
            day: null,
            hours: null,
            milliseconds: null,
            minutes: null,
            month: null,
            seconds: null,
            year: null
        };
        if (!date || !dateFormat) {
            return res;
        }
        if (dateFormat.indexOf('y') >= 0) {
            res.year = date.getFullYear();
        }
        if (dateFormat.indexOf('M') >= 0) {
            res.month = date.getMonth();
        }
        if (dateFormat.indexOf('d') >= 0) {
            res.day = date.getDate();
        }
        if (dateFormat.indexOf('h') >= 0) {
            res.hours = date.getHours();
        }
        if (dateFormat.indexOf('m') >= 0) {
            res.minutes = date.getMinutes();
        }
        if (dateFormat.indexOf('s') >= 0) {
            res.seconds = date.getSeconds();
        }
        if (dateFormat.indexOf('f') >= 0) {
            res.milliseconds = date.getMilliseconds();
        }
        return res;
    }
    /**
     * @private
     * @param {?} target
     * @return {?}
     */
    validateInputData(target) {
        if (!(target instanceof Date)) {
            throw new Error('Could not perform filtering on \'date\' column because the datasource object type is not \'Date\'.');
        }
    }
    /**
     * @protected
     * @param {?} target
     * @param {?} searchVal
     * @return {?}
     */
    findValueInSet(target, searchVal) {
        return searchVal.has(new Date(target.getFullYear(), target.getMonth(), target.getDate()).toISOString());
    }
}
/**
 * Provides filtering operations for numbers
 *
 * @export
 */
export class IgxNumberFilteringOperand extends IgxFilteringOperand {
    /**
     * @protected
     */
    constructor() {
        super();
        this.operations = [{
                name: 'equals',
                isUnary: false,
                iconName: 'equals',
                logic: (target, searchVal) => {
                    return target === searchVal;
                }
            }, {
                name: 'doesNotEqual',
                isUnary: false,
                iconName: 'not_equal',
                logic: (target, searchVal) => {
                    return target !== searchVal;
                }
            }, {
                name: 'greaterThan',
                isUnary: false,
                iconName: 'greater_than',
                logic: (target, searchVal) => {
                    return target > searchVal;
                }
            }, {
                name: 'lessThan',
                isUnary: false,
                iconName: 'less_than',
                logic: (target, searchVal) => {
                    return target < searchVal;
                }
            }, {
                name: 'greaterThanOrEqualTo',
                isUnary: false,
                iconName: 'greater_than_or_equal',
                logic: (target, searchVal) => {
                    return target >= searchVal;
                }
            }, {
                name: 'lessThanOrEqualTo',
                isUnary: false,
                iconName: 'less_than_or_equal',
                logic: (target, searchVal) => {
                    return target <= searchVal;
                }
            }, {
                name: 'empty',
                isUnary: true,
                iconName: 'empty',
                logic: (target) => {
                    return target === null || target === undefined || isNaN(target);
                }
            }, {
                name: 'notEmpty',
                isUnary: true,
                iconName: 'not_empty',
                logic: (target) => {
                    return target !== null && target !== undefined && !isNaN(target);
                }
            }].concat(this.operations);
    }
}
/**
 * Provides filtering operations for strings
 *
 * @export
 */
export class IgxStringFilteringOperand extends IgxFilteringOperand {
    /**
     * @protected
     */
    constructor() {
        super();
        this.operations = [{
                name: 'contains',
                isUnary: false,
                iconName: 'contains',
                logic: (target, searchVal, ignoreCase) => {
                    /** @type {?} */
                    const search = IgxStringFilteringOperand.applyIgnoreCase(searchVal, ignoreCase);
                    target = IgxStringFilteringOperand.applyIgnoreCase(target, ignoreCase);
                    return target.indexOf(search) !== -1;
                }
            }, {
                name: 'doesNotContain',
                isUnary: false,
                iconName: 'does_not_contain',
                logic: (target, searchVal, ignoreCase) => {
                    /** @type {?} */
                    const search = IgxStringFilteringOperand.applyIgnoreCase(searchVal, ignoreCase);
                    target = IgxStringFilteringOperand.applyIgnoreCase(target, ignoreCase);
                    return target.indexOf(search) === -1;
                }
            }, {
                name: 'startsWith',
                isUnary: false,
                iconName: 'starts_with',
                logic: (target, searchVal, ignoreCase) => {
                    /** @type {?} */
                    const search = IgxStringFilteringOperand.applyIgnoreCase(searchVal, ignoreCase);
                    target = IgxStringFilteringOperand.applyIgnoreCase(target, ignoreCase);
                    return target.startsWith(search);
                }
            }, {
                name: 'endsWith',
                isUnary: false,
                iconName: 'ends_with',
                logic: (target, searchVal, ignoreCase) => {
                    /** @type {?} */
                    const search = IgxStringFilteringOperand.applyIgnoreCase(searchVal, ignoreCase);
                    target = IgxStringFilteringOperand.applyIgnoreCase(target, ignoreCase);
                    return target.endsWith(search);
                }
            }, {
                name: 'equals',
                isUnary: false,
                iconName: 'equals',
                logic: (target, searchVal, ignoreCase) => {
                    /** @type {?} */
                    const search = IgxStringFilteringOperand.applyIgnoreCase(searchVal, ignoreCase);
                    target = IgxStringFilteringOperand.applyIgnoreCase(target, ignoreCase);
                    return target === search;
                }
            }, {
                name: 'doesNotEqual',
                isUnary: false,
                iconName: 'not_equal',
                logic: (target, searchVal, ignoreCase) => {
                    /** @type {?} */
                    const search = IgxStringFilteringOperand.applyIgnoreCase(searchVal, ignoreCase);
                    target = IgxStringFilteringOperand.applyIgnoreCase(target, ignoreCase);
                    return target !== search;
                }
            }, {
                name: 'empty',
                isUnary: true,
                iconName: 'empty',
                logic: (target) => {
                    return target === null || target === undefined || target.length === 0;
                }
            }, {
                name: 'notEmpty',
                isUnary: true,
                iconName: 'not_empty',
                logic: (target) => {
                    return target !== null && target !== undefined && target.length > 0;
                }
            }].concat(this.operations);
    }
    /**
     * Applies case sensitivity on strings if provided
     *
     * \@memberof IgxStringFilteringOperand
     * @param {?} a
     * @param {?} ignoreCase
     * @return {?}
     */
    static applyIgnoreCase(a, ignoreCase) {
        a = a || '';
        // bulletproof
        return ignoreCase ? ('' + a).toLowerCase() : a;
    }
}
/**
 * Interface describing filtering operations
 *
 * @export
 * @record
 */
export function IFilteringOperation() { }
if (false) {
    /** @type {?} */
    IFilteringOperation.prototype.name;
    /** @type {?} */
    IFilteringOperation.prototype.isUnary;
    /** @type {?} */
    IFilteringOperation.prototype.iconName;
    /** @type {?|undefined} */
    IFilteringOperation.prototype.hidden;
    /** @type {?} */
    IFilteringOperation.prototype.logic;
}
/**
 * Interface describing Date object in parts
 *
 * @export
 * @record
 */
export function IDateParts() { }
if (false) {
    /** @type {?} */
    IDateParts.prototype.year;
    /** @type {?} */
    IDateParts.prototype.month;
    /** @type {?} */
    IDateParts.prototype.day;
    /** @type {?} */
    IDateParts.prototype.hours;
    /** @type {?} */
    IDateParts.prototype.minutes;
    /** @type {?} */
    IDateParts.prototype.seconds;
    /** @type {?} */
    IDateParts.prototype.milliseconds;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyaW5nLWNvbmRpdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lnbml0ZXVpLWFuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvZGF0YS1vcGVyYXRpb25zL2ZpbHRlcmluZy1jb25kaXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQU1BLE1BQU0sT0FBTyxtQkFBbUI7SUFJNUI7UUFDSSxJQUFJLENBQUMsVUFBVSxHQUFHLENBQUM7Z0JBQ2YsSUFBSSxFQUFFLE1BQU07Z0JBQ1osT0FBTyxFQUFFLElBQUk7Z0JBQ2IsUUFBUSxFQUFFLFNBQVM7Z0JBQ25CLEtBQUssRUFBRSxDQUFDLE1BQVcsRUFBRSxFQUFFO29CQUNuQixPQUFPLE1BQU0sS0FBSyxJQUFJLENBQUM7Z0JBQzNCLENBQUM7YUFDSixFQUFFO2dCQUNDLElBQUksRUFBRSxTQUFTO2dCQUNmLE9BQU8sRUFBRSxJQUFJO2dCQUNiLFFBQVEsRUFBRSxhQUFhO2dCQUN2QixLQUFLLEVBQUUsQ0FBQyxNQUFXLEVBQUUsRUFBRTtvQkFDbkIsT0FBTyxNQUFNLEtBQUssSUFBSSxDQUFDO2dCQUMzQixDQUFDO2FBQ0osRUFBRTtnQkFDQyxJQUFJLEVBQUUsSUFBSTtnQkFDVixPQUFPLEVBQUUsS0FBSztnQkFDZCxRQUFRLEVBQUUsT0FBTztnQkFDakIsTUFBTSxFQUFFLElBQUk7Z0JBQ1osS0FBSyxFQUFFLENBQUMsTUFBVyxFQUFFLFNBQW1CLEVBQUUsRUFBRTtvQkFDeEMsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxTQUFTLENBQUMsQ0FBQztnQkFDbEQsQ0FBQzthQUNKLENBQUMsQ0FBQztJQUNQLENBQUM7Ozs7SUFFTSxNQUFNLENBQUMsUUFBUTtRQUNsQixPQUFPLElBQUksQ0FBQyxTQUFTLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQztJQUMzRCxDQUFDOzs7Ozs7OztJQUtTLGNBQWMsQ0FB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QkFDYixRQUFRLEVBQUUsT0FBTztnQkFDakIsS0FBSyxFQUFFLENBQUMsTUFBYyxFQUFFLEVBQUU7b0JBQ3RCLE9BQU8sTUFBTSxLQUFLLElBQUksSUFBSSxNQUFNLEtBQUssU0FBUyxJQUFJLE1BQU0sQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDO2dCQUMxRSxDQUFDO2FBQ0osRUFBRTtnQkFDQyxJQUFJLEVBQUUsVUFBVTtnQkFDaEIsT0FBTyxFQUFFLElBQUk7Z0JBQ2IsUUFBUSxFQUFFLFdBQVc7Z0JBQ3JCLEtBQUssRUFBRSxDQUFDLE1BQWMsRUFBRSxFQUFFO29CQUN0QixPQUFPLE1BQU0sS0FBSyxJQUFJLElBQUksTUFBTSxLQUFLLFNBQVMsSUFBSSxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztnQkFDeEUsQ0FBQzthQUNKLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQy9CLENBQUM7Ozs7Ozs7OztJQU9NLE1BQU0sQ0FBQyxlQUFlLENBQUMsQ0FBUyxFQUFFLFVBQW1CO1FBQ3hELENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ1osY0FBYztRQUNkLE9BQU8sVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ25ELENBQUM7Q0FDSjs7Ozs7OztBQU9ELHlDQU1DOzs7SUFMRyxtQ0FBYTs7SUFDYixzQ0FBaUI7O0lBQ2pCLHVDQUFpQjs7SUFDakIscUNBQWlCOztJQUNqQixvQ0FBc0U7Ozs7Ozs7O0FBUTFFLGdDQVFDOzs7SUFQRywwQkFBYTs7SUFDYiwyQkFBYzs7SUFDZCx5QkFBWTs7SUFDWiwyQkFBYzs7SUFDZCw2QkFBZ0I7O0lBQ2hCLDZCQUFnQjs7SUFDaEIsa0NBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBQcm92aWRlcyBiYXNlIGZpbHRlcmluZyBvcGVyYXRpb25zXG4gKiBJbXBsZW1lbnRhdGlvbnMgc2hvdWxkIGJlIFNpbmdsZXRvblxuICpcbiAqIEBleHBvcnRcbiAqL1xuZXhwb3J0IGNsYXNzIElneEZpbHRlcmluZ09wZXJhbmQge1xuICAgIHByb3RlY3RlZCBzdGF0aWMgX2luc3RhbmNlOiBJZ3hGaWx0ZXJpbmdPcGVyYW5kID0gbnVsbDtcbiAgICBwdWJsaWMgb3BlcmF0aW9uczogSUZpbHRlcmluZ09wZXJhdGlvbltdO1xuXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLm9wZXJhdGlvbnMgPSBbe1xuICAgICAgICAgICAgbmFtZTogJ251bGwnLFxuICAgICAgICAgICAgaXNVbmFyeTogdHJ1ZSxcbiAgICAgICAgICAgIGljb25OYW1lOiAnaXNfbnVsbCcsXG4gICAgICAgICAgICBsb2dpYzogKHRhcmdldDogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldCA9PT0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbmFtZTogJ25vdE51bGwnLFxuICAgICAgICAgICAgaXNVbmFyeTogdHJ1ZSxcbiAgICAgICAgICAgIGljb25OYW1lOiAnaXNfbm90X251bGwnLFxuICAgICAgICAgICAgbG9naWM6ICh0YXJnZXQ6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXQgIT09IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG5hbWU6ICdpbicsXG4gICAgICAgICAgICBpc1VuYXJ5OiBmYWxzZSxcbiAgICAgICAgICAgIGljb25OYW1lOiAnaXNfaW4nLFxuICAgICAgICAgICAgaGlkZGVuOiB0cnVlLFxuICAgICAgICAgICAgbG9naWM6ICh0YXJnZXQ6IGFueSwgc2VhcmNoVmFsOiBTZXQ8YW55PikgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmZpbmRWYWx1ZUluU2V0KHRhcmdldCwgc2VhcmNoVmFsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfV07XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBpbnN0YW5jZSgpOiBJZ3hGaWx0ZXJpbmdPcGVyYW5kIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlIHx8ICh0aGlzLl9pbnN0YW5jZSA9IG5ldyB0aGlzKCkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgZmluZFZhbHVlSW5TZXQodGFyZ2V0OiBhbnksIHNlYXJjaFZhbDogU2V0PGFueT4pIHtcbiAgICAgICAgcmV0dXJuIHNlYXJjaFZhbC5oYXModGFyZ2V0KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGFuIGFycmF5IG9mIG5hbWVzIG9mIHRoZSBjb25kaXRpb25zIHdoaWNoIGFyZSB2aXNpYmxlIGluIHRoZSBVSVxuICAgICAqL1xuICAgIHB1YmxpYyBjb25kaXRpb25MaXN0KCk6IHN0cmluZ1tdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub3BlcmF0aW9ucy5maWx0ZXIoZiA9PiAhZi5oaWRkZW4pLm1hcCgoZWxlbWVudCkgPT4gZWxlbWVudC5uYW1lKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGFuIGluc3RhbmNlIG9mIHRoZSBjb25kaXRpb24gd2l0aCB0aGUgc3BlY2lmaWVkIG5hbWUuXG4gICAgICogQHBhcmFtIG5hbWUgVGhlIG5hbWUgb2YgdGhlIGNvbmRpdGlvbi5cbiAgICAgKi9cbiAgICBwdWJsaWMgY29uZGl0aW9uKG5hbWU6IHN0cmluZyk6IElGaWx0ZXJpbmdPcGVyYXRpb24ge1xuICAgICAgICByZXR1cm4gdGhpcy5vcGVyYXRpb25zLmZpbmQoKGVsZW1lbnQpID0+IGVsZW1lbnQubmFtZSA9PT0gbmFtZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkcyBhIG5ldyBjb25kaXRpb24gdG8gdGhlIGZpbHRlcmluZyBvcGVyYXRpb25zLlxuICAgICAqIEBwYXJhbSBvcGVyYXRpb24gVGhlIGZpbHRlcmluZyBvcGVyYXRpb24uXG4gICAgICovXG4gICAgcHVibGljIGFwcGVuZChvcGVyYXRpb246IElGaWx0ZXJpbmdPcGVyYXRpb24pIHtcbiAgICAgICAgdGhpcy5vcGVyYXRpb25zLnB1c2gob3BlcmF0aW9uKTtcbiAgICB9XG59XG5cbi8qKlxuICogUHJvdmlkZXMgZmlsdGVyaW5nIG9wZXJhdGlvbnMgZm9yIGJvb2xlYW5zXG4gKlxuICogQGV4cG9ydFxuICovXG5leHBvcnQgY2xhc3MgSWd4Qm9vbGVhbkZpbHRlcmluZ09wZXJhbmQgZXh0ZW5kcyBJZ3hGaWx0ZXJpbmdPcGVyYW5kIHtcbiAgICBwcm90ZWN0ZWQgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMub3BlcmF0aW9ucyA9IFt7XG4gICAgICAgICAgICBuYW1lOiAnYWxsJyxcbiAgICAgICAgICAgIGlzVW5hcnk6IHRydWUsXG4gICAgICAgICAgICBpY29uTmFtZTogJ2FsbCcsXG4gICAgICAgICAgICBsb2dpYzogKHRhcmdldDogYm9vbGVhbikgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBuYW1lOiAndHJ1ZScsXG4gICAgICAgICAgICBpc1VuYXJ5OiB0cnVlLFxuICAgICAgICAgICAgaWNvbk5hbWU6ICdpc190cnVlJyxcbiAgICAgICAgICAgIGxvZ2ljOiAodGFyZ2V0OiBib29sZWFuKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICEhKHRhcmdldCAmJiB0YXJnZXQgIT09IG51bGwgJiYgdGFyZ2V0ICE9PSB1bmRlZmluZWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBuYW1lOiAnZmFsc2UnLFxuICAgICAgICAgICAgaXNVbmFyeTogdHJ1ZSxcbiAgICAgICAgICAgIGljb25OYW1lOiAnaXNfZmFsc2UnLFxuICAgICAgICAgICAgbG9naWM6ICh0YXJnZXQ6IGJvb2xlYW4pID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gIXRhcmdldCAmJiB0YXJnZXQgIT09IG51bGwgJiYgdGFyZ2V0ICE9PSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG5hbWU6ICdlbXB0eScsXG4gICAgICAgICAgICBpc1VuYXJ5OiB0cnVlLFxuICAgICAgICAgICAgaWNvbk5hbWU6ICdlbXB0eScsXG4gICAgICAgICAgICBsb2dpYzogKHRhcmdldDogYm9vbGVhbikgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXQgPT09IG51bGwgfHwgdGFyZ2V0ID09PSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG5hbWU6ICdub3RFbXB0eScsXG4gICAgICAgICAgICBpc1VuYXJ5OiB0cnVlLFxuICAgICAgICAgICAgaWNvbk5hbWU6ICdub3RfZW1wdHknLFxuICAgICAgICAgICAgbG9naWM6ICh0YXJnZXQ6IGJvb2xlYW4pID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0ICE9PSBudWxsICYmIHRhcmdldCAhPT0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XS5jb25jYXQodGhpcy5vcGVyYXRpb25zKTtcbiAgICB9XG59XG5cbi8qKlxuICogUHJvdmlkZXMgZmlsdGVyaW5nIG9wZXJhdGlvbnMgZm9yIERhdGVzXG4gKlxuICogQGV4cG9ydFxuICovXG5leHBvcnQgY2xhc3MgSWd4RGF0ZUZpbHRlcmluZ09wZXJhbmQgZXh0ZW5kcyBJZ3hGaWx0ZXJpbmdPcGVyYW5kIHtcbiAgICBwcm90ZWN0ZWQgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMub3BlcmF0aW9ucyA9IFt7XG4gICAgICAgICAgICBuYW1lOiAnZXF1YWxzJyxcbiAgICAgICAgICAgIGlzVW5hcnk6IGZhbHNlLFxuICAgICAgICAgICAgaWNvbk5hbWU6ICdlcXVhbHMnLFxuICAgICAgICAgICAgbG9naWM6ICh0YXJnZXQ6IERhdGUsIHNlYXJjaFZhbDogRGF0ZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLnZhbGlkYXRlSW5wdXREYXRhKHRhcmdldCk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCB0YXJnZXRwID0gSWd4RGF0ZUZpbHRlcmluZ09wZXJhbmQuZ2V0RGF0ZVBhcnRzKHRhcmdldCwgJ3lNZCcpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHNlYXJjaHAgPSBJZ3hEYXRlRmlsdGVyaW5nT3BlcmFuZC5nZXREYXRlUGFydHMoc2VhcmNoVmFsLCAneU1kJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldHAueWVhciA9PT0gc2VhcmNocC55ZWFyICYmXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldHAubW9udGggPT09IHNlYXJjaHAubW9udGggJiZcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0cC5kYXkgPT09IHNlYXJjaHAuZGF5O1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBuYW1lOiAnZG9lc05vdEVxdWFsJyxcbiAgICAgICAgICAgIGlzVW5hcnk6IGZhbHNlLFxuICAgICAgICAgICAgaWNvbk5hbWU6ICdub3RfZXF1YWwnLFxuICAgICAgICAgICAgbG9naWM6ICh0YXJnZXQ6IERhdGUsIHNlYXJjaFZhbDogRGF0ZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMudmFsaWRhdGVJbnB1dERhdGEodGFyZ2V0KTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHRhcmdldHAgPSBJZ3hEYXRlRmlsdGVyaW5nT3BlcmFuZC5nZXREYXRlUGFydHModGFyZ2V0LCAneU1kJyk7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2VhcmNocCA9IElneERhdGVGaWx0ZXJpbmdPcGVyYW5kLmdldERhdGVQYXJ0cyhzZWFyY2hWYWwsICd5TWQnKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0cC55ZWFyICE9PSBzZWFyY2hwLnllYXIgfHxcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0cC5tb250aCAhPT0gc2VhcmNocC5tb250aCB8fFxuICAgICAgICAgICAgICAgICAgICB0YXJnZXRwLmRheSAhPT0gc2VhcmNocC5kYXk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG5hbWU6ICdiZWZvcmUnLFxuICAgICAgICAgICAgaXNVbmFyeTogZmFsc2UsXG4gICAgICAgICAgICBpY29uTmFtZTogJ2lzX2JlZm9yZScsXG4gICAgICAgICAgICBsb2dpYzogKHRhcmdldDogRGF0ZSwgc2VhcmNoVmFsOiBEYXRlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMudmFsaWRhdGVJbnB1dERhdGEodGFyZ2V0KTtcblxuICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXQgPCBzZWFyY2hWYWw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG5hbWU6ICdhZnRlcicsXG4gICAgICAgICAgICBpc1VuYXJ5OiBmYWxzZSxcbiAgICAgICAgICAgIGljb25OYW1lOiAnaXNfYWZ0ZXInLFxuICAgICAgICAgICAgbG9naWM6ICh0YXJnZXQ6IERhdGUsIHNlYXJjaFZhbDogRGF0ZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLnZhbGlkYXRlSW5wdXREYXRhKHRhcmdldCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0ID4gc2VhcmNoVmFsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBuYW1lOiAndG9kYXknLFxuICAgICAgICAgICAgaXNVbmFyeTogdHJ1ZSxcbiAgICAgICAgICAgIGljb25OYW1lOiAndG9kYXknLFxuICAgICAgICAgICAgbG9naWM6ICh0YXJnZXQ6IERhdGUpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIXRhcmdldCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy52YWxpZGF0ZUlucHV0RGF0YSh0YXJnZXQpO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgZCA9IElneERhdGVGaWx0ZXJpbmdPcGVyYW5kLmdldERhdGVQYXJ0cyh0YXJnZXQsICd5TWQnKTtcbiAgICAgICAgICAgICAgICBjb25zdCBub3cgPSBJZ3hEYXRlRmlsdGVyaW5nT3BlcmFuZC5nZXREYXRlUGFydHMobmV3IERhdGUoKSwgJ3lNZCcpO1xuICAgICAgICAgICAgICAgIHJldHVybiBkLnllYXIgPT09IG5vdy55ZWFyICYmXG4gICAgICAgICAgICAgICAgICAgIGQubW9udGggPT09IG5vdy5tb250aCAmJlxuICAgICAgICAgICAgICAgICAgICBkLmRheSA9PT0gbm93LmRheTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbmFtZTogJ3llc3RlcmRheScsXG4gICAgICAgICAgICBpc1VuYXJ5OiB0cnVlLFxuICAgICAgICAgICAgaWNvbk5hbWU6ICd5ZXN0ZXJkYXknLFxuICAgICAgICAgICAgbG9naWM6ICh0YXJnZXQ6IERhdGUpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIXRhcmdldCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy52YWxpZGF0ZUlucHV0RGF0YSh0YXJnZXQpO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgdGQgPSBJZ3hEYXRlRmlsdGVyaW5nT3BlcmFuZC5nZXREYXRlUGFydHModGFyZ2V0LCAneU1kJyk7XG4gICAgICAgICAgICAgICAgY29uc3QgeSA9ICgoZCkgPT4gbmV3IERhdGUoZC5zZXREYXRlKGQuZ2V0RGF0ZSgpIC0gMSkpKShuZXcgRGF0ZSgpKTtcbiAgICAgICAgICAgICAgICBjb25zdCB5ZXN0ZXJkYXkgPSBJZ3hEYXRlRmlsdGVyaW5nT3BlcmFuZC5nZXREYXRlUGFydHMoeSwgJ3lNZCcpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0ZC55ZWFyID09PSB5ZXN0ZXJkYXkueWVhciAmJlxuICAgICAgICAgICAgICAgICAgICB0ZC5tb250aCA9PT0geWVzdGVyZGF5Lm1vbnRoICYmXG4gICAgICAgICAgICAgICAgICAgIHRkLmRheSA9PT0geWVzdGVyZGF5LmRheTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbmFtZTogJ3RoaXNNb250aCcsXG4gICAgICAgICAgICBpc1VuYXJ5OiB0cnVlLFxuICAgICAgICAgICAgaWNvbk5hbWU6ICd0aGlzX21vbnRoJyxcbiAgICAgICAgICAgIGxvZ2ljOiAodGFyZ2V0OiBEYXRlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMudmFsaWRhdGVJbnB1dERhdGEodGFyZ2V0KTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGQgPSBJZ3hEYXRlRmlsdGVyaW5nT3BlcmFuZC5nZXREYXRlUGFydHModGFyZ2V0LCAneU0nKTtcbiAgICAgICAgICAgICAgICBjb25zdCBub3cgPSBJZ3hEYXRlRmlsdGVyaW5nT3BlcmFuZC5nZXREYXRlUGFydHMobmV3IERhdGUoKSwgJ3lNJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGQueWVhciA9PT0gbm93LnllYXIgJiZcbiAgICAgICAgICAgICAgICAgICAgZC5tb250aCA9PT0gbm93Lm1vbnRoO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBuYW1lOiAnbGFzdE1vbnRoJyxcbiAgICAgICAgICAgIGlzVW5hcnk6IHRydWUsXG4gICAgICAgICAgICBpY29uTmFtZTogJ2xhc3RfbW9udGgnLFxuICAgICAgICAgICAgbG9naWM6ICh0YXJnZXQ6IERhdGUpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIXRhcmdldCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy52YWxpZGF0ZUlucHV0RGF0YSh0YXJnZXQpO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgZCA9IElneERhdGVGaWx0ZXJpbmdPcGVyYW5kLmdldERhdGVQYXJ0cyh0YXJnZXQsICd5TScpO1xuICAgICAgICAgICAgICAgIGNvbnN0IG5vdyA9IElneERhdGVGaWx0ZXJpbmdPcGVyYW5kLmdldERhdGVQYXJ0cyhuZXcgRGF0ZSgpLCAneU0nKTtcbiAgICAgICAgICAgICAgICBpZiAoIW5vdy5tb250aCkge1xuICAgICAgICAgICAgICAgICAgICBub3cubW9udGggPSAxMTtcbiAgICAgICAgICAgICAgICAgICAgbm93LnllYXIgLT0gMTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBub3cubW9udGgtLTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGQueWVhciA9PT0gbm93LnllYXIgJiZcbiAgICAgICAgICAgICAgICAgICAgZC5tb250aCA9PT0gbm93Lm1vbnRoO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBuYW1lOiAnbmV4dE1vbnRoJyxcbiAgICAgICAgICAgIGlzVW5hcnk6IHRydWUsXG4gICAgICAgICAgICBpY29uTmFtZTogJ25leHRfbW9udGgnLFxuICAgICAgICAgICAgbG9naWM6ICh0YXJnZXQ6IERhdGUpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIXRhcmdldCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy52YWxpZGF0ZUlucHV0RGF0YSh0YXJnZXQpO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgZCA9IElneERhdGVGaWx0ZXJpbmdPcGVyYW5kLmdldERhdGVQYXJ0cyh0YXJnZXQsICd5TScpO1xuICAgICAgICAgICAgICAgIGNvbnN0IG5vdyA9IElneERhdGVGaWx0ZXJpbmdPcGVyYW5kLmdldERhdGVQYXJ0cyhuZXcgRGF0ZSgpLCAneU0nKTtcbiAgICAgICAgICAgICAgICBpZiAobm93Lm1vbnRoID09PSAxMSkge1xuICAgICAgICAgICAgICAgICAgICBub3cubW9udGggPSAwO1xuICAgICAgICAgICAgICAgICAgICBub3cueWVhciArPSAxO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG5vdy5tb250aCsrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gZC55ZWFyID09PSBub3cueWVhciAmJlxuICAgICAgICAgICAgICAgICAgICBkLm1vbnRoID09PSBub3cubW9udGg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG5hbWU6ICd0aGlzWWVhcicsXG4gICAgICAgICAgICBpc1VuYXJ5OiB0cnVlLFxuICAgICAgICAgICAgaWNvbk5hbWU6ICd0aGlzX3llYXInLFxuICAgICAgICAgICAgbG9naWM6ICh0YXJnZXQ6IERhdGUpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIXRhcmdldCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy52YWxpZGF0ZUlucHV0RGF0YSh0YXJnZXQpO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgZCA9IElneERhdGVGaWx0ZXJpbmdPcGVyYW5kLmdldERhdGVQYXJ0cyh0YXJnZXQsICd5Jyk7XG4gICAgICAgICAgICAgICAgY29uc3Qgbm93ID0gSWd4RGF0ZUZpbHRlcmluZ09wZXJhbmQuZ2V0RGF0ZVBhcnRzKG5ldyBEYXRlKCksICd5Jyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGQueWVhciA9PT0gbm93LnllYXI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG5hbWU6ICdsYXN0WWVhcicsXG4gICAgICAgICAgICBpc1VuYXJ5OiB0cnVlLFxuICAgICAgICAgICAgaWNvbk5hbWU6ICdsYXN0X3llYXInLFxuICAgICAgICAgICAgbG9naWM6ICh0YXJnZXQ6IERhdGUpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIXRhcmdldCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy52YWxpZGF0ZUlucHV0RGF0YSh0YXJnZXQpO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgZCA9IElneERhdGVGaWx0ZXJpbmdPcGVyYW5kLmdldERhdGVQYXJ0cyh0YXJnZXQsICd5Jyk7XG4gICAgICAgICAgICAgICAgY29uc3Qgbm93ID0gSWd4RGF0ZUZpbHRlcmluZ09wZXJhbmQuZ2V0RGF0ZVBhcnRzKG5ldyBEYXRlKCksICd5Jyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGQueWVhciA9PT0gbm93LnllYXIgLSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBuYW1lOiAnbmV4dFllYXInLFxuICAgICAgICAgICAgaXNVbmFyeTogdHJ1ZSxcbiAgICAgICAgICAgIGljb25OYW1lOiAnbmV4dF95ZWFyJyxcbiAgICAgICAgICAgIGxvZ2ljOiAodGFyZ2V0OiBEYXRlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMudmFsaWRhdGVJbnB1dERhdGEodGFyZ2V0KTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGQgPSBJZ3hEYXRlRmlsdGVyaW5nT3BlcmFuZC5nZXREYXRlUGFydHModGFyZ2V0LCAneScpO1xuICAgICAgICAgICAgICAgIGNvbnN0IG5vdyA9IElneERhdGVGaWx0ZXJpbmdPcGVyYW5kLmdldERhdGVQYXJ0cyhuZXcgRGF0ZSgpLCAneScpO1xuICAgICAgICAgICAgICAgIHJldHVybiBkLnllYXIgPT09IG5vdy55ZWFyICsgMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbmFtZTogJ2VtcHR5JyxcbiAgICAgICAgICAgIGlzVW5hcnk6IHRydWUsXG4gICAgICAgICAgICBpY29uTmFtZTogJ2VtcHR5JyxcbiAgICAgICAgICAgIGxvZ2ljOiAodGFyZ2V0OiBEYXRlKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldCA9PT0gbnVsbCB8fCB0YXJnZXQgPT09IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbmFtZTogJ25vdEVtcHR5JyxcbiAgICAgICAgICAgIGlzVW5hcnk6IHRydWUsXG4gICAgICAgICAgICBpY29uTmFtZTogJ25vdF9lbXB0eScsXG4gICAgICAgICAgICBsb2dpYzogKHRhcmdldDogRGF0ZSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXQgIT09IG51bGwgJiYgdGFyZ2V0ICE9PSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1dLmNvbmNhdCh0aGlzLm9wZXJhdGlvbnMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNwbGl0cyBhIERhdGUgb2JqZWN0IGludG8gcGFydHNcbiAgICAgKlxuICAgICAqIEBtZW1iZXJvZiBJZ3hEYXRlRmlsdGVyaW5nT3BlcmFuZFxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgZ2V0RGF0ZVBhcnRzKGRhdGU6IERhdGUsIGRhdGVGb3JtYXQ/OiBzdHJpbmcpOiBJRGF0ZVBhcnRzIHtcbiAgICAgICAgY29uc3QgcmVzID0ge1xuICAgICAgICAgICAgZGF5OiBudWxsLFxuICAgICAgICAgICAgaG91cnM6IG51bGwsXG4gICAgICAgICAgICBtaWxsaXNlY29uZHM6IG51bGwsXG4gICAgICAgICAgICBtaW51dGVzOiBudWxsLFxuICAgICAgICAgICAgbW9udGg6IG51bGwsXG4gICAgICAgICAgICBzZWNvbmRzOiBudWxsLFxuICAgICAgICAgICAgeWVhcjogbnVsbFxuICAgICAgICB9O1xuICAgICAgICBpZiAoIWRhdGUgfHwgIWRhdGVGb3JtYXQpIHtcbiAgICAgICAgICAgIHJldHVybiByZXM7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRhdGVGb3JtYXQuaW5kZXhPZigneScpID49IDApIHtcbiAgICAgICAgICAgIHJlcy55ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkYXRlRm9ybWF0LmluZGV4T2YoJ00nKSA+PSAwKSB7XG4gICAgICAgICAgICByZXMubW9udGggPSBkYXRlLmdldE1vbnRoKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRhdGVGb3JtYXQuaW5kZXhPZignZCcpID49IDApIHtcbiAgICAgICAgICAgIHJlcy5kYXkgPSBkYXRlLmdldERhdGUoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZGF0ZUZvcm1hdC5pbmRleE9mKCdoJykgPj0gMCkge1xuICAgICAgICAgICAgcmVzLmhvdXJzID0gZGF0ZS5nZXRIb3VycygpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkYXRlRm9ybWF0LmluZGV4T2YoJ20nKSA+PSAwKSB7XG4gICAgICAgICAgICByZXMubWludXRlcyA9IGRhdGUuZ2V0TWludXRlcygpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkYXRlRm9ybWF0LmluZGV4T2YoJ3MnKSA+PSAwKSB7XG4gICAgICAgICAgICByZXMuc2Vjb25kcyA9IGRhdGUuZ2V0U2Vjb25kcygpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkYXRlRm9ybWF0LmluZGV4T2YoJ2YnKSA+PSAwKSB7XG4gICAgICAgICAgICByZXMubWlsbGlzZWNvbmRzID0gZGF0ZS5nZXRNaWxsaXNlY29uZHMoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzO1xuICAgIH1cblxuICAgIHByaXZhdGUgdmFsaWRhdGVJbnB1dERhdGEodGFyZ2V0OiBEYXRlKSB7XG4gICAgICAgIGlmICghKHRhcmdldCBpbnN0YW5jZW9mIERhdGUpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvdWxkIG5vdCBwZXJmb3JtIGZpbHRlcmluZyBvbiBcXCdkYXRlXFwnIGNvbHVtbiBiZWNhdXNlIHRoZSBkYXRhc291cmNlIG9iamVjdCB0eXBlIGlzIG5vdCBcXCdEYXRlXFwnLicpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGZpbmRWYWx1ZUluU2V0KHRhcmdldDogYW55LCBzZWFyY2hWYWw6IFNldDxhbnk+KSB7XG4gICAgICAgIHJldHVybiBzZWFyY2hWYWwuaGFzKG5ldyBEYXRlKHRhcmdldC5nZXRGdWxsWWVhcigpLCB0YXJnZXQuZ2V0TW9udGgoKSwgdGFyZ2V0LmdldERhdGUoKSkudG9JU09TdHJpbmcoKSk7XG4gICAgfVxufVxuXG4vKipcbiAqIFByb3ZpZGVzIGZpbHRlcmluZyBvcGVyYXRpb25zIGZvciBudW1iZXJzXG4gKlxuICogQGV4cG9ydFxuICovXG5leHBvcnQgY2xhc3MgSWd4TnVtYmVyRmlsdGVyaW5nT3BlcmFuZCBleHRlbmRzIElneEZpbHRlcmluZ09wZXJhbmQge1xuICAgIHByb3RlY3RlZCBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5vcGVyYXRpb25zID0gW3tcbiAgICAgICAgICAgIG5hbWU6ICdlcXVhbHMnLFxuICAgICAgICAgICAgaXNVbmFyeTogZmFsc2UsXG4gICAgICAgICAgICBpY29uTmFtZTogJ2VxdWFscycsXG4gICAgICAgICAgICBsb2dpYzogKHRhcmdldDogbnVtYmVyLCBzZWFyY2hWYWw6IG51bWJlcikgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXQgPT09IHNlYXJjaFZhbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbmFtZTogJ2RvZXNOb3RFcXVhbCcsXG4gICAgICAgICAgICBpc1VuYXJ5OiBmYWxzZSxcbiAgICAgICAgICAgIGljb25OYW1lOiAnbm90X2VxdWFsJyxcbiAgICAgICAgICAgIGxvZ2ljOiAodGFyZ2V0OiBudW1iZXIsIHNlYXJjaFZhbDogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldCAhPT0gc2VhcmNoVmFsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBuYW1lOiAnZ3JlYXRlclRoYW4nLFxuICAgICAgICAgICAgaXNVbmFyeTogZmFsc2UsXG4gICAgICAgICAgICBpY29uTmFtZTogJ2dyZWF0ZXJfdGhhbicsXG4gICAgICAgICAgICBsb2dpYzogKHRhcmdldDogbnVtYmVyLCBzZWFyY2hWYWw6IG51bWJlcikgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXQgPiBzZWFyY2hWYWw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG5hbWU6ICdsZXNzVGhhbicsXG4gICAgICAgICAgICBpc1VuYXJ5OiBmYWxzZSxcbiAgICAgICAgICAgIGljb25OYW1lOiAnbGVzc190aGFuJyxcbiAgICAgICAgICAgIGxvZ2ljOiAodGFyZ2V0OiBudW1iZXIsIHNlYXJjaFZhbDogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldCA8IHNlYXJjaFZhbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbmFtZTogJ2dyZWF0ZXJUaGFuT3JFcXVhbFRvJyxcbiAgICAgICAgICAgIGlzVW5hcnk6IGZhbHNlLFxuICAgICAgICAgICAgaWNvbk5hbWU6ICdncmVhdGVyX3RoYW5fb3JfZXF1YWwnLFxuICAgICAgICAgICAgbG9naWM6ICh0YXJnZXQ6IG51bWJlciwgc2VhcmNoVmFsOiBudW1iZXIpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0ID49IHNlYXJjaFZhbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbmFtZTogJ2xlc3NUaGFuT3JFcXVhbFRvJyxcbiAgICAgICAgICAgIGlzVW5hcnk6IGZhbHNlLFxuICAgICAgICAgICAgaWNvbk5hbWU6ICdsZXNzX3RoYW5fb3JfZXF1YWwnLFxuICAgICAgICAgICAgbG9naWM6ICh0YXJnZXQ6IG51bWJlciwgc2VhcmNoVmFsOiBudW1iZXIpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0IDw9IHNlYXJjaFZhbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbmFtZTogJ2VtcHR5JyxcbiAgICAgICAgICAgIGlzVW5hcnk6IHRydWUsXG4gICAgICAgICAgICBpY29uTmFtZTogJ2VtcHR5JyxcbiAgICAgICAgICAgIGxvZ2ljOiAodGFyZ2V0OiBudW1iZXIpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0ID09PSBudWxsIHx8IHRhcmdldCA9PT0gdW5kZWZpbmVkIHx8IGlzTmFOKHRhcmdldCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG5hbWU6ICdub3RFbXB0eScsXG4gICAgICAgICAgICBpc1VuYXJ5OiB0cnVlLFxuICAgICAgICAgICAgaWNvbk5hbWU6ICdub3RfZW1wdHknLFxuICAgICAgICAgICAgbG9naWM6ICh0YXJnZXQ6IG51bWJlcikgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXQgIT09IG51bGwgJiYgdGFyZ2V0ICE9PSB1bmRlZmluZWQgJiYgIWlzTmFOKHRhcmdldCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1dLmNvbmNhdCh0aGlzLm9wZXJhdGlvbnMpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBQcm92aWRlcyBmaWx0ZXJpbmcgb3BlcmF0aW9ucyBmb3Igc3RyaW5nc1xuICpcbiAqIEBleHBvcnRcbiAqL1xuZXhwb3J0IGNsYXNzIElneFN0cmluZ0ZpbHRlcmluZ09wZXJhbmQgZXh0ZW5kcyBJZ3hGaWx0ZXJpbmdPcGVyYW5kIHtcbiAgICBwcm90ZWN0ZWQgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMub3BlcmF0aW9ucyA9IFt7XG4gICAgICAgICAgICBuYW1lOiAnY29udGFpbnMnLFxuICAgICAgICAgICAgaXNVbmFyeTogZmFsc2UsXG4gICAgICAgICAgICBpY29uTmFtZTogJ2NvbnRhaW5zJyxcbiAgICAgICAgICAgIGxvZ2ljOiAodGFyZ2V0OiBzdHJpbmcsIHNlYXJjaFZhbDogc3RyaW5nLCBpZ25vcmVDYXNlPzogYm9vbGVhbikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNlYXJjaCA9IElneFN0cmluZ0ZpbHRlcmluZ09wZXJhbmQuYXBwbHlJZ25vcmVDYXNlKHNlYXJjaFZhbCwgaWdub3JlQ2FzZSk7XG4gICAgICAgICAgICAgICAgdGFyZ2V0ID0gSWd4U3RyaW5nRmlsdGVyaW5nT3BlcmFuZC5hcHBseUlnbm9yZUNhc2UodGFyZ2V0LCBpZ25vcmVDYXNlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0LmluZGV4T2Yoc2VhcmNoKSAhPT0gLTE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG5hbWU6ICdkb2VzTm90Q29udGFpbicsXG4gICAgICAgICAgICBpc1VuYXJ5OiBmYWxzZSxcbiAgICAgICAgICAgIGljb25OYW1lOiAnZG9lc19ub3RfY29udGFpbicsXG4gICAgICAgICAgICBsb2dpYzogKHRhcmdldDogc3RyaW5nLCBzZWFyY2hWYWw6IHN0cmluZywgaWdub3JlQ2FzZT86IGJvb2xlYW4pID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBzZWFyY2ggPSBJZ3hTdHJpbmdGaWx0ZXJpbmdPcGVyYW5kLmFwcGx5SWdub3JlQ2FzZShzZWFyY2hWYWwsIGlnbm9yZUNhc2UpO1xuICAgICAgICAgICAgICAgIHRhcmdldCA9IElneFN0cmluZ0ZpbHRlcmluZ09wZXJhbmQuYXBwbHlJZ25vcmVDYXNlKHRhcmdldCwgaWdub3JlQ2FzZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldC5pbmRleE9mKHNlYXJjaCkgPT09IC0xO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBuYW1lOiAnc3RhcnRzV2l0aCcsXG4gICAgICAgICAgICBpc1VuYXJ5OiBmYWxzZSxcbiAgICAgICAgICAgIGljb25OYW1lOiAnc3RhcnRzX3dpdGgnLFxuICAgICAgICAgICAgbG9naWM6ICh0YXJnZXQ6IHN0cmluZywgc2VhcmNoVmFsOiBzdHJpbmcsIGlnbm9yZUNhc2U/OiBib29sZWFuKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2VhcmNoID0gSWd4U3RyaW5nRmlsdGVyaW5nT3BlcmFuZC5hcHBseUlnbm9yZUNhc2Uoc2VhcmNoVmFsLCBpZ25vcmVDYXNlKTtcbiAgICAgICAgICAgICAgICB0YXJnZXQgPSBJZ3hTdHJpbmdGaWx0ZXJpbmdPcGVyYW5kLmFwcGx5SWdub3JlQ2FzZSh0YXJnZXQsIGlnbm9yZUNhc2UpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXQuc3RhcnRzV2l0aChzZWFyY2gpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBuYW1lOiAnZW5kc1dpdGgnLFxuICAgICAgICAgICAgaXNVbmFyeTogZmFsc2UsXG4gICAgICAgICAgICBpY29uTmFtZTogJ2VuZHNfd2l0aCcsXG4gICAgICAgICAgICBsb2dpYzogKHRhcmdldDogc3RyaW5nLCBzZWFyY2hWYWw6IHN0cmluZywgaWdub3JlQ2FzZT86IGJvb2xlYW4pID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBzZWFyY2ggPSBJZ3hTdHJpbmdGaWx0ZXJpbmdPcGVyYW5kLmFwcGx5SWdub3JlQ2FzZShzZWFyY2hWYWwsIGlnbm9yZUNhc2UpO1xuICAgICAgICAgICAgICAgIHRhcmdldCA9IElneFN0cmluZ0ZpbHRlcmluZ09wZXJhbmQuYXBwbHlJZ25vcmVDYXNlKHRhcmdldCwgaWdub3JlQ2FzZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldC5lbmRzV2l0aChzZWFyY2gpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBuYW1lOiAnZXF1YWxzJyxcbiAgICAgICAgICAgIGlzVW5hcnk6IGZhbHNlLFxuICAgICAgICAgICAgaWNvbk5hbWU6ICdlcXVhbHMnLFxuICAgICAgICAgICAgbG9naWM6ICh0YXJnZXQ6IHN0cmluZywgc2VhcmNoVmFsOiBzdHJpbmcsIGlnbm9yZUNhc2U/OiBib29sZWFuKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2VhcmNoID0gSWd4U3RyaW5nRmlsdGVyaW5nT3BlcmFuZC5hcHBseUlnbm9yZUNhc2Uoc2VhcmNoVmFsLCBpZ25vcmVDYXNlKTtcbiAgICAgICAgICAgICAgICB0YXJnZXQgPSBJZ3hTdHJpbmdGaWx0ZXJpbmdPcGVyYW5kLmFwcGx5SWdub3JlQ2FzZSh0YXJnZXQsIGlnbm9yZUNhc2UpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXQgPT09IHNlYXJjaDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbmFtZTogJ2RvZXNOb3RFcXVhbCcsXG4gICAgICAgICAgICBpc1VuYXJ5OiBmYWxzZSxcbiAgICAgICAgICAgIGljb25OYW1lOiAnbm90X2VxdWFsJyxcbiAgICAgICAgICAgIGxvZ2ljOiAodGFyZ2V0OiBzdHJpbmcsIHNlYXJjaFZhbDogc3RyaW5nLCBpZ25vcmVDYXNlPzogYm9vbGVhbikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNlYXJjaCA9IElneFN0cmluZ0ZpbHRlcmluZ09wZXJhbmQuYXBwbHlJZ25vcmVDYXNlKHNlYXJjaFZhbCwgaWdub3JlQ2FzZSk7XG4gICAgICAgICAgICAgICAgdGFyZ2V0ID0gSWd4U3RyaW5nRmlsdGVyaW5nT3BlcmFuZC5hcHBseUlnbm9yZUNhc2UodGFyZ2V0LCBpZ25vcmVDYXNlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0ICE9PSBzZWFyY2g7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG5hbWU6ICdlbXB0eScsXG4gICAgICAgICAgICBpc1VuYXJ5OiB0cnVlLFxuICAgICAgICAgICAgaWNvbk5hbWU6ICdlbXB0eScsXG4gICAgICAgICAgICBsb2dpYzogKHRhcmdldDogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldCA9PT0gbnVsbCB8fCB0YXJnZXQgPT09IHVuZGVmaW5lZCB8fCB0YXJnZXQubGVuZ3RoID09PSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBuYW1lOiAnbm90RW1wdHknLFxuICAgICAgICAgICAgaXNVbmFyeTogdHJ1ZSxcbiAgICAgICAgICAgIGljb25OYW1lOiAnbm90X2VtcHR5JyxcbiAgICAgICAgICAgIGxvZ2ljOiAodGFyZ2V0OiBzdHJpbmcpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0ICE9PSBudWxsICYmIHRhcmdldCAhPT0gdW5kZWZpbmVkICYmIHRhcmdldC5sZW5ndGggPiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XS5jb25jYXQodGhpcy5vcGVyYXRpb25zKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBcHBsaWVzIGNhc2Ugc2Vuc2l0aXZpdHkgb24gc3RyaW5ncyBpZiBwcm92aWRlZFxuICAgICAqXG4gICAgICogQG1lbWJlcm9mIElneFN0cmluZ0ZpbHRlcmluZ09wZXJhbmRcbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIGFwcGx5SWdub3JlQ2FzZShhOiBzdHJpbmcsIGlnbm9yZUNhc2U6IGJvb2xlYW4pOiBzdHJpbmcge1xuICAgICAgICBhID0gYSB8fCAnJztcbiAgICAgICAgLy8gYnVsbGV0cHJvb2ZcbiAgICAgICAgcmV0dXJuIGlnbm9yZUNhc2UgPyAoJycgKyBhKS50b0xvd2VyQ2FzZSgpIDogYTtcbiAgICB9XG59XG5cbi8qKlxuICogSW50ZXJmYWNlIGRlc2NyaWJpbmcgZmlsdGVyaW5nIG9wZXJhdGlvbnNcbiAqXG4gKiBAZXhwb3J0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSUZpbHRlcmluZ09wZXJhdGlvbiB7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIGlzVW5hcnk6IGJvb2xlYW47XG4gICAgaWNvbk5hbWU6IHN0cmluZztcbiAgICBoaWRkZW4/OiBib29sZWFuO1xuICAgIGxvZ2ljOiAodmFsdWU6IGFueSwgc2VhcmNoVmFsPzogYW55LCBpZ25vcmVDYXNlPzogYm9vbGVhbikgPT4gYm9vbGVhbjtcbn1cblxuLyoqXG4gKiBJbnRlcmZhY2UgZGVzY3JpYmluZyBEYXRlIG9iamVjdCBpbiBwYXJ0c1xuICpcbiAqIEBleHBvcnRcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJRGF0ZVBhcnRzIHtcbiAgICB5ZWFyOiBudW1iZXI7XG4gICAgbW9udGg6IG51bWJlcjtcbiAgICBkYXk6IG51bWJlcjtcbiAgICBob3VyczogbnVtYmVyO1xuICAgIG1pbnV0ZXM6IG51bWJlcjtcbiAgICBzZWNvbmRzOiBudW1iZXI7XG4gICAgbWlsbGlzZWNvbmRzOiBudW1iZXI7XG59XG4iXX0=