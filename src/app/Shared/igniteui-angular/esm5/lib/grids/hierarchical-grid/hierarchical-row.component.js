/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component, HostBinding, forwardRef, ElementRef, ChangeDetectorRef, ViewChildren, QueryList, ViewChild } from '@angular/core';
import { IgxRowComponent } from '../row.component';
import { IgxHierarchicalSelectionAPIService } from './selection';
import { GridBaseAPIService } from '.././api.service';
import { IgxHierarchicalGridCellComponent } from './hierarchical-cell.component';
import { IgxGridCRUDService, IgxGridSelectionService } from '../../core/grid-selection';
var IgxHierarchicalRowComponent = /** @class */ (function (_super) {
    tslib_1.__extends(IgxHierarchicalRowComponent, _super);
    function IgxHierarchicalRowComponent(gridAPI, crudService, selectionService, hselection, element, cdr) {
        var _this = _super.call(this, gridAPI, crudService, selectionService, hselection, element, cdr) || this;
        _this.gridAPI = gridAPI;
        _this.crudService = crudService;
        _this.selectionService = selectionService;
        _this.hselection = hselection;
        _this.element = element;
        _this.cdr = cdr;
        /**
         * @hidden
         */
        _this.tabindex = 0;
        return _this;
    }
    Object.defineProperty(IgxHierarchicalRowComponent.prototype, "expanded", {
        /**
     * Returns whether the row is expanded.
     * ```typescript
     * const RowExpanded = this.grid1.rowList.first.expanded;
     * ```
     */
        get: /**
         * Returns whether the row is expanded.
         * ```typescript
         * const RowExpanded = this.grid1.rowList.first.expanded;
         * ```
         * @return {?}
         */
        function () {
            return this.grid.isExpanded(this.rowData);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxHierarchicalRowComponent.prototype, "hasChildren", {
        get: /**
         * @return {?}
         */
        function () {
            return !!this.grid.childLayoutKeys.length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxHierarchicalRowComponent.prototype, "highlighted", {
        /**
         * @hidden
         */
        get: /**
         * @hidden
         * @return {?}
         */
        function () {
            return this.grid && this.grid.highlightedRowID === this.rowID;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Toggles the hierarchical row.
     * ```typescript
     * this.grid1.rowList.first.toggle()
     * ```
     */
    /**
     * Toggles the hierarchical row.
     * ```typescript
     * this.grid1.rowList.first.toggle()
     * ```
     * @return {?}
     */
    IgxHierarchicalRowComponent.prototype.toggle = /**
     * Toggles the hierarchical row.
     * ```typescript
     * this.grid1.rowList.first.toggle()
     * ```
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.added) {
            return;
        }
        /** @type {?} */
        var grid = this.gridAPI.grid;
        /** @type {?} */
        var state = this.gridAPI.grid.hierarchicalState;
        if (!this.expanded) {
            state.push({ rowID: this.rowID });
            grid.hierarchicalState = tslib_1.__spread(state);
        }
        else {
            grid.hierarchicalState = state.filter(function (v) {
                return v.rowID !== _this.rowID;
            });
        }
        grid.cdr.detectChanges();
        requestAnimationFrame(function () {
            grid.reflow();
        });
    };
    IgxHierarchicalRowComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    preserveWhitespaces: false,
                    selector: 'igx-hierarchical-grid-row',
                    template: "<div (click)=\"toggle()\" class=\"igx-grid__hierarchical-expander\" [tabIndex]=\"tabindex\" *ngIf=\"hasChildren\" #expander>\n    <igx-icon *ngIf=\"!expanded\" [isActive]='!added' fontSet=\"material\">expand_more</igx-icon>\n    <igx-icon *ngIf=\"expanded\" [isActive]='!added' fontSet=\"material\">expand_less</igx-icon>\n</div>\n<ng-container *ngIf=\"rowDraggable\">\n    <div [class]=\"resolveDragIndicatorClasses\" [igxRowDrag]=\"this\">\n            <ng-container *ngTemplateOutlet=\"this.grid.dragIndicatorIconTemplate ? this.grid.dragIndicatorIconTemplate : this.grid.dragIndicatorIconBase\"></ng-container>\n    </div>\n</ng-container>\n<ng-container *ngIf=\"rowSelectable\">\n        <div class=\"igx-grid__cbx-selection\">\n            <igx-checkbox [checked]=\"isSelected\" (change)=\"onCheckboxClick($event)\" disableRipple=\"true\" [disableTransitions]=\"grid.disableTransitions\" [aria-label]=\"rowCheckboxAriaLabel\"></igx-checkbox>\n        </div>\n</ng-container>\n\n<ng-container *ngIf=\"pinnedColumns.length > 0\">\n    <igx-hierarchical-grid-cell *ngFor=\"let col of pinnedColumns | igxNotGrouped\"\n        class=\"igx-grid__td igx-grid__td--fw igx-grid__td--pinned\"\n        [class.igx-grid__td--number]=\"col.dataType === 'number'\"\n        [ngClass]=\"col.cellClasses | igxCellStyles:rowData[col.field]:rowData:col.field\"\n        [editMode]=\"col.editable && crudService.isInEditMode(index, col.index)\"\n        [column]=\"col\"\n        [formatter]=\"col.formatter\"\n        [row]=\"this\"\n        [lastPinned]=\"col.isLastPinned\"\n        [style.min-height.px]=\"grid.rowHeight || 32\"\n        [rowData]=\"rowData\"\n        [style.min-width.px]=\"col.width\"\n        [style.flex-basis.px]=\"col.width\"\n        [width]=\"col.getCellWidth()\"\n        [visibleColumnIndex]=\"col.visibleIndex\"\n        [value]=\"rowData[col.field]\"\n        [cellTemplate]=\"col.bodyTemplate\">\n    </igx-hierarchical-grid-cell>\n</ng-container>\n\n<ng-template igxGridFor let-col [igxGridForOf]=\"unpinnedColumns | igxNotGrouped\" [igxForScrollContainer]=\"grid.parentVirtDir\" let-colIndex=\"index\" [igxForSizePropName]='\"calcPixelWidth\"' [igxForScrollOrientation]=\"'horizontal'\" [igxForContainerSize]='grid.unpinnedWidth' [igxForTrackBy]='grid.trackColumnChanges' #igxDirRef>\n    <igx-hierarchical-grid-cell\n        class=\"igx-grid__td igx-grid__td--fw\"\n        [class.igx-grid__td--number]=\"col.dataType === 'number'\"\n        [ngClass]=\"col.cellClasses | igxCellStyles:rowData[col.field]:rowData:col.field\"\n        [editMode]=\"col.editable && crudService.isInEditMode(index, col.index)\"\n        [column]=\"col\"\n        [formatter]=\"col.formatter\"\n        [row]=\"this\"\n        [style.min-height.px]=\"grid.rowHeight || 32\"\n        [rowData]=\"rowData\"\n        [style.min-width.px]=\"col.width\"\n        [style.flex-basis.px]=\"col.width\"\n        [width]=\"col.getCellWidth()\"\n        [visibleColumnIndex]=\"col.visibleIndex\"\n        [value]=\"rowData[col.field]\"\n        [cellTemplate]=\"col.bodyTemplate\">\n    </igx-hierarchical-grid-cell>\n</ng-template>\n\n",
                    providers: [{ provide: IgxRowComponent, useExisting: forwardRef(function () { return IgxHierarchicalRowComponent; }) }]
                }] }
    ];
    /** @nocollapse */
    IgxHierarchicalRowComponent.ctorParameters = function () { return [
        { type: GridBaseAPIService },
        { type: IgxGridCRUDService },
        { type: IgxGridSelectionService },
        { type: IgxHierarchicalSelectionAPIService },
        { type: ElementRef },
        { type: ChangeDetectorRef }
    ]; };
    IgxHierarchicalRowComponent.propDecorators = {
        cells: [{ type: ViewChildren, args: [forwardRef(function () { return IgxHierarchicalGridCellComponent; }), { read: IgxHierarchicalGridCellComponent },] }],
        expander: [{ type: ViewChild, args: ['expander', { read: ElementRef, static: false },] }],
        tabindex: [{ type: HostBinding, args: ['attr.tabindex',] }],
        expanded: [{ type: HostBinding, args: ['class.igx-grid__tr--expanded',] }],
        highlighted: [{ type: HostBinding, args: ['class.igx-grid__tr--highlighted',] }]
    };
    return IgxHierarchicalRowComponent;
}(IgxRowComponent));
export { IgxHierarchicalRowComponent };
if (false) {
    /**
     * The rendered cells in the row component.
     *
     * ```typescript
     * // get the cells of the third selected row
     * let selectedRowCells = this.grid.selectedRows[2].cells;
     * ```
     * @type {?}
     */
    IgxHierarchicalRowComponent.prototype.cells;
    /** @type {?} */
    IgxHierarchicalRowComponent.prototype.expander;
    /**
     * @hidden
     * @type {?}
     */
    IgxHierarchicalRowComponent.prototype.tabindex;
    /** @type {?} */
    IgxHierarchicalRowComponent.prototype.gridAPI;
    /** @type {?} */
    IgxHierarchicalRowComponent.prototype.crudService;
    /** @type {?} */
    IgxHierarchicalRowComponent.prototype.selectionService;
    /**
     * @type {?}
     * @private
     */
    IgxHierarchicalRowComponent.prototype.hselection;
    /** @type {?} */
    IgxHierarchicalRowComponent.prototype.element;
    /** @type {?} */
    IgxHierarchicalRowComponent.prototype.cdr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGllcmFyY2hpY2FsLXJvdy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9pZ25pdGV1aS1hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL2dyaWRzL2hpZXJhcmNoaWNhbC1ncmlkL2hpZXJhcmNoaWNhbC1yb3cuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNILHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsV0FBVyxFQUNYLFVBQVUsRUFDVixVQUFVLEVBQ1YsaUJBQWlCLEVBQ2pCLFlBQVksRUFDWixTQUFTLEVBQ1QsU0FBUyxFQUNaLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNuRCxPQUFPLEVBQUUsa0NBQWtDLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDakUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDdEQsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDakYsT0FBTyxFQUFFLGtCQUFrQixFQUFFLHVCQUF1QixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFFeEY7SUFPaUQsdURBQTZDO0lBc0UxRixxQ0FBbUIsT0FBeUQsRUFDakUsV0FBK0IsRUFDL0IsZ0JBQXlDLEVBQ3hDLFVBQThDLEVBQy9DLE9BQW1CLEVBQ25CLEdBQXNCO1FBTGpDLFlBTVEsa0JBQU0sT0FBTyxFQUFFLFdBQVcsRUFBRSxnQkFBZ0IsRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLEdBQUcsQ0FBQyxTQUMxRTtRQVBjLGFBQU8sR0FBUCxPQUFPLENBQWtEO1FBQ2pFLGlCQUFXLEdBQVgsV0FBVyxDQUFvQjtRQUMvQixzQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQXlCO1FBQ3hDLGdCQUFVLEdBQVYsVUFBVSxDQUFvQztRQUMvQyxhQUFPLEdBQVAsT0FBTyxDQUFZO1FBQ25CLFNBQUcsR0FBSCxHQUFHLENBQW1C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dCB7XG4gICAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gICAgQ29tcG9uZW50LFxuICAgIEhvc3RCaW5kaW5nLFxuICAgIGZvcndhcmRSZWYsXG4gICAgRWxlbWVudFJlZixcbiAgICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBWaWV3Q2hpbGRyZW4sXG4gICAgUXVlcnlMaXN0LFxuICAgIFZpZXdDaGlsZFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElneEhpZXJhcmNoaWNhbEdyaWRDb21wb25lbnQgfSBmcm9tICcuL2hpZXJhcmNoaWNhbC1ncmlkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJZ3hSb3dDb21wb25lbnQgfSBmcm9tICcuLi9yb3cuY29tcG9uZW50JztcbmltcG9ydCB7IElneEhpZXJhcmNoaWNhbFNlbGVjdGlvbkFQSVNlcnZpY2UgfSBmcm9tICcuL3NlbGVjdGlvbic7XG5pbXBvcnQgeyBHcmlkQmFzZUFQSVNlcnZpY2UgfSBmcm9tICcuLi8uL2FwaS5zZXJ2aWNlJztcbmltcG9ydCB7IElneEhpZXJhcmNoaWNhbEdyaWRDZWxsQ29tcG9uZW50IH0gZnJvbSAnLi9oaWVyYXJjaGljYWwtY2VsbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgSWd4R3JpZENSVURTZXJ2aWNlLCBJZ3hHcmlkU2VsZWN0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uL2NvcmUvZ3JpZC1zZWxlY3Rpb24nO1xuXG5AQ29tcG9uZW50KHtcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgICBzZWxlY3RvcjogJ2lneC1oaWVyYXJjaGljYWwtZ3JpZC1yb3cnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9oaWVyYXJjaGljYWwtcm93LmNvbXBvbmVudC5odG1sJyxcbiAgICBwcm92aWRlcnM6IFt7IHByb3ZpZGU6IElneFJvd0NvbXBvbmVudCwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gSWd4SGllcmFyY2hpY2FsUm93Q29tcG9uZW50KSB9XVxufSlcbmV4cG9ydCBjbGFzcyBJZ3hIaWVyYXJjaGljYWxSb3dDb21wb25lbnQgZXh0ZW5kcyBJZ3hSb3dDb21wb25lbnQ8SWd4SGllcmFyY2hpY2FsR3JpZENvbXBvbmVudD4ge1xuICAgIC8qKlxuICAgICAqIFRoZSByZW5kZXJlZCBjZWxscyBpbiB0aGUgcm93IGNvbXBvbmVudC5cbiAgICAgKlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiAvLyBnZXQgdGhlIGNlbGxzIG9mIHRoZSB0aGlyZCBzZWxlY3RlZCByb3dcbiAgICAgKiBsZXQgc2VsZWN0ZWRSb3dDZWxscyA9IHRoaXMuZ3JpZC5zZWxlY3RlZFJvd3NbMl0uY2VsbHM7XG4gICAgICogYGBgXG4gICAgICovXG4gICAgQFZpZXdDaGlsZHJlbihmb3J3YXJkUmVmKCgpID0+IElneEhpZXJhcmNoaWNhbEdyaWRDZWxsQ29tcG9uZW50KSwgeyByZWFkOiBJZ3hIaWVyYXJjaGljYWxHcmlkQ2VsbENvbXBvbmVudCB9KVxuICAgIHB1YmxpYyBjZWxsczogUXVlcnlMaXN0PElneEhpZXJhcmNoaWNhbEdyaWRDZWxsQ29tcG9uZW50PjtcblxuICAgIEBWaWV3Q2hpbGQoJ2V4cGFuZGVyJywgeyByZWFkOiBFbGVtZW50UmVmLCBzdGF0aWM6IGZhbHNlIH0pXG4gICAgcHVibGljIGV4cGFuZGVyOiBFbGVtZW50UmVmO1xuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIEBIb3N0QmluZGluZygnYXR0ci50YWJpbmRleCcpXG4gICAgcHVibGljIHRhYmluZGV4ID0gMDtcblxuICAgICAgICAvKipcbiAgICAgKiBSZXR1cm5zIHdoZXRoZXIgdGhlIHJvdyBpcyBleHBhbmRlZC5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogY29uc3QgUm93RXhwYW5kZWQgPSB0aGlzLmdyaWQxLnJvd0xpc3QuZmlyc3QuZXhwYW5kZWQ7XG4gICAgICogYGBgXG4gICAgICovXG4gICAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pZ3gtZ3JpZF9fdHItLWV4cGFuZGVkJylcbiAgICBwdWJsaWMgZ2V0IGV4cGFuZGVkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ncmlkLmlzRXhwYW5kZWQodGhpcy5yb3dEYXRhKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGhhc0NoaWxkcmVuKCkge1xuICAgICAgICByZXR1cm4gICEhdGhpcy5ncmlkLmNoaWxkTGF5b3V0S2V5cy5sZW5ndGg7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIEBIb3N0QmluZGluZygnY2xhc3MuaWd4LWdyaWRfX3RyLS1oaWdobGlnaHRlZCcpXG4gICAgcHVibGljIGdldCBoaWdobGlnaHRlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ3JpZCAmJiB0aGlzLmdyaWQuaGlnaGxpZ2h0ZWRSb3dJRCA9PT0gdGhpcy5yb3dJRDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUb2dnbGVzIHRoZSBoaWVyYXJjaGljYWwgcm93LlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiB0aGlzLmdyaWQxLnJvd0xpc3QuZmlyc3QudG9nZ2xlKClcbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBwdWJsaWMgdG9nZ2xlKCkge1xuICAgICAgICBpZiAodGhpcy5hZGRlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGdyaWQgPSB0aGlzLmdyaWRBUEkuZ3JpZDtcbiAgICAgICAgY29uc3Qgc3RhdGUgPSB0aGlzLmdyaWRBUEkuZ3JpZC5oaWVyYXJjaGljYWxTdGF0ZTtcbiAgICAgICAgaWYgKCF0aGlzLmV4cGFuZGVkKSB7XG4gICAgICAgICAgICBzdGF0ZS5wdXNoKHsgcm93SUQ6IHRoaXMucm93SUQgfSk7XG4gICAgICAgICAgICBncmlkLmhpZXJhcmNoaWNhbFN0YXRlID0gWy4uLnN0YXRlXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGdyaWQuaGllcmFyY2hpY2FsU3RhdGUgPSBzdGF0ZS5maWx0ZXIodiA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHYucm93SUQgIT09IHRoaXMucm93SUQ7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBncmlkLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgICBncmlkLnJlZmxvdygpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgZ3JpZEFQSTogR3JpZEJhc2VBUElTZXJ2aWNlPElneEhpZXJhcmNoaWNhbEdyaWRDb21wb25lbnQ+LFxuICAgICAgICBwdWJsaWMgY3J1ZFNlcnZpY2U6IElneEdyaWRDUlVEU2VydmljZSxcbiAgICAgICAgcHVibGljIHNlbGVjdGlvblNlcnZpY2U6IElneEdyaWRTZWxlY3Rpb25TZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIGhzZWxlY3Rpb246IElneEhpZXJhcmNoaWNhbFNlbGVjdGlvbkFQSVNlcnZpY2UsXG4gICAgICAgIHB1YmxpYyBlbGVtZW50OiBFbGVtZW50UmVmLFxuICAgICAgICBwdWJsaWMgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZikge1xuICAgICAgICAgICAgc3VwZXIoZ3JpZEFQSSwgY3J1ZFNlcnZpY2UsIHNlbGVjdGlvblNlcnZpY2UsIGhzZWxlY3Rpb24sIGVsZW1lbnQsIGNkcik7XG4gICAgICAgIH1cbn1cbiJdfQ==