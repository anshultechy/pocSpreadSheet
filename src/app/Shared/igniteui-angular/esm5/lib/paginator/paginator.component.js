/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Component, Input, Output, NgModule, Optional, Inject, EventEmitter, HostBinding } from '@angular/core';
import { CurrentResourceStrings } from '../core/i18n/resources';
import { DisplayDensityToken, DisplayDensityBase, DisplayDensity } from '../core/displayDensity';
import { IgxSelectModule } from '../select/index';
import { IgxIconModule } from '../icon/index';
import { IgxButtonModule } from '../directives/button/button.directive';
import { IgxRippleModule } from '../directives/ripple/ripple.directive';
var IgxPaginatorComponent = /** @class */ (function (_super) {
    tslib_1.__extends(IgxPaginatorComponent, _super);
    function IgxPaginatorComponent(_displayDensityOptions) {
        var _this = _super.call(this, _displayDensityOptions) || this;
        _this._displayDensityOptions = _displayDensityOptions;
        _this._page = 0;
        _this.defaultSelectValues = [5, 10, 15, 25, 50, 100, 500];
        _this._perPage = 15;
        /**
         * An \@Input property that sets if the pager in the paginator should be enabled.
         * ```html
         * <igx-paginator [pagerEnabled]="true"></igx-paginator>
         * ```
         * \@memberof IgxPaginatorComponent
         */
        _this.pagerEnabled = true;
        /**
         * An \@Input property that sets if the pager in the paginator should be hidden.
         * ```html
         * <igx-paginator [pagerHidden]="true"></igx-paginator>
         * ```
         * \@memberof IgxPaginatorComponent
         */
        _this.pagerHidden = false;
        /**
         * An \@Input property that sets if the dropdown in the paginator should be enabled.
         * ```html
         * <igx-paginator [dropdownEnabled]="true"></igx-paginator>
         * ```
         * \@memberof IgxPaginatorComponent
         */
        _this.dropdownEnabled = true;
        /**
         * An \@Input property that sets if the dropdown in the paginator should be hidden.
         * ```html
         * <igx-paginator [dropdownHidden]="true"></igx-paginator>
         * ```
         * \@memberof IgxPaginatorComponent
         */
        _this.dropdownHidden = false;
        /**
         * An \@Input property, sets number of label of the select.
         * The default is 'Items per page' localized string.
         * ```html
         * <igx-paginator label="My custom label"></igx-paginator>
         * ```
         * \@memberof IgxPaginatorComponent
         */
        _this.selectLabel = CurrentResourceStrings.GridResStrings.igx_grid_paginator_label;
        /**
         * An event that is emitted when the select in the `IgxPaginatorComponent` changes its value.
         */
        _this.perPageChange = new EventEmitter();
        /**
         * An event that is emitted when the paginating is used.
         */
        _this.pageChange = new EventEmitter();
        return _this;
    }
    Object.defineProperty(IgxPaginatorComponent.prototype, "classCosy", {
        /**
         * Sets the class of the IgxPaginatorComponent based
         * on the provided displayDensity.
         */
        get: /**
         * Sets the class of the IgxPaginatorComponent based
         * on the provided displayDensity.
         * @return {?}
         */
        function () {
            return this.displayDensity === DisplayDensity.cosy;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxPaginatorComponent.prototype, "classCompact", {
        get: /**
         * @return {?}
         */
        function () {
            return this.displayDensity === DisplayDensity.compact;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxPaginatorComponent.prototype, "classComfortable", {
        get: /**
         * @return {?}
         */
        function () {
            return this.displayDensity === DisplayDensity.comfortable;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxPaginatorComponent.prototype, "page", {
        /**
       * An @Input property, sets current page of the `IgxPaginatorComponent`.
       * The default is 0.
       * ```typescript
       * let page = this.paginator.page;
       * ```
       * @memberof IgxPaginatorComponent
       */
        get: /**
         * An \@Input property, sets current page of the `IgxPaginatorComponent`.
         * The default is 0.
         * ```typescript
         * let page = this.paginator.page;
         * ```
         * \@memberof IgxPaginatorComponent
         * @return {?}
         */
        function () {
            return this._page;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._page = value;
            this.pageChange.emit(this._page);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxPaginatorComponent.prototype, "perPage", {
        /**
       * An @Input property, sets number of visible items per page in the `IgxPaginatorComponent`.
       * The default is 15.
       * ```typescript
       * let itemsPerPage = this.paginator.perPage;
       * ```
       * @memberof IgxPaginatorComponent
       */
        get: /**
         * An \@Input property, sets number of visible items per page in the `IgxPaginatorComponent`.
         * The default is 15.
         * ```typescript
         * let itemsPerPage = this.paginator.perPage;
         * ```
         * \@memberof IgxPaginatorComponent
         * @return {?}
         */
        function () {
            return this._perPage;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._perPage = Number(value);
            this.perPageChange.emit(this._perPage);
            this._selectOptions = this.sortUniqueOptions(this.defaultSelectValues, this._perPage);
            this.totalPages = Math.ceil(this.totalRecords / this._perPage);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxPaginatorComponent.prototype, "totalRecords", {
        /**
        * An @Input property that sets the total records.
        * ```typescript
        * let totalRecords = this.paginator.totalRecords;
        * ```
        * @memberof IgxPaginatorComponent
        */
        get: /**
         * An \@Input property that sets the total records.
         * ```typescript
         * let totalRecords = this.paginator.totalRecords;
         * ```
         * \@memberof IgxPaginatorComponent
         * @return {?}
         */
        function () {
            return this._totalRecords;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._totalRecords = value;
            this.totalPages = Math.ceil(this.totalRecords / this.perPage);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxPaginatorComponent.prototype, "selectOptions", {
        /**
        * An @Input property that sets custom options in the select of the paginator
        * ```typescript
        * let options = this.paginator.selectOptions;
        * ```
        * @memberof IgxPaginatorComponent
        */
        get: /**
         * An \@Input property that sets custom options in the select of the paginator
         * ```typescript
         * let options = this.paginator.selectOptions;
         * ```
         * \@memberof IgxPaginatorComponent
         * @return {?}
         */
        function () {
            return this._selectOptions;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._selectOptions = this.sortUniqueOptions(value, this._perPage);
            this.defaultSelectValues = tslib_1.__spread(this._selectOptions);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxPaginatorComponent.prototype, "isLastPage", {
        /**
         * Returns if the current page is the last page.
         * ```typescript
         * const lastPage = this.paginator.isLastPage;
         * ```
         */
        get: /**
         * Returns if the current page is the last page.
         * ```typescript
         * const lastPage = this.paginator.isLastPage;
         * ```
         * @return {?}
         */
        function () {
            return this.page + 1 >= this.totalPages;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxPaginatorComponent.prototype, "isFirstPage", {
        /**
         * Returns if the current page is the first page.
         * ```typescript
         * const lastPage = this.paginator.isFirstPage;
         * ```
         */
        get: /**
         * Returns if the current page is the first page.
         * ```typescript
         * const lastPage = this.paginator.isFirstPage;
         * ```
         * @return {?}
         */
        function () {
            return this.page === 0;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @private
     * @param {?} values
     * @param {?} newOption
     * @return {?}
     */
    IgxPaginatorComponent.prototype.sortUniqueOptions = /**
     * @private
     * @param {?} values
     * @param {?} newOption
     * @return {?}
     */
    function (values, newOption) {
        return Array.from(new Set(tslib_1.__spread(values, [newOption]))).sort(function (a, b) { return a - b; });
    };
    /**
     * @return {?}
     */
    IgxPaginatorComponent.prototype.paginatorSelectDisplayDensity = /**
     * @return {?}
     */
    function () {
        if (this.displayDensity === DisplayDensity.comfortable) {
            return DisplayDensity.cosy;
        }
        return DisplayDensity.compact;
    };
    /**
     * Goes to the next page of the `IgxPaginatorComponent`, if the paginator is not already at the last page.
     * ```typescript
     * this.paginator.nextPage();
     * ```
     * @memberof IgxPaginatorComponent
     */
    /**
     * Goes to the next page of the `IgxPaginatorComponent`, if the paginator is not already at the last page.
     * ```typescript
     * this.paginator.nextPage();
     * ```
     * \@memberof IgxPaginatorComponent
     * @return {?}
     */
    IgxPaginatorComponent.prototype.nextPage = /**
     * Goes to the next page of the `IgxPaginatorComponent`, if the paginator is not already at the last page.
     * ```typescript
     * this.paginator.nextPage();
     * ```
     * \@memberof IgxPaginatorComponent
     * @return {?}
     */
    function () {
        if (!this.isLastPage) {
            this.page += 1;
        }
    };
    /**
     * Goes to the previous page of the `IgxPaginatorComponent`, if the paginator is not already at the first page.
     * ```typescript
     * this.paginator.previousPage();
     * ```
     * @memberof IgxPaginatorComponent
     */
    /**
     * Goes to the previous page of the `IgxPaginatorComponent`, if the paginator is not already at the first page.
     * ```typescript
     * this.paginator.previousPage();
     * ```
     * \@memberof IgxPaginatorComponent
     * @return {?}
     */
    IgxPaginatorComponent.prototype.previousPage = /**
     * Goes to the previous page of the `IgxPaginatorComponent`, if the paginator is not already at the first page.
     * ```typescript
     * this.paginator.previousPage();
     * ```
     * \@memberof IgxPaginatorComponent
     * @return {?}
     */
    function () {
        if (!this.isFirstPage) {
            this.page -= 1;
        }
    };
    /**
     * Goes to the desired page index.
     * ```typescript
     * this.pagiantor.paginate(1);
     * ```
     * @param val
     * @memberof IgxPaginatorComponent
     */
    /**
     * Goes to the desired page index.
     * ```typescript
     * this.pagiantor.paginate(1);
     * ```
     * \@memberof IgxPaginatorComponent
     * @param {?} val
     * @return {?}
     */
    IgxPaginatorComponent.prototype.paginate = /**
     * Goes to the desired page index.
     * ```typescript
     * this.pagiantor.paginate(1);
     * ```
     * \@memberof IgxPaginatorComponent
     * @param {?} val
     * @return {?}
     */
    function (val) {
        if (val < 0 || val > this.totalPages - 1) {
            return;
        }
        this.page = val;
    };
    IgxPaginatorComponent.decorators = [
        { type: Component, args: [{
                    selector: 'igx-paginator',
                    template: "<div class=\"igx-grid-paginator__select\" [hidden]=\"dropdownHidden\">\n    <label class=\"igx-grid-paginator__label\">{{ selectLabel }}</label>\n    <div class=\"igx-grid-paginator__select-input\">\n        <igx-select [(ngModel)]=\"perPage\" [displayDensity]=\"paginatorSelectDisplayDensity()\" type=\"border\"\n            [disabled]=\"!dropdownEnabled\">\n            <igx-select-item [value]=\"val\" *ngFor=\"let val of selectOptions\">\n                {{val}}\n            </igx-select-item>\n        </igx-select>\n    </div>\n</div>\n<div class=\"igx-grid-paginator__pager\" [hidden]=\"pagerHidden\">\n    <button [disabled]=\"isFirstPage || !pagerEnabled ? true: false\" (click)=\"paginate(0)\" igxButton=\"icon\" igxRipple igxRippleCentered=\"true\">\n        <igx-icon fontSet=\"material\">first_page</igx-icon>\n    </button>\n    <button [disabled]=\"isFirstPage || !pagerEnabled ? true: false\" (click)=\"previousPage()\" igxButton=\"icon\" igxRipple igxRippleCentered=\"true\">\n        <igx-icon fontSet=\"material\">chevron_left</igx-icon>\n    </button>\n    <span>{{ page + 1 }} of {{ totalPages }}</span>\n    <button [disabled]=\"isLastPage || !pagerEnabled ? true: false\" (click)=\"nextPage()\" igxRipple igxRippleCentered=\"true\" igxButton=\"icon\">\n        <igx-icon fontSet=\"material\">chevron_right</igx-icon>\n    </button>\n    <button [disabled]=\"isLastPage || !pagerEnabled ? true: false\" (click)=\"paginate(totalPages - 1)\" igxButton=\"icon\" igxRipple\n        igxRippleCentered=\"true\">\n        <igx-icon fontSet=\"material\">last_page</igx-icon>\n    </button>\n</div>"
                }] }
    ];
    /** @nocollapse */
    IgxPaginatorComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [DisplayDensityToken,] }] }
    ]; };
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
    return IgxPaginatorComponent;
}(DisplayDensityBase));
export { IgxPaginatorComponent };
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
var IgxPaginatorModule = /** @class */ (function () {
    function IgxPaginatorModule() {
    }
    IgxPaginatorModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [IgxPaginatorComponent],
                    exports: [IgxPaginatorComponent],
                    imports: [CommonModule, IgxSelectModule, FormsModule, IgxIconModule, IgxButtonModule, IgxRippleModule]
                },] }
    ];
    return IgxPaginatorModule;
}());
export { IgxPaginatorModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lnbml0ZXVpLWFuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvcGFnaW5hdG9yL3BhZ2luYXRvci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hILE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ2hFLE9BQU8sRUFBMEIsbUJBQW1CLEVBQUUsa0JBQWtCLEVBQUUsY0FBYyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDekgsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUV4RTtJQUkyQyxpREFBa0I7SUFvS3pELCtCQUErRCxzQkFBOEM7UUFBN0csWUFFSSxrQkFBTSxzQkFBc0IsQ0FBQyxTQUNoQztRQUg4RCw0QkFBc0IsR0FBdEIsc0JBQXNCLENBQXdCO1FBOUpuRyxXQUFLLEdBQUcsQ0FBQyxDQUFDO1FBR1oseUJBQW1CLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNsRCxjQUFRLEdBQUcsRUFBRSxDQUFDOzs7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LENBQUM7aUJBQ3pHOztJQUNpQyx5QkFBQztDQUFBLEFBTG5DLElBS21DO1NBQXRCLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgTmdNb2R1bGUsIE9wdGlvbmFsLCBJbmplY3QsIEV2ZW50RW1pdHRlciwgSG9zdEJpbmRpbmcgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEN1cnJlbnRSZXNvdXJjZVN0cmluZ3MgfSBmcm9tICcuLi9jb3JlL2kxOG4vcmVzb3VyY2VzJztcbmltcG9ydCB7IElEaXNwbGF5RGVuc2l0eU9wdGlvbnMsIERpc3BsYXlEZW5zaXR5VG9rZW4sIERpc3BsYXlEZW5zaXR5QmFzZSwgRGlzcGxheURlbnNpdHkgfSBmcm9tICcuLi9jb3JlL2Rpc3BsYXlEZW5zaXR5JztcbmltcG9ydCB7IElneFNlbGVjdE1vZHVsZSB9IGZyb20gJy4uL3NlbGVjdC9pbmRleCc7XG5pbXBvcnQgeyBJZ3hJY29uTW9kdWxlIH0gZnJvbSAnLi4vaWNvbi9pbmRleCc7XG5pbXBvcnQgeyBJZ3hCdXR0b25Nb2R1bGUgfSBmcm9tICcuLi9kaXJlY3RpdmVzL2J1dHRvbi9idXR0b24uZGlyZWN0aXZlJztcbmltcG9ydCB7IElneFJpcHBsZU1vZHVsZSB9IGZyb20gJy4uL2RpcmVjdGl2ZXMvcmlwcGxlL3JpcHBsZS5kaXJlY3RpdmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2lneC1wYWdpbmF0b3InLFxuICAgIHRlbXBsYXRlVXJsOiAncGFnaW5hdG9yLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgSWd4UGFnaW5hdG9yQ29tcG9uZW50IGV4dGVuZHMgRGlzcGxheURlbnNpdHlCYXNlIHtcblxuICAgIC8qKlxuICAgICAqIFRvdGFsIHBhZ2VzIGNhbGN1bGF0ZWQgZnJvbSB0b3RhbFJlY29yZHMgYW5kIHBlclBhZ2VcbiAgICAgKi9cbiAgICBwdWJsaWMgdG90YWxQYWdlczogbnVtYmVyO1xuICAgIHByb3RlY3RlZCBfcGFnZSA9IDA7XG4gICAgcHJvdGVjdGVkIF90b3RhbFJlY29yZHM6IG51bWJlcjtcbiAgICBwcm90ZWN0ZWQgX3NlbGVjdE9wdGlvbnM7XG4gICAgcHJpdmF0ZSBkZWZhdWx0U2VsZWN0VmFsdWVzID0gWzUsIDEwLCAxNSwgMjUsIDUwLCAxMDAsIDUwMF07XG4gICAgcHJvdGVjdGVkIF9wZXJQYWdlID0gMTU7XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBjbGFzcyBvZiB0aGUgSWd4UGFnaW5hdG9yQ29tcG9uZW50IGJhc2VkXG4gICAgICogb24gdGhlIHByb3ZpZGVkIGRpc3BsYXlEZW5zaXR5LlxuICAgICAqL1xuICAgIEBIb3N0QmluZGluZygnY2xhc3MuaWd4LWdyaWQtcGFnaW5hdG9yLS1jb3N5JylcbiAgICBwdWJsaWMgZ2V0IGNsYXNzQ29zeSgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGlzcGxheURlbnNpdHkgPT09IERpc3BsYXlEZW5zaXR5LmNvc3k7XG4gICAgfVxuXG4gICAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pZ3gtZ3JpZC1wYWdpbmF0b3ItLWNvbXBhY3QnKVxuICAgIHB1YmxpYyBnZXQgY2xhc3NDb21wYWN0KCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5kaXNwbGF5RGVuc2l0eSA9PT0gRGlzcGxheURlbnNpdHkuY29tcGFjdDtcbiAgICB9XG5cbiAgICBASG9zdEJpbmRpbmcoJ2NsYXNzLmlneC1ncmlkLXBhZ2luYXRvcicpXG4gICAgcHVibGljIGdldCBjbGFzc0NvbWZvcnRhYmxlKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5kaXNwbGF5RGVuc2l0eSA9PT0gRGlzcGxheURlbnNpdHkuY29tZm9ydGFibGU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAqIEFuIEBJbnB1dCBwcm9wZXJ0eSwgc2V0cyBjdXJyZW50IHBhZ2Ugb2YgdGhlIGBJZ3hQYWdpbmF0b3JDb21wb25lbnRgLlxuICAgKiBUaGUgZGVmYXVsdCBpcyAwLlxuICAgKiBgYGB0eXBlc2NyaXB0XG4gICAqIGxldCBwYWdlID0gdGhpcy5wYWdpbmF0b3IucGFnZTtcbiAgICogYGBgXG4gICAqIEBtZW1iZXJvZiBJZ3hQYWdpbmF0b3JDb21wb25lbnRcbiAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZ2V0IHBhZ2UoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wYWdlO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgcGFnZSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX3BhZ2UgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5wYWdlQ2hhbmdlLmVtaXQodGhpcy5fcGFnZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAqIEFuIEBJbnB1dCBwcm9wZXJ0eSwgc2V0cyBudW1iZXIgb2YgdmlzaWJsZSBpdGVtcyBwZXIgcGFnZSBpbiB0aGUgYElneFBhZ2luYXRvckNvbXBvbmVudGAuXG4gICAqIFRoZSBkZWZhdWx0IGlzIDE1LlxuICAgKiBgYGB0eXBlc2NyaXB0XG4gICAqIGxldCBpdGVtc1BlclBhZ2UgPSB0aGlzLnBhZ2luYXRvci5wZXJQYWdlO1xuICAgKiBgYGBcbiAgICogQG1lbWJlcm9mIElneFBhZ2luYXRvckNvbXBvbmVudFxuICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBnZXQgcGVyUGFnZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BlclBhZ2U7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBwZXJQYWdlKHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fcGVyUGFnZSA9IE51bWJlcih2YWx1ZSk7XG4gICAgICAgIHRoaXMucGVyUGFnZUNoYW5nZS5lbWl0KHRoaXMuX3BlclBhZ2UpO1xuICAgICAgICB0aGlzLl9zZWxlY3RPcHRpb25zID0gdGhpcy5zb3J0VW5pcXVlT3B0aW9ucyh0aGlzLmRlZmF1bHRTZWxlY3RWYWx1ZXMsIHRoaXMuX3BlclBhZ2UpO1xuICAgICAgICB0aGlzLnRvdGFsUGFnZXMgPSBNYXRoLmNlaWwodGhpcy50b3RhbFJlY29yZHMgLyB0aGlzLl9wZXJQYWdlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIEFuIEBJbnB1dCBwcm9wZXJ0eSB0aGF0IHNldHMgdGhlIHRvdGFsIHJlY29yZHMuXG4gICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgKiBsZXQgdG90YWxSZWNvcmRzID0gdGhpcy5wYWdpbmF0b3IudG90YWxSZWNvcmRzO1xuICAgICogYGBgXG4gICAgKiBAbWVtYmVyb2YgSWd4UGFnaW5hdG9yQ29tcG9uZW50XG4gICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBnZXQgdG90YWxSZWNvcmRzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fdG90YWxSZWNvcmRzO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgdG90YWxSZWNvcmRzKHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fdG90YWxSZWNvcmRzID0gdmFsdWU7XG4gICAgICAgIHRoaXMudG90YWxQYWdlcyA9IE1hdGguY2VpbCh0aGlzLnRvdGFsUmVjb3JkcyAvIHRoaXMucGVyUGFnZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBBbiBASW5wdXQgcHJvcGVydHkgdGhhdCBzZXRzIGN1c3RvbSBvcHRpb25zIGluIHRoZSBzZWxlY3Qgb2YgdGhlIHBhZ2luYXRvclxuICAgICogYGBgdHlwZXNjcmlwdFxuICAgICogbGV0IG9wdGlvbnMgPSB0aGlzLnBhZ2luYXRvci5zZWxlY3RPcHRpb25zO1xuICAgICogYGBgXG4gICAgKiBAbWVtYmVyb2YgSWd4UGFnaW5hdG9yQ29tcG9uZW50XG4gICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBnZXQgc2VsZWN0T3B0aW9ucygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NlbGVjdE9wdGlvbnM7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBzZWxlY3RPcHRpb25zKHZhbHVlOiBBcnJheTxudW1iZXI+KSB7XG4gICAgICAgIHRoaXMuX3NlbGVjdE9wdGlvbnMgPSB0aGlzLnNvcnRVbmlxdWVPcHRpb25zKHZhbHVlLCB0aGlzLl9wZXJQYWdlKTtcbiAgICAgICAgdGhpcy5kZWZhdWx0U2VsZWN0VmFsdWVzID0gWy4uLnRoaXMuX3NlbGVjdE9wdGlvbnNdO1xuICAgIH1cbiAgICAvKipcbiAgICAqIEFuIEBJbnB1dCBwcm9wZXJ0eSB0aGF0IHNldHMgaWYgdGhlIHBhZ2VyIGluIHRoZSBwYWdpbmF0b3Igc2hvdWxkIGJlIGVuYWJsZWQuXG4gICAgKiBgYGBodG1sXG4gICAgKiA8aWd4LXBhZ2luYXRvciBbcGFnZXJFbmFibGVkXT1cInRydWVcIj48L2lneC1wYWdpbmF0b3I+XG4gICAgKiBgYGBcbiAgICAqIEBtZW1iZXJvZiBJZ3hQYWdpbmF0b3JDb21wb25lbnRcbiAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHBhZ2VyRW5hYmxlZCA9IHRydWU7XG5cbiAgICAvKipcbiAgICAqIEFuIEBJbnB1dCBwcm9wZXJ0eSB0aGF0IHNldHMgaWYgdGhlIHBhZ2VyIGluIHRoZSBwYWdpbmF0b3Igc2hvdWxkIGJlIGhpZGRlbi5cbiAgICAqIGBgYGh0bWxcbiAgICAqIDxpZ3gtcGFnaW5hdG9yIFtwYWdlckhpZGRlbl09XCJ0cnVlXCI+PC9pZ3gtcGFnaW5hdG9yPlxuICAgICogYGBgXG4gICAgKiBAbWVtYmVyb2YgSWd4UGFnaW5hdG9yQ29tcG9uZW50XG4gICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBwYWdlckhpZGRlbiA9IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgKiBBbiBASW5wdXQgcHJvcGVydHkgdGhhdCBzZXRzIGlmIHRoZSBkcm9wZG93biBpbiB0aGUgcGFnaW5hdG9yIHNob3VsZCBiZSBlbmFibGVkLlxuICAgICogYGBgaHRtbFxuICAgICogPGlneC1wYWdpbmF0b3IgW2Ryb3Bkb3duRW5hYmxlZF09XCJ0cnVlXCI+PC9pZ3gtcGFnaW5hdG9yPlxuICAgICogYGBgXG4gICAgKiBAbWVtYmVyb2YgSWd4UGFnaW5hdG9yQ29tcG9uZW50XG4gICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBkcm9wZG93bkVuYWJsZWQgPSB0cnVlO1xuXG4gICAgLyoqXG4gICAgKiBBbiBASW5wdXQgcHJvcGVydHkgdGhhdCBzZXRzIGlmIHRoZSBkcm9wZG93biBpbiB0aGUgcGFnaW5hdG9yIHNob3VsZCBiZSBoaWRkZW4uXG4gICAgKiBgYGBodG1sXG4gICAgKiA8aWd4LXBhZ2luYXRvciBbZHJvcGRvd25IaWRkZW5dPVwidHJ1ZVwiPjwvaWd4LXBhZ2luYXRvcj5cbiAgICAqIGBgYFxuICAgICogQG1lbWJlcm9mIElneFBhZ2luYXRvckNvbXBvbmVudFxuICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZHJvcGRvd25IaWRkZW4gPSBmYWxzZTtcblxuICAgIC8qKlxuICAgICogQW4gQElucHV0IHByb3BlcnR5LCBzZXRzIG51bWJlciBvZiBsYWJlbCBvZiB0aGUgc2VsZWN0LlxuICAgICogVGhlIGRlZmF1bHQgaXMgJ0l0ZW1zIHBlciBwYWdlJyBsb2NhbGl6ZWQgc3RyaW5nLlxuICAgICogYGBgaHRtbFxuICAgICogPGlneC1wYWdpbmF0b3IgbGFiZWw9XCJNeSBjdXN0b20gbGFiZWxcIj48L2lneC1wYWdpbmF0b3I+XG4gICAgKiBgYGBcbiAgICAqIEBtZW1iZXJvZiBJZ3hQYWdpbmF0b3JDb21wb25lbnRcbiAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHNlbGVjdExhYmVsID0gQ3VycmVudFJlc291cmNlU3RyaW5ncy5HcmlkUmVzU3RyaW5ncy5pZ3hfZ3JpZF9wYWdpbmF0b3JfbGFiZWw7XG5cbiAgICAvKipcbiAgICAgKkFuIGV2ZW50IHRoYXQgaXMgZW1pdHRlZCB3aGVuIHRoZSBzZWxlY3QgaW4gdGhlIGBJZ3hQYWdpbmF0b3JDb21wb25lbnRgIGNoYW5nZXMgaXRzIHZhbHVlLlxuICAgICovXG4gICAgQE91dHB1dCgpXG4gICAgcHVibGljIHBlclBhZ2VDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcbiAgICAvKipcbiAgICAgKkFuIGV2ZW50IHRoYXQgaXMgZW1pdHRlZCB3aGVuIHRoZSBwYWdpbmF0aW5nIGlzIHVzZWQuXG4gICAgKi9cbiAgICBAT3V0cHV0KClcbiAgICBwdWJsaWMgcGFnZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuXG4gICAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgQEluamVjdChEaXNwbGF5RGVuc2l0eVRva2VuKSBwcm90ZWN0ZWQgX2Rpc3BsYXlEZW5zaXR5T3B0aW9uczogSURpc3BsYXlEZW5zaXR5T3B0aW9uc1xuICAgICkge1xuICAgICAgICBzdXBlcihfZGlzcGxheURlbnNpdHlPcHRpb25zKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGlmIHRoZSBjdXJyZW50IHBhZ2UgaXMgdGhlIGxhc3QgcGFnZS5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogY29uc3QgbGFzdFBhZ2UgPSB0aGlzLnBhZ2luYXRvci5pc0xhc3RQYWdlO1xuICAgICAqIGBgYFxuICAgICAqL1xuICAgIGdldCBpc0xhc3RQYWdlKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5wYWdlICsgMSA+PSB0aGlzLnRvdGFsUGFnZXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBpZiB0aGUgY3VycmVudCBwYWdlIGlzIHRoZSBmaXJzdCBwYWdlLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBjb25zdCBsYXN0UGFnZSA9IHRoaXMucGFnaW5hdG9yLmlzRmlyc3RQYWdlO1xuICAgICAqIGBgYFxuICAgICAqL1xuICAgIGdldCBpc0ZpcnN0UGFnZSgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGFnZSA9PT0gMDtcbiAgICB9XG5cbiAgICBwcml2YXRlIHNvcnRVbmlxdWVPcHRpb25zKHZhbHVlczogQXJyYXk8bnVtYmVyPiwgbmV3T3B0aW9uOiBudW1iZXIpOiBudW1iZXJbXSB7XG4gICAgICAgIHJldHVybiBBcnJheS5mcm9tKG5ldyBTZXQoWy4uLnZhbHVlcywgbmV3T3B0aW9uXSkpLnNvcnQoKGEsIGIpID0+IGEgLSBiKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcGFnaW5hdG9yU2VsZWN0RGlzcGxheURlbnNpdHkoKTogc3RyaW5nIHtcbiAgICAgICAgaWYgKHRoaXMuZGlzcGxheURlbnNpdHkgPT09IERpc3BsYXlEZW5zaXR5LmNvbWZvcnRhYmxlKSB7XG4gICAgICAgICAgICByZXR1cm4gRGlzcGxheURlbnNpdHkuY29zeTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gRGlzcGxheURlbnNpdHkuY29tcGFjdDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR29lcyB0byB0aGUgbmV4dCBwYWdlIG9mIHRoZSBgSWd4UGFnaW5hdG9yQ29tcG9uZW50YCwgaWYgdGhlIHBhZ2luYXRvciBpcyBub3QgYWxyZWFkeSBhdCB0aGUgbGFzdCBwYWdlLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiB0aGlzLnBhZ2luYXRvci5uZXh0UGFnZSgpO1xuICAgICAqIGBgYFxuXHQgKiBAbWVtYmVyb2YgSWd4UGFnaW5hdG9yQ29tcG9uZW50XG4gICAgICovXG4gICAgcHVibGljIG5leHRQYWdlKCk6IHZvaWQge1xuICAgICAgICBpZiAoIXRoaXMuaXNMYXN0UGFnZSkge1xuICAgICAgICAgICAgdGhpcy5wYWdlICs9IDE7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogR29lcyB0byB0aGUgcHJldmlvdXMgcGFnZSBvZiB0aGUgYElneFBhZ2luYXRvckNvbXBvbmVudGAsIGlmIHRoZSBwYWdpbmF0b3IgaXMgbm90IGFscmVhZHkgYXQgdGhlIGZpcnN0IHBhZ2UuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIHRoaXMucGFnaW5hdG9yLnByZXZpb3VzUGFnZSgpO1xuICAgICAqIGBgYFxuXHQgKiBAbWVtYmVyb2YgSWd4UGFnaW5hdG9yQ29tcG9uZW50XG4gICAgICovXG4gICAgcHVibGljIHByZXZpb3VzUGFnZSgpOiB2b2lkIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzRmlyc3RQYWdlKSB7XG4gICAgICAgICAgICB0aGlzLnBhZ2UgLT0gMTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBHb2VzIHRvIHRoZSBkZXNpcmVkIHBhZ2UgaW5kZXguXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIHRoaXMucGFnaWFudG9yLnBhZ2luYXRlKDEpO1xuICAgICAqIGBgYFxuICAgICAqIEBwYXJhbSB2YWxcbiAgICAgKiBAbWVtYmVyb2YgSWd4UGFnaW5hdG9yQ29tcG9uZW50XG4gICAgICovXG4gICAgcHVibGljIHBhZ2luYXRlKHZhbDogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGlmICh2YWwgPCAwIHx8IHZhbCA+IHRoaXMudG90YWxQYWdlcyAtIDEpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnBhZ2UgPSB2YWw7XG4gICAgfVxufVxuXG5ATmdNb2R1bGUoe1xuICAgIGRlY2xhcmF0aW9uczogW0lneFBhZ2luYXRvckNvbXBvbmVudF0sXG4gICAgZXhwb3J0czogW0lneFBhZ2luYXRvckNvbXBvbmVudF0sXG4gICAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgSWd4U2VsZWN0TW9kdWxlLCBGb3Jtc01vZHVsZSwgSWd4SWNvbk1vZHVsZSwgSWd4QnV0dG9uTW9kdWxlLCBJZ3hSaXBwbGVNb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIElneFBhZ2luYXRvck1vZHVsZSB7IH1cbiJdfQ==