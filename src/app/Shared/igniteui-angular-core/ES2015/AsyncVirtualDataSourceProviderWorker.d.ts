import { Base, IList$1, Type } from "./type";
import { AsyncDataSourcePageRequest } from "./AsyncDataSourcePageRequest";
import { IDataSourcePage } from "./IDataSourcePage";
import { IDataSourceExecutionContext } from "./IDataSourceExecutionContext";
import { IDataSourceSchema } from "./IDataSourceSchema";
import { AsyncVirtualDataSourceDataProviderWorkerSettings } from "./AsyncVirtualDataSourceDataProviderWorkerSettings";
import { DataSourcePageRequestPriority } from "./DataSourcePageRequestPriority";
import { AsyncVirtualDataSourceProviderTaskDataHolder } from "./AsyncVirtualDataSourceProviderTaskDataHolder";
import { AsyncDataSourcePageTaskHolder } from "./AsyncDataSourcePageTaskHolder";
/**
 * @hidden
 */
export declare class AsyncVirtualDataSourceProviderWorker extends Base {
    static $t: Type;
    constructor(a: AsyncVirtualDataSourceDataProviderWorkerSettings);
    private q;
    private o;
    protected static readonly maxSimultaneousExecutingTasks: number;
    protected static readonly maxRetryDelay: number;
    protected static readonly initialRetryDelay: number;
    protected ab: any;
    private h;
    private t;
    private s;
    private u;
    private c;
    private r;
    private ap;
    private ao;
    private g;
    protected readonly tasks: IList$1<AsyncDataSourcePageRequest>;
    protected readonly pageLoaded: (page: IDataSourcePage, currentFullCount: number, actualPageSize: number) => void;
    protected readonly executionContext: IDataSourceExecutionContext;
    protected actualPageSize: number;
    protected actualCount: number;
    protected actualSchema: IDataSourceSchema;
    protected populatedActualPageSize: boolean;
    isRunning: boolean;
    addPageRequest(a: number, b: DataSourcePageRequestPriority): boolean;
    addPageRequestWithRetry(a: number, b: DataSourcePageRequestPriority, c: number): boolean;
    removePageRequest(a: number): void;
    private _isShutdown;
    isShutdown: boolean;
    removeAllPageRequests(): void;
    shutdown(): void;
    protected initialize(): void;
    protected getTaskDataHolder(): AsyncVirtualDataSourceProviderTaskDataHolder;
    protected getTasksData(a: AsyncVirtualDataSourceProviderTaskDataHolder): void;
    protected removeCompletedTaskData(a: AsyncVirtualDataSourceProviderTaskDataHolder, b: number): void;
    protected getCompletedTaskData(a: AsyncVirtualDataSourceProviderTaskDataHolder, b: number): void;
    protected runATask(): void;
    protected checkAndPotentiallyWaitOnTasks(a: AsyncDataSourcePageRequest[]): number;
    private f;
    protected doWork(): void;
    protected makeTaskForRequest(a: AsyncDataSourcePageRequest, b: number): void;
    protected processCompletedTask(a: AsyncDataSourcePageTaskHolder, b: number, c: number, d: AsyncVirtualDataSourceProviderTaskDataHolder): void;
    protected retryIndex(a: number, b: number): void;
    protected isLastPage(a: number): boolean;
}