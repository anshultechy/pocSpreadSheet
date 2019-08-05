import { WorkbookDataObjectEventArgs } from "./WorkbookDataObjectEventArgs";
import { IDataObject } from "../../igniteui-angular-core/ES2015/IDataObject";
import { Type } from "../../igniteui-angular-core/ES2015/type";
/**
 * @hidden
 */
export declare class WorkbookDataObjectCopyingEventArgs extends WorkbookDataObjectEventArgs {
    static $t: Type;
    constructor(a: IDataObject, b: boolean);
    private _dataObject_1;
    _dataObject: IDataObject;
}
