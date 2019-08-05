import { Type } from "./type";
import { IDataSourceSchema } from "./IDataSourceSchema";
import { ISectionInformation } from "./ISectionInformation";
/**
 * @hidden
 */
export interface IDataSourcePage {
    count(): number;
    getItemAtIndex(a: number): any;
    getItemValueAtIndex(a: number, b: string): any;
    pageIndex(): number;
    schema(): IDataSourceSchema;
    getGroupInformation(): ISectionInformation[];
}
/**
 * @hidden
 */
export declare let IDataSourcePage_$type: Type;
