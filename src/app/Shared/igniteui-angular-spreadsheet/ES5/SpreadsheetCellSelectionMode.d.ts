import { Type } from "../../igniteui-angular-core/ES5/type";
/**
 * Enumeration used to indicate the selection is updated when one interacts with the control via the mouse or keyboard.
 */
export declare enum SpreadsheetCellSelectionMode {
    /**
     * The selection is replaced when dragging the mouse to select a cell or range of cells. Similarly when navigating via the keyboard a new selection is created. One may add a new range by holding the Ctrl key and using the mouse and one may alter the selection range containing the active cell by holding the Shift key down while clicking with the mouse or navigating with the keyboard such as with the arrow keys.
     */
    Normal = 0,
    /**
     * The selection range in the [[SpreadsheetSelection.cellRanges]] representing the active cell is updated as one uses the mouse to select a cell or navigating via the keyboard.
     */
    ExtendSelection = 1,
    /**
     * New cell ranges are added to the [[SpreadsheetSelection.cellRanges]] without needing to hold down the ctrl key when dragging via the mouse and a range is added with the first arrow key navigation after entering the mode. One can enter the mode by pressing Shift+F8.
     */
    AddToSelection = 2
}
/**
 * @hidden
 */
export declare let SpreadsheetCellSelectionMode_$type: Type;
