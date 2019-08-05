/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
import { GridBaseAPIService } from '../api.service';
import { GridSummaryPosition, GridSummaryCalculationMode } from '../grid-base.component';
/**
 * @hidden
 * @record
 */
function ISkipRecord() { }
if (false) {
    /** @type {?|undefined} */
    ISkipRecord.prototype.skip;
}
/**
 * @hidden
 */
var IgxGridSummaryPipe = /** @class */ (function () {
    function IgxGridSummaryPipe(gridAPI) {
        this.gridAPI = (/** @type {?} */ (gridAPI));
    }
    /**
     * @param {?} collection
     * @param {?} hasSummary
     * @param {?} summaryCalculationMode
     * @param {?} summaryPosition
     * @param {?} id
     * @param {?} pipeTrigger
     * @param {?} summaryPipeTrigger
     * @return {?}
     */
    IgxGridSummaryPipe.prototype.transform = /**
     * @param {?} collection
     * @param {?} hasSummary
     * @param {?} summaryCalculationMode
     * @param {?} summaryPosition
     * @param {?} id
     * @param {?} pipeTrigger
     * @param {?} summaryPipeTrigger
     * @return {?}
     */
    function (collection, hasSummary, summaryCalculationMode, summaryPosition, id, pipeTrigger, summaryPipeTrigger) {
        if (!collection.data || !hasSummary || summaryCalculationMode === GridSummaryCalculationMode.rootLevelOnly) {
            return collection.data;
        }
        return this.addSummaryRows(id, collection, summaryPosition);
    };
    /**
     * @private
     * @param {?} gridId
     * @param {?} collection
     * @param {?} summaryPosition
     * @return {?}
     */
    IgxGridSummaryPipe.prototype.addSummaryRows = /**
     * @private
     * @param {?} gridId
     * @param {?} collection
     * @param {?} summaryPosition
     * @return {?}
     */
    function (gridId, collection, summaryPosition) {
        var _a;
        /** @type {?} */
        var recordsWithSummary = [];
        /** @type {?} */
        var lastChildMap = new Map();
        /** @type {?} */
        var grid = this.gridAPI.grid;
        /** @type {?} */
        var maxSummaryHeight = grid.summaryService.calcMaxSummaryHeight();
        if (collection.metadata.length && !grid.isGroupByRecord(collection.data[0]) &&
            grid.isGroupByRecord(collection.metadata[0]) && summaryPosition === GridSummaryPosition.bottom) {
            /** @type {?} */
            var groups = [];
            groups.push(collection.metadata[0]);
            while (groups[groups.length - 1].groupParent) {
                groups.push(groups[groups.length - 1].groupParent);
            }
            groups.reverse();
            groups.forEach(function (g) { return g.skip = true; });
            (_a = collection.data).splice.apply(_a, tslib_1.__spread([0, 0], groups));
        }
        for (var i = 0; i < collection.data.length; i++) {
            /** @type {?} */
            var record = collection.data[i];
            /** @type {?} */
            var skipAdd = false;
            /** @type {?} */
            var recordId = void 0;
            /** @type {?} */
            var groupByRecord = null;
            if (grid.isGroupByRecord(record)) {
                skipAdd = !!record.skip;
                record.skip = null;
                groupByRecord = (/** @type {?} */ (record));
                recordId = this.gridAPI.get_groupBy_record_id(groupByRecord);
            }
            else {
                recordId = this.gridAPI.get_row_id(record);
            }
            if (!skipAdd) {
                recordsWithSummary.push(record);
            }
            if (summaryPosition === GridSummaryPosition.bottom && lastChildMap.has(recordId)) {
                /** @type {?} */
                var groupRecords = lastChildMap.get(recordId);
                for (var j = 0; j < groupRecords.length; j++) {
                    /** @type {?} */
                    var groupRecord = groupRecords[j];
                    /** @type {?} */
                    var groupRecordId = this.gridAPI.get_groupBy_record_id(groupRecord);
                    /** @type {?} */
                    var records = this.removeDeletedRecord(grid, groupRecord.records.slice());
                    /** @type {?} */
                    var summaries = grid.summaryService.calculateSummaries(groupRecordId, records);
                    /** @type {?} */
                    var summaryRecord = {
                        summaries: summaries,
                        max: maxSummaryHeight
                    };
                    recordsWithSummary.push(summaryRecord);
                }
            }
            if (groupByRecord === null || !grid.isExpandedGroup(groupByRecord)) {
                continue;
            }
            if (summaryPosition === GridSummaryPosition.top) {
                /** @type {?} */
                var records = this.removeDeletedRecord(grid, groupByRecord.records.slice());
                /** @type {?} */
                var summaries = grid.summaryService.calculateSummaries(recordId, records);
                /** @type {?} */
                var summaryRecord = {
                    summaries: summaries,
                    max: maxSummaryHeight
                };
                recordsWithSummary.push(summaryRecord);
            }
            else if (summaryPosition === GridSummaryPosition.bottom) {
                /** @type {?} */
                var lastChild = groupByRecord;
                while (lastChild.groups && lastChild.groups.length > 0 && grid.isExpandedGroup(lastChild)) {
                    lastChild = lastChild.groups[lastChild.groups.length - 1];
                }
                /** @type {?} */
                var lastChildId = void 0;
                if (grid.isExpandedGroup(lastChild)) {
                    lastChildId = this.gridAPI.get_row_id(lastChild.records[lastChild.records.length - 1]);
                }
                else {
                    lastChildId = this.gridAPI.get_groupBy_record_id(lastChild);
                }
                /** @type {?} */
                var groupRecords = lastChildMap.get(lastChildId);
                if (!groupRecords) {
                    groupRecords = [];
                    lastChildMap.set(lastChildId, groupRecords);
                }
                groupRecords.unshift(groupByRecord);
            }
        }
        return recordsWithSummary;
    };
    /**
     * @private
     * @param {?} grid
     * @param {?} data
     * @return {?}
     */
    IgxGridSummaryPipe.prototype.removeDeletedRecord = /**
     * @private
     * @param {?} grid
     * @param {?} data
     * @return {?}
     */
    function (grid, data) {
        if (!grid.transactions.enabled) {
            return data;
        }
        /** @type {?} */
        var deletedRows = grid.transactions.getTransactionLog().filter(function (t) { return t.type === 'delete'; }).map(function (t) { return t.id; });
        deletedRows.forEach(function (rowID) {
            /** @type {?} */
            var tempData = grid.primaryKey ? data.map(function (rec) { return rec[grid.primaryKey]; }) : data;
            /** @type {?} */
            var index = tempData.indexOf(rowID);
            if (index !== -1) {
                data.splice(index, 1);
            }
        });
        return data;
    };
    IgxGridSummaryPipe.decorators = [
        { type: Pipe, args: [{
                    name: 'gridSummary',
                    pure: true
                },] }
    ];
    /** @nocollapse */
    IgxGridSummaryPipe.ctorParameters = function () { return [
        { type: GridBaseAPIService }
    ]; };
    return IgxGridSummaryPipe;
}());
export { IgxGridSummaryPipe };
if (false) {
    /**
     * @type {?}
     * @private
     */
    IgxGridSummaryPipe.prototype.gridAPI;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC5zdW1tYXJ5LnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9pZ25pdGV1aS1hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL2dyaWRzL2dyaWQvZ3JpZC5zdW1tYXJ5LnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUVwRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNwRCxPQUFPLEVBQXdCLG1CQUFtQixFQUFFLDBCQUEwQixFQUFxQixNQUFNLHdCQUF3QixDQUFDOzs7OztBQU9sSSwwQkFFQzs7O0lBREcsMkJBQWU7Ozs7O0FBSW5CO0lBT0ksNEJBQVksT0FBcUU7UUFDN0UsSUFBSSxDQUFDLE9BQU8sR0FBRyxtQkFBbUIsT0FBTyxFQUFBLENBQUM7SUFDOUMsQ0FBQzs7Ozs7Ozs7Ozs7SUFFTSxzQ0FBUzs7Ozs7Ozs7OztJQUFoQixVQUFpQixVQUEwQixFQUN2QyxVQUFtQixFQUNuQixzQkFBa0QsRUFDbEQsZUFBb0MsRUFDcEMsRUFBVSxFQUFFLFdBQW1CLEVBQUUsa0JBQTBCO1FBRTNELElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxJQUFJLENBQUMsVUFBVSxJQUFJLHNCQUFzQixLQUFLLDBCQUEwQixDQUFDLGFBQWEsRUFBRTtZQUN4RyxPQUFPLFVBQVUsQ0FBQyxJQUFJLENBQUM7U0FDMUI7UUFFRCxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsRUFBRSxFQUFFLFVBQVUsRUFBRSxlQUFlLENBQUMsQ0FBQztJQUNoRSxDQUFDOzs7Ozs7OztJQUVPLDJDQUFjOzs7Ozs7O0lBQXRCLFVBQXVCLE1BQWMsRUFBRSxVQUEwQixFQUFFLGVBQW9DOzs7WUFDN0Ysa0JBQWtCLEdBQUcsRUFBRTs7WUFDdkIsWUFBWSxHQUFHLElBQUksR0FBRyxFQUF5Qjs7WUFDL0MsSUFBSSxHQUFxQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUk7O1lBQzFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsb0JBQW9CLEVBQUU7UUFFbkUsSUFBSSxVQUFVLENBQUMsUUFBUSxDQUFDLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN2RSxJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxlQUFlLEtBQUssbUJBQW1CLENBQUMsTUFBTSxFQUFFOztnQkFDMUYsTUFBTSxHQUF3QyxFQUFFO1lBQ3RELE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3BDLE9BQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFO2dCQUMxQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDO2FBQ3REO1lBQ0QsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2pCLE1BQU0sQ0FBQyxPQUFPLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsSUFBSSxHQUFHLElBQUksRUFBYixDQUFhLENBQUMsQ0FBQztZQUNuQyxDQUFBLEtBQUEsVUFBVSxDQUFDLElBQUksQ0FBQSxDQUFDLE1BQU0sNkJBQUMsQ0FBQyxFQUFFLENBQUMsR0FBSyxNQUFNLEdBQUU7U0FDM0M7UUFDRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7O2dCQUN2QyxNQUFNLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7O2dCQUM3QixPQUFPLEdBQUcsS0FBSzs7Z0JBQ2YsUUFBUSxTQUFBOztnQkFDUixhQUFhLEdBQW1CLElBQUk7WUFDeEMsSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxFQUFFO2dCQUM5QixPQUFPLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7Z0JBQ3hCLE1BQU0sQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO2dCQUNuQixhQUFhLEdBQUcsbUJBQUEsTUFBTSxFQUFrQixDQUFDO2dCQUN6QyxRQUFRLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxhQUFhLENBQUMsQ0FBQzthQUNoRTtpQkFBTTtnQkFDSCxRQUFRLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDOUM7WUFDRCxJQUFJLENBQUMsT0FBTyxFQUFFO2dCQUNWLGtCQUFrQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUNuQztZQUVELElBQUksZUFBZSxLQUFLLG1CQUFtQixDQUFDLE1BQU0sSUFBSSxZQUFZLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxFQUFFOztvQkFDeEUsWUFBWSxHQUFHLFlBQVksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDO2dCQUUvQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsWUFBWSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTs7d0JBQ3BDLFdBQVcsR0FBRyxZQUFZLENBQUMsQ0FBQyxDQUFDOzt3QkFDN0IsYUFBYSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMscUJBQXFCLENBQUMsV0FBVyxDQUFDOzt3QkFDL0QsT0FBTyxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLEVBQUUsV0FBVyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQzs7d0JBQ3JFLFNBQVMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLGtCQUFrQixDQUFDLGFBQWEsRUFBRSxPQUFPLENBQUM7O3dCQUMxRSxhQUFhLEdBQW1CO3dCQUNsQyxTQUFTLEVBQUUsU0FBUzt3QkFDcEIsR0FBRyxFQUFFLGdCQUFnQjtxQkFDeEI7b0JBQ0Qsa0JBQWtCLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO2lCQUMxQzthQUNKO1lBRUQsSUFBSSxhQUFhLEtBQUssSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsRUFBRTtnQkFDaEUsU0FBUzthQUNaO1lBRUQsSUFBSSxlQUFlLEtBQUssbUJBQW1CLENBQUMsR0FBRyxFQUFFOztvQkFDdkMsT0FBTyxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLEVBQUUsYUFBYSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQzs7b0JBQ3ZFLFNBQVMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLGtCQUFrQixDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUM7O29CQUNyRSxhQUFhLEdBQW1CO29CQUNsQyxTQUFTLEVBQUUsU0FBUztvQkFDcEIsR0FBRyxFQUFFLGdCQUFnQjtpQkFDeEI7Z0JBQ0Qsa0JBQWtCLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO2FBQzFDO2lCQUFNLElBQUksZUFBZSxLQUFLLG1CQUFtQixDQUFDLE1BQU0sRUFBRTs7b0JBQ25ELFNBQVMsR0FBRyxhQUFhO2dCQUU3QixPQUFPLFNBQVMsQ0FBQyxNQUFNLElBQUksU0FBUyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLEVBQUU7b0JBQ3ZGLFNBQVMsR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO2lCQUM3RDs7b0JBRUcsV0FBVyxTQUFBO2dCQUNmLElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsRUFBRTtvQkFDakMsV0FBVyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDMUY7cUJBQU07b0JBQ0gsV0FBVyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMscUJBQXFCLENBQUMsU0FBUyxDQUFDLENBQUM7aUJBQy9EOztvQkFFRyxZQUFZLEdBQUcsWUFBWSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUM7Z0JBQ2hELElBQUksQ0FBQyxZQUFZLEVBQUU7b0JBQ2YsWUFBWSxHQUFHLEVBQUUsQ0FBQztvQkFDbEIsWUFBWSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsWUFBWSxDQUFDLENBQUM7aUJBQy9DO2dCQUNELFlBQVksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7YUFDdkM7U0FDSjtRQUVELE9BQU8sa0JBQWtCLENBQUM7SUFDOUIsQ0FBQzs7Ozs7OztJQUVPLGdEQUFtQjs7Ozs7O0lBQTNCLFVBQTRCLElBQUksRUFBRSxJQUFJO1FBQ2xDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRTtZQUM1QixPQUFPLElBQUksQ0FBQztTQUNmOztZQUNLLFdBQVcsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLGlCQUFpQixFQUFFLENBQUMsTUFBTSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLElBQUksS0FBSyxRQUFRLEVBQW5CLENBQW1CLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsRUFBRSxFQUFKLENBQUksQ0FBQztRQUN6RyxXQUFXLENBQUMsT0FBTyxDQUFDLFVBQUEsS0FBSzs7Z0JBQ2YsUUFBUSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFwQixDQUFvQixDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUk7O2dCQUN6RSxLQUFLLEdBQUcsUUFBUSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7WUFDckMsSUFBSSxLQUFLLEtBQUssQ0FBQyxDQUFDLEVBQUU7Z0JBQ2QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7YUFDekI7UUFDTCxDQUFDLENBQUMsQ0FBQztRQUNILE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7O2dCQTdISixJQUFJLFNBQUM7b0JBQ0YsSUFBSSxFQUFFLGFBQWE7b0JBQ25CLElBQUksRUFBRSxJQUFJO2lCQUNiOzs7O2dCQWhCUSxrQkFBa0I7O0lBMkkzQix5QkFBQztDQUFBLEFBOUhELElBOEhDO1NBMUhZLGtCQUFrQjs7Ozs7O0lBQzNCLHFDQUFtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElneEdyaWRBUElTZXJ2aWNlIH0gZnJvbSAnLi9ncmlkLWFwaS5zZXJ2aWNlJztcbmltcG9ydCB7IEdyaWRCYXNlQVBJU2VydmljZSB9IGZyb20gJy4uL2FwaS5zZXJ2aWNlJztcbmltcG9ydCB7IElneEdyaWRCYXNlQ29tcG9uZW50LCBHcmlkU3VtbWFyeVBvc2l0aW9uLCBHcmlkU3VtbWFyeUNhbGN1bGF0aW9uTW9kZSwgSUdyaWREYXRhQmluZGFibGUgfSBmcm9tICcuLi9ncmlkLWJhc2UuY29tcG9uZW50JztcbmltcG9ydCB7IElneEdyaWRDb21wb25lbnQgfSBmcm9tICcuL2dyaWQuY29tcG9uZW50JztcbmltcG9ydCB7IElTdW1tYXJ5UmVjb3JkIH0gZnJvbSAnLi4vc3VtbWFyaWVzL2dyaWQtc3VtbWFyeSc7XG5pbXBvcnQgeyBJR3JvdXBCeVJlY29yZCB9IGZyb20gJy4uLy4uL2RhdGEtb3BlcmF0aW9ucy9ncm91cGJ5LXJlY29yZC5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgSUdyb3VwQnlSZXN1bHQgfSBmcm9tICcuLi8uLi9kYXRhLW9wZXJhdGlvbnMvZ3JvdXBpbmctcmVzdWx0LmludGVyZmFjZSc7XG5cbi8qKiBAaGlkZGVuICovXG5pbnRlcmZhY2UgSVNraXBSZWNvcmQge1xuICAgIHNraXA/OiBib29sZWFuO1xufVxuXG4vKiogQGhpZGRlbiAqL1xuQFBpcGUoe1xuICAgIG5hbWU6ICdncmlkU3VtbWFyeScsXG4gICAgcHVyZTogdHJ1ZVxufSlcbmV4cG9ydCBjbGFzcyBJZ3hHcmlkU3VtbWFyeVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgICBwcml2YXRlIGdyaWRBUEk6IElneEdyaWRBUElTZXJ2aWNlO1xuXG4gICAgY29uc3RydWN0b3IoZ3JpZEFQSTogR3JpZEJhc2VBUElTZXJ2aWNlPElneEdyaWRCYXNlQ29tcG9uZW50ICYgSUdyaWREYXRhQmluZGFibGU+KSB7XG4gICAgICAgIHRoaXMuZ3JpZEFQSSA9IDxJZ3hHcmlkQVBJU2VydmljZT5ncmlkQVBJO1xuICAgIH1cblxuICAgIHB1YmxpYyB0cmFuc2Zvcm0oY29sbGVjdGlvbjogSUdyb3VwQnlSZXN1bHQsXG4gICAgICAgIGhhc1N1bW1hcnk6IGJvb2xlYW4sXG4gICAgICAgIHN1bW1hcnlDYWxjdWxhdGlvbk1vZGU6IEdyaWRTdW1tYXJ5Q2FsY3VsYXRpb25Nb2RlLFxuICAgICAgICBzdW1tYXJ5UG9zaXRpb246IEdyaWRTdW1tYXJ5UG9zaXRpb24sXG4gICAgICAgIGlkOiBzdHJpbmcsIHBpcGVUcmlnZ2VyOiBudW1iZXIsIHN1bW1hcnlQaXBlVHJpZ2dlcjogbnVtYmVyKTogYW55W10ge1xuXG4gICAgICAgIGlmICghY29sbGVjdGlvbi5kYXRhIHx8ICFoYXNTdW1tYXJ5IHx8IHN1bW1hcnlDYWxjdWxhdGlvbk1vZGUgPT09IEdyaWRTdW1tYXJ5Q2FsY3VsYXRpb25Nb2RlLnJvb3RMZXZlbE9ubHkpIHtcbiAgICAgICAgICAgIHJldHVybiBjb2xsZWN0aW9uLmRhdGE7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5hZGRTdW1tYXJ5Um93cyhpZCwgY29sbGVjdGlvbiwgc3VtbWFyeVBvc2l0aW9uKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFkZFN1bW1hcnlSb3dzKGdyaWRJZDogc3RyaW5nLCBjb2xsZWN0aW9uOiBJR3JvdXBCeVJlc3VsdCwgc3VtbWFyeVBvc2l0aW9uOiBHcmlkU3VtbWFyeVBvc2l0aW9uKTogYW55W10ge1xuICAgICAgICBjb25zdCByZWNvcmRzV2l0aFN1bW1hcnkgPSBbXTtcbiAgICAgICAgY29uc3QgbGFzdENoaWxkTWFwID0gbmV3IE1hcDxhbnksIElHcm91cEJ5UmVjb3JkW10+KCk7XG4gICAgICAgIGNvbnN0IGdyaWQ6IElneEdyaWRDb21wb25lbnQgPSB0aGlzLmdyaWRBUEkuZ3JpZDtcbiAgICAgICAgY29uc3QgbWF4U3VtbWFyeUhlaWdodCA9IGdyaWQuc3VtbWFyeVNlcnZpY2UuY2FsY01heFN1bW1hcnlIZWlnaHQoKTtcblxuICAgICAgICBpZiAoY29sbGVjdGlvbi5tZXRhZGF0YS5sZW5ndGggJiYgIWdyaWQuaXNHcm91cEJ5UmVjb3JkKGNvbGxlY3Rpb24uZGF0YVswXSkgJiZcbiAgICAgICAgICAgIGdyaWQuaXNHcm91cEJ5UmVjb3JkKGNvbGxlY3Rpb24ubWV0YWRhdGFbMF0pICYmIHN1bW1hcnlQb3NpdGlvbiA9PT0gR3JpZFN1bW1hcnlQb3NpdGlvbi5ib3R0b20pIHtcbiAgICAgICAgICAgIGNvbnN0IGdyb3VwczogQXJyYXk8SUdyb3VwQnlSZWNvcmQgJiBJU2tpcFJlY29yZD4gPSBbXTtcbiAgICAgICAgICAgIGdyb3Vwcy5wdXNoKGNvbGxlY3Rpb24ubWV0YWRhdGFbMF0pO1xuICAgICAgICAgICAgd2hpbGUgKGdyb3Vwc1tncm91cHMubGVuZ3RoIC0gMV0uZ3JvdXBQYXJlbnQpIHtcbiAgICAgICAgICAgICAgICBncm91cHMucHVzaChncm91cHNbZ3JvdXBzLmxlbmd0aCAtIDFdLmdyb3VwUGFyZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGdyb3Vwcy5yZXZlcnNlKCk7XG4gICAgICAgICAgICBncm91cHMuZm9yRWFjaChnID0+IGcuc2tpcCA9IHRydWUpO1xuICAgICAgICAgICAgY29sbGVjdGlvbi5kYXRhLnNwbGljZSgwLCAwLCAuLi5ncm91cHMpO1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29sbGVjdGlvbi5kYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCByZWNvcmQgPSBjb2xsZWN0aW9uLmRhdGFbaV07XG4gICAgICAgICAgICBsZXQgc2tpcEFkZCA9IGZhbHNlO1xuICAgICAgICAgICAgbGV0IHJlY29yZElkO1xuICAgICAgICAgICAgbGV0IGdyb3VwQnlSZWNvcmQ6IElHcm91cEJ5UmVjb3JkID0gbnVsbDtcbiAgICAgICAgICAgIGlmIChncmlkLmlzR3JvdXBCeVJlY29yZChyZWNvcmQpKSB7XG4gICAgICAgICAgICAgICAgc2tpcEFkZCA9ICEhcmVjb3JkLnNraXA7XG4gICAgICAgICAgICAgICAgcmVjb3JkLnNraXAgPSBudWxsO1xuICAgICAgICAgICAgICAgIGdyb3VwQnlSZWNvcmQgPSByZWNvcmQgYXMgSUdyb3VwQnlSZWNvcmQ7XG4gICAgICAgICAgICAgICAgcmVjb3JkSWQgPSB0aGlzLmdyaWRBUEkuZ2V0X2dyb3VwQnlfcmVjb3JkX2lkKGdyb3VwQnlSZWNvcmQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZWNvcmRJZCA9IHRoaXMuZ3JpZEFQSS5nZXRfcm93X2lkKHJlY29yZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXNraXBBZGQpIHtcbiAgICAgICAgICAgICAgICByZWNvcmRzV2l0aFN1bW1hcnkucHVzaChyZWNvcmQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoc3VtbWFyeVBvc2l0aW9uID09PSBHcmlkU3VtbWFyeVBvc2l0aW9uLmJvdHRvbSAmJiBsYXN0Q2hpbGRNYXAuaGFzKHJlY29yZElkKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGdyb3VwUmVjb3JkcyA9IGxhc3RDaGlsZE1hcC5nZXQocmVjb3JkSWQpO1xuXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBncm91cFJlY29yZHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZ3JvdXBSZWNvcmQgPSBncm91cFJlY29yZHNbal07XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGdyb3VwUmVjb3JkSWQgPSB0aGlzLmdyaWRBUEkuZ2V0X2dyb3VwQnlfcmVjb3JkX2lkKGdyb3VwUmVjb3JkKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVjb3JkcyA9IHRoaXMucmVtb3ZlRGVsZXRlZFJlY29yZChncmlkLCBncm91cFJlY29yZC5yZWNvcmRzLnNsaWNlKCkpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzdW1tYXJpZXMgPSBncmlkLnN1bW1hcnlTZXJ2aWNlLmNhbGN1bGF0ZVN1bW1hcmllcyhncm91cFJlY29yZElkLCByZWNvcmRzKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3VtbWFyeVJlY29yZDogSVN1bW1hcnlSZWNvcmQgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdW1tYXJpZXM6IHN1bW1hcmllcyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heDogbWF4U3VtbWFyeUhlaWdodFxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICByZWNvcmRzV2l0aFN1bW1hcnkucHVzaChzdW1tYXJ5UmVjb3JkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChncm91cEJ5UmVjb3JkID09PSBudWxsIHx8ICFncmlkLmlzRXhwYW5kZWRHcm91cChncm91cEJ5UmVjb3JkKSkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoc3VtbWFyeVBvc2l0aW9uID09PSBHcmlkU3VtbWFyeVBvc2l0aW9uLnRvcCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlY29yZHMgPSB0aGlzLnJlbW92ZURlbGV0ZWRSZWNvcmQoZ3JpZCwgZ3JvdXBCeVJlY29yZC5yZWNvcmRzLnNsaWNlKCkpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHN1bW1hcmllcyA9IGdyaWQuc3VtbWFyeVNlcnZpY2UuY2FsY3VsYXRlU3VtbWFyaWVzKHJlY29yZElkLCByZWNvcmRzKTtcbiAgICAgICAgICAgICAgICBjb25zdCBzdW1tYXJ5UmVjb3JkOiBJU3VtbWFyeVJlY29yZCA9IHtcbiAgICAgICAgICAgICAgICAgICAgc3VtbWFyaWVzOiBzdW1tYXJpZXMsXG4gICAgICAgICAgICAgICAgICAgIG1heDogbWF4U3VtbWFyeUhlaWdodFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgcmVjb3Jkc1dpdGhTdW1tYXJ5LnB1c2goc3VtbWFyeVJlY29yZCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHN1bW1hcnlQb3NpdGlvbiA9PT0gR3JpZFN1bW1hcnlQb3NpdGlvbi5ib3R0b20pIHtcbiAgICAgICAgICAgICAgICBsZXQgbGFzdENoaWxkID0gZ3JvdXBCeVJlY29yZDtcblxuICAgICAgICAgICAgICAgIHdoaWxlIChsYXN0Q2hpbGQuZ3JvdXBzICYmIGxhc3RDaGlsZC5ncm91cHMubGVuZ3RoID4gMCAmJiBncmlkLmlzRXhwYW5kZWRHcm91cChsYXN0Q2hpbGQpKSB7XG4gICAgICAgICAgICAgICAgICAgIGxhc3RDaGlsZCA9IGxhc3RDaGlsZC5ncm91cHNbbGFzdENoaWxkLmdyb3Vwcy5sZW5ndGggLSAxXTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBsZXQgbGFzdENoaWxkSWQ7XG4gICAgICAgICAgICAgICAgaWYgKGdyaWQuaXNFeHBhbmRlZEdyb3VwKGxhc3RDaGlsZCkpIHtcbiAgICAgICAgICAgICAgICAgICAgbGFzdENoaWxkSWQgPSB0aGlzLmdyaWRBUEkuZ2V0X3Jvd19pZChsYXN0Q2hpbGQucmVjb3Jkc1tsYXN0Q2hpbGQucmVjb3Jkcy5sZW5ndGggLSAxXSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbGFzdENoaWxkSWQgPSB0aGlzLmdyaWRBUEkuZ2V0X2dyb3VwQnlfcmVjb3JkX2lkKGxhc3RDaGlsZCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgbGV0IGdyb3VwUmVjb3JkcyA9IGxhc3RDaGlsZE1hcC5nZXQobGFzdENoaWxkSWQpO1xuICAgICAgICAgICAgICAgIGlmICghZ3JvdXBSZWNvcmRzKSB7XG4gICAgICAgICAgICAgICAgICAgIGdyb3VwUmVjb3JkcyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICBsYXN0Q2hpbGRNYXAuc2V0KGxhc3RDaGlsZElkLCBncm91cFJlY29yZHMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBncm91cFJlY29yZHMudW5zaGlmdChncm91cEJ5UmVjb3JkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZWNvcmRzV2l0aFN1bW1hcnk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSByZW1vdmVEZWxldGVkUmVjb3JkKGdyaWQsIGRhdGEpIHtcbiAgICAgICAgaWYgKCFncmlkLnRyYW5zYWN0aW9ucy5lbmFibGVkKSB7XG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkZWxldGVkUm93cyA9IGdyaWQudHJhbnNhY3Rpb25zLmdldFRyYW5zYWN0aW9uTG9nKCkuZmlsdGVyKHQgPT4gdC50eXBlID09PSAnZGVsZXRlJykubWFwKHQgPT4gdC5pZCk7XG4gICAgICAgIGRlbGV0ZWRSb3dzLmZvckVhY2gocm93SUQgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGVtcERhdGEgPSBncmlkLnByaW1hcnlLZXkgPyBkYXRhLm1hcChyZWMgPT4gcmVjW2dyaWQucHJpbWFyeUtleV0pIDogZGF0YTtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gdGVtcERhdGEuaW5kZXhPZihyb3dJRCk7XG4gICAgICAgICAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgZGF0YS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxufVxuIl19