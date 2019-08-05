/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, ContentChildren, Input, QueryList, Inject, ElementRef, ChangeDetectorRef, ComponentFactoryResolver, IterableDiffers, ViewContainerRef, NgZone, Output, EventEmitter, Optional } from '@angular/core';
import { IgxGridTransaction } from '../grid-base.component';
import { GridBaseAPIService } from '../api.service';
import { DOCUMENT } from '@angular/common';
import { IgxFilteringService } from '../filtering/grid-filtering.service';
import { DisplayDensityToken } from '../../core/displayDensity';
import { IgxGridSummaryService } from '../summaries/grid-summary.service';
import { IgxHierarchicalGridBaseComponent } from './hierarchical-grid-base.component';
import { IgxHierarchicalSelectionAPIService } from './selection';
import { IgxHierarchicalGridNavigationService } from './hierarchical-grid-navigation.service';
import { IgxGridSelectionService, IgxGridCRUDService } from '../../core/grid-selection';
import { IgxOverlayService } from '../../services/index';
import { takeUntil } from 'rxjs/operators';
import { IgxColumnComponent } from '../column.component';
import { IgxRowIslandAPIService } from './row-island-api.service';
/**
 * @record
 */
export function IGridCreatedEventArgs() { }
if (false) {
    /** @type {?} */
    IGridCreatedEventArgs.prototype.owner;
    /** @type {?} */
    IGridCreatedEventArgs.prototype.parentID;
    /** @type {?} */
    IGridCreatedEventArgs.prototype.grid;
}
export class IgxRowIslandComponent extends IgxHierarchicalGridBaseComponent {
    /**
     * @param {?} selectionService
     * @param {?} crudService
     * @param {?} gridAPI
     * @param {?} selection
     * @param {?} transactionFactory
     * @param {?} elementRef
     * @param {?} zone
     * @param {?} document
     * @param {?} cdr
     * @param {?} resolver
     * @param {?} differs
     * @param {?} viewRef
     * @param {?} navigation
     * @param {?} filteringService
     * @param {?} overlayService
     * @param {?} summaryService
     * @param {?} _displayDensityOptions
     * @param {?} rowIslandAPI
     */
    constructor(selectionService, crudService, gridAPI, selection, transactionFactory, elementRef, zone, document, cdr, resolver, differs, viewRef, navigation, filteringService, overlayService, summaryService, _displayDensityOptions, rowIslandAPI) {
        super(selectionService, crudService, gridAPI, selection, typeof transactionFactory === 'function' ? transactionFactory() : transactionFactory, elementRef, zone, document, cdr, resolver, differs, viewRef, navigation, filteringService, overlayService, summaryService, _displayDensityOptions);
        this.selectionService = selectionService;
        this.transactionFactory = transactionFactory;
        this.document = document;
        this.overlayService = overlayService;
        this.summaryService = summaryService;
        this._displayDensityOptions = _displayDensityOptions;
        this.rowIslandAPI = rowIslandAPI;
        /**
         * @hidden
         */
        this.children = new QueryList();
        /**
         * @hidden
         */
        this.childColumns = new QueryList();
        /**
         * @hidden
         */
        this.onLayoutChange = new EventEmitter();
        /**
         * Event emmited when a grid is being created based on this row island.
         * ```html
         * <igx-hierarchical-grid [data]="Data" [autoGenerate]="true">
         *      <igx-row-island [key]="'childData'" (onGridCreated)="gridCreated($event)" #rowIsland>
         *          <!-- ... -->
         *      </igx-row-island>
         * </igx-hierarchical-grid>
         * ```
         * \@memberof IgxRowIslandComponent
         */
        this.onGridCreated = new EventEmitter();
        /**
         * @hidden
         */
        this.initialChanges = [];
        /**
         * @hidden
         */
        this.rootGrid = null;
        this.layout_id = `igx-row-island-`;
        this.isInit = false;
        this.hgridAPI = (/** @type {?} */ (gridAPI));
    }
    /**
     * Sets if all immediate children of the grids for this `IgxRowIslandComponent` should be expanded/collapsed.
     * ```html
     * <igx-hierarchical-grid [data]="Data" [autoGenerate]="true">
     *      <igx-row-island [key]="'childData'" [expandChildren]="true" #rowIsland>
     *          <!-- ... -->
     *      </igx-row-island>
     * </igx-hierarchical-grid>
     * ```
     * \@memberof IgxRowIslandComponent
     * @param {?} value
     * @return {?}
     */
    set expandChildren(value) {
        this._expandChildren = value;
        this.rowIslandAPI.getChildGrids().forEach((grid) => {
            if (document.body.contains(grid.nativeElement)) {
                // Detect changes right away if the grid is visible
                grid.expandChildren = value;
                grid.markForCheck();
            }
            else {
                // Else defer the detection on changes when the grid gets into view for performance.
                grid.updateOnRender = true;
            }
        });
    }
    /**
     * Gets if all immediate children of the grids for this `IgxRowIslandComponent` have been set to be expanded/collapsed.
     * ```typescript
     * const expanded = this.rowIsland.expandChildren;
     * ```
     * \@memberof IgxRowIslandComponent
     * @return {?}
     */
    get expandChildren() {
        return this._expandChildren;
    }
    /**
     * @hidden
     * @return {?}
     */
    get id() {
        /** @type {?} */
        const pId = this.parentId ? this.parentId.substring(this.parentId.indexOf(this.layout_id) + this.layout_id.length) + '-' : '';
        return this.layout_id + pId + this.key;
    }
    /**
     * @hidden
     * @return {?}
     */
    get parentId() {
        return this.parentIsland ? this.parentIsland.id : null;
    }
    /**
     * @hidden
     * @return {?}
     */
    get level() {
        /** @type {?} */
        let ptr = this.parentIsland;
        /** @type {?} */
        let lvl = 0;
        while (ptr) {
            lvl++;
            ptr = ptr.parentIsland;
        }
        return lvl + 1;
    }
    /**
     * Get transactions service for the children grid components.
     * \@experimental \@hidden
     * @return {?}
     */
    get transactions() {
        /** @type {?} */
        const grids = this.rowIslandAPI.getChildGrids();
        return grids.length ? grids[0].transactions : this._transactions;
    }
    /**
     * @hidden
     * @return {?}
     */
    ngOnInit() {
        this.rootGrid = this.hgridAPI.grid;
    }
    /**
     * @hidden
     * @return {?}
     */
    ngAfterContentInit() {
        this.updateChildren();
        this.children.notifyOnChanges();
        this.children.changes.pipe(takeUntil(this.destroy$))
            .subscribe((change) => {
            this.updateChildren();
            // update existing grids since their child ri have been changed.
            this.getGridsForIsland(this.key).forEach(grid => {
                ((/** @type {?} */ (grid))).onRowIslandChange(this.children);
            });
        });
        /** @type {?} */
        const nestedColumns = this.children.map((layout) => layout.columnList.toArray());
        /** @type {?} */
        const colsArray = [].concat.apply([], nestedColumns);
        /** @type {?} */
        const topCols = this.columnList.filter((item) => {
            return colsArray.indexOf(item) === -1;
        });
        this.childColumns.reset(topCols);
        this.columnList.changes.pipe(takeUntil(this.destroy$)).subscribe(() => { this.updateColumnList(); });
    }
    /**
     * @protected
     * @return {?}
     */
    updateChildren() {
        this.children.reset(this.children.toArray().slice(1));
        this.children.forEach(child => {
            child.parentIsland = this;
        });
    }
    /**
     * @hidden
     * @return {?}
     */
    ngAfterViewInit() {
        this.rowIslandAPI.register(this);
        if (this.parentIsland) {
            this.parentIsland.rowIslandAPI.registerChildRowIsland(this);
        }
        else {
            this.rootGrid.hgridAPI.registerChildRowIsland(this);
        }
        this._init = false;
    }
    /**
     * @hidden
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        this.onLayoutChange.emit(changes);
        if (!this.isInit) {
            this.initialChanges.push(changes);
        }
    }
    /**
     * @hidden
     * @return {?}
     */
    ngOnDestroy() {
        // Override the base destroy because we don't have rendered anything to use removeEventListener on
        this.destroy$.next(true);
        this.destroy$.complete();
        this._destroyed = true;
        this.rowIslandAPI.unset(this.id);
        if (this.parentIsland) {
            this.getGridsForIsland(this.key).forEach(grid => {
                this.cleanGridState(grid);
                grid.hgridAPI.unsetChildRowIsland(this);
            });
            this.parentIsland.rowIslandAPI.unsetChildRowIsland(this);
        }
        else {
            this.rootGrid.hgridAPI.unsetChildRowIsland(this);
            this.cleanGridState(this.rootGrid);
        }
    }
    /**
     * @private
     * @param {?} grid
     * @return {?}
     */
    cleanGridState(grid) {
        grid.childGridTemplates.forEach((tmpl) => {
            tmpl.owner.cleanView(tmpl.context.templateID);
        });
        grid.childGridTemplates.clear();
        grid.onRowIslandChange();
    }
    /**
     * @hidden
     * @return {?}
     */
    reflow() { }
    /**
     * @hidden
     * @return {?}
     */
    calculateGridHeight() { }
    /**
     * @protected
     * @return {?}
     */
    updateColumnList() {
        /** @type {?} */
        const nestedColumns = this.children.map((layout) => layout.columnList.toArray());
        /** @type {?} */
        const colsArray = [].concat.apply([], nestedColumns);
        /** @type {?} */
        const topCols = this.columnList.filter((item) => {
            if (colsArray.indexOf(item) === -1) {
                /* Reset the default width of the columns that come into this row island,
                because the root catches them first during the detectChanges() and sets their defaultWidth. */
                item.defaultWidth = undefined;
                return true;
            }
            return false;
        });
        this.childColumns.reset(topCols);
        if (this.parentIsland) {
            this.parentIsland.columnList.notifyOnChanges();
        }
        else {
            this.rootGrid.columnList.notifyOnChanges();
        }
        this.rowIslandAPI.getChildGrids().forEach((grid) => {
            grid.createColumnsList(this.childColumns.toArray());
            if (!document.body.contains(grid.nativeElement)) {
                grid.updateOnRender = true;
            }
        });
    }
}
IgxRowIslandComponent.decorators = [
    { type: Component, args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                selector: 'igx-row-island',
                template: ``,
                providers: [IgxRowIslandAPIService]
            }] }
];
/** @nocollapse */
IgxRowIslandComponent.ctorParameters = () => [
    { type: IgxGridSelectionService },
    { type: IgxGridCRUDService },
    { type: GridBaseAPIService },
    { type: IgxHierarchicalSelectionAPIService },
    { type: undefined, decorators: [{ type: Inject, args: [IgxGridTransaction,] }] },
    { type: ElementRef },
    { type: NgZone },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: ChangeDetectorRef },
    { type: ComponentFactoryResolver },
    { type: IterableDiffers },
    { type: ViewContainerRef },
    { type: IgxHierarchicalGridNavigationService },
    { type: IgxFilteringService },
    { type: IgxOverlayService, decorators: [{ type: Inject, args: [IgxOverlayService,] }] },
    { type: IgxGridSummaryService },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [DisplayDensityToken,] }] },
    { type: IgxRowIslandAPIService }
];
IgxRowIslandComponent.propDecorators = {
    key: [{ type: Input }],
    expandChildren: [{ type: Input }],
    children: [{ type: ContentChildren, args: [IgxRowIslandComponent, { read: IgxRowIslandComponent, descendants: false },] }],
    childColumns: [{ type: ContentChildren, args: [IgxColumnComponent, { read: IgxColumnComponent, descendants: false },] }],
    onLayoutChange: [{ type: Output }],
    onGridCreated: [{ type: Output }]
};
if (false) {
    /**
     * Sets the key of the row island by which child data would be taken from the row data if such is provided.
     * ```html
     * <igx-hierarchical-grid [data]="Data" [autoGenerate]="true">
     *      <igx-row-island [key]="'childData'">
     *          <!-- ... -->
     *      </igx-row-island>
     * </igx-hierarchical-grid>
     * ```
     * \@memberof IgxRowIslandComponent
     * @type {?}
     */
    IgxRowIslandComponent.prototype.key;
    /**
     * @hidden
     * @type {?}
     */
    IgxRowIslandComponent.prototype.children;
    /**
     * @hidden
     * @type {?}
     */
    IgxRowIslandComponent.prototype.childColumns;
    /**
     * @hidden
     * @type {?}
     */
    IgxRowIslandComponent.prototype.onLayoutChange;
    /**
     * Event emmited when a grid is being created based on this row island.
     * ```html
     * <igx-hierarchical-grid [data]="Data" [autoGenerate]="true">
     *      <igx-row-island [key]="'childData'" (onGridCreated)="gridCreated($event)" #rowIsland>
     *          <!-- ... -->
     *      </igx-row-island>
     * </igx-hierarchical-grid>
     * ```
     * \@memberof IgxRowIslandComponent
     * @type {?}
     */
    IgxRowIslandComponent.prototype.onGridCreated;
    /**
     * @hidden
     * @type {?}
     */
    IgxRowIslandComponent.prototype.initialChanges;
    /**
     * @hidden
     * @type {?}
     */
    IgxRowIslandComponent.prototype.rootGrid;
    /** @type {?} */
    IgxRowIslandComponent.prototype.data;
    /** @type {?} */
    IgxRowIslandComponent.prototype.filteredData;
    /**
     * @type {?}
     * @private
     */
    IgxRowIslandComponent.prototype.layout_id;
    /**
     * @type {?}
     * @private
     */
    IgxRowIslandComponent.prototype.isInit;
    /** @type {?} */
    IgxRowIslandComponent.prototype.selectionService;
    /**
     * @type {?}
     * @protected
     */
    IgxRowIslandComponent.prototype.transactionFactory;
    /** @type {?} */
    IgxRowIslandComponent.prototype.document;
    /**
     * @type {?}
     * @protected
     */
    IgxRowIslandComponent.prototype.overlayService;
    /** @type {?} */
    IgxRowIslandComponent.prototype.summaryService;
    /**
     * @type {?}
     * @protected
     */
    IgxRowIslandComponent.prototype._displayDensityOptions;
    /** @type {?} */
    IgxRowIslandComponent.prototype.rowIslandAPI;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm93LWlzbGFuZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9pZ25pdGV1aS1hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL2dyaWRzL2hpZXJhcmNoaWNhbC1ncmlkL3Jvdy1pc2xhbmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBRUgsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxlQUFlLEVBQ2YsS0FBSyxFQUNMLFNBQVMsRUFFVCxNQUFNLEVBQ04sVUFBVSxFQUNWLGlCQUFpQixFQUNqQix3QkFBd0IsRUFDeEIsZUFBZSxFQUNmLGdCQUFnQixFQUNoQixNQUFNLEVBR04sTUFBTSxFQUNOLFlBQVksRUFDWixRQUFRLEVBRVgsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLGtCQUFrQixFQUEyQyxNQUFNLHdCQUF3QixDQUFDO0FBQ3JHLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXBELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUMxRSxPQUFPLEVBQTBCLG1CQUFtQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFFeEYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDMUUsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDdEYsT0FBTyxFQUFFLGtDQUFrQyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxvQ0FBb0MsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQzlGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRXhGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxTQUFTLEVBQUUs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QWlLbEMsTUFBTSxTQUFDLGtCQUFrQjtZQXhMOUIsVUFBVTtZQUtWLE1BQU07NENBc0xELE1BQU0sU0FBQyxRQUFRO1lBMUxwQixpQkFBaUI7WUFDakIsd0JBQXdCO1lBQ3hCLGVBQWU7WUFDZixnQkFBZ0I7WUFvQlgsb0NBQW9DO1lBTnBDLG1CQUFtQjtZQVNuQixpQkFBaUIsdUJBdUtqQixNQUFNLFNBQUMsaUJBQWlCO1lBN0t4QixxQkFBcUI7NENBK0tyQixRQUFRLFlBQUksTUFBTSxTQUFDLG1CQUFtQjtZQXRLdEMsc0JBQXNCOzs7a0JBMEIxQixLQUFLOzZCQWNMLEtBQUs7dUJBNkJMLGVBQWUsU0FBQyxxQkFBcUIsRUFBRSxFQUFFLElBQUksRUFBRSxxQkFBcUIsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFOzJCQU0xRixlQUFlLFNBQUMsa0JBQWtCLEVBQUUsRUFBRSxJQUFJLEVBQUUsa0JBQWtCLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRTs2QkFNcEYsTUFBTTs0QkFjTixNQUFNOzs7Ozs7Ozs7Ozs7Ozs7SUFyRVAsb0NBQ21COzs7OztJQTBDbkIseUNBQ3lEOzs7OztJQUt6RCw2Q0FDMEQ7Ozs7O0lBSzFELCtDQUNnRDs7Ozs7Ozs7Ozs7OztJQWFoRCw4Q0FDaUU7Ozs7O0lBMENqRSwrQ0FBMkI7Ozs7O0lBSzNCLHlDQUF1Qjs7SUFDdkIscUNBQXFCOztJQUNyQiw2Q0FBNkI7Ozs7O0lBQzdCLDBDQUFzQzs7Ozs7SUFDdEMsdUNBQXVCOztJQUduQixpREFBZ0Q7Ozs7O0lBSWhELG1EQUE2RDs7SUFHN0QseUNBQWlDOzs7OztJQU9qQywrQ0FBc0U7O0lBQ3RFLCtDQUE0Qzs7Ozs7SUFDNUMsdURBQWlHOztJQUNqRyw2Q0FBMkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIEFmdGVyQ29udGVudEluaXQsXG4gICAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gICAgQ29tcG9uZW50LFxuICAgIENvbnRlbnRDaGlsZHJlbixcbiAgICBJbnB1dCxcbiAgICBRdWVyeUxpc3QsXG4gICAgT25Jbml0LFxuICAgIEluamVjdCxcbiAgICBFbGVtZW50UmVmLFxuICAgIENoYW5nZURldGVjdG9yUmVmLFxuICAgIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgICBJdGVyYWJsZURpZmZlcnMsXG4gICAgVmlld0NvbnRhaW5lclJlZixcbiAgICBOZ1pvbmUsXG4gICAgQWZ0ZXJWaWV3SW5pdCxcbiAgICBPbkNoYW5nZXMsXG4gICAgT3V0cHV0LFxuICAgIEV2ZW50RW1pdHRlcixcbiAgICBPcHRpb25hbCxcbiAgICBPbkRlc3Ryb3lcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJZ3hIaWVyYXJjaGljYWxHcmlkQ29tcG9uZW50IH0gZnJvbSAnLi9oaWVyYXJjaGljYWwtZ3JpZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgSWd4R3JpZFRyYW5zYWN0aW9uLCBJR3JpZERhdGFCaW5kYWJsZSwgSWd4R3JpZEJhc2VDb21wb25lbnQgfSBmcm9tICcuLi9ncmlkLWJhc2UuY29tcG9uZW50JztcbmltcG9ydCB7IEdyaWRCYXNlQVBJU2VydmljZSB9IGZyb20gJy4uL2FwaS5zZXJ2aWNlJztcbmltcG9ydCB7IElneEhpZXJhcmNoaWNhbEdyaWRBUElTZXJ2aWNlIH0gZnJvbSAnLi9oaWVyYXJjaGljYWwtZ3JpZC1hcGkuc2VydmljZSc7XG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBJZ3hGaWx0ZXJpbmdTZXJ2aWNlIH0gZnJvbSAnLi4vZmlsdGVyaW5nL2dyaWQtZmlsdGVyaW5nLnNlcnZpY2UnO1xuaW1wb3J0IHsgSURpc3BsYXlEZW5zaXR5T3B0aW9ucywgRGlzcGxheURlbnNpdHlUb2tlbiB9IGZyb20gJy4uLy4uL2NvcmUvZGlzcGxheURlbnNpdHknO1xuaW1wb3J0IHsgVHJhbnNhY3Rpb25TZXJ2aWNlLCBUcmFuc2FjdGlvbiwgU3RhdGUgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcyc7XG5pbXBvcnQgeyBJZ3hHcmlkU3VtbWFyeVNlcnZpY2UgfSBmcm9tICcuLi9zdW1tYXJpZXMvZ3JpZC1zdW1tYXJ5LnNlcnZpY2UnO1xuaW1wb3J0IHsgSWd4SGllcmFyY2hpY2FsR3JpZEJhc2VDb21wb25lbnQgfSBmcm9tICcuL2hpZXJhcmNoaWNhbC1ncmlkLWJhc2UuY29tcG9uZW50JztcbmltcG9ydCB7IElneEhpZXJhcmNoaWNhbFNlbGVjdGlvbkFQSVNlcnZpY2UgfSBmcm9tICcuL3NlbGVjdGlvbic7XG5pbXBvcnQgeyBJZ3hIaWVyYXJjaGljYWxHcmlkTmF2aWdhdGlvblNlcnZpY2UgfSBmcm9tICcuL2hpZXJhcmNoaWNhbC1ncmlkLW5hdmlnYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBJZ3hHcmlkU2VsZWN0aW9uU2VydmljZSwgSWd4R3JpZENSVURTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vY29yZS9ncmlkLXNlbGVjdGlvbic7XG5cbmltcG9ydCB7IElneE92ZXJsYXlTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvaW5kZXgnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgSWd4Q29sdW1uQ29tcG9uZW50IH0gZnJvbSAnLi4vY29sdW1uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJZ3hSb3dJc2xhbmRBUElTZXJ2aWNlIH0gZnJvbSAnLi9yb3ctaXNsYW5kLWFwaS5zZXJ2aWNlJztcbmV4cG9ydCBpbnRlcmZhY2UgSUdyaWRDcmVhdGVkRXZlbnRBcmdzIHtcbiAgICBvd25lcjogSWd4Um93SXNsYW5kQ29tcG9uZW50O1xuICAgIHBhcmVudElEOiBhbnk7XG4gICAgZ3JpZDogSWd4SGllcmFyY2hpY2FsR3JpZENvbXBvbmVudDtcbn1cblxuQENvbXBvbmVudCh7XG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gICAgc2VsZWN0b3I6ICdpZ3gtcm93LWlzbGFuZCcsXG4gICAgdGVtcGxhdGU6IGBgLFxuICAgIHByb3ZpZGVyczogW0lneFJvd0lzbGFuZEFQSVNlcnZpY2VdXG59KVxuZXhwb3J0IGNsYXNzIElneFJvd0lzbGFuZENvbXBvbmVudCBleHRlbmRzIElneEhpZXJhcmNoaWNhbEdyaWRCYXNlQ29tcG9uZW50XG4gICAgICAgICAgICBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQsIEFmdGVyVmlld0luaXQsIE9uQ2hhbmdlcywgT25Jbml0LCBPbkRlc3Ryb3kge1xuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIGtleSBvZiB0aGUgcm93IGlzbGFuZCBieSB3aGljaCBjaGlsZCBkYXRhIHdvdWxkIGJlIHRha2VuIGZyb20gdGhlIHJvdyBkYXRhIGlmIHN1Y2ggaXMgcHJvdmlkZWQuXG4gICAgICogYGBgaHRtbFxuICAgICAqIDxpZ3gtaGllcmFyY2hpY2FsLWdyaWQgW2RhdGFdPVwiRGF0YVwiIFthdXRvR2VuZXJhdGVdPVwidHJ1ZVwiPlxuICAgICAqICAgICAgPGlneC1yb3ctaXNsYW5kIFtrZXldPVwiJ2NoaWxkRGF0YSdcIj5cbiAgICAgKiAgICAgICAgICA8IS0tIC4uLiAtLT5cbiAgICAgKiAgICAgIDwvaWd4LXJvdy1pc2xhbmQ+XG4gICAgICogPC9pZ3gtaGllcmFyY2hpY2FsLWdyaWQ+XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneFJvd0lzbGFuZENvbXBvbmVudFxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGtleTogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogU2V0cyBpZiBhbGwgaW1tZWRpYXRlIGNoaWxkcmVuIG9mIHRoZSBncmlkcyBmb3IgdGhpcyBgSWd4Um93SXNsYW5kQ29tcG9uZW50YCBzaG91bGQgYmUgZXhwYW5kZWQvY29sbGFwc2VkLlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8aWd4LWhpZXJhcmNoaWNhbC1ncmlkIFtkYXRhXT1cIkRhdGFcIiBbYXV0b0dlbmVyYXRlXT1cInRydWVcIj5cbiAgICAgKiAgICAgIDxpZ3gtcm93LWlzbGFuZCBba2V5XT1cIidjaGlsZERhdGEnXCIgW2V4cGFuZENoaWxkcmVuXT1cInRydWVcIiAjcm93SXNsYW5kPlxuICAgICAqICAgICAgICAgIDwhLS0gLi4uIC0tPlxuICAgICAqICAgICAgPC9pZ3gtcm93LWlzbGFuZD5cbiAgICAgKiA8L2lneC1oaWVyYXJjaGljYWwtZ3JpZD5cbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4Um93SXNsYW5kQ29tcG9uZW50XG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBzZXQgZXhwYW5kQ2hpbGRyZW4odmFsdWU6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5fZXhwYW5kQ2hpbGRyZW4gPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5yb3dJc2xhbmRBUEkuZ2V0Q2hpbGRHcmlkcygpLmZvckVhY2goKGdyaWQpID0+IHtcbiAgICAgICAgICAgIGlmIChkb2N1bWVudC5ib2R5LmNvbnRhaW5zKGdyaWQubmF0aXZlRWxlbWVudCkpIHtcbiAgICAgICAgICAgICAgICAvLyBEZXRlY3QgY2hhbmdlcyByaWdodCBhd2F5IGlmIHRoZSBncmlkIGlzIHZpc2libGVcbiAgICAgICAgICAgICAgICBncmlkLmV4cGFuZENoaWxkcmVuID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgZ3JpZC5tYXJrRm9yQ2hlY2soKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gRWxzZSBkZWZlciB0aGUgZGV0ZWN0aW9uIG9uIGNoYW5nZXMgd2hlbiB0aGUgZ3JpZCBnZXRzIGludG8gdmlldyBmb3IgcGVyZm9ybWFuY2UuXG4gICAgICAgICAgICAgICAgZ3JpZC51cGRhdGVPblJlbmRlciA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgaWYgYWxsIGltbWVkaWF0ZSBjaGlsZHJlbiBvZiB0aGUgZ3JpZHMgZm9yIHRoaXMgYElneFJvd0lzbGFuZENvbXBvbmVudGAgaGF2ZSBiZWVuIHNldCB0byBiZSBleHBhbmRlZC9jb2xsYXBzZWQuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGNvbnN0IGV4cGFuZGVkID0gdGhpcy5yb3dJc2xhbmQuZXhwYW5kQ2hpbGRyZW47XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneFJvd0lzbGFuZENvbXBvbmVudFxuICAgICAqL1xuICAgIGdldCBleHBhbmRDaGlsZHJlbigpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2V4cGFuZENoaWxkcmVuO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBAQ29udGVudENoaWxkcmVuKElneFJvd0lzbGFuZENvbXBvbmVudCwgeyByZWFkOiBJZ3hSb3dJc2xhbmRDb21wb25lbnQsIGRlc2NlbmRhbnRzOiBmYWxzZSB9KVxuICAgIHB1YmxpYyBjaGlsZHJlbiA9IG5ldyBRdWVyeUxpc3Q8SWd4Um93SXNsYW5kQ29tcG9uZW50PigpO1xuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIEBDb250ZW50Q2hpbGRyZW4oSWd4Q29sdW1uQ29tcG9uZW50LCB7IHJlYWQ6IElneENvbHVtbkNvbXBvbmVudCwgZGVzY2VuZGFudHM6IGZhbHNlIH0pXG4gICAgcHVibGljIGNoaWxkQ29sdW1ucyA9IG5ldyBRdWVyeUxpc3Q8SWd4Q29sdW1uQ29tcG9uZW50PigpO1xuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIEBPdXRwdXQoKVxuICAgIHB1YmxpYyBvbkxheW91dENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gICAgLyoqXG4gICAgICogRXZlbnQgZW1taXRlZCB3aGVuIGEgZ3JpZCBpcyBiZWluZyBjcmVhdGVkIGJhc2VkIG9uIHRoaXMgcm93IGlzbGFuZC5cbiAgICAgKiBgYGBodG1sXG4gICAgICogPGlneC1oaWVyYXJjaGljYWwtZ3JpZCBbZGF0YV09XCJEYXRhXCIgW2F1dG9HZW5lcmF0ZV09XCJ0cnVlXCI+XG4gICAgICogICAgICA8aWd4LXJvdy1pc2xhbmQgW2tleV09XCInY2hpbGREYXRhJ1wiIChvbkdyaWRDcmVhdGVkKT1cImdyaWRDcmVhdGVkKCRldmVudClcIiAjcm93SXNsYW5kPlxuICAgICAqICAgICAgICAgIDwhLS0gLi4uIC0tPlxuICAgICAqICAgICAgPC9pZ3gtcm93LWlzbGFuZD5cbiAgICAgKiA8L2lneC1oaWVyYXJjaGljYWwtZ3JpZD5cbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4Um93SXNsYW5kQ29tcG9uZW50XG4gICAgICovXG4gICAgQE91dHB1dCgpXG4gICAgcHVibGljIG9uR3JpZENyZWF0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPElHcmlkQ3JlYXRlZEV2ZW50QXJncz4oKTtcblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBnZXQgaWQoKSB7XG4gICAgICAgIGNvbnN0IHBJZCA9IHRoaXMucGFyZW50SWQgPyB0aGlzLnBhcmVudElkLnN1YnN0cmluZyh0aGlzLnBhcmVudElkLmluZGV4T2YodGhpcy5sYXlvdXRfaWQpICsgdGhpcy5sYXlvdXRfaWQubGVuZ3RoKSArICctJyA6ICcnO1xuICAgICAgICByZXR1cm4gdGhpcy5sYXlvdXRfaWQgKyBwSWQgKyAgdGhpcy5rZXk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIGdldCBwYXJlbnRJZCgpIHtcbiAgICAgICByZXR1cm4gdGhpcy5wYXJlbnRJc2xhbmQgPyB0aGlzLnBhcmVudElzbGFuZC5pZCA6IG51bGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIGdldCBsZXZlbCgpIHtcbiAgICAgICAgbGV0IHB0ciA9IHRoaXMucGFyZW50SXNsYW5kO1xuICAgICAgICBsZXQgbHZsID0gMDtcbiAgICAgICAgd2hpbGUgKHB0cikge1xuICAgICAgICAgICAgbHZsKys7XG4gICAgICAgICAgICBwdHIgPSBwdHIucGFyZW50SXNsYW5kO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBsdmwgKyAxO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB0cmFuc2FjdGlvbnMgc2VydmljZSBmb3IgdGhlIGNoaWxkcmVuIGdyaWQgY29tcG9uZW50cy5cbiAgICAgKiBAZXhwZXJpbWVudGFsIEBoaWRkZW5cbiAgICAgKi9cbiAgICBnZXQgdHJhbnNhY3Rpb25zKCk6IFRyYW5zYWN0aW9uU2VydmljZTxUcmFuc2FjdGlvbiwgU3RhdGU+IHtcbiAgICAgICAgY29uc3QgZ3JpZHMgPSB0aGlzLnJvd0lzbGFuZEFQSS5nZXRDaGlsZEdyaWRzKCk7XG4gICAgICAgIHJldHVybiBncmlkcy5sZW5ndGggPyBncmlkc1swXS50cmFuc2FjdGlvbnMgOiB0aGlzLl90cmFuc2FjdGlvbnM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyBpbml0aWFsQ2hhbmdlcyA9IFtdO1xuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyByb290R3JpZCA9IG51bGw7XG4gICAgcmVhZG9ubHkgZGF0YTogYW55W107XG4gICAgcmVhZG9ubHkgZmlsdGVyZWREYXRhOiBhbnlbXTtcbiAgICBwcml2YXRlIGxheW91dF9pZCA9IGBpZ3gtcm93LWlzbGFuZC1gO1xuICAgIHByaXZhdGUgaXNJbml0ID0gZmFsc2U7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHVibGljIHNlbGVjdGlvblNlcnZpY2U6IElneEdyaWRTZWxlY3Rpb25TZXJ2aWNlLFxuICAgICAgICBjcnVkU2VydmljZTogSWd4R3JpZENSVURTZXJ2aWNlLFxuICAgICAgICBncmlkQVBJOiBHcmlkQmFzZUFQSVNlcnZpY2U8SWd4R3JpZEJhc2VDb21wb25lbnQgJiBJR3JpZERhdGFCaW5kYWJsZT4sXG4gICAgICAgIHNlbGVjdGlvbjogSWd4SGllcmFyY2hpY2FsU2VsZWN0aW9uQVBJU2VydmljZSxcbiAgICAgICAgQEluamVjdChJZ3hHcmlkVHJhbnNhY3Rpb24pIHByb3RlY3RlZCB0cmFuc2FjdGlvbkZhY3Rvcnk6IGFueSxcbiAgICAgICAgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICAgICAgem9uZTogTmdab25lLFxuICAgICAgICBASW5qZWN0KERPQ1VNRU5UKSBwdWJsaWMgZG9jdW1lbnQsXG4gICAgICAgIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgICAgIHJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gICAgICAgIGRpZmZlcnM6IEl0ZXJhYmxlRGlmZmVycyxcbiAgICAgICAgdmlld1JlZjogVmlld0NvbnRhaW5lclJlZixcbiAgICAgICAgbmF2aWdhdGlvbjogSWd4SGllcmFyY2hpY2FsR3JpZE5hdmlnYXRpb25TZXJ2aWNlLFxuICAgICAgICBmaWx0ZXJpbmdTZXJ2aWNlOiBJZ3hGaWx0ZXJpbmdTZXJ2aWNlLFxuICAgICAgICBASW5qZWN0KElneE92ZXJsYXlTZXJ2aWNlKSBwcm90ZWN0ZWQgb3ZlcmxheVNlcnZpY2U6IElneE92ZXJsYXlTZXJ2aWNlLFxuICAgICAgICBwdWJsaWMgc3VtbWFyeVNlcnZpY2U6IElneEdyaWRTdW1tYXJ5U2VydmljZSxcbiAgICAgICAgQE9wdGlvbmFsKCkgQEluamVjdChEaXNwbGF5RGVuc2l0eVRva2VuKSBwcm90ZWN0ZWQgX2Rpc3BsYXlEZW5zaXR5T3B0aW9uczogSURpc3BsYXlEZW5zaXR5T3B0aW9ucyxcbiAgICAgICAgcHVibGljIHJvd0lzbGFuZEFQSTogSWd4Um93SXNsYW5kQVBJU2VydmljZSkge1xuICAgICAgICBzdXBlcihcbiAgICAgICAgICAgIHNlbGVjdGlvblNlcnZpY2UsXG4gICAgICAgICAgICBjcnVkU2VydmljZSxcbiAgICAgICAgICAgIGdyaWRBUEksXG4gICAgICAgICAgICBzZWxlY3Rpb24sXG4gICAgICAgICAgICB0eXBlb2YgdHJhbnNhY3Rpb25GYWN0b3J5ID09PSAnZnVuY3Rpb24nID8gdHJhbnNhY3Rpb25GYWN0b3J5KCkgOiB0cmFuc2FjdGlvbkZhY3RvcnksXG4gICAgICAgICAgICBlbGVtZW50UmVmLFxuICAgICAgICAgICAgem9uZSxcbiAgICAgICAgICAgIGRvY3VtZW50LFxuICAgICAgICAgICAgY2RyLFxuICAgICAgICAgICAgcmVzb2x2ZXIsXG4gICAgICAgICAgICBkaWZmZXJzLFxuICAgICAgICAgICAgdmlld1JlZixcbiAgICAgICAgICAgIG5hdmlnYXRpb24sXG4gICAgICAgICAgICBmaWx0ZXJpbmdTZXJ2aWNlLFxuICAgICAgICAgICAgb3ZlcmxheVNlcnZpY2UsXG4gICAgICAgICAgICBzdW1tYXJ5U2VydmljZSxcbiAgICAgICAgICAgIF9kaXNwbGF5RGVuc2l0eU9wdGlvbnNcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5oZ3JpZEFQSSA9IDxJZ3hIaWVyYXJjaGljYWxHcmlkQVBJU2VydmljZT5ncmlkQVBJO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5yb290R3JpZCA9IHRoaXMuaGdyaWRBUEkuZ3JpZDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgICAgICB0aGlzLnVwZGF0ZUNoaWxkcmVuKCk7XG4gICAgICAgIHRoaXMuY2hpbGRyZW4ubm90aWZ5T25DaGFuZ2VzKCk7XG4gICAgICAgIHRoaXMuY2hpbGRyZW4uY2hhbmdlcy5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcbiAgICAgICAgLnN1YnNjcmliZSgoY2hhbmdlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUNoaWxkcmVuKCk7XG4gICAgICAgICAgICAvLyB1cGRhdGUgZXhpc3RpbmcgZ3JpZHMgc2luY2UgdGhlaXIgY2hpbGQgcmkgaGF2ZSBiZWVuIGNoYW5nZWQuXG4gICAgICAgICAgICB0aGlzLmdldEdyaWRzRm9ySXNsYW5kKHRoaXMua2V5KS5mb3JFYWNoKGdyaWQgPT4ge1xuICAgICAgICAgICAgICAgIChncmlkIGFzIGFueSkub25Sb3dJc2xhbmRDaGFuZ2UodGhpcy5jaGlsZHJlbik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IG5lc3RlZENvbHVtbnMgPSB0aGlzLmNoaWxkcmVuLm1hcCgobGF5b3V0KSA9PiBsYXlvdXQuY29sdW1uTGlzdC50b0FycmF5KCkpO1xuICAgICAgICBjb25zdCBjb2xzQXJyYXkgPSBbXS5jb25jYXQuYXBwbHkoW10sIG5lc3RlZENvbHVtbnMpO1xuICAgICAgICBjb25zdCB0b3BDb2xzID0gdGhpcy5jb2x1bW5MaXN0LmZpbHRlcigoaXRlbSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGNvbHNBcnJheS5pbmRleE9mKGl0ZW0pID09PSAtMTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuY2hpbGRDb2x1bW5zLnJlc2V0KHRvcENvbHMpO1xuICAgICAgICB0aGlzLmNvbHVtbkxpc3QuY2hhbmdlcy5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKCgpID0+IHsgdGhpcy51cGRhdGVDb2x1bW5MaXN0KCk7IH0pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCB1cGRhdGVDaGlsZHJlbigpIHtcbiAgICAgICAgdGhpcy5jaGlsZHJlbi5yZXNldCh0aGlzLmNoaWxkcmVuLnRvQXJyYXkoKS5zbGljZSgxKSk7XG4gICAgICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaChjaGlsZCA9PiB7XG4gICAgICAgICAgICBjaGlsZC5wYXJlbnRJc2xhbmQgPSB0aGlzO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgICB0aGlzLnJvd0lzbGFuZEFQSS5yZWdpc3Rlcih0aGlzKTtcbiAgICAgICAgaWYgKHRoaXMucGFyZW50SXNsYW5kKSB7XG4gICAgICAgICAgICB0aGlzLnBhcmVudElzbGFuZC5yb3dJc2xhbmRBUEkucmVnaXN0ZXJDaGlsZFJvd0lzbGFuZCh0aGlzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucm9vdEdyaWQuaGdyaWRBUEkucmVnaXN0ZXJDaGlsZFJvd0lzbGFuZCh0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9pbml0ID0gZmFsc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXMpIHtcbiAgICAgICAgdGhpcy5vbkxheW91dENoYW5nZS5lbWl0KGNoYW5nZXMpO1xuICAgICAgICBpZiAoIXRoaXMuaXNJbml0KSB7XG4gICAgICAgICAgICB0aGlzLmluaXRpYWxDaGFuZ2VzLnB1c2goY2hhbmdlcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIC8vIE92ZXJyaWRlIHRoZSBiYXNlIGRlc3Ryb3kgYmVjYXVzZSB3ZSBkb24ndCBoYXZlIHJlbmRlcmVkIGFueXRoaW5nIHRvIHVzZSByZW1vdmVFdmVudExpc3RlbmVyIG9uXG4gICAgICAgIHRoaXMuZGVzdHJveSQubmV4dCh0cnVlKTtcbiAgICAgICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xuICAgICAgICB0aGlzLl9kZXN0cm95ZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLnJvd0lzbGFuZEFQSS51bnNldCh0aGlzLmlkKTtcbiAgICAgICAgaWYgKHRoaXMucGFyZW50SXNsYW5kKSB7XG4gICAgICAgICAgICB0aGlzLmdldEdyaWRzRm9ySXNsYW5kKHRoaXMua2V5KS5mb3JFYWNoKGdyaWQgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuY2xlYW5HcmlkU3RhdGUoZ3JpZCk7XG4gICAgICAgICAgICAgICAgZ3JpZC5oZ3JpZEFQSS51bnNldENoaWxkUm93SXNsYW5kKHRoaXMpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLnBhcmVudElzbGFuZC5yb3dJc2xhbmRBUEkudW5zZXRDaGlsZFJvd0lzbGFuZCh0aGlzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucm9vdEdyaWQuaGdyaWRBUEkudW5zZXRDaGlsZFJvd0lzbGFuZCh0aGlzKTtcbiAgICAgICAgICAgIHRoaXMuY2xlYW5HcmlkU3RhdGUodGhpcy5yb290R3JpZCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGNsZWFuR3JpZFN0YXRlKGdyaWQpIHtcbiAgICAgICAgZ3JpZC5jaGlsZEdyaWRUZW1wbGF0ZXMuZm9yRWFjaCgodG1wbCkgPT4ge1xuICAgICAgICAgICAgdG1wbC5vd25lci5jbGVhblZpZXcodG1wbC5jb250ZXh0LnRlbXBsYXRlSUQpO1xuICAgICAgICB9KTtcbiAgICAgICAgZ3JpZC5jaGlsZEdyaWRUZW1wbGF0ZXMuY2xlYXIoKTtcbiAgICAgICAgZ3JpZC5vblJvd0lzbGFuZENoYW5nZSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICByZWZsb3coKSB7fVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIGNhbGN1bGF0ZUdyaWRIZWlnaHQoKSB7fVxuXG4gICAgcHJvdGVjdGVkIHVwZGF0ZUNvbHVtbkxpc3QoKSB7XG4gICAgICAgIGNvbnN0IG5lc3RlZENvbHVtbnMgPSB0aGlzLmNoaWxkcmVuLm1hcCgobGF5b3V0KSA9PiBsYXlvdXQuY29sdW1uTGlzdC50b0FycmF5KCkpO1xuICAgICAgICBjb25zdCBjb2xzQXJyYXkgPSBbXS5jb25jYXQuYXBwbHkoW10sIG5lc3RlZENvbHVtbnMpO1xuICAgICAgICBjb25zdCB0b3BDb2xzID0gdGhpcy5jb2x1bW5MaXN0LmZpbHRlcigoaXRlbSkgPT4ge1xuICAgICAgICAgICAgaWYgKGNvbHNBcnJheS5pbmRleE9mKGl0ZW0pID09PSAtMSkge1xuICAgICAgICAgICAgICAgIC8qIFJlc2V0IHRoZSBkZWZhdWx0IHdpZHRoIG9mIHRoZSBjb2x1bW5zIHRoYXQgY29tZSBpbnRvIHRoaXMgcm93IGlzbGFuZCxcbiAgICAgICAgICAgICAgICBiZWNhdXNlIHRoZSByb290IGNhdGNoZXMgdGhlbSBmaXJzdCBkdXJpbmcgdGhlIGRldGVjdENoYW5nZXMoKSBhbmQgc2V0cyB0aGVpciBkZWZhdWx0V2lkdGguICovXG4gICAgICAgICAgICAgICAgaXRlbS5kZWZhdWx0V2lkdGggPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmNoaWxkQ29sdW1ucy5yZXNldCh0b3BDb2xzKTtcblxuICAgICAgICBpZiAodGhpcy5wYXJlbnRJc2xhbmQpIHtcbiAgICAgICAgICAgIHRoaXMucGFyZW50SXNsYW5kLmNvbHVtbkxpc3Qubm90aWZ5T25DaGFuZ2VzKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnJvb3RHcmlkLmNvbHVtbkxpc3Qubm90aWZ5T25DaGFuZ2VzKCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnJvd0lzbGFuZEFQSS5nZXRDaGlsZEdyaWRzKCkuZm9yRWFjaCgoZ3JpZDogSWd4SGllcmFyY2hpY2FsR3JpZENvbXBvbmVudCkgPT4ge1xuICAgICAgICAgICAgZ3JpZC5jcmVhdGVDb2x1bW5zTGlzdCh0aGlzLmNoaWxkQ29sdW1ucy50b0FycmF5KCkpO1xuICAgICAgICAgICAgaWYgKCFkb2N1bWVudC5ib2R5LmNvbnRhaW5zKGdyaWQubmF0aXZlRWxlbWVudCkpIHtcbiAgICAgICAgICAgICAgICBncmlkLnVwZGF0ZU9uUmVuZGVyID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuIl19