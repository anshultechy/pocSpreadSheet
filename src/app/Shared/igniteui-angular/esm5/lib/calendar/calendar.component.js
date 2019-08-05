/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var NEXT_ID = 0;
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
var IgxCalendarComponent = /** @class */ (function (_super) {
    tslib_1.__extends(IgxCalendarComponent, _super);
    function IgxCalendarComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
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
        _this.id = "igx-calendar-" + NEXT_ID++;
        _this.hasHeader = true;
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
        _this.vertical = false;
        /**
         * The default `tabindex` attribute for the component.
         *
         * @hidden
         */
        _this.tabindex = 0;
        /**
         * The default aria role attribute for the component.
         *
         * @hidden
         */
        _this.role = 'grid';
        /**
         * The default aria lebelled by attribute for the component.
         *
         * @hidden
         */
        _this.ariaLabelledBy = 'calendar';
        /**
         * The default css class applied to the component.
         *
         * @hidden
         */
        _this.styleClass = true;
        /**
         * @hidden
         */
        _this._monthAction = '';
        /**
         * @hidden
         */
        _this.startPrevMonthScroll = function (isKeydownTrigger) {
            if (isKeydownTrigger === void 0) { isKeydownTrigger = false; }
            _this.startMonthScroll$.next();
            _this.daysView.monthScrollDirection = ScrollMonth.PREV;
            _this.previousMonth(isKeydownTrigger);
        };
        /**
         * @hidden
         */
        _this.startNextMonthScroll = function (isKeydownTrigger) {
            if (isKeydownTrigger === void 0) { isKeydownTrigger = false; }
            _this.startMonthScroll$.next();
            _this.daysView.monthScrollDirection = ScrollMonth.NEXT;
            _this.nextMonth(isKeydownTrigger);
        };
        /**
         * @hidden
         */
        _this.stopMonthScroll = function (event) {
            event.stopPropagation();
            _this.daysView.stopMonthScroll$.next(true);
            _this.daysView.stopMonthScroll$.complete();
            if (_this.daysView.monthScrollDirection === ScrollMonth.PREV) {
                _this.prevMonthBtn.nativeElement.focus();
            }
            else if (_this.daysView.monthScrollDirection === ScrollMonth.NEXT) {
                _this.nextMonthBtn.nativeElement.focus();
            }
            _this.daysView.monthScrollDirection = ScrollMonth.NONE;
        };
        return _this;
    }
    Object.defineProperty(IgxCalendarComponent.prototype, "styleVerticalClass", {
        /**
         * The default css class applied to the component.
         *
         * @hidden
         */
        get: /**
         * The default css class applied to the component.
         *
         * @hidden
         * @return {?}
         */
        function () {
            return this.vertical;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxCalendarComponent.prototype, "isYearView", {
        /**
         * @hidden
         */
        get: /**
         * @hidden
         * @return {?}
         */
        function () {
            return this.activeView === CalendarView.YEAR;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxCalendarComponent.prototype, "monthAction", {
        /**
         * @hidden
         */
        get: /**
         * @hidden
         * @return {?}
         */
        function () {
            return this._monthAction;
        },
        /**
         * @hidden
         */
        set: /**
         * @hidden
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._monthAction = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxCalendarComponent.prototype, "headerTemplate", {
        /**
         * Gets the header template.
         * ```typescript
         * let headerTemplate =  this.calendar.headerTeamplate;
         * ```
         * @memberof IgxCalendarComponent
         */
        get: /**
         * Gets the header template.
         * ```typescript
         * let headerTemplate =  this.calendar.headerTeamplate;
         * ```
         * \@memberof IgxCalendarComponent
         * @return {?}
         */
        function () {
            if (this.headerTemplateDirective) {
                return this.headerTemplateDirective.template;
            }
            return null;
        },
        /**
         * Sets the header template.
         * ```html
         * <igx-calendar headerTemplateDirective = "igxCalendarHeader"></igx-calendar>
         * ```
         * @memberof IgxCalendarComponent
         */
        set: /**
         * Sets the header template.
         * ```html
         * <igx-calendar headerTemplateDirective = "igxCalendarHeader"></igx-calendar>
         * ```
         * \@memberof IgxCalendarComponent
         * @param {?} directive
         * @return {?}
         */
        function (directive) {
            this.headerTemplateDirective = directive;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxCalendarComponent.prototype, "subheaderTemplate", {
        /**
         * Gets the subheader template.
         * ```typescript
         * let subheaderTemplate = this.calendar.subheaderTemplate;
         * ```
         */
        get: /**
         * Gets the subheader template.
         * ```typescript
         * let subheaderTemplate = this.calendar.subheaderTemplate;
         * ```
         * @return {?}
         */
        function () {
            if (this.subheaderTemplateDirective) {
                return this.subheaderTemplateDirective.template;
            }
            return null;
        },
        /**
         * Sets the subheader template.
         * ```html
         * <igx-calendar subheaderTemplate = "igxCalendarSubheader"></igx-calendar>
         * ```
         * @memberof IgxCalendarComponent
         */
        set: /**
         * Sets the subheader template.
         * ```html
         * <igx-calendar subheaderTemplate = "igxCalendarSubheader"></igx-calendar>
         * ```
         * \@memberof IgxCalendarComponent
         * @param {?} directive
         * @return {?}
         */
        function (directive) {
            this.subheaderTemplateDirective = directive;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxCalendarComponent.prototype, "headerContext", {
        /**
         * Gets the context for the template marked with the `igxCalendarHeader` directive.
         * ```typescript
         * let headerContext =  this.calendar.headerContext;
         * ```
         */
        get: /**
         * Gets the context for the template marked with the `igxCalendarHeader` directive.
         * ```typescript
         * let headerContext =  this.calendar.headerContext;
         * ```
         * @return {?}
         */
        function () {
            /** @type {?} */
            var date = this.headerDate;
            return this.generateContext(date);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxCalendarComponent.prototype, "context", {
        /**
         * Gets the context for the template marked with either `igxCalendarSubHeaderMonth`
         * or `igxCalendarSubHeaderYear` directive.
         * ```typescript
         * let context =  this.calendar.context;
         * ```
         */
        get: /**
         * Gets the context for the template marked with either `igxCalendarSubHeaderMonth`
         * or `igxCalendarSubHeaderYear` directive.
         * ```typescript
         * let context =  this.calendar.context;
         * ```
         * @return {?}
         */
        function () {
            /** @type {?} */
            var date = this.viewDate;
            return this.generateContext(date);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxCalendarComponent.prototype, "headerDate", {
        /**
         * @hidden
         */
        get: /**
         * @hidden
         * @return {?}
         */
        function () {
            return this.selectedDates ? this.selectedDates : new Date();
        },
        enumerable: true,
        configurable: true
    });
    /**
     *@hidden
     */
    /**
     * @hidden
     * @return {?}
     */
    IgxCalendarComponent.prototype.ngAfterViewInit = /**
     * @hidden
     * @return {?}
     */
    function () {
        var _this = this;
        this.startMonthScroll$.pipe(takeUntil(this.stopMonthScroll$), switchMap(function () { return _this.daysView.scrollMonth$.pipe(skipLast(1), debounce(function () { return interval(300); }), takeUntil(_this.stopMonthScroll$)); })).subscribe(function () {
            switch (_this.daysView.monthScrollDirection) {
                case ScrollMonth.PREV:
                    _this.previousMonth();
                    break;
                case ScrollMonth.NEXT:
                    _this.nextMonth();
                    break;
                case ScrollMonth.NONE:
                default:
                    break;
            }
        });
    };
    /**
     * Returns the locale representation of the month in the month view if enabled,
     * otherwise returns the default `Date.getMonth()` value.
     *
     * @hidden
     */
    /**
     * Returns the locale representation of the month in the month view if enabled,
     * otherwise returns the default `Date.getMonth()` value.
     *
     * @hidden
     * @param {?} value
     * @return {?}
     */
    IgxCalendarComponent.prototype.formattedMonth = /**
     * Returns the locale representation of the month in the month view if enabled,
     * otherwise returns the default `Date.getMonth()` value.
     *
     * @hidden
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (this.formatViews.month) {
            return this.formatterMonth.format(value);
        }
        return "" + value.getMonth();
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?=} isKeydownTrigger
     * @return {?}
     */
    IgxCalendarComponent.prototype.previousMonth = /**
     * @hidden
     * @param {?=} isKeydownTrigger
     * @return {?}
     */
    function (isKeydownTrigger) {
        if (isKeydownTrigger === void 0) { isKeydownTrigger = false; }
        this.viewDate = this.calendarModel.timedelta(this.viewDate, 'month', -1);
        this._monthAction = 'prev';
        if (this.daysView) {
            this.daysView.isKeydownTrigger = isKeydownTrigger;
        }
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?=} isKeydownTrigger
     * @return {?}
     */
    IgxCalendarComponent.prototype.nextMonth = /**
     * @hidden
     * @param {?=} isKeydownTrigger
     * @return {?}
     */
    function (isKeydownTrigger) {
        if (isKeydownTrigger === void 0) { isKeydownTrigger = false; }
        this.viewDate = this.calendarModel.timedelta(this.viewDate, 'month', 1);
        this._monthAction = 'next';
        if (this.daysView) {
            this.daysView.isKeydownTrigger = isKeydownTrigger;
        }
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @return {?}
     */
    IgxCalendarComponent.prototype.activeViewDecade = /**
     * @hidden
     * @return {?}
     */
    function () {
        var _this = this;
        _super.prototype.activeViewDecade.call(this);
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
     * @param {?} event
     * @return {?}
     */
    IgxCalendarComponent.prototype.activeViewDecadeKB = /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var _this = this;
        _super.prototype.activeViewDecadeKB.call(this, event);
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
    IgxCalendarComponent.prototype.getFormattedDate = /**
     * @hidden
     * @return {?}
     */
    function () {
        /** @type {?} */
        var date = this.headerDate;
        return {
            monthday: this.formatterMonthday.format(date),
            weekday: this.formatterWeekday.format(date),
        };
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} instance
     * @return {?}
     */
    IgxCalendarComponent.prototype.childClicked = /**
     * @hidden
     * @param {?} instance
     * @return {?}
     */
    function (instance) {
        if (instance.isPrevMonth) {
            this.previousMonth();
        }
        if (instance.isNextMonth) {
            this.nextMonth();
        }
        this.selectDateFromClient(instance.date);
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
    IgxCalendarComponent.prototype.viewChanged = /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.viewDate = this.calendarModel.timedelta(event, 'month', 0);
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    IgxCalendarComponent.prototype.changeMonth = /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var _this = this;
        this.viewDate = new Date(this.viewDate.getFullYear(), event.getMonth());
        this.activeView = CalendarView.DEFAULT;
        requestAnimationFrame(function () {
            _this.monthsBtn.nativeElement.focus();
        });
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @return {?}
     */
    IgxCalendarComponent.prototype.activeViewYear = /**
     * @hidden
     * @return {?}
     */
    function () {
        var _this = this;
        this.activeView = CalendarView.YEAR;
        requestAnimationFrame(function () {
            _this.monthsView.dates.find(function (date) { return date.isCurrentMonth; }).nativeElement.focus();
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
    IgxCalendarComponent.prototype.activeViewYearKB = /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event.key === " " /* SPACE */ || event.key === "Spacebar" /* SPACE_IE */ || event.key === "Enter" /* ENTER */) {
            event.preventDefault();
            this.activeViewYear();
        }
    };
    /**
     * Deselects date(s) (based on the selection type).
     *```typescript
     * this.calendar.deselectDate(new Date(`2018-06-12`));
     *````
     */
    /**
     * Deselects date(s) (based on the selection type).
     * ```typescript
     * this.calendar.deselectDate(new Date(`2018-06-12`));
     * ````
     * @param {?=} value
     * @return {?}
     */
    IgxCalendarComponent.prototype.deselectDate = /**
     * Deselects date(s) (based on the selection type).
     * ```typescript
     * this.calendar.deselectDate(new Date(`2018-06-12`));
     * ````
     * @param {?=} value
     * @return {?}
     */
    function (value) {
        _super.prototype.deselectDate.call(this, value);
        this.daysView.selectedDates = this.selectedDates;
        this._onChangeCallback(this.selectedDates);
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    IgxCalendarComponent.prototype.onKeydownPageUp = /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.preventDefault();
        /** @type {?} */
        var activeDate = this.daysView.dates.find(function (date) { return date.nativeElement === document.activeElement; });
        if (activeDate) {
            this.daysView.nextDate = new Date(activeDate.date.date);
            /** @type {?} */
            var year = this.daysView.nextDate.getFullYear();
            /** @type {?} */
            var month = this.daysView.nextDate.getMonth() - 1;
            if (month < 0) {
                month = 11;
                year -= 1;
            }
            /** @type {?} */
            var range = monthRange(this.daysView.nextDate.getFullYear(), month);
            /** @type {?} */
            var day = this.daysView.nextDate.getDate();
            if (day > range[1]) {
                day = range[1];
            }
            this.daysView.nextDate.setDate(day);
            this.daysView.nextDate.setMonth(month);
            this.daysView.nextDate.setFullYear(year);
            this.daysView.callback = function (dates, next) {
                /** @type {?} */
                var dayItem = dates.find(function (d) { return d.date.date.getTime() === next.getTime(); });
                if (dayItem) {
                    dayItem.nativeElement.focus();
                }
            };
        }
        this.previousMonth(true);
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    IgxCalendarComponent.prototype.onKeydownPageDown = /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.preventDefault();
        this.nextMonth(true);
        /** @type {?} */
        var activeDate = this.daysView.dates.find(function (date) { return date.nativeElement === document.activeElement; });
        if (activeDate) {
            this.daysView.nextDate = new Date(activeDate.date.date);
            /** @type {?} */
            var year = this.daysView.nextDate.getFullYear();
            /** @type {?} */
            var month = this.daysView.nextDate.getMonth() + 1;
            if (month > 11) {
                month = 0;
                year += 1;
            }
            /** @type {?} */
            var range = monthRange(this.daysView.nextDate.getFullYear(), month);
            /** @type {?} */
            var day = this.daysView.nextDate.getDate();
            if (day > range[1]) {
                day = range[1];
            }
            this.daysView.nextDate.setDate(day);
            this.daysView.nextDate.setMonth(month);
            this.daysView.nextDate.setFullYear(year);
            this.daysView.callback = function (dates, next) {
                /** @type {?} */
                var dayItem = dates.find(function (d) { return d.date.date.getTime() === next.getTime(); });
                if (dayItem) {
                    dayItem.nativeElement.focus();
                }
            };
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
    IgxCalendarComponent.prototype.onKeydownShiftPageUp = /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.preventDefault();
        this.viewDate = this.calendarModel.timedelta(this.viewDate, 'year', -1);
        this.daysView.animationAction = 'prev';
        this.daysView.isKeydownTrigger = true;
        /** @type {?} */
        var activeDate = this.daysView.dates.find(function (date) { return date.nativeElement === document.activeElement; });
        if (activeDate) {
            this.daysView.nextDate = new Date(activeDate.date.date);
            /** @type {?} */
            var year = this.daysView.nextDate.getFullYear() - 1;
            /** @type {?} */
            var range = monthRange(year, this.daysView.nextDate.getMonth());
            /** @type {?} */
            var day = this.daysView.nextDate.getDate();
            if (day > range[1]) {
                day = range[1];
            }
            this.daysView.nextDate.setDate(day);
            this.daysView.nextDate.setFullYear(year);
            this.daysView.callback = function (dates, next) {
                /** @type {?} */
                var dayItem = dates.find(function (d) { return d.date.date.getTime() === next.getTime(); });
                if (dayItem) {
                    dayItem.nativeElement.focus();
                }
            };
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
    IgxCalendarComponent.prototype.onKeydownShiftPageDown = /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.preventDefault();
        this.viewDate = this.calendarModel.timedelta(this.viewDate, 'year', 1);
        this.daysView.animationAction = 'next';
        this.daysView.isKeydownTrigger = true;
        /** @type {?} */
        var activeDate = this.daysView.dates.find(function (date) { return date.nativeElement === document.activeElement; });
        if (activeDate) {
            this.daysView.nextDate = new Date(activeDate.date.date);
            /** @type {?} */
            var year = this.daysView.nextDate.getFullYear() + 1;
            /** @type {?} */
            var range = monthRange(year, this.daysView.nextDate.getMonth());
            /** @type {?} */
            var day = this.daysView.nextDate.getDate();
            if (day > range[1]) {
                day = range[1];
            }
            this.daysView.nextDate.setDate(day);
            this.daysView.nextDate.setFullYear(year);
            this.daysView.callback = function (dates, next) {
                /** @type {?} */
                var dayItem = dates.find(function (d) { return d.date.date.getTime() === next.getTime(); });
                if (dayItem) {
                    dayItem.nativeElement.focus();
                }
            };
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
    IgxCalendarComponent.prototype.onKeydownHome = /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.daysView) {
            this.daysView.onKeydownHome(event);
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
    IgxCalendarComponent.prototype.onKeydownEnd = /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.daysView) {
            this.daysView.onKeydownEnd(event);
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
    IgxCalendarComponent.prototype.onMouseUp = /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.daysView && this.daysView.monthScrollDirection !== ScrollMonth.NONE) {
            this.stopMonthScroll(event);
        }
    };
    /**
     * Helper method building and returning the context object inside
     * the calendar templates.
     * @hidden
     */
    /**
     * Helper method building and returning the context object inside
     * the calendar templates.
     * @hidden
     * @private
     * @param {?} value
     * @return {?}
     */
    IgxCalendarComponent.prototype.generateContext = /**
     * Helper method building and returning the context object inside
     * the calendar templates.
     * @hidden
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        var _this = this;
        /** @type {?} */
        var formatObject = tslib_1.__assign({ monthView: function () { return _this.activeViewYear(); }, yearView: function () { return _this.activeViewDecade(); } }, this.calendarModel.formatToParts(value, this.locale, this.formatOptions, ['era', 'year', 'month', 'day', 'weekday']));
        return { $implicit: formatObject };
    };
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
        headerTemplateDirective: [{ type: ContentChild, args: [forwardRef(function () { return IgxCalendarHeaderTemplateDirective; }), { read: IgxCalendarHeaderTemplateDirective, static: true },] }],
        subheaderTemplateDirective: [{ type: ContentChild, args: [forwardRef(function () { return IgxCalendarSubheaderTemplateDirective; }), { read: IgxCalendarSubheaderTemplateDirective, static: true },] }],
        onKeydownPageUp: [{ type: HostListener, args: ['keydown.pageup', ['$event'],] }],
        onKeydownPageDown: [{ type: HostListener, args: ['keydown.pagedown', ['$event'],] }],
        onKeydownShiftPageUp: [{ type: HostListener, args: ['keydown.shift.pageup', ['$event'],] }],
        onKeydownShiftPageDown: [{ type: HostListener, args: ['keydown.shift.pagedown', ['$event'],] }],
        onKeydownHome: [{ type: HostListener, args: ['keydown.home', ['$event'],] }],
        onKeydownEnd: [{ type: HostListener, args: ['keydown.end', ['$event'],] }],
        onMouseUp: [{ type: HostListener, args: ['document:mouseup', ['$event'],] }]
    };
    return IgxCalendarComponent;
}(IgxMonthPickerBase));
export { IgxCalendarComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vaWduaXRldWktYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9jYWxlbmRhci9jYWxlbmRhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN4RSxPQUFPLEVBQ0gsU0FBUyxFQUNULFlBQVksRUFDWixVQUFVLEVBQ1YsV0FBVyxFQUNYLFlBQVksRUFDWixLQUFLLEVBQ0wsU0FBUyxFQUNULFVBQVUsRUFFYixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNuRCxPQUFPLEVBQUUsTUFBTSxFQUFFLGFBQWEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQzNELE9BQU8sRUFDSCxrQ0FBa0MsRUFDbEMscUNBQXFDLEVBQ3hDLE1BQU0sdUJBQXVCLENBQUM7QUFFL0IsT0FBTyxFQUFpQixVQUFVLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFDdkQsT0FBTyxFQUFFLFlBQVksRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDaEMsT0FBTyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7SUFFMUMsT0FBTyxHQUFHLENBQUM7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USxDQUFDOzRCQVV0QyxZQUFZLFNBQUMsa0JBQWtCLEVBQUUsQ0FBQyxRQUFRLENBQUM7O0lBcUJoRCwyQkFBQztDQUFBLEFBMW5CRCxDQXNCMEMsa0JBQWtCLEdBb21CM0Q7U0FwbUJZLG9CQUFvQjs7Ozs7Ozs7Ozs7Ozs7SUFZN0Isa0NBRXdDOztJQUV4Qyx5Q0FDd0I7Ozs7Ozs7Ozs7OztJQVl4Qix3Q0FDd0I7Ozs7Ozs7SUFPeEIsd0NBQ29COzs7Ozs7O0lBT3BCLG9DQUNxQjs7Ozs7OztJQU9yQiw4Q0FDbUM7Ozs7Ozs7SUFpQm5DLDBDQUN5Qjs7Ozs7SUFLekIsMENBQzBDOzs7OztJQUsxQyx5Q0FDNkI7Ozs7O0lBSzdCLDBDQUN5Qzs7Ozs7SUFLekMsd0NBQ3NDOzs7OztJQUt0Qyw0Q0FDZ0M7Ozs7O0lBS2hDLDRDQUNnQzs7Ozs7O0lBd0doQyx1REFDb0U7Ozs7OztJQU1wRSwwREFDMEU7Ozs7OztJQUsxRSw0Q0FBMEI7Ozs7O0lBb0UxQixvREFLQzs7Ozs7SUFLRCxvREFLQzs7Ozs7SUFLRCwrQ0FjQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHRyYW5zaXRpb24sIHRyaWdnZXIsIHVzZUFuaW1hdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHtcbiAgICBDb21wb25lbnQsXG4gICAgQ29udGVudENoaWxkLFxuICAgIGZvcndhcmRSZWYsXG4gICAgSG9zdEJpbmRpbmcsXG4gICAgSG9zdExpc3RlbmVyLFxuICAgIElucHV0LFxuICAgIFZpZXdDaGlsZCxcbiAgICBFbGVtZW50UmVmLFxuICAgIEFmdGVyVmlld0luaXRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IGZhZGVJbiwgc2NhbGVJbkNlbnRlciB9IGZyb20gJy4uL2FuaW1hdGlvbnMvbWFpbic7XG5pbXBvcnQge1xuICAgIElneENhbGVuZGFySGVhZGVyVGVtcGxhdGVEaXJlY3RpdmUsXG4gICAgSWd4Q2FsZW5kYXJTdWJoZWFkZXJUZW1wbGF0ZURpcmVjdGl2ZVxufSBmcm9tICcuL2NhbGVuZGFyLmRpcmVjdGl2ZXMnO1xuaW1wb3J0IHsgS0VZUyB9IGZyb20gJy4uL2NvcmUvdXRpbHMnO1xuaW1wb3J0IHsgSUNhbGVuZGFyRGF0ZSwgbW9udGhSYW5nZSB9IGZyb20gJy4vY2FsZW5kYXInO1xuaW1wb3J0IHsgQ2FsZW5kYXJWaWV3LCBJZ3hNb250aFBpY2tlckJhc2UgfSBmcm9tICcuL21vbnRoLXBpY2tlci1iYXNlJztcbmltcG9ydCB7IElneE1vbnRoc1ZpZXdDb21wb25lbnQgfSBmcm9tICcuL21vbnRocy12aWV3L21vbnRocy12aWV3LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJZ3hZZWFyc1ZpZXdDb21wb25lbnQgfSBmcm9tICcuL3llYXJzLXZpZXcveWVhcnMtdmlldy5jb21wb25lbnQnO1xuaW1wb3J0IHsgSWd4RGF5c1ZpZXdDb21wb25lbnQgfSBmcm9tICcuL2RheXMtdmlldy9kYXlzLXZpZXcuY29tcG9uZW50JztcbmltcG9ydCB7IGludGVydmFsIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlVW50aWwsIGRlYm91bmNlLCBza2lwTGFzdCwgc3dpdGNoTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgU2Nyb2xsTW9udGggfSBmcm9tICcuL2NhbGVuZGFyLWJhc2UnO1xuXG5sZXQgTkVYVF9JRCA9IDA7XG5cbi8qKlxuICogKipJZ25pdGUgVUkgZm9yIEFuZ3VsYXIgQ2FsZW5kYXIqKiAtXG4gKiBbRG9jdW1lbnRhdGlvbl0oaHR0cHM6Ly93d3cuaW5mcmFnaXN0aWNzLmNvbS9wcm9kdWN0cy9pZ25pdGUtdWktYW5ndWxhci9hbmd1bGFyL2NvbXBvbmVudHMvY2FsZW5kYXIuaHRtbClcbiAqXG4gKiBUaGUgSWduaXRlIFVJIENhbGVuZGFyIHByb3ZpZGVzIGFuIGVhc3kgd2F5IHRvIGRpc3BsYXkgYSBjYWxlbmRhciBhbmQgYWxsb3cgdXNlcnMgdG8gc2VsZWN0IGRhdGVzIHVzaW5nIHNpbmdsZSwgbXVsdGlwbGVcbiAqIG9yIHJhbmdlIHNlbGVjdGlvbi5cbiAqXG4gKiBFeGFtcGxlOlxuICogYGBgaHRtbFxuICogPGlneC1jYWxlbmRhciBzZWxlY3Rpb249XCJyYW5nZVwiPjwvaWd4LWNhbGVuZGFyPlxuICogYGBgXG4gKi9cbkBDb21wb25lbnQoe1xuICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7XG4gICAgICAgICAgICBtdWx0aTogdHJ1ZSxcbiAgICAgICAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgICAgICAgdXNlRXhpc3Rpbmc6IElneENhbGVuZGFyQ29tcG9uZW50XG4gICAgICAgIH1cbiAgICBdLFxuICAgIGFuaW1hdGlvbnM6IFtcbiAgICAgICAgdHJpZ2dlcignYW5pbWF0ZVZpZXcnLCBbXG4gICAgICAgICAgICB0cmFuc2l0aW9uKCd2b2lkID0+IDAnLCB1c2VBbmltYXRpb24oZmFkZUluKSksXG4gICAgICAgICAgICB0cmFuc2l0aW9uKCd2b2lkID0+IConLCB1c2VBbmltYXRpb24oc2NhbGVJbkNlbnRlciwge1xuICAgICAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogJy4ycycsXG4gICAgICAgICAgICAgICAgICAgIGZyb21TY2FsZTogLjlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSlcbiAgICAgICAgXSlcbiAgICBdLFxuICAgIHNlbGVjdG9yOiAnaWd4LWNhbGVuZGFyJyxcbiAgICB0ZW1wbGF0ZVVybDogJ2NhbGVuZGFyLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBJZ3hDYWxlbmRhckNvbXBvbmVudCBleHRlbmRzIElneE1vbnRoUGlja2VyQmFzZSBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuICAgIC8qKlxuICAgICAqIFNldHMvZ2V0cyB0aGUgYGlkYCBvZiB0aGUgY2FsZW5kYXIuXG4gICAgICogSWYgbm90IHNldCwgdGhlIGBpZGAgd2lsbCBoYXZlIHZhbHVlIGBcImlneC1jYWxlbmRhci0wXCJgLlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8aWd4LWNhbGVuZGFyIGlkID0gXCJteS1maXJzdC1jYWxlbmRhclwiPjwvaWd4LWNhbGVuZGFyPlxuICAgICAqIGBgYFxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBsZXQgY2FsZW5kYXJJZCA9ICB0aGlzLmNhbGVuZGFyLmlkO1xuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hDYWxlbmRhckNvbXBvbmVudFxuICAgICAqL1xuICAgIEBIb3N0QmluZGluZygnYXR0ci5pZCcpXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgaWQgPSBgaWd4LWNhbGVuZGFyLSR7TkVYVF9JRCsrfWA7XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBoYXNIZWFkZXIgPSB0cnVlO1xuXG4gICAgLyoqXG4gICAgICogU2V0cy9nZXRzIHdoZXRoZXIgdGhlIGNhbGVuZGFyIGhlYWRlciB3aWxsIGJlIGluIHZlcnRpY2FsIHBvc2l0aW9uLlxuICAgICAqIERlZmF1bHQgdmFsdWUgaXMgYGZhbHNlYC5cbiAgICAgKiBgYGBodG1sXG4gICAgICogPGlneC1jYWxlbmRhciBbdmVydGljYWxdID0gXCJ0cnVlXCI+PC9pZ3gtY2FsZW5kYXI+XG4gICAgICogYGBgXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGxldCBpc1ZlcnRpY2FsID0gdGhpcy5jYWxlbmRhci52ZXJ0aWNhbDtcbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyB2ZXJ0aWNhbCA9IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGRlZmF1bHQgYHRhYmluZGV4YCBhdHRyaWJ1dGUgZm9yIHRoZSBjb21wb25lbnQuXG4gICAgICpcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgQEhvc3RCaW5kaW5nKCdhdHRyLnRhYmluZGV4JylcbiAgICBwdWJsaWMgdGFiaW5kZXggPSAwO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGRlZmF1bHQgYXJpYSByb2xlIGF0dHJpYnV0ZSBmb3IgdGhlIGNvbXBvbmVudC5cbiAgICAgKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBASG9zdEJpbmRpbmcoJ2F0dHIucm9sZScpXG4gICAgcHVibGljIHJvbGUgPSAnZ3JpZCc7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgZGVmYXVsdCBhcmlhIGxlYmVsbGVkIGJ5IGF0dHJpYnV0ZSBmb3IgdGhlIGNvbXBvbmVudC5cbiAgICAgKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBASG9zdEJpbmRpbmcoJ2F0dHIuYXJpYS1sYWJlbGxlZGJ5JylcbiAgICBwdWJsaWMgYXJpYUxhYmVsbGVkQnkgPSAnY2FsZW5kYXInO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGRlZmF1bHQgY3NzIGNsYXNzIGFwcGxpZWQgdG8gdGhlIGNvbXBvbmVudC5cbiAgICAgKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBASG9zdEJpbmRpbmcoJ2NsYXNzLmlneC1jYWxlbmRhci0tdmVydGljYWwnKVxuICAgIGdldCBzdHlsZVZlcnRpY2FsQ2xhc3MoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLnZlcnRpY2FsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSBkZWZhdWx0IGNzcyBjbGFzcyBhcHBsaWVkIHRvIHRoZSBjb21wb25lbnQuXG4gICAgICpcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pZ3gtY2FsZW5kYXInKVxuICAgIHB1YmxpYyBzdHlsZUNsYXNzID0gdHJ1ZTtcblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBAVmlld0NoaWxkKCdtb250aHMnLCB7IHJlYWQ6IElneE1vbnRoc1ZpZXdDb21wb25lbnQsIHN0YXRpYzogZmFsc2UgfSlcbiAgICBwdWJsaWMgbW9udGhzVmlldzogSWd4TW9udGhzVmlld0NvbXBvbmVudDtcblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBAVmlld0NoaWxkKCdtb250aHNCdG4nLCB7IHN0YXRpYzogZmFsc2UgfSlcbiAgICBwdWJsaWMgbW9udGhzQnRuOiBFbGVtZW50UmVmO1xuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIEBWaWV3Q2hpbGQoJ2RlY2FkZScsIHsgcmVhZDogSWd4WWVhcnNWaWV3Q29tcG9uZW50LCBzdGF0aWM6IGZhbHNlIH0pXG4gICAgcHVibGljIGRhY2FkZVZpZXc6IElneFllYXJzVmlld0NvbXBvbmVudDtcblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBAVmlld0NoaWxkKCdkYXlzJywgeyByZWFkOiBJZ3hEYXlzVmlld0NvbXBvbmVudCwgc3RhdGljOiBmYWxzZSB9KVxuICAgIHB1YmxpYyBkYXlzVmlldzogSWd4RGF5c1ZpZXdDb21wb25lbnQ7XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgQFZpZXdDaGlsZCgncHJldk1vbnRoQnRuJywgeyBzdGF0aWM6IGZhbHNlIH0pXG4gICAgcHVibGljIHByZXZNb250aEJ0bjogRWxlbWVudFJlZjtcblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBAVmlld0NoaWxkKCduZXh0TW9udGhCdG4nLCB7IHN0YXRpYzogZmFsc2UgfSlcbiAgICBwdWJsaWMgbmV4dE1vbnRoQnRuOiBFbGVtZW50UmVmO1xuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIGdldCBpc1llYXJWaWV3KCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5hY3RpdmVWaWV3ID09PSBDYWxlbmRhclZpZXcuWUVBUjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgZ2V0IG1vbnRoQWN0aW9uKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9tb250aEFjdGlvbjtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHNldCBtb250aEFjdGlvbih2YWw6IHN0cmluZykge1xuICAgICAgICB0aGlzLl9tb250aEFjdGlvbiA9IHZhbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBoZWFkZXIgdGVtcGxhdGUuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGxldCBoZWFkZXJUZW1wbGF0ZSA9ICB0aGlzLmNhbGVuZGFyLmhlYWRlclRlYW1wbGF0ZTtcbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4Q2FsZW5kYXJDb21wb25lbnRcbiAgICAgKi9cbiAgICBnZXQgaGVhZGVyVGVtcGxhdGUoKTogYW55IHtcbiAgICAgICAgaWYgKHRoaXMuaGVhZGVyVGVtcGxhdGVEaXJlY3RpdmUpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmhlYWRlclRlbXBsYXRlRGlyZWN0aXZlLnRlbXBsYXRlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIGhlYWRlciB0ZW1wbGF0ZS5cbiAgICAgKiBgYGBodG1sXG4gICAgICogPGlneC1jYWxlbmRhciBoZWFkZXJUZW1wbGF0ZURpcmVjdGl2ZSA9IFwiaWd4Q2FsZW5kYXJIZWFkZXJcIj48L2lneC1jYWxlbmRhcj5cbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4Q2FsZW5kYXJDb21wb25lbnRcbiAgICAgKi9cbiAgICBzZXQgaGVhZGVyVGVtcGxhdGUoZGlyZWN0aXZlOiBhbnkpIHtcbiAgICAgICAgdGhpcy5oZWFkZXJUZW1wbGF0ZURpcmVjdGl2ZSA9IGRpcmVjdGl2ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBzdWJoZWFkZXIgdGVtcGxhdGUuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGxldCBzdWJoZWFkZXJUZW1wbGF0ZSA9IHRoaXMuY2FsZW5kYXIuc3ViaGVhZGVyVGVtcGxhdGU7XG4gICAgICogYGBgXG4gICAgICovXG4gICAgZ2V0IHN1YmhlYWRlclRlbXBsYXRlKCk6IGFueSB7XG4gICAgICAgIGlmICh0aGlzLnN1YmhlYWRlclRlbXBsYXRlRGlyZWN0aXZlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zdWJoZWFkZXJUZW1wbGF0ZURpcmVjdGl2ZS50ZW1wbGF0ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBzdWJoZWFkZXIgdGVtcGxhdGUuXG4gICAgICogYGBgaHRtbFxuICAgICAqIDxpZ3gtY2FsZW5kYXIgc3ViaGVhZGVyVGVtcGxhdGUgPSBcImlneENhbGVuZGFyU3ViaGVhZGVyXCI+PC9pZ3gtY2FsZW5kYXI+XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneENhbGVuZGFyQ29tcG9uZW50XG4gICAgICovXG4gICAgc2V0IHN1YmhlYWRlclRlbXBsYXRlKGRpcmVjdGl2ZTogYW55KSB7XG4gICAgICAgIHRoaXMuc3ViaGVhZGVyVGVtcGxhdGVEaXJlY3RpdmUgPSBkaXJlY3RpdmU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgY29udGV4dCBmb3IgdGhlIHRlbXBsYXRlIG1hcmtlZCB3aXRoIHRoZSBgaWd4Q2FsZW5kYXJIZWFkZXJgIGRpcmVjdGl2ZS5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogbGV0IGhlYWRlckNvbnRleHQgPSAgdGhpcy5jYWxlbmRhci5oZWFkZXJDb250ZXh0O1xuICAgICAqIGBgYFxuICAgICAqL1xuICAgIGdldCBoZWFkZXJDb250ZXh0KCkge1xuICAgICAgICBjb25zdCBkYXRlOiBEYXRlID0gdGhpcy5oZWFkZXJEYXRlO1xuICAgICAgICByZXR1cm4gdGhpcy5nZW5lcmF0ZUNvbnRleHQoZGF0ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgY29udGV4dCBmb3IgdGhlIHRlbXBsYXRlIG1hcmtlZCB3aXRoIGVpdGhlciBgaWd4Q2FsZW5kYXJTdWJIZWFkZXJNb250aGBcbiAgICAgKiBvciBgaWd4Q2FsZW5kYXJTdWJIZWFkZXJZZWFyYCBkaXJlY3RpdmUuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGxldCBjb250ZXh0ID0gIHRoaXMuY2FsZW5kYXIuY29udGV4dDtcbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBnZXQgY29udGV4dCgpIHtcbiAgICAgICAgY29uc3QgZGF0ZTogRGF0ZSA9IHRoaXMudmlld0RhdGU7XG4gICAgICAgIHJldHVybiB0aGlzLmdlbmVyYXRlQ29udGV4dChkYXRlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgZ2V0IGhlYWRlckRhdGUoKTogRGF0ZSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNlbGVjdGVkRGF0ZXMgPyB0aGlzLnNlbGVjdGVkRGF0ZXMgOiBuZXcgRGF0ZSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBAQ29udGVudENoaWxkKGZvcndhcmRSZWYoKCkgPT4gSWd4Q2FsZW5kYXJIZWFkZXJUZW1wbGF0ZURpcmVjdGl2ZSksIHsgcmVhZDogSWd4Q2FsZW5kYXJIZWFkZXJUZW1wbGF0ZURpcmVjdGl2ZSwgc3RhdGljOiB0cnVlICB9KVxuICAgIHByaXZhdGUgaGVhZGVyVGVtcGxhdGVEaXJlY3RpdmU6IElneENhbGVuZGFySGVhZGVyVGVtcGxhdGVEaXJlY3RpdmU7XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm1heC1saW5lLWxlbmd0aFxuICAgIEBDb250ZW50Q2hpbGQoZm9yd2FyZFJlZigoKSA9PiBJZ3hDYWxlbmRhclN1YmhlYWRlclRlbXBsYXRlRGlyZWN0aXZlKSwgeyByZWFkOiBJZ3hDYWxlbmRhclN1YmhlYWRlclRlbXBsYXRlRGlyZWN0aXZlLCBzdGF0aWM6IHRydWUgIH0pXG4gICAgcHJpdmF0ZSBzdWJoZWFkZXJUZW1wbGF0ZURpcmVjdGl2ZTogSWd4Q2FsZW5kYXJTdWJoZWFkZXJUZW1wbGF0ZURpcmVjdGl2ZTtcblxuICAgIC8qKlxuICAgICAqQGhpZGRlblxuICAgICAqL1xuICAgIHByaXZhdGUgX21vbnRoQWN0aW9uID0gJyc7XG5cbiAgICAvKipcbiAgICAgKkBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgbmdBZnRlclZpZXdJbml0KCkge1xuXG4gICAgICAgIHRoaXMuc3RhcnRNb250aFNjcm9sbCQucGlwZShcbiAgICAgICAgICAgIHRha2VVbnRpbCh0aGlzLnN0b3BNb250aFNjcm9sbCQpLFxuICAgICAgICAgICAgc3dpdGNoTWFwKCgpID0+IHRoaXMuZGF5c1ZpZXcuc2Nyb2xsTW9udGgkLnBpcGUoXG4gICAgICAgICAgICAgICAgc2tpcExhc3QoMSksXG4gICAgICAgICAgICAgICAgZGVib3VuY2UoKCkgPT4gaW50ZXJ2YWwoMzAwKSksXG4gICAgICAgICAgICAgICAgdGFrZVVudGlsKHRoaXMuc3RvcE1vbnRoU2Nyb2xsJClcbiAgICAgICAgICAgICkpKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAodGhpcy5kYXlzVmlldy5tb250aFNjcm9sbERpcmVjdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIFNjcm9sbE1vbnRoLlBSRVY6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByZXZpb3VzTW9udGgoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIFNjcm9sbE1vbnRoLk5FWFQ6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5leHRNb250aCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgU2Nyb2xsTW9udGguTk9ORTpcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgbG9jYWxlIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBtb250aCBpbiB0aGUgbW9udGggdmlldyBpZiBlbmFibGVkLFxuICAgICAqIG90aGVyd2lzZSByZXR1cm5zIHRoZSBkZWZhdWx0IGBEYXRlLmdldE1vbnRoKClgIHZhbHVlLlxuICAgICAqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyBmb3JtYXR0ZWRNb250aCh2YWx1ZTogRGF0ZSk6IHN0cmluZyB7XG4gICAgICAgIGlmICh0aGlzLmZvcm1hdFZpZXdzLm1vbnRoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5mb3JtYXR0ZXJNb250aC5mb3JtYXQodmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBgJHt2YWx1ZS5nZXRNb250aCgpfWA7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyBwcmV2aW91c01vbnRoKGlzS2V5ZG93blRyaWdnZXIgPSBmYWxzZSkge1xuICAgICAgICB0aGlzLnZpZXdEYXRlID0gdGhpcy5jYWxlbmRhck1vZGVsLnRpbWVkZWx0YSh0aGlzLnZpZXdEYXRlLCAnbW9udGgnLCAtMSk7XG4gICAgICAgIHRoaXMuX21vbnRoQWN0aW9uID0gJ3ByZXYnO1xuXG4gICAgICAgIGlmICh0aGlzLmRheXNWaWV3KSB7XG4gICAgICAgICAgICB0aGlzLmRheXNWaWV3LmlzS2V5ZG93blRyaWdnZXIgPSBpc0tleWRvd25UcmlnZ2VyO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyBuZXh0TW9udGgoaXNLZXlkb3duVHJpZ2dlciA9IGZhbHNlKSB7XG4gICAgICAgIHRoaXMudmlld0RhdGUgPSB0aGlzLmNhbGVuZGFyTW9kZWwudGltZWRlbHRhKHRoaXMudmlld0RhdGUsICdtb250aCcsIDEpO1xuICAgICAgICB0aGlzLl9tb250aEFjdGlvbiA9ICduZXh0JztcblxuICAgICAgICBpZiAodGhpcy5kYXlzVmlldykge1xuICAgICAgICAgICAgdGhpcy5kYXlzVmlldy5pc0tleWRvd25UcmlnZ2VyID0gaXNLZXlkb3duVHJpZ2dlcjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhcnRQcmV2TW9udGhTY3JvbGwgPSAoaXNLZXlkb3duVHJpZ2dlciA9IGZhbHNlKSA9PiB7XG4gICAgICAgIHRoaXMuc3RhcnRNb250aFNjcm9sbCQubmV4dCgpO1xuICAgICAgICB0aGlzLmRheXNWaWV3Lm1vbnRoU2Nyb2xsRGlyZWN0aW9uID0gU2Nyb2xsTW9udGguUFJFVjtcblxuICAgICAgICB0aGlzLnByZXZpb3VzTW9udGgoaXNLZXlkb3duVHJpZ2dlcik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyBzdGFydE5leHRNb250aFNjcm9sbCA9IChpc0tleWRvd25UcmlnZ2VyID0gZmFsc2UpID0+IHtcbiAgICAgICAgdGhpcy5zdGFydE1vbnRoU2Nyb2xsJC5uZXh0KCk7XG4gICAgICAgIHRoaXMuZGF5c1ZpZXcubW9udGhTY3JvbGxEaXJlY3Rpb24gPSBTY3JvbGxNb250aC5ORVhUO1xuXG4gICAgICAgIHRoaXMubmV4dE1vbnRoKGlzS2V5ZG93blRyaWdnZXIpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RvcE1vbnRoU2Nyb2xsID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICAgIHRoaXMuZGF5c1ZpZXcuc3RvcE1vbnRoU2Nyb2xsJC5uZXh0KHRydWUpO1xuICAgICAgICB0aGlzLmRheXNWaWV3LnN0b3BNb250aFNjcm9sbCQuY29tcGxldGUoKTtcblxuXG4gICAgICAgIGlmICh0aGlzLmRheXNWaWV3Lm1vbnRoU2Nyb2xsRGlyZWN0aW9uID09PSBTY3JvbGxNb250aC5QUkVWKSB7XG4gICAgICAgICAgICB0aGlzLnByZXZNb250aEJ0bi5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5kYXlzVmlldy5tb250aFNjcm9sbERpcmVjdGlvbiA9PT0gU2Nyb2xsTW9udGguTkVYVCkge1xuICAgICAgICAgICAgdGhpcy5uZXh0TW9udGhCdG4ubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5kYXlzVmlldy5tb250aFNjcm9sbERpcmVjdGlvbiA9IFNjcm9sbE1vbnRoLk5PTkU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyBhY3RpdmVWaWV3RGVjYWRlKCkge1xuICAgICAgICBzdXBlci5hY3RpdmVWaWV3RGVjYWRlKCk7XG5cbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLmRhY2FkZVZpZXcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRhY2FkZVZpZXcuZWwubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIGFjdGl2ZVZpZXdEZWNhZGVLQihldmVudCkge1xuICAgICAgICBzdXBlci5hY3RpdmVWaWV3RGVjYWRlS0IoZXZlbnQpO1xuXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5kYWNhZGVWaWV3KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kYWNhZGVWaWV3LmVsLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyBnZXRGb3JtYXR0ZWREYXRlKCk6IHsgd2Vla2RheTogc3RyaW5nLCBtb250aGRheTogc3RyaW5nIH0ge1xuXG4gICAgICAgIGNvbnN0IGRhdGUgPSB0aGlzLmhlYWRlckRhdGU7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG1vbnRoZGF5OiB0aGlzLmZvcm1hdHRlck1vbnRoZGF5LmZvcm1hdChkYXRlKSxcbiAgICAgICAgICAgIHdlZWtkYXk6IHRoaXMuZm9ybWF0dGVyV2Vla2RheS5mb3JtYXQoZGF0ZSksXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyBjaGlsZENsaWNrZWQoaW5zdGFuY2U6IElDYWxlbmRhckRhdGUpIHtcbiAgICAgICAgaWYgKGluc3RhbmNlLmlzUHJldk1vbnRoKSB7XG4gICAgICAgICAgICB0aGlzLnByZXZpb3VzTW9udGgoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpbnN0YW5jZS5pc05leHRNb250aCkge1xuICAgICAgICAgICAgdGhpcy5uZXh0TW9udGgoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2VsZWN0RGF0ZUZyb21DbGllbnQoaW5zdGFuY2UuZGF0ZSk7XG4gICAgICAgIHRoaXMub25TZWxlY3Rpb24uZW1pdCh0aGlzLnNlbGVjdGVkRGF0ZXMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgdmlld0NoYW5nZWQoZXZlbnQpIHtcbiAgICAgICAgdGhpcy52aWV3RGF0ZSA9IHRoaXMuY2FsZW5kYXJNb2RlbC50aW1lZGVsdGEoZXZlbnQsICdtb250aCcsIDApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgY2hhbmdlTW9udGgoZXZlbnQ6IERhdGUpIHtcbiAgICAgICAgdGhpcy52aWV3RGF0ZSA9IG5ldyBEYXRlKHRoaXMudmlld0RhdGUuZ2V0RnVsbFllYXIoKSwgZXZlbnQuZ2V0TW9udGgoKSk7XG4gICAgICAgIHRoaXMuYWN0aXZlVmlldyA9IENhbGVuZGFyVmlldy5ERUZBVUxUO1xuXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm1vbnRoc0J0bi5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgYWN0aXZlVmlld1llYXIoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuYWN0aXZlVmlldyA9IENhbGVuZGFyVmlldy5ZRUFSO1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5tb250aHNWaWV3LmRhdGVzLmZpbmQoKGRhdGUpID0+IGRhdGUuaXNDdXJyZW50TW9udGgpLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyBhY3RpdmVWaWV3WWVhcktCKGV2ZW50KTogdm9pZCB7XG4gICAgICAgIGlmIChldmVudC5rZXkgPT09IEtFWVMuU1BBQ0UgfHwgZXZlbnQua2V5ID09PSBLRVlTLlNQQUNFX0lFIHx8IGV2ZW50LmtleSA9PT0gS0VZUy5FTlRFUikge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlVmlld1llYXIoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlc2VsZWN0cyBkYXRlKHMpIChiYXNlZCBvbiB0aGUgc2VsZWN0aW9uIHR5cGUpLlxuICAgICAqYGBgdHlwZXNjcmlwdFxuICAgICAqIHRoaXMuY2FsZW5kYXIuZGVzZWxlY3REYXRlKG5ldyBEYXRlKGAyMDE4LTA2LTEyYCkpO1xuICAgICAqYGBgYFxuICAgICAqL1xuICAgIHB1YmxpYyBkZXNlbGVjdERhdGUodmFsdWU/OiBEYXRlIHwgRGF0ZVtdKSB7XG4gICAgICAgIHN1cGVyLmRlc2VsZWN0RGF0ZSh2YWx1ZSk7XG5cbiAgICAgICAgdGhpcy5kYXlzVmlldy5zZWxlY3RlZERhdGVzID0gdGhpcy5zZWxlY3RlZERhdGVzO1xuICAgICAgICB0aGlzLl9vbkNoYW5nZUNhbGxiYWNrKHRoaXMuc2VsZWN0ZWREYXRlcyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIEBIb3N0TGlzdGVuZXIoJ2tleWRvd24ucGFnZXVwJywgWyckZXZlbnQnXSlcbiAgICBwdWJsaWMgb25LZXlkb3duUGFnZVVwKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgY29uc3QgYWN0aXZlRGF0ZSA9IHRoaXMuZGF5c1ZpZXcuZGF0ZXMuZmluZCgoZGF0ZSkgPT4gZGF0ZS5uYXRpdmVFbGVtZW50ID09PSBkb2N1bWVudC5hY3RpdmVFbGVtZW50KTtcbiAgICAgICAgaWYgKGFjdGl2ZURhdGUpIHtcbiAgICAgICAgICAgIHRoaXMuZGF5c1ZpZXcubmV4dERhdGUgPSBuZXcgRGF0ZShhY3RpdmVEYXRlLmRhdGUuZGF0ZSk7XG5cbiAgICAgICAgICAgIGxldCB5ZWFyID0gdGhpcy5kYXlzVmlldy5uZXh0RGF0ZS5nZXRGdWxsWWVhcigpO1xuXG4gICAgICAgICAgICBsZXQgbW9udGggPSB0aGlzLmRheXNWaWV3Lm5leHREYXRlLmdldE1vbnRoKCkgLSAxO1xuICAgICAgICAgICAgaWYgKG1vbnRoIDwgMCkgeyBtb250aCA9IDExOyB5ZWFyIC09IDE7IH1cblxuICAgICAgICAgICAgY29uc3QgcmFuZ2UgPSBtb250aFJhbmdlKHRoaXMuZGF5c1ZpZXcubmV4dERhdGUuZ2V0RnVsbFllYXIoKSwgbW9udGgpO1xuXG4gICAgICAgICAgICBsZXQgZGF5ID0gdGhpcy5kYXlzVmlldy5uZXh0RGF0ZS5nZXREYXRlKCk7XG4gICAgICAgICAgICBpZiAoZGF5ID4gcmFuZ2VbMV0pIHsgZGF5ID0gcmFuZ2VbMV07IH1cblxuICAgICAgICAgICAgdGhpcy5kYXlzVmlldy5uZXh0RGF0ZS5zZXREYXRlKGRheSk7XG4gICAgICAgICAgICB0aGlzLmRheXNWaWV3Lm5leHREYXRlLnNldE1vbnRoKG1vbnRoKTtcbiAgICAgICAgICAgIHRoaXMuZGF5c1ZpZXcubmV4dERhdGUuc2V0RnVsbFllYXIoeWVhcik7XG5cbiAgICAgICAgICAgIHRoaXMuZGF5c1ZpZXcuY2FsbGJhY2sgPSAoZGF0ZXM/LCBuZXh0PykgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRheUl0ZW0gPSBkYXRlcy5maW5kKChkKSA9PiBkLmRhdGUuZGF0ZS5nZXRUaW1lKCkgPT09IG5leHQuZ2V0VGltZSgpKTtcbiAgICAgICAgICAgICAgICBpZiAoZGF5SXRlbSkgeyBkYXlJdGVtLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTsgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucHJldmlvdXNNb250aCh0cnVlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgQEhvc3RMaXN0ZW5lcigna2V5ZG93bi5wYWdlZG93bicsIFsnJGV2ZW50J10pXG4gICAgcHVibGljIG9uS2V5ZG93blBhZ2VEb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgdGhpcy5uZXh0TW9udGgodHJ1ZSk7XG5cbiAgICAgICAgY29uc3QgYWN0aXZlRGF0ZSA9IHRoaXMuZGF5c1ZpZXcuZGF0ZXMuZmluZCgoZGF0ZSkgPT4gZGF0ZS5uYXRpdmVFbGVtZW50ID09PSBkb2N1bWVudC5hY3RpdmVFbGVtZW50KTtcbiAgICAgICAgaWYgKGFjdGl2ZURhdGUpIHtcbiAgICAgICAgICAgIHRoaXMuZGF5c1ZpZXcubmV4dERhdGUgPSBuZXcgRGF0ZShhY3RpdmVEYXRlLmRhdGUuZGF0ZSk7XG5cbiAgICAgICAgICAgIGxldCB5ZWFyID0gdGhpcy5kYXlzVmlldy5uZXh0RGF0ZS5nZXRGdWxsWWVhcigpO1xuXG4gICAgICAgICAgICBsZXQgbW9udGggPSB0aGlzLmRheXNWaWV3Lm5leHREYXRlLmdldE1vbnRoKCkgKyAxO1xuICAgICAgICAgICAgaWYgKG1vbnRoID4gMTEpIHsgbW9udGggPSAwOyB5ZWFyICs9IDE7IH1cblxuICAgICAgICAgICAgY29uc3QgcmFuZ2UgPSBtb250aFJhbmdlKHRoaXMuZGF5c1ZpZXcubmV4dERhdGUuZ2V0RnVsbFllYXIoKSwgbW9udGgpO1xuXG4gICAgICAgICAgICBsZXQgZGF5ID0gdGhpcy5kYXlzVmlldy5uZXh0RGF0ZS5nZXREYXRlKCk7XG4gICAgICAgICAgICBpZiAoZGF5ID4gcmFuZ2VbMV0pIHsgZGF5ID0gcmFuZ2VbMV07IH1cblxuICAgICAgICAgICAgdGhpcy5kYXlzVmlldy5uZXh0RGF0ZS5zZXREYXRlKGRheSk7XG4gICAgICAgICAgICB0aGlzLmRheXNWaWV3Lm5leHREYXRlLnNldE1vbnRoKG1vbnRoKTtcbiAgICAgICAgICAgIHRoaXMuZGF5c1ZpZXcubmV4dERhdGUuc2V0RnVsbFllYXIoeWVhcik7XG5cbiAgICAgICAgICAgIHRoaXMuZGF5c1ZpZXcuY2FsbGJhY2sgPSAoZGF0ZXM/LCBuZXh0PykgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRheUl0ZW0gPSBkYXRlcy5maW5kKChkKSA9PiBkLmRhdGUuZGF0ZS5nZXRUaW1lKCkgPT09IG5leHQuZ2V0VGltZSgpKTtcbiAgICAgICAgICAgICAgICBpZiAoZGF5SXRlbSkgeyBkYXlJdGVtLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTsgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBASG9zdExpc3RlbmVyKCdrZXlkb3duLnNoaWZ0LnBhZ2V1cCcsIFsnJGV2ZW50J10pXG4gICAgcHVibGljIG9uS2V5ZG93blNoaWZ0UGFnZVVwKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMudmlld0RhdGUgPSB0aGlzLmNhbGVuZGFyTW9kZWwudGltZWRlbHRhKHRoaXMudmlld0RhdGUsICd5ZWFyJywgLTEpO1xuXG4gICAgICAgIHRoaXMuZGF5c1ZpZXcuYW5pbWF0aW9uQWN0aW9uID0gJ3ByZXYnO1xuICAgICAgICB0aGlzLmRheXNWaWV3LmlzS2V5ZG93blRyaWdnZXIgPSB0cnVlO1xuXG4gICAgICAgIGNvbnN0IGFjdGl2ZURhdGUgPSB0aGlzLmRheXNWaWV3LmRhdGVzLmZpbmQoKGRhdGUpID0+IGRhdGUubmF0aXZlRWxlbWVudCA9PT0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudCk7XG4gICAgICAgIGlmIChhY3RpdmVEYXRlKSB7XG4gICAgICAgICAgICB0aGlzLmRheXNWaWV3Lm5leHREYXRlID0gbmV3IERhdGUoYWN0aXZlRGF0ZS5kYXRlLmRhdGUpO1xuXG4gICAgICAgICAgICBjb25zdCB5ZWFyID0gdGhpcy5kYXlzVmlldy5uZXh0RGF0ZS5nZXRGdWxsWWVhcigpIC0gMTtcblxuICAgICAgICAgICAgY29uc3QgcmFuZ2UgPSBtb250aFJhbmdlKHllYXIsIHRoaXMuZGF5c1ZpZXcubmV4dERhdGUuZ2V0TW9udGgoKSk7XG5cbiAgICAgICAgICAgIGxldCBkYXkgPSB0aGlzLmRheXNWaWV3Lm5leHREYXRlLmdldERhdGUoKTtcbiAgICAgICAgICAgIGlmIChkYXkgPiByYW5nZVsxXSkgeyBkYXkgPSByYW5nZVsxXTsgfVxuXG4gICAgICAgICAgICB0aGlzLmRheXNWaWV3Lm5leHREYXRlLnNldERhdGUoZGF5KTtcbiAgICAgICAgICAgIHRoaXMuZGF5c1ZpZXcubmV4dERhdGUuc2V0RnVsbFllYXIoeWVhcik7XG5cbiAgICAgICAgICAgIHRoaXMuZGF5c1ZpZXcuY2FsbGJhY2sgPSAoZGF0ZXM/LCBuZXh0PykgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRheUl0ZW0gPSBkYXRlcy5maW5kKChkKSA9PiBkLmRhdGUuZGF0ZS5nZXRUaW1lKCkgPT09IG5leHQuZ2V0VGltZSgpKTtcbiAgICAgICAgICAgICAgICBpZiAoZGF5SXRlbSkgeyBkYXlJdGVtLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTsgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBASG9zdExpc3RlbmVyKCdrZXlkb3duLnNoaWZ0LnBhZ2Vkb3duJywgWyckZXZlbnQnXSlcbiAgICBwdWJsaWMgb25LZXlkb3duU2hpZnRQYWdlRG93bihldmVudDogS2V5Ym9hcmRFdmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLnZpZXdEYXRlID0gdGhpcy5jYWxlbmRhck1vZGVsLnRpbWVkZWx0YSh0aGlzLnZpZXdEYXRlLCAneWVhcicsIDEpO1xuXG4gICAgICAgIHRoaXMuZGF5c1ZpZXcuYW5pbWF0aW9uQWN0aW9uID0gJ25leHQnO1xuICAgICAgICB0aGlzLmRheXNWaWV3LmlzS2V5ZG93blRyaWdnZXIgPSB0cnVlO1xuXG4gICAgICAgIGNvbnN0IGFjdGl2ZURhdGUgPSB0aGlzLmRheXNWaWV3LmRhdGVzLmZpbmQoKGRhdGUpID0+IGRhdGUubmF0aXZlRWxlbWVudCA9PT0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudCk7XG4gICAgICAgIGlmIChhY3RpdmVEYXRlKSB7XG4gICAgICAgICAgICB0aGlzLmRheXNWaWV3Lm5leHREYXRlID0gbmV3IERhdGUoYWN0aXZlRGF0ZS5kYXRlLmRhdGUpO1xuXG4gICAgICAgICAgICBjb25zdCB5ZWFyID0gdGhpcy5kYXlzVmlldy5uZXh0RGF0ZS5nZXRGdWxsWWVhcigpICsgMTtcblxuICAgICAgICAgICAgY29uc3QgcmFuZ2UgPSBtb250aFJhbmdlKHllYXIsIHRoaXMuZGF5c1ZpZXcubmV4dERhdGUuZ2V0TW9udGgoKSk7XG5cbiAgICAgICAgICAgIGxldCBkYXkgPSB0aGlzLmRheXNWaWV3Lm5leHREYXRlLmdldERhdGUoKTtcbiAgICAgICAgICAgIGlmIChkYXkgPiByYW5nZVsxXSkgeyBkYXkgPSByYW5nZVsxXTsgfVxuXG4gICAgICAgICAgICB0aGlzLmRheXNWaWV3Lm5leHREYXRlLnNldERhdGUoZGF5KTtcbiAgICAgICAgICAgIHRoaXMuZGF5c1ZpZXcubmV4dERhdGUuc2V0RnVsbFllYXIoeWVhcik7XG5cbiAgICAgICAgICAgIHRoaXMuZGF5c1ZpZXcuY2FsbGJhY2sgPSAoZGF0ZXM/LCBuZXh0PykgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRheUl0ZW0gPSBkYXRlcy5maW5kKChkKSA9PiBkLmRhdGUuZGF0ZS5nZXRUaW1lKCkgPT09IG5leHQuZ2V0VGltZSgpKTtcbiAgICAgICAgICAgICAgICBpZiAoZGF5SXRlbSkgeyBkYXlJdGVtLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTsgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBASG9zdExpc3RlbmVyKCdrZXlkb3duLmhvbWUnLCBbJyRldmVudCddKVxuICAgIHB1YmxpYyBvbktleWRvd25Ib21lKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgICAgIGlmICh0aGlzLmRheXNWaWV3KSB7XG4gICAgICAgICAgICB0aGlzLmRheXNWaWV3Lm9uS2V5ZG93bkhvbWUoZXZlbnQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIEBIb3N0TGlzdGVuZXIoJ2tleWRvd24uZW5kJywgWyckZXZlbnQnXSlcbiAgICBwdWJsaWMgb25LZXlkb3duRW5kKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgICAgIGlmICh0aGlzLmRheXNWaWV3KSB7XG4gICAgICAgICAgICB0aGlzLmRheXNWaWV3Lm9uS2V5ZG93bkVuZChldmVudCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgQEhvc3RMaXN0ZW5lcignZG9jdW1lbnQ6bW91c2V1cCcsIFsnJGV2ZW50J10pXG4gICAgcHVibGljIG9uTW91c2VVcChldmVudDogS2V5Ym9hcmRFdmVudCkge1xuICAgICAgICBpZiAodGhpcy5kYXlzVmlldyAmJiB0aGlzLmRheXNWaWV3Lm1vbnRoU2Nyb2xsRGlyZWN0aW9uICE9PSBTY3JvbGxNb250aC5OT05FKSB7XG4gICAgICAgICAgICB0aGlzLnN0b3BNb250aFNjcm9sbChldmVudCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIZWxwZXIgbWV0aG9kIGJ1aWxkaW5nIGFuZCByZXR1cm5pbmcgdGhlIGNvbnRleHQgb2JqZWN0IGluc2lkZVxuICAgICAqIHRoZSBjYWxlbmRhciB0ZW1wbGF0ZXMuXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHByaXZhdGUgZ2VuZXJhdGVDb250ZXh0KHZhbHVlOiBEYXRlKSB7XG4gICAgICAgIGNvbnN0IGZvcm1hdE9iamVjdCA9IHtcbiAgICAgICAgICAgIG1vbnRoVmlldzogKCkgPT4gdGhpcy5hY3RpdmVWaWV3WWVhcigpLFxuICAgICAgICAgICAgeWVhclZpZXc6ICgpID0+IHRoaXMuYWN0aXZlVmlld0RlY2FkZSgpLFxuICAgICAgICAgICAgLi4udGhpcy5jYWxlbmRhck1vZGVsLmZvcm1hdFRvUGFydHModmFsdWUsIHRoaXMubG9jYWxlLCB0aGlzLmZvcm1hdE9wdGlvbnMsXG4gICAgICAgICAgICAgICAgWydlcmEnLCAneWVhcicsICdtb250aCcsICdkYXknLCAnd2Vla2RheSddKVxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4geyAkaW1wbGljaXQ6IGZvcm1hdE9iamVjdCB9O1xuICAgIH1cbn1cbiJdfQ==