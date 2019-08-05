/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ChangeDetectorRef, ElementRef, ViewChild, Inject, ChangeDetectionStrategy, NgZone, Input } from '@angular/core';
import { IgxGridCellComponent } from '../cell.component';
import { GridBaseAPIService } from '../api.service';
import { IgxSelectionAPIService } from '../../core/selection';
import { getNodeSizeViaRange } from '../../core/utils';
import { DOCUMENT } from '@angular/common';
import { IgxGridSelectionService, IgxGridCRUDService } from '../../core/grid-selection';
export class IgxTreeGridCellComponent extends IgxGridCellComponent {
    /**
     * @param {?} selectionService
     * @param {?} crudService
     * @param {?} gridAPI
     * @param {?} selection
     * @param {?} cdr
     * @param {?} element
     * @param {?} zone
     * @param {?} document
     */
    constructor(selectionService, crudService, gridAPI, selection, cdr, element, zone, document) {
        super(selectionService, crudService, gridAPI, selection, cdr, element, zone);
        this.zone = zone;
        this.document = document;
        /**
         * @hidden
         */
        this.expanded = false;
        /**
         * @hidden
         */
        this.level = 0;
        /**
         * @hidden
         */
        this.showIndicator = false;
        this.treeGridAPI = (/** @type {?} */ (gridAPI));
    }
    /**
     * @hidden
     * @return {?}
     */
    ngOnInit() {
        super.ngOnInit();
    }
    /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    toggle(event) {
        event.stopPropagation();
        this.treeGridAPI.trigger_row_expansion_toggle(this.row.treeRow, !this.row.expanded, event, this.visibleColumnIndex);
    }
    /**
     * @hidden
     * @return {?}
     */
    onIndicatorFocus() {
        this.gridAPI.submit_value();
        this.nativeElement.focus();
    }
    /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    onLoadingDblClick(event) {
        event.stopPropagation();
    }
    /**
     * @hidden
     * @param {?} range
     * @return {?}
     */
    calculateSizeToFit(range) {
        /** @type {?} */
        const indicatorWidth = this.indicator.nativeElement.getBoundingClientRect().width;
        /** @type {?} */
        const indicatorStyle = this.document.defaultView.getComputedStyle(this.indicator.nativeElement);
        /** @type {?} */
        const indicatorMargin = parseFloat(indicatorStyle.marginRight);
        /** @type {?} */
        let leftPadding = 0;
        if (this.indentationDiv) {
            /** @type {?} */
            const indentationStyle = this.document.defaultView.getComputedStyle(this.indentationDiv.nativeElement);
            leftPadding = parseFloat(indentationStyle.paddingLeft);
        }
        /** @type {?} */
        const largestWidth = Math.max(...Array.from(this.nativeElement.children)
            .map((child) => getNodeSizeViaRange(range, child)));
        return largestWidth + indicatorWidth + indicatorMargin + leftPadding;
    }
}
IgxTreeGridCellComponent.decorators = [
    { type: Component, args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                selector: 'igx-tree-grid-cell',
                template: "<ng-template #defaultCell>\n    <div igxTextHighlight style=\"pointer-events: none\" [cssClass]=\"highlightClass\" [activeCssClass]=\"activeHighlightClass\" [groupName]=\"gridID\"\n        [value]=\"formatter ? formatter(value) : column.dataType === 'number' ? (value | igxdecimal: grid.locale) : column.dataType === 'date' ? (value | igxdate: grid.locale) : value\"\n        [row]=\"rowData\" [column]=\"this.column.field\" [containerClass]=\"'igx-grid__td-text'\"\n        class=\"igx-grid__td-text\">{{ formatter ? formatter(value) : column.dataType === 'number' ? (value | igxdecimal:\n        grid.locale) : column.dataType === 'date' ? (value | igxdate: grid.locale) : value }}</div>\n</ng-template>\n<ng-template #inlineEditor  let-cell=\"cell\">\n    <ng-container *ngIf=\"column.dataType === 'string'\">\n        <igx-input-group displayDensity=\"compact\">\n            <input igxInput [(ngModel)]=\"editValue\" [igxFocus]=\"focused\">\n        </igx-input-group>\n    </ng-container>\n    <ng-container *ngIf=\"column.dataType === 'number'\">\n        <igx-input-group displayDensity=\"compact\">\n            <input igxInput [(ngModel)]=\"editValue\" [igxFocus]=\"focused\"  type=\"number\">\n        </igx-input-group>\n    </ng-container>\n    <ng-container *ngIf=\"column.dataType === 'boolean'\">\n        <igx-checkbox (change)=\"editValue = $event.checked\" [value]=\"editValue\" [checked]=\"editValue\" [disableRipple]=\"true\"></igx-checkbox>\n    </ng-container>\n    <ng-container *ngIf=\"column.dataType === 'date'\">\n        <igx-date-picker [style.width.%]=\"100\" [outlet]=\"grid.outletDirective\" mode=\"dropdown\" (onSelection)=\"editValue = $event\"\n        [locale]=\"grid.locale\" [value]=\"editValue\" [igxFocus]=\"focused\" [labelVisibility]=\"false\">\n    </igx-date-picker>\n    </ng-container>\n</ng-template>\n<ng-container *ngIf=\"!inEditMode\">\n    <ng-container *ngIf=\"level > 0\">\n        <div #indentationDiv class=\"igx-grid__tree-cell--padding-level-{{level}}\"></div>\n    </ng-container>\n    <div #indicator\n         *ngIf=\"!isLoading\"\n         class=\"igx-grid__tree-grouping-indicator\"\n         [ngStyle]=\"{'visibility': showIndicator ? 'visible' : 'hidden'}\"\n         (click)=\"toggle($event)\" (focus)=\"onIndicatorFocus()\" tabindex=\"-1\">\n        <igx-icon *ngIf=\"!expanded\" fontSet=\"material\">expand_more</igx-icon>\n        <igx-icon *ngIf=\"expanded\" fontSet=\"material\">expand_less</igx-icon>\n    </div>\n    <div *ngIf=\"isLoading\"\n         (dblclick)=\"onLoadingDblClick($event)\"\n         class=\"igx-grid__tree-loading-indicator\">\n        <ng-container *ngTemplateOutlet=\"grid.rowLoadingIndicatorTemplate ? grid.rowLoadingIndicatorTemplate : defaultLoadingIndicatorTemplate\">\n        </ng-container>\n    </div>\n    <ng-template #defaultLoadingIndicatorTemplate>\n        <igx-circular-bar [indeterminate]=\"true\">\n        </igx-circular-bar>\n    </ng-template>\n</ng-container>\n<ng-container *ngTemplateOutlet=\"template; context: context\">\n</ng-container>\n"
            }] }
];
/** @nocollapse */
IgxTreeGridCellComponent.ctorParameters = () => [
    { type: IgxGridSelectionService },
    { type: IgxGridCRUDService },
    { type: GridBaseAPIService },
    { type: IgxSelectionAPIService },
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
];
IgxTreeGridCellComponent.propDecorators = {
    expanded: [{ type: Input }],
    level: [{ type: Input }],
    showIndicator: [{ type: Input }],
    indicator: [{ type: ViewChild, args: ['indicator', { read: ElementRef, static: false },] }],
    indentationDiv: [{ type: ViewChild, args: ['indentationDiv', { read: ElementRef, static: false },] }],
    defaultContentElement: [{ type: ViewChild, args: ['defaultContentElement', { read: ElementRef, static: false },] }],
    isLoading: [{ type: Input }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    IgxTreeGridCellComponent.prototype.treeGridAPI;
    /**
     * @hidden
     * @type {?}
     */
    IgxTreeGridCellComponent.prototype.expanded;
    /**
     * @hidden
     * @type {?}
     */
    IgxTreeGridCellComponent.prototype.level;
    /**
     * @hidden
     * @type {?}
     */
    IgxTreeGridCellComponent.prototype.showIndicator;
    /** @type {?} */
    IgxTreeGridCellComponent.prototype.indicator;
    /** @type {?} */
    IgxTreeGridCellComponent.prototype.indentationDiv;
    /** @type {?} */
    IgxTreeGridCellComponent.prototype.defaultContentElement;
    /**
     * @hidden
     * @type {?}
     */
    IgxTreeGridCellComponent.prototype.isLoading;
    /**
     * @type {?}
     * @protected
     */
    IgxTreeGridCellComponent.prototype.zone;
    /** @type {?} */
    IgxTreeGridCellComponent.prototype.document;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1jZWxsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lnbml0ZXVpLWFuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvZ3JpZHMvdHJlZS1ncmlkL3RyZWUtY2VsbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsaUJBQWlCLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxFQUFVLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM1SSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUV6RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNwRCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUM5RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFM0MsT0FBTyxFQUFFLHVCQUF1QixFQUFFLGtCQUFrQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFPeEYsTUFBTSxPQUFPLHdCQUF5QixTQUFRLG9CQUFvQjs7Ozs7Ozs7Ozs7SUFHOUQsWUFDWSxnQkFBeUMsRUFDekMsV0FBK0IsRUFDL0IsT0FBcUUsRUFDckUsU0FBaUMsRUFDakMsR0FBc0IsRUFDdEIsT0FBbUIsRUFDVCxJQUFZLEVBQ0csUUFBUTtRQUN6QyxLQUFLLENBQUMsZ0JBQWdCLEVBQUUsV0FBVyxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztRQUYzRCxTQUFJLEdBQUosSUFBSSxDQUFRO1FBQ0csYUFBUSxHQUFSLFFBQVEsQ0FBQTs7OztRQVM3QyxhQUFRLEdBQUcsS0FBSyxDQUFDOzs7O1FBTWpCLFVBQUssR0FBRyxDQUFD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NkNBQzBCOzs7OztJQXJDZCx3Q0FBc0I7O0lBQ3RCLDRDQUFpQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQ2hhbmdlRGV0ZWN0b3JSZWYsIEVsZW1lbnRSZWYsIFZpZXdDaGlsZCwgSW5qZWN0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgTmdab25lLCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJZ3hHcmlkQ2VsbENvbXBvbmVudCB9IGZyb20gJy4uL2NlbGwuY29tcG9uZW50JztcbmltcG9ydCB7IElneFRyZWVHcmlkQVBJU2VydmljZSB9IGZyb20gJy4vdHJlZS1ncmlkLWFwaS5zZXJ2aWNlJztcbmltcG9ydCB7IEdyaWRCYXNlQVBJU2VydmljZSB9IGZyb20gJy4uL2FwaS5zZXJ2aWNlJztcbmltcG9ydCB7IElneFNlbGVjdGlvbkFQSVNlcnZpY2UgfSBmcm9tICcuLi8uLi9jb3JlL3NlbGVjdGlvbic7XG5pbXBvcnQgeyBnZXROb2RlU2l6ZVZpYVJhbmdlIH0gZnJvbSAnLi4vLi4vY29yZS91dGlscyc7XG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBJZ3hHcmlkQmFzZUNvbXBvbmVudCwgSUdyaWREYXRhQmluZGFibGUgfSBmcm9tICcuLi9ncmlkJztcbmltcG9ydCB7IElneEdyaWRTZWxlY3Rpb25TZXJ2aWNlLCBJZ3hHcmlkQ1JVRFNlcnZpY2UgfSBmcm9tICcuLi8uLi9jb3JlL2dyaWQtc2VsZWN0aW9uJztcblxuQENvbXBvbmVudCh7XG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gICAgc2VsZWN0b3I6ICdpZ3gtdHJlZS1ncmlkLWNlbGwnLFxuICAgIHRlbXBsYXRlVXJsOiAndHJlZS1jZWxsLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBJZ3hUcmVlR3JpZENlbGxDb21wb25lbnQgZXh0ZW5kcyBJZ3hHcmlkQ2VsbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgcHJpdmF0ZSB0cmVlR3JpZEFQSTogSWd4VHJlZUdyaWRBUElTZXJ2aWNlO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgICAgICAgICAgc2VsZWN0aW9uU2VydmljZTogSWd4R3JpZFNlbGVjdGlvblNlcnZpY2UsXG4gICAgICAgICAgICAgICAgY3J1ZFNlcnZpY2U6IElneEdyaWRDUlVEU2VydmljZSxcbiAgICAgICAgICAgICAgICBncmlkQVBJOiBHcmlkQmFzZUFQSVNlcnZpY2U8SWd4R3JpZEJhc2VDb21wb25lbnQgJiBJR3JpZERhdGFCaW5kYWJsZT4sXG4gICAgICAgICAgICAgICAgc2VsZWN0aW9uOiBJZ3hTZWxlY3Rpb25BUElTZXJ2aWNlLFxuICAgICAgICAgICAgICAgIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgICAgICAgICAgICAgZWxlbWVudDogRWxlbWVudFJlZixcbiAgICAgICAgICAgICAgICBwcm90ZWN0ZWQgem9uZTogTmdab25lLFxuICAgICAgICAgICAgICAgIEBJbmplY3QoRE9DVU1FTlQpIHB1YmxpYyBkb2N1bWVudCkge1xuICAgICAgICBzdXBlcihzZWxlY3Rpb25TZXJ2aWNlLCBjcnVkU2VydmljZSwgZ3JpZEFQSSwgc2VsZWN0aW9uLCBjZHIsIGVsZW1lbnQsIHpvbmUpO1xuICAgICAgICB0aGlzLnRyZWVHcmlkQVBJID0gPElneFRyZWVHcmlkQVBJU2VydmljZT5ncmlkQVBJO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIGV4cGFuZGVkID0gZmFsc2U7XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBsZXZlbCA9IDA7XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBzaG93SW5kaWNhdG9yID0gZmFsc2U7XG5cbiAgICBAVmlld0NoaWxkKCdpbmRpY2F0b3InLCB7IHJlYWQ6IEVsZW1lbnRSZWYsIHN0YXRpYzogZmFsc2UgfSlcbiAgICBwdWJsaWMgaW5kaWNhdG9yOiBFbGVtZW50UmVmO1xuXG4gICAgQFZpZXdDaGlsZCgnaW5kZW50YXRpb25EaXYnLCB7IHJlYWQ6IEVsZW1lbnRSZWYsIHN0YXRpYzogZmFsc2UgfSlcbiAgICBwdWJsaWMgaW5kZW50YXRpb25EaXY6IEVsZW1lbnRSZWY7XG5cbiAgICBAVmlld0NoaWxkKCdkZWZhdWx0Q29udGVudEVsZW1lbnQnLCB7IHJlYWQ6IEVsZW1lbnRSZWYsIHN0YXRpYzogZmFsc2UgfSlcbiAgICBwdWJsaWMgZGVmYXVsdENvbnRlbnRFbGVtZW50OiBFbGVtZW50UmVmO1xuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGlzTG9hZGluZzogYm9vbGVhbjtcblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgc3VwZXIubmdPbkluaXQoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIHRvZ2dsZShldmVudDogRXZlbnQpIHtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIHRoaXMudHJlZUdyaWRBUEkudHJpZ2dlcl9yb3dfZXhwYW5zaW9uX3RvZ2dsZSh0aGlzLnJvdy50cmVlUm93LCAhdGhpcy5yb3cuZXhwYW5kZWQsIGV2ZW50LCB0aGlzLnZpc2libGVDb2x1bW5JbmRleCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyBvbkluZGljYXRvckZvY3VzKCkge1xuICAgICAgICB0aGlzLmdyaWRBUEkuc3VibWl0X3ZhbHVlKCk7XG4gICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgb25Mb2FkaW5nRGJsQ2xpY2soZXZlbnQ6IEV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgY2FsY3VsYXRlU2l6ZVRvRml0KHJhbmdlOiBhbnkpOiBudW1iZXIge1xuICAgICAgICBjb25zdCBpbmRpY2F0b3JXaWR0aCA9IHRoaXMuaW5kaWNhdG9yLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGg7XG4gICAgICAgIGNvbnN0IGluZGljYXRvclN0eWxlID0gdGhpcy5kb2N1bWVudC5kZWZhdWx0Vmlldy5nZXRDb21wdXRlZFN0eWxlKHRoaXMuaW5kaWNhdG9yLm5hdGl2ZUVsZW1lbnQpO1xuICAgICAgICBjb25zdCBpbmRpY2F0b3JNYXJnaW4gPSBwYXJzZUZsb2F0KGluZGljYXRvclN0eWxlLm1hcmdpblJpZ2h0KTtcbiAgICAgICAgbGV0IGxlZnRQYWRkaW5nID0gMDtcbiAgICAgICAgaWYgKHRoaXMuaW5kZW50YXRpb25EaXYpIHtcbiAgICAgICAgICAgIGNvbnN0IGluZGVudGF0aW9uU3R5bGUgPSB0aGlzLmRvY3VtZW50LmRlZmF1bHRWaWV3LmdldENvbXB1dGVkU3R5bGUodGhpcy5pbmRlbnRhdGlvbkRpdi5uYXRpdmVFbGVtZW50KTtcbiAgICAgICAgICAgIGxlZnRQYWRkaW5nID0gcGFyc2VGbG9hdChpbmRlbnRhdGlvblN0eWxlLnBhZGRpbmdMZWZ0KTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBsYXJnZXN0V2lkdGggPSBNYXRoLm1heCguLi5BcnJheS5mcm9tKHRoaXMubmF0aXZlRWxlbWVudC5jaGlsZHJlbilcbiAgICAgICAgICAgIC5tYXAoKGNoaWxkKSA9PiBnZXROb2RlU2l6ZVZpYVJhbmdlKHJhbmdlLCBjaGlsZCkpKTtcbiAgICAgICAgcmV0dXJuIGxhcmdlc3RXaWR0aCArIGluZGljYXRvcldpZHRoICsgaW5kaWNhdG9yTWFyZ2luICsgbGVmdFBhZGRpbmc7XG4gICAgfVxufVxuIl19