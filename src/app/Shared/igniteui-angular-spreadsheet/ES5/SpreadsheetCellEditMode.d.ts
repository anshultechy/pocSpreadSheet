import { Type } from "../../igniteui-angular-core/ES5/type";
/**
 * Enumeration used to identify the current edit mode state.
 * @see [[Spreadsheet.isInEditMode]]
 * @see [[Spreadsheet.cellEditMode]]
 */
export declare enum SpreadsheetCellEditMode {
    /**
     * The spreadsheet is not in edit mode similar to the "Ready" cell mode in Microsoft Excel.
     */
    NotInEditMode = 0,
    /**
     * The control is in edit mode. Arrow keys will navigate between the cells instead of within the text editor used for editing the active cell's value. This is analogous to the "Enter" cell mode in Microsoft Excel.
     */
    ArrowKeysNavigateBetweenCells = 1,
    /**
     * The control is in edit mode. Arrow keys will navigate within the characters of the text editor used for editing the active cell's value. This is analogous to the "Edit" cell mode in Microsoft Excel.
     */
    ArrowKeysNavigateInCell = 2
}
/**
 * @hidden
 */
export declare let SpreadsheetCellEditMode_$type: Type;
