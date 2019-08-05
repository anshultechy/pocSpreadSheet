import { Base, Nullable$1, Type } from "../../igniteui-angular-core/ES5/type";
import { IWorkbookFont, WorksheetCellFormatData, WorkbookColorInfo, FontSuperscriptSubscriptStyle, FontUnderlineStyle } from "../../igniteui-angular-excel/ES5/excel.core";
/**
 * @hidden
 */
export declare class ResolvedWorksheetCellFormatDataFont extends Base implements IWorkbookFont {
    static $t: Type;
    private _a;
    constructor(a: WorksheetCellFormatData);
    _b(a: WorksheetCellFormatData): void;
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
