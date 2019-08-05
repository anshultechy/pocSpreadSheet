/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, HostBinding, Input, ViewChild } from '@angular/core';
import { IgxSelectionAPIService } from '../../core/selection';
import { GridBaseAPIService } from '.././api.service';
import { IgxRowIslandComponent } from './row-island.component';
var IgxChildGridRowComponent = /** @class */ (function () {
    function IgxChildGridRowComponent(gridAPI, selectionAPI, element, cdr) {
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
    Object.defineProperty(IgxChildGridRowComponent.prototype, "parentHasScroll", {
        /**
         * @hidden
         */
        get: /**
         * @hidden
         * @return {?}
         */
        function () {
            return !this.parentGrid.verticalScrollContainer.dc.instance.notVirtual;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxChildGridRowComponent.prototype, "parentGrid", {
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
         */
        // TODO: Refactor
        get: /**
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
        function () {
            return this.gridAPI.grid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxChildGridRowComponent.prototype, "level", {
        get: /**
         * @return {?}
         */
        function () {
            return this.layout.level;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxChildGridRowComponent.prototype, "nativeElement", {
        /**
         * The native DOM element representing the row. Could be null in certain environments.
         *
         * ```typescript
         * // get the nativeElement of the second selected row
         * let selectedRowNativeElement = this.grid.selectedRows[1].nativeElement;
         * ```
         */
        get: /**
         * The native DOM element representing the row. Could be null in certain environments.
         *
         * ```typescript
         * // get the nativeElement of the second selected row
         * let selectedRowNativeElement = this.grid.selectedRows[1].nativeElement;
         * ```
         * @return {?}
         */
        function () {
            return this.element.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @hidden
     */
    /**
     * @hidden
     * @return {?}
     */
    IgxChildGridRowComponent.prototype.ngOnInit = /**
     * @hidden
     * @return {?}
     */
    function () {
        var _this = this;
        this.layout.onLayoutChange.subscribe(function (ch) {
            _this._handleLayoutChanges(ch);
        });
        /** @type {?} */
        var changes = this.layout.initialChanges;
        changes.forEach(function (change) {
            _this._handleLayoutChanges(change);
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
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @return {?}
     */
    IgxChildGridRowComponent.prototype.ngAfterViewInit = /**
     * @hidden
     * @return {?}
     */
    function () {
        var _this = this;
        this.hGrid.childLayoutList = this.layout.children;
        if (this.layout.childColumns.length > 0 && !this.hGrid.autoGenerate) {
            this.hGrid.createColumnsList(this.layout.childColumns.toArray());
        }
        /** @type {?} */
        var layouts = this.hGrid.childLayoutList.toArray();
        layouts.forEach(function (l) { return _this.hGrid.hgridAPI.registerChildRowIsland(l); });
        this.parentGrid.hgridAPI.registerChildGrid(this.rowData.rowID, this.layout.key, this.hGrid);
        this.layout.rowIslandAPI.registerChildGrid(this.rowData.rowID, this.hGrid);
        this.hGrid.cdr.detectChanges();
    };
    /**
     * @private
     * @param {?} changes
     * @return {?}
     */
    IgxChildGridRowComponent.prototype._handleLayoutChanges = /**
     * @private
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        for (var change in changes) {
            if (changes.hasOwnProperty(change)) {
                this.hGrid[change] = changes[change].currentValue;
            }
        }
    };
    IgxChildGridRowComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    preserveWhitespaces: false,
                    selector: 'igx-child-grid-row',
                    template: "<div class=\"igx-grid__hierarchical-indent\" [ngClass]=\"{'igx-grid__hierarchical-indent--scroll': parentHasScroll}\">\n    <igx-hierarchical-grid #hgrid [data]='rowData.childGridsData[layout.key]'></igx-hierarchical-grid>\n</div>\n"
                }] }
    ];
    /** @nocollapse */
    IgxChildGridRowComponent.ctorParameters = function () { return [
        { type: GridBaseAPIService },
        { type: IgxSelectionAPIService },
        { type: ElementRef },
        { type: ChangeDetectorRef }
    ]; };
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
    return IgxChildGridRowComponent;
}());
export { IgxChildGridRowComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hpbGQtZ3JpZC1yb3cuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vaWduaXRldWktYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9ncmlkcy9oaWVyYXJjaGljYWwtZ3JpZC9jaGlsZC1ncmlkLXJvdy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDSCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsV0FBVyxFQUNYLEtBQUssRUFFTCxTQUFTLEVBR1osTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDOUQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDdEQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFL0Q7SUFxSEksa0NBQW1CLE9BQXVFLEVBQzlFLFlBQW9DLEVBQ3JDLE9BQW1CLEVBQ25CLEdBQXNCO1FBSGQsWUFBTyxHQUFQLE9BQU8sQ0FBZ0U7UUFDOUUsaUJBQVksR0FBWixZQUFZLENBQXdCO1FBQ3JDLFlBQU8sR0FBUCxPQUFPLENBQVk7UUFDbkIsUUFBRyxHQUFILEdBQUcsQ0FBbUI7Ozs7Ozs7UUF6RzFCLGFBQVEsR0FBRyxLQUFLLENBQUM7Ozs7Ozs7OztRQW1DakIsWUFBTyxHQUFRLEVBQUUsQ0FBQzs7OztRQW9CbEIsYUFBUSxHQUFHLENBQUMsQ0FBQzs7OztRQU1iLFNBQUksR0FBRyxLQUFLLENBQUM7SUE2Q3BCLENBQUM7SUFsR0Qsc0JBQVcscURBQWU7UUFIMUI7O1dBRUc7Ozs7O1FBQ0g7WUFDSSxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyx1QkFBdUIsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQztRQUMzRSxDQUFDOzs7T0FBQTtJQXVFRCxzQkFBSSxnREFBVTtRQWxCZDs7Ozs7Ozs7Ozs7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Ozs7OztJQUdPLHVEQUFvQjs7Ozs7SUFBNUIsVUFBNkIsT0FBc0I7UUFDL0MsS0FBSyxJQUFNLE1BQU0sSUFBSSxPQUFPLEVBQUU7WUFDMUIsSUFBSSxPQUFPLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxFQUFFO2dCQUNoQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxZQUFZLENBQUM7YUFDckQ7U0FDSjtJQUNMLENBQUM7O2dCQTFLSixTQUFTLFNBQUM7b0JBQ1AsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLG1CQUFtQixFQUFFLEtBQUs7b0JBQzFCLFFBQVEsRUFBRSxvQkFBb0I7b0JBQzlCLG9QQUE4QztpQkFDakQ7Ozs7Z0JBUlEsa0JBQWtCO2dCQURsQixzQkFBc0I7Z0JBUjNCLFVBQVU7Z0JBRlYsaUJBQWlCOzs7eUJBK0JoQixLQUFLOytCQXFCTCxLQUFLOzBCQVdMLEtBQUs7d0JBV0wsS0FBSzt3QkFHTCxTQUFTLFNBQUMsT0FBTyxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTsyQkFNbkMsV0FBVyxTQUFDLGVBQWU7dUJBTTNCLFdBQVcsU0FBQyxXQUFXO3dCQXlCdkIsV0FBVyxTQUFDLGlCQUFpQjs7SUF1RWxDLCtCQUFDO0NBQUEsQUEzS0QsSUEyS0M7U0FyS1ksd0JBQXdCOzs7Ozs7Ozs7SUFTakMsNENBQXdCOztJQUV4QiwwQ0FDOEI7Ozs7O0lBb0I5QixnREFDNEI7Ozs7Ozs7Ozs7SUFVNUIsMkNBQ3lCOzs7Ozs7Ozs7O0lBVXpCLHlDQUNxQjs7Ozs7SUFFckIseUNBQzBEOzs7OztJQUsxRCw0Q0FDb0I7Ozs7O0lBS3BCLHdDQUNvQjs7SUF5Q1IsMkNBQThFOzs7OztJQUN0RixnREFBNEM7O0lBQzVDLDJDQUEwQjs7SUFDMUIsdUNBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBDb21wb25lbnQsXG4gICAgRWxlbWVudFJlZixcbiAgICBIb3N0QmluZGluZyxcbiAgICBJbnB1dCxcbiAgICBPbkluaXQsXG4gICAgVmlld0NoaWxkLFxuICAgIEFmdGVyVmlld0luaXQsXG4gICAgU2ltcGxlQ2hhbmdlc1xufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElneFNlbGVjdGlvbkFQSVNlcnZpY2UgfSBmcm9tICcuLi8uLi9jb3JlL3NlbGVjdGlvbic7XG5pbXBvcnQgeyBHcmlkQmFzZUFQSVNlcnZpY2UgfSBmcm9tICcuLi8uL2FwaS5zZXJ2aWNlJztcbmltcG9ydCB7IElneFJvd0lzbGFuZENvbXBvbmVudCB9IGZyb20gJy4vcm93LWlzbGFuZC5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgICBzZWxlY3RvcjogJ2lneC1jaGlsZC1ncmlkLXJvdycsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2NoaWxkLWdyaWQtcm93LmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBJZ3hDaGlsZEdyaWRSb3dDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkluaXQge1xuXG5cbiAgICAvKipcbiAqIFJldHVybnMgd2hldGhlciB0aGUgcm93IGlzIGV4cGFuZGVkLlxuICogYGBgdHlwZXNjcmlwdFxuICogY29uc3QgUm93RXhwYW5kZWQgPSB0aGlzLmdyaWQxLnJvd0xpc3QuZmlyc3QuZXhwYW5kZWQ7XG4gKiBgYGBcbiAqL1xuICAgIHB1YmxpYyBleHBhbmRlZCA9IGZhbHNlO1xuXG4gICAgQElucHV0KClcbiAgICBsYXlvdXQ6IElneFJvd0lzbGFuZENvbXBvbmVudDtcblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0IHBhcmVudEhhc1Njcm9sbCgpIHtcbiAgICAgICAgcmV0dXJuICF0aGlzLnBhcmVudEdyaWQudmVydGljYWxTY3JvbGxDb250YWluZXIuZGMuaW5zdGFuY2Uubm90VmlydHVhbDtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICAvLyBwdWJsaWMgZ2V0IGxheW91dCgpIHtcbiAgICAvLyAgICAgY29uc3QgbGF5b3V0ID0gKHRoaXMuZ3JpZEFQSSBhcyBJZ3hIaWVyYXJjaGljYWxHcmlkQVBJU2VydmljZSkuZ2V0TGF5b3V0KGBpZ3gtcm93LWlzbGFuZC1gICsgdGhpcy5yb3dEYXRhLmtleSk7XG4gICAgLy8gICAgcmV0dXJuIGxheW91dDtcbiAgICAvLyB9XG4gICAgLyoqXG4gICAgKiBAaGlkZGVuXG4gICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBwYXJlbnRHcmlkSUQ6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqICBUaGUgZGF0YSBwYXNzZWQgdG8gdGhlIHJvdyBjb21wb25lbnQuXG4gICAgICpcbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogLy8gZ2V0IHRoZSByb3cgZGF0YSBmb3IgdGhlIGZpcnN0IHNlbGVjdGVkIHJvd1xuICAgICAqIGxldCBzZWxlY3RlZFJvd0RhdGEgPSB0aGlzLmdyaWQuc2VsZWN0ZWRSb3dzWzBdLnJvd0RhdGE7XG4gICAgICogYGBgXG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgcm93RGF0YTogYW55ID0gW107XG5cbiAgICAvKipcbiAgICAgKiBUaGUgaW5kZXggb2YgdGhlIHJvdy5cbiAgICAgKlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiAvLyBnZXQgdGhlIGluZGV4IG9mIHRoZSBzZWNvbmQgc2VsZWN0ZWQgcm93XG4gICAgICogbGV0IHNlbGVjdGVkUm93SW5kZXggPSB0aGlzLmdyaWQuc2VsZWN0ZWRSb3dzWzFdLmluZGV4O1xuICAgICAqIGBgYFxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGluZGV4OiBudW1iZXI7XG5cbiAgICBAVmlld0NoaWxkKCdoZ3JpZCcsIHsgc3RhdGljOiB0cnVlIH0pXG4gICAgcHJpdmF0ZSBoR3JpZDogYW55LyogVE9ETzogSWd4SGllcmFyY2hpY2FsR3JpZENvbXBvbmVudCovO1xuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIEBIb3N0QmluZGluZygnYXR0ci50YWJpbmRleCcpXG4gICAgcHVibGljIHRhYmluZGV4ID0gMDtcblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBASG9zdEJpbmRpbmcoJ2F0dHIucm9sZScpXG4gICAgcHVibGljIHJvbGUgPSAncm93JztcblxuICAgIC8qKlxuICAgICAqIEdldCBhIHJlZmVyZW5jZSB0byB0aGUgZ3JpZCB0aGF0IGNvbnRhaW5zIHRoZSBzZWxlY3RlZCByb3cuXG4gICAgICpcbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogaGFuZGxlUm93U2VsZWN0aW9uKGV2ZW50KSB7XG4gICAgICogIC8vIHRoZSBncmlkIG9uIHdoaWNoIHRoZSBvblJvd1NlbGVjdGlvbkNoYW5nZSBldmVudCB3YXMgdHJpZ2dlcmVkXG4gICAgICogIGNvbnN0IGdyaWQgPSBldmVudC5yb3cuZ3JpZDtcbiAgICAgKiB9XG4gICAgICogYGBgXG4gICAgICpcbiAgICAgKiBgYGBodG1sXG4gICAgICogIDxpZ3gtZ3JpZFxuICAgICAqICAgIFtkYXRhXT1cImRhdGFcIlxuICAgICAqICAgIChvblJvd1NlbGVjdGlvbkNoYW5nZSk9XCJoYW5kbGVSb3dTZWxlY3Rpb24oJGV2ZW50KVwiPlxuICAgICAqICA8L2lneC1ncmlkPlxuICAgICAqIGBgYFxuICAgICAqL1xuICAgIC8vIFRPRE86IFJlZmFjdG9yXG4gICAgZ2V0IHBhcmVudEdyaWQoKTogYW55LyogVE9ETzogSWd4SGllcmFyY2hpY2FsR3JpZENvbXBvbmVudCovIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ3JpZEFQSS5ncmlkO1xuICAgIH1cblxuICAgIEBIb3N0QmluZGluZygnYXR0ci5kYXRhLWxldmVsJylcbiAgICBnZXQgbGV2ZWwoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxheW91dC5sZXZlbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgbmF0aXZlIERPTSBlbGVtZW50IHJlcHJlc2VudGluZyB0aGUgcm93LiBDb3VsZCBiZSBudWxsIGluIGNlcnRhaW4gZW52aXJvbm1lbnRzLlxuICAgICAqXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIC8vIGdldCB0aGUgbmF0aXZlRWxlbWVudCBvZiB0aGUgc2Vjb25kIHNlbGVjdGVkIHJvd1xuICAgICAqIGxldCBzZWxlY3RlZFJvd05hdGl2ZUVsZW1lbnQgPSB0aGlzLmdyaWQuc2VsZWN0ZWRSb3dzWzFdLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICogYGBgXG4gICAgICovXG4gICAgZ2V0IG5hdGl2ZUVsZW1lbnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudDtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgZ3JpZEFQSTogR3JpZEJhc2VBUElTZXJ2aWNlPGFueS8qIFRPRE86IElneEhpZXJhcmNoaWNhbEdyaWRDb21wb25lbnQqLz4sXG4gICAgICAgIHByaXZhdGUgc2VsZWN0aW9uQVBJOiBJZ3hTZWxlY3Rpb25BUElTZXJ2aWNlLFxuICAgICAgICBwdWJsaWMgZWxlbWVudDogRWxlbWVudFJlZixcbiAgICAgICAgcHVibGljIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMubGF5b3V0Lm9uTGF5b3V0Q2hhbmdlLnN1YnNjcmliZSgoY2gpID0+IHtcbiAgICAgICAgICAgIHRoaXMuX2hhbmRsZUxheW91dENoYW5nZXMoY2gpO1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgY2hhbmdlcyA9IHRoaXMubGF5b3V0LmluaXRpYWxDaGFuZ2VzO1xuICAgICAgICBjaGFuZ2VzLmZvckVhY2goY2hhbmdlID0+IHtcbiAgICAgICAgICAgIHRoaXMuX2hhbmRsZUxheW91dENoYW5nZXMoY2hhbmdlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuaEdyaWQucGFyZW50ID0gdGhpcy5wYXJlbnRHcmlkO1xuICAgICAgICB0aGlzLmhHcmlkLnBhcmVudElzbGFuZCA9IHRoaXMubGF5b3V0O1xuICAgICAgICB0aGlzLmhHcmlkLmNoaWxkUm93ID0gIHRoaXM7XG4gICAgICAgIGlmICh0aGlzLmhHcmlkLmlzUGVyY2VudEhlaWdodCkge1xuICAgICAgICAgICAgdGhpcy5oR3JpZC5fYXV0b1NpemUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubGF5b3V0Lm9uR3JpZENyZWF0ZWQuZW1pdCh7XG4gICAgICAgICAgICBvd25lcjogdGhpcy5sYXlvdXQsXG4gICAgICAgICAgICBwYXJlbnRJRDogdGhpcy5yb3dEYXRhLnJvd0lELFxuICAgICAgICAgICAgZ3JpZDogdGhpcy5oR3JpZFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgICB0aGlzLmhHcmlkLmNoaWxkTGF5b3V0TGlzdCA9IHRoaXMubGF5b3V0LmNoaWxkcmVuO1xuICAgICAgICBpZiAodGhpcy5sYXlvdXQuY2hpbGRDb2x1bW5zLmxlbmd0aCA+IDAgJiYgIXRoaXMuaEdyaWQuYXV0b0dlbmVyYXRlKSB7XG4gICAgICAgICAgICB0aGlzLmhHcmlkLmNyZWF0ZUNvbHVtbnNMaXN0KHRoaXMubGF5b3V0LmNoaWxkQ29sdW1ucy50b0FycmF5KCkpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGxheW91dHMgPSB0aGlzLmhHcmlkLmNoaWxkTGF5b3V0TGlzdC50b0FycmF5KCk7XG4gICAgICAgIGxheW91dHMuZm9yRWFjaCgobCkgPT4gdGhpcy5oR3JpZC5oZ3JpZEFQSS5yZWdpc3RlckNoaWxkUm93SXNsYW5kKGwpKTtcbiAgICAgICAgdGhpcy5wYXJlbnRHcmlkLmhncmlkQVBJLnJlZ2lzdGVyQ2hpbGRHcmlkKHRoaXMucm93RGF0YS5yb3dJRCwgdGhpcy5sYXlvdXQua2V5LCB0aGlzLmhHcmlkKTtcbiAgICAgICAgdGhpcy5sYXlvdXQucm93SXNsYW5kQVBJLnJlZ2lzdGVyQ2hpbGRHcmlkKHRoaXMucm93RGF0YS5yb3dJRCwgdGhpcy5oR3JpZCk7XG5cbiAgICAgICAgdGhpcy5oR3JpZC5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH1cblxuXG4gICAgcHJpdmF0ZSBfaGFuZGxlTGF5b3V0Q2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgICAgIGZvciAoY29uc3QgY2hhbmdlIGluIGNoYW5nZXMpIHtcbiAgICAgICAgICAgIGlmIChjaGFuZ2VzLmhhc093blByb3BlcnR5KGNoYW5nZSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmhHcmlkW2NoYW5nZV0gPSBjaGFuZ2VzW2NoYW5nZV0uY3VycmVudFZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIl19