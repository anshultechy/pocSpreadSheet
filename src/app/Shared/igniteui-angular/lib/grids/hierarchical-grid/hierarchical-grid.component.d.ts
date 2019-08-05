import { TemplateRef, QueryList, ElementRef, NgZone, ChangeDetectorRef, IterableDiffers, ViewContainerRef, ComponentFactoryResolver, AfterViewInit, AfterContentInit, OnInit, OnDestroy } from '@angular/core';
import { IgxGridBaseComponent } from '../grid-base.component';
import { GridBaseAPIService } from '../api.service';
import { IgxRowIslandComponent } from './row-island.component';
import { IgxChildGridRowComponent } from './child-grid-row.component';
import { IgxFilteringService } from '../filtering/grid-filtering.service';
import { IDisplayDensityOptions } from '../../core/displayDensity';
import { IGridDataBindable, IgxColumnComponent } from '../grid/index';
import { IgxHierarchicalSelectionAPIService } from './selection';
import { IgxHierarchicalGridNavigationService } from './hierarchical-grid-navigation.service';
import { IgxGridSummaryService } from '../summaries/grid-summary.service';
import { IgxHierarchicalGridBaseComponent } from './hierarchical-grid-base.component';
import { IgxGridSelectionService, IgxGridCRUDService } from '../../core/grid-selection';
import { IgxOverlayService } from '../../services/index';
import { IgxColumnResizingService } from '../grid-column-resizing.service';
export interface HierarchicalStateRecord {
    rowID: any;
}
export declare class IgxHierarchicalGridComponent extends IgxHierarchicalGridBaseComponent implements IGridDataBindable, AfterViewInit, AfterContentInit, OnInit, OnDestroy {
    selectionService: IgxGridSelectionService;
    colResizingService: IgxColumnResizingService;
    protected transactionFactory: any;
    document: any;
    protected overlayService: IgxOverlayService;
    summaryService: IgxGridSummaryService;
    protected _displayDensityOptions: IDisplayDensityOptions;
    /**
     * Sets the value of the `id` attribute. If not provided it will be automatically generated.
     * ```html
     * <igx-hierarchical-grid [id]="'igx-hgrid-1'" [data]="Data" [autoGenerate]="true"></igx-hierarchical-grid>
     * ```
     * @memberof IgxHierarchicalGridComponent
     */
    readonly id: string;
    /**
     * An @Input property that lets you fill the `IgxHierarchicalGridComponent` with an array of data.
     * ```html
     * <igx-hierarchical-grid [data]="Data" [autoGenerate]="true"></igx-hierarchical-grid>
     * ```
     * @memberof IgxHierarchicalGridComponent
     */
    /**
    * Returns an array of data set to the `IgxHierarchicalGridComponent`.
    * ```typescript
    * let filteredData = this.grid.filteredData;
    * ```
    * @memberof IgxHierarchicalGridComponent
    */
    data: any[];
    /**
    * Sets the state of the `IgxHierarchicalGridComponent` containing which rows are expanded.
    * ```typescript
    * this.gridState = [{ rowID: 1 }, { rowID: 4}];
    * ```
    * ```html
    * <igx-hierarchical-grid [primaryKey]="'ID'" [data]="Data" [autoGenerate]="false" [hierarchicalState]="hgridState">
    *      <igx-column field="ID"  [dataType]='number'></igx-column>
    *      <igx-column field="Product"  [dataType]='string'></igx-column>
    *      <igx-column field="Description"  [dataType]='string'></igx-column>
    * </igx-hierarchical-grid>
    * ```
    * @memberof IgxHierarchicalGridComponent
    */
    hierarchicalState: any[];
    /**
     * Sets an array of objects containing the filtered data in the `IgxHierarchicalGridComponent`.
     * ```typescript
     * this.grid.filteredData = [{
     *       ID: 1,
     *       Name: "A"
     * }];
     * ```
     * @memberof IgxHierarchicalGridComponent
     */
    /**
    * Returns an array of objects containing the filtered data in the `IgxHierarchicalGridComponent`.
    * ```typescript
    * let filteredData = this.grid.filteredData;
    * ```
    * @memberof IgxHierarchicalGridComponent
    */
    filteredData: any;
    /**
     * Sets if all immediate children of the `IgxHierarchicalGridComponent` should be expanded/collapsed.
     * Defult value is false.
     * ```html
     * <igx-hierarchical-grid [id]="'igx-grid-1'" [data]="Data" [autoGenerate]="true" [expandChildren]="true"></igx-hierarchical-grid>
     * ```
     * @memberof IgxHierarchicalGridComponent
     */
    /**
    * Gets if all immediate children of the `IgxHierarchicalGridComponent` previously have been set to be expanded/collapsed.
    * If previously set and some rows have been manually expanded/collapsed it will still return the last set value.
    * ```typescript
    * const expanded = this.grid.expandChildren;
    * ```
    * @memberof IgxHierarchicalGridComponent
    */
    expandChildren: boolean;
    /**
     * Gets the unique identifier of the parent row. It may be a `string` or `number` if `primaryKey` of the
     * parent grid is set or an object reference of the parent record otherwise.
     * ```typescript
     * const foreignKey = this.grid.foreignKey;
     * ```
     * @memberof IgxHierarchicalGridComponent
     */
    readonly foreignKey: any;
    /**
     * @hidden
     */
    childLayoutList: QueryList<IgxRowIslandComponent>;
    /**
     * @hidden
     */
    allLayoutList: QueryList<IgxRowIslandComponent>;
    protected hierarchicalRecordTemplate: TemplateRef<any>;
    protected childTemplate: TemplateRef<any>;
    protected headerHierarchyExpander: ElementRef;
    /**
     * @hidden
     */
    templateOutlets: QueryList<any>;
    /**
     * @hidden
     */
    hierarchicalRows: QueryList<IgxChildGridRowComponent>;
    /**
     * @hidden
     */
    readonly hasExpandableChildren: boolean;
    /**
     * @hidden
     */
    childLayoutKeys: any[];
    /**
     * @hidden
     */
    highlightedRowID: any;
    /**
     * @hidden
     */
    updateOnRender: boolean;
    /**
     * @hidden
     */
    parent: any;
    private _hierarchicalState;
    private _data;
    private _filteredData;
    private h_id;
    private childGridTemplates;
    private scrollTop;
    private scrollLeft;
    constructor(selectionService: IgxGridSelectionService, crudService: IgxGridCRUDService, colResizingService: IgxColumnResizingService, gridAPI: GridBaseAPIService<IgxGridBaseComponent & IGridDataBindable>, selection: IgxHierarchicalSelectionAPIService, transactionFactory: any, elementRef: ElementRef, zone: NgZone, document: any, cdr: ChangeDetectorRef, resolver: ComponentFactoryResolver, differs: IterableDiffers, viewRef: ViewContainerRef, navigation: IgxHierarchicalGridNavigationService, filteringService: IgxFilteringService, overlayService: IgxOverlayService, summaryService: IgxGridSummaryService, _displayDensityOptions: IDisplayDensityOptions);
    /**
     * @hidden
     */
    ngOnInit(): void;
    /**
     * @hidden
     */
    ngAfterViewInit(): void;
    readonly outletDirective: import("../../../public_api").IgxOverlayOutletDirective;
    /**
     * @hidden
     */
    readonly parentRowOutletDirective: import("../../../public_api").IgxOverlayOutletDirective;
    /**
     * @hidden
     */
    ngAfterContentInit(): void;
    /**
    * @hidden
    */
    onRowIslandChange(): void;
    protected onColumnsChanged(change: QueryList<IgxColumnComponent>): void;
    private updateColumnList;
    ngOnDestroy(): void;
    private _clearSeletionHighlights;
    /**
    * @hidden
    */
    readonly template: TemplateRef<any>;
    /**
     * @hidden
     * Gets the combined width of the columns that are specific to the enabled grid features. They are fixed.
     * TODO: Remove for Angular 8. Calling parent class getter using super is not supported for now.
     */
    getFeatureColumnsWidth(): number;
    private getDefaultExpanderWidth;
    /**
     * @hidden
     */
    isRowHighlighted(rowData: any): boolean;
    /**
     * @hidden
     */
    isHierarchicalRecord(record: any): boolean;
    /**
     * @hidden
     */
    isChildGridRecord(record: any): boolean;
    /**
     * @hidden
     */
    trackChanges(index: any, rec: any): any;
    /**
     * @hidden
     */
    getContext(rowData: any): any;
    /**
     * @hidden
    */
    readonly rootGrid: this;
    /**
     * @hidden
    */
    protected initColumns(collection: QueryList<IgxColumnComponent>, cb?: Function): void;
    /**
     * @hidden
     * Gets the visible content height that includes header + tbody + footer.
     * For hierarchical child grid it may be scrolled and not fully visible.
     */
    getVisibleContentHeight(): any;
    /**
     * @hidden
    */
    collapseAllRows(): void;
    /**
     * @hidden
     */
    isExpanded(record: any): boolean;
    /**
     * @hidden
     */
    viewCreatedHandler(args: any): void;
    /**
     * @hidden
     */
    viewMovedHandler(args: any): void;
    /**
     * @hidden
     */
    updateScrollPosition(): void;
    /**
     * @hidden
     */
    getPossibleColumnWidth(): string;
    protected getChildGrids(inDeph?: boolean): any[];
    protected generateDataFields(data: any[]): string[];
    private hg_verticalScrollHandler;
    onContainerScroll(): void;
    private hg_horizontalScrollHandler;
    private updateParentSizes;
}
