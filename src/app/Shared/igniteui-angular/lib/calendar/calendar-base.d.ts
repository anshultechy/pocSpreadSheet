import { EventEmitter } from '@angular/core';
import { WEEKDAYS, Calendar, IFormattingOptions, IFormattingViews } from './calendar';
import { ControlValueAccessor } from '@angular/forms';
import { DateRangeDescriptor } from '../core/dates';
import { Subject } from 'rxjs';
/**
 * Sets the selction type - single, multi or range.
 */
export declare enum CalendarSelection {
    SINGLE = "single",
    MULTI = "multi",
    RANGE = "range"
}
export declare enum ScrollMonth {
    PREV = "prev",
    NEXT = "next",
    NONE = "none"
}
export declare class IgxCalendarBase implements ControlValueAccessor {
    /**
     * Gets the start day of the week.
     * Can return a numeric or an enum representation of the week day.
     * Defaults to `Sunday` / `0`.
     */
    /**
    * Sets the start day of the week.
    * Can be assigned to a numeric value or to `WEEKDAYS` enum value.
    */
    weekStart: WEEKDAYS | number;
    /**
     * Gets the `locale` of the calendar.
     * Default value is `"en"`.
     */
    /**
    * Sets the `locale` of the calendar.
    * Expects a valid BCP 47 language tag.
    * Default value is `"en"`.
    */
    locale: string;
    /**
     * Gets the date format options of the days view.
     */
    /**
    * Sets the date format options of the days view.
    * Default is { day: 'numeric', month: 'short', weekday: 'short', year: 'numeric' }
    */
    formatOptions: IFormattingOptions;
    /**
     * Gets whether the `day`, `month` and `year` should be rendered
     * according to the locale and formatOptions, if any.
     */
    /**
    * Gets whether the `day`, `month` and `year` should be rendered
    * according to the locale and formatOptions, if any.
    */
    formatViews: IFormattingViews;
    /**
     *
     * Gets the selection type.
     * Default value is `"single"`.
     * Changing the type of selection resets the currently
     * selected values if any.
     */
    /**
    * Sets the selection.
    */
    selection: string;
    /**
     * Gets the selected date(s).
     *
     * When selection is set to `single`, it returns
     * a single `Date` object.
     * Otherwise it is an array of `Date` objects.
     */
    /**
    * Sets the selected date(s).
    *
    * When selection is set to `single`, it accepts
    * a single `Date` object.
    * Otherwise it is an array of `Date` objects.
    */
    value: Date | Date[];
    /**
     * Gets the date that is presented.
     * By default it is the current date.
     */
    /**
    * Sets the date that will be presented in the default view when the component renders.
    */
    viewDate: Date;
    /**
     * Gets the disabled dates descriptors.
     */
    /**
    * Sets the disabled dates' descriptors.
    * ```typescript
    *@ViewChild("MyCalendar")
    *public calendar: IgxCalendarComponent;
    *ngOnInit(){
    *    this.calendar.disabledDates = [
    *     {type: DateRangeType.Between, dateRange: [new Date("2020-1-1"), new Date("2020-1-15")]},
    *     {type: DateRangeType.Weekends}];
    *}
    *```
    */
    disabledDates: DateRangeDescriptor[];
    /**
     * Gets the special dates descriptors.
     */
    /**
    * Sets the special dates' descriptors.
    * ```typescript
    *@ViewChild("MyCalendar")
    *public calendar: IgxCalendarComponent;
    *ngOnInit(){
    *    this.calendar.specialDates = [
    *     {type: DateRangeType.Between, dateRange: [new Date("2020-1-1"), new Date("2020-1-15")]},
    *     {type: DateRangeType.Weekends}];
    *}
    *```
    */
    specialDates: DateRangeDescriptor[];
    /**
     * Emits an event when a date is selected.
     * Provides reference the `selectedDates` property.
     */
    onSelection: EventEmitter<Date | Date[]>;
    /**
     *@hidden
     */
    private _selection;
    /**
     *@hidden
     */
    private rangeStarted;
    /**
    *@hidden
    */
    private _locale;
    /**
     *@hidden
     */
    private _viewDate;
    /**
     *@hidden
     */
    private _disabledDates;
    /**
     *@hidden
     */
    private _specialDates;
    /**
     *@hidden
     */
    private _formatOptions;
    /**
     *@hidden
     */
    private _formatViews;
    /**
     *@hidden
     */
    protected formatterWeekday: any;
    /**
     *@hidden
     */
    protected formatterDay: any;
    /**
     *@hidden
     */
    protected formatterMonth: any;
    /**
     *@hidden
     */
    protected formatterYear: any;
    /**
     *@hidden
     */
    protected formatterMonthday: any;
    /**
     *@hidden
     */
    calendarModel: Calendar;
    /**
     * @hidden
     */
    monthScrollDirection: ScrollMonth;
    /**
     *@hidden
     */
    scrollMonth$: Subject<{}>;
    /**
     *@hidden
     */
    stopMonthScroll$: Subject<boolean>;
    /**
     *@hidden
     */
    startMonthScroll$: Subject<{}>;
    /**
     *@hidden
     */
    selectedDates: any;
    /**
     *@hidden
     */
    protected _onTouchedCallback: () => void;
    /**
     *@hidden
     */
    protected _onChangeCallback: (_: Date) => void;
    /**
     * @hidden
     */
    constructor();
    /**
     *@hidden
     */
    private getDateOnlyInMs;
    /**
     *@hidden
     */
    private generateDateRange;
    /**
     * Performs a single selection.
     * @hidden
     */
    private selectSingle;
    /**
     * Performs a multiple selection
     * @hidden
     */
    private selectMultiple;
    /**
     *@hidden
     */
    private selectRange;
    /**
     * Performs a single deselection.
     * @hidden
     */
    private deselectSingle;
    /**
     * Performs a multiple deselection.
     * @hidden
     */
    private deselectMultiple;
    /**
     * Performs a range deselection.
     * @hidden
     */
    private deselectRange;
    /**
     * @hidden
     */
    protected initFormatters(): void;
    /**
     *@hidden
     */
    protected getDateOnly(date: Date): Date;
    /**
     * @hidden
     */
    registerOnChange(fn: (v: Date) => void): void;
    /**
     * @hidden
     */
    registerOnTouched(fn: () => void): void;
    /**
     * @hidden
     */
    writeValue(value: Date | Date[]): void;
    /**
     * Checks whether a date is disabled.
     * @hidden
     */
    isDateDisabled(date: Date): boolean;
    /**
     * Selects date(s) (based on the selection type).
     */
    selectDate(value: Date | Date[]): Date;
    /**
     * Deselects date(s) (based on the selection type).
     */
    deselectDate(value?: Date | Date[]): void;
    /**
     * @hidden
     */
    selectDateFromClient(value: Date): void;
}
