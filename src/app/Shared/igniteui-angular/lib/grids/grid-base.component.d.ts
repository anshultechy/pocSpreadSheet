import { AfterContentInit, AfterViewInit, ChangeDetectorRef, ComponentFactoryResolver, ElementRef, EventEmitter, IterableDiffers, NgZone, OnDestroy, OnInit, QueryList, TemplateRef, ViewContainerRef, InjectionToken, OnChanges, SimpleChanges } from '@angular/core';
import { Subject } from 'rxjs';
import { IgxSelectionAPIService } from '../core/selection';
import { CancelableEventArgs } from '../core/utils';
import { DataType } from '../data-operations/data-util';
import { FilteringLogic } from '../data-operations/filtering-expression.interface';
import { IGroupByRecord } from '../data-operations/groupby-record.interface';
import { ISortingExpression } from '../data-operations/sorting-expression.interface';
import { IForOfState, IgxGridForOfDirective } from '../directives/for-of/for_of.directive';
import { IgxBaseExporter, IgxExporterOptionsBase, IgxOverlayService } from '../services/index';
import { IgxCheckboxComponent } from './../checkbox/checkbox.component';
import { GridBaseAPIService } from './api.service';
import { IgxGridCellComponent } from './cell.component';
import { IColumnVisibilityChangedEventArgs } from './column-hiding-item.directive';
import { IgxColumnComponent } from './column.component';
import { ISummaryExpression } from './summaries/grid-summary';
import { DropPosition } from './grid.common';
import { IgxGridToolbarComponent } from './grid-toolbar.component';
import { IgxRowComponent } from './row.component';
import { IgxGridHeaderComponent } from './grid-header.component';
import { IgxOverlayOutletDirective, IgxToggleDirective } from '../directives/toggle/toggle.directive';
import { IFilteringExpressionsTree } from '../data-operations/filtering-expressions-tree';
import { IFilteringOperation } from '../data-operations/filtering-condition';
import { Transaction, TransactionService, State } from '../services/index';
import { IgxRowEditTabStopDirective } from './grid.rowEdit.directive';
import { IgxGridNavigationService } from './grid-navigation.service';
import { IDisplayDensityOptions, DisplayDensityBase } from '../core/displayDensity';
import { IgxFilteringService } from './filtering/grid-filtering.service';
import { IgxGridFilteringCellComponent } from './filtering/grid-filtering-cell.component';
import { IgxGridHeaderGroupComponent } from './grid-header-group.component';
import { IgxGridToolbarCustomContentDirective } from './grid-toolbar.component';
import { IGridResourceStrings } from '../core/i18n/grid-resources';
import { IgxGridSummaryService } from './summaries/grid-summary.service';
import { IgxSummaryRowComponent } from './summaries/summary-row.component';
import { IgxGridSelectionService, GridSelectionRange, IgxGridCRUDService, IgxRow } from '../core/grid-selection';
import { DragScrollDirection } from './drag-select.directive';
import { ICachedViewLoadedEventArgs } from '../directives/template-outlet/template_outlet.directive';
import { IgxExcelStyleSortingTemplateDirective, IgxExcelStylePinningTemplateDirective, IgxExcelStyleHidingTemplateDirective, IgxExcelStyleMovingTemplateDirective } from './filtering/excel-style/grid.excel-style-filtering.component';
import { IgxGridColumnResizerComponent } from './grid-column-resizer.component';
import { IgxGridFilteringRowComponent } from './filtering/grid-filtering-row.component';
import { IgxDragDirective } from '../directives/dragdrop/dragdrop.directive';
export declare const IgxGridTransaction: InjectionToken<string>;
export interface IGridClipboardEvent {
    data: any[];
    cancel: boolean;
}
export interface IGridCellEventArgs {
    cell: IgxGridCellComponent;
    event: Event;
}
export interface IGridEditEventArgs extends CancelableEventArgs {
    rowID: any;
    cellID?: {
        rowID: any;
        columnID: any;
        rowIndex: number;
    };
    oldValue: any;
    newValue?: any;
    event?: Event;
}
export interface IPinColumnEventArgs {
    column: IgxColumnComponent;
    insertAtIndex: number;
    isPinned: boolean;
}
export interface IPageEventArgs {
    previous: number;
    current: number;
}
export interface IRowDataEventArgs {
    data: any;
}
export interface IColumnResizeEventArgs {
    column: IgxColumnComponent;
    prevWidth: string;
    newWidth: string;
}
export interface IRowSelectionEventArgs {
    oldSelection: any[];
    newSelection: any[];
    row?: IgxRowComponent<IgxGridBaseComponent & IGridDataBindable>;
    event?: Event;
}
export interface ISearchInfo {
    searchText: string;
    caseSensitive: boolean;
    exactMatch: boolean;
    activeMatchIndex: number;
    matchInfoCache: any[];
}
export interface IGridToolbarExportEventArgs {
    grid: IgxGridBaseComponent;
    exporter: IgxBaseExporter;
    options: IgxExporterOptionsBase;
    cancel: boolean;
}
export interface IColumnMovingStartEventArgs {
    source: IgxColumnComponent;
}
export interface IColumnMovingEventArgs {
    source: IgxColumnComponent;
    cancel: boolean;
}
export interface IColumnMovingEndEventArgs {
    source: IgxColumnComponent;
    target: IgxColumnComponent;
}
export interface IFocusChangeEventArgs {
    cell: IgxGridCellComponent;
    event: Event;
    cancel: boolean;
}
export interface IGridKeydownEventArgs {
    targetType: GridKeydownTargetType;
    target: Object;
    event: Event;
    cancel: boolean;
}
export interface ICellPosition {
    rowIndex: number;
    visibleColumnIndex: number;
}
export interface IGridDataBindable {
    data: any[];
    filteredData: any[];
}
export interface IRowDragEndEventArgs {
    owner: IgxDragDirective;
    dragData: IgxRowComponent<IgxGridBaseComponent & IGridDataBindable>;
    animation: boolean;
}
export interface IRowDragStartEventArgs extends CancelableEventArgs {
    owner: IgxDragDirective;
    dragData: IgxRowComponent<IgxGridBaseComponent & IGridDataBindable>;
}
export declare enum GridSummaryPosition {
    top = "top",
    bottom = "bottom"
}
export declare enum GridSummaryCalculationMode {
    rootLevelOnly = "rootLevelOnly",
    childLevelsOnly = "childLevelsOnly",
    rootAndChildLevels = "rootAndChildLevels"
}
export declare enum FilterMode {
    quickFilter = "quickFilter",
    excelStyleFilter = "excelStyleFilter"
}
export declare enum GridKeydownTargetType {
    dataCell = "dataCell",
    summaryCell = "summaryCell",
    groupRow = "groupRow",
    hierarchicalRow = "hierarchicalRow"
}
export declare abstract class IgxGridBaseComponent extends DisplayDensityBase implements OnInit, OnChanges, OnDestroy, AfterContentInit, AfterViewInit {
    selectionService: IgxGridSelectionService;
    crudService: IgxGridCRUDService;
    private gridAPI;
    selection: IgxSelectionAPIService;
    protected _transactions: TransactionService<Transaction, State>;
    private elementRef;
    private zone;
    document: any;
    cdr: ChangeDetectorRef;
    protected resolver: ComponentFactoryResolver;
    protected differs: IterableDiffers;
    protected viewRef: ViewContainerRef;
    navigation: IgxGridNavigationService;
    filteringService: IgxFilteringService;
    protected overlayService: IgxOverlayService;
    summaryService: IgxGridSummaryService;
    protected _displayDensityOptions: IDisplayDensityOptions;
    private _scrollWidth;
    protected _init: boolean;
    readonly scrollWidth: number;
    private _resourceStrings;
    private _emptyGridMessage;
    private _emptyFilteredGridMessage;
    private _isLoading;
    private _locale;
    private _observer;
    protected _destroyed: boolean;
    private overlayIDs;
    /**
     * An accessor that sets the resource strings.
     * By default it uses EN resources.
    */
    /**
     * An accessor that returns the resource strings.
    */
    resourceStrings: IGridResourceStrings;
    /**
     * An @Input property that autogenerates the `IgxGridComponent` columns.
     * The default value is false.
     * ```html
     * <igx-grid [data]="Data" [autoGenerate]="true"></igx-grid>
     * ```
     * @memberof IgxGridBaseComponent
     */
    autoGenerate: boolean;
    abstract id: string;
    /**
     * An @Input property that sets a custom template when the `IgxGridComponent` is empty.
     * ```html
     * <igx-grid [id]="'igx-grid-1'" [data]="Data" [emptyGridTemplate]="myTemplate" [autoGenerate]="true"></igx-grid>
     * ```
     * @memberof IgxGridBaseComponent
     */
    emptyGridTemplate: TemplateRef<any>;
    /**
     * An @Input property that sets a custom template when the `IgxGridComponent` is loading.
     * ```html
     * <igx-grid [id]="'igx-grid-1'" [data]="Data" [loadingGridTemplate]="myTemplate" [autoGenerate]="true"></igx-grid>
     * ```
     * @memberof IgxGridBaseComponent
     */
    loadingGridTemplate: TemplateRef<any>;
    /**
       * Sets the filtering logic of the `IgxGridComponent`.
       * The default is AND.
       * ```html
       * <igx-grid [data]="Data" [autoGenerate]="true" [filteringLogic]="filtering"></igx-grid>
       * ```
    * @memberof IgxGridBaseComponent
       */
    filteringLogic: FilteringLogic;
    /**
     * Returns the filtering state of `IgxGridComponent`.
     * ```typescript
     * let filteringExpressionsTree = this.grid.filteringExpressionsTree;
     * ```
     * @memberof IgxGridBaseComponent
     */
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
    filteringExpressionsTree: IFilteringExpressionsTree;
    /**
     * Returns the locale of the grid.
     * If not set, returns browser's language.
     */
    /**
    * Sets the locale of the grid.
    */
    locale: string;
    /**
     * Returns whether the paging feature is enabled/disabled.
     * The default state is disabled (false).
     * ```
     * const paging = this.grid.paging;
     * ```
     * @memberof IgxGridBaseComponent
     */
    /**
       * Enables/Disables the paging feature.
       * ```html
       * <igx-grid #grid [data]="Data" [autoGenerate]="true" [paging]="true"></igx-grid>
       * ```
    * @memberof IgxGridBaseComponent
       */
    paging: boolean;
    /**
     * Returns the current page index.
     * ```html
     * let gridPage = this.grid.page;
     * ```
     * @memberof IgxGridBaseComponent
     */
    /**
    * Sets the current page index.
    * <igx-grid #grid [data]="Data" [paging]="true" [page]="5" [autoGenerate]="true"></igx-grid>
    */
    page: number;
    /**
     * Returns the number of visible items per page of the `IgxGridComponent`.
     * The default is 15.
     * ```html
     * let itemsPerPage = this.grid.perPage;
     * ```
     * @memberof IgxGridBaseComponent
     */
    /**
       * Sets the number of visible items per page of the `IgxGridComponent`.
       * ```html
       * <igx-grid #grid [data]="Data" [paging]="true" [perPage]="5" [autoGenerate]="true"></igx-grid>
       * ```
    * @memberof IgxGridBaseComponent
       */
    perPage: number;
    /**
     * You can provide a custom `ng-template` for the pagination UI of the grid.
     * ```html
     * <igx-grid #grid [paging]="true" [myTemplate]="myTemplate" [height]="'305px'"></igx-grid>
     * ```
     * @memberof IgxGridBaseComponent
     */
    paginationTemplate: TemplateRef<any>;
    /**
     * Returns whether the column hiding UI for the `IgxGridComponent` is enabled.
     * By default it is disabled (false).
     * ```typescript
     * let gridColHiding = this.grid.columnHiding;
     * ```
     * @memberof IgxGridBaseComponent
     */
    /**
       * Sets whether the column hiding UI for the `IgxGridComponent` is enabled.
       * In order for the UI to work, you need to enable the toolbar as shown in the example below.
       * ```html
       * <igx-grid [data]="Data" [autoGenerate]="true" [showToolbar]="true" [columnHiding]="true"></igx-grid>
       * ```
    * @memberof IgxGridBaseComponent
       */
    columnHiding: boolean;
    /**
     * Sets whether the `IgxGridRowComponent` selection is enabled.
     * By default it is set to false.
     * ```typescript
     * let rowSelectable = this.grid.rowSelectable;
     * ```
     * @memberof IgxGridBaseComponent
     */
    /**
       * Sets whether rows can be selected.
       * ```html
       * <igx-grid #grid [showToolbar]="true" [rowSelectable]="true" [columnHiding]="true"></igx-grid>
       * ```
    * @memberof IgxGridBaseComponent
       */
    rowSelectable: boolean;
    /**
       * Sets whether rows can be moved.
       * ```html
       * <igx-grid #grid [rowDraggable]="true"></igx-grid>
       * ```
    * @memberof IgxGridBaseComponent
       */
    rowDraggable: boolean;
    /**
     * @hidden
     * @internal
     */
    rowDragging: boolean;
    /**
 * Sets whether the `IgxGridRowComponent` is editable.
 * By default it is set to false.
 * ```typescript
 * let rowEditable = this.grid.rowEditable;
 * ```
 * @memberof IgxGridBaseComponent
 */
    /**
    * Sets whether rows can be edited.
    * ```html
    * <igx-grid #grid [showToolbar]="true" [rowEditable]="true" [primaryKey]="'ProductID'" [columnHiding]="true"></igx-grid>
    * ```
    * @memberof IgxGridBaseComponent
    */
    rowEditable: boolean;
    /**
     * Returns the height of the `IgxGridComponent`.
     * ```typescript
     * let gridHeight = this.grid.height;
     * ```
     * @memberof IgxGridBaseComponent
     */
    /**
       * Sets the height of the `IgxGridComponent`.
       * ```html
       * <igx-grid #grid [data]="Data" [height]="'305px'" [autoGenerate]="true"></igx-grid>
       * ```
    * @memberof IgxGridBaseComponent
       */
    height: string;
    /**
     * Returns the width of the `IgxGridComponent`.
     * ```typescript
     * let gridWidth = this.grid.width;
     * ```
     * @memberof IgxGridBaseComponent
     */
    width: string;
    /**
     * Returns the width of the header of the `IgxGridComponent`.
     * ```html
     * let gridHeaderWidth = this.grid.headerWidth;
     * ```
     * @memberof IgxGridBaseComponent
     */
    readonly headerWidth: number;
    /**
     * An @Input property that adds styling classes applied to all even `IgxGridRowComponent`s in the grid.
     * ```html
     * <igx-grid #grid [data]="Data" [evenRowCSS]="'igx-grid--my-even-class'" [autoGenerate]="true"></igx-grid>
     * ```
     * @memberof IgxGridBaseComponent
     */
    evenRowCSS: string;
    /**
     * An @Input property that adds styling classes applied to all odd `IgxGridRowComponent`s in the grid.
     * ```html
     * <igx-grid #grid [data]="Data" [evenRowCSS]="'igx-grid--my-odd-class'" [autoGenerate]="true"></igx-grid>
     * ```
     * @memberof IgxGridBaseComponent
     */
    oddRowCSS: string;
    /**
     * Returns the row height.
     * ```typescript
     * const rowHeight = this.grid.rowHeight;
     * ```
     * @memberof IgxGridBaseComponent
     */
    /**
       * Sets the row height.
       * ```html
       * <igx-grid #grid [data]="localData" [showToolbar]="true" [rowHeight]="100" [autoGenerate]="true"></igx-grid>
       * ```
    * @memberof IgxGridBaseComponent
       */
    rowHeight: any;
    /**
     * An @Input property that sets the default width of the `IgxGridComponent`'s columns.
     * ```html
     * <igx-grid #grid [data]="localData" [showToolbar]="true" [columnWidth]="100" [autoGenerate]="true"></igx-grid>
     * ```
     * @memberof IgxGridBaseComponent
     */
    columnWidth: string;
    /**
     * An @Input property that sets the primary key of the `IgxGridComponent`.
     * ```html
     * <igx-grid #grid [data]="localData" [showToolbar]="true" [primaryKey]="'ProductID'" [autoGenerate]="true"></igx-grid>
     * ```
     * @memberof IgxGridBaseComponent
     */
    primaryKey: any;
    /**
     * An @Input property that sets the message displayed when there are no records.
     * ```html
     * <igx-grid #grid [data]="Data" [emptyGridMessage]="'The grid is empty'" [autoGenerate]="true"></igx-grid>
     * ```
     * @memberof IgxGridBaseComponent
     */
    /**
     * An accessor that returns the message displayed when there are no records.
    */
    emptyGridMessage: string;
    /**
     * An @Input property that sets whether the grid is going to show loading indicator.
     * ```html
     * <igx-grid #grid [data]="Data" [isLoading]="true" [autoGenerate]="true"></igx-grid>
     * ```
     * @memberof IgxGridBaseComponent
     */
    /**
    * An accessor that returns whether the grid is showing loading indicator.
    */
    isLoading: boolean;
    /**
     * A property that allows the columns to be auto-generated once again after the initialization of the grid.
     * This will allow to bind the grid to remote data and having auto-generated columns at the same time.
     * Note that after generating the columns, this property would be disabled to avoid re-creating
     * columns each time a new data is assigned.
     * ```typescript
     *  this.grid.shouldGenerate = true;
     *  this.remoteData = this.remoteService.remoteData;
     * ```
     */
    shouldGenerate: boolean;
    /**
     * An @Input property that sets the message displayed when there are no records and the grid is filtered.
     * ```html
     * <igx-grid #grid [data]="Data" [emptyGridMessage]="'The grid is empty'" [autoGenerate]="true"></igx-grid>
     * ```
     * @memberof IgxGridBaseComponent
     */
    /**
     * An accessor that returns the message displayed when there are no records and the grid is filtered.
    */
    emptyFilteredGridMessage: string;
    /**
     * An @Input property that sets the title to be displayed in the built-in column hiding UI.
     * ```html
     * <igx-grid [showToolbar]="true" [columnHiding]="true" columnHidingTitle="Column Hiding"></igx-grid>
     * ```
     * @memberof IgxGridBaseComponent
     */
    columnHidingTitle: string;
    /**
     * Returns if the built-in column pinning UI should be shown in the toolbar.
     * ```typescript
     *  let colPinning = this.grid.columnPinning;
     * ```
     * @memberof IgxGridBaseComponent
     */
    /**
       * Sets if the built-in column pinning UI should be shown in the toolbar.
       * By default it's disabled.
       * ```html
       * <igx-grid #grid [data]="localData" [columnPinning]="'true" [height]="'305px'" [autoGenerate]="true"></igx-grid>
       * ```
    * @memberof IgxGridBaseComponent
       */
    columnPinning: boolean;
    /**
     * An @Input property that sets the title to be displayed in the UI of the column pinning.
     * ```html
     * <igx-grid #grid [data]="localData" [columnPinning]="'true" [columnPinningTitle]="'Column Hiding'" [autoGenerate]="true"></igx-grid>
     * ```
     * @memberof IgxGridBaseComponent
     */
    columnPinningTitle: string;
    /**
     * Returns if the filtering is enabled.
     * ```typescript
     *  let filtering = this.grid.allowFiltering;
     * ```
     * @memberof IgxGridBaseComponent
     */
    /**
       * Sets if the filtering is enabled.
       * By default it's disabled.
       * ```html
       * <igx-grid #grid [data]="localData" [allowFiltering]="'true" [height]="'305px'" [autoGenerate]="true"></igx-grid>
       * ```
    * @memberof IgxGridBaseComponent
       */
    allowFiltering: boolean;
    /**
     * Returns the filter mode.
     * ```typescript
     *  let filtering = this.grid.filterMode;
     * ```
     * @memberof IgxGridBaseComponent
     */
    /**
       * Sets filter mode.
       * By default it's set to FilterMode.quickFilter.
       * ```html
       * <igx-grid #grid [data]="localData" [filterMode]="'quickFilter'" [height]="'305px'" [autoGenerate]="true"></igx-grid>
       * ```
    * @memberof IgxGridBaseComponent
       */
    filterMode: FilterMode;
    /**
     * Returns the summary position.
     * ```typescript
     *  let summaryPosition = this.grid.summaryPosition;
     * ```
     * @memberof IgxGridBaseComponent
     */
    /**
       * Sets summary position.
       * By default it is bottom.
       * ```html
       * <igx-grid #grid [data]="localData" summaryPosition="top" [autoGenerate]="true"></igx-grid>
       * ```
    * @memberof IgxGridBaseComponent
       */
    summaryPosition: GridSummaryPosition;
    /**
     * Returns the summary calculation mode.
     * ```typescript
     *  let summaryCalculationMode = this.grid.summaryCalculationMode;
     * ```
     * @memberof IgxGridBaseComponent
     */
    /**
       * Sets summary calculation mode.
       * By default it is rootAndChildLevels which means the summaries are calculated for the root level and each child level.
       * ```html
       * <igx-grid #grid [data]="localData" summaryCalculationMode="rootLevelOnly" [autoGenerate]="true"></igx-grid>
       * ```
    * @memberof IgxGridBaseComponent
       */
    summaryCalculationMode: GridSummaryCalculationMode;
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
     * @memberof IgxGridBaseComponent
     */
    onCellClick: EventEmitter<IGridCellEventArgs>;
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
     * @memberof IgxGridBaseComponent
     */
    onSelection: EventEmitter<IGridCellEventArgs>;
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
     * @memberof IgxGridBaseComponent
     */
    onRowSelectionChange: EventEmitter<IRowSelectionEventArgs>;
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
     * @memberof IgxGridBaseComponent
     */
    onColumnPinning: EventEmitter<IPinColumnEventArgs>;
    /**
     * An @Output property emitting an event when `IgxGridCellComponent`
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
     * @memberof IgxGridComponent
     */
    onCellEditCancel: EventEmitter<IGridEditEventArgs>;
    /**
     * An @Output property emitting an event when `IgxGridCellComponent` enters edit mode.
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
     * @memberof IgxGridComponent
     */
    onCellEditEnter: EventEmitter<IGridEditEventArgs>;
    /**
     * An @Output property emitting an event when `IgxGridCellComponent` editing has been performed in the grid.
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
     * @memberof IgxGridBaseComponent
     */
    onCellEdit: EventEmitter<IGridEditEventArgs>;
    /**
     * An @Output property emitting an event when [rowEditable]="true" a row enters edit mode.
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
     * @memberof IgxGridComponent
     */
    onRowEditEnter: EventEmitter<IGridEditEventArgs>;
    /**
     * An @Output property emitting an event when [rowEditable]="true" & `endEdit(true)` is called.
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
     * @memberof IgxGridBaseComponent
     */
    onRowEdit: EventEmitter<IGridEditEventArgs>;
    /**
     * An @Output property emitting an event when [rowEditable]="true" & `endEdit(false)` is called.
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
     * @memberof IgxGridBaseComponent
     */
    onRowEditCancel: EventEmitter<IGridEditEventArgs>;
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
     * @memberof IgxGridBaseComponent
     */
    onColumnInit: EventEmitter<IgxColumnComponent>;
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
     * @memberof IgxGridBaseComponent
     */
    onSortingDone: EventEmitter<ISortingExpression | ISortingExpression[]>;
    /**
     * Emitted when filtering is performed through the UI.
     * Returns the filtering expressions tree of the column for which filtering was performed.
     * ```typescript
     * filteringDone(event: IFilteringExpressionsTree){
     *     const filteringTree = event;
     *}
     * ```
     * ```html
     * <igx-grid #grid [data]="localData" [height]="'305px'" [autoGenerate]="true" (onFilteringDone)="filteringDone($event)"></igx-grid>
     * ```
     * @memberof IgxGridBaseComponent
     */
    onFilteringDone: EventEmitter<IFilteringExpressionsTree>;
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
     * @memberof IgxGridBaseComponent
     */
    onPagingDone: EventEmitter<IPageEventArgs>;
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
     * @memberof IgxGridBaseComponent
     */
    onRowAdded: EventEmitter<IRowDataEventArgs>;
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
     * @memberof IgxGridBaseComponent
     */
    onRowDeleted: EventEmitter<IRowDataEventArgs>;
    /**
     * Emitted when a new chunk of data is loaded from virtualization.
     * ```typescript
     *  <igx-grid #grid [data]="localData" [autoGenerate]="true" (onDataPreLoad)='handleDataPreloadEvent()'></igx-grid>
     * ```
     * @memberof IgxGridBaseComponent
     */
    onDataPreLoad: EventEmitter<IForOfState>;
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
     * @memberof IgxGridBaseComponent
     */
    onColumnResized: EventEmitter<IColumnResizeEventArgs>;
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
     * @memberof IgxGridBaseComponent
     */
    onContextMenu: EventEmitter<IGridCellEventArgs>;
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
     * @memberof IgxGridBaseComponent
     */
    onDoubleClick: EventEmitter<IGridCellEventArgs>;
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
     * @memberof IgxGridBaseComponent
     */
    onColumnVisibilityChanged: EventEmitter<IColumnVisibilityChangedEventArgs>;
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
     * @memberof IgxGridBaseComponent
     */
    onColumnMovingStart: EventEmitter<IColumnMovingStartEventArgs>;
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
     * @memberof IgxGridBaseComponent
     */
    onColumnMoving: EventEmitter<IColumnMovingEventArgs>;
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
     * @memberof IgxGridBaseComponent
     */
    onColumnMovingEnd: EventEmitter<IColumnMovingEndEventArgs>;
    /**
     * @deprecated you should use onGridKeydown event
     */
    onFocusChange: EventEmitter<IFocusChangeEventArgs>;
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
    onGridKeydown: EventEmitter<IGridKeydownEventArgs>;
    /**
     * Emitted when start dragging a row.
     * Return the dragged row.
     */
    onRowDragStart: EventEmitter<IRowDragStartEventArgs>;
    /**
     * Emitted when dropping a row.
     * Return the dropped row.
     */
    onRowDragEnd: EventEmitter<IRowDragEndEventArgs>;
    /**
     * Emitted when a copy operation is executed.
     * Fired only if copy behavior is enabled through the [`clipboardOptions`]{@link IgxGridBaseComponent#clipboardOptions}.
     */
    onGridCopy: EventEmitter<IGridClipboardEvent>;
    /**
     * @hidden
     */
    resizeLine: IgxGridColumnResizerComponent;
    /**
     * @hidden
     */
    columnList: QueryList<IgxColumnComponent>;
    /**
     *@hidden
     */
    excelStyleSortingTemplateDirective: IgxExcelStyleSortingTemplateDirective;
    /**
     *@hidden
     */
    excelStyleMovingTemplateDirective: IgxExcelStyleMovingTemplateDirective;
    /**
     *@hidden
     */
    excelStyleHidingTemplateDirective: IgxExcelStyleHidingTemplateDirective;
    /**
     *@hidden
     */
    excelStylePinningTemplateDirective: IgxExcelStylePinningTemplateDirective;
    /**
     * @hidden
     */
    headerGroups: QueryList<IgxGridHeaderGroupComponent>;
    /**
     * A list of all `IgxGridHeaderGroupComponent`.
     * ```typescript
     * const headerGroupsList = this.grid.headerGroupsList;
     * ```
     * @memberof IgxGridBaseComponent
     */
    readonly headerGroupsList: IgxGridHeaderGroupComponent[];
    /**
     * A list of all `IgxGridHeaderComponent`.
     * ```typescript
     * const headers = this.grid.headerCellList;
     * ```
     * @memberof IgxGridBaseComponent
     */
    readonly headerCellList: IgxGridHeaderComponent[];
    /**
     * A list of all `IgxGridFilteringCellComponent`.
     * ```typescript
     * const filterCells = this.grid.filterCellList;
     * ```
     * @memberof IgxGridBaseComponent
     */
    readonly filterCellList: IgxGridFilteringCellComponent[];
    private _rowList;
    protected _summaryRowList: QueryList<IgxSummaryRowComponent>;
    readonly summariesRowList: QueryList<any>;
    /**
     * A list of `IgxGridRowComponent`.
     * ```typescript
     * const rowList = this.grid.rowList;
     * ```
     * @memberof IgxGridBaseComponent
     */
    readonly rowList: QueryList<any>;
    private _dataRowList;
    /**
     * A list of `IgxGridRowComponent`, currently rendered.
     * ```typescript
     * const dataList = this.grid.dataRowList;
     * ```
     * @memberof IgxGridBaseComponent
     */
    readonly dataRowList: QueryList<IgxRowComponent<IgxGridBaseComponent>>;
    /**
     * A template reference for the template when the filtered `IgxGridComponent` is empty.
     * ```
     * const emptyTempalte = this.grid.emptyGridTemplate;
     * ```
     * @memberof IgxGridBaseComponent
     */
    emptyFilteredGridTemplate: TemplateRef<any>;
    /**
     * A template reference for the template when the `IgxGridComponent` is empty.
     * ```
     * const emptyTempalte = this.grid.emptyGridTemplate;
     * ```
     * @memberof IgxGridBaseComponent
     */
    emptyGridDefaultTemplate: TemplateRef<any>;
    loadingGridDefaultTemplate: TemplateRef<any>;
    /**
     * @hidden
     */
    parentVirtDir: IgxGridForOfDirective<any>;
    /**
     * Returns the template which will be used by the toolbar to show custom content.
     * ```typescript
     * let customContentTemplate = this.grid.toolbarCustomContentTemplate;
     * ```
     * @memberof IgxGridBaseComponent
     */
    readonly toolbarCustomContentTemplate: IgxGridToolbarCustomContentDirective;
    toolbarCustomContentTemplates: QueryList<IgxGridToolbarCustomContentDirective>;
    /**
     * @hidden
     */
    verticalScrollContainer: IgxGridForOfDirective<any>;
    /**
     * @hidden
     */
    verticalScroll: IgxGridForOfDirective<any>;
    /**
     * @hidden
     */
    scr: ElementRef;
    /**
     * @hidden
     */
    footer: ElementRef;
    /**
     * @hidden
     */
    headerContainer: IgxGridForOfDirective<any>;
    /**
     * @hidden
     */
    headerCheckboxContainer: ElementRef;
    /**
     * @hidden
     */
    headerDragContainer: ElementRef;
    /**
     * @hidden
     */
    headerGroupContainer: ElementRef;
    /**
     * @hidden
     */
    headerCheckbox: IgxCheckboxComponent;
    /**
     * @hidden
     */
    filteringRow: IgxGridFilteringRowComponent;
    /**
     * @hidden
     */
    theadRow: ElementRef;
    /**
     * @hidden
     */
    tbody: ElementRef;
    /**
     * @hidden
     */
    tfoot: ElementRef;
    /**
     * @hidden
     */
    protected _outletDirective: IgxOverlayOutletDirective;
    /**
     * @hidden
     */
    readonly outletDirective: IgxOverlayOutletDirective;
    /**
     * @hidden
     */
    rowEditingOutletDirective: IgxOverlayOutletDirective;
    /**
     * @hidden
    */
    tmpOutlets: QueryList<any>;
    /**
     * @hidden
     */
    readonly rowOutletDirective: IgxOverlayOutletDirective;
    /**
     * @hidden
     */
    readonly parentRowOutletDirective: any;
    /**
     * @hidden
     * @internal
     */
    dragIndicatorIconBase: TemplateRef<any>;
    /**
     * @hidden
     */
    private defaultRowEditTemplate;
    /**
     * @hidden
     */
    rowEditCustom: TemplateRef<any>;
    /** @hidden */
    readonly rowEditContainer: TemplateRef<any>;
    /** @hidden */
    rowEditText: TemplateRef<any>;
    /** @hidden */
    rowEditActions: TemplateRef<any>;
    /**
     * @hidden
     */
    readonly rowInEditMode: IgxRowComponent<IgxGridBaseComponent & IGridDataBindable>;
    /**
     * @hidden
     */
    readonly firstEditableColumnIndex: number;
    /**
     * @hidden
     */
    readonly lastEditableColumnIndex: number;
    /**
     * @hidden
     */
    rowEditTabsDEFAULT: QueryList<IgxRowEditTabStopDirective>;
    /**
     * @hidden
     */
    rowEditTabsCUSTOM: QueryList<IgxRowEditTabStopDirective>;
    /**
     * @hidden
     * TODO: Nav service logic doesn't handle 0 results from this querylist
     */
    readonly rowEditTabs: QueryList<IgxRowEditTabStopDirective>;
    /**
     * @hidden
     */
    rowEditingOverlay: IgxToggleDirective;
    /**
     * @hidden
     */
    tabindex: number;
    /**
     * @hidden
     */
    readonly hostClass: string;
    readonly bannerClass: string;
    /**
     * @hidden
     */
    hostRole: string;
    /**
     * @hidden
     */
    readonly pipeTrigger: number;
    /**
     * @hidden
     */
    readonly summaryPipeTrigger: number;
    /**
     * Returns the sorting state of the `IgxGridComponent`.
     * ```typescript
     * const sortingState = this.grid.sortingExpressions;
     * ```
     * @memberof IgxGridBaseComponent
     */
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
    sortingExpressions: ISortingExpression[];
    /**
     * @hidden
     */
    readonly maxLevelHeaderDepth: any;
    /**
     * Returns the number of hidden `IgxColumnComponent`.
     * ```typescript
     * const hiddenCol = this.grid.hiddenColumnsCount;
     * ``
     */
    readonly hiddenColumnsCount: number;
    /**
     * Returns the text to be displayed inside the toggle button
     * for the built-in column hiding UI of the`IgxColumnComponent`.
     * ```typescript
     * const hiddenColText = this.grid.hiddenColumnsText;
     * ``
     */
    /**
       * Sets the text to be displayed inside the toggle button
       * for the built-in column hiding UI of the`IgxColumnComponent`.
       * ```typescript
       * <igx-grid [columnHiding]="true" [showToolbar]="true" [hiddenColumnsText]="'Hidden Columns'"></igx-grid>
       * ```
    * @memberof IgxGridBaseComponent
       */
    hiddenColumnsText: string;
    /**
     * Returns the text to be displayed inside the toggle button
     * for the built-in column pinning UI of the`IgxColumnComponent`.
     * ```typescript
     * const pinnedText = this.grid.pinnedColumnsText;
     * ```
     * @memberof IgxGridBaseComponent
     */
    /**
       * Sets the text to be displayed inside the toggle button
       * for the built-in column pinning UI of the`IgxColumnComponent`.
       * ```html
       * <igx-grid [pinnedColumnsText]="'PinnedCols Text" [data]="data" [width]="'100%'" [height]="'500px'"></igx-grid>
       * ```
    * @memberof IgxGridBaseComponent
       */
    pinnedColumnsText: string;
    /**
     * Get transactions service for the grid.
     */
    readonly transactions: TransactionService<Transaction, State>;
    /**
     * @hidden
    */
    columnsWithNoSetWidths: any;
    private _showToolbar;
    private _exportExcel;
    private _exportCsv;
    private _toolbarTitle;
    private _exportText;
    private _exportExcelText;
    private _exportCsvText;
    private _rowEditable;
    private _currentRowState;
    private _filteredSortedData;
    /**
     * @hidden
    */
    readonly currentRowState: any;
    /**
     * Provides access to the `IgxToolbarComponent`.
     * ```typescript
     * const gridToolbar = this.grid.toolbar;
     * ```
     * @memberof IgxGridBaseComponent
     */
    toolbar: IgxGridToolbarComponent;
    private toolbarHtml;
    /**
     * Returns whether the `IgxGridComponent`'s toolbar is shown or hidden.
     * ```typescript
     * const toolbarGrid = this.grid.showToolbar;
     * ```
     * @memberof IgxGridBaseComponent
     */
    /**
       * Shows or hides the `IgxGridComponent`'s toolbar.
       * ```html
       * <igx-grid [data]="localData" [showToolbar]="true" [autoGenerate]="true" ></igx-grid>
       * ```
    * @memberof IgxGridBaseComponent
       */
    showToolbar: boolean;
    /**
     * Returns the toolbar's title.
     * ```typescript
     * const toolbarTitle  = this.grid.toolbarTitle;
     * ```
     * @memberof IgxGridBaseComponent
     */
    /**
       * Sets the toolbar's title.
       * ```html
       * <igx-grid [data]="localData" [showToolbar]="true" [autoGenerate]="true" [toolbarTitle]="'My Grid'"></igx-grid>
       * ```
    * @memberof IgxGridBaseComponent
       */
    toolbarTitle: string;
    /**
     * Returns whether the option for exporting to MS Excel is enabled or disabled.
     * ```typescript
     * cosnt excelExporter = this.grid.exportExcel;
     * ```
     * @memberof IgxGridBaseComponent
     */
    /**
       * Enable or disable the option for exporting to MS Excel.
       * ```html
       * <igx-grid [data]="localData" [showToolbar]="true" [autoGenerate]="true" [exportExcel]="true"></igx-grid>
       * ```
    * @memberof IgxGridBaseComponent
       */
    exportExcel: boolean;
    /**
     * Returns whether the option for exporting to CSV is enabled or disabled.
     * ```typescript
     * const exportCsv = this.grid.exportCsv;
     * ```
     * @memberof IgxGridBaseComponent
     */
    /**
       * Enable or disable the option for exporting to CSV.
       * ```html
       * <igx-grid [data]="localData" [showToolbar]="true" [autoGenerate]="true" [exportCsv]="true"></igx-grid>
       * ```
    * @memberof IgxGridBaseComponent
       */
    exportCsv: boolean;
    /**
     * Returns the textual content for the main export button.
     * ```typescript
     * const exportText = this.grid.exportText;
     * ```
     * @memberof IgxGridBaseComponent
     */
    /**
       * Sets the textual content for the main export button.
       * ```html
       * <igx-grid [data]="localData" [showToolbar]="true" [exportText]="'My Exporter'" [exportCsv]="true"></igx-grid>
       * ```
    * @memberof IgxGridBaseComponent
       */
    exportText: string;
    /**
     * Returns the textual content for the MS Excel export button.
     * ```typescript
     * const excelText = this.grid.exportExcelText;
     * ```
     * @memberof IgxGridBaseComponent
     */
    /**
       * Sets the textual content for the MS Excel export button.
       * ```html
       * <igx-grid [exportExcelText]="'My Excel Exporter" [showToolbar]="true" [exportText]="'My Exporter'" [exportCsv]="true"></igx-grid>
       * ```
    * @memberof IgxGridBaseComponent
       */
    exportExcelText: string;
    /**
     * Returns the textual content for the CSV export button.
     * ```typescript
     * const csvText = this.grid.exportCsvText;
     * ```
     * @memberof IgxGridBaseComponent
     */
    /**
       * Sets the textual content for the CSV export button.
       * ```html
       * <igx-grid [exportCsvText]="'My Csv Exporter" [showToolbar]="true" [exportText]="'My Exporter'" [exportExcel]="true"></igx-grid>
       * ```
    * @memberof IgxGridBaseComponent
       */
    exportCsvText: string;
    /**
     * Controls the copy behavior of the grid.
     */
    clipboardOptions: {
        /**
         * Enables/disables the copy behavior
         */
        enabled: boolean;
        /**
         * Include the columns headers in the clipboard output.
         */
        copyHeaders: boolean;
        /**
         * Apply the columns formatters (if any) on the data in the clipboard output.
         */
        copyFormatters: boolean;
        /**
         * The separator used for formatting the copy output. Defaults to `\t`.
         */
        separator: string;
    };
    /**
     * @hidden
     */
    rowEditMessage: any;
    /**
     * Emitted when an export process is initiated by the user.
     * ```typescript
     * toolbarExporting(event: IGridToolbarExportEventArgs){
     *     const toolbarExporting = event;
     * }
     * ```
     * @memberof IgxGridBaseComponent
     */
    onToolbarExporting: EventEmitter<IGridToolbarExportEventArgs>;
    /**
     * Emitted when making a range selection either through
     * drag selection or through keyboard selection.
     */
    onRangeSelection: EventEmitter<GridSelectionRange>;
    /**
     * @hidden
     */
    pagingState: any;
    /**
     * @hidden
     */
    calcWidth: number;
    /**
     * @hidden
     */
    calcHeight: number;
    /**
     * @hidden
     */
    tfootHeight: number;
    /**
     * @hidden
     */
    chipsGoupingExpressions: any[];
    /**
     * @hidden
     */
    summariesHeight: number;
    /**
     * @hidden
     */
    draggedColumn: IgxColumnComponent;
    /**
     * @hidden
     */
    allRowsSelected: boolean;
    /**
     * @hidden
     */
    disableTransitions: boolean;
    /**
     * @hidden
     */
    lastSearchInfo: ISearchInfo;
    /**
     * @hidden
     */
    columnWidthSetByUser: boolean;
    abstract data: any[];
    abstract filteredData: any[];
    /**
     * @hidden
     */
    protected destroy$: Subject<any>;
    /**
     * @hidden
     */
    protected _perPage: number;
    /**
     * @hidden
     */
    protected _page: number;
    /**
     * @hidden
     */
    protected _paging: boolean;
    /**
     * @hidden
     */
    protected _rowSelection: boolean;
    /**
     * @hidden
     */
    protected _rowDrag: boolean;
    /**
     * @hidden
     */
    protected _pipeTrigger: number;
    /**
     * @hidden
     */
    protected _summaryPipeTrigger: number;
    /**
     * @hidden
     */
    protected _columns: IgxColumnComponent[];
    /**
     * @hidden
     */
    protected _pinnedColumns: IgxColumnComponent[];
    /**
     * @hidden
     */
    protected _unpinnedColumns: IgxColumnComponent[];
    /**
     * @hidden
     */
    protected _filteringExpressionsTree: IFilteringExpressionsTree;
    /**
     * @hidden
     */
    protected _sortingExpressions: Array<ISortingExpression>;
    /**
     * @hidden
     */
    protected _maxLevelHeaderDepth: any;
    /**
     * @hidden
     */
    protected _columnHiding: boolean;
    /**
     * @hidden
     */
    protected _columnPinning: boolean;
    /**
     * @hidden
     */
    protected _keydownListener: any;
    /**
     * @hidden
     */
    protected _vScrollListener: any;
    /**
     * @hidden
     */
    protected _hScrollListener: any;
    /**
     * @hidden
     */
    protected _wheelListener: any;
    protected _allowFiltering: boolean;
    protected _filterMode: FilterMode;
    private resizeHandler;
    private columnListDiffer;
    private _hiddenColumnsText;
    private _pinnedColumnsText;
    private _height;
    private _width;
    protected _autoSize: boolean;
    private _rowHeight;
    protected _ngAfterViewInitPassed: boolean;
    protected _baseFontSize: number;
    private _horizontalForOfs;
    private _multiRowLayoutRowSize;
    private _totalWidth;
    private _pinnedVisible;
    private _unpinnedVisible;
    private _pinnedWidth;
    private _unpinnedWidth;
    private _visibleColumns;
    private _columnGroups;
    private _columnWidth;
    protected _defaultTargetRecordNumber: number;
    protected _onFocusChange: EventEmitter<IFocusChangeEventArgs>;
    private _summaryPosition;
    private _summaryCalculationMode;
    private rowEditPositioningStrategy;
    private rowEditSettings;
    private verticalScrollHandler;
    private horizontalScrollHandler;
    /**
    * @hidden
    * @internal
    */
    hideOverlays(): void;
    private keydownHandler;
    constructor(selectionService: IgxGridSelectionService, crudService: IgxGridCRUDService, gridAPI: GridBaseAPIService<IgxGridBaseComponent & IGridDataBindable>, selection: IgxSelectionAPIService, _transactions: TransactionService<Transaction, State>, elementRef: ElementRef, zone: NgZone, document: any, cdr: ChangeDetectorRef, resolver: ComponentFactoryResolver, differs: IterableDiffers, viewRef: ViewContainerRef, navigation: IgxGridNavigationService, filteringService: IgxFilteringService, overlayService: IgxOverlayService, summaryService: IgxGridSummaryService, _displayDensityOptions: IDisplayDensityOptions);
    _setupServices(): void;
    ngOnChanges(changes: SimpleChanges): void;
    _setupListeners(): void;
    /**
     * @hidden
     */
    ngOnInit(): void;
    protected setupColumns(): void;
    /**
     * @hidden
     * @internal
     */
    resetColumnsCaches(): void;
    /**
     * @hidden
     * @internal
     */
    resetForOfCache(): void;
    /**
     * @hidden
     * @internal
     */
    resetColumnCollections(): void;
    /**
     * @hidden
     * @internal
     */
    resetCachedWidths(): void;
    /**
     * @hidden
     * @internal
     */
    resetCaches(): void;
    /**
     * @hidden
     */
    ngAfterContentInit(): void;
    /**
     * @hidden
     */
    ngAfterViewInit(): void;
    private combineForOfCollections;
    /**
     * @hidden
     */
    ngOnDestroy(): void;
    /**
     * @hidden
     */
    dataLoading(event: any): void;
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
    toggleColumnVisibility(args: IColumnVisibilityChangedEventArgs): void;
    /**
     * Returns the native element of the `IgxGridComponent`.
     * ```typescript
     * const nativeEl = this.grid.nativeElement.
     * ```
     * @memberof IgxGridBaseComponent
     */
    readonly nativeElement: any;
    /**
     * @hidden
     */
    protected readonly outlet: IgxOverlayOutletDirective;
    /**
     * Returns the `IgxGridComponent`'s rows height.
     * ```typescript
     * const rowHeigh = this.grid.defaultRowHeight;
     * ```
     * @memberof IgxGridBaseComponent
     */
    readonly defaultRowHeight: number;
    readonly defaultSummaryHeight: number;
    /**
     * Returns the `IgxGridHeaderGroupComponent`'s minimum allowed width.
     * Used internally for restricting header group component width.
     * The values below depend on the header cell default right/left padding values.
     * @memberof IgxGridBaseComponent
     */
    readonly defaultHeaderGroupMinWidth: number;
    paginatorClassName(): string;
    paginatorSelectDisplayDensity(): string;
    /**
     * Returns the maximum width of the container for the pinned `IgxColumnComponent`s.
     * The width is 80% of the total grid width.
     * ```typescript
     * const maxPinnedColWidth = this.grid.calcPinnedContainerMaxWidth;
     * ```
     * @memberof IgxGridBaseComponent
     */
    readonly calcPinnedContainerMaxWidth: number;
    /**
     * Returns the minimum width of the container for the unpinned `IgxColumnComponent`s.
     * The width is 20% of the total grid width.
     * ```typescript
     * const minUnpinnedColWidth = this.grid.unpinnedAreaMinWidth;
     * ```
     * @memberof IgxGridBaseComponent
     */
    readonly unpinnedAreaMinWidth: number;
    /**
     * Returns the current width of the container for the pinned `IgxColumnComponent`s.
     * ```typescript
     * const pinnedWidth = this.grid.getPinnedWidth;
     * ```
     * @memberof IgxGridBaseComponent
     */
    readonly pinnedWidth: number;
    /**
     * Returns the current width of the container for the unpinned `IgxColumnComponent`s.
     * ```typescript
     * const unpinnedWidth = this.grid.getUnpinnedWidth;
     * ```
     * @memberof IgxGridBaseComponent
     */
    readonly unpinnedWidth: number;
    /**
     * @hidden
     * Gets the combined width of the columns that are specific to the enabled grid features. They are fixed.
     * TODO: Update for Angular 8. Calling parent class getter using super is not supported for now.
     */
    readonly featureColumnsWidth: number;
    /**
     * @hidden
     */
    readonly summariesMargin: number;
    /**
     * Returns an array of `IgxColumnComponent`s.
     * ```typescript
     * const colums = this.grid.columns.
     * ```
     * @memberof IgxGridBaseComponent
     */
    readonly columns: IgxColumnComponent[];
    /**
     * Returns an array of the pinned `IgxColumnComponent`s.
     * ```typescript
     * const pinnedColumns = this.grid.pinnedColumns.
     * ```
     * @memberof IgxGridBaseComponent
     */
    readonly pinnedColumns: IgxColumnComponent[];
    /**
     * Returns an array of unpinned `IgxColumnComponent`s.
     * ```typescript
     * const unpinnedColumns = this.grid.unpinnedColumns.
     * ```
     * @memberof IgxGridBaseComponent
     */
    readonly unpinnedColumns: IgxColumnComponent[];
    /**
     * Returns the `width` to be set on `IgxGridHeaderGroupComponent`.
     * @memberof IgxGridBaseComponent
     */
    getHeaderGroupWidth(column: IgxColumnComponent): string;
    /**
     * Returns the `IgxColumnComponent` by field name.
     * ```typescript
     * const myCol = this.grid1.getColumnByName("ID");
     * ```
     * @param name
     * @memberof IgxGridBaseComponent
     */
    getColumnByName(name: string): IgxColumnComponent;
    /**
     * Returns the `IgxColumnComponent` by index.
     * ```typescript
     * const myRow = this.grid1.getRowByIndex(1);
     * ```
     * @param index
     * @memberof IgxGridBaseComponent
     */
    getRowByIndex(index: number): IgxRowComponent<IgxGridBaseComponent & IGridDataBindable>;
    /**
     * Returns `IgxGridRowComponent` object by the specified primary key .
     * Requires that the `primaryKey` property is set.
     * ```typescript
     * const myRow = this.grid1.getRowByKey("cell5");
     * ```
     * @param keyValue
     * @memberof IgxGridBaseComponent
     */
    getRowByKey(keyValue: any): IgxRowComponent<IgxGridBaseComponent & IGridDataBindable>;
    /**
     * Returns an array of visible `IgxColumnComponent`s.
     * ```typescript
     * const visibleColumns = this.grid.visibleColumns.
     * ```
     * @memberof IgxGridBaseComponent
     */
    readonly visibleColumns: IgxColumnComponent[];
    /**
     * Returns the `IgxGridCellComponent` that matches the conditions.
     * ```typescript
     * const myCell = this.grid1.getCellByColumn(2,"UnitPrice");
     * ```
     * @param rowIndex
     * @param columnField
     * @memberof IgxGridBaseComponent
     */
    getCellByColumn(rowIndex: number, columnField: string): IgxGridCellComponent;
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
    getCellByKey(rowSelector: any, columnField: string): IgxGridCellComponent;
    /**
     * Returns the total number of pages.
     * ```typescript
     * const totalPages = this.grid.totalPages;
     * ```
     * @memberof IgxGridBaseComponent
     */
    readonly totalPages: number;
    /**
     * Returns if the current page is the first page.
     * ```typescript
     * const firstPage = this.grid.isFirstPage;
     * ```
     * @memberof IgxGridBaseComponent
     */
    readonly isFirstPage: boolean;
    /**
     * Goes to the next page of the `IgxGridComponent`, if the grid is not already at the last page.
     * ```typescript
     * this.grid1.nextPage();
     * ```
     * @memberof IgxGridBaseComponent
     */
    nextPage(): void;
    /**
     * Goes to the previous page of the `IgxGridComponent`, if the grid is not already at the first page.
     * ```typescript
     * this.grid1.previousPage();
     * ```
     * @memberof IgxGridBaseComponent
     */
    previousPage(): void;
    /**
     * Returns the total number of records.
     * Only functions when paging is enabled.
     * ```typescript
     * const totalRecords = this.grid.totalRecords;
     * ```
     * @memberof IgxGridBaseComponent
     */
    readonly totalRecords: number;
    /**
     * Returns if the current page is the last page.
     * ```typescript
     * const lastPage = this.grid.isLastPage;
     * ```
     * @memberof IgxGridBaseComponent
     */
    readonly isLastPage: boolean;
    /**
     * Returns the total width of the `IgxGridComponent`.
     * ```typescript
     * const gridWidth = this.grid.totalWidth;
     * ```
     * @memberof IgxGridBaseComponent
     */
    readonly totalWidth: number;
    readonly showRowCheckboxes: boolean;
    /**
     * @hidden
     */
    protected _moveColumns(from: IgxColumnComponent, to: IgxColumnComponent, pos: DropPosition): void;
    /**
     * @hidden
     */
    protected _resetColumnList(list?: any): any[];
    /**
     * @hidden
     */
    protected _reorderPinnedColumns(from: IgxColumnComponent, to: IgxColumnComponent, position: DropPosition): void;
    /**
     * @hidden
     */
    protected _moveChildColumns(parent: IgxColumnComponent, from: IgxColumnComponent, to: IgxColumnComponent, pos: DropPosition): void;
    /**
     * Moves a column to the specified drop target.
     * ```typescript
     * grid.moveColumn(compName, persDetails);
     * ```
      * @memberof IgxGridBaseComponent
      */
    moveColumn(column: IgxColumnComponent, dropTarget: IgxColumnComponent, pos?: DropPosition): void;
    /**
     * Goes to the desired page index.
     * ```typescript
     * this.grid1.paginate(1);
     * ```
     * @param val
     * @memberof IgxGridBaseComponent
     */
    paginate(val: number): void;
    /**
     * Manually marks the `IgxGridComponent` for change detection.
     * ```typescript
     * this.grid1.markForCheck();
     * ```
     * @memberof IgxGridBaseComponent
     */
    markForCheck(): void;
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
    addRow(data: any): void;
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
    deleteRow(rowSelector: any): void;
    /** @hidden */
    deleteRowById(rowId: any): void;
    /**
     * @hidden
     */
    protected deleteRowFromData(rowID: any, index: number): void;
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
    updateCell(value: any, rowSelector: any, column: string): void;
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
    updateRow(value: any, rowSelector: any): void;
    /**
     * Sort a single `IgxColumnComponent`.
     * Sort the `IgxGridComponent`'s `IgxColumnComponent` based on the provided array of sorting expressions.
     * ```typescript
     * this.grid.sort({ fieldName: name, dir: SortingDirection.Asc, ignoreCase: false });
     * ```
     * @memberof IgxGridBaseComponent
     */
    sort(expression: ISortingExpression | Array<ISortingExpression>): void;
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
    filter(name: string, value: any, conditionOrExpressionTree?: IFilteringOperation | IFilteringExpressionsTree, ignoreCase?: boolean): void;
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
    filterGlobal(value: any, condition: any, ignoreCase?: any): void;
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
    enableSummaries(...rest: any[]): void;
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
    disableSummaries(...rest: any[]): void;
    /**
     * If name is provided, clears the filtering state of the corresponding `IgxColumnComponent`,
     * otherwise clears the filtering state of all `IgxColumnComponent`s.
     * ```typescript
     * this.grid.clearFilter();
     * ```
     * @param name
     * @memberof IgxGridBaseComponent
     */
    clearFilter(name?: string): void;
    /**
     * If name is provided, clears the sorting state of the corresponding `IgxColumnComponent`,
     * otherwise clears the sorting state of all `IgxColumnComponent`.
     * ```typescript
     * this.grid.clearSort();
     * ```
     * @param name
     * @memberof IgxGridBaseComponent
     */
    clearSort(name?: string): void;
    /**
     * @hidden
     */
    refreshGridState(args?: any): void;
    /**
     * Pins a column by field name. Returns whether the operation is successful.
     * ```typescript
     * this.grid.pinColumn("ID");
     * ```
     * @param columnName
     * @param index
     * @memberof IgxGridBaseComponent
     */
    pinColumn(columnName: string | IgxColumnComponent, index?: any): boolean;
    /**
     * Unpins a column by field name. Returns whether the operation is successful.
     * ```typescript
     * this.grid.pinColumn("ID");
     * ```
     * @param columnName
     * @param index
     * @memberof IgxGridBaseComponent
     */
    unpinColumn(columnName: string | IgxColumnComponent, index?: any): boolean;
    /**
     * Recalculates grid width/height dimensions. Should be run when changing DOM elements dimentions manually that affect the grid's size.
     * ```typescript
     * this.grid.reflow();
     * ```
     * @memberof IgxGridBaseComponent
     */
    reflow(): void;
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
    findNext(text: string, caseSensitive?: boolean, exactMatch?: boolean): number;
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
    findPrev(text: string, caseSensitive?: boolean, exactMatch?: boolean): number;
    /**
     * Reapplies the existing search.
     * Returns how many times the grid contains the last search.
     * ```typescript
     * this.grid.refreshSearch();
     * ```
     * @param updateActiveInfo
     * @memberof IgxGridBaseComponent
     */
    refreshSearch(updateActiveInfo?: boolean): number;
    /**
     * Removes all the highlights in the cell.
     * ```typescript
     * this.grid.clearSearch();
     * ```
     * @memberof IgxGridBaseComponent
     */
    clearSearch(): void;
    /**
     * Returns if the `IgxGridComponent` has sortable columns.
     * ```typescript
     * const sortableGrid = this.grid.hasSortableColumns;
     * ```
     * @memberof IgxGridBaseComponent
     */
    readonly hasSortableColumns: boolean;
    /**
     * Returns if the `IgxGridComponent` has editable columns.
     * ```typescript
     * const editableGrid = this.grid.hasEditableColumns;
     * ```
     * @memberof IgxGridBaseComponent
     */
    readonly hasEditableColumns: boolean;
    /**
     * Returns if the `IgxGridComponent` has fiterable columns.
     * ```typescript
     * const filterableGrid = this.grid.hasFilterableColumns;
     * ```
     * @memberof IgxGridBaseComponent
     */
    readonly hasFilterableColumns: boolean;
    /**
     * Returns if the `IgxGridComponent` has summarized columns.
     * ```typescript
     * const summarizedGrid = this.grid.hasSummarizedColumns;
     * ```
     * @memberof IgxGridBaseComponent
     */
    readonly hasSummarizedColumns: boolean;
    /**
     * @hidden
     */
    readonly rootSummariesEnabled: boolean;
    /**
     * Returns if the `IgxGridComponent` has moveable columns.
     * ```typescript
     * const movableGrid = this.grid.hasMovableColumns;
     * ```
     * @memberof IgxGridBaseComponent
     */
    readonly hasMovableColumns: boolean;
    /**
     * Returns if the `IgxGridComponent` has column groups.
     * ```typescript
     * const groupGrid = this.grid.hasColumnGroups;
     * ```
     * @memberof IgxGridBaseComponent
     */
    readonly hasColumnGroups: boolean;
    /**
     * Returns if the `IgxGridComponent` has column layouts for multi-row layout definition.
     * ```typescript
     * const layoutGrid = this.grid.hasColumnLayouts;
     * ```
     * @memberof IgxGridBaseComponent
     */
    readonly hasColumnLayouts: boolean;
    /**
     * Returns an array of the selected `IgxGridCellComponent`s.
     * ```typescript
     * const selectedCells = this.grid.selectedCells;
     * ```
     * @memberof IgxGridBaseComponent
     */
    readonly selectedCells: IgxGridCellComponent[] | any[];
    /**
     * @hidden
     */
    readonly multiRowLayoutRowSize: number;
    /**
     * @hidden
     */
    protected readonly rowBasedHeight: number;
    /**
     * @hidden
     */
    protected readonly isPercentWidth: boolean;
    /**
     * @hidden @internal
     */
    readonly isPercentHeight: boolean;
    /**
     * @hidden
     * Sets columns defaultWidth property
     */
    protected _derivePossibleWidth(): void;
    /**
     * @hidden
     */
    protected readonly defaultTargetBodyHeight: number;
    /**
     * @hidden @internal
     * The rowHeight input is bound to min-height css prop of rows that adds a 1px border in all cases
     */
    readonly renderedRowHeight: number;
    /**
     * @hidden
     * Sets TBODY height i.e. this.calcHeight
     */
    protected calculateGridHeight(): void;
    /**
     * @hidden
     */
    protected getGroupAreaHeight(): number;
    /**
     * @hidden
     */
    protected getToolbarHeight(): number;
    /**
     * @hidden
     */
    protected getPagingHeight(): number;
    /**
     * @hidden
     */
    protected _calculateGridBodyHeight(): number;
    readonly outerWidth: number;
    /**
     * @hidden
     * Gets the visible content height that includes header + tbody + footer.
     */
    getVisibleContentHeight(): any;
    /**
     * @hidden
     */
    getPossibleColumnWidth(baseWidth?: number): string;
    /**
     * @hidden
     * Sets grid width i.e. this.calcWidth
     */
    protected calculateGridWidth(): void;
    hasVerticalSroll(): boolean;
    /**
     * @hidden @internal
     */
    protected getDataBasedBodyHeight(): number;
    /**
     * @hidden
     */
    protected onColumnsChanged(change: QueryList<IgxColumnComponent>): void;
    /**
     * @hidden
     */
    protected calculateGridSizes(): void;
    /**
     * @hidden
     * Gets the combined width of the columns that are specific to the enabled grid features. They are fixed.
     * Method used to override the calculations.
     * TODO: Remove for Angular 8. Calling parent class getter using super is not supported for now.
     */
    getFeatureColumnsWidth(): number;
    /**
     * Gets calculated width of the pinned area.
     * ```typescript
     * const pinnedWidth = this.grid.getPinnedWidth();
     * ```
     * @param takeHidden If we should take into account the hidden columns in the pinned area.
     * @memberof IgxGridBaseComponent
     */
    getPinnedWidth(takeHidden?: boolean): number;
    /**
     * @hidden
     * Gets calculated width of the unpinned area
     * @param takeHidden If we should take into account the hidden columns in the pinned area.
     * @memberof IgxGridBaseComponent
     */
    protected getUnpinnedWidth(takeHidden?: boolean): number;
    /**
     * @hidden
     */
    protected _summaries(fieldName: string, hasSummary: boolean, summaryOperand?: any): void;
    /**
     * @hidden
     */
    protected _multipleSummaries(expressions: ISummaryExpression[], hasSummary: boolean): void;
    /**
     * @hidden
     */
    protected _disableMultipleSummaries(expressions: any): void;
    /**
     * @hidden
     */
    protected resolveDataTypes(rec: any): DataType;
    private getScrollWidth;
    /**
     * @hidden
     */
    protected autogenerateColumns(): void;
    protected generateDataFields(data: any[]): string[];
    /**
     * @hidden
     */
    onlyTopLevel(arr: any): any;
    /**
     * @hidden
     */
    protected initColumns(collection: QueryList<IgxColumnComponent>, cb?: Function): void;
    /**
     * @hidden
     */
    protected reinitPinStates(): void;
    /**
     * @hidden
     */
    isColumnGrouped(fieldName: string): boolean;
    /**
     * @hidden
     */
    onHeaderCheckboxClick(event: any, filteredData: any): void;
    /**
     * @hidden
     */
    readonly headerCheckboxAriaLabel: "Deselect all filtered" | "Select all filtered" | "Deselect all" | "Select all";
    /**
     * @hidden
     */
    checkHeaderCheckboxStatus(headerStatus?: boolean): void;
    /**
     * @hidden
     */
    filteredItemsStatus(componentID: string, filteredData: any[], primaryKey?: any): "indeterminate" | "allSelected" | "noneSelected";
    /**
     * @hidden
     */
    updateHeaderCheckboxStatusOnFilter(data: any): void;
    /**
     * Get current selection state.
     * Returns an array with selected rows' IDs (primaryKey or rowData)
     * ```typescript
     * const selectedRows = this.grid.selectedRows();
     * ```
     * @memberof IgxGridBaseComponent
     */
    selectedRows(): any[];
    /**
     * Select specified rows by ID.
     * ```typescript
     * this.grid.selectRows([1,2,5], true);
     * ```
     * @param rowIDs
     * @param clearCurrentSelection if true clears the current selection
     * @memberof IgxGridBaseComponent
     */
    selectRows(rowIDs: any[], clearCurrentSelection?: boolean): void;
    /**
     * Deselect specified rows by ID.
     * ```typescript
     * this.grid.deselectRows([1,2,5]);
     * ```
     * @param rowIDs
     * @memberof IgxGridBaseComponent
     */
    deselectRows(rowIDs: any[]): void;
    /**
     * Selects all rows
     * Note: If filtering is in place, selectAllRows() and deselectAllRows() select/deselect all filtered rows.
     * ```typescript
     * this.grid.selectAllRows();
     * ```
     * @memberof IgxGridBaseComponent
     */
    selectAllRows(): void;
    /**
     * Deselects all rows
     * ```typescript
     * this.grid.deselectAllRows();
     * ```
     * Note: If filtering is in place, selectAllRows() and deselectAllRows() select/deselect all filtered rows.
     */
    deselectAllRows(): void;
    clearCellSelection(): void;
    dragScroll(dir: DragScrollDirection): void;
    isDefined(arg: any): boolean;
    selectRange(arg: GridSelectionRange | GridSelectionRange[] | null | undefined): void;
    columnToVisibleIndex(field: string | number): number;
    setSelection(range: GridSelectionRange): void;
    getSelectedRanges(): GridSelectionRange[];
    protected extractDataFromSelection(source: any[], formatters?: boolean, headers?: boolean): any[];
    protected getSelectableColumnsAt(index: any): IgxColumnComponent[];
    /**
     *
     * Returns an array of the current cell selection in the form of `[{ column.field: cell.value }, ...]`.
     * If `formatters` is enabled, the cell value will be formatted by its respective column formatter (if any).
     * If `headers` is enabled, it will use the column header (if any) instead of the column field.
     */
    getSelectedData(formatters?: boolean, headers?: boolean): any[];
    /**
     * @hidden
     */
    triggerRowSelectionChange(newSelectionAsSet: Set<any>, row?: IgxRowComponent<IgxGridBaseComponent & IGridDataBindable>, event?: Event, headerStatus?: boolean): void;
    /**
     * @hidden
     */
    scrollHandler(event: any): void;
    copyHandlerIE(): void;
    /**
     * @hidden
     * @internal
     */
    copyHandler(event: any, ie11?: boolean): void;
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
    navigateTo(rowIndex: number, visibleColIndex?: number, cb?: Function): void;
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
    getNextCell(currRowIndex: number, curVisibleColIndex: number, callback?: (IgxColumnComponent: any) => boolean): ICellPosition;
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
    getPreviousCell(currRowIndex: number, curVisibleColIndex: number, callback?: (IgxColumnComponent: any) => boolean): ICellPosition;
    private executeCallback;
    private getPrevDataRowIndex;
    private getNextDataRowIndex;
    private isValidPosition;
    /**
     * @hidden
     */
    wheelHandler(isScroll?: boolean): void;
    /**
     * @hidden
     */
    trackColumnChanges(index: any, col: any): any;
    private find;
    /**
     * Returns an array containing the filtered sorted data.
     * ```typescript
     * const filteredSortedData = this.grid1.filteredSortedData;
     * ```
     * @memberof IgxGridBaseComponent
     */
    filteredSortedData: any[];
    /**
     * @hidden
     */
    protected initPinning(): void;
    /**
     * @hidden
     */
    protected scrollTo(row: any | number, column: any | number, inCollection?: any[]): void;
    /**
     * @hidden
     */
    protected scrollToHorizontally(column: any | number): void;
    /**
     * @hidden
     */
    protected scrollDirective(directive: IgxGridForOfDirective<any>, goal: number): void;
    private rebuildMatchCache;
    /**
     * @hidden
     */
    isExpandedGroup(_group: IGroupByRecord): boolean;
    protected changeRowEditingOverlayStateOnScroll(row: IgxRowComponent<IgxGridBaseComponent & IGridDataBindable>): void;
    openRowOverlay(id: any): void;
    /**
     * @hidden
     */
    closeRowEditingOverlay(): void;
    /**
     * @hidden
     */
    toggleRowEditingOverlay(show: any): void;
    /**
     * @hidden
     */
    repositionRowEditingOverlay(row: IgxRowComponent<IgxGridBaseComponent & IGridDataBindable>): void;
    private configureRowEditingOverlay;
    /**
     * @hidden
     */
    readonly rowChangesCount: number;
    protected writeToData(rowIndex: number, value: any): void;
    endRowTransaction(commit: boolean, row: IgxRow): void;
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
    endEdit(commit?: boolean, event?: Event): void;
    /**
     * @hidden
     */
    private rowEditingWheelHandler;
    /**
     * @hidden
     */
    readonly dataWithAddedInTransactionRows: any;
    readonly dataLength: any;
    hasHorizontalScroll(): boolean;
    protected _restoreVirtState(row: any): void;
    /**
     * @hidden
     */
    protected getExportExcel(): boolean;
    /**
     * @hidden
     */
    protected getExportCsv(): boolean;
    /**
    * @hidden
    */
    isSummaryRow(rowData: any): boolean;
    /**
     * @hidden
     */
    protected readonly isAttachedToDom: boolean;
    /**
     * @hidden
     */
    cachedViewLoaded(args: ICachedViewLoadedEventArgs): void;
}
