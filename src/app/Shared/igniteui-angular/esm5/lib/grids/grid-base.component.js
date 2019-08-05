/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DOCUMENT } from '@angular/common';
import { ChangeDetectorRef, ComponentFactoryResolver, ContentChildren, ContentChild, ElementRef, EventEmitter, HostBinding, Inject, Input, IterableDiffers, NgZone, Output, QueryList, TemplateRef, ViewChild, ViewChildren, ViewContainerRef, InjectionToken, Optional } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil, first, filter } from 'rxjs/operators';
import { IgxSelectionAPIService } from '../core/selection';
import { cloneArray, isEdge, isNavigationKey, flatten, mergeObjects, isIE } from '../core/utils';
import { DataType } from '../data-operations/data-util';
import { FilteringLogic } from '../data-operations/filtering-expression.interface';
import { IgxGridForOfDirective } from '../directives/for-of/for_of.directive';
import { IgxTextHighlightDirective } from '../directives/text-highlight/text-highlight.directive';
import { AbsoluteScrollStrategy, HorizontalAlignment, VerticalAlignment, IgxOverlayService } from '../services/index';
import { IgxCheckboxComponent } from './../checkbox/checkbox.component';
import { GridBaseAPIService } from './api.service';
import { IgxColumnComponent } from './column.component';
import { DropPosition, ContainerPositioningStrategy, IgxDecimalPipeComponent, IgxDatePipeComponent } from './grid.common';
import { IgxGridToolbarComponent } from './grid-toolbar.component';
import { IgxRowComponent } from './row.component';
import { IgxOverlayOutletDirective, IgxToggleDirective } from '../directives/toggle/toggle.directive';
import { FilteringExpressionsTree } from '../data-operations/filtering-expressions-tree';
import { TransactionType } from '../services/index';
import { IgxRowEditTemplateDirective, IgxRowEditTabStopDirective, IgxRowEditTextDirective, IgxRowEditActionsDirective } from './grid.rowEdit.directive';
import { IgxGridNavigationService } from './grid-navigation.service';
import { DisplayDensityToken, DisplayDensityBase, DisplayDensity } from '../core/displayDensity';
import { IgxFilteringService } from './filtering/grid-filtering.service';
import { WatchChanges } from './watch-changes';
import { IgxGridHeaderGroupComponent } from './grid-header-group.component';
import { IgxGridToolbarCustomContentDirective } from './grid-toolbar.component';
import { CurrentResourceStrings } from '../core/i18n/resources';
import { IgxGridSummaryService } from './summaries/grid-summary.service';
import { IgxSummaryRowComponent } from './summaries/summary-row.component';
import { IgxGridSelectionService, IgxGridCRUDService, IgxRow, IgxCell } from '../core/grid-selection';
import { DragScrollDirection } from './drag-select.directive';
import { IgxTemplateOutletDirective } from '../directives/template-outlet/template_outlet.directive';
import { IgxExcelStyleSortingTemplateDirective, IgxExcelStylePinningTemplateDirective, IgxExcelStyleHidingTemplateDirective, IgxExcelStyleMovingTemplateDirective } from './filtering/excel-style/grid.excel-style-filtering.component';
import { IgxGridColumnResizerComponent } from './grid-column-resizer.component';
import { IgxGridFilteringRowComponent } from './filtering/grid-filtering-row.component';
import { DeprecateProperty } from '../core/deprecateDecorators';
import { CharSeparatedValueData } from '../services/csv/char-separated-value-data';
/** @type {?} */
var MINIMUM_COLUMN_WIDTH = 136;
/** @type {?} */
var FILTER_ROW_HEIGHT = 50;
// By default row editing overlay outlet is inside grid body so that overlay is hidden below grid header when scrolling.
// In cases when grid has 1-2 rows there isn't enough space in grid body and row editing overlay should be shown above header.
// Default row editing overlay height is higher then row height that is why the case is valid also for row with 2 rows.
// More accurate calculation is not possible, cause row editing overlay is still not shown and we don't know its height,
// but in the same time we need to set row editing overlay outlet before opening the overlay itself.
/** @type {?} */
var MIN_ROW_EDITING_COUNT_THRESHOLD = 2;
/** @type {?} */
export var IgxGridTransaction = new InjectionToken('IgxGridTransaction');
/**
 * @record
 */
export function IGridClipboardEvent() { }
if (false) {
    /** @type {?} */
    IGridClipboardEvent.prototype.data;
    /** @type {?} */
    IGridClipboardEvent.prototype.cancel;
}
/**
 * @record
 */
export function IGridCellEventArgs() { }
if (false) {
    /** @type {?} */
    IGridCellEventArgs.prototype.cell;
    /** @type {?} */
    IGridCellEventArgs.prototype.event;
}
/**
 * @record
 */
export function IGridEditEventArgs() { }
if (false) {
    /** @type {?} */
    IGridEditEventArgs.prototype.rowID;
    /** @type {?|undefined} */
    IGridEditEventArgs.prototype.cellID;
    /** @type {?} */
    IGridEditEventArgs.prototype.oldValue;
    /** @type {?|undefined} */
    IGridEditEventArgs.prototype.newValue;
    /** @type {?|undefined} */
    IGridEditEventArgs.prototype.event;
}
/**
 * @record
 */
export function IPinColumnEventArgs() { }
if (false) {
    /** @type {?} */
    IPinColumnEventArgs.prototype.column;
    /** @type {?} */
    IPinColumnEventArgs.prototype.insertAtIndex;
    /** @type {?} */
    IPinColumnEventArgs.prototype.isPinned;
}
/**
 * @record
 */
export function IPageEventArgs() { }
if (false) {
    /** @type {?} */
    IPageEventArgs.prototype.previous;
    /** @type {?} */
    IPageEventArgs.prototype.current;
}
/**
 * @record
 */
export function IRowDataEventArgs() { }
if (false) {
    /** @type {?} */
    IRowDataEventArgs.prototype.data;
}
/**
 * @record
 */
export function IColumnResizeEventArgs() { }
if (false) {
    /** @type {?} */
    IColumnResizeEventArgs.prototype.column;
    /** @type {?} */
    IColumnResizeEventArgs.prototype.prevWidth;
    /** @type {?} */
    IColumnResizeEventArgs.prototype.newWidth;
}
/**
 * @record
 */
export function IRowSelectionEventArgs() { }
if (false) {
    /** @type {?} */
    IRowSelectionEventArgs.prototype.oldSelection;
    /** @type {?} */
    IRowSelectionEventArgs.prototype.newSelection;
    /** @type {?|undefined} */
    IRowSelectionEventArgs.prototype.row;
    /** @type {?|undefined} */
    IRowSelectionEventArgs.prototype.event;
}
/**
 * @record
 */
export function ISearchInfo() { }
if (false) {
    /** @type {?} */
    ISearchInfo.prototype.searchText;
    /** @type {?} */
    ISearchInfo.prototype.caseSensitive;
    /** @type {?} */
    ISearchInfo.prototype.exactMatch;
    /** @type {?} */
    ISearchInfo.prototype.activeMatchIndex;
    /** @type {?} */
    ISearchInfo.prototype.matchInfoCache;
}
/**
 * @record
 */
export function IGridToolbarExportEventArgs() { }
if (false) {
    /** @type {?} */
    IGridToolbarExportEventArgs.prototype.grid;
    /** @type {?} */
    IGridToolbarExportEventArgs.prototype.exporter;
    /** @type {?} */
    IGridToolbarExportEventArgs.prototype.options;
    /** @type {?} */
    IGridToolbarExportEventArgs.prototype.cancel;
}
/**
 * @record
 */
export function IColumnMovingStartEventArgs() { }
if (false) {
    /** @type {?} */
    IColumnMovingStartEventArgs.prototype.source;
}
/**
 * @record
 */
export function IColumnMovingEventArgs() { }
if (false) {
    /** @type {?} */
    IColumnMovingEventArgs.prototype.source;
    /** @type {?} */
    IColumnMovingEventArgs.prototype.cancel;
}
/**
 * @record
 */
export function IColumnMovingEndEventArgs() { }
if (false) {
    /** @type {?} */
    IColumnMovingEndEventArgs.prototype.source;
    /** @type {?} */
    IColumnMovingEndEventArgs.prototype.target;
}
/**
 * @record
 */
export function IFocusChangeEventArgs() { }
if (false) {
    /** @type {?} */
    IFocusChangeEventArgs.prototype.cell;
    /** @type {?} */
    IFocusChangeEventArgs.prototype.event;
    /** @type {?} */
    IFocusChangeEventArgs.prototype.cancel;
}
/**
 * @record
 */
export function IGridKeydownEventArgs() { }
if (false) {
    /** @type {?} */
    IGridKeydownEventArgs.prototype.targetType;
    /** @type {?} */
    IGridKeydownEventArgs.prototype.target;
    /** @type {?} */
    IGridKeydownEventArgs.prototype.event;
    /** @type {?} */
    IGridKeydownEventArgs.prototype.cancel;
}
/**
 * @record
 */
export function ICellPosition() { }
if (false) {
    /** @type {?} */
    ICellPosition.prototype.rowIndex;
    /** @type {?} */
    ICellPosition.prototype.visibleColumnIndex;
}
/**
 * @record
 */
export function IGridDataBindable() { }
if (false) {
    /** @type {?} */
    IGridDataBindable.prototype.data;
    /** @type {?} */
    IGridDataBindable.prototype.filteredData;
}
/**
 * @record
 */
export function IRowDragEndEventArgs() { }
if (false) {
    /** @type {?} */
    IRowDragEndEventArgs.prototype.owner;
    /** @type {?} */
    IRowDragEndEventArgs.prototype.dragData;
    /** @type {?} */
    IRowDragEndEventArgs.prototype.animation;
}
/**
 * @record
 */
export function IRowDragStartEventArgs() { }
if (false) {
    /** @type {?} */
    IRowDragStartEventArgs.prototype.owner;
    /** @type {?} */
    IRowDragStartEventArgs.prototype.dragData;
}
/** @enum {string} */
var GridSummaryPosition = {
    top: 'top',
    bottom: 'bottom',
};
export { GridSummaryPosition };
/** @enum {string} */
var GridSummaryCalculationMode = {
    rootLevelOnly: 'rootLevelOnly',
    childLevelsOnly: 'childLevelsOnly',
    rootAndChildLevels: 'rootAndChildLevels',
};
export { GridSummaryCalculationMode };
/** @enum {string} */
var FilterMode = {
    quickFilter: 'quickFilter',
    excelStyleFilter: 'excelStyleFilter',
};
export { FilterMode };
/** @enum {string} */
var GridKeydownTargetType = {
    dataCell: 'dataCell',
    summaryCell: 'summaryCell',
    groupRow: 'groupRow',
    hierarchicalRow: 'hierarchicalRow',
};
export { GridKeydownTargetType };
/**
 * @abstract
 */
var IgxGridBaseComponent = /** @class */ (function (_super) {
    tslib_1.__extends(IgxGridBaseComponent, _super);
    function IgxGridBaseComponent(selectionService, crudService, gridAPI, selection, _transactions, elementRef, zone, document, cdr, resolver, differs, viewRef, navigation, filteringService, overlayService, summaryService, _displayDensityOptions) {
        var _this = _super.call(this, _displayDensityOptions) || this;
        _this.selectionService = selectionService;
        _this.crudService = crudService;
        _this.gridAPI = gridAPI;
        _this.selection = selection;
        _this._transactions = _transactions;
        _this.elementRef = elementRef;
        _this.zone = zone;
        _this.document = document;
        _this.cdr = cdr;
        _this.resolver = resolver;
        _this.differs = differs;
        _this.viewRef = viewRef;
        _this.navigation = navigation;
        _this.filteringService = filteringService;
        _this.overlayService = overlayService;
        _this.summaryService = summaryService;
        _this._displayDensityOptions = _displayDensityOptions;
        _this._init = true;
        _this._resourceStrings = CurrentResourceStrings.GridResStrings;
        _this._emptyGridMessage = null;
        _this._emptyFilteredGridMessage = null;
        _this._isLoading = false;
        _this._locale = null;
        _this._destroyed = false;
        _this.overlayIDs = [];
        /**
         * An \@Input property that autogenerates the `IgxGridComponent` columns.
         * The default value is false.
         * ```html
         * <igx-grid [data]="Data" [autoGenerate]="true"></igx-grid>
         * ```
         * \@memberof IgxGridBaseComponent
         */
        _this.autoGenerate = false;
        /**
         * @hidden
         * \@internal
         */
        _this.rowDragging = false;
        /**
         * An \@Input property that adds styling classes applied to all even `IgxGridRowComponent`s in the grid.
         * ```html
         * <igx-grid #grid [data]="Data" [evenRowCSS]="'igx-grid--my-even-class'" [autoGenerate]="true"></igx-grid>
         * ```
         * \@memberof IgxGridBaseComponent
         */
        _this.evenRowCSS = 'igx-grid__tr--even';
        /**
         * An \@Input property that adds styling classes applied to all odd `IgxGridRowComponent`s in the grid.
         * ```html
         * <igx-grid #grid [data]="Data" [evenRowCSS]="'igx-grid--my-odd-class'" [autoGenerate]="true"></igx-grid>
         * ```
         * \@memberof IgxGridBaseComponent
         */
        _this.oddRowCSS = 'igx-grid__tr--odd';
        /**
         * An \@Input property that sets the title to be displayed in the built-in column hiding UI.
         * ```html
         * <igx-grid [showToolbar]="true" [columnHiding]="true" columnHidingTitle="Column Hiding"></igx-grid>
         * ```
         * \@memberof IgxGridBaseComponent
         */
        _this.columnHidingTitle = '';
        /**
         * An \@Input property that sets the title to be displayed in the UI of the column pinning.
         * ```html
         * <igx-grid #grid [data]="localData" [columnPinning]="'true" [columnPinningTitle]="'Column Hiding'" [autoGenerate]="true"></igx-grid>
         * ```
         * \@memberof IgxGridBaseComponent
         */
        _this.columnPinningTitle = '';
        /**
         * Emitted when `IgxGridCellComponent` is clicked. Returns the `IgxGridCellComponent`.
         * ```html
         * <igx-grid #grid (onCellClick)="onCellClick($event)" [data]="localData" [height]="'305px'" [autoGenerate]="true"></igx-grid>
         * ```
         * ```typescript
         * public onCellClick(e){
         *     alert("The cell has been clicked!");
         * }
         * ```
         * \@memberof IgxGridBaseComponent
         */
        _this.onCellClick = new EventEmitter();
        /**
         * Emitted when `IgxGridCellComponent` is selected. Returns the `IgxGridCellComponent`.
         * ```html
         * <igx-grid #grid (onSelection)="onCellSelect($event)" [data]="localData" [height]="'305px'" [autoGenerate]="true"></igx-grid>
         * ```
         * ```typescript
         * public onCellSelect(e){
         *     alert("The cell has been selected!");
         * }
         * ```
         * \@memberof IgxGridBaseComponent
         */
        _this.onSelection = new EventEmitter();
        /**
         *  Emitted when `IgxGridRowComponent` is selected.
         * ```html
         * <igx-grid #grid (onRowSelectionChange)="onRowClickChange($event)" [data]="localData" [autoGenerate]="true"></igx-grid>
         * ```
         * ```typescript
         * public onCellClickChange(e){
         *     alert("The selected row has been changed!");
         * }
         * ```
         * \@memberof IgxGridBaseComponent
         */
        _this.onRowSelectionChange = new EventEmitter();
        /**
         * Emitted when `IgxColumnComponent` is pinned.
         * The index that the column is inserted at may be changed through the `insertAtIndex` property.
         * ```typescript
         * public columnPinning(event) {
         *     if (event.column.field === "Name") {
         *       event.insertAtIndex = 0;
         *     }
         * }
         * ```
         * \@memberof IgxGridBaseComponent
         */
        _this.onColumnPinning = new EventEmitter();
        /**
         * An \@Output property emitting an event when `IgxGridCellComponent`
         * editing has been performed in the grid and the values have **not** been submitted (e.g. `Esc` key was pressed).
         * This event is cancelable.
         *
         * args: IGridEditEventArgs = {
         *      cancel: bool,
         *      cellID: {
         *          columnID: int,
         *          rowID: int,
         *          rowIndex: int
         *      }
         *      newValue: object,
         *      oldValue: object,
         *      rowID: int
         *  }
         *
         * ```typescript
         * editCancel(event: IGridEditEventArgs){
         *    const rowID: IgxColumnComponent = event.rowID;
         * }
         * ```
         * ```html
         * <igx-grid #grid3 (onCellEditCancel)="editCancel($event)" [data]="remote | async" (onSortingDone)="process($event)"
         *          [primaryKey]="'ProductID'" [rowSelectable]="true">
         *          <igx-column [sortable]="true" [field]="'ProductID'"></igx-column>
         *          <igx-column [editable]="true" [field]="'ProductName'"></igx-column>
         *          <igx-column [sortable]="true" [field]="'UnitsInStock'" [header]="'Units in Stock'"></igx-column>
         * </igx-grid>
         * ```
         * \@memberof IgxGridComponent
         */
        _this.onCellEditCancel = new EventEmitter();
        /**
         * An \@Output property emitting an event when `IgxGridCellComponent` enters edit mode.
         * This event is cancelable.
         *
         * args: IGridEditEventArgs = {
         *      cancel: bool,
         *      cellID: {
         *          columnID: int,
         *          rowID: int,
         *          rowIndex: int
         *      }
         *      oldValue: object,
         *      rowID: int
         *  }
         *
         * ```typescript
         * editStart(event: IGridEditEventArgs){
         *    const value: IgxColumnComponent = event.newValue;
         * }
         * ```
         * ```html
         * <igx-grid #grid3 (onCellEditEnter)="editStart($event)" [data]="remote | async" (onSortingDone)="process($event)"
         *          [primaryKey]="'ProductID'" [rowSelectable]="true">
         *          <igx-column [sortable]="true" [field]="'ProductID'"></igx-column>
         *          <igx-column [editable]="true" [field]="'ProductName'"></igx-column>
         *          <igx-column [sortable]="true" [field]="'UnitsInStock'" [header]="'Units in Stock'"></igx-column>
         * </igx-grid>
         * ```
         * \@memberof IgxGridComponent
         */
        _this.onCellEditEnter = new EventEmitter();
        /**
         * An \@Output property emitting an event when `IgxGridCellComponent` editing has been performed in the grid.
         * Event is fired after editing is completed, when the cell is exiting edit mode.
         * This event is cancelable.
         *
         * args: IGridEditEventArgs = {
         *      cancel: bool,
         *      cellID: {
         *          columnID: int,
         *          rowID: int,
         *          rowIndex: int
         *      }
         *      newValue: object,
         *      oldValue: object,
         *      rowID: int
         *  }
         *
         * ```typescript
         * editDone(event: IGridEditEventArgs){
         *    const value: IgxColumnComponent = event.newValue;
         * }
         * ```
         * ```html
         * <igx-grid #grid3 (onCellEdit)="editDone($event)" [data]="remote | async" (onSortingDone)="process($event)"
         *          [primaryKey]="'ProductID'" [rowSelectable]="true">
         *          <igx-column [sortable]="true" [field]="'ProductID'"></igx-column>
         *          <igx-column [editable]="true" [field]="'ProductName'"></igx-column>
         *          <igx-column [sortable]="true" [field]="'UnitsInStock'" [header]="'Units in Stock'"></igx-column>
         * </igx-grid>
         * ```
         * \@memberof IgxGridBaseComponent
         */
        _this.onCellEdit = new EventEmitter();
        /**
         * An \@Output property emitting an event when [rowEditable]="true" a row enters edit mode.
         * This event is cancelable.
         *
         * args: IGridEditEventArgs = {
         *      cancel: bool,
         *      oldValue: <rowObj>,
         *      rowID: int
         *  }
         *
         * Bind to the event in markup as follows:
         * ```html
         * <igx-grid #grid3 (onRowEditEnter)="editStart($event)" [data]="remote | async" (onSortingDone)="process($event)"
         *          [primaryKey]="'ProductID'" [rowSelectable]="true" [rowEditable]="true">
         *          <igx-column [sortable]="true" [field]="'ProductID'"></igx-column>
         *          <igx-column [editable]="true" [field]="'ProductName'"></igx-column>
         *          <igx-column [sortable]="true" [field]="'UnitsInStock'" [header]="'Units in Stock'"></igx-column>
         * </igx-grid>
         * ```
         * ```typescript
         *      editStart(event: IGridEditEventArgs) {
         *          const editedRowObj = event.oldValue;
         *          const cancelValue = event.cancel;
         *          const rowID = event.rowID;
         *      }
         * ```
         * \@memberof IgxGridComponent
         */
        _this.onRowEditEnter = new EventEmitter();
        /**
         * An \@Output property emitting an event when [rowEditable]="true" & `endEdit(true)` is called.
         * Emitted when changing rows during edit mode, selecting an un-editable cell in the edited row,
         * performing paging operation, column resizing, pinning, moving or hitting  `Done`
         * button inside of the rowEditingOverlay, or hitting the `Enter` key while editing a cell.
         * This event is cancelable.
         *
         * args: IGridEditEventArgs = {
         *      cancel: bool,
         *      newValue: <rowObj>,
         *      oldValue: <rowObj>,
         *      rowID: int
         *  }
         *
         * Bind to the event in markup as follows:
         * ```html
         * <igx-grid #grid3 (onRowEdit)="editDone($event)" [data]="remote | async" (onSortingDone)="process($event)"
         *          [primaryKey]="'ProductID'" [rowSelectable]="true" [rowEditable]="true">
         *          <igx-column [sortable]="true" [field]="'ProductID'"></igx-column>
         *          <igx-column [editable]="true" [field]="'ProductName'"></igx-column>
         *          <igx-column [sortable]="true" [field]="'UnitsInStock'" [header]="'Units in Stock'"></igx-column>
         * </igx-grid>
         * ```
         *
         * ```typescript
         *      editDone(event: IGridEditEventArgs) {
         *          const originalRowObj = event.oldValue;
         *          const updatedRowObj = event.newValue;
         *          const cancelValue = event.cancel;
         *          const rowID = event.rowID;
         *      }
         * ```
         * \@memberof IgxGridBaseComponent
         */
        _this.onRowEdit = new EventEmitter();
        /**
         * An \@Output property emitting an event when [rowEditable]="true" & `endEdit(false)` is called.
         * Emitted when changing hitting `Esc` key during cell editing and when click on the `Cancel` button
         * in the row editing overlay.
         * This event is cancelable.
         *
         * args: IGridEditEventArgs = {
         *      cancel: bool,
         *      newValue: <rowObj>,
         *      oldValue: <rowObj>,
         *      rowID: int
         *  }
         *
         * Bind to the event in markup as follows:
         * ```html
         * <igx-grid #grid3 (onRowEditCancel)="editCancel($event)" [data]="remote | async" (onSortingDone)="process($event)"
         *          [primaryKey]="'ProductID'" [rowSelectable]="true" [rowEditable]="true">
         *          <igx-column [sortable]="true" [field]="'ProductID'"></igx-column>
         *          <igx-column [editable]="true" [field]="'ProductName'"></igx-column>
         *          <igx-column [sortable]="true" [field]="'UnitsInStock'" [header]="'Units in Stock'"></igx-column>
         * </igx-grid>
         * ```
         * ```typescript
         *      editCancel(emitted: { row: IgxGridRowComponent, newValue: any, oldValue: any }): void {
         *          const originalRowObj = event.oldValue;
         *          const updatedRowObj = event.newValue;
         *          const cancelValue = event.cancel;
         *          const rowID = event.rowID;
         *      }
         * ```
         * \@memberof IgxGridBaseComponent
         */
        _this.onRowEditCancel = new EventEmitter();
        /**
         * Emitted when a grid column is initialized. Returns the column object.
         * ```html
         * <igx-grid #grid [data]="localData" [onColumnInit]="initColumns($event)" [autoGenerate]="true"></igx-grid>
         * ```
         * ```typescript
         * initColumns(event: IgxColumnComponent) {
         * const column: IgxColumnComponent = event;
         *       column.filterable = true;
         *       column.sortable = true;
         *       column.editable = true;
         * }
         * ```
         * \@memberof IgxGridBaseComponent
         */
        _this.onColumnInit = new EventEmitter();
        /**
         * Emitted when sorting is performed through the UI. Returns the sorting expression.
         * ```html
         * <igx-grid #grid [data]="localData" [autoGenerate]="true" (onSortingDone)="sortingDone($event)"></igx-grid>
         * ```
         * ```typescript
         * sortingDone(event: SortingDirection){
         *     const sortingDirection = event;
         * }
         * ```
         * \@memberof IgxGridBaseComponent
         */
        _this.onSortingDone = new EventEmitter();
        /**
         * Emitted when filtering is performed through the UI.
         * Returns the filtering expressions tree of the column for which filtering was performed.
         * ```typescript
         * filteringDone(event: IFilteringExpressionsTree){
         *     const filteringTree = event;
         * }
         * ```
         * ```html
         * <igx-grid #grid [data]="localData" [height]="'305px'" [autoGenerate]="true" (onFilteringDone)="filteringDone($event)"></igx-grid>
         * ```
         * \@memberof IgxGridBaseComponent
         */
        _this.onFilteringDone = new EventEmitter();
        /**
         * Emitted when paging is performed. Returns an object consisting of the previous and next pages.
         * ```typescript
         * pagingDone(event: IPageEventArgs){
         *     const paging = event;
         * }
         * ```
         * ```html
         * <igx-grid #grid [data]="localData" [height]="'305px'" [autoGenerate]="true" (onPagingDone)="pagingDone($event)"></igx-grid>
         * ```
         * \@memberof IgxGridBaseComponent
         */
        _this.onPagingDone = new EventEmitter();
        /**
         * Emitted when a `IgxGridRowComponent` is being added to the `IgxGridComponent` through the API.
         * Returns the data for the new `IgxGridRowComponent` object.
         * ```typescript
         * rowAdded(event: IRowDataEventArgs){
         *    const rowInfo = event;
         * }
         * ```
         * ```html
         * <igx-grid #grid [data]="localData" (onRowAdded)="rowAdded($event)" [height]="'305px'" [autoGenerate]="true"></igx-grid>
         * ```
         * \@memberof IgxGridBaseComponent
         */
        _this.onRowAdded = new EventEmitter();
        /**
         * Emitted when a `IgxGridRowComponent` is deleted through the `IgxGridComponent` API.
         * Returns an `IRowDataEventArgs` object.
         * ```typescript
         * rowDeleted(event: IRowDataEventArgs){
         *    const rowInfo = event;
         * }
         * ```
         * ```html
         * <igx-grid #grid [data]="localData" (onRowDeleted)="rowDeleted($event)" [height]="'305px'" [autoGenerate]="true"></igx-grid>
         * ```
         * \@memberof IgxGridBaseComponent
         */
        _this.onRowDeleted = new EventEmitter();
        /**
         * Emitted when a new chunk of data is loaded from virtualization.
         * ```typescript
         *  <igx-grid #grid [data]="localData" [autoGenerate]="true" (onDataPreLoad)='handleDataPreloadEvent()'></igx-grid>
         * ```
         * \@memberof IgxGridBaseComponent
         */
        _this.onDataPreLoad = new EventEmitter();
        /**
         * Emitted when `IgxColumnComponent` is resized.
         * Returns the `IgxColumnComponent` object's old and new width.
         * ```typescript
         * resizing(event: IColumnResizeEventArgs){
         *     const grouping = event;
         * }
         * ```
         * ```html
         * <igx-grid #grid [data]="localData" (onColumnResized)="resizing($event)" [autoGenerate]="true"></igx-grid>
         * ```
         * \@memberof IgxGridBaseComponent
         */
        _this.onColumnResized = new EventEmitter();
        /**
         * Emitted when a `IgxGridCellComponent` is right clicked. Returns the `IgxGridCellComponent` object.
         * ```typescript
         * contextMenu(event: IGridCellEventArgs){
         *     const resizing = event;
         *     console.log(resizing);
         * }
         * ```
         * ```html
         * <igx-grid #grid [data]="localData" (onContextMenu)="contextMenu($event)" [autoGenerate]="true"></igx-grid>
         * ```
         * \@memberof IgxGridBaseComponent
         */
        _this.onContextMenu = new EventEmitter();
        /**
         * Emitted when a `IgxGridCellComponent` is double clicked. Returns the `IgxGridCellComponent` object.
         * ```typescript
         * dblClick(event: IGridCellEventArgs){
         *     const dblClick = event;
         *     console.log(dblClick);
         * }
         * ```
         * ```html
         * <igx-grid #grid [data]="localData" (onDoubleClick)="dblClick($event)" [autoGenerate]="true"></igx-grid>
         * ```
         * \@memberof IgxGridBaseComponent
         */
        _this.onDoubleClick = new EventEmitter();
        /**
         * Emitted when `IgxColumnComponent` visibility is changed. Args: { column: any, newValue: boolean }
         * ```typescript
         * visibilityChanged(event: IColumnVisibilityChangedEventArgs){
         *    const visiblity = event;
         * }
         * ```
         * ```html
         * <igx-grid [columnHiding]="true" [showToolbar]="true" (onColumnVisibilityChanged)="visibilityChanged($event)"></igx-grid>
         * ```
         * \@memberof IgxGridBaseComponent
         */
        _this.onColumnVisibilityChanged = new EventEmitter();
        /**
         * Emitted when `IgxColumnComponent` moving starts. Returns the moved `IgxColumnComponent` object.
         * ```typescript
         * movingStart(event: IColumnMovingStartEventArgs){
         *     const movingStarts = event;
         * }
         * ```
         * ```html
         * <igx-grid [columnHiding]="true" [showToolbar]="true" (onColumnMovingStart)="movingStart($event)"></igx-grid>
         * ```
         * \@memberof IgxGridBaseComponent
         */
        _this.onColumnMovingStart = new EventEmitter();
        /**
         * Emitted throughout the `IgxColumnComponent` moving operation.
         * Returns the source and target `IgxColumnComponent` objects. This event is cancelable.
         * ```typescript
         * moving(event: IColumnMovingEventArgs){
         *     const moving = event;
         * }
         * ```
         * ```html
         * <igx-grid [columnHiding]="true" [showToolbar]="true" (onColumnMoving)="moving($event)"></igx-grid>
         * ```
         * \@memberof IgxGridBaseComponent
         */
        _this.onColumnMoving = new EventEmitter();
        /**
         * Emitted when `IgxColumnComponent` moving ends.
         * Returns the source and target `IgxColumnComponent` objects.
         * ```typescript
         * movingEnds(event: IColumnMovingEndEventArgs){
         *     const movingEnds = event;
         * }
         * ```
         * ```html
         * <igx-grid [columnHiding]="true" [showToolbar]="true" (onColumnMovingEnd)="movingEnds($event)"></igx-grid>
         * ```
         * \@memberof IgxGridBaseComponent
         */
        _this.onColumnMovingEnd = new EventEmitter();
        /**
         * Emitted when keydown is triggered over element inside grid's body.
         * This event is fired only if the key combination is supported in the grid.
         * Return the target type, target object and the original event. This event is cancelable.
         * ```typescript
         * customKeydown(args: IGridKeydownEventArgs) {
         *  const keydownEvent = args.event;
         * }
         * ```
         * ```html
         *  <igx-grid (onGridKeydown)="customKeydown($event)"></igx-grid>
         * ```
         */
        _this.onGridKeydown = new EventEmitter();
        /**
         * Emitted when start dragging a row.
         * Return the dragged row.
         */
        _this.onRowDragStart = new EventEmitter();
        /**
         * Emitted when dropping a row.
         * Return the dropped row.
         */
        _this.onRowDragEnd = new EventEmitter();
        /**
         * Emitted when a copy operation is executed.
         * Fired only if copy behavior is enabled through the [`clipboardOptions`]{\@link IgxGridBaseComponent#clipboardOptions}.
         */
        _this.onGridCopy = new EventEmitter();
        /**
         * @hidden
         */
        _this.tabindex = 0;
        /**
         * @hidden
         */
        _this.hostRole = 'grid';
        /**
         * @hidden
         */
        _this.columnsWithNoSetWidths = null;
        /* Toolbar related definitions */
        _this._showToolbar = false;
        _this._exportExcel = false;
        _this._exportCsv = false;
        _this._toolbarTitle = null;
        _this._exportText = null;
        _this._exportExcelText = null;
        _this._exportCsvText = null;
        _this._rowEditable = false;
        _this._filteredSortedData = null;
        /**
         * Provides access to the `IgxToolbarComponent`.
         * ```typescript
         * const gridToolbar = this.grid.toolbar;
         * ```
         * \@memberof IgxGridBaseComponent
         */
        _this.toolbar = null;
        _this.toolbarHtml = null;
        /**
         * Controls the copy behavior of the grid.
         */
        _this.clipboardOptions = {
            /**
             * Enables/disables the copy behavior
             */
            enabled: true,
            /**
             * Include the columns headers in the clipboard output.
             */
            copyHeaders: true,
            /**
             * Apply the columns formatters (if any) on the data in the clipboard output.
             */
            copyFormatters: true,
            /**
             * The separator used for formatting the copy output. Defaults to `\t`.
             */
            separator: '\t'
        };
        /**
         * Emitted when an export process is initiated by the user.
         * ```typescript
         * toolbarExporting(event: IGridToolbarExportEventArgs){
         *     const toolbarExporting = event;
         * }
         * ```
         * \@memberof IgxGridBaseComponent
         */
        _this.onToolbarExporting = new EventEmitter();
        /* End of toolbar related definitions */
        /**
         * Emitted when making a range selection either through
         * drag selection or through keyboard selection.
         */
        _this.onRangeSelection = new EventEmitter();
        /**
         * @hidden
         */
        _this.calcHeight = 0;
        /**
         * @hidden
         */
        _this.chipsGoupingExpressions = [];
        /**
         * @hidden
         */
        _this.allRowsSelected = false;
        /**
         * @hidden
         */
        _this.disableTransitions = false;
        /**
         * @hidden
         */
        _this.lastSearchInfo = {
            searchText: '',
            caseSensitive: false,
            exactMatch: false,
            activeMatchIndex: 0,
            matchInfoCache: []
        };
        /**
         * @hidden
         */
        _this.columnWidthSetByUser = false;
        // abstract dataLength;
        /**
         * @hidden
         */
        _this.destroy$ = new Subject();
        /**
         * @hidden
         */
        _this._perPage = 15;
        /**
         * @hidden
         */
        _this._page = 0;
        /**
         * @hidden
         */
        _this._paging = false;
        /**
         * @hidden
         */
        _this._rowSelection = false;
        /**
         * @hidden
         */
        _this._rowDrag = false;
        /**
         * @hidden
         */
        _this._pipeTrigger = 0;
        /**
         * @hidden
         */
        _this._summaryPipeTrigger = 0;
        /**
         * @hidden
         */
        _this._columns = [];
        /**
         * @hidden
         */
        _this._pinnedColumns = [];
        /**
         * @hidden
         */
        _this._unpinnedColumns = [];
        /**
         * @hidden
         */
        _this._filteringExpressionsTree = new FilteringExpressionsTree(FilteringLogic.And);
        /**
         * @hidden
         */
        _this._sortingExpressions = [];
        /**
         * @hidden
         */
        _this._maxLevelHeaderDepth = null;
        /**
         * @hidden
         */
        _this._columnHiding = false;
        /**
         * @hidden
         */
        _this._columnPinning = false;
        /**
         * @hidden
         */
        _this._keydownListener = null;
        /**
         * @hidden
         */
        _this._vScrollListener = null;
        /**
         * @hidden
         */
        _this._hScrollListener = null;
        /**
         * @hidden
         */
        _this._wheelListener = null;
        _this._allowFiltering = false;
        _this._filterMode = FilterMode.quickFilter;
        _this._hiddenColumnsText = '';
        _this._pinnedColumnsText = '';
        _this._height = '100%';
        _this._width = '100%';
        _this._autoSize = false;
        _this._ngAfterViewInitPassed = false;
        _this._multiRowLayoutRowSize = 1;
        // Caches
        _this._totalWidth = NaN;
        _this._pinnedVisible = [];
        _this._unpinnedVisible = [];
        _this._pinnedWidth = NaN;
        _this._unpinnedWidth = NaN;
        _this._visibleColumns = [];
        _this._columnGroups = false;
        _this._defaultTargetRecordNumber = 10;
        _this._onFocusChange = new EventEmitter();
        _this._summaryPosition = GridSummaryPosition.bottom;
        _this._summaryCalculationMode = GridSummaryCalculationMode.rootAndChildLevels;
        _this.rowEditPositioningStrategy = new ContainerPositioningStrategy({
            horizontalDirection: HorizontalAlignment.Right,
            verticalDirection: VerticalAlignment.Bottom,
            horizontalStartPoint: HorizontalAlignment.Left,
            verticalStartPoint: VerticalAlignment.Bottom,
            closeAnimation: null
        });
        _this.rowEditSettings = {
            scrollStrategy: new AbsoluteScrollStrategy(),
            modal: false,
            closeOnOutsideClick: false,
            outlet: _this.rowOutletDirective,
            positionStrategy: _this.rowEditPositioningStrategy
        };
        _this.cdr.detach();
        _this.resizeHandler = function () {
            _this.zone.run(function () { return _this.calculateGridSizes(); });
        };
        return _this;
    }
    Object.defineProperty(IgxGridBaseComponent.prototype, "scrollWidth", {
        get: /**
         * @return {?}
         */
        function () {
            return this._scrollWidth;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxGridBaseComponent.prototype, "resourceStrings", {
        /**
         * An accessor that returns the resource strings.
        */
        get: /**
         * An accessor that returns the resource strings.
         * @return {?}
         */
        function () {
            return this._resourceStrings;
        },
        /**
         * An accessor that sets the resource strings.
         * By default it uses EN resources.
        */
        set: /**
         * An accessor that sets the resource strings.
         * By default it uses EN resources.
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._resourceStrings = Object.assign({}, this._resourceStrings, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxGridBaseComponent.prototype, "filteringLogic", {
        get: /**
         * @return {?}
         */
        function () {
            return this._filteringExpressionsTree.operator;
        },
        /**
         * Sets the filtering logic of the `IgxGridComponent`.
         * The default is AND.
         * ```html
         * <igx-grid [data]="Data" [autoGenerate]="true" [filteringLogic]="filtering"></igx-grid>
         * ```
         * @memberof IgxGridBaseComponent
         */
        set: /**
         * Sets the filtering logic of the `IgxGridComponent`.
         * The default is AND.
         * ```html
         * <igx-grid [data]="Data" [autoGenerate]="true" [filteringLogic]="filtering"></igx-grid>
         * ```
         * \@memberof IgxGridBaseComponent
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._filteringExpressionsTree.operator = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxGridBaseComponent.prototype, "filteringExpressionsTree", {
        /**
         * Returns the filtering state of `IgxGridComponent`.
         * ```typescript
         * let filteringExpressionsTree = this.grid.filteringExpressionsTree;
         * ```
         * @memberof IgxGridBaseComponent
         */
        get: /**
         * Returns the filtering state of `IgxGridComponent`.
         * ```typescript
         * let filteringExpressionsTree = this.grid.filteringExpressionsTree;
         * ```
         * \@memberof IgxGridBaseComponent
         * @return {?}
         */
        function () {
            return this._filteringExpressionsTree;
        },
        /**
         * Sets the filtering state of the `IgxGridComponent`.
         * ```typescript
         * const logic = new FilteringExpressionsTree(FilteringLogic.And, "ID");
         * logic.filteringOperands = [
         *     {
         *          condition: IgxNumberFilteringOperand.instance().condition('greaterThan'),
         *          fieldName: 'ID',
         *          searchVal: 1
         *     }
         * ];
         * this.grid.filteringExpressionsTree = (logic);
         * ```
         * @memberof IgxGridBaseComponent
         */
        set: /**
         * Sets the filtering state of the `IgxGridComponent`.
         * ```typescript
         * const logic = new FilteringExpressionsTree(FilteringLogic.And, "ID");
         * logic.filteringOperands = [
         *     {
         *          condition: IgxNumberFilteringOperand.instance().condition('greaterThan'),
         *          fieldName: 'ID',
         *          searchVal: 1
         *     }
         * ];
         * this.grid.filteringExpressionsTree = (logic);
         * ```
         * \@memberof IgxGridBaseComponent
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value && value instanceof FilteringExpressionsTree) {
                /** @type {?} */
                var val = ((/** @type {?} */ (value)));
                for (var index = 0; index < val.filteringOperands.length; index++) {
                    if (!(val.filteringOperands[index] instanceof FilteringExpressionsTree)) {
                        /** @type {?} */
                        var newExpressionsTree = new FilteringExpressionsTree(FilteringLogic.And, val.filteringOperands[index].fieldName);
                        newExpressionsTree.filteringOperands.push((/** @type {?} */ (val.filteringOperands[index])));
                        val.filteringOperands[index] = newExpressionsTree;
                    }
                }
                // clone the filtering expression tree in order to trigger the filtering pipe
                /** @type {?} */
                var filteringExpressionTreeClone = new FilteringExpressionsTree(value.operator, value.fieldName);
                filteringExpressionTreeClone.filteringOperands = value.filteringOperands;
                this._filteringExpressionsTree = filteringExpressionTreeClone;
                if (this.filteringService.isFilteringExpressionsTreeEmpty()) {
                    this.filteredData = null;
                }
                this.filteringService.refreshExpressions();
                this.summaryService.clearSummaryCache();
                this.markForCheck();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxGridBaseComponent.prototype, "locale", {
        /**
         * Returns the locale of the grid.
         * If not set, returns browser's language.
         */
        get: /**
         * Returns the locale of the grid.
         * If not set, returns browser's language.
         * @return {?}
         */
        function () {
            if (this._locale) {
                return this._locale;
            }
            else {
                return 'en';
            }
        },
        /**
         * Sets the locale of the grid.
         */
        set: /**
         * Sets the locale of the grid.
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._locale = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxGridBaseComponent.prototype, "paging", {
        /**
         * Returns whether the paging feature is enabled/disabled.
         * The default state is disabled (false).
         * ```
         * const paging = this.grid.paging;
         * ```
         * @memberof IgxGridBaseComponent
         */
        get: /**
         * Returns whether the paging feature is enabled/disabled.
         * The default state is disabled (false).
         * ```
         * const paging = this.grid.paging;
         * ```
         * \@memberof IgxGridBaseComponent
         * @return {?}
         */
        function () {
            return this._paging;
        },
        /**
         * Enables/Disables the paging feature.
         * ```html
         * <igx-grid #grid [data]="Data" [autoGenerate]="true" [paging]="true"></igx-grid>
         * ```
         * @memberof IgxGridBaseComponent
         */
        set: /**
         * Enables/Disables the paging feature.
         * ```html
         * <igx-grid #grid [data]="Data" [autoGenerate]="true" [paging]="true"></igx-grid>
         * ```
         * \@memberof IgxGridBaseComponent
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._paging = value;
            this._pipeTrigger++;
            if (this._ngAfterViewInitPassed) {
                this.cdr.detectChanges();
                this.calculateGridHeight();
                this.cdr.detectChanges();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxGridBaseComponent.prototype, "page", {
        /**
         * Returns the current page index.
         * ```html
         * let gridPage = this.grid.page;
         * ```
         * @memberof IgxGridBaseComponent
         */
        get: /**
         * Returns the current page index.
         * ```html
         * let gridPage = this.grid.page;
         * ```
         * \@memberof IgxGridBaseComponent
         * @return {?}
         */
        function () {
            return this._page;
        },
        /**
         * Sets the current page index.
         * <igx-grid #grid [data]="Data" [paging]="true" [page]="5" [autoGenerate]="true"></igx-grid>
         */
        set: /**
         * Sets the current page index.
         * <igx-grid #grid [data]="Data" [paging]="true" [page]="5" [autoGenerate]="true"></igx-grid>
         * @param {?} val
         * @return {?}
         */
        function (val) {
            if (val === this._page || val < 0 || val > this.totalPages - 1) {
                return;
            }
            this.onPagingDone.emit({ previous: this._page, current: val });
            this._page = val;
            this.cdr.markForCheck();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxGridBaseComponent.prototype, "perPage", {
        /**
         * Returns the number of visible items per page of the `IgxGridComponent`.
         * The default is 15.
         * ```html
         * let itemsPerPage = this.grid.perPage;
         * ```
         * @memberof IgxGridBaseComponent
         */
        get: /**
         * Returns the number of visible items per page of the `IgxGridComponent`.
         * The default is 15.
         * ```html
         * let itemsPerPage = this.grid.perPage;
         * ```
         * \@memberof IgxGridBaseComponent
         * @return {?}
         */
        function () {
            return this._perPage;
        },
        /**
         * Sets the number of visible items per page of the `IgxGridComponent`.
         * ```html
         * <igx-grid #grid [data]="Data" [paging]="true" [perPage]="5" [autoGenerate]="true"></igx-grid>
         * ```
         * @memberof IgxGridBaseComponent
         */
        set: /**
         * Sets the number of visible items per page of the `IgxGridComponent`.
         * ```html
         * <igx-grid #grid [data]="Data" [paging]="true" [perPage]="5" [autoGenerate]="true"></igx-grid>
         * ```
         * \@memberof IgxGridBaseComponent
         * @param {?} val
         * @return {?}
         */
        function (val) {
            if (val < 0) {
                return;
            }
            this.selectionService.clear();
            this._perPage = val;
            this.page = 0;
            this.endEdit(true);
            this.cdr.markForCheck();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxGridBaseComponent.prototype, "columnHiding", {
        /**
         * Returns whether the column hiding UI for the `IgxGridComponent` is enabled.
         * By default it is disabled (false).
         * ```typescript
         * let gridColHiding = this.grid.columnHiding;
         * ```
         * @memberof IgxGridBaseComponent
         */
        get: /**
         * Returns whether the column hiding UI for the `IgxGridComponent` is enabled.
         * By default it is disabled (false).
         * ```typescript
         * let gridColHiding = this.grid.columnHiding;
         * ```
         * \@memberof IgxGridBaseComponent
         * @return {?}
         */
        function () {
            return this._columnHiding;
        },
        /**
         * Sets whether the column hiding UI for the `IgxGridComponent` is enabled.
         * In order for the UI to work, you need to enable the toolbar as shown in the example below.
         * ```html
         * <igx-grid [data]="Data" [autoGenerate]="true" [showToolbar]="true" [columnHiding]="true"></igx-grid>
         * ```
         * @memberof IgxGridBaseComponent
         */
        set: /**
         * Sets whether the column hiding UI for the `IgxGridComponent` is enabled.
         * In order for the UI to work, you need to enable the toolbar as shown in the example below.
         * ```html
         * <igx-grid [data]="Data" [autoGenerate]="true" [showToolbar]="true" [columnHiding]="true"></igx-grid>
         * ```
         * \@memberof IgxGridBaseComponent
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (this._columnHiding !== value) {
                this._columnHiding = value;
                if (this.gridAPI.grid) {
                    this.markForCheck();
                    if (this._ngAfterViewInitPassed) {
                        this.calculateGridSizes();
                    }
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxGridBaseComponent.prototype, "rowSelectable", {
        /**
         * Sets whether the `IgxGridRowComponent` selection is enabled.
         * By default it is set to false.
         * ```typescript
         * let rowSelectable = this.grid.rowSelectable;
         * ```
         * @memberof IgxGridBaseComponent
         */
        get: /**
         * Sets whether the `IgxGridRowComponent` selection is enabled.
         * By default it is set to false.
         * ```typescript
         * let rowSelectable = this.grid.rowSelectable;
         * ```
         * \@memberof IgxGridBaseComponent
         * @return {?}
         */
        function () {
            return this._rowSelection;
        },
        /**
         * Sets whether rows can be selected.
         * ```html
         * <igx-grid #grid [showToolbar]="true" [rowSelectable]="true" [columnHiding]="true"></igx-grid>
         * ```
         * @memberof IgxGridBaseComponent
         */
        set: /**
         * Sets whether rows can be selected.
         * ```html
         * <igx-grid #grid [showToolbar]="true" [rowSelectable]="true" [columnHiding]="true"></igx-grid>
         * ```
         * \@memberof IgxGridBaseComponent
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._rowSelection = val;
            if (this.gridAPI.grid && this.columnList) {
                // should selection persist?
                this.allRowsSelected = false;
                this.deselectAllRows();
                this.calculateGridSizes();
                this.cdr.markForCheck();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxGridBaseComponent.prototype, "rowDraggable", {
        get: /**
         * @return {?}
         */
        function () {
            return this._rowDrag;
        },
        /**
         * Sets whether rows can be moved.
         * ```html
         * <igx-grid #grid [rowDraggable]="true"></igx-grid>
         * ```
         * @memberof IgxGridBaseComponent
         */
        set: /**
         * Sets whether rows can be moved.
         * ```html
         * <igx-grid #grid [rowDraggable]="true"></igx-grid>
         * ```
         * \@memberof IgxGridBaseComponent
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._rowDrag = val;
            if (this.gridAPI.grid && this.columnList) {
                this.calculateGridSizes();
                this.cdr.markForCheck();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxGridBaseComponent.prototype, "rowEditable", {
        /**
     * Sets whether the `IgxGridRowComponent` is editable.
     * By default it is set to false.
     * ```typescript
     * let rowEditable = this.grid.rowEditable;
     * ```
     * @memberof IgxGridBaseComponent
     */
        get: /**
         * Sets whether the `IgxGridRowComponent` is editable.
         * By default it is set to false.
         * ```typescript
         * let rowEditable = this.grid.rowEditable;
         * ```
         * \@memberof IgxGridBaseComponent
         * @return {?}
         */
        function () {
            return this._rowEditable;
        },
        /**
        * Sets whether rows can be edited.
        * ```html
        * <igx-grid #grid [showToolbar]="true" [rowEditable]="true" [primaryKey]="'ProductID'" [columnHiding]="true"></igx-grid>
        * ```
        * @memberof IgxGridBaseComponent
        */
        set: /**
         * Sets whether rows can be edited.
         * ```html
         * <igx-grid #grid [showToolbar]="true" [rowEditable]="true" [primaryKey]="'ProductID'" [columnHiding]="true"></igx-grid>
         * ```
         * \@memberof IgxGridBaseComponent
         * @param {?} val
         * @return {?}
         */
        function (val) {
            if (this.gridAPI.grid) {
                this.refreshGridState();
            }
            this._rowEditable = val;
            this.cdr.markForCheck();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxGridBaseComponent.prototype, "height", {
        /**
         * Returns the height of the `IgxGridComponent`.
         * ```typescript
         * let gridHeight = this.grid.height;
         * ```
         * @memberof IgxGridBaseComponent
         */
        get: /**
         * Returns the height of the `IgxGridComponent`.
         * ```typescript
         * let gridHeight = this.grid.height;
         * ```
         * \@memberof IgxGridBaseComponent
         * @return {?}
         */
        function () {
            return this._height;
        },
        /**
         * Sets the height of the `IgxGridComponent`.
         * ```html
         * <igx-grid #grid [data]="Data" [height]="'305px'" [autoGenerate]="true"></igx-grid>
         * ```
         * @memberof IgxGridBaseComponent
         */
        set: /**
         * Sets the height of the `IgxGridComponent`.
         * ```html
         * <igx-grid #grid [data]="Data" [height]="'305px'" [autoGenerate]="true"></igx-grid>
         * ```
         * \@memberof IgxGridBaseComponent
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (this._height !== value) {
                this._height = value;
                this._autoSize = false;
                this.nativeElement.style.height = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxGridBaseComponent.prototype, "width", {
        /**
         * Returns the width of the `IgxGridComponent`.
         * ```typescript
         * let gridWidth = this.grid.width;
         * ```
         * @memberof IgxGridBaseComponent
         */
        get: /**
         * Returns the width of the `IgxGridComponent`.
         * ```typescript
         * let gridWidth = this.grid.width;
         * ```
         * \@memberof IgxGridBaseComponent
         * @return {?}
         */
        function () {
            return this._width;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (this._width !== value) {
                this._width = value;
                this.nativeElement.style.width = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxGridBaseComponent.prototype, "headerWidth", {
        /**
         * Returns the width of the header of the `IgxGridComponent`.
         * ```html
         * let gridHeaderWidth = this.grid.headerWidth;
         * ```
         * @memberof IgxGridBaseComponent
         */
        get: /**
         * Returns the width of the header of the `IgxGridComponent`.
         * ```html
         * let gridHeaderWidth = this.grid.headerWidth;
         * ```
         * \@memberof IgxGridBaseComponent
         * @return {?}
         */
        function () {
            return parseInt(this.width, 10) - 17;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxGridBaseComponent.prototype, "rowHeight", {
        /**
         * Returns the row height.
         * ```typescript
         * const rowHeight = this.grid.rowHeight;
         * ```
         * @memberof IgxGridBaseComponent
         */
        get: /**
         * Returns the row height.
         * ```typescript
         * const rowHeight = this.grid.rowHeight;
         * ```
         * \@memberof IgxGridBaseComponent
         * @return {?}
         */
        function () {
            return this._rowHeight ? this._rowHeight : this.defaultRowHeight;
        },
        /**
         * Sets the row height.
         * ```html
         * <igx-grid #grid [data]="localData" [showToolbar]="true" [rowHeight]="100" [autoGenerate]="true"></igx-grid>
         * ```
         * @memberof IgxGridBaseComponent
         */
        set: /**
         * Sets the row height.
         * ```html
         * <igx-grid #grid [data]="localData" [showToolbar]="true" [rowHeight]="100" [autoGenerate]="true"></igx-grid>
         * ```
         * \@memberof IgxGridBaseComponent
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._rowHeight = parseInt(value, 10);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxGridBaseComponent.prototype, "columnWidth", {
        /**
         * An @Input property that sets the default width of the `IgxGridComponent`'s columns.
         * ```html
         * <igx-grid #grid [data]="localData" [showToolbar]="true" [columnWidth]="100" [autoGenerate]="true"></igx-grid>
         * ```
         * @memberof IgxGridBaseComponent
         */
        get: /**
         * An \@Input property that sets the default width of the `IgxGridComponent`'s columns.
         * ```html
         * <igx-grid #grid [data]="localData" [showToolbar]="true" [columnWidth]="100" [autoGenerate]="true"></igx-grid>
         * ```
         * \@memberof IgxGridBaseComponent
         * @return {?}
         */
        function () {
            return this._columnWidth;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._columnWidth = value;
            this.columnWidthSetByUser = true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxGridBaseComponent.prototype, "emptyGridMessage", {
        /**
         * An accessor that returns the message displayed when there are no records.
        */
        get: /**
         * An accessor that returns the message displayed when there are no records.
         * @return {?}
         */
        function () {
            return this._emptyGridMessage || this.resourceStrings.igx_grid_emptyGrid_message;
        },
        /**
         * An @Input property that sets the message displayed when there are no records.
         * ```html
         * <igx-grid #grid [data]="Data" [emptyGridMessage]="'The grid is empty'" [autoGenerate]="true"></igx-grid>
         * ```
         * @memberof IgxGridBaseComponent
         */
        set: /**
         * An \@Input property that sets the message displayed when there are no records.
         * ```html
         * <igx-grid #grid [data]="Data" [emptyGridMessage]="'The grid is empty'" [autoGenerate]="true"></igx-grid>
         * ```
         * \@memberof IgxGridBaseComponent
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._emptyGridMessage = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxGridBaseComponent.prototype, "isLoading", {
        /**
         * An accessor that returns whether the grid is showing loading indicator.
         */
        get: /**
         * An accessor that returns whether the grid is showing loading indicator.
         * @return {?}
         */
        function () {
            return this._isLoading;
        },
        /**
         * An @Input property that sets whether the grid is going to show loading indicator.
         * ```html
         * <igx-grid #grid [data]="Data" [isLoading]="true" [autoGenerate]="true"></igx-grid>
         * ```
         * @memberof IgxGridBaseComponent
         */
        set: /**
         * An \@Input property that sets whether the grid is going to show loading indicator.
         * ```html
         * <igx-grid #grid [data]="Data" [isLoading]="true" [autoGenerate]="true"></igx-grid>
         * ```
         * \@memberof IgxGridBaseComponent
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._isLoading = value;
            if (this.gridAPI.grid) {
                this.markForCheck();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxGridBaseComponent.prototype, "emptyFilteredGridMessage", {
        /**
         * An accessor that returns the message displayed when there are no records and the grid is filtered.
        */
        get: /**
         * An accessor that returns the message displayed when there are no records and the grid is filtered.
         * @return {?}
         */
        function () {
            return this._emptyFilteredGridMessage || this.resourceStrings.igx_grid_emptyFilteredGrid_message;
        },
        /**
         * An @Input property that sets the message displayed when there are no records and the grid is filtered.
         * ```html
         * <igx-grid #grid [data]="Data" [emptyGridMessage]="'The grid is empty'" [autoGenerate]="true"></igx-grid>
         * ```
         * @memberof IgxGridBaseComponent
         */
        set: /**
         * An \@Input property that sets the message displayed when there are no records and the grid is filtered.
         * ```html
         * <igx-grid #grid [data]="Data" [emptyGridMessage]="'The grid is empty'" [autoGenerate]="true"></igx-grid>
         * ```
         * \@memberof IgxGridBaseComponent
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._emptyFilteredGridMessage = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxGridBaseComponent.prototype, "columnPinning", {
        /**
         * Returns if the built-in column pinning UI should be shown in the toolbar.
         * ```typescript
         *  let colPinning = this.grid.columnPinning;
         * ```
         * @memberof IgxGridBaseComponent
         */
        get: /**
         * Returns if the built-in column pinning UI should be shown in the toolbar.
         * ```typescript
         *  let colPinning = this.grid.columnPinning;
         * ```
         * \@memberof IgxGridBaseComponent
         * @return {?}
         */
        function () {
            return this._columnPinning;
        },
        /**
         * Sets if the built-in column pinning UI should be shown in the toolbar.
         * By default it's disabled.
         * ```html
         * <igx-grid #grid [data]="localData" [columnPinning]="'true" [height]="'305px'" [autoGenerate]="true"></igx-grid>
         * ```
         * @memberof IgxGridBaseComponent
         */
        set: /**
         * Sets if the built-in column pinning UI should be shown in the toolbar.
         * By default it's disabled.
         * ```html
         * <igx-grid #grid [data]="localData" [columnPinning]="'true" [height]="'305px'" [autoGenerate]="true"></igx-grid>
         * ```
         * \@memberof IgxGridBaseComponent
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (this._columnPinning !== value) {
                this._columnPinning = value;
                if (this.gridAPI.grid) {
                    this.markForCheck();
                    if (this._ngAfterViewInitPassed) {
                        this.calculateGridSizes();
                    }
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxGridBaseComponent.prototype, "allowFiltering", {
        /**
         * Returns if the filtering is enabled.
         * ```typescript
         *  let filtering = this.grid.allowFiltering;
         * ```
         * @memberof IgxGridBaseComponent
         */
        get: /**
         * Returns if the filtering is enabled.
         * ```typescript
         *  let filtering = this.grid.allowFiltering;
         * ```
         * \@memberof IgxGridBaseComponent
         * @return {?}
         */
        function () {
            return this._allowFiltering;
        },
        /**
         * Sets if the filtering is enabled.
         * By default it's disabled.
         * ```html
         * <igx-grid #grid [data]="localData" [allowFiltering]="'true" [height]="'305px'" [autoGenerate]="true"></igx-grid>
         * ```
         * @memberof IgxGridBaseComponent
         */
        set: /**
         * Sets if the filtering is enabled.
         * By default it's disabled.
         * ```html
         * <igx-grid #grid [data]="localData" [allowFiltering]="'true" [height]="'305px'" [autoGenerate]="true"></igx-grid>
         * ```
         * \@memberof IgxGridBaseComponent
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (this._allowFiltering !== value) {
                this._allowFiltering = value;
                if (this.calcHeight) {
                    this.calcHeight += value ? -FILTER_ROW_HEIGHT : FILTER_ROW_HEIGHT;
                }
                if (this._ngAfterViewInitPassed) {
                    if (this.maxLevelHeaderDepth) {
                        this.theadRow.nativeElement.style.height = (this.maxLevelHeaderDepth + 1) * this.defaultRowHeight +
                            (value && this.filterMode === FilterMode.quickFilter ? FILTER_ROW_HEIGHT : 0) + 1 + "px";
                    }
                }
                this.filteringService.isFilterRowVisible = false;
                this.filteringService.filteredColumn = null;
                this.filteringService.registerSVGIcons();
                if (this.gridAPI.grid) {
                    this.markForCheck();
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxGridBaseComponent.prototype, "filterMode", {
        /**
         * Returns the filter mode.
         * ```typescript
         *  let filtering = this.grid.filterMode;
         * ```
         * @memberof IgxGridBaseComponent
         */
        get: /**
         * Returns the filter mode.
         * ```typescript
         *  let filtering = this.grid.filterMode;
         * ```
         * \@memberof IgxGridBaseComponent
         * @return {?}
         */
        function () {
            return this._filterMode;
        },
        /**
         * Sets filter mode.
         * By default it's set to FilterMode.quickFilter.
         * ```html
         * <igx-grid #grid [data]="localData" [filterMode]="'quickFilter'" [height]="'305px'" [autoGenerate]="true"></igx-grid>
         * ```
         * @memberof IgxGridBaseComponent
         */
        set: /**
         * Sets filter mode.
         * By default it's set to FilterMode.quickFilter.
         * ```html
         * <igx-grid #grid [data]="localData" [filterMode]="'quickFilter'" [height]="'305px'" [autoGenerate]="true"></igx-grid>
         * ```
         * \@memberof IgxGridBaseComponent
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._filterMode = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxGridBaseComponent.prototype, "summaryPosition", {
        /**
         * Returns the summary position.
         * ```typescript
         *  let summaryPosition = this.grid.summaryPosition;
         * ```
         * @memberof IgxGridBaseComponent
         */
        get: /**
         * Returns the summary position.
         * ```typescript
         *  let summaryPosition = this.grid.summaryPosition;
         * ```
         * \@memberof IgxGridBaseComponent
         * @return {?}
         */
        function () {
            return this._summaryPosition;
        },
        /**
         * Sets summary position.
         * By default it is bottom.
         * ```html
         * <igx-grid #grid [data]="localData" summaryPosition="top" [autoGenerate]="true"></igx-grid>
         * ```
         * @memberof IgxGridBaseComponent
         */
        set: /**
         * Sets summary position.
         * By default it is bottom.
         * ```html
         * <igx-grid #grid [data]="localData" summaryPosition="top" [autoGenerate]="true"></igx-grid>
         * ```
         * \@memberof IgxGridBaseComponent
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._summaryPosition = value;
            if (this.gridAPI.grid) {
                this.markForCheck();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxGridBaseComponent.prototype, "summaryCalculationMode", {
        /**
         * Returns the summary calculation mode.
         * ```typescript
         *  let summaryCalculationMode = this.grid.summaryCalculationMode;
         * ```
         * @memberof IgxGridBaseComponent
         */
        get: /**
         * Returns the summary calculation mode.
         * ```typescript
         *  let summaryCalculationMode = this.grid.summaryCalculationMode;
         * ```
         * \@memberof IgxGridBaseComponent
         * @return {?}
         */
        function () {
            return this._summaryCalculationMode;
        },
        /**
         * Sets summary calculation mode.
         * By default it is rootAndChildLevels which means the summaries are calculated for the root level and each child level.
         * ```html
         * <igx-grid #grid [data]="localData" summaryCalculationMode="rootLevelOnly" [autoGenerate]="true"></igx-grid>
         * ```
         * @memberof IgxGridBaseComponent
         */
        set: /**
         * Sets summary calculation mode.
         * By default it is rootAndChildLevels which means the summaries are calculated for the root level and each child level.
         * ```html
         * <igx-grid #grid [data]="localData" summaryCalculationMode="rootLevelOnly" [autoGenerate]="true"></igx-grid>
         * ```
         * \@memberof IgxGridBaseComponent
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._summaryCalculationMode = value;
            if (this.gridAPI.grid) {
                this.summaryService.resetSummaryHeight();
                this.endEdit(true);
                this.calculateGridHeight();
                this.cdr.markForCheck();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxGridBaseComponent.prototype, "onFocusChange", {
        /**
         * @deprecated you should use onGridKeydown event
         */
        get: /**
         * @deprecated you should use onGridKeydown event
         * @return {?}
         */
        function () {
            return this._onFocusChange;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._onFocusChange = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxGridBaseComponent.prototype, "headerGroupsList", {
        /**
         * A list of all `IgxGridHeaderGroupComponent`.
         * ```typescript
         * const headerGroupsList = this.grid.headerGroupsList;
         * ```
         * @memberof IgxGridBaseComponent
         */
        get: /**
         * A list of all `IgxGridHeaderGroupComponent`.
         * ```typescript
         * const headerGroupsList = this.grid.headerGroupsList;
         * ```
         * \@memberof IgxGridBaseComponent
         * @return {?}
         */
        function () {
            return this.headerGroups ? flatten(this.headerGroups.toArray()) : [];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxGridBaseComponent.prototype, "headerCellList", {
        /**
         * A list of all `IgxGridHeaderComponent`.
         * ```typescript
         * const headers = this.grid.headerCellList;
         * ```
         * @memberof IgxGridBaseComponent
         */
        get: /**
         * A list of all `IgxGridHeaderComponent`.
         * ```typescript
         * const headers = this.grid.headerCellList;
         * ```
         * \@memberof IgxGridBaseComponent
         * @return {?}
         */
        function () {
            return this.headerGroupsList.map(function (headerGroup) { return headerGroup.headerCell; }).filter(function (headerCell) { return headerCell; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxGridBaseComponent.prototype, "filterCellList", {
        /**
         * A list of all `IgxGridFilteringCellComponent`.
         * ```typescript
         * const filterCells = this.grid.filterCellList;
         * ```
         * @memberof IgxGridBaseComponent
         */
        get: /**
         * A list of all `IgxGridFilteringCellComponent`.
         * ```typescript
         * const filterCells = this.grid.filterCellList;
         * ```
         * \@memberof IgxGridBaseComponent
         * @return {?}
         */
        function () {
            return this.headerGroupsList.map(function (headerGroup) { return headerGroup.filterCell; }).filter(function (filterCell) { return filterCell; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxGridBaseComponent.prototype, "summariesRowList", {
        get: /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var res = new QueryList();
            if (!this._summaryRowList) {
                return res;
            }
            /** @type {?} */
            var sumList = this._summaryRowList.filter(function (item) {
                return item.element.nativeElement.parentElement !== null;
            });
            res.reset(sumList);
            return res;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxGridBaseComponent.prototype, "rowList", {
        /**
         * A list of `IgxGridRowComponent`.
         * ```typescript
         * const rowList = this.grid.rowList;
         * ```
         * @memberof IgxGridBaseComponent
         */
        get: /**
         * A list of `IgxGridRowComponent`.
         * ```typescript
         * const rowList = this.grid.rowList;
         * ```
         * \@memberof IgxGridBaseComponent
         * @return {?}
         */
        function () {
            /** @type {?} */
            var res = new QueryList();
            if (!this._rowList) {
                return res;
            }
            /** @type {?} */
            var rList = this._rowList
                .filter(function (item) {
                return item.element.nativeElement.parentElement !== null;
            })
                .sort(function (a, b) {
                return a.index - b.index;
            });
            res.reset(rList);
            return res;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxGridBaseComponent.prototype, "dataRowList", {
        /**
         * A list of `IgxGridRowComponent`, currently rendered.
         * ```typescript
         * const dataList = this.grid.dataRowList;
         * ```
         * @memberof IgxGridBaseComponent
         */
        get: /**
         * A list of `IgxGridRowComponent`, currently rendered.
         * ```typescript
         * const dataList = this.grid.dataRowList;
         * ```
         * \@memberof IgxGridBaseComponent
         * @return {?}
         */
        function () {
            /** @type {?} */
            var res = new QueryList();
            if (!this._dataRowList) {
                return res;
            }
            /** @type {?} */
            var rList = this._dataRowList.filter(function (item) {
                return item.element.nativeElement.parentElement !== null;
            }).sort(function (a, b) {
                return a.index - b.index;
            });
            res.reset(rList);
            return res;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxGridBaseComponent.prototype, "toolbarCustomContentTemplate", {
        /**
         * Returns the template which will be used by the toolbar to show custom content.
         * ```typescript
         * let customContentTemplate = this.grid.toolbarCustomContentTemplate;
         * ```
         * @memberof IgxGridBaseComponent
         */
        get: /**
         * Returns the template which will be used by the toolbar to show custom content.
         * ```typescript
         * let customContentTemplate = this.grid.toolbarCustomContentTemplate;
         * ```
         * \@memberof IgxGridBaseComponent
         * @return {?}
         */
        function () {
            return this.toolbarCustomContentTemplates.first;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxGridBaseComponent.prototype, "outletDirective", {
        /**
         * @hidden
         */
        get: /**
         * @hidden
         * @return {?}
         */
        function () {
            return this._outletDirective;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxGridBaseComponent.prototype, "rowOutletDirective", {
        /**
         * @hidden
         */
        get: /**
         * @hidden
         * @return {?}
         */
        function () {
            return this.rowEditingOutletDirective;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxGridBaseComponent.prototype, "parentRowOutletDirective", {
        /**
         * @hidden
         */
        get: /**
         * @hidden
         * @return {?}
         */
        function () {
            return null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxGridBaseComponent.prototype, "rowEditContainer", {
        /** @hidden */
        get: /**
         * @hidden
         * @return {?}
         */
        function () {
            return this.rowEditCustom ? this.rowEditCustom : this.defaultRowEditTemplate;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxGridBaseComponent.prototype, "rowInEditMode", {
        /**
         * @hidden
         */
        get: /**
         * @hidden
         * @return {?}
         */
        function () {
            /** @type {?} */
            var editRowState = this.crudService.row;
            return editRowState !== null ? this.rowList.find(function (e) { return e.rowID === editRowState.id; }) : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxGridBaseComponent.prototype, "firstEditableColumnIndex", {
        /**
         * @hidden
         */
        get: /**
         * @hidden
         * @return {?}
         */
        function () {
            /** @type {?} */
            var index = this.navigation.gridOrderedColumns.findIndex(function (e) { return e.editable; });
            return index !== -1 ? index : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxGridBaseComponent.prototype, "lastEditableColumnIndex", {
        /**
         * @hidden
         */
        get: /**
         * @hidden
         * @return {?}
         */
        function () {
            /** @type {?} */
            var orderedColumns = this.navigation.gridOrderedColumns;
            /** @type {?} */
            var index = orderedColumns.reverse().findIndex(function (e) { return e.editable; });
            return index !== -1 ? orderedColumns.length - 1 - index : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxGridBaseComponent.prototype, "rowEditTabs", {
        /**
         * @hidden
         * TODO: Nav service logic doesn't handle 0 results from this querylist
         */
        get: /**
         * @hidden
         * TODO: Nav service logic doesn't handle 0 results from this querylist
         * @return {?}
         */
        function () {
            return this.rowEditTabsCUSTOM.length ? this.rowEditTabsCUSTOM : this.rowEditTabsDEFAULT;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxGridBaseComponent.prototype, "hostClass", {
        /**
         * @hidden
         */
        get: /**
         * @hidden
         * @return {?}
         */
        function () {
            return this.getComponentDensityClass('igx-grid');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxGridBaseComponent.prototype, "bannerClass", {
        get: /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var position = this.rowEditPositioningStrategy.isTop ? 'igx-banner__border-top' : 'igx-banner__border-bottom';
            return this.getComponentDensityClass('igx-banner') + " " + position;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxGridBaseComponent.prototype, "pipeTrigger", {
        /**
         * @hidden
         */
        get: /**
         * @hidden
         * @return {?}
         */
        function () {
            return this._pipeTrigger;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxGridBaseComponent.prototype, "summaryPipeTrigger", {
        /**
         * @hidden
         */
        get: /**
         * @hidden
         * @return {?}
         */
        function () {
            return this._summaryPipeTrigger;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxGridBaseComponent.prototype, "sortingExpressions", {
        /**
         * Returns the sorting state of the `IgxGridComponent`.
         * ```typescript
         * const sortingState = this.grid.sortingExpressions;
         * ```
         * @memberof IgxGridBaseComponent
         */
        get: /**
         * Returns the sorting state of the `IgxGridComponent`.
         * ```typescript
         * const sortingState = this.grid.sortingExpressions;
         * ```
         * \@memberof IgxGridBaseComponent
         * @return {?}
         */
        function () {
            return this._sortingExpressions;
        },
        /**
         * Sets the sorting state of the `IgxGridComponent`.
         * ```typescript
         * this.grid.sortingExpressions = [{
         *     fieldName: "ID",
         *     dir: SortingDirection.Desc,
         *     ignoreCase: true
         * }];
         * ```
         * @memberof IgxGridBaseComponent
         */
        set: /**
         * Sets the sorting state of the `IgxGridComponent`.
         * ```typescript
         * this.grid.sortingExpressions = [{
         *     fieldName: "ID",
         *     dir: SortingDirection.Desc,
         *     ignoreCase: true
         * }];
         * ```
         * \@memberof IgxGridBaseComponent
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._sortingExpressions = cloneArray(value);
            this.cdr.markForCheck();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxGridBaseComponent.prototype, "maxLevelHeaderDepth", {
        /**
         * @hidden
         */
        get: /**
         * @hidden
         * @return {?}
         */
        function () {
            if (this._maxLevelHeaderDepth === null) {
                this._maxLevelHeaderDepth = this.hasColumnLayouts ?
                    this.columnList.reduce(function (acc, col) { return Math.max(acc, col.rowStart); }, 0) :
                    this.columnList.reduce(function (acc, col) { return Math.max(acc, col.level); }, 0);
            }
            return this._maxLevelHeaderDepth;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxGridBaseComponent.prototype, "hiddenColumnsCount", {
        /**
         * Returns the number of hidden `IgxColumnComponent`.
         * ```typescript
         * const hiddenCol = this.grid.hiddenColumnsCount;
         * ``
         */
        get: /**
         * Returns the number of hidden `IgxColumnComponent`.
         * ```typescript
         * const hiddenCol = this.grid.hiddenColumnsCount;
         * ``
         * @return {?}
         */
        function () {
            return this.columnList.filter(function (col) { return col.columnGroup === false && col.hidden === true; }).length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxGridBaseComponent.prototype, "hiddenColumnsText", {
        /**
         * Returns the text to be displayed inside the toggle button
         * for the built-in column hiding UI of the`IgxColumnComponent`.
         * ```typescript
         * const hiddenColText = this.grid.hiddenColumnsText;
         * ``
         */
        get: /**
         * Returns the text to be displayed inside the toggle button
         * for the built-in column hiding UI of the`IgxColumnComponent`.
         * ```typescript
         * const hiddenColText = this.grid.hiddenColumnsText;
         * ``
         * @return {?}
         */
        function () {
            return this._hiddenColumnsText;
        },
        /**
         * Sets the text to be displayed inside the toggle button
         * for the built-in column hiding UI of the`IgxColumnComponent`.
         * ```typescript
         * <igx-grid [columnHiding]="true" [showToolbar]="true" [hiddenColumnsText]="'Hidden Columns'"></igx-grid>
         * ```
         * @memberof IgxGridBaseComponent
         */
        set: /**
         * Sets the text to be displayed inside the toggle button
         * for the built-in column hiding UI of the`IgxColumnComponent`.
         * ```typescript
         * <igx-grid [columnHiding]="true" [showToolbar]="true" [hiddenColumnsText]="'Hidden Columns'"></igx-grid>
         * ```
         * \@memberof IgxGridBaseComponent
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._hiddenColumnsText = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxGridBaseComponent.prototype, "pinnedColumnsText", {
        /**
         * Returns the text to be displayed inside the toggle button
         * for the built-in column pinning UI of the`IgxColumnComponent`.
         * ```typescript
         * const pinnedText = this.grid.pinnedColumnsText;
         * ```
         * @memberof IgxGridBaseComponent
         */
        get: /**
         * Returns the text to be displayed inside the toggle button
         * for the built-in column pinning UI of the`IgxColumnComponent`.
         * ```typescript
         * const pinnedText = this.grid.pinnedColumnsText;
         * ```
         * \@memberof IgxGridBaseComponent
         * @return {?}
         */
        function () {
            return this._pinnedColumnsText;
        },
        /**
         * Sets the text to be displayed inside the toggle button
         * for the built-in column pinning UI of the`IgxColumnComponent`.
         * ```html
         * <igx-grid [pinnedColumnsText]="'PinnedCols Text" [data]="data" [width]="'100%'" [height]="'500px'"></igx-grid>
         * ```
         * @memberof IgxGridBaseComponent
         */
        set: /**
         * Sets the text to be displayed inside the toggle button
         * for the built-in column pinning UI of the`IgxColumnComponent`.
         * ```html
         * <igx-grid [pinnedColumnsText]="'PinnedCols Text" [data]="data" [width]="'100%'" [height]="'500px'"></igx-grid>
         * ```
         * \@memberof IgxGridBaseComponent
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._pinnedColumnsText = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxGridBaseComponent.prototype, "transactions", {
        /**
         * Get transactions service for the grid.
         */
        get: /**
         * Get transactions service for the grid.
         * @return {?}
         */
        function () {
            return this._transactions;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxGridBaseComponent.prototype, "currentRowState", {
        /**
         * @hidden
        */
        get: /**
         * @hidden
         * @return {?}
         */
        function () {
            return this._currentRowState;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxGridBaseComponent.prototype, "showToolbar", {
        /**
         * Returns whether the `IgxGridComponent`'s toolbar is shown or hidden.
         * ```typescript
         * const toolbarGrid = this.grid.showToolbar;
         * ```
         * @memberof IgxGridBaseComponent
         */
        get: /**
         * Returns whether the `IgxGridComponent`'s toolbar is shown or hidden.
         * ```typescript
         * const toolbarGrid = this.grid.showToolbar;
         * ```
         * \@memberof IgxGridBaseComponent
         * @return {?}
         */
        function () {
            return this._showToolbar;
        },
        /**
         * Shows or hides the `IgxGridComponent`'s toolbar.
         * ```html
         * <igx-grid [data]="localData" [showToolbar]="true" [autoGenerate]="true" ></igx-grid>
         * ```
         * @memberof IgxGridBaseComponent
         */
        set: /**
         * Shows or hides the `IgxGridComponent`'s toolbar.
         * ```html
         * <igx-grid [data]="localData" [showToolbar]="true" [autoGenerate]="true" ></igx-grid>
         * ```
         * \@memberof IgxGridBaseComponent
         * @param {?} newValue
         * @return {?}
         */
        function (newValue) {
            if (this._showToolbar !== newValue) {
                this._showToolbar = newValue;
                this.cdr.markForCheck();
                if (this._ngAfterViewInitPassed) {
                    this.calculateGridSizes();
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxGridBaseComponent.prototype, "toolbarTitle", {
        /**
         * Returns the toolbar's title.
         * ```typescript
         * const toolbarTitle  = this.grid.toolbarTitle;
         * ```
         * @memberof IgxGridBaseComponent
         */
        get: /**
         * Returns the toolbar's title.
         * ```typescript
         * const toolbarTitle  = this.grid.toolbarTitle;
         * ```
         * \@memberof IgxGridBaseComponent
         * @return {?}
         */
        function () {
            return this._toolbarTitle;
        },
        /**
         * Sets the toolbar's title.
         * ```html
         * <igx-grid [data]="localData" [showToolbar]="true" [autoGenerate]="true" [toolbarTitle]="'My Grid'"></igx-grid>
         * ```
         * @memberof IgxGridBaseComponent
         */
        set: /**
         * Sets the toolbar's title.
         * ```html
         * <igx-grid [data]="localData" [showToolbar]="true" [autoGenerate]="true" [toolbarTitle]="'My Grid'"></igx-grid>
         * ```
         * \@memberof IgxGridBaseComponent
         * @param {?} newValue
         * @return {?}
         */
        function (newValue) {
            if (this._toolbarTitle !== newValue) {
                this._toolbarTitle = newValue;
                this.cdr.markForCheck();
                if (this._ngAfterViewInitPassed) {
                    this.calculateGridSizes();
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxGridBaseComponent.prototype, "exportExcel", {
        /**
         * Returns whether the option for exporting to MS Excel is enabled or disabled.
         * ```typescript
         * cosnt excelExporter = this.grid.exportExcel;
         * ```
         * @memberof IgxGridBaseComponent
         */
        get: /**
         * Returns whether the option for exporting to MS Excel is enabled or disabled.
         * ```typescript
         * cosnt excelExporter = this.grid.exportExcel;
         * ```
         * \@memberof IgxGridBaseComponent
         * @return {?}
         */
        function () {
            return this.getExportExcel();
        },
        /**
         * Enable or disable the option for exporting to MS Excel.
         * ```html
         * <igx-grid [data]="localData" [showToolbar]="true" [autoGenerate]="true" [exportExcel]="true"></igx-grid>
         * ```
         * @memberof IgxGridBaseComponent
         */
        set: /**
         * Enable or disable the option for exporting to MS Excel.
         * ```html
         * <igx-grid [data]="localData" [showToolbar]="true" [autoGenerate]="true" [exportExcel]="true"></igx-grid>
         * ```
         * \@memberof IgxGridBaseComponent
         * @param {?} newValue
         * @return {?}
         */
        function (newValue) {
            if (this._exportExcel !== newValue) {
                this._exportExcel = newValue;
                this.cdr.markForCheck();
                if (this._ngAfterViewInitPassed) {
                    this.calculateGridSizes();
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxGridBaseComponent.prototype, "exportCsv", {
        /**
         * Returns whether the option for exporting to CSV is enabled or disabled.
         * ```typescript
         * const exportCsv = this.grid.exportCsv;
         * ```
         * @memberof IgxGridBaseComponent
         */
        get: /**
         * Returns whether the option for exporting to CSV is enabled or disabled.
         * ```typescript
         * const exportCsv = this.grid.exportCsv;
         * ```
         * \@memberof IgxGridBaseComponent
         * @return {?}
         */
        function () {
            return this.getExportCsv();
        },
        /**
         * Enable or disable the option for exporting to CSV.
         * ```html
         * <igx-grid [data]="localData" [showToolbar]="true" [autoGenerate]="true" [exportCsv]="true"></igx-grid>
         * ```
         * @memberof IgxGridBaseComponent
         */
        set: /**
         * Enable or disable the option for exporting to CSV.
         * ```html
         * <igx-grid [data]="localData" [showToolbar]="true" [autoGenerate]="true" [exportCsv]="true"></igx-grid>
         * ```
         * \@memberof IgxGridBaseComponent
         * @param {?} newValue
         * @return {?}
         */
        function (newValue) {
            if (this._exportCsv !== newValue) {
                this._exportCsv = newValue;
                this.cdr.markForCheck();
                if (this._ngAfterViewInitPassed) {
                    this.calculateGridSizes();
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxGridBaseComponent.prototype, "exportText", {
        /**
         * Returns the textual content for the main export button.
         * ```typescript
         * const exportText = this.grid.exportText;
         * ```
         * @memberof IgxGridBaseComponent
         */
        get: /**
         * Returns the textual content for the main export button.
         * ```typescript
         * const exportText = this.grid.exportText;
         * ```
         * \@memberof IgxGridBaseComponent
         * @return {?}
         */
        function () {
            return this._exportText;
        },
        /**
         * Sets the textual content for the main export button.
         * ```html
         * <igx-grid [data]="localData" [showToolbar]="true" [exportText]="'My Exporter'" [exportCsv]="true"></igx-grid>
         * ```
         * @memberof IgxGridBaseComponent
         */
        set: /**
         * Sets the textual content for the main export button.
         * ```html
         * <igx-grid [data]="localData" [showToolbar]="true" [exportText]="'My Exporter'" [exportCsv]="true"></igx-grid>
         * ```
         * \@memberof IgxGridBaseComponent
         * @param {?} newValue
         * @return {?}
         */
        function (newValue) {
            if (this._exportText !== newValue) {
                this._exportText = newValue;
                this.cdr.markForCheck();
                if (this._ngAfterViewInitPassed) {
                    this.calculateGridSizes();
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxGridBaseComponent.prototype, "exportExcelText", {
        /**
         * Returns the textual content for the MS Excel export button.
         * ```typescript
         * const excelText = this.grid.exportExcelText;
         * ```
         * @memberof IgxGridBaseComponent
         */
        get: /**
         * Returns the textual content for the MS Excel export button.
         * ```typescript
         * const excelText = this.grid.exportExcelText;
         * ```
         * \@memberof IgxGridBaseComponent
         * @return {?}
         */
        function () {
            return this._exportExcelText;
        },
        /**
         * Sets the textual content for the MS Excel export button.
         * ```html
         * <igx-grid [exportExcelText]="'My Excel Exporter" [showToolbar]="true" [exportText]="'My Exporter'" [exportCsv]="true"></igx-grid>
         * ```
         * @memberof IgxGridBaseComponent
         */
        set: /**
         * Sets the textual content for the MS Excel export button.
         * ```html
         * <igx-grid [exportExcelText]="'My Excel Exporter" [showToolbar]="true" [exportText]="'My Exporter'" [exportCsv]="true"></igx-grid>
         * ```
         * \@memberof IgxGridBaseComponent
         * @param {?} newValue
         * @return {?}
         */
        function (newValue) {
            if (this._exportExcelText !== newValue) {
                this._exportExcelText = newValue;
                this.cdr.markForCheck();
                if (this._ngAfterViewInitPassed) {
                    this.calculateGridSizes();
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxGridBaseComponent.prototype, "exportCsvText", {
        /**
         * Returns the textual content for the CSV export button.
         * ```typescript
         * const csvText = this.grid.exportCsvText;
         * ```
         * @memberof IgxGridBaseComponent
         */
        get: /**
         * Returns the textual content for the CSV export button.
         * ```typescript
         * const csvText = this.grid.exportCsvText;
         * ```
         * \@memberof IgxGridBaseComponent
         * @return {?}
         */
        function () {
            return this._exportCsvText;
        },
        /**
         * Sets the textual content for the CSV export button.
         * ```html
         * <igx-grid [exportCsvText]="'My Csv Exporter" [showToolbar]="true" [exportText]="'My Exporter'" [exportExcel]="true"></igx-grid>
         * ```
         * @memberof IgxGridBaseComponent
         */
        set: /**
         * Sets the textual content for the CSV export button.
         * ```html
         * <igx-grid [exportCsvText]="'My Csv Exporter" [showToolbar]="true" [exportText]="'My Exporter'" [exportExcel]="true"></igx-grid>
         * ```
         * \@memberof IgxGridBaseComponent
         * @param {?} newValue
         * @return {?}
         */
        function (newValue) {
            if (this._exportCsvText !== newValue) {
                this._exportCsvText = newValue;
                this.cdr.markForCheck();
                if (this._ngAfterViewInitPassed) {
                    this.calculateGridSizes();
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    IgxGridBaseComponent.prototype.verticalScrollHandler = /**
     * @private
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var _this = this;
        this.verticalScrollContainer.onScroll(event);
        if (isEdge()) {
            this.wheelHandler(false);
        }
        this.disableTransitions = true;
        this.zone.run(function () {
            _this.zone.onStable.pipe(first()).subscribe(function () {
                _this.verticalScrollContainer.onChunkLoad.emit(_this.verticalScrollContainer.state);
            });
            if (_this.rowEditable) {
                _this.changeRowEditingOverlayStateOnScroll(_this.rowInEditMode);
            }
            _this.disableTransitions = false;
        });
        this.hideOverlays();
    };
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    IgxGridBaseComponent.prototype.horizontalScrollHandler = /**
     * @private
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var _this = this;
        /** @type {?} */
        var scrollLeft = event.target.scrollLeft;
        if (isEdge()) {
            this.wheelHandler(true);
        }
        this.headerContainer.onHScroll(scrollLeft);
        this._horizontalForOfs.forEach(function (vfor) { return vfor.onHScroll(scrollLeft); });
        this.cdr.markForCheck();
        this.zone.run(function () {
            _this.zone.onStable.pipe(first()).subscribe(function () {
                _this.parentVirtDir.onChunkLoad.emit(_this.headerContainer.state);
            });
        });
        this.hideOverlays();
    };
    /**
    * @hidden
    * @internal
    */
    /**
     * @hidden
     * \@internal
     * @return {?}
     */
    IgxGridBaseComponent.prototype.hideOverlays = /**
     * @hidden
     * \@internal
     * @return {?}
     */
    function () {
        var _this = this;
        this.overlayIDs.forEach(function (overlayID) {
            _this.overlayService.hide(overlayID);
            _this.overlayService.onClosed.pipe(filter(function (o) { return o.id === overlayID; }), takeUntil(_this.destroy$)).subscribe(function () {
                _this.nativeElement.focus();
            });
        });
    };
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    IgxGridBaseComponent.prototype.keydownHandler = /**
     * @private
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var key = event.key.toLowerCase();
        // TODO: Move in a separate handler on the `grid body`.
        // if (event.ctrlKey && key === 'c' && isIE()) {
        //     this.copyHandler(null, true);
        // }
        if ((isNavigationKey(key) && event.keyCode !== 32) || key === 'tab' || key === 'pagedown' || key === 'pageup') {
            event.preventDefault();
            if (key === 'pagedown') {
                this.verticalScrollContainer.scrollNextPage();
                this.nativeElement.focus();
            }
            else if (key === 'pageup') {
                this.verticalScrollContainer.scrollPrevPage();
                this.nativeElement.focus();
            }
        }
    };
    /**
     * @return {?}
     */
    IgxGridBaseComponent.prototype._setupServices = /**
     * @return {?}
     */
    function () {
        this.gridAPI.grid = this;
        this.crudService.grid = this;
        this.navigation.grid = this;
        this.filteringService.grid = this;
        this.summaryService.grid = this;
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    IgxGridBaseComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (this._init) {
            return;
        }
        var height = changes.height, width = changes.width;
        if (height || width) {
            this.calculateGridSizes();
        }
    };
    /**
     * @return {?}
     */
    IgxGridBaseComponent.prototype._setupListeners = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var destructor = takeUntil(this.destroy$);
        this.onRowAdded.pipe(destructor).subscribe(function (args) { return _this.refreshGridState(args); });
        this.onRowDeleted.pipe(destructor).subscribe(function (args) {
            _this.summaryService.deleteOperation = true;
            _this.summaryService.clearSummaryCache(args);
        });
        this.transactions.onStateUpdate.pipe(takeUntil(this.destroy$)).subscribe(function () {
            _this.summaryService.clearSummaryCache();
            _this._pipeTrigger++;
            _this.markForCheck();
            if (_this.transactions.getAggregatedChanges(false).length === 0) {
                // Needs better check, calling 'transactions.clear()' will also trigger this
                if (_this.gridAPI.atInexistingPage()) {
                    _this.page--;
                }
            }
        });
        this.onPagingDone.pipe(destructor).subscribe(function () {
            _this.endEdit(true);
            _this.selectionService.clear();
            _this.selectionService.activeElement = null;
        });
        this.onColumnMoving.pipe(destructor).subscribe(function () { return _this.endEdit(true); });
        this.onColumnResized.pipe(destructor).subscribe(function () { return _this.endEdit(true); });
        this.overlayService.onOpened.pipe(takeUntil(this.destroy$)).subscribe(function (event) {
            if (_this.overlayService.getOverlayById(event.id).settings.outlet === _this.outletDirective &&
                _this.overlayIDs.indexOf(event.id) < 0) {
                _this.overlayIDs.push(event.id);
            }
        });
        this.overlayService.onClosed.pipe(takeUntil(this.destroy$)).subscribe(function (event) {
            /** @type {?} */
            var ind = _this.overlayIDs.indexOf(event.id);
            if (ind !== -1) {
                _this.overlayIDs.splice(ind, 1);
            }
        });
    };
    // TODO: Refactor
    /**
     * @hidden
     */
    // TODO: Refactor
    /**
     * @hidden
     * @return {?}
     */
    IgxGridBaseComponent.prototype.ngOnInit = 
    // TODO: Refactor
    /**
     * @hidden
     * @return {?}
     */
    function () {
        this._setupServices();
        this._setupListeners();
        this.columnListDiffer = this.differs.find([]).create(null);
        this.calcWidth = this.width && this.width.indexOf('%') === -1 ? parseInt(this.width, 10) : 0;
        this.shouldGenerate = this.autoGenerate;
        this._scrollWidth = this.getScrollWidth();
    };
    /**
     * @protected
     * @return {?}
     */
    IgxGridBaseComponent.prototype.setupColumns = /**
     * @protected
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.autoGenerate) {
            this.autogenerateColumns();
        }
        this.initColumns(this.columnList, function (col) { return _this.onColumnInit.emit(col); });
        this.columnListDiffer.diff(this.columnList);
        this.markForCheck();
        this.resetCaches();
        this.columnList.changes
            .pipe(takeUntil(this.destroy$))
            .subscribe(function (change) { _this.onColumnsChanged(change); });
    };
    /**
     * @hidden
     * @internal
     */
    /**
     * @hidden
     * \@internal
     * @return {?}
     */
    IgxGridBaseComponent.prototype.resetColumnsCaches = /**
     * @hidden
     * \@internal
     * @return {?}
     */
    function () {
        this.columnList.forEach(function (column) { return column.resetCaches(); });
    };
    /**
     * @hidden
     * @internal
     */
    /**
     * @hidden
     * \@internal
     * @return {?}
     */
    IgxGridBaseComponent.prototype.resetForOfCache = /**
     * @hidden
     * \@internal
     * @return {?}
     */
    function () {
        /** @type {?} */
        var firstVirtRow = this.dataRowList.first;
        if (firstVirtRow) {
            firstVirtRow.virtDirRow.assumeMaster();
        }
    };
    /**
     * @hidden
     * @internal
     */
    /**
     * @hidden
     * \@internal
     * @return {?}
     */
    IgxGridBaseComponent.prototype.resetColumnCollections = /**
     * @hidden
     * \@internal
     * @return {?}
     */
    function () {
        this._visibleColumns.length = 0;
        this._pinnedVisible.length = 0;
        this._unpinnedVisible.length = 0;
    };
    /**
     * @hidden
     * @internal
     */
    /**
     * @hidden
     * \@internal
     * @return {?}
     */
    IgxGridBaseComponent.prototype.resetCachedWidths = /**
     * @hidden
     * \@internal
     * @return {?}
     */
    function () {
        this._unpinnedWidth = NaN;
        this._pinnedWidth = NaN;
        this._totalWidth = NaN;
    };
    /**
     * @hidden
     * @internal
     */
    /**
     * @hidden
     * \@internal
     * @return {?}
     */
    IgxGridBaseComponent.prototype.resetCaches = /**
     * @hidden
     * \@internal
     * @return {?}
     */
    function () {
        this.resetForOfCache();
        this.resetColumnsCaches();
        this.resetColumnCollections();
        this.resetCachedWidths();
        this._columnGroups = this.columnList.some(function (col) { return col.columnGroup; });
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @return {?}
     */
    IgxGridBaseComponent.prototype.ngAfterContentInit = /**
     * @hidden
     * @return {?}
     */
    function () {
        this.setupColumns();
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @return {?}
     */
    IgxGridBaseComponent.prototype.ngAfterViewInit = /**
     * @hidden
     * @return {?}
     */
    function () {
        var _this = this;
        this.zone.runOutsideAngular(function () {
            _this.document.defaultView.addEventListener('resize', _this.resizeHandler);
            _this._keydownListener = _this.keydownHandler.bind(_this);
            _this.nativeElement.addEventListener('keydown', _this._keydownListener);
        });
        this.initPinning();
        this.onDensityChanged.pipe(takeUntil(this.destroy$)).subscribe(function () {
            requestAnimationFrame(function () {
                _this.summaryService.summaryHeight = 0;
                _this.endEdit(true);
                _this.reflow();
                _this.verticalScrollContainer.recalcUpdateSizes();
            });
        });
        this._ngAfterViewInitPassed = true;
        this.calculateGridSizes();
        // In some rare cases we get the AfterViewInit before the grid is added to the DOM
        // and as a result we get 0 width and can't size ourselves properly.
        // In order to prevent that add a mutation observer that watches if we have been added.
        if (!this.isAttachedToDom) {
            /** @type {?} */
            var config = { childList: true, subtree: true };
            /** @type {?} */
            var callback = function (mutationsList) {
                /** @type {?} */
                var childListHasChanged = mutationsList.filter(function (mutation) {
                    return mutation.type === 'childList';
                }).length > 0;
                if (childListHasChanged && _this.isAttachedToDom) {
                    _this._autoSize = false;
                    _this.reflow();
                    _this._observer.disconnect();
                    _this._observer = null;
                }
            };
            this._observer = new MutationObserver(callback);
            this._observer.observe(this.document.body, config);
        }
        this._dataRowList.changes.pipe(takeUntil(this.destroy$)).subscribe(function (list) {
            return _this._horizontalForOfs = _this.combineForOfCollections(list.toArray()
                .filter(function (item) { return item.element.nativeElement.parentElement !== null; }), _this._summaryRowList);
        });
        this._summaryRowList.changes.pipe(takeUntil(this.destroy$)).subscribe(function (summaryList) {
            return _this._horizontalForOfs - _this.combineForOfCollections(_this._dataRowList, summaryList.toArray()
                .filter(function (item) { return item.element.nativeElement.parentElement !== null; }));
        });
        this.zone.runOutsideAngular(function () {
            _this._vScrollListener = _this.verticalScrollHandler.bind(_this);
            _this.verticalScrollContainer.getVerticalScroll().addEventListener('scroll', _this._vScrollListener);
        });
        this.zone.runOutsideAngular(function () {
            _this._hScrollListener = _this.horizontalScrollHandler.bind(_this);
            _this.parentVirtDir.getHorizontalScroll().addEventListener('scroll', _this._hScrollListener);
        });
        this._horizontalForOfs = this.combineForOfCollections(this._dataRowList, this._summaryRowList);
        /** @type {?} */
        var vertScrDC = this.verticalScrollContainer.dc.instance._viewContainer.element.nativeElement;
        vertScrDC.addEventListener('scroll', function (evt) { _this.scrollHandler(evt); });
        vertScrDC.addEventListener('wheel', function () { _this.wheelHandler(); });
        vertScrDC.addEventListener('touchmove', function () { _this.wheelHandler(); });
        this.verticalScrollContainer.onDataChanging.pipe(takeUntil(this.destroy$)).subscribe(function ($event) {
            _this.calculateGridHeight();
            $event.containerSize = _this.calcHeight;
        });
        this.verticalScrollContainer.onDataChanged.pipe(takeUntil(this.destroy$)).subscribe(function () {
            requestAnimationFrame(function () {
                if (!_this._destroyed) {
                    _this.reflow();
                }
            });
        });
        this._init = false;
        this.cdr.reattach();
    };
    /**
     * @private
     * @param {?} dataList
     * @param {?} summaryList
     * @return {?}
     */
    IgxGridBaseComponent.prototype.combineForOfCollections = /**
     * @private
     * @param {?} dataList
     * @param {?} summaryList
     * @return {?}
     */
    function (dataList, summaryList) {
        return dataList.map(function (row) { return row.virtDirRow; }).concat(summaryList.map(function (row) { return row.virtDirRow; }));
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @return {?}
     */
    IgxGridBaseComponent.prototype.ngOnDestroy = /**
     * @hidden
     * @return {?}
     */
    function () {
        var _this = this;
        this.tmpOutlets.forEach(function (tmplOutlet) {
            tmplOutlet.cleanCache();
        });
        this.zone.runOutsideAngular(function () {
            _this.document.defaultView.removeEventListener('resize', _this.resizeHandler);
            _this.nativeElement.removeEventListener('keydown', _this._keydownListener);
            _this.verticalScrollContainer.getVerticalScroll().removeEventListener('scroll', _this._vScrollListener);
            _this.parentVirtDir.getHorizontalScroll().removeEventListener('scroll', _this._hScrollListener);
            /** @type {?} */
            var vertScrDC = _this.verticalScrollContainer.dc.instance._viewContainer.element.nativeElement;
            vertScrDC.removeEventListener('scroll', function (evt) { _this.scrollHandler(evt); });
            vertScrDC.removeEventListener('wheel', function () { _this.wheelHandler(); });
        });
        if (this._observer) {
            this._observer.disconnect();
        }
        this.destroy$.next(true);
        this.destroy$.complete();
        this._destroyed = true;
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    IgxGridBaseComponent.prototype.dataLoading = /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.onDataPreLoad.emit(event);
    };
    /**
     * Toggles the specified column's visibility.
     * ```typescript
     * this.grid1.toggleColumnVisibility({
     *       column: this.grid1.columns[0],
     *       newValue: true
     * });
     * ```
     * @memberof IgxGridBaseComponent
     */
    /**
     * Toggles the specified column's visibility.
     * ```typescript
     * this.grid1.toggleColumnVisibility({
     *       column: this.grid1.columns[0],
     *       newValue: true
     * });
     * ```
     * \@memberof IgxGridBaseComponent
     * @param {?} args
     * @return {?}
     */
    IgxGridBaseComponent.prototype.toggleColumnVisibility = /**
     * Toggles the specified column's visibility.
     * ```typescript
     * this.grid1.toggleColumnVisibility({
     *       column: this.grid1.columns[0],
     *       newValue: true
     * });
     * ```
     * \@memberof IgxGridBaseComponent
     * @param {?} args
     * @return {?}
     */
    function (args) {
        /** @type {?} */
        var col = args.column ? this.columnList.find(function (c) { return c === args.column; }) : undefined;
        if (!col) {
            return;
        }
        col.hidden = args.newValue;
        this.onColumnVisibilityChanged.emit(args);
        this.markForCheck();
    };
    Object.defineProperty(IgxGridBaseComponent.prototype, "nativeElement", {
        /**
         * Returns the native element of the `IgxGridComponent`.
         * ```typescript
         * const nativeEl = this.grid.nativeElement.
         * ```
         * @memberof IgxGridBaseComponent
         */
        get: /**
         * Returns the native element of the `IgxGridComponent`.
         * ```typescript
         * const nativeEl = this.grid.nativeElement.
         * ```
         * \@memberof IgxGridBaseComponent
         * @return {?}
         */
        function () {
            return this.elementRef.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxGridBaseComponent.prototype, "outlet", {
        /**
         * @hidden
         */
        get: /**
         * @hidden
         * @protected
         * @return {?}
         */
        function () {
            return this.outletDirective;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxGridBaseComponent.prototype, "defaultRowHeight", {
        /**
         * Returns the `IgxGridComponent`'s rows height.
         * ```typescript
         * const rowHeigh = this.grid.defaultRowHeight;
         * ```
         * @memberof IgxGridBaseComponent
         */
        get: /**
         * Returns the `IgxGridComponent`'s rows height.
         * ```typescript
         * const rowHeigh = this.grid.defaultRowHeight;
         * ```
         * \@memberof IgxGridBaseComponent
         * @return {?}
         */
        function () {
            switch (this.displayDensity) {
                case DisplayDensity.cosy:
                    return 40;
                case DisplayDensity.compact:
                    return 32;
                default:
                    return 50;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxGridBaseComponent.prototype, "defaultSummaryHeight", {
        get: /**
         * @return {?}
         */
        function () {
            switch (this.displayDensity) {
                case DisplayDensity.cosy:
                    return 30;
                case DisplayDensity.compact:
                    return 24;
                default:
                    return 36;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxGridBaseComponent.prototype, "defaultHeaderGroupMinWidth", {
        /**
         * Returns the `IgxGridHeaderGroupComponent`'s minimum allowed width.
         * Used internally for restricting header group component width.
         * The values below depend on the header cell default right/left padding values.
         * @memberof IgxGridBaseComponent
         */
        get: /**
         * Returns the `IgxGridHeaderGroupComponent`'s minimum allowed width.
         * Used internally for restricting header group component width.
         * The values below depend on the header cell default right/left padding values.
         * \@memberof IgxGridBaseComponent
         * @return {?}
         */
        function () {
            switch (this.displayDensity) {
                case DisplayDensity.cosy:
                    return 32;
                case DisplayDensity.compact:
                    return 24;
                default:
                    return 48;
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    IgxGridBaseComponent.prototype.paginatorClassName = /**
     * @return {?}
     */
    function () {
        switch (this.displayDensity) {
            case DisplayDensity.cosy:
                return 'igx-grid-paginator--cosy';
            case DisplayDensity.compact:
                return 'igx-grid-paginator--compact';
            default:
                return 'igx-grid-paginator';
        }
    };
    /**
     * @return {?}
     */
    IgxGridBaseComponent.prototype.paginatorSelectDisplayDensity = /**
     * @return {?}
     */
    function () {
        if (this.displayDensity === DisplayDensity.comfortable) {
            return DisplayDensity.cosy;
        }
        return DisplayDensity.compact;
    };
    Object.defineProperty(IgxGridBaseComponent.prototype, "calcPinnedContainerMaxWidth", {
        /**
         * Returns the maximum width of the container for the pinned `IgxColumnComponent`s.
         * The width is 80% of the total grid width.
         * ```typescript
         * const maxPinnedColWidth = this.grid.calcPinnedContainerMaxWidth;
         * ```
         * @memberof IgxGridBaseComponent
         */
        get: /**
         * Returns the maximum width of the container for the pinned `IgxColumnComponent`s.
         * The width is 80% of the total grid width.
         * ```typescript
         * const maxPinnedColWidth = this.grid.calcPinnedContainerMaxWidth;
         * ```
         * \@memberof IgxGridBaseComponent
         * @return {?}
         */
        function () {
            return (this.calcWidth * 80) / 100;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxGridBaseComponent.prototype, "unpinnedAreaMinWidth", {
        /**
         * Returns the minimum width of the container for the unpinned `IgxColumnComponent`s.
         * The width is 20% of the total grid width.
         * ```typescript
         * const minUnpinnedColWidth = this.grid.unpinnedAreaMinWidth;
         * ```
         * @memberof IgxGridBaseComponent
         */
        get: /**
         * Returns the minimum width of the container for the unpinned `IgxColumnComponent`s.
         * The width is 20% of the total grid width.
         * ```typescript
         * const minUnpinnedColWidth = this.grid.unpinnedAreaMinWidth;
         * ```
         * \@memberof IgxGridBaseComponent
         * @return {?}
         */
        function () {
            return (this.calcWidth * 20) / 100;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxGridBaseComponent.prototype, "pinnedWidth", {
        /**
         * Returns the current width of the container for the pinned `IgxColumnComponent`s.
         * ```typescript
         * const pinnedWidth = this.grid.getPinnedWidth;
         * ```
         * @memberof IgxGridBaseComponent
         */
        get: /**
         * Returns the current width of the container for the pinned `IgxColumnComponent`s.
         * ```typescript
         * const pinnedWidth = this.grid.getPinnedWidth;
         * ```
         * \@memberof IgxGridBaseComponent
         * @return {?}
         */
        function () {
            if (!isNaN(this._pinnedWidth)) {
                return this._pinnedWidth;
            }
            this._pinnedWidth = this.getPinnedWidth();
            return this._pinnedWidth;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxGridBaseComponent.prototype, "unpinnedWidth", {
        /**
         * Returns the current width of the container for the unpinned `IgxColumnComponent`s.
         * ```typescript
         * const unpinnedWidth = this.grid.getUnpinnedWidth;
         * ```
         * @memberof IgxGridBaseComponent
         */
        get: /**
         * Returns the current width of the container for the unpinned `IgxColumnComponent`s.
         * ```typescript
         * const unpinnedWidth = this.grid.getUnpinnedWidth;
         * ```
         * \@memberof IgxGridBaseComponent
         * @return {?}
         */
        function () {
            if (!isNaN(this._unpinnedWidth)) {
                return this._unpinnedWidth;
            }
            this._unpinnedWidth = this.getUnpinnedWidth();
            return this._unpinnedWidth;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxGridBaseComponent.prototype, "featureColumnsWidth", {
        /**
         * @hidden
         * Gets the combined width of the columns that are specific to the enabled grid features. They are fixed.
         * TODO: Update for Angular 8. Calling parent class getter using super is not supported for now.
         */
        get: /**
         * @hidden
         * Gets the combined width of the columns that are specific to the enabled grid features. They are fixed.
         * TODO: Update for Angular 8. Calling parent class getter using super is not supported for now.
         * @return {?}
         */
        function () {
            return this.getFeatureColumnsWidth();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxGridBaseComponent.prototype, "summariesMargin", {
        /**
         * @hidden
         */
        get: /**
         * @hidden
         * @return {?}
         */
        function () {
            return this.featureColumnsWidth;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxGridBaseComponent.prototype, "columns", {
        /**
         * Returns an array of `IgxColumnComponent`s.
         * ```typescript
         * const colums = this.grid.columns.
         * ```
         * @memberof IgxGridBaseComponent
         */
        get: /**
         * Returns an array of `IgxColumnComponent`s.
         * ```typescript
         * const colums = this.grid.columns.
         * ```
         * \@memberof IgxGridBaseComponent
         * @return {?}
         */
        function () {
            return this._columns;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxGridBaseComponent.prototype, "pinnedColumns", {
        /**
         * Returns an array of the pinned `IgxColumnComponent`s.
         * ```typescript
         * const pinnedColumns = this.grid.pinnedColumns.
         * ```
         * @memberof IgxGridBaseComponent
         */
        get: /**
         * Returns an array of the pinned `IgxColumnComponent`s.
         * ```typescript
         * const pinnedColumns = this.grid.pinnedColumns.
         * ```
         * \@memberof IgxGridBaseComponent
         * @return {?}
         */
        function () {
            if (this._pinnedVisible.length) {
                return this._pinnedVisible;
            }
            this._pinnedVisible = this._pinnedColumns.filter(function (col) { return !col.hidden; });
            return this._pinnedVisible;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxGridBaseComponent.prototype, "unpinnedColumns", {
        /**
         * Returns an array of unpinned `IgxColumnComponent`s.
         * ```typescript
         * const unpinnedColumns = this.grid.unpinnedColumns.
         * ```
         * @memberof IgxGridBaseComponent
         */
        get: /**
         * Returns an array of unpinned `IgxColumnComponent`s.
         * ```typescript
         * const unpinnedColumns = this.grid.unpinnedColumns.
         * ```
         * \@memberof IgxGridBaseComponent
         * @return {?}
         */
        function () {
            if (this._unpinnedVisible.length) {
                return this._unpinnedVisible;
            }
            this._unpinnedVisible = this._unpinnedColumns.filter(function (col) { return !col.hidden; });
            return this._unpinnedVisible;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Returns the `width` to be set on `IgxGridHeaderGroupComponent`.
     * @memberof IgxGridBaseComponent
     */
    /**
     * Returns the `width` to be set on `IgxGridHeaderGroupComponent`.
     * \@memberof IgxGridBaseComponent
     * @param {?} column
     * @return {?}
     */
    IgxGridBaseComponent.prototype.getHeaderGroupWidth = /**
     * Returns the `width` to be set on `IgxGridHeaderGroupComponent`.
     * \@memberof IgxGridBaseComponent
     * @param {?} column
     * @return {?}
     */
    function (column) {
        if (this.hasColumnLayouts) {
            return '';
        }
        /** @type {?} */
        var colWidth = column.width;
        /** @type {?} */
        var minWidth = this.defaultHeaderGroupMinWidth;
        /** @type {?} */
        var isPercentageWidth = colWidth && typeof colWidth === 'string' && colWidth.indexOf('%') !== -1;
        if (!isPercentageWidth && parseInt(column.width, 10) < minWidth) {
            return minWidth.toString();
        }
        return column.width;
    };
    /**
     * Returns the `IgxColumnComponent` by field name.
     * ```typescript
     * const myCol = this.grid1.getColumnByName("ID");
     * ```
     * @param name
     * @memberof IgxGridBaseComponent
     */
    /**
     * Returns the `IgxColumnComponent` by field name.
     * ```typescript
     * const myCol = this.grid1.getColumnByName("ID");
     * ```
     * \@memberof IgxGridBaseComponent
     * @param {?} name
     * @return {?}
     */
    IgxGridBaseComponent.prototype.getColumnByName = /**
     * Returns the `IgxColumnComponent` by field name.
     * ```typescript
     * const myCol = this.grid1.getColumnByName("ID");
     * ```
     * \@memberof IgxGridBaseComponent
     * @param {?} name
     * @return {?}
     */
    function (name) {
        return this.columnList.find(function (col) { return col.field === name; });
    };
    /**
     * Returns the `IgxColumnComponent` by index.
     * ```typescript
     * const myRow = this.grid1.getRowByIndex(1);
     * ```
     * @param index
     * @memberof IgxGridBaseComponent
     */
    /**
     * Returns the `IgxColumnComponent` by index.
     * ```typescript
     * const myRow = this.grid1.getRowByIndex(1);
     * ```
     * \@memberof IgxGridBaseComponent
     * @param {?} index
     * @return {?}
     */
    IgxGridBaseComponent.prototype.getRowByIndex = /**
     * Returns the `IgxColumnComponent` by index.
     * ```typescript
     * const myRow = this.grid1.getRowByIndex(1);
     * ```
     * \@memberof IgxGridBaseComponent
     * @param {?} index
     * @return {?}
     */
    function (index) {
        return this.gridAPI.get_row_by_index(index);
    };
    /**
     * Returns `IgxGridRowComponent` object by the specified primary key .
     * Requires that the `primaryKey` property is set.
     * ```typescript
     * const myRow = this.grid1.getRowByKey("cell5");
     * ```
     * @param keyValue
     * @memberof IgxGridBaseComponent
     */
    /**
     * Returns `IgxGridRowComponent` object by the specified primary key .
     * Requires that the `primaryKey` property is set.
     * ```typescript
     * const myRow = this.grid1.getRowByKey("cell5");
     * ```
     * \@memberof IgxGridBaseComponent
     * @param {?} keyValue
     * @return {?}
     */
    IgxGridBaseComponent.prototype.getRowByKey = /**
     * Returns `IgxGridRowComponent` object by the specified primary key .
     * Requires that the `primaryKey` property is set.
     * ```typescript
     * const myRow = this.grid1.getRowByKey("cell5");
     * ```
     * \@memberof IgxGridBaseComponent
     * @param {?} keyValue
     * @return {?}
     */
    function (keyValue) {
        return this.gridAPI.get_row_by_key(keyValue);
    };
    Object.defineProperty(IgxGridBaseComponent.prototype, "visibleColumns", {
        /**
         * Returns an array of visible `IgxColumnComponent`s.
         * ```typescript
         * const visibleColumns = this.grid.visibleColumns.
         * ```
         * @memberof IgxGridBaseComponent
         */
        get: /**
         * Returns an array of visible `IgxColumnComponent`s.
         * ```typescript
         * const visibleColumns = this.grid.visibleColumns.
         * ```
         * \@memberof IgxGridBaseComponent
         * @return {?}
         */
        function () {
            if (this._visibleColumns.length) {
                return this._visibleColumns;
            }
            this._visibleColumns = this.columnList.filter(function (c) { return !c.hidden; });
            return this._visibleColumns;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Returns the `IgxGridCellComponent` that matches the conditions.
     * ```typescript
     * const myCell = this.grid1.getCellByColumn(2,"UnitPrice");
     * ```
     * @param rowIndex
     * @param columnField
     * @memberof IgxGridBaseComponent
     */
    /**
     * Returns the `IgxGridCellComponent` that matches the conditions.
     * ```typescript
     * const myCell = this.grid1.getCellByColumn(2,"UnitPrice");
     * ```
     * \@memberof IgxGridBaseComponent
     * @param {?} rowIndex
     * @param {?} columnField
     * @return {?}
     */
    IgxGridBaseComponent.prototype.getCellByColumn = /**
     * Returns the `IgxGridCellComponent` that matches the conditions.
     * ```typescript
     * const myCell = this.grid1.getCellByColumn(2,"UnitPrice");
     * ```
     * \@memberof IgxGridBaseComponent
     * @param {?} rowIndex
     * @param {?} columnField
     * @return {?}
     */
    function (rowIndex, columnField) {
        /** @type {?} */
        var columnId = this.columnList.map(function (column) { return column.field; }).indexOf(columnField);
        if (columnId !== -1) {
            return this.gridAPI.get_cell_by_index(rowIndex, columnId);
        }
    };
    /**
     * Returns an `IgxGridCellComponent` object by the specified primary key and column field.
     * Requires that the primaryKey property is set.
     * ```typescript
     * grid.getCellByKey(1, 'index');
     * ```
     * @param rowSelector match any rowID
     * @param columnField
     * @memberof IgxGridBaseComponent
     */
    /**
     * Returns an `IgxGridCellComponent` object by the specified primary key and column field.
     * Requires that the primaryKey property is set.
     * ```typescript
     * grid.getCellByKey(1, 'index');
     * ```
     * \@memberof IgxGridBaseComponent
     * @param {?} rowSelector match any rowID
     * @param {?} columnField
     * @return {?}
     */
    IgxGridBaseComponent.prototype.getCellByKey = /**
     * Returns an `IgxGridCellComponent` object by the specified primary key and column field.
     * Requires that the primaryKey property is set.
     * ```typescript
     * grid.getCellByKey(1, 'index');
     * ```
     * \@memberof IgxGridBaseComponent
     * @param {?} rowSelector match any rowID
     * @param {?} columnField
     * @return {?}
     */
    function (rowSelector, columnField) {
        return this.gridAPI.get_cell_by_key(rowSelector, columnField);
    };
    Object.defineProperty(IgxGridBaseComponent.prototype, "totalPages", {
        /**
         * Returns the total number of pages.
         * ```typescript
         * const totalPages = this.grid.totalPages;
         * ```
         * @memberof IgxGridBaseComponent
         */
        get: /**
         * Returns the total number of pages.
         * ```typescript
         * const totalPages = this.grid.totalPages;
         * ```
         * \@memberof IgxGridBaseComponent
         * @return {?}
         */
        function () {
            if (this.pagingState) {
                return this.pagingState.metadata.countPages;
            }
            return -1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxGridBaseComponent.prototype, "isFirstPage", {
        /**
         * Returns if the current page is the first page.
         * ```typescript
         * const firstPage = this.grid.isFirstPage;
         * ```
         * @memberof IgxGridBaseComponent
         */
        get: /**
         * Returns if the current page is the first page.
         * ```typescript
         * const firstPage = this.grid.isFirstPage;
         * ```
         * \@memberof IgxGridBaseComponent
         * @return {?}
         */
        function () {
            return this.page === 0;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Goes to the next page of the `IgxGridComponent`, if the grid is not already at the last page.
     * ```typescript
     * this.grid1.nextPage();
     * ```
     * @memberof IgxGridBaseComponent
     */
    /**
     * Goes to the next page of the `IgxGridComponent`, if the grid is not already at the last page.
     * ```typescript
     * this.grid1.nextPage();
     * ```
     * \@memberof IgxGridBaseComponent
     * @return {?}
     */
    IgxGridBaseComponent.prototype.nextPage = /**
     * Goes to the next page of the `IgxGridComponent`, if the grid is not already at the last page.
     * ```typescript
     * this.grid1.nextPage();
     * ```
     * \@memberof IgxGridBaseComponent
     * @return {?}
     */
    function () {
        if (!this.isLastPage) {
            this.page += 1;
        }
    };
    /**
     * Goes to the previous page of the `IgxGridComponent`, if the grid is not already at the first page.
     * ```typescript
     * this.grid1.previousPage();
     * ```
     * @memberof IgxGridBaseComponent
     */
    /**
     * Goes to the previous page of the `IgxGridComponent`, if the grid is not already at the first page.
     * ```typescript
     * this.grid1.previousPage();
     * ```
     * \@memberof IgxGridBaseComponent
     * @return {?}
     */
    IgxGridBaseComponent.prototype.previousPage = /**
     * Goes to the previous page of the `IgxGridComponent`, if the grid is not already at the first page.
     * ```typescript
     * this.grid1.previousPage();
     * ```
     * \@memberof IgxGridBaseComponent
     * @return {?}
     */
    function () {
        if (!this.isFirstPage) {
            this.page -= 1;
        }
    };
    Object.defineProperty(IgxGridBaseComponent.prototype, "totalRecords", {
        /**
         * Returns the total number of records.
         * Only functions when paging is enabled.
         * ```typescript
         * const totalRecords = this.grid.totalRecords;
         * ```
         * @memberof IgxGridBaseComponent
         */
        get: /**
         * Returns the total number of records.
         * Only functions when paging is enabled.
         * ```typescript
         * const totalRecords = this.grid.totalRecords;
         * ```
         * \@memberof IgxGridBaseComponent
         * @return {?}
         */
        function () {
            if (this.pagingState) {
                return this.pagingState.metadata.countRecords;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxGridBaseComponent.prototype, "isLastPage", {
        /**
         * Returns if the current page is the last page.
         * ```typescript
         * const lastPage = this.grid.isLastPage;
         * ```
         * @memberof IgxGridBaseComponent
         */
        get: /**
         * Returns if the current page is the last page.
         * ```typescript
         * const lastPage = this.grid.isLastPage;
         * ```
         * \@memberof IgxGridBaseComponent
         * @return {?}
         */
        function () {
            return this.page + 1 >= this.totalPages;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxGridBaseComponent.prototype, "totalWidth", {
        /**
         * Returns the total width of the `IgxGridComponent`.
         * ```typescript
         * const gridWidth = this.grid.totalWidth;
         * ```
         * @memberof IgxGridBaseComponent
         */
        get: /**
         * Returns the total width of the `IgxGridComponent`.
         * ```typescript
         * const gridWidth = this.grid.totalWidth;
         * ```
         * \@memberof IgxGridBaseComponent
         * @return {?}
         */
        function () {
            if (!isNaN(this._totalWidth)) {
                return this._totalWidth;
            }
            // Take only top level columns
            /** @type {?} */
            var cols = this.visibleColumns.filter(function (col) { return col.level === 0 && !col.pinned; });
            /** @type {?} */
            var totalWidth = 0;
            /** @type {?} */
            var i = 0;
            for (i; i < cols.length; i++) {
                totalWidth += parseInt(cols[i].calcWidth, 10) || 0;
            }
            this._totalWidth = totalWidth;
            return totalWidth;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxGridBaseComponent.prototype, "showRowCheckboxes", {
        get: /**
         * @return {?}
         */
        function () {
            return this.rowSelectable && this.columns.length > this.hiddenColumnsCount;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @hidden
     */
    /**
     * @hidden
     * @protected
     * @param {?} from
     * @param {?} to
     * @param {?} pos
     * @return {?}
     */
    IgxGridBaseComponent.prototype._moveColumns = /**
     * @hidden
     * @protected
     * @param {?} from
     * @param {?} to
     * @param {?} pos
     * @return {?}
     */
    function (from, to, pos) {
        /** @type {?} */
        var list = this.columnList.toArray();
        /** @type {?} */
        var fromIndex = list.indexOf(from);
        /** @type {?} */
        var toIndex = list.indexOf(to);
        if (pos === DropPosition.BeforeDropTarget) {
            toIndex--;
            if (toIndex < 0) {
                toIndex = 0;
            }
        }
        if (pos === DropPosition.AfterDropTarget) {
            toIndex++;
        }
        list.splice.apply(list, tslib_1.__spread([toIndex, 0], list.splice(fromIndex, 1)));
        /** @type {?} */
        var newList = this._resetColumnList(list);
        this.columnList.reset(newList);
        this.columnList.notifyOnChanges();
        this._columns = this.columnList.toArray();
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @protected
     * @param {?=} list
     * @return {?}
     */
    IgxGridBaseComponent.prototype._resetColumnList = /**
     * @hidden
     * @protected
     * @param {?=} list
     * @return {?}
     */
    function (list) {
        if (!list) {
            list = this.columnList.toArray();
        }
        /** @type {?} */
        var newList = [];
        list.filter(function (c) { return c.level === 0; }).forEach(function (p) {
            newList.push(p);
            if (p.columnGroup) {
                newList = newList.concat(p.allChildren);
            }
        });
        return newList;
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @protected
     * @param {?} from
     * @param {?} to
     * @param {?} position
     * @return {?}
     */
    IgxGridBaseComponent.prototype._reorderPinnedColumns = /**
     * @hidden
     * @protected
     * @param {?} from
     * @param {?} to
     * @param {?} position
     * @return {?}
     */
    function (from, to, position) {
        /** @type {?} */
        var pinned = this._pinnedColumns;
        /** @type {?} */
        var dropIndex = pinned.indexOf(to);
        if (to.columnGroup) {
            dropIndex += to.allChildren.length;
        }
        if (position === DropPosition.BeforeDropTarget) {
            dropIndex--;
        }
        if (position === DropPosition.AfterDropTarget) {
            dropIndex++;
        }
        pinned.splice.apply(pinned, tslib_1.__spread([dropIndex, 0], pinned.splice(pinned.indexOf(from), 1)));
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @protected
     * @param {?} parent
     * @param {?} from
     * @param {?} to
     * @param {?} pos
     * @return {?}
     */
    IgxGridBaseComponent.prototype._moveChildColumns = /**
     * @hidden
     * @protected
     * @param {?} parent
     * @param {?} from
     * @param {?} to
     * @param {?} pos
     * @return {?}
     */
    function (parent, from, to, pos) {
        /** @type {?} */
        var buffer = parent.children.toArray();
        /** @type {?} */
        var fromIndex = buffer.indexOf(from);
        /** @type {?} */
        var toIndex = buffer.indexOf(to);
        if (pos === DropPosition.BeforeDropTarget) {
            toIndex--;
        }
        if (pos === DropPosition.AfterDropTarget) {
            toIndex++;
        }
        buffer.splice.apply(buffer, tslib_1.__spread([toIndex, 0], buffer.splice(fromIndex, 1)));
        parent.children.reset(buffer);
    };
    /**
     * Moves a column to the specified drop target.
     * ```typescript
     * grid.moveColumn(compName, persDetails);
     * ```
      * @memberof IgxGridBaseComponent
      */
    /**
     * Moves a column to the specified drop target.
     * ```typescript
     * grid.moveColumn(compName, persDetails);
     * ```
     * \@memberof IgxGridBaseComponent
     * @param {?} column
     * @param {?} dropTarget
     * @param {?=} pos
     * @return {?}
     */
    IgxGridBaseComponent.prototype.moveColumn = /**
     * Moves a column to the specified drop target.
     * ```typescript
     * grid.moveColumn(compName, persDetails);
     * ```
     * \@memberof IgxGridBaseComponent
     * @param {?} column
     * @param {?} dropTarget
     * @param {?=} pos
     * @return {?}
     */
    function (column, dropTarget, pos) {
        if (pos === void 0) { pos = DropPosition.None; }
        /** @type {?} */
        var position = pos;
        /** @type {?} */
        var fromIndex = column.visibleIndex;
        /** @type {?} */
        var toIndex = dropTarget.visibleIndex;
        if (pos === DropPosition.BeforeDropTarget && fromIndex < toIndex) {
            position = DropPosition.BeforeDropTarget;
        }
        else if (pos === DropPosition.AfterDropTarget && fromIndex > toIndex) {
            position = DropPosition.AfterDropTarget;
        }
        else {
            position = DropPosition.None;
        }
        if ((column.level !== dropTarget.level) ||
            (column.topLevelParent !== dropTarget.topLevelParent)) {
            return;
        }
        this.endEdit(true);
        if (column.level) {
            this._moveChildColumns(column.parent, column, dropTarget, position);
        }
        if (dropTarget.pinned && column.pinned) {
            this._reorderPinnedColumns(column, dropTarget, position);
        }
        if (dropTarget.pinned && !column.pinned) {
            column.pin();
            this._reorderPinnedColumns(column, dropTarget, position);
        }
        if (!dropTarget.pinned && column.pinned) {
            column.unpin();
            /** @type {?} */
            var list = this.columnList.toArray();
            /** @type {?} */
            var fi = list.indexOf(column);
            /** @type {?} */
            var ti = list.indexOf(dropTarget);
            if (pos === DropPosition.BeforeDropTarget && fi < ti) {
                position = DropPosition.BeforeDropTarget;
            }
            else if (pos === DropPosition.AfterDropTarget && fi > ti) {
                position = DropPosition.AfterDropTarget;
            }
            else {
                position = DropPosition.None;
            }
        }
        this._moveColumns(column, dropTarget, position);
        this.cdr.detectChanges();
        if (this.hasColumnLayouts) {
            this.columns.filter(function (x) { return x.columnLayout; }).forEach(function (x) { return x.populateVisibleIndexes(); });
        }
        /** @type {?} */
        var args = {
            source: column,
            target: dropTarget
        };
        this.onColumnMovingEnd.emit(args);
    };
    /**
     * Goes to the desired page index.
     * ```typescript
     * this.grid1.paginate(1);
     * ```
     * @param val
     * @memberof IgxGridBaseComponent
     */
    /**
     * Goes to the desired page index.
     * ```typescript
     * this.grid1.paginate(1);
     * ```
     * \@memberof IgxGridBaseComponent
     * @param {?} val
     * @return {?}
     */
    IgxGridBaseComponent.prototype.paginate = /**
     * Goes to the desired page index.
     * ```typescript
     * this.grid1.paginate(1);
     * ```
     * \@memberof IgxGridBaseComponent
     * @param {?} val
     * @return {?}
     */
    function (val) {
        if (val < 0 || val > this.totalPages - 1) {
            return;
        }
        this.page = val;
    };
    /**
     * Manually marks the `IgxGridComponent` for change detection.
     * ```typescript
     * this.grid1.markForCheck();
     * ```
     * @memberof IgxGridBaseComponent
     */
    /**
     * Manually marks the `IgxGridComponent` for change detection.
     * ```typescript
     * this.grid1.markForCheck();
     * ```
     * \@memberof IgxGridBaseComponent
     * @return {?}
     */
    IgxGridBaseComponent.prototype.markForCheck = /**
     * Manually marks the `IgxGridComponent` for change detection.
     * ```typescript
     * this.grid1.markForCheck();
     * ```
     * \@memberof IgxGridBaseComponent
     * @return {?}
     */
    function () {
        this.cdr.detectChanges();
    };
    /**
     * Creates a new `IgxGridRowComponent` and adds the data record to the end of the data source.
     * ```typescript
     * const record = {
     *     ID: this.grid1.data[this.grid1.data.length - 1].ID + 1,
     *     Name: this.newRecord
     * };
     * this.grid1.addRow(record);
     * ```
     * @param data
     * @memberof IgxGridBaseComponent
     */
    /**
     * Creates a new `IgxGridRowComponent` and adds the data record to the end of the data source.
     * ```typescript
     * const record = {
     *     ID: this.grid1.data[this.grid1.data.length - 1].ID + 1,
     *     Name: this.newRecord
     * };
     * this.grid1.addRow(record);
     * ```
     * \@memberof IgxGridBaseComponent
     * @param {?} data
     * @return {?}
     */
    IgxGridBaseComponent.prototype.addRow = /**
     * Creates a new `IgxGridRowComponent` and adds the data record to the end of the data source.
     * ```typescript
     * const record = {
     *     ID: this.grid1.data[this.grid1.data.length - 1].ID + 1,
     *     Name: this.newRecord
     * };
     * this.grid1.addRow(record);
     * ```
     * \@memberof IgxGridBaseComponent
     * @param {?} data
     * @return {?}
     */
    function (data) {
        // commit pending states prior to adding a row
        this.endEdit(true);
        this.gridAPI.addRowToData(data);
        this.onRowAdded.emit({ data: data });
        this._pipeTrigger++;
        this.cdr.markForCheck();
    };
    /**
     * Removes the `IgxGridRowComponent` and the corresponding data record by primary key.
     * Requires that the `primaryKey` property is set.
     * The method accept rowSelector as a parameter, which is the rowID.
     * ```typescript
     * this.grid1.deleteRow(0);
     * ```
     * @param rowSelector
     * @memberof IgxGridBaseComponent
     */
    /**
     * Removes the `IgxGridRowComponent` and the corresponding data record by primary key.
     * Requires that the `primaryKey` property is set.
     * The method accept rowSelector as a parameter, which is the rowID.
     * ```typescript
     * this.grid1.deleteRow(0);
     * ```
     * \@memberof IgxGridBaseComponent
     * @param {?} rowSelector
     * @return {?}
     */
    IgxGridBaseComponent.prototype.deleteRow = /**
     * Removes the `IgxGridRowComponent` and the corresponding data record by primary key.
     * Requires that the `primaryKey` property is set.
     * The method accept rowSelector as a parameter, which is the rowID.
     * ```typescript
     * this.grid1.deleteRow(0);
     * ```
     * \@memberof IgxGridBaseComponent
     * @param {?} rowSelector
     * @return {?}
     */
    function (rowSelector) {
        if (this.primaryKey !== undefined && this.primaryKey !== null) {
            this.deleteRowById(rowSelector);
        }
    };
    /** @hidden */
    /**
     * @hidden
     * @param {?} rowId
     * @return {?}
     */
    IgxGridBaseComponent.prototype.deleteRowById = /**
     * @hidden
     * @param {?} rowId
     * @return {?}
     */
    function (rowId) {
        this.gridAPI.deleteRowById(rowId);
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @protected
     * @param {?} rowID
     * @param {?} index
     * @return {?}
     */
    IgxGridBaseComponent.prototype.deleteRowFromData = /**
     * @hidden
     * @protected
     * @param {?} rowID
     * @param {?} index
     * @return {?}
     */
    function (rowID, index) {
        //  if there is a row (index !== 0) delete it
        //  if there is a row in ADD or UPDATE state change it's state to DELETE
        if (index !== -1) {
            if (this.transactions.enabled) {
                /** @type {?} */
                var transaction = { id: rowID, type: TransactionType.DELETE, newValue: null };
                this.transactions.add(transaction, this.data[index]);
            }
            else {
                this.data.splice(index, 1);
            }
        }
        else {
            /** @type {?} */
            var state = this.transactions.getState(rowID);
            this.transactions.add({ id: rowID, type: TransactionType.DELETE, newValue: null }, state && state.recordRef);
        }
    };
    /**
     * Updates the `IgxGridRowComponent` and the corresponding data record by primary key.
     * Requires that the `primaryKey` property is set.
     * ```typescript
     * this.gridWithPK.updateCell('Updated', 1, 'ProductName');
     * ```
     * @param value the new value which is to be set.
     * @param rowSelector corresponds to rowID.
     * @param column corresponds to column field.
     * @memberof IgxGridBaseComponent
     */
    /**
     * Updates the `IgxGridRowComponent` and the corresponding data record by primary key.
     * Requires that the `primaryKey` property is set.
     * ```typescript
     * this.gridWithPK.updateCell('Updated', 1, 'ProductName');
     * ```
     * \@memberof IgxGridBaseComponent
     * @param {?} value the new value which is to be set.
     * @param {?} rowSelector corresponds to rowID.
     * @param {?} column corresponds to column field.
     * @return {?}
     */
    IgxGridBaseComponent.prototype.updateCell = /**
     * Updates the `IgxGridRowComponent` and the corresponding data record by primary key.
     * Requires that the `primaryKey` property is set.
     * ```typescript
     * this.gridWithPK.updateCell('Updated', 1, 'ProductName');
     * ```
     * \@memberof IgxGridBaseComponent
     * @param {?} value the new value which is to be set.
     * @param {?} rowSelector corresponds to rowID.
     * @param {?} column corresponds to column field.
     * @return {?}
     */
    function (value, rowSelector, column) {
        if (this.isDefined(this.primaryKey)) {
            /** @type {?} */
            var col = this.columnList.toArray().find(function (c) { return c.field === column; });
            if (col) {
                // Simplify
                /** @type {?} */
                var rowData = this.gridAPI.getRowData(rowSelector);
                /** @type {?} */
                var index = this.gridAPI.get_row_index_in_data(rowSelector);
                // If row passed is invalid
                if (index < 0) {
                    return;
                }
                /** @type {?} */
                var id = {
                    rowID: rowSelector,
                    columnID: col.index,
                    rowIndex: index
                };
                /** @type {?} */
                var cell = new IgxCell(id, index, col, rowData[col.field], rowData[col.field], rowData);
                /** @type {?} */
                var args = this.gridAPI.update_cell(cell, value);
                if (this.crudService.cell && this.crudService.sameCell(cell)) {
                    if (args.cancel) {
                        return;
                    }
                    this.gridAPI.escape_editMode();
                }
                this.cdr.markForCheck();
            }
        }
    };
    /**
     * Updates the `IgxGridRowComponent`, which is specified by
     * rowSelector parameter and the data source record with the passed value.
     * This method will apply requested update only if primary key is specified in the grid.
     * ```typescript
     * grid.updateRow({
     *       ProductID: 1, ProductName: 'Spearmint', InStock: true, UnitsInStock: 1, OrderDate: new Date('2005-03-21')
     *   }, 1);
     * ```
     * @param value
     * @param rowSelector correspond to rowID
     * @memberof IgxGridBaseComponent
     */
    /**
     * Updates the `IgxGridRowComponent`, which is specified by
     * rowSelector parameter and the data source record with the passed value.
     * This method will apply requested update only if primary key is specified in the grid.
     * ```typescript
     * grid.updateRow({
     *       ProductID: 1, ProductName: 'Spearmint', InStock: true, UnitsInStock: 1, OrderDate: new Date('2005-03-21')
     *   }, 1);
     * ```
     * \@memberof IgxGridBaseComponent
     * @param {?} value
     * @param {?} rowSelector correspond to rowID
     * @return {?}
     */
    IgxGridBaseComponent.prototype.updateRow = /**
     * Updates the `IgxGridRowComponent`, which is specified by
     * rowSelector parameter and the data source record with the passed value.
     * This method will apply requested update only if primary key is specified in the grid.
     * ```typescript
     * grid.updateRow({
     *       ProductID: 1, ProductName: 'Spearmint', InStock: true, UnitsInStock: 1, OrderDate: new Date('2005-03-21')
     *   }, 1);
     * ```
     * \@memberof IgxGridBaseComponent
     * @param {?} value
     * @param {?} rowSelector correspond to rowID
     * @return {?}
     */
    function (value, rowSelector) {
        if (this.isDefined(this.primaryKey)) {
            /** @type {?} */
            var editableCell = this.crudService.cell;
            if (editableCell && editableCell.id.rowID === rowSelector) {
                this.gridAPI.escape_editMode();
            }
            /** @type {?} */
            var row = new IgxRow(rowSelector, -1, this.gridAPI.getRowData(rowSelector));
            this.gridAPI.update_row(row, value);
            this.cdr.markForCheck();
        }
    };
    /**
     * Sort a single `IgxColumnComponent`.
     * Sort the `IgxGridComponent`'s `IgxColumnComponent` based on the provided array of sorting expressions.
     * ```typescript
     * this.grid.sort({ fieldName: name, dir: SortingDirection.Asc, ignoreCase: false });
     * ```
     * @memberof IgxGridBaseComponent
     */
    /**
     * Sort a single `IgxColumnComponent`.
     * Sort the `IgxGridComponent`'s `IgxColumnComponent` based on the provided array of sorting expressions.
     * ```typescript
     * this.grid.sort({ fieldName: name, dir: SortingDirection.Asc, ignoreCase: false });
     * ```
     * \@memberof IgxGridBaseComponent
     * @param {?} expression
     * @return {?}
     */
    IgxGridBaseComponent.prototype.sort = /**
     * Sort a single `IgxColumnComponent`.
     * Sort the `IgxGridComponent`'s `IgxColumnComponent` based on the provided array of sorting expressions.
     * ```typescript
     * this.grid.sort({ fieldName: name, dir: SortingDirection.Asc, ignoreCase: false });
     * ```
     * \@memberof IgxGridBaseComponent
     * @param {?} expression
     * @return {?}
     */
    function (expression) {
        this.endEdit(false);
        if (expression instanceof Array) {
            this.gridAPI.sort_multiple(expression);
        }
        else {
            this.gridAPI.sort(expression);
        }
        this.onSortingDone.emit(expression);
    };
    /**
     * Filters a single `IgxColumnComponent`.
     * ```typescript
     * public filter(term) {
     *      this.grid.filter("ProductName", term, IgxStringFilteringOperand.instance().condition("contains"));
     * }
     * ```
     * @param name
     * @param value
     * @param conditionOrExpressionTree
     * @param ignoreCase
     * @memberof IgxGridBaseComponent
     */
    /**
     * Filters a single `IgxColumnComponent`.
     * ```typescript
     * public filter(term) {
     *      this.grid.filter("ProductName", term, IgxStringFilteringOperand.instance().condition("contains"));
     * }
     * ```
     * \@memberof IgxGridBaseComponent
     * @param {?} name
     * @param {?} value
     * @param {?=} conditionOrExpressionTree
     * @param {?=} ignoreCase
     * @return {?}
     */
    IgxGridBaseComponent.prototype.filter = /**
     * Filters a single `IgxColumnComponent`.
     * ```typescript
     * public filter(term) {
     *      this.grid.filter("ProductName", term, IgxStringFilteringOperand.instance().condition("contains"));
     * }
     * ```
     * \@memberof IgxGridBaseComponent
     * @param {?} name
     * @param {?} value
     * @param {?=} conditionOrExpressionTree
     * @param {?=} ignoreCase
     * @return {?}
     */
    function (name, value, conditionOrExpressionTree, ignoreCase) {
        this.filteringService.filter(name, value, conditionOrExpressionTree, ignoreCase);
    };
    /**
     * Filters all the `IgxColumnComponent` in the `IgxGridComponent` with the same condition.
     * ```typescript
     * grid.filterGlobal('some', IgxStringFilteringOperand.instance().condition('contains'));
     * ```
     * @param value
     * @param condition
     * @param ignoreCase
     * @memberof IgxGridBaseComponent
     */
    /**
     * Filters all the `IgxColumnComponent` in the `IgxGridComponent` with the same condition.
     * ```typescript
     * grid.filterGlobal('some', IgxStringFilteringOperand.instance().condition('contains'));
     * ```
     * \@memberof IgxGridBaseComponent
     * @param {?} value
     * @param {?} condition
     * @param {?=} ignoreCase
     * @return {?}
     */
    IgxGridBaseComponent.prototype.filterGlobal = /**
     * Filters all the `IgxColumnComponent` in the `IgxGridComponent` with the same condition.
     * ```typescript
     * grid.filterGlobal('some', IgxStringFilteringOperand.instance().condition('contains'));
     * ```
     * \@memberof IgxGridBaseComponent
     * @param {?} value
     * @param {?} condition
     * @param {?=} ignoreCase
     * @return {?}
     */
    function (value, condition, ignoreCase) {
        this.filteringService.filterGlobal(value, condition, ignoreCase);
    };
    /**
     * Enables summaries for the specified column and applies your customSummary.
     * If you do not provide the customSummary, then the default summary for the column data type will be applied.
     * ```typescript
     * grid.enableSummaries([{ fieldName: 'ProductName' }, { fieldName: 'ID' }]);
     * ```
     * Enable summaries for the listed columns.
     * ```typescript
     * grid.enableSummaries('ProductName');
     * ```
     * @param rest
     * @memberof IgxGridBaseComponent
     */
    /**
     * Enables summaries for the specified column and applies your customSummary.
     * If you do not provide the customSummary, then the default summary for the column data type will be applied.
     * ```typescript
     * grid.enableSummaries([{ fieldName: 'ProductName' }, { fieldName: 'ID' }]);
     * ```
     * Enable summaries for the listed columns.
     * ```typescript
     * grid.enableSummaries('ProductName');
     * ```
     * \@memberof IgxGridBaseComponent
     * @param {...?} rest
     * @return {?}
     */
    IgxGridBaseComponent.prototype.enableSummaries = /**
     * Enables summaries for the specified column and applies your customSummary.
     * If you do not provide the customSummary, then the default summary for the column data type will be applied.
     * ```typescript
     * grid.enableSummaries([{ fieldName: 'ProductName' }, { fieldName: 'ID' }]);
     * ```
     * Enable summaries for the listed columns.
     * ```typescript
     * grid.enableSummaries('ProductName');
     * ```
     * \@memberof IgxGridBaseComponent
     * @param {...?} rest
     * @return {?}
     */
    function () {
        var rest = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            rest[_i] = arguments[_i];
        }
        if (rest.length === 1 && Array.isArray(rest[0])) {
            this._multipleSummaries(rest[0], true);
        }
        else {
            this._summaries(rest[0], true, rest[1]);
        }
        this.calculateGridHeight();
        this.cdr.detectChanges();
    };
    /**
     * Disable summaries for the specified column.
     * ```typescript
     * grid.disableSummaries('ProductName');
     * ```
     *
     * Disable summaries for the listed columns.
     * ```typescript
     * grid.disableSummaries([{ fieldName: 'ProductName' }]);
     * ```
     * @memberof IgxGridBaseComponent
     */
    /**
     * Disable summaries for the specified column.
     * ```typescript
     * grid.disableSummaries('ProductName');
     * ```
     *
     * Disable summaries for the listed columns.
     * ```typescript
     * grid.disableSummaries([{ fieldName: 'ProductName' }]);
     * ```
     * \@memberof IgxGridBaseComponent
     * @param {...?} rest
     * @return {?}
     */
    IgxGridBaseComponent.prototype.disableSummaries = /**
     * Disable summaries for the specified column.
     * ```typescript
     * grid.disableSummaries('ProductName');
     * ```
     *
     * Disable summaries for the listed columns.
     * ```typescript
     * grid.disableSummaries([{ fieldName: 'ProductName' }]);
     * ```
     * \@memberof IgxGridBaseComponent
     * @param {...?} rest
     * @return {?}
     */
    function () {
        var rest = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            rest[_i] = arguments[_i];
        }
        if (rest.length === 1 && Array.isArray(rest[0])) {
            this._disableMultipleSummaries(rest[0]);
        }
        else {
            this._summaries(rest[0], false);
        }
    };
    /**
     * If name is provided, clears the filtering state of the corresponding `IgxColumnComponent`,
     * otherwise clears the filtering state of all `IgxColumnComponent`s.
     * ```typescript
     * this.grid.clearFilter();
     * ```
     * @param name
     * @memberof IgxGridBaseComponent
     */
    /**
     * If name is provided, clears the filtering state of the corresponding `IgxColumnComponent`,
     * otherwise clears the filtering state of all `IgxColumnComponent`s.
     * ```typescript
     * this.grid.clearFilter();
     * ```
     * \@memberof IgxGridBaseComponent
     * @param {?=} name
     * @return {?}
     */
    IgxGridBaseComponent.prototype.clearFilter = /**
     * If name is provided, clears the filtering state of the corresponding `IgxColumnComponent`,
     * otherwise clears the filtering state of all `IgxColumnComponent`s.
     * ```typescript
     * this.grid.clearFilter();
     * ```
     * \@memberof IgxGridBaseComponent
     * @param {?=} name
     * @return {?}
     */
    function (name) {
        this.filteringService.clearFilter(name);
    };
    /**
     * If name is provided, clears the sorting state of the corresponding `IgxColumnComponent`,
     * otherwise clears the sorting state of all `IgxColumnComponent`.
     * ```typescript
     * this.grid.clearSort();
     * ```
     * @param name
     * @memberof IgxGridBaseComponent
     */
    /**
     * If name is provided, clears the sorting state of the corresponding `IgxColumnComponent`,
     * otherwise clears the sorting state of all `IgxColumnComponent`.
     * ```typescript
     * this.grid.clearSort();
     * ```
     * \@memberof IgxGridBaseComponent
     * @param {?=} name
     * @return {?}
     */
    IgxGridBaseComponent.prototype.clearSort = /**
     * If name is provided, clears the sorting state of the corresponding `IgxColumnComponent`,
     * otherwise clears the sorting state of all `IgxColumnComponent`.
     * ```typescript
     * this.grid.clearSort();
     * ```
     * \@memberof IgxGridBaseComponent
     * @param {?=} name
     * @return {?}
     */
    function (name) {
        if (!name) {
            this.sortingExpressions = [];
            return;
        }
        if (!this.gridAPI.get_column_by_name(name)) {
            return;
        }
        this.gridAPI.clear_sort(name);
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?=} args
     * @return {?}
     */
    IgxGridBaseComponent.prototype.refreshGridState = /**
     * @hidden
     * @param {?=} args
     * @return {?}
     */
    function (args) {
        this.endEdit(true);
        this.summaryService.clearSummaryCache(args);
    };
    // TODO: We have return values here. Move them to event args ??
    /**
     * Pins a column by field name. Returns whether the operation is successful.
     * ```typescript
     * this.grid.pinColumn("ID");
     * ```
     * @param columnName
     * @param index
     * @memberof IgxGridBaseComponent
     */
    // TODO: We have return values here. Move them to event args ??
    /**
     * Pins a column by field name. Returns whether the operation is successful.
     * ```typescript
     * this.grid.pinColumn("ID");
     * ```
     * \@memberof IgxGridBaseComponent
     * @param {?} columnName
     * @param {?=} index
     * @return {?}
     */
    IgxGridBaseComponent.prototype.pinColumn = 
    // TODO: We have return values here. Move them to event args ??
    /**
     * Pins a column by field name. Returns whether the operation is successful.
     * ```typescript
     * this.grid.pinColumn("ID");
     * ```
     * \@memberof IgxGridBaseComponent
     * @param {?} columnName
     * @param {?=} index
     * @return {?}
     */
    function (columnName, index) {
        /** @type {?} */
        var col = columnName instanceof IgxColumnComponent ? columnName : this.getColumnByName(columnName);
        return col.pin(index);
    };
    /**
     * Unpins a column by field name. Returns whether the operation is successful.
     * ```typescript
     * this.grid.pinColumn("ID");
     * ```
     * @param columnName
     * @param index
     * @memberof IgxGridBaseComponent
     */
    /**
     * Unpins a column by field name. Returns whether the operation is successful.
     * ```typescript
     * this.grid.pinColumn("ID");
     * ```
     * \@memberof IgxGridBaseComponent
     * @param {?} columnName
     * @param {?=} index
     * @return {?}
     */
    IgxGridBaseComponent.prototype.unpinColumn = /**
     * Unpins a column by field name. Returns whether the operation is successful.
     * ```typescript
     * this.grid.pinColumn("ID");
     * ```
     * \@memberof IgxGridBaseComponent
     * @param {?} columnName
     * @param {?=} index
     * @return {?}
     */
    function (columnName, index) {
        /** @type {?} */
        var col = columnName instanceof IgxColumnComponent ? columnName : this.getColumnByName(columnName);
        return col.unpin(index);
    };
    /**
     * Recalculates grid width/height dimensions. Should be run when changing DOM elements dimentions manually that affect the grid's size.
     * ```typescript
     * this.grid.reflow();
     * ```
     * @memberof IgxGridBaseComponent
     */
    /**
     * Recalculates grid width/height dimensions. Should be run when changing DOM elements dimentions manually that affect the grid's size.
     * ```typescript
     * this.grid.reflow();
     * ```
     * \@memberof IgxGridBaseComponent
     * @return {?}
     */
    IgxGridBaseComponent.prototype.reflow = /**
     * Recalculates grid width/height dimensions. Should be run when changing DOM elements dimentions manually that affect the grid's size.
     * ```typescript
     * this.grid.reflow();
     * ```
     * \@memberof IgxGridBaseComponent
     * @return {?}
     */
    function () {
        this.calculateGridSizes();
    };
    /**
     * Finds the next occurrence of a given string in the grid and scrolls to the cell if it isn't visible.
     * Returns how many times the grid contains the string.
     * ```typescript
     * this.grid.findNext("financial");
     * ```
     * @param text the string to search.
     * @param caseSensitive optionally, if the search should be case sensitive (defaults to false).
     * @param exactMatch optionally, if the text should match the entire value  (defaults to false).
     * @memberof IgxGridBaseComponent
     */
    /**
     * Finds the next occurrence of a given string in the grid and scrolls to the cell if it isn't visible.
     * Returns how many times the grid contains the string.
     * ```typescript
     * this.grid.findNext("financial");
     * ```
     * \@memberof IgxGridBaseComponent
     * @param {?} text the string to search.
     * @param {?=} caseSensitive optionally, if the search should be case sensitive (defaults to false).
     * @param {?=} exactMatch optionally, if the text should match the entire value  (defaults to false).
     * @return {?}
     */
    IgxGridBaseComponent.prototype.findNext = /**
     * Finds the next occurrence of a given string in the grid and scrolls to the cell if it isn't visible.
     * Returns how many times the grid contains the string.
     * ```typescript
     * this.grid.findNext("financial");
     * ```
     * \@memberof IgxGridBaseComponent
     * @param {?} text the string to search.
     * @param {?=} caseSensitive optionally, if the search should be case sensitive (defaults to false).
     * @param {?=} exactMatch optionally, if the text should match the entire value  (defaults to false).
     * @return {?}
     */
    function (text, caseSensitive, exactMatch) {
        return this.find(text, 1, caseSensitive, exactMatch);
    };
    /**
     * Finds the previous occurrence of a given string in the grid and scrolls to the cell if it isn't visible.
     * Returns how many times the grid contains the string.
     * ```typescript
     * this.grid.findPrev("financial");
     * ````
     * @param text the string to search.
     * @param caseSensitive optionally, if the search should be case sensitive (defaults to false).
     * @param exactMatch optionally, if the text should match the entire value (defaults to false).
     * @memberof IgxGridBaseComponent
     */
    /**
     * Finds the previous occurrence of a given string in the grid and scrolls to the cell if it isn't visible.
     * Returns how many times the grid contains the string.
     * ```typescript
     * this.grid.findPrev("financial");
     * ````
     * \@memberof IgxGridBaseComponent
     * @param {?} text the string to search.
     * @param {?=} caseSensitive optionally, if the search should be case sensitive (defaults to false).
     * @param {?=} exactMatch optionally, if the text should match the entire value (defaults to false).
     * @return {?}
     */
    IgxGridBaseComponent.prototype.findPrev = /**
     * Finds the previous occurrence of a given string in the grid and scrolls to the cell if it isn't visible.
     * Returns how many times the grid contains the string.
     * ```typescript
     * this.grid.findPrev("financial");
     * ````
     * \@memberof IgxGridBaseComponent
     * @param {?} text the string to search.
     * @param {?=} caseSensitive optionally, if the search should be case sensitive (defaults to false).
     * @param {?=} exactMatch optionally, if the text should match the entire value (defaults to false).
     * @return {?}
     */
    function (text, caseSensitive, exactMatch) {
        return this.find(text, -1, caseSensitive, exactMatch);
    };
    /**
     * Reapplies the existing search.
     * Returns how many times the grid contains the last search.
     * ```typescript
     * this.grid.refreshSearch();
     * ```
     * @param updateActiveInfo
     * @memberof IgxGridBaseComponent
     */
    /**
     * Reapplies the existing search.
     * Returns how many times the grid contains the last search.
     * ```typescript
     * this.grid.refreshSearch();
     * ```
     * \@memberof IgxGridBaseComponent
     * @param {?=} updateActiveInfo
     * @return {?}
     */
    IgxGridBaseComponent.prototype.refreshSearch = /**
     * Reapplies the existing search.
     * Returns how many times the grid contains the last search.
     * ```typescript
     * this.grid.refreshSearch();
     * ```
     * \@memberof IgxGridBaseComponent
     * @param {?=} updateActiveInfo
     * @return {?}
     */
    function (updateActiveInfo) {
        var _this = this;
        if (this.lastSearchInfo.searchText) {
            this.rebuildMatchCache();
            if (updateActiveInfo) {
                /** @type {?} */
                var activeInfo_1 = IgxTextHighlightDirective.highlightGroupsMap.get(this.id);
                this.lastSearchInfo.matchInfoCache.forEach(function (match, i) {
                    if (match.column === activeInfo_1.column &&
                        match.row === activeInfo_1.row &&
                        match.index === activeInfo_1.index) {
                        _this.lastSearchInfo.activeMatchIndex = i;
                    }
                });
            }
            return this.find(this.lastSearchInfo.searchText, 0, this.lastSearchInfo.caseSensitive, this.lastSearchInfo.exactMatch, false);
        }
        else {
            return 0;
        }
    };
    /**
     * Removes all the highlights in the cell.
     * ```typescript
     * this.grid.clearSearch();
     * ```
     * @memberof IgxGridBaseComponent
     */
    /**
     * Removes all the highlights in the cell.
     * ```typescript
     * this.grid.clearSearch();
     * ```
     * \@memberof IgxGridBaseComponent
     * @return {?}
     */
    IgxGridBaseComponent.prototype.clearSearch = /**
     * Removes all the highlights in the cell.
     * ```typescript
     * this.grid.clearSearch();
     * ```
     * \@memberof IgxGridBaseComponent
     * @return {?}
     */
    function () {
        this.lastSearchInfo = {
            searchText: '',
            caseSensitive: false,
            exactMatch: false,
            activeMatchIndex: 0,
            matchInfoCache: []
        };
        this.rowList.forEach(function (row) {
            if (row.cells) {
                row.cells.forEach(function (c) {
                    c.clearHighlight();
                });
            }
        });
    };
    Object.defineProperty(IgxGridBaseComponent.prototype, "hasSortableColumns", {
        /**
         * Returns if the `IgxGridComponent` has sortable columns.
         * ```typescript
         * const sortableGrid = this.grid.hasSortableColumns;
         * ```
         * @memberof IgxGridBaseComponent
         */
        get: /**
         * Returns if the `IgxGridComponent` has sortable columns.
         * ```typescript
         * const sortableGrid = this.grid.hasSortableColumns;
         * ```
         * \@memberof IgxGridBaseComponent
         * @return {?}
         */
        function () {
            return this.columnList.some(function (col) { return col.sortable; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxGridBaseComponent.prototype, "hasEditableColumns", {
        /**
         * Returns if the `IgxGridComponent` has editable columns.
         * ```typescript
         * const editableGrid = this.grid.hasEditableColumns;
         * ```
         * @memberof IgxGridBaseComponent
         */
        get: /**
         * Returns if the `IgxGridComponent` has editable columns.
         * ```typescript
         * const editableGrid = this.grid.hasEditableColumns;
         * ```
         * \@memberof IgxGridBaseComponent
         * @return {?}
         */
        function () {
            return this.columnList.some(function (col) { return col.editable; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxGridBaseComponent.prototype, "hasFilterableColumns", {
        /**
         * Returns if the `IgxGridComponent` has fiterable columns.
         * ```typescript
         * const filterableGrid = this.grid.hasFilterableColumns;
         * ```
         * @memberof IgxGridBaseComponent
         */
        get: /**
         * Returns if the `IgxGridComponent` has fiterable columns.
         * ```typescript
         * const filterableGrid = this.grid.hasFilterableColumns;
         * ```
         * \@memberof IgxGridBaseComponent
         * @return {?}
         */
        function () {
            return this.columnList.some(function (col) { return col.filterable; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxGridBaseComponent.prototype, "hasSummarizedColumns", {
        /**
         * Returns if the `IgxGridComponent` has summarized columns.
         * ```typescript
         * const summarizedGrid = this.grid.hasSummarizedColumns;
         * ```
         * @memberof IgxGridBaseComponent
         */
        get: /**
         * Returns if the `IgxGridComponent` has summarized columns.
         * ```typescript
         * const summarizedGrid = this.grid.hasSummarizedColumns;
         * ```
         * \@memberof IgxGridBaseComponent
         * @return {?}
         */
        function () {
            return this.summaryService.hasSummarizedColumns;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxGridBaseComponent.prototype, "rootSummariesEnabled", {
        /**
         * @hidden
         */
        get: /**
         * @hidden
         * @return {?}
         */
        function () {
            return this.summaryCalculationMode !== GridSummaryCalculationMode.childLevelsOnly;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxGridBaseComponent.prototype, "hasMovableColumns", {
        /**
         * Returns if the `IgxGridComponent` has moveable columns.
         * ```typescript
         * const movableGrid = this.grid.hasMovableColumns;
         * ```
         * @memberof IgxGridBaseComponent
         */
        get: /**
         * Returns if the `IgxGridComponent` has moveable columns.
         * ```typescript
         * const movableGrid = this.grid.hasMovableColumns;
         * ```
         * \@memberof IgxGridBaseComponent
         * @return {?}
         */
        function () {
            return this.columnList && this.columnList.some(function (col) { return col.movable; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxGridBaseComponent.prototype, "hasColumnGroups", {
        /**
         * Returns if the `IgxGridComponent` has column groups.
         * ```typescript
         * const groupGrid = this.grid.hasColumnGroups;
         * ```
         * @memberof IgxGridBaseComponent
         */
        get: /**
         * Returns if the `IgxGridComponent` has column groups.
         * ```typescript
         * const groupGrid = this.grid.hasColumnGroups;
         * ```
         * \@memberof IgxGridBaseComponent
         * @return {?}
         */
        function () {
            return this._columnGroups;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxGridBaseComponent.prototype, "hasColumnLayouts", {
        /**
         * Returns if the `IgxGridComponent` has column layouts for multi-row layout definition.
         * ```typescript
         * const layoutGrid = this.grid.hasColumnLayouts;
         * ```
         * @memberof IgxGridBaseComponent
         */
        get: /**
         * Returns if the `IgxGridComponent` has column layouts for multi-row layout definition.
         * ```typescript
         * const layoutGrid = this.grid.hasColumnLayouts;
         * ```
         * \@memberof IgxGridBaseComponent
         * @return {?}
         */
        function () {
            return !!this.columnList.some(function (col) { return col.columnLayout; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxGridBaseComponent.prototype, "selectedCells", {
        /**
         * Returns an array of the selected `IgxGridCellComponent`s.
         * ```typescript
         * const selectedCells = this.grid.selectedCells;
         * ```
         * @memberof IgxGridBaseComponent
         */
        get: /**
         * Returns an array of the selected `IgxGridCellComponent`s.
         * ```typescript
         * const selectedCells = this.grid.selectedCells;
         * ```
         * \@memberof IgxGridBaseComponent
         * @return {?}
         */
        function () {
            if (this.dataRowList) {
                return this.dataRowList.map(function (row) { return row.cells.filter(function (cell) { return cell.selected; }); })
                    .reduce(function (a, b) { return a.concat(b); }, []);
            }
            return [];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxGridBaseComponent.prototype, "multiRowLayoutRowSize", {
        /**
         * @hidden
         */
        get: /**
         * @hidden
         * @return {?}
         */
        function () {
            return this._multiRowLayoutRowSize;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxGridBaseComponent.prototype, "rowBasedHeight", {
        /**
         * @hidden
         */
        get: /**
         * @hidden
         * @protected
         * @return {?}
         */
        function () {
            return this.dataLength * this.rowHeight;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxGridBaseComponent.prototype, "isPercentWidth", {
        /**
         * @hidden
         */
        get: /**
         * @hidden
         * @protected
         * @return {?}
         */
        function () {
            return this.width && this.width.indexOf('%') !== -1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxGridBaseComponent.prototype, "isPercentHeight", {
        /**
         * @hidden @internal
         */
        get: /**
         * @hidden \@internal
         * @return {?}
         */
        function () {
            return this._height && this._height.indexOf('%') !== -1;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @hidden
     * Sets columns defaultWidth property
     */
    /**
     * @hidden
     * Sets columns defaultWidth property
     * @protected
     * @return {?}
     */
    IgxGridBaseComponent.prototype._derivePossibleWidth = /**
     * @hidden
     * Sets columns defaultWidth property
     * @protected
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.columnWidthSetByUser) {
            this._columnWidth = this.getPossibleColumnWidth();
            this.columnList.forEach(function (column) {
                if (_this.hasColumnLayouts && parseInt(_this._columnWidth, 10)) {
                    /** @type {?} */
                    var columnWidthCombined = parseInt(_this._columnWidth, 10) * (column.colEnd ? column.colEnd - column.colStart : 1);
                    column.defaultWidth = columnWidthCombined + 'px';
                }
                else {
                    column.defaultWidth = _this._columnWidth;
                    column.resetCaches();
                }
            });
            this.resetCachedWidths();
        }
    };
    Object.defineProperty(IgxGridBaseComponent.prototype, "defaultTargetBodyHeight", {
        /**
         * @hidden
         */
        get: /**
         * @hidden
         * @protected
         * @return {?}
         */
        function () {
            /** @type {?} */
            var allItems = this.dataLength;
            return this.renderedRowHeight * Math.min(this._defaultTargetRecordNumber, this.paging ? Math.min(allItems, this.perPage) : allItems);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxGridBaseComponent.prototype, "renderedRowHeight", {
        /**
         * @hidden @internal
         * The rowHeight input is bound to min-height css prop of rows that adds a 1px border in all cases
         */
        get: /**
         * @hidden \@internal
         * The rowHeight input is bound to min-height css prop of rows that adds a 1px border in all cases
         * @return {?}
         */
        function () {
            return this.rowHeight + 1;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @hidden
     * Sets TBODY height i.e. this.calcHeight
     */
    /**
     * @hidden
     * Sets TBODY height i.e. this.calcHeight
     * @protected
     * @return {?}
     */
    IgxGridBaseComponent.prototype.calculateGridHeight = /**
     * @hidden
     * Sets TBODY height i.e. this.calcHeight
     * @protected
     * @return {?}
     */
    function () {
        if (this.maxLevelHeaderDepth) {
            this._baseFontSize = parseFloat(getComputedStyle(this.document.documentElement).getPropertyValue('font-size'));
            /** @type {?} */
            var minSize = (this.maxLevelHeaderDepth + 1) * this.defaultRowHeight / this._baseFontSize;
            if (this._allowFiltering && this._filterMode === FilterMode.quickFilter) {
                minSize += (FILTER_ROW_HEIGHT + 1) / this._baseFontSize;
            }
            this.theadRow.nativeElement.style.minHeight = minSize + "rem";
        }
        this.summariesHeight = 0;
        if (this.hasSummarizedColumns && this.rootSummariesEnabled) {
            this.summariesHeight = this.summaryService.calcMaxSummaryHeight();
        }
        this.calcHeight = this._calculateGridBodyHeight();
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @protected
     * @return {?}
     */
    IgxGridBaseComponent.prototype.getGroupAreaHeight = /**
     * @hidden
     * @protected
     * @return {?}
     */
    function () {
        return 0;
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @protected
     * @return {?}
     */
    IgxGridBaseComponent.prototype.getToolbarHeight = /**
     * @hidden
     * @protected
     * @return {?}
     */
    function () {
        /** @type {?} */
        var toolbarHeight = 0;
        if (this.showToolbar && this.toolbarHtml != null) {
            toolbarHeight = this.toolbarHtml.nativeElement.firstElementChild ?
                this.toolbarHtml.nativeElement.offsetHeight : 0;
        }
        return toolbarHeight;
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @protected
     * @return {?}
     */
    IgxGridBaseComponent.prototype.getPagingHeight = /**
     * @hidden
     * @protected
     * @return {?}
     */
    function () {
        /** @type {?} */
        var pagingHeight = 0;
        if (this.footer) {
            pagingHeight = this.footer.nativeElement.firstElementChild ?
                this.footer.nativeElement.offsetHeight : 0;
        }
        return pagingHeight;
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @protected
     * @return {?}
     */
    IgxGridBaseComponent.prototype._calculateGridBodyHeight = /**
     * @hidden
     * @protected
     * @return {?}
     */
    function () {
        if (!this._height) {
            return null;
        }
        /** @type {?} */
        var footerBordersAndScrollbars = this.tfoot.nativeElement.offsetHeight -
            this.tfoot.nativeElement.clientHeight;
        /** @type {?} */
        var gridHeight;
        /** @type {?} */
        var computed = this.document.defaultView.getComputedStyle(this.nativeElement);
        /** @type {?} */
        var toolbarHeight = this.getToolbarHeight();
        /** @type {?} */
        var pagingHeight = this.getPagingHeight();
        /** @type {?} */
        var groupAreaHeight = this.getGroupAreaHeight();
        /** @type {?} */
        var renderedHeight = toolbarHeight + this.theadRow.nativeElement.offsetHeight +
            this.summariesHeight + pagingHeight + groupAreaHeight + footerBordersAndScrollbars +
            this.scr.nativeElement.clientHeight;
        if (this.isPercentHeight) {
            /*height in %*/
            if (!this.nativeElement.parentElement ||
                this.nativeElement.parentElement.clientHeight === renderedHeight) {
                /* parent element is sized by the rendered elements which means
                the grid should attempt a content-box style rendering */
                this._autoSize = true;
            }
            if (this._autoSize || computed.getPropertyValue('height').indexOf('%') !== -1) {
                /** @type {?} */
                var bodyHeight = this.getDataBasedBodyHeight();
                return bodyHeight > 0 ? bodyHeight : null;
            }
            gridHeight = parseInt(computed.getPropertyValue('height'), 10);
        }
        else {
            gridHeight = parseInt(this._height, 10);
        }
        /** @type {?} */
        var height = Math.abs(gridHeight - renderedHeight);
        if (height === 0 || isNaN(gridHeight)) {
            /** @type {?} */
            var bodyHeight = this.defaultTargetBodyHeight;
            return bodyHeight > 0 ? bodyHeight : null;
        }
        return height;
    };
    Object.defineProperty(IgxGridBaseComponent.prototype, "outerWidth", {
        get: /**
         * @return {?}
         */
        function () {
            return this.hasVerticalSroll() ? this.calcWidth + this.scrollWidth : this.calcWidth;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @hidden
     * Gets the visible content height that includes header + tbody + footer.
     */
    /**
     * @hidden
     * Gets the visible content height that includes header + tbody + footer.
     * @return {?}
     */
    IgxGridBaseComponent.prototype.getVisibleContentHeight = /**
     * @hidden
     * Gets the visible content height that includes header + tbody + footer.
     * @return {?}
     */
    function () {
        /** @type {?} */
        var height = this.theadRow.nativeElement.clientHeight + this.tbody.nativeElement.clientHeight;
        if (this.hasSummarizedColumns) {
            height += this.tfoot.nativeElement.clientHeight;
        }
        return height;
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?=} baseWidth
     * @return {?}
     */
    IgxGridBaseComponent.prototype.getPossibleColumnWidth = /**
     * @hidden
     * @param {?=} baseWidth
     * @return {?}
     */
    function (baseWidth) {
        if (baseWidth === void 0) { baseWidth = null; }
        /** @type {?} */
        var computedWidth;
        if (baseWidth !== null) {
            computedWidth = baseWidth;
        }
        else {
            computedWidth = this.calcWidth ||
                parseInt(this.document.defaultView.getComputedStyle(this.nativeElement).getPropertyValue('width'), 10);
        }
        if (this.showRowCheckboxes) {
            computedWidth -= this.headerCheckboxContainer ? this.headerCheckboxContainer.nativeElement.offsetWidth : 0;
        }
        /** @type {?} */
        var visibleChildColumns = this.visibleColumns.filter(function (c) { return !c.columnGroup; });
        // Column layouts related
        /** @type {?} */
        var visibleCols = [];
        /** @type {?} */
        var columnBlocks = this.visibleColumns.filter(function (c) { return c.columnGroup; });
        /** @type {?} */
        var colsPerBlock = columnBlocks.map(function (block) { return block.getInitialChildColumnSizes(block.children); });
        /** @type {?} */
        var combinedBlocksSize = colsPerBlock.reduce(function (acc, item) { return acc + item.length; }, 0);
        colsPerBlock.forEach(function (blockCols) { return visibleCols = visibleCols.concat(blockCols); });
        //
        /** @type {?} */
        var columnsWithSetWidths = this.hasColumnLayouts ?
            visibleCols.filter(function (c) { return c.widthSetByUser; }) :
            visibleChildColumns.filter(function (c) { return c.widthSetByUser; });
        /** @type {?} */
        var columnsToSize = this.hasColumnLayouts ?
            combinedBlocksSize - columnsWithSetWidths.length :
            visibleChildColumns.length - columnsWithSetWidths.length;
        /** @type {?} */
        var sumExistingWidths = columnsWithSetWidths
            .reduce(function (prev, curr) {
            /** @type {?} */
            var colWidth = curr.width;
            /** @type {?} */
            var widthValue = parseInt(colWidth, 10);
            /** @type {?} */
            var currWidth = colWidth && typeof colWidth === 'string' && colWidth.indexOf('%') !== -1 ?
                widthValue / 100 * computedWidth :
                widthValue;
            return prev + currWidth;
        }, 0);
        /** @type {?} */
        var columnWidth = Math.floor(!Number.isFinite(sumExistingWidths) ?
            Math.max(computedWidth / columnsToSize, MINIMUM_COLUMN_WIDTH) :
            Math.max((computedWidth - sumExistingWidths) / columnsToSize, MINIMUM_COLUMN_WIDTH));
        return columnWidth.toString();
    };
    /**
     * @hidden
     * Sets grid width i.e. this.calcWidth
     */
    /**
     * @hidden
     * Sets grid width i.e. this.calcWidth
     * @protected
     * @return {?}
     */
    IgxGridBaseComponent.prototype.calculateGridWidth = /**
     * @hidden
     * Sets grid width i.e. this.calcWidth
     * @protected
     * @return {?}
     */
    function () {
        /** @type {?} */
        var width;
        /** @type {?} */
        var computed = this.document.defaultView.getComputedStyle(this.nativeElement);
        /** @type {?} */
        var el = this.document.getElementById(this.nativeElement.id);
        if (this.isPercentWidth) {
            /* width in %*/
            width = computed.getPropertyValue('width').indexOf('%') === -1 ?
                parseInt(computed.getPropertyValue('width'), 10) : null;
        }
        else {
            width = parseInt(this.width, 10);
        }
        if (!width && el) {
            width = el.offsetWidth;
        }
        if (!width) {
            width = this.columnList.reduce(function (sum, item) { return sum + parseInt((item.width || item.defaultWidth), 10); }, 0);
        }
        if (this.hasVerticalSroll()) {
            width -= this.scrollWidth;
        }
        if (Number.isFinite(width) && width !== this.calcWidth) {
            this.calcWidth = width;
            this.cdr.detectChanges();
        }
        this._derivePossibleWidth();
    };
    /**
     * @return {?}
     */
    IgxGridBaseComponent.prototype.hasVerticalSroll = /**
     * @return {?}
     */
    function () {
        if (!this._ngAfterViewInitPassed) {
            return false;
        }
        /** @type {?} */
        var isScrollable = this.verticalScrollContainer.isScrollable();
        return !!(this.calcWidth && this.verticalScrollContainer.igxForOf &&
            this.verticalScrollContainer.igxForOf.length > 0 &&
            isScrollable);
    };
    /**
     * @hidden @internal
     */
    /**
     * @hidden \@internal
     * @protected
     * @return {?}
     */
    IgxGridBaseComponent.prototype.getDataBasedBodyHeight = /**
     * @hidden \@internal
     * @protected
     * @return {?}
     */
    function () {
        return !this.data || (this.data.length < this._defaultTargetRecordNumber) ?
            0 : this.defaultTargetBodyHeight;
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @protected
     * @param {?} change
     * @return {?}
     */
    IgxGridBaseComponent.prototype.onColumnsChanged = /**
     * @hidden
     * @protected
     * @param {?} change
     * @return {?}
     */
    function (change) {
        var _this = this;
        /** @type {?} */
        var diff = this.columnListDiffer.diff(change);
        if (diff) {
            /** @type {?} */
            var added_1 = false;
            /** @type {?} */
            var removed_1 = false;
            this.initColumns(this.columnList);
            diff.forEachAddedItem(function (record) {
                _this.onColumnInit.emit(record.item);
                added_1 = true;
            });
            diff.forEachRemovedItem(function (record) {
                // Clear Filtering
                _this.gridAPI.clear_filter(record.item.field);
                // Clear Sorting
                _this.gridAPI.clear_sort(record.item.field);
                removed_1 = true;
            });
            this.resetCaches();
            if (added_1 || removed_1) {
                this.summaryService.clearSummaryCache();
                this.calculateGridSizes();
            }
        }
        this.markForCheck();
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @protected
     * @return {?}
     */
    IgxGridBaseComponent.prototype.calculateGridSizes = /**
     * @hidden
     * @protected
     * @return {?}
     */
    function () {
        /*
            TODO: (R.K.) This layered lasagne should be refactored
            ASAP. The reason I have to reset the caches so many times is because
            after teach `detectChanges` call they are filled with invalid
            state. Of course all of this happens midway through the grid
            sizing process which of course, uses values from the caches, thus resulting
            in a broken layout.
        */
        this.resetCaches();
        /** @type {?} */
        var hasScroll = this.hasVerticalSroll();
        this.calculateGridWidth();
        this.resetCaches();
        this.cdr.detectChanges();
        this.calculateGridHeight();
        if (this.rowEditable) {
            this.repositionRowEditingOverlay(this.rowInEditMode);
        }
        if (this.filteringService.isFilterRowVisible) {
            this.filteringRow.resetChipsArea();
        }
        this.cdr.detectChanges();
        this.resetCaches();
        // in case scrollbar has appeared recalc to size correctly.
        if (hasScroll !== this.hasVerticalSroll()) {
            this.calculateGridWidth();
            this.cdr.detectChanges();
            this.resetCaches();
        }
    };
    /**
     * @hidden
     * Gets the combined width of the columns that are specific to the enabled grid features. They are fixed.
     * Method used to override the calculations.
     * TODO: Remove for Angular 8. Calling parent class getter using super is not supported for now.
     */
    /**
     * @hidden
     * Gets the combined width of the columns that are specific to the enabled grid features. They are fixed.
     * Method used to override the calculations.
     * TODO: Remove for Angular 8. Calling parent class getter using super is not supported for now.
     * @return {?}
     */
    IgxGridBaseComponent.prototype.getFeatureColumnsWidth = /**
     * @hidden
     * Gets the combined width of the columns that are specific to the enabled grid features. They are fixed.
     * Method used to override the calculations.
     * TODO: Remove for Angular 8. Calling parent class getter using super is not supported for now.
     * @return {?}
     */
    function () {
        /** @type {?} */
        var width = 0;
        if (this.headerCheckboxContainer) {
            width += this.headerCheckboxContainer.nativeElement.getBoundingClientRect().width;
        }
        if (this.headerDragContainer) {
            width += this.headerDragContainer.nativeElement.getBoundingClientRect().width;
        }
        return width;
    };
    /**
     * Gets calculated width of the pinned area.
     * ```typescript
     * const pinnedWidth = this.grid.getPinnedWidth();
     * ```
     * @param takeHidden If we should take into account the hidden columns in the pinned area.
     * @memberof IgxGridBaseComponent
     */
    /**
     * Gets calculated width of the pinned area.
     * ```typescript
     * const pinnedWidth = this.grid.getPinnedWidth();
     * ```
     * \@memberof IgxGridBaseComponent
     * @param {?=} takeHidden If we should take into account the hidden columns in the pinned area.
     * @return {?}
     */
    IgxGridBaseComponent.prototype.getPinnedWidth = /**
     * Gets calculated width of the pinned area.
     * ```typescript
     * const pinnedWidth = this.grid.getPinnedWidth();
     * ```
     * \@memberof IgxGridBaseComponent
     * @param {?=} takeHidden If we should take into account the hidden columns in the pinned area.
     * @return {?}
     */
    function (takeHidden) {
        var e_1, _a;
        if (takeHidden === void 0) { takeHidden = false; }
        /** @type {?} */
        var fc = takeHidden ? this._pinnedColumns : this.pinnedColumns;
        /** @type {?} */
        var sum = 0;
        try {
            for (var fc_1 = tslib_1.__values(fc), fc_1_1 = fc_1.next(); !fc_1_1.done; fc_1_1 = fc_1.next()) {
                var col = fc_1_1.value;
                if (col.level === 0) {
                    sum += parseInt(col.calcWidth, 10);
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (fc_1_1 && !fc_1_1.done && (_a = fc_1.return)) _a.call(fc_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        sum += this.featureColumnsWidth;
        return sum;
    };
    /**
     * @hidden
     * Gets calculated width of the unpinned area
     * @param takeHidden If we should take into account the hidden columns in the pinned area.
     * @memberof IgxGridBaseComponent
     */
    /**
     * @hidden
     * Gets calculated width of the unpinned area
     * \@memberof IgxGridBaseComponent
     * @protected
     * @param {?=} takeHidden If we should take into account the hidden columns in the pinned area.
     * @return {?}
     */
    IgxGridBaseComponent.prototype.getUnpinnedWidth = /**
     * @hidden
     * Gets calculated width of the unpinned area
     * \@memberof IgxGridBaseComponent
     * @protected
     * @param {?=} takeHidden If we should take into account the hidden columns in the pinned area.
     * @return {?}
     */
    function (takeHidden) {
        if (takeHidden === void 0) { takeHidden = false; }
        /** @type {?} */
        var width = this.isPercentWidth ?
            this.calcWidth :
            parseInt(this.width, 10);
        if (this.hasVerticalSroll() && !this.isPercentWidth) {
            width -= this.scrollWidth;
        }
        return width - this.getPinnedWidth(takeHidden);
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @protected
     * @param {?} fieldName
     * @param {?} hasSummary
     * @param {?=} summaryOperand
     * @return {?}
     */
    IgxGridBaseComponent.prototype._summaries = /**
     * @hidden
     * @protected
     * @param {?} fieldName
     * @param {?} hasSummary
     * @param {?=} summaryOperand
     * @return {?}
     */
    function (fieldName, hasSummary, summaryOperand) {
        /** @type {?} */
        var column = this.gridAPI.get_column_by_name(fieldName);
        if (column) {
            column.hasSummary = hasSummary;
            if (summaryOperand) {
                if (this.rootSummariesEnabled) {
                    this.summaryService.retriggerRootPipe++;
                }
                column.summaries = summaryOperand;
            }
        }
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @protected
     * @param {?} expressions
     * @param {?} hasSummary
     * @return {?}
     */
    IgxGridBaseComponent.prototype._multipleSummaries = /**
     * @hidden
     * @protected
     * @param {?} expressions
     * @param {?} hasSummary
     * @return {?}
     */
    function (expressions, hasSummary) {
        var _this = this;
        expressions.forEach(function (element) {
            _this._summaries(element.fieldName, hasSummary, element.customSummary);
        });
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @protected
     * @param {?} expressions
     * @return {?}
     */
    IgxGridBaseComponent.prototype._disableMultipleSummaries = /**
     * @hidden
     * @protected
     * @param {?} expressions
     * @return {?}
     */
    function (expressions) {
        var _this = this;
        expressions.forEach(function (column) {
            /** @type {?} */
            var columnName = column && column.fieldName ? column.fieldName : column;
            _this._summaries(columnName, false);
        });
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @protected
     * @param {?} rec
     * @return {?}
     */
    IgxGridBaseComponent.prototype.resolveDataTypes = /**
     * @hidden
     * @protected
     * @param {?} rec
     * @return {?}
     */
    function (rec) {
        if (typeof rec === 'number') {
            return DataType.Number;
        }
        else if (typeof rec === 'boolean') {
            return DataType.Boolean;
        }
        else if (typeof rec === 'object' && rec instanceof Date) {
            return DataType.Date;
        }
        return DataType.String;
    };
    /**
     * @private
     * @return {?}
     */
    IgxGridBaseComponent.prototype.getScrollWidth = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var div = document.createElement('div');
        /** @type {?} */
        var style = div.style;
        style.width = '100px';
        style.height = '100px';
        style.position = 'absolute';
        style.top = '-10000px';
        style.top = '-10000px';
        style.overflow = 'scroll';
        document.body.appendChild(div);
        /** @type {?} */
        var scrollWidth = div.offsetWidth - div.clientWidth;
        document.body.removeChild(div);
        return scrollWidth;
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @protected
     * @return {?}
     */
    IgxGridBaseComponent.prototype.autogenerateColumns = /**
     * @hidden
     * @protected
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var data = this.gridAPI.get_data();
        /** @type {?} */
        var factory = this.resolver.resolveComponentFactory(IgxColumnComponent);
        /** @type {?} */
        var fields = this.generateDataFields(data);
        /** @type {?} */
        var columns = [];
        fields.forEach(function (field) {
            /** @type {?} */
            var ref = _this.viewRef.createComponent(factory, null, _this.viewRef.injector);
            ref.instance.field = field;
            ref.instance.dataType = _this.resolveDataTypes(data[0][field]);
            ref.changeDetectorRef.detectChanges();
            columns.push(ref.instance);
        });
        this.columnList.reset(columns);
        if (data && data.length > 0) {
            this.shouldGenerate = false;
        }
    };
    /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    IgxGridBaseComponent.prototype.generateDataFields = /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    function (data) {
        return Object.keys(data && data.length !== 0 ? data[0] : []);
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} arr
     * @return {?}
     */
    IgxGridBaseComponent.prototype.onlyTopLevel = /**
     * @hidden
     * @param {?} arr
     * @return {?}
     */
    function (arr) {
        return arr.filter(function (c) { return c.level === 0; });
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @protected
     * @param {?} collection
     * @param {?=} cb
     * @return {?}
     */
    IgxGridBaseComponent.prototype.initColumns = /**
     * @hidden
     * @protected
     * @param {?} collection
     * @param {?=} cb
     * @return {?}
     */
    function (collection, cb) {
        var _this = this;
        if (cb === void 0) { cb = null; }
        // XXX: Deprecate index
        this._columnGroups = this.columnList.some(function (col) { return col.columnGroup; });
        if (this.hasColumnLayouts) {
            // Set overall row layout size
            this.columnList.forEach(function (col) {
                if (col.columnLayout) {
                    /** @type {?} */
                    var layoutSize = col.children ?
                        col.children.reduce(function (acc, val) { return Math.max(val.rowStart + val.gridRowSpan - 1, acc); }, 1) :
                        1;
                    _this._multiRowLayoutRowSize = Math.max(layoutSize, _this._multiRowLayoutRowSize);
                }
            });
        }
        if (this.hasColumnLayouts && this.hasColumnGroups) {
            // invalid configuration - multi-row and column groups
            // remove column groups
            /** @type {?} */
            var columnLayoutColumns = this.columnList.filter(function (col) { return col.columnLayout || col.columnLayoutChild; });
            this.columnList.reset(columnLayoutColumns);
        }
        this._maxLevelHeaderDepth = null;
        this._columns = this.columnList.toArray();
        collection.forEach(function (column) {
            column.grid = _this;
            column.defaultWidth = _this.columnWidth;
            if (cb) {
                cb(column);
            }
        });
        this.reinitPinStates();
        if (this.hasColumnLayouts) {
            collection.forEach(function (column) {
                column.populateVisibleIndexes();
            });
        }
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @protected
     * @return {?}
     */
    IgxGridBaseComponent.prototype.reinitPinStates = /**
     * @hidden
     * @protected
     * @return {?}
     */
    function () {
        var _this = this;
        this._pinnedColumns = (this.hasColumnGroups) ? this.columnList.filter(function (c) { return c.pinned; }) :
            this.columnList.filter(function (c) { return c.pinned; }).sort(function (a, b) { return _this._pinnedColumns.indexOf(a) - _this._pinnedColumns.indexOf(b); });
        this._unpinnedColumns = this.columnList.filter(function (c) { return !c.pinned; });
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} fieldName
     * @return {?}
     */
    IgxGridBaseComponent.prototype.isColumnGrouped = /**
     * @hidden
     * @param {?} fieldName
     * @return {?}
     */
    function (fieldName) {
        return false;
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} event
     * @param {?} filteredData
     * @return {?}
     */
    IgxGridBaseComponent.prototype.onHeaderCheckboxClick = /**
     * @hidden
     * @param {?} event
     * @param {?} filteredData
     * @return {?}
     */
    function (event, filteredData) {
        this.allRowsSelected = event.checked;
        /** @type {?} */
        var newSelection = event.checked ?
            filteredData ?
                this.selection.add_items(this.id, this.selection.get_all_ids(filteredData, this.primaryKey)) :
                this.selection.get_all_ids(this.gridAPI.get_all_data(true), this.primaryKey) :
            filteredData ?
                this.selection.delete_items(this.id, this.selection.get_all_ids(filteredData, this.primaryKey)) :
                this.selection.get_empty();
        this.triggerRowSelectionChange(newSelection, null, event, event.checked);
        this.checkHeaderCheckboxStatus(event.checked);
    };
    Object.defineProperty(IgxGridBaseComponent.prototype, "headerCheckboxAriaLabel", {
        /**
         * @hidden
         */
        get: /**
         * @hidden
         * @return {?}
         */
        function () {
            return this._filteringExpressionsTree.filteringOperands.length > 0 ?
                this.headerCheckbox && this.headerCheckbox.checked ? 'Deselect all filtered' : 'Select all filtered' :
                this.headerCheckbox && this.headerCheckbox.checked ? 'Deselect all' : 'Select all';
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?=} headerStatus
     * @return {?}
     */
    IgxGridBaseComponent.prototype.checkHeaderCheckboxStatus = /**
     * @hidden
     * @param {?=} headerStatus
     * @return {?}
     */
    function (headerStatus) {
        if (headerStatus === undefined) {
            /** @type {?} */
            var filteredData = this.filteringService.filteredData;
            /** @type {?} */
            var dataLength = filteredData ? filteredData.length : this.dataLength;
            this.allRowsSelected = this.selection.are_all_selected(this.id, dataLength);
            if (this.headerCheckbox) {
                this.headerCheckbox.indeterminate = !this.allRowsSelected && !this.selection.are_none_selected(this.id);
                if (!this.headerCheckbox.indeterminate) {
                    this.headerCheckbox.checked =
                        this.allRowsSelected;
                }
            }
            this.cdr.markForCheck();
        }
        else if (this.headerCheckbox) {
            this.headerCheckbox.checked = headerStatus !== undefined ? headerStatus : false;
        }
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} componentID
     * @param {?} filteredData
     * @param {?=} primaryKey
     * @return {?}
     */
    IgxGridBaseComponent.prototype.filteredItemsStatus = /**
     * @hidden
     * @param {?} componentID
     * @param {?} filteredData
     * @param {?=} primaryKey
     * @return {?}
     */
    function (componentID, filteredData, primaryKey) {
        var e_2, _a;
        /** @type {?} */
        var currSelection = this.selection.get(componentID);
        /** @type {?} */
        var atLeastOneSelected = false;
        /** @type {?} */
        var notAllSelected = false;
        if (currSelection) {
            try {
                for (var _b = tslib_1.__values(Object.keys(filteredData)), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var key = _c.value;
                    /** @type {?} */
                    var dataItem = primaryKey ? filteredData[key][primaryKey] : filteredData[key];
                    if (currSelection.has(dataItem)) {
                        atLeastOneSelected = true;
                        if (notAllSelected) {
                            return 'indeterminate';
                        }
                    }
                    else {
                        notAllSelected = true;
                        if (atLeastOneSelected) {
                            return 'indeterminate';
                        }
                    }
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_2) throw e_2.error; }
            }
        }
        return atLeastOneSelected ? 'allSelected' : 'noneSelected';
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} data
     * @return {?}
     */
    IgxGridBaseComponent.prototype.updateHeaderCheckboxStatusOnFilter = /**
     * @hidden
     * @param {?} data
     * @return {?}
     */
    function (data) {
        if (!data) {
            this.checkHeaderCheckboxStatus();
            return;
        }
        switch (this.filteredItemsStatus(this.id, data, this.primaryKey)) {
            case 'allSelected': {
                if (!this.allRowsSelected) {
                    this.allRowsSelected = true;
                }
                if (this.headerCheckbox.indeterminate) {
                    this.headerCheckbox.indeterminate = false;
                }
                break;
            }
            case 'noneSelected': {
                if (this.allRowsSelected) {
                    this.allRowsSelected = false;
                }
                if (this.headerCheckbox.indeterminate) {
                    this.headerCheckbox.indeterminate = false;
                }
                break;
            }
            default: {
                if (!this.headerCheckbox.indeterminate) {
                    this.headerCheckbox.indeterminate = true;
                }
                if (this.allRowsSelected) {
                    this.allRowsSelected = false;
                }
                break;
            }
        }
    };
    /**
     * Get current selection state.
     * Returns an array with selected rows' IDs (primaryKey or rowData)
     * ```typescript
     * const selectedRows = this.grid.selectedRows();
     * ```
     * @memberof IgxGridBaseComponent
     */
    /**
     * Get current selection state.
     * Returns an array with selected rows' IDs (primaryKey or rowData)
     * ```typescript
     * const selectedRows = this.grid.selectedRows();
     * ```
     * \@memberof IgxGridBaseComponent
     * @return {?}
     */
    IgxGridBaseComponent.prototype.selectedRows = /**
     * Get current selection state.
     * Returns an array with selected rows' IDs (primaryKey or rowData)
     * ```typescript
     * const selectedRows = this.grid.selectedRows();
     * ```
     * \@memberof IgxGridBaseComponent
     * @return {?}
     */
    function () {
        /** @type {?} */
        var selection;
        selection = this.selection.get(this.id);
        return selection ? Array.from(selection) : [];
    };
    /**
     * Select specified rows by ID.
     * ```typescript
     * this.grid.selectRows([1,2,5], true);
     * ```
     * @param rowIDs
     * @param clearCurrentSelection if true clears the current selection
     * @memberof IgxGridBaseComponent
     */
    /**
     * Select specified rows by ID.
     * ```typescript
     * this.grid.selectRows([1,2,5], true);
     * ```
     * \@memberof IgxGridBaseComponent
     * @param {?} rowIDs
     * @param {?=} clearCurrentSelection if true clears the current selection
     * @return {?}
     */
    IgxGridBaseComponent.prototype.selectRows = /**
     * Select specified rows by ID.
     * ```typescript
     * this.grid.selectRows([1,2,5], true);
     * ```
     * \@memberof IgxGridBaseComponent
     * @param {?} rowIDs
     * @param {?=} clearCurrentSelection if true clears the current selection
     * @return {?}
     */
    function (rowIDs, clearCurrentSelection) {
        var _this = this;
        /** @type {?} */
        var newSelection;
        /** @type {?} */
        var selectableRows = [];
        if (this.transactions.enabled) {
            selectableRows = rowIDs.filter(function (e) { return !_this.gridAPI.row_deleted_transaction(e); });
        }
        else {
            selectableRows = rowIDs;
        }
        newSelection = this.selection.add_items(this.id, selectableRows, clearCurrentSelection);
        this.triggerRowSelectionChange(newSelection);
    };
    /**
     * Deselect specified rows by ID.
     * ```typescript
     * this.grid.deselectRows([1,2,5]);
     * ```
     * @param rowIDs
     * @memberof IgxGridBaseComponent
     */
    /**
     * Deselect specified rows by ID.
     * ```typescript
     * this.grid.deselectRows([1,2,5]);
     * ```
     * \@memberof IgxGridBaseComponent
     * @param {?} rowIDs
     * @return {?}
     */
    IgxGridBaseComponent.prototype.deselectRows = /**
     * Deselect specified rows by ID.
     * ```typescript
     * this.grid.deselectRows([1,2,5]);
     * ```
     * \@memberof IgxGridBaseComponent
     * @param {?} rowIDs
     * @return {?}
     */
    function (rowIDs) {
        /** @type {?} */
        var newSelection;
        newSelection = this.selection.delete_items(this.id, rowIDs);
        this.triggerRowSelectionChange(newSelection);
    };
    /**
     * Selects all rows
     * Note: If filtering is in place, selectAllRows() and deselectAllRows() select/deselect all filtered rows.
     * ```typescript
     * this.grid.selectAllRows();
     * ```
     * @memberof IgxGridBaseComponent
     */
    /**
     * Selects all rows
     * Note: If filtering is in place, selectAllRows() and deselectAllRows() select/deselect all filtered rows.
     * ```typescript
     * this.grid.selectAllRows();
     * ```
     * \@memberof IgxGridBaseComponent
     * @return {?}
     */
    IgxGridBaseComponent.prototype.selectAllRows = /**
     * Selects all rows
     * Note: If filtering is in place, selectAllRows() and deselectAllRows() select/deselect all filtered rows.
     * ```typescript
     * this.grid.selectAllRows();
     * ```
     * \@memberof IgxGridBaseComponent
     * @return {?}
     */
    function () {
        this.triggerRowSelectionChange(this.selection.get_all_ids(this.gridAPI.get_all_data(true), this.primaryKey));
    };
    /**
     * Deselects all rows
     * ```typescript
     * this.grid.deselectAllRows();
     * ```
     * Note: If filtering is in place, selectAllRows() and deselectAllRows() select/deselect all filtered rows.
     */
    /**
     * Deselects all rows
     * ```typescript
     * this.grid.deselectAllRows();
     * ```
     * Note: If filtering is in place, selectAllRows() and deselectAllRows() select/deselect all filtered rows.
     * @return {?}
     */
    IgxGridBaseComponent.prototype.deselectAllRows = /**
     * Deselects all rows
     * ```typescript
     * this.grid.deselectAllRows();
     * ```
     * Note: If filtering is in place, selectAllRows() and deselectAllRows() select/deselect all filtered rows.
     * @return {?}
     */
    function () {
        this.triggerRowSelectionChange(this.selection.get_empty());
    };
    /**
     * @return {?}
     */
    IgxGridBaseComponent.prototype.clearCellSelection = /**
     * @return {?}
     */
    function () {
        this.selectionService.clear();
        this.selectionService.activeElement = null;
        this.cdr.markForCheck();
    };
    /**
     * @param {?} dir
     * @return {?}
     */
    IgxGridBaseComponent.prototype.dragScroll = /**
     * @param {?} dir
     * @return {?}
     */
    function (dir) {
        /** @type {?} */
        var scrollDelta = 48;
        /** @type {?} */
        var horizontal = this.parentVirtDir.getHorizontalScroll();
        /** @type {?} */
        var vertical = this.verticalScrollContainer.getVerticalScroll();
        switch (dir) {
            case DragScrollDirection.LEFT:
                horizontal.scrollLeft -= scrollDelta;
                break;
            case DragScrollDirection.RIGHT:
                horizontal.scrollLeft += scrollDelta;
                break;
            case DragScrollDirection.TOP:
                vertical.scrollTop -= scrollDelta;
                break;
            case DragScrollDirection.BOTTOM:
                vertical.scrollTop += scrollDelta;
                break;
            case DragScrollDirection.BOTTOMLEFT:
                horizontal.scrollLeft -= scrollDelta;
                vertical.scrollTop += scrollDelta;
                break;
            case DragScrollDirection.BOTTOMRIGHT:
                horizontal.scrollLeft += scrollDelta;
                vertical.scrollTop += scrollDelta;
                break;
            case DragScrollDirection.TOPLEFT:
                horizontal.scrollLeft -= scrollDelta;
                vertical.scrollTop -= scrollDelta;
                break;
            case DragScrollDirection.TOPRIGHT:
                horizontal.scrollLeft += scrollDelta;
                vertical.scrollTop -= scrollDelta;
                break;
            default:
                return;
        }
        this.wheelHandler();
    };
    /**
     * @param {?} arg
     * @return {?}
     */
    IgxGridBaseComponent.prototype.isDefined = /**
     * @param {?} arg
     * @return {?}
     */
    function (arg) {
        return arg !== undefined && arg !== null;
    };
    /**
     * @param {?} arg
     * @return {?}
     */
    IgxGridBaseComponent.prototype.selectRange = /**
     * @param {?} arg
     * @return {?}
     */
    function (arg) {
        var _this = this;
        if (!this.isDefined(arg)) {
            this.clearCellSelection();
            return;
        }
        if (arg instanceof Array) {
            arg.forEach(function (range) { return _this.setSelection(range); });
        }
        else {
            this.setSelection(arg);
        }
        this.cdr.markForCheck();
    };
    /**
     * @param {?} field
     * @return {?}
     */
    IgxGridBaseComponent.prototype.columnToVisibleIndex = /**
     * @param {?} field
     * @return {?}
     */
    function (field) {
        /** @type {?} */
        var visibleColumns = this.visibleColumns;
        if (typeof field === 'number') {
            return field;
        }
        return visibleColumns.find(function (column) { return column.field === field; }).visibleIndex;
    };
    /**
     * @param {?} range
     * @return {?}
     */
    IgxGridBaseComponent.prototype.setSelection = /**
     * @param {?} range
     * @return {?}
     */
    function (range) {
        /** @type {?} */
        var startNode = { row: range.rowStart, column: this.columnToVisibleIndex(range.columnStart) };
        /** @type {?} */
        var endNode = { row: range.rowEnd, column: this.columnToVisibleIndex(range.columnEnd) };
        this.selectionService.pointerState.node = startNode;
        this.selectionService.selectRange(endNode, this.selectionService.pointerState);
        this.selectionService.addRangeMeta(endNode, this.selectionService.pointerState);
        this.selectionService.initPointerState();
    };
    /**
     * @return {?}
     */
    IgxGridBaseComponent.prototype.getSelectedRanges = /**
     * @return {?}
     */
    function () {
        return this.selectionService.ranges;
    };
    /**
     * @protected
     * @param {?} source
     * @param {?=} formatters
     * @param {?=} headers
     * @return {?}
     */
    IgxGridBaseComponent.prototype.extractDataFromSelection = /**
     * @protected
     * @param {?} source
     * @param {?=} formatters
     * @param {?=} headers
     * @return {?}
     */
    function (source, formatters, headers) {
        var e_3, _a;
        if (formatters === void 0) { formatters = false; }
        if (headers === void 0) { headers = false; }
        /** @type {?} */
        var columnsArray;
        /** @type {?} */
        var record = {};
        /** @type {?} */
        var selectedData = [];
        /** @type {?} */
        var selectionMap = Array.from(this.selectionService.selection)
            .filter(function (tuple) { return tuple[0] < source.length; });
        var _loop_1 = function (row, set) {
            var e_4, _a;
            if (!source[row]) {
                return "continue";
            }
            /** @type {?} */
            var temp = Array.from(set);
            try {
                for (var temp_1 = tslib_1.__values(temp), temp_1_1 = temp_1.next(); !temp_1_1.done; temp_1_1 = temp_1.next()) {
                    var each = temp_1_1.value;
                    columnsArray = this_1.getSelectableColumnsAt(each);
                    columnsArray.forEach(function (col) {
                        if (col) {
                            /** @type {?} */
                            var key = headers ? col.header || col.field : col.field;
                            record[key] = formatters && col.formatter ? col.formatter(source[row][col.field])
                                : source[row][col.field];
                        }
                    });
                }
            }
            catch (e_4_1) { e_4 = { error: e_4_1 }; }
            finally {
                try {
                    if (temp_1_1 && !temp_1_1.done && (_a = temp_1.return)) _a.call(temp_1);
                }
                finally { if (e_4) throw e_4.error; }
            }
            if (Object.keys(record).length) {
                selectedData.push(record);
            }
            record = {};
        };
        var this_1 = this;
        try {
            for (var selectionMap_1 = tslib_1.__values(selectionMap), selectionMap_1_1 = selectionMap_1.next(); !selectionMap_1_1.done; selectionMap_1_1 = selectionMap_1.next()) {
                var _b = tslib_1.__read(selectionMap_1_1.value, 2), row = _b[0], set = _b[1];
                _loop_1(row, set);
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (selectionMap_1_1 && !selectionMap_1_1.done && (_a = selectionMap_1.return)) _a.call(selectionMap_1);
            }
            finally { if (e_3) throw e_3.error; }
        }
        return selectedData;
    };
    /**
     * @protected
     * @param {?} index
     * @return {?}
     */
    IgxGridBaseComponent.prototype.getSelectableColumnsAt = /**
     * @protected
     * @param {?} index
     * @return {?}
     */
    function (index) {
        if (this.hasColumnLayouts) {
            /** @type {?} */
            var visibleLayoutColumns = this.visibleColumns
                .filter(function (col) { return col.columnLayout; })
                .sort(function (a, b) { return a.visibleIndex - b.visibleIndex; });
            /** @type {?} */
            var colLayout = visibleLayoutColumns[index];
            return colLayout ? colLayout.children.toArray() : [];
        }
        else {
            /** @type {?} */
            var visibleColumns = this.visibleColumns
                .filter(function (col) { return !col.columnGroup; })
                .sort(function (a, b) { return a.visibleIndex - b.visibleIndex; });
            return [visibleColumns[index]];
        }
    };
    /**
     *
     * Returns an array of the current cell selection in the form of `[{ column.field: cell.value }, ...]`.
     * If `formatters` is enabled, the cell value will be formatted by its respective column formatter (if any).
     * If `headers` is enabled, it will use the column header (if any) instead of the column field.
     */
    /**
     *
     * Returns an array of the current cell selection in the form of `[{ column.field: cell.value }, ...]`.
     * If `formatters` is enabled, the cell value will be formatted by its respective column formatter (if any).
     * If `headers` is enabled, it will use the column header (if any) instead of the column field.
     * @param {?=} formatters
     * @param {?=} headers
     * @return {?}
     */
    IgxGridBaseComponent.prototype.getSelectedData = /**
     *
     * Returns an array of the current cell selection in the form of `[{ column.field: cell.value }, ...]`.
     * If `formatters` is enabled, the cell value will be formatted by its respective column formatter (if any).
     * If `headers` is enabled, it will use the column header (if any) instead of the column field.
     * @param {?=} formatters
     * @param {?=} headers
     * @return {?}
     */
    function (formatters, headers) {
        if (formatters === void 0) { formatters = false; }
        if (headers === void 0) { headers = false; }
        /** @type {?} */
        var source = this.verticalScrollContainer.igxForOf;
        return this.extractDataFromSelection(source, formatters, headers);
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} newSelectionAsSet
     * @param {?=} row
     * @param {?=} event
     * @param {?=} headerStatus
     * @return {?}
     */
    IgxGridBaseComponent.prototype.triggerRowSelectionChange = /**
     * @hidden
     * @param {?} newSelectionAsSet
     * @param {?=} row
     * @param {?=} event
     * @param {?=} headerStatus
     * @return {?}
     */
    function (newSelectionAsSet, row, event, headerStatus) {
        /** @type {?} */
        var oldSelectionAsSet = this.selection.get(this.id);
        /** @type {?} */
        var oldSelection = oldSelectionAsSet ? Array.from(oldSelectionAsSet) : [];
        /** @type {?} */
        var newSelection = newSelectionAsSet ? Array.from(newSelectionAsSet) : [];
        /** @type {?} */
        var args = { oldSelection: oldSelection, newSelection: newSelection, row: row, event: event };
        this.onRowSelectionChange.emit(args);
        newSelectionAsSet = this.selection.get_empty();
        for (var i = 0; i < args.newSelection.length; i++) {
            newSelectionAsSet.add(args.newSelection[i]);
        }
        this.selection.set(this.id, newSelectionAsSet);
        this.checkHeaderCheckboxStatus(headerStatus);
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    IgxGridBaseComponent.prototype.scrollHandler = /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.parentVirtDir.getHorizontalScroll().scrollLeft += event.target.scrollLeft;
        this.verticalScrollContainer.getVerticalScroll().scrollTop += event.target.scrollTop;
        event.target.scrollLeft = 0;
        event.target.scrollTop = 0;
    };
    /**
     * @return {?}
     */
    IgxGridBaseComponent.prototype.copyHandlerIE = /**
     * @return {?}
     */
    function () {
        if (isIE()) {
            this.copyHandler(null, true);
        }
    };
    /**
     * @hidden
     * @internal
     */
    /**
     * @hidden
     * \@internal
     * @param {?} event
     * @param {?=} ie11
     * @return {?}
     */
    IgxGridBaseComponent.prototype.copyHandler = /**
     * @hidden
     * \@internal
     * @param {?} event
     * @param {?=} ie11
     * @return {?}
     */
    function (event, ie11) {
        if (ie11 === void 0) { ie11 = false; }
        if (!this.clipboardOptions.enabled || this.crudService.inEditMode) {
            return;
        }
        /** @type {?} */
        var data = this.getSelectedData(this.clipboardOptions.copyFormatters, this.clipboardOptions.copyHeaders);
        /** @type {?} */
        var ev = (/** @type {?} */ ({ data: data, cancel: false }));
        this.onGridCopy.emit(ev);
        if (ev.cancel) {
            return;
        }
        /** @type {?} */
        var transformer = new CharSeparatedValueData(ev.data, this.clipboardOptions.separator);
        /** @type {?} */
        var result = transformer.prepareData();
        if (!this.clipboardOptions.copyHeaders) {
            result = result.substring(result.indexOf('\n') + 1);
        }
        if (ie11) {
            ((/** @type {?} */ (window))).clipboardData.setData('Text', result);
            return;
        }
        event.preventDefault();
        /* Necessary for the hiearachical case but will probably have to
           change how getSelectedData is propagated in the hiearachical grid
        */
        event.stopPropagation();
        event.clipboardData.setData('text/plain', result);
    };
    /**
     * This method allows you to navigate to a position
     * in the grid based on provided `rowindex` and `visibleColumnIndex`,
     * also to execute a custom logic over the target element,
     * through a callback function that accepts { targetType: GridKeydownTargetType, target: Object }
     * ```typescript
     *  this.grid.navigateTo(10, 3, (args) => { args.target.nativeElement.focus(); });
     * ```
     * @memberof IgxGridBaseComponent
     */
    /**
     * This method allows you to navigate to a position
     * in the grid based on provided `rowindex` and `visibleColumnIndex`,
     * also to execute a custom logic over the target element,
     * through a callback function that accepts { targetType: GridKeydownTargetType, target: Object }
     * ```typescript
     *  this.grid.navigateTo(10, 3, (args) => { args.target.nativeElement.focus(); });
     * ```
     * \@memberof IgxGridBaseComponent
     * @param {?} rowIndex
     * @param {?=} visibleColIndex
     * @param {?=} cb
     * @return {?}
     */
    IgxGridBaseComponent.prototype.navigateTo = /**
     * This method allows you to navigate to a position
     * in the grid based on provided `rowindex` and `visibleColumnIndex`,
     * also to execute a custom logic over the target element,
     * through a callback function that accepts { targetType: GridKeydownTargetType, target: Object }
     * ```typescript
     *  this.grid.navigateTo(10, 3, (args) => { args.target.nativeElement.focus(); });
     * ```
     * \@memberof IgxGridBaseComponent
     * @param {?} rowIndex
     * @param {?=} visibleColIndex
     * @param {?=} cb
     * @return {?}
     */
    function (rowIndex, visibleColIndex, cb) {
        var _this = this;
        if (visibleColIndex === void 0) { visibleColIndex = -1; }
        if (cb === void 0) { cb = null; }
        if (rowIndex < 0 || rowIndex > this.verticalScrollContainer.igxForOf.length - 1
            || (visibleColIndex !== -1 && this.columnList.map(function (col) { return col.visibleIndex; }).indexOf(visibleColIndex) === -1)) {
            return;
        }
        this.wheelHandler();
        if (this.verticalScrollContainer.igxForOf.slice(rowIndex, rowIndex + 1).find(function (rec) { return rec.expression || rec.childGridsData; })) {
            visibleColIndex = -1;
        }
        if (visibleColIndex === -1 || this.navigation.isColumnFullyVisible(visibleColIndex)) {
            if (this.navigation.shouldPerformVerticalScroll(rowIndex, visibleColIndex)) {
                this.navigation.performVerticalScrollToCell(rowIndex, visibleColIndex, function () { _this.executeCallback(rowIndex, visibleColIndex, cb); });
            }
            else {
                this.executeCallback(rowIndex, visibleColIndex, cb);
            }
        }
        else {
            this.navigation.performHorizontalScrollToCell(rowIndex, visibleColIndex, false, function () { _this.executeCallback(rowIndex, visibleColIndex, cb); });
        }
    };
    /**
    * Returns `ICellPosition` which defines the next cell,
    * according to the current position, that match specific criteria.
    * You can pass callback function as a third parameter of `getPreviousCell` method.
    * The callback function accepts IgxColumnComponent as a param
    * ```typescript
    *  const nextEditableCellPosition = this.grid.getNextCell(0, 3, (column) => column.editable);
    * ```
    * @memberof IgxGridBaseComponent
    */
    /**
     * Returns `ICellPosition` which defines the next cell,
     * according to the current position, that match specific criteria.
     * You can pass callback function as a third parameter of `getPreviousCell` method.
     * The callback function accepts IgxColumnComponent as a param
     * ```typescript
     *  const nextEditableCellPosition = this.grid.getNextCell(0, 3, (column) => column.editable);
     * ```
     * \@memberof IgxGridBaseComponent
     * @param {?} currRowIndex
     * @param {?} curVisibleColIndex
     * @param {?=} callback
     * @return {?}
     */
    IgxGridBaseComponent.prototype.getNextCell = /**
     * Returns `ICellPosition` which defines the next cell,
     * according to the current position, that match specific criteria.
     * You can pass callback function as a third parameter of `getPreviousCell` method.
     * The callback function accepts IgxColumnComponent as a param
     * ```typescript
     *  const nextEditableCellPosition = this.grid.getNextCell(0, 3, (column) => column.editable);
     * ```
     * \@memberof IgxGridBaseComponent
     * @param {?} currRowIndex
     * @param {?} curVisibleColIndex
     * @param {?=} callback
     * @return {?}
     */
    function (currRowIndex, curVisibleColIndex, callback) {
        if (callback === void 0) { callback = null; }
        /** @type {?} */
        var columns = this.columnList.filter(function (col) { return !col.columnGroup && col.visibleIndex >= 0; });
        if (!this.isValidPosition(currRowIndex, curVisibleColIndex)) {
            return { rowIndex: currRowIndex, visibleColumnIndex: curVisibleColIndex };
        }
        /** @type {?} */
        var colIndexes = callback ? columns.filter(function (col) { return callback(col); }).map(function (editCol) { return editCol.visibleIndex; }).sort(function (a, b) { return a - b; }) :
            columns.map(function (editCol) { return editCol.visibleIndex; }).sort(function (a, b) { return a - b; });
        /** @type {?} */
        var nextCellIndex = colIndexes.find(function (index) { return index > curVisibleColIndex; });
        if (this.verticalScrollContainer.igxForOf.slice(currRowIndex, currRowIndex + 1)
            .find(function (rec) { return !rec.expression && !rec.summaries && !rec.childGridsData; }) && nextCellIndex !== undefined) {
            return { rowIndex: currRowIndex, visibleColumnIndex: nextCellIndex };
        }
        else {
            if (colIndexes.length === 0 || this.getNextDataRowIndex(currRowIndex) === currRowIndex) {
                return { rowIndex: currRowIndex, visibleColumnIndex: curVisibleColIndex };
            }
            else {
                return { rowIndex: this.getNextDataRowIndex(currRowIndex), visibleColumnIndex: colIndexes[0] };
            }
        }
    };
    /**
    * Returns `ICellPosition` which defines the previous cell,
    * according to the current position, that match specific criteria.
    * You can pass callback function as a third parameter of `getPreviousCell` method.
    * The callback function accepts IgxColumnComponent as a param
    * ```typescript
    *  const previousEditableCellPosition = this.grid.getPreviousCell(0, 3, (column) => column.editable);
    * ```
    * @memberof IgxGridBaseComponent
    */
    /**
     * Returns `ICellPosition` which defines the previous cell,
     * according to the current position, that match specific criteria.
     * You can pass callback function as a third parameter of `getPreviousCell` method.
     * The callback function accepts IgxColumnComponent as a param
     * ```typescript
     *  const previousEditableCellPosition = this.grid.getPreviousCell(0, 3, (column) => column.editable);
     * ```
     * \@memberof IgxGridBaseComponent
     * @param {?} currRowIndex
     * @param {?} curVisibleColIndex
     * @param {?=} callback
     * @return {?}
     */
    IgxGridBaseComponent.prototype.getPreviousCell = /**
     * Returns `ICellPosition` which defines the previous cell,
     * according to the current position, that match specific criteria.
     * You can pass callback function as a third parameter of `getPreviousCell` method.
     * The callback function accepts IgxColumnComponent as a param
     * ```typescript
     *  const previousEditableCellPosition = this.grid.getPreviousCell(0, 3, (column) => column.editable);
     * ```
     * \@memberof IgxGridBaseComponent
     * @param {?} currRowIndex
     * @param {?} curVisibleColIndex
     * @param {?=} callback
     * @return {?}
     */
    function (currRowIndex, curVisibleColIndex, callback) {
        if (callback === void 0) { callback = null; }
        /** @type {?} */
        var columns = this.columnList.filter(function (col) { return !col.columnGroup && col.visibleIndex >= 0; });
        if (!this.isValidPosition(currRowIndex, curVisibleColIndex)) {
            return { rowIndex: currRowIndex, visibleColumnIndex: curVisibleColIndex };
        }
        /** @type {?} */
        var colIndexes = callback ? columns.filter(function (col) { return callback(col); }).map(function (editCol) { return editCol.visibleIndex; }).sort(function (a, b) { return b - a; }) :
            columns.map(function (editCol) { return editCol.visibleIndex; }).sort(function (a, b) { return b - a; });
        /** @type {?} */
        var prevCellIndex = colIndexes.find(function (index) { return index < curVisibleColIndex; });
        if (this.verticalScrollContainer.igxForOf.slice(currRowIndex, currRowIndex + 1)
            .find(function (rec) { return !rec.expression && !rec.summaries && !rec.childGridsData; }) && prevCellIndex !== undefined) {
            return { rowIndex: currRowIndex, visibleColumnIndex: prevCellIndex };
        }
        else {
            if (colIndexes.length === 0 || this.getPrevDataRowIndex(currRowIndex) === currRowIndex) {
                return { rowIndex: currRowIndex, visibleColumnIndex: curVisibleColIndex };
            }
            else {
                return { rowIndex: this.getPrevDataRowIndex(currRowIndex), visibleColumnIndex: colIndexes[0] };
            }
        }
    };
    /**
     * @private
     * @param {?} rowIndex
     * @param {?=} visibleColIndex
     * @param {?=} cb
     * @return {?}
     */
    IgxGridBaseComponent.prototype.executeCallback = /**
     * @private
     * @param {?} rowIndex
     * @param {?=} visibleColIndex
     * @param {?=} cb
     * @return {?}
     */
    function (rowIndex, visibleColIndex, cb) {
        if (visibleColIndex === void 0) { visibleColIndex = -1; }
        if (cb === void 0) { cb = null; }
        if (!cb) {
            return;
        }
        /** @type {?} */
        var targetType;
        /** @type {?} */
        var target;
        /** @type {?} */
        var row = this.summariesRowList.filter(function (s) { return s.index !== 0; }).concat(this.rowList.toArray()).find(function (r) { return r.index === rowIndex; });
        if (!row) {
            return;
        }
        switch (row.nativeElement.tagName.toLowerCase()) {
            case 'igx-grid-groupby-row':
                targetType = GridKeydownTargetType.groupRow;
                target = row;
                break;
            case 'igx-grid-summary-row':
                targetType = GridKeydownTargetType.summaryCell;
                target = visibleColIndex !== -1 ?
                    row.summaryCells.find(function (c) { return c.visibleColumnIndex === visibleColIndex; }) : row.summaryCells.first;
                break;
            case 'igx-child-grid-row':
                targetType = GridKeydownTargetType.hierarchicalRow;
                target = row;
                break;
            default:
                targetType = GridKeydownTargetType.dataCell;
                target = visibleColIndex !== -1 ? row.cells.find(function (c) { return c.visibleColumnIndex === visibleColIndex; }) : row.cells.first;
                break;
        }
        /** @type {?} */
        var args = { targetType: targetType, target: target };
        cb(args);
    };
    /**
     * @private
     * @param {?} currentRowIndex
     * @return {?}
     */
    IgxGridBaseComponent.prototype.getPrevDataRowIndex = /**
     * @private
     * @param {?} currentRowIndex
     * @return {?}
     */
    function (currentRowIndex) {
        if (currentRowIndex <= 0) {
            return currentRowIndex;
        }
        /** @type {?} */
        var prevRow = this.verticalScrollContainer.igxForOf.slice(0, currentRowIndex).reverse()
            .find(function (rec) { return !rec.expression && !rec.summaries && !rec.childGridsData; });
        return prevRow ? this.verticalScrollContainer.igxForOf.indexOf(prevRow) : currentRowIndex;
    };
    /**
     * @private
     * @param {?} currentRowIndex
     * @return {?}
     */
    IgxGridBaseComponent.prototype.getNextDataRowIndex = /**
     * @private
     * @param {?} currentRowIndex
     * @return {?}
     */
    function (currentRowIndex) {
        if (currentRowIndex === this.verticalScrollContainer.igxForOf.length) {
            return currentRowIndex;
        }
        /** @type {?} */
        var nextRow = this.verticalScrollContainer.igxForOf.slice(currentRowIndex + 1, this.verticalScrollContainer.igxForOf.length)
            .find(function (rec) { return !rec.expression && !rec.summaries && !rec.childGridsData; });
        return nextRow ? this.verticalScrollContainer.igxForOf.indexOf(nextRow) : currentRowIndex;
    };
    /**
     * @private
     * @param {?} rowIndex
     * @param {?} colIndex
     * @return {?}
     */
    IgxGridBaseComponent.prototype.isValidPosition = /**
     * @private
     * @param {?} rowIndex
     * @param {?} colIndex
     * @return {?}
     */
    function (rowIndex, colIndex) {
        /** @type {?} */
        var rows = this.summariesRowList.filter(function (s) { return s.index !== 0; }).concat(this.rowList.toArray()).length;
        /** @type {?} */
        var cols = this.columnList.filter(function (col) { return !col.columnGroup && col.visibleIndex >= 0; }).length;
        if (rows < 1 || cols < 1) {
            return false;
        }
        if (rowIndex > -1 && rowIndex < this.verticalScrollContainer.igxForOf.length &&
            colIndex > -1 && colIndex <= this.unpinnedColumns[this.unpinnedColumns.length - 1].visibleIndex) {
            return true;
        }
        return false;
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?=} isScroll
     * @return {?}
     */
    IgxGridBaseComponent.prototype.wheelHandler = /**
     * @hidden
     * @param {?=} isScroll
     * @return {?}
     */
    function (isScroll) {
        if (isScroll === void 0) { isScroll = false; }
        if (document.activeElement &&
            // tslint:disable-next-line:no-bitwise
            (document.activeElement.compareDocumentPosition(this.tbody.nativeElement) & Node.DOCUMENT_POSITION_CONTAINS ||
                // tslint:disable-next-line:no-bitwise
                (document.activeElement.compareDocumentPosition(this.tfoot.nativeElement) & Node.DOCUMENT_POSITION_CONTAINS && isScroll))) {
            ((/** @type {?} */ (document.activeElement))).blur();
        }
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} index
     * @param {?} col
     * @return {?}
     */
    IgxGridBaseComponent.prototype.trackColumnChanges = /**
     * @hidden
     * @param {?} index
     * @param {?} col
     * @return {?}
     */
    function (index, col) {
        return col.field + col._calcWidth;
    };
    /**
     * @private
     * @param {?} text
     * @param {?} increment
     * @param {?=} caseSensitive
     * @param {?=} exactMatch
     * @param {?=} scroll
     * @return {?}
     */
    IgxGridBaseComponent.prototype.find = /**
     * @private
     * @param {?} text
     * @param {?} increment
     * @param {?=} caseSensitive
     * @param {?=} exactMatch
     * @param {?=} scroll
     * @return {?}
     */
    function (text, increment, caseSensitive, exactMatch, scroll) {
        if (!this.rowList) {
            return 0;
        }
        this.endEdit(false);
        if (!text) {
            this.clearSearch();
            return 0;
        }
        /** @type {?} */
        var caseSensitiveResolved = caseSensitive ? true : false;
        /** @type {?} */
        var exactMatchResolved = exactMatch ? true : false;
        /** @type {?} */
        var rebuildCache = false;
        if (this.lastSearchInfo.searchText !== text ||
            this.lastSearchInfo.caseSensitive !== caseSensitiveResolved ||
            this.lastSearchInfo.exactMatch !== exactMatchResolved) {
            this.lastSearchInfo = {
                searchText: text,
                activeMatchIndex: 0,
                caseSensitive: caseSensitiveResolved,
                exactMatch: exactMatchResolved,
                matchInfoCache: []
            };
            rebuildCache = true;
        }
        else {
            this.lastSearchInfo.activeMatchIndex += increment;
        }
        if (rebuildCache) {
            this.rowList.forEach(function (row) {
                if (row.cells) {
                    row.cells.forEach(function (c) {
                        c.highlightText(text, caseSensitiveResolved, exactMatchResolved);
                    });
                }
            });
            this.rebuildMatchCache();
        }
        if (this.lastSearchInfo.activeMatchIndex >= this.lastSearchInfo.matchInfoCache.length) {
            this.lastSearchInfo.activeMatchIndex = 0;
        }
        else if (this.lastSearchInfo.activeMatchIndex < 0) {
            this.lastSearchInfo.activeMatchIndex = this.lastSearchInfo.matchInfoCache.length - 1;
        }
        if (this.lastSearchInfo.matchInfoCache.length) {
            /** @type {?} */
            var matchInfo = this.lastSearchInfo.matchInfoCache[this.lastSearchInfo.activeMatchIndex];
            this.lastSearchInfo = tslib_1.__assign({}, this.lastSearchInfo);
            if (scroll !== false) {
                this.scrollTo(matchInfo.row, matchInfo.column);
            }
            IgxTextHighlightDirective.setActiveHighlight(this.id, {
                column: matchInfo.column,
                row: matchInfo.row,
                index: matchInfo.index,
            });
        }
        else {
            IgxTextHighlightDirective.clearActiveHighlight(this.id);
        }
        return this.lastSearchInfo.matchInfoCache.length;
    };
    Object.defineProperty(IgxGridBaseComponent.prototype, "filteredSortedData", {
        /**
         * Returns an array containing the filtered sorted data.
         * ```typescript
         * const filteredSortedData = this.grid1.filteredSortedData;
         * ```
         * @memberof IgxGridBaseComponent
         */
        get: /**
         * Returns an array containing the filtered sorted data.
         * ```typescript
         * const filteredSortedData = this.grid1.filteredSortedData;
         * ```
         * \@memberof IgxGridBaseComponent
         * @return {?}
         */
        function () {
            return this._filteredSortedData;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._filteredSortedData = value;
            this.refreshSearch(true);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @hidden
     */
    /**
     * @hidden
     * @protected
     * @return {?}
     */
    IgxGridBaseComponent.prototype.initPinning = /**
     * @hidden
     * @protected
     * @return {?}
     */
    function () {
        /** @type {?} */
        var currentPinnedWidth = 0;
        /** @type {?} */
        var pinnedColumns = [];
        /** @type {?} */
        var unpinnedColumns = [];
        /** @type {?} */
        var newUnpinnedCols = [];
        this.calculateGridWidth();
        this.resetCaches();
        // When a column is a group or is inside a group, pin all related.
        this._pinnedColumns.forEach(function (col) {
            if (col.parent) {
                col.parent.pinned = true;
            }
            if (col.columnGroup) {
                col.children.forEach(function (child) { return child.pinned = true; });
            }
        });
        // Make sure we don't exceed unpinned area min width and get pinned and unpinned col collections.
        // We take into account top level columns (top level groups and non groups).
        // If top level is unpinned the pinning handles all children to be unpinned as well.
        for (var i = 0; i < this._columns.length; i++) {
            if (this._columns[i].pinned && !this._columns[i].parent) {
                // Pinned column. Check if with it the unpinned min width is exceeded.
                /** @type {?} */
                var colWidth = parseInt(this._columns[i].width, 10);
                if (currentPinnedWidth + colWidth > this.calcWidth - this.unpinnedAreaMinWidth) {
                    // unpinned min width is exceeded. Unpin the columns and add it to the unpinned collection.
                    this._columns[i].pinned = false;
                    unpinnedColumns.push(this._columns[i]);
                    newUnpinnedCols.push(this._columns[i]);
                }
                else {
                    // unpinned min width is not exceeded. Keep it pinned and add it to the pinned collection.
                    currentPinnedWidth += colWidth;
                    pinnedColumns.push(this._columns[i]);
                }
            }
            else if (this._columns[i].pinned && this._columns[i].parent) {
                if (this._columns[i].topLevelParent.pinned) {
                    pinnedColumns.push(this._columns[i]);
                }
                else {
                    this._columns[i].pinned = false;
                    unpinnedColumns.push(this._columns[i]);
                }
            }
            else {
                unpinnedColumns.push(this._columns[i]);
            }
        }
        if (newUnpinnedCols.length) {
            console.warn('igxGrid - The pinned area exceeds maximum pinned width. ' +
                'The following columns were unpinned to prevent further issues:' +
                newUnpinnedCols.map(function (col) { return '"' + col.header + '"'; }).toString() + '. For more info see our documentation.');
        }
        // Assign the applicaple collections.
        this._pinnedColumns = pinnedColumns;
        this._unpinnedColumns = unpinnedColumns;
        this.cdr.markForCheck();
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @protected
     * @param {?} row
     * @param {?} column
     * @param {?=} inCollection
     * @return {?}
     */
    IgxGridBaseComponent.prototype.scrollTo = /**
     * @hidden
     * @protected
     * @param {?} row
     * @param {?} column
     * @param {?=} inCollection
     * @return {?}
     */
    function (row, column, inCollection) {
        var _this = this;
        if (inCollection === void 0) { inCollection = this.filteredSortedData; }
        /** @type {?} */
        var delayScrolling = false;
        if (this.paging && typeof (row) !== 'number') {
            /** @type {?} */
            var rowIndex = inCollection.indexOf(row);
            /** @type {?} */
            var page = Math.floor(rowIndex / this.perPage);
            if (this.page !== page) {
                delayScrolling = true;
                this.page = page;
            }
        }
        if (delayScrolling) {
            this.verticalScrollContainer.onDataChanged.pipe(first()).subscribe(function () {
                _this.scrollDirective(_this.verticalScrollContainer, typeof (row) === 'number' ? row : _this.verticalScrollContainer.igxForOf.indexOf(row));
            });
        }
        else {
            this.scrollDirective(this.verticalScrollContainer, typeof (row) === 'number' ? row : this.verticalScrollContainer.igxForOf.indexOf(row));
        }
        this.scrollToHorizontally(column);
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @protected
     * @param {?} column
     * @return {?}
     */
    IgxGridBaseComponent.prototype.scrollToHorizontally = /**
     * @hidden
     * @protected
     * @param {?} column
     * @return {?}
     */
    function (column) {
        /** @type {?} */
        var columnIndex = typeof column === 'number' ? column : this.getColumnByName(column).visibleIndex;
        /** @type {?} */
        var scrollRow = this.rowList.find(function (r) { return r.virtDirRow; });
        /** @type {?} */
        var virtDir = scrollRow ? scrollRow.virtDirRow : null;
        if (this.pinnedColumns.length) {
            if (columnIndex >= this.pinnedColumns.length) {
                columnIndex -= this.pinnedColumns.length;
                this.scrollDirective(virtDir, columnIndex);
            }
        }
        else {
            this.scrollDirective(virtDir, columnIndex);
        }
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @protected
     * @param {?} directive
     * @param {?} goal
     * @return {?}
     */
    IgxGridBaseComponent.prototype.scrollDirective = /**
     * @hidden
     * @protected
     * @param {?} directive
     * @param {?} goal
     * @return {?}
     */
    function (directive, goal) {
        if (!directive) {
            return;
        }
        // directive.onChunkLoad.pipe(first())
        //     .subscribe(() => requestAnimationFrame(() => this.cdr.detectChanges()));
        directive.scrollTo(goal);
    };
    /**
     * @private
     * @return {?}
     */
    IgxGridBaseComponent.prototype.rebuildMatchCache = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.lastSearchInfo.matchInfoCache = [];
        /** @type {?} */
        var caseSensitive = this.lastSearchInfo.caseSensitive;
        /** @type {?} */
        var exactMatch = this.lastSearchInfo.exactMatch;
        /** @type {?} */
        var searchText = caseSensitive ? this.lastSearchInfo.searchText : this.lastSearchInfo.searchText.toLowerCase();
        /** @type {?} */
        var data = this.filteredSortedData;
        /** @type {?} */
        var columnItems = this.visibleColumns.filter(function (c) { return !c.columnGroup; }).sort(function (c1, c2) { return c1.visibleIndex - c2.visibleIndex; });
        /** @type {?} */
        var numberPipe = new IgxDecimalPipeComponent(this.locale);
        /** @type {?} */
        var datePipe = new IgxDatePipeComponent(this.locale);
        data.forEach(function (dataRow) {
            columnItems.forEach(function (c) {
                /** @type {?} */
                var value = c.formatter ? c.formatter(dataRow[c.field]) :
                    c.dataType === 'number' ? numberPipe.transform(dataRow[c.field], _this.locale) :
                        c.dataType === 'date' ? datePipe.transform(dataRow[c.field], _this.locale)
                            : dataRow[c.field];
                if (value !== undefined && value !== null && c.searchable) {
                    /** @type {?} */
                    var searchValue = caseSensitive ? String(value) : String(value).toLowerCase();
                    if (exactMatch) {
                        if (searchValue === searchText) {
                            _this.lastSearchInfo.matchInfoCache.push({
                                row: dataRow,
                                column: c.field,
                                index: 0,
                            });
                        }
                    }
                    else {
                        /** @type {?} */
                        var occurenceIndex = 0;
                        /** @type {?} */
                        var searchIndex = searchValue.indexOf(searchText);
                        while (searchIndex !== -1) {
                            _this.lastSearchInfo.matchInfoCache.push({
                                row: dataRow,
                                column: c.field,
                                index: occurenceIndex++,
                            });
                            searchValue = searchValue.substring(searchIndex + searchText.length);
                            searchIndex = searchValue.indexOf(searchText);
                        }
                    }
                }
            });
        });
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} _group
     * @return {?}
     */
    IgxGridBaseComponent.prototype.isExpandedGroup = /**
     * @hidden
     * @param {?} _group
     * @return {?}
     */
    function (_group) {
        return undefined;
    };
    /**
     * @protected
     * @param {?} row
     * @return {?}
     */
    IgxGridBaseComponent.prototype.changeRowEditingOverlayStateOnScroll = /**
     * @protected
     * @param {?} row
     * @return {?}
     */
    function (row) {
        if (!this.rowEditable || !this.rowEditingOverlay || this.rowEditingOverlay.collapsed) {
            return;
        }
        if (!row) {
            this.toggleRowEditingOverlay(false);
        }
        else {
            this.repositionRowEditingOverlay(row);
        }
    };
    /**
     * @param {?} id
     * @return {?}
     */
    IgxGridBaseComponent.prototype.openRowOverlay = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        this.configureRowEditingOverlay(id, this.rowList.length <= MIN_ROW_EDITING_COUNT_THRESHOLD);
        this.rowEditingOverlay.open(this.rowEditSettings);
        this.rowEditPositioningStrategy.isTopInitialPosition = this.rowEditPositioningStrategy.isTop;
        this._wheelListener = this.rowEditingWheelHandler.bind(this);
        this.rowEditingOverlay.element.addEventListener('wheel', this._wheelListener);
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @return {?}
     */
    IgxGridBaseComponent.prototype.closeRowEditingOverlay = /**
     * @hidden
     * @return {?}
     */
    function () {
        this.rowEditingOverlay.element.removeEventListener('wheel', this._wheelListener);
        this.rowEditPositioningStrategy.isTopInitialPosition = null;
        this.rowEditingOverlay.close();
        this.rowEditingOverlay.element.parentElement.style.display = '';
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} show
     * @return {?}
     */
    IgxGridBaseComponent.prototype.toggleRowEditingOverlay = /**
     * @hidden
     * @param {?} show
     * @return {?}
     */
    function (show) {
        /** @type {?} */
        var rowStyle = this.rowEditingOverlay.element.style;
        if (show) {
            rowStyle.display = 'block';
        }
        else {
            rowStyle.display = 'none';
        }
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} row
     * @return {?}
     */
    IgxGridBaseComponent.prototype.repositionRowEditingOverlay = /**
     * @hidden
     * @param {?} row
     * @return {?}
     */
    function (row) {
        if (!this.rowEditingOverlay.collapsed) {
            /** @type {?} */
            var rowStyle = this.rowEditingOverlay.element.parentElement.style;
            if (row) {
                rowStyle.display = '';
                this.configureRowEditingOverlay(row.rowID);
                this.rowEditingOverlay.reposition();
            }
            else {
                rowStyle.display = 'none';
            }
        }
    };
    /**
     * @private
     * @param {?} rowID
     * @param {?=} useOuter
     * @return {?}
     */
    IgxGridBaseComponent.prototype.configureRowEditingOverlay = /**
     * @private
     * @param {?} rowID
     * @param {?=} useOuter
     * @return {?}
     */
    function (rowID, useOuter) {
        if (useOuter === void 0) { useOuter = false; }
        this.rowEditSettings.outlet = useOuter ? this.parentRowOutletDirective : this.rowOutletDirective;
        this.rowEditPositioningStrategy.settings.container = this.tbody.nativeElement;
        /** @type {?} */
        var targetRow = this.gridAPI.get_row_by_key(rowID);
        if (!targetRow) {
            return;
        }
        this.rowEditPositioningStrategy.settings.target = targetRow.element.nativeElement;
        this.toggleRowEditingOverlay(true);
    };
    Object.defineProperty(IgxGridBaseComponent.prototype, "rowChangesCount", {
        /**
         * @hidden
         */
        get: /**
         * @hidden
         * @return {?}
         */
        function () {
            if (!this.crudService.row) {
                return 0;
            }
            /** @type {?} */
            var rowChanges = this.transactions.getAggregatedValue(this.crudService.row.id, false);
            return rowChanges ? Object.keys(rowChanges).length : 0;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @protected
     * @param {?} rowIndex
     * @param {?} value
     * @return {?}
     */
    IgxGridBaseComponent.prototype.writeToData = /**
     * @protected
     * @param {?} rowIndex
     * @param {?} value
     * @return {?}
     */
    function (rowIndex, value) {
        mergeObjects(this.gridAPI.get_all_data()[rowIndex], value);
    };
    /**
     * @param {?} commit
     * @param {?} row
     * @return {?}
     */
    IgxGridBaseComponent.prototype.endRowTransaction = /**
     * @param {?} commit
     * @param {?} row
     * @return {?}
     */
    function (commit, row) {
        row.newData = this.transactions.getAggregatedValue(row.id, true);
        /** @type {?} */
        var args = row.createEditEventArgs();
        if (!commit) {
            this.onRowEditCancel.emit(args);
            this.transactions.endPending(false);
        }
        else {
            args = this.gridAPI.update_row(row, row.newData);
        }
        if (args.cancel) {
            this.transactions.startPending();
            return;
        }
        this.crudService.endRowEdit();
        this.closeRowEditingOverlay();
    };
    // TODO: Refactor
    /**
     * Finishes the row transactions on the current row.
     * If `commit === true`, passes them from the pending state to the data (or transaction service)
     *
     * Binding to the event
     * ```html
     * <button igxButton (click)="grid.endEdit(true)">Commit Row</button>
     * ```
     * @param commit
     */
    // TODO: Refactor
    /**
     * Finishes the row transactions on the current row.
     * If `commit === true`, passes them from the pending state to the data (or transaction service)
     *
     * Binding to the event
     * ```html
     * <button igxButton (click)="grid.endEdit(true)">Commit Row</button>
     * ```
     * @param {?=} commit
     * @param {?=} event
     * @return {?}
     */
    IgxGridBaseComponent.prototype.endEdit = 
    // TODO: Refactor
    /**
     * Finishes the row transactions on the current row.
     * If `commit === true`, passes them from the pending state to the data (or transaction service)
     *
     * Binding to the event
     * ```html
     * <button igxButton (click)="grid.endEdit(true)">Commit Row</button>
     * ```
     * @param {?=} commit
     * @param {?=} event
     * @return {?}
     */
    function (commit, event) {
        if (commit === void 0) { commit = true; }
        /** @type {?} */
        var row = this.crudService.row;
        /** @type {?} */
        var cell = this.crudService.cell;
        // TODO: Merge the crudService with wht BaseAPI service
        if (!row && !cell) {
            return;
        }
        commit ? this.gridAPI.submit_value() : this.gridAPI.escape_editMode();
        if (!this.rowEditable || this.rowEditingOverlay && this.rowEditingOverlay.collapsed || !row) {
            return;
        }
        this.endRowTransaction(commit, row);
        /** @type {?} */
        var activeCell = this.selectionService.activeElement;
        if (event && activeCell) {
            /** @type {?} */
            var rowIndex = activeCell.row;
            /** @type {?} */
            var visibleColIndex = activeCell.layout ? activeCell.layout.columnVisibleIndex : activeCell.column;
            this.navigateTo(rowIndex, visibleColIndex, function (c) {
                if (c.targetType === GridKeydownTargetType.dataCell && c.target) {
                    c.target.nativeElement.focus();
                }
            });
        }
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @private
     * @param {?} event
     * @return {?}
     */
    IgxGridBaseComponent.prototype.rowEditingWheelHandler = /**
     * @hidden
     * @private
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event.deltaY > 0) {
            this.verticalScrollContainer.scrollNext();
        }
        else {
            this.verticalScrollContainer.scrollPrev();
        }
    };
    Object.defineProperty(IgxGridBaseComponent.prototype, "dataWithAddedInTransactionRows", {
        /**
         * @hidden
         */
        get: /**
         * @hidden
         * @return {?}
         */
        function () {
            /** @type {?} */
            var result = (/** @type {?} */ (cloneArray(this.gridAPI.get_all_data())));
            if (this.transactions.enabled) {
                result.push.apply(result, tslib_1.__spread(this.transactions.getAggregatedChanges(true)
                    .filter(function (t) { return t.type === TransactionType.ADD; })
                    .map(function (t) { return t.newValue; })));
            }
            return result;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxGridBaseComponent.prototype, "dataLength", {
        get: /**
         * @return {?}
         */
        function () {
            return this.transactions.enabled ? this.dataWithAddedInTransactionRows.length : this.gridAPI.get_all_data().length;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    IgxGridBaseComponent.prototype.hasHorizontalScroll = /**
     * @return {?}
     */
    function () {
        return this.totalWidth - this.unpinnedWidth > 0;
    };
    /**
     * @protected
     * @param {?} row
     * @return {?}
     */
    IgxGridBaseComponent.prototype._restoreVirtState = /**
     * @protected
     * @param {?} row
     * @return {?}
     */
    function (row) {
        // check virtualization state of data record added from cache
        // in case state is no longer valid - update it.
        /** @type {?} */
        var rowForOf = row.virtDirRow;
        /** @type {?} */
        var gridScrLeft = rowForOf.getHorizontalScroll().scrollLeft;
        /** @type {?} */
        var left = -parseInt(rowForOf.dc.instance._viewContainer.element.nativeElement.style.left, 10);
        /** @type {?} */
        var actualScrollLeft = left + rowForOf.getColumnScrollLeft(rowForOf.state.startIndex);
        if (gridScrLeft !== actualScrollLeft) {
            rowForOf.onHScroll(gridScrLeft);
        }
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @protected
     * @return {?}
     */
    IgxGridBaseComponent.prototype.getExportExcel = /**
     * @hidden
     * @protected
     * @return {?}
     */
    function () {
        return this._exportExcel;
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @protected
     * @return {?}
     */
    IgxGridBaseComponent.prototype.getExportCsv = /**
     * @hidden
     * @protected
     * @return {?}
     */
    function () {
        return this._exportCsv;
    };
    /**
    * @hidden
    */
    /**
     * @hidden
     * @param {?} rowData
     * @return {?}
     */
    IgxGridBaseComponent.prototype.isSummaryRow = /**
     * @hidden
     * @param {?} rowData
     * @return {?}
     */
    function (rowData) {
        return rowData.summaries && (rowData.summaries instanceof Map);
    };
    Object.defineProperty(IgxGridBaseComponent.prototype, "isAttachedToDom", {
        /**
         * @hidden
         */
        get: /**
         * @hidden
         * @protected
         * @return {?}
         */
        function () {
            return this.document.body.contains(this.nativeElement);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} args
     * @return {?}
     */
    IgxGridBaseComponent.prototype.cachedViewLoaded = /**
     * @hidden
     * @param {?} args
     * @return {?}
     */
    function (args) {
        var _this = this;
        if (args.context['templateID'] === 'dataRow' && args.context['$implicit'] === args.oldContext['$implicit']) {
            args.view.detectChanges();
            /** @type {?} */
            var row = this.getRowByIndex(args.context.index);
            if (row && row.cells) {
                row.cells.forEach(function (c) {
                    c.highlightText(_this.lastSearchInfo.searchText, _this.lastSearchInfo.caseSensitive, _this.lastSearchInfo.exactMatch);
                });
            }
        }
        if (this.hasHorizontalScroll()) {
            /** @type {?} */
            var tmplId = args.context.templateID;
            /** @type {?} */
            var index_1 = args.context.index;
            args.view.detectChanges();
            /** @type {?} */
            var row = tmplId === 'dataRow' ? this.getRowByIndex(index_1) : null;
            /** @type {?} */
            var summaryRow = tmplId === 'summaryRow' ? this.summariesRowList.toArray().find(function (sr) { return sr.dataRowIndex === index_1; }) : null;
            if (row && row instanceof IgxRowComponent) {
                this._restoreVirtState(row);
            }
            else if (summaryRow) {
                this._restoreVirtState(summaryRow);
            }
        }
    };
    /** @nocollapse */
    IgxGridBaseComponent.ctorParameters = function () { return [
        { type: IgxGridSelectionService },
        { type: IgxGridCRUDService },
        { type: GridBaseAPIService },
        { type: IgxSelectionAPIService },
        { type: undefined, decorators: [{ type: Inject, args: [IgxGridTransaction,] }] },
        { type: ElementRef },
        { type: NgZone },
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
        { type: ChangeDetectorRef },
        { type: ComponentFactoryResolver },
        { type: IterableDiffers },
        { type: ViewContainerRef },
        { type: IgxGridNavigationService },
        { type: IgxFilteringService },
        { type: IgxOverlayService, decorators: [{ type: Inject, args: [IgxOverlayService,] }] },
        { type: IgxGridSummaryService },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [DisplayDensityToken,] }] }
    ]; };
    IgxGridBaseComponent.propDecorators = {
        resourceStrings: [{ type: Input }],
        autoGenerate: [{ type: Input }],
        emptyGridTemplate: [{ type: Input }],
        loadingGridTemplate: [{ type: Input }],
        filteringLogic: [{ type: Input }],
        filteringExpressionsTree: [{ type: Input }],
        locale: [{ type: Input }],
        paging: [{ type: Input }],
        page: [{ type: Input }],
        perPage: [{ type: Input }],
        paginationTemplate: [{ type: Input }],
        columnHiding: [{ type: Input }],
        rowSelectable: [{ type: Input }],
        rowDraggable: [{ type: Input }],
        rowEditable: [{ type: Input }],
        height: [{ type: HostBinding, args: ['style.height',] }, { type: Input }],
        width: [{ type: HostBinding, args: ['style.width',] }, { type: Input }],
        evenRowCSS: [{ type: Input }],
        oddRowCSS: [{ type: Input }],
        rowHeight: [{ type: Input }],
        columnWidth: [{ type: Input }],
        primaryKey: [{ type: Input }],
        emptyGridMessage: [{ type: Input }],
        isLoading: [{ type: Input }],
        emptyFilteredGridMessage: [{ type: Input }],
        columnHidingTitle: [{ type: Input }],
        columnPinning: [{ type: Input }],
        columnPinningTitle: [{ type: Input }],
        allowFiltering: [{ type: Input }],
        filterMode: [{ type: Input }],
        summaryPosition: [{ type: Input }],
        summaryCalculationMode: [{ type: Input }],
        onCellClick: [{ type: Output }],
        onSelection: [{ type: Output }],
        onRowSelectionChange: [{ type: Output }],
        onColumnPinning: [{ type: Output }],
        onCellEditCancel: [{ type: Output }],
        onCellEditEnter: [{ type: Output }],
        onCellEdit: [{ type: Output }],
        onRowEditEnter: [{ type: Output }],
        onRowEdit: [{ type: Output }],
        onRowEditCancel: [{ type: Output }],
        onColumnInit: [{ type: Output }],
        onSortingDone: [{ type: Output }],
        onFilteringDone: [{ type: Output }],
        onPagingDone: [{ type: Output }],
        onRowAdded: [{ type: Output }],
        onRowDeleted: [{ type: Output }],
        onDataPreLoad: [{ type: Output }],
        onColumnResized: [{ type: Output }],
        onContextMenu: [{ type: Output }],
        onDoubleClick: [{ type: Output }],
        onColumnVisibilityChanged: [{ type: Output }],
        onColumnMovingStart: [{ type: Output }],
        onColumnMoving: [{ type: Output }],
        onColumnMovingEnd: [{ type: Output }],
        onFocusChange: [{ type: Output }],
        onGridKeydown: [{ type: Output }],
        onRowDragStart: [{ type: Output }],
        onRowDragEnd: [{ type: Output }],
        onGridCopy: [{ type: Output }],
        resizeLine: [{ type: ViewChild, args: [IgxGridColumnResizerComponent, { static: false },] }],
        columnList: [{ type: ContentChildren, args: [IgxColumnComponent, { read: IgxColumnComponent, descendants: true },] }],
        excelStyleSortingTemplateDirective: [{ type: ContentChild, args: [IgxExcelStyleSortingTemplateDirective, { read: IgxExcelStyleSortingTemplateDirective, static: true },] }],
        excelStyleMovingTemplateDirective: [{ type: ContentChild, args: [IgxExcelStyleMovingTemplateDirective, { read: IgxExcelStyleMovingTemplateDirective, static: true },] }],
        excelStyleHidingTemplateDirective: [{ type: ContentChild, args: [IgxExcelStyleHidingTemplateDirective, { read: IgxExcelStyleHidingTemplateDirective, static: true },] }],
        excelStylePinningTemplateDirective: [{ type: ContentChild, args: [IgxExcelStylePinningTemplateDirective, { read: IgxExcelStylePinningTemplateDirective, static: true },] }],
        headerGroups: [{ type: ViewChildren, args: [IgxGridHeaderGroupComponent, { read: IgxGridHeaderGroupComponent },] }],
        _rowList: [{ type: ViewChildren, args: ['row',] }],
        _summaryRowList: [{ type: ViewChildren, args: ['summaryRow', { read: IgxSummaryRowComponent },] }],
        _dataRowList: [{ type: ViewChildren, args: [IgxRowComponent, { read: IgxRowComponent },] }],
        emptyFilteredGridTemplate: [{ type: ViewChild, args: ['emptyFilteredGrid', { read: TemplateRef, static: true },] }],
        emptyGridDefaultTemplate: [{ type: ViewChild, args: ['defaultEmptyGrid', { read: TemplateRef, static: true },] }],
        loadingGridDefaultTemplate: [{ type: ViewChild, args: ['defaultLoadingGrid', { read: TemplateRef, static: true },] }],
        parentVirtDir: [{ type: ViewChild, args: ['scrollContainer', { read: IgxGridForOfDirective, static: true },] }],
        toolbarCustomContentTemplates: [{ type: ContentChildren, args: [IgxGridToolbarCustomContentDirective, { read: IgxGridToolbarCustomContentDirective, descendants: false },] }],
        verticalScrollContainer: [{ type: ViewChild, args: ['verticalScrollContainer', { read: IgxGridForOfDirective, static: true },] }],
        verticalScroll: [{ type: ViewChild, args: ['verticalScrollHolder', { read: IgxGridForOfDirective, static: true },] }],
        scr: [{ type: ViewChild, args: ['scr', { read: ElementRef, static: true },] }],
        footer: [{ type: ViewChild, args: ['footer', { read: ElementRef, static: false },] }],
        headerContainer: [{ type: ViewChild, args: ['headerContainer', { read: IgxGridForOfDirective, static: false },] }],
        headerCheckboxContainer: [{ type: ViewChild, args: ['headerCheckboxContainer', { static: false },] }],
        headerDragContainer: [{ type: ViewChild, args: ['headerDragContainer', { static: false },] }],
        headerGroupContainer: [{ type: ViewChild, args: ['headerGroupContainer', { static: false },] }],
        headerCheckbox: [{ type: ViewChild, args: ['headerCheckbox', { read: IgxCheckboxComponent, static: false },] }],
        filteringRow: [{ type: ViewChild, args: ['filteringRow', { read: IgxGridFilteringRowComponent, static: false },] }],
        theadRow: [{ type: ViewChild, args: ['theadRow', { static: true },] }],
        tbody: [{ type: ViewChild, args: ['tbody', { static: true },] }],
        tfoot: [{ type: ViewChild, args: ['tfoot', { static: true },] }],
        _outletDirective: [{ type: ViewChild, args: ['igxFilteringOverlayOutlet', { read: IgxOverlayOutletDirective, static: true },] }],
        rowEditingOutletDirective: [{ type: ViewChild, args: ['igxRowEditingOverlayOutlet', { read: IgxOverlayOutletDirective, static: true },] }],
        tmpOutlets: [{ type: ViewChildren, args: [IgxTemplateOutletDirective, { read: IgxTemplateOutletDirective },] }],
        dragIndicatorIconBase: [{ type: ViewChild, args: ['dragIndicatorIconBase', { read: TemplateRef, static: true },] }],
        defaultRowEditTemplate: [{ type: ViewChild, args: ['defaultRowEditTemplate', { read: TemplateRef, static: true },] }],
        rowEditCustom: [{ type: ContentChild, args: [IgxRowEditTemplateDirective, { read: TemplateRef, static: true },] }],
        rowEditText: [{ type: ContentChild, args: [IgxRowEditTextDirective, { read: TemplateRef, static: true },] }],
        rowEditActions: [{ type: ContentChild, args: [IgxRowEditActionsDirective, { read: TemplateRef, static: true },] }],
        rowEditTabsDEFAULT: [{ type: ViewChildren, args: [IgxRowEditTabStopDirective,] }],
        rowEditTabsCUSTOM: [{ type: ContentChildren, args: [IgxRowEditTabStopDirective,] }],
        rowEditingOverlay: [{ type: ViewChild, args: [IgxToggleDirective, { static: false },] }],
        tabindex: [{ type: HostBinding, args: ['attr.tabindex',] }],
        hostClass: [{ type: HostBinding, args: ['attr.class',] }],
        hostRole: [{ type: HostBinding, args: ['attr.role',] }],
        sortingExpressions: [{ type: Input }],
        hiddenColumnsText: [{ type: Input }],
        pinnedColumnsText: [{ type: Input }],
        toolbar: [{ type: ViewChild, args: ['toolbar', { read: IgxGridToolbarComponent, static: false },] }],
        toolbarHtml: [{ type: ViewChild, args: ['toolbar', { read: ElementRef, static: false },] }],
        showToolbar: [{ type: Input }],
        toolbarTitle: [{ type: Input }],
        exportExcel: [{ type: Input }],
        exportCsv: [{ type: Input }],
        exportText: [{ type: Input }],
        exportExcelText: [{ type: Input }],
        exportCsvText: [{ type: Input }],
        clipboardOptions: [{ type: Input }],
        onToolbarExporting: [{ type: Output }],
        onRangeSelection: [{ type: Output }]
    };
    tslib_1.__decorate([
        WatchChanges(),
        tslib_1.__metadata("design:type", Number),
        tslib_1.__metadata("design:paramtypes", [Number])
    ], IgxGridBaseComponent.prototype, "filteringLogic", null);
    tslib_1.__decorate([
        WatchChanges(),
        tslib_1.__metadata("design:type", Object),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], IgxGridBaseComponent.prototype, "filteringExpressionsTree", null);
    tslib_1.__decorate([
        WatchChanges(),
        tslib_1.__metadata("design:type", Boolean),
        tslib_1.__metadata("design:paramtypes", [Boolean])
    ], IgxGridBaseComponent.prototype, "rowSelectable", null);
    tslib_1.__decorate([
        WatchChanges(),
        tslib_1.__metadata("design:type", Boolean),
        tslib_1.__metadata("design:paramtypes", [Boolean])
    ], IgxGridBaseComponent.prototype, "rowEditable", null);
    tslib_1.__decorate([
        WatchChanges(),
        tslib_1.__metadata("design:type", String),
        tslib_1.__metadata("design:paramtypes", [String])
    ], IgxGridBaseComponent.prototype, "height", null);
    tslib_1.__decorate([
        WatchChanges(),
        tslib_1.__metadata("design:type", Object),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], IgxGridBaseComponent.prototype, "width", null);
    tslib_1.__decorate([
        WatchChanges(),
        tslib_1.__metadata("design:type", Object),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], IgxGridBaseComponent.prototype, "rowHeight", null);
    tslib_1.__decorate([
        WatchChanges(),
        tslib_1.__metadata("design:type", String),
        tslib_1.__metadata("design:paramtypes", [String])
    ], IgxGridBaseComponent.prototype, "columnWidth", null);
    tslib_1.__decorate([
        WatchChanges(),
        tslib_1.__metadata("design:type", Object)
    ], IgxGridBaseComponent.prototype, "primaryKey", void 0);
    tslib_1.__decorate([
        WatchChanges(),
        tslib_1.__metadata("design:type", Object),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], IgxGridBaseComponent.prototype, "columnPinning", null);
    tslib_1.__decorate([
        DeprecateProperty('onFocusChange event is deprecated. Use onGridKeydown event instead.'),
        tslib_1.__metadata("design:type", EventEmitter),
        tslib_1.__metadata("design:paramtypes", [EventEmitter])
    ], IgxGridBaseComponent.prototype, "onFocusChange", null);
    tslib_1.__decorate([
        WatchChanges(),
        tslib_1.__metadata("design:type", Array),
        tslib_1.__metadata("design:paramtypes", [Array])
    ], IgxGridBaseComponent.prototype, "sortingExpressions", null);
    tslib_1.__decorate([
        WatchChanges(),
        tslib_1.__metadata("design:type", Object),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], IgxGridBaseComponent.prototype, "hiddenColumnsText", null);
    tslib_1.__decorate([
        WatchChanges(),
        tslib_1.__metadata("design:type", Object),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], IgxGridBaseComponent.prototype, "pinnedColumnsText", null);
    tslib_1.__decorate([
        WatchChanges(),
        tslib_1.__metadata("design:type", Boolean),
        tslib_1.__metadata("design:paramtypes", [Boolean])
    ], IgxGridBaseComponent.prototype, "showToolbar", null);
    tslib_1.__decorate([
        WatchChanges(),
        tslib_1.__metadata("design:type", String),
        tslib_1.__metadata("design:paramtypes", [String])
    ], IgxGridBaseComponent.prototype, "toolbarTitle", null);
    tslib_1.__decorate([
        WatchChanges(),
        tslib_1.__metadata("design:type", Boolean),
        tslib_1.__metadata("design:paramtypes", [Boolean])
    ], IgxGridBaseComponent.prototype, "exportExcel", null);
    tslib_1.__decorate([
        WatchChanges(),
        tslib_1.__metadata("design:type", Boolean),
        tslib_1.__metadata("design:paramtypes", [Boolean])
    ], IgxGridBaseComponent.prototype, "exportCsv", null);
    tslib_1.__decorate([
        WatchChanges(),
        tslib_1.__metadata("design:type", String),
        tslib_1.__metadata("design:paramtypes", [String])
    ], IgxGridBaseComponent.prototype, "exportText", null);
    tslib_1.__decorate([
        WatchChanges(),
        tslib_1.__metadata("design:type", String),
        tslib_1.__metadata("design:paramtypes", [String])
    ], IgxGridBaseComponent.prototype, "exportExcelText", null);
    tslib_1.__decorate([
        WatchChanges(),
        tslib_1.__metadata("design:type", String),
        tslib_1.__metadata("design:paramtypes", [String])
    ], IgxGridBaseComponent.prototype, "exportCsvText", null);
    return IgxGridBaseComponent;
}(DisplayDensityBase));
export { IgxGridBaseComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    IgxGridBaseComponent.prototype._scrollWidth;
    /**
     * @type {?}
     * @protected
     */
    IgxGridBaseComponent.prototype._init;
    /**
     * @type {?}
     * @private
     */
    IgxGridBaseComponent.prototype._resourceStrings;
    /**
     * @type {?}
     * @private
     */
    IgxGridBaseComponent.prototype._emptyGridMessage;
    /**
     * @type {?}
     * @private
     */
    IgxGridBaseComponent.prototype._emptyFilteredGridMessage;
    /**
     * @type {?}
     * @private
     */
    IgxGridBaseComponent.prototype._isLoading;
    /**
     * @type {?}
     * @private
     */
    IgxGridBaseComponent.prototype._locale;
    /**
     * @type {?}
     * @private
     */
    IgxGridBaseComponent.prototype._observer;
    /**
     * @type {?}
     * @protected
     */
    IgxGridBaseComponent.prototype._destroyed;
    /**
     * @type {?}
     * @private
     */
    IgxGridBaseComponent.prototype.overlayIDs;
    /**
     * An \@Input property that autogenerates the `IgxGridComponent` columns.
     * The default value is false.
     * ```html
     * <igx-grid [data]="Data" [autoGenerate]="true"></igx-grid>
     * ```
     * \@memberof IgxGridBaseComponent
     * @type {?}
     */
    IgxGridBaseComponent.prototype.autoGenerate;
    /** @type {?} */
    IgxGridBaseComponent.prototype.id;
    /**
     * An \@Input property that sets a custom template when the `IgxGridComponent` is empty.
     * ```html
     * <igx-grid [id]="'igx-grid-1'" [data]="Data" [emptyGridTemplate]="myTemplate" [autoGenerate]="true"></igx-grid>
     * ```
     * \@memberof IgxGridBaseComponent
     * @type {?}
     */
    IgxGridBaseComponent.prototype.emptyGridTemplate;
    /**
     * An \@Input property that sets a custom template when the `IgxGridComponent` is loading.
     * ```html
     * <igx-grid [id]="'igx-grid-1'" [data]="Data" [loadingGridTemplate]="myTemplate" [autoGenerate]="true"></igx-grid>
     * ```
     * \@memberof IgxGridBaseComponent
     * @type {?}
     */
    IgxGridBaseComponent.prototype.loadingGridTemplate;
    /**
     * You can provide a custom `ng-template` for the pagination UI of the grid.
     * ```html
     * <igx-grid #grid [paging]="true" [myTemplate]="myTemplate" [height]="'305px'"></igx-grid>
     * ```
     * \@memberof IgxGridBaseComponent
     * @type {?}
     */
    IgxGridBaseComponent.prototype.paginationTemplate;
    /**
     * @hidden
     * \@internal
     * @type {?}
     */
    IgxGridBaseComponent.prototype.rowDragging;
    /**
     * An \@Input property that adds styling classes applied to all even `IgxGridRowComponent`s in the grid.
     * ```html
     * <igx-grid #grid [data]="Data" [evenRowCSS]="'igx-grid--my-even-class'" [autoGenerate]="true"></igx-grid>
     * ```
     * \@memberof IgxGridBaseComponent
     * @type {?}
     */
    IgxGridBaseComponent.prototype.evenRowCSS;
    /**
     * An \@Input property that adds styling classes applied to all odd `IgxGridRowComponent`s in the grid.
     * ```html
     * <igx-grid #grid [data]="Data" [evenRowCSS]="'igx-grid--my-odd-class'" [autoGenerate]="true"></igx-grid>
     * ```
     * \@memberof IgxGridBaseComponent
     * @type {?}
     */
    IgxGridBaseComponent.prototype.oddRowCSS;
    /**
     * An \@Input property that sets the primary key of the `IgxGridComponent`.
     * ```html
     * <igx-grid #grid [data]="localData" [showToolbar]="true" [primaryKey]="'ProductID'" [autoGenerate]="true"></igx-grid>
     * ```
     * \@memberof IgxGridBaseComponent
     * @type {?}
     */
    IgxGridBaseComponent.prototype.primaryKey;
    /**
     * A property that allows the columns to be auto-generated once again after the initialization of the grid.
     * This will allow to bind the grid to remote data and having auto-generated columns at the same time.
     * Note that after generating the columns, this property would be disabled to avoid re-creating
     * columns each time a new data is assigned.
     * ```typescript
     *  this.grid.shouldGenerate = true;
     *  this.remoteData = this.remoteService.remoteData;
     * ```
     * @type {?}
     */
    IgxGridBaseComponent.prototype.shouldGenerate;
    /**
     * An \@Input property that sets the title to be displayed in the built-in column hiding UI.
     * ```html
     * <igx-grid [showToolbar]="true" [columnHiding]="true" columnHidingTitle="Column Hiding"></igx-grid>
     * ```
     * \@memberof IgxGridBaseComponent
     * @type {?}
     */
    IgxGridBaseComponent.prototype.columnHidingTitle;
    /**
     * An \@Input property that sets the title to be displayed in the UI of the column pinning.
     * ```html
     * <igx-grid #grid [data]="localData" [columnPinning]="'true" [columnPinningTitle]="'Column Hiding'" [autoGenerate]="true"></igx-grid>
     * ```
     * \@memberof IgxGridBaseComponent
     * @type {?}
     */
    IgxGridBaseComponent.prototype.columnPinningTitle;
    /**
     * Emitted when `IgxGridCellComponent` is clicked. Returns the `IgxGridCellComponent`.
     * ```html
     * <igx-grid #grid (onCellClick)="onCellClick($event)" [data]="localData" [height]="'305px'" [autoGenerate]="true"></igx-grid>
     * ```
     * ```typescript
     * public onCellClick(e){
     *     alert("The cell has been clicked!");
     * }
     * ```
     * \@memberof IgxGridBaseComponent
     * @type {?}
     */
    IgxGridBaseComponent.prototype.onCellClick;
    /**
     * Emitted when `IgxGridCellComponent` is selected. Returns the `IgxGridCellComponent`.
     * ```html
     * <igx-grid #grid (onSelection)="onCellSelect($event)" [data]="localData" [height]="'305px'" [autoGenerate]="true"></igx-grid>
     * ```
     * ```typescript
     * public onCellSelect(e){
     *     alert("The cell has been selected!");
     * }
     * ```
     * \@memberof IgxGridBaseComponent
     * @type {?}
     */
    IgxGridBaseComponent.prototype.onSelection;
    /**
     *  Emitted when `IgxGridRowComponent` is selected.
     * ```html
     * <igx-grid #grid (onRowSelectionChange)="onRowClickChange($event)" [data]="localData" [autoGenerate]="true"></igx-grid>
     * ```
     * ```typescript
     * public onCellClickChange(e){
     *     alert("The selected row has been changed!");
     * }
     * ```
     * \@memberof IgxGridBaseComponent
     * @type {?}
     */
    IgxGridBaseComponent.prototype.onRowSelectionChange;
    /**
     * Emitted when `IgxColumnComponent` is pinned.
     * The index that the column is inserted at may be changed through the `insertAtIndex` property.
     * ```typescript
     * public columnPinning(event) {
     *     if (event.column.field === "Name") {
     *       event.insertAtIndex = 0;
     *     }
     * }
     * ```
     * \@memberof IgxGridBaseComponent
     * @type {?}
     */
    IgxGridBaseComponent.prototype.onColumnPinning;
    /**
     * An \@Output property emitting an event when `IgxGridCellComponent`
     * editing has been performed in the grid and the values have **not** been submitted (e.g. `Esc` key was pressed).
     * This event is cancelable.
     *
     * args: IGridEditEventArgs = {
     *      cancel: bool,
     *      cellID: {
     *          columnID: int,
     *          rowID: int,
     *          rowIndex: int
     *      }
     *      newValue: object,
     *      oldValue: object,
     *      rowID: int
     *  }
     *
     * ```typescript
     * editCancel(event: IGridEditEventArgs){
     *    const rowID: IgxColumnComponent = event.rowID;
     * }
     * ```
     * ```html
     * <igx-grid #grid3 (onCellEditCancel)="editCancel($event)" [data]="remote | async" (onSortingDone)="process($event)"
     *          [primaryKey]="'ProductID'" [rowSelectable]="true">
     *          <igx-column [sortable]="true" [field]="'ProductID'"></igx-column>
     *          <igx-column [editable]="true" [field]="'ProductName'"></igx-column>
     *          <igx-column [sortable]="true" [field]="'UnitsInStock'" [header]="'Units in Stock'"></igx-column>
     * </igx-grid>
     * ```
     * \@memberof IgxGridComponent
     * @type {?}
     */
    IgxGridBaseComponent.prototype.onCellEditCancel;
    /**
     * An \@Output property emitting an event when `IgxGridCellComponent` enters edit mode.
     * This event is cancelable.
     *
     * args: IGridEditEventArgs = {
     *      cancel: bool,
     *      cellID: {
     *          columnID: int,
     *          rowID: int,
     *          rowIndex: int
     *      }
     *      oldValue: object,
     *      rowID: int
     *  }
     *
     * ```typescript
     * editStart(event: IGridEditEventArgs){
     *    const value: IgxColumnComponent = event.newValue;
     * }
     * ```
     * ```html
     * <igx-grid #grid3 (onCellEditEnter)="editStart($event)" [data]="remote | async" (onSortingDone)="process($event)"
     *          [primaryKey]="'ProductID'" [rowSelectable]="true">
     *          <igx-column [sortable]="true" [field]="'ProductID'"></igx-column>
     *          <igx-column [editable]="true" [field]="'ProductName'"></igx-column>
     *          <igx-column [sortable]="true" [field]="'UnitsInStock'" [header]="'Units in Stock'"></igx-column>
     * </igx-grid>
     * ```
     * \@memberof IgxGridComponent
     * @type {?}
     */
    IgxGridBaseComponent.prototype.onCellEditEnter;
    /**
     * An \@Output property emitting an event when `IgxGridCellComponent` editing has been performed in the grid.
     * Event is fired after editing is completed, when the cell is exiting edit mode.
     * This event is cancelable.
     *
     * args: IGridEditEventArgs = {
     *      cancel: bool,
     *      cellID: {
     *          columnID: int,
     *          rowID: int,
     *          rowIndex: int
     *      }
     *      newValue: object,
     *      oldValue: object,
     *      rowID: int
     *  }
     *
     * ```typescript
     * editDone(event: IGridEditEventArgs){
     *    const value: IgxColumnComponent = event.newValue;
     * }
     * ```
     * ```html
     * <igx-grid #grid3 (onCellEdit)="editDone($event)" [data]="remote | async" (onSortingDone)="process($event)"
     *          [primaryKey]="'ProductID'" [rowSelectable]="true">
     *          <igx-column [sortable]="true" [field]="'ProductID'"></igx-column>
     *          <igx-column [editable]="true" [field]="'ProductName'"></igx-column>
     *          <igx-column [sortable]="true" [field]="'UnitsInStock'" [header]="'Units in Stock'"></igx-column>
     * </igx-grid>
     * ```
     * \@memberof IgxGridBaseComponent
     * @type {?}
     */
    IgxGridBaseComponent.prototype.onCellEdit;
    /**
     * An \@Output property emitting an event when [rowEditable]="true" a row enters edit mode.
     * This event is cancelable.
     *
     * args: IGridEditEventArgs = {
     *      cancel: bool,
     *      oldValue: <rowObj>,
     *      rowID: int
     *  }
     *
     * Bind to the event in markup as follows:
     * ```html
     * <igx-grid #grid3 (onRowEditEnter)="editStart($event)" [data]="remote | async" (onSortingDone)="process($event)"
     *          [primaryKey]="'ProductID'" [rowSelectable]="true" [rowEditable]="true">
     *          <igx-column [sortable]="true" [field]="'ProductID'"></igx-column>
     *          <igx-column [editable]="true" [field]="'ProductName'"></igx-column>
     *          <igx-column [sortable]="true" [field]="'UnitsInStock'" [header]="'Units in Stock'"></igx-column>
     * </igx-grid>
     * ```
     * ```typescript
     *      editStart(event: IGridEditEventArgs) {
     *          const editedRowObj = event.oldValue;
     *          const cancelValue = event.cancel;
     *          const rowID = event.rowID;
     *      }
     * ```
     * \@memberof IgxGridComponent
     * @type {?}
     */
    IgxGridBaseComponent.prototype.onRowEditEnter;
    /**
     * An \@Output property emitting an event when [rowEditable]="true" & `endEdit(true)` is called.
     * Emitted when changing rows during edit mode, selecting an un-editable cell in the edited row,
     * performing paging operation, column resizing, pinning, moving or hitting  `Done`
     * button inside of the rowEditingOverlay, or hitting the `Enter` key while editing a cell.
     * This event is cancelable.
     *
     * args: IGridEditEventArgs = {
     *      cancel: bool,
     *      newValue: <rowObj>,
     *      oldValue: <rowObj>,
     *      rowID: int
     *  }
     *
     * Bind to the event in markup as follows:
     * ```html
     * <igx-grid #grid3 (onRowEdit)="editDone($event)" [data]="remote | async" (onSortingDone)="process($event)"
     *          [primaryKey]="'ProductID'" [rowSelectable]="true" [rowEditable]="true">
     *          <igx-column [sortable]="true" [field]="'ProductID'"></igx-column>
     *          <igx-column [editable]="true" [field]="'ProductName'"></igx-column>
     *          <igx-column [sortable]="true" [field]="'UnitsInStock'" [header]="'Units in Stock'"></igx-column>
     * </igx-grid>
     * ```
     *
     * ```typescript
     *      editDone(event: IGridEditEventArgs) {
     *          const originalRowObj = event.oldValue;
     *          const updatedRowObj = event.newValue;
     *          const cancelValue = event.cancel;
     *          const rowID = event.rowID;
     *      }
     * ```
     * \@memberof IgxGridBaseComponent
     * @type {?}
     */
    IgxGridBaseComponent.prototype.onRowEdit;
    /**
     * An \@Output property emitting an event when [rowEditable]="true" & `endEdit(false)` is called.
     * Emitted when changing hitting `Esc` key during cell editing and when click on the `Cancel` button
     * in the row editing overlay.
     * This event is cancelable.
     *
     * args: IGridEditEventArgs = {
     *      cancel: bool,
     *      newValue: <rowObj>,
     *      oldValue: <rowObj>,
     *      rowID: int
     *  }
     *
     * Bind to the event in markup as follows:
     * ```html
     * <igx-grid #grid3 (onRowEditCancel)="editCancel($event)" [data]="remote | async" (onSortingDone)="process($event)"
     *          [primaryKey]="'ProductID'" [rowSelectable]="true" [rowEditable]="true">
     *          <igx-column [sortable]="true" [field]="'ProductID'"></igx-column>
     *          <igx-column [editable]="true" [field]="'ProductName'"></igx-column>
     *          <igx-column [sortable]="true" [field]="'UnitsInStock'" [header]="'Units in Stock'"></igx-column>
     * </igx-grid>
     * ```
     * ```typescript
     *      editCancel(emitted: { row: IgxGridRowComponent, newValue: any, oldValue: any }): void {
     *          const originalRowObj = event.oldValue;
     *          const updatedRowObj = event.newValue;
     *          const cancelValue = event.cancel;
     *          const rowID = event.rowID;
     *      }
     * ```
     * \@memberof IgxGridBaseComponent
     * @type {?}
     */
    IgxGridBaseComponent.prototype.onRowEditCancel;
    /**
     * Emitted when a grid column is initialized. Returns the column object.
     * ```html
     * <igx-grid #grid [data]="localData" [onColumnInit]="initColumns($event)" [autoGenerate]="true"></igx-grid>
     * ```
     * ```typescript
     * initColumns(event: IgxColumnComponent) {
     * const column: IgxColumnComponent = event;
     *       column.filterable = true;
     *       column.sortable = true;
     *       column.editable = true;
     * }
     * ```
     * \@memberof IgxGridBaseComponent
     * @type {?}
     */
    IgxGridBaseComponent.prototype.onColumnInit;
    /**
     * Emitted when sorting is performed through the UI. Returns the sorting expression.
     * ```html
     * <igx-grid #grid [data]="localData" [autoGenerate]="true" (onSortingDone)="sortingDone($event)"></igx-grid>
     * ```
     * ```typescript
     * sortingDone(event: SortingDirection){
     *     const sortingDirection = event;
     * }
     * ```
     * \@memberof IgxGridBaseComponent
     * @type {?}
     */
    IgxGridBaseComponent.prototype.onSortingDone;
    /**
     * Emitted when filtering is performed through the UI.
     * Returns the filtering expressions tree of the column for which filtering was performed.
     * ```typescript
     * filteringDone(event: IFilteringExpressionsTree){
     *     const filteringTree = event;
     * }
     * ```
     * ```html
     * <igx-grid #grid [data]="localData" [height]="'305px'" [autoGenerate]="true" (onFilteringDone)="filteringDone($event)"></igx-grid>
     * ```
     * \@memberof IgxGridBaseComponent
     * @type {?}
     */
    IgxGridBaseComponent.prototype.onFilteringDone;
    /**
     * Emitted when paging is performed. Returns an object consisting of the previous and next pages.
     * ```typescript
     * pagingDone(event: IPageEventArgs){
     *     const paging = event;
     * }
     * ```
     * ```html
     * <igx-grid #grid [data]="localData" [height]="'305px'" [autoGenerate]="true" (onPagingDone)="pagingDone($event)"></igx-grid>
     * ```
     * \@memberof IgxGridBaseComponent
     * @type {?}
     */
    IgxGridBaseComponent.prototype.onPagingDone;
    /**
     * Emitted when a `IgxGridRowComponent` is being added to the `IgxGridComponent` through the API.
     * Returns the data for the new `IgxGridRowComponent` object.
     * ```typescript
     * rowAdded(event: IRowDataEventArgs){
     *    const rowInfo = event;
     * }
     * ```
     * ```html
     * <igx-grid #grid [data]="localData" (onRowAdded)="rowAdded($event)" [height]="'305px'" [autoGenerate]="true"></igx-grid>
     * ```
     * \@memberof IgxGridBaseComponent
     * @type {?}
     */
    IgxGridBaseComponent.prototype.onRowAdded;
    /**
     * Emitted when a `IgxGridRowComponent` is deleted through the `IgxGridComponent` API.
     * Returns an `IRowDataEventArgs` object.
     * ```typescript
     * rowDeleted(event: IRowDataEventArgs){
     *    const rowInfo = event;
     * }
     * ```
     * ```html
     * <igx-grid #grid [data]="localData" (onRowDeleted)="rowDeleted($event)" [height]="'305px'" [autoGenerate]="true"></igx-grid>
     * ```
     * \@memberof IgxGridBaseComponent
     * @type {?}
     */
    IgxGridBaseComponent.prototype.onRowDeleted;
    /**
     * Emitted when a new chunk of data is loaded from virtualization.
     * ```typescript
     *  <igx-grid #grid [data]="localData" [autoGenerate]="true" (onDataPreLoad)='handleDataPreloadEvent()'></igx-grid>
     * ```
     * \@memberof IgxGridBaseComponent
     * @type {?}
     */
    IgxGridBaseComponent.prototype.onDataPreLoad;
    /**
     * Emitted when `IgxColumnComponent` is resized.
     * Returns the `IgxColumnComponent` object's old and new width.
     * ```typescript
     * resizing(event: IColumnResizeEventArgs){
     *     const grouping = event;
     * }
     * ```
     * ```html
     * <igx-grid #grid [data]="localData" (onColumnResized)="resizing($event)" [autoGenerate]="true"></igx-grid>
     * ```
     * \@memberof IgxGridBaseComponent
     * @type {?}
     */
    IgxGridBaseComponent.prototype.onColumnResized;
    /**
     * Emitted when a `IgxGridCellComponent` is right clicked. Returns the `IgxGridCellComponent` object.
     * ```typescript
     * contextMenu(event: IGridCellEventArgs){
     *     const resizing = event;
     *     console.log(resizing);
     * }
     * ```
     * ```html
     * <igx-grid #grid [data]="localData" (onContextMenu)="contextMenu($event)" [autoGenerate]="true"></igx-grid>
     * ```
     * \@memberof IgxGridBaseComponent
     * @type {?}
     */
    IgxGridBaseComponent.prototype.onContextMenu;
    /**
     * Emitted when a `IgxGridCellComponent` is double clicked. Returns the `IgxGridCellComponent` object.
     * ```typescript
     * dblClick(event: IGridCellEventArgs){
     *     const dblClick = event;
     *     console.log(dblClick);
     * }
     * ```
     * ```html
     * <igx-grid #grid [data]="localData" (onDoubleClick)="dblClick($event)" [autoGenerate]="true"></igx-grid>
     * ```
     * \@memberof IgxGridBaseComponent
     * @type {?}
     */
    IgxGridBaseComponent.prototype.onDoubleClick;
    /**
     * Emitted when `IgxColumnComponent` visibility is changed. Args: { column: any, newValue: boolean }
     * ```typescript
     * visibilityChanged(event: IColumnVisibilityChangedEventArgs){
     *    const visiblity = event;
     * }
     * ```
     * ```html
     * <igx-grid [columnHiding]="true" [showToolbar]="true" (onColumnVisibilityChanged)="visibilityChanged($event)"></igx-grid>
     * ```
     * \@memberof IgxGridBaseComponent
     * @type {?}
     */
    IgxGridBaseComponent.prototype.onColumnVisibilityChanged;
    /**
     * Emitted when `IgxColumnComponent` moving starts. Returns the moved `IgxColumnComponent` object.
     * ```typescript
     * movingStart(event: IColumnMovingStartEventArgs){
     *     const movingStarts = event;
     * }
     * ```
     * ```html
     * <igx-grid [columnHiding]="true" [showToolbar]="true" (onColumnMovingStart)="movingStart($event)"></igx-grid>
     * ```
     * \@memberof IgxGridBaseComponent
     * @type {?}
     */
    IgxGridBaseComponent.prototype.onColumnMovingStart;
    /**
     * Emitted throughout the `IgxColumnComponent` moving operation.
     * Returns the source and target `IgxColumnComponent` objects. This event is cancelable.
     * ```typescript
     * moving(event: IColumnMovingEventArgs){
     *     const moving = event;
     * }
     * ```
     * ```html
     * <igx-grid [columnHiding]="true" [showToolbar]="true" (onColumnMoving)="moving($event)"></igx-grid>
     * ```
     * \@memberof IgxGridBaseComponent
     * @type {?}
     */
    IgxGridBaseComponent.prototype.onColumnMoving;
    /**
     * Emitted when `IgxColumnComponent` moving ends.
     * Returns the source and target `IgxColumnComponent` objects.
     * ```typescript
     * movingEnds(event: IColumnMovingEndEventArgs){
     *     const movingEnds = event;
     * }
     * ```
     * ```html
     * <igx-grid [columnHiding]="true" [showToolbar]="true" (onColumnMovingEnd)="movingEnds($event)"></igx-grid>
     * ```
     * \@memberof IgxGridBaseComponent
     * @type {?}
     */
    IgxGridBaseComponent.prototype.onColumnMovingEnd;
    /**
     * Emitted when keydown is triggered over element inside grid's body.
     * This event is fired only if the key combination is supported in the grid.
     * Return the target type, target object and the original event. This event is cancelable.
     * ```typescript
     * customKeydown(args: IGridKeydownEventArgs) {
     *  const keydownEvent = args.event;
     * }
     * ```
     * ```html
     *  <igx-grid (onGridKeydown)="customKeydown($event)"></igx-grid>
     * ```
     * @type {?}
     */
    IgxGridBaseComponent.prototype.onGridKeydown;
    /**
     * Emitted when start dragging a row.
     * Return the dragged row.
     * @type {?}
     */
    IgxGridBaseComponent.prototype.onRowDragStart;
    /**
     * Emitted when dropping a row.
     * Return the dropped row.
     * @type {?}
     */
    IgxGridBaseComponent.prototype.onRowDragEnd;
    /**
     * Emitted when a copy operation is executed.
     * Fired only if copy behavior is enabled through the [`clipboardOptions`]{\@link IgxGridBaseComponent#clipboardOptions}.
     * @type {?}
     */
    IgxGridBaseComponent.prototype.onGridCopy;
    /**
     * @hidden
     * @type {?}
     */
    IgxGridBaseComponent.prototype.resizeLine;
    /**
     * @hidden
     * @type {?}
     */
    IgxGridBaseComponent.prototype.columnList;
    /**
     * @hidden
     * @type {?}
     */
    IgxGridBaseComponent.prototype.excelStyleSortingTemplateDirective;
    /**
     * @hidden
     * @type {?}
     */
    IgxGridBaseComponent.prototype.excelStyleMovingTemplateDirective;
    /**
     * @hidden
     * @type {?}
     */
    IgxGridBaseComponent.prototype.excelStyleHidingTemplateDirective;
    /**
     * @hidden
     * @type {?}
     */
    IgxGridBaseComponent.prototype.excelStylePinningTemplateDirective;
    /**
     * @hidden
     * @type {?}
     */
    IgxGridBaseComponent.prototype.headerGroups;
    /**
     * @type {?}
     * @private
     */
    IgxGridBaseComponent.prototype._rowList;
    /**
     * @type {?}
     * @protected
     */
    IgxGridBaseComponent.prototype._summaryRowList;
    /**
     * @type {?}
     * @private
     */
    IgxGridBaseComponent.prototype._dataRowList;
    /**
     * A template reference for the template when the filtered `IgxGridComponent` is empty.
     * ```
     * const emptyTempalte = this.grid.emptyGridTemplate;
     * ```
     * \@memberof IgxGridBaseComponent
     * @type {?}
     */
    IgxGridBaseComponent.prototype.emptyFilteredGridTemplate;
    /**
     * A template reference for the template when the `IgxGridComponent` is empty.
     * ```
     * const emptyTempalte = this.grid.emptyGridTemplate;
     * ```
     * \@memberof IgxGridBaseComponent
     * @type {?}
     */
    IgxGridBaseComponent.prototype.emptyGridDefaultTemplate;
    /** @type {?} */
    IgxGridBaseComponent.prototype.loadingGridDefaultTemplate;
    /**
     * @hidden
     * @type {?}
     */
    IgxGridBaseComponent.prototype.parentVirtDir;
    /** @type {?} */
    IgxGridBaseComponent.prototype.toolbarCustomContentTemplates;
    /**
     * @hidden
     * @type {?}
     */
    IgxGridBaseComponent.prototype.verticalScrollContainer;
    /**
     * @hidden
     * @type {?}
     */
    IgxGridBaseComponent.prototype.verticalScroll;
    /**
     * @hidden
     * @type {?}
     */
    IgxGridBaseComponent.prototype.scr;
    /**
     * @hidden
     * @type {?}
     */
    IgxGridBaseComponent.prototype.footer;
    /**
     * @hidden
     * @type {?}
     */
    IgxGridBaseComponent.prototype.headerContainer;
    /**
     * @hidden
     * @type {?}
     */
    IgxGridBaseComponent.prototype.headerCheckboxContainer;
    /**
     * @hidden
     * @type {?}
     */
    IgxGridBaseComponent.prototype.headerDragContainer;
    /**
     * @hidden
     * @type {?}
     */
    IgxGridBaseComponent.prototype.headerGroupContainer;
    /**
     * @hidden
     * @type {?}
     */
    IgxGridBaseComponent.prototype.headerCheckbox;
    /**
     * @hidden
     * @type {?}
     */
    IgxGridBaseComponent.prototype.filteringRow;
    /**
     * @hidden
     * @type {?}
     */
    IgxGridBaseComponent.prototype.theadRow;
    /**
     * @hidden
     * @type {?}
     */
    IgxGridBaseComponent.prototype.tbody;
    /**
     * @hidden
     * @type {?}
     */
    IgxGridBaseComponent.prototype.tfoot;
    /**
     * @hidden
     * @type {?}
     * @protected
     */
    IgxGridBaseComponent.prototype._outletDirective;
    /**
     * @hidden
     * @type {?}
     */
    IgxGridBaseComponent.prototype.rowEditingOutletDirective;
    /**
     * @hidden
     * @type {?}
     */
    IgxGridBaseComponent.prototype.tmpOutlets;
    /**
     * @hidden
     * \@internal
     * @type {?}
     */
    IgxGridBaseComponent.prototype.dragIndicatorIconBase;
    /**
     * @hidden
     * @type {?}
     * @private
     */
    IgxGridBaseComponent.prototype.defaultRowEditTemplate;
    /**
     * @hidden
     * @type {?}
     */
    IgxGridBaseComponent.prototype.rowEditCustom;
    /**
     * @hidden
     * @type {?}
     */
    IgxGridBaseComponent.prototype.rowEditText;
    /**
     * @hidden
     * @type {?}
     */
    IgxGridBaseComponent.prototype.rowEditActions;
    /**
     * @hidden
     * @type {?}
     */
    IgxGridBaseComponent.prototype.rowEditTabsDEFAULT;
    /**
     * @hidden
     * @type {?}
     */
    IgxGridBaseComponent.prototype.rowEditTabsCUSTOM;
    /**
     * @hidden
     * @type {?}
     */
    IgxGridBaseComponent.prototype.rowEditingOverlay;
    /**
     * @hidden
     * @type {?}
     */
    IgxGridBaseComponent.prototype.tabindex;
    /**
     * @hidden
     * @type {?}
     */
    IgxGridBaseComponent.prototype.hostRole;
    /**
     * @hidden
     * @type {?}
     */
    IgxGridBaseComponent.prototype.columnsWithNoSetWidths;
    /**
     * @type {?}
     * @private
     */
    IgxGridBaseComponent.prototype._showToolbar;
    /**
     * @type {?}
     * @private
     */
    IgxGridBaseComponent.prototype._exportExcel;
    /**
     * @type {?}
     * @private
     */
    IgxGridBaseComponent.prototype._exportCsv;
    /**
     * @type {?}
     * @private
     */
    IgxGridBaseComponent.prototype._toolbarTitle;
    /**
     * @type {?}
     * @private
     */
    IgxGridBaseComponent.prototype._exportText;
    /**
     * @type {?}
     * @private
     */
    IgxGridBaseComponent.prototype._exportExcelText;
    /**
     * @type {?}
     * @private
     */
    IgxGridBaseComponent.prototype._exportCsvText;
    /**
     * @type {?}
     * @private
     */
    IgxGridBaseComponent.prototype._rowEditable;
    /**
     * @type {?}
     * @private
     */
    IgxGridBaseComponent.prototype._currentRowState;
    /**
     * @type {?}
     * @private
     */
    IgxGridBaseComponent.prototype._filteredSortedData;
    /**
     * Provides access to the `IgxToolbarComponent`.
     * ```typescript
     * const gridToolbar = this.grid.toolbar;
     * ```
     * \@memberof IgxGridBaseComponent
     * @type {?}
     */
    IgxGridBaseComponent.prototype.toolbar;
    /**
     * @type {?}
     * @private
     */
    IgxGridBaseComponent.prototype.toolbarHtml;
    /**
     * Controls the copy behavior of the grid.
     * @type {?}
     */
    IgxGridBaseComponent.prototype.clipboardOptions;
    /**
     * @hidden
     * @type {?}
     */
    IgxGridBaseComponent.prototype.rowEditMessage;
    /**
     * Emitted when an export process is initiated by the user.
     * ```typescript
     * toolbarExporting(event: IGridToolbarExportEventArgs){
     *     const toolbarExporting = event;
     * }
     * ```
     * \@memberof IgxGridBaseComponent
     * @type {?}
     */
    IgxGridBaseComponent.prototype.onToolbarExporting;
    /**
     * Emitted when making a range selection either through
     * drag selection or through keyboard selection.
     * @type {?}
     */
    IgxGridBaseComponent.prototype.onRangeSelection;
    /**
     * @hidden
     * @type {?}
     */
    IgxGridBaseComponent.prototype.pagingState;
    /**
     * @hidden
     * @type {?}
     */
    IgxGridBaseComponent.prototype.calcWidth;
    /**
     * @hidden
     * @type {?}
     */
    IgxGridBaseComponent.prototype.calcHeight;
    /**
     * @hidden
     * @type {?}
     */
    IgxGridBaseComponent.prototype.tfootHeight;
    /**
     * @hidden
     * @type {?}
     */
    IgxGridBaseComponent.prototype.chipsGoupingExpressions;
    /**
     * @hidden
     * @type {?}
     */
    IgxGridBaseComponent.prototype.summariesHeight;
    /**
     * @hidden
     * @type {?}
     */
    IgxGridBaseComponent.prototype.draggedColumn;
    /**
     * @hidden
     * @type {?}
     */
    IgxGridBaseComponent.prototype.allRowsSelected;
    /**
     * @hidden
     * @type {?}
     */
    IgxGridBaseComponent.prototype.disableTransitions;
    /**
     * @hidden
     * @type {?}
     */
    IgxGridBaseComponent.prototype.lastSearchInfo;
    /**
     * @hidden
     * @type {?}
     */
    IgxGridBaseComponent.prototype.columnWidthSetByUser;
    /** @type {?} */
    IgxGridBaseComponent.prototype.data;
    /** @type {?} */
    IgxGridBaseComponent.prototype.filteredData;
    /**
     * @hidden
     * @type {?}
     * @protected
     */
    IgxGridBaseComponent.prototype.destroy$;
    /**
     * @hidden
     * @type {?}
     * @protected
     */
    IgxGridBaseComponent.prototype._perPage;
    /**
     * @hidden
     * @type {?}
     * @protected
     */
    IgxGridBaseComponent.prototype._page;
    /**
     * @hidden
     * @type {?}
     * @protected
     */
    IgxGridBaseComponent.prototype._paging;
    /**
     * @hidden
     * @type {?}
     * @protected
     */
    IgxGridBaseComponent.prototype._rowSelection;
    /**
     * @hidden
     * @type {?}
     * @protected
     */
    IgxGridBaseComponent.prototype._rowDrag;
    /**
     * @hidden
     * @type {?}
     * @protected
     */
    IgxGridBaseComponent.prototype._pipeTrigger;
    /**
     * @hidden
     * @type {?}
     * @protected
     */
    IgxGridBaseComponent.prototype._summaryPipeTrigger;
    /**
     * @hidden
     * @type {?}
     * @protected
     */
    IgxGridBaseComponent.prototype._columns;
    /**
     * @hidden
     * @type {?}
     * @protected
     */
    IgxGridBaseComponent.prototype._pinnedColumns;
    /**
     * @hidden
     * @type {?}
     * @protected
     */
    IgxGridBaseComponent.prototype._unpinnedColumns;
    /**
     * @hidden
     * @type {?}
     * @protected
     */
    IgxGridBaseComponent.prototype._filteringExpressionsTree;
    /**
     * @hidden
     * @type {?}
     * @protected
     */
    IgxGridBaseComponent.prototype._sortingExpressions;
    /**
     * @hidden
     * @type {?}
     * @protected
     */
    IgxGridBaseComponent.prototype._maxLevelHeaderDepth;
    /**
     * @hidden
     * @type {?}
     * @protected
     */
    IgxGridBaseComponent.prototype._columnHiding;
    /**
     * @hidden
     * @type {?}
     * @protected
     */
    IgxGridBaseComponent.prototype._columnPinning;
    /**
     * @hidden
     * @type {?}
     * @protected
     */
    IgxGridBaseComponent.prototype._keydownListener;
    /**
     * @hidden
     * @type {?}
     * @protected
     */
    IgxGridBaseComponent.prototype._vScrollListener;
    /**
     * @hidden
     * @type {?}
     * @protected
     */
    IgxGridBaseComponent.prototype._hScrollListener;
    /**
     * @hidden
     * @type {?}
     * @protected
     */
    IgxGridBaseComponent.prototype._wheelListener;
    /**
     * @type {?}
     * @protected
     */
    IgxGridBaseComponent.prototype._allowFiltering;
    /**
     * @type {?}
     * @protected
     */
    IgxGridBaseComponent.prototype._filterMode;
    /**
     * @type {?}
     * @private
     */
    IgxGridBaseComponent.prototype.resizeHandler;
    /**
     * @type {?}
     * @private
     */
    IgxGridBaseComponent.prototype.columnListDiffer;
    /**
     * @type {?}
     * @private
     */
    IgxGridBaseComponent.prototype._hiddenColumnsText;
    /**
     * @type {?}
     * @private
     */
    IgxGridBaseComponent.prototype._pinnedColumnsText;
    /**
     * @type {?}
     * @private
     */
    IgxGridBaseComponent.prototype._height;
    /**
     * @type {?}
     * @private
     */
    IgxGridBaseComponent.prototype._width;
    /**
     * @type {?}
     * @protected
     */
    IgxGridBaseComponent.prototype._autoSize;
    /**
     * @type {?}
     * @private
     */
    IgxGridBaseComponent.prototype._rowHeight;
    /**
     * @type {?}
     * @protected
     */
    IgxGridBaseComponent.prototype._ngAfterViewInitPassed;
    /**
     * @type {?}
     * @protected
     */
    IgxGridBaseComponent.prototype._baseFontSize;
    /**
     * @type {?}
     * @private
     */
    IgxGridBaseComponent.prototype._horizontalForOfs;
    /**
     * @type {?}
     * @private
     */
    IgxGridBaseComponent.prototype._multiRowLayoutRowSize;
    /**
     * @type {?}
     * @private
     */
    IgxGridBaseComponent.prototype._totalWidth;
    /**
     * @type {?}
     * @private
     */
    IgxGridBaseComponent.prototype._pinnedVisible;
    /**
     * @type {?}
     * @private
     */
    IgxGridBaseComponent.prototype._unpinnedVisible;
    /**
     * @type {?}
     * @private
     */
    IgxGridBaseComponent.prototype._pinnedWidth;
    /**
     * @type {?}
     * @private
     */
    IgxGridBaseComponent.prototype._unpinnedWidth;
    /**
     * @type {?}
     * @private
     */
    IgxGridBaseComponent.prototype._visibleColumns;
    /**
     * @type {?}
     * @private
     */
    IgxGridBaseComponent.prototype._columnGroups;
    /**
     * @type {?}
     * @private
     */
    IgxGridBaseComponent.prototype._columnWidth;
    /**
     * @type {?}
     * @protected
     */
    IgxGridBaseComponent.prototype._defaultTargetRecordNumber;
    /**
     * @type {?}
     * @protected
     */
    IgxGridBaseComponent.prototype._onFocusChange;
    /**
     * @type {?}
     * @private
     */
    IgxGridBaseComponent.prototype._summaryPosition;
    /**
     * @type {?}
     * @private
     */
    IgxGridBaseComponent.prototype._summaryCalculationMode;
    /**
     * @type {?}
     * @private
     */
    IgxGridBaseComponent.prototype.rowEditPositioningStrategy;
    /**
     * @type {?}
     * @private
     */
    IgxGridBaseComponent.prototype.rowEditSettings;
    /** @type {?} */
    IgxGridBaseComponent.prototype.selectionService;
    /** @type {?} */
    IgxGridBaseComponent.prototype.crudService;
    /**
     * @type {?}
     * @private
     */
    IgxGridBaseComponent.prototype.gridAPI;
    /** @type {?} */
    IgxGridBaseComponent.prototype.selection;
    /**
     * @type {?}
     * @protected
     */
    IgxGridBaseComponent.prototype._transactions;
    /**
     * @type {?}
     * @private
     */
    IgxGridBaseComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    IgxGridBaseComponent.prototype.zone;
    /** @type {?} */
    IgxGridBaseComponent.prototype.document;
    /** @type {?} */
    IgxGridBaseComponent.prototype.cdr;
    /**
     * @type {?}
     * @protected
     */
    IgxGridBaseComponent.prototype.resolver;
    /**
     * @type {?}
     * @protected
     */
    IgxGridBaseComponent.prototype.differs;
    /**
     * @type {?}
     * @protected
     */
    IgxGridBaseComponent.prototype.viewRef;
    /** @type {?} */
    IgxGridBaseComponent.prototype.navigation;
    /** @type {?} */
    IgxGridBaseComponent.prototype.filteringService;
    /**
     * @type {?}
     * @protected
     */
    IgxGridBaseComponent.prototype.overlayService;
    /** @type {?} */
    IgxGridBaseComponent.prototype.summaryService;
    /**
     * @type {?}
     * @protected
     */
    IgxGridBaseComponent.prototype._displayDensityOptions;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC1iYXNlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lnbml0ZXVpLWFuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvZ3JpZHMvZ3JpZC1iYXNlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBR0gsaUJBQWlCLEVBQ2pCLHdCQUF3QixFQUN4QixlQUFlLEVBQ2YsWUFBWSxFQUNaLFVBQVUsRUFDVixZQUFZLEVBQ1osV0FBVyxFQUNYLE1BQU0sRUFDTixLQUFLLEVBRUwsZUFBZSxFQUNmLE1BQU0sRUFHTixNQUFNLEVBQ04sU0FBUyxFQUNULFdBQVcsRUFDWCxTQUFTLEVBQ1QsWUFBWSxFQUNaLGdCQUFnQixFQUNoQixjQUFjLEVBQ2QsUUFBUSxFQUdYLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDMUQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDM0QsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsZUFBZSxFQUF1QixPQUFPLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN0SCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGNBQWMsRUFBd0IsTUFBTSxtREFBbUQsQ0FBQztBQUd6RyxPQUFPLEVBQWUscUJBQXFCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUMzRixPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSx1REFBdUQsQ0FBQztBQUNsRyxPQUFPLEVBR0gsc0JBQXNCLEVBQ3RCLG1CQUFtQixFQUNuQixpQkFBaUIsRUFD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Q0FNRTs7SUF1RUUsZ0RBQWdEOztJQUNoRCwyQ0FBc0M7Ozs7O0lBQ3RDLHVDQUE2RTs7SUFDN0UseUNBQXdDOzs7OztJQUN4Qyw2Q0FBMkY7Ozs7O0lBQzNGLDBDQUE4Qjs7Ozs7SUFDOUIsb0NBQW9COztJQUNwQix3Q0FBaUM7O0lBQ2pDLG1DQUE2Qjs7Ozs7SUFDN0Isd0NBQTRDOzs7OztJQUM1Qyx1Q0FBa0M7Ozs7O0lBQ2xDLHVDQUFtQzs7SUFDbkMsMENBQTJDOztJQUMzQyxnREFBNEM7Ozs7O0lBQzVDLDhDQUFzRTs7SUFDdEUsOENBQTRDOzs7OztJQUM1QyxzREFBaUciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge1xuICAgIEFmdGVyQ29udGVudEluaXQsXG4gICAgQWZ0ZXJWaWV3SW5pdCxcbiAgICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gICAgQ29udGVudENoaWxkcmVuLFxuICAgIENvbnRlbnRDaGlsZCxcbiAgICBFbGVtZW50UmVmLFxuICAgIEV2ZW50RW1pdHRlcixcbiAgICBIb3N0QmluZGluZyxcbiAgICBJbmplY3QsXG4gICAgSW5wdXQsXG4gICAgSXRlcmFibGVDaGFuZ2VSZWNvcmQsXG4gICAgSXRlcmFibGVEaWZmZXJzLFxuICAgIE5nWm9uZSxcbiAgICBPbkRlc3Ryb3ksXG4gICAgT25Jbml0LFxuICAgIE91dHB1dCxcbiAgICBRdWVyeUxpc3QsXG4gICAgVGVtcGxhdGVSZWYsXG4gICAgVmlld0NoaWxkLFxuICAgIFZpZXdDaGlsZHJlbixcbiAgICBWaWV3Q29udGFpbmVyUmVmLFxuICAgIEluamVjdGlvblRva2VuLFxuICAgIE9wdGlvbmFsLFxuICAgIE9uQ2hhbmdlcyxcbiAgICBTaW1wbGVDaGFuZ2VzXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZVVudGlsLCBmaXJzdCwgZmlsdGVyIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgSWd4U2VsZWN0aW9uQVBJU2VydmljZSB9IGZyb20gJy4uL2NvcmUvc2VsZWN0aW9uJztcbmltcG9ydCB7IGNsb25lQXJyYXksIGlzRWRnZSwgaXNOYXZpZ2F0aW9uS2V5LCBDYW5jZWxhYmxlRXZlbnRBcmdzLCBmbGF0dGVuLCBtZXJnZU9iamVjdHMsIGlzSUUgfSBmcm9tICcuLi9jb3JlL3V0aWxzJztcbmltcG9ydCB7IERhdGFUeXBlIH0gZnJvbSAnLi4vZGF0YS1vcGVyYXRpb25zL2RhdGEtdXRpbCc7XG5pbXBvcnQgeyBGaWx0ZXJpbmdMb2dpYywgSUZpbHRlcmluZ0V4cHJlc3Npb24gfSBmcm9tICcuLi9kYXRhLW9wZXJhdGlvbnMvZmlsdGVyaW5nLWV4cHJlc3Npb24uaW50ZXJmYWNlJztcbmltcG9ydCB7IElHcm91cEJ5UmVjb3JkIH0gZnJvbSAnLi4vZGF0YS1vcGVyYXRpb25zL2dyb3VwYnktcmVjb3JkLmludGVyZmFjZSc7XG5pbXBvcnQgeyBJU29ydGluZ0V4cHJlc3Npb24gfSBmcm9tICcuLi9kYXRhLW9wZXJhdGlvbnMvc29ydGluZy1leHByZXNzaW9uLmludGVyZmFjZSc7XG5pbXBvcnQgeyBJRm9yT2ZTdGF0ZSwgSWd4R3JpZEZvck9mRGlyZWN0aXZlIH0gZnJvbSAnLi4vZGlyZWN0aXZlcy9mb3Itb2YvZm9yX29mLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBJZ3hUZXh0SGlnaGxpZ2h0RGlyZWN0aXZlIH0gZnJvbSAnLi4vZGlyZWN0aXZlcy90ZXh0LWhpZ2hsaWdodC90ZXh0LWhpZ2hsaWdodC5kaXJlY3RpdmUnO1xuaW1wb3J0IHtcbiAgICBJZ3hCYXNlRXhwb3J0ZXIsXG4gICAgSWd4RXhwb3J0ZXJPcHRpb25zQmFzZSxcbiAgICBBYnNvbHV0ZVNjcm9sbFN0cmF0ZWd5LFxuICAgIEhvcml6b250YWxBbGlnbm1lbnQsXG4gICAgVmVydGljYWxBbGlnbm1lbnQsXG4gICAgSWd4T3ZlcmxheVNlcnZpY2Vcbn0gZnJvbSAnLi4vc2VydmljZXMvaW5kZXgnO1xuaW1wb3J0IHsgSWd4Q2hlY2tib3hDb21wb25lbnQgfSBmcm9tICcuLy4uL2NoZWNrYm94L2NoZWNrYm94LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBHcmlkQmFzZUFQSVNlcnZpY2UgfSBmcm9tICcuL2FwaS5zZXJ2aWNlJztcbmltcG9ydCB7IElneEdyaWRDZWxsQ29tcG9uZW50IH0gZnJvbSAnLi9jZWxsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJQ29sdW1uVmlzaWJpbGl0eUNoYW5nZWRFdmVudEFyZ3MgfSBmcm9tICcuL2NvbHVtbi1oaWRpbmctaXRlbS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgSWd4Q29sdW1uQ29tcG9uZW50IH0gZnJvbSAnLi9jb2x1bW4uY29tcG9uZW50JztcbmltcG9ydCB7IElTdW1tYXJ5RXhwcmVzc2lvbiB9IGZyb20gJy4vc3VtbWFyaWVzL2dyaWQtc3VtbWFyeSc7XG5pbXBvcnQgeyBEcm9wUG9zaXRpb24sIENvbnRhaW5lclBvc2l0aW9uaW5nU3RyYXRlZ3ksIElneERlY2ltYWxQaXBlQ29tcG9uZW50LCBJZ3hEYXRlUGlwZUNvbXBvbmVudCB9IGZyb20gJy4vZ3JpZC5jb21tb24nO1xuaW1wb3J0IHsgSWd4R3JpZFRvb2xiYXJDb21wb25lbnQgfSBmcm9tICcuL2dyaWQtdG9vbGJhci5jb21wb25lbnQnO1xuaW1wb3J0IHsgSWd4Um93Q29tcG9uZW50IH0gZnJvbSAnLi9yb3cuY29tcG9uZW50JztcbmltcG9ydCB7IElneEdyaWRIZWFkZXJDb21wb25lbnQgfSBmcm9tICcuL2dyaWQtaGVhZGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJZ3hPdmVybGF5T3V0bGV0RGlyZWN0aXZlLCBJZ3hUb2dnbGVEaXJlY3RpdmUgfSBmcm9tICcuLi9kaXJlY3RpdmVzL3RvZ2dsZS90b2dnbGUuZGlyZWN0aXZlJztcbmltcG9ydCB7IEZpbHRlcmluZ0V4cHJlc3Npb25zVHJlZSwgSUZpbHRlcmluZ0V4cHJlc3Npb25zVHJlZSB9IGZyb20gJy4uL2RhdGEtb3BlcmF0aW9ucy9maWx0ZXJpbmctZXhwcmVzc2lvbnMtdHJlZSc7XG5pbXBvcnQgeyBJRmlsdGVyaW5nT3BlcmF0aW9uIH0gZnJvbSAnLi4vZGF0YS1vcGVyYXRpb25zL2ZpbHRlcmluZy1jb25kaXRpb24nO1xuaW1wb3J0IHsgVHJhbnNhY3Rpb24sIFRyYW5zYWN0aW9uVHlwZSwgVHJhbnNhY3Rpb25TZXJ2aWNlLCBTdGF0ZSB9IGZyb20gJy4uL3NlcnZpY2VzL2luZGV4JztcbmltcG9ydCB7XG4gICAgSWd4Um93RWRpdFRlbXBsYXRlRGlyZWN0aXZlLFxuICAgIElneFJvd0VkaXRUYWJTdG9wRGlyZWN0aXZlLFxuICAgIElneFJvd0VkaXRUZXh0RGlyZWN0aXZlLFxuICAgIElneFJvd0VkaXRBY3Rpb25zRGlyZWN0aXZlXG59IGZyb20gJy4vZ3JpZC5yb3dFZGl0LmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBJZ3hHcmlkTmF2aWdhdGlvblNlcnZpY2UgfSBmcm9tICcuL2dyaWQtbmF2aWdhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IElEaXNwbGF5RGVuc2l0eU9wdGlvbnMsIERpc3BsYXlEZW5zaXR5VG9rZW4sIERpc3BsYXlEZW5zaXR5QmFzZSwgRGlzcGxheURlbnNpdHkgfSBmcm9tICcuLi9jb3JlL2Rpc3BsYXlEZW5zaXR5JztcbmltcG9ydCB7IElneEdyaWRSb3dDb21wb25lbnQgfSBmcm9tICcuL2dyaWQnO1xuaW1wb3J0IHsgSWd4RmlsdGVyaW5nU2VydmljZSB9IGZyb20gJy4vZmlsdGVyaW5nL2dyaWQtZmlsdGVyaW5nLnNlcnZpY2UnO1xuaW1wb3J0IHsgSWd4R3JpZEZpbHRlcmluZ0NlbGxDb21wb25lbnQgfSBmcm9tICcuL2ZpbHRlcmluZy9ncmlkLWZpbHRlcmluZy1jZWxsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBXYXRjaENoYW5nZXMgfSBmcm9tICcuL3dhdGNoLWNoYW5nZXMnO1xuaW1wb3J0IHsgSWd4R3JpZEhlYWRlckdyb3VwQ29tcG9uZW50IH0gZnJvbSAnLi9ncmlkLWhlYWRlci1ncm91cC5jb21wb25lbnQnO1xuaW1wb3J0IHsgSWd4R3JpZFRvb2xiYXJDdXN0b21Db250ZW50RGlyZWN0aXZlIH0gZnJvbSAnLi9ncmlkLXRvb2xiYXIuY29tcG9uZW50JztcbmltcG9ydCB7IElHcmlkUmVzb3VyY2VTdHJpbmdzIH0gZnJvbSAnLi4vY29yZS9pMThuL2dyaWQtcmVzb3VyY2VzJztcbmltcG9ydCB7IEN1cnJlbnRSZXNvdXJjZVN0cmluZ3MgfSBmcm9tICcuLi9jb3JlL2kxOG4vcmVzb3VyY2VzJztcbmltcG9ydCB7IElneEdyaWRTdW1tYXJ5U2VydmljZSB9IGZyb20gJy4vc3VtbWFyaWVzL2dyaWQtc3VtbWFyeS5zZXJ2aWNlJztcbmltcG9ydCB7IElneFN1bW1hcnlSb3dDb21wb25lbnQgfSBmcm9tICcuL3N1bW1hcmllcy9zdW1tYXJ5LXJvdy5jb21wb25lbnQnO1xuaW1wb3J0IHsgSWd4R3JpZFNlbGVjdGlvblNlcnZpY2UsIEdyaWRTZWxlY3Rpb25SYW5nZSwgSWd4R3JpZENSVURTZXJ2aWNlLCBJZ3hSb3csIElneENlbGwgfSBmcm9tICcuLi9jb3JlL2dyaWQtc2VsZWN0aW9uJztcbmltcG9ydCB7IERyYWdTY3JvbGxEaXJlY3Rpb24gfSBmcm9tICcuL2RyYWctc2VsZWN0LmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBJQ2FjaGVkVmlld0xvYWRlZEV2ZW50QXJncywgSWd4VGVtcGxhdGVPdXRsZXREaXJlY3RpdmUgfSBmcm9tICcuLi9kaXJlY3RpdmVzL3RlbXBsYXRlLW91dGxldC90ZW1wbGF0ZV9vdXRsZXQuZGlyZWN0aXZlJztcbmltcG9ydCB7XG4gICAgSWd4RXhjZWxTdHlsZVNvcnRpbmdUZW1wbGF0ZURpcmVjdGl2ZSxcbiAgICBJZ3hFeGNlbFN0eWxlUGlubmluZ1RlbXBsYXRlRGlyZWN0aXZlLFxuICAgIElneEV4Y2VsU3R5bGVIaWRpbmdUZW1wbGF0ZURpcmVjdGl2ZSxcbiAgICBJZ3hFeGNlbFN0eWxlTW92aW5nVGVtcGxhdGVEaXJlY3RpdmVcbn0gZnJvbSAnLi9maWx0ZXJpbmcvZXhjZWwtc3R5bGUvZ3JpZC5leGNlbC1zdHlsZS1maWx0ZXJpbmcuY29tcG9uZW50JztcbmltcG9ydCB7IElneEdyaWRDb2x1bW5SZXNpemVyQ29tcG9uZW50IH0gZnJvbSAnLi9ncmlkLWNvbHVtbi1yZXNpemVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJZ3hHcmlkRmlsdGVyaW5nUm93Q29tcG9uZW50IH0gZnJvbSAnLi9maWx0ZXJpbmcvZ3JpZC1maWx0ZXJpbmctcm93LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJZ3hEcmFnSW5kaWNhdG9ySWNvbkRpcmVjdGl2ZSB9IGZyb20gJy4vcm93LWRyYWcuZGlyZWN0aXZlJztcbmltcG9ydCB7IElneERyYWdEaXJlY3RpdmUgfSBmcm9tICcuLi9kaXJlY3RpdmVzL2RyYWdkcm9wL2RyYWdkcm9wLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBEZXByZWNhdGVQcm9wZXJ0eSB9IGZyb20gJy4uL2NvcmUvZGVwcmVjYXRlRGVjb3JhdG9ycyc7XG5pbXBvcnQgeyBDaGFyU2VwYXJhdGVkVmFsdWVEYXRhIH0gZnJvbSAnLi4vc2VydmljZXMvY3N2L2NoYXItc2VwYXJhdGVkLXZhbHVlLWRhdGEnO1xuXG5jb25zdCBNSU5JTVVNX0NPTFVNTl9XSURUSCA9IDEzNjtcbmNvbnN0IEZJTFRFUl9ST1dfSEVJR0hUID0gNTA7XG5cbi8vIEJ5IGRlZmF1bHQgcm93IGVkaXRpbmcgb3ZlcmxheSBvdXRsZXQgaXMgaW5zaWRlIGdyaWQgYm9keSBzbyB0aGF0IG92ZXJsYXkgaXMgaGlkZGVuIGJlbG93IGdyaWQgaGVhZGVyIHdoZW4gc2Nyb2xsaW5nLlxuLy8gSW4gY2FzZXMgd2hlbiBncmlkIGhhcyAxLTIgcm93cyB0aGVyZSBpc24ndCBlbm91Z2ggc3BhY2UgaW4gZ3JpZCBib2R5IGFuZCByb3cgZWRpdGluZyBvdmVybGF5IHNob3VsZCBiZSBzaG93biBhYm92ZSBoZWFkZXIuXG4vLyBEZWZhdWx0IHJvdyBlZGl0aW5nIG92ZXJsYXkgaGVpZ2h0IGlzIGhpZ2hlciB0aGVuIHJvdyBoZWlnaHQgdGhhdCBpcyB3aHkgdGhlIGNhc2UgaXMgdmFsaWQgYWxzbyBmb3Igcm93IHdpdGggMiByb3dzLlxuLy8gTW9yZSBhY2N1cmF0ZSBjYWxjdWxhdGlvbiBpcyBub3QgcG9zc2libGUsIGNhdXNlIHJvdyBlZGl0aW5nIG92ZXJsYXkgaXMgc3RpbGwgbm90IHNob3duIGFuZCB3ZSBkb24ndCBrbm93IGl0cyBoZWlnaHQsXG4vLyBidXQgaW4gdGhlIHNhbWUgdGltZSB3ZSBuZWVkIHRvIHNldCByb3cgZWRpdGluZyBvdmVybGF5IG91dGxldCBiZWZvcmUgb3BlbmluZyB0aGUgb3ZlcmxheSBpdHNlbGYuXG5jb25zdCBNSU5fUk9XX0VESVRJTkdfQ09VTlRfVEhSRVNIT0xEID0gMjtcblxuZXhwb3J0IGNvbnN0IElneEdyaWRUcmFuc2FjdGlvbiA9IG5ldyBJbmplY3Rpb25Ub2tlbjxzdHJpbmc+KCdJZ3hHcmlkVHJhbnNhY3Rpb24nKTtcblxuZXhwb3J0IGludGVyZmFjZSBJR3JpZENsaXBib2FyZEV2ZW50IHtcbiAgICBkYXRhOiBhbnlbXTtcbiAgICBjYW5jZWw6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUdyaWRDZWxsRXZlbnRBcmdzIHtcbiAgICBjZWxsOiBJZ3hHcmlkQ2VsbENvbXBvbmVudDtcbiAgICBldmVudDogRXZlbnQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUdyaWRFZGl0RXZlbnRBcmdzIGV4dGVuZHMgQ2FuY2VsYWJsZUV2ZW50QXJncyB7XG4gICAgcm93SUQ6IGFueTtcbiAgICBjZWxsSUQ/OiB7XG4gICAgICAgIHJvd0lEOiBhbnksXG4gICAgICAgIGNvbHVtbklEOiBhbnksXG4gICAgICAgIHJvd0luZGV4OiBudW1iZXJcbiAgICB9O1xuICAgIG9sZFZhbHVlOiBhbnk7XG4gICAgbmV3VmFsdWU/OiBhbnk7XG4gICAgZXZlbnQ/OiBFdmVudDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJUGluQ29sdW1uRXZlbnRBcmdzIHtcbiAgICBjb2x1bW46IElneENvbHVtbkNvbXBvbmVudDtcbiAgICBpbnNlcnRBdEluZGV4OiBudW1iZXI7XG4gICAgaXNQaW5uZWQ6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVBhZ2VFdmVudEFyZ3Mge1xuICAgIHByZXZpb3VzOiBudW1iZXI7XG4gICAgY3VycmVudDogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElSb3dEYXRhRXZlbnRBcmdzIHtcbiAgICBkYXRhOiBhbnk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUNvbHVtblJlc2l6ZUV2ZW50QXJncyB7XG4gICAgY29sdW1uOiBJZ3hDb2x1bW5Db21wb25lbnQ7XG4gICAgcHJldldpZHRoOiBzdHJpbmc7XG4gICAgbmV3V2lkdGg6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJUm93U2VsZWN0aW9uRXZlbnRBcmdzIHtcbiAgICBvbGRTZWxlY3Rpb246IGFueVtdO1xuICAgIG5ld1NlbGVjdGlvbjogYW55W107XG4gICAgcm93PzogSWd4Um93Q29tcG9uZW50PElneEdyaWRCYXNlQ29tcG9uZW50ICYgSUdyaWREYXRhQmluZGFibGU+O1xuICAgIGV2ZW50PzogRXZlbnQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVNlYXJjaEluZm8ge1xuICAgIHNlYXJjaFRleHQ6IHN0cmluZztcbiAgICBjYXNlU2Vuc2l0aXZlOiBib29sZWFuO1xuICAgIGV4YWN0TWF0Y2g6IGJvb2xlYW47XG4gICAgYWN0aXZlTWF0Y2hJbmRleDogbnVtYmVyO1xuICAgIG1hdGNoSW5mb0NhY2hlOiBhbnlbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJR3JpZFRvb2xiYXJFeHBvcnRFdmVudEFyZ3Mge1xuICAgIGdyaWQ6IElneEdyaWRCYXNlQ29tcG9uZW50O1xuICAgIGV4cG9ydGVyOiBJZ3hCYXNlRXhwb3J0ZXI7XG4gICAgb3B0aW9uczogSWd4RXhwb3J0ZXJPcHRpb25zQmFzZTtcbiAgICBjYW5jZWw6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUNvbHVtbk1vdmluZ1N0YXJ0RXZlbnRBcmdzIHtcbiAgICBzb3VyY2U6IElneENvbHVtbkNvbXBvbmVudDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJQ29sdW1uTW92aW5nRXZlbnRBcmdzIHtcbiAgICBzb3VyY2U6IElneENvbHVtbkNvbXBvbmVudDtcbiAgICBjYW5jZWw6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUNvbHVtbk1vdmluZ0VuZEV2ZW50QXJncyB7XG4gICAgc291cmNlOiBJZ3hDb2x1bW5Db21wb25lbnQ7XG4gICAgdGFyZ2V0OiBJZ3hDb2x1bW5Db21wb25lbnQ7XG59XG5cbi8vIFRPRE86IHRvIGJlIGRlbGV0ZWQgd2hlbiBvbkZvY3VzQ2hhbmdlIGV2ZW50IGlzIHJlbW92ZWQgIzQwNTRcbmV4cG9ydCBpbnRlcmZhY2UgSUZvY3VzQ2hhbmdlRXZlbnRBcmdzIHtcbiAgICBjZWxsOiBJZ3hHcmlkQ2VsbENvbXBvbmVudDtcbiAgICBldmVudDogRXZlbnQ7XG4gICAgY2FuY2VsOiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElHcmlkS2V5ZG93bkV2ZW50QXJncyB7XG4gICAgdGFyZ2V0VHlwZTogR3JpZEtleWRvd25UYXJnZXRUeXBlO1xuICAgIHRhcmdldDogT2JqZWN0O1xuICAgIGV2ZW50OiBFdmVudDtcbiAgICBjYW5jZWw6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUNlbGxQb3NpdGlvbiB7XG4gICAgcm93SW5kZXg6IG51bWJlcjtcbiAgICB2aXNpYmxlQ29sdW1uSW5kZXg6IG51bWJlcjtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgSUdyaWREYXRhQmluZGFibGUge1xuICAgIGRhdGE6IGFueVtdO1xuICAgIGZpbHRlcmVkRGF0YTogYW55W107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVJvd0RyYWdFbmRFdmVudEFyZ3Mge1xuICAgIG93bmVyOiBJZ3hEcmFnRGlyZWN0aXZlO1xuICAgIGRyYWdEYXRhOiBJZ3hSb3dDb21wb25lbnQ8SWd4R3JpZEJhc2VDb21wb25lbnQgJiBJR3JpZERhdGFCaW5kYWJsZT47XG4gICAgYW5pbWF0aW9uOiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElSb3dEcmFnU3RhcnRFdmVudEFyZ3MgZXh0ZW5kcyBDYW5jZWxhYmxlRXZlbnRBcmdzIHtcbiAgICBvd25lcjogSWd4RHJhZ0RpcmVjdGl2ZTtcbiAgICBkcmFnRGF0YTogSWd4Um93Q29tcG9uZW50PElneEdyaWRCYXNlQ29tcG9uZW50ICYgSUdyaWREYXRhQmluZGFibGU+O1xufVxuXG5leHBvcnQgZW51bSBHcmlkU3VtbWFyeVBvc2l0aW9uIHtcbiAgICB0b3AgPSAndG9wJyxcbiAgICBib3R0b20gPSAnYm90dG9tJ1xufVxuXG5leHBvcnQgZW51bSBHcmlkU3VtbWFyeUNhbGN1bGF0aW9uTW9kZSB7XG4gICAgcm9vdExldmVsT25seSA9ICdyb290TGV2ZWxPbmx5JyxcbiAgICBjaGlsZExldmVsc09ubHkgPSAnY2hpbGRMZXZlbHNPbmx5JyxcbiAgICByb290QW5kQ2hpbGRMZXZlbHMgPSAncm9vdEFuZENoaWxkTGV2ZWxzJ1xufVxuXG5leHBvcnQgZW51bSBGaWx0ZXJNb2RlIHtcbiAgICBxdWlja0ZpbHRlciA9ICdxdWlja0ZpbHRlcicsXG4gICAgZXhjZWxTdHlsZUZpbHRlciA9ICdleGNlbFN0eWxlRmlsdGVyJ1xufVxuXG5leHBvcnQgZW51bSBHcmlkS2V5ZG93blRhcmdldFR5cGUge1xuICAgIGRhdGFDZWxsID0gJ2RhdGFDZWxsJyxcbiAgICBzdW1tYXJ5Q2VsbCA9ICdzdW1tYXJ5Q2VsbCcsXG4gICAgZ3JvdXBSb3cgPSAnZ3JvdXBSb3cnLFxuICAgIGhpZXJhcmNoaWNhbFJvdyA9ICdoaWVyYXJjaGljYWxSb3cnXG59XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBJZ3hHcmlkQmFzZUNvbXBvbmVudCBleHRlbmRzIERpc3BsYXlEZW5zaXR5QmFzZSBpbXBsZW1lbnRzXG4gICAgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSwgQWZ0ZXJDb250ZW50SW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XG4gICAgcHJpdmF0ZSBfc2Nyb2xsV2lkdGg6IG51bWJlcjtcbiAgICBwcm90ZWN0ZWQgX2luaXQgPSB0cnVlO1xuXG4gICAgcHVibGljIGdldCBzY3JvbGxXaWR0aCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Njcm9sbFdpZHRoO1xuICAgIH1cblxuICAgIHByaXZhdGUgX3Jlc291cmNlU3RyaW5ncyA9IEN1cnJlbnRSZXNvdXJjZVN0cmluZ3MuR3JpZFJlc1N0cmluZ3M7XG4gICAgcHJpdmF0ZSBfZW1wdHlHcmlkTWVzc2FnZSA9IG51bGw7XG4gICAgcHJpdmF0ZSBfZW1wdHlGaWx0ZXJlZEdyaWRNZXNzYWdlID0gbnVsbDtcbiAgICBwcml2YXRlIF9pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICBwcml2YXRlIF9sb2NhbGUgPSBudWxsO1xuICAgIHByaXZhdGUgX29ic2VydmVyOiBNdXRhdGlvbk9ic2VydmVyO1xuICAgIHByb3RlY3RlZCBfZGVzdHJveWVkID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBvdmVybGF5SURzID0gW107XG4gICAgLyoqXG4gICAgICogQW4gYWNjZXNzb3IgdGhhdCBzZXRzIHRoZSByZXNvdXJjZSBzdHJpbmdzLlxuICAgICAqIEJ5IGRlZmF1bHQgaXQgdXNlcyBFTiByZXNvdXJjZXMuXG4gICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHNldCByZXNvdXJjZVN0cmluZ3ModmFsdWU6IElHcmlkUmVzb3VyY2VTdHJpbmdzKSB7XG4gICAgICAgIHRoaXMuX3Jlc291cmNlU3RyaW5ncyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuX3Jlc291cmNlU3RyaW5ncywgdmFsdWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFuIGFjY2Vzc29yIHRoYXQgcmV0dXJucyB0aGUgcmVzb3VyY2Ugc3RyaW5ncy5cbiAgICAqL1xuICAgIGdldCByZXNvdXJjZVN0cmluZ3MoKTogSUdyaWRSZXNvdXJjZVN0cmluZ3Mge1xuICAgICAgICByZXR1cm4gdGhpcy5fcmVzb3VyY2VTdHJpbmdzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFuIEBJbnB1dCBwcm9wZXJ0eSB0aGF0IGF1dG9nZW5lcmF0ZXMgdGhlIGBJZ3hHcmlkQ29tcG9uZW50YCBjb2x1bW5zLlxuICAgICAqIFRoZSBkZWZhdWx0IHZhbHVlIGlzIGZhbHNlLlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8aWd4LWdyaWQgW2RhdGFdPVwiRGF0YVwiIFthdXRvR2VuZXJhdGVdPVwidHJ1ZVwiPjwvaWd4LWdyaWQ+XG4gICAgICogYGBgXG5cdCAqIEBtZW1iZXJvZiBJZ3hHcmlkQmFzZUNvbXBvbmVudFxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGF1dG9HZW5lcmF0ZSA9IGZhbHNlO1xuXG4gICAgcHVibGljIGFic3RyYWN0IGlkOiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBBbiBASW5wdXQgcHJvcGVydHkgdGhhdCBzZXRzIGEgY3VzdG9tIHRlbXBsYXRlIHdoZW4gdGhlIGBJZ3hHcmlkQ29tcG9uZW50YCBpcyBlbXB0eS5cbiAgICAgKiBgYGBodG1sXG4gICAgICogPGlneC1ncmlkIFtpZF09XCInaWd4LWdyaWQtMSdcIiBbZGF0YV09XCJEYXRhXCIgW2VtcHR5R3JpZFRlbXBsYXRlXT1cIm15VGVtcGxhdGVcIiBbYXV0b0dlbmVyYXRlXT1cInRydWVcIj48L2lneC1ncmlkPlxuICAgICAqIGBgYFxuXHQgKiBAbWVtYmVyb2YgSWd4R3JpZEJhc2VDb21wb25lbnRcbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBlbXB0eUdyaWRUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICAgIC8qKlxuICAgICAqIEFuIEBJbnB1dCBwcm9wZXJ0eSB0aGF0IHNldHMgYSBjdXN0b20gdGVtcGxhdGUgd2hlbiB0aGUgYElneEdyaWRDb21wb25lbnRgIGlzIGxvYWRpbmcuXG4gICAgICogYGBgaHRtbFxuICAgICAqIDxpZ3gtZ3JpZCBbaWRdPVwiJ2lneC1ncmlkLTEnXCIgW2RhdGFdPVwiRGF0YVwiIFtsb2FkaW5nR3JpZFRlbXBsYXRlXT1cIm15VGVtcGxhdGVcIiBbYXV0b0dlbmVyYXRlXT1cInRydWVcIj48L2lneC1ncmlkPlxuICAgICAqIGBgYFxuXHQgKiBAbWVtYmVyb2YgSWd4R3JpZEJhc2VDb21wb25lbnRcbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBsb2FkaW5nR3JpZFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gICAgQFdhdGNoQ2hhbmdlcygpXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZ2V0IGZpbHRlcmluZ0xvZ2ljKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZmlsdGVyaW5nRXhwcmVzc2lvbnNUcmVlLm9wZXJhdG9yO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIGZpbHRlcmluZyBsb2dpYyBvZiB0aGUgYElneEdyaWRDb21wb25lbnRgLlxuICAgICAqIFRoZSBkZWZhdWx0IGlzIEFORC5cbiAgICAgKiBgYGBodG1sXG4gICAgICogPGlneC1ncmlkIFtkYXRhXT1cIkRhdGFcIiBbYXV0b0dlbmVyYXRlXT1cInRydWVcIiBbZmlsdGVyaW5nTG9naWNdPVwiZmlsdGVyaW5nXCI+PC9pZ3gtZ3JpZD5cbiAgICAgKiBgYGBcblx0ICogQG1lbWJlcm9mIElneEdyaWRCYXNlQ29tcG9uZW50XG4gICAgICovXG4gICAgcHVibGljIHNldCBmaWx0ZXJpbmdMb2dpYyh2YWx1ZTogRmlsdGVyaW5nTG9naWMpIHtcbiAgICAgICAgdGhpcy5fZmlsdGVyaW5nRXhwcmVzc2lvbnNUcmVlLm9wZXJhdG9yID0gdmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgZmlsdGVyaW5nIHN0YXRlIG9mIGBJZ3hHcmlkQ29tcG9uZW50YC5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogbGV0IGZpbHRlcmluZ0V4cHJlc3Npb25zVHJlZSA9IHRoaXMuZ3JpZC5maWx0ZXJpbmdFeHByZXNzaW9uc1RyZWU7XG4gICAgICogYGBgXG5cdCAqIEBtZW1iZXJvZiBJZ3hHcmlkQmFzZUNvbXBvbmVudFxuICAgICAqL1xuICAgIEBXYXRjaENoYW5nZXMoKVxuICAgIEBJbnB1dCgpXG4gICAgZ2V0IGZpbHRlcmluZ0V4cHJlc3Npb25zVHJlZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ZpbHRlcmluZ0V4cHJlc3Npb25zVHJlZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBmaWx0ZXJpbmcgc3RhdGUgb2YgdGhlIGBJZ3hHcmlkQ29tcG9uZW50YC5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogY29uc3QgbG9naWMgPSBuZXcgRmlsdGVyaW5nRXhwcmVzc2lvbnNUcmVlKEZpbHRlcmluZ0xvZ2ljLkFuZCwgXCJJRFwiKTtcbiAgICAgKiBsb2dpYy5maWx0ZXJpbmdPcGVyYW5kcyA9IFtcbiAgICAgKiAgICAge1xuICAgICAqICAgICAgICAgIGNvbmRpdGlvbjogSWd4TnVtYmVyRmlsdGVyaW5nT3BlcmFuZC5pbnN0YW5jZSgpLmNvbmRpdGlvbignZ3JlYXRlclRoYW4nKSxcbiAgICAgKiAgICAgICAgICBmaWVsZE5hbWU6ICdJRCcsXG4gICAgICogICAgICAgICAgc2VhcmNoVmFsOiAxXG4gICAgICogICAgIH1cbiAgICAgKiBdO1xuICAgICAqIHRoaXMuZ3JpZC5maWx0ZXJpbmdFeHByZXNzaW9uc1RyZWUgPSAobG9naWMpO1xuICAgICAqIGBgYFxuXHQgKiBAbWVtYmVyb2YgSWd4R3JpZEJhc2VDb21wb25lbnRcbiAgICAgKi9cbiAgICBzZXQgZmlsdGVyaW5nRXhwcmVzc2lvbnNUcmVlKHZhbHVlKSB7XG4gICAgICAgIGlmICh2YWx1ZSAmJiB2YWx1ZSBpbnN0YW5jZW9mIEZpbHRlcmluZ0V4cHJlc3Npb25zVHJlZSkge1xuICAgICAgICAgICAgY29uc3QgdmFsID0gKHZhbHVlIGFzIEZpbHRlcmluZ0V4cHJlc3Npb25zVHJlZSk7XG4gICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdmFsLmZpbHRlcmluZ09wZXJhbmRzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgICAgIGlmICghKHZhbC5maWx0ZXJpbmdPcGVyYW5kc1tpbmRleF0gaW5zdGFuY2VvZiBGaWx0ZXJpbmdFeHByZXNzaW9uc1RyZWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld0V4cHJlc3Npb25zVHJlZSA9IG5ldyBGaWx0ZXJpbmdFeHByZXNzaW9uc1RyZWUoRmlsdGVyaW5nTG9naWMuQW5kLCB2YWwuZmlsdGVyaW5nT3BlcmFuZHNbaW5kZXhdLmZpZWxkTmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIG5ld0V4cHJlc3Npb25zVHJlZS5maWx0ZXJpbmdPcGVyYW5kcy5wdXNoKHZhbC5maWx0ZXJpbmdPcGVyYW5kc1tpbmRleF0gYXMgSUZpbHRlcmluZ0V4cHJlc3Npb24pO1xuICAgICAgICAgICAgICAgICAgICB2YWwuZmlsdGVyaW5nT3BlcmFuZHNbaW5kZXhdID0gbmV3RXhwcmVzc2lvbnNUcmVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gY2xvbmUgdGhlIGZpbHRlcmluZyBleHByZXNzaW9uIHRyZWUgaW4gb3JkZXIgdG8gdHJpZ2dlciB0aGUgZmlsdGVyaW5nIHBpcGVcbiAgICAgICAgICAgIGNvbnN0IGZpbHRlcmluZ0V4cHJlc3Npb25UcmVlQ2xvbmUgPSBuZXcgRmlsdGVyaW5nRXhwcmVzc2lvbnNUcmVlKHZhbHVlLm9wZXJhdG9yLCB2YWx1ZS5maWVsZE5hbWUpO1xuICAgICAgICAgICAgZmlsdGVyaW5nRXhwcmVzc2lvblRyZWVDbG9uZS5maWx0ZXJpbmdPcGVyYW5kcyA9IHZhbHVlLmZpbHRlcmluZ09wZXJhbmRzO1xuICAgICAgICAgICAgdGhpcy5fZmlsdGVyaW5nRXhwcmVzc2lvbnNUcmVlID0gZmlsdGVyaW5nRXhwcmVzc2lvblRyZWVDbG9uZTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuZmlsdGVyaW5nU2VydmljZS5pc0ZpbHRlcmluZ0V4cHJlc3Npb25zVHJlZUVtcHR5KCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZpbHRlcmVkRGF0YSA9IG51bGw7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuZmlsdGVyaW5nU2VydmljZS5yZWZyZXNoRXhwcmVzc2lvbnMoKTtcbiAgICAgICAgICAgIHRoaXMuc3VtbWFyeVNlcnZpY2UuY2xlYXJTdW1tYXJ5Q2FjaGUoKTtcbiAgICAgICAgICAgIHRoaXMubWFya0ZvckNoZWNrKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBsb2NhbGUgb2YgdGhlIGdyaWQuXG4gICAgICogSWYgbm90IHNldCwgcmV0dXJucyBicm93c2VyJ3MgbGFuZ3VhZ2UuXG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBnZXQgbG9jYWxlKCk6IHN0cmluZyB7XG4gICAgICAgIGlmICh0aGlzLl9sb2NhbGUpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9sb2NhbGU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gJ2VuJztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIGxvY2FsZSBvZiB0aGUgZ3JpZC5cbiAgICAgKi9cbiAgICBzZXQgbG9jYWxlKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX2xvY2FsZSA9IHZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgd2hldGhlciB0aGUgcGFnaW5nIGZlYXR1cmUgaXMgZW5hYmxlZC9kaXNhYmxlZC5cbiAgICAgKiBUaGUgZGVmYXVsdCBzdGF0ZSBpcyBkaXNhYmxlZCAoZmFsc2UpLlxuICAgICAqIGBgYFxuICAgICAqIGNvbnN0IHBhZ2luZyA9IHRoaXMuZ3JpZC5wYWdpbmc7XG4gICAgICogYGBgXG5cdCAqIEBtZW1iZXJvZiBJZ3hHcmlkQmFzZUNvbXBvbmVudFxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgZ2V0IHBhZ2luZygpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BhZ2luZztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBFbmFibGVzL0Rpc2FibGVzIHRoZSBwYWdpbmcgZmVhdHVyZS5cbiAgICAgKiBgYGBodG1sXG4gICAgICogPGlneC1ncmlkICNncmlkIFtkYXRhXT1cIkRhdGFcIiBbYXV0b0dlbmVyYXRlXT1cInRydWVcIiBbcGFnaW5nXT1cInRydWVcIj48L2lneC1ncmlkPlxuICAgICAqIGBgYFxuXHQgKiBAbWVtYmVyb2YgSWd4R3JpZEJhc2VDb21wb25lbnRcbiAgICAgKi9cbiAgICBzZXQgcGFnaW5nKHZhbHVlOiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMuX3BhZ2luZyA9IHZhbHVlO1xuICAgICAgICB0aGlzLl9waXBlVHJpZ2dlcisrO1xuXG4gICAgICAgIGlmICh0aGlzLl9uZ0FmdGVyVmlld0luaXRQYXNzZWQpIHtcbiAgICAgICAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICAgICAgICAgIHRoaXMuY2FsY3VsYXRlR3JpZEhlaWdodCgpO1xuICAgICAgICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgY3VycmVudCBwYWdlIGluZGV4LlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiBsZXQgZ3JpZFBhZ2UgPSB0aGlzLmdyaWQucGFnZTtcbiAgICAgKiBgYGBcblx0ICogQG1lbWJlcm9mIElneEdyaWRCYXNlQ29tcG9uZW50XG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBnZXQgcGFnZSgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fcGFnZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBjdXJyZW50IHBhZ2UgaW5kZXguXG4gICAgICogPGlneC1ncmlkICNncmlkIFtkYXRhXT1cIkRhdGFcIiBbcGFnaW5nXT1cInRydWVcIiBbcGFnZV09XCI1XCIgW2F1dG9HZW5lcmF0ZV09XCJ0cnVlXCI+PC9pZ3gtZ3JpZD5cbiAgICAgKi9cbiAgICBzZXQgcGFnZSh2YWw6IG51bWJlcikge1xuICAgICAgICBpZiAodmFsID09PSB0aGlzLl9wYWdlIHx8IHZhbCA8IDAgfHwgdmFsID4gdGhpcy50b3RhbFBhZ2VzIC0gMSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5vblBhZ2luZ0RvbmUuZW1pdCh7IHByZXZpb3VzOiB0aGlzLl9wYWdlLCBjdXJyZW50OiB2YWwgfSk7XG4gICAgICAgIHRoaXMuX3BhZ2UgPSB2YWw7XG4gICAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIG51bWJlciBvZiB2aXNpYmxlIGl0ZW1zIHBlciBwYWdlIG9mIHRoZSBgSWd4R3JpZENvbXBvbmVudGAuXG4gICAgICogVGhlIGRlZmF1bHQgaXMgMTUuXG4gICAgICogYGBgaHRtbFxuICAgICAqIGxldCBpdGVtc1BlclBhZ2UgPSB0aGlzLmdyaWQucGVyUGFnZTtcbiAgICAgKiBgYGBcblx0ICogQG1lbWJlcm9mIElneEdyaWRCYXNlQ29tcG9uZW50XG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBnZXQgcGVyUGFnZSgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fcGVyUGFnZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBudW1iZXIgb2YgdmlzaWJsZSBpdGVtcyBwZXIgcGFnZSBvZiB0aGUgYElneEdyaWRDb21wb25lbnRgLlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8aWd4LWdyaWQgI2dyaWQgW2RhdGFdPVwiRGF0YVwiIFtwYWdpbmddPVwidHJ1ZVwiIFtwZXJQYWdlXT1cIjVcIiBbYXV0b0dlbmVyYXRlXT1cInRydWVcIj48L2lneC1ncmlkPlxuICAgICAqIGBgYFxuXHQgKiBAbWVtYmVyb2YgSWd4R3JpZEJhc2VDb21wb25lbnRcbiAgICAgKi9cbiAgICBzZXQgcGVyUGFnZSh2YWw6IG51bWJlcikge1xuICAgICAgICBpZiAodmFsIDwgMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zZWxlY3Rpb25TZXJ2aWNlLmNsZWFyKCk7XG4gICAgICAgIHRoaXMuX3BlclBhZ2UgPSB2YWw7XG4gICAgICAgIHRoaXMucGFnZSA9IDA7XG4gICAgICAgIHRoaXMuZW5kRWRpdCh0cnVlKTtcbiAgICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogWW91IGNhbiBwcm92aWRlIGEgY3VzdG9tIGBuZy10ZW1wbGF0ZWAgZm9yIHRoZSBwYWdpbmF0aW9uIFVJIG9mIHRoZSBncmlkLlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8aWd4LWdyaWQgI2dyaWQgW3BhZ2luZ109XCJ0cnVlXCIgW215VGVtcGxhdGVdPVwibXlUZW1wbGF0ZVwiIFtoZWlnaHRdPVwiJzMwNXB4J1wiPjwvaWd4LWdyaWQ+XG4gICAgICogYGBgXG5cdCAqIEBtZW1iZXJvZiBJZ3hHcmlkQmFzZUNvbXBvbmVudFxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHBhZ2luYXRpb25UZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgd2hldGhlciB0aGUgY29sdW1uIGhpZGluZyBVSSBmb3IgdGhlIGBJZ3hHcmlkQ29tcG9uZW50YCBpcyBlbmFibGVkLlxuICAgICAqIEJ5IGRlZmF1bHQgaXQgaXMgZGlzYWJsZWQgKGZhbHNlKS5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogbGV0IGdyaWRDb2xIaWRpbmcgPSB0aGlzLmdyaWQuY29sdW1uSGlkaW5nO1xuICAgICAqIGBgYFxuXHQgKiBAbWVtYmVyb2YgSWd4R3JpZEJhc2VDb21wb25lbnRcbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIGdldCBjb2x1bW5IaWRpbmcoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jb2x1bW5IaWRpbmc7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0cyB3aGV0aGVyIHRoZSBjb2x1bW4gaGlkaW5nIFVJIGZvciB0aGUgYElneEdyaWRDb21wb25lbnRgIGlzIGVuYWJsZWQuXG4gICAgICogSW4gb3JkZXIgZm9yIHRoZSBVSSB0byB3b3JrLCB5b3UgbmVlZCB0byBlbmFibGUgdGhlIHRvb2xiYXIgYXMgc2hvd24gaW4gdGhlIGV4YW1wbGUgYmVsb3cuXG4gICAgICogYGBgaHRtbFxuICAgICAqIDxpZ3gtZ3JpZCBbZGF0YV09XCJEYXRhXCIgW2F1dG9HZW5lcmF0ZV09XCJ0cnVlXCIgW3Nob3dUb29sYmFyXT1cInRydWVcIiBbY29sdW1uSGlkaW5nXT1cInRydWVcIj48L2lneC1ncmlkPlxuICAgICAqIGBgYFxuXHQgKiBAbWVtYmVyb2YgSWd4R3JpZEJhc2VDb21wb25lbnRcbiAgICAgKi9cbiAgICBzZXQgY29sdW1uSGlkaW5nKHZhbHVlKSB7XG4gICAgICAgIGlmICh0aGlzLl9jb2x1bW5IaWRpbmcgIT09IHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl9jb2x1bW5IaWRpbmcgPSB2YWx1ZTtcbiAgICAgICAgICAgIGlmICh0aGlzLmdyaWRBUEkuZ3JpZCkge1xuICAgICAgICAgICAgICAgIHRoaXMubWFya0ZvckNoZWNrKCk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX25nQWZ0ZXJWaWV3SW5pdFBhc3NlZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbGN1bGF0ZUdyaWRTaXplcygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHMgd2hldGhlciB0aGUgYElneEdyaWRSb3dDb21wb25lbnRgIHNlbGVjdGlvbiBpcyBlbmFibGVkLlxuICAgICAqIEJ5IGRlZmF1bHQgaXQgaXMgc2V0IHRvIGZhbHNlLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBsZXQgcm93U2VsZWN0YWJsZSA9IHRoaXMuZ3JpZC5yb3dTZWxlY3RhYmxlO1xuICAgICAqIGBgYFxuXHQgKiBAbWVtYmVyb2YgSWd4R3JpZEJhc2VDb21wb25lbnRcbiAgICAgKi9cbiAgICBAV2F0Y2hDaGFuZ2VzKClcbiAgICBASW5wdXQoKVxuICAgIGdldCByb3dTZWxlY3RhYmxlKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fcm93U2VsZWN0aW9uO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHMgd2hldGhlciByb3dzIGNhbiBiZSBzZWxlY3RlZC5cbiAgICAgKiBgYGBodG1sXG4gICAgICogPGlneC1ncmlkICNncmlkIFtzaG93VG9vbGJhcl09XCJ0cnVlXCIgW3Jvd1NlbGVjdGFibGVdPVwidHJ1ZVwiIFtjb2x1bW5IaWRpbmddPVwidHJ1ZVwiPjwvaWd4LWdyaWQ+XG4gICAgICogYGBgXG5cdCAqIEBtZW1iZXJvZiBJZ3hHcmlkQmFzZUNvbXBvbmVudFxuICAgICAqL1xuICAgIHNldCByb3dTZWxlY3RhYmxlKHZhbDogYm9vbGVhbikge1xuICAgICAgICB0aGlzLl9yb3dTZWxlY3Rpb24gPSB2YWw7XG4gICAgICAgIGlmICh0aGlzLmdyaWRBUEkuZ3JpZCAmJiB0aGlzLmNvbHVtbkxpc3QpIHtcblxuICAgICAgICAgICAgLy8gc2hvdWxkIHNlbGVjdGlvbiBwZXJzaXN0P1xuICAgICAgICAgICAgdGhpcy5hbGxSb3dzU2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuZGVzZWxlY3RBbGxSb3dzKCk7XG4gICAgICAgICAgICB0aGlzLmNhbGN1bGF0ZUdyaWRTaXplcygpO1xuICAgICAgICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIGdldCByb3dEcmFnZ2FibGUoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9yb3dEcmFnO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHMgd2hldGhlciByb3dzIGNhbiBiZSBtb3ZlZC5cbiAgICAgKiBgYGBodG1sXG4gICAgICogPGlneC1ncmlkICNncmlkIFtyb3dEcmFnZ2FibGVdPVwidHJ1ZVwiPjwvaWd4LWdyaWQ+XG4gICAgICogYGBgXG5cdCAqIEBtZW1iZXJvZiBJZ3hHcmlkQmFzZUNvbXBvbmVudFxuICAgICAqL1xuICAgIHNldCByb3dEcmFnZ2FibGUodmFsOiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMuX3Jvd0RyYWcgPSB2YWw7XG4gICAgICAgIGlmICh0aGlzLmdyaWRBUEkuZ3JpZCAmJiB0aGlzLmNvbHVtbkxpc3QpIHtcbiAgICAgICAgICAgIHRoaXMuY2FsY3VsYXRlR3JpZFNpemVzKCk7XG4gICAgICAgICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKiBAaW50ZXJuYWxcbiAgICAgKi9cbiAgICBwdWJsaWMgcm93RHJhZ2dpbmcgPSBmYWxzZTtcblxuXG4gICAgLyoqXG4gKiBTZXRzIHdoZXRoZXIgdGhlIGBJZ3hHcmlkUm93Q29tcG9uZW50YCBpcyBlZGl0YWJsZS5cbiAqIEJ5IGRlZmF1bHQgaXQgaXMgc2V0IHRvIGZhbHNlLlxuICogYGBgdHlwZXNjcmlwdFxuICogbGV0IHJvd0VkaXRhYmxlID0gdGhpcy5ncmlkLnJvd0VkaXRhYmxlO1xuICogYGBgXG4gKiBAbWVtYmVyb2YgSWd4R3JpZEJhc2VDb21wb25lbnRcbiAqL1xuICAgIEBXYXRjaENoYW5nZXMoKVxuICAgIEBJbnB1dCgpXG4gICAgZ2V0IHJvd0VkaXRhYmxlKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fcm93RWRpdGFibGU7XG4gICAgfVxuICAgIC8qKlxuICAgICogU2V0cyB3aGV0aGVyIHJvd3MgY2FuIGJlIGVkaXRlZC5cbiAgICAqIGBgYGh0bWxcbiAgICAqIDxpZ3gtZ3JpZCAjZ3JpZCBbc2hvd1Rvb2xiYXJdPVwidHJ1ZVwiIFtyb3dFZGl0YWJsZV09XCJ0cnVlXCIgW3ByaW1hcnlLZXldPVwiJ1Byb2R1Y3RJRCdcIiBbY29sdW1uSGlkaW5nXT1cInRydWVcIj48L2lneC1ncmlkPlxuICAgICogYGBgXG4gICAgKiBAbWVtYmVyb2YgSWd4R3JpZEJhc2VDb21wb25lbnRcbiAgICAqL1xuICAgIHNldCByb3dFZGl0YWJsZSh2YWw6IGJvb2xlYW4pIHtcbiAgICAgICAgaWYgKHRoaXMuZ3JpZEFQSS5ncmlkKSB7XG4gICAgICAgICAgICB0aGlzLnJlZnJlc2hHcmlkU3RhdGUoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9yb3dFZGl0YWJsZSA9IHZhbDtcbiAgICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgaGVpZ2h0IG9mIHRoZSBgSWd4R3JpZENvbXBvbmVudGAuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGxldCBncmlkSGVpZ2h0ID0gdGhpcy5ncmlkLmhlaWdodDtcbiAgICAgKiBgYGBcblx0ICogQG1lbWJlcm9mIElneEdyaWRCYXNlQ29tcG9uZW50XG4gICAgICovXG4gICAgQFdhdGNoQ2hhbmdlcygpXG4gICAgQEhvc3RCaW5kaW5nKCdzdHlsZS5oZWlnaHQnKVxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGdldCBoZWlnaHQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9oZWlnaHQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgaGVpZ2h0IG9mIHRoZSBgSWd4R3JpZENvbXBvbmVudGAuXG4gICAgICogYGBgaHRtbFxuICAgICAqIDxpZ3gtZ3JpZCAjZ3JpZCBbZGF0YV09XCJEYXRhXCIgW2hlaWdodF09XCInMzA1cHgnXCIgW2F1dG9HZW5lcmF0ZV09XCJ0cnVlXCI+PC9pZ3gtZ3JpZD5cbiAgICAgKiBgYGBcblx0ICogQG1lbWJlcm9mIElneEdyaWRCYXNlQ29tcG9uZW50XG4gICAgICovXG4gICAgcHVibGljIHNldCBoZWlnaHQodmFsdWU6IHN0cmluZykge1xuICAgICAgICBpZiAodGhpcy5faGVpZ2h0ICE9PSB2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5faGVpZ2h0ID0gdmFsdWU7XG4gICAgICAgICAgICB0aGlzLl9hdXRvU2l6ZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnN0eWxlLmhlaWdodCA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgd2lkdGggb2YgdGhlIGBJZ3hHcmlkQ29tcG9uZW50YC5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogbGV0IGdyaWRXaWR0aCA9IHRoaXMuZ3JpZC53aWR0aDtcbiAgICAgKiBgYGBcblx0ICogQG1lbWJlcm9mIElneEdyaWRCYXNlQ29tcG9uZW50XG4gICAgICovXG4gICAgQFdhdGNoQ2hhbmdlcygpXG4gICAgQEhvc3RCaW5kaW5nKCdzdHlsZS53aWR0aCcpXG4gICAgQElucHV0KClcbiAgICBnZXQgd2lkdGgoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl93aWR0aDtcbiAgICB9XG4gICAgc2V0IHdpZHRoKHZhbHVlKSB7XG4gICAgICAgIGlmICh0aGlzLl93aWR0aCAhPT0gdmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX3dpZHRoID0gdmFsdWU7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuc3R5bGUud2lkdGggPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHdpZHRoIG9mIHRoZSBoZWFkZXIgb2YgdGhlIGBJZ3hHcmlkQ29tcG9uZW50YC5cbiAgICAgKiBgYGBodG1sXG4gICAgICogbGV0IGdyaWRIZWFkZXJXaWR0aCA9IHRoaXMuZ3JpZC5oZWFkZXJXaWR0aDtcbiAgICAgKiBgYGBcblx0ICogQG1lbWJlcm9mIElneEdyaWRCYXNlQ29tcG9uZW50XG4gICAgICovXG4gICAgZ2V0IGhlYWRlcldpZHRoKCkge1xuICAgICAgICByZXR1cm4gcGFyc2VJbnQodGhpcy53aWR0aCwgMTApIC0gMTc7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQW4gQElucHV0IHByb3BlcnR5IHRoYXQgYWRkcyBzdHlsaW5nIGNsYXNzZXMgYXBwbGllZCB0byBhbGwgZXZlbiBgSWd4R3JpZFJvd0NvbXBvbmVudGBzIGluIHRoZSBncmlkLlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8aWd4LWdyaWQgI2dyaWQgW2RhdGFdPVwiRGF0YVwiIFtldmVuUm93Q1NTXT1cIidpZ3gtZ3JpZC0tbXktZXZlbi1jbGFzcydcIiBbYXV0b0dlbmVyYXRlXT1cInRydWVcIj48L2lneC1ncmlkPlxuICAgICAqIGBgYFxuXHQgKiBAbWVtYmVyb2YgSWd4R3JpZEJhc2VDb21wb25lbnRcbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBldmVuUm93Q1NTID0gJ2lneC1ncmlkX190ci0tZXZlbic7XG5cbiAgICAvKipcbiAgICAgKiBBbiBASW5wdXQgcHJvcGVydHkgdGhhdCBhZGRzIHN0eWxpbmcgY2xhc3NlcyBhcHBsaWVkIHRvIGFsbCBvZGQgYElneEdyaWRSb3dDb21wb25lbnRgcyBpbiB0aGUgZ3JpZC5cbiAgICAgKiBgYGBodG1sXG4gICAgICogPGlneC1ncmlkICNncmlkIFtkYXRhXT1cIkRhdGFcIiBbZXZlblJvd0NTU109XCInaWd4LWdyaWQtLW15LW9kZC1jbGFzcydcIiBbYXV0b0dlbmVyYXRlXT1cInRydWVcIj48L2lneC1ncmlkPlxuICAgICAqIGBgYFxuXHQgKiBAbWVtYmVyb2YgSWd4R3JpZEJhc2VDb21wb25lbnRcbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBvZGRSb3dDU1MgPSAnaWd4LWdyaWRfX3RyLS1vZGQnO1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgcm93IGhlaWdodC5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogY29uc3Qgcm93SGVpZ2h0ID0gdGhpcy5ncmlkLnJvd0hlaWdodDtcbiAgICAgKiBgYGBcblx0ICogQG1lbWJlcm9mIElneEdyaWRCYXNlQ29tcG9uZW50XG4gICAgICovXG4gICAgQFdhdGNoQ2hhbmdlcygpXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZ2V0IHJvd0hlaWdodCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Jvd0hlaWdodCA/IHRoaXMuX3Jvd0hlaWdodCA6IHRoaXMuZGVmYXVsdFJvd0hlaWdodDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSByb3cgaGVpZ2h0LlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8aWd4LWdyaWQgI2dyaWQgW2RhdGFdPVwibG9jYWxEYXRhXCIgW3Nob3dUb29sYmFyXT1cInRydWVcIiBbcm93SGVpZ2h0XT1cIjEwMFwiIFthdXRvR2VuZXJhdGVdPVwidHJ1ZVwiPjwvaWd4LWdyaWQ+XG4gICAgICogYGBgXG5cdCAqIEBtZW1iZXJvZiBJZ3hHcmlkQmFzZUNvbXBvbmVudFxuICAgICAqL1xuICAgIHB1YmxpYyBzZXQgcm93SGVpZ2h0KHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX3Jvd0hlaWdodCA9IHBhcnNlSW50KHZhbHVlLCAxMCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQW4gQElucHV0IHByb3BlcnR5IHRoYXQgc2V0cyB0aGUgZGVmYXVsdCB3aWR0aCBvZiB0aGUgYElneEdyaWRDb21wb25lbnRgJ3MgY29sdW1ucy5cbiAgICAgKiBgYGBodG1sXG4gICAgICogPGlneC1ncmlkICNncmlkIFtkYXRhXT1cImxvY2FsRGF0YVwiIFtzaG93VG9vbGJhcl09XCJ0cnVlXCIgW2NvbHVtbldpZHRoXT1cIjEwMFwiIFthdXRvR2VuZXJhdGVdPVwidHJ1ZVwiPjwvaWd4LWdyaWQ+XG4gICAgICogYGBgXG5cdCAqIEBtZW1iZXJvZiBJZ3hHcmlkQmFzZUNvbXBvbmVudFxuICAgICAqL1xuICAgIEBXYXRjaENoYW5nZXMoKVxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGdldCBjb2x1bW5XaWR0aCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5fY29sdW1uV2lkdGg7XG4gICAgfVxuICAgIHB1YmxpYyBzZXQgY29sdW1uV2lkdGgodmFsdWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLl9jb2x1bW5XaWR0aCA9IHZhbHVlO1xuICAgICAgICB0aGlzLmNvbHVtbldpZHRoU2V0QnlVc2VyID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBbiBASW5wdXQgcHJvcGVydHkgdGhhdCBzZXRzIHRoZSBwcmltYXJ5IGtleSBvZiB0aGUgYElneEdyaWRDb21wb25lbnRgLlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8aWd4LWdyaWQgI2dyaWQgW2RhdGFdPVwibG9jYWxEYXRhXCIgW3Nob3dUb29sYmFyXT1cInRydWVcIiBbcHJpbWFyeUtleV09XCInUHJvZHVjdElEJ1wiIFthdXRvR2VuZXJhdGVdPVwidHJ1ZVwiPjwvaWd4LWdyaWQ+XG4gICAgICogYGBgXG5cdCAqIEBtZW1iZXJvZiBJZ3hHcmlkQmFzZUNvbXBvbmVudFxuICAgICAqL1xuICAgIEBXYXRjaENoYW5nZXMoKVxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHByaW1hcnlLZXk7XG5cbiAgICAvKipcbiAgICAgKiBBbiBASW5wdXQgcHJvcGVydHkgdGhhdCBzZXRzIHRoZSBtZXNzYWdlIGRpc3BsYXllZCB3aGVuIHRoZXJlIGFyZSBubyByZWNvcmRzLlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8aWd4LWdyaWQgI2dyaWQgW2RhdGFdPVwiRGF0YVwiIFtlbXB0eUdyaWRNZXNzYWdlXT1cIidUaGUgZ3JpZCBpcyBlbXB0eSdcIiBbYXV0b0dlbmVyYXRlXT1cInRydWVcIj48L2lneC1ncmlkPlxuICAgICAqIGBgYFxuXHQgKiBAbWVtYmVyb2YgSWd4R3JpZEJhc2VDb21wb25lbnRcbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHNldCBlbXB0eUdyaWRNZXNzYWdlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fZW1wdHlHcmlkTWVzc2FnZSA9IHZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFuIGFjY2Vzc29yIHRoYXQgcmV0dXJucyB0aGUgbWVzc2FnZSBkaXNwbGF5ZWQgd2hlbiB0aGVyZSBhcmUgbm8gcmVjb3Jkcy5cbiAgICAqL1xuICAgIGdldCBlbXB0eUdyaWRNZXNzYWdlKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9lbXB0eUdyaWRNZXNzYWdlIHx8IHRoaXMucmVzb3VyY2VTdHJpbmdzLmlneF9ncmlkX2VtcHR5R3JpZF9tZXNzYWdlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFuIEBJbnB1dCBwcm9wZXJ0eSB0aGF0IHNldHMgd2hldGhlciB0aGUgZ3JpZCBpcyBnb2luZyB0byBzaG93IGxvYWRpbmcgaW5kaWNhdG9yLlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8aWd4LWdyaWQgI2dyaWQgW2RhdGFdPVwiRGF0YVwiIFtpc0xvYWRpbmddPVwidHJ1ZVwiIFthdXRvR2VuZXJhdGVdPVwidHJ1ZVwiPjwvaWd4LWdyaWQ+XG4gICAgICogYGBgXG5cdCAqIEBtZW1iZXJvZiBJZ3hHcmlkQmFzZUNvbXBvbmVudFxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgc2V0IGlzTG9hZGluZyh2YWx1ZTogYm9vbGVhbikge1xuICAgICAgICB0aGlzLl9pc0xvYWRpbmcgPSB2YWx1ZTtcbiAgICAgICAgaWYgKHRoaXMuZ3JpZEFQSS5ncmlkKSB7XG4gICAgICAgICAgICB0aGlzLm1hcmtGb3JDaGVjaygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQW4gYWNjZXNzb3IgdGhhdCByZXR1cm5zIHdoZXRoZXIgdGhlIGdyaWQgaXMgc2hvd2luZyBsb2FkaW5nIGluZGljYXRvci5cbiAgICAgKi9cbiAgICBnZXQgaXNMb2FkaW5nKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5faXNMb2FkaW5nO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEEgcHJvcGVydHkgdGhhdCBhbGxvd3MgdGhlIGNvbHVtbnMgdG8gYmUgYXV0by1nZW5lcmF0ZWQgb25jZSBhZ2FpbiBhZnRlciB0aGUgaW5pdGlhbGl6YXRpb24gb2YgdGhlIGdyaWQuXG4gICAgICogVGhpcyB3aWxsIGFsbG93IHRvIGJpbmQgdGhlIGdyaWQgdG8gcmVtb3RlIGRhdGEgYW5kIGhhdmluZyBhdXRvLWdlbmVyYXRlZCBjb2x1bW5zIGF0IHRoZSBzYW1lIHRpbWUuXG4gICAgICogTm90ZSB0aGF0IGFmdGVyIGdlbmVyYXRpbmcgdGhlIGNvbHVtbnMsIHRoaXMgcHJvcGVydHkgd291bGQgYmUgZGlzYWJsZWQgdG8gYXZvaWQgcmUtY3JlYXRpbmdcbiAgICAgKiBjb2x1bW5zIGVhY2ggdGltZSBhIG5ldyBkYXRhIGlzIGFzc2lnbmVkLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiAgdGhpcy5ncmlkLnNob3VsZEdlbmVyYXRlID0gdHJ1ZTtcbiAgICAgKiAgdGhpcy5yZW1vdGVEYXRhID0gdGhpcy5yZW1vdGVTZXJ2aWNlLnJlbW90ZURhdGE7XG4gICAgICogYGBgXG4gICAgICovXG4gICAgcHVibGljIHNob3VsZEdlbmVyYXRlOiBib29sZWFuO1xuXG4gICAgLyoqXG4gICAgICogQW4gQElucHV0IHByb3BlcnR5IHRoYXQgc2V0cyB0aGUgbWVzc2FnZSBkaXNwbGF5ZWQgd2hlbiB0aGVyZSBhcmUgbm8gcmVjb3JkcyBhbmQgdGhlIGdyaWQgaXMgZmlsdGVyZWQuXG4gICAgICogYGBgaHRtbFxuICAgICAqIDxpZ3gtZ3JpZCAjZ3JpZCBbZGF0YV09XCJEYXRhXCIgW2VtcHR5R3JpZE1lc3NhZ2VdPVwiJ1RoZSBncmlkIGlzIGVtcHR5J1wiIFthdXRvR2VuZXJhdGVdPVwidHJ1ZVwiPjwvaWd4LWdyaWQ+XG4gICAgICogYGBgXG5cdCAqIEBtZW1iZXJvZiBJZ3hHcmlkQmFzZUNvbXBvbmVudFxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgc2V0IGVtcHR5RmlsdGVyZWRHcmlkTWVzc2FnZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX2VtcHR5RmlsdGVyZWRHcmlkTWVzc2FnZSA9IHZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFuIGFjY2Vzc29yIHRoYXQgcmV0dXJucyB0aGUgbWVzc2FnZSBkaXNwbGF5ZWQgd2hlbiB0aGVyZSBhcmUgbm8gcmVjb3JkcyBhbmQgdGhlIGdyaWQgaXMgZmlsdGVyZWQuXG4gICAgKi9cbiAgICBnZXQgZW1wdHlGaWx0ZXJlZEdyaWRNZXNzYWdlKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9lbXB0eUZpbHRlcmVkR3JpZE1lc3NhZ2UgfHwgdGhpcy5yZXNvdXJjZVN0cmluZ3MuaWd4X2dyaWRfZW1wdHlGaWx0ZXJlZEdyaWRfbWVzc2FnZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBbiBASW5wdXQgcHJvcGVydHkgdGhhdCBzZXRzIHRoZSB0aXRsZSB0byBiZSBkaXNwbGF5ZWQgaW4gdGhlIGJ1aWx0LWluIGNvbHVtbiBoaWRpbmcgVUkuXG4gICAgICogYGBgaHRtbFxuICAgICAqIDxpZ3gtZ3JpZCBbc2hvd1Rvb2xiYXJdPVwidHJ1ZVwiIFtjb2x1bW5IaWRpbmddPVwidHJ1ZVwiIGNvbHVtbkhpZGluZ1RpdGxlPVwiQ29sdW1uIEhpZGluZ1wiPjwvaWd4LWdyaWQ+XG4gICAgICogYGBgXG5cdCAqIEBtZW1iZXJvZiBJZ3hHcmlkQmFzZUNvbXBvbmVudFxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGNvbHVtbkhpZGluZ1RpdGxlID0gJyc7XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGlmIHRoZSBidWlsdC1pbiBjb2x1bW4gcGlubmluZyBVSSBzaG91bGQgYmUgc2hvd24gaW4gdGhlIHRvb2xiYXIuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqICBsZXQgY29sUGlubmluZyA9IHRoaXMuZ3JpZC5jb2x1bW5QaW5uaW5nO1xuICAgICAqIGBgYFxuXHQgKiBAbWVtYmVyb2YgSWd4R3JpZEJhc2VDb21wb25lbnRcbiAgICAgKi9cbiAgICBAV2F0Y2hDaGFuZ2VzKClcbiAgICBASW5wdXQoKVxuICAgIGdldCBjb2x1bW5QaW5uaW5nKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fY29sdW1uUGlubmluZztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIGlmIHRoZSBidWlsdC1pbiBjb2x1bW4gcGlubmluZyBVSSBzaG91bGQgYmUgc2hvd24gaW4gdGhlIHRvb2xiYXIuXG4gICAgICogQnkgZGVmYXVsdCBpdCdzIGRpc2FibGVkLlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8aWd4LWdyaWQgI2dyaWQgW2RhdGFdPVwibG9jYWxEYXRhXCIgW2NvbHVtblBpbm5pbmddPVwiJ3RydWVcIiBbaGVpZ2h0XT1cIiczMDVweCdcIiBbYXV0b0dlbmVyYXRlXT1cInRydWVcIj48L2lneC1ncmlkPlxuICAgICAqIGBgYFxuXHQgKiBAbWVtYmVyb2YgSWd4R3JpZEJhc2VDb21wb25lbnRcbiAgICAgKi9cbiAgICBzZXQgY29sdW1uUGlubmluZyh2YWx1ZSkge1xuICAgICAgICBpZiAodGhpcy5fY29sdW1uUGlubmluZyAhPT0gdmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX2NvbHVtblBpbm5pbmcgPSB2YWx1ZTtcbiAgICAgICAgICAgIGlmICh0aGlzLmdyaWRBUEkuZ3JpZCkge1xuICAgICAgICAgICAgICAgIHRoaXMubWFya0ZvckNoZWNrKCk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX25nQWZ0ZXJWaWV3SW5pdFBhc3NlZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbGN1bGF0ZUdyaWRTaXplcygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFuIEBJbnB1dCBwcm9wZXJ0eSB0aGF0IHNldHMgdGhlIHRpdGxlIHRvIGJlIGRpc3BsYXllZCBpbiB0aGUgVUkgb2YgdGhlIGNvbHVtbiBwaW5uaW5nLlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8aWd4LWdyaWQgI2dyaWQgW2RhdGFdPVwibG9jYWxEYXRhXCIgW2NvbHVtblBpbm5pbmddPVwiJ3RydWVcIiBbY29sdW1uUGlubmluZ1RpdGxlXT1cIidDb2x1bW4gSGlkaW5nJ1wiIFthdXRvR2VuZXJhdGVdPVwidHJ1ZVwiPjwvaWd4LWdyaWQ+XG4gICAgICogYGBgXG5cdCAqIEBtZW1iZXJvZiBJZ3hHcmlkQmFzZUNvbXBvbmVudFxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGNvbHVtblBpbm5pbmdUaXRsZSA9ICcnO1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBpZiB0aGUgZmlsdGVyaW5nIGlzIGVuYWJsZWQuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqICBsZXQgZmlsdGVyaW5nID0gdGhpcy5ncmlkLmFsbG93RmlsdGVyaW5nO1xuICAgICAqIGBgYFxuXHQgKiBAbWVtYmVyb2YgSWd4R3JpZEJhc2VDb21wb25lbnRcbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIGdldCBhbGxvd0ZpbHRlcmluZygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FsbG93RmlsdGVyaW5nO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHMgaWYgdGhlIGZpbHRlcmluZyBpcyBlbmFibGVkLlxuICAgICAqIEJ5IGRlZmF1bHQgaXQncyBkaXNhYmxlZC5cbiAgICAgKiBgYGBodG1sXG4gICAgICogPGlneC1ncmlkICNncmlkIFtkYXRhXT1cImxvY2FsRGF0YVwiIFthbGxvd0ZpbHRlcmluZ109XCIndHJ1ZVwiIFtoZWlnaHRdPVwiJzMwNXB4J1wiIFthdXRvR2VuZXJhdGVdPVwidHJ1ZVwiPjwvaWd4LWdyaWQ+XG4gICAgICogYGBgXG5cdCAqIEBtZW1iZXJvZiBJZ3hHcmlkQmFzZUNvbXBvbmVudFxuICAgICAqL1xuICAgIHNldCBhbGxvd0ZpbHRlcmluZyh2YWx1ZSkge1xuICAgICAgICBpZiAodGhpcy5fYWxsb3dGaWx0ZXJpbmcgIT09IHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl9hbGxvd0ZpbHRlcmluZyA9IHZhbHVlO1xuICAgICAgICAgICAgaWYgKHRoaXMuY2FsY0hlaWdodCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2FsY0hlaWdodCArPSB2YWx1ZSA/IC1GSUxURVJfUk9XX0hFSUdIVCA6IEZJTFRFUl9ST1dfSEVJR0hUO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuX25nQWZ0ZXJWaWV3SW5pdFBhc3NlZCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLm1heExldmVsSGVhZGVyRGVwdGgpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aGVhZFJvdy5uYXRpdmVFbGVtZW50LnN0eWxlLmhlaWdodCA9IGAkeyh0aGlzLm1heExldmVsSGVhZGVyRGVwdGggKyAxKSAqIHRoaXMuZGVmYXVsdFJvd0hlaWdodCArXG4gICAgICAgICAgICAgICAgICAgICAgICAodmFsdWUgJiYgdGhpcy5maWx0ZXJNb2RlID09PSBGaWx0ZXJNb2RlLnF1aWNrRmlsdGVyID8gRklMVEVSX1JPV19IRUlHSFQgOiAwKSArIDF9cHhgO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5maWx0ZXJpbmdTZXJ2aWNlLmlzRmlsdGVyUm93VmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5maWx0ZXJpbmdTZXJ2aWNlLmZpbHRlcmVkQ29sdW1uID0gbnVsbDtcblxuICAgICAgICAgICAgdGhpcy5maWx0ZXJpbmdTZXJ2aWNlLnJlZ2lzdGVyU1ZHSWNvbnMoKTtcbiAgICAgICAgICAgIGlmICh0aGlzLmdyaWRBUEkuZ3JpZCkge1xuICAgICAgICAgICAgICAgIHRoaXMubWFya0ZvckNoZWNrKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBmaWx0ZXIgbW9kZS5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogIGxldCBmaWx0ZXJpbmcgPSB0aGlzLmdyaWQuZmlsdGVyTW9kZTtcbiAgICAgKiBgYGBcblx0ICogQG1lbWJlcm9mIElneEdyaWRCYXNlQ29tcG9uZW50XG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBnZXQgZmlsdGVyTW9kZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ZpbHRlck1vZGU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0cyBmaWx0ZXIgbW9kZS5cbiAgICAgKiBCeSBkZWZhdWx0IGl0J3Mgc2V0IHRvIEZpbHRlck1vZGUucXVpY2tGaWx0ZXIuXG4gICAgICogYGBgaHRtbFxuICAgICAqIDxpZ3gtZ3JpZCAjZ3JpZCBbZGF0YV09XCJsb2NhbERhdGFcIiBbZmlsdGVyTW9kZV09XCIncXVpY2tGaWx0ZXInXCIgW2hlaWdodF09XCInMzA1cHgnXCIgW2F1dG9HZW5lcmF0ZV09XCJ0cnVlXCI+PC9pZ3gtZ3JpZD5cbiAgICAgKiBgYGBcblx0ICogQG1lbWJlcm9mIElneEdyaWRCYXNlQ29tcG9uZW50XG4gICAgICovXG4gICAgc2V0IGZpbHRlck1vZGUodmFsdWUpIHtcbiAgICAgICAgdGhpcy5fZmlsdGVyTW9kZSA9IHZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHN1bW1hcnkgcG9zaXRpb24uXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqICBsZXQgc3VtbWFyeVBvc2l0aW9uID0gdGhpcy5ncmlkLnN1bW1hcnlQb3NpdGlvbjtcbiAgICAgKiBgYGBcblx0ICogQG1lbWJlcm9mIElneEdyaWRCYXNlQ29tcG9uZW50XG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBnZXQgc3VtbWFyeVBvc2l0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fc3VtbWFyeVBvc2l0aW9uO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHMgc3VtbWFyeSBwb3NpdGlvbi5cbiAgICAgKiBCeSBkZWZhdWx0IGl0IGlzIGJvdHRvbS5cbiAgICAgKiBgYGBodG1sXG4gICAgICogPGlneC1ncmlkICNncmlkIFtkYXRhXT1cImxvY2FsRGF0YVwiIHN1bW1hcnlQb3NpdGlvbj1cInRvcFwiIFthdXRvR2VuZXJhdGVdPVwidHJ1ZVwiPjwvaWd4LWdyaWQ+XG4gICAgICogYGBgXG5cdCAqIEBtZW1iZXJvZiBJZ3hHcmlkQmFzZUNvbXBvbmVudFxuICAgICAqL1xuICAgIHNldCBzdW1tYXJ5UG9zaXRpb24odmFsdWUpIHtcbiAgICAgICAgdGhpcy5fc3VtbWFyeVBvc2l0aW9uID0gdmFsdWU7XG4gICAgICAgIGlmICh0aGlzLmdyaWRBUEkuZ3JpZCkge1xuICAgICAgICAgICAgdGhpcy5tYXJrRm9yQ2hlY2soKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHN1bW1hcnkgY2FsY3VsYXRpb24gbW9kZS5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogIGxldCBzdW1tYXJ5Q2FsY3VsYXRpb25Nb2RlID0gdGhpcy5ncmlkLnN1bW1hcnlDYWxjdWxhdGlvbk1vZGU7XG4gICAgICogYGBgXG5cdCAqIEBtZW1iZXJvZiBJZ3hHcmlkQmFzZUNvbXBvbmVudFxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgZ2V0IHN1bW1hcnlDYWxjdWxhdGlvbk1vZGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zdW1tYXJ5Q2FsY3VsYXRpb25Nb2RlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHMgc3VtbWFyeSBjYWxjdWxhdGlvbiBtb2RlLlxuICAgICAqIEJ5IGRlZmF1bHQgaXQgaXMgcm9vdEFuZENoaWxkTGV2ZWxzIHdoaWNoIG1lYW5zIHRoZSBzdW1tYXJpZXMgYXJlIGNhbGN1bGF0ZWQgZm9yIHRoZSByb290IGxldmVsIGFuZCBlYWNoIGNoaWxkIGxldmVsLlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8aWd4LWdyaWQgI2dyaWQgW2RhdGFdPVwibG9jYWxEYXRhXCIgc3VtbWFyeUNhbGN1bGF0aW9uTW9kZT1cInJvb3RMZXZlbE9ubHlcIiBbYXV0b0dlbmVyYXRlXT1cInRydWVcIj48L2lneC1ncmlkPlxuICAgICAqIGBgYFxuXHQgKiBAbWVtYmVyb2YgSWd4R3JpZEJhc2VDb21wb25lbnRcbiAgICAgKi9cbiAgICBzZXQgc3VtbWFyeUNhbGN1bGF0aW9uTW9kZSh2YWx1ZSkge1xuICAgICAgICB0aGlzLl9zdW1tYXJ5Q2FsY3VsYXRpb25Nb2RlID0gdmFsdWU7XG4gICAgICAgIGlmICh0aGlzLmdyaWRBUEkuZ3JpZCkge1xuICAgICAgICAgICAgdGhpcy5zdW1tYXJ5U2VydmljZS5yZXNldFN1bW1hcnlIZWlnaHQoKTtcbiAgICAgICAgICAgIHRoaXMuZW5kRWRpdCh0cnVlKTtcbiAgICAgICAgICAgIHRoaXMuY2FsY3VsYXRlR3JpZEhlaWdodCgpO1xuICAgICAgICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBFbWl0dGVkIHdoZW4gYElneEdyaWRDZWxsQ29tcG9uZW50YCBpcyBjbGlja2VkLiBSZXR1cm5zIHRoZSBgSWd4R3JpZENlbGxDb21wb25lbnRgLlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8aWd4LWdyaWQgI2dyaWQgKG9uQ2VsbENsaWNrKT1cIm9uQ2VsbENsaWNrKCRldmVudClcIiBbZGF0YV09XCJsb2NhbERhdGFcIiBbaGVpZ2h0XT1cIiczMDVweCdcIiBbYXV0b0dlbmVyYXRlXT1cInRydWVcIj48L2lneC1ncmlkPlxuICAgICAqIGBgYFxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBwdWJsaWMgb25DZWxsQ2xpY2soZSl7XG4gICAgICogICAgIGFsZXJ0KFwiVGhlIGNlbGwgaGFzIGJlZW4gY2xpY2tlZCFcIik7XG4gICAgICogfVxuICAgICAqIGBgYFxuXHQgKiBAbWVtYmVyb2YgSWd4R3JpZEJhc2VDb21wb25lbnRcbiAgICAgKi9cbiAgICBAT3V0cHV0KClcbiAgICBwdWJsaWMgb25DZWxsQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPElHcmlkQ2VsbEV2ZW50QXJncz4oKTtcblxuICAgIC8qKlxuICAgICAqIEVtaXR0ZWQgd2hlbiBgSWd4R3JpZENlbGxDb21wb25lbnRgIGlzIHNlbGVjdGVkLiBSZXR1cm5zIHRoZSBgSWd4R3JpZENlbGxDb21wb25lbnRgLlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8aWd4LWdyaWQgI2dyaWQgKG9uU2VsZWN0aW9uKT1cIm9uQ2VsbFNlbGVjdCgkZXZlbnQpXCIgW2RhdGFdPVwibG9jYWxEYXRhXCIgW2hlaWdodF09XCInMzA1cHgnXCIgW2F1dG9HZW5lcmF0ZV09XCJ0cnVlXCI+PC9pZ3gtZ3JpZD5cbiAgICAgKiBgYGBcbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogcHVibGljIG9uQ2VsbFNlbGVjdChlKXtcbiAgICAgKiAgICAgYWxlcnQoXCJUaGUgY2VsbCBoYXMgYmVlbiBzZWxlY3RlZCFcIik7XG4gICAgICogfVxuICAgICAqIGBgYFxuXHQgKiBAbWVtYmVyb2YgSWd4R3JpZEJhc2VDb21wb25lbnRcbiAgICAgKi9cbiAgICBAT3V0cHV0KClcbiAgICBwdWJsaWMgb25TZWxlY3Rpb24gPSBuZXcgRXZlbnRFbWl0dGVyPElHcmlkQ2VsbEV2ZW50QXJncz4oKTtcblxuICAgIC8qKlxuICAgICAqICBFbWl0dGVkIHdoZW4gYElneEdyaWRSb3dDb21wb25lbnRgIGlzIHNlbGVjdGVkLlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8aWd4LWdyaWQgI2dyaWQgKG9uUm93U2VsZWN0aW9uQ2hhbmdlKT1cIm9uUm93Q2xpY2tDaGFuZ2UoJGV2ZW50KVwiIFtkYXRhXT1cImxvY2FsRGF0YVwiIFthdXRvR2VuZXJhdGVdPVwidHJ1ZVwiPjwvaWd4LWdyaWQ+XG4gICAgICogYGBgXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIHB1YmxpYyBvbkNlbGxDbGlja0NoYW5nZShlKXtcbiAgICAgKiAgICAgYWxlcnQoXCJUaGUgc2VsZWN0ZWQgcm93IGhhcyBiZWVuIGNoYW5nZWQhXCIpO1xuICAgICAqIH1cbiAgICAgKiBgYGBcblx0ICogQG1lbWJlcm9mIElneEdyaWRCYXNlQ29tcG9uZW50XG4gICAgICovXG4gICAgQE91dHB1dCgpXG4gICAgcHVibGljIG9uUm93U2VsZWN0aW9uQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxJUm93U2VsZWN0aW9uRXZlbnRBcmdzPigpO1xuXG4gICAgLyoqXG4gICAgICogRW1pdHRlZCB3aGVuIGBJZ3hDb2x1bW5Db21wb25lbnRgIGlzIHBpbm5lZC5cbiAgICAgKiBUaGUgaW5kZXggdGhhdCB0aGUgY29sdW1uIGlzIGluc2VydGVkIGF0IG1heSBiZSBjaGFuZ2VkIHRocm91Z2ggdGhlIGBpbnNlcnRBdEluZGV4YCBwcm9wZXJ0eS5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogcHVibGljIGNvbHVtblBpbm5pbmcoZXZlbnQpIHtcbiAgICAgKiAgICAgaWYgKGV2ZW50LmNvbHVtbi5maWVsZCA9PT0gXCJOYW1lXCIpIHtcbiAgICAgKiAgICAgICBldmVudC5pbnNlcnRBdEluZGV4ID0gMDtcbiAgICAgKiAgICAgfVxuICAgICAqIH1cbiAgICAgKiBgYGBcblx0ICogQG1lbWJlcm9mIElneEdyaWRCYXNlQ29tcG9uZW50XG4gICAgICovXG4gICAgQE91dHB1dCgpXG4gICAgcHVibGljIG9uQ29sdW1uUGlubmluZyA9IG5ldyBFdmVudEVtaXR0ZXI8SVBpbkNvbHVtbkV2ZW50QXJncz4oKTtcblxuICAgIC8qKlxuICAgICAqIEFuIEBPdXRwdXQgcHJvcGVydHkgZW1pdHRpbmcgYW4gZXZlbnQgd2hlbiBgSWd4R3JpZENlbGxDb21wb25lbnRgXG4gICAgICogZWRpdGluZyBoYXMgYmVlbiBwZXJmb3JtZWQgaW4gdGhlIGdyaWQgYW5kIHRoZSB2YWx1ZXMgaGF2ZSAqKm5vdCoqIGJlZW4gc3VibWl0dGVkIChlLmcuIGBFc2NgIGtleSB3YXMgcHJlc3NlZCkuXG4gICAgICogVGhpcyBldmVudCBpcyBjYW5jZWxhYmxlLlxuICAgICAqXG4gICAgICogYXJnczogSUdyaWRFZGl0RXZlbnRBcmdzID0ge1xuICAgICAqICAgICAgY2FuY2VsOiBib29sLFxuICAgICAqICAgICAgY2VsbElEOiB7XG4gICAgICogICAgICAgICAgY29sdW1uSUQ6IGludCxcbiAgICAgKiAgICAgICAgICByb3dJRDogaW50LFxuICAgICAqICAgICAgICAgIHJvd0luZGV4OiBpbnRcbiAgICAgKiAgICAgIH1cbiAgICAgKiAgICAgIG5ld1ZhbHVlOiBvYmplY3QsXG4gICAgICogICAgICBvbGRWYWx1ZTogb2JqZWN0LFxuICAgICAqICAgICAgcm93SUQ6IGludFxuICAgICAqICB9XG4gICAgICpcbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogZWRpdENhbmNlbChldmVudDogSUdyaWRFZGl0RXZlbnRBcmdzKXtcbiAgICAgKiAgICBjb25zdCByb3dJRDogSWd4Q29sdW1uQ29tcG9uZW50ID0gZXZlbnQucm93SUQ7XG4gICAgICogfVxuICAgICAqIGBgYFxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8aWd4LWdyaWQgI2dyaWQzIChvbkNlbGxFZGl0Q2FuY2VsKT1cImVkaXRDYW5jZWwoJGV2ZW50KVwiIFtkYXRhXT1cInJlbW90ZSB8IGFzeW5jXCIgKG9uU29ydGluZ0RvbmUpPVwicHJvY2VzcygkZXZlbnQpXCJcbiAgICAgKiAgICAgICAgICBbcHJpbWFyeUtleV09XCInUHJvZHVjdElEJ1wiIFtyb3dTZWxlY3RhYmxlXT1cInRydWVcIj5cbiAgICAgKiAgICAgICAgICA8aWd4LWNvbHVtbiBbc29ydGFibGVdPVwidHJ1ZVwiIFtmaWVsZF09XCInUHJvZHVjdElEJ1wiPjwvaWd4LWNvbHVtbj5cbiAgICAgKiAgICAgICAgICA8aWd4LWNvbHVtbiBbZWRpdGFibGVdPVwidHJ1ZVwiIFtmaWVsZF09XCInUHJvZHVjdE5hbWUnXCI+PC9pZ3gtY29sdW1uPlxuICAgICAqICAgICAgICAgIDxpZ3gtY29sdW1uIFtzb3J0YWJsZV09XCJ0cnVlXCIgW2ZpZWxkXT1cIidVbml0c0luU3RvY2snXCIgW2hlYWRlcl09XCInVW5pdHMgaW4gU3RvY2snXCI+PC9pZ3gtY29sdW1uPlxuICAgICAqIDwvaWd4LWdyaWQ+XG4gICAgICogYGBgXG5cdCAqIEBtZW1iZXJvZiBJZ3hHcmlkQ29tcG9uZW50XG4gICAgICovXG4gICAgQE91dHB1dCgpXG4gICAgcHVibGljIG9uQ2VsbEVkaXRDYW5jZWwgPSBuZXcgRXZlbnRFbWl0dGVyPElHcmlkRWRpdEV2ZW50QXJncz4oKTtcblxuICAgIC8qKlxuICAgICAqIEFuIEBPdXRwdXQgcHJvcGVydHkgZW1pdHRpbmcgYW4gZXZlbnQgd2hlbiBgSWd4R3JpZENlbGxDb21wb25lbnRgIGVudGVycyBlZGl0IG1vZGUuXG4gICAgICogVGhpcyBldmVudCBpcyBjYW5jZWxhYmxlLlxuICAgICAqXG4gICAgICogYXJnczogSUdyaWRFZGl0RXZlbnRBcmdzID0ge1xuICAgICAqICAgICAgY2FuY2VsOiBib29sLFxuICAgICAqICAgICAgY2VsbElEOiB7XG4gICAgICogICAgICAgICAgY29sdW1uSUQ6IGludCxcbiAgICAgKiAgICAgICAgICByb3dJRDogaW50LFxuICAgICAqICAgICAgICAgIHJvd0luZGV4OiBpbnRcbiAgICAgKiAgICAgIH1cbiAgICAgKiAgICAgIG9sZFZhbHVlOiBvYmplY3QsXG4gICAgICogICAgICByb3dJRDogaW50XG4gICAgICogIH1cbiAgICAgKlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBlZGl0U3RhcnQoZXZlbnQ6IElHcmlkRWRpdEV2ZW50QXJncyl7XG4gICAgICogICAgY29uc3QgdmFsdWU6IElneENvbHVtbkNvbXBvbmVudCA9IGV2ZW50Lm5ld1ZhbHVlO1xuICAgICAqIH1cbiAgICAgKiBgYGBcbiAgICAgKiBgYGBodG1sXG4gICAgICogPGlneC1ncmlkICNncmlkMyAob25DZWxsRWRpdEVudGVyKT1cImVkaXRTdGFydCgkZXZlbnQpXCIgW2RhdGFdPVwicmVtb3RlIHwgYXN5bmNcIiAob25Tb3J0aW5nRG9uZSk9XCJwcm9jZXNzKCRldmVudClcIlxuICAgICAqICAgICAgICAgIFtwcmltYXJ5S2V5XT1cIidQcm9kdWN0SUQnXCIgW3Jvd1NlbGVjdGFibGVdPVwidHJ1ZVwiPlxuICAgICAqICAgICAgICAgIDxpZ3gtY29sdW1uIFtzb3J0YWJsZV09XCJ0cnVlXCIgW2ZpZWxkXT1cIidQcm9kdWN0SUQnXCI+PC9pZ3gtY29sdW1uPlxuICAgICAqICAgICAgICAgIDxpZ3gtY29sdW1uIFtlZGl0YWJsZV09XCJ0cnVlXCIgW2ZpZWxkXT1cIidQcm9kdWN0TmFtZSdcIj48L2lneC1jb2x1bW4+XG4gICAgICogICAgICAgICAgPGlneC1jb2x1bW4gW3NvcnRhYmxlXT1cInRydWVcIiBbZmllbGRdPVwiJ1VuaXRzSW5TdG9jaydcIiBbaGVhZGVyXT1cIidVbml0cyBpbiBTdG9jaydcIj48L2lneC1jb2x1bW4+XG4gICAgICogPC9pZ3gtZ3JpZD5cbiAgICAgKiBgYGBcblx0ICogQG1lbWJlcm9mIElneEdyaWRDb21wb25lbnRcbiAgICAgKi9cbiAgICBAT3V0cHV0KClcbiAgICBwdWJsaWMgb25DZWxsRWRpdEVudGVyID0gbmV3IEV2ZW50RW1pdHRlcjxJR3JpZEVkaXRFdmVudEFyZ3M+KCk7XG5cbiAgICAvKipcbiAgICAgKiBBbiBAT3V0cHV0IHByb3BlcnR5IGVtaXR0aW5nIGFuIGV2ZW50IHdoZW4gYElneEdyaWRDZWxsQ29tcG9uZW50YCBlZGl0aW5nIGhhcyBiZWVuIHBlcmZvcm1lZCBpbiB0aGUgZ3JpZC5cbiAgICAgKiBFdmVudCBpcyBmaXJlZCBhZnRlciBlZGl0aW5nIGlzIGNvbXBsZXRlZCwgd2hlbiB0aGUgY2VsbCBpcyBleGl0aW5nIGVkaXQgbW9kZS5cbiAgICAgKiBUaGlzIGV2ZW50IGlzIGNhbmNlbGFibGUuXG4gICAgICpcbiAgICAgKiBhcmdzOiBJR3JpZEVkaXRFdmVudEFyZ3MgPSB7XG4gICAgICogICAgICBjYW5jZWw6IGJvb2wsXG4gICAgICogICAgICBjZWxsSUQ6IHtcbiAgICAgKiAgICAgICAgICBjb2x1bW5JRDogaW50LFxuICAgICAqICAgICAgICAgIHJvd0lEOiBpbnQsXG4gICAgICogICAgICAgICAgcm93SW5kZXg6IGludFxuICAgICAqICAgICAgfVxuICAgICAqICAgICAgbmV3VmFsdWU6IG9iamVjdCxcbiAgICAgKiAgICAgIG9sZFZhbHVlOiBvYmplY3QsXG4gICAgICogICAgICByb3dJRDogaW50XG4gICAgICogIH1cbiAgICAgKlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBlZGl0RG9uZShldmVudDogSUdyaWRFZGl0RXZlbnRBcmdzKXtcbiAgICAgKiAgICBjb25zdCB2YWx1ZTogSWd4Q29sdW1uQ29tcG9uZW50ID0gZXZlbnQubmV3VmFsdWU7XG4gICAgICogfVxuICAgICAqIGBgYFxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8aWd4LWdyaWQgI2dyaWQzIChvbkNlbGxFZGl0KT1cImVkaXREb25lKCRldmVudClcIiBbZGF0YV09XCJyZW1vdGUgfCBhc3luY1wiIChvblNvcnRpbmdEb25lKT1cInByb2Nlc3MoJGV2ZW50KVwiXG4gICAgICogICAgICAgICAgW3ByaW1hcnlLZXldPVwiJ1Byb2R1Y3RJRCdcIiBbcm93U2VsZWN0YWJsZV09XCJ0cnVlXCI+XG4gICAgICogICAgICAgICAgPGlneC1jb2x1bW4gW3NvcnRhYmxlXT1cInRydWVcIiBbZmllbGRdPVwiJ1Byb2R1Y3RJRCdcIj48L2lneC1jb2x1bW4+XG4gICAgICogICAgICAgICAgPGlneC1jb2x1bW4gW2VkaXRhYmxlXT1cInRydWVcIiBbZmllbGRdPVwiJ1Byb2R1Y3ROYW1lJ1wiPjwvaWd4LWNvbHVtbj5cbiAgICAgKiAgICAgICAgICA8aWd4LWNvbHVtbiBbc29ydGFibGVdPVwidHJ1ZVwiIFtmaWVsZF09XCInVW5pdHNJblN0b2NrJ1wiIFtoZWFkZXJdPVwiJ1VuaXRzIGluIFN0b2NrJ1wiPjwvaWd4LWNvbHVtbj5cbiAgICAgKiA8L2lneC1ncmlkPlxuICAgICAqIGBgYFxuXHQgKiBAbWVtYmVyb2YgSWd4R3JpZEJhc2VDb21wb25lbnRcbiAgICAgKi9cbiAgICBAT3V0cHV0KClcbiAgICBwdWJsaWMgb25DZWxsRWRpdCA9IG5ldyBFdmVudEVtaXR0ZXI8SUdyaWRFZGl0RXZlbnRBcmdzPigpO1xuXG4gICAgLyoqXG4gICAgICogQW4gQE91dHB1dCBwcm9wZXJ0eSBlbWl0dGluZyBhbiBldmVudCB3aGVuIFtyb3dFZGl0YWJsZV09XCJ0cnVlXCIgYSByb3cgZW50ZXJzIGVkaXQgbW9kZS5cbiAgICAgKiBUaGlzIGV2ZW50IGlzIGNhbmNlbGFibGUuXG4gICAgICpcbiAgICAgKiBhcmdzOiBJR3JpZEVkaXRFdmVudEFyZ3MgPSB7XG4gICAgICogICAgICBjYW5jZWw6IGJvb2wsXG4gICAgICogICAgICBvbGRWYWx1ZTogPHJvd09iaj4sXG4gICAgICogICAgICByb3dJRDogaW50XG4gICAgICogIH1cbiAgICAgKlxuICAgICAqIEJpbmQgdG8gdGhlIGV2ZW50IGluIG1hcmt1cCBhcyBmb2xsb3dzOlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8aWd4LWdyaWQgI2dyaWQzIChvblJvd0VkaXRFbnRlcik9XCJlZGl0U3RhcnQoJGV2ZW50KVwiIFtkYXRhXT1cInJlbW90ZSB8IGFzeW5jXCIgKG9uU29ydGluZ0RvbmUpPVwicHJvY2VzcygkZXZlbnQpXCJcbiAgICAgKiAgICAgICAgICBbcHJpbWFyeUtleV09XCInUHJvZHVjdElEJ1wiIFtyb3dTZWxlY3RhYmxlXT1cInRydWVcIiBbcm93RWRpdGFibGVdPVwidHJ1ZVwiPlxuICAgICAqICAgICAgICAgIDxpZ3gtY29sdW1uIFtzb3J0YWJsZV09XCJ0cnVlXCIgW2ZpZWxkXT1cIidQcm9kdWN0SUQnXCI+PC9pZ3gtY29sdW1uPlxuICAgICAqICAgICAgICAgIDxpZ3gtY29sdW1uIFtlZGl0YWJsZV09XCJ0cnVlXCIgW2ZpZWxkXT1cIidQcm9kdWN0TmFtZSdcIj48L2lneC1jb2x1bW4+XG4gICAgICogICAgICAgICAgPGlneC1jb2x1bW4gW3NvcnRhYmxlXT1cInRydWVcIiBbZmllbGRdPVwiJ1VuaXRzSW5TdG9jaydcIiBbaGVhZGVyXT1cIidVbml0cyBpbiBTdG9jaydcIj48L2lneC1jb2x1bW4+XG4gICAgICogPC9pZ3gtZ3JpZD5cbiAgICAgKiBgYGBcbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogICAgICBlZGl0U3RhcnQoZXZlbnQ6IElHcmlkRWRpdEV2ZW50QXJncykge1xuICAgICAqICAgICAgICAgIGNvbnN0IGVkaXRlZFJvd09iaiA9IGV2ZW50Lm9sZFZhbHVlO1xuICAgICAqICAgICAgICAgIGNvbnN0IGNhbmNlbFZhbHVlID0gZXZlbnQuY2FuY2VsO1xuICAgICAqICAgICAgICAgIGNvbnN0IHJvd0lEID0gZXZlbnQucm93SUQ7XG4gICAgICogICAgICB9XG4gICAgICogYGBgXG5cdCAqIEBtZW1iZXJvZiBJZ3hHcmlkQ29tcG9uZW50XG4gICAgICovXG4gICAgQE91dHB1dCgpXG4gICAgcHVibGljIG9uUm93RWRpdEVudGVyID0gbmV3IEV2ZW50RW1pdHRlcjxJR3JpZEVkaXRFdmVudEFyZ3M+KCk7XG5cbiAgICAvKipcbiAgICAgKiBBbiBAT3V0cHV0IHByb3BlcnR5IGVtaXR0aW5nIGFuIGV2ZW50IHdoZW4gW3Jvd0VkaXRhYmxlXT1cInRydWVcIiAmIGBlbmRFZGl0KHRydWUpYCBpcyBjYWxsZWQuXG4gICAgICogRW1pdHRlZCB3aGVuIGNoYW5naW5nIHJvd3MgZHVyaW5nIGVkaXQgbW9kZSwgc2VsZWN0aW5nIGFuIHVuLWVkaXRhYmxlIGNlbGwgaW4gdGhlIGVkaXRlZCByb3csXG4gICAgICogcGVyZm9ybWluZyBwYWdpbmcgb3BlcmF0aW9uLCBjb2x1bW4gcmVzaXppbmcsIHBpbm5pbmcsIG1vdmluZyBvciBoaXR0aW5nICBgRG9uZWBcbiAgICAgKiBidXR0b24gaW5zaWRlIG9mIHRoZSByb3dFZGl0aW5nT3ZlcmxheSwgb3IgaGl0dGluZyB0aGUgYEVudGVyYCBrZXkgd2hpbGUgZWRpdGluZyBhIGNlbGwuXG4gICAgICogVGhpcyBldmVudCBpcyBjYW5jZWxhYmxlLlxuICAgICAqXG4gICAgICogYXJnczogSUdyaWRFZGl0RXZlbnRBcmdzID0ge1xuICAgICAqICAgICAgY2FuY2VsOiBib29sLFxuICAgICAqICAgICAgbmV3VmFsdWU6IDxyb3dPYmo+LFxuICAgICAqICAgICAgb2xkVmFsdWU6IDxyb3dPYmo+LFxuICAgICAqICAgICAgcm93SUQ6IGludFxuICAgICAqICB9XG4gICAgICpcbiAgICAgKiBCaW5kIHRvIHRoZSBldmVudCBpbiBtYXJrdXAgYXMgZm9sbG93czpcbiAgICAgKiBgYGBodG1sXG4gICAgICogPGlneC1ncmlkICNncmlkMyAob25Sb3dFZGl0KT1cImVkaXREb25lKCRldmVudClcIiBbZGF0YV09XCJyZW1vdGUgfCBhc3luY1wiIChvblNvcnRpbmdEb25lKT1cInByb2Nlc3MoJGV2ZW50KVwiXG4gICAgICogICAgICAgICAgW3ByaW1hcnlLZXldPVwiJ1Byb2R1Y3RJRCdcIiBbcm93U2VsZWN0YWJsZV09XCJ0cnVlXCIgW3Jvd0VkaXRhYmxlXT1cInRydWVcIj5cbiAgICAgKiAgICAgICAgICA8aWd4LWNvbHVtbiBbc29ydGFibGVdPVwidHJ1ZVwiIFtmaWVsZF09XCInUHJvZHVjdElEJ1wiPjwvaWd4LWNvbHVtbj5cbiAgICAgKiAgICAgICAgICA8aWd4LWNvbHVtbiBbZWRpdGFibGVdPVwidHJ1ZVwiIFtmaWVsZF09XCInUHJvZHVjdE5hbWUnXCI+PC9pZ3gtY29sdW1uPlxuICAgICAqICAgICAgICAgIDxpZ3gtY29sdW1uIFtzb3J0YWJsZV09XCJ0cnVlXCIgW2ZpZWxkXT1cIidVbml0c0luU3RvY2snXCIgW2hlYWRlcl09XCInVW5pdHMgaW4gU3RvY2snXCI+PC9pZ3gtY29sdW1uPlxuICAgICAqIDwvaWd4LWdyaWQ+XG4gICAgICogYGBgXG4gICAgICpcbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogICAgICBlZGl0RG9uZShldmVudDogSUdyaWRFZGl0RXZlbnRBcmdzKSB7XG4gICAgICogICAgICAgICAgY29uc3Qgb3JpZ2luYWxSb3dPYmogPSBldmVudC5vbGRWYWx1ZTtcbiAgICAgKiAgICAgICAgICBjb25zdCB1cGRhdGVkUm93T2JqID0gZXZlbnQubmV3VmFsdWU7XG4gICAgICogICAgICAgICAgY29uc3QgY2FuY2VsVmFsdWUgPSBldmVudC5jYW5jZWw7XG4gICAgICogICAgICAgICAgY29uc3Qgcm93SUQgPSBldmVudC5yb3dJRDtcbiAgICAgKiAgICAgIH1cbiAgICAgKiBgYGBcblx0ICogQG1lbWJlcm9mIElneEdyaWRCYXNlQ29tcG9uZW50XG4gICAgICovXG4gICAgQE91dHB1dCgpXG4gICAgcHVibGljIG9uUm93RWRpdCA9IG5ldyBFdmVudEVtaXR0ZXI8SUdyaWRFZGl0RXZlbnRBcmdzPigpO1xuXG4gICAgLyoqXG4gICAgICogQW4gQE91dHB1dCBwcm9wZXJ0eSBlbWl0dGluZyBhbiBldmVudCB3aGVuIFtyb3dFZGl0YWJsZV09XCJ0cnVlXCIgJiBgZW5kRWRpdChmYWxzZSlgIGlzIGNhbGxlZC5cbiAgICAgKiBFbWl0dGVkIHdoZW4gY2hhbmdpbmcgaGl0dGluZyBgRXNjYCBrZXkgZHVyaW5nIGNlbGwgZWRpdGluZyBhbmQgd2hlbiBjbGljayBvbiB0aGUgYENhbmNlbGAgYnV0dG9uXG4gICAgICogaW4gdGhlIHJvdyBlZGl0aW5nIG92ZXJsYXkuXG4gICAgICogVGhpcyBldmVudCBpcyBjYW5jZWxhYmxlLlxuICAgICAqXG4gICAgICogYXJnczogSUdyaWRFZGl0RXZlbnRBcmdzID0ge1xuICAgICAqICAgICAgY2FuY2VsOiBib29sLFxuICAgICAqICAgICAgbmV3VmFsdWU6IDxyb3dPYmo+LFxuICAgICAqICAgICAgb2xkVmFsdWU6IDxyb3dPYmo+LFxuICAgICAqICAgICAgcm93SUQ6IGludFxuICAgICAqICB9XG4gICAgICpcbiAgICAgKiBCaW5kIHRvIHRoZSBldmVudCBpbiBtYXJrdXAgYXMgZm9sbG93czpcbiAgICAgKiBgYGBodG1sXG4gICAgICogPGlneC1ncmlkICNncmlkMyAob25Sb3dFZGl0Q2FuY2VsKT1cImVkaXRDYW5jZWwoJGV2ZW50KVwiIFtkYXRhXT1cInJlbW90ZSB8IGFzeW5jXCIgKG9uU29ydGluZ0RvbmUpPVwicHJvY2VzcygkZXZlbnQpXCJcbiAgICAgKiAgICAgICAgICBbcHJpbWFyeUtleV09XCInUHJvZHVjdElEJ1wiIFtyb3dTZWxlY3RhYmxlXT1cInRydWVcIiBbcm93RWRpdGFibGVdPVwidHJ1ZVwiPlxuICAgICAqICAgICAgICAgIDxpZ3gtY29sdW1uIFtzb3J0YWJsZV09XCJ0cnVlXCIgW2ZpZWxkXT1cIidQcm9kdWN0SUQnXCI+PC9pZ3gtY29sdW1uPlxuICAgICAqICAgICAgICAgIDxpZ3gtY29sdW1uIFtlZGl0YWJsZV09XCJ0cnVlXCIgW2ZpZWxkXT1cIidQcm9kdWN0TmFtZSdcIj48L2lneC1jb2x1bW4+XG4gICAgICogICAgICAgICAgPGlneC1jb2x1bW4gW3NvcnRhYmxlXT1cInRydWVcIiBbZmllbGRdPVwiJ1VuaXRzSW5TdG9jaydcIiBbaGVhZGVyXT1cIidVbml0cyBpbiBTdG9jaydcIj48L2lneC1jb2x1bW4+XG4gICAgICogPC9pZ3gtZ3JpZD5cbiAgICAgKiBgYGBcbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogICAgICBlZGl0Q2FuY2VsKGVtaXR0ZWQ6IHsgcm93OiBJZ3hHcmlkUm93Q29tcG9uZW50LCBuZXdWYWx1ZTogYW55LCBvbGRWYWx1ZTogYW55IH0pOiB2b2lkIHtcbiAgICAgKiAgICAgICAgICBjb25zdCBvcmlnaW5hbFJvd09iaiA9IGV2ZW50Lm9sZFZhbHVlO1xuICAgICAqICAgICAgICAgIGNvbnN0IHVwZGF0ZWRSb3dPYmogPSBldmVudC5uZXdWYWx1ZTtcbiAgICAgKiAgICAgICAgICBjb25zdCBjYW5jZWxWYWx1ZSA9IGV2ZW50LmNhbmNlbDtcbiAgICAgKiAgICAgICAgICBjb25zdCByb3dJRCA9IGV2ZW50LnJvd0lEO1xuICAgICAqICAgICAgfVxuICAgICAqIGBgYFxuXHQgKiBAbWVtYmVyb2YgSWd4R3JpZEJhc2VDb21wb25lbnRcbiAgICAgKi9cbiAgICBAT3V0cHV0KClcbiAgICBwdWJsaWMgb25Sb3dFZGl0Q2FuY2VsID0gbmV3IEV2ZW50RW1pdHRlcjxJR3JpZEVkaXRFdmVudEFyZ3M+KCk7XG5cbiAgICAvKipcbiAgICAgKiBFbWl0dGVkIHdoZW4gYSBncmlkIGNvbHVtbiBpcyBpbml0aWFsaXplZC4gUmV0dXJucyB0aGUgY29sdW1uIG9iamVjdC5cbiAgICAgKiBgYGBodG1sXG4gICAgICogPGlneC1ncmlkICNncmlkIFtkYXRhXT1cImxvY2FsRGF0YVwiIFtvbkNvbHVtbkluaXRdPVwiaW5pdENvbHVtbnMoJGV2ZW50KVwiIFthdXRvR2VuZXJhdGVdPVwidHJ1ZVwiPjwvaWd4LWdyaWQ+XG4gICAgICogYGBgXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGluaXRDb2x1bW5zKGV2ZW50OiBJZ3hDb2x1bW5Db21wb25lbnQpIHtcbiAgICAgKiBjb25zdCBjb2x1bW46IElneENvbHVtbkNvbXBvbmVudCA9IGV2ZW50O1xuICAgICAqICAgICAgIGNvbHVtbi5maWx0ZXJhYmxlID0gdHJ1ZTtcbiAgICAgKiAgICAgICBjb2x1bW4uc29ydGFibGUgPSB0cnVlO1xuICAgICAqICAgICAgIGNvbHVtbi5lZGl0YWJsZSA9IHRydWU7XG4gICAgICogfVxuICAgICAqIGBgYFxuXHQgKiBAbWVtYmVyb2YgSWd4R3JpZEJhc2VDb21wb25lbnRcbiAgICAgKi9cbiAgICBAT3V0cHV0KClcbiAgICBwdWJsaWMgb25Db2x1bW5Jbml0ID0gbmV3IEV2ZW50RW1pdHRlcjxJZ3hDb2x1bW5Db21wb25lbnQ+KCk7XG5cbiAgICAvKipcbiAgICAgKiBFbWl0dGVkIHdoZW4gc29ydGluZyBpcyBwZXJmb3JtZWQgdGhyb3VnaCB0aGUgVUkuIFJldHVybnMgdGhlIHNvcnRpbmcgZXhwcmVzc2lvbi5cbiAgICAgKiBgYGBodG1sXG4gICAgICogPGlneC1ncmlkICNncmlkIFtkYXRhXT1cImxvY2FsRGF0YVwiIFthdXRvR2VuZXJhdGVdPVwidHJ1ZVwiIChvblNvcnRpbmdEb25lKT1cInNvcnRpbmdEb25lKCRldmVudClcIj48L2lneC1ncmlkPlxuICAgICAqIGBgYFxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBzb3J0aW5nRG9uZShldmVudDogU29ydGluZ0RpcmVjdGlvbil7XG4gICAgICogICAgIGNvbnN0IHNvcnRpbmdEaXJlY3Rpb24gPSBldmVudDtcbiAgICAgKiB9XG4gICAgICogYGBgXG5cdCAqIEBtZW1iZXJvZiBJZ3hHcmlkQmFzZUNvbXBvbmVudFxuICAgICAqL1xuICAgIEBPdXRwdXQoKVxuICAgIHB1YmxpYyBvblNvcnRpbmdEb25lID0gbmV3IEV2ZW50RW1pdHRlcjxJU29ydGluZ0V4cHJlc3Npb24gfCBBcnJheTxJU29ydGluZ0V4cHJlc3Npb24+PigpO1xuXG4gICAgLyoqXG4gICAgICogRW1pdHRlZCB3aGVuIGZpbHRlcmluZyBpcyBwZXJmb3JtZWQgdGhyb3VnaCB0aGUgVUkuXG4gICAgICogUmV0dXJucyB0aGUgZmlsdGVyaW5nIGV4cHJlc3Npb25zIHRyZWUgb2YgdGhlIGNvbHVtbiBmb3Igd2hpY2ggZmlsdGVyaW5nIHdhcyBwZXJmb3JtZWQuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGZpbHRlcmluZ0RvbmUoZXZlbnQ6IElGaWx0ZXJpbmdFeHByZXNzaW9uc1RyZWUpe1xuICAgICAqICAgICBjb25zdCBmaWx0ZXJpbmdUcmVlID0gZXZlbnQ7XG4gICAgICp9XG4gICAgICogYGBgXG4gICAgICogYGBgaHRtbFxuICAgICAqIDxpZ3gtZ3JpZCAjZ3JpZCBbZGF0YV09XCJsb2NhbERhdGFcIiBbaGVpZ2h0XT1cIiczMDVweCdcIiBbYXV0b0dlbmVyYXRlXT1cInRydWVcIiAob25GaWx0ZXJpbmdEb25lKT1cImZpbHRlcmluZ0RvbmUoJGV2ZW50KVwiPjwvaWd4LWdyaWQ+XG4gICAgICogYGBgXG5cdCAqIEBtZW1iZXJvZiBJZ3hHcmlkQmFzZUNvbXBvbmVudFxuICAgICAqL1xuICAgIEBPdXRwdXQoKVxuICAgIHB1YmxpYyBvbkZpbHRlcmluZ0RvbmUgPSBuZXcgRXZlbnRFbWl0dGVyPElGaWx0ZXJpbmdFeHByZXNzaW9uc1RyZWU+KCk7XG5cbiAgICAvKipcbiAgICAgKiBFbWl0dGVkIHdoZW4gcGFnaW5nIGlzIHBlcmZvcm1lZC4gUmV0dXJucyBhbiBvYmplY3QgY29uc2lzdGluZyBvZiB0aGUgcHJldmlvdXMgYW5kIG5leHQgcGFnZXMuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIHBhZ2luZ0RvbmUoZXZlbnQ6IElQYWdlRXZlbnRBcmdzKXtcbiAgICAgKiAgICAgY29uc3QgcGFnaW5nID0gZXZlbnQ7XG4gICAgICogfVxuICAgICAqIGBgYFxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8aWd4LWdyaWQgI2dyaWQgW2RhdGFdPVwibG9jYWxEYXRhXCIgW2hlaWdodF09XCInMzA1cHgnXCIgW2F1dG9HZW5lcmF0ZV09XCJ0cnVlXCIgKG9uUGFnaW5nRG9uZSk9XCJwYWdpbmdEb25lKCRldmVudClcIj48L2lneC1ncmlkPlxuICAgICAqIGBgYFxuXHQgKiBAbWVtYmVyb2YgSWd4R3JpZEJhc2VDb21wb25lbnRcbiAgICAgKi9cbiAgICBAT3V0cHV0KClcbiAgICBwdWJsaWMgb25QYWdpbmdEb25lID0gbmV3IEV2ZW50RW1pdHRlcjxJUGFnZUV2ZW50QXJncz4oKTtcblxuICAgIC8qKlxuICAgICAqIEVtaXR0ZWQgd2hlbiBhIGBJZ3hHcmlkUm93Q29tcG9uZW50YCBpcyBiZWluZyBhZGRlZCB0byB0aGUgYElneEdyaWRDb21wb25lbnRgIHRocm91Z2ggdGhlIEFQSS5cbiAgICAgKiBSZXR1cm5zIHRoZSBkYXRhIGZvciB0aGUgbmV3IGBJZ3hHcmlkUm93Q29tcG9uZW50YCBvYmplY3QuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIHJvd0FkZGVkKGV2ZW50OiBJUm93RGF0YUV2ZW50QXJncyl7XG4gICAgICogICAgY29uc3Qgcm93SW5mbyA9IGV2ZW50O1xuICAgICAqIH1cbiAgICAgKiBgYGBcbiAgICAgKiBgYGBodG1sXG4gICAgICogPGlneC1ncmlkICNncmlkIFtkYXRhXT1cImxvY2FsRGF0YVwiIChvblJvd0FkZGVkKT1cInJvd0FkZGVkKCRldmVudClcIiBbaGVpZ2h0XT1cIiczMDVweCdcIiBbYXV0b0dlbmVyYXRlXT1cInRydWVcIj48L2lneC1ncmlkPlxuICAgICAqIGBgYFxuXHQgKiBAbWVtYmVyb2YgSWd4R3JpZEJhc2VDb21wb25lbnRcbiAgICAgKi9cbiAgICBAT3V0cHV0KClcbiAgICBwdWJsaWMgb25Sb3dBZGRlZCA9IG5ldyBFdmVudEVtaXR0ZXI8SVJvd0RhdGFFdmVudEFyZ3M+KCk7XG5cbiAgICAvKipcbiAgICAgKiBFbWl0dGVkIHdoZW4gYSBgSWd4R3JpZFJvd0NvbXBvbmVudGAgaXMgZGVsZXRlZCB0aHJvdWdoIHRoZSBgSWd4R3JpZENvbXBvbmVudGAgQVBJLlxuICAgICAqIFJldHVybnMgYW4gYElSb3dEYXRhRXZlbnRBcmdzYCBvYmplY3QuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIHJvd0RlbGV0ZWQoZXZlbnQ6IElSb3dEYXRhRXZlbnRBcmdzKXtcbiAgICAgKiAgICBjb25zdCByb3dJbmZvID0gZXZlbnQ7XG4gICAgICogfVxuICAgICAqIGBgYFxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8aWd4LWdyaWQgI2dyaWQgW2RhdGFdPVwibG9jYWxEYXRhXCIgKG9uUm93RGVsZXRlZCk9XCJyb3dEZWxldGVkKCRldmVudClcIiBbaGVpZ2h0XT1cIiczMDVweCdcIiBbYXV0b0dlbmVyYXRlXT1cInRydWVcIj48L2lneC1ncmlkPlxuICAgICAqIGBgYFxuXHQgKiBAbWVtYmVyb2YgSWd4R3JpZEJhc2VDb21wb25lbnRcbiAgICAgKi9cbiAgICBAT3V0cHV0KClcbiAgICBwdWJsaWMgb25Sb3dEZWxldGVkID0gbmV3IEV2ZW50RW1pdHRlcjxJUm93RGF0YUV2ZW50QXJncz4oKTtcblxuICAgIC8qKlxuICAgICAqIEVtaXR0ZWQgd2hlbiBhIG5ldyBjaHVuayBvZiBkYXRhIGlzIGxvYWRlZCBmcm9tIHZpcnR1YWxpemF0aW9uLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiAgPGlneC1ncmlkICNncmlkIFtkYXRhXT1cImxvY2FsRGF0YVwiIFthdXRvR2VuZXJhdGVdPVwidHJ1ZVwiIChvbkRhdGFQcmVMb2FkKT0naGFuZGxlRGF0YVByZWxvYWRFdmVudCgpJz48L2lneC1ncmlkPlxuICAgICAqIGBgYFxuXHQgKiBAbWVtYmVyb2YgSWd4R3JpZEJhc2VDb21wb25lbnRcbiAgICAgKi9cbiAgICBAT3V0cHV0KClcbiAgICBwdWJsaWMgb25EYXRhUHJlTG9hZCA9IG5ldyBFdmVudEVtaXR0ZXI8SUZvck9mU3RhdGU+KCk7XG5cbiAgICAvKipcbiAgICAgKiBFbWl0dGVkIHdoZW4gYElneENvbHVtbkNvbXBvbmVudGAgaXMgcmVzaXplZC5cbiAgICAgKiBSZXR1cm5zIHRoZSBgSWd4Q29sdW1uQ29tcG9uZW50YCBvYmplY3QncyBvbGQgYW5kIG5ldyB3aWR0aC5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogcmVzaXppbmcoZXZlbnQ6IElDb2x1bW5SZXNpemVFdmVudEFyZ3Mpe1xuICAgICAqICAgICBjb25zdCBncm91cGluZyA9IGV2ZW50O1xuICAgICAqIH1cbiAgICAgKiBgYGBcbiAgICAgKiBgYGBodG1sXG4gICAgICogPGlneC1ncmlkICNncmlkIFtkYXRhXT1cImxvY2FsRGF0YVwiIChvbkNvbHVtblJlc2l6ZWQpPVwicmVzaXppbmcoJGV2ZW50KVwiIFthdXRvR2VuZXJhdGVdPVwidHJ1ZVwiPjwvaWd4LWdyaWQ+XG4gICAgICogYGBgXG5cdCAqIEBtZW1iZXJvZiBJZ3hHcmlkQmFzZUNvbXBvbmVudFxuICAgICAqL1xuICAgIEBPdXRwdXQoKVxuICAgIHB1YmxpYyBvbkNvbHVtblJlc2l6ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPElDb2x1bW5SZXNpemVFdmVudEFyZ3M+KCk7XG5cbiAgICAvKipcbiAgICAgKiBFbWl0dGVkIHdoZW4gYSBgSWd4R3JpZENlbGxDb21wb25lbnRgIGlzIHJpZ2h0IGNsaWNrZWQuIFJldHVybnMgdGhlIGBJZ3hHcmlkQ2VsbENvbXBvbmVudGAgb2JqZWN0LlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBjb250ZXh0TWVudShldmVudDogSUdyaWRDZWxsRXZlbnRBcmdzKXtcbiAgICAgKiAgICAgY29uc3QgcmVzaXppbmcgPSBldmVudDtcbiAgICAgKiAgICAgY29uc29sZS5sb2cocmVzaXppbmcpO1xuICAgICAqIH1cbiAgICAgKiBgYGBcbiAgICAgKiBgYGBodG1sXG4gICAgICogPGlneC1ncmlkICNncmlkIFtkYXRhXT1cImxvY2FsRGF0YVwiIChvbkNvbnRleHRNZW51KT1cImNvbnRleHRNZW51KCRldmVudClcIiBbYXV0b0dlbmVyYXRlXT1cInRydWVcIj48L2lneC1ncmlkPlxuICAgICAqIGBgYFxuXHQgKiBAbWVtYmVyb2YgSWd4R3JpZEJhc2VDb21wb25lbnRcbiAgICAgKi9cbiAgICBAT3V0cHV0KClcbiAgICBwdWJsaWMgb25Db250ZXh0TWVudSA9IG5ldyBFdmVudEVtaXR0ZXI8SUdyaWRDZWxsRXZlbnRBcmdzPigpO1xuXG4gICAgLyoqXG4gICAgICogRW1pdHRlZCB3aGVuIGEgYElneEdyaWRDZWxsQ29tcG9uZW50YCBpcyBkb3VibGUgY2xpY2tlZC4gUmV0dXJucyB0aGUgYElneEdyaWRDZWxsQ29tcG9uZW50YCBvYmplY3QuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGRibENsaWNrKGV2ZW50OiBJR3JpZENlbGxFdmVudEFyZ3Mpe1xuICAgICAqICAgICBjb25zdCBkYmxDbGljayA9IGV2ZW50O1xuICAgICAqICAgICBjb25zb2xlLmxvZyhkYmxDbGljayk7XG4gICAgICogfVxuICAgICAqIGBgYFxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8aWd4LWdyaWQgI2dyaWQgW2RhdGFdPVwibG9jYWxEYXRhXCIgKG9uRG91YmxlQ2xpY2spPVwiZGJsQ2xpY2soJGV2ZW50KVwiIFthdXRvR2VuZXJhdGVdPVwidHJ1ZVwiPjwvaWd4LWdyaWQ+XG4gICAgICogYGBgXG5cdCAqIEBtZW1iZXJvZiBJZ3hHcmlkQmFzZUNvbXBvbmVudFxuICAgICAqL1xuICAgIEBPdXRwdXQoKVxuICAgIHB1YmxpYyBvbkRvdWJsZUNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxJR3JpZENlbGxFdmVudEFyZ3M+KCk7XG5cbiAgICAvKipcbiAgICAgKiBFbWl0dGVkIHdoZW4gYElneENvbHVtbkNvbXBvbmVudGAgdmlzaWJpbGl0eSBpcyBjaGFuZ2VkLiBBcmdzOiB7IGNvbHVtbjogYW55LCBuZXdWYWx1ZTogYm9vbGVhbiB9XG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIHZpc2liaWxpdHlDaGFuZ2VkKGV2ZW50OiBJQ29sdW1uVmlzaWJpbGl0eUNoYW5nZWRFdmVudEFyZ3Mpe1xuICAgICAqICAgIGNvbnN0IHZpc2libGl0eSA9IGV2ZW50O1xuICAgICAqIH1cbiAgICAgKiBgYGBcbiAgICAgKiBgYGBodG1sXG4gICAgICogPGlneC1ncmlkIFtjb2x1bW5IaWRpbmddPVwidHJ1ZVwiIFtzaG93VG9vbGJhcl09XCJ0cnVlXCIgKG9uQ29sdW1uVmlzaWJpbGl0eUNoYW5nZWQpPVwidmlzaWJpbGl0eUNoYW5nZWQoJGV2ZW50KVwiPjwvaWd4LWdyaWQ+XG4gICAgICogYGBgXG5cdCAqIEBtZW1iZXJvZiBJZ3hHcmlkQmFzZUNvbXBvbmVudFxuICAgICAqL1xuICAgIEBPdXRwdXQoKVxuICAgIHB1YmxpYyBvbkNvbHVtblZpc2liaWxpdHlDaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcjxJQ29sdW1uVmlzaWJpbGl0eUNoYW5nZWRFdmVudEFyZ3M+KCk7XG5cbiAgICAvKipcbiAgICAgKiBFbWl0dGVkIHdoZW4gYElneENvbHVtbkNvbXBvbmVudGAgbW92aW5nIHN0YXJ0cy4gUmV0dXJucyB0aGUgbW92ZWQgYElneENvbHVtbkNvbXBvbmVudGAgb2JqZWN0LlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBtb3ZpbmdTdGFydChldmVudDogSUNvbHVtbk1vdmluZ1N0YXJ0RXZlbnRBcmdzKXtcbiAgICAgKiAgICAgY29uc3QgbW92aW5nU3RhcnRzID0gZXZlbnQ7XG4gICAgICogfVxuICAgICAqIGBgYFxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8aWd4LWdyaWQgW2NvbHVtbkhpZGluZ109XCJ0cnVlXCIgW3Nob3dUb29sYmFyXT1cInRydWVcIiAob25Db2x1bW5Nb3ZpbmdTdGFydCk9XCJtb3ZpbmdTdGFydCgkZXZlbnQpXCI+PC9pZ3gtZ3JpZD5cbiAgICAgKiBgYGBcblx0ICogQG1lbWJlcm9mIElneEdyaWRCYXNlQ29tcG9uZW50XG4gICAgICovXG4gICAgQE91dHB1dCgpXG4gICAgcHVibGljIG9uQ29sdW1uTW92aW5nU3RhcnQgPSBuZXcgRXZlbnRFbWl0dGVyPElDb2x1bW5Nb3ZpbmdTdGFydEV2ZW50QXJncz4oKTtcblxuICAgIC8qKlxuICAgICAqIEVtaXR0ZWQgdGhyb3VnaG91dCB0aGUgYElneENvbHVtbkNvbXBvbmVudGAgbW92aW5nIG9wZXJhdGlvbi5cbiAgICAgKiBSZXR1cm5zIHRoZSBzb3VyY2UgYW5kIHRhcmdldCBgSWd4Q29sdW1uQ29tcG9uZW50YCBvYmplY3RzLiBUaGlzIGV2ZW50IGlzIGNhbmNlbGFibGUuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIG1vdmluZyhldmVudDogSUNvbHVtbk1vdmluZ0V2ZW50QXJncyl7XG4gICAgICogICAgIGNvbnN0IG1vdmluZyA9IGV2ZW50O1xuICAgICAqIH1cbiAgICAgKiBgYGBcbiAgICAgKiBgYGBodG1sXG4gICAgICogPGlneC1ncmlkIFtjb2x1bW5IaWRpbmddPVwidHJ1ZVwiIFtzaG93VG9vbGJhcl09XCJ0cnVlXCIgKG9uQ29sdW1uTW92aW5nKT1cIm1vdmluZygkZXZlbnQpXCI+PC9pZ3gtZ3JpZD5cbiAgICAgKiBgYGBcblx0ICogQG1lbWJlcm9mIElneEdyaWRCYXNlQ29tcG9uZW50XG4gICAgICovXG4gICAgQE91dHB1dCgpXG4gICAgcHVibGljIG9uQ29sdW1uTW92aW5nID0gbmV3IEV2ZW50RW1pdHRlcjxJQ29sdW1uTW92aW5nRXZlbnRBcmdzPigpO1xuXG4gICAgLyoqXG4gICAgICogRW1pdHRlZCB3aGVuIGBJZ3hDb2x1bW5Db21wb25lbnRgIG1vdmluZyBlbmRzLlxuICAgICAqIFJldHVybnMgdGhlIHNvdXJjZSBhbmQgdGFyZ2V0IGBJZ3hDb2x1bW5Db21wb25lbnRgIG9iamVjdHMuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIG1vdmluZ0VuZHMoZXZlbnQ6IElDb2x1bW5Nb3ZpbmdFbmRFdmVudEFyZ3Mpe1xuICAgICAqICAgICBjb25zdCBtb3ZpbmdFbmRzID0gZXZlbnQ7XG4gICAgICogfVxuICAgICAqIGBgYFxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8aWd4LWdyaWQgW2NvbHVtbkhpZGluZ109XCJ0cnVlXCIgW3Nob3dUb29sYmFyXT1cInRydWVcIiAob25Db2x1bW5Nb3ZpbmdFbmQpPVwibW92aW5nRW5kcygkZXZlbnQpXCI+PC9pZ3gtZ3JpZD5cbiAgICAgKiBgYGBcblx0ICogQG1lbWJlcm9mIElneEdyaWRCYXNlQ29tcG9uZW50XG4gICAgICovXG4gICAgQE91dHB1dCgpXG4gICAgcHVibGljIG9uQ29sdW1uTW92aW5nRW5kID0gbmV3IEV2ZW50RW1pdHRlcjxJQ29sdW1uTW92aW5nRW5kRXZlbnRBcmdzPigpO1xuXG4gICAgLyoqXG4gICAgICogQGRlcHJlY2F0ZWQgeW91IHNob3VsZCB1c2Ugb25HcmlkS2V5ZG93biBldmVudFxuICAgICAqL1xuICAgIEBPdXRwdXQoKVxuICAgIEBEZXByZWNhdGVQcm9wZXJ0eSgnb25Gb2N1c0NoYW5nZSBldmVudCBpcyBkZXByZWNhdGVkLiBVc2Ugb25HcmlkS2V5ZG93biBldmVudCBpbnN0ZWFkLicpXG4gICAgcHVibGljIGdldCBvbkZvY3VzQ2hhbmdlKCk6IEV2ZW50RW1pdHRlcjxJRm9jdXNDaGFuZ2VFdmVudEFyZ3M+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX29uRm9jdXNDaGFuZ2U7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBvbkZvY3VzQ2hhbmdlKHZhbDogRXZlbnRFbWl0dGVyPElGb2N1c0NoYW5nZUV2ZW50QXJncz4pIHtcbiAgICAgICAgdGhpcy5fb25Gb2N1c0NoYW5nZSA9IHZhbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBFbWl0dGVkIHdoZW4ga2V5ZG93biBpcyB0cmlnZ2VyZWQgb3ZlciBlbGVtZW50IGluc2lkZSBncmlkJ3MgYm9keS5cbiAgICAgKiBUaGlzIGV2ZW50IGlzIGZpcmVkIG9ubHkgaWYgdGhlIGtleSBjb21iaW5hdGlvbiBpcyBzdXBwb3J0ZWQgaW4gdGhlIGdyaWQuXG4gICAgICogUmV0dXJuIHRoZSB0YXJnZXQgdHlwZSwgdGFyZ2V0IG9iamVjdCBhbmQgdGhlIG9yaWdpbmFsIGV2ZW50LiBUaGlzIGV2ZW50IGlzIGNhbmNlbGFibGUuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGN1c3RvbUtleWRvd24oYXJnczogSUdyaWRLZXlkb3duRXZlbnRBcmdzKSB7XG4gICAgICogIGNvbnN0IGtleWRvd25FdmVudCA9IGFyZ3MuZXZlbnQ7XG4gICAgICogfVxuICAgICAqIGBgYFxuICAgICAqIGBgYGh0bWxcbiAgICAgKiAgPGlneC1ncmlkIChvbkdyaWRLZXlkb3duKT1cImN1c3RvbUtleWRvd24oJGV2ZW50KVwiPjwvaWd4LWdyaWQ+XG4gICAgICogYGBgXG4gICAgICovXG4gICAgQE91dHB1dCgpXG4gICAgcHVibGljIG9uR3JpZEtleWRvd24gPSBuZXcgRXZlbnRFbWl0dGVyPElHcmlkS2V5ZG93bkV2ZW50QXJncz4oKTtcblxuICAgIC8qKlxuICAgICAqIEVtaXR0ZWQgd2hlbiBzdGFydCBkcmFnZ2luZyBhIHJvdy5cbiAgICAgKiBSZXR1cm4gdGhlIGRyYWdnZWQgcm93LlxuICAgICAqL1xuICAgIEBPdXRwdXQoKVxuICAgIHB1YmxpYyBvblJvd0RyYWdTdGFydCA9IG5ldyBFdmVudEVtaXR0ZXI8SVJvd0RyYWdTdGFydEV2ZW50QXJncz4oKTtcblxuICAgIC8qKlxuICAgICAqIEVtaXR0ZWQgd2hlbiBkcm9wcGluZyBhIHJvdy5cbiAgICAgKiBSZXR1cm4gdGhlIGRyb3BwZWQgcm93LlxuICAgICAqL1xuICAgIEBPdXRwdXQoKVxuICAgIHB1YmxpYyBvblJvd0RyYWdFbmQgPSBuZXcgRXZlbnRFbWl0dGVyPElSb3dEcmFnRW5kRXZlbnRBcmdzPigpO1xuXG4gICAgLyoqXG4gICAgICogRW1pdHRlZCB3aGVuIGEgY29weSBvcGVyYXRpb24gaXMgZXhlY3V0ZWQuXG4gICAgICogRmlyZWQgb25seSBpZiBjb3B5IGJlaGF2aW9yIGlzIGVuYWJsZWQgdGhyb3VnaCB0aGUgW2BjbGlwYm9hcmRPcHRpb25zYF17QGxpbmsgSWd4R3JpZEJhc2VDb21wb25lbnQjY2xpcGJvYXJkT3B0aW9uc30uXG4gICAgICovXG4gICAgQE91dHB1dCgpXG4gICAgb25HcmlkQ29weSA9IG5ldyBFdmVudEVtaXR0ZXI8SUdyaWRDbGlwYm9hcmRFdmVudD4oKTtcblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBAVmlld0NoaWxkKElneEdyaWRDb2x1bW5SZXNpemVyQ29tcG9uZW50LCB7IHN0YXRpYzogZmFsc2UgfSlcbiAgICBwdWJsaWMgcmVzaXplTGluZTogSWd4R3JpZENvbHVtblJlc2l6ZXJDb21wb25lbnQ7XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgQENvbnRlbnRDaGlsZHJlbihJZ3hDb2x1bW5Db21wb25lbnQsIHsgcmVhZDogSWd4Q29sdW1uQ29tcG9uZW50LCBkZXNjZW5kYW50czogdHJ1ZSB9KVxuICAgIHB1YmxpYyBjb2x1bW5MaXN0OiBRdWVyeUxpc3Q8SWd4Q29sdW1uQ29tcG9uZW50PjtcblxuICAgIC8qKlxuICAgICAqQGhpZGRlblxuICAgICAqL1xuICAgIEBDb250ZW50Q2hpbGQoSWd4RXhjZWxTdHlsZVNvcnRpbmdUZW1wbGF0ZURpcmVjdGl2ZSwgeyByZWFkOiBJZ3hFeGNlbFN0eWxlU29ydGluZ1RlbXBsYXRlRGlyZWN0aXZlLCBzdGF0aWM6IHRydWUgfSlcbiAgICBwdWJsaWMgZXhjZWxTdHlsZVNvcnRpbmdUZW1wbGF0ZURpcmVjdGl2ZTogSWd4RXhjZWxTdHlsZVNvcnRpbmdUZW1wbGF0ZURpcmVjdGl2ZTtcblxuICAgIC8qKlxuICAgICAqQGhpZGRlblxuICAgICAqL1xuICAgIEBDb250ZW50Q2hpbGQoSWd4RXhjZWxTdHlsZU1vdmluZ1RlbXBsYXRlRGlyZWN0aXZlLCB7IHJlYWQ6IElneEV4Y2VsU3R5bGVNb3ZpbmdUZW1wbGF0ZURpcmVjdGl2ZSwgc3RhdGljOiB0cnVlIH0pXG4gICAgcHVibGljIGV4Y2VsU3R5bGVNb3ZpbmdUZW1wbGF0ZURpcmVjdGl2ZTogSWd4RXhjZWxTdHlsZU1vdmluZ1RlbXBsYXRlRGlyZWN0aXZlO1xuXG4gICAgLyoqXG4gICAgICpAaGlkZGVuXG4gICAgICovXG4gICAgQENvbnRlbnRDaGlsZChJZ3hFeGNlbFN0eWxlSGlkaW5nVGVtcGxhdGVEaXJlY3RpdmUsIHsgcmVhZDogSWd4RXhjZWxTdHlsZUhpZGluZ1RlbXBsYXRlRGlyZWN0aXZlLCBzdGF0aWM6IHRydWUgfSlcbiAgICBwdWJsaWMgZXhjZWxTdHlsZUhpZGluZ1RlbXBsYXRlRGlyZWN0aXZlOiBJZ3hFeGNlbFN0eWxlSGlkaW5nVGVtcGxhdGVEaXJlY3RpdmU7XG5cbiAgICAvKipcbiAgICAgKkBoaWRkZW5cbiAgICAgKi9cbiAgICBAQ29udGVudENoaWxkKElneEV4Y2VsU3R5bGVQaW5uaW5nVGVtcGxhdGVEaXJlY3RpdmUsIHsgcmVhZDogSWd4RXhjZWxTdHlsZVBpbm5pbmdUZW1wbGF0ZURpcmVjdGl2ZSwgc3RhdGljOiB0cnVlIH0pXG4gICAgcHVibGljIGV4Y2VsU3R5bGVQaW5uaW5nVGVtcGxhdGVEaXJlY3RpdmU6IElneEV4Y2VsU3R5bGVQaW5uaW5nVGVtcGxhdGVEaXJlY3RpdmU7XG5cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBAVmlld0NoaWxkcmVuKElneEdyaWRIZWFkZXJHcm91cENvbXBvbmVudCwgeyByZWFkOiBJZ3hHcmlkSGVhZGVyR3JvdXBDb21wb25lbnQgfSlcbiAgICBwdWJsaWMgaGVhZGVyR3JvdXBzOiBRdWVyeUxpc3Q8SWd4R3JpZEhlYWRlckdyb3VwQ29tcG9uZW50PjtcblxuICAgIC8qKlxuICAgICAqIEEgbGlzdCBvZiBhbGwgYElneEdyaWRIZWFkZXJHcm91cENvbXBvbmVudGAuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGNvbnN0IGhlYWRlckdyb3Vwc0xpc3QgPSB0aGlzLmdyaWQuaGVhZGVyR3JvdXBzTGlzdDtcbiAgICAgKiBgYGBcblx0ICogQG1lbWJlcm9mIElneEdyaWRCYXNlQ29tcG9uZW50XG4gICAgICovXG4gICAgZ2V0IGhlYWRlckdyb3Vwc0xpc3QoKTogSWd4R3JpZEhlYWRlckdyb3VwQ29tcG9uZW50W10ge1xuICAgICAgICByZXR1cm4gdGhpcy5oZWFkZXJHcm91cHMgPyBmbGF0dGVuKHRoaXMuaGVhZGVyR3JvdXBzLnRvQXJyYXkoKSkgOiBbXTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBIGxpc3Qgb2YgYWxsIGBJZ3hHcmlkSGVhZGVyQ29tcG9uZW50YC5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogY29uc3QgaGVhZGVycyA9IHRoaXMuZ3JpZC5oZWFkZXJDZWxsTGlzdDtcbiAgICAgKiBgYGBcblx0ICogQG1lbWJlcm9mIElneEdyaWRCYXNlQ29tcG9uZW50XG4gICAgICovXG4gICAgZ2V0IGhlYWRlckNlbGxMaXN0KCk6IElneEdyaWRIZWFkZXJDb21wb25lbnRbXSB7XG4gICAgICAgIHJldHVybiB0aGlzLmhlYWRlckdyb3Vwc0xpc3QubWFwKChoZWFkZXJHcm91cCkgPT4gaGVhZGVyR3JvdXAuaGVhZGVyQ2VsbCkuZmlsdGVyKChoZWFkZXJDZWxsKSA9PiBoZWFkZXJDZWxsKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBIGxpc3Qgb2YgYWxsIGBJZ3hHcmlkRmlsdGVyaW5nQ2VsbENvbXBvbmVudGAuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGNvbnN0IGZpbHRlckNlbGxzID0gdGhpcy5ncmlkLmZpbHRlckNlbGxMaXN0O1xuICAgICAqIGBgYFxuXHQgKiBAbWVtYmVyb2YgSWd4R3JpZEJhc2VDb21wb25lbnRcbiAgICAgKi9cbiAgICBnZXQgZmlsdGVyQ2VsbExpc3QoKTogSWd4R3JpZEZpbHRlcmluZ0NlbGxDb21wb25lbnRbXSB7XG4gICAgICAgIHJldHVybiB0aGlzLmhlYWRlckdyb3Vwc0xpc3QubWFwKChoZWFkZXJHcm91cCkgPT4gaGVhZGVyR3JvdXAuZmlsdGVyQ2VsbCkuZmlsdGVyKChmaWx0ZXJDZWxsKSA9PiBmaWx0ZXJDZWxsKTtcbiAgICB9XG5cbiAgICBAVmlld0NoaWxkcmVuKCdyb3cnKVxuICAgIHByaXZhdGUgX3Jvd0xpc3Q6IFF1ZXJ5TGlzdDxJZ3hHcmlkUm93Q29tcG9uZW50PjtcblxuICAgIEBWaWV3Q2hpbGRyZW4oJ3N1bW1hcnlSb3cnLCB7IHJlYWQ6IElneFN1bW1hcnlSb3dDb21wb25lbnQgfSlcbiAgICBwcm90ZWN0ZWQgX3N1bW1hcnlSb3dMaXN0OiBRdWVyeUxpc3Q8SWd4U3VtbWFyeVJvd0NvbXBvbmVudD47XG5cbiAgICBwdWJsaWMgZ2V0IHN1bW1hcmllc1Jvd0xpc3QoKSB7XG4gICAgICAgIGNvbnN0IHJlcyA9IG5ldyBRdWVyeUxpc3Q8YW55PigpO1xuICAgICAgICBpZiAoIXRoaXMuX3N1bW1hcnlSb3dMaXN0KSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHN1bUxpc3QgPSB0aGlzLl9zdW1tYXJ5Um93TGlzdC5maWx0ZXIoKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIHJldHVybiBpdGVtLmVsZW1lbnQubmF0aXZlRWxlbWVudC5wYXJlbnRFbGVtZW50ICE9PSBudWxsO1xuICAgICAgICB9KTtcbiAgICAgICAgcmVzLnJlc2V0KHN1bUxpc3QpO1xuICAgICAgICByZXR1cm4gcmVzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEEgbGlzdCBvZiBgSWd4R3JpZFJvd0NvbXBvbmVudGAuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGNvbnN0IHJvd0xpc3QgPSB0aGlzLmdyaWQucm93TGlzdDtcbiAgICAgKiBgYGBcblx0ICogQG1lbWJlcm9mIElneEdyaWRCYXNlQ29tcG9uZW50XG4gICAgICovXG4gICAgcHVibGljIGdldCByb3dMaXN0KCkge1xuICAgICAgICBjb25zdCByZXMgPSBuZXcgUXVlcnlMaXN0PGFueT4oKTtcbiAgICAgICAgaWYgKCF0aGlzLl9yb3dMaXN0KSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJMaXN0ID0gdGhpcy5fcm93TGlzdFxuICAgICAgICAgICAgLmZpbHRlcigoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBpdGVtLmVsZW1lbnQubmF0aXZlRWxlbWVudC5wYXJlbnRFbGVtZW50ICE9PSBudWxsO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGEuaW5kZXggLSBiLmluZGV4O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIHJlcy5yZXNldChyTGlzdCk7XG4gICAgICAgIHJldHVybiByZXM7XG4gICAgfVxuXG4gICAgQFZpZXdDaGlsZHJlbihJZ3hSb3dDb21wb25lbnQsIHsgcmVhZDogSWd4Um93Q29tcG9uZW50IH0pXG4gICAgcHJpdmF0ZSBfZGF0YVJvd0xpc3Q6IFF1ZXJ5TGlzdDxJZ3hSb3dDb21wb25lbnQ8SWd4R3JpZEJhc2VDb21wb25lbnQ+PjtcblxuICAgIC8qKlxuICAgICAqIEEgbGlzdCBvZiBgSWd4R3JpZFJvd0NvbXBvbmVudGAsIGN1cnJlbnRseSByZW5kZXJlZC5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogY29uc3QgZGF0YUxpc3QgPSB0aGlzLmdyaWQuZGF0YVJvd0xpc3Q7XG4gICAgICogYGBgXG5cdCAqIEBtZW1iZXJvZiBJZ3hHcmlkQmFzZUNvbXBvbmVudFxuICAgICAqL1xuICAgIHB1YmxpYyBnZXQgZGF0YVJvd0xpc3QoKTogUXVlcnlMaXN0PElneFJvd0NvbXBvbmVudDxJZ3hHcmlkQmFzZUNvbXBvbmVudD4+IHtcbiAgICAgICAgY29uc3QgcmVzID0gbmV3IFF1ZXJ5TGlzdDxJZ3hSb3dDb21wb25lbnQ8SWd4R3JpZEJhc2VDb21wb25lbnQ+PigpO1xuICAgICAgICBpZiAoIXRoaXMuX2RhdGFSb3dMaXN0KSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJMaXN0ID0gdGhpcy5fZGF0YVJvd0xpc3QuZmlsdGVyKChpdGVtKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gaXRlbS5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQucGFyZW50RWxlbWVudCAhPT0gbnVsbDtcbiAgICAgICAgfSkuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGEuaW5kZXggLSBiLmluZGV4O1xuICAgICAgICB9KTtcbiAgICAgICAgcmVzLnJlc2V0KHJMaXN0KTtcbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBIHRlbXBsYXRlIHJlZmVyZW5jZSBmb3IgdGhlIHRlbXBsYXRlIHdoZW4gdGhlIGZpbHRlcmVkIGBJZ3hHcmlkQ29tcG9uZW50YCBpcyBlbXB0eS5cbiAgICAgKiBgYGBcbiAgICAgKiBjb25zdCBlbXB0eVRlbXBhbHRlID0gdGhpcy5ncmlkLmVtcHR5R3JpZFRlbXBsYXRlO1xuICAgICAqIGBgYFxuXHQgKiBAbWVtYmVyb2YgSWd4R3JpZEJhc2VDb21wb25lbnRcbiAgICAgKi9cbiAgICBAVmlld0NoaWxkKCdlbXB0eUZpbHRlcmVkR3JpZCcsIHsgcmVhZDogVGVtcGxhdGVSZWYsIHN0YXRpYzogdHJ1ZSB9KVxuICAgIHB1YmxpYyBlbXB0eUZpbHRlcmVkR3JpZFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gICAgLyoqXG4gICAgICogQSB0ZW1wbGF0ZSByZWZlcmVuY2UgZm9yIHRoZSB0ZW1wbGF0ZSB3aGVuIHRoZSBgSWd4R3JpZENvbXBvbmVudGAgaXMgZW1wdHkuXG4gICAgICogYGBgXG4gICAgICogY29uc3QgZW1wdHlUZW1wYWx0ZSA9IHRoaXMuZ3JpZC5lbXB0eUdyaWRUZW1wbGF0ZTtcbiAgICAgKiBgYGBcblx0ICogQG1lbWJlcm9mIElneEdyaWRCYXNlQ29tcG9uZW50XG4gICAgICovXG4gICAgQFZpZXdDaGlsZCgnZGVmYXVsdEVtcHR5R3JpZCcsIHsgcmVhZDogVGVtcGxhdGVSZWYsIHN0YXRpYzogdHJ1ZSB9KVxuICAgIHB1YmxpYyBlbXB0eUdyaWREZWZhdWx0VGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgICBAVmlld0NoaWxkKCdkZWZhdWx0TG9hZGluZ0dyaWQnLCB7IHJlYWQ6IFRlbXBsYXRlUmVmLCBzdGF0aWM6IHRydWUgfSlcbiAgICBwdWJsaWMgbG9hZGluZ0dyaWREZWZhdWx0VGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgQFZpZXdDaGlsZCgnc2Nyb2xsQ29udGFpbmVyJywgeyByZWFkOiBJZ3hHcmlkRm9yT2ZEaXJlY3RpdmUsIHN0YXRpYzogdHJ1ZSB9KVxuICAgIHB1YmxpYyBwYXJlbnRWaXJ0RGlyOiBJZ3hHcmlkRm9yT2ZEaXJlY3RpdmU8YW55PjtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHRlbXBsYXRlIHdoaWNoIHdpbGwgYmUgdXNlZCBieSB0aGUgdG9vbGJhciB0byBzaG93IGN1c3RvbSBjb250ZW50LlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBsZXQgY3VzdG9tQ29udGVudFRlbXBsYXRlID0gdGhpcy5ncmlkLnRvb2xiYXJDdXN0b21Db250ZW50VGVtcGxhdGU7XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneEdyaWRCYXNlQ29tcG9uZW50XG4gICAgICovXG4gICAgcHVibGljIGdldCB0b29sYmFyQ3VzdG9tQ29udGVudFRlbXBsYXRlKCk6IElneEdyaWRUb29sYmFyQ3VzdG9tQ29udGVudERpcmVjdGl2ZSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRvb2xiYXJDdXN0b21Db250ZW50VGVtcGxhdGVzLmZpcnN0O1xuICAgIH1cblxuICAgIEBDb250ZW50Q2hpbGRyZW4oSWd4R3JpZFRvb2xiYXJDdXN0b21Db250ZW50RGlyZWN0aXZlLCB7IHJlYWQ6IElneEdyaWRUb29sYmFyQ3VzdG9tQ29udGVudERpcmVjdGl2ZSwgZGVzY2VuZGFudHM6IGZhbHNlIH0pXG4gICAgcHVibGljIHRvb2xiYXJDdXN0b21Db250ZW50VGVtcGxhdGVzOiBRdWVyeUxpc3Q8SWd4R3JpZFRvb2xiYXJDdXN0b21Db250ZW50RGlyZWN0aXZlPjtcblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBAVmlld0NoaWxkKCd2ZXJ0aWNhbFNjcm9sbENvbnRhaW5lcicsIHsgcmVhZDogSWd4R3JpZEZvck9mRGlyZWN0aXZlLCBzdGF0aWM6IHRydWUgfSlcbiAgICBwdWJsaWMgdmVydGljYWxTY3JvbGxDb250YWluZXI6IElneEdyaWRGb3JPZkRpcmVjdGl2ZTxhbnk+O1xuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIEBWaWV3Q2hpbGQoJ3ZlcnRpY2FsU2Nyb2xsSG9sZGVyJywgeyByZWFkOiBJZ3hHcmlkRm9yT2ZEaXJlY3RpdmUsIHN0YXRpYzogdHJ1ZSB9KVxuICAgIHB1YmxpYyB2ZXJ0aWNhbFNjcm9sbDogSWd4R3JpZEZvck9mRGlyZWN0aXZlPGFueT47XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgQFZpZXdDaGlsZCgnc2NyJywgeyByZWFkOiBFbGVtZW50UmVmLCBzdGF0aWM6IHRydWUgfSlcbiAgICBwdWJsaWMgc2NyOiBFbGVtZW50UmVmO1xuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIEBWaWV3Q2hpbGQoJ2Zvb3RlcicsIHsgcmVhZDogRWxlbWVudFJlZiwgc3RhdGljOiBmYWxzZSB9KVxuICAgIHB1YmxpYyBmb290ZXI6IEVsZW1lbnRSZWY7XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgQFZpZXdDaGlsZCgnaGVhZGVyQ29udGFpbmVyJywgeyByZWFkOiBJZ3hHcmlkRm9yT2ZEaXJlY3RpdmUsIHN0YXRpYzogZmFsc2UgfSlcbiAgICBwdWJsaWMgaGVhZGVyQ29udGFpbmVyOiBJZ3hHcmlkRm9yT2ZEaXJlY3RpdmU8YW55PjtcblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBAVmlld0NoaWxkKCdoZWFkZXJDaGVja2JveENvbnRhaW5lcicsIHsgc3RhdGljOiBmYWxzZSB9KVxuICAgIHB1YmxpYyBoZWFkZXJDaGVja2JveENvbnRhaW5lcjogRWxlbWVudFJlZjtcblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBAVmlld0NoaWxkKCdoZWFkZXJEcmFnQ29udGFpbmVyJywgeyBzdGF0aWM6IGZhbHNlIH0pXG4gICAgcHVibGljIGhlYWRlckRyYWdDb250YWluZXI6IEVsZW1lbnRSZWY7XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgQFZpZXdDaGlsZCgnaGVhZGVyR3JvdXBDb250YWluZXInLCB7IHN0YXRpYzogZmFsc2UgfSlcbiAgICBwdWJsaWMgaGVhZGVyR3JvdXBDb250YWluZXI6IEVsZW1lbnRSZWY7XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgQFZpZXdDaGlsZCgnaGVhZGVyQ2hlY2tib3gnLCB7IHJlYWQ6IElneENoZWNrYm94Q29tcG9uZW50LCBzdGF0aWM6IGZhbHNlIH0pXG4gICAgcHVibGljIGhlYWRlckNoZWNrYm94OiBJZ3hDaGVja2JveENvbXBvbmVudDtcblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBAVmlld0NoaWxkKCdmaWx0ZXJpbmdSb3cnLCB7IHJlYWQ6IElneEdyaWRGaWx0ZXJpbmdSb3dDb21wb25lbnQsIHN0YXRpYzogZmFsc2UgfSlcbiAgICBwdWJsaWMgZmlsdGVyaW5nUm93OiBJZ3hHcmlkRmlsdGVyaW5nUm93Q29tcG9uZW50O1xuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIEBWaWV3Q2hpbGQoJ3RoZWFkUm93JywgeyBzdGF0aWM6IHRydWUgfSlcbiAgICBwdWJsaWMgdGhlYWRSb3c6IEVsZW1lbnRSZWY7XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgQFZpZXdDaGlsZCgndGJvZHknLCB7IHN0YXRpYzogdHJ1ZSB9KVxuICAgIHB1YmxpYyB0Ym9keTogRWxlbWVudFJlZjtcblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBAVmlld0NoaWxkKCd0Zm9vdCcsIHsgc3RhdGljOiB0cnVlIH0pXG4gICAgcHVibGljIHRmb290OiBFbGVtZW50UmVmO1xuXG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgQFZpZXdDaGlsZCgnaWd4RmlsdGVyaW5nT3ZlcmxheU91dGxldCcsIHsgcmVhZDogSWd4T3ZlcmxheU91dGxldERpcmVjdGl2ZSwgc3RhdGljOiB0cnVlIH0pXG4gICAgcHJvdGVjdGVkIF9vdXRsZXREaXJlY3RpdmU6IElneE92ZXJsYXlPdXRsZXREaXJlY3RpdmU7XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIGdldCBvdXRsZXREaXJlY3RpdmUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9vdXRsZXREaXJlY3RpdmU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIEBWaWV3Q2hpbGQoJ2lneFJvd0VkaXRpbmdPdmVybGF5T3V0bGV0JywgeyByZWFkOiBJZ3hPdmVybGF5T3V0bGV0RGlyZWN0aXZlLCBzdGF0aWM6IHRydWUgfSlcbiAgICBwdWJsaWMgcm93RWRpdGluZ091dGxldERpcmVjdGl2ZTogSWd4T3ZlcmxheU91dGxldERpcmVjdGl2ZTtcblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAqL1xuICAgIEBWaWV3Q2hpbGRyZW4oSWd4VGVtcGxhdGVPdXRsZXREaXJlY3RpdmUsIHsgcmVhZDogSWd4VGVtcGxhdGVPdXRsZXREaXJlY3RpdmUgfSlcbiAgICBwdWJsaWMgdG1wT3V0bGV0czogUXVlcnlMaXN0PGFueT47XG5cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0IHJvd091dGxldERpcmVjdGl2ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucm93RWRpdGluZ091dGxldERpcmVjdGl2ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIGdldCBwYXJlbnRSb3dPdXRsZXREaXJlY3RpdmUoKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKiBAaW50ZXJuYWxcbiAgICAgKi9cbiAgICBAVmlld0NoaWxkKCdkcmFnSW5kaWNhdG9ySWNvbkJhc2UnLCB7IHJlYWQ6IFRlbXBsYXRlUmVmLCBzdGF0aWM6IHRydWUgfSlcbiAgICBwdWJsaWMgZHJhZ0luZGljYXRvckljb25CYXNlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIEBWaWV3Q2hpbGQoJ2RlZmF1bHRSb3dFZGl0VGVtcGxhdGUnLCB7IHJlYWQ6IFRlbXBsYXRlUmVmLCBzdGF0aWM6IHRydWUgfSlcbiAgICBwcml2YXRlIGRlZmF1bHRSb3dFZGl0VGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIEBDb250ZW50Q2hpbGQoSWd4Um93RWRpdFRlbXBsYXRlRGlyZWN0aXZlLCB7IHJlYWQ6IFRlbXBsYXRlUmVmLCBzdGF0aWM6IHRydWUgfSlcbiAgICBwdWJsaWMgcm93RWRpdEN1c3RvbTogVGVtcGxhdGVSZWY8YW55PjtcblxuICAgIC8qKiBAaGlkZGVuICovXG4gICAgcHVibGljIGdldCByb3dFZGl0Q29udGFpbmVyKCk6IFRlbXBsYXRlUmVmPGFueT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yb3dFZGl0Q3VzdG9tID8gdGhpcy5yb3dFZGl0Q3VzdG9tIDogdGhpcy5kZWZhdWx0Um93RWRpdFRlbXBsYXRlO1xuICAgIH1cbiAgICAvKiogQGhpZGRlbiAqL1xuICAgIEBDb250ZW50Q2hpbGQoSWd4Um93RWRpdFRleHREaXJlY3RpdmUsIHsgcmVhZDogVGVtcGxhdGVSZWYsIHN0YXRpYzogdHJ1ZSB9KVxuICAgIHB1YmxpYyByb3dFZGl0VGV4dDogVGVtcGxhdGVSZWY8YW55PjtcbiAgICAvKiogQGhpZGRlbiAqL1xuICAgIEBDb250ZW50Q2hpbGQoSWd4Um93RWRpdEFjdGlvbnNEaXJlY3RpdmUsIHsgcmVhZDogVGVtcGxhdGVSZWYsIHN0YXRpYzogdHJ1ZSB9KVxuICAgIHB1YmxpYyByb3dFZGl0QWN0aW9uczogVGVtcGxhdGVSZWY8YW55PjtcblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0IHJvd0luRWRpdE1vZGUoKTogSWd4Um93Q29tcG9uZW50PElneEdyaWRCYXNlQ29tcG9uZW50ICYgSUdyaWREYXRhQmluZGFibGU+IHtcbiAgICAgICAgY29uc3QgZWRpdFJvd1N0YXRlID0gdGhpcy5jcnVkU2VydmljZS5yb3c7XG4gICAgICAgIHJldHVybiBlZGl0Um93U3RhdGUgIT09IG51bGwgPyB0aGlzLnJvd0xpc3QuZmluZChlID0+IGUucm93SUQgPT09IGVkaXRSb3dTdGF0ZS5pZCkgOiBudWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0IGZpcnN0RWRpdGFibGVDb2x1bW5JbmRleCgpOiBudW1iZXIge1xuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMubmF2aWdhdGlvbi5ncmlkT3JkZXJlZENvbHVtbnMuZmluZEluZGV4KGUgPT4gZS5lZGl0YWJsZSk7XG4gICAgICAgIHJldHVybiBpbmRleCAhPT0gLTEgPyBpbmRleCA6IG51bGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyBnZXQgbGFzdEVkaXRhYmxlQ29sdW1uSW5kZXgoKTogbnVtYmVyIHtcbiAgICAgICAgY29uc3Qgb3JkZXJlZENvbHVtbnMgPSB0aGlzLm5hdmlnYXRpb24uZ3JpZE9yZGVyZWRDb2x1bW5zO1xuICAgICAgICBjb25zdCBpbmRleCA9IG9yZGVyZWRDb2x1bW5zLnJldmVyc2UoKS5maW5kSW5kZXgoZSA9PiBlLmVkaXRhYmxlKTtcbiAgICAgICAgcmV0dXJuIGluZGV4ICE9PSAtMSA/IG9yZGVyZWRDb2x1bW5zLmxlbmd0aCAtIDEgLSBpbmRleCA6IG51bGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIEBWaWV3Q2hpbGRyZW4oSWd4Um93RWRpdFRhYlN0b3BEaXJlY3RpdmUpXG4gICAgcHVibGljIHJvd0VkaXRUYWJzREVGQVVMVDogUXVlcnlMaXN0PElneFJvd0VkaXRUYWJTdG9wRGlyZWN0aXZlPjtcblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBAQ29udGVudENoaWxkcmVuKElneFJvd0VkaXRUYWJTdG9wRGlyZWN0aXZlKVxuICAgIHB1YmxpYyByb3dFZGl0VGFic0NVU1RPTTogUXVlcnlMaXN0PElneFJvd0VkaXRUYWJTdG9wRGlyZWN0aXZlPjtcblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKiBUT0RPOiBOYXYgc2VydmljZSBsb2dpYyBkb2Vzbid0IGhhbmRsZSAwIHJlc3VsdHMgZnJvbSB0aGlzIHF1ZXJ5bGlzdFxuICAgICAqL1xuICAgIHB1YmxpYyBnZXQgcm93RWRpdFRhYnMoKTogUXVlcnlMaXN0PElneFJvd0VkaXRUYWJTdG9wRGlyZWN0aXZlPiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJvd0VkaXRUYWJzQ1VTVE9NLmxlbmd0aCA/IHRoaXMucm93RWRpdFRhYnNDVVNUT00gOiB0aGlzLnJvd0VkaXRUYWJzREVGQVVMVDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgQFZpZXdDaGlsZChJZ3hUb2dnbGVEaXJlY3RpdmUsIHsgc3RhdGljOiBmYWxzZSB9KVxuICAgIHB1YmxpYyByb3dFZGl0aW5nT3ZlcmxheTogSWd4VG9nZ2xlRGlyZWN0aXZlO1xuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIEBIb3N0QmluZGluZygnYXR0ci50YWJpbmRleCcpXG4gICAgcHVibGljIHRhYmluZGV4ID0gMDtcblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBASG9zdEJpbmRpbmcoJ2F0dHIuY2xhc3MnKVxuICAgIGdldCBob3N0Q2xhc3MoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0Q29tcG9uZW50RGVuc2l0eUNsYXNzKCdpZ3gtZ3JpZCcpO1xuICAgIH1cblxuICAgIGdldCBiYW5uZXJDbGFzcygpOiBzdHJpbmcge1xuICAgICAgICBjb25zdCBwb3NpdGlvbiA9IHRoaXMucm93RWRpdFBvc2l0aW9uaW5nU3RyYXRlZ3kuaXNUb3AgPyAnaWd4LWJhbm5lcl9fYm9yZGVyLXRvcCcgOiAnaWd4LWJhbm5lcl9fYm9yZGVyLWJvdHRvbSc7XG4gICAgICAgIHJldHVybiBgJHt0aGlzLmdldENvbXBvbmVudERlbnNpdHlDbGFzcygnaWd4LWJhbm5lcicpfSAke3Bvc2l0aW9ufWA7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIEBIb3N0QmluZGluZygnYXR0ci5yb2xlJylcbiAgICBwdWJsaWMgaG9zdFJvbGUgPSAnZ3JpZCc7XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgZ2V0IHBpcGVUcmlnZ2VyKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9waXBlVHJpZ2dlcjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgZ2V0IHN1bW1hcnlQaXBlVHJpZ2dlcigpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fc3VtbWFyeVBpcGVUcmlnZ2VyO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHNvcnRpbmcgc3RhdGUgb2YgdGhlIGBJZ3hHcmlkQ29tcG9uZW50YC5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogY29uc3Qgc29ydGluZ1N0YXRlID0gdGhpcy5ncmlkLnNvcnRpbmdFeHByZXNzaW9ucztcbiAgICAgKiBgYGBcblx0ICogQG1lbWJlcm9mIElneEdyaWRCYXNlQ29tcG9uZW50XG4gICAgICovXG4gICAgQFdhdGNoQ2hhbmdlcygpXG4gICAgQElucHV0KClcbiAgICBnZXQgc29ydGluZ0V4cHJlc3Npb25zKCk6IElTb3J0aW5nRXhwcmVzc2lvbltdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NvcnRpbmdFeHByZXNzaW9ucztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBzb3J0aW5nIHN0YXRlIG9mIHRoZSBgSWd4R3JpZENvbXBvbmVudGAuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIHRoaXMuZ3JpZC5zb3J0aW5nRXhwcmVzc2lvbnMgPSBbe1xuICAgICAqICAgICBmaWVsZE5hbWU6IFwiSURcIixcbiAgICAgKiAgICAgZGlyOiBTb3J0aW5nRGlyZWN0aW9uLkRlc2MsXG4gICAgICogICAgIGlnbm9yZUNhc2U6IHRydWVcbiAgICAgKiB9XTtcbiAgICAgKiBgYGBcblx0ICogQG1lbWJlcm9mIElneEdyaWRCYXNlQ29tcG9uZW50XG4gICAgICovXG4gICAgc2V0IHNvcnRpbmdFeHByZXNzaW9ucyh2YWx1ZTogSVNvcnRpbmdFeHByZXNzaW9uW10pIHtcbiAgICAgICAgdGhpcy5fc29ydGluZ0V4cHJlc3Npb25zID0gY2xvbmVBcnJheSh2YWx1ZSk7XG4gICAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBnZXQgbWF4TGV2ZWxIZWFkZXJEZXB0aCgpIHtcbiAgICAgICAgaWYgKHRoaXMuX21heExldmVsSGVhZGVyRGVwdGggPT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuX21heExldmVsSGVhZGVyRGVwdGggPSB0aGlzLmhhc0NvbHVtbkxheW91dHMgP1xuICAgICAgICAgICAgICAgIHRoaXMuY29sdW1uTGlzdC5yZWR1Y2UoKGFjYywgY29sKSA9PiBNYXRoLm1heChhY2MsIGNvbC5yb3dTdGFydCksIDApIDpcbiAgICAgICAgICAgICAgICB0aGlzLmNvbHVtbkxpc3QucmVkdWNlKChhY2MsIGNvbCkgPT4gTWF0aC5tYXgoYWNjLCBjb2wubGV2ZWwpLCAwKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fbWF4TGV2ZWxIZWFkZXJEZXB0aDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBudW1iZXIgb2YgaGlkZGVuIGBJZ3hDb2x1bW5Db21wb25lbnRgLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBjb25zdCBoaWRkZW5Db2wgPSB0aGlzLmdyaWQuaGlkZGVuQ29sdW1uc0NvdW50O1xuICAgICAqIGBgXG4gICAgICovXG4gICAgZ2V0IGhpZGRlbkNvbHVtbnNDb3VudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29sdW1uTGlzdC5maWx0ZXIoKGNvbCkgPT4gY29sLmNvbHVtbkdyb3VwID09PSBmYWxzZSAmJiBjb2wuaGlkZGVuID09PSB0cnVlKS5sZW5ndGg7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgdGV4dCB0byBiZSBkaXNwbGF5ZWQgaW5zaWRlIHRoZSB0b2dnbGUgYnV0dG9uXG4gICAgICogZm9yIHRoZSBidWlsdC1pbiBjb2x1bW4gaGlkaW5nIFVJIG9mIHRoZWBJZ3hDb2x1bW5Db21wb25lbnRgLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBjb25zdCBoaWRkZW5Db2xUZXh0ID0gdGhpcy5ncmlkLmhpZGRlbkNvbHVtbnNUZXh0O1xuICAgICAqIGBgXG4gICAgICovXG4gICAgQFdhdGNoQ2hhbmdlcygpXG4gICAgQElucHV0KClcbiAgICBnZXQgaGlkZGVuQ29sdW1uc1RleHQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9oaWRkZW5Db2x1bW5zVGV4dDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSB0ZXh0IHRvIGJlIGRpc3BsYXllZCBpbnNpZGUgdGhlIHRvZ2dsZSBidXR0b25cbiAgICAgKiBmb3IgdGhlIGJ1aWx0LWluIGNvbHVtbiBoaWRpbmcgVUkgb2YgdGhlYElneENvbHVtbkNvbXBvbmVudGAuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIDxpZ3gtZ3JpZCBbY29sdW1uSGlkaW5nXT1cInRydWVcIiBbc2hvd1Rvb2xiYXJdPVwidHJ1ZVwiIFtoaWRkZW5Db2x1bW5zVGV4dF09XCInSGlkZGVuIENvbHVtbnMnXCI+PC9pZ3gtZ3JpZD5cbiAgICAgKiBgYGBcblx0ICogQG1lbWJlcm9mIElneEdyaWRCYXNlQ29tcG9uZW50XG4gICAgICovXG4gICAgc2V0IGhpZGRlbkNvbHVtbnNUZXh0KHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX2hpZGRlbkNvbHVtbnNUZXh0ID0gdmFsdWU7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSB0ZXh0IHRvIGJlIGRpc3BsYXllZCBpbnNpZGUgdGhlIHRvZ2dsZSBidXR0b25cbiAgICAgKiBmb3IgdGhlIGJ1aWx0LWluIGNvbHVtbiBwaW5uaW5nIFVJIG9mIHRoZWBJZ3hDb2x1bW5Db21wb25lbnRgLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBjb25zdCBwaW5uZWRUZXh0ID0gdGhpcy5ncmlkLnBpbm5lZENvbHVtbnNUZXh0O1xuICAgICAqIGBgYFxuXHQgKiBAbWVtYmVyb2YgSWd4R3JpZEJhc2VDb21wb25lbnRcbiAgICAgKi9cbiAgICBAV2F0Y2hDaGFuZ2VzKClcbiAgICBASW5wdXQoKVxuICAgIGdldCBwaW5uZWRDb2x1bW5zVGV4dCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Bpbm5lZENvbHVtbnNUZXh0O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIHRleHQgdG8gYmUgZGlzcGxheWVkIGluc2lkZSB0aGUgdG9nZ2xlIGJ1dHRvblxuICAgICAqIGZvciB0aGUgYnVpbHQtaW4gY29sdW1uIHBpbm5pbmcgVUkgb2YgdGhlYElneENvbHVtbkNvbXBvbmVudGAuXG4gICAgICogYGBgaHRtbFxuICAgICAqIDxpZ3gtZ3JpZCBbcGlubmVkQ29sdW1uc1RleHRdPVwiJ1Bpbm5lZENvbHMgVGV4dFwiIFtkYXRhXT1cImRhdGFcIiBbd2lkdGhdPVwiJzEwMCUnXCIgW2hlaWdodF09XCInNTAwcHgnXCI+PC9pZ3gtZ3JpZD5cbiAgICAgKiBgYGBcblx0ICogQG1lbWJlcm9mIElneEdyaWRCYXNlQ29tcG9uZW50XG4gICAgICovXG4gICAgc2V0IHBpbm5lZENvbHVtbnNUZXh0KHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX3Bpbm5lZENvbHVtbnNUZXh0ID0gdmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHRyYW5zYWN0aW9ucyBzZXJ2aWNlIGZvciB0aGUgZ3JpZC5cbiAgICAgKi9cbiAgICBnZXQgdHJhbnNhY3Rpb25zKCk6IFRyYW5zYWN0aW9uU2VydmljZTxUcmFuc2FjdGlvbiwgU3RhdGU+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RyYW5zYWN0aW9ucztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgKi9cbiAgICBwdWJsaWMgY29sdW1uc1dpdGhOb1NldFdpZHRocyA9IG51bGw7XG5cbiAgICAvKiBUb29sYmFyIHJlbGF0ZWQgZGVmaW5pdGlvbnMgKi9cbiAgICBwcml2YXRlIF9zaG93VG9vbGJhciA9IGZhbHNlO1xuICAgIHByaXZhdGUgX2V4cG9ydEV4Y2VsID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBfZXhwb3J0Q3N2ID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBfdG9vbGJhclRpdGxlOiBzdHJpbmcgPSBudWxsO1xuICAgIHByaXZhdGUgX2V4cG9ydFRleHQ6IHN0cmluZyA9IG51bGw7XG4gICAgcHJpdmF0ZSBfZXhwb3J0RXhjZWxUZXh0OiBzdHJpbmcgPSBudWxsO1xuICAgIHByaXZhdGUgX2V4cG9ydENzdlRleHQ6IHN0cmluZyA9IG51bGw7XG4gICAgcHJpdmF0ZSBfcm93RWRpdGFibGUgPSBmYWxzZTtcbiAgICBwcml2YXRlIF9jdXJyZW50Um93U3RhdGU6IGFueTtcbiAgICBwcml2YXRlIF9maWx0ZXJlZFNvcnRlZERhdGEgPSBudWxsO1xuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAqL1xuICAgIHB1YmxpYyBnZXQgY3VycmVudFJvd1N0YXRlKCk6IGFueSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jdXJyZW50Um93U3RhdGU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUHJvdmlkZXMgYWNjZXNzIHRvIHRoZSBgSWd4VG9vbGJhckNvbXBvbmVudGAuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGNvbnN0IGdyaWRUb29sYmFyID0gdGhpcy5ncmlkLnRvb2xiYXI7XG4gICAgICogYGBgXG5cdCAqIEBtZW1iZXJvZiBJZ3hHcmlkQmFzZUNvbXBvbmVudFxuICAgICAqL1xuICAgIEBWaWV3Q2hpbGQoJ3Rvb2xiYXInLCB7IHJlYWQ6IElneEdyaWRUb29sYmFyQ29tcG9uZW50LCBzdGF0aWM6IGZhbHNlIH0pXG4gICAgcHVibGljIHRvb2xiYXI6IElneEdyaWRUb29sYmFyQ29tcG9uZW50ID0gbnVsbDtcblxuICAgIEBWaWV3Q2hpbGQoJ3Rvb2xiYXInLCB7IHJlYWQ6IEVsZW1lbnRSZWYsIHN0YXRpYzogZmFsc2UgfSlcbiAgICBwcml2YXRlIHRvb2xiYXJIdG1sOiBFbGVtZW50UmVmID0gbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgd2hldGhlciB0aGUgYElneEdyaWRDb21wb25lbnRgJ3MgdG9vbGJhciBpcyBzaG93biBvciBoaWRkZW4uXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGNvbnN0IHRvb2xiYXJHcmlkID0gdGhpcy5ncmlkLnNob3dUb29sYmFyO1xuICAgICAqIGBgYFxuXHQgKiBAbWVtYmVyb2YgSWd4R3JpZEJhc2VDb21wb25lbnRcbiAgICAgKi9cbiAgICBAV2F0Y2hDaGFuZ2VzKClcbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBnZXQgc2hvd1Rvb2xiYXIoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zaG93VG9vbGJhcjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTaG93cyBvciBoaWRlcyB0aGUgYElneEdyaWRDb21wb25lbnRgJ3MgdG9vbGJhci5cbiAgICAgKiBgYGBodG1sXG4gICAgICogPGlneC1ncmlkIFtkYXRhXT1cImxvY2FsRGF0YVwiIFtzaG93VG9vbGJhcl09XCJ0cnVlXCIgW2F1dG9HZW5lcmF0ZV09XCJ0cnVlXCIgPjwvaWd4LWdyaWQ+XG4gICAgICogYGBgXG5cdCAqIEBtZW1iZXJvZiBJZ3hHcmlkQmFzZUNvbXBvbmVudFxuICAgICAqL1xuICAgIHB1YmxpYyBzZXQgc2hvd1Rvb2xiYXIobmV3VmFsdWU6IGJvb2xlYW4pIHtcbiAgICAgICAgaWYgKHRoaXMuX3Nob3dUb29sYmFyICE9PSBuZXdWYWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fc2hvd1Rvb2xiYXIgPSBuZXdWYWx1ZTtcbiAgICAgICAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICAgICAgICAgICAgaWYgKHRoaXMuX25nQWZ0ZXJWaWV3SW5pdFBhc3NlZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2FsY3VsYXRlR3JpZFNpemVzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSB0b29sYmFyJ3MgdGl0bGUuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGNvbnN0IHRvb2xiYXJUaXRsZSAgPSB0aGlzLmdyaWQudG9vbGJhclRpdGxlO1xuICAgICAqIGBgYFxuXHQgKiBAbWVtYmVyb2YgSWd4R3JpZEJhc2VDb21wb25lbnRcbiAgICAgKi9cbiAgICBAV2F0Y2hDaGFuZ2VzKClcbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBnZXQgdG9vbGJhclRpdGxlKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl90b29sYmFyVGl0bGU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgdG9vbGJhcidzIHRpdGxlLlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8aWd4LWdyaWQgW2RhdGFdPVwibG9jYWxEYXRhXCIgW3Nob3dUb29sYmFyXT1cInRydWVcIiBbYXV0b0dlbmVyYXRlXT1cInRydWVcIiBbdG9vbGJhclRpdGxlXT1cIidNeSBHcmlkJ1wiPjwvaWd4LWdyaWQ+XG4gICAgICogYGBgXG5cdCAqIEBtZW1iZXJvZiBJZ3hHcmlkQmFzZUNvbXBvbmVudFxuICAgICAqL1xuICAgIHB1YmxpYyBzZXQgdG9vbGJhclRpdGxlKG5ld1ZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKHRoaXMuX3Rvb2xiYXJUaXRsZSAhPT0gbmV3VmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX3Rvb2xiYXJUaXRsZSA9IG5ld1ZhbHVlO1xuICAgICAgICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gICAgICAgICAgICBpZiAodGhpcy5fbmdBZnRlclZpZXdJbml0UGFzc2VkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jYWxjdWxhdGVHcmlkU2l6ZXMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgd2hldGhlciB0aGUgb3B0aW9uIGZvciBleHBvcnRpbmcgdG8gTVMgRXhjZWwgaXMgZW5hYmxlZCBvciBkaXNhYmxlZC5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogY29zbnQgZXhjZWxFeHBvcnRlciA9IHRoaXMuZ3JpZC5leHBvcnRFeGNlbDtcbiAgICAgKiBgYGBcblx0ICogQG1lbWJlcm9mIElneEdyaWRCYXNlQ29tcG9uZW50XG4gICAgICovXG4gICAgQFdhdGNoQ2hhbmdlcygpXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZ2V0IGV4cG9ydEV4Y2VsKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRFeHBvcnRFeGNlbCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEVuYWJsZSBvciBkaXNhYmxlIHRoZSBvcHRpb24gZm9yIGV4cG9ydGluZyB0byBNUyBFeGNlbC5cbiAgICAgKiBgYGBodG1sXG4gICAgICogPGlneC1ncmlkIFtkYXRhXT1cImxvY2FsRGF0YVwiIFtzaG93VG9vbGJhcl09XCJ0cnVlXCIgW2F1dG9HZW5lcmF0ZV09XCJ0cnVlXCIgW2V4cG9ydEV4Y2VsXT1cInRydWVcIj48L2lneC1ncmlkPlxuICAgICAqIGBgYFxuXHQgKiBAbWVtYmVyb2YgSWd4R3JpZEJhc2VDb21wb25lbnRcbiAgICAgKi9cbiAgICBwdWJsaWMgc2V0IGV4cG9ydEV4Y2VsKG5ld1ZhbHVlOiBib29sZWFuKSB7XG4gICAgICAgIGlmICh0aGlzLl9leHBvcnRFeGNlbCAhPT0gbmV3VmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX2V4cG9ydEV4Y2VsID0gbmV3VmFsdWU7XG4gICAgICAgICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgICAgICAgICAgIGlmICh0aGlzLl9uZ0FmdGVyVmlld0luaXRQYXNzZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNhbGN1bGF0ZUdyaWRTaXplcygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB3aGV0aGVyIHRoZSBvcHRpb24gZm9yIGV4cG9ydGluZyB0byBDU1YgaXMgZW5hYmxlZCBvciBkaXNhYmxlZC5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogY29uc3QgZXhwb3J0Q3N2ID0gdGhpcy5ncmlkLmV4cG9ydENzdjtcbiAgICAgKiBgYGBcblx0ICogQG1lbWJlcm9mIElneEdyaWRCYXNlQ29tcG9uZW50XG4gICAgICovXG4gICAgQFdhdGNoQ2hhbmdlcygpXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZ2V0IGV4cG9ydENzdigpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RXhwb3J0Q3N2KCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRW5hYmxlIG9yIGRpc2FibGUgdGhlIG9wdGlvbiBmb3IgZXhwb3J0aW5nIHRvIENTVi5cbiAgICAgKiBgYGBodG1sXG4gICAgICogPGlneC1ncmlkIFtkYXRhXT1cImxvY2FsRGF0YVwiIFtzaG93VG9vbGJhcl09XCJ0cnVlXCIgW2F1dG9HZW5lcmF0ZV09XCJ0cnVlXCIgW2V4cG9ydENzdl09XCJ0cnVlXCI+PC9pZ3gtZ3JpZD5cbiAgICAgKiBgYGBcblx0ICogQG1lbWJlcm9mIElneEdyaWRCYXNlQ29tcG9uZW50XG4gICAgICovXG4gICAgcHVibGljIHNldCBleHBvcnRDc3YobmV3VmFsdWU6IGJvb2xlYW4pIHtcbiAgICAgICAgaWYgKHRoaXMuX2V4cG9ydENzdiAhPT0gbmV3VmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX2V4cG9ydENzdiA9IG5ld1ZhbHVlO1xuICAgICAgICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gICAgICAgICAgICBpZiAodGhpcy5fbmdBZnRlclZpZXdJbml0UGFzc2VkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jYWxjdWxhdGVHcmlkU2l6ZXMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHRleHR1YWwgY29udGVudCBmb3IgdGhlIG1haW4gZXhwb3J0IGJ1dHRvbi5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogY29uc3QgZXhwb3J0VGV4dCA9IHRoaXMuZ3JpZC5leHBvcnRUZXh0O1xuICAgICAqIGBgYFxuXHQgKiBAbWVtYmVyb2YgSWd4R3JpZEJhc2VDb21wb25lbnRcbiAgICAgKi9cbiAgICBAV2F0Y2hDaGFuZ2VzKClcbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBnZXQgZXhwb3J0VGV4dCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5fZXhwb3J0VGV4dDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSB0ZXh0dWFsIGNvbnRlbnQgZm9yIHRoZSBtYWluIGV4cG9ydCBidXR0b24uXG4gICAgICogYGBgaHRtbFxuICAgICAqIDxpZ3gtZ3JpZCBbZGF0YV09XCJsb2NhbERhdGFcIiBbc2hvd1Rvb2xiYXJdPVwidHJ1ZVwiIFtleHBvcnRUZXh0XT1cIidNeSBFeHBvcnRlcidcIiBbZXhwb3J0Q3N2XT1cInRydWVcIj48L2lneC1ncmlkPlxuICAgICAqIGBgYFxuXHQgKiBAbWVtYmVyb2YgSWd4R3JpZEJhc2VDb21wb25lbnRcbiAgICAgKi9cbiAgICBwdWJsaWMgc2V0IGV4cG9ydFRleHQobmV3VmFsdWU6IHN0cmluZykge1xuICAgICAgICBpZiAodGhpcy5fZXhwb3J0VGV4dCAhPT0gbmV3VmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX2V4cG9ydFRleHQgPSBuZXdWYWx1ZTtcbiAgICAgICAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICAgICAgICAgICAgaWYgKHRoaXMuX25nQWZ0ZXJWaWV3SW5pdFBhc3NlZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2FsY3VsYXRlR3JpZFNpemVzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSB0ZXh0dWFsIGNvbnRlbnQgZm9yIHRoZSBNUyBFeGNlbCBleHBvcnQgYnV0dG9uLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBjb25zdCBleGNlbFRleHQgPSB0aGlzLmdyaWQuZXhwb3J0RXhjZWxUZXh0O1xuICAgICAqIGBgYFxuXHQgKiBAbWVtYmVyb2YgSWd4R3JpZEJhc2VDb21wb25lbnRcbiAgICAgKi9cbiAgICBAV2F0Y2hDaGFuZ2VzKClcbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBnZXQgZXhwb3J0RXhjZWxUZXh0KCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9leHBvcnRFeGNlbFRleHQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgdGV4dHVhbCBjb250ZW50IGZvciB0aGUgTVMgRXhjZWwgZXhwb3J0IGJ1dHRvbi5cbiAgICAgKiBgYGBodG1sXG4gICAgICogPGlneC1ncmlkIFtleHBvcnRFeGNlbFRleHRdPVwiJ015IEV4Y2VsIEV4cG9ydGVyXCIgW3Nob3dUb29sYmFyXT1cInRydWVcIiBbZXhwb3J0VGV4dF09XCInTXkgRXhwb3J0ZXInXCIgW2V4cG9ydENzdl09XCJ0cnVlXCI+PC9pZ3gtZ3JpZD5cbiAgICAgKiBgYGBcblx0ICogQG1lbWJlcm9mIElneEdyaWRCYXNlQ29tcG9uZW50XG4gICAgICovXG4gICAgcHVibGljIHNldCBleHBvcnRFeGNlbFRleHQobmV3VmFsdWU6IHN0cmluZykge1xuICAgICAgICBpZiAodGhpcy5fZXhwb3J0RXhjZWxUZXh0ICE9PSBuZXdWYWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fZXhwb3J0RXhjZWxUZXh0ID0gbmV3VmFsdWU7XG4gICAgICAgICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgICAgICAgICAgIGlmICh0aGlzLl9uZ0FmdGVyVmlld0luaXRQYXNzZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNhbGN1bGF0ZUdyaWRTaXplcygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgdGV4dHVhbCBjb250ZW50IGZvciB0aGUgQ1NWIGV4cG9ydCBidXR0b24uXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGNvbnN0IGNzdlRleHQgPSB0aGlzLmdyaWQuZXhwb3J0Q3N2VGV4dDtcbiAgICAgKiBgYGBcblx0ICogQG1lbWJlcm9mIElneEdyaWRCYXNlQ29tcG9uZW50XG4gICAgICovXG4gICAgQFdhdGNoQ2hhbmdlcygpXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZ2V0IGV4cG9ydENzdlRleHQoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2V4cG9ydENzdlRleHQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgdGV4dHVhbCBjb250ZW50IGZvciB0aGUgQ1NWIGV4cG9ydCBidXR0b24uXG4gICAgICogYGBgaHRtbFxuICAgICAqIDxpZ3gtZ3JpZCBbZXhwb3J0Q3N2VGV4dF09XCInTXkgQ3N2IEV4cG9ydGVyXCIgW3Nob3dUb29sYmFyXT1cInRydWVcIiBbZXhwb3J0VGV4dF09XCInTXkgRXhwb3J0ZXInXCIgW2V4cG9ydEV4Y2VsXT1cInRydWVcIj48L2lneC1ncmlkPlxuICAgICAqIGBgYFxuXHQgKiBAbWVtYmVyb2YgSWd4R3JpZEJhc2VDb21wb25lbnRcbiAgICAgKi9cbiAgICBwdWJsaWMgc2V0IGV4cG9ydENzdlRleHQobmV3VmFsdWU6IHN0cmluZykge1xuICAgICAgICBpZiAodGhpcy5fZXhwb3J0Q3N2VGV4dCAhPT0gbmV3VmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX2V4cG9ydENzdlRleHQgPSBuZXdWYWx1ZTtcbiAgICAgICAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICAgICAgICAgICAgaWYgKHRoaXMuX25nQWZ0ZXJWaWV3SW5pdFBhc3NlZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2FsY3VsYXRlR3JpZFNpemVzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDb250cm9scyB0aGUgY29weSBiZWhhdmlvciBvZiB0aGUgZ3JpZC5cbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIGNsaXBib2FyZE9wdGlvbnMgPSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBFbmFibGVzL2Rpc2FibGVzIHRoZSBjb3B5IGJlaGF2aW9yXG4gICAgICAgICAqL1xuICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICAvKipcbiAgICAgICAgICogSW5jbHVkZSB0aGUgY29sdW1ucyBoZWFkZXJzIGluIHRoZSBjbGlwYm9hcmQgb3V0cHV0LlxuICAgICAgICAgKi9cbiAgICAgICAgY29weUhlYWRlcnM6IHRydWUsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBcHBseSB0aGUgY29sdW1ucyBmb3JtYXR0ZXJzIChpZiBhbnkpIG9uIHRoZSBkYXRhIGluIHRoZSBjbGlwYm9hcmQgb3V0cHV0LlxuICAgICAgICAgKi9cbiAgICAgICAgY29weUZvcm1hdHRlcnM6IHRydWUsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgc2VwYXJhdG9yIHVzZWQgZm9yIGZvcm1hdHRpbmcgdGhlIGNvcHkgb3V0cHV0LiBEZWZhdWx0cyB0byBgXFx0YC5cbiAgICAgICAgICovXG4gICAgICAgIHNlcGFyYXRvcjogJ1xcdCdcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyByb3dFZGl0TWVzc2FnZTtcblxuICAgIC8qKlxuICAgICAqIEVtaXR0ZWQgd2hlbiBhbiBleHBvcnQgcHJvY2VzcyBpcyBpbml0aWF0ZWQgYnkgdGhlIHVzZXIuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIHRvb2xiYXJFeHBvcnRpbmcoZXZlbnQ6IElHcmlkVG9vbGJhckV4cG9ydEV2ZW50QXJncyl7XG4gICAgICogICAgIGNvbnN0IHRvb2xiYXJFeHBvcnRpbmcgPSBldmVudDtcbiAgICAgKiB9XG4gICAgICogYGBgXG5cdCAqIEBtZW1iZXJvZiBJZ3hHcmlkQmFzZUNvbXBvbmVudFxuICAgICAqL1xuICAgIEBPdXRwdXQoKVxuICAgIHB1YmxpYyBvblRvb2xiYXJFeHBvcnRpbmcgPSBuZXcgRXZlbnRFbWl0dGVyPElHcmlkVG9vbGJhckV4cG9ydEV2ZW50QXJncz4oKTtcblxuICAgIC8qIEVuZCBvZiB0b29sYmFyIHJlbGF0ZWQgZGVmaW5pdGlvbnMgKi9cblxuICAgIC8qKlxuICAgICAqIEVtaXR0ZWQgd2hlbiBtYWtpbmcgYSByYW5nZSBzZWxlY3Rpb24gZWl0aGVyIHRocm91Z2hcbiAgICAgKiBkcmFnIHNlbGVjdGlvbiBvciB0aHJvdWdoIGtleWJvYXJkIHNlbGVjdGlvbi5cbiAgICAgKi9cbiAgICBAT3V0cHV0KClcbiAgICBvblJhbmdlU2VsZWN0aW9uID0gbmV3IEV2ZW50RW1pdHRlcjxHcmlkU2VsZWN0aW9uUmFuZ2U+KCk7XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIHBhZ2luZ1N0YXRlO1xuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgY2FsY1dpZHRoOiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyBjYWxjSGVpZ2h0ID0gMDtcbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIHRmb290SGVpZ2h0OiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyBjaGlwc0dvdXBpbmdFeHByZXNzaW9ucyA9IFtdO1xuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3VtbWFyaWVzSGVpZ2h0OiBudW1iZXI7XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIGRyYWdnZWRDb2x1bW46IElneENvbHVtbkNvbXBvbmVudDtcblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgYWxsUm93c1NlbGVjdGVkID0gZmFsc2U7XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIGRpc2FibGVUcmFuc2l0aW9ucyA9IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyBsYXN0U2VhcmNoSW5mbzogSVNlYXJjaEluZm8gPSB7XG4gICAgICAgIHNlYXJjaFRleHQ6ICcnLFxuICAgICAgICBjYXNlU2Vuc2l0aXZlOiBmYWxzZSxcbiAgICAgICAgZXhhY3RNYXRjaDogZmFsc2UsXG4gICAgICAgIGFjdGl2ZU1hdGNoSW5kZXg6IDAsXG4gICAgICAgIG1hdGNoSW5mb0NhY2hlOiBbXVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIGNvbHVtbldpZHRoU2V0QnlVc2VyID0gZmFsc2U7XG5cbiAgICBhYnN0cmFjdCBkYXRhOiBhbnlbXTtcbiAgICBhYnN0cmFjdCBmaWx0ZXJlZERhdGE6IGFueVtdO1xuICAgIC8vIGFic3RyYWN0IGRhdGFMZW5ndGg7XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGRlc3Ryb3kkID0gbmV3IFN1YmplY3Q8YW55PigpO1xuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHByb3RlY3RlZCBfcGVyUGFnZSA9IDE1O1xuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgX3BhZ2UgPSAwO1xuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgX3BhZ2luZyA9IGZhbHNlO1xuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgX3Jvd1NlbGVjdGlvbiA9IGZhbHNlO1xuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgX3Jvd0RyYWcgPSBmYWxzZTtcbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHJvdGVjdGVkIF9waXBlVHJpZ2dlciA9IDA7XG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHByb3RlY3RlZCBfc3VtbWFyeVBpcGVUcmlnZ2VyID0gMDtcbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHJvdGVjdGVkIF9jb2x1bW5zOiBJZ3hDb2x1bW5Db21wb25lbnRbXSA9IFtdO1xuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgX3Bpbm5lZENvbHVtbnM6IElneENvbHVtbkNvbXBvbmVudFtdID0gW107XG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHByb3RlY3RlZCBfdW5waW5uZWRDb2x1bW5zOiBJZ3hDb2x1bW5Db21wb25lbnRbXSA9IFtdO1xuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgX2ZpbHRlcmluZ0V4cHJlc3Npb25zVHJlZTogSUZpbHRlcmluZ0V4cHJlc3Npb25zVHJlZSA9IG5ldyBGaWx0ZXJpbmdFeHByZXNzaW9uc1RyZWUoRmlsdGVyaW5nTG9naWMuQW5kKTtcbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHJvdGVjdGVkIF9zb3J0aW5nRXhwcmVzc2lvbnM6IEFycmF5PElTb3J0aW5nRXhwcmVzc2lvbj4gPSBbXTtcbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHJvdGVjdGVkIF9tYXhMZXZlbEhlYWRlckRlcHRoID0gbnVsbDtcbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHJvdGVjdGVkIF9jb2x1bW5IaWRpbmcgPSBmYWxzZTtcbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHJvdGVjdGVkIF9jb2x1bW5QaW5uaW5nID0gZmFsc2U7XG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHByb3RlY3RlZCBfa2V5ZG93bkxpc3RlbmVyID0gbnVsbDtcbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHJvdGVjdGVkIF92U2Nyb2xsTGlzdGVuZXIgPSBudWxsO1xuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgX2hTY3JvbGxMaXN0ZW5lciA9IG51bGw7XG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHByb3RlY3RlZCBfd2hlZWxMaXN0ZW5lciA9IG51bGw7XG4gICAgcHJvdGVjdGVkIF9hbGxvd0ZpbHRlcmluZyA9IGZhbHNlO1xuICAgIHByb3RlY3RlZCBfZmlsdGVyTW9kZSA9IEZpbHRlck1vZGUucXVpY2tGaWx0ZXI7XG4gICAgcHJpdmF0ZSByZXNpemVIYW5kbGVyO1xuICAgIHByaXZhdGUgY29sdW1uTGlzdERpZmZlcjtcbiAgICBwcml2YXRlIF9oaWRkZW5Db2x1bW5zVGV4dCA9ICcnO1xuICAgIHByaXZhdGUgX3Bpbm5lZENvbHVtbnNUZXh0ID0gJyc7XG4gICAgcHJpdmF0ZSBfaGVpZ2h0ID0gJzEwMCUnO1xuICAgIHByaXZhdGUgX3dpZHRoID0gJzEwMCUnO1xuICAgIHByb3RlY3RlZCBfYXV0b1NpemUgPSBmYWxzZTtcbiAgICBwcml2YXRlIF9yb3dIZWlnaHQ7XG4gICAgcHJvdGVjdGVkIF9uZ0FmdGVyVmlld0luaXRQYXNzZWQgPSBmYWxzZTtcbiAgICBwcm90ZWN0ZWQgX2Jhc2VGb250U2l6ZTogbnVtYmVyO1xuICAgIHByaXZhdGUgX2hvcml6b250YWxGb3JPZnM7XG4gICAgcHJpdmF0ZSBfbXVsdGlSb3dMYXlvdXRSb3dTaXplID0gMTtcblxuICAgIC8vIENhY2hlc1xuICAgIHByaXZhdGUgX3RvdGFsV2lkdGggPSBOYU47XG4gICAgcHJpdmF0ZSBfcGlubmVkVmlzaWJsZSA9IFtdO1xuICAgIHByaXZhdGUgX3VucGlubmVkVmlzaWJsZSA9IFtdO1xuICAgIHByaXZhdGUgX3Bpbm5lZFdpZHRoID0gTmFOO1xuICAgIHByaXZhdGUgX3VucGlubmVkV2lkdGggPSBOYU47XG4gICAgcHJpdmF0ZSBfdmlzaWJsZUNvbHVtbnMgPSBbXTtcbiAgICBwcml2YXRlIF9jb2x1bW5Hcm91cHMgPSBmYWxzZTtcblxuICAgIHByaXZhdGUgX2NvbHVtbldpZHRoOiBzdHJpbmc7XG5cbiAgICBwcm90ZWN0ZWQgX2RlZmF1bHRUYXJnZXRSZWNvcmROdW1iZXIgPSAxMDtcbiAgICBwcm90ZWN0ZWQgX29uRm9jdXNDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPElGb2N1c0NoYW5nZUV2ZW50QXJncz4oKTtcblxuICAgIHByaXZhdGUgX3N1bW1hcnlQb3NpdGlvbiA9IEdyaWRTdW1tYXJ5UG9zaXRpb24uYm90dG9tO1xuICAgIHByaXZhdGUgX3N1bW1hcnlDYWxjdWxhdGlvbk1vZGUgPSBHcmlkU3VtbWFyeUNhbGN1bGF0aW9uTW9kZS5yb290QW5kQ2hpbGRMZXZlbHM7XG5cbiAgICBwcml2YXRlIHJvd0VkaXRQb3NpdGlvbmluZ1N0cmF0ZWd5ID0gbmV3IENvbnRhaW5lclBvc2l0aW9uaW5nU3RyYXRlZ3koe1xuICAgICAgICBob3Jpem9udGFsRGlyZWN0aW9uOiBIb3Jpem9udGFsQWxpZ25tZW50LlJpZ2h0LFxuICAgICAgICB2ZXJ0aWNhbERpcmVjdGlvbjogVmVydGljYWxBbGlnbm1lbnQuQm90dG9tLFxuICAgICAgICBob3Jpem9udGFsU3RhcnRQb2ludDogSG9yaXpvbnRhbEFsaWdubWVudC5MZWZ0LFxuICAgICAgICB2ZXJ0aWNhbFN0YXJ0UG9pbnQ6IFZlcnRpY2FsQWxpZ25tZW50LkJvdHRvbSxcbiAgICAgICAgY2xvc2VBbmltYXRpb246IG51bGxcbiAgICB9KTtcblxuICAgIHByaXZhdGUgcm93RWRpdFNldHRpbmdzID0ge1xuICAgICAgICBzY3JvbGxTdHJhdGVneTogbmV3IEFic29sdXRlU2Nyb2xsU3RyYXRlZ3koKSxcbiAgICAgICAgbW9kYWw6IGZhbHNlLFxuICAgICAgICBjbG9zZU9uT3V0c2lkZUNsaWNrOiBmYWxzZSxcbiAgICAgICAgb3V0bGV0OiB0aGlzLnJvd091dGxldERpcmVjdGl2ZSxcbiAgICAgICAgcG9zaXRpb25TdHJhdGVneTogdGhpcy5yb3dFZGl0UG9zaXRpb25pbmdTdHJhdGVneVxuICAgIH07XG5cbiAgICBwcml2YXRlIHZlcnRpY2FsU2Nyb2xsSGFuZGxlcihldmVudCkge1xuICAgICAgICB0aGlzLnZlcnRpY2FsU2Nyb2xsQ29udGFpbmVyLm9uU2Nyb2xsKGV2ZW50KTtcbiAgICAgICAgaWYgKGlzRWRnZSgpKSB7IHRoaXMud2hlZWxIYW5kbGVyKGZhbHNlKTsgfVxuICAgICAgICB0aGlzLmRpc2FibGVUcmFuc2l0aW9ucyA9IHRydWU7XG5cbiAgICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnpvbmUub25TdGFibGUucGlwZShmaXJzdCgpKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMudmVydGljYWxTY3JvbGxDb250YWluZXIub25DaHVua0xvYWQuZW1pdCh0aGlzLnZlcnRpY2FsU2Nyb2xsQ29udGFpbmVyLnN0YXRlKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5yb3dFZGl0YWJsZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlUm93RWRpdGluZ092ZXJsYXlTdGF0ZU9uU2Nyb2xsKHRoaXMucm93SW5FZGl0TW9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmRpc2FibGVUcmFuc2l0aW9ucyA9IGZhbHNlO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmhpZGVPdmVybGF5cygpO1xuICAgIH1cblxuICAgIHByaXZhdGUgaG9yaXpvbnRhbFNjcm9sbEhhbmRsZXIoZXZlbnQpIHtcbiAgICAgICAgY29uc3Qgc2Nyb2xsTGVmdCA9IGV2ZW50LnRhcmdldC5zY3JvbGxMZWZ0O1xuICAgICAgICBpZiAoaXNFZGdlKCkpIHsgdGhpcy53aGVlbEhhbmRsZXIodHJ1ZSk7IH1cbiAgICAgICAgdGhpcy5oZWFkZXJDb250YWluZXIub25IU2Nyb2xsKHNjcm9sbExlZnQpO1xuICAgICAgICB0aGlzLl9ob3Jpem9udGFsRm9yT2ZzLmZvckVhY2godmZvciA9PiB2Zm9yLm9uSFNjcm9sbChzY3JvbGxMZWZ0KSk7XG4gICAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuXG4gICAgICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy56b25lLm9uU3RhYmxlLnBpcGUoZmlyc3QoKSkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnBhcmVudFZpcnREaXIub25DaHVua0xvYWQuZW1pdCh0aGlzLmhlYWRlckNvbnRhaW5lci5zdGF0ZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5oaWRlT3ZlcmxheXMoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIEBoaWRkZW5cbiAgICAqIEBpbnRlcm5hbFxuICAgICovXG4gICAgcHVibGljIGhpZGVPdmVybGF5cygpIHtcbiAgICAgICAgdGhpcy5vdmVybGF5SURzLmZvckVhY2gob3ZlcmxheUlEID0+IHtcbiAgICAgICAgICAgIHRoaXMub3ZlcmxheVNlcnZpY2UuaGlkZShvdmVybGF5SUQpO1xuICAgICAgICAgICAgdGhpcy5vdmVybGF5U2VydmljZS5vbkNsb3NlZC5waXBlKFxuICAgICAgICAgICAgICAgIGZpbHRlcihvID0+IG8uaWQgPT09IG92ZXJsYXlJRCksXG4gICAgICAgICAgICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBrZXlkb3duSGFuZGxlcihldmVudCkge1xuICAgICAgICBjb25zdCBrZXkgPSBldmVudC5rZXkudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgLy8gVE9ETzogTW92ZSBpbiBhIHNlcGFyYXRlIGhhbmRsZXIgb24gdGhlIGBncmlkIGJvZHlgLlxuICAgICAgICAvLyBpZiAoZXZlbnQuY3RybEtleSAmJiBrZXkgPT09ICdjJyAmJiBpc0lFKCkpIHtcbiAgICAgICAgLy8gICAgIHRoaXMuY29weUhhbmRsZXIobnVsbCwgdHJ1ZSk7XG4gICAgICAgIC8vIH1cbiAgICAgICAgaWYgKChpc05hdmlnYXRpb25LZXkoa2V5KSAmJiBldmVudC5rZXlDb2RlICE9PSAzMikgfHwga2V5ID09PSAndGFiJyB8fCBrZXkgPT09ICdwYWdlZG93bicgfHwga2V5ID09PSAncGFnZXVwJykge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGlmIChrZXkgPT09ICdwYWdlZG93bicpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnZlcnRpY2FsU2Nyb2xsQ29udGFpbmVyLnNjcm9sbE5leHRQYWdlKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ3BhZ2V1cCcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnZlcnRpY2FsU2Nyb2xsQ29udGFpbmVyLnNjcm9sbFByZXZQYWdlKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHVibGljIHNlbGVjdGlvblNlcnZpY2U6IElneEdyaWRTZWxlY3Rpb25TZXJ2aWNlLFxuICAgICAgICBwdWJsaWMgY3J1ZFNlcnZpY2U6IElneEdyaWRDUlVEU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBncmlkQVBJOiBHcmlkQmFzZUFQSVNlcnZpY2U8SWd4R3JpZEJhc2VDb21wb25lbnQgJiBJR3JpZERhdGFCaW5kYWJsZT4sXG4gICAgICAgIHB1YmxpYyBzZWxlY3Rpb246IElneFNlbGVjdGlvbkFQSVNlcnZpY2UsXG4gICAgICAgIEBJbmplY3QoSWd4R3JpZFRyYW5zYWN0aW9uKSBwcm90ZWN0ZWQgX3RyYW5zYWN0aW9uczogVHJhbnNhY3Rpb25TZXJ2aWNlPFRyYW5zYWN0aW9uLCBTdGF0ZT4sXG4gICAgICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICAgICAgcHJpdmF0ZSB6b25lOiBOZ1pvbmUsXG4gICAgICAgIEBJbmplY3QoRE9DVU1FTlQpIHB1YmxpYyBkb2N1bWVudCxcbiAgICAgICAgcHVibGljIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgICAgIHByb3RlY3RlZCByZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICAgICAgICBwcm90ZWN0ZWQgZGlmZmVyczogSXRlcmFibGVEaWZmZXJzLFxuICAgICAgICBwcm90ZWN0ZWQgdmlld1JlZjogVmlld0NvbnRhaW5lclJlZixcbiAgICAgICAgcHVibGljIG5hdmlnYXRpb246IElneEdyaWROYXZpZ2F0aW9uU2VydmljZSxcbiAgICAgICAgcHVibGljIGZpbHRlcmluZ1NlcnZpY2U6IElneEZpbHRlcmluZ1NlcnZpY2UsXG4gICAgICAgIEBJbmplY3QoSWd4T3ZlcmxheVNlcnZpY2UpIHByb3RlY3RlZCBvdmVybGF5U2VydmljZTogSWd4T3ZlcmxheVNlcnZpY2UsXG4gICAgICAgIHB1YmxpYyBzdW1tYXJ5U2VydmljZTogSWd4R3JpZFN1bW1hcnlTZXJ2aWNlLFxuICAgICAgICBAT3B0aW9uYWwoKSBASW5qZWN0KERpc3BsYXlEZW5zaXR5VG9rZW4pIHByb3RlY3RlZCBfZGlzcGxheURlbnNpdHlPcHRpb25zOiBJRGlzcGxheURlbnNpdHlPcHRpb25zKSB7XG4gICAgICAgIHN1cGVyKF9kaXNwbGF5RGVuc2l0eU9wdGlvbnMpO1xuICAgICAgICB0aGlzLmNkci5kZXRhY2goKTtcbiAgICAgICAgdGhpcy5yZXNpemVIYW5kbGVyID0gKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB0aGlzLmNhbGN1bGF0ZUdyaWRTaXplcygpKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBfc2V0dXBTZXJ2aWNlcygpIHtcbiAgICAgICAgdGhpcy5ncmlkQVBJLmdyaWQgPSB0aGlzO1xuICAgICAgICB0aGlzLmNydWRTZXJ2aWNlLmdyaWQgPSB0aGlzO1xuICAgICAgICB0aGlzLm5hdmlnYXRpb24uZ3JpZCA9IHRoaXM7XG4gICAgICAgIHRoaXMuZmlsdGVyaW5nU2VydmljZS5ncmlkID0gdGhpcztcbiAgICAgICAgdGhpcy5zdW1tYXJ5U2VydmljZS5ncmlkID0gdGhpcztcbiAgICB9XG5cbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgICAgIGlmICh0aGlzLl9pbml0KSB7IHJldHVybjsgfVxuICAgICAgICBjb25zdCB7IGhlaWdodCwgd2lkdGggfSA9IGNoYW5nZXM7XG4gICAgICAgIGlmIChoZWlnaHQgfHwgd2lkdGgpIHtcbiAgICAgICAgICAgIHRoaXMuY2FsY3VsYXRlR3JpZFNpemVzKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfc2V0dXBMaXN0ZW5lcnMoKSB7XG4gICAgICAgIGNvbnN0IGRlc3RydWN0b3IgPSB0YWtlVW50aWwodGhpcy5kZXN0cm95JCk7XG5cbiAgICAgICAgdGhpcy5vblJvd0FkZGVkLnBpcGUoZGVzdHJ1Y3Rvcikuc3Vic2NyaWJlKGFyZ3MgPT4gdGhpcy5yZWZyZXNoR3JpZFN0YXRlKGFyZ3MpKTtcbiAgICAgICAgdGhpcy5vblJvd0RlbGV0ZWQucGlwZShkZXN0cnVjdG9yKS5zdWJzY3JpYmUoYXJncyA9PiB7XG4gICAgICAgICAgICB0aGlzLnN1bW1hcnlTZXJ2aWNlLmRlbGV0ZU9wZXJhdGlvbiA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnN1bW1hcnlTZXJ2aWNlLmNsZWFyU3VtbWFyeUNhY2hlKGFyZ3MpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy50cmFuc2FjdGlvbnMub25TdGF0ZVVwZGF0ZS5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc3VtbWFyeVNlcnZpY2UuY2xlYXJTdW1tYXJ5Q2FjaGUoKTtcbiAgICAgICAgICAgIHRoaXMuX3BpcGVUcmlnZ2VyKys7XG4gICAgICAgICAgICB0aGlzLm1hcmtGb3JDaGVjaygpO1xuICAgICAgICAgICAgaWYgKHRoaXMudHJhbnNhY3Rpb25zLmdldEFnZ3JlZ2F0ZWRDaGFuZ2VzKGZhbHNlKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAvLyBOZWVkcyBiZXR0ZXIgY2hlY2ssIGNhbGxpbmcgJ3RyYW5zYWN0aW9ucy5jbGVhcigpJyB3aWxsIGFsc28gdHJpZ2dlciB0aGlzXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZ3JpZEFQSS5hdEluZXhpc3RpbmdQYWdlKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYWdlLS07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLm9uUGFnaW5nRG9uZS5waXBlKGRlc3RydWN0b3IpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmVuZEVkaXQodHJ1ZSk7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGlvblNlcnZpY2UuY2xlYXIoKTtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uU2VydmljZS5hY3RpdmVFbGVtZW50ID0gbnVsbDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5vbkNvbHVtbk1vdmluZy5waXBlKGRlc3RydWN0b3IpLnN1YnNjcmliZSgoKSA9PiB0aGlzLmVuZEVkaXQodHJ1ZSkpO1xuICAgICAgICB0aGlzLm9uQ29sdW1uUmVzaXplZC5waXBlKGRlc3RydWN0b3IpLnN1YnNjcmliZSgoKSA9PiB0aGlzLmVuZEVkaXQodHJ1ZSkpO1xuXG4gICAgICAgIHRoaXMub3ZlcmxheVNlcnZpY2Uub25PcGVuZWQucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZSgoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLm92ZXJsYXlTZXJ2aWNlLmdldE92ZXJsYXlCeUlkKGV2ZW50LmlkKS5zZXR0aW5ncy5vdXRsZXQgPT09IHRoaXMub3V0bGV0RGlyZWN0aXZlICYmXG4gICAgICAgICAgICAgICAgdGhpcy5vdmVybGF5SURzLmluZGV4T2YoZXZlbnQuaWQpIDwgMCkge1xuICAgICAgICAgICAgICAgIHRoaXMub3ZlcmxheUlEcy5wdXNoKGV2ZW50LmlkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMub3ZlcmxheVNlcnZpY2Uub25DbG9zZWQucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZSgoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGluZCA9IHRoaXMub3ZlcmxheUlEcy5pbmRleE9mKGV2ZW50LmlkKTtcbiAgICAgICAgICAgIGlmIChpbmQgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vdmVybGF5SURzLnNwbGljZShpbmQsIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBUT0RPOiBSZWZhY3RvclxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuX3NldHVwU2VydmljZXMoKTtcbiAgICAgICAgdGhpcy5fc2V0dXBMaXN0ZW5lcnMoKTtcbiAgICAgICAgdGhpcy5jb2x1bW5MaXN0RGlmZmVyID0gdGhpcy5kaWZmZXJzLmZpbmQoW10pLmNyZWF0ZShudWxsKTtcbiAgICAgICAgdGhpcy5jYWxjV2lkdGggPSB0aGlzLndpZHRoICYmIHRoaXMud2lkdGguaW5kZXhPZignJScpID09PSAtMSA/IHBhcnNlSW50KHRoaXMud2lkdGgsIDEwKSA6IDA7XG4gICAgICAgIHRoaXMuc2hvdWxkR2VuZXJhdGUgPSB0aGlzLmF1dG9HZW5lcmF0ZTtcbiAgICAgICAgdGhpcy5fc2Nyb2xsV2lkdGggPSB0aGlzLmdldFNjcm9sbFdpZHRoKCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHNldHVwQ29sdW1ucygpIHtcbiAgICAgICAgaWYgKHRoaXMuYXV0b0dlbmVyYXRlKSB7XG4gICAgICAgICAgICB0aGlzLmF1dG9nZW5lcmF0ZUNvbHVtbnMoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaW5pdENvbHVtbnModGhpcy5jb2x1bW5MaXN0LCAoY29sOiBJZ3hDb2x1bW5Db21wb25lbnQpID0+IHRoaXMub25Db2x1bW5Jbml0LmVtaXQoY29sKSk7XG5cbiAgICAgICAgdGhpcy5jb2x1bW5MaXN0RGlmZmVyLmRpZmYodGhpcy5jb2x1bW5MaXN0KTtcbiAgICAgICAgdGhpcy5tYXJrRm9yQ2hlY2soKTtcbiAgICAgICAgdGhpcy5yZXNldENhY2hlcygpO1xuXG4gICAgICAgIHRoaXMuY29sdW1uTGlzdC5jaGFuZ2VzXG4gICAgICAgICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKChjaGFuZ2U6IFF1ZXJ5TGlzdDxJZ3hDb2x1bW5Db21wb25lbnQ+KSA9PiB7IHRoaXMub25Db2x1bW5zQ2hhbmdlZChjaGFuZ2UpOyB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICogQGludGVybmFsXG4gICAgICovXG4gICAgcHVibGljIHJlc2V0Q29sdW1uc0NhY2hlcygpIHtcbiAgICAgICAgdGhpcy5jb2x1bW5MaXN0LmZvckVhY2goY29sdW1uID0+IGNvbHVtbi5yZXNldENhY2hlcygpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICogQGludGVybmFsXG4gICAgICovXG4gICAgcHVibGljIHJlc2V0Rm9yT2ZDYWNoZSgpIHtcbiAgICAgICAgY29uc3QgZmlyc3RWaXJ0Um93ID0gdGhpcy5kYXRhUm93TGlzdC5maXJzdDtcbiAgICAgICAgaWYgKGZpcnN0VmlydFJvdykge1xuICAgICAgICAgICAgZmlyc3RWaXJ0Um93LnZpcnREaXJSb3cuYXNzdW1lTWFzdGVyKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICogQGludGVybmFsXG4gICAgICovXG4gICAgcHVibGljIHJlc2V0Q29sdW1uQ29sbGVjdGlvbnMoKSB7XG4gICAgICAgIHRoaXMuX3Zpc2libGVDb2x1bW5zLmxlbmd0aCA9IDA7XG4gICAgICAgIHRoaXMuX3Bpbm5lZFZpc2libGUubGVuZ3RoID0gMDtcbiAgICAgICAgdGhpcy5fdW5waW5uZWRWaXNpYmxlLmxlbmd0aCA9IDA7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqIEBpbnRlcm5hbFxuICAgICAqL1xuICAgIHB1YmxpYyByZXNldENhY2hlZFdpZHRocygpIHtcbiAgICAgICAgdGhpcy5fdW5waW5uZWRXaWR0aCA9IE5hTjtcbiAgICAgICAgdGhpcy5fcGlubmVkV2lkdGggPSBOYU47XG4gICAgICAgIHRoaXMuX3RvdGFsV2lkdGggPSBOYU47XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqIEBpbnRlcm5hbFxuICAgICAqL1xuICAgIHB1YmxpYyByZXNldENhY2hlcygpIHtcbiAgICAgICAgdGhpcy5yZXNldEZvck9mQ2FjaGUoKTtcbiAgICAgICAgdGhpcy5yZXNldENvbHVtbnNDYWNoZXMoKTtcbiAgICAgICAgdGhpcy5yZXNldENvbHVtbkNvbGxlY3Rpb25zKCk7XG4gICAgICAgIHRoaXMucmVzZXRDYWNoZWRXaWR0aHMoKTtcbiAgICAgICAgdGhpcy5fY29sdW1uR3JvdXBzID0gdGhpcy5jb2x1bW5MaXN0LnNvbWUoY29sID0+IGNvbC5jb2x1bW5Hcm91cCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgICAgIHRoaXMuc2V0dXBDb2x1bW5zKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgICAgIHRoaXMuem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmRvY3VtZW50LmRlZmF1bHRWaWV3LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMucmVzaXplSGFuZGxlcik7XG4gICAgICAgICAgICB0aGlzLl9rZXlkb3duTGlzdGVuZXIgPSB0aGlzLmtleWRvd25IYW5kbGVyLmJpbmQodGhpcyk7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuX2tleWRvd25MaXN0ZW5lcik7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmluaXRQaW5uaW5nKCk7XG5cbiAgICAgICAgdGhpcy5vbkRlbnNpdHlDaGFuZ2VkLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnN1bW1hcnlTZXJ2aWNlLnN1bW1hcnlIZWlnaHQgPSAwO1xuICAgICAgICAgICAgICAgIHRoaXMuZW5kRWRpdCh0cnVlKTtcbiAgICAgICAgICAgICAgICB0aGlzLnJlZmxvdygpO1xuICAgICAgICAgICAgICAgIHRoaXMudmVydGljYWxTY3JvbGxDb250YWluZXIucmVjYWxjVXBkYXRlU2l6ZXMoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5fbmdBZnRlclZpZXdJbml0UGFzc2VkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5jYWxjdWxhdGVHcmlkU2l6ZXMoKTtcblxuICAgICAgICAvLyBJbiBzb21lIHJhcmUgY2FzZXMgd2UgZ2V0IHRoZSBBZnRlclZpZXdJbml0IGJlZm9yZSB0aGUgZ3JpZCBpcyBhZGRlZCB0byB0aGUgRE9NXG4gICAgICAgIC8vIGFuZCBhcyBhIHJlc3VsdCB3ZSBnZXQgMCB3aWR0aCBhbmQgY2FuJ3Qgc2l6ZSBvdXJzZWx2ZXMgcHJvcGVybHkuXG4gICAgICAgIC8vIEluIG9yZGVyIHRvIHByZXZlbnQgdGhhdCBhZGQgYSBtdXRhdGlvbiBvYnNlcnZlciB0aGF0IHdhdGNoZXMgaWYgd2UgaGF2ZSBiZWVuIGFkZGVkLlxuICAgICAgICBpZiAoIXRoaXMuaXNBdHRhY2hlZFRvRG9tKSB7XG4gICAgICAgICAgICBjb25zdCBjb25maWcgPSB7IGNoaWxkTGlzdDogdHJ1ZSwgc3VidHJlZTogdHJ1ZSB9O1xuICAgICAgICAgICAgY29uc3QgY2FsbGJhY2sgPSAobXV0YXRpb25zTGlzdCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNoaWxkTGlzdEhhc0NoYW5nZWQgPSBtdXRhdGlvbnNMaXN0LmZpbHRlcigobXV0YXRpb24pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG11dGF0aW9uLnR5cGUgPT09ICdjaGlsZExpc3QnO1xuICAgICAgICAgICAgICAgIH0pLmxlbmd0aCA+IDA7XG4gICAgICAgICAgICAgICAgaWYgKGNoaWxkTGlzdEhhc0NoYW5nZWQgJiYgdGhpcy5pc0F0dGFjaGVkVG9Eb20pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fYXV0b1NpemUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWZsb3coKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fb2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9vYnNlcnZlciA9IG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgdGhpcy5fb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihjYWxsYmFjayk7XG4gICAgICAgICAgICB0aGlzLl9vYnNlcnZlci5vYnNlcnZlKHRoaXMuZG9jdW1lbnQuYm9keSwgY29uZmlnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2RhdGFSb3dMaXN0LmNoYW5nZXMucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZShsaXN0ID0+XG4gICAgICAgICAgICB0aGlzLl9ob3Jpem9udGFsRm9yT2ZzID0gdGhpcy5jb21iaW5lRm9yT2ZDb2xsZWN0aW9ucyhsaXN0LnRvQXJyYXkoKVxuICAgICAgICAgICAgICAgIC5maWx0ZXIoaXRlbSA9PiBpdGVtLmVsZW1lbnQubmF0aXZlRWxlbWVudC5wYXJlbnRFbGVtZW50ICE9PSBudWxsKSwgdGhpcy5fc3VtbWFyeVJvd0xpc3QpXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuX3N1bW1hcnlSb3dMaXN0LmNoYW5nZXMucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZShzdW1tYXJ5TGlzdCA9PlxuICAgICAgICAgICAgdGhpcy5faG9yaXpvbnRhbEZvck9mcyAtIHRoaXMuY29tYmluZUZvck9mQ29sbGVjdGlvbnModGhpcy5fZGF0YVJvd0xpc3QsIHN1bW1hcnlMaXN0LnRvQXJyYXkoKVxuICAgICAgICAgICAgICAgIC5maWx0ZXIoaXRlbSA9PiBpdGVtLmVsZW1lbnQubmF0aXZlRWxlbWVudC5wYXJlbnRFbGVtZW50ICE9PSBudWxsKSkpO1xuXG4gICAgICAgIHRoaXMuem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLl92U2Nyb2xsTGlzdGVuZXIgPSB0aGlzLnZlcnRpY2FsU2Nyb2xsSGFuZGxlci5iaW5kKHRoaXMpO1xuICAgICAgICAgICAgdGhpcy52ZXJ0aWNhbFNjcm9sbENvbnRhaW5lci5nZXRWZXJ0aWNhbFNjcm9sbCgpLmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuX3ZTY3JvbGxMaXN0ZW5lcik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLl9oU2Nyb2xsTGlzdGVuZXIgPSB0aGlzLmhvcml6b250YWxTY3JvbGxIYW5kbGVyLmJpbmQodGhpcyk7XG4gICAgICAgICAgICB0aGlzLnBhcmVudFZpcnREaXIuZ2V0SG9yaXpvbnRhbFNjcm9sbCgpLmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuX2hTY3JvbGxMaXN0ZW5lcik7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLl9ob3Jpem9udGFsRm9yT2ZzID0gdGhpcy5jb21iaW5lRm9yT2ZDb2xsZWN0aW9ucyh0aGlzLl9kYXRhUm93TGlzdCwgdGhpcy5fc3VtbWFyeVJvd0xpc3QpO1xuICAgICAgICBjb25zdCB2ZXJ0U2NyREMgPSB0aGlzLnZlcnRpY2FsU2Nyb2xsQ29udGFpbmVyLmRjLmluc3RhbmNlLl92aWV3Q29udGFpbmVyLmVsZW1lbnQubmF0aXZlRWxlbWVudDtcbiAgICAgICAgdmVydFNjckRDLmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIChldnQpID0+IHsgdGhpcy5zY3JvbGxIYW5kbGVyKGV2dCk7IH0pO1xuICAgICAgICB2ZXJ0U2NyREMuYWRkRXZlbnRMaXN0ZW5lcignd2hlZWwnLCAoKSA9PiB7IHRoaXMud2hlZWxIYW5kbGVyKCk7IH0pO1xuICAgICAgICB2ZXJ0U2NyREMuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgKCkgPT4geyB0aGlzLndoZWVsSGFuZGxlcigpOyB9KTtcblxuICAgICAgICB0aGlzLnZlcnRpY2FsU2Nyb2xsQ29udGFpbmVyLm9uRGF0YUNoYW5naW5nLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoKCRldmVudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jYWxjdWxhdGVHcmlkSGVpZ2h0KCk7XG4gICAgICAgICAgICAkZXZlbnQuY29udGFpbmVyU2l6ZSA9IHRoaXMuY2FsY0hlaWdodDtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMudmVydGljYWxTY3JvbGxDb250YWluZXIub25EYXRhQ2hhbmdlZC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLl9kZXN0cm95ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWZsb3coKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuX2luaXQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5jZHIucmVhdHRhY2goKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGNvbWJpbmVGb3JPZkNvbGxlY3Rpb25zKGRhdGFMaXN0LCBzdW1tYXJ5TGlzdCkge1xuICAgICAgICByZXR1cm4gZGF0YUxpc3QubWFwKHJvdyA9PiByb3cudmlydERpclJvdykuY29uY2F0KHN1bW1hcnlMaXN0Lm1hcChyb3cgPT4gcm93LnZpcnREaXJSb3cpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIG5nT25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLnRtcE91dGxldHMuZm9yRWFjaCgodG1wbE91dGxldCkgPT4ge1xuICAgICAgICAgICAgdG1wbE91dGxldC5jbGVhbkNhY2hlKCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnpvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5kb2N1bWVudC5kZWZhdWx0Vmlldy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLnJlc2l6ZUhhbmRsZXIpO1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLl9rZXlkb3duTGlzdGVuZXIpO1xuICAgICAgICAgICAgdGhpcy52ZXJ0aWNhbFNjcm9sbENvbnRhaW5lci5nZXRWZXJ0aWNhbFNjcm9sbCgpLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuX3ZTY3JvbGxMaXN0ZW5lcik7XG4gICAgICAgICAgICB0aGlzLnBhcmVudFZpcnREaXIuZ2V0SG9yaXpvbnRhbFNjcm9sbCgpLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuX2hTY3JvbGxMaXN0ZW5lcik7XG4gICAgICAgICAgICBjb25zdCB2ZXJ0U2NyREMgPSB0aGlzLnZlcnRpY2FsU2Nyb2xsQ29udGFpbmVyLmRjLmluc3RhbmNlLl92aWV3Q29udGFpbmVyLmVsZW1lbnQubmF0aXZlRWxlbWVudDtcbiAgICAgICAgICAgIHZlcnRTY3JEQy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoZXZ0KSA9PiB7IHRoaXMuc2Nyb2xsSGFuZGxlcihldnQpOyB9KTtcbiAgICAgICAgICAgIHZlcnRTY3JEQy5yZW1vdmVFdmVudExpc3RlbmVyKCd3aGVlbCcsICgpID0+IHsgdGhpcy53aGVlbEhhbmRsZXIoKTsgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAodGhpcy5fb2JzZXJ2ZXIpIHtcbiAgICAgICAgICAgIHRoaXMuX29ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRlc3Ryb3kkLm5leHQodHJ1ZSk7XG4gICAgICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcbiAgICAgICAgdGhpcy5fZGVzdHJveWVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIGRhdGFMb2FkaW5nKGV2ZW50KSB7XG4gICAgICAgIHRoaXMub25EYXRhUHJlTG9hZC5lbWl0KGV2ZW50KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUb2dnbGVzIHRoZSBzcGVjaWZpZWQgY29sdW1uJ3MgdmlzaWJpbGl0eS5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogdGhpcy5ncmlkMS50b2dnbGVDb2x1bW5WaXNpYmlsaXR5KHtcbiAgICAgKiAgICAgICBjb2x1bW46IHRoaXMuZ3JpZDEuY29sdW1uc1swXSxcbiAgICAgKiAgICAgICBuZXdWYWx1ZTogdHJ1ZVxuICAgICAqIH0pO1xuICAgICAqIGBgYFxuXHQgKiBAbWVtYmVyb2YgSWd4R3JpZEJhc2VDb21wb25lbnRcbiAgICAgKi9cbiAgICBwdWJsaWMgdG9nZ2xlQ29sdW1uVmlzaWJpbGl0eShhcmdzOiBJQ29sdW1uVmlzaWJpbGl0eUNoYW5nZWRFdmVudEFyZ3MpIHtcbiAgICAgICAgY29uc3QgY29sID0gYXJncy5jb2x1bW4gPyB0aGlzLmNvbHVtbkxpc3QuZmluZCgoYykgPT4gYyA9PT0gYXJncy5jb2x1bW4pIDogdW5kZWZpbmVkO1xuXG4gICAgICAgIGlmICghY29sKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb2wuaGlkZGVuID0gYXJncy5uZXdWYWx1ZTtcbiAgICAgICAgdGhpcy5vbkNvbHVtblZpc2liaWxpdHlDaGFuZ2VkLmVtaXQoYXJncyk7XG5cbiAgICAgICAgdGhpcy5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBuYXRpdmUgZWxlbWVudCBvZiB0aGUgYElneEdyaWRDb21wb25lbnRgLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBjb25zdCBuYXRpdmVFbCA9IHRoaXMuZ3JpZC5uYXRpdmVFbGVtZW50LlxuICAgICAqIGBgYFxuXHQgKiBAbWVtYmVyb2YgSWd4R3JpZEJhc2VDb21wb25lbnRcbiAgICAgKi9cbiAgICBnZXQgbmF0aXZlRWxlbWVudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgZ2V0IG91dGxldCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub3V0bGV0RGlyZWN0aXZlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGBJZ3hHcmlkQ29tcG9uZW50YCdzIHJvd3MgaGVpZ2h0LlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBjb25zdCByb3dIZWlnaCA9IHRoaXMuZ3JpZC5kZWZhdWx0Um93SGVpZ2h0O1xuICAgICAqIGBgYFxuXHQgKiBAbWVtYmVyb2YgSWd4R3JpZEJhc2VDb21wb25lbnRcbiAgICAgKi9cbiAgICBnZXQgZGVmYXVsdFJvd0hlaWdodCgpOiBudW1iZXIge1xuICAgICAgICBzd2l0Y2ggKHRoaXMuZGlzcGxheURlbnNpdHkpIHtcbiAgICAgICAgICAgIGNhc2UgRGlzcGxheURlbnNpdHkuY29zeTpcbiAgICAgICAgICAgICAgICByZXR1cm4gNDA7XG4gICAgICAgICAgICBjYXNlIERpc3BsYXlEZW5zaXR5LmNvbXBhY3Q6XG4gICAgICAgICAgICAgICAgcmV0dXJuIDMyO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gNTA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXQgZGVmYXVsdFN1bW1hcnlIZWlnaHQoKTogbnVtYmVyIHtcbiAgICAgICAgc3dpdGNoICh0aGlzLmRpc3BsYXlEZW5zaXR5KSB7XG4gICAgICAgICAgICBjYXNlIERpc3BsYXlEZW5zaXR5LmNvc3k6XG4gICAgICAgICAgICAgICAgcmV0dXJuIDMwO1xuICAgICAgICAgICAgY2FzZSBEaXNwbGF5RGVuc2l0eS5jb21wYWN0OlxuICAgICAgICAgICAgICAgIHJldHVybiAyNDtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIDM2O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgYElneEdyaWRIZWFkZXJHcm91cENvbXBvbmVudGAncyBtaW5pbXVtIGFsbG93ZWQgd2lkdGguXG4gICAgICogVXNlZCBpbnRlcm5hbGx5IGZvciByZXN0cmljdGluZyBoZWFkZXIgZ3JvdXAgY29tcG9uZW50IHdpZHRoLlxuICAgICAqIFRoZSB2YWx1ZXMgYmVsb3cgZGVwZW5kIG9uIHRoZSBoZWFkZXIgY2VsbCBkZWZhdWx0IHJpZ2h0L2xlZnQgcGFkZGluZyB2YWx1ZXMuXG5cdCAqIEBtZW1iZXJvZiBJZ3hHcmlkQmFzZUNvbXBvbmVudFxuICAgICAqL1xuICAgIGdldCBkZWZhdWx0SGVhZGVyR3JvdXBNaW5XaWR0aCgpOiBudW1iZXIge1xuICAgICAgICBzd2l0Y2ggKHRoaXMuZGlzcGxheURlbnNpdHkpIHtcbiAgICAgICAgICAgIGNhc2UgRGlzcGxheURlbnNpdHkuY29zeTpcbiAgICAgICAgICAgICAgICByZXR1cm4gMzI7XG4gICAgICAgICAgICBjYXNlIERpc3BsYXlEZW5zaXR5LmNvbXBhY3Q6XG4gICAgICAgICAgICAgICAgcmV0dXJuIDI0O1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gNDg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgcGFnaW5hdG9yQ2xhc3NOYW1lKCk6IHN0cmluZyB7XG4gICAgICAgIHN3aXRjaCAodGhpcy5kaXNwbGF5RGVuc2l0eSkge1xuICAgICAgICAgICAgY2FzZSBEaXNwbGF5RGVuc2l0eS5jb3N5OlxuICAgICAgICAgICAgICAgIHJldHVybiAnaWd4LWdyaWQtcGFnaW5hdG9yLS1jb3N5JztcbiAgICAgICAgICAgIGNhc2UgRGlzcGxheURlbnNpdHkuY29tcGFjdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2lneC1ncmlkLXBhZ2luYXRvci0tY29tcGFjdCc7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiAnaWd4LWdyaWQtcGFnaW5hdG9yJztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBwYWdpbmF0b3JTZWxlY3REaXNwbGF5RGVuc2l0eSgpOiBzdHJpbmcge1xuICAgICAgICBpZiAodGhpcy5kaXNwbGF5RGVuc2l0eSA9PT0gRGlzcGxheURlbnNpdHkuY29tZm9ydGFibGUpIHtcbiAgICAgICAgICAgIHJldHVybiBEaXNwbGF5RGVuc2l0eS5jb3N5O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBEaXNwbGF5RGVuc2l0eS5jb21wYWN0O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIG1heGltdW0gd2lkdGggb2YgdGhlIGNvbnRhaW5lciBmb3IgdGhlIHBpbm5lZCBgSWd4Q29sdW1uQ29tcG9uZW50YHMuXG4gICAgICogVGhlIHdpZHRoIGlzIDgwJSBvZiB0aGUgdG90YWwgZ3JpZCB3aWR0aC5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogY29uc3QgbWF4UGlubmVkQ29sV2lkdGggPSB0aGlzLmdyaWQuY2FsY1Bpbm5lZENvbnRhaW5lck1heFdpZHRoO1xuICAgICAqIGBgYFxuXHQgKiBAbWVtYmVyb2YgSWd4R3JpZEJhc2VDb21wb25lbnRcbiAgICAgKi9cbiAgICBnZXQgY2FsY1Bpbm5lZENvbnRhaW5lck1heFdpZHRoKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiAodGhpcy5jYWxjV2lkdGggKiA4MCkgLyAxMDA7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgbWluaW11bSB3aWR0aCBvZiB0aGUgY29udGFpbmVyIGZvciB0aGUgdW5waW5uZWQgYElneENvbHVtbkNvbXBvbmVudGBzLlxuICAgICAqIFRoZSB3aWR0aCBpcyAyMCUgb2YgdGhlIHRvdGFsIGdyaWQgd2lkdGguXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGNvbnN0IG1pblVucGlubmVkQ29sV2lkdGggPSB0aGlzLmdyaWQudW5waW5uZWRBcmVhTWluV2lkdGg7XG4gICAgICogYGBgXG5cdCAqIEBtZW1iZXJvZiBJZ3hHcmlkQmFzZUNvbXBvbmVudFxuICAgICAqL1xuICAgIGdldCB1bnBpbm5lZEFyZWFNaW5XaWR0aCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gKHRoaXMuY2FsY1dpZHRoICogMjApIC8gMTAwO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGN1cnJlbnQgd2lkdGggb2YgdGhlIGNvbnRhaW5lciBmb3IgdGhlIHBpbm5lZCBgSWd4Q29sdW1uQ29tcG9uZW50YHMuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGNvbnN0IHBpbm5lZFdpZHRoID0gdGhpcy5ncmlkLmdldFBpbm5lZFdpZHRoO1xuICAgICAqIGBgYFxuXHQgKiBAbWVtYmVyb2YgSWd4R3JpZEJhc2VDb21wb25lbnRcbiAgICAgKi9cbiAgICBnZXQgcGlubmVkV2lkdGgoKSB7XG4gICAgICAgIGlmICghaXNOYU4odGhpcy5fcGlubmVkV2lkdGgpKSB7IHJldHVybiB0aGlzLl9waW5uZWRXaWR0aDsgfVxuICAgICAgICB0aGlzLl9waW5uZWRXaWR0aCA9IHRoaXMuZ2V0UGlubmVkV2lkdGgoKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Bpbm5lZFdpZHRoO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGN1cnJlbnQgd2lkdGggb2YgdGhlIGNvbnRhaW5lciBmb3IgdGhlIHVucGlubmVkIGBJZ3hDb2x1bW5Db21wb25lbnRgcy5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogY29uc3QgdW5waW5uZWRXaWR0aCA9IHRoaXMuZ3JpZC5nZXRVbnBpbm5lZFdpZHRoO1xuICAgICAqIGBgYFxuXHQgKiBAbWVtYmVyb2YgSWd4R3JpZEJhc2VDb21wb25lbnRcbiAgICAgKi9cbiAgICBnZXQgdW5waW5uZWRXaWR0aCgpIHtcbiAgICAgICAgaWYgKCFpc05hTih0aGlzLl91bnBpbm5lZFdpZHRoKSkgeyByZXR1cm4gdGhpcy5fdW5waW5uZWRXaWR0aDsgfVxuICAgICAgICB0aGlzLl91bnBpbm5lZFdpZHRoID0gdGhpcy5nZXRVbnBpbm5lZFdpZHRoKCk7XG4gICAgICAgIHJldHVybiB0aGlzLl91bnBpbm5lZFdpZHRoO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKiBHZXRzIHRoZSBjb21iaW5lZCB3aWR0aCBvZiB0aGUgY29sdW1ucyB0aGF0IGFyZSBzcGVjaWZpYyB0byB0aGUgZW5hYmxlZCBncmlkIGZlYXR1cmVzLiBUaGV5IGFyZSBmaXhlZC5cbiAgICAgKiBUT0RPOiBVcGRhdGUgZm9yIEFuZ3VsYXIgOC4gQ2FsbGluZyBwYXJlbnQgY2xhc3MgZ2V0dGVyIHVzaW5nIHN1cGVyIGlzIG5vdCBzdXBwb3J0ZWQgZm9yIG5vdy5cbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0IGZlYXR1cmVDb2x1bW5zV2lkdGgoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEZlYXR1cmVDb2x1bW5zV2lkdGgoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgZ2V0IHN1bW1hcmllc01hcmdpbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZmVhdHVyZUNvbHVtbnNXaWR0aDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGFuIGFycmF5IG9mIGBJZ3hDb2x1bW5Db21wb25lbnRgcy5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogY29uc3QgY29sdW1zID0gdGhpcy5ncmlkLmNvbHVtbnMuXG4gICAgICogYGBgXG5cdCAqIEBtZW1iZXJvZiBJZ3hHcmlkQmFzZUNvbXBvbmVudFxuICAgICAqL1xuICAgIGdldCBjb2x1bW5zKCk6IElneENvbHVtbkNvbXBvbmVudFtdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvbHVtbnM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbiBhcnJheSBvZiB0aGUgcGlubmVkIGBJZ3hDb2x1bW5Db21wb25lbnRgcy5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogY29uc3QgcGlubmVkQ29sdW1ucyA9IHRoaXMuZ3JpZC5waW5uZWRDb2x1bW5zLlxuICAgICAqIGBgYFxuXHQgKiBAbWVtYmVyb2YgSWd4R3JpZEJhc2VDb21wb25lbnRcbiAgICAgKi9cbiAgICBnZXQgcGlubmVkQ29sdW1ucygpOiBJZ3hDb2x1bW5Db21wb25lbnRbXSB7XG4gICAgICAgIGlmICh0aGlzLl9waW5uZWRWaXNpYmxlLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3Bpbm5lZFZpc2libGU7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fcGlubmVkVmlzaWJsZSA9IHRoaXMuX3Bpbm5lZENvbHVtbnMuZmlsdGVyKGNvbCA9PiAhY29sLmhpZGRlbik7XG4gICAgICAgIHJldHVybiB0aGlzLl9waW5uZWRWaXNpYmxlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYW4gYXJyYXkgb2YgdW5waW5uZWQgYElneENvbHVtbkNvbXBvbmVudGBzLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBjb25zdCB1bnBpbm5lZENvbHVtbnMgPSB0aGlzLmdyaWQudW5waW5uZWRDb2x1bW5zLlxuICAgICAqIGBgYFxuXHQgKiBAbWVtYmVyb2YgSWd4R3JpZEJhc2VDb21wb25lbnRcbiAgICAgKi9cbiAgICBnZXQgdW5waW5uZWRDb2x1bW5zKCk6IElneENvbHVtbkNvbXBvbmVudFtdIHtcbiAgICAgICAgaWYgKHRoaXMuX3VucGlubmVkVmlzaWJsZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl91bnBpbm5lZFZpc2libGU7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fdW5waW5uZWRWaXNpYmxlID0gdGhpcy5fdW5waW5uZWRDb2x1bW5zLmZpbHRlcigoY29sKSA9PiAhY29sLmhpZGRlbik7XG4gICAgICAgIHJldHVybiB0aGlzLl91bnBpbm5lZFZpc2libGU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgYHdpZHRoYCB0byBiZSBzZXQgb24gYElneEdyaWRIZWFkZXJHcm91cENvbXBvbmVudGAuXG5cdCAqIEBtZW1iZXJvZiBJZ3hHcmlkQmFzZUNvbXBvbmVudFxuICAgICAqL1xuICAgIHB1YmxpYyBnZXRIZWFkZXJHcm91cFdpZHRoKGNvbHVtbjogSWd4Q29sdW1uQ29tcG9uZW50KTogc3RyaW5nIHtcbiAgICAgICAgaWYgKHRoaXMuaGFzQ29sdW1uTGF5b3V0cykge1xuICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNvbFdpZHRoID0gY29sdW1uLndpZHRoO1xuICAgICAgICBjb25zdCBtaW5XaWR0aCA9IHRoaXMuZGVmYXVsdEhlYWRlckdyb3VwTWluV2lkdGg7XG4gICAgICAgIGNvbnN0IGlzUGVyY2VudGFnZVdpZHRoID0gY29sV2lkdGggJiYgdHlwZW9mIGNvbFdpZHRoID09PSAnc3RyaW5nJyAmJiBjb2xXaWR0aC5pbmRleE9mKCclJykgIT09IC0xO1xuXG4gICAgICAgIGlmICghaXNQZXJjZW50YWdlV2lkdGggJiYgcGFyc2VJbnQoY29sdW1uLndpZHRoLCAxMCkgPCBtaW5XaWR0aCkge1xuICAgICAgICAgICAgcmV0dXJuIG1pbldpZHRoLnRvU3RyaW5nKCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY29sdW1uLndpZHRoO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGBJZ3hDb2x1bW5Db21wb25lbnRgIGJ5IGZpZWxkIG5hbWUuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGNvbnN0IG15Q29sID0gdGhpcy5ncmlkMS5nZXRDb2x1bW5CeU5hbWUoXCJJRFwiKTtcbiAgICAgKiBgYGBcbiAgICAgKiBAcGFyYW0gbmFtZVxuICAgICAqIEBtZW1iZXJvZiBJZ3hHcmlkQmFzZUNvbXBvbmVudFxuICAgICAqL1xuICAgIHB1YmxpYyBnZXRDb2x1bW5CeU5hbWUobmFtZTogc3RyaW5nKTogSWd4Q29sdW1uQ29tcG9uZW50IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29sdW1uTGlzdC5maW5kKChjb2wpID0+IGNvbC5maWVsZCA9PT0gbmFtZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgYElneENvbHVtbkNvbXBvbmVudGAgYnkgaW5kZXguXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGNvbnN0IG15Um93ID0gdGhpcy5ncmlkMS5nZXRSb3dCeUluZGV4KDEpO1xuICAgICAqIGBgYFxuICAgICAqIEBwYXJhbSBpbmRleFxuICAgICAqIEBtZW1iZXJvZiBJZ3hHcmlkQmFzZUNvbXBvbmVudFxuICAgICAqL1xuICAgIHB1YmxpYyBnZXRSb3dCeUluZGV4KGluZGV4OiBudW1iZXIpOiBJZ3hSb3dDb21wb25lbnQ8SWd4R3JpZEJhc2VDb21wb25lbnQgJiBJR3JpZERhdGFCaW5kYWJsZT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5ncmlkQVBJLmdldF9yb3dfYnlfaW5kZXgoaW5kZXgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYElneEdyaWRSb3dDb21wb25lbnRgIG9iamVjdCBieSB0aGUgc3BlY2lmaWVkIHByaW1hcnkga2V5IC5cbiAgICAgKiBSZXF1aXJlcyB0aGF0IHRoZSBgcHJpbWFyeUtleWAgcHJvcGVydHkgaXMgc2V0LlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBjb25zdCBteVJvdyA9IHRoaXMuZ3JpZDEuZ2V0Um93QnlLZXkoXCJjZWxsNVwiKTtcbiAgICAgKiBgYGBcbiAgICAgKiBAcGFyYW0ga2V5VmFsdWVcbiAgICAgKiBAbWVtYmVyb2YgSWd4R3JpZEJhc2VDb21wb25lbnRcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0Um93QnlLZXkoa2V5VmFsdWU6IGFueSk6IElneFJvd0NvbXBvbmVudDxJZ3hHcmlkQmFzZUNvbXBvbmVudCAmIElHcmlkRGF0YUJpbmRhYmxlPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmdyaWRBUEkuZ2V0X3Jvd19ieV9rZXkoa2V5VmFsdWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYW4gYXJyYXkgb2YgdmlzaWJsZSBgSWd4Q29sdW1uQ29tcG9uZW50YHMuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGNvbnN0IHZpc2libGVDb2x1bW5zID0gdGhpcy5ncmlkLnZpc2libGVDb2x1bW5zLlxuICAgICAqIGBgYFxuXHQgKiBAbWVtYmVyb2YgSWd4R3JpZEJhc2VDb21wb25lbnRcbiAgICAgKi9cbiAgICBnZXQgdmlzaWJsZUNvbHVtbnMoKTogSWd4Q29sdW1uQ29tcG9uZW50W10ge1xuICAgICAgICBpZiAodGhpcy5fdmlzaWJsZUNvbHVtbnMubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdmlzaWJsZUNvbHVtbnM7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fdmlzaWJsZUNvbHVtbnMgPSB0aGlzLmNvbHVtbkxpc3QuZmlsdGVyKGMgPT4gIWMuaGlkZGVuKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Zpc2libGVDb2x1bW5zO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGBJZ3hHcmlkQ2VsbENvbXBvbmVudGAgdGhhdCBtYXRjaGVzIHRoZSBjb25kaXRpb25zLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBjb25zdCBteUNlbGwgPSB0aGlzLmdyaWQxLmdldENlbGxCeUNvbHVtbigyLFwiVW5pdFByaWNlXCIpO1xuICAgICAqIGBgYFxuICAgICAqIEBwYXJhbSByb3dJbmRleFxuICAgICAqIEBwYXJhbSBjb2x1bW5GaWVsZFxuICAgICAqIEBtZW1iZXJvZiBJZ3hHcmlkQmFzZUNvbXBvbmVudFxuICAgICAqL1xuICAgIHB1YmxpYyBnZXRDZWxsQnlDb2x1bW4ocm93SW5kZXg6IG51bWJlciwgY29sdW1uRmllbGQ6IHN0cmluZyk6IElneEdyaWRDZWxsQ29tcG9uZW50IHtcbiAgICAgICAgY29uc3QgY29sdW1uSWQgPSB0aGlzLmNvbHVtbkxpc3QubWFwKChjb2x1bW4pID0+IGNvbHVtbi5maWVsZCkuaW5kZXhPZihjb2x1bW5GaWVsZCk7XG4gICAgICAgIGlmIChjb2x1bW5JZCAhPT0gLTEpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdyaWRBUEkuZ2V0X2NlbGxfYnlfaW5kZXgocm93SW5kZXgsIGNvbHVtbklkKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYW4gYElneEdyaWRDZWxsQ29tcG9uZW50YCBvYmplY3QgYnkgdGhlIHNwZWNpZmllZCBwcmltYXJ5IGtleSBhbmQgY29sdW1uIGZpZWxkLlxuICAgICAqIFJlcXVpcmVzIHRoYXQgdGhlIHByaW1hcnlLZXkgcHJvcGVydHkgaXMgc2V0LlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBncmlkLmdldENlbGxCeUtleSgxLCAnaW5kZXgnKTtcbiAgICAgKiBgYGBcbiAgICAgKiBAcGFyYW0gcm93U2VsZWN0b3IgbWF0Y2ggYW55IHJvd0lEXG4gICAgICogQHBhcmFtIGNvbHVtbkZpZWxkXG4gICAgICogQG1lbWJlcm9mIElneEdyaWRCYXNlQ29tcG9uZW50XG4gICAgICovXG4gICAgcHVibGljIGdldENlbGxCeUtleShyb3dTZWxlY3RvcjogYW55LCBjb2x1bW5GaWVsZDogc3RyaW5nKTogSWd4R3JpZENlbGxDb21wb25lbnQge1xuICAgICAgICByZXR1cm4gdGhpcy5ncmlkQVBJLmdldF9jZWxsX2J5X2tleShyb3dTZWxlY3RvciwgY29sdW1uRmllbGQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHRvdGFsIG51bWJlciBvZiBwYWdlcy5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogY29uc3QgdG90YWxQYWdlcyA9IHRoaXMuZ3JpZC50b3RhbFBhZ2VzO1xuICAgICAqIGBgYFxuXHQgKiBAbWVtYmVyb2YgSWd4R3JpZEJhc2VDb21wb25lbnRcbiAgICAgKi9cbiAgICBnZXQgdG90YWxQYWdlcygpOiBudW1iZXIge1xuICAgICAgICBpZiAodGhpcy5wYWdpbmdTdGF0ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFnaW5nU3RhdGUubWV0YWRhdGEuY291bnRQYWdlcztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gLTE7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBpZiB0aGUgY3VycmVudCBwYWdlIGlzIHRoZSBmaXJzdCBwYWdlLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBjb25zdCBmaXJzdFBhZ2UgPSB0aGlzLmdyaWQuaXNGaXJzdFBhZ2U7XG4gICAgICogYGBgXG5cdCAqIEBtZW1iZXJvZiBJZ3hHcmlkQmFzZUNvbXBvbmVudFxuICAgICAqL1xuICAgIGdldCBpc0ZpcnN0UGFnZSgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGFnZSA9PT0gMDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHb2VzIHRvIHRoZSBuZXh0IHBhZ2Ugb2YgdGhlIGBJZ3hHcmlkQ29tcG9uZW50YCwgaWYgdGhlIGdyaWQgaXMgbm90IGFscmVhZHkgYXQgdGhlIGxhc3QgcGFnZS5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogdGhpcy5ncmlkMS5uZXh0UGFnZSgpO1xuICAgICAqIGBgYFxuXHQgKiBAbWVtYmVyb2YgSWd4R3JpZEJhc2VDb21wb25lbnRcbiAgICAgKi9cbiAgICBwdWJsaWMgbmV4dFBhZ2UoKTogdm9pZCB7XG4gICAgICAgIGlmICghdGhpcy5pc0xhc3RQYWdlKSB7XG4gICAgICAgICAgICB0aGlzLnBhZ2UgKz0gMTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdvZXMgdG8gdGhlIHByZXZpb3VzIHBhZ2Ugb2YgdGhlIGBJZ3hHcmlkQ29tcG9uZW50YCwgaWYgdGhlIGdyaWQgaXMgbm90IGFscmVhZHkgYXQgdGhlIGZpcnN0IHBhZ2UuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIHRoaXMuZ3JpZDEucHJldmlvdXNQYWdlKCk7XG4gICAgICogYGBgXG5cdCAqIEBtZW1iZXJvZiBJZ3hHcmlkQmFzZUNvbXBvbmVudFxuICAgICAqL1xuICAgIHB1YmxpYyBwcmV2aW91c1BhZ2UoKTogdm9pZCB7XG4gICAgICAgIGlmICghdGhpcy5pc0ZpcnN0UGFnZSkge1xuICAgICAgICAgICAgdGhpcy5wYWdlIC09IDE7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSB0b3RhbCBudW1iZXIgb2YgcmVjb3Jkcy5cbiAgICAgKiBPbmx5IGZ1bmN0aW9ucyB3aGVuIHBhZ2luZyBpcyBlbmFibGVkLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBjb25zdCB0b3RhbFJlY29yZHMgPSB0aGlzLmdyaWQudG90YWxSZWNvcmRzO1xuICAgICAqIGBgYFxuXHQgKiBAbWVtYmVyb2YgSWd4R3JpZEJhc2VDb21wb25lbnRcbiAgICAgKi9cbiAgICBnZXQgdG90YWxSZWNvcmRzKCk6IG51bWJlciB7XG4gICAgICAgIGlmICh0aGlzLnBhZ2luZ1N0YXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wYWdpbmdTdGF0ZS5tZXRhZGF0YS5jb3VudFJlY29yZHM7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGlmIHRoZSBjdXJyZW50IHBhZ2UgaXMgdGhlIGxhc3QgcGFnZS5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogY29uc3QgbGFzdFBhZ2UgPSB0aGlzLmdyaWQuaXNMYXN0UGFnZTtcbiAgICAgKiBgYGBcblx0ICogQG1lbWJlcm9mIElneEdyaWRCYXNlQ29tcG9uZW50XG4gICAgICovXG4gICAgZ2V0IGlzTGFzdFBhZ2UoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLnBhZ2UgKyAxID49IHRoaXMudG90YWxQYWdlcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSB0b3RhbCB3aWR0aCBvZiB0aGUgYElneEdyaWRDb21wb25lbnRgLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBjb25zdCBncmlkV2lkdGggPSB0aGlzLmdyaWQudG90YWxXaWR0aDtcbiAgICAgKiBgYGBcblx0ICogQG1lbWJlcm9mIElneEdyaWRCYXNlQ29tcG9uZW50XG4gICAgICovXG4gICAgZ2V0IHRvdGFsV2lkdGgoKTogbnVtYmVyIHtcbiAgICAgICAgaWYgKCFpc05hTih0aGlzLl90b3RhbFdpZHRoKSkgeyByZXR1cm4gdGhpcy5fdG90YWxXaWR0aDsgfVxuICAgICAgICAvLyBUYWtlIG9ubHkgdG9wIGxldmVsIGNvbHVtbnNcbiAgICAgICAgY29uc3QgY29scyA9IHRoaXMudmlzaWJsZUNvbHVtbnMuZmlsdGVyKGNvbCA9PiBjb2wubGV2ZWwgPT09IDAgJiYgIWNvbC5waW5uZWQpO1xuICAgICAgICBsZXQgdG90YWxXaWR0aCA9IDA7XG4gICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgZm9yIChpOyBpIDwgY29scy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdG90YWxXaWR0aCArPSBwYXJzZUludChjb2xzW2ldLmNhbGNXaWR0aCwgMTApIHx8IDA7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fdG90YWxXaWR0aCA9IHRvdGFsV2lkdGg7XG4gICAgICAgIHJldHVybiB0b3RhbFdpZHRoO1xuICAgIH1cblxuICAgIGdldCBzaG93Um93Q2hlY2tib3hlcygpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucm93U2VsZWN0YWJsZSAmJiB0aGlzLmNvbHVtbnMubGVuZ3RoID4gdGhpcy5oaWRkZW5Db2x1bW5zQ291bnQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHByb3RlY3RlZCBfbW92ZUNvbHVtbnMoZnJvbTogSWd4Q29sdW1uQ29tcG9uZW50LCB0bzogSWd4Q29sdW1uQ29tcG9uZW50LCBwb3M6IERyb3BQb3NpdGlvbikge1xuICAgICAgICBjb25zdCBsaXN0ID0gdGhpcy5jb2x1bW5MaXN0LnRvQXJyYXkoKTtcbiAgICAgICAgY29uc3QgZnJvbUluZGV4ID0gbGlzdC5pbmRleE9mKGZyb20pO1xuICAgICAgICBsZXQgdG9JbmRleCA9IGxpc3QuaW5kZXhPZih0byk7XG5cbiAgICAgICAgaWYgKHBvcyA9PT0gRHJvcFBvc2l0aW9uLkJlZm9yZURyb3BUYXJnZXQpIHtcbiAgICAgICAgICAgIHRvSW5kZXgtLTtcbiAgICAgICAgICAgIGlmICh0b0luZGV4IDwgMCkge1xuICAgICAgICAgICAgICAgIHRvSW5kZXggPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHBvcyA9PT0gRHJvcFBvc2l0aW9uLkFmdGVyRHJvcFRhcmdldCkge1xuICAgICAgICAgICAgdG9JbmRleCsrO1xuICAgICAgICB9XG5cbiAgICAgICAgbGlzdC5zcGxpY2UodG9JbmRleCwgMCwgLi4ubGlzdC5zcGxpY2UoZnJvbUluZGV4LCAxKSk7XG4gICAgICAgIGNvbnN0IG5ld0xpc3QgPSB0aGlzLl9yZXNldENvbHVtbkxpc3QobGlzdCk7XG4gICAgICAgIHRoaXMuY29sdW1uTGlzdC5yZXNldChuZXdMaXN0KTtcbiAgICAgICAgdGhpcy5jb2x1bW5MaXN0Lm5vdGlmeU9uQ2hhbmdlcygpO1xuICAgICAgICB0aGlzLl9jb2x1bW5zID0gdGhpcy5jb2x1bW5MaXN0LnRvQXJyYXkoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHJvdGVjdGVkIF9yZXNldENvbHVtbkxpc3QobGlzdD8pIHtcbiAgICAgICAgaWYgKCFsaXN0KSB7XG4gICAgICAgICAgICBsaXN0ID0gdGhpcy5jb2x1bW5MaXN0LnRvQXJyYXkoKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgbmV3TGlzdCA9IFtdO1xuICAgICAgICBsaXN0LmZpbHRlcihjID0+IGMubGV2ZWwgPT09IDApLmZvckVhY2gocCA9PiB7XG4gICAgICAgICAgICBuZXdMaXN0LnB1c2gocCk7XG4gICAgICAgICAgICBpZiAocC5jb2x1bW5Hcm91cCkge1xuICAgICAgICAgICAgICAgIG5ld0xpc3QgPSBuZXdMaXN0LmNvbmNhdChwLmFsbENoaWxkcmVuKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBuZXdMaXN0O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgX3Jlb3JkZXJQaW5uZWRDb2x1bW5zKGZyb206IElneENvbHVtbkNvbXBvbmVudCwgdG86IElneENvbHVtbkNvbXBvbmVudCwgcG9zaXRpb246IERyb3BQb3NpdGlvbikge1xuICAgICAgICBjb25zdCBwaW5uZWQgPSB0aGlzLl9waW5uZWRDb2x1bW5zO1xuICAgICAgICBsZXQgZHJvcEluZGV4ID0gcGlubmVkLmluZGV4T2YodG8pO1xuXG4gICAgICAgIGlmICh0by5jb2x1bW5Hcm91cCkge1xuICAgICAgICAgICAgZHJvcEluZGV4ICs9IHRvLmFsbENoaWxkcmVuLmxlbmd0aDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwb3NpdGlvbiA9PT0gRHJvcFBvc2l0aW9uLkJlZm9yZURyb3BUYXJnZXQpIHtcbiAgICAgICAgICAgIGRyb3BJbmRleC0tO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHBvc2l0aW9uID09PSBEcm9wUG9zaXRpb24uQWZ0ZXJEcm9wVGFyZ2V0KSB7XG4gICAgICAgICAgICBkcm9wSW5kZXgrKztcbiAgICAgICAgfVxuXG4gICAgICAgIHBpbm5lZC5zcGxpY2UoZHJvcEluZGV4LCAwLCAuLi5waW5uZWQuc3BsaWNlKHBpbm5lZC5pbmRleE9mKGZyb20pLCAxKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHByb3RlY3RlZCBfbW92ZUNoaWxkQ29sdW1ucyhwYXJlbnQ6IElneENvbHVtbkNvbXBvbmVudCwgZnJvbTogSWd4Q29sdW1uQ29tcG9uZW50LCB0bzogSWd4Q29sdW1uQ29tcG9uZW50LCBwb3M6IERyb3BQb3NpdGlvbikge1xuICAgICAgICBjb25zdCBidWZmZXIgPSBwYXJlbnQuY2hpbGRyZW4udG9BcnJheSgpO1xuICAgICAgICBjb25zdCBmcm9tSW5kZXggPSBidWZmZXIuaW5kZXhPZihmcm9tKTtcbiAgICAgICAgbGV0IHRvSW5kZXggPSBidWZmZXIuaW5kZXhPZih0byk7XG5cbiAgICAgICAgaWYgKHBvcyA9PT0gRHJvcFBvc2l0aW9uLkJlZm9yZURyb3BUYXJnZXQpIHtcbiAgICAgICAgICAgIHRvSW5kZXgtLTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwb3MgPT09IERyb3BQb3NpdGlvbi5BZnRlckRyb3BUYXJnZXQpIHtcbiAgICAgICAgICAgIHRvSW5kZXgrKztcbiAgICAgICAgfVxuXG4gICAgICAgIGJ1ZmZlci5zcGxpY2UodG9JbmRleCwgMCwgLi4uYnVmZmVyLnNwbGljZShmcm9tSW5kZXgsIDEpKTtcbiAgICAgICAgcGFyZW50LmNoaWxkcmVuLnJlc2V0KGJ1ZmZlcik7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIE1vdmVzIGEgY29sdW1uIHRvIHRoZSBzcGVjaWZpZWQgZHJvcCB0YXJnZXQuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGdyaWQubW92ZUNvbHVtbihjb21wTmFtZSwgcGVyc0RldGFpbHMpO1xuICAgICAqIGBgYFxuXHQgICogQG1lbWJlcm9mIElneEdyaWRCYXNlQ29tcG9uZW50XG5cdCAgKi9cbiAgICBwdWJsaWMgbW92ZUNvbHVtbihjb2x1bW46IElneENvbHVtbkNvbXBvbmVudCwgZHJvcFRhcmdldDogSWd4Q29sdW1uQ29tcG9uZW50LCBwb3M6IERyb3BQb3NpdGlvbiA9IERyb3BQb3NpdGlvbi5Ob25lKSB7XG5cbiAgICAgICAgbGV0IHBvc2l0aW9uID0gcG9zO1xuICAgICAgICBjb25zdCBmcm9tSW5kZXggPSBjb2x1bW4udmlzaWJsZUluZGV4O1xuICAgICAgICBjb25zdCB0b0luZGV4ID0gZHJvcFRhcmdldC52aXNpYmxlSW5kZXg7XG5cbiAgICAgICAgaWYgKHBvcyA9PT0gRHJvcFBvc2l0aW9uLkJlZm9yZURyb3BUYXJnZXQgJiYgZnJvbUluZGV4IDwgdG9JbmRleCkge1xuICAgICAgICAgICAgcG9zaXRpb24gPSBEcm9wUG9zaXRpb24uQmVmb3JlRHJvcFRhcmdldDtcbiAgICAgICAgfSBlbHNlIGlmIChwb3MgPT09IERyb3BQb3NpdGlvbi5BZnRlckRyb3BUYXJnZXQgJiYgZnJvbUluZGV4ID4gdG9JbmRleCkge1xuICAgICAgICAgICAgcG9zaXRpb24gPSBEcm9wUG9zaXRpb24uQWZ0ZXJEcm9wVGFyZ2V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcG9zaXRpb24gPSBEcm9wUG9zaXRpb24uTm9uZTtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgaWYgKChjb2x1bW4ubGV2ZWwgIT09IGRyb3BUYXJnZXQubGV2ZWwpIHx8XG4gICAgICAgICAgICAoY29sdW1uLnRvcExldmVsUGFyZW50ICE9PSBkcm9wVGFyZ2V0LnRvcExldmVsUGFyZW50KSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5lbmRFZGl0KHRydWUpO1xuICAgICAgICBpZiAoY29sdW1uLmxldmVsKSB7XG4gICAgICAgICAgICB0aGlzLl9tb3ZlQ2hpbGRDb2x1bW5zKGNvbHVtbi5wYXJlbnQsIGNvbHVtbiwgZHJvcFRhcmdldCwgcG9zaXRpb24pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGRyb3BUYXJnZXQucGlubmVkICYmIGNvbHVtbi5waW5uZWQpIHtcbiAgICAgICAgICAgIHRoaXMuX3Jlb3JkZXJQaW5uZWRDb2x1bW5zKGNvbHVtbiwgZHJvcFRhcmdldCwgcG9zaXRpb24pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGRyb3BUYXJnZXQucGlubmVkICYmICFjb2x1bW4ucGlubmVkKSB7XG4gICAgICAgICAgICBjb2x1bW4ucGluKCk7XG4gICAgICAgICAgICB0aGlzLl9yZW9yZGVyUGlubmVkQ29sdW1ucyhjb2x1bW4sIGRyb3BUYXJnZXQsIHBvc2l0aW9uKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghZHJvcFRhcmdldC5waW5uZWQgJiYgY29sdW1uLnBpbm5lZCkge1xuICAgICAgICAgICAgY29sdW1uLnVucGluKCk7XG5cbiAgICAgICAgICAgIGNvbnN0IGxpc3QgPSB0aGlzLmNvbHVtbkxpc3QudG9BcnJheSgpO1xuICAgICAgICAgICAgY29uc3QgZmkgPSBsaXN0LmluZGV4T2YoY29sdW1uKTtcbiAgICAgICAgICAgIGNvbnN0IHRpID0gbGlzdC5pbmRleE9mKGRyb3BUYXJnZXQpO1xuXG4gICAgICAgICAgICBpZiAocG9zID09PSBEcm9wUG9zaXRpb24uQmVmb3JlRHJvcFRhcmdldCAmJiBmaSA8IHRpKSB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb24gPSBEcm9wUG9zaXRpb24uQmVmb3JlRHJvcFRhcmdldDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocG9zID09PSBEcm9wUG9zaXRpb24uQWZ0ZXJEcm9wVGFyZ2V0ICYmIGZpID4gdGkpIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbiA9IERyb3BQb3NpdGlvbi5BZnRlckRyb3BUYXJnZXQ7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uID0gRHJvcFBvc2l0aW9uLk5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9tb3ZlQ29sdW1ucyhjb2x1bW4sIGRyb3BUYXJnZXQsIHBvc2l0aW9uKTtcbiAgICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgICBpZiAodGhpcy5oYXNDb2x1bW5MYXlvdXRzKSB7XG4gICAgICAgICAgICB0aGlzLmNvbHVtbnMuZmlsdGVyKHggPT4geC5jb2x1bW5MYXlvdXQpLmZvckVhY2goeCA9PiB4LnBvcHVsYXRlVmlzaWJsZUluZGV4ZXMoKSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBhcmdzID0ge1xuICAgICAgICAgICAgc291cmNlOiBjb2x1bW4sXG4gICAgICAgICAgICB0YXJnZXQ6IGRyb3BUYXJnZXRcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLm9uQ29sdW1uTW92aW5nRW5kLmVtaXQoYXJncyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR29lcyB0byB0aGUgZGVzaXJlZCBwYWdlIGluZGV4LlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiB0aGlzLmdyaWQxLnBhZ2luYXRlKDEpO1xuICAgICAqIGBgYFxuICAgICAqIEBwYXJhbSB2YWxcbiAgICAgKiBAbWVtYmVyb2YgSWd4R3JpZEJhc2VDb21wb25lbnRcbiAgICAgKi9cbiAgICBwdWJsaWMgcGFnaW5hdGUodmFsOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgaWYgKHZhbCA8IDAgfHwgdmFsID4gdGhpcy50b3RhbFBhZ2VzIC0gMSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5wYWdlID0gdmFsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE1hbnVhbGx5IG1hcmtzIHRoZSBgSWd4R3JpZENvbXBvbmVudGAgZm9yIGNoYW5nZSBkZXRlY3Rpb24uXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIHRoaXMuZ3JpZDEubWFya0ZvckNoZWNrKCk7XG4gICAgICogYGBgXG5cdCAqIEBtZW1iZXJvZiBJZ3hHcmlkQmFzZUNvbXBvbmVudFxuICAgICAqL1xuICAgIHB1YmxpYyBtYXJrRm9yQ2hlY2soKSB7XG4gICAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgbmV3IGBJZ3hHcmlkUm93Q29tcG9uZW50YCBhbmQgYWRkcyB0aGUgZGF0YSByZWNvcmQgdG8gdGhlIGVuZCBvZiB0aGUgZGF0YSBzb3VyY2UuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGNvbnN0IHJlY29yZCA9IHtcbiAgICAgKiAgICAgSUQ6IHRoaXMuZ3JpZDEuZGF0YVt0aGlzLmdyaWQxLmRhdGEubGVuZ3RoIC0gMV0uSUQgKyAxLFxuICAgICAqICAgICBOYW1lOiB0aGlzLm5ld1JlY29yZFxuICAgICAqIH07XG4gICAgICogdGhpcy5ncmlkMS5hZGRSb3cocmVjb3JkKTtcbiAgICAgKiBgYGBcbiAgICAgKiBAcGFyYW0gZGF0YVxuICAgICAqIEBtZW1iZXJvZiBJZ3hHcmlkQmFzZUNvbXBvbmVudFxuICAgICAqL1xuICAgIHB1YmxpYyBhZGRSb3coZGF0YTogYW55KTogdm9pZCB7XG4gICAgICAgIC8vIGNvbW1pdCBwZW5kaW5nIHN0YXRlcyBwcmlvciB0byBhZGRpbmcgYSByb3dcbiAgICAgICAgdGhpcy5lbmRFZGl0KHRydWUpO1xuICAgICAgICB0aGlzLmdyaWRBUEkuYWRkUm93VG9EYXRhKGRhdGEpO1xuXG4gICAgICAgIHRoaXMub25Sb3dBZGRlZC5lbWl0KHsgZGF0YSB9KTtcbiAgICAgICAgdGhpcy5fcGlwZVRyaWdnZXIrKztcbiAgICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyB0aGUgYElneEdyaWRSb3dDb21wb25lbnRgIGFuZCB0aGUgY29ycmVzcG9uZGluZyBkYXRhIHJlY29yZCBieSBwcmltYXJ5IGtleS5cbiAgICAgKiBSZXF1aXJlcyB0aGF0IHRoZSBgcHJpbWFyeUtleWAgcHJvcGVydHkgaXMgc2V0LlxuICAgICAqIFRoZSBtZXRob2QgYWNjZXB0IHJvd1NlbGVjdG9yIGFzIGEgcGFyYW1ldGVyLCB3aGljaCBpcyB0aGUgcm93SUQuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIHRoaXMuZ3JpZDEuZGVsZXRlUm93KDApO1xuICAgICAqIGBgYFxuICAgICAqIEBwYXJhbSByb3dTZWxlY3RvclxuICAgICAqIEBtZW1iZXJvZiBJZ3hHcmlkQmFzZUNvbXBvbmVudFxuICAgICAqL1xuICAgIHB1YmxpYyBkZWxldGVSb3cocm93U2VsZWN0b3I6IGFueSk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5wcmltYXJ5S2V5ICE9PSB1bmRlZmluZWQgJiYgdGhpcy5wcmltYXJ5S2V5ICE9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmRlbGV0ZVJvd0J5SWQocm93U2VsZWN0b3IpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqIEBoaWRkZW4gKi9cbiAgICBwdWJsaWMgZGVsZXRlUm93QnlJZChyb3dJZDogYW55KSB7XG4gICAgICAgIHRoaXMuZ3JpZEFQSS5kZWxldGVSb3dCeUlkKHJvd0lkKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGRlbGV0ZVJvd0Zyb21EYXRhKHJvd0lEOiBhbnksIGluZGV4OiBudW1iZXIpIHtcbiAgICAgICAgLy8gIGlmIHRoZXJlIGlzIGEgcm93IChpbmRleCAhPT0gMCkgZGVsZXRlIGl0XG4gICAgICAgIC8vICBpZiB0aGVyZSBpcyBhIHJvdyBpbiBBREQgb3IgVVBEQVRFIHN0YXRlIGNoYW5nZSBpdCdzIHN0YXRlIHRvIERFTEVURVxuICAgICAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICBpZiAodGhpcy50cmFuc2FjdGlvbnMuZW5hYmxlZCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRyYW5zYWN0aW9uOiBUcmFuc2FjdGlvbiA9IHsgaWQ6IHJvd0lELCB0eXBlOiBUcmFuc2FjdGlvblR5cGUuREVMRVRFLCBuZXdWYWx1ZTogbnVsbCB9O1xuICAgICAgICAgICAgICAgIHRoaXMudHJhbnNhY3Rpb25zLmFkZCh0cmFuc2FjdGlvbiwgdGhpcy5kYXRhW2luZGV4XSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuZGF0YS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3Qgc3RhdGU6IFN0YXRlID0gdGhpcy50cmFuc2FjdGlvbnMuZ2V0U3RhdGUocm93SUQpO1xuICAgICAgICAgICAgdGhpcy50cmFuc2FjdGlvbnMuYWRkKHsgaWQ6IHJvd0lELCB0eXBlOiBUcmFuc2FjdGlvblR5cGUuREVMRVRFLCBuZXdWYWx1ZTogbnVsbCB9LCBzdGF0ZSAmJiBzdGF0ZS5yZWNvcmRSZWYpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlcyB0aGUgYElneEdyaWRSb3dDb21wb25lbnRgIGFuZCB0aGUgY29ycmVzcG9uZGluZyBkYXRhIHJlY29yZCBieSBwcmltYXJ5IGtleS5cbiAgICAgKiBSZXF1aXJlcyB0aGF0IHRoZSBgcHJpbWFyeUtleWAgcHJvcGVydHkgaXMgc2V0LlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiB0aGlzLmdyaWRXaXRoUEsudXBkYXRlQ2VsbCgnVXBkYXRlZCcsIDEsICdQcm9kdWN0TmFtZScpO1xuICAgICAqIGBgYFxuICAgICAqIEBwYXJhbSB2YWx1ZSB0aGUgbmV3IHZhbHVlIHdoaWNoIGlzIHRvIGJlIHNldC5cbiAgICAgKiBAcGFyYW0gcm93U2VsZWN0b3IgY29ycmVzcG9uZHMgdG8gcm93SUQuXG4gICAgICogQHBhcmFtIGNvbHVtbiBjb3JyZXNwb25kcyB0byBjb2x1bW4gZmllbGQuXG4gICAgICogQG1lbWJlcm9mIElneEdyaWRCYXNlQ29tcG9uZW50XG4gICAgICovXG4gICAgcHVibGljIHVwZGF0ZUNlbGwodmFsdWU6IGFueSwgcm93U2VsZWN0b3I6IGFueSwgY29sdW1uOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuaXNEZWZpbmVkKHRoaXMucHJpbWFyeUtleSkpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbCA9IHRoaXMuY29sdW1uTGlzdC50b0FycmF5KCkuZmluZChjID0+IGMuZmllbGQgPT09IGNvbHVtbik7XG4gICAgICAgICAgICBpZiAoY29sKSB7XG4gICAgICAgICAgICAgICAgLy8gU2ltcGxpZnlcbiAgICAgICAgICAgICAgICBjb25zdCByb3dEYXRhID0gdGhpcy5ncmlkQVBJLmdldFJvd0RhdGEocm93U2VsZWN0b3IpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5ncmlkQVBJLmdldF9yb3dfaW5kZXhfaW5fZGF0YShyb3dTZWxlY3Rvcik7XG4gICAgICAgICAgICAgICAgLy8gSWYgcm93IHBhc3NlZCBpcyBpbnZhbGlkXG4gICAgICAgICAgICAgICAgaWYgKGluZGV4IDwgMCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IGlkID0ge1xuICAgICAgICAgICAgICAgICAgICByb3dJRDogcm93U2VsZWN0b3IsXG4gICAgICAgICAgICAgICAgICAgIGNvbHVtbklEOiBjb2wuaW5kZXgsXG4gICAgICAgICAgICAgICAgICAgIHJvd0luZGV4OiBpbmRleFxuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICBjb25zdCBjZWxsID0gbmV3IElneENlbGwoaWQsIGluZGV4LCBjb2wsIHJvd0RhdGFbY29sLmZpZWxkXSwgcm93RGF0YVtjb2wuZmllbGRdLCByb3dEYXRhKTtcbiAgICAgICAgICAgICAgICBjb25zdCBhcmdzID0gdGhpcy5ncmlkQVBJLnVwZGF0ZV9jZWxsKGNlbGwsIHZhbHVlKTtcblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNydWRTZXJ2aWNlLmNlbGwgJiYgdGhpcy5jcnVkU2VydmljZS5zYW1lQ2VsbChjZWxsKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoYXJncy5jYW5jZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdyaWRBUEkuZXNjYXBlX2VkaXRNb2RlKCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGVzIHRoZSBgSWd4R3JpZFJvd0NvbXBvbmVudGAsIHdoaWNoIGlzIHNwZWNpZmllZCBieVxuICAgICAqIHJvd1NlbGVjdG9yIHBhcmFtZXRlciBhbmQgdGhlIGRhdGEgc291cmNlIHJlY29yZCB3aXRoIHRoZSBwYXNzZWQgdmFsdWUuXG4gICAgICogVGhpcyBtZXRob2Qgd2lsbCBhcHBseSByZXF1ZXN0ZWQgdXBkYXRlIG9ubHkgaWYgcHJpbWFyeSBrZXkgaXMgc3BlY2lmaWVkIGluIHRoZSBncmlkLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBncmlkLnVwZGF0ZVJvdyh7XG4gICAgICogICAgICAgUHJvZHVjdElEOiAxLCBQcm9kdWN0TmFtZTogJ1NwZWFybWludCcsIEluU3RvY2s6IHRydWUsIFVuaXRzSW5TdG9jazogMSwgT3JkZXJEYXRlOiBuZXcgRGF0ZSgnMjAwNS0wMy0yMScpXG4gICAgICogICB9LCAxKTtcbiAgICAgKiBgYGBcbiAgICAgKiBAcGFyYW0gdmFsdWVcbiAgICAgKiBAcGFyYW0gcm93U2VsZWN0b3IgY29ycmVzcG9uZCB0byByb3dJRFxuICAgICAqIEBtZW1iZXJvZiBJZ3hHcmlkQmFzZUNvbXBvbmVudFxuICAgICAqL1xuICAgIHB1YmxpYyB1cGRhdGVSb3codmFsdWU6IGFueSwgcm93U2VsZWN0b3I6IGFueSk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5pc0RlZmluZWQodGhpcy5wcmltYXJ5S2V5KSkge1xuICAgICAgICAgICAgY29uc3QgZWRpdGFibGVDZWxsID0gdGhpcy5jcnVkU2VydmljZS5jZWxsO1xuICAgICAgICAgICAgaWYgKGVkaXRhYmxlQ2VsbCAmJiBlZGl0YWJsZUNlbGwuaWQucm93SUQgPT09IHJvd1NlbGVjdG9yKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ncmlkQVBJLmVzY2FwZV9lZGl0TW9kZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3Qgcm93ID0gbmV3IElneFJvdyhyb3dTZWxlY3RvciwgLTEsIHRoaXMuZ3JpZEFQSS5nZXRSb3dEYXRhKHJvd1NlbGVjdG9yKSk7XG4gICAgICAgICAgICB0aGlzLmdyaWRBUEkudXBkYXRlX3Jvdyhyb3csIHZhbHVlKTtcbiAgICAgICAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU29ydCBhIHNpbmdsZSBgSWd4Q29sdW1uQ29tcG9uZW50YC5cbiAgICAgKiBTb3J0IHRoZSBgSWd4R3JpZENvbXBvbmVudGAncyBgSWd4Q29sdW1uQ29tcG9uZW50YCBiYXNlZCBvbiB0aGUgcHJvdmlkZWQgYXJyYXkgb2Ygc29ydGluZyBleHByZXNzaW9ucy5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogdGhpcy5ncmlkLnNvcnQoeyBmaWVsZE5hbWU6IG5hbWUsIGRpcjogU29ydGluZ0RpcmVjdGlvbi5Bc2MsIGlnbm9yZUNhc2U6IGZhbHNlIH0pO1xuICAgICAqIGBgYFxuXHQgKiBAbWVtYmVyb2YgSWd4R3JpZEJhc2VDb21wb25lbnRcbiAgICAgKi9cbiAgICBwdWJsaWMgc29ydChleHByZXNzaW9uOiBJU29ydGluZ0V4cHJlc3Npb24gfCBBcnJheTxJU29ydGluZ0V4cHJlc3Npb24+KTogdm9pZCB7XG4gICAgICAgIHRoaXMuZW5kRWRpdChmYWxzZSk7XG4gICAgICAgIGlmIChleHByZXNzaW9uIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICAgIHRoaXMuZ3JpZEFQSS5zb3J0X211bHRpcGxlKGV4cHJlc3Npb24pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5ncmlkQVBJLnNvcnQoZXhwcmVzc2lvbik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5vblNvcnRpbmdEb25lLmVtaXQoZXhwcmVzc2lvbik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRmlsdGVycyBhIHNpbmdsZSBgSWd4Q29sdW1uQ29tcG9uZW50YC5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogcHVibGljIGZpbHRlcih0ZXJtKSB7XG4gICAgICogICAgICB0aGlzLmdyaWQuZmlsdGVyKFwiUHJvZHVjdE5hbWVcIiwgdGVybSwgSWd4U3RyaW5nRmlsdGVyaW5nT3BlcmFuZC5pbnN0YW5jZSgpLmNvbmRpdGlvbihcImNvbnRhaW5zXCIpKTtcbiAgICAgKiB9XG4gICAgICogYGBgXG4gICAgICogQHBhcmFtIG5hbWVcbiAgICAgKiBAcGFyYW0gdmFsdWVcbiAgICAgKiBAcGFyYW0gY29uZGl0aW9uT3JFeHByZXNzaW9uVHJlZVxuICAgICAqIEBwYXJhbSBpZ25vcmVDYXNlXG4gICAgICogQG1lbWJlcm9mIElneEdyaWRCYXNlQ29tcG9uZW50XG4gICAgICovXG4gICAgcHVibGljIGZpbHRlcihuYW1lOiBzdHJpbmcsIHZhbHVlOiBhbnksIGNvbmRpdGlvbk9yRXhwcmVzc2lvblRyZWU/OiBJRmlsdGVyaW5nT3BlcmF0aW9uIHwgSUZpbHRlcmluZ0V4cHJlc3Npb25zVHJlZSxcbiAgICAgICAgaWdub3JlQ2FzZT86IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5maWx0ZXJpbmdTZXJ2aWNlLmZpbHRlcihuYW1lLCB2YWx1ZSwgY29uZGl0aW9uT3JFeHByZXNzaW9uVHJlZSwgaWdub3JlQ2FzZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRmlsdGVycyBhbGwgdGhlIGBJZ3hDb2x1bW5Db21wb25lbnRgIGluIHRoZSBgSWd4R3JpZENvbXBvbmVudGAgd2l0aCB0aGUgc2FtZSBjb25kaXRpb24uXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGdyaWQuZmlsdGVyR2xvYmFsKCdzb21lJywgSWd4U3RyaW5nRmlsdGVyaW5nT3BlcmFuZC5pbnN0YW5jZSgpLmNvbmRpdGlvbignY29udGFpbnMnKSk7XG4gICAgICogYGBgXG4gICAgICogQHBhcmFtIHZhbHVlXG4gICAgICogQHBhcmFtIGNvbmRpdGlvblxuICAgICAqIEBwYXJhbSBpZ25vcmVDYXNlXG4gICAgICogQG1lbWJlcm9mIElneEdyaWRCYXNlQ29tcG9uZW50XG4gICAgICovXG4gICAgcHVibGljIGZpbHRlckdsb2JhbCh2YWx1ZTogYW55LCBjb25kaXRpb24sIGlnbm9yZUNhc2U/KSB7XG4gICAgICAgIHRoaXMuZmlsdGVyaW5nU2VydmljZS5maWx0ZXJHbG9iYWwodmFsdWUsIGNvbmRpdGlvbiwgaWdub3JlQ2FzZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRW5hYmxlcyBzdW1tYXJpZXMgZm9yIHRoZSBzcGVjaWZpZWQgY29sdW1uIGFuZCBhcHBsaWVzIHlvdXIgY3VzdG9tU3VtbWFyeS5cbiAgICAgKiBJZiB5b3UgZG8gbm90IHByb3ZpZGUgdGhlIGN1c3RvbVN1bW1hcnksIHRoZW4gdGhlIGRlZmF1bHQgc3VtbWFyeSBmb3IgdGhlIGNvbHVtbiBkYXRhIHR5cGUgd2lsbCBiZSBhcHBsaWVkLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBncmlkLmVuYWJsZVN1bW1hcmllcyhbeyBmaWVsZE5hbWU6ICdQcm9kdWN0TmFtZScgfSwgeyBmaWVsZE5hbWU6ICdJRCcgfV0pO1xuICAgICAqIGBgYFxuICAgICAqIEVuYWJsZSBzdW1tYXJpZXMgZm9yIHRoZSBsaXN0ZWQgY29sdW1ucy5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogZ3JpZC5lbmFibGVTdW1tYXJpZXMoJ1Byb2R1Y3ROYW1lJyk7XG4gICAgICogYGBgXG4gICAgICogQHBhcmFtIHJlc3RcbiAgICAgKiBAbWVtYmVyb2YgSWd4R3JpZEJhc2VDb21wb25lbnRcbiAgICAgKi9cbiAgICBwdWJsaWMgZW5hYmxlU3VtbWFyaWVzKC4uLnJlc3QpIHtcbiAgICAgICAgaWYgKHJlc3QubGVuZ3RoID09PSAxICYmIEFycmF5LmlzQXJyYXkocmVzdFswXSkpIHtcbiAgICAgICAgICAgIHRoaXMuX211bHRpcGxlU3VtbWFyaWVzKHJlc3RbMF0sIHRydWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fc3VtbWFyaWVzKHJlc3RbMF0sIHRydWUsIHJlc3RbMV0pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2FsY3VsYXRlR3JpZEhlaWdodCgpO1xuICAgICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGlzYWJsZSBzdW1tYXJpZXMgZm9yIHRoZSBzcGVjaWZpZWQgY29sdW1uLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBncmlkLmRpc2FibGVTdW1tYXJpZXMoJ1Byb2R1Y3ROYW1lJyk7XG4gICAgICogYGBgXG4gICAgICpcbiAgICAgKiBEaXNhYmxlIHN1bW1hcmllcyBmb3IgdGhlIGxpc3RlZCBjb2x1bW5zLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBncmlkLmRpc2FibGVTdW1tYXJpZXMoW3sgZmllbGROYW1lOiAnUHJvZHVjdE5hbWUnIH1dKTtcbiAgICAgKiBgYGBcblx0ICogQG1lbWJlcm9mIElneEdyaWRCYXNlQ29tcG9uZW50XG4gICAgICovXG4gICAgcHVibGljIGRpc2FibGVTdW1tYXJpZXMoLi4ucmVzdCkge1xuICAgICAgICBpZiAocmVzdC5sZW5ndGggPT09IDEgJiYgQXJyYXkuaXNBcnJheShyZXN0WzBdKSkge1xuICAgICAgICAgICAgdGhpcy5fZGlzYWJsZU11bHRpcGxlU3VtbWFyaWVzKHJlc3RbMF0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fc3VtbWFyaWVzKHJlc3RbMF0sIGZhbHNlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIElmIG5hbWUgaXMgcHJvdmlkZWQsIGNsZWFycyB0aGUgZmlsdGVyaW5nIHN0YXRlIG9mIHRoZSBjb3JyZXNwb25kaW5nIGBJZ3hDb2x1bW5Db21wb25lbnRgLFxuICAgICAqIG90aGVyd2lzZSBjbGVhcnMgdGhlIGZpbHRlcmluZyBzdGF0ZSBvZiBhbGwgYElneENvbHVtbkNvbXBvbmVudGBzLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiB0aGlzLmdyaWQuY2xlYXJGaWx0ZXIoKTtcbiAgICAgKiBgYGBcbiAgICAgKiBAcGFyYW0gbmFtZVxuICAgICAqIEBtZW1iZXJvZiBJZ3hHcmlkQmFzZUNvbXBvbmVudFxuICAgICAqL1xuICAgIHB1YmxpYyBjbGVhckZpbHRlcihuYW1lPzogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuZmlsdGVyaW5nU2VydmljZS5jbGVhckZpbHRlcihuYW1lKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJZiBuYW1lIGlzIHByb3ZpZGVkLCBjbGVhcnMgdGhlIHNvcnRpbmcgc3RhdGUgb2YgdGhlIGNvcnJlc3BvbmRpbmcgYElneENvbHVtbkNvbXBvbmVudGAsXG4gICAgICogb3RoZXJ3aXNlIGNsZWFycyB0aGUgc29ydGluZyBzdGF0ZSBvZiBhbGwgYElneENvbHVtbkNvbXBvbmVudGAuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIHRoaXMuZ3JpZC5jbGVhclNvcnQoKTtcbiAgICAgKiBgYGBcbiAgICAgKiBAcGFyYW0gbmFtZVxuICAgICAqIEBtZW1iZXJvZiBJZ3hHcmlkQmFzZUNvbXBvbmVudFxuICAgICAqL1xuICAgIHB1YmxpYyBjbGVhclNvcnQobmFtZT86IHN0cmluZykge1xuICAgICAgICBpZiAoIW5hbWUpIHtcbiAgICAgICAgICAgIHRoaXMuc29ydGluZ0V4cHJlc3Npb25zID0gW107XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLmdyaWRBUEkuZ2V0X2NvbHVtbl9ieV9uYW1lKG5hbWUpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5ncmlkQVBJLmNsZWFyX3NvcnQobmFtZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyByZWZyZXNoR3JpZFN0YXRlKGFyZ3M/KSB7XG4gICAgICAgIHRoaXMuZW5kRWRpdCh0cnVlKTtcbiAgICAgICAgdGhpcy5zdW1tYXJ5U2VydmljZS5jbGVhclN1bW1hcnlDYWNoZShhcmdzKTtcbiAgICB9XG5cbiAgICAvLyBUT0RPOiBXZSBoYXZlIHJldHVybiB2YWx1ZXMgaGVyZS4gTW92ZSB0aGVtIHRvIGV2ZW50IGFyZ3MgPz9cblxuICAgIC8qKlxuICAgICAqIFBpbnMgYSBjb2x1bW4gYnkgZmllbGQgbmFtZS4gUmV0dXJucyB3aGV0aGVyIHRoZSBvcGVyYXRpb24gaXMgc3VjY2Vzc2Z1bC5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogdGhpcy5ncmlkLnBpbkNvbHVtbihcIklEXCIpO1xuICAgICAqIGBgYFxuICAgICAqIEBwYXJhbSBjb2x1bW5OYW1lXG4gICAgICogQHBhcmFtIGluZGV4XG4gICAgICogQG1lbWJlcm9mIElneEdyaWRCYXNlQ29tcG9uZW50XG4gICAgICovXG4gICAgcHVibGljIHBpbkNvbHVtbihjb2x1bW5OYW1lOiBzdHJpbmcgfCBJZ3hDb2x1bW5Db21wb25lbnQsIGluZGV4Pyk6IGJvb2xlYW4ge1xuICAgICAgICBjb25zdCBjb2wgPSBjb2x1bW5OYW1lIGluc3RhbmNlb2YgSWd4Q29sdW1uQ29tcG9uZW50ID8gY29sdW1uTmFtZSA6IHRoaXMuZ2V0Q29sdW1uQnlOYW1lKGNvbHVtbk5hbWUpO1xuICAgICAgICByZXR1cm4gY29sLnBpbihpbmRleCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVW5waW5zIGEgY29sdW1uIGJ5IGZpZWxkIG5hbWUuIFJldHVybnMgd2hldGhlciB0aGUgb3BlcmF0aW9uIGlzIHN1Y2Nlc3NmdWwuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIHRoaXMuZ3JpZC5waW5Db2x1bW4oXCJJRFwiKTtcbiAgICAgKiBgYGBcbiAgICAgKiBAcGFyYW0gY29sdW1uTmFtZVxuICAgICAqIEBwYXJhbSBpbmRleFxuICAgICAqIEBtZW1iZXJvZiBJZ3hHcmlkQmFzZUNvbXBvbmVudFxuICAgICAqL1xuICAgIHB1YmxpYyB1bnBpbkNvbHVtbihjb2x1bW5OYW1lOiBzdHJpbmcgfCBJZ3hDb2x1bW5Db21wb25lbnQsIGluZGV4Pyk6IGJvb2xlYW4ge1xuICAgICAgICBjb25zdCBjb2wgPSBjb2x1bW5OYW1lIGluc3RhbmNlb2YgSWd4Q29sdW1uQ29tcG9uZW50ID8gY29sdW1uTmFtZSA6IHRoaXMuZ2V0Q29sdW1uQnlOYW1lKGNvbHVtbk5hbWUpO1xuICAgICAgICByZXR1cm4gY29sLnVucGluKGluZGV4KTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIFJlY2FsY3VsYXRlcyBncmlkIHdpZHRoL2hlaWdodCBkaW1lbnNpb25zLiBTaG91bGQgYmUgcnVuIHdoZW4gY2hhbmdpbmcgRE9NIGVsZW1lbnRzIGRpbWVudGlvbnMgbWFudWFsbHkgdGhhdCBhZmZlY3QgdGhlIGdyaWQncyBzaXplLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiB0aGlzLmdyaWQucmVmbG93KCk7XG4gICAgICogYGBgXG5cdCAqIEBtZW1iZXJvZiBJZ3hHcmlkQmFzZUNvbXBvbmVudFxuICAgICAqL1xuICAgIHB1YmxpYyByZWZsb3coKSB7XG4gICAgICAgIHRoaXMuY2FsY3VsYXRlR3JpZFNpemVzKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRmluZHMgdGhlIG5leHQgb2NjdXJyZW5jZSBvZiBhIGdpdmVuIHN0cmluZyBpbiB0aGUgZ3JpZCBhbmQgc2Nyb2xscyB0byB0aGUgY2VsbCBpZiBpdCBpc24ndCB2aXNpYmxlLlxuICAgICAqIFJldHVybnMgaG93IG1hbnkgdGltZXMgdGhlIGdyaWQgY29udGFpbnMgdGhlIHN0cmluZy5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogdGhpcy5ncmlkLmZpbmROZXh0KFwiZmluYW5jaWFsXCIpO1xuICAgICAqIGBgYFxuICAgICAqIEBwYXJhbSB0ZXh0IHRoZSBzdHJpbmcgdG8gc2VhcmNoLlxuICAgICAqIEBwYXJhbSBjYXNlU2Vuc2l0aXZlIG9wdGlvbmFsbHksIGlmIHRoZSBzZWFyY2ggc2hvdWxkIGJlIGNhc2Ugc2Vuc2l0aXZlIChkZWZhdWx0cyB0byBmYWxzZSkuXG4gICAgICogQHBhcmFtIGV4YWN0TWF0Y2ggb3B0aW9uYWxseSwgaWYgdGhlIHRleHQgc2hvdWxkIG1hdGNoIHRoZSBlbnRpcmUgdmFsdWUgIChkZWZhdWx0cyB0byBmYWxzZSkuXG4gICAgICogQG1lbWJlcm9mIElneEdyaWRCYXNlQ29tcG9uZW50XG4gICAgICovXG4gICAgcHVibGljIGZpbmROZXh0KHRleHQ6IHN0cmluZywgY2FzZVNlbnNpdGl2ZT86IGJvb2xlYW4sIGV4YWN0TWF0Y2g/OiBib29sZWFuKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZmluZCh0ZXh0LCAxLCBjYXNlU2Vuc2l0aXZlLCBleGFjdE1hdGNoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBGaW5kcyB0aGUgcHJldmlvdXMgb2NjdXJyZW5jZSBvZiBhIGdpdmVuIHN0cmluZyBpbiB0aGUgZ3JpZCBhbmQgc2Nyb2xscyB0byB0aGUgY2VsbCBpZiBpdCBpc24ndCB2aXNpYmxlLlxuICAgICAqIFJldHVybnMgaG93IG1hbnkgdGltZXMgdGhlIGdyaWQgY29udGFpbnMgdGhlIHN0cmluZy5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogdGhpcy5ncmlkLmZpbmRQcmV2KFwiZmluYW5jaWFsXCIpO1xuICAgICAqIGBgYGBcbiAgICAgKiBAcGFyYW0gdGV4dCB0aGUgc3RyaW5nIHRvIHNlYXJjaC5cbiAgICAgKiBAcGFyYW0gY2FzZVNlbnNpdGl2ZSBvcHRpb25hbGx5LCBpZiB0aGUgc2VhcmNoIHNob3VsZCBiZSBjYXNlIHNlbnNpdGl2ZSAoZGVmYXVsdHMgdG8gZmFsc2UpLlxuICAgICAqIEBwYXJhbSBleGFjdE1hdGNoIG9wdGlvbmFsbHksIGlmIHRoZSB0ZXh0IHNob3VsZCBtYXRjaCB0aGUgZW50aXJlIHZhbHVlIChkZWZhdWx0cyB0byBmYWxzZSkuXG4gICAgICogQG1lbWJlcm9mIElneEdyaWRCYXNlQ29tcG9uZW50XG4gICAgICovXG4gICAgcHVibGljIGZpbmRQcmV2KHRleHQ6IHN0cmluZywgY2FzZVNlbnNpdGl2ZT86IGJvb2xlYW4sIGV4YWN0TWF0Y2g/OiBib29sZWFuKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZmluZCh0ZXh0LCAtMSwgY2FzZVNlbnNpdGl2ZSwgZXhhY3RNYXRjaCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVhcHBsaWVzIHRoZSBleGlzdGluZyBzZWFyY2guXG4gICAgICogUmV0dXJucyBob3cgbWFueSB0aW1lcyB0aGUgZ3JpZCBjb250YWlucyB0aGUgbGFzdCBzZWFyY2guXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIHRoaXMuZ3JpZC5yZWZyZXNoU2VhcmNoKCk7XG4gICAgICogYGBgXG4gICAgICogQHBhcmFtIHVwZGF0ZUFjdGl2ZUluZm9cbiAgICAgKiBAbWVtYmVyb2YgSWd4R3JpZEJhc2VDb21wb25lbnRcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVmcmVzaFNlYXJjaCh1cGRhdGVBY3RpdmVJbmZvPzogYm9vbGVhbik6IG51bWJlciB7XG4gICAgICAgIGlmICh0aGlzLmxhc3RTZWFyY2hJbmZvLnNlYXJjaFRleHQpIHtcbiAgICAgICAgICAgIHRoaXMucmVidWlsZE1hdGNoQ2FjaGUoKTtcblxuICAgICAgICAgICAgaWYgKHVwZGF0ZUFjdGl2ZUluZm8pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBhY3RpdmVJbmZvID0gSWd4VGV4dEhpZ2hsaWdodERpcmVjdGl2ZS5oaWdobGlnaHRHcm91cHNNYXAuZ2V0KHRoaXMuaWQpO1xuICAgICAgICAgICAgICAgIHRoaXMubGFzdFNlYXJjaEluZm8ubWF0Y2hJbmZvQ2FjaGUuZm9yRWFjaCgobWF0Y2gsIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1hdGNoLmNvbHVtbiA9PT0gYWN0aXZlSW5mby5jb2x1bW4gJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoLnJvdyA9PT0gYWN0aXZlSW5mby5yb3cgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoLmluZGV4ID09PSBhY3RpdmVJbmZvLmluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RTZWFyY2hJbmZvLmFjdGl2ZU1hdGNoSW5kZXggPSBpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB0aGlzLmZpbmQodGhpcy5sYXN0U2VhcmNoSW5mby5zZWFyY2hUZXh0LCAwLCB0aGlzLmxhc3RTZWFyY2hJbmZvLmNhc2VTZW5zaXRpdmUsIHRoaXMubGFzdFNlYXJjaEluZm8uZXhhY3RNYXRjaCwgZmFsc2UpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIGFsbCB0aGUgaGlnaGxpZ2h0cyBpbiB0aGUgY2VsbC5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogdGhpcy5ncmlkLmNsZWFyU2VhcmNoKCk7XG4gICAgICogYGBgXG5cdCAqIEBtZW1iZXJvZiBJZ3hHcmlkQmFzZUNvbXBvbmVudFxuICAgICAqL1xuICAgIHB1YmxpYyBjbGVhclNlYXJjaCgpIHtcbiAgICAgICAgdGhpcy5sYXN0U2VhcmNoSW5mbyA9IHtcbiAgICAgICAgICAgIHNlYXJjaFRleHQ6ICcnLFxuICAgICAgICAgICAgY2FzZVNlbnNpdGl2ZTogZmFsc2UsXG4gICAgICAgICAgICBleGFjdE1hdGNoOiBmYWxzZSxcbiAgICAgICAgICAgIGFjdGl2ZU1hdGNoSW5kZXg6IDAsXG4gICAgICAgICAgICBtYXRjaEluZm9DYWNoZTogW11cbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLnJvd0xpc3QuZm9yRWFjaCgocm93KSA9PiB7XG4gICAgICAgICAgICBpZiAocm93LmNlbGxzKSB7XG4gICAgICAgICAgICAgICAgcm93LmNlbGxzLmZvckVhY2goKGMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgYy5jbGVhckhpZ2hsaWdodCgpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGlmIHRoZSBgSWd4R3JpZENvbXBvbmVudGAgaGFzIHNvcnRhYmxlIGNvbHVtbnMuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGNvbnN0IHNvcnRhYmxlR3JpZCA9IHRoaXMuZ3JpZC5oYXNTb3J0YWJsZUNvbHVtbnM7XG4gICAgICogYGBgXG5cdCAqIEBtZW1iZXJvZiBJZ3hHcmlkQmFzZUNvbXBvbmVudFxuICAgICAqL1xuICAgIGdldCBoYXNTb3J0YWJsZUNvbHVtbnMoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbHVtbkxpc3Quc29tZSgoY29sKSA9PiBjb2wuc29ydGFibGUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgaWYgdGhlIGBJZ3hHcmlkQ29tcG9uZW50YCBoYXMgZWRpdGFibGUgY29sdW1ucy5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogY29uc3QgZWRpdGFibGVHcmlkID0gdGhpcy5ncmlkLmhhc0VkaXRhYmxlQ29sdW1ucztcbiAgICAgKiBgYGBcblx0ICogQG1lbWJlcm9mIElneEdyaWRCYXNlQ29tcG9uZW50XG4gICAgICovXG4gICAgZ2V0IGhhc0VkaXRhYmxlQ29sdW1ucygpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29sdW1uTGlzdC5zb21lKChjb2wpID0+IGNvbC5lZGl0YWJsZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBpZiB0aGUgYElneEdyaWRDb21wb25lbnRgIGhhcyBmaXRlcmFibGUgY29sdW1ucy5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogY29uc3QgZmlsdGVyYWJsZUdyaWQgPSB0aGlzLmdyaWQuaGFzRmlsdGVyYWJsZUNvbHVtbnM7XG4gICAgICogYGBgXG5cdCAqIEBtZW1iZXJvZiBJZ3hHcmlkQmFzZUNvbXBvbmVudFxuICAgICAqL1xuICAgIGdldCBoYXNGaWx0ZXJhYmxlQ29sdW1ucygpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29sdW1uTGlzdC5zb21lKChjb2wpID0+IGNvbC5maWx0ZXJhYmxlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGlmIHRoZSBgSWd4R3JpZENvbXBvbmVudGAgaGFzIHN1bW1hcml6ZWQgY29sdW1ucy5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogY29uc3Qgc3VtbWFyaXplZEdyaWQgPSB0aGlzLmdyaWQuaGFzU3VtbWFyaXplZENvbHVtbnM7XG4gICAgICogYGBgXG5cdCAqIEBtZW1iZXJvZiBJZ3hHcmlkQmFzZUNvbXBvbmVudFxuICAgICAqL1xuICAgIGdldCBoYXNTdW1tYXJpemVkQ29sdW1ucygpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3VtbWFyeVNlcnZpY2UuaGFzU3VtbWFyaXplZENvbHVtbnM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIGdldCByb290U3VtbWFyaWVzRW5hYmxlZCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3VtbWFyeUNhbGN1bGF0aW9uTW9kZSAhPT0gR3JpZFN1bW1hcnlDYWxjdWxhdGlvbk1vZGUuY2hpbGRMZXZlbHNPbmx5O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGlmIHRoZSBgSWd4R3JpZENvbXBvbmVudGAgaGFzIG1vdmVhYmxlIGNvbHVtbnMuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGNvbnN0IG1vdmFibGVHcmlkID0gdGhpcy5ncmlkLmhhc01vdmFibGVDb2x1bW5zO1xuICAgICAqIGBgYFxuXHQgKiBAbWVtYmVyb2YgSWd4R3JpZEJhc2VDb21wb25lbnRcbiAgICAgKi9cbiAgICBnZXQgaGFzTW92YWJsZUNvbHVtbnMoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbHVtbkxpc3QgJiYgdGhpcy5jb2x1bW5MaXN0LnNvbWUoKGNvbCkgPT4gY29sLm1vdmFibGUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgaWYgdGhlIGBJZ3hHcmlkQ29tcG9uZW50YCBoYXMgY29sdW1uIGdyb3Vwcy5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogY29uc3QgZ3JvdXBHcmlkID0gdGhpcy5ncmlkLmhhc0NvbHVtbkdyb3VwcztcbiAgICAgKiBgYGBcblx0ICogQG1lbWJlcm9mIElneEdyaWRCYXNlQ29tcG9uZW50XG4gICAgICovXG4gICAgZ2V0IGhhc0NvbHVtbkdyb3VwcygpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvbHVtbkdyb3VwcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBpZiB0aGUgYElneEdyaWRDb21wb25lbnRgIGhhcyBjb2x1bW4gbGF5b3V0cyBmb3IgbXVsdGktcm93IGxheW91dCBkZWZpbml0aW9uLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBjb25zdCBsYXlvdXRHcmlkID0gdGhpcy5ncmlkLmhhc0NvbHVtbkxheW91dHM7XG4gICAgICogYGBgXG5cdCAqIEBtZW1iZXJvZiBJZ3hHcmlkQmFzZUNvbXBvbmVudFxuICAgICAqL1xuICAgIHB1YmxpYyBnZXQgaGFzQ29sdW1uTGF5b3V0cygpIHtcbiAgICAgICAgcmV0dXJuICEhdGhpcy5jb2x1bW5MaXN0LnNvbWUoY29sID0+IGNvbC5jb2x1bW5MYXlvdXQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYW4gYXJyYXkgb2YgdGhlIHNlbGVjdGVkIGBJZ3hHcmlkQ2VsbENvbXBvbmVudGBzLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBjb25zdCBzZWxlY3RlZENlbGxzID0gdGhpcy5ncmlkLnNlbGVjdGVkQ2VsbHM7XG4gICAgICogYGBgXG5cdCAqIEBtZW1iZXJvZiBJZ3hHcmlkQmFzZUNvbXBvbmVudFxuICAgICAqL1xuICAgIGdldCBzZWxlY3RlZENlbGxzKCk6IElneEdyaWRDZWxsQ29tcG9uZW50W10gfCBhbnlbXSB7XG4gICAgICAgIGlmICh0aGlzLmRhdGFSb3dMaXN0KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kYXRhUm93TGlzdC5tYXAoKHJvdykgPT4gcm93LmNlbGxzLmZpbHRlcigoY2VsbCkgPT4gY2VsbC5zZWxlY3RlZCkpXG4gICAgICAgICAgICAgICAgLnJlZHVjZSgoYSwgYikgPT4gYS5jb25jYXQoYiksIFtdKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gW107XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIGdldCBtdWx0aVJvd0xheW91dFJvd1NpemUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9tdWx0aVJvd0xheW91dFJvd1NpemU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHByb3RlY3RlZCBnZXQgcm93QmFzZWRIZWlnaHQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGFMZW5ndGggKiB0aGlzLnJvd0hlaWdodDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGdldCBpc1BlcmNlbnRXaWR0aCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMud2lkdGggJiYgdGhpcy53aWR0aC5pbmRleE9mKCclJykgIT09IC0xO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW4gQGludGVybmFsXG4gICAgICovXG4gICAgcHVibGljIGdldCBpc1BlcmNlbnRIZWlnaHQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9oZWlnaHQgJiYgdGhpcy5faGVpZ2h0LmluZGV4T2YoJyUnKSAhPT0gLTE7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqIFNldHMgY29sdW1ucyBkZWZhdWx0V2lkdGggcHJvcGVydHlcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgX2Rlcml2ZVBvc3NpYmxlV2lkdGgoKSB7XG4gICAgICAgIGlmICghdGhpcy5jb2x1bW5XaWR0aFNldEJ5VXNlcikge1xuICAgICAgICAgICAgdGhpcy5fY29sdW1uV2lkdGggPSB0aGlzLmdldFBvc3NpYmxlQ29sdW1uV2lkdGgoKTtcbiAgICAgICAgICAgIHRoaXMuY29sdW1uTGlzdC5mb3JFYWNoKChjb2x1bW46IElneENvbHVtbkNvbXBvbmVudCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmhhc0NvbHVtbkxheW91dHMgJiYgcGFyc2VJbnQodGhpcy5fY29sdW1uV2lkdGgsIDEwKSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb2x1bW5XaWR0aENvbWJpbmVkID0gcGFyc2VJbnQodGhpcy5fY29sdW1uV2lkdGgsIDEwKSAqIChjb2x1bW4uY29sRW5kID8gY29sdW1uLmNvbEVuZCAtIGNvbHVtbi5jb2xTdGFydCA6IDEpO1xuICAgICAgICAgICAgICAgICAgICBjb2x1bW4uZGVmYXVsdFdpZHRoID0gY29sdW1uV2lkdGhDb21iaW5lZCArICdweCc7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29sdW1uLmRlZmF1bHRXaWR0aCA9IHRoaXMuX2NvbHVtbldpZHRoO1xuICAgICAgICAgICAgICAgICAgICBjb2x1bW4ucmVzZXRDYWNoZXMoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMucmVzZXRDYWNoZWRXaWR0aHMoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgZ2V0IGRlZmF1bHRUYXJnZXRCb2R5SGVpZ2h0KCk6IG51bWJlciB7XG4gICAgICAgIGNvbnN0IGFsbEl0ZW1zID0gdGhpcy5kYXRhTGVuZ3RoO1xuICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXJlZFJvd0hlaWdodCAqIE1hdGgubWluKHRoaXMuX2RlZmF1bHRUYXJnZXRSZWNvcmROdW1iZXIsXG4gICAgICAgICAgICB0aGlzLnBhZ2luZyA/IE1hdGgubWluKGFsbEl0ZW1zLCB0aGlzLnBlclBhZ2UpIDogYWxsSXRlbXMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW4gQGludGVybmFsXG4gICAgICogVGhlIHJvd0hlaWdodCBpbnB1dCBpcyBib3VuZCB0byBtaW4taGVpZ2h0IGNzcyBwcm9wIG9mIHJvd3MgdGhhdCBhZGRzIGEgMXB4IGJvcmRlciBpbiBhbGwgY2FzZXNcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0IHJlbmRlcmVkUm93SGVpZ2h0KCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLnJvd0hlaWdodCArIDE7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqIFNldHMgVEJPRFkgaGVpZ2h0IGkuZS4gdGhpcy5jYWxjSGVpZ2h0XG4gICAgICovXG4gICAgcHJvdGVjdGVkIGNhbGN1bGF0ZUdyaWRIZWlnaHQoKSB7XG4gICAgICAgIGlmICh0aGlzLm1heExldmVsSGVhZGVyRGVwdGgpIHtcbiAgICAgICAgICAgIHRoaXMuX2Jhc2VGb250U2l6ZSA9IHBhcnNlRmxvYXQoZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkuZ2V0UHJvcGVydHlWYWx1ZSgnZm9udC1zaXplJykpO1xuICAgICAgICAgICAgbGV0IG1pblNpemUgPSAodGhpcy5tYXhMZXZlbEhlYWRlckRlcHRoICsgMSkgKiB0aGlzLmRlZmF1bHRSb3dIZWlnaHQgLyB0aGlzLl9iYXNlRm9udFNpemU7XG4gICAgICAgICAgICBpZiAodGhpcy5fYWxsb3dGaWx0ZXJpbmcgJiYgdGhpcy5fZmlsdGVyTW9kZSA9PT0gRmlsdGVyTW9kZS5xdWlja0ZpbHRlcikge1xuICAgICAgICAgICAgICAgIG1pblNpemUgKz0gKEZJTFRFUl9ST1dfSEVJR0hUICsgMSkgLyB0aGlzLl9iYXNlRm9udFNpemU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnRoZWFkUm93Lm5hdGl2ZUVsZW1lbnQuc3R5bGUubWluSGVpZ2h0ID0gYCR7bWluU2l6ZX1yZW1gO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc3VtbWFyaWVzSGVpZ2h0ID0gMDtcbiAgICAgICAgaWYgKHRoaXMuaGFzU3VtbWFyaXplZENvbHVtbnMgJiYgdGhpcy5yb290U3VtbWFyaWVzRW5hYmxlZCkge1xuICAgICAgICAgICAgdGhpcy5zdW1tYXJpZXNIZWlnaHQgPSB0aGlzLnN1bW1hcnlTZXJ2aWNlLmNhbGNNYXhTdW1tYXJ5SGVpZ2h0KCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNhbGNIZWlnaHQgPSB0aGlzLl9jYWxjdWxhdGVHcmlkQm9keUhlaWdodCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgZ2V0R3JvdXBBcmVhSGVpZ2h0KCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiAwO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgZ2V0VG9vbGJhckhlaWdodCgpOiBudW1iZXIge1xuICAgICAgICBsZXQgdG9vbGJhckhlaWdodCA9IDA7XG4gICAgICAgIGlmICh0aGlzLnNob3dUb29sYmFyICYmIHRoaXMudG9vbGJhckh0bWwgIT0gbnVsbCkge1xuICAgICAgICAgICAgdG9vbGJhckhlaWdodCA9IHRoaXMudG9vbGJhckh0bWwubmF0aXZlRWxlbWVudC5maXJzdEVsZW1lbnRDaGlsZCA/XG4gICAgICAgICAgICAgICAgdGhpcy50b29sYmFySHRtbC5uYXRpdmVFbGVtZW50Lm9mZnNldEhlaWdodCA6IDA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRvb2xiYXJIZWlnaHQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHByb3RlY3RlZCBnZXRQYWdpbmdIZWlnaHQoKTogbnVtYmVyIHtcbiAgICAgICAgbGV0IHBhZ2luZ0hlaWdodCA9IDA7XG4gICAgICAgIGlmICh0aGlzLmZvb3Rlcikge1xuICAgICAgICAgICAgcGFnaW5nSGVpZ2h0ID0gdGhpcy5mb290ZXIubmF0aXZlRWxlbWVudC5maXJzdEVsZW1lbnRDaGlsZCA/XG4gICAgICAgICAgICAgICAgdGhpcy5mb290ZXIubmF0aXZlRWxlbWVudC5vZmZzZXRIZWlnaHQgOiAwO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwYWdpbmdIZWlnaHQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHByb3RlY3RlZCBfY2FsY3VsYXRlR3JpZEJvZHlIZWlnaHQoKTogbnVtYmVyIHtcbiAgICAgICAgaWYgKCF0aGlzLl9oZWlnaHQpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGZvb3RlckJvcmRlcnNBbmRTY3JvbGxiYXJzID0gdGhpcy50Zm9vdC5uYXRpdmVFbGVtZW50Lm9mZnNldEhlaWdodCAtXG4gICAgICAgICAgICB0aGlzLnRmb290Lm5hdGl2ZUVsZW1lbnQuY2xpZW50SGVpZ2h0O1xuICAgICAgICBsZXQgZ3JpZEhlaWdodDtcbiAgICAgICAgY29uc3QgY29tcHV0ZWQgPSB0aGlzLmRvY3VtZW50LmRlZmF1bHRWaWV3LmdldENvbXB1dGVkU3R5bGUodGhpcy5uYXRpdmVFbGVtZW50KTtcbiAgICAgICAgY29uc3QgdG9vbGJhckhlaWdodCA9IHRoaXMuZ2V0VG9vbGJhckhlaWdodCgpO1xuICAgICAgICBjb25zdCBwYWdpbmdIZWlnaHQgPSB0aGlzLmdldFBhZ2luZ0hlaWdodCgpO1xuICAgICAgICBjb25zdCBncm91cEFyZWFIZWlnaHQgPSB0aGlzLmdldEdyb3VwQXJlYUhlaWdodCgpO1xuICAgICAgICBjb25zdCByZW5kZXJlZEhlaWdodCA9IHRvb2xiYXJIZWlnaHQgKyB0aGlzLnRoZWFkUm93Lm5hdGl2ZUVsZW1lbnQub2Zmc2V0SGVpZ2h0ICtcbiAgICAgICAgICAgIHRoaXMuc3VtbWFyaWVzSGVpZ2h0ICsgcGFnaW5nSGVpZ2h0ICsgZ3JvdXBBcmVhSGVpZ2h0ICsgZm9vdGVyQm9yZGVyc0FuZFNjcm9sbGJhcnMgK1xuICAgICAgICAgICAgdGhpcy5zY3IubmF0aXZlRWxlbWVudC5jbGllbnRIZWlnaHQ7XG5cbiAgICAgICAgaWYgKHRoaXMuaXNQZXJjZW50SGVpZ2h0KSB7XG4gICAgICAgICAgICAvKmhlaWdodCBpbiAlKi9cbiAgICAgICAgICAgIGlmICghdGhpcy5uYXRpdmVFbGVtZW50LnBhcmVudEVsZW1lbnQgfHxcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQucGFyZW50RWxlbWVudC5jbGllbnRIZWlnaHQgPT09IHJlbmRlcmVkSGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgLyogcGFyZW50IGVsZW1lbnQgaXMgc2l6ZWQgYnkgdGhlIHJlbmRlcmVkIGVsZW1lbnRzIHdoaWNoIG1lYW5zXG4gICAgICAgICAgICAgICAgdGhlIGdyaWQgc2hvdWxkIGF0dGVtcHQgYSBjb250ZW50LWJveCBzdHlsZSByZW5kZXJpbmcgKi9cbiAgICAgICAgICAgICAgICB0aGlzLl9hdXRvU2l6ZSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5fYXV0b1NpemUgfHwgY29tcHV0ZWQuZ2V0UHJvcGVydHlWYWx1ZSgnaGVpZ2h0JykuaW5kZXhPZignJScpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGJvZHlIZWlnaHQgPSB0aGlzLmdldERhdGFCYXNlZEJvZHlIZWlnaHQoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gYm9keUhlaWdodCA+IDAgPyBib2R5SGVpZ2h0IDogbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGdyaWRIZWlnaHQgPSBwYXJzZUludChjb21wdXRlZC5nZXRQcm9wZXJ0eVZhbHVlKCdoZWlnaHQnKSwgMTApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZ3JpZEhlaWdodCA9IHBhcnNlSW50KHRoaXMuX2hlaWdodCwgMTApO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGhlaWdodCA9IE1hdGguYWJzKGdyaWRIZWlnaHQgLSByZW5kZXJlZEhlaWdodCk7XG5cbiAgICAgICAgaWYgKGhlaWdodCA9PT0gMCB8fCBpc05hTihncmlkSGVpZ2h0KSkge1xuICAgICAgICAgICAgY29uc3QgYm9keUhlaWdodCA9IHRoaXMuZGVmYXVsdFRhcmdldEJvZHlIZWlnaHQ7XG4gICAgICAgICAgICByZXR1cm4gYm9keUhlaWdodCA+IDAgPyBib2R5SGVpZ2h0IDogbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBoZWlnaHQ7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBvdXRlcldpZHRoKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5oYXNWZXJ0aWNhbFNyb2xsKCkgPyB0aGlzLmNhbGNXaWR0aCArIHRoaXMuc2Nyb2xsV2lkdGggOiB0aGlzLmNhbGNXaWR0aDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICogR2V0cyB0aGUgdmlzaWJsZSBjb250ZW50IGhlaWdodCB0aGF0IGluY2x1ZGVzIGhlYWRlciArIHRib2R5ICsgZm9vdGVyLlxuICAgICAqL1xuICAgIHB1YmxpYyBnZXRWaXNpYmxlQ29udGVudEhlaWdodCgpIHtcbiAgICAgICAgbGV0IGhlaWdodCA9IHRoaXMudGhlYWRSb3cubmF0aXZlRWxlbWVudC5jbGllbnRIZWlnaHQgKyB0aGlzLnRib2R5Lm5hdGl2ZUVsZW1lbnQuY2xpZW50SGVpZ2h0O1xuICAgICAgICBpZiAodGhpcy5oYXNTdW1tYXJpemVkQ29sdW1ucykge1xuICAgICAgICAgICAgaGVpZ2h0ICs9IHRoaXMudGZvb3QubmF0aXZlRWxlbWVudC5jbGllbnRIZWlnaHQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGhlaWdodDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIGdldFBvc3NpYmxlQ29sdW1uV2lkdGgoYmFzZVdpZHRoOiBudW1iZXIgPSBudWxsKSB7XG4gICAgICAgIGxldCBjb21wdXRlZFdpZHRoO1xuICAgICAgICBpZiAoYmFzZVdpZHRoICE9PSBudWxsKSB7XG4gICAgICAgICAgICBjb21wdXRlZFdpZHRoID0gYmFzZVdpZHRoO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29tcHV0ZWRXaWR0aCA9IHRoaXMuY2FsY1dpZHRoIHx8XG4gICAgICAgICAgICAgICAgcGFyc2VJbnQodGhpcy5kb2N1bWVudC5kZWZhdWx0Vmlldy5nZXRDb21wdXRlZFN0eWxlKHRoaXMubmF0aXZlRWxlbWVudCkuZ2V0UHJvcGVydHlWYWx1ZSgnd2lkdGgnKSwgMTApO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuc2hvd1Jvd0NoZWNrYm94ZXMpIHtcbiAgICAgICAgICAgIGNvbXB1dGVkV2lkdGggLT0gdGhpcy5oZWFkZXJDaGVja2JveENvbnRhaW5lciA/IHRoaXMuaGVhZGVyQ2hlY2tib3hDb250YWluZXIubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aCA6IDA7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB2aXNpYmxlQ2hpbGRDb2x1bW5zID0gdGhpcy52aXNpYmxlQ29sdW1ucy5maWx0ZXIoYyA9PiAhYy5jb2x1bW5Hcm91cCk7XG5cblxuICAgICAgICAvLyBDb2x1bW4gbGF5b3V0cyByZWxhdGVkXG4gICAgICAgIGxldCB2aXNpYmxlQ29scyA9IFtdO1xuICAgICAgICBjb25zdCBjb2x1bW5CbG9ja3MgPSB0aGlzLnZpc2libGVDb2x1bW5zLmZpbHRlcihjID0+IGMuY29sdW1uR3JvdXApO1xuICAgICAgICBjb25zdCBjb2xzUGVyQmxvY2sgPSBjb2x1bW5CbG9ja3MubWFwKGJsb2NrID0+IGJsb2NrLmdldEluaXRpYWxDaGlsZENvbHVtblNpemVzKGJsb2NrLmNoaWxkcmVuKSk7XG4gICAgICAgIGNvbnN0IGNvbWJpbmVkQmxvY2tzU2l6ZSA9IGNvbHNQZXJCbG9jay5yZWR1Y2UoKGFjYywgaXRlbSkgPT4gYWNjICsgaXRlbS5sZW5ndGgsIDApO1xuICAgICAgICBjb2xzUGVyQmxvY2suZm9yRWFjaChibG9ja0NvbHMgPT4gdmlzaWJsZUNvbHMgPSB2aXNpYmxlQ29scy5jb25jYXQoYmxvY2tDb2xzKSk7XG4gICAgICAgIC8vXG5cbiAgICAgICAgY29uc3QgY29sdW1uc1dpdGhTZXRXaWR0aHMgPSB0aGlzLmhhc0NvbHVtbkxheW91dHMgP1xuICAgICAgICAgICAgdmlzaWJsZUNvbHMuZmlsdGVyKGMgPT4gYy53aWR0aFNldEJ5VXNlcikgOlxuICAgICAgICAgICAgdmlzaWJsZUNoaWxkQ29sdW1ucy5maWx0ZXIoYyA9PiBjLndpZHRoU2V0QnlVc2VyKTtcblxuICAgICAgICBjb25zdCBjb2x1bW5zVG9TaXplID0gdGhpcy5oYXNDb2x1bW5MYXlvdXRzID9cbiAgICAgICAgICAgIGNvbWJpbmVkQmxvY2tzU2l6ZSAtIGNvbHVtbnNXaXRoU2V0V2lkdGhzLmxlbmd0aCA6XG4gICAgICAgICAgICB2aXNpYmxlQ2hpbGRDb2x1bW5zLmxlbmd0aCAtIGNvbHVtbnNXaXRoU2V0V2lkdGhzLmxlbmd0aDtcblxuICAgICAgICBjb25zdCBzdW1FeGlzdGluZ1dpZHRocyA9IGNvbHVtbnNXaXRoU2V0V2lkdGhzXG4gICAgICAgICAgICAucmVkdWNlKChwcmV2LCBjdXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgY29sV2lkdGggPSBjdXJyLndpZHRoO1xuICAgICAgICAgICAgICAgIGNvbnN0IHdpZHRoVmFsdWUgPSBwYXJzZUludChjb2xXaWR0aCwgMTApO1xuICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJXaWR0aCA9IGNvbFdpZHRoICYmIHR5cGVvZiBjb2xXaWR0aCA9PT0gJ3N0cmluZycgJiYgY29sV2lkdGguaW5kZXhPZignJScpICE9PSAtMSA/XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoVmFsdWUgLyAxMDAgKiBjb21wdXRlZFdpZHRoIDpcbiAgICAgICAgICAgICAgICAgICAgd2lkdGhWYWx1ZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJldiArIGN1cnJXaWR0aDtcbiAgICAgICAgICAgIH0sIDApO1xuXG4gICAgICAgIGNvbnN0IGNvbHVtbldpZHRoID0gTWF0aC5mbG9vcighTnVtYmVyLmlzRmluaXRlKHN1bUV4aXN0aW5nV2lkdGhzKSA/XG4gICAgICAgICAgICBNYXRoLm1heChjb21wdXRlZFdpZHRoIC8gY29sdW1uc1RvU2l6ZSwgTUlOSU1VTV9DT0xVTU5fV0lEVEgpIDpcbiAgICAgICAgICAgIE1hdGgubWF4KChjb21wdXRlZFdpZHRoIC0gc3VtRXhpc3RpbmdXaWR0aHMpIC8gY29sdW1uc1RvU2l6ZSwgTUlOSU1VTV9DT0xVTU5fV0lEVEgpKTtcblxuICAgICAgICByZXR1cm4gY29sdW1uV2lkdGgudG9TdHJpbmcoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICogU2V0cyBncmlkIHdpZHRoIGkuZS4gdGhpcy5jYWxjV2lkdGhcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgY2FsY3VsYXRlR3JpZFdpZHRoKCkge1xuICAgICAgICBsZXQgd2lkdGg7XG4gICAgICAgIGNvbnN0IGNvbXB1dGVkID0gdGhpcy5kb2N1bWVudC5kZWZhdWx0Vmlldy5nZXRDb21wdXRlZFN0eWxlKHRoaXMubmF0aXZlRWxlbWVudCk7XG4gICAgICAgIGNvbnN0IGVsID0gdGhpcy5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLm5hdGl2ZUVsZW1lbnQuaWQpO1xuXG4gICAgICAgIGlmICh0aGlzLmlzUGVyY2VudFdpZHRoKSB7XG4gICAgICAgICAgICAvKiB3aWR0aCBpbiAlKi9cbiAgICAgICAgICAgIHdpZHRoID0gY29tcHV0ZWQuZ2V0UHJvcGVydHlWYWx1ZSgnd2lkdGgnKS5pbmRleE9mKCclJykgPT09IC0xID9cbiAgICAgICAgICAgICAgICBwYXJzZUludChjb21wdXRlZC5nZXRQcm9wZXJ0eVZhbHVlKCd3aWR0aCcpLCAxMCkgOiBudWxsO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgd2lkdGggPSBwYXJzZUludCh0aGlzLndpZHRoLCAxMCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXdpZHRoICYmIGVsKSB7XG4gICAgICAgICAgICB3aWR0aCA9IGVsLm9mZnNldFdpZHRoO1xuICAgICAgICB9XG5cblxuICAgICAgICBpZiAoIXdpZHRoKSB7XG4gICAgICAgICAgICB3aWR0aCA9IHRoaXMuY29sdW1uTGlzdC5yZWR1Y2UoKHN1bSwgaXRlbSkgPT4gc3VtICsgcGFyc2VJbnQoKGl0ZW0ud2lkdGggfHwgaXRlbS5kZWZhdWx0V2lkdGgpLCAxMCksIDApO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuaGFzVmVydGljYWxTcm9sbCgpKSB7XG4gICAgICAgICAgICB3aWR0aCAtPSB0aGlzLnNjcm9sbFdpZHRoO1xuICAgICAgICB9XG4gICAgICAgIGlmIChOdW1iZXIuaXNGaW5pdGUod2lkdGgpICYmIHdpZHRoICE9PSB0aGlzLmNhbGNXaWR0aCkge1xuICAgICAgICAgICAgdGhpcy5jYWxjV2lkdGggPSB3aWR0aDtcbiAgICAgICAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9kZXJpdmVQb3NzaWJsZVdpZHRoKCk7XG4gICAgfVxuXG4gICAgcHVibGljIGhhc1ZlcnRpY2FsU3JvbGwoKSB7XG4gICAgICAgIGlmICghdGhpcy5fbmdBZnRlclZpZXdJbml0UGFzc2VkKSB7IHJldHVybiBmYWxzZTsgfVxuICAgICAgICBjb25zdCBpc1Njcm9sbGFibGUgPSB0aGlzLnZlcnRpY2FsU2Nyb2xsQ29udGFpbmVyLmlzU2Nyb2xsYWJsZSgpO1xuICAgICAgICByZXR1cm4gISEodGhpcy5jYWxjV2lkdGggJiYgdGhpcy52ZXJ0aWNhbFNjcm9sbENvbnRhaW5lci5pZ3hGb3JPZiAmJlxuICAgICAgICAgICAgdGhpcy52ZXJ0aWNhbFNjcm9sbENvbnRhaW5lci5pZ3hGb3JPZi5sZW5ndGggPiAwICYmXG4gICAgICAgICAgICBpc1Njcm9sbGFibGUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW4gQGludGVybmFsXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGdldERhdGFCYXNlZEJvZHlIZWlnaHQoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuICF0aGlzLmRhdGEgfHwgKHRoaXMuZGF0YS5sZW5ndGggPCB0aGlzLl9kZWZhdWx0VGFyZ2V0UmVjb3JkTnVtYmVyKSA/XG4gICAgICAgICAgICAwIDogdGhpcy5kZWZhdWx0VGFyZ2V0Qm9keUhlaWdodDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHJvdGVjdGVkIG9uQ29sdW1uc0NoYW5nZWQoY2hhbmdlOiBRdWVyeUxpc3Q8SWd4Q29sdW1uQ29tcG9uZW50Pikge1xuICAgICAgICBjb25zdCBkaWZmID0gdGhpcy5jb2x1bW5MaXN0RGlmZmVyLmRpZmYoY2hhbmdlKTtcbiAgICAgICAgaWYgKGRpZmYpIHtcbiAgICAgICAgICAgIGxldCBhZGRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgbGV0IHJlbW92ZWQgPSBmYWxzZTtcblxuICAgICAgICAgICAgdGhpcy5pbml0Q29sdW1ucyh0aGlzLmNvbHVtbkxpc3QpO1xuXG5cbiAgICAgICAgICAgIGRpZmYuZm9yRWFjaEFkZGVkSXRlbSgocmVjb3JkOiBJdGVyYWJsZUNoYW5nZVJlY29yZDxJZ3hDb2x1bW5Db21wb25lbnQ+KSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5vbkNvbHVtbkluaXQuZW1pdChyZWNvcmQuaXRlbSk7XG4gICAgICAgICAgICAgICAgYWRkZWQgPSB0cnVlO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGRpZmYuZm9yRWFjaFJlbW92ZWRJdGVtKChyZWNvcmQ6IEl0ZXJhYmxlQ2hhbmdlUmVjb3JkPElneENvbHVtbkNvbXBvbmVudD4pID0+IHtcbiAgICAgICAgICAgICAgICAvLyBDbGVhciBGaWx0ZXJpbmdcbiAgICAgICAgICAgICAgICB0aGlzLmdyaWRBUEkuY2xlYXJfZmlsdGVyKHJlY29yZC5pdGVtLmZpZWxkKTtcblxuICAgICAgICAgICAgICAgIC8vIENsZWFyIFNvcnRpbmdcbiAgICAgICAgICAgICAgICB0aGlzLmdyaWRBUEkuY2xlYXJfc29ydChyZWNvcmQuaXRlbS5maWVsZCk7XG4gICAgICAgICAgICAgICAgcmVtb3ZlZCA9IHRydWU7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgdGhpcy5yZXNldENhY2hlcygpO1xuXG4gICAgICAgICAgICBpZiAoYWRkZWQgfHwgcmVtb3ZlZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3VtbWFyeVNlcnZpY2UuY2xlYXJTdW1tYXJ5Q2FjaGUoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNhbGN1bGF0ZUdyaWRTaXplcygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHByb3RlY3RlZCBjYWxjdWxhdGVHcmlkU2l6ZXMoKSB7XG4gICAgICAgIC8qXG4gICAgICAgICAgICBUT0RPOiAoUi5LLikgVGhpcyBsYXllcmVkIGxhc2FnbmUgc2hvdWxkIGJlIHJlZmFjdG9yZWRcbiAgICAgICAgICAgIEFTQVAuIFRoZSByZWFzb24gSSBoYXZlIHRvIHJlc2V0IHRoZSBjYWNoZXMgc28gbWFueSB0aW1lcyBpcyBiZWNhdXNlXG4gICAgICAgICAgICBhZnRlciB0ZWFjaCBgZGV0ZWN0Q2hhbmdlc2AgY2FsbCB0aGV5IGFyZSBmaWxsZWQgd2l0aCBpbnZhbGlkXG4gICAgICAgICAgICBzdGF0ZS4gT2YgY291cnNlIGFsbCBvZiB0aGlzIGhhcHBlbnMgbWlkd2F5IHRocm91Z2ggdGhlIGdyaWRcbiAgICAgICAgICAgIHNpemluZyBwcm9jZXNzIHdoaWNoIG9mIGNvdXJzZSwgdXNlcyB2YWx1ZXMgZnJvbSB0aGUgY2FjaGVzLCB0aHVzIHJlc3VsdGluZ1xuICAgICAgICAgICAgaW4gYSBicm9rZW4gbGF5b3V0LlxuICAgICAgICAqL1xuICAgICAgICB0aGlzLnJlc2V0Q2FjaGVzKCk7XG4gICAgICAgIGNvbnN0IGhhc1Njcm9sbCA9IHRoaXMuaGFzVmVydGljYWxTcm9sbCgpO1xuICAgICAgICB0aGlzLmNhbGN1bGF0ZUdyaWRXaWR0aCgpO1xuICAgICAgICB0aGlzLnJlc2V0Q2FjaGVzKCk7XG4gICAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICAgICAgdGhpcy5jYWxjdWxhdGVHcmlkSGVpZ2h0KCk7XG5cbiAgICAgICAgaWYgKHRoaXMucm93RWRpdGFibGUpIHtcbiAgICAgICAgICAgIHRoaXMucmVwb3NpdGlvblJvd0VkaXRpbmdPdmVybGF5KHRoaXMucm93SW5FZGl0TW9kZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5maWx0ZXJpbmdTZXJ2aWNlLmlzRmlsdGVyUm93VmlzaWJsZSkge1xuICAgICAgICAgICAgdGhpcy5maWx0ZXJpbmdSb3cucmVzZXRDaGlwc0FyZWEoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICAgICAgdGhpcy5yZXNldENhY2hlcygpO1xuICAgICAgICAvLyBpbiBjYXNlIHNjcm9sbGJhciBoYXMgYXBwZWFyZWQgcmVjYWxjIHRvIHNpemUgY29ycmVjdGx5LlxuICAgICAgICBpZiAoaGFzU2Nyb2xsICE9PSB0aGlzLmhhc1ZlcnRpY2FsU3JvbGwoKSkge1xuICAgICAgICAgICAgdGhpcy5jYWxjdWxhdGVHcmlkV2lkdGgoKTtcbiAgICAgICAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICAgICAgICAgIHRoaXMucmVzZXRDYWNoZXMoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKiBHZXRzIHRoZSBjb21iaW5lZCB3aWR0aCBvZiB0aGUgY29sdW1ucyB0aGF0IGFyZSBzcGVjaWZpYyB0byB0aGUgZW5hYmxlZCBncmlkIGZlYXR1cmVzLiBUaGV5IGFyZSBmaXhlZC5cbiAgICAgKiBNZXRob2QgdXNlZCB0byBvdmVycmlkZSB0aGUgY2FsY3VsYXRpb25zLlxuICAgICAqIFRPRE86IFJlbW92ZSBmb3IgQW5ndWxhciA4LiBDYWxsaW5nIHBhcmVudCBjbGFzcyBnZXR0ZXIgdXNpbmcgc3VwZXIgaXMgbm90IHN1cHBvcnRlZCBmb3Igbm93LlxuICAgICAqL1xuICAgIHB1YmxpYyBnZXRGZWF0dXJlQ29sdW1uc1dpZHRoKCkge1xuICAgICAgICBsZXQgd2lkdGggPSAwO1xuXG4gICAgICAgIGlmICh0aGlzLmhlYWRlckNoZWNrYm94Q29udGFpbmVyKSB7XG4gICAgICAgICAgICB3aWR0aCArPSB0aGlzLmhlYWRlckNoZWNrYm94Q29udGFpbmVyLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGg7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuaGVhZGVyRHJhZ0NvbnRhaW5lcikge1xuICAgICAgICAgICAgd2lkdGggKz0gdGhpcy5oZWFkZXJEcmFnQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGg7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHdpZHRoO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgY2FsY3VsYXRlZCB3aWR0aCBvZiB0aGUgcGlubmVkIGFyZWEuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGNvbnN0IHBpbm5lZFdpZHRoID0gdGhpcy5ncmlkLmdldFBpbm5lZFdpZHRoKCk7XG4gICAgICogYGBgXG4gICAgICogQHBhcmFtIHRha2VIaWRkZW4gSWYgd2Ugc2hvdWxkIHRha2UgaW50byBhY2NvdW50IHRoZSBoaWRkZW4gY29sdW1ucyBpbiB0aGUgcGlubmVkIGFyZWEuXG4gICAgICogQG1lbWJlcm9mIElneEdyaWRCYXNlQ29tcG9uZW50XG4gICAgICovXG4gICAgcHVibGljIGdldFBpbm5lZFdpZHRoKHRha2VIaWRkZW4gPSBmYWxzZSkge1xuICAgICAgICBjb25zdCBmYyA9IHRha2VIaWRkZW4gPyB0aGlzLl9waW5uZWRDb2x1bW5zIDogdGhpcy5waW5uZWRDb2x1bW5zO1xuICAgICAgICBsZXQgc3VtID0gMDtcbiAgICAgICAgZm9yIChjb25zdCBjb2wgb2YgZmMpIHtcbiAgICAgICAgICAgIGlmIChjb2wubGV2ZWwgPT09IDApIHtcbiAgICAgICAgICAgICAgICBzdW0gKz0gcGFyc2VJbnQoY29sLmNhbGNXaWR0aCwgMTApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHN1bSArPSB0aGlzLmZlYXR1cmVDb2x1bW5zV2lkdGg7XG5cbiAgICAgICAgcmV0dXJuIHN1bTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICogR2V0cyBjYWxjdWxhdGVkIHdpZHRoIG9mIHRoZSB1bnBpbm5lZCBhcmVhXG4gICAgICogQHBhcmFtIHRha2VIaWRkZW4gSWYgd2Ugc2hvdWxkIHRha2UgaW50byBhY2NvdW50IHRoZSBoaWRkZW4gY29sdW1ucyBpbiB0aGUgcGlubmVkIGFyZWEuXG4gICAgICogQG1lbWJlcm9mIElneEdyaWRCYXNlQ29tcG9uZW50XG4gICAgICovXG4gICAgcHJvdGVjdGVkIGdldFVucGlubmVkV2lkdGgodGFrZUhpZGRlbiA9IGZhbHNlKSB7XG4gICAgICAgIGxldCB3aWR0aCA9IHRoaXMuaXNQZXJjZW50V2lkdGggP1xuICAgICAgICAgICAgdGhpcy5jYWxjV2lkdGggOlxuICAgICAgICAgICAgcGFyc2VJbnQodGhpcy53aWR0aCwgMTApO1xuICAgICAgICBpZiAodGhpcy5oYXNWZXJ0aWNhbFNyb2xsKCkgJiYgIXRoaXMuaXNQZXJjZW50V2lkdGgpIHtcbiAgICAgICAgICAgIHdpZHRoIC09IHRoaXMuc2Nyb2xsV2lkdGg7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHdpZHRoIC0gdGhpcy5nZXRQaW5uZWRXaWR0aCh0YWtlSGlkZGVuKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHJvdGVjdGVkIF9zdW1tYXJpZXMoZmllbGROYW1lOiBzdHJpbmcsIGhhc1N1bW1hcnk6IGJvb2xlYW4sIHN1bW1hcnlPcGVyYW5kPzogYW55KSB7XG4gICAgICAgIGNvbnN0IGNvbHVtbiA9IHRoaXMuZ3JpZEFQSS5nZXRfY29sdW1uX2J5X25hbWUoZmllbGROYW1lKTtcbiAgICAgICAgaWYgKGNvbHVtbikge1xuICAgICAgICAgICAgY29sdW1uLmhhc1N1bW1hcnkgPSBoYXNTdW1tYXJ5O1xuICAgICAgICAgICAgaWYgKHN1bW1hcnlPcGVyYW5kKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucm9vdFN1bW1hcmllc0VuYWJsZWQpIHsgdGhpcy5zdW1tYXJ5U2VydmljZS5yZXRyaWdnZXJSb290UGlwZSsrOyB9XG4gICAgICAgICAgICAgICAgY29sdW1uLnN1bW1hcmllcyA9IHN1bW1hcnlPcGVyYW5kO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHByb3RlY3RlZCBfbXVsdGlwbGVTdW1tYXJpZXMoZXhwcmVzc2lvbnM6IElTdW1tYXJ5RXhwcmVzc2lvbltdLCBoYXNTdW1tYXJ5OiBib29sZWFuKSB7XG4gICAgICAgIGV4cHJlc3Npb25zLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMuX3N1bW1hcmllcyhlbGVtZW50LmZpZWxkTmFtZSwgaGFzU3VtbWFyeSwgZWxlbWVudC5jdXN0b21TdW1tYXJ5KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgX2Rpc2FibGVNdWx0aXBsZVN1bW1hcmllcyhleHByZXNzaW9ucykge1xuICAgICAgICBleHByZXNzaW9ucy5mb3JFYWNoKChjb2x1bW4pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvbHVtbk5hbWUgPSBjb2x1bW4gJiYgY29sdW1uLmZpZWxkTmFtZSA/IGNvbHVtbi5maWVsZE5hbWUgOiBjb2x1bW47XG4gICAgICAgICAgICB0aGlzLl9zdW1tYXJpZXMoY29sdW1uTmFtZSwgZmFsc2UpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHJvdGVjdGVkIHJlc29sdmVEYXRhVHlwZXMocmVjKSB7XG4gICAgICAgIGlmICh0eXBlb2YgcmVjID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgcmV0dXJuIERhdGFUeXBlLk51bWJlcjtcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgcmVjID09PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICAgIHJldHVybiBEYXRhVHlwZS5Cb29sZWFuO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiByZWMgPT09ICdvYmplY3QnICYmIHJlYyBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgICAgIHJldHVybiBEYXRhVHlwZS5EYXRlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBEYXRhVHlwZS5TdHJpbmc7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRTY3JvbGxXaWR0aCgpIHtcbiAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IHN0eWxlID0gZGl2LnN0eWxlO1xuICAgICAgICBzdHlsZS53aWR0aCA9ICcxMDBweCc7XG4gICAgICAgIHN0eWxlLmhlaWdodCA9ICcxMDBweCc7XG4gICAgICAgIHN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICAgICAgc3R5bGUudG9wID0gJy0xMDAwMHB4JztcbiAgICAgICAgc3R5bGUudG9wID0gJy0xMDAwMHB4JztcbiAgICAgICAgc3R5bGUub3ZlcmZsb3cgPSAnc2Nyb2xsJztcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkaXYpO1xuICAgICAgICBjb25zdCBzY3JvbGxXaWR0aCA9IGRpdi5vZmZzZXRXaWR0aCAtIGRpdi5jbGllbnRXaWR0aDtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChkaXYpO1xuICAgICAgICByZXR1cm4gc2Nyb2xsV2lkdGg7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHByb3RlY3RlZCBhdXRvZ2VuZXJhdGVDb2x1bW5zKCkge1xuICAgICAgICBjb25zdCBkYXRhID0gdGhpcy5ncmlkQVBJLmdldF9kYXRhKCk7XG4gICAgICAgIGNvbnN0IGZhY3RvcnkgPSB0aGlzLnJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KElneENvbHVtbkNvbXBvbmVudCk7XG4gICAgICAgIGNvbnN0IGZpZWxkcyA9IHRoaXMuZ2VuZXJhdGVEYXRhRmllbGRzKGRhdGEpO1xuICAgICAgICBjb25zdCBjb2x1bW5zID0gW107XG5cbiAgICAgICAgZmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gICAgICAgICAgICBjb25zdCByZWYgPSB0aGlzLnZpZXdSZWYuY3JlYXRlQ29tcG9uZW50KGZhY3RvcnksIG51bGwsIHRoaXMudmlld1JlZi5pbmplY3Rvcik7XG4gICAgICAgICAgICByZWYuaW5zdGFuY2UuZmllbGQgPSBmaWVsZDtcbiAgICAgICAgICAgIHJlZi5pbnN0YW5jZS5kYXRhVHlwZSA9IHRoaXMucmVzb2x2ZURhdGFUeXBlcyhkYXRhWzBdW2ZpZWxkXSk7XG4gICAgICAgICAgICByZWYuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgICAgICAgY29sdW1ucy5wdXNoKHJlZi5pbnN0YW5jZSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuY29sdW1uTGlzdC5yZXNldChjb2x1bW5zKTtcbiAgICAgICAgaWYgKGRhdGEgJiYgZGF0YS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aGlzLnNob3VsZEdlbmVyYXRlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZ2VuZXJhdGVEYXRhRmllbGRzKGRhdGE6IGFueVtdKTogc3RyaW5nW10ge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmtleXMoZGF0YSAmJiBkYXRhLmxlbmd0aCAhPT0gMCA/IGRhdGFbMF0gOiBbXSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIG9ubHlUb3BMZXZlbChhcnIpIHtcbiAgICAgICAgcmV0dXJuIGFyci5maWx0ZXIoYyA9PiBjLmxldmVsID09PSAwKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGluaXRDb2x1bW5zKGNvbGxlY3Rpb246IFF1ZXJ5TGlzdDxJZ3hDb2x1bW5Db21wb25lbnQ+LCBjYjogRnVuY3Rpb24gPSBudWxsKSB7XG4gICAgICAgIC8vIFhYWDogRGVwcmVjYXRlIGluZGV4XG4gICAgICAgIHRoaXMuX2NvbHVtbkdyb3VwcyA9IHRoaXMuY29sdW1uTGlzdC5zb21lKGNvbCA9PiBjb2wuY29sdW1uR3JvdXApO1xuICAgICAgICBpZiAodGhpcy5oYXNDb2x1bW5MYXlvdXRzKSB7XG4gICAgICAgICAgICAvLyBTZXQgb3ZlcmFsbCByb3cgbGF5b3V0IHNpemVcbiAgICAgICAgICAgIHRoaXMuY29sdW1uTGlzdC5mb3JFYWNoKChjb2wpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoY29sLmNvbHVtbkxheW91dCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBsYXlvdXRTaXplID0gY29sLmNoaWxkcmVuID9cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbC5jaGlsZHJlbi5yZWR1Y2UoKGFjYywgdmFsKSA9PiBNYXRoLm1heCh2YWwucm93U3RhcnQgKyB2YWwuZ3JpZFJvd1NwYW4gLSAxLCBhY2MpLCAxKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAxO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9tdWx0aVJvd0xheW91dFJvd1NpemUgPSBNYXRoLm1heChsYXlvdXRTaXplLCB0aGlzLl9tdWx0aVJvd0xheW91dFJvd1NpemUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmhhc0NvbHVtbkxheW91dHMgJiYgdGhpcy5oYXNDb2x1bW5Hcm91cHMpIHtcbiAgICAgICAgICAgIC8vIGludmFsaWQgY29uZmlndXJhdGlvbiAtIG11bHRpLXJvdyBhbmQgY29sdW1uIGdyb3Vwc1xuICAgICAgICAgICAgLy8gcmVtb3ZlIGNvbHVtbiBncm91cHNcbiAgICAgICAgICAgIGNvbnN0IGNvbHVtbkxheW91dENvbHVtbnMgPSB0aGlzLmNvbHVtbkxpc3QuZmlsdGVyKChjb2wpID0+IGNvbC5jb2x1bW5MYXlvdXQgfHwgY29sLmNvbHVtbkxheW91dENoaWxkKTtcbiAgICAgICAgICAgIHRoaXMuY29sdW1uTGlzdC5yZXNldChjb2x1bW5MYXlvdXRDb2x1bW5zKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9tYXhMZXZlbEhlYWRlckRlcHRoID0gbnVsbDtcbiAgICAgICAgdGhpcy5fY29sdW1ucyA9IHRoaXMuY29sdW1uTGlzdC50b0FycmF5KCk7XG4gICAgICAgIGNvbGxlY3Rpb24uZm9yRWFjaCgoY29sdW1uOiBJZ3hDb2x1bW5Db21wb25lbnQpID0+IHtcbiAgICAgICAgICAgIGNvbHVtbi5ncmlkID0gdGhpcztcbiAgICAgICAgICAgIGNvbHVtbi5kZWZhdWx0V2lkdGggPSB0aGlzLmNvbHVtbldpZHRoO1xuXG4gICAgICAgICAgICBpZiAoY2IpIHtcbiAgICAgICAgICAgICAgICBjYihjb2x1bW4pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnJlaW5pdFBpblN0YXRlcygpO1xuXG4gICAgICAgIGlmICh0aGlzLmhhc0NvbHVtbkxheW91dHMpIHtcbiAgICAgICAgICAgIGNvbGxlY3Rpb24uZm9yRWFjaCgoY29sdW1uOiBJZ3hDb2x1bW5Db21wb25lbnQpID0+IHtcbiAgICAgICAgICAgICAgICBjb2x1bW4ucG9wdWxhdGVWaXNpYmxlSW5kZXhlcygpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHJvdGVjdGVkIHJlaW5pdFBpblN0YXRlcygpIHtcbiAgICAgICAgdGhpcy5fcGlubmVkQ29sdW1ucyA9ICh0aGlzLmhhc0NvbHVtbkdyb3VwcykgPyB0aGlzLmNvbHVtbkxpc3QuZmlsdGVyKChjKSA9PiBjLnBpbm5lZCkgOlxuICAgICAgICAgICAgdGhpcy5jb2x1bW5MaXN0LmZpbHRlcigoYykgPT4gYy5waW5uZWQpLnNvcnQoKGEsIGIpID0+IHRoaXMuX3Bpbm5lZENvbHVtbnMuaW5kZXhPZihhKSAtIHRoaXMuX3Bpbm5lZENvbHVtbnMuaW5kZXhPZihiKSk7XG4gICAgICAgIHRoaXMuX3VucGlubmVkQ29sdW1ucyA9IHRoaXMuY29sdW1uTGlzdC5maWx0ZXIoKGMpID0+ICFjLnBpbm5lZCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyBpc0NvbHVtbkdyb3VwZWQoZmllbGROYW1lOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgb25IZWFkZXJDaGVja2JveENsaWNrKGV2ZW50LCBmaWx0ZXJlZERhdGEpIHtcbiAgICAgICAgdGhpcy5hbGxSb3dzU2VsZWN0ZWQgPSBldmVudC5jaGVja2VkO1xuICAgICAgICBjb25zdCBuZXdTZWxlY3Rpb24gPVxuICAgICAgICAgICAgZXZlbnQuY2hlY2tlZCA/XG4gICAgICAgICAgICAgICAgZmlsdGVyZWREYXRhID9cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb24uYWRkX2l0ZW1zKHRoaXMuaWQsIHRoaXMuc2VsZWN0aW9uLmdldF9hbGxfaWRzKGZpbHRlcmVkRGF0YSwgdGhpcy5wcmltYXJ5S2V5KSkgOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbi5nZXRfYWxsX2lkcyh0aGlzLmdyaWRBUEkuZ2V0X2FsbF9kYXRhKHRydWUpLCB0aGlzLnByaW1hcnlLZXkpIDpcbiAgICAgICAgICAgICAgICBmaWx0ZXJlZERhdGEgP1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbi5kZWxldGVfaXRlbXModGhpcy5pZCwgdGhpcy5zZWxlY3Rpb24uZ2V0X2FsbF9pZHMoZmlsdGVyZWREYXRhLCB0aGlzLnByaW1hcnlLZXkpKSA6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uLmdldF9lbXB0eSgpO1xuICAgICAgICB0aGlzLnRyaWdnZXJSb3dTZWxlY3Rpb25DaGFuZ2UobmV3U2VsZWN0aW9uLCBudWxsLCBldmVudCwgZXZlbnQuY2hlY2tlZCk7XG4gICAgICAgIHRoaXMuY2hlY2tIZWFkZXJDaGVja2JveFN0YXR1cyhldmVudC5jaGVja2VkKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgZ2V0IGhlYWRlckNoZWNrYm94QXJpYUxhYmVsKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZmlsdGVyaW5nRXhwcmVzc2lvbnNUcmVlLmZpbHRlcmluZ09wZXJhbmRzLmxlbmd0aCA+IDAgP1xuICAgICAgICAgICAgdGhpcy5oZWFkZXJDaGVja2JveCAmJiB0aGlzLmhlYWRlckNoZWNrYm94LmNoZWNrZWQgPyAnRGVzZWxlY3QgYWxsIGZpbHRlcmVkJyA6ICdTZWxlY3QgYWxsIGZpbHRlcmVkJyA6XG4gICAgICAgICAgICB0aGlzLmhlYWRlckNoZWNrYm94ICYmIHRoaXMuaGVhZGVyQ2hlY2tib3guY2hlY2tlZCA/ICdEZXNlbGVjdCBhbGwnIDogJ1NlbGVjdCBhbGwnO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgY2hlY2tIZWFkZXJDaGVja2JveFN0YXR1cyhoZWFkZXJTdGF0dXM/OiBib29sZWFuKSB7XG4gICAgICAgIGlmIChoZWFkZXJTdGF0dXMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgY29uc3QgZmlsdGVyZWREYXRhID0gdGhpcy5maWx0ZXJpbmdTZXJ2aWNlLmZpbHRlcmVkRGF0YTtcbiAgICAgICAgICAgIGNvbnN0IGRhdGFMZW5ndGggPSBmaWx0ZXJlZERhdGEgPyBmaWx0ZXJlZERhdGEubGVuZ3RoIDogdGhpcy5kYXRhTGVuZ3RoO1xuICAgICAgICAgICAgdGhpcy5hbGxSb3dzU2VsZWN0ZWQgPSB0aGlzLnNlbGVjdGlvbi5hcmVfYWxsX3NlbGVjdGVkKHRoaXMuaWQsIGRhdGFMZW5ndGgpO1xuICAgICAgICAgICAgaWYgKHRoaXMuaGVhZGVyQ2hlY2tib3gpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmhlYWRlckNoZWNrYm94LmluZGV0ZXJtaW5hdGUgPSAhdGhpcy5hbGxSb3dzU2VsZWN0ZWQgJiYgIXRoaXMuc2VsZWN0aW9uLmFyZV9ub25lX3NlbGVjdGVkKHRoaXMuaWQpO1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5oZWFkZXJDaGVja2JveC5pbmRldGVybWluYXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGVhZGVyQ2hlY2tib3guY2hlY2tlZCA9XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFsbFJvd3NTZWxlY3RlZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmhlYWRlckNoZWNrYm94KSB7XG4gICAgICAgICAgICB0aGlzLmhlYWRlckNoZWNrYm94LmNoZWNrZWQgPSBoZWFkZXJTdGF0dXMgIT09IHVuZGVmaW5lZCA/IGhlYWRlclN0YXR1cyA6IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyBmaWx0ZXJlZEl0ZW1zU3RhdHVzKGNvbXBvbmVudElEOiBzdHJpbmcsIGZpbHRlcmVkRGF0YTogYW55W10sIHByaW1hcnlLZXk/KSB7XG4gICAgICAgIGNvbnN0IGN1cnJTZWxlY3Rpb24gPSB0aGlzLnNlbGVjdGlvbi5nZXQoY29tcG9uZW50SUQpO1xuICAgICAgICBsZXQgYXRMZWFzdE9uZVNlbGVjdGVkID0gZmFsc2U7XG4gICAgICAgIGxldCBub3RBbGxTZWxlY3RlZCA9IGZhbHNlO1xuICAgICAgICBpZiAoY3VyclNlbGVjdGlvbikge1xuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXMoZmlsdGVyZWREYXRhKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGFJdGVtID0gcHJpbWFyeUtleSA/IGZpbHRlcmVkRGF0YVtrZXldW3ByaW1hcnlLZXldIDogZmlsdGVyZWREYXRhW2tleV07XG4gICAgICAgICAgICAgICAgaWYgKGN1cnJTZWxlY3Rpb24uaGFzKGRhdGFJdGVtKSkge1xuICAgICAgICAgICAgICAgICAgICBhdExlYXN0T25lU2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBpZiAobm90QWxsU2VsZWN0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnaW5kZXRlcm1pbmF0ZSc7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBub3RBbGxTZWxlY3RlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGlmIChhdExlYXN0T25lU2VsZWN0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnaW5kZXRlcm1pbmF0ZSc7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGF0TGVhc3RPbmVTZWxlY3RlZCA/ICdhbGxTZWxlY3RlZCcgOiAnbm9uZVNlbGVjdGVkJztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIHVwZGF0ZUhlYWRlckNoZWNrYm94U3RhdHVzT25GaWx0ZXIoZGF0YSkge1xuICAgICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgICAgIHRoaXMuY2hlY2tIZWFkZXJDaGVja2JveFN0YXR1cygpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHN3aXRjaCAodGhpcy5maWx0ZXJlZEl0ZW1zU3RhdHVzKHRoaXMuaWQsIGRhdGEsIHRoaXMucHJpbWFyeUtleSkpIHtcbiAgICAgICAgICAgIGNhc2UgJ2FsbFNlbGVjdGVkJzoge1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5hbGxSb3dzU2VsZWN0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGxSb3dzU2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5oZWFkZXJDaGVja2JveC5pbmRldGVybWluYXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGVhZGVyQ2hlY2tib3guaW5kZXRlcm1pbmF0ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgJ25vbmVTZWxlY3RlZCc6IHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5hbGxSb3dzU2VsZWN0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGxSb3dzU2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaGVhZGVyQ2hlY2tib3guaW5kZXRlcm1pbmF0ZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmhlYWRlckNoZWNrYm94LmluZGV0ZXJtaW5hdGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkZWZhdWx0OiB7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmhlYWRlckNoZWNrYm94LmluZGV0ZXJtaW5hdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oZWFkZXJDaGVja2JveC5pbmRldGVybWluYXRlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYWxsUm93c1NlbGVjdGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWxsUm93c1NlbGVjdGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IGN1cnJlbnQgc2VsZWN0aW9uIHN0YXRlLlxuICAgICAqIFJldHVybnMgYW4gYXJyYXkgd2l0aCBzZWxlY3RlZCByb3dzJyBJRHMgKHByaW1hcnlLZXkgb3Igcm93RGF0YSlcbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogY29uc3Qgc2VsZWN0ZWRSb3dzID0gdGhpcy5ncmlkLnNlbGVjdGVkUm93cygpO1xuICAgICAqIGBgYFxuXHQgKiBAbWVtYmVyb2YgSWd4R3JpZEJhc2VDb21wb25lbnRcbiAgICAgKi9cbiAgICBwdWJsaWMgc2VsZWN0ZWRSb3dzKCk6IGFueVtdIHtcbiAgICAgICAgbGV0IHNlbGVjdGlvbjogU2V0PGFueT47XG4gICAgICAgIHNlbGVjdGlvbiA9IHRoaXMuc2VsZWN0aW9uLmdldCh0aGlzLmlkKTtcbiAgICAgICAgcmV0dXJuIHNlbGVjdGlvbiA/IEFycmF5LmZyb20oc2VsZWN0aW9uKSA6IFtdO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNlbGVjdCBzcGVjaWZpZWQgcm93cyBieSBJRC5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogdGhpcy5ncmlkLnNlbGVjdFJvd3MoWzEsMiw1XSwgdHJ1ZSk7XG4gICAgICogYGBgXG4gICAgICogQHBhcmFtIHJvd0lEc1xuICAgICAqIEBwYXJhbSBjbGVhckN1cnJlbnRTZWxlY3Rpb24gaWYgdHJ1ZSBjbGVhcnMgdGhlIGN1cnJlbnQgc2VsZWN0aW9uXG4gICAgICogQG1lbWJlcm9mIElneEdyaWRCYXNlQ29tcG9uZW50XG4gICAgICovXG4gICAgcHVibGljIHNlbGVjdFJvd3Mocm93SURzOiBhbnlbXSwgY2xlYXJDdXJyZW50U2VsZWN0aW9uPzogYm9vbGVhbikge1xuICAgICAgICBsZXQgbmV3U2VsZWN0aW9uOiBTZXQ8YW55PjtcbiAgICAgICAgbGV0IHNlbGVjdGFibGVSb3dzID0gW107XG4gICAgICAgIGlmICh0aGlzLnRyYW5zYWN0aW9ucy5lbmFibGVkKSB7XG4gICAgICAgICAgICBzZWxlY3RhYmxlUm93cyA9IHJvd0lEcy5maWx0ZXIoZSA9PiAhdGhpcy5ncmlkQVBJLnJvd19kZWxldGVkX3RyYW5zYWN0aW9uKGUpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNlbGVjdGFibGVSb3dzID0gcm93SURzO1xuICAgICAgICB9XG4gICAgICAgIG5ld1NlbGVjdGlvbiA9IHRoaXMuc2VsZWN0aW9uLmFkZF9pdGVtcyh0aGlzLmlkLCBzZWxlY3RhYmxlUm93cywgY2xlYXJDdXJyZW50U2VsZWN0aW9uKTtcbiAgICAgICAgdGhpcy50cmlnZ2VyUm93U2VsZWN0aW9uQ2hhbmdlKG5ld1NlbGVjdGlvbik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVzZWxlY3Qgc3BlY2lmaWVkIHJvd3MgYnkgSUQuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIHRoaXMuZ3JpZC5kZXNlbGVjdFJvd3MoWzEsMiw1XSk7XG4gICAgICogYGBgXG4gICAgICogQHBhcmFtIHJvd0lEc1xuICAgICAqIEBtZW1iZXJvZiBJZ3hHcmlkQmFzZUNvbXBvbmVudFxuICAgICAqL1xuICAgIHB1YmxpYyBkZXNlbGVjdFJvd3Mocm93SURzOiBhbnlbXSkge1xuICAgICAgICBsZXQgbmV3U2VsZWN0aW9uOiBTZXQ8YW55PjtcbiAgICAgICAgbmV3U2VsZWN0aW9uID0gdGhpcy5zZWxlY3Rpb24uZGVsZXRlX2l0ZW1zKHRoaXMuaWQsIHJvd0lEcyk7XG4gICAgICAgIHRoaXMudHJpZ2dlclJvd1NlbGVjdGlvbkNoYW5nZShuZXdTZWxlY3Rpb24pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNlbGVjdHMgYWxsIHJvd3NcbiAgICAgKiBOb3RlOiBJZiBmaWx0ZXJpbmcgaXMgaW4gcGxhY2UsIHNlbGVjdEFsbFJvd3MoKSBhbmQgZGVzZWxlY3RBbGxSb3dzKCkgc2VsZWN0L2Rlc2VsZWN0IGFsbCBmaWx0ZXJlZCByb3dzLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiB0aGlzLmdyaWQuc2VsZWN0QWxsUm93cygpO1xuICAgICAqIGBgYFxuXHQgKiBAbWVtYmVyb2YgSWd4R3JpZEJhc2VDb21wb25lbnRcbiAgICAgKi9cbiAgICBwdWJsaWMgc2VsZWN0QWxsUm93cygpIHtcbiAgICAgICAgdGhpcy50cmlnZ2VyUm93U2VsZWN0aW9uQ2hhbmdlKHRoaXMuc2VsZWN0aW9uLmdldF9hbGxfaWRzKHRoaXMuZ3JpZEFQSS5nZXRfYWxsX2RhdGEodHJ1ZSksIHRoaXMucHJpbWFyeUtleSkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlc2VsZWN0cyBhbGwgcm93c1xuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiB0aGlzLmdyaWQuZGVzZWxlY3RBbGxSb3dzKCk7XG4gICAgICogYGBgXG4gICAgICogTm90ZTogSWYgZmlsdGVyaW5nIGlzIGluIHBsYWNlLCBzZWxlY3RBbGxSb3dzKCkgYW5kIGRlc2VsZWN0QWxsUm93cygpIHNlbGVjdC9kZXNlbGVjdCBhbGwgZmlsdGVyZWQgcm93cy5cbiAgICAgKi9cbiAgICBwdWJsaWMgZGVzZWxlY3RBbGxSb3dzKCkge1xuICAgICAgICB0aGlzLnRyaWdnZXJSb3dTZWxlY3Rpb25DaGFuZ2UodGhpcy5zZWxlY3Rpb24uZ2V0X2VtcHR5KCkpO1xuICAgIH1cblxuICAgIGNsZWFyQ2VsbFNlbGVjdGlvbigpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zZWxlY3Rpb25TZXJ2aWNlLmNsZWFyKCk7XG4gICAgICAgIHRoaXMuc2VsZWN0aW9uU2VydmljZS5hY3RpdmVFbGVtZW50ID0gbnVsbDtcbiAgICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuXG4gICAgZHJhZ1Njcm9sbChkaXI6IERyYWdTY3JvbGxEaXJlY3Rpb24pOiB2b2lkIHtcbiAgICAgICAgY29uc3Qgc2Nyb2xsRGVsdGEgPSA0ODtcbiAgICAgICAgY29uc3QgaG9yaXpvbnRhbCA9IHRoaXMucGFyZW50VmlydERpci5nZXRIb3Jpem9udGFsU2Nyb2xsKCk7XG4gICAgICAgIGNvbnN0IHZlcnRpY2FsID0gdGhpcy52ZXJ0aWNhbFNjcm9sbENvbnRhaW5lci5nZXRWZXJ0aWNhbFNjcm9sbCgpO1xuICAgICAgICBzd2l0Y2ggKGRpcikge1xuICAgICAgICAgICAgY2FzZSBEcmFnU2Nyb2xsRGlyZWN0aW9uLkxFRlQ6XG4gICAgICAgICAgICAgICAgaG9yaXpvbnRhbC5zY3JvbGxMZWZ0IC09IHNjcm9sbERlbHRhO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBEcmFnU2Nyb2xsRGlyZWN0aW9uLlJJR0hUOlxuICAgICAgICAgICAgICAgIGhvcml6b250YWwuc2Nyb2xsTGVmdCArPSBzY3JvbGxEZWx0YTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgRHJhZ1Njcm9sbERpcmVjdGlvbi5UT1A6XG4gICAgICAgICAgICAgICAgdmVydGljYWwuc2Nyb2xsVG9wIC09IHNjcm9sbERlbHRhO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBEcmFnU2Nyb2xsRGlyZWN0aW9uLkJPVFRPTTpcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbC5zY3JvbGxUb3AgKz0gc2Nyb2xsRGVsdGE7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIERyYWdTY3JvbGxEaXJlY3Rpb24uQk9UVE9NTEVGVDpcbiAgICAgICAgICAgICAgICBob3Jpem9udGFsLnNjcm9sbExlZnQgLT0gc2Nyb2xsRGVsdGE7XG4gICAgICAgICAgICAgICAgdmVydGljYWwuc2Nyb2xsVG9wICs9IHNjcm9sbERlbHRhO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBEcmFnU2Nyb2xsRGlyZWN0aW9uLkJPVFRPTVJJR0hUOlxuICAgICAgICAgICAgICAgIGhvcml6b250YWwuc2Nyb2xsTGVmdCArPSBzY3JvbGxEZWx0YTtcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbC5zY3JvbGxUb3AgKz0gc2Nyb2xsRGVsdGE7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIERyYWdTY3JvbGxEaXJlY3Rpb24uVE9QTEVGVDpcbiAgICAgICAgICAgICAgICBob3Jpem9udGFsLnNjcm9sbExlZnQgLT0gc2Nyb2xsRGVsdGE7XG4gICAgICAgICAgICAgICAgdmVydGljYWwuc2Nyb2xsVG9wIC09IHNjcm9sbERlbHRhO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBEcmFnU2Nyb2xsRGlyZWN0aW9uLlRPUFJJR0hUOlxuICAgICAgICAgICAgICAgIGhvcml6b250YWwuc2Nyb2xsTGVmdCArPSBzY3JvbGxEZWx0YTtcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbC5zY3JvbGxUb3AgLT0gc2Nyb2xsRGVsdGE7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLndoZWVsSGFuZGxlcigpO1xuICAgIH1cblxuICAgIGlzRGVmaW5lZChhcmc6IGFueSk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gYXJnICE9PSB1bmRlZmluZWQgJiYgYXJnICE9PSBudWxsO1xuICAgIH1cblxuICAgIHNlbGVjdFJhbmdlKGFyZzogR3JpZFNlbGVjdGlvblJhbmdlIHwgR3JpZFNlbGVjdGlvblJhbmdlW10gfCBudWxsIHwgdW5kZWZpbmVkKTogdm9pZCB7XG4gICAgICAgIGlmICghdGhpcy5pc0RlZmluZWQoYXJnKSkge1xuICAgICAgICAgICAgdGhpcy5jbGVhckNlbGxTZWxlY3Rpb24oKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYXJnIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICAgIGFyZy5mb3JFYWNoKHJhbmdlID0+IHRoaXMuc2V0U2VsZWN0aW9uKHJhbmdlKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNldFNlbGVjdGlvbihhcmcpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cblxuICAgIGNvbHVtblRvVmlzaWJsZUluZGV4KGZpZWxkOiBzdHJpbmcgfCBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICBjb25zdCB2aXNpYmxlQ29sdW1ucyA9IHRoaXMudmlzaWJsZUNvbHVtbnM7XG4gICAgICAgIGlmICh0eXBlb2YgZmllbGQgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICByZXR1cm4gZmllbGQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZpc2libGVDb2x1bW5zLmZpbmQoY29sdW1uID0+IGNvbHVtbi5maWVsZCA9PT0gZmllbGQpLnZpc2libGVJbmRleDtcbiAgICB9XG5cblxuICAgIHNldFNlbGVjdGlvbihyYW5nZTogR3JpZFNlbGVjdGlvblJhbmdlKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHN0YXJ0Tm9kZSA9IHsgcm93OiByYW5nZS5yb3dTdGFydCwgY29sdW1uOiB0aGlzLmNvbHVtblRvVmlzaWJsZUluZGV4KHJhbmdlLmNvbHVtblN0YXJ0KSB9O1xuICAgICAgICBjb25zdCBlbmROb2RlID0geyByb3c6IHJhbmdlLnJvd0VuZCwgY29sdW1uOiB0aGlzLmNvbHVtblRvVmlzaWJsZUluZGV4KHJhbmdlLmNvbHVtbkVuZCkgfTtcblxuICAgICAgICB0aGlzLnNlbGVjdGlvblNlcnZpY2UucG9pbnRlclN0YXRlLm5vZGUgPSBzdGFydE5vZGU7XG4gICAgICAgIHRoaXMuc2VsZWN0aW9uU2VydmljZS5zZWxlY3RSYW5nZShlbmROb2RlLCB0aGlzLnNlbGVjdGlvblNlcnZpY2UucG9pbnRlclN0YXRlKTtcbiAgICAgICAgdGhpcy5zZWxlY3Rpb25TZXJ2aWNlLmFkZFJhbmdlTWV0YShlbmROb2RlLCB0aGlzLnNlbGVjdGlvblNlcnZpY2UucG9pbnRlclN0YXRlKTtcbiAgICAgICAgdGhpcy5zZWxlY3Rpb25TZXJ2aWNlLmluaXRQb2ludGVyU3RhdGUoKTtcbiAgICB9XG5cbiAgICBnZXRTZWxlY3RlZFJhbmdlcygpOiBHcmlkU2VsZWN0aW9uUmFuZ2VbXSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNlbGVjdGlvblNlcnZpY2UucmFuZ2VzO1xuICAgIH1cblxuXG4gICAgcHJvdGVjdGVkIGV4dHJhY3REYXRhRnJvbVNlbGVjdGlvbihzb3VyY2U6IGFueVtdLCBmb3JtYXR0ZXJzID0gZmFsc2UsIGhlYWRlcnMgPSBmYWxzZSk6IGFueVtdIHtcbiAgICAgICAgbGV0IGNvbHVtbnNBcnJheTogSWd4Q29sdW1uQ29tcG9uZW50W107XG4gICAgICAgIGxldCByZWNvcmQgPSB7fTtcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWREYXRhID0gW107XG5cbiAgICAgICAgY29uc3Qgc2VsZWN0aW9uTWFwID0gQXJyYXkuZnJvbSh0aGlzLnNlbGVjdGlvblNlcnZpY2Uuc2VsZWN0aW9uKVxuICAgICAgICAgICAgLmZpbHRlcigodHVwbGUpID0+IHR1cGxlWzBdIDwgc291cmNlLmxlbmd0aCk7XG5cblxuICAgICAgICBmb3IgKGNvbnN0IFtyb3csIHNldF0gb2Ygc2VsZWN0aW9uTWFwKSB7XG4gICAgICAgICAgICBpZiAoIXNvdXJjZVtyb3ddKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCB0ZW1wID0gQXJyYXkuZnJvbShzZXQpO1xuICAgICAgICAgICAgZm9yIChjb25zdCBlYWNoIG9mIHRlbXApIHtcbiAgICAgICAgICAgICAgICBjb2x1bW5zQXJyYXkgPSB0aGlzLmdldFNlbGVjdGFibGVDb2x1bW5zQXQoZWFjaCk7XG4gICAgICAgICAgICAgICAgY29sdW1uc0FycmF5LmZvckVhY2goKGNvbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY29sKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBrZXkgPSBoZWFkZXJzID8gY29sLmhlYWRlciB8fCBjb2wuZmllbGQgOiBjb2wuZmllbGQ7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWNvcmRba2V5XSA9IGZvcm1hdHRlcnMgJiYgY29sLmZvcm1hdHRlciA/IGNvbC5mb3JtYXR0ZXIoc291cmNlW3Jvd11bY29sLmZpZWxkXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIDogc291cmNlW3Jvd11bY29sLmZpZWxkXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKE9iamVjdC5rZXlzKHJlY29yZCkubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgc2VsZWN0ZWREYXRhLnB1c2gocmVjb3JkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlY29yZCA9IHt9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzZWxlY3RlZERhdGE7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGdldFNlbGVjdGFibGVDb2x1bW5zQXQoaW5kZXgpIHtcbiAgICAgICAgaWYgKHRoaXMuaGFzQ29sdW1uTGF5b3V0cykge1xuICAgICAgICAgICAgY29uc3QgdmlzaWJsZUxheW91dENvbHVtbnMgPSB0aGlzLnZpc2libGVDb2x1bW5zXG4gICAgICAgICAgICAuZmlsdGVyKGNvbCA9PiBjb2wuY29sdW1uTGF5b3V0KVxuICAgICAgICAgICAgLnNvcnQoKGEsIGIpID0+IGEudmlzaWJsZUluZGV4IC0gYi52aXNpYmxlSW5kZXgpO1xuICAgICAgICAgICAgY29uc3QgY29sTGF5b3V0ID0gdmlzaWJsZUxheW91dENvbHVtbnNbaW5kZXhdO1xuICAgICAgICAgICAgcmV0dXJuIGNvbExheW91dCA/IGNvbExheW91dC5jaGlsZHJlbi50b0FycmF5KCkgOiBbXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHZpc2libGVDb2x1bW5zID0gdGhpcy52aXNpYmxlQ29sdW1uc1xuICAgICAgICAgICAgLmZpbHRlcihjb2wgPT4gIWNvbC5jb2x1bW5Hcm91cClcbiAgICAgICAgICAgIC5zb3J0KChhLCBiKSA9PiBhLnZpc2libGVJbmRleCAtIGIudmlzaWJsZUluZGV4KTtcbiAgICAgICAgICAgIHJldHVybiBbIHZpc2libGVDb2x1bW5zW2luZGV4XSBdO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBSZXR1cm5zIGFuIGFycmF5IG9mIHRoZSBjdXJyZW50IGNlbGwgc2VsZWN0aW9uIGluIHRoZSBmb3JtIG9mIGBbeyBjb2x1bW4uZmllbGQ6IGNlbGwudmFsdWUgfSwgLi4uXWAuXG4gICAgICogSWYgYGZvcm1hdHRlcnNgIGlzIGVuYWJsZWQsIHRoZSBjZWxsIHZhbHVlIHdpbGwgYmUgZm9ybWF0dGVkIGJ5IGl0cyByZXNwZWN0aXZlIGNvbHVtbiBmb3JtYXR0ZXIgKGlmIGFueSkuXG4gICAgICogSWYgYGhlYWRlcnNgIGlzIGVuYWJsZWQsIGl0IHdpbGwgdXNlIHRoZSBjb2x1bW4gaGVhZGVyIChpZiBhbnkpIGluc3RlYWQgb2YgdGhlIGNvbHVtbiBmaWVsZC5cbiAgICAgKi9cbiAgICBnZXRTZWxlY3RlZERhdGEoZm9ybWF0dGVycyA9IGZhbHNlLCBoZWFkZXJzID0gZmFsc2UpIHtcbiAgICAgICAgY29uc3Qgc291cmNlID0gdGhpcy52ZXJ0aWNhbFNjcm9sbENvbnRhaW5lci5pZ3hGb3JPZjtcbiAgICAgICAgcmV0dXJuIHRoaXMuZXh0cmFjdERhdGFGcm9tU2VsZWN0aW9uKHNvdXJjZSwgZm9ybWF0dGVycywgaGVhZGVycyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyB0cmlnZ2VyUm93U2VsZWN0aW9uQ2hhbmdlKG5ld1NlbGVjdGlvbkFzU2V0OiBTZXQ8YW55Piwgcm93PzogSWd4Um93Q29tcG9uZW50PElneEdyaWRCYXNlQ29tcG9uZW50ICYgSUdyaWREYXRhQmluZGFibGU+LFxuICAgICAgICBldmVudD86IEV2ZW50LCBoZWFkZXJTdGF0dXM/OiBib29sZWFuKSB7XG4gICAgICAgIGNvbnN0IG9sZFNlbGVjdGlvbkFzU2V0ID0gdGhpcy5zZWxlY3Rpb24uZ2V0KHRoaXMuaWQpO1xuICAgICAgICBjb25zdCBvbGRTZWxlY3Rpb24gPSBvbGRTZWxlY3Rpb25Bc1NldCA/IEFycmF5LmZyb20ob2xkU2VsZWN0aW9uQXNTZXQpIDogW107XG4gICAgICAgIGNvbnN0IG5ld1NlbGVjdGlvbiA9IG5ld1NlbGVjdGlvbkFzU2V0ID8gQXJyYXkuZnJvbShuZXdTZWxlY3Rpb25Bc1NldCkgOiBbXTtcbiAgICAgICAgY29uc3QgYXJnczogSVJvd1NlbGVjdGlvbkV2ZW50QXJncyA9IHsgb2xkU2VsZWN0aW9uLCBuZXdTZWxlY3Rpb24sIHJvdywgZXZlbnQgfTtcbiAgICAgICAgdGhpcy5vblJvd1NlbGVjdGlvbkNoYW5nZS5lbWl0KGFyZ3MpO1xuICAgICAgICBuZXdTZWxlY3Rpb25Bc1NldCA9IHRoaXMuc2VsZWN0aW9uLmdldF9lbXB0eSgpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyZ3MubmV3U2VsZWN0aW9uLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBuZXdTZWxlY3Rpb25Bc1NldC5hZGQoYXJncy5uZXdTZWxlY3Rpb25baV0pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2VsZWN0aW9uLnNldCh0aGlzLmlkLCBuZXdTZWxlY3Rpb25Bc1NldCk7XG4gICAgICAgIHRoaXMuY2hlY2tIZWFkZXJDaGVja2JveFN0YXR1cyhoZWFkZXJTdGF0dXMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgc2Nyb2xsSGFuZGxlcihldmVudCkge1xuICAgICAgICB0aGlzLnBhcmVudFZpcnREaXIuZ2V0SG9yaXpvbnRhbFNjcm9sbCgpLnNjcm9sbExlZnQgKz0gZXZlbnQudGFyZ2V0LnNjcm9sbExlZnQ7XG4gICAgICAgIHRoaXMudmVydGljYWxTY3JvbGxDb250YWluZXIuZ2V0VmVydGljYWxTY3JvbGwoKS5zY3JvbGxUb3AgKz0gZXZlbnQudGFyZ2V0LnNjcm9sbFRvcDtcbiAgICAgICAgZXZlbnQudGFyZ2V0LnNjcm9sbExlZnQgPSAwO1xuICAgICAgICBldmVudC50YXJnZXQuc2Nyb2xsVG9wID0gMDtcbiAgICB9XG5cbiAgICBjb3B5SGFuZGxlcklFKCkge1xuICAgICAgICBpZiAoaXNJRSgpKSB7XG4gICAgICAgICAgICB0aGlzLmNvcHlIYW5kbGVyKG51bGwsIHRydWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqIEBpbnRlcm5hbFxuICAgICAqL1xuICAgIHB1YmxpYyBjb3B5SGFuZGxlcihldmVudCwgaWUxMSA9IGZhbHNlKSB7XG4gICAgICAgIGlmICghdGhpcy5jbGlwYm9hcmRPcHRpb25zLmVuYWJsZWQgfHwgdGhpcy5jcnVkU2VydmljZS5pbkVkaXRNb2RlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBkYXRhID0gdGhpcy5nZXRTZWxlY3RlZERhdGEodGhpcy5jbGlwYm9hcmRPcHRpb25zLmNvcHlGb3JtYXR0ZXJzLCB0aGlzLmNsaXBib2FyZE9wdGlvbnMuY29weUhlYWRlcnMpO1xuICAgICAgICBjb25zdCBldiA9IHsgZGF0YSwgY2FuY2VsOiBmYWxzZSB9IGFzIElHcmlkQ2xpcGJvYXJkRXZlbnQ7XG4gICAgICAgIHRoaXMub25HcmlkQ29weS5lbWl0KGV2KTtcblxuICAgICAgICBpZiAoZXYuY2FuY2VsKSB7XG4gICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdHJhbnNmb3JtZXIgPSBuZXcgQ2hhclNlcGFyYXRlZFZhbHVlRGF0YShldi5kYXRhLCB0aGlzLmNsaXBib2FyZE9wdGlvbnMuc2VwYXJhdG9yKTtcbiAgICAgICAgbGV0IHJlc3VsdCA9IHRyYW5zZm9ybWVyLnByZXBhcmVEYXRhKCk7XG5cbiAgICAgICAgaWYgKCF0aGlzLmNsaXBib2FyZE9wdGlvbnMuY29weUhlYWRlcnMpIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdC5zdWJzdHJpbmcocmVzdWx0LmluZGV4T2YoJ1xcbicpICsgMSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaWUxMSkge1xuICAgICAgICAgICAgKHdpbmRvdyBhcyBhbnkpLmNsaXBib2FyZERhdGEuc2V0RGF0YSgnVGV4dCcsIHJlc3VsdCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIC8qIE5lY2Vzc2FyeSBmb3IgdGhlIGhpZWFyYWNoaWNhbCBjYXNlIGJ1dCB3aWxsIHByb2JhYmx5IGhhdmUgdG9cbiAgICAgICAgICAgY2hhbmdlIGhvdyBnZXRTZWxlY3RlZERhdGEgaXMgcHJvcGFnYXRlZCBpbiB0aGUgaGllYXJhY2hpY2FsIGdyaWRcbiAgICAgICAgKi9cbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGV2ZW50LmNsaXBib2FyZERhdGEuc2V0RGF0YSgndGV4dC9wbGFpbicsIHJlc3VsdCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhpcyBtZXRob2QgYWxsb3dzIHlvdSB0byBuYXZpZ2F0ZSB0byBhIHBvc2l0aW9uXG4gICAgICogaW4gdGhlIGdyaWQgYmFzZWQgb24gcHJvdmlkZWQgYHJvd2luZGV4YCBhbmQgYHZpc2libGVDb2x1bW5JbmRleGAsXG4gICAgICogYWxzbyB0byBleGVjdXRlIGEgY3VzdG9tIGxvZ2ljIG92ZXIgdGhlIHRhcmdldCBlbGVtZW50LFxuICAgICAqIHRocm91Z2ggYSBjYWxsYmFjayBmdW5jdGlvbiB0aGF0IGFjY2VwdHMgeyB0YXJnZXRUeXBlOiBHcmlkS2V5ZG93blRhcmdldFR5cGUsIHRhcmdldDogT2JqZWN0IH1cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogIHRoaXMuZ3JpZC5uYXZpZ2F0ZVRvKDEwLCAzLCAoYXJncykgPT4geyBhcmdzLnRhcmdldC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7IH0pO1xuICAgICAqIGBgYFxuXHQgKiBAbWVtYmVyb2YgSWd4R3JpZEJhc2VDb21wb25lbnRcbiAgICAgKi9cbiAgICBwdWJsaWMgbmF2aWdhdGVUbyhyb3dJbmRleDogbnVtYmVyLCB2aXNpYmxlQ29sSW5kZXggPSAtMSwgY2I6IEZ1bmN0aW9uID0gbnVsbCkge1xuICAgICAgICBpZiAocm93SW5kZXggPCAwIHx8IHJvd0luZGV4ID4gdGhpcy52ZXJ0aWNhbFNjcm9sbENvbnRhaW5lci5pZ3hGb3JPZi5sZW5ndGggLSAxXG4gICAgICAgICAgICB8fCAodmlzaWJsZUNvbEluZGV4ICE9PSAtMSAmJiB0aGlzLmNvbHVtbkxpc3QubWFwKGNvbCA9PiBjb2wudmlzaWJsZUluZGV4KS5pbmRleE9mKHZpc2libGVDb2xJbmRleCkgPT09IC0xKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMud2hlZWxIYW5kbGVyKCk7XG4gICAgICAgIGlmICh0aGlzLnZlcnRpY2FsU2Nyb2xsQ29udGFpbmVyLmlneEZvck9mLnNsaWNlKHJvd0luZGV4LCByb3dJbmRleCArIDEpLmZpbmQocmVjID0+IHJlYy5leHByZXNzaW9uIHx8IHJlYy5jaGlsZEdyaWRzRGF0YSkpIHtcbiAgICAgICAgICAgIHZpc2libGVDb2xJbmRleCA9IC0xO1xuICAgICAgICB9XG4gICAgICAgIGlmICh2aXNpYmxlQ29sSW5kZXggPT09IC0xIHx8IHRoaXMubmF2aWdhdGlvbi5pc0NvbHVtbkZ1bGx5VmlzaWJsZSh2aXNpYmxlQ29sSW5kZXgpKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5uYXZpZ2F0aW9uLnNob3VsZFBlcmZvcm1WZXJ0aWNhbFNjcm9sbChyb3dJbmRleCwgdmlzaWJsZUNvbEluZGV4KSkge1xuICAgICAgICAgICAgICAgIHRoaXMubmF2aWdhdGlvbi5wZXJmb3JtVmVydGljYWxTY3JvbGxUb0NlbGwocm93SW5kZXgsIHZpc2libGVDb2xJbmRleCxcbiAgICAgICAgICAgICAgICAgICAgKCkgPT4geyB0aGlzLmV4ZWN1dGVDYWxsYmFjayhyb3dJbmRleCwgdmlzaWJsZUNvbEluZGV4LCBjYik7IH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmV4ZWN1dGVDYWxsYmFjayhyb3dJbmRleCwgdmlzaWJsZUNvbEluZGV4LCBjYik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm5hdmlnYXRpb24ucGVyZm9ybUhvcml6b250YWxTY3JvbGxUb0NlbGwocm93SW5kZXgsIHZpc2libGVDb2xJbmRleCwgZmFsc2UsXG4gICAgICAgICAgICAgICAgKCkgPT4geyB0aGlzLmV4ZWN1dGVDYWxsYmFjayhyb3dJbmRleCwgdmlzaWJsZUNvbEluZGV4LCBjYik7IH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBSZXR1cm5zIGBJQ2VsbFBvc2l0aW9uYCB3aGljaCBkZWZpbmVzIHRoZSBuZXh0IGNlbGwsXG4gICAgKiBhY2NvcmRpbmcgdG8gdGhlIGN1cnJlbnQgcG9zaXRpb24sIHRoYXQgbWF0Y2ggc3BlY2lmaWMgY3JpdGVyaWEuXG4gICAgKiBZb3UgY2FuIHBhc3MgY2FsbGJhY2sgZnVuY3Rpb24gYXMgYSB0aGlyZCBwYXJhbWV0ZXIgb2YgYGdldFByZXZpb3VzQ2VsbGAgbWV0aG9kLlxuICAgICogVGhlIGNhbGxiYWNrIGZ1bmN0aW9uIGFjY2VwdHMgSWd4Q29sdW1uQ29tcG9uZW50IGFzIGEgcGFyYW1cbiAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAqICBjb25zdCBuZXh0RWRpdGFibGVDZWxsUG9zaXRpb24gPSB0aGlzLmdyaWQuZ2V0TmV4dENlbGwoMCwgMywgKGNvbHVtbikgPT4gY29sdW1uLmVkaXRhYmxlKTtcbiAgICAqIGBgYFxuICAgICogQG1lbWJlcm9mIElneEdyaWRCYXNlQ29tcG9uZW50XG4gICAgKi9cbiAgICBwdWJsaWMgZ2V0TmV4dENlbGwoY3VyclJvd0luZGV4OiBudW1iZXIsIGN1clZpc2libGVDb2xJbmRleDogbnVtYmVyLFxuICAgICAgICBjYWxsYmFjazogKElneENvbHVtbkNvbXBvbmVudCkgPT4gYm9vbGVhbiA9IG51bGwpOiBJQ2VsbFBvc2l0aW9uIHtcbiAgICAgICAgY29uc3QgY29sdW1ucyA9IHRoaXMuY29sdW1uTGlzdC5maWx0ZXIoY29sID0+ICFjb2wuY29sdW1uR3JvdXAgJiYgY29sLnZpc2libGVJbmRleCA+PSAwKTtcblxuICAgICAgICBpZiAoIXRoaXMuaXNWYWxpZFBvc2l0aW9uKGN1cnJSb3dJbmRleCwgY3VyVmlzaWJsZUNvbEluZGV4KSkge1xuICAgICAgICAgICAgcmV0dXJuIHsgcm93SW5kZXg6IGN1cnJSb3dJbmRleCwgdmlzaWJsZUNvbHVtbkluZGV4OiBjdXJWaXNpYmxlQ29sSW5kZXggfTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjb2xJbmRleGVzID0gY2FsbGJhY2sgPyBjb2x1bW5zLmZpbHRlcigoY29sKSA9PiBjYWxsYmFjayhjb2wpKS5tYXAoZWRpdENvbCA9PiBlZGl0Q29sLnZpc2libGVJbmRleCkuc29ydCgoYSwgYikgPT4gYSAtIGIpIDpcbiAgICAgICAgICAgIGNvbHVtbnMubWFwKGVkaXRDb2wgPT4gZWRpdENvbC52aXNpYmxlSW5kZXgpLnNvcnQoKGEsIGIpID0+IGEgLSBiKTtcbiAgICAgICAgY29uc3QgbmV4dENlbGxJbmRleCA9IGNvbEluZGV4ZXMuZmluZChpbmRleCA9PiBpbmRleCA+IGN1clZpc2libGVDb2xJbmRleCk7XG4gICAgICAgIGlmICh0aGlzLnZlcnRpY2FsU2Nyb2xsQ29udGFpbmVyLmlneEZvck9mLnNsaWNlKGN1cnJSb3dJbmRleCwgY3VyclJvd0luZGV4ICsgMSlcbiAgICAgICAgICAgIC5maW5kKHJlYyA9PiAhcmVjLmV4cHJlc3Npb24gJiYgIXJlYy5zdW1tYXJpZXMgJiYgIXJlYy5jaGlsZEdyaWRzRGF0YSkgJiYgbmV4dENlbGxJbmRleCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4geyByb3dJbmRleDogY3VyclJvd0luZGV4LCB2aXNpYmxlQ29sdW1uSW5kZXg6IG5leHRDZWxsSW5kZXggfTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChjb2xJbmRleGVzLmxlbmd0aCA9PT0gMCB8fCB0aGlzLmdldE5leHREYXRhUm93SW5kZXgoY3VyclJvd0luZGV4KSA9PT0gY3VyclJvd0luZGV4KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgcm93SW5kZXg6IGN1cnJSb3dJbmRleCwgdmlzaWJsZUNvbHVtbkluZGV4OiBjdXJWaXNpYmxlQ29sSW5kZXggfTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgcm93SW5kZXg6IHRoaXMuZ2V0TmV4dERhdGFSb3dJbmRleChjdXJyUm93SW5kZXgpLCB2aXNpYmxlQ29sdW1uSW5kZXg6IGNvbEluZGV4ZXNbMF0gfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICogUmV0dXJucyBgSUNlbGxQb3NpdGlvbmAgd2hpY2ggZGVmaW5lcyB0aGUgcHJldmlvdXMgY2VsbCxcbiAgICAqIGFjY29yZGluZyB0byB0aGUgY3VycmVudCBwb3NpdGlvbiwgdGhhdCBtYXRjaCBzcGVjaWZpYyBjcml0ZXJpYS5cbiAgICAqIFlvdSBjYW4gcGFzcyBjYWxsYmFjayBmdW5jdGlvbiBhcyBhIHRoaXJkIHBhcmFtZXRlciBvZiBgZ2V0UHJldmlvdXNDZWxsYCBtZXRob2QuXG4gICAgKiBUaGUgY2FsbGJhY2sgZnVuY3Rpb24gYWNjZXB0cyBJZ3hDb2x1bW5Db21wb25lbnQgYXMgYSBwYXJhbVxuICAgICogYGBgdHlwZXNjcmlwdFxuICAgICogIGNvbnN0IHByZXZpb3VzRWRpdGFibGVDZWxsUG9zaXRpb24gPSB0aGlzLmdyaWQuZ2V0UHJldmlvdXNDZWxsKDAsIDMsIChjb2x1bW4pID0+IGNvbHVtbi5lZGl0YWJsZSk7XG4gICAgKiBgYGBcbiAgICAqIEBtZW1iZXJvZiBJZ3hHcmlkQmFzZUNvbXBvbmVudFxuICAgICovXG4gICAgcHVibGljIGdldFByZXZpb3VzQ2VsbChjdXJyUm93SW5kZXg6IG51bWJlciwgY3VyVmlzaWJsZUNvbEluZGV4OiBudW1iZXIsXG4gICAgICAgIGNhbGxiYWNrOiAoSWd4Q29sdW1uQ29tcG9uZW50KSA9PiBib29sZWFuID0gbnVsbCk6IElDZWxsUG9zaXRpb24ge1xuICAgICAgICBjb25zdCBjb2x1bW5zID0gdGhpcy5jb2x1bW5MaXN0LmZpbHRlcihjb2wgPT4gIWNvbC5jb2x1bW5Hcm91cCAmJiBjb2wudmlzaWJsZUluZGV4ID49IDApO1xuXG4gICAgICAgIGlmICghdGhpcy5pc1ZhbGlkUG9zaXRpb24oY3VyclJvd0luZGV4LCBjdXJWaXNpYmxlQ29sSW5kZXgpKSB7XG4gICAgICAgICAgICByZXR1cm4geyByb3dJbmRleDogY3VyclJvd0luZGV4LCB2aXNpYmxlQ29sdW1uSW5kZXg6IGN1clZpc2libGVDb2xJbmRleCB9O1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNvbEluZGV4ZXMgPSBjYWxsYmFjayA/IGNvbHVtbnMuZmlsdGVyKChjb2wpID0+IGNhbGxiYWNrKGNvbCkpLm1hcChlZGl0Q29sID0+IGVkaXRDb2wudmlzaWJsZUluZGV4KS5zb3J0KChhLCBiKSA9PiBiIC0gYSkgOlxuICAgICAgICAgICAgY29sdW1ucy5tYXAoZWRpdENvbCA9PiBlZGl0Q29sLnZpc2libGVJbmRleCkuc29ydCgoYSwgYikgPT4gYiAtIGEpO1xuICAgICAgICBjb25zdCBwcmV2Q2VsbEluZGV4ID0gY29sSW5kZXhlcy5maW5kKGluZGV4ID0+IGluZGV4IDwgY3VyVmlzaWJsZUNvbEluZGV4KTtcbiAgICAgICAgaWYgKHRoaXMudmVydGljYWxTY3JvbGxDb250YWluZXIuaWd4Rm9yT2Yuc2xpY2UoY3VyclJvd0luZGV4LCBjdXJyUm93SW5kZXggKyAxKVxuICAgICAgICAgICAgLmZpbmQocmVjID0+ICFyZWMuZXhwcmVzc2lvbiAmJiAhcmVjLnN1bW1hcmllcyAmJiAhcmVjLmNoaWxkR3JpZHNEYXRhKSAmJiBwcmV2Q2VsbEluZGV4ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB7IHJvd0luZGV4OiBjdXJyUm93SW5kZXgsIHZpc2libGVDb2x1bW5JbmRleDogcHJldkNlbGxJbmRleCB9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKGNvbEluZGV4ZXMubGVuZ3RoID09PSAwIHx8IHRoaXMuZ2V0UHJldkRhdGFSb3dJbmRleChjdXJyUm93SW5kZXgpID09PSBjdXJyUm93SW5kZXgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4geyByb3dJbmRleDogY3VyclJvd0luZGV4LCB2aXNpYmxlQ29sdW1uSW5kZXg6IGN1clZpc2libGVDb2xJbmRleCB9O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4geyByb3dJbmRleDogdGhpcy5nZXRQcmV2RGF0YVJvd0luZGV4KGN1cnJSb3dJbmRleCksIHZpc2libGVDb2x1bW5JbmRleDogY29sSW5kZXhlc1swXSB9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBleGVjdXRlQ2FsbGJhY2socm93SW5kZXgsIHZpc2libGVDb2xJbmRleCA9IC0xLCBjYjogRnVuY3Rpb24gPSBudWxsKSB7XG4gICAgICAgIGlmICghY2IpIHsgcmV0dXJuOyB9XG4gICAgICAgIGxldCB0YXJnZXRUeXBlLCB0YXJnZXQ7XG4gICAgICAgIGNvbnN0IHJvdyA9IHRoaXMuc3VtbWFyaWVzUm93TGlzdC5maWx0ZXIocyA9PiBzLmluZGV4ICE9PSAwKS5jb25jYXQodGhpcy5yb3dMaXN0LnRvQXJyYXkoKSkuZmluZChyID0+IHIuaW5kZXggPT09IHJvd0luZGV4KTtcbiAgICAgICAgaWYgKCFyb3cpIHsgcmV0dXJuOyB9XG4gICAgICAgIHN3aXRjaCAocm93Lm5hdGl2ZUVsZW1lbnQudGFnTmFtZS50b0xvd2VyQ2FzZSgpKSB7XG4gICAgICAgICAgICBjYXNlICdpZ3gtZ3JpZC1ncm91cGJ5LXJvdyc6XG4gICAgICAgICAgICAgICAgdGFyZ2V0VHlwZSA9IEdyaWRLZXlkb3duVGFyZ2V0VHlwZS5ncm91cFJvdztcbiAgICAgICAgICAgICAgICB0YXJnZXQgPSByb3c7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdpZ3gtZ3JpZC1zdW1tYXJ5LXJvdyc6XG4gICAgICAgICAgICAgICAgdGFyZ2V0VHlwZSA9IEdyaWRLZXlkb3duVGFyZ2V0VHlwZS5zdW1tYXJ5Q2VsbDtcbiAgICAgICAgICAgICAgICB0YXJnZXQgPSB2aXNpYmxlQ29sSW5kZXggIT09IC0xID9cbiAgICAgICAgICAgICAgICAgICAgcm93LnN1bW1hcnlDZWxscy5maW5kKGMgPT4gYy52aXNpYmxlQ29sdW1uSW5kZXggPT09IHZpc2libGVDb2xJbmRleCkgOiByb3cuc3VtbWFyeUNlbGxzLmZpcnN0O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnaWd4LWNoaWxkLWdyaWQtcm93JzpcbiAgICAgICAgICAgICAgICB0YXJnZXRUeXBlID0gR3JpZEtleWRvd25UYXJnZXRUeXBlLmhpZXJhcmNoaWNhbFJvdztcbiAgICAgICAgICAgICAgICB0YXJnZXQgPSByb3c7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHRhcmdldFR5cGUgPSBHcmlkS2V5ZG93blRhcmdldFR5cGUuZGF0YUNlbGw7XG4gICAgICAgICAgICAgICAgdGFyZ2V0ID0gdmlzaWJsZUNvbEluZGV4ICE9PSAtMSA/IHJvdy5jZWxscy5maW5kKGMgPT4gYy52aXNpYmxlQ29sdW1uSW5kZXggPT09IHZpc2libGVDb2xJbmRleCkgOiByb3cuY2VsbHMuZmlyc3Q7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYXJncyA9IHsgdGFyZ2V0VHlwZTogdGFyZ2V0VHlwZSwgdGFyZ2V0OiB0YXJnZXQgfTtcbiAgICAgICAgY2IoYXJncyk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRQcmV2RGF0YVJvd0luZGV4KGN1cnJlbnRSb3dJbmRleCk6IG51bWJlciB7XG4gICAgICAgIGlmIChjdXJyZW50Um93SW5kZXggPD0gMCkgeyByZXR1cm4gY3VycmVudFJvd0luZGV4OyB9XG5cbiAgICAgICAgY29uc3QgcHJldlJvdyA9IHRoaXMudmVydGljYWxTY3JvbGxDb250YWluZXIuaWd4Rm9yT2Yuc2xpY2UoMCwgY3VycmVudFJvd0luZGV4KS5yZXZlcnNlKClcbiAgICAgICAgICAgIC5maW5kKHJlYyA9PiAhcmVjLmV4cHJlc3Npb24gJiYgIXJlYy5zdW1tYXJpZXMgJiYgIXJlYy5jaGlsZEdyaWRzRGF0YSk7XG4gICAgICAgIHJldHVybiBwcmV2Um93ID8gdGhpcy52ZXJ0aWNhbFNjcm9sbENvbnRhaW5lci5pZ3hGb3JPZi5pbmRleE9mKHByZXZSb3cpIDogY3VycmVudFJvd0luZGV4O1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0TmV4dERhdGFSb3dJbmRleChjdXJyZW50Um93SW5kZXgpOiBudW1iZXIge1xuICAgICAgICBpZiAoY3VycmVudFJvd0luZGV4ID09PSB0aGlzLnZlcnRpY2FsU2Nyb2xsQ29udGFpbmVyLmlneEZvck9mLmxlbmd0aCkgeyByZXR1cm4gY3VycmVudFJvd0luZGV4OyB9XG5cbiAgICAgICAgY29uc3QgbmV4dFJvdyA9IHRoaXMudmVydGljYWxTY3JvbGxDb250YWluZXIuaWd4Rm9yT2Yuc2xpY2UoY3VycmVudFJvd0luZGV4ICsgMSwgdGhpcy52ZXJ0aWNhbFNjcm9sbENvbnRhaW5lci5pZ3hGb3JPZi5sZW5ndGgpXG4gICAgICAgICAgICAuZmluZChyZWMgPT4gIXJlYy5leHByZXNzaW9uICYmICFyZWMuc3VtbWFyaWVzICYmICFyZWMuY2hpbGRHcmlkc0RhdGEpO1xuICAgICAgICByZXR1cm4gbmV4dFJvdyA/IHRoaXMudmVydGljYWxTY3JvbGxDb250YWluZXIuaWd4Rm9yT2YuaW5kZXhPZihuZXh0Um93KSA6IGN1cnJlbnRSb3dJbmRleDtcbiAgICB9XG5cbiAgICBwcml2YXRlIGlzVmFsaWRQb3NpdGlvbihyb3dJbmRleCwgY29sSW5kZXgpOiBib29sZWFuIHtcbiAgICAgICAgY29uc3Qgcm93cyA9IHRoaXMuc3VtbWFyaWVzUm93TGlzdC5maWx0ZXIocyA9PiBzLmluZGV4ICE9PSAwKS5jb25jYXQodGhpcy5yb3dMaXN0LnRvQXJyYXkoKSkubGVuZ3RoO1xuICAgICAgICBjb25zdCBjb2xzID0gdGhpcy5jb2x1bW5MaXN0LmZpbHRlcihjb2wgPT4gIWNvbC5jb2x1bW5Hcm91cCAmJiBjb2wudmlzaWJsZUluZGV4ID49IDApLmxlbmd0aDtcbiAgICAgICAgaWYgKHJvd3MgPCAxIHx8IGNvbHMgPCAxKSB7IHJldHVybiBmYWxzZTsgfVxuICAgICAgICBpZiAocm93SW5kZXggPiAtMSAmJiByb3dJbmRleCA8IHRoaXMudmVydGljYWxTY3JvbGxDb250YWluZXIuaWd4Rm9yT2YubGVuZ3RoICYmXG4gICAgICAgICAgICBjb2xJbmRleCA+IC0gMSAmJiBjb2xJbmRleCA8PSB0aGlzLnVucGlubmVkQ29sdW1uc1t0aGlzLnVucGlubmVkQ29sdW1ucy5sZW5ndGggLSAxXS52aXNpYmxlSW5kZXgpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIHdoZWVsSGFuZGxlcihpc1Njcm9sbCA9IGZhbHNlKSB7XG4gICAgICAgIGlmIChkb2N1bWVudC5hY3RpdmVFbGVtZW50ICYmXG4gICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYml0d2lzZVxuICAgICAgICAgICAgKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuY29tcGFyZURvY3VtZW50UG9zaXRpb24odGhpcy50Ym9keS5uYXRpdmVFbGVtZW50KSAmIE5vZGUuRE9DVU1FTlRfUE9TSVRJT05fQ09OVEFJTlMgfHxcbiAgICAgICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYml0d2lzZVxuICAgICAgICAgICAgICAgIChkb2N1bWVudC5hY3RpdmVFbGVtZW50LmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKHRoaXMudGZvb3QubmF0aXZlRWxlbWVudCkgJiBOb2RlLkRPQ1VNRU5UX1BPU0lUSU9OX0NPTlRBSU5TICYmIGlzU2Nyb2xsKSkpIHtcbiAgICAgICAgICAgIChkb2N1bWVudC5hY3RpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50KS5ibHVyKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIHRyYWNrQ29sdW1uQ2hhbmdlcyhpbmRleCwgY29sKSB7XG4gICAgICAgIHJldHVybiBjb2wuZmllbGQgKyBjb2wuX2NhbGNXaWR0aDtcbiAgICB9XG5cbiAgICBwcml2YXRlIGZpbmQodGV4dDogc3RyaW5nLCBpbmNyZW1lbnQ6IG51bWJlciwgY2FzZVNlbnNpdGl2ZT86IGJvb2xlYW4sIGV4YWN0TWF0Y2g/OiBib29sZWFuLCBzY3JvbGw/OiBib29sZWFuKSB7XG4gICAgICAgIGlmICghdGhpcy5yb3dMaXN0KSB7XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZW5kRWRpdChmYWxzZSk7XG5cbiAgICAgICAgaWYgKCF0ZXh0KSB7XG4gICAgICAgICAgICB0aGlzLmNsZWFyU2VhcmNoKCk7XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNhc2VTZW5zaXRpdmVSZXNvbHZlZCA9IGNhc2VTZW5zaXRpdmUgPyB0cnVlIDogZmFsc2U7XG4gICAgICAgIGNvbnN0IGV4YWN0TWF0Y2hSZXNvbHZlZCA9IGV4YWN0TWF0Y2ggPyB0cnVlIDogZmFsc2U7XG4gICAgICAgIGxldCByZWJ1aWxkQ2FjaGUgPSBmYWxzZTtcblxuICAgICAgICBpZiAodGhpcy5sYXN0U2VhcmNoSW5mby5zZWFyY2hUZXh0ICE9PSB0ZXh0IHx8XG4gICAgICAgICAgICB0aGlzLmxhc3RTZWFyY2hJbmZvLmNhc2VTZW5zaXRpdmUgIT09IGNhc2VTZW5zaXRpdmVSZXNvbHZlZCB8fFxuICAgICAgICAgICAgdGhpcy5sYXN0U2VhcmNoSW5mby5leGFjdE1hdGNoICE9PSBleGFjdE1hdGNoUmVzb2x2ZWQpIHtcbiAgICAgICAgICAgIHRoaXMubGFzdFNlYXJjaEluZm8gPSB7XG4gICAgICAgICAgICAgICAgc2VhcmNoVGV4dDogdGV4dCxcbiAgICAgICAgICAgICAgICBhY3RpdmVNYXRjaEluZGV4OiAwLFxuICAgICAgICAgICAgICAgIGNhc2VTZW5zaXRpdmU6IGNhc2VTZW5zaXRpdmVSZXNvbHZlZCxcbiAgICAgICAgICAgICAgICBleGFjdE1hdGNoOiBleGFjdE1hdGNoUmVzb2x2ZWQsXG4gICAgICAgICAgICAgICAgbWF0Y2hJbmZvQ2FjaGU6IFtdXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICByZWJ1aWxkQ2FjaGUgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5sYXN0U2VhcmNoSW5mby5hY3RpdmVNYXRjaEluZGV4ICs9IGluY3JlbWVudDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChyZWJ1aWxkQ2FjaGUpIHtcbiAgICAgICAgICAgIHRoaXMucm93TGlzdC5mb3JFYWNoKChyb3cpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocm93LmNlbGxzKSB7XG4gICAgICAgICAgICAgICAgICAgIHJvdy5jZWxscy5mb3JFYWNoKChjKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjLmhpZ2hsaWdodFRleHQodGV4dCwgY2FzZVNlbnNpdGl2ZVJlc29sdmVkLCBleGFjdE1hdGNoUmVzb2x2ZWQpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgdGhpcy5yZWJ1aWxkTWF0Y2hDYWNoZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMubGFzdFNlYXJjaEluZm8uYWN0aXZlTWF0Y2hJbmRleCA+PSB0aGlzLmxhc3RTZWFyY2hJbmZvLm1hdGNoSW5mb0NhY2hlLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5sYXN0U2VhcmNoSW5mby5hY3RpdmVNYXRjaEluZGV4ID0gMDtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmxhc3RTZWFyY2hJbmZvLmFjdGl2ZU1hdGNoSW5kZXggPCAwKSB7XG4gICAgICAgICAgICB0aGlzLmxhc3RTZWFyY2hJbmZvLmFjdGl2ZU1hdGNoSW5kZXggPSB0aGlzLmxhc3RTZWFyY2hJbmZvLm1hdGNoSW5mb0NhY2hlLmxlbmd0aCAtIDE7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5sYXN0U2VhcmNoSW5mby5tYXRjaEluZm9DYWNoZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNvbnN0IG1hdGNoSW5mbyA9IHRoaXMubGFzdFNlYXJjaEluZm8ubWF0Y2hJbmZvQ2FjaGVbdGhpcy5sYXN0U2VhcmNoSW5mby5hY3RpdmVNYXRjaEluZGV4XTtcbiAgICAgICAgICAgIHRoaXMubGFzdFNlYXJjaEluZm8gPSB7IC4uLnRoaXMubGFzdFNlYXJjaEluZm8gfTtcblxuICAgICAgICAgICAgaWYgKHNjcm9sbCAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbFRvKG1hdGNoSW5mby5yb3csIG1hdGNoSW5mby5jb2x1bW4pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBJZ3hUZXh0SGlnaGxpZ2h0RGlyZWN0aXZlLnNldEFjdGl2ZUhpZ2hsaWdodCh0aGlzLmlkLCB7XG4gICAgICAgICAgICAgICAgY29sdW1uOiBtYXRjaEluZm8uY29sdW1uLFxuICAgICAgICAgICAgICAgIHJvdzogbWF0Y2hJbmZvLnJvdyxcbiAgICAgICAgICAgICAgICBpbmRleDogbWF0Y2hJbmZvLmluZGV4LFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIElneFRleHRIaWdobGlnaHREaXJlY3RpdmUuY2xlYXJBY3RpdmVIaWdobGlnaHQodGhpcy5pZCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5sYXN0U2VhcmNoSW5mby5tYXRjaEluZm9DYWNoZS5sZW5ndGg7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbiBhcnJheSBjb250YWluaW5nIHRoZSBmaWx0ZXJlZCBzb3J0ZWQgZGF0YS5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogY29uc3QgZmlsdGVyZWRTb3J0ZWREYXRhID0gdGhpcy5ncmlkMS5maWx0ZXJlZFNvcnRlZERhdGE7XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneEdyaWRCYXNlQ29tcG9uZW50XG4gICAgICovXG4gICAgZ2V0IGZpbHRlcmVkU29ydGVkRGF0YSgpOiBhbnlbXSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9maWx0ZXJlZFNvcnRlZERhdGE7XG4gICAgfVxuICAgIHNldCBmaWx0ZXJlZFNvcnRlZERhdGEodmFsdWU6IGFueVtdKSB7XG4gICAgICAgIHRoaXMuX2ZpbHRlcmVkU29ydGVkRGF0YSA9IHZhbHVlO1xuICAgICAgICB0aGlzLnJlZnJlc2hTZWFyY2godHJ1ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHByb3RlY3RlZCBpbml0UGlubmluZygpIHtcbiAgICAgICAgbGV0IGN1cnJlbnRQaW5uZWRXaWR0aCA9IDA7XG4gICAgICAgIGNvbnN0IHBpbm5lZENvbHVtbnMgPSBbXTtcbiAgICAgICAgY29uc3QgdW5waW5uZWRDb2x1bW5zID0gW107XG4gICAgICAgIGNvbnN0IG5ld1VucGlubmVkQ29scyA9IFtdO1xuXG4gICAgICAgIHRoaXMuY2FsY3VsYXRlR3JpZFdpZHRoKCk7XG4gICAgICAgIHRoaXMucmVzZXRDYWNoZXMoKTtcbiAgICAgICAgLy8gV2hlbiBhIGNvbHVtbiBpcyBhIGdyb3VwIG9yIGlzIGluc2lkZSBhIGdyb3VwLCBwaW4gYWxsIHJlbGF0ZWQuXG4gICAgICAgIHRoaXMuX3Bpbm5lZENvbHVtbnMuZm9yRWFjaChjb2wgPT4ge1xuICAgICAgICAgICAgaWYgKGNvbC5wYXJlbnQpIHtcbiAgICAgICAgICAgICAgICBjb2wucGFyZW50LnBpbm5lZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY29sLmNvbHVtbkdyb3VwKSB7XG4gICAgICAgICAgICAgICAgY29sLmNoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4gY2hpbGQucGlubmVkID0gdHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIE1ha2Ugc3VyZSB3ZSBkb24ndCBleGNlZWQgdW5waW5uZWQgYXJlYSBtaW4gd2lkdGggYW5kIGdldCBwaW5uZWQgYW5kIHVucGlubmVkIGNvbCBjb2xsZWN0aW9ucy5cbiAgICAgICAgLy8gV2UgdGFrZSBpbnRvIGFjY291bnQgdG9wIGxldmVsIGNvbHVtbnMgKHRvcCBsZXZlbCBncm91cHMgYW5kIG5vbiBncm91cHMpLlxuICAgICAgICAvLyBJZiB0b3AgbGV2ZWwgaXMgdW5waW5uZWQgdGhlIHBpbm5pbmcgaGFuZGxlcyBhbGwgY2hpbGRyZW4gdG8gYmUgdW5waW5uZWQgYXMgd2VsbC5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9jb2x1bW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fY29sdW1uc1tpXS5waW5uZWQgJiYgIXRoaXMuX2NvbHVtbnNbaV0ucGFyZW50KSB7XG4gICAgICAgICAgICAgICAgLy8gUGlubmVkIGNvbHVtbi4gQ2hlY2sgaWYgd2l0aCBpdCB0aGUgdW5waW5uZWQgbWluIHdpZHRoIGlzIGV4Y2VlZGVkLlxuICAgICAgICAgICAgICAgIGNvbnN0IGNvbFdpZHRoID0gcGFyc2VJbnQodGhpcy5fY29sdW1uc1tpXS53aWR0aCwgMTApO1xuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50UGlubmVkV2lkdGggKyBjb2xXaWR0aCA+IHRoaXMuY2FsY1dpZHRoIC0gdGhpcy51bnBpbm5lZEFyZWFNaW5XaWR0aCkge1xuICAgICAgICAgICAgICAgICAgICAvLyB1bnBpbm5lZCBtaW4gd2lkdGggaXMgZXhjZWVkZWQuIFVucGluIHRoZSBjb2x1bW5zIGFuZCBhZGQgaXQgdG8gdGhlIHVucGlubmVkIGNvbGxlY3Rpb24uXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2NvbHVtbnNbaV0ucGlubmVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHVucGlubmVkQ29sdW1ucy5wdXNoKHRoaXMuX2NvbHVtbnNbaV0pO1xuICAgICAgICAgICAgICAgICAgICBuZXdVbnBpbm5lZENvbHMucHVzaCh0aGlzLl9jb2x1bW5zW2ldKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyB1bnBpbm5lZCBtaW4gd2lkdGggaXMgbm90IGV4Y2VlZGVkLiBLZWVwIGl0IHBpbm5lZCBhbmQgYWRkIGl0IHRvIHRoZSBwaW5uZWQgY29sbGVjdGlvbi5cbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFBpbm5lZFdpZHRoICs9IGNvbFdpZHRoO1xuICAgICAgICAgICAgICAgICAgICBwaW5uZWRDb2x1bW5zLnB1c2godGhpcy5fY29sdW1uc1tpXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9jb2x1bW5zW2ldLnBpbm5lZCAmJiB0aGlzLl9jb2x1bW5zW2ldLnBhcmVudCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9jb2x1bW5zW2ldLnRvcExldmVsUGFyZW50LnBpbm5lZCkge1xuICAgICAgICAgICAgICAgICAgICBwaW5uZWRDb2x1bW5zLnB1c2godGhpcy5fY29sdW1uc1tpXSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fY29sdW1uc1tpXS5waW5uZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgdW5waW5uZWRDb2x1bW5zLnB1c2godGhpcy5fY29sdW1uc1tpXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB1bnBpbm5lZENvbHVtbnMucHVzaCh0aGlzLl9jb2x1bW5zW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChuZXdVbnBpbm5lZENvbHMubGVuZ3RoKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgICAgJ2lneEdyaWQgLSBUaGUgcGlubmVkIGFyZWEgZXhjZWVkcyBtYXhpbXVtIHBpbm5lZCB3aWR0aC4gJyArXG4gICAgICAgICAgICAgICAgJ1RoZSBmb2xsb3dpbmcgY29sdW1ucyB3ZXJlIHVucGlubmVkIHRvIHByZXZlbnQgZnVydGhlciBpc3N1ZXM6JyArXG4gICAgICAgICAgICAgICAgbmV3VW5waW5uZWRDb2xzLm1hcChjb2wgPT4gJ1wiJyArIGNvbC5oZWFkZXIgKyAnXCInKS50b1N0cmluZygpICsgJy4gRm9yIG1vcmUgaW5mbyBzZWUgb3VyIGRvY3VtZW50YXRpb24uJ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEFzc2lnbiB0aGUgYXBwbGljYXBsZSBjb2xsZWN0aW9ucy5cbiAgICAgICAgdGhpcy5fcGlubmVkQ29sdW1ucyA9IHBpbm5lZENvbHVtbnM7XG4gICAgICAgIHRoaXMuX3VucGlubmVkQ29sdW1ucyA9IHVucGlubmVkQ29sdW1ucztcbiAgICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHByb3RlY3RlZCBzY3JvbGxUbyhyb3c6IGFueSB8IG51bWJlciwgY29sdW1uOiBhbnkgfCBudW1iZXIsIGluQ29sbGVjdGlvbiA9IHRoaXMuZmlsdGVyZWRTb3J0ZWREYXRhKTogdm9pZCB7XG4gICAgICAgIGxldCBkZWxheVNjcm9sbGluZyA9IGZhbHNlO1xuXG4gICAgICAgIGlmICh0aGlzLnBhZ2luZyAmJiB0eXBlb2YgKHJvdykgIT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICBjb25zdCByb3dJbmRleCA9IGluQ29sbGVjdGlvbi5pbmRleE9mKHJvdyk7XG4gICAgICAgICAgICBjb25zdCBwYWdlID0gTWF0aC5mbG9vcihyb3dJbmRleCAvIHRoaXMucGVyUGFnZSk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnBhZ2UgIT09IHBhZ2UpIHtcbiAgICAgICAgICAgICAgICBkZWxheVNjcm9sbGluZyA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5wYWdlID0gcGFnZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChkZWxheVNjcm9sbGluZykge1xuICAgICAgICAgICAgdGhpcy52ZXJ0aWNhbFNjcm9sbENvbnRhaW5lci5vbkRhdGFDaGFuZ2VkLnBpcGUoZmlyc3QoKSkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbERpcmVjdGl2ZSh0aGlzLnZlcnRpY2FsU2Nyb2xsQ29udGFpbmVyLFxuICAgICAgICAgICAgICAgICAgICB0eXBlb2YgKHJvdykgPT09ICdudW1iZXInID8gcm93IDogdGhpcy52ZXJ0aWNhbFNjcm9sbENvbnRhaW5lci5pZ3hGb3JPZi5pbmRleE9mKHJvdykpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNjcm9sbERpcmVjdGl2ZSh0aGlzLnZlcnRpY2FsU2Nyb2xsQ29udGFpbmVyLFxuICAgICAgICAgICAgICAgIHR5cGVvZiAocm93KSA9PT0gJ251bWJlcicgPyByb3cgOiB0aGlzLnZlcnRpY2FsU2Nyb2xsQ29udGFpbmVyLmlneEZvck9mLmluZGV4T2Yocm93KSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNjcm9sbFRvSG9yaXpvbnRhbGx5KGNvbHVtbik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHByb3RlY3RlZCBzY3JvbGxUb0hvcml6b250YWxseShjb2x1bW46IGFueSB8IG51bWJlcikge1xuICAgICAgICBsZXQgY29sdW1uSW5kZXggPSB0eXBlb2YgY29sdW1uID09PSAnbnVtYmVyJyA/IGNvbHVtbiA6IHRoaXMuZ2V0Q29sdW1uQnlOYW1lKGNvbHVtbikudmlzaWJsZUluZGV4O1xuICAgICAgICBjb25zdCBzY3JvbGxSb3cgPSB0aGlzLnJvd0xpc3QuZmluZChyID0+IHIudmlydERpclJvdyk7XG4gICAgICAgIGNvbnN0IHZpcnREaXIgPSBzY3JvbGxSb3cgPyBzY3JvbGxSb3cudmlydERpclJvdyA6IG51bGw7XG4gICAgICAgIGlmICh0aGlzLnBpbm5lZENvbHVtbnMubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoY29sdW1uSW5kZXggPj0gdGhpcy5waW5uZWRDb2x1bW5zLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGNvbHVtbkluZGV4IC09IHRoaXMucGlubmVkQ29sdW1ucy5sZW5ndGg7XG4gICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxEaXJlY3RpdmUodmlydERpciwgY29sdW1uSW5kZXgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zY3JvbGxEaXJlY3RpdmUodmlydERpciwgY29sdW1uSW5kZXgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHByb3RlY3RlZCBzY3JvbGxEaXJlY3RpdmUoZGlyZWN0aXZlOiBJZ3hHcmlkRm9yT2ZEaXJlY3RpdmU8YW55PiwgZ29hbDogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGlmICghZGlyZWN0aXZlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gZGlyZWN0aXZlLm9uQ2h1bmtMb2FkLnBpcGUoZmlyc3QoKSlcbiAgICAgICAgLy8gICAgIC5zdWJzY3JpYmUoKCkgPT4gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKSkpO1xuICAgICAgICBkaXJlY3RpdmUuc2Nyb2xsVG8oZ29hbCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSByZWJ1aWxkTWF0Y2hDYWNoZSgpIHtcbiAgICAgICAgdGhpcy5sYXN0U2VhcmNoSW5mby5tYXRjaEluZm9DYWNoZSA9IFtdO1xuXG4gICAgICAgIGNvbnN0IGNhc2VTZW5zaXRpdmUgPSB0aGlzLmxhc3RTZWFyY2hJbmZvLmNhc2VTZW5zaXRpdmU7XG4gICAgICAgIGNvbnN0IGV4YWN0TWF0Y2ggPSB0aGlzLmxhc3RTZWFyY2hJbmZvLmV4YWN0TWF0Y2g7XG4gICAgICAgIGNvbnN0IHNlYXJjaFRleHQgPSBjYXNlU2Vuc2l0aXZlID8gdGhpcy5sYXN0U2VhcmNoSW5mby5zZWFyY2hUZXh0IDogdGhpcy5sYXN0U2VhcmNoSW5mby5zZWFyY2hUZXh0LnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLmZpbHRlcmVkU29ydGVkRGF0YTtcbiAgICAgICAgY29uc3QgY29sdW1uSXRlbXMgPSB0aGlzLnZpc2libGVDb2x1bW5zLmZpbHRlcigoYykgPT4gIWMuY29sdW1uR3JvdXApLnNvcnQoKGMxLCBjMikgPT4gYzEudmlzaWJsZUluZGV4IC0gYzIudmlzaWJsZUluZGV4KTtcblxuICAgICAgICBjb25zdCBudW1iZXJQaXBlID0gbmV3IElneERlY2ltYWxQaXBlQ29tcG9uZW50KHRoaXMubG9jYWxlKTtcbiAgICAgICAgY29uc3QgZGF0ZVBpcGUgPSBuZXcgSWd4RGF0ZVBpcGVDb21wb25lbnQodGhpcy5sb2NhbGUpO1xuICAgICAgICBkYXRhLmZvckVhY2goKGRhdGFSb3cpID0+IHtcbiAgICAgICAgICAgIGNvbHVtbkl0ZW1zLmZvckVhY2goKGMpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGMuZm9ybWF0dGVyID8gYy5mb3JtYXR0ZXIoZGF0YVJvd1tjLmZpZWxkXSkgOlxuICAgICAgICAgICAgICAgICAgICBjLmRhdGFUeXBlID09PSAnbnVtYmVyJyA/IG51bWJlclBpcGUudHJhbnNmb3JtKGRhdGFSb3dbYy5maWVsZF0sIHRoaXMubG9jYWxlKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICBjLmRhdGFUeXBlID09PSAnZGF0ZScgPyBkYXRlUGlwZS50cmFuc2Zvcm0oZGF0YVJvd1tjLmZpZWxkXSwgdGhpcy5sb2NhbGUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBkYXRhUm93W2MuZmllbGRdO1xuICAgICAgICAgICAgICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsICYmIGMuc2VhcmNoYWJsZSkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgc2VhcmNoVmFsdWUgPSBjYXNlU2Vuc2l0aXZlID8gU3RyaW5nKHZhbHVlKSA6IFN0cmluZyh2YWx1ZSkudG9Mb3dlckNhc2UoKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoZXhhY3RNYXRjaCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNlYXJjaFZhbHVlID09PSBzZWFyY2hUZXh0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0U2VhcmNoSW5mby5tYXRjaEluZm9DYWNoZS5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93OiBkYXRhUm93LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW46IGMuZmllbGQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4OiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG9jY3VyZW5jZUluZGV4ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzZWFyY2hJbmRleCA9IHNlYXJjaFZhbHVlLmluZGV4T2Yoc2VhcmNoVGV4dCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHdoaWxlIChzZWFyY2hJbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RTZWFyY2hJbmZvLm1hdGNoSW5mb0NhY2hlLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3c6IGRhdGFSb3csXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbHVtbjogYy5maWVsZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXg6IG9jY3VyZW5jZUluZGV4KyssXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWFyY2hWYWx1ZSA9IHNlYXJjaFZhbHVlLnN1YnN0cmluZyhzZWFyY2hJbmRleCArIHNlYXJjaFRleHQubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWFyY2hJbmRleCA9IHNlYXJjaFZhbHVlLmluZGV4T2Yoc2VhcmNoVGV4dCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyBpc0V4cGFuZGVkR3JvdXAoX2dyb3VwOiBJR3JvdXBCeVJlY29yZCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBjaGFuZ2VSb3dFZGl0aW5nT3ZlcmxheVN0YXRlT25TY3JvbGwocm93OiBJZ3hSb3dDb21wb25lbnQ8SWd4R3JpZEJhc2VDb21wb25lbnQgJiBJR3JpZERhdGFCaW5kYWJsZT4pIHtcbiAgICAgICAgaWYgKCF0aGlzLnJvd0VkaXRhYmxlIHx8ICF0aGlzLnJvd0VkaXRpbmdPdmVybGF5IHx8IHRoaXMucm93RWRpdGluZ092ZXJsYXkuY29sbGFwc2VkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFyb3cpIHtcbiAgICAgICAgICAgIHRoaXMudG9nZ2xlUm93RWRpdGluZ092ZXJsYXkoZmFsc2UpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5yZXBvc2l0aW9uUm93RWRpdGluZ092ZXJsYXkocm93KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9wZW5Sb3dPdmVybGF5KGlkKSB7XG4gICAgICAgIHRoaXMuY29uZmlndXJlUm93RWRpdGluZ092ZXJsYXkoaWQsIHRoaXMucm93TGlzdC5sZW5ndGggPD0gTUlOX1JPV19FRElUSU5HX0NPVU5UX1RIUkVTSE9MRCk7XG5cbiAgICAgICAgdGhpcy5yb3dFZGl0aW5nT3ZlcmxheS5vcGVuKHRoaXMucm93RWRpdFNldHRpbmdzKTtcbiAgICAgICAgdGhpcy5yb3dFZGl0UG9zaXRpb25pbmdTdHJhdGVneS5pc1RvcEluaXRpYWxQb3NpdGlvbiA9IHRoaXMucm93RWRpdFBvc2l0aW9uaW5nU3RyYXRlZ3kuaXNUb3A7XG4gICAgICAgIHRoaXMuX3doZWVsTGlzdGVuZXIgPSB0aGlzLnJvd0VkaXRpbmdXaGVlbEhhbmRsZXIuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5yb3dFZGl0aW5nT3ZlcmxheS5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3doZWVsJywgdGhpcy5fd2hlZWxMaXN0ZW5lcik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyBjbG9zZVJvd0VkaXRpbmdPdmVybGF5KCkge1xuICAgICAgICB0aGlzLnJvd0VkaXRpbmdPdmVybGF5LmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignd2hlZWwnLCB0aGlzLl93aGVlbExpc3RlbmVyKTtcbiAgICAgICAgdGhpcy5yb3dFZGl0UG9zaXRpb25pbmdTdHJhdGVneS5pc1RvcEluaXRpYWxQb3NpdGlvbiA9IG51bGw7XG4gICAgICAgIHRoaXMucm93RWRpdGluZ092ZXJsYXkuY2xvc2UoKTtcbiAgICAgICAgdGhpcy5yb3dFZGl0aW5nT3ZlcmxheS5lbGVtZW50LnBhcmVudEVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICcnO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgdG9nZ2xlUm93RWRpdGluZ092ZXJsYXkoc2hvdykge1xuICAgICAgICBjb25zdCByb3dTdHlsZSA9IHRoaXMucm93RWRpdGluZ092ZXJsYXkuZWxlbWVudC5zdHlsZTtcbiAgICAgICAgaWYgKHNob3cpIHtcbiAgICAgICAgICAgIHJvd1N0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcm93U3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVwb3NpdGlvblJvd0VkaXRpbmdPdmVybGF5KHJvdzogSWd4Um93Q29tcG9uZW50PElneEdyaWRCYXNlQ29tcG9uZW50ICYgSUdyaWREYXRhQmluZGFibGU+KSB7XG4gICAgICAgIGlmICghdGhpcy5yb3dFZGl0aW5nT3ZlcmxheS5jb2xsYXBzZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IHJvd1N0eWxlID0gdGhpcy5yb3dFZGl0aW5nT3ZlcmxheS5lbGVtZW50LnBhcmVudEVsZW1lbnQuc3R5bGU7XG4gICAgICAgICAgICBpZiAocm93KSB7XG4gICAgICAgICAgICAgICAgcm93U3R5bGUuZGlzcGxheSA9ICcnO1xuICAgICAgICAgICAgICAgIHRoaXMuY29uZmlndXJlUm93RWRpdGluZ092ZXJsYXkocm93LnJvd0lEKTtcbiAgICAgICAgICAgICAgICB0aGlzLnJvd0VkaXRpbmdPdmVybGF5LnJlcG9zaXRpb24oKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcm93U3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgY29uZmlndXJlUm93RWRpdGluZ092ZXJsYXkocm93SUQ6IGFueSwgdXNlT3V0ZXIgPSBmYWxzZSkge1xuICAgICAgICB0aGlzLnJvd0VkaXRTZXR0aW5ncy5vdXRsZXQgPSB1c2VPdXRlciA/IHRoaXMucGFyZW50Um93T3V0bGV0RGlyZWN0aXZlIDogdGhpcy5yb3dPdXRsZXREaXJlY3RpdmU7XG4gICAgICAgIHRoaXMucm93RWRpdFBvc2l0aW9uaW5nU3RyYXRlZ3kuc2V0dGluZ3MuY29udGFpbmVyID0gdGhpcy50Ym9keS5uYXRpdmVFbGVtZW50O1xuICAgICAgICBjb25zdCB0YXJnZXRSb3cgPSB0aGlzLmdyaWRBUEkuZ2V0X3Jvd19ieV9rZXkocm93SUQpO1xuICAgICAgICBpZiAoIXRhcmdldFJvdykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucm93RWRpdFBvc2l0aW9uaW5nU3RyYXRlZ3kuc2V0dGluZ3MudGFyZ2V0ID0gdGFyZ2V0Um93LmVsZW1lbnQubmF0aXZlRWxlbWVudDtcbiAgICAgICAgdGhpcy50b2dnbGVSb3dFZGl0aW5nT3ZlcmxheSh0cnVlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIGdldCByb3dDaGFuZ2VzQ291bnQoKSB7XG4gICAgICAgIGlmICghdGhpcy5jcnVkU2VydmljZS5yb3cpIHtcbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJvd0NoYW5nZXMgPSB0aGlzLnRyYW5zYWN0aW9ucy5nZXRBZ2dyZWdhdGVkVmFsdWUodGhpcy5jcnVkU2VydmljZS5yb3cuaWQsIGZhbHNlKTtcbiAgICAgICAgcmV0dXJuIHJvd0NoYW5nZXMgPyBPYmplY3Qua2V5cyhyb3dDaGFuZ2VzKS5sZW5ndGggOiAwO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCB3cml0ZVRvRGF0YShyb3dJbmRleDogbnVtYmVyLCB2YWx1ZTogYW55KSB7XG4gICAgICAgIG1lcmdlT2JqZWN0cyh0aGlzLmdyaWRBUEkuZ2V0X2FsbF9kYXRhKClbcm93SW5kZXhdLCB2YWx1ZSk7XG4gICAgfVxuXG4gICAgZW5kUm93VHJhbnNhY3Rpb24oY29tbWl0OiBib29sZWFuLCByb3c6IElneFJvdykge1xuICAgICAgICByb3cubmV3RGF0YSA9IHRoaXMudHJhbnNhY3Rpb25zLmdldEFnZ3JlZ2F0ZWRWYWx1ZShyb3cuaWQsIHRydWUpO1xuXG4gICAgICAgIGxldCBhcmdzID0gcm93LmNyZWF0ZUVkaXRFdmVudEFyZ3MoKTtcblxuICAgICAgICBpZiAoIWNvbW1pdCkge1xuICAgICAgICAgICAgdGhpcy5vblJvd0VkaXRDYW5jZWwuZW1pdChhcmdzKTtcbiAgICAgICAgICAgIHRoaXMudHJhbnNhY3Rpb25zLmVuZFBlbmRpbmcoZmFsc2UpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYXJncyA9IHRoaXMuZ3JpZEFQSS51cGRhdGVfcm93KHJvdywgcm93Lm5ld0RhdGEpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChhcmdzLmNhbmNlbCkge1xuICAgICAgICAgICAgdGhpcy50cmFuc2FjdGlvbnMuc3RhcnRQZW5kaW5nKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jcnVkU2VydmljZS5lbmRSb3dFZGl0KCk7XG4gICAgICAgIHRoaXMuY2xvc2VSb3dFZGl0aW5nT3ZlcmxheSgpO1xuICAgIH1cblxuICAgIC8vIFRPRE86IFJlZmFjdG9yXG4gICAgLyoqXG4gICAgICogRmluaXNoZXMgdGhlIHJvdyB0cmFuc2FjdGlvbnMgb24gdGhlIGN1cnJlbnQgcm93LlxuICAgICAqIElmIGBjb21taXQgPT09IHRydWVgLCBwYXNzZXMgdGhlbSBmcm9tIHRoZSBwZW5kaW5nIHN0YXRlIHRvIHRoZSBkYXRhIChvciB0cmFuc2FjdGlvbiBzZXJ2aWNlKVxuICAgICAqXG4gICAgICogQmluZGluZyB0byB0aGUgZXZlbnRcbiAgICAgKiBgYGBodG1sXG4gICAgICogPGJ1dHRvbiBpZ3hCdXR0b24gKGNsaWNrKT1cImdyaWQuZW5kRWRpdCh0cnVlKVwiPkNvbW1pdCBSb3c8L2J1dHRvbj5cbiAgICAgKiBgYGBcbiAgICAgKiBAcGFyYW0gY29tbWl0XG4gICAgICovXG4gICAgcHVibGljIGVuZEVkaXQoY29tbWl0ID0gdHJ1ZSwgZXZlbnQ/OiBFdmVudCkge1xuICAgICAgICBjb25zdCByb3cgPSB0aGlzLmNydWRTZXJ2aWNlLnJvdztcbiAgICAgICAgY29uc3QgY2VsbCA9IHRoaXMuY3J1ZFNlcnZpY2UuY2VsbDtcblxuICAgICAgICAvLyBUT0RPOiBNZXJnZSB0aGUgY3J1ZFNlcnZpY2Ugd2l0aCB3aHQgQmFzZUFQSSBzZXJ2aWNlXG4gICAgICAgIGlmICghcm93ICYmICFjZWxsKSB7IHJldHVybjsgfVxuXG4gICAgICAgIGNvbW1pdCA/IHRoaXMuZ3JpZEFQSS5zdWJtaXRfdmFsdWUoKSA6IHRoaXMuZ3JpZEFQSS5lc2NhcGVfZWRpdE1vZGUoKTtcblxuICAgICAgICBpZiAoIXRoaXMucm93RWRpdGFibGUgfHwgdGhpcy5yb3dFZGl0aW5nT3ZlcmxheSAmJiB0aGlzLnJvd0VkaXRpbmdPdmVybGF5LmNvbGxhcHNlZCB8fCAhcm93KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmVuZFJvd1RyYW5zYWN0aW9uKGNvbW1pdCwgcm93KTtcblxuICAgICAgICBjb25zdCBhY3RpdmVDZWxsID0gdGhpcy5zZWxlY3Rpb25TZXJ2aWNlLmFjdGl2ZUVsZW1lbnQ7XG4gICAgICAgIGlmIChldmVudCAmJiBhY3RpdmVDZWxsKSB7XG4gICAgICAgICAgICBjb25zdCByb3dJbmRleCA9IGFjdGl2ZUNlbGwucm93O1xuICAgICAgICAgICAgY29uc3QgdmlzaWJsZUNvbEluZGV4ID0gYWN0aXZlQ2VsbC5sYXlvdXQgPyBhY3RpdmVDZWxsLmxheW91dC5jb2x1bW5WaXNpYmxlSW5kZXggOiBhY3RpdmVDZWxsLmNvbHVtbjtcbiAgICAgICAgICAgIHRoaXMubmF2aWdhdGVUbyhyb3dJbmRleCwgdmlzaWJsZUNvbEluZGV4LCAoYykgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChjLnRhcmdldFR5cGUgPT09IEdyaWRLZXlkb3duVGFyZ2V0VHlwZS5kYXRhQ2VsbCAmJiBjLnRhcmdldCkge1xuICAgICAgICAgICAgICAgICAgICBjLnRhcmdldC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHByaXZhdGUgcm93RWRpdGluZ1doZWVsSGFuZGxlcihldmVudDogV2hlZWxFdmVudCkge1xuICAgICAgICBpZiAoZXZlbnQuZGVsdGFZID4gMCkge1xuICAgICAgICAgICAgdGhpcy52ZXJ0aWNhbFNjcm9sbENvbnRhaW5lci5zY3JvbGxOZXh0KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnZlcnRpY2FsU2Nyb2xsQ29udGFpbmVyLnNjcm9sbFByZXYoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0IGRhdGFXaXRoQWRkZWRJblRyYW5zYWN0aW9uUm93cygpIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gPGFueT5jbG9uZUFycmF5KHRoaXMuZ3JpZEFQSS5nZXRfYWxsX2RhdGEoKSk7XG4gICAgICAgIGlmICh0aGlzLnRyYW5zYWN0aW9ucy5lbmFibGVkKSB7XG4gICAgICAgICAgICByZXN1bHQucHVzaCguLi50aGlzLnRyYW5zYWN0aW9ucy5nZXRBZ2dyZWdhdGVkQ2hhbmdlcyh0cnVlKVxuICAgICAgICAgICAgICAgIC5maWx0ZXIodCA9PiB0LnR5cGUgPT09IFRyYW5zYWN0aW9uVHlwZS5BREQpXG4gICAgICAgICAgICAgICAgLm1hcCh0ID0+IHQubmV3VmFsdWUpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBkYXRhTGVuZ3RoKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50cmFuc2FjdGlvbnMuZW5hYmxlZCA/IHRoaXMuZGF0YVdpdGhBZGRlZEluVHJhbnNhY3Rpb25Sb3dzLmxlbmd0aCA6IHRoaXMuZ3JpZEFQSS5nZXRfYWxsX2RhdGEoKS5sZW5ndGg7XG4gICAgfVxuXG4gICAgcHVibGljIGhhc0hvcml6b250YWxTY3JvbGwoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRvdGFsV2lkdGggLSB0aGlzLnVucGlubmVkV2lkdGggPiAwO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfcmVzdG9yZVZpcnRTdGF0ZShyb3cpIHtcbiAgICAgICAgLy8gY2hlY2sgdmlydHVhbGl6YXRpb24gc3RhdGUgb2YgZGF0YSByZWNvcmQgYWRkZWQgZnJvbSBjYWNoZVxuICAgICAgICAvLyBpbiBjYXNlIHN0YXRlIGlzIG5vIGxvbmdlciB2YWxpZCAtIHVwZGF0ZSBpdC5cbiAgICAgICAgY29uc3Qgcm93Rm9yT2YgPSByb3cudmlydERpclJvdztcbiAgICAgICAgY29uc3QgZ3JpZFNjckxlZnQgPSByb3dGb3JPZi5nZXRIb3Jpem9udGFsU2Nyb2xsKCkuc2Nyb2xsTGVmdDtcbiAgICAgICAgY29uc3QgbGVmdCA9IC1wYXJzZUludChyb3dGb3JPZi5kYy5pbnN0YW5jZS5fdmlld0NvbnRhaW5lci5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuc3R5bGUubGVmdCwgMTApO1xuICAgICAgICBjb25zdCBhY3R1YWxTY3JvbGxMZWZ0ID0gbGVmdCArIHJvd0Zvck9mLmdldENvbHVtblNjcm9sbExlZnQocm93Rm9yT2Yuc3RhdGUuc3RhcnRJbmRleCk7XG4gICAgICAgIGlmIChncmlkU2NyTGVmdCAhPT0gYWN0dWFsU2Nyb2xsTGVmdCkge1xuICAgICAgICAgICAgcm93Rm9yT2Yub25IU2Nyb2xsKGdyaWRTY3JMZWZ0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgZ2V0RXhwb3J0RXhjZWwoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9leHBvcnRFeGNlbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGdldEV4cG9ydENzdigpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2V4cG9ydENzdjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIEBoaWRkZW5cbiAgICAqL1xuICAgIHB1YmxpYyBpc1N1bW1hcnlSb3cocm93RGF0YSk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gcm93RGF0YS5zdW1tYXJpZXMgJiYgKHJvd0RhdGEuc3VtbWFyaWVzIGluc3RhbmNlb2YgTWFwKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGdldCBpc0F0dGFjaGVkVG9Eb20oKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmRvY3VtZW50LmJvZHkuY29udGFpbnModGhpcy5uYXRpdmVFbGVtZW50KTtcbiAgICB9XG5cblxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyBjYWNoZWRWaWV3TG9hZGVkKGFyZ3M6IElDYWNoZWRWaWV3TG9hZGVkRXZlbnRBcmdzKSB7XG4gICAgICAgIGlmIChhcmdzLmNvbnRleHRbJ3RlbXBsYXRlSUQnXSA9PT0gJ2RhdGFSb3cnICYmIGFyZ3MuY29udGV4dFsnJGltcGxpY2l0J10gPT09IGFyZ3Mub2xkQ29udGV4dFsnJGltcGxpY2l0J10pIHtcbiAgICAgICAgICAgIGFyZ3Mudmlldy5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICAgICAgICBjb25zdCByb3cgPSB0aGlzLmdldFJvd0J5SW5kZXgoYXJncy5jb250ZXh0LmluZGV4KTtcbiAgICAgICAgICAgIGlmIChyb3cgJiYgcm93LmNlbGxzKSB7XG4gICAgICAgICAgICAgICAgcm93LmNlbGxzLmZvckVhY2goKGMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgYy5oaWdobGlnaHRUZXh0KFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0U2VhcmNoSW5mby5zZWFyY2hUZXh0LFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0U2VhcmNoSW5mby5jYXNlU2Vuc2l0aXZlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0U2VhcmNoSW5mby5leGFjdE1hdGNoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5oYXNIb3Jpem9udGFsU2Nyb2xsKCkpIHtcbiAgICAgICAgICAgIGNvbnN0IHRtcGxJZCA9IGFyZ3MuY29udGV4dC50ZW1wbGF0ZUlEO1xuICAgICAgICAgICAgY29uc3QgaW5kZXggPSBhcmdzLmNvbnRleHQuaW5kZXg7XG4gICAgICAgICAgICBhcmdzLnZpZXcuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgICAgICAgY29uc3Qgcm93ID0gdG1wbElkID09PSAnZGF0YVJvdycgPyB0aGlzLmdldFJvd0J5SW5kZXgoaW5kZXgpIDogbnVsbDtcbiAgICAgICAgICAgIGNvbnN0IHN1bW1hcnlSb3cgPSB0bXBsSWQgPT09ICdzdW1tYXJ5Um93JyA/IHRoaXMuc3VtbWFyaWVzUm93TGlzdC50b0FycmF5KCkuZmluZCgoc3IpID0+IHNyLmRhdGFSb3dJbmRleCA9PT0gaW5kZXgpIDogbnVsbDtcbiAgICAgICAgICAgIGlmIChyb3cgJiYgcm93IGluc3RhbmNlb2YgSWd4Um93Q29tcG9uZW50KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fcmVzdG9yZVZpcnRTdGF0ZShyb3cpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChzdW1tYXJ5Um93KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fcmVzdG9yZVZpcnRTdGF0ZShzdW1tYXJ5Um93KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG4iXX0=