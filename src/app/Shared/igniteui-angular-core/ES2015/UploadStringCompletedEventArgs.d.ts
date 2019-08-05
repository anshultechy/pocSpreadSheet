import { AsyncCompletedEventArgs } from "./AsyncCompletedEventArgs";
import { BaseError, Type } from "./type";
/**
 * @hidden
 */
export declare class UploadStringCompletedEventArgs extends AsyncCompletedEventArgs {
    static $t: Type;
    private i;
    constructor(a: string, b: BaseError, c: boolean, d: any);
    readonly result: string;
}