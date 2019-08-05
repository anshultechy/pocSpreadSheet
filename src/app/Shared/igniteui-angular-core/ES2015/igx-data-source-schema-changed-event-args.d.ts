import { IDataSourceSchema } from "./IDataSourceSchema";
import { DataSourceSchemaChangedEventArgs as DataSourceSchemaChangedEventArgs_internal } from "./DataSourceSchemaChangedEventArgs";
/**
 * Provides information about a schema change event that has occurred.
*/
export declare class DataSourceSchemaChangedEventArgs {
    protected _implementation: any;
    /**
     * @hidden
     */
    readonly i: DataSourceSchemaChangedEventArgs_internal;
    private onImplementationCreated;
    constructor();
    protected _provideImplementation(i: any): void;
    /**
     * Gets the new schema that has been provided.
    */
    readonly schema: IDataSourceSchema;
    /**
     * Gets the current full count of items in the data source.
    */
    readonly count: number;
}