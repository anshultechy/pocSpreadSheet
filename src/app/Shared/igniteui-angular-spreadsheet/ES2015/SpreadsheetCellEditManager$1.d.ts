import { SpreadsheetCellEditManager } from "./SpreadsheetCellEditManager";
import { Spreadsheet } from "./Spreadsheet";
import { SpreadsheetAction } from "./SpreadsheetAction";
import { Type } from "../../igniteui-angular-core/ES2015/type";
/**
 * @hidden
 */
export declare abstract class SpreadsheetCellEditManager$1<TEditor> extends SpreadsheetCellEditManager {
    static $t: Type;
    protected $tEditor: Type;
    constructor($tEditor: Type, a: Spreadsheet);
    ab(a: SpreadsheetAction): boolean;
    ag(a: SpreadsheetAction, b?: boolean): boolean;
    protected abstract readonly a0: TEditor;
    protected a1(a: SpreadsheetAction, b: TEditor): boolean;
    protected a2(a: SpreadsheetAction, b: TEditor): boolean;
    a3(a: TEditor): {
        ret: boolean;
        p0: TEditor;
    };
}
