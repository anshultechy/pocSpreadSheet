/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { EventEmitter, Output, Injector, ComponentFactoryResolver, Component, Renderer2, ViewChild, Input, NgZone, ChangeDetectionStrategy, ViewContainerRef } from '@angular/core';
import { AngularRenderer } from "../../igniteui-angular-core/ES5/angular-renderer";
import { toPoint, fromPoint, ensureBool, toSpinal, initializePropertiesFromCss, NamePatcher } from "../../igniteui-angular-core/ES5/componentUtil";
import { TypeRegistrar } from "../../igniteui-angular-core/ES5/type";
import { Spreadsheet } from './Spreadsheet';
import { SpreadsheetCss } from './SpreadsheetCss';
import { RendererContainer } from './RendererContainer';
import { IgxComponentRendererContainerComponent } from "../../igniteui-angular-core/ES5/igx-component-renderer-container-component";
import { SpreadsheetCell } from './SpreadsheetCell';
import { SpreadsheetCellEditMode } from './SpreadsheetCellEditMode';
import { SpreadsheetCellSelectionMode } from './SpreadsheetCellSelectionMode';
import { SpreadsheetChartAdapterBase } from './SpreadsheetChartAdapterBase';
import { SpreadsheetEnterKeyNavigationDirection } from './SpreadsheetEnterKeyNavigationDirection';
import { SpreadsheetPane } from './SpreadsheetPane';
import { SpreadsheetSelection } from './SpreadsheetSelection';
import { WorksheetTable } from "../../igniteui-angular-excel/ES5/WorksheetTable";
import { Worksheet } from "../../igniteui-angular-excel/ES5/Worksheet";
import { Workbook } from "../../igniteui-angular-excel/ES5/Workbook";
import { UndoManager } from './UndoManager';
import { delegateCombine } from "../../igniteui-angular-core/ES5/type";
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
export var IgxSpreadsheetComponent_PROVIDERS = [];
/**
 * Custom control that displays one or more worksheets.
*/
var IgxSpreadsheetComponent = /** @class */ (function () {
    // #region Constructor
    function IgxSpreadsheetComponent(_renderer, _elRef, _ngZone, _componentFactoryResolver, _injector) {
        //super();
        var _this = this;
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
        this._zoneRunner = function (act) { return _this._ngZone.run(act); };
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
        spreadsheet.createRendererContainer = function () { return _this._createContainer(); };
        this._spreadsheet = spreadsheet;
        spreadsheet.provideContainer(ren);
        spreadsheet.onInitialized();
        ren.addSizeWatcher(function () {
            _this._spreadsheet.containerResized();
        });
    }
    Object.defineProperty(IgxSpreadsheetComponent.prototype, "height", {
        get: function () {
            return this._height;
        },
        set: function (value) {
            this._height = value;
            this._renderer.setStyle(this._elRef.element.nativeElement, "height", value);
            this._spreadsheet.containerResized();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxSpreadsheetComponent.prototype, "width", {
        get: function () {
            return this._width;
        },
        set: function (value) {
            this._width = value;
            this._renderer.setStyle(this._elRef.element.nativeElement, "width", value);
            this._spreadsheet.containerResized();
        },
        enumerable: true,
        configurable: true
    });
    // #endregion Constructor
    IgxSpreadsheetComponent.prototype.ngOnDestroy = function () {
        this._spreadsheet.destroy();
        this._wrapper.destroy();
    };
    IgxSpreadsheetComponent.prototype.createImplementation = function () {
        return new Spreadsheet();
    };
    IgxSpreadsheetComponent.prototype._createContainer = function () {
        var factory = this._componentFactoryResolver.resolveComponentFactory(IgxComponentRendererContainerComponent);
        var componentRef = this._dynamicContent.createComponent(factory);
        var container = new RendererContainer(function () { return componentRef.destroy(); });
        container.initialize(componentRef.instance, componentRef.location.nativeElement);
        return container;
    };
    IgxSpreadsheetComponent.prototype.ngAfterContentInit = function () {
        this.i.containerResized();
        this.i.styleUpdated();
    };
    IgxSpreadsheetComponent.prototype._runInZone = function (act) {
        if (this._zoneRunner != null) {
            this._zoneRunner(act);
        }
        else {
            act();
        }
    };
    Object.defineProperty(IgxSpreadsheetComponent.prototype, "i", {
        /**
         * @hidden
         */
        get: function () {
            return this._implementation;
        } /**
                                     * @hidden
                                     */,
        enumerable: true,
        configurable: true
    });
    IgxSpreadsheetComponent._createFromInternal = function (internal) {
        if (!internal) {
            return null;
        }
        if (!internal.$type) {
            return null;
        }
        var name = internal.$type.name;
        var externalName = "Igx" + name + "Component";
        if (!TypeRegistrar.isRegistered(externalName)) {
            return null;
        }
        return TypeRegistrar.create(externalName);
    };
    Object.defineProperty(IgxSpreadsheetComponent.prototype, "panes", {
        /**
         * Returns an array of the panes for the activeWorksheet.
        */
        get: function () {
            return this.i._getPanesAsArray();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxSpreadsheetComponent.prototype, "isScrollLocked", {
        /**
         * Returns or sets a boolean indicating whether the scroll lock key is toggled.
         * This property is used when certain keys are pressed while the control has focus. For example
         * if an arrow key is pressed while the scroll lock is enabled the cell area will be scrolled rather than changing
         * the active cell. Note: This property is not maintained/changed by the control. It is just queried when
         * performing actions that consider whether the scroll lock is enabled.
        */
        get: function () {
            return this.i.isScrollLocked;
        },
        set: function (v) {
            this.i.isScrollLocked = ensureBool(v);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxSpreadsheetComponent.prototype, "activeCell", {
        /**
         * Returns or sets the active cell within the selected worksheet.
        */
        get: function () {
            return this.i.activeCell;
        },
        set: function (v) {
            this.i.activeCell = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxSpreadsheetComponent.prototype, "activePane", {
        /**
         * Returns an object that represents the pane with the focus.
        */
        get: function () {
            return this.i.activePane;
        },
        set: function (v) {
            this.i.activePane = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxSpreadsheetComponent.prototype, "activeSelection", {
        /**
         * Returns an object that represents the current selection of the activePane.
        */
        get: function () {
            return this.i.activeSelection;
        },
        set: function (v) {
            this.i.activeSelection = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxSpreadsheetComponent.prototype, "activeSelectionCellRangeFormat", {
        /**
         * Returns an object used to get the formatting of the activeCell and where modifications are applied to the entire activeSelection.
         * Any changes made to this object will affect all the objects in the selection. So for example, the
         * Font.Name may return "Arial" because the active cell has that as its resolved font name even though the other
         * cells are using a different font but if you set the Font.Name of this object to "Arial" then all the objects
         * affected by the selection will have their Font.Name updated to that value.
        */
        get: function () {
            return this.i.activeSelectionCellRangeFormat;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxSpreadsheetComponent.prototype, "activeTable", {
        /**
         * Returns the ig.excel.WorksheetTable associated with the activeCell of the activeWorksheet.
        */
        get: function () {
            return this.i.activeTable;
        },
        set: function (v) {
            this.i.activeTable = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxSpreadsheetComponent.prototype, "activeWorksheet", {
        /**
         * Returns or sets the Worksheet from the workbook whose content should be displayed within the control.
        */
        get: function () {
            return this.i.activeWorksheet;
        },
        set: function (v) {
            this.i.activeWorksheet = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxSpreadsheetComponent.prototype, "allowAddWorksheet", {
        /**
         * Returns or sets a boolean indicating whether the spreadsheet allows adding worksheets.
        */
        get: function () {
            return this.i.allowAddWorksheet;
        },
        set: function (v) {
            this.i.allowAddWorksheet = ensureBool(v);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxSpreadsheetComponent.prototype, "allowDeleteWorksheet", {
        /**
         * Returns or sets a boolean indicating whether the spreadsheet allows deleting worksheets.
        */
        get: function () {
            return this.i.allowDeleteWorksheet;
        },
        set: function (v) {
            this.i.allowDeleteWorksheet = ensureBool(v);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxSpreadsheetComponent.prototype, "areGridlinesVisible", {
        /**
         * Returns or sets a boolean indicating if the grid lines are displayed in the selected worksheets.
        */
        get: function () {
            return this.i.areGridlinesVisible;
        },
        set: function (v) {
            this.i.areGridlinesVisible = ensureBool(v);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxSpreadsheetComponent.prototype, "areHeadersVisible", {
        /**
         * Returns or sets a boolean indicating if the row and column headers are displayed for the selected worksheets.
        */
        get: function () {
            return this.i.areHeadersVisible;
        },
        set: function (v) {
            this.i.areHeadersVisible = ensureBool(v);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxSpreadsheetComponent.prototype, "cellEditMode", {
        /**
         * Returns an enumeration used to indicate the current edit mode state.
        */
        get: function () {
            return this.i.cellEditMode;
        },
        set: function (v) {
            this.i.cellEditMode = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxSpreadsheetComponent.prototype, "chartAdapter", {
        /**
         * Returns or sets the object that will provide the chart visualization for display within the Spreadsheet
         * By default charts are not displayed within the spreadsheet. To display charts one should set this
         * property to an instance of a SpreadsheetChartAdapter which is in a separate reference since it relies upon
         * the chart and other data visualization controls.
        */
        get: function () {
            return this.i.chartAdapter;
        },
        set: function (v) {
            this.i.chartAdapter = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxSpreadsheetComponent.prototype, "enterKeyNavigationDirection", {
        /**
         * Returns or sets an enumeration indicating the direction of the cell adjacent to the activeCell that should be activated when the enter key is pressed.
         * This property is only used if the isEnterKeyNavigationEnabled is set to true. Also, the reverse direction is
         * navigated when Shift + Enter are pressed.
        */
        get: function () {
            return this.i.enterKeyNavigationDirection;
        },
        set: function (v) {
            this.i.enterKeyNavigationDirection = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxSpreadsheetComponent.prototype, "fixedDecimalPlaceCount", {
        /**
         * Returns or sets the number of decimal places by which a whole number typed in during edit mode should be adjusted when isFixedDecimalEnabled is true
        */
        get: function () {
            return this.i.fixedDecimalPlaceCount;
        },
        set: function (v) {
            this.i.fixedDecimalPlaceCount = +v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxSpreadsheetComponent.prototype, "isEnterKeyNavigationEnabled", {
        /**
         * Returns or sets a boolean indicating whether the adjacent cell indicated by the enterKeyNavigationDirection should be navigated to when the enter key is pressed.
        */
        get: function () {
            return this.i.isEnterKeyNavigationEnabled;
        },
        set: function (v) {
            this.i.isEnterKeyNavigationEnabled = ensureBool(v);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxSpreadsheetComponent.prototype, "isFixedDecimalEnabled", {
        /**
         * Returns or sets a boolean indicating whether a fixed decimal place is automatically added when a whole number is entered while in edit mode.
        */
        get: function () {
            return this.i.isFixedDecimalEnabled;
        },
        set: function (v) {
            this.i.isFixedDecimalEnabled = ensureBool(v);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxSpreadsheetComponent.prototype, "isFormulaBarVisible", {
        /**
         * Returns or sets a boolean indicating if the formula bar is displayed within the Spreadsheet.
        */
        get: function () {
            return this.i.isFormulaBarVisible;
        },
        set: function (v) {
            this.i.isFormulaBarVisible = ensureBool(v);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxSpreadsheetComponent.prototype, "isInEditMode", {
        /**
         * Returns a boolean indicating if the control is currently editing the value of the activeCell
        */
        get: function () {
            return this.i.isInEditMode;
        },
        set: function (v) {
            this.i.isInEditMode = ensureBool(v);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxSpreadsheetComponent.prototype, "isInEndMode", {
        /**
         * Returns or sets a boolean indicating whether the control is in "End mode".
         * End mode is a mode that affects certain keyboard navigation such as navigating with the arrow keys. For example when in
         * end mode and one presses the right arrow, the activeCell will be changed to be the first cell to the right of the current ActiveCell
         * that has a value (even if the value is ""). If there were no cells to the right with a value then it would activate the right most cell in that row. End
         * mode will end automatically such as when one presses an arrow key.
        */
        get: function () {
            return this.i.isInEndMode;
        },
        set: function (v) {
            this.i.isInEndMode = ensureBool(v);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxSpreadsheetComponent.prototype, "isRenamingWorksheet", {
        /**
         * Returns a boolean indicating if the user is currently editing the name of the active worksheet.
        */
        get: function () {
            return this.i.isRenamingWorksheet;
        },
        set: function (v) {
            this.i.isRenamingWorksheet = ensureBool(v);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxSpreadsheetComponent.prototype, "isUndoEnabled", {
        /**
         * Returns or sets a boolean indicating whether undo is enabled for the control.
        */
        get: function () {
            return this.i.isUndoEnabled;
        },
        set: function (v) {
            this.i.isUndoEnabled = ensureBool(v);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxSpreadsheetComponent.prototype, "nameBoxWidth", {
        /**
         * Returns or sets the width of the name box within the formula bar.
        */
        get: function () {
            return this.i.nameBoxWidth;
        },
        set: function (v) {
            this.i.nameBoxWidth = +v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxSpreadsheetComponent.prototype, "selectionMode", {
        /**
         * Returns or sets a value indicating how the selection is updated when interacting with the cells via the mouse or keyboard.
        */
        get: function () {
            return this.i.selectionMode;
        },
        set: function (v) {
            this.i.selectionMode = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxSpreadsheetComponent.prototype, "selectedWorksheets", {
        /**
         * Returns or sets an array of the Worksheets whose tabs are selected.
        */
        get: function () {
            return this.i.selectedWorksheets;
        },
        set: function (v) {
            this.i.selectedWorksheets = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxSpreadsheetComponent.prototype, "undoManager", {
        /**
         * Returns or sets the UndoManager.
         * Note: this property can not be set to null.
        */
        get: function () {
            return this.i.undoManager;
        },
        set: function (v) {
            this.i.undoManager = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxSpreadsheetComponent.prototype, "validationInputMessagePosition", {
        /**
         * Returns or sets the position of the screen tip used to display the input message for the data validation rule associated with the active cell.
        */
        get: function () {
            return fromPoint(this.i.validationInputMessagePosition);
        },
        set: function (v) {
            this.i.validationInputMessagePosition = toPoint(v);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxSpreadsheetComponent.prototype, "workbook", {
        /**
         * Returns or sets the workbook whose information is displayed in the control.
        */
        get: function () {
            return this.i.workbook;
        },
        set: function (v) {
            this.i.workbook = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxSpreadsheetComponent.prototype, "zoomLevel", {
        /**
         * Returns or sets the magnification of the selected worksheets.
        */
        get: function () {
            return this.i.zoomLevel;
        },
        set: function (v) {
            this.i.zoomLevel = +v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxSpreadsheetComponent.prototype, "hasUserValues", {
        get: function () {
            return this._hasUserValues;
        },
        enumerable: true,
        configurable: true
    });
    IgxSpreadsheetComponent.prototype.__m = function (propertyName) {
        if (!this._inStyling) {
            this._hasUserValues.add(propertyName);
        }
    };
    IgxSpreadsheetComponent.prototype._styling = function (container, component, parent) {
        if (this._inStyling) {
            return;
        }
        this._inStyling = true;
        this._stylingContainer = container;
        this._stylingParent = component;
        var genericPrefix = "";
        var typeName = this.i.$type.name;
        if (typeName.indexOf("Xam") === 0) {
            typeName = typeName.substring(3);
        }
        genericPrefix = toSpinal("SpreadsheetComponent");
        var additionalPrefixes = [];
        var prefix = toSpinal(typeName);
        additionalPrefixes.push(prefix + "-");
        var b = this.i.$type.baseType;
        while (b && b.name != "Object" &&
            b.name != "Base" &&
            b.name != "Control" &&
            b.Name != "DependencyObject" &&
            b.Name != "FrameworkElement") {
            typeName = b.name;
            if (typeName.indexOf("Xam") === 0) {
                typeName = typeName.substring(3);
            }
            var basePrefix = toSpinal(typeName);
            additionalPrefixes.push(basePrefix + "-");
            b = b.baseType;
        }
        if (parent) {
            var parentTypeName = parent.i.$type.name;
            if (parentTypeName.indexOf("Xam") === 0) {
                parentTypeName = parentTypeName.substring(3);
            }
            var parentPrefix = toSpinal(parentTypeName);
            additionalPrefixes.push(parentPrefix + "-" + genericPrefix + "-");
            additionalPrefixes.push(parentPrefix + "-" + prefix + "-");
        }
        initializePropertiesFromCss(container, this, genericPrefix + "-", this.hasUserValues, false, additionalPrefixes);
        if (this._otherStyling) {
            this._otherStyling(container, component, parent);
        }
        this._inStyling = false;
    };
    IgxSpreadsheetComponent.prototype.containerResized = function () {
        this.i.containerResized();
    };
    IgxSpreadsheetComponent.prototype.destroy = function () {
        this.i.destroy();
    };
    IgxSpreadsheetComponent.prototype.executeAction = function (action) {
        var iv = this.i.executeCommand(action);
        return (iv);
    };
    IgxSpreadsheetComponent.prototype.flush = function () {
        this.i.flush();
    };
    IgxSpreadsheetComponent.prototype.onInitialized = function () {
        this.i.onInitialized();
    };
    IgxSpreadsheetComponent.prototype.provideContainer = function (container) {
        this.i.provideContainer(container);
    };
    IgxSpreadsheetComponent.prototype.scheduleArrange = function () {
        this.i.scheduleArrange();
    };
    IgxSpreadsheetComponent.prototype.styleUpdated = function () {
        this.i.styleUpdated();
    };
    /**
     * Returns an object with information about the visual state of the spreadsheet.
    
    */
    IgxSpreadsheetComponent.prototype.exportVisualData = function () {
        var iv = this.i.exportVisualData();
        return (iv);
    };
    Object.defineProperty(IgxSpreadsheetComponent.prototype, "ActionExecuted", {
        /**
         * Invoked when an action is executed on the Spreadsheet.
         * eventArgument="evt" argType="event" jQuery event object.
         * eventArgument="ui.owner" argType="object" Gets a reference to the spreadsheet widget.
         * eventArgument="ui.action" argType="string" Gets the [action](ig.spreadsheet.SpreadsheetAction) that was executed.
        */
        get: function () {
            var _this = this;
            if (this._ActionExecuted == null) {
                this._ActionExecuted = new EventEmitter();
                this.i.actionExecuted = delegateCombine(this.i.actionExecuted, function (o, e) {
                    _this._runInZone(function () {
                        var outerArgs = new SpreadsheetActionExecutedEventArgs();
                        outerArgs._provideImplementation(e);
                        if (_this.beforeActionExecuted) {
                            _this.beforeActionExecuted(_this, outerArgs);
                        }
                        _this._ActionExecuted.emit({
                            sender: _this,
                            args: outerArgs
                        });
                    });
                });
            }
            return this._ActionExecuted;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxSpreadsheetComponent.prototype, "ActionExecuting", {
        /**
         * Invoked when an action is about to be executed by the Spreadsheet.
         * eventArgument="evt" argType="event" jQuery event object.
         * eventArgument="ui.owner" argType="object" Gets a reference to the spreadsheet widget.
         * eventArgument="ui.action" argType="string" Gets the [action](ig.spreadsheet.SpreadsheetAction) that is about to be executed.
        */
        get: function () {
            var _this = this;
            if (this._ActionExecuting == null) {
                this._ActionExecuting = new EventEmitter();
                this.i.actionExecuting = delegateCombine(this.i.actionExecuting, function (o, e) {
                    _this._runInZone(function () {
                        var outerArgs = new SpreadsheetActionExecutingEventArgs();
                        outerArgs._provideImplementation(e);
                        if (_this.beforeActionExecuting) {
                            _this.beforeActionExecuting(_this, outerArgs);
                        }
                        _this._ActionExecuting.emit({
                            sender: _this,
                            args: outerArgs
                        });
                    });
                });
            }
            return this._ActionExecuting;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxSpreadsheetComponent.prototype, "activeCellChanged", {
        /**
         * Invoked when the activeCell of the Spreadsheet has changed.
         * eventArgument="evt" argType="event" jQuery event object.
         * eventArgument="ui.owner" argType="object" Gets a reference to the spreadsheet widget.
         * eventArgument="ui.oldValue" argType="string" Gets the previous active cell.
         * eventArgument="ui.newValue" argType="string" Gets the current active cell.
        */
        get: function () {
            var _this = this;
            if (this._activeCellChanged == null) {
                this._activeCellChanged = new EventEmitter();
                this.i.activeCellChanged = delegateCombine(this.i.activeCellChanged, function (o, e) {
                    _this._runInZone(function () {
                        var outerArgs = new SpreadsheetActiveCellChangedEventArgs();
                        outerArgs._provideImplementation(e);
                        if (_this.beforeActiveCellChanged) {
                            _this.beforeActiveCellChanged(_this, outerArgs);
                        }
                        _this._activeCellChanged.emit({
                            sender: _this,
                            args: outerArgs
                        });
                    });
                });
            }
            return this._activeCellChanged;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxSpreadsheetComponent.prototype, "activePaneChanged", {
        /**
         * Invoked when the activePane of the Spreadsheet has changed.
         * eventArgument="evt" argType="event" jQuery event object.
         * eventArgument="ui.owner" argType="object" Gets a reference to the spreadsheet widget.
         * eventArgument="ui.oldActivePane" argType="object" Gets the previous active [pane](ig.spreadsheet.SpreadsheetPane).
         * eventArgument="ui.newActivePane" argType="object" Gets the current active [pane](ig.spreadsheet.SpreadsheetPane).
         * eventArgument="ui.activeCell" argType="string" Gets the active cell of the new active pane or null if there is no active pane.
         * eventArgument="ui.visibleRange" argType="string" Gets the current visible range of the new active pane or null if there is no active pane.
        */
        get: function () {
            var _this = this;
            if (this._activePaneChanged == null) {
                this._activePaneChanged = new EventEmitter();
                this.i.activePaneChanged = delegateCombine(this.i.activePaneChanged, function (o, e) {
                    _this._runInZone(function () {
                        var outerArgs = new SpreadsheetActivePaneChangedEventArgs();
                        outerArgs._provideImplementation(e);
                        if (_this.beforeActivePaneChanged) {
                            _this.beforeActivePaneChanged(_this, outerArgs);
                        }
                        _this._activePaneChanged.emit({
                            sender: _this,
                            args: outerArgs
                        });
                    });
                });
            }
            return this._activePaneChanged;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxSpreadsheetComponent.prototype, "activeTableChanged", {
        /**
         * Invoked when the activeTable of the Spreadsheet has changed.
         * eventArgument="evt" argType="event" jQuery event object.
         * eventArgument="ui.owner" argType="object" Gets a reference to the spreadsheet widget.
         * eventArgument="ui.oldActiveTable" argType="object" Gets the previous active [Table](ig.excel.WorksheetTable).
         * eventArgument="ui.newActiveTable" argType="object" Gets the current active [Table](ig.excel.WorksheetTable).
        */
        get: function () {
            var _this = this;
            if (this._activeTableChanged == null) {
                this._activeTableChanged = new EventEmitter();
                this.i.activeTableChanged = delegateCombine(this.i.activeTableChanged, function (o, e) {
                    _this._runInZone(function () {
                        var outerArgs = new SpreadsheetActiveTableChangedEventArgs();
                        outerArgs._provideImplementation(e);
                        if (_this.beforeActiveTableChanged) {
                            _this.beforeActiveTableChanged(_this, outerArgs);
                        }
                        _this._activeTableChanged.emit({
                            sender: _this,
                            args: outerArgs
                        });
                    });
                });
            }
            return this._activeTableChanged;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxSpreadsheetComponent.prototype, "activeWorksheetChanged", {
        /**
         * Invoked when the activeWorksheet of the Spreadsheet has changed.
         * eventArgument="evt" argType="event" jQuery event object.
         * eventArgument="ui.owner" argType="object" Gets a reference to the spreadsheet widget.
         * eventArgument="ui.oldActiveWorksheet" argType="object" Gets the previous active [worksheet](ig.excel.Worksheet).
         * eventArgument="ui.oldActiveWorksheetName" argType="string" Gets the name of the previous active worksheet or null if oldActiveWorksheet is null.
         * eventArgument="ui.newActiveWorksheet" argType="object" Gets the current active [worksheet](ig.excel.Worksheet).
         * eventArgument="ui.newActiveWorksheetName" argType="string" Gets the name of the new active worksheet or null if newActiveWorksheet is null.
        */
        get: function () {
            var _this = this;
            if (this._activeWorksheetChanged == null) {
                this._activeWorksheetChanged = new EventEmitter();
                this.i.activeWorksheetChanged = delegateCombine(this.i.activeWorksheetChanged, function (o, e) {
                    _this._runInZone(function () {
                        var outerArgs = new SpreadsheetActiveWorksheetChangedEventArgs();
                        outerArgs._provideImplementation(e);
                        if (_this.beforeActiveWorksheetChanged) {
                            _this.beforeActiveWorksheetChanged(_this, outerArgs);
                        }
                        _this._activeWorksheetChanged.emit({
                            sender: _this,
                            args: outerArgs
                        });
                    });
                });
            }
            return this._activeWorksheetChanged;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxSpreadsheetComponent.prototype, "editModeExiting", {
        /**
         * Invoked when the Spreadsheet is about to end the in-place editing of the activeCell.
         * eventArgument="evt" argType="event" jQuery event object.
         * eventArgument="ui.owner" argType="object" Gets a reference to the spreadsheet widget.
         * eventArgument="ui.acceptChanges" argType="bool" Get or set a boolean indicating whether the changes will be made to the cell's value when edit mode ends.
         * eventArgument="ui.canCancel" argType="bool" Get a boolean indicating if the edit mode is being forced to exit edit mode in which case it cannot be cancelled.
         * eventArgument="ui.cell" argType="string" Gets the cell for which the control is exiting edit mode.
         * eventArgument="ui.editText" argType="string" Gets the edit text that will be used to update the cell(s).
        */
        get: function () {
            var _this = this;
            if (this._editModeExiting == null) {
                this._editModeExiting = new EventEmitter();
                this.i.editModeExiting = delegateCombine(this.i.editModeExiting, function (o, e) {
                    _this._runInZone(function () {
                        var outerArgs = new SpreadsheetEditModeExitingEventArgs();
                        outerArgs._provideImplementation(e);
                        if (_this.beforeEditModeExiting) {
                            _this.beforeEditModeExiting(_this, outerArgs);
                        }
                        _this._editModeExiting.emit({
                            sender: _this,
                            args: outerArgs
                        });
                    });
                });
            }
            return this._editModeExiting;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxSpreadsheetComponent.prototype, "editModeExited", {
        /**
         * Invoked when the Spreadsheet has ended the in-place editing of the activeCell.
         * eventArgument="evt" argType="event" jQuery event object.
         * eventArgument="ui.owner" argType="object" Gets a reference to the spreadsheet widget.
         * eventArgument="ui.cell" argType="string" Gets the cell for which the control has exited edit mode.
        */
        get: function () {
            var _this = this;
            if (this._editModeExited == null) {
                this._editModeExited = new EventEmitter();
                this.i.editModeExited = delegateCombine(this.i.editModeExited, function (o, e) {
                    _this._runInZone(function () {
                        var outerArgs = new SpreadsheetEditModeExitedEventArgs();
                        outerArgs._provideImplementation(e);
                        if (_this.beforeEditModeExited) {
                            _this.beforeEditModeExited(_this, outerArgs);
                        }
                        _this._editModeExited.emit({
                            sender: _this,
                            args: outerArgs
                        });
                    });
                });
            }
            return this._editModeExited;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxSpreadsheetComponent.prototype, "editModeEntering", {
        /**
         * Invoked when the Spreadsheet is about to start in-place editing of the activeCell.
         * eventArgument="evt" argType="event" jQuery event object.
         * eventArgument="ui.owner" argType="object" Gets a reference to the spreadsheet widget.
         * eventArgument="ui.cell" argType="string" Gets the cell for which the control is going into edit mode.
        */
        get: function () {
            var _this = this;
            if (this._editModeEntering == null) {
                this._editModeEntering = new EventEmitter();
                this.i.editModeEntering = delegateCombine(this.i.editModeEntering, function (o, e) {
                    _this._runInZone(function () {
                        var outerArgs = new SpreadsheetEditModeEnteringEventArgs();
                        outerArgs._provideImplementation(e);
                        if (_this.beforeEditModeEntering) {
                            _this.beforeEditModeEntering(_this, outerArgs);
                        }
                        _this._editModeEntering.emit({
                            sender: _this,
                            args: outerArgs
                        });
                    });
                });
            }
            return this._editModeEntering;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxSpreadsheetComponent.prototype, "editModeEntered", {
        /**
         * Invoked when the Spreadsheet has started in-place editing of the activeCell.
         * eventArgument="evt" argType="event" jQuery event object.
         * eventArgument="ui.owner" argType="object" Gets a reference to the spreadsheet widget.
         * eventArgument="ui.cell" argType="string" Gets the cell for which the control has entered edit mode.
        */
        get: function () {
            var _this = this;
            if (this._editModeEntered == null) {
                this._editModeEntered = new EventEmitter();
                this.i.editModeEntered = delegateCombine(this.i.editModeEntered, function (o, e) {
                    _this._runInZone(function () {
                        var outerArgs = new SpreadsheetEditModeEnteredEventArgs();
                        outerArgs._provideImplementation(e);
                        if (_this.beforeEditModeEntered) {
                            _this.beforeEditModeEntered(_this, outerArgs);
                        }
                        _this._editModeEntered.emit({
                            sender: _this,
                            args: outerArgs
                        });
                    });
                });
            }
            return this._editModeEntered;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxSpreadsheetComponent.prototype, "editModeValidationError", {
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
        get: function () {
            var _this = this;
            if (this._editModeValidationError == null) {
                this._editModeValidationError = new EventEmitter();
                this.i.editModeValidationError = delegateCombine(this.i.editModeValidationError, function (o, e) {
                    _this._runInZone(function () {
                        var outerArgs = new SpreadsheetEditModeValidationErrorEventArgs();
                        outerArgs._provideImplementation(e);
                        if (_this.beforeEditModeValidationError) {
                            _this.beforeEditModeValidationError(_this, outerArgs);
                        }
                        _this._editModeValidationError.emit({
                            sender: _this,
                            args: outerArgs
                        });
                    });
                });
            }
            return this._editModeValidationError;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxSpreadsheetComponent.prototype, "editRangePasswordNeeded", {
        /**
         * Invoked when the Spreadsheet is performing an operation on a protected Worksheet and there is a single range that may be unlocked to allow the operation to be performed.
         * eventArgument="evt" argType="event" jQuery event object.
         * eventArgument="ui.owner" argType="object" Gets a reference to the spreadsheet widget.
         * eventArgument="ui.ranges" argType="array" Get an array of [protected range](ig.excel.WorksheetProtectedRange) objects that should be unlocked.
         * eventArgument="ui.unprotect" argType="object" Get a parameterless function that may be invoked to unlock the associated ranges.
        */
        get: function () {
            var _this = this;
            if (this._editRangePasswordNeeded == null) {
                this._editRangePasswordNeeded = new EventEmitter();
                this.i.editRangePasswordNeeded = delegateCombine(this.i.editRangePasswordNeeded, function (o, e) {
                    _this._runInZone(function () {
                        var outerArgs = new SpreadsheetEditRangePasswordNeededEventArgs();
                        outerArgs._provideImplementation(e);
                        if (_this.beforeEditRangePasswordNeeded) {
                            _this.beforeEditRangePasswordNeeded(_this, outerArgs);
                        }
                        _this._editRangePasswordNeeded.emit({
                            sender: _this,
                            args: outerArgs
                        });
                    });
                });
            }
            return this._editRangePasswordNeeded;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxSpreadsheetComponent.prototype, "hyperlinkExecuting", {
        /**
         * Invoked when a hyperlink is being followed in the Spreadsheet.
         * eventArgument="evt" argType="event" jQuery event object.
         * eventArgument="ui.owner" argType="object" Gets a reference to the spreadsheet widget.
         * eventArgument="ui.hyperlink" argType="object" Get the [hyperlink](ig.excel.WorksheetHyperlink) to be executed.
        */
        get: function () {
            var _this = this;
            if (this._hyperlinkExecuting == null) {
                this._hyperlinkExecuting = new EventEmitter();
                this.i.hyperlinkExecuting = delegateCombine(this.i.hyperlinkExecuting, function (o, e) {
                    _this._runInZone(function () {
                        var outerArgs = new SpreadsheetHyperlinkExecutingEventArgs();
                        outerArgs._provideImplementation(e);
                        if (_this.beforeHyperlinkExecuting) {
                            _this.beforeHyperlinkExecuting(_this, outerArgs);
                        }
                        _this._hyperlinkExecuting.emit({
                            sender: _this,
                            args: outerArgs
                        });
                    });
                });
            }
            return this._hyperlinkExecuting;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxSpreadsheetComponent.prototype, "selectionChanged", {
        /**
         * Invoked when the selection for a ig.spreadsheet.SpreadsheetPane of the Spreadsheet is changed.
         * eventArgument="evt" argType="event" jQuery event object.
         * eventArgument="ui.owner" argType="object" Gets a reference to the spreadsheet widget.
         * eventArgument="ui.pane" argType="object" Get the [pane](ig.spreadsheet.SpreadsheetPane) for which the selection has changed.
        */
        get: function () {
            var _this = this;
            if (this._selectionChanged == null) {
                this._selectionChanged = new EventEmitter();
                this.i.selectionChanged = delegateCombine(this.i.selectionChanged, function (o, e) {
                    _this._runInZone(function () {
                        var outerArgs = new SpreadsheetSelectionChangedEventArgs();
                        outerArgs._provideImplementation(e);
                        if (_this.beforeSelectionChanged) {
                            _this.beforeSelectionChanged(_this, outerArgs);
                        }
                        _this._selectionChanged.emit({
                            sender: _this,
                            args: outerArgs
                        });
                    });
                });
            }
            return this._selectionChanged;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxSpreadsheetComponent.prototype, "userPromptDisplaying", {
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
        get: function () {
            var _this = this;
            if (this._userPromptDisplaying == null) {
                this._userPromptDisplaying = new EventEmitter();
                this.i.userPromptDisplaying = delegateCombine(this.i.userPromptDisplaying, function (o, e) {
                    _this._runInZone(function () {
                        var outerArgs = new SpreadsheetUserPromptDisplayingEventArgs();
                        outerArgs._provideImplementation(e);
                        if (_this.beforeUserPromptDisplaying) {
                            _this.beforeUserPromptDisplaying(_this, outerArgs);
                        }
                        _this._userPromptDisplaying.emit({
                            sender: _this,
                            args: outerArgs
                        });
                    });
                });
            }
            return this._userPromptDisplaying;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxSpreadsheetComponent.prototype, "workbookDirtied", {
        /**
         * Invoked when a change has been made to the workbook that might require a save.
         * eventArgument="evt" argType="event" jQuery event object.
         * eventArgument="ui.owner" argType="object" Gets a reference to the spreadsheet widget.
         * Note: This event is invoked asynchronously with regards to the change(s) that
         * have occurred. Also some changes alone are not considered to dirty the Workbook even though it
         * does change state on the Workbook or one of its subobjects. An example of that would be a zoom
         * type operation (e.g. changing the magnificationInNormalView).
        */
        get: function () {
            var _this = this;
            if (this._workbookDirtied == null) {
                this._workbookDirtied = new EventEmitter();
                this.i.workbookDirtied = delegateCombine(this.i.workbookDirtied, function (o, e) {
                    _this._runInZone(function () {
                        var outerArgs = new SpreadsheetWorkbookDirtiedEventArgs();
                        outerArgs._provideImplementation(e);
                        if (_this.beforeWorkbookDirtied) {
                            _this.beforeWorkbookDirtied(_this, outerArgs);
                        }
                        _this._workbookDirtied.emit({
                            sender: _this,
                            args: outerArgs
                        });
                    });
                });
            }
            return this._workbookDirtied;
        },
        enumerable: true,
        configurable: true
    });
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
            template: "<ng-container #dynamicContent></ng-container>",
            changeDetection: ChangeDetectionStrategy.OnPush,
            providers: IgxSpreadsheetComponent_PROVIDERS,
            styles: ["\n\t\t:host {\n\t\t\tdisplay: block;\n\t\t}\n\t",
                "\nfakediscoveryelement {\n    display: block;\n    position: absolute;\n    box-sizing: content-box;\n    -moz-box-sizing: content-box;\n    margin: -4321px;\n    color: rgb(3, 2, 1);\n    border-style: solid;\n    border-color: rgb(3, 2, 1);\n    background-color: rgb(3, 2, 1);\n    background-image: none;\n    border-width: 4321px;\n    border-radius: 4321px;\n    outline-color: rgb(3, 2, 1);\n    vertical-align: baseline;\n    text-align: justify;\n    opacity: 0.888;\n    visibility: hidden;\n    padding: 4321px;\n    width: 4321px;\n    height: 4321px;\n}\n\t",
                "\n/* [START] Structure: */\n\n/* InputMessage\n   ============\n*/\n.ui-igspreadsheet-inputmessage-title {\n    font-weight: bold;\n    padding-right: 22px;\n}\n\n.ui-igspreadsheet-inputmessage-content {\n    padding-left: 2px;\n}\n\n.ui-igspreadsheet-inputmessage {\n    border-width: 1px;\n    border-style: solid;\n    max-height: 170px;\n    max-width: 260px;\n    padding: 4px 6px 4px 5px;\n    overflow: hidden;\n}\n\n\n/* ToolTip\n   =======\n*/\n.ui-igspreadsheet-tooltip {\n    border-width: 1px;\n    border-style: solid;\n}\n\n\n/* Splitters\n   =========\n*/\n.ui-igspreadsheet-rowsplitter,\n.ui-igspreadsheet-columnsplitter,\n.ui-igspreadsheet-splitterintersection {\n    border: none;\n}\n\n.ui-igspreadsheet-columnsplitter,\n.ui-igspreadsheet-tabareasplitter,\n.ui-igspreadsheet-nameboxsplitter {\n    cursor: nw-resize;\n    cursor: url(data:application/cur;base64,AAACAAEAICAAAA8ADwAwAQAAFgAAACgAAAAgAAAAQAAAAAEAAQAAAAAAgAAAAAAAAAAAAAAAAgAAAAIAAAAAAAAA////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB+AAAAWgAAAFoAAABaAAAAWgAABlpgAApaUAAT28gAIBgEACAYBAAT28gAClpQAAZaYAAAWgAAAFoAAABaAAAAWgAAAH4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA///////////////////////////////////////4H///+B////gf///4H///+B///5gZ//8YGP/+AAB//AAAP/wAAD/+AAB//xgY//+YGf//+B////gf///4H///+B////gf//////////////////////////////////////8=), col-resize;\n}\n\n.ui-igspreadsheet-columnsplitter {\n    width: 4px;\n}\n\n.ui-igspreadsheet-columnsplitter.ui-state-disabled {\n    opacity: 1;\n    width: 1px;\n    pointer-events: none;\n}\n\n.ui-igspreadsheet-rowsplitter {\n    height: 4px;\n    cursor: sw-resize;\n    cursor: url(data:application/cur;base64,AAACAAEAICAAAA8ADwAwAQAAFgAAACgAAAAgAAAAQAAAAAEAAQAAAAAAgAAAAAAAAAAAAAAAAgAAAAIAAAAAAAAA////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABgAAAAkAAAAQgAAAIEAAADnAAAAJAAAACQAAB/n+AAQAAgAH//4AB//+AAQAAgAH+f4AAAkAAAAJAAAAOcAAACBAAAAQgAAACQAAAAYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//////////////////////////////////5////8P///+B////AP///wD////D////w///4AAH/+AAB//gAAf/4AAH/+AAB//gAAf//8P////D////AP///wD///+B////w////+f/////////////////////////////////8=), row-resize;\n}\n\n.ui-igspreadsheet-rowsplitter.ui-state-disabled {\n    opacity: 1;\n    height: 1px;\n    pointer-events: none;\n}\n\n.ui-igspreadsheet-splitterintersection {\n    cursor: url(data:application/cur;base64,AAACAAEAICAAAA8ADwAwAQAAFgAAACgAAAAgAAAAQAAAAAEAAQAAAAAAgAAAAAAAAAAAAAAAAgAAAAIAAAAAAAAA////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAYAAAAJAAAAEIAAACBAAAA5wAAAyTAAAUkoAAJ55AAEAAIABAACAAJ55AABSSgAAMkwAAA5wAAAIEAAABCAAAAJAAAABgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA///////////////////////////////////////+f////D////gf///wD///8A///8wz//+MMf//AAD//gAAf/4AAH//AAD//4wx///MM///8A////AP///4H////D////5///////////////////////////////////////8=), move;\n}\n\n.ui-igspreadsheet-rowsplitterpreview, .ui-igspreadsheet-columnsplitterpreview {\n    background-color: #868686;\n}\n\n\n/* SelectAll\n   =========\n*/\n.ui-igspreadsheet-selectall {\n    overflow: hidden;\n    box-sizing: border-box;\n    border-left: none;\n    border-top: none;\n    border-right: solid 4px transparent;\n    border-bottom: solid 4px transparent;\n}\n\n.ui-igspreadsheet-selectall::before {\n    position: absolute;\n    content: \" \";\n    right: 0;\n    bottom: 0;\n    border-bottom: 12px solid currentColor;\n    border-left: 12px solid transparent;\n}\n\n\n/* TabArea Related\n   ===============\n*/\n.ui-igspreadsheet-tabareasplitter,\n.ui-igspreadsheet-nameboxsplitter {\n    background-color: transparent;\n    border: none;\n    width: 28px;\n    min-height: 12px;\n}\n\n.ui-igspreadsheet-tabareasplitter::before,\n.ui-igspreadsheet-nameboxsplitter::before {\n    content: \" \";\n    position: absolute;\n    width: 2px;\n    height: 2px;\n    top: 50%;\n    left: 50%;\n    margin-top: -7px;\n    margin-left: -3px;\n    box-shadow: 2px 2px 0 currentColor, 2px 6px 0 currentColor, 2px 10px 0 currentColor;\n}\n\n.ui-igspreadsheet-tabareaborder {\n    /* this height needs to stay in sync with the active tab item and tabitemarea properties */\n    height: 1px;\n}\n\n.ui-igspreadsheet-tabitemarea {\n    background-color: transparent;\n    cursor: default; /* todo is this needed? */\n}\n\n\n\n/* TabItem */\n.ui-igspreadsheet-tabitem {\n    display: inline-block;\n    border-top: none;\n    white-space: pre;\n    box-sizing: border-box;\n    overflow: hidden;\n    margin-bottom: 2px;\n    /* this height needs to stay in sync with the height of the tabareaborder */\n    margin-top: 1px;\n}\n\n.ui-igspreadsheet-tabitem.ui-state-hover,\n.ui-igspreadsheet-tabitem-selected {\n    font-weight: bold;\n}\n\n.ui-igspreadsheet-tabitem-active,\n.ui-igspreadsheet-tabitem-active.ui-state-hover {\n    /* remove the px added by the inactive tab item */\n    margin-top: 0;\n}\n\n.ui-igspreadsheet-tabitemcontent {\n    padding: 2px 7px 3px 7px;\n    margin: 2px 2px 1px 2px;\n    text-align: center;\n}\n\n.ui-igspreadsheet-tabitem-active > .ui-igspreadsheet-tabitemcontent {\n    /* 1 more than normal tabitemcontent margin-top to account for\n\t\t-1px top margin on tab (really whatever we used for the height\n\t\tof tabareaborder + the top margin we put on the inactive\n\t\ttabitemcontent\n\t*/\n    margin-top: 3px;\n}\n\n/* we don't want the text editor within the tab to define its own style or spacing */\n.ui-igspreadsheet-tabitem input {\n    border: none;\n    outline: none;\n    margin: 0;\n    padding: 0;\n    font: inherit;\n}\n\n/* [PROTECTED START] protected add some space before the text and show a lock */\n.ui-igspreadsheet-tabitem-protected > .ui-igspreadsheet-tabitemcontent {\n    /* need space for the lock - add to the padding instead of using margin\n\t\tso the color of a tab is around this too */\n    padding-left: 19px;\n}\n\n.ui-igspreadsheet-tabitem-protected > .ui-igspreadsheet-tabitemcontent > span::before {\n    position: absolute;\n    content: ' ';\n    margin: auto;\n    top: 50%;\n    margin-top: -7px;\n    bottom: 3px;\n    left: 0%;\n    margin-left: 8px;\n    width: 7px;\n    height: 10px;\n    background: transparent;\n    border: 2px solid currentColor;\n    border-radius: 3px;\n    box-sizing: border-box;\n}\n\n.ui-igspreadsheet-tabitem-protected > .ui-igspreadsheet-tabitemcontent > span::after {\n    position: absolute;\n    content: ' ';\n    margin: auto;\n    top: 50%;\n    left: 0%;\n    margin-left: 7px;\n    width: 9px;\n    height: 6px;\n    margin-top: -2px;\n    background-color: currentColor;\n}\n/* [PROTECTED END] */\n\n/* [LIGHT|DARK TAB START] when a worksheet has a custom tab color the 'color' of the\n\ttab item is set to that custom color. in addition the tab item has either a dark or\n\tlight class added that indicates whether its a dark or light color. this styling\n\tfollows the windows excel approach where the tab color is used as a solid color\n\twhen the tab is not selected so we need to know whether to use a light or dark\n\tforeground. when the tab is selected that color is used with a white overlay so\n\twe can use the same foreground used for normal selected/active tabs like ms does\n*/\n.ui-igspreadsheet-tabitem.ui-igspreadsheet-tabitem-dark > .ui-igspreadsheet-tabitemcontent,\n.ui-igspreadsheet-tabitem.ui-igspreadsheet-tabitem-light > .ui-igspreadsheet-tabitemcontent {\n    background: currentColor;\n}\n\n.ui-igspreadsheet-tabitem-selected.ui-igspreadsheet-tabitem-dark > .ui-igspreadsheet-tabitemcontent,\n.ui-igspreadsheet-tabitem-selected.ui-igspreadsheet-tabitem-light > .ui-igspreadsheet-tabitemcontent {\n    /* the white parts here are based on the fact that the background of a selected tab is white\n\t\tso this would need to be changed if one changes that\n\t*/\n    background: linear-gradient(to bottom, white, rgba(255,255,255,.5)), currentColor;\n}\n\n/* [LIGHT|DARK TAB END] */\n\n\n\n/* Tab Drop Indicator\n   ==================\n*/\n.ui-igspreadsheet-tabDropIndicator::before {\n    position: absolute;\n    content: ' ';\n    width: 0;\n    height: 0;\n    left: -6px;\n    top: -6px;\n    border-left: 6px solid transparent;\n    border-right: 6px solid transparent;\n    border-top: 6px solid #fff;\n}\n\n.ui-igspreadsheet-tabDropIndicator::after {\n    position: absolute;\n    content: ' ';\n    width: 0;\n    height: 0;\n    top: -5px;\n    left: -4px;\n    border-left: 4px solid transparent;\n    border-right: 4px solid transparent;\n    border-top: 4px solid #000;\n}\n\n\n\n/* Tab Area Buttons\n   ================\n*/\n.ui-igspreadsheet-activateprevioushiddentab,\n.ui-igspreadsheet-activatenexthiddentab {\n    background-color: transparent;\n    border: none;\n    width: 27px;\n}\n\n.ui-igspreadsheet-scrollfirsttab,\n.ui-igspreadsheet-scrolllasttab,\n.ui-igspreadsheet-scrollprevioustab,\n.ui-igspreadsheet-scrollnexttab {\n    background-color: transparent;\n    border: none;\n    width: 28px;\n}\n\n.ui-igspreadsheet-activateprevioushiddentab.ui-state-disabled,\n.ui-igspreadsheet-activatenexthiddentab.ui-state-disabled {\n    opacity: 0;\n}\n\n.ui-igspreadsheet-addnewworksheet.ui-state-disabled,\n.ui-igspreadsheet-scrollfirsttab.ui-state-disabled,\n.ui-igspreadsheet-scrolllasttab.ui-state-disabled,\n.ui-igspreadsheet-scrollprevioustab.ui-state-disabled,\n.ui-igspreadsheet-scrollnexttab.ui-state-disabled {\n    opacity: 1;\n}\n\n.ui-igspreadsheet-scrollfirsttab::before,\n.ui-igspreadsheet-scrolllasttab::before,\n.ui-igspreadsheet-scrollprevioustab::before,\n.ui-igspreadsheet-scrollnexttab::before {\n    position: absolute;\n    display: block;\n    content: \" \";\n    width: 0;\n    height: 0;\n    left: 50%;\n    top: 50%;\n    margin-left: -4px;\n    margin-top: -4px;\n    border-top: 4px solid transparent;\n    border-bottom: 4px solid transparent;\n}\n\n.ui-igspreadsheet-scrollfirsttab::before,\n.ui-igspreadsheet-scrollprevioustab::before {\n    border-right: 8px solid currentColor;\n}\n\n.ui-igspreadsheet-scrolllasttab::before,\n.ui-igspreadsheet-scrollnexttab::before {\n    border-left: 8px solid currentColor;\n}\n\n.ui-igspreadsheet-scrollfirsttab::before {\n    box-shadow: -1px 0px currentColor;\n}\n\n.ui-igspreadsheet-scrolllasttab::before {\n    box-shadow: 1px 0px currentColor;\n}\n\n.ui-igspreadsheet-activateprevioushiddentab::before,\n.ui-igspreadsheet-activatenexthiddentab::before {\n    content: \" \";\n    position: absolute;\n    width: 2px;\n    height: 2px;\n    top: 50%;\n    left: 50%;\n    margin-top: -3px;\n    margin-left: -7px;\n    box-shadow: 2px 2px 0 currentColor, 6px 2px 0 currentColor, 10px 2px 0 currentColor;\n}\n\n\n\n/* Add New Worksheet */\n.ui-igspreadsheet-addnewworksheet {\n    background-color: transparent;\n    border: none;\n    width: 28px;\n}\n\n.ui-igspreadsheet-addnewworksheet::before,\n.ui-igspreadsheet-addnewworksheet::after {\n    content: \" \";\n    width: 16px;\n    height: 16px;\n    position: absolute;\n    border-radius: 50%;\n    border: 1px solid currentColor;\n    background-color: currentColor;\n    box-sizing: border-box;\n    background-clip: content-box;\n    top: 50%;\n    left: 50%;\n    margin-top: -8px;\n    margin-left: -8px;\n}\n\n.ui-igspreadsheet-addnewworksheet::before {\n    padding: 6px 3px 6px 3px;\n}\n\n.ui-igspreadsheet-addnewworksheet::after {\n    padding: 3px 6px 3px 6px;\n}\n\n\n\n/* ScrollBar related\n   =================\n*/\n.ui-igspreadsheet-scrollbar-vertical {\n    min-width: 17px;\n    margin-left: 2px;\n    margin-right: 2px;\n}\n\n.ui-igspreadsheet-scrollbar-horizontal {\n    min-height: 17px;\n    max-height: 17px;\n    margin-top: 2px;\n    margin-bottom: 2px;\n}\n\n.ui-igspreadsheet-scrollbar-button-left,\n.ui-igspreadsheet-scrollbar-button-right,\n.ui-igspreadsheet-scrollbar-track-left,\n.ui-igspreadsheet-scrollbar-track-right,\n.ui-igspreadsheet-scrollbar-thumb-horizontal {\n    top: 0;\n    bottom: 0;\n}\n\n.ui-igspreadsheet-scrollbar-button-up,\n.ui-igspreadsheet-scrollbar-button-down,\n.ui-igspreadsheet-scrollbar-track-up,\n.ui-igspreadsheet-scrollbar-track-down,\n.ui-igspreadsheet-scrollbar-thumb-vertical {\n    left: 0;\n    right: 0;\n}\n\n.ui-igspreadsheet-scrollbar-button-left,\n.ui-igspreadsheet-scrollbar-button-right,\n.ui-igspreadsheet-scrollbar-button-up,\n.ui-igspreadsheet-scrollbar-button-down {\n    box-sizing: border-box;\n}\n\n.ui-igspreadsheet-scrollbar-button-left:before,\n.ui-igspreadsheet-scrollbar-button-right:before,\n.ui-igspreadsheet-scrollbar-button-up:before,\n.ui-igspreadsheet-scrollbar-button-down:before {\n    position: absolute;\n    display: block;\n    content: \" \";\n    width: 0;\n    height: 0;\n    left: 50%;\n    top: 50%;\n}\n\n.ui-igspreadsheet-scrollbar-button-left:before,\n.ui-igspreadsheet-scrollbar-button-right:before {\n    margin-left: -3px;\n    margin-top: -4px;\n    border-top: 4px solid transparent;\n    border-bottom: 4px solid transparent;\n}\n\n.ui-igspreadsheet-scrollbar-button-left:before {\n    border-right: 6px solid currentColor;\n}\n\n.ui-igspreadsheet-scrollbar-button-right:before {\n    border-left: 6px solid currentColor;\n}\n\n.ui-igspreadsheet-scrollbar-button-up:before,\n.ui-igspreadsheet-scrollbar-button-down:before {\n    margin-left: -4px;\n    margin-top: -3px;\n    border-left: 4px solid transparent;\n    border-right: 4px solid transparent;\n}\n\n.ui-igspreadsheet-scrollbar-button-up:before {\n    border-bottom: 6px solid currentColor;\n}\n\n.ui-igspreadsheet-scrollbar-button-down:before {\n    border-top: 6px solid currentColor;\n}\n\n.ui-igspreadsheet-scrollbar-track-left,\n.ui-igspreadsheet-scrollbar-track-right,\n.ui-igspreadsheet-scrollbar-track-up,\n.ui-igspreadsheet-scrollbar-track-down {\n    border: none;\n}\n\n.ui-igspreadsheet-scrollbar-thumb-vertical,\n.ui-igspreadsheet-scrollbar-thumb-horizontal {\n    box-sizing: border-box;\n}\n\n.ui-igspreadsheet-scrollbar-button-left,\n.ui-igspreadsheet-scrollbar-button-right {\n    width: 17px;\n}\n\n.ui-igspreadsheet-scrollbar-button-up,\n.ui-igspreadsheet-scrollbar-button-down {\n    height: 17px;\n}\n\n/* Formula Bar\n   ===========\n*/\n.ui-igspreadsheet-nameboxcontainer .ui-igcombo,\n.ui-igspreadsheet-nameboxcontainer .ui-igcombo-field,\n.ui-igspreadsheet-nameboxcontainer .ui-igcombo-textbox,\n.ui-igspreadsheet-nameboxcontainer .ui-igcombo-dropdown {\n    font: inherit;\n}\n\n/* we don't want the combo's normal background or border */\n.ui-igspreadsheet-nameboxcontainer .ui-igcombo {\n    background-color: transparent;\n    border: none;\n}\n\n.ui-igspreadsheet-nameboxcontainer .ui-igcombo-button {\n    border: none;\n}\n\n.ui-igspreadsheet-nameboxcontainer .ui-igcombo-dropdown {\n    /* since the border comes from the container we need to shift the drop down down by 1 pixel*/\n    margin-top: 1px;\n}\n\n.ui-igspreadsheet-formulabar {\n    padding-left: 5px;\n    padding-right: 5px;\n    padding-top: 10px;\n    /* note we're not specifying bottom because the text area splitter will be there */\n}\n\n.ui-igspreadsheet-formulabartextareasplitter {\n    height: 10px;\n    cursor: row-resize;\n    background: transparent;\n    border: none;\n}\n\n.ui-igspreadsheet-formulabarexpandbutton {\n    border: none;\n    height: 20px;\n    width: 20px;\n}\n\n.ui-igspreadsheet-formulabarexpandbutton::before {\n    content: \" \";\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    width: 6px;\n    height: 6px;\n    margin-left: -3px;\n    margin-top: -4px;\n    border: 2px solid currentColor;\n    box-sizing: border-box;\n    transform: rotate(45deg);\n    border-width: 0 2px 2px 0;\n}\n\n.ui-igspreadsheet-formulabarexpandbutton-open {\n    transform: rotate(180deg);\n}\n\n.ui-igspreadsheet-nameboxcontainer,\n.ui-igspreadsheet-formulabartextareacontainer,\n.ui-igspreadsheet-formulabarbuttoncontainer {\n    box-sizing: border-box;\n}\n\n.ui-igspreadsheet-nameboxcontainer {\n    cursor: pointer;\n}\n\n.ui-igspreadsheet-formulabarbuttoncontainer {\n    margin-right: 3px;\n}\n\n.ui-igspreadsheet-formulabartextareacontainer textarea {\n    resize: none;\n    border: none;\n    padding-left: 11px;\n    padding-top: 2px;\n    padding-bottom: 2px;\n    padding-right: 0;\n    outline: 0;\n    margin: 0;\n    font: inherit;\n    box-sizing: border-box;\n}\n\n.ui-igspreadsheet-formulabarenterbutton,\n.ui-igspreadsheet-formulabarcancelbutton {\n    background-color: transparent;\n    border: none;\n    width: 20px;\n}\n\n.ui-igspreadsheet-formulabarenterbutton.ui-state-disabled,\n.ui-igspreadsheet-formulabarcancelbutton.ui-state-disabled {\n    opacity: 0.62;\n}\n\n.ui-igspreadsheet-formulabarenterbutton::before,\n.ui-igspreadsheet-formulabarenterbutton::after,\n.ui-igspreadsheet-formulabarcancelbutton::before,\n.ui-igspreadsheet-formulabarcancelbutton::after {\n    content: \" \";\n    position: absolute;\n    width: 2px;\n    height: 10px;\n    left: 50%;\n    top: 50%;\n    margin-left: -1px;\n    margin-top: -5px;\n    background-color: currentColor;\n}\n\n.ui-igspreadsheet-formulabarenterbutton::before {\n    transform: rotate(45deg);\n}\n\n.ui-igspreadsheet-formulabarenterbutton::after {\n    transform: rotate(-45deg);\n    height: 5px;\n    margin-top: 0;\n    margin-left: -5px;\n}\n\n.ui-igspreadsheet-formulabarcancelbutton::before {\n    transform: rotate(45deg);\n}\n\n.ui-igspreadsheet-formulabarcancelbutton::after {\n    transform: rotate(-45deg);\n}\n\n\n/* border color inside spreadsheet */\n.ui-igspreadsheet-automaticgridline {\n    background-color: rgb(212, 212, 212);\n}\n\n/* ui-igspreadsheet-filter-dialog */\n.ui-igspreadsheet-filter-dialog,\n.ui-igspreadsheet-topOrBottom-dialog {\n    min-width: 470px;\n}\n\n.ui-igspreadsheet-filter-dialog .ui-igcombo-wrapper {\n    flex: 1 0 0%;\n    min-width: 200px;\n}\n\n.ui-igspreadsheet-filter-dialog input[type=\"radio\" i],\n.ui-igspreadsheet-filter-dialog {\n    margin: 0 5px 0 0;\n}\n\n.ui-igspreadsheet-filter-dialog,\n.ui-igspreadsheet-filter-dialog .ui-igdialog-content {\n    display: flex;\n    flex-direction: column;\n}\n\n.ui-igspreadsheet-filter-dialog .ui-igdialog-content > div {\n    display: flex;\n    flex-wrap: wrap;\n}\n\n.ui-igspreadsheet-filter-dialog .ui-igdialog-content > div > * {\n    margin-bottom: 10px;\n}\n\n.ui-igspreadsheet-filter-dialog-hint-text {\n    flex-direction: column;\n}\n\n.ui-igspreadsheet-filter-dialog-conditional-operator label {\n    display: flex;\n    align-items: center;\n    margin-right: 10px;\n}\n\n.ui-igspreadsheet-filter-dialog-conditional-operator label:last-of-type {\n    margin-right: 0;\n}\n\n.ui-igspreadsheet-filter-buttons {\n    justify-content: flex-end;\n}\n\n.ui-igspreadsheet-filter-dialog .ui-igdialog-content .ui-igspreadsheet-filter-buttons > * {\n    margin-bottom: 0;\n    margin-left: 10px;\n}\n\n.ui-igspreadsheet-filter-dialog-condition1 select,\n.ui-igspreadsheet-filter-dialog-condition2 select {\n    flex: 1 0 0%;\n    margin-right: 10px;\n}\n\n.ui-igspreadsheet-filter-dialog-show-rows-where,\n.ui-igspreadsheet-filter-dialog-column-name {\n    margin-bottom: 15px;\n}\n\n.ui-igspreadsheet-topOrBottom-dialog-input-area {\n    display: flex;\n    align-items: center;\n    margin: 16px -8px 16px -8px;\n}\n\n.ui-igspreadsheet-topOrBottom-dialog-input-area > * {\n    margin: 0 8px;\n    flex: 1 0 0%;\n}\n\n.ui-igspreadsheet-topOrBottom-buttons {\n    display: flex;\n    justify-content: flex-end;\n}\n\n.ui-igspreadsheet-topOrBottom-buttons button {\n    margin-left: 8px;\n}\n\n/* Custom sort dialog */\n\n.ui-igspreadsheet-sort-dialog-my-data-has-headers-checkbox {\n    float: right;\n}\n\n.ui-igspreadsheet-sort-dialog-top-buttons-area button {\n    margin-right: 4px;\n}\n\n.ui-igspreadsheet-sort-dialog-top-buttons-area {\n    margin-bottom: 10px;\n}\n\n#grdHeaders {\n    display: -ms-grid;\n    -ms-grid-rows: auto 3px;\n    -ms-grid-columns: 1fr 2px 1fr 12px 1fr 12px;\n    display: grid;\n    grid-template-rows: auto;\n    grid-template-columns: 1fr 1fr 2fr;\n    grid-gap: 12px;\n}\n\n#grdSortConditions {\n    display: -ms-grid;\n    -ms-grid-rows: auto 3px;\n    -ms-grid-columns: 1fr 2px 1fr 12px 1fr 12px;\n    display: grid;\n    grid-template-rows: auto;\n    grid-template-columns: 1fr 1fr 2fr;\n    grid-gap: 12px;\n}\n\n#pnlColumnContentsGrid {\n    display: -ms-grid;\n    -ms-grid-rows: auto 3px;\n    -ms-grid-columns: auto 10px 1fr 10px;\n    display: grid;\n    grid-template-rows: auto;\n    grid-template-columns: auto 1fr;\n    grid-gap: 10px;\n}\n\n#cbCombo, #cboSortType, #cboSortDirection {\n    height: 32px !important;\n}\n\n.ui-igspreadsheet-sort-dialog-ok-cancel-buttons-area button {\n    margin-right: 10px;\n}\n\n/* [END] Structure: */\n\n\n\n\n/* [START] Theme: */\n/*\n=========================\nSpreadsheet colors\n=========================\n*/\n\n.ui-igspreadsheet-inputmessage {\n    background-color: #dadada;\n    border-color: #777777;\n    color: #444444;\n}\n\n/* ToolTip */\n.ui-igspreadsheet-tooltip {\n    background-color: #dadada;\n    border-color: #cccccc;\n    color: #777777;\n}\n\n/* Splitters */\n.ui-igspreadsheet-rowsplitter,\n.ui-igspreadsheet-columnsplitter,\n.ui-igspreadsheet-splitterintersection {\n    background-color: #e8e8e8;\n}\n\n/* SelectAll */\n.ui-igspreadsheet-selectall {\n    background-color: #f1f1f1;\n    color: #c6c6c6;\n}\n.ui-igspreadsheet-selectall.ui-state-hover {\n    color: #9e9e9e;\n}\n\n.ui-igspreadsheet-selectall.ui-state-active {\n    color: #217346;\n}\n\n/* SpreadSheet Header & Footer background */\n.ui-igspreadsheet-tabareabackground,\n.ui-igspreadsheet-formulabar {\n    background-color: #e6e6e6;\n}\n\n/* SpreadSheet Footer top border */\n.ui-igspreadsheet-tabareaborder {\n    background-color: #ababab;\n}\n\n/* Splitter icon */\n.ui-igspreadsheet-tabareasplitter,\n.ui-igspreadsheet-nameboxsplitter {\n    color: #b3b3b3;\n}\n\n/* Unselected tab */\n.ui-igspreadsheet-tabitem {\n    border-right: 1px solid #ababab;\n    border-left: 1px solid #ababab;\n    background-color: transparent;\n    border-bottom: 2px solid transparent; /* reserved space so we don't see jumping when the tab is selected */\n    color: #444444;\n}\n\n/* Tab hover */\n.ui-igspreadsheet-tabitem.ui-state-hover {\n    color: #262626;\n}\n\n.ui-igspreadsheet-tabitem-selected {\n    background: #ffffff;\n    border-bottom-color: #217346;\n}\n\n.ui-igspreadsheet-tabitem-active,\n.ui-igspreadsheet-tabitem-active.ui-state-hover {\n    color: #217346;\n}\n\n/* [LIGHT|DARK TAB START]  */\n.ui-igspreadsheet-tabitem-light > .ui-igspreadsheet-tabitemcontent > span {\n    color: #000;\n}\n\n.ui-igspreadsheet-tabitem-dark > .ui-igspreadsheet-tabitemcontent > span {\n    color: #FFF;\n}\n\n.ui-igspreadsheet-tabitem-selected.ui-igspreadsheet-tabitem-dark > .ui-igspreadsheet-tabitemcontent > span,\n.ui-igspreadsheet-tabitem-selected.ui-igspreadsheet-tabitem-light > .ui-igspreadsheet-tabitemcontent > span {\n    color: #262626;\n}\n\n.ui-igspreadsheet-tabitem-active.ui-igspreadsheet-tabitem-dark > .ui-igspreadsheet-tabitemcontent > span,\n.ui-igspreadsheet-tabitem-active.ui-igspreadsheet-tabitem-light > .ui-igspreadsheet-tabitemcontent > span {\n    color: #217346;\n}\n\n/* [LIGHT|DARK TAB END] */\n\n/* Tab Area Buttons */\n.ui-igspreadsheet-activateprevioushiddentab,\n.ui-igspreadsheet-activatenexthiddentab,\n.ui-igspreadsheet-scrollfirsttab,\n.ui-igspreadsheet-scrolllasttab,\n.ui-igspreadsheet-scrollprevioustab,\n.ui-igspreadsheet-scrollnexttab {\n    color: #0a6332;\n}\n\n.ui-igspreadsheet-addnewworksheet.ui-state-hover,\n.ui-igspreadsheet-activateprevioushiddentab.ui-state-hover,\n.ui-igspreadsheet-activatenexthiddentab.ui-state-hover,\n.ui-igspreadsheet-scrollfirsttab.ui-state-hover,\n.ui-igspreadsheet-scrolllasttab.ui-state-hover,\n.ui-igspreadsheet-scrollprevioustab.ui-state-hover,\n.ui-igspreadsheet-scrollnexttab.ui-state-hover {\n    color: #439467;\n}\n\n.ui-igspreadsheet-addnewworksheet.ui-state-disabled,\n.ui-igspreadsheet-scrollfirsttab.ui-state-disabled,\n.ui-igspreadsheet-scrolllasttab.ui-state-disabled,\n.ui-igspreadsheet-scrollprevioustab.ui-state-disabled,\n.ui-igspreadsheet-scrollnexttab.ui-state-disabled {\n    color: #c6c6c6;\n}\n\n/* Add New Worksheet */\n.ui-igspreadsheet-addnewworksheet {\n    color: #777777;\n    cursor: pointer;\n}\n\n/* ScrollBar related */\n.ui-igspreadsheet-scrollbar-button-left,\n.ui-igspreadsheet-scrollbar-button-right,\n.ui-igspreadsheet-scrollbar-button-up,\n.ui-igspreadsheet-scrollbar-button-down {\n    background-color: #FFF;\n    border: 1px solid #ababab;\n    color: #777777;\n}\n\n.ui-igspreadsheet-scrollbar-button-left.ui-state-hover,\n.ui-igspreadsheet-scrollbar-button-right.ui-state-hover,\n.ui-igspreadsheet-scrollbar-button-up.ui-state-hover,\n.ui-igspreadsheet-scrollbar-button-down.ui-state-hover {\n    background-color: #FFF;\n    border-color: #777777;\n    color: #777777;\n}\n\n.ui-igspreadsheet-scrollbar-button-left.ui-state-active,\n.ui-igspreadsheet-scrollbar-button-right.ui-state-active,\n.ui-igspreadsheet-scrollbar-button-up.ui-state-active,\n.ui-igspreadsheet-scrollbar-button-down.ui-state-active {\n    background-color: #f0f0f0;\n    border-color: #878787;\n    color: #757778;\n}\n\n.ui-igspreadsheet-scrollbar-track-left,\n.ui-igspreadsheet-scrollbar-track-right,\n.ui-igspreadsheet-scrollbar-track-up,\n.ui-igspreadsheet-scrollbar-track-down {\n    background-color: #dbdbdb;\n}\n\n.ui-igspreadsheet-scrollbar-thumb-vertical,\n.ui-igspreadsheet-scrollbar-thumb-horizontal {\n    background-color: #fff;\n    border: 1px solid #ababab;\n}\n\n.ui-igspreadsheet-scrollbar-thumb-vertical.ui-state-hover,\n.ui-igspreadsheet-scrollbar-thumb-horizontal.ui-state-hover {\n    background-color: #f0f0f0;\n    border-color: #ababab;\n}\n\n.ui-igspreadsheet-scrollbar-thumb-vertical.ui-state-active,\n.ui-igspreadsheet-scrollbar-thumb-horizontal.ui-state-active {\n    background-color: #f0f0f0;\n    border-color: #777777;\n}\n\n/* Formula Bar\n   =======\n*/\n\n.ui-igspreadsheet .ui-igspreadsheet-formulabarexpandbutton {\n    background-color: #cccccc;\n    cursor: pointer;\n}\n.ui-igspreadsheet .ui-igspreadsheet-formulabarexpandbutton:hover\n{\n    opacity: 0.8;\n}\n.ui-igspreadsheet .ui-igspreadsheet-formulabarexpandbutton:before {\n    border-color: #444444;\n}\n\n/* Buttons background */\n.ui-igspreadsheet-nameboxcontainer,\n.ui-igspreadsheet-formulabartextareacontainer,\n.ui-igspreadsheet-formulabarbuttoncontainer {\n    border: 1px solid #bcbcbc;\n    box-sizing: border-box;\n    background-color: #e8e8e8;\n}\n\n/* Enabled buttons */\n.ui-igspreadsheet-formulabarenterbutton,\n.ui-igspreadsheet-formulabarcancelbutton {\n    color: #444444;\n}\n\n/* Disabled Buttons */\n.ui-igspreadsheet-formulabarenterbutton.ui-state-disabled,\n.ui-igspreadsheet-formulabarcancelbutton.ui-state-disabled {\n    color: #c4c4c4;\n}\n\n/* Enter Button */\n.ui-igspreadsheet-formulabarenterbutton.ui-state-hover {\n    color: #3883b7;\n}\n\n/* Cancel Button */\n.ui-igspreadsheet-formulabarcancelbutton.ui-state-hover {\n    color: #d13434;\n}\n\n.ui-igspreadsheet-invaliddata {\n    border-color: #ff0000;\n}\n\n/*\n    Formula Bar END\n   ==================\n*/\n\n/* [END] Theme: */\n\n\n\n/* [START] Support: */\n/*\n=========================\nMenu\n=========================\n*/\n.menuitem {\n    width: 100%;\n    box-sizing: border-box;\n    border: 1px solid transparent;\n    background-color: #fff;\n    color: #5e5e5e;\n    padding-left: 32px;\n    padding-right: 22px;\n    position: relative;\n    display: table;\n    min-height: 28px; /* 20px image w/ border, 6px padding, 2px border */\n    white-space: nowrap;\n}\n\n.menuitemseparator {\n    position: relative;\n    display: block;\n    margin: 0px 0px 1px 32px;\n    box-sizing: content-box;\n    background-color: #e0e3e6;\n    height: 1px;\n}\n\n.menuitemcontent {\n    display: table-cell;\n    vertical-align: middle;\n}\n\n.menuitemimage,\n.menuitemseparator .menuitemimage {\n    position: absolute;\n    width: 20px;\n    height: 20px;\n    box-sizing: border-box;\n    border: 1px solid transparent;\n    left: 3px;\n    top: 0;\n    bottom: 0;\n    margin: auto;\n    background-size: 16px 16px;\n    background-repeat: no-repeat;\n    background-position: 1px 1px;\n}\n\n/* checked image border/fill */\n.menuitem.checked .menuitemimage {\n    background-color: #c5c5c5;\n    border-color: #969696;\n    color: #505050;\n    /* default checkmark image when checked */\n    background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 15 15'%3E%3Cpath d='M4,7 L7,10.5 11,4' stroke='currentColor' fill='none' stroke-width='1.5'/%3E%3C/svg%3E\");\n}\n\n.menuitemarrowarea {\n    position: absolute;\n    color: transparent;\n    top: 0;\n    bottom: 0;\n    right: 0;\n    width: 22px;\n}\n\n.menuitem.hassubitems .menuitemarrowarea {\n    color: #727272;\n}\n.menuitem.hassubitems.selected .menuitemarrowarea {\n    color: #505050;\n}\n.menuitem.hassubitems.disabled .menuitemarrowarea {\n    color: #c6c6c6;\n}\n\n.menuitemarrowarea::before {\n    border-top: 4px solid transparent;\n    border-bottom: 4px solid transparent;\n    border-left: 4px solid currentColor;\n    content: \" \";\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n}\n  \n.menuitem.selected {\n    background-color: #c5c5c5;\n    color: #2b2b2b;\n    border-color: #c5c5c5;\n}\n\n.menuitem.disabled {\n    color: #b1b1b1;\n}\n\n.menuitem.disabled.selected {\n    background-color: #fff;\n    border-color: #d1d1d1;\n}\n\n.menu {\n    background-color: #fff;\n    border: 1px solid #c6c6c6;\n    padding: 1px;\n    overflow: auto;\n}\n\n.menu:focus,\n.menuitem:focus {\n    outline: 0;\n}\n\n/*\n=========================\nCombobox\n=========================\n*/\n.comboboxdropdown {\n    background-color: #fff;\n    color: #3b3b3b;\n    border: 1px solid #000;\n    padding: 1px;\n    overflow: auto;\n    box-sizing: border-box;\n}\n\n.comboboxdropdown:focus {\n    outline: 0;\n}\n\n.comboboxitem {\n    padding: 2px 4px;\n    white-space: nowrap;\n}\n\n.comboboxitem.selected {\n    background-color: #c5c5c5;\n}\n\n.comboboxeditarea {\n    border: 1px solid #c5c5c5;\n    background-color: #fff;\n    box-sizing: border-box;\n    /* space for dropdown arrow */\n    padding-right: 15px;\n}\n\n.comboboxeditarea.focused {\n    border-color: #969696;\n}\n\n.comboboxeditarea input {\n    /* setting here to ensure disabled background is white too */\n    background-color: #fff;\n    width: 100%;\n    border: none;\n    outline: none;\n    margin: 0;\n    padding: 0;\n    font: inherit;\n}\n\n.comboboxdropdownbutton {\n    background-color: transparent;\n    color: #505050;\n    position: absolute;\n    width: 15px;\n    top: 0px;\n    bottom: 0px;\n    right: 0px;\n    margin: 1px 1px 1px 0;\n    border-left: 1px solid transparent;\n}\n\n.comboboxdropdownbutton.hottrack {\n    background-color: #c5c5c5;\n    border-color: #969696;\n}\n\n.comboboxdropdownbutton.pressed {\n    background-color: #969696;\n    border-color: #969696;\n}\n\n.comboboxdropdownarrow {\n    border-left: 4px solid transparent;\n    border-right: 4px solid transparent;\n    border-top: 4px solid currentColor;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n}\n\n\n/* [END] Support: */\n    "]
        }),
        tslib_1.__metadata("design:paramtypes", [Renderer2,
            ViewContainerRef,
            NgZone,
            ComponentFactoryResolver,
            Injector])
    ], IgxSpreadsheetComponent);
    return IgxSpreadsheetComponent;
}());
export { IgxSpreadsheetComponent };
//# sourceMappingURL=igx-spreadsheet-component.js.map
