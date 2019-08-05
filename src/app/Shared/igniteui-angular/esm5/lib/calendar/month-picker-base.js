/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { IgxCalendarBase } from './calendar-base';
import { ViewChild, ElementRef, HostBinding } from '@angular/core';
/** @enum {number} */
var CalendarView = {
    DEFAULT: 0,
    YEAR: 1,
    DECADE: 2,
};
export { CalendarView };
CalendarView[CalendarView.DEFAULT] = 'DEFAULT';
CalendarView[CalendarView.YEAR] = 'YEAR';
CalendarView[CalendarView.DECADE] = 'DECADE';
var IgxMonthPickerBase = /** @class */ (function (_super) {
    tslib_1.__extends(IgxMonthPickerBase, _super);
    function IgxMonthPickerBase() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * The default `tabindex` attribute for the component.
         *
         * @hidden
         */
        _this.tabindex = 0;
        /**
         * @hidden
         */
        _this._activeView = CalendarView.DEFAULT;
        return _this;
    }
    Object.defineProperty(IgxMonthPickerBase.prototype, "activeView", {
        /**
         * Gets the current active view.
         */
        get: /**
         * Gets the current active view.
         * @return {?}
         */
        function () {
            return this._activeView;
        },
        /**
         * Sets the current active view.
         */
        set: /**
         * Sets the current active view.
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._activeView = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxMonthPickerBase.prototype, "isDefaultView", {
        /**
         * @hidden
         */
        get: /**
         * @hidden
         * @return {?}
         */
        function () {
            return this._activeView === CalendarView.DEFAULT;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxMonthPickerBase.prototype, "isDecadeView", {
        /**
         * @hidden
         */
        get: /**
         * @hidden
         * @return {?}
         */
        function () {
            return this._activeView === CalendarView.DECADE;
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
    IgxMonthPickerBase.prototype.changeYear = /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var _this = this;
        this.viewDate = new Date(event.getFullYear(), this.viewDate.getMonth());
        this._activeView = CalendarView.DEFAULT;
        requestAnimationFrame(function () {
            _this.yearsBtn.nativeElement.focus();
        });
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @return {?}
     */
    IgxMonthPickerBase.prototype.activeViewDecade = /**
     * @hidden
     * @return {?}
     */
    function () {
        this._activeView = CalendarView.DECADE;
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    IgxMonthPickerBase.prototype.activeViewDecadeKB = /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event.key === " " /* SPACE */ || event.key === "Spacebar" /* SPACE_IE */ || event.key === "Enter" /* ENTER */) {
            event.preventDefault();
            this.activeViewDecade();
        }
    };
    /**
     * Returns the locale representation of the year in the year view if enabled,
     * otherwise returns the default `Date.getFullYear()` value.
     *
     * @hidden
     */
    /**
     * Returns the locale representation of the year in the year view if enabled,
     * otherwise returns the default `Date.getFullYear()` value.
     *
     * @hidden
     * @param {?} value
     * @return {?}
     */
    IgxMonthPickerBase.prototype.formattedYear = /**
     * Returns the locale representation of the year in the year view if enabled,
     * otherwise returns the default `Date.getFullYear()` value.
     *
     * @hidden
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (this.formatViews.year) {
            return this.formatterYear.format(value);
        }
        return "" + value.getFullYear();
    };
    IgxMonthPickerBase.propDecorators = {
        yearsBtn: [{ type: ViewChild, args: ['yearsBtn', { static: false },] }],
        tabindex: [{ type: HostBinding, args: ['attr.tabindex',] }]
    };
    return IgxMonthPickerBase;
}(IgxCalendarBase));
export { IgxMonthPickerBase };
if (false) {
    /**
     * @hidden
     * @type {?}
     */
    IgxMonthPickerBase.prototype.yearsBtn;
    /**
     * The default `tabindex` attribute for the component.
     *
     * @hidden
     * @type {?}
     */
    IgxMonthPickerBase.prototype.tabindex;
    /**
     * @hidden
     * @type {?}
     * @private
     */
    IgxMonthPickerBase.prototype._activeView;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9udGgtcGlja2VyLWJhc2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9pZ25pdGV1aS1hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL2NhbGVuZGFyL21vbnRoLXBpY2tlci1iYXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7O0lBTy9ELFVBQU87SUFDUCxPQUFJO0lBQ0osU0FBTTs7Ozs7O0FBRVY7SUFBd0MsOENBQWU7SUFBdkQ7UUFBQSxxRUEwRkM7Ozs7OztRQTVFVSxjQUFRLEdBQUcsQ0FBQyxDQUFDOzs7O1FBaUNaLGlCQUFXLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQzs7SUEyQy9DLENBQUM7SUF2RUcsc0JBQVcsMENBQVU7UUFIckI7O1dBRUc7Ozs7O1FBQ0g7WUFDSSxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDNUIsQ0FBQztRQUVEOztXQUVHOzs7Ozs7UUFDSCxVQUFzQixHQUFpQjtZQUNuQyxJQUFJLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQztRQUMzQixDQUFDOzs7T0FQQTtJQVlELHNCQUFXLDZDQUFhO1FBSHhCOztXQUVHOzs7OztRQUNIO1lBQ0ksT0FBTyxJQUFJLENBQUMsV0FBVyxLQUFLLFlBQVksQ0FBQyxPQUFPLENBQUM7UUFDckQsQ0FBQzs7O09BQUE7SUFLRCxzQkFBVyw0Q0FBWTtRQUh2Qjs7V0FFRzs7Ozs7UUFDSDtZQUNJLE9BQU8sSUFBSSxDQUFDLFdBQVcsS0FBSyxZQUFZLENBQUMsTUFBTSxDQUFDO1FBQ3BELENBQUM7OztPQUFBO0lBT0Q7O09BRUc7Ozs7OztJQUNJLHVDQUFVOzs7OztJQUFqQixVQUFrQixLQUFXO1FBQTdCLGlCQU9DO1FBTkcsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQ3hFLElBQUksQ0FBQyxXQUFXLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQztRQUV4QyxxQkFBcUIsQ0FBQztZQUNsQixLQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUN4QyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRDs7T0FFRzs7Ozs7SUFDSSw2Q0FBZ0I7Ozs7SUFBdkI7UUFDSSxJQUFJLENBQUMsV0FBVyxHQUFHLFlBQVksQ0FBQyxNQUFNLENBQUM7SUFDM0MsQ0FBQztJQUVEOztPQUVHOzs7Ozs7SUFDSSwrQ0FBa0I7Ozs7O0lBQXpCLFVBQTBCLEtBQUs7UUFDM0IsSUFBSSxLQUFLLENBQUMsR0FBRyxvQkFBZSxJQUFJLEtBQUssQ0FBQyxHQUFHLDhCQUFrQixJQUFJLEtBQUssQ0FBQyxHQUFHLHdCQUFlLEVBQUU7WUFDckYsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1NBQzNCO0lBQ0wsQ0FBQztJQUVEOzs7OztPQUtHOzs7Ozs7Ozs7SUFDSSwwQ0FBYTs7Ozs7Ozs7SUFBcEIsVUFBcUIsS0FBVztRQUM1QixJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFO1lBQ3ZCLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDM0M7UUFDRCxPQUFPLEtBQUcsS0FBSyxDQUFDLFdBQVcsRUFBSSxDQUFDO0lBQ3BDLENBQUM7OzJCQXBGQSxTQUFTLFNBQUMsVUFBVSxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTsyQkFRdkMsV0FBVyxTQUFDLGVBQWU7O0lBNkVoQyx5QkFBQztDQUFBLEFBMUZELENBQXdDLGVBQWUsR0EwRnREO1NBMUZZLGtCQUFrQjs7Ozs7O0lBSzNCLHNDQUM0Qjs7Ozs7OztJQU81QixzQ0FDb0I7Ozs7OztJQWlDcEIseUNBQTJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSWd4Q2FsZW5kYXJCYXNlIH0gZnJvbSAnLi9jYWxlbmRhci1iYXNlJztcbmltcG9ydCB7IFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgSG9zdEJpbmRpbmcgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEtFWVMgfSBmcm9tICcuLi9jb3JlL3V0aWxzJztcblxuLyoqXG4gKiBTZXRzIHRoZSBjYWxlbmRlciB2aWV3IC0gZGF5cywgbW9udGhzIG9yIHllYXJzLlxuICovXG5leHBvcnQgZW51bSBDYWxlbmRhclZpZXcge1xuICAgIERFRkFVTFQsXG4gICAgWUVBUixcbiAgICBERUNBREVcbn1cbmV4cG9ydCBjbGFzcyBJZ3hNb250aFBpY2tlckJhc2UgZXh0ZW5kcyBJZ3hDYWxlbmRhckJhc2Uge1xuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIEBWaWV3Q2hpbGQoJ3llYXJzQnRuJywgeyBzdGF0aWM6IGZhbHNlIH0pXG4gICAgcHVibGljIHllYXJzQnRuOiBFbGVtZW50UmVmO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGRlZmF1bHQgYHRhYmluZGV4YCBhdHRyaWJ1dGUgZm9yIHRoZSBjb21wb25lbnQuXG4gICAgICpcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgQEhvc3RCaW5kaW5nKCdhdHRyLnRhYmluZGV4JylcbiAgICBwdWJsaWMgdGFiaW5kZXggPSAwO1xuXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgY3VycmVudCBhY3RpdmUgdmlldy5cbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0IGFjdGl2ZVZpZXcoKTogQ2FsZW5kYXJWaWV3IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FjdGl2ZVZpZXc7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgY3VycmVudCBhY3RpdmUgdmlldy5cbiAgICAgKi9cbiAgICBwdWJsaWMgc2V0IGFjdGl2ZVZpZXcodmFsOiBDYWxlbmRhclZpZXcpIHtcbiAgICAgICAgdGhpcy5fYWN0aXZlVmlldyA9IHZhbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIGdldCBpc0RlZmF1bHRWaWV3KCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWN0aXZlVmlldyA9PT0gQ2FsZW5kYXJWaWV3LkRFRkFVTFQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyBnZXQgaXNEZWNhZGVWaWV3KCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWN0aXZlVmlldyA9PT0gQ2FsZW5kYXJWaWV3LkRFQ0FERTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKkBoaWRkZW5cbiAgICAgKi9cbiAgICBwcml2YXRlIF9hY3RpdmVWaWV3ID0gQ2FsZW5kYXJWaWV3LkRFRkFVTFQ7XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIGNoYW5nZVllYXIoZXZlbnQ6IERhdGUpIHtcbiAgICAgICAgdGhpcy52aWV3RGF0ZSA9IG5ldyBEYXRlKGV2ZW50LmdldEZ1bGxZZWFyKCksIHRoaXMudmlld0RhdGUuZ2V0TW9udGgoKSk7XG4gICAgICAgIHRoaXMuX2FjdGl2ZVZpZXcgPSBDYWxlbmRhclZpZXcuREVGQVVMVDtcblxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy55ZWFyc0J0bi5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgYWN0aXZlVmlld0RlY2FkZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fYWN0aXZlVmlldyA9IENhbGVuZGFyVmlldy5ERUNBREU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyBhY3RpdmVWaWV3RGVjYWRlS0IoZXZlbnQpIHtcbiAgICAgICAgaWYgKGV2ZW50LmtleSA9PT0gS0VZUy5TUEFDRSB8fCBldmVudC5rZXkgPT09IEtFWVMuU1BBQ0VfSUUgfHwgZXZlbnQua2V5ID09PSBLRVlTLkVOVEVSKSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdGhpcy5hY3RpdmVWaWV3RGVjYWRlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBsb2NhbGUgcmVwcmVzZW50YXRpb24gb2YgdGhlIHllYXIgaW4gdGhlIHllYXIgdmlldyBpZiBlbmFibGVkLFxuICAgICAqIG90aGVyd2lzZSByZXR1cm5zIHRoZSBkZWZhdWx0IGBEYXRlLmdldEZ1bGxZZWFyKClgIHZhbHVlLlxuICAgICAqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyBmb3JtYXR0ZWRZZWFyKHZhbHVlOiBEYXRlKTogc3RyaW5nIHtcbiAgICAgICAgaWYgKHRoaXMuZm9ybWF0Vmlld3MueWVhcikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZm9ybWF0dGVyWWVhci5mb3JtYXQodmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBgJHt2YWx1ZS5nZXRGdWxsWWVhcigpfWA7XG4gICAgfVxufVxuIl19