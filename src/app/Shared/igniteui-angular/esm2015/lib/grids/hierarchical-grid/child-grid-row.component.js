/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, HostBinding, Input, ViewChild } from '@angular/core';
import { IgxSelectionAPIService } from '../../core/selection';
import { GridBaseAPIService } from '.././api.service';
import { IgxRowIslandComponent } from './row-island.component';
export class IgxChildGridRowComponent {
    /**
     * @param {?} gridAPI
     * @param {?} selectionAPI
     * @param {?} element
     * @param {?} cdr
     */
    constructor(gridAPI, selectionAPI, element, cdr) {
        this.gridAPI = gridAPI;
        this.selectionAPI = selectionAPI;
        this.element = element;
        this.cdr = cdr;
        /**
         * Returns whether the row is expanded.
         * ```typescript
         * const RowExpanded = this.grid1.rowList.first.expanded;
         * ```
         */
        this.expanded = false;
        /**
         *  The data passed to the row component.
         *
         * ```typescript
         * // get the row data for the first selected row
         * let selectedRowData = this.grid.selectedRows[0].rowData;
         * ```
         */
        this.rowData = [];
        /**
         * @hidden
         */
        this.tabindex = 0;
        /**
         * @hidden
         */
        this.role = 'row';
    }
    /**
     * @hidden
     * @return {?}
     */
    get parentHasScroll() {
        return !this.parentGrid.verticalScrollContainer.dc.instance.notVirtual;
    }
    /**
     * Get a reference to the grid that contains the selected row.
     *
     * ```typescript
     * handleRowSelection(event) {
     *  // the grid on which the onRowSelectionChange event was triggered
     *  const grid = event.row.grid;
     * }
     * ```
     *
     * ```html
     *  <igx-grid
     *    [data]="data"
     *    (onRowSelectionChange)="handleRowSelection($event)">
     *  </igx-grid>
     * ```
     * @return {?}
     */
    // TODO: Refactor
    get parentGrid() {
        return this.gridAPI.grid;
    }
    /**
     * @return {?}
     */
    get level() {
        return this.layout.level;
    }
    /**
     * The native DOM element representing the row. Could be null in certain environments.
     *
     * ```typescript
     * // get the nativeElement of the second selected row
     * let selectedRowNativeElement = this.grid.selectedRows[1].nativeElement;
     * ```
     * @return {?}
     */
    get nativeElement() {
        return this.element.nativeElement;
    }
    /**
     * @hidden
     * @return {?}
     */
    ngOnInit() {
        this.layout.onLayoutChange.subscribe((ch) => {
            this._handleLayoutChanges(ch);
        });
        /** @type {?} */
        const changes = this.layout.initialChanges;
        changes.forEach(change => {
            this._handleLayoutChanges(change);
        });
        this.hGrid.parent = this.parentGrid;
        this.hGrid.parentIsland = this.layout;
        this.hGrid.childRow = this;
        if (this.hGrid.isPercentHeight) {
            this.hGrid._autoSize = true;
        }
        this.layout.onGridCreated.emit({
            owner: this.layout,
            parentID: this.rowData.rowID,
            grid: this.hGrid
        });
    }
    /**
     * @hidden
     * @return {?}
     */
    ngAfterViewInit() {
        this.hGrid.childLayoutList = this.layout.children;
        if (this.layout.childColumns.length > 0 && !this.hGrid.autoGenerate) {
            this.hGrid.createColumnsList(this.layout.childColumns.toArray());
        }
        /** @type {?} */
        const layouts = this.hGrid.childLayoutList.toArray();
        layouts.forEach((l) => this.hGrid.hgridAPI.registerChildRowIsland(l));
        this.parentGrid.hgridAPI.registerChildGrid(this.rowData.rowID, this.layout.key, this.hGrid);
        this.layout.rowIslandAPI.registerChildGrid(this.rowData.rowID, this.hGrid);
        this.hGrid.cdr.detectChanges();
    }
    /**
     * @private
     * @param {?} changes
     * @return {?}
     */
    _handleLayoutChanges(changes) {
        for (const change in changes) {
            if (changes.hasOwnProperty(change)) {
                this.hGrid[change] = changes[change].currentValue;
            }
        }
    }
}
IgxChildGridRowComponent.decorators = [
    { type: Component, args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                preserveWhitespaces: false,
                selector: 'igx-child-grid-row',
                template: "<div class=\"igx-grid__hierarchical-indent\" [ngClass]=\"{'igx-grid__hierarchical-indent--scroll': parentHasScroll}\">\n    <igx-hierarchical-grid #hgrid [data]='rowData.childGridsData[layout.key]'></igx-hierarchical-grid>\n</div>\n"
            }] }
];
/** @nocollapse */
IgxChildGridRowComponent.ctorParameters = () => [
    { type: GridBaseAPIService },
    { type: IgxSelectionAPIService },
    { type: ElementRef },
    { type: ChangeDetectorRef }
];
IgxChildGridRowComponent.propDecorators = {
    layout: [{ type: Input }],
    parentGridID: [{ type: Input }],
    rowData: [{ type: Input }],
    index: [{ type: Input }],
    hGrid: [{ type: ViewChild, args: ['hgrid', { static: true },] }],
    tabindex: [{ type: HostBinding, args: ['attr.tabindex',] }],
    role: [{ type: HostBinding, args: ['attr.role',] }],
    level: [{ type: HostBinding, args: ['attr.data-level',] }]
};
if (false) {
    /**
     * Returns whether the row is expanded.
     * ```typescript
     * const RowExpanded = this.grid1.rowList.first.expanded;
     * ```
     * @type {?}
     */
    IgxChildGridRowComponent.prototype.expanded;
    /** @type {?} */
    IgxChildGridRowComponent.prototype.layout;
    /**
     * @hidden
     * @type {?}
     */
    IgxChildGridRowComponent.prototype.parentGridID;
    /**
     *  The data passed to the row component.
     *
     * ```typescript
     * // get the row data for the first selected row
     * let selectedRowData = this.grid.selectedRows[0].rowData;
     * ```
     * @type {?}
     */
    IgxChildGridRowComponent.prototype.rowData;
    /**
     * The index of the row.
     *
     * ```typescript
     * // get the index of the second selected row
     * let selectedRowIndex = this.grid.selectedRows[1].index;
     * ```
     * @type {?}
     */
    IgxChildGridRowComponent.prototype.index;
    /**
     * @type {?}
     * @private
     */
    IgxChildGridRowComponent.prototype.hGrid;
    /**
     * @hidden
     * @type {?}
     */
    IgxChildGridRowComponent.prototype.tabindex;
    /**
     * @hidden
     * @type {?}
     */
    IgxChildGridRowComponent.prototype.role;
    /** @type {?} */
    IgxChildGridRowComponent.prototype.gridAPI;
    /**
     * @type {?}
     * @private
     */
    IgxChildGridRowComponent.prototype.selectionAPI;
    /** @type {?} */
    IgxChildGridRowComponent.prototype.element;
    /** @type {?} */
    IgxChildGridRowComponent.prototype.cdr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hpbGQtZ3JpZC1yb3cuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vaWduaXRldWktYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9ncmlkcy9oaWVyYXJjaGljYWwtZ3JpZC9jaGlsZC1ncmlkLXJvdy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDSCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsV0FBVyxFQUNYLEtBQUssRUFFTCxTQUFTLEVBR1osTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDOUQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDdEQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFRL0QsTUFBTSxPQUFPLHdCQUF3Qjs7Ozs7OztJQStHakMsWUFBbUIsT0FBdUUsRUFDOUUsWUFBb0MsRUFDckMsT0FBbUIsRUFDbkIsR0FBc0I7UUFIZCxZQUFPLEdBQVAsT0FBTyxDQUFnRTtRQUM5RSxpQkFBWSxHQUFaLFlBQVksQ0FBd0I7UUFDckMsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQUNuQixRQUFHLEdBQUgsR0FBRyxDQUFtQjs7Ozs7OztRQXpHMUIsYUFBUSxHQUFHLEtBQUssQ0FBQzs7Ozs7Ozs7O1FBbUNqQixZQUFPLEdBQVEsRUFBRSxDQUFDOzs7O1FBb0JsQixhQUFRLEdBQUcsQ0FBQyxDQUFDOzs7O1FBTWIsU0FBSSxHQUFHLEtBQUssQ0FBQztJQTZDcEIsQ0FBQzs7Ozs7SUFsR0QsSUFBVyxlQUFlO1FBQ3RCLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLHVCQUF1QixDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDO0lBQzNFLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBdUVELElBQUksVUFBVTtRQUNWLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7SUFDN0IsQ0FBQzs7OztJQUVELElBQ0ksS0FBSztRQUNMLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFDN0IsQ0FBQzs7Ozs7Ozs7OztJQVVELElBQUksYUFBYTtRQUNiLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUM7SUFDdEMsQ0FBQzs7Ozs7SUFXRCxRQUFRO1FBQ0osSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUU7WUFDeEMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ2xDLENBQUMsQ0FBQyxDQUFDOztjQUNHLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWM7UUFDMUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUNyQixJQUFJLENBQUMsb0JBQW9CLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdEMsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQ3BDLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDdEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUksSUFBSSxDQUFDO1FBQzVCLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLEVBQUU7WUFDNUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1NBQy9CO1FBQ0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDO1lBQzNCLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTTtZQUNsQixRQUFRLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLO1lBQzVCLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSztTQUNuQixDQUFDLENBQUM7SUFDUCxDQUFDOzs7OztJQUtELGVBQWU7UUFDWCxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQztRQUNsRCxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksRUFBRTtZQUNqRSxJQUFJLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7U0FDcEU7O2NBQ0ssT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLE9BQU8sRUFBRTtRQUNwRCxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3RFLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM1RixJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFM0UsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDbkMsQ0FBQzs7Ozs7O0lBR08sb0JBQW9CLENBQUMsT0FBc0I7UUFDL0MsS0FBSyxNQUFNLE1BQU0sSUFBSSxPQUFPLEVBQUU7WUFDMUIsSUFBSSxPQUFPLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxFQUFFO2dCQUNoQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxZQUFZLENBQUM7YUFDckQ7U0FDSjtJQUNMLENBQUM7OztZQTFLSixTQUFTLFNBQUM7Z0JBQ1AsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLFFBQVEsRUFBRSxvQkFBb0I7Z0JBQzlCLG9QQUE4QzthQUNqRDs7OztZQVJRLGtCQUFrQjtZQURsQixzQkFBc0I7WUFSM0IsVUFBVTtZQUZWLGlCQUFpQjs7O3FCQStCaEIsS0FBSzsyQkFxQkwsS0FBSztzQkFXTCxLQUFLO29CQVdMLEtBQUs7b0JBR0wsU0FBUyxTQUFDLE9BQU8sRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7dUJBTW5DLFdBQVcsU0FBQyxlQUFlO21CQU0zQixXQUFXLFNBQUMsV0FBVztvQkF5QnZCLFdBQVcsU0FBQyxpQkFBaUI7Ozs7Ozs7Ozs7SUFyRjlCLDRDQUF3Qjs7SUFFeEIsMENBQzhCOzs7OztJQW9COUIsZ0RBQzRCOzs7Ozs7Ozs7O0lBVTVCLDJDQUN5Qjs7Ozs7Ozs7OztJQVV6Qix5Q0FDcUI7Ozs7O0lBRXJCLHlDQUMwRDs7Ozs7SUFLMUQsNENBQ29COzs7OztJQUtwQix3Q0FDb0I7O0lBeUNSLDJDQUE4RTs7Ozs7SUFDdEYsZ0RBQTRDOztJQUM1QywyQ0FBMEI7O0lBQzFCLHVDQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gICAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgQ29tcG9uZW50LFxuICAgIEVsZW1lbnRSZWYsXG4gICAgSG9zdEJpbmRpbmcsXG4gICAgSW5wdXQsXG4gICAgT25Jbml0LFxuICAgIFZpZXdDaGlsZCxcbiAgICBBZnRlclZpZXdJbml0LFxuICAgIFNpbXBsZUNoYW5nZXNcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJZ3hTZWxlY3Rpb25BUElTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vY29yZS9zZWxlY3Rpb24nO1xuaW1wb3J0IHsgR3JpZEJhc2VBUElTZXJ2aWNlIH0gZnJvbSAnLi4vLi9hcGkuc2VydmljZSc7XG5pbXBvcnQgeyBJZ3hSb3dJc2xhbmRDb21wb25lbnQgfSBmcm9tICcuL3Jvdy1pc2xhbmQuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gICAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gICAgc2VsZWN0b3I6ICdpZ3gtY2hpbGQtZ3JpZC1yb3cnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9jaGlsZC1ncmlkLXJvdy5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgSWd4Q2hpbGRHcmlkUm93Q29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25Jbml0IHtcblxuXG4gICAgLyoqXG4gKiBSZXR1cm5zIHdoZXRoZXIgdGhlIHJvdyBpcyBleHBhbmRlZC5cbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGNvbnN0IFJvd0V4cGFuZGVkID0gdGhpcy5ncmlkMS5yb3dMaXN0LmZpcnN0LmV4cGFuZGVkO1xuICogYGBgXG4gKi9cbiAgICBwdWJsaWMgZXhwYW5kZWQgPSBmYWxzZTtcblxuICAgIEBJbnB1dCgpXG4gICAgbGF5b3V0OiBJZ3hSb3dJc2xhbmRDb21wb25lbnQ7XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIGdldCBwYXJlbnRIYXNTY3JvbGwoKSB7XG4gICAgICAgIHJldHVybiAhdGhpcy5wYXJlbnRHcmlkLnZlcnRpY2FsU2Nyb2xsQ29udGFpbmVyLmRjLmluc3RhbmNlLm5vdFZpcnR1YWw7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgLy8gcHVibGljIGdldCBsYXlvdXQoKSB7XG4gICAgLy8gICAgIGNvbnN0IGxheW91dCA9ICh0aGlzLmdyaWRBUEkgYXMgSWd4SGllcmFyY2hpY2FsR3JpZEFQSVNlcnZpY2UpLmdldExheW91dChgaWd4LXJvdy1pc2xhbmQtYCArIHRoaXMucm93RGF0YS5rZXkpO1xuICAgIC8vICAgIHJldHVybiBsYXlvdXQ7XG4gICAgLy8gfVxuICAgIC8qKlxuICAgICogQGhpZGRlblxuICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgcGFyZW50R3JpZElEOiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiAgVGhlIGRhdGEgcGFzc2VkIHRvIHRoZSByb3cgY29tcG9uZW50LlxuICAgICAqXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIC8vIGdldCB0aGUgcm93IGRhdGEgZm9yIHRoZSBmaXJzdCBzZWxlY3RlZCByb3dcbiAgICAgKiBsZXQgc2VsZWN0ZWRSb3dEYXRhID0gdGhpcy5ncmlkLnNlbGVjdGVkUm93c1swXS5yb3dEYXRhO1xuICAgICAqIGBgYFxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHJvd0RhdGE6IGFueSA9IFtdO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGluZGV4IG9mIHRoZSByb3cuXG4gICAgICpcbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogLy8gZ2V0IHRoZSBpbmRleCBvZiB0aGUgc2Vjb25kIHNlbGVjdGVkIHJvd1xuICAgICAqIGxldCBzZWxlY3RlZFJvd0luZGV4ID0gdGhpcy5ncmlkLnNlbGVjdGVkUm93c1sxXS5pbmRleDtcbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBpbmRleDogbnVtYmVyO1xuXG4gICAgQFZpZXdDaGlsZCgnaGdyaWQnLCB7IHN0YXRpYzogdHJ1ZSB9KVxuICAgIHByaXZhdGUgaEdyaWQ6IGFueS8qIFRPRE86IElneEhpZXJhcmNoaWNhbEdyaWRDb21wb25lbnQqLztcblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBASG9zdEJpbmRpbmcoJ2F0dHIudGFiaW5kZXgnKVxuICAgIHB1YmxpYyB0YWJpbmRleCA9IDA7XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgQEhvc3RCaW5kaW5nKCdhdHRyLnJvbGUnKVxuICAgIHB1YmxpYyByb2xlID0gJ3Jvdyc7XG5cbiAgICAvKipcbiAgICAgKiBHZXQgYSByZWZlcmVuY2UgdG8gdGhlIGdyaWQgdGhhdCBjb250YWlucyB0aGUgc2VsZWN0ZWQgcm93LlxuICAgICAqXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGhhbmRsZVJvd1NlbGVjdGlvbihldmVudCkge1xuICAgICAqICAvLyB0aGUgZ3JpZCBvbiB3aGljaCB0aGUgb25Sb3dTZWxlY3Rpb25DaGFuZ2UgZXZlbnQgd2FzIHRyaWdnZXJlZFxuICAgICAqICBjb25zdCBncmlkID0gZXZlbnQucm93LmdyaWQ7XG4gICAgICogfVxuICAgICAqIGBgYFxuICAgICAqXG4gICAgICogYGBgaHRtbFxuICAgICAqICA8aWd4LWdyaWRcbiAgICAgKiAgICBbZGF0YV09XCJkYXRhXCJcbiAgICAgKiAgICAob25Sb3dTZWxlY3Rpb25DaGFuZ2UpPVwiaGFuZGxlUm93U2VsZWN0aW9uKCRldmVudClcIj5cbiAgICAgKiAgPC9pZ3gtZ3JpZD5cbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICAvLyBUT0RPOiBSZWZhY3RvclxuICAgIGdldCBwYXJlbnRHcmlkKCk6IGFueS8qIFRPRE86IElneEhpZXJhcmNoaWNhbEdyaWRDb21wb25lbnQqLyB7XG4gICAgICAgIHJldHVybiB0aGlzLmdyaWRBUEkuZ3JpZDtcbiAgICB9XG5cbiAgICBASG9zdEJpbmRpbmcoJ2F0dHIuZGF0YS1sZXZlbCcpXG4gICAgZ2V0IGxldmVsKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5sYXlvdXQubGV2ZWw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIG5hdGl2ZSBET00gZWxlbWVudCByZXByZXNlbnRpbmcgdGhlIHJvdy4gQ291bGQgYmUgbnVsbCBpbiBjZXJ0YWluIGVudmlyb25tZW50cy5cbiAgICAgKlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiAvLyBnZXQgdGhlIG5hdGl2ZUVsZW1lbnQgb2YgdGhlIHNlY29uZCBzZWxlY3RlZCByb3dcbiAgICAgKiBsZXQgc2VsZWN0ZWRSb3dOYXRpdmVFbGVtZW50ID0gdGhpcy5ncmlkLnNlbGVjdGVkUm93c1sxXS5uYXRpdmVFbGVtZW50O1xuICAgICAqIGBgYFxuICAgICAqL1xuICAgIGdldCBuYXRpdmVFbGVtZW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQ7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IocHVibGljIGdyaWRBUEk6IEdyaWRCYXNlQVBJU2VydmljZTxhbnkvKiBUT0RPOiBJZ3hIaWVyYXJjaGljYWxHcmlkQ29tcG9uZW50Ki8+LFxuICAgICAgICBwcml2YXRlIHNlbGVjdGlvbkFQSTogSWd4U2VsZWN0aW9uQVBJU2VydmljZSxcbiAgICAgICAgcHVibGljIGVsZW1lbnQ6IEVsZW1lbnRSZWYsXG4gICAgICAgIHB1YmxpYyBjZHI6IENoYW5nZURldGVjdG9yUmVmKSB7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmxheW91dC5vbkxheW91dENoYW5nZS5zdWJzY3JpYmUoKGNoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLl9oYW5kbGVMYXlvdXRDaGFuZ2VzKGNoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IGNoYW5nZXMgPSB0aGlzLmxheW91dC5pbml0aWFsQ2hhbmdlcztcbiAgICAgICAgY2hhbmdlcy5mb3JFYWNoKGNoYW5nZSA9PiB7XG4gICAgICAgICAgICB0aGlzLl9oYW5kbGVMYXlvdXRDaGFuZ2VzKGNoYW5nZSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmhHcmlkLnBhcmVudCA9IHRoaXMucGFyZW50R3JpZDtcbiAgICAgICAgdGhpcy5oR3JpZC5wYXJlbnRJc2xhbmQgPSB0aGlzLmxheW91dDtcbiAgICAgICAgdGhpcy5oR3JpZC5jaGlsZFJvdyA9ICB0aGlzO1xuICAgICAgICBpZiAodGhpcy5oR3JpZC5pc1BlcmNlbnRIZWlnaHQpIHtcbiAgICAgICAgICAgIHRoaXMuaEdyaWQuX2F1dG9TaXplID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxheW91dC5vbkdyaWRDcmVhdGVkLmVtaXQoe1xuICAgICAgICAgICAgb3duZXI6IHRoaXMubGF5b3V0LFxuICAgICAgICAgICAgcGFyZW50SUQ6IHRoaXMucm93RGF0YS5yb3dJRCxcbiAgICAgICAgICAgIGdyaWQ6IHRoaXMuaEdyaWRcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAgICAgdGhpcy5oR3JpZC5jaGlsZExheW91dExpc3QgPSB0aGlzLmxheW91dC5jaGlsZHJlbjtcbiAgICAgICAgaWYgKHRoaXMubGF5b3V0LmNoaWxkQ29sdW1ucy5sZW5ndGggPiAwICYmICF0aGlzLmhHcmlkLmF1dG9HZW5lcmF0ZSkge1xuICAgICAgICAgICAgdGhpcy5oR3JpZC5jcmVhdGVDb2x1bW5zTGlzdCh0aGlzLmxheW91dC5jaGlsZENvbHVtbnMudG9BcnJheSgpKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBsYXlvdXRzID0gdGhpcy5oR3JpZC5jaGlsZExheW91dExpc3QudG9BcnJheSgpO1xuICAgICAgICBsYXlvdXRzLmZvckVhY2goKGwpID0+IHRoaXMuaEdyaWQuaGdyaWRBUEkucmVnaXN0ZXJDaGlsZFJvd0lzbGFuZChsKSk7XG4gICAgICAgIHRoaXMucGFyZW50R3JpZC5oZ3JpZEFQSS5yZWdpc3RlckNoaWxkR3JpZCh0aGlzLnJvd0RhdGEucm93SUQsIHRoaXMubGF5b3V0LmtleSwgdGhpcy5oR3JpZCk7XG4gICAgICAgIHRoaXMubGF5b3V0LnJvd0lzbGFuZEFQSS5yZWdpc3RlckNoaWxkR3JpZCh0aGlzLnJvd0RhdGEucm93SUQsIHRoaXMuaEdyaWQpO1xuXG4gICAgICAgIHRoaXMuaEdyaWQuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICB9XG5cblxuICAgIHByaXZhdGUgX2hhbmRsZUxheW91dENoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgICAgICBmb3IgKGNvbnN0IGNoYW5nZSBpbiBjaGFuZ2VzKSB7XG4gICAgICAgICAgICBpZiAoY2hhbmdlcy5oYXNPd25Qcm9wZXJ0eShjaGFuZ2UpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5oR3JpZFtjaGFuZ2VdID0gY2hhbmdlc1tjaGFuZ2VdLmN1cnJlbnRWYWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==