import { WorkbookDataObjectEventArgs } from "./WorkbookDataObjectEventArgs";
import { IDataObject } from "../../igniteui-angular-core/ES5/IDataObject";
import { Type } from "../../igniteui-angular-core/ES5/type";
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
