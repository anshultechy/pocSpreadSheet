/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, HostListener, ViewChild, HostBinding, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { trigger, transition, useAnimation } from '@angular/animations';
import { fadeIn, scaleInCenter, slideInLeft, slideInRight } from '../../animations/main';
import { IgxMonthsViewComponent } from '../months-view/months-view.component';
import { IgxMonthPickerBase, CalendarView } from '../month-picker-base';
import { IgxYearsViewComponent } from '../years-view/years-view.component';
import { IgxDaysViewComponent } from '../days-view/days-view.component';
/** @type {?} */
let NEXT_ID = 0;
export class IgxMonthPickerComponent extends IgxMonthPickerBase {
    constructor() {
        super(...arguments);
        /**
         * Sets/gets the `id` of the month picker.
         * If not set, the `id` will have value `"igx-month-picker-0"`.
         */
        this.id = `igx-month-picker-${NEXT_ID++}`;
        /**
         * The default css class applied to the component.
         *
         * @hidden
         */
        this.styleClass = true;
        /**
         * @hidden
         */
        this.yearAction = '';
    }
    /**
     * @hidden
     * @return {?}
     */
    animationDone() {
        this.yearAction = '';
    }
    /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    activeViewDecadeKB(event) {
        super.activeViewDecadeKB(event);
        if (event.key === "ArrowRight" /* RIGHT_ARROW */ || event.key === "Right" /* RIGHT_ARROW_IE */) {
            event.preventDefault();
            this.nextYear();
        }
        if (event.key === "ArrowLeft" /* LEFT_ARROW */ || event.key === "Left" /* LEFT_ARROW_IE */) {
            event.preventDefault();
            this.previousYear();
        }
        requestAnimationFrame(() => {
            if (this.dacadeView) {
                this.dacadeView.el.nativeElement.focus();
            }
        });
    }
    /**
     * @hidden
     * @return {?}
     */
    activeViewDecade() {
        super.activeViewDecade();
        requestAnimationFrame(() => {
            this.dacadeView.el.nativeElement.focus();
        });
    }
    /**
     * @hidden
     * @return {?}
     */
    nextYear() {
        this.yearAction = 'next';
        this.viewDate = this.calendarModel.timedelta(this.viewDate, 'year', 1);
        this.selectDate(this.viewDate);
        this.onSelection.emit(this.selectedDates);
    }
    /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    nextYearKB(event) {
        if (event.key === " " /* SPACE */ || event.key === "Spacebar" /* SPACE_IE */ || event.key === "Enter" /* ENTER */) {
            event.preventDefault();
            event.stopPropagation();
            this.nextYear();
        }
    }
    /**
     * @hidden
     * @return {?}
     */
    previousYear() {
        this.yearAction = 'prev';
        this.viewDate = this.calendarModel.timedelta(this.viewDate, 'year', -1);
        this.selectDate(this.viewDate);
        this.onSelection.emit(this.selectedDates);
    }
    /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    previousYearKB(event) {
        if (event.key === " " /* SPACE */ || event.key === "Spacebar" /* SPACE_IE */ || event.key === "Enter" /* ENTER */) {
            event.preventDefault();
            event.stopPropagation();
            this.previousYear();
        }
    }
    /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    selectYear(event) {
        this.viewDate = new Date(event.getFullYear(), event.getMonth(), event.getDate());
        this.activeView = CalendarView.DEFAULT;
        this.selectDate(event);
        this.onSelection.emit(this.selectedDates);
        requestAnimationFrame(() => {
            this.yearsBtn.nativeElement.focus();
        });
    }
    /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    selectMonth(event) {
        this.selectDate(event);
        this.onSelection.emit(this.selectedDates);
    }
    /**
     * Selects a date.
     * ```typescript
     * this.monPicker.selectDate(new Date(`2018-06-12`));
     * ```
     * @param {?} value
     * @return {?}
     */
    selectDate(value) {
        if (!value) {
            return new Date();
        }
        // TO DO: to be refactored after discussion on the desired behavior
        super.selectDate(value);
        this.viewDate = value;
    }
    /**
     * @hidden
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        // TO DO: to be refactored after discussion on the desired behavior
        if (value) {
            this.viewDate = this.selectedDates = value;
        }
    }
    /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    onKeydownPageUp(event) {
        event.preventDefault();
        this.yearAction = 'prev';
        this.viewDate = this.calendarModel.timedelta(this.viewDate, 'year', -1);
    }
    /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    onKeydownPageDown(event) {
        event.preventDefault();
        this.yearAction = 'next';
        this.viewDate = this.calendarModel.timedelta(this.viewDate, 'year', 1);
    }
    /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    onKeydownHome(event) {
        if (this.monthsView) {
            this.monthsView.el.nativeElement.focus();
            this.monthsView.onKeydownHome(event);
        }
    }
    /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    onKeydownEnd(event) {
        if (this.monthsView) {
            this.monthsView.el.nativeElement.focus();
            this.monthsView.onKeydownEnd(event);
        }
    }
}
IgxMonthPickerComponent.decorators = [
    { type: Component, args: [{
                providers: [
                    {
                        multi: true,
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: IgxMonthPickerComponent
                    }
                ],
                animations: [
                    trigger('animateView', [
                        transition('void => 0', useAnimation(fadeIn)),
                        transition('void => *', useAnimation(scaleInCenter, {
                            params: {
                                duration: '.2s',
                                fromScale: .9
                            }
                        }))
                    ]),
                    trigger('animateChange', [
                        transition('* => prev', useAnimation(slideInLeft, {
                            params: {
                                fromPosition: 'translateX(-30%)'
                            }
                        })),
                        transition('* => next', useAnimation(slideInRight, {
                            params: {
                                fromPosition: 'translateX(30%)'
                            }
                        }))
                    ])
                ],
                selector: 'igx-month-picker',
                template: "<div *ngIf=\"isDefaultView\" [@animateView]=\"activeView\" class=\"igx-calendar__body\" (swiperight)=\"previousYear()\" (swipeleft)=\"nextYear()\">\n    <div class=\"igx-calendar-picker\">\n        <div tabindex=\"0\" class=\"igx-calendar-picker__prev\" (click)=\"previousYear()\" (keydown)=\"previousYearKB($event)\">\n            <igx-icon fontSet=\"material\">keyboard_arrow_left</igx-icon>\n        </div>\n        <div>\n            <span tabindex=\"0\" #yearsBtn (keydown)=\"activeViewDecadeKB($event)\" (click)=\"activeViewDecade()\" class=\"igx-calendar-picker__date\">\n                {{ formattedYear(viewDate) }}\n            </span>\n        </div>\n        <div tabindex=\"0\" class=\"igx-calendar-picker__next\" (click)=\"nextYear()\" (keydown)=\"nextYearKB($event)\">\n            <igx-icon fontSet=\"material\">keyboard_arrow_right</igx-icon>\n        </div>\n    </div>\n\n    <igx-months-view [@animateChange]=\"yearAction\" #months\n                     (@animateChange.done)=\"animationDone()\"\n                     [date]=\"viewDate\"\n                     [locale]=\"locale\"\n                     [formatView]=\"formatViews.month\"\n                     [monthFormat]=\"formatOptions.month\"\n                     (onSelection)=\"selectMonth($event)\">\n    </igx-months-view>\n</div>\n<igx-years-view *ngIf=\"isDecadeView\" [@animateView]=\"activeView\" #decade\n                [date]=\"viewDate\"\n                [locale]=\"locale\"\n                [formatView]=\"formatViews.year\"\n                [yearFormat]=\"formatOptions.year\"\n                (onSelection)=\"selectYear($event)\">\n</igx-years-view>\n"
            }] }
];
IgxMonthPickerComponent.propDecorators = {
    id: [{ type: HostBinding, args: ['attr.id',] }, { type: Input }],
    styleClass: [{ type: HostBinding, args: ['class.igx-calendar',] }],
    monthsView: [{ type: ViewChild, args: ['months', { read: IgxMonthsViewComponent, static: false },] }],
    dacadeView: [{ type: ViewChild, args: ['decade', { read: IgxYearsViewComponent, static: false },] }],
    daysView: [{ type: ViewChild, args: ['days', { read: IgxDaysViewComponent, static: false },] }],
    onKeydownPageUp: [{ type: HostListener, args: ['keydown.pageup', ['$event'],] }],
    onKeydownPageDown: [{ type: HostListener, args: ['keydown.pagedown', ['$event'],] }],
    onKeydownHome: [{ type: HostListener, args: ['keydown.home', ['$event'],] }],
    onKeydownEnd: [{ type: HostListener, args: ['keydown.end', ['$event'],] }]
};
if (false) {
    /**
     * Sets/gets the `id` of the month picker.
     * If not set, the `id` will have value `"igx-month-picker-0"`.
     * @type {?}
     */
    IgxMonthPickerComponent.prototype.id;
    /**
     * The default css class applied to the component.
     *
     * @hidden
     * @type {?}
     */
    IgxMonthPickerComponent.prototype.styleClass;
    /**
     * @hidden
     * @type {?}
     */
    IgxMonthPickerComponent.prototype.monthsView;
    /**
     * @hidden
     * @type {?}
     */
    IgxMonthPickerComponent.prototype.dacadeView;
    /**
     * @hidden
     * @type {?}
     */
    IgxMonthPickerComponent.prototype.daysView;
    /**
     * @hidden
     * @type {?}
     */
    IgxMonthPickerComponent.prototype.yearAction;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9udGgtcGlja2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lnbml0ZXVpLWFuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvY2FsZW5kYXIvbW9udGgtcGlja2VyL21vbnRoLXBpY2tlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDSCxTQUFTLEVBQ1QsWUFBWSxFQUNaLFNBQVMsRUFDVCxXQUFXLEVBQ1gsS0FBSyxFQUNSLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3hFLE9BQU8sRUFBRSxNQUFNLEVBQUUsYUFBYSxFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUV6RixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUM5RSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsWUFBWSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDM0UsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7O0lBRXBFLE9BQU8sR0FBRyxDQUFDO0FBbUNmLE1BQU0sT0FBTyx1QkFBd0IsU0FBUSxrQkFBa0I7SUFsQy9EOzs7Ozs7UUF5Q1csT0FBRSxHQUFHLG9CQUFvQixPQUFPLEVBQUUsRUFBRSxDQUFDOzs7Ozs7UUFRckMsZUFBVSxHQUFHLElBQUksQ0FBQzs7OztRQXVCbEIsZUFBVSxHQUFHLEVBQUUsQ0FBQztJQWtMM0IsQ0FBQzs7Ozs7SUE3S1UsYUFBYTtRQUNoQixJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztJQUN6QixDQUFDOzs7Ozs7SUFLTSxrQkFBa0IsQ0FBQyxL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QUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICAgQ29tcG9uZW50LFxuICAgIEhvc3RMaXN0ZW5lcixcbiAgICBWaWV3Q2hpbGQsXG4gICAgSG9zdEJpbmRpbmcsXG4gICAgSW5wdXRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IHRyaWdnZXIsIHRyYW5zaXRpb24sIHVzZUFuaW1hdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHsgZmFkZUluLCBzY2FsZUluQ2VudGVyLCBzbGlkZUluTGVmdCwgc2xpZGVJblJpZ2h0IH0gZnJvbSAnLi4vLi4vYW5pbWF0aW9ucy9tYWluJztcbmltcG9ydCB7IEtFWVMgfSBmcm9tICcuLi8uLi9jb3JlL3V0aWxzJztcbmltcG9ydCB7IElneE1vbnRoc1ZpZXdDb21wb25lbnQgfSBmcm9tICcuLi9tb250aHMtdmlldy9tb250aHMtdmlldy5jb21wb25lbnQnO1xuaW1wb3J0IHsgSWd4TW9udGhQaWNrZXJCYXNlLCBDYWxlbmRhclZpZXcgfSBmcm9tICcuLi9tb250aC1waWNrZXItYmFzZSc7XG5pbXBvcnQgeyBJZ3hZZWFyc1ZpZXdDb21wb25lbnQgfSBmcm9tICcuLi95ZWFycy12aWV3L3llYXJzLXZpZXcuY29tcG9uZW50JztcbmltcG9ydCB7IElneERheXNWaWV3Q29tcG9uZW50IH0gZnJvbSAnLi4vZGF5cy12aWV3L2RheXMtdmlldy5jb21wb25lbnQnO1xuXG5sZXQgTkVYVF9JRCA9IDA7XG5AQ29tcG9uZW50KHtcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgbXVsdGk6IHRydWUsXG4gICAgICAgICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgICAgICAgIHVzZUV4aXN0aW5nOiBJZ3hNb250aFBpY2tlckNvbXBvbmVudFxuICAgICAgICB9XG4gICAgXSxcbiAgICBhbmltYXRpb25zOiBbXG4gICAgICAgIHRyaWdnZXIoJ2FuaW1hdGVWaWV3JywgW1xuICAgICAgICAgICAgdHJhbnNpdGlvbigndm9pZCA9PiAwJywgdXNlQW5pbWF0aW9uKGZhZGVJbikpLFxuICAgICAgICAgICAgdHJhbnNpdGlvbigndm9pZCA9PiAqJywgdXNlQW5pbWF0aW9uKHNjYWxlSW5DZW50ZXIsIHtcbiAgICAgICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246ICcuMnMnLFxuICAgICAgICAgICAgICAgICAgICBmcm9tU2NhbGU6IC45XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkpXG4gICAgICAgIF0pLFxuICAgICAgICB0cmlnZ2VyKCdhbmltYXRlQ2hhbmdlJywgW1xuICAgICAgICAgICAgdHJhbnNpdGlvbignKiA9PiBwcmV2JywgdXNlQW5pbWF0aW9uKHNsaWRlSW5MZWZ0LCB7XG4gICAgICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgICAgIGZyb21Qb3NpdGlvbjogJ3RyYW5zbGF0ZVgoLTMwJSknXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkpLFxuICAgICAgICAgICAgdHJhbnNpdGlvbignKiA9PiBuZXh0JywgdXNlQW5pbWF0aW9uKHNsaWRlSW5SaWdodCwge1xuICAgICAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgICAgICBmcm9tUG9zaXRpb246ICd0cmFuc2xhdGVYKDMwJSknXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkpXG4gICAgICAgIF0pXG4gICAgXSxcbiAgICBzZWxlY3RvcjogJ2lneC1tb250aC1waWNrZXInLFxuICAgIHRlbXBsYXRlVXJsOiAnbW9udGgtcGlja2VyLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBJZ3hNb250aFBpY2tlckNvbXBvbmVudCBleHRlbmRzIElneE1vbnRoUGlja2VyQmFzZSB7XG4gICAgLyoqXG4gICAgICogU2V0cy9nZXRzIHRoZSBgaWRgIG9mIHRoZSBtb250aCBwaWNrZXIuXG4gICAgICogSWYgbm90IHNldCwgdGhlIGBpZGAgd2lsbCBoYXZlIHZhbHVlIGBcImlneC1tb250aC1waWNrZXItMFwiYC5cbiAgICAgKi9cbiAgICBASG9zdEJpbmRpbmcoJ2F0dHIuaWQnKVxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGlkID0gYGlneC1tb250aC1waWNrZXItJHtORVhUX0lEKyt9YDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBkZWZhdWx0IGNzcyBjbGFzcyBhcHBsaWVkIHRvIHRoZSBjb21wb25lbnQuXG4gICAgICpcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pZ3gtY2FsZW5kYXInKVxuICAgIHB1YmxpYyBzdHlsZUNsYXNzID0gdHJ1ZTtcblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBAVmlld0NoaWxkKCdtb250aHMnLCB7IHJlYWQ6IElneE1vbnRoc1ZpZXdDb21wb25lbnQsIHN0YXRpYzogZmFsc2UgfSlcbiAgICBwdWJsaWMgbW9udGhzVmlldzogSWd4TW9udGhzVmlld0NvbXBvbmVudDtcblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBAVmlld0NoaWxkKCdkZWNhZGUnLCB7IHJlYWQ6IElneFllYXJzVmlld0NvbXBvbmVudCwgc3RhdGljOiBmYWxzZSB9KVxuICAgIHB1YmxpYyBkYWNhZGVWaWV3OiBJZ3hZZWFyc1ZpZXdDb21wb25lbnQ7XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgQFZpZXdDaGlsZCgnZGF5cycsIHsgcmVhZDogSWd4RGF5c1ZpZXdDb21wb25lbnQsIHN0YXRpYzogZmFsc2UgfSlcbiAgICBwdWJsaWMgZGF5c1ZpZXc6IElneERheXNWaWV3Q29tcG9uZW50O1xuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyB5ZWFyQWN0aW9uID0gJyc7XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIGFuaW1hdGlvbkRvbmUoKSB7XG4gICAgICAgIHRoaXMueWVhckFjdGlvbiA9ICcnO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgYWN0aXZlVmlld0RlY2FkZUtCKGV2ZW50KSB7XG4gICAgICAgIHN1cGVyLmFjdGl2ZVZpZXdEZWNhZGVLQihldmVudCk7XG5cbiAgICAgICAgaWYgKGV2ZW50LmtleSA9PT0gS0VZUy5SSUdIVF9BUlJPVyB8fCBldmVudC5rZXkgPT09IEtFWVMuUklHSFRfQVJST1dfSUUpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0aGlzLm5leHRZZWFyKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXZlbnQua2V5ID09PSBLRVlTLkxFRlRfQVJST1cgfHwgZXZlbnQua2V5ID09PSBLRVlTLkxFRlRfQVJST1dfSUUpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0aGlzLnByZXZpb3VzWWVhcigpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLmRhY2FkZVZpZXcpIHsgdGhpcy5kYWNhZGVWaWV3LmVsLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTsgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIGFjdGl2ZVZpZXdEZWNhZGUoKSB7XG4gICAgICAgIHN1cGVyLmFjdGl2ZVZpZXdEZWNhZGUoKTtcblxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5kYWNhZGVWaWV3LmVsLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyBuZXh0WWVhcigpIHtcbiAgICAgICAgdGhpcy55ZWFyQWN0aW9uID0gJ25leHQnO1xuICAgICAgICB0aGlzLnZpZXdEYXRlID0gdGhpcy5jYWxlbmRhck1vZGVsLnRpbWVkZWx0YSh0aGlzLnZpZXdEYXRlLCAneWVhcicsIDEpO1xuXG4gICAgICAgIHRoaXMuc2VsZWN0RGF0ZSh0aGlzLnZpZXdEYXRlKTtcbiAgICAgICAgdGhpcy5vblNlbGVjdGlvbi5lbWl0KHRoaXMuc2VsZWN0ZWREYXRlcyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyBuZXh0WWVhcktCKGV2ZW50KSB7XG4gICAgICAgIGlmIChldmVudC5rZXkgPT09IEtFWVMuU1BBQ0UgfHwgZXZlbnQua2V5ID09PSBLRVlTLlNQQUNFX0lFIHx8IGV2ZW50LmtleSA9PT0gS0VZUy5FTlRFUikge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICAgICAgICB0aGlzLm5leHRZZWFyKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIHByZXZpb3VzWWVhcigpIHtcbiAgICAgICAgdGhpcy55ZWFyQWN0aW9uID0gJ3ByZXYnO1xuICAgICAgICB0aGlzLnZpZXdEYXRlID0gdGhpcy5jYWxlbmRhck1vZGVsLnRpbWVkZWx0YSh0aGlzLnZpZXdEYXRlLCAneWVhcicsIC0xKTtcblxuICAgICAgICB0aGlzLnNlbGVjdERhdGUodGhpcy52aWV3RGF0ZSk7XG4gICAgICAgIHRoaXMub25TZWxlY3Rpb24uZW1pdCh0aGlzLnNlbGVjdGVkRGF0ZXMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgcHJldmlvdXNZZWFyS0IoZXZlbnQpIHtcbiAgICAgICAgaWYgKGV2ZW50LmtleSA9PT0gS0VZUy5TUEFDRSB8fCBldmVudC5rZXkgPT09IEtFWVMuU1BBQ0VfSUUgfHwgZXZlbnQua2V5ID09PSBLRVlTLkVOVEVSKSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgICAgICAgIHRoaXMucHJldmlvdXNZZWFyKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIHNlbGVjdFllYXIoZXZlbnQ6IERhdGUpIHtcbiAgICAgICAgdGhpcy52aWV3RGF0ZSA9IG5ldyBEYXRlKGV2ZW50LmdldEZ1bGxZZWFyKCksIGV2ZW50LmdldE1vbnRoKCksIGV2ZW50LmdldERhdGUoKSk7XG4gICAgICAgIHRoaXMuYWN0aXZlVmlldyA9IENhbGVuZGFyVmlldy5ERUZBVUxUO1xuXG4gICAgICAgIHRoaXMuc2VsZWN0RGF0ZShldmVudCk7XG4gICAgICAgIHRoaXMub25TZWxlY3Rpb24uZW1pdCh0aGlzLnNlbGVjdGVkRGF0ZXMpO1xuXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnllYXJzQnRuLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyBzZWxlY3RNb250aChldmVudDogRGF0ZSkge1xuICAgICAgICB0aGlzLnNlbGVjdERhdGUoZXZlbnQpO1xuICAgICAgICB0aGlzLm9uU2VsZWN0aW9uLmVtaXQodGhpcy5zZWxlY3RlZERhdGVzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZWxlY3RzIGEgZGF0ZS5cbiAgICAgKmBgYHR5cGVzY3JpcHRcbiAgICAgKiB0aGlzLm1vblBpY2tlci5zZWxlY3REYXRlKG5ldyBEYXRlKGAyMDE4LTA2LTEyYCkpO1xuICAgICAqYGBgXG4gICAgICovXG4gICAgcHVibGljIHNlbGVjdERhdGUodmFsdWU6IERhdGUpIHtcbiAgICAgICAgaWYgKCF2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBEYXRlKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBUTyBETzogdG8gYmUgcmVmYWN0b3JlZCBhZnRlciBkaXNjdXNzaW9uIG9uIHRoZSBkZXNpcmVkIGJlaGF2aW9yXG4gICAgICAgIHN1cGVyLnNlbGVjdERhdGUodmFsdWUpO1xuICAgICAgICB0aGlzLnZpZXdEYXRlID0gdmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyB3cml0ZVZhbHVlKHZhbHVlOiBEYXRlKSB7XG5cbiAgICAgICAgLy8gVE8gRE86IHRvIGJlIHJlZmFjdG9yZWQgYWZ0ZXIgZGlzY3Vzc2lvbiBvbiB0aGUgZGVzaXJlZCBiZWhhdmlvclxuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMudmlld0RhdGUgPSB0aGlzLnNlbGVjdGVkRGF0ZXMgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBASG9zdExpc3RlbmVyKCdrZXlkb3duLnBhZ2V1cCcsIFsnJGV2ZW50J10pXG4gICAgcHVibGljIG9uS2V5ZG93blBhZ2VVcChldmVudDogS2V5Ym9hcmRFdmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLnllYXJBY3Rpb24gPSAncHJldic7XG4gICAgICAgIHRoaXMudmlld0RhdGUgPSB0aGlzLmNhbGVuZGFyTW9kZWwudGltZWRlbHRhKHRoaXMudmlld0RhdGUsICd5ZWFyJywgLTEpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBASG9zdExpc3RlbmVyKCdrZXlkb3duLnBhZ2Vkb3duJywgWyckZXZlbnQnXSlcbiAgICBwdWJsaWMgb25LZXlkb3duUGFnZURvd24oZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy55ZWFyQWN0aW9uID0gJ25leHQnO1xuICAgICAgICB0aGlzLnZpZXdEYXRlID0gdGhpcy5jYWxlbmRhck1vZGVsLnRpbWVkZWx0YSh0aGlzLnZpZXdEYXRlLCAneWVhcicsIDEpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBASG9zdExpc3RlbmVyKCdrZXlkb3duLmhvbWUnLCBbJyRldmVudCddKVxuICAgIHB1YmxpYyBvbktleWRvd25Ib21lKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgICAgIGlmICh0aGlzLm1vbnRoc1ZpZXcpIHtcbiAgICAgICAgICAgIHRoaXMubW9udGhzVmlldy5lbC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgICAgICAgICB0aGlzLm1vbnRoc1ZpZXcub25LZXlkb3duSG9tZShldmVudCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgQEhvc3RMaXN0ZW5lcigna2V5ZG93bi5lbmQnLCBbJyRldmVudCddKVxuICAgIHB1YmxpYyBvbktleWRvd25FbmQoZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICAgICAgaWYgKHRoaXMubW9udGhzVmlldykge1xuICAgICAgICAgICAgdGhpcy5tb250aHNWaWV3LmVsLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICAgICAgICAgIHRoaXMubW9udGhzVmlldy5vbktleWRvd25FbmQoZXZlbnQpO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19