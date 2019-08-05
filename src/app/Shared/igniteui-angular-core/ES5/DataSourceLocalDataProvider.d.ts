import { Base, IList, Type } from "./type";
import { IDataSourceLocalDataProvider } from "./IDataSourceLocalDataProvider";
import { IDataSourceSchema } from "./IDataSourceSchema";
import { DataSourceSchemaPropertyType } from "./DataSourceSchemaPropertyType";
import { IDataSourceExecutionContext } from "./IDataSourceExecutionContext";
import { IDataSourceDataProviderUpdateNotifier } from "./IDataSourceDataProviderUpdateNotifier";
import { SortDescriptionCollection } from "./SortDescriptionCollection";
import { FilterExpressionCollection } from "./FilterExpressionCollection";
import { DataSourceDataProviderSchemaChangedEventArgs } from "./DataSourceDataProviderSchemaChangedEventArgs";
/**
 * @hidden
 */
export declare class DataSourceLocalDataProvider extends Base implements IDataSourceLocalDataProvider {
    static $t: Type;
    constructor();
    private af;
    private j;
    private i;
    private d;
    private t;
    dataSource: any;
    schemaChanged: (sender: any, args: DataSourceDataProviderSchemaChangedEventArgs) => void;
    getItemAtIndex(a: number): any;
    private o;
    getItemValue(a: any, b: string): any;
    private y;
    readonly actualCount: number;
    private g;
    readonly actualSchema: IDataSourceSchema;
    private h;
    resolveSchemaPropertyType(a: string): DataSourceSchemaPropertyType;
    private p;
    private aa;
    private z;
    private q;
    private b;
    private static c;
    private u;
    protected ab(a: string, b: any, c: any): void;
    private r;
    protected readonly s: IList;
    private m;
    protected ac(a: string, b: any, c: any): void;
    private f;
    executionContext: IDataSourceExecutionContext;
    protected readonly n: boolean;
    notifySetItem(a: number, b: any, c: any): void;
    notifyClearItems(): void;
    notifyInsertItem(a: number, b: any): void;
    notifyRemoveItem(a: number, b: any): void;
    private e;
    updateNotifier: IDataSourceDataProviderUpdateNotifier;
    private l;
    deferAutoRefresh: boolean;
    readonly isSortingSupported: boolean;
    readonly isFilteringSupported: boolean;
    readonly sortDescriptions: SortDescriptionCollection;
    readonly filterExpressions: FilterExpressionCollection;
    readonly notifyUsingSourceIndexes: boolean;
    private a;
    propertiesRequested: string[];
    readonly isItemIndexLookupSupported: boolean;
    readonly isKeyIndexLookupSupported: boolean;
    readonly isGroupingSupported: boolean;
    readonly groupDescriptions: SortDescriptionCollection;
    k: boolean;
    queueAutoRefresh(): void;
    x(): void;
    ad(): void;
    protected ae(): void;
    flushAutoRefresh(): void;
    refresh(): void;
    indexOfItem(a: any): number;
    indexOfKey(a: any[]): number;
}
