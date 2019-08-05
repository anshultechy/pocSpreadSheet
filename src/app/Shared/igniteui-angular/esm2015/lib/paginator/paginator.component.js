/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Component, Input, Output, NgModule, Optional, Inject, EventEmitter, HostBinding } from '@angular/core';
import { CurrentResourceStrings } from '../core/i18n/resources';
import { DisplayDensityToken, DisplayDensityBase, DisplayDensity } from '../core/displayDensity';
import { IgxSelectModule } from '../select/index';
import { IgxIconModule } from '../icon/index';
import { IgxButtonModule } from '../directives/button/button.directive';
import { IgxRippleModule } from '../directives/ripple/ripple.directive';
export class IgxPaginatorComponent extends DisplayDensityBase {
    /**
     * @param {?} _displayDensityOptions
     */
    constructor(_displayDensityOptions) {
        super(_displayDensityOptions);
        this._displayDensityOptions = _displayDensityOptions;
        this._page = 0;
        this.defaultSelectValues = [5, 10, 15, 25, 50, 100, 500];
        this._perPage = 15;
        /**
         * An \@Input property that sets if the pager in the paginator should be enabled.
         * ```html
         * <igx-paginator [pagerEnabled]="true"></igx-paginator>
         * ```
         * \@memberof IgxPaginatorComponent
         */
        this.pagerEnabled = true;
        /**
         * An \@Input property that sets if the pager in the paginator should be hidden.
         * ```html
         * <igx-paginator [pagerHidden]="true"></igx-paginator>
         * ```
         * \@memberof IgxPaginatorComponent
         */
        this.pagerHidden = false;
        /**
         * An \@Input property that sets if the dropdown in the paginator should be enabled.
         * ```html
         * <igx-paginator [dropdownEnabled]="true"></igx-paginator>
         * ```
         * \@memberof IgxPaginatorComponent
         */
        this.dropdownEnabled = true;
        /**
         * An \@Input property that sets if the dropdown in the paginator should be hidden.
         * ```html
         * <igx-paginator [dropdownHidden]="true"></igx-paginator>
         * ```
         * \@memberof IgxPaginatorComponent
         */
        this.dropdownHidden = false;
        /**
         * An \@Input property, sets number of label of the select.
         * The default is 'Items per page' localized string.
         * ```html
         * <igx-paginator label="My custom label"></igx-paginator>
         * ```
         * \@memberof IgxPaginatorComponent
         */
        this.selectLabel = CurrentResourceStrings.GridResStrings.igx_grid_paginator_label;
        /**
         * An event that is emitted when the select in the `IgxPaginatorComponent` changes its value.
         */
        this.perPageChange = new EventEmitter();
        /**
         * An event that is emitted when the paginating is used.
         */
        this.pageChange = new EventEmitter();
    }
    /**
     * Sets the class of the IgxPaginatorComponent based
     * on the provided displayDensity.
     * @return {?}
     */
    get classCosy() {
        return this.displayDensity === DisplayDensity.cosy;
    }
    /**
     * @return {?}
     */
    get classCompact() {
        return this.displayDensity === DisplayDensity.compact;
    }
    /**
     * @return {?}
     */
    get classComfortable() {
        return this.displayDensity === DisplayDensity.comfortable;
    }
    /**
     * An \@Input property, sets current page of the `IgxPaginatorComponent`.
     * The default is 0.
     * ```typescript
     * let page = this.paginator.page;
     * ```
     * \@memberof IgxPaginatorComponent
     * @return {?}
     */
    get page() {
        return this._page;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set page(value) {
        this._page = value;
        this.pageChange.emit(this._page);
    }
    /**
     * An \@Input property, sets number of visible items per page in the `IgxPaginatorComponent`.
     * The default is 15.
     * ```typescript
     * let itemsPerPage = this.paginator.perPage;
     * ```
     * \@memberof IgxPaginatorComponent
     * @return {?}
     */
    get perPage() {
        return this._perPage;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set perPage(value) {
        this._perPage = Number(value);
        this.perPageChange.emit(this._perPage);
        this._selectOptions = this.sortUniqueOptions(this.defaultSelectValues, this._perPage);
        this.totalPages = Math.ceil(this.totalRecords / this._perPage);
    }
    /**
     * An \@Input property that sets the total records.
     * ```typescript
     * let totalRecords = this.paginator.totalRecords;
     * ```
     * \@memberof IgxPaginatorComponent
     * @return {?}
     */
    get totalRecords() {
        return this._totalRecords;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set totalRecords(value) {
        this._totalRecords = value;
        this.totalPages = Math.ceil(this.totalRecords / this.perPage);
    }
    /**
     * An \@Input property that sets custom options in the select of the paginator
     * ```typescript
     * let options = this.paginator.selectOptions;
     * ```
     * \@memberof IgxPaginatorComponent
     * @return {?}
     */
    get selectOptions() {
        return this._selectOptions;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set selectOptions(value) {
        this._selectOptions = this.sortUniqueOptions(value, this._perPage);
        this.defaultSelectValues = [...this._selectOptions];
    }
    /**
     * Returns if the current page is the last page.
     * ```typescript
     * const lastPage = this.paginator.isLastPage;
     * ```
     * @return {?}
     */
    get isLastPage() {
        return this.page + 1 >= this.totalPages;
    }
    /**
     * Returns if the current page is the first page.
     * ```typescript
     * const lastPage = this.paginator.isFirstPage;
     * ```
     * @return {?}
     */
    get isFirstPage() {
        return this.page === 0;
    }
    /**
     * @private
     * @param {?} values
     * @param {?} newOption
     * @return {?}
     */
    sortUniqueOptions(values, newOption) {
        return Array.from(new Set([...values, newOption])).sort((a, b) => a - b);
    }
    /**
     * @return {?}
     */
    paginatorSelectDisplayDensity() {
        if (this.displayDensity === DisplayDensity.comfortable) {
            return DisplayDensity.cosy;
        }
        return DisplayDensity.compact;
    }
    /**
     * Goes to the next page of the `IgxPaginatorComponent`, if the paginator is not already at the last page.
     * ```typescript
     * this.paginator.nextPage();
     * ```
     * \@memberof IgxPaginatorComponent
     * @return {?}
     */
    nextPage() {
        if (!this.isLastPage) {
            this.page += 1;
        }
    }
    /**
     * Goes to the previous page of the `IgxPaginatorComponent`, if the paginator is not already at the first page.
     * ```typescript
     * this.paginator.previousPage();
     * ```
     * \@memberof IgxPaginatorComponent
     * @return {?}
     */
    previousPage() {
        if (!this.isFirstPage) {
            this.page -= 1;
        }
    }
    /**
     * Goes to the desired page index.
     * ```typescript
     * this.pagiantor.paginate(1);
     * ```
     * \@memberof IgxPaginatorComponent
     * @param {?} val
     * @return {?}
     */
    paginate(val) {
        if (val < 0 || val > this.totalPages - 1) {
            return;
        }
        this.page = val;
    }
}
IgxPaginatorComponent.decorators = [
    { type: Component, args: [{
                selector: 'igx-paginator',
                template: "<div class=\"igx-grid-paginator__select\" [hidden]=\"dropdownHidden\">\n    <label class=\"igx-grid-paginator__label\">{{ selectLabel }}</label>\n    <div class=\"igx-grid-paginator__select-input\">\n        <igx-select [(ngModel)]=\"perPage\" [displayDensity]=\"paginatorSelectDisplayDensity()\" type=\"border\"\n            [disabled]=\"!dropdownEnabled\">\n            <igx-select-item [value]=\"val\" *ngFor=\"let val of selectOptions\">\n                {{val}}\n            </igx-select-item>\n        </igx-select>\n    </div>\n</div>\n<div class=\"igx-grid-paginator__pager\" [hidden]=\"pagerHidden\">\n    <button [disabled]=\"isFirstPage || !pagerEnabled ? true: false\" (click)=\"paginate(0)\" igxButton=\"icon\" igxRipple igxRippleCentered=\"true\">\n        <igx-icon fontSet=\"material\">first_page</igx-icon>\n    </button>\n    <button [disabled]=\"isFirstPage || !pagerEnabled ? true: false\" (click)=\"previousPage()\" igxButton=\"icon\" igxRipple igxRippleCentered=\"true\">\n        <igx-icon fontSet=\"material\">chevron_left</igx-icon>\n    </button>\n    <span>{{ page + 1 }} of {{ totalPages }}</span>\n    <button [disabled]=\"isLastPage || !pagerEnabled ? true: false\" (click)=\"nextPage()\" igxRipple igxRippleCentered=\"true\" igxButton=\"icon\">\n        <igx-icon fontSet=\"material\">chevron_right</igx-icon>\n    </button>\n    <button [disabled]=\"isLastPage || !pagerEnabled ? true: false\" (click)=\"paginate(totalPages - 1)\" igxButton=\"icon\" igxRipple\n        igxRippleCentered=\"true\">\n        <igx-icon fontSet=\"material\">last_page</igx-icon>\n    </button>\n</div>"
            }] }
];
/** @nocollapse */
IgxPaginatorComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [DisplayDensityToken,] }] }
];
IgxPaginatorComponent.propDecorators = {
    classCosy: [{ type: HostBinding, args: ['class.igx-grid-paginator--cosy',] }],
    classCompact: [{ type: HostBinding, args: ['class.igx-grid-paginator--compact',] }],
    classComfortable: [{ type: HostBinding, args: ['class.igx-grid-paginator',] }],
    page: [{ type: Input }],
    perPage: [{ type: Input }],
    totalRecords: [{ type: Input }],
    selectOptions: [{ type: Input }],
    pagerEnabled: [{ type: Input }],
    pagerHidden: [{ type: Input }],
    dropdownEnabled: [{ type: Input }],
    dropdownHidden: [{ type: Input }],
    selectLabel: [{ type: Input }],
    perPageChange: [{ type: Output }],
    pageChange: [{ type: Output }]
};
if (false) {
    /**
     * Total pages calculated from totalRecords and perPage
     * @type {?}
     */
    IgxPaginatorComponent.prototype.totalPages;
    /**
     * @type {?}
     * @protected
     */
    IgxPaginatorComponent.prototype._page;
    /**
     * @type {?}
     * @protected
     */
    IgxPaginatorComponent.prototype._totalRecords;
    /**
     * @type {?}
     * @protected
     */
    IgxPaginatorComponent.prototype._selectOptions;
    /**
     * @type {?}
     * @private
     */
    IgxPaginatorComponent.prototype.defaultSelectValues;
    /**
     * @type {?}
     * @protected
     */
    IgxPaginatorComponent.prototype._perPage;
    /**
     * An \@Input property that sets if the pager in the paginator should be enabled.
     * ```html
     * <igx-paginator [pagerEnabled]="true"></igx-paginator>
     * ```
     * \@memberof IgxPaginatorComponent
     * @type {?}
     */
    IgxPaginatorComponent.prototype.pagerEnabled;
    /**
     * An \@Input property that sets if the pager in the paginator should be hidden.
     * ```html
     * <igx-paginator [pagerHidden]="true"></igx-paginator>
     * ```
     * \@memberof IgxPaginatorComponent
     * @type {?}
     */
    IgxPaginatorComponent.prototype.pagerHidden;
    /**
     * An \@Input property that sets if the dropdown in the paginator should be enabled.
     * ```html
     * <igx-paginator [dropdownEnabled]="true"></igx-paginator>
     * ```
     * \@memberof IgxPaginatorComponent
     * @type {?}
     */
    IgxPaginatorComponent.prototype.dropdownEnabled;
    /**
     * An \@Input property that sets if the dropdown in the paginator should be hidden.
     * ```html
     * <igx-paginator [dropdownHidden]="true"></igx-paginator>
     * ```
     * \@memberof IgxPaginatorComponent
     * @type {?}
     */
    IgxPaginatorComponent.prototype.dropdownHidden;
    /**
     * An \@Input property, sets number of label of the select.
     * The default is 'Items per page' localized string.
     * ```html
     * <igx-paginator label="My custom label"></igx-paginator>
     * ```
     * \@memberof IgxPaginatorComponent
     * @type {?}
     */
    IgxPaginatorComponent.prototype.selectLabel;
    /**
     * An event that is emitted when the select in the `IgxPaginatorComponent` changes its value.
     * @type {?}
     */
    IgxPaginatorComponent.prototype.perPageChange;
    /**
     * An event that is emitted when the paginating is used.
     * @type {?}
     */
    IgxPaginatorComponent.prototype.pageChange;
    /**
     * @type {?}
     * @protected
     */
    IgxPaginatorComponent.prototype._displayDensityOptions;
}
export class IgxPaginatorModule {
}
IgxPaginatorModule.decorators = [
    { type: NgModule, args: [{
                declarations: [IgxPaginatorComponent],
                exports: [IgxPaginatorComponent],
                imports: [CommonModule, IgxSelectModule, FormsModule, IgxIconModule, IgxButtonModule, IgxRippleModule]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lnbml0ZXVpLWFuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvcGFnaW5hdG9yL3BhZ2luYXRvci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEgsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDaEUsT0FBTyxFQUEwQixtQkFBbUIsRUFBRSxrQkFBa0IsRUFBRSxjQUFjLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN6SCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDbEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDeEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBTXhFLE1BQU0sT0FBTyxxQkFBc0IsU0FBUSxrQkFBa0I7Ozs7SUFvS3pELFlBQStELHNCQUE4QztRQUV6RyxLQUFLLENBQUMsc0JBQXNCLENBQUMsQ0FBQztRQUY2QiwyQkFBc0IsR0FBdEIsc0JBQXNCLENBQXdCO1FBOUpuRyxVQUFLLEdBQUcsQ0FBQyxDQUFDO1FBR1osd0JBQW1CLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNsRCxhQUFRLEdB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O21CQWF0QyxLQUFLO3NCQWtCTCxLQUFLOzJCQW1CTCxLQUFLOzRCQWlCTCxLQUFLOzJCQWdCTCxLQUFLOzBCQVVMLEtBQUs7OEJBVUwsS0FBSzs2QkFVTCxLQUFLOzBCQVdMLEtBQUs7NEJBTUwsTUFBTTt5QkFLTixNQUFNOzs7Ozs7O0lBNUpQLDJDQUEwQjs7Ozs7SUFDMUIsc0NBQW9COzs7OztJQUNwQiw4Q0FBZ0M7Ozs7O0lBQ2hDLCtDQUF5Qjs7Ozs7SUFDekIsb0RBQTREOzs7OztJQUM1RCx5Q0FBd0I7Ozs7Ozs7OztJQW1HeEIsNkNBQzJCOzs7Ozs7Ozs7SUFTM0IsNENBQzJCOzs7Ozs7Ozs7SUFTM0IsZ0RBQzhCOzs7Ozs7Ozs7SUFTOUIsK0NBQzhCOzs7Ozs7Ozs7O0lBVTlCLDRDQUNvRjs7Ozs7SUFLcEYsOENBQ2tEOzs7OztJQUlsRCwyQ0FDK0M7Ozs7O0lBRW5DLHVEQUFpRzs7QUFnRmpILE1BQU0sT0FBTyxrQkFBa0I7OztZQUw5QixRQUFRLFNBQUM7Z0JBQ04sWUFBWSxFQUFFLENBQUMscUJBQXFCLENBQUM7Z0JBQ3JDLE9BQU8sRUFBRSxDQUFDLHFCQUFxQixDQUFDO2dCQUNoQyxPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsZUFBZSxFQUFFLFdBQVcsRUFBRSxhQUFhLEVBQUUsZUFBZSxFQUFFLGVBQWUsQ0FBQzthQUN6RyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgTmdNb2R1bGUsIE9wdGlvbmFsLCBJbmplY3QsIEV2ZW50RW1pdHRlciwgSG9zdEJpbmRpbmcgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEN1cnJlbnRSZXNvdXJjZVN0cmluZ3MgfSBmcm9tICcuLi9jb3JlL2kxOG4vcmVzb3VyY2VzJztcbmltcG9ydCB7IElEaXNwbGF5RGVuc2l0eU9wdGlvbnMsIERpc3BsYXlEZW5zaXR5VG9rZW4sIERpc3BsYXlEZW5zaXR5QmFzZSwgRGlzcGxheURlbnNpdHkgfSBmcm9tICcuLi9jb3JlL2Rpc3BsYXlEZW5zaXR5JztcbmltcG9ydCB7IElneFNlbGVjdE1vZHVsZSB9IGZyb20gJy4uL3NlbGVjdC9pbmRleCc7XG5pbXBvcnQgeyBJZ3hJY29uTW9kdWxlIH0gZnJvbSAnLi4vaWNvbi9pbmRleCc7XG5pbXBvcnQgeyBJZ3hCdXR0b25Nb2R1bGUgfSBmcm9tICcuLi9kaXJlY3RpdmVzL2J1dHRvbi9idXR0b24uZGlyZWN0aXZlJztcbmltcG9ydCB7IElneFJpcHBsZU1vZHVsZSB9IGZyb20gJy4uL2RpcmVjdGl2ZXMvcmlwcGxlL3JpcHBsZS5kaXJlY3RpdmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2lneC1wYWdpbmF0b3InLFxuICAgIHRlbXBsYXRlVXJsOiAncGFnaW5hdG9yLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgSWd4UGFnaW5hdG9yQ29tcG9uZW50IGV4dGVuZHMgRGlzcGxheURlbnNpdHlCYXNlIHtcblxuICAgIC8qKlxuICAgICAqIFRvdGFsIHBhZ2VzIGNhbGN1bGF0ZWQgZnJvbSB0b3RhbFJlY29yZHMgYW5kIHBlclBhZ2VcbiAgICAgKi9cbiAgICBwdWJsaWMgdG90YWxQYWdlczogbnVtYmVyO1xuICAgIHByb3RlY3RlZCBfcGFnZSA9IDA7XG4gICAgcHJvdGVjdGVkIF90b3RhbFJlY29yZHM6IG51bWJlcjtcbiAgICBwcm90ZWN0ZWQgX3NlbGVjdE9wdGlvbnM7XG4gICAgcHJpdmF0ZSBkZWZhdWx0U2VsZWN0VmFsdWVzID0gWzUsIDEwLCAxNSwgMjUsIDUwLCAxMDAsIDUwMF07XG4gICAgcHJvdGVjdGVkIF9wZXJQYWdlID0gMTU7XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBjbGFzcyBvZiB0aGUgSWd4UGFnaW5hdG9yQ29tcG9uZW50IGJhc2VkXG4gICAgICogb24gdGhlIHByb3ZpZGVkIGRpc3BsYXlEZW5zaXR5LlxuICAgICAqL1xuICAgIEBIb3N0QmluZGluZygnY2xhc3MuaWd4LWdyaWQtcGFnaW5hdG9yLS1jb3N5JylcbiAgICBwdWJsaWMgZ2V0IGNsYXNzQ29zeSgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGlzcGxheURlbnNpdHkgPT09IERpc3BsYXlEZW5zaXR5LmNvc3k7XG4gICAgfVxuXG4gICAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pZ3gtZ3JpZC1wYWdpbmF0b3ItLWNvbXBhY3QnKVxuICAgIHB1YmxpYyBnZXQgY2xhc3NDb21wYWN0KCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5kaXNwbGF5RGVuc2l0eSA9PT0gRGlzcGxheURlbnNpdHkuY29tcGFjdDtcbiAgICB9XG5cbiAgICBASG9zdEJpbmRpbmcoJ2NsYXNzLmlneC1ncmlkLXBhZ2luYXRvcicpXG4gICAgcHVibGljIGdldCBjbGFzc0NvbWZvcnRhYmxlKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5kaXNwbGF5RGVuc2l0eSA9PT0gRGlzcGxheURlbnNpdHkuY29tZm9ydGFibGU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAqIEFuIEBJbnB1dCBwcm9wZXJ0eSwgc2V0cyBjdXJyZW50IHBhZ2Ugb2YgdGhlIGBJZ3hQYWdpbmF0b3JDb21wb25lbnRgLlxuICAgKiBUaGUgZGVmYXVsdCBpcyAwLlxuICAgKiBgYGB0eXBlc2NyaXB0XG4gICAqIGxldCBwYWdlID0gdGhpcy5wYWdpbmF0b3IucGFnZTtcbiAgICogYGBgXG4gICAqIEBtZW1iZXJvZiBJZ3hQYWdpbmF0b3JDb21wb25lbnRcbiAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZ2V0IHBhZ2UoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wYWdlO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgcGFnZSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX3BhZ2UgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5wYWdlQ2hhbmdlLmVtaXQodGhpcy5fcGFnZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAqIEFuIEBJbnB1dCBwcm9wZXJ0eSwgc2V0cyBudW1iZXIgb2YgdmlzaWJsZSBpdGVtcyBwZXIgcGFnZSBpbiB0aGUgYElneFBhZ2luYXRvckNvbXBvbmVudGAuXG4gICAqIFRoZSBkZWZhdWx0IGlzIDE1LlxuICAgKiBgYGB0eXBlc2NyaXB0XG4gICAqIGxldCBpdGVtc1BlclBhZ2UgPSB0aGlzLnBhZ2luYXRvci5wZXJQYWdlO1xuICAgKiBgYGBcbiAgICogQG1lbWJlcm9mIElneFBhZ2luYXRvckNvbXBvbmVudFxuICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBnZXQgcGVyUGFnZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BlclBhZ2U7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBwZXJQYWdlKHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fcGVyUGFnZSA9IE51bWJlcih2YWx1ZSk7XG4gICAgICAgIHRoaXMucGVyUGFnZUNoYW5nZS5lbWl0KHRoaXMuX3BlclBhZ2UpO1xuICAgICAgICB0aGlzLl9zZWxlY3RPcHRpb25zID0gdGhpcy5zb3J0VW5pcXVlT3B0aW9ucyh0aGlzLmRlZmF1bHRTZWxlY3RWYWx1ZXMsIHRoaXMuX3BlclBhZ2UpO1xuICAgICAgICB0aGlzLnRvdGFsUGFnZXMgPSBNYXRoLmNlaWwodGhpcy50b3RhbFJlY29yZHMgLyB0aGlzLl9wZXJQYWdlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIEFuIEBJbnB1dCBwcm9wZXJ0eSB0aGF0IHNldHMgdGhlIHRvdGFsIHJlY29yZHMuXG4gICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgKiBsZXQgdG90YWxSZWNvcmRzID0gdGhpcy5wYWdpbmF0b3IudG90YWxSZWNvcmRzO1xuICAgICogYGBgXG4gICAgKiBAbWVtYmVyb2YgSWd4UGFnaW5hdG9yQ29tcG9uZW50XG4gICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBnZXQgdG90YWxSZWNvcmRzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fdG90YWxSZWNvcmRzO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgdG90YWxSZWNvcmRzKHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fdG90YWxSZWNvcmRzID0gdmFsdWU7XG4gICAgICAgIHRoaXMudG90YWxQYWdlcyA9IE1hdGguY2VpbCh0aGlzLnRvdGFsUmVjb3JkcyAvIHRoaXMucGVyUGFnZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBBbiBASW5wdXQgcHJvcGVydHkgdGhhdCBzZXRzIGN1c3RvbSBvcHRpb25zIGluIHRoZSBzZWxlY3Qgb2YgdGhlIHBhZ2luYXRvclxuICAgICogYGBgdHlwZXNjcmlwdFxuICAgICogbGV0IG9wdGlvbnMgPSB0aGlzLnBhZ2luYXRvci5zZWxlY3RPcHRpb25zO1xuICAgICogYGBgXG4gICAgKiBAbWVtYmVyb2YgSWd4UGFnaW5hdG9yQ29tcG9uZW50XG4gICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBnZXQgc2VsZWN0T3B0aW9ucygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NlbGVjdE9wdGlvbnM7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBzZWxlY3RPcHRpb25zKHZhbHVlOiBBcnJheTxudW1iZXI+KSB7XG4gICAgICAgIHRoaXMuX3NlbGVjdE9wdGlvbnMgPSB0aGlzLnNvcnRVbmlxdWVPcHRpb25zKHZhbHVlLCB0aGlzLl9wZXJQYWdlKTtcbiAgICAgICAgdGhpcy5kZWZhdWx0U2VsZWN0VmFsdWVzID0gWy4uLnRoaXMuX3NlbGVjdE9wdGlvbnNdO1xuICAgIH1cbiAgICAvKipcbiAgICAqIEFuIEBJbnB1dCBwcm9wZXJ0eSB0aGF0IHNldHMgaWYgdGhlIHBhZ2VyIGluIHRoZSBwYWdpbmF0b3Igc2hvdWxkIGJlIGVuYWJsZWQuXG4gICAgKiBgYGBodG1sXG4gICAgKiA8aWd4LXBhZ2luYXRvciBbcGFnZXJFbmFibGVkXT1cInRydWVcIj48L2lneC1wYWdpbmF0b3I+XG4gICAgKiBgYGBcbiAgICAqIEBtZW1iZXJvZiBJZ3hQYWdpbmF0b3JDb21wb25lbnRcbiAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHBhZ2VyRW5hYmxlZCA9IHRydWU7XG5cbiAgICAvKipcbiAgICAqIEFuIEBJbnB1dCBwcm9wZXJ0eSB0aGF0IHNldHMgaWYgdGhlIHBhZ2VyIGluIHRoZSBwYWdpbmF0b3Igc2hvdWxkIGJlIGhpZGRlbi5cbiAgICAqIGBgYGh0bWxcbiAgICAqIDxpZ3gtcGFnaW5hdG9yIFtwYWdlckhpZGRlbl09XCJ0cnVlXCI+PC9pZ3gtcGFnaW5hdG9yPlxuICAgICogYGBgXG4gICAgKiBAbWVtYmVyb2YgSWd4UGFnaW5hdG9yQ29tcG9uZW50XG4gICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBwYWdlckhpZGRlbiA9IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgKiBBbiBASW5wdXQgcHJvcGVydHkgdGhhdCBzZXRzIGlmIHRoZSBkcm9wZG93biBpbiB0aGUgcGFnaW5hdG9yIHNob3VsZCBiZSBlbmFibGVkLlxuICAgICogYGBgaHRtbFxuICAgICogPGlneC1wYWdpbmF0b3IgW2Ryb3Bkb3duRW5hYmxlZF09XCJ0cnVlXCI+PC9pZ3gtcGFnaW5hdG9yPlxuICAgICogYGBgXG4gICAgKiBAbWVtYmVyb2YgSWd4UGFnaW5hdG9yQ29tcG9uZW50XG4gICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBkcm9wZG93bkVuYWJsZWQgPSB0cnVlO1xuXG4gICAgLyoqXG4gICAgKiBBbiBASW5wdXQgcHJvcGVydHkgdGhhdCBzZXRzIGlmIHRoZSBkcm9wZG93biBpbiB0aGUgcGFnaW5hdG9yIHNob3VsZCBiZSBoaWRkZW4uXG4gICAgKiBgYGBodG1sXG4gICAgKiA8aWd4LXBhZ2luYXRvciBbZHJvcGRvd25IaWRkZW5dPVwidHJ1ZVwiPjwvaWd4LXBhZ2luYXRvcj5cbiAgICAqIGBgYFxuICAgICogQG1lbWJlcm9mIElneFBhZ2luYXRvckNvbXBvbmVudFxuICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZHJvcGRvd25IaWRkZW4gPSBmYWxzZTtcblxuICAgIC8qKlxuICAgICogQW4gQElucHV0IHByb3BlcnR5LCBzZXRzIG51bWJlciBvZiBsYWJlbCBvZiB0aGUgc2VsZWN0LlxuICAgICogVGhlIGRlZmF1bHQgaXMgJ0l0ZW1zIHBlciBwYWdlJyBsb2NhbGl6ZWQgc3RyaW5nLlxuICAgICogYGBgaHRtbFxuICAgICogPGlneC1wYWdpbmF0b3IgbGFiZWw9XCJNeSBjdXN0b20gbGFiZWxcIj48L2lneC1wYWdpbmF0b3I+XG4gICAgKiBgYGBcbiAgICAqIEBtZW1iZXJvZiBJZ3hQYWdpbmF0b3JDb21wb25lbnRcbiAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHNlbGVjdExhYmVsID0gQ3VycmVudFJlc291cmNlU3RyaW5ncy5HcmlkUmVzU3RyaW5ncy5pZ3hfZ3JpZF9wYWdpbmF0b3JfbGFiZWw7XG5cbiAgICAvKipcbiAgICAgKkFuIGV2ZW50IHRoYXQgaXMgZW1pdHRlZCB3aGVuIHRoZSBzZWxlY3QgaW4gdGhlIGBJZ3hQYWdpbmF0b3JDb21wb25lbnRgIGNoYW5nZXMgaXRzIHZhbHVlLlxuICAgICovXG4gICAgQE91dHB1dCgpXG4gICAgcHVibGljIHBlclBhZ2VDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcbiAgICAvKipcbiAgICAgKkFuIGV2ZW50IHRoYXQgaXMgZW1pdHRlZCB3aGVuIHRoZSBwYWdpbmF0aW5nIGlzIHVzZWQuXG4gICAgKi9cbiAgICBAT3V0cHV0KClcbiAgICBwdWJsaWMgcGFnZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuXG4gICAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgQEluamVjdChEaXNwbGF5RGVuc2l0eVRva2VuKSBwcm90ZWN0ZWQgX2Rpc3BsYXlEZW5zaXR5T3B0aW9uczogSURpc3BsYXlEZW5zaXR5T3B0aW9uc1xuICAgICkge1xuICAgICAgICBzdXBlcihfZGlzcGxheURlbnNpdHlPcHRpb25zKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGlmIHRoZSBjdXJyZW50IHBhZ2UgaXMgdGhlIGxhc3QgcGFnZS5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogY29uc3QgbGFzdFBhZ2UgPSB0aGlzLnBhZ2luYXRvci5pc0xhc3RQYWdlO1xuICAgICAqIGBgYFxuICAgICAqL1xuICAgIGdldCBpc0xhc3RQYWdlKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5wYWdlICsgMSA+PSB0aGlzLnRvdGFsUGFnZXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBpZiB0aGUgY3VycmVudCBwYWdlIGlzIHRoZSBmaXJzdCBwYWdlLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBjb25zdCBsYXN0UGFnZSA9IHRoaXMucGFnaW5hdG9yLmlzRmlyc3RQYWdlO1xuICAgICAqIGBgYFxuICAgICAqL1xuICAgIGdldCBpc0ZpcnN0UGFnZSgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGFnZSA9PT0gMDtcbiAgICB9XG5cbiAgICBwcml2YXRlIHNvcnRVbmlxdWVPcHRpb25zKHZhbHVlczogQXJyYXk8bnVtYmVyPiwgbmV3T3B0aW9uOiBudW1iZXIpOiBudW1iZXJbXSB7XG4gICAgICAgIHJldHVybiBBcnJheS5mcm9tKG5ldyBTZXQoWy4uLnZhbHVlcywgbmV3T3B0aW9uXSkpLnNvcnQoKGEsIGIpID0+IGEgLSBiKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcGFnaW5hdG9yU2VsZWN0RGlzcGxheURlbnNpdHkoKTogc3RyaW5nIHtcbiAgICAgICAgaWYgKHRoaXMuZGlzcGxheURlbnNpdHkgPT09IERpc3BsYXlEZW5zaXR5LmNvbWZvcnRhYmxlKSB7XG4gICAgICAgICAgICByZXR1cm4gRGlzcGxheURlbnNpdHkuY29zeTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gRGlzcGxheURlbnNpdHkuY29tcGFjdDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR29lcyB0byB0aGUgbmV4dCBwYWdlIG9mIHRoZSBgSWd4UGFnaW5hdG9yQ29tcG9uZW50YCwgaWYgdGhlIHBhZ2luYXRvciBpcyBub3QgYWxyZWFkeSBhdCB0aGUgbGFzdCBwYWdlLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiB0aGlzLnBhZ2luYXRvci5uZXh0UGFnZSgpO1xuICAgICAqIGBgYFxuXHQgKiBAbWVtYmVyb2YgSWd4UGFnaW5hdG9yQ29tcG9uZW50XG4gICAgICovXG4gICAgcHVibGljIG5leHRQYWdlKCk6IHZvaWQge1xuICAgICAgICBpZiAoIXRoaXMuaXNMYXN0UGFnZSkge1xuICAgICAgICAgICAgdGhpcy5wYWdlICs9IDE7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogR29lcyB0byB0aGUgcHJldmlvdXMgcGFnZSBvZiB0aGUgYElneFBhZ2luYXRvckNvbXBvbmVudGAsIGlmIHRoZSBwYWdpbmF0b3IgaXMgbm90IGFscmVhZHkgYXQgdGhlIGZpcnN0IHBhZ2UuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIHRoaXMucGFnaW5hdG9yLnByZXZpb3VzUGFnZSgpO1xuICAgICAqIGBgYFxuXHQgKiBAbWVtYmVyb2YgSWd4UGFnaW5hdG9yQ29tcG9uZW50XG4gICAgICovXG4gICAgcHVibGljIHByZXZpb3VzUGFnZSgpOiB2b2lkIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzRmlyc3RQYWdlKSB7XG4gICAgICAgICAgICB0aGlzLnBhZ2UgLT0gMTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBHb2VzIHRvIHRoZSBkZXNpcmVkIHBhZ2UgaW5kZXguXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIHRoaXMucGFnaWFudG9yLnBhZ2luYXRlKDEpO1xuICAgICAqIGBgYFxuICAgICAqIEBwYXJhbSB2YWxcbiAgICAgKiBAbWVtYmVyb2YgSWd4UGFnaW5hdG9yQ29tcG9uZW50XG4gICAgICovXG4gICAgcHVibGljIHBhZ2luYXRlKHZhbDogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGlmICh2YWwgPCAwIHx8IHZhbCA+IHRoaXMudG90YWxQYWdlcyAtIDEpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnBhZ2UgPSB2YWw7XG4gICAgfVxufVxuXG5ATmdNb2R1bGUoe1xuICAgIGRlY2xhcmF0aW9uczogW0lneFBhZ2luYXRvckNvbXBvbmVudF0sXG4gICAgZXhwb3J0czogW0lneFBhZ2luYXRvckNvbXBvbmVudF0sXG4gICAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgSWd4U2VsZWN0TW9kdWxlLCBGb3Jtc01vZHVsZSwgSWd4SWNvbk1vZHVsZSwgSWd4QnV0dG9uTW9kdWxlLCBJZ3hSaXBwbGVNb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIElneFBhZ2luYXRvck1vZHVsZSB7IH1cbiJdfQ==