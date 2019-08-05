import { Type } from "../../igniteui-angular-core/ES5/type";
/**
 * Enumeration used to identify a resource for use by the [[Spreadsheet]]
 */
export declare enum SpreadsheetResourceId {
    /**
     * The brush used to render the inner area of the selection overlay
     */
    CellSelectionFill = 0,
    /**
     * The brush used to render the inner border of the selection overlay
     */
    CellSelectionInnerBorder = 1,
    /**
     * The brush used to render the outer border of the selection overlay
     */
    CellSelectionOuterBorder = 2,
    /**
     * The brush used to render the movable border when there is a single selection range.
     */
    CellSelectionDragBorder = 3,
    /**
     * The brush used to render the movable border in the header area when there is a single selection range.
     */
    CellSelectionDragBorderInHeader = 4,
    /**
     * The brush used to render the handle that is used to resize a selection range.
     */
    CellSelectionHandleFill = 5,
    /**
     * The brush used to render the border around the handle that is used to resize a selection range.
     */
    CellSelectionHandleBorder = 6,
    /**
     * The default brush used to render the background of the Select All button
     */
    SelectAllBackground = 7,
    /**
     * The default brush used to render the triangle within the Select All button
     */
    SelectAllTriangleFill = 8,
    /**
     * The brush used to render the triangle within the Select All button when the mouse is over the button
     */
    SelectAllTriangleHotTrackFill = 9,
    /**
     * The brush used to render the triangle within the Select All button when there is a range selection that includes all the rows and columns
     */
    SelectAllTriangleSelectedFill = 10,
    /**
     * The default brush used to render the background of a row header.
     */
    RowHeaderBackground = 11,
    /**
     * The brush used to render the background of a row header when the entire row is selected.
     */
    RowHeaderSelectedBackground = 12,
    /**
     * The brush used to render the background of a row header when there are one or more selection ranges that intersect that row.
     */
    RowHeaderWithSelectedCellsBackground = 13,
    /**
     * The brush used to render the background of a row header when the mouse is over the header.
     */
    RowHeaderHotTrackBackground = 14,
    /**
     * The default brush used to render the foreground of a row header.
     */
    RowHeaderForeground = 15,
    /**
     * The brush used to render the foreground of a row header when the entire row is selected.
     */
    RowHeaderSelectedForeground = 16,
    /**
     * The brush used to render the foreground of a row header when there are one or more selection ranges that intersect that row.
     */
    RowHeaderWithSelectedCellsForeground = 17,
    /**
     * The brush used to render the foreground of a row header when the mouse is over the header.
     */
    RowHeaderHotTrackForeground = 18,
    /**
     * The brush used to render the border of a row header.
     */
    RowHeaderBorder = 19,
    /**
     * The brush used to render the border of a row header when the row has one or more intersecting selection ranges.
     */
    RowHeaderSelectedBorder = 20,
    /**
     * The brush used to render the border of a row header when the there are one or more selection ranges that intersect that row.
     */
    RowHeaderWithSelectedCellsBorder = 21,
    /**
     * The brush used to render the border of a row header when the mouse is over the header.
     */
    RowHeaderHotTrackBorder = 22,
    /**
     * The brush used to render the foreground of a row header when the mouse is over the header and the entire row is selected.
     */
    RowHeaderHotTrackSelectedForeground = 23,
    /**
     * The default brush used to render the background of a column header.
     */
    ColumnHeaderBackground = 24,
    /**
     * The brush used to render the background of a column header when the entire column is selected.
     */
    ColumnHeaderSelectedBackground = 25,
    /**
     * The brush used to render the background of a column header when there are one or more selection ranges that intersect that column.
     */
    ColumnHeaderWithSelectedCellsBackground = 26,
    /**
     * The brush used to render the background of a column header when the mouse is over the header.
     */
    ColumnHeaderHotTrackBackground = 27,
    /**
     * The default brush used to render the foreground of a column header.
     */
    ColumnHeaderForeground = 28,
    /**
     * The brush used to render the foreground of a column header when the entire column is selected.
     */
    ColumnHeaderSelectedForeground = 29,
    /**
     * The brush used to render the foreground of a column header when there are one or more selection ranges that intersect that column.
     */
    ColumnHeaderWithSelectedCellsForeground = 30,
    /**
     * The brush used to render the foreground of a column header when the mouse is over the header.
     */
    ColumnHeaderHotTrackForeground = 31,
    /**
     * The brush used to render the foreground of a column header when the mouse is over the header and the entire column is selected.
     */
    ColumnHeaderHotTrackSelectedForeground = 32,
    /**
     * The brush used to render the border of a column header.
     */
    ColumnHeaderBorder = 33,
    /**
     * The brush used to render the border of a column header when the column has one or more intersecting selection ranges.
     */
    ColumnHeaderSelectedBorder = 34,
    /**
     * The brush used to render the border of a column header when the there are one or more selection ranges that intersect that column.
     */
    ColumnHeaderWithSelectedCellsBorder = 35,
    /**
     * The brush used to render the border of a column header when the mouse is over the header.
     */
    ColumnHeaderHotTrackBorder = 36,
    /**
     * The brush used render the inner border on the active cell when one has 2 or more selection ranges.
     */
    MultiSelectActiveCellBorder = 37,
    /**
     * The brush used for the grid lines when the GridlineColor of the DisplayOptions wasn't set.
     */
    AutomaticGridline = 38,
    /**
     * The brush used for the lines rendered over the pane during a column resize operation.
     */
    ResizeColumnLine = 39,
    /**
     * The brush used for the lines rendered over the pane during a column resize operation.
     */
    ResizeRowLine = 40,
    /**
     * The foreground brush used for the SheetTabItem when the associated Worksheet is active.
     */
    TabItemActiveForeground = 41,
    /**
     * The background brush used for the SheetTabItem when the associated Worksheet is active.
     */
    TabItemActiveBackground = 42,
    /**
     * The foreground brush used for the SheetTabItem when the associated Worksheet is selected but not active.
     */
    TabItemSelectedForeground = 43,
    /**
     * The background brush used for the SheetTabItem when the associated Worksheet is selected but not active.
     */
    TabItemSelectedBackground = 44,
    /**
     * The foreground brush used for the SheetTabItem when the mouse is over the tab but the tab is not selected.
     */
    TabItemHotTrackForeground = 45,
    /**
     * The background brush used for the SheetTabItem when the mouse is over the tab but the tab is not selected.
     */
    TabItemHotTrackBackground = 46,
    /**
     * The foreground brush used for the SheetTabItem for a tab that is not selected.
     */
    TabItemBackground = 47,
    /**
     * The background brush used for the SheetTabItem for a tab that is not selected.
     */
    TabItemForeground = 48,
    /**
     * The brush used to highlight the edge of the selected Worksheet tabs.
     */
    SelectedTabHighlight = 49,
    /**
     * The brush used to render the area behind the tab items and the horizontal scrollbar.
     */
    TabAreaBackground = 50,
    /**
     * The line rendered along the border of the tab area as well as the line between unselected tabs.
     */
    TabAreaBorder = 51,
    /**
     * Foreground for the button in the tab area that is used to add a new Worksheet.
     */
    AddSheetButtonForeground = 52,
    /**
     * Foreground for the button in the tab area that is used to add a new Worksheet when it is disabled.
     */
    AddSheetButtonDisabledForeground = 53,
    /**
     * Foreground for the button in the tab area that is used to add a new Worksheet when it is enabled and the mouse is over the button.
     */
    AddSheetButtonHotTrackForeground = 54,
    /**
     * Foreground for the buttons in the tab area that are used to scroll the tabs in the tab area.
     */
    TabScrollButtonForeground = 55,
    /**
     * Foreground for the buttons in the tab area that are used to scroll the tabs in the tab area when they are disabled.
     */
    TabScrollButtonDisabledForeground = 56,
    /**
     * Foreground for the buttons in the tab area that are used to scroll the tabs in the tab area when they are enabled and the mouse is over the button.
     */
    TabScrollButtonHotTrackForeground = 57,
    /**
     * The foreground brush used for the splitter used to adjust the size of the tab area and horizontal scrollbar.
     */
    TabAreaSplitterForeground = 58,
    /**
     * The brush used for the background of the splitter between panes.
     */
    SheetPaneSplitterBackground = 59,
    /**
     * The brush used for the preview when dragging the splitter that is displayed between split panes.
     */
    SheetPaneSplitterPreview = 60,
    /**
     * The brush used for the border of the data validation input message prompt.
     */
    InputMessageBorder = 61,
    /**
     * The brush used for the background of the data validation input message prompt.
     */
    InputMessageBackground = 62,
    /**
     * The brush used for the foreground of the data validation input message prompt.
     */
    InputMessageForeground = 63,
    /**
     * The brush used for the border of the invalid data circle of the [[Spreadsheet]]
     */
    InvalidDataBorder = 64,
    /**
     * The brush used for the border of the dropdown button
     */
    DropDownButtonBorder = 65,
    /**
     * The brush used for the background of the dropdown button
     */
    DropDownButtonBackground = 66,
    /**
     * The brush used for the foreground of the dropdown button
     */
    DropDownButtonForeground = 67,
    /**
     * The brush used for the border of the dropdown button when the dropdown is open
     */
    DropDownButtonOpenBorder = 68,
    /**
     * The brush used for the background of the dropdown button when the dropdown is open
     */
    DropDownButtonOpenBackground = 69,
    /**
     * The brush used for the foreground of the dropdown button when the dropdown is open
     */
    DropDownButtonOpenForeground = 70,
    /**
     * The brush used for the interior of the rectangular region drawn during an unselect operation.
     */
    UnselectCellsFill = 71,
    /**
     * The brush used for the border of the rectangular region drawn during an unselect operation.
     */
    UnselectCellsBorder = 72
}
/**
 * @hidden
 */
export declare let SpreadsheetResourceId_$type: Type;
