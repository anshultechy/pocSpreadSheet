import { EventArgs, BaseError, Type } from "../../igniteui-angular-core/ES2015/type";
/**
 * @hidden
 */
export declare class WorkbookSerializationErrorEventArgs extends EventArgs {
    static $t: Type;
    constructor(a: boolean, b: BaseError);
    private _exception_1;
    _exception: BaseError;
    private _isLoading_1;
    _isLoading: boolean;
}
