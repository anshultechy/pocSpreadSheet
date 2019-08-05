/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
export var IgxHierarchicalTransactionServiceFactory = {
    provide: IgxGridTransaction,
    useFactory: hierarchicalTransactionServiceFactory
};
/**
 * @return {?}
 */
export function hierarchicalTransactionServiceFactory() {
    return function () { return new IgxHierarchicalTransactionService(); };
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
var IgxHierarchicalGridBaseComponent = /** @class */ (function (_super) {
    tslib_1.__extends(IgxHierarchicalGridBaseComponent, _super);
    function IgxHierarchicalGridBaseComponent(selectionService, crudService, gridAPI, selection, transactionFactory, elementRef, zone, document, cdr, resolver, differs, viewRef, navigation, filteringService, overlayService, summaryService, _displayDensityOptions) {
        var _this = _super.call(this, selectionService, crudService, gridAPI, selection, typeof transactionFactory === 'function' ? transactionFactory() : transactionFactory, elementRef, zone, document, cdr, resolver, differs, viewRef, navigation, filteringService, overlayService, summaryService, _displayDensityOptions) || this;
        _this.selectionService = selectionService;
        _this.transactionFactory = transactionFactory;
        _this.document = document;
        _this.overlayService = overlayService;
        _this.summaryService = summaryService;
        _this._displayDensityOptions = _displayDensityOptions;
        _this._expandChildren = false;
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
        _this.dragIndicatorIconTemplate = null;
        _this.hgridAPI = (/** @type {?} */ (gridAPI));
        return _this;
    }
    Object.defineProperty(IgxHierarchicalGridBaseComponent.prototype, "maxLevelHeaderDepth", {
        /**
         * @hidden
         */
        get: /**
         * @hidden
         * @return {?}
         */
        function () {
            if (this._maxLevelHeaderDepth === null) {
                this._maxLevelHeaderDepth = this.columnList.reduce(function (acc, col) { return Math.max(acc, col.level); }, 0);
            }
            return this._maxLevelHeaderDepth;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxHierarchicalGridBaseComponent.prototype, "outlet", {
        /**
        * @hidden
        */
        get: /**
         * @hidden
         * @protected
         * @return {?}
         */
        function () {
            return this.rootGrid ? this.rootGrid.outletDirective : this.outletDirective;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} cols
     * @return {?}
     */
    IgxHierarchicalGridBaseComponent.prototype.createColumnsList = /**
     * @hidden
     * @param {?} cols
     * @return {?}
     */
    function (cols) {
        var _this = this;
        /** @type {?} */
        var columns = [];
        /** @type {?} */
        var topLevelCols = this.onlyTopLevel(cols);
        topLevelCols.forEach(function (col) {
            /** @type {?} */
            var ref = _this._createColumn(col);
            ref.changeDetectorRef.detectChanges();
            columns.push(ref.instance);
        });
        /** @type {?} */
        var result = flatten(columns);
        this.columnList.reset(result);
        this.columnList.notifyOnChanges();
    };
    /**
     * @protected
     * @param {?} col
     * @return {?}
     */
    IgxHierarchicalGridBaseComponent.prototype._createColumn = /**
     * @protected
     * @param {?} col
     * @return {?}
     */
    function (col) {
        /** @type {?} */
        var ref;
        if (col instanceof IgxColumnGroupComponent) {
            ref = this._createColGroupComponent(col);
        }
        else {
            ref = this._createColComponent(col);
        }
        return ref;
    };
    /**
     * @protected
     * @param {?} col
     * @return {?}
     */
    IgxHierarchicalGridBaseComponent.prototype._createColGroupComponent = /**
     * @protected
     * @param {?} col
     * @return {?}
     */
    function (col) {
        var _this = this;
        /** @type {?} */
        var factoryGroup = this.resolver.resolveComponentFactory(IgxColumnGroupComponent);
        /** @type {?} */
        var ref = this.viewRef.createComponent(factoryGroup, null, this.viewRef.injector);
        ref.changeDetectorRef.detectChanges();
        factoryGroup.inputs.forEach(function (input) {
            /** @type {?} */
            var propName = input.propName;
            ((/** @type {?} */ (ref.instance)))[propName] = ((/** @type {?} */ (col)))[propName];
        });
        if (col.children.length > 0) {
            /** @type {?} */
            var newChildren_1 = [];
            col.children.forEach(function (child) {
                /** @type {?} */
                var newCol = _this._createColumn(child).instance;
                newCol.parent = ref.instance;
                newChildren_1.push(newCol);
            });
            ((/** @type {?} */ (ref.instance))).children.reset(newChildren_1);
            ((/** @type {?} */ (ref.instance))).children.notifyOnChanges();
        }
        ((/** @type {?} */ (ref.instance))).grid = this;
        return ref;
    };
    /**
     * @protected
     * @param {?} col
     * @return {?}
     */
    IgxHierarchicalGridBaseComponent.prototype._createColComponent = /**
     * @protected
     * @param {?} col
     * @return {?}
     */
    function (col) {
        /** @type {?} */
        var factoryColumn = this.resolver.resolveComponentFactory(IgxColumnComponent);
        /** @type {?} */
        var ref = this.viewRef.createComponent(factoryColumn, null, this.viewRef.injector);
        factoryColumn.inputs.forEach(function (input) {
            /** @type {?} */
            var propName = input.propName;
            if (!(((/** @type {?} */ (col)))[propName] instanceof IgxSummaryOperand)) {
                ((/** @type {?} */ (ref.instance)))[propName] = ((/** @type {?} */ (col)))[propName];
            }
            else {
                ((/** @type {?} */ (ref.instance)))[propName] = col[propName].constructor;
            }
        });
        ((/** @type {?} */ (ref.instance))).grid = this;
        return ref;
    };
    /**
     * @protected
     * @param {?} rowIslandID
     * @return {?}
     */
    IgxHierarchicalGridBaseComponent.prototype.getGridsForIsland = /**
     * @protected
     * @param {?} rowIslandID
     * @return {?}
     */
    function (rowIslandID) {
        return this.hgridAPI.getChildGridsForRowIsland(rowIslandID);
    };
    /**
     * @protected
     * @param {?} path
     * @return {?}
     */
    IgxHierarchicalGridBaseComponent.prototype.getChildGrid = /**
     * @protected
     * @param {?} path
     * @return {?}
     */
    function (path) {
        if (!path) {
            return;
        }
        return this.hgridAPI.getChildGrid(path);
    };
    /** @nocollapse */
    IgxHierarchicalGridBaseComponent.ctorParameters = function () { return [
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
    ]; };
    IgxHierarchicalGridBaseComponent.propDecorators = {
        expandChildren: [{ type: Input }],
        dragIndicatorIconBase: [{ type: ViewChild, args: ['dragIndicatorIconBase', { read: TemplateRef, static: true },] }]
    };
    return IgxHierarchicalGridBaseComponent;
}(IgxGridBaseComponent));
export { IgxHierarchicalGridBaseComponent };
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
    var result = [];
    arr.forEach(function (el) {
        result.push(el);
        if (el.children) {
            result = result.concat(flatten(el.children.toArray()));
        }
    });
    return result;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGllcmFyY2hpY2FsLWdyaWQtYmFzZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9pZ25pdGV1aS1hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL2dyaWRzL2hpZXJhcmNoaWNhbC1ncmlkL2hpZXJhcmNoaWNhbC1ncmlkLWJhc2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUdILFVBQVUsRUFDVixNQUFNLEVBQ04saUJBQWlCLEVBQ2pCLGVBQWUsRUFDZixnQkFBZ0IsRUFDaEIsTUFBTSxFQUNOLHdCQUF3QixFQUN4QixRQUFRLEVBQ1IsS0FBSyxFQUNMLFNBQVMsRUFDVCxXQUFXLEVBQ2QsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLG9CQUFvQixFQUFFLGtCQUFrQixFQUFxQixNQUFNLHdCQUF3QixDQUFDO0FBQ3JHLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBR3BELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQzFFLE9BQU8sRUFBMEIsbUJBQW1CLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUN4RixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNsRixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsaUNBQWlDLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUM1RixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUFFLGtDQUFrQyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxvQ0FBb0MsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQzlGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSx1QkFB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QUs7d0NBeUNMLFNBQVMsU0FBQyx1QkFBdUIsRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTs7SUF1STNFLHVDQUFDO0NBQUEsQUFuTEQsQ0FBK0Qsb0JBQW9CLEdBbUxsRjtTQW5McUIsZ0NBQWdDOzs7SUFDbEQsb0RBQXlCOztJQUV6QiwwREFDK0I7Ozs7O0lBc0IvQixvREFBK0M7Ozs7O0lBSy9DLHdEQUEyQzs7Ozs7SUFLM0Msb0RBQTBDOzs7OztJQUUxQywyREFBa0M7Ozs7OztJQU1sQyxpRUFDK0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBMkQvQyxxRUFBMEQ7O0lBeER0RCw0REFBZ0Q7Ozs7O0lBSWhELDhEQUE2RDs7SUFHN0Qsb0RBQWlDOzs7OztJQU9qQywwREFBc0U7O0lBQ3RFLDBEQUE0Qzs7Ozs7SUFDNUMsa0VBQWlHOzs7Ozs7QUFxSHpHLFNBQVMsT0FBTyxDQUFDLEdBQVU7O1FBQ25CLE1BQU0sR0FBRyxFQUFFO0lBRWYsR0FBRyxDQUFDLE9BQU8sQ0FBQyxVQUFBLEVBQUU7UUFDVixNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ2hCLElBQUksRUFBRSxDQUFDLFFBQVEsRUFBRTtZQUNiLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQztTQUMxRDtJQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ0gsT0FBTyxNQUFNLENBQUM7QUFDbEIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICAgUXVlcnlMaXN0LFxuICAgIENvbnRlbnRDaGlsZHJlbixcbiAgICBFbGVtZW50UmVmLFxuICAgIE5nWm9uZSxcbiAgICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBJdGVyYWJsZURpZmZlcnMsXG4gICAgVmlld0NvbnRhaW5lclJlZixcbiAgICBJbmplY3QsXG4gICAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICAgIE9wdGlvbmFsLFxuICAgIElucHV0LFxuICAgIFZpZXdDaGlsZCxcbiAgICBUZW1wbGF0ZVJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElneEdyaWRCYXNlQ29tcG9uZW50LCBJZ3hHcmlkVHJhbnNhY3Rpb24sIElHcmlkRGF0YUJpbmRhYmxlIH0gZnJvbSAnLi4vZ3JpZC1iYXNlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBHcmlkQmFzZUFQSVNlcnZpY2UgfSBmcm9tICcuLi9hcGkuc2VydmljZSc7XG5pbXBvcnQgeyBJZ3hIaWVyYXJjaGljYWxHcmlkQVBJU2VydmljZSB9IGZyb20gJy4vaGllcmFyY2hpY2FsLWdyaWQtYXBpLnNlcnZpY2UnO1xuaW1wb3J0IHsgSWd4Um93SXNsYW5kQ29tcG9uZW50IH0gZnJvbSAnLi9yb3ctaXNsYW5kLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJZ3hGaWx0ZXJpbmdTZXJ2aWNlIH0gZnJvbSAnLi4vZmlsdGVyaW5nL2dyaWQtZmlsdGVyaW5nLnNlcnZpY2UnO1xuaW1wb3J0IHsgSURpc3BsYXlEZW5zaXR5T3B0aW9ucywgRGlzcGxheURlbnNpdHlUb2tlbiB9IGZyb20gJy4uLy4uL2NvcmUvZGlzcGxheURlbnNpdHknO1xuaW1wb3J0IHsgSWd4Q29sdW1uQ29tcG9uZW50LCBJZ3hDb2x1bW5Hcm91cENvbXBvbmVudCB9IGZyb20gJy4uL2NvbHVtbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgSWd4U3VtbWFyeU9wZXJhbmQgfSBmcm9tICcuLi9zdW1tYXJpZXMvZ3JpZC1zdW1tYXJ5JztcbmltcG9ydCB7IElneEhpZXJhcmNoaWNhbFRyYW5zYWN0aW9uU2VydmljZSwgSWd4T3ZlcmxheVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9pbmRleCc7XG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBJZ3hIaWVyYXJjaGljYWxTZWxlY3Rpb25BUElTZXJ2aWNlIH0gZnJvbSAnLi9zZWxlY3Rpb24nO1xuaW1wb3J0IHsgSWd4SGllcmFyY2hpY2FsR3JpZE5hdmlnYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi9oaWVyYXJjaGljYWwtZ3JpZC1uYXZpZ2F0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgSWd4R3JpZFN1bW1hcnlTZXJ2aWNlIH0gZnJvbSAnLi4vc3VtbWFyaWVzL2dyaWQtc3VtbWFyeS5zZXJ2aWNlJztcbmltcG9ydCB7IElneEdyaWRTZWxlY3Rpb25TZXJ2aWNlLCBJZ3hHcmlkQ1JVRFNlcnZpY2UgfSBmcm9tICcuLi8uLi9jb3JlL2dyaWQtc2VsZWN0aW9uJztcbmltcG9ydCB7IElneENoaWxkR3JpZFJvd0NvbXBvbmVudCB9IGZyb20gJy4vY2hpbGQtZ3JpZC1yb3cuY29tcG9uZW50JztcblxuZXhwb3J0IGNvbnN0IElneEhpZXJhcmNoaWNhbFRyYW5zYWN0aW9uU2VydmljZUZhY3RvcnkgPSB7XG4gICAgcHJvdmlkZTogSWd4R3JpZFRyYW5zYWN0aW9uLFxuICAgIHVzZUZhY3Rvcnk6IGhpZXJhcmNoaWNhbFRyYW5zYWN0aW9uU2VydmljZUZhY3Rvcnlcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBoaWVyYXJjaGljYWxUcmFuc2FjdGlvblNlcnZpY2VGYWN0b3J5KCkge1xuICAgIHJldHVybiAoKSA9PiBuZXcgSWd4SGllcmFyY2hpY2FsVHJhbnNhY3Rpb25TZXJ2aWNlKCk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVBhdGhTZWdtZW50IHtcbiAgICByb3dJRDogYW55O1xuICAgIHJvd0lzbGFuZEtleTogc3RyaW5nO1xufVxuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgSWd4SGllcmFyY2hpY2FsR3JpZEJhc2VDb21wb25lbnQgZXh0ZW5kcyBJZ3hHcmlkQmFzZUNvbXBvbmVudCB7XG4gICAgcHVibGljIGFic3RyYWN0IHJvb3RHcmlkO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZXhwYW5kQ2hpbGRyZW46IGJvb2xlYW47XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgZ2V0IG1heExldmVsSGVhZGVyRGVwdGgoKSB7XG4gICAgICAgIGlmICh0aGlzLl9tYXhMZXZlbEhlYWRlckRlcHRoID09PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLl9tYXhMZXZlbEhlYWRlckRlcHRoID0gdGhpcy5jb2x1bW5MaXN0LnJlZHVjZSgoYWNjLCBjb2wpID0+IE1hdGgubWF4KGFjYywgY29sLmxldmVsKSwgMCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX21heExldmVsSGVhZGVyRGVwdGg7XG4gICAgfVxuXG4gICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgZ2V0IG91dGxldCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucm9vdEdyaWQgPyB0aGlzLnJvb3RHcmlkLm91dGxldERpcmVjdGl2ZSA6IHRoaXMub3V0bGV0RGlyZWN0aXZlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgaGdyaWRBUEk6IElneEhpZXJhcmNoaWNhbEdyaWRBUElTZXJ2aWNlO1xuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyBwYXJlbnRJc2xhbmQ6IElneFJvd0lzbGFuZENvbXBvbmVudDtcblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAqL1xuICAgIHB1YmxpYyBjaGlsZFJvdzogSWd4Q2hpbGRHcmlkUm93Q29tcG9uZW50O1xuXG4gICAgcHJvdGVjdGVkIF9leHBhbmRDaGlsZHJlbiA9IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqIEBpbnRlcm5hbFxuICAgICAqL1xuICAgIEBWaWV3Q2hpbGQoJ2RyYWdJbmRpY2F0b3JJY29uQmFzZScsIHsgcmVhZDogVGVtcGxhdGVSZWYsIHN0YXRpYzogdHJ1ZSB9KVxuICAgIHB1YmxpYyBkcmFnSW5kaWNhdG9ySWNvbkJhc2U6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHVibGljIHNlbGVjdGlvblNlcnZpY2U6IElneEdyaWRTZWxlY3Rpb25TZXJ2aWNlLFxuICAgICAgICBjcnVkU2VydmljZTogSWd4R3JpZENSVURTZXJ2aWNlLFxuICAgICAgICBncmlkQVBJOiBHcmlkQmFzZUFQSVNlcnZpY2U8SWd4R3JpZEJhc2VDb21wb25lbnQgJiBJR3JpZERhdGFCaW5kYWJsZT4sXG4gICAgICAgIHNlbGVjdGlvbjogSWd4SGllcmFyY2hpY2FsU2VsZWN0aW9uQVBJU2VydmljZSxcbiAgICAgICAgQEluamVjdChJZ3hHcmlkVHJhbnNhY3Rpb24pIHByb3RlY3RlZCB0cmFuc2FjdGlvbkZhY3Rvcnk6IGFueSxcbiAgICAgICAgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICAgICAgem9uZTogTmdab25lLFxuICAgICAgICBASW5qZWN0KERPQ1VNRU5UKSBwdWJsaWMgZG9jdW1lbnQsXG4gICAgICAgIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgICAgIHJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gICAgICAgIGRpZmZlcnM6IEl0ZXJhYmxlRGlmZmVycyxcbiAgICAgICAgdmlld1JlZjogVmlld0NvbnRhaW5lclJlZixcbiAgICAgICAgbmF2aWdhdGlvbjogSWd4SGllcmFyY2hpY2FsR3JpZE5hdmlnYXRpb25TZXJ2aWNlLFxuICAgICAgICBmaWx0ZXJpbmdTZXJ2aWNlOiBJZ3hGaWx0ZXJpbmdTZXJ2aWNlLFxuICAgICAgICBASW5qZWN0KElneE92ZXJsYXlTZXJ2aWNlKSBwcm90ZWN0ZWQgb3ZlcmxheVNlcnZpY2U6IElneE92ZXJsYXlTZXJ2aWNlLFxuICAgICAgICBwdWJsaWMgc3VtbWFyeVNlcnZpY2U6IElneEdyaWRTdW1tYXJ5U2VydmljZSxcbiAgICAgICAgQE9wdGlvbmFsKCkgQEluamVjdChEaXNwbGF5RGVuc2l0eVRva2VuKSBwcm90ZWN0ZWQgX2Rpc3BsYXlEZW5zaXR5T3B0aW9uczogSURpc3BsYXlEZW5zaXR5T3B0aW9ucykge1xuICAgICAgICBzdXBlcihcbiAgICAgICAgICAgIHNlbGVjdGlvblNlcnZpY2UsXG4gICAgICAgICAgICBjcnVkU2VydmljZSxcbiAgICAgICAgICAgIGdyaWRBUEksXG4gICAgICAgICAgICBzZWxlY3Rpb24sXG4gICAgICAgICAgICB0eXBlb2YgdHJhbnNhY3Rpb25GYWN0b3J5ID09PSAnZnVuY3Rpb24nID8gdHJhbnNhY3Rpb25GYWN0b3J5KCkgOiB0cmFuc2FjdGlvbkZhY3RvcnksXG4gICAgICAgICAgICBlbGVtZW50UmVmLFxuICAgICAgICAgICAgem9uZSxcbiAgICAgICAgICAgIGRvY3VtZW50LFxuICAgICAgICAgICAgY2RyLFxuICAgICAgICAgICAgcmVzb2x2ZXIsXG4gICAgICAgICAgICBkaWZmZXJzLFxuICAgICAgICAgICAgdmlld1JlZixcbiAgICAgICAgICAgIG5hdmlnYXRpb24sXG4gICAgICAgICAgICBmaWx0ZXJpbmdTZXJ2aWNlLFxuICAgICAgICAgICAgb3ZlcmxheVNlcnZpY2UsXG4gICAgICAgICAgICBzdW1tYXJ5U2VydmljZSxcbiAgICAgICAgICAgIF9kaXNwbGF5RGVuc2l0eU9wdGlvbnMpO1xuICAgICAgICB0aGlzLmhncmlkQVBJID0gPElneEhpZXJhcmNoaWNhbEdyaWRBUElTZXJ2aWNlPmdyaWRBUEk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIGN1c3RvbSB0ZW1wbGF0ZSwgaWYgYW55LCB0aGF0IHNob3VsZCBiZSB1c2VkIHdoZW4gcmVuZGVyaW5nIHRoZSByb3cgZHJhZyBpbmRpY2F0b3IgaWNvblxuICAgICAqXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIC8vIFNldCBpbiB0eXBlc2NyaXB0XG4gICAgICogY29uc3QgbXlDdXN0b21UZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PiA9IG15Q29tcG9uZW50LmN1c3RvbVRlbXBsYXRlO1xuICAgICAqIG15Q29tcG9uZW50LmRyYWdJbmRpY2F0b3JJY29uVGVtcGxhdGUgPSBteUN1c3RvbVRlbXBsYXRlO1xuICAgICAqIGBgYFxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8IS0tIFNldCBpbiBtYXJrdXAgLS0+XG4gICAgICogIDxpZ3gtZ3JpZCAjZ3JpZD5cbiAgICAgKiAgICAgIC4uLlxuICAgICAqICAgICAgPG5nLXRlbXBsYXRlIGlneERyYWdJbmRpY2F0b3JJY29uPlxuICAgICAqICAgICAgICAgIDxpZ3gtaWNvbiBmb250U2V0PVwibWF0ZXJpYWxcIj5pbmZvPC9pZ3gtaWNvbj5cbiAgICAgKiAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICogIDwvaWd4LWdyaWQ+XG4gICAgICogYGBgXG4gICAgICovXG4gICAgcHVibGljIGRyYWdJbmRpY2F0b3JJY29uVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT4gPSBudWxsO1xuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyBjcmVhdGVDb2x1bW5zTGlzdChjb2xzOiBBcnJheTxhbnk+KSB7XG4gICAgICAgIGNvbnN0IGNvbHVtbnMgPSBbXTtcbiAgICAgICAgY29uc3QgdG9wTGV2ZWxDb2xzID0gdGhpcy5vbmx5VG9wTGV2ZWwoY29scyk7XG4gICAgICAgIHRvcExldmVsQ29scy5mb3JFYWNoKChjb2wpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJlZiA9IHRoaXMuX2NyZWF0ZUNvbHVtbihjb2wpO1xuICAgICAgICAgICAgcmVmLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcbiAgICAgICAgICAgIGNvbHVtbnMucHVzaChyZWYuaW5zdGFuY2UpO1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gZmxhdHRlbihjb2x1bW5zKTtcbiAgICAgICAgdGhpcy5jb2x1bW5MaXN0LnJlc2V0KHJlc3VsdCk7XG4gICAgICAgIHRoaXMuY29sdW1uTGlzdC5ub3RpZnlPbkNoYW5nZXMoKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2NyZWF0ZUNvbHVtbihjb2wpIHtcbiAgICAgICAgbGV0IHJlZjtcbiAgICAgICAgaWYgKGNvbCBpbnN0YW5jZW9mIElneENvbHVtbkdyb3VwQ29tcG9uZW50KSB7XG4gICAgICAgICAgICByZWYgPSB0aGlzLl9jcmVhdGVDb2xHcm91cENvbXBvbmVudChjb2wpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVmID0gdGhpcy5fY3JlYXRlQ29sQ29tcG9uZW50KGNvbCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlZjtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2NyZWF0ZUNvbEdyb3VwQ29tcG9uZW50KGNvbDogSWd4Q29sdW1uR3JvdXBDb21wb25lbnQpIHtcbiAgICAgICAgY29uc3QgZmFjdG9yeUdyb3VwID0gdGhpcy5yZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShJZ3hDb2x1bW5Hcm91cENvbXBvbmVudCk7XG4gICAgICAgIGNvbnN0IHJlZiA9IHRoaXMudmlld1JlZi5jcmVhdGVDb21wb25lbnQoZmFjdG9yeUdyb3VwLCBudWxsLCB0aGlzLnZpZXdSZWYuaW5qZWN0b3IpO1xuICAgICAgICByZWYuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgICBmYWN0b3J5R3JvdXAuaW5wdXRzLmZvckVhY2goKGlucHV0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwcm9wTmFtZSA9IGlucHV0LnByb3BOYW1lO1xuICAgICAgICAgICAgKDxhbnk+cmVmLmluc3RhbmNlKVtwcm9wTmFtZV0gPSAoPGFueT5jb2wpW3Byb3BOYW1lXTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChjb2wuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgY29uc3QgbmV3Q2hpbGRyZW4gPSBbXTtcbiAgICAgICAgICAgIGNvbC5jaGlsZHJlbi5mb3JFYWNoKGNoaWxkID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdDb2wgPSB0aGlzLl9jcmVhdGVDb2x1bW4oY2hpbGQpLmluc3RhbmNlO1xuICAgICAgICAgICAgICAgIG5ld0NvbC5wYXJlbnQgPSByZWYuaW5zdGFuY2U7XG4gICAgICAgICAgICAgICAgbmV3Q2hpbGRyZW4ucHVzaChuZXdDb2wpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAoPElneENvbHVtbkdyb3VwQ29tcG9uZW50PnJlZi5pbnN0YW5jZSkuY2hpbGRyZW4ucmVzZXQobmV3Q2hpbGRyZW4pO1xuICAgICAgICAgICAgKDxJZ3hDb2x1bW5Hcm91cENvbXBvbmVudD5yZWYuaW5zdGFuY2UpLmNoaWxkcmVuLm5vdGlmeU9uQ2hhbmdlcygpO1xuICAgICAgICB9XG4gICAgICAgICg8SWd4Q29sdW1uR3JvdXBDb21wb25lbnQ+cmVmLmluc3RhbmNlKS5ncmlkID0gdGhpcztcbiAgICAgICAgcmV0dXJuIHJlZjtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2NyZWF0ZUNvbENvbXBvbmVudChjb2wpIHtcbiAgICAgICAgY29uc3QgZmFjdG9yeUNvbHVtbiA9IHRoaXMucmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoSWd4Q29sdW1uQ29tcG9uZW50KTtcbiAgICAgICAgY29uc3QgcmVmID0gdGhpcy52aWV3UmVmLmNyZWF0ZUNvbXBvbmVudChmYWN0b3J5Q29sdW1uLCBudWxsLCB0aGlzLnZpZXdSZWYuaW5qZWN0b3IpO1xuICAgICAgICBmYWN0b3J5Q29sdW1uLmlucHV0cy5mb3JFYWNoKChpbnB1dCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcHJvcE5hbWUgPSBpbnB1dC5wcm9wTmFtZTtcbiAgICAgICAgICAgIGlmICghKCg8YW55PmNvbClbcHJvcE5hbWVdIGluc3RhbmNlb2YgSWd4U3VtbWFyeU9wZXJhbmQpKSB7XG4gICAgICAgICAgICAgICAgKDxhbnk+cmVmLmluc3RhbmNlKVtwcm9wTmFtZV0gPSAoPGFueT5jb2wpW3Byb3BOYW1lXTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgKDxhbnk+cmVmLmluc3RhbmNlKVtwcm9wTmFtZV0gPSBjb2xbcHJvcE5hbWVdLmNvbnN0cnVjdG9yO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgKDxJZ3hDb2x1bW5Db21wb25lbnQ+cmVmLmluc3RhbmNlKS5ncmlkID0gdGhpcztcbiAgICAgICAgcmV0dXJuIHJlZjtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZ2V0R3JpZHNGb3JJc2xhbmQocm93SXNsYW5kSUQ6IHN0cmluZykge1xuICAgICAgICByZXR1cm4gdGhpcy5oZ3JpZEFQSS5nZXRDaGlsZEdyaWRzRm9yUm93SXNsYW5kKHJvd0lzbGFuZElEKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZ2V0Q2hpbGRHcmlkKHBhdGg6IEFycmF5PElQYXRoU2VnbWVudD4pIHtcbiAgICAgICAgaWYgKCFwYXRoKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuaGdyaWRBUEkuZ2V0Q2hpbGRHcmlkKHBhdGgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZmxhdHRlbihhcnI6IGFueVtdKSB7XG4gICAgbGV0IHJlc3VsdCA9IFtdO1xuXG4gICAgYXJyLmZvckVhY2goZWwgPT4ge1xuICAgICAgICByZXN1bHQucHVzaChlbCk7XG4gICAgICAgIGlmIChlbC5jaGlsZHJlbikge1xuICAgICAgICAgICAgcmVzdWx0ID0gcmVzdWx0LmNvbmNhdChmbGF0dGVuKGVsLmNoaWxkcmVuLnRvQXJyYXkoKSkpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbiJdfQ==