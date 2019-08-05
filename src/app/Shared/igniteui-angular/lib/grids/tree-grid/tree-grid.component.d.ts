import { ChangeDetectorRef, ComponentFactoryResolver, ElementRef, IterableDiffers, ViewContainerRef, EventEmitter, NgZone, OnInit, TemplateRef, QueryList, AfterContentInit } from '@angular/core';
import { IgxSelectionAPIService } from '../../core/selection';
import { IgxGridBaseComponent, IGridDataBindable } from '../grid-base.component';
import { GridBaseAPIService } from '../api.service';
import { ITreeGridRecord } from './tree-grid.interfaces';
import { IDisplayDensityOptions } from '../../core/displayDensity';
import { IRowToggleEventArgs } from './tree-grid.interfaces';
import { HierarchicalTransaction, HierarchicalState } from '../../services/transaction/transaction';
import { IgxHierarchicalTransactionService } from '../../services/index';
import { IgxFilteringService } from '../filtering/grid-filtering.service';
import { IgxTreeGridNavigationService } from './tree-grid-navigation.service';
import { IgxGridSummaryService } from '../summaries/grid-summary.service';
import { IgxGridSelectionService, IgxGridCRUDService } from '../../core/grid-selection';
import { IgxOverlayService } from '../../services/index';
import { IgxColumnResizingService } from '../grid-column-resizing.service';
import { IgxColumnComponent } from '../column.component';
import { IgxRowLoadingIndicatorTemplateDirective } from './tree-grid.directives';
/**
 * **Ignite UI for Angular Tree Grid** -
 * [Documentation](https://www.infragistics.com/products/ignite-ui-angular/angular/components/grid.html)
 *
 * The Ignite UI Tree Grid displays and manipulates hierarchical data with consistent schema formatted as a table and
 * provides features such as sorting, filtering, editing, column pinning, paging, column moving and hiding.
 *
 * Example:
 * ```html
 * <igx-tree-grid [data]="employeeData" primaryKey="employeeID" foreignKey="PID" autoGenerate="false">
 *   <igx-column field="first" header="First Name"></igx-column>
 *   <igx-column field="last" header="Last Name"></igx-column>
 *   <igx-column field="role" header="Role"></igx-column>
 * </igx-tree-grid>
 * ```
 */
export declare class IgxTreeGridComponent extends IgxGridBaseComponent implements IGridDataBindable, OnInit, AfterContentInit {
    colResizingService: IgxColumnResizingService;
    protected _transactions: IgxHierarchicalTransactionService<HierarchicalTransaction, HierarchicalState>;
    document: any;
    protected overlayService: IgxOverlayService;
    protected _displayDensityOptions: IDisplayDensityOptions;
    private _id;
    private _data;
    private _rowLoadingIndicatorTemplate;
    /**
     * An @Input property that sets the value of the `id` attribute. If not provided it will be automatically generated.
     * ```html
     * <igx-tree-grid [id]="'igx-tree-grid-1'"></igx-tree-grid>
     * ```
     * @memberof IgxTreeGridComponent
     */
    id: string;
    /**
     * An @Input property that lets you fill the `IgxTreeGridComponent` with an array of data.
     * ```html
     * <igx-tree-grid [data]="Data" [autoGenerate]="true"></igx-tree-grid>
     * ```
     * @memberof IgxTreeGridComponent
     */
    data: any[];
    /**
     * Returns an array of objects containing the filtered data in the `IgxGridComponent`.
     * ```typescript
     * let filteredData = this.grid.filteredData;
     * ```
     * @memberof IgxTreeGridComponent
     */
    /**
       * Sets an array of objects containing the filtered data in the `IgxGridComponent`.
       * ```typescript
       * this.grid.filteredData = [{
       *       ID: 1,
       *       Name: "A"
       * }];
       * ```
    * @memberof IgxTreeGridComponent
       */
    filteredData: any;
    /**
     * Get transactions service for the grid.
     * @experimental @hidden
     */
    readonly transactions: IgxHierarchicalTransactionService<HierarchicalTransaction, HierarchicalState>;
    /**
    * @hidden
    */
    flatData: any[];
    /**
    * @hidden
    */
    processedExpandedFlatData: any[];
    /**
     * Returns an array of the root level `ITreeGridRecord`s.
     * ```typescript
     * // gets the root record with index=2
     * const states = this.grid.rootRecords[2];
     * ```
     * @memberof IgxTreeGridComponent
     */
    rootRecords: ITreeGridRecord[];
    /**
     * Returns a map of all `ITreeGridRecord`s.
     * ```typescript
     * // gets the record with primaryKey=2
     * const states = this.grid.records.get(2);
     * ```
     * @memberof IgxTreeGridComponent
     */
    records: Map<any, ITreeGridRecord>;
    /**
     * Returns an array of processed (filtered and sorted) root `ITreeGridRecord`s.
     * ```typescript
     * // gets the processed root record with index=2
     * const states = this.grid.processedRootRecords[2];
     * ```
     * @memberof IgxTreeGridComponent
     */
    processedRootRecords: ITreeGridRecord[];
    /**
     * Returns a map of all processed (filtered and sorted) `ITreeGridRecord`s.
     * ```typescript
     * // gets the processed record with primaryKey=2
     * const states = this.grid.processedRecords.get(2);
     * ```
     * @memberof IgxTreeGridComponent
     */
    processedRecords: Map<any, ITreeGridRecord>;
    /**
     * An @Input property that sets the child data key of the `IgxTreeGridComponent`.
     * ```html
     * <igx-tree-grid #grid [data]="employeeData" [childDataKey]="'employees'" [autoGenerate]="true"></igx-tree-grid>
     * ```
     * @memberof IgxTreeGridComponent
     */
    childDataKey: any;
    /**
     * An @Input property that sets the foreign key of the `IgxTreeGridComponent`.
     * ```html
     * <igx-tree-grid #grid [data]="employeeData" [primaryKey]="'employeeID'" [foreignKey]="'parentID'" [autoGenerate]="true">
     * </igx-tree-grid>
     * ```
     * @memberof IgxTreeGridComponent
     */
    foreignKey: any;
    /**
     * An @Input property that sets the key indicating whether a row has children.
     * This property is only used for load on demand scenarios.
     * ```html
     * <igx-tree-grid #grid [data]="employeeData" [primaryKey]="'employeeID'" [foreignKey]="'parentID'"
     *                [loadChildrenOnDemand]="loadChildren"
     *                [hasChildrenKey]="'hasEmployees'">
     * </igx-tree-grid>
     * ```
     * @memberof IgxTreeGridComponent
     */
    hasChildrenKey: any;
    /**
     * An @Input property indicating whether child records should be deleted when their parent gets deleted.
     * By default it is set to true and deletes all children along with the parent.
     * ```html
     * <igx-tree-grid [data]="employeeData" [primaryKey]="'employeeID'" [foreignKey]="'parentID'" cascadeOnDelete="false">
     * </igx-tree-grid>
     * ```
     * @memberof IgxTreeGridComponent
     */
    cascadeOnDelete: boolean;
    private _expansionDepth;
    /**
     * An @Input property that sets the count of levels to be expanded in the `IgxTreeGridComponent`. By default it is
     * set to `Infinity` which means all levels would be expanded.
     * ```html
     * <igx-tree-grid #grid [data]="employeeData" [childDataKey]="'employees'" expansionDepth="1" [autoGenerate]="true"></igx-tree-grid>
     * ```
     * @memberof IgxTreeGridComponent
     */
    expansionDepth: number;
    private _expansionStates;
    /**
     * Returns a list of key-value pairs [row ID, expansion state]. Includes only states that differ from the default one.
     * ```typescript
     * const expansionStates = this.grid.expansionStates;
     * ```
     * @memberof IgxTreeGridComponent
     */
    /**
       * Sets a list of key-value pairs [row ID, expansion state].
       * ```typescript
       * const states = new Map<any, boolean>();
       * states.set(1, true);
       * this.grid.expansionStates = states;
       * ```
    * @memberof IgxTreeGridComponent
       */
    expansionStates: Map<any, boolean>;
    /**
     * @hidden
     */
    protected rowLoadingTemplate: IgxRowLoadingIndicatorTemplateDirective;
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
    /**
     * An @Input property that provides a template for the row loading indicator when load on demand is enabled.
     * ```html
     * <ng-template #rowLoadingTemplate>
     *     <igx-icon fontSet="material">loop</igx-icon>
     * </ng-template>
     *
     * <igx-tree-grid #grid [data]="employeeData" [primaryKey]="'ID'" [foreignKey]="'parentID'"
     *                [loadChildrenOnDemand]="loadChildren"
     *                [rowLoadingIndicatorTemplate]="rowLoadingTemplate">
     * </igx-tree-grid>
     * ```
     * @memberof IgxTreeGridComponent
     */
    rowLoadingIndicatorTemplate: TemplateRef<any>;
    /**
     * An @Input property that provides a callback for loading child rows on demand.
     * ```html
     * <igx-tree-grid [data]="employeeData" [primaryKey]="'employeeID'" [foreignKey]="'parentID'" [loadChildrenOnDemand]="loadChildren">
     * </igx-tree-grid>
     * ```
     * ```typescript
     * public loadChildren = (parentID: any, done: (children: any[]) => void) => {
     *     this.dataService.getData(parentID, children => done(children));
     * }
     * ```
     * @memberof IgxTreeGridComponent
     */
    loadChildrenOnDemand: (parentID: any, done: (children: any[]) => void) => void;
    /**
     * Emitted when the expanded state of a row gets changed.
     * ```typescript
     * rowToggle(event: IRowToggleEventArgs){
     *  // the id of the row
     *  const rowID = event.rowID;
     *  // the new expansion state
     *  const newExpandedState = event.expanded;
     *  // the original event that triggered onRowToggle
     *  const originalEvent = event.event;
     *  // whether the event should be cancelled
     *  event.cancel = true;
     * }
     * ```
     * ```html
     * <igx-tree-grid [data]="employeeData" (onRowToggle)="rowToggle($event)" [autoGenerate]="true"></igx-tree-grid>
     * ```
     * @memberof IgxTreeGridComponent
     */
    onRowToggle: EventEmitter<IRowToggleEventArgs>;
    /**
     * @hidden
     */
    loadingRows: Set<any>;
    private _gridAPI;
    private _filteredData;
    /**
     * @hidden
     * @internal
     */
    dragIndicatorIconBase: TemplateRef<any>;
    constructor(selectionService: IgxGridSelectionService, crudService: IgxGridCRUDService, colResizingService: IgxColumnResizingService, gridAPI: GridBaseAPIService<IgxGridBaseComponent & IGridDataBindable>, selection: IgxSelectionAPIService, _transactions: IgxHierarchicalTransactionService<HierarchicalTransaction, HierarchicalState>, elementRef: ElementRef, zone: NgZone, document: any, cdr: ChangeDetectorRef, resolver: ComponentFactoryResolver, differs: IterableDiffers, viewRef: ViewContainerRef, navigation: IgxTreeGridNavigationService, filteringService: IgxFilteringService, overlayService: IgxOverlayService, summaryService: IgxGridSummaryService, _displayDensityOptions: IDisplayDensityOptions);
    /**
     * @hidden
     */
    ngOnInit(): void;
    /**
     * @hidden
     */
    ngAfterContentInit(): void;
    private loadChildrenOnRowExpansion;
    private addChildRows;
    private cloneMap;
    /**
     * Expands the `IgxTreeGridRowComponent` with the specified rowID.
     * @param rowID The identifier of the row to be expanded.
     * ```typescript
     * this.grid.expandRow(2);
     * ```
     * @memberof IgxTreeGridComponent
     */
    expandRow(rowID: any): void;
    /**
     * Collapses the `IgxTreeGridRowComponent` with the specified rowID.
     * @param rowID The identifier of the row to be collapsed.
     * ```typescript
     * this.grid.collapseRow(2);
     * ```
     * @memberof IgxTreeGridComponent
     */
    collapseRow(rowID: any): void;
    /**
     * Toggles the expansion state of the `IgxTreeGridRowComponent` with the specified rowID.
     * @param rowID The identifier of the row to be toggled.
     * ```typescript
     * this.grid.toggleRow(2);
     * ```
     * @memberof IgxTreeGridComponent
     */
    toggleRow(rowID: any): void;
    /**
     * Expands all rows.
     * ```typescript
     * this.grid.expandAll();
     * ```
     * @memberof IgxTreeGridComponent
     */
    expandAll(): void;
    /**
     * Collapses all rows.
     * ```typescript
     * this.grid.collapseAll();
     * ```
     * @memberof IgxTreeGridComponent
     */
    collapseAll(): void;
    /**
     * Creates a new `IgxTreeGridRowComponent` with the given data. If a parentRowID is not specified, the newly created
     * row would be added at the root level. Otherwise, it would be added as a child of the row whose primaryKey matches
     * the specified parentRowID. If the parentRowID does not exist, an error would be thrown.
     * ```typescript
     * const record = {
     *     ID: this.grid.data[this.grid1.data.length - 1].ID + 1,
     *     Name: this.newRecord
     * };
     * this.grid.addRow(record, 1); // Adds a new child row to the row with ID=1.
     * ```
     * @param data
     * @param parentRowID
     * @memberof IgxTreeGridComponent
     */
    addRow(data: any, parentRowID?: any): void;
    /** @hidden */
    deleteRowById(rowId: any): void;
    /** @hidden */
    generateRowPath(rowId: any): any[];
    /**
     * @hidden @internal
     */
    protected getDataBasedBodyHeight(): number;
    /**
     * @hidden
     */
    protected scrollTo(row: any | number, column: any | number): void;
    /**
    * @hidden
    */
    getContext(rowData: any, rowIndex: any): any;
    /**
     * @inheritdoc
     */
    getSelectedData(formatters?: boolean, headers?: boolean): any[];
    /**
    * @hidden
    */
    readonly template: TemplateRef<any>;
    protected writeToData(rowIndex: number, value: any): void;
    /**
     * @hidden
    */
    protected initColumns(collection: QueryList<IgxColumnComponent>, cb?: Function): void;
}