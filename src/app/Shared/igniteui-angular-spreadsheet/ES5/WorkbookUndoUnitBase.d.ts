import { UndoUnit } from "./UndoUnit";
import { IWorksheetUndoUnit } from "./IWorksheetUndoUnit";
import { Sheet } from "../../igniteui-angular-excel/ES5/excel.core";
import { Type } from "../../igniteui-angular-core/ES5/type";
/**
 * @hidden
 */
export declare abstract class WorkbookUndoUnitBase extends UndoUnit implements IWorksheetUndoUnit {
    static $t: Type;
    abstract readonly sheet: Sheet;
}
