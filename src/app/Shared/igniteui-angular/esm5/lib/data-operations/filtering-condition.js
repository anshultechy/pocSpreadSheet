/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/**
 * Provides base filtering operations
 * Implementations should be Singleton
 *
 * @export
 */
var IgxFilteringOperand = /** @class */ (function () {
    function IgxFilteringOperand() {
        var _this = this;
        this.operations = [{
                name: 'null',
                isUnary: true,
                iconName: 'is_null',
                logic: function (target) {
                    return target === null;
                }
            }, {
                name: 'notNull',
                isUnary: true,
                iconName: 'is_not_null',
                logic: function (target) {
                    return target !== null;
                }
            }, {
                name: 'in',
                isUnary: false,
                iconName: 'is_in',
                hidden: true,
                logic: function (target, searchVal) {
                    return _this.findValueInSet(target, searchVal);
                }
            }];
    }
    /**
     * @return {?}
     */
    IgxFilteringOperand.instance = /**
     * @return {?}
     */
    function () {
        return this._instance || (this._instance = new this());
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @protected
     * @param {?} target
     * @param {?} searchVal
     * @return {?}
     */
    IgxFilteringOperand.prototype.findValueInSet = /**
     * @hidden
     * @protected
     * @param {?} target
     * @param {?} searchVal
     * @return {?}
     */
    function (target, searchVal) {
        return searchVal.has(target);
    };
    /**
     * Returns an array of names of the conditions which are visible in the UI
     */
    /**
     * Returns an array of names of the conditions which are visible in the UI
     * @return {?}
     */
    IgxFilteringOperand.prototype.conditionList = /**
     * Returns an array of names of the conditions which are visible in the UI
     * @return {?}
     */
    function () {
        return this.operations.filter(function (f) { return !f.hidden; }).map(function (element) { return element.name; });
    };
    /**
     * Returns an instance of the condition with the specified name.
     * @param name The name of the condition.
     */
    /**
     * Returns an instance of the condition with the specified name.
     * @param {?} name The name of the condition.
     * @return {?}
     */
    IgxFilteringOperand.prototype.condition = /**
     * Returns an instance of the condition with the specified name.
     * @param {?} name The name of the condition.
     * @return {?}
     */
    function (name) {
        return this.operations.find(function (element) { return element.name === name; });
    };
    /**
     * Adds a new condition to the filtering operations.
     * @param operation The filtering operation.
     */
    /**
     * Adds a new condition to the filtering operations.
     * @param {?} operation The filtering operation.
     * @return {?}
     */
    IgxFilteringOperand.prototype.append = /**
     * Adds a new condition to the filtering operations.
     * @param {?} operation The filtering operation.
     * @return {?}
     */
    function (operation) {
        this.operations.push(operation);
    };
    IgxFilteringOperand._instance = null;
    return IgxFilteringOperand;
}());
export { IgxFilteringOperand };
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
var /**
 * Provides filtering operations for booleans
 *
 * @export
 */
IgxBooleanFilteringOperand = /** @class */ (function (_super) {
    tslib_1.__extends(IgxBooleanFilteringOperand, _super);
    function IgxBooleanFilteringOperand() {
        var _this = _super.call(this) || this;
        _this.operations = [{
                name: 'all',
                isUnary: true,
                iconName: 'all',
                logic: function (target) {
                    return true;
                }
            }, {
                name: 'true',
                isUnary: true,
                iconName: 'is_true',
                logic: function (target) {
                    return !!(target && target !== null && target !== undefined);
                }
            }, {
                name: 'false',
                isUnary: true,
                iconName: 'is_false',
                logic: function (target) {
                    return !target && target !== null && target !== undefined;
                }
            }, {
                name: 'empty',
                isUnary: true,
                iconName: 'empty',
                logic: function (target) {
                    return target === null || target === undefined;
                }
            }, {
                name: 'notEmpty',
                isUnary: true,
                iconName: 'not_empty',
                logic: function (target) {
                    return target !== null && target !== undefined;
                }
            }].concat(_this.operations);
        return _this;
    }
    return IgxBooleanFilteringOperand;
}(IgxFilteringOperand));
/**
 * Provides filtering operations for booleans
 *
 * @export
 */
export { IgxBooleanFilteringOperand };
/**
 * Provides filtering operations for Dates
 *
 * @export
 */
var /**
 * Provides filtering operations for Dates
 *
 * @export
 */
IgxDateFilteringOperand = /** @class */ (function (_super) {
    tslib_1.__extends(IgxDateFilteringOperand, _super);
    function IgxDateFilteringOperand() {
        var _this = _super.call(this) || this;
        _this.operations = [{
                name: 'equals',
                isUnary: false,
                iconName: 'equals',
                logic: function (target, searchVal) {
                    if (!target) {
                        return false;
                    }
                    _this.validateInputData(target);
                    /** @type {?} */
                    var targetp = IgxDateFilteringOperand.getDateParts(target, 'yMd');
                    /** @type {?} */
                    var searchp = IgxDateFilteringOperand.getDateParts(searchVal, 'yMd');
                    return targetp.year === searchp.year &&
                        targetp.month === searchp.month &&
                        targetp.day === searchp.day;
                }
            }, {
                name: 'doesNotEqual',
                isUnary: false,
                iconName: 'not_equal',
                logic: function (target, searchVal) {
                    if (!target) {
                        return true;
                    }
                    _this.validateInputData(target);
                    /** @type {?} */
                    var targetp = IgxDateFilteringOperand.getDateParts(target, 'yMd');
                    /** @type {?} */
                    var searchp = IgxDateFilteringOperand.getDateParts(searchVal, 'yMd');
                    return targetp.year !== searchp.year ||
                        targetp.month !== searchp.month ||
                        targetp.day !== searchp.day;
                }
            }, {
                name: 'before',
                isUnary: false,
                iconName: 'is_before',
                logic: function (target, searchVal) {
                    if (!target) {
                        return false;
                    }
                    _this.validateInputData(target);
                    return target < searchVal;
                }
            }, {
                name: 'after',
                isUnary: false,
                iconName: 'is_after',
                logic: function (target, searchVal) {
                    if (!target) {
                        return false;
                    }
                    _this.validateInputData(target);
                    return target > searchVal;
                }
            }, {
                name: 'today',
                isUnary: true,
                iconName: 'today',
                logic: function (target) {
                    if (!target) {
                        return false;
                    }
                    _this.validateInputData(target);
                    /** @type {?} */
                    var d = IgxDateFilteringOperand.getDateParts(target, 'yMd');
                    /** @type {?} */
                    var now = IgxDateFilteringOperand.getDateParts(new Date(), 'yMd');
                    return d.year === now.year &&
                        d.month === now.month &&
                        d.day === now.day;
                }
            }, {
                name: 'yesterday',
                isUnary: true,
                iconName: 'yesterday',
                logic: function (target) {
                    if (!target) {
                        return false;
                    }
                    _this.validateInputData(target);
                    /** @type {?} */
                    var td = IgxDateFilteringOperand.getDateParts(target, 'yMd');
                    /** @type {?} */
                    var y = (function (d) { return new Date(d.setDate(d.getDate() - 1)); })(new Date());
                    /** @type {?} */
                    var yesterday = IgxDateFilteringOperand.getDateParts(y, 'yMd');
                    return td.year === yesterday.year &&
                        td.month === yesterday.month &&
                        td.day === yesterday.day;
                }
            }, {
                name: 'thisMonth',
                isUnary: true,
                iconName: 'this_month',
                logic: function (target) {
                    if (!target) {
                        return false;
                    }
                    _this.validateInputData(target);
                    /** @type {?} */
                    var d = IgxDateFilteringOperand.getDateParts(target, 'yM');
                    /** @type {?} */
                    var now = IgxDateFilteringOperand.getDateParts(new Date(), 'yM');
                    return d.year === now.year &&
                        d.month === now.month;
                }
            }, {
                name: 'lastMonth',
                isUnary: true,
                iconName: 'last_month',
                logic: function (target) {
                    if (!target) {
                        return false;
                    }
                    _this.validateInputData(target);
                    /** @type {?} */
                    var d = IgxDateFilteringOperand.getDateParts(target, 'yM');
                    /** @type {?} */
                    var now = IgxDateFilteringOperand.getDateParts(new Date(), 'yM');
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
                logic: function (target) {
                    if (!target) {
                        return false;
                    }
                    _this.validateInputData(target);
                    /** @type {?} */
                    var d = IgxDateFilteringOperand.getDateParts(target, 'yM');
                    /** @type {?} */
                    var now = IgxDateFilteringOperand.getDateParts(new Date(), 'yM');
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
                logic: function (target) {
                    if (!target) {
                        return false;
                    }
                    _this.validateInputData(target);
                    /** @type {?} */
                    var d = IgxDateFilteringOperand.getDateParts(target, 'y');
                    /** @type {?} */
                    var now = IgxDateFilteringOperand.getDateParts(new Date(), 'y');
                    return d.year === now.year;
                }
            }, {
                name: 'lastYear',
                isUnary: true,
                iconName: 'last_year',
                logic: function (target) {
                    if (!target) {
                        return false;
                    }
                    _this.validateInputData(target);
                    /** @type {?} */
                    var d = IgxDateFilteringOperand.getDateParts(target, 'y');
                    /** @type {?} */
                    var now = IgxDateFilteringOperand.getDateParts(new Date(), 'y');
                    return d.year === now.year - 1;
                }
            }, {
                name: 'nextYear',
                isUnary: true,
                iconName: 'next_year',
                logic: function (target) {
                    if (!target) {
                        return false;
                    }
                    _this.validateInputData(target);
                    /** @type {?} */
                    var d = IgxDateFilteringOperand.getDateParts(target, 'y');
                    /** @type {?} */
                    var now = IgxDateFilteringOperand.getDateParts(new Date(), 'y');
                    return d.year === now.year + 1;
                }
            }, {
                name: 'empty',
                isUnary: true,
                iconName: 'empty',
                logic: function (target) {
                    return target === null || target === undefined;
                }
            }, {
                name: 'notEmpty',
                isUnary: true,
                iconName: 'not_empty',
                logic: function (target) {
                    return target !== null && target !== undefined;
                }
            }].concat(_this.operations);
        return _this;
    }
    /**
     * Splits a Date object into parts
     *
     * @memberof IgxDateFilteringOperand
     */
    /**
     * Splits a Date object into parts
     *
     * \@memberof IgxDateFilteringOperand
     * @param {?} date
     * @param {?=} dateFormat
     * @return {?}
     */
    IgxDateFilteringOperand.getDateParts = /**
     * Splits a Date object into parts
     *
     * \@memberof IgxDateFilteringOperand
     * @param {?} date
     * @param {?=} dateFormat
     * @return {?}
     */
    function (date, dateFormat) {
        /** @type {?} */
        var res = {
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
    };
    /**
     * @private
     * @param {?} target
     * @return {?}
     */
    IgxDateFilteringOperand.prototype.validateInputData = /**
     * @private
     * @param {?} target
     * @return {?}
     */
    function (target) {
        if (!(target instanceof Date)) {
            throw new Error('Could not perform filtering on \'date\' column because the datasource object type is not \'Date\'.');
        }
    };
    /**
     * @protected
     * @param {?} target
     * @param {?} searchVal
     * @return {?}
     */
    IgxDateFilteringOperand.prototype.findValueInSet = /**
     * @protected
     * @param {?} target
     * @param {?} searchVal
     * @return {?}
     */
    function (target, searchVal) {
        return searchVal.has(new Date(target.getFullYear(), target.getMonth(), target.getDate()).toISOString());
    };
    return IgxDateFilteringOperand;
}(IgxFilteringOperand));
/**
 * Provides filtering operations for Dates
 *
 * @export
 */
export { IgxDateFilteringOperand };
/**
 * Provides filtering operations for numbers
 *
 * @export
 */
var /**
 * Provides filtering operations for numbers
 *
 * @export
 */
IgxNumberFilteringOperand = /** @class */ (function (_super) {
    tslib_1.__extends(IgxNumberFilteringOperand, _super);
    function IgxNumberFilteringOperand() {
        var _this = _super.call(this) || this;
        _this.operations = [{
                name: 'equals',
                isUnary: false,
                iconName: 'equals',
                logic: function (target, searchVal) {
                    return target === searchVal;
                }
            }, {
                name: 'doesNotEqual',
                isUnary: false,
                iconName: 'not_equal',
                logic: function (target, searchVal) {
                    return target !== searchVal;
                }
            }, {
                name: 'greaterThan',
                isUnary: false,
                iconName: 'greater_than',
                logic: function (target, searchVal) {
                    return target > searchVal;
                }
            }, {
                name: 'lessThan',
                isUnary: false,
                iconName: 'less_than',
                logic: function (target, searchVal) {
                    return target < searchVal;
                }
            }, {
                name: 'greaterThanOrEqualTo',
                isUnary: false,
                iconName: 'greater_than_or_equal',
                logic: function (target, searchVal) {
                    return target >= searchVal;
                }
            }, {
                name: 'lessThanOrEqualTo',
                isUnary: false,
                iconName: 'less_than_or_equal',
                logic: function (target, searchVal) {
                    return target <= searchVal;
                }
            }, {
                name: 'empty',
                isUnary: true,
                iconName: 'empty',
                logic: function (target) {
                    return target === null || target === undefined || isNaN(target);
                }
            }, {
                name: 'notEmpty',
                isUnary: true,
                iconName: 'not_empty',
                logic: function (target) {
                    return target !== null && target !== undefined && !isNaN(target);
                }
            }].concat(_this.operations);
        return _this;
    }
    return IgxNumberFilteringOperand;
}(IgxFilteringOperand));
/**
 * Provides filtering operations for numbers
 *
 * @export
 */
export { IgxNumberFilteringOperand };
/**
 * Provides filtering operations for strings
 *
 * @export
 */
var /**
 * Provides filtering operations for strings
 *
 * @export
 */
IgxStringFilteringOperand = /** @class */ (function (_super) {
    tslib_1.__extends(IgxStringFilteringOperand, _super);
    function IgxStringFilteringOperand() {
        var _this = _super.call(this) || this;
        _this.operations = [{
                name: 'contains',
                isUnary: false,
                iconName: 'contains',
                logic: function (target, searchVal, ignoreCase) {
                    /** @type {?} */
                    var search = IgxStringFilteringOperand.applyIgnoreCase(searchVal, ignoreCase);
                    target = IgxStringFilteringOperand.applyIgnoreCase(target, ignoreCase);
                    return target.indexOf(search) !== -1;
                }
            }, {
                name: 'doesNotContain',
                isUnary: false,
                iconName: 'does_not_contain',
                logic: function (target, searchVal, ignoreCase) {
                    /** @type {?} */
                    var search = IgxStringFilteringOperand.applyIgnoreCase(searchVal, ignoreCase);
                    target = IgxStringFilteringOperand.applyIgnoreCase(target, ignoreCase);
                    return target.indexOf(search) === -1;
                }
            }, {
                name: 'startsWith',
                isUnary: false,
                iconName: 'starts_with',
                logic: function (target, searchVal, ignoreCase) {
                    /** @type {?} */
                    var search = IgxStringFilteringOperand.applyIgnoreCase(searchVal, ignoreCase);
                    target = IgxStringFilteringOperand.applyIgnoreCase(target, ignoreCase);
                    return target.startsWith(search);
                }
            }, {
                name: 'endsWith',
                isUnary: false,
                iconName: 'ends_with',
                logic: function (target, searchVal, ignoreCase) {
                    /** @type {?} */
                    var search = IgxStringFilteringOperand.applyIgnoreCase(searchVal, ignoreCase);
                    target = IgxStringFilteringOperand.applyIgnoreCase(target, ignoreCase);
                    return target.endsWith(search);
                }
            }, {
                name: 'equals',
                isUnary: false,
                iconName: 'equals',
                logic: function (target, searchVal, ignoreCase) {
                    /** @type {?} */
                    var search = IgxStringFilteringOperand.applyIgnoreCase(searchVal, ignoreCase);
                    target = IgxStringFilteringOperand.applyIgnoreCase(target, ignoreCase);
                    return target === search;
                }
            }, {
                name: 'doesNotEqual',
                isUnary: false,
                iconName: 'not_equal',
                logic: function (target, searchVal, ignoreCase) {
                    /** @type {?} */
                    var search = IgxStringFilteringOperand.applyIgnoreCase(searchVal, ignoreCase);
                    target = IgxStringFilteringOperand.applyIgnoreCase(target, ignoreCase);
                    return target !== search;
                }
            }, {
                name: 'empty',
                isUnary: true,
                iconName: 'empty',
                logic: function (target) {
                    return target === null || target === undefined || target.length === 0;
                }
            }, {
                name: 'notEmpty',
                isUnary: true,
                iconName: 'not_empty',
                logic: function (target) {
                    return target !== null && target !== undefined && target.length > 0;
                }
            }].concat(_this.operations);
        return _this;
    }
    /**
     * Applies case sensitivity on strings if provided
     *
     * @memberof IgxStringFilteringOperand
     */
    /**
     * Applies case sensitivity on strings if provided
     *
     * \@memberof IgxStringFilteringOperand
     * @param {?} a
     * @param {?} ignoreCase
     * @return {?}
     */
    IgxStringFilteringOperand.applyIgnoreCase = /**
     * Applies case sensitivity on strings if provided
     *
     * \@memberof IgxStringFilteringOperand
     * @param {?} a
     * @param {?} ignoreCase
     * @return {?}
     */
    function (a, ignoreCase) {
        a = a || '';
        // bulletproof
        return ignoreCase ? ('' + a).toLowerCase() : a;
    };
    return IgxStringFilteringOperand;
}(IgxFilteringOperand));
/**
 * Provides filtering operations for strings
 *
 * @export
 */
export { IgxStringFilteringOperand };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyaW5nLWNvbmRpdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lnbml0ZXVpLWFuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvZGF0YS1vcGVyYXRpb25zL2ZpbHRlcmluZy1jb25kaXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFNQTtJQUlJO1FBQUEsaUJBd0JDO1FBdkJHLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQztnQkFDZixJQUFJLEVBQUUsTUFBTTtnQkFDWixPQUFPLEVBQUUsSUFBSTtnQkFDYixRQUFRLEVBQUUsU0FBUztnQkFDbkIsS0FBSyxFQUFFLFVBQUMsTUFBVztvQkFDZixPQUFPLE1BQU0sS0FBSyxJQUFJLENBQUM7Z0JBQzNCLENBQUM7YUFDSixFQUFFO2dCQUNDLElBQUksRUFBRSxTQUFTO2dCQUNmLE9BQU8sRUFBRSxJQUFJO2dCQUNiLFFBQVEsRUFBRSxhQUFhO2dCQUN2QixLQUFLLEVBQUUsVUFBQyxNQUFXO29CQUNmLE9BQU8sTUFBTSxLQUFLLElBQUksQ0FBQztnQkFDM0IsQ0FBQzthQUNKLEVBQUU7Z0JBQ0MsSUFBSSxFQUFFLElBQUk7Z0JBQ1YsT0FBTyxFQUFFLEtBQUs7Z0JBQ2QsUUFBUSxFQUFFLE9BQU87Z0JBQ2pCLE1BQU0sRUFBRSxJQUFJO2dCQUNaLEtBQUssRUFBRSxVQUFDLE1BQVcsRUFBRSxTQUFtQjtvQkFDcEMsT0FBTyxLQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxTQUFTLENBQUMsQ0FBQztnQkFDbEQsQ0FBQzthQUNKLENBQUMsQ0FBQztJQUNQLENBQUM7Ozs7SUFFYSw0QkFBUTs7O0lBQXRCO1FBQ0ksT0FBTyxJQUFJLENBQUMsU0FBUyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDLENBQUM7SUFDM0QsQ0FBQztJQUVEOztPQUVHOzs7Ozs7OztJQUNPLDRDQUFjOzs7Ozs7O0lBQXhCLFVBQXlCLE1BQVcsRUFBRSxT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QU0sS0FBSyxJQUFJLElBQUksTUFBTSxLQUFLLFNBQVMsSUFBSSxNQUFNLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQztnQkFDMUUsQ0FBQzthQUNKLEVBQUU7Z0JBQ0MsSUFBSSxFQUFFLFVBQVU7Z0JBQ2hCLE9BQU8sRUFBRSxJQUFJO2dCQUNiLFFBQVEsRUFBRSxXQUFXO2dCQUNyQixLQUFLLEVBQUUsVUFBQyxNQUFjO29CQUNsQixPQUFPLE1BQU0sS0FBSyxJQUFJLElBQUksTUFBTSxLQUFLLFNBQVMsSUFBSSxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztnQkFDeEUsQ0FBQzthQUNKLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDOztJQUMvQixDQUFDO0lBRUQ7Ozs7T0FJRzs7Ozs7Ozs7O0lBQ1cseUNBQWU7Ozs7Ozs7O0lBQTdCLFVBQThCLENBQVMsRUFBRSxVQUFtQjtRQUN4RCxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNaLGNBQWM7UUFDZCxPQUFPLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBQ0wsZ0NBQUM7QUFBRCxDQUFDLEFBcEZELENBQStDLG1CQUFtQixHQW9GakU7Ozs7Ozs7Ozs7Ozs7QUFPRCx5Q0FNQzs7O0lBTEcsbUNBQWE7O0lBQ2Isc0NBQWlCOztJQUNqQix1Q0FBaUI7O0lBQ2pCLHFDQUFpQjs7SUFDakIsb0NBQXNFOzs7Ozs7OztBQVExRSxnQ0FRQzs7O0lBUEcsMEJBQWE7O0lBQ2IsMkJBQWM7O0lBQ2QseUJBQVk7O0lBQ1osMkJBQWM7O0lBQ2QsNkJBQWdCOztJQUNoQiw2QkFBZ0I7O0lBQ2hCLGtDQUFxQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogUHJvdmlkZXMgYmFzZSBmaWx0ZXJpbmcgb3BlcmF0aW9uc1xuICogSW1wbGVtZW50YXRpb25zIHNob3VsZCBiZSBTaW5nbGV0b25cbiAqXG4gKiBAZXhwb3J0XG4gKi9cbmV4cG9ydCBjbGFzcyBJZ3hGaWx0ZXJpbmdPcGVyYW5kIHtcbiAgICBwcm90ZWN0ZWQgc3RhdGljIF9pbnN0YW5jZTogSWd4RmlsdGVyaW5nT3BlcmFuZCA9IG51bGw7XG4gICAgcHVibGljIG9wZXJhdGlvbnM6IElGaWx0ZXJpbmdPcGVyYXRpb25bXTtcblxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5vcGVyYXRpb25zID0gW3tcbiAgICAgICAgICAgIG5hbWU6ICdudWxsJyxcbiAgICAgICAgICAgIGlzVW5hcnk6IHRydWUsXG4gICAgICAgICAgICBpY29uTmFtZTogJ2lzX251bGwnLFxuICAgICAgICAgICAgbG9naWM6ICh0YXJnZXQ6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXQgPT09IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG5hbWU6ICdub3ROdWxsJyxcbiAgICAgICAgICAgIGlzVW5hcnk6IHRydWUsXG4gICAgICAgICAgICBpY29uTmFtZTogJ2lzX25vdF9udWxsJyxcbiAgICAgICAgICAgIGxvZ2ljOiAodGFyZ2V0OiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0ICE9PSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBuYW1lOiAnaW4nLFxuICAgICAgICAgICAgaXNVbmFyeTogZmFsc2UsXG4gICAgICAgICAgICBpY29uTmFtZTogJ2lzX2luJyxcbiAgICAgICAgICAgIGhpZGRlbjogdHJ1ZSxcbiAgICAgICAgICAgIGxvZ2ljOiAodGFyZ2V0OiBhbnksIHNlYXJjaFZhbDogU2V0PGFueT4pID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5maW5kVmFsdWVJblNldCh0YXJnZXQsIHNlYXJjaFZhbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1dO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgaW5zdGFuY2UoKTogSWd4RmlsdGVyaW5nT3BlcmFuZCB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZSB8fCAodGhpcy5faW5zdGFuY2UgPSBuZXcgdGhpcygpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGZpbmRWYWx1ZUluU2V0KHRhcmdldDogYW55LCBzZWFyY2hWYWw6IFNldDxhbnk+KSB7XG4gICAgICAgIHJldHVybiBzZWFyY2hWYWwuaGFzKHRhcmdldCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbiBhcnJheSBvZiBuYW1lcyBvZiB0aGUgY29uZGl0aW9ucyB3aGljaCBhcmUgdmlzaWJsZSBpbiB0aGUgVUlcbiAgICAgKi9cbiAgICBwdWJsaWMgY29uZGl0aW9uTGlzdCgpOiBzdHJpbmdbXSB7XG4gICAgICAgIHJldHVybiB0aGlzLm9wZXJhdGlvbnMuZmlsdGVyKGYgPT4gIWYuaGlkZGVuKS5tYXAoKGVsZW1lbnQpID0+IGVsZW1lbnQubmFtZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbiBpbnN0YW5jZSBvZiB0aGUgY29uZGl0aW9uIHdpdGggdGhlIHNwZWNpZmllZCBuYW1lLlxuICAgICAqIEBwYXJhbSBuYW1lIFRoZSBuYW1lIG9mIHRoZSBjb25kaXRpb24uXG4gICAgICovXG4gICAgcHVibGljIGNvbmRpdGlvbihuYW1lOiBzdHJpbmcpOiBJRmlsdGVyaW5nT3BlcmF0aW9uIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub3BlcmF0aW9ucy5maW5kKChlbGVtZW50KSA9PiBlbGVtZW50Lm5hbWUgPT09IG5hbWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZHMgYSBuZXcgY29uZGl0aW9uIHRvIHRoZSBmaWx0ZXJpbmcgb3BlcmF0aW9ucy5cbiAgICAgKiBAcGFyYW0gb3BlcmF0aW9uIFRoZSBmaWx0ZXJpbmcgb3BlcmF0aW9uLlxuICAgICAqL1xuICAgIHB1YmxpYyBhcHBlbmQob3BlcmF0aW9uOiBJRmlsdGVyaW5nT3BlcmF0aW9uKSB7XG4gICAgICAgIHRoaXMub3BlcmF0aW9ucy5wdXNoKG9wZXJhdGlvbik7XG4gICAgfVxufVxuXG4vKipcbiAqIFByb3ZpZGVzIGZpbHRlcmluZyBvcGVyYXRpb25zIGZvciBib29sZWFuc1xuICpcbiAqIEBleHBvcnRcbiAqL1xuZXhwb3J0IGNsYXNzIElneEJvb2xlYW5GaWx0ZXJpbmdPcGVyYW5kIGV4dGVuZHMgSWd4RmlsdGVyaW5nT3BlcmFuZCB7XG4gICAgcHJvdGVjdGVkIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLm9wZXJhdGlvbnMgPSBbe1xuICAgICAgICAgICAgbmFtZTogJ2FsbCcsXG4gICAgICAgICAgICBpc1VuYXJ5OiB0cnVlLFxuICAgICAgICAgICAgaWNvbk5hbWU6ICdhbGwnLFxuICAgICAgICAgICAgbG9naWM6ICh0YXJnZXQ6IGJvb2xlYW4pID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbmFtZTogJ3RydWUnLFxuICAgICAgICAgICAgaXNVbmFyeTogdHJ1ZSxcbiAgICAgICAgICAgIGljb25OYW1lOiAnaXNfdHJ1ZScsXG4gICAgICAgICAgICBsb2dpYzogKHRhcmdldDogYm9vbGVhbikgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiAhISh0YXJnZXQgJiYgdGFyZ2V0ICE9PSBudWxsICYmIHRhcmdldCAhPT0gdW5kZWZpbmVkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbmFtZTogJ2ZhbHNlJyxcbiAgICAgICAgICAgIGlzVW5hcnk6IHRydWUsXG4gICAgICAgICAgICBpY29uTmFtZTogJ2lzX2ZhbHNlJyxcbiAgICAgICAgICAgIGxvZ2ljOiAodGFyZ2V0OiBib29sZWFuKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICF0YXJnZXQgJiYgdGFyZ2V0ICE9PSBudWxsICYmIHRhcmdldCAhPT0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBuYW1lOiAnZW1wdHknLFxuICAgICAgICAgICAgaXNVbmFyeTogdHJ1ZSxcbiAgICAgICAgICAgIGljb25OYW1lOiAnZW1wdHknLFxuICAgICAgICAgICAgbG9naWM6ICh0YXJnZXQ6IGJvb2xlYW4pID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0ID09PSBudWxsIHx8IHRhcmdldCA9PT0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBuYW1lOiAnbm90RW1wdHknLFxuICAgICAgICAgICAgaXNVbmFyeTogdHJ1ZSxcbiAgICAgICAgICAgIGljb25OYW1lOiAnbm90X2VtcHR5JyxcbiAgICAgICAgICAgIGxvZ2ljOiAodGFyZ2V0OiBib29sZWFuKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldCAhPT0gbnVsbCAmJiB0YXJnZXQgIT09IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfV0uY29uY2F0KHRoaXMub3BlcmF0aW9ucyk7XG4gICAgfVxufVxuXG4vKipcbiAqIFByb3ZpZGVzIGZpbHRlcmluZyBvcGVyYXRpb25zIGZvciBEYXRlc1xuICpcbiAqIEBleHBvcnRcbiAqL1xuZXhwb3J0IGNsYXNzIElneERhdGVGaWx0ZXJpbmdPcGVyYW5kIGV4dGVuZHMgSWd4RmlsdGVyaW5nT3BlcmFuZCB7XG4gICAgcHJvdGVjdGVkIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLm9wZXJhdGlvbnMgPSBbe1xuICAgICAgICAgICAgbmFtZTogJ2VxdWFscycsXG4gICAgICAgICAgICBpc1VuYXJ5OiBmYWxzZSxcbiAgICAgICAgICAgIGljb25OYW1lOiAnZXF1YWxzJyxcbiAgICAgICAgICAgIGxvZ2ljOiAodGFyZ2V0OiBEYXRlLCBzZWFyY2hWYWw6IERhdGUpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIXRhcmdldCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy52YWxpZGF0ZUlucHV0RGF0YSh0YXJnZXQpO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0cCA9IElneERhdGVGaWx0ZXJpbmdPcGVyYW5kLmdldERhdGVQYXJ0cyh0YXJnZXQsICd5TWQnKTtcbiAgICAgICAgICAgICAgICBjb25zdCBzZWFyY2hwID0gSWd4RGF0ZUZpbHRlcmluZ09wZXJhbmQuZ2V0RGF0ZVBhcnRzKHNlYXJjaFZhbCwgJ3lNZCcpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXRwLnllYXIgPT09IHNlYXJjaHAueWVhciAmJlxuICAgICAgICAgICAgICAgICAgICB0YXJnZXRwLm1vbnRoID09PSBzZWFyY2hwLm1vbnRoICYmXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldHAuZGF5ID09PSBzZWFyY2hwLmRheTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbmFtZTogJ2RvZXNOb3RFcXVhbCcsXG4gICAgICAgICAgICBpc1VuYXJ5OiBmYWxzZSxcbiAgICAgICAgICAgIGljb25OYW1lOiAnbm90X2VxdWFsJyxcbiAgICAgICAgICAgIGxvZ2ljOiAodGFyZ2V0OiBEYXRlLCBzZWFyY2hWYWw6IERhdGUpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIXRhcmdldCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLnZhbGlkYXRlSW5wdXREYXRhKHRhcmdldCk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCB0YXJnZXRwID0gSWd4RGF0ZUZpbHRlcmluZ09wZXJhbmQuZ2V0RGF0ZVBhcnRzKHRhcmdldCwgJ3lNZCcpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHNlYXJjaHAgPSBJZ3hEYXRlRmlsdGVyaW5nT3BlcmFuZC5nZXREYXRlUGFydHMoc2VhcmNoVmFsLCAneU1kJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldHAueWVhciAhPT0gc2VhcmNocC55ZWFyIHx8XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldHAubW9udGggIT09IHNlYXJjaHAubW9udGggfHxcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0cC5kYXkgIT09IHNlYXJjaHAuZGF5O1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBuYW1lOiAnYmVmb3JlJyxcbiAgICAgICAgICAgIGlzVW5hcnk6IGZhbHNlLFxuICAgICAgICAgICAgaWNvbk5hbWU6ICdpc19iZWZvcmUnLFxuICAgICAgICAgICAgbG9naWM6ICh0YXJnZXQ6IERhdGUsIHNlYXJjaFZhbDogRGF0ZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLnZhbGlkYXRlSW5wdXREYXRhKHRhcmdldCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0IDwgc2VhcmNoVmFsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBuYW1lOiAnYWZ0ZXInLFxuICAgICAgICAgICAgaXNVbmFyeTogZmFsc2UsXG4gICAgICAgICAgICBpY29uTmFtZTogJ2lzX2FmdGVyJyxcbiAgICAgICAgICAgIGxvZ2ljOiAodGFyZ2V0OiBEYXRlLCBzZWFyY2hWYWw6IERhdGUpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIXRhcmdldCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy52YWxpZGF0ZUlucHV0RGF0YSh0YXJnZXQpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldCA+IHNlYXJjaFZhbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbmFtZTogJ3RvZGF5JyxcbiAgICAgICAgICAgIGlzVW5hcnk6IHRydWUsXG4gICAgICAgICAgICBpY29uTmFtZTogJ3RvZGF5JyxcbiAgICAgICAgICAgIGxvZ2ljOiAodGFyZ2V0OiBEYXRlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMudmFsaWRhdGVJbnB1dERhdGEodGFyZ2V0KTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGQgPSBJZ3hEYXRlRmlsdGVyaW5nT3BlcmFuZC5nZXREYXRlUGFydHModGFyZ2V0LCAneU1kJyk7XG4gICAgICAgICAgICAgICAgY29uc3Qgbm93ID0gSWd4RGF0ZUZpbHRlcmluZ09wZXJhbmQuZ2V0RGF0ZVBhcnRzKG5ldyBEYXRlKCksICd5TWQnKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZC55ZWFyID09PSBub3cueWVhciAmJlxuICAgICAgICAgICAgICAgICAgICBkLm1vbnRoID09PSBub3cubW9udGggJiZcbiAgICAgICAgICAgICAgICAgICAgZC5kYXkgPT09IG5vdy5kYXk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG5hbWU6ICd5ZXN0ZXJkYXknLFxuICAgICAgICAgICAgaXNVbmFyeTogdHJ1ZSxcbiAgICAgICAgICAgIGljb25OYW1lOiAneWVzdGVyZGF5JyxcbiAgICAgICAgICAgIGxvZ2ljOiAodGFyZ2V0OiBEYXRlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMudmFsaWRhdGVJbnB1dERhdGEodGFyZ2V0KTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHRkID0gSWd4RGF0ZUZpbHRlcmluZ09wZXJhbmQuZ2V0RGF0ZVBhcnRzKHRhcmdldCwgJ3lNZCcpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHkgPSAoKGQpID0+IG5ldyBEYXRlKGQuc2V0RGF0ZShkLmdldERhdGUoKSAtIDEpKSkobmV3IERhdGUoKSk7XG4gICAgICAgICAgICAgICAgY29uc3QgeWVzdGVyZGF5ID0gSWd4RGF0ZUZpbHRlcmluZ09wZXJhbmQuZ2V0RGF0ZVBhcnRzKHksICd5TWQnKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGQueWVhciA9PT0geWVzdGVyZGF5LnllYXIgJiZcbiAgICAgICAgICAgICAgICAgICAgdGQubW9udGggPT09IHllc3RlcmRheS5tb250aCAmJlxuICAgICAgICAgICAgICAgICAgICB0ZC5kYXkgPT09IHllc3RlcmRheS5kYXk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG5hbWU6ICd0aGlzTW9udGgnLFxuICAgICAgICAgICAgaXNVbmFyeTogdHJ1ZSxcbiAgICAgICAgICAgIGljb25OYW1lOiAndGhpc19tb250aCcsXG4gICAgICAgICAgICBsb2dpYzogKHRhcmdldDogRGF0ZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLnZhbGlkYXRlSW5wdXREYXRhKHRhcmdldCk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBkID0gSWd4RGF0ZUZpbHRlcmluZ09wZXJhbmQuZ2V0RGF0ZVBhcnRzKHRhcmdldCwgJ3lNJyk7XG4gICAgICAgICAgICAgICAgY29uc3Qgbm93ID0gSWd4RGF0ZUZpbHRlcmluZ09wZXJhbmQuZ2V0RGF0ZVBhcnRzKG5ldyBEYXRlKCksICd5TScpO1xuICAgICAgICAgICAgICAgIHJldHVybiBkLnllYXIgPT09IG5vdy55ZWFyICYmXG4gICAgICAgICAgICAgICAgICAgIGQubW9udGggPT09IG5vdy5tb250aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbmFtZTogJ2xhc3RNb250aCcsXG4gICAgICAgICAgICBpc1VuYXJ5OiB0cnVlLFxuICAgICAgICAgICAgaWNvbk5hbWU6ICdsYXN0X21vbnRoJyxcbiAgICAgICAgICAgIGxvZ2ljOiAodGFyZ2V0OiBEYXRlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMudmFsaWRhdGVJbnB1dERhdGEodGFyZ2V0KTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGQgPSBJZ3hEYXRlRmlsdGVyaW5nT3BlcmFuZC5nZXREYXRlUGFydHModGFyZ2V0LCAneU0nKTtcbiAgICAgICAgICAgICAgICBjb25zdCBub3cgPSBJZ3hEYXRlRmlsdGVyaW5nT3BlcmFuZC5nZXREYXRlUGFydHMobmV3IERhdGUoKSwgJ3lNJyk7XG4gICAgICAgICAgICAgICAgaWYgKCFub3cubW9udGgpIHtcbiAgICAgICAgICAgICAgICAgICAgbm93Lm1vbnRoID0gMTE7XG4gICAgICAgICAgICAgICAgICAgIG5vdy55ZWFyIC09IDE7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbm93Lm1vbnRoLS07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBkLnllYXIgPT09IG5vdy55ZWFyICYmXG4gICAgICAgICAgICAgICAgICAgIGQubW9udGggPT09IG5vdy5tb250aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbmFtZTogJ25leHRNb250aCcsXG4gICAgICAgICAgICBpc1VuYXJ5OiB0cnVlLFxuICAgICAgICAgICAgaWNvbk5hbWU6ICduZXh0X21vbnRoJyxcbiAgICAgICAgICAgIGxvZ2ljOiAodGFyZ2V0OiBEYXRlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMudmFsaWRhdGVJbnB1dERhdGEodGFyZ2V0KTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGQgPSBJZ3hEYXRlRmlsdGVyaW5nT3BlcmFuZC5nZXREYXRlUGFydHModGFyZ2V0LCAneU0nKTtcbiAgICAgICAgICAgICAgICBjb25zdCBub3cgPSBJZ3hEYXRlRmlsdGVyaW5nT3BlcmFuZC5nZXREYXRlUGFydHMobmV3IERhdGUoKSwgJ3lNJyk7XG4gICAgICAgICAgICAgICAgaWYgKG5vdy5tb250aCA9PT0gMTEpIHtcbiAgICAgICAgICAgICAgICAgICAgbm93Lm1vbnRoID0gMDtcbiAgICAgICAgICAgICAgICAgICAgbm93LnllYXIgKz0gMTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBub3cubW9udGgrKztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGQueWVhciA9PT0gbm93LnllYXIgJiZcbiAgICAgICAgICAgICAgICAgICAgZC5tb250aCA9PT0gbm93Lm1vbnRoO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBuYW1lOiAndGhpc1llYXInLFxuICAgICAgICAgICAgaXNVbmFyeTogdHJ1ZSxcbiAgICAgICAgICAgIGljb25OYW1lOiAndGhpc195ZWFyJyxcbiAgICAgICAgICAgIGxvZ2ljOiAodGFyZ2V0OiBEYXRlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMudmFsaWRhdGVJbnB1dERhdGEodGFyZ2V0KTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGQgPSBJZ3hEYXRlRmlsdGVyaW5nT3BlcmFuZC5nZXREYXRlUGFydHModGFyZ2V0LCAneScpO1xuICAgICAgICAgICAgICAgIGNvbnN0IG5vdyA9IElneERhdGVGaWx0ZXJpbmdPcGVyYW5kLmdldERhdGVQYXJ0cyhuZXcgRGF0ZSgpLCAneScpO1xuICAgICAgICAgICAgICAgIHJldHVybiBkLnllYXIgPT09IG5vdy55ZWFyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBuYW1lOiAnbGFzdFllYXInLFxuICAgICAgICAgICAgaXNVbmFyeTogdHJ1ZSxcbiAgICAgICAgICAgIGljb25OYW1lOiAnbGFzdF95ZWFyJyxcbiAgICAgICAgICAgIGxvZ2ljOiAodGFyZ2V0OiBEYXRlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMudmFsaWRhdGVJbnB1dERhdGEodGFyZ2V0KTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGQgPSBJZ3hEYXRlRmlsdGVyaW5nT3BlcmFuZC5nZXREYXRlUGFydHModGFyZ2V0LCAneScpO1xuICAgICAgICAgICAgICAgIGNvbnN0IG5vdyA9IElneERhdGVGaWx0ZXJpbmdPcGVyYW5kLmdldERhdGVQYXJ0cyhuZXcgRGF0ZSgpLCAneScpO1xuICAgICAgICAgICAgICAgIHJldHVybiBkLnllYXIgPT09IG5vdy55ZWFyIC0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbmFtZTogJ25leHRZZWFyJyxcbiAgICAgICAgICAgIGlzVW5hcnk6IHRydWUsXG4gICAgICAgICAgICBpY29uTmFtZTogJ25leHRfeWVhcicsXG4gICAgICAgICAgICBsb2dpYzogKHRhcmdldDogRGF0ZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLnZhbGlkYXRlSW5wdXREYXRhKHRhcmdldCk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBkID0gSWd4RGF0ZUZpbHRlcmluZ09wZXJhbmQuZ2V0RGF0ZVBhcnRzKHRhcmdldCwgJ3knKTtcbiAgICAgICAgICAgICAgICBjb25zdCBub3cgPSBJZ3hEYXRlRmlsdGVyaW5nT3BlcmFuZC5nZXREYXRlUGFydHMobmV3IERhdGUoKSwgJ3knKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZC55ZWFyID09PSBub3cueWVhciArIDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG5hbWU6ICdlbXB0eScsXG4gICAgICAgICAgICBpc1VuYXJ5OiB0cnVlLFxuICAgICAgICAgICAgaWNvbk5hbWU6ICdlbXB0eScsXG4gICAgICAgICAgICBsb2dpYzogKHRhcmdldDogRGF0ZSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXQgPT09IG51bGwgfHwgdGFyZ2V0ID09PSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG5hbWU6ICdub3RFbXB0eScsXG4gICAgICAgICAgICBpc1VuYXJ5OiB0cnVlLFxuICAgICAgICAgICAgaWNvbk5hbWU6ICdub3RfZW1wdHknLFxuICAgICAgICAgICAgbG9naWM6ICh0YXJnZXQ6IERhdGUpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0ICE9PSBudWxsICYmIHRhcmdldCAhPT0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XS5jb25jYXQodGhpcy5vcGVyYXRpb25zKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTcGxpdHMgYSBEYXRlIG9iamVjdCBpbnRvIHBhcnRzXG4gICAgICpcbiAgICAgKiBAbWVtYmVyb2YgSWd4RGF0ZUZpbHRlcmluZ09wZXJhbmRcbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIGdldERhdGVQYXJ0cyhkYXRlOiBEYXRlLCBkYXRlRm9ybWF0Pzogc3RyaW5nKTogSURhdGVQYXJ0cyB7XG4gICAgICAgIGNvbnN0IHJlcyA9IHtcbiAgICAgICAgICAgIGRheTogbnVsbCxcbiAgICAgICAgICAgIGhvdXJzOiBudWxsLFxuICAgICAgICAgICAgbWlsbGlzZWNvbmRzOiBudWxsLFxuICAgICAgICAgICAgbWludXRlczogbnVsbCxcbiAgICAgICAgICAgIG1vbnRoOiBudWxsLFxuICAgICAgICAgICAgc2Vjb25kczogbnVsbCxcbiAgICAgICAgICAgIHllYXI6IG51bGxcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKCFkYXRlIHx8ICFkYXRlRm9ybWF0KSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkYXRlRm9ybWF0LmluZGV4T2YoJ3knKSA+PSAwKSB7XG4gICAgICAgICAgICByZXMueWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZGF0ZUZvcm1hdC5pbmRleE9mKCdNJykgPj0gMCkge1xuICAgICAgICAgICAgcmVzLm1vbnRoID0gZGF0ZS5nZXRNb250aCgpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkYXRlRm9ybWF0LmluZGV4T2YoJ2QnKSA+PSAwKSB7XG4gICAgICAgICAgICByZXMuZGF5ID0gZGF0ZS5nZXREYXRlKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRhdGVGb3JtYXQuaW5kZXhPZignaCcpID49IDApIHtcbiAgICAgICAgICAgIHJlcy5ob3VycyA9IGRhdGUuZ2V0SG91cnMoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZGF0ZUZvcm1hdC5pbmRleE9mKCdtJykgPj0gMCkge1xuICAgICAgICAgICAgcmVzLm1pbnV0ZXMgPSBkYXRlLmdldE1pbnV0ZXMoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZGF0ZUZvcm1hdC5pbmRleE9mKCdzJykgPj0gMCkge1xuICAgICAgICAgICAgcmVzLnNlY29uZHMgPSBkYXRlLmdldFNlY29uZHMoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZGF0ZUZvcm1hdC5pbmRleE9mKCdmJykgPj0gMCkge1xuICAgICAgICAgICAgcmVzLm1pbGxpc2Vjb25kcyA9IGRhdGUuZ2V0TWlsbGlzZWNvbmRzKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICB9XG5cbiAgICBwcml2YXRlIHZhbGlkYXRlSW5wdXREYXRhKHRhcmdldDogRGF0ZSkge1xuICAgICAgICBpZiAoISh0YXJnZXQgaW5zdGFuY2VvZiBEYXRlKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDb3VsZCBub3QgcGVyZm9ybSBmaWx0ZXJpbmcgb24gXFwnZGF0ZVxcJyBjb2x1bW4gYmVjYXVzZSB0aGUgZGF0YXNvdXJjZSBvYmplY3QgdHlwZSBpcyBub3QgXFwnRGF0ZVxcJy4nKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByb3RlY3RlZCBmaW5kVmFsdWVJblNldCh0YXJnZXQ6IGFueSwgc2VhcmNoVmFsOiBTZXQ8YW55Pikge1xuICAgICAgICByZXR1cm4gc2VhcmNoVmFsLmhhcyhuZXcgRGF0ZSh0YXJnZXQuZ2V0RnVsbFllYXIoKSwgdGFyZ2V0LmdldE1vbnRoKCksIHRhcmdldC5nZXREYXRlKCkpLnRvSVNPU3RyaW5nKCkpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBQcm92aWRlcyBmaWx0ZXJpbmcgb3BlcmF0aW9ucyBmb3IgbnVtYmVyc1xuICpcbiAqIEBleHBvcnRcbiAqL1xuZXhwb3J0IGNsYXNzIElneE51bWJlckZpbHRlcmluZ09wZXJhbmQgZXh0ZW5kcyBJZ3hGaWx0ZXJpbmdPcGVyYW5kIHtcbiAgICBwcm90ZWN0ZWQgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMub3BlcmF0aW9ucyA9IFt7XG4gICAgICAgICAgICBuYW1lOiAnZXF1YWxzJyxcbiAgICAgICAgICAgIGlzVW5hcnk6IGZhbHNlLFxuICAgICAgICAgICAgaWNvbk5hbWU6ICdlcXVhbHMnLFxuICAgICAgICAgICAgbG9naWM6ICh0YXJnZXQ6IG51bWJlciwgc2VhcmNoVmFsOiBudW1iZXIpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0ID09PSBzZWFyY2hWYWw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG5hbWU6ICdkb2VzTm90RXF1YWwnLFxuICAgICAgICAgICAgaXNVbmFyeTogZmFsc2UsXG4gICAgICAgICAgICBpY29uTmFtZTogJ25vdF9lcXVhbCcsXG4gICAgICAgICAgICBsb2dpYzogKHRhcmdldDogbnVtYmVyLCBzZWFyY2hWYWw6IG51bWJlcikgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXQgIT09IHNlYXJjaFZhbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbmFtZTogJ2dyZWF0ZXJUaGFuJyxcbiAgICAgICAgICAgIGlzVW5hcnk6IGZhbHNlLFxuICAgICAgICAgICAgaWNvbk5hbWU6ICdncmVhdGVyX3RoYW4nLFxuICAgICAgICAgICAgbG9naWM6ICh0YXJnZXQ6IG51bWJlciwgc2VhcmNoVmFsOiBudW1iZXIpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0ID4gc2VhcmNoVmFsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBuYW1lOiAnbGVzc1RoYW4nLFxuICAgICAgICAgICAgaXNVbmFyeTogZmFsc2UsXG4gICAgICAgICAgICBpY29uTmFtZTogJ2xlc3NfdGhhbicsXG4gICAgICAgICAgICBsb2dpYzogKHRhcmdldDogbnVtYmVyLCBzZWFyY2hWYWw6IG51bWJlcikgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXQgPCBzZWFyY2hWYWw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG5hbWU6ICdncmVhdGVyVGhhbk9yRXF1YWxUbycsXG4gICAgICAgICAgICBpc1VuYXJ5OiBmYWxzZSxcbiAgICAgICAgICAgIGljb25OYW1lOiAnZ3JlYXRlcl90aGFuX29yX2VxdWFsJyxcbiAgICAgICAgICAgIGxvZ2ljOiAodGFyZ2V0OiBudW1iZXIsIHNlYXJjaFZhbDogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldCA+PSBzZWFyY2hWYWw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG5hbWU6ICdsZXNzVGhhbk9yRXF1YWxUbycsXG4gICAgICAgICAgICBpc1VuYXJ5OiBmYWxzZSxcbiAgICAgICAgICAgIGljb25OYW1lOiAnbGVzc190aGFuX29yX2VxdWFsJyxcbiAgICAgICAgICAgIGxvZ2ljOiAodGFyZ2V0OiBudW1iZXIsIHNlYXJjaFZhbDogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldCA8PSBzZWFyY2hWYWw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG5hbWU6ICdlbXB0eScsXG4gICAgICAgICAgICBpc1VuYXJ5OiB0cnVlLFxuICAgICAgICAgICAgaWNvbk5hbWU6ICdlbXB0eScsXG4gICAgICAgICAgICBsb2dpYzogKHRhcmdldDogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldCA9PT0gbnVsbCB8fCB0YXJnZXQgPT09IHVuZGVmaW5lZCB8fCBpc05hTih0YXJnZXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBuYW1lOiAnbm90RW1wdHknLFxuICAgICAgICAgICAgaXNVbmFyeTogdHJ1ZSxcbiAgICAgICAgICAgIGljb25OYW1lOiAnbm90X2VtcHR5JyxcbiAgICAgICAgICAgIGxvZ2ljOiAodGFyZ2V0OiBudW1iZXIpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0ICE9PSBudWxsICYmIHRhcmdldCAhPT0gdW5kZWZpbmVkICYmICFpc05hTih0YXJnZXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XS5jb25jYXQodGhpcy5vcGVyYXRpb25zKTtcbiAgICB9XG59XG5cbi8qKlxuICogUHJvdmlkZXMgZmlsdGVyaW5nIG9wZXJhdGlvbnMgZm9yIHN0cmluZ3NcbiAqXG4gKiBAZXhwb3J0XG4gKi9cbmV4cG9ydCBjbGFzcyBJZ3hTdHJpbmdGaWx0ZXJpbmdPcGVyYW5kIGV4dGVuZHMgSWd4RmlsdGVyaW5nT3BlcmFuZCB7XG4gICAgcHJvdGVjdGVkIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLm9wZXJhdGlvbnMgPSBbe1xuICAgICAgICAgICAgbmFtZTogJ2NvbnRhaW5zJyxcbiAgICAgICAgICAgIGlzVW5hcnk6IGZhbHNlLFxuICAgICAgICAgICAgaWNvbk5hbWU6ICdjb250YWlucycsXG4gICAgICAgICAgICBsb2dpYzogKHRhcmdldDogc3RyaW5nLCBzZWFyY2hWYWw6IHN0cmluZywgaWdub3JlQ2FzZT86IGJvb2xlYW4pID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBzZWFyY2ggPSBJZ3hTdHJpbmdGaWx0ZXJpbmdPcGVyYW5kLmFwcGx5SWdub3JlQ2FzZShzZWFyY2hWYWwsIGlnbm9yZUNhc2UpO1xuICAgICAgICAgICAgICAgIHRhcmdldCA9IElneFN0cmluZ0ZpbHRlcmluZ09wZXJhbmQuYXBwbHlJZ25vcmVDYXNlKHRhcmdldCwgaWdub3JlQ2FzZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldC5pbmRleE9mKHNlYXJjaCkgIT09IC0xO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBuYW1lOiAnZG9lc05vdENvbnRhaW4nLFxuICAgICAgICAgICAgaXNVbmFyeTogZmFsc2UsXG4gICAgICAgICAgICBpY29uTmFtZTogJ2RvZXNfbm90X2NvbnRhaW4nLFxuICAgICAgICAgICAgbG9naWM6ICh0YXJnZXQ6IHN0cmluZywgc2VhcmNoVmFsOiBzdHJpbmcsIGlnbm9yZUNhc2U/OiBib29sZWFuKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2VhcmNoID0gSWd4U3RyaW5nRmlsdGVyaW5nT3BlcmFuZC5hcHBseUlnbm9yZUNhc2Uoc2VhcmNoVmFsLCBpZ25vcmVDYXNlKTtcbiAgICAgICAgICAgICAgICB0YXJnZXQgPSBJZ3hTdHJpbmdGaWx0ZXJpbmdPcGVyYW5kLmFwcGx5SWdub3JlQ2FzZSh0YXJnZXQsIGlnbm9yZUNhc2UpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXQuaW5kZXhPZihzZWFyY2gpID09PSAtMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbmFtZTogJ3N0YXJ0c1dpdGgnLFxuICAgICAgICAgICAgaXNVbmFyeTogZmFsc2UsXG4gICAgICAgICAgICBpY29uTmFtZTogJ3N0YXJ0c193aXRoJyxcbiAgICAgICAgICAgIGxvZ2ljOiAodGFyZ2V0OiBzdHJpbmcsIHNlYXJjaFZhbDogc3RyaW5nLCBpZ25vcmVDYXNlPzogYm9vbGVhbikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNlYXJjaCA9IElneFN0cmluZ0ZpbHRlcmluZ09wZXJhbmQuYXBwbHlJZ25vcmVDYXNlKHNlYXJjaFZhbCwgaWdub3JlQ2FzZSk7XG4gICAgICAgICAgICAgICAgdGFyZ2V0ID0gSWd4U3RyaW5nRmlsdGVyaW5nT3BlcmFuZC5hcHBseUlnbm9yZUNhc2UodGFyZ2V0LCBpZ25vcmVDYXNlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0LnN0YXJ0c1dpdGgoc2VhcmNoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbmFtZTogJ2VuZHNXaXRoJyxcbiAgICAgICAgICAgIGlzVW5hcnk6IGZhbHNlLFxuICAgICAgICAgICAgaWNvbk5hbWU6ICdlbmRzX3dpdGgnLFxuICAgICAgICAgICAgbG9naWM6ICh0YXJnZXQ6IHN0cmluZywgc2VhcmNoVmFsOiBzdHJpbmcsIGlnbm9yZUNhc2U/OiBib29sZWFuKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2VhcmNoID0gSWd4U3RyaW5nRmlsdGVyaW5nT3BlcmFuZC5hcHBseUlnbm9yZUNhc2Uoc2VhcmNoVmFsLCBpZ25vcmVDYXNlKTtcbiAgICAgICAgICAgICAgICB0YXJnZXQgPSBJZ3hTdHJpbmdGaWx0ZXJpbmdPcGVyYW5kLmFwcGx5SWdub3JlQ2FzZSh0YXJnZXQsIGlnbm9yZUNhc2UpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXQuZW5kc1dpdGgoc2VhcmNoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbmFtZTogJ2VxdWFscycsXG4gICAgICAgICAgICBpc1VuYXJ5OiBmYWxzZSxcbiAgICAgICAgICAgIGljb25OYW1lOiAnZXF1YWxzJyxcbiAgICAgICAgICAgIGxvZ2ljOiAodGFyZ2V0OiBzdHJpbmcsIHNlYXJjaFZhbDogc3RyaW5nLCBpZ25vcmVDYXNlPzogYm9vbGVhbikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNlYXJjaCA9IElneFN0cmluZ0ZpbHRlcmluZ09wZXJhbmQuYXBwbHlJZ25vcmVDYXNlKHNlYXJjaFZhbCwgaWdub3JlQ2FzZSk7XG4gICAgICAgICAgICAgICAgdGFyZ2V0ID0gSWd4U3RyaW5nRmlsdGVyaW5nT3BlcmFuZC5hcHBseUlnbm9yZUNhc2UodGFyZ2V0LCBpZ25vcmVDYXNlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0ID09PSBzZWFyY2g7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG5hbWU6ICdkb2VzTm90RXF1YWwnLFxuICAgICAgICAgICAgaXNVbmFyeTogZmFsc2UsXG4gICAgICAgICAgICBpY29uTmFtZTogJ25vdF9lcXVhbCcsXG4gICAgICAgICAgICBsb2dpYzogKHRhcmdldDogc3RyaW5nLCBzZWFyY2hWYWw6IHN0cmluZywgaWdub3JlQ2FzZT86IGJvb2xlYW4pID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBzZWFyY2ggPSBJZ3hTdHJpbmdGaWx0ZXJpbmdPcGVyYW5kLmFwcGx5SWdub3JlQ2FzZShzZWFyY2hWYWwsIGlnbm9yZUNhc2UpO1xuICAgICAgICAgICAgICAgIHRhcmdldCA9IElneFN0cmluZ0ZpbHRlcmluZ09wZXJhbmQuYXBwbHlJZ25vcmVDYXNlKHRhcmdldCwgaWdub3JlQ2FzZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldCAhPT0gc2VhcmNoO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBuYW1lOiAnZW1wdHknLFxuICAgICAgICAgICAgaXNVbmFyeTogdHJ1ZSxcbiAgICAgICAgICAgIGljb25OYW1lOiAnZW1wdHknLFxuICAgICAgICAgICAgbG9naWM6ICh0YXJnZXQ6IHN0cmluZykgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXQgPT09IG51bGwgfHwgdGFyZ2V0ID09PSB1bmRlZmluZWQgfHwgdGFyZ2V0Lmxlbmd0aCA9PT0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbmFtZTogJ25vdEVtcHR5JyxcbiAgICAgICAgICAgIGlzVW5hcnk6IHRydWUsXG4gICAgICAgICAgICBpY29uTmFtZTogJ25vdF9lbXB0eScsXG4gICAgICAgICAgICBsb2dpYzogKHRhcmdldDogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldCAhPT0gbnVsbCAmJiB0YXJnZXQgIT09IHVuZGVmaW5lZCAmJiB0YXJnZXQubGVuZ3RoID4gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfV0uY29uY2F0KHRoaXMub3BlcmF0aW9ucyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQXBwbGllcyBjYXNlIHNlbnNpdGl2aXR5IG9uIHN0cmluZ3MgaWYgcHJvdmlkZWRcbiAgICAgKlxuICAgICAqIEBtZW1iZXJvZiBJZ3hTdHJpbmdGaWx0ZXJpbmdPcGVyYW5kXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBhcHBseUlnbm9yZUNhc2UoYTogc3RyaW5nLCBpZ25vcmVDYXNlOiBib29sZWFuKTogc3RyaW5nIHtcbiAgICAgICAgYSA9IGEgfHwgJyc7XG4gICAgICAgIC8vIGJ1bGxldHByb29mXG4gICAgICAgIHJldHVybiBpZ25vcmVDYXNlID8gKCcnICsgYSkudG9Mb3dlckNhc2UoKSA6IGE7XG4gICAgfVxufVxuXG4vKipcbiAqIEludGVyZmFjZSBkZXNjcmliaW5nIGZpbHRlcmluZyBvcGVyYXRpb25zXG4gKlxuICogQGV4cG9ydFxuICovXG5leHBvcnQgaW50ZXJmYWNlIElGaWx0ZXJpbmdPcGVyYXRpb24ge1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBpc1VuYXJ5OiBib29sZWFuO1xuICAgIGljb25OYW1lOiBzdHJpbmc7XG4gICAgaGlkZGVuPzogYm9vbGVhbjtcbiAgICBsb2dpYzogKHZhbHVlOiBhbnksIHNlYXJjaFZhbD86IGFueSwgaWdub3JlQ2FzZT86IGJvb2xlYW4pID0+IGJvb2xlYW47XG59XG5cbi8qKlxuICogSW50ZXJmYWNlIGRlc2NyaWJpbmcgRGF0ZSBvYmplY3QgaW4gcGFydHNcbiAqXG4gKiBAZXhwb3J0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSURhdGVQYXJ0cyB7XG4gICAgeWVhcjogbnVtYmVyO1xuICAgIG1vbnRoOiBudW1iZXI7XG4gICAgZGF5OiBudW1iZXI7XG4gICAgaG91cnM6IG51bWJlcjtcbiAgICBtaW51dGVzOiBudW1iZXI7XG4gICAgc2Vjb25kczogbnVtYmVyO1xuICAgIG1pbGxpc2Vjb25kczogbnVtYmVyO1xufVxuIl19