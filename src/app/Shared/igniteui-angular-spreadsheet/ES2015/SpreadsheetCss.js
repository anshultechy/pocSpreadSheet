export class SpreadsheetCss {
    constructor() {
        /* Get the class applied to the main element */
        this.spreadsheet = "ui-igspreadsheet";
        /* Get the class applied to the spreadsheet's tooltip */
        this.tooltip = "ui-igspreadsheet-tooltip ui-tooltip ui-widget-content ui-corner-all";
        /* Get the class applied to the body/content of the spreadsheet's tooltip */
        this.tooltipBody = "ui-igspreadsheet-tooltip-body";
        /* Get the class applied to the title of the spreadsheet's tooltip */
        this.tooltipTitle = "ui-igspreadsheet-tooltip-title";
        /* Get the class applied to the select all button at the intersection between the row and column header areas */
        this.selectAll = "ui-igspreadsheet-selectall";
        /* Get the class applied to the horizontal splitter bar that is shown when the worksheet is split vertically */
        this.rowSplitter = "ui-igspreadsheet-rowsplitter";
        /* Get the class applied to the vertical splitter bar that is shown when the worksheet is split horizontally */
        this.columnSplitter = "ui-igspreadsheet-columnsplitter";
        /* Get the class applied to the element that is displayed while dragging the horizontal row splitter */
        this.rowSplitterPreview = "ui-igspreadsheet-rowsplitterpreview";
        /* Get the class applied to the element that is displayed while dragging the vertical column splitter */
        this.columnSplitterPreview = "ui-igspreadsheet-columnsplitterpreview";
        /* Get the class applied to to the element that is displayed while dragging the vertical column splitter */
        this.splitterIntersection = "ui-igspreadsheet-splitterintersection";
        this.paneArea = null;
        /* Get the class applied to the element where the row headers are rendered */
        this.rowHeaderArea = "ui-igspreadsheet-rowheaderarea";
        /* Get the class applied to the element where the column headers are rendered */
        this.columnHeaderArea = "ui-igspreadsheet-columnheaderarea";
        /* Get the class applied to the element between the tab area and the column scrollbar that is used to adjust the size of the tab area  */
        this.tabAreaSplitter = "ui-igspreadsheet-tabareasplitter";
        /* Get the class applied to the element behind the tab area */
        this.tabAreaBackground = "ui-igspreadsheet-tabareabackground";
        /* Get the class applied to the element that separates the tab area from the spreadsheet pane area  */
        this.tabAreaBorder = "ui-igspreadsheet-tabareaborder";
        /* Get the class applied to the element that represents the tab for a worksheet */
        this.tabItem = "ui-igspreadsheet-tabitem";
        /* Get the class applied to the element that represents the active tab for a worksheet */
        this.tabItemActive = "ui-igspreadsheet-tabitem-active";
        /* Get the class applied to the element that represents a worksheet tab when it is selected but is not active */
        this.tabItemSelected = "ui-igspreadsheet-tabitem-selected";
        /* Get the class added to element that represents the tab for a protected worksheet */
        this.tabItemProtected = "ui-igspreadsheet-tabitem-protected";
        /* Get the class applied to the element that contains the content for the tab for a worksheet */
        this.tabItemContent = "ui-igspreadsheet-tabitemcontent";
        /* Get the class applied to the element that contains the content for the tab for a worksheet when the assigned color is calculated to be a dark color */
        this.tabItemDark = "ui-igspreadsheet-tabitem-dark";
        /* Get the class applied to the element that contains the content for the tab for a worksheet when the assigned color is calculated to be a light color */
        this.tabItemLight = "ui-igspreadsheet-tabitem-light";
        /* Get the class applied to the element where the tab buttons and items are rendered  */
        this.tabItemArea = "ui-igspreadsheet-tabitemarea";
        /* Get the class applied to the element displayed during the dragging of a tab to indicate the new position  */
        this.tabDropIndicator = "ui-igspreadsheet-tabDropIndicator";
        /* Get the class applied to the tab item area button that is used to scroll to the first tab  */
        this.scrollFirstTabButton = "ui-igspreadsheet-scrollfirsttab";
        /* Get the class applied to the tab item area button that is used to scroll to the previous tab  */
        this.scrollPreviousTabButton = "ui-igspreadsheet-scrollprevioustab";
        /* Get the class applied to the tab item area button that is used to scroll to the last tab  */
        this.scrollLastTabButton = "ui-igspreadsheet-scrolllasttab";
        /* Get the class applied to the tab item area button that is used to scroll to the next tab  */
        this.scrollNextTabButton = "ui-igspreadsheet-scrollnexttab";
        /* Get the class applied to the tab item area button that is used to activate the next out of view tab  */
        this.activateNextHiddenTabButton = "ui-igspreadsheet-activatenexthiddentab";
        /* Get the class applied to the tab item area button that is used to activate the previous out of view tab  */
        this.activatePreviousHiddenTabButton = "ui-igspreadsheet-activateprevioushiddentab";
        /* Get the class applied to the tab item area button that is used to create a new worksheet  */
        this.addNewWorksheetButton = "ui-igspreadsheet-addnewworksheet";
        /* Get the class applied to the element that represents the input message from the data validation of the current active cell  */
        this.inputMessage = "ui-igspreadsheet-inputmessage";
        /* Get the class applied to the content/body of the input message  */
        this.inputMessageContent = "ui-igspreadsheet-inputmessage-content";
        /* Get the class applied to the title of the input message  */
        this.inputMessageTitle = "ui-igspreadsheet-inputmessage-title";
        /* Get the class applied to the vertical scrollbar  */
        this.scrollBarVertical = "ui-igspreadsheet-scrollbar-vertical";
        /* Get the class applied to the horizontal scrollbar  */
        this.scrollBarHorizontal = "ui-igspreadsheet-scrollbar-horizontal";
        /* Get the class applied to the left scrollbar arrow  */
        this.scrollBarArrowLeft = "ui-igspreadsheet-scrollbar-button-left";
        /* Get the class applied to the right scrollbar arrow  */
        this.scrollBarArrowRight = "ui-igspreadsheet-scrollbar-button-right";
        /* Get the class applied to the up scrollbar arrow  */
        this.scrollBarArrowUp = "ui-igspreadsheet-scrollbar-button-up";
        /* Get the class applied to the down scrollbar arrow  */
        this.scrollBarArrowDown = "ui-igspreadsheet-scrollbar-button-down";
        /* Get the class applied to the track between the left button and the scrollbar thumb  */
        this.scrollBarTrackLeft = "ui-igspreadsheet-scrollbar-track-left";
        /* Get the class applied to the track between the right button and the scrollbar thumb  */
        this.scrollBarTrackRight = "ui-igspreadsheet-scrollbar-track-right";
        /* Get the class applied to the track between the up button and the scrollbar thumb  */
        this.scrollBarTrackUp = "ui-igspreadsheet-scrollbar-track-up";
        /* Get the class applied to the track between the up button and the scrollbar thumb  */
        this.scrollBarTrackDown = "ui-igspreadsheet-scrollbar-track-down";
        /* Get the class applied to the thumb on the horizontal scrollbar  */
        this.scrollBarThumbVertical = "ui-igspreadsheet-scrollbar-thumb-vertical";
        /* Get the class applied to the thumb on the vertical scrollbar  */
        this.scrollBarThumbHorizontal = "ui-igspreadsheet-scrollbar-thumb-horizontal";
        /* Get the class whose style information is used to render the column headers */
        this.columnHeader = "ui-igspreadsheet-columnheader";
        /* Get the class whose style information is used to render the column headers when the column is selected */
        this.columnHeaderSelected = "ui-igspreadsheet-columnheader-selected";
        /* Get the class whose style information is used to render the column headers when some cells within the column are selected */
        this.columnHeaderSelectedCells = "ui-igspreadsheet-columnheader-selectedcells";
        /* Get the class whose style information is used to render the column headers when the mouse is over a header */
        this.columnHeaderHover = "ui-igspreadsheet-columnheader-hover";
        /* Get the class whose style information is used to render the row headers */
        this.rowHeader = "ui-igspreadsheet-rowheader";
        /* Get the class whose style information is used to render the row headers when the row is selected */
        this.rowHeaderSelected = "ui-igspreadsheet-rowheader-selected";
        /* Get the class whose style information is used to render the row headers when some cells within the row are selected */
        this.rowHeaderSelectedCells = "ui-igspreadsheet-rowheader-selectedcells";
        /* Get the class whose style information is used to render the row headers when the mouse is over a header */
        this.rowHeaderHover = "ui-igspreadsheet-rowheader-hover";
        /* Get the class whose style information is used to render the lines between rows and columns when a custom color has not been specified */
        this.automaticGridline = "ui-igspreadsheet-automaticgridline";
        /* Get the class whose style information is used to render the invalid data adorner */
        this.invalidData = "ui-igspreadsheet-invaliddata";
        /* Get the class whose style information is used to render the preview line displayed while a header is being resized */
        this.headerResizeLine = "ui-igspreadsheet-header-resizeline";
        /* Get the class whose style information is used to render the selection rect */
        this.cellSelection = "ui-igspreadsheet-cellselection";
        /* Get the class whose style information is used to render the grip handle on the selection rect */
        this.cellSelectionHandle = "ui-igspreadsheet-cellselectionhandle";
        /* Get the class applied to the area that contains the elements for the formula bar */
        this.formulaBar = "ui-igspreadsheet-formulabar";
        /* Get the class applied to the area that contains the namebox within the formula bar */
        this.nameBoxContainer = "ui-igspreadsheet-nameboxcontainer";
        /* Get the class applied to the element after the namebox that is used to adjust the width of the name box */
        this.nameBoxSplitter = "ui-igspreadsheet-nameboxsplitter";
        /* Get the class applied to the element containing the text area within the formula bar */
        this.formulaBarTextAreaContainer = "ui-igspreadsheet-formulabartextareacontainer";
        /* Get the class applied to the element used to resize the formula bar text area */
        this.formulaBarTextAreaSplitter = "ui-igspreadsheet-formulabartextareasplitter";
        /* Get the class applied to the area within the formula bar containing the enter and cancel buttons */
        this.formulaBarButtonContainer = "ui-igspreadsheet-formulabarbuttoncontainer";
        /* Get the class applied to the enter button within the formula bar */
        this.formulaBarEnterButton = "ui-igspreadsheet-formulabarenterbutton";
        /* Get the class applied to the cancel button within the formula bar */
        this.formulaBarCancelButton = "ui-igspreadsheet-formulabarcancelbutton";
        /* Get the class applied to the button within the formula bar used to expand/collapse the height of the formula bar */
        this.formulaBarExpandButton = "ui-igspreadsheet-formulabarexpandbutton";
        /* Get the class applied to the formula bar expand button when the formula bar is expanded */
        this.formulaBarExpandButtonOpen = "ui-igspreadsheet-formulabarexpandbutton-open";
        /* Get the class applied to the dropdown button in the cells and header */
        this.dropDownButton = "ui-igspreadsheet-dropdownbutton";
        /* Get the class applied to the dropdown button in the cells and header when the dropdown is expanded */
        this.dropDownButtonOpen = "ui-igspreadsheet-dropdownbutton-open";
        /* Get the class applied to the filter dialog. */
        this.filterDialog = "ui-igspreadsheet-filter-dialog";
        /* Get the class applied to the 'Show Rows Where:' label on the filter dialog. */
        this.filterDialogShowRowsWhere = "ui-igspreadsheet-filter-dialog-show-rows-where";
        /* Get the class applied to the name of the column being filtered */
        this.filterDialogColumnName = "ui-igspreadsheet-filter-dialog-column-name";
        /* Get the class applied to the first condition */
        this.filterDialogCondition1 = "ui-igspreadsheet-filter-dialog-condition1";
        /* Get the class applied to the conditonal operator radio buttons */
        this.filterDialogConditionalOperator = "ui-igspreadsheet-filter-dialog-conditional-operator";
        /* Get the class applied to the first condition */
        this.filterDialogCondition2 = "ui-igspreadsheet-filter-dialog-condition2";
        /* Get the class applied to the hint text. */
        this.filterDialogHintText = "ui-igspreadsheet-filter-dialog-hint-text";
        /* Get the class applied to the 'Ok' and 'Cancel' buttons. */
        this.filterDialogButtons = "ui-igspreadsheet-filter-buttons";
        /* Get the class applied to the filter dialog. */
        this.topOrBottomDialog = "ui-igspreadsheet-topOrBottom-dialog";
        /* Get the class applied to the 'Show' label on the TopOrBottom dialog. */
        this.topOrBottomDialogShow = "ui-igspreadsheet-topOrBottom-dialog-show";
        /* Get the class applied to the input area of the TopOrBottom dialog */
        this.topOrBottomDialogInputArea = "ui-igspreadsheet-topOrBottom-dialog-input-area";
        /* Get the class applied to the 'Ok' and 'Cancel' buttons. */
        this.topOrBottomDialogButtons = "ui-igspreadsheet-topOrBottom-buttons";
        /* Get the class applied to the FormatCells dialog. */
        this.formatCellsDialog = "ui-igspreadsheet-formatcells-dialog";
        /* Get the class applied to the 'Ok' and 'Cancel' buttons. */
        this.formatCellsDialogButtons = "ui-igspreadsheet-formatcells-dialog-buttons";
        /* Get the class applied to the tabs. */
        this.formatCellsDialogTabs = "ui-igspreadsheet-formatcells-dialog-tabs";
        /* Get the class applied to each tab. */
        this.formatCellsDialogTab = "ui-igspreadsheet-formatcells-dialog-tab";
        /* Get the class applied to the table element that contains and arranges the content for each tab. */
        this.formatCellsDialogTable = "ui-igspreadsheet-formatcells-dialog-table";
        /* Get the class applied to the table element that contains and arranges the content for each tab. */
        this.formatCellsDialogNumericSpinner = "ui-igspreadsheet-formatcells-dialog-numericspinner";
        /* Get the class applied to the button element used in the dropdown color picker. */
        this.formatCellsDialogColorPickerDropdownButton = "ui-igspreadsheet-formatcells-dialog-colorpickerdropdownbutton";
        /* Get the class applied to the sort dialog. */
        this.sortDialog = "ui-igspreadsheet-sort-dialog";
        /* Get the class applied to top group of buttons in the sort dialog */
        this.sortDialogTopButtonsArea = "ui-igspreadsheet-sort-dialog-top-buttons-area";
        /* Get the class applied to add level button of the sort dialog */
        this.sortDialogAddLevelButton = "ui-igspreadsheet-sort-dialog-add-level-button";
        /* Get the class applied to delete level button of the sort dialog */
        this.sortDialogDeleteLevelButton = "ui-igspreadsheet-sort-dialog-delete-level-button";
        /* Get the class applied to copy level button of the sort dialog */
        this.sortDialogCopyLevelButton = "ui-igspreadsheet-sort-dialog-copy-level-button";
        /* Get the class applied to move up button of the sort dialog */
        this.sortDialogMoveUpButton = "ui-igspreadsheet-sort-dialog-move-up-button";
        /* Get the class applied to move down button of the sort dialog */
        this.sortDialogMoveDownButton = "ui-igspreadsheet-sort-dialog-move-down-button";
        /* Get the class applied to options button of the sort dialog */
        this.sortDialogOptionsButton = "ui-igspreadsheet-sort-dialog-options-button";
        /* Get the class applied to options button of the sort dialog */
        this.sortDialogMyDataHasHeaderCheckBox = "ui-igspreadsheet-sort-dialog-my-data-has-headers-checkbox";
        /* Get the class applied to move down button of the sort dialog */
        this.sortDialogSortConditionsGridArea = "ui-igspreadsheet-sort-dialog-sort-conditions-area";
        /* Get the class applied to the active sort conditon row */
        this.sortDialogSortConditionActiveRow = "ui-igspreadsheet-sort-dialog-sort-condition-active-row";
        /* Get the class applied to the a sort conditon row */
        this.sortDialogSortConditionRow = "ui-igspreadsheet-sort-dialog-sort-condition-row";
        /* Get the class applied to the columns headers in the sort dialog */
        this.sortDialogSortConditionsGridHeader = "ui-igspreadsheet-sort-dialog-column-header";
        /* Get the class applied to the 'Ok' and 'Cancel' buttons. */
        this.sortDialogOkCancelButtonsArea = "ui-igspreadsheet-sort-dialog-ok-cancel-buttons-area";
        /* Get the class applied to the 'case sensitive' checkbox of the sort options dialog */
        this.sortOptionsDialogCaseSensitiveCheckboxArea = "ui-igspreadsheet-sort-options-dialog-case-sensitive-checkbox-area";
        /* Get the class applied to the 'orientation' area of the sort options dialog */
        this.sortOptionsDialogOrientationArea = "ui-igspreadsheet-sort-optins-dialog-orienation-area";
        /* Get the class applied to the 'Ok' and 'Cancel' buttons. */
        this.sortOptionsDialogOkCancelButtonsArea = "ui-igspreadsheet-sort-options-dialog-ok-cancel-buttons-area";
    }
}
//# sourceMappingURL=SpreadsheetCss.js.map