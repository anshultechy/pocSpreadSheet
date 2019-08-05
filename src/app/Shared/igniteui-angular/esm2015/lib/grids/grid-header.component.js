/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
export class IgxGridHeaderComponent {
    /**
     * @param {?} gridAPI
     * @param {?} colResizingService
     * @param {?} cdr
     * @param {?} elementRef
     * @param {?} zone
     * @param {?} _filteringService
     * @param {?} _moduleRef
     * @param {?} _overlayService
     */
    constructor(gridAPI, colResizingService, cdr, elementRef, zone, _filteringService, _moduleRef, _overlayService) {
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
    /**
     * @return {?}
     */
    get styleClasses() {
        /** @type {?} */
        const defaultClasses = [
            'igx-grid__th--fw',
            this.column.headerClasses
        ];
        /** @type {?} */
        const classList = {
            'igx-grid__th': !this.column.columnGroup,
            'asc': this.ascending,
            'desc': this.descending,
            'igx-grid__th--number': this.column.dataType === DataType.Number,
            'igx-grid__th--sortable': this.column.sortable,
            'igx-grid__th--filtrable': this.column.filterable && this.grid.filteringService.isFilterRowVisible,
            'igx-grid__th--sorted': this.sorted
        };
        for (const klass of Object.keys(classList)) {
            if (classList[klass]) {
                defaultClasses.push(klass);
            }
        }
        return defaultClasses.join(' ');
    }
    /**
     * @return {?}
     */
    get height() {
        if (this.grid.hasColumnGroups) {
            return (this.grid.maxLevelHeaderDepth + 1 - this.column.level) * this.grid.defaultRowHeight / this.grid._baseFontSize;
        }
        return null;
    }
    /**
     * @return {?}
     */
    get ascending() {
        return this.sortDirection === SortingDirection.Asc;
    }
    /**
     * @return {?}
     */
    get descending() {
        return this.sortDirection === SortingDirection.Desc;
    }
    /**
     * @return {?}
     */
    get sortingIcon() {
        if (this.sortDirection !== SortingDirection.None) {
            // arrow_downward and arrow_upward
            // are material icons ligature strings
            return this.sortDirection === SortingDirection.Asc ? 'arrow_upward' : 'arrow_downward';
        }
        return 'arrow_upward';
    }
    /**
     * @return {?}
     */
    get sorted() {
        return this.sortDirection !== SortingDirection.None;
    }
    /**
     * @return {?}
     */
    get filterIconClassName() {
        return this.column.filteringExpressionsTree ? 'igx-excel-filter__icon--filtered' : 'igx-excel-filter__icon';
    }
    /**
     * @return {?}
     */
    get headerID() {
        return `${this.gridID}_${this.column.field}`;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.initFilteringSettings();
    }
    /**
     * @return {?}
     */
    ngDoCheck() {
        this.getSortDirection();
        this.cdr.markForCheck();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._destroy$.next(true);
        this._destroy$.complete();
        if (this._componentOverlayId) {
            this._overlayService.hide(this._componentOverlayId);
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onClick(event) {
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
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onFilteringIconClick(event) {
        event.stopPropagation();
        this.toggleFilterDropdown();
    }
    /**
     * @return {?}
     */
    get grid() {
        return this.gridAPI.grid;
    }
    /**
     * @protected
     * @return {?}
     */
    getSortDirection() {
        /** @type {?} */
        const expr = this.gridAPI.grid.sortingExpressions.find((x) => x.fieldName === this.column.field);
        this.sortDirection = expr ? expr.dir : SortingDirection.None;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onSortingIconClick(event) {
        if (this.grid.filteringService.isFilterRowVisible) {
            event.stopPropagation();
            this.triggerSort();
        }
    }
    /**
     * @private
     * @return {?}
     */
    triggerSort() {
        /** @type {?} */
        const groupingExpr = this.grid.groupingExpressions ?
            this.grid.groupingExpressions.find((expr) => expr.fieldName === this.column.field) : null;
        /** @type {?} */
        const sortDir = groupingExpr ?
            this.sortDirection + 1 > SortingDirection.Desc ? SortingDirection.Asc : SortingDirection.Desc
            : this.sortDirection + 1 > SortingDirection.Desc ? SortingDirection.None : this.sortDirection + 1;
        this.sortDirection = sortDir;
        this.grid.sort({ fieldName: this.column.field, dir: this.sortDirection, ignoreCase: this.column.sortingIgnoreCase,
            strategy: this.column.sortStrategy });
    }
    /**
     * @private
     * @return {?}
     */
    toggleFilterDropdown() {
        if (!this._componentOverlayId) {
            /** @type {?} */
            const headerTarget = this.elementRef.nativeElement;
            /** @type {?} */
            const filterIconTarget = headerTarget.querySelector('.' + this.filterIconClassName);
            this._filterMenuOverlaySettings.positionStrategy.settings.target = filterIconTarget;
            this._filterMenuOverlaySettings.outlet = this.grid.outlet;
            this._componentOverlayId =
                this._overlayService.attach(IgxGridExcelStyleFilteringComponent, this._filterMenuOverlaySettings, this._moduleRef);
            this._overlayService.show(this._componentOverlayId, this._filterMenuOverlaySettings);
        }
    }
    /**
     * @private
     * @return {?}
     */
    initFilteringSettings() {
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
        this._overlayService.onOpening.pipe(filter((overlay) => overlay.id === this._componentOverlayId), takeUntil(this._destroy$)).subscribe((eventArgs) => {
            this.onOverlayOpening(eventArgs);
        });
        this._overlayService.onClosed.pipe(filter(overlay => overlay.id === this._componentOverlayId), takeUntil(this._destroy$)).subscribe(() => {
            this.onOverlayClosed();
        });
    }
    /**
     * @private
     * @param {?} eventArgs
     * @return {?}
     */
    onOverlayOpening(eventArgs) {
        /** @type {?} */
        const instance = (/** @type {?} */ (eventArgs.componentRef.instance));
        if (instance) {
            instance.initialize(this.column, this._filteringService, this._overlayService, eventArgs.id);
        }
    }
    /**
     * @private
     * @return {?}
     */
    onOverlayClosed() {
        this._componentOverlayId = null;
    }
}
IgxGridHeaderComponent.decorators = [
    { type: Component, args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                preserveWhitespaces: false,
                selector: 'igx-grid-header',
                template: "<ng-template #defaultColumn>\n    {{ column.header || column.field }}\n</ng-template>\n\n<span class=\"igx-grid__th-title\">\n    <ng-container *ngTemplateOutlet=\"column.headerTemplate ? column.headerTemplate : defaultColumn; context: { $implicit: column, column: column}\">\n    </ng-container>\n</span>\n<div class=\"igx-grid__th-icons\" *ngIf=\"!column.columnGroup\">\n    <igx-icon [attr.draggable]=\"false\"\n        class=\"sort-icon\"\n        *ngIf=\"column.sortable\"\n        (click)=\"onSortingIconClick($event)\">\n        {{sortingIcon}}\n    </igx-icon>\n\n    <igx-icon [ngClass]=\"filterIconClassName\" [attr.draggable]=\"false\" (click)=\"onFilteringIconClick($event)\"\n        *ngIf=\"grid.allowFiltering == true && column.filterable && grid.filterMode == 'excelStyleFilter'\">\n        filter_list\n    </igx-icon>\n</div>\n"
            }] }
];
/** @nocollapse */
IgxGridHeaderComponent.ctorParameters = () => [
    { type: GridBaseAPIService },
    { type: IgxColumnResizingService },
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone },
    { type: IgxFilteringService },
    { type: NgModuleRef },
    { type: IgxOverlayService, decorators: [{ type: Inject, args: [IgxOverlayService,] }] }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC1oZWFkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vaWduaXRldWktYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9ncmlkcy9ncmlkLWhlYWRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDSCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFFVCxVQUFVLEVBQ1YsV0FBVyxFQUNYLFlBQVksRUFDWixLQUFLLEVBQ0wsTUFBTSxFQUVOLE1BQU0sRUFFTixXQUFXLEVBQ2QsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ3hELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBQ25GLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUV6RSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUMxRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsbUNBQW1DLEVBQUUsTUFBTSw4REFBOEQsQ0FBQztBQUNuSCxPQUFPLEVBQXFDLGlCQUFpQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDckcsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0scURBQXFELENBQUM7QUFDM0YsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbkQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsTUFB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QixpQkFBaUI7WUFHakIsVUFBVTtZQUlWLE1BQU07WUFVRCxtQkFBbUI7WUFOeEIsV0FBVztZQVNOLGlCQUFpQix1QkErR2pCLE1BQU0sU0FBQyxpQkFBaUI7OztxQkFyRjVCLEtBQUs7cUJBR0wsS0FBSzsyQkFHTCxXQUFXLFNBQUMsT0FBTztxQkF5Qm5CLFdBQVcsU0FBQyxrQkFBa0I7dUJBaUM5QixXQUFXLFNBQUMsV0FBVzt1QkFHdkIsV0FBVyxTQUFDLGVBQWU7dUJBRzNCLFdBQVcsU0FBQyxTQUFTO3NCQW9DckIsWUFBWSxTQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQzs7Ozs7OztJQS9HakMscURBQW9DOzs7OztJQUNwQyw2REFBc0Q7Ozs7O0lBQ3RELDREQUFvRDs7Ozs7SUFDcEQsMkNBQTJDOztJQUUzQyx3Q0FDa0M7O0lBRWxDLHdDQUNzQjs7SUE0RHRCLDBDQUNpQzs7SUFFakMsMENBQ3FCOzs7OztJQU9yQiwrQ0FBZ0Q7O0lBRzVDLHlDQUE0RTs7SUFDNUUsb0RBQW1EOztJQUNuRCxxQ0FBNkI7O0lBQzdCLDRDQUE2Qjs7SUFDN0Isc0NBQW1COzs7OztJQUNuQixtREFBOEM7Ozs7O0lBQzlDLDRDQUFvQzs7Ozs7SUFDcEMsaURBQXFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBDb21wb25lbnQsXG4gICAgRG9DaGVjayxcbiAgICBFbGVtZW50UmVmLFxuICAgIEhvc3RCaW5kaW5nLFxuICAgIEhvc3RMaXN0ZW5lcixcbiAgICBJbnB1dCxcbiAgICBOZ1pvbmUsXG4gICAgT25Jbml0LFxuICAgIEluamVjdCxcbiAgICBPbkRlc3Ryb3ksXG4gICAgTmdNb2R1bGVSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEYXRhVHlwZSB9IGZyb20gJy4uL2RhdGEtb3BlcmF0aW9ucy9kYXRhLXV0aWwnO1xuaW1wb3J0IHsgU29ydGluZ0RpcmVjdGlvbiB9IGZyb20gJy4uL2RhdGEtb3BlcmF0aW9ucy9zb3J0aW5nLWV4cHJlc3Npb24uaW50ZXJmYWNlJztcbmltcG9ydCB7IEdyaWRCYXNlQVBJU2VydmljZSB9IGZyb20gJy4vYXBpLnNlcnZpY2UnO1xuaW1wb3J0IHsgSWd4Q29sdW1uQ29tcG9uZW50IH0gZnJvbSAnLi9jb2x1bW4uY29tcG9uZW50JztcbmltcG9ydCB7IElneEZpbHRlcmluZ1NlcnZpY2UgfSBmcm9tICcuL2ZpbHRlcmluZy9ncmlkLWZpbHRlcmluZy5zZXJ2aWNlJztcbmltcG9ydCB7IElneEdyaWRCYXNlQ29tcG9uZW50LCBJR3JpZERhdGFCaW5kYWJsZSB9IGZyb20gJy4vZ3JpZC1iYXNlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJZ3hDb2x1bW5SZXNpemluZ1NlcnZpY2UgfSBmcm9tICcuL2dyaWQtY29sdW1uLXJlc2l6aW5nLnNlcnZpY2UnO1xuaW1wb3J0IHsgSWd4T3ZlcmxheVNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9vdmVybGF5L292ZXJsYXknO1xuaW1wb3J0IHsgSWd4R3JpZEV4Y2VsU3R5bGVGaWx0ZXJpbmdDb21wb25lbnQgfSBmcm9tICcuL2ZpbHRlcmluZy9leGNlbC1zdHlsZS9ncmlkLmV4Y2VsLXN0eWxlLWZpbHRlcmluZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgT3ZlcmxheVNldHRpbmdzLCBQb3NpdGlvblNldHRpbmdzLCBWZXJ0aWNhbEFsaWdubWVudCB9IGZyb20gJy4uL3NlcnZpY2VzL292ZXJsYXkvdXRpbGl0aWVzJztcbmltcG9ydCB7IEF1dG9Qb3NpdGlvblN0cmF0ZWd5IH0gZnJvbSAnLi4vc2VydmljZXMvb3ZlcmxheS9wb3NpdGlvbi9hdXRvLXBvc2l0aW9uLXN0cmF0ZWd5JztcbmltcG9ydCB7IHVzZUFuaW1hdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHsgZmlsdGVyLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmYWRlSW4sIGZhZGVPdXQgfSBmcm9tICcuLi9hbmltYXRpb25zL21haW4nO1xuaW1wb3J0IHsgQWJzb2x1dGVTY3JvbGxTdHJhdGVneSB9IGZyb20gJy4uL3NlcnZpY2VzL292ZXJsYXkvc2Nyb2xsL2Fic29sdXRlLXNjcm9sbC1zdHJhdGVneSc7XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5AQ29tcG9uZW50KHtcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgICBzZWxlY3RvcjogJ2lneC1ncmlkLWhlYWRlcicsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2dyaWQtaGVhZGVyLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBJZ3hHcmlkSGVhZGVyQ29tcG9uZW50IGltcGxlbWVudHMgRG9DaGVjaywgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gICAgcHJpdmF0ZSBfY29tcG9uZW50T3ZlcmxheUlkOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBfZmlsdGVyTWVudVBvc2l0aW9uU2V0dGluZ3M6IFBvc2l0aW9uU2V0dGluZ3M7XG4gICAgcHJpdmF0ZSBfZmlsdGVyTWVudU92ZXJsYXlTZXR0aW5nczogT3ZlcmxheVNldHRpbmdzO1xuICAgIHByaXZhdGUgX2Rlc3Ryb3kkID0gbmV3IFN1YmplY3Q8Ym9vbGVhbj4oKTtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGNvbHVtbjogSWd4Q29sdW1uQ29tcG9uZW50O1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZ3JpZElEOiBzdHJpbmc7XG5cbiAgICBASG9zdEJpbmRpbmcoJ2NsYXNzJylcbiAgICBnZXQgc3R5bGVDbGFzc2VzKCk6IHN0cmluZyB7XG4gICAgICAgIGNvbnN0IGRlZmF1bHRDbGFzc2VzID0gW1xuICAgICAgICAgICAgJ2lneC1ncmlkX190aC0tZncnLFxuICAgICAgICAgICAgdGhpcy5jb2x1bW4uaGVhZGVyQ2xhc3Nlc1xuICAgICAgICBdO1xuXG4gICAgICAgIGNvbnN0IGNsYXNzTGlzdCA9IHtcbiAgICAgICAgICAgICdpZ3gtZ3JpZF9fdGgnOiAhdGhpcy5jb2x1bW4uY29sdW1uR3JvdXAsXG4gICAgICAgICAgICAnYXNjJzogdGhpcy5hc2NlbmRpbmcsXG4gICAgICAgICAgICAnZGVzYyc6IHRoaXMuZGVzY2VuZGluZyxcbiAgICAgICAgICAgICdpZ3gtZ3JpZF9fdGgtLW51bWJlcic6IHRoaXMuY29sdW1uLmRhdGFUeXBlID09PSBEYXRhVHlwZS5OdW1iZXIsXG4gICAgICAgICAgICAnaWd4LWdyaWRfX3RoLS1zb3J0YWJsZSc6IHRoaXMuY29sdW1uLnNvcnRhYmxlLFxuICAgICAgICAgICAgJ2lneC1ncmlkX190aC0tZmlsdHJhYmxlJzogdGhpcy5jb2x1bW4uZmlsdGVyYWJsZSAmJiB0aGlzLmdyaWQuZmlsdGVyaW5nU2VydmljZS5pc0ZpbHRlclJvd1Zpc2libGUsXG4gICAgICAgICAgICAnaWd4LWdyaWRfX3RoLS1zb3J0ZWQnOiB0aGlzLnNvcnRlZFxuICAgICAgICB9O1xuXG4gICAgICAgIGZvciAoY29uc3Qga2xhc3Mgb2YgT2JqZWN0LmtleXMoY2xhc3NMaXN0KSkge1xuICAgICAgICAgICAgaWYgKGNsYXNzTGlzdFtrbGFzc10pIHtcbiAgICAgICAgICAgICAgICBkZWZhdWx0Q2xhc3Nlcy5wdXNoKGtsYXNzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZGVmYXVsdENsYXNzZXMuam9pbignICcpO1xuICAgIH1cblxuICAgIEBIb3N0QmluZGluZygnc3R5bGUuaGVpZ2h0LnJlbScpXG4gICAgZ2V0IGhlaWdodCgpIHtcbiAgICAgICAgaWYgKHRoaXMuZ3JpZC5oYXNDb2x1bW5Hcm91cHMpIHtcbiAgICAgICAgICAgIHJldHVybiAodGhpcy5ncmlkLm1heExldmVsSGVhZGVyRGVwdGggKyAxIC0gdGhpcy5jb2x1bW4ubGV2ZWwpICogdGhpcy5ncmlkLmRlZmF1bHRSb3dIZWlnaHQgLyB0aGlzLmdyaWQuX2Jhc2VGb250U2l6ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBnZXQgYXNjZW5kaW5nKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zb3J0RGlyZWN0aW9uID09PSBTb3J0aW5nRGlyZWN0aW9uLkFzYztcbiAgICB9XG5cbiAgICBnZXQgZGVzY2VuZGluZygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc29ydERpcmVjdGlvbiA9PT0gU29ydGluZ0RpcmVjdGlvbi5EZXNjO1xuICAgIH1cblxuICAgIGdldCBzb3J0aW5nSWNvbigpOiBzdHJpbmcge1xuICAgICAgICBpZiAodGhpcy5zb3J0RGlyZWN0aW9uICE9PSBTb3J0aW5nRGlyZWN0aW9uLk5vbmUpIHtcbiAgICAgICAgICAgIC8vIGFycm93X2Rvd253YXJkIGFuZCBhcnJvd191cHdhcmRcbiAgICAgICAgICAgIC8vIGFyZSBtYXRlcmlhbCBpY29ucyBsaWdhdHVyZSBzdHJpbmdzXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zb3J0RGlyZWN0aW9uID09PSBTb3J0aW5nRGlyZWN0aW9uLkFzYyA/ICdhcnJvd191cHdhcmQnIDogJ2Fycm93X2Rvd253YXJkJztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gJ2Fycm93X3Vwd2FyZCc7XG4gICAgfVxuXG4gICAgZ2V0IHNvcnRlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc29ydERpcmVjdGlvbiAhPT0gU29ydGluZ0RpcmVjdGlvbi5Ob25lO1xuICAgIH1cblxuICAgIGdldCBmaWx0ZXJJY29uQ2xhc3NOYW1lKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb2x1bW4uZmlsdGVyaW5nRXhwcmVzc2lvbnNUcmVlID8gJ2lneC1leGNlbC1maWx0ZXJfX2ljb24tLWZpbHRlcmVkJyA6ICdpZ3gtZXhjZWwtZmlsdGVyX19pY29uJztcbiAgICB9XG5cbiAgICBASG9zdEJpbmRpbmcoJ2F0dHIucm9sZScpXG4gICAgcHVibGljIGhvc3RSb2xlID0gJ2NvbHVtbmhlYWRlcic7XG5cbiAgICBASG9zdEJpbmRpbmcoJ2F0dHIudGFiaW5kZXgnKVxuICAgIHB1YmxpYyB0YWJpbmRleCA9IC0xO1xuXG4gICAgQEhvc3RCaW5kaW5nKCdhdHRyLmlkJylcbiAgICBnZXQgaGVhZGVySUQoKSB7XG4gICAgICAgIHJldHVybiBgJHt0aGlzLmdyaWRJRH1fJHt0aGlzLmNvbHVtbi5maWVsZH1gO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBzb3J0RGlyZWN0aW9uID0gU29ydGluZ0RpcmVjdGlvbi5Ob25lO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHB1YmxpYyBncmlkQVBJOiBHcmlkQmFzZUFQSVNlcnZpY2U8SWd4R3JpZEJhc2VDb21wb25lbnQgJiBJR3JpZERhdGFCaW5kYWJsZT4sXG4gICAgICAgIHB1YmxpYyBjb2xSZXNpemluZ1NlcnZpY2U6IElneENvbHVtblJlc2l6aW5nU2VydmljZSxcbiAgICAgICAgcHVibGljIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgICAgIHB1YmxpYyBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgICAgICBwdWJsaWMgem9uZTogTmdab25lLFxuICAgICAgICBwcml2YXRlIF9maWx0ZXJpbmdTZXJ2aWNlOiBJZ3hGaWx0ZXJpbmdTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIF9tb2R1bGVSZWY6IE5nTW9kdWxlUmVmPGFueT4sXG4gICAgICAgIEBJbmplY3QoSWd4T3ZlcmxheVNlcnZpY2UpIHByaXZhdGUgX292ZXJsYXlTZXJ2aWNlOiBJZ3hPdmVybGF5U2VydmljZVxuICAgICkgeyB9XG5cbiAgICBwdWJsaWMgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuaW5pdEZpbHRlcmluZ1NldHRpbmdzKCk7XG4gICAgfVxuXG4gICAgcHVibGljIG5nRG9DaGVjaygpIHtcbiAgICAgICAgdGhpcy5nZXRTb3J0RGlyZWN0aW9uKCk7XG4gICAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgICAgICB0aGlzLl9kZXN0cm95JC5uZXh0KHRydWUpO1xuICAgICAgICB0aGlzLl9kZXN0cm95JC5jb21wbGV0ZSgpO1xuXG4gICAgICAgIGlmICh0aGlzLl9jb21wb25lbnRPdmVybGF5SWQpIHtcbiAgICAgICAgICAgIHRoaXMuX292ZXJsYXlTZXJ2aWNlLmhpZGUodGhpcy5fY29tcG9uZW50T3ZlcmxheUlkKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyckZXZlbnQnXSlcbiAgICBwdWJsaWMgb25DbGljayhldmVudCkge1xuICAgICAgICBpZiAoIXRoaXMuY29sUmVzaXppbmdTZXJ2aWNlLmlzQ29sdW1uUmVzaXppbmcpIHtcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgaWYgKHRoaXMuZ3JpZC5maWx0ZXJpbmdTZXJ2aWNlLmlzRmlsdGVyUm93VmlzaWJsZSkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNvbHVtbi5maWx0ZXJhYmxlICYmICF0aGlzLmNvbHVtbi5jb2x1bW5Hcm91cCAmJlxuICAgICAgICAgICAgICAgICAgICAhdGhpcy5ncmlkLmZpbHRlcmluZ1NlcnZpY2UuaXNGaWx0ZXJDb21wbGV4KHRoaXMuY29sdW1uLmZpZWxkKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmdyaWQuZmlsdGVyaW5nU2VydmljZS5maWx0ZXJlZENvbHVtbiA9IHRoaXMuY29sdW1uO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5jb2x1bW4uc29ydGFibGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRyaWdnZXJTb3J0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgb25GaWx0ZXJpbmdJY29uQ2xpY2soZXZlbnQpIHtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgICAgdGhpcy50b2dnbGVGaWx0ZXJEcm9wZG93bigpO1xuICAgIH1cblxuICAgIGdldCBncmlkKCk6IGFueSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdyaWRBUEkuZ3JpZDtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZ2V0U29ydERpcmVjdGlvbigpIHtcbiAgICAgICAgY29uc3QgZXhwciA9IHRoaXMuZ3JpZEFQSS5ncmlkLnNvcnRpbmdFeHByZXNzaW9ucy5maW5kKCh4KSA9PiB4LmZpZWxkTmFtZSA9PT0gdGhpcy5jb2x1bW4uZmllbGQpO1xuICAgICAgICB0aGlzLnNvcnREaXJlY3Rpb24gPSBleHByID8gZXhwci5kaXIgOiBTb3J0aW5nRGlyZWN0aW9uLk5vbmU7XG4gICAgfVxuXG4gICAgcHVibGljIG9uU29ydGluZ0ljb25DbGljayhldmVudCkge1xuICAgICAgICBpZiAodGhpcy5ncmlkLmZpbHRlcmluZ1NlcnZpY2UuaXNGaWx0ZXJSb3dWaXNpYmxlKSB7XG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIHRoaXMudHJpZ2dlclNvcnQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgdHJpZ2dlclNvcnQoKSB7XG4gICAgICAgIGNvbnN0IGdyb3VwaW5nRXhwciA9IHRoaXMuZ3JpZC5ncm91cGluZ0V4cHJlc3Npb25zID9cbiAgICAgICAgICAgIHRoaXMuZ3JpZC5ncm91cGluZ0V4cHJlc3Npb25zLmZpbmQoKGV4cHIpID0+IGV4cHIuZmllbGROYW1lID09PSB0aGlzLmNvbHVtbi5maWVsZCkgOiBudWxsO1xuICAgICAgICBjb25zdCBzb3J0RGlyID0gZ3JvdXBpbmdFeHByID9cbiAgICAgICAgICAgIHRoaXMuc29ydERpcmVjdGlvbiArIDEgPiBTb3J0aW5nRGlyZWN0aW9uLkRlc2MgPyBTb3J0aW5nRGlyZWN0aW9uLkFzYyA6IFNvcnRpbmdEaXJlY3Rpb24uRGVzY1xuICAgICAgICAgICAgOiB0aGlzLnNvcnREaXJlY3Rpb24gKyAxID4gU29ydGluZ0RpcmVjdGlvbi5EZXNjID8gU29ydGluZ0RpcmVjdGlvbi5Ob25lIDogdGhpcy5zb3J0RGlyZWN0aW9uICsgMTtcbiAgICAgICAgdGhpcy5zb3J0RGlyZWN0aW9uID0gc29ydERpcjtcbiAgICAgICAgdGhpcy5ncmlkLnNvcnQoeyBmaWVsZE5hbWU6IHRoaXMuY29sdW1uLmZpZWxkLCBkaXI6IHRoaXMuc29ydERpcmVjdGlvbiwgaWdub3JlQ2FzZTogdGhpcy5jb2x1bW4uc29ydGluZ0lnbm9yZUNhc2UsXG4gICAgICAgICAgICBzdHJhdGVneTogdGhpcy5jb2x1bW4uc29ydFN0cmF0ZWd5IH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgdG9nZ2xlRmlsdGVyRHJvcGRvd24oKSB7XG4gICAgICAgIGlmICghdGhpcy5fY29tcG9uZW50T3ZlcmxheUlkKSB7XG4gICAgICAgICAgICBjb25zdCBoZWFkZXJUYXJnZXQgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgICAgICAgICAgIGNvbnN0IGZpbHRlckljb25UYXJnZXQgPSBoZWFkZXJUYXJnZXQucXVlcnlTZWxlY3RvcignLicgKyB0aGlzLmZpbHRlckljb25DbGFzc05hbWUpO1xuXG4gICAgICAgICAgICB0aGlzLl9maWx0ZXJNZW51T3ZlcmxheVNldHRpbmdzLnBvc2l0aW9uU3RyYXRlZ3kuc2V0dGluZ3MudGFyZ2V0ID0gZmlsdGVySWNvblRhcmdldDtcbiAgICAgICAgICAgIHRoaXMuX2ZpbHRlck1lbnVPdmVybGF5U2V0dGluZ3Mub3V0bGV0ID0gdGhpcy5ncmlkLm91dGxldDtcblxuICAgICAgICAgICAgdGhpcy5fY29tcG9uZW50T3ZlcmxheUlkID1cbiAgICAgICAgICAgICAgICB0aGlzLl9vdmVybGF5U2VydmljZS5hdHRhY2goSWd4R3JpZEV4Y2VsU3R5bGVGaWx0ZXJpbmdDb21wb25lbnQsIHRoaXMuX2ZpbHRlck1lbnVPdmVybGF5U2V0dGluZ3MsIHRoaXMuX21vZHVsZVJlZik7XG4gICAgICAgICAgICB0aGlzLl9vdmVybGF5U2VydmljZS5zaG93KHRoaXMuX2NvbXBvbmVudE92ZXJsYXlJZCwgdGhpcy5fZmlsdGVyTWVudU92ZXJsYXlTZXR0aW5ncyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGluaXRGaWx0ZXJpbmdTZXR0aW5ncygpIHtcbiAgICAgICAgdGhpcy5fZmlsdGVyTWVudVBvc2l0aW9uU2V0dGluZ3MgPSB7XG4gICAgICAgICAgICB2ZXJ0aWNhbFN0YXJ0UG9pbnQ6IFZlcnRpY2FsQWxpZ25tZW50LkJvdHRvbSxcbiAgICAgICAgICAgIG9wZW5BbmltYXRpb246IHVzZUFuaW1hdGlvbihmYWRlSW4sIHtcbiAgICAgICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246ICcyNTBtcydcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIGNsb3NlQW5pbWF0aW9uOiB1c2VBbmltYXRpb24oZmFkZU91dCwge1xuICAgICAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogJzIwMG1zJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5fZmlsdGVyTWVudU92ZXJsYXlTZXR0aW5ncyA9IHtcbiAgICAgICAgICAgIGNsb3NlT25PdXRzaWRlQ2xpY2s6IHRydWUsXG4gICAgICAgICAgICBtb2RhbDogZmFsc2UsXG4gICAgICAgICAgICBwb3NpdGlvblN0cmF0ZWd5OiBuZXcgQXV0b1Bvc2l0aW9uU3RyYXRlZ3kodGhpcy5fZmlsdGVyTWVudVBvc2l0aW9uU2V0dGluZ3MpLFxuICAgICAgICAgICAgc2Nyb2xsU3RyYXRlZ3k6IG5ldyBBYnNvbHV0ZVNjcm9sbFN0cmF0ZWd5KClcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLl9vdmVybGF5U2VydmljZS5vbk9wZW5pbmcucGlwZShcbiAgICAgICAgICAgIGZpbHRlcigob3ZlcmxheSkgPT4gb3ZlcmxheS5pZCA9PT0gdGhpcy5fY29tcG9uZW50T3ZlcmxheUlkKSxcbiAgICAgICAgICAgIHRha2VVbnRpbCh0aGlzLl9kZXN0cm95JCkpLnN1YnNjcmliZSgoZXZlbnRBcmdzKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5vbk92ZXJsYXlPcGVuaW5nKGV2ZW50QXJncyk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLl9vdmVybGF5U2VydmljZS5vbkNsb3NlZC5waXBlKFxuICAgICAgICAgICAgZmlsdGVyKG92ZXJsYXkgPT4gb3ZlcmxheS5pZCA9PT0gdGhpcy5fY29tcG9uZW50T3ZlcmxheUlkKSxcbiAgICAgICAgICAgIHRha2VVbnRpbCh0aGlzLl9kZXN0cm95JCkpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5vbk92ZXJsYXlDbG9zZWQoKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25PdmVybGF5T3BlbmluZyhldmVudEFyZ3MpIHtcbiAgICAgICAgY29uc3QgaW5zdGFuY2UgPSBldmVudEFyZ3MuY29tcG9uZW50UmVmLmluc3RhbmNlIGFzIElneEdyaWRFeGNlbFN0eWxlRmlsdGVyaW5nQ29tcG9uZW50O1xuICAgICAgICBpZiAoaW5zdGFuY2UpIHtcbiAgICAgICAgICAgIGluc3RhbmNlLmluaXRpYWxpemUodGhpcy5jb2x1bW4sIHRoaXMuX2ZpbHRlcmluZ1NlcnZpY2UsIHRoaXMuX292ZXJsYXlTZXJ2aWNlLCBldmVudEFyZ3MuaWQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbk92ZXJsYXlDbG9zZWQoKSB7XG4gICAgICAgIHRoaXMuX2NvbXBvbmVudE92ZXJsYXlJZCA9IG51bGw7XG4gICAgfVxufVxuIl19