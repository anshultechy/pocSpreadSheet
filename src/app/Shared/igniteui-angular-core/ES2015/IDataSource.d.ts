import { ISupportsDataChangeNotifications } from "./ISupportsDataChangeNotifications";
import { IDataSourceSupportsIndexedAccess } from "./IDataSourceSupportsIndexedAccess";
import { IDataSourceUpdateNotifier } from "./IDataSourceUpdateNotifier";
import { IDataSourceExecutionContext } from "./IDataSourceExecutionContext";
import { IDataSourceSchema } from "./IDataSourceSchema";
import { SortDescriptionCollection } from "./SortDescriptionCollection";
import { FilterExpressionCollection } from "./FilterExpressionCollection";
import { Type } from "./type";
import { DataSourceSchemaChangedEventArgs } from "./DataSourceSchemaChangedEventArgs";
import { DataSourceRowType } from "./DataSourceRowType";
import { DataSourceSchemaPropertyType } from "./DataSourceSchemaPropertyType";
/**
 * @hidden
 */
export interface IDataSource extends ISupportsDataChangeNotifications, IDataSourceSupportsIndexedAccess {
    schemaChanged: (sender: any, args: DataSourceSchemaChangedEventArgs) => void;
    isPlaceholderItem(a: number): boolean;
    getItemPropertyAtIndex(a: number, b: string): any;
    getItemProperty(a: any, b: string): any;
    updateNotifier: IDataSourceUpdateNotifier;
    readonly executionContext: IDataSourceExecutionContext;
    readonly actualSchema: IDataSourceSchema;
    firstVisibleIndexRequested: number;
    lastVisibleIndexRequested: number;
    readonly isVirtual: boolean;
    readonly isSortingSupported: boolean;
    readonly sortDescriptions: SortDescriptionCollection;
    readonly groupDescriptions: SortDescriptionCollection;
    readonly isFilteringSupported: boolean;
    readonly notifyUsingSourceIndexes: boolean;
    readonly filterExpressions: FilterExpressionCollection;
    queueAutoRefresh(): void;
    deferAutoRefresh: boolean;
    flushAutoRefresh(): void;
    refresh(): void;
    primaryKey: string[];
    readonly actualPrimaryKey: string[];
    propertiesRequested: string[];
    indexOfItem(a: any): number;
    indexOfKey(a: any[]): number;
    readonly isItemIndexLookupSupported: boolean;
    readonly isKeyIndexLookupSupported: boolean;
    readonly isGroupingSupported: boolean;
    getRowType(a: number): DataSourceRowType;
    getMainValuePath(a: DataSourceRowType): string;
    getStickyRows(): number[];
    getStickyRowPriority(a: number): number;
    isExclusivelySticky(a: number): boolean;
    isRowSpanning(a: DataSourceRowType): boolean;
    pinRow(a: any[]): void;
    unpinRow(a: any[]): void;
    clearPinnedRows(): void;
    isRowPinned(a: number): boolean;
    shouldEmitSectionHeaders: boolean;
    shouldEmitSectionFooters: boolean;
    shouldEmitShiftedRows: boolean;
    resolveSchemaPropertyType(a: string): DataSourceSchemaPropertyType;
}
/**
 * @hidden
 */
export declare let IDataSource_$type: Type;
