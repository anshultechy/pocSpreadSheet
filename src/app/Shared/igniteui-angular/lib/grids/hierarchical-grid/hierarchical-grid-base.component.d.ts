import { ElementRef, NgZone, ChangeDetectorRef, IterableDiffers, ViewContainerRef, ComponentFactoryResolver, TemplateRef } from '@angular/core';
import { IgxGridBaseComponent, IGridDataBindable } from '../grid-base.component';
import { GridBaseAPIService } from '../api.service';
import { IgxHierarchicalGridAPIService } from './hierarchical-grid-api.service';
import { IgxRowIslandComponent } from './row-island.component';
import { IgxFilteringService } from '../filtering/grid-filtering.service';
import { IDisplayDensityOptions } from '../../core/displayDensity';
import { IgxColumnComponent, IgxColumnGroupComponent } from '../column.component';
import { IgxHierarchicalTransactionService, IgxOverlayService } from '../../services/index';
import { IgxHierarchicalSelectionAPIService } from './selection';
import { IgxHierarchicalGridNavigationService } from './hierarchical-grid-navigation.service';
import { IgxGridSummaryService } from '../summaries/grid-summary.service';
import { IgxGridSelectionService, IgxGridCRUDService } from '../../core/grid-selection';
import { IgxChildGridRowComponent } from './child-grid-row.component';
export declare const IgxHierarchicalTransactionServiceFactory: {
    provide: import("@angular/core").InjectionToken<string>;
    useFactory: typeof hierarchicalTransactionServiceFactory;
};
export declare function hierarchicalTransactionServiceFactory(): () => IgxHierarchicalTransactionService<import("../../services").HierarchicalTransaction, import("../../services").HierarchicalState>;
export interface IPathSegment {
    rowID: any;
    rowIslandKey: string;
}
export declare abstract class IgxHierarchicalGridBaseComponent extends IgxGridBaseComponent {
    selectionService: IgxGridSelectionService;
    protected transactionFactory: any;
    document: any;
    protected overlayService: IgxOverlayService;
    summaryService: IgxGridSummaryService;
    protected _displayDensityOptions: IDisplayDensityOptions;
    abstract rootGrid: any;
    expandChildren: boolean;
    /**
     * @hidden
     */
    readonly maxLevelHeaderDepth: any;
    /**
    * @hidden
    */
    protected readonly outlet: any;
    /**
     * @hidden
     */
    hgridAPI: IgxHierarchicalGridAPIService;
    /**
     * @hidden
     */
    parentIsland: IgxRowIslandComponent;
    /**
     * @hidden
    */
    childRow: IgxChildGridRowComponent;
    protected _expandChildren: boolean;
    /**
     * @hidden
     * @internal
     */
    dragIndicatorIconBase: TemplateRef<any>;
    constructor(selectionService: IgxGridSelectionService, crudService: IgxGridCRUDService, gridAPI: GridBaseAPIService<IgxGridBaseComponent & IGridDataBindable>, selection: IgxHierarchicalSelectionAPIService, transactionFactory: any, elementRef: ElementRef, zone: NgZone, document: any, cdr: ChangeDetectorRef, resolver: ComponentFactoryResolver, differs: IterableDiffers, viewRef: ViewContainerRef, navigation: IgxHierarchicalGridNavigationService, filteringService: IgxFilteringService, overlayService: IgxOverlayService, summaryService: IgxGridSummaryService, _displayDensityOptions: IDisplayDensityOptions);
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
     * @hidden
     */
    createColumnsList(cols: Array<any>): void;
    protected _createColumn(col: any): any;
    protected _createColGroupComponent(col: IgxColumnGroupComponent): import("@angular/core").ComponentRef<IgxColumnGroupComponent>;
    protected _createColComponent(col: any): import("@angular/core").ComponentRef<IgxColumnComponent>;
    protected getGridsForIsland(rowIslandID: string): import("./hierarchical-grid.component").IgxHierarchicalGridComponent[];
    protected getChildGrid(path: Array<IPathSegment>): any;
}
