import { WorkbookDataObjectEventArgs } from "./WorkbookDataObjectEventArgs";
import { IDataObject } from "../../igniteui-angular-core/ES2015/IDataObject";
import { Type } from "../../igniteui-angular-core/ES2015/type";
/**
 * @hidden
 */
export declare class WorkbookDataObjectPastingEventArgs extends WorkbookDataObjectEventArgs {
    static $t: Type;
    private _f;
    private _d;
    constructor(a: IDataObject, b: string, c: boolean);
    _dataObject: IDataObject;
    _formatToApply: string;
}
