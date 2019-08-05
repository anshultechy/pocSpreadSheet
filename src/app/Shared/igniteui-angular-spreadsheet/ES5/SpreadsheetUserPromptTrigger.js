/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { markEnum } from "../../igniteui-angular-core/ES5/type";
/**
 * Identifies the action that led to the prompt being displayed.
 */
export var SpreadsheetUserPromptTrigger;
(function (SpreadsheetUserPromptTrigger) {
    /**
     * An error occurred while clearing the contents of the selected cells.
     */
    SpreadsheetUserPromptTrigger[SpreadsheetUserPromptTrigger["ClearCellContentError"] = 0] = "ClearCellContentError";
    /**
     * An error occurred while parsing the formula entered while in edit mode.
     */
    SpreadsheetUserPromptTrigger[SpreadsheetUserPromptTrigger["FormulaParseError"] = 1] = "FormulaParseError";
    /**
     * An error occurred while attempting to update the active cell or selected cells while exiting edit mode.
     */
    SpreadsheetUserPromptTrigger[SpreadsheetUserPromptTrigger["EditError"] = 2] = "EditError";
    /**
     * The name entered during an in-place edit/rename of a Worksheet Name violates the constraints.
     */
    SpreadsheetUserPromptTrigger[SpreadsheetUserPromptTrigger["InvalidWorksheetName"] = 3] = "InvalidWorksheetName";
    /**
     * The name entered during an in-place edit/rename of a Worksheet Name conflicts with the name of an existing Worksheet.
     */
    SpreadsheetUserPromptTrigger[SpreadsheetUserPromptTrigger["ConflictingWorksheetName"] = 4] = "ConflictingWorksheetName";
    /**
     * One or more worksheets are being deleted which may result in loss of data.
     */
    SpreadsheetUserPromptTrigger[SpreadsheetUserPromptTrigger["DeletingWorksheets"] = 5] = "DeletingWorksheets";
    /**
     * A command was being invoked that isn't valid when there are selected cell ranges that overlap.
     */
    SpreadsheetUserPromptTrigger[SpreadsheetUserPromptTrigger["InvalidCommandForOverlappingSelections"] = 6] = "InvalidCommandForOverlappingSelections";
    /**
     * A command was being invoked that isn't valid when there is more than one selected cell ranges.
     */
    SpreadsheetUserPromptTrigger[SpreadsheetUserPromptTrigger["InvalidCommandForMultipleSelections"] = 7] = "InvalidCommandForMultipleSelections";
    /**
     * A command was being invoked that isn't valid when there are a combination of rows or columns and cells selected.
     */
    SpreadsheetUserPromptTrigger[SpreadsheetUserPromptTrigger["InvalidCommandForMixedCellSelections"] = 8] = "InvalidCommandForMixedCellSelections";
    /**
     * A value was entered into the name box of the formula bar that did not represent the address to navigate to nor a valid name to use for the selection.
     */
    SpreadsheetUserPromptTrigger[SpreadsheetUserPromptTrigger["InvalidNameBoxValue"] = 9] = "InvalidNameBoxValue";
    /**
     * The source area and target areas of the paste operation do have have the same size.
     */
    SpreadsheetUserPromptTrigger[SpreadsheetUserPromptTrigger["PasteCellRangeSize"] = 10] = "PasteCellRangeSize";
    /**
     * There are multiple cell ranges in the source and target sheets.
     */
    SpreadsheetUserPromptTrigger[SpreadsheetUserPromptTrigger["PasteMultipleSourceAndTargetRanges"] = 11] = "PasteMultipleSourceAndTargetRanges";
    /**
     * The selection in the source is invalid. Either it is empty/unset or there are multiple cell ranges in the source that do not form a valid copy selection. There must be at least 1 cell range selected and all items must have the same start and end row or start and end column without overlapping and without leaving any gaps.
     */
    SpreadsheetUserPromptTrigger[SpreadsheetUserPromptTrigger["PasteInvalidSourceRanges"] = 12] = "PasteInvalidSourceRanges";
    /**
     * The number of selected sheets in the target workbook is not an integral multiple of the number of selected sheets in the source workbook.
     */
    SpreadsheetUserPromptTrigger[SpreadsheetUserPromptTrigger["PasteInvalidSheetCount"] = 13] = "PasteInvalidSheetCount";
    /**
     * An unspecified error occurred during a paste operation.
     */
    SpreadsheetUserPromptTrigger[SpreadsheetUserPromptTrigger["PasteError"] = 14] = "PasteError";
    /**
     * The target range(s) intersect with but does not contain one or more merged cells.
     */
    SpreadsheetUserPromptTrigger[SpreadsheetUserPromptTrigger["PasteIntersectsMergedCells"] = 15] = "PasteIntersectsMergedCells";
    /**
     * A paste of one or more tables cannot be performed when multiple worksheets are selected.
     */
    SpreadsheetUserPromptTrigger[SpreadsheetUserPromptTrigger["PasteMultipleSheetsTables"] = 16] = "PasteMultipleSheetsTables";
    /**
     * The target range(s) intersect with but does not contain one or more merged cells.
     */
    SpreadsheetUserPromptTrigger[SpreadsheetUserPromptTrigger["IntersectsMergedCells"] = 17] = "IntersectsMergedCells";
    /**
     * The selection is invalid for a copy operation. If there are multiple ranges then the items must have the same start and end row or start and end column without overlapping and without leaving any gaps.
     */
    SpreadsheetUserPromptTrigger[SpreadsheetUserPromptTrigger["CopyInvalidRanges"] = 18] = "CopyInvalidRanges";
    /**
     * An error occurred during some operation other than the ones relating to the other members of this enum.
     */
    SpreadsheetUserPromptTrigger[SpreadsheetUserPromptTrigger["General"] = 19] = "General";
    /**
     * The operation cannot be performed when there are multiple sheets selected and the change would affect a table in one of the worksheets.
     */
    SpreadsheetUserPromptTrigger[SpreadsheetUserPromptTrigger["TableChangeWithMultipleSelectedSheets"] = 20] = "TableChangeWithMultipleSelectedSheets";
    /**
     * An error occurred while trying to navigate to the target address of a hyperlink.
     */
    SpreadsheetUserPromptTrigger[SpreadsheetUserPromptTrigger["InvalidHyperlinkAddress"] = 21] = "InvalidHyperlinkAddress";
    /**
     * The hyperlink is a reference to a location within the workbook but that location is not a location that currently exists.
     */
    SpreadsheetUserPromptTrigger[SpreadsheetUserPromptTrigger["InvalidHyperlinkReference"] = 22] = "InvalidHyperlinkReference";
    /**
     * The operation being performed involves one or more cells that are locked in a protected Worksheet.
     */
    SpreadsheetUserPromptTrigger[SpreadsheetUserPromptTrigger["InvalidProtectedWorksheetChange"] = 23] = "InvalidProtectedWorksheetChange";
    /**
     * The operation being performed involves one or more cells that are locked but not all the locked cells can be unlocked by a single range or not all required ranges were unlocked when the [[Spreadsheet.editRangePasswordNeeded]] event was invoked.
     */
    SpreadsheetUserPromptTrigger[SpreadsheetUserPromptTrigger["NoSingleAllowedEditRange"] = 24] = "NoSingleAllowedEditRange";
    /**
     * The Locked state of the target cells for an array formula are not consistent.
     */
    SpreadsheetUserPromptTrigger[SpreadsheetUserPromptTrigger["InvalidArrayFormulaLockedState"] = 25] = "InvalidArrayFormulaLockedState";
    /**
     * Changes cannot be made to only a portion of the data table.
     */
    SpreadsheetUserPromptTrigger[SpreadsheetUserPromptTrigger["ChangePartOfDataTable"] = 26] = "ChangePartOfDataTable";
    /**
     * One or more cells are locked within the columns that are being deleted.
     */
    SpreadsheetUserPromptTrigger[SpreadsheetUserPromptTrigger["DeletingLockedColumnCells"] = 27] = "DeletingLockedColumnCells";
    /**
     * One or more cells are locked within the rows that are being deleted.
     */
    SpreadsheetUserPromptTrigger[SpreadsheetUserPromptTrigger["DeletingLockedRowCells"] = 28] = "DeletingLockedRowCells";
    /**
     * The paste operation will affect a large number of cells and may take a long time to complete.
     */
    SpreadsheetUserPromptTrigger[SpreadsheetUserPromptTrigger["LargePasteOperation"] = 29] = "LargePasteOperation";
    /**
     * The specified or calculated range for the operation is not valid. It may not intersect the used range or may contain table and non-table regions.
     */
    SpreadsheetUserPromptTrigger[SpreadsheetUserPromptTrigger["InvalidSortOrFilterRange"] = 30] = "InvalidSortOrFilterRange";
    /**
     * The copy operation will include a large number of cells and may take a long time to complete.
     */
    SpreadsheetUserPromptTrigger[SpreadsheetUserPromptTrigger["LargeCopyOperation"] = 31] = "LargeCopyOperation";
})(SpreadsheetUserPromptTrigger || (SpreadsheetUserPromptTrigger = {}));
/**
 * @hidden
 */
export var SpreadsheetUserPromptTrigger_$type = markEnum('SpreadsheetUserPromptTrigger', 'ClearCellContentError,0|FormulaParseError,1|EditError,2|InvalidWorksheetName,3|ConflictingWorksheetName,4|DeletingWorksheets,5|InvalidCommandForOverlappingSelections,6|InvalidCommandForMultipleSelections,7|InvalidCommandForMixedCellSelections,8|InvalidNameBoxValue,9|PasteCellRangeSize,10|PasteMultipleSourceAndTargetRanges,11|PasteInvalidSourceRanges,12|PasteInvalidSheetCount,13|PasteError,14|PasteIntersectsMergedCells,15|PasteMultipleSheetsTables,16|IntersectsMergedCells,17|CopyInvalidRanges,18|General,19|TableChangeWithMultipleSelectedSheets,20|InvalidHyperlinkAddress,21|InvalidHyperlinkReference,22|InvalidProtectedWorksheetChange,23|NoSingleAllowedEditRange,24|InvalidArrayFormulaLockedState,25|ChangePartOfDataTable,26|DeletingLockedColumnCells,27|DeletingLockedRowCells,28|LargePasteOperation,29|InvalidSortOrFilterRange,30|LargeCopyOperation,31');
//# sourceMappingURL=SpreadsheetUserPromptTrigger.js.map
