/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var GridBaseAPIService = /** @class */ (function () {
    function GridBaseAPIService() {
        this.editCellState = new Map();
        this.editRowState = new Map();
        this.destroyMap = new Map();
    }
    /**
     * @param {?} name
     * @return {?}
     */
    GridBaseAPIService.prototype.get_column_by_name = /**
     * @param {?} name
     * @return {?}
     */
    function (name) {
        return this.grid.columnList.find(function (col) { return col.field === name; });
    };
    /**
     * @return {?}
     */
    GridBaseAPIService.prototype.get_summary_data = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var grid = this.grid;
        /** @type {?} */
        var data = grid.filteredData;
        if (!data) {
            if (grid.transactions.enabled) {
                data = DataUtil.mergeTransactions(cloneArray(grid.data), grid.transactions.getAggregatedChanges(true), grid.primaryKey);
                /** @type {?} */
                var deletedRows = grid.transactions.getTransactionLog().filter(function (t) { return t.type === TransactionType.DELETE; }).map(function (t) { return t.id; });
                deletedRows.forEach(function (rowID) {
                    /** @type {?} */
                    var tempData = grid.primaryKey ? data.map(function (rec) { return rec[grid.primaryKey]; }) : data;
                    /** @type {?} */
                    var index = tempData.indexOf(rowID);
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
    };
    /**
     * @hidden
     * @internal
     */
    /**
     * @hidden
     * \@internal
     * @param {?} rowID
     * @return {?}
     */
    GridBaseAPIService.prototype.getRowData = /**
     * @hidden
     * \@internal
     * @param {?} rowID
     * @return {?}
     */
    function (rowID) {
        /** @type {?} */
        var data = this.get_all_data(this.grid.transactions.enabled);
        /** @type {?} */
        var index = this.get_row_index_in_data(rowID);
        return data[index];
    };
    // TODO: Refactor
    // TODO: Refactor
    /**
     * @return {?}
     */
    GridBaseAPIService.prototype.escape_editMode = 
    // TODO: Refactor
    /**
     * @return {?}
     */
    function () {
        this.grid.crudService.end();
    };
    // TODO: Refactor
    // TODO: Refactor
    /**
     * @return {?}
     */
    GridBaseAPIService.prototype.get_cell_inEditMode = 
    // TODO: Refactor
    /**
     * @return {?}
     */
    function () {
        return this.grid.crudService.cell;
    };
    /**
     * @param {?} rowID
     * @return {?}
     */
    GridBaseAPIService.prototype.get_row_index_in_data = /**
     * @param {?} rowID
     * @return {?}
     */
    function (rowID) {
        /** @type {?} */
        var grid = (/** @type {?} */ (this.grid));
        if (!grid) {
            return -1;
        }
        /** @type {?} */
        var data = this.get_all_data(grid.transactions.enabled);
        return grid.primaryKey ? data.findIndex(function (record) { return record[grid.primaryKey] === rowID; }) : data.indexOf(rowID);
    };
    /**
     * @param {?} rowSelector
     * @return {?}
     */
    GridBaseAPIService.prototype.get_row_by_key = /**
     * @param {?} rowSelector
     * @return {?}
     */
    function (rowSelector) {
        /** @type {?} */
        var primaryKey = this.grid.primaryKey;
        if (primaryKey !== undefined && primaryKey !== null) {
            return this.grid.dataRowList.find(function (row) { return row.rowData[primaryKey] === rowSelector; });
        }
        else {
            return this.grid.dataRowList.find(function (row) { return row.rowData === rowSelector; });
        }
    };
    /**
     * @param {?} rowIndex
     * @return {?}
     */
    GridBaseAPIService.prototype.get_row_by_index = /**
     * @param {?} rowIndex
     * @return {?}
     */
    function (rowIndex) {
        return this.grid.rowList.find(function (row) { return row.index === rowIndex; });
    };
    /**
     * @param {?} rowSelector
     * @param {?} field
     * @return {?}
     */
    GridBaseAPIService.prototype.get_cell_by_key = /**
     * @param {?} rowSelector
     * @param {?} field
     * @return {?}
     */
    function (rowSelector, field) {
        /** @type {?} */
        var row = this.get_row_by_key(rowSelector);
        if (row && row.cells) {
            return row.cells.find(function (cell) { return cell.column.field === field; });
        }
    };
    /**
     * @param {?} rowIndex
     * @param {?} columnIndex
     * @return {?}
     */
    GridBaseAPIService.prototype.get_cell_by_index = /**
     * @param {?} rowIndex
     * @param {?} columnIndex
     * @return {?}
     */
    function (rowIndex, columnIndex) {
        /** @type {?} */
        var row = this.get_row_by_index(rowIndex);
        if (row && row.cells) {
            return row.cells.find(function (cell) { return cell.columnIndex === columnIndex; });
        }
    };
    /**
     * @param {?} rowIndex
     * @param {?} columnIndex
     * @return {?}
     */
    GridBaseAPIService.prototype.get_cell_by_visible_index = /**
     * @param {?} rowIndex
     * @param {?} columnIndex
     * @return {?}
     */
    function (rowIndex, columnIndex) {
        /** @type {?} */
        var row = this.get_row_by_index(rowIndex);
        if (row && row.cells) {
            return row.cells.find(function (cell) { return cell.visibleColumnIndex === columnIndex; });
        }
    };
    /**
     * @return {?}
     */
    GridBaseAPIService.prototype.submit_value = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var cell = this.grid.crudService.cell;
        if (cell) {
            /** @type {?} */
            var args = this.update_cell(cell, cell.editValue);
            if (args.cancel) {
                return;
            }
            this.escape_editMode();
        }
    };
    /**
     * @param {?} cell
     * @param {?} value
     * @return {?}
     */
    GridBaseAPIService.prototype.update_cell = /**
     * @param {?} cell
     * @param {?} value
     * @return {?}
     */
    function (cell, value) {
        var _a;
        /** @type {?} */
        var data = this.get_all_data(this.grid.transactions.enabled);
        /** @type {?} */
        var index = this.get_row_index_in_data(cell.id.rowID);
        cell.editValue = value;
        /** @type {?} */
        var args = cell.createEditEventArgs();
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
        this.updateData(this.grid, cell.id.rowID, data[index], cell.rowData, (_a = {}, _a[cell.column.field] = args.newValue, _a));
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
    };
    /**
     * Updates related row of provided grid's data source with provided new row value
     * @param grid Grid to update data for
     * @param rowID ID of the row to update
     * @param rowValueInDataSource Initial value of the row as it is in data source
     * @param rowCurrentValue Current value of the row as it is with applied previous transactions
     * @param rowNewValue New value of the row
     */
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
    GridBaseAPIService.prototype.updateData = /**
     * Updates related row of provided grid's data source with provided new row value
     * @protected
     * @param {?} grid Grid to update data for
     * @param {?} rowID ID of the row to update
     * @param {?} rowValueInDataSource Initial value of the row as it is in data source
     * @param {?} rowCurrentValue Current value of the row as it is with applied previous transactions
     * @param {?} rowNewValue New value of the row
     * @return {?}
     */
    function (grid, rowID, rowValueInDataSource, rowCurrentValue, rowNewValue) {
        if (grid.transactions.enabled) {
            /** @type {?} */
            var transaction = {
                id: rowID,
                type: TransactionType.UPDATE,
                newValue: rowNewValue
            };
            grid.transactions.add(transaction, rowCurrentValue);
        }
        else {
            mergeObjects(rowValueInDataSource, rowNewValue);
        }
    };
    /**
     * @param {?} row
     * @param {?=} value
     * @return {?}
     */
    GridBaseAPIService.prototype._update_row = /**
     * @param {?} row
     * @param {?=} value
     * @return {?}
     */
    function (row, value) {
        /** @type {?} */
        var grid = this.grid;
        /** @type {?} */
        var rowInEditMode = grid.crudService.row;
        row.newData = value ? value : grid.transactions.getAggregatedValue(row.id, true);
        if (rowInEditMode && row.id === rowInEditMode.id) {
            row.data = tslib_1.__assign({}, row.data, rowInEditMode.transactionState);
            // TODO: Workaround for updating a row in edit mode through the API
        }
        else if (this.grid.transactions.enabled) {
            /** @type {?} */
            var lastCommitedValue = grid.transactions.getState(row.id) ?
                grid.transactions.getState(row.id).value : null;
            row.data = lastCommitedValue ? Object.assign(row.data, lastCommitedValue) : row.data;
        }
    };
    /**
     * @param {?} row
     * @param {?} value
     * @return {?}
     */
    GridBaseAPIService.prototype.update_row = /**
     * @param {?} row
     * @param {?} value
     * @return {?}
     */
    function (row, value) {
        /** @type {?} */
        var grid = this.grid;
        /** @type {?} */
        var selected = grid.selection.is_item_selected(grid.id, row.id);
        /** @type {?} */
        var rowInEditMode = grid.crudService.row;
        /** @type {?} */
        var data = this.get_all_data(grid.transactions.enabled);
        /** @type {?} */
        var index = this.get_row_index_in_data(row.id);
        /** @type {?} */
        var hasSummarized = grid.hasSummarizedColumns;
        this._update_row(row, value);
        /** @type {?} */
        var args = row.createEditEventArgs();
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
            var hasChanges = grid.transactions.getState(args.rowID, true);
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
        var newId = grid.primaryKey ? args.newValue[grid.primaryKey] : args.newValue;
        if (selected) {
            grid.selection.deselect_item(grid.id, row.id);
            grid.selection.select_item(grid.id, newId);
        }
        if (hasSummarized) {
            grid.summaryService.removeSummaries(newId);
        }
        ((/** @type {?} */ (grid)))._pipeTrigger++;
        return args;
    };
    /**
     * @protected
     * @param {?} value
     * @param {?} rowID
     * @param {?} index
     * @return {?}
     */
    GridBaseAPIService.prototype.update_row_in_array = /**
     * @protected
     * @param {?} value
     * @param {?} rowID
     * @param {?} index
     * @return {?}
     */
    function (value, rowID, index) {
        /** @type {?} */
        var grid = this.grid;
        grid.data[index] = value;
    };
    /**
     * @param {?} expression
     * @return {?}
     */
    GridBaseAPIService.prototype.sort = /**
     * @param {?} expression
     * @return {?}
     */
    function (expression) {
        if (expression.dir === SortingDirection.None) {
            this.remove_grouping_expression(expression.fieldName);
        }
        /** @type {?} */
        var sortingState = cloneArray(this.grid.sortingExpressions);
        this.prepare_sorting_expression([sortingState], expression);
        this.grid.sortingExpressions = sortingState;
    };
    /**
     * @param {?} expressions
     * @return {?}
     */
    GridBaseAPIService.prototype.sort_multiple = /**
     * @param {?} expressions
     * @return {?}
     */
    function (expressions) {
        var e_1, _a;
        /** @type {?} */
        var sortingState = cloneArray(this.grid.sortingExpressions);
        try {
            for (var expressions_1 = tslib_1.__values(expressions), expressions_1_1 = expressions_1.next(); !expressions_1_1.done; expressions_1_1 = expressions_1.next()) {
                var each = expressions_1_1.value;
                if (each.dir === SortingDirection.None) {
                    this.remove_grouping_expression(each.fieldName);
                }
                this.prepare_sorting_expression([sortingState], each);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (expressions_1_1 && !expressions_1_1.done && (_a = expressions_1.return)) _a.call(expressions_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        this.grid.sortingExpressions = sortingState;
    };
    /**
     * @param {?} fieldName
     * @param {?} term
     * @param {?} conditionOrExpressionsTree
     * @param {?} ignoreCase
     * @return {?}
     */
    GridBaseAPIService.prototype.filter = /**
     * @param {?} fieldName
     * @param {?} term
     * @param {?} conditionOrExpressionsTree
     * @param {?} ignoreCase
     * @return {?}
     */
    function (fieldName, term, conditionOrExpressionsTree, ignoreCase) {
        /** @type {?} */
        var grid = this.grid;
        /** @type {?} */
        var filteringTree = grid.filteringExpressionsTree;
        grid.endEdit(false);
        if (grid.paging) {
            grid.page = 0;
        }
        /** @type {?} */
        var fieldFilterIndex = filteringTree.findIndex(fieldName);
        if (fieldFilterIndex > -1) {
            filteringTree.filteringOperands.splice(fieldFilterIndex, 1);
        }
        this.prepare_filtering_expression(filteringTree, fieldName, term, conditionOrExpressionsTree, ignoreCase, fieldFilterIndex);
        grid.filteringExpressionsTree = filteringTree;
    };
    /**
     * @param {?} term
     * @param {?} condition
     * @param {?} ignoreCase
     * @return {?}
     */
    GridBaseAPIService.prototype.filter_global = /**
     * @param {?} term
     * @param {?} condition
     * @param {?} ignoreCase
     * @return {?}
     */
    function (term, condition, ignoreCase) {
        var e_2, _a;
        if (!condition) {
            return;
        }
        /** @type {?} */
        var grid = this.grid;
        /** @type {?} */
        var filteringTree = grid.filteringExpressionsTree;
        grid.endEdit(false);
        if (grid.paging) {
            grid.page = 0;
        }
        filteringTree.filteringOperands = [];
        try {
            for (var _b = tslib_1.__values(grid.columns), _c = _b.next(); !_c.done; _c = _b.next()) {
                var column = _c.value;
                this.prepare_filtering_expression(filteringTree, column.field, term, condition, ignoreCase || column.filteringIgnoreCase);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
        grid.filteringExpressionsTree = filteringTree;
    };
    /**
     * @param {?} fieldName
     * @return {?}
     */
    GridBaseAPIService.prototype.clear_filter = /**
     * @param {?} fieldName
     * @return {?}
     */
    function (fieldName) {
        if (fieldName) {
            /** @type {?} */
            var column = this.get_column_by_name(fieldName);
            if (!column) {
                return;
            }
        }
        /** @type {?} */
        var grid = this.grid;
        grid.endEdit(false);
        /** @type {?} */
        var filteringState = grid.filteringExpressionsTree;
        /** @type {?} */
        var index = filteringState.findIndex(fieldName);
        if (index > -1) {
            filteringState.filteringOperands.splice(index, 1);
        }
        else if (!fieldName) {
            filteringState.filteringOperands = [];
        }
        grid.filteringExpressionsTree = filteringState;
    };
    /**
     * @param {?} fieldName
     * @return {?}
     */
    GridBaseAPIService.prototype.clear_sort = /**
     * @param {?} fieldName
     * @return {?}
     */
    function (fieldName) {
        /** @type {?} */
        var sortingState = this.grid.sortingExpressions;
        /** @type {?} */
        var index = sortingState.findIndex(function (expr) { return expr.fieldName === fieldName; });
        if (index > -1) {
            sortingState.splice(index, 1);
            this.grid.sortingExpressions = sortingState;
        }
    };
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
    GridBaseAPIService.prototype.prepare_filtering_expression = /**
     * @protected
     * @param {?} filteringState
     * @param {?} fieldName
     * @param {?} searchVal
     * @param {?} conditionOrExpressionsTree
     * @param {?} ignoreCase
     * @param {?=} insertAtIndex
     * @return {?}
     */
    function (filteringState, fieldName, searchVal, conditionOrExpressionsTree, ignoreCase, insertAtIndex) {
        if (insertAtIndex === void 0) { insertAtIndex = -1; }
        /** @type {?} */
        var newExpressionsTree;
        /** @type {?} */
        var oldExpressionsTreeIndex = filteringState.findIndex(fieldName);
        /** @type {?} */
        var expressionsTree = conditionOrExpressionsTree instanceof FilteringExpressionsTree ?
            (/** @type {?} */ (conditionOrExpressionsTree)) : null;
        /** @type {?} */
        var condition = conditionOrExpressionsTree instanceof FilteringExpressionsTree ?
            null : (/** @type {?} */ (conditionOrExpressionsTree));
        /** @type {?} */
        var newExpression = { fieldName: fieldName, searchVal: searchVal, condition: condition, ignoreCase: ignoreCase };
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
    };
    /**
     * @protected
     * @param {?} stateCollections
     * @param {?} expression
     * @return {?}
     */
    GridBaseAPIService.prototype.prepare_sorting_expression = /**
     * @protected
     * @param {?} stateCollections
     * @param {?} expression
     * @return {?}
     */
    function (stateCollections, expression) {
        if (expression.dir === SortingDirection.None) {
            stateCollections.forEach(function (state) {
                state.splice(state.findIndex(function (expr) { return expr.fieldName === expression.fieldName; }), 1);
            });
            return;
        }
        /**
         * We need to make sure the states in each collection with same fields point to the same object reference.
         * If the different state collections provided have different sizes we need to get the largest one.
         * That way we can get the state reference from the largest one that has the same fieldName as the expression to prepare.
         * @type {?}
         */
        var maxCollection = stateCollections[0];
        for (var i = 1; i < stateCollections.length; i++) {
            if (maxCollection.length < stateCollections[i].length) {
                maxCollection = stateCollections[i];
            }
        }
        /** @type {?} */
        var maxExpr = maxCollection.find(function (expr) { return expr.fieldName === expression.fieldName; });
        stateCollections.forEach(function (collection) {
            /** @type {?} */
            var myExpr = collection.find(function (expr) { return expr.fieldName === expression.fieldName; });
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
    };
    /**
     * @protected
     * @param {?} fieldName
     * @return {?}
     */
    GridBaseAPIService.prototype.remove_grouping_expression = /**
     * @protected
     * @param {?} fieldName
     * @return {?}
     */
    function (fieldName) {
    };
    /**
     * @param {?} column
     * @return {?}
     */
    GridBaseAPIService.prototype.should_apply_number_style = /**
     * @param {?} column
     * @return {?}
     */
    function (column) {
        return column.dataType === DataType.Number;
    };
    /**
     * @return {?}
     */
    GridBaseAPIService.prototype.get_data = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var grid = this.grid;
        /** @type {?} */
        var data = grid.data ? grid.data : [];
        return data;
    };
    /**
     * @param {?=} includeTransactions
     * @return {?}
     */
    GridBaseAPIService.prototype.get_all_data = /**
     * @param {?=} includeTransactions
     * @return {?}
     */
    function (includeTransactions) {
        if (includeTransactions === void 0) { includeTransactions = false; }
        /** @type {?} */
        var grid = this.grid;
        /** @type {?} */
        var data = grid.data ? grid.data : [];
        data = includeTransactions ? grid.dataWithAddedInTransactionRows : data;
        return data;
    };
    /**
     * @return {?}
     */
    GridBaseAPIService.prototype.get_filtered_data = /**
     * @return {?}
     */
    function () {
        return this.grid.filteredData;
    };
    /**
     * @protected
     * @param {?} fieldName
     * @return {?}
     */
    GridBaseAPIService.prototype.getSortStrategyPerColumn = /**
     * @protected
     * @param {?} fieldName
     * @return {?}
     */
    function (fieldName) {
        return this.get_column_by_name(fieldName) ?
            this.get_column_by_name(fieldName).sortStrategy : undefined;
    };
    /**
     * @param {?} rowData
     * @return {?}
     */
    GridBaseAPIService.prototype.addRowToData = /**
     * @param {?} rowData
     * @return {?}
     */
    function (rowData) {
        // Add row goes to transactions and if rowEditable is properly implemented, added rows will go to pending transactions
        // If there is a row in edit - > commit and close
        /** @type {?} */
        var grid = this.grid;
        if (grid.transactions.enabled) {
            /** @type {?} */
            var transactionId = grid.primaryKey ? rowData[grid.primaryKey] : rowData;
            /** @type {?} */
            var transaction = { id: transactionId, type: TransactionType.ADD, newValue: rowData };
            grid.transactions.add(transaction);
        }
        else {
            grid.data.push(rowData);
        }
    };
    /**
     * @param {?} rowID
     * @param {?} index
     * @return {?}
     */
    GridBaseAPIService.prototype.deleteRowFromData = /**
     * @param {?} rowID
     * @param {?} index
     * @return {?}
     */
    function (rowID, index) {
        //  if there is a row (index !== 0) delete it
        //  if there is a row in ADD or UPDATE state change it's state to DELETE
        /** @type {?} */
        var grid = this.grid;
        if (index !== -1) {
            if (grid.transactions.enabled) {
                /** @type {?} */
                var transaction = { id: rowID, type: TransactionType.DELETE, newValue: null };
                grid.transactions.add(transaction, grid.data[index]);
            }
            else {
                grid.data.splice(index, 1);
            }
        }
        else {
            /** @type {?} */
            var state = grid.transactions.getState(rowID);
            grid.transactions.add({ id: rowID, type: TransactionType.DELETE, newValue: null }, state && state.recordRef);
        }
    };
    /**
     * @param {?} rowId
     * @return {?}
     */
    GridBaseAPIService.prototype.deleteRowById = /**
     * @param {?} rowId
     * @return {?}
     */
    function (rowId) {
        /** @type {?} */
        var index;
        /** @type {?} */
        var grid = this.grid;
        /** @type {?} */
        var data = this.get_all_data();
        if (grid.primaryKey) {
            index = data.map(function (record) { return record[grid.primaryKey]; }).indexOf(rowId);
        }
        else {
            index = data.indexOf(rowId);
        }
        /** @type {?} */
        var state = grid.transactions.getState(rowId);
        /** @type {?} */
        var hasRowInNonDeletedState = state && state.type !== TransactionType.DELETE;
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
        var dataAfterDelete = grid.transactions.enabled ? grid.dataWithAddedInTransactionRows : data;
        grid.refreshSearch();
        if (dataAfterDelete.length % grid.perPage === 0 && dataAfterDelete.length / grid.perPage - 1 < grid.page && grid.page !== 0) {
            grid.page--;
        }
    };
    /**
     * @param {?} rowData
     * @return {?}
     */
    GridBaseAPIService.prototype.get_row_id = /**
     * @param {?} rowData
     * @return {?}
     */
    function (rowData) {
        /** @type {?} */
        var grid = this.grid;
        return grid.primaryKey ? rowData[grid.primaryKey] : rowData;
    };
    /**
     * @param {?} rowID
     * @return {?}
     */
    GridBaseAPIService.prototype.row_deleted_transaction = /**
     * @param {?} rowID
     * @return {?}
     */
    function (rowID) {
        /** @type {?} */
        var grid = this.grid;
        if (!grid) {
            return false;
        }
        if (!grid.transactions.enabled) {
            return false;
        }
        /** @type {?} */
        var state = grid.transactions.getState(rowID);
        if (state) {
            return state.type === TransactionType.DELETE;
        }
        return false;
    };
    /**
     * @return {?}
     */
    GridBaseAPIService.prototype.atInexistingPage = /**
     * @return {?}
     */
    function () {
        return this.grid.totalPages - 1 > this.grid.page;
    };
    GridBaseAPIService.decorators = [
        { type: Injectable }
    ];
    return GridBaseAPIService;
}());
export { GridBaseAPIService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9pZ25pdGV1aS1hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL2dyaWRzL2FwaS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbEUsT0FBTyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUVsRSxPQUFPLEVBQXNCLGdCQUFnQixFQUFFLE1BQU0saURBQWlELENBQUM7QUFNdkcsT0FBTyxFQUE2Qix3QkFBd0IsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQ3BILE9BQU8sRUFBZSxlQUFlLEVBQVMsTUFBTSxxQ0FBcUMsQ0FBQzs7Ozs7QUFLMUY7SUFBQTtRQUljLGtCQUFhLEdBQXFCLElBQUksR0FBRyxFQUFlLENBQUM7UUFDekQsaUJBQVksR0FBa0QsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUN4RSxlQUFVLEdBQWtDLElBQUksR0FBRyxFQUE0QixDQUFDO0lBaWhCOUYsQ0FBQzs7Ozs7SUEvZ0JVLCtDQUFrQjs7OztJQUF6QixVQUEwQixJQUFZO1FBQ2xDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFVBQUMsR0FBRyxJQUFLLE9BQUEsR0FBRyxDQUFDLEtBQUssS0FBSyxJQUFJLEVBQWxCLENBQWtCLENBQUMsQ0FBQztJQUNsRSxDQUFDOzs7O0lBRU0sNkNBQWdCOzs7SUFBdkI7O1lBQ1UsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJOztZQUNsQixJQUFJLEdBQUcsSUFBSSxDQUFDLFlBQVk7UUFDNUIsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNQLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUU7Z0JBQzNCLElB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LENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQztJQUNoRSxDQUFDOzs7OztJQUVNLG9EQUF1Qjs7OztJQUE5QixVQUErQixLQUFVOztZQUMvQixJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUk7UUFDdEIsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNQLE9BQU8sS0FBSyxDQUFDO1NBQ2hCO1FBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFO1lBQzVCLE9BQU8sS0FBSyxDQUFDO1NBQ2hCOztZQUNLLEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUM7UUFDL0MsSUFBSSxLQUFLLEVBQUU7WUFDUCxPQUFPLEtBQUssQ0FBQyxJQUFJLEtBQUssZUFBZSxDQUFDLE1BQU0sQ0FBQztTQUNoRDtRQUVELE9BQU8sS0FBSyxDQUFDO0lBQ2pCLENBQUM7Ozs7SUFFTSw2Q0FBZ0I7OztJQUF2QjtRQUNJLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ3JELENBQUM7O2dCQXRoQkosVUFBVTs7SUF1aEJYLHlCQUFDO0NBQUEsQUF2aEJELElBdWhCQztTQXRoQlksa0JBQWtCOzs7SUFFM0Isa0NBQVE7Ozs7O0lBQ1IsMkNBQW1FOzs7OztJQUNuRSwwQ0FBa0Y7Ozs7O0lBQ2xGLHdDQUEwRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGNsb25lQXJyYXksIGlzRXF1YWwsIG1lcmdlT2JqZWN0cyB9IGZyb20gJy4uL2NvcmUvdXRpbHMnO1xuaW1wb3J0IHsgRGF0YVV0aWwsIERhdGFUeXBlIH0gZnJvbSAnLi4vZGF0YS1vcGVyYXRpb25zL2RhdGEtdXRpbCc7XG5pbXBvcnQgeyBJRmlsdGVyaW5nRXhwcmVzc2lvbiB9IGZyb20gJy4uL2RhdGEtb3BlcmF0aW9ucy9maWx0ZXJpbmctZXhwcmVzc2lvbi5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgSVNvcnRpbmdFeHByZXNzaW9uLCBTb3J0aW5nRGlyZWN0aW9uIH0gZnJvbSAnLi4vZGF0YS1vcGVyYXRpb25zL3NvcnRpbmctZXhwcmVzc2lvbi5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgSWd4R3JpZENlbGxDb21wb25lbnQgfSBmcm9tICcuL2NlbGwuY29tcG9uZW50JztcbmltcG9ydCB7IElneENvbHVtbkNvbXBvbmVudCB9IGZyb20gJy4vY29sdW1uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJZ3hHcmlkQmFzZUNvbXBvbmVudCwgSUdyaWREYXRhQmluZGFibGUgfSBmcm9tICcuL2dyaWQtYmFzZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgSWd4Um93Q29tcG9uZW50IH0gZnJvbSAnLi9yb3cuY29tcG9uZW50JztcbmltcG9ydCB7IElGaWx0ZXJpbmdPcGVyYXRpb24gfSBmcm9tICcuLi9kYXRhLW9wZXJhdGlvbnMvZmlsdGVyaW5nLWNvbmRpdGlvbic7XG5pbXBvcnQgeyBJRmlsdGVyaW5nRXhwcmVzc2lvbnNUcmVlLCBGaWx0ZXJpbmdFeHByZXNzaW9uc1RyZWUgfSBmcm9tICcuLi9kYXRhLW9wZXJhdGlvbnMvZmlsdGVyaW5nLWV4cHJlc3Npb25zLXRyZWUnO1xuaW1wb3J0IHsgVHJhbnNhY3Rpb24sIFRyYW5zYWN0aW9uVHlwZSwgU3RhdGUgfSBmcm9tICcuLi9zZXJ2aWNlcy90cmFuc2FjdGlvbi90cmFuc2FjdGlvbic7XG5pbXBvcnQgeyBJZ3hDZWxsLCBJZ3hSb3cgfSBmcm9tICcuLi9jb3JlL2dyaWQtc2VsZWN0aW9uJztcbi8qKlxuICpAaGlkZGVuXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBHcmlkQmFzZUFQSVNlcnZpY2UgPFQgZXh0ZW5kcyBJZ3hHcmlkQmFzZUNvbXBvbmVudCAmIElHcmlkRGF0YUJpbmRhYmxlPiB7XG5cbiAgICBncmlkOiBUO1xuICAgIHByb3RlY3RlZCBlZGl0Q2VsbFN0YXRlOiBNYXA8c3RyaW5nLCBhbnk+ID0gbmV3IE1hcDxzdHJpbmcsIGFueT4oKTtcbiAgICBwcm90ZWN0ZWQgZWRpdFJvd1N0YXRlOiBNYXA8c3RyaW5nLCB7IHJvd0lEOiBhbnksIHJvd0luZGV4OiBudW1iZXIgfT4gPSBuZXcgTWFwKCk7XG4gICAgcHJvdGVjdGVkIGRlc3Ryb3lNYXA6IE1hcDxzdHJpbmcsIFN1YmplY3Q8Ym9vbGVhbj4+ID0gbmV3IE1hcDxzdHJpbmcsIFN1YmplY3Q8Ym9vbGVhbj4+KCk7XG5cbiAgICBwdWJsaWMgZ2V0X2NvbHVtbl9ieV9uYW1lKG5hbWU6IHN0cmluZyk6IElneENvbHVtbkNvbXBvbmVudCB7XG4gICAgICAgIHJldHVybiB0aGlzLmdyaWQuY29sdW1uTGlzdC5maW5kKChjb2wpID0+IGNvbC5maWVsZCA9PT0gbmFtZSk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldF9zdW1tYXJ5X2RhdGEoKSB7XG4gICAgICAgIGNvbnN0IGdyaWQgPSB0aGlzLmdyaWQ7XG4gICAgICAgIGxldCBkYXRhID0gZ3JpZC5maWx0ZXJlZERhdGE7XG4gICAgICAgIGlmICghZGF0YSkge1xuICAgICAgICAgICAgaWYgKGdyaWQudHJhbnNhY3Rpb25zLmVuYWJsZWQpIHtcbiAgICAgICAgICAgICAgICBkYXRhID0gRGF0YVV0aWwubWVyZ2VUcmFuc2FjdGlvbnMoXG4gICAgICAgICAgICAgICAgICAgIGNsb25lQXJyYXkoZ3JpZC5kYXRhKSxcbiAgICAgICAgICAgICAgICAgICAgZ3JpZC50cmFuc2FjdGlvbnMuZ2V0QWdncmVnYXRlZENoYW5nZXModHJ1ZSksXG4gICAgICAgICAgICAgICAgICAgIGdyaWQucHJpbWFyeUtleVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgY29uc3QgZGVsZXRlZFJvd3MgPSBncmlkLnRyYW5zYWN0aW9ucy5nZXRUcmFuc2FjdGlvbkxvZygpLmZpbHRlcih0ID0+IHQudHlwZSA9PT0gVHJhbnNhY3Rpb25UeXBlLkRFTEVURSkubWFwKHQgPT4gdC5pZCk7XG4gICAgICAgICAgICAgICAgZGVsZXRlZFJvd3MuZm9yRWFjaChyb3dJRCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRlbXBEYXRhID0gZ3JpZC5wcmltYXJ5S2V5ID8gZGF0YS5tYXAocmVjID0+IHJlY1tncmlkLnByaW1hcnlLZXldKSA6IGRhdGE7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gdGVtcERhdGEuaW5kZXhPZihyb3dJRCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGRhdGEgPSBncmlkLmRhdGE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqIEBpbnRlcm5hbFxuICAgICAqL1xuICAgIHB1YmxpYyBnZXRSb3dEYXRhKHJvd0lEOiBhbnkpIHtcbiAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMuZ2V0X2FsbF9kYXRhKHRoaXMuZ3JpZC50cmFuc2FjdGlvbnMuZW5hYmxlZCk7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5nZXRfcm93X2luZGV4X2luX2RhdGEocm93SUQpO1xuICAgICAgICByZXR1cm4gZGF0YVtpbmRleF07XG4gICAgfVxuXG4gICAgLy8gVE9ETzogUmVmYWN0b3JcbiAgICBwdWJsaWMgZXNjYXBlX2VkaXRNb2RlKCkge1xuICAgICAgICB0aGlzLmdyaWQuY3J1ZFNlcnZpY2UuZW5kKCk7XG4gICAgfVxuXG4gICAgLy8gVE9ETzogUmVmYWN0b3JcbiAgICBwdWJsaWMgZ2V0X2NlbGxfaW5FZGl0TW9kZSgpOiBJZ3hDZWxsIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ3JpZC5jcnVkU2VydmljZS5jZWxsO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRfcm93X2luZGV4X2luX2RhdGEocm93SUQ6IGFueSk6IG51bWJlciB7XG4gICAgICAgIGNvbnN0IGdyaWQgPSB0aGlzLmdyaWQgYXMgSWd4R3JpZEJhc2VDb21wb25lbnQ7XG4gICAgICAgIGlmICghZ3JpZCkge1xuICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLmdldF9hbGxfZGF0YShncmlkLnRyYW5zYWN0aW9ucy5lbmFibGVkKTtcbiAgICAgICAgcmV0dXJuIGdyaWQucHJpbWFyeUtleSA/IGRhdGEuZmluZEluZGV4KHJlY29yZCA9PiByZWNvcmRbZ3JpZC5wcmltYXJ5S2V5XSA9PT0gcm93SUQpIDogZGF0YS5pbmRleE9mKHJvd0lEKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0X3Jvd19ieV9rZXkocm93U2VsZWN0b3I6IGFueSk6IElneFJvd0NvbXBvbmVudDxJZ3hHcmlkQmFzZUNvbXBvbmVudCAmIElHcmlkRGF0YUJpbmRhYmxlPiB7XG4gICAgICAgIGNvbnN0IHByaW1hcnlLZXkgPSB0aGlzLmdyaWQucHJpbWFyeUtleTtcbiAgICAgICAgaWYgKHByaW1hcnlLZXkgIT09IHVuZGVmaW5lZCAmJiBwcmltYXJ5S2V5ICE9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5ncmlkLmRhdGFSb3dMaXN0LmZpbmQoKHJvdykgPT4gcm93LnJvd0RhdGFbcHJpbWFyeUtleV0gPT09IHJvd1NlbGVjdG9yKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdyaWQuZGF0YVJvd0xpc3QuZmluZCgocm93KSA9PiByb3cucm93RGF0YSA9PT0gcm93U2VsZWN0b3IpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGdldF9yb3dfYnlfaW5kZXgocm93SW5kZXg6IG51bWJlcik6IElneFJvd0NvbXBvbmVudDxJZ3hHcmlkQmFzZUNvbXBvbmVudCAmIElHcmlkRGF0YUJpbmRhYmxlPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmdyaWQucm93TGlzdC5maW5kKChyb3cpID0+IHJvdy5pbmRleCA9PT0gcm93SW5kZXgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRfY2VsbF9ieV9rZXkocm93U2VsZWN0b3I6IGFueSwgZmllbGQ6IHN0cmluZyk6IElneEdyaWRDZWxsQ29tcG9uZW50IHtcbiAgICAgICAgY29uc3Qgcm93ID0gdGhpcy5nZXRfcm93X2J5X2tleShyb3dTZWxlY3Rvcik7XG4gICAgICAgIGlmIChyb3cgJiYgcm93LmNlbGxzKSB7XG4gICAgICAgICAgICByZXR1cm4gcm93LmNlbGxzLmZpbmQoKGNlbGwpID0+IGNlbGwuY29sdW1uLmZpZWxkID09PSBmaWVsZCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0X2NlbGxfYnlfaW5kZXgocm93SW5kZXg6IG51bWJlciwgY29sdW1uSW5kZXg6IG51bWJlcik6IElneEdyaWRDZWxsQ29tcG9uZW50IHtcbiAgICAgICAgY29uc3Qgcm93ID0gdGhpcy5nZXRfcm93X2J5X2luZGV4KHJvd0luZGV4KTtcbiAgICAgICAgaWYgKHJvdyAmJiByb3cuY2VsbHMpIHtcbiAgICAgICAgICAgIHJldHVybiByb3cuY2VsbHMuZmluZCgoY2VsbCkgPT4gY2VsbC5jb2x1bW5JbmRleCA9PT0gY29sdW1uSW5kZXgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGdldF9jZWxsX2J5X3Zpc2libGVfaW5kZXgocm93SW5kZXg6IG51bWJlciwgY29sdW1uSW5kZXg6IG51bWJlcik6IElneEdyaWRDZWxsQ29tcG9uZW50IHtcbiAgICAgICAgY29uc3Qgcm93ID0gdGhpcy5nZXRfcm93X2J5X2luZGV4KHJvd0luZGV4KTtcbiAgICAgICAgaWYgKHJvdyAmJiByb3cuY2VsbHMpIHtcbiAgICAgICAgICAgIHJldHVybiByb3cuY2VsbHMuZmluZCgoY2VsbCkgPT4gY2VsbC52aXNpYmxlQ29sdW1uSW5kZXggPT09IGNvbHVtbkluZGV4KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBzdWJtaXRfdmFsdWUoKSB7XG4gICAgICAgIGNvbnN0IGNlbGwgPSB0aGlzLmdyaWQuY3J1ZFNlcnZpY2UuY2VsbDtcbiAgICAgICAgaWYgKGNlbGwpIHtcbiAgICAgICAgICAgIGNvbnN0IGFyZ3MgPSB0aGlzLnVwZGF0ZV9jZWxsKGNlbGwsIGNlbGwuZWRpdFZhbHVlKTtcbiAgICAgICAgICAgIGlmIChhcmdzLmNhbmNlbCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZXNjYXBlX2VkaXRNb2RlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1cGRhdGVfY2VsbChjZWxsOiBJZ3hDZWxsLCB2YWx1ZTogYW55KSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLmdldF9hbGxfZGF0YSh0aGlzLmdyaWQudHJhbnNhY3Rpb25zLmVuYWJsZWQpO1xuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuZ2V0X3Jvd19pbmRleF9pbl9kYXRhKGNlbGwuaWQucm93SUQpO1xuXG4gICAgICAgIGNlbGwuZWRpdFZhbHVlID0gdmFsdWU7XG5cbiAgICAgICAgY29uc3QgYXJncyA9IGNlbGwuY3JlYXRlRWRpdEV2ZW50QXJncygpO1xuXG4gICAgICAgIHRoaXMuZ3JpZC5vbkNlbGxFZGl0LmVtaXQoYXJncyk7XG4gICAgICAgIGlmIChhcmdzLmNhbmNlbCkge1xuICAgICAgICAgICAgcmV0dXJuIGFyZ3M7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBDYXN0IHRvIG51bWJlciBhZnRlciBlbWl0XG4gICAgICAgIC8vIFRPRE86IENsZWFuIHVwIHRoaXNcbiAgICAgICAgYXJncy5uZXdWYWx1ZSA9IGNlbGwuY2FzdFRvTnVtYmVyKGFyZ3MubmV3VmFsdWUpO1xuXG4gICAgICAgIGlmIChpc0VxdWFsKGFyZ3Mub2xkVmFsdWUsIGFyZ3MubmV3VmFsdWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gYXJncztcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZ3JpZC5zdW1tYXJ5U2VydmljZS5jbGVhclN1bW1hcnlDYWNoZShhcmdzKTtcbiAgICAgICAgdGhpcy51cGRhdGVEYXRhKHRoaXMuZ3JpZCwgY2VsbC5pZC5yb3dJRCwgZGF0YVtpbmRleF0sIGNlbGwucm93RGF0YSwgeyBbY2VsbC5jb2x1bW4uZmllbGQgXTogYXJncy5uZXdWYWx1ZSB9KTtcbiAgICAgICAgaWYgKHRoaXMuZ3JpZC5wcmltYXJ5S2V5ID09PSBjZWxsLmNvbHVtbi5maWVsZCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuZ3JpZC5zZWxlY3Rpb24uaXNfaXRlbV9zZWxlY3RlZCh0aGlzLmdyaWQuaWQsIGNlbGwuaWQucm93SUQpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ncmlkLnNlbGVjdGlvbi5kZXNlbGVjdF9pdGVtKHRoaXMuZ3JpZC5pZCwgY2VsbC5pZC5yb3dJRCk7XG4gICAgICAgICAgICAgICAgdGhpcy5ncmlkLnNlbGVjdGlvbi5zZWxlY3RfaXRlbSh0aGlzLmdyaWQuaWQsIGFyZ3MubmV3VmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuZ3JpZC5oYXNTdW1tYXJpemVkQ29sdW1ucykge1xuICAgICAgICAgICAgICAgIHRoaXMuZ3JpZC5zdW1tYXJ5U2VydmljZS5yZW1vdmVTdW1tYXJpZXMoY2VsbC5pZC5yb3dJRCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLmdyaWQucm93RWRpdGFibGUgfHwgIXRoaXMuZ3JpZC5jcnVkU2VydmljZS5yb3cgfHxcbiAgICAgICAgICAgICAgICB0aGlzLmdyaWQuY3J1ZFNlcnZpY2Uucm93LmlkICE9PSBjZWxsLmlkLnJvd0lEIHx8ICF0aGlzLmdyaWQudHJhbnNhY3Rpb25zLmVuYWJsZWQpIHtcbiAgICAgICAgICAgIHRoaXMuZ3JpZC5zdW1tYXJ5U2VydmljZS5jbGVhclN1bW1hcnlDYWNoZShhcmdzKTtcbiAgICAgICAgICAgICh0aGlzLmdyaWQgYXMgYW55KS5fcGlwZVRyaWdnZXIrKztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBhcmdzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZXMgcmVsYXRlZCByb3cgb2YgcHJvdmlkZWQgZ3JpZCdzIGRhdGEgc291cmNlIHdpdGggcHJvdmlkZWQgbmV3IHJvdyB2YWx1ZVxuICAgICAqIEBwYXJhbSBncmlkIEdyaWQgdG8gdXBkYXRlIGRhdGEgZm9yXG4gICAgICogQHBhcmFtIHJvd0lEIElEIG9mIHRoZSByb3cgdG8gdXBkYXRlXG4gICAgICogQHBhcmFtIHJvd1ZhbHVlSW5EYXRhU291cmNlIEluaXRpYWwgdmFsdWUgb2YgdGhlIHJvdyBhcyBpdCBpcyBpbiBkYXRhIHNvdXJjZVxuICAgICAqIEBwYXJhbSByb3dDdXJyZW50VmFsdWUgQ3VycmVudCB2YWx1ZSBvZiB0aGUgcm93IGFzIGl0IGlzIHdpdGggYXBwbGllZCBwcmV2aW91cyB0cmFuc2FjdGlvbnNcbiAgICAgKiBAcGFyYW0gcm93TmV3VmFsdWUgTmV3IHZhbHVlIG9mIHRoZSByb3dcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgdXBkYXRlRGF0YShncmlkLCByb3dJRCwgcm93VmFsdWVJbkRhdGFTb3VyY2U6IGFueSwgcm93Q3VycmVudFZhbHVlOiBhbnksIHJvd05ld1ZhbHVlOiB7W3g6IHN0cmluZ106IGFueX0pIHtcbiAgICAgICAgaWYgKGdyaWQudHJhbnNhY3Rpb25zLmVuYWJsZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IHRyYW5zYWN0aW9uOiBUcmFuc2FjdGlvbiA9IHtcbiAgICAgICAgICAgICAgICBpZDogcm93SUQsXG4gICAgICAgICAgICAgICAgdHlwZTogVHJhbnNhY3Rpb25UeXBlLlVQREFURSxcbiAgICAgICAgICAgICAgICBuZXdWYWx1ZTogcm93TmV3VmFsdWVcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBncmlkLnRyYW5zYWN0aW9ucy5hZGQodHJhbnNhY3Rpb24sIHJvd0N1cnJlbnRWYWx1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtZXJnZU9iamVjdHMocm93VmFsdWVJbkRhdGFTb3VyY2UsIHJvd05ld1ZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF91cGRhdGVfcm93KHJvdzogSWd4Um93LCB2YWx1ZT86IGFueSkge1xuICAgICAgICBjb25zdCBncmlkID0gdGhpcy5ncmlkO1xuXG4gICAgICAgIGNvbnN0IHJvd0luRWRpdE1vZGUgPSBncmlkLmNydWRTZXJ2aWNlLnJvdztcbiAgICAgICAgcm93Lm5ld0RhdGEgPSB2YWx1ZSA/IHZhbHVlIDogZ3JpZC50cmFuc2FjdGlvbnMuZ2V0QWdncmVnYXRlZFZhbHVlKHJvdy5pZCwgdHJ1ZSk7XG5cblxuICAgICAgICBpZiAocm93SW5FZGl0TW9kZSAmJiByb3cuaWQgPT09IHJvd0luRWRpdE1vZGUuaWQpIHtcbiAgICAgICAgICAgIHJvdy5kYXRhID0geyAuLi5yb3cuZGF0YSwgLi4ucm93SW5FZGl0TW9kZS50cmFuc2FjdGlvblN0YXRlIH07XG4gICAgICAgIC8vIFRPRE86IFdvcmthcm91bmQgZm9yIHVwZGF0aW5nIGEgcm93IGluIGVkaXQgbW9kZSB0aHJvdWdoIHRoZSBBUElcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmdyaWQudHJhbnNhY3Rpb25zLmVuYWJsZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IGxhc3RDb21taXRlZFZhbHVlID0gZ3JpZC50cmFuc2FjdGlvbnMuZ2V0U3RhdGUocm93LmlkKSA/XG4gICAgICAgICAgICAgICAgZ3JpZC50cmFuc2FjdGlvbnMuZ2V0U3RhdGUocm93LmlkKS52YWx1ZSA6IG51bGw7XG4gICAgICAgICAgICByb3cuZGF0YSA9IGxhc3RDb21taXRlZFZhbHVlID8gT2JqZWN0LmFzc2lnbihyb3cuZGF0YSwgbGFzdENvbW1pdGVkVmFsdWUpIDogcm93LmRhdGE7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1cGRhdGVfcm93KHJvdzogSWd4Um93LCB2YWx1ZTogYW55KSB7XG4gICAgICAgIGNvbnN0IGdyaWQgPSB0aGlzLmdyaWQ7XG4gICAgICAgIGNvbnN0IHNlbGVjdGVkID0gZ3JpZC5zZWxlY3Rpb24uaXNfaXRlbV9zZWxlY3RlZChncmlkLmlkLCByb3cuaWQpO1xuICAgICAgICBjb25zdCByb3dJbkVkaXRNb2RlID0gZ3JpZC5jcnVkU2VydmljZS5yb3c7XG4gICAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLmdldF9hbGxfZGF0YShncmlkLnRyYW5zYWN0aW9ucy5lbmFibGVkKTtcbiAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLmdldF9yb3dfaW5kZXhfaW5fZGF0YShyb3cuaWQpO1xuICAgICAgICBjb25zdCBoYXNTdW1tYXJpemVkID0gZ3JpZC5oYXNTdW1tYXJpemVkQ29sdW1ucztcblxuICAgICAgICB0aGlzLl91cGRhdGVfcm93KHJvdywgdmFsdWUpO1xuXG4gICAgICAgIGNvbnN0IGFyZ3MgPSByb3cuY3JlYXRlRWRpdEV2ZW50QXJncygpO1xuXG4gICAgICAgIC8vIElmIG5vIHZhbGlkIHJvdyBpcyBmb3VuZFxuICAgICAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICAgICAgICByZXR1cm4gYXJncztcbiAgICAgICAgfVxuXG4gICAgICAgIGdyaWQub25Sb3dFZGl0LmVtaXQoYXJncyk7XG5cbiAgICAgICAgaWYgKGFyZ3MuY2FuY2VsKSB7XG4gICAgICAgICAgICByZXR1cm4gYXJncztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChyb3dJbkVkaXRNb2RlKSB7XG4gICAgICAgICAgICBjb25zdCBoYXNDaGFuZ2VzID0gZ3JpZC50cmFuc2FjdGlvbnMuZ2V0U3RhdGUoYXJncy5yb3dJRCwgdHJ1ZSk7XG4gICAgICAgICAgICBncmlkLnRyYW5zYWN0aW9ucy5lbmRQZW5kaW5nKGZhbHNlKTtcbiAgICAgICAgICAgIGlmICghaGFzQ2hhbmdlcykge1xuICAgICAgICAgICAgICAgIHJldHVybiBhcmdzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFhcmdzLm5ld1ZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gYXJncztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChoYXNTdW1tYXJpemVkKSB7XG4gICAgICAgICAgICBncmlkLnN1bW1hcnlTZXJ2aWNlLnJlbW92ZVN1bW1hcmllcyhhcmdzLnJvd0lEKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudXBkYXRlRGF0YShncmlkLCByb3cuaWQsIGRhdGFbaW5kZXhdLCBhcmdzLm9sZFZhbHVlLCBhcmdzLm5ld1ZhbHVlKTtcbiAgICAgICAgY29uc3QgbmV3SWQgPSBncmlkLnByaW1hcnlLZXkgPyBhcmdzLm5ld1ZhbHVlW2dyaWQucHJpbWFyeUtleV0gOiBhcmdzLm5ld1ZhbHVlO1xuICAgICAgICBpZiAoc2VsZWN0ZWQpIHtcbiAgICAgICAgICAgIGdyaWQuc2VsZWN0aW9uLmRlc2VsZWN0X2l0ZW0oZ3JpZC5pZCwgcm93LmlkKTtcbiAgICAgICAgICAgIGdyaWQuc2VsZWN0aW9uLnNlbGVjdF9pdGVtKGdyaWQuaWQsIG5ld0lkKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaGFzU3VtbWFyaXplZCkge1xuICAgICAgICAgICAgZ3JpZC5zdW1tYXJ5U2VydmljZS5yZW1vdmVTdW1tYXJpZXMobmV3SWQpO1xuICAgICAgICB9XG4gICAgICAgIChncmlkIGFzIGFueSkuX3BpcGVUcmlnZ2VyKys7XG5cbiAgICAgICAgcmV0dXJuIGFyZ3M7XG4gICAgfVxuXG5cblxuICAgIHByb3RlY3RlZCB1cGRhdGVfcm93X2luX2FycmF5KHZhbHVlOiBhbnksIHJvd0lEOiBhbnksIGluZGV4OiBudW1iZXIpIHtcbiAgICAgICAgY29uc3QgZ3JpZCA9IHRoaXMuZ3JpZDtcbiAgICAgICAgZ3JpZC5kYXRhW2luZGV4XSA9IHZhbHVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBzb3J0KGV4cHJlc3Npb246IElTb3J0aW5nRXhwcmVzc2lvbik6IHZvaWQge1xuICAgICAgICBpZiAoZXhwcmVzc2lvbi5kaXIgPT09IFNvcnRpbmdEaXJlY3Rpb24uTm9uZSkge1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVfZ3JvdXBpbmdfZXhwcmVzc2lvbihleHByZXNzaW9uLmZpZWxkTmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc29ydGluZ1N0YXRlID0gY2xvbmVBcnJheSh0aGlzLmdyaWQuc29ydGluZ0V4cHJlc3Npb25zKTtcbiAgICAgICAgdGhpcy5wcmVwYXJlX3NvcnRpbmdfZXhwcmVzc2lvbihbc29ydGluZ1N0YXRlXSwgZXhwcmVzc2lvbik7XG4gICAgICAgIHRoaXMuZ3JpZC5zb3J0aW5nRXhwcmVzc2lvbnMgPSBzb3J0aW5nU3RhdGU7XG4gICAgfVxuXG4gICAgcHVibGljIHNvcnRfbXVsdGlwbGUoZXhwcmVzc2lvbnM6IElTb3J0aW5nRXhwcmVzc2lvbltdKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHNvcnRpbmdTdGF0ZSA9IGNsb25lQXJyYXkodGhpcy5ncmlkLnNvcnRpbmdFeHByZXNzaW9ucyk7XG5cbiAgICAgICAgZm9yIChjb25zdCBlYWNoIG9mIGV4cHJlc3Npb25zKSB7XG4gICAgICAgICAgICBpZiAoZWFjaC5kaXIgPT09IFNvcnRpbmdEaXJlY3Rpb24uTm9uZSkge1xuICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlX2dyb3VwaW5nX2V4cHJlc3Npb24oZWFjaC5maWVsZE5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5wcmVwYXJlX3NvcnRpbmdfZXhwcmVzc2lvbihbc29ydGluZ1N0YXRlXSwgZWFjaCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmdyaWQuc29ydGluZ0V4cHJlc3Npb25zID0gc29ydGluZ1N0YXRlO1xuICAgIH1cblxuICAgIHB1YmxpYyBmaWx0ZXIoZmllbGROYW1lOiBzdHJpbmcsIHRlcm0sIGNvbmRpdGlvbk9yRXhwcmVzc2lvbnNUcmVlOiBJRmlsdGVyaW5nT3BlcmF0aW9uIHwgSUZpbHRlcmluZ0V4cHJlc3Npb25zVHJlZSxcbiAgICAgICAgaWdub3JlQ2FzZTogYm9vbGVhbikge1xuICAgICAgICBjb25zdCBncmlkID0gdGhpcy5ncmlkO1xuICAgICAgICBjb25zdCBmaWx0ZXJpbmdUcmVlID0gZ3JpZC5maWx0ZXJpbmdFeHByZXNzaW9uc1RyZWU7XG4gICAgICAgIGdyaWQuZW5kRWRpdChmYWxzZSk7XG5cbiAgICAgICAgaWYgKGdyaWQucGFnaW5nKSB7XG4gICAgICAgICAgICBncmlkLnBhZ2UgPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZmllbGRGaWx0ZXJJbmRleCA9IGZpbHRlcmluZ1RyZWUuZmluZEluZGV4KGZpZWxkTmFtZSk7XG4gICAgICAgIGlmIChmaWVsZEZpbHRlckluZGV4ID4gLTEpIHtcbiAgICAgICAgICAgIGZpbHRlcmluZ1RyZWUuZmlsdGVyaW5nT3BlcmFuZHMuc3BsaWNlKGZpZWxkRmlsdGVySW5kZXgsIDEpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5wcmVwYXJlX2ZpbHRlcmluZ19leHByZXNzaW9uKGZpbHRlcmluZ1RyZWUsIGZpZWxkTmFtZSwgdGVybSwgY29uZGl0aW9uT3JFeHByZXNzaW9uc1RyZWUsIGlnbm9yZUNhc2UsIGZpZWxkRmlsdGVySW5kZXgpO1xuICAgICAgICBncmlkLmZpbHRlcmluZ0V4cHJlc3Npb25zVHJlZSA9IGZpbHRlcmluZ1RyZWU7XG4gICAgfVxuXG4gICAgcHVibGljIGZpbHRlcl9nbG9iYWwodGVybSwgY29uZGl0aW9uLCBpZ25vcmVDYXNlKSB7XG4gICAgICAgIGlmICghY29uZGl0aW9uKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBncmlkID0gdGhpcy5ncmlkO1xuICAgICAgICBjb25zdCBmaWx0ZXJpbmdUcmVlID0gZ3JpZC5maWx0ZXJpbmdFeHByZXNzaW9uc1RyZWU7XG4gICAgICAgIGdyaWQuZW5kRWRpdChmYWxzZSk7XG4gICAgICAgIGlmIChncmlkLnBhZ2luZykge1xuICAgICAgICAgICAgZ3JpZC5wYWdlID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGZpbHRlcmluZ1RyZWUuZmlsdGVyaW5nT3BlcmFuZHMgPSBbXTtcbiAgICAgICAgZm9yIChjb25zdCBjb2x1bW4gb2YgZ3JpZC5jb2x1bW5zKSB7XG4gICAgICAgICAgICB0aGlzLnByZXBhcmVfZmlsdGVyaW5nX2V4cHJlc3Npb24oZmlsdGVyaW5nVHJlZSwgY29sdW1uLmZpZWxkLCB0ZXJtLFxuICAgICAgICAgICAgICAgIGNvbmRpdGlvbiwgaWdub3JlQ2FzZSB8fCBjb2x1bW4uZmlsdGVyaW5nSWdub3JlQ2FzZSk7XG4gICAgICAgIH1cblxuICAgICAgICBncmlkLmZpbHRlcmluZ0V4cHJlc3Npb25zVHJlZSA9IGZpbHRlcmluZ1RyZWU7XG4gICAgfVxuXG4gICAgcHVibGljIGNsZWFyX2ZpbHRlcihmaWVsZE5hbWU6IHN0cmluZykge1xuICAgICAgICBpZiAoZmllbGROYW1lKSB7XG4gICAgICAgICAgICBjb25zdCBjb2x1bW4gPSB0aGlzLmdldF9jb2x1bW5fYnlfbmFtZShmaWVsZE5hbWUpO1xuICAgICAgICAgICAgaWYgKCFjb2x1bW4pIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBncmlkID0gdGhpcy5ncmlkO1xuICAgICAgICBncmlkLmVuZEVkaXQoZmFsc2UpO1xuICAgICAgICBjb25zdCBmaWx0ZXJpbmdTdGF0ZSA9IGdyaWQuZmlsdGVyaW5nRXhwcmVzc2lvbnNUcmVlO1xuICAgICAgICBjb25zdCBpbmRleCA9IGZpbHRlcmluZ1N0YXRlLmZpbmRJbmRleChmaWVsZE5hbWUpO1xuXG4gICAgICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgICAgICBmaWx0ZXJpbmdTdGF0ZS5maWx0ZXJpbmdPcGVyYW5kcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB9IGVsc2UgaWYgKCFmaWVsZE5hbWUpIHtcbiAgICAgICAgICAgIGZpbHRlcmluZ1N0YXRlLmZpbHRlcmluZ09wZXJhbmRzID0gW107XG4gICAgICAgIH1cblxuICAgICAgICBncmlkLmZpbHRlcmluZ0V4cHJlc3Npb25zVHJlZSA9IGZpbHRlcmluZ1N0YXRlO1xuICAgIH1cblxuICAgIHB1YmxpYyBjbGVhcl9zb3J0KGZpZWxkTmFtZTogc3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IHNvcnRpbmdTdGF0ZSA9IHRoaXMuZ3JpZC5zb3J0aW5nRXhwcmVzc2lvbnM7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gc29ydGluZ1N0YXRlLmZpbmRJbmRleCgoZXhwcikgPT4gZXhwci5maWVsZE5hbWUgPT09IGZpZWxkTmFtZSk7XG4gICAgICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgICAgICBzb3J0aW5nU3RhdGUuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgIHRoaXMuZ3JpZC5zb3J0aW5nRXhwcmVzc2lvbnMgPSBzb3J0aW5nU3RhdGU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgcHJlcGFyZV9maWx0ZXJpbmdfZXhwcmVzc2lvbihmaWx0ZXJpbmdTdGF0ZTogSUZpbHRlcmluZ0V4cHJlc3Npb25zVHJlZSwgZmllbGROYW1lOiBzdHJpbmcsIHNlYXJjaFZhbCxcbiAgICAgICAgY29uZGl0aW9uT3JFeHByZXNzaW9uc1RyZWU6IElGaWx0ZXJpbmdPcGVyYXRpb24gfCBJRmlsdGVyaW5nRXhwcmVzc2lvbnNUcmVlLCBpZ25vcmVDYXNlOiBib29sZWFuLCBpbnNlcnRBdEluZGV4ID0gLTEpIHtcblxuICAgICAgICBsZXQgbmV3RXhwcmVzc2lvbnNUcmVlO1xuICAgICAgICBjb25zdCBvbGRFeHByZXNzaW9uc1RyZWVJbmRleCA9IGZpbHRlcmluZ1N0YXRlLmZpbmRJbmRleChmaWVsZE5hbWUpO1xuICAgICAgICBjb25zdCBleHByZXNzaW9uc1RyZWUgPSBjb25kaXRpb25PckV4cHJlc3Npb25zVHJlZSBpbnN0YW5jZW9mIEZpbHRlcmluZ0V4cHJlc3Npb25zVHJlZSA/XG4gICAgICAgICAgICBjb25kaXRpb25PckV4cHJlc3Npb25zVHJlZSBhcyBJRmlsdGVyaW5nRXhwcmVzc2lvbnNUcmVlIDogbnVsbDtcbiAgICAgICAgY29uc3QgY29uZGl0aW9uID0gY29uZGl0aW9uT3JFeHByZXNzaW9uc1RyZWUgaW5zdGFuY2VvZiBGaWx0ZXJpbmdFeHByZXNzaW9uc1RyZWUgP1xuICAgICAgICAgICAgbnVsbCA6IGNvbmRpdGlvbk9yRXhwcmVzc2lvbnNUcmVlIGFzIElGaWx0ZXJpbmdPcGVyYXRpb247XG4gICAgICAgIGNvbnN0IG5ld0V4cHJlc3Npb246IElGaWx0ZXJpbmdFeHByZXNzaW9uID0geyBmaWVsZE5hbWUsIHNlYXJjaFZhbCwgY29uZGl0aW9uLCBpZ25vcmVDYXNlIH07XG5cbiAgICAgICAgaWYgKG9sZEV4cHJlc3Npb25zVHJlZUluZGV4ID09PSAtMSkge1xuICAgICAgICAgICAgLy8gbm8gZXhwcmVzc2lvbnMgdHJlZSBmb3VuZCBmb3IgdGhpcyBmaWVsZFxuICAgICAgICAgICAgaWYgKGV4cHJlc3Npb25zVHJlZSkge1xuICAgICAgICAgICAgICAgIGlmIChpbnNlcnRBdEluZGV4ID4gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyaW5nU3RhdGUuZmlsdGVyaW5nT3BlcmFuZHMuc3BsaWNlKGluc2VydEF0SW5kZXgsIDAsIGV4cHJlc3Npb25zVHJlZSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyaW5nU3RhdGUuZmlsdGVyaW5nT3BlcmFuZHMucHVzaChleHByZXNzaW9uc1RyZWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY29uZGl0aW9uKSB7XG4gICAgICAgICAgICAgICAgLy8gY3JlYXRlIGV4cHJlc3Npb25zIHRyZWUgZm9yIHRoaXMgZmllbGQgYW5kIGFkZCB0aGUgbmV3IGV4cHJlc3Npb24gdG8gaXRcbiAgICAgICAgICAgICAgICBuZXdFeHByZXNzaW9uc1RyZWUgPSBuZXcgRmlsdGVyaW5nRXhwcmVzc2lvbnNUcmVlKGZpbHRlcmluZ1N0YXRlLm9wZXJhdG9yLCBmaWVsZE5hbWUpO1xuICAgICAgICAgICAgICAgIG5ld0V4cHJlc3Npb25zVHJlZS5maWx0ZXJpbmdPcGVyYW5kcy5wdXNoKG5ld0V4cHJlc3Npb24pO1xuICAgICAgICAgICAgICAgIGZpbHRlcmluZ1N0YXRlLmZpbHRlcmluZ09wZXJhbmRzLnB1c2gobmV3RXhwcmVzc2lvbnNUcmVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByb3RlY3RlZCBwcmVwYXJlX3NvcnRpbmdfZXhwcmVzc2lvbihzdGF0ZUNvbGxlY3Rpb25zOiBBcnJheTxBcnJheTxhbnk+PiwgZXhwcmVzc2lvbjogSVNvcnRpbmdFeHByZXNzaW9uKSB7XG4gICAgICAgIGlmIChleHByZXNzaW9uLmRpciA9PT0gU29ydGluZ0RpcmVjdGlvbi5Ob25lKSB7XG4gICAgICAgICAgICBzdGF0ZUNvbGxlY3Rpb25zLmZvckVhY2goc3RhdGUgPT4ge1xuICAgICAgICAgICAgICAgIHN0YXRlLnNwbGljZShzdGF0ZS5maW5kSW5kZXgoKGV4cHIpID0+IGV4cHIuZmllbGROYW1lID09PSBleHByZXNzaW9uLmZpZWxkTmFtZSksIDEpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogV2UgbmVlZCB0byBtYWtlIHN1cmUgdGhlIHN0YXRlcyBpbiBlYWNoIGNvbGxlY3Rpb24gd2l0aCBzYW1lIGZpZWxkcyBwb2ludCB0byB0aGUgc2FtZSBvYmplY3QgcmVmZXJlbmNlLlxuICAgICAgICAgKiBJZiB0aGUgZGlmZmVyZW50IHN0YXRlIGNvbGxlY3Rpb25zIHByb3ZpZGVkIGhhdmUgZGlmZmVyZW50IHNpemVzIHdlIG5lZWQgdG8gZ2V0IHRoZSBsYXJnZXN0IG9uZS5cbiAgICAgICAgICogVGhhdCB3YXkgd2UgY2FuIGdldCB0aGUgc3RhdGUgcmVmZXJlbmNlIGZyb20gdGhlIGxhcmdlc3Qgb25lIHRoYXQgaGFzIHRoZSBzYW1lIGZpZWxkTmFtZSBhcyB0aGUgZXhwcmVzc2lvbiB0byBwcmVwYXJlLlxuICAgICAgICAgKi9cbiAgICAgICAgbGV0IG1heENvbGxlY3Rpb24gPSBzdGF0ZUNvbGxlY3Rpb25zWzBdO1xuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IHN0YXRlQ29sbGVjdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChtYXhDb2xsZWN0aW9uLmxlbmd0aCA8IHN0YXRlQ29sbGVjdGlvbnNbaV0ubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgbWF4Q29sbGVjdGlvbiA9IHN0YXRlQ29sbGVjdGlvbnNbaV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbWF4RXhwciA9IG1heENvbGxlY3Rpb24uZmluZCgoZXhwcikgPT4gZXhwci5maWVsZE5hbWUgPT09IGV4cHJlc3Npb24uZmllbGROYW1lKTtcblxuICAgICAgICBzdGF0ZUNvbGxlY3Rpb25zLmZvckVhY2goY29sbGVjdGlvbiA9PiB7XG4gICAgICAgICAgICBjb25zdCBteUV4cHIgPSBjb2xsZWN0aW9uLmZpbmQoKGV4cHIpID0+IGV4cHIuZmllbGROYW1lID09PSBleHByZXNzaW9uLmZpZWxkTmFtZSk7XG4gICAgICAgICAgICBpZiAoIW15RXhwciAmJiAhbWF4RXhwcikge1xuICAgICAgICAgICAgICAgIC8vIEV4cHJlc3Npb24gd2l0aCB0aGlzIGZpZWxkTmFtZSBpcyBtaXNzaW5nIGZyb20gdGhlIGN1cnJlbnQgYW5kIHRoZSBtYXggY29sbGVjdGlvbi5cbiAgICAgICAgICAgICAgICBjb2xsZWN0aW9uLnB1c2goZXhwcmVzc2lvbik7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKCFteUV4cHIgJiYgbWF4RXhwcikge1xuICAgICAgICAgICAgICAgIC8vIEV4cHJlc3Npb24gd2l0aCB0aGlzIGZpZWxkTmFtZSBpcyBtaXNzaW5nIGZyb20gdGhlIGN1cnJlbnQgYW5kIGJ1dCB0aGUgbWF4IGNvbGxlY3Rpb24gaGFzLlxuICAgICAgICAgICAgICAgIGNvbGxlY3Rpb24ucHVzaChtYXhFeHByKTtcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKG1heEV4cHIsIGV4cHJlc3Npb24pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBUaGUgY3VycmVudCBjb2xsZWN0aW9uIGhhcyB0aGUgZXhwcmVzc2lvbiBzbyBqdXN0IHVwZGF0ZSBpdC5cbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKG15RXhwciwgZXhwcmVzc2lvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCByZW1vdmVfZ3JvdXBpbmdfZXhwcmVzc2lvbihmaWVsZE5hbWUpIHtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2hvdWxkX2FwcGx5X251bWJlcl9zdHlsZShjb2x1bW46IElneENvbHVtbkNvbXBvbmVudCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gY29sdW1uLmRhdGFUeXBlID09PSBEYXRhVHlwZS5OdW1iZXI7XG4gICAgfVxuXG4gICAgcHVibGljIGdldF9kYXRhKCk6IGFueVtdIHtcbiAgICAgICAgY29uc3QgZ3JpZCA9IHRoaXMuZ3JpZDtcbiAgICAgICAgY29uc3QgZGF0YSA9IGdyaWQuZGF0YSA/IGdyaWQuZGF0YSA6IFtdO1xuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0X2FsbF9kYXRhKGluY2x1ZGVUcmFuc2FjdGlvbnMgPSBmYWxzZSk6IGFueVtdIHtcbiAgICAgICAgY29uc3QgZ3JpZCA9IHRoaXMuZ3JpZDtcbiAgICAgICAgbGV0IGRhdGEgPSBncmlkLmRhdGEgPyBncmlkLmRhdGEgOiBbXTtcbiAgICAgICAgZGF0YSA9IGluY2x1ZGVUcmFuc2FjdGlvbnMgPyBncmlkLmRhdGFXaXRoQWRkZWRJblRyYW5zYWN0aW9uUm93cyA6IGRhdGE7XG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRfZmlsdGVyZWRfZGF0YSgpOiBhbnlbXSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdyaWQuZmlsdGVyZWREYXRhO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBnZXRTb3J0U3RyYXRlZ3lQZXJDb2x1bW4oZmllbGROYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0X2NvbHVtbl9ieV9uYW1lKGZpZWxkTmFtZSkgP1xuICAgICAgICAgICAgdGhpcy5nZXRfY29sdW1uX2J5X25hbWUoZmllbGROYW1lKS5zb3J0U3RyYXRlZ3kgOiB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgcHVibGljIGFkZFJvd1RvRGF0YShyb3dEYXRhOiBhbnkpIHtcbiAgICAgICAgLy8gQWRkIHJvdyBnb2VzIHRvIHRyYW5zYWN0aW9ucyBhbmQgaWYgcm93RWRpdGFibGUgaXMgcHJvcGVybHkgaW1wbGVtZW50ZWQsIGFkZGVkIHJvd3Mgd2lsbCBnbyB0byBwZW5kaW5nIHRyYW5zYWN0aW9uc1xuICAgICAgICAvLyBJZiB0aGVyZSBpcyBhIHJvdyBpbiBlZGl0IC0gPiBjb21taXQgYW5kIGNsb3NlXG4gICAgICAgIGNvbnN0IGdyaWQgPSB0aGlzLmdyaWQ7XG4gICAgICAgIGlmIChncmlkLnRyYW5zYWN0aW9ucy5lbmFibGVkKSB7XG4gICAgICAgICAgICBjb25zdCB0cmFuc2FjdGlvbklkID0gZ3JpZC5wcmltYXJ5S2V5ID8gcm93RGF0YVtncmlkLnByaW1hcnlLZXldIDogcm93RGF0YTtcbiAgICAgICAgICAgIGNvbnN0IHRyYW5zYWN0aW9uOiBUcmFuc2FjdGlvbiA9IHsgaWQ6IHRyYW5zYWN0aW9uSWQsIHR5cGU6IFRyYW5zYWN0aW9uVHlwZS5BREQsIG5ld1ZhbHVlOiByb3dEYXRhIH07XG4gICAgICAgICAgICBncmlkLnRyYW5zYWN0aW9ucy5hZGQodHJhbnNhY3Rpb24pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZ3JpZC5kYXRhLnB1c2gocm93RGF0YSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgZGVsZXRlUm93RnJvbURhdGEocm93SUQ6IGFueSwgaW5kZXg6IG51bWJlcikge1xuICAgICAgICAvLyAgaWYgdGhlcmUgaXMgYSByb3cgKGluZGV4ICE9PSAwKSBkZWxldGUgaXRcbiAgICAgICAgLy8gIGlmIHRoZXJlIGlzIGEgcm93IGluIEFERCBvciBVUERBVEUgc3RhdGUgY2hhbmdlIGl0J3Mgc3RhdGUgdG8gREVMRVRFXG4gICAgICAgIGNvbnN0IGdyaWQgPSB0aGlzLmdyaWQ7XG4gICAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgIGlmIChncmlkLnRyYW5zYWN0aW9ucy5lbmFibGVkKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdHJhbnNhY3Rpb246IFRyYW5zYWN0aW9uID0geyBpZDogcm93SUQsIHR5cGU6IFRyYW5zYWN0aW9uVHlwZS5ERUxFVEUsIG5ld1ZhbHVlOiBudWxsIH07XG4gICAgICAgICAgICAgICAgZ3JpZC50cmFuc2FjdGlvbnMuYWRkKHRyYW5zYWN0aW9uLCBncmlkLmRhdGFbaW5kZXhdKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZ3JpZC5kYXRhLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBzdGF0ZTogU3RhdGUgPSBncmlkLnRyYW5zYWN0aW9ucy5nZXRTdGF0ZShyb3dJRCk7XG4gICAgICAgICAgICBncmlkLnRyYW5zYWN0aW9ucy5hZGQoeyBpZDogcm93SUQsIHR5cGU6IFRyYW5zYWN0aW9uVHlwZS5ERUxFVEUsIG5ld1ZhbHVlOiBudWxsIH0sIHN0YXRlICYmIHN0YXRlLnJlY29yZFJlZik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgZGVsZXRlUm93QnlJZChyb3dJZDogYW55KSB7XG4gICAgICAgIGxldCBpbmRleDogbnVtYmVyO1xuICAgICAgICBjb25zdCBncmlkID0gdGhpcy5ncmlkO1xuICAgICAgICBjb25zdCBkYXRhID0gdGhpcy5nZXRfYWxsX2RhdGEoKTtcbiAgICAgICAgaWYgKGdyaWQucHJpbWFyeUtleSkge1xuICAgICAgICAgICAgaW5kZXggPSBkYXRhLm1hcCgocmVjb3JkKSA9PiByZWNvcmRbZ3JpZC5wcmltYXJ5S2V5XSkuaW5kZXhPZihyb3dJZCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpbmRleCA9IGRhdGEuaW5kZXhPZihyb3dJZCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc3RhdGU6IFN0YXRlID0gZ3JpZC50cmFuc2FjdGlvbnMuZ2V0U3RhdGUocm93SWQpO1xuICAgICAgICBjb25zdCBoYXNSb3dJbk5vbkRlbGV0ZWRTdGF0ZSA9IHN0YXRlICYmIHN0YXRlLnR5cGUgIT09IFRyYW5zYWN0aW9uVHlwZS5ERUxFVEU7XG5cbiAgICAgICAgLy8gIGlmIHRoZXJlIGlzIGEgcm93IChpbmRleCAhPT0gLTEpIGFuZCB0aGUgd2UgaGF2ZSBjZWxsIGluIGVkaXQgbW9kZSBvbiBzYW1lIHJvdyBleGl0IGVkaXQgbW9kZVxuICAgICAgICAvLyAgaWYgdGhlcmUgaXMgbm8gcm93IChpbmRleCA9PT0gLTEpLCBidXQgdGhlcmUgaXMgYSByb3cgaW4gQUREIG9yIFVQREFURSBzdGF0ZSBkbyBhcyBhYm92ZVxuICAgICAgICAvLyAgT3RoZXJ3aXNlIGp1c3QgZXhpdCAtIHRoZXJlIGlzIG5vdGhpbmcgdG8gZGVsZXRlXG4gICAgICAgIGlmIChpbmRleCAhPT0gLTEgfHwgaGFzUm93SW5Ob25EZWxldGVkU3RhdGUpIHtcbiAgICAgICAgICAgIC8vIEFsd2F5cyBleGl0IGVkaXQgd2hlbiByb3cgaXMgZGVsZXRlZFxuICAgICAgICAgICAgZ3JpZC5lbmRFZGl0KHRydWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gIFRPRE86IHNob3VsZCB3ZSBlbWl0IHRoaXMgd2hlbiBjYXNjYWRlT25EZWxldGUgaXMgdHJ1ZSBmb3IgZWFjaCByb3c/IT8hXG4gICAgICAgIGdyaWQub25Sb3dEZWxldGVkLmVtaXQoeyBkYXRhOiBkYXRhW2luZGV4XSB9KTtcblxuICAgICAgICAvLyAgZmlyc3QgZGVzZWxlY3Qgcm93IHRoZW4gZGVsZXRlIGl0XG4gICAgICAgIGlmIChncmlkLnJvd1NlbGVjdGFibGUgJiYgZ3JpZC5zZWxlY3Rpb24uaXNfaXRlbV9zZWxlY3RlZChncmlkLmlkLCByb3dJZCkpIHtcbiAgICAgICAgICAgIGdyaWQuZGVzZWxlY3RSb3dzKFtyb3dJZF0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZ3JpZC5jaGVja0hlYWRlckNoZWNrYm94U3RhdHVzKCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmRlbGV0ZVJvd0Zyb21EYXRhKHJvd0lkLCBpbmRleCk7XG4gICAgICAgIChncmlkIGFzIGFueSkuX3BpcGVUcmlnZ2VyKys7XG4gICAgICAgIGdyaWQuY2RyLm1hcmtGb3JDaGVjaygpO1xuICAgICAgICAvLyBEYXRhIG5lZWRzIHRvIGJlIHJlY2FsY3VsYXRlZCBpZiB0cmFuc2FjdGlvbnMgYXJlIGluIHBsYWNlXG4gICAgICAgIC8vIElmIG5vIHRyYW5zYWN0aW9ucywgYGRhdGFgIHdpbGwgYmUgYSByZWZlcmVuY2UgdG8gdGhlIGdyaWQgZ2V0dGVyLCBvdGhlcndpc2UgaXQgd2lsbCBiZSBzdGFsZVxuICAgICAgICBjb25zdCBkYXRhQWZ0ZXJEZWxldGUgPSBncmlkLnRyYW5zYWN0aW9ucy5lbmFibGVkID8gZ3JpZC5kYXRhV2l0aEFkZGVkSW5UcmFuc2FjdGlvblJvd3MgOiBkYXRhO1xuICAgICAgICBncmlkLnJlZnJlc2hTZWFyY2goKTtcbiAgICAgICAgaWYgKGRhdGFBZnRlckRlbGV0ZS5sZW5ndGggJSBncmlkLnBlclBhZ2UgPT09IDAgJiYgZGF0YUFmdGVyRGVsZXRlLmxlbmd0aCAvIGdyaWQucGVyUGFnZSAtIDEgPCBncmlkLnBhZ2UgJiYgZ3JpZC5wYWdlICE9PSAwKSB7XG4gICAgICAgICAgICBncmlkLnBhZ2UtLTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBnZXRfcm93X2lkKHJvd0RhdGEpIHtcbiAgICAgICAgY29uc3QgZ3JpZCA9IHRoaXMuZ3JpZDtcbiAgICAgICAgcmV0dXJuIGdyaWQucHJpbWFyeUtleSA/IHJvd0RhdGFbZ3JpZC5wcmltYXJ5S2V5XSA6IHJvd0RhdGE7XG4gICAgfVxuXG4gICAgcHVibGljIHJvd19kZWxldGVkX3RyYW5zYWN0aW9uKHJvd0lEOiBhbnkpOiBib29sZWFuIHtcbiAgICAgICAgY29uc3QgZ3JpZCA9IHRoaXMuZ3JpZDtcbiAgICAgICAgaWYgKCFncmlkKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFncmlkLnRyYW5zYWN0aW9ucy5lbmFibGVkKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc3RhdGUgPSBncmlkLnRyYW5zYWN0aW9ucy5nZXRTdGF0ZShyb3dJRCk7XG4gICAgICAgIGlmIChzdGF0ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHN0YXRlLnR5cGUgPT09IFRyYW5zYWN0aW9uVHlwZS5ERUxFVEU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcHVibGljIGF0SW5leGlzdGluZ1BhZ2UoKTogQm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmdyaWQudG90YWxQYWdlcyAtIDEgPiB0aGlzLmdyaWQucGFnZTtcbiAgICB9XG59XG4iXX0=