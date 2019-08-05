import { IWorkbookFont, CellFill, WorkbookColorInfo, FormatConditionIcon } from "../../igniteui-angular-excel/ES2015/excel.core";
import { SpreadsheetResourceId } from "./SpreadsheetResourceId";
import { PixelConverter } from "./PixelConverter";
import { CellBorderPen } from "./CellBorderPen";
import { Color } from "../../igniteui-angular-core/ES2015/Color";
import { SpreadsheetGridLinePen } from "./SpreadsheetGridLinePen";
import { SpreadsheetImageBackground } from "./SpreadsheetImageBackground";
import { SpreadsheetDropDownButtonState } from "./SpreadsheetDropDownButtonState";
import { Type } from "../../igniteui-angular-core/ES2015/type";
/**
 * @hidden
 */
export interface ISpreadsheetGraphics {
    drawHeaderText(a: IWorkbookFont, b: string, c: number, d: number, e: SpreadsheetResourceId, f: number): void;
    getFarPixelAdjustment(a: PixelConverter): number;
    fillRectangle3(a: CellFill, b: number, c: number, d: number, e: number): void;
    fillRectangle1(a: SpreadsheetResourceId, b: number, c: number, d: number, e: number): void;
    drawLine(a: CellBorderPen, b: SpreadsheetResourceId, c: number, d: number, e: number, f: number, g: number): void;
    drawLine2(pen: CellBorderPen, color: string | Color, dpiFactor: number, x1: number, y1: number, x2: number, y2: number): void;
    _drawLine2$i(a: CellBorderPen, b: Color, c: number, d: number, e: number, f: number, g: number): void;
    drawLine1(a: CellBorderPen, b: WorkbookColorInfo, c: number, d: number, e: number, f: number, g: number): void;
    drawLine4(penWidth: number, color: string | Color, dpiFactor: number, x1: number, y1: number, x2: number, y2: number): void;
    _drawLine4$i(a: number, b: Color, c: number, d: number, e: number, f: number, g: number): void;
    drawLine3(a: SpreadsheetGridLinePen, b: number, c: number, d: number, e: number, f: number): void;
    drawRectangle(a: CellBorderPen, b: SpreadsheetResourceId, c: number, d: number, e: number, f: number, g: number): void;
    drawRectangle1(a: CellBorderPen, b: WorkbookColorInfo, c: number, d: number, e: number, f: number, g: number): void;
    fillRectangle2(a: SpreadsheetResourceId, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number): void;
    fillRectangle4(a: WorkbookColorInfo, b: WorkbookColorInfo, c: boolean, d: number, e: number, f: number, g: number): void;
    fillRectangle5(a: WorkbookColorInfo, b: number, c: number, d: number, e: number): void;
    drawEllipse(a: number, b: SpreadsheetResourceId, c: number, d: number, e: number, f: number, g: number): void;
    fillRectangle(a: SpreadsheetImageBackground, b: number, c: number, d: number, e: number, f: number, g: number): void;
    drawDropDownGlyph(a: SpreadsheetDropDownButtonState, b: number, c: number, d: number, e: number): void;
    drawIcon(a: FormatConditionIcon, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number): void;
}
/**
 * @hidden
 */
export declare let ISpreadsheetGraphics_$type: Type;
