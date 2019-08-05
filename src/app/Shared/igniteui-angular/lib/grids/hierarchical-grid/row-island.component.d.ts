import { AfterContentInit, QueryList, OnInit, ElementRef, ChangeDetectorRef, ComponentFactoryResolver, IterableDiffers, ViewContainerRef, NgZone, AfterViewInit, OnChanges, EventEmitter, OnDestroy } from '@angular/core';
import { IgxHierarchicalGridComponent } from './hierarchical-grid.component';
import { IGridDataBindable, IgxGridBaseComponent } from '../grid-base.component';
import { GridBaseAPIService } from '../api.service';
import { IgxFilteringService } from '../filtering/grid-filtering.service';
import { IDisplayDensityOptions } from '../../core/displayDensity';
import { TransactionService, Transaction, State } from '../../services';
import { IgxGridSummaryService } from '../summaries/grid-summary.service';
import { IgxHierarchicalGridBaseComponent } from './hierarchical-grid-base.component';
import { IgxHierarchicalSelectionAPIService } from './selection';
import { IgxHierarchicalGridNavigationService } from './hierarchical-grid-navigation.service';
import { IgxGridSelectionService, IgxGridCRUDService } from '../../core/grid-selection';
import { IgxOverlayService } from '../../services/index';
import { IgxColumnComponent } from '../column.component';
import { IgxRowIslandAPIService } from './row-island-api.service';
export interface IGridCreatedEventArgs {
    owner: IgxRowIslandComponent;
    parentID: any;
    grid: IgxHierarchicalGridComponent;
}
export declare class IgxRowIslandComponent extends IgxHierarchicalGridBaseComponent implements AfterContentInit, AfterViewInit, OnChanges, OnInit, OnDestroy {
    selectionService: IgxGridSelectionService;
    protected transactionFactory: any;
    document: any;
    protected overlayService: IgxOverlayService;
    summaryService: IgxGridSummaryService;
    protected _displayDensityOptions: IDisplayDensityOptions;
    rowIslandAPI: IgxRowIslandAPIService;
    /**
     * Sets the key of the row island by which child data would be taken from the row data if such is provided.
     * ```html
     * <igx-hierarchical-grid [data]="Data" [autoGenerate]="true">
     *      <igx-row-island [key]="'childData'">
     *          <!-- ... -->
     *      </igx-row-island>
     * </igx-hierarchical-grid>
     * ```
     * @memberof IgxRowIslandComponent
     */
    key: string;
    /**
     * Sets if all immediate children of the grids for this `IgxRowIslandComponent` should be expanded/collapsed.
     * ```html
     * <igx-hierarchical-grid [data]="Data" [autoGenerate]="true">
     *      <igx-row-island [key]="'childData'" [expandChildren]="true" #rowIsland>
     *          <!-- ... -->
     *      </igx-row-island>
     * </igx-hierarchical-grid>
     * ```
     * @memberof IgxRowIslandComponent
     */
    /**
    * Gets if all immediate children of the grids for this `IgxRowIslandComponent` have been set to be expanded/collapsed.
    * ```typescript
    * const expanded = this.rowIsland.expandChildren;
    * ```
    * @memberof IgxRowIslandComponent
    */
    expandChildren: boolean;
    /**
     * @hidden
     */
    children: QueryList<IgxRowIslandComponent>;
    /**
     * @hidden
     */
    childColumns: QueryList<IgxColumnComponent>;
    /**
     * @hidden
     */
    onLayoutChange: EventEmitter<any>;
    /**
     * Event emmited when a grid is being created based on this row island.
     * ```html
     * <igx-hierarchical-grid [data]="Data" [autoGenerate]="true">
     *      <igx-row-island [key]="'childData'" (onGridCreated)="gridCreated($event)" #rowIsland>
     *          <!-- ... -->
     *      </igx-row-island>
     * </igx-hierarchical-grid>
     * ```
     * @memberof IgxRowIslandComponent
     */
    onGridCreated: EventEmitter<IGridCreatedEventArgs>;
    /**
     * @hidden
     */
    readonly id: string;
    /**
     * @hidden
     */
    readonly parentId: any;
    /**
     * @hidden
     */
    readonly level: number;
    /**
     * Get transactions service for the children grid components.
     * @experimental @hidden
     */
    readonly transactions: TransactionService<Transaction, State>;
    /**
     * @hidden
     */
    initialChanges: any[];
    /**
     * @hidden
     */
    rootGrid: any;
    readonly data: any[];
    readonly filteredData: any[];
    private layout_id;
    private isInit;
    constructor(selectionService: IgxGridSelectionService, crudService: IgxGridCRUDService, gridAPI: GridBaseAPIService<IgxGridBaseComponent & IGridDataBindable>, selection: IgxHierarchicalSelectionAPIService, transactionFactory: any, elementRef: ElementRef, zone: NgZone, document: any, cdr: ChangeDetectorRef, resolver: ComponentFactoryResolver, differs: IterableDiffers, viewRef: ViewContainerRef, navigation: IgxHierarchicalGridNavigationService, filteringService: IgxFilteringService, overlayService: IgxOverlayService, summaryService: IgxGridSummaryService, _displayDensityOptions: IDisplayDensityOptions, rowIslandAPI: IgxRowIslandAPIService);
    /**
     * @hidden
     */
    ngOnInit(): void;
    /**
     * @hidden
     */
    ngAfterContentInit(): void;
    protected updateChildren(): void;
    /**
     * @hidden
     */
    ngAfterViewInit(): void;
    /**
     * @hidden
     */
    ngOnChanges(changes: any): void;
    /**
     * @hidden
     */
    ngOnDestroy(): void;
    private cleanGridState;
    /**
     * @hidden
     */
    reflow(): void;
    /**
     * @hidden
     */
    calculateGridHeight(): void;
    protected updateColumnList(): void;
}
