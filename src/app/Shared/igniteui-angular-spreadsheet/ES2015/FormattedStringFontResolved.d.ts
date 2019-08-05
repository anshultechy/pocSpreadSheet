import { Base, Nullable$1, Type } from "../../igniteui-angular-core/ES2015/type";
import { IWorkbookFont, FormattedStringFont, WorksheetCellFormatData, WorkbookColorInfo, FontSuperscriptSubscriptStyle, FontUnderlineStyle } from "../../igniteui-angular-excel/ES2015/excel.core";
/**
 * @hidden
 */
export declare class FormattedStringFontResolved extends Base implements IWorkbookFont {
    static $t: Type;
    private _b;
    private _a;
    constructor(a: FormattedStringFont, b: WorksheetCellFormatData);
    _c(a: FormattedStringFont, b: WorksheetCellFormatData): void;
    setFontFormatting(a: IWorkbookFont): void;
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
}
