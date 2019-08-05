import { Type } from "../../igniteui-angular-core/ES5/type";
/**
 * Identifies the action that led to the prompt being displayed.
 */
export declare enum SpreadsheetUserPromptTrigger {
    /**
     * An error occurred while clearing the contents of the selected cells.
     */
    ClearCellContentError = 0,
    /**
     * An error occurred while parsing the formula entered while in edit mode.
     */
    FormulaParseError = 1,
    /**
     * An error occurred while attempting to update the active cell or selected cells while exiting edit mode.
     */
    EditError = 2,
    /**
     * The name entered during an in-place edit/rename of a Worksheet Name violates the constraints.
     */
    InvalidWorksheetName = 3,
    /**
     * The name entered during an in-place edit/rename of a Worksheet Name conflicts with the name of an existing Worksheet.
     */
    ConflictingWorksheetName = 4,
    /**
     * One or more worksheets are being deleted which may result in loss of data.
     */
    DeletingWorksheets = 5,
    /**
     * A command was being invoked that isn't valid when there are selected cell ranges that overlap.
     */
    InvalidCommandForOverlappingSelections = 6,
    /**
     * A command was being invoked that isn't valid when there is more than one selected cell ranges.
     */
    InvalidCommandForMultipleSelections = 7,
    /**
     * A command was being invoked that isn't valid when there are a combination of rows or columns and cells selected.
     */
    InvalidCommandForMixedCellSelections = 8,
    /**
     * A value was entered into the name box of the formula bar that did not represent the address to navigate to nor a valid name to use for the selection.
     */
    InvalidNameBoxValue = 9,
    /**
     * The source area and target areas of the paste operation do have have the same size.
     */
    PasteCellRangeSize = 10,
    /**
     * There are multiple cell ranges in the source and target sheets.
     */
    PasteMultipleSourceAndTargetRanges = 11,
    /**
     * The selection in the source is invalid. Either it is empty/unset or there are multiple cell ranges in the source that do not form a valid copy selection. There must be at least 1 cell range selected and all items must have the same start and end row or start and end column without overlapping and without leaving any gaps.
     */
    PasteInvalidSourceRanges = 12,
    /**
     * The number of selected sheets in the target workbook is not an integral multiple of the number of selected sheets in the source workbook.
     */
    PasteInvalidSheetCount = 13,
    /**
     * An unspecified error occurred during a paste operation.
     */
    PasteError = 14,
    /**
     * The target range(s) intersect with but does not contain one or more merged cells.
     */
    PasteIntersectsMergedCells = 15,
    /**
     * A paste of one or more tables cannot be performed when multiple worksheets are selected.
     */
    PasteMultipleSheetsTables = 16,
    /**
     * The target range(s) intersect with but does not contain one or more merged cells.
     */
    IntersectsMergedCells = 17,
    /**
     * The selection is invalid for a copy operation. If there are multiple ranges then the items must have the same start and end row or start and end column without overlapping and without leaving any gaps.
     */
    CopyInvalidRanges = 18,
    /**
     * An error occurred during some operation other than the ones relating to the other members of this enum.
     */
    General = 19,
    /**
     * The operation cannot be performed when there are multiple sheets selected and the change would affect a table in one of the worksheets.
     */
    TableChangeWithMultipleSelectedSheets = 20,
    /**
     * An error occurred while trying to navigate to the target address of a hyperlink.
     */
    InvalidHyperlinkAddress = 21,
    /**
     * The hyperlink is a reference to a location within the workbook but that location is not a location that currently exists.
     */
    InvalidHyperlinkReference = 22,
    /**
     * The operation being performed involves one or more cells that are locked in a protected Worksheet.
     */
    InvalidProtectedWorksheetChange = 23,
    /**
     * The operation being performed involves one or more cells that are locked but not all the locked cells can be unlocked by a single range or not all required ranges were unlocked when the [[Spreadsheet.editRangePasswordNeeded]] event was invoked.
     */
    NoSingleAllowedEditRange = 24,
    /**
     * The Locked state of the target cells for an array formula are not consistent.
     */
    InvalidArrayFormulaLockedState = 25,
    /**
     * Changes cannot be made to only a portion of the data table.
     */
    ChangePartOfDataTable = 26,
    /**
     * One or more cells are locked within the columns that are being deleted.
     */
    DeletingLockedColumnCells = 27,
    /**
     * One or more cells are locked within the rows that are being deleted.
     */
    DeletingLockedRowCells = 28,
    /**
     * The paste operation will affect a large number of cells and may take a long time to complete.
     */
    LargePasteOperation = 29,
    /**
     * The specified or calculated range for the operation is not valid. It may not intersect the used range or may contain table and non-table regions.
     */
    InvalidSortOrFilterRange = 30,
    /**
     * The copy operation will include a large number of cells and may take a long time to complete.
     */
    LargeCopyOperation = 31
}
/**
 * @hidden
 */
export declare let SpreadsheetUserPromptTrigger_$type: Type;
