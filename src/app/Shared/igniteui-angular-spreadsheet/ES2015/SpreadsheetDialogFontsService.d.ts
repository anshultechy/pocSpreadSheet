import { Base, Type } from "../../igniteui-angular-core/ES2015/type";
import { ISpreadsheetDialogFontsService } from "./ISpreadsheetDialogFontsService";
import { List$1 } from "../../igniteui-angular-core/ES2015/List$1";
import { Color } from "../../igniteui-angular-core/ES2015/Color";
/**
 * @hidden
 */
export declare class SpreadsheetDialogFontsService extends Base implements ISpreadsheetDialogFontsService {
    static $t: Type;
    getFontNames(): List$1<string>;
    getFontSizes(): List$1<number>;
    getHighlightColors(): List$1<Color>;
}
