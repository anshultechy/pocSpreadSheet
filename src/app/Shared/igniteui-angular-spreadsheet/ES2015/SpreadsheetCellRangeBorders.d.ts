import { Type } from "../../igniteui-angular-core/ES2015/type";
/**
 * Enumeration used to identify the borders of a cell range.
 */
export declare enum SpreadsheetCellRangeBorders {
    /**
     * Border at the left edge of the range
     */
    LeftBorder = 1,
    /**
     * Border at the top edge of the range.
     */
    TopBorder = 2,
    /**
     * Border at the right edge of the range.
     */
    RightBorder = 4,
    /**
     * Border at the bottom edge of the range.
     */
    BottomBorder = 8,
    /**
     * Horizontal border for all cells within the center excluding the outside edge of the range.
     */
    InsideHorizontal = 16,
    /**
     * Vertical border for all cells within the center excluding the outside edge of the range.
     */
    InsideVertical = 32,
    /**
     * Border running from the upper left corner to the lower right of each cell in the range.
     */
    DiagonalDown = 64,
    /**
     * Border running from the lower left corner to the upper right corner of each cell in the range.
     */
    DiagonalUp = 128,
    /**
     * Border along the outside of the range. This is equivalent to choosing LeftBorder, RightBorder, TopBorder and BottomBorder.
     */
    OutsideBorder = 15,
    /**
     * Border along the inside of the range. This is equivalent to choosing InsideVertical and InsideHorizontal
     */
    InsideBorder = 48,
    /**
     * Border along the outside and inside of the range. This is equivalent to choosing OutsideBorder and InsideBorder.
     */
    AllBorder = 63
}
/**
 * @hidden
 */
export declare let SpreadsheetCellRangeBorders_$type: Type;
