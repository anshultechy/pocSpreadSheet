/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { markEnum } from "../../igniteui-angular-core/ES2015/type";
/**
 * Enumeration used to indicate the selection is updated when one interacts with the control via the mouse or keyboard.
 */
export var SpreadsheetCellSelectionMode;
(function (SpreadsheetCellSelectionMode) {
    /**
     * The selection is replaced when dragging the mouse to select a cell or range of cells. Similarly when navigating via the keyboard a new selection is created. One may add a new range by holding the Ctrl key and using the mouse and one may alter the selection range containing the active cell by holding the Shift key down while clicking with the mouse or navigating with the keyboard such as with the arrow keys.
     */
    SpreadsheetCellSelectionMode[SpreadsheetCellSelectionMode["Normal"] = 0] = "Normal";
    /**
     * The selection range in the [[SpreadsheetSelection.cellRanges]] representing the active cell is updated as one uses the mouse to select a cell or navigating via the keyboard.
     */
    SpreadsheetCellSelectionMode[SpreadsheetCellSelectionMode["ExtendSelection"] = 1] = "ExtendSelection";
    /**
     * New cell ranges are added to the [[SpreadsheetSelection.cellRanges]] without needing to hold down the ctrl key when dragging via the mouse and a range is added with the first arrow key navigation after entering the mode. One can enter the mode by pressing Shift+F8.
     */
    SpreadsheetCellSelectionMode[SpreadsheetCellSelectionMode["AddToSelection"] = 2] = "AddToSelection";
})(SpreadsheetCellSelectionMode || (SpreadsheetCellSelectionMode = {}));
/**
 * @hidden
 */
export let SpreadsheetCellSelectionMode_$type = markEnum('SpreadsheetCellSelectionMode', 'Normal,0|ExtendSelection,1|AddToSelection,2');
//# sourceMappingURL=SpreadsheetCellSelectionMode.js.map