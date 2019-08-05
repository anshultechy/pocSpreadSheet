import { IDataSourceDataProvider } from "./IDataSourceDataProvider";
import { Type } from "./type";
import { IDataSourcePage } from "./IDataSourcePage";
import { DataSourcePageRequestPriority } from "./DataSourcePageRequestPriority";
/**
 * @hidden
 */
export interface IDataSourceVirtualDataProvider extends IDataSourceDataProvider {
    addPageRequest(a: number, b: DataSourcePageRequestPriority): void;
    removePageRequest(a: number): void;
    removeAllPageRequests(): void;
    close(): void;
    pageLoaded: (page: IDataSourcePage, currentFullCount: number, actualPageSize: number) => void;
    pageSizeRequested: number;
}
/**
 * @hidden
 */
export declare let IDataSourceVirtualDataProvider_$type: Type;
