/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { IgxSorting, IgxDataRecordSorting } from './sorting-strategy';
import { IgxGrouping } from './grouping-strategy';
import { PagingError } from './paging-state.interface';
import { TreeGridFilteringStrategy } from '../grids/tree-grid/tree-grid.filtering.pipe';
import { FilteringStrategy } from './filtering-strategy';
import { cloneValue, mergeObjects } from '../core/utils';
import { TransactionType } from '../services/transaction/transaction';
/** @enum {string} */
var DataType = {
    String: 'string',
    Number: 'number',
    Boolean: 'boolean',
    Date: 'date',
};
export { DataType };
/**
 * @hidden
 */
var /**
 * @hidden
 */
DataUtil = /** @class */ (function () {
    function DataUtil() {
    }
    /**
     * @template T
     * @param {?} data
     * @param {?} expressions
     * @param {?=} sorting
     * @return {?}
     */
    DataUtil.sort = /**
     * @template T
     * @param {?} data
     * @param {?} expressions
     * @param {?=} sorting
     * @return {?}
     */
    function (data, expressions, sorting) {
        if (sorting === void 0) { sorting = new IgxSorting(); }
        return sorting.sort(data, expressions);
    };
    /**
     * @param {?} hierarchicalData
     * @param {?} expressions
     * @param {?=} parent
     * @return {?}
     */
    DataUtil.treeGridSort = /**
     * @param {?} hierarchicalData
     * @param {?} expressions
     * @param {?=} parent
     * @return {?}
     */
    function (hierarchicalData, expressions, parent) {
        /** @type {?} */
        var res = [];
        hierarchicalData.forEach(function (hr) {
            /** @type {?} */
            var rec = DataUtil.cloneTreeGridRecord(hr);
            rec.parent = parent;
            if (rec.children) {
                rec.children = DataUtil.treeGridSort(rec.children, expressions, rec);
            }
            res.push(rec);
        });
        res = DataUtil.sort(res, expressions, new IgxDataRecordSorting());
        return res;
    };
    /**
     * @param {?} hierarchicalRecord
     * @return {?}
     */
    DataUtil.cloneTreeGridRecord = /**
     * @param {?} hierarchicalRecord
     * @return {?}
     */
    function (hierarchicalRecord) {
        /** @type {?} */
        var rec = {
            rowID: hierarchicalRecord.rowID,
            data: hierarchicalRecord.data,
            children: hierarchicalRecord.children,
            isFilteredOutParent: hierarchicalRecord.isFilteredOutParent,
            level: hierarchicalRecord.level,
            expanded: hierarchicalRecord.expanded
        };
        return rec;
    };
    /**
     * @template T
     * @param {?} data
     * @param {?} state
     * @param {?=} grid
     * @param {?=} groupsRecords
     * @param {?=} fullResult
     * @return {?}
     */
    DataUtil.group = /**
     * @template T
     * @param {?} data
     * @param {?} state
     * @param {?=} grid
     * @param {?=} groupsRecords
     * @param {?=} fullResult
     * @return {?}
     */
    function (data, state, grid, groupsRecords, fullResult) {
        if (grid === void 0) { grid = null; }
        if (groupsRecords === void 0) { groupsRecords = []; }
        if (fullResult === void 0) { fullResult = { data: [], metadata: [] }; }
        /** @type {?} */
        var grouping = new IgxGrouping();
        groupsRecords.splice(0, groupsRecords.length);
        return grouping.groupBy(data, state, grid, groupsRecords, fullResult);
    };
    /**
     * @template T
     * @param {?} data
     * @param {?} state
     * @return {?}
     */
    DataUtil.page = /**
     * @template T
     * @param {?} data
     * @param {?} state
     * @return {?}
     */
    function (data, state) {
        if (!state) {
            return data;
        }
        /** @type {?} */
        var len = data.length;
        /** @type {?} */
        var index = state.index;
        /** @type {?} */
        var res = [];
        /** @type {?} */
        var recordsPerPage = state.recordsPerPage;
        state.metadata = {
            countPages: 0,
            countRecords: data.length,
            error: PagingError.None
        };
        if (index < 0 || isNaN(index)) {
            state.metadata.error = PagingError.IncorrectPageIndex;
            return res;
        }
        if (recordsPerPage <= 0 || isNaN(recordsPerPage)) {
            state.metadata.error = PagingError.IncorrectRecordsPerPage;
            return res;
        }
        state.metadata.countPages = Math.ceil(len / recordsPerPage);
        if (!len) {
            return data;
        }
        if (index >= state.metadata.countPages) {
            state.metadata.error = PagingError.IncorrectPageIndex;
            return res;
        }
        return data.slice(index * recordsPerPage, (index + 1) * recordsPerPage);
    };
    /**
     * @template T
     * @param {?} data
     * @param {?} state
     * @return {?}
     */
    DataUtil.filter = /**
     * @template T
     * @param {?} data
     * @param {?} state
     * @return {?}
     */
    function (data, state) {
        if (!state.strategy) {
            state.strategy = new FilteringStrategy();
        }
        return state.strategy.filter(data, state.expressionsTree);
    };
    /**
     * @param {?} data
     * @param {?} state
     * @return {?}
     */
    DataUtil.treeGridFilter = /**
     * @param {?} data
     * @param {?} state
     * @return {?}
     */
    function (data, state) {
        if (!state.strategy) {
            state.strategy = new TreeGridFilteringStrategy();
        }
        return state.strategy.filter(data, state.expressionsTree);
    };
    /**
     * @param {?} state
     * @param {?} length
     * @return {?}
     */
    DataUtil.correctPagingState = /**
     * @param {?} state
     * @param {?} length
     * @return {?}
     */
    function (state, length) {
        /** @type {?} */
        var maxPage = Math.ceil(length / state.recordsPerPage) - 1;
        if (!isNaN(maxPage) && state.index > maxPage) {
            state.index = maxPage;
        }
    };
    /**
     * @param {?} gRow
     * @return {?}
     */
    DataUtil.getHierarchy = /**
     * @param {?} gRow
     * @return {?}
     */
    function (gRow) {
        /** @type {?} */
        var hierarchy = [];
        if (gRow !== undefined && gRow.expression) {
            hierarchy.push({ fieldName: gRow.expression.fieldName, value: gRow.value });
            while (gRow.groupParent) {
                gRow = gRow.groupParent;
                hierarchy.unshift({ fieldName: gRow.expression.fieldName, value: gRow.value });
            }
        }
        return hierarchy;
    };
    /**
     * @param {?} h1
     * @param {?} h2
     * @return {?}
     */
    DataUtil.isHierarchyMatch = /**
     * @param {?} h1
     * @param {?} h2
     * @return {?}
     */
    function (h1, h2) {
        if (h1.length !== h2.length) {
            return false;
        }
        return h1.every(function (level, index) {
            return level.fieldName === h2[index].fieldName && level.value === h2[index].value;
        });
    };
    /**
     * Merges all changes from provided transactions into provided data collection
     * @param data Collection to merge
     * @param transactions Transactions to merge into data
     * @param primaryKey Primary key of the collection, if any
     * @param deleteRows Should delete rows with DELETE transaction type from data
     * @returns Provided data collections updated with all provided transactions
     */
    /**
     * Merges all changes from provided transactions into provided data collection
     * @template T
     * @param {?} data Collection to merge
     * @param {?} transactions Transactions to merge into data
     * @param {?=} primaryKey Primary key of the collection, if any
     * @param {?=} deleteRows Should delete rows with DELETE transaction type from data
     * @return {?} Provided data collections updated with all provided transactions
     */
    DataUtil.mergeTransactions = /**
     * Merges all changes from provided transactions into provided data collection
     * @template T
     * @param {?} data Collection to merge
     * @param {?} transactions Transactions to merge into data
     * @param {?=} primaryKey Primary key of the collection, if any
     * @param {?=} deleteRows Should delete rows with DELETE transaction type from data
     * @return {?} Provided data collections updated with all provided transactions
     */
    function (data, transactions, primaryKey, deleteRows) {
        if (deleteRows === void 0) { deleteRows = false; }
        data.forEach(function (item, index) {
            /** @type {?} */
            var rowId = primaryKey ? item[primaryKey] : item;
            /** @type {?} */
            var transaction = transactions.find(function (t) { return t.id === rowId; });
            if (transaction && transaction.type === TransactionType.UPDATE) {
                data[index] = transaction.newValue;
            }
        });
        if (deleteRows) {
            transactions
                .filter(function (t) { return t.type === TransactionType.DELETE; })
                .forEach(function (t) {
                /** @type {?} */
                var index = primaryKey ? data.findIndex(function (d) { return d[primaryKey] === t.id; }) : data.findIndex(function (d) { return d === t.id; });
                if (0 <= index && index < data.length) {
                    data.splice(index, 1);
                }
            });
        }
        data.push.apply(data, tslib_1.__spread(transactions
            .filter(function (t) { return t.type === TransactionType.ADD; })
            .map(function (t) { return t.newValue; })));
        return data;
    };
    /**
     * Merges all changes from provided transactions into provided hierarchical data collection
     * @param data Collection to merge
     * @param transactions Transactions to merge into data
     * @param childDataKey Data key of child collections
     * @param primaryKey Primary key of the collection, if any
     * @param deleteRows Should delete rows with DELETE transaction type from data
     * @returns Provided data collections updated with all provided transactions
     */
    /**
     * Merges all changes from provided transactions into provided hierarchical data collection
     * @param {?} data Collection to merge
     * @param {?} transactions Transactions to merge into data
     * @param {?} childDataKey Data key of child collections
     * @param {?=} primaryKey Primary key of the collection, if any
     * @param {?=} deleteRows Should delete rows with DELETE transaction type from data
     * @return {?} Provided data collections updated with all provided transactions
     */
    DataUtil.mergeHierarchicalTransactions = /**
     * Merges all changes from provided transactions into provided hierarchical data collection
     * @param {?} data Collection to merge
     * @param {?} transactions Transactions to merge into data
     * @param {?} childDataKey Data key of child collections
     * @param {?=} primaryKey Primary key of the collection, if any
     * @param {?=} deleteRows Should delete rows with DELETE transaction type from data
     * @return {?} Provided data collections updated with all provided transactions
     */
    function (data, transactions, childDataKey, primaryKey, deleteRows) {
        var e_1, _a;
        if (deleteRows === void 0) { deleteRows = false; }
        var _loop_1 = function (transaction) {
            if (transaction.path) {
                /** @type {?} */
                var parent_1 = this_1.findParentFromPath(data, primaryKey, childDataKey, transaction.path);
                /** @type {?} */
                var collection = parent_1 ? parent_1[childDataKey] : data;
                switch (transaction.type) {
                    case TransactionType.ADD:
                        //  if there is no parent this is ADD row at root level
                        if (parent_1 && !parent_1[childDataKey]) {
                            parent_1[childDataKey] = collection = [];
                        }
                        collection.push(transaction.newValue);
                        break;
                    case TransactionType.UPDATE:
                        /** @type {?} */
                        var updateIndex = collection.findIndex(function (x) { return x[primaryKey] === transaction.id; });
                        if (updateIndex !== -1) {
                            collection[updateIndex] = mergeObjects(cloneValue(collection[updateIndex]), transaction.newValue);
                        }
                        break;
                    case TransactionType.DELETE:
                        if (deleteRows) {
                            /** @type {?} */
                            var deleteIndex = collection.findIndex(function (r) { return r[primaryKey] === transaction.id; });
                            if (deleteIndex !== -1) {
                                collection.splice(deleteIndex, 1);
                            }
                        }
                        break;
                }
            }
            else {
                //  if there is no path this is ADD row in root. Push the newValue to data
                data.push(transaction.newValue);
            }
        };
        var this_1 = this;
        try {
            for (var transactions_1 = tslib_1.__values(transactions), transactions_1_1 = transactions_1.next(); !transactions_1_1.done; transactions_1_1 = transactions_1.next()) {
                var transaction = transactions_1_1.value;
                _loop_1(transaction);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (transactions_1_1 && !transactions_1_1.done && (_a = transactions_1.return)) _a.call(transactions_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return data;
    };
    /**
     * @private
     * @param {?} data
     * @param {?} primaryKey
     * @param {?} childDataKey
     * @param {?} path
     * @return {?}
     */
    DataUtil.findParentFromPath = /**
     * @private
     * @param {?} data
     * @param {?} primaryKey
     * @param {?} childDataKey
     * @param {?} path
     * @return {?}
     */
    function (data, primaryKey, childDataKey, path) {
        var e_2, _a;
        /** @type {?} */
        var collection = data;
        /** @type {?} */
        var result;
        var _loop_2 = function (id) {
            result = collection && collection.find(function (x) { return x[primaryKey] === id; });
            if (!result) {
                return "break";
            }
            collection = result[childDataKey];
        };
        try {
            for (var path_1 = tslib_1.__values(path), path_1_1 = path_1.next(); !path_1_1.done; path_1_1 = path_1.next()) {
                var id = path_1_1.value;
                var state_1 = _loop_2(id);
                if (state_1 === "break")
                    break;
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (path_1_1 && !path_1_1.done && (_a = path_1.return)) _a.call(path_1);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return result;
    };
    return DataUtil;
}());
/**
 * @hidden
 */
export { DataUtil };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS11dGlsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vaWduaXRldWktYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9kYXRhLW9wZXJhdGlvbnMvZGF0YS11dGlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxvQkFBb0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUdsRCxPQUFPLEVBQWdCLFdBQVcsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBS3JFLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBRXhGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRXpELE9BQU8sRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFBZSxlQUFlLEVBQTJCLE1BQU0scUNBQXFDLENBQUM7OztJQU14RyxRQUFTLFFBQVE7SUFDakIsUUFBUyxRQUFRO0lBQ2pCLFNBQVUsU0FBUztJQUNuQixNQUFPLE1BQU07Ozs7OztBQU1qQjs7OztJQUFBO0lBcU5BLENBQUM7Ozs7Ozs7O0lBcE5pQixhQUFJOzs7Ozs7O0lBQWxCLFVBQXNCLElBQVMsRUFBRSxXQUFpQyxFQUFFLE9BQXNDO1FBQXRDLHdCQUFBLEVBQUEsY0FBMEIsVUFBVSxFQUFFO1FBQ3RHLE9BQU8sT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDM0MsQ0FBQzs7Ozs7OztJQUVhLHFCQUFZOzs7Ozs7SUFBMUIsVUFBMkIsZ0JBQW1DLEVBQzFELFdBQWlDLEVBQ2pDLE1BQXdCOztZQUNwQixHQUFHLEdBQXNCLEVBQUU7UUFDL0IsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLFVBQUMsRUFBbUI7O2dCQUNuQyxHQUFHLEdBQW9CLFFBQVEsQ0FBQyxtQkFBbUIsQ0FB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Q0FBQyxLQUFLLEVBQUUsRUFBcEIsQ0FBb0IsQ0FBQyxDQUFDO1lBQ2xFLElBQUksQ0FBQyxNQUFNLEVBQUU7O2FBRVo7WUFFRCxVQUFVLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDOzs7WUFOdEMsS0FBaUIsSUFBQSxTQUFBLGlCQUFBLElBQUksQ0FBQSwwQkFBQTtnQkFBaEIsSUFBTSxFQUFFLGlCQUFBO3NDQUFGLEVBQUU7OzthQU9aOzs7Ozs7Ozs7UUFFRCxPQUFPLE1BQU0sQ0FBQztJQUNsQixDQUFDO0lBQ0wsZUFBQztBQUFELENBQUMsQUFyTkQsSUFxTkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJRmlsdGVyaW5nU3RhdGUgfSBmcm9tICcuL2ZpbHRlcmluZy1zdGF0ZS5pbnRlcmZhY2UnO1xuXG5pbXBvcnQgeyBJZ3hTb3J0aW5nLCBJZ3hEYXRhUmVjb3JkU29ydGluZyB9IGZyb20gJy4vc29ydGluZy1zdHJhdGVneSc7XG5pbXBvcnQgeyBJZ3hHcm91cGluZyB9IGZyb20gJy4vZ3JvdXBpbmctc3RyYXRlZ3knO1xuaW1wb3J0IHsgSUdyb3VwQnlSZXN1bHQgfSBmcm9tICcuL2dyb3VwaW5nLXJlc3VsdC5pbnRlcmZhY2UnO1xuXG5pbXBvcnQgeyBJUGFnaW5nU3RhdGUsIFBhZ2luZ0Vycm9yIH0gZnJvbSAnLi9wYWdpbmctc3RhdGUuaW50ZXJmYWNlJztcblxuaW1wb3J0IHsgSUdyb3VwQnlFeHBhbmRTdGF0ZSwgSUdyb3VwQnlLZXkgfSBmcm9tICcuL2dyb3VwYnktZXhwYW5kLXN0YXRlLmludGVyZmFjZSc7XG5pbXBvcnQgeyBJR3JvdXBCeVJlY29yZCB9IGZyb20gJy4vZ3JvdXBieS1yZWNvcmQuaW50ZXJmYWNlJztcbmltcG9ydCB7IElHcm91cGluZ1N0YXRlIH0gZnJvbSAnLi9ncm91cGJ5LXN0YXRlLmludGVyZmFjZSc7XG5pbXBvcnQgeyBUcmVlR3JpZEZpbHRlcmluZ1N0cmF0ZWd5IH0gZnJvbSAnLi4vZ3JpZHMvdHJlZS1ncmlkL3RyZWUtZ3JpZC5maWx0ZXJpbmcucGlwZSc7XG5pbXBvcnQgeyBJU29ydGluZ0V4cHJlc3Npb24gfSBmcm9tICcuL3NvcnRpbmctZXhwcmVzc2lvbi5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgRmlsdGVyaW5nU3RyYXRlZ3kgfSBmcm9tICcuL2ZpbHRlcmluZy1zdHJhdGVneSc7XG5pbXBvcnQgeyBJVHJlZUdyaWRSZWNvcmQgfSBmcm9tICcuLi9ncmlkcy90cmVlLWdyaWQnO1xuaW1wb3J0IHsgY2xvbmVWYWx1ZSwgbWVyZ2VPYmplY3RzIH0gZnJvbSAnLi4vY29yZS91dGlscyc7XG5pbXBvcnQgeyBUcmFuc2FjdGlvbiwgVHJhbnNhY3Rpb25UeXBlLCBIaWVyYXJjaGljYWxUcmFuc2FjdGlvbiB9IGZyb20gJy4uL3NlcnZpY2VzL3RyYW5zYWN0aW9uL3RyYW5zYWN0aW9uJztcblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbmV4cG9ydCBlbnVtIERhdGFUeXBlIHtcbiAgICBTdHJpbmcgPSAnc3RyaW5nJyxcbiAgICBOdW1iZXIgPSAnbnVtYmVyJyxcbiAgICBCb29sZWFuID0gJ2Jvb2xlYW4nLFxuICAgIERhdGUgPSAnZGF0ZSdcbn1cblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbmV4cG9ydCBjbGFzcyBEYXRhVXRpbCB7XG4gICAgcHVibGljIHN0YXRpYyBzb3J0PFQ+KGRhdGE6IFRbXSwgZXhwcmVzc2lvbnM6IElTb3J0aW5nRXhwcmVzc2lvbltdLCBzb3J0aW5nOiBJZ3hTb3J0aW5nID0gbmV3IElneFNvcnRpbmcoKSk6IFRbXSB7XG4gICAgICAgIHJldHVybiBzb3J0aW5nLnNvcnQoZGF0YSwgZXhwcmVzc2lvbnMpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgdHJlZUdyaWRTb3J0KGhpZXJhcmNoaWNhbERhdGE6IElUcmVlR3JpZFJlY29yZFtdLFxuICAgICAgICBleHByZXNzaW9uczogSVNvcnRpbmdFeHByZXNzaW9uW10sXG4gICAgICAgIHBhcmVudD86IElUcmVlR3JpZFJlY29yZCk6IElUcmVlR3JpZFJlY29yZFtdIHtcbiAgICAgICAgbGV0IHJlczogSVRyZWVHcmlkUmVjb3JkW10gPSBbXTtcbiAgICAgICAgaGllcmFyY2hpY2FsRGF0YS5mb3JFYWNoKChocjogSVRyZWVHcmlkUmVjb3JkKSA9PiB7XG4gICAgICAgICAgICBjb25zdCByZWM6IElUcmVlR3JpZFJlY29yZCA9IERhdGFVdGlsLmNsb25lVHJlZUdyaWRSZWNvcmQoaHIpO1xuICAgICAgICAgICAgcmVjLnBhcmVudCA9IHBhcmVudDtcbiAgICAgICAgICAgIGlmIChyZWMuY2hpbGRyZW4pIHtcbiAgICAgICAgICAgICAgICByZWMuY2hpbGRyZW4gPSBEYXRhVXRpbC50cmVlR3JpZFNvcnQocmVjLmNoaWxkcmVuLCBleHByZXNzaW9ucywgcmVjKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlcy5wdXNoKHJlYyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJlcyA9IERhdGFVdGlsLnNvcnQocmVzLCBleHByZXNzaW9ucywgbmV3IElneERhdGFSZWNvcmRTb3J0aW5nKCkpO1xuXG4gICAgICAgIHJldHVybiByZXM7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBjbG9uZVRyZWVHcmlkUmVjb3JkKGhpZXJhcmNoaWNhbFJlY29yZDogSVRyZWVHcmlkUmVjb3JkKSB7XG4gICAgICAgIGNvbnN0IHJlYzogSVRyZWVHcmlkUmVjb3JkID0ge1xuICAgICAgICAgICAgcm93SUQ6IGhpZXJhcmNoaWNhbFJlY29yZC5yb3dJRCxcbiAgICAgICAgICAgIGRhdGE6IGhpZXJhcmNoaWNhbFJlY29yZC5kYXRhLFxuICAgICAgICAgICAgY2hpbGRyZW46IGhpZXJhcmNoaWNhbFJlY29yZC5jaGlsZHJlbixcbiAgICAgICAgICAgIGlzRmlsdGVyZWRPdXRQYXJlbnQ6IGhpZXJhcmNoaWNhbFJlY29yZC5pc0ZpbHRlcmVkT3V0UGFyZW50LFxuICAgICAgICAgICAgbGV2ZWw6IGhpZXJhcmNoaWNhbFJlY29yZC5sZXZlbCxcbiAgICAgICAgICAgIGV4cGFuZGVkOiBoaWVyYXJjaGljYWxSZWNvcmQuZXhwYW5kZWRcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHJlYztcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGdyb3VwPFQ+KGRhdGE6IFRbXSwgc3RhdGU6IElHcm91cGluZ1N0YXRlLCBncmlkOiBhbnkgPSBudWxsLFxuICAgICAgICBncm91cHNSZWNvcmRzOiBhbnlbXSA9IFtdLCBmdWxsUmVzdWx0OiBJR3JvdXBCeVJlc3VsdCA9IHsgZGF0YTogW10sIG1ldGFkYXRhOiBbXSB9KTogSUdyb3VwQnlSZXN1bHQge1xuICAgICAgICBjb25zdCBncm91cGluZyA9IG5ldyBJZ3hHcm91cGluZygpO1xuICAgICAgICBncm91cHNSZWNvcmRzLnNwbGljZSgwLCBncm91cHNSZWNvcmRzLmxlbmd0aCk7XG4gICAgICAgIHJldHVybiBncm91cGluZy5ncm91cEJ5KGRhdGEsIHN0YXRlLCBncmlkLCBncm91cHNSZWNvcmRzLCBmdWxsUmVzdWx0KTtcbiAgICB9XG4gICAgcHVibGljIHN0YXRpYyBwYWdlPFQ+KGRhdGE6IFRbXSwgc3RhdGU6IElQYWdpbmdTdGF0ZSk6IFRbXSB7XG4gICAgICAgIGlmICghc3RhdGUpIHtcbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGxlbiA9IGRhdGEubGVuZ3RoO1xuICAgICAgICBjb25zdCBpbmRleCA9IHN0YXRlLmluZGV4O1xuICAgICAgICBjb25zdCByZXMgPSBbXTtcbiAgICAgICAgY29uc3QgcmVjb3Jkc1BlclBhZ2UgPSBzdGF0ZS5yZWNvcmRzUGVyUGFnZTtcbiAgICAgICAgc3RhdGUubWV0YWRhdGEgPSB7XG4gICAgICAgICAgICBjb3VudFBhZ2VzOiAwLFxuICAgICAgICAgICAgY291bnRSZWNvcmRzOiBkYXRhLmxlbmd0aCxcbiAgICAgICAgICAgIGVycm9yOiBQYWdpbmdFcnJvci5Ob25lXG4gICAgICAgIH07XG4gICAgICAgIGlmIChpbmRleCA8IDAgfHwgaXNOYU4oaW5kZXgpKSB7XG4gICAgICAgICAgICBzdGF0ZS5tZXRhZGF0YS5lcnJvciA9IFBhZ2luZ0Vycm9yLkluY29ycmVjdFBhZ2VJbmRleDtcbiAgICAgICAgICAgIHJldHVybiByZXM7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlY29yZHNQZXJQYWdlIDw9IDAgfHwgaXNOYU4ocmVjb3Jkc1BlclBhZ2UpKSB7XG4gICAgICAgICAgICBzdGF0ZS5tZXRhZGF0YS5lcnJvciA9IFBhZ2luZ0Vycm9yLkluY29ycmVjdFJlY29yZHNQZXJQYWdlO1xuICAgICAgICAgICAgcmV0dXJuIHJlcztcbiAgICAgICAgfVxuICAgICAgICBzdGF0ZS5tZXRhZGF0YS5jb3VudFBhZ2VzID0gTWF0aC5jZWlsKGxlbiAvIHJlY29yZHNQZXJQYWdlKTtcbiAgICAgICAgaWYgKCFsZW4pIHtcbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpbmRleCA+PSBzdGF0ZS5tZXRhZGF0YS5jb3VudFBhZ2VzKSB7XG4gICAgICAgICAgICBzdGF0ZS5tZXRhZGF0YS5lcnJvciA9IFBhZ2luZ0Vycm9yLkluY29ycmVjdFBhZ2VJbmRleDtcbiAgICAgICAgICAgIHJldHVybiByZXM7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRhdGEuc2xpY2UoaW5kZXggKiByZWNvcmRzUGVyUGFnZSwgKGluZGV4ICsgMSkgKiByZWNvcmRzUGVyUGFnZSk7XG4gICAgfVxuICAgIHB1YmxpYyBzdGF0aWMgZmlsdGVyPFQ+KGRhdGE6IFRbXSwgc3RhdGU6IElGaWx0ZXJpbmdTdGF0ZSk6IFRbXSB7XG4gICAgICAgIGlmICghc3RhdGUuc3RyYXRlZ3kpIHtcbiAgICAgICAgICAgIHN0YXRlLnN0cmF0ZWd5ID0gbmV3IEZpbHRlcmluZ1N0cmF0ZWd5KCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN0YXRlLnN0cmF0ZWd5LmZpbHRlcihkYXRhLCBzdGF0ZS5leHByZXNzaW9uc1RyZWUpO1xuICAgIH1cbiAgICBwdWJsaWMgc3RhdGljIHRyZWVHcmlkRmlsdGVyKGRhdGE6IElUcmVlR3JpZFJlY29yZFtdLCBzdGF0ZTogSUZpbHRlcmluZ1N0YXRlKTogSVRyZWVHcmlkUmVjb3JkW10ge1xuICAgICAgICBpZiAoIXN0YXRlLnN0cmF0ZWd5KSB7XG4gICAgICAgICAgICBzdGF0ZS5zdHJhdGVneSA9IG5ldyBUcmVlR3JpZEZpbHRlcmluZ1N0cmF0ZWd5KCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN0YXRlLnN0cmF0ZWd5LmZpbHRlcihkYXRhLCBzdGF0ZS5leHByZXNzaW9uc1RyZWUpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgY29ycmVjdFBhZ2luZ1N0YXRlKHN0YXRlOiBJUGFnaW5nU3RhdGUsIGxlbmd0aDogbnVtYmVyKSB7XG4gICAgICAgIGNvbnN0IG1heFBhZ2UgPSBNYXRoLmNlaWwobGVuZ3RoIC8gc3RhdGUucmVjb3Jkc1BlclBhZ2UpIC0gMTtcbiAgICAgICAgaWYgKCFpc05hTihtYXhQYWdlKSAmJiBzdGF0ZS5pbmRleCA+IG1heFBhZ2UpIHtcbiAgICAgICAgICAgIHN0YXRlLmluZGV4ID0gbWF4UGFnZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0SGllcmFyY2h5KGdSb3c6IElHcm91cEJ5UmVjb3JkKTogQXJyYXk8SUdyb3VwQnlLZXk+IHtcbiAgICAgICAgY29uc3QgaGllcmFyY2h5OiBBcnJheTxJR3JvdXBCeUtleT4gPSBbXTtcbiAgICAgICAgaWYgKGdSb3cgIT09IHVuZGVmaW5lZCAmJiBnUm93LmV4cHJlc3Npb24pIHtcbiAgICAgICAgICAgIGhpZXJhcmNoeS5wdXNoKHsgZmllbGROYW1lOiBnUm93LmV4cHJlc3Npb24uZmllbGROYW1lLCB2YWx1ZTogZ1Jvdy52YWx1ZSB9KTtcbiAgICAgICAgICAgIHdoaWxlIChnUm93Lmdyb3VwUGFyZW50KSB7XG4gICAgICAgICAgICAgICAgZ1JvdyA9IGdSb3cuZ3JvdXBQYXJlbnQ7XG4gICAgICAgICAgICAgICAgaGllcmFyY2h5LnVuc2hpZnQoeyBmaWVsZE5hbWU6IGdSb3cuZXhwcmVzc2lvbi5maWVsZE5hbWUsIHZhbHVlOiBnUm93LnZhbHVlIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBoaWVyYXJjaHk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBpc0hpZXJhcmNoeU1hdGNoKGgxOiBBcnJheTxJR3JvdXBCeUtleT4sIGgyOiBBcnJheTxJR3JvdXBCeUtleT4pOiBib29sZWFuIHtcbiAgICAgICAgaWYgKGgxLmxlbmd0aCAhPT0gaDIubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGgxLmV2ZXJ5KChsZXZlbCwgaW5kZXgpOiBib29sZWFuID0+IHtcbiAgICAgICAgICAgIHJldHVybiBsZXZlbC5maWVsZE5hbWUgPT09IGgyW2luZGV4XS5maWVsZE5hbWUgJiYgbGV2ZWwudmFsdWUgPT09IGgyW2luZGV4XS52YWx1ZTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTWVyZ2VzIGFsbCBjaGFuZ2VzIGZyb20gcHJvdmlkZWQgdHJhbnNhY3Rpb25zIGludG8gcHJvdmlkZWQgZGF0YSBjb2xsZWN0aW9uXG4gICAgICogQHBhcmFtIGRhdGEgQ29sbGVjdGlvbiB0byBtZXJnZVxuICAgICAqIEBwYXJhbSB0cmFuc2FjdGlvbnMgVHJhbnNhY3Rpb25zIHRvIG1lcmdlIGludG8gZGF0YVxuICAgICAqIEBwYXJhbSBwcmltYXJ5S2V5IFByaW1hcnkga2V5IG9mIHRoZSBjb2xsZWN0aW9uLCBpZiBhbnlcbiAgICAgKiBAcGFyYW0gZGVsZXRlUm93cyBTaG91bGQgZGVsZXRlIHJvd3Mgd2l0aCBERUxFVEUgdHJhbnNhY3Rpb24gdHlwZSBmcm9tIGRhdGFcbiAgICAgKiBAcmV0dXJucyBQcm92aWRlZCBkYXRhIGNvbGxlY3Rpb25zIHVwZGF0ZWQgd2l0aCBhbGwgcHJvdmlkZWQgdHJhbnNhY3Rpb25zXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBtZXJnZVRyYW5zYWN0aW9uczxUPihkYXRhOiBUW10sIHRyYW5zYWN0aW9uczogVHJhbnNhY3Rpb25bXSwgcHJpbWFyeUtleT86IGFueSwgZGVsZXRlUm93czogYm9vbGVhbiA9IGZhbHNlKTogVFtdIHtcbiAgICAgICAgZGF0YS5mb3JFYWNoKChpdGVtOiBhbnksIGluZGV4OiBudW1iZXIpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJvd0lkID0gcHJpbWFyeUtleSA/IGl0ZW1bcHJpbWFyeUtleV0gOiBpdGVtO1xuICAgICAgICAgICAgY29uc3QgdHJhbnNhY3Rpb24gPSB0cmFuc2FjdGlvbnMuZmluZCh0ID0+IHQuaWQgPT09IHJvd0lkKTtcbiAgICAgICAgICAgIGlmICh0cmFuc2FjdGlvbiAmJiB0cmFuc2FjdGlvbi50eXBlID09PSBUcmFuc2FjdGlvblR5cGUuVVBEQVRFKSB7XG4gICAgICAgICAgICAgICAgZGF0YVtpbmRleF0gPSB0cmFuc2FjdGlvbi5uZXdWYWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKGRlbGV0ZVJvd3MpIHtcbiAgICAgICAgICAgIHRyYW5zYWN0aW9uc1xuICAgICAgICAgICAgICAgIC5maWx0ZXIodCA9PiB0LnR5cGUgPT09IFRyYW5zYWN0aW9uVHlwZS5ERUxFVEUpXG4gICAgICAgICAgICAgICAgLmZvckVhY2godCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gcHJpbWFyeUtleSA/IGRhdGEuZmluZEluZGV4KGQgPT4gZFtwcmltYXJ5S2V5XSA9PT0gdC5pZCkgOiBkYXRhLmZpbmRJbmRleChkID0+IGQgPT09IHQuaWQpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoMCA8PSBpbmRleCAmJiBpbmRleCA8IGRhdGEubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRhdGEucHVzaCguLi50cmFuc2FjdGlvbnNcbiAgICAgICAgICAgIC5maWx0ZXIodCA9PiB0LnR5cGUgPT09IFRyYW5zYWN0aW9uVHlwZS5BREQpXG4gICAgICAgICAgICAubWFwKHQgPT4gdC5uZXdWYWx1ZSkpO1xuXG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE1lcmdlcyBhbGwgY2hhbmdlcyBmcm9tIHByb3ZpZGVkIHRyYW5zYWN0aW9ucyBpbnRvIHByb3ZpZGVkIGhpZXJhcmNoaWNhbCBkYXRhIGNvbGxlY3Rpb25cbiAgICAgKiBAcGFyYW0gZGF0YSBDb2xsZWN0aW9uIHRvIG1lcmdlXG4gICAgICogQHBhcmFtIHRyYW5zYWN0aW9ucyBUcmFuc2FjdGlvbnMgdG8gbWVyZ2UgaW50byBkYXRhXG4gICAgICogQHBhcmFtIGNoaWxkRGF0YUtleSBEYXRhIGtleSBvZiBjaGlsZCBjb2xsZWN0aW9uc1xuICAgICAqIEBwYXJhbSBwcmltYXJ5S2V5IFByaW1hcnkga2V5IG9mIHRoZSBjb2xsZWN0aW9uLCBpZiBhbnlcbiAgICAgKiBAcGFyYW0gZGVsZXRlUm93cyBTaG91bGQgZGVsZXRlIHJvd3Mgd2l0aCBERUxFVEUgdHJhbnNhY3Rpb24gdHlwZSBmcm9tIGRhdGFcbiAgICAgKiBAcmV0dXJucyBQcm92aWRlZCBkYXRhIGNvbGxlY3Rpb25zIHVwZGF0ZWQgd2l0aCBhbGwgcHJvdmlkZWQgdHJhbnNhY3Rpb25zXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBtZXJnZUhpZXJhcmNoaWNhbFRyYW5zYWN0aW9ucyhcbiAgICAgICAgZGF0YTogYW55W10sXG4gICAgICAgIHRyYW5zYWN0aW9uczogSGllcmFyY2hpY2FsVHJhbnNhY3Rpb25bXSxcbiAgICAgICAgY2hpbGREYXRhS2V5OiBhbnksXG4gICAgICAgIHByaW1hcnlLZXk/OiBhbnksXG4gICAgICAgIGRlbGV0ZVJvd3M6IGJvb2xlYW4gPSBmYWxzZSk6IGFueVtdIHtcbiAgICAgICAgZm9yIChjb25zdCB0cmFuc2FjdGlvbiBvZiB0cmFuc2FjdGlvbnMpIHtcbiAgICAgICAgICAgIGlmICh0cmFuc2FjdGlvbi5wYXRoKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcGFyZW50ID0gdGhpcy5maW5kUGFyZW50RnJvbVBhdGgoZGF0YSwgcHJpbWFyeUtleSwgY2hpbGREYXRhS2V5LCB0cmFuc2FjdGlvbi5wYXRoKTtcbiAgICAgICAgICAgICAgICBsZXQgY29sbGVjdGlvbjogYW55W10gPSBwYXJlbnQgPyBwYXJlbnRbY2hpbGREYXRhS2V5XSA6IGRhdGE7XG4gICAgICAgICAgICAgICAgc3dpdGNoICh0cmFuc2FjdGlvbi50eXBlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgVHJhbnNhY3Rpb25UeXBlLkFERDpcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICBpZiB0aGVyZSBpcyBubyBwYXJlbnQgdGhpcyBpcyBBREQgcm93IGF0IHJvb3QgbGV2ZWxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwYXJlbnQgJiYgIXBhcmVudFtjaGlsZERhdGFLZXldKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50W2NoaWxkRGF0YUtleV0gPSBjb2xsZWN0aW9uID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xsZWN0aW9uLnB1c2godHJhbnNhY3Rpb24ubmV3VmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgVHJhbnNhY3Rpb25UeXBlLlVQREFURTpcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHVwZGF0ZUluZGV4ID0gY29sbGVjdGlvbi5maW5kSW5kZXgoeCA9PiB4W3ByaW1hcnlLZXldID09PSB0cmFuc2FjdGlvbi5pZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodXBkYXRlSW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sbGVjdGlvblt1cGRhdGVJbmRleF0gPSBtZXJnZU9iamVjdHMoY2xvbmVWYWx1ZShjb2xsZWN0aW9uW3VwZGF0ZUluZGV4XSksIHRyYW5zYWN0aW9uLm5ld1ZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIFRyYW5zYWN0aW9uVHlwZS5ERUxFVEU6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGVsZXRlUm93cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRlbGV0ZUluZGV4ID0gY29sbGVjdGlvbi5maW5kSW5kZXgociA9PiByW3ByaW1hcnlLZXldID09PSB0cmFuc2FjdGlvbi5pZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRlbGV0ZUluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xsZWN0aW9uLnNwbGljZShkZWxldGVJbmRleCwgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyAgaWYgdGhlcmUgaXMgbm8gcGF0aCB0aGlzIGlzIEFERCByb3cgaW4gcm9vdC4gUHVzaCB0aGUgbmV3VmFsdWUgdG8gZGF0YVxuICAgICAgICAgICAgICAgIGRhdGEucHVzaCh0cmFuc2FjdGlvbi5uZXdWYWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdGF0aWMgZmluZFBhcmVudEZyb21QYXRoKGRhdGE6IGFueVtdLCBwcmltYXJ5S2V5OiBhbnksIGNoaWxkRGF0YUtleTogYW55LCBwYXRoOiBhbnlbXSk6IGFueSB7XG4gICAgICAgIGxldCBjb2xsZWN0aW9uOiBhbnlbXSA9IGRhdGE7XG4gICAgICAgIGxldCByZXN1bHQ6IGFueTtcblxuICAgICAgICBmb3IgKGNvbnN0IGlkIG9mIHBhdGgpIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IGNvbGxlY3Rpb24gJiYgY29sbGVjdGlvbi5maW5kKHggPT4geFtwcmltYXJ5S2V5XSA9PT0gaWQpO1xuICAgICAgICAgICAgaWYgKCFyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29sbGVjdGlvbiA9IHJlc3VsdFtjaGlsZERhdGFLZXldO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG4iXX0=