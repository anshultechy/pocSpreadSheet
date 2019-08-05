import { EventArgs, Type } from "../../igniteui-angular-core/ES2015/type";
import { SpreadsheetEditModeValidationErrorAction } from "./SpreadsheetEditModeValidationErrorAction";
import { SpreadsheetCell } from "./SpreadsheetCell";
import { DataValidationRule } from "../../igniteui-angular-excel/ES2015/excel.core";
/**
 * @hidden
 */
export declare class SpreadsheetEditModeValidationErrorEventArgs extends EventArgs {
    static $t: Type;
    constructor(a: SpreadsheetCell, b: DataValidationRule, c: boolean);
    private _action;
    action: SpreadsheetEditModeValidationErrorAction;
    private _canStayInEditMode;
    canStayInEditMode: boolean;
    private _cell;
    cell: SpreadsheetCell;
    private _validationRule;
    validationRule: DataValidationRule;
}
