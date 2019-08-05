/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { IgxCalendarBase } from './calendar-base';
import { ViewChild, ElementRef, HostBinding } from '@angular/core';
/** @enum {number} */
const CalendarView = {
    DEFAULT: 0,
    YEAR: 1,
    DECADE: 2,
};
export { CalendarView };
CalendarView[CalendarView.DEFAULT] = 'DEFAULT';
CalendarView[CalendarView.YEAR] = 'YEAR';
CalendarView[CalendarView.DECADE] = 'DECADE';
export class IgxMonthPickerBase extends IgxCalendarBase {
    constructor() {
        super(...arguments);
        /**
         * The default `tabindex` attribute for the component.
         *
         * @hidden
         */
        this.tabindex = 0;
        /**
         * @hidden
         */
        this._activeView = CalendarView.DEFAULT;
    }
    /**
     * Gets the current active view.
     * @return {?}
     */
    get activeView() {
        return this._activeView;
    }
    /**
     * Sets the current active view.
     * @param {?} val
     * @return {?}
     */
    set activeView(val) {
        this._activeView = val;
    }
    /**
     * @hidden
     * @return {?}
     */
    get isDefaultView() {
        return this._activeView === CalendarView.DEFAULT;
    }
    /**
     * @hidden
     * @return {?}
     */
    get isDecadeView() {
        return this._activeView === CalendarView.DECADE;
    }
    /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    changeYear(event) {
        this.viewDate = new Date(event.getFullYear(), this.viewDate.getMonth());
        this._activeView = CalendarView.DEFAULT;
        requestAnimationFrame(() => {
            this.yearsBtn.nativeElement.focus();
        });
    }
    /**
     * @hidden
     * @return {?}
     */
    activeViewDecade() {
        this._activeView = CalendarView.DECADE;
    }
    /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    activeViewDecadeKB(event) {
        if (event.key === " " /* SPACE */ || event.key === "Spacebar" /* SPACE_IE */ || event.key === "Enter" /* ENTER */) {
            event.preventDefault();
            this.activeViewDecade();
        }
    }
    /**
     * Returns the locale representation of the year in the year view if enabled,
     * otherwise returns the default `Date.getFullYear()` value.
     *
     * @hidden
     * @param {?} value
     * @return {?}
     */
    formattedYear(value) {
        if (this.formatViews.year) {
            return this.formatterYear.format(value);
        }
        return `${value.getFullYear()}`;
    }
}
IgxMonthPickerBase.propDecorators = {
    yearsBtn: [{ type: ViewChild, args: ['yearsBtn', { static: false },] }],
    tabindex: [{ type: HostBinding, args: ['attr.tabindex',] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9udGgtcGlja2VyLWJhc2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9pZ25pdGV1aS1hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL2NhbGVuZGFyL21vbnRoLXBpY2tlci1iYXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDbEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7SUFPL0QsVUFBTztJQUNQLE9BQUk7SUFDSixTQUFNOzs7Ozs7QUFFVixNQUFNLE9BQU8sa0JBQW1CLFNBQVEsZUFBZTtJQUF2RDs7Ozs7OztRQWNXLGFBQVEsR0FBRyxDQUFDLENBQUM7Ozs7UUFpQ1osZ0JBQVcsR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDO0lBMkMvQyxDQUFDOzs7OztJQXZFRyxJQUFXLFVBQVU7UUFDakIsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQzVCLENBQUM7Ozs7OztJQUtELElBQVcsVUFBVSxDQUFDLEdBQWlCO1FBQ25DLElBQUksQ0FBQyxXQUFXLEdBQUcsR0FBRyxDQUFDO0lBQzNCLENBQUM7Ozs7O0lBS0QsSUFBVyxhQUFhO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLFdBQVcsS0FBSyxZQUFZLENBQUMsT0FBTyxDQUFDO0lBQ3JELENBQUM7Ozs7O0lBS0QsSUFBVyxZQUFZO1FBQ25CLE9BQU8sSUFBSSxDQUFDLFdBQVcsS0FBSyxZQUFZLENBQUMsTUFBTSxDQUFDO0lBQ3BELENBQUM7Ozs7OztJQVVNLFVBQVUsQ0FBQyxLQUFXO1FBQ3pCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUN4RSxJQUFJLENBQUMsV0FBVyxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUM7UUFFeEMscUJBQXFCLENBQUMsR0FBRyxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3hDLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQzs7Ozs7SUFLTSxnQkFBZ0I7UUFDbkIsSUFBSSxDQUFDLFdBQVcsR0FBRyxZQUFZLENBQUMsTUFBTSxDQUFDO0lBQzNDLENBQUM7Ozs7OztJQUtNLGtCQUFrQixDQUFDLEtBQUs7UUFDM0IsSUFBSSxLQUFLLENBQUMsR0FBRyxvQkFBZSxJQUFJLEtBQUssQ0FBQyxHQUFHLDhCQUFrQixJQUFJLEtBQUssQ0FBQyxHQUFHLHdCQUFlLEVBQUU7WUFDckYsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1NBQzNCO0lBQ0wsQ0FBQzs7Ozs7Ozs7O0lBUU0sYUFBYSxDQUFDLEtBQVc7UUFDNUIsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRTtZQUN2QixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzNDO1FBQ0QsT0FBTyxHQUFHLEtBQUssQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDO0lBQ3BDLENBQUM7Ozt1QkFwRkEsU0FBUyxTQUFDLFVBQVUsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7dUJBUXZDLFdBQVcsU0FBQyxlQUFlOzs7Ozs7O0lBUjVCLHNDQUM0Qjs7Ozs7OztJQU81QixzQ0FDb0I7Ozs7OztJQWlDcEIseUNBQTJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSWd4Q2FsZW5kYXJCYXNlIH0gZnJvbSAnLi9jYWxlbmRhci1iYXNlJztcbmltcG9ydCB7IFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgSG9zdEJpbmRpbmcgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEtFWVMgfSBmcm9tICcuLi9jb3JlL3V0aWxzJztcblxuLyoqXG4gKiBTZXRzIHRoZSBjYWxlbmRlciB2aWV3IC0gZGF5cywgbW9udGhzIG9yIHllYXJzLlxuICovXG5leHBvcnQgZW51bSBDYWxlbmRhclZpZXcge1xuICAgIERFRkFVTFQsXG4gICAgWUVBUixcbiAgICBERUNBREVcbn1cbmV4cG9ydCBjbGFzcyBJZ3hNb250aFBpY2tlckJhc2UgZXh0ZW5kcyBJZ3hDYWxlbmRhckJhc2Uge1xuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIEBWaWV3Q2hpbGQoJ3llYXJzQnRuJywgeyBzdGF0aWM6IGZhbHNlIH0pXG4gICAgcHVibGljIHllYXJzQnRuOiBFbGVtZW50UmVmO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGRlZmF1bHQgYHRhYmluZGV4YCBhdHRyaWJ1dGUgZm9yIHRoZSBjb21wb25lbnQuXG4gICAgICpcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgQEhvc3RCaW5kaW5nKCdhdHRyLnRhYmluZGV4JylcbiAgICBwdWJsaWMgdGFiaW5kZXggPSAwO1xuXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgY3VycmVudCBhY3RpdmUgdmlldy5cbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0IGFjdGl2ZVZpZXcoKTogQ2FsZW5kYXJWaWV3IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FjdGl2ZVZpZXc7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgY3VycmVudCBhY3RpdmUgdmlldy5cbiAgICAgKi9cbiAgICBwdWJsaWMgc2V0IGFjdGl2ZVZpZXcodmFsOiBDYWxlbmRhclZpZXcpIHtcbiAgICAgICAgdGhpcy5fYWN0aXZlVmlldyA9IHZhbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIGdldCBpc0RlZmF1bHRWaWV3KCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWN0aXZlVmlldyA9PT0gQ2FsZW5kYXJWaWV3LkRFRkFVTFQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyBnZXQgaXNEZWNhZGVWaWV3KCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWN0aXZlVmlldyA9PT0gQ2FsZW5kYXJWaWV3LkRFQ0FERTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKkBoaWRkZW5cbiAgICAgKi9cbiAgICBwcml2YXRlIF9hY3RpdmVWaWV3ID0gQ2FsZW5kYXJWaWV3LkRFRkFVTFQ7XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIGNoYW5nZVllYXIoZXZlbnQ6IERhdGUpIHtcbiAgICAgICAgdGhpcy52aWV3RGF0ZSA9IG5ldyBEYXRlKGV2ZW50LmdldEZ1bGxZZWFyKCksIHRoaXMudmlld0RhdGUuZ2V0TW9udGgoKSk7XG4gICAgICAgIHRoaXMuX2FjdGl2ZVZpZXcgPSBDYWxlbmRhclZpZXcuREVGQVVMVDtcblxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy55ZWFyc0J0bi5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgYWN0aXZlVmlld0RlY2FkZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fYWN0aXZlVmlldyA9IENhbGVuZGFyVmlldy5ERUNBREU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyBhY3RpdmVWaWV3RGVjYWRlS0IoZXZlbnQpIHtcbiAgICAgICAgaWYgKGV2ZW50LmtleSA9PT0gS0VZUy5TUEFDRSB8fCBldmVudC5rZXkgPT09IEtFWVMuU1BBQ0VfSUUgfHwgZXZlbnQua2V5ID09PSBLRVlTLkVOVEVSKSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdGhpcy5hY3RpdmVWaWV3RGVjYWRlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBsb2NhbGUgcmVwcmVzZW50YXRpb24gb2YgdGhlIHllYXIgaW4gdGhlIHllYXIgdmlldyBpZiBlbmFibGVkLFxuICAgICAqIG90aGVyd2lzZSByZXR1cm5zIHRoZSBkZWZhdWx0IGBEYXRlLmdldEZ1bGxZZWFyKClgIHZhbHVlLlxuICAgICAqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyBmb3JtYXR0ZWRZZWFyKHZhbHVlOiBEYXRlKTogc3RyaW5nIHtcbiAgICAgICAgaWYgKHRoaXMuZm9ybWF0Vmlld3MueWVhcikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZm9ybWF0dGVyWWVhci5mb3JtYXQodmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBgJHt2YWx1ZS5nZXRGdWxsWWVhcigpfWA7XG4gICAgfVxufVxuIl19