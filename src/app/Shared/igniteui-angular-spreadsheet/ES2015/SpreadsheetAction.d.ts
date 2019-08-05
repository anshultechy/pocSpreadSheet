import { Type } from "../../igniteui-angular-core/ES2015/type";
/**
 * Enumeration used to identify an action to be taken by the [[Spreadsheet]]
 */
export declare enum SpreadsheetAction {
    /**
     * Activates the previous [[SpreadsheetPane]] if there are multiple panes and they are not frozen.
     */
    ActivatePreviousPane = 0,
    /**
     * Activates the next [[SpreadsheetPane]] if there are multiple panes and they are not frozen.
     */
    ActivateNextPane = 1,
    /**
     * Navigates to the next cell within the selection if multiple cells are selected otherwise navigates to the cell to the right.
     */
    CellInSelectionRight = 2,
    /**
     * Navigates to the previous cell within the selection if multiple cells are selected otherwise navigates to the cell to the left.
     */
    CellInSelectionLeft = 3,
    /**
     * Navigates to the cell above within the selection if multiple cells are selected otherwise navigates to the cell above.
     */
    CellInSelectionAbove = 4,
    /**
     * Navigates to the cell below within the selection if multiple cells are selected otherwise navigates to the cell below.
     */
    CellInSelectionBelow = 5,
    /**
     * Navigates to the cell to the right of the active cell.
     */
    CellRight = 6,
    /**
     * Navigates to the cell to the left of the active cell.
     */
    CellLeft = 7,
    /**
     * Navigates to the cell above the active cell.
     */
    CellAbove = 8,
    /**
     * Navigates to the cell below the active cell.
     */
    CellBelow = 9,
    /**
     * Navigates to the cell to the left of the active cell that has data or the first cell in the row if there are none with data.
     */
    CellWithDataLeft = 10,
    /**
     * Navigates to the cell to the right of the active cell that has data or the last cell in the row if there are none with data.
     */
    CellWithDataRight = 11,
    /**
     * Navigates to the cell above the active cell that has data or the first cell in the column if there are none with data.
     */
    CellWithDataAbove = 12,
    /**
     * Navigates to the cell below the active cell that has data or the last cell in the column if there are none with data.
     */
    CellWithDataBelow = 13,
    /**
     * Navigates to the farthest contiguous cell with data to the left of the active cell. If the active cell has no data or the cell to the left does not have data, it will navigate to the start of the next cell that has data in that direction or the first cell in the row if there are no more cells with data.
     */
    EdgeCellWithDataLeft = 14,
    /**
     * Navigates to the farthest contiguous cell with data to the right of the active cell. If the active cell has no data or the cell to the right does not have data, it will navigate to the start of the next cell that has data in that direction or the last cell in the row if there are no more cells with data.
     */
    EdgeCellWithDataRight = 15,
    /**
     * Navigates to the farthest contiguous cell with data above the active cell. If the active cell has no data or the cell above does not have data, it will navigate to the start of the next cell that has data in that direction or the first cell in the column if there are no more cells with data.
     */
    EdgeCellWithDataAbove = 16,
    /**
     * Navigates to the farthest contiguous cell with data below the active cell. If the active cell has no data or the cell below does not have data, it will navigate to the start of the next cell that has data in that direction or the last cell in the column if there are no more cells with data.
     */
    EdgeCellWithDataBelow = 17,
    /**
     * Scrolls down one page and activates a cell in the same column and relative visible row.
     */
    CellPageBelow = 18,
    /**
     * Scrolls up one page and activates a cell in the same column and relative visible row.
     */
    CellPageAbove = 19,
    /**
     * Scrolls right one page and activates a cell in the same row and relative visible column.
     */
    CellPageRight = 20,
    /**
     * Scrolls left one page and activates a cell in the same row and relative visible column.
     */
    CellPageLeft = 21,
    /**
     * Scrolls the active pane's column scroll region left by 1 column.
     */
    ScrollLeft = 22,
    /**
     * Scrolls the active pane's column scroll region right by 1 column.
     */
    ScrollRight = 23,
    /**
     * Scrolls the active pane's row scroll region up by 1 row.
     */
    ScrollUp = 24,
    /**
     * Scrolls the active pane's row scroll region down by 1 row.
     */
    ScrollDown = 25,
    /**
     * Scrolls the active pane's column scroll region left by the size of the viewable area.
     */
    ScrollPageLeft = 26,
    /**
     * Scrolls the active pane's column scroll region right by the size of the viewable area.
     */
    ScrollPageRight = 27,
    /**
     * Scrolls the active pane's row scroll region up by the size of the viewable area.
     */
    ScrollPageAbove = 28,
    /**
     * Scrolls the active pane's row scroll region down by the size of the viewable area.
     */
    ScrollPageBelow = 29,
    /**
     * Navigates to the first cell in the row
     */
    FirstCellInRow = 30,
    /**
     * Navigates to the upper left cell in view.
     */
    FirstCellInView = 31,
    /**
     * Navigates to the first cell in the Worksheet.
     */
    FirstCellInWorksheet = 32,
    /**
     * Navigates to the cell of the first scrollable column in the row. This is the same as FirstCellInRow unless there are frozen panes and then the first scrollable column is based on the number of frozen column.
     */
    FirstScrollableCellInRow = 33,
    /**
     * Navigates to the cell for the first scrollable row and column in the Worksheet. This is the same as FirstCellInView unless there are frozen panes and then the first scrollable row and column are based on the number of frozen rows and columns.
     */
    FirstScrollableCellInWorksheet = 34,
    /**
     * Navigates to the lower right cell in view.
     */
    LastCellInView = 35,
    /**
     * Changes the [[Spreadsheet.isInEndMode]] to true
     */
    EnterEndMode = 36,
    /**
     * Changes the [[Spreadsheet.isInEndMode]] to false
     */
    ExitEndMode = 37,
    /**
     * Navigates to the last row and column for which data or formatting have been provided.
     */
    LastUsedCell = 38,
    /**
     * Navigates the column of the end of the used range but stays within the current row of the active cell.
     */
    LastUsedCellInRow = 39,
    /**
     * Selects the cells adjacent to the active cell that have data or selects the entire worksheet if the current region is already selected or the current cell range selection isn't contained within the calculated current region.
     */
    SelectCurrentRegion = 40,
    /**
     * Selects from the active cell to the cell to the right of the active cell.
     */
    SelectCellRight = 41,
    /**
     * Selects from the active cell to the cell to the left of the active cell.
     */
    SelectCellLeft = 42,
    /**
     * Selects from the active cell to the cell above the active cell.
     */
    SelectCellAbove = 43,
    /**
     * Selects from the active cell to the cell below the active cell.
     */
    SelectCellBelow = 44,
    /**
     * Selects from the active cell to the cell to the left of the active cell that has data or the first cell in the row if there are none with data.
     */
    SelectCellWithDataLeft = 45,
    /**
     * Selects from the active cell to the cell to the right of the active cell that has data or the last cell in the row if there are none with data.
     */
    SelectCellWithDataRight = 46,
    /**
     * Selects from the active cell to the cell above the active cell that has data or the first cell in the column if there are none with data.
     */
    SelectCellWithDataAbove = 47,
    /**
     * Selects from the active cell to the cell below the active cell that has data or the last cell in the column if there are none with data.
     */
    SelectCellWithDataBelow = 48,
    /**
     * Selects from the active cell to the farthest contiguous cell with data to the left of the active cell. If the active cell has no data or the cell to the left does not have data, it will navigate to the start of the next cell that has data in that direction or the first cell in the row if there are no more cells with data.
     */
    SelectEdgeCellWithDataLeft = 49,
    /**
     * Selects from the active cell to the farthest contiguous cell with data to the right of the active cell. If the active cell has no data or the cell to the right does not have data, it will navigate to the start of the next cell that has data in that direction or the last cell in the row if there are no more cells with data.
     */
    SelectEdgeCellWithDataRight = 50,
    /**
     * Selects from the active cell to the farthest contiguous cell with data above the active cell. If the active cell has no data or the cell above does not have data, it will navigate to the start of the next cell that has data in that direction or the first cell in the column if there are no more cells with data.
     */
    SelectEdgeCellWithDataAbove = 51,
    /**
     * Selects from the active cell to the farthest contiguous cell with data below the active cell. If the active cell has no data or the cell below does not have data, it will navigate to the start of the next cell that has data in that direction or the last cell in the column if there are no more cells with data.
     */
    SelectEdgeCellWithDataBelow = 52,
    /**
     * Scrolls down one page and selects from the active cell to  a cell in the same column and relative visible row.
     */
    SelectCellPageBelow = 53,
    /**
     * Scrolls up one page and selects from the active cell to  a cell in the same column and relative visible row.
     */
    SelectCellPageAbove = 54,
    /**
     * Scrolls right one page and selects from the active cell to  a cell in the same row and relative visible column.
     */
    SelectCellPageRight = 55,
    /**
     * Scrolls left one page and selects from the active cell to a cell in the same row and relative visible column.
     */
    SelectCellPageLeft = 56,
    /**
     * Selects from the active cell to the first cell in the row
     */
    SelectFirstCellInRow = 57,
    /**
     * Selects from the active cell to the upper left cell in view.
     */
    SelectFirstCellInView = 58,
    /**
     * Selects from the active cell to the first cell in the Worksheet.
     */
    SelectFirstCellInWorksheet = 59,
    /**
     * Selects from the active cell to the cell of the first scrollable column in the row. This is the same as FirstCellInRow unless there are frozen panes and then the first scrollable column is based on the number of frozen column.
     */
    SelectFirstScrollableCellInRow = 60,
    /**
     * Selects from the active cell to the cell for the first scrollable row and column in the Worksheet. This is the same as FirstCellInView unless there are frozen panes and then the first scrollable row and column are based on the number of frozen rows and columns.
     */
    SelectFirstScrollableCellInWorksheet = 61,
    /**
     * Selects from the active cell to the lower right cell in view.
     */
    SelectLastCellInView = 62,
    /**
     * Selects from the active cell to the last row and column for which data or formatting have been provided.
     */
    SelectLastUsedCell = 63,
    /**
     * Selects from the active cell the column of the end of the used range but stays within the current row of the active cell.
     */
    SelectLastUsedCellInRow = 64,
    /**
     * Replaces the selection range containing the active cell with a selection range that encompasses the rows for that range.
     */
    SelectRows = 65,
    /**
     * Replaces the selection range containing the active cell with a selection range that encompasses the columns for that range.
     */
    SelectColumns = 66,
    /**
     * Replaces the selection range containing the active cell with a selection range that encompasses the entire worksheet.
     */
    SelectAllCells = 67,
    /**
     * Changes the [[Spreadsheet.selectionMode]] to Normal.
     */
    SwitchToNormalSelectionMode = 68,
    /**
     * Changes the [[Spreadsheet.selectionMode]] to ExtendSelection.
     */
    SwitchToExtendSelectionMode = 69,
    /**
     * Changes the [[Spreadsheet.selectionMode]] to AddToSelection.
     */
    SwitchToAddToSelectionMode = 70,
    /**
     * Changes the [[Spreadsheet.activeCell]] to be the upper left most cell in view within the active selection range.
     */
    FirstCellInViewWithinSelection = 71,
    /**
     * Changes the [[Spreadsheet.activeCell]] to be the lower right most cell in view within the active selection range.
     */
    LastCellInViewWithinSelection = 72,
    /**
     * Starts in place editing of the [[Spreadsheet.activeCell]] starting with the current value
     */
    EnterEditMode = 73,
    /**
     * Starts in place editing of the [[Spreadsheet.activeCell]] starting with an empty value
     */
    EnterEditModeAndClearValue = 74,
    /**
     * Ends edit mode of the [[Spreadsheet.activeCell]] and updates the active cell's value based on the current edit value.
     */
    ExitEditModeAndUpdateActiveCell = 75,
    /**
     * Ends edit mode of the [[Spreadsheet.activeCell]] and updates all the cells within the selection with the cell's value based on the current edit value.
     */
    ExitEditModeAndUpdateSelectedCells = 76,
    /**
     * Ends edit mode of the [[Spreadsheet.activeCell]] and updates all the cells within the selection with an array formula from current edit value.
     */
    ExitEditModeAndCreateArrayFormula = 77,
    /**
     * Ends edit mode of the [[Spreadsheet.activeCell]] and discards any changes made while editing.
     */
    ExitEditModeAndDiscardChanges = 78,
    /**
     * Clears the value of the selected cells.
     */
    ClearContents = 79,
    /**
     * Selects the region associated with an array formula that is applied to the active cell.
     */
    SelectCurrentArray = 80,
    /**
     * Activates the first cell in the next cell range of the [[SpreadsheetSelection]]
     */
    CellInNextSelectionRange = 81,
    /**
     * Activates the first cell in the previous cell range of the [[SpreadsheetSelection]]
     */
    CellInPreviousSelectionRange = 82,
    /**
     * Chnages the selection such that it only does not contain any hidden rows or columns.
     */
    SelectVisibleCellsOnly = 83,
    /**
     * Changes the selection such that it only contains the ActiveCell.
     */
    SelectActiveCellOnly = 84,
    /**
     * Used to re-execute the last change operation that was undo, if possible.
     */
    Redo = 85,
    /**
     * Used to reverse the last change operation.
     */
    Undo = 86,
    /**
     * The cell adjacent to the active cell in the direction indicated by the [[Spreadsheet.enterKeyNavigationDirection]] should be activated.
     */
    EnterKeyNavigation = 87,
    /**
     * The cell adjacent to the active cell in the reverse of the direction indicated by the [[Spreadsheet.enterKeyNavigationDirection]] should be activated.
     */
    ShiftEnterKeyNavigation = 88,
    /**
     * Sets the [[RowColumnBase.hidden]] to true for the columns associated with the [[Spreadsheet.activeSelection]].
     */
    HideColumns = 89,
    /**
     * Sets the [[RowColumnBase.hidden]] to false for the columns associated with the [[Spreadsheet.activeSelection]].
     */
    UnhideColumns = 90,
    /**
     * Sets the [[RowColumnBase.hidden]] to true for the rows associated with the [[Spreadsheet.activeSelection]].
     */
    HideRows = 91,
    /**
     * Sets the [[RowColumnBase.hidden]] to false for the rows associated with the [[Spreadsheet.activeSelection]].
     */
    UnhideRows = 92,
    /**
     * Updates the [[WorksheetRow.height]] to be -1 for rows associated with the [[Spreadsheet.activeSelection]] so that it will be resized based on the size of the contents.
     */
    AutoFitRowHeight = 93,
    /**
     * Updates the [[WorksheetColumn.width]] based on the size of the content in the columns associated with the [[Spreadsheet.activeSelection]] so that it will be resized based on the size of the contents.
     */
    AutoFitColumnWidth = 94,
    /**
     * Merge the selected cells in one row into one cell.
     */
    MergeCellsAcross = 95,
    /**
     * Merges the selected cells into one cell.
     */
    MergeCells = 96,
    /**
     * Combine and center the contents of the selected cells into a new larger cell.
     */
    MergeCellsAndCenter = 97,
    /**
     * Split the current cell in multiple cells
     */
    UnmergeCells = 98,
    /**
     * Adds a new [[Worksheet]] after the current active worksheet and activates it.
     */
    AddNewWorksheet = 99,
    /**
     * Inserts a new [[Worksheet]] for each selected Worksheet before the active worksheet and activates the first new sheet.
     */
    InsertNewWorksheets = 100,
    /**
     * Activates the next visible [[Worksheet]] after the [[Spreadsheet.activeWorksheet]]
     */
    ActivateNextWorksheet = 101,
    /**
     * Activates the previous visible [[Worksheet]] before the [[Spreadsheet.activeWorksheet]]
     */
    ActivatePreviousWorksheet = 102,
    /**
     * Activates and selects the next visible [[Worksheet]] after the [[Spreadsheet.activeWorksheet]]
     */
    ActivateAndSelectNextWorksheet = 103,
    /**
     * Activates and selects the previous visible [[Worksheet]] before the [[Spreadsheet.activeWorksheet]]
     */
    ActivateAndSelectPreviousWorksheet = 104,
    /**
     * Increments the [[WorkbookWindowOptions.firstVisibleTabIndex]] to the next visible worksheet
     */
    ScrollNextWorksheet = 105,
    /**
     * Decrements the [[WorkbookWindowOptions.firstVisibleTabIndex]] to the previous visible worksheet
     */
    ScrollPreviousWorksheet = 106,
    /**
     * Scrolls the tab area such that the first visible worksheet tab is in view
     */
    ScrollToFirstWorksheet = 107,
    /**
     * Scrolls the tab area such that the last visible worksheet tab is in view
     */
    ScrollToLastWorksheet = 108,
    /**
     * Activates the visible worksheet that is before the first worksheet tab in view.
     */
    ActivatePreviousOutOfViewWorksheet = 109,
    /**
     * Activates the visible worksheet that is the last partially visible worksheet tab in view or next visible worksheet if the last visible item is fully in view.
     */
    ActivateNextOutOfViewWorksheet = 110,
    /**
     * Selects all the visible worksheet tabs within the [[Spreadsheet.workbook]]
     */
    SelectAllWorksheets = 111,
    /**
     * Clears the selected worksheet tabs such that only the active tab is selected.
     */
    UnselectWorksheets = 112,
    /**
     * Enters edit mode on the tab associated with the active worksheet.
     */
    RenameWorksheet = 113,
    /**
     * Removes the selected worksheets from the associated Workbook.
     */
    DeleteWorksheets = 114,
    /**
     * Changes the magnification of the currently selected [[Worksheet]] of the [[Spreadsheet]] to a higher value in increments of 10%
     */
    ZoomIn = 115,
    /**
     * Changes the magnification of the currently selected [[Worksheet]] of the [[Spreadsheet]] to a lower value in increments of 10%
     */
    ZoomOut = 116,
    /**
     * Changes the magnification of the currently selected [[Worksheet]] to display the currently selected cells.
     */
    ZoomToSelection = 117,
    /**
     * Changes the magnification of the currently selected [[Worksheet]] of the [[Spreadsheet]] to 100%
     */
    ZoomTo100 = 118,
    /**
     * Changes the bold state of the cell format of the current selection based on the bold state of the active cell.
     */
    ToggleBold = 119,
    /**
     * Changes the italic state of the cell format of the current selection based on the italic state of the active cell.
     */
    ToggleItalic = 120,
    /**
     * Changes the strikethrough state of the cell format of the current selection based on the strikethrough state of the active cell.
     */
    ToggleStrikeThrough = 121,
    /**
     * Changes the wrap state of the cell format of the current selection based on the wrap state of the active cell.
     */
    ToggleWrapText = 122,
    /**
     * Increases the Indent of the cell format of the current selection based on the current state of each cell and potentially changing other properties such as horizontal alignment to one that supports indentation.
     */
    IncreaseIndentation = 123,
    /**
     * Decreases the Indent of the cell format of the current selection based on the current state of each cell and potentially changing other properties such as horizontal alignment to one that supports indentation.
     */
    DecreaseIndentation = 124,
    /**
     * Increases the size of the font for the cell format of the current selection based on the current state of the active cell.
     */
    IncreaseFontSize = 125,
    /**
     * Decreases the size of the font for the cell format of the current selection based on the current state of the active cell.
     */
    DecreaseFontSize = 126,
    /**
     * Changes the horizontal alignment of the cell formats for the current selection switching between Center and General.
     */
    AlignHorizontalCenter = 127,
    /**
     * Changes the horizontal alignment of the cell formats for the current selection switching between Justify and General.
     */
    AlignHorizontalJustify = 128,
    /**
     * Changes the horizontal alignment of the cell formats for the current selection switching between Left and General.
     */
    AlignHorizontalLeft = 129,
    /**
     * Changes the horizontal alignment of the cell formats for the current selection switching between Right and General.
     */
    AlignHorizontalRight = 130,
    /**
     * Changes the vertical alignment of the cell formats for the current selection to Top.
     */
    AlignVerticalTop = 131,
    /**
     * Changes the vertical alignment of the cell formats for the current selection to Middle.
     */
    AlignVerticalMiddle = 132,
    /**
     * Changes the vertical alignment of the cell formats for the current selection to Bottom.
     */
    AlignVerticalBottom = 133,
    /**
     * Changes the DisplayOptions of the active worksheet to add or remove resizable split areas that are separately scrollable. If the worksheet currently has split areas then the splits will be removed. If the worksheet has frozen areas they will be converted to splits. Otherwise it will create split areas based on the current active cell.
     */
    ToggleSplitPanes = 134,
    /**
     * Changes the DisplayOptions of the active worksheet to add or remove frozen areas. If the worksheet currently has frozen areas then they will be removed. If the worksheet currently has unfrozen splits then they will be converted to frozen splits. Otherwise it will create frozen areas based on the current active cell.
     */
    ToggleFreezePanes = 135,
    /**
     * Changes the DisplayOptions of the active worksheet so that the first currently visible row will be frozen at the top and the bottom area can scroll from the next row until the last row.
     */
    FreezeFirstRow = 136,
    /**
     * Changes the DisplayOptions of the active worksheet so that the first currently visible column will be frozen at the left and the right area can scroll from the next column until the last column.
     */
    FreezeFirstColumn = 137,
    /**
     * Removes the vertical split and sets the LeftPaneWidth of the UnfrozenPaneSettings to 0.
     */
    RemoveColumnScrollRegionSplit = 138,
    /**
     * Adjusts the width of the left row scroll region such that it is aligned to the edge of a column.
     */
    SnapColumnScrollRegionSplit = 139,
    /**
     * Removes the horizontal split and sets the TopPaneHeight of the UnfrozenPaneSettings to 0.
     */
    RemoveRowScrollRegionSplit = 140,
    /**
     * Adjusts the height of the top row scroll region such that it is aligned to the edge of a row.
     */
    SnapRowScrollRegionSplit = 141,
    /**
     * Removes both the horizontal and vertical splits so that there is only a single scrolling region remaining.
     */
    RemoveScrollRegionSplits = 142,
    /**
     * Adjusts the height of the top and left scrolling regions such that they are aligned to the edge or a row and column respectively.
     */
    SnapScrollRegionSplits = 143,
    /**
     * Removes rows associated with the current selection.
     */
    DeleteRows = 144,
    /**
     * Inserts rows before the rows associated with the current selection. If multiple rows are selected then multiple rows will be inserted.
     */
    InsertRows = 145,
    /**
     * Removes columns associated with the current selection.
     */
    DeleteColumns = 146,
    /**
     * Inserts columns before the columns associated with the current selection. If multiple columns are selected then multiple columns will be inserted.
     */
    InsertColumns = 147,
    /**
     * Copies the information from the selection to the clipboard and clears the contents.
     */
    Cut = 148,
    /**
     * Copies the information from the selection to the clipboard.
     */
    Copy = 149,
    /**
     * Updates the selection based on the information in the clipboard.
     */
    Paste = 150,
    /**
     * Used while in edit mode to change the [[Spreadsheet.cellEditMode]] and switch between the modes that control how the arrow keys are handled.
     */
    ToggleCellEditMode = 151,
    /**
     * Inserts cells before the cells associated with the current selection shifting the existing cells to the right.
     */
    InsertCellsShiftRight = 152,
    /**
     * Inserts cells before the cells associated with the current selection shifting the existing cells down.
     */
    InsertCellsShiftDown = 153,
    /**
     * Deletes the cells associated with the current selection and shifts the cells that exist on the right of the selection to the left.
     */
    DeleteCellsShiftLeft = 154,
    /**
     * Deletes the cells associated with the current selection and shifts the cells that exist below of the selection upward.
     */
    DeleteCellsShiftUp = 155,
    /**
     * Inserts cells based on the current selection and shifts the cells based on where data is in adjacent cells.
     */
    InsertCells = 156,
    /**
     * Deletes the cells associated with the current selection and shifts the cells based on where data is in adjacent cells.
     */
    DeleteCells = 157,
    /**
     * Resets the cell format for the cells associated with the selection including the row and column cell format for rows and columns that are entirely selected.
     */
    ClearFormats = 158,
    /**
     * Changes the [[DisplayOptions.showFormulasInCells]] of the selected worksheets.
     */
    ToggleShowFormulasInCells = 159,
    /**
     * Changes the underline state of the cell format of the current selection based on the underline state of the active cell.
     */
    ToggleUnderline = 160,
    /**
     * Changes the underline state of the cell format of the current selection based on the underline state of the active cell.
     */
    ToggleDoubleUnderline = 161,
    /**
     * Changes the superscript state of the cell format of the current selection based on the superscript state of the active cell.
     */
    ToggleSuperscript = 162,
    /**
     * Changes the subscript state of the cell format of the current selection based on the subscript state of the active cell.
     */
    ToggleSubscript = 163,
    /**
     * Executes the hyperlink associated with the selection when a single cell is selected.
     */
    OpenHyperlink = 164,
    /**
     * Removes hyperlinks associated with the selected cells.
     */
    RemoveHyperlinks = 165,
    /**
     * Removes hyperlinks from the selected cells without removing the formatting.
     */
    ClearHyperlinks = 166,
    /**
     * Navigates to the leftmost unlocked cell of the topmost row.
     */
    FirstUnlockedCell = 167,
    /**
     * Navigates to the rightmost unlocked cell of the bottommost row.
     */
    LastUnlockedCell = 168,
    /**
     * Resets the NameBoxWidth to its default value.
     */
    ResetNameBoxWidth = 169,
    /**
     * Checks the validity of all the cells in the current [[Spreadsheet.activeWorksheet]] based on their associated DataValidationRule if it has one.
     */
    CircleInvalidData = 170,
    /**
     * Clears any invalidation circles that are cached for the current [[Spreadsheet.activeWorksheet]]
     */
    ClearValidationCircles = 171,
    /**
     * Exits the renaming of a worksheet without committing the changes to the name
     */
    CancelRenameWorksheet = 172,
    /**
     * Attempts to exit the renaming of a worksheet and committing the changes to the name.
     */
    CommitRenameWorksheet = 173,
    /**
     * Inserts one or more columns in the [[Spreadsheet.activeTable]] based on the current selection width relative to the left
     * edge of the selection. Note, the selection must be completely within the table and only 1 worksheet may be selected.
     */
    InsertTableColumns = 174,
    /**
     * Adds one column to the end of the [[Spreadsheet.activeTable]] Note, the selection must be completely within the table
     * and only 1 worksheet may be selected.
     */
    AddTableColumn = 175,
    /**
     * Inserts one or more rows in the [[Spreadsheet.activeTable]] based on the current selection height relative to the top edge
     * of the selection. Note, the selection must be completely within the table and not intersect with the header row and only 1 worksheet
     * may be selected.
     */
    InsertTableRows = 176,
    /**
     * Adds one row at the end of the [[Spreadsheet.activeTable]]. Note, the selection must be completely within the table and not
     * intersect with the header row and only 1 worksheet may be selected.
     */
    AddTableRow = 177,
    /**
     * Deletes one or more columns in the [[Spreadsheet.activeTable]] based on the current selection.  Note, the selection must be
     * completely within the table and only 1 worksheet may be selected.
     */
    DeleteTableColumns = 178,
    /**
     * Deletes one or more rows in the [[Spreadsheet.activeTable]] based on the current selection.  Note, the selection must be completely
     * within the table and not intersect with the header row and only 1 worksheet may be selected.
     */
    DeleteTableRows = 179,
    /**
     * Selects the data area of the columns in the [[Spreadsheet.activeTable]] based on the portion of the active range of the current selection
     * that intersects with the table. If the intersection includes the header or footer rows then the operation is the same as SelectEntireTableColumn
     */
    SelectTableColumnData = 180,
    /**
     * Selects the cells of the entire columns in the [[Spreadsheet.activeTable]] based on the portion of the active range of the current selection
     * that intersects with the table.
     */
    SelectEntireTableColumn = 181,
    /**
     * Selects the cells of the entire rows in the [[Spreadsheet.activeTable]] based on the portion of the active range of the current selection
     * that intersects with the table.
     */
    SelectTableRow = 182,
    /**
     * Changes the visibility of the total row in the [[Spreadsheet.activeTable]].
     */
    ToggleTableTotalRow = 183,
    /**
     * Removes the [[Spreadsheet.activeTable]] and converts it to a normal range of cells.
     */
    ConvertTableToRange = 184,
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
    ToggleFilter = 185,
    /**
     * This causes a descending sort for the current selection. The exact changes will depend on whether the current selection is within the
     * [[Spreadsheet.activeTable]]. If the selection is within a table then the column associated with the [[SpreadsheetSelection.activeCell]]
     * is sorted descending. If the selection is not within a table then the data range associated with the selection is sorted descending via the
     * [[Worksheet.sortSettings]]. The command is not available if the selection intesects table and non-table cells and cannot be performed if there
     * are multiple selection ranges. This command may also be executed with a string containing the A1 format cell address of the target cell for the operation.
     */
    SortDescending = 186,
    /**
     * This causes an ascending sort for the current selection. The exact changes will depend on whether the current selection is within the
     * [[Spreadsheet.activeTable]]. If the selection is within a table then the column associated with the [[SpreadsheetSelection.activeCell]]
     * is sorted ascending. If the selection is not within a table then the data range associated with the selection is sorted ascending via the
     * [[Worksheet.sortSettings]]. The command is not available if the selection intesects table and non-table cells and cannot be performed if there
     * are multiple selection ranges. This command may also be executed with a string containing the A1 format cell address of the target cell for the operation.
     */
    SortAscending = 187,
    /**
     * Clears all the filter and sort settings for the [[SpreadsheetSelection.activeCell]] of the [[Spreadsheet.activeSelection]]. If the
     * active cell is within the [[Spreadsheet.activeTable]] then the filter and sort information of the table is cleared. If the cell is not within
     * a table the [[Worksheet.filterSettings]] sort and filtering are cleared even if the cell is not within its region. The command is not available
     * when there are multiple worksheets selected or if the active cell is in an area that does not have any sorting or filtering.
     */
    ClearAllFilterAndSort = 188,
    /**
     * Clears the filter for the column associated with the [[SpreadsheetSelection.activeCell]] of the [[Spreadsheet.activeSelection]]. The
     * command is not available when there are multiple worksheets selected or if the active cell is within a column that does not have any filtering. This
     * command may also be executed with a string containing the A1 format cell address of the target cell for the operation.
     */
    ClearFilter = 189,
    /**
     * Reapplies the filter and sort settings for the [[SpreadsheetSelection.activeCell]] of the [[Spreadsheet.activeSelection]]. If the
     * active cell is within the [[Spreadsheet.activeTable]] then the filter and sort information of the table is reapplied. If the cell is not
     * within a table the [[Worksheet.filterSettings]] sort and filtering are repplied even if the cell is not within its region. The command is not
     * available when there are multiple worksheets selected or if the active cell is within a table that does not have any sorting or filtering.
     */
    ReapplyFilterAndSort = 190,
    /**
     * Filters the data region based on the current value of the [[SpreadsheetSelection.activeCell]] of the [[Spreadsheet.activeSelection]].
     * If the active cell is within the [[Spreadsheet.activeTable]] then the filter for the column associated with the active cell is set to the new
     * filter. If the cell is within the [[WorksheetFilterSettings.region]] of the
     * [[Worksheet.filterSettings]] then the filter for the column of that region associated with the active cell is set to the new filter. Otherwise
     * a new region is created for the [[Worksheet.filterSettings]] based on the selection and the filter is created for that column.
     */
    FilterByCellValue = 191,
    /**
     * Similar to FilterByCellValue except the filter is based on the resolved background color of the active cell.
     */
    FilterByCellColor = 192,
    /**
     * Similar to FilterByCellValue except the filter is based on the resolved text/font color of the active cell.
     */
    FilterByCellFontColor = 193,
    /**
     * Similar to FilterByCellValue except the filter is based on the resolved icon of the active cell.
     */
    FilterByCellIcon = 194,
    /**
     * Sorts the data region based on the current background color of the [[SpreadsheetSelection.activeCell]] of the [[Spreadsheet.activeSelection]].
     * If the active cell is within the [[Spreadsheet.activeTable]] then the sort for the column associated with the active cell is set to the new
     * sort condition. If the cell is within the [[WorksheetFilterSettings.region]] of the
     * [[Worksheet.filterSettings]] then the sort for the column of that region associated with the active cell is set to the new sort condition. Otherwise
     * the [[Worksheet.sortSettings]] is updated based on the selection and the sort condition is created for that column.  This command may also be
     * executed with a string containing the A1 format cell address of the target cell for the operation.
     */
    SortByCellColor = 195,
    /**
     * Similar to SortByCellColor except the sort condition is based on the resolved text/font color of the active cell.
     */
    SortByCellFontColor = 196,
    /**
     * Similar to SortByCellColor except the sort condition is based on the resolved icon of the active cell.
     */
    SortByCellIcon = 197,
    /**
     * Displays the format cells dialog for the current selection.
     */
    ShowFormatCellsDialog = 198,
    /**
     * Navigates to the next cell within the [[Spreadsheet.activeTable]] unless the active cell is within the totql row.
     */
    CellInTableRight = 199,
    /**
     * Navigates to the previous cell within the [[Spreadsheet.activeCell]] unless the active cell is within the total row.
     */
    CellInTableLeft = 200,
    /**
     * Displays the dropdown associated with the [[Spreadsheet.activeCell]] which may be things such as the filter menu dropdown, the list of values from the cell's list type data validation, a list of formulas for a cell in the total row of a table, etc.
     */
    ShowCellDropDown = 201,
    /**
     * Displays a list of the string values of the adjacent cells above and below the [[Spreadsheet.activeCell]]
     */
    PickFromDropDownList = 202,
    /**
     * Displays the custom sort dialog for the worksheet sort region
     */
    ShowCustomSortDialog = 203
}
/**
 * @hidden
 */
export declare let SpreadsheetAction_$type: Type;
