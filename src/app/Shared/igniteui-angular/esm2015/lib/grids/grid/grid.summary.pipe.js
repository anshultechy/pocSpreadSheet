/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
export class IgxGridSummaryPipe {
    /**
     * @param {?} gridAPI
     */
    constructor(gridAPI) {
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
    transform(collection, hasSummary, summaryCalculationMode, summaryPosition, id, pipeTrigger, summaryPipeTrigger) {
        if (!collection.data || !hasSummary || summaryCalculationMode === GridSummaryCalculationMode.rootLevelOnly) {
            return collection.data;
        }
        return this.addSummaryRows(id, collection, summaryPosition);
    }
    /**
     * @private
     * @param {?} gridId
     * @param {?} collection
     * @param {?} summaryPosition
     * @return {?}
     */
    addSummaryRows(gridId, collection, summaryPosition) {
        /** @type {?} */
        const recordsWithSummary = [];
        /** @type {?} */
        const lastChildMap = new Map();
        /** @type {?} */
        const grid = this.gridAPI.grid;
        /** @type {?} */
        const maxSummaryHeight = grid.summaryService.calcMaxSummaryHeight();
        if (collection.metadata.length && !grid.isGroupByRecord(collection.data[0]) &&
            grid.isGroupByRecord(collection.metadata[0]) && summaryPosition === GridSummaryPosition.bottom) {
            /** @type {?} */
            const groups = [];
            groups.push(collection.metadata[0]);
            while (groups[groups.length - 1].groupParent) {
                groups.push(groups[groups.length - 1].groupParent);
            }
            groups.reverse();
            groups.forEach(g => g.skip = true);
            collection.data.splice(0, 0, ...groups);
        }
        for (let i = 0; i < collection.data.length; i++) {
            /** @type {?} */
            const record = collection.data[i];
            /** @type {?} */
            let skipAdd = false;
            /** @type {?} */
            let recordId;
            /** @type {?} */
            let groupByRecord = null;
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
                const groupRecords = lastChildMap.get(recordId);
                for (let j = 0; j < groupRecords.length; j++) {
                    /** @type {?} */
                    const groupRecord = groupRecords[j];
                    /** @type {?} */
                    const groupRecordId = this.gridAPI.get_groupBy_record_id(groupRecord);
                    /** @type {?} */
                    const records = this.removeDeletedRecord(grid, groupRecord.records.slice());
                    /** @type {?} */
                    const summaries = grid.summaryService.calculateSummaries(groupRecordId, records);
                    /** @type {?} */
                    const summaryRecord = {
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
                const records = this.removeDeletedRecord(grid, groupByRecord.records.slice());
                /** @type {?} */
                const summaries = grid.summaryService.calculateSummaries(recordId, records);
                /** @type {?} */
                const summaryRecord = {
                    summaries: summaries,
                    max: maxSummaryHeight
                };
                recordsWithSummary.push(summaryRecord);
            }
            else if (summaryPosition === GridSummaryPosition.bottom) {
                /** @type {?} */
                let lastChild = groupByRecord;
                while (lastChild.groups && lastChild.groups.length > 0 && grid.isExpandedGroup(lastChild)) {
                    lastChild = lastChild.groups[lastChild.groups.length - 1];
                }
                /** @type {?} */
                let lastChildId;
                if (grid.isExpandedGroup(lastChild)) {
                    lastChildId = this.gridAPI.get_row_id(lastChild.records[lastChild.records.length - 1]);
                }
                else {
                    lastChildId = this.gridAPI.get_groupBy_record_id(lastChild);
                }
                /** @type {?} */
                let groupRecords = lastChildMap.get(lastChildId);
                if (!groupRecords) {
                    groupRecords = [];
                    lastChildMap.set(lastChildId, groupRecords);
                }
                groupRecords.unshift(groupByRecord);
            }
        }
        return recordsWithSummary;
    }
    /**
     * @private
     * @param {?} grid
     * @param {?} data
     * @return {?}
     */
    removeDeletedRecord(grid, data) {
        if (!grid.transactions.enabled) {
            return data;
        }
        /** @type {?} */
        const deletedRows = grid.transactions.getTransactionLog().filter(t => t.type === 'delete').map(t => t.id);
        deletedRows.forEach(rowID => {
            /** @type {?} */
            const tempData = grid.primaryKey ? data.map(rec => rec[grid.primaryKey]) : data;
            /** @type {?} */
            const index = tempData.indexOf(rowID);
            if (index !== -1) {
                data.splice(index, 1);
            }
        });
        return data;
    }
}
IgxGridSummaryPipe.decorators = [
    { type: Pipe, args: [{
                name: 'gridSummary',
                pure: true
            },] }
];
/** @nocollapse */
IgxGridSummaryPipe.ctorParameters = () => [
    { type: GridBaseAPIService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    IgxGridSummaryPipe.prototype.gridAPI;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC5zdW1tYXJ5LnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9pZ25pdGV1aS1hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL2dyaWRzL2dyaWQvZ3JpZC5zdW1tYXJ5LnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBRXBELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3BELE9BQU8sRUFBd0IsbUJBQW1CLEVBQUUsMEJBQTBCLEVBQXFCLE1BQU0sd0JBQXdCLENBQUM7Ozs7O0FBT2xJLDBCQUVDOzs7SUFERywyQkFBZTs7Ozs7QUFRbkIsTUFBTSxPQUFPLGtCQUFrQjs7OztJQUczQixZQUFZLE9BQXFFO1FBQzdFLElBQUksQ0FBQyxPQUFPLEdBQUcsbUJBQW1CLE9BQU8sRUFBQSxDQUFDO0lBQzlDLENBQUM7Ozs7Ozs7Ozs7O0lBRU0sU0FBUyxDQUFDLFVBQTBCLEVBQ3ZDLFVBQW1CLEVBQ25CLHNCQUFrRCxFQUNsRCxlQUFvQyxFQUNwQyxFQUFVLEVBQUUsV0FBbUIsRUFBRSxrQkFBMEI7UUFFM0QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLElBQUksQ0FBQyxVQUFVLElBQUksc0JBQXNCLEtBQUssMEJBQTBCLENBQUMsYUFBYSxFQUFFO1lBQ3hHLE9BQU8sVUFBVSxDQUFDLElBQUksQ0FBQztTQUMxQjtRQUVELE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLEVBQUUsVUFBVSxFQUFFLGVBQWUsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7Ozs7Ozs7O0lBRU8sY0FBYyxDQUFDLE1BQWMsRUFBRSxVQUEwQixFQUFFLGVBQW9DOztjQUM3RixrQkFBa0IsR0FBRyxFQUFFOztjQUN2QixZQUFZLEdBQUcsSUFBSSxHQUFHLEVBQXlCOztjQUMvQyxJQUFJLEdBQXFCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSTs7Y0FDMUMsZ0JBQWdC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QUFDLENBQUMsQ0FBQzthQUN6QjtRQUNMLENBQUMsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQzs7O1lBN0hKLElBQUksU0FBQztnQkFDRixJQUFJLEVBQUUsYUFBYTtnQkFDbkIsSUFBSSxFQUFFLElBQUk7YUFDYjs7OztZQWhCUSxrQkFBa0I7Ozs7Ozs7SUFrQnZCLHFDQUFtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElneEdyaWRBUElTZXJ2aWNlIH0gZnJvbSAnLi9ncmlkLWFwaS5zZXJ2aWNlJztcbmltcG9ydCB7IEdyaWRCYXNlQVBJU2VydmljZSB9IGZyb20gJy4uL2FwaS5zZXJ2aWNlJztcbmltcG9ydCB7IElneEdyaWRCYXNlQ29tcG9uZW50LCBHcmlkU3VtbWFyeVBvc2l0aW9uLCBHcmlkU3VtbWFyeUNhbGN1bGF0aW9uTW9kZSwgSUdyaWREYXRhQmluZGFibGUgfSBmcm9tICcuLi9ncmlkLWJhc2UuY29tcG9uZW50JztcbmltcG9ydCB7IElneEdyaWRDb21wb25lbnQgfSBmcm9tICcuL2dyaWQuY29tcG9uZW50JztcbmltcG9ydCB7IElTdW1tYXJ5UmVjb3JkIH0gZnJvbSAnLi4vc3VtbWFyaWVzL2dyaWQtc3VtbWFyeSc7XG5pbXBvcnQgeyBJR3JvdXBCeVJlY29yZCB9IGZyb20gJy4uLy4uL2RhdGEtb3BlcmF0aW9ucy9ncm91cGJ5LXJlY29yZC5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgSUdyb3VwQnlSZXN1bHQgfSBmcm9tICcuLi8uLi9kYXRhLW9wZXJhdGlvbnMvZ3JvdXBpbmctcmVzdWx0LmludGVyZmFjZSc7XG5cbi8qKiBAaGlkZGVuICovXG5pbnRlcmZhY2UgSVNraXBSZWNvcmQge1xuICAgIHNraXA/OiBib29sZWFuO1xufVxuXG4vKiogQGhpZGRlbiAqL1xuQFBpcGUoe1xuICAgIG5hbWU6ICdncmlkU3VtbWFyeScsXG4gICAgcHVyZTogdHJ1ZVxufSlcbmV4cG9ydCBjbGFzcyBJZ3hHcmlkU3VtbWFyeVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgICBwcml2YXRlIGdyaWRBUEk6IElneEdyaWRBUElTZXJ2aWNlO1xuXG4gICAgY29uc3RydWN0b3IoZ3JpZEFQSTogR3JpZEJhc2VBUElTZXJ2aWNlPElneEdyaWRCYXNlQ29tcG9uZW50ICYgSUdyaWREYXRhQmluZGFibGU+KSB7XG4gICAgICAgIHRoaXMuZ3JpZEFQSSA9IDxJZ3hHcmlkQVBJU2VydmljZT5ncmlkQVBJO1xuICAgIH1cblxuICAgIHB1YmxpYyB0cmFuc2Zvcm0oY29sbGVjdGlvbjogSUdyb3VwQnlSZXN1bHQsXG4gICAgICAgIGhhc1N1bW1hcnk6IGJvb2xlYW4sXG4gICAgICAgIHN1bW1hcnlDYWxjdWxhdGlvbk1vZGU6IEdyaWRTdW1tYXJ5Q2FsY3VsYXRpb25Nb2RlLFxuICAgICAgICBzdW1tYXJ5UG9zaXRpb246IEdyaWRTdW1tYXJ5UG9zaXRpb24sXG4gICAgICAgIGlkOiBzdHJpbmcsIHBpcGVUcmlnZ2VyOiBudW1iZXIsIHN1bW1hcnlQaXBlVHJpZ2dlcjogbnVtYmVyKTogYW55W10ge1xuXG4gICAgICAgIGlmICghY29sbGVjdGlvbi5kYXRhIHx8ICFoYXNTdW1tYXJ5IHx8IHN1bW1hcnlDYWxjdWxhdGlvbk1vZGUgPT09IEdyaWRTdW1tYXJ5Q2FsY3VsYXRpb25Nb2RlLnJvb3RMZXZlbE9ubHkpIHtcbiAgICAgICAgICAgIHJldHVybiBjb2xsZWN0aW9uLmRhdGE7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5hZGRTdW1tYXJ5Um93cyhpZCwgY29sbGVjdGlvbiwgc3VtbWFyeVBvc2l0aW9uKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFkZFN1bW1hcnlSb3dzKGdyaWRJZDogc3RyaW5nLCBjb2xsZWN0aW9uOiBJR3JvdXBCeVJlc3VsdCwgc3VtbWFyeVBvc2l0aW9uOiBHcmlkU3VtbWFyeVBvc2l0aW9uKTogYW55W10ge1xuICAgICAgICBjb25zdCByZWNvcmRzV2l0aFN1bW1hcnkgPSBbXTtcbiAgICAgICAgY29uc3QgbGFzdENoaWxkTWFwID0gbmV3IE1hcDxhbnksIElHcm91cEJ5UmVjb3JkW10+KCk7XG4gICAgICAgIGNvbnN0IGdyaWQ6IElneEdyaWRDb21wb25lbnQgPSB0aGlzLmdyaWRBUEkuZ3JpZDtcbiAgICAgICAgY29uc3QgbWF4U3VtbWFyeUhlaWdodCA9IGdyaWQuc3VtbWFyeVNlcnZpY2UuY2FsY01heFN1bW1hcnlIZWlnaHQoKTtcblxuICAgICAgICBpZiAoY29sbGVjdGlvbi5tZXRhZGF0YS5sZW5ndGggJiYgIWdyaWQuaXNHcm91cEJ5UmVjb3JkKGNvbGxlY3Rpb24uZGF0YVswXSkgJiZcbiAgICAgICAgICAgIGdyaWQuaXNHcm91cEJ5UmVjb3JkKGNvbGxlY3Rpb24ubWV0YWRhdGFbMF0pICYmIHN1bW1hcnlQb3NpdGlvbiA9PT0gR3JpZFN1bW1hcnlQb3NpdGlvbi5ib3R0b20pIHtcbiAgICAgICAgICAgIGNvbnN0IGdyb3VwczogQXJyYXk8SUdyb3VwQnlSZWNvcmQgJiBJU2tpcFJlY29yZD4gPSBbXTtcbiAgICAgICAgICAgIGdyb3Vwcy5wdXNoKGNvbGxlY3Rpb24ubWV0YWRhdGFbMF0pO1xuICAgICAgICAgICAgd2hpbGUgKGdyb3Vwc1tncm91cHMubGVuZ3RoIC0gMV0uZ3JvdXBQYXJlbnQpIHtcbiAgICAgICAgICAgICAgICBncm91cHMucHVzaChncm91cHNbZ3JvdXBzLmxlbmd0aCAtIDFdLmdyb3VwUGFyZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGdyb3Vwcy5yZXZlcnNlKCk7XG4gICAgICAgICAgICBncm91cHMuZm9yRWFjaChnID0+IGcuc2tpcCA9IHRydWUpO1xuICAgICAgICAgICAgY29sbGVjdGlvbi5kYXRhLnNwbGljZSgwLCAwLCAuLi5ncm91cHMpO1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29sbGVjdGlvbi5kYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCByZWNvcmQgPSBjb2xsZWN0aW9uLmRhdGFbaV07XG4gICAgICAgICAgICBsZXQgc2tpcEFkZCA9IGZhbHNlO1xuICAgICAgICAgICAgbGV0IHJlY29yZElkO1xuICAgICAgICAgICAgbGV0IGdyb3VwQnlSZWNvcmQ6IElHcm91cEJ5UmVjb3JkID0gbnVsbDtcbiAgICAgICAgICAgIGlmIChncmlkLmlzR3JvdXBCeVJlY29yZChyZWNvcmQpKSB7XG4gICAgICAgICAgICAgICAgc2tpcEFkZCA9ICEhcmVjb3JkLnNraXA7XG4gICAgICAgICAgICAgICAgcmVjb3JkLnNraXAgPSBudWxsO1xuICAgICAgICAgICAgICAgIGdyb3VwQnlSZWNvcmQgPSByZWNvcmQgYXMgSUdyb3VwQnlSZWNvcmQ7XG4gICAgICAgICAgICAgICAgcmVjb3JkSWQgPSB0aGlzLmdyaWRBUEkuZ2V0X2dyb3VwQnlfcmVjb3JkX2lkKGdyb3VwQnlSZWNvcmQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZWNvcmRJZCA9IHRoaXMuZ3JpZEFQSS5nZXRfcm93X2lkKHJlY29yZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXNraXBBZGQpIHtcbiAgICAgICAgICAgICAgICByZWNvcmRzV2l0aFN1bW1hcnkucHVzaChyZWNvcmQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoc3VtbWFyeVBvc2l0aW9uID09PSBHcmlkU3VtbWFyeVBvc2l0aW9uLmJvdHRvbSAmJiBsYXN0Q2hpbGRNYXAuaGFzKHJlY29yZElkKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGdyb3VwUmVjb3JkcyA9IGxhc3RDaGlsZE1hcC5nZXQocmVjb3JkSWQpO1xuXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBncm91cFJlY29yZHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZ3JvdXBSZWNvcmQgPSBncm91cFJlY29yZHNbal07XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGdyb3VwUmVjb3JkSWQgPSB0aGlzLmdyaWRBUEkuZ2V0X2dyb3VwQnlfcmVjb3JkX2lkKGdyb3VwUmVjb3JkKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVjb3JkcyA9IHRoaXMucmVtb3ZlRGVsZXRlZFJlY29yZChncmlkLCBncm91cFJlY29yZC5yZWNvcmRzLnNsaWNlKCkpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzdW1tYXJpZXMgPSBncmlkLnN1bW1hcnlTZXJ2aWNlLmNhbGN1bGF0ZVN1bW1hcmllcyhncm91cFJlY29yZElkLCByZWNvcmRzKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3VtbWFyeVJlY29yZDogSVN1bW1hcnlSZWNvcmQgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdW1tYXJpZXM6IHN1bW1hcmllcyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heDogbWF4U3VtbWFyeUhlaWdodFxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICByZWNvcmRzV2l0aFN1bW1hcnkucHVzaChzdW1tYXJ5UmVjb3JkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChncm91cEJ5UmVjb3JkID09PSBudWxsIHx8ICFncmlkLmlzRXhwYW5kZWRHcm91cChncm91cEJ5UmVjb3JkKSkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoc3VtbWFyeVBvc2l0aW9uID09PSBHcmlkU3VtbWFyeVBvc2l0aW9uLnRvcCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlY29yZHMgPSB0aGlzLnJlbW92ZURlbGV0ZWRSZWNvcmQoZ3JpZCwgZ3JvdXBCeVJlY29yZC5yZWNvcmRzLnNsaWNlKCkpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHN1bW1hcmllcyA9IGdyaWQuc3VtbWFyeVNlcnZpY2UuY2FsY3VsYXRlU3VtbWFyaWVzKHJlY29yZElkLCByZWNvcmRzKTtcbiAgICAgICAgICAgICAgICBjb25zdCBzdW1tYXJ5UmVjb3JkOiBJU3VtbWFyeVJlY29yZCA9IHtcbiAgICAgICAgICAgICAgICAgICAgc3VtbWFyaWVzOiBzdW1tYXJpZXMsXG4gICAgICAgICAgICAgICAgICAgIG1heDogbWF4U3VtbWFyeUhlaWdodFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgcmVjb3Jkc1dpdGhTdW1tYXJ5LnB1c2goc3VtbWFyeVJlY29yZCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHN1bW1hcnlQb3NpdGlvbiA9PT0gR3JpZFN1bW1hcnlQb3NpdGlvbi5ib3R0b20pIHtcbiAgICAgICAgICAgICAgICBsZXQgbGFzdENoaWxkID0gZ3JvdXBCeVJlY29yZDtcblxuICAgICAgICAgICAgICAgIHdoaWxlIChsYXN0Q2hpbGQuZ3JvdXBzICYmIGxhc3RDaGlsZC5ncm91cHMubGVuZ3RoID4gMCAmJiBncmlkLmlzRXhwYW5kZWRHcm91cChsYXN0Q2hpbGQpKSB7XG4gICAgICAgICAgICAgICAgICAgIGxhc3RDaGlsZCA9IGxhc3RDaGlsZC5ncm91cHNbbGFzdENoaWxkLmdyb3Vwcy5sZW5ndGggLSAxXTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBsZXQgbGFzdENoaWxkSWQ7XG4gICAgICAgICAgICAgICAgaWYgKGdyaWQuaXNFeHBhbmRlZEdyb3VwKGxhc3RDaGlsZCkpIHtcbiAgICAgICAgICAgICAgICAgICAgbGFzdENoaWxkSWQgPSB0aGlzLmdyaWRBUEkuZ2V0X3Jvd19pZChsYXN0Q2hpbGQucmVjb3Jkc1tsYXN0Q2hpbGQucmVjb3Jkcy5sZW5ndGggLSAxXSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbGFzdENoaWxkSWQgPSB0aGlzLmdyaWRBUEkuZ2V0X2dyb3VwQnlfcmVjb3JkX2lkKGxhc3RDaGlsZCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgbGV0IGdyb3VwUmVjb3JkcyA9IGxhc3RDaGlsZE1hcC5nZXQobGFzdENoaWxkSWQpO1xuICAgICAgICAgICAgICAgIGlmICghZ3JvdXBSZWNvcmRzKSB7XG4gICAgICAgICAgICAgICAgICAgIGdyb3VwUmVjb3JkcyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICBsYXN0Q2hpbGRNYXAuc2V0KGxhc3RDaGlsZElkLCBncm91cFJlY29yZHMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBncm91cFJlY29yZHMudW5zaGlmdChncm91cEJ5UmVjb3JkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZWNvcmRzV2l0aFN1bW1hcnk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSByZW1vdmVEZWxldGVkUmVjb3JkKGdyaWQsIGRhdGEpIHtcbiAgICAgICAgaWYgKCFncmlkLnRyYW5zYWN0aW9ucy5lbmFibGVkKSB7XG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkZWxldGVkUm93cyA9IGdyaWQudHJhbnNhY3Rpb25zLmdldFRyYW5zYWN0aW9uTG9nKCkuZmlsdGVyKHQgPT4gdC50eXBlID09PSAnZGVsZXRlJykubWFwKHQgPT4gdC5pZCk7XG4gICAgICAgIGRlbGV0ZWRSb3dzLmZvckVhY2gocm93SUQgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGVtcERhdGEgPSBncmlkLnByaW1hcnlLZXkgPyBkYXRhLm1hcChyZWMgPT4gcmVjW2dyaWQucHJpbWFyeUtleV0pIDogZGF0YTtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gdGVtcERhdGEuaW5kZXhPZihyb3dJRCk7XG4gICAgICAgICAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgZGF0YS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxufVxuIl19