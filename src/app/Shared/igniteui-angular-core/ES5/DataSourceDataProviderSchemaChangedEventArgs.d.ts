import { EventArgs, Type } from "./type";
import { IDataSourceSchema } from "./IDataSourceSchema";
/**
 * @hidden
 */
export declare class DataSourceDataProviderSchemaChangedEventArgs extends EventArgs {
    static $t: Type;
    private d;
    private b;
    constructor(a: IDataSourceSchema, b: number);
    readonly schema: IDataSourceSchema;
    readonly count: number;
}