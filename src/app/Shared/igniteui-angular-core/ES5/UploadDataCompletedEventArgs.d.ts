import { AsyncCompletedEventArgs } from "./AsyncCompletedEventArgs";
import { BaseError, Type } from "./type";
/**
 * @hidden
 */
export declare class UploadDataCompletedEventArgs extends AsyncCompletedEventArgs {
    static $t: Type;
    private i;
    constructor(a: number[], b: BaseError, c: boolean, d: any);
    readonly result: number[];
}