import { EditModeWorkbookFont } from "./EditModeWorkbookFont";
import { SpreadsheetCellEditManager$1 } from "./SpreadsheetCellEditManager$1";
import { Type } from "../../igniteui-angular-core/ES5/type";
/**
 * @hidden
 */
export declare abstract class EditModeWorkbookFont$1<TEditor> extends EditModeWorkbookFont {
    static $t: Type;
    protected $tEditor: Type;
    constructor($tEditor: Type, a: SpreadsheetCellEditManager$1<TEditor>);
    protected readonly _z: SpreadsheetCellEditManager$1<TEditor>;
}
