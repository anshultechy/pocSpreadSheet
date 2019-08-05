import { Base, Nullable$1, Type } from "../../igniteui-angular-core/ES2015/type";
import { IWorkbookFont, WorkbookColorInfo, FontSuperscriptSubscriptStyle, FontUnderlineStyle } from "../../igniteui-angular-excel/ES2015/excel.core";
import { IGFormattedTextSettings } from "./IGFormattedTextSettings";
/**
 * @hidden
 */
export declare class IGFormattedTextFont extends Base implements IWorkbookFont {
    static $t: Type;
    _a: IGFormattedTextSettings;
    private _b;
    bold: boolean | null;
    _bold$i: Nullable$1<boolean>;
    colorInfo: WorkbookColorInfo;
    height: number;
    italic: boolean | null;
    _italic$i: Nullable$1<boolean>;
    name: string;
    strikeout: boolean | null;
    _strikeout$i: Nullable$1<boolean>;
    superscriptSubscriptStyle: FontSuperscriptSubscriptStyle;
    underlineStyle: FontUnderlineStyle;
    setFontFormatting(a: IWorkbookFont): void;
}
