import { IDataSourceSchema } from "./IDataSourceSchema";
import { DataSourceDataProviderSchemaChangedEventArgs as DataSourceDataProviderSchemaChangedEventArgs_internal } from "./DataSourceDataProviderSchemaChangedEventArgs";
/**
 * Provides information about a schema change event.
*/
export declare class DataSourceDataProviderSchemaChangedEventArgs {
    protected _implementation: any;
    /**
     * @hidden
     */
    readonly i: DataSourceDataProviderSchemaChangedEventArgs_internal;
    private onImplementationCreated;
    constructor();
    protected _provideImplementation(i: any): void;
    /**
     * Represents the current schema for the data provider.
    */
    readonly schema: IDataSourceSchema;
    /**
     * Represents the current full count for the data provider. May be -1 if this information is not available yet.
    */
    readonly count: number;
}