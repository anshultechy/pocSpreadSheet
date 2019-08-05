import { EventEmitter, QueryList, ElementRef, TemplateRef, DoCheck, NgZone, ChangeDetectorRef, ComponentFactoryResolver, IterableDiffers, ViewContainerRef, AfterContentInit, OnInit } from '@angular/core';
import { GridBaseAPIService } from '../api.service';
import { IgxGridBaseComponent, IFocusChangeEventArgs, IGridDataBindable } from '../grid-base.component';
import { IgxGridNavigationService } from '../grid-navigation.service';
import { ISortingExpression } from '../../data-operations/sorting-expression.interface';
import { IGroupByRecord } from '../../data-operations/groupby-record.interface';
import { IgxGroupByRowTemplateDirective } from './grid.directives';
import { IgxGridGroupByRowComponent } from './groupby-row.component';
import { IDisplayDensityOptions } from '../../core/displayDensity';
import { IGroupByExpandState } from '../../data-operations/groupby-expand-state.interface';
import { IBaseChipEventArgs, IChipClickEventArgs, IChipKeyDownEventArgs } from '../../chips/chip.component';
import { IChipsAreaReorderEventArgs } from '../../chips/chips-area.component';
import { IgxSelectionAPIService } from '../../core/selection';
import { TransactionService, Transaction, State } from '../../services/transaction/transaction';
import { IgxColumnComponent } from '../column.component';
import { IgxFilteringService } from '../filtering/grid-filtering.service';
import { IGroupingExpression } from '../../data-operations/grouping-expression.interface';
import { IgxColumnResizingService } from '../grid-column-resizing.service';
import { IgxGridSummaryService } from '../summaries/grid-summary.service';
import { IgxGridSelectionService, IgxGridCRUDService } from '../../core/grid-selection';
import { IgxOverlayService } from '../../services/index';
export interface IGridFocusChangeEventArgs extends IFocusChangeEventArgs {
    groupRow: IgxGridGroupByRowComponent;
}
export interface IGroupingDoneEventArgs {
    expressions: Array<ISortingExpression> | ISortingExpression;
    groupedColumns: Array<IgxColumnComponent> | IgxColumnComponent;
    ungroupedColumns: Array<IgxColumnComponent> | IgxColumnComponent;
}
/**
 * **Ignite UI for Angular Grid** -
 * [Documentation](https://www.infragistics.com/products/ignite-ui-angular/angular/components/grid.html)
 *
 * The Ignite UI Grid is used for presenting and manipulating tabular data in the simplest way possible.  Once data
 * has been bound, it can be manipulated through filtering, sorting & editing operations.
 *
 * Example:
 * ```html
 * <igx-grid [data]="employeeData" autoGenerate="false">
 *   <igx-column field="first" header="First Name"></igx-column>
 *   <igx-column field="last" header="Last Name"></igx-column>
 *   <igx-column field="role" header="Role"></igx-column>
 * </igx-grid>
 * ```
 */
export declare class IgxGridComponent extends IgxGridBaseComponent implements IGridDataBindable, OnInit, DoCheck, AfterContentInit {
    colResizingService: IgxColumnResizingService;
    document: any;
    protected overlayService: IgxOverlayService;
    protected _displayDensityOptions: IDisplayDensityOptions;
    private _id;
    /**
     * @hidden @internal
     */
    groupingResult: any[];
    /**
     * @hidden @internal
     */
    groupingMetadata: any[];
    /**
     * @hidden @internal
     */
    groupingFlatResult: any[];
    /**
     * @hidden
     */
    protected _groupingExpressions: IGroupingExpression[];
    /**
     * @hidden
     */
    protected _groupingExpandState: IGroupByExpandState[];
    /**
     * @hidden
     */
    protected _groupRowTemplate: TemplateRef<any>;
    /**
     * @hidden
     */
    protected _groupAreaTemplate: TemplateRef<any>;
    /**
     * @hidden
     */
    protected groupingDiffer: any;
    private _data;
    private _hideGroupedColumns;
    private _dropAreaMessage;
    /**
     * An @Input property that sets the value of the `id` attribute. If not provided it will be automatically generated.
     * ```html
     * <igx-grid [id]="'igx-grid-1'" [data]="Data" [autoGenerate]="true"></igx-grid>
     * ```
     * @memberof IgxGridComponent
     */
    id: string;
    /**
     * An @Input property that lets you fill the `IgxGridComponent` with an array of data.
     * ```html
     * <igx-grid [data]="Data" [autoGenerate]="true"></igx-grid>
     * ```
     * @memberof IgxGridComponent
    */
    data: any[];
    /**
     * Returns an array of objects containing the filtered data in the `IgxGridComponent`.
     * ```typescript
     * let filteredData = this.grid.filteredData;
     * ```
     * @memberof IgxGridComponent
     */
    /**
       * Sets an array of objects containing the filtered data in the `IgxGridComponent`.
       * ```typescript
       * this.grid.filteredData = [{
       *       ID: 1,
       *       Name: "A"
       * }];
       * ```
    * @memberof IgxGridComponent
       */
    filteredData: any;
    /**
     * Returns the state of the grid virtualization, including the start index and how many records are rendered.
     * ```typescript
     * const gridVirtState = this.grid1.virtualizationState;
     * ```
     * @memberof IgxGridComponent
     */
    /**
    * @hidden
    */
    virtualizationState: import("../../../public_api").IForOfState;
    /**
     * Sets the total number of records in the data source.
     * This property is required for remote grid virtualization to function when it is bound to remote data.
     * ```typescript
     * this.grid1.totalItemCount = 55;
     * ```
     * @memberof IgxGridComponent
     */
    /**
       * Returns the total number of records in the data source.
       * Works only with remote grid virtualization.
       * ```typescript
       * const itemCount = this.grid1.totalItemCount;
       * ```
    * @memberof IgxGridComponent
       */
    totalItemCount: any;
    private _gridAPI;
    private _filteredData;
    constructor(selectionService: IgxGridSelectionService, crudService: IgxGridCRUDService, colResizingService: IgxColumnResizingService, gridAPI: GridBaseAPIService<IgxGridBaseComponent & IGridDataBindable>, selection: IgxSelectionAPIService, _transactions: TransactionService<Transaction, State>, elementRef: ElementRef, zone: NgZone, document: any, cdr: ChangeDetectorRef, resolver: ComponentFactoryResolver, differs: IterableDiffers, viewRef: ViewContainerRef, navigation: IgxGridNavigationService, filteringService: IgxFilteringService, overlayService: IgxOverlayService, summaryService: IgxGridSummaryService, _displayDensityOptions: IDisplayDensityOptions);
    /**
     * Returns the group by state of the `IgxGridComponent`.
     * ```typescript
     * let groupByState = this.grid.groupingExpressions;
     * ```
     * @memberof IgxGridComponent
     */
    /**
       * Sets the group by state of the `IgxGridComponent` and emits the `onGroupingDone`
       * event with the appropriate arguments.
       * ```typescript
       * this.grid.groupingExpressions = [{
       *     fieldName: "ID",
       *     dir: SortingDirection.Asc,
       *     ignoreCase: false
       * }];
       * ```
    * @memberof IgxGridComponent
       */
    groupingExpressions: IGroupingExpression[];
    /**
     * Returns a list of expansion states for group rows.
     * Includes only states that differ from the default one (controlled through groupsExpanded and states that the user has changed.
     * Contains the expansion state (expanded: boolean) and the unique identifier for the group row (Array).
     * ```typescript
     * const groupExpState = this.grid.groupingExpansionState;
     * ```
     * @memberof IgxGridComponent
     */
    /**
       * Sets a list of expansion states for group rows.
       * ```typescript
       *      this.grid.groupingExpansionState = [{
       *      expanded: false,
       *      hierarchy: [{ fieldName: 'ID', value: 1 }]
       *   }];
       * // You can use DataUtil.getHierarchy(groupRow) to get the group `IgxGridRowComponent` hierarchy.
       * ```
    * @memberof IgxGridComponent
       */
    groupingExpansionState: IGroupByExpandState[];
    /**
     * An @Input property that determines whether created groups are rendered expanded or collapsed.
     * The default rendered state is expanded.
     * ```html
     * <igx-grid #grid [data]="Data" [groupsExpanded]="false" [autoGenerate]="true"></igx-grid>
     * ```
     * @memberof IgxGridComponent
     */
    groupsExpanded: boolean;
    /**
     * A hierarchical representation of the group by records.
     * ```typescript
     * let groupRecords = this.grid.groupsRecords;
     * ```
     * @memberof IgxGridComponent
     */
    groupsRecords: IGroupByRecord[];
    /**
     * An @Input property that sets whether the grouped columns should be hidden as well.
     * The default value is "false"
     * ```html
     * <igx-grid #grid [data]="localData" [hideGroupedColumns]="true" [autoGenerate]="true"></igx-grid>
     * ```
     * @memberof IgxGridComponent
     */
    hideGroupedColumns: boolean;
    /**
     * An @Input property that sets the message displayed inside the GroupBy drop area where columns can be dragged on.
     * Note: The grid needs to have at least one groupable column in order the GroupBy area to be displayed.
     * ```html
     * <igx-grid dropAreaMessage="Drop here to group!">
     *      <igx-column [groupable]="true" field="ID"></igx-column>
     * </igx-grid>
     * ```
     * @memberof IgxGridComponent
     */
    /**
     * An accessor that returns the message displayed inside the GroupBy drop area where columns can be dragged on.
    */
    dropAreaMessage: string;
    /**
     * An @Input property that sets the template that will be rendered as a GroupBy drop area.
     * Note: The grid needs to have at least one groupable column in order the GroupBy area to be displayed.
     * ```html
     * <igx-grid [dropAreaTemplate]="dropAreaRef">
     *      <igx-column [groupable]="true" field="ID"></igx-column>
     * </igx-grid>
     *
     * <ng-template #myDropArea>
     *      <span> Custom drop area! </span>
     * </ng-template>
     * ```
     * ```ts
     * @ViewChild('myDropArea', { read: TemplateRef })
     * public dropAreaRef: TemplateRef<any>;
     * ```
     * @memberof IgxGridComponent
     */
    dropAreaTemplate: TemplateRef<any>;
    /**
     * Emitted when a new `IgxColumnComponent` gets grouped/ungrouped, or multiple columns get
     * grouped/ungrouped at once by using the Group By API.
     * The `onGroupingDone` event would be raised only once if several columns get grouped at once by calling
     * the `groupBy()` or `clearGrouping()` API methods and passing an array as an argument.
     * The event arguments provide the `expressions`, `groupedColumns` and `ungroupedColumns` properties, which contain
     * the `ISortingExpression` and the `IgxColumnComponent` related to the grouping/ungrouping operation.
     * Please note that `groupedColumns` and `ungroupedColumns` show only the **newly** changed columns (affected by the **last**
     * grouping/ungrouping operation), not all columns which are currently grouped/ungrouped.
     * columns.
     * ```typescript
     * groupingDone(event: IGroupingDoneEventArgs){
     *     const expressions = event.expressions;
     *     //the newly grouped columns
     *     const groupedColumns = event.groupedColumns;
     *     //the newly ungrouped columns
     *     const ungroupedColumns = event.ungroupedColumns;
     * }
     * ```
     * ```html
     * <igx-grid #grid [data]="localData" (onGroupingDone)="groupingDone($event)" [autoGenerate]="true"></igx-grid>
     * ```
     * @memberof IgxGridComponent
     */
    onGroupingDone: EventEmitter<IGroupingDoneEventArgs>;
    /**
     * @hidden
     */
    protected groupTemplate: IgxGroupByRowTemplateDirective;
    /**
     * The custom template, if any, that should be used when rendering the row drag indicator icon
     *
     * ```typescript
     * // Set in typescript
     * const myCustomTemplate: TemplateRef<any> = myComponent.customTemplate;
     * myComponent.dragIndicatorIconTemplate = myCustomTemplate;
     * ```
     * ```html
     * <!-- Set in markup -->
     *  <igx-grid #grid>
     *      ...
     *      <ng-template igxDragIndicatorIcon>
     *          <igx-icon fontSet="material">info</igx-icon>
     *      </ng-template>
     *  </igx-grid>
     * ```
     */
    dragIndicatorIconTemplate: TemplateRef<any>;
    private _groupsRowList;
    /**
     * @hidden
     */
    defaultDropAreaTemplate: TemplateRef<any>;
    /**
     * A list of all group rows.
     * ```typescript
     * const groupList = this.grid.groupsRowList;
     * ```
     * @memberof IgxGridComponent
     */
    readonly groupsRowList: QueryList<any>;
    /**
     * @hidden
     */
    groupArea: ElementRef;
    /**
     * @hidden
     */
    readonly groupAreaHostClass: string;
    /**
     * Returns the template reference of the `IgxGridComponent`'s group row.
     * ```
     * const groupRowTemplate = this.grid.groupRowTemplate;
     * ```
     * @memberof IgxGridComponent
     */
    /**
       * Sets the template reference of the `IgxGridComponent`'s group `IgxGridRowComponent`.
       * ```typescript
       * this.grid.groupRowTemplate = myRowTemplate.
       * ```
    * @memberof IgxGridComponent
       */
    groupRowTemplate: TemplateRef<any>;
    /**
     * Returns the template reference of the `IgxGridComponent`'s group area.
     * ```typescript
     * const groupAreaTemplate = this.grid.groupAreaTemplate;
     * ```
     * @memberof IgxGridComponent
     */
    /**
       * Sets the template reference of the `IgxGridComponent`'s group area.
       * ```typescript
       * this.grid.groupAreaTemplate = myAreaTemplate.
       * ```
    * @memberof IgxGridComponent
       */
    groupAreaTemplate: TemplateRef<any>;
    /**
     * Groups by a new `IgxColumnComponent` based on the provided expression, or modifies an existing one.
     * Also allows for multiple columns to be grouped at once if an array of `ISortingExpression` is passed.
     * The onGroupingDone event would get raised only **once** if this method gets called multiple times with the same arguments.
     * ```typescript
     * this.grid.groupBy({ fieldName: name, dir: SortingDirection.Asc, ignoreCase: false });
     * this.grid.groupBy([
            { fieldName: name1, dir: SortingDirection.Asc, ignoreCase: false },
            { fieldName: name2, dir: SortingDirection.Desc, ignoreCase: true },
            { fieldName: name3, dir: SortingDirection.Desc, ignoreCase: false }
        ]);
     * ```
     * @memberof IgxGridComponent
     */
    groupBy(expression: IGroupingExpression | Array<IGroupingExpression>): void;
    /**
     * Clears all grouping in the grid, if no parameter is passed.
     * If a parameter is provided, clears grouping for a particular column or an array of columns.
     * ```typescript
     * this.grid.clearGrouping(); //clears all grouping
     * this.grid.clearGrouping("ID"); //ungroups a single column
     * this.grid.clearGrouping(["ID", "Column1", "Column2"]); //ungroups multiple columns
     * ```
     *
     */
    clearGrouping(name?: string | Array<string>): void;
    /**
     * Returns if a group is expanded or not.
     * ```typescript
     * public groupRow: IGroupByRecord;
     * const expandedGroup = this.grid.isExpandedGroup(this.groupRow);
     * ```
     * @memberof IgxGridComponent
     */
    isExpandedGroup(group: IGroupByRecord): boolean;
    /**
     * Toggles the expansion state of a group.
     * ```typescript
     * public groupRow: IGroupByRecord;
     * const toggleExpGroup = this.grid.toggleGroup(this.groupRow);
     * ```
     * @memberof IgxGridComponent
     */
    toggleGroup(groupRow: IGroupByRecord): void;
    /**
     * Expands the specified group and all of its parent groups.
     * ```typescript
     * public groupRow: IGroupByRecord;
     * this.grid.fullyExpandGroup(this.groupRow);
     * ```
     * @memberof IgxGridComponent
     */
    fullyExpandGroup(groupRow: IGroupByRecord): void;
    /**
     * @hidden
     */
    isGroupByRecord(record: any): boolean;
    /**
     * Toggles the expansion state of all group rows recursively.
     * ```typescript
     * this.grid.toggleAllGroupRows;
     * ```
     * @memberof IgxGridComponent
     */
    toggleAllGroupRows(): void;
    /**
     * Returns if the `IgxGridComponent` has groupable columns.
     * ```typescript
     * const groupableGrid = this.grid.hasGroupableColumns;
     * ```
     * @memberof IgxGridComponent
     */
    readonly hasGroupableColumns: boolean;
    private _setGroupColsVisibility;
    /**
     * Returns if the grid's group by drop area is visible.
     * ```typescript
     * const dropVisible = this.grid.dropAreaVisible;
     * ```
     * @memberof IgxGridComponent
     */
    readonly dropAreaVisible: boolean;
    /**
     * @hidden
     */
    protected _getStateForGroupRow(groupRow: IGroupByRecord): IGroupByExpandState;
    /**
     * @hidden
     */
    protected _toggleGroup(groupRow: IGroupByRecord): void;
    /**
     * @hidden
     */
    protected _fullyExpandGroup(groupRow: IGroupByRecord): void;
    /**
     * @hidden
     */
    protected _applyGrouping(): void;
    /**
     * @hidden
     */
    isColumnGrouped(fieldName: string): boolean;
    /**
    * @hidden
    */
    getContext(rowData: any, rowIndex: any): any;
    /**
    * @hidden
    */
    readonly template: TemplateRef<any>;
    /**
     * @hidden
     */
    onChipRemoved(event: IBaseChipEventArgs): void;
    /**
     * @hidden
     */
    chipsOrderChanged(event: IChipsAreaReorderEventArgs): void;
    /**
     * @hidden
     */
    chipsMovingEnded(): void;
    /**
     * @hidden
     */
    onChipClicked(event: IChipClickEventArgs): void;
    /**
     * @hidden
     */
    onChipKeyDown(event: IChipKeyDownEventArgs): void;
    /**
     * @hidden
     */
    protected readonly defaultTargetBodyHeight: number;
    /**
     * @hidden
     */
    protected getGroupAreaHeight(): number;
    /**
     * @hidden
     * Gets the combined width of the columns that are specific to the enabled grid features. They are fixed.
     * TODO: Remove for Angular 8. Calling parent class getter using super is not supported for now.
     */
    getFeatureColumnsWidth(): number;
    /**
     * @hidden
     */
    protected scrollTo(row: any | number, column: any | number): void;
    /**
    * @hidden
    */
    readonly dropAreaTemplateResolved: TemplateRef<any>;
    /**
     * @hidden
     */
    getGroupByChipTitle(expression: IGroupingExpression): string;
    /**
     * @hidden
     */
    ngAfterContentInit(): void;
    ngOnInit(): void;
    ngDoCheck(): void;
    /**
     * @inheritdoc
     */
    getSelectedData(formatters?: boolean, headers?: boolean): any[];
    private _setupNavigationService;
}