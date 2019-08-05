import { Base, Type } from "./type";
import { IDataSourcePage } from "./IDataSourcePage";
import { IDataSourceExecutionContext } from "./IDataSourceExecutionContext";
/**
 * @hidden
 */
export declare class AsyncVirtualDataSourceDataProviderWorkerSettings extends Base {
    static $t: Type;
    private _pageSizeRequested;
    pageSizeRequested: number;
    private _timeoutMilliseconds;
    timeoutMilliseconds: number;
    private _pageLoaded;
    pageLoaded: (page: IDataSourcePage, currentFullCount: number, actualPageSize: number) => void;
    private _executionContext;
    executionContext: IDataSourceExecutionContext;
}
