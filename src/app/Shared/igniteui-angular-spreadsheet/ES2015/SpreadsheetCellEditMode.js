/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { markEnum } from "../../igniteui-angular-core/ES2015/type";
/**
 * Enumeration used to identify the current edit mode state.
 * @see [[Spreadsheet.isInEditMode]]
 * @see [[Spreadsheet.cellEditMode]]
 */
export var SpreadsheetCellEditMode;
(function (SpreadsheetCellEditMode) {
    /**
     * The spreadsheet is not in edit mode similar to the "Ready" cell mode in Microsoft Excel.
     */
    SpreadsheetCellEditMode[SpreadsheetCellEditMode["NotInEditMode"] = 0] = "NotInEditMode";
    /**
     * The control is in edit mode. Arrow keys will navigate between the cells instead of within the text editor used for editing the active cell's value. This is analogous to the "Enter" cell mode in Microsoft Excel.
     */
    SpreadsheetCellEditMode[SpreadsheetCellEditMode["ArrowKeysNavigateBetweenCells"] = 1] = "ArrowKeysNavigateBetweenCells";
    /**
     * The control is in edit mode. Arrow keys will navigate within the characters of the text editor used for editing the active cell's value. This is analogous to the "Edit" cell mode in Microsoft Excel.
     */
    SpreadsheetCellEditMode[SpreadsheetCellEditMode["ArrowKeysNavigateInCell"] = 2] = "ArrowKeysNavigateInCell";
})(SpreadsheetCellEditMode || (SpreadsheetCellEditMode = {}));
/**
 * @hidden
 */
export let SpreadsheetCellEditMode_$type = markEnum('SpreadsheetCellEditMode', 'NotInEditMode,0|ArrowKeysNavigateBetweenCells,1|ArrowKeysNavigateInCell,2');
//# sourceMappingURL=SpreadsheetCellEditMode.js.map