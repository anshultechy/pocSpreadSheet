import { WorkbookDataObjectEventArgs } from "./WorkbookDataObjectEventArgs";
import { IDataObject } from "../../igniteui-angular-core/ES5/IDataObject";
import { Type } from "../../igniteui-angular-core/ES5/type";
/**
 * @hidden
 */
export declare class WorkbookDataObjectSettingDataEventArgs extends WorkbookDataObjectEventArgs {
    static $t: Type;
    constructor(a: IDataObject, b: string, c: boolean);
    private _dataObject_1;
    _dataObject: IDataObject;
    private _format_1;
    _format: string;
}
