/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
import { GridBaseAPIService } from './api.service';
import { DataUtil } from '../data-operations/data-util';
import { cloneArray } from '../core/utils';
var IgxGridCellStylesPipe = /** @class */ (function () {
    function IgxGridCellStylesPipe() {
    }
    /**
     * @param {?} cssClasses
     * @param {?} _value
     * @param {?} data
     * @param {?} field
     * @return {?}
     */
    IgxGridCellStylesPipe.prototype.transform = /**
     * @param {?} cssClasses
     * @param {?} _value
     * @param {?} data
     * @param {?} field
     * @return {?}
     */
    function (cssClasses, _value, data, field) {
        var e_1, _a;
        if (!cssClasses) {
            return '';
        }
        /** @type {?} */
        var result = [];
        try {
            for (var _b = tslib_1.__values(Object.keys(cssClasses)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var cssClass = _c.value;
                /** @type {?} */
                var callbackOrValue = cssClasses[cssClass];
                /** @type {?} */
                var apply = typeof callbackOrValue === 'function' ? callbackOrValue(data, field) : callbackOrValue;
                if (apply) {
                    result.push(cssClass);
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return result.join(' ');
    };
    IgxGridCellStylesPipe.decorators = [
        { type: Pipe, args: [{
                    name: 'igxCellStyles'
                },] }
    ];
    return IgxGridCellStylesPipe;
}());
export { IgxGridCellStylesPipe };
/**
 * @hidden
 * \@internal
 */
var IgxGridNotGroupedPipe = /** @class */ (function () {
    function IgxGridNotGroupedPipe() {
    }
    /**
     * @param {?} value
     * @return {?}
     */
    IgxGridNotGroupedPipe.prototype.transform = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return value.filter(function (item) { return !item.columnGroup; });
    };
    IgxGridNotGroupedPipe.decorators = [
        { type: Pipe, args: [{
                    name: 'igxNotGrouped'
                },] }
    ];
    return IgxGridNotGroupedPipe;
}());
export { IgxGridNotGroupedPipe };
var IgxGridTopLevelColumns = /** @class */ (function () {
    function IgxGridTopLevelColumns() {
    }
    /**
     * @param {?} value
     * @return {?}
     */
    IgxGridTopLevelColumns.prototype.transform = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return value.filter(function (item) { return item.level === 0; });
    };
    IgxGridTopLevelColumns.decorators = [
        { type: Pipe, args: [{
                    name: 'igxTopLevel'
                },] }
    ];
    return IgxGridTopLevelColumns;
}());
export { IgxGridTopLevelColumns };
/**
 * @hidden
 */
var IgxGridFilterConditionPipe = /** @class */ (function () {
    function IgxGridFilterConditionPipe() {
    }
    /**
     * @param {?} value
     * @return {?}
     */
    IgxGridFilterConditionPipe.prototype.transform = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return value.split(/(?=[A-Z])/).join(' ');
    };
    IgxGridFilterConditionPipe.decorators = [
        { type: Pipe, args: [{
                    name: 'filterCondition',
                    pure: true
                },] }
    ];
    return IgxGridFilterConditionPipe;
}());
export { IgxGridFilterConditionPipe };
/**
 * @hidden
 */
var IgxGridTransactionPipe = /** @class */ (function () {
    function IgxGridTransactionPipe(gridAPI) {
        this.gridAPI = gridAPI;
    }
    /**
     * @param {?} collection
     * @param {?} id
     * @param {?} pipeTrigger
     * @return {?}
     */
    IgxGridTransactionPipe.prototype.transform = /**
     * @param {?} collection
     * @param {?} id
     * @param {?} pipeTrigger
     * @return {?}
     */
    function (collection, id, pipeTrigger) {
        /** @type {?} */
        var grid = this.gridAPI.grid;
        if (collection && grid.transactions.enabled) {
            /** @type {?} */
            var result = DataUtil.mergeTransactions(cloneArray(collection), grid.transactions.getAggregatedChanges(true), grid.primaryKey);
            return result;
        }
        return collection;
    };
    IgxGridTransactionPipe.decorators = [
        { type: Pipe, args: [{
                    name: 'gridTransaction',
                    pure: true
                },] }
    ];
    /** @nocollapse */
    IgxGridTransactionPipe.ctorParameters = function () { return [
        { type: GridBaseAPIService }
    ]; };
    return IgxGridTransactionPipe;
}());
export { IgxGridTransactionPipe };
if (false) {
    /**
     * @type {?}
     * @private
     */
    IgxGridTransactionPipe.prototype.gridAPI;
}
/**
 * @hidden
 */
var IgxGridPaginatorOptionsPipe = /** @class */ (function () {
    function IgxGridPaginatorOptionsPipe() {
    }
    /**
     * @param {?} values
     * @return {?}
     */
    IgxGridPaginatorOptionsPipe.prototype.transform = /**
     * @param {?} values
     * @return {?}
     */
    function (values) {
        return Array.from(new Set(tslib_1.__spread(values))).sort(function (a, b) { return a - b; });
    };
    IgxGridPaginatorOptionsPipe.decorators = [
        { type: Pipe, args: [{
                    name: 'paginatorOptions',
                    pure: true,
                },] }
    ];
    return IgxGridPaginatorOptionsPipe;
}());
export { IgxGridPaginatorOptionsPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC1jb21tb24ucGlwZXMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9pZ25pdGV1aS1hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL2dyaWRzL2dyaWQtY29tbW9uLnBpcGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRW5ELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDO0lBQUE7SUFzQkEsQ0FBQzs7Ozs7Ozs7SUFqQkcseUNBQVM7Ozs7Ozs7SUFBVCxVQUFVLFVBQWUsRUFBRSxNQUFXLEVBQUUsSUFBUyxFQUFFLEtBQWE7O1FBQzVELElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDYixPQUFPLEVBQUUsQ0FBQztTQUNiOztZQUVLLE1BQU0sR0FBRyxFQUFFOztZQUVqQixLQUF1QixJQUFBLEtBQUEsaUJBQUEsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQSxnQkFBQSw0QkFBRTtnQkFBM0MsSUFBTSxRQUFRLFdBQUE7O29CQUNULGVBQWUsR0FBRyxVQUFVLENBQUMsUUFBUSxDQUFDOztvQkFDdEMsS0FBSyxHQUFHLE9BQU8sZUFBZSxLQUFLLFVBQVUsQ0FBQyxDQUFDLENBQUMsZUFBZSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsZUFBZTtnQkFDcEcsSUFBSSxLQUFLLEVBQUU7b0JBQ1AsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztpQkFDekI7YUFDSjs7Ozs7Ozs7O1FBRUQsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzVCLENBQUM7O2dCQXJCSixJQUFJLFNBQUM7b0JBQ0YsSUFBSSxFQUFFLGVBQWU7aUJBQ3hCOztJQW9CRCw0QkFBQztDQUFBLEFBdEJELElBc0JDO1NBbkJZLHFCQUFxQjs7Ozs7QUF5QmxDO0lBQUE7SUFRQSxDQUFDOzs7OztJQUhHLHlDQUFTOzs7O0lBQVQsVUFBVSxLQUFZO1FBQ2xCLE9BQU8sS0FBSyxDQUFDLE1BQU0sQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBakIsQ0FBaUIsQ0FBQyxDQUFDO0lBQ25ELENBQUM7O2dCQVBKLElBQUksU0FBQztvQkFDRixJQUFJLEVBQUUsZUFBZTtpQkFDeEI7O0lBTUQsNEJBQUM7Q0FBQSxBQVJELElBUUM7U0FMWSxxQkFBcUI7QUFPbEM7SUFBQTtJQVFBLENBQUM7Ozs7O0lBSEcsMENBQVM7Ozs7SUFBVCxVQUFVLEtBQVk7UUFDbEIsT0FBTyxLQUFLLENBQUMsTUFBTSxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsSUFBSSxDQUFDLEtBQUssS0FBSyxDQUFDLEVBQWhCLENBQWdCLENBQUMsQ0FBQztJQUNsRCxDQUFDOztnQkFQSixJQUFJLFNBQUM7b0JBQ0YsSUFBSSxFQUFFLGFBQWE7aUJBQ3RCOztJQU1ELDZCQUFDO0NBQUEsQUFSRCxJQVFDO1NBTFksc0JBQXNCOzs7O0FBU25DO0lBQUE7SUFTQSxDQUFDOzs7OztJQUhVLDhDQUFTOzs7O0lBQWhCLFVBQWlCLEtBQWE7UUFDMUIsT0FBTyxLQUFLLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM5QyxDQUFDOztnQkFSSixJQUFJLFNBQUM7b0JBQ0YsSUFBSSxFQUFFLGlCQUFpQjtvQkFDdkIsSUFBSSxFQUFFLElBQUk7aUJBQ2I7O0lBTUQsaUNBQUM7Q0FBQSxBQVRELElBU0M7U0FMWSwwQkFBMEI7Ozs7QUFRdkM7SUFNSSxnQ0FBb0IsT0FBcUU7UUFBckUsWUFBTyxHQUFQLE9BQU8sQ0FBOEQ7SUFBSSxDQUFDOzs7Ozs7O0lBRTlGLDBDQUFTOzs7Ozs7SUFBVCxVQUFVLFVBQWlCLEVBQUUsRUFBVSxFQUFFLFdBQW1COztZQUNsRCxJQUFJLEdBQXlCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSTtRQUVwRCxJQUFJLFVBQVUsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRTs7Z0JBQ25DLE1BQU0sR0FBRyxRQUFRLENBQUMsaUJBQWlCLENBQ3JDLFVBQVUsQ0FBQyxVQUFVLENBQUMsRUFDdEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsRUFDNUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztZQUNwQixPQUFPLE1BQU0sQ0FBQztTQUNqQjtRQUNELE9BQU8sVUFBVSxDQUFDO0lBQ3RCLENBQUM7O2dCQW5CSixJQUFJLFNBQUM7b0JBQ0YsSUFBSSxFQUFFLGlCQUFpQjtvQkFDdkIsSUFBSSxFQUFFLElBQUk7aUJBQ2I7Ozs7Z0JBdEVRLGtCQUFrQjs7SUF1RjNCLDZCQUFDO0NBQUEsQUFwQkQsSUFvQkM7U0FoQlksc0JBQXNCOzs7Ozs7SUFFbkIseUNBQTZFOzs7OztBQWlCN0Y7SUFBQTtJQVFBLENBQUM7Ozs7O0lBSFUsK0NBQVM7Ozs7SUFBaEIsVUFBaUIsTUFBcUI7UUFDbEMsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxrQkFBSyxNQUFNLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLENBQUMsRUFBRSxDQUFDLElBQUssT0FBQSxDQUFDLEdBQUcsQ0FBQyxFQUFMLENBQUssQ0FBQyxDQUFDO0lBQ2xFLENBQUM7O2dCQVBKLElBQUksU0FBQztvQkFDRixJQUFJLEVBQUUsa0JBQWtCO29CQUN4QixJQUFJLEVBQUUsSUFBSTtpQkFDYjs7SUFLRCxrQ0FBQztDQUFBLEFBUkQsSUFRQztTQUpZLDJCQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEdyaWRCYXNlQVBJU2VydmljZSB9IGZyb20gJy4vYXBpLnNlcnZpY2UnO1xuaW1wb3J0IHsgSWd4R3JpZEJhc2VDb21wb25lbnQsIElHcmlkRGF0YUJpbmRhYmxlIH0gZnJvbSAnLi9ncmlkLWJhc2UuY29tcG9uZW50JztcbmltcG9ydCB7IERhdGFVdGlsIH0gZnJvbSAnLi4vZGF0YS1vcGVyYXRpb25zL2RhdGEtdXRpbCc7XG5pbXBvcnQgeyBjbG9uZUFycmF5IH0gZnJvbSAnLi4vY29yZS91dGlscyc7XG5cbkBQaXBlKHtcbiAgICBuYW1lOiAnaWd4Q2VsbFN0eWxlcydcbn0pXG5leHBvcnQgY2xhc3MgSWd4R3JpZENlbGxTdHlsZXNQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cbiAgICB0cmFuc2Zvcm0oY3NzQ2xhc3NlczogYW55LCBfdmFsdWU6IGFueSwgZGF0YTogYW55LCBmaWVsZDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgaWYgKCFjc3NDbGFzc2VzKSB7XG4gICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCByZXN1bHQgPSBbXTtcblxuICAgICAgICBmb3IgKGNvbnN0IGNzc0NsYXNzIG9mIE9iamVjdC5rZXlzKGNzc0NsYXNzZXMpKSB7XG4gICAgICAgICAgICBjb25zdCBjYWxsYmFja09yVmFsdWUgPSBjc3NDbGFzc2VzW2Nzc0NsYXNzXTtcbiAgICAgICAgICAgIGNvbnN0IGFwcGx5ID0gdHlwZW9mIGNhbGxiYWNrT3JWYWx1ZSA9PT0gJ2Z1bmN0aW9uJyA/IGNhbGxiYWNrT3JWYWx1ZShkYXRhLCBmaWVsZCkgOiBjYWxsYmFja09yVmFsdWU7XG4gICAgICAgICAgICBpZiAoYXBwbHkpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChjc3NDbGFzcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0LmpvaW4oJyAnKTtcbiAgICB9XG59XG5cbi8qKlxuICogQGhpZGRlblxuICogQGludGVybmFsXG4gKi9cbkBQaXBlKHtcbiAgICBuYW1lOiAnaWd4Tm90R3JvdXBlZCdcbn0pXG5leHBvcnQgY2xhc3MgSWd4R3JpZE5vdEdyb3VwZWRQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cbiAgICB0cmFuc2Zvcm0odmFsdWU6IGFueVtdKTogYW55W10ge1xuICAgICAgICByZXR1cm4gdmFsdWUuZmlsdGVyKGl0ZW0gPT4gIWl0ZW0uY29sdW1uR3JvdXApO1xuICAgIH1cbn1cblxuQFBpcGUoe1xuICAgIG5hbWU6ICdpZ3hUb3BMZXZlbCdcbn0pXG5leHBvcnQgY2xhc3MgSWd4R3JpZFRvcExldmVsQ29sdW1ucyBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuXG4gICAgdHJhbnNmb3JtKHZhbHVlOiBhbnlbXSk6IGFueVtdIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlLmZpbHRlcihpdGVtID0+IGl0ZW0ubGV2ZWwgPT09IDApO1xuICAgIH1cbn1cbi8qKlxuICpAaGlkZGVuXG4gKi9cbkBQaXBlKHtcbiAgICBuYW1lOiAnZmlsdGVyQ29uZGl0aW9uJyxcbiAgICBwdXJlOiB0cnVlXG59KVxuZXhwb3J0IGNsYXNzIElneEdyaWRGaWx0ZXJDb25kaXRpb25QaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cbiAgICBwdWJsaWMgdHJhbnNmb3JtKHZhbHVlOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdmFsdWUuc3BsaXQoLyg/PVtBLVpdKS8pLmpvaW4oJyAnKTtcbiAgICB9XG59XG5cbi8qKiBAaGlkZGVuICovXG5AUGlwZSh7XG4gICAgbmFtZTogJ2dyaWRUcmFuc2FjdGlvbicsXG4gICAgcHVyZTogdHJ1ZVxufSlcbmV4cG9ydCBjbGFzcyBJZ3hHcmlkVHJhbnNhY3Rpb25QaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGdyaWRBUEk6IEdyaWRCYXNlQVBJU2VydmljZTxJZ3hHcmlkQmFzZUNvbXBvbmVudCAmIElHcmlkRGF0YUJpbmRhYmxlPikgeyB9XG5cbiAgICB0cmFuc2Zvcm0oY29sbGVjdGlvbjogYW55W10sIGlkOiBzdHJpbmcsIHBpcGVUcmlnZ2VyOiBudW1iZXIpIHtcbiAgICAgICAgY29uc3QgZ3JpZDogSWd4R3JpZEJhc2VDb21wb25lbnQgPSB0aGlzLmdyaWRBUEkuZ3JpZDtcblxuICAgICAgICBpZiAoY29sbGVjdGlvbiAmJiBncmlkLnRyYW5zYWN0aW9ucy5lbmFibGVkKSB7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBEYXRhVXRpbC5tZXJnZVRyYW5zYWN0aW9ucyhcbiAgICAgICAgICAgICAgICBjbG9uZUFycmF5KGNvbGxlY3Rpb24pLFxuICAgICAgICAgICAgICAgIGdyaWQudHJhbnNhY3Rpb25zLmdldEFnZ3JlZ2F0ZWRDaGFuZ2VzKHRydWUpLFxuICAgICAgICAgICAgICAgIGdyaWQucHJpbWFyeUtleSk7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb2xsZWN0aW9uO1xuICAgIH1cbn1cblxuLyoqIEBoaWRkZW4gKi9cbkBQaXBlKHtcbiAgICBuYW1lOiAncGFnaW5hdG9yT3B0aW9ucycsXG4gICAgcHVyZTogdHJ1ZSxcbn0pXG5leHBvcnQgY2xhc3MgSWd4R3JpZFBhZ2luYXRvck9wdGlvbnNQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gICAgcHVibGljIHRyYW5zZm9ybSh2YWx1ZXM6IEFycmF5PG51bWJlcj4pIHtcbiAgICAgICAgcmV0dXJuIEFycmF5LmZyb20obmV3IFNldChbLi4udmFsdWVzXSkpLnNvcnQoKGEsIGIpID0+IGEgLSBiKTtcbiAgICB9XG59XG4iXX0=