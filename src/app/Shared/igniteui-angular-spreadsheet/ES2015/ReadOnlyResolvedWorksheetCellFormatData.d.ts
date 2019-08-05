import { Base, Nullable$1, Type } from "../../igniteui-angular-core/ES2015/type";
import { IWorksheetCellFormat, HorizontalCellAlignment, WorksheetCellFormatData, WorkbookColorInfo, CellBorderLineStyle, DiagonalBorders, CellFill, IWorkbookFont, WorksheetCellFormatOptions, WorkbookStyle, VerticalCellAlignment } from "../../igniteui-angular-excel/ES2015/excel.core";
/**
 * @hidden
 */
export declare class ReadOnlyResolvedWorksheetCellFormatData extends Base implements IWorksheetCellFormat {
    static $t: Type;
    private _b;
    private _a;
    constructor(a: WorksheetCellFormatData);
    _c(a: WorksheetCellFormatData): void;
    setFormatting(a: IWorksheetCellFormat): void;
    alignment: HorizontalCellAlignment;
    bottomBorderColorInfo: WorkbookColorInfo;
    bottomBorderStyle: CellBorderLineStyle;
    diagonalBorderColorInfo: WorkbookColorInfo;
    diagonalBorders: DiagonalBorders;
    diagonalBorderStyle: CellBorderLineStyle;
    fill: CellFill;
    readonly font: IWorkbookFont;
    formatOptions: WorksheetCellFormatOptions;
    formatString: string;
    indent: number;
    leftBorderColorInfo: WorkbookColorInfo;
    leftBorderStyle: CellBorderLineStyle;
    locked: boolean | null;
    _locked$i: Nullable$1<boolean>;
    rightBorderColorInfo: WorkbookColorInfo;
    rightBorderStyle: CellBorderLineStyle;
    rotation: number;
    shrinkToFit: boolean | null;
    _shrinkToFit$i: Nullable$1<boolean>;
    style: WorkbookStyle;
    topBorderColorInfo: WorkbookColorInfo;
    topBorderStyle: CellBorderLineStyle;
    verticalAlignment: VerticalCellAlignment;
    wrapText: boolean | null;
    _wrapText$i: Nullable$1<boolean>;
}
