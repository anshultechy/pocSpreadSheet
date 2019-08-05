import { Base, Nullable$1, Type } from "../../igniteui-angular-core/ES2015/type";
import { IWorkbookFont, WorkbookColorInfo, FontSuperscriptSubscriptStyle, FontUnderlineStyle, WorksheetCellFormatData, Workbook } from "../../igniteui-angular-excel/ES2015/excel.core";
import { Color } from "../../igniteui-angular-core/ES2015/Color";
/**
 * @hidden
 */
export declare class WorkbookFontSnapshot extends Base implements IWorkbookFont {
    static $t: Type;
    private _f;
    private _c;
    private _e;
    private _g;
    private _i;
    private _h;
    private _a;
    private _b;
    private _j;
    constructor(a: WorksheetCellFormatData);
    _d(a: WorksheetCellFormatData): WorkbookFontSnapshot;
    static _l(a: WorkbookColorInfo, b: Workbook): Color;
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
    _k: Color;
}
