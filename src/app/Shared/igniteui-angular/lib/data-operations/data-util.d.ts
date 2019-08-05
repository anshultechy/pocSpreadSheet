import { IFilteringState } from './filtering-state.interface';
import { IgxSorting } from './sorting-strategy';
import { IGroupByResult } from './grouping-result.interface';
import { IPagingState } from './paging-state.interface';
import { IGroupByKey } from './groupby-expand-state.interface';
import { IGroupByRecord } from './groupby-record.interface';
import { IGroupingState } from './groupby-state.interface';
import { ISortingExpression } from './sorting-expression.interface';
import { ITreeGridRecord } from '../grids/tree-grid';
import { Transaction, HierarchicalTransaction } from '../services/transaction/transaction';
/**
 * @hidden
 */
export declare enum DataType {
    String = "string",
    Number = "number",
    Boolean = "boolean",
    Date = "date"
}
/**
 * @hidden
 */
export declare class DataUtil {
    static sort<T>(data: T[], expressions: ISortingExpression[], sorting?: IgxSorting): T[];
    static treeGridSort(hierarchicalData: ITreeGridRecord[], expressions: ISortingExpression[], parent?: ITreeGridRecord): ITreeGridRecord[];
    static cloneTreeGridRecord(hierarchicalRecord: ITreeGridRecord): ITreeGridRecord;
    static group<T>(data: T[], state: IGroupingState, grid?: any, groupsRecords?: any[], fullResult?: IGroupByResult): IGroupByResult;
    static page<T>(data: T[], state: IPagingState): T[];
    static filter<T>(data: T[], state: IFilteringState): T[];
    static treeGridFilter(data: ITreeGridRecord[], state: IFilteringState): ITreeGridRecord[];
    static correctPagingState(state: IPagingState, length: number): void;
    static getHierarchy(gRow: IGroupByRecord): Array<IGroupByKey>;
    static isHierarchyMatch(h1: Array<IGroupByKey>, h2: Array<IGroupByKey>): boolean;
    /**
     * Merges all changes from provided transactions into provided data collection
     * @param data Collection to merge
     * @param transactions Transactions to merge into data
     * @param primaryKey Primary key of the collection, if any
     * @param deleteRows Should delete rows with DELETE transaction type from data
     * @returns Provided data collections updated with all provided transactions
     */
    static mergeTransactions<T>(data: T[], transactions: Transaction[], primaryKey?: any, deleteRows?: boolean): T[];
    /**
     * Merges all changes from provided transactions into provided hierarchical data collection
     * @param data Collection to merge
     * @param transactions Transactions to merge into data
     * @param childDataKey Data key of child collections
     * @param primaryKey Primary key of the collection, if any
     * @param deleteRows Should delete rows with DELETE transaction type from data
     * @returns Provided data collections updated with all provided transactions
     */
    static mergeHierarchicalTransactions(data: any[], transactions: HierarchicalTransaction[], childDataKey: any, primaryKey?: any, deleteRows?: boolean): any[];
    private static findParentFromPath;
}
