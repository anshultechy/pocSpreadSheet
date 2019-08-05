import { AfterContentInit, ChangeDetectorRef, QueryList, TemplateRef } from '@angular/core';
import { DataType } from '../data-operations/data-util';
import { GridBaseAPIService } from './api.service';
import { IgxGridCellComponent } from './cell.component';
import { IgxCellEditorTemplateDirective, IgxCellHeaderTemplateDirective, IgxCellTemplateDirective, IgxFilterCellTemplateDirective } from './grid.common';
import { IgxGridHeaderComponent } from './grid-header.component';
import { ISortingStrategy } from '../data-operations/sorting-strategy';
import { IgxFilteringOperand } from '../data-operations/filtering-condition';
import { IgxGridBaseComponent, IGridDataBindable } from './grid-base.component';
import { FilteringExpressionsTree } from '../data-operations/filtering-expressions-tree';
import { IgxGridFilteringCellComponent } from './filtering/grid-filtering-cell.component';
import { IgxGridHeaderGroupComponent } from './grid-header-group.component';
import { MRLColumnSizeInfo, MRLResizeColumnInfo } from '../data-operations/multi-row-layout.interfaces';
/**
 * **Ignite UI for Angular Column** -
 * [Documentation](https://www.infragistics.com/products/ignite-ui-angular/angular/components/grid.html#columns-configuration)
 *
 * The Ignite UI Column is used within an `igx-grid` element to define what data the column will show. Features such as sorting,
 * filtering & editing are enabled at the column level.  You can also provide a template containing custom content inside
 * the column using `ng-template` which will be used for all cells within the column.
 */
export declare class IgxColumnComponent implements AfterContentInit {
    gridAPI: GridBaseAPIService<IgxGridBaseComponent & IGridDataBindable>;
    cdr: ChangeDetectorRef;
    private _filterable;
    private _groupable;
    /**
     * Sets/gets the `field` value.
     * ```typescript
     * let columnField = this.column.field;
     * ```
     * ```html
     * <igx-column [field] = "'ID'"></igx-column>
     * ```
     * @memberof IgxColumnComponent
     */
    field: string;
    /**
     * Sets/gets the `header` value.
     * ```typescript
     * let columnHeader = this.column.header;
     * ```
     * ```html
     * <igx-column [header] = "'ID'"></igx-column>
     * ```
     *
     * @memberof IgxColumnComponent
     */
    header: string;
    /**
     * Sets/gets whether the column is sortable.
     * Default value is `false`.
     * ```typescript
     * let isSortable = this.column.sortable;
     * ```
     * ```html
     * <igx-column [sortable] = "true"></igx-column>
     * ```
     * @memberof IgxColumnComponent
     */
    sortable: boolean;
    /**
     * Sets/gets whether the column is groupable.
     * Default value is `false`.
     * ```typescript
     * let isGroupable = this.column.groupable;
     * ```
     * ```html
     * <igx-column [groupable] = "true"></igx-column>
     * ```
     * @memberof IgxColumnComponent
     */
    groupable: boolean;
    /**
     * Gets whether the column is editable.
     * Default value is `false`.
     * ```typescript
     * let isEditable = this.column.editable;
     * ```
     * @memberof IgxColumnComponent
     */
    /**
    * Sets whether the column is editable.
    * ```typescript
    * this.column.editable = true;
    * ```
    * ```html
    * <igx-column [editable] = "true"></igx-column>
    * ```
    * @memberof IgxColumnComponent
    */
    editable: boolean;
    /**
     * Sets/gets whether the column is filterable.
     * Default value is `true`.
     * ```typescript
     * let isFilterable = this.column.filterable;
     * ```
     * ```html
     * <igx-column [filterable] = "false"></igx-column>
     * ```
     * @memberof IgxColumnComponent
     */
    filterable: boolean;
    /**
     * Sets/gets whether the column is resizable.
     * Default value is `false`.
     * ```typescript
     * let isResizable = this.column.resizable;
     * ```
     * ```html
     * <igx-column [resizable] = "true"></igx-column>
     * ```
     * @memberof IgxColumnComponent
     */
    resizable: boolean;
    /**
     * Gets a value indicating whether the summary for the column is enabled.
     * ```typescript
     * let hasSummary = this.column.hasSummary;
     * ```
     * @memberof IgxColumnComponent
     */
    /**
    * Sets a value indicating whether the summary for the column is enabled.
    * Default value is `false`.
    * ```html
    * <igx-column [hasSummary] = "true"></igx-column>
    * ```
    * @memberof IgxColumnComponent
    */
    hasSummary: boolean;
    /**
     * Gets whether the column is hidden.
     * ```typescript
     * let isHidden = this.column.hidden;
     * ```
     *@memberof IgxColumnComponent
     */
    /**
    * Sets the column hidden property.
    * Default value is `false`.
    * ```typescript
    * <igx-column [hidden] = "true"></igx-column>
    * ```
    * @memberof IgxColumnComponent
    */
    hidden: boolean;
    /**
     * Gets whether the hiding is disabled.
     * ```typescript
     * let isHidingDisabled =  this.column.disableHiding;
     * ```
     * @memberof IgxColumnComponent
     */
    /**
    * Enables/disables hiding for the column.
    * Default value is `false`.
    * ```typescript
    * <igx-column [hidden] = "true"></igx-column>
    * ```
    * @memberof IgxColumnComponent
    */
    disableHiding: boolean;
    /**
     * Gets whether the pinning is disabled.
     * ```typescript
     * let isPinningDisabled =  this.column.disablePinning;
     * ```
     * @memberof IgxColumnComponent
     */
    /**
    * Enables/disables pinning for the column.
    * Default value is `false`.
    * ```typescript
    * <igx-column [pinned] = "true"></igx-column>
    * ```
    * @memberof IgxColumnComponent
    */
    disablePinning: boolean;
    /**
     * Sets/gets whether the column is movable.
     * Default value is `false`.
     * ```typescript
     * let isMovable = this.column.movable;
     * ```
     * ```html
     * <igx-column [movable] = "true"></igx-column>
     * ```
     * @memberof IgxColumnComponent
     */
    movable: boolean;
    /**
     * Gets the `width` of the column.
     * ```typescript
     * let columnWidth = this.column.width;
     * ```
     * @memberof IgxColumnComponent
     */
    /**
    * Sets the `width` of the column.
    * ```html
    * <igx-column [width] = "'25%'"></igx-column>
    * ```
    * @memberof IgxColumnComponent
    */
    width: string;
    /**
     * @hidden
     */
    readonly calcWidth: any;
    private _calcWidth;
    calcPixelWidth: number;
    /**
     * Sets/gets the maximum `width` of the column.
     * ```typescript
     * let columnMaxWidth = this.column.width;
     * ```
     * ```html
     * <igx-column [maxWidth] = "'75%'"></igx-column>
     * ```
     * @memberof IgxColumnComponent
     */
    maxWidth: string;
    /**
     * Sets/gets the minimum `width` of the column.
     * Default value is `88`;
     * ```typescript
     * let columnMinWidth = this.column.minWidth;
     * ```
     * ```html
     * <igx-column [minWidth] = "'15%'"></igx-column>
     * ```
     * @memberof IgxColumnComponent
     */
    minWidth: string;
    /**
     * Sets/gets the class selector of the column header.
     * ```typescript
     * let columnHeaderClass = this.column.headerClasses;
     * ```
     * ```html
     * <igx-column [headerClasses] = "'column-header'"></igx-column>
     * ```
     * @memberof IgxColumnComponent
     */
    headerClasses: string;
    /**
     * Sets/gets the class selector of the column group header.
     * ```typescript
     * let columnHeaderClass = this.column.headerGroupClasses;
     * ```
     * ```html
     * <igx-column [headerGroupClasses] = "'column-group-header'"></igx-column>
     * ```
     * @memberof IgxColumnComponent
     */
    headerGroupClasses: string;
    /**
     * Sets a conditional class selector of the column cells.
     * Accepts an object literal, containing key-value pairs,
     * where the key is the name of the CSS class, while the
     * value is either a callback function that returns a boolean,
     * or boolean, like so:
     * ```typescript
     * callback = (rowData, columnKey) => { return rowData[columnKey] > 6; }
     * cellClasses = { 'className' : this.callback };
     * ```
     * ```html
     * <igx-column [cellClasses] = "cellClasses"></igx-column>
     * <igx-column [cellClasses] = "{'class1' : true }"></igx-column>
     * ```
     * @memberof IgxColumnComponent
     */
    cellClasses: any;
    /**
     * Gets the column index.
     * ```typescript
     * let columnIndex = this.column.index;
     * ```
     * @memberof IgxColumnComponent
     */
    readonly index: number;
    /**
     * When autogenerating columns, the formatter is used to format the display of the column data
     * without modifying the underlying bound values.
     *
     * In this example, we check to see if the column name is Salary, and then provide a method as the column formatter
     * to format the value into a currency string.
     *
     * ```typescript
     * onColumnInit(column: IgxColumnComponent) {
     *   if (column.field == "Salary") {
     *     column.formatter = (salary => this.format(salary));
     *   }
     * }
     *
     * format(value: number) : string {
     *   return formatCurrency(value, "en-us", "$");
     * }
     * ```
     * @memberof IgxColumnComponent
     */
    formatter: (value: any) => any;
    /**
     * Sets/gets whether the column filtering should be case sensitive.
     * Default value is `true`.
     * ```typescript
     * let filteringIgnoreCase = this.column.filteringIgnoreCase;
     * ```
     * ```html
     * <igx-column [filteringIgnoreCase] = "false"></igx-column>
     * ```
     * @memberof IgxColumnComponent
     */
    filteringIgnoreCase: boolean;
    /**
     * Sets/gets whether the column sorting should be case sensitive.
     * Default value is `true`.
     * ```typescript
     * let sortingIgnoreCase = this.column.sortingIgnoreCase;
     * ```
     * ```html
     * <igx-column [sortingIgnoreCase] = "false"></igx-column>
     * ```
     * @memberof IgxColumnComponent
     */
    sortingIgnoreCase: boolean;
    /**
     * Sets/gets the data type of the column values.
     * Default value is `string`.
     * ```typescript
     * let columnDataType = this.column.dataType;
     * ```
     * ```html
     * <igx-column [dataType] = "'number'"></igx-column>
     * ```
     * @memberof IgxColumnComponent
     */
    dataType: DataType;
    /**
     * Gets whether the column is `pinned`.
     * ```typescript
     * let isPinned = this.column.pinned;
     * ```
     * @memberof IgxColumnComponent
     */
    /**
    * Sets whether the column is pinned.
    * Default value is `false`.
    * ```html
    * <igx-column [pinned] = "true"></igx-column>
    * ```
    * @memberof IgxColumnComponent
    */
    pinned: boolean;
    /**
     * @deprecated
     * Gets/Sets the `id` of the `igx-grid`.
     * ```typescript
     * let columnGridId = this.column.gridID;
     * ```
     * ```typescript
     * this.column.gridID = 'grid-1';
     * ```
     * @memberof IgxColumnComponent
     */
    gridID: string;
    /**
     * Gets the column `summaries`.
     * ```typescript
     * let columnSummaries = this.column.summaries;
     * ```
     * @memberof IgxColumnComponent
     */
    /**
    * Sets the column `summaries`.
    * ```typescript
    * this.column.summaries = IgxNumberSummaryOperand;
    * ```
    * @memberof IgxColumnComponent
    */
    summaries: any;
    /**
     * Sets/gets whether the column is `searchable`.
     * Default value is `true`.
     * ```typescript
     * let isSearchable =  this.column.searchable';
     * ```
     * ```html
     *  <igx-column [searchable] = "false"></igx-column>
     * ```
     * @memberof IgxColumnComponent
     */
    searchable: boolean;
    /**
     * Gets the column `filters`.
     * ```typescript
     * let columnFilters = this.column.filters'
     * ```
     * @memberof IgxColumnComponent
     */
    /**
    * Sets the column `filters`.
    * ```typescript
    * this.column.filters = IgxBooleanFilteringOperand.instance().
    * ```
    * @memberof IgxColumnComponent
    */
    filters: IgxFilteringOperand;
    /**
     * Gets the column `sortStrategy`.
     * ```typescript
     * let sortStrategy = this.column.sortStrategy'
     * ```
     * @memberof IgxColumnComponent
     */
    /**
    * Sets the column `sortStrategy`.
    * ```typescript
    * this.column.sortStrategy = new CustomSortingStrategy().
    *
    * class CustomSortingStrategy extends SortingStrategy {
    * ...
    * }
    * ```
    * @memberof IgxColumnComponent
    */
    sortStrategy: ISortingStrategy;
    /**
    * Gets the function that compares values for grouping.
    * ```typescript
    * let groupingComparer = this.column.groupingComparer'
    * ```
    * @memberof IgxColumnComponent
    */
    /**
    * Sets a custom function to compare values for grouping.
    * Subsequent values in the sorted data that the function returns 0 for are grouped.
    * ```typescript
    * this.column.groupingComparer = (a: any, b: any) => { return a === b ? 0 : -1; }
    * ```
    * @memberof IgxColumnComponent
    */
    groupingComparer: (a: any, b: any) => number;
    /**
     * Gets the default minimum `width` of the column.
     * ```typescript
     * let defaultMinWidth =  this.column.defaultMinWidth;
     * ```
     * @memberof IgxColumnComponent
     */
    readonly defaultMinWidth: string;
    /**
     * The reference to the `igx-grid` owner.
     * ```typescript
     * let gridComponent = this.column.grid;
     * ```
     * @memberof IgxColumnComponent
     */
    grid: IgxGridBaseComponent;
    /**
     * Returns a reference to the `bodyTemplate`.
     * ```typescript
     * let bodyTemplate = this.column.bodyTemplate;
     * ```
     * @memberof IgxColumnComponent
     */
    /**
    * Sets the body template.
    * ```html
    * <ng-template #bodyTemplate igxCell let-val>
    *    <div style = "background-color: yellowgreen" (click) = "changeColor(val)">
    *       <span> {{val}} </span>
    *    </div>
    * </ng-template>
    * ```
    * ```typescript
    * @ViewChild("'bodyTemplate'", {read: TemplateRef })
    * public bodyTemplate: TemplateRef<any>;
    * this.column.bodyTemplate = this.bodyTemplate;
    * ```
    * @memberof IgxColumnComponent
    */
    bodyTemplate: TemplateRef<any>;
    /**
     * Returns a reference to the header template.
     * ```typescript
     * let headerTemplate = this.column.headerTemplate;
     * ```
     * @memberof IgxColumnComponent
     */
    /**
    * Sets the header template.
    * Note that the column header height is fixed and any content bigger than it will be cut off.
    * ```html
    * <ng-template #headerTemplate>
    *   <div style = "background-color:black" (click) = "changeColor(val)">
    *       <span style="color:red" >{{column.field}}</span>
    *   </div>
    * </ng-template>
    * ```
    * ```typescript
    * @ViewChild("'headerTemplate'", {read: TemplateRef })
    * public headerTemplate: TemplateRef<any>;
    * this.column.headerTemplate = this.headerTemplate;
    * ```
    * @memberof IgxColumnComponent
    */
    headerTemplate: TemplateRef<any>;
    /**
     * Returns a reference to the inline editor template.
     * ```typescript
     * let inlineEditorTemplate = this.column.inlineEditorTemplate;
     * ```
     * @memberof IgxColumnComponent
     */
    /**
    * Sets the inline editor template.
    * ```html
    * <ng-template #inlineEditorTemplate igxCellEditor let-cell="cell">
    *     <input type="string" [(ngModel)]="cell.value"/>
    * </ng-template>
    * ```
    * ```typescript
    * @ViewChild("'inlineEditorTemplate'", {read: TemplateRef })
    * public inlineEditorTemplate: TemplateRef<any>;
    * this.column.inlineEditorTemplate = this.inlineEditorTemplate;
    * ```
    * @memberof IgxColumnComponent
    */
    inlineEditorTemplate: TemplateRef<any>;
    /**
     * Returns a reference to the `filterCellTemplate`.
     * ```typescript
     * let filterCellTemplate = this.column.filterCellTemplate;
     * ```
     * @memberof IgxColumnComponent
     */
    /**
    * Sets the quick filter template.
    * ```html
    * <ng-template #filterCellTemplate IgxFilterCellTemplate let-column="column">
    *    <input (input)="onInput()">
    * </ng-template>
    * ```
    * ```typescript
    * @ViewChild("'filterCellTemplate'", {read: TemplateRef })
    * public filterCellTemplate: TemplateRef<any>;
    * this.column.filterCellTemplate = this.filterCellTemplate;
    * ```
    * @memberof IgxColumnComponent
    */
    filterCellTemplate: TemplateRef<any>;
    /**
     * Gets the cells of the column.
     * ```typescript
     * let columnCells =  this.column.cells;
     * ```
     * @memberof IgxColumnComponent
     */
    readonly cells: IgxGridCellComponent[];
    /**
     * Gets the column visible index.
     * If the column is not visible, returns `-1`.
     * ```typescript
     * let visibleColumnIndex =  this.column.visibleIndex;
     * ```
     * @memberof IgxColumnComponent
     */
    readonly visibleIndex: number;
    /**
     * Returns a boolean indicating if the column is a `ColumnGroup`.
     * ```typescript
     * let columnGroup =  this.column.columnGroup;
     * ```
     * @memberof IgxColumnComponent
     */
    readonly columnGroup: boolean;
    /**
     * Returns a boolean indicating if the column is a `ColumnLayout` for multi-row layout.
     * ```typescript
     * let columnGroup =  this.column.columnGroup;
     * ```
     * @memberof IgxColumnComponent
     */
    readonly columnLayout: boolean;
    /**
    * Returns a boolean indicating if the column is a child of a `ColumnLayout` for multi-row layout.
    * ```typescript
    * let columnLayoutChild =  this.column.columnLayoutChild;
    * ```
    * @memberof IgxColumnComponent
    */
    readonly columnLayoutChild: any;
    /**
     * Returns the children columns collection.
     * Returns an empty array if the column does not contain children columns.
     * ```typescript
     * let childrenColumns =  this.column.allChildren;
     * ```
     * @memberof IgxColumnComponent
     */
    readonly allChildren: IgxColumnComponent[];
    /**
     * Returns the level of the column in a column group.
     * Returns `0` if the column doesn't have a `parent`.
     * ```typescript
     * let columnLevel =  this.column.level;
     * ```
     * @memberof IgxColumnComponent
     */
    readonly level: number;
    readonly isLastPinned: boolean;
    readonly gridRowSpan: number;
    readonly gridColumnSpan: number;
    /**
     * Row index where the current field should end.
     * The amount of rows between rowStart and rowEnd will determine the amount of spanning rows to that field
     * ```html
     * <igx-column-layout>
     *   <igx-column [rowEnd]="2" [rowStart]="1" [colStart]="1"></igx-column>
     * </igx-column-layout>
     * ```
     * @memberof IgxColumnComponent
     */
    rowEnd: number;
    /**
     * Column index where the current field should end.
     * The amount of columns between colStart and colEnd will determine the amount of spanning columns to that field
     * ```html
     * <igx-column-layout>
     *   <igx-column [colEnd]="3" [rowStart]="1" [colStart]="1"></igx-column>
     * </igx-column-layout>
     * ```
     * @memberof IgxColumnComponent
     */
    colEnd: number;
    /**
     * Row index from which the field is starting.
     * ```html
     * <igx-column-layout>
     *   <igx-column [rowStart]="1" [colStart]="1"></igx-column>
     * </igx-column-layout>
     * ```
     * @memberof IgxColumnComponent
     */
    rowStart: number;
    /**
     * Column index from which the field is starting.
     * ```html
     * <igx-column-layout>
     *   <igx-column [colStart]="1" [rowStart]="1"></igx-column>
     * </igx-column-layout>
     * ```
     * @memberof IgxColumnComponent
     */
    colStart: number;
    /**
     * hidden
     */
    defaultWidth: string;
    /**
     * hidden
     */
    widthSetByUser: boolean;
    /**
     * Returns the filteringExpressionsTree of the column.
     * ```typescript
     * let tree =  this.column.filteringExpressionsTree;
     * ```
     * @memberof IgxColumnComponent
     */
    readonly filteringExpressionsTree: FilteringExpressionsTree;
    /**
     * Sets/gets the parent column.
     * ```typescript
     * let parentColumn = this.column.parent;
     * ```
     * ```typescript
     * this.column.parent = higherLevelColumn;
     * ```
     * @memberof IgxColumnComponent
     */
    parent: any;
    /**
     * Sets/gets the children columns.
     * ```typescript
     * let columnChildren = this.column.children;
     * ```
     * ```typescript
     * this.column.children = childrenColumns;
     * ```
     * @memberof IgxColumnComponent
     */
    children: QueryList<IgxColumnComponent>;
    /**
     *@hidden
     */
    protected _unpinnedIndex: any;
    /**
     *@hidden
     */
    protected _pinned: boolean;
    /**
     *@hidden
     */
    protected _bodyTemplate: TemplateRef<any>;
    /**
     *@hidden
     */
    protected _headerTemplate: TemplateRef<any>;
    /**
     *@hidden
     */
    protected _inlineEditorTemplate: TemplateRef<any>;
    /**
     *@hidden
     */
    protected _filterCellTemplate: TemplateRef<any>;
    /**
     *@hidden
     */
    protected _summaries: any;
    /**
     *@hidden
     */
    protected _filters: any;
    /**
     *@hidden
     */
    protected _sortStrategy: ISortingStrategy;
    /**
     *@hidden
     */
    protected _groupingComparer: (a: any, b: any) => number;
    /**
     *@hidden
     */
    protected _hidden: boolean;
    /**
     *@hidden
     */
    protected _index: number;
    /**
     *@hidden
     */
    protected _disableHiding: boolean;
    /**
     *@hidden
     */
    protected _disablePinning: boolean;
    /**
     *@hidden
     */
    protected _width: string;
    /**
     *@hidden
     */
    protected _defaultMinWidth: string;
    /**
     *@hidden
     */
    protected _hasSummary: boolean;
    /**
     * @hidden
     */
    protected _editable: boolean;
    /**
     * @hidden
     */
    protected readonly isPrimaryColumn: boolean;
    /**
     *@hidden
     */
    protected cellTemplate: IgxCellTemplateDirective;
    /**
     *@hidden
     */
    protected headTemplate: QueryList<IgxCellHeaderTemplateDirective>;
    /**
     *@hidden
     */
    protected editorTemplate: IgxCellEditorTemplateDirective;
    protected _vIndex: number;
    /**
     *@hidden
     */
    filterCellTemplateDirective: IgxFilterCellTemplateDirective;
    constructor(gridAPI: GridBaseAPIService<IgxGridBaseComponent & IGridDataBindable>, cdr: ChangeDetectorRef);
    /**
     * @hidden
     * @internal
     */
    resetCaches(): void;
    /**
     *@hidden
     */
    ngAfterContentInit(): void;
    /**
     * @hidden
     */
    getGridTemplate(isRow: boolean, isIE: boolean): string;
    getInitialChildColumnSizes(children: QueryList<IgxColumnComponent>): Array<MRLColumnSizeInfo>;
    getFilledChildColumnSizes(children: QueryList<IgxColumnComponent>): Array<string>;
    protected getColumnSizesString(children: QueryList<IgxColumnComponent>): string;
    getResizableColUnderEnd(): MRLResizeColumnInfo[];
    /**
     * Pins the column at the provided index in the pinned area. Defaults to index `0` if not provided.
     * Returns `true` if the column is successfully pinned. Returns `false` if the column cannot be pinned.
     * Column cannot be pinned if:
     * - Is already pinned
     * - index argument is out of range
     * - The pinned area exceeds 80% of the grid width
     * ```typescript
     * let success = this.column.pin();
     * ```
     * @memberof IgxColumnComponent
     */
    pin(index?: number): boolean;
    /**
     * Unpins the column and place it at the provided index in the unpinned area. Defaults to index `0` if not provided.
     * Returns `true` if the column is successfully unpinned. Returns `false` if the column cannot be unpinned.
     * Column cannot be unpinned if:
     * - Is already unpinned
     * - index argument is out of range
     * ```typescript
     * let success = this.column.unpin();
     * ```
     * @memberof IgxColumnComponent
     */
    unpin(index?: number): boolean;
    /**
     * Returns a reference to the top level parent column.
     * ```typescript
     * let topLevelParent =  this.column.topLevelParent;
     * ```
     * @memberof IgxColumnComponent
     */
    readonly topLevelParent: any;
    /**
     *@hidden
     */
    protected check(): void;
    /**
     * Returns a reference to the header of the column.
     * ```typescript
     * let column = this.grid.columnList.filter(c => c.field === 'ID')[0];
     * let headerCell = column.headerCell;
     * ```
     * @memberof IgxColumnComponent
     */
    readonly headerCell: IgxGridHeaderComponent;
    /**
    * Returns a reference to the filter cell of the column.
    * ```typescript
    * let column = this.grid.columnList.filter(c => c.field === 'ID')[0];
    * let filterell = column.filterell;
    * ```
    * @memberof IgxColumnComponent
    */
    readonly filterCell: IgxGridFilteringCellComponent;
    /**
     * Returns a reference to the header group of the column.
     * @memberof IgxColumnComponent
     */
    readonly headerGroup: IgxGridHeaderGroupComponent;
    /**
     * Autosize the column to the longest currently visible cell value, including the header cell.
     * ```typescript
     * @ViewChild('grid') grid: IgxGridComponent;
     *
     * let column = this.grid.columnList.filter(c => c.field === 'ID')[0];
     * column.autosize();
     * ```
     * @memberof IgxColumnComponent
     */
    autosize(): void;
    /**
     * @hidden
     */
    getCalcWidth(): any;
    /**
     * @hidden
     * Returns the size (in pixels) of the longest currently visible cell, including the header cell.
     * ```typescript
     * @ViewChild('grid') grid: IgxGridComponent;
     *
     * let column = this.grid.columnList.filter(c => c.field === 'ID')[0];
     * let size = column.getLargestCellWidth();
     * ```
     * @memberof IgxColumnComponent
     */
    getLargestCellWidth(): string;
    /**
     *@hidden
     */
    getCellWidth(): string;
    /**
     * @hidden
     * @internal
     */
    protected cacheCalcWidth(): any;
    /**
     * @hidden
     */
    populateVisibleIndexes(): void;
}
export declare class IgxColumnGroupComponent extends IgxColumnComponent implements AfterContentInit {
    gridAPI: GridBaseAPIService<IgxGridBaseComponent & IGridDataBindable>;
    cdr: ChangeDetectorRef;
    children: QueryList<IgxColumnComponent>;
    /**
     * Gets the column group `summaries`.
     * ```typescript
     * let columnGroupSummaries = this.columnGroup.summaries;
     * ```
     * @memberof IgxColumnGroupComponent
     */
    /**
    * Sets the column group `summaries`.
    * ```typescript
    * this.columnGroup.summaries = IgxNumberSummaryOperand;
    * ```
    * @memberof IgxColumnGroupComponent
    */
    summaries: any;
    /**
     * Sets/gets whether the column group is `searchable`.
     * Default value is `true`.
     * ```typescript
     * let isSearchable =  this.columnGroup.searchable;
     * ```
     * ```html
     *  <igx-column-group [searchable] = "false"></igx-column-group>
     * ```
     * @memberof IgxColumnGroupComponent
     */
    searchable: boolean;
    /**
     * Gets the column group `filters`.
     * ```typescript
     * let columnGroupFilters = this.columnGroup.filters;
     * ```
     * @memberof IgxColumnGroupComponent
     */
    /**
    * Sets the column group `filters`.
    * ```typescript
    * this.columnGroup.filters = IgxStringFilteringOperand;
    * ```
    * @memberof IgxColumnGroupComponent
    */
    filters: any;
    /**
     * Returns a reference to the body template.
     * ```typescript
     * let bodyTemplate = this.columnGroup.bodyTemplate;
     * ```
     * @memberof IgxColumnGroupComponent
     */
    /**
    * @hidden
    */
    bodyTemplate: TemplateRef<any>;
    /**
     * Returns a reference to the inline editor template.
     * ```typescript
     * let inlineEditorTemplate = this.columnGroup.inlineEditorTemplate;
     * ```
     * @memberof IgxColumnGroupComponent
     */
    /**
    * @hidden
    */
    inlineEditorTemplate: TemplateRef<any>;
    /**
     * Gets the column group cells.
     * ```typescript
     * let columnCells = this.columnGroup.cells;
     * ```
     * @memberof IgxColumnGroupComponent
     */
    readonly cells: IgxGridCellComponent[];
    /**
     * Gets whether the column group is hidden.
     * ```typescript
     * let isHidden = this.columnGroup.hidden;
     * ```
     * @memberof IgxColumnGroupComponent
     */
    /**
    * Sets the column group hidden property.
    * ```typescript
    * <igx-column [hidden] = "true"></igx-column>
    * ```
    * @memberof IgxColumnGroupComponent
    */
    hidden: boolean;
    /**
     *@hidden
     */
    ngAfterContentInit(): void;
    /**
     * Returns the children columns collection.
     * ```typescript
     * let columns =  this.columnGroup.allChildren;
     * ```
     * @memberof IgxColumnGroupComponent
     */
    readonly allChildren: IgxColumnComponent[];
    /**
     * Returns a boolean indicating if the column is a `ColumnGroup`.
     * ```typescript
     * let isColumnGroup =  this.columnGroup.columnGroup
     * ```
     * @memberof IgxColumnGroupComponent
     */
    readonly columnGroup: boolean;
    /**
     * Returns a boolean indicating if the column is a `ColumnLayout` for multi-row layout.
     * ```typescript
     * let columnGroup =  this.column.columnGroup;
     * ```
     * @memberof IgxColumnComponent
     */
    readonly columnLayout: boolean;
    /**
     * Gets the width of the column group.
     * ```typescript
     * let columnGroupWidth = this.columnGroup.width;
     * ```
     * @memberof IgxColumnGroupComponent
     */
    width: any;
    constructor(gridAPI: GridBaseAPIService<IgxGridBaseComponent & IGridDataBindable>, cdr: ChangeDetectorRef);
}
export declare class IgxColumnLayoutComponent extends IgxColumnGroupComponent implements AfterContentInit {
    childrenVisibleIndexes: any[];
    /**
     * Gets the width of the column layout.
     * ```typescript
     * let columnGroupWidth = this.columnGroup.width;
     * ```
     * @memberof IgxColumnGroupComponent
     */
    width: any;
    readonly columnLayout: boolean;
    /**
     * @hidden
     */
    getCalcWidth(): any;
    /**
     * Gets the column visible index.
     * If the column is not visible, returns `-1`.
     * ```typescript
     * let visibleColumnIndex =  this.column.visibleIndex;
     * ```
     * @memberof IgxColumnComponent
     */
    readonly visibleIndex: number;
    /**
    * Sets the column layout hidden property.
    * ```typescript
    * <igx-column-layout [hidden] = "true"></igx-column->
    * ```
    * @memberof IgxColumnGroupComponent
    */
    hidden: boolean;
    /**
     *@hidden
    */
    ngAfterContentInit(): void;
    readonly hasLastPinnedChildColumn: boolean;
    /**
     *@hidden
    */
    populateVisibleIndexes(): void;
}