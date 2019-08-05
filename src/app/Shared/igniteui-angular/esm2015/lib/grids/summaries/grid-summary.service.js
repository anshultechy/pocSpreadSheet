/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { DataUtil } from '../../data-operations/data-util';
import { cloneArray } from '../../core/utils';
/**
 * @hidden
 */
export class IgxGridSummaryService {
    constructor() {
        this.summaryCacheMap = new Map();
        this.rootSummaryID = 'igxGridRootSummary';
        this.summaryHeight = 0;
        this.maxSummariesLenght = 0;
        this.groupingExpressions = [];
        this.retriggerRootPipe = 0;
        this.deleteOperation = false;
    }
    /**
     * @return {?}
     */
    recalculateSummaries() {
        this.resetSummaryHeight();
        this.grid.calculateGridHeight();
        this.grid.cdr.detectChanges();
    }
    /**
     * @param {?=} args
     * @return {?}
     */
    clearSummaryCache(args) {
        if (!this.summaryCacheMap.size) {
            return;
        }
        if (!args) {
            this.summaryCacheMap.clear();
            if (this.grid && this.grid.rootSummariesEnabled) {
                this.retriggerRootPipe++;
            }
            return;
        }
        if (args.data) {
            /** @type {?} */
            const rowID = this.grid.primaryKey ? args.data[this.grid.primaryKey] : args.data;
            this.removeSummaries(rowID);
        }
        if (args.rowID !== undefined && args.rowID !== null) {
            /** @type {?} */
            let columnName = args.cellID ? this.grid.columnList.find(col => col.index === args.cellID.columnID).field : undefined;
            if (columnName && this.grid.rowEditable) {
                return;
            }
            /** @type {?} */
            const isGroupedColumn = this.grid.groupingExpressions &&
                this.grid.groupingExpressions.map(expr => expr.fieldName).indexOf(columnName) !== -1;
            if (columnName && isGroupedColumn) {
                columnName = undefined;
            }
            this.removeSummaries(args.rowID, columnName);
        }
    }
    /**
     * @param {?} rowID
     * @param {?=} columnName
     * @return {?}
     */
    removeSummaries(rowID, columnName) {
        this.deleteSummaryCache(this.rootSummaryID, columnName);
        if (this.summaryCacheMap.size === 1 && this.summaryCacheMap.has(this.rootSummaryID)) {
            return;
        }
        if (this.isTreeGrid) {
            if (this.grid.transactions.enabled && this.deleteOperation) {
                this.deleteOperation = false;
                // TODO: this.removeChildRowSummaries(rowID, columnName);
                this.summaryCacheMap.clear();
                return;
            }
            this.removeAllTreeGridSummaries(rowID, columnName);
        }
        else if (this.isHierarchicalGrid) {
            if (this.grid.transactions.enabled && this.deleteOperation) {
                this.deleteOperation = false;
                this.summaryCacheMap.clear();
            }
        }
        else {
            /** @type {?} */
            const summaryIds = this.getSummaryID(rowID, this.grid.groupingExpressions);
            summaryIds.forEach(id => {
                this.deleteSummaryCache(id, columnName);
            });
        }
    }
    /**
     * @param {?} columnName
     * @return {?}
     */
    removeSummariesCachePerColumn(columnName) {
        this.summaryCacheMap.forEach((cache) => {
            if (cache.get(columnName)) {
                cache.delete(columnName);
            }
        });
        if (this.grid.rootSummariesEnabled) {
            this.retriggerRootPipe++;
        }
    }
    /**
     * @return {?}
     */
    calcMaxSummaryHeight() {
        if (this.summaryHeight) {
            return this.summaryHeight;
        }
        if (!this.grid.data) {
            return this.summaryHeight = 0;
        }
        /** @type {?} */
        let maxSummaryLength = 0;
        this.grid.columnList.filter((col) => col.hasSummary && !col.hidden).forEach((column) => {
            /** @type {?} */
            const getCurrentSummaryColumn = column.summaries.operate([]).length;
            if (getCurrentSummaryColumn) {
                if (maxSummaryLength < getCurrentSummaryColumn) {
                    maxSummaryLength = getCurrentSummaryColumn;
                }
            }
        });
        this.maxSummariesLenght = maxSummaryLength;
        this.summaryHeight = maxSummaryLength * this.grid.defaultSummaryHeight;
        return this.summaryHeight;
    }
    /**
     * @param {?} rowID
     * @param {?} data
     * @return {?}
     */
    calculateSummaries(rowID, data) {
        /** @type {?} */
        let rowSummaries = this.summaryCacheMap.get(rowID);
        if (!rowSummaries) {
            rowSummaries = new Map();
            this.summaryCacheMap.set(rowID, rowSummaries);
        }
        if (!this.hasSummarizedColumns || !data) {
            return rowSummaries;
        }
        this.grid.columnList.filter(col => col.hasSummary).forEach((column) => {
            if (!rowSummaries.get(column.field)) {
                /** @type {?} */
                const columnValues = data.map(record => record[column.field]);
                rowSummaries.set(column.field, column.summaries.operate(columnValues));
            }
        });
        return rowSummaries;
    }
    /**
     * @return {?}
     */
    resetSummaryHeight() {
        this.summaryHeight = 0;
        ((/** @type {?} */ (this.grid)))._summaryPipeTrigger++;
        if (this.grid.rootSummariesEnabled) {
            this.retriggerRootPipe++;
        }
    }
    /**
     * @param {?} groupingArgs
     * @return {?}
     */
    updateSummaryCache(groupingArgs) {
        if (this.summaryCacheMap.size === 0 || !this.hasSummarizedColumns) {
            return;
        }
        if (this.groupingExpressions.length === 0) {
            this.groupingExpressions = groupingArgs.expressions.map(record => record.fieldName);
            return;
        }
        if (groupingArgs.length === 0) {
            this.groupingExpressions = [];
            this.clearSummaryCache();
            return;
        }
        this.compareGroupingExpressions(this.groupingExpressions, groupingArgs);
        this.groupingExpressions = groupingArgs.expressions.map(record => record.fieldName);
    }
    /**
     * @return {?}
     */
    get hasSummarizedColumns() {
        /** @type {?} */
        const summarizedColumns = this.grid.columnList.filter(col => col.hasSummary && !col.hidden);
        return summarizedColumns.length > 0;
    }
    /**
     * @private
     * @param {?} id
     * @param {?} columnName
     * @return {?}
     */
    deleteSummaryCache(id, columnName) {
        if (this.summaryCacheMap.get(id)) {
            /** @type {?} */
            const filteringApplied = columnName && this.grid.filteringExpressionsTree &&
                this.grid.filteringExpressionsTree.filteringOperands.map((expr) => expr.fieldName).indexOf(columnName) !== -1;
            if (columnName && this.summaryCacheMap.get(id).get(columnName) && !filteringApplied) {
                this.summaryCacheMap.get(id).delete(columnName);
            }
            else {
                this.summaryCacheMap.delete(id);
            }
            if (id === this.rootSummaryID && this.grid.rootSummariesEnabled) {
                this.retriggerRootPipe++;
            }
        }
    }
    /**
     * @private
     * @param {?} rowID
     * @param {?} groupingExpressions
     * @return {?}
     */
    getSummaryID(rowID, groupingExpressions) {
        if (groupingExpressions.length === 0) {
            return [];
        }
        /** @type {?} */
        const summaryIDs = [];
        /** @type {?} */
        let data = this.grid.data;
        if (this.grid.transactions.enabled) {
            data = DataUtil.mergeTransactions(cloneArray(this.grid.data), this.grid.transactions.getAggregatedChanges(true), this.grid.primaryKey);
        }
        /** @type {?} */
        const rowData = this.grid.primaryKey ? data.find(rec => rec[this.grid.primaryKey] === rowID) : rowID;
        /** @type {?} */
        let id = '{ ';
        groupingExpressions.forEach(expr => {
            id += `'${expr.fieldName}': '${rowData[expr.fieldName]}'`;
            summaryIDs.push(id.concat(' }'));
            id += ', ';
        });
        return summaryIDs;
    }
    /**
     * @private
     * @param {?} rowID
     * @param {?=} columnName
     * @return {?}
     */
    removeAllTreeGridSummaries(rowID, columnName) {
        /** @type {?} */
        let row = this.grid.records.get(rowID);
        if (!row) {
            return;
        }
        row = row.children ? row : row.parent;
        while (row) {
            rowID = row.rowID;
            this.deleteSummaryCache(rowID, columnName);
            row = row.parent;
        }
    }
    // TODO: remove only deleted rows
    /**
     * @private
     * @param {?} rowID
     * @param {?=} columnName
     * @return {?}
     */
    removeChildRowSummaries(rowID, columnName) {
    }
    /**
     * @private
     * @param {?} current
     * @param {?} groupingArgs
     * @return {?}
     */
    compareGroupingExpressions(current, groupingArgs) {
        /** @type {?} */
        const newExpressions = groupingArgs.expressions.map(record => record.fieldName);
        /** @type {?} */
        const removedCols = groupingArgs.ungroupedColumns;
        if (current.length <= newExpressions.length) {
            /** @type {?} */
            const newExpr = newExpressions.slice(0, current.length).toString();
            if (current.toString() !== newExpr) {
                this.clearSummaryCache();
            }
        }
        else {
            /** @type {?} */
            const currExpr = current.slice(0, newExpressions.length).toString();
            if (currExpr !== newExpressions.toString()) {
                this.clearSummaryCache();
                return;
            }
            removedCols.map(col => col.field).forEach(colName => {
                this.summaryCacheMap.forEach((cache, id) => {
                    if (id.indexOf(colName) !== -1) {
                        this.summaryCacheMap.delete(id);
                    }
                });
            });
        }
    }
    /**
     * @private
     * @return {?}
     */
    get isTreeGrid() {
        return this.grid.nativeElement.tagName.toLowerCase() === 'igx-tree-grid';
    }
    /**
     * @private
     * @return {?}
     */
    get isHierarchicalGrid() {
        return this.grid.nativeElement.tagName.toLowerCase() === 'igx-hierarchical-grid';
    }
}
IgxGridSummaryService.decorators = [
    { type: Injectable }
];
if (false) {
    /**
     * @type {?}
     * @protected
     */
    IgxGridSummaryService.prototype.summaryCacheMap;
    /** @type {?} */
    IgxGridSummaryService.prototype.grid;
    /** @type {?} */
    IgxGridSummaryService.prototype.rootSummaryID;
    /** @type {?} */
    IgxGridSummaryService.prototype.summaryHeight;
    /** @type {?} */
    IgxGridSummaryService.prototype.maxSummariesLenght;
    /** @type {?} */
    IgxGridSummaryService.prototype.groupingExpressions;
    /** @type {?} */
    IgxGridSummaryService.prototype.retriggerRootPipe;
    /** @type {?} */
    IgxGridSummaryService.prototype.deleteOperation;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC1zdW1tYXJ5LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9pZ25pdGV1aS1hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL2dyaWRzL3N1bW1hcmllcy9ncmlkLXN1bW1hcnkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUUxQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDM0QsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGtCQUFrQixDQUFDOzs7O0FBSTlDLE1BQU0sT0FBTyxxQkFBcUI7SUFEbEM7UUFFYyxvQkFBZSxHQUFvQyxJQUFJLEdBQUcsRUFBMkMsQ0FBQztRQUV6RyxrQkFBYSxHQUFHLG9CQUFvQixDQUFDO1FBQ3JDLGtCQUFhLEdBQUcsQ0FBQyxDQUFDO1FBQ2xCLHVCQUFrQixHQUFHLENBQUMsQ0FBQztRQUN2Qix3QkFBbUIsR0FBRyxFQUFFLENBQUM7UUFDekIsc0JBQWlCLEdBQUcsQ0FBQyxDQUFDO1FBQ3RCLG9CQUFlLEdBQUcsS0FBSyxDQUFDO0lBcU5uQyxDQUFDOzs7O0lBbk5VLG9CQUFvQjtRQUN2QixJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUMxQixJQUFJLENBQUMsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7UUFDaEMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDbEMsQ0FBQzs7Ozs7SUFFTSxpQkFBaUIsQ0FBQyxJQUFLO1FBQzFCLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksRUFBRTtZQUFFLE9BQU87U0FBRTtRQUMzQyxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ1AsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUM3QixJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksQ0FB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QUMsT0FBTyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRSxFQUFFO29CQUN4QyxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7d0JBQzVCLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO3FCQUNuQztnQkFBQSxDQUFDLENBQUMsQ0FBQztZQUNYLENBQUMsQ0FBQyxDQUFDO1NBQ047SUFDTCxDQUFDOzs7OztJQUVELElBQVksVUFBVTtRQUNsQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsS0FBSyxlQUFlLENBQUM7SUFDN0UsQ0FBQzs7Ozs7SUFFRCxJQUFZLGtCQUFrQjtRQUMxQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsS0FBSyx1QkFBdUIsQ0FBQztJQUNyRixDQUFDOzs7WUE1TkosVUFBVTs7Ozs7OztJQUVQLGdEQUFnSDs7SUFDaEgscUNBQVk7O0lBQ1osOENBQTRDOztJQUM1Qyw4Q0FBeUI7O0lBQ3pCLG1EQUE4Qjs7SUFDOUIsb0RBQWdDOztJQUNoQyxrREFBNkI7O0lBQzdCLGdEQUErQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSWd4U3VtbWFyeVJlc3VsdCB9IGZyb20gJy4vZ3JpZC1zdW1tYXJ5JztcbmltcG9ydCB7IERhdGFVdGlsIH0gZnJvbSAnLi4vLi4vZGF0YS1vcGVyYXRpb25zL2RhdGEtdXRpbCc7XG5pbXBvcnQgeyBjbG9uZUFycmF5IH0gZnJvbSAnLi4vLi4vY29yZS91dGlscyc7XG5cbi8qKiBAaGlkZGVuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSWd4R3JpZFN1bW1hcnlTZXJ2aWNlIHtcbiAgICBwcm90ZWN0ZWQgc3VtbWFyeUNhY2hlTWFwOiBNYXA8c3RyaW5nLCBNYXA8c3RyaW5nLCBhbnlbXT4+ID0gbmV3IE1hcDxzdHJpbmcsIE1hcDxzdHJpbmcsIElneFN1bW1hcnlSZXN1bHRbXT4+KCk7XG4gICAgcHVibGljIGdyaWQ7XG4gICAgcHVibGljIHJvb3RTdW1tYXJ5SUQgPSAnaWd4R3JpZFJvb3RTdW1tYXJ5JztcbiAgICBwdWJsaWMgc3VtbWFyeUhlaWdodCA9IDA7XG4gICAgcHVibGljIG1heFN1bW1hcmllc0xlbmdodCA9IDA7XG4gICAgcHVibGljIGdyb3VwaW5nRXhwcmVzc2lvbnMgPSBbXTtcbiAgICBwdWJsaWMgcmV0cmlnZ2VyUm9vdFBpcGUgPSAwO1xuICAgIHB1YmxpYyBkZWxldGVPcGVyYXRpb24gPSBmYWxzZTtcblxuICAgIHB1YmxpYyByZWNhbGN1bGF0ZVN1bW1hcmllcygpIHtcbiAgICAgICAgdGhpcy5yZXNldFN1bW1hcnlIZWlnaHQoKTtcbiAgICAgICAgdGhpcy5ncmlkLmNhbGN1bGF0ZUdyaWRIZWlnaHQoKTtcbiAgICAgICAgdGhpcy5ncmlkLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfVxuXG4gICAgcHVibGljIGNsZWFyU3VtbWFyeUNhY2hlKGFyZ3M/KSB7XG4gICAgICAgIGlmICghdGhpcy5zdW1tYXJ5Q2FjaGVNYXAuc2l6ZSkgeyByZXR1cm47IH1cbiAgICAgICAgaWYgKCFhcmdzKSB7XG4gICAgICAgICAgICB0aGlzLnN1bW1hcnlDYWNoZU1hcC5jbGVhcigpO1xuICAgICAgICAgICAgaWYgKHRoaXMuZ3JpZCAmJiB0aGlzLmdyaWQucm9vdFN1bW1hcmllc0VuYWJsZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJldHJpZ2dlclJvb3RQaXBlKys7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGFyZ3MuZGF0YSkge1xuICAgICAgICAgICAgY29uc3Qgcm93SUQgPSB0aGlzLmdyaWQucHJpbWFyeUtleSA/IGFyZ3MuZGF0YVt0aGlzLmdyaWQucHJpbWFyeUtleV0gOiBhcmdzLmRhdGE7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZVN1bW1hcmllcyhyb3dJRCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGFyZ3Mucm93SUQgIT09IHVuZGVmaW5lZCAmJiBhcmdzLnJvd0lEICE9PSBudWxsKSB7XG4gICAgICAgICAgICBsZXQgY29sdW1uTmFtZSA9IGFyZ3MuY2VsbElEID8gdGhpcy5ncmlkLmNvbHVtbkxpc3QuZmluZChjb2wgPT4gY29sLmluZGV4ID09PSBhcmdzLmNlbGxJRC5jb2x1bW5JRCkuZmllbGQgOiB1bmRlZmluZWQ7XG4gICAgICAgICAgICBpZiAoY29sdW1uTmFtZSAmJiB0aGlzLmdyaWQucm93RWRpdGFibGUpIHsgcmV0dXJuOyB9XG5cbiAgICAgICAgICAgIGNvbnN0IGlzR3JvdXBlZENvbHVtbiA9IHRoaXMuZ3JpZC5ncm91cGluZ0V4cHJlc3Npb25zICYmXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ3JpZC5ncm91cGluZ0V4cHJlc3Npb25zLm1hcChleHByID0+IGV4cHIuZmllbGROYW1lKS5pbmRleE9mKGNvbHVtbk5hbWUpICE9PSAtMTtcbiAgICAgICAgICAgIGlmIChjb2x1bW5OYW1lICYmIGlzR3JvdXBlZENvbHVtbiApIHtcbiAgICAgICAgICAgICAgICBjb2x1bW5OYW1lID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5yZW1vdmVTdW1tYXJpZXMoYXJncy5yb3dJRCwgY29sdW1uTmFtZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgcmVtb3ZlU3VtbWFyaWVzKHJvd0lELCBjb2x1bW5OYW1lPykge1xuICAgICAgICB0aGlzLmRlbGV0ZVN1bW1hcnlDYWNoZSh0aGlzLnJvb3RTdW1tYXJ5SUQsIGNvbHVtbk5hbWUpO1xuICAgICAgICBpZiAodGhpcy5zdW1tYXJ5Q2FjaGVNYXAuc2l6ZSA9PT0gMSAmJiB0aGlzLnN1bW1hcnlDYWNoZU1hcC5oYXModGhpcy5yb290U3VtbWFyeUlEKSkgeyByZXR1cm47IH1cbiAgICAgICAgaWYgKHRoaXMuaXNUcmVlR3JpZCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuZ3JpZC50cmFuc2FjdGlvbnMuZW5hYmxlZCAmJiB0aGlzLmRlbGV0ZU9wZXJhdGlvbikge1xuICAgICAgICAgICAgICAgIHRoaXMuZGVsZXRlT3BlcmF0aW9uID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgLy8gVE9ETzogdGhpcy5yZW1vdmVDaGlsZFJvd1N1bW1hcmllcyhyb3dJRCwgY29sdW1uTmFtZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zdW1tYXJ5Q2FjaGVNYXAuY2xlYXIoKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnJlbW92ZUFsbFRyZWVHcmlkU3VtbWFyaWVzKHJvd0lELCBjb2x1bW5OYW1lKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmlzSGllcmFyY2hpY2FsR3JpZCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuZ3JpZC50cmFuc2FjdGlvbnMuZW5hYmxlZCAmJiB0aGlzLmRlbGV0ZU9wZXJhdGlvbikge1xuICAgICAgICAgICAgICAgIHRoaXMuZGVsZXRlT3BlcmF0aW9uID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5zdW1tYXJ5Q2FjaGVNYXAuY2xlYXIoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgY29uc3Qgc3VtbWFyeUlkcyA9IHRoaXMuZ2V0U3VtbWFyeUlEKHJvd0lELCB0aGlzLmdyaWQuZ3JvdXBpbmdFeHByZXNzaW9ucyk7XG4gICAgICAgICAgIHN1bW1hcnlJZHMuZm9yRWFjaChpZCA9PiB7XG4gICAgICAgICAgICAgICB0aGlzLmRlbGV0ZVN1bW1hcnlDYWNoZShpZCwgY29sdW1uTmFtZSk7XG4gICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHJlbW92ZVN1bW1hcmllc0NhY2hlUGVyQ29sdW1uKGNvbHVtbk5hbWUpIHtcbiAgICAgICAgdGhpcy5zdW1tYXJ5Q2FjaGVNYXAuZm9yRWFjaCgoY2FjaGUpID0+IHtcbiAgICAgICAgICAgIGlmIChjYWNoZS5nZXQoY29sdW1uTmFtZSkpIHtcbiAgICAgICAgICAgICAgICBjYWNoZS5kZWxldGUoY29sdW1uTmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAodGhpcy5ncmlkLnJvb3RTdW1tYXJpZXNFbmFibGVkKSB7ICB0aGlzLnJldHJpZ2dlclJvb3RQaXBlKys7IH1cbiAgICB9XG5cbiAgICBwdWJsaWMgY2FsY01heFN1bW1hcnlIZWlnaHQoKSB7XG4gICAgICAgIGlmICh0aGlzLnN1bW1hcnlIZWlnaHQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnN1bW1hcnlIZWlnaHQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLmdyaWQuZGF0YSkge3JldHVybiB0aGlzLnN1bW1hcnlIZWlnaHQgPSAwOyB9XG4gICAgICAgIGxldCBtYXhTdW1tYXJ5TGVuZ3RoID0gMDtcbiAgICAgICAgdGhpcy5ncmlkLmNvbHVtbkxpc3QuZmlsdGVyKChjb2wpID0+IGNvbC5oYXNTdW1tYXJ5ICYmICFjb2wuaGlkZGVuKS5mb3JFYWNoKChjb2x1bW4pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGdldEN1cnJlbnRTdW1tYXJ5Q29sdW1uID0gY29sdW1uLnN1bW1hcmllcy5vcGVyYXRlKFtdKS5sZW5ndGg7XG4gICAgICAgICAgICBpZiAoZ2V0Q3VycmVudFN1bW1hcnlDb2x1bW4pIHtcbiAgICAgICAgICAgICAgICBpZiAobWF4U3VtbWFyeUxlbmd0aCA8IGdldEN1cnJlbnRTdW1tYXJ5Q29sdW1uKSB7XG4gICAgICAgICAgICAgICAgICAgIG1heFN1bW1hcnlMZW5ndGggPSBnZXRDdXJyZW50U3VtbWFyeUNvbHVtbjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLm1heFN1bW1hcmllc0xlbmdodCA9IG1heFN1bW1hcnlMZW5ndGg7XG4gICAgICAgIHRoaXMuc3VtbWFyeUhlaWdodCA9ICBtYXhTdW1tYXJ5TGVuZ3RoICogdGhpcy5ncmlkLmRlZmF1bHRTdW1tYXJ5SGVpZ2h0O1xuICAgICAgICByZXR1cm4gdGhpcy5zdW1tYXJ5SGVpZ2h0O1xuICAgIH1cblxuICAgIHB1YmxpYyBjYWxjdWxhdGVTdW1tYXJpZXMocm93SUQsIGRhdGEpIHtcbiAgICAgICAgbGV0IHJvd1N1bW1hcmllcyA9IHRoaXMuc3VtbWFyeUNhY2hlTWFwLmdldChyb3dJRCk7XG4gICAgICAgIGlmICghcm93U3VtbWFyaWVzKSB7XG4gICAgICAgICAgICByb3dTdW1tYXJpZXMgPSBuZXcgTWFwPHN0cmluZywgSWd4U3VtbWFyeVJlc3VsdFtdPigpO1xuICAgICAgICAgICAgdGhpcy5zdW1tYXJ5Q2FjaGVNYXAuc2V0KHJvd0lELCByb3dTdW1tYXJpZXMpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5oYXNTdW1tYXJpemVkQ29sdW1ucyB8fCAhZGF0YSkge3JldHVybiByb3dTdW1tYXJpZXM7IH1cbiAgICAgICAgdGhpcy5ncmlkLmNvbHVtbkxpc3QuZmlsdGVyKGNvbCA9PiBjb2wuaGFzU3VtbWFyeSkuZm9yRWFjaCgoY29sdW1uKSA9PiB7XG4gICAgICAgICAgICBpZiAoIXJvd1N1bW1hcmllcy5nZXQoY29sdW1uLmZpZWxkKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbHVtblZhbHVlcyA9IGRhdGEubWFwKHJlY29yZCA9PiByZWNvcmRbY29sdW1uLmZpZWxkXSk7XG4gICAgICAgICAgICAgICAgcm93U3VtbWFyaWVzLnNldChjb2x1bW4uZmllbGQsXG4gICAgICAgICAgICAgICAgICAgIGNvbHVtbi5zdW1tYXJpZXMub3BlcmF0ZShjb2x1bW5WYWx1ZXMpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiByb3dTdW1tYXJpZXM7XG4gICAgfVxuXG4gICAgcHVibGljIHJlc2V0U3VtbWFyeUhlaWdodCgpIHtcbiAgICAgICAgdGhpcy5zdW1tYXJ5SGVpZ2h0ID0gMDtcbiAgICAgICAgKHRoaXMuZ3JpZCBhcyBhbnkpLl9zdW1tYXJ5UGlwZVRyaWdnZXIrKztcbiAgICAgICAgaWYgKHRoaXMuZ3JpZC5yb290U3VtbWFyaWVzRW5hYmxlZCkge1xuICAgICAgICAgICAgdGhpcy5yZXRyaWdnZXJSb290UGlwZSsrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHVwZGF0ZVN1bW1hcnlDYWNoZShncm91cGluZ0FyZ3MpIHtcbiAgICAgICAgaWYgKHRoaXMuc3VtbWFyeUNhY2hlTWFwLnNpemUgPT09IDAgfHwgIXRoaXMuaGFzU3VtbWFyaXplZENvbHVtbnMpIHsgcmV0dXJuOyB9XG4gICAgICAgIGlmICh0aGlzLmdyb3VwaW5nRXhwcmVzc2lvbnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmdyb3VwaW5nRXhwcmVzc2lvbnMgPSBncm91cGluZ0FyZ3MuZXhwcmVzc2lvbnMubWFwKHJlY29yZCA9PiByZWNvcmQuZmllbGROYW1lKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZ3JvdXBpbmdBcmdzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5ncm91cGluZ0V4cHJlc3Npb25zID0gW107XG4gICAgICAgICAgICB0aGlzLmNsZWFyU3VtbWFyeUNhY2hlKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb21wYXJlR3JvdXBpbmdFeHByZXNzaW9ucyh0aGlzLmdyb3VwaW5nRXhwcmVzc2lvbnMsIGdyb3VwaW5nQXJncyk7XG4gICAgICAgIHRoaXMuZ3JvdXBpbmdFeHByZXNzaW9ucyA9IGdyb3VwaW5nQXJncy5leHByZXNzaW9ucy5tYXAocmVjb3JkID0+IHJlY29yZC5maWVsZE5hbWUpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgaGFzU3VtbWFyaXplZENvbHVtbnMoKTogYm9vbGVhbiB7XG4gICAgICAgIGNvbnN0IHN1bW1hcml6ZWRDb2x1bW5zID0gdGhpcy5ncmlkLmNvbHVtbkxpc3QuZmlsdGVyKGNvbCA9PiBjb2wuaGFzU3VtbWFyeSAmJiAhY29sLmhpZGRlbik7XG4gICAgICAgIHJldHVybiBzdW1tYXJpemVkQ29sdW1ucy5sZW5ndGggPiAwO1xuICAgIH1cblxuICAgIHByaXZhdGUgZGVsZXRlU3VtbWFyeUNhY2hlKGlkLCBjb2x1bW5OYW1lKSB7XG4gICAgICAgIGlmICh0aGlzLnN1bW1hcnlDYWNoZU1hcC5nZXQoaWQpKSB7XG4gICAgICAgICAgICBjb25zdCBmaWx0ZXJpbmdBcHBsaWVkID0gY29sdW1uTmFtZSAmJiB0aGlzLmdyaWQuZmlsdGVyaW5nRXhwcmVzc2lvbnNUcmVlICYmXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ3JpZC5maWx0ZXJpbmdFeHByZXNzaW9uc1RyZWUuZmlsdGVyaW5nT3BlcmFuZHMubWFwKChleHByKSA9PiBleHByLmZpZWxkTmFtZSkuaW5kZXhPZihjb2x1bW5OYW1lKSAhPT0gLTE7XG4gICAgICAgICAgICBpZiAoY29sdW1uTmFtZSAmJiB0aGlzLnN1bW1hcnlDYWNoZU1hcC5nZXQoaWQpLmdldChjb2x1bW5OYW1lKSAmJiAhZmlsdGVyaW5nQXBwbGllZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3VtbWFyeUNhY2hlTWFwLmdldChpZCkuZGVsZXRlKGNvbHVtbk5hbWUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN1bW1hcnlDYWNoZU1hcC5kZWxldGUoaWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGlkID09PSB0aGlzLnJvb3RTdW1tYXJ5SUQgJiYgdGhpcy5ncmlkLnJvb3RTdW1tYXJpZXNFbmFibGVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXRyaWdnZXJSb290UGlwZSsrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRTdW1tYXJ5SUQocm93SUQsIGdyb3VwaW5nRXhwcmVzc2lvbnMpIHtcbiAgICAgICAgaWYgKGdyb3VwaW5nRXhwcmVzc2lvbnMubGVuZ3RoID09PSAwKSB7IHJldHVybiBbXTsgfVxuICAgICAgICBjb25zdCBzdW1tYXJ5SURzID0gW107XG4gICAgICAgIGxldCBkYXRhID0gdGhpcy5ncmlkLmRhdGE7XG4gICAgICAgIGlmICh0aGlzLmdyaWQudHJhbnNhY3Rpb25zLmVuYWJsZWQpIHtcbiAgICAgICAgICAgIGRhdGEgPSBEYXRhVXRpbC5tZXJnZVRyYW5zYWN0aW9ucyhcbiAgICAgICAgICAgICAgICBjbG9uZUFycmF5KHRoaXMuZ3JpZC5kYXRhKSxcbiAgICAgICAgICAgICAgICB0aGlzLmdyaWQudHJhbnNhY3Rpb25zLmdldEFnZ3JlZ2F0ZWRDaGFuZ2VzKHRydWUpLFxuICAgICAgICAgICAgICAgIHRoaXMuZ3JpZC5wcmltYXJ5S2V5XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJvd0RhdGEgPSB0aGlzLmdyaWQucHJpbWFyeUtleSA/IGRhdGEuZmluZChyZWMgPT4gcmVjW3RoaXMuZ3JpZC5wcmltYXJ5S2V5XSA9PT0gcm93SUQpIDogcm93SUQ7XG4gICAgICAgIGxldCBpZCA9ICd7ICc7XG4gICAgICAgIGdyb3VwaW5nRXhwcmVzc2lvbnMuZm9yRWFjaChleHByID0+IHtcbiAgICAgICAgICAgIGlkICs9IGAnJHtleHByLmZpZWxkTmFtZX0nOiAnJHtyb3dEYXRhW2V4cHIuZmllbGROYW1lXX0nYDtcbiAgICAgICAgICAgICAgICBzdW1tYXJ5SURzLnB1c2goaWQuY29uY2F0KCcgfScpKTtcbiAgICAgICAgICAgICAgICBpZCArPSAnLCAnO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHN1bW1hcnlJRHM7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSByZW1vdmVBbGxUcmVlR3JpZFN1bW1hcmllcyhyb3dJRCwgY29sdW1uTmFtZT8pIHtcbiAgICAgICAgbGV0IHJvdyA9IHRoaXMuZ3JpZC5yZWNvcmRzLmdldChyb3dJRCk7XG4gICAgICAgIGlmICghcm93KSB7IHJldHVybjsgfVxuICAgICAgICByb3cgPSByb3cuY2hpbGRyZW4gPyByb3cgOiByb3cucGFyZW50O1xuICAgICAgICB3aGlsZSAocm93KSB7XG4gICAgICAgICAgICByb3dJRCA9IHJvdy5yb3dJRDtcbiAgICAgICAgICAgIHRoaXMuZGVsZXRlU3VtbWFyeUNhY2hlKHJvd0lELCBjb2x1bW5OYW1lKTtcbiAgICAgICAgICAgIHJvdyA9IHJvdy5wYXJlbnQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBUT0RPOiByZW1vdmUgb25seSBkZWxldGVkIHJvd3NcbiAgICBwcml2YXRlIHJlbW92ZUNoaWxkUm93U3VtbWFyaWVzKHJvd0lELCBjb2x1bW5OYW1lPykge1xuICAgIH1cblxuICAgIHByaXZhdGUgY29tcGFyZUdyb3VwaW5nRXhwcmVzc2lvbnMoY3VycmVudCwgZ3JvdXBpbmdBcmdzKSB7XG4gICAgICAgIGNvbnN0IG5ld0V4cHJlc3Npb25zID0gZ3JvdXBpbmdBcmdzLmV4cHJlc3Npb25zLm1hcChyZWNvcmQgPT4gcmVjb3JkLmZpZWxkTmFtZSk7XG4gICAgICAgIGNvbnN0IHJlbW92ZWRDb2xzID0gZ3JvdXBpbmdBcmdzLnVuZ3JvdXBlZENvbHVtbnM7XG4gICAgICAgIGlmIChjdXJyZW50Lmxlbmd0aCA8PSBuZXdFeHByZXNzaW9ucy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNvbnN0IG5ld0V4cHIgPSBuZXdFeHByZXNzaW9ucy5zbGljZSgwLCBjdXJyZW50Lmxlbmd0aCkudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIGlmIChjdXJyZW50LnRvU3RyaW5nKCkgIT09IG5ld0V4cHIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNsZWFyU3VtbWFyeUNhY2hlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBjdXJyRXhwciA9IGN1cnJlbnQuc2xpY2UoMCwgbmV3RXhwcmVzc2lvbnMubGVuZ3RoKS50b1N0cmluZygpO1xuICAgICAgICAgICAgaWYgKGN1cnJFeHByICE9PSBuZXdFeHByZXNzaW9ucy50b1N0cmluZygpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jbGVhclN1bW1hcnlDYWNoZSgpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlbW92ZWRDb2xzLm1hcChjb2wgPT4gY29sLmZpZWxkKS5mb3JFYWNoKGNvbE5hbWUgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc3VtbWFyeUNhY2hlTWFwLmZvckVhY2goKGNhY2hlLCBpZCkgPT4ge1xuICAgICAgICAgICAgICAgICAgIGlmIChpZC5pbmRleE9mKGNvbE5hbWUpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN1bW1hcnlDYWNoZU1hcC5kZWxldGUoaWQpO1xuICAgICAgICAgICAgICAgICAgIH19KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXQgaXNUcmVlR3JpZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ3JpZC5uYXRpdmVFbGVtZW50LnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ2lneC10cmVlLWdyaWQnO1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0IGlzSGllcmFyY2hpY2FsR3JpZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ3JpZC5uYXRpdmVFbGVtZW50LnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ2lneC1oaWVyYXJjaGljYWwtZ3JpZCc7XG4gICAgfVxuXG59XG4iXX0=