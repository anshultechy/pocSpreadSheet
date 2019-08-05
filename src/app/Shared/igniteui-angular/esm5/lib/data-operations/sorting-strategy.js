/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { cloneArray } from '../core/utils';
import { SortingDirection } from './sorting-expression.interface';
import { DataUtil } from './data-util';
/**
 * @record
 */
export function ISortingStrategy() { }
if (false) {
    /** @type {?} */
    ISortingStrategy.prototype.sort;
}
var DefaultSortingStrategy = /** @class */ (function () {
    function DefaultSortingStrategy() {
    }
    /**
     * @return {?}
     */
    DefaultSortingStrategy.instance = /**
     * @return {?}
     */
    function () {
        return this._instance || (this._instance = new this());
    };
    /**
     * @param {?} data
     * @param {?} fieldName
     * @param {?} dir
     * @param {?} ignoreCase
     * @param {?} valueResolver
     * @return {?}
     */
    DefaultSortingStrategy.prototype.sort = /**
     * @param {?} data
     * @param {?} fieldName
     * @param {?} dir
     * @param {?} ignoreCase
     * @param {?} valueResolver
     * @return {?}
     */
    function (data, fieldName, dir, ignoreCase, valueResolver) {
        var _this = this;
        /** @type {?} */
        var key = fieldName;
        /** @type {?} */
        var reverse = (dir === SortingDirection.Desc ? -1 : 1);
        /** @type {?} */
        var cmpFunc = function (obj1, obj2) {
            return _this.compareObjects(obj1, obj2, key, reverse, ignoreCase, valueResolver);
        };
        return this.arraySort(data, cmpFunc);
    };
    /**
     * @param {?} a
     * @param {?} b
     * @return {?}
     */
    DefaultSortingStrategy.prototype.compareValues = /**
     * @param {?} a
     * @param {?} b
     * @return {?}
     */
    function (a, b) {
        /** @type {?} */
        var an = (a === null || a === undefined);
        /** @type {?} */
        var bn = (b === null || b === undefined);
        if (an) {
            if (bn) {
                return 0;
            }
            return -1;
        }
        else if (bn) {
            return 1;
        }
        return a > b ? 1 : a < b ? -1 : 0;
    };
    /**
     * @protected
     * @param {?} obj1
     * @param {?} obj2
     * @param {?} key
     * @param {?} reverse
     * @param {?} ignoreCase
     * @param {?} valueResolver
     * @return {?}
     */
    DefaultSortingStrategy.prototype.compareObjects = /**
     * @protected
     * @param {?} obj1
     * @param {?} obj2
     * @param {?} key
     * @param {?} reverse
     * @param {?} ignoreCase
     * @param {?} valueResolver
     * @return {?}
     */
    function (obj1, obj2, key, reverse, ignoreCase, valueResolver) {
        /** @type {?} */
        var a = valueResolver(obj1, key);
        /** @type {?} */
        var b = valueResolver(obj2, key);
        if (ignoreCase) {
            a = a && a.toLowerCase ? a.toLowerCase() : a;
            b = b && b.toLowerCase ? b.toLowerCase() : b;
        }
        return reverse * this.compareValues(a, b);
    };
    /**
     * @protected
     * @param {?} data
     * @param {?=} compareFn
     * @return {?}
     */
    DefaultSortingStrategy.prototype.arraySort = /**
     * @protected
     * @param {?} data
     * @param {?=} compareFn
     * @return {?}
     */
    function (data, compareFn) {
        return data.sort(compareFn);
    };
    DefaultSortingStrategy._instance = null;
    return DefaultSortingStrategy;
}());
export { DefaultSortingStrategy };
if (false) {
    /**
     * @type {?}
     * @private
     */
    DefaultSortingStrategy._instance;
}
var IgxSorting = /** @class */ (function () {
    function IgxSorting() {
    }
    /**
     * @param {?} data
     * @param {?} expressions
     * @return {?}
     */
    IgxSorting.prototype.sort = /**
     * @param {?} data
     * @param {?} expressions
     * @return {?}
     */
    function (data, expressions) {
        return this.sortDataRecursive(data, expressions);
    };
    /**
     * @private
     * @param {?} data
     * @param {?} index
     * @param {?} expression
     * @return {?}
     */
    IgxSorting.prototype.groupedRecordsByExpression = /**
     * @private
     * @param {?} data
     * @param {?} index
     * @param {?} expression
     * @return {?}
     */
    function (data, index, expression) {
        /** @type {?} */
        var i;
        /** @type {?} */
        var groupval;
        /** @type {?} */
        var res = [];
        /** @type {?} */
        var key = expression.fieldName;
        /** @type {?} */
        var len = data.length;
        res.push(data[index]);
        groupval = this.getFieldValue(data[index], key);
        index++;
        /** @type {?} */
        var comparer = expression.groupingComparer || DefaultSortingStrategy.instance().compareValues;
        for (i = index; i < len; i++) {
            if (comparer(this.getFieldValue(data[i], key), groupval) === 0) {
                res.push(data[i]);
            }
            else {
                break;
            }
        }
        return res;
    };
    /**
     * @private
     * @template T
     * @param {?} data
     * @param {?} expressions
     * @param {?=} expressionIndex
     * @return {?}
     */
    IgxSorting.prototype.sortDataRecursive = /**
     * @private
     * @template T
     * @param {?} data
     * @param {?} expressions
     * @param {?=} expressionIndex
     * @return {?}
     */
    function (data, expressions, expressionIndex) {
        if (expressionIndex === void 0) { expressionIndex = 0; }
        /** @type {?} */
        var i;
        /** @type {?} */
        var j;
        /** @type {?} */
        var expr;
        /** @type {?} */
        var gbData;
        /** @type {?} */
        var gbDataLen;
        /** @type {?} */
        var exprsLen = expressions.length;
        /** @type {?} */
        var dataLen = data.length;
        expressionIndex = expressionIndex || 0;
        if (expressionIndex >= exprsLen || dataLen <= 1) {
            return data;
        }
        expr = expressions[expressionIndex];
        if (!expr.strategy) {
            expr.strategy = DefaultSortingStrategy.instance();
        }
        data = expr.strategy.sort(data, expr.fieldName, expr.dir, expr.ignoreCase, this.getFieldValue);
        if (expressionIndex === exprsLen - 1) {
            return data;
        }
        // in case of multiple sorting
        for (i = 0; i < dataLen; i++) {
            gbData = this.groupedRecordsByExpression(data, i, expr);
            gbDataLen = gbData.length;
            if (gbDataLen > 1) {
                gbData = this.sortDataRecursive(gbData, expressions, expressionIndex + 1);
            }
            for (j = 0; j < gbDataLen; j++) {
                data[i + j] = gbData[j];
            }
            i += gbDataLen - 1;
        }
        return data;
    };
    /**
     * @protected
     * @template T
     * @param {?} data
     * @param {?} state
     * @param {?} level
     * @param {?} parent
     * @param {?} metadata
     * @param {?=} grid
     * @param {?=} groupsRecords
     * @param {?=} fullResult
     * @return {?}
     */
    IgxSorting.prototype.groupDataRecursive = /**
     * @protected
     * @template T
     * @param {?} data
     * @param {?} state
     * @param {?} level
     * @param {?} parent
     * @param {?} metadata
     * @param {?=} grid
     * @param {?=} groupsRecords
     * @param {?=} fullResult
     * @return {?}
     */
    function (data, state, level, parent, metadata, grid, groupsRecords, fullResult) {
        if (grid === void 0) { grid = null; }
        if (groupsRecords === void 0) { groupsRecords = []; }
        if (fullResult === void 0) { fullResult = { data: [], metadata: [] }; }
        /** @type {?} */
        var expressions = state.expressions;
        /** @type {?} */
        var expansion = state.expansion;
        /** @type {?} */
        var i = 0;
        /** @type {?} */
        var result = [];
        var _loop_1 = function () {
            var e_1, _a;
            /** @type {?} */
            var group = this_1.groupedRecordsByExpression(data, i, expressions[level]);
            /** @type {?} */
            var groupRow = {
                expression: expressions[level],
                level: level,
                records: cloneArray(group),
                value: group[0][expressions[level].fieldName],
                groupParent: parent,
                groups: [],
                height: grid ? grid.renderedRowHeight : null
            };
            if (parent) {
                parent.groups.push(groupRow);
            }
            else {
                groupsRecords.push(groupRow);
            }
            /** @type {?} */
            var hierarchy = DataUtil.getHierarchy(groupRow);
            /** @type {?} */
            var expandState = expansion.find(function (s) {
                return DataUtil.isHierarchyMatch(s.hierarchy || [{ fieldName: groupRow.expression.fieldName, value: groupRow.value }], hierarchy);
            });
            /** @type {?} */
            var expanded = expandState ? expandState.expanded : state.defaultExpanded;
            /** @type {?} */
            var recursiveResult = void 0;
            result.push(groupRow);
            metadata.push(null);
            fullResult.data.push(groupRow);
            fullResult.metadata.push(null);
            if (level < expressions.length - 1) {
                recursiveResult = this_1.groupDataRecursive(group, state, level + 1, groupRow, expanded ? metadata : [], grid, groupsRecords, fullResult);
                if (expanded) {
                    result = result.concat(recursiveResult);
                }
            }
            else {
                try {
                    for (var group_1 = tslib_1.__values(group), group_1_1 = group_1.next(); !group_1_1.done; group_1_1 = group_1.next()) {
                        var groupItem = group_1_1.value;
                        fullResult.metadata.push(groupRow);
                        fullResult.data.push(groupItem);
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (group_1_1 && !group_1_1.done && (_a = group_1.return)) _a.call(group_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
                if (expanded) {
                    metadata.push.apply(metadata, tslib_1.__spread(fullResult.metadata.slice(fullResult.metadata.length - group.length)));
                    result.push.apply(result, tslib_1.__spread(fullResult.data.slice(fullResult.data.length - group.length)));
                }
            }
            i += group.length;
        };
        var this_1 = this;
        while (i < data.length) {
            _loop_1();
        }
        return result;
    };
    /**
     * @protected
     * @param {?} obj
     * @param {?} key
     * @return {?}
     */
    IgxSorting.prototype.getFieldValue = /**
     * @protected
     * @param {?} obj
     * @param {?} key
     * @return {?}
     */
    function (obj, key) {
        return obj[key];
    };
    return IgxSorting;
}());
export { IgxSorting };
var IgxDataRecordSorting = /** @class */ (function (_super) {
    tslib_1.__extends(IgxDataRecordSorting, _super);
    function IgxDataRecordSorting() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @protected
     * @param {?} obj
     * @param {?} key
     * @return {?}
     */
    IgxDataRecordSorting.prototype.getFieldValue = /**
     * @protected
     * @param {?} obj
     * @param {?} key
     * @return {?}
     */
    function (obj, key) {
        return obj.data[key];
    };
    return IgxDataRecordSorting;
}(IgxSorting));
export { IgxDataRecordSorting };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ydGluZy1zdHJhdGVneS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lnbml0ZXVpLWFuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvZGF0YS1vcGVyYXRpb25zL3NvcnRpbmctc3RyYXRlZ3kudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBc0IsZ0JBQWdCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUd0RixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sYUFBYSxDQUFDOzs7O0FBSXZDLHNDQU1DOzs7SUFMRyxnQ0FJK0Q7O0FBR25FO0lBR0k7SUFBeUIsQ0FBQzs7OztJQUVaLCtCQUFROzs7SUFBdEI7UUFDSSxPQUFPLElBQUksQ0FBQyxTQUFTLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQztJQUMzRCxDQUFDOzs7Ozs7Ozs7SUFFTSxxQ0FBSTs7Ozs7Ozs7SUFBWCxVQUFZLElBQVcsRUFDWCxTQUFpQixFQUNqQixHQUFxQixFQUNyQixVQUFtQixFQUNuQixhQUE2QztRQUp6RCxpQkFXQzs7WUFOUyxHQUFHLEdBQUcsU0FBUzs7WUFDZixPQUFPLEdBQUcsQ0FBQyxHQUFHLEtBQUssZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDOztZQUNsRCxPQUFPLEdBQUcsVUFBQyxJQUFJLEVBQUUsSUFBSTtZQUN2QixPQUFPLEtBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxhQUFhLENBQUMsQ0FBQztRQUNwRixDQUFDO1FBQ0QsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztJQUN6QyxDQUFDOzs7Ozs7SUFFTSw4Q0FBYTs7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SSxDQUFDLE1BQU07O1NBMENyQjtRQUNELE9BQU8sTUFBTSxDQUFDO0lBQ2xCLENBQUM7Ozs7Ozs7SUFDUyxrQ0FBYTs7Ozs7O0lBQXZCLFVBQXdCLEdBQVEsRUFBRSxHQUFXO1FBQ3pDLE9BQU8sR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3BCLENBQUM7SUFDTCxpQkFBQztBQUFELENBQUMsQUFySEQsSUFxSEM7O0FBRUQ7SUFBMEMsZ0RBQVU7SUFBcEQ7O0lBSUEsQ0FBQzs7Ozs7OztJQUhhLDRDQUFhOzs7Ozs7SUFBdkIsVUFBd0IsR0FBUSxFQUFFLEdBQVc7UUFDekMsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3pCLENBQUM7SUFDTCwyQkFBQztBQUFELENBQUMsQUFKRCxDQUEwQyxVQUFVLEdBSW5EIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY2xvbmVBcnJheSB9IGZyb20gJy4uL2NvcmUvdXRpbHMnO1xuaW1wb3J0IHsgSUdyb3VwQnlSZWNvcmQgfSBmcm9tICcuL2dyb3VwYnktcmVjb3JkLmludGVyZmFjZSc7XG5pbXBvcnQgeyBJU29ydGluZ0V4cHJlc3Npb24sIFNvcnRpbmdEaXJlY3Rpb24gfSBmcm9tICcuL3NvcnRpbmctZXhwcmVzc2lvbi5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgSUdyb3VwaW5nRXhwcmVzc2lvbiB9IGZyb20gJy4vZ3JvdXBpbmctZXhwcmVzc2lvbi5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgSUdyb3VwaW5nU3RhdGUgfSBmcm9tICcuL2dyb3VwYnktc3RhdGUuaW50ZXJmYWNlJztcbmltcG9ydCB7IERhdGFVdGlsIH0gZnJvbSAnLi9kYXRhLXV0aWwnO1xuaW1wb3J0IHsgSUdyb3VwQnlFeHBhbmRTdGF0ZSB9IGZyb20gJy4vZ3JvdXBieS1leHBhbmQtc3RhdGUuaW50ZXJmYWNlJztcbmltcG9ydCB7IElHcm91cEJ5UmVzdWx0IH0gZnJvbSAnLi9ncm91cGluZy1yZXN1bHQuaW50ZXJmYWNlJztcblxuZXhwb3J0IGludGVyZmFjZSBJU29ydGluZ1N0cmF0ZWd5IHtcbiAgICBzb3J0OiAoZGF0YTogYW55W10sXG4gICAgICAgICAgIGZpZWxkTmFtZTogc3RyaW5nLFxuICAgICAgICAgICBkaXI6IFNvcnRpbmdEaXJlY3Rpb24sXG4gICAgICAgICAgIGlnbm9yZUNhc2U6IGJvb2xlYW4sXG4gICAgICAgICAgIHZhbHVlUmVzb2x2ZXI6IChvYmo6IGFueSwga2V5OiBzdHJpbmcpID0+IGFueSkgPT4gYW55W107XG59XG5cbmV4cG9ydCBjbGFzcyBEZWZhdWx0U29ydGluZ1N0cmF0ZWd5IGltcGxlbWVudHMgSVNvcnRpbmdTdHJhdGVneSB7XG4gICAgcHJpdmF0ZSBzdGF0aWMgX2luc3RhbmNlOiBEZWZhdWx0U29ydGluZ1N0cmF0ZWd5ID0gbnVsbDtcblxuICAgIHByb3RlY3RlZCBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgICBwdWJsaWMgc3RhdGljIGluc3RhbmNlKCk6IERlZmF1bHRTb3J0aW5nU3RyYXRlZ3kge1xuICAgICAgICByZXR1cm4gdGhpcy5faW5zdGFuY2UgfHwgKHRoaXMuX2luc3RhbmNlID0gbmV3IHRoaXMoKSk7XG4gICAgfVxuXG4gICAgcHVibGljIHNvcnQoZGF0YTogYW55W10sXG4gICAgICAgICAgICAgICAgZmllbGROYW1lOiBzdHJpbmcsXG4gICAgICAgICAgICAgICAgZGlyOiBTb3J0aW5nRGlyZWN0aW9uLFxuICAgICAgICAgICAgICAgIGlnbm9yZUNhc2U6IGJvb2xlYW4sXG4gICAgICAgICAgICAgICAgdmFsdWVSZXNvbHZlcjogKG9iajogYW55LCBrZXk6IHN0cmluZykgPT4gYW55KSB7XG4gICAgICAgIGNvbnN0IGtleSA9IGZpZWxkTmFtZTtcbiAgICAgICAgY29uc3QgcmV2ZXJzZSA9IChkaXIgPT09IFNvcnRpbmdEaXJlY3Rpb24uRGVzYyA/IC0xIDogMSk7XG4gICAgICAgIGNvbnN0IGNtcEZ1bmMgPSAob2JqMSwgb2JqMikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29tcGFyZU9iamVjdHMob2JqMSwgb2JqMiwga2V5LCByZXZlcnNlLCBpZ25vcmVDYXNlLCB2YWx1ZVJlc29sdmVyKTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXJyYXlTb3J0KGRhdGEsIGNtcEZ1bmMpO1xuICAgIH1cblxuICAgIHB1YmxpYyBjb21wYXJlVmFsdWVzKGE6IGFueSwgYjogYW55KSB7XG4gICAgICAgIGNvbnN0IGFuID0gKGEgPT09IG51bGwgfHwgYSA9PT0gdW5kZWZpbmVkKTtcbiAgICAgICAgY29uc3QgYm4gPSAoYiA9PT0gbnVsbCB8fCBiID09PSB1bmRlZmluZWQpO1xuICAgICAgICBpZiAoYW4pIHtcbiAgICAgICAgICAgIGlmIChibikge1xuICAgICAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICB9IGVsc2UgaWYgKGJuKSB7XG4gICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYSA+IGIgPyAxIDogYSA8IGIgPyAtMSA6IDA7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGNvbXBhcmVPYmplY3RzKG9iajE6IG9iamVjdCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqMjogb2JqZWN0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IHN0cmluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV2ZXJzZTogbnVtYmVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZ25vcmVDYXNlOiBib29sZWFuLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZVJlc29sdmVyOiAob2JqOiBhbnksIGtleTogc3RyaW5nKSA9PiBhbnkpIHtcbiAgICAgICAgbGV0IGEgPSB2YWx1ZVJlc29sdmVyKG9iajEsIGtleSk7XG4gICAgICAgIGxldCBiID0gdmFsdWVSZXNvbHZlcihvYmoyLCBrZXkpO1xuICAgICAgICBpZiAoaWdub3JlQ2FzZSkge1xuICAgICAgICAgICAgYSA9IGEgJiYgYS50b0xvd2VyQ2FzZSA/IGEudG9Mb3dlckNhc2UoKSA6IGE7XG4gICAgICAgICAgICBiID0gYiAmJiBiLnRvTG93ZXJDYXNlID8gYi50b0xvd2VyQ2FzZSgpIDogYjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmV2ZXJzZSAqIHRoaXMuY29tcGFyZVZhbHVlcyhhLCBiKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgYXJyYXlTb3J0KGRhdGE6IGFueVtdLCBjb21wYXJlRm4/KTogYW55W10ge1xuICAgICAgICByZXR1cm4gZGF0YS5zb3J0KGNvbXBhcmVGbik7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgSWd4U29ydGluZyB7XG4gICAgcHVibGljIHNvcnQoZGF0YTogYW55W10sIGV4cHJlc3Npb25zOiBJU29ydGluZ0V4cHJlc3Npb25bXSk6IGFueVtdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc29ydERhdGFSZWN1cnNpdmUoZGF0YSwgZXhwcmVzc2lvbnMpO1xuICAgIH1cblxuICAgIHByaXZhdGUgZ3JvdXBlZFJlY29yZHNCeUV4cHJlc3Npb24oZGF0YTogYW55W10sXG4gICAgICAgICAgICBpbmRleDogbnVtYmVyLFxuICAgICAgICAgICAgZXhwcmVzc2lvbjogSUdyb3VwaW5nRXhwcmVzc2lvbik6IGFueVtdIHtcbiAgICAgICAgbGV0IGk7XG4gICAgICAgIGxldCBncm91cHZhbDtcbiAgICAgICAgY29uc3QgcmVzID0gW107XG4gICAgICAgIGNvbnN0IGtleSA9IGV4cHJlc3Npb24uZmllbGROYW1lO1xuICAgICAgICBjb25zdCBsZW4gPSBkYXRhLmxlbmd0aDtcbiAgICAgICAgcmVzLnB1c2goZGF0YVtpbmRleF0pO1xuICAgICAgICBncm91cHZhbCA9IHRoaXMuZ2V0RmllbGRWYWx1ZShkYXRhW2luZGV4XSwga2V5KTtcbiAgICAgICAgaW5kZXgrKztcbiAgICAgICAgY29uc3QgY29tcGFyZXIgPSBleHByZXNzaW9uLmdyb3VwaW5nQ29tcGFyZXIgfHwgRGVmYXVsdFNvcnRpbmdTdHJhdGVneS5pbnN0YW5jZSgpLmNvbXBhcmVWYWx1ZXM7XG4gICAgICAgIGZvciAoaSA9IGluZGV4OyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChjb21wYXJlcih0aGlzLmdldEZpZWxkVmFsdWUoZGF0YVtpXSwga2V5KSwgZ3JvdXB2YWwpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgcmVzLnB1c2goZGF0YVtpXSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXM7XG4gICAgfVxuICAgIHByaXZhdGUgc29ydERhdGFSZWN1cnNpdmU8VD4oZGF0YTogVFtdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbnM6IElTb3J0aW5nRXhwcmVzc2lvbltdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbkluZGV4OiBudW1iZXIgPSAwKTogVFtdIHtcbiAgICAgICAgbGV0IGk7XG4gICAgICAgIGxldCBqO1xuICAgICAgICBsZXQgZXhwcjogSVNvcnRpbmdFeHByZXNzaW9uO1xuICAgICAgICBsZXQgZ2JEYXRhO1xuICAgICAgICBsZXQgZ2JEYXRhTGVuO1xuICAgICAgICBjb25zdCBleHByc0xlbiA9IGV4cHJlc3Npb25zLmxlbmd0aDtcbiAgICAgICAgY29uc3QgZGF0YUxlbiA9IGRhdGEubGVuZ3RoO1xuICAgICAgICBleHByZXNzaW9uSW5kZXggPSBleHByZXNzaW9uSW5kZXggfHwgMDtcbiAgICAgICAgaWYgKGV4cHJlc3Npb25JbmRleCA+PSBleHByc0xlbiB8fCBkYXRhTGVuIDw9IDEpIHtcbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICB9XG4gICAgICAgIGV4cHIgPSBleHByZXNzaW9uc1tleHByZXNzaW9uSW5kZXhdO1xuICAgICAgICBpZiAoIWV4cHIuc3RyYXRlZ3kpIHtcbiAgICAgICAgICAgIGV4cHIuc3RyYXRlZ3kgPSBEZWZhdWx0U29ydGluZ1N0cmF0ZWd5Lmluc3RhbmNlKCk7XG4gICAgICAgIH1cbiAgICAgICAgZGF0YSA9IGV4cHIuc3RyYXRlZ3kuc29ydChkYXRhLCBleHByLmZpZWxkTmFtZSwgZXhwci5kaXIsIGV4cHIuaWdub3JlQ2FzZSwgdGhpcy5nZXRGaWVsZFZhbHVlKTtcbiAgICAgICAgaWYgKGV4cHJlc3Npb25JbmRleCA9PT0gZXhwcnNMZW4gLSAxKSB7XG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgfVxuICAgICAgICAvLyBpbiBjYXNlIG9mIG11bHRpcGxlIHNvcnRpbmdcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGRhdGFMZW47IGkrKykge1xuICAgICAgICAgICAgZ2JEYXRhID0gdGhpcy5ncm91cGVkUmVjb3Jkc0J5RXhwcmVzc2lvbihkYXRhLCBpLCBleHByKTtcbiAgICAgICAgICAgIGdiRGF0YUxlbiA9IGdiRGF0YS5sZW5ndGg7XG4gICAgICAgICAgICBpZiAoZ2JEYXRhTGVuID4gMSkge1xuICAgICAgICAgICAgICAgIGdiRGF0YSA9IHRoaXMuc29ydERhdGFSZWN1cnNpdmUoZ2JEYXRhLCBleHByZXNzaW9ucywgZXhwcmVzc2lvbkluZGV4ICsgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgZ2JEYXRhTGVuOyBqKyspIHtcbiAgICAgICAgICAgICAgICBkYXRhW2kgKyBqXSA9IGdiRGF0YVtqXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGkgKz0gZ2JEYXRhTGVuIC0gMTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIGdyb3VwRGF0YVJlY3Vyc2l2ZTxUPihkYXRhOiBUW10sIHN0YXRlOiBJR3JvdXBpbmdTdGF0ZSwgbGV2ZWw6IG51bWJlcixcbiAgICAgICAgcGFyZW50OiBJR3JvdXBCeVJlY29yZCwgbWV0YWRhdGE6IElHcm91cEJ5UmVjb3JkW10sIGdyaWQ6IGFueSA9IG51bGwsXG4gICAgICAgIGdyb3Vwc1JlY29yZHM6IGFueVtdID0gW10sIGZ1bGxSZXN1bHQ6IElHcm91cEJ5UmVzdWx0ID0geyBkYXRhOiBbXSwgbWV0YWRhdGE6IFtdIH0pOiBUW10ge1xuICAgICAgICBjb25zdCBleHByZXNzaW9ucyA9IHN0YXRlLmV4cHJlc3Npb25zO1xuICAgICAgICBjb25zdCBleHBhbnNpb24gPSBzdGF0ZS5leHBhbnNpb247XG4gICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgbGV0IHJlc3VsdCA9IFtdO1xuICAgICAgICB3aGlsZSAoaSA8IGRhdGEubGVuZ3RoKSB7XG4gICAgICAgICAgICBjb25zdCBncm91cCA9IHRoaXMuZ3JvdXBlZFJlY29yZHNCeUV4cHJlc3Npb24oZGF0YSwgaSwgZXhwcmVzc2lvbnNbbGV2ZWxdKTtcbiAgICAgICAgICAgIGNvbnN0IGdyb3VwUm93OiBJR3JvdXBCeVJlY29yZCA9IHtcbiAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBleHByZXNzaW9uc1tsZXZlbF0sXG4gICAgICAgICAgICAgICAgbGV2ZWwsXG4gICAgICAgICAgICAgICAgcmVjb3JkczogY2xvbmVBcnJheShncm91cCksXG4gICAgICAgICAgICAgICAgdmFsdWU6IGdyb3VwWzBdW2V4cHJlc3Npb25zW2xldmVsXS5maWVsZE5hbWVdLFxuICAgICAgICAgICAgICAgIGdyb3VwUGFyZW50OiBwYXJlbnQsXG4gICAgICAgICAgICAgICAgZ3JvdXBzOiBbXSxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGdyaWQgPyBncmlkLnJlbmRlcmVkUm93SGVpZ2h0IDogbnVsbFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmIChwYXJlbnQpIHtcbiAgICAgICAgICAgICAgICBwYXJlbnQuZ3JvdXBzLnB1c2goZ3JvdXBSb3cpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBncm91cHNSZWNvcmRzLnB1c2goZ3JvdXBSb3cpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgaGllcmFyY2h5ID0gRGF0YVV0aWwuZ2V0SGllcmFyY2h5KGdyb3VwUm93KTtcbiAgICAgICAgICAgIGNvbnN0IGV4cGFuZFN0YXRlOiBJR3JvdXBCeUV4cGFuZFN0YXRlID0gZXhwYW5zaW9uLmZpbmQoKHMpID0+XG4gICAgICAgICAgICAgICAgRGF0YVV0aWwuaXNIaWVyYXJjaHlNYXRjaChzLmhpZXJhcmNoeSB8fCBbeyBmaWVsZE5hbWU6IGdyb3VwUm93LmV4cHJlc3Npb24uZmllbGROYW1lLCB2YWx1ZTogZ3JvdXBSb3cudmFsdWUgfV0sIGhpZXJhcmNoeSkpO1xuICAgICAgICAgICAgY29uc3QgZXhwYW5kZWQgPSBleHBhbmRTdGF0ZSA/IGV4cGFuZFN0YXRlLmV4cGFuZGVkIDogc3RhdGUuZGVmYXVsdEV4cGFuZGVkO1xuICAgICAgICAgICAgbGV0IHJlY3Vyc2l2ZVJlc3VsdDtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKGdyb3VwUm93KTtcbiAgICAgICAgICAgIG1ldGFkYXRhLnB1c2gobnVsbCk7XG4gICAgICAgICAgICBmdWxsUmVzdWx0LmRhdGEucHVzaChncm91cFJvdyk7XG4gICAgICAgICAgICBmdWxsUmVzdWx0Lm1ldGFkYXRhLnB1c2gobnVsbCk7XG4gICAgICAgICAgICBpZiAobGV2ZWwgPCBleHByZXNzaW9ucy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgcmVjdXJzaXZlUmVzdWx0ID0gdGhpcy5ncm91cERhdGFSZWN1cnNpdmUoZ3JvdXAsIHN0YXRlLCBsZXZlbCArIDEsIGdyb3VwUm93LFxuICAgICAgICAgICAgICAgICAgICBleHBhbmRlZCA/IG1ldGFkYXRhIDogW10sIGdyaWQsIGdyb3Vwc1JlY29yZHMsIGZ1bGxSZXN1bHQpO1xuICAgICAgICAgICAgICAgIGlmIChleHBhbmRlZCkge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSByZXN1bHQuY29uY2F0KHJlY3Vyc2l2ZVJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGdyb3VwSXRlbSBvZiBncm91cCkge1xuICAgICAgICAgICAgICAgICAgICBmdWxsUmVzdWx0Lm1ldGFkYXRhLnB1c2goZ3JvdXBSb3cpO1xuICAgICAgICAgICAgICAgICAgICBmdWxsUmVzdWx0LmRhdGEucHVzaChncm91cEl0ZW0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZXhwYW5kZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgbWV0YWRhdGEucHVzaCguLi5mdWxsUmVzdWx0Lm1ldGFkYXRhLnNsaWNlKGZ1bGxSZXN1bHQubWV0YWRhdGEubGVuZ3RoIC0gZ3JvdXAubGVuZ3RoKSk7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKC4uLmZ1bGxSZXN1bHQuZGF0YS5zbGljZShmdWxsUmVzdWx0LmRhdGEubGVuZ3RoIC0gZ3JvdXAubGVuZ3RoKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaSArPSBncm91cC5sZW5ndGg7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gICAgcHJvdGVjdGVkIGdldEZpZWxkVmFsdWUob2JqOiBhbnksIGtleTogc3RyaW5nKTogYW55IHtcbiAgICAgICAgcmV0dXJuIG9ialtrZXldO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIElneERhdGFSZWNvcmRTb3J0aW5nIGV4dGVuZHMgSWd4U29ydGluZyB7XG4gICAgcHJvdGVjdGVkIGdldEZpZWxkVmFsdWUob2JqOiBhbnksIGtleTogc3RyaW5nKTogYW55IHtcbiAgICAgICAgcmV0dXJuIG9iai5kYXRhW2tleV07XG4gICAgfVxufVxuIl19