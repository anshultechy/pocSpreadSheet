import { IgxCalendarBase } from './calendar-base';
import { ElementRef } from '@angular/core';
/**
 * Sets the calender view - days, months or years.
 */
export declare enum CalendarView {
    DEFAULT = 0,
    YEAR = 1,
    DECADE = 2
}
export declare class IgxMonthPickerBase extends IgxCalendarBase {
    /**
     * @hidden
     */
    yearsBtn: ElementRef;
    /**
     * The default `tabindex` attribute for the component.
     *
     * @hidden
     */
    tabindex: number;
    /**
     * Gets the current active view.
     */
    /**
    * Sets the current active view.
    */
    activeView: CalendarView;
    /**
     * @hidden
     */
    readonly isDefaultView: boolean;
    /**
     * @hidden
     */
    readonly isDecadeView: boolean;
    /**
     *@hidden
     */
    private _activeView;
    /**
     * @hidden
     */
    changeYear(event: Date): void;
    /**
     * @hidden
     */
    activeViewDecade(): void;
    /**
     * @hidden
     */
    activeViewDecadeKB(event: any): void;
    /**
     * Returns the locale representation of the year in the year view if enabled,
     * otherwise returns the default `Date.getFullYear()` value.
     *
     * @hidden
     */
    formattedYear(value: Date): string;
}
