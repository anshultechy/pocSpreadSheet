/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { transition, trigger, useAnimation } from '@angular/animations';
import { Component, ContentChild, forwardRef, HostBinding, HostListener, Input, ViewChild, ElementRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { fadeIn, scaleInCenter } from '../animations/main';
import { IgxCalendarHeaderTemplateDirective, IgxCalendarSubheaderTemplateDirective } from './calendar.directives';
import { monthRange } from './calendar';
import { CalendarView, IgxMonthPickerBase } from './month-picker-base';
import { IgxMonthsViewComponent } from './months-view/months-view.component';
import { IgxYearsViewComponent } from './years-view/years-view.component';
import { IgxDaysViewComponent } from './days-view/days-view.component';
import { interval } from 'rxjs';
import { takeUntil, debounce, skipLast, switchMap } from 'rxjs/operators';
import { ScrollMonth } from './calendar-base';
/** @type {?} */
let NEXT_ID = 0;
/**
 * **Ignite UI for Angular Calendar** -
 * [Documentation](https://www.infragistics.com/products/ignite-ui-angular/angular/components/calendar.html)
 *
 * The Ignite UI Calendar provides an easy way to display a calendar and allow users to select dates using single, multiple
 * or range selection.
 *
 * Example:
 * ```html
 * <igx-calendar selection="range"></igx-calendar>
 * ```
 */
export class IgxCalendarComponent extends IgxMonthPickerBase {
    constructor() {
        super(...arguments);
        /**
         * Sets/gets the `id` of the calendar.
         * If not set, the `id` will have value `"igx-calendar-0"`.
         * ```html
         * <igx-calendar id = "my-first-calendar"></igx-calendar>
         * ```
         * ```typescript
         * let calendarId =  this.calendar.id;
         * ```
         * \@memberof IgxCalendarComponent
         */
        this.id = `igx-calendar-${NEXT_ID++}`;
        this.hasHeader = true;
        /**
         * Sets/gets whether the calendar header will be in vertical position.
         * Default value is `false`.
         * ```html
         * <igx-calendar [vertical] = "true"></igx-calendar>
         * ```
         * ```typescript
         * let isVertical = this.calendar.vertical;
         * ```
         */
        this.vertical = false;
        /**
         * The default `tabindex` attribute for the component.
         *
         * @hidden
         */
        this.tabindex = 0;
        /**
         * The default aria role attribute for the component.
         *
         * @hidden
         */
        this.role = 'grid';
        /**
         * The default aria lebelled by attribute for the component.
         *
         * @hidden
         */
        this.ariaLabelledBy = 'calendar';
        /**
         * The default css class applied to the component.
         *
         * @hidden
         */
        this.styleClass = true;
        /**
         * @hidden
         */
        this._monthAction = '';
        /**
         * @hidden
         */
        this.startPrevMonthScroll = (isKeydownTrigger = false) => {
            this.startMonthScroll$.next();
            this.daysView.monthScrollDirection = ScrollMonth.PREV;
            this.previousMonth(isKeydownTrigger);
        };
        /**
         * @hidden
         */
        this.startNextMonthScroll = (isKeydownTrigger = false) => {
            this.startMonthScroll$.next();
            this.daysView.monthScrollDirection = ScrollMonth.NEXT;
            this.nextMonth(isKeydownTrigger);
        };
        /**
         * @hidden
         */
        this.stopMonthScroll = (event) => {
            event.stopPropagation();
            this.daysView.stopMonthScroll$.next(true);
            this.daysView.stopMonthScroll$.complete();
            if (this.daysView.monthScrollDirection === ScrollMonth.PREV) {
                this.prevMonthBtn.nativeElement.focus();
            }
            else if (this.daysView.monthScrollDirection === ScrollMonth.NEXT) {
                this.nextMonthBtn.nativeElement.focus();
            }
            this.daysView.monthScrollDirection = ScrollMonth.NONE;
        };
    }
    /**
     * The default css class applied to the component.
     *
     * @hidden
     * @return {?}
     */
    get styleVerticalClass() {
        return this.vertical;
    }
    /**
     * @hidden
     * @return {?}
     */
    get isYearView() {
        return this.activeView === CalendarView.YEAR;
    }
    /**
     * @hidden
     * @return {?}
     */
    get monthAction() {
        return this._monthAction;
    }
    /**
     * @hidden
     * @param {?} val
     * @return {?}
     */
    set monthAction(val) {
        this._monthAction = val;
    }
    /**
     * Gets the header template.
     * ```typescript
     * let headerTemplate =  this.calendar.headerTeamplate;
     * ```
     * \@memberof IgxCalendarComponent
     * @return {?}
     */
    get headerTemplate() {
        if (this.headerTemplateDirective) {
            return this.headerTemplateDirective.template;
        }
        return null;
    }
    /**
     * Sets the header template.
     * ```html
     * <igx-calendar headerTemplateDirective = "igxCalendarHeader"></igx-calendar>
     * ```
     * \@memberof IgxCalendarComponent
     * @param {?} directive
     * @return {?}
     */
    set headerTemplate(directive) {
        this.headerTemplateDirective = directive;
    }
    /**
     * Gets the subheader template.
     * ```typescript
     * let subheaderTemplate = this.calendar.subheaderTemplate;
     * ```
     * @return {?}
     */
    get subheaderTemplate() {
        if (this.subheaderTemplateDirective) {
            return this.subheaderTemplateDirective.template;
        }
        return null;
    }
    /**
     * Sets the subheader template.
     * ```html
     * <igx-calendar subheaderTemplate = "igxCalendarSubheader"></igx-calendar>
     * ```
     * \@memberof IgxCalendarComponent
     * @param {?} directive
     * @return {?}
     */
    set subheaderTemplate(directive) {
        this.subheaderTemplateDirective = directive;
    }
    /**
     * Gets the context for the template marked with the `igxCalendarHeader` directive.
     * ```typescript
     * let headerContext =  this.calendar.headerContext;
     * ```
     * @return {?}
     */
    get headerContext() {
        /** @type {?} */
        const date = this.headerDate;
        return this.generateContext(date);
    }
    /**
     * Gets the context for the template marked with either `igxCalendarSubHeaderMonth`
     * or `igxCalendarSubHeaderYear` directive.
     * ```typescript
     * let context =  this.calendar.context;
     * ```
     * @return {?}
     */
    get context() {
        /** @type {?} */
        const date = this.viewDate;
        return this.generateContext(date);
    }
    /**
     * @hidden
     * @return {?}
     */
    get headerDate() {
        return this.selectedDates ? this.selectedDates : new Date();
    }
    /**
     * @hidden
     * @return {?}
     */
    ngAfterViewInit() {
        this.startMonthScroll$.pipe(takeUntil(this.stopMonthScroll$), switchMap(() => this.daysView.scrollMonth$.pipe(skipLast(1), debounce(() => interval(300)), takeUntil(this.stopMonthScroll$)))).subscribe(() => {
            switch (this.daysView.monthScrollDirection) {
                case ScrollMonth.PREV:
                    this.previousMonth();
                    break;
                case ScrollMonth.NEXT:
                    this.nextMonth();
                    break;
                case ScrollMonth.NONE:
                default:
                    break;
            }
        });
    }
    /**
     * Returns the locale representation of the month in the month view if enabled,
     * otherwise returns the default `Date.getMonth()` value.
     *
     * @hidden
     * @param {?} value
     * @return {?}
     */
    formattedMonth(value) {
        if (this.formatViews.month) {
            return this.formatterMonth.format(value);
        }
        return `${value.getMonth()}`;
    }
    /**
     * @hidden
     * @param {?=} isKeydownTrigger
     * @return {?}
     */
    previousMonth(isKeydownTrigger = false) {
        this.viewDate = this.calendarModel.timedelta(this.viewDate, 'month', -1);
        this._monthAction = 'prev';
        if (this.daysView) {
            this.daysView.isKeydownTrigger = isKeydownTrigger;
        }
    }
    /**
     * @hidden
     * @param {?=} isKeydownTrigger
     * @return {?}
     */
    nextMonth(isKeydownTrigger = false) {
        this.viewDate = this.calendarModel.timedelta(this.viewDate, 'month', 1);
        this._monthAction = 'next';
        if (this.daysView) {
            this.daysView.isKeydownTrigger = isKeydownTrigger;
        }
    }
    /**
     * @hidden
     * @return {?}
     */
    activeViewDecade() {
        super.activeViewDecade();
        requestAnimationFrame(() => {
            if (this.dacadeView) {
                this.dacadeView.el.nativeElement.focus();
            }
        });
    }
    /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    activeViewDecadeKB(event) {
        super.activeViewDecadeKB(event);
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
    getFormattedDate() {
        /** @type {?} */
        const date = this.headerDate;
        return {
            monthday: this.formatterMonthday.format(date),
            weekday: this.formatterWeekday.format(date),
        };
    }
    /**
     * @hidden
     * @param {?} instance
     * @return {?}
     */
    childClicked(instance) {
        if (instance.isPrevMonth) {
            this.previousMonth();
        }
        if (instance.isNextMonth) {
            this.nextMonth();
        }
        this.selectDateFromClient(instance.date);
        this.onSelection.emit(this.selectedDates);
    }
    /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    viewChanged(event) {
        this.viewDate = this.calendarModel.timedelta(event, 'month', 0);
    }
    /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    changeMonth(event) {
        this.viewDate = new Date(this.viewDate.getFullYear(), event.getMonth());
        this.activeView = CalendarView.DEFAULT;
        requestAnimationFrame(() => {
            this.monthsBtn.nativeElement.focus();
        });
    }
    /**
     * @hidden
     * @return {?}
     */
    activeViewYear() {
        this.activeView = CalendarView.YEAR;
        requestAnimationFrame(() => {
            this.monthsView.dates.find((date) => date.isCurrentMonth).nativeElement.focus();
        });
    }
    /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    activeViewYearKB(event) {
        if (event.key === " " /* SPACE */ || event.key === "Spacebar" /* SPACE_IE */ || event.key === "Enter" /* ENTER */) {
            event.preventDefault();
            this.activeViewYear();
        }
    }
    /**
     * Deselects date(s) (based on the selection type).
     * ```typescript
     * this.calendar.deselectDate(new Date(`2018-06-12`));
     * ````
     * @param {?=} value
     * @return {?}
     */
    deselectDate(value) {
        super.deselectDate(value);
        this.daysView.selectedDates = this.selectedDates;
        this._onChangeCallback(this.selectedDates);
    }
    /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    onKeydownPageUp(event) {
        event.preventDefault();
        /** @type {?} */
        const activeDate = this.daysView.dates.find((date) => date.nativeElement === document.activeElement);
        if (activeDate) {
            this.daysView.nextDate = new Date(activeDate.date.date);
            /** @type {?} */
            let year = this.daysView.nextDate.getFullYear();
            /** @type {?} */
            let month = this.daysView.nextDate.getMonth() - 1;
            if (month < 0) {
                month = 11;
                year -= 1;
            }
            /** @type {?} */
            const range = monthRange(this.daysView.nextDate.getFullYear(), month);
            /** @type {?} */
            let day = this.daysView.nextDate.getDate();
            if (day > range[1]) {
                day = range[1];
            }
            this.daysView.nextDate.setDate(day);
            this.daysView.nextDate.setMonth(month);
            this.daysView.nextDate.setFullYear(year);
            this.daysView.callback = (dates, next) => {
                /** @type {?} */
                const dayItem = dates.find((d) => d.date.date.getTime() === next.getTime());
                if (dayItem) {
                    dayItem.nativeElement.focus();
                }
            };
        }
        this.previousMonth(true);
    }
    /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    onKeydownPageDown(event) {
        event.preventDefault();
        this.nextMonth(true);
        /** @type {?} */
        const activeDate = this.daysView.dates.find((date) => date.nativeElement === document.activeElement);
        if (activeDate) {
            this.daysView.nextDate = new Date(activeDate.date.date);
            /** @type {?} */
            let year = this.daysView.nextDate.getFullYear();
            /** @type {?} */
            let month = this.daysView.nextDate.getMonth() + 1;
            if (month > 11) {
                month = 0;
                year += 1;
            }
            /** @type {?} */
            const range = monthRange(this.daysView.nextDate.getFullYear(), month);
            /** @type {?} */
            let day = this.daysView.nextDate.getDate();
            if (day > range[1]) {
                day = range[1];
            }
            this.daysView.nextDate.setDate(day);
            this.daysView.nextDate.setMonth(month);
            this.daysView.nextDate.setFullYear(year);
            this.daysView.callback = (dates, next) => {
                /** @type {?} */
                const dayItem = dates.find((d) => d.date.date.getTime() === next.getTime());
                if (dayItem) {
                    dayItem.nativeElement.focus();
                }
            };
        }
    }
    /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    onKeydownShiftPageUp(event) {
        event.preventDefault();
        this.viewDate = this.calendarModel.timedelta(this.viewDate, 'year', -1);
        this.daysView.animationAction = 'prev';
        this.daysView.isKeydownTrigger = true;
        /** @type {?} */
        const activeDate = this.daysView.dates.find((date) => date.nativeElement === document.activeElement);
        if (activeDate) {
            this.daysView.nextDate = new Date(activeDate.date.date);
            /** @type {?} */
            const year = this.daysView.nextDate.getFullYear() - 1;
            /** @type {?} */
            const range = monthRange(year, this.daysView.nextDate.getMonth());
            /** @type {?} */
            let day = this.daysView.nextDate.getDate();
            if (day > range[1]) {
                day = range[1];
            }
            this.daysView.nextDate.setDate(day);
            this.daysView.nextDate.setFullYear(year);
            this.daysView.callback = (dates, next) => {
                /** @type {?} */
                const dayItem = dates.find((d) => d.date.date.getTime() === next.getTime());
                if (dayItem) {
                    dayItem.nativeElement.focus();
                }
            };
        }
    }
    /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    onKeydownShiftPageDown(event) {
        event.preventDefault();
        this.viewDate = this.calendarModel.timedelta(this.viewDate, 'year', 1);
        this.daysView.animationAction = 'next';
        this.daysView.isKeydownTrigger = true;
        /** @type {?} */
        const activeDate = this.daysView.dates.find((date) => date.nativeElement === document.activeElement);
        if (activeDate) {
            this.daysView.nextDate = new Date(activeDate.date.date);
            /** @type {?} */
            const year = this.daysView.nextDate.getFullYear() + 1;
            /** @type {?} */
            const range = monthRange(year, this.daysView.nextDate.getMonth());
            /** @type {?} */
            let day = this.daysView.nextDate.getDate();
            if (day > range[1]) {
                day = range[1];
            }
            this.daysView.nextDate.setDate(day);
            this.daysView.nextDate.setFullYear(year);
            this.daysView.callback = (dates, next) => {
                /** @type {?} */
                const dayItem = dates.find((d) => d.date.date.getTime() === next.getTime());
                if (dayItem) {
                    dayItem.nativeElement.focus();
                }
            };
        }
    }
    /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    onKeydownHome(event) {
        if (this.daysView) {
            this.daysView.onKeydownHome(event);
        }
    }
    /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    onKeydownEnd(event) {
        if (this.daysView) {
            this.daysView.onKeydownEnd(event);
        }
    }
    /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    onMouseUp(event) {
        if (this.daysView && this.daysView.monthScrollDirection !== ScrollMonth.NONE) {
            this.stopMonthScroll(event);
        }
    }
    /**
     * Helper method building and returning the context object inside
     * the calendar templates.
     * @hidden
     * @private
     * @param {?} value
     * @return {?}
     */
    generateContext(value) {
        /** @type {?} */
        const formatObject = Object.assign({ monthView: () => this.activeViewYear(), yearView: () => this.activeViewDecade() }, this.calendarModel.formatToParts(value, this.locale, this.formatOptions, ['era', 'year', 'month', 'day', 'weekday']));
        return { $implicit: formatObject };
    }
}
IgxCalendarComponent.decorators = [
    { type: Component, args: [{
                providers: [
                    {
                        multi: true,
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: IgxCalendarComponent
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
                    ])
                ],
                selector: 'igx-calendar',
                template: "<ng-template let-result #defaultHeader>\n    <span>{{ getFormattedDate().weekday }},&nbsp;</span>\n    <span>{{ getFormattedDate().monthday }}</span>\n</ng-template>\n\n<ng-template let-result #defaultMonth>\n    <span tabindex=\"0\" #monthsBtn (keydown)=\"activeViewYearKB($event)\" (click)=\"activeViewYear()\"\n        class=\"igx-calendar-picker__date\">\n        {{ formattedMonth(viewDate) }}\n    </span>\n    <span tabindex=\"0\" #yearsBtn (keydown)=\"activeViewDecadeKB($event)\" (click)=\"activeViewDecade()\"\n        class=\"igx-calendar-picker__date\">\n        {{ formattedYear(viewDate) }}\n    </span>\n</ng-template>\n\n<div *ngIf=\"selection === 'single' && hasHeader\" class=\"igx-calendar__header\">\n    <h5 class=\"igx-calendar__header-year\">{{ formattedYear(headerDate) }}</h5>\n    <h2 class=\"igx-calendar__header-date\">\n        <ng-container *ngTemplateOutlet=\"headerTemplate ? headerTemplate : defaultHeader; context: headerContext\">\n        </ng-container>\n    </h2>\n</div>\n\n<div *ngIf=\"isDefaultView\" class=\"igx-calendar__body\" [@animateView]=\"activeView\" (swiperight)=\"previousMonth()\"\n    (swipeleft)=\"nextMonth()\">\n    <div class=\"igx-calendar-picker\">\n        <div tabindex=\"0\" class=\"igx-calendar-picker__prev\" #prevMonthBtn\n            igxCalendarScrollMonth [startScroll]=\"startPrevMonthScroll\" [stopScroll]=\"stopMonthScroll\">\n            <igx-icon fontSet=\"material\">keyboard_arrow_left</igx-icon>\n        </div>\n        <div>\n            <ng-container *ngTemplateOutlet=\"subheaderTemplate ? subheaderTemplate : defaultMonth; context: context\">\n            </ng-container>\n        </div>\n        <div tabindex=\"0\" class=\"igx-calendar-picker__next\" #nextMonthBtn\n            igxCalendarScrollMonth [startScroll]=\"startNextMonthScroll\" [stopScroll]=\"stopMonthScroll\">\n            <igx-icon fontSet=\"material\">keyboard_arrow_right</igx-icon>\n        </div>\n    </div>\n\n    <igx-days-view [changeDaysView]=\"true\" #days\n                   [animationAction]=\"monthAction\"\n                   [locale]=\"locale\"\n                   [value]=\"value\"\n                   [viewDate]=\"viewDate\"\n                   [weekStart]=\"weekStart\"\n                   [formatOptions]=\"formatOptions\"\n                   [formatViews]=\"formatViews\"\n                   [selection]=\"selection\"\n                   [disabledDates]=\"disabledDates\"\n                   [specialDates]=\"specialDates\"\n                   (onViewChanged)=\"viewChanged($event)\"\n                   (onDateSelection)=\"childClicked($event)\">\n    </igx-days-view>\n</div>\n\n<igx-months-view *ngIf=\"isYearView\" [@animateView]=\"activeView\" #months \n                 [date]=\"viewDate\" \n                 [locale]=\"locale\"\n                 [formatView]=\"formatViews.month\"\n                 [monthFormat]=\"formatOptions.month\" \n                 (onSelection)=\"changeMonth($event)\">\n</igx-months-view>\n\n<igx-years-view *ngIf=\"isDecadeView\" [@animateView]=\"activeView\" #decade \n                [date]=\"viewDate\" \n                [locale]=\"locale\"\n                [formatView]=\"formatViews.year\"\n                [yearFormat]=\"formatOptions.year\" \n                (onSelection)=\"changeYear($event)\">\n</igx-years-view>"
            }] }
];
IgxCalendarComponent.propDecorators = {
    id: [{ type: HostBinding, args: ['attr.id',] }, { type: Input }],
    hasHeader: [{ type: Input }],
    vertical: [{ type: Input }],
    tabindex: [{ type: HostBinding, args: ['attr.tabindex',] }],
    role: [{ type: HostBinding, args: ['attr.role',] }],
    ariaLabelledBy: [{ type: HostBinding, args: ['attr.aria-labelledby',] }],
    styleVerticalClass: [{ type: HostBinding, args: ['class.igx-calendar--vertical',] }],
    styleClass: [{ type: HostBinding, args: ['class.igx-calendar',] }],
    monthsView: [{ type: ViewChild, args: ['months', { read: IgxMonthsViewComponent, static: false },] }],
    monthsBtn: [{ type: ViewChild, args: ['monthsBtn', { static: false },] }],
    dacadeView: [{ type: ViewChild, args: ['decade', { read: IgxYearsViewComponent, static: false },] }],
    daysView: [{ type: ViewChild, args: ['days', { read: IgxDaysViewComponent, static: false },] }],
    prevMonthBtn: [{ type: ViewChild, args: ['prevMonthBtn', { static: false },] }],
    nextMonthBtn: [{ type: ViewChild, args: ['nextMonthBtn', { static: false },] }],
    headerTemplateDirective: [{ type: ContentChild, args: [forwardRef(() => IgxCalendarHeaderTemplateDirective), { read: IgxCalendarHeaderTemplateDirective, static: true },] }],
    subheaderTemplateDirective: [{ type: ContentChild, args: [forwardRef(() => IgxCalendarSubheaderTemplateDirective), { read: IgxCalendarSubheaderTemplateDirective, static: true },] }],
    onKeydownPageUp: [{ type: HostListener, args: ['keydown.pageup', ['$event'],] }],
    onKeydownPageDown: [{ type: HostListener, args: ['keydown.pagedown', ['$event'],] }],
    onKeydownShiftPageUp: [{ type: HostListener, args: ['keydown.shift.pageup', ['$event'],] }],
    onKeydownShiftPageDown: [{ type: HostListener, args: ['keydown.shift.pagedown', ['$event'],] }],
    onKeydownHome: [{ type: HostListener, args: ['keydown.home', ['$event'],] }],
    onKeydownEnd: [{ type: HostListener, args: ['keydown.end', ['$event'],] }],
    onMouseUp: [{ type: HostListener, args: ['document:mouseup', ['$event'],] }]
};
if (false) {
    /**
     * Sets/gets the `id` of the calendar.
     * If not set, the `id` will have value `"igx-calendar-0"`.
     * ```html
     * <igx-calendar id = "my-first-calendar"></igx-calendar>
     * ```
     * ```typescript
     * let calendarId =  this.calendar.id;
     * ```
     * \@memberof IgxCalendarComponent
     * @type {?}
     */
    IgxCalendarComponent.prototype.id;
    /** @type {?} */
    IgxCalendarComponent.prototype.hasHeader;
    /**
     * Sets/gets whether the calendar header will be in vertical position.
     * Default value is `false`.
     * ```html
     * <igx-calendar [vertical] = "true"></igx-calendar>
     * ```
     * ```typescript
     * let isVertical = this.calendar.vertical;
     * ```
     * @type {?}
     */
    IgxCalendarComponent.prototype.vertical;
    /**
     * The default `tabindex` attribute for the component.
     *
     * @hidden
     * @type {?}
     */
    IgxCalendarComponent.prototype.tabindex;
    /**
     * The default aria role attribute for the component.
     *
     * @hidden
     * @type {?}
     */
    IgxCalendarComponent.prototype.role;
    /**
     * The default aria lebelled by attribute for the component.
     *
     * @hidden
     * @type {?}
     */
    IgxCalendarComponent.prototype.ariaLabelledBy;
    /**
     * The default css class applied to the component.
     *
     * @hidden
     * @type {?}
     */
    IgxCalendarComponent.prototype.styleClass;
    /**
     * @hidden
     * @type {?}
     */
    IgxCalendarComponent.prototype.monthsView;
    /**
     * @hidden
     * @type {?}
     */
    IgxCalendarComponent.prototype.monthsBtn;
    /**
     * @hidden
     * @type {?}
     */
    IgxCalendarComponent.prototype.dacadeView;
    /**
     * @hidden
     * @type {?}
     */
    IgxCalendarComponent.prototype.daysView;
    /**
     * @hidden
     * @type {?}
     */
    IgxCalendarComponent.prototype.prevMonthBtn;
    /**
     * @hidden
     * @type {?}
     */
    IgxCalendarComponent.prototype.nextMonthBtn;
    /**
     * @hidden
     * @type {?}
     * @private
     */
    IgxCalendarComponent.prototype.headerTemplateDirective;
    /**
     * @hidden
     * @type {?}
     * @private
     */
    IgxCalendarComponent.prototype.subheaderTemplateDirective;
    /**
     * @hidden
     * @type {?}
     * @private
     */
    IgxCalendarComponent.prototype._monthAction;
    /**
     * @hidden
     * @type {?}
     */
    IgxCalendarComponent.prototype.startPrevMonthScroll;
    /**
     * @hidden
     * @type {?}
     */
    IgxCalendarComponent.prototype.startNextMonthScroll;
    /**
     * @hidden
     * @type {?}
     */
    IgxCalendarComponent.prototype.stopMonthScroll;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vaWduaXRldWktYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9jYWxlbmRhci9jYWxlbmRhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3hFLE9BQU8sRUFDSCxTQUFTLEVBQ1QsWUFBWSxFQUNaLFVBQVUsRUFDVixXQUFXLEVBQ1gsWUFBWSxFQUNaLEtBQUssRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUViLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxNQUFNLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDM0QsT0FBTyxFQUNILGtDQUFrQyxFQUNsQyxxQ0FBcUMsRUFDeEMsTUFBTSx1QkFBdUIsQ0FBQztBQUUvQixPQUFPLEVBQWlCLFVBQVUsRUFBRSxNQUFNLFlBQVksQ0FBQztBQUN2RCxPQUFPLEVBQUUsWUFBWSxFQUFFLGtCQUFrQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdkUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDN0UsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDMUUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDdkUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNoQyxPQUFPLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDMUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGlCQUFpQixDQUFDOztJQUUxQyxPQUFPLEdBQUcsQ0FBQzs7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QixFQUFFLENBQUMsUUFBUSxDQUFDOzRCQWdDakQsWUFBWSxTQUFDLGNBQWMsRUFBRSxDQUFDLFFBQVEsQ0FBQzsyQkFVdkMsWUFBWSxTQUFDLGFBQWEsRUFBRSxDQUFDLFFBQVEsQ0FBQzt3QkFVdEMsWUFBWSxTQUFDLGtCQUFrQixFQUFFLENBQUMsUUFBUSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7SUFua0I1QyxrQ0FFd0M7O0lBRXhDLHlDQUN3Qjs7Ozs7Ozs7Ozs7O0lBWXhCLHdDQUN3Qjs7Ozs7OztJQU94Qix3Q0FDb0I7Ozs7Ozs7SUFPcEIsb0NBQ3FCOzs7Ozs7O0lBT3JCLDhDQUNtQzs7Ozs7OztJQWlCbkMsMENBQ3lCOzs7OztJQUt6QiwwQ0FDMEM7Ozs7O0lBSzFDLHlDQUM2Qjs7Ozs7SUFLN0IsMENBQ3lDOzs7OztJQUt6Qyx3Q0FDc0M7Ozs7O0lBS3RDLDRDQUNnQzs7Ozs7SUFLaEMsNENBQ2dDOzs7Ozs7SUF3R2hDLHVEQUNvRTs7Ozs7O0lBTXBFLDBEQUMwRTs7Ozs7O0lBSzFFLDRDQUEwQjs7Ozs7SUFvRTFCLG9EQUtDOzs7OztJQUtELG9EQUtDOzs7OztJQUtELCtDQWNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdHJhbnNpdGlvbiwgdHJpZ2dlciwgdXNlQW5pbWF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQge1xuICAgIENvbXBvbmVudCxcbiAgICBDb250ZW50Q2hpbGQsXG4gICAgZm9yd2FyZFJlZixcbiAgICBIb3N0QmluZGluZyxcbiAgICBIb3N0TGlzdGVuZXIsXG4gICAgSW5wdXQsXG4gICAgVmlld0NoaWxkLFxuICAgIEVsZW1lbnRSZWYsXG4gICAgQWZ0ZXJWaWV3SW5pdFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgZmFkZUluLCBzY2FsZUluQ2VudGVyIH0gZnJvbSAnLi4vYW5pbWF0aW9ucy9tYWluJztcbmltcG9ydCB7XG4gICAgSWd4Q2FsZW5kYXJIZWFkZXJUZW1wbGF0ZURpcmVjdGl2ZSxcbiAgICBJZ3hDYWxlbmRhclN1YmhlYWRlclRlbXBsYXRlRGlyZWN0aXZlXG59IGZyb20gJy4vY2FsZW5kYXIuZGlyZWN0aXZlcyc7XG5pbXBvcnQgeyBLRVlTIH0gZnJvbSAnLi4vY29yZS91dGlscyc7XG5pbXBvcnQgeyBJQ2FsZW5kYXJEYXRlLCBtb250aFJhbmdlIH0gZnJvbSAnLi9jYWxlbmRhcic7XG5pbXBvcnQgeyBDYWxlbmRhclZpZXcsIElneE1vbnRoUGlja2VyQmFzZSB9IGZyb20gJy4vbW9udGgtcGlja2VyLWJhc2UnO1xuaW1wb3J0IHsgSWd4TW9udGhzVmlld0NvbXBvbmVudCB9IGZyb20gJy4vbW9udGhzLXZpZXcvbW9udGhzLXZpZXcuY29tcG9uZW50JztcbmltcG9ydCB7IElneFllYXJzVmlld0NvbXBvbmVudCB9IGZyb20gJy4veWVhcnMtdmlldy95ZWFycy12aWV3LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJZ3hEYXlzVmlld0NvbXBvbmVudCB9IGZyb20gJy4vZGF5cy12aWV3L2RheXMtdmlldy5jb21wb25lbnQnO1xuaW1wb3J0IHsgaW50ZXJ2YWwgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCwgZGVib3VuY2UsIHNraXBMYXN0LCBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBTY3JvbGxNb250aCB9IGZyb20gJy4vY2FsZW5kYXItYmFzZSc7XG5cbmxldCBORVhUX0lEID0gMDtcblxuLyoqXG4gKiAqKklnbml0ZSBVSSBmb3IgQW5ndWxhciBDYWxlbmRhcioqIC1cbiAqIFtEb2N1bWVudGF0aW9uXShodHRwczovL3d3dy5pbmZyYWdpc3RpY3MuY29tL3Byb2R1Y3RzL2lnbml0ZS11aS1hbmd1bGFyL2FuZ3VsYXIvY29tcG9uZW50cy9jYWxlbmRhci5odG1sKVxuICpcbiAqIFRoZSBJZ25pdGUgVUkgQ2FsZW5kYXIgcHJvdmlkZXMgYW4gZWFzeSB3YXkgdG8gZGlzcGxheSBhIGNhbGVuZGFyIGFuZCBhbGxvdyB1c2VycyB0byBzZWxlY3QgZGF0ZXMgdXNpbmcgc2luZ2xlLCBtdWx0aXBsZVxuICogb3IgcmFuZ2Ugc2VsZWN0aW9uLlxuICpcbiAqIEV4YW1wbGU6XG4gKiBgYGBodG1sXG4gKiA8aWd4LWNhbGVuZGFyIHNlbGVjdGlvbj1cInJhbmdlXCI+PC9pZ3gtY2FsZW5kYXI+XG4gKiBgYGBcbiAqL1xuQENvbXBvbmVudCh7XG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIG11bHRpOiB0cnVlLFxuICAgICAgICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICAgICAgICB1c2VFeGlzdGluZzogSWd4Q2FsZW5kYXJDb21wb25lbnRcbiAgICAgICAgfVxuICAgIF0sXG4gICAgYW5pbWF0aW9uczogW1xuICAgICAgICB0cmlnZ2VyKCdhbmltYXRlVmlldycsIFtcbiAgICAgICAgICAgIHRyYW5zaXRpb24oJ3ZvaWQgPT4gMCcsIHVzZUFuaW1hdGlvbihmYWRlSW4pKSxcbiAgICAgICAgICAgIHRyYW5zaXRpb24oJ3ZvaWQgPT4gKicsIHVzZUFuaW1hdGlvbihzY2FsZUluQ2VudGVyLCB7XG4gICAgICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAnLjJzJyxcbiAgICAgICAgICAgICAgICAgICAgZnJvbVNjYWxlOiAuOVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pKVxuICAgICAgICBdKVxuICAgIF0sXG4gICAgc2VsZWN0b3I6ICdpZ3gtY2FsZW5kYXInLFxuICAgIHRlbXBsYXRlVXJsOiAnY2FsZW5kYXIuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIElneENhbGVuZGFyQ29tcG9uZW50IGV4dGVuZHMgSWd4TW9udGhQaWNrZXJCYXNlIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gICAgLyoqXG4gICAgICogU2V0cy9nZXRzIHRoZSBgaWRgIG9mIHRoZSBjYWxlbmRhci5cbiAgICAgKiBJZiBub3Qgc2V0LCB0aGUgYGlkYCB3aWxsIGhhdmUgdmFsdWUgYFwiaWd4LWNhbGVuZGFyLTBcImAuXG4gICAgICogYGBgaHRtbFxuICAgICAqIDxpZ3gtY2FsZW5kYXIgaWQgPSBcIm15LWZpcnN0LWNhbGVuZGFyXCI+PC9pZ3gtY2FsZW5kYXI+XG4gICAgICogYGBgXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGxldCBjYWxlbmRhcklkID0gIHRoaXMuY2FsZW5kYXIuaWQ7XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneENhbGVuZGFyQ29tcG9uZW50XG4gICAgICovXG4gICAgQEhvc3RCaW5kaW5nKCdhdHRyLmlkJylcbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBpZCA9IGBpZ3gtY2FsZW5kYXItJHtORVhUX0lEKyt9YDtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGhhc0hlYWRlciA9IHRydWU7XG5cbiAgICAvKipcbiAgICAgKiBTZXRzL2dldHMgd2hldGhlciB0aGUgY2FsZW5kYXIgaGVhZGVyIHdpbGwgYmUgaW4gdmVydGljYWwgcG9zaXRpb24uXG4gICAgICogRGVmYXVsdCB2YWx1ZSBpcyBgZmFsc2VgLlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8aWd4LWNhbGVuZGFyIFt2ZXJ0aWNhbF0gPSBcInRydWVcIj48L2lneC1jYWxlbmRhcj5cbiAgICAgKiBgYGBcbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogbGV0IGlzVmVydGljYWwgPSB0aGlzLmNhbGVuZGFyLnZlcnRpY2FsO1xuICAgICAqIGBgYFxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHZlcnRpY2FsID0gZmFsc2U7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgZGVmYXVsdCBgdGFiaW5kZXhgIGF0dHJpYnV0ZSBmb3IgdGhlIGNvbXBvbmVudC5cbiAgICAgKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBASG9zdEJpbmRpbmcoJ2F0dHIudGFiaW5kZXgnKVxuICAgIHB1YmxpYyB0YWJpbmRleCA9IDA7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgZGVmYXVsdCBhcmlhIHJvbGUgYXR0cmlidXRlIGZvciB0aGUgY29tcG9uZW50LlxuICAgICAqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIEBIb3N0QmluZGluZygnYXR0ci5yb2xlJylcbiAgICBwdWJsaWMgcm9sZSA9ICdncmlkJztcblxuICAgIC8qKlxuICAgICAqIFRoZSBkZWZhdWx0IGFyaWEgbGViZWxsZWQgYnkgYXR0cmlidXRlIGZvciB0aGUgY29tcG9uZW50LlxuICAgICAqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIEBIb3N0QmluZGluZygnYXR0ci5hcmlhLWxhYmVsbGVkYnknKVxuICAgIHB1YmxpYyBhcmlhTGFiZWxsZWRCeSA9ICdjYWxlbmRhcic7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgZGVmYXVsdCBjc3MgY2xhc3MgYXBwbGllZCB0byB0aGUgY29tcG9uZW50LlxuICAgICAqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIEBIb3N0QmluZGluZygnY2xhc3MuaWd4LWNhbGVuZGFyLS12ZXJ0aWNhbCcpXG4gICAgZ2V0IHN0eWxlVmVydGljYWxDbGFzcygpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmVydGljYWw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIGRlZmF1bHQgY3NzIGNsYXNzIGFwcGxpZWQgdG8gdGhlIGNvbXBvbmVudC5cbiAgICAgKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBASG9zdEJpbmRpbmcoJ2NsYXNzLmlneC1jYWxlbmRhcicpXG4gICAgcHVibGljIHN0eWxlQ2xhc3MgPSB0cnVlO1xuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIEBWaWV3Q2hpbGQoJ21vbnRocycsIHsgcmVhZDogSWd4TW9udGhzVmlld0NvbXBvbmVudCwgc3RhdGljOiBmYWxzZSB9KVxuICAgIHB1YmxpYyBtb250aHNWaWV3OiBJZ3hNb250aHNWaWV3Q29tcG9uZW50O1xuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIEBWaWV3Q2hpbGQoJ21vbnRoc0J0bicsIHsgc3RhdGljOiBmYWxzZSB9KVxuICAgIHB1YmxpYyBtb250aHNCdG46IEVsZW1lbnRSZWY7XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgQFZpZXdDaGlsZCgnZGVjYWRlJywgeyByZWFkOiBJZ3hZZWFyc1ZpZXdDb21wb25lbnQsIHN0YXRpYzogZmFsc2UgfSlcbiAgICBwdWJsaWMgZGFjYWRlVmlldzogSWd4WWVhcnNWaWV3Q29tcG9uZW50O1xuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIEBWaWV3Q2hpbGQoJ2RheXMnLCB7IHJlYWQ6IElneERheXNWaWV3Q29tcG9uZW50LCBzdGF0aWM6IGZhbHNlIH0pXG4gICAgcHVibGljIGRheXNWaWV3OiBJZ3hEYXlzVmlld0NvbXBvbmVudDtcblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBAVmlld0NoaWxkKCdwcmV2TW9udGhCdG4nLCB7IHN0YXRpYzogZmFsc2UgfSlcbiAgICBwdWJsaWMgcHJldk1vbnRoQnRuOiBFbGVtZW50UmVmO1xuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIEBWaWV3Q2hpbGQoJ25leHRNb250aEJ0bicsIHsgc3RhdGljOiBmYWxzZSB9KVxuICAgIHB1YmxpYyBuZXh0TW9udGhCdG46IEVsZW1lbnRSZWY7XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgZ2V0IGlzWWVhclZpZXcoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmFjdGl2ZVZpZXcgPT09IENhbGVuZGFyVmlldy5ZRUFSO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBnZXQgbW9udGhBY3Rpb24oKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX21vbnRoQWN0aW9uO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgc2V0IG1vbnRoQWN0aW9uKHZhbDogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX21vbnRoQWN0aW9uID0gdmFsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIGhlYWRlciB0ZW1wbGF0ZS5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogbGV0IGhlYWRlclRlbXBsYXRlID0gIHRoaXMuY2FsZW5kYXIuaGVhZGVyVGVhbXBsYXRlO1xuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hDYWxlbmRhckNvbXBvbmVudFxuICAgICAqL1xuICAgIGdldCBoZWFkZXJUZW1wbGF0ZSgpOiBhbnkge1xuICAgICAgICBpZiAodGhpcy5oZWFkZXJUZW1wbGF0ZURpcmVjdGl2ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaGVhZGVyVGVtcGxhdGVEaXJlY3RpdmUudGVtcGxhdGU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgaGVhZGVyIHRlbXBsYXRlLlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8aWd4LWNhbGVuZGFyIGhlYWRlclRlbXBsYXRlRGlyZWN0aXZlID0gXCJpZ3hDYWxlbmRhckhlYWRlclwiPjwvaWd4LWNhbGVuZGFyPlxuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hDYWxlbmRhckNvbXBvbmVudFxuICAgICAqL1xuICAgIHNldCBoZWFkZXJUZW1wbGF0ZShkaXJlY3RpdmU6IGFueSkge1xuICAgICAgICB0aGlzLmhlYWRlclRlbXBsYXRlRGlyZWN0aXZlID0gZGlyZWN0aXZlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIHN1YmhlYWRlciB0ZW1wbGF0ZS5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogbGV0IHN1YmhlYWRlclRlbXBsYXRlID0gdGhpcy5jYWxlbmRhci5zdWJoZWFkZXJUZW1wbGF0ZTtcbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBnZXQgc3ViaGVhZGVyVGVtcGxhdGUoKTogYW55IHtcbiAgICAgICAgaWYgKHRoaXMuc3ViaGVhZGVyVGVtcGxhdGVEaXJlY3RpdmUpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnN1YmhlYWRlclRlbXBsYXRlRGlyZWN0aXZlLnRlbXBsYXRlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIHN1YmhlYWRlciB0ZW1wbGF0ZS5cbiAgICAgKiBgYGBodG1sXG4gICAgICogPGlneC1jYWxlbmRhciBzdWJoZWFkZXJUZW1wbGF0ZSA9IFwiaWd4Q2FsZW5kYXJTdWJoZWFkZXJcIj48L2lneC1jYWxlbmRhcj5cbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4Q2FsZW5kYXJDb21wb25lbnRcbiAgICAgKi9cbiAgICBzZXQgc3ViaGVhZGVyVGVtcGxhdGUoZGlyZWN0aXZlOiBhbnkpIHtcbiAgICAgICAgdGhpcy5zdWJoZWFkZXJUZW1wbGF0ZURpcmVjdGl2ZSA9IGRpcmVjdGl2ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBjb250ZXh0IGZvciB0aGUgdGVtcGxhdGUgbWFya2VkIHdpdGggdGhlIGBpZ3hDYWxlbmRhckhlYWRlcmAgZGlyZWN0aXZlLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBsZXQgaGVhZGVyQ29udGV4dCA9ICB0aGlzLmNhbGVuZGFyLmhlYWRlckNvbnRleHQ7XG4gICAgICogYGBgXG4gICAgICovXG4gICAgZ2V0IGhlYWRlckNvbnRleHQoKSB7XG4gICAgICAgIGNvbnN0IGRhdGU6IERhdGUgPSB0aGlzLmhlYWRlckRhdGU7XG4gICAgICAgIHJldHVybiB0aGlzLmdlbmVyYXRlQ29udGV4dChkYXRlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBjb250ZXh0IGZvciB0aGUgdGVtcGxhdGUgbWFya2VkIHdpdGggZWl0aGVyIGBpZ3hDYWxlbmRhclN1YkhlYWRlck1vbnRoYFxuICAgICAqIG9yIGBpZ3hDYWxlbmRhclN1YkhlYWRlclllYXJgIGRpcmVjdGl2ZS5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogbGV0IGNvbnRleHQgPSAgdGhpcy5jYWxlbmRhci5jb250ZXh0O1xuICAgICAqIGBgYFxuICAgICAqL1xuICAgIGdldCBjb250ZXh0KCkge1xuICAgICAgICBjb25zdCBkYXRlOiBEYXRlID0gdGhpcy52aWV3RGF0ZTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2VuZXJhdGVDb250ZXh0KGRhdGUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBnZXQgaGVhZGVyRGF0ZSgpOiBEYXRlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0ZWREYXRlcyA/IHRoaXMuc2VsZWN0ZWREYXRlcyA6IG5ldyBEYXRlKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIEBDb250ZW50Q2hpbGQoZm9yd2FyZFJlZigoKSA9PiBJZ3hDYWxlbmRhckhlYWRlclRlbXBsYXRlRGlyZWN0aXZlKSwgeyByZWFkOiBJZ3hDYWxlbmRhckhlYWRlclRlbXBsYXRlRGlyZWN0aXZlLCBzdGF0aWM6IHRydWUgIH0pXG4gICAgcHJpdmF0ZSBoZWFkZXJUZW1wbGF0ZURpcmVjdGl2ZTogSWd4Q2FsZW5kYXJIZWFkZXJUZW1wbGF0ZURpcmVjdGl2ZTtcblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bWF4LWxpbmUtbGVuZ3RoXG4gICAgQENvbnRlbnRDaGlsZChmb3J3YXJkUmVmKCgpID0+IElneENhbGVuZGFyU3ViaGVhZGVyVGVtcGxhdGVEaXJlY3RpdmUpLCB7IHJlYWQ6IElneENhbGVuZGFyU3ViaGVhZGVyVGVtcGxhdGVEaXJlY3RpdmUsIHN0YXRpYzogdHJ1ZSAgfSlcbiAgICBwcml2YXRlIHN1YmhlYWRlclRlbXBsYXRlRGlyZWN0aXZlOiBJZ3hDYWxlbmRhclN1YmhlYWRlclRlbXBsYXRlRGlyZWN0aXZlO1xuXG4gICAgLyoqXG4gICAgICpAaGlkZGVuXG4gICAgICovXG4gICAgcHJpdmF0ZSBfbW9udGhBY3Rpb24gPSAnJztcblxuICAgIC8qKlxuICAgICAqQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyBuZ0FmdGVyVmlld0luaXQoKSB7XG5cbiAgICAgICAgdGhpcy5zdGFydE1vbnRoU2Nyb2xsJC5waXBlKFxuICAgICAgICAgICAgdGFrZVVudGlsKHRoaXMuc3RvcE1vbnRoU2Nyb2xsJCksXG4gICAgICAgICAgICBzd2l0Y2hNYXAoKCkgPT4gdGhpcy5kYXlzVmlldy5zY3JvbGxNb250aCQucGlwZShcbiAgICAgICAgICAgICAgICBza2lwTGFzdCgxKSxcbiAgICAgICAgICAgICAgICBkZWJvdW5jZSgoKSA9PiBpbnRlcnZhbCgzMDApKSxcbiAgICAgICAgICAgICAgICB0YWtlVW50aWwodGhpcy5zdG9wTW9udGhTY3JvbGwkKVxuICAgICAgICAgICAgKSkpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgc3dpdGNoICh0aGlzLmRheXNWaWV3Lm1vbnRoU2Nyb2xsRGlyZWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgU2Nyb2xsTW9udGguUFJFVjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJldmlvdXNNb250aCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgU2Nyb2xsTW9udGguTkVYVDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubmV4dE1vbnRoKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBTY3JvbGxNb250aC5OT05FOlxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBsb2NhbGUgcmVwcmVzZW50YXRpb24gb2YgdGhlIG1vbnRoIGluIHRoZSBtb250aCB2aWV3IGlmIGVuYWJsZWQsXG4gICAgICogb3RoZXJ3aXNlIHJldHVybnMgdGhlIGRlZmF1bHQgYERhdGUuZ2V0TW9udGgoKWAgdmFsdWUuXG4gICAgICpcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIGZvcm1hdHRlZE1vbnRoKHZhbHVlOiBEYXRlKTogc3RyaW5nIHtcbiAgICAgICAgaWYgKHRoaXMuZm9ybWF0Vmlld3MubW9udGgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmZvcm1hdHRlck1vbnRoLmZvcm1hdCh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGAke3ZhbHVlLmdldE1vbnRoKCl9YDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIHByZXZpb3VzTW9udGgoaXNLZXlkb3duVHJpZ2dlciA9IGZhbHNlKSB7XG4gICAgICAgIHRoaXMudmlld0RhdGUgPSB0aGlzLmNhbGVuZGFyTW9kZWwudGltZWRlbHRhKHRoaXMudmlld0RhdGUsICdtb250aCcsIC0xKTtcbiAgICAgICAgdGhpcy5fbW9udGhBY3Rpb24gPSAncHJldic7XG5cbiAgICAgICAgaWYgKHRoaXMuZGF5c1ZpZXcpIHtcbiAgICAgICAgICAgIHRoaXMuZGF5c1ZpZXcuaXNLZXlkb3duVHJpZ2dlciA9IGlzS2V5ZG93blRyaWdnZXI7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIG5leHRNb250aChpc0tleWRvd25UcmlnZ2VyID0gZmFsc2UpIHtcbiAgICAgICAgdGhpcy52aWV3RGF0ZSA9IHRoaXMuY2FsZW5kYXJNb2RlbC50aW1lZGVsdGEodGhpcy52aWV3RGF0ZSwgJ21vbnRoJywgMSk7XG4gICAgICAgIHRoaXMuX21vbnRoQWN0aW9uID0gJ25leHQnO1xuXG4gICAgICAgIGlmICh0aGlzLmRheXNWaWV3KSB7XG4gICAgICAgICAgICB0aGlzLmRheXNWaWV3LmlzS2V5ZG93blRyaWdnZXIgPSBpc0tleWRvd25UcmlnZ2VyO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyBzdGFydFByZXZNb250aFNjcm9sbCA9IChpc0tleWRvd25UcmlnZ2VyID0gZmFsc2UpID0+IHtcbiAgICAgICAgdGhpcy5zdGFydE1vbnRoU2Nyb2xsJC5uZXh0KCk7XG4gICAgICAgIHRoaXMuZGF5c1ZpZXcubW9udGhTY3JvbGxEaXJlY3Rpb24gPSBTY3JvbGxNb250aC5QUkVWO1xuXG4gICAgICAgIHRoaXMucHJldmlvdXNNb250aChpc0tleWRvd25UcmlnZ2VyKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIHN0YXJ0TmV4dE1vbnRoU2Nyb2xsID0gKGlzS2V5ZG93blRyaWdnZXIgPSBmYWxzZSkgPT4ge1xuICAgICAgICB0aGlzLnN0YXJ0TW9udGhTY3JvbGwkLm5leHQoKTtcbiAgICAgICAgdGhpcy5kYXlzVmlldy5tb250aFNjcm9sbERpcmVjdGlvbiA9IFNjcm9sbE1vbnRoLk5FWFQ7XG5cbiAgICAgICAgdGhpcy5uZXh0TW9udGgoaXNLZXlkb3duVHJpZ2dlcik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyBzdG9wTW9udGhTY3JvbGwgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgICAgdGhpcy5kYXlzVmlldy5zdG9wTW9udGhTY3JvbGwkLm5leHQodHJ1ZSk7XG4gICAgICAgIHRoaXMuZGF5c1ZpZXcuc3RvcE1vbnRoU2Nyb2xsJC5jb21wbGV0ZSgpO1xuXG5cbiAgICAgICAgaWYgKHRoaXMuZGF5c1ZpZXcubW9udGhTY3JvbGxEaXJlY3Rpb24gPT09IFNjcm9sbE1vbnRoLlBSRVYpIHtcbiAgICAgICAgICAgIHRoaXMucHJldk1vbnRoQnRuLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmRheXNWaWV3Lm1vbnRoU2Nyb2xsRGlyZWN0aW9uID09PSBTY3JvbGxNb250aC5ORVhUKSB7XG4gICAgICAgICAgICB0aGlzLm5leHRNb250aEJ0bi5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmRheXNWaWV3Lm1vbnRoU2Nyb2xsRGlyZWN0aW9uID0gU2Nyb2xsTW9udGguTk9ORTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIGFjdGl2ZVZpZXdEZWNhZGUoKSB7XG4gICAgICAgIHN1cGVyLmFjdGl2ZVZpZXdEZWNhZGUoKTtcblxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuZGFjYWRlVmlldykge1xuICAgICAgICAgICAgICAgIHRoaXMuZGFjYWRlVmlldy5lbC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgYWN0aXZlVmlld0RlY2FkZUtCKGV2ZW50KSB7XG4gICAgICAgIHN1cGVyLmFjdGl2ZVZpZXdEZWNhZGVLQihldmVudCk7XG5cbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLmRhY2FkZVZpZXcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRhY2FkZVZpZXcuZWwubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIGdldEZvcm1hdHRlZERhdGUoKTogeyB3ZWVrZGF5OiBzdHJpbmcsIG1vbnRoZGF5OiBzdHJpbmcgfSB7XG5cbiAgICAgICAgY29uc3QgZGF0ZSA9IHRoaXMuaGVhZGVyRGF0ZTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbW9udGhkYXk6IHRoaXMuZm9ybWF0dGVyTW9udGhkYXkuZm9ybWF0KGRhdGUpLFxuICAgICAgICAgICAgd2Vla2RheTogdGhpcy5mb3JtYXR0ZXJXZWVrZGF5LmZvcm1hdChkYXRlKSxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIGNoaWxkQ2xpY2tlZChpbnN0YW5jZTogSUNhbGVuZGFyRGF0ZSkge1xuICAgICAgICBpZiAoaW5zdGFuY2UuaXNQcmV2TW9udGgpIHtcbiAgICAgICAgICAgIHRoaXMucHJldmlvdXNNb250aCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGluc3RhbmNlLmlzTmV4dE1vbnRoKSB7XG4gICAgICAgICAgICB0aGlzLm5leHRNb250aCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zZWxlY3REYXRlRnJvbUNsaWVudChpbnN0YW5jZS5kYXRlKTtcbiAgICAgICAgdGhpcy5vblNlbGVjdGlvbi5lbWl0KHRoaXMuc2VsZWN0ZWREYXRlcyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyB2aWV3Q2hhbmdlZChldmVudCkge1xuICAgICAgICB0aGlzLnZpZXdEYXRlID0gdGhpcy5jYWxlbmRhck1vZGVsLnRpbWVkZWx0YShldmVudCwgJ21vbnRoJywgMCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyBjaGFuZ2VNb250aChldmVudDogRGF0ZSkge1xuICAgICAgICB0aGlzLnZpZXdEYXRlID0gbmV3IERhdGUodGhpcy52aWV3RGF0ZS5nZXRGdWxsWWVhcigpLCBldmVudC5nZXRNb250aCgpKTtcbiAgICAgICAgdGhpcy5hY3RpdmVWaWV3ID0gQ2FsZW5kYXJWaWV3LkRFRkFVTFQ7XG5cbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMubW9udGhzQnRuLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyBhY3RpdmVWaWV3WWVhcigpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5hY3RpdmVWaWV3ID0gQ2FsZW5kYXJWaWV3LllFQVI7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm1vbnRoc1ZpZXcuZGF0ZXMuZmluZCgoZGF0ZSkgPT4gZGF0ZS5pc0N1cnJlbnRNb250aCkubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIGFjdGl2ZVZpZXdZZWFyS0IoZXZlbnQpOiB2b2lkIHtcbiAgICAgICAgaWYgKGV2ZW50LmtleSA9PT0gS0VZUy5TUEFDRSB8fCBldmVudC5rZXkgPT09IEtFWVMuU1BBQ0VfSUUgfHwgZXZlbnQua2V5ID09PSBLRVlTLkVOVEVSKSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdGhpcy5hY3RpdmVWaWV3WWVhcigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVzZWxlY3RzIGRhdGUocykgKGJhc2VkIG9uIHRoZSBzZWxlY3Rpb24gdHlwZSkuXG4gICAgICpgYGB0eXBlc2NyaXB0XG4gICAgICogdGhpcy5jYWxlbmRhci5kZXNlbGVjdERhdGUobmV3IERhdGUoYDIwMTgtMDYtMTJgKSk7XG4gICAgICpgYGBgXG4gICAgICovXG4gICAgcHVibGljIGRlc2VsZWN0RGF0ZSh2YWx1ZT86IERhdGUgfCBEYXRlW10pIHtcbiAgICAgICAgc3VwZXIuZGVzZWxlY3REYXRlKHZhbHVlKTtcblxuICAgICAgICB0aGlzLmRheXNWaWV3LnNlbGVjdGVkRGF0ZXMgPSB0aGlzLnNlbGVjdGVkRGF0ZXM7XG4gICAgICAgIHRoaXMuX29uQ2hhbmdlQ2FsbGJhY2sodGhpcy5zZWxlY3RlZERhdGVzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgQEhvc3RMaXN0ZW5lcigna2V5ZG93bi5wYWdldXAnLCBbJyRldmVudCddKVxuICAgIHB1YmxpYyBvbktleWRvd25QYWdlVXAoZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBjb25zdCBhY3RpdmVEYXRlID0gdGhpcy5kYXlzVmlldy5kYXRlcy5maW5kKChkYXRlKSA9PiBkYXRlLm5hdGl2ZUVsZW1lbnQgPT09IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpO1xuICAgICAgICBpZiAoYWN0aXZlRGF0ZSkge1xuICAgICAgICAgICAgdGhpcy5kYXlzVmlldy5uZXh0RGF0ZSA9IG5ldyBEYXRlKGFjdGl2ZURhdGUuZGF0ZS5kYXRlKTtcblxuICAgICAgICAgICAgbGV0IHllYXIgPSB0aGlzLmRheXNWaWV3Lm5leHREYXRlLmdldEZ1bGxZZWFyKCk7XG5cbiAgICAgICAgICAgIGxldCBtb250aCA9IHRoaXMuZGF5c1ZpZXcubmV4dERhdGUuZ2V0TW9udGgoKSAtIDE7XG4gICAgICAgICAgICBpZiAobW9udGggPCAwKSB7IG1vbnRoID0gMTE7IHllYXIgLT0gMTsgfVxuXG4gICAgICAgICAgICBjb25zdCByYW5nZSA9IG1vbnRoUmFuZ2UodGhpcy5kYXlzVmlldy5uZXh0RGF0ZS5nZXRGdWxsWWVhcigpLCBtb250aCk7XG5cbiAgICAgICAgICAgIGxldCBkYXkgPSB0aGlzLmRheXNWaWV3Lm5leHREYXRlLmdldERhdGUoKTtcbiAgICAgICAgICAgIGlmIChkYXkgPiByYW5nZVsxXSkgeyBkYXkgPSByYW5nZVsxXTsgfVxuXG4gICAgICAgICAgICB0aGlzLmRheXNWaWV3Lm5leHREYXRlLnNldERhdGUoZGF5KTtcbiAgICAgICAgICAgIHRoaXMuZGF5c1ZpZXcubmV4dERhdGUuc2V0TW9udGgobW9udGgpO1xuICAgICAgICAgICAgdGhpcy5kYXlzVmlldy5uZXh0RGF0ZS5zZXRGdWxsWWVhcih5ZWFyKTtcblxuICAgICAgICAgICAgdGhpcy5kYXlzVmlldy5jYWxsYmFjayA9IChkYXRlcz8sIG5leHQ/KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZGF5SXRlbSA9IGRhdGVzLmZpbmQoKGQpID0+IGQuZGF0ZS5kYXRlLmdldFRpbWUoKSA9PT0gbmV4dC5nZXRUaW1lKCkpO1xuICAgICAgICAgICAgICAgIGlmIChkYXlJdGVtKSB7IGRheUl0ZW0ubmF0aXZlRWxlbWVudC5mb2N1cygpOyB9XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5wcmV2aW91c01vbnRoKHRydWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBASG9zdExpc3RlbmVyKCdrZXlkb3duLnBhZ2Vkb3duJywgWyckZXZlbnQnXSlcbiAgICBwdWJsaWMgb25LZXlkb3duUGFnZURvd24oZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICB0aGlzLm5leHRNb250aCh0cnVlKTtcblxuICAgICAgICBjb25zdCBhY3RpdmVEYXRlID0gdGhpcy5kYXlzVmlldy5kYXRlcy5maW5kKChkYXRlKSA9PiBkYXRlLm5hdGl2ZUVsZW1lbnQgPT09IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpO1xuICAgICAgICBpZiAoYWN0aXZlRGF0ZSkge1xuICAgICAgICAgICAgdGhpcy5kYXlzVmlldy5uZXh0RGF0ZSA9IG5ldyBEYXRlKGFjdGl2ZURhdGUuZGF0ZS5kYXRlKTtcblxuICAgICAgICAgICAgbGV0IHllYXIgPSB0aGlzLmRheXNWaWV3Lm5leHREYXRlLmdldEZ1bGxZZWFyKCk7XG5cbiAgICAgICAgICAgIGxldCBtb250aCA9IHRoaXMuZGF5c1ZpZXcubmV4dERhdGUuZ2V0TW9udGgoKSArIDE7XG4gICAgICAgICAgICBpZiAobW9udGggPiAxMSkgeyBtb250aCA9IDA7IHllYXIgKz0gMTsgfVxuXG4gICAgICAgICAgICBjb25zdCByYW5nZSA9IG1vbnRoUmFuZ2UodGhpcy5kYXlzVmlldy5uZXh0RGF0ZS5nZXRGdWxsWWVhcigpLCBtb250aCk7XG5cbiAgICAgICAgICAgIGxldCBkYXkgPSB0aGlzLmRheXNWaWV3Lm5leHREYXRlLmdldERhdGUoKTtcbiAgICAgICAgICAgIGlmIChkYXkgPiByYW5nZVsxXSkgeyBkYXkgPSByYW5nZVsxXTsgfVxuXG4gICAgICAgICAgICB0aGlzLmRheXNWaWV3Lm5leHREYXRlLnNldERhdGUoZGF5KTtcbiAgICAgICAgICAgIHRoaXMuZGF5c1ZpZXcubmV4dERhdGUuc2V0TW9udGgobW9udGgpO1xuICAgICAgICAgICAgdGhpcy5kYXlzVmlldy5uZXh0RGF0ZS5zZXRGdWxsWWVhcih5ZWFyKTtcblxuICAgICAgICAgICAgdGhpcy5kYXlzVmlldy5jYWxsYmFjayA9IChkYXRlcz8sIG5leHQ/KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZGF5SXRlbSA9IGRhdGVzLmZpbmQoKGQpID0+IGQuZGF0ZS5kYXRlLmdldFRpbWUoKSA9PT0gbmV4dC5nZXRUaW1lKCkpO1xuICAgICAgICAgICAgICAgIGlmIChkYXlJdGVtKSB7IGRheUl0ZW0ubmF0aXZlRWxlbWVudC5mb2N1cygpOyB9XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIEBIb3N0TGlzdGVuZXIoJ2tleWRvd24uc2hpZnQucGFnZXVwJywgWyckZXZlbnQnXSlcbiAgICBwdWJsaWMgb25LZXlkb3duU2hpZnRQYWdlVXAoZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy52aWV3RGF0ZSA9IHRoaXMuY2FsZW5kYXJNb2RlbC50aW1lZGVsdGEodGhpcy52aWV3RGF0ZSwgJ3llYXInLCAtMSk7XG5cbiAgICAgICAgdGhpcy5kYXlzVmlldy5hbmltYXRpb25BY3Rpb24gPSAncHJldic7XG4gICAgICAgIHRoaXMuZGF5c1ZpZXcuaXNLZXlkb3duVHJpZ2dlciA9IHRydWU7XG5cbiAgICAgICAgY29uc3QgYWN0aXZlRGF0ZSA9IHRoaXMuZGF5c1ZpZXcuZGF0ZXMuZmluZCgoZGF0ZSkgPT4gZGF0ZS5uYXRpdmVFbGVtZW50ID09PSBkb2N1bWVudC5hY3RpdmVFbGVtZW50KTtcbiAgICAgICAgaWYgKGFjdGl2ZURhdGUpIHtcbiAgICAgICAgICAgIHRoaXMuZGF5c1ZpZXcubmV4dERhdGUgPSBuZXcgRGF0ZShhY3RpdmVEYXRlLmRhdGUuZGF0ZSk7XG5cbiAgICAgICAgICAgIGNvbnN0IHllYXIgPSB0aGlzLmRheXNWaWV3Lm5leHREYXRlLmdldEZ1bGxZZWFyKCkgLSAxO1xuXG4gICAgICAgICAgICBjb25zdCByYW5nZSA9IG1vbnRoUmFuZ2UoeWVhciwgdGhpcy5kYXlzVmlldy5uZXh0RGF0ZS5nZXRNb250aCgpKTtcblxuICAgICAgICAgICAgbGV0IGRheSA9IHRoaXMuZGF5c1ZpZXcubmV4dERhdGUuZ2V0RGF0ZSgpO1xuICAgICAgICAgICAgaWYgKGRheSA+IHJhbmdlWzFdKSB7IGRheSA9IHJhbmdlWzFdOyB9XG5cbiAgICAgICAgICAgIHRoaXMuZGF5c1ZpZXcubmV4dERhdGUuc2V0RGF0ZShkYXkpO1xuICAgICAgICAgICAgdGhpcy5kYXlzVmlldy5uZXh0RGF0ZS5zZXRGdWxsWWVhcih5ZWFyKTtcblxuICAgICAgICAgICAgdGhpcy5kYXlzVmlldy5jYWxsYmFjayA9IChkYXRlcz8sIG5leHQ/KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZGF5SXRlbSA9IGRhdGVzLmZpbmQoKGQpID0+IGQuZGF0ZS5kYXRlLmdldFRpbWUoKSA9PT0gbmV4dC5nZXRUaW1lKCkpO1xuICAgICAgICAgICAgICAgIGlmIChkYXlJdGVtKSB7IGRheUl0ZW0ubmF0aXZlRWxlbWVudC5mb2N1cygpOyB9XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIEBIb3N0TGlzdGVuZXIoJ2tleWRvd24uc2hpZnQucGFnZWRvd24nLCBbJyRldmVudCddKVxuICAgIHB1YmxpYyBvbktleWRvd25TaGlmdFBhZ2VEb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMudmlld0RhdGUgPSB0aGlzLmNhbGVuZGFyTW9kZWwudGltZWRlbHRhKHRoaXMudmlld0RhdGUsICd5ZWFyJywgMSk7XG5cbiAgICAgICAgdGhpcy5kYXlzVmlldy5hbmltYXRpb25BY3Rpb24gPSAnbmV4dCc7XG4gICAgICAgIHRoaXMuZGF5c1ZpZXcuaXNLZXlkb3duVHJpZ2dlciA9IHRydWU7XG5cbiAgICAgICAgY29uc3QgYWN0aXZlRGF0ZSA9IHRoaXMuZGF5c1ZpZXcuZGF0ZXMuZmluZCgoZGF0ZSkgPT4gZGF0ZS5uYXRpdmVFbGVtZW50ID09PSBkb2N1bWVudC5hY3RpdmVFbGVtZW50KTtcbiAgICAgICAgaWYgKGFjdGl2ZURhdGUpIHtcbiAgICAgICAgICAgIHRoaXMuZGF5c1ZpZXcubmV4dERhdGUgPSBuZXcgRGF0ZShhY3RpdmVEYXRlLmRhdGUuZGF0ZSk7XG5cbiAgICAgICAgICAgIGNvbnN0IHllYXIgPSB0aGlzLmRheXNWaWV3Lm5leHREYXRlLmdldEZ1bGxZZWFyKCkgKyAxO1xuXG4gICAgICAgICAgICBjb25zdCByYW5nZSA9IG1vbnRoUmFuZ2UoeWVhciwgdGhpcy5kYXlzVmlldy5uZXh0RGF0ZS5nZXRNb250aCgpKTtcblxuICAgICAgICAgICAgbGV0IGRheSA9IHRoaXMuZGF5c1ZpZXcubmV4dERhdGUuZ2V0RGF0ZSgpO1xuICAgICAgICAgICAgaWYgKGRheSA+IHJhbmdlWzFdKSB7IGRheSA9IHJhbmdlWzFdOyB9XG5cbiAgICAgICAgICAgIHRoaXMuZGF5c1ZpZXcubmV4dERhdGUuc2V0RGF0ZShkYXkpO1xuICAgICAgICAgICAgdGhpcy5kYXlzVmlldy5uZXh0RGF0ZS5zZXRGdWxsWWVhcih5ZWFyKTtcblxuICAgICAgICAgICAgdGhpcy5kYXlzVmlldy5jYWxsYmFjayA9IChkYXRlcz8sIG5leHQ/KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZGF5SXRlbSA9IGRhdGVzLmZpbmQoKGQpID0+IGQuZGF0ZS5kYXRlLmdldFRpbWUoKSA9PT0gbmV4dC5nZXRUaW1lKCkpO1xuICAgICAgICAgICAgICAgIGlmIChkYXlJdGVtKSB7IGRheUl0ZW0ubmF0aXZlRWxlbWVudC5mb2N1cygpOyB9XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIEBIb3N0TGlzdGVuZXIoJ2tleWRvd24uaG9tZScsIFsnJGV2ZW50J10pXG4gICAgcHVibGljIG9uS2V5ZG93bkhvbWUoZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICAgICAgaWYgKHRoaXMuZGF5c1ZpZXcpIHtcbiAgICAgICAgICAgIHRoaXMuZGF5c1ZpZXcub25LZXlkb3duSG9tZShldmVudCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgQEhvc3RMaXN0ZW5lcigna2V5ZG93bi5lbmQnLCBbJyRldmVudCddKVxuICAgIHB1YmxpYyBvbktleWRvd25FbmQoZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICAgICAgaWYgKHRoaXMuZGF5c1ZpZXcpIHtcbiAgICAgICAgICAgIHRoaXMuZGF5c1ZpZXcub25LZXlkb3duRW5kKGV2ZW50KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBASG9zdExpc3RlbmVyKCdkb2N1bWVudDptb3VzZXVwJywgWyckZXZlbnQnXSlcbiAgICBwdWJsaWMgb25Nb3VzZVVwKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgICAgIGlmICh0aGlzLmRheXNWaWV3ICYmIHRoaXMuZGF5c1ZpZXcubW9udGhTY3JvbGxEaXJlY3Rpb24gIT09IFNjcm9sbE1vbnRoLk5PTkUpIHtcbiAgICAgICAgICAgIHRoaXMuc3RvcE1vbnRoU2Nyb2xsKGV2ZW50KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhlbHBlciBtZXRob2QgYnVpbGRpbmcgYW5kIHJldHVybmluZyB0aGUgY29udGV4dCBvYmplY3QgaW5zaWRlXG4gICAgICogdGhlIGNhbGVuZGFyIHRlbXBsYXRlcy5cbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHJpdmF0ZSBnZW5lcmF0ZUNvbnRleHQodmFsdWU6IERhdGUpIHtcbiAgICAgICAgY29uc3QgZm9ybWF0T2JqZWN0ID0ge1xuICAgICAgICAgICAgbW9udGhWaWV3OiAoKSA9PiB0aGlzLmFjdGl2ZVZpZXdZZWFyKCksXG4gICAgICAgICAgICB5ZWFyVmlldzogKCkgPT4gdGhpcy5hY3RpdmVWaWV3RGVjYWRlKCksXG4gICAgICAgICAgICAuLi50aGlzLmNhbGVuZGFyTW9kZWwuZm9ybWF0VG9QYXJ0cyh2YWx1ZSwgdGhpcy5sb2NhbGUsIHRoaXMuZm9ybWF0T3B0aW9ucyxcbiAgICAgICAgICAgICAgICBbJ2VyYScsICd5ZWFyJywgJ21vbnRoJywgJ2RheScsICd3ZWVrZGF5J10pXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiB7ICRpbXBsaWNpdDogZm9ybWF0T2JqZWN0IH07XG4gICAgfVxufVxuIl19