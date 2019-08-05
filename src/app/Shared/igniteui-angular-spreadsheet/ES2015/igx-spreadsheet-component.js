/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { EventEmitter, Output, Injector, ComponentFactoryResolver, Component, Renderer2, ViewChild, Input, NgZone, ChangeDetectionStrategy, ViewContainerRef } from '@angular/core';
import { AngularRenderer } from "../../igniteui-angular-core/ES2015/angular-renderer";
import { toPoint, fromPoint, ensureBool, toSpinal, initializePropertiesFromCss, NamePatcher } from "../../igniteui-angular-core/ES2015/componentUtil";
import { TypeRegistrar } from "../../igniteui-angular-core/ES2015/type";
import { Spreadsheet } from './Spreadsheet';
import { SpreadsheetCss } from './SpreadsheetCss';
import { RendererContainer } from './RendererContainer';
import { IgxComponentRendererContainerComponent } from "../../igniteui-angular-core/ES2015/igx-component-renderer-container-component";
import { SpreadsheetCell } from './SpreadsheetCell';
import { SpreadsheetCellEditMode } from './SpreadsheetCellEditMode';
import { SpreadsheetCellSelectionMode } from './SpreadsheetCellSelectionMode';
import { SpreadsheetChartAdapterBase } from './SpreadsheetChartAdapterBase';
import { SpreadsheetEnterKeyNavigationDirection } from './SpreadsheetEnterKeyNavigationDirection';
import { SpreadsheetPane } from './SpreadsheetPane';
import { SpreadsheetSelection } from './SpreadsheetSelection';
import { WorksheetTable } from "../../igniteui-angular-excel/ES2015/WorksheetTable";
import { Worksheet } from "../../igniteui-angular-excel/ES2015/Worksheet";
import { Workbook } from "../../igniteui-angular-excel/ES2015/Workbook";
import { UndoManager } from './UndoManager';
import { delegateCombine } from "../../igniteui-angular-core/ES2015/type";
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
export const IgxSpreadsheetComponent_PROVIDERS = [];
/**
 * Custom control that displays one or more worksheets.
*/
let IgxSpreadsheetComponent = class IgxSpreadsheetComponent {
    // #region Constructor
    constructor(_renderer, _elRef, _ngZone, _componentFactoryResolver, _injector) {
        //super();
        this._renderer = _renderer;
        this._elRef = _elRef;
        this._ngZone = _ngZone;
        this._componentFactoryResolver = _componentFactoryResolver;
        this._injector = _injector;
        this._zoneRunner = null;
        this.__p = null;
        this._hasUserValues = new Set();
        this._stylingContainer = null;
        this._stylingParent = null;
        this._inStyling = false;
        this._ActionExecuted = null;
        this._ActionExecuting = null;
        this._activeCellChanged = null;
        this._activePaneChanged = null;
        this._activeTableChanged = null;
        this._activeWorksheetChanged = null;
        this._editModeExiting = null;
        this._editModeExited = null;
        this._editModeEntering = null;
        this._editModeEntered = null;
        this._editModeValidationError = null;
        this._editRangePasswordNeeded = null;
        this._hyperlinkExecuting = null;
        this._selectionChanged = null;
        this._userPromptDisplaying = null;
        this._workbookDirtied = null;
        if (this._styling) {
            NamePatcher.ensureStylablePatched(Object.getPrototypeOf(this));
        }
        this._zoneRunner = (act) => this._ngZone.run(act);
        this._implementation = this.createImplementation();
        this._container = _renderer.createElement("div");
        _renderer.appendChild(_elRef.element.nativeElement, this._container);
        _renderer.setStyle(this._container, "display", "block");
        _renderer.setStyle(this._container, "width", "100%");
        _renderer.setStyle(this._container, "height", "100%");
        var root;
        root = this._container;
        if (this._container.nativeElement != null) {
            root = this._container.nativeElement;
        }
        var ren = new AngularRenderer(root, this._renderer, window.document, this._ngZone, false, {});
        this._wrapper = ren;
        var spreadsheet = this.i;
        spreadsheet.css = new SpreadsheetCss();
        spreadsheet.createRendererContainer = () => this._createContainer();
        this._spreadsheet = spreadsheet;
        spreadsheet.provideContainer(ren);
        spreadsheet.onInitialized();
        ren.addSizeWatcher(() => {
            this._spreadsheet.containerResized();
        });
    }
    set height(value) {
        this._height = value;
        this._renderer.setStyle(this._elRef.element.nativeElement, "height", value);
        this._spreadsheet.containerResized();
    }
    get height() {
        return this._height;
    }
    set width(value) {
        this._width = value;
        this._renderer.setStyle(this._elRef.element.nativeElement, "width", value);
        this._spreadsheet.containerResized();
    }
    get width() {
        return this._width;
    }
    // #endregion Constructor
    ngOnDestroy() {
        this._spreadsheet.destroy();
        this._wrapper.destroy();
    }
    createImplementation() {
        return new Spreadsheet();
    }
    _createContainer() {
        var factory = this._componentFactoryResolver.resolveComponentFactory(IgxComponentRendererContainerComponent);
        var componentRef = this._dynamicContent.createComponent(factory);
        var container = new RendererContainer(() => componentRef.destroy());
        container.initialize(componentRef.instance, componentRef.location.nativeElement);
        return container;
    }
    ngAfterContentInit() {
        this.i.containerResized();
        this.i.styleUpdated();
    }
    _runInZone(act) {
        if (this._zoneRunner != null) {
            this._zoneRunner(act);
        }
        else {
            act();
        }
    }
    /**
     * @hidden
     */
    get i() {
        return this._implementation;
    } /**
                                 * @hidden
                                 */
    static _createFromInternal(internal) {
        if (!internal) {
            return null;
        }
        if (!internal.$type) {
            return null;
        }
        let name = internal.$type.name;
        let externalName = "Igx" + name + "Component";
        if (!TypeRegistrar.isRegistered(externalName)) {
            return null;
        }
        return TypeRegistrar.create(externalName);
    }
    /**
     * Returns an array of the panes for the activeWorksheet.
    */
    get panes() {
        return this.i._getPanesAsArray();
    }
    /**
     * Returns or sets a boolean indicating whether the scroll lock key is toggled.
     * This property is used when certain keys are pressed while the control has focus. For example
     * if an arrow key is pressed while the scroll lock is enabled the cell area will be scrolled rather than changing
     * the active cell. Note: This property is not maintained/changed by the control. It is just queried when
     * performing actions that consider whether the scroll lock is enabled.
    */
    get isScrollLocked() {
        return this.i.isScrollLocked;
    }
    set isScrollLocked(v) {
        this.i.isScrollLocked = ensureBool(v);
    }
    /**
     * Returns or sets the active cell within the selected worksheet.
    */
    get activeCell() {
        return this.i.activeCell;
    }
    set activeCell(v) {
        this.i.activeCell = v;
    }
    /**
     * Returns an object that represents the pane with the focus.
    */
    get activePane() {
        return this.i.activePane;
    }
    set activePane(v) {
        this.i.activePane = v;
    }
    /**
     * Returns an object that represents the current selection of the activePane.
    */
    get activeSelection() {
        return this.i.activeSelection;
    }
    set activeSelection(v) {
        this.i.activeSelection = v;
    }
    /**
     * Returns an object used to get the formatting of the activeCell and where modifications are applied to the entire activeSelection.
     * Any changes made to this object will affect all the objects in the selection. So for example, the
     * Font.Name may return "Arial" because the active cell has that as its resolved font name even though the other
     * cells are using a different font but if you set the Font.Name of this object to "Arial" then all the objects
     * affected by the selection will have their Font.Name updated to that value.
    */
    get activeSelectionCellRangeFormat() {
        return this.i.activeSelectionCellRangeFormat;
    }
    /**
     * Returns the ig.excel.WorksheetTable associated with the activeCell of the activeWorksheet.
    */
    get activeTable() {
        return this.i.activeTable;
    }
    set activeTable(v) {
        this.i.activeTable = v;
    }
    /**
     * Returns or sets the Worksheet from the workbook whose content should be displayed within the control.
    */
    get activeWorksheet() {
        return this.i.activeWorksheet;
    }
    set activeWorksheet(v) {
        this.i.activeWorksheet = v;
    }
    /**
     * Returns or sets a boolean indicating whether the spreadsheet allows adding worksheets.
    */
    get allowAddWorksheet() {
        return this.i.allowAddWorksheet;
    }
    set allowAddWorksheet(v) {
        this.i.allowAddWorksheet = ensureBool(v);
    }
    /**
     * Returns or sets a boolean indicating whether the spreadsheet allows deleting worksheets.
    */
    get allowDeleteWorksheet() {
        return this.i.allowDeleteWorksheet;
    }
    set allowDeleteWorksheet(v) {
        this.i.allowDeleteWorksheet = ensureBool(v);
    }
    /**
     * Returns or sets a boolean indicating if the grid lines are displayed in the selected worksheets.
    */
    get areGridlinesVisible() {
        return this.i.areGridlinesVisible;
    }
    set areGridlinesVisible(v) {
        this.i.areGridlinesVisible = ensureBool(v);
    }
    /**
     * Returns or sets a boolean indicating if the row and column headers are displayed for the selected worksheets.
    */
    get areHeadersVisible() {
        return this.i.areHeadersVisible;
    }
    set areHeadersVisible(v) {
        this.i.areHeadersVisible = ensureBool(v);
    }
    /**
     * Returns an enumeration used to indicate the current edit mode state.
    */
    get cellEditMode() {
        return this.i.cellEditMode;
    }
    set cellEditMode(v) {
        this.i.cellEditMode = v;
    }
    /**
     * Returns or sets the object that will provide the chart visualization for display within the Spreadsheet
     * By default charts are not displayed within the spreadsheet. To display charts one should set this
     * property to an instance of a SpreadsheetChartAdapter which is in a separate reference since it relies upon
     * the chart and other data visualization controls.
    */
    get chartAdapter() {
        return this.i.chartAdapter;
    }
    set chartAdapter(v) {
        this.i.chartAdapter = v;
    }
    /**
     * Returns or sets an enumeration indicating the direction of the cell adjacent to the activeCell that should be activated when the enter key is pressed.
     * This property is only used if the isEnterKeyNavigationEnabled is set to true. Also, the reverse direction is
     * navigated when Shift + Enter are pressed.
    */
    get enterKeyNavigationDirection() {
        return this.i.enterKeyNavigationDirection;
    }
    set enterKeyNavigationDirection(v) {
        this.i.enterKeyNavigationDirection = v;
    }
    /**
     * Returns or sets the number of decimal places by which a whole number typed in during edit mode should be adjusted when isFixedDecimalEnabled is true
    */
    get fixedDecimalPlaceCount() {
        return this.i.fixedDecimalPlaceCount;
    }
    set fixedDecimalPlaceCount(v) {
        this.i.fixedDecimalPlaceCount = +v;
    }
    /**
     * Returns or sets a boolean indicating whether the adjacent cell indicated by the enterKeyNavigationDirection should be navigated to when the enter key is pressed.
    */
    get isEnterKeyNavigationEnabled() {
        return this.i.isEnterKeyNavigationEnabled;
    }
    set isEnterKeyNavigationEnabled(v) {
        this.i.isEnterKeyNavigationEnabled = ensureBool(v);
    }
    /**
     * Returns or sets a boolean indicating whether a fixed decimal place is automatically added when a whole number is entered while in edit mode.
    */
    get isFixedDecimalEnabled() {
        return this.i.isFixedDecimalEnabled;
    }
    set isFixedDecimalEnabled(v) {
        this.i.isFixedDecimalEnabled = ensureBool(v);
    }
    /**
     * Returns or sets a boolean indicating if the formula bar is displayed within the Spreadsheet.
    */
    get isFormulaBarVisible() {
        return this.i.isFormulaBarVisible;
    }
    set isFormulaBarVisible(v) {
        this.i.isFormulaBarVisible = ensureBool(v);
    }
    /**
     * Returns a boolean indicating if the control is currently editing the value of the activeCell
    */
    get isInEditMode() {
        return this.i.isInEditMode;
    }
    set isInEditMode(v) {
        this.i.isInEditMode = ensureBool(v);
    }
    /**
     * Returns or sets a boolean indicating whether the control is in "End mode".
     * End mode is a mode that affects certain keyboard navigation such as navigating with the arrow keys. For example when in
     * end mode and one presses the right arrow, the activeCell will be changed to be the first cell to the right of the current ActiveCell
     * that has a value (even if the value is ""). If there were no cells to the right with a value then it would activate the right most cell in that row. End
     * mode will end automatically such as when one presses an arrow key.
    */
    get isInEndMode() {
        return this.i.isInEndMode;
    }
    set isInEndMode(v) {
        this.i.isInEndMode = ensureBool(v);
    }
    /**
     * Returns a boolean indicating if the user is currently editing the name of the active worksheet.
    */
    get isRenamingWorksheet() {
        return this.i.isRenamingWorksheet;
    }
    set isRenamingWorksheet(v) {
        this.i.isRenamingWorksheet = ensureBool(v);
    }
    /**
     * Returns or sets a boolean indicating whether undo is enabled for the control.
    */
    get isUndoEnabled() {
        return this.i.isUndoEnabled;
    }
    set isUndoEnabled(v) {
        this.i.isUndoEnabled = ensureBool(v);
    }
    /**
     * Returns or sets the width of the name box within the formula bar.
    */
    get nameBoxWidth() {
        return this.i.nameBoxWidth;
    }
    set nameBoxWidth(v) {
        this.i.nameBoxWidth = +v;
    }
    /**
     * Returns or sets a value indicating how the selection is updated when interacting with the cells via the mouse or keyboard.
    */
    get selectionMode() {
        return this.i.selectionMode;
    }
    set selectionMode(v) {
        this.i.selectionMode = v;
    }
    /**
     * Returns or sets an array of the Worksheets whose tabs are selected.
    */
    get selectedWorksheets() {
        return this.i.selectedWorksheets;
    }
    set selectedWorksheets(v) {
        this.i.selectedWorksheets = v;
    }
    /**
     * Returns or sets the UndoManager.
     * Note: this property can not be set to null.
    */
    get undoManager() {
        return this.i.undoManager;
    }
    set undoManager(v) {
        this.i.undoManager = v;
    }
    /**
     * Returns or sets the position of the screen tip used to display the input message for the data validation rule associated with the active cell.
    */
    get validationInputMessagePosition() {
        return fromPoint(this.i.validationInputMessagePosition);
    }
    set validationInputMessagePosition(v) {
        this.i.validationInputMessagePosition = toPoint(v);
    }
    /**
     * Returns or sets the workbook whose information is displayed in the control.
    */
    get workbook() {
        return this.i.workbook;
    }
    set workbook(v) {
        this.i.workbook = v;
    }
    /**
     * Returns or sets the magnification of the selected worksheets.
    */
    get zoomLevel() {
        return this.i.zoomLevel;
    }
    set zoomLevel(v) {
        this.i.zoomLevel = +v;
    }
    get hasUserValues() {
        return this._hasUserValues;
    }
    __m(propertyName) {
        if (!this._inStyling) {
            this._hasUserValues.add(propertyName);
        }
    }
    _styling(container, component, parent) {
        if (this._inStyling) {
            return;
        }
        this._inStyling = true;
        this._stylingContainer = container;
        this._stylingParent = component;
        let genericPrefix = "";
        let typeName = this.i.$type.name;
        if (typeName.indexOf("Xam") === 0) {
            typeName = typeName.substring(3);
        }
        genericPrefix = toSpinal("SpreadsheetComponent");
        let additionalPrefixes = [];
        let prefix = toSpinal(typeName);
        additionalPrefixes.push(prefix + "-");
        let b = this.i.$type.baseType;
        while (b && b.name != "Object" &&
            b.name != "Base" &&
            b.name != "Control" &&
            b.Name != "DependencyObject" &&
            b.Name != "FrameworkElement") {
            typeName = b.name;
            if (typeName.indexOf("Xam") === 0) {
                typeName = typeName.substring(3);
            }
            let basePrefix = toSpinal(typeName);
            additionalPrefixes.push(basePrefix + "-");
            b = b.baseType;
        }
        if (parent) {
            let parentTypeName = parent.i.$type.name;
            if (parentTypeName.indexOf("Xam") === 0) {
                parentTypeName = parentTypeName.substring(3);
            }
            let parentPrefix = toSpinal(parentTypeName);
            additionalPrefixes.push(parentPrefix + "-" + genericPrefix + "-");
            additionalPrefixes.push(parentPrefix + "-" + prefix + "-");
        }
        initializePropertiesFromCss(container, this, genericPrefix + "-", this.hasUserValues, false, additionalPrefixes);
        if (this._otherStyling) {
            this._otherStyling(container, component, parent);
        }
        this._inStyling = false;
    }
    containerResized() {
        this.i.containerResized();
    }
    destroy() {
        this.i.destroy();
    }
    executeAction(action) {
        let iv = this.i.executeCommand(action);
        return (iv);
    }
    flush() {
        this.i.flush();
    }
    onInitialized() {
        this.i.onInitialized();
    }
    provideContainer(container) {
        this.i.provideContainer(container);
    }
    scheduleArrange() {
        this.i.scheduleArrange();
    }
    styleUpdated() {
        this.i.styleUpdated();
    }
    /**
     * Returns an object with information about the visual state of the spreadsheet.
    
    */
    exportVisualData() {
        let iv = this.i.exportVisualData();
        return (iv);
    }
    /**
     * Invoked when an action is executed on the Spreadsheet.
     * eventArgument="evt" argType="event" jQuery event object.
     * eventArgument="ui.owner" argType="object" Gets a reference to the spreadsheet widget.
     * eventArgument="ui.action" argType="string" Gets the [action](ig.spreadsheet.SpreadsheetAction) that was executed.
    */
    get ActionExecuted() {
        if (this._ActionExecuted == null) {
            this._ActionExecuted = new EventEmitter();
            this.i.actionExecuted = delegateCombine(this.i.actionExecuted, (o, e) => {
                this._runInZone(() => {
                    let outerArgs = new SpreadsheetActionExecutedEventArgs();
                    outerArgs._provideImplementation(e);
                    if (this.beforeActionExecuted) {
                        this.beforeActionExecuted(this, outerArgs);
                    }
                    this._ActionExecuted.emit({
                        sender: this,
                        args: outerArgs
                    });
                });
            });
        }
        return this._ActionExecuted;
    }
    /**
     * Invoked when an action is about to be executed by the Spreadsheet.
     * eventArgument="evt" argType="event" jQuery event object.
     * eventArgument="ui.owner" argType="object" Gets a reference to the spreadsheet widget.
     * eventArgument="ui.action" argType="string" Gets the [action](ig.spreadsheet.SpreadsheetAction) that is about to be executed.
    */
    get ActionExecuting() {
        if (this._ActionExecuting == null) {
            this._ActionExecuting = new EventEmitter();
            this.i.actionExecuting = delegateCombine(this.i.actionExecuting, (o, e) => {
                this._runInZone(() => {
                    let outerArgs = new SpreadsheetActionExecutingEventArgs();
                    outerArgs._provideImplementation(e);
                    if (this.beforeActionExecuting) {
                        this.beforeActionExecuting(this, outerArgs);
                    }
                    this._ActionExecuting.emit({
                        sender: this,
                        args: outerArgs
                    });
                });
            });
        }
        return this._ActionExecuting;
    }
    /**
     * Invoked when the activeCell of the Spreadsheet has changed.
     * eventArgument="evt" argType="event" jQuery event object.
     * eventArgument="ui.owner" argType="object" Gets a reference to the spreadsheet widget.
     * eventArgument="ui.oldValue" argType="string" Gets the previous active cell.
     * eventArgument="ui.newValue" argType="string" Gets the current active cell.
    */
    get activeCellChanged() {
        if (this._activeCellChanged == null) {
            this._activeCellChanged = new EventEmitter();
            this.i.activeCellChanged = delegateCombine(this.i.activeCellChanged, (o, e) => {
                this._runInZone(() => {
                    let outerArgs = new SpreadsheetActiveCellChangedEventArgs();
                    outerArgs._provideImplementation(e);
                    if (this.beforeActiveCellChanged) {
                        this.beforeActiveCellChanged(this, outerArgs);
                    }
                    this._activeCellChanged.emit({
                        sender: this,
                        args: outerArgs
                    });
                });
            });
        }
        return this._activeCellChanged;
    }
    /**
     * Invoked when the activePane of the Spreadsheet has changed.
     * eventArgument="evt" argType="event" jQuery event object.
     * eventArgument="ui.owner" argType="object" Gets a reference to the spreadsheet widget.
     * eventArgument="ui.oldActivePane" argType="object" Gets the previous active [pane](ig.spreadsheet.SpreadsheetPane).
     * eventArgument="ui.newActivePane" argType="object" Gets the current active [pane](ig.spreadsheet.SpreadsheetPane).
     * eventArgument="ui.activeCell" argType="string" Gets the active cell of the new active pane or null if there is no active pane.
     * eventArgument="ui.visibleRange" argType="string" Gets the current visible range of the new active pane or null if there is no active pane.
    */
    get activePaneChanged() {
        if (this._activePaneChanged == null) {
            this._activePaneChanged = new EventEmitter();
            this.i.activePaneChanged = delegateCombine(this.i.activePaneChanged, (o, e) => {
                this._runInZone(() => {
                    let outerArgs = new SpreadsheetActivePaneChangedEventArgs();
                    outerArgs._provideImplementation(e);
                    if (this.beforeActivePaneChanged) {
                        this.beforeActivePaneChanged(this, outerArgs);
                    }
                    this._activePaneChanged.emit({
                        sender: this,
                        args: outerArgs
                    });
                });
            });
        }
        return this._activePaneChanged;
    }
    /**
     * Invoked when the activeTable of the Spreadsheet has changed.
     * eventArgument="evt" argType="event" jQuery event object.
     * eventArgument="ui.owner" argType="object" Gets a reference to the spreadsheet widget.
     * eventArgument="ui.oldActiveTable" argType="object" Gets the previous active [Table](ig.excel.WorksheetTable).
     * eventArgument="ui.newActiveTable" argType="object" Gets the current active [Table](ig.excel.WorksheetTable).
    */
    get activeTableChanged() {
        if (this._activeTableChanged == null) {
            this._activeTableChanged = new EventEmitter();
            this.i.activeTableChanged = delegateCombine(this.i.activeTableChanged, (o, e) => {
                this._runInZone(() => {
                    let outerArgs = new SpreadsheetActiveTableChangedEventArgs();
                    outerArgs._provideImplementation(e);
                    if (this.beforeActiveTableChanged) {
                        this.beforeActiveTableChanged(this, outerArgs);
                    }
                    this._activeTableChanged.emit({
                        sender: this,
                        args: outerArgs
                    });
                });
            });
        }
        return this._activeTableChanged;
    }
    /**
     * Invoked when the activeWorksheet of the Spreadsheet has changed.
     * eventArgument="evt" argType="event" jQuery event object.
     * eventArgument="ui.owner" argType="object" Gets a reference to the spreadsheet widget.
     * eventArgument="ui.oldActiveWorksheet" argType="object" Gets the previous active [worksheet](ig.excel.Worksheet).
     * eventArgument="ui.oldActiveWorksheetName" argType="string" Gets the name of the previous active worksheet or null if oldActiveWorksheet is null.
     * eventArgument="ui.newActiveWorksheet" argType="object" Gets the current active [worksheet](ig.excel.Worksheet).
     * eventArgument="ui.newActiveWorksheetName" argType="string" Gets the name of the new active worksheet or null if newActiveWorksheet is null.
    */
    get activeWorksheetChanged() {
        if (this._activeWorksheetChanged == null) {
            this._activeWorksheetChanged = new EventEmitter();
            this.i.activeWorksheetChanged = delegateCombine(this.i.activeWorksheetChanged, (o, e) => {
                this._runInZone(() => {
                    let outerArgs = new SpreadsheetActiveWorksheetChangedEventArgs();
                    outerArgs._provideImplementation(e);
                    if (this.beforeActiveWorksheetChanged) {
                        this.beforeActiveWorksheetChanged(this, outerArgs);
                    }
                    this._activeWorksheetChanged.emit({
                        sender: this,
                        args: outerArgs
                    });
                });
            });
        }
        return this._activeWorksheetChanged;
    }
    /**
     * Invoked when the Spreadsheet is about to end the in-place editing of the activeCell.
     * eventArgument="evt" argType="event" jQuery event object.
     * eventArgument="ui.owner" argType="object" Gets a reference to the spreadsheet widget.
     * eventArgument="ui.acceptChanges" argType="bool" Get or set a boolean indicating whether the changes will be made to the cell's value when edit mode ends.
     * eventArgument="ui.canCancel" argType="bool" Get a boolean indicating if the edit mode is being forced to exit edit mode in which case it cannot be cancelled.
     * eventArgument="ui.cell" argType="string" Gets the cell for which the control is exiting edit mode.
     * eventArgument="ui.editText" argType="string" Gets the edit text that will be used to update the cell(s).
    */
    get editModeExiting() {
        if (this._editModeExiting == null) {
            this._editModeExiting = new EventEmitter();
            this.i.editModeExiting = delegateCombine(this.i.editModeExiting, (o, e) => {
                this._runInZone(() => {
                    let outerArgs = new SpreadsheetEditModeExitingEventArgs();
                    outerArgs._provideImplementation(e);
                    if (this.beforeEditModeExiting) {
                        this.beforeEditModeExiting(this, outerArgs);
                    }
                    this._editModeExiting.emit({
                        sender: this,
                        args: outerArgs
                    });
                });
            });
        }
        return this._editModeExiting;
    }
    /**
     * Invoked when the Spreadsheet has ended the in-place editing of the activeCell.
     * eventArgument="evt" argType="event" jQuery event object.
     * eventArgument="ui.owner" argType="object" Gets a reference to the spreadsheet widget.
     * eventArgument="ui.cell" argType="string" Gets the cell for which the control has exited edit mode.
    */
    get editModeExited() {
        if (this._editModeExited == null) {
            this._editModeExited = new EventEmitter();
            this.i.editModeExited = delegateCombine(this.i.editModeExited, (o, e) => {
                this._runInZone(() => {
                    let outerArgs = new SpreadsheetEditModeExitedEventArgs();
                    outerArgs._provideImplementation(e);
                    if (this.beforeEditModeExited) {
                        this.beforeEditModeExited(this, outerArgs);
                    }
                    this._editModeExited.emit({
                        sender: this,
                        args: outerArgs
                    });
                });
            });
        }
        return this._editModeExited;
    }
    /**
     * Invoked when the Spreadsheet is about to start in-place editing of the activeCell.
     * eventArgument="evt" argType="event" jQuery event object.
     * eventArgument="ui.owner" argType="object" Gets a reference to the spreadsheet widget.
     * eventArgument="ui.cell" argType="string" Gets the cell for which the control is going into edit mode.
    */
    get editModeEntering() {
        if (this._editModeEntering == null) {
            this._editModeEntering = new EventEmitter();
            this.i.editModeEntering = delegateCombine(this.i.editModeEntering, (o, e) => {
                this._runInZone(() => {
                    let outerArgs = new SpreadsheetEditModeEnteringEventArgs();
                    outerArgs._provideImplementation(e);
                    if (this.beforeEditModeEntering) {
                        this.beforeEditModeEntering(this, outerArgs);
                    }
                    this._editModeEntering.emit({
                        sender: this,
                        args: outerArgs
                    });
                });
            });
        }
        return this._editModeEntering;
    }
    /**
     * Invoked when the Spreadsheet has started in-place editing of the activeCell.
     * eventArgument="evt" argType="event" jQuery event object.
     * eventArgument="ui.owner" argType="object" Gets a reference to the spreadsheet widget.
     * eventArgument="ui.cell" argType="string" Gets the cell for which the control has entered edit mode.
    */
    get editModeEntered() {
        if (this._editModeEntered == null) {
            this._editModeEntered = new EventEmitter();
            this.i.editModeEntered = delegateCombine(this.i.editModeEntered, (o, e) => {
                this._runInZone(() => {
                    let outerArgs = new SpreadsheetEditModeEnteredEventArgs();
                    outerArgs._provideImplementation(e);
                    if (this.beforeEditModeEntered) {
                        this.beforeEditModeEntered(this, outerArgs);
                    }
                    this._editModeEntered.emit({
                        sender: this,
                        args: outerArgs
                    });
                });
            });
        }
        return this._editModeEntered;
    }
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
    get editModeValidationError() {
        if (this._editModeValidationError == null) {
            this._editModeValidationError = new EventEmitter();
            this.i.editModeValidationError = delegateCombine(this.i.editModeValidationError, (o, e) => {
                this._runInZone(() => {
                    let outerArgs = new SpreadsheetEditModeValidationErrorEventArgs();
                    outerArgs._provideImplementation(e);
                    if (this.beforeEditModeValidationError) {
                        this.beforeEditModeValidationError(this, outerArgs);
                    }
                    this._editModeValidationError.emit({
                        sender: this,
                        args: outerArgs
                    });
                });
            });
        }
        return this._editModeValidationError;
    }
    /**
     * Invoked when the Spreadsheet is performing an operation on a protected Worksheet and there is a single range that may be unlocked to allow the operation to be performed.
     * eventArgument="evt" argType="event" jQuery event object.
     * eventArgument="ui.owner" argType="object" Gets a reference to the spreadsheet widget.
     * eventArgument="ui.ranges" argType="array" Get an array of [protected range](ig.excel.WorksheetProtectedRange) objects that should be unlocked.
     * eventArgument="ui.unprotect" argType="object" Get a parameterless function that may be invoked to unlock the associated ranges.
    */
    get editRangePasswordNeeded() {
        if (this._editRangePasswordNeeded == null) {
            this._editRangePasswordNeeded = new EventEmitter();
            this.i.editRangePasswordNeeded = delegateCombine(this.i.editRangePasswordNeeded, (o, e) => {
                this._runInZone(() => {
                    let outerArgs = new SpreadsheetEditRangePasswordNeededEventArgs();
                    outerArgs._provideImplementation(e);
                    if (this.beforeEditRangePasswordNeeded) {
                        this.beforeEditRangePasswordNeeded(this, outerArgs);
                    }
                    this._editRangePasswordNeeded.emit({
                        sender: this,
                        args: outerArgs
                    });
                });
            });
        }
        return this._editRangePasswordNeeded;
    }
    /**
     * Invoked when a hyperlink is being followed in the Spreadsheet.
     * eventArgument="evt" argType="event" jQuery event object.
     * eventArgument="ui.owner" argType="object" Gets a reference to the spreadsheet widget.
     * eventArgument="ui.hyperlink" argType="object" Get the [hyperlink](ig.excel.WorksheetHyperlink) to be executed.
    */
    get hyperlinkExecuting() {
        if (this._hyperlinkExecuting == null) {
            this._hyperlinkExecuting = new EventEmitter();
            this.i.hyperlinkExecuting = delegateCombine(this.i.hyperlinkExecuting, (o, e) => {
                this._runInZone(() => {
                    let outerArgs = new SpreadsheetHyperlinkExecutingEventArgs();
                    outerArgs._provideImplementation(e);
                    if (this.beforeHyperlinkExecuting) {
                        this.beforeHyperlinkExecuting(this, outerArgs);
                    }
                    this._hyperlinkExecuting.emit({
                        sender: this,
                        args: outerArgs
                    });
                });
            });
        }
        return this._hyperlinkExecuting;
    }
    /**
     * Invoked when the selection for a ig.spreadsheet.SpreadsheetPane of the Spreadsheet is changed.
     * eventArgument="evt" argType="event" jQuery event object.
     * eventArgument="ui.owner" argType="object" Gets a reference to the spreadsheet widget.
     * eventArgument="ui.pane" argType="object" Get the [pane](ig.spreadsheet.SpreadsheetPane) for which the selection has changed.
    */
    get selectionChanged() {
        if (this._selectionChanged == null) {
            this._selectionChanged = new EventEmitter();
            this.i.selectionChanged = delegateCombine(this.i.selectionChanged, (o, e) => {
                this._runInZone(() => {
                    let outerArgs = new SpreadsheetSelectionChangedEventArgs();
                    outerArgs._provideImplementation(e);
                    if (this.beforeSelectionChanged) {
                        this.beforeSelectionChanged(this, outerArgs);
                    }
                    this._selectionChanged.emit({
                        sender: this,
                        args: outerArgs
                    });
                });
            });
        }
        return this._selectionChanged;
    }
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
    get userPromptDisplaying() {
        if (this._userPromptDisplaying == null) {
            this._userPromptDisplaying = new EventEmitter();
            this.i.userPromptDisplaying = delegateCombine(this.i.userPromptDisplaying, (o, e) => {
                this._runInZone(() => {
                    let outerArgs = new SpreadsheetUserPromptDisplayingEventArgs();
                    outerArgs._provideImplementation(e);
                    if (this.beforeUserPromptDisplaying) {
                        this.beforeUserPromptDisplaying(this, outerArgs);
                    }
                    this._userPromptDisplaying.emit({
                        sender: this,
                        args: outerArgs
                    });
                });
            });
        }
        return this._userPromptDisplaying;
    }
    /**
     * Invoked when a change has been made to the workbook that might require a save.
     * eventArgument="evt" argType="event" jQuery event object.
     * eventArgument="ui.owner" argType="object" Gets a reference to the spreadsheet widget.
     * Note: This event is invoked asynchronously with regards to the change(s) that
     * have occurred. Also some changes alone are not considered to dirty the Workbook even though it
     * does change state on the Workbook or one of its subobjects. An example of that would be a zoom
     * type operation (e.g. changing the magnificationInNormalView).
    */
    get workbookDirtied() {
        if (this._workbookDirtied == null) {
            this._workbookDirtied = new EventEmitter();
            this.i.workbookDirtied = delegateCombine(this.i.workbookDirtied, (o, e) => {
                this._runInZone(() => {
                    let outerArgs = new SpreadsheetWorkbookDirtiedEventArgs();
                    outerArgs._provideImplementation(e);
                    if (this.beforeWorkbookDirtied) {
                        this.beforeWorkbookDirtied(this, outerArgs);
                    }
                    this._workbookDirtied.emit({
                        sender: this,
                        args: outerArgs
                    });
                });
            });
        }
        return this._workbookDirtied;
    }
};
tslib_1.__decorate([
    ViewChild("dynamicContent", { read: ViewContainerRef, static: true }),
    tslib_1.__metadata("design:type", ViewContainerRef)
], IgxSpreadsheetComponent.prototype, "_dynamicContent", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String),
    tslib_1.__metadata("design:paramtypes", [String])
], IgxSpreadsheetComponent.prototype, "height", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String),
    tslib_1.__metadata("design:paramtypes", [String])
], IgxSpreadsheetComponent.prototype, "width", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean),
    tslib_1.__metadata("design:paramtypes", [Boolean])
], IgxSpreadsheetComponent.prototype, "isScrollLocked", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", SpreadsheetCell),
    tslib_1.__metadata("design:paramtypes", [SpreadsheetCell])
], IgxSpreadsheetComponent.prototype, "activeCell", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", SpreadsheetPane),
    tslib_1.__metadata("design:paramtypes", [SpreadsheetPane])
], IgxSpreadsheetComponent.prototype, "activePane", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", SpreadsheetSelection),
    tslib_1.__metadata("design:paramtypes", [SpreadsheetSelection])
], IgxSpreadsheetComponent.prototype, "activeSelection", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", WorksheetTable),
    tslib_1.__metadata("design:paramtypes", [WorksheetTable])
], IgxSpreadsheetComponent.prototype, "activeTable", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Worksheet),
    tslib_1.__metadata("design:paramtypes", [Worksheet])
], IgxSpreadsheetComponent.prototype, "activeWorksheet", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean),
    tslib_1.__metadata("design:paramtypes", [Boolean])
], IgxSpreadsheetComponent.prototype, "allowAddWorksheet", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean),
    tslib_1.__metadata("design:paramtypes", [Boolean])
], IgxSpreadsheetComponent.prototype, "allowDeleteWorksheet", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean),
    tslib_1.__metadata("design:paramtypes", [Boolean])
], IgxSpreadsheetComponent.prototype, "areGridlinesVisible", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean),
    tslib_1.__metadata("design:paramtypes", [Boolean])
], IgxSpreadsheetComponent.prototype, "areHeadersVisible", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Number),
    tslib_1.__metadata("design:paramtypes", [Number])
], IgxSpreadsheetComponent.prototype, "cellEditMode", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", SpreadsheetChartAdapterBase),
    tslib_1.__metadata("design:paramtypes", [SpreadsheetChartAdapterBase])
], IgxSpreadsheetComponent.prototype, "chartAdapter", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Number),
    tslib_1.__metadata("design:paramtypes", [Number])
], IgxSpreadsheetComponent.prototype, "enterKeyNavigationDirection", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Number),
    tslib_1.__metadata("design:paramtypes", [Number])
], IgxSpreadsheetComponent.prototype, "fixedDecimalPlaceCount", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean),
    tslib_1.__metadata("design:paramtypes", [Boolean])
], IgxSpreadsheetComponent.prototype, "isEnterKeyNavigationEnabled", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean),
    tslib_1.__metadata("design:paramtypes", [Boolean])
], IgxSpreadsheetComponent.prototype, "isFixedDecimalEnabled", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean),
    tslib_1.__metadata("design:paramtypes", [Boolean])
], IgxSpreadsheetComponent.prototype, "isFormulaBarVisible", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean),
    tslib_1.__metadata("design:paramtypes", [Boolean])
], IgxSpreadsheetComponent.prototype, "isInEditMode", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean),
    tslib_1.__metadata("design:paramtypes", [Boolean])
], IgxSpreadsheetComponent.prototype, "isInEndMode", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean),
    tslib_1.__metadata("design:paramtypes", [Boolean])
], IgxSpreadsheetComponent.prototype, "isRenamingWorksheet", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean),
    tslib_1.__metadata("design:paramtypes", [Boolean])
], IgxSpreadsheetComponent.prototype, "isUndoEnabled", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Number),
    tslib_1.__metadata("design:paramtypes", [Number])
], IgxSpreadsheetComponent.prototype, "nameBoxWidth", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Number),
    tslib_1.__metadata("design:paramtypes", [Number])
], IgxSpreadsheetComponent.prototype, "selectionMode", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Array),
    tslib_1.__metadata("design:paramtypes", [Array])
], IgxSpreadsheetComponent.prototype, "selectedWorksheets", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", UndoManager),
    tslib_1.__metadata("design:paramtypes", [UndoManager])
], IgxSpreadsheetComponent.prototype, "undoManager", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [Object])
], IgxSpreadsheetComponent.prototype, "validationInputMessagePosition", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Workbook),
    tslib_1.__metadata("design:paramtypes", [Workbook])
], IgxSpreadsheetComponent.prototype, "workbook", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Number),
    tslib_1.__metadata("design:paramtypes", [Number])
], IgxSpreadsheetComponent.prototype, "zoomLevel", null);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter),
    tslib_1.__metadata("design:paramtypes", [])
], IgxSpreadsheetComponent.prototype, "ActionExecuted", null);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter),
    tslib_1.__metadata("design:paramtypes", [])
], IgxSpreadsheetComponent.prototype, "ActionExecuting", null);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter),
    tslib_1.__metadata("design:paramtypes", [])
], IgxSpreadsheetComponent.prototype, "activeCellChanged", null);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter),
    tslib_1.__metadata("design:paramtypes", [])
], IgxSpreadsheetComponent.prototype, "activePaneChanged", null);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter),
    tslib_1.__metadata("design:paramtypes", [])
], IgxSpreadsheetComponent.prototype, "activeTableChanged", null);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter),
    tslib_1.__metadata("design:paramtypes", [])
], IgxSpreadsheetComponent.prototype, "activeWorksheetChanged", null);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter),
    tslib_1.__metadata("design:paramtypes", [])
], IgxSpreadsheetComponent.prototype, "editModeExiting", null);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter),
    tslib_1.__metadata("design:paramtypes", [])
], IgxSpreadsheetComponent.prototype, "editModeExited", null);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter),
    tslib_1.__metadata("design:paramtypes", [])
], IgxSpreadsheetComponent.prototype, "editModeEntering", null);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter),
    tslib_1.__metadata("design:paramtypes", [])
], IgxSpreadsheetComponent.prototype, "editModeEntered", null);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter),
    tslib_1.__metadata("design:paramtypes", [])
], IgxSpreadsheetComponent.prototype, "editModeValidationError", null);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter),
    tslib_1.__metadata("design:paramtypes", [])
], IgxSpreadsheetComponent.prototype, "editRangePasswordNeeded", null);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter),
    tslib_1.__metadata("design:paramtypes", [])
], IgxSpreadsheetComponent.prototype, "hyperlinkExecuting", null);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter),
    tslib_1.__metadata("design:paramtypes", [])
], IgxSpreadsheetComponent.prototype, "selectionChanged", null);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter),
    tslib_1.__metadata("design:paramtypes", [])
], IgxSpreadsheetComponent.prototype, "userPromptDisplaying", null);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter),
    tslib_1.__metadata("design:paramtypes", [])
], IgxSpreadsheetComponent.prototype, "workbookDirtied", null);
IgxSpreadsheetComponent = tslib_1.__decorate([
    Component({
        selector: 'igx-spreadsheet',
        template: `<ng-container #dynamicContent></ng-container>`,
        changeDetection: ChangeDetectionStrategy.OnPush,
        providers: IgxSpreadsheetComponent_PROVIDERS,
        styles: [`
		:host {
			display: block;
		}
	`,
            `
fakediscoveryelement {
    display: block;
    position: absolute;
    box-sizing: content-box;
    -moz-box-sizing: content-box;
    margin: -4321px;
    color: rgb(3, 2, 1);
    border-style: solid;
    border-color: rgb(3, 2, 1);
    background-color: rgb(3, 2, 1);
    background-image: none;
    border-width: 4321px;
    border-radius: 4321px;
    outline-color: rgb(3, 2, 1);
    vertical-align: baseline;
    text-align: justify;
    opacity: 0.888;
    visibility: hidden;
    padding: 4321px;
    width: 4321px;
    height: 4321px;
}
	`,
            `
/* [START] Structure: */

/* InputMessage
   ============
*/
.ui-igspreadsheet-inputmessage-title {
    font-weight: bold;
    padding-right: 22px;
}

.ui-igspreadsheet-inputmessage-content {
    padding-left: 2px;
}

.ui-igspreadsheet-inputmessage {
    border-width: 1px;
    border-style: solid;
    max-height: 170px;
    max-width: 260px;
    padding: 4px 6px 4px 5px;
    overflow: hidden;
}


/* ToolTip
   =======
*/
.ui-igspreadsheet-tooltip {
    border-width: 1px;
    border-style: solid;
}


/* Splitters
   =========
*/
.ui-igspreadsheet-rowsplitter,
.ui-igspreadsheet-columnsplitter,
.ui-igspreadsheet-splitterintersection {
    border: none;
}

.ui-igspreadsheet-columnsplitter,
.ui-igspreadsheet-tabareasplitter,
.ui-igspreadsheet-nameboxsplitter {
    cursor: nw-resize;
    cursor: url(data:application/cur;base64,AAACAAEAICAAAA8ADwAwAQAAFgAAACgAAAAgAAAAQAAAAAEAAQAAAAAAgAAAAAAAAAAAAAAAAgAAAAIAAAAAAAAA////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB+AAAAWgAAAFoAAABaAAAAWgAABlpgAApaUAAT28gAIBgEACAYBAAT28gAClpQAAZaYAAAWgAAAFoAAABaAAAAWgAAAH4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA///////////////////////////////////////4H///+B////gf///4H///+B///5gZ//8YGP/+AAB//AAAP/wAAD/+AAB//xgY//+YGf//+B////gf///4H///+B////gf//////////////////////////////////////8=), col-resize;
}

.ui-igspreadsheet-columnsplitter {
    width: 4px;
}

.ui-igspreadsheet-columnsplitter.ui-state-disabled {
    opacity: 1;
    width: 1px;
    pointer-events: none;
}

.ui-igspreadsheet-rowsplitter {
    height: 4px;
    cursor: sw-resize;
    cursor: url(data:application/cur;base64,AAACAAEAICAAAA8ADwAwAQAAFgAAACgAAAAgAAAAQAAAAAEAAQAAAAAAgAAAAAAAAAAAAAAAAgAAAAIAAAAAAAAA////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABgAAAAkAAAAQgAAAIEAAADnAAAAJAAAACQAAB/n+AAQAAgAH//4AB//+AAQAAgAH+f4AAAkAAAAJAAAAOcAAACBAAAAQgAAACQAAAAYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//////////////////////////////////5////8P///+B////AP///wD////D////w///4AAH/+AAB//gAAf/4AAH/+AAB//gAAf//8P////D////AP///wD///+B////w////+f/////////////////////////////////8=), row-resize;
}

.ui-igspreadsheet-rowsplitter.ui-state-disabled {
    opacity: 1;
    height: 1px;
    pointer-events: none;
}

.ui-igspreadsheet-splitterintersection {
    cursor: url(data:application/cur;base64,AAACAAEAICAAAA8ADwAwAQAAFgAAACgAAAAgAAAAQAAAAAEAAQAAAAAAgAAAAAAAAAAAAAAAAgAAAAIAAAAAAAAA////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAYAAAAJAAAAEIAAACBAAAA5wAAAyTAAAUkoAAJ55AAEAAIABAACAAJ55AABSSgAAMkwAAA5wAAAIEAAABCAAAAJAAAABgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA///////////////////////////////////////+f////D////gf///wD///8A///8wz//+MMf//AAD//gAAf/4AAH//AAD//4wx///MM///8A////AP///4H////D////5///////////////////////////////////////8=), move;
}

.ui-igspreadsheet-rowsplitterpreview, .ui-igspreadsheet-columnsplitterpreview {
    background-color: #868686;
}


/* SelectAll
   =========
*/
.ui-igspreadsheet-selectall {
    overflow: hidden;
    box-sizing: border-box;
    border-left: none;
    border-top: none;
    border-right: solid 4px transparent;
    border-bottom: solid 4px transparent;
}

.ui-igspreadsheet-selectall::before {
    position: absolute;
    content: " ";
    right: 0;
    bottom: 0;
    border-bottom: 12px solid currentColor;
    border-left: 12px solid transparent;
}


/* TabArea Related
   ===============
*/
.ui-igspreadsheet-tabareasplitter,
.ui-igspreadsheet-nameboxsplitter {
    background-color: transparent;
    border: none;
    width: 28px;
    min-height: 12px;
}

.ui-igspreadsheet-tabareasplitter::before,
.ui-igspreadsheet-nameboxsplitter::before {
    content: " ";
    position: absolute;
    width: 2px;
    height: 2px;
    top: 50%;
    left: 50%;
    margin-top: -7px;
    margin-left: -3px;
    box-shadow: 2px 2px 0 currentColor, 2px 6px 0 currentColor, 2px 10px 0 currentColor;
}

.ui-igspreadsheet-tabareaborder {
    /* this height needs to stay in sync with the active tab item and tabitemarea properties */
    height: 1px;
}

.ui-igspreadsheet-tabitemarea {
    background-color: transparent;
    cursor: default; /* todo is this needed? */
}



/* TabItem */
.ui-igspreadsheet-tabitem {
    display: inline-block;
    border-top: none;
    white-space: pre;
    box-sizing: border-box;
    overflow: hidden;
    margin-bottom: 2px;
    /* this height needs to stay in sync with the height of the tabareaborder */
    margin-top: 1px;
}

.ui-igspreadsheet-tabitem.ui-state-hover,
.ui-igspreadsheet-tabitem-selected {
    font-weight: bold;
}

.ui-igspreadsheet-tabitem-active,
.ui-igspreadsheet-tabitem-active.ui-state-hover {
    /* remove the px added by the inactive tab item */
    margin-top: 0;
}

.ui-igspreadsheet-tabitemcontent {
    padding: 2px 7px 3px 7px;
    margin: 2px 2px 1px 2px;
    text-align: center;
}

.ui-igspreadsheet-tabitem-active > .ui-igspreadsheet-tabitemcontent {
    /* 1 more than normal tabitemcontent margin-top to account for
		-1px top margin on tab (really whatever we used for the height
		of tabareaborder + the top margin we put on the inactive
		tabitemcontent
	*/
    margin-top: 3px;
}

/* we don't want the text editor within the tab to define its own style or spacing */
.ui-igspreadsheet-tabitem input {
    border: none;
    outline: none;
    margin: 0;
    padding: 0;
    font: inherit;
}

/* [PROTECTED START] protected add some space before the text and show a lock */
.ui-igspreadsheet-tabitem-protected > .ui-igspreadsheet-tabitemcontent {
    /* need space for the lock - add to the padding instead of using margin
		so the color of a tab is around this too */
    padding-left: 19px;
}

.ui-igspreadsheet-tabitem-protected > .ui-igspreadsheet-tabitemcontent > span::before {
    position: absolute;
    content: ' ';
    margin: auto;
    top: 50%;
    margin-top: -7px;
    bottom: 3px;
    left: 0%;
    margin-left: 8px;
    width: 7px;
    height: 10px;
    background: transparent;
    border: 2px solid currentColor;
    border-radius: 3px;
    box-sizing: border-box;
}

.ui-igspreadsheet-tabitem-protected > .ui-igspreadsheet-tabitemcontent > span::after {
    position: absolute;
    content: ' ';
    margin: auto;
    top: 50%;
    left: 0%;
    margin-left: 7px;
    width: 9px;
    height: 6px;
    margin-top: -2px;
    background-color: currentColor;
}
/* [PROTECTED END] */

/* [LIGHT|DARK TAB START] when a worksheet has a custom tab color the 'color' of the
	tab item is set to that custom color. in addition the tab item has either a dark or
	light class added that indicates whether its a dark or light color. this styling
	follows the windows excel approach where the tab color is used as a solid color
	when the tab is not selected so we need to know whether to use a light or dark
	foreground. when the tab is selected that color is used with a white overlay so
	we can use the same foreground used for normal selected/active tabs like ms does
*/
.ui-igspreadsheet-tabitem.ui-igspreadsheet-tabitem-dark > .ui-igspreadsheet-tabitemcontent,
.ui-igspreadsheet-tabitem.ui-igspreadsheet-tabitem-light > .ui-igspreadsheet-tabitemcontent {
    background: currentColor;
}

.ui-igspreadsheet-tabitem-selected.ui-igspreadsheet-tabitem-dark > .ui-igspreadsheet-tabitemcontent,
.ui-igspreadsheet-tabitem-selected.ui-igspreadsheet-tabitem-light > .ui-igspreadsheet-tabitemcontent {
    /* the white parts here are based on the fact that the background of a selected tab is white
		so this would need to be changed if one changes that
	*/
    background: linear-gradient(to bottom, white, rgba(255,255,255,.5)), currentColor;
}

/* [LIGHT|DARK TAB END] */



/* Tab Drop Indicator
   ==================
*/
.ui-igspreadsheet-tabDropIndicator::before {
    position: absolute;
    content: ' ';
    width: 0;
    height: 0;
    left: -6px;
    top: -6px;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-top: 6px solid #fff;
}

.ui-igspreadsheet-tabDropIndicator::after {
    position: absolute;
    content: ' ';
    width: 0;
    height: 0;
    top: -5px;
    left: -4px;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-top: 4px solid #000;
}



/* Tab Area Buttons
   ================
*/
.ui-igspreadsheet-activateprevioushiddentab,
.ui-igspreadsheet-activatenexthiddentab {
    background-color: transparent;
    border: none;
    width: 27px;
}

.ui-igspreadsheet-scrollfirsttab,
.ui-igspreadsheet-scrolllasttab,
.ui-igspreadsheet-scrollprevioustab,
.ui-igspreadsheet-scrollnexttab {
    background-color: transparent;
    border: none;
    width: 28px;
}

.ui-igspreadsheet-activateprevioushiddentab.ui-state-disabled,
.ui-igspreadsheet-activatenexthiddentab.ui-state-disabled {
    opacity: 0;
}

.ui-igspreadsheet-addnewworksheet.ui-state-disabled,
.ui-igspreadsheet-scrollfirsttab.ui-state-disabled,
.ui-igspreadsheet-scrolllasttab.ui-state-disabled,
.ui-igspreadsheet-scrollprevioustab.ui-state-disabled,
.ui-igspreadsheet-scrollnexttab.ui-state-disabled {
    opacity: 1;
}

.ui-igspreadsheet-scrollfirsttab::before,
.ui-igspreadsheet-scrolllasttab::before,
.ui-igspreadsheet-scrollprevioustab::before,
.ui-igspreadsheet-scrollnexttab::before {
    position: absolute;
    display: block;
    content: " ";
    width: 0;
    height: 0;
    left: 50%;
    top: 50%;
    margin-left: -4px;
    margin-top: -4px;
    border-top: 4px solid transparent;
    border-bottom: 4px solid transparent;
}

.ui-igspreadsheet-scrollfirsttab::before,
.ui-igspreadsheet-scrollprevioustab::before {
    border-right: 8px solid currentColor;
}

.ui-igspreadsheet-scrolllasttab::before,
.ui-igspreadsheet-scrollnexttab::before {
    border-left: 8px solid currentColor;
}

.ui-igspreadsheet-scrollfirsttab::before {
    box-shadow: -1px 0px currentColor;
}

.ui-igspreadsheet-scrolllasttab::before {
    box-shadow: 1px 0px currentColor;
}

.ui-igspreadsheet-activateprevioushiddentab::before,
.ui-igspreadsheet-activatenexthiddentab::before {
    content: " ";
    position: absolute;
    width: 2px;
    height: 2px;
    top: 50%;
    left: 50%;
    margin-top: -3px;
    margin-left: -7px;
    box-shadow: 2px 2px 0 currentColor, 6px 2px 0 currentColor, 10px 2px 0 currentColor;
}



/* Add New Worksheet */
.ui-igspreadsheet-addnewworksheet {
    background-color: transparent;
    border: none;
    width: 28px;
}

.ui-igspreadsheet-addnewworksheet::before,
.ui-igspreadsheet-addnewworksheet::after {
    content: " ";
    width: 16px;
    height: 16px;
    position: absolute;
    border-radius: 50%;
    border: 1px solid currentColor;
    background-color: currentColor;
    box-sizing: border-box;
    background-clip: content-box;
    top: 50%;
    left: 50%;
    margin-top: -8px;
    margin-left: -8px;
}

.ui-igspreadsheet-addnewworksheet::before {
    padding: 6px 3px 6px 3px;
}

.ui-igspreadsheet-addnewworksheet::after {
    padding: 3px 6px 3px 6px;
}



/* ScrollBar related
   =================
*/
.ui-igspreadsheet-scrollbar-vertical {
    min-width: 17px;
    margin-left: 2px;
    margin-right: 2px;
}

.ui-igspreadsheet-scrollbar-horizontal {
    min-height: 17px;
    max-height: 17px;
    margin-top: 2px;
    margin-bottom: 2px;
}

.ui-igspreadsheet-scrollbar-button-left,
.ui-igspreadsheet-scrollbar-button-right,
.ui-igspreadsheet-scrollbar-track-left,
.ui-igspreadsheet-scrollbar-track-right,
.ui-igspreadsheet-scrollbar-thumb-horizontal {
    top: 0;
    bottom: 0;
}

.ui-igspreadsheet-scrollbar-button-up,
.ui-igspreadsheet-scrollbar-button-down,
.ui-igspreadsheet-scrollbar-track-up,
.ui-igspreadsheet-scrollbar-track-down,
.ui-igspreadsheet-scrollbar-thumb-vertical {
    left: 0;
    right: 0;
}

.ui-igspreadsheet-scrollbar-button-left,
.ui-igspreadsheet-scrollbar-button-right,
.ui-igspreadsheet-scrollbar-button-up,
.ui-igspreadsheet-scrollbar-button-down {
    box-sizing: border-box;
}

.ui-igspreadsheet-scrollbar-button-left:before,
.ui-igspreadsheet-scrollbar-button-right:before,
.ui-igspreadsheet-scrollbar-button-up:before,
.ui-igspreadsheet-scrollbar-button-down:before {
    position: absolute;
    display: block;
    content: " ";
    width: 0;
    height: 0;
    left: 50%;
    top: 50%;
}

.ui-igspreadsheet-scrollbar-button-left:before,
.ui-igspreadsheet-scrollbar-button-right:before {
    margin-left: -3px;
    margin-top: -4px;
    border-top: 4px solid transparent;
    border-bottom: 4px solid transparent;
}

.ui-igspreadsheet-scrollbar-button-left:before {
    border-right: 6px solid currentColor;
}

.ui-igspreadsheet-scrollbar-button-right:before {
    border-left: 6px solid currentColor;
}

.ui-igspreadsheet-scrollbar-button-up:before,
.ui-igspreadsheet-scrollbar-button-down:before {
    margin-left: -4px;
    margin-top: -3px;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
}

.ui-igspreadsheet-scrollbar-button-up:before {
    border-bottom: 6px solid currentColor;
}

.ui-igspreadsheet-scrollbar-button-down:before {
    border-top: 6px solid currentColor;
}

.ui-igspreadsheet-scrollbar-track-left,
.ui-igspreadsheet-scrollbar-track-right,
.ui-igspreadsheet-scrollbar-track-up,
.ui-igspreadsheet-scrollbar-track-down {
    border: none;
}

.ui-igspreadsheet-scrollbar-thumb-vertical,
.ui-igspreadsheet-scrollbar-thumb-horizontal {
    box-sizing: border-box;
}

.ui-igspreadsheet-scrollbar-button-left,
.ui-igspreadsheet-scrollbar-button-right {
    width: 17px;
}

.ui-igspreadsheet-scrollbar-button-up,
.ui-igspreadsheet-scrollbar-button-down {
    height: 17px;
}

/* Formula Bar
   ===========
*/
.ui-igspreadsheet-nameboxcontainer .ui-igcombo,
.ui-igspreadsheet-nameboxcontainer .ui-igcombo-field,
.ui-igspreadsheet-nameboxcontainer .ui-igcombo-textbox,
.ui-igspreadsheet-nameboxcontainer .ui-igcombo-dropdown {
    font: inherit;
}

/* we don't want the combo's normal background or border */
.ui-igspreadsheet-nameboxcontainer .ui-igcombo {
    background-color: transparent;
    border: none;
}

.ui-igspreadsheet-nameboxcontainer .ui-igcombo-button {
    border: none;
}

.ui-igspreadsheet-nameboxcontainer .ui-igcombo-dropdown {
    /* since the border comes from the container we need to shift the drop down down by 1 pixel*/
    margin-top: 1px;
}

.ui-igspreadsheet-formulabar {
    padding-left: 5px;
    padding-right: 5px;
    padding-top: 10px;
    /* note we're not specifying bottom because the text area splitter will be there */
}

.ui-igspreadsheet-formulabartextareasplitter {
    height: 10px;
    cursor: row-resize;
    background: transparent;
    border: none;
}

.ui-igspreadsheet-formulabarexpandbutton {
    border: none;
    height: 20px;
    width: 20px;
}

.ui-igspreadsheet-formulabarexpandbutton::before {
    content: " ";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 6px;
    height: 6px;
    margin-left: -3px;
    margin-top: -4px;
    border: 2px solid currentColor;
    box-sizing: border-box;
    transform: rotate(45deg);
    border-width: 0 2px 2px 0;
}

.ui-igspreadsheet-formulabarexpandbutton-open {
    transform: rotate(180deg);
}

.ui-igspreadsheet-nameboxcontainer,
.ui-igspreadsheet-formulabartextareacontainer,
.ui-igspreadsheet-formulabarbuttoncontainer {
    box-sizing: border-box;
}

.ui-igspreadsheet-nameboxcontainer {
    cursor: pointer;
}

.ui-igspreadsheet-formulabarbuttoncontainer {
    margin-right: 3px;
}

.ui-igspreadsheet-formulabartextareacontainer textarea {
    resize: none;
    border: none;
    padding-left: 11px;
    padding-top: 2px;
    padding-bottom: 2px;
    padding-right: 0;
    outline: 0;
    margin: 0;
    font: inherit;
    box-sizing: border-box;
}

.ui-igspreadsheet-formulabarenterbutton,
.ui-igspreadsheet-formulabarcancelbutton {
    background-color: transparent;
    border: none;
    width: 20px;
}

.ui-igspreadsheet-formulabarenterbutton.ui-state-disabled,
.ui-igspreadsheet-formulabarcancelbutton.ui-state-disabled {
    opacity: 0.62;
}

.ui-igspreadsheet-formulabarenterbutton::before,
.ui-igspreadsheet-formulabarenterbutton::after,
.ui-igspreadsheet-formulabarcancelbutton::before,
.ui-igspreadsheet-formulabarcancelbutton::after {
    content: " ";
    position: absolute;
    width: 2px;
    height: 10px;
    left: 50%;
    top: 50%;
    margin-left: -1px;
    margin-top: -5px;
    background-color: currentColor;
}

.ui-igspreadsheet-formulabarenterbutton::before {
    transform: rotate(45deg);
}

.ui-igspreadsheet-formulabarenterbutton::after {
    transform: rotate(-45deg);
    height: 5px;
    margin-top: 0;
    margin-left: -5px;
}

.ui-igspreadsheet-formulabarcancelbutton::before {
    transform: rotate(45deg);
}

.ui-igspreadsheet-formulabarcancelbutton::after {
    transform: rotate(-45deg);
}


/* border color inside spreadsheet */
.ui-igspreadsheet-automaticgridline {
    background-color: rgb(212, 212, 212);
}

/* ui-igspreadsheet-filter-dialog */
.ui-igspreadsheet-filter-dialog,
.ui-igspreadsheet-topOrBottom-dialog {
    min-width: 470px;
}

.ui-igspreadsheet-filter-dialog .ui-igcombo-wrapper {
    flex: 1 0 0%;
    min-width: 200px;
}

.ui-igspreadsheet-filter-dialog input[type="radio" i],
.ui-igspreadsheet-filter-dialog {
    margin: 0 5px 0 0;
}

.ui-igspreadsheet-filter-dialog,
.ui-igspreadsheet-filter-dialog .ui-igdialog-content {
    display: flex;
    flex-direction: column;
}

.ui-igspreadsheet-filter-dialog .ui-igdialog-content > div {
    display: flex;
    flex-wrap: wrap;
}

.ui-igspreadsheet-filter-dialog .ui-igdialog-content > div > * {
    margin-bottom: 10px;
}

.ui-igspreadsheet-filter-dialog-hint-text {
    flex-direction: column;
}

.ui-igspreadsheet-filter-dialog-conditional-operator label {
    display: flex;
    align-items: center;
    margin-right: 10px;
}

.ui-igspreadsheet-filter-dialog-conditional-operator label:last-of-type {
    margin-right: 0;
}

.ui-igspreadsheet-filter-buttons {
    justify-content: flex-end;
}

.ui-igspreadsheet-filter-dialog .ui-igdialog-content .ui-igspreadsheet-filter-buttons > * {
    margin-bottom: 0;
    margin-left: 10px;
}

.ui-igspreadsheet-filter-dialog-condition1 select,
.ui-igspreadsheet-filter-dialog-condition2 select {
    flex: 1 0 0%;
    margin-right: 10px;
}

.ui-igspreadsheet-filter-dialog-show-rows-where,
.ui-igspreadsheet-filter-dialog-column-name {
    margin-bottom: 15px;
}

.ui-igspreadsheet-topOrBottom-dialog-input-area {
    display: flex;
    align-items: center;
    margin: 16px -8px 16px -8px;
}

.ui-igspreadsheet-topOrBottom-dialog-input-area > * {
    margin: 0 8px;
    flex: 1 0 0%;
}

.ui-igspreadsheet-topOrBottom-buttons {
    display: flex;
    justify-content: flex-end;
}

.ui-igspreadsheet-topOrBottom-buttons button {
    margin-left: 8px;
}

/* Custom sort dialog */

.ui-igspreadsheet-sort-dialog-my-data-has-headers-checkbox {
    float: right;
}

.ui-igspreadsheet-sort-dialog-top-buttons-area button {
    margin-right: 4px;
}

.ui-igspreadsheet-sort-dialog-top-buttons-area {
    margin-bottom: 10px;
}

#grdHeaders {
    display: -ms-grid;
    -ms-grid-rows: auto 3px;
    -ms-grid-columns: 1fr 2px 1fr 12px 1fr 12px;
    display: grid;
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr 2fr;
    grid-gap: 12px;
}

#grdSortConditions {
    display: -ms-grid;
    -ms-grid-rows: auto 3px;
    -ms-grid-columns: 1fr 2px 1fr 12px 1fr 12px;
    display: grid;
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr 2fr;
    grid-gap: 12px;
}

#pnlColumnContentsGrid {
    display: -ms-grid;
    -ms-grid-rows: auto 3px;
    -ms-grid-columns: auto 10px 1fr 10px;
    display: grid;
    grid-template-rows: auto;
    grid-template-columns: auto 1fr;
    grid-gap: 10px;
}

#cbCombo, #cboSortType, #cboSortDirection {
    height: 32px !important;
}

.ui-igspreadsheet-sort-dialog-ok-cancel-buttons-area button {
    margin-right: 10px;
}

/* [END] Structure: */




/* [START] Theme: */
/*
=========================
Spreadsheet colors
=========================
*/

.ui-igspreadsheet-inputmessage {
    background-color: #dadada;
    border-color: #777777;
    color: #444444;
}

/* ToolTip */
.ui-igspreadsheet-tooltip {
    background-color: #dadada;
    border-color: #cccccc;
    color: #777777;
}

/* Splitters */
.ui-igspreadsheet-rowsplitter,
.ui-igspreadsheet-columnsplitter,
.ui-igspreadsheet-splitterintersection {
    background-color: #e8e8e8;
}

/* SelectAll */
.ui-igspreadsheet-selectall {
    background-color: #f1f1f1;
    color: #c6c6c6;
}
.ui-igspreadsheet-selectall.ui-state-hover {
    color: #9e9e9e;
}

.ui-igspreadsheet-selectall.ui-state-active {
    color: #217346;
}

/* SpreadSheet Header & Footer background */
.ui-igspreadsheet-tabareabackground,
.ui-igspreadsheet-formulabar {
    background-color: #e6e6e6;
}

/* SpreadSheet Footer top border */
.ui-igspreadsheet-tabareaborder {
    background-color: #ababab;
}

/* Splitter icon */
.ui-igspreadsheet-tabareasplitter,
.ui-igspreadsheet-nameboxsplitter {
    color: #b3b3b3;
}

/* Unselected tab */
.ui-igspreadsheet-tabitem {
    border-right: 1px solid #ababab;
    border-left: 1px solid #ababab;
    background-color: transparent;
    border-bottom: 2px solid transparent; /* reserved space so we don't see jumping when the tab is selected */
    color: #444444;
}

/* Tab hover */
.ui-igspreadsheet-tabitem.ui-state-hover {
    color: #262626;
}

.ui-igspreadsheet-tabitem-selected {
    background: #ffffff;
    border-bottom-color: #217346;
}

.ui-igspreadsheet-tabitem-active,
.ui-igspreadsheet-tabitem-active.ui-state-hover {
    color: #217346;
}

/* [LIGHT|DARK TAB START]  */
.ui-igspreadsheet-tabitem-light > .ui-igspreadsheet-tabitemcontent > span {
    color: #000;
}

.ui-igspreadsheet-tabitem-dark > .ui-igspreadsheet-tabitemcontent > span {
    color: #FFF;
}

.ui-igspreadsheet-tabitem-selected.ui-igspreadsheet-tabitem-dark > .ui-igspreadsheet-tabitemcontent > span,
.ui-igspreadsheet-tabitem-selected.ui-igspreadsheet-tabitem-light > .ui-igspreadsheet-tabitemcontent > span {
    color: #262626;
}

.ui-igspreadsheet-tabitem-active.ui-igspreadsheet-tabitem-dark > .ui-igspreadsheet-tabitemcontent > span,
.ui-igspreadsheet-tabitem-active.ui-igspreadsheet-tabitem-light > .ui-igspreadsheet-tabitemcontent > span {
    color: #217346;
}

/* [LIGHT|DARK TAB END] */

/* Tab Area Buttons */
.ui-igspreadsheet-activateprevioushiddentab,
.ui-igspreadsheet-activatenexthiddentab,
.ui-igspreadsheet-scrollfirsttab,
.ui-igspreadsheet-scrolllasttab,
.ui-igspreadsheet-scrollprevioustab,
.ui-igspreadsheet-scrollnexttab {
    color: #0a6332;
}

.ui-igspreadsheet-addnewworksheet.ui-state-hover,
.ui-igspreadsheet-activateprevioushiddentab.ui-state-hover,
.ui-igspreadsheet-activatenexthiddentab.ui-state-hover,
.ui-igspreadsheet-scrollfirsttab.ui-state-hover,
.ui-igspreadsheet-scrolllasttab.ui-state-hover,
.ui-igspreadsheet-scrollprevioustab.ui-state-hover,
.ui-igspreadsheet-scrollnexttab.ui-state-hover {
    color: #439467;
}

.ui-igspreadsheet-addnewworksheet.ui-state-disabled,
.ui-igspreadsheet-scrollfirsttab.ui-state-disabled,
.ui-igspreadsheet-scrolllasttab.ui-state-disabled,
.ui-igspreadsheet-scrollprevioustab.ui-state-disabled,
.ui-igspreadsheet-scrollnexttab.ui-state-disabled {
    color: #c6c6c6;
}

/* Add New Worksheet */
.ui-igspreadsheet-addnewworksheet {
    color: #777777;
    cursor: pointer;
}

/* ScrollBar related */
.ui-igspreadsheet-scrollbar-button-left,
.ui-igspreadsheet-scrollbar-button-right,
.ui-igspreadsheet-scrollbar-button-up,
.ui-igspreadsheet-scrollbar-button-down {
    background-color: #FFF;
    border: 1px solid #ababab;
    color: #777777;
}

.ui-igspreadsheet-scrollbar-button-left.ui-state-hover,
.ui-igspreadsheet-scrollbar-button-right.ui-state-hover,
.ui-igspreadsheet-scrollbar-button-up.ui-state-hover,
.ui-igspreadsheet-scrollbar-button-down.ui-state-hover {
    background-color: #FFF;
    border-color: #777777;
    color: #777777;
}

.ui-igspreadsheet-scrollbar-button-left.ui-state-active,
.ui-igspreadsheet-scrollbar-button-right.ui-state-active,
.ui-igspreadsheet-scrollbar-button-up.ui-state-active,
.ui-igspreadsheet-scrollbar-button-down.ui-state-active {
    background-color: #f0f0f0;
    border-color: #878787;
    color: #757778;
}

.ui-igspreadsheet-scrollbar-track-left,
.ui-igspreadsheet-scrollbar-track-right,
.ui-igspreadsheet-scrollbar-track-up,
.ui-igspreadsheet-scrollbar-track-down {
    background-color: #dbdbdb;
}

.ui-igspreadsheet-scrollbar-thumb-vertical,
.ui-igspreadsheet-scrollbar-thumb-horizontal {
    background-color: #fff;
    border: 1px solid #ababab;
}

.ui-igspreadsheet-scrollbar-thumb-vertical.ui-state-hover,
.ui-igspreadsheet-scrollbar-thumb-horizontal.ui-state-hover {
    background-color: #f0f0f0;
    border-color: #ababab;
}

.ui-igspreadsheet-scrollbar-thumb-vertical.ui-state-active,
.ui-igspreadsheet-scrollbar-thumb-horizontal.ui-state-active {
    background-color: #f0f0f0;
    border-color: #777777;
}

/* Formula Bar
   =======
*/

.ui-igspreadsheet .ui-igspreadsheet-formulabarexpandbutton {
    background-color: #cccccc;
    cursor: pointer;
}
.ui-igspreadsheet .ui-igspreadsheet-formulabarexpandbutton:hover
{
    opacity: 0.8;
}
.ui-igspreadsheet .ui-igspreadsheet-formulabarexpandbutton:before {
    border-color: #444444;
}

/* Buttons background */
.ui-igspreadsheet-nameboxcontainer,
.ui-igspreadsheet-formulabartextareacontainer,
.ui-igspreadsheet-formulabarbuttoncontainer {
    border: 1px solid #bcbcbc;
    box-sizing: border-box;
    background-color: #e8e8e8;
}

/* Enabled buttons */
.ui-igspreadsheet-formulabarenterbutton,
.ui-igspreadsheet-formulabarcancelbutton {
    color: #444444;
}

/* Disabled Buttons */
.ui-igspreadsheet-formulabarenterbutton.ui-state-disabled,
.ui-igspreadsheet-formulabarcancelbutton.ui-state-disabled {
    color: #c4c4c4;
}

/* Enter Button */
.ui-igspreadsheet-formulabarenterbutton.ui-state-hover {
    color: #3883b7;
}

/* Cancel Button */
.ui-igspreadsheet-formulabarcancelbutton.ui-state-hover {
    color: #d13434;
}

.ui-igspreadsheet-invaliddata {
    border-color: #ff0000;
}

/*
    Formula Bar END
   ==================
*/

/* [END] Theme: */



/* [START] Support: */
/*
=========================
Menu
=========================
*/
.menuitem {
    width: 100%;
    box-sizing: border-box;
    border: 1px solid transparent;
    background-color: #fff;
    color: #5e5e5e;
    padding-left: 32px;
    padding-right: 22px;
    position: relative;
    display: table;
    min-height: 28px; /* 20px image w/ border, 6px padding, 2px border */
    white-space: nowrap;
}

.menuitemseparator {
    position: relative;
    display: block;
    margin: 0px 0px 1px 32px;
    box-sizing: content-box;
    background-color: #e0e3e6;
    height: 1px;
}

.menuitemcontent {
    display: table-cell;
    vertical-align: middle;
}

.menuitemimage,
.menuitemseparator .menuitemimage {
    position: absolute;
    width: 20px;
    height: 20px;
    box-sizing: border-box;
    border: 1px solid transparent;
    left: 3px;
    top: 0;
    bottom: 0;
    margin: auto;
    background-size: 16px 16px;
    background-repeat: no-repeat;
    background-position: 1px 1px;
}

/* checked image border/fill */
.menuitem.checked .menuitemimage {
    background-color: #c5c5c5;
    border-color: #969696;
    color: #505050;
    /* default checkmark image when checked */
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 15 15'%3E%3Cpath d='M4,7 L7,10.5 11,4' stroke='currentColor' fill='none' stroke-width='1.5'/%3E%3C/svg%3E");
}

.menuitemarrowarea {
    position: absolute;
    color: transparent;
    top: 0;
    bottom: 0;
    right: 0;
    width: 22px;
}

.menuitem.hassubitems .menuitemarrowarea {
    color: #727272;
}
.menuitem.hassubitems.selected .menuitemarrowarea {
    color: #505050;
}
.menuitem.hassubitems.disabled .menuitemarrowarea {
    color: #c6c6c6;
}

.menuitemarrowarea::before {
    border-top: 4px solid transparent;
    border-bottom: 4px solid transparent;
    border-left: 4px solid currentColor;
    content: " ";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
  
.menuitem.selected {
    background-color: #c5c5c5;
    color: #2b2b2b;
    border-color: #c5c5c5;
}

.menuitem.disabled {
    color: #b1b1b1;
}

.menuitem.disabled.selected {
    background-color: #fff;
    border-color: #d1d1d1;
}

.menu {
    background-color: #fff;
    border: 1px solid #c6c6c6;
    padding: 1px;
    overflow: auto;
}

.menu:focus,
.menuitem:focus {
    outline: 0;
}

/*
=========================
Combobox
=========================
*/
.comboboxdropdown {
    background-color: #fff;
    color: #3b3b3b;
    border: 1px solid #000;
    padding: 1px;
    overflow: auto;
    box-sizing: border-box;
}

.comboboxdropdown:focus {
    outline: 0;
}

.comboboxitem {
    padding: 2px 4px;
    white-space: nowrap;
}

.comboboxitem.selected {
    background-color: #c5c5c5;
}

.comboboxeditarea {
    border: 1px solid #c5c5c5;
    background-color: #fff;
    box-sizing: border-box;
    /* space for dropdown arrow */
    padding-right: 15px;
}

.comboboxeditarea.focused {
    border-color: #969696;
}

.comboboxeditarea input {
    /* setting here to ensure disabled background is white too */
    background-color: #fff;
    width: 100%;
    border: none;
    outline: none;
    margin: 0;
    padding: 0;
    font: inherit;
}

.comboboxdropdownbutton {
    background-color: transparent;
    color: #505050;
    position: absolute;
    width: 15px;
    top: 0px;
    bottom: 0px;
    right: 0px;
    margin: 1px 1px 1px 0;
    border-left: 1px solid transparent;
}

.comboboxdropdownbutton.hottrack {
    background-color: #c5c5c5;
    border-color: #969696;
}

.comboboxdropdownbutton.pressed {
    background-color: #969696;
    border-color: #969696;
}

.comboboxdropdownarrow {
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-top: 4px solid currentColor;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}


/* [END] Support: */
    `]
    }),
    tslib_1.__metadata("design:paramtypes", [Renderer2,
        ViewContainerRef,
        NgZone,
        ComponentFactoryResolver,
        Injector])
], IgxSpreadsheetComponent);
export { IgxSpreadsheetComponent };
//# sourceMappingURL=igx-spreadsheet-component.js.map
