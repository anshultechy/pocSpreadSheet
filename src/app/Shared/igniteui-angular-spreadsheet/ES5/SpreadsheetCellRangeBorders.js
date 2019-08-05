/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { markEnum } from "../../igniteui-angular-core/ES5/type";
/**
 * Enumeration used to identify the borders of a cell range.
 */
export var SpreadsheetCellRangeBorders;
(function (SpreadsheetCellRangeBorders) {
    /**
     * Border at the left edge of the range
     */
    SpreadsheetCellRangeBorders[SpreadsheetCellRangeBorders["LeftBorder"] = 1] = "LeftBorder";
    /**
     * Border at the top edge of the range.
     */
    SpreadsheetCellRangeBorders[SpreadsheetCellRangeBorders["TopBorder"] = 2] = "TopBorder";
    /**
     * Border at the right edge of the range.
     */
    SpreadsheetCellRangeBorders[SpreadsheetCellRangeBorders["RightBorder"] = 4] = "RightBorder";
    /**
     * Border at the bottom edge of the range.
     */
    SpreadsheetCellRangeBorders[SpreadsheetCellRangeBorders["BottomBorder"] = 8] = "BottomBorder";
    /**
     * Horizontal border for all cells within the center excluding the outside edge of the range.
     */
    SpreadsheetCellRangeBorders[SpreadsheetCellRangeBorders["InsideHorizontal"] = 16] = "InsideHorizontal";
    /**
     * Vertical border for all cells within the center excluding the outside edge of the range.
     */
    SpreadsheetCellRangeBorders[SpreadsheetCellRangeBorders["InsideVertical"] = 32] = "InsideVertical";
    /**
     * Border running from the upper left corner to the lower right of each cell in the range.
     */
    SpreadsheetCellRangeBorders[SpreadsheetCellRangeBorders["DiagonalDown"] = 64] = "DiagonalDown";
    /**
     * Border running from the lower left corner to the upper right corner of each cell in the range.
     */
    SpreadsheetCellRangeBorders[SpreadsheetCellRangeBorders["DiagonalUp"] = 128] = "DiagonalUp";
    /**
     * Border along the outside of the range. This is equivalent to choosing LeftBorder, RightBorder, TopBorder and BottomBorder.
     */
    SpreadsheetCellRangeBorders[SpreadsheetCellRangeBorders["OutsideBorder"] = 15] = "OutsideBorder";
    /**
     * Border along the inside of the range. This is equivalent to choosing InsideVertical and InsideHorizontal
     */
    SpreadsheetCellRangeBorders[SpreadsheetCellRangeBorders["InsideBorder"] = 48] = "InsideBorder";
    /**
     * Border along the outside and inside of the range. This is equivalent to choosing OutsideBorder and InsideBorder.
     */
    SpreadsheetCellRangeBorders[SpreadsheetCellRangeBorders["AllBorder"] = 63] = "AllBorder";
})(SpreadsheetCellRangeBorders || (SpreadsheetCellRangeBorders = {}));
/**
 * @hidden
 */
export var SpreadsheetCellRangeBorders_$type = markEnum('SpreadsheetCellRangeBorders', 'LeftBorder,1|TopBorder,2|RightBorder,4|BottomBorder,8|InsideHorizontal,16|InsideVertical,32|DiagonalDown,64|DiagonalUp,128|OutsideBorder,15|InsideBorder,48|AllBorder,63');
//# sourceMappingURL=SpreadsheetCellRangeBorders.js.map
