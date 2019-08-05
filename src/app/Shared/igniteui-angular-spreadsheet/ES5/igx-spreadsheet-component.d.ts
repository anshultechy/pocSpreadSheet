import { OnDestroy, EventEmitter, Injector, ComponentFactoryResolver, AfterContentInit, Renderer2, NgZone, ViewContainerRef } from '@angular/core';
import { IgPoint } from '../../igniteui-angular-core/ES5/IgPoint';
import { Spreadsheet } from './Spreadsheet';
import { SpreadsheetAction } from './SpreadsheetAction';
import { SpreadsheetCell } from './SpreadsheetCell';
import { SpreadsheetCellEditMode } from './SpreadsheetCellEditMode';
import { SpreadsheetCellSelectionMode } from './SpreadsheetCellSelectionMode';
import { SpreadsheetChartAdapterBase } from './SpreadsheetChartAdapterBase';
import { SpreadsheetEnterKeyNavigationDirection } from './SpreadsheetEnterKeyNavigationDirection';
import { SpreadsheetPane } from './SpreadsheetPane';
import { SpreadsheetSelection } from './SpreadsheetSelection';
import { SpreadsheetCellRangeFormat } from './SpreadsheetCellRangeFormat';
import { WorksheetTable } from "../../igniteui-angular-excel/ES5/WorksheetTable";
import { Worksheet } from "../../igniteui-angular-excel/ES5/Worksheet";
import { Workbook } from "../../igniteui-angular-excel/ES5/Workbook";
import { UndoManager } from './UndoManager';
import { SpreadsheetActionExecutedEventArgs } from './igx-spreadsheet-action-executed-event-args';
import { SpreadsheetActionExecutingEventArgs } from './igx-spreadsheet-action-executing-event-args';
import { SpreadsheetActiveCellChangedEventArgs } from './igx-spreadsheet-active-cell-changed-event-args';
import { SpreadsheetActivePaneChangedEventArgs } from './igx-spreadsheet-active-pane-changed-event-args';
import { SpreadsheetActiveTableChangedEventArgs } from './igx-spreadsheet-active-table-changed-event-args';
import { SpreadsheetActiveWorksheetChangedEventArgs } from './igx-spreadsheet-active-worksheet-changed-event-args';
import { SpreadsheetEditModeExitingEventArgs } from './igx-spreadsheet-edit-mode-exiting-event-args';
import { SpreadsheetEditModeExitedEventArgs } from './igx-spreadsheet-edit-mode-exited-event-args';
import { SpreadsheetEditModeEnteringEventArgs } from './igx-spreadsheet-edit-mode-entering-event-args';
import { SpreadsheetEditModeEnteredEventArgs } from './igx-spreadsheet-edit-mode-entered-event-args';
import { SpreadsheetEditModeValidationErrorEventArgs } from './igx-spreadsheet-edit-mode-validation-error-event-args';
import { SpreadsheetEditRangePasswordNeededEventArgs } from './igx-spreadsheet-edit-range-password-needed-event-args';
import { SpreadsheetHyperlinkExecutingEventArgs } from './igx-spreadsheet-hyperlink-executing-event-args';
import { SpreadsheetSelectionChangedEventArgs } from './igx-spreadsheet-selection-changed-event-args';
import { SpreadsheetUserPromptDisplayingEventArgs } from './igx-spreadsheet-user-prompt-displaying-event-args';
import { SpreadsheetWorkbookDirtiedEventArgs } from './igx-spreadsheet-workbook-dirtied-event-args';
export declare const IgxSpreadsheetComponent_PROVIDERS: any[];
/**
 * Custom control that displays one or more worksheets.
*/
export declare class IgxSpreadsheetComponent implements AfterContentInit, OnDestroy {
    private _renderer;
    private _elRef;
    private _ngZone;
    private _componentFactoryResolver;
    private _injector;
    _dynamicContent: ViewContainerRef;
    private _height;
    private _width;
    height: string;
    width: string;
    private _container;
    constructor(_renderer: Renderer2, _elRef: ViewContainerRef, _ngZone: NgZone, _componentFactoryResolver: ComponentFactoryResolver, _injector: Injector);
    ngOnDestroy(): void;
    private _wrapper;
    protected createImplementation(): Spreadsheet;
    private _spreadsheet;
    private _createContainer;
    ngAfterContentInit(): void;
    protected _zoneRunner: (act: () => void) => void;
    protected _runInZone(act: () => void): void;
    protected _implementation: any;
    /**
     * @hidden
     */
    readonly i: Spreadsheet; /**
                                 * @hidden
                                 */
    static _createFromInternal(internal: any): IgxSpreadsheetComponent;
    /**
     * Returns an array of the panes for the activeWorksheet.
    */
    readonly panes: SpreadsheetPane[];
    /**
     * Returns or sets a boolean indicating whether the scroll lock key is toggled.
     * This property is used when certain keys are pressed while the control has focus. For example
     * if an arrow key is pressed while the scroll lock is enabled the cell area will be scrolled rather than changing
     * the active cell. Note: This property is not maintained/changed by the control. It is just queried when
     * performing actions that consider whether the scroll lock is enabled.
    */
    isScrollLocked: boolean;
    /**
     * Returns or sets the active cell within the selected worksheet.
    */
    activeCell: SpreadsheetCell;
    /**
     * Returns an object that represents the pane with the focus.
    */
    activePane: SpreadsheetPane;
    /**
     * Returns an object that represents the current selection of the activePane.
    */
    activeSelection: SpreadsheetSelection;
    /**
     * Returns an object used to get the formatting of the activeCell and where modifications are applied to the entire activeSelection.
     * Any changes made to this object will affect all the objects in the selection. So for example, the
     * Font.Name may return "Arial" because the active cell has that as its resolved font name even though the other
     * cells are using a different font but if you set the Font.Name of this object to "Arial" then all the objects
     * affected by the selection will have their Font.Name updated to that value.
    */
    readonly activeSelectionCellRangeFormat: SpreadsheetCellRangeFormat;
    /**
     * Returns the ig.excel.WorksheetTable associated with the activeCell of the activeWorksheet.
    */
    activeTable: WorksheetTable;
    /**
     * Returns or sets the Worksheet from the workbook whose content should be displayed within the control.
    */
    activeWorksheet: Worksheet;
    /**
     * Returns or sets a boolean indicating whether the spreadsheet allows adding worksheets.
    */
    allowAddWorksheet: boolean;
    /**
     * Returns or sets a boolean indicating whether the spreadsheet allows deleting worksheets.
    */
    allowDeleteWorksheet: boolean;
    /**
     * Returns or sets a boolean indicating if the grid lines are displayed in the selected worksheets.
    */
    areGridlinesVisible: boolean;
    /**
     * Returns or sets a boolean indicating if the row and column headers are displayed for the selected worksheets.
    */
    areHeadersVisible: boolean;
    /**
     * Returns an enumeration used to indicate the current edit mode state.
    */
    cellEditMode: SpreadsheetCellEditMode;
    /**
     * Returns or sets the object that will provide the chart visualization for display within the Spreadsheet
     * By default charts are not displayed within the spreadsheet. To display charts one should set this
     * property to an instance of a SpreadsheetChartAdapter which is in a separate reference since it relies upon
     * the chart and other data visualization controls.
    */
    chartAdapter: SpreadsheetChartAdapterBase;
    /**
     * Returns or sets an enumeration indicating the direction of the cell adjacent to the activeCell that should be activated when the enter key is pressed.
     * This property is only used if the isEnterKeyNavigationEnabled is set to true. Also, the reverse direction is
     * navigated when Shift + Enter are pressed.
    */
    enterKeyNavigationDirection: SpreadsheetEnterKeyNavigationDirection;
    /**
     * Returns or sets the number of decimal places by which a whole number typed in during edit mode should be adjusted when isFixedDecimalEnabled is true
    */
    fixedDecimalPlaceCount: number;
    /**
     * Returns or sets a boolean indicating whether the adjacent cell indicated by the enterKeyNavigationDirection should be navigated to when the enter key is pressed.
    */
    isEnterKeyNavigationEnabled: boolean;
    /**
     * Returns or sets a boolean indicating whether a fixed decimal place is automatically added when a whole number is entered while in edit mode.
    */
    isFixedDecimalEnabled: boolean;
    /**
     * Returns or sets a boolean indicating if the formula bar is displayed within the Spreadsheet.
    */
    isFormulaBarVisible: boolean;
    /**
     * Returns a boolean indicating if the control is currently editing the value of the activeCell
    */
    isInEditMode: boolean;
    /**
     * Returns or sets a boolean indicating whether the control is in "End mode".
     * End mode is a mode that affects certain keyboard navigation such as navigating with the arrow keys. For example when in
     * end mode and one presses the right arrow, the activeCell will be changed to be the first cell to the right of the current ActiveCell
     * that has a value (even if the value is ""). If there were no cells to the right with a value then it would activate the right most cell in that row. End
     * mode will end automatically such as when one presses an arrow key.
    */
    isInEndMode: boolean;
    /**
     * Returns a boolean indicating if the user is currently editing the name of the active worksheet.
    */
    isRenamingWorksheet: boolean;
    /**
     * Returns or sets a boolean indicating whether undo is enabled for the control.
    */
    isUndoEnabled: boolean;
    /**
     * Returns or sets the width of the name box within the formula bar.
    */
    nameBoxWidth: number;
    /**
     * Returns or sets a value indicating how the selection is updated when interacting with the cells via the mouse or keyboard.
    */
    selectionMode: SpreadsheetCellSelectionMode;
    /**
     * Returns or sets an array of the Worksheets whose tabs are selected.
    */
    selectedWorksheets: Worksheet[];
    /**
     * Returns or sets the UndoManager.
     * Note: this property can not be set to null.
    */
    undoManager: UndoManager;
    /**
     * Returns or sets the position of the screen tip used to display the input message for the data validation rule associated with the active cell.
    */
    validationInputMessagePosition: IgPoint;
    /**
     * Returns or sets the workbook whose information is displayed in the control.
    */
    workbook: Workbook;
    /**
     * Returns or sets the magnification of the selected worksheets.
    */
    zoomLevel: number;
    protected __p: string;
    protected _hasUserValues: Set<string>;
    protected readonly hasUserValues: Set<string>;
    protected __m(propertyName: string): void;
    protected _stylingContainer: any;
    protected _stylingParent: any;
    protected _inStyling: boolean;
    protected _styling(container: any, component: any, parent?: any): void;
    containerResized(): void;
    destroy(): void;
    executeAction(action: SpreadsheetAction): boolean;
    flush(): void;
    onInitialized(): void;
    provideContainer(container: any): void;
    scheduleArrange(): void;
    styleUpdated(): void;
    /**
     * Returns an object with information about the visual state of the spreadsheet.
    
    */
    exportVisualData(): any;
    private _ActionExecuted;
    /**
     * Invoked when an action is executed on the Spreadsheet.
     * eventArgument="evt" argType="event" jQuery event object.
     * eventArgument="ui.owner" argType="object" Gets a reference to the spreadsheet widget.
     * eventArgument="ui.action" argType="string" Gets the [action](ig.spreadsheet.SpreadsheetAction) that was executed.
    */
    readonly ActionExecuted: EventEmitter<{
        sender: any;
        args: SpreadsheetActionExecutedEventArgs;
    }>;
    private _ActionExecuting;
    /**
     * Invoked when an action is about to be executed by the Spreadsheet.
     * eventArgument="evt" argType="event" jQuery event object.
     * eventArgument="ui.owner" argType="object" Gets a reference to the spreadsheet widget.
     * eventArgument="ui.action" argType="string" Gets the [action](ig.spreadsheet.SpreadsheetAction) that is about to be executed.
    */
    readonly ActionExecuting: EventEmitter<{
        sender: any;
        args: SpreadsheetActionExecutingEventArgs;
    }>;
    private _activeCellChanged;
    /**
     * Invoked when the activeCell of the Spreadsheet has changed.
     * eventArgument="evt" argType="event" jQuery event object.
     * eventArgument="ui.owner" argType="object" Gets a reference to the spreadsheet widget.
     * eventArgument="ui.oldValue" argType="string" Gets the previous active cell.
     * eventArgument="ui.newValue" argType="string" Gets the current active cell.
    */
    readonly activeCellChanged: EventEmitter<{
        sender: any;
        args: SpreadsheetActiveCellChangedEventArgs;
    }>;
    private _activePaneChanged;
    /**
     * Invoked when the activePane of the Spreadsheet has changed.
     * eventArgument="evt" argType="event" jQuery event object.
     * eventArgument="ui.owner" argType="object" Gets a reference to the spreadsheet widget.
     * eventArgument="ui.oldActivePane" argType="object" Gets the previous active [pane](ig.spreadsheet.SpreadsheetPane).
     * eventArgument="ui.newActivePane" argType="object" Gets the current active [pane](ig.spreadsheet.SpreadsheetPane).
     * eventArgument="ui.activeCell" argType="string" Gets the active cell of the new active pane or null if there is no active pane.
     * eventArgument="ui.visibleRange" argType="string" Gets the current visible range of the new active pane or null if there is no active pane.
    */
    readonly activePaneChanged: EventEmitter<{
        sender: any;
        args: SpreadsheetActivePaneChangedEventArgs;
    }>;
    private _activeTableChanged;
    /**
     * Invoked when the activeTable of the Spreadsheet has changed.
     * eventArgument="evt" argType="event" jQuery event object.
     * eventArgument="ui.owner" argType="object" Gets a reference to the spreadsheet widget.
     * eventArgument="ui.oldActiveTable" argType="object" Gets the previous active [Table](ig.excel.WorksheetTable).
     * eventArgument="ui.newActiveTable" argType="object" Gets the current active [Table](ig.excel.WorksheetTable).
    */
    readonly activeTableChanged: EventEmitter<{
        sender: any;
        args: SpreadsheetActiveTableChangedEventArgs;
    }>;
    private _activeWorksheetChanged;
    /**
     * Invoked when the activeWorksheet of the Spreadsheet has changed.
     * eventArgument="evt" argType="event" jQuery event object.
     * eventArgument="ui.owner" argType="object" Gets a reference to the spreadsheet widget.
     * eventArgument="ui.oldActiveWorksheet" argType="object" Gets the previous active [worksheet](ig.excel.Worksheet).
     * eventArgument="ui.oldActiveWorksheetName" argType="string" Gets the name of the previous active worksheet or null if oldActiveWorksheet is null.
     * eventArgument="ui.newActiveWorksheet" argType="object" Gets the current active [worksheet](ig.excel.Worksheet).
     * eventArgument="ui.newActiveWorksheetName" argType="string" Gets the name of the new active worksheet or null if newActiveWorksheet is null.
    */
    readonly activeWorksheetChanged: EventEmitter<{
        sender: any;
        args: SpreadsheetActiveWorksheetChangedEventArgs;
    }>;
    private _editModeExiting;
    /**
     * Invoked when the Spreadsheet is about to end the in-place editing of the activeCell.
     * eventArgument="evt" argType="event" jQuery event object.
     * eventArgument="ui.owner" argType="object" Gets a reference to the spreadsheet widget.
     * eventArgument="ui.acceptChanges" argType="bool" Get or set a boolean indicating whether the changes will be made to the cell's value when edit mode ends.
     * eventArgument="ui.canCancel" argType="bool" Get a boolean indicating if the edit mode is being forced to exit edit mode in which case it cannot be cancelled.
     * eventArgument="ui.cell" argType="string" Gets the cell for which the control is exiting edit mode.
     * eventArgument="ui.editText" argType="string" Gets the edit text that will be used to update the cell(s).
    */
    readonly editModeExiting: EventEmitter<{
        sender: any;
        args: SpreadsheetEditModeExitingEventArgs;
    }>;
    private _editModeExited;
    /**
     * Invoked when the Spreadsheet has ended the in-place editing of the activeCell.
     * eventArgument="evt" argType="event" jQuery event object.
     * eventArgument="ui.owner" argType="object" Gets a reference to the spreadsheet widget.
     * eventArgument="ui.cell" argType="string" Gets the cell for which the control has exited edit mode.
    */
    readonly editModeExited: EventEmitter<{
        sender: any;
        args: SpreadsheetEditModeExitedEventArgs;
    }>;
    private _editModeEntering;
    /**
     * Invoked when the Spreadsheet is about to start in-place editing of the activeCell.
     * eventArgument="evt" argType="event" jQuery event object.
     * eventArgument="ui.owner" argType="object" Gets a reference to the spreadsheet widget.
     * eventArgument="ui.cell" argType="string" Gets the cell for which the control is going into edit mode.
    */
    readonly editModeEntering: EventEmitter<{
        sender: any;
        args: SpreadsheetEditModeEnteringEventArgs;
    }>;
    private _editModeEntered;
    /**
     * Invoked when the Spreadsheet has started in-place editing of the activeCell.
     * eventArgument="evt" argType="event" jQuery event object.
     * eventArgument="ui.owner" argType="object" Gets a reference to the spreadsheet widget.
     * eventArgument="ui.cell" argType="string" Gets the cell for which the control has entered edit mode.
    */
    readonly editModeEntered: EventEmitter<{
        sender: any;
        args: SpreadsheetEditModeEnteredEventArgs;
    }>;
    private _editModeValidationError;
    /**
     * Invoked when the Spreadsheet is exiting edit mode and the new value for the activeCell is not valid based on the criteria of that cell's ig.excel.DataValidationRule.
     * eventArgument="evt" argType="event" jQuery event object.
     * eventArgument="ui.owner" argType="object" Gets a reference to the spreadsheet widget.
     * eventArgument="ui.action" argType="string" Get or set the [action](ig.spreadsheet.SpreadsheetEditModeValidationErrorAction)  to take in response to the failed validation.
     * eventArgument="ui.canStayInEditMode" argType="bool" Get a boolean indicating whether the cell is allowed to stay in edit mode.
     * eventArgument="ui.cell" argType="string" Gets the cell for which the control is in edit mode.
     * eventArgument="ui.validationRule" argType="string" Get the [rule](ig.excel.DataValidationRule) which failed validation.
     * The EditModeValidationError is raised while exiting edit mode if the new value for the activeCell is not valid based on the criteria of that cell's ig.excel.DataValidationRule.
     * Since the rule needs to evaluate the value of the cell and potentially other cell's in the Worksheet, the value is first applied to the cell(s) and then is validated. By default if the event is not handled and the
     * showErrorMessageForInvalidValue is true, a message box will be displayed to the end user to determine what action to take. One can handle this event and specify the action that should
     * be taken using the action.Note: The validation rule will not be evaluated if edit mode is being cancelled such as when the user presses Escape to cancel edit.Note: The action will default to AcceptChange if the ShowErrorMessageForInvalidValue of the validationRule is false; otherwise it will default to ShowPrompt.Note: Like Microsoft Excel, only the validation rule of the active cell is considered even if the update is affecting other cells in the selection.
    */
    readonly editModeValidationError: EventEmitter<{
        sender: any;
        args: SpreadsheetEditModeValidationErrorEventArgs;
    }>;
    private _editRangePasswordNeeded;
    /**
     * Invoked when the Spreadsheet is performing an operation on a protected Worksheet and there is a single range that may be unlocked to allow the operation to be performed.
     * eventArgument="evt" argType="event" jQuery event object.
     * eventArgument="ui.owner" argType="object" Gets a reference to the spreadsheet widget.
     * eventArgument="ui.ranges" argType="array" Get an array of [protected range](ig.excel.WorksheetProtectedRange) objects that should be unlocked.
     * eventArgument="ui.unprotect" argType="object" Get a parameterless function that may be invoked to unlock the associated ranges.
    */
    readonly editRangePasswordNeeded: EventEmitter<{
        sender: any;
        args: SpreadsheetEditRangePasswordNeededEventArgs;
    }>;
    private _hyperlinkExecuting;
    /**
     * Invoked when a hyperlink is being followed in the Spreadsheet.
     * eventArgument="evt" argType="event" jQuery event object.
     * eventArgument="ui.owner" argType="object" Gets a reference to the spreadsheet widget.
     * eventArgument="ui.hyperlink" argType="object" Get the [hyperlink](ig.excel.WorksheetHyperlink) to be executed.
    */
    readonly hyperlinkExecuting: EventEmitter<{
        sender: any;
        args: SpreadsheetHyperlinkExecutingEventArgs;
    }>;
    private _selectionChanged;
    /**
     * Invoked when the selection for a ig.spreadsheet.SpreadsheetPane of the Spreadsheet is changed.
     * eventArgument="evt" argType="event" jQuery event object.
     * eventArgument="ui.owner" argType="object" Gets a reference to the spreadsheet widget.
     * eventArgument="ui.pane" argType="object" Get the [pane](ig.spreadsheet.SpreadsheetPane) for which the selection has changed.
    */
    readonly selectionChanged: EventEmitter<{
        sender: any;
        args: SpreadsheetSelectionChangedEventArgs;
    }>;
    private _userPromptDisplaying;
    /**
     * Invoked when the user will be prompted with a message regarding an operation that is being performed.
     * eventArgument="evt" argType="event" jQuery event object.
     * eventArgument="ui.owner" argType="object" Gets a reference to the spreadsheet widget.
     * eventArgument="ui.canCancel" argType="bool" Get a boolean indicating if the operation that triggered the prompt can be cancelled.
     * eventArgument="ui.displayMessage" argType="bool" Get a boolean indicating if a message will be displayed to the end user.
     * eventArgument="ui.exception" argType="object" Gets the exception for the error, if there was one.
     * eventArgument="ui.message" argType="string" Get or set the message that will be displayed.
     * eventArgument="ui.trigger" argType="string" Get the [action](ig.spreadsheet.SpreadsheetUserPromptTrigger) that caused the prompt to be displayed.
    */
    readonly userPromptDisplaying: EventEmitter<{
        sender: any;
        args: SpreadsheetUserPromptDisplayingEventArgs;
    }>;
    private _workbookDirtied;
    /**
     * Invoked when a change has been made to the workbook that might require a save.
     * eventArgument="evt" argType="event" jQuery event object.
     * eventArgument="ui.owner" argType="object" Gets a reference to the spreadsheet widget.
     * Note: This event is invoked asynchronously with regards to the change(s) that
     * have occurred. Also some changes alone are not considered to dirty the Workbook even though it
     * does change state on the Workbook or one of its subobjects. An example of that would be a zoom
     * type operation (e.g. changing the magnificationInNormalView).
    */
    readonly workbookDirtied: EventEmitter<{
        sender: any;
        args: SpreadsheetWorkbookDirtiedEventArgs;
    }>;
}
