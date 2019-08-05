/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { markEnum } from "../../igniteui-angular-core/ES2015/type";
/**
 * Enumeration used to identify a resource for use by the [[Spreadsheet]]
 */
export var SpreadsheetResourceId;
(function (SpreadsheetResourceId) {
    /**
     * The brush used to render the inner area of the selection overlay
     */
    SpreadsheetResourceId[SpreadsheetResourceId["CellSelectionFill"] = 0] = "CellSelectionFill";
    /**
     * The brush used to render the inner border of the selection overlay
     */
    SpreadsheetResourceId[SpreadsheetResourceId["CellSelectionInnerBorder"] = 1] = "CellSelectionInnerBorder";
    /**
     * The brush used to render the outer border of the selection overlay
     */
    SpreadsheetResourceId[SpreadsheetResourceId["CellSelectionOuterBorder"] = 2] = "CellSelectionOuterBorder";
    /**
     * The brush used to render the movable border when there is a single selection range.
     */
    SpreadsheetResourceId[SpreadsheetResourceId["CellSelectionDragBorder"] = 3] = "CellSelectionDragBorder";
    /**
     * The brush used to render the movable border in the header area when there is a single selection range.
     */
    SpreadsheetResourceId[SpreadsheetResourceId["CellSelectionDragBorderInHeader"] = 4] = "CellSelectionDragBorderInHeader";
    /**
     * The brush used to render the handle that is used to resize a selection range.
     */
    SpreadsheetResourceId[SpreadsheetResourceId["CellSelectionHandleFill"] = 5] = "CellSelectionHandleFill";
    /**
     * The brush used to render the border around the handle that is used to resize a selection range.
     */
    SpreadsheetResourceId[SpreadsheetResourceId["CellSelectionHandleBorder"] = 6] = "CellSelectionHandleBorder";
    /**
     * The default brush used to render the background of the Select All button
     */
    SpreadsheetResourceId[SpreadsheetResourceId["SelectAllBackground"] = 7] = "SelectAllBackground";
    /**
     * The default brush used to render the triangle within the Select All button
     */
    SpreadsheetResourceId[SpreadsheetResourceId["SelectAllTriangleFill"] = 8] = "SelectAllTriangleFill";
    /**
     * The brush used to render the triangle within the Select All button when the mouse is over the button
     */
    SpreadsheetResourceId[SpreadsheetResourceId["SelectAllTriangleHotTrackFill"] = 9] = "SelectAllTriangleHotTrackFill";
    /**
     * The brush used to render the triangle within the Select All button when there is a range selection that includes all the rows and columns
     */
    SpreadsheetResourceId[SpreadsheetResourceId["SelectAllTriangleSelectedFill"] = 10] = "SelectAllTriangleSelectedFill";
    /**
     * The default brush used to render the background of a row header.
     */
    SpreadsheetResourceId[SpreadsheetResourceId["RowHeaderBackground"] = 11] = "RowHeaderBackground";
    /**
     * The brush used to render the background of a row header when the entire row is selected.
     */
    SpreadsheetResourceId[SpreadsheetResourceId["RowHeaderSelectedBackground"] = 12] = "RowHeaderSelectedBackground";
    /**
     * The brush used to render the background of a row header when there are one or more selection ranges that intersect that row.
     */
    SpreadsheetResourceId[SpreadsheetResourceId["RowHeaderWithSelectedCellsBackground"] = 13] = "RowHeaderWithSelectedCellsBackground";
    /**
     * The brush used to render the background of a row header when the mouse is over the header.
     */
    SpreadsheetResourceId[SpreadsheetResourceId["RowHeaderHotTrackBackground"] = 14] = "RowHeaderHotTrackBackground";
    /**
     * The default brush used to render the foreground of a row header.
     */
    SpreadsheetResourceId[SpreadsheetResourceId["RowHeaderForeground"] = 15] = "RowHeaderForeground";
    /**
     * The brush used to render the foreground of a row header when the entire row is selected.
     */
    SpreadsheetResourceId[SpreadsheetResourceId["RowHeaderSelectedForeground"] = 16] = "RowHeaderSelectedForeground";
    /**
     * The brush used to render the foreground of a row header when there are one or more selection ranges that intersect that row.
     */
    SpreadsheetResourceId[SpreadsheetResourceId["RowHeaderWithSelectedCellsForeground"] = 17] = "RowHeaderWithSelectedCellsForeground";
    /**
     * The brush used to render the foreground of a row header when the mouse is over the header.
     */
    SpreadsheetResourceId[SpreadsheetResourceId["RowHeaderHotTrackForeground"] = 18] = "RowHeaderHotTrackForeground";
    /**
     * The brush used to render the border of a row header.
     */
    SpreadsheetResourceId[SpreadsheetResourceId["RowHeaderBorder"] = 19] = "RowHeaderBorder";
    /**
     * The brush used to render the border of a row header when the row has one or more intersecting selection ranges.
     */
    SpreadsheetResourceId[SpreadsheetResourceId["RowHeaderSelectedBorder"] = 20] = "RowHeaderSelectedBorder";
    /**
     * The brush used to render the border of a row header when the there are one or more selection ranges that intersect that row.
     */
    SpreadsheetResourceId[SpreadsheetResourceId["RowHeaderWithSelectedCellsBorder"] = 21] = "RowHeaderWithSelectedCellsBorder";
    /**
     * The brush used to render the border of a row header when the mouse is over the header.
     */
    SpreadsheetResourceId[SpreadsheetResourceId["RowHeaderHotTrackBorder"] = 22] = "RowHeaderHotTrackBorder";
    /**
     * The brush used to render the foreground of a row header when the mouse is over the header and the entire row is selected.
     */
    SpreadsheetResourceId[SpreadsheetResourceId["RowHeaderHotTrackSelectedForeground"] = 23] = "RowHeaderHotTrackSelectedForeground";
    /**
     * The default brush used to render the background of a column header.
     */
    SpreadsheetResourceId[SpreadsheetResourceId["ColumnHeaderBackground"] = 24] = "ColumnHeaderBackground";
    /**
     * The brush used to render the background of a column header when the entire column is selected.
     */
    SpreadsheetResourceId[SpreadsheetResourceId["ColumnHeaderSelectedBackground"] = 25] = "ColumnHeaderSelectedBackground";
    /**
     * The brush used to render the background of a column header when there are one or more selection ranges that intersect that column.
     */
    SpreadsheetResourceId[SpreadsheetResourceId["ColumnHeaderWithSelectedCellsBackground"] = 26] = "ColumnHeaderWithSelectedCellsBackground";
    /**
     * The brush used to render the background of a column header when the mouse is over the header.
     */
    SpreadsheetResourceId[SpreadsheetResourceId["ColumnHeaderHotTrackBackground"] = 27] = "ColumnHeaderHotTrackBackground";
    /**
     * The default brush used to render the foreground of a column header.
     */
    SpreadsheetResourceId[SpreadsheetResourceId["ColumnHeaderForeground"] = 28] = "ColumnHeaderForeground";
    /**
     * The brush used to render the foreground of a column header when the entire column is selected.
     */
    SpreadsheetResourceId[SpreadsheetResourceId["ColumnHeaderSelectedForeground"] = 29] = "ColumnHeaderSelectedForeground";
    /**
     * The brush used to render the foreground of a column header when there are one or more selection ranges that intersect that column.
     */
    SpreadsheetResourceId[SpreadsheetResourceId["ColumnHeaderWithSelectedCellsForeground"] = 30] = "ColumnHeaderWithSelectedCellsForeground";
    /**
     * The brush used to render the foreground of a column header when the mouse is over the header.
     */
    SpreadsheetResourceId[SpreadsheetResourceId["ColumnHeaderHotTrackForeground"] = 31] = "ColumnHeaderHotTrackForeground";
    /**
     * The brush used to render the foreground of a column header when the mouse is over the header and the entire column is selected.
     */
    SpreadsheetResourceId[SpreadsheetResourceId["ColumnHeaderHotTrackSelectedForeground"] = 32] = "ColumnHeaderHotTrackSelectedForeground";
    /**
     * The brush used to render the border of a column header.
     */
    SpreadsheetResourceId[SpreadsheetResourceId["ColumnHeaderBorder"] = 33] = "ColumnHeaderBorder";
    /**
     * The brush used to render the border of a column header when the column has one or more intersecting selection ranges.
     */
    SpreadsheetResourceId[SpreadsheetResourceId["ColumnHeaderSelectedBorder"] = 34] = "ColumnHeaderSelectedBorder";
    /**
     * The brush used to render the border of a column header when the there are one or more selection ranges that intersect that column.
     */
    SpreadsheetResourceId[SpreadsheetResourceId["ColumnHeaderWithSelectedCellsBorder"] = 35] = "ColumnHeaderWithSelectedCellsBorder";
    /**
     * The brush used to render the border of a column header when the mouse is over the header.
     */
    SpreadsheetResourceId[SpreadsheetResourceId["ColumnHeaderHotTrackBorder"] = 36] = "ColumnHeaderHotTrackBorder";
    /**
     * The brush used render the inner border on the active cell when one has 2 or more selection ranges.
     */
    SpreadsheetResourceId[SpreadsheetResourceId["MultiSelectActiveCellBorder"] = 37] = "MultiSelectActiveCellBorder";
    /**
     * The brush used for the grid lines when the GridlineColor of the DisplayOptions wasn't set.
     */
    SpreadsheetResourceId[SpreadsheetResourceId["AutomaticGridline"] = 38] = "AutomaticGridline";
    /**
     * The brush used for the lines rendered over the pane during a column resize operation.
     */
    SpreadsheetResourceId[SpreadsheetResourceId["ResizeColumnLine"] = 39] = "ResizeColumnLine";
    /**
     * The brush used for the lines rendered over the pane during a column resize operation.
     */
    SpreadsheetResourceId[SpreadsheetResourceId["ResizeRowLine"] = 40] = "ResizeRowLine";
    /**
     * The foreground brush used for the SheetTabItem when the associated Worksheet is active.
     */
    SpreadsheetResourceId[SpreadsheetResourceId["TabItemActiveForeground"] = 41] = "TabItemActiveForeground";
    /**
     * The background brush used for the SheetTabItem when the associated Worksheet is active.
     */
    SpreadsheetResourceId[SpreadsheetResourceId["TabItemActiveBackground"] = 42] = "TabItemActiveBackground";
    /**
     * The foreground brush used for the SheetTabItem when the associated Worksheet is selected but not active.
     */
    SpreadsheetResourceId[SpreadsheetResourceId["TabItemSelectedForeground"] = 43] = "TabItemSelectedForeground";
    /**
     * The background brush used for the SheetTabItem when the associated Worksheet is selected but not active.
     */
    SpreadsheetResourceId[SpreadsheetResourceId["TabItemSelectedBackground"] = 44] = "TabItemSelectedBackground";
    /**
     * The foreground brush used for the SheetTabItem when the mouse is over the tab but the tab is not selected.
     */
    SpreadsheetResourceId[SpreadsheetResourceId["TabItemHotTrackForeground"] = 45] = "TabItemHotTrackForeground";
    /**
     * The background brush used for the SheetTabItem when the mouse is over the tab but the tab is not selected.
     */
    SpreadsheetResourceId[SpreadsheetResourceId["TabItemHotTrackBackground"] = 46] = "TabItemHotTrackBackground";
    /**
     * The foreground brush used for the SheetTabItem for a tab that is not selected.
     */
    SpreadsheetResourceId[SpreadsheetResourceId["TabItemBackground"] = 47] = "TabItemBackground";
    /**
     * The background brush used for the SheetTabItem for a tab that is not selected.
     */
    SpreadsheetResourceId[SpreadsheetResourceId["TabItemForeground"] = 48] = "TabItemForeground";
    /**
     * The brush used to highlight the edge of the selected Worksheet tabs.
     */
    SpreadsheetResourceId[SpreadsheetResourceId["SelectedTabHighlight"] = 49] = "SelectedTabHighlight";
    /**
     * The brush used to render the area behind the tab items and the horizontal scrollbar.
     */
    SpreadsheetResourceId[SpreadsheetResourceId["TabAreaBackground"] = 50] = "TabAreaBackground";
    /**
     * The line rendered along the border of the tab area as well as the line between unselected tabs.
     */
    SpreadsheetResourceId[SpreadsheetResourceId["TabAreaBorder"] = 51] = "TabAreaBorder";
    /**
     * Foreground for the button in the tab area that is used to add a new Worksheet.
     */
    SpreadsheetResourceId[SpreadsheetResourceId["AddSheetButtonForeground"] = 52] = "AddSheetButtonForeground";
    /**
     * Foreground for the button in the tab area that is used to add a new Worksheet when it is disabled.
     */
    SpreadsheetResourceId[SpreadsheetResourceId["AddSheetButtonDisabledForeground"] = 53] = "AddSheetButtonDisabledForeground";
    /**
     * Foreground for the button in the tab area that is used to add a new Worksheet when it is enabled and the mouse is over the button.
     */
    SpreadsheetResourceId[SpreadsheetResourceId["AddSheetButtonHotTrackForeground"] = 54] = "AddSheetButtonHotTrackForeground";
    /**
     * Foreground for the buttons in the tab area that are used to scroll the tabs in the tab area.
     */
    SpreadsheetResourceId[SpreadsheetResourceId["TabScrollButtonForeground"] = 55] = "TabScrollButtonForeground";
    /**
     * Foreground for the buttons in the tab area that are used to scroll the tabs in the tab area when they are disabled.
     */
    SpreadsheetResourceId[SpreadsheetResourceId["TabScrollButtonDisabledForeground"] = 56] = "TabScrollButtonDisabledForeground";
    /**
     * Foreground for the buttons in the tab area that are used to scroll the tabs in the tab area when they are enabled and the mouse is over the button.
     */
    SpreadsheetResourceId[SpreadsheetResourceId["TabScrollButtonHotTrackForeground"] = 57] = "TabScrollButtonHotTrackForeground";
    /**
     * The foreground brush used for the splitter used to adjust the size of the tab area and horizontal scrollbar.
     */
    SpreadsheetResourceId[SpreadsheetResourceId["TabAreaSplitterForeground"] = 58] = "TabAreaSplitterForeground";
    /**
     * The brush used for the background of the splitter between panes.
     */
    SpreadsheetResourceId[SpreadsheetResourceId["SheetPaneSplitterBackground"] = 59] = "SheetPaneSplitterBackground";
    /**
     * The brush used for the preview when dragging the splitter that is displayed between split panes.
     */
    SpreadsheetResourceId[SpreadsheetResourceId["SheetPaneSplitterPreview"] = 60] = "SheetPaneSplitterPreview";
    /**
     * The brush used for the border of the data validation input message prompt.
     */
    SpreadsheetResourceId[SpreadsheetResourceId["InputMessageBorder"] = 61] = "InputMessageBorder";
    /**
     * The brush used for the background of the data validation input message prompt.
     */
    SpreadsheetResourceId[SpreadsheetResourceId["InputMessageBackground"] = 62] = "InputMessageBackground";
    /**
     * The brush used for the foreground of the data validation input message prompt.
     */
    SpreadsheetResourceId[SpreadsheetResourceId["InputMessageForeground"] = 63] = "InputMessageForeground";
    /**
     * The brush used for the border of the invalid data circle of the [[Spreadsheet]]
     */
    SpreadsheetResourceId[SpreadsheetResourceId["InvalidDataBorder"] = 64] = "InvalidDataBorder";
    /**
     * The brush used for the border of the dropdown button
     */
    SpreadsheetResourceId[SpreadsheetResourceId["DropDownButtonBorder"] = 65] = "DropDownButtonBorder";
    /**
     * The brush used for the background of the dropdown button
     */
    SpreadsheetResourceId[SpreadsheetResourceId["DropDownButtonBackground"] = 66] = "DropDownButtonBackground";
    /**
     * The brush used for the foreground of the dropdown button
     */
    SpreadsheetResourceId[SpreadsheetResourceId["DropDownButtonForeground"] = 67] = "DropDownButtonForeground";
    /**
     * The brush used for the border of the dropdown button when the dropdown is open
     */
    SpreadsheetResourceId[SpreadsheetResourceId["DropDownButtonOpenBorder"] = 68] = "DropDownButtonOpenBorder";
    /**
     * The brush used for the background of the dropdown button when the dropdown is open
     */
    SpreadsheetResourceId[SpreadsheetResourceId["DropDownButtonOpenBackground"] = 69] = "DropDownButtonOpenBackground";
    /**
     * The brush used for the foreground of the dropdown button when the dropdown is open
     */
    SpreadsheetResourceId[SpreadsheetResourceId["DropDownButtonOpenForeground"] = 70] = "DropDownButtonOpenForeground";
    /**
     * The brush used for the interior of the rectangular region drawn during an unselect operation.
     */
    SpreadsheetResourceId[SpreadsheetResourceId["UnselectCellsFill"] = 71] = "UnselectCellsFill";
    /**
     * The brush used for the border of the rectangular region drawn during an unselect operation.
     */
    SpreadsheetResourceId[SpreadsheetResourceId["UnselectCellsBorder"] = 72] = "UnselectCellsBorder";
})(SpreadsheetResourceId || (SpreadsheetResourceId = {}));
/**
 * @hidden
 */
export let SpreadsheetResourceId_$type = markEnum('SpreadsheetResourceId', 'CellSelectionFill,0|CellSelectionInnerBorder,1|CellSelectionOuterBorder,2|CellSelectionDragBorder,3|CellSelectionDragBorderInHeader,4|CellSelectionHandleFill,5|CellSelectionHandleBorder,6|SelectAllBackground,7|SelectAllTriangleFill,8|SelectAllTriangleHotTrackFill,9|SelectAllTriangleSelectedFill,10|RowHeaderBackground,11|RowHeaderSelectedBackground,12|RowHeaderWithSelectedCellsBackground,13|RowHeaderHotTrackBackground,14|RowHeaderForeground,15|RowHeaderSelectedForeground,16|RowHeaderWithSelectedCellsForeground,17|RowHeaderHotTrackForeground,18|RowHeaderBorder,19|RowHeaderSelectedBorder,20|RowHeaderWithSelectedCellsBorder,21|RowHeaderHotTrackBorder,22|RowHeaderHotTrackSelectedForeground,23|ColumnHeaderBackground,24|ColumnHeaderSelectedBackground,25|ColumnHeaderWithSelectedCellsBackground,26|ColumnHeaderHotTrackBackground,27|ColumnHeaderForeground,28|ColumnHeaderSelectedForeground,29|ColumnHeaderWithSelectedCellsForeground,30|ColumnHeaderHotTrackForeground,31|ColumnHeaderHotTrackSelectedForeground,32|ColumnHeaderBorder,33|ColumnHeaderSelectedBorder,34|ColumnHeaderWithSelectedCellsBorder,35|ColumnHeaderHotTrackBorder,36|MultiSelectActiveCellBorder,37|AutomaticGridline,38|ResizeColumnLine,39|ResizeRowLine,40|TabItemActiveForeground,41|TabItemActiveBackground,42|TabItemSelectedForeground,43|TabItemSelectedBackground,44|TabItemHotTrackForeground,45|TabItemHotTrackBackground,46|TabItemBackground,47|TabItemForeground,48|SelectedTabHighlight,49|TabAreaBackground,50|TabAreaBorder,51|AddSheetButtonForeground,52|AddSheetButtonDisabledForeground,53|AddSheetButtonHotTrackForeground,54|TabScrollButtonForeground,55|TabScrollButtonDisabledForeground,56|TabScrollButtonHotTrackForeground,57|TabAreaSplitterForeground,58|SheetPaneSplitterBackground,59|SheetPaneSplitterPreview,60|InputMessageBorder,61|InputMessageBackground,62|InputMessageForeground,63|InvalidDataBorder,64|DropDownButtonBorder,65|DropDownButtonBackground,66|DropDownButtonForeground,67|DropDownButtonOpenBorder,68|DropDownButtonOpenBackground,69|DropDownButtonOpenForeground,70|UnselectCellsFill,71|UnselectCellsBorder,72');
//# sourceMappingURL=SpreadsheetResourceId.js.map