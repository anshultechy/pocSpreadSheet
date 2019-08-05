/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
import { cloneArray } from '../../core/utils';
import { DataUtil } from '../../data-operations/data-util';
import { GridBaseAPIService } from '../api.service';
/**
 * @hidden
 */
export class IgxGridSortingPipe {
    /**
     * @param {?} gridAPI
     */
    constructor(gridAPI) {
        this.gridAPI = (/** @type {?} */ (gridAPI));
    }
    /**
     * @param {?} collection
     * @param {?} expressions
     * @param {?} id
     * @param {?} pipeTrigger
     * @return {?}
     */
    transform(collection, expressions, id, pipeTrigger) {
        /** @type {?} */
        const grid = this.gridAPI.grid;
        /** @type {?} */
        let result;
        if (!expressions.length) {
            result = collection;
        }
        else {
            result = DataUtil.sort(cloneArray(collection), expressions);
        }
        grid.filteredSortedData = result;
        return result;
    }
}
IgxGridSortingPipe.decorators = [
    { type: Pipe, args: [{
                name: 'gridSort',
                pure: true
            },] }
];
/** @nocollapse */
IgxGridSortingPipe.ctorParameters = () => [
    { type: GridBaseAPIService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    IgxGridSortingPipe.prototype.gridAPI;
}
/**
 * @hidden
 */
export class IgxGridGroupingPipe {
    /**
     * @param {?} gridAPI
     */
    constructor(gridAPI) {
        this.gridAPI = (/** @type {?} */ (gridAPI));
    }
    /**
     * @param {?} collection
     * @param {?} expression
     * @param {?} expansion
     * @param {?} defaultExpanded
     * @param {?} id
     * @param {?} groupsRecords
     * @param {?} pipeTrigger
     * @return {?}
     */
    transform(collection, expression, expansion, defaultExpanded, id, groupsRecords, pipeTrigger) {
        /** @type {?} */
        const state = { expressions: [], expansion: [], defaultExpanded };
        /** @type {?} */
        const grid = this.gridAPI.grid;
        state.expressions = grid.groupingExpressions;
        /** @type {?} */
        let result;
        /** @type {?} */
        const fullResult = { data: [], metadata: [] };
        if (!state.expressions.length) {
            // empty the array without changing reference
            groupsRecords.splice(0, groupsRecords.length);
            result = {
                data: collection,
                metadata: collection
            };
        }
        else {
            state.expansion = grid.groupingExpansionState;
            state.defaultExpanded = grid.groupsExpanded;
            result = DataUtil.group(cloneArray(collection), state, grid, groupsRecords, fullResult);
        }
        grid.groupingFlatResult = result.data;
        grid.groupingResult = fullResult.data;
        grid.groupingMetadata = fullResult.metadata;
        return result;
    }
}
IgxGridGroupingPipe.decorators = [
    { type: Pipe, args: [{
                name: 'gridGroupBy',
                pure: true
            },] }
];
/** @nocollapse */
IgxGridGroupingPipe.ctorParameters = () => [
    { type: GridBaseAPIService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    IgxGridGroupingPipe.prototype.gridAPI;
}
/**
 * @hidden
 */
export class IgxGridPagingPipe {
    /**
     * @param {?} gridAPI
     */
    constructor(gridAPI) {
        this.gridAPI = gridAPI;
    }
    /**
     * @param {?} collection
     * @param {?=} page
     * @param {?=} perPage
     * @param {?=} id
     * @param {?=} pipeTrigger
     * @return {?}
     */
    transform(collection, page = 0, perPage = 15, id, pipeTrigger) {
        if (!this.gridAPI.grid.paging) {
            return collection;
        }
        /** @type {?} */
        const state = {
            index: page,
            recordsPerPage: perPage
        };
        DataUtil.correctPagingState(state, collection.data.length);
        /** @type {?} */
        const result = {
            data: DataUtil.page(cloneArray(collection.data), state),
            metadata: DataUtil.page(cloneArray(collection.metadata), state)
        };
        if (this.gridAPI.grid.page !== state.index) {
            this.gridAPI.grid.page = state.index;
        }
        this.gridAPI.grid.pagingState = state;
        return result;
    }
}
IgxGridPagingPipe.decorators = [
    { type: Pipe, args: [{
                name: 'gridPaging',
                pure: true
            },] }
];
/** @nocollapse */
IgxGridPagingPipe.ctorParameters = () => [
    { type: GridBaseAPIService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    IgxGridPagingPipe.prototype.gridAPI;
}
/**
 * @hidden
 */
export class IgxGridFilteringPipe {
    /**
     * @param {?} gridAPI
     */
    constructor(gridAPI) {
        this.gridAPI = gridAPI;
    }
    /**
     * @param {?} collection
     * @param {?} expressionsTree
     * @param {?} id
     * @param {?} pipeTrigger
     * @return {?}
     */
    transform(collection, expressionsTree, id, pipeTrigger) {
        /** @type {?} */
        const grid = this.gridAPI.grid;
        /** @type {?} */
        const state = { expressionsTree: expressionsTree };
        if (!state.expressionsTree ||
            !state.expressionsTree.filteringOperands ||
            state.expressionsTree.filteringOperands.length === 0) {
            return collection;
        }
        /** @type {?} */
        const result = DataUtil.filter(cloneArray(collection), state);
        grid.filteredData = result;
        return result;
    }
}
IgxGridFilteringPipe.decorators = [
    { type: Pipe, args: [{
                name: 'gridFiltering',
                pure: true
            },] }
];
/** @nocollapse */
IgxGridFilteringPipe.ctorParameters = () => [
    { type: GridBaseAPIService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    IgxGridFilteringPipe.prototype.gridAPI;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC5waXBlcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lnbml0ZXVpLWFuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvZ3JpZHMvZ3JpZC9ncmlkLnBpcGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUNwRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDOUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBUTNELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7O0FBVXBELE1BQU0sT0FBTyxrQkFBa0I7Ozs7SUFHM0IsWUFBWSxPQUFxRTtRQUM3RSxJQUFJLENBQUMsT0FBTyxHQUFHLG1CQUFtQixPQUFPLEVBQUEsQ0FBQztJQUM5QyxDQUFDOzs7Ozs7OztJQUVNLFNBQVMsQ0FBQyxVQUFpQixFQUFFLFdBQWlDLEVBQUUsRUFBVSxFQUFFLFdBQW1COztjQUM1RixJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJOztZQUMxQixNQUFhO1FBRWpCLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFO1lBQ3JCLE1BQU0sR0FBRyxVQUFVLENBQUM7U0FDdkI7YUFBTTtZQUNILE1BQU0sR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsRUFBRSxXQUFXLENBQUMsQ0FBQztTQUMvRDtRQUNELElBQUksQ0FBQyxrQkFBa0IsR0FBRyxNQUFNLENBQUM7UUFFakMsT0FBTyxNQUFNLENBQUM7SUFDbEIsQ0FBQzs7O1lBdkJKLElBQUksU0FBQztnQkFDRixJQUFJLEVBQUUsVUFBVTtnQkFDaEIsSUFBSSxFQUFFLElBQUk7YUFDYjs7OztZQVRRLGtCQUFrQjs7Ozs7OztJQVd2QixxQ0FBbUM7Ozs7O0FBNEJ2QyxNQUFNLE9BQU8sbUJBQW1COzs7O0lBRzVCLFlBQVks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QztRQUNELElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7UUFDdEMsT0FBTyxNQUFNLENBQUM7SUFDbEIsQ0FBQzs7O1lBN0JKLElBQUksU0FBQztnQkFDRixJQUFJLEVBQUUsWUFBWTtnQkFDbEIsSUFBSSxFQUFFLElBQUk7YUFDYjs7OztZQWpGUSxrQkFBa0I7Ozs7Ozs7SUFvRlgsb0NBQTZFOzs7OztBQWlDN0YsTUFBTSxPQUFPLG9CQUFvQjs7OztJQUU3QixZQUFvQixPQUFxRTtRQUFyRSxZQUFPLEdBQVAsT0FBTyxDQUE4RDtJQUFJLENBQUM7Ozs7Ozs7O0lBRXZGLFNBQVMsQ0FBQyxVQUFpQixFQUFFLGVBQTBDLEVBQzFFLEVBQVUsRUFBRSxXQUFtQjs7Y0FDekIsSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSTs7Y0FDeEIsS0FBSyxHQUFHLEVBQUUsZUFBZSxFQUFFLGVBQWUsRUFBRTtRQUVsRCxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWU7WUFDdEIsQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLGlCQUFpQjtZQUN4QyxLQUFLLENBQUMsZUFBZSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDdEQsT0FBTyxVQUFVLENBQUM7U0FDckI7O2NBRUssTUFBTSxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxFQUFFLEtBQUssQ0FBQztRQUM3RCxJQUFJLENBQUMsWUFBWSxHQUFHLE1BQU0sQ0FBQztRQUMzQixPQUFPLE1BQU0sQ0FBQztJQUNsQixDQUFDOzs7WUF0QkosSUFBSSxTQUFDO2dCQUNGLElBQUksRUFBRSxlQUFlO2dCQUNyQixJQUFJLEVBQUUsSUFBSTthQUNiOzs7O1lBcEhRLGtCQUFrQjs7Ozs7OztJQXVIWCx1Q0FBNkUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBjbG9uZUFycmF5IH0gZnJvbSAnLi4vLi4vY29yZS91dGlscyc7XG5pbXBvcnQgeyBEYXRhVXRpbCB9IGZyb20gJy4uLy4uL2RhdGEtb3BlcmF0aW9ucy9kYXRhLXV0aWwnO1xuaW1wb3J0IHsgSUdyb3VwQnlFeHBhbmRTdGF0ZSB9IGZyb20gJy4uLy4uL2RhdGEtb3BlcmF0aW9ucy9ncm91cGJ5LWV4cGFuZC1zdGF0ZS5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgSUdyb3VwQnlSZXN1bHQgfSBmcm9tICcuLi8uLi9kYXRhLW9wZXJhdGlvbnMvZ3JvdXBpbmctcmVzdWx0LmludGVyZmFjZSc7XG5pbXBvcnQgeyBJRmlsdGVyaW5nRXhwcmVzc2lvbnNUcmVlIH0gZnJvbSAnLi4vLi4vZGF0YS1vcGVyYXRpb25zL2ZpbHRlcmluZy1leHByZXNzaW9ucy10cmVlJztcbmltcG9ydCB7IElTb3J0aW5nRXhwcmVzc2lvbiB9IGZyb20gJy4uLy4uL2RhdGEtb3BlcmF0aW9ucy9zb3J0aW5nLWV4cHJlc3Npb24uaW50ZXJmYWNlJztcbmltcG9ydCB7IElneEdyaWRBUElTZXJ2aWNlIH0gZnJvbSAnLi9ncmlkLWFwaS5zZXJ2aWNlJztcbmltcG9ydCB7IElneEdyaWRDb21wb25lbnQgfSBmcm9tICcuL2dyaWQuY29tcG9uZW50JztcbmltcG9ydCB7IElHcm91cGluZ0V4cHJlc3Npb24gfSBmcm9tICcuLi8uLi9kYXRhLW9wZXJhdGlvbnMvZ3JvdXBpbmctZXhwcmVzc2lvbi5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgR3JpZEJhc2VBUElTZXJ2aWNlIH0gZnJvbSAnLi4vYXBpLnNlcnZpY2UnO1xuaW1wb3J0IHsgSWd4R3JpZEJhc2VDb21wb25lbnQsIElHcmlkRGF0YUJpbmRhYmxlIH0gZnJvbSAnLi4vZ3JpZC1iYXNlLmNvbXBvbmVudCc7XG5cbi8qKlxuICpAaGlkZGVuXG4gKi9cbkBQaXBlKHtcbiAgICBuYW1lOiAnZ3JpZFNvcnQnLFxuICAgIHB1cmU6IHRydWVcbn0pXG5leHBvcnQgY2xhc3MgSWd4R3JpZFNvcnRpbmdQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gICAgcHJpdmF0ZSBncmlkQVBJOiBJZ3hHcmlkQVBJU2VydmljZTtcblxuICAgIGNvbnN0cnVjdG9yKGdyaWRBUEk6IEdyaWRCYXNlQVBJU2VydmljZTxJZ3hHcmlkQmFzZUNvbXBvbmVudCAmIElHcmlkRGF0YUJpbmRhYmxlPikge1xuICAgICAgICB0aGlzLmdyaWRBUEkgPSA8SWd4R3JpZEFQSVNlcnZpY2U+Z3JpZEFQSTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdHJhbnNmb3JtKGNvbGxlY3Rpb246IGFueVtdLCBleHByZXNzaW9uczogSVNvcnRpbmdFeHByZXNzaW9uW10sIGlkOiBzdHJpbmcsIHBpcGVUcmlnZ2VyOiBudW1iZXIpOiBhbnlbXSB7XG4gICAgICAgIGNvbnN0IGdyaWQgPSB0aGlzLmdyaWRBUEkuZ3JpZDtcbiAgICAgICAgbGV0IHJlc3VsdDogYW55W107XG5cbiAgICAgICAgaWYgKCFleHByZXNzaW9ucy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IGNvbGxlY3Rpb247XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXN1bHQgPSBEYXRhVXRpbC5zb3J0KGNsb25lQXJyYXkoY29sbGVjdGlvbiksIGV4cHJlc3Npb25zKTtcbiAgICAgICAgfVxuICAgICAgICBncmlkLmZpbHRlcmVkU29ydGVkRGF0YSA9IHJlc3VsdDtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxuLyoqXG4gKkBoaWRkZW5cbiAqL1xuQFBpcGUoe1xuICAgIG5hbWU6ICdncmlkR3JvdXBCeScsXG4gICAgcHVyZTogdHJ1ZVxufSlcbmV4cG9ydCBjbGFzcyBJZ3hHcmlkR3JvdXBpbmdQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gICAgcHJpdmF0ZSBncmlkQVBJOiBJZ3hHcmlkQVBJU2VydmljZTtcblxuICAgIGNvbnN0cnVjdG9yKGdyaWRBUEk6IEdyaWRCYXNlQVBJU2VydmljZTxJZ3hHcmlkQmFzZUNvbXBvbmVudCAmIElHcmlkRGF0YUJpbmRhYmxlPikge1xuICAgICAgICB0aGlzLmdyaWRBUEkgPSA8SWd4R3JpZEFQSVNlcnZpY2U+Z3JpZEFQSTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdHJhbnNmb3JtKGNvbGxlY3Rpb246IGFueVtdLCBleHByZXNzaW9uOiBJR3JvdXBpbmdFeHByZXNzaW9uIHwgSUdyb3VwaW5nRXhwcmVzc2lvbltdLFxuICAgICAgICBleHBhbnNpb246IElHcm91cEJ5RXhwYW5kU3RhdGUgfCBJR3JvdXBCeUV4cGFuZFN0YXRlW10sIGRlZmF1bHRFeHBhbmRlZDogYm9vbGVhbixcbiAgICAgICAgaWQ6IHN0cmluZywgZ3JvdXBzUmVjb3JkczogYW55W10sIHBpcGVUcmlnZ2VyOiBudW1iZXIpOiBJR3JvdXBCeVJlc3VsdCB7XG5cbiAgICAgICAgY29uc3Qgc3RhdGUgPSB7IGV4cHJlc3Npb25zOiBbXSwgZXhwYW5zaW9uOiBbXSwgZGVmYXVsdEV4cGFuZGVkIH07XG4gICAgICAgIGNvbnN0IGdyaWQ6IElneEdyaWRDb21wb25lbnQgPSB0aGlzLmdyaWRBUEkuZ3JpZDtcbiAgICAgICAgc3RhdGUuZXhwcmVzc2lvbnMgPSBncmlkLmdyb3VwaW5nRXhwcmVzc2lvbnM7XG4gICAgICAgIGxldCByZXN1bHQ6IElHcm91cEJ5UmVzdWx0O1xuICAgICAgICBjb25zdCBmdWxsUmVzdWx0OiBJR3JvdXBCeVJlc3VsdCA9IHsgZGF0YTogW10sIG1ldGFkYXRhOiBbXSB9O1xuXG4gICAgICAgIGlmICghc3RhdGUuZXhwcmVzc2lvbnMubGVuZ3RoKSB7XG4gICAgICAgICAgICAvLyBlbXB0eSB0aGUgYXJyYXkgd2l0aG91dCBjaGFuZ2luZyByZWZlcmVuY2VcbiAgICAgICAgICAgIGdyb3Vwc1JlY29yZHMuc3BsaWNlKDAsIGdyb3Vwc1JlY29yZHMubGVuZ3RoKTtcbiAgICAgICAgICAgIHJlc3VsdCA9IHtcbiAgICAgICAgICAgICAgICBkYXRhOiBjb2xsZWN0aW9uLFxuICAgICAgICAgICAgICAgIG1ldGFkYXRhOiBjb2xsZWN0aW9uXG4gICAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3RhdGUuZXhwYW5zaW9uID0gZ3JpZC5ncm91cGluZ0V4cGFuc2lvblN0YXRlO1xuICAgICAgICAgICAgc3RhdGUuZGVmYXVsdEV4cGFuZGVkID0gZ3JpZC5ncm91cHNFeHBhbmRlZDtcbiAgICAgICAgICAgIHJlc3VsdCA9IERhdGFVdGlsLmdyb3VwKGNsb25lQXJyYXkoY29sbGVjdGlvbiksIHN0YXRlLCBncmlkLCBncm91cHNSZWNvcmRzLCBmdWxsUmVzdWx0KTtcbiAgICAgICAgfVxuICAgICAgICBncmlkLmdyb3VwaW5nRmxhdFJlc3VsdCA9IHJlc3VsdC5kYXRhO1xuICAgICAgICBncmlkLmdyb3VwaW5nUmVzdWx0ID0gZnVsbFJlc3VsdC5kYXRhO1xuICAgICAgICBncmlkLmdyb3VwaW5nTWV0YWRhdGEgPSBmdWxsUmVzdWx0Lm1ldGFkYXRhO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxuLyoqXG4gKkBoaWRkZW5cbiAqL1xuQFBpcGUoe1xuICAgIG5hbWU6ICdncmlkUGFnaW5nJyxcbiAgICBwdXJlOiB0cnVlXG59KVxuZXhwb3J0IGNsYXNzIElneEdyaWRQYWdpbmdQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGdyaWRBUEk6IEdyaWRCYXNlQVBJU2VydmljZTxJZ3hHcmlkQmFzZUNvbXBvbmVudCAmIElHcmlkRGF0YUJpbmRhYmxlPikgeyB9XG5cbiAgICBwdWJsaWMgdHJhbnNmb3JtKGNvbGxlY3Rpb246IElHcm91cEJ5UmVzdWx0LCBwYWdlID0gMCwgcGVyUGFnZSA9IDE1LCBpZDogc3RyaW5nLCBwaXBlVHJpZ2dlcjogbnVtYmVyKTogSUdyb3VwQnlSZXN1bHQge1xuXG4gICAgICAgIGlmICghdGhpcy5ncmlkQVBJLmdyaWQucGFnaW5nKSB7XG4gICAgICAgICAgICByZXR1cm4gY29sbGVjdGlvbjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHN0YXRlID0ge1xuICAgICAgICAgICAgaW5kZXg6IHBhZ2UsXG4gICAgICAgICAgICByZWNvcmRzUGVyUGFnZTogcGVyUGFnZVxuICAgICAgICB9O1xuICAgICAgICBEYXRhVXRpbC5jb3JyZWN0UGFnaW5nU3RhdGUoc3RhdGUsIGNvbGxlY3Rpb24uZGF0YS5sZW5ndGgpO1xuXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHtcbiAgICAgICAgICAgIGRhdGE6IERhdGFVdGlsLnBhZ2UoY2xvbmVBcnJheShjb2xsZWN0aW9uLmRhdGEpLCBzdGF0ZSksXG4gICAgICAgICAgICBtZXRhZGF0YTogRGF0YVV0aWwucGFnZShjbG9uZUFycmF5KGNvbGxlY3Rpb24ubWV0YWRhdGEpLCBzdGF0ZSlcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKHRoaXMuZ3JpZEFQSS5ncmlkLnBhZ2UgIT09IHN0YXRlLmluZGV4KSB7XG4gICAgICAgICAgICB0aGlzLmdyaWRBUEkuZ3JpZC5wYWdlID0gc3RhdGUuaW5kZXg7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5ncmlkQVBJLmdyaWQucGFnaW5nU3RhdGUgPSBzdGF0ZTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbi8qKlxuICpAaGlkZGVuXG4gKi9cbkBQaXBlKHtcbiAgICBuYW1lOiAnZ3JpZEZpbHRlcmluZycsXG4gICAgcHVyZTogdHJ1ZVxufSlcbmV4cG9ydCBjbGFzcyBJZ3hHcmlkRmlsdGVyaW5nUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBncmlkQVBJOiBHcmlkQmFzZUFQSVNlcnZpY2U8SWd4R3JpZEJhc2VDb21wb25lbnQgJiBJR3JpZERhdGFCaW5kYWJsZT4pIHsgfVxuXG4gICAgcHVibGljIHRyYW5zZm9ybShjb2xsZWN0aW9uOiBhbnlbXSwgZXhwcmVzc2lvbnNUcmVlOiBJRmlsdGVyaW5nRXhwcmVzc2lvbnNUcmVlLFxuICAgICAgICBpZDogc3RyaW5nLCBwaXBlVHJpZ2dlcjogbnVtYmVyKSB7XG4gICAgICAgIGNvbnN0IGdyaWQgPSB0aGlzLmdyaWRBUEkuZ3JpZDtcbiAgICAgICAgY29uc3Qgc3RhdGUgPSB7IGV4cHJlc3Npb25zVHJlZTogZXhwcmVzc2lvbnNUcmVlIH07XG5cbiAgICAgICAgaWYgKCFzdGF0ZS5leHByZXNzaW9uc1RyZWUgfHxcbiAgICAgICAgICAgICFzdGF0ZS5leHByZXNzaW9uc1RyZWUuZmlsdGVyaW5nT3BlcmFuZHMgfHxcbiAgICAgICAgICAgIHN0YXRlLmV4cHJlc3Npb25zVHJlZS5maWx0ZXJpbmdPcGVyYW5kcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBjb2xsZWN0aW9uO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcmVzdWx0ID0gRGF0YVV0aWwuZmlsdGVyKGNsb25lQXJyYXkoY29sbGVjdGlvbiksIHN0YXRlKTtcbiAgICAgICAgZ3JpZC5maWx0ZXJlZERhdGEgPSByZXN1bHQ7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuIl19