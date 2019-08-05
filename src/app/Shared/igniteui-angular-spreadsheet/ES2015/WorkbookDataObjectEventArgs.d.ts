import { EventArgs, Type } from "../../igniteui-angular-core/ES2015/type";
/**
 * @hidden
 */
export declare abstract class WorkbookDataObjectEventArgs extends EventArgs {
    static $t: Type;
    constructor(a: boolean);
    private _cancel_1;
    _cancel: boolean;
    private _isDragDrop_1;
    _isDragDrop: boolean;
}
