/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, HostBinding, forwardRef, ElementRef, ChangeDetectorRef, ViewChildren, QueryList, ViewChild } from '@angular/core';
import { IgxRowComponent } from '../row.component';
import { IgxHierarchicalSelectionAPIService } from './selection';
import { GridBaseAPIService } from '.././api.service';
import { IgxHierarchicalGridCellComponent } from './hierarchical-cell.component';
import { IgxGridCRUDService, IgxGridSelectionService } from '../../core/grid-selection';
export class IgxHierarchicalRowComponent extends IgxRowComponent {
    /**
     * @param {?} gridAPI
     * @param {?} crudService
     * @param {?} selectionService
     * @param {?} hselection
     * @param {?} element
     * @param {?} cdr
     */
    constructor(gridAPI, crudService, selectionService, hselection, element, cdr) {
        super(gridAPI, crudService, selectionService, hselection, element, cdr);
        this.gridAPI = gridAPI;
        this.crudService = crudService;
        this.selectionService = selectionService;
        this.hselection = hselection;
        this.element = element;
        this.cdr = cdr;
        /**
         * @hidden
         */
        this.tabindex = 0;
    }
    /**
     * Returns whether the row is expanded.
     * ```typescript
     * const RowExpanded = this.grid1.rowList.first.expanded;
     * ```
     * @return {?}
     */
    get expanded() {
        return this.grid.isExpanded(this.rowData);
    }
    /**
     * @return {?}
     */
    get hasChildren() {
        return !!this.grid.childLayoutKeys.length;
    }
    /**
     * @hidden
     * @return {?}
     */
    get highlighted() {
        return this.grid && this.grid.highlightedRowID === this.rowID;
    }
    /**
     * Toggles the hierarchical row.
     * ```typescript
     * this.grid1.rowList.first.toggle()
     * ```
     * @return {?}
     */
    toggle() {
        if (this.added) {
            return;
        }
        /** @type {?} */
        const grid = this.gridAPI.grid;
        /** @type {?} */
        const state = this.gridAPI.grid.hierarchicalState;
        if (!this.expanded) {
            state.push({ rowID: this.rowID });
            grid.hierarchicalState = [...state];
        }
        else {
            grid.hierarchicalState = state.filter(v => {
                return v.rowID !== this.rowID;
            });
        }
        grid.cdr.detectChanges();
        requestAnimationFrame(() => {
            grid.reflow();
        });
    }
}
IgxHierarchicalRowComponent.decorators = [
    { type: Component, args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                preserveWhitespaces: false,
                selector: 'igx-hierarchical-grid-row',
                template: "<div (click)=\"toggle()\" class=\"igx-grid__hierarchical-expander\" [tabIndex]=\"tabindex\" *ngIf=\"hasChildren\" #expander>\n    <igx-icon *ngIf=\"!expanded\" [isActive]='!added' fontSet=\"material\">expand_more</igx-icon>\n    <igx-icon *ngIf=\"expanded\" [isActive]='!added' fontSet=\"material\">expand_less</igx-icon>\n</div>\n<ng-container *ngIf=\"rowDraggable\">\n    <div [class]=\"resolveDragIndicatorClasses\" [igxRowDrag]=\"this\">\n            <ng-container *ngTemplateOutlet=\"this.grid.dragIndicatorIconTemplate ? this.grid.dragIndicatorIconTemplate : this.grid.dragIndicatorIconBase\"></ng-container>\n    </div>\n</ng-container>\n<ng-container *ngIf=\"rowSelectable\">\n        <div class=\"igx-grid__cbx-selection\">\n            <igx-checkbox [checked]=\"isSelected\" (change)=\"onCheckboxClick($event)\" disableRipple=\"true\" [disableTransitions]=\"grid.disableTransitions\" [aria-label]=\"rowCheckboxAriaLabel\"></igx-checkbox>\n        </div>\n</ng-container>\n\n<ng-container *ngIf=\"pinnedColumns.length > 0\">\n    <igx-hierarchical-grid-cell *ngFor=\"let col of pinnedColumns | igxNotGrouped\"\n        class=\"igx-grid__td igx-grid__td--fw igx-grid__td--pinned\"\n        [class.igx-grid__td--number]=\"col.dataType === 'number'\"\n        [ngClass]=\"col.cellClasses | igxCellStyles:rowData[col.field]:rowData:col.field\"\n        [editMode]=\"col.editable && crudService.isInEditMode(index, col.index)\"\n        [column]=\"col\"\n        [formatter]=\"col.formatter\"\n        [row]=\"this\"\n        [lastPinned]=\"col.isLastPinned\"\n        [style.min-height.px]=\"grid.rowHeight || 32\"\n        [rowData]=\"rowData\"\n        [style.min-width.px]=\"col.width\"\n        [style.flex-basis.px]=\"col.width\"\n        [width]=\"col.getCellWidth()\"\n        [visibleColumnIndex]=\"col.visibleIndex\"\n        [value]=\"rowData[col.field]\"\n        [cellTemplate]=\"col.bodyTemplate\">\n    </igx-hierarchical-grid-cell>\n</ng-container>\n\n<ng-template igxGridFor let-col [igxGridForOf]=\"unpinnedColumns | igxNotGrouped\" [igxForScrollContainer]=\"grid.parentVirtDir\" let-colIndex=\"index\" [igxForSizePropName]='\"calcPixelWidth\"' [igxForScrollOrientation]=\"'horizontal'\" [igxForContainerSize]='grid.unpinnedWidth' [igxForTrackBy]='grid.trackColumnChanges' #igxDirRef>\n    <igx-hierarchical-grid-cell\n        class=\"igx-grid__td igx-grid__td--fw\"\n        [class.igx-grid__td--number]=\"col.dataType === 'number'\"\n        [ngClass]=\"col.cellClasses | igxCellStyles:rowData[col.field]:rowData:col.field\"\n        [editMode]=\"col.editable && crudService.isInEditMode(index, col.index)\"\n        [column]=\"col\"\n        [formatter]=\"col.formatter\"\n        [row]=\"this\"\n        [style.min-height.px]=\"grid.rowHeight || 32\"\n        [rowData]=\"rowData\"\n        [style.min-width.px]=\"col.width\"\n        [style.flex-basis.px]=\"col.width\"\n        [width]=\"col.getCellWidth()\"\n        [visibleColumnIndex]=\"col.visibleIndex\"\n        [value]=\"rowData[col.field]\"\n        [cellTemplate]=\"col.bodyTemplate\">\n    </igx-hierarchical-grid-cell>\n</ng-template>\n\n",
                providers: [{ provide: IgxRowComponent, useExisting: forwardRef(() => IgxHierarchicalRowComponent) }]
            }] }
];
/** @nocollapse */
IgxHierarchicalRowComponent.ctorParameters = () => [
    { type: GridBaseAPIService },
    { type: IgxGridCRUDService },
    { type: IgxGridSelectionService },
    { type: IgxHierarchicalSelectionAPIService },
    { type: ElementRef },
    { type: ChangeDetectorRef }
];
IgxHierarchicalRowComponent.propDecorators = {
    cells: [{ type: ViewChildren, args: [forwardRef(() => IgxHierarchicalGridCellComponent), { read: IgxHierarchicalGridCellComponent },] }],
    expander: [{ type: ViewChild, args: ['expander', { read: ElementRef, static: false },] }],
    tabindex: [{ type: HostBinding, args: ['attr.tabindex',] }],
    expanded: [{ type: HostBinding, args: ['class.igx-grid__tr--expanded',] }],
    highlighted: [{ type: HostBinding, args: ['class.igx-grid__tr--highlighted',] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGllcmFyY2hpY2FsLXJvdy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9pZ25pdGV1aS1hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL2dyaWRzL2hpZXJhcmNoaWNhbC1ncmlkL2hpZXJhcmNoaWNhbC1yb3cuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0gsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxXQUFXLEVBQ1gsVUFBVSxFQUNWLFVBQVUsRUFDVixpQkFBaUIsRUFDakIsWUFBWSxFQUNaLFNBQVMsRUFDVCxTQUFTLEVBQ1osTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxrQ0FBa0MsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUNqRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUNqRixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQVN4RixNQUFNLE9BQU8sMkJBQTRCLFNBQVEsZUFBNkM7Ozs7Ozs7OztJQXNFMUYsWUFBbUIsT0FBeUQsRUFDakUsV0FBK0IsRUFDL0IsZ0JBQXlDLEVBQ3hDLFVBQThDLEVBQy9DLE9BQW1CLEVBQ25CLEdBQXNCO1FBQ3pCLEtBQUssQ0FBQyxPQUFPLEVBQUUsV0FBVyxFQUFFLGdCQUFnQixFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFON0QsWUFBTyxHQUFQLE9BQU8sQ0FBa0Q7UUFDakUsZ0JBQVcsR0FBWCxXQUFXLENBQW9CO1FBQy9CLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBeUI7UUFDeEMsZUFBVSxHQUFWLFVBQVUsQ0FBb0M7UUFDL0MsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQUNuQixRQUFHLEdBQUgsR0FBRyxDQUFtQjs7OztRQXhEMUIsYUFBUSxHQUFHLENBQUMsQ0FBQztJQTBEaEIsQ0FBQzs7Ozs7Ozs7SUFsREwsSUFDVyxRQUFRO1FBQ2YsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDOUMsQ0FBQzs7OztJQUVELElBQVcsV0FBVztRQUNsQixPQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUM7SUFDL0MsQ0FBQzs7Ozs7SUFLRCxJQUNXLFdBQVc7UUFDbEIsT0FBTyxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEtBQUssSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNsRSxDQUFDOzs7Ozs7OztJQVFNLE1BQU07UUFDVCxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDWixPQUFPO1NBQ1Y7O2NBQ0ssSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSTs7Y0FDeEIsS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGlCQUFpQjtRQUNqRCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNoQixLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO1lBQ2xDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUM7U0FDdkM7YUFBTTtZQUNILElBQUksQ0FBQyxpQkFBaUIsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUN0QyxPQUFPLENBQUMsQ0FBQyxLQUFLLEtBQUssSUFBSSxDQUFDLEtBQUssQ0FBQztZQUNsQyxDQUFDLENBQUMsQ0FBQztTQUNOO1FBQ0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN6QixxQkFBcUIsQ0FBQyxHQUFHLEVBQUU7WUFDdkIsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2xCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQzs7O1lBM0VKLFNBQVMsU0FBQztnQkFDUCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsbUJBQW1CLEVBQUUsS0FBSztnQkFDMUIsUUFBUSxFQUFFLDJCQUEyQjtnQkFDckMsb2tHQUFnRDtnQkFDaEQsU0FBUyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsZUFBZSxFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsMkJBQTJCLENBQUMsRUFBRSxDQUFDO2FBQ3hHOzs7O1lBVlEsa0JBQWtCO1lBRWxCLGtCQUFrQjtZQUFFLHVCQUF1QjtZQUgzQyxrQ0FBa0M7WUFSdkMsVUFBVTtZQUNWLGlCQUFpQjs7O29CQTRCaEIsWUFBWSxTQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxnQ0FBZ0MsQ0FBQyxFQUFFLEVBQUUsSUFBSSxFQUFFLGdDQUFnQyxFQUFFO3VCQUczRyxTQUFTLFNBQUMsVUFBVSxFQUFFLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFO3VCQU16RCxXQUFXLFNBQUMsZUFBZTt1QkFTM0IsV0FBVyxTQUFDLDhCQUE4QjswQkFZMUMsV0FBVyxTQUFDLGlDQUFpQzs7Ozs7Ozs7Ozs7O0lBOUI5Qyw0Q0FDMEQ7O0lBRTFELCtDQUM0Qjs7Ozs7SUFLNUIsK0NBQ29COztJQW1EUiw4Q0FBZ0U7O0lBQ3hFLGtEQUFzQzs7SUFDdEMsdURBQWdEOzs7OztJQUNoRCxpREFBc0Q7O0lBQ3RELDhDQUEwQjs7SUFDMUIsMENBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgICBDb21wb25lbnQsXG4gICAgSG9zdEJpbmRpbmcsXG4gICAgZm9yd2FyZFJlZixcbiAgICBFbGVtZW50UmVmLFxuICAgIENoYW5nZURldGVjdG9yUmVmLFxuICAgIFZpZXdDaGlsZHJlbixcbiAgICBRdWVyeUxpc3QsXG4gICAgVmlld0NoaWxkXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSWd4SGllcmFyY2hpY2FsR3JpZENvbXBvbmVudCB9IGZyb20gJy4vaGllcmFyY2hpY2FsLWdyaWQuY29tcG9uZW50JztcbmltcG9ydCB7IElneFJvd0NvbXBvbmVudCB9IGZyb20gJy4uL3Jvdy5jb21wb25lbnQnO1xuaW1wb3J0IHsgSWd4SGllcmFyY2hpY2FsU2VsZWN0aW9uQVBJU2VydmljZSB9IGZyb20gJy4vc2VsZWN0aW9uJztcbmltcG9ydCB7IEdyaWRCYXNlQVBJU2VydmljZSB9IGZyb20gJy4uLy4vYXBpLnNlcnZpY2UnO1xuaW1wb3J0IHsgSWd4SGllcmFyY2hpY2FsR3JpZENlbGxDb21wb25lbnQgfSBmcm9tICcuL2hpZXJhcmNoaWNhbC1jZWxsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJZ3hHcmlkQ1JVRFNlcnZpY2UsIElneEdyaWRTZWxlY3Rpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vY29yZS9ncmlkLXNlbGVjdGlvbic7XG5cbkBDb21wb25lbnQoe1xuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICAgIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICAgIHNlbGVjdG9yOiAnaWd4LWhpZXJhcmNoaWNhbC1ncmlkLXJvdycsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2hpZXJhcmNoaWNhbC1yb3cuY29tcG9uZW50Lmh0bWwnLFxuICAgIHByb3ZpZGVyczogW3sgcHJvdmlkZTogSWd4Um93Q29tcG9uZW50LCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBJZ3hIaWVyYXJjaGljYWxSb3dDb21wb25lbnQpIH1dXG59KVxuZXhwb3J0IGNsYXNzIElneEhpZXJhcmNoaWNhbFJvd0NvbXBvbmVudCBleHRlbmRzIElneFJvd0NvbXBvbmVudDxJZ3hIaWVyYXJjaGljYWxHcmlkQ29tcG9uZW50PiB7XG4gICAgLyoqXG4gICAgICogVGhlIHJlbmRlcmVkIGNlbGxzIGluIHRoZSByb3cgY29tcG9uZW50LlxuICAgICAqXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIC8vIGdldCB0aGUgY2VsbHMgb2YgdGhlIHRoaXJkIHNlbGVjdGVkIHJvd1xuICAgICAqIGxldCBzZWxlY3RlZFJvd0NlbGxzID0gdGhpcy5ncmlkLnNlbGVjdGVkUm93c1syXS5jZWxscztcbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBAVmlld0NoaWxkcmVuKGZvcndhcmRSZWYoKCkgPT4gSWd4SGllcmFyY2hpY2FsR3JpZENlbGxDb21wb25lbnQpLCB7IHJlYWQ6IElneEhpZXJhcmNoaWNhbEdyaWRDZWxsQ29tcG9uZW50IH0pXG4gICAgcHVibGljIGNlbGxzOiBRdWVyeUxpc3Q8SWd4SGllcmFyY2hpY2FsR3JpZENlbGxDb21wb25lbnQ+O1xuXG4gICAgQFZpZXdDaGlsZCgnZXhwYW5kZXInLCB7IHJlYWQ6IEVsZW1lbnRSZWYsIHN0YXRpYzogZmFsc2UgfSlcbiAgICBwdWJsaWMgZXhwYW5kZXI6IEVsZW1lbnRSZWY7XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgQEhvc3RCaW5kaW5nKCdhdHRyLnRhYmluZGV4JylcbiAgICBwdWJsaWMgdGFiaW5kZXggPSAwO1xuXG4gICAgICAgIC8qKlxuICAgICAqIFJldHVybnMgd2hldGhlciB0aGUgcm93IGlzIGV4cGFuZGVkLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBjb25zdCBSb3dFeHBhbmRlZCA9IHRoaXMuZ3JpZDEucm93TGlzdC5maXJzdC5leHBhbmRlZDtcbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBASG9zdEJpbmRpbmcoJ2NsYXNzLmlneC1ncmlkX190ci0tZXhwYW5kZWQnKVxuICAgIHB1YmxpYyBnZXQgZXhwYW5kZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdyaWQuaXNFeHBhbmRlZCh0aGlzLnJvd0RhdGEpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgaGFzQ2hpbGRyZW4oKSB7XG4gICAgICAgIHJldHVybiAgISF0aGlzLmdyaWQuY2hpbGRMYXlvdXRLZXlzLmxlbmd0aDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pZ3gtZ3JpZF9fdHItLWhpZ2hsaWdodGVkJylcbiAgICBwdWJsaWMgZ2V0IGhpZ2hsaWdodGVkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ncmlkICYmIHRoaXMuZ3JpZC5oaWdobGlnaHRlZFJvd0lEID09PSB0aGlzLnJvd0lEO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRvZ2dsZXMgdGhlIGhpZXJhcmNoaWNhbCByb3cuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIHRoaXMuZ3JpZDEucm93TGlzdC5maXJzdC50b2dnbGUoKVxuICAgICAqIGBgYFxuICAgICAqL1xuICAgIHB1YmxpYyB0b2dnbGUoKSB7XG4gICAgICAgIGlmICh0aGlzLmFkZGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZ3JpZCA9IHRoaXMuZ3JpZEFQSS5ncmlkO1xuICAgICAgICBjb25zdCBzdGF0ZSA9IHRoaXMuZ3JpZEFQSS5ncmlkLmhpZXJhcmNoaWNhbFN0YXRlO1xuICAgICAgICBpZiAoIXRoaXMuZXhwYW5kZWQpIHtcbiAgICAgICAgICAgIHN0YXRlLnB1c2goeyByb3dJRDogdGhpcy5yb3dJRCB9KTtcbiAgICAgICAgICAgIGdyaWQuaGllcmFyY2hpY2FsU3RhdGUgPSBbLi4uc3RhdGVdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZ3JpZC5oaWVyYXJjaGljYWxTdGF0ZSA9IHN0YXRlLmZpbHRlcih2ID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdi5yb3dJRCAhPT0gdGhpcy5yb3dJRDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGdyaWQuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICAgIGdyaWQucmVmbG93KCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBncmlkQVBJOiBHcmlkQmFzZUFQSVNlcnZpY2U8SWd4SGllcmFyY2hpY2FsR3JpZENvbXBvbmVudD4sXG4gICAgICAgIHB1YmxpYyBjcnVkU2VydmljZTogSWd4R3JpZENSVURTZXJ2aWNlLFxuICAgICAgICBwdWJsaWMgc2VsZWN0aW9uU2VydmljZTogSWd4R3JpZFNlbGVjdGlvblNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgaHNlbGVjdGlvbjogSWd4SGllcmFyY2hpY2FsU2VsZWN0aW9uQVBJU2VydmljZSxcbiAgICAgICAgcHVibGljIGVsZW1lbnQ6IEVsZW1lbnRSZWYsXG4gICAgICAgIHB1YmxpYyBjZHI6IENoYW5nZURldGVjdG9yUmVmKSB7XG4gICAgICAgICAgICBzdXBlcihncmlkQVBJLCBjcnVkU2VydmljZSwgc2VsZWN0aW9uU2VydmljZSwgaHNlbGVjdGlvbiwgZWxlbWVudCwgY2RyKTtcbiAgICAgICAgfVxufVxuIl19