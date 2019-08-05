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
var IgxGridSortingPipe = /** @class */ (function () {
    function IgxGridSortingPipe(gridAPI) {
        this.gridAPI = (/** @type {?} */ (gridAPI));
    }
    /**
     * @param {?} collection
     * @param {?} expressions
     * @param {?} id
     * @param {?} pipeTrigger
     * @return {?}
     */
    IgxGridSortingPipe.prototype.transform = /**
     * @param {?} collection
     * @param {?} expressions
     * @param {?} id
     * @param {?} pipeTrigger
     * @return {?}
     */
    function (collection, expressions, id, pipeTrigger) {
        /** @type {?} */
        var grid = this.gridAPI.grid;
        /** @type {?} */
        var result;
        if (!expressions.length) {
            result = collection;
        }
        else {
            result = DataUtil.sort(cloneArray(collection), expressions);
        }
        grid.filteredSortedData = result;
        return result;
    };
    IgxGridSortingPipe.decorators = [
        { type: Pipe, args: [{
                    name: 'gridSort',
                    pure: true
                },] }
    ];
    /** @nocollapse */
    IgxGridSortingPipe.ctorParameters = function () { return [
        { type: GridBaseAPIService }
    ]; };
    return IgxGridSortingPipe;
}());
export { IgxGridSortingPipe };
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
var IgxGridGroupingPipe = /** @class */ (function () {
    function IgxGridGroupingPipe(gridAPI) {
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
    IgxGridGroupingPipe.prototype.transform = /**
     * @param {?} collection
     * @param {?} expression
     * @param {?} expansion
     * @param {?} defaultExpanded
     * @param {?} id
     * @param {?} groupsRecords
     * @param {?} pipeTrigger
     * @return {?}
     */
    function (collection, expression, expansion, defaultExpanded, id, groupsRecords, pipeTrigger) {
        /** @type {?} */
        var state = { expressions: [], expansion: [], defaultExpanded: defaultExpanded };
        /** @type {?} */
        var grid = this.gridAPI.grid;
        state.expressions = grid.groupingExpressions;
        /** @type {?} */
        var result;
        /** @type {?} */
        var fullResult = { data: [], metadata: [] };
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
    };
    IgxGridGroupingPipe.decorators = [
        { type: Pipe, args: [{
                    name: 'gridGroupBy',
                    pure: true
                },] }
    ];
    /** @nocollapse */
    IgxGridGroupingPipe.ctorParameters = function () { return [
        { type: GridBaseAPIService }
    ]; };
    return IgxGridGroupingPipe;
}());
export { IgxGridGroupingPipe };
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
var IgxGridPagingPipe = /** @class */ (function () {
    function IgxGridPagingPipe(gridAPI) {
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
    IgxGridPagingPipe.prototype.transform = /**
     * @param {?} collection
     * @param {?=} page
     * @param {?=} perPage
     * @param {?=} id
     * @param {?=} pipeTrigger
     * @return {?}
     */
    function (collection, page, perPage, id, pipeTrigger) {
        if (page === void 0) { page = 0; }
        if (perPage === void 0) { perPage = 15; }
        if (!this.gridAPI.grid.paging) {
            return collection;
        }
        /** @type {?} */
        var state = {
            index: page,
            recordsPerPage: perPage
        };
        DataUtil.correctPagingState(state, collection.data.length);
        /** @type {?} */
        var result = {
            data: DataUtil.page(cloneArray(collection.data), state),
            metadata: DataUtil.page(cloneArray(collection.metadata), state)
        };
        if (this.gridAPI.grid.page !== state.index) {
            this.gridAPI.grid.page = state.index;
        }
        this.gridAPI.grid.pagingState = state;
        return result;
    };
    IgxGridPagingPipe.decorators = [
        { type: Pipe, args: [{
                    name: 'gridPaging',
                    pure: true
                },] }
    ];
    /** @nocollapse */
    IgxGridPagingPipe.ctorParameters = function () { return [
        { type: GridBaseAPIService }
    ]; };
    return IgxGridPagingPipe;
}());
export { IgxGridPagingPipe };
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
var IgxGridFilteringPipe = /** @class */ (function () {
    function IgxGridFilteringPipe(gridAPI) {
        this.gridAPI = gridAPI;
    }
    /**
     * @param {?} collection
     * @param {?} expressionsTree
     * @param {?} id
     * @param {?} pipeTrigger
     * @return {?}
     */
    IgxGridFilteringPipe.prototype.transform = /**
     * @param {?} collection
     * @param {?} expressionsTree
     * @param {?} id
     * @param {?} pipeTrigger
     * @return {?}
     */
    function (collection, expressionsTree, id, pipeTrigger) {
        /** @type {?} */
        var grid = this.gridAPI.grid;
        /** @type {?} */
        var state = { expressionsTree: expressionsTree };
        if (!state.expressionsTree ||
            !state.expressionsTree.filteringOperands ||
            state.expressionsTree.filteringOperands.length === 0) {
            return collection;
        }
        /** @type {?} */
        var result = DataUtil.filter(cloneArray(collection), state);
        grid.filteredData = result;
        return result;
    };
    IgxGridFilteringPipe.decorators = [
        { type: Pipe, args: [{
                    name: 'gridFiltering',
                    pure: true
                },] }
    ];
    /** @nocollapse */
    IgxGridFilteringPipe.ctorParameters = function () { return [
        { type: GridBaseAPIService }
    ]; };
    return IgxGridFilteringPipe;
}());
export { IgxGridFilteringPipe };
if (false) {
    /**
     * @type {?}
     * @private
     */
    IgxGridFilteringPipe.prototype.gridAPI;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC5waXBlcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lnbml0ZXVpLWFuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvZ3JpZHMvZ3JpZC9ncmlkLnBpcGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUNwRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDOUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBUTNELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7O0FBTXBEO0lBT0ksNEJBQVksT0FBcUU7UUFDN0UsSUFBSSxDQUFDLE9BQU8sR0FBRyxtQkFBbUIsT0FBTyxFQUFBLENBQUM7SUFDOUMsQ0FBQzs7Ozs7Ozs7SUFFTSxzQ0FBUzs7Ozs7OztJQUFoQixVQUFpQixVQUFpQixFQUFFLFdBQWlDLEVBQUUsRUFBVSxFQUFFLFdBQW1COztZQUM1RixJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJOztZQUMxQixNQUFhO1FBRWpCLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFO1lBQ3JCLE1BQU0sR0FBRyxVQUFVLENBQUM7U0FDdkI7YUFBTTtZQUNILE1BQU0sR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsRUFBRSxXQUFXLENBQUMsQ0FBQztTQUMvRDtRQUNELElBQUksQ0FBQyxrQkFBa0IsR0FBRyxNQUFNLENBQUM7UUFFakMsT0FBTyxNQUFNLENBQUM7SUFDbEIsQ0FBQzs7Z0JBdkJKLElBQUksU0FBQztvQkFDRixJQUFJLEVBQUUsVUFBVTtvQkFDaEIsSUFBSSxFQUFFLElBQUk7aUJBQ2I7Ozs7Z0JBVFEsa0JBQWtCOztJQThCM0IseUJBQUM7Q0FBQSxBQXhCRCxJQXdCQztTQXBCWSxrQkFBa0I7Ozs7OztJQUMzQixxQ0FBbUM7Ozs7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ckIsSUFBSSxFQUFFLElBQUk7aUJBQ2I7Ozs7Z0JBcEhRLGtCQUFrQjs7SUF3STNCLDJCQUFDO0NBQUEsQUF2QkQsSUF1QkM7U0FuQlksb0JBQW9COzs7Ozs7SUFFakIsdUNBQTZFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgY2xvbmVBcnJheSB9IGZyb20gJy4uLy4uL2NvcmUvdXRpbHMnO1xuaW1wb3J0IHsgRGF0YVV0aWwgfSBmcm9tICcuLi8uLi9kYXRhLW9wZXJhdGlvbnMvZGF0YS11dGlsJztcbmltcG9ydCB7IElHcm91cEJ5RXhwYW5kU3RhdGUgfSBmcm9tICcuLi8uLi9kYXRhLW9wZXJhdGlvbnMvZ3JvdXBieS1leHBhbmQtc3RhdGUuaW50ZXJmYWNlJztcbmltcG9ydCB7IElHcm91cEJ5UmVzdWx0IH0gZnJvbSAnLi4vLi4vZGF0YS1vcGVyYXRpb25zL2dyb3VwaW5nLXJlc3VsdC5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgSUZpbHRlcmluZ0V4cHJlc3Npb25zVHJlZSB9IGZyb20gJy4uLy4uL2RhdGEtb3BlcmF0aW9ucy9maWx0ZXJpbmctZXhwcmVzc2lvbnMtdHJlZSc7XG5pbXBvcnQgeyBJU29ydGluZ0V4cHJlc3Npb24gfSBmcm9tICcuLi8uLi9kYXRhLW9wZXJhdGlvbnMvc29ydGluZy1leHByZXNzaW9uLmludGVyZmFjZSc7XG5pbXBvcnQgeyBJZ3hHcmlkQVBJU2VydmljZSB9IGZyb20gJy4vZ3JpZC1hcGkuc2VydmljZSc7XG5pbXBvcnQgeyBJZ3hHcmlkQ29tcG9uZW50IH0gZnJvbSAnLi9ncmlkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJR3JvdXBpbmdFeHByZXNzaW9uIH0gZnJvbSAnLi4vLi4vZGF0YS1vcGVyYXRpb25zL2dyb3VwaW5nLWV4cHJlc3Npb24uaW50ZXJmYWNlJztcbmltcG9ydCB7IEdyaWRCYXNlQVBJU2VydmljZSB9IGZyb20gJy4uL2FwaS5zZXJ2aWNlJztcbmltcG9ydCB7IElneEdyaWRCYXNlQ29tcG9uZW50LCBJR3JpZERhdGFCaW5kYWJsZSB9IGZyb20gJy4uL2dyaWQtYmFzZS5jb21wb25lbnQnO1xuXG4vKipcbiAqQGhpZGRlblxuICovXG5AUGlwZSh7XG4gICAgbmFtZTogJ2dyaWRTb3J0JyxcbiAgICBwdXJlOiB0cnVlXG59KVxuZXhwb3J0IGNsYXNzIElneEdyaWRTb3J0aW5nUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICAgIHByaXZhdGUgZ3JpZEFQSTogSWd4R3JpZEFQSVNlcnZpY2U7XG5cbiAgICBjb25zdHJ1Y3RvcihncmlkQVBJOiBHcmlkQmFzZUFQSVNlcnZpY2U8SWd4R3JpZEJhc2VDb21wb25lbnQgJiBJR3JpZERhdGFCaW5kYWJsZT4pIHtcbiAgICAgICAgdGhpcy5ncmlkQVBJID0gPElneEdyaWRBUElTZXJ2aWNlPmdyaWRBUEk7XG4gICAgfVxuXG4gICAgcHVibGljIHRyYW5zZm9ybShjb2xsZWN0aW9uOiBhbnlbXSwgZXhwcmVzc2lvbnM6IElTb3J0aW5nRXhwcmVzc2lvbltdLCBpZDogc3RyaW5nLCBwaXBlVHJpZ2dlcjogbnVtYmVyKTogYW55W10ge1xuICAgICAgICBjb25zdCBncmlkID0gdGhpcy5ncmlkQVBJLmdyaWQ7XG4gICAgICAgIGxldCByZXN1bHQ6IGFueVtdO1xuXG4gICAgICAgIGlmICghZXhwcmVzc2lvbnMubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXN1bHQgPSBjb2xsZWN0aW9uO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzdWx0ID0gRGF0YVV0aWwuc29ydChjbG9uZUFycmF5KGNvbGxlY3Rpb24pLCBleHByZXNzaW9ucyk7XG4gICAgICAgIH1cbiAgICAgICAgZ3JpZC5maWx0ZXJlZFNvcnRlZERhdGEgPSByZXN1bHQ7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbi8qKlxuICpAaGlkZGVuXG4gKi9cbkBQaXBlKHtcbiAgICBuYW1lOiAnZ3JpZEdyb3VwQnknLFxuICAgIHB1cmU6IHRydWVcbn0pXG5leHBvcnQgY2xhc3MgSWd4R3JpZEdyb3VwaW5nUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICAgIHByaXZhdGUgZ3JpZEFQSTogSWd4R3JpZEFQSVNlcnZpY2U7XG5cbiAgICBjb25zdHJ1Y3RvcihncmlkQVBJOiBHcmlkQmFzZUFQSVNlcnZpY2U8SWd4R3JpZEJhc2VDb21wb25lbnQgJiBJR3JpZERhdGFCaW5kYWJsZT4pIHtcbiAgICAgICAgdGhpcy5ncmlkQVBJID0gPElneEdyaWRBUElTZXJ2aWNlPmdyaWRBUEk7XG4gICAgfVxuXG4gICAgcHVibGljIHRyYW5zZm9ybShjb2xsZWN0aW9uOiBhbnlbXSwgZXhwcmVzc2lvbjogSUdyb3VwaW5nRXhwcmVzc2lvbiB8IElHcm91cGluZ0V4cHJlc3Npb25bXSxcbiAgICAgICAgZXhwYW5zaW9uOiBJR3JvdXBCeUV4cGFuZFN0YXRlIHwgSUdyb3VwQnlFeHBhbmRTdGF0ZVtdLCBkZWZhdWx0RXhwYW5kZWQ6IGJvb2xlYW4sXG4gICAgICAgIGlkOiBzdHJpbmcsIGdyb3Vwc1JlY29yZHM6IGFueVtdLCBwaXBlVHJpZ2dlcjogbnVtYmVyKTogSUdyb3VwQnlSZXN1bHQge1xuXG4gICAgICAgIGNvbnN0IHN0YXRlID0geyBleHByZXNzaW9uczogW10sIGV4cGFuc2lvbjogW10sIGRlZmF1bHRFeHBhbmRlZCB9O1xuICAgICAgICBjb25zdCBncmlkOiBJZ3hHcmlkQ29tcG9uZW50ID0gdGhpcy5ncmlkQVBJLmdyaWQ7XG4gICAgICAgIHN0YXRlLmV4cHJlc3Npb25zID0gZ3JpZC5ncm91cGluZ0V4cHJlc3Npb25zO1xuICAgICAgICBsZXQgcmVzdWx0OiBJR3JvdXBCeVJlc3VsdDtcbiAgICAgICAgY29uc3QgZnVsbFJlc3VsdDogSUdyb3VwQnlSZXN1bHQgPSB7IGRhdGE6IFtdLCBtZXRhZGF0YTogW10gfTtcblxuICAgICAgICBpZiAoIXN0YXRlLmV4cHJlc3Npb25zLmxlbmd0aCkge1xuICAgICAgICAgICAgLy8gZW1wdHkgdGhlIGFycmF5IHdpdGhvdXQgY2hhbmdpbmcgcmVmZXJlbmNlXG4gICAgICAgICAgICBncm91cHNSZWNvcmRzLnNwbGljZSgwLCBncm91cHNSZWNvcmRzLmxlbmd0aCk7XG4gICAgICAgICAgICByZXN1bHQgPSB7XG4gICAgICAgICAgICAgICAgZGF0YTogY29sbGVjdGlvbixcbiAgICAgICAgICAgICAgICBtZXRhZGF0YTogY29sbGVjdGlvblxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHN0YXRlLmV4cGFuc2lvbiA9IGdyaWQuZ3JvdXBpbmdFeHBhbnNpb25TdGF0ZTtcbiAgICAgICAgICAgIHN0YXRlLmRlZmF1bHRFeHBhbmRlZCA9IGdyaWQuZ3JvdXBzRXhwYW5kZWQ7XG4gICAgICAgICAgICByZXN1bHQgPSBEYXRhVXRpbC5ncm91cChjbG9uZUFycmF5KGNvbGxlY3Rpb24pLCBzdGF0ZSwgZ3JpZCwgZ3JvdXBzUmVjb3JkcywgZnVsbFJlc3VsdCk7XG4gICAgICAgIH1cbiAgICAgICAgZ3JpZC5ncm91cGluZ0ZsYXRSZXN1bHQgPSByZXN1bHQuZGF0YTtcbiAgICAgICAgZ3JpZC5ncm91cGluZ1Jlc3VsdCA9IGZ1bGxSZXN1bHQuZGF0YTtcbiAgICAgICAgZ3JpZC5ncm91cGluZ01ldGFkYXRhID0gZnVsbFJlc3VsdC5tZXRhZGF0YTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbi8qKlxuICpAaGlkZGVuXG4gKi9cbkBQaXBlKHtcbiAgICBuYW1lOiAnZ3JpZFBhZ2luZycsXG4gICAgcHVyZTogdHJ1ZVxufSlcbmV4cG9ydCBjbGFzcyBJZ3hHcmlkUGFnaW5nUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBncmlkQVBJOiBHcmlkQmFzZUFQSVNlcnZpY2U8SWd4R3JpZEJhc2VDb21wb25lbnQgJiBJR3JpZERhdGFCaW5kYWJsZT4pIHsgfVxuXG4gICAgcHVibGljIHRyYW5zZm9ybShjb2xsZWN0aW9uOiBJR3JvdXBCeVJlc3VsdCwgcGFnZSA9IDAsIHBlclBhZ2UgPSAxNSwgaWQ6IHN0cmluZywgcGlwZVRyaWdnZXI6IG51bWJlcik6IElHcm91cEJ5UmVzdWx0IHtcblxuICAgICAgICBpZiAoIXRoaXMuZ3JpZEFQSS5ncmlkLnBhZ2luZykge1xuICAgICAgICAgICAgcmV0dXJuIGNvbGxlY3Rpb247XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBzdGF0ZSA9IHtcbiAgICAgICAgICAgIGluZGV4OiBwYWdlLFxuICAgICAgICAgICAgcmVjb3Jkc1BlclBhZ2U6IHBlclBhZ2VcbiAgICAgICAgfTtcbiAgICAgICAgRGF0YVV0aWwuY29ycmVjdFBhZ2luZ1N0YXRlKHN0YXRlLCBjb2xsZWN0aW9uLmRhdGEubGVuZ3RoKTtcblxuICAgICAgICBjb25zdCByZXN1bHQgPSB7XG4gICAgICAgICAgICBkYXRhOiBEYXRhVXRpbC5wYWdlKGNsb25lQXJyYXkoY29sbGVjdGlvbi5kYXRhKSwgc3RhdGUpLFxuICAgICAgICAgICAgbWV0YWRhdGE6IERhdGFVdGlsLnBhZ2UoY2xvbmVBcnJheShjb2xsZWN0aW9uLm1ldGFkYXRhKSwgc3RhdGUpXG4gICAgICAgIH07XG4gICAgICAgIGlmICh0aGlzLmdyaWRBUEkuZ3JpZC5wYWdlICE9PSBzdGF0ZS5pbmRleCkge1xuICAgICAgICAgICAgdGhpcy5ncmlkQVBJLmdyaWQucGFnZSA9IHN0YXRlLmluZGV4O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZ3JpZEFQSS5ncmlkLnBhZ2luZ1N0YXRlID0gc3RhdGU7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG4vKipcbiAqQGhpZGRlblxuICovXG5AUGlwZSh7XG4gICAgbmFtZTogJ2dyaWRGaWx0ZXJpbmcnLFxuICAgIHB1cmU6IHRydWVcbn0pXG5leHBvcnQgY2xhc3MgSWd4R3JpZEZpbHRlcmluZ1BpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZ3JpZEFQSTogR3JpZEJhc2VBUElTZXJ2aWNlPElneEdyaWRCYXNlQ29tcG9uZW50ICYgSUdyaWREYXRhQmluZGFibGU+KSB7IH1cblxuICAgIHB1YmxpYyB0cmFuc2Zvcm0oY29sbGVjdGlvbjogYW55W10sIGV4cHJlc3Npb25zVHJlZTogSUZpbHRlcmluZ0V4cHJlc3Npb25zVHJlZSxcbiAgICAgICAgaWQ6IHN0cmluZywgcGlwZVRyaWdnZXI6IG51bWJlcikge1xuICAgICAgICBjb25zdCBncmlkID0gdGhpcy5ncmlkQVBJLmdyaWQ7XG4gICAgICAgIGNvbnN0IHN0YXRlID0geyBleHByZXNzaW9uc1RyZWU6IGV4cHJlc3Npb25zVHJlZSB9O1xuXG4gICAgICAgIGlmICghc3RhdGUuZXhwcmVzc2lvbnNUcmVlIHx8XG4gICAgICAgICAgICAhc3RhdGUuZXhwcmVzc2lvbnNUcmVlLmZpbHRlcmluZ09wZXJhbmRzIHx8XG4gICAgICAgICAgICBzdGF0ZS5leHByZXNzaW9uc1RyZWUuZmlsdGVyaW5nT3BlcmFuZHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gY29sbGVjdGlvbjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IERhdGFVdGlsLmZpbHRlcihjbG9uZUFycmF5KGNvbGxlY3Rpb24pLCBzdGF0ZSk7XG4gICAgICAgIGdyaWQuZmlsdGVyZWREYXRhID0gcmVzdWx0O1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cbiJdfQ==