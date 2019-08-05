import { BaseDataSource } from "./BaseDataSource";
import { IDataSourceDataProvider } from "./IDataSourceDataProvider";
import { IDataSourceLocalDataProvider } from "./IDataSourceLocalDataProvider";
import { Base, Type } from "./type";
import { IExternalLocalDataSource } from "./IExternalLocalDataSource";
import { ISupportsDataChangeNotifications } from "./ISupportsDataChangeNotifications";
import { DataSourceRowType } from "./DataSourceRowType";
/**
 * @hidden
 */
export declare class LocalDataSource extends BaseDataSource {
    static $t: Type;
    protected get_actualBaseDataProvider(): IDataSourceDataProvider;
    protected readonly actualBaseDataProvider: IDataSourceDataProvider;
    private bw;
    dataProvider: IDataSourceLocalDataProvider;
    private bv;
    actualDataProvider: IDataSourceLocalDataProvider;
    private cl;
    itemsSource: any;
    protected canInitialize(): boolean;
    private b1;
    b2: IExternalLocalDataSource;
    constructor();
    protected resolveDataProvider(): IDataSourceLocalDataProvider;
    protected propertyUpdatedOverride(a: string, b: any, c: any): void;
    getItemAtIndex(a: number): any;
    getItemPropertyAtIndex(a: number, b: string): any;
    private b5;
    private b7;
    private b0;
    private ca;
    protected refreshInternalOverride(): void;
    protected get_isItemIndexLookupSupported(): boolean;
    protected get_isKeyIndexLookupSupported(): boolean;
    indexOfItem(a: any): number;
    private b9;
    indexOfKey(a: any[]): number;
    protected onActualPrimaryKeyChangedOverrride(a: string[], b: string[]): void;
    private b3;
    private b4;
    private b6;
    private cf;
    private ce;
    private cc;
    private cd;
    private cb;
    onClearItemsOverride(): void;
    onSetItemOverride(a: number, b: any, c: any): void;
    onInsertItemOverride(a: number, b: any): void;
    onRemoveItemOverride(a: number, b: any): void;
    cq(): void;
    ct(a: number, b: any, c: any): void;
    cr(a: number, b: any): void;
    cs(a: number, b: any): void;
    private cg;
    pinRow(a: any[]): void;
    unpinRow(a: any[]): void;
    clearPinnedRows(): void;
    isRowPinned(a: number): boolean;
    private b8;
    protected get_isSortingSupported(): boolean;
    protected get_isFilteringSupported(): boolean;
    protected get_isGroupingSupported(): boolean;
    getStickyRowPriority(a: number): number;
    private bu;
    private cj;
    private ch;
    private ck;
    private ci;
    getStickyRows(): number[];
    isExclusivelySticky(a: number): boolean;
    getRowType(a: number): DataSourceRowType;
}
/**
 * @hidden
 */
export declare class LocalDataSourceViewUpdateNotifier extends Base implements ISupportsDataChangeNotifications {
    static $t: Type;
    private a;
    notifyClearItems(): void;
    notifyInsertItem(a: number, b: any): void;
    notifyRemoveItem(a: number, b: any): void;
    notifySetItem(a: number, b: any, c: any): void;
    constructor(a: LocalDataSource);
}
