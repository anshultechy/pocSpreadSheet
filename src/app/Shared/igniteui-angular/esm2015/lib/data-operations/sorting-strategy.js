/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
export class DefaultSortingStrategy {
    /**
     * @protected
     */
    constructor() { }
    /**
     * @return {?}
     */
    static instance() {
        return this._instance || (this._instance = new this());
    }
    /**
     * @param {?} data
     * @param {?} fieldName
     * @param {?} dir
     * @param {?} ignoreCase
     * @param {?} valueResolver
     * @return {?}
     */
    sort(data, fieldName, dir, ignoreCase, valueResolver) {
        /** @type {?} */
        const key = fieldName;
        /** @type {?} */
        const reverse = (dir === SortingDirection.Desc ? -1 : 1);
        /** @type {?} */
        const cmpFunc = (obj1, obj2) => {
            return this.compareObjects(obj1, obj2, key, reverse, ignoreCase, valueResolver);
        };
        return this.arraySort(data, cmpFunc);
    }
    /**
     * @param {?} a
     * @param {?} b
     * @return {?}
     */
    compareValues(a, b) {
        /** @type {?} */
        const an = (a === null || a === undefined);
        /** @type {?} */
        const bn = (b === null || b === undefined);
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
    }
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
    compareObjects(obj1, obj2, key, reverse, ignoreCase, valueResolver) {
        /** @type {?} */
        let a = valueResolver(obj1, key);
        /** @type {?} */
        let b = valueResolver(obj2, key);
        if (ignoreCase) {
            a = a && a.toLowerCase ? a.toLowerCase() : a;
            b = b && b.toLowerCase ? b.toLowerCase() : b;
        }
        return reverse * this.compareValues(a, b);
    }
    /**
     * @protected
     * @param {?} data
     * @param {?=} compareFn
     * @return {?}
     */
    arraySort(data, compareFn) {
        return data.sort(compareFn);
    }
}
DefaultSortingStrategy._instance = null;
if (false) {
    /**
     * @type {?}
     * @private
     */
    DefaultSortingStrategy._instance;
}
export class IgxSorting {
    /**
     * @param {?} data
     * @param {?} expressions
     * @return {?}
     */
    sort(data, expressions) {
        return this.sortDataRecursive(data, expressions);
    }
    /**
     * @private
     * @param {?} data
     * @param {?} index
     * @param {?} expression
     * @return {?}
     */
    groupedRecordsByExpression(data, index, expression) {
        /** @type {?} */
        let i;
        /** @type {?} */
        let groupval;
        /** @type {?} */
        const res = [];
        /** @type {?} */
        const key = expression.fieldName;
        /** @type {?} */
        const len = data.length;
        res.push(data[index]);
        groupval = this.getFieldValue(data[index], key);
        index++;
        /** @type {?} */
        const comparer = expression.groupingComparer || DefaultSortingStrategy.instance().compareValues;
        for (i = index; i < len; i++) {
            if (comparer(this.getFieldValue(data[i], key), groupval) === 0) {
                res.push(data[i]);
            }
            else {
                break;
            }
        }
        return res;
    }
    /**
     * @private
     * @template T
     * @param {?} data
     * @param {?} expressions
     * @param {?=} expressionIndex
     * @return {?}
     */
    sortDataRecursive(data, expressions, expressionIndex = 0) {
        /** @type {?} */
        let i;
        /** @type {?} */
        let j;
        /** @type {?} */
        let expr;
        /** @type {?} */
        let gbData;
        /** @type {?} */
        let gbDataLen;
        /** @type {?} */
        const exprsLen = expressions.length;
        /** @type {?} */
        const dataLen = data.length;
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
    }
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
    groupDataRecursive(data, state, level, parent, metadata, grid = null, groupsRecords = [], fullResult = { data: [], metadata: [] }) {
        /** @type {?} */
        const expressions = state.expressions;
        /** @type {?} */
        const expansion = state.expansion;
        /** @type {?} */
        let i = 0;
        /** @type {?} */
        let result = [];
        while (i < data.length) {
            /** @type {?} */
            const group = this.groupedRecordsByExpression(data, i, expressions[level]);
            /** @type {?} */
            const groupRow = {
                expression: expressions[level],
                level,
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
            const hierarchy = DataUtil.getHierarchy(groupRow);
            /** @type {?} */
            const expandState = expansion.find((s) => DataUtil.isHierarchyMatch(s.hierarchy || [{ fieldName: groupRow.expression.fieldName, value: groupRow.value }], hierarchy));
            /** @type {?} */
            const expanded = expandState ? expandState.expanded : state.defaultExpanded;
            /** @type {?} */
            let recursiveResult;
            result.push(groupRow);
            metadata.push(null);
            fullResult.data.push(groupRow);
            fullResult.metadata.push(null);
            if (level < expressions.length - 1) {
                recursiveResult = this.groupDataRecursive(group, state, level + 1, groupRow, expanded ? metadata : [], grid, groupsRecords, fullResult);
                if (expanded) {
                    result = result.concat(recursiveResult);
                }
            }
            else {
                for (const groupItem of group) {
                    fullResult.metadata.push(groupRow);
                    fullResult.data.push(groupItem);
                }
                if (expanded) {
                    metadata.push(...fullResult.metadata.slice(fullResult.metadata.length - group.length));
                    result.push(...fullResult.data.slice(fullResult.data.length - group.length));
                }
            }
            i += group.length;
        }
        return result;
    }
    /**
     * @protected
     * @param {?} obj
     * @param {?} key
     * @return {?}
     */
    getFieldValue(obj, key) {
        return obj[key];
    }
}
export class IgxDataRecordSorting extends IgxSorting {
    /**
     * @protected
     * @param {?} obj
     * @param {?} key
     * @return {?}
     */
    getFieldValue(obj, key) {
        return obj.data[key];
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ydGluZy1zdHJhdGVneS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lnbml0ZXVpLWFuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvZGF0YS1vcGVyYXRpb25zL3NvcnRpbmctc3RyYXRlZ3kudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFzQixnQkFBZ0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBR3RGLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxhQUFhLENBQUM7Ozs7QUFJdkMsc0NBTUM7OztJQUxHLGdDQUkrRDs7QUFHbkUsTUFBTSxPQUFPLHNCQUFzQjs7OztJQUcvQixnQkFBeUIsQ0FBQzs7OztJQUVuQixNQUFNLENBQUMsUUFBUTtRQUNsQixPQUFPLElBQUksQ0FBQyxTQUFTLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQztJQUMzRCxDQUFDOzs7Ozs7Ozs7SUFFTSxJQUFJLENBQUMsSUFBVyxFQUNYLFNBQWlCLEVBQ2pCLEdBQXFCLEVBQ3JCLFVBQW1CLEVBQ25CLGFBQTZDOztjQUMvQyxHQUFHLEdBQUcsU0FBUzs7Y0FDZixPQUFPLEdBQUcsQ0FBQyxHQUFHLEtBQUssZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDOztjQUNsRCxPQUFPLEdBQUcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLEVBQUU7WUFDM0IsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsYUFBYSxDQUFDLENBQUM7UUFDcEYsQ0FBQztRQUNELE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDekMsQ0FBQzs7Ozs7O0lBRU0sYUFBYSxDQUFDLENBQU0sRUFBRSxDQUFNOztjQUN6QixFQUFFLEdBQUcsQ0FBQyxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsS0FBSyxTQUFTLENBQUM7O2NBQ3BDLEVBQUUsR0FBRyxDQUFDLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxLQUFLLFNBQVMsQ0FBQztRQUMxQyxJQUFJLEVBQUUsRUFBRTtZQUNKLElBQUksRUFBRSxFQUFFO2dCQUNKLE9BQU8sQ0FBQyxDQUFDO2FBQ1o7WUFDRCxPQUFPLENBQUMsQ0FBQyxDQUFDO1NBQ2I7YUFBTSxJQUFJLEVBQUUsRUFBRTtZQUNYLE9BQU8sQ0FBQyxDQUFDO1NBQ1o7UUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN0QyxDQUFDOzs7Ozs7Ozs7OztJQUVTLGNBQWMsQ0FBQyxJQUFZLEVBQ1osSUFBWSxFQUNaLEdBQVcsRUFDWCxPQUFlLEVBQ2YsVUFBbUIsRUFDbkIsYUFBNkM7O1lBQzlELENBQUMsR0FBRyxhQUFhLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQzs7WUFDNUIsQ0FBQyxHQUFHLGFBQWEsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDO1FBQ2hDLElBQUksVUFBVSxFQUFFO1lBQ1osQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM3QyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ2hEO1FBQ0QsT0FBTyxPQUFPLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDOUMsQ0FBQzs7Ozs7OztJQUVTLFNBQVMsQ0FBQyxJQUFXLEVBQUUsU0FBVTtRQUN2QyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDaEMsQ0FBQzs7QUFwRGMsZ0NBQVMsR0FBMkIsSUFBSSxDQUFDOzs7Ozs7SUFBeEQsaUNBQXdEOztBQXVENUQsTUFBTSxPQUFPLFVBQVU7Ozs7OztJQUNaLElBQUksQ0FBQyxJQUFXLEVBQUUsV0FBaUM7UUFDdEQsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQ3JELENBQUM7Ozs7Ozs7O0lBRU8sMEJBQTBCLENBQUMsSUFBVyxFQUN0QyxLQUFhLEVBQ2IsVUFBK0I7O1lBQy9CLENBQUM7O1lBQ0QsUUFBUTs7Y0FDTixHQUFHLEdBQUcsRUFBRTs7Y0FDUixHQUFHLEdBQUcsVUFBVSxDQUFDLFNBQVM7O2NBQzFCLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTTtRQUN2QixHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ3RCLFFBQVEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNoRCxLQUFLLEVBQUUsQ0FBQzs7Y0FDRixRQUFRLEdBQUcsVUFBVSxDQUFDLGdCQUFnQixJQUFJLHNCQUFzQixDQUFDLFFBQVEsRUFBRSxDQUFDLGFBQWE7UUFDL0YsS0FBSyxDQUFDLEdBQUcsS0FBSyxFQUFFLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDMUIsSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLEVBQUUsUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUM1RCxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ3JCO2lCQUFNO2dCQUNILE1BQU07YUFDVDtTQUNKO1FBQ0QsT0FBTyxHQUFHLENBQUM7SUFDZixDQUFDOzs7Ozs7Ozs7SUFDTyxpQkFBaUIsQ0FBSSxJQUFTLEVBQ1QsV0FBaUMsRUFDakMsa0JBQTBCLENBQUM7O1lBQ2hELENBQUM7O1lBQ0QsQ0FBQzs7WUFDRCxJQUF3Qjs7WUFDeEIsTUFBTTs7WUFDTixTQUFTOztjQUNQLFFBQVEsR0FBRyxXQUFXLENBQUMsTUFBTTs7Y0FDN0IsT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNO1FBQzNCLGVBQWUsR0FBRyxlQUFlLElBQUksQ0FBQyxDQUFDO1FBQ3ZDLElBQUksZUFBZSxJQUFJLFFBQVEsSUFBSSxPQUFPLElBQUksQ0FBQyxFQUFFO1lBQzdDLE9BQU8sSUFBSSxDQUFDO1NBQ2Y7UUFDRCxJQUFJLEdBQUcsV0FBVyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2hCLElBQUksQ0FBQyxRQUFRLEdBQUcsc0JBQXNCLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDckQ7UUFDRCxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUMvRixJQUFJLGVBQWUsS0FBSyxRQUFRLEdBQUcsQ0FBQyxFQUFFO1lBQ2xDLE9BQU8sSUFBSSxDQUFDO1NBQ2Y7UUFDRCw4QkFBOEI7UUFDOUIsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxPQUFPLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDMUIsTUFBTSxHQUFHLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ3hELFNBQVMsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDO1lBQzFCLElBQUksU0FBUyxHQUFHLENBQUMsRUFBRTtnQkFDZixNQUFNLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sRUFBRSxXQUFXLEVBQUUsZUFBZSxHQUFHLENBQUMsQ0FBQyxDQUFDO2FBQzdFO1lBQ0QsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxTQUFTLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQzVCLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQzNCO1lBQ0QsQ0FBQyxJQUFJLFNBQVMsR0FBRyxDQUFDLENBQUM7U0FDdEI7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDOzs7Ozs7Ozs7Ozs7OztJQUNTLGtCQUFrQixDQUFJLElBQVMsRUFBRSxLQUFxQixFQUFFLEtBQWEsRUFDM0UsTUFBc0IsRUFBRSxRQUEwQixFQUFFLE9BQVksSUFBSSxFQUNwRSxnQkFBdUIsRUFBRSxFQUFFLGFBQTZCLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFOztjQUM1RSxXQUFXLEdBQUcsS0FBSyxDQUFDLFdBQVc7O2NBQy9CLFNBQVMsR0FBRyxLQUFLLENBQUMsU0FBUzs7WUFDN0IsQ0FBQyxHQUFHLENBQUM7O1lBQ0wsTUFBTSxHQUFHLEVBQUU7UUFDZixPQUFPLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFOztrQkFDZCxLQUFLLEdBQUcsSUFBSSxDQUFDLDBCQUEwQixDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDOztrQkFDcEUsUUFBUSxHQUFtQjtnQkFDN0IsVUFBVSxFQUFFLFdBQVcsQ0FBQyxLQUFLLENBQUM7Z0JBQzlCLEtBQUs7Z0JBQ0wsT0FBTyxFQUFFLFVBQVUsQ0FBQyxLQUFLLENBQUM7Z0JBQzFCLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDLFNBQVMsQ0FBQztnQkFDN0MsV0FBVyxFQUFFLE1BQU07Z0JBQ25CLE1BQU0sRUFBRSxFQUFFO2dCQUNWLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsSUFBSTthQUMvQztZQUNELElBQUksTUFBTSxFQUFFO2dCQUNSLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQ2hDO2lCQUFNO2dCQUNILGFBQWEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDaEM7O2tCQUNLLFNBQVMsR0FBRyxRQUFRLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQzs7a0JBQzNDLFdBQVcsR0FBd0IsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQzFELFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsU0FBUyxJQUFJLENBQUMsRUFBRSxTQUFTLEVBQUUsUUFBUSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEVBQUUsS0FBSyxFQUFFLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxDQUFDOztrQkFDekgsUUFBUSxHQUFHLFdBQVcsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLGVBQWU7O2dCQUN2RSxlQUFlO1lBQ25CLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDdEIsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNwQixVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUMvQixVQUFVLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMvQixJQUFJLEtBQUssR0FBRyxXQUFXLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtnQkFDaEMsZUFBZSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssR0FBRyxDQUFDLEVBQUUsUUFBUSxFQUN2RSxRQUFRLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUUsVUFBVSxDQUFDLENBQUM7Z0JBQy9ELElBQUksUUFBUSxFQUFFO29CQUNWLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxDQUFDO2lCQUMzQzthQUNKO2lCQUFNO2dCQUNILEtBQUssTUFBTSxTQUFTLElBQUksS0FBSyxFQUFFO29CQUMzQixVQUFVLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztvQkFDbkMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7aUJBQ25DO2dCQUNELElBQUksUUFBUSxFQUFFO29CQUNWLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxVQUFVLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztvQkFDdkYsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO2lCQUNoRjthQUNKO1lBQ0QsQ0FBQyxJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUM7U0FDckI7UUFDRCxPQUFPLE1BQU0sQ0FBQztJQUNsQixDQUFDOzs7Ozs7O0lBQ1MsYUFBYSxDQUFDLEdBQVEsRUFBRSxHQUFXO1FBQ3pDLE9BQU8sR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3BCLENBQUM7Q0FDSjtBQUVELE1BQU0sT0FBTyxvQkFBcUIsU0FBUSxVQUFVOzs7Ozs7O0lBQ3RDLGFBQWEsQ0FBQyxHQUFRLEVBQUUsR0FBVztRQUN6QyxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDekIsQ0FBQztDQUNKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY2xvbmVBcnJheSB9IGZyb20gJy4uL2NvcmUvdXRpbHMnO1xuaW1wb3J0IHsgSUdyb3VwQnlSZWNvcmQgfSBmcm9tICcuL2dyb3VwYnktcmVjb3JkLmludGVyZmFjZSc7XG5pbXBvcnQgeyBJU29ydGluZ0V4cHJlc3Npb24sIFNvcnRpbmdEaXJlY3Rpb24gfSBmcm9tICcuL3NvcnRpbmctZXhwcmVzc2lvbi5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgSUdyb3VwaW5nRXhwcmVzc2lvbiB9IGZyb20gJy4vZ3JvdXBpbmctZXhwcmVzc2lvbi5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgSUdyb3VwaW5nU3RhdGUgfSBmcm9tICcuL2dyb3VwYnktc3RhdGUuaW50ZXJmYWNlJztcbmltcG9ydCB7IERhdGFVdGlsIH0gZnJvbSAnLi9kYXRhLXV0aWwnO1xuaW1wb3J0IHsgSUdyb3VwQnlFeHBhbmRTdGF0ZSB9IGZyb20gJy4vZ3JvdXBieS1leHBhbmQtc3RhdGUuaW50ZXJmYWNlJztcbmltcG9ydCB7IElHcm91cEJ5UmVzdWx0IH0gZnJvbSAnLi9ncm91cGluZy1yZXN1bHQuaW50ZXJmYWNlJztcblxuZXhwb3J0IGludGVyZmFjZSBJU29ydGluZ1N0cmF0ZWd5IHtcbiAgICBzb3J0OiAoZGF0YTogYW55W10sXG4gICAgICAgICAgIGZpZWxkTmFtZTogc3RyaW5nLFxuICAgICAgICAgICBkaXI6IFNvcnRpbmdEaXJlY3Rpb24sXG4gICAgICAgICAgIGlnbm9yZUNhc2U6IGJvb2xlYW4sXG4gICAgICAgICAgIHZhbHVlUmVzb2x2ZXI6IChvYmo6IGFueSwga2V5OiBzdHJpbmcpID0+IGFueSkgPT4gYW55W107XG59XG5cbmV4cG9ydCBjbGFzcyBEZWZhdWx0U29ydGluZ1N0cmF0ZWd5IGltcGxlbWVudHMgSVNvcnRpbmdTdHJhdGVneSB7XG4gICAgcHJpdmF0ZSBzdGF0aWMgX2luc3RhbmNlOiBEZWZhdWx0U29ydGluZ1N0cmF0ZWd5ID0gbnVsbDtcblxuICAgIHByb3RlY3RlZCBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgICBwdWJsaWMgc3RhdGljIGluc3RhbmNlKCk6IERlZmF1bHRTb3J0aW5nU3RyYXRlZ3kge1xuICAgICAgICByZXR1cm4gdGhpcy5faW5zdGFuY2UgfHwgKHRoaXMuX2luc3RhbmNlID0gbmV3IHRoaXMoKSk7XG4gICAgfVxuXG4gICAgcHVibGljIHNvcnQoZGF0YTogYW55W10sXG4gICAgICAgICAgICAgICAgZmllbGROYW1lOiBzdHJpbmcsXG4gICAgICAgICAgICAgICAgZGlyOiBTb3J0aW5nRGlyZWN0aW9uLFxuICAgICAgICAgICAgICAgIGlnbm9yZUNhc2U6IGJvb2xlYW4sXG4gICAgICAgICAgICAgICAgdmFsdWVSZXNvbHZlcjogKG9iajogYW55LCBrZXk6IHN0cmluZykgPT4gYW55KSB7XG4gICAgICAgIGNvbnN0IGtleSA9IGZpZWxkTmFtZTtcbiAgICAgICAgY29uc3QgcmV2ZXJzZSA9IChkaXIgPT09IFNvcnRpbmdEaXJlY3Rpb24uRGVzYyA/IC0xIDogMSk7XG4gICAgICAgIGNvbnN0IGNtcEZ1bmMgPSAob2JqMSwgb2JqMikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29tcGFyZU9iamVjdHMob2JqMSwgb2JqMiwga2V5LCByZXZlcnNlLCBpZ25vcmVDYXNlLCB2YWx1ZVJlc29sdmVyKTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXJyYXlTb3J0KGRhdGEsIGNtcEZ1bmMpO1xuICAgIH1cblxuICAgIHB1YmxpYyBjb21wYXJlVmFsdWVzKGE6IGFueSwgYjogYW55KSB7XG4gICAgICAgIGNvbnN0IGFuID0gKGEgPT09IG51bGwgfHwgYSA9PT0gdW5kZWZpbmVkKTtcbiAgICAgICAgY29uc3QgYm4gPSAoYiA9PT0gbnVsbCB8fCBiID09PSB1bmRlZmluZWQpO1xuICAgICAgICBpZiAoYW4pIHtcbiAgICAgICAgICAgIGlmIChibikge1xuICAgICAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICB9IGVsc2UgaWYgKGJuKSB7XG4gICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYSA+IGIgPyAxIDogYSA8IGIgPyAtMSA6IDA7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGNvbXBhcmVPYmplY3RzKG9iajE6IG9iamVjdCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqMjogb2JqZWN0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IHN0cmluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV2ZXJzZTogbnVtYmVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZ25vcmVDYXNlOiBib29sZWFuLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZVJlc29sdmVyOiAob2JqOiBhbnksIGtleTogc3RyaW5nKSA9PiBhbnkpIHtcbiAgICAgICAgbGV0IGEgPSB2YWx1ZVJlc29sdmVyKG9iajEsIGtleSk7XG4gICAgICAgIGxldCBiID0gdmFsdWVSZXNvbHZlcihvYmoyLCBrZXkpO1xuICAgICAgICBpZiAoaWdub3JlQ2FzZSkge1xuICAgICAgICAgICAgYSA9IGEgJiYgYS50b0xvd2VyQ2FzZSA/IGEudG9Mb3dlckNhc2UoKSA6IGE7XG4gICAgICAgICAgICBiID0gYiAmJiBiLnRvTG93ZXJDYXNlID8gYi50b0xvd2VyQ2FzZSgpIDogYjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmV2ZXJzZSAqIHRoaXMuY29tcGFyZVZhbHVlcyhhLCBiKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgYXJyYXlTb3J0KGRhdGE6IGFueVtdLCBjb21wYXJlRm4/KTogYW55W10ge1xuICAgICAgICByZXR1cm4gZGF0YS5zb3J0KGNvbXBhcmVGbik7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgSWd4U29ydGluZyB7XG4gICAgcHVibGljIHNvcnQoZGF0YTogYW55W10sIGV4cHJlc3Npb25zOiBJU29ydGluZ0V4cHJlc3Npb25bXSk6IGFueVtdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc29ydERhdGFSZWN1cnNpdmUoZGF0YSwgZXhwcmVzc2lvbnMpO1xuICAgIH1cblxuICAgIHByaXZhdGUgZ3JvdXBlZFJlY29yZHNCeUV4cHJlc3Npb24oZGF0YTogYW55W10sXG4gICAgICAgICAgICBpbmRleDogbnVtYmVyLFxuICAgICAgICAgICAgZXhwcmVzc2lvbjogSUdyb3VwaW5nRXhwcmVzc2lvbik6IGFueVtdIHtcbiAgICAgICAgbGV0IGk7XG4gICAgICAgIGxldCBncm91cHZhbDtcbiAgICAgICAgY29uc3QgcmVzID0gW107XG4gICAgICAgIGNvbnN0IGtleSA9IGV4cHJlc3Npb24uZmllbGROYW1lO1xuICAgICAgICBjb25zdCBsZW4gPSBkYXRhLmxlbmd0aDtcbiAgICAgICAgcmVzLnB1c2goZGF0YVtpbmRleF0pO1xuICAgICAgICBncm91cHZhbCA9IHRoaXMuZ2V0RmllbGRWYWx1ZShkYXRhW2luZGV4XSwga2V5KTtcbiAgICAgICAgaW5kZXgrKztcbiAgICAgICAgY29uc3QgY29tcGFyZXIgPSBleHByZXNzaW9uLmdyb3VwaW5nQ29tcGFyZXIgfHwgRGVmYXVsdFNvcnRpbmdTdHJhdGVneS5pbnN0YW5jZSgpLmNvbXBhcmVWYWx1ZXM7XG4gICAgICAgIGZvciAoaSA9IGluZGV4OyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChjb21wYXJlcih0aGlzLmdldEZpZWxkVmFsdWUoZGF0YVtpXSwga2V5KSwgZ3JvdXB2YWwpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgcmVzLnB1c2goZGF0YVtpXSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXM7XG4gICAgfVxuICAgIHByaXZhdGUgc29ydERhdGFSZWN1cnNpdmU8VD4oZGF0YTogVFtdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbnM6IElTb3J0aW5nRXhwcmVzc2lvbltdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbkluZGV4OiBudW1iZXIgPSAwKTogVFtdIHtcbiAgICAgICAgbGV0IGk7XG4gICAgICAgIGxldCBqO1xuICAgICAgICBsZXQgZXhwcjogSVNvcnRpbmdFeHByZXNzaW9uO1xuICAgICAgICBsZXQgZ2JEYXRhO1xuICAgICAgICBsZXQgZ2JEYXRhTGVuO1xuICAgICAgICBjb25zdCBleHByc0xlbiA9IGV4cHJlc3Npb25zLmxlbmd0aDtcbiAgICAgICAgY29uc3QgZGF0YUxlbiA9IGRhdGEubGVuZ3RoO1xuICAgICAgICBleHByZXNzaW9uSW5kZXggPSBleHByZXNzaW9uSW5kZXggfHwgMDtcbiAgICAgICAgaWYgKGV4cHJlc3Npb25JbmRleCA+PSBleHByc0xlbiB8fCBkYXRhTGVuIDw9IDEpIHtcbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICB9XG4gICAgICAgIGV4cHIgPSBleHByZXNzaW9uc1tleHByZXNzaW9uSW5kZXhdO1xuICAgICAgICBpZiAoIWV4cHIuc3RyYXRlZ3kpIHtcbiAgICAgICAgICAgIGV4cHIuc3RyYXRlZ3kgPSBEZWZhdWx0U29ydGluZ1N0cmF0ZWd5Lmluc3RhbmNlKCk7XG4gICAgICAgIH1cbiAgICAgICAgZGF0YSA9IGV4cHIuc3RyYXRlZ3kuc29ydChkYXRhLCBleHByLmZpZWxkTmFtZSwgZXhwci5kaXIsIGV4cHIuaWdub3JlQ2FzZSwgdGhpcy5nZXRGaWVsZFZhbHVlKTtcbiAgICAgICAgaWYgKGV4cHJlc3Npb25JbmRleCA9PT0gZXhwcnNMZW4gLSAxKSB7XG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgfVxuICAgICAgICAvLyBpbiBjYXNlIG9mIG11bHRpcGxlIHNvcnRpbmdcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGRhdGFMZW47IGkrKykge1xuICAgICAgICAgICAgZ2JEYXRhID0gdGhpcy5ncm91cGVkUmVjb3Jkc0J5RXhwcmVzc2lvbihkYXRhLCBpLCBleHByKTtcbiAgICAgICAgICAgIGdiRGF0YUxlbiA9IGdiRGF0YS5sZW5ndGg7XG4gICAgICAgICAgICBpZiAoZ2JEYXRhTGVuID4gMSkge1xuICAgICAgICAgICAgICAgIGdiRGF0YSA9IHRoaXMuc29ydERhdGFSZWN1cnNpdmUoZ2JEYXRhLCBleHByZXNzaW9ucywgZXhwcmVzc2lvbkluZGV4ICsgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgZ2JEYXRhTGVuOyBqKyspIHtcbiAgICAgICAgICAgICAgICBkYXRhW2kgKyBqXSA9IGdiRGF0YVtqXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGkgKz0gZ2JEYXRhTGVuIC0gMTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIGdyb3VwRGF0YVJlY3Vyc2l2ZTxUPihkYXRhOiBUW10sIHN0YXRlOiBJR3JvdXBpbmdTdGF0ZSwgbGV2ZWw6IG51bWJlcixcbiAgICAgICAgcGFyZW50OiBJR3JvdXBCeVJlY29yZCwgbWV0YWRhdGE6IElHcm91cEJ5UmVjb3JkW10sIGdyaWQ6IGFueSA9IG51bGwsXG4gICAgICAgIGdyb3Vwc1JlY29yZHM6IGFueVtdID0gW10sIGZ1bGxSZXN1bHQ6IElHcm91cEJ5UmVzdWx0ID0geyBkYXRhOiBbXSwgbWV0YWRhdGE6IFtdIH0pOiBUW10ge1xuICAgICAgICBjb25zdCBleHByZXNzaW9ucyA9IHN0YXRlLmV4cHJlc3Npb25zO1xuICAgICAgICBjb25zdCBleHBhbnNpb24gPSBzdGF0ZS5leHBhbnNpb247XG4gICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgbGV0IHJlc3VsdCA9IFtdO1xuICAgICAgICB3aGlsZSAoaSA8IGRhdGEubGVuZ3RoKSB7XG4gICAgICAgICAgICBjb25zdCBncm91cCA9IHRoaXMuZ3JvdXBlZFJlY29yZHNCeUV4cHJlc3Npb24oZGF0YSwgaSwgZXhwcmVzc2lvbnNbbGV2ZWxdKTtcbiAgICAgICAgICAgIGNvbnN0IGdyb3VwUm93OiBJR3JvdXBCeVJlY29yZCA9IHtcbiAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBleHByZXNzaW9uc1tsZXZlbF0sXG4gICAgICAgICAgICAgICAgbGV2ZWwsXG4gICAgICAgICAgICAgICAgcmVjb3JkczogY2xvbmVBcnJheShncm91cCksXG4gICAgICAgICAgICAgICAgdmFsdWU6IGdyb3VwWzBdW2V4cHJlc3Npb25zW2xldmVsXS5maWVsZE5hbWVdLFxuICAgICAgICAgICAgICAgIGdyb3VwUGFyZW50OiBwYXJlbnQsXG4gICAgICAgICAgICAgICAgZ3JvdXBzOiBbXSxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGdyaWQgPyBncmlkLnJlbmRlcmVkUm93SGVpZ2h0IDogbnVsbFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmIChwYXJlbnQpIHtcbiAgICAgICAgICAgICAgICBwYXJlbnQuZ3JvdXBzLnB1c2goZ3JvdXBSb3cpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBncm91cHNSZWNvcmRzLnB1c2goZ3JvdXBSb3cpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgaGllcmFyY2h5ID0gRGF0YVV0aWwuZ2V0SGllcmFyY2h5KGdyb3VwUm93KTtcbiAgICAgICAgICAgIGNvbnN0IGV4cGFuZFN0YXRlOiBJR3JvdXBCeUV4cGFuZFN0YXRlID0gZXhwYW5zaW9uLmZpbmQoKHMpID0+XG4gICAgICAgICAgICAgICAgRGF0YVV0aWwuaXNIaWVyYXJjaHlNYXRjaChzLmhpZXJhcmNoeSB8fCBbeyBmaWVsZE5hbWU6IGdyb3VwUm93LmV4cHJlc3Npb24uZmllbGROYW1lLCB2YWx1ZTogZ3JvdXBSb3cudmFsdWUgfV0sIGhpZXJhcmNoeSkpO1xuICAgICAgICAgICAgY29uc3QgZXhwYW5kZWQgPSBleHBhbmRTdGF0ZSA/IGV4cGFuZFN0YXRlLmV4cGFuZGVkIDogc3RhdGUuZGVmYXVsdEV4cGFuZGVkO1xuICAgICAgICAgICAgbGV0IHJlY3Vyc2l2ZVJlc3VsdDtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKGdyb3VwUm93KTtcbiAgICAgICAgICAgIG1ldGFkYXRhLnB1c2gobnVsbCk7XG4gICAgICAgICAgICBmdWxsUmVzdWx0LmRhdGEucHVzaChncm91cFJvdyk7XG4gICAgICAgICAgICBmdWxsUmVzdWx0Lm1ldGFkYXRhLnB1c2gobnVsbCk7XG4gICAgICAgICAgICBpZiAobGV2ZWwgPCBleHByZXNzaW9ucy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgcmVjdXJzaXZlUmVzdWx0ID0gdGhpcy5ncm91cERhdGFSZWN1cnNpdmUoZ3JvdXAsIHN0YXRlLCBsZXZlbCArIDEsIGdyb3VwUm93LFxuICAgICAgICAgICAgICAgICAgICBleHBhbmRlZCA/IG1ldGFkYXRhIDogW10sIGdyaWQsIGdyb3Vwc1JlY29yZHMsIGZ1bGxSZXN1bHQpO1xuICAgICAgICAgICAgICAgIGlmIChleHBhbmRlZCkge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSByZXN1bHQuY29uY2F0KHJlY3Vyc2l2ZVJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGdyb3VwSXRlbSBvZiBncm91cCkge1xuICAgICAgICAgICAgICAgICAgICBmdWxsUmVzdWx0Lm1ldGFkYXRhLnB1c2goZ3JvdXBSb3cpO1xuICAgICAgICAgICAgICAgICAgICBmdWxsUmVzdWx0LmRhdGEucHVzaChncm91cEl0ZW0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZXhwYW5kZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgbWV0YWRhdGEucHVzaCguLi5mdWxsUmVzdWx0Lm1ldGFkYXRhLnNsaWNlKGZ1bGxSZXN1bHQubWV0YWRhdGEubGVuZ3RoIC0gZ3JvdXAubGVuZ3RoKSk7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKC4uLmZ1bGxSZXN1bHQuZGF0YS5zbGljZShmdWxsUmVzdWx0LmRhdGEubGVuZ3RoIC0gZ3JvdXAubGVuZ3RoKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaSArPSBncm91cC5sZW5ndGg7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gICAgcHJvdGVjdGVkIGdldEZpZWxkVmFsdWUob2JqOiBhbnksIGtleTogc3RyaW5nKTogYW55IHtcbiAgICAgICAgcmV0dXJuIG9ialtrZXldO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIElneERhdGFSZWNvcmRTb3J0aW5nIGV4dGVuZHMgSWd4U29ydGluZyB7XG4gICAgcHJvdGVjdGVkIGdldEZpZWxkVmFsdWUob2JqOiBhbnksIGtleTogc3RyaW5nKTogYW55IHtcbiAgICAgICAgcmV0dXJuIG9iai5kYXRhW2tleV07XG4gICAgfVxufVxuIl19