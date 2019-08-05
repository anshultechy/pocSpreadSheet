/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
import { GridBaseAPIService } from './api.service';
import { DataUtil } from '../data-operations/data-util';
import { cloneArray } from '../core/utils';
export class IgxGridCellStylesPipe {
    /**
     * @param {?} cssClasses
     * @param {?} _value
     * @param {?} data
     * @param {?} field
     * @return {?}
     */
    transform(cssClasses, _value, data, field) {
        if (!cssClasses) {
            return '';
        }
        /** @type {?} */
        const result = [];
        for (const cssClass of Object.keys(cssClasses)) {
            /** @type {?} */
            const callbackOrValue = cssClasses[cssClass];
            /** @type {?} */
            const apply = typeof callbackOrValue === 'function' ? callbackOrValue(data, field) : callbackOrValue;
            if (apply) {
                result.push(cssClass);
            }
        }
        return result.join(' ');
    }
}
IgxGridCellStylesPipe.decorators = [
    { type: Pipe, args: [{
                name: 'igxCellStyles'
            },] }
];
/**
 * @hidden
 * \@internal
 */
export class IgxGridNotGroupedPipe {
    /**
     * @param {?} value
     * @return {?}
     */
    transform(value) {
        return value.filter(item => !item.columnGroup);
    }
}
IgxGridNotGroupedPipe.decorators = [
    { type: Pipe, args: [{
                name: 'igxNotGrouped'
            },] }
];
export class IgxGridTopLevelColumns {
    /**
     * @param {?} value
     * @return {?}
     */
    transform(value) {
        return value.filter(item => item.level === 0);
    }
}
IgxGridTopLevelColumns.decorators = [
    { type: Pipe, args: [{
                name: 'igxTopLevel'
            },] }
];
/**
 * @hidden
 */
export class IgxGridFilterConditionPipe {
    /**
     * @param {?} value
     * @return {?}
     */
    transform(value) {
        return value.split(/(?=[A-Z])/).join(' ');
    }
}
IgxGridFilterConditionPipe.decorators = [
    { type: Pipe, args: [{
                name: 'filterCondition',
                pure: true
            },] }
];
/**
 * @hidden
 */
export class IgxGridTransactionPipe {
    /**
     * @param {?} gridAPI
     */
    constructor(gridAPI) {
        this.gridAPI = gridAPI;
    }
    /**
     * @param {?} collection
     * @param {?} id
     * @param {?} pipeTrigger
     * @return {?}
     */
    transform(collection, id, pipeTrigger) {
        /** @type {?} */
        const grid = this.gridAPI.grid;
        if (collection && grid.transactions.enabled) {
            /** @type {?} */
            const result = DataUtil.mergeTransactions(cloneArray(collection), grid.transactions.getAggregatedChanges(true), grid.primaryKey);
            return result;
        }
        return collection;
    }
}
IgxGridTransactionPipe.decorators = [
    { type: Pipe, args: [{
                name: 'gridTransaction',
                pure: true
            },] }
];
/** @nocollapse */
IgxGridTransactionPipe.ctorParameters = () => [
    { type: GridBaseAPIService }
];
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
export class IgxGridPaginatorOptionsPipe {
    /**
     * @param {?} values
     * @return {?}
     */
    transform(values) {
        return Array.from(new Set([...values])).sort((a, b) => a - b);
    }
}
IgxGridPaginatorOptionsPipe.decorators = [
    { type: Pipe, args: [{
                name: 'paginatorOptions',
                pure: true,
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC1jb21tb24ucGlwZXMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9pZ25pdGV1aS1hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL2dyaWRzL2dyaWQtY29tbW9uLnBpcGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUNwRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFbkQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ3hELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFLM0MsTUFBTSxPQUFPLHFCQUFxQjs7Ozs7Ozs7SUFFOUIsU0FBUyxDQUFDLFVBQWUsRUFBRSxNQUFXLEVBQUUsSUFBUyxFQUFFLEtBQWE7UUFDNUQsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNiLE9BQU8sRUFBRSxDQUFDO1NBQ2I7O2NBRUssTUFBTSxHQUFHLEVBQUU7UUFFakIsS0FBSyxNQUFNLFFBQVEsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFOztrQkFDdEMsZUFBZSxHQUFHLFVBQVUsQ0FBQyxRQUFRLENBQUM7O2tCQUN0QyxLQUFLLEdBQUcsT0FBTyxlQUFlLEtBQUssVUFBVSxDQUFDLENBQUMsQ0FBQyxlQUFlLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxlQUFlO1lBQ3BHLElBQUksS0FBSyxFQUFFO2dCQUNQLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDekI7U0FDSjtRQUVELE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM1QixDQUFDOzs7WUFyQkosSUFBSSxTQUFDO2dCQUNGLElBQUksRUFBRSxlQUFlO2FBQ3hCOzs7Ozs7QUE2QkQsTUFBTSxPQUFPLHFCQUFxQjs7Ozs7SUFFOUIsU0FBUyxDQUFDLEtBQVk7UUFDbEIsT0FBTyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDbkQsQ0FBQzs7O1lBUEosSUFBSSxTQUFDO2dCQUNGLElBQUksRUFBRSxlQUFlO2FBQ3hCOztBQVdELE1BQU0sT0FBTyxzQkFBc0I7Ozs7O0lBRS9CLFNBQVMsQ0FBQyxLQUFZO1FBQ2xCLE9BQU8sS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDbEQsQ0FBQzs7O1lBUEosSUFBSSxTQUFDO2dCQUNGLElBQUksRUFBRSxhQUFhO2FBQ3RCOzs7OztBQWNELE1BQU0sT0FBTywwQkFBMEI7Ozs7O0lBRTVCLFNBQVMsQ0FBQyxLQUFhO1FBQzFCLE9BQU8sS0FBSyxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDOUMsQ0FBQzs7O1lBUkosSUFBSSxTQUFDO2dCQUNGLElBQUksRUFBRSxpQkFBaUI7Z0JBQ3ZCLElBQUksRUFBRSxJQUFJO2FBQ2I7Ozs7O0FBYUQsTUFBTSxPQUFPLHNCQUFzQjs7OztJQUUvQixZQUFvQixPQUFxRTtRQUFyRSxZQUFPLEdBQVAsT0FBTyxDQUE4RDtJQUFJLENBQUM7Ozs7Ozs7SUFFOUYsU0FBUyxDQUFDLFVBQWlCLEVBQUUsRUFBVSxFQUFFLFdBQW1COztjQUNsRCxJQUFJLEdBQXlCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSTtRQUVwRCxJQUFJLFVBQVUsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRTs7a0JBQ25DLE1BQU0sR0FBRyxRQUFRLENBQUMsaUJBQWlCLENBQ3JDLFVBQVUsQ0FBQyxVQUFVLENBQUMsRUFDdEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsRUFDNUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztZQUNwQixPQUFPLE1BQU0sQ0FBQztTQUNqQjtRQUNELE9BQU8sVUFBVSxDQUFDO0lBQ3RCLENBQUM7OztZQW5CSixJQUFJLFNBQUM7Z0JBQ0YsSUFBSSxFQUFFLGlCQUFpQjtnQkFDdkIsSUFBSSxFQUFFLElBQUk7YUFDYjs7OztZQXRFUSxrQkFBa0I7Ozs7Ozs7SUF5RVgseUNBQTZFOzs7OztBQXFCN0YsTUFBTSxPQUFPLDJCQUEyQjs7Ozs7SUFDN0IsU0FBUyxDQUFDLE1BQXFCO1FBQ2xDLE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNsRSxDQUFDOzs7WUFQSixJQUFJLFNBQUM7Z0JBQ0YsSUFBSSxFQUFFLGtCQUFrQjtnQkFDeEIsSUFBSSxFQUFFLElBQUk7YUFDYiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEdyaWRCYXNlQVBJU2VydmljZSB9IGZyb20gJy4vYXBpLnNlcnZpY2UnO1xuaW1wb3J0IHsgSWd4R3JpZEJhc2VDb21wb25lbnQsIElHcmlkRGF0YUJpbmRhYmxlIH0gZnJvbSAnLi9ncmlkLWJhc2UuY29tcG9uZW50JztcbmltcG9ydCB7IERhdGFVdGlsIH0gZnJvbSAnLi4vZGF0YS1vcGVyYXRpb25zL2RhdGEtdXRpbCc7XG5pbXBvcnQgeyBjbG9uZUFycmF5IH0gZnJvbSAnLi4vY29yZS91dGlscyc7XG5cbkBQaXBlKHtcbiAgICBuYW1lOiAnaWd4Q2VsbFN0eWxlcydcbn0pXG5leHBvcnQgY2xhc3MgSWd4R3JpZENlbGxTdHlsZXNQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cbiAgICB0cmFuc2Zvcm0oY3NzQ2xhc3NlczogYW55LCBfdmFsdWU6IGFueSwgZGF0YTogYW55LCBmaWVsZDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgaWYgKCFjc3NDbGFzc2VzKSB7XG4gICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCByZXN1bHQgPSBbXTtcblxuICAgICAgICBmb3IgKGNvbnN0IGNzc0NsYXNzIG9mIE9iamVjdC5rZXlzKGNzc0NsYXNzZXMpKSB7XG4gICAgICAgICAgICBjb25zdCBjYWxsYmFja09yVmFsdWUgPSBjc3NDbGFzc2VzW2Nzc0NsYXNzXTtcbiAgICAgICAgICAgIGNvbnN0IGFwcGx5ID0gdHlwZW9mIGNhbGxiYWNrT3JWYWx1ZSA9PT0gJ2Z1bmN0aW9uJyA/IGNhbGxiYWNrT3JWYWx1ZShkYXRhLCBmaWVsZCkgOiBjYWxsYmFja09yVmFsdWU7XG4gICAgICAgICAgICBpZiAoYXBwbHkpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChjc3NDbGFzcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0LmpvaW4oJyAnKTtcbiAgICB9XG59XG5cbi8qKlxuICogQGhpZGRlblxuICogQGludGVybmFsXG4gKi9cbkBQaXBlKHtcbiAgICBuYW1lOiAnaWd4Tm90R3JvdXBlZCdcbn0pXG5leHBvcnQgY2xhc3MgSWd4R3JpZE5vdEdyb3VwZWRQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cbiAgICB0cmFuc2Zvcm0odmFsdWU6IGFueVtdKTogYW55W10ge1xuICAgICAgICByZXR1cm4gdmFsdWUuZmlsdGVyKGl0ZW0gPT4gIWl0ZW0uY29sdW1uR3JvdXApO1xuICAgIH1cbn1cblxuQFBpcGUoe1xuICAgIG5hbWU6ICdpZ3hUb3BMZXZlbCdcbn0pXG5leHBvcnQgY2xhc3MgSWd4R3JpZFRvcExldmVsQ29sdW1ucyBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuXG4gICAgdHJhbnNmb3JtKHZhbHVlOiBhbnlbXSk6IGFueVtdIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlLmZpbHRlcihpdGVtID0+IGl0ZW0ubGV2ZWwgPT09IDApO1xuICAgIH1cbn1cbi8qKlxuICpAaGlkZGVuXG4gKi9cbkBQaXBlKHtcbiAgICBuYW1lOiAnZmlsdGVyQ29uZGl0aW9uJyxcbiAgICBwdXJlOiB0cnVlXG59KVxuZXhwb3J0IGNsYXNzIElneEdyaWRGaWx0ZXJDb25kaXRpb25QaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cbiAgICBwdWJsaWMgdHJhbnNmb3JtKHZhbHVlOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdmFsdWUuc3BsaXQoLyg/PVtBLVpdKS8pLmpvaW4oJyAnKTtcbiAgICB9XG59XG5cbi8qKiBAaGlkZGVuICovXG5AUGlwZSh7XG4gICAgbmFtZTogJ2dyaWRUcmFuc2FjdGlvbicsXG4gICAgcHVyZTogdHJ1ZVxufSlcbmV4cG9ydCBjbGFzcyBJZ3hHcmlkVHJhbnNhY3Rpb25QaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGdyaWRBUEk6IEdyaWRCYXNlQVBJU2VydmljZTxJZ3hHcmlkQmFzZUNvbXBvbmVudCAmIElHcmlkRGF0YUJpbmRhYmxlPikgeyB9XG5cbiAgICB0cmFuc2Zvcm0oY29sbGVjdGlvbjogYW55W10sIGlkOiBzdHJpbmcsIHBpcGVUcmlnZ2VyOiBudW1iZXIpIHtcbiAgICAgICAgY29uc3QgZ3JpZDogSWd4R3JpZEJhc2VDb21wb25lbnQgPSB0aGlzLmdyaWRBUEkuZ3JpZDtcblxuICAgICAgICBpZiAoY29sbGVjdGlvbiAmJiBncmlkLnRyYW5zYWN0aW9ucy5lbmFibGVkKSB7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBEYXRhVXRpbC5tZXJnZVRyYW5zYWN0aW9ucyhcbiAgICAgICAgICAgICAgICBjbG9uZUFycmF5KGNvbGxlY3Rpb24pLFxuICAgICAgICAgICAgICAgIGdyaWQudHJhbnNhY3Rpb25zLmdldEFnZ3JlZ2F0ZWRDaGFuZ2VzKHRydWUpLFxuICAgICAgICAgICAgICAgIGdyaWQucHJpbWFyeUtleSk7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb2xsZWN0aW9uO1xuICAgIH1cbn1cblxuLyoqIEBoaWRkZW4gKi9cbkBQaXBlKHtcbiAgICBuYW1lOiAncGFnaW5hdG9yT3B0aW9ucycsXG4gICAgcHVyZTogdHJ1ZSxcbn0pXG5leHBvcnQgY2xhc3MgSWd4R3JpZFBhZ2luYXRvck9wdGlvbnNQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gICAgcHVibGljIHRyYW5zZm9ybSh2YWx1ZXM6IEFycmF5PG51bWJlcj4pIHtcbiAgICAgICAgcmV0dXJuIEFycmF5LmZyb20obmV3IFNldChbLi4udmFsdWVzXSkpLnNvcnQoKGEsIGIpID0+IGEgLSBiKTtcbiAgICB9XG59XG4iXX0=