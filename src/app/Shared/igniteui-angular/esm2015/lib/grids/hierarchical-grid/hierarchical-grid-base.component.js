/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ElementRef, NgZone, ChangeDetectorRef, IterableDiffers, ViewContainerRef, Inject, ComponentFactoryResolver, Optional, Input, ViewChild, TemplateRef } from '@angular/core';
import { IgxGridBaseComponent, IgxGridTransaction } from '../grid-base.component';
import { GridBaseAPIService } from '../api.service';
import { IgxFilteringService } from '../filtering/grid-filtering.service';
import { DisplayDensityToken } from '../../core/displayDensity';
import { IgxColumnComponent, IgxColumnGroupComponent } from '../column.component';
import { IgxSummaryOperand } from '../summaries/grid-summary';
import { IgxHierarchicalTransactionService, IgxOverlayService } from '../../services/index';
import { DOCUMENT } from '@angular/common';
import { IgxHierarchicalSelectionAPIService } from './selection';
import { IgxHierarchicalGridNavigationService } from './hierarchical-grid-navigation.service';
import { IgxGridSummaryService } from '../summaries/grid-summary.service';
import { IgxGridSelectionService, IgxGridCRUDService } from '../../core/grid-selection';
/** @type {?} */
export const IgxHierarchicalTransactionServiceFactory = {
    provide: IgxGridTransaction,
    useFactory: hierarchicalTransactionServiceFactory
};
/**
 * @return {?}
 */
export function hierarchicalTransactionServiceFactory() {
    return () => new IgxHierarchicalTransactionService();
}
/**
 * @record
 */
export function IPathSegment() { }
if (false) {
    /** @type {?} */
    IPathSegment.prototype.rowID;
    /** @type {?} */
    IPathSegment.prototype.rowIslandKey;
}
/**
 * @abstract
 */
export class IgxHierarchicalGridBaseComponent extends IgxGridBaseComponent {
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
     */
    constructor(selectionService, crudService, gridAPI, selection, transactionFactory, elementRef, zone, document, cdr, resolver, differs, viewRef, navigation, filteringService, overlayService, summaryService, _displayDensityOptions) {
        super(selectionService, crudService, gridAPI, selection, typeof transactionFactory === 'function' ? transactionFactory() : transactionFactory, elementRef, zone, document, cdr, resolver, differs, viewRef, navigation, filteringService, overlayService, summaryService, _displayDensityOptions);
        this.selectionService = selectionService;
        this.transactionFactory = transactionFactory;
        this.document = document;
        this.overlayService = overlayService;
        this.summaryService = summaryService;
        this._displayDensityOptions = _displayDensityOptions;
        this._expandChildren = false;
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
        this.dragIndicatorIconTemplate = null;
        this.hgridAPI = (/** @type {?} */ (gridAPI));
    }
    /**
     * @hidden
     * @return {?}
     */
    get maxLevelHeaderDepth() {
        if (this._maxLevelHeaderDepth === null) {
            this._maxLevelHeaderDepth = this.columnList.reduce((acc, col) => Math.max(acc, col.level), 0);
        }
        return this._maxLevelHeaderDepth;
    }
    /**
     * @hidden
     * @protected
     * @return {?}
     */
    get outlet() {
        return this.rootGrid ? this.rootGrid.outletDirective : this.outletDirective;
    }
    /**
     * @hidden
     * @param {?} cols
     * @return {?}
     */
    createColumnsList(cols) {
        /** @type {?} */
        const columns = [];
        /** @type {?} */
        const topLevelCols = this.onlyTopLevel(cols);
        topLevelCols.forEach((col) => {
            /** @type {?} */
            const ref = this._createColumn(col);
            ref.changeDetectorRef.detectChanges();
            columns.push(ref.instance);
        });
        /** @type {?} */
        const result = flatten(columns);
        this.columnList.reset(result);
        this.columnList.notifyOnChanges();
    }
    /**
     * @protected
     * @param {?} col
     * @return {?}
     */
    _createColumn(col) {
        /** @type {?} */
        let ref;
        if (col instanceof IgxColumnGroupComponent) {
            ref = this._createColGroupComponent(col);
        }
        else {
            ref = this._createColComponent(col);
        }
        return ref;
    }
    /**
     * @protected
     * @param {?} col
     * @return {?}
     */
    _createColGroupComponent(col) {
        /** @type {?} */
        const factoryGroup = this.resolver.resolveComponentFactory(IgxColumnGroupComponent);
        /** @type {?} */
        const ref = this.viewRef.createComponent(factoryGroup, null, this.viewRef.injector);
        ref.changeDetectorRef.detectChanges();
        factoryGroup.inputs.forEach((input) => {
            /** @type {?} */
            const propName = input.propName;
            ((/** @type {?} */ (ref.instance)))[propName] = ((/** @type {?} */ (col)))[propName];
        });
        if (col.children.length > 0) {
            /** @type {?} */
            const newChildren = [];
            col.children.forEach(child => {
                /** @type {?} */
                const newCol = this._createColumn(child).instance;
                newCol.parent = ref.instance;
                newChildren.push(newCol);
            });
            ((/** @type {?} */ (ref.instance))).children.reset(newChildren);
            ((/** @type {?} */ (ref.instance))).children.notifyOnChanges();
        }
        ((/** @type {?} */ (ref.instance))).grid = this;
        return ref;
    }
    /**
     * @protected
     * @param {?} col
     * @return {?}
     */
    _createColComponent(col) {
        /** @type {?} */
        const factoryColumn = this.resolver.resolveComponentFactory(IgxColumnComponent);
        /** @type {?} */
        const ref = this.viewRef.createComponent(factoryColumn, null, this.viewRef.injector);
        factoryColumn.inputs.forEach((input) => {
            /** @type {?} */
            const propName = input.propName;
            if (!(((/** @type {?} */ (col)))[propName] instanceof IgxSummaryOperand)) {
                ((/** @type {?} */ (ref.instance)))[propName] = ((/** @type {?} */ (col)))[propName];
            }
            else {
                ((/** @type {?} */ (ref.instance)))[propName] = col[propName].constructor;
            }
        });
        ((/** @type {?} */ (ref.instance))).grid = this;
        return ref;
    }
    /**
     * @protected
     * @param {?} rowIslandID
     * @return {?}
     */
    getGridsForIsland(rowIslandID) {
        return this.hgridAPI.getChildGridsForRowIsland(rowIslandID);
    }
    /**
     * @protected
     * @param {?} path
     * @return {?}
     */
    getChildGrid(path) {
        if (!path) {
            return;
        }
        return this.hgridAPI.getChildGrid(path);
    }
}
/** @nocollapse */
IgxHierarchicalGridBaseComponent.ctorParameters = () => [
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
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [DisplayDensityToken,] }] }
];
IgxHierarchicalGridBaseComponent.propDecorators = {
    expandChildren: [{ type: Input }],
    dragIndicatorIconBase: [{ type: ViewChild, args: ['dragIndicatorIconBase', { read: TemplateRef, static: true },] }]
};
if (false) {
    /** @type {?} */
    IgxHierarchicalGridBaseComponent.prototype.rootGrid;
    /** @type {?} */
    IgxHierarchicalGridBaseComponent.prototype.expandChildren;
    /**
     * @hidden
     * @type {?}
     */
    IgxHierarchicalGridBaseComponent.prototype.hgridAPI;
    /**
     * @hidden
     * @type {?}
     */
    IgxHierarchicalGridBaseComponent.prototype.parentIsland;
    /**
     * @hidden
     * @type {?}
     */
    IgxHierarchicalGridBaseComponent.prototype.childRow;
    /**
     * @type {?}
     * @protected
     */
    IgxHierarchicalGridBaseComponent.prototype._expandChildren;
    /**
     * @hidden
     * \@internal
     * @type {?}
     */
    IgxHierarchicalGridBaseComponent.prototype.dragIndicatorIconBase;
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
     * @type {?}
     */
    IgxHierarchicalGridBaseComponent.prototype.dragIndicatorIconTemplate;
    /** @type {?} */
    IgxHierarchicalGridBaseComponent.prototype.selectionService;
    /**
     * @type {?}
     * @protected
     */
    IgxHierarchicalGridBaseComponent.prototype.transactionFactory;
    /** @type {?} */
    IgxHierarchicalGridBaseComponent.prototype.document;
    /**
     * @type {?}
     * @protected
     */
    IgxHierarchicalGridBaseComponent.prototype.overlayService;
    /** @type {?} */
    IgxHierarchicalGridBaseComponent.prototype.summaryService;
    /**
     * @type {?}
     * @protected
     */
    IgxHierarchicalGridBaseComponent.prototype._displayDensityOptions;
}
/**
 * @param {?} arr
 * @return {?}
 */
function flatten(arr) {
    /** @type {?} */
    let result = [];
    arr.forEach(el => {
        result.push(el);
        if (el.children) {
            result = result.concat(flatten(el.children.toArray()));
        }
    });
    return result;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGllcmFyY2hpY2FsLWdyaWQtYmFzZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9pZ25pdGV1aS1hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL2dyaWRzL2hpZXJhcmNoaWNhbC1ncmlkL2hpZXJhcmNoaWNhbC1ncmlkLWJhc2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBR0gsVUFBVSxFQUNWLE1BQU0sRUFDTixpQkFBaUIsRUFDakIsZUFBZSxFQUNmLGdCQUFnQixFQUNoQixNQUFNLEVBQ04sd0JBQXdCLEVBQ3hCLFFBQVEsRUFDUixLQUFLLEVBQ0wsU0FBUyxFQUNULFdBQVcsRUFDZCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsa0JBQWtCLEVBQXFCLE1BQU0sd0JBQXdCLENBQUM7QUFDckcsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHcEQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDMUUsT0FBTyxFQUEwQixtQkFBbUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3hGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ2xGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzlELE9BQU8sRUFBRSxpQ0FBaUMsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzVGLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQUUsa0NBQWtDLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDakUsT0FBTyxFQUFFLG9DQUFvQyxFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDOUYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDMUUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLGtCQUFrQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7O0FBR3hGLE1BQU0sT0FBTyx3Q0FBd0MsR0FBRztJQUNwRCxPQUFPLEVBQUUsa0JBQWtCO0lBQzNCLFVBQVUsRUFBRSxxQ0FBcUM7Q0FDcEQ7Ozs7QUFFRCxNQUFNLFVBQVUscUNBQXFDO0lBQ2pELE9BQU8sR0FBRyxFQUFFLENBQUMsSUFBSSxpQ0FBaUMsRUFBRSxDQUFDO0FBQ3pELENBQUM7Ozs7QUFFRCxrQ0FHQzs7O0lBRkcsNkJBQVc7O0lBQ1gsb0NBQXFCOzs7OztBQUd6QixNQUFNLE9BQWdCLGdDQUFpQyxTQUFRLG9CQUFvQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUErQy9FLFlBQ1csZ0JBQXlDLEVBQ2hELFdBQStCLEVBQy9CLE9BQXFFLEVBQ3JFLFNBQTZDLEVBQ1Asa0JBQXVCLEVBQzdELFVBQXNCLEVBQ3RCLElBQVksRUFDYSxRQUFRLEVBQ2pDLEdBQXNCLEVBQ3RCLFFBQWtDLEVBQ2xDLE9BQXdCLEVBQ3hCLE9BQXlCLEVBQ3pCLFVBQWdELEVBQ2hELGdCQUFxQyxFQUNBLGNBQWlDLEVBQy9ELGNBQXFDLEVBQ08sc0JBQThDO1FBQ2pHLEtBQUssQ0FDRCxnQkFBZ0IsRUFDaEIsV0FBVyxFQUNYLE9BQU8sRUFDUCxTQUFTLEVBQ1QsT0FBTyxrQkFBa0IsS0FBSyxVQUFVLENBQUMsQ0FBQyxDQUFDLGtCQUFrQixFQUFFLENBQUMsQ0FBQyxDQUFDLGtCQUFrQixFQUNwRixVQUFVLEVBQ1YsSUFBSSxFQUNKLFFBQVEsRUFDUixHQUFHLEVBQ0gsUUFBUSxFQUNSLE9BQU8sRUFDUCxPQUFPLEVBQ1AsVUFBVSxFQUNWLGdCQUFnQixFQUNoQixjQUFjLEVBQ2QsY0FBYyxFQUNkLHNCQUFzQixDQUFDLENBQUM7UUFsQ3JCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBeUI7UUFJVix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQUs7UUFHcEMsYUFBUSxHQUFSLFFBQVEsQ0FBQTtRQU9JLG1CQUFjLEdBQWQsY0FBYyxDQUFtQjtRQUMvRCxtQkFBYyxHQUFkLGNBQWMsQ0FBdUI7UUFDTywyQkFBc0IsR0FBdEIsc0JBQXNCLENBQXdCO1FBMUIzRixvQkFBZSxHQUFHLEtBQUssQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztRQWtFM0IsOEJBQXlCLEdBQXFCLElBQUksQ0FBQztRQXJCdEQsSUFBSSxDQUFDLFFBQVEsR0FBRyxtQkFBK0IsT0FBTyxFQUFBLENBQUM7SUFDM0QsQ0FBQzs7Ozs7SUEzRUQsSUFBSSxtQkFBbUI7UUFDbkIsSUFBSSxJQUFJLENBQUMsb0JBQW9CLEtBQUssSUFBSSxFQUFFO1lBQ3BDLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUNqRztRQUNELE9BQU8sSUFBSSxDQUFDLG9CQUFvQixDQUFDO0lBQ3JDLENBQUM7Ozs7OztJQUtELElBQWMsTUFBTTtRQUNoQixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDO0lBQ2hGLENBQUM7Ozs7OztJQXdGTSxpQkFBaUIsQ0FBQyxJQUFnQjs7Y0FDL0IsT0FBTyxHQUFHLEVBQUU7O2NBQ1osWUFBWSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDO1FBQzVDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRTs7a0JBQ25CLEdBQUcsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQztZQUNuQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDdEMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDL0IsQ0FBQyxDQUFDLENBQUM7O2NBQ0csTUFBTSxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUM7UUFDL0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDOUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUN0QyxDQUFDOzs7Ozs7SUFFUyxhQUFhLENBQUMsR0FBRzs7WUFDbkIsR0FBRztRQUNQLElBQUksR0FBRyxZQUFZLHVCQUF1QixFQUFFO1lBQ3hDLEdBQUcsR0FBRyxJQUFJLENBQUMsd0JBQXdCLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDNUM7YUFBTTtZQUNILEdBQUcsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDdkM7UUFDRCxPQUFPLEdBQUcsQ0FBQztJQUNmLENBQUM7Ozs7OztJQUVTLHdCQUF3QixDQUFDLEdBQTRCOztjQUNyRCxZQUFZLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyx1QkFBdUIsQ0FBQyx1QkFBdUIsQ0FBQzs7Y0FDN0UsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLFlBQVksRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUM7UUFDbkYsR0FBRyxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3RDLFlBQVksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUU7O2tCQUM1QixRQUFRLEdBQUcsS0FBSyxDQUFDLFFBQVE7WUFDL0IsQ0FBQyxtQkFBSyxHQUFHLENBQUMsUUFBUSxFQUFBLENBQUMsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLG1CQUFLLEdBQUcsRUFBQSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDekQsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLEdBQUcsQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTs7a0JBQ25CLFdBQVcsR0FBRyxFQUFFO1lBQ3RCLEdBQUcsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFOztzQkFDbkIsTUFBTSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUMsUUFBUTtnQkFDakQsTUFBTSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUMsUUFBUSxDQUFDO2dCQUM3QixXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzdCLENBQUMsQ0FBQyxDQUFDO1lBQ0gsQ0FBQyxtQkFBeUIsR0FBRyxDQUFDLFFBQVEsRUFBQSxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUNwRSxDQUFDLG1CQUF5QixHQUFHLENBQUMsUUFBUSxFQUFBLENBQUMsQ0FBQyxRQUFRLENBQUMsZUFBZSxFQUFFLENBQUM7U0FDdEU7UUFDRCxDQUFDLG1CQUF5QixHQUFHLENBQUMsUUFBUSxFQUFBLENBQUMsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ3BELE9BQU8sR0FBRyxDQUFDO0lBQ2YsQ0FBQzs7Ozs7O0lBRVMsbUJBQW1CLENBQUMsR0FBRzs7Y0FDdkIsYUFBYSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsdUJBQXVCLENBQUMsa0JBQWtCLENBQUM7O2NBQ3pFLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxhQUFhLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDO1FBQ3BGLGFBQWEsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUU7O2tCQUM3QixRQUFRLEdBQUcsS0FBSyxDQUFDLFFBQVE7WUFDL0IsSUFBSSxDQUFDLENBQUMsQ0FBQyxtQkFBSyxHQUFHLEVBQUEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxZQUFZLGlCQUFpQixDQUFDLEVBQUU7Z0JBQ3RELENBQUMsbUJBQUssR0FBRyxDQUFDLFFBQVEsRUFBQSxDQUFDLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxtQkFBSyxHQUFHLEVBQUEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQ3hEO2lCQUFNO2dCQUNILENBQUMsbUJBQUssR0FBRyxDQUFDLFFBQVEsRUFBQSxDQUFDLENBQUMsUUFBUSxDQUFDLEdBQUcsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFdBQVcsQ0FBQzthQUM3RDtRQUNMLENBQUMsQ0FBQyxDQUFDO1FBQ0gsQ0FBQyxtQkFBb0IsR0FBRyxDQUFDLFFBQVEsRUFBQSxDQUFDLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUMvQyxPQUFPLEdBQUcsQ0FBQztJQUNmLENBQUM7Ozs7OztJQUVTLGlCQUFpQixDQUFDLFdBQW1CO1FBQzNDLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyx5QkFBeUIsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNoRSxDQUFDOzs7Ozs7SUFFUyxZQUFZLENBQUMsSUFBeUI7UUFDNUMsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNQLE9BQU87U0FDVjtRQUNELE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDNUMsQ0FBQzs7OztZQW5NSSx1QkFBdUI7WUFBRSxrQkFBa0I7WUFaM0Msa0JBQWtCO1lBU2xCLGtDQUFrQzs0Q0F3RWxDLE1BQU0sU0FBQyxrQkFBa0I7WUE5RjlCLFVBQVU7WUFDVixNQUFNOzRDQWdHRCxNQUFNLFNBQUMsUUFBUTtZQS9GcEIsaUJBQWlCO1lBSWpCLHdCQUF3QjtZQUh4QixlQUFlO1lBQ2YsZ0JBQWdCO1lBbUJYLG9DQUFvQztZQVBwQyxtQkFBbUI7WUFJZ0IsaUJBQWlCLHVCQW9GcEQsTUFBTSxTQUFDLGlCQUFpQjtZQWhGeEIscUJBQXFCOzRDQWtGckIsUUFBUSxZQUFJLE1BQU0sU0FBQyxtQkFBbUI7Ozs2QkE3RDFDLEtBQUs7b0NBeUNMLFNBQVMsU0FBQyx1QkFBdUIsRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTs7OztJQTNDdkUsb0RBQXlCOztJQUV6QiwwREFDK0I7Ozs7O0lBc0IvQixvREFBK0M7Ozs7O0lBSy9DLHdEQUEyQzs7Ozs7SUFLM0Msb0RBQTBDOzs7OztJQUUxQywyREFBa0M7Ozs7OztJQU1sQyxpRUFDK0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBMkQvQyxxRUFBMEQ7O0lBeER0RCw0REFBZ0Q7Ozs7O0lBSWhELDhEQUE2RDs7SUFHN0Qsb0RBQWlDOzs7OztJQU9qQywwREFBc0U7O0lBQ3RFLDBEQUE0Qzs7Ozs7SUFDNUMsa0VBQWlHOzs7Ozs7QUFxSHpHLFNBQVMsT0FBTyxDQUFDLEdBQVU7O1FBQ25CLE1BQU0sR0FBRyxFQUFFO0lBRWYsR0FBRyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsRUFBRTtRQUNiLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDaEIsSUFBSSxFQUFFLENBQUMsUUFBUSxFQUFFO1lBQ2IsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQzFEO0lBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDSCxPQUFPLE1BQU0sQ0FBQztBQUNsQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBRdWVyeUxpc3QsXG4gICAgQ29udGVudENoaWxkcmVuLFxuICAgIEVsZW1lbnRSZWYsXG4gICAgTmdab25lLFxuICAgIENoYW5nZURldGVjdG9yUmVmLFxuICAgIEl0ZXJhYmxlRGlmZmVycyxcbiAgICBWaWV3Q29udGFpbmVyUmVmLFxuICAgIEluamVjdCxcbiAgICBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gICAgT3B0aW9uYWwsXG4gICAgSW5wdXQsXG4gICAgVmlld0NoaWxkLFxuICAgIFRlbXBsYXRlUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSWd4R3JpZEJhc2VDb21wb25lbnQsIElneEdyaWRUcmFuc2FjdGlvbiwgSUdyaWREYXRhQmluZGFibGUgfSBmcm9tICcuLi9ncmlkLWJhc2UuY29tcG9uZW50JztcbmltcG9ydCB7IEdyaWRCYXNlQVBJU2VydmljZSB9IGZyb20gJy4uL2FwaS5zZXJ2aWNlJztcbmltcG9ydCB7IElneEhpZXJhcmNoaWNhbEdyaWRBUElTZXJ2aWNlIH0gZnJvbSAnLi9oaWVyYXJjaGljYWwtZ3JpZC1hcGkuc2VydmljZSc7XG5pbXBvcnQgeyBJZ3hSb3dJc2xhbmRDb21wb25lbnQgfSBmcm9tICcuL3Jvdy1pc2xhbmQuY29tcG9uZW50JztcbmltcG9ydCB7IElneEZpbHRlcmluZ1NlcnZpY2UgfSBmcm9tICcuLi9maWx0ZXJpbmcvZ3JpZC1maWx0ZXJpbmcuc2VydmljZSc7XG5pbXBvcnQgeyBJRGlzcGxheURlbnNpdHlPcHRpb25zLCBEaXNwbGF5RGVuc2l0eVRva2VuIH0gZnJvbSAnLi4vLi4vY29yZS9kaXNwbGF5RGVuc2l0eSc7XG5pbXBvcnQgeyBJZ3hDb2x1bW5Db21wb25lbnQsIElneENvbHVtbkdyb3VwQ29tcG9uZW50IH0gZnJvbSAnLi4vY29sdW1uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJZ3hTdW1tYXJ5T3BlcmFuZCB9IGZyb20gJy4uL3N1bW1hcmllcy9ncmlkLXN1bW1hcnknO1xuaW1wb3J0IHsgSWd4SGllcmFyY2hpY2FsVHJhbnNhY3Rpb25TZXJ2aWNlLCBJZ3hPdmVybGF5U2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2luZGV4JztcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IElneEhpZXJhcmNoaWNhbFNlbGVjdGlvbkFQSVNlcnZpY2UgfSBmcm9tICcuL3NlbGVjdGlvbic7XG5pbXBvcnQgeyBJZ3hIaWVyYXJjaGljYWxHcmlkTmF2aWdhdGlvblNlcnZpY2UgfSBmcm9tICcuL2hpZXJhcmNoaWNhbC1ncmlkLW5hdmlnYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBJZ3hHcmlkU3VtbWFyeVNlcnZpY2UgfSBmcm9tICcuLi9zdW1tYXJpZXMvZ3JpZC1zdW1tYXJ5LnNlcnZpY2UnO1xuaW1wb3J0IHsgSWd4R3JpZFNlbGVjdGlvblNlcnZpY2UsIElneEdyaWRDUlVEU2VydmljZSB9IGZyb20gJy4uLy4uL2NvcmUvZ3JpZC1zZWxlY3Rpb24nO1xuaW1wb3J0IHsgSWd4Q2hpbGRHcmlkUm93Q29tcG9uZW50IH0gZnJvbSAnLi9jaGlsZC1ncmlkLXJvdy5jb21wb25lbnQnO1xuXG5leHBvcnQgY29uc3QgSWd4SGllcmFyY2hpY2FsVHJhbnNhY3Rpb25TZXJ2aWNlRmFjdG9yeSA9IHtcbiAgICBwcm92aWRlOiBJZ3hHcmlkVHJhbnNhY3Rpb24sXG4gICAgdXNlRmFjdG9yeTogaGllcmFyY2hpY2FsVHJhbnNhY3Rpb25TZXJ2aWNlRmFjdG9yeVxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGhpZXJhcmNoaWNhbFRyYW5zYWN0aW9uU2VydmljZUZhY3RvcnkoKSB7XG4gICAgcmV0dXJuICgpID0+IG5ldyBJZ3hIaWVyYXJjaGljYWxUcmFuc2FjdGlvblNlcnZpY2UoKTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJUGF0aFNlZ21lbnQge1xuICAgIHJvd0lEOiBhbnk7XG4gICAgcm93SXNsYW5kS2V5OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBJZ3hIaWVyYXJjaGljYWxHcmlkQmFzZUNvbXBvbmVudCBleHRlbmRzIElneEdyaWRCYXNlQ29tcG9uZW50IHtcbiAgICBwdWJsaWMgYWJzdHJhY3Qgcm9vdEdyaWQ7XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBleHBhbmRDaGlsZHJlbjogYm9vbGVhbjtcblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBnZXQgbWF4TGV2ZWxIZWFkZXJEZXB0aCgpIHtcbiAgICAgICAgaWYgKHRoaXMuX21heExldmVsSGVhZGVyRGVwdGggPT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuX21heExldmVsSGVhZGVyRGVwdGggPSB0aGlzLmNvbHVtbkxpc3QucmVkdWNlKChhY2MsIGNvbCkgPT4gTWF0aC5tYXgoYWNjLCBjb2wubGV2ZWwpLCAwKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fbWF4TGV2ZWxIZWFkZXJEZXB0aDtcbiAgICB9XG5cbiAgICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHByb3RlY3RlZCBnZXQgb3V0bGV0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5yb290R3JpZCA/IHRoaXMucm9vdEdyaWQub3V0bGV0RGlyZWN0aXZlIDogdGhpcy5vdXRsZXREaXJlY3RpdmU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyBoZ3JpZEFQSTogSWd4SGllcmFyY2hpY2FsR3JpZEFQSVNlcnZpY2U7XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIHBhcmVudElzbGFuZDogSWd4Um93SXNsYW5kQ29tcG9uZW50O1xuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICovXG4gICAgcHVibGljIGNoaWxkUm93OiBJZ3hDaGlsZEdyaWRSb3dDb21wb25lbnQ7XG5cbiAgICBwcm90ZWN0ZWQgX2V4cGFuZENoaWxkcmVuID0gZmFsc2U7XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICogQGludGVybmFsXG4gICAgICovXG4gICAgQFZpZXdDaGlsZCgnZHJhZ0luZGljYXRvckljb25CYXNlJywgeyByZWFkOiBUZW1wbGF0ZVJlZiwgc3RhdGljOiB0cnVlIH0pXG4gICAgcHVibGljIGRyYWdJbmRpY2F0b3JJY29uQmFzZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwdWJsaWMgc2VsZWN0aW9uU2VydmljZTogSWd4R3JpZFNlbGVjdGlvblNlcnZpY2UsXG4gICAgICAgIGNydWRTZXJ2aWNlOiBJZ3hHcmlkQ1JVRFNlcnZpY2UsXG4gICAgICAgIGdyaWRBUEk6IEdyaWRCYXNlQVBJU2VydmljZTxJZ3hHcmlkQmFzZUNvbXBvbmVudCAmIElHcmlkRGF0YUJpbmRhYmxlPixcbiAgICAgICAgc2VsZWN0aW9uOiBJZ3hIaWVyYXJjaGljYWxTZWxlY3Rpb25BUElTZXJ2aWNlLFxuICAgICAgICBASW5qZWN0KElneEdyaWRUcmFuc2FjdGlvbikgcHJvdGVjdGVkIHRyYW5zYWN0aW9uRmFjdG9yeTogYW55LFxuICAgICAgICBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgICAgICB6b25lOiBOZ1pvbmUsXG4gICAgICAgIEBJbmplY3QoRE9DVU1FTlQpIHB1YmxpYyBkb2N1bWVudCxcbiAgICAgICAgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICAgICAgcmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgICAgICAgZGlmZmVyczogSXRlcmFibGVEaWZmZXJzLFxuICAgICAgICB2aWV3UmVmOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgICAgICBuYXZpZ2F0aW9uOiBJZ3hIaWVyYXJjaGljYWxHcmlkTmF2aWdhdGlvblNlcnZpY2UsXG4gICAgICAgIGZpbHRlcmluZ1NlcnZpY2U6IElneEZpbHRlcmluZ1NlcnZpY2UsXG4gICAgICAgIEBJbmplY3QoSWd4T3ZlcmxheVNlcnZpY2UpIHByb3RlY3RlZCBvdmVybGF5U2VydmljZTogSWd4T3ZlcmxheVNlcnZpY2UsXG4gICAgICAgIHB1YmxpYyBzdW1tYXJ5U2VydmljZTogSWd4R3JpZFN1bW1hcnlTZXJ2aWNlLFxuICAgICAgICBAT3B0aW9uYWwoKSBASW5qZWN0KERpc3BsYXlEZW5zaXR5VG9rZW4pIHByb3RlY3RlZCBfZGlzcGxheURlbnNpdHlPcHRpb25zOiBJRGlzcGxheURlbnNpdHlPcHRpb25zKSB7XG4gICAgICAgIHN1cGVyKFxuICAgICAgICAgICAgc2VsZWN0aW9uU2VydmljZSxcbiAgICAgICAgICAgIGNydWRTZXJ2aWNlLFxuICAgICAgICAgICAgZ3JpZEFQSSxcbiAgICAgICAgICAgIHNlbGVjdGlvbixcbiAgICAgICAgICAgIHR5cGVvZiB0cmFuc2FjdGlvbkZhY3RvcnkgPT09ICdmdW5jdGlvbicgPyB0cmFuc2FjdGlvbkZhY3RvcnkoKSA6IHRyYW5zYWN0aW9uRmFjdG9yeSxcbiAgICAgICAgICAgIGVsZW1lbnRSZWYsXG4gICAgICAgICAgICB6b25lLFxuICAgICAgICAgICAgZG9jdW1lbnQsXG4gICAgICAgICAgICBjZHIsXG4gICAgICAgICAgICByZXNvbHZlcixcbiAgICAgICAgICAgIGRpZmZlcnMsXG4gICAgICAgICAgICB2aWV3UmVmLFxuICAgICAgICAgICAgbmF2aWdhdGlvbixcbiAgICAgICAgICAgIGZpbHRlcmluZ1NlcnZpY2UsXG4gICAgICAgICAgICBvdmVybGF5U2VydmljZSxcbiAgICAgICAgICAgIHN1bW1hcnlTZXJ2aWNlLFxuICAgICAgICAgICAgX2Rpc3BsYXlEZW5zaXR5T3B0aW9ucyk7XG4gICAgICAgIHRoaXMuaGdyaWRBUEkgPSA8SWd4SGllcmFyY2hpY2FsR3JpZEFQSVNlcnZpY2U+Z3JpZEFQSTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgY3VzdG9tIHRlbXBsYXRlLCBpZiBhbnksIHRoYXQgc2hvdWxkIGJlIHVzZWQgd2hlbiByZW5kZXJpbmcgdGhlIHJvdyBkcmFnIGluZGljYXRvciBpY29uXG4gICAgICpcbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogLy8gU2V0IGluIHR5cGVzY3JpcHRcbiAgICAgKiBjb25zdCBteUN1c3RvbVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+ID0gbXlDb21wb25lbnQuY3VzdG9tVGVtcGxhdGU7XG4gICAgICogbXlDb21wb25lbnQuZHJhZ0luZGljYXRvckljb25UZW1wbGF0ZSA9IG15Q3VzdG9tVGVtcGxhdGU7XG4gICAgICogYGBgXG4gICAgICogYGBgaHRtbFxuICAgICAqIDwhLS0gU2V0IGluIG1hcmt1cCAtLT5cbiAgICAgKiAgPGlneC1ncmlkICNncmlkPlxuICAgICAqICAgICAgLi4uXG4gICAgICogICAgICA8bmctdGVtcGxhdGUgaWd4RHJhZ0luZGljYXRvckljb24+XG4gICAgICogICAgICAgICAgPGlneC1pY29uIGZvbnRTZXQ9XCJtYXRlcmlhbFwiPmluZm88L2lneC1pY29uPlxuICAgICAqICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgKiAgPC9pZ3gtZ3JpZD5cbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBwdWJsaWMgZHJhZ0luZGljYXRvckljb25UZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PiA9IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIGNyZWF0ZUNvbHVtbnNMaXN0KGNvbHM6IEFycmF5PGFueT4pIHtcbiAgICAgICAgY29uc3QgY29sdW1ucyA9IFtdO1xuICAgICAgICBjb25zdCB0b3BMZXZlbENvbHMgPSB0aGlzLm9ubHlUb3BMZXZlbChjb2xzKTtcbiAgICAgICAgdG9wTGV2ZWxDb2xzLmZvckVhY2goKGNvbCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVmID0gdGhpcy5fY3JlYXRlQ29sdW1uKGNvbCk7XG4gICAgICAgICAgICByZWYuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgICAgICAgY29sdW1ucy5wdXNoKHJlZi5pbnN0YW5jZSk7XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCByZXN1bHQgPSBmbGF0dGVuKGNvbHVtbnMpO1xuICAgICAgICB0aGlzLmNvbHVtbkxpc3QucmVzZXQocmVzdWx0KTtcbiAgICAgICAgdGhpcy5jb2x1bW5MaXN0Lm5vdGlmeU9uQ2hhbmdlcygpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfY3JlYXRlQ29sdW1uKGNvbCkge1xuICAgICAgICBsZXQgcmVmO1xuICAgICAgICBpZiAoY29sIGluc3RhbmNlb2YgSWd4Q29sdW1uR3JvdXBDb21wb25lbnQpIHtcbiAgICAgICAgICAgIHJlZiA9IHRoaXMuX2NyZWF0ZUNvbEdyb3VwQ29tcG9uZW50KGNvbCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZWYgPSB0aGlzLl9jcmVhdGVDb2xDb21wb25lbnQoY29sKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVmO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfY3JlYXRlQ29sR3JvdXBDb21wb25lbnQoY29sOiBJZ3hDb2x1bW5Hcm91cENvbXBvbmVudCkge1xuICAgICAgICBjb25zdCBmYWN0b3J5R3JvdXAgPSB0aGlzLnJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KElneENvbHVtbkdyb3VwQ29tcG9uZW50KTtcbiAgICAgICAgY29uc3QgcmVmID0gdGhpcy52aWV3UmVmLmNyZWF0ZUNvbXBvbmVudChmYWN0b3J5R3JvdXAsIG51bGwsIHRoaXMudmlld1JlZi5pbmplY3Rvcik7XG4gICAgICAgIHJlZi5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICAgIGZhY3RvcnlHcm91cC5pbnB1dHMuZm9yRWFjaCgoaW5wdXQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHByb3BOYW1lID0gaW5wdXQucHJvcE5hbWU7XG4gICAgICAgICAgICAoPGFueT5yZWYuaW5zdGFuY2UpW3Byb3BOYW1lXSA9ICg8YW55PmNvbClbcHJvcE5hbWVdO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGNvbC5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBjb25zdCBuZXdDaGlsZHJlbiA9IFtdO1xuICAgICAgICAgICAgY29sLmNoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld0NvbCA9IHRoaXMuX2NyZWF0ZUNvbHVtbihjaGlsZCkuaW5zdGFuY2U7XG4gICAgICAgICAgICAgICAgbmV3Q29sLnBhcmVudCA9IHJlZi5pbnN0YW5jZTtcbiAgICAgICAgICAgICAgICBuZXdDaGlsZHJlbi5wdXNoKG5ld0NvbCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICg8SWd4Q29sdW1uR3JvdXBDb21wb25lbnQ+cmVmLmluc3RhbmNlKS5jaGlsZHJlbi5yZXNldChuZXdDaGlsZHJlbik7XG4gICAgICAgICAgICAoPElneENvbHVtbkdyb3VwQ29tcG9uZW50PnJlZi5pbnN0YW5jZSkuY2hpbGRyZW4ubm90aWZ5T25DaGFuZ2VzKCk7XG4gICAgICAgIH1cbiAgICAgICAgKDxJZ3hDb2x1bW5Hcm91cENvbXBvbmVudD5yZWYuaW5zdGFuY2UpLmdyaWQgPSB0aGlzO1xuICAgICAgICByZXR1cm4gcmVmO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfY3JlYXRlQ29sQ29tcG9uZW50KGNvbCkge1xuICAgICAgICBjb25zdCBmYWN0b3J5Q29sdW1uID0gdGhpcy5yZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShJZ3hDb2x1bW5Db21wb25lbnQpO1xuICAgICAgICBjb25zdCByZWYgPSB0aGlzLnZpZXdSZWYuY3JlYXRlQ29tcG9uZW50KGZhY3RvcnlDb2x1bW4sIG51bGwsIHRoaXMudmlld1JlZi5pbmplY3Rvcik7XG4gICAgICAgIGZhY3RvcnlDb2x1bW4uaW5wdXRzLmZvckVhY2goKGlucHV0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwcm9wTmFtZSA9IGlucHV0LnByb3BOYW1lO1xuICAgICAgICAgICAgaWYgKCEoKDxhbnk+Y29sKVtwcm9wTmFtZV0gaW5zdGFuY2VvZiBJZ3hTdW1tYXJ5T3BlcmFuZCkpIHtcbiAgICAgICAgICAgICAgICAoPGFueT5yZWYuaW5zdGFuY2UpW3Byb3BOYW1lXSA9ICg8YW55PmNvbClbcHJvcE5hbWVdO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAoPGFueT5yZWYuaW5zdGFuY2UpW3Byb3BOYW1lXSA9IGNvbFtwcm9wTmFtZV0uY29uc3RydWN0b3I7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICAoPElneENvbHVtbkNvbXBvbmVudD5yZWYuaW5zdGFuY2UpLmdyaWQgPSB0aGlzO1xuICAgICAgICByZXR1cm4gcmVmO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBnZXRHcmlkc0ZvcklzbGFuZChyb3dJc2xhbmRJRDogc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmhncmlkQVBJLmdldENoaWxkR3JpZHNGb3JSb3dJc2xhbmQocm93SXNsYW5kSUQpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBnZXRDaGlsZEdyaWQocGF0aDogQXJyYXk8SVBhdGhTZWdtZW50Pikge1xuICAgICAgICBpZiAoIXBhdGgpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5oZ3JpZEFQSS5nZXRDaGlsZEdyaWQocGF0aCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBmbGF0dGVuKGFycjogYW55W10pIHtcbiAgICBsZXQgcmVzdWx0ID0gW107XG5cbiAgICBhcnIuZm9yRWFjaChlbCA9PiB7XG4gICAgICAgIHJlc3VsdC5wdXNoKGVsKTtcbiAgICAgICAgaWYgKGVsLmNoaWxkcmVuKSB7XG4gICAgICAgICAgICByZXN1bHQgPSByZXN1bHQuY29uY2F0KGZsYXR0ZW4oZWwuY2hpbGRyZW4udG9BcnJheSgpKSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0O1xufVxuIl19