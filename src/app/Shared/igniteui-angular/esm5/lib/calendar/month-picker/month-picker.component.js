/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, HostListener, ViewChild, HostBinding, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { trigger, transition, useAnimation } from '@angular/animations';
import { fadeIn, scaleInCenter, slideInLeft, slideInRight } from '../../animations/main';
import { IgxMonthsViewComponent } from '../months-view/months-view.component';
import { IgxMonthPickerBase, CalendarView } from '../month-picker-base';
import { IgxYearsViewComponent } from '../years-view/years-view.component';
import { IgxDaysViewComponent } from '../days-view/days-view.component';
/** @type {?} */
var NEXT_ID = 0;
var IgxMonthPickerComponent = /** @class */ (function (_super) {
    tslib_1.__extends(IgxMonthPickerComponent, _super);
    function IgxMonthPickerComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Sets/gets the `id` of the month picker.
         * If not set, the `id` will have value `"igx-month-picker-0"`.
         */
        _this.id = "igx-month-picker-" + NEXT_ID++;
        /**
         * The default css class applied to the component.
         *
         * @hidden
         */
        _this.styleClass = true;
        /**
         * @hidden
         */
        _this.yearAction = '';
        return _this;
    }
    /**
     * @hidden
     */
    /**
     * @hidden
     * @return {?}
     */
    IgxMonthPickerComponent.prototype.animationDone = /**
     * @hidden
     * @return {?}
     */
    function () {
        this.yearAction = '';
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    IgxMonthPickerComponent.prototype.activeViewDecadeKB = /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var _this = this;
        _super.prototype.activeViewDecadeKB.call(this, event);
        if (event.key === "ArrowRight" /* RIGHT_ARROW */ || event.key === "Right" /* RIGHT_ARROW_IE */) {
            event.preventDefault();
            this.nextYear();
        }
        if (event.key === "ArrowLeft" /* LEFT_ARROW */ || event.key === "Left" /* LEFT_ARROW_IE */) {
            event.preventDefault();
            this.previousYear();
        }
        requestAnimationFrame(function () {
            if (_this.dacadeView) {
                _this.dacadeView.el.nativeElement.focus();
            }
        });
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @return {?}
     */
    IgxMonthPickerComponent.prototype.activeViewDecade = /**
     * @hidden
     * @return {?}
     */
    function () {
        var _this = this;
        _super.prototype.activeViewDecade.call(this);
        requestAnimationFrame(function () {
            _this.dacadeView.el.nativeElement.focus();
        });
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @return {?}
     */
    IgxMonthPickerComponent.prototype.nextYear = /**
     * @hidden
     * @return {?}
     */
    function () {
        this.yearAction = 'next';
        this.viewDate = this.calendarModel.timedelta(this.viewDate, 'year', 1);
        this.selectDate(this.viewDate);
        this.onSelection.emit(this.selectedDates);
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    IgxMonthPickerComponent.prototype.nextYearKB = /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event.key === " " /* SPACE */ || event.key === "Spacebar" /* SPACE_IE */ || event.key === "Enter" /* ENTER */) {
            event.preventDefault();
            event.stopPropagation();
            this.nextYear();
        }
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @return {?}
     */
    IgxMonthPickerComponent.prototype.previousYear = /**
     * @hidden
     * @return {?}
     */
    function () {
        this.yearAction = 'prev';
        this.viewDate = this.calendarModel.timedelta(this.viewDate, 'year', -1);
        this.selectDate(this.viewDate);
        this.onSelection.emit(this.selectedDates);
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    IgxMonthPickerComponent.prototype.previousYearKB = /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event.key === " " /* SPACE */ || event.key === "Spacebar" /* SPACE_IE */ || event.key === "Enter" /* ENTER */) {
            event.preventDefault();
            event.stopPropagation();
            this.previousYear();
        }
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    IgxMonthPickerComponent.prototype.selectYear = /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var _this = this;
        this.viewDate = new Date(event.getFullYear(), event.getMonth(), event.getDate());
        this.activeView = CalendarView.DEFAULT;
        this.selectDate(event);
        this.onSelection.emit(this.selectedDates);
        requestAnimationFrame(function () {
            _this.yearsBtn.nativeElement.focus();
        });
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    IgxMonthPickerComponent.prototype.selectMonth = /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.selectDate(event);
        this.onSelection.emit(this.selectedDates);
    };
    /**
     * Selects a date.
     *```typescript
     * this.monPicker.selectDate(new Date(`2018-06-12`));
     *```
     */
    /**
     * Selects a date.
     * ```typescript
     * this.monPicker.selectDate(new Date(`2018-06-12`));
     * ```
     * @param {?} value
     * @return {?}
     */
    IgxMonthPickerComponent.prototype.selectDate = /**
     * Selects a date.
     * ```typescript
     * this.monPicker.selectDate(new Date(`2018-06-12`));
     * ```
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (!value) {
            return new Date();
        }
        // TO DO: to be refactored after discussion on the desired behavior
        _super.prototype.selectDate.call(this, value);
        this.viewDate = value;
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} value
     * @return {?}
     */
    IgxMonthPickerComponent.prototype.writeValue = /**
     * @hidden
     * @param {?} value
     * @return {?}
     */
    function (value) {
        // TO DO: to be refactored after discussion on the desired behavior
        if (value) {
            this.viewDate = this.selectedDates = value;
        }
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    IgxMonthPickerComponent.prototype.onKeydownPageUp = /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.preventDefault();
        this.yearAction = 'prev';
        this.viewDate = this.calendarModel.timedelta(this.viewDate, 'year', -1);
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    IgxMonthPickerComponent.prototype.onKeydownPageDown = /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.preventDefault();
        this.yearAction = 'next';
        this.viewDate = this.calendarModel.timedelta(this.viewDate, 'year', 1);
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    IgxMonthPickerComponent.prototype.onKeydownHome = /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.monthsView) {
            this.monthsView.el.nativeElement.focus();
            this.monthsView.onKeydownHome(event);
        }
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    IgxMonthPickerComponent.prototype.onKeydownEnd = /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.monthsView) {
            this.monthsView.el.nativeElement.focus();
            this.monthsView.onKeydownEnd(event);
        }
    };
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
    return IgxMonthPickerComponent;
}(IgxMonthPickerBase));
export { IgxMonthPickerComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9udGgtcGlja2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lnbml0ZXVpLWFuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvY2FsZW5kYXIvbW9udGgtcGlja2VyL21vbnRoLXBpY2tlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0gsU0FBUyxFQUNULFlBQVksRUFDWixTQUFTLEVBQ1QsV0FBVyxFQUNYLEtBQUssRUFDUixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNuRCxPQUFPLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN4RSxPQUFPLEVBQUUsTUFBTSxFQUFFLGFBQWEsRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFekYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDOUUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLFlBQVksRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDOztJQUVwRSxPQUFPLEdBQUcsQ0FBQztBQUNmO0lBa0M2QyxtREFBa0I7SUFsQy9EO1FBQUEscUVBMFBDOzs7OztRQWpOVSxRQUFFLEdBQUcsc0JBQW9CLE9BQU8sRUFBSSxDQUFDOzs7Ozs7UUFRckMsZ0JBQVUsR0FBRyxJQUFJLENBQUM7Ozs7UUF1QmxCLGdCQUFVLEdBQUcsRUFBRSxDQUFDOztJQWtMM0IsQ0FBQztJQWhMRzs7T0FFRzs7Ozs7SUFDSSwrQ0FBYTs7OztJQUFwQjtRQUNJLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFRDs7T0FF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LEVBQUUsSUFBSSxFQUFFLG9CQUFvQixFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7a0NBa0ovRCxZQUFZLFNBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxRQUFRLENBQUM7b0NBVXpDLFlBQVksU0FBQyxrQkFBa0IsRUFBRSxDQUFDLFFBQVEsQ0FBQztnQ0FVM0MsWUFBWSxTQUFDLGNBQWMsRUFBRSxDQUFDLFFBQVEsQ0FBQzsrQkFXdkMsWUFBWSxTQUFDLGFBQWEsRUFBRSxDQUFDLFFBQVEsQ0FBQzs7SUFPM0MsOEJBQUM7Q0FBQSxBQTFQRCxDQWtDNkMsa0JBQWtCLEdBd045RDtTQXhOWSx1QkFBdUI7Ozs7Ozs7SUFLaEMscUNBRTRDOzs7Ozs7O0lBTzVDLDZDQUN5Qjs7Ozs7SUFLekIsNkNBQzBDOzs7OztJQUsxQyw2Q0FDeUM7Ozs7O0lBS3pDLDJDQUNzQzs7Ozs7SUFLdEMsNkNBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBDb21wb25lbnQsXG4gICAgSG9zdExpc3RlbmVyLFxuICAgIFZpZXdDaGlsZCxcbiAgICBIb3N0QmluZGluZyxcbiAgICBJbnB1dFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgdHJpZ2dlciwgdHJhbnNpdGlvbiwgdXNlQW5pbWF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBmYWRlSW4sIHNjYWxlSW5DZW50ZXIsIHNsaWRlSW5MZWZ0LCBzbGlkZUluUmlnaHQgfSBmcm9tICcuLi8uLi9hbmltYXRpb25zL21haW4nO1xuaW1wb3J0IHsgS0VZUyB9IGZyb20gJy4uLy4uL2NvcmUvdXRpbHMnO1xuaW1wb3J0IHsgSWd4TW9udGhzVmlld0NvbXBvbmVudCB9IGZyb20gJy4uL21vbnRocy12aWV3L21vbnRocy12aWV3LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJZ3hNb250aFBpY2tlckJhc2UsIENhbGVuZGFyVmlldyB9IGZyb20gJy4uL21vbnRoLXBpY2tlci1iYXNlJztcbmltcG9ydCB7IElneFllYXJzVmlld0NvbXBvbmVudCB9IGZyb20gJy4uL3llYXJzLXZpZXcveWVhcnMtdmlldy5jb21wb25lbnQnO1xuaW1wb3J0IHsgSWd4RGF5c1ZpZXdDb21wb25lbnQgfSBmcm9tICcuLi9kYXlzLXZpZXcvZGF5cy12aWV3LmNvbXBvbmVudCc7XG5cbmxldCBORVhUX0lEID0gMDtcbkBDb21wb25lbnQoe1xuICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7XG4gICAgICAgICAgICBtdWx0aTogdHJ1ZSxcbiAgICAgICAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgICAgICAgdXNlRXhpc3Rpbmc6IElneE1vbnRoUGlja2VyQ29tcG9uZW50XG4gICAgICAgIH1cbiAgICBdLFxuICAgIGFuaW1hdGlvbnM6IFtcbiAgICAgICAgdHJpZ2dlcignYW5pbWF0ZVZpZXcnLCBbXG4gICAgICAgICAgICB0cmFuc2l0aW9uKCd2b2lkID0+IDAnLCB1c2VBbmltYXRpb24oZmFkZUluKSksXG4gICAgICAgICAgICB0cmFuc2l0aW9uKCd2b2lkID0+IConLCB1c2VBbmltYXRpb24oc2NhbGVJbkNlbnRlciwge1xuICAgICAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogJy4ycycsXG4gICAgICAgICAgICAgICAgICAgIGZyb21TY2FsZTogLjlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSlcbiAgICAgICAgXSksXG4gICAgICAgIHRyaWdnZXIoJ2FuaW1hdGVDaGFuZ2UnLCBbXG4gICAgICAgICAgICB0cmFuc2l0aW9uKCcqID0+IHByZXYnLCB1c2VBbmltYXRpb24oc2xpZGVJbkxlZnQsIHtcbiAgICAgICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICAgICAgZnJvbVBvc2l0aW9uOiAndHJhbnNsYXRlWCgtMzAlKSdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSksXG4gICAgICAgICAgICB0cmFuc2l0aW9uKCcqID0+IG5leHQnLCB1c2VBbmltYXRpb24oc2xpZGVJblJpZ2h0LCB7XG4gICAgICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgICAgIGZyb21Qb3NpdGlvbjogJ3RyYW5zbGF0ZVgoMzAlKSdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSlcbiAgICAgICAgXSlcbiAgICBdLFxuICAgIHNlbGVjdG9yOiAnaWd4LW1vbnRoLXBpY2tlcicsXG4gICAgdGVtcGxhdGVVcmw6ICdtb250aC1waWNrZXIuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIElneE1vbnRoUGlja2VyQ29tcG9uZW50IGV4dGVuZHMgSWd4TW9udGhQaWNrZXJCYXNlIHtcbiAgICAvKipcbiAgICAgKiBTZXRzL2dldHMgdGhlIGBpZGAgb2YgdGhlIG1vbnRoIHBpY2tlci5cbiAgICAgKiBJZiBub3Qgc2V0LCB0aGUgYGlkYCB3aWxsIGhhdmUgdmFsdWUgYFwiaWd4LW1vbnRoLXBpY2tlci0wXCJgLlxuICAgICAqL1xuICAgIEBIb3N0QmluZGluZygnYXR0ci5pZCcpXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgaWQgPSBgaWd4LW1vbnRoLXBpY2tlci0ke05FWFRfSUQrK31gO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGRlZmF1bHQgY3NzIGNsYXNzIGFwcGxpZWQgdG8gdGhlIGNvbXBvbmVudC5cbiAgICAgKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBASG9zdEJpbmRpbmcoJ2NsYXNzLmlneC1jYWxlbmRhcicpXG4gICAgcHVibGljIHN0eWxlQ2xhc3MgPSB0cnVlO1xuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIEBWaWV3Q2hpbGQoJ21vbnRocycsIHsgcmVhZDogSWd4TW9udGhzVmlld0NvbXBvbmVudCwgc3RhdGljOiBmYWxzZSB9KVxuICAgIHB1YmxpYyBtb250aHNWaWV3OiBJZ3hNb250aHNWaWV3Q29tcG9uZW50O1xuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIEBWaWV3Q2hpbGQoJ2RlY2FkZScsIHsgcmVhZDogSWd4WWVhcnNWaWV3Q29tcG9uZW50LCBzdGF0aWM6IGZhbHNlIH0pXG4gICAgcHVibGljIGRhY2FkZVZpZXc6IElneFllYXJzVmlld0NvbXBvbmVudDtcblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBAVmlld0NoaWxkKCdkYXlzJywgeyByZWFkOiBJZ3hEYXlzVmlld0NvbXBvbmVudCwgc3RhdGljOiBmYWxzZSB9KVxuICAgIHB1YmxpYyBkYXlzVmlldzogSWd4RGF5c1ZpZXdDb21wb25lbnQ7XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIHllYXJBY3Rpb24gPSAnJztcblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgYW5pbWF0aW9uRG9uZSgpIHtcbiAgICAgICAgdGhpcy55ZWFyQWN0aW9uID0gJyc7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyBhY3RpdmVWaWV3RGVjYWRlS0IoZXZlbnQpIHtcbiAgICAgICAgc3VwZXIuYWN0aXZlVmlld0RlY2FkZUtCKGV2ZW50KTtcblxuICAgICAgICBpZiAoZXZlbnQua2V5ID09PSBLRVlTLlJJR0hUX0FSUk9XIHx8IGV2ZW50LmtleSA9PT0gS0VZUy5SSUdIVF9BUlJPV19JRSkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHRoaXMubmV4dFllYXIoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChldmVudC5rZXkgPT09IEtFWVMuTEVGVF9BUlJPVyB8fCBldmVudC5rZXkgPT09IEtFWVMuTEVGVF9BUlJPV19JRSkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHRoaXMucHJldmlvdXNZZWFyKCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuZGFjYWRlVmlldykgeyB0aGlzLmRhY2FkZVZpZXcuZWwubmF0aXZlRWxlbWVudC5mb2N1cygpOyB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgYWN0aXZlVmlld0RlY2FkZSgpIHtcbiAgICAgICAgc3VwZXIuYWN0aXZlVmlld0RlY2FkZSgpO1xuXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmRhY2FkZVZpZXcuZWwubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIG5leHRZZWFyKCkge1xuICAgICAgICB0aGlzLnllYXJBY3Rpb24gPSAnbmV4dCc7XG4gICAgICAgIHRoaXMudmlld0RhdGUgPSB0aGlzLmNhbGVuZGFyTW9kZWwudGltZWRlbHRhKHRoaXMudmlld0RhdGUsICd5ZWFyJywgMSk7XG5cbiAgICAgICAgdGhpcy5zZWxlY3REYXRlKHRoaXMudmlld0RhdGUpO1xuICAgICAgICB0aGlzLm9uU2VsZWN0aW9uLmVtaXQodGhpcy5zZWxlY3RlZERhdGVzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIG5leHRZZWFyS0IoZXZlbnQpIHtcbiAgICAgICAgaWYgKGV2ZW50LmtleSA9PT0gS0VZUy5TUEFDRSB8fCBldmVudC5rZXkgPT09IEtFWVMuU1BBQ0VfSUUgfHwgZXZlbnQua2V5ID09PSBLRVlTLkVOVEVSKSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgICAgICAgIHRoaXMubmV4dFllYXIoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgcHJldmlvdXNZZWFyKCkge1xuICAgICAgICB0aGlzLnllYXJBY3Rpb24gPSAncHJldic7XG4gICAgICAgIHRoaXMudmlld0RhdGUgPSB0aGlzLmNhbGVuZGFyTW9kZWwudGltZWRlbHRhKHRoaXMudmlld0RhdGUsICd5ZWFyJywgLTEpO1xuXG4gICAgICAgIHRoaXMuc2VsZWN0RGF0ZSh0aGlzLnZpZXdEYXRlKTtcbiAgICAgICAgdGhpcy5vblNlbGVjdGlvbi5lbWl0KHRoaXMuc2VsZWN0ZWREYXRlcyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyBwcmV2aW91c1llYXJLQihldmVudCkge1xuICAgICAgICBpZiAoZXZlbnQua2V5ID09PSBLRVlTLlNQQUNFIHx8IGV2ZW50LmtleSA9PT0gS0VZUy5TUEFDRV9JRSB8fCBldmVudC5rZXkgPT09IEtFWVMuRU5URVIpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgICAgICAgdGhpcy5wcmV2aW91c1llYXIoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgc2VsZWN0WWVhcihldmVudDogRGF0ZSkge1xuICAgICAgICB0aGlzLnZpZXdEYXRlID0gbmV3IERhdGUoZXZlbnQuZ2V0RnVsbFllYXIoKSwgZXZlbnQuZ2V0TW9udGgoKSwgZXZlbnQuZ2V0RGF0ZSgpKTtcbiAgICAgICAgdGhpcy5hY3RpdmVWaWV3ID0gQ2FsZW5kYXJWaWV3LkRFRkFVTFQ7XG5cbiAgICAgICAgdGhpcy5zZWxlY3REYXRlKGV2ZW50KTtcbiAgICAgICAgdGhpcy5vblNlbGVjdGlvbi5lbWl0KHRoaXMuc2VsZWN0ZWREYXRlcyk7XG5cbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMueWVhcnNCdG4ubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIHNlbGVjdE1vbnRoKGV2ZW50OiBEYXRlKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0RGF0ZShldmVudCk7XG4gICAgICAgIHRoaXMub25TZWxlY3Rpb24uZW1pdCh0aGlzLnNlbGVjdGVkRGF0ZXMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNlbGVjdHMgYSBkYXRlLlxuICAgICAqYGBgdHlwZXNjcmlwdFxuICAgICAqIHRoaXMubW9uUGlja2VyLnNlbGVjdERhdGUobmV3IERhdGUoYDIwMTgtMDYtMTJgKSk7XG4gICAgICpgYGBcbiAgICAgKi9cbiAgICBwdWJsaWMgc2VsZWN0RGF0ZSh2YWx1ZTogRGF0ZSkge1xuICAgICAgICBpZiAoIXZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IERhdGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFRPIERPOiB0byBiZSByZWZhY3RvcmVkIGFmdGVyIGRpc2N1c3Npb24gb24gdGhlIGRlc2lyZWQgYmVoYXZpb3JcbiAgICAgICAgc3VwZXIuc2VsZWN0RGF0ZSh2YWx1ZSk7XG4gICAgICAgIHRoaXMudmlld0RhdGUgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIHdyaXRlVmFsdWUodmFsdWU6IERhdGUpIHtcblxuICAgICAgICAvLyBUTyBETzogdG8gYmUgcmVmYWN0b3JlZCBhZnRlciBkaXNjdXNzaW9uIG9uIHRoZSBkZXNpcmVkIGJlaGF2aW9yXG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy52aWV3RGF0ZSA9IHRoaXMuc2VsZWN0ZWREYXRlcyA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIEBIb3N0TGlzdGVuZXIoJ2tleWRvd24ucGFnZXVwJywgWyckZXZlbnQnXSlcbiAgICBwdWJsaWMgb25LZXlkb3duUGFnZVVwKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMueWVhckFjdGlvbiA9ICdwcmV2JztcbiAgICAgICAgdGhpcy52aWV3RGF0ZSA9IHRoaXMuY2FsZW5kYXJNb2RlbC50aW1lZGVsdGEodGhpcy52aWV3RGF0ZSwgJ3llYXInLCAtMSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIEBIb3N0TGlzdGVuZXIoJ2tleWRvd24ucGFnZWRvd24nLCBbJyRldmVudCddKVxuICAgIHB1YmxpYyBvbktleWRvd25QYWdlRG93bihldmVudDogS2V5Ym9hcmRFdmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLnllYXJBY3Rpb24gPSAnbmV4dCc7XG4gICAgICAgIHRoaXMudmlld0RhdGUgPSB0aGlzLmNhbGVuZGFyTW9kZWwudGltZWRlbHRhKHRoaXMudmlld0RhdGUsICd5ZWFyJywgMSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIEBIb3N0TGlzdGVuZXIoJ2tleWRvd24uaG9tZScsIFsnJGV2ZW50J10pXG4gICAgcHVibGljIG9uS2V5ZG93bkhvbWUoZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICAgICAgaWYgKHRoaXMubW9udGhzVmlldykge1xuICAgICAgICAgICAgdGhpcy5tb250aHNWaWV3LmVsLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICAgICAgICAgIHRoaXMubW9udGhzVmlldy5vbktleWRvd25Ib21lKGV2ZW50KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBASG9zdExpc3RlbmVyKCdrZXlkb3duLmVuZCcsIFsnJGV2ZW50J10pXG4gICAgcHVibGljIG9uS2V5ZG93bkVuZChldmVudDogS2V5Ym9hcmRFdmVudCkge1xuICAgICAgICBpZiAodGhpcy5tb250aHNWaWV3KSB7XG4gICAgICAgICAgICB0aGlzLm1vbnRoc1ZpZXcuZWwubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgICAgICAgICAgdGhpcy5tb250aHNWaWV3Lm9uS2V5ZG93bkVuZChldmVudCk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=