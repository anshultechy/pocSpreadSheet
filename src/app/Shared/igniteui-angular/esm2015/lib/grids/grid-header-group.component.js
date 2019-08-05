/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, HostBinding, Input, ViewChild, QueryList, ViewChildren, forwardRef, ChangeDetectionStrategy, ChangeDetectorRef, ElementRef, HostListener } from '@angular/core';
import { IgxColumnComponent } from './column.component';
import { IgxFilteringService } from './filtering/grid-filtering.service';
import { GridBaseAPIService } from './api.service';
import { IgxColumnResizingService } from './grid-column-resizing.service';
import { IgxGridHeaderComponent } from './grid-header.component';
import { IgxGridFilteringCellComponent } from './filtering/grid-filtering-cell.component';
import { isIE } from '../core/utils';
/** @type {?} */
const Z_INDEX = 9999;
/**
 * @hidden
 */
export class IgxGridHeaderGroupComponent {
    /**
     * @param {?} cdr
     * @param {?} gridAPI
     * @param {?} element
     * @param {?} colResizingService
     * @param {?} filteringService
     */
    constructor(cdr, gridAPI, element, colResizingService, filteringService) {
        this.cdr = cdr;
        this.gridAPI = gridAPI;
        this.element = element;
        this.colResizingService = colResizingService;
        this.filteringService = filteringService;
    }
    /**
     * @return {?}
     */
    get gridRowSpan() {
        return this.column.gridRowSpan;
    }
    /**
     * @return {?}
     */
    get gridColumnSpan() {
        return this.column.gridColumnSpan;
    }
    /**
     * @return {?}
     */
    get rowEnd() {
        return this.column.rowEnd;
    }
    /**
     * @return {?}
     */
    get colEnd() {
        return this.column.colEnd;
    }
    /**
     * @return {?}
     */
    get rowStart() {
        return this.column.rowStart;
    }
    /**
     * @return {?}
     */
    get colStart() {
        return this.column.colStart;
    }
    /**
     * Gets the width of the header group.
     * \@memberof IgxGridHeaderGroupComponent
     * @return {?}
     */
    get width() {
        return this.grid.getHeaderGroupWidth(this.column);
    }
    /**
     * Gets the style classes of the header group.
     * \@memberof IgxGridHeaderGroupComponent
     * @return {?}
     */
    get styleClasses() {
        /** @type {?} */
        const defaultClasses = [
            'igx-grid__thead-item',
            this.column.headerGroupClasses
        ];
        /** @type {?} */
        const classList = {
            'igx-grid__th--pinned': this.isPinned,
            'igx-grid__th--pinned-last': this.isLastPinned,
            'igx-grid__drag-col-header': this.isHeaderDragged,
            'igx-grid__th--filtering': this.isFiltered
        };
        for (const className of Object.keys(classList)) {
            if (classList[className]) {
                defaultClasses.push(className);
            }
        }
        return defaultClasses.join(' ');
    }
    /**
     * @hidden
     * @return {?}
     */
    get zIndex() {
        if (!this.column.pinned) {
            return null;
        }
        return Z_INDEX - this.grid.pinnedColumns.indexOf(this.column);
    }
    /**
     * Gets the grid of the header group.
     * \@memberof IgxGridHeaderGroupComponent
     * @return {?}
     */
    get grid() {
        return this.gridAPI.grid;
    }
    /**
     * Gets whether the header group belongs to a column that is filtered.
     * \@memberof IgxGridHeaderGroupComponent
     * @return {?}
     */
    get isFiltered() {
        return this.filteringService.filteredColumn === this.column;
    }
    /**
     * Gets whether the header group is stored in the last column in the pinned area.
     * \@memberof IgxGridHeaderGroupComponent
     * @return {?}
     */
    get isLastPinned() {
        return !this.grid.hasColumnLayouts ? this.column.isLastPinned : false;
    }
    /**
     * @return {?}
     */
    get groupDisplayStyle() {
        return this.grid.hasColumnLayouts && this.column.children && !isIE() ? 'flex' : '';
    }
    /**
     * Gets whether the header group is stored in a pinned column.
     * \@memberof IgxGridHeaderGroupComponent
     * @return {?}
     */
    get isPinned() {
        return this.column.pinned;
    }
    /**
     * Gets whether the header group belongs to a column that is moved.
     * \@memberof IgxGridHeaderGroupComponent
     * @return {?}
     */
    get isHeaderDragged() {
        return this.grid.draggedColumn === this.column;
    }
    /**
     * @hidden
     * @return {?}
     */
    get hasLastPinnedChildColumn() {
        return this.column.allChildren.some(child => child.isLastPinned);
    }
    /**
     * @hidden
     * @return {?}
     */
    get height() {
        return this.element.nativeElement.getBoundingClientRect().height;
    }
    /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    onMouseDown(event) {
        // hack for preventing text selection in IE and Edge while dragging the resizer
        event.preventDefault();
    }
    /**
     * @return {?}
     */
    ngDoCheck() {
        this.cdr.markForCheck();
    }
}
IgxGridHeaderGroupComponent.decorators = [
    { type: Component, args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                preserveWhitespaces: false,
                selector: 'igx-grid-header-group',
                template: "<ng-container *ngIf=\"grid.hasColumnLayouts && column.columnGroup\">\n    <span *ngIf=\"grid.hasMovableColumns\" class=\"igx-grid__th-drop-indicator-left\"></span>\n    <div class=\"igx-grid__thead-group igx-grid__mrl-block\"\n     [ngClass]=\"{'igx-grid__th--pinned-last': hasLastPinnedChildColumn}\"\n     [ngStyle]=\"{'grid-template-rows':column.getGridTemplate(true, false),\n     'grid-template-columns':column.getGridTemplate(false, false),\n     '-ms-grid-rows':column.getGridTemplate(true, true),\n     '-ms-grid-columns':column.getGridTemplate(false, true)}\">\n        <ng-container *ngFor=\"let child of column.children\" >\n            <igx-grid-header-group *ngIf=\"!child.hidden\" class=\"igx-grid__thead-subgroup\"\n                [column]=\"child\"\n                [gridID]=\"child.gridID\"\n                [igxColumnMovingDrag]=\"child\"\n                [dragGhostHost]=\"grid.outletDirective.nativeElement\"\n                [attr.droppable]=\"true\"\n                [igxColumnMovingDrop]=\"child\">\n            </igx-grid-header-group>\n        </ng-container>\n    </div>\n    <span *ngIf=\"grid.hasMovableColumns\" class=\"igx-grid__th-drop-indicator-right\"></span>\n</ng-container>\n\n<ng-template #defaultColumn>{{column.header}}</ng-template>\n\n<ng-container *ngIf=\"!grid.hasColumnLayouts && column.columnGroup\">\n    <span *ngIf=\"grid.hasMovableColumns\" class=\"igx-grid__th-drop-indicator-left\"></span>\n    <div class=\"igx-grid__thead-title\"\n        [ngClass]=\"{'igx-grid__th--pinned-last': hasLastPinnedChildColumn}\"\n        [igxColumnMovingDrag]=\"column\"\n        [dragGhostHost]=\"grid.outletDirective.nativeElement\"\n        [attr.droppable]=\"true\"\n        [igxColumnMovingDrop]=\"column\">\n        <ng-container *ngTemplateOutlet=\"column.headerTemplate ? column.headerTemplate : defaultColumn; context: { $implicit: column, column: column}\">\n        </ng-container>\n    </div>\n    <div class=\"igx-grid__thead-group\">\n        <ng-container *ngFor=\"let child of column.children\">\n            <igx-grid-header-group *ngIf=\"!child.hidden\" class=\"igx-grid__thead-subgroup\"\n                                [column]=\"child\"\n                                [gridID]=\"child.grid.id\"\n                                [style.min-width.px]=\"grid.getHeaderGroupWidth(child)\"\n                                [style.flex-basis.px]=\"grid.getHeaderGroupWidth(child)\">\n            </igx-grid-header-group>\n        </ng-container>\n    </div>\n    <span *ngIf=\"grid.hasMovableColumns\" class=\"igx-grid__th-drop-indicator-right\"></span>\n</ng-container>\n\n<ng-container *ngIf=\"!column.columnGroup\">\n    <span *ngIf=\"grid.hasMovableColumns\" class=\"igx-grid__th-drop-indicator-left\"></span>\n    <igx-grid-header [igxColumnMovingDrag]=\"column\" [dragGhostHost]=\"grid.outletDirective.nativeElement\" [attr.droppable]=\"true\" [igxColumnMovingDrop]=\"column\" [gridID]=\"column.grid.id\" [column]=\"column\"></igx-grid-header>\n    <igx-grid-filtering-cell *ngIf=\"grid.allowFiltering && grid.filterMode == 'quickFilter'\" [column]=\"column\" [attr.draggable]=\"false\"></igx-grid-filtering-cell>\n    <span *ngIf=\"!column.columnGroup && column.resizable\" class=\"igx-grid__th-resize-handle\"\n          [igxResizeHandle]=\"column\"\n          [attr.draggable]=\"false\"\n          [style.cursor]=\"colResizingService.resizeCursor\">\n    </span>\n    <span *ngIf=\"grid.hasMovableColumns\" class=\"igx-grid__th-drop-indicator-right\"></span>\n</ng-container>\n"
            }] }
];
/** @nocollapse */
IgxGridHeaderGroupComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: GridBaseAPIService },
    { type: ElementRef },
    { type: IgxColumnResizingService },
    { type: IgxFilteringService }
];
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
    children: [{ type: ViewChildren, args: [forwardRef(() => IgxGridHeaderGroupComponent), { read: IgxGridHeaderGroupComponent },] }],
    width: [{ type: HostBinding, args: ['style.min-width',] }, { type: HostBinding, args: ['style.flex-basis',] }],
    styleClasses: [{ type: HostBinding, args: ['class',] }],
    zIndex: [{ type: HostBinding, args: ['style.z-index',] }],
    groupDisplayStyle: [{ type: HostBinding, args: ['style.display',] }],
    onMouseDown: [{ type: HostListener, args: ['mousedown', ['$event'],] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC1oZWFkZXItZ3JvdXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vaWduaXRldWktYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9ncmlkcy9ncmlkLWhlYWRlci1ncm91cC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDSCxTQUFTLEVBQ1QsV0FBVyxFQUNYLEtBQUssRUFDTCxTQUFTLEVBQ1QsU0FBUyxFQUNULFlBQVksRUFDWixVQUFVLEVBQ1YsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUVqQixVQUFVLEVBQ1YsWUFBWSxFQUNmLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVuRCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUMxRSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNqRSxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUMxRixPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sZUFBZSxDQUFDOztNQUUvQixPQUFPLEdBQUcsSUFBSTs7OztBQVdwQixNQUFNLE9BQU8sMkJBQTJCOzs7Ozs7OztJQTJMcEMsWUFBb0IsR0FBc0IsRUFDdkIsT0FBcUUsRUFDckUsT0FBbUIsRUFDbkIsa0JBQTRDLEVBQzVDLGdCQUFxQztRQUpwQyxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUN2QixZQUFPLEdBQVAsT0FBTyxDQUE4RDtRQUNyRSxZQUFPLEdBQVAsT0FBTyxDQUFZO1FBQ25CLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBMEI7UUFDNUMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFxQjtJQUFJ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QkFBMkIsQ0FBQyxFQUFFLEVBQUUsSUFBSSxFQUFFLDJCQUEyQixFQUFFO29CQU9qRyxXQUFXLFNBQUMsaUJBQWlCLGNBQzdCLFdBQVcsU0FBQyxrQkFBa0I7MkJBUzlCLFdBQVcsU0FBQyxPQUFPO3FCQXlCbkIsV0FBVyxTQUFDLGVBQWU7Z0NBZ0MzQixXQUFXLFNBQUMsZUFBZTswQkFzQzNCLFlBQVksU0FBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUM7Ozs7Ozs7O0lBeklyQyw2Q0FDa0M7Ozs7OztJQU1sQyw2Q0FDc0I7Ozs7O0lBS3RCLGlEQUMwQzs7Ozs7SUFLMUMsaURBQ2lEOzs7OztJQUtqRCwrQ0FDd0Q7Ozs7O0lBeUg1QywwQ0FBOEI7O0lBQzlCLDhDQUE0RTs7SUFDNUUsOENBQTBCOztJQUMxQix5REFBbUQ7O0lBQ25ELHVEQUE0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICAgQ29tcG9uZW50LFxuICAgIEhvc3RCaW5kaW5nLFxuICAgIElucHV0LFxuICAgIFZpZXdDaGlsZCxcbiAgICBRdWVyeUxpc3QsXG4gICAgVmlld0NoaWxkcmVuLFxuICAgIGZvcndhcmRSZWYsXG4gICAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gICAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgRG9DaGVjayxcbiAgICBFbGVtZW50UmVmLFxuICAgIEhvc3RMaXN0ZW5lclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElneENvbHVtbkNvbXBvbmVudCB9IGZyb20gJy4vY29sdW1uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJZ3hGaWx0ZXJpbmdTZXJ2aWNlIH0gZnJvbSAnLi9maWx0ZXJpbmcvZ3JpZC1maWx0ZXJpbmcuc2VydmljZSc7XG5pbXBvcnQgeyBHcmlkQmFzZUFQSVNlcnZpY2UgfSBmcm9tICcuL2FwaS5zZXJ2aWNlJztcbmltcG9ydCB7IElneEdyaWRCYXNlQ29tcG9uZW50LCBJR3JpZERhdGFCaW5kYWJsZSB9IGZyb20gJy4vZ3JpZC1iYXNlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJZ3hDb2x1bW5SZXNpemluZ1NlcnZpY2UgfSBmcm9tICcuL2dyaWQtY29sdW1uLXJlc2l6aW5nLnNlcnZpY2UnO1xuaW1wb3J0IHsgSWd4R3JpZEhlYWRlckNvbXBvbmVudCB9IGZyb20gJy4vZ3JpZC1oZWFkZXIuY29tcG9uZW50JztcbmltcG9ydCB7IElneEdyaWRGaWx0ZXJpbmdDZWxsQ29tcG9uZW50IH0gZnJvbSAnLi9maWx0ZXJpbmcvZ3JpZC1maWx0ZXJpbmctY2VsbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgaXNJRSB9IGZyb20gJy4uL2NvcmUvdXRpbHMnO1xuXG5jb25zdCBaX0lOREVYID0gOTk5OTtcblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbkBDb21wb25lbnQoe1xuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICAgIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICAgIHNlbGVjdG9yOiAnaWd4LWdyaWQtaGVhZGVyLWdyb3VwJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vZ3JpZC1oZWFkZXItZ3JvdXAuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIElneEdyaWRIZWFkZXJHcm91cENvbXBvbmVudCBpbXBsZW1lbnRzIERvQ2hlY2sge1xuXG4gICAgQEhvc3RCaW5kaW5nKCdzdHlsZS4tbXMtZ3JpZC1yb3ctc3BhbicpXG4gICAgZ2V0IGdyaWRSb3dTcGFuKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbHVtbi5ncmlkUm93U3BhbjtcbiAgICB9XG5cbiAgICBASG9zdEJpbmRpbmcoJ3N0eWxlLi1tcy1ncmlkLWNvbHVtbi1zcGFuJylcbiAgICBnZXQgZ3JpZENvbHVtblNwYW4oKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29sdW1uLmdyaWRDb2x1bW5TcGFuO1xuICAgIH1cblxuXG4gICAgQEhvc3RCaW5kaW5nKCdzdHlsZS5ncmlkLXJvdy1lbmQnKVxuICAgIGdldCByb3dFbmQoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29sdW1uLnJvd0VuZDtcbiAgICB9XG5cbiAgICBASG9zdEJpbmRpbmcoJ3N0eWxlLmdyaWQtY29sdW1uLWVuZCcpXG4gICAgZ2V0IGNvbEVuZCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5jb2x1bW4uY29sRW5kO1xuICAgIH1cblxuICAgIEBIb3N0QmluZGluZygnc3R5bGUuLW1zLWdyaWQtcm93JylcbiAgICBASG9zdEJpbmRpbmcoJ3N0eWxlLmdyaWQtcm93LXN0YXJ0JylcbiAgICBnZXQgcm93U3RhcnQoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29sdW1uLnJvd1N0YXJ0O1xuICAgIH1cblxuICAgIEBIb3N0QmluZGluZygnc3R5bGUuLW1zLWdyaWQtY29sdW1uJylcbiAgICBASG9zdEJpbmRpbmcoJ3N0eWxlLmdyaWQtY29sdW1uLXN0YXJ0JylcbiAgICBnZXQgY29sU3RhcnQoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29sdW1uLmNvbFN0YXJ0O1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgY29sdW1uIG9mIHRoZSBoZWFkZXIgZ3JvdXAuXG4gICAgICogQG1lbWJlcm9mIElneEdyaWRIZWFkZXJHcm91cENvbXBvbmVudFxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGNvbHVtbjogSWd4Q29sdW1uQ29tcG9uZW50O1xuXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgYGlkYCBvZiB0aGUgZ3JpZCBpbiB3aGljaCB0aGUgaGVhZGVyIGdyb3VwIGlzIHN0b3JlZC5cbiAgICAgKiBAbWVtYmVyb2YgSWd4R3JpZEhlYWRlckdyb3VwQ29tcG9uZW50XG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZ3JpZElEOiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgQFZpZXdDaGlsZChJZ3hHcmlkSGVhZGVyQ29tcG9uZW50LCB7IHN0YXRpYzogZmFsc2UgfSlcbiAgICBwdWJsaWMgaGVhZGVyQ2VsbDogSWd4R3JpZEhlYWRlckNvbXBvbmVudDtcblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBAVmlld0NoaWxkKElneEdyaWRGaWx0ZXJpbmdDZWxsQ29tcG9uZW50LCB7IHN0YXRpYzogZmFsc2UgfSlcbiAgICBwdWJsaWMgZmlsdGVyQ2VsbDogSWd4R3JpZEZpbHRlcmluZ0NlbGxDb21wb25lbnQ7XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgQFZpZXdDaGlsZHJlbihmb3J3YXJkUmVmKCgpID0+IElneEdyaWRIZWFkZXJHcm91cENvbXBvbmVudCksIHsgcmVhZDogSWd4R3JpZEhlYWRlckdyb3VwQ29tcG9uZW50IH0pXG4gICAgcHVibGljIGNoaWxkcmVuOiBRdWVyeUxpc3Q8SWd4R3JpZEhlYWRlckdyb3VwQ29tcG9uZW50PjtcblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIHdpZHRoIG9mIHRoZSBoZWFkZXIgZ3JvdXAuXG4gICAgICogQG1lbWJlcm9mIElneEdyaWRIZWFkZXJHcm91cENvbXBvbmVudFxuICAgICAqL1xuICAgIEBIb3N0QmluZGluZygnc3R5bGUubWluLXdpZHRoJylcbiAgICBASG9zdEJpbmRpbmcoJ3N0eWxlLmZsZXgtYmFzaXMnKVxuICAgIGdldCB3aWR0aCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ3JpZC5nZXRIZWFkZXJHcm91cFdpZHRoKHRoaXMuY29sdW1uKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBzdHlsZSBjbGFzc2VzIG9mIHRoZSBoZWFkZXIgZ3JvdXAuXG4gICAgICogQG1lbWJlcm9mIElneEdyaWRIZWFkZXJHcm91cENvbXBvbmVudFxuICAgICAqL1xuICAgIEBIb3N0QmluZGluZygnY2xhc3MnKVxuICAgIGdldCBzdHlsZUNsYXNzZXMoKTogc3RyaW5nIHtcbiAgICAgICAgY29uc3QgZGVmYXVsdENsYXNzZXMgPSBbXG4gICAgICAgICAgICAnaWd4LWdyaWRfX3RoZWFkLWl0ZW0nLFxuICAgICAgICAgICAgdGhpcy5jb2x1bW4uaGVhZGVyR3JvdXBDbGFzc2VzXG4gICAgICAgIF07XG5cbiAgICAgICAgY29uc3QgY2xhc3NMaXN0ID0ge1xuICAgICAgICAgICAgJ2lneC1ncmlkX190aC0tcGlubmVkJzogdGhpcy5pc1Bpbm5lZCxcbiAgICAgICAgICAgICdpZ3gtZ3JpZF9fdGgtLXBpbm5lZC1sYXN0JzogdGhpcy5pc0xhc3RQaW5uZWQsXG4gICAgICAgICAgICAnaWd4LWdyaWRfX2RyYWctY29sLWhlYWRlcic6IHRoaXMuaXNIZWFkZXJEcmFnZ2VkLFxuICAgICAgICAgICAgJ2lneC1ncmlkX190aC0tZmlsdGVyaW5nJzogdGhpcy5pc0ZpbHRlcmVkXG4gICAgICAgIH07XG5cbiAgICAgICAgZm9yIChjb25zdCBjbGFzc05hbWUgb2YgT2JqZWN0LmtleXMoY2xhc3NMaXN0KSkge1xuICAgICAgICAgICAgaWYgKGNsYXNzTGlzdFtjbGFzc05hbWVdKSB7XG4gICAgICAgICAgICAgICAgZGVmYXVsdENsYXNzZXMucHVzaChjbGFzc05hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkZWZhdWx0Q2xhc3Nlcy5qb2luKCcgJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIEBIb3N0QmluZGluZygnc3R5bGUuei1pbmRleCcpXG4gICAgZ2V0IHpJbmRleCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmNvbHVtbi5waW5uZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBaX0lOREVYIC0gdGhpcy5ncmlkLnBpbm5lZENvbHVtbnMuaW5kZXhPZih0aGlzLmNvbHVtbik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgZ3JpZCBvZiB0aGUgaGVhZGVyIGdyb3VwLlxuICAgICAqIEBtZW1iZXJvZiBJZ3hHcmlkSGVhZGVyR3JvdXBDb21wb25lbnRcbiAgICAgKi9cbiAgICBnZXQgZ3JpZCgpOiBhbnkge1xuICAgICAgICByZXR1cm4gdGhpcy5ncmlkQVBJLmdyaWQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyB3aGV0aGVyIHRoZSBoZWFkZXIgZ3JvdXAgYmVsb25ncyB0byBhIGNvbHVtbiB0aGF0IGlzIGZpbHRlcmVkLlxuICAgICAqIEBtZW1iZXJvZiBJZ3hHcmlkSGVhZGVyR3JvdXBDb21wb25lbnRcbiAgICAgKi9cbiAgICBnZXQgaXNGaWx0ZXJlZCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZmlsdGVyaW5nU2VydmljZS5maWx0ZXJlZENvbHVtbiA9PT0gdGhpcy5jb2x1bW47XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyB3aGV0aGVyIHRoZSBoZWFkZXIgZ3JvdXAgaXMgc3RvcmVkIGluIHRoZSBsYXN0IGNvbHVtbiBpbiB0aGUgcGlubmVkIGFyZWEuXG4gICAgICogQG1lbWJlcm9mIElneEdyaWRIZWFkZXJHcm91cENvbXBvbmVudFxuICAgICAqL1xuICAgIGdldCBpc0xhc3RQaW5uZWQoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiAhdGhpcy5ncmlkLmhhc0NvbHVtbkxheW91dHMgPyB0aGlzLmNvbHVtbi5pc0xhc3RQaW5uZWQgOiBmYWxzZTtcbiAgICB9XG5cbiAgICBASG9zdEJpbmRpbmcoJ3N0eWxlLmRpc3BsYXknKVxuICAgIGdldCBncm91cERpc3BsYXlTdHlsZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5ncmlkLmhhc0NvbHVtbkxheW91dHMgJiYgdGhpcy5jb2x1bW4uY2hpbGRyZW4gJiYgIWlzSUUoKSA/ICdmbGV4JyA6ICcnO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgd2hldGhlciB0aGUgaGVhZGVyIGdyb3VwIGlzIHN0b3JlZCBpbiBhIHBpbm5lZCBjb2x1bW4uXG4gICAgICogQG1lbWJlcm9mIElneEdyaWRIZWFkZXJHcm91cENvbXBvbmVudFxuICAgICAqL1xuICAgIGdldCBpc1Bpbm5lZCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29sdW1uLnBpbm5lZDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHdoZXRoZXIgdGhlIGhlYWRlciBncm91cCBiZWxvbmdzIHRvIGEgY29sdW1uIHRoYXQgaXMgbW92ZWQuXG4gICAgICogQG1lbWJlcm9mIElneEdyaWRIZWFkZXJHcm91cENvbXBvbmVudFxuICAgICAqL1xuICAgIGdldCBpc0hlYWRlckRyYWdnZWQoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmdyaWQuZHJhZ2dlZENvbHVtbiA9PT0gIHRoaXMuY29sdW1uO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBnZXQgaGFzTGFzdFBpbm5lZENoaWxkQ29sdW1uKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jb2x1bW4uYWxsQ2hpbGRyZW4uc29tZShjaGlsZCA9PiBjaGlsZC5pc0xhc3RQaW5uZWQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBnZXQgaGVpZ2h0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBASG9zdExpc3RlbmVyKCdtb3VzZWRvd24nLCBbJyRldmVudCddKVxuICAgIHB1YmxpYyBvbk1vdXNlRG93bihldmVudCk6IHZvaWQge1xuICAgICAgICAvLyBoYWNrIGZvciBwcmV2ZW50aW5nIHRleHQgc2VsZWN0aW9uIGluIElFIGFuZCBFZGdlIHdoaWxlIGRyYWdnaW5nIHRoZSByZXNpemVyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgcHVibGljIG5nRG9DaGVjaygpIHtcbiAgICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxuICAgICAgICAgICAgICAgIHB1YmxpYyBncmlkQVBJOiBHcmlkQmFzZUFQSVNlcnZpY2U8SWd4R3JpZEJhc2VDb21wb25lbnQgJiBJR3JpZERhdGFCaW5kYWJsZT4sXG4gICAgICAgICAgICAgICAgcHVibGljIGVsZW1lbnQ6IEVsZW1lbnRSZWYsXG4gICAgICAgICAgICAgICAgcHVibGljIGNvbFJlc2l6aW5nU2VydmljZTogSWd4Q29sdW1uUmVzaXppbmdTZXJ2aWNlLFxuICAgICAgICAgICAgICAgIHB1YmxpYyBmaWx0ZXJpbmdTZXJ2aWNlOiBJZ3hGaWx0ZXJpbmdTZXJ2aWNlKSB7IH1cbn1cbiJdfQ==