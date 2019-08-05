/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { IgxSorting, IgxDataRecordSorting } from './sorting-strategy';
import { IgxGrouping } from './grouping-strategy';
import { PagingError } from './paging-state.interface';
import { TreeGridFilteringStrategy } from '../grids/tree-grid/tree-grid.filtering.pipe';
import { FilteringStrategy } from './filtering-strategy';
import { cloneValue, mergeObjects } from '../core/utils';
import { TransactionType } from '../services/transaction/transaction';
/** @enum {string} */
const DataType = {
    String: 'string',
    Number: 'number',
    Boolean: 'boolean',
    Date: 'date',
};
export { DataType };
/**
 * @hidden
 */
export class DataUtil {
    /**
     * @template T
     * @param {?} data
     * @param {?} expressions
     * @param {?=} sorting
     * @return {?}
     */
    static sort(data, expressions, sorting = new IgxSorting()) {
        return sorting.sort(data, expressions);
    }
    /**
     * @param {?} hierarchicalData
     * @param {?} expressions
     * @param {?=} parent
     * @return {?}
     */
    static treeGridSort(hierarchicalData, expressions, parent) {
        /** @type {?} */
        let res = [];
        hierarchicalData.forEach((hr) => {
            /** @type {?} */
            const rec = DataUtil.cloneTreeGridRecord(hr);
            rec.parent = parent;
            if (rec.children) {
                rec.children = DataUtil.treeGridSort(rec.children, expressions, rec);
            }
            res.push(rec);
        });
        res = DataUtil.sort(res, expressions, new IgxDataRecordSorting());
        return res;
    }
    /**
     * @param {?} hierarchicalRecord
     * @return {?}
     */
    static cloneTreeGridRecord(hierarchicalRecord) {
        /** @type {?} */
        const rec = {
            rowID: hierarchicalRecord.rowID,
            data: hierarchicalRecord.data,
            children: hierarchicalRecord.children,
            isFilteredOutParent: hierarchicalRecord.isFilteredOutParent,
            level: hierarchicalRecord.level,
            expanded: hierarchicalRecord.expanded
        };
        return rec;
    }
    /**
     * @template T
     * @param {?} data
     * @param {?} state
     * @param {?=} grid
     * @param {?=} groupsRecords
     * @param {?=} fullResult
     * @return {?}
     */
    static group(data, state, grid = null, groupsRecords = [], fullResult = { data: [], metadata: [] }) {
        /** @type {?} */
        const grouping = new IgxGrouping();
        groupsRecords.splice(0, groupsRecords.length);
        return grouping.groupBy(data, state, grid, groupsRecords, fullResult);
    }
    /**
     * @template T
     * @param {?} data
     * @param {?} state
     * @return {?}
     */
    static page(data, state) {
        if (!state) {
            return data;
        }
        /** @type {?} */
        const len = data.length;
        /** @type {?} */
        const index = state.index;
        /** @type {?} */
        const res = [];
        /** @type {?} */
        const recordsPerPage = state.recordsPerPage;
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
    }
    /**
     * @template T
     * @param {?} data
     * @param {?} state
     * @return {?}
     */
    static filter(data, state) {
        if (!state.strategy) {
            state.strategy = new FilteringStrategy();
        }
        return state.strategy.filter(data, state.expressionsTree);
    }
    /**
     * @param {?} data
     * @param {?} state
     * @return {?}
     */
    static treeGridFilter(data, state) {
        if (!state.strategy) {
            state.strategy = new TreeGridFilteringStrategy();
        }
        return state.strategy.filter(data, state.expressionsTree);
    }
    /**
     * @param {?} state
     * @param {?} length
     * @return {?}
     */
    static correctPagingState(state, length) {
        /** @type {?} */
        const maxPage = Math.ceil(length / state.recordsPerPage) - 1;
        if (!isNaN(maxPage) && state.index > maxPage) {
            state.index = maxPage;
        }
    }
    /**
     * @param {?} gRow
     * @return {?}
     */
    static getHierarchy(gRow) {
        /** @type {?} */
        const hierarchy = [];
        if (gRow !== undefined && gRow.expression) {
            hierarchy.push({ fieldName: gRow.expression.fieldName, value: gRow.value });
            while (gRow.groupParent) {
                gRow = gRow.groupParent;
                hierarchy.unshift({ fieldName: gRow.expression.fieldName, value: gRow.value });
            }
        }
        return hierarchy;
    }
    /**
     * @param {?} h1
     * @param {?} h2
     * @return {?}
     */
    static isHierarchyMatch(h1, h2) {
        if (h1.length !== h2.length) {
            return false;
        }
        return h1.every((level, index) => {
            return level.fieldName === h2[index].fieldName && level.value === h2[index].value;
        });
    }
    /**
     * Merges all changes from provided transactions into provided data collection
     * @template T
     * @param {?} data Collection to merge
     * @param {?} transactions Transactions to merge into data
     * @param {?=} primaryKey Primary key of the collection, if any
     * @param {?=} deleteRows Should delete rows with DELETE transaction type from data
     * @return {?} Provided data collections updated with all provided transactions
     */
    static mergeTransactions(data, transactions, primaryKey, deleteRows = false) {
        data.forEach((item, index) => {
            /** @type {?} */
            const rowId = primaryKey ? item[primaryKey] : item;
            /** @type {?} */
            const transaction = transactions.find(t => t.id === rowId);
            if (transaction && transaction.type === TransactionType.UPDATE) {
                data[index] = transaction.newValue;
            }
        });
        if (deleteRows) {
            transactions
                .filter(t => t.type === TransactionType.DELETE)
                .forEach(t => {
                /** @type {?} */
                const index = primaryKey ? data.findIndex(d => d[primaryKey] === t.id) : data.findIndex(d => d === t.id);
                if (0 <= index && index < data.length) {
                    data.splice(index, 1);
                }
            });
        }
        data.push(...transactions
            .filter(t => t.type === TransactionType.ADD)
            .map(t => t.newValue));
        return data;
    }
    /**
     * Merges all changes from provided transactions into provided hierarchical data collection
     * @param {?} data Collection to merge
     * @param {?} transactions Transactions to merge into data
     * @param {?} childDataKey Data key of child collections
     * @param {?=} primaryKey Primary key of the collection, if any
     * @param {?=} deleteRows Should delete rows with DELETE transaction type from data
     * @return {?} Provided data collections updated with all provided transactions
     */
    static mergeHierarchicalTransactions(data, transactions, childDataKey, primaryKey, deleteRows = false) {
        for (const transaction of transactions) {
            if (transaction.path) {
                /** @type {?} */
                const parent = this.findParentFromPath(data, primaryKey, childDataKey, transaction.path);
                /** @type {?} */
                let collection = parent ? parent[childDataKey] : data;
                switch (transaction.type) {
                    case TransactionType.ADD:
                        //  if there is no parent this is ADD row at root level
                        if (parent && !parent[childDataKey]) {
                            parent[childDataKey] = collection = [];
                        }
                        collection.push(transaction.newValue);
                        break;
                    case TransactionType.UPDATE:
                        /** @type {?} */
                        const updateIndex = collection.findIndex(x => x[primaryKey] === transaction.id);
                        if (updateIndex !== -1) {
                            collection[updateIndex] = mergeObjects(cloneValue(collection[updateIndex]), transaction.newValue);
                        }
                        break;
                    case TransactionType.DELETE:
                        if (deleteRows) {
                            /** @type {?} */
                            const deleteIndex = collection.findIndex(r => r[primaryKey] === transaction.id);
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
        }
        return data;
    }
    /**
     * @private
     * @param {?} data
     * @param {?} primaryKey
     * @param {?} childDataKey
     * @param {?} path
     * @return {?}
     */
    static findParentFromPath(data, primaryKey, childDataKey, path) {
        /** @type {?} */
        let collection = data;
        /** @type {?} */
        let result;
        for (const id of path) {
            result = collection && collection.find(x => x[primaryKey] === id);
            if (!result) {
                break;
            }
            collection = result[childDataKey];
        }
        return result;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS11dGlsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vaWduaXRldWktYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9kYXRhLW9wZXJhdGlvbnMvZGF0YS11dGlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFFQSxPQUFPLEVBQUUsVUFBVSxFQUFFLG9CQUFvQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDdEUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBR2xELE9BQU8sRUFBZ0IsV0FBVyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFLckUsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFFeEYsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFekQsT0FBTyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFlLGVBQWUsRUFBMkIsTUFBTSxxQ0FBcUMsQ0FBQzs7O0lBTXhHLFFBQVMsUUFBUTtJQUNqQixRQUFTLFFBQVE7SUFDakIsU0FBVSxTQUFTO0lBQ25CLE1BQU8sTUFBTTs7Ozs7O0FBTWpCLE1BQU0sT0FBTyxRQUFROzs7Ozs7OztJQUNWLE1BQU0sQ0FBQyxJQUFJLENBQUksSUFBUyxFQUFFLFdBQWlDLEVBQUUsVUFBc0IsSUFBSSxVQUFVLEVBQUU7UUFDdEcsT0FBTyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxXQUFXLENBQUMsQ0FBQztJQUMzQyxDQUFDOzs7Ozs7O0lBRU0sTUFBTSxDQUFDLFlBQVksQ0FBQyxnQkFBbUMsRUFDMUQsV0FBaUMsRUFDakMsTUFBd0I7O1lBQ3BCLEdBQUcsR0FBc0IsRUFBRTtRQUMvQixnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFtQixFQUFFLEVBQUU7O2tCQUN2QyxHQUFHLEdBQW9CLFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQyxFQUFFLENBQUM7WUFDN0QsR0FB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ckc7d0JBQ0QsTUFBTTtvQkFDVixLQUFLLGVBQWUsQ0FBQyxNQUFNO3dCQUN2QixJQUFJLFVBQVUsRUFBRTs7a0NBQ04sV0FBVyxHQUFHLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLEtBQUssV0FBVyxDQUFDLEVBQUUsQ0FBQzs0QkFDL0UsSUFBSSxXQUFXLEtBQUssQ0FBQyxDQUFDLEVBQUU7Z0NBQ3BCLFVBQVUsQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDOzZCQUNyQzt5QkFDSjt3QkFDRCxNQUFNO2lCQUNiO2FBQ0o7aUJBQU07Z0JBQ0gsMEVBQTBFO2dCQUMxRSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUNuQztTQUNKO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQzs7Ozs7Ozs7O0lBRU8sTUFBTSxDQUFDLGtCQUFrQixDQUFDLElBQVcsRUFBRSxVQUFlLEVBQUUsWUFBaUIsRUFBRSxJQUFXOztZQUN0RixVQUFVLEdBQVUsSUFBSTs7WUFDeEIsTUFBVztRQUVmLEtBQUssTUFBTSxFQUFFLElBQUksSUFBSSxFQUFFO1lBQ25CLE1BQU0sR0FBRyxVQUFVLElBQUksVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztZQUNsRSxJQUFJLENBQUMsTUFBTSxFQUFFO2dCQUNULE1BQU07YUFDVDtZQUVELFVBQVUsR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDckM7UUFFRCxPQUFPLE1BQU0sQ0FBQztJQUNsQixDQUFDO0NBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJRmlsdGVyaW5nU3RhdGUgfSBmcm9tICcuL2ZpbHRlcmluZy1zdGF0ZS5pbnRlcmZhY2UnO1xuXG5pbXBvcnQgeyBJZ3hTb3J0aW5nLCBJZ3hEYXRhUmVjb3JkU29ydGluZyB9IGZyb20gJy4vc29ydGluZy1zdHJhdGVneSc7XG5pbXBvcnQgeyBJZ3hHcm91cGluZyB9IGZyb20gJy4vZ3JvdXBpbmctc3RyYXRlZ3knO1xuaW1wb3J0IHsgSUdyb3VwQnlSZXN1bHQgfSBmcm9tICcuL2dyb3VwaW5nLXJlc3VsdC5pbnRlcmZhY2UnO1xuXG5pbXBvcnQgeyBJUGFnaW5nU3RhdGUsIFBhZ2luZ0Vycm9yIH0gZnJvbSAnLi9wYWdpbmctc3RhdGUuaW50ZXJmYWNlJztcblxuaW1wb3J0IHsgSUdyb3VwQnlFeHBhbmRTdGF0ZSwgSUdyb3VwQnlLZXkgfSBmcm9tICcuL2dyb3VwYnktZXhwYW5kLXN0YXRlLmludGVyZmFjZSc7XG5pbXBvcnQgeyBJR3JvdXBCeVJlY29yZCB9IGZyb20gJy4vZ3JvdXBieS1yZWNvcmQuaW50ZXJmYWNlJztcbmltcG9ydCB7IElHcm91cGluZ1N0YXRlIH0gZnJvbSAnLi9ncm91cGJ5LXN0YXRlLmludGVyZmFjZSc7XG5pbXBvcnQgeyBUcmVlR3JpZEZpbHRlcmluZ1N0cmF0ZWd5IH0gZnJvbSAnLi4vZ3JpZHMvdHJlZS1ncmlkL3RyZWUtZ3JpZC5maWx0ZXJpbmcucGlwZSc7XG5pbXBvcnQgeyBJU29ydGluZ0V4cHJlc3Npb24gfSBmcm9tICcuL3NvcnRpbmctZXhwcmVzc2lvbi5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgRmlsdGVyaW5nU3RyYXRlZ3kgfSBmcm9tICcuL2ZpbHRlcmluZy1zdHJhdGVneSc7XG5pbXBvcnQgeyBJVHJlZUdyaWRSZWNvcmQgfSBmcm9tICcuLi9ncmlkcy90cmVlLWdyaWQnO1xuaW1wb3J0IHsgY2xvbmVWYWx1ZSwgbWVyZ2VPYmplY3RzIH0gZnJvbSAnLi4vY29yZS91dGlscyc7XG5pbXBvcnQgeyBUcmFuc2FjdGlvbiwgVHJhbnNhY3Rpb25UeXBlLCBIaWVyYXJjaGljYWxUcmFuc2FjdGlvbiB9IGZyb20gJy4uL3NlcnZpY2VzL3RyYW5zYWN0aW9uL3RyYW5zYWN0aW9uJztcblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbmV4cG9ydCBlbnVtIERhdGFUeXBlIHtcbiAgICBTdHJpbmcgPSAnc3RyaW5nJyxcbiAgICBOdW1iZXIgPSAnbnVtYmVyJyxcbiAgICBCb29sZWFuID0gJ2Jvb2xlYW4nLFxuICAgIERhdGUgPSAnZGF0ZSdcbn1cblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbmV4cG9ydCBjbGFzcyBEYXRhVXRpbCB7XG4gICAgcHVibGljIHN0YXRpYyBzb3J0PFQ+KGRhdGE6IFRbXSwgZXhwcmVzc2lvbnM6IElTb3J0aW5nRXhwcmVzc2lvbltdLCBzb3J0aW5nOiBJZ3hTb3J0aW5nID0gbmV3IElneFNvcnRpbmcoKSk6IFRbXSB7XG4gICAgICAgIHJldHVybiBzb3J0aW5nLnNvcnQoZGF0YSwgZXhwcmVzc2lvbnMpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgdHJlZUdyaWRTb3J0KGhpZXJhcmNoaWNhbERhdGE6IElUcmVlR3JpZFJlY29yZFtdLFxuICAgICAgICBleHByZXNzaW9uczogSVNvcnRpbmdFeHByZXNzaW9uW10sXG4gICAgICAgIHBhcmVudD86IElUcmVlR3JpZFJlY29yZCk6IElUcmVlR3JpZFJlY29yZFtdIHtcbiAgICAgICAgbGV0IHJlczogSVRyZWVHcmlkUmVjb3JkW10gPSBbXTtcbiAgICAgICAgaGllcmFyY2hpY2FsRGF0YS5mb3JFYWNoKChocjogSVRyZWVHcmlkUmVjb3JkKSA9PiB7XG4gICAgICAgICAgICBjb25zdCByZWM6IElUcmVlR3JpZFJlY29yZCA9IERhdGFVdGlsLmNsb25lVHJlZUdyaWRSZWNvcmQoaHIpO1xuICAgICAgICAgICAgcmVjLnBhcmVudCA9IHBhcmVudDtcbiAgICAgICAgICAgIGlmIChyZWMuY2hpbGRyZW4pIHtcbiAgICAgICAgICAgICAgICByZWMuY2hpbGRyZW4gPSBEYXRhVXRpbC50cmVlR3JpZFNvcnQocmVjLmNoaWxkcmVuLCBleHByZXNzaW9ucywgcmVjKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlcy5wdXNoKHJlYyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJlcyA9IERhdGFVdGlsLnNvcnQocmVzLCBleHByZXNzaW9ucywgbmV3IElneERhdGFSZWNvcmRTb3J0aW5nKCkpO1xuXG4gICAgICAgIHJldHVybiByZXM7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBjbG9uZVRyZWVHcmlkUmVjb3JkKGhpZXJhcmNoaWNhbFJlY29yZDogSVRyZWVHcmlkUmVjb3JkKSB7XG4gICAgICAgIGNvbnN0IHJlYzogSVRyZWVHcmlkUmVjb3JkID0ge1xuICAgICAgICAgICAgcm93SUQ6IGhpZXJhcmNoaWNhbFJlY29yZC5yb3dJRCxcbiAgICAgICAgICAgIGRhdGE6IGhpZXJhcmNoaWNhbFJlY29yZC5kYXRhLFxuICAgICAgICAgICAgY2hpbGRyZW46IGhpZXJhcmNoaWNhbFJlY29yZC5jaGlsZHJlbixcbiAgICAgICAgICAgIGlzRmlsdGVyZWRPdXRQYXJlbnQ6IGhpZXJhcmNoaWNhbFJlY29yZC5pc0ZpbHRlcmVkT3V0UGFyZW50LFxuICAgICAgICAgICAgbGV2ZWw6IGhpZXJhcmNoaWNhbFJlY29yZC5sZXZlbCxcbiAgICAgICAgICAgIGV4cGFuZGVkOiBoaWVyYXJjaGljYWxSZWNvcmQuZXhwYW5kZWRcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHJlYztcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGdyb3VwPFQ+KGRhdGE6IFRbXSwgc3RhdGU6IElHcm91cGluZ1N0YXRlLCBncmlkOiBhbnkgPSBudWxsLFxuICAgICAgICBncm91cHNSZWNvcmRzOiBhbnlbXSA9IFtdLCBmdWxsUmVzdWx0OiBJR3JvdXBCeVJlc3VsdCA9IHsgZGF0YTogW10sIG1ldGFkYXRhOiBbXSB9KTogSUdyb3VwQnlSZXN1bHQge1xuICAgICAgICBjb25zdCBncm91cGluZyA9IG5ldyBJZ3hHcm91cGluZygpO1xuICAgICAgICBncm91cHNSZWNvcmRzLnNwbGljZSgwLCBncm91cHNSZWNvcmRzLmxlbmd0aCk7XG4gICAgICAgIHJldHVybiBncm91cGluZy5ncm91cEJ5KGRhdGEsIHN0YXRlLCBncmlkLCBncm91cHNSZWNvcmRzLCBmdWxsUmVzdWx0KTtcbiAgICB9XG4gICAgcHVibGljIHN0YXRpYyBwYWdlPFQ+KGRhdGE6IFRbXSwgc3RhdGU6IElQYWdpbmdTdGF0ZSk6IFRbXSB7XG4gICAgICAgIGlmICghc3RhdGUpIHtcbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGxlbiA9IGRhdGEubGVuZ3RoO1xuICAgICAgICBjb25zdCBpbmRleCA9IHN0YXRlLmluZGV4O1xuICAgICAgICBjb25zdCByZXMgPSBbXTtcbiAgICAgICAgY29uc3QgcmVjb3Jkc1BlclBhZ2UgPSBzdGF0ZS5yZWNvcmRzUGVyUGFnZTtcbiAgICAgICAgc3RhdGUubWV0YWRhdGEgPSB7XG4gICAgICAgICAgICBjb3VudFBhZ2VzOiAwLFxuICAgICAgICAgICAgY291bnRSZWNvcmRzOiBkYXRhLmxlbmd0aCxcbiAgICAgICAgICAgIGVycm9yOiBQYWdpbmdFcnJvci5Ob25lXG4gICAgICAgIH07XG4gICAgICAgIGlmIChpbmRleCA8IDAgfHwgaXNOYU4oaW5kZXgpKSB7XG4gICAgICAgICAgICBzdGF0ZS5tZXRhZGF0YS5lcnJvciA9IFBhZ2luZ0Vycm9yLkluY29ycmVjdFBhZ2VJbmRleDtcbiAgICAgICAgICAgIHJldHVybiByZXM7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlY29yZHNQZXJQYWdlIDw9IDAgfHwgaXNOYU4ocmVjb3Jkc1BlclBhZ2UpKSB7XG4gICAgICAgICAgICBzdGF0ZS5tZXRhZGF0YS5lcnJvciA9IFBhZ2luZ0Vycm9yLkluY29ycmVjdFJlY29yZHNQZXJQYWdlO1xuICAgICAgICAgICAgcmV0dXJuIHJlcztcbiAgICAgICAgfVxuICAgICAgICBzdGF0ZS5tZXRhZGF0YS5jb3VudFBhZ2VzID0gTWF0aC5jZWlsKGxlbiAvIHJlY29yZHNQZXJQYWdlKTtcbiAgICAgICAgaWYgKCFsZW4pIHtcbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpbmRleCA+PSBzdGF0ZS5tZXRhZGF0YS5jb3VudFBhZ2VzKSB7XG4gICAgICAgICAgICBzdGF0ZS5tZXRhZGF0YS5lcnJvciA9IFBhZ2luZ0Vycm9yLkluY29ycmVjdFBhZ2VJbmRleDtcbiAgICAgICAgICAgIHJldHVybiByZXM7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRhdGEuc2xpY2UoaW5kZXggKiByZWNvcmRzUGVyUGFnZSwgKGluZGV4ICsgMSkgKiByZWNvcmRzUGVyUGFnZSk7XG4gICAgfVxuICAgIHB1YmxpYyBzdGF0aWMgZmlsdGVyPFQ+KGRhdGE6IFRbXSwgc3RhdGU6IElGaWx0ZXJpbmdTdGF0ZSk6IFRbXSB7XG4gICAgICAgIGlmICghc3RhdGUuc3RyYXRlZ3kpIHtcbiAgICAgICAgICAgIHN0YXRlLnN0cmF0ZWd5ID0gbmV3IEZpbHRlcmluZ1N0cmF0ZWd5KCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN0YXRlLnN0cmF0ZWd5LmZpbHRlcihkYXRhLCBzdGF0ZS5leHByZXNzaW9uc1RyZWUpO1xuICAgIH1cbiAgICBwdWJsaWMgc3RhdGljIHRyZWVHcmlkRmlsdGVyKGRhdGE6IElUcmVlR3JpZFJlY29yZFtdLCBzdGF0ZTogSUZpbHRlcmluZ1N0YXRlKTogSVRyZWVHcmlkUmVjb3JkW10ge1xuICAgICAgICBpZiAoIXN0YXRlLnN0cmF0ZWd5KSB7XG4gICAgICAgICAgICBzdGF0ZS5zdHJhdGVneSA9IG5ldyBUcmVlR3JpZEZpbHRlcmluZ1N0cmF0ZWd5KCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN0YXRlLnN0cmF0ZWd5LmZpbHRlcihkYXRhLCBzdGF0ZS5leHByZXNzaW9uc1RyZWUpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgY29ycmVjdFBhZ2luZ1N0YXRlKHN0YXRlOiBJUGFnaW5nU3RhdGUsIGxlbmd0aDogbnVtYmVyKSB7XG4gICAgICAgIGNvbnN0IG1heFBhZ2UgPSBNYXRoLmNlaWwobGVuZ3RoIC8gc3RhdGUucmVjb3Jkc1BlclBhZ2UpIC0gMTtcbiAgICAgICAgaWYgKCFpc05hTihtYXhQYWdlKSAmJiBzdGF0ZS5pbmRleCA+IG1heFBhZ2UpIHtcbiAgICAgICAgICAgIHN0YXRlLmluZGV4ID0gbWF4UGFnZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0SGllcmFyY2h5KGdSb3c6IElHcm91cEJ5UmVjb3JkKTogQXJyYXk8SUdyb3VwQnlLZXk+IHtcbiAgICAgICAgY29uc3QgaGllcmFyY2h5OiBBcnJheTxJR3JvdXBCeUtleT4gPSBbXTtcbiAgICAgICAgaWYgKGdSb3cgIT09IHVuZGVmaW5lZCAmJiBnUm93LmV4cHJlc3Npb24pIHtcbiAgICAgICAgICAgIGhpZXJhcmNoeS5wdXNoKHsgZmllbGROYW1lOiBnUm93LmV4cHJlc3Npb24uZmllbGROYW1lLCB2YWx1ZTogZ1Jvdy52YWx1ZSB9KTtcbiAgICAgICAgICAgIHdoaWxlIChnUm93Lmdyb3VwUGFyZW50KSB7XG4gICAgICAgICAgICAgICAgZ1JvdyA9IGdSb3cuZ3JvdXBQYXJlbnQ7XG4gICAgICAgICAgICAgICAgaGllcmFyY2h5LnVuc2hpZnQoeyBmaWVsZE5hbWU6IGdSb3cuZXhwcmVzc2lvbi5maWVsZE5hbWUsIHZhbHVlOiBnUm93LnZhbHVlIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBoaWVyYXJjaHk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBpc0hpZXJhcmNoeU1hdGNoKGgxOiBBcnJheTxJR3JvdXBCeUtleT4sIGgyOiBBcnJheTxJR3JvdXBCeUtleT4pOiBib29sZWFuIHtcbiAgICAgICAgaWYgKGgxLmxlbmd0aCAhPT0gaDIubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGgxLmV2ZXJ5KChsZXZlbCwgaW5kZXgpOiBib29sZWFuID0+IHtcbiAgICAgICAgICAgIHJldHVybiBsZXZlbC5maWVsZE5hbWUgPT09IGgyW2luZGV4XS5maWVsZE5hbWUgJiYgbGV2ZWwudmFsdWUgPT09IGgyW2luZGV4XS52YWx1ZTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTWVyZ2VzIGFsbCBjaGFuZ2VzIGZyb20gcHJvdmlkZWQgdHJhbnNhY3Rpb25zIGludG8gcHJvdmlkZWQgZGF0YSBjb2xsZWN0aW9uXG4gICAgICogQHBhcmFtIGRhdGEgQ29sbGVjdGlvbiB0byBtZXJnZVxuICAgICAqIEBwYXJhbSB0cmFuc2FjdGlvbnMgVHJhbnNhY3Rpb25zIHRvIG1lcmdlIGludG8gZGF0YVxuICAgICAqIEBwYXJhbSBwcmltYXJ5S2V5IFByaW1hcnkga2V5IG9mIHRoZSBjb2xsZWN0aW9uLCBpZiBhbnlcbiAgICAgKiBAcGFyYW0gZGVsZXRlUm93cyBTaG91bGQgZGVsZXRlIHJvd3Mgd2l0aCBERUxFVEUgdHJhbnNhY3Rpb24gdHlwZSBmcm9tIGRhdGFcbiAgICAgKiBAcmV0dXJucyBQcm92aWRlZCBkYXRhIGNvbGxlY3Rpb25zIHVwZGF0ZWQgd2l0aCBhbGwgcHJvdmlkZWQgdHJhbnNhY3Rpb25zXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBtZXJnZVRyYW5zYWN0aW9uczxUPihkYXRhOiBUW10sIHRyYW5zYWN0aW9uczogVHJhbnNhY3Rpb25bXSwgcHJpbWFyeUtleT86IGFueSwgZGVsZXRlUm93czogYm9vbGVhbiA9IGZhbHNlKTogVFtdIHtcbiAgICAgICAgZGF0YS5mb3JFYWNoKChpdGVtOiBhbnksIGluZGV4OiBudW1iZXIpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJvd0lkID0gcHJpbWFyeUtleSA/IGl0ZW1bcHJpbWFyeUtleV0gOiBpdGVtO1xuICAgICAgICAgICAgY29uc3QgdHJhbnNhY3Rpb24gPSB0cmFuc2FjdGlvbnMuZmluZCh0ID0+IHQuaWQgPT09IHJvd0lkKTtcbiAgICAgICAgICAgIGlmICh0cmFuc2FjdGlvbiAmJiB0cmFuc2FjdGlvbi50eXBlID09PSBUcmFuc2FjdGlvblR5cGUuVVBEQVRFKSB7XG4gICAgICAgICAgICAgICAgZGF0YVtpbmRleF0gPSB0cmFuc2FjdGlvbi5uZXdWYWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKGRlbGV0ZVJvd3MpIHtcbiAgICAgICAgICAgIHRyYW5zYWN0aW9uc1xuICAgICAgICAgICAgICAgIC5maWx0ZXIodCA9PiB0LnR5cGUgPT09IFRyYW5zYWN0aW9uVHlwZS5ERUxFVEUpXG4gICAgICAgICAgICAgICAgLmZvckVhY2godCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gcHJpbWFyeUtleSA/IGRhdGEuZmluZEluZGV4KGQgPT4gZFtwcmltYXJ5S2V5XSA9PT0gdC5pZCkgOiBkYXRhLmZpbmRJbmRleChkID0+IGQgPT09IHQuaWQpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoMCA8PSBpbmRleCAmJiBpbmRleCA8IGRhdGEubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRhdGEucHVzaCguLi50cmFuc2FjdGlvbnNcbiAgICAgICAgICAgIC5maWx0ZXIodCA9PiB0LnR5cGUgPT09IFRyYW5zYWN0aW9uVHlwZS5BREQpXG4gICAgICAgICAgICAubWFwKHQgPT4gdC5uZXdWYWx1ZSkpO1xuXG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE1lcmdlcyBhbGwgY2hhbmdlcyBmcm9tIHByb3ZpZGVkIHRyYW5zYWN0aW9ucyBpbnRvIHByb3ZpZGVkIGhpZXJhcmNoaWNhbCBkYXRhIGNvbGxlY3Rpb25cbiAgICAgKiBAcGFyYW0gZGF0YSBDb2xsZWN0aW9uIHRvIG1lcmdlXG4gICAgICogQHBhcmFtIHRyYW5zYWN0aW9ucyBUcmFuc2FjdGlvbnMgdG8gbWVyZ2UgaW50byBkYXRhXG4gICAgICogQHBhcmFtIGNoaWxkRGF0YUtleSBEYXRhIGtleSBvZiBjaGlsZCBjb2xsZWN0aW9uc1xuICAgICAqIEBwYXJhbSBwcmltYXJ5S2V5IFByaW1hcnkga2V5IG9mIHRoZSBjb2xsZWN0aW9uLCBpZiBhbnlcbiAgICAgKiBAcGFyYW0gZGVsZXRlUm93cyBTaG91bGQgZGVsZXRlIHJvd3Mgd2l0aCBERUxFVEUgdHJhbnNhY3Rpb24gdHlwZSBmcm9tIGRhdGFcbiAgICAgKiBAcmV0dXJucyBQcm92aWRlZCBkYXRhIGNvbGxlY3Rpb25zIHVwZGF0ZWQgd2l0aCBhbGwgcHJvdmlkZWQgdHJhbnNhY3Rpb25zXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBtZXJnZUhpZXJhcmNoaWNhbFRyYW5zYWN0aW9ucyhcbiAgICAgICAgZGF0YTogYW55W10sXG4gICAgICAgIHRyYW5zYWN0aW9uczogSGllcmFyY2hpY2FsVHJhbnNhY3Rpb25bXSxcbiAgICAgICAgY2hpbGREYXRhS2V5OiBhbnksXG4gICAgICAgIHByaW1hcnlLZXk/OiBhbnksXG4gICAgICAgIGRlbGV0ZVJvd3M6IGJvb2xlYW4gPSBmYWxzZSk6IGFueVtdIHtcbiAgICAgICAgZm9yIChjb25zdCB0cmFuc2FjdGlvbiBvZiB0cmFuc2FjdGlvbnMpIHtcbiAgICAgICAgICAgIGlmICh0cmFuc2FjdGlvbi5wYXRoKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcGFyZW50ID0gdGhpcy5maW5kUGFyZW50RnJvbVBhdGgoZGF0YSwgcHJpbWFyeUtleSwgY2hpbGREYXRhS2V5LCB0cmFuc2FjdGlvbi5wYXRoKTtcbiAgICAgICAgICAgICAgICBsZXQgY29sbGVjdGlvbjogYW55W10gPSBwYXJlbnQgPyBwYXJlbnRbY2hpbGREYXRhS2V5XSA6IGRhdGE7XG4gICAgICAgICAgICAgICAgc3dpdGNoICh0cmFuc2FjdGlvbi50eXBlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgVHJhbnNhY3Rpb25UeXBlLkFERDpcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICBpZiB0aGVyZSBpcyBubyBwYXJlbnQgdGhpcyBpcyBBREQgcm93IGF0IHJvb3QgbGV2ZWxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwYXJlbnQgJiYgIXBhcmVudFtjaGlsZERhdGFLZXldKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50W2NoaWxkRGF0YUtleV0gPSBjb2xsZWN0aW9uID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xsZWN0aW9uLnB1c2godHJhbnNhY3Rpb24ubmV3VmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgVHJhbnNhY3Rpb25UeXBlLlVQREFURTpcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHVwZGF0ZUluZGV4ID0gY29sbGVjdGlvbi5maW5kSW5kZXgoeCA9PiB4W3ByaW1hcnlLZXldID09PSB0cmFuc2FjdGlvbi5pZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodXBkYXRlSW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sbGVjdGlvblt1cGRhdGVJbmRleF0gPSBtZXJnZU9iamVjdHMoY2xvbmVWYWx1ZShjb2xsZWN0aW9uW3VwZGF0ZUluZGV4XSksIHRyYW5zYWN0aW9uLm5ld1ZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIFRyYW5zYWN0aW9uVHlwZS5ERUxFVEU6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGVsZXRlUm93cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRlbGV0ZUluZGV4ID0gY29sbGVjdGlvbi5maW5kSW5kZXgociA9PiByW3ByaW1hcnlLZXldID09PSB0cmFuc2FjdGlvbi5pZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRlbGV0ZUluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xsZWN0aW9uLnNwbGljZShkZWxldGVJbmRleCwgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyAgaWYgdGhlcmUgaXMgbm8gcGF0aCB0aGlzIGlzIEFERCByb3cgaW4gcm9vdC4gUHVzaCB0aGUgbmV3VmFsdWUgdG8gZGF0YVxuICAgICAgICAgICAgICAgIGRhdGEucHVzaCh0cmFuc2FjdGlvbi5uZXdWYWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdGF0aWMgZmluZFBhcmVudEZyb21QYXRoKGRhdGE6IGFueVtdLCBwcmltYXJ5S2V5OiBhbnksIGNoaWxkRGF0YUtleTogYW55LCBwYXRoOiBhbnlbXSk6IGFueSB7XG4gICAgICAgIGxldCBjb2xsZWN0aW9uOiBhbnlbXSA9IGRhdGE7XG4gICAgICAgIGxldCByZXN1bHQ6IGFueTtcblxuICAgICAgICBmb3IgKGNvbnN0IGlkIG9mIHBhdGgpIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IGNvbGxlY3Rpb24gJiYgY29sbGVjdGlvbi5maW5kKHggPT4geFtwcmltYXJ5S2V5XSA9PT0gaWQpO1xuICAgICAgICAgICAgaWYgKCFyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29sbGVjdGlvbiA9IHJlc3VsdFtjaGlsZERhdGFLZXldO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG4iXX0=