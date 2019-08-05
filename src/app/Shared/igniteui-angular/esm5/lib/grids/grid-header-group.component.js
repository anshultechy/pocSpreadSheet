/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, HostBinding, Input, ViewChild, QueryList, ViewChildren, forwardRef, ChangeDetectionStrategy, ChangeDetectorRef, ElementRef, HostListener } from '@angular/core';
import { IgxColumnComponent } from './column.component';
import { IgxFilteringService } from './filtering/grid-filtering.service';
import { GridBaseAPIService } from './api.service';
import { IgxColumnResizingService } from './grid-column-resizing.service';
import { IgxGridHeaderComponent } from './grid-header.component';
import { IgxGridFilteringCellComponent } from './filtering/grid-filtering-cell.component';
import { isIE } from '../core/utils';
/** @type {?} */
var Z_INDEX = 9999;
/**
 * @hidden
 */
var IgxGridHeaderGroupComponent = /** @class */ (function () {
    function IgxGridHeaderGroupComponent(cdr, gridAPI, element, colResizingService, filteringService) {
        this.cdr = cdr;
        this.gridAPI = gridAPI;
        this.element = element;
        this.colResizingService = colResizingService;
        this.filteringService = filteringService;
    }
    Object.defineProperty(IgxGridHeaderGroupComponent.prototype, "gridRowSpan", {
        get: /**
         * @return {?}
         */
        function () {
            return this.column.gridRowSpan;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxGridHeaderGroupComponent.prototype, "gridColumnSpan", {
        get: /**
         * @return {?}
         */
        function () {
            return this.column.gridColumnSpan;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxGridHeaderGroupComponent.prototype, "rowEnd", {
        get: /**
         * @return {?}
         */
        function () {
            return this.column.rowEnd;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxGridHeaderGroupComponent.prototype, "colEnd", {
        get: /**
         * @return {?}
         */
        function () {
            return this.column.colEnd;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxGridHeaderGroupComponent.prototype, "rowStart", {
        get: /**
         * @return {?}
         */
        function () {
            return this.column.rowStart;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxGridHeaderGroupComponent.prototype, "colStart", {
        get: /**
         * @return {?}
         */
        function () {
            return this.column.colStart;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxGridHeaderGroupComponent.prototype, "width", {
        /**
         * Gets the width of the header group.
         * @memberof IgxGridHeaderGroupComponent
         */
        get: /**
         * Gets the width of the header group.
         * \@memberof IgxGridHeaderGroupComponent
         * @return {?}
         */
        function () {
            return this.grid.getHeaderGroupWidth(this.column);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxGridHeaderGroupComponent.prototype, "styleClasses", {
        /**
         * Gets the style classes of the header group.
         * @memberof IgxGridHeaderGroupComponent
         */
        get: /**
         * Gets the style classes of the header group.
         * \@memberof IgxGridHeaderGroupComponent
         * @return {?}
         */
        function () {
            var e_1, _a;
            /** @type {?} */
            var defaultClasses = [
                'igx-grid__thead-item',
                this.column.headerGroupClasses
            ];
            /** @type {?} */
            var classList = {
                'igx-grid__th--pinned': this.isPinned,
                'igx-grid__th--pinned-last': this.isLastPinned,
                'igx-grid__drag-col-header': this.isHeaderDragged,
                'igx-grid__th--filtering': this.isFiltered
            };
            try {
                for (var _b = tslib_1.__values(Object.keys(classList)), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var className = _c.value;
                    if (classList[className]) {
                        defaultClasses.push(className);
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
    Object.defineProperty(IgxGridHeaderGroupComponent.prototype, "zIndex", {
        /**
         * @hidden
         */
        get: /**
         * @hidden
         * @return {?}
         */
        function () {
            if (!this.column.pinned) {
                return null;
            }
            return Z_INDEX - this.grid.pinnedColumns.indexOf(this.column);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxGridHeaderGroupComponent.prototype, "grid", {
        /**
         * Gets the grid of the header group.
         * @memberof IgxGridHeaderGroupComponent
         */
        get: /**
         * Gets the grid of the header group.
         * \@memberof IgxGridHeaderGroupComponent
         * @return {?}
         */
        function () {
            return this.gridAPI.grid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxGridHeaderGroupComponent.prototype, "isFiltered", {
        /**
         * Gets whether the header group belongs to a column that is filtered.
         * @memberof IgxGridHeaderGroupComponent
         */
        get: /**
         * Gets whether the header group belongs to a column that is filtered.
         * \@memberof IgxGridHeaderGroupComponent
         * @return {?}
         */
        function () {
            return this.filteringService.filteredColumn === this.column;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxGridHeaderGroupComponent.prototype, "isLastPinned", {
        /**
         * Gets whether the header group is stored in the last column in the pinned area.
         * @memberof IgxGridHeaderGroupComponent
         */
        get: /**
         * Gets whether the header group is stored in the last column in the pinned area.
         * \@memberof IgxGridHeaderGroupComponent
         * @return {?}
         */
        function () {
            return !this.grid.hasColumnLayouts ? this.column.isLastPinned : false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxGridHeaderGroupComponent.prototype, "groupDisplayStyle", {
        get: /**
         * @return {?}
         */
        function () {
            return this.grid.hasColumnLayouts && this.column.children && !isIE() ? 'flex' : '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxGridHeaderGroupComponent.prototype, "isPinned", {
        /**
         * Gets whether the header group is stored in a pinned column.
         * @memberof IgxGridHeaderGroupComponent
         */
        get: /**
         * Gets whether the header group is stored in a pinned column.
         * \@memberof IgxGridHeaderGroupComponent
         * @return {?}
         */
        function () {
            return this.column.pinned;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxGridHeaderGroupComponent.prototype, "isHeaderDragged", {
        /**
         * Gets whether the header group belongs to a column that is moved.
         * @memberof IgxGridHeaderGroupComponent
         */
        get: /**
         * Gets whether the header group belongs to a column that is moved.
         * \@memberof IgxGridHeaderGroupComponent
         * @return {?}
         */
        function () {
            return this.grid.draggedColumn === this.column;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxGridHeaderGroupComponent.prototype, "hasLastPinnedChildColumn", {
        /**
         * @hidden
         */
        get: /**
         * @hidden
         * @return {?}
         */
        function () {
            return this.column.allChildren.some(function (child) { return child.isLastPinned; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxGridHeaderGroupComponent.prototype, "height", {
        /**
         * @hidden
         */
        get: /**
         * @hidden
         * @return {?}
         */
        function () {
            return this.element.nativeElement.getBoundingClientRect().height;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    IgxGridHeaderGroupComponent.prototype.onMouseDown = /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    function (event) {
        // hack for preventing text selection in IE and Edge while dragging the resizer
        event.preventDefault();
    };
    /**
     * @return {?}
     */
    IgxGridHeaderGroupComponent.prototype.ngDoCheck = /**
     * @return {?}
     */
    function () {
        this.cdr.markForCheck();
    };
    IgxGridHeaderGroupComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    preserveWhitespaces: false,
                    selector: 'igx-grid-header-group',
                    template: "<ng-container *ngIf=\"grid.hasColumnLayouts && column.columnGroup\">\n    <span *ngIf=\"grid.hasMovableColumns\" class=\"igx-grid__th-drop-indicator-left\"></span>\n    <div class=\"igx-grid__thead-group igx-grid__mrl-block\"\n     [ngClass]=\"{'igx-grid__th--pinned-last': hasLastPinnedChildColumn}\"\n     [ngStyle]=\"{'grid-template-rows':column.getGridTemplate(true, false),\n     'grid-template-columns':column.getGridTemplate(false, false),\n     '-ms-grid-rows':column.getGridTemplate(true, true),\n     '-ms-grid-columns':column.getGridTemplate(false, true)}\">\n        <ng-container *ngFor=\"let child of column.children\" >\n            <igx-grid-header-group *ngIf=\"!child.hidden\" class=\"igx-grid__thead-subgroup\"\n                [column]=\"child\"\n                [gridID]=\"child.gridID\"\n                [igxColumnMovingDrag]=\"child\"\n                [dragGhostHost]=\"grid.outletDirective.nativeElement\"\n                [attr.droppable]=\"true\"\n                [igxColumnMovingDrop]=\"child\">\n            </igx-grid-header-group>\n        </ng-container>\n    </div>\n    <span *ngIf=\"grid.hasMovableColumns\" class=\"igx-grid__th-drop-indicator-right\"></span>\n</ng-container>\n\n<ng-template #defaultColumn>{{column.header}}</ng-template>\n\n<ng-container *ngIf=\"!grid.hasColumnLayouts && column.columnGroup\">\n    <span *ngIf=\"grid.hasMovableColumns\" class=\"igx-grid__th-drop-indicator-left\"></span>\n    <div class=\"igx-grid__thead-title\"\n        [ngClass]=\"{'igx-grid__th--pinned-last': hasLastPinnedChildColumn}\"\n        [igxColumnMovingDrag]=\"column\"\n        [dragGhostHost]=\"grid.outletDirective.nativeElement\"\n        [attr.droppable]=\"true\"\n        [igxColumnMovingDrop]=\"column\">\n        <ng-container *ngTemplateOutlet=\"column.headerTemplate ? column.headerTemplate : defaultColumn; context: { $implicit: column, column: column}\">\n        </ng-container>\n    </div>\n    <div class=\"igx-grid__thead-group\">\n        <ng-container *ngFor=\"let child of column.children\">\n            <igx-grid-header-group *ngIf=\"!child.hidden\" class=\"igx-grid__thead-subgroup\"\n                                [column]=\"child\"\n                                [gridID]=\"child.grid.id\"\n                                [style.min-width.px]=\"grid.getHeaderGroupWidth(child)\"\n                                [style.flex-basis.px]=\"grid.getHeaderGroupWidth(child)\">\n            </igx-grid-header-group>\n        </ng-container>\n    </div>\n    <span *ngIf=\"grid.hasMovableColumns\" class=\"igx-grid__th-drop-indicator-right\"></span>\n</ng-container>\n\n<ng-container *ngIf=\"!column.columnGroup\">\n    <span *ngIf=\"grid.hasMovableColumns\" class=\"igx-grid__th-drop-indicator-left\"></span>\n    <igx-grid-header [igxColumnMovingDrag]=\"column\" [dragGhostHost]=\"grid.outletDirective.nativeElement\" [attr.droppable]=\"true\" [igxColumnMovingDrop]=\"column\" [gridID]=\"column.grid.id\" [column]=\"column\"></igx-grid-header>\n    <igx-grid-filtering-cell *ngIf=\"grid.allowFiltering && grid.filterMode == 'quickFilter'\" [column]=\"column\" [attr.draggable]=\"false\"></igx-grid-filtering-cell>\n    <span *ngIf=\"!column.columnGroup && column.resizable\" class=\"igx-grid__th-resize-handle\"\n          [igxResizeHandle]=\"column\"\n          [attr.draggable]=\"false\"\n          [style.cursor]=\"colResizingService.resizeCursor\">\n    </span>\n    <span *ngIf=\"grid.hasMovableColumns\" class=\"igx-grid__th-drop-indicator-right\"></span>\n</ng-container>\n"
                }] }
    ];
    /** @nocollapse */
    IgxGridHeaderGroupComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: GridBaseAPIService },
        { type: ElementRef },
        { type: IgxColumnResizingService },
        { type: IgxFilteringService }
    ]; };
    IgxGridHeaderGroupComponent.propDecorators = {
        gridRowSpan: [{ type: HostBinding, args: ['style.-ms-grid-row-span',] }],
        gridColumnSpan: [{ type: HostBinding, args: ['style.-ms-grid-column-span',] }],
        rowEnd: [{ type: HostBinding, args: ['style.grid-row-end',] }],
        colEnd: [{ type: HostBinding, args: ['style.grid-column-end',] }],
        rowStart: [{ type: HostBinding, args: ['style.-ms-grid-row',] }, { type: HostBinding, args: ['style.grid-row-start',] }],
        colStart: [{ type: HostBinding, args: ['style.-ms-grid-column',] }, { type: HostBinding, args: ['style.grid-column-start',] }],
        column: [{ type: Input }],
        gridID: [{ type: Input }],
        headerCell: [{ type: ViewChild, args: [IgxGridHeaderComponent, { static: false },] }],
        filterCell: [{ type: ViewChild, args: [IgxGridFilteringCellComponent, { static: false },] }],
        children: [{ type: ViewChildren, args: [forwardRef(function () { return IgxGridHeaderGroupComponent; }), { read: IgxGridHeaderGroupComponent },] }],
        width: [{ type: HostBinding, args: ['style.min-width',] }, { type: HostBinding, args: ['style.flex-basis',] }],
        styleClasses: [{ type: HostBinding, args: ['class',] }],
        zIndex: [{ type: HostBinding, args: ['style.z-index',] }],
        groupDisplayStyle: [{ type: HostBinding, args: ['style.display',] }],
        onMouseDown: [{ type: HostListener, args: ['mousedown', ['$event'],] }]
    };
    return IgxGridHeaderGroupComponent;
}());
export { IgxGridHeaderGroupComponent };
if (false) {
    /**
     * Gets the column of the header group.
     * \@memberof IgxGridHeaderGroupComponent
     * @type {?}
     */
    IgxGridHeaderGroupComponent.prototype.column;
    /**
     * Gets the `id` of the grid in which the header group is stored.
     * \@memberof IgxGridHeaderGroupComponent
     * @type {?}
     */
    IgxGridHeaderGroupComponent.prototype.gridID;
    /**
     * @hidden
     * @type {?}
     */
    IgxGridHeaderGroupComponent.prototype.headerCell;
    /**
     * @hidden
     * @type {?}
     */
    IgxGridHeaderGroupComponent.prototype.filterCell;
    /**
     * @hidden
     * @type {?}
     */
    IgxGridHeaderGroupComponent.prototype.children;
    /**
     * @type {?}
     * @private
     */
    IgxGridHeaderGroupComponent.prototype.cdr;
    /** @type {?} */
    IgxGridHeaderGroupComponent.prototype.gridAPI;
    /** @type {?} */
    IgxGridHeaderGroupComponent.prototype.element;
    /** @type {?} */
    IgxGridHeaderGroupComponent.prototype.colResizingService;
    /** @type {?} */
    IgxGridHeaderGroupComponent.prototype.filteringService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC1oZWFkZXItZ3JvdXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vaWduaXRldWktYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9ncmlkcy9ncmlkLWhlYWRlci1ncm91cC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0gsU0FBUyxFQUNULFdBQVcsRUFDWCxLQUFLLEVBQ0wsU0FBUyxFQUNULFNBQVMsRUFDVCxZQUFZLEVBQ1osVUFBVSxFQUNWLHVCQUF1QixFQUN2QixpQkFBaUIsRUFFakIsVUFBVSxFQUNWLFlBQVksRUFDZixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUN6RSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFbkQsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDMUUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDakUsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDMUYsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLGVBQWUsQ0FBQzs7SUFFL0IsT0FBTyxHQUFHLElBQUk7Ozs7QUFLcEI7SUFpTUkscUNBQW9CLEdBQXNCLEVBQ3ZCLE9BQXFFLEVBQ3JFLE9BQW1CLEVBQ25CLGtCQUE0QyxFQUM1QyxnQkFBcUM7UUFKcEMsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFDdkIsWUFBTyxHQUFQLE9BQU8sQ0FBOEQ7UUFDckUsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQUNuQix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQTBCO1FBQzVDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBcUI7SUFBSSxDQUFDO0lBN0w3RCxzQkFDSSxvREFB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LFxuICAgIEhvc3RCaW5kaW5nLFxuICAgIElucHV0LFxuICAgIFZpZXdDaGlsZCxcbiAgICBRdWVyeUxpc3QsXG4gICAgVmlld0NoaWxkcmVuLFxuICAgIGZvcndhcmRSZWYsXG4gICAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gICAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgRG9DaGVjayxcbiAgICBFbGVtZW50UmVmLFxuICAgIEhvc3RMaXN0ZW5lclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElneENvbHVtbkNvbXBvbmVudCB9IGZyb20gJy4vY29sdW1uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJZ3hGaWx0ZXJpbmdTZXJ2aWNlIH0gZnJvbSAnLi9maWx0ZXJpbmcvZ3JpZC1maWx0ZXJpbmcuc2VydmljZSc7XG5pbXBvcnQgeyBHcmlkQmFzZUFQSVNlcnZpY2UgfSBmcm9tICcuL2FwaS5zZXJ2aWNlJztcbmltcG9ydCB7IElneEdyaWRCYXNlQ29tcG9uZW50LCBJR3JpZERhdGFCaW5kYWJsZSB9IGZyb20gJy4vZ3JpZC1iYXNlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJZ3hDb2x1bW5SZXNpemluZ1NlcnZpY2UgfSBmcm9tICcuL2dyaWQtY29sdW1uLXJlc2l6aW5nLnNlcnZpY2UnO1xuaW1wb3J0IHsgSWd4R3JpZEhlYWRlckNvbXBvbmVudCB9IGZyb20gJy4vZ3JpZC1oZWFkZXIuY29tcG9uZW50JztcbmltcG9ydCB7IElneEdyaWRGaWx0ZXJpbmdDZWxsQ29tcG9uZW50IH0gZnJvbSAnLi9maWx0ZXJpbmcvZ3JpZC1maWx0ZXJpbmctY2VsbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgaXNJRSB9IGZyb20gJy4uL2NvcmUvdXRpbHMnO1xuXG5jb25zdCBaX0lOREVYID0gOTk5OTtcblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbkBDb21wb25lbnQoe1xuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICAgIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICAgIHNlbGVjdG9yOiAnaWd4LWdyaWQtaGVhZGVyLWdyb3VwJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vZ3JpZC1oZWFkZXItZ3JvdXAuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIElneEdyaWRIZWFkZXJHcm91cENvbXBvbmVudCBpbXBsZW1lbnRzIERvQ2hlY2sge1xuXG4gICAgQEhvc3RCaW5kaW5nKCdzdHlsZS4tbXMtZ3JpZC1yb3ctc3BhbicpXG4gICAgZ2V0IGdyaWRSb3dTcGFuKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbHVtbi5ncmlkUm93U3BhbjtcbiAgICB9XG5cbiAgICBASG9zdEJpbmRpbmcoJ3N0eWxlLi1tcy1ncmlkLWNvbHVtbi1zcGFuJylcbiAgICBnZXQgZ3JpZENvbHVtblNwYW4oKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29sdW1uLmdyaWRDb2x1bW5TcGFuO1xuICAgIH1cblxuXG4gICAgQEhvc3RCaW5kaW5nKCdzdHlsZS5ncmlkLXJvdy1lbmQnKVxuICAgIGdldCByb3dFbmQoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29sdW1uLnJvd0VuZDtcbiAgICB9XG5cbiAgICBASG9zdEJpbmRpbmcoJ3N0eWxlLmdyaWQtY29sdW1uLWVuZCcpXG4gICAgZ2V0IGNvbEVuZCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5jb2x1bW4uY29sRW5kO1xuICAgIH1cblxuICAgIEBIb3N0QmluZGluZygnc3R5bGUuLW1zLWdyaWQtcm93JylcbiAgICBASG9zdEJpbmRpbmcoJ3N0eWxlLmdyaWQtcm93LXN0YXJ0JylcbiAgICBnZXQgcm93U3RhcnQoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29sdW1uLnJvd1N0YXJ0O1xuICAgIH1cblxuICAgIEBIb3N0QmluZGluZygnc3R5bGUuLW1zLWdyaWQtY29sdW1uJylcbiAgICBASG9zdEJpbmRpbmcoJ3N0eWxlLmdyaWQtY29sdW1uLXN0YXJ0JylcbiAgICBnZXQgY29sU3RhcnQoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29sdW1uLmNvbFN0YXJ0O1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgY29sdW1uIG9mIHRoZSBoZWFkZXIgZ3JvdXAuXG4gICAgICogQG1lbWJlcm9mIElneEdyaWRIZWFkZXJHcm91cENvbXBvbmVudFxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGNvbHVtbjogSWd4Q29sdW1uQ29tcG9uZW50O1xuXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgYGlkYCBvZiB0aGUgZ3JpZCBpbiB3aGljaCB0aGUgaGVhZGVyIGdyb3VwIGlzIHN0b3JlZC5cbiAgICAgKiBAbWVtYmVyb2YgSWd4R3JpZEhlYWRlckdyb3VwQ29tcG9uZW50XG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZ3JpZElEOiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgQFZpZXdDaGlsZChJZ3hHcmlkSGVhZGVyQ29tcG9uZW50LCB7IHN0YXRpYzogZmFsc2UgfSlcbiAgICBwdWJsaWMgaGVhZGVyQ2VsbDogSWd4R3JpZEhlYWRlckNvbXBvbmVudDtcblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBAVmlld0NoaWxkKElneEdyaWRGaWx0ZXJpbmdDZWxsQ29tcG9uZW50LCB7IHN0YXRpYzogZmFsc2UgfSlcbiAgICBwdWJsaWMgZmlsdGVyQ2VsbDogSWd4R3JpZEZpbHRlcmluZ0NlbGxDb21wb25lbnQ7XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgQFZpZXdDaGlsZHJlbihmb3J3YXJkUmVmKCgpID0+IElneEdyaWRIZWFkZXJHcm91cENvbXBvbmVudCksIHsgcmVhZDogSWd4R3JpZEhlYWRlckdyb3VwQ29tcG9uZW50IH0pXG4gICAgcHVibGljIGNoaWxkcmVuOiBRdWVyeUxpc3Q8SWd4R3JpZEhlYWRlckdyb3VwQ29tcG9uZW50PjtcblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIHdpZHRoIG9mIHRoZSBoZWFkZXIgZ3JvdXAuXG4gICAgICogQG1lbWJlcm9mIElneEdyaWRIZWFkZXJHcm91cENvbXBvbmVudFxuICAgICAqL1xuICAgIEBIb3N0QmluZGluZygnc3R5bGUubWluLXdpZHRoJylcbiAgICBASG9zdEJpbmRpbmcoJ3N0eWxlLmZsZXgtYmFzaXMnKVxuICAgIGdldCB3aWR0aCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ3JpZC5nZXRIZWFkZXJHcm91cFdpZHRoKHRoaXMuY29sdW1uKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBzdHlsZSBjbGFzc2VzIG9mIHRoZSBoZWFkZXIgZ3JvdXAuXG4gICAgICogQG1lbWJlcm9mIElneEdyaWRIZWFkZXJHcm91cENvbXBvbmVudFxuICAgICAqL1xuICAgIEBIb3N0QmluZGluZygnY2xhc3MnKVxuICAgIGdldCBzdHlsZUNsYXNzZXMoKTogc3RyaW5nIHtcbiAgICAgICAgY29uc3QgZGVmYXVsdENsYXNzZXMgPSBbXG4gICAgICAgICAgICAnaWd4LWdyaWRfX3RoZWFkLWl0ZW0nLFxuICAgICAgICAgICAgdGhpcy5jb2x1bW4uaGVhZGVyR3JvdXBDbGFzc2VzXG4gICAgICAgIF07XG5cbiAgICAgICAgY29uc3QgY2xhc3NMaXN0ID0ge1xuICAgICAgICAgICAgJ2lneC1ncmlkX190aC0tcGlubmVkJzogdGhpcy5pc1Bpbm5lZCxcbiAgICAgICAgICAgICdpZ3gtZ3JpZF9fdGgtLXBpbm5lZC1sYXN0JzogdGhpcy5pc0xhc3RQaW5uZWQsXG4gICAgICAgICAgICAnaWd4LWdyaWRfX2RyYWctY29sLWhlYWRlcic6IHRoaXMuaXNIZWFkZXJEcmFnZ2VkLFxuICAgICAgICAgICAgJ2lneC1ncmlkX190aC0tZmlsdGVyaW5nJzogdGhpcy5pc0ZpbHRlcmVkXG4gICAgICAgIH07XG5cbiAgICAgICAgZm9yIChjb25zdCBjbGFzc05hbWUgb2YgT2JqZWN0LmtleXMoY2xhc3NMaXN0KSkge1xuICAgICAgICAgICAgaWYgKGNsYXNzTGlzdFtjbGFzc05hbWVdKSB7XG4gICAgICAgICAgICAgICAgZGVmYXVsdENsYXNzZXMucHVzaChjbGFzc05hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkZWZhdWx0Q2xhc3Nlcy5qb2luKCcgJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIEBIb3N0QmluZGluZygnc3R5bGUuei1pbmRleCcpXG4gICAgZ2V0IHpJbmRleCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmNvbHVtbi5waW5uZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBaX0lOREVYIC0gdGhpcy5ncmlkLnBpbm5lZENvbHVtbnMuaW5kZXhPZih0aGlzLmNvbHVtbik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgZ3JpZCBvZiB0aGUgaGVhZGVyIGdyb3VwLlxuICAgICAqIEBtZW1iZXJvZiBJZ3hHcmlkSGVhZGVyR3JvdXBDb21wb25lbnRcbiAgICAgKi9cbiAgICBnZXQgZ3JpZCgpOiBhbnkge1xuICAgICAgICByZXR1cm4gdGhpcy5ncmlkQVBJLmdyaWQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyB3aGV0aGVyIHRoZSBoZWFkZXIgZ3JvdXAgYmVsb25ncyB0byBhIGNvbHVtbiB0aGF0IGlzIGZpbHRlcmVkLlxuICAgICAqIEBtZW1iZXJvZiBJZ3hHcmlkSGVhZGVyR3JvdXBDb21wb25lbnRcbiAgICAgKi9cbiAgICBnZXQgaXNGaWx0ZXJlZCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZmlsdGVyaW5nU2VydmljZS5maWx0ZXJlZENvbHVtbiA9PT0gdGhpcy5jb2x1bW47XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyB3aGV0aGVyIHRoZSBoZWFkZXIgZ3JvdXAgaXMgc3RvcmVkIGluIHRoZSBsYXN0IGNvbHVtbiBpbiB0aGUgcGlubmVkIGFyZWEuXG4gICAgICogQG1lbWJlcm9mIElneEdyaWRIZWFkZXJHcm91cENvbXBvbmVudFxuICAgICAqL1xuICAgIGdldCBpc0xhc3RQaW5uZWQoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiAhdGhpcy5ncmlkLmhhc0NvbHVtbkxheW91dHMgPyB0aGlzLmNvbHVtbi5pc0xhc3RQaW5uZWQgOiBmYWxzZTtcbiAgICB9XG5cbiAgICBASG9zdEJpbmRpbmcoJ3N0eWxlLmRpc3BsYXknKVxuICAgIGdldCBncm91cERpc3BsYXlTdHlsZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5ncmlkLmhhc0NvbHVtbkxheW91dHMgJiYgdGhpcy5jb2x1bW4uY2hpbGRyZW4gJiYgIWlzSUUoKSA/ICdmbGV4JyA6ICcnO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgd2hldGhlciB0aGUgaGVhZGVyIGdyb3VwIGlzIHN0b3JlZCBpbiBhIHBpbm5lZCBjb2x1bW4uXG4gICAgICogQG1lbWJlcm9mIElneEdyaWRIZWFkZXJHcm91cENvbXBvbmVudFxuICAgICAqL1xuICAgIGdldCBpc1Bpbm5lZCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29sdW1uLnBpbm5lZDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHdoZXRoZXIgdGhlIGhlYWRlciBncm91cCBiZWxvbmdzIHRvIGEgY29sdW1uIHRoYXQgaXMgbW92ZWQuXG4gICAgICogQG1lbWJlcm9mIElneEdyaWRIZWFkZXJHcm91cENvbXBvbmVudFxuICAgICAqL1xuICAgIGdldCBpc0hlYWRlckRyYWdnZWQoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmdyaWQuZHJhZ2dlZENvbHVtbiA9PT0gIHRoaXMuY29sdW1uO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBnZXQgaGFzTGFzdFBpbm5lZENoaWxkQ29sdW1uKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jb2x1bW4uYWxsQ2hpbGRyZW4uc29tZShjaGlsZCA9PiBjaGlsZC5pc0xhc3RQaW5uZWQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBnZXQgaGVpZ2h0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBASG9zdExpc3RlbmVyKCdtb3VzZWRvd24nLCBbJyRldmVudCddKVxuICAgIHB1YmxpYyBvbk1vdXNlRG93bihldmVudCk6IHZvaWQge1xuICAgICAgICAvLyBoYWNrIGZvciBwcmV2ZW50aW5nIHRleHQgc2VsZWN0aW9uIGluIElFIGFuZCBFZGdlIHdoaWxlIGRyYWdnaW5nIHRoZSByZXNpemVyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgcHVibGljIG5nRG9DaGVjaygpIHtcbiAgICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxuICAgICAgICAgICAgICAgIHB1YmxpYyBncmlkQVBJOiBHcmlkQmFzZUFQSVNlcnZpY2U8SWd4R3JpZEJhc2VDb21wb25lbnQgJiBJR3JpZERhdGFCaW5kYWJsZT4sXG4gICAgICAgICAgICAgICAgcHVibGljIGVsZW1lbnQ6IEVsZW1lbnRSZWYsXG4gICAgICAgICAgICAgICAgcHVibGljIGNvbFJlc2l6aW5nU2VydmljZTogSWd4Q29sdW1uUmVzaXppbmdTZXJ2aWNlLFxuICAgICAgICAgICAgICAgIHB1YmxpYyBmaWx0ZXJpbmdTZXJ2aWNlOiBJZ3hGaWx0ZXJpbmdTZXJ2aWNlKSB7IH1cbn1cbiJdfQ==