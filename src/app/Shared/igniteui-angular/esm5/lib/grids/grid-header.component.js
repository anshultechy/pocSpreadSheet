/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, HostBinding, HostListener, Input, NgZone, Inject, NgModuleRef } from '@angular/core';
import { DataType } from '../data-operations/data-util';
import { SortingDirection } from '../data-operations/sorting-expression.interface';
import { GridBaseAPIService } from './api.service';
import { IgxColumnComponent } from './column.component';
import { IgxFilteringService } from './filtering/grid-filtering.service';
import { IgxColumnResizingService } from './grid-column-resizing.service';
import { IgxOverlayService } from '../services/overlay/overlay';
import { IgxGridExcelStyleFilteringComponent } from './filtering/excel-style/grid.excel-style-filtering.component';
import { VerticalAlignment } from '../services/overlay/utilities';
import { AutoPositionStrategy } from '../services/overlay/position/auto-position-strategy';
import { useAnimation } from '@angular/animations';
import { filter, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { fadeIn, fadeOut } from '../animations/main';
import { AbsoluteScrollStrategy } from '../services/overlay/scroll/absolute-scroll-strategy';
/**
 * @hidden
 */
var IgxGridHeaderComponent = /** @class */ (function () {
    function IgxGridHeaderComponent(gridAPI, colResizingService, cdr, elementRef, zone, _filteringService, _moduleRef, _overlayService) {
        this.gridAPI = gridAPI;
        this.colResizingService = colResizingService;
        this.cdr = cdr;
        this.elementRef = elementRef;
        this.zone = zone;
        this._filteringService = _filteringService;
        this._moduleRef = _moduleRef;
        this._overlayService = _overlayService;
        this._destroy$ = new Subject();
        this.hostRole = 'columnheader';
        this.tabindex = -1;
        this.sortDirection = SortingDirection.None;
    }
    Object.defineProperty(IgxGridHeaderComponent.prototype, "styleClasses", {
        get: /**
         * @return {?}
         */
        function () {
            var e_1, _a;
            /** @type {?} */
            var defaultClasses = [
                'igx-grid__th--fw',
                this.column.headerClasses
            ];
            /** @type {?} */
            var classList = {
                'igx-grid__th': !this.column.columnGroup,
                'asc': this.ascending,
                'desc': this.descending,
                'igx-grid__th--number': this.column.dataType === DataType.Number,
                'igx-grid__th--sortable': this.column.sortable,
                'igx-grid__th--filtrable': this.column.filterable && this.grid.filteringService.isFilterRowVisible,
                'igx-grid__th--sorted': this.sorted
            };
            try {
                for (var _b = tslib_1.__values(Object.keys(classList)), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var klass = _c.value;
                    if (classList[klass]) {
                        defaultClasses.push(klass);
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return defaultClasses.join(' ');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxGridHeaderComponent.prototype, "height", {
        get: /**
         * @return {?}
         */
        function () {
            if (this.grid.hasColumnGroups) {
                return (this.grid.maxLevelHeaderDepth + 1 - this.column.level) * this.grid.defaultRowHeight / this.grid._baseFontSize;
            }
            return null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxGridHeaderComponent.prototype, "ascending", {
        get: /**
         * @return {?}
         */
        function () {
            return this.sortDirection === SortingDirection.Asc;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxGridHeaderComponent.prototype, "descending", {
        get: /**
         * @return {?}
         */
        function () {
            return this.sortDirection === SortingDirection.Desc;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxGridHeaderComponent.prototype, "sortingIcon", {
        get: /**
         * @return {?}
         */
        function () {
            if (this.sortDirection !== SortingDirection.None) {
                // arrow_downward and arrow_upward
                // are material icons ligature strings
                return this.sortDirection === SortingDirection.Asc ? 'arrow_upward' : 'arrow_downward';
            }
            return 'arrow_upward';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxGridHeaderComponent.prototype, "sorted", {
        get: /**
         * @return {?}
         */
        function () {
            return this.sortDirection !== SortingDirection.None;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxGridHeaderComponent.prototype, "filterIconClassName", {
        get: /**
         * @return {?}
         */
        function () {
            return this.column.filteringExpressionsTree ? 'igx-excel-filter__icon--filtered' : 'igx-excel-filter__icon';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxGridHeaderComponent.prototype, "headerID", {
        get: /**
         * @return {?}
         */
        function () {
            return this.gridID + "_" + this.column.field;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    IgxGridHeaderComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.initFilteringSettings();
    };
    /**
     * @return {?}
     */
    IgxGridHeaderComponent.prototype.ngDoCheck = /**
     * @return {?}
     */
    function () {
        this.getSortDirection();
        this.cdr.markForCheck();
    };
    /**
     * @return {?}
     */
    IgxGridHeaderComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._destroy$.next(true);
        this._destroy$.complete();
        if (this._componentOverlayId) {
            this._overlayService.hide(this._componentOverlayId);
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    IgxGridHeaderComponent.prototype.onClick = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (!this.colResizingService.isColumnResizing) {
            event.stopPropagation();
            if (this.grid.filteringService.isFilterRowVisible) {
                if (this.column.filterable && !this.column.columnGroup &&
                    !this.grid.filteringService.isFilterComplex(this.column.field)) {
                    this.grid.filteringService.filteredColumn = this.column;
                }
            }
            else if (this.column.sortable) {
                this.triggerSort();
            }
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    IgxGridHeaderComponent.prototype.onFilteringIconClick = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.stopPropagation();
        this.toggleFilterDropdown();
    };
    Object.defineProperty(IgxGridHeaderComponent.prototype, "grid", {
        get: /**
         * @return {?}
         */
        function () {
            return this.gridAPI.grid;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @protected
     * @return {?}
     */
    IgxGridHeaderComponent.prototype.getSortDirection = /**
     * @protected
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var expr = this.gridAPI.grid.sortingExpressions.find(function (x) { return x.fieldName === _this.column.field; });
        this.sortDirection = expr ? expr.dir : SortingDirection.None;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    IgxGridHeaderComponent.prototype.onSortingIconClick = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.grid.filteringService.isFilterRowVisible) {
            event.stopPropagation();
            this.triggerSort();
        }
    };
    /**
     * @private
     * @return {?}
     */
    IgxGridHeaderComponent.prototype.triggerSort = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var groupingExpr = this.grid.groupingExpressions ?
            this.grid.groupingExpressions.find(function (expr) { return expr.fieldName === _this.column.field; }) : null;
        /** @type {?} */
        var sortDir = groupingExpr ?
            this.sortDirection + 1 > SortingDirection.Desc ? SortingDirection.Asc : SortingDirection.Desc
            : this.sortDirection + 1 > SortingDirection.Desc ? SortingDirection.None : this.sortDirection + 1;
        this.sortDirection = sortDir;
        this.grid.sort({ fieldName: this.column.field, dir: this.sortDirection, ignoreCase: this.column.sortingIgnoreCase,
            strategy: this.column.sortStrategy });
    };
    /**
     * @private
     * @return {?}
     */
    IgxGridHeaderComponent.prototype.toggleFilterDropdown = /**
     * @private
     * @return {?}
     */
    function () {
        if (!this._componentOverlayId) {
            /** @type {?} */
            var headerTarget = this.elementRef.nativeElement;
            /** @type {?} */
            var filterIconTarget = headerTarget.querySelector('.' + this.filterIconClassName);
            this._filterMenuOverlaySettings.positionStrategy.settings.target = filterIconTarget;
            this._filterMenuOverlaySettings.outlet = this.grid.outlet;
            this._componentOverlayId =
                this._overlayService.attach(IgxGridExcelStyleFilteringComponent, this._filterMenuOverlaySettings, this._moduleRef);
            this._overlayService.show(this._componentOverlayId, this._filterMenuOverlaySettings);
        }
    };
    /**
     * @private
     * @return {?}
     */
    IgxGridHeaderComponent.prototype.initFilteringSettings = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this._filterMenuPositionSettings = {
            verticalStartPoint: VerticalAlignment.Bottom,
            openAnimation: useAnimation(fadeIn, {
                params: {
                    duration: '250ms'
                }
            }),
            closeAnimation: useAnimation(fadeOut, {
                params: {
                    duration: '200ms'
                }
            })
        };
        this._filterMenuOverlaySettings = {
            closeOnOutsideClick: true,
            modal: false,
            positionStrategy: new AutoPositionStrategy(this._filterMenuPositionSettings),
            scrollStrategy: new AbsoluteScrollStrategy()
        };
        this._overlayService.onOpening.pipe(filter(function (overlay) { return overlay.id === _this._componentOverlayId; }), takeUntil(this._destroy$)).subscribe(function (eventArgs) {
            _this.onOverlayOpening(eventArgs);
        });
        this._overlayService.onClosed.pipe(filter(function (overlay) { return overlay.id === _this._componentOverlayId; }), takeUntil(this._destroy$)).subscribe(function () {
            _this.onOverlayClosed();
        });
    };
    /**
     * @private
     * @param {?} eventArgs
     * @return {?}
     */
    IgxGridHeaderComponent.prototype.onOverlayOpening = /**
     * @private
     * @param {?} eventArgs
     * @return {?}
     */
    function (eventArgs) {
        /** @type {?} */
        var instance = (/** @type {?} */ (eventArgs.componentRef.instance));
        if (instance) {
            instance.initialize(this.column, this._filteringService, this._overlayService, eventArgs.id);
        }
    };
    /**
     * @private
     * @return {?}
     */
    IgxGridHeaderComponent.prototype.onOverlayClosed = /**
     * @private
     * @return {?}
     */
    function () {
        this._componentOverlayId = null;
    };
    IgxGridHeaderComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    preserveWhitespaces: false,
                    selector: 'igx-grid-header',
                    template: "<ng-template #defaultColumn>\n    {{ column.header || column.field }}\n</ng-template>\n\n<span class=\"igx-grid__th-title\">\n    <ng-container *ngTemplateOutlet=\"column.headerTemplate ? column.headerTemplate : defaultColumn; context: { $implicit: column, column: column}\">\n    </ng-container>\n</span>\n<div class=\"igx-grid__th-icons\" *ngIf=\"!column.columnGroup\">\n    <igx-icon [attr.draggable]=\"false\"\n        class=\"sort-icon\"\n        *ngIf=\"column.sortable\"\n        (click)=\"onSortingIconClick($event)\">\n        {{sortingIcon}}\n    </igx-icon>\n\n    <igx-icon [ngClass]=\"filterIconClassName\" [attr.draggable]=\"false\" (click)=\"onFilteringIconClick($event)\"\n        *ngIf=\"grid.allowFiltering == true && column.filterable && grid.filterMode == 'excelStyleFilter'\">\n        filter_list\n    </igx-icon>\n</div>\n"
                }] }
    ];
    /** @nocollapse */
    IgxGridHeaderComponent.ctorParameters = function () { return [
        { type: GridBaseAPIService },
        { type: IgxColumnResizingService },
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone },
        { type: IgxFilteringService },
        { type: NgModuleRef },
        { type: IgxOverlayService, decorators: [{ type: Inject, args: [IgxOverlayService,] }] }
    ]; };
    IgxGridHeaderComponent.propDecorators = {
        column: [{ type: Input }],
        gridID: [{ type: Input }],
        styleClasses: [{ type: HostBinding, args: ['class',] }],
        height: [{ type: HostBinding, args: ['style.height.rem',] }],
        hostRole: [{ type: HostBinding, args: ['attr.role',] }],
        tabindex: [{ type: HostBinding, args: ['attr.tabindex',] }],
        headerID: [{ type: HostBinding, args: ['attr.id',] }],
        onClick: [{ type: HostListener, args: ['click', ['$event'],] }]
    };
    return IgxGridHeaderComponent;
}());
export { IgxGridHeaderComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    IgxGridHeaderComponent.prototype._componentOverlayId;
    /**
     * @type {?}
     * @private
     */
    IgxGridHeaderComponent.prototype._filterMenuPositionSettings;
    /**
     * @type {?}
     * @private
     */
    IgxGridHeaderComponent.prototype._filterMenuOverlaySettings;
    /**
     * @type {?}
     * @private
     */
    IgxGridHeaderComponent.prototype._destroy$;
    /** @type {?} */
    IgxGridHeaderComponent.prototype.column;
    /** @type {?} */
    IgxGridHeaderComponent.prototype.gridID;
    /** @type {?} */
    IgxGridHeaderComponent.prototype.hostRole;
    /** @type {?} */
    IgxGridHeaderComponent.prototype.tabindex;
    /**
     * @type {?}
     * @protected
     */
    IgxGridHeaderComponent.prototype.sortDirection;
    /** @type {?} */
    IgxGridHeaderComponent.prototype.gridAPI;
    /** @type {?} */
    IgxGridHeaderComponent.prototype.colResizingService;
    /** @type {?} */
    IgxGridHeaderComponent.prototype.cdr;
    /** @type {?} */
    IgxGridHeaderComponent.prototype.elementRef;
    /** @type {?} */
    IgxGridHeaderComponent.prototype.zone;
    /**
     * @type {?}
     * @private
     */
    IgxGridHeaderComponent.prototype._filteringService;
    /**
     * @type {?}
     * @private
     */
    IgxGridHeaderComponent.prototype._moduleRef;
    /**
     * @type {?}
     * @private
     */
    IgxGridHeaderComponent.prototype._overlayService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC1oZWFkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vaWduaXRldWktYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9ncmlkcy9ncmlkLWhlYWRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0gsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBRVQsVUFBVSxFQUNWLFdBQVcsRUFDWCxZQUFZLEVBQ1osS0FBSyxFQUNMLE1BQU0sRUFFTixNQUFNLEVBRU4sV0FBVyxFQUNkLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUNuRixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDeEQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFFekUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDMUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDaEUsT0FBTyxFQUFFLG1DQUFtQyxFQUFFLE1BQU0sOERBQThELENBQUM7QUFDbkgsT0FBTyxFQUFxQyxpQkFBaUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ3JHLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBQzNGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLE1B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InNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gICAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgQ29tcG9uZW50LFxuICAgIERvQ2hlY2ssXG4gICAgRWxlbWVudFJlZixcbiAgICBIb3N0QmluZGluZyxcbiAgICBIb3N0TGlzdGVuZXIsXG4gICAgSW5wdXQsXG4gICAgTmdab25lLFxuICAgIE9uSW5pdCxcbiAgICBJbmplY3QsXG4gICAgT25EZXN0cm95LFxuICAgIE5nTW9kdWxlUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGF0YVR5cGUgfSBmcm9tICcuLi9kYXRhLW9wZXJhdGlvbnMvZGF0YS11dGlsJztcbmltcG9ydCB7IFNvcnRpbmdEaXJlY3Rpb24gfSBmcm9tICcuLi9kYXRhLW9wZXJhdGlvbnMvc29ydGluZy1leHByZXNzaW9uLmludGVyZmFjZSc7XG5pbXBvcnQgeyBHcmlkQmFzZUFQSVNlcnZpY2UgfSBmcm9tICcuL2FwaS5zZXJ2aWNlJztcbmltcG9ydCB7IElneENvbHVtbkNvbXBvbmVudCB9IGZyb20gJy4vY29sdW1uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJZ3hGaWx0ZXJpbmdTZXJ2aWNlIH0gZnJvbSAnLi9maWx0ZXJpbmcvZ3JpZC1maWx0ZXJpbmcuc2VydmljZSc7XG5pbXBvcnQgeyBJZ3hHcmlkQmFzZUNvbXBvbmVudCwgSUdyaWREYXRhQmluZGFibGUgfSBmcm9tICcuL2dyaWQtYmFzZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgSWd4Q29sdW1uUmVzaXppbmdTZXJ2aWNlIH0gZnJvbSAnLi9ncmlkLWNvbHVtbi1yZXNpemluZy5zZXJ2aWNlJztcbmltcG9ydCB7IElneE92ZXJsYXlTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvb3ZlcmxheS9vdmVybGF5JztcbmltcG9ydCB7IElneEdyaWRFeGNlbFN0eWxlRmlsdGVyaW5nQ29tcG9uZW50IH0gZnJvbSAnLi9maWx0ZXJpbmcvZXhjZWwtc3R5bGUvZ3JpZC5leGNlbC1zdHlsZS1maWx0ZXJpbmcuY29tcG9uZW50JztcbmltcG9ydCB7IE92ZXJsYXlTZXR0aW5ncywgUG9zaXRpb25TZXR0aW5ncywgVmVydGljYWxBbGlnbm1lbnQgfSBmcm9tICcuLi9zZXJ2aWNlcy9vdmVybGF5L3V0aWxpdGllcyc7XG5pbXBvcnQgeyBBdXRvUG9zaXRpb25TdHJhdGVneSB9IGZyb20gJy4uL3NlcnZpY2VzL292ZXJsYXkvcG9zaXRpb24vYXV0by1wb3NpdGlvbi1zdHJhdGVneSc7XG5pbXBvcnQgeyB1c2VBbmltYXRpb24gfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcbmltcG9ydCB7IGZpbHRlciwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmFkZUluLCBmYWRlT3V0IH0gZnJvbSAnLi4vYW5pbWF0aW9ucy9tYWluJztcbmltcG9ydCB7IEFic29sdXRlU2Nyb2xsU3RyYXRlZ3kgfSBmcm9tICcuLi9zZXJ2aWNlcy9vdmVybGF5L3Njcm9sbC9hYnNvbHV0ZS1zY3JvbGwtc3RyYXRlZ3knO1xuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuQENvbXBvbmVudCh7XG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gICAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gICAgc2VsZWN0b3I6ICdpZ3gtZ3JpZC1oZWFkZXInLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9ncmlkLWhlYWRlci5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgSWd4R3JpZEhlYWRlckNvbXBvbmVudCBpbXBsZW1lbnRzIERvQ2hlY2ssIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICAgIHByaXZhdGUgX2NvbXBvbmVudE92ZXJsYXlJZDogc3RyaW5nO1xuICAgIHByaXZhdGUgX2ZpbHRlck1lbnVQb3NpdGlvblNldHRpbmdzOiBQb3NpdGlvblNldHRpbmdzO1xuICAgIHByaXZhdGUgX2ZpbHRlck1lbnVPdmVybGF5U2V0dGluZ3M6IE92ZXJsYXlTZXR0aW5ncztcbiAgICBwcml2YXRlIF9kZXN0cm95JCA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBjb2x1bW46IElneENvbHVtbkNvbXBvbmVudDtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGdyaWRJRDogc3RyaW5nO1xuXG4gICAgQEhvc3RCaW5kaW5nKCdjbGFzcycpXG4gICAgZ2V0IHN0eWxlQ2xhc3NlcygpOiBzdHJpbmcge1xuICAgICAgICBjb25zdCBkZWZhdWx0Q2xhc3NlcyA9IFtcbiAgICAgICAgICAgICdpZ3gtZ3JpZF9fdGgtLWZ3JyxcbiAgICAgICAgICAgIHRoaXMuY29sdW1uLmhlYWRlckNsYXNzZXNcbiAgICAgICAgXTtcblxuICAgICAgICBjb25zdCBjbGFzc0xpc3QgPSB7XG4gICAgICAgICAgICAnaWd4LWdyaWRfX3RoJzogIXRoaXMuY29sdW1uLmNvbHVtbkdyb3VwLFxuICAgICAgICAgICAgJ2FzYyc6IHRoaXMuYXNjZW5kaW5nLFxuICAgICAgICAgICAgJ2Rlc2MnOiB0aGlzLmRlc2NlbmRpbmcsXG4gICAgICAgICAgICAnaWd4LWdyaWRfX3RoLS1udW1iZXInOiB0aGlzLmNvbHVtbi5kYXRhVHlwZSA9PT0gRGF0YVR5cGUuTnVtYmVyLFxuICAgICAgICAgICAgJ2lneC1ncmlkX190aC0tc29ydGFibGUnOiB0aGlzLmNvbHVtbi5zb3J0YWJsZSxcbiAgICAgICAgICAgICdpZ3gtZ3JpZF9fdGgtLWZpbHRyYWJsZSc6IHRoaXMuY29sdW1uLmZpbHRlcmFibGUgJiYgdGhpcy5ncmlkLmZpbHRlcmluZ1NlcnZpY2UuaXNGaWx0ZXJSb3dWaXNpYmxlLFxuICAgICAgICAgICAgJ2lneC1ncmlkX190aC0tc29ydGVkJzogdGhpcy5zb3J0ZWRcbiAgICAgICAgfTtcblxuICAgICAgICBmb3IgKGNvbnN0IGtsYXNzIG9mIE9iamVjdC5rZXlzKGNsYXNzTGlzdCkpIHtcbiAgICAgICAgICAgIGlmIChjbGFzc0xpc3Rba2xhc3NdKSB7XG4gICAgICAgICAgICAgICAgZGVmYXVsdENsYXNzZXMucHVzaChrbGFzcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRlZmF1bHRDbGFzc2VzLmpvaW4oJyAnKTtcbiAgICB9XG5cbiAgICBASG9zdEJpbmRpbmcoJ3N0eWxlLmhlaWdodC5yZW0nKVxuICAgIGdldCBoZWlnaHQoKSB7XG4gICAgICAgIGlmICh0aGlzLmdyaWQuaGFzQ29sdW1uR3JvdXBzKSB7XG4gICAgICAgICAgICByZXR1cm4gKHRoaXMuZ3JpZC5tYXhMZXZlbEhlYWRlckRlcHRoICsgMSAtIHRoaXMuY29sdW1uLmxldmVsKSAqIHRoaXMuZ3JpZC5kZWZhdWx0Um93SGVpZ2h0IC8gdGhpcy5ncmlkLl9iYXNlRm9udFNpemU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgZ2V0IGFzY2VuZGluZygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc29ydERpcmVjdGlvbiA9PT0gU29ydGluZ0RpcmVjdGlvbi5Bc2M7XG4gICAgfVxuXG4gICAgZ2V0IGRlc2NlbmRpbmcoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNvcnREaXJlY3Rpb24gPT09IFNvcnRpbmdEaXJlY3Rpb24uRGVzYztcbiAgICB9XG5cbiAgICBnZXQgc29ydGluZ0ljb24oKTogc3RyaW5nIHtcbiAgICAgICAgaWYgKHRoaXMuc29ydERpcmVjdGlvbiAhPT0gU29ydGluZ0RpcmVjdGlvbi5Ob25lKSB7XG4gICAgICAgICAgICAvLyBhcnJvd19kb3dud2FyZCBhbmQgYXJyb3dfdXB3YXJkXG4gICAgICAgICAgICAvLyBhcmUgbWF0ZXJpYWwgaWNvbnMgbGlnYXR1cmUgc3RyaW5nc1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc29ydERpcmVjdGlvbiA9PT0gU29ydGluZ0RpcmVjdGlvbi5Bc2MgPyAnYXJyb3dfdXB3YXJkJyA6ICdhcnJvd19kb3dud2FyZCc7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICdhcnJvd191cHdhcmQnO1xuICAgIH1cblxuICAgIGdldCBzb3J0ZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNvcnREaXJlY3Rpb24gIT09IFNvcnRpbmdEaXJlY3Rpb24uTm9uZTtcbiAgICB9XG5cbiAgICBnZXQgZmlsdGVySWNvbkNsYXNzTmFtZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29sdW1uLmZpbHRlcmluZ0V4cHJlc3Npb25zVHJlZSA/ICdpZ3gtZXhjZWwtZmlsdGVyX19pY29uLS1maWx0ZXJlZCcgOiAnaWd4LWV4Y2VsLWZpbHRlcl9faWNvbic7XG4gICAgfVxuXG4gICAgQEhvc3RCaW5kaW5nKCdhdHRyLnJvbGUnKVxuICAgIHB1YmxpYyBob3N0Um9sZSA9ICdjb2x1bW5oZWFkZXInO1xuXG4gICAgQEhvc3RCaW5kaW5nKCdhdHRyLnRhYmluZGV4JylcbiAgICBwdWJsaWMgdGFiaW5kZXggPSAtMTtcblxuICAgIEBIb3N0QmluZGluZygnYXR0ci5pZCcpXG4gICAgZ2V0IGhlYWRlcklEKCkge1xuICAgICAgICByZXR1cm4gYCR7dGhpcy5ncmlkSUR9XyR7dGhpcy5jb2x1bW4uZmllbGR9YDtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgc29ydERpcmVjdGlvbiA9IFNvcnRpbmdEaXJlY3Rpb24uTm9uZTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwdWJsaWMgZ3JpZEFQSTogR3JpZEJhc2VBUElTZXJ2aWNlPElneEdyaWRCYXNlQ29tcG9uZW50ICYgSUdyaWREYXRhQmluZGFibGU+LFxuICAgICAgICBwdWJsaWMgY29sUmVzaXppbmdTZXJ2aWNlOiBJZ3hDb2x1bW5SZXNpemluZ1NlcnZpY2UsXG4gICAgICAgIHB1YmxpYyBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxuICAgICAgICBwdWJsaWMgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICAgICAgcHVibGljIHpvbmU6IE5nWm9uZSxcbiAgICAgICAgcHJpdmF0ZSBfZmlsdGVyaW5nU2VydmljZTogSWd4RmlsdGVyaW5nU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBfbW9kdWxlUmVmOiBOZ01vZHVsZVJlZjxhbnk+LFxuICAgICAgICBASW5qZWN0KElneE92ZXJsYXlTZXJ2aWNlKSBwcml2YXRlIF9vdmVybGF5U2VydmljZTogSWd4T3ZlcmxheVNlcnZpY2VcbiAgICApIHsgfVxuXG4gICAgcHVibGljIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmluaXRGaWx0ZXJpbmdTZXR0aW5ncygpO1xuICAgIH1cblxuICAgIHB1YmxpYyBuZ0RvQ2hlY2soKSB7XG4gICAgICAgIHRoaXMuZ2V0U29ydERpcmVjdGlvbigpO1xuICAgICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fZGVzdHJveSQubmV4dCh0cnVlKTtcbiAgICAgICAgdGhpcy5fZGVzdHJveSQuY29tcGxldGUoKTtcblxuICAgICAgICBpZiAodGhpcy5fY29tcG9uZW50T3ZlcmxheUlkKSB7XG4gICAgICAgICAgICB0aGlzLl9vdmVybGF5U2VydmljZS5oaWRlKHRoaXMuX2NvbXBvbmVudE92ZXJsYXlJZCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKCdjbGljaycsIFsnJGV2ZW50J10pXG4gICAgcHVibGljIG9uQ2xpY2soZXZlbnQpIHtcbiAgICAgICAgaWYgKCF0aGlzLmNvbFJlc2l6aW5nU2VydmljZS5pc0NvbHVtblJlc2l6aW5nKSB7XG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIGlmICh0aGlzLmdyaWQuZmlsdGVyaW5nU2VydmljZS5pc0ZpbHRlclJvd1Zpc2libGUpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jb2x1bW4uZmlsdGVyYWJsZSAmJiAhdGhpcy5jb2x1bW4uY29sdW1uR3JvdXAgJiZcbiAgICAgICAgICAgICAgICAgICAgIXRoaXMuZ3JpZC5maWx0ZXJpbmdTZXJ2aWNlLmlzRmlsdGVyQ29tcGxleCh0aGlzLmNvbHVtbi5maWVsZCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ncmlkLmZpbHRlcmluZ1NlcnZpY2UuZmlsdGVyZWRDb2x1bW4gPSB0aGlzLmNvbHVtbjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuY29sdW1uLnNvcnRhYmxlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50cmlnZ2VyU29ydCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIG9uRmlsdGVyaW5nSWNvbkNsaWNrKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICAgIHRoaXMudG9nZ2xlRmlsdGVyRHJvcGRvd24oKTtcbiAgICB9XG5cbiAgICBnZXQgZ3JpZCgpOiBhbnkge1xuICAgICAgICByZXR1cm4gdGhpcy5ncmlkQVBJLmdyaWQ7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGdldFNvcnREaXJlY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0IGV4cHIgPSB0aGlzLmdyaWRBUEkuZ3JpZC5zb3J0aW5nRXhwcmVzc2lvbnMuZmluZCgoeCkgPT4geC5maWVsZE5hbWUgPT09IHRoaXMuY29sdW1uLmZpZWxkKTtcbiAgICAgICAgdGhpcy5zb3J0RGlyZWN0aW9uID0gZXhwciA/IGV4cHIuZGlyIDogU29ydGluZ0RpcmVjdGlvbi5Ob25lO1xuICAgIH1cblxuICAgIHB1YmxpYyBvblNvcnRpbmdJY29uQ2xpY2soZXZlbnQpIHtcbiAgICAgICAgaWYgKHRoaXMuZ3JpZC5maWx0ZXJpbmdTZXJ2aWNlLmlzRmlsdGVyUm93VmlzaWJsZSkge1xuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICB0aGlzLnRyaWdnZXJTb3J0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIHRyaWdnZXJTb3J0KCkge1xuICAgICAgICBjb25zdCBncm91cGluZ0V4cHIgPSB0aGlzLmdyaWQuZ3JvdXBpbmdFeHByZXNzaW9ucyA/XG4gICAgICAgICAgICB0aGlzLmdyaWQuZ3JvdXBpbmdFeHByZXNzaW9ucy5maW5kKChleHByKSA9PiBleHByLmZpZWxkTmFtZSA9PT0gdGhpcy5jb2x1bW4uZmllbGQpIDogbnVsbDtcbiAgICAgICAgY29uc3Qgc29ydERpciA9IGdyb3VwaW5nRXhwciA/XG4gICAgICAgICAgICB0aGlzLnNvcnREaXJlY3Rpb24gKyAxID4gU29ydGluZ0RpcmVjdGlvbi5EZXNjID8gU29ydGluZ0RpcmVjdGlvbi5Bc2MgOiBTb3J0aW5nRGlyZWN0aW9uLkRlc2NcbiAgICAgICAgICAgIDogdGhpcy5zb3J0RGlyZWN0aW9uICsgMSA+IFNvcnRpbmdEaXJlY3Rpb24uRGVzYyA/IFNvcnRpbmdEaXJlY3Rpb24uTm9uZSA6IHRoaXMuc29ydERpcmVjdGlvbiArIDE7XG4gICAgICAgIHRoaXMuc29ydERpcmVjdGlvbiA9IHNvcnREaXI7XG4gICAgICAgIHRoaXMuZ3JpZC5zb3J0KHsgZmllbGROYW1lOiB0aGlzLmNvbHVtbi5maWVsZCwgZGlyOiB0aGlzLnNvcnREaXJlY3Rpb24sIGlnbm9yZUNhc2U6IHRoaXMuY29sdW1uLnNvcnRpbmdJZ25vcmVDYXNlLFxuICAgICAgICAgICAgc3RyYXRlZ3k6IHRoaXMuY29sdW1uLnNvcnRTdHJhdGVneSB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHRvZ2dsZUZpbHRlckRyb3Bkb3duKCkge1xuICAgICAgICBpZiAoIXRoaXMuX2NvbXBvbmVudE92ZXJsYXlJZCkge1xuICAgICAgICAgICAgY29uc3QgaGVhZGVyVGFyZ2V0ID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgICAgICBjb25zdCBmaWx0ZXJJY29uVGFyZ2V0ID0gaGVhZGVyVGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoJy4nICsgdGhpcy5maWx0ZXJJY29uQ2xhc3NOYW1lKTtcblxuICAgICAgICAgICAgdGhpcy5fZmlsdGVyTWVudU92ZXJsYXlTZXR0aW5ncy5wb3NpdGlvblN0cmF0ZWd5LnNldHRpbmdzLnRhcmdldCA9IGZpbHRlckljb25UYXJnZXQ7XG4gICAgICAgICAgICB0aGlzLl9maWx0ZXJNZW51T3ZlcmxheVNldHRpbmdzLm91dGxldCA9IHRoaXMuZ3JpZC5vdXRsZXQ7XG5cbiAgICAgICAgICAgIHRoaXMuX2NvbXBvbmVudE92ZXJsYXlJZCA9XG4gICAgICAgICAgICAgICAgdGhpcy5fb3ZlcmxheVNlcnZpY2UuYXR0YWNoKElneEdyaWRFeGNlbFN0eWxlRmlsdGVyaW5nQ29tcG9uZW50LCB0aGlzLl9maWx0ZXJNZW51T3ZlcmxheVNldHRpbmdzLCB0aGlzLl9tb2R1bGVSZWYpO1xuICAgICAgICAgICAgdGhpcy5fb3ZlcmxheVNlcnZpY2Uuc2hvdyh0aGlzLl9jb21wb25lbnRPdmVybGF5SWQsIHRoaXMuX2ZpbHRlck1lbnVPdmVybGF5U2V0dGluZ3MpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBpbml0RmlsdGVyaW5nU2V0dGluZ3MoKSB7XG4gICAgICAgIHRoaXMuX2ZpbHRlck1lbnVQb3NpdGlvblNldHRpbmdzID0ge1xuICAgICAgICAgICAgdmVydGljYWxTdGFydFBvaW50OiBWZXJ0aWNhbEFsaWdubWVudC5Cb3R0b20sXG4gICAgICAgICAgICBvcGVuQW5pbWF0aW9uOiB1c2VBbmltYXRpb24oZmFkZUluLCB7XG4gICAgICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAnMjUwbXMnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBjbG9zZUFuaW1hdGlvbjogdXNlQW5pbWF0aW9uKGZhZGVPdXQsIHtcbiAgICAgICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246ICcyMDBtcydcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuX2ZpbHRlck1lbnVPdmVybGF5U2V0dGluZ3MgPSB7XG4gICAgICAgICAgICBjbG9zZU9uT3V0c2lkZUNsaWNrOiB0cnVlLFxuICAgICAgICAgICAgbW9kYWw6IGZhbHNlLFxuICAgICAgICAgICAgcG9zaXRpb25TdHJhdGVneTogbmV3IEF1dG9Qb3NpdGlvblN0cmF0ZWd5KHRoaXMuX2ZpbHRlck1lbnVQb3NpdGlvblNldHRpbmdzKSxcbiAgICAgICAgICAgIHNjcm9sbFN0cmF0ZWd5OiBuZXcgQWJzb2x1dGVTY3JvbGxTdHJhdGVneSgpXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5fb3ZlcmxheVNlcnZpY2Uub25PcGVuaW5nLnBpcGUoXG4gICAgICAgICAgICBmaWx0ZXIoKG92ZXJsYXkpID0+IG92ZXJsYXkuaWQgPT09IHRoaXMuX2NvbXBvbmVudE92ZXJsYXlJZCksXG4gICAgICAgICAgICB0YWtlVW50aWwodGhpcy5fZGVzdHJveSQpKS5zdWJzY3JpYmUoKGV2ZW50QXJncykgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMub25PdmVybGF5T3BlbmluZyhldmVudEFyZ3MpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5fb3ZlcmxheVNlcnZpY2Uub25DbG9zZWQucGlwZShcbiAgICAgICAgICAgIGZpbHRlcihvdmVybGF5ID0+IG92ZXJsYXkuaWQgPT09IHRoaXMuX2NvbXBvbmVudE92ZXJsYXlJZCksXG4gICAgICAgICAgICB0YWtlVW50aWwodGhpcy5fZGVzdHJveSQpKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMub25PdmVybGF5Q2xvc2VkKCk7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uT3ZlcmxheU9wZW5pbmcoZXZlbnRBcmdzKSB7XG4gICAgICAgIGNvbnN0IGluc3RhbmNlID0gZXZlbnRBcmdzLmNvbXBvbmVudFJlZi5pbnN0YW5jZSBhcyBJZ3hHcmlkRXhjZWxTdHlsZUZpbHRlcmluZ0NvbXBvbmVudDtcbiAgICAgICAgaWYgKGluc3RhbmNlKSB7XG4gICAgICAgICAgICBpbnN0YW5jZS5pbml0aWFsaXplKHRoaXMuY29sdW1uLCB0aGlzLl9maWx0ZXJpbmdTZXJ2aWNlLCB0aGlzLl9vdmVybGF5U2VydmljZSwgZXZlbnRBcmdzLmlkKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgb25PdmVybGF5Q2xvc2VkKCkge1xuICAgICAgICB0aGlzLl9jb21wb25lbnRPdmVybGF5SWQgPSBudWxsO1xuICAgIH1cbn1cbiJdfQ==