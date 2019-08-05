/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { markEnum } from "../../igniteui-angular-core/ES2015/type";
/**
 * Enumeration used to identify an action to be taken by the [[Spreadsheet]]
 */
export var SpreadsheetAction;
(function (SpreadsheetAction) {
    /**
     * Activates the previous [[SpreadsheetPane]] if there are multiple panes and they are not frozen.
     */
    SpreadsheetAction[SpreadsheetAction["ActivatePreviousPane"] = 0] = "ActivatePreviousPane";
    /**
     * Activates the next [[SpreadsheetPane]] if there are multiple panes and they are not frozen.
     */
    SpreadsheetAction[SpreadsheetAction["ActivateNextPane"] = 1] = "ActivateNextPane";
    /**
     * Navigates to the next cell within the selection if multiple cells are selected otherwise navigates to the cell to the right.
     */
    SpreadsheetAction[SpreadsheetAction["CellInSelectionRight"] = 2] = "CellInSelectionRight";
    /**
     * Navigates to the previous cell within the selection if multiple cells are selected otherwise navigates to the cell to the left.
     */
    SpreadsheetAction[SpreadsheetAction["CellInSelectionLeft"] = 3] = "CellInSelectionLeft";
    /**
     * Navigates to the cell above within the selection if multiple cells are selected otherwise navigates to the cell above.
     */
    SpreadsheetAction[SpreadsheetAction["CellInSelectionAbove"] = 4] = "CellInSelectionAbove";
    /**
     * Navigates to the cell below within the selection if multiple cells are selected otherwise navigates to the cell below.
     */
    SpreadsheetAction[SpreadsheetAction["CellInSelectionBelow"] = 5] = "CellInSelectionBelow";
    /**
     * Navigates to the cell to the right of the active cell.
     */
    SpreadsheetAction[SpreadsheetAction["CellRight"] = 6] = "CellRight";
    /**
     * Navigates to the cell to the left of the active cell.
     */
    SpreadsheetAction[SpreadsheetAction["CellLeft"] = 7] = "CellLeft";
    /**
     * Navigates to the cell above the active cell.
     */
    SpreadsheetAction[SpreadsheetAction["CellAbove"] = 8] = "CellAbove";
    /**
     * Navigates to the cell below the active cell.
     */
    SpreadsheetAction[SpreadsheetAction["CellBelow"] = 9] = "CellBelow";
    /**
     * Navigates to the cell to the left of the active cell that has data or the first cell in the row if there are none with data.
     */
    SpreadsheetAction[SpreadsheetAction["CellWithDataLeft"] = 10] = "CellWithDataLeft";
    /**
     * Navigates to the cell to the right of the active cell that has data or the last cell in the row if there are none with data.
     */
    SpreadsheetAction[SpreadsheetAction["CellWithDataRight"] = 11] = "CellWithDataRight";
    /**
     * Navigates to the cell above the active cell that has data or the first cell in the column if there are none with data.
     */
    SpreadsheetAction[SpreadsheetAction["CellWithDataAbove"] = 12] = "CellWithDataAbove";
    /**
     * Navigates to the cell below the active cell that has data or the last cell in the column if there are none with data.
     */
    SpreadsheetAction[SpreadsheetAction["CellWithDataBelow"] = 13] = "CellWithDataBelow";
    /**
     * Navigates to the farthest contiguous cell with data to the left of the active cell. If the active cell has no data or the cell to the left does not have data, it will navigate to the start of the next cell that has data in that direction or the first cell in the row if there are no more cells with data.
     */
    SpreadsheetAction[SpreadsheetAction["EdgeCellWithDataLeft"] = 14] = "EdgeCellWithDataLeft";
    /**
     * Navigates to the farthest contiguous cell with data to the right of the active cell. If the active cell has no data or the cell to the right does not have data, it will navigate to the start of the next cell that has data in that direction or the last cell in the row if there are no more cells with data.
     */
    SpreadsheetAction[SpreadsheetAction["EdgeCellWithDataRight"] = 15] = "EdgeCellWithDataRight";
    /**
     * Navigates to the farthest contiguous cell with data above the active cell. If the active cell has no data or the cell above does not have data, it will navigate to the start of the next cell that has data in that direction or the first cell in the column if there are no more cells with data.
     */
    SpreadsheetAction[SpreadsheetAction["EdgeCellWithDataAbove"] = 16] = "EdgeCellWithDataAbove";
    /**
     * Navigates to the farthest contiguous cell with data below the active cell. If the active cell has no data or the cell below does not have data, it will navigate to the start of the next cell that has data in that direction or the last cell in the column if there are no more cells with data.
     */
    SpreadsheetAction[SpreadsheetAction["EdgeCellWithDataBelow"] = 17] = "EdgeCellWithDataBelow";
    /**
     * Scrolls down one page and activates a cell in the same column and relative visible row.
     */
    SpreadsheetAction[SpreadsheetAction["CellPageBelow"] = 18] = "CellPageBelow";
    /**
     * Scrolls up one page and activates a cell in the same column and relative visible row.
     */
    SpreadsheetAction[SpreadsheetAction["CellPageAbove"] = 19] = "CellPageAbove";
    /**
     * Scrolls right one page and activates a cell in the same row and relative visible column.
     */
    SpreadsheetAction[SpreadsheetAction["CellPageRight"] = 20] = "CellPageRight";
    /**
     * Scrolls left one page and activates a cell in the same row and relative visible column.
     */
    SpreadsheetAction[SpreadsheetAction["CellPageLeft"] = 21] = "CellPageLeft";
    /**
     * Scrolls the active pane's column scroll region left by 1 column.
     */
    SpreadsheetAction[SpreadsheetAction["ScrollLeft"] = 22] = "ScrollLeft";
    /**
     * Scrolls the active pane's column scroll region right by 1 column.
     */
    SpreadsheetAction[SpreadsheetAction["ScrollRight"] = 23] = "ScrollRight";
    /**
     * Scrolls the active pane's row scroll region up by 1 row.
     */
    SpreadsheetAction[SpreadsheetAction["ScrollUp"] = 24] = "ScrollUp";
    /**
     * Scrolls the active pane's row scroll region down by 1 row.
     */
    SpreadsheetAction[SpreadsheetAction["ScrollDown"] = 25] = "ScrollDown";
    /**
     * Scrolls the active pane's column scroll region left by the size of the viewable area.
     */
    SpreadsheetAction[SpreadsheetAction["ScrollPageLeft"] = 26] = "ScrollPageLeft";
    /**
     * Scrolls the active pane's column scroll region right by the size of the viewable area.
     */
    SpreadsheetAction[SpreadsheetAction["ScrollPageRight"] = 27] = "ScrollPageRight";
    /**
     * Scrolls the active pane's row scroll region up by the size of the viewable area.
     */
    SpreadsheetAction[SpreadsheetAction["ScrollPageAbove"] = 28] = "ScrollPageAbove";
    /**
     * Scrolls the active pane's row scroll region down by the size of the viewable area.
     */
    SpreadsheetAction[SpreadsheetAction["ScrollPageBelow"] = 29] = "ScrollPageBelow";
    /**
     * Navigates to the first cell in the row
     */
    SpreadsheetAction[SpreadsheetAction["FirstCellInRow"] = 30] = "FirstCellInRow";
    /**
     * Navigates to the upper left cell in view.
     */
    SpreadsheetAction[SpreadsheetAction["FirstCellInView"] = 31] = "FirstCellInView";
    /**
     * Navigates to the first cell in the Worksheet.
     */
    SpreadsheetAction[SpreadsheetAction["FirstCellInWorksheet"] = 32] = "FirstCellInWorksheet";
    /**
     * Navigates to the cell of the first scrollable column in the row. This is the same as FirstCellInRow unless there are frozen panes and then the first scrollable column is based on the number of frozen column.
     */
    SpreadsheetAction[SpreadsheetAction["FirstScrollableCellInRow"] = 33] = "FirstScrollableCellInRow";
    /**
     * Navigates to the cell for the first scrollable row and column in the Worksheet. This is the same as FirstCellInView unless there are frozen panes and then the first scrollable row and column are based on the number of frozen rows and columns.
     */
    SpreadsheetAction[SpreadsheetAction["FirstScrollableCellInWorksheet"] = 34] = "FirstScrollableCellInWorksheet";
    /**
     * Navigates to the lower right cell in view.
     */
    SpreadsheetAction[SpreadsheetAction["LastCellInView"] = 35] = "LastCellInView";
    /**
     * Changes the [[Spreadsheet.isInEndMode]] to true
     */
    SpreadsheetAction[SpreadsheetAction["EnterEndMode"] = 36] = "EnterEndMode";
    /**
     * Changes the [[Spreadsheet.isInEndMode]] to false
     */
    SpreadsheetAction[SpreadsheetAction["ExitEndMode"] = 37] = "ExitEndMode";
    /**
     * Navigates to the last row and column for which data or formatting have been provided.
     */
    SpreadsheetAction[SpreadsheetAction["LastUsedCell"] = 38] = "LastUsedCell";
    /**
     * Navigates the column of the end of the used range but stays within the current row of the active cell.
     */
    SpreadsheetAction[SpreadsheetAction["LastUsedCellInRow"] = 39] = "LastUsedCellInRow";
    /**
     * Selects the cells adjacent to the active cell that have data or selects the entire worksheet if the current region is already selected or the current cell range selection isn't contained within the calculated current region.
     */
    SpreadsheetAction[SpreadsheetAction["SelectCurrentRegion"] = 40] = "SelectCurrentRegion";
    /**
     * Selects from the active cell to the cell to the right of the active cell.
     */
    SpreadsheetAction[SpreadsheetAction["SelectCellRight"] = 41] = "SelectCellRight";
    /**
     * Selects from the active cell to the cell to the left of the active cell.
     */
    SpreadsheetAction[SpreadsheetAction["SelectCellLeft"] = 42] = "SelectCellLeft";
    /**
     * Selects from the active cell to the cell above the active cell.
     */
    SpreadsheetAction[SpreadsheetAction["SelectCellAbove"] = 43] = "SelectCellAbove";
    /**
     * Selects from the active cell to the cell below the active cell.
     */
    SpreadsheetAction[SpreadsheetAction["SelectCellBelow"] = 44] = "SelectCellBelow";
    /**
     * Selects from the active cell to the cell to the left of the active cell that has data or the first cell in the row if there are none with data.
     */
    SpreadsheetAction[SpreadsheetAction["SelectCellWithDataLeft"] = 45] = "SelectCellWithDataLeft";
    /**
     * Selects from the active cell to the cell to the right of the active cell that has data or the last cell in the row if there are none with data.
     */
    SpreadsheetAction[SpreadsheetAction["SelectCellWithDataRight"] = 46] = "SelectCellWithDataRight";
    /**
     * Selects from the active cell to the cell above the active cell that has data or the first cell in the column if there are none with data.
     */
    SpreadsheetAction[SpreadsheetAction["SelectCellWithDataAbove"] = 47] = "SelectCellWithDataAbove";
    /**
     * Selects from the active cell to the cell below the active cell that has data or the last cell in the column if there are none with data.
     */
    SpreadsheetAction[SpreadsheetAction["SelectCellWithDataBelow"] = 48] = "SelectCellWithDataBelow";
    /**
     * Selects from the active cell to the farthest contiguous cell with data to the left of the active cell. If the active cell has no data or the cell to the left does not have data, it will navigate to the start of the next cell that has data in that direction or the first cell in the row if there are no more cells with data.
     */
    SpreadsheetAction[SpreadsheetAction["SelectEdgeCellWithDataLeft"] = 49] = "SelectEdgeCellWithDataLeft";
    /**
     * Selects from the active cell to the farthest contiguous cell with data to the right of the active cell. If the active cell has no data or the cell to the right does not have data, it will navigate to the start of the next cell that has data in that direction or the last cell in the row if there are no more cells with data.
     */
    SpreadsheetAction[SpreadsheetAction["SelectEdgeCellWithDataRight"] = 50] = "SelectEdgeCellWithDataRight";
    /**
     * Selects from the active cell to the farthest contiguous cell with data above the active cell. If the active cell has no data or the cell above does not have data, it will navigate to the start of the next cell that has data in that direction or the first cell in the column if there are no more cells with data.
     */
    SpreadsheetAction[SpreadsheetAction["SelectEdgeCellWithDataAbove"] = 51] = "SelectEdgeCellWithDataAbove";
    /**
     * Selects from the active cell to the farthest contiguous cell with data below the active cell. If the active cell has no data or the cell below does not have data, it will navigate to the start of the next cell that has data in that direction or the last cell in the column if there are no more cells with data.
     */
    SpreadsheetAction[SpreadsheetAction["SelectEdgeCellWithDataBelow"] = 52] = "SelectEdgeCellWithDataBelow";
    /**
     * Scrolls down one page and selects from the active cell to  a cell in the same column and relative visible row.
     */
    SpreadsheetAction[SpreadsheetAction["SelectCellPageBelow"] = 53] = "SelectCellPageBelow";
    /**
     * Scrolls up one page and selects from the active cell to  a cell in the same column and relative visible row.
     */
    SpreadsheetAction[SpreadsheetAction["SelectCellPageAbove"] = 54] = "SelectCellPageAbove";
    /**
     * Scrolls right one page and selects from the active cell to  a cell in the same row and relative visible column.
     */
    SpreadsheetAction[SpreadsheetAction["SelectCellPageRight"] = 55] = "SelectCellPageRight";
    /**
     * Scrolls left one page and selects from the active cell to a cell in the same row and relative visible column.
     */
    SpreadsheetAction[SpreadsheetAction["SelectCellPageLeft"] = 56] = "SelectCellPageLeft";
    /**
     * Selects from the active cell to the first cell in the row
     */
    SpreadsheetAction[SpreadsheetAction["SelectFirstCellInRow"] = 57] = "SelectFirstCellInRow";
    /**
     * Selects from the active cell to the upper left cell in view.
     */
    SpreadsheetAction[SpreadsheetAction["SelectFirstCellInView"] = 58] = "SelectFirstCellInView";
    /**
     * Selects from the active cell to the first cell in the Worksheet.
     */
    SpreadsheetAction[SpreadsheetAction["SelectFirstCellInWorksheet"] = 59] = "SelectFirstCellInWorksheet";
    /**
     * Selects from the active cell to the cell of the first scrollable column in the row. This is the same as FirstCellInRow unless there are frozen panes and then the first scrollable column is based on the number of frozen column.
     */
    SpreadsheetAction[SpreadsheetAction["SelectFirstScrollableCellInRow"] = 60] = "SelectFirstScrollableCellInRow";
    /**
     * Selects from the active cell to the cell for the first scrollable row and column in the Worksheet. This is the same as FirstCellInView unless there are frozen panes and then the first scrollable row and column are based on the number of frozen rows and columns.
     */
    SpreadsheetAction[SpreadsheetAction["SelectFirstScrollableCellInWorksheet"] = 61] = "SelectFirstScrollableCellInWorksheet";
    /**
     * Selects from the active cell to the lower right cell in view.
     */
    SpreadsheetAction[SpreadsheetAction["SelectLastCellInView"] = 62] = "SelectLastCellInView";
    /**
     * Selects from the active cell to the last row and column for which data or formatting have been provided.
     */
    SpreadsheetAction[SpreadsheetAction["SelectLastUsedCell"] = 63] = "SelectLastUsedCell";
    /**
     * Selects from the active cell the column of the end of the used range but stays within the current row of the active cell.
     */
    SpreadsheetAction[SpreadsheetAction["SelectLastUsedCellInRow"] = 64] = "SelectLastUsedCellInRow";
    /**
     * Replaces the selection range containing the active cell with a selection range that encompasses the rows for that range.
     */
    SpreadsheetAction[SpreadsheetAction["SelectRows"] = 65] = "SelectRows";
    /**
     * Replaces the selection range containing the active cell with a selection range that encompasses the columns for that range.
     */
    SpreadsheetAction[SpreadsheetAction["SelectColumns"] = 66] = "SelectColumns";
    /**
     * Replaces the selection range containing the active cell with a selection range that encompasses the entire worksheet.
     */
    SpreadsheetAction[SpreadsheetAction["SelectAllCells"] = 67] = "SelectAllCells";
    /**
     * Changes the [[Spreadsheet.selectionMode]] to Normal.
     */
    SpreadsheetAction[SpreadsheetAction["SwitchToNormalSelectionMode"] = 68] = "SwitchToNormalSelectionMode";
    /**
     * Changes the [[Spreadsheet.selectionMode]] to ExtendSelection.
     */
    SpreadsheetAction[SpreadsheetAction["SwitchToExtendSelectionMode"] = 69] = "SwitchToExtendSelectionMode";
    /**
     * Changes the [[Spreadsheet.selectionMode]] to AddToSelection.
     */
    SpreadsheetAction[SpreadsheetAction["SwitchToAddToSelectionMode"] = 70] = "SwitchToAddToSelectionMode";
    /**
     * Changes the [[Spreadsheet.activeCell]] to be the upper left most cell in view within the active selection range.
     */
    SpreadsheetAction[SpreadsheetAction["FirstCellInViewWithinSelection"] = 71] = "FirstCellInViewWithinSelection";
    /**
     * Changes the [[Spreadsheet.activeCell]] to be the lower right most cell in view within the active selection range.
     */
    SpreadsheetAction[SpreadsheetAction["LastCellInViewWithinSelection"] = 72] = "LastCellInViewWithinSelection";
    /**
     * Starts in place editing of the [[Spreadsheet.activeCell]] starting with the current value
     */
    SpreadsheetAction[SpreadsheetAction["EnterEditMode"] = 73] = "EnterEditMode";
    /**
     * Starts in place editing of the [[Spreadsheet.activeCell]] starting with an empty value
     */
    SpreadsheetAction[SpreadsheetAction["EnterEditModeAndClearValue"] = 74] = "EnterEditModeAndClearValue";
    /**
     * Ends edit mode of the [[Spreadsheet.activeCell]] and updates the active cell's value based on the current edit value.
     */
    SpreadsheetAction[SpreadsheetAction["ExitEditModeAndUpdateActiveCell"] = 75] = "ExitEditModeAndUpdateActiveCell";
    /**
     * Ends edit mode of the [[Spreadsheet.activeCell]] and updates all the cells within the selection with the cell's value based on the current edit value.
     */
    SpreadsheetAction[SpreadsheetAction["ExitEditModeAndUpdateSelectedCells"] = 76] = "ExitEditModeAndUpdateSelectedCells";
    /**
     * Ends edit mode of the [[Spreadsheet.activeCell]] and updates all the cells within the selection with an array formula from current edit value.
     */
    SpreadsheetAction[SpreadsheetAction["ExitEditModeAndCreateArrayFormula"] = 77] = "ExitEditModeAndCreateArrayFormula";
    /**
     * Ends edit mode of the [[Spreadsheet.activeCell]] and discards any changes made while editing.
     */
    SpreadsheetAction[SpreadsheetAction["ExitEditModeAndDiscardChanges"] = 78] = "ExitEditModeAndDiscardChanges";
    /**
     * Clears the value of the selected cells.
     */
    SpreadsheetAction[SpreadsheetAction["ClearContents"] = 79] = "ClearContents";
    /**
     * Selects the region associated with an array formula that is applied to the active cell.
     */
    SpreadsheetAction[SpreadsheetAction["SelectCurrentArray"] = 80] = "SelectCurrentArray";
    /**
     * Activates the first cell in the next cell range of the [[SpreadsheetSelection]]
     */
    SpreadsheetAction[SpreadsheetAction["CellInNextSelectionRange"] = 81] = "CellInNextSelectionRange";
    /**
     * Activates the first cell in the previous cell range of the [[SpreadsheetSelection]]
     */
    SpreadsheetAction[SpreadsheetAction["CellInPreviousSelectionRange"] = 82] = "CellInPreviousSelectionRange";
    /**
     * Chnages the selection such that it only does not contain any hidden rows or columns.
     */
    SpreadsheetAction[SpreadsheetAction["SelectVisibleCellsOnly"] = 83] = "SelectVisibleCellsOnly";
    /**
     * Changes the selection such that it only contains the ActiveCell.
     */
    SpreadsheetAction[SpreadsheetAction["SelectActiveCellOnly"] = 84] = "SelectActiveCellOnly";
    /**
     * Used to re-execute the last change operation that was undo, if possible.
     */
    SpreadsheetAction[SpreadsheetAction["Redo"] = 85] = "Redo";
    /**
     * Used to reverse the last change operation.
     */
    SpreadsheetAction[SpreadsheetAction["Undo"] = 86] = "Undo";
    /**
     * The cell adjacent to the active cell in the direction indicated by the [[Spreadsheet.enterKeyNavigationDirection]] should be activated.
     */
    SpreadsheetAction[SpreadsheetAction["EnterKeyNavigation"] = 87] = "EnterKeyNavigation";
    /**
     * The cell adjacent to the active cell in the reverse of the direction indicated by the [[Spreadsheet.enterKeyNavigationDirection]] should be activated.
     */
    SpreadsheetAction[SpreadsheetAction["ShiftEnterKeyNavigation"] = 88] = "ShiftEnterKeyNavigation";
    /**
     * Sets the [[RowColumnBase.hidden]] to true for the columns associated with the [[Spreadsheet.activeSelection]].
     */
    SpreadsheetAction[SpreadsheetAction["HideColumns"] = 89] = "HideColumns";
    /**
     * Sets the [[RowColumnBase.hidden]] to false for the columns associated with the [[Spreadsheet.activeSelection]].
     */
    SpreadsheetAction[SpreadsheetAction["UnhideColumns"] = 90] = "UnhideColumns";
    /**
     * Sets the [[RowColumnBase.hidden]] to true for the rows associated with the [[Spreadsheet.activeSelection]].
     */
    SpreadsheetAction[SpreadsheetAction["HideRows"] = 91] = "HideRows";
    /**
     * Sets the [[RowColumnBase.hidden]] to false for the rows associated with the [[Spreadsheet.activeSelection]].
     */
    SpreadsheetAction[SpreadsheetAction["UnhideRows"] = 92] = "UnhideRows";
    /**
     * Updates the [[WorksheetRow.height]] to be -1 for rows associated with the [[Spreadsheet.activeSelection]] so that it will be resized based on the size of the contents.
     */
    SpreadsheetAction[SpreadsheetAction["AutoFitRowHeight"] = 93] = "AutoFitRowHeight";
    /**
     * Updates the [[WorksheetColumn.width]] based on the size of the content in the columns associated with the [[Spreadsheet.activeSelection]] so that it will be resized based on the size of the contents.
     */
    SpreadsheetAction[SpreadsheetAction["AutoFitColumnWidth"] = 94] = "AutoFitColumnWidth";
    /**
     * Merge the selected cells in one row into one cell.
     */
    SpreadsheetAction[SpreadsheetAction["MergeCellsAcross"] = 95] = "MergeCellsAcross";
    /**
     * Merges the selected cells into one cell.
     */
    SpreadsheetAction[SpreadsheetAction["MergeCells"] = 96] = "MergeCells";
    /**
     * Combine and center the contents of the selected cells into a new larger cell.
     */
    SpreadsheetAction[SpreadsheetAction["MergeCellsAndCenter"] = 97] = "MergeCellsAndCenter";
    /**
     * Split the current cell in multiple cells
     */
    SpreadsheetAction[SpreadsheetAction["UnmergeCells"] = 98] = "UnmergeCells";
    /**
     * Adds a new [[Worksheet]] after the current active worksheet and activates it.
     */
    SpreadsheetAction[SpreadsheetAction["AddNewWorksheet"] = 99] = "AddNewWorksheet";
    /**
     * Inserts a new [[Worksheet]] for each selected Worksheet before the active worksheet and activates the first new sheet.
     */
    SpreadsheetAction[SpreadsheetAction["InsertNewWorksheets"] = 100] = "InsertNewWorksheets";
    /**
     * Activates the next visible [[Worksheet]] after the [[Spreadsheet.activeWorksheet]]
     */
    SpreadsheetAction[SpreadsheetAction["ActivateNextWorksheet"] = 101] = "ActivateNextWorksheet";
    /**
     * Activates the previous visible [[Worksheet]] before the [[Spreadsheet.activeWorksheet]]
     */
    SpreadsheetAction[SpreadsheetAction["ActivatePreviousWorksheet"] = 102] = "ActivatePreviousWorksheet";
    /**
     * Activates and selects the next visible [[Worksheet]] after the [[Spreadsheet.activeWorksheet]]
     */
    SpreadsheetAction[SpreadsheetAction["ActivateAndSelectNextWorksheet"] = 103] = "ActivateAndSelectNextWorksheet";
    /**
     * Activates and selects the previous visible [[Worksheet]] before the [[Spreadsheet.activeWorksheet]]
     */
    SpreadsheetAction[SpreadsheetAction["ActivateAndSelectPreviousWorksheet"] = 104] = "ActivateAndSelectPreviousWorksheet";
    /**
     * Increments the [[WorkbookWindowOptions.firstVisibleTabIndex]] to the next visible worksheet
     */
    SpreadsheetAction[SpreadsheetAction["ScrollNextWorksheet"] = 105] = "ScrollNextWorksheet";
    /**
     * Decrements the [[WorkbookWindowOptions.firstVisibleTabIndex]] to the previous visible worksheet
     */
    SpreadsheetAction[SpreadsheetAction["ScrollPreviousWorksheet"] = 106] = "ScrollPreviousWorksheet";
    /**
     * Scrolls the tab area such that the first visible worksheet tab is in view
     */
    SpreadsheetAction[SpreadsheetAction["ScrollToFirstWorksheet"] = 107] = "ScrollToFirstWorksheet";
    /**
     * Scrolls the tab area such that the last visible worksheet tab is in view
     */
    SpreadsheetAction[SpreadsheetAction["ScrollToLastWorksheet"] = 108] = "ScrollToLastWorksheet";
    /**
     * Activates the visible worksheet that is before the first worksheet tab in view.
     */
    SpreadsheetAction[SpreadsheetAction["ActivatePreviousOutOfViewWorksheet"] = 109] = "ActivatePreviousOutOfViewWorksheet";
    /**
     * Activates the visible worksheet that is the last partially visible worksheet tab in view or next visible worksheet if the last visible item is fully in view.
     */
    SpreadsheetAction[SpreadsheetAction["ActivateNextOutOfViewWorksheet"] = 110] = "ActivateNextOutOfViewWorksheet";
    /**
     * Selects all the visible worksheet tabs within the [[Spreadsheet.workbook]]
     */
    SpreadsheetAction[SpreadsheetAction["SelectAllWorksheets"] = 111] = "SelectAllWorksheets";
    /**
     * Clears the selected worksheet tabs such that only the active tab is selected.
     */
    SpreadsheetAction[SpreadsheetAction["UnselectWorksheets"] = 112] = "UnselectWorksheets";
    /**
     * Enters edit mode on the tab associated with the active worksheet.
     */
    SpreadsheetAction[SpreadsheetAction["RenameWorksheet"] = 113] = "RenameWorksheet";
    /**
     * Removes the selected worksheets from the associated Workbook.
     */
    SpreadsheetAction[SpreadsheetAction["DeleteWorksheets"] = 114] = "DeleteWorksheets";
    /**
     * Changes the magnification of the currently selected [[Worksheet]] of the [[Spreadsheet]] to a higher value in increments of 10%
     */
    SpreadsheetAction[SpreadsheetAction["ZoomIn"] = 115] = "ZoomIn";
    /**
     * Changes the magnification of the currently selected [[Worksheet]] of the [[Spreadsheet]] to a lower value in increments of 10%
     */
    SpreadsheetAction[SpreadsheetAction["ZoomOut"] = 116] = "ZoomOut";
    /**
     * Changes the magnification of the currently selected [[Worksheet]] to display the currently selected cells.
     */
    SpreadsheetAction[SpreadsheetAction["ZoomToSelection"] = 117] = "ZoomToSelection";
    /**
     * Changes the magnification of the currently selected [[Worksheet]] of the [[Spreadsheet]] to 100%
     */
    SpreadsheetAction[SpreadsheetAction["ZoomTo100"] = 118] = "ZoomTo100";
    /**
     * Changes the bold state of the cell format of the current selection based on the bold state of the active cell.
     */
    SpreadsheetAction[SpreadsheetAction["ToggleBold"] = 119] = "ToggleBold";
    /**
     * Changes the italic state of the cell format of the current selection based on the italic state of the active cell.
     */
    SpreadsheetAction[SpreadsheetAction["ToggleItalic"] = 120] = "ToggleItalic";
    /**
     * Changes the strikethrough state of the cell format of the current selection based on the strikethrough state of the active cell.
     */
    SpreadsheetAction[SpreadsheetAction["ToggleStrikeThrough"] = 121] = "ToggleStrikeThrough";
    /**
     * Changes the wrap state of the cell format of the current selection based on the wrap state of the active cell.
     */
    SpreadsheetAction[SpreadsheetAction["ToggleWrapText"] = 122] = "ToggleWrapText";
    /**
     * Increases the Indent of the cell format of the current selection based on the current state of each cell and potentially changing other properties such as horizontal alignment to one that supports indentation.
     */
    SpreadsheetAction[SpreadsheetAction["IncreaseIndentation"] = 123] = "IncreaseIndentation";
    /**
     * Decreases the Indent of the cell format of the current selection based on the current state of each cell and potentially changing other properties such as horizontal alignment to one that supports indentation.
     */
    SpreadsheetAction[SpreadsheetAction["DecreaseIndentation"] = 124] = "DecreaseIndentation";
    /**
     * Increases the size of the font for the cell format of the current selection based on the current state of the active cell.
     */
    SpreadsheetAction[SpreadsheetAction["IncreaseFontSize"] = 125] = "IncreaseFontSize";
    /**
     * Decreases the size of the font for the cell format of the current selection based on the current state of the active cell.
     */
    SpreadsheetAction[SpreadsheetAction["DecreaseFontSize"] = 126] = "DecreaseFontSize";
    /**
     * Changes the horizontal alignment of the cell formats for the current selection switching between Center and General.
     */
    SpreadsheetAction[SpreadsheetAction["AlignHorizontalCenter"] = 127] = "AlignHorizontalCenter";
    /**
     * Changes the horizontal alignment of the cell formats for the current selection switching between Justify and General.
     */
    SpreadsheetAction[SpreadsheetAction["AlignHorizontalJustify"] = 128] = "AlignHorizontalJustify";
    /**
     * Changes the horizontal alignment of the cell formats for the current selection switching between Left and General.
     */
    SpreadsheetAction[SpreadsheetAction["AlignHorizontalLeft"] = 129] = "AlignHorizontalLeft";
    /**
     * Changes the horizontal alignment of the cell formats for the current selection switching between Right and General.
     */
    SpreadsheetAction[SpreadsheetAction["AlignHorizontalRight"] = 130] = "AlignHorizontalRight";
    /**
     * Changes the vertical alignment of the cell formats for the current selection to Top.
     */
    SpreadsheetAction[SpreadsheetAction["AlignVerticalTop"] = 131] = "AlignVerticalTop";
    /**
     * Changes the vertical alignment of the cell formats for the current selection to Middle.
     */
    SpreadsheetAction[SpreadsheetAction["AlignVerticalMiddle"] = 132] = "AlignVerticalMiddle";
    /**
     * Changes the vertical alignment of the cell formats for the current selection to Bottom.
     */
    SpreadsheetAction[SpreadsheetAction["AlignVerticalBottom"] = 133] = "AlignVerticalBottom";
    /**
     * Changes the DisplayOptions of the active worksheet to add or remove resizable split areas that are separately scrollable. If the worksheet currently has split areas then the splits will be removed. If the worksheet has frozen areas they will be converted to splits. Otherwise it will create split areas based on the current active cell.
     */
    SpreadsheetAction[SpreadsheetAction["ToggleSplitPanes"] = 134] = "ToggleSplitPanes";
    /**
     * Changes the DisplayOptions of the active worksheet to add or remove frozen areas. If the worksheet currently has frozen areas then they will be removed. If the worksheet currently has unfrozen splits then they will be converted to frozen splits. Otherwise it will create frozen areas based on the current active cell.
     */
    SpreadsheetAction[SpreadsheetAction["ToggleFreezePanes"] = 135] = "ToggleFreezePanes";
    /**
     * Changes the DisplayOptions of the active worksheet so that the first currently visible row will be frozen at the top and the bottom area can scroll from the next row until the last row.
     */
    SpreadsheetAction[SpreadsheetAction["FreezeFirstRow"] = 136] = "FreezeFirstRow";
    /**
     * Changes the DisplayOptions of the active worksheet so that the first currently visible column will be frozen at the left and the right area can scroll from the next column until the last column.
     */
    SpreadsheetAction[SpreadsheetAction["FreezeFirstColumn"] = 137] = "FreezeFirstColumn";
    /**
     * Removes the vertical split and sets the LeftPaneWidth of the UnfrozenPaneSettings to 0.
     */
    SpreadsheetAction[SpreadsheetAction["RemoveColumnScrollRegionSplit"] = 138] = "RemoveColumnScrollRegionSplit";
    /**
     * Adjusts the width of the left row scroll region such that it is aligned to the edge of a column.
     */
    SpreadsheetAction[SpreadsheetAction["SnapColumnScrollRegionSplit"] = 139] = "SnapColumnScrollRegionSplit";
    /**
     * Removes the horizontal split and sets the TopPaneHeight of the UnfrozenPaneSettings to 0.
     */
    SpreadsheetAction[SpreadsheetAction["RemoveRowScrollRegionSplit"] = 140] = "RemoveRowScrollRegionSplit";
    /**
     * Adjusts the height of the top row scroll region such that it is aligned to the edge of a row.
     */
    SpreadsheetAction[SpreadsheetAction["SnapRowScrollRegionSplit"] = 141] = "SnapRowScrollRegionSplit";
    /**
     * Removes both the horizontal and vertical splits so that there is only a single scrolling region remaining.
     */
    SpreadsheetAction[SpreadsheetAction["RemoveScrollRegionSplits"] = 142] = "RemoveScrollRegionSplits";
    /**
     * Adjusts the height of the top and left scrolling regions such that they are aligned to the edge or a row and column respectively.
     */
    SpreadsheetAction[SpreadsheetAction["SnapScrollRegionSplits"] = 143] = "SnapScrollRegionSplits";
    /**
     * Removes rows associated with the current selection.
     */
    SpreadsheetAction[SpreadsheetAction["DeleteRows"] = 144] = "DeleteRows";
    /**
     * Inserts rows before the rows associated with the current selection. If multiple rows are selected then multiple rows will be inserted.
     */
    SpreadsheetAction[SpreadsheetAction["InsertRows"] = 145] = "InsertRows";
    /**
     * Removes columns associated with the current selection.
     */
    SpreadsheetAction[SpreadsheetAction["DeleteColumns"] = 146] = "DeleteColumns";
    /**
     * Inserts columns before the columns associated with the current selection. If multiple columns are selected then multiple columns will be inserted.
     */
    SpreadsheetAction[SpreadsheetAction["InsertColumns"] = 147] = "InsertColumns";
    /**
     * Copies the information from the selection to the clipboard and clears the contents.
     */
    SpreadsheetAction[SpreadsheetAction["Cut"] = 148] = "Cut";
    /**
     * Copies the information from the selection to the clipboard.
     */
    SpreadsheetAction[SpreadsheetAction["Copy"] = 149] = "Copy";
    /**
     * Updates the selection based on the information in the clipboard.
     */
    SpreadsheetAction[SpreadsheetAction["Paste"] = 150] = "Paste";
    /**
     * Used while in edit mode to change the [[Spreadsheet.cellEditMode]] and switch between the modes that control how the arrow keys are handled.
     */
    SpreadsheetAction[SpreadsheetAction["ToggleCellEditMode"] = 151] = "ToggleCellEditMode";
    /**
     * Inserts cells before the cells associated with the current selection shifting the existing cells to the right.
     */
    SpreadsheetAction[SpreadsheetAction["InsertCellsShiftRight"] = 152] = "InsertCellsShiftRight";
    /**
     * Inserts cells before the cells associated with the current selection shifting the existing cells down.
     */
    SpreadsheetAction[SpreadsheetAction["InsertCellsShiftDown"] = 153] = "InsertCellsShiftDown";
    /**
     * Deletes the cells associated with the current selection and shifts the cells that exist on the right of the selection to the left.
     */
    SpreadsheetAction[SpreadsheetAction["DeleteCellsShiftLeft"] = 154] = "DeleteCellsShiftLeft";
    /**
     * Deletes the cells associated with the current selection and shifts the cells that exist below of the selection upward.
     */
    SpreadsheetAction[SpreadsheetAction["DeleteCellsShiftUp"] = 155] = "DeleteCellsShiftUp";
    /**
     * Inserts cells based on the current selection and shifts the cells based on where data is in adjacent cells.
     */
    SpreadsheetAction[SpreadsheetAction["InsertCells"] = 156] = "InsertCells";
    /**
     * Deletes the cells associated with the current selection and shifts the cells based on where data is in adjacent cells.
     */
    SpreadsheetAction[SpreadsheetAction["DeleteCells"] = 157] = "DeleteCells";
    /**
     * Resets the cell format for the cells associated with the selection including the row and column cell format for rows and columns that are entirely selected.
     */
    SpreadsheetAction[SpreadsheetAction["ClearFormats"] = 158] = "ClearFormats";
    /**
     * Changes the [[DisplayOptions.showFormulasInCells]] of the selected worksheets.
     */
    SpreadsheetAction[SpreadsheetAction["ToggleShowFormulasInCells"] = 159] = "ToggleShowFormulasInCells";
    /**
     * Changes the underline state of the cell format of the current selection based on the underline state of the active cell.
     */
    SpreadsheetAction[SpreadsheetAction["ToggleUnderline"] = 160] = "ToggleUnderline";
    /**
     * Changes the underline state of the cell format of the current selection based on the underline state of the active cell.
     */
    SpreadsheetAction[SpreadsheetAction["ToggleDoubleUnderline"] = 161] = "ToggleDoubleUnderline";
    /**
     * Changes the superscript state of the cell format of the current selection based on the superscript state of the active cell.
     */
    SpreadsheetAction[SpreadsheetAction["ToggleSuperscript"] = 162] = "ToggleSuperscript";
    /**
     * Changes the subscript state of the cell format of the current selection based on the subscript state of the active cell.
     */
    SpreadsheetAction[SpreadsheetAction["ToggleSubscript"] = 163] = "ToggleSubscript";
    /**
     * Executes the hyperlink associated with the selection when a single cell is selected.
     */
    SpreadsheetAction[SpreadsheetAction["OpenHyperlink"] = 164] = "OpenHyperlink";
    /**
     * Removes hyperlinks associated with the selected cells.
     */
    SpreadsheetAction[SpreadsheetAction["RemoveHyperlinks"] = 165] = "RemoveHyperlinks";
    /**
     * Removes hyperlinks from the selected cells without removing the formatting.
     */
    SpreadsheetAction[SpreadsheetAction["ClearHyperlinks"] = 166] = "ClearHyperlinks";
    /**
     * Navigates to the leftmost unlocked cell of the topmost row.
     */
    SpreadsheetAction[SpreadsheetAction["FirstUnlockedCell"] = 167] = "FirstUnlockedCell";
    /**
     * Navigates to the rightmost unlocked cell of the bottommost row.
     */
    SpreadsheetAction[SpreadsheetAction["LastUnlockedCell"] = 168] = "LastUnlockedCell";
    /**
     * Resets the NameBoxWidth to its default value.
     */
    SpreadsheetAction[SpreadsheetAction["ResetNameBoxWidth"] = 169] = "ResetNameBoxWidth";
    /**
     * Checks the validity of all the cells in the current [[Spreadsheet.activeWorksheet]] based on their associated DataValidationRule if it has one.
     */
    SpreadsheetAction[SpreadsheetAction["CircleInvalidData"] = 170] = "CircleInvalidData";
    /**
     * Clears any invalidation circles that are cached for the current [[Spreadsheet.activeWorksheet]]
     */
    SpreadsheetAction[SpreadsheetAction["ClearValidationCircles"] = 171] = "ClearValidationCircles";
    /**
     * Exits the renaming of a worksheet without committing the changes to the name
     */
    SpreadsheetAction[SpreadsheetAction["CancelRenameWorksheet"] = 172] = "CancelRenameWorksheet";
    /**
     * Attempts to exit the renaming of a worksheet and committing the changes to the name.
     */
    SpreadsheetAction[SpreadsheetAction["CommitRenameWorksheet"] = 173] = "CommitRenameWorksheet";
    /**
     * Inserts one or more columns in the [[Spreadsheet.activeTable]] based on the current selection width relative to the left
     * edge of the selection. Note, the selection must be completely within the table and only 1 worksheet may be selected.
     */
    SpreadsheetAction[SpreadsheetAction["InsertTableColumns"] = 174] = "InsertTableColumns";
    /**
     * Adds one column to the end of the [[Spreadsheet.activeTable]] Note, the selection must be completely within the table
     * and only 1 worksheet may be selected.
     */
    SpreadsheetAction[SpreadsheetAction["AddTableColumn"] = 175] = "AddTableColumn";
    /**
     * Inserts one or more rows in the [[Spreadsheet.activeTable]] based on the current selection height relative to the top edge
     * of the selection. Note, the selection must be completely within the table and not intersect with the header row and only 1 worksheet
     * may be selected.
     */
    SpreadsheetAction[SpreadsheetAction["InsertTableRows"] = 176] = "InsertTableRows";
    /**
     * Adds one row at the end of the [[Spreadsheet.activeTable]]. Note, the selection must be completely within the table and not
     * intersect with the header row and only 1 worksheet may be selected.
     */
    SpreadsheetAction[SpreadsheetAction["AddTableRow"] = 177] = "AddTableRow";
    /**
     * Deletes one or more columns in the [[Spreadsheet.activeTable]] based on the current selection.  Note, the selection must be
     * completely within the table and only 1 worksheet may be selected.
     */
    SpreadsheetAction[SpreadsheetAction["DeleteTableColumns"] = 178] = "DeleteTableColumns";
    /**
     * Deletes one or more rows in the [[Spreadsheet.activeTable]] based on the current selection.  Note, the selection must be completely
     * within the table and not intersect with the header row and only 1 worksheet may be selected.
     */
    SpreadsheetAction[SpreadsheetAction["DeleteTableRows"] = 179] = "DeleteTableRows";
    /**
     * Selects the data area of the columns in the [[Spreadsheet.activeTable]] based on the portion of the active range of the current selection
     * that intersects with the table. If the intersection includes the header or footer rows then the operation is the same as SelectEntireTableColumn
     */
    SpreadsheetAction[SpreadsheetAction["SelectTableColumnData"] = 180] = "SelectTableColumnData";
    /**
     * Selects the cells of the entire columns in the [[Spreadsheet.activeTable]] based on the portion of the active range of the current selection
     * that intersects with the table.
     */
    SpreadsheetAction[SpreadsheetAction["SelectEntireTableColumn"] = 181] = "SelectEntireTableColumn";
    /**
     * Selects the cells of the entire rows in the [[Spreadsheet.activeTable]] based on the portion of the active range of the current selection
     * that intersects with the table.
     */
    SpreadsheetAction[SpreadsheetAction["SelectTableRow"] = 182] = "SelectTableRow";
    /**
     * Changes the visibility of the total row in the [[Spreadsheet.activeTable]].
     */
    SpreadsheetAction[SpreadsheetAction["ToggleTableTotalRow"] = 183] = "ToggleTableTotalRow";
    /**
     * Removes the [[Spreadsheet.activeTable]] and converts it to a normal range of cells.
     */
    SpreadsheetAction[SpreadsheetAction["ConvertTableToRange"] = 184] = "ConvertTableToRange";
    /**
     * This command turns on or off filtering for the current selection. The exact changes will depend on whether the current selection is within the
     * [[Spreadsheet.activeTable]]. If within a table and the [[WorksheetTable.isFilterUIVisible]] is false, this will ensure the
     * [[WorksheetTable.isHeaderRowVisible]] and [[WorksheetTable.isFilterUIVisible]] are true; otherwise it will invoke
     * [[WorksheetTable.clearFilters]] and set the [[WorksheetTable.isFilterUIVisible]] is false. Outside of a table, the property
     * affects the [[Worksheet.filterSettings]]. If there is a filtered region then the command invokes the
     * [[WorksheetFilterSettings.clearFilters]] and then clears/removes the region; otherwise it set the
     * worksheet filter region to a region relative to the selection. The command is not available if the selection intesects table and non-table cells
     * and cannot be performed if there are mulitple selection ranges.
     */
    SpreadsheetAction[SpreadsheetAction["ToggleFilter"] = 185] = "ToggleFilter";
    /**
     * This causes a descending sort for the current selection. The exact changes will depend on whether the current selection is within the
     * [[Spreadsheet.activeTable]]. If the selection is within a table then the column associated with the [[SpreadsheetSelection.activeCell]]
     * is sorted descending. If the selection is not within a table then the data range associated with the selection is sorted descending via the
     * [[Worksheet.sortSettings]]. The command is not available if the selection intesects table and non-table cells and cannot be performed if there
     * are multiple selection ranges. This command may also be executed with a string containing the A1 format cell address of the target cell for the operation.
     */
    SpreadsheetAction[SpreadsheetAction["SortDescending"] = 186] = "SortDescending";
    /**
     * This causes an ascending sort for the current selection. The exact changes will depend on whether the current selection is within the
     * [[Spreadsheet.activeTable]]. If the selection is within a table then the column associated with the [[SpreadsheetSelection.activeCell]]
     * is sorted ascending. If the selection is not within a table then the data range associated with the selection is sorted ascending via the
     * [[Worksheet.sortSettings]]. The command is not available if the selection intesects table and non-table cells and cannot be performed if there
     * are multiple selection ranges. This command may also be executed with a string containing the A1 format cell address of the target cell for the operation.
     */
    SpreadsheetAction[SpreadsheetAction["SortAscending"] = 187] = "SortAscending";
    /**
     * Clears all the filter and sort settings for the [[SpreadsheetSelection.activeCell]] of the [[Spreadsheet.activeSelection]]. If the
     * active cell is within the [[Spreadsheet.activeTable]] then the filter and sort information of the table is cleared. If the cell is not within
     * a table the [[Worksheet.filterSettings]] sort and filtering are cleared even if the cell is not within its region. The command is not available
     * when there are multiple worksheets selected or if the active cell is in an area that does not have any sorting or filtering.
     */
    SpreadsheetAction[SpreadsheetAction["ClearAllFilterAndSort"] = 188] = "ClearAllFilterAndSort";
    /**
     * Clears the filter for the column associated with the [[SpreadsheetSelection.activeCell]] of the [[Spreadsheet.activeSelection]]. The
     * command is not available when there are multiple worksheets selected or if the active cell is within a column that does not have any filtering. This
     * command may also be executed with a string containing the A1 format cell address of the target cell for the operation.
     */
    SpreadsheetAction[SpreadsheetAction["ClearFilter"] = 189] = "ClearFilter";
    /**
     * Reapplies the filter and sort settings for the [[SpreadsheetSelection.activeCell]] of the [[Spreadsheet.activeSelection]]. If the
     * active cell is within the [[Spreadsheet.activeTable]] then the filter and sort information of the table is reapplied. If the cell is not
     * within a table the [[Worksheet.filterSettings]] sort and filtering are repplied even if the cell is not within its region. The command is not
     * available when there are multiple worksheets selected or if the active cell is within a table that does not have any sorting or filtering.
     */
    SpreadsheetAction[SpreadsheetAction["ReapplyFilterAndSort"] = 190] = "ReapplyFilterAndSort";
    /**
     * Filters the data region based on the current value of the [[SpreadsheetSelection.activeCell]] of the [[Spreadsheet.activeSelection]].
     * If the active cell is within the [[Spreadsheet.activeTable]] then the filter for the column associated with the active cell is set to the new
     * filter. If the cell is within the [[WorksheetFilterSettings.region]] of the
     * [[Worksheet.filterSettings]] then the filter for the column of that region associated with the active cell is set to the new filter. Otherwise
     * a new region is created for the [[Worksheet.filterSettings]] based on the selection and the filter is created for that column.
     */
    SpreadsheetAction[SpreadsheetAction["FilterByCellValue"] = 191] = "FilterByCellValue";
    /**
     * Similar to FilterByCellValue except the filter is based on the resolved background color of the active cell.
     */
    SpreadsheetAction[SpreadsheetAction["FilterByCellColor"] = 192] = "FilterByCellColor";
    /**
     * Similar to FilterByCellValue except the filter is based on the resolved text/font color of the active cell.
     */
    SpreadsheetAction[SpreadsheetAction["FilterByCellFontColor"] = 193] = "FilterByCellFontColor";
    /**
     * Similar to FilterByCellValue except the filter is based on the resolved icon of the active cell.
     */
    SpreadsheetAction[SpreadsheetAction["FilterByCellIcon"] = 194] = "FilterByCellIcon";
    /**
     * Sorts the data region based on the current background color of the [[SpreadsheetSelection.activeCell]] of the [[Spreadsheet.activeSelection]].
     * If the active cell is within the [[Spreadsheet.activeTable]] then the sort for the column associated with the active cell is set to the new
     * sort condition. If the cell is within the [[WorksheetFilterSettings.region]] of the
     * [[Worksheet.filterSettings]] then the sort for the column of that region associated with the active cell is set to the new sort condition. Otherwise
     * the [[Worksheet.sortSettings]] is updated based on the selection and the sort condition is created for that column.  This command may also be
     * executed with a string containing the A1 format cell address of the target cell for the operation.
     */
    SpreadsheetAction[SpreadsheetAction["SortByCellColor"] = 195] = "SortByCellColor";
    /**
     * Similar to SortByCellColor except the sort condition is based on the resolved text/font color of the active cell.
     */
    SpreadsheetAction[SpreadsheetAction["SortByCellFontColor"] = 196] = "SortByCellFontColor";
    /**
     * Similar to SortByCellColor except the sort condition is based on the resolved icon of the active cell.
     */
    SpreadsheetAction[SpreadsheetAction["SortByCellIcon"] = 197] = "SortByCellIcon";
    /**
     * Displays the format cells dialog for the current selection.
     */
    SpreadsheetAction[SpreadsheetAction["ShowFormatCellsDialog"] = 198] = "ShowFormatCellsDialog";
    /**
     * Navigates to the next cell within the [[Spreadsheet.activeTable]] unless the active cell is within the totql row.
     */
    SpreadsheetAction[SpreadsheetAction["CellInTableRight"] = 199] = "CellInTableRight";
    /**
     * Navigates to the previous cell within the [[Spreadsheet.activeCell]] unless the active cell is within the total row.
     */
    SpreadsheetAction[SpreadsheetAction["CellInTableLeft"] = 200] = "CellInTableLeft";
    /**
     * Displays the dropdown associated with the [[Spreadsheet.activeCell]] which may be things such as the filter menu dropdown, the list of values from the cell's list type data validation, a list of formulas for a cell in the total row of a table, etc.
     */
    SpreadsheetAction[SpreadsheetAction["ShowCellDropDown"] = 201] = "ShowCellDropDown";
    /**
     * Displays a list of the string values of the adjacent cells above and below the [[Spreadsheet.activeCell]]
     */
    SpreadsheetAction[SpreadsheetAction["PickFromDropDownList"] = 202] = "PickFromDropDownList";
    /**
     * Displays the custom sort dialog for the worksheet sort region
     */
    SpreadsheetAction[SpreadsheetAction["ShowCustomSortDialog"] = 203] = "ShowCustomSortDialog";
})(SpreadsheetAction || (SpreadsheetAction = {}));
/**
 * @hidden
 */
export let SpreadsheetAction_$type = markEnum('SpreadsheetAction', 'ActivatePreviousPane,0|ActivateNextPane,1|CellInSelectionRight,2|CellInSelectionLeft,3|CellInSelectionAbove,4|CellInSelectionBelow,5|CellRight,6|CellLeft,7|CellAbove,8|CellBelow,9|CellWithDataLeft,10|CellWithDataRight,11|CellWithDataAbove,12|CellWithDataBelow,13|EdgeCellWithDataLeft,14|EdgeCellWithDataRight,15|EdgeCellWithDataAbove,16|EdgeCellWithDataBelow,17|CellPageBelow,18|CellPageAbove,19|CellPageRight,20|CellPageLeft,21|ScrollLeft,22|ScrollRight,23|ScrollUp,24|ScrollDown,25|ScrollPageLeft,26|ScrollPageRight,27|ScrollPageAbove,28|ScrollPageBelow,29|FirstCellInRow,30|FirstCellInView,31|FirstCellInWorksheet,32|FirstScrollableCellInRow,33|FirstScrollableCellInWorksheet,34|LastCellInView,35|EnterEndMode,36|ExitEndMode,37|LastUsedCell,38|LastUsedCellInRow,39|SelectCurrentRegion,40|SelectCellRight,41|SelectCellLeft,42|SelectCellAbove,43|SelectCellBelow,44|SelectCellWithDataLeft,45|SelectCellWithDataRight,46|SelectCellWithDataAbove,47|SelectCellWithDataBelow,48|SelectEdgeCellWithDataLeft,49|SelectEdgeCellWithDataRight,50|SelectEdgeCellWithDataAbove,51|SelectEdgeCellWithDataBelow,52|SelectCellPageBelow,53|SelectCellPageAbove,54|SelectCellPageRight,55|SelectCellPageLeft,56|SelectFirstCellInRow,57|SelectFirstCellInView,58|SelectFirstCellInWorksheet,59|SelectFirstScrollableCellInRow,60|SelectFirstScrollableCellInWorksheet,61|SelectLastCellInView,62|SelectLastUsedCell,63|SelectLastUsedCellInRow,64|SelectRows,65|SelectColumns,66|SelectAllCells,67|SwitchToNormalSelectionMode,68|SwitchToExtendSelectionMode,69|SwitchToAddToSelectionMode,70|FirstCellInViewWithinSelection,71|LastCellInViewWithinSelection,72|EnterEditMode,73|EnterEditModeAndClearValue,74|ExitEditModeAndUpdateActiveCell,75|ExitEditModeAndUpdateSelectedCells,76|ExitEditModeAndCreateArrayFormula,77|ExitEditModeAndDiscardChanges,78|ClearContents,79|SelectCurrentArray,80|CellInNextSelectionRange,81|CellInPreviousSelectionRange,82|SelectVisibleCellsOnly,83|SelectActiveCellOnly,84|Redo,85|Undo,86|EnterKeyNavigation,87|ShiftEnterKeyNavigation,88|HideColumns,89|UnhideColumns,90|HideRows,91|UnhideRows,92|AutoFitRowHeight,93|AutoFitColumnWidth,94|MergeCellsAcross,95|MergeCells,96|MergeCellsAndCenter,97|UnmergeCells,98|AddNewWorksheet,99|InsertNewWorksheets,100|ActivateNextWorksheet,101|ActivatePreviousWorksheet,102|ActivateAndSelectNextWorksheet,103|ActivateAndSelectPreviousWorksheet,104|ScrollNextWorksheet,105|ScrollPreviousWorksheet,106|ScrollToFirstWorksheet,107|ScrollToLastWorksheet,108|ActivatePreviousOutOfViewWorksheet,109|ActivateNextOutOfViewWorksheet,110|SelectAllWorksheets,111|UnselectWorksheets,112|RenameWorksheet,113|DeleteWorksheets,114|ZoomIn,115|ZoomOut,116|ZoomToSelection,117|ZoomTo100,118|ToggleBold,119|ToggleItalic,120|ToggleStrikeThrough,121|ToggleWrapText,122|IncreaseIndentation,123|DecreaseIndentation,124|IncreaseFontSize,125|DecreaseFontSize,126|AlignHorizontalCenter,127|AlignHorizontalJustify,128|AlignHorizontalLeft,129|AlignHorizontalRight,130|AlignVerticalTop,131|AlignVerticalMiddle,132|AlignVerticalBottom,133|ToggleSplitPanes,134|ToggleFreezePanes,135|FreezeFirstRow,136|FreezeFirstColumn,137|RemoveColumnScrollRegionSplit,138|SnapColumnScrollRegionSplit,139|RemoveRowScrollRegionSplit,140|SnapRowScrollRegionSplit,141|RemoveScrollRegionSplits,142|SnapScrollRegionSplits,143|DeleteRows,144|InsertRows,145|DeleteColumns,146|InsertColumns,147|Cut,148|Copy,149|Paste,150|ToggleCellEditMode,151|InsertCellsShiftRight,152|InsertCellsShiftDown,153|DeleteCellsShiftLeft,154|DeleteCellsShiftUp,155|InsertCells,156|DeleteCells,157|ClearFormats,158|ToggleShowFormulasInCells,159|ToggleUnderline,160|ToggleDoubleUnderline,161|ToggleSuperscript,162|ToggleSubscript,163|OpenHyperlink,164|RemoveHyperlinks,165|ClearHyperlinks,166|FirstUnlockedCell,167|LastUnlockedCell,168|ResetNameBoxWidth,169|CircleInvalidData,170|ClearValidationCircles,171|CancelRenameWorksheet,172|CommitRenameWorksheet,173|InsertTableColumns,174|AddTableColumn,175|InsertTableRows,176|AddTableRow,177|DeleteTableColumns,178|DeleteTableRows,179|SelectTableColumnData,180|SelectEntireTableColumn,181|SelectTableRow,182|ToggleTableTotalRow,183|ConvertTableToRange,184|ToggleFilter,185|SortDescending,186|SortAscending,187|ClearAllFilterAndSort,188|ClearFilter,189|ReapplyFilterAndSort,190|FilterByCellValue,191|FilterByCellColor,192|FilterByCellFontColor,193|FilterByCellIcon,194|SortByCellColor,195|SortByCellFontColor,196|SortByCellIcon,197|ShowFormatCellsDialog,198|CellInTableRight,199|CellInTableLeft,200|ShowCellDropDown,201|PickFromDropDownList,202|ShowCustomSortDialog,203');
//# sourceMappingURL=SpreadsheetAction.js.map