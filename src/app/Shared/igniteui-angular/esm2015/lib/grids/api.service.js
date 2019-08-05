/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { cloneArray, isEqual, mergeObjects } from '../core/utils';
import { DataUtil, DataType } from '../data-operations/data-util';
import { SortingDirection } from '../data-operations/sorting-expression.interface';
import { FilteringExpressionsTree } from '../data-operations/filtering-expressions-tree';
import { TransactionType } from '../services/transaction/transaction';
/**
 * @hidden
 * @template T
 */
export class GridBaseAPIService {
    constructor() {
        this.editCellState = new Map();
        this.editRowState = new Map();
        this.destroyMap = new Map();
    }
    /**
     * @param {?} name
     * @return {?}
     */
    get_column_by_name(name) {
        return this.grid.columnList.find((col) => col.field === name);
    }
    /**
     * @return {?}
     */
    get_summary_data() {
        /** @type {?} */
        const grid = this.grid;
        /** @type {?} */
        let data = grid.filteredData;
        if (!data) {
            if (grid.transactions.enabled) {
                data = DataUtil.mergeTransactions(cloneArray(grid.data), grid.transactions.getAggregatedChanges(true), grid.primaryKey);
                /** @type {?} */
                const deletedRows = grid.transactions.getTransactionLog().filter(t => t.type === TransactionType.DELETE).map(t => t.id);
                deletedRows.forEach(rowID => {
                    /** @type {?} */
                    const tempData = grid.primaryKey ? data.map(rec => rec[grid.primaryKey]) : data;
                    /** @type {?} */
                    const index = tempData.indexOf(rowID);
                    if (index !== -1) {
                        data.splice(index, 1);
                    }
                });
            }
            else {
                data = grid.data;
            }
        }
        return data;
    }
    /**
     * @hidden
     * \@internal
     * @param {?} rowID
     * @return {?}
     */
    getRowData(rowID) {
        /** @type {?} */
        const data = this.get_all_data(this.grid.transactions.enabled);
        /** @type {?} */
        const index = this.get_row_index_in_data(rowID);
        return data[index];
    }
    // TODO: Refactor
    /**
     * @return {?}
     */
    escape_editMode() {
        this.grid.crudService.end();
    }
    // TODO: Refactor
    /**
     * @return {?}
     */
    get_cell_inEditMode() {
        return this.grid.crudService.cell;
    }
    /**
     * @param {?} rowID
     * @return {?}
     */
    get_row_index_in_data(rowID) {
        /** @type {?} */
        const grid = (/** @type {?} */ (this.grid));
        if (!grid) {
            return -1;
        }
        /** @type {?} */
        const data = this.get_all_data(grid.transactions.enabled);
        return grid.primaryKey ? data.findIndex(record => record[grid.primaryKey] === rowID) : data.indexOf(rowID);
    }
    /**
     * @param {?} rowSelector
     * @return {?}
     */
    get_row_by_key(rowSelector) {
        /** @type {?} */
        const primaryKey = this.grid.primaryKey;
        if (primaryKey !== undefined && primaryKey !== null) {
            return this.grid.dataRowList.find((row) => row.rowData[primaryKey] === rowSelector);
        }
        else {
            return this.grid.dataRowList.find((row) => row.rowData === rowSelector);
        }
    }
    /**
     * @param {?} rowIndex
     * @return {?}
     */
    get_row_by_index(rowIndex) {
        return this.grid.rowList.find((row) => row.index === rowIndex);
    }
    /**
     * @param {?} rowSelector
     * @param {?} field
     * @return {?}
     */
    get_cell_by_key(rowSelector, field) {
        /** @type {?} */
        const row = this.get_row_by_key(rowSelector);
        if (row && row.cells) {
            return row.cells.find((cell) => cell.column.field === field);
        }
    }
    /**
     * @param {?} rowIndex
     * @param {?} columnIndex
     * @return {?}
     */
    get_cell_by_index(rowIndex, columnIndex) {
        /** @type {?} */
        const row = this.get_row_by_index(rowIndex);
        if (row && row.cells) {
            return row.cells.find((cell) => cell.columnIndex === columnIndex);
        }
    }
    /**
     * @param {?} rowIndex
     * @param {?} columnIndex
     * @return {?}
     */
    get_cell_by_visible_index(rowIndex, columnIndex) {
        /** @type {?} */
        const row = this.get_row_by_index(rowIndex);
        if (row && row.cells) {
            return row.cells.find((cell) => cell.visibleColumnIndex === columnIndex);
        }
    }
    /**
     * @return {?}
     */
    submit_value() {
        /** @type {?} */
        const cell = this.grid.crudService.cell;
        if (cell) {
            /** @type {?} */
            const args = this.update_cell(cell, cell.editValue);
            if (args.cancel) {
                return;
            }
            this.escape_editMode();
        }
    }
    /**
     * @param {?} cell
     * @param {?} value
     * @return {?}
     */
    update_cell(cell, value) {
        /** @type {?} */
        const data = this.get_all_data(this.grid.transactions.enabled);
        /** @type {?} */
        const index = this.get_row_index_in_data(cell.id.rowID);
        cell.editValue = value;
        /** @type {?} */
        const args = cell.createEditEventArgs();
        this.grid.onCellEdit.emit(args);
        if (args.cancel) {
            return args;
        }
        // Cast to number after emit
        // TODO: Clean up this
        args.newValue = cell.castToNumber(args.newValue);
        if (isEqual(args.oldValue, args.newValue)) {
            return args;
        }
        this.grid.summaryService.clearSummaryCache(args);
        this.updateData(this.grid, cell.id.rowID, data[index], cell.rowData, { [cell.column.field]: args.newValue });
        if (this.grid.primaryKey === cell.column.field) {
            if (this.grid.selection.is_item_selected(this.grid.id, cell.id.rowID)) {
                this.grid.selection.deselect_item(this.grid.id, cell.id.rowID);
                this.grid.selection.select_item(this.grid.id, args.newValue);
            }
            if (this.grid.hasSummarizedColumns) {
                this.grid.summaryService.removeSummaries(cell.id.rowID);
            }
        }
        if (!this.grid.rowEditable || !this.grid.crudService.row ||
            this.grid.crudService.row.id !== cell.id.rowID || !this.grid.transactions.enabled) {
            this.grid.summaryService.clearSummaryCache(args);
            ((/** @type {?} */ (this.grid)))._pipeTrigger++;
        }
        return args;
    }
    /**
     * Updates related row of provided grid's data source with provided new row value
     * @protected
     * @param {?} grid Grid to update data for
     * @param {?} rowID ID of the row to update
     * @param {?} rowValueInDataSource Initial value of the row as it is in data source
     * @param {?} rowCurrentValue Current value of the row as it is with applied previous transactions
     * @param {?} rowNewValue New value of the row
     * @return {?}
     */
    updateData(grid, rowID, rowValueInDataSource, rowCurrentValue, rowNewValue) {
        if (grid.transactions.enabled) {
            /** @type {?} */
            const transaction = {
                id: rowID,
                type: TransactionType.UPDATE,
                newValue: rowNewValue
            };
            grid.transactions.add(transaction, rowCurrentValue);
        }
        else {
            mergeObjects(rowValueInDataSource, rowNewValue);
        }
    }
    /**
     * @param {?} row
     * @param {?=} value
     * @return {?}
     */
    _update_row(row, value) {
        /** @type {?} */
        const grid = this.grid;
        /** @type {?} */
        const rowInEditMode = grid.crudService.row;
        row.newData = value ? value : grid.transactions.getAggregatedValue(row.id, true);
        if (rowInEditMode && row.id === rowInEditMode.id) {
            row.data = Object.assign({}, row.data, rowInEditMode.transactionState);
            // TODO: Workaround for updating a row in edit mode through the API
        }
        else if (this.grid.transactions.enabled) {
            /** @type {?} */
            const lastCommitedValue = grid.transactions.getState(row.id) ?
                grid.transactions.getState(row.id).value : null;
            row.data = lastCommitedValue ? Object.assign(row.data, lastCommitedValue) : row.data;
        }
    }
    /**
     * @param {?} row
     * @param {?} value
     * @return {?}
     */
    update_row(row, value) {
        /** @type {?} */
        const grid = this.grid;
        /** @type {?} */
        const selected = grid.selection.is_item_selected(grid.id, row.id);
        /** @type {?} */
        const rowInEditMode = grid.crudService.row;
        /** @type {?} */
        const data = this.get_all_data(grid.transactions.enabled);
        /** @type {?} */
        const index = this.get_row_index_in_data(row.id);
        /** @type {?} */
        const hasSummarized = grid.hasSummarizedColumns;
        this._update_row(row, value);
        /** @type {?} */
        const args = row.createEditEventArgs();
        // If no valid row is found
        if (index === -1) {
            return args;
        }
        grid.onRowEdit.emit(args);
        if (args.cancel) {
            return args;
        }
        if (rowInEditMode) {
            /** @type {?} */
            const hasChanges = grid.transactions.getState(args.rowID, true);
            grid.transactions.endPending(false);
            if (!hasChanges) {
                return args;
            }
        }
        if (!args.newValue) {
            return args;
        }
        if (hasSummarized) {
            grid.summaryService.removeSummaries(args.rowID);
        }
        this.updateData(grid, row.id, data[index], args.oldValue, args.newValue);
        /** @type {?} */
        const newId = grid.primaryKey ? args.newValue[grid.primaryKey] : args.newValue;
        if (selected) {
            grid.selection.deselect_item(grid.id, row.id);
            grid.selection.select_item(grid.id, newId);
        }
        if (hasSummarized) {
            grid.summaryService.removeSummaries(newId);
        }
        ((/** @type {?} */ (grid)))._pipeTrigger++;
        return args;
    }
    /**
     * @protected
     * @param {?} value
     * @param {?} rowID
     * @param {?} index
     * @return {?}
     */
    update_row_in_array(value, rowID, index) {
        /** @type {?} */
        const grid = this.grid;
        grid.data[index] = value;
    }
    /**
     * @param {?} expression
     * @return {?}
     */
    sort(expression) {
        if (expression.dir === SortingDirection.None) {
            this.remove_grouping_expression(expression.fieldName);
        }
        /** @type {?} */
        const sortingState = cloneArray(this.grid.sortingExpressions);
        this.prepare_sorting_expression([sortingState], expression);
        this.grid.sortingExpressions = sortingState;
    }
    /**
     * @param {?} expressions
     * @return {?}
     */
    sort_multiple(expressions) {
        /** @type {?} */
        const sortingState = cloneArray(this.grid.sortingExpressions);
        for (const each of expressions) {
            if (each.dir === SortingDirection.None) {
                this.remove_grouping_expression(each.fieldName);
            }
            this.prepare_sorting_expression([sortingState], each);
        }
        this.grid.sortingExpressions = sortingState;
    }
    /**
     * @param {?} fieldName
     * @param {?} term
     * @param {?} conditionOrExpressionsTree
     * @param {?} ignoreCase
     * @return {?}
     */
    filter(fieldName, term, conditionOrExpressionsTree, ignoreCase) {
        /** @type {?} */
        const grid = this.grid;
        /** @type {?} */
        const filteringTree = grid.filteringExpressionsTree;
        grid.endEdit(false);
        if (grid.paging) {
            grid.page = 0;
        }
        /** @type {?} */
        const fieldFilterIndex = filteringTree.findIndex(fieldName);
        if (fieldFilterIndex > -1) {
            filteringTree.filteringOperands.splice(fieldFilterIndex, 1);
        }
        this.prepare_filtering_expression(filteringTree, fieldName, term, conditionOrExpressionsTree, ignoreCase, fieldFilterIndex);
        grid.filteringExpressionsTree = filteringTree;
    }
    /**
     * @param {?} term
     * @param {?} condition
     * @param {?} ignoreCase
     * @return {?}
     */
    filter_global(term, condition, ignoreCase) {
        if (!condition) {
            return;
        }
        /** @type {?} */
        const grid = this.grid;
        /** @type {?} */
        const filteringTree = grid.filteringExpressionsTree;
        grid.endEdit(false);
        if (grid.paging) {
            grid.page = 0;
        }
        filteringTree.filteringOperands = [];
        for (const column of grid.columns) {
            this.prepare_filtering_expression(filteringTree, column.field, term, condition, ignoreCase || column.filteringIgnoreCase);
        }
        grid.filteringExpressionsTree = filteringTree;
    }
    /**
     * @param {?} fieldName
     * @return {?}
     */
    clear_filter(fieldName) {
        if (fieldName) {
            /** @type {?} */
            const column = this.get_column_by_name(fieldName);
            if (!column) {
                return;
            }
        }
        /** @type {?} */
        const grid = this.grid;
        grid.endEdit(false);
        /** @type {?} */
        const filteringState = grid.filteringExpressionsTree;
        /** @type {?} */
        const index = filteringState.findIndex(fieldName);
        if (index > -1) {
            filteringState.filteringOperands.splice(index, 1);
        }
        else if (!fieldName) {
            filteringState.filteringOperands = [];
        }
        grid.filteringExpressionsTree = filteringState;
    }
    /**
     * @param {?} fieldName
     * @return {?}
     */
    clear_sort(fieldName) {
        /** @type {?} */
        const sortingState = this.grid.sortingExpressions;
        /** @type {?} */
        const index = sortingState.findIndex((expr) => expr.fieldName === fieldName);
        if (index > -1) {
            sortingState.splice(index, 1);
            this.grid.sortingExpressions = sortingState;
        }
    }
    /**
     * @protected
     * @param {?} filteringState
     * @param {?} fieldName
     * @param {?} searchVal
     * @param {?} conditionOrExpressionsTree
     * @param {?} ignoreCase
     * @param {?=} insertAtIndex
     * @return {?}
     */
    prepare_filtering_expression(filteringState, fieldName, searchVal, conditionOrExpressionsTree, ignoreCase, insertAtIndex = -1) {
        /** @type {?} */
        let newExpressionsTree;
        /** @type {?} */
        const oldExpressionsTreeIndex = filteringState.findIndex(fieldName);
        /** @type {?} */
        const expressionsTree = conditionOrExpressionsTree instanceof FilteringExpressionsTree ?
            (/** @type {?} */ (conditionOrExpressionsTree)) : null;
        /** @type {?} */
        const condition = conditionOrExpressionsTree instanceof FilteringExpressionsTree ?
            null : (/** @type {?} */ (conditionOrExpressionsTree));
        /** @type {?} */
        const newExpression = { fieldName, searchVal, condition, ignoreCase };
        if (oldExpressionsTreeIndex === -1) {
            // no expressions tree found for this field
            if (expressionsTree) {
                if (insertAtIndex > -1) {
                    filteringState.filteringOperands.splice(insertAtIndex, 0, expressionsTree);
                }
                else {
                    filteringState.filteringOperands.push(expressionsTree);
                }
            }
            else if (condition) {
                // create expressions tree for this field and add the new expression to it
                newExpressionsTree = new FilteringExpressionsTree(filteringState.operator, fieldName);
                newExpressionsTree.filteringOperands.push(newExpression);
                filteringState.filteringOperands.push(newExpressionsTree);
            }
        }
    }
    /**
     * @protected
     * @param {?} stateCollections
     * @param {?} expression
     * @return {?}
     */
    prepare_sorting_expression(stateCollections, expression) {
        if (expression.dir === SortingDirection.None) {
            stateCollections.forEach(state => {
                state.splice(state.findIndex((expr) => expr.fieldName === expression.fieldName), 1);
            });
            return;
        }
        /**
         * We need to make sure the states in each collection with same fields point to the same object reference.
         * If the different state collections provided have different sizes we need to get the largest one.
         * That way we can get the state reference from the largest one that has the same fieldName as the expression to prepare.
         * @type {?}
         */
        let maxCollection = stateCollections[0];
        for (let i = 1; i < stateCollections.length; i++) {
            if (maxCollection.length < stateCollections[i].length) {
                maxCollection = stateCollections[i];
            }
        }
        /** @type {?} */
        const maxExpr = maxCollection.find((expr) => expr.fieldName === expression.fieldName);
        stateCollections.forEach(collection => {
            /** @type {?} */
            const myExpr = collection.find((expr) => expr.fieldName === expression.fieldName);
            if (!myExpr && !maxExpr) {
                // Expression with this fieldName is missing from the current and the max collection.
                collection.push(expression);
            }
            else if (!myExpr && maxExpr) {
                // Expression with this fieldName is missing from the current and but the max collection has.
                collection.push(maxExpr);
                Object.assign(maxExpr, expression);
            }
            else {
                // The current collection has the expression so just update it.
                Object.assign(myExpr, expression);
            }
        });
    }
    /**
     * @protected
     * @param {?} fieldName
     * @return {?}
     */
    remove_grouping_expression(fieldName) {
    }
    /**
     * @param {?} column
     * @return {?}
     */
    should_apply_number_style(column) {
        return column.dataType === DataType.Number;
    }
    /**
     * @return {?}
     */
    get_data() {
        /** @type {?} */
        const grid = this.grid;
        /** @type {?} */
        const data = grid.data ? grid.data : [];
        return data;
    }
    /**
     * @param {?=} includeTransactions
     * @return {?}
     */
    get_all_data(includeTransactions = false) {
        /** @type {?} */
        const grid = this.grid;
        /** @type {?} */
        let data = grid.data ? grid.data : [];
        data = includeTransactions ? grid.dataWithAddedInTransactionRows : data;
        return data;
    }
    /**
     * @return {?}
     */
    get_filtered_data() {
        return this.grid.filteredData;
    }
    /**
     * @protected
     * @param {?} fieldName
     * @return {?}
     */
    getSortStrategyPerColumn(fieldName) {
        return this.get_column_by_name(fieldName) ?
            this.get_column_by_name(fieldName).sortStrategy : undefined;
    }
    /**
     * @param {?} rowData
     * @return {?}
     */
    addRowToData(rowData) {
        // Add row goes to transactions and if rowEditable is properly implemented, added rows will go to pending transactions
        // If there is a row in edit - > commit and close
        /** @type {?} */
        const grid = this.grid;
        if (grid.transactions.enabled) {
            /** @type {?} */
            const transactionId = grid.primaryKey ? rowData[grid.primaryKey] : rowData;
            /** @type {?} */
            const transaction = { id: transactionId, type: TransactionType.ADD, newValue: rowData };
            grid.transactions.add(transaction);
        }
        else {
            grid.data.push(rowData);
        }
    }
    /**
     * @param {?} rowID
     * @param {?} index
     * @return {?}
     */
    deleteRowFromData(rowID, index) {
        //  if there is a row (index !== 0) delete it
        //  if there is a row in ADD or UPDATE state change it's state to DELETE
        /** @type {?} */
        const grid = this.grid;
        if (index !== -1) {
            if (grid.transactions.enabled) {
                /** @type {?} */
                const transaction = { id: rowID, type: TransactionType.DELETE, newValue: null };
                grid.transactions.add(transaction, grid.data[index]);
            }
            else {
                grid.data.splice(index, 1);
            }
        }
        else {
            /** @type {?} */
            const state = grid.transactions.getState(rowID);
            grid.transactions.add({ id: rowID, type: TransactionType.DELETE, newValue: null }, state && state.recordRef);
        }
    }
    /**
     * @param {?} rowId
     * @return {?}
     */
    deleteRowById(rowId) {
        /** @type {?} */
        let index;
        /** @type {?} */
        const grid = this.grid;
        /** @type {?} */
        const data = this.get_all_data();
        if (grid.primaryKey) {
            index = data.map((record) => record[grid.primaryKey]).indexOf(rowId);
        }
        else {
            index = data.indexOf(rowId);
        }
        /** @type {?} */
        const state = grid.transactions.getState(rowId);
        /** @type {?} */
        const hasRowInNonDeletedState = state && state.type !== TransactionType.DELETE;
        //  if there is a row (index !== -1) and the we have cell in edit mode on same row exit edit mode
        //  if there is no row (index === -1), but there is a row in ADD or UPDATE state do as above
        //  Otherwise just exit - there is nothing to delete
        if (index !== -1 || hasRowInNonDeletedState) {
            // Always exit edit when row is deleted
            grid.endEdit(true);
        }
        else {
            return;
        }
        //  TODO: should we emit this when cascadeOnDelete is true for each row?!?!
        grid.onRowDeleted.emit({ data: data[index] });
        //  first deselect row then delete it
        if (grid.rowSelectable && grid.selection.is_item_selected(grid.id, rowId)) {
            grid.deselectRows([rowId]);
        }
        else {
            grid.checkHeaderCheckboxStatus();
        }
        this.deleteRowFromData(rowId, index);
        ((/** @type {?} */ (grid)))._pipeTrigger++;
        grid.cdr.markForCheck();
        // Data needs to be recalculated if transactions are in place
        // If no transactions, `data` will be a reference to the grid getter, otherwise it will be stale
        /** @type {?} */
        const dataAfterDelete = grid.transactions.enabled ? grid.dataWithAddedInTransactionRows : data;
        grid.refreshSearch();
        if (dataAfterDelete.length % grid.perPage === 0 && dataAfterDelete.length / grid.perPage - 1 < grid.page && grid.page !== 0) {
            grid.page--;
        }
    }
    /**
     * @param {?} rowData
     * @return {?}
     */
    get_row_id(rowData) {
        /** @type {?} */
        const grid = this.grid;
        return grid.primaryKey ? rowData[grid.primaryKey] : rowData;
    }
    /**
     * @param {?} rowID
     * @return {?}
     */
    row_deleted_transaction(rowID) {
        /** @type {?} */
        const grid = this.grid;
        if (!grid) {
            return false;
        }
        if (!grid.transactions.enabled) {
            return false;
        }
        /** @type {?} */
        const state = grid.transactions.getState(rowID);
        if (state) {
            return state.type === TransactionType.DELETE;
        }
        return false;
    }
    /**
     * @return {?}
     */
    atInexistingPage() {
        return this.grid.totalPages - 1 > this.grid.page;
    }
}
GridBaseAPIService.decorators = [
    { type: Injectable }
];
if (false) {
    /** @type {?} */
    GridBaseAPIService.prototype.grid;
    /**
     * @type {?}
     * @protected
     */
    GridBaseAPIService.prototype.editCellState;
    /**
     * @type {?}
     * @protected
     */
    GridBaseAPIService.prototype.editRowState;
    /**
     * @type {?}
     * @protected
     */
    GridBaseAPIService.prototype.destroyMap;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9pZ25pdGV1aS1hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL2dyaWRzL2FwaS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNsRSxPQUFPLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBRWxFLE9BQU8sRUFBc0IsZ0JBQWdCLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQU12RyxPQUFPLEVBQTZCLHdCQUF3QixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDcEgsT0FBTyxFQUFlLGVBQWUsRUFBUyxNQUFNLHFDQUFxQyxDQUFDOzs7OztBQU0xRixNQUFNLE9BQU8sa0JBQWtCO0lBRC9CO1FBSWMsa0JBQWEsR0FBcUIsSUFBSSxHQUFHLEVBQWUsQ0FBQztRQUN6RCxpQkFBWSxHQUFrRCxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ3hFLGVBQVUsR0FBa0MsSUFBSSxHQUFHLEVBQTRCLENBQUM7SUFpaEI5RixDQUFDOzs7OztJQS9nQlUsa0JBQWtCLENBQUMsSUFBWTtRQUNsQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUssS0FBSyxJQUFJLENBQUMsQ0FBQztJQUNsRSxDQUFDOzs7O0lBRU0sZ0JBQWdCOztjQUNiLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSTs7WUFDbEIsSUFBSSxHQUFHLElBQUksQ0FBQyxZQUFZO1FBQzVCLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDUCxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFO2dCQUMzQixJQUFJLEdBQUcs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QUcsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLENBQUMsRUFBRTtZQUN6SCxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDZjtJQUNMLENBQUM7Ozs7O0lBRU0sVUFBVSxDQUFDLE9BQU87O2NBQ2YsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDO0lBQ2hFLENBQUM7Ozs7O0lBRU0sdUJBQXVCLENBQUMsS0FBVTs7Y0FDL0IsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJO1FBQ3RCLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDUCxPQUFPLEtBQUssQ0FBQztTQUNoQjtRQUNELElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRTtZQUM1QixPQUFPLEtBQUssQ0FBQztTQUNoQjs7Y0FDSyxLQUFLLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO1FBQy9DLElBQUksS0FBSyxFQUFFO1lBQ1AsT0FBTyxLQUFLLENBQUMsSUFBSSxLQUFLLGVBQWUsQ0FBQyxNQUFNLENBQUM7U0FDaEQ7UUFFRCxPQUFPLEtBQUssQ0FBQztJQUNqQixDQUFDOzs7O0lBRU0sZ0JBQWdCO1FBQ25CLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ3JELENBQUM7OztZQXRoQkosVUFBVTs7OztJQUdQLGtDQUFROzs7OztJQUNSLDJDQUFtRTs7Ozs7SUFDbkUsMENBQWtGOzs7OztJQUNsRix3Q0FBMEYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjbG9uZUFycmF5LCBpc0VxdWFsLCBtZXJnZU9iamVjdHMgfSBmcm9tICcuLi9jb3JlL3V0aWxzJztcbmltcG9ydCB7IERhdGFVdGlsLCBEYXRhVHlwZSB9IGZyb20gJy4uL2RhdGEtb3BlcmF0aW9ucy9kYXRhLXV0aWwnO1xuaW1wb3J0IHsgSUZpbHRlcmluZ0V4cHJlc3Npb24gfSBmcm9tICcuLi9kYXRhLW9wZXJhdGlvbnMvZmlsdGVyaW5nLWV4cHJlc3Npb24uaW50ZXJmYWNlJztcbmltcG9ydCB7IElTb3J0aW5nRXhwcmVzc2lvbiwgU29ydGluZ0RpcmVjdGlvbiB9IGZyb20gJy4uL2RhdGEtb3BlcmF0aW9ucy9zb3J0aW5nLWV4cHJlc3Npb24uaW50ZXJmYWNlJztcbmltcG9ydCB7IElneEdyaWRDZWxsQ29tcG9uZW50IH0gZnJvbSAnLi9jZWxsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJZ3hDb2x1bW5Db21wb25lbnQgfSBmcm9tICcuL2NvbHVtbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgSWd4R3JpZEJhc2VDb21wb25lbnQsIElHcmlkRGF0YUJpbmRhYmxlIH0gZnJvbSAnLi9ncmlkLWJhc2UuY29tcG9uZW50JztcbmltcG9ydCB7IElneFJvd0NvbXBvbmVudCB9IGZyb20gJy4vcm93LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJRmlsdGVyaW5nT3BlcmF0aW9uIH0gZnJvbSAnLi4vZGF0YS1vcGVyYXRpb25zL2ZpbHRlcmluZy1jb25kaXRpb24nO1xuaW1wb3J0IHsgSUZpbHRlcmluZ0V4cHJlc3Npb25zVHJlZSwgRmlsdGVyaW5nRXhwcmVzc2lvbnNUcmVlIH0gZnJvbSAnLi4vZGF0YS1vcGVyYXRpb25zL2ZpbHRlcmluZy1leHByZXNzaW9ucy10cmVlJztcbmltcG9ydCB7IFRyYW5zYWN0aW9uLCBUcmFuc2FjdGlvblR5cGUsIFN0YXRlIH0gZnJvbSAnLi4vc2VydmljZXMvdHJhbnNhY3Rpb24vdHJhbnNhY3Rpb24nO1xuaW1wb3J0IHsgSWd4Q2VsbCwgSWd4Um93IH0gZnJvbSAnLi4vY29yZS9ncmlkLXNlbGVjdGlvbic7XG4vKipcbiAqQGhpZGRlblxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgR3JpZEJhc2VBUElTZXJ2aWNlIDxUIGV4dGVuZHMgSWd4R3JpZEJhc2VDb21wb25lbnQgJiBJR3JpZERhdGFCaW5kYWJsZT4ge1xuXG4gICAgZ3JpZDogVDtcbiAgICBwcm90ZWN0ZWQgZWRpdENlbGxTdGF0ZTogTWFwPHN0cmluZywgYW55PiA9IG5ldyBNYXA8c3RyaW5nLCBhbnk+KCk7XG4gICAgcHJvdGVjdGVkIGVkaXRSb3dTdGF0ZTogTWFwPHN0cmluZywgeyByb3dJRDogYW55LCByb3dJbmRleDogbnVtYmVyIH0+ID0gbmV3IE1hcCgpO1xuICAgIHByb3RlY3RlZCBkZXN0cm95TWFwOiBNYXA8c3RyaW5nLCBTdWJqZWN0PGJvb2xlYW4+PiA9IG5ldyBNYXA8c3RyaW5nLCBTdWJqZWN0PGJvb2xlYW4+PigpO1xuXG4gICAgcHVibGljIGdldF9jb2x1bW5fYnlfbmFtZShuYW1lOiBzdHJpbmcpOiBJZ3hDb2x1bW5Db21wb25lbnQge1xuICAgICAgICByZXR1cm4gdGhpcy5ncmlkLmNvbHVtbkxpc3QuZmluZCgoY29sKSA9PiBjb2wuZmllbGQgPT09IG5hbWUpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRfc3VtbWFyeV9kYXRhKCkge1xuICAgICAgICBjb25zdCBncmlkID0gdGhpcy5ncmlkO1xuICAgICAgICBsZXQgZGF0YSA9IGdyaWQuZmlsdGVyZWREYXRhO1xuICAgICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgICAgIGlmIChncmlkLnRyYW5zYWN0aW9ucy5lbmFibGVkKSB7XG4gICAgICAgICAgICAgICAgZGF0YSA9IERhdGFVdGlsLm1lcmdlVHJhbnNhY3Rpb25zKFxuICAgICAgICAgICAgICAgICAgICBjbG9uZUFycmF5KGdyaWQuZGF0YSksXG4gICAgICAgICAgICAgICAgICAgIGdyaWQudHJhbnNhY3Rpb25zLmdldEFnZ3JlZ2F0ZWRDaGFuZ2VzKHRydWUpLFxuICAgICAgICAgICAgICAgICAgICBncmlkLnByaW1hcnlLZXlcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGNvbnN0IGRlbGV0ZWRSb3dzID0gZ3JpZC50cmFuc2FjdGlvbnMuZ2V0VHJhbnNhY3Rpb25Mb2coKS5maWx0ZXIodCA9PiB0LnR5cGUgPT09IFRyYW5zYWN0aW9uVHlwZS5ERUxFVEUpLm1hcCh0ID0+IHQuaWQpO1xuICAgICAgICAgICAgICAgIGRlbGV0ZWRSb3dzLmZvckVhY2gocm93SUQgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0ZW1wRGF0YSA9IGdyaWQucHJpbWFyeUtleSA/IGRhdGEubWFwKHJlYyA9PiByZWNbZ3JpZC5wcmltYXJ5S2V5XSkgOiBkYXRhO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBpbmRleCA9IHRlbXBEYXRhLmluZGV4T2Yocm93SUQpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgIGRhdGEuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBkYXRhID0gZ3JpZC5kYXRhO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKiBAaW50ZXJuYWxcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0Um93RGF0YShyb3dJRDogYW55KSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLmdldF9hbGxfZGF0YSh0aGlzLmdyaWQudHJhbnNhY3Rpb25zLmVuYWJsZWQpO1xuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuZ2V0X3Jvd19pbmRleF9pbl9kYXRhKHJvd0lEKTtcbiAgICAgICAgcmV0dXJuIGRhdGFbaW5kZXhdO1xuICAgIH1cblxuICAgIC8vIFRPRE86IFJlZmFjdG9yXG4gICAgcHVibGljIGVzY2FwZV9lZGl0TW9kZSgpIHtcbiAgICAgICAgdGhpcy5ncmlkLmNydWRTZXJ2aWNlLmVuZCgpO1xuICAgIH1cblxuICAgIC8vIFRPRE86IFJlZmFjdG9yXG4gICAgcHVibGljIGdldF9jZWxsX2luRWRpdE1vZGUoKTogSWd4Q2VsbCB7XG4gICAgICAgIHJldHVybiB0aGlzLmdyaWQuY3J1ZFNlcnZpY2UuY2VsbDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0X3Jvd19pbmRleF9pbl9kYXRhKHJvd0lEOiBhbnkpOiBudW1iZXIge1xuICAgICAgICBjb25zdCBncmlkID0gdGhpcy5ncmlkIGFzIElneEdyaWRCYXNlQ29tcG9uZW50O1xuICAgICAgICBpZiAoIWdyaWQpIHtcbiAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkYXRhID0gdGhpcy5nZXRfYWxsX2RhdGEoZ3JpZC50cmFuc2FjdGlvbnMuZW5hYmxlZCk7XG4gICAgICAgIHJldHVybiBncmlkLnByaW1hcnlLZXkgPyBkYXRhLmZpbmRJbmRleChyZWNvcmQgPT4gcmVjb3JkW2dyaWQucHJpbWFyeUtleV0gPT09IHJvd0lEKSA6IGRhdGEuaW5kZXhPZihyb3dJRCk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldF9yb3dfYnlfa2V5KHJvd1NlbGVjdG9yOiBhbnkpOiBJZ3hSb3dDb21wb25lbnQ8SWd4R3JpZEJhc2VDb21wb25lbnQgJiBJR3JpZERhdGFCaW5kYWJsZT4ge1xuICAgICAgICBjb25zdCBwcmltYXJ5S2V5ID0gdGhpcy5ncmlkLnByaW1hcnlLZXk7XG4gICAgICAgIGlmIChwcmltYXJ5S2V5ICE9PSB1bmRlZmluZWQgJiYgcHJpbWFyeUtleSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ3JpZC5kYXRhUm93TGlzdC5maW5kKChyb3cpID0+IHJvdy5yb3dEYXRhW3ByaW1hcnlLZXldID09PSByb3dTZWxlY3Rvcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5ncmlkLmRhdGFSb3dMaXN0LmZpbmQoKHJvdykgPT4gcm93LnJvd0RhdGEgPT09IHJvd1NlbGVjdG9yKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBnZXRfcm93X2J5X2luZGV4KHJvd0luZGV4OiBudW1iZXIpOiBJZ3hSb3dDb21wb25lbnQ8SWd4R3JpZEJhc2VDb21wb25lbnQgJiBJR3JpZERhdGFCaW5kYWJsZT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5ncmlkLnJvd0xpc3QuZmluZCgocm93KSA9PiByb3cuaW5kZXggPT09IHJvd0luZGV4KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0X2NlbGxfYnlfa2V5KHJvd1NlbGVjdG9yOiBhbnksIGZpZWxkOiBzdHJpbmcpOiBJZ3hHcmlkQ2VsbENvbXBvbmVudCB7XG4gICAgICAgIGNvbnN0IHJvdyA9IHRoaXMuZ2V0X3Jvd19ieV9rZXkocm93U2VsZWN0b3IpO1xuICAgICAgICBpZiAocm93ICYmIHJvdy5jZWxscykge1xuICAgICAgICAgICAgcmV0dXJuIHJvdy5jZWxscy5maW5kKChjZWxsKSA9PiBjZWxsLmNvbHVtbi5maWVsZCA9PT0gZmllbGQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGdldF9jZWxsX2J5X2luZGV4KHJvd0luZGV4OiBudW1iZXIsIGNvbHVtbkluZGV4OiBudW1iZXIpOiBJZ3hHcmlkQ2VsbENvbXBvbmVudCB7XG4gICAgICAgIGNvbnN0IHJvdyA9IHRoaXMuZ2V0X3Jvd19ieV9pbmRleChyb3dJbmRleCk7XG4gICAgICAgIGlmIChyb3cgJiYgcm93LmNlbGxzKSB7XG4gICAgICAgICAgICByZXR1cm4gcm93LmNlbGxzLmZpbmQoKGNlbGwpID0+IGNlbGwuY29sdW1uSW5kZXggPT09IGNvbHVtbkluZGV4KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBnZXRfY2VsbF9ieV92aXNpYmxlX2luZGV4KHJvd0luZGV4OiBudW1iZXIsIGNvbHVtbkluZGV4OiBudW1iZXIpOiBJZ3hHcmlkQ2VsbENvbXBvbmVudCB7XG4gICAgICAgIGNvbnN0IHJvdyA9IHRoaXMuZ2V0X3Jvd19ieV9pbmRleChyb3dJbmRleCk7XG4gICAgICAgIGlmIChyb3cgJiYgcm93LmNlbGxzKSB7XG4gICAgICAgICAgICByZXR1cm4gcm93LmNlbGxzLmZpbmQoKGNlbGwpID0+IGNlbGwudmlzaWJsZUNvbHVtbkluZGV4ID09PSBjb2x1bW5JbmRleCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgc3VibWl0X3ZhbHVlKCkge1xuICAgICAgICBjb25zdCBjZWxsID0gdGhpcy5ncmlkLmNydWRTZXJ2aWNlLmNlbGw7XG4gICAgICAgIGlmIChjZWxsKSB7XG4gICAgICAgICAgICBjb25zdCBhcmdzID0gdGhpcy51cGRhdGVfY2VsbChjZWxsLCBjZWxsLmVkaXRWYWx1ZSk7XG4gICAgICAgICAgICBpZiAoYXJncy5jYW5jZWwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmVzY2FwZV9lZGl0TW9kZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXBkYXRlX2NlbGwoY2VsbDogSWd4Q2VsbCwgdmFsdWU6IGFueSkge1xuICAgICAgICBjb25zdCBkYXRhID0gdGhpcy5nZXRfYWxsX2RhdGEodGhpcy5ncmlkLnRyYW5zYWN0aW9ucy5lbmFibGVkKTtcbiAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLmdldF9yb3dfaW5kZXhfaW5fZGF0YShjZWxsLmlkLnJvd0lEKTtcblxuICAgICAgICBjZWxsLmVkaXRWYWx1ZSA9IHZhbHVlO1xuXG4gICAgICAgIGNvbnN0IGFyZ3MgPSBjZWxsLmNyZWF0ZUVkaXRFdmVudEFyZ3MoKTtcblxuICAgICAgICB0aGlzLmdyaWQub25DZWxsRWRpdC5lbWl0KGFyZ3MpO1xuICAgICAgICBpZiAoYXJncy5jYW5jZWwpIHtcbiAgICAgICAgICAgIHJldHVybiBhcmdzO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ2FzdCB0byBudW1iZXIgYWZ0ZXIgZW1pdFxuICAgICAgICAvLyBUT0RPOiBDbGVhbiB1cCB0aGlzXG4gICAgICAgIGFyZ3MubmV3VmFsdWUgPSBjZWxsLmNhc3RUb051bWJlcihhcmdzLm5ld1ZhbHVlKTtcblxuICAgICAgICBpZiAoaXNFcXVhbChhcmdzLm9sZFZhbHVlLCBhcmdzLm5ld1ZhbHVlKSkge1xuICAgICAgICAgICAgcmV0dXJuIGFyZ3M7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmdyaWQuc3VtbWFyeVNlcnZpY2UuY2xlYXJTdW1tYXJ5Q2FjaGUoYXJncyk7XG4gICAgICAgIHRoaXMudXBkYXRlRGF0YSh0aGlzLmdyaWQsIGNlbGwuaWQucm93SUQsIGRhdGFbaW5kZXhdLCBjZWxsLnJvd0RhdGEsIHsgW2NlbGwuY29sdW1uLmZpZWxkIF06IGFyZ3MubmV3VmFsdWUgfSk7XG4gICAgICAgIGlmICh0aGlzLmdyaWQucHJpbWFyeUtleSA9PT0gY2VsbC5jb2x1bW4uZmllbGQpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmdyaWQuc2VsZWN0aW9uLmlzX2l0ZW1fc2VsZWN0ZWQodGhpcy5ncmlkLmlkLCBjZWxsLmlkLnJvd0lEKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZ3JpZC5zZWxlY3Rpb24uZGVzZWxlY3RfaXRlbSh0aGlzLmdyaWQuaWQsIGNlbGwuaWQucm93SUQpO1xuICAgICAgICAgICAgICAgIHRoaXMuZ3JpZC5zZWxlY3Rpb24uc2VsZWN0X2l0ZW0odGhpcy5ncmlkLmlkLCBhcmdzLm5ld1ZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmdyaWQuaGFzU3VtbWFyaXplZENvbHVtbnMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdyaWQuc3VtbWFyeVNlcnZpY2UucmVtb3ZlU3VtbWFyaWVzKGNlbGwuaWQucm93SUQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5ncmlkLnJvd0VkaXRhYmxlIHx8ICF0aGlzLmdyaWQuY3J1ZFNlcnZpY2Uucm93IHx8XG4gICAgICAgICAgICAgICAgdGhpcy5ncmlkLmNydWRTZXJ2aWNlLnJvdy5pZCAhPT0gY2VsbC5pZC5yb3dJRCB8fCAhdGhpcy5ncmlkLnRyYW5zYWN0aW9ucy5lbmFibGVkKSB7XG4gICAgICAgICAgICB0aGlzLmdyaWQuc3VtbWFyeVNlcnZpY2UuY2xlYXJTdW1tYXJ5Q2FjaGUoYXJncyk7XG4gICAgICAgICAgICAodGhpcy5ncmlkIGFzIGFueSkuX3BpcGVUcmlnZ2VyKys7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYXJncztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGVzIHJlbGF0ZWQgcm93IG9mIHByb3ZpZGVkIGdyaWQncyBkYXRhIHNvdXJjZSB3aXRoIHByb3ZpZGVkIG5ldyByb3cgdmFsdWVcbiAgICAgKiBAcGFyYW0gZ3JpZCBHcmlkIHRvIHVwZGF0ZSBkYXRhIGZvclxuICAgICAqIEBwYXJhbSByb3dJRCBJRCBvZiB0aGUgcm93IHRvIHVwZGF0ZVxuICAgICAqIEBwYXJhbSByb3dWYWx1ZUluRGF0YVNvdXJjZSBJbml0aWFsIHZhbHVlIG9mIHRoZSByb3cgYXMgaXQgaXMgaW4gZGF0YSBzb3VyY2VcbiAgICAgKiBAcGFyYW0gcm93Q3VycmVudFZhbHVlIEN1cnJlbnQgdmFsdWUgb2YgdGhlIHJvdyBhcyBpdCBpcyB3aXRoIGFwcGxpZWQgcHJldmlvdXMgdHJhbnNhY3Rpb25zXG4gICAgICogQHBhcmFtIHJvd05ld1ZhbHVlIE5ldyB2YWx1ZSBvZiB0aGUgcm93XG4gICAgICovXG4gICAgcHJvdGVjdGVkIHVwZGF0ZURhdGEoZ3JpZCwgcm93SUQsIHJvd1ZhbHVlSW5EYXRhU291cmNlOiBhbnksIHJvd0N1cnJlbnRWYWx1ZTogYW55LCByb3dOZXdWYWx1ZToge1t4OiBzdHJpbmddOiBhbnl9KSB7XG4gICAgICAgIGlmIChncmlkLnRyYW5zYWN0aW9ucy5lbmFibGVkKSB7XG4gICAgICAgICAgICBjb25zdCB0cmFuc2FjdGlvbjogVHJhbnNhY3Rpb24gPSB7XG4gICAgICAgICAgICAgICAgaWQ6IHJvd0lELFxuICAgICAgICAgICAgICAgIHR5cGU6IFRyYW5zYWN0aW9uVHlwZS5VUERBVEUsXG4gICAgICAgICAgICAgICAgbmV3VmFsdWU6IHJvd05ld1ZhbHVlXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgZ3JpZC50cmFuc2FjdGlvbnMuYWRkKHRyYW5zYWN0aW9uLCByb3dDdXJyZW50VmFsdWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbWVyZ2VPYmplY3RzKHJvd1ZhbHVlSW5EYXRhU291cmNlLCByb3dOZXdWYWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfdXBkYXRlX3Jvdyhyb3c6IElneFJvdywgdmFsdWU/OiBhbnkpIHtcbiAgICAgICAgY29uc3QgZ3JpZCA9IHRoaXMuZ3JpZDtcblxuICAgICAgICBjb25zdCByb3dJbkVkaXRNb2RlID0gZ3JpZC5jcnVkU2VydmljZS5yb3c7XG4gICAgICAgIHJvdy5uZXdEYXRhID0gdmFsdWUgPyB2YWx1ZSA6IGdyaWQudHJhbnNhY3Rpb25zLmdldEFnZ3JlZ2F0ZWRWYWx1ZShyb3cuaWQsIHRydWUpO1xuXG5cbiAgICAgICAgaWYgKHJvd0luRWRpdE1vZGUgJiYgcm93LmlkID09PSByb3dJbkVkaXRNb2RlLmlkKSB7XG4gICAgICAgICAgICByb3cuZGF0YSA9IHsgLi4ucm93LmRhdGEsIC4uLnJvd0luRWRpdE1vZGUudHJhbnNhY3Rpb25TdGF0ZSB9O1xuICAgICAgICAvLyBUT0RPOiBXb3JrYXJvdW5kIGZvciB1cGRhdGluZyBhIHJvdyBpbiBlZGl0IG1vZGUgdGhyb3VnaCB0aGUgQVBJXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5ncmlkLnRyYW5zYWN0aW9ucy5lbmFibGVkKSB7XG4gICAgICAgICAgICBjb25zdCBsYXN0Q29tbWl0ZWRWYWx1ZSA9IGdyaWQudHJhbnNhY3Rpb25zLmdldFN0YXRlKHJvdy5pZCkgP1xuICAgICAgICAgICAgICAgIGdyaWQudHJhbnNhY3Rpb25zLmdldFN0YXRlKHJvdy5pZCkudmFsdWUgOiBudWxsO1xuICAgICAgICAgICAgcm93LmRhdGEgPSBsYXN0Q29tbWl0ZWRWYWx1ZSA/IE9iamVjdC5hc3NpZ24ocm93LmRhdGEsIGxhc3RDb21taXRlZFZhbHVlKSA6IHJvdy5kYXRhO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXBkYXRlX3Jvdyhyb3c6IElneFJvdywgdmFsdWU6IGFueSkge1xuICAgICAgICBjb25zdCBncmlkID0gdGhpcy5ncmlkO1xuICAgICAgICBjb25zdCBzZWxlY3RlZCA9IGdyaWQuc2VsZWN0aW9uLmlzX2l0ZW1fc2VsZWN0ZWQoZ3JpZC5pZCwgcm93LmlkKTtcbiAgICAgICAgY29uc3Qgcm93SW5FZGl0TW9kZSA9IGdyaWQuY3J1ZFNlcnZpY2Uucm93O1xuICAgICAgICBjb25zdCBkYXRhID0gdGhpcy5nZXRfYWxsX2RhdGEoZ3JpZC50cmFuc2FjdGlvbnMuZW5hYmxlZCk7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5nZXRfcm93X2luZGV4X2luX2RhdGEocm93LmlkKTtcbiAgICAgICAgY29uc3QgaGFzU3VtbWFyaXplZCA9IGdyaWQuaGFzU3VtbWFyaXplZENvbHVtbnM7XG5cbiAgICAgICAgdGhpcy5fdXBkYXRlX3Jvdyhyb3csIHZhbHVlKTtcblxuICAgICAgICBjb25zdCBhcmdzID0gcm93LmNyZWF0ZUVkaXRFdmVudEFyZ3MoKTtcblxuICAgICAgICAvLyBJZiBubyB2YWxpZCByb3cgaXMgZm91bmRcbiAgICAgICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgICAgICAgcmV0dXJuIGFyZ3M7XG4gICAgICAgIH1cblxuICAgICAgICBncmlkLm9uUm93RWRpdC5lbWl0KGFyZ3MpO1xuXG4gICAgICAgIGlmIChhcmdzLmNhbmNlbCkge1xuICAgICAgICAgICAgcmV0dXJuIGFyZ3M7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocm93SW5FZGl0TW9kZSkge1xuICAgICAgICAgICAgY29uc3QgaGFzQ2hhbmdlcyA9IGdyaWQudHJhbnNhY3Rpb25zLmdldFN0YXRlKGFyZ3Mucm93SUQsIHRydWUpO1xuICAgICAgICAgICAgZ3JpZC50cmFuc2FjdGlvbnMuZW5kUGVuZGluZyhmYWxzZSk7XG4gICAgICAgICAgICBpZiAoIWhhc0NoYW5nZXMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXJncztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghYXJncy5uZXdWYWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIGFyZ3M7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaGFzU3VtbWFyaXplZCkge1xuICAgICAgICAgICAgZ3JpZC5zdW1tYXJ5U2VydmljZS5yZW1vdmVTdW1tYXJpZXMoYXJncy5yb3dJRCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnVwZGF0ZURhdGEoZ3JpZCwgcm93LmlkLCBkYXRhW2luZGV4XSwgYXJncy5vbGRWYWx1ZSwgYXJncy5uZXdWYWx1ZSk7XG4gICAgICAgIGNvbnN0IG5ld0lkID0gZ3JpZC5wcmltYXJ5S2V5ID8gYXJncy5uZXdWYWx1ZVtncmlkLnByaW1hcnlLZXldIDogYXJncy5uZXdWYWx1ZTtcbiAgICAgICAgaWYgKHNlbGVjdGVkKSB7XG4gICAgICAgICAgICBncmlkLnNlbGVjdGlvbi5kZXNlbGVjdF9pdGVtKGdyaWQuaWQsIHJvdy5pZCk7XG4gICAgICAgICAgICBncmlkLnNlbGVjdGlvbi5zZWxlY3RfaXRlbShncmlkLmlkLCBuZXdJZCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGhhc1N1bW1hcml6ZWQpIHtcbiAgICAgICAgICAgIGdyaWQuc3VtbWFyeVNlcnZpY2UucmVtb3ZlU3VtbWFyaWVzKG5ld0lkKTtcbiAgICAgICAgfVxuICAgICAgICAoZ3JpZCBhcyBhbnkpLl9waXBlVHJpZ2dlcisrO1xuXG4gICAgICAgIHJldHVybiBhcmdzO1xuICAgIH1cblxuXG5cbiAgICBwcm90ZWN0ZWQgdXBkYXRlX3Jvd19pbl9hcnJheSh2YWx1ZTogYW55LCByb3dJRDogYW55LCBpbmRleDogbnVtYmVyKSB7XG4gICAgICAgIGNvbnN0IGdyaWQgPSB0aGlzLmdyaWQ7XG4gICAgICAgIGdyaWQuZGF0YVtpbmRleF0gPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc29ydChleHByZXNzaW9uOiBJU29ydGluZ0V4cHJlc3Npb24pOiB2b2lkIHtcbiAgICAgICAgaWYgKGV4cHJlc3Npb24uZGlyID09PSBTb3J0aW5nRGlyZWN0aW9uLk5vbmUpIHtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlX2dyb3VwaW5nX2V4cHJlc3Npb24oZXhwcmVzc2lvbi5maWVsZE5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHNvcnRpbmdTdGF0ZSA9IGNsb25lQXJyYXkodGhpcy5ncmlkLnNvcnRpbmdFeHByZXNzaW9ucyk7XG4gICAgICAgIHRoaXMucHJlcGFyZV9zb3J0aW5nX2V4cHJlc3Npb24oW3NvcnRpbmdTdGF0ZV0sIGV4cHJlc3Npb24pO1xuICAgICAgICB0aGlzLmdyaWQuc29ydGluZ0V4cHJlc3Npb25zID0gc29ydGluZ1N0YXRlO1xuICAgIH1cblxuICAgIHB1YmxpYyBzb3J0X211bHRpcGxlKGV4cHJlc3Npb25zOiBJU29ydGluZ0V4cHJlc3Npb25bXSk6IHZvaWQge1xuICAgICAgICBjb25zdCBzb3J0aW5nU3RhdGUgPSBjbG9uZUFycmF5KHRoaXMuZ3JpZC5zb3J0aW5nRXhwcmVzc2lvbnMpO1xuXG4gICAgICAgIGZvciAoY29uc3QgZWFjaCBvZiBleHByZXNzaW9ucykge1xuICAgICAgICAgICAgaWYgKGVhY2guZGlyID09PSBTb3J0aW5nRGlyZWN0aW9uLk5vbmUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZV9ncm91cGluZ19leHByZXNzaW9uKGVhY2guZmllbGROYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMucHJlcGFyZV9zb3J0aW5nX2V4cHJlc3Npb24oW3NvcnRpbmdTdGF0ZV0sIGVhY2gpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5ncmlkLnNvcnRpbmdFeHByZXNzaW9ucyA9IHNvcnRpbmdTdGF0ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZmlsdGVyKGZpZWxkTmFtZTogc3RyaW5nLCB0ZXJtLCBjb25kaXRpb25PckV4cHJlc3Npb25zVHJlZTogSUZpbHRlcmluZ09wZXJhdGlvbiB8IElGaWx0ZXJpbmdFeHByZXNzaW9uc1RyZWUsXG4gICAgICAgIGlnbm9yZUNhc2U6IGJvb2xlYW4pIHtcbiAgICAgICAgY29uc3QgZ3JpZCA9IHRoaXMuZ3JpZDtcbiAgICAgICAgY29uc3QgZmlsdGVyaW5nVHJlZSA9IGdyaWQuZmlsdGVyaW5nRXhwcmVzc2lvbnNUcmVlO1xuICAgICAgICBncmlkLmVuZEVkaXQoZmFsc2UpO1xuXG4gICAgICAgIGlmIChncmlkLnBhZ2luZykge1xuICAgICAgICAgICAgZ3JpZC5wYWdlID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGZpZWxkRmlsdGVySW5kZXggPSBmaWx0ZXJpbmdUcmVlLmZpbmRJbmRleChmaWVsZE5hbWUpO1xuICAgICAgICBpZiAoZmllbGRGaWx0ZXJJbmRleCA+IC0xKSB7XG4gICAgICAgICAgICBmaWx0ZXJpbmdUcmVlLmZpbHRlcmluZ09wZXJhbmRzLnNwbGljZShmaWVsZEZpbHRlckluZGV4LCAxKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucHJlcGFyZV9maWx0ZXJpbmdfZXhwcmVzc2lvbihmaWx0ZXJpbmdUcmVlLCBmaWVsZE5hbWUsIHRlcm0sIGNvbmRpdGlvbk9yRXhwcmVzc2lvbnNUcmVlLCBpZ25vcmVDYXNlLCBmaWVsZEZpbHRlckluZGV4KTtcbiAgICAgICAgZ3JpZC5maWx0ZXJpbmdFeHByZXNzaW9uc1RyZWUgPSBmaWx0ZXJpbmdUcmVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBmaWx0ZXJfZ2xvYmFsKHRlcm0sIGNvbmRpdGlvbiwgaWdub3JlQ2FzZSkge1xuICAgICAgICBpZiAoIWNvbmRpdGlvbikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZ3JpZCA9IHRoaXMuZ3JpZDtcbiAgICAgICAgY29uc3QgZmlsdGVyaW5nVHJlZSA9IGdyaWQuZmlsdGVyaW5nRXhwcmVzc2lvbnNUcmVlO1xuICAgICAgICBncmlkLmVuZEVkaXQoZmFsc2UpO1xuICAgICAgICBpZiAoZ3JpZC5wYWdpbmcpIHtcbiAgICAgICAgICAgIGdyaWQucGFnZSA9IDA7XG4gICAgICAgIH1cblxuICAgICAgICBmaWx0ZXJpbmdUcmVlLmZpbHRlcmluZ09wZXJhbmRzID0gW107XG4gICAgICAgIGZvciAoY29uc3QgY29sdW1uIG9mIGdyaWQuY29sdW1ucykge1xuICAgICAgICAgICAgdGhpcy5wcmVwYXJlX2ZpbHRlcmluZ19leHByZXNzaW9uKGZpbHRlcmluZ1RyZWUsIGNvbHVtbi5maWVsZCwgdGVybSxcbiAgICAgICAgICAgICAgICBjb25kaXRpb24sIGlnbm9yZUNhc2UgfHwgY29sdW1uLmZpbHRlcmluZ0lnbm9yZUNhc2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgZ3JpZC5maWx0ZXJpbmdFeHByZXNzaW9uc1RyZWUgPSBmaWx0ZXJpbmdUcmVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBjbGVhcl9maWx0ZXIoZmllbGROYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKGZpZWxkTmFtZSkge1xuICAgICAgICAgICAgY29uc3QgY29sdW1uID0gdGhpcy5nZXRfY29sdW1uX2J5X25hbWUoZmllbGROYW1lKTtcbiAgICAgICAgICAgIGlmICghY29sdW1uKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZ3JpZCA9IHRoaXMuZ3JpZDtcbiAgICAgICAgZ3JpZC5lbmRFZGl0KGZhbHNlKTtcbiAgICAgICAgY29uc3QgZmlsdGVyaW5nU3RhdGUgPSBncmlkLmZpbHRlcmluZ0V4cHJlc3Npb25zVHJlZTtcbiAgICAgICAgY29uc3QgaW5kZXggPSBmaWx0ZXJpbmdTdGF0ZS5maW5kSW5kZXgoZmllbGROYW1lKTtcblxuICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICAgICAgZmlsdGVyaW5nU3RhdGUuZmlsdGVyaW5nT3BlcmFuZHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgfSBlbHNlIGlmICghZmllbGROYW1lKSB7XG4gICAgICAgICAgICBmaWx0ZXJpbmdTdGF0ZS5maWx0ZXJpbmdPcGVyYW5kcyA9IFtdO1xuICAgICAgICB9XG5cbiAgICAgICAgZ3JpZC5maWx0ZXJpbmdFeHByZXNzaW9uc1RyZWUgPSBmaWx0ZXJpbmdTdGF0ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgY2xlYXJfc29ydChmaWVsZE5hbWU6IHN0cmluZykge1xuICAgICAgICBjb25zdCBzb3J0aW5nU3RhdGUgPSB0aGlzLmdyaWQuc29ydGluZ0V4cHJlc3Npb25zO1xuICAgICAgICBjb25zdCBpbmRleCA9IHNvcnRpbmdTdGF0ZS5maW5kSW5kZXgoKGV4cHIpID0+IGV4cHIuZmllbGROYW1lID09PSBmaWVsZE5hbWUpO1xuICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICAgICAgc29ydGluZ1N0YXRlLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICB0aGlzLmdyaWQuc29ydGluZ0V4cHJlc3Npb25zID0gc29ydGluZ1N0YXRlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHByZXBhcmVfZmlsdGVyaW5nX2V4cHJlc3Npb24oZmlsdGVyaW5nU3RhdGU6IElGaWx0ZXJpbmdFeHByZXNzaW9uc1RyZWUsIGZpZWxkTmFtZTogc3RyaW5nLCBzZWFyY2hWYWwsXG4gICAgICAgIGNvbmRpdGlvbk9yRXhwcmVzc2lvbnNUcmVlOiBJRmlsdGVyaW5nT3BlcmF0aW9uIHwgSUZpbHRlcmluZ0V4cHJlc3Npb25zVHJlZSwgaWdub3JlQ2FzZTogYm9vbGVhbiwgaW5zZXJ0QXRJbmRleCA9IC0xKSB7XG5cbiAgICAgICAgbGV0IG5ld0V4cHJlc3Npb25zVHJlZTtcbiAgICAgICAgY29uc3Qgb2xkRXhwcmVzc2lvbnNUcmVlSW5kZXggPSBmaWx0ZXJpbmdTdGF0ZS5maW5kSW5kZXgoZmllbGROYW1lKTtcbiAgICAgICAgY29uc3QgZXhwcmVzc2lvbnNUcmVlID0gY29uZGl0aW9uT3JFeHByZXNzaW9uc1RyZWUgaW5zdGFuY2VvZiBGaWx0ZXJpbmdFeHByZXNzaW9uc1RyZWUgP1xuICAgICAgICAgICAgY29uZGl0aW9uT3JFeHByZXNzaW9uc1RyZWUgYXMgSUZpbHRlcmluZ0V4cHJlc3Npb25zVHJlZSA6IG51bGw7XG4gICAgICAgIGNvbnN0IGNvbmRpdGlvbiA9IGNvbmRpdGlvbk9yRXhwcmVzc2lvbnNUcmVlIGluc3RhbmNlb2YgRmlsdGVyaW5nRXhwcmVzc2lvbnNUcmVlID9cbiAgICAgICAgICAgIG51bGwgOiBjb25kaXRpb25PckV4cHJlc3Npb25zVHJlZSBhcyBJRmlsdGVyaW5nT3BlcmF0aW9uO1xuICAgICAgICBjb25zdCBuZXdFeHByZXNzaW9uOiBJRmlsdGVyaW5nRXhwcmVzc2lvbiA9IHsgZmllbGROYW1lLCBzZWFyY2hWYWwsIGNvbmRpdGlvbiwgaWdub3JlQ2FzZSB9O1xuXG4gICAgICAgIGlmIChvbGRFeHByZXNzaW9uc1RyZWVJbmRleCA9PT0gLTEpIHtcbiAgICAgICAgICAgIC8vIG5vIGV4cHJlc3Npb25zIHRyZWUgZm91bmQgZm9yIHRoaXMgZmllbGRcbiAgICAgICAgICAgIGlmIChleHByZXNzaW9uc1RyZWUpIHtcbiAgICAgICAgICAgICAgICBpZiAoaW5zZXJ0QXRJbmRleCA+IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcmluZ1N0YXRlLmZpbHRlcmluZ09wZXJhbmRzLnNwbGljZShpbnNlcnRBdEluZGV4LCAwLCBleHByZXNzaW9uc1RyZWUpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcmluZ1N0YXRlLmZpbHRlcmluZ09wZXJhbmRzLnB1c2goZXhwcmVzc2lvbnNUcmVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNvbmRpdGlvbikge1xuICAgICAgICAgICAgICAgIC8vIGNyZWF0ZSBleHByZXNzaW9ucyB0cmVlIGZvciB0aGlzIGZpZWxkIGFuZCBhZGQgdGhlIG5ldyBleHByZXNzaW9uIHRvIGl0XG4gICAgICAgICAgICAgICAgbmV3RXhwcmVzc2lvbnNUcmVlID0gbmV3IEZpbHRlcmluZ0V4cHJlc3Npb25zVHJlZShmaWx0ZXJpbmdTdGF0ZS5vcGVyYXRvciwgZmllbGROYW1lKTtcbiAgICAgICAgICAgICAgICBuZXdFeHByZXNzaW9uc1RyZWUuZmlsdGVyaW5nT3BlcmFuZHMucHVzaChuZXdFeHByZXNzaW9uKTtcbiAgICAgICAgICAgICAgICBmaWx0ZXJpbmdTdGF0ZS5maWx0ZXJpbmdPcGVyYW5kcy5wdXNoKG5ld0V4cHJlc3Npb25zVHJlZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgcHJlcGFyZV9zb3J0aW5nX2V4cHJlc3Npb24oc3RhdGVDb2xsZWN0aW9uczogQXJyYXk8QXJyYXk8YW55Pj4sIGV4cHJlc3Npb246IElTb3J0aW5nRXhwcmVzc2lvbikge1xuICAgICAgICBpZiAoZXhwcmVzc2lvbi5kaXIgPT09IFNvcnRpbmdEaXJlY3Rpb24uTm9uZSkge1xuICAgICAgICAgICAgc3RhdGVDb2xsZWN0aW9ucy5mb3JFYWNoKHN0YXRlID0+IHtcbiAgICAgICAgICAgICAgICBzdGF0ZS5zcGxpY2Uoc3RhdGUuZmluZEluZGV4KChleHByKSA9PiBleHByLmZpZWxkTmFtZSA9PT0gZXhwcmVzc2lvbi5maWVsZE5hbWUpLCAxKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFdlIG5lZWQgdG8gbWFrZSBzdXJlIHRoZSBzdGF0ZXMgaW4gZWFjaCBjb2xsZWN0aW9uIHdpdGggc2FtZSBmaWVsZHMgcG9pbnQgdG8gdGhlIHNhbWUgb2JqZWN0IHJlZmVyZW5jZS5cbiAgICAgICAgICogSWYgdGhlIGRpZmZlcmVudCBzdGF0ZSBjb2xsZWN0aW9ucyBwcm92aWRlZCBoYXZlIGRpZmZlcmVudCBzaXplcyB3ZSBuZWVkIHRvIGdldCB0aGUgbGFyZ2VzdCBvbmUuXG4gICAgICAgICAqIFRoYXQgd2F5IHdlIGNhbiBnZXQgdGhlIHN0YXRlIHJlZmVyZW5jZSBmcm9tIHRoZSBsYXJnZXN0IG9uZSB0aGF0IGhhcyB0aGUgc2FtZSBmaWVsZE5hbWUgYXMgdGhlIGV4cHJlc3Npb24gdG8gcHJlcGFyZS5cbiAgICAgICAgICovXG4gICAgICAgIGxldCBtYXhDb2xsZWN0aW9uID0gc3RhdGVDb2xsZWN0aW9uc1swXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBzdGF0ZUNvbGxlY3Rpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAobWF4Q29sbGVjdGlvbi5sZW5ndGggPCBzdGF0ZUNvbGxlY3Rpb25zW2ldLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIG1heENvbGxlY3Rpb24gPSBzdGF0ZUNvbGxlY3Rpb25zW2ldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG1heEV4cHIgPSBtYXhDb2xsZWN0aW9uLmZpbmQoKGV4cHIpID0+IGV4cHIuZmllbGROYW1lID09PSBleHByZXNzaW9uLmZpZWxkTmFtZSk7XG5cbiAgICAgICAgc3RhdGVDb2xsZWN0aW9ucy5mb3JFYWNoKGNvbGxlY3Rpb24gPT4ge1xuICAgICAgICAgICAgY29uc3QgbXlFeHByID0gY29sbGVjdGlvbi5maW5kKChleHByKSA9PiBleHByLmZpZWxkTmFtZSA9PT0gZXhwcmVzc2lvbi5maWVsZE5hbWUpO1xuICAgICAgICAgICAgaWYgKCFteUV4cHIgJiYgIW1heEV4cHIpIHtcbiAgICAgICAgICAgICAgICAvLyBFeHByZXNzaW9uIHdpdGggdGhpcyBmaWVsZE5hbWUgaXMgbWlzc2luZyBmcm9tIHRoZSBjdXJyZW50IGFuZCB0aGUgbWF4IGNvbGxlY3Rpb24uXG4gICAgICAgICAgICAgICAgY29sbGVjdGlvbi5wdXNoKGV4cHJlc3Npb24pO1xuICAgICAgICAgICAgfSBlbHNlIGlmICghbXlFeHByICYmIG1heEV4cHIpIHtcbiAgICAgICAgICAgICAgICAvLyBFeHByZXNzaW9uIHdpdGggdGhpcyBmaWVsZE5hbWUgaXMgbWlzc2luZyBmcm9tIHRoZSBjdXJyZW50IGFuZCBidXQgdGhlIG1heCBjb2xsZWN0aW9uIGhhcy5cbiAgICAgICAgICAgICAgICBjb2xsZWN0aW9uLnB1c2gobWF4RXhwcik7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihtYXhFeHByLCBleHByZXNzaW9uKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gVGhlIGN1cnJlbnQgY29sbGVjdGlvbiBoYXMgdGhlIGV4cHJlc3Npb24gc28ganVzdCB1cGRhdGUgaXQuXG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihteUV4cHIsIGV4cHJlc3Npb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgcmVtb3ZlX2dyb3VwaW5nX2V4cHJlc3Npb24oZmllbGROYW1lKSB7XG4gICAgfVxuXG4gICAgcHVibGljIHNob3VsZF9hcHBseV9udW1iZXJfc3R5bGUoY29sdW1uOiBJZ3hDb2x1bW5Db21wb25lbnQpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIGNvbHVtbi5kYXRhVHlwZSA9PT0gRGF0YVR5cGUuTnVtYmVyO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRfZGF0YSgpOiBhbnlbXSB7XG4gICAgICAgIGNvbnN0IGdyaWQgPSB0aGlzLmdyaWQ7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBncmlkLmRhdGEgPyBncmlkLmRhdGEgOiBbXTtcbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuXG4gICAgcHVibGljIGdldF9hbGxfZGF0YShpbmNsdWRlVHJhbnNhY3Rpb25zID0gZmFsc2UpOiBhbnlbXSB7XG4gICAgICAgIGNvbnN0IGdyaWQgPSB0aGlzLmdyaWQ7XG4gICAgICAgIGxldCBkYXRhID0gZ3JpZC5kYXRhID8gZ3JpZC5kYXRhIDogW107XG4gICAgICAgIGRhdGEgPSBpbmNsdWRlVHJhbnNhY3Rpb25zID8gZ3JpZC5kYXRhV2l0aEFkZGVkSW5UcmFuc2FjdGlvblJvd3MgOiBkYXRhO1xuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0X2ZpbHRlcmVkX2RhdGEoKTogYW55W10ge1xuICAgICAgICByZXR1cm4gdGhpcy5ncmlkLmZpbHRlcmVkRGF0YTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZ2V0U29ydFN0cmF0ZWd5UGVyQ29sdW1uKGZpZWxkTmFtZTogc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldF9jb2x1bW5fYnlfbmFtZShmaWVsZE5hbWUpID9cbiAgICAgICAgICAgIHRoaXMuZ2V0X2NvbHVtbl9ieV9uYW1lKGZpZWxkTmFtZSkuc29ydFN0cmF0ZWd5IDogdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIHB1YmxpYyBhZGRSb3dUb0RhdGEocm93RGF0YTogYW55KSB7XG4gICAgICAgIC8vIEFkZCByb3cgZ29lcyB0byB0cmFuc2FjdGlvbnMgYW5kIGlmIHJvd0VkaXRhYmxlIGlzIHByb3Blcmx5IGltcGxlbWVudGVkLCBhZGRlZCByb3dzIHdpbGwgZ28gdG8gcGVuZGluZyB0cmFuc2FjdGlvbnNcbiAgICAgICAgLy8gSWYgdGhlcmUgaXMgYSByb3cgaW4gZWRpdCAtID4gY29tbWl0IGFuZCBjbG9zZVxuICAgICAgICBjb25zdCBncmlkID0gdGhpcy5ncmlkO1xuICAgICAgICBpZiAoZ3JpZC50cmFuc2FjdGlvbnMuZW5hYmxlZCkge1xuICAgICAgICAgICAgY29uc3QgdHJhbnNhY3Rpb25JZCA9IGdyaWQucHJpbWFyeUtleSA/IHJvd0RhdGFbZ3JpZC5wcmltYXJ5S2V5XSA6IHJvd0RhdGE7XG4gICAgICAgICAgICBjb25zdCB0cmFuc2FjdGlvbjogVHJhbnNhY3Rpb24gPSB7IGlkOiB0cmFuc2FjdGlvbklkLCB0eXBlOiBUcmFuc2FjdGlvblR5cGUuQURELCBuZXdWYWx1ZTogcm93RGF0YSB9O1xuICAgICAgICAgICAgZ3JpZC50cmFuc2FjdGlvbnMuYWRkKHRyYW5zYWN0aW9uKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGdyaWQuZGF0YS5wdXNoKHJvd0RhdGEpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGRlbGV0ZVJvd0Zyb21EYXRhKHJvd0lEOiBhbnksIGluZGV4OiBudW1iZXIpIHtcbiAgICAgICAgLy8gIGlmIHRoZXJlIGlzIGEgcm93IChpbmRleCAhPT0gMCkgZGVsZXRlIGl0XG4gICAgICAgIC8vICBpZiB0aGVyZSBpcyBhIHJvdyBpbiBBREQgb3IgVVBEQVRFIHN0YXRlIGNoYW5nZSBpdCdzIHN0YXRlIHRvIERFTEVURVxuICAgICAgICBjb25zdCBncmlkID0gdGhpcy5ncmlkO1xuICAgICAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICBpZiAoZ3JpZC50cmFuc2FjdGlvbnMuZW5hYmxlZCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRyYW5zYWN0aW9uOiBUcmFuc2FjdGlvbiA9IHsgaWQ6IHJvd0lELCB0eXBlOiBUcmFuc2FjdGlvblR5cGUuREVMRVRFLCBuZXdWYWx1ZTogbnVsbCB9O1xuICAgICAgICAgICAgICAgIGdyaWQudHJhbnNhY3Rpb25zLmFkZCh0cmFuc2FjdGlvbiwgZ3JpZC5kYXRhW2luZGV4XSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGdyaWQuZGF0YS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3Qgc3RhdGU6IFN0YXRlID0gZ3JpZC50cmFuc2FjdGlvbnMuZ2V0U3RhdGUocm93SUQpO1xuICAgICAgICAgICAgZ3JpZC50cmFuc2FjdGlvbnMuYWRkKHsgaWQ6IHJvd0lELCB0eXBlOiBUcmFuc2FjdGlvblR5cGUuREVMRVRFLCBuZXdWYWx1ZTogbnVsbCB9LCBzdGF0ZSAmJiBzdGF0ZS5yZWNvcmRSZWYpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGRlbGV0ZVJvd0J5SWQocm93SWQ6IGFueSkge1xuICAgICAgICBsZXQgaW5kZXg6IG51bWJlcjtcbiAgICAgICAgY29uc3QgZ3JpZCA9IHRoaXMuZ3JpZDtcbiAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMuZ2V0X2FsbF9kYXRhKCk7XG4gICAgICAgIGlmIChncmlkLnByaW1hcnlLZXkpIHtcbiAgICAgICAgICAgIGluZGV4ID0gZGF0YS5tYXAoKHJlY29yZCkgPT4gcmVjb3JkW2dyaWQucHJpbWFyeUtleV0pLmluZGV4T2Yocm93SWQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaW5kZXggPSBkYXRhLmluZGV4T2Yocm93SWQpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHN0YXRlOiBTdGF0ZSA9IGdyaWQudHJhbnNhY3Rpb25zLmdldFN0YXRlKHJvd0lkKTtcbiAgICAgICAgY29uc3QgaGFzUm93SW5Ob25EZWxldGVkU3RhdGUgPSBzdGF0ZSAmJiBzdGF0ZS50eXBlICE9PSBUcmFuc2FjdGlvblR5cGUuREVMRVRFO1xuXG4gICAgICAgIC8vICBpZiB0aGVyZSBpcyBhIHJvdyAoaW5kZXggIT09IC0xKSBhbmQgdGhlIHdlIGhhdmUgY2VsbCBpbiBlZGl0IG1vZGUgb24gc2FtZSByb3cgZXhpdCBlZGl0IG1vZGVcbiAgICAgICAgLy8gIGlmIHRoZXJlIGlzIG5vIHJvdyAoaW5kZXggPT09IC0xKSwgYnV0IHRoZXJlIGlzIGEgcm93IGluIEFERCBvciBVUERBVEUgc3RhdGUgZG8gYXMgYWJvdmVcbiAgICAgICAgLy8gIE90aGVyd2lzZSBqdXN0IGV4aXQgLSB0aGVyZSBpcyBub3RoaW5nIHRvIGRlbGV0ZVxuICAgICAgICBpZiAoaW5kZXggIT09IC0xIHx8IGhhc1Jvd0luTm9uRGVsZXRlZFN0YXRlKSB7XG4gICAgICAgICAgICAvLyBBbHdheXMgZXhpdCBlZGl0IHdoZW4gcm93IGlzIGRlbGV0ZWRcbiAgICAgICAgICAgIGdyaWQuZW5kRWRpdCh0cnVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vICBUT0RPOiBzaG91bGQgd2UgZW1pdCB0aGlzIHdoZW4gY2FzY2FkZU9uRGVsZXRlIGlzIHRydWUgZm9yIGVhY2ggcm93PyE/IVxuICAgICAgICBncmlkLm9uUm93RGVsZXRlZC5lbWl0KHsgZGF0YTogZGF0YVtpbmRleF0gfSk7XG5cbiAgICAgICAgLy8gIGZpcnN0IGRlc2VsZWN0IHJvdyB0aGVuIGRlbGV0ZSBpdFxuICAgICAgICBpZiAoZ3JpZC5yb3dTZWxlY3RhYmxlICYmIGdyaWQuc2VsZWN0aW9uLmlzX2l0ZW1fc2VsZWN0ZWQoZ3JpZC5pZCwgcm93SWQpKSB7XG4gICAgICAgICAgICBncmlkLmRlc2VsZWN0Um93cyhbcm93SWRdKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGdyaWQuY2hlY2tIZWFkZXJDaGVja2JveFN0YXR1cygpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5kZWxldGVSb3dGcm9tRGF0YShyb3dJZCwgaW5kZXgpO1xuICAgICAgICAoZ3JpZCBhcyBhbnkpLl9waXBlVHJpZ2dlcisrO1xuICAgICAgICBncmlkLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgICAgICAgLy8gRGF0YSBuZWVkcyB0byBiZSByZWNhbGN1bGF0ZWQgaWYgdHJhbnNhY3Rpb25zIGFyZSBpbiBwbGFjZVxuICAgICAgICAvLyBJZiBubyB0cmFuc2FjdGlvbnMsIGBkYXRhYCB3aWxsIGJlIGEgcmVmZXJlbmNlIHRvIHRoZSBncmlkIGdldHRlciwgb3RoZXJ3aXNlIGl0IHdpbGwgYmUgc3RhbGVcbiAgICAgICAgY29uc3QgZGF0YUFmdGVyRGVsZXRlID0gZ3JpZC50cmFuc2FjdGlvbnMuZW5hYmxlZCA/IGdyaWQuZGF0YVdpdGhBZGRlZEluVHJhbnNhY3Rpb25Sb3dzIDogZGF0YTtcbiAgICAgICAgZ3JpZC5yZWZyZXNoU2VhcmNoKCk7XG4gICAgICAgIGlmIChkYXRhQWZ0ZXJEZWxldGUubGVuZ3RoICUgZ3JpZC5wZXJQYWdlID09PSAwICYmIGRhdGFBZnRlckRlbGV0ZS5sZW5ndGggLyBncmlkLnBlclBhZ2UgLSAxIDwgZ3JpZC5wYWdlICYmIGdyaWQucGFnZSAhPT0gMCkge1xuICAgICAgICAgICAgZ3JpZC5wYWdlLS07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0X3Jvd19pZChyb3dEYXRhKSB7XG4gICAgICAgIGNvbnN0IGdyaWQgPSB0aGlzLmdyaWQ7XG4gICAgICAgIHJldHVybiBncmlkLnByaW1hcnlLZXkgPyByb3dEYXRhW2dyaWQucHJpbWFyeUtleV0gOiByb3dEYXRhO1xuICAgIH1cblxuICAgIHB1YmxpYyByb3dfZGVsZXRlZF90cmFuc2FjdGlvbihyb3dJRDogYW55KTogYm9vbGVhbiB7XG4gICAgICAgIGNvbnN0IGdyaWQgPSB0aGlzLmdyaWQ7XG4gICAgICAgIGlmICghZ3JpZCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmICghZ3JpZC50cmFuc2FjdGlvbnMuZW5hYmxlZCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHN0YXRlID0gZ3JpZC50cmFuc2FjdGlvbnMuZ2V0U3RhdGUocm93SUQpO1xuICAgICAgICBpZiAoc3RhdGUpIHtcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZS50eXBlID09PSBUcmFuc2FjdGlvblR5cGUuREVMRVRFO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHB1YmxpYyBhdEluZXhpc3RpbmdQYWdlKCk6IEJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5ncmlkLnRvdGFsUGFnZXMgLSAxID4gdGhpcy5ncmlkLnBhZ2U7XG4gICAgfVxufVxuIl19