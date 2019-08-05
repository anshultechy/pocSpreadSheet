/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { CommonModule, formatDate } from '@angular/common';
import { Component, ContentChild, EventEmitter, HostBinding, Input, NgModule, Output, ViewChild, ElementRef, TemplateRef, Inject, ChangeDetectorRef, HostListener, NgModuleRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { IgxCalendarHeaderTemplateDirective, IgxCalendarModule, IgxCalendarSubheaderTemplateDirective, WEEKDAYS, isDateInRanges } from '../calendar/index';
import { IgxIconModule } from '../icon/index';
import { IgxInputGroupModule, IgxInputDirective, IgxInputGroupComponent } from '../input-group/index';
import { Subject, fromEvent, animationFrameScheduler, interval } from 'rxjs';
import { filter, takeUntil, throttle } from 'rxjs/operators';
import { IgxOverlayService, AbsoluteScrollStrategy, AutoPositionStrategy } from '../services/index';
import { IgxButtonModule } from '../directives/button/button.directive';
import { IgxRippleModule } from '../directives/ripple/ripple.directive';
import { IgxMaskModule } from '../directives/mask/mask.directive';
import { DatePickerUtil } from './date-picker.utils';
import { DatePickerDisplayValuePipe, DatePickerInputValuePipe } from './date-picker.pipes';
import { isIE } from '../core/utils';
import { IgxDatePickerTemplateDirective, IgxDatePickerActionsDirective } from './date-picker.directives';
import { IgxCalendarContainerComponent } from './calendar-container.component';
import { InteractionMode } from '../core/enums';
import { fadeIn, fadeOut } from '../animations/fade';
import { DeprecateProperty } from '../core/deprecateDecorators';
/** @type {?} */
var NEXT_ID = 0;
/**
 * This interface is used to provide information about date picker reference and its current value
 * when onDisabledDate event is fired.
 * @record
 */
export function IDatePickerDisabledDateEventArgs() { }
if (false) {
    /** @type {?} */
    IDatePickerDisabledDateEventArgs.prototype.datePicker;
    /** @type {?} */
    IDatePickerDisabledDateEventArgs.prototype.currentValue;
}
/**
 * This interface is used to provide information about date picker reference and its previously valid value
 * when onValidationFailed event is fired.
 * @record
 */
export function IDatePickerValidationFailedEventArgs() { }
if (false) {
    /** @type {?} */
    IDatePickerValidationFailedEventArgs.prototype.datePicker;
    /** @type {?} */
    IDatePickerValidationFailedEventArgs.prototype.prevValue;
}
/**
 * This interface is used to configure calendar format view options.
 * @record
 */
export function IFormatViews() { }
if (false) {
    /** @type {?|undefined} */
    IFormatViews.prototype.day;
    /** @type {?|undefined} */
    IFormatViews.prototype.month;
    /** @type {?|undefined} */
    IFormatViews.prototype.year;
}
/**
 * This interface is used to configure calendar format options.
 * @record
 */
export function IFormatOptions() { }
if (false) {
    /** @type {?|undefined} */
    IFormatOptions.prototype.day;
    /** @type {?|undefined} */
    IFormatOptions.prototype.month;
    /** @type {?|undefined} */
    IFormatOptions.prototype.weekday;
    /** @type {?|undefined} */
    IFormatOptions.prototype.year;
}
/** @enum {string} */
var PredefinedFormatOptions = {
    ShortDate: 'shortDate',
    MediumDate: 'mediumDate',
    LongDate: 'longDate',
    FullDate: 'fullDate',
};
export { PredefinedFormatOptions };
/**
 * **Ignite UI for Angular Date Picker** -
 * [Documentation](https://www.infragistics.com/products/ignite-ui-angular/angular/components/date_picker.html)
 *
 * The Ignite UI Date Picker displays a popup calendar that lets users select a single date.
 *
 * Example:
 * ```html
 * <igx-date-picker [(ngModel)]="selectedDate"></igx-date-picker>
 * ```
 */
var IgxDatePickerComponent = /** @class */ (function () {
    function IgxDatePickerComponent(_overlayService, element, _cdr, _moduleRef) {
        this._overlayService = _overlayService;
        this.element = element;
        this._cdr = _cdr;
        this._moduleRef = _moduleRef;
        /**
         * An \@Input property that sets the `IgxDatePickerComponent` label.
         * The default label is 'Date'.
         * ```html
         * <igx-date-picker [label]="Calendar"></igx-date-picker>
         * ```
         */
        this.label = 'Date';
        /**
         * An \@Input property that sets the `IgxDatePickerComponent` label visibility.
         * By default the visibility is set to true.
         * <igx-date-picker [labelVisibility]="false"></igx-date-picker>
         */
        this.labelVisibility = true;
        /**
         * An \@Input property that sets on which day the week starts.
         * ```html
         * <igx-date-picker [weekStart]="WEEKDAYS.FRIDAY" cancelButtonLabel="cancel" todayButtonLabel="today"></igx-date-picker>
         * ```
         */
        this.weekStart = WEEKDAYS.SUNDAY;
        /**
         * An \@Input property that sets the value of `id` attribute. If not provided it will be automatically generated.
         * ```html
         * <igx-date-picker [id]="'igx-date-picker-3'" cancelButtonLabel="cancel" todayButtonLabel="today"></igx-date-picker>
         * ```
         */
        this.id = "igx-date-picker-" + NEXT_ID++;
        /**
         * An \@Input property that sets the orientation of the `IgxDatePickerComponent` header.
         * ```html
         * <igx-date-picker [vertical]="'true'" cancelButtonLabel="cancel" todayButtonLabel="today"></igx-date-picker>
         * ```
         */
        this.vertical = false;
        /**
         * An \@Input property that sets whether `IgxDatePickerComponent` is in dialog or drop down mode.
         * ```html
         * <igx-date-picker mode="dropdown"></igx-date-picker>
         * ```
         */
        this.mode = InteractionMode.Dialog;
        /**
         * An \@Input property that sets whether the `IgxDatePickerComponent` date parts would spin continuously or stop when min/max is reached.
         * ```html
         * <igx-date-picker [isSpinLoop]="false"></igx-date-picker>
         * ```
         */
        this.isSpinLoop = true;
        /**
         * An event that is emitted when the `IgxDatePickerComponent` calendar is opened.
         */
        this.onOpened = new EventEmitter();
        /**
         * An event that is emitted after the `IgxDatePickerComponent` is closed.
         */
        this.onClosed = new EventEmitter();
        /**
         * An event that is emitted when the `IgxDatePickerComponent` is being closed.
         */
        this.onClosing = new EventEmitter();
        /**
         * An \@Output property that is fired when selection is made in the calendar.
         * ```typescript
         * public selection(event){
         *    alert("A date has been selected!");
         * }
         * ```
         * ```html
         * <igx-date-picker (onSelection)="selection($event)" cancelButtonLabel="cancel" todayButtonLabel="today"></igx-date-picker>
         * ```
         */
        this.onSelection = new EventEmitter();
        /**
         * An \@Output property that fires when the user types/spins to a disabled date in the date-picker editor.
         * ```typescript
         * public onDisabledDate(event){
         *    alert("This date is disabled!");
         * }
         * ```
         * ```html
         * <igx-date-picker (onDisabledDate)="onDisabledDate($event)"></igx-date-picker>
         * ```
         */
        this.onDisabledDate = new EventEmitter();
        /**
         * An \@Output property that fires when the user types/spins invalid date in the date-picker editor.
         * ```typescript
         * public onValidationFailed(event){
         *    alert("This date is not valid!");
         * }
         * ```
         * ```html
         * <igx-date-picker (onValidationFailed)="onValidationFailed($event)"></igx-date-picker>
         * ```
         */
        this.onValidationFailed = new EventEmitter();
        this.hasHeader = true;
        this.collapsed = true;
        this.displayValuePipe = new DatePickerDisplayValuePipe(this);
        this.inputValuePipe = new DatePickerInputValuePipe(this);
        this.dateFormatParts = [];
        this.isEmpty = true;
        this.invalidDate = '';
        this.spinDelta = 1;
        this.defaultLocale = 'en';
        this._formatOptions = {
            day: 'numeric',
            month: 'short',
            weekday: 'short',
            year: 'numeric'
        };
        this._formatViews = {
            day: false,
            month: true,
            year: false
        };
        this._destroy$ = new Subject();
        this._disabledDates = null;
        this._specialDates = null;
        this._onOpen = new EventEmitter();
        this._onClose = new EventEmitter();
        this._onTouchedCallback = function () { };
        this._onChangeCallback = function () { };
    }
    Object.defineProperty(IgxDatePickerComponent.prototype, "formatOptions", {
        /**
         *Returns the format options of the `IgxDatePickerComponent`.
         *```typescript
         *@ViewChild("MyDatePicker")
         *public datePicker: IgxDatePickerComponent;
         *ngAfterViewInit(){
         *    let formatOptions = this.datePicker.formatOptions;
         *}
         *```
         */
        get: /**
         * Returns the format options of the `IgxDatePickerComponent`.
         * ```typescript
         * \@ViewChild("MyDatePicker")
         * public datePicker: IgxDatePickerComponent;
         * ngAfterViewInit(){
         *    let formatOptions = this.datePicker.formatOptions;
         * }
         * ```
         * @return {?}
         */
        function () {
            return this._formatOptions;
        },
        /**
         *Sets the format options of the `IgxDatePickerComponent`.
         *```typescript
         *public Options;
         *@ViewChild("MyDatePicker")
         *public datePicker: IgxDatePickerComponent;
         *ngAfterViewInit(){
         *    this.Options = {
         *        day: "numeric",
         *        month: "long",
         *        weekday: "long",
         *        year: "numeric"
         *    }
         *this.datePicker.formatOptions = this.Options;
         *}
         *```
         */
        set: /**
         * Sets the format options of the `IgxDatePickerComponent`.
         * ```typescript
         * public Options;
         * \@ViewChild("MyDatePicker")
         * public datePicker: IgxDatePickerComponent;
         * ngAfterViewInit(){
         *    this.Options = {
         *        day: "numeric",
         *        month: "long",
         *        weekday: "long",
         *        year: "numeric"
         *    }
         * this.datePicker.formatOptions = this.Options;
         * }
         * ```
         * @param {?} formatOptions
         * @return {?}
         */
        function (formatOptions) {
            this._formatOptions = Object.assign(this._formatOptions, formatOptions);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxDatePickerComponent.prototype, "format", {
        /**
         *Returns the date display format of the `IgxDatePickerComponent` in dropdown mode.
         *```typescript
         *@ViewChild("MyDatePicker")
         *public datePicker: IgxDatePickerComponent;
         *ngAfterViewInit(){
         *    let format = this.datePicker.format;
         *}
         *```
         */
        get: /**
         * Returns the date display format of the `IgxDatePickerComponent` in dropdown mode.
         * ```typescript
         * \@ViewChild("MyDatePicker")
         * public datePicker: IgxDatePickerComponent;
         * ngAfterViewInit(){
         *    let format = this.datePicker.format;
         * }
         * ```
         * @return {?}
         */
        function () {
            return (this._format === undefined) ? PredefinedFormatOptions.ShortDate : this._format;
        },
        /**
        *Sets the date format of the `IgxDatePickerComponent` when in editable dropdown mode.
        *```typescript
        *@ViewChild("MyDatePicker")
        *public datePicker: IgxDatePickerComponent;
        *this.datePicker.format = 'yyyy-M-d';
        *}
        *```
        */
        set: /**
         * Sets the date format of the `IgxDatePickerComponent` when in editable dropdown mode.
         * ```typescript
         * \@ViewChild("MyDatePicker")
         * public datePicker: IgxDatePickerComponent;
         * this.datePicker.format = 'yyyy-M-d';
         * }
         * ```
         * @param {?} format
         * @return {?}
         */
        function (format) {
            this._format = format;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxDatePickerComponent.prototype, "formatViews", {
        /**
         *Returns the format views of the `IgxDatePickerComponent`.
         *```typescript
         *@ViewChild("MyDatePicker")
         *public datePicker: IgxDatePickerComponent;
         *ngAfterViewInit(){
         *    let formatViews = this.datePicker.formatViews;
         *}
         *```
         */
        get: /**
         * Returns the format views of the `IgxDatePickerComponent`.
         * ```typescript
         * \@ViewChild("MyDatePicker")
         * public datePicker: IgxDatePickerComponent;
         * ngAfterViewInit(){
         *    let formatViews = this.datePicker.formatViews;
         * }
         * ```
         * @return {?}
         */
        function () {
            return this._formatViews;
        },
        /**
         *Sets the format views of the `IgxDatePickerComponent`.
         *```typescript
         *public Views;
         *@ViewChild("MyDatePicker")
         *public datePicker: IgxDatePickerComponent;
         *ngAfterViewInit(){
         *    this.Views = {day:false, month: false, year:false};
         *    this.datePicker.formatViews = this.Views;
         *}
         *```
         */
        set: /**
         * Sets the format views of the `IgxDatePickerComponent`.
         * ```typescript
         * public Views;
         * \@ViewChild("MyDatePicker")
         * public datePicker: IgxDatePickerComponent;
         * ngAfterViewInit(){
         *    this.Views = {day:false, month: false, year:false};
         *    this.datePicker.formatViews = this.Views;
         * }
         * ```
         * @param {?} formatViews
         * @return {?}
         */
        function (formatViews) {
            this._formatViews = Object.assign(this._formatViews, formatViews);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxDatePickerComponent.prototype, "disabledDates", {
        /**
         * Gets the disabled dates descriptors.
         * ```typescript
         * let disabledDates = this.datepicker.disabledDates;
         * ```
         */
        get: /**
         * Gets the disabled dates descriptors.
         * ```typescript
         * let disabledDates = this.datepicker.disabledDates;
         * ```
         * @return {?}
         */
        function () {
            return this._disabledDates;
        },
        /**
         * Sets the disabled dates' descriptors.
         * ```typescript
         *@ViewChild("MyDatePicker")
         *public datePicker: IgxDatePickerComponent;
         *ngAfterViewInit(){
         *    this.datePicker.disabledDates = [
         *     {type: DateRangeType.Between, dateRange: [new Date("2020-1-1"), new Date("2020-1-15")]},
         *     {type: DateRangeType.Weekends}];
         *}
         *```
         */
        set: /**
         * Sets the disabled dates' descriptors.
         * ```typescript
         * \@ViewChild("MyDatePicker")
         * public datePicker: IgxDatePickerComponent;
         * ngAfterViewInit(){
         *    this.datePicker.disabledDates = [
         *     {type: DateRangeType.Between, dateRange: [new Date("2020-1-1"), new Date("2020-1-15")]},
         *     {type: DateRangeType.Weekends}];
         * }
         * ```
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._disabledDates = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxDatePickerComponent.prototype, "specialDates", {
        /**
         * Gets the special dates descriptors.
         * ```typescript
         * let specialDates = this.datepicker.specialDates;
         * ```
         */
        get: /**
         * Gets the special dates descriptors.
         * ```typescript
         * let specialDates = this.datepicker.specialDates;
         * ```
         * @return {?}
         */
        function () {
            return this._specialDates;
        },
        /**
         * Sets the special dates' descriptors.
         * ```typescript
         *@ViewChild("MyDatePicker")
         *public datePicker: IgxDatePickerComponent;
         *ngAfterViewInit(){
         *    this.datePicker.specialDates = [
         *     {type: DateRangeType.Between, dateRange: [new Date("2020-1-1"), new Date("2020-1-15")]},
         *     {type: DateRangeType.Weekends}];
         *}
         *```
         */
        set: /**
         * Sets the special dates' descriptors.
         * ```typescript
         * \@ViewChild("MyDatePicker")
         * public datePicker: IgxDatePickerComponent;
         * ngAfterViewInit(){
         *    this.datePicker.specialDates = [
         *     {type: DateRangeType.Between, dateRange: [new Date("2020-1-1"), new Date("2020-1-15")]},
         *     {type: DateRangeType.Weekends}];
         * }
         * ```
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._specialDates = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxDatePickerComponent.prototype, "modalOverlaySettings", {
        get: /**
         * @return {?}
         */
        function () {
            return this._modalOverlay;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._modalOverlay = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxDatePickerComponent.prototype, "dropDownOverlaySettings", {
        get: /**
         * @return {?}
         */
        function () {
            return this._dropDownOverlaySettings || this._defaultDropDownOverlaySettings;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._dropDownOverlaySettings = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxDatePickerComponent.prototype, "displayData", {
        /**
         *Returns the formatted date when `IgxDatePickerComponent` is in dialog mode.
         *```typescript
         *@ViewChild("MyDatePicker")
         *public datePicker: IgxDatePickerComponent;
         *public selection(event){
         *    let selectedDate = this.datePicker.displayData;
         *    alert(selectedDate);
         *}
         *```
         *```html
         *<igx-date-picker #MyDatePicker (onSelection)="selection()" todayButtonLabel="today"></igx-date-picker>
         *```
         */
        get: /**
         * Returns the formatted date when `IgxDatePickerComponent` is in dialog mode.
         * ```typescript
         * \@ViewChild("MyDatePicker")
         * public datePicker: IgxDatePickerComponent;
         * public selection(event){
         *    let selectedDate = this.datePicker.displayData;
         *    alert(selectedDate);
         * }
         * ```
         * ```html
         * <igx-date-picker #MyDatePicker (onSelection)="selection()" todayButtonLabel="today"></igx-date-picker>
         * ```
         * @return {?}
         */
        function () {
            if (this.value) {
                return this._customFormatChecker(this.formatter, this.value);
            }
            return '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxDatePickerComponent.prototype, "transformedDate", {
        /**
         hidden
         */
        get: /**
         * hidden
         * @return {?}
         */
        function () {
            if (this._value) {
                this._transformedDate = (this._isInEditMode) ? this._getEditorDate(this._value) : this._getDisplayDate(this._value);
                this.isEmpty = false;
            }
            else {
                this._transformedDate = (this._isInEditMode) ? DatePickerUtil.maskToPromptChars(this.inputMask) : '';
            }
            return this._transformedDate;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._transformedDate = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxDatePickerComponent.prototype, "template", {
        /**
         * Gets the input group template.
         * ```typescript
         * let template = this.template();
         * ```
         * @memberof IgxDatePickerComponent
         */
        get: /**
         * Gets the input group template.
         * ```typescript
         * let template = this.template();
         * ```
         * \@memberof IgxDatePickerComponent
         * @return {?}
         */
        function () {
            if (this.datePickerTemplateDirective) {
                return this.datePickerTemplateDirective.template;
            }
            return (this.mode === InteractionMode.Dialog) ? this.readOnlyDatePickerTemplate : this.editableDatePickerTemplate;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxDatePickerComponent.prototype, "context", {
        /**
         * Gets the context passed to the input group template.
         * @memberof IgxDatePickerComponent
         */
        get: /**
         * Gets the context passed to the input group template.
         * \@memberof IgxDatePickerComponent
         * @return {?}
         */
        function () {
            var _this = this;
            return {
                disabled: this.disabled,
                disabledDates: this.disabledDates,
                displayData: this.displayData,
                format: this.format,
                isSpinLoop: this.isSpinLoop,
                label: this.label,
                labelVisibility: this.labelVisibility,
                locale: this.locale,
                mask: this.mask,
                mode: this.mode,
                specialDates: this.specialDates,
                value: this.value,
                openDialog: function (target) { return _this.openDialog(target); }
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxDatePickerComponent.prototype, "value", {
        /**
         *An @Input property that gets/sets the selected date.
         *```typescript
         *public date: Date = new Date();
         *```
         *```html
         *<igx-date-picker [value]="date"></igx-date-picker>
         *```
         */
        get: /**
         * An \@Input property that gets/sets the selected date.
         * ```typescript
         * public date: Date = new Date();
         * ```
         * ```html
         * <igx-date-picker [value]="date"></igx-date-picker>
         * ```
         * @return {?}
         */
        function () {
            return this._value;
        },
        set: /**
         * @param {?} date
         * @return {?}
         */
        function (date) {
            this._value = date;
            this._onChangeCallback(date);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxDatePickerComponent.prototype, "onOpen", {
        /**
         * @deprecated Use 'onOpened' instead.
         *An event that is emitted when the `IgxDatePickerComponent` calendar is opened.
         *```typescript
         *public open(event){
         *    alert("The date-picker calendar has been opened!");
         *}
         *```
         *```html
         *<igx-date-picker (onOpen)="open($event)" cancelButtonLabel="cancel" todayButtonLabel="today"></igx-date-picker>
         *```
         */
        get: /**
         * @deprecated Use 'onOpened' instead.
         * An event that is emitted when the `IgxDatePickerComponent` calendar is opened.
         * ```typescript
         * public open(event){
         *    alert("The date-picker calendar has been opened!");
         * }
         * ```
         * ```html
         * <igx-date-picker (onOpen)="open($event)" cancelButtonLabel="cancel" todayButtonLabel="today"></igx-date-picker>
         * ```
         * @return {?}
         */
        function () {
            return this._onOpen;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._onOpen = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxDatePickerComponent.prototype, "onClose", {
        /**
         * @deprecated Use 'onClosed' instead.
         *"An event that is emitted when the `IgxDatePickerComponent` is closed.
         *```typescript
         *public close(event){
         *    alert("The date-picker has been closed!");
         *}
         *```
         *```html
         *<igx-date-picker (onClose)="close($event)" cancelButtonLabel="cancel" todayButtonLabel="today"></igx-date-picker>
         *```
         */
        get: /**
         * @deprecated Use 'onClosed' instead.
         * "An event that is emitted when the `IgxDatePickerComponent` is closed.
         * ```typescript
         * public close(event){
         *    alert("The date-picker has been closed!");
         * }
         * ```
         * ```html
         * <igx-date-picker (onClose)="close($event)" cancelButtonLabel="cancel" todayButtonLabel="today"></igx-date-picker>
         * ```
         * @return {?}
         */
        function () {
            return this._onClose;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._onClose = val;
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
    IgxDatePickerComponent.prototype.onSpaceClick = /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.openDialog(this.getInputGroupElement());
        event.preventDefault();
    };
    /**
     *Method that sets the selected date.
     *```typescript
     *public date = new Date();
     *@ViewChild("MyDatePicker")
     *public datePicker: IgxDatePickerComponent;
     *ngAfterViewInit(){
     *    this.datePicker.writeValue(this.date);
     *}
     *```
     *@param value The date you want to select.
     *@memberOf {@link IgxDatePickerComponent}
     */
    /**
     * Method that sets the selected date.
     * ```typescript
     * public date = new Date();
     * \@ViewChild("MyDatePicker")
     * public datePicker: IgxDatePickerComponent;
     * ngAfterViewInit(){
     *    this.datePicker.writeValue(this.date);
     * }
     * ```
     * \@memberOf {\@link IgxDatePickerComponent}
     * @param {?} value The date you want to select.
     * @return {?}
     */
    IgxDatePickerComponent.prototype.writeValue = /**
     * Method that sets the selected date.
     * ```typescript
     * public date = new Date();
     * \@ViewChild("MyDatePicker")
     * public datePicker: IgxDatePickerComponent;
     * ngAfterViewInit(){
     *    this.datePicker.writeValue(this.date);
     * }
     * ```
     * \@memberOf {\@link IgxDatePickerComponent}
     * @param {?} value The date you want to select.
     * @return {?}
     */
    function (value) {
        this.value = value;
        this._cdr.markForCheck();
    };
    /**
     *@hidden
     */
    /**
     * @hidden
     * @param {?} fn
     * @return {?}
     */
    IgxDatePickerComponent.prototype.registerOnChange = /**
     * @hidden
     * @param {?} fn
     * @return {?}
     */
    function (fn) { this._onChangeCallback = fn; };
    /**
     *@hidden
     */
    /**
     * @hidden
     * @param {?} fn
     * @return {?}
     */
    IgxDatePickerComponent.prototype.registerOnTouched = /**
     * @hidden
     * @param {?} fn
     * @return {?}
     */
    function (fn) { this._onTouchedCallback = fn; };
    /** @hidden */
    /**
     * @hidden
     * @return {?}
     */
    IgxDatePickerComponent.prototype.getEditElement = /**
     * @hidden
     * @return {?}
     */
    function () {
        /** @type {?} */
        var inputElement = this.editableInput || this.readonlyInput || this.input;
        return (inputElement) ? inputElement.nativeElement : null;
    };
    /** @hidden */
    /**
     * @hidden
     * @return {?}
     */
    IgxDatePickerComponent.prototype.getInputGroupElement = /**
     * @hidden
     * @return {?}
     */
    function () {
        return this.inputGroup ? this.inputGroup.element.nativeElement : null;
    };
    /**
     *@hidden
     */
    /**
     * @hidden
     * @return {?}
     */
    IgxDatePickerComponent.prototype.ngOnInit = /**
     * @hidden
     * @return {?}
     */
    function () {
        var _this = this;
        this._positionSettings = {
            openAnimation: fadeIn,
            closeAnimation: fadeOut
        };
        this._defaultDropDownOverlaySettings = {
            closeOnOutsideClick: true,
            modal: false,
            scrollStrategy: new AbsoluteScrollStrategy(),
            positionStrategy: new AutoPositionStrategy(this._positionSettings),
            outlet: this.outlet
        };
        this._modalOverlaySettings = {
            closeOnOutsideClick: true,
            modal: true,
            outlet: this.outlet
        };
        this._overlayService.onOpening.pipe(filter(function (overlay) { return overlay.id === _this._componentID; }), takeUntil(this._destroy$)).subscribe(function (eventArgs) {
            _this._onOpening(eventArgs);
        });
        this._overlayService.onOpened.pipe(filter(function (overlay) { return overlay.id === _this._componentID; }), takeUntil(this._destroy$)).subscribe(function () {
            _this._onOpened();
        });
        this._overlayService.onClosed.pipe(filter(function (overlay) { return overlay.id === _this._componentID; }), takeUntil(this._destroy$)).subscribe(function () {
            _this._onClosed();
        });
        this._overlayService.onClosing.pipe(filter(function (overlay) { return overlay.id === _this._componentID; }), takeUntil(this._destroy$)).subscribe(function (event) {
            _this.onClosing.emit(event);
        });
        if (this.mode === InteractionMode.DropDown) {
            this.dateFormatParts = DatePickerUtil.parseDateFormat(this.mask, this.locale);
            if (this.mask === undefined) {
                this.mask = DatePickerUtil.getMask(this.dateFormatParts);
            }
            this.inputMask = DatePickerUtil.getInputMask(this.dateFormatParts);
        }
    };
    /**
     * @return {?}
     */
    IgxDatePickerComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.mode === InteractionMode.DropDown && this.editableInput) {
            fromEvent(this.editableInput.nativeElement, 'keydown').pipe(throttle(function () { return interval(0, animationFrameScheduler); }), takeUntil(this._destroy$)).subscribe(function (res) { return _this.onKeyDown(res); });
        }
    };
    /**
     *@hidden
     */
    /**
     * @hidden
     * @return {?}
     */
    IgxDatePickerComponent.prototype.ngOnDestroy = /**
     * @hidden
     * @return {?}
     */
    function () {
        if (this._componentID) {
            this._overlayService.hide(this._componentID);
        }
        this._destroy$.next(true);
        this._destroy$.complete();
    };
    /**
     *Selects today's date from calendar and change the input field value, @calendar.viewDate and @calendar.value.
     *```typescript
     *@ViewChild("MyDatePicker")
     *public datePicker: IgxDatePickerComponent;
     *ngAfterViewInit(){
     *this.datePicker.triggerTodaySelection();
     *}
     *```
     *@memberOf {@link IgxDatePickerComponent}
     */
    /**
     * Selects today's date from calendar and change the input field value, \@calendar.viewDate and \@calendar.value.
     * ```typescript
     * \@ViewChild("MyDatePicker")
     * public datePicker: IgxDatePickerComponent;
     * ngAfterViewInit(){
     * this.datePicker.triggerTodaySelection();
     * }
     * ```
     * \@memberOf {\@link IgxDatePickerComponent}
     * @return {?}
     */
    IgxDatePickerComponent.prototype.triggerTodaySelection = /**
     * Selects today's date from calendar and change the input field value, \@calendar.viewDate and \@calendar.value.
     * ```typescript
     * \@ViewChild("MyDatePicker")
     * public datePicker: IgxDatePickerComponent;
     * ngAfterViewInit(){
     * this.datePicker.triggerTodaySelection();
     * }
     * ```
     * \@memberOf {\@link IgxDatePickerComponent}
     * @return {?}
     */
    function () {
        /** @type {?} */
        var today = new Date(Date.now());
        this.handleSelection(today);
    };
    /**
     * Change the calendar selection and calling this method will emit the @calendar.onSelection event,
     * which will fire @handleSelection method.
     *```typescript
     *@ViewChild("MyDatePicker")
     *public datePicker: IgxDatePickerComponent;
     *ngAfterViewInit(){
     *this.datePicker.selectDate(this.date);
     *}
     * ```
     * @param date passed date that has to be set to the calendar.
     * @memberOf {@link IgxDatePickerComponent}
     */
    /**
     * Change the calendar selection and calling this method will emit the \@calendar.onSelection event,
     * which will fire \@handleSelection method.
     * ```typescript
     * \@ViewChild("MyDatePicker")
     * public datePicker: IgxDatePickerComponent;
     * ngAfterViewInit(){
     * this.datePicker.selectDate(this.date);
     * }
     * ```
     * \@memberOf {\@link IgxDatePickerComponent}
     * @param {?} date passed date that has to be set to the calendar.
     * @return {?}
     */
    IgxDatePickerComponent.prototype.selectDate = /**
     * Change the calendar selection and calling this method will emit the \@calendar.onSelection event,
     * which will fire \@handleSelection method.
     * ```typescript
     * \@ViewChild("MyDatePicker")
     * public datePicker: IgxDatePickerComponent;
     * ngAfterViewInit(){
     * this.datePicker.selectDate(this.date);
     * }
     * ```
     * \@memberOf {\@link IgxDatePickerComponent}
     * @param {?} date passed date that has to be set to the calendar.
     * @return {?}
     */
    function (date) {
        this.value = date;
        this.onSelection.emit(date);
        this._onChangeCallback(date);
    };
    /**
     * Deselects the calendar date.
     *```typescript
     *@ViewChild("MyDatePicker")
     *public datePicker: IgxDatePickerComponent;
     *ngAfterViewInit(){
     *this.datePicker.deselectDate();
     *}
     * ```
     * @memberOf {@link IgxDatePickerComponent}
     */
    /**
     * Deselects the calendar date.
     * ```typescript
     * \@ViewChild("MyDatePicker")
     * public datePicker: IgxDatePickerComponent;
     * ngAfterViewInit(){
     * this.datePicker.deselectDate();
     * }
     * ```
     * \@memberOf {\@link IgxDatePickerComponent}
     * @return {?}
     */
    IgxDatePickerComponent.prototype.deselectDate = /**
     * Deselects the calendar date.
     * ```typescript
     * \@ViewChild("MyDatePicker")
     * public datePicker: IgxDatePickerComponent;
     * ngAfterViewInit(){
     * this.datePicker.deselectDate();
     * }
     * ```
     * \@memberOf {\@link IgxDatePickerComponent}
     * @return {?}
     */
    function () {
        this.value = null;
        if (this.calendar) {
            this.calendar.deselectDate();
        }
        this._onChangeCallback(null);
    };
    /**
     * Opens the date picker drop down or dialog.
     * @param target HTMLElement - the target element to use for positioning the drop down container according to
     * ```html
     * <igx-date-picker [value]="date" mode="dropdown" #retemplated>
     *   <ng-template igxDatePickerTemplate let-openDialog="openDialog"
     *                let-displayData="displayData">
     *     <igx-input-group>
     *       <input #dropDownTarget igxInput [value]="displayData" />
     *       <igx-suffix (click)="openDialog(dropDownTarget)">
     *         <igx-icon>alarm</igx-icon>
     *       </igx-suffix>
     *     </igx-input-group>
     *   </ng-template>
     * </igx-date-picker>
     * ```
     */
    /**
     * Opens the date picker drop down or dialog.
     * @param {?=} target HTMLElement - the target element to use for positioning the drop down container according to
     * ```html
     * <igx-date-picker [value]="date" mode="dropdown" #retemplated>
     *   <ng-template igxDatePickerTemplate let-openDialog="openDialog"
     *                let-displayData="displayData">
     *     <igx-input-group>
     *       <input #dropDownTarget igxInput [value]="displayData" />
     *       <igx-suffix (click)="openDialog(dropDownTarget)">
     *         <igx-icon>alarm</igx-icon>
     *       </igx-suffix>
     *     </igx-input-group>
     *   </ng-template>
     * </igx-date-picker>
     * ```
     * @return {?}
     */
    IgxDatePickerComponent.prototype.openDialog = /**
     * Opens the date picker drop down or dialog.
     * @param {?=} target HTMLElement - the target element to use for positioning the drop down container according to
     * ```html
     * <igx-date-picker [value]="date" mode="dropdown" #retemplated>
     *   <ng-template igxDatePickerTemplate let-openDialog="openDialog"
     *                let-displayData="displayData">
     *     <igx-input-group>
     *       <input #dropDownTarget igxInput [value]="displayData" />
     *       <igx-suffix (click)="openDialog(dropDownTarget)">
     *         <igx-icon>alarm</igx-icon>
     *       </igx-suffix>
     *     </igx-input-group>
     *   </ng-template>
     * </igx-date-picker>
     * ```
     * @return {?}
     */
    function (target) {
        if (!this.collapsed) {
            return;
        }
        switch (this.mode) {
            case InteractionMode.Dialog: {
                this.hasHeader = true;
                /** @type {?} */
                var modalOverlay = (this.modalOverlaySettings !== undefined) ? this._modalOverlay : this._modalOverlaySettings;
                this._componentID = this._overlayService.attach(IgxCalendarContainerComponent, modalOverlay, this._moduleRef);
                this._overlayService.show(this._componentID);
                break;
            }
            case InteractionMode.DropDown: {
                this.hasHeader = false;
                if (target) {
                    this.dropDownOverlaySettings.positionStrategy.settings.target = target;
                }
                this._componentID = this._overlayService.attach(IgxCalendarContainerComponent, this.dropDownOverlaySettings, this._moduleRef);
                this._overlayService.show(this._componentID);
                break;
            }
        }
    };
    /**
     * Close the calendar.
     *
     * @hidden
     */
    /**
     * Close the calendar.
     *
     * @hidden
     * @return {?}
     */
    IgxDatePickerComponent.prototype.closeCalendar = /**
     * Close the calendar.
     *
     * @hidden
     * @return {?}
     */
    function () {
        this._overlayService.hide(this._componentID);
    };
    /**
     * Clear the input field, date picker value and calendar selection.
     *
     * @hidden
     */
    /**
     * Clear the input field, date picker value and calendar selection.
     *
     * @hidden
     * @return {?}
     */
    IgxDatePickerComponent.prototype.clear = /**
     * Clear the input field, date picker value and calendar selection.
     *
     * @hidden
     * @return {?}
     */
    function () {
        this.isEmpty = true;
        this.invalidDate = '';
        this.deselectDate();
        this._setCursorPosition(0);
    };
    /**
     * Evaluates when @calendar.onSelection event was fired
     * and update the input value.
     *
     * @param event selected value from calendar.
     *
     * @hidden
     */
    /**
     * Evaluates when \@calendar.onSelection event was fired
     * and update the input value.
     *
     * @hidden
     * @param {?} date
     * @return {?}
     */
    IgxDatePickerComponent.prototype.handleSelection = /**
     * Evaluates when \@calendar.onSelection event was fired
     * and update the input value.
     *
     * @hidden
     * @param {?} date
     * @return {?}
     */
    function (date) {
        if (this.value) {
            date.setHours(this.value.getHours());
            date.setMinutes(this.value.getMinutes());
            date.setSeconds(this.value.getSeconds());
            date.setMilliseconds(this.value.getMilliseconds());
        }
        this.value = date;
        this.calendar.viewDate = date;
        this._onChangeCallback(date);
        this.closeCalendar();
        this.onSelection.emit(date);
    };
    /**
    * Evaluates when the input blur event was fired
    * and re-calculate the date picker value.
    *
    * @param event
    *
    * @hidden
    */
    /**
     * Evaluates when the input blur event was fired
     * and re-calculate the date picker value.
     *
     * @hidden
     * @param {?} event
     *
     * @return {?}
     */
    IgxDatePickerComponent.prototype.onBlur = /**
     * Evaluates when the input blur event was fired
     * and re-calculate the date picker value.
     *
     * @hidden
     * @param {?} event
     *
     * @return {?}
     */
    function (event) {
        this._isInEditMode = false;
        this.calculateDate(event.target.value, event.type);
    };
    /**
    * Evaluates when the input focus event was fired
    * and re-calculate the editor text.
    *
    * @param event
    * @hidden
    */
    /**
     * Evaluates when the input focus event was fired
     * and re-calculate the editor text.
     *
     * @hidden
     * @return {?}
     */
    IgxDatePickerComponent.prototype.onFocus = /**
     * Evaluates when the input focus event was fired
     * and re-calculate the editor text.
     *
     * @hidden
     * @return {?}
     */
    function () {
        this._isInEditMode = true;
        if (this.value && this.invalidDate === '') {
            this._transformedDate = this._getEditorDate(this.value);
        }
    };
    /**
    * Evaluates when the keydown event was fired for up/down keys
    * to provide spinning of date parts.
    *
    * @param event
    *
    * @hidden
    */
    /**
     * Evaluates when the keydown event was fired for up/down keys
     * to provide spinning of date parts.
     *
     * @hidden
     * @param {?} event
     *
     * @return {?}
     */
    IgxDatePickerComponent.prototype.onKeyDown = /**
     * Evaluates when the keydown event was fired for up/down keys
     * to provide spinning of date parts.
     *
     * @hidden
     * @param {?} event
     *
     * @return {?}
     */
    function (event) {
        switch (event.key) {
            case "ArrowUp" /* UP_ARROW */:
            case "Up" /* UP_ARROW_IE */:
                event.preventDefault();
                event.stopPropagation();
                this.spinValue(event.target.value, 1, event.type);
                break;
            case "ArrowDown" /* DOWN_ARROW */:
            case "Down" /* DOWN_ARROW_IE */:
                if (event.altKey) {
                    this.openDialog(this.getInputGroupElement());
                }
                else {
                    event.preventDefault();
                    event.stopPropagation();
                    this.spinValue(event.target.value, -1, event.type);
                }
                break;
            default:
                break;
        }
    };
    /**
    * Evaluates when the mouse wheel event was fired
    * to provide spinning of date parts.
    *
    * @param event
    *
    * @hidden
    */
    /**
     * Evaluates when the mouse wheel event was fired
     * to provide spinning of date parts.
     *
     * @hidden
     * @param {?} event
     *
     * @return {?}
     */
    IgxDatePickerComponent.prototype.onWheel = /**
     * Evaluates when the mouse wheel event was fired
     * to provide spinning of date parts.
     *
     * @hidden
     * @param {?} event
     *
     * @return {?}
     */
    function (event) {
        if (this._isInEditMode) {
            event.preventDefault();
            event.stopPropagation();
            /** @type {?} */
            var sign = (event.deltaY > 0) ? -1 : 1;
            this.spinValue(event.target.value, sign, event.type);
        }
    };
    /**
    * Evaluates when input event was fired in editor.
    *
    * @param event
    *
    * @hidden
    */
    /**
     * Evaluates when input event was fired in editor.
     *
     * @hidden
     * @param {?} event
     *
     * @return {?}
     */
    IgxDatePickerComponent.prototype.onInput = /**
     * Evaluates when input event was fired in editor.
     *
     * @hidden
     * @param {?} event
     *
     * @return {?}
     */
    function (event) {
        var _this = this;
        /** @type {?} */
        var targetValue = event.target.value;
        /** @type {?} */
        var cursorPosition = this._getCursorPosition();
        /** @type {?} */
        var checkInput = DatePickerUtil.checkForCompleteDateInput(this.dateFormatParts, targetValue);
        this._isInEditMode = true;
        if (targetValue !== DatePickerUtil.maskToPromptChars(this.inputMask)) {
            this.isEmpty = false;
        }
        // If all date parts are completed, change the date-picker value, stay in edit mode
        if (checkInput === 'complete' && event.inputType !== 'deleteContentBackward') {
            this._transformedDate = targetValue;
            this.calculateDate(targetValue, event.type);
            this._setCursorPosition(cursorPosition);
        }
        else if (checkInput === 'partial') {
            // While editing, if one date part is deleted, date-picker value is set to null, the remaining input stays intact.
            this.deselectDate();
            requestAnimationFrame(function () {
                _this.getEditElement().value = targetValue;
                _this._setCursorPosition(cursorPosition);
            });
        }
        else if (checkInput === 'empty') {
            // Total clean-up as input is deleted.
            this.isEmpty = true;
            this.deselectDate();
        }
    };
    /**
     * @private
     * @param {?} dateString
     * @param {?} invokedByEvent
     * @return {?}
     */
    IgxDatePickerComponent.prototype.calculateDate = /**
     * @private
     * @param {?} dateString
     * @param {?} invokedByEvent
     * @return {?}
     */
    function (dateString, invokedByEvent) {
        if (dateString !== '') {
            /** @type {?} */
            var prevDateValue = this.value;
            /** @type {?} */
            var inputValue = (invokedByEvent === 'blur') ? this.rawDateString : dateString;
            /** @type {?} */
            var newDateArray = DatePickerUtil.parseDateArray(this.dateFormatParts, prevDateValue, inputValue);
            if (newDateArray.state === "valid" /* Valid */) {
                /** @type {?} */
                var newValue = newDateArray.date;
                // Restore the time part if any
                if (prevDateValue) {
                    newValue.setHours(prevDateValue.getHours());
                    newValue.setMinutes(prevDateValue.getMinutes());
                    newValue.setSeconds(prevDateValue.getSeconds());
                    newValue.setMilliseconds(prevDateValue.getMilliseconds());
                }
                if (this.disabledDates === null
                    || (this.disabledDates !== null && !isDateInRanges(newValue, this.disabledDates))) {
                    this.value = newValue;
                    this.invalidDate = '';
                    this._onChangeCallback(newValue);
                }
                else {
                    /** @type {?} */
                    var args = {
                        datePicker: this,
                        currentValue: newValue,
                    };
                    this.onDisabledDate.emit(args);
                }
            }
            else {
                /** @type {?} */
                var args = {
                    datePicker: this,
                    prevValue: prevDateValue
                };
                this.invalidDate = dateString;
                this.onValidationFailed.emit(args);
            }
        }
    };
    /**
     * @private
     * @param {?} inputValue
     * @param {?} sign
     * @param {?} eventType
     * @return {?}
     */
    IgxDatePickerComponent.prototype.spinValue = /**
     * @private
     * @param {?} inputValue
     * @param {?} sign
     * @param {?} eventType
     * @return {?}
     */
    function (inputValue, sign, eventType) {
        this._isInEditMode = true;
        this.isEmpty = false;
        /** @type {?} */
        var cursorPosition = this._getCursorPosition();
        /** @type {?} */
        var modifiedInputValue = DatePickerUtil.getModifiedDateInput(this.dateFormatParts, inputValue, cursorPosition, this.spinDelta * sign, this.isSpinLoop);
        this.getEditElement().value = modifiedInputValue;
        this._setCursorPosition(cursorPosition);
        /** @type {?} */
        var checkInput = DatePickerUtil.checkForCompleteDateInput(this.dateFormatParts, modifiedInputValue);
        if (checkInput === 'complete') {
            this._isInEditMode = true;
            this.calculateDate(modifiedInputValue, eventType);
            this._setCursorPosition(cursorPosition);
        }
    };
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    IgxDatePickerComponent.prototype._onOpening = /**
     * @private
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this._initializeCalendarContainer((/** @type {?} */ (event.componentRef.instance)));
        this.collapsed = false;
    };
    /**
     * @private
     * @return {?}
     */
    IgxDatePickerComponent.prototype._onOpened = /**
     * @private
     * @return {?}
     */
    function () {
        this._onTouchedCallback();
        this.onOpened.emit(this);
        // TODO: remove this line after deprecating 'onOpen'
        this._onOpen.emit(this);
        if (this.calendar) {
            this._focusCalendarDate();
        }
    };
    /**
     * @private
     * @return {?}
     */
    IgxDatePickerComponent.prototype._onClosed = /**
     * @private
     * @return {?}
     */
    function () {
        this.collapsed = true;
        this._componentID = null;
        this.onClosed.emit(this);
        // TODO: remove this line after deprecating 'onClose'
        this.onClose.emit(this);
        if (this.getEditElement()) {
            this.getEditElement().focus();
        }
    };
    /**
     * @private
     * @param {?} componentInstance
     * @return {?}
     */
    IgxDatePickerComponent.prototype._initializeCalendarContainer = /**
     * @private
     * @param {?} componentInstance
     * @return {?}
     */
    function (componentInstance) {
        var _this = this;
        this.calendar = componentInstance.calendar;
        /** @type {?} */
        var isVertical = (this.vertical && this.mode === InteractionMode.Dialog);
        this.calendar.hasHeader = this.hasHeader;
        this.calendar.formatOptions = this.formatOptions;
        this.calendar.formatViews = this.formatViews;
        this.calendar.locale = this.locale;
        this.calendar.vertical = isVertical;
        this.calendar.weekStart = this.weekStart;
        this.calendar.specialDates = this.specialDates;
        this.calendar.disabledDates = this.disabledDates;
        this.calendar.headerTemplate = this.headerTemplate;
        this.calendar.subheaderTemplate = this.subheaderTemplate;
        this.calendar.onSelection.pipe(takeUntil(this._destroy$)).subscribe(function (ev) { return _this.handleSelection(ev); });
        if (this.value) {
            this.calendar.value = this.value;
            this.calendar.viewDate = this.value;
        }
        componentInstance.mode = this.mode;
        componentInstance.vertical = isVertical;
        componentInstance.cancelButtonLabel = this.cancelButtonLabel;
        componentInstance.todayButtonLabel = this.todayButtonLabel;
        componentInstance.datePickerActions = this.datePickerActionsDirective;
        componentInstance.onClose.pipe(takeUntil(this._destroy$)).subscribe(function () { return _this.closeCalendar(); });
        componentInstance.onTodaySelection.pipe(takeUntil(this._destroy$)).subscribe(function () { return _this.triggerTodaySelection(); });
    };
    // Focus a date, after the calendar appearance into DOM.
    // Focus a date, after the calendar appearance into DOM.
    /**
     * @private
     * @return {?}
     */
    IgxDatePickerComponent.prototype._focusCalendarDate = 
    // Focus a date, after the calendar appearance into DOM.
    /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        requestAnimationFrame(function () {
            _this.calendar.daysView.focusActiveDate();
        });
    };
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    IgxDatePickerComponent.prototype._setLocaleToDate = /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (isIE()) {
            // this is a workaround fixing the following IE11 issue:
            // IE11 has added character code 8206 (mark for RTL) to the output of toLocaleDateString() that
            // precedes each portion that comprises the total date... For more information read this article:
            // tslint:disable-next-line: max-line-length
            // https://www.csgpro.com/blog/2016/08/a-bad-date-with-internet-explorer-11-trouble-with-new-unicode-characters-in-javascript-date-strings/
            /** @type {?} */
            var localeDateStrIE = new Date(value.getFullYear(), value.getMonth(), value.getDate(), value.getHours(), value.getMinutes(), value.getSeconds(), value.getMilliseconds());
            return localeDateStrIE.toLocaleDateString(this.locale);
        }
        return value.toLocaleDateString(this.locale);
    };
    /**
     * @private
     * @return {?}
     */
    IgxDatePickerComponent.prototype._getCursorPosition = /**
     * @private
     * @return {?}
     */
    function () {
        return this.getEditElement().selectionStart;
    };
    /**
     * @private
     * @param {?} start
     * @param {?=} end
     * @return {?}
     */
    IgxDatePickerComponent.prototype._setCursorPosition = /**
     * @private
     * @param {?} start
     * @param {?=} end
     * @return {?}
     */
    function (start, end) {
        var _this = this;
        if (end === void 0) { end = start; }
        requestAnimationFrame(function () {
            _this.getEditElement().setSelectionRange(start, end);
        });
    };
    /**
     * Apply custom user formatter upon date.
     * @param formatter custom formatter function.
     * @param date passed date
     */
    /**
     * Apply custom user formatter upon date.
     * @private
     * @param {?} formatter custom formatter function.
     * @param {?} date passed date
     * @return {?}
     */
    IgxDatePickerComponent.prototype._customFormatChecker = /**
     * Apply custom user formatter upon date.
     * @private
     * @param {?} formatter custom formatter function.
     * @param {?} date passed date
     * @return {?}
     */
    function (formatter, date) {
        return this.formatter ? this.formatter(date) : this._setLocaleToDate(date);
    };
    /*
    * Transforms the date according to the specified format when `IgxDatePickerComponent` is in edit mode
    * using @angular/common formatDate method: https://angular.io/api/common/formatDate
    * @param  value: string | number | Date
    * @returns formatted string
    */
    /*
        * Transforms the date according to the specified format when `IgxDatePickerComponent` is in edit mode
        * using @angular/common formatDate method: https://angular.io/api/common/formatDate
        * @param  value: string | number | Date
        * @returns formatted string
        */
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    IgxDatePickerComponent.prototype._getDisplayDate = /*
        * Transforms the date according to the specified format when `IgxDatePickerComponent` is in edit mode
        * using @angular/common formatDate method: https://angular.io/api/common/formatDate
        * @param  value: string | number | Date
        * @returns formatted string
        */
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (this.format && !this.formatter) {
            /** @type {?} */
            var locale = this.locale || this.defaultLocale;
            return formatDate(value, this.format, locale);
        }
        else {
            return this._customFormatChecker(this.formatter, value);
        }
    };
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    IgxDatePickerComponent.prototype._getEditorDate = /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var locale = this.locale || this.defaultLocale;
        /** @type {?} */
        var changedValue = (value) ? formatDate(value, this.mask, locale) : '';
        return DatePickerUtil.addPromptCharsEditMode(this.dateFormatParts, this.value, changedValue);
    };
    IgxDatePickerComponent.decorators = [
        { type: Component, args: [{
                    providers: [{
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: IgxDatePickerComponent,
                            multi: true
                        }],
                    // tslint:disable-next-line:component-selector
                    selector: 'igx-date-picker',
                    template: "<ng-template #readOnlyDatePickerTemplate>\n    <igx-input-group (click)=\"openDialog()\">\n        <igx-prefix>\n            <igx-icon>today</igx-icon>\n        </igx-prefix>\n        <label *ngIf=\"labelVisibility\" igxLabel>{{label}}</label>\n        <input #readonlyInput class=\"igx-date-picker__input-date\" igxInput [value]=\"displayData || ''\"\n            [disabled]=\"disabled\" readonly />\n    </igx-input-group>\n</ng-template>\n\n<ng-template #editableDatePickerTemplate>\n    <igx-input-group #editableInputGroup [supressInputAutofocus]=\"true\">\n        <igx-prefix (click)=\"openDialog(editableInputGroup.element.nativeElement)\">\n            <igx-icon>today</igx-icon>\n        </igx-prefix>\n        <label *ngIf=\"labelVisibility\" igxLabel>{{label}}</label>\n        <input #editableInput class=\"igx-date-picker__input-date\" igxInput type=\"text\" [value]=\"transformedDate\"\n            [igxMask]=\"inputMask\" [placeholder]=\"mask\" [disabled]=\"disabled\" [displayValuePipe]=\"displayValuePipe\"\n            [focusedValuePipe]=\"inputValuePipe\" (blur)=\"onBlur($event)\" (wheel)=\"onWheel($event)\"\n            (input)=\"onInput($event)\" (focus)=\"onFocus()\" />\n        <igx-suffix *ngIf=\"!isEmpty\" (click)=\"clear()\">\n            <igx-icon>clear</igx-icon>\n        </igx-suffix>\n    </igx-input-group>\n</ng-template>\n\n<ng-container *ngTemplateOutlet=\"template; context: context\"></ng-container>",
                    styles: ["\n        :host {\n            display: block;\n        }\n    "]
                }] }
    ];
    /** @nocollapse */
    IgxDatePickerComponent.ctorParameters = function () { return [
        { type: IgxOverlayService, decorators: [{ type: Inject, args: [IgxOverlayService,] }] },
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: NgModuleRef }
    ]; };
    IgxDatePickerComponent.propDecorators = {
        label: [{ type: Input }],
        labelVisibility: [{ type: Input }],
        locale: [{ type: Input }],
        weekStart: [{ type: Input }],
        formatOptions: [{ type: Input }],
        format: [{ type: Input }],
        mask: [{ type: Input }],
        formatViews: [{ type: Input }],
        disabledDates: [{ type: Input }],
        specialDates: [{ type: Input }],
        modalOverlaySettings: [{ type: Input }],
        dropDownOverlaySettings: [{ type: Input }],
        value: [{ type: Input }],
        id: [{ type: HostBinding, args: ['attr.id',] }, { type: Input }],
        formatter: [{ type: Input }],
        disabled: [{ type: Input }],
        vertical: [{ type: Input }],
        todayButtonLabel: [{ type: Input }],
        cancelButtonLabel: [{ type: Input }],
        mode: [{ type: Input }],
        isSpinLoop: [{ type: Input }],
        outlet: [{ type: Input }],
        onOpen: [{ type: Output }],
        onOpened: [{ type: Output }],
        onClose: [{ type: Output }],
        onClosed: [{ type: Output }],
        onClosing: [{ type: Output }],
        onSelection: [{ type: Output }],
        onDisabledDate: [{ type: Output }],
        onValidationFailed: [{ type: Output }],
        readOnlyDatePickerTemplate: [{ type: ViewChild, args: ['readOnlyDatePickerTemplate', { read: TemplateRef, static: true },] }],
        editableDatePickerTemplate: [{ type: ViewChild, args: ['editableDatePickerTemplate', { read: TemplateRef, static: true },] }],
        inputGroup: [{ type: ViewChild, args: [IgxInputGroupComponent, { static: false },] }],
        editableInput: [{ type: ViewChild, args: ['editableInput', { read: ElementRef, static: false },] }],
        readonlyInput: [{ type: ViewChild, args: ['readonlyInput', { read: ElementRef, static: false },] }],
        input: [{ type: ContentChild, args: [IgxInputDirective, { static: false },] }],
        datePickerTemplateDirective: [{ type: ContentChild, args: [IgxDatePickerTemplateDirective, { read: IgxDatePickerTemplateDirective, static: true },] }],
        headerTemplate: [{ type: ContentChild, args: [IgxCalendarHeaderTemplateDirective, { read: IgxCalendarHeaderTemplateDirective, static: true },] }],
        subheaderTemplate: [{ type: ContentChild, args: [IgxCalendarSubheaderTemplateDirective, { read: IgxCalendarSubheaderTemplateDirective, static: true },] }],
        datePickerActionsDirective: [{ type: ContentChild, args: [IgxDatePickerActionsDirective, { read: IgxDatePickerActionsDirective, static: false },] }],
        onSpaceClick: [{ type: HostListener, args: ['keydown.spacebar', ['$event'],] }, { type: HostListener, args: ['keydown.space', ['$event'],] }]
    };
    tslib_1.__decorate([
        DeprecateProperty("'onOpen' @Output property is deprecated. Use 'onOpened' instead."),
        tslib_1.__metadata("design:type", EventEmitter),
        tslib_1.__metadata("design:paramtypes", [EventEmitter])
    ], IgxDatePickerComponent.prototype, "onOpen", null);
    tslib_1.__decorate([
        DeprecateProperty("'onClose' @Output property is deprecated. Use 'onClosed' instead."),
        tslib_1.__metadata("design:type", EventEmitter),
        tslib_1.__metadata("design:paramtypes", [EventEmitter])
    ], IgxDatePickerComponent.prototype, "onClose", null);
    return IgxDatePickerComponent;
}());
export { IgxDatePickerComponent };
if (false) {
    /**
     * An \@Input property that sets the `IgxDatePickerComponent` label.
     * The default label is 'Date'.
     * ```html
     * <igx-date-picker [label]="Calendar"></igx-date-picker>
     * ```
     * @type {?}
     */
    IgxDatePickerComponent.prototype.label;
    /**
     * An \@Input property that sets the `IgxDatePickerComponent` label visibility.
     * By default the visibility is set to true.
     * <igx-date-picker [labelVisibility]="false"></igx-date-picker>
     * @type {?}
     */
    IgxDatePickerComponent.prototype.labelVisibility;
    /**
     * An \@Input property that sets locales. Default locale is en.
     * ```html
     * <igx-date-picker locale="ja-JP" [value]="date"></igx-date-picker>
     * ```
     * @type {?}
     */
    IgxDatePickerComponent.prototype.locale;
    /**
     * An \@Input property that sets on which day the week starts.
     * ```html
     * <igx-date-picker [weekStart]="WEEKDAYS.FRIDAY" cancelButtonLabel="cancel" todayButtonLabel="today"></igx-date-picker>
     * ```
     * @type {?}
     */
    IgxDatePickerComponent.prototype.weekStart;
    /**
     * Returns the date mask of the `IgxDatePickerComponent` when in editable dropdown mode.
     * ```typescript
     * \@ViewChild("MyDatePicker")
     * public datePicker: IgxDatePickerComponent;
     * ngAfterViewInit(){
     *    let mask = this.datePicker.mask;
     * }
     * ```
     * @type {?}
     */
    IgxDatePickerComponent.prototype.mask;
    /**
     * An \@Input property that sets the value of `id` attribute. If not provided it will be automatically generated.
     * ```html
     * <igx-date-picker [id]="'igx-date-picker-3'" cancelButtonLabel="cancel" todayButtonLabel="today"></igx-date-picker>
     * ```
     * @type {?}
     */
    IgxDatePickerComponent.prototype.id;
    /**
     * An \@Input property that applies a custom formatter function on the selected or passed date.
     * ```typescript
     * public date: Date = new Date();
     * private dayFormatter = new Intl.DateTimeFormat("en", { weekday: "long" });
     * private monthFormatter = new Intl.DateTimeFormat("en", { month: "long" });
     * public formatter = (date: Date) => { return `You selected
     *                     ${this.dayFormatter.format(date)},
     *                     ${date.getDate()} ${this.monthFormatter.format(date)},
     *                     ${date.getFullYear()}`;
     * }
     * ```
     * ```html
     * <igx-date-picker [value]="date" [formatter]="formatter"></igx-date-picker>
     * ```
     * @type {?}
     */
    IgxDatePickerComponent.prototype.formatter;
    /**
     * An \@Input property that disables the `IgxDatePickerComponent`.
     * ```html
     * <igx-date-picker [disabled]="'true'" cancelButtonLabel="cancel" todayButtonLabel="today"></igx-date-picker>
     * ```
     * @type {?}
     */
    IgxDatePickerComponent.prototype.disabled;
    /**
     * An \@Input property that sets the orientation of the `IgxDatePickerComponent` header.
     * ```html
     * <igx-date-picker [vertical]="'true'" cancelButtonLabel="cancel" todayButtonLabel="today"></igx-date-picker>
     * ```
     * @type {?}
     */
    IgxDatePickerComponent.prototype.vertical;
    /**
     * An \@Input property that renders today button with custom label.
     * ```html
     * <igx-date-picker cancelButtonLabel="cancel" todayButtonLabel="Tomorrow"></igx-date-picker>
     * ```
     * @type {?}
     */
    IgxDatePickerComponent.prototype.todayButtonLabel;
    /**
     * An \@Input property that renders cancel button with custom label.
     * ```html
     * <igx-date-picker cancelButtonLabel="Close" todayButtonLabel="Today"></igx-date-picker>
     * ```
     * @type {?}
     */
    IgxDatePickerComponent.prototype.cancelButtonLabel;
    /**
     * An \@Input property that sets whether `IgxDatePickerComponent` is in dialog or drop down mode.
     * ```html
     * <igx-date-picker mode="dropdown"></igx-date-picker>
     * ```
     * @type {?}
     */
    IgxDatePickerComponent.prototype.mode;
    /**
     * An \@Input property that sets whether the `IgxDatePickerComponent` date parts would spin continuously or stop when min/max is reached.
     * ```html
     * <igx-date-picker [isSpinLoop]="false"></igx-date-picker>
     * ```
     * @type {?}
     */
    IgxDatePickerComponent.prototype.isSpinLoop;
    /**
     * Determines the container the popup element should be attached to.
     *
     * ```html
     * <div igxOverlayOutlet #outlet="overlay-outlet"></div>
     * //..
     * <igx-date-picker [outlet]="outlet"></igx-date-picker>
     * //..
     * ```
     * Where `outlet` is an instance of `IgxOverlayOutletDirective` or an `ElementRef`.
     * @type {?}
     */
    IgxDatePickerComponent.prototype.outlet;
    /**
     * An event that is emitted when the `IgxDatePickerComponent` calendar is opened.
     * @type {?}
     */
    IgxDatePickerComponent.prototype.onOpened;
    /**
     * An event that is emitted after the `IgxDatePickerComponent` is closed.
     * @type {?}
     */
    IgxDatePickerComponent.prototype.onClosed;
    /**
     * An event that is emitted when the `IgxDatePickerComponent` is being closed.
     * @type {?}
     */
    IgxDatePickerComponent.prototype.onClosing;
    /**
     * An \@Output property that is fired when selection is made in the calendar.
     * ```typescript
     * public selection(event){
     *    alert("A date has been selected!");
     * }
     * ```
     * ```html
     * <igx-date-picker (onSelection)="selection($event)" cancelButtonLabel="cancel" todayButtonLabel="today"></igx-date-picker>
     * ```
     * @type {?}
     */
    IgxDatePickerComponent.prototype.onSelection;
    /**
     * An \@Output property that fires when the user types/spins to a disabled date in the date-picker editor.
     * ```typescript
     * public onDisabledDate(event){
     *    alert("This date is disabled!");
     * }
     * ```
     * ```html
     * <igx-date-picker (onDisabledDate)="onDisabledDate($event)"></igx-date-picker>
     * ```
     * @type {?}
     */
    IgxDatePickerComponent.prototype.onDisabledDate;
    /**
     * An \@Output property that fires when the user types/spins invalid date in the date-picker editor.
     * ```typescript
     * public onValidationFailed(event){
     *    alert("This date is not valid!");
     * }
     * ```
     * ```html
     * <igx-date-picker (onValidationFailed)="onValidationFailed($event)"></igx-date-picker>
     * ```
     * @type {?}
     */
    IgxDatePickerComponent.prototype.onValidationFailed;
    /**
     * @type {?}
     * @protected
     */
    IgxDatePickerComponent.prototype.readOnlyDatePickerTemplate;
    /**
     * @type {?}
     * @protected
     */
    IgxDatePickerComponent.prototype.editableDatePickerTemplate;
    /**
     * @type {?}
     * @protected
     */
    IgxDatePickerComponent.prototype.inputGroup;
    /**
     * @type {?}
     * @protected
     */
    IgxDatePickerComponent.prototype.editableInput;
    /**
     * @type {?}
     * @protected
     */
    IgxDatePickerComponent.prototype.readonlyInput;
    /**
     * @type {?}
     * @protected
     */
    IgxDatePickerComponent.prototype.input;
    /**
     * @hidden
     * @type {?}
     * @protected
     */
    IgxDatePickerComponent.prototype.datePickerTemplateDirective;
    /**
     * @hidden
     * @type {?}
     */
    IgxDatePickerComponent.prototype.headerTemplate;
    /**
     * @hidden
     * @type {?}
     */
    IgxDatePickerComponent.prototype.subheaderTemplate;
    /**
     * @hidden
     * @type {?}
     */
    IgxDatePickerComponent.prototype.datePickerActionsDirective;
    /** @type {?} */
    IgxDatePickerComponent.prototype.calendar;
    /** @type {?} */
    IgxDatePickerComponent.prototype.hasHeader;
    /** @type {?} */
    IgxDatePickerComponent.prototype.collapsed;
    /** @type {?} */
    IgxDatePickerComponent.prototype.displayValuePipe;
    /** @type {?} */
    IgxDatePickerComponent.prototype.inputValuePipe;
    /** @type {?} */
    IgxDatePickerComponent.prototype.dateFormatParts;
    /** @type {?} */
    IgxDatePickerComponent.prototype.rawDateString;
    /** @type {?} */
    IgxDatePickerComponent.prototype.inputMask;
    /** @type {?} */
    IgxDatePickerComponent.prototype.isEmpty;
    /** @type {?} */
    IgxDatePickerComponent.prototype.invalidDate;
    /**
     * @type {?}
     * @private
     */
    IgxDatePickerComponent.prototype.spinDelta;
    /**
     * @type {?}
     * @private
     */
    IgxDatePickerComponent.prototype.defaultLocale;
    /**
     * @type {?}
     * @private
     */
    IgxDatePickerComponent.prototype._formatOptions;
    /**
     * @type {?}
     * @private
     */
    IgxDatePickerComponent.prototype._formatViews;
    /**
     * @type {?}
     * @private
     */
    IgxDatePickerComponent.prototype._destroy$;
    /**
     * @type {?}
     * @private
     */
    IgxDatePickerComponent.prototype._componentID;
    /**
     * @type {?}
     * @private
     */
    IgxDatePickerComponent.prototype._format;
    /**
     * @type {?}
     * @private
     */
    IgxDatePickerComponent.prototype._value;
    /**
     * @type {?}
     * @private
     */
    IgxDatePickerComponent.prototype._isInEditMode;
    /**
     * @type {?}
     * @private
     */
    IgxDatePickerComponent.prototype._disabledDates;
    /**
     * @type {?}
     * @private
     */
    IgxDatePickerComponent.prototype._specialDates;
    /**
     * @type {?}
     * @private
     */
    IgxDatePickerComponent.prototype._modalOverlay;
    /**
     * @type {?}
     * @private
     */
    IgxDatePickerComponent.prototype._dropDownOverlaySettings;
    /**
     * @type {?}
     * @private
     */
    IgxDatePickerComponent.prototype._positionSettings;
    /**
     * @type {?}
     * @private
     */
    IgxDatePickerComponent.prototype._defaultDropDownOverlaySettings;
    /**
     * @type {?}
     * @private
     */
    IgxDatePickerComponent.prototype._modalOverlaySettings;
    /**
     * @type {?}
     * @private
     */
    IgxDatePickerComponent.prototype._transformedDate;
    /**
     * @type {?}
     * @private
     */
    IgxDatePickerComponent.prototype._onOpen;
    /**
     * @type {?}
     * @private
     */
    IgxDatePickerComponent.prototype._onClose;
    /**
     * @type {?}
     * @private
     */
    IgxDatePickerComponent.prototype._onTouchedCallback;
    /**
     * @type {?}
     * @private
     */
    IgxDatePickerComponent.prototype._onChangeCallback;
    /**
     * @type {?}
     * @private
     */
    IgxDatePickerComponent.prototype._overlayService;
    /** @type {?} */
    IgxDatePickerComponent.prototype.element;
    /**
     * @type {?}
     * @private
     */
    IgxDatePickerComponent.prototype._cdr;
    /**
     * @type {?}
     * @private
     */
    IgxDatePickerComponent.prototype._moduleRef;
}
/**
 * @hidden
 */
var IgxDatePickerModule = /** @class */ (function () {
    function IgxDatePickerModule() {
    }
    IgxDatePickerModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [IgxDatePickerComponent, IgxCalendarContainerComponent, IgxDatePickerActionsDirective,
                        IgxDatePickerTemplateDirective, DatePickerDisplayValuePipe, DatePickerInputValuePipe],
                    exports: [IgxDatePickerComponent, IgxDatePickerTemplateDirective, IgxDatePickerActionsDirective,
                        DatePickerDisplayValuePipe, DatePickerInputValuePipe],
                    imports: [CommonModule, IgxIconModule, IgxInputGroupModule, IgxCalendarModule, IgxButtonModule, IgxRippleModule, IgxMaskModule],
                    entryComponents: [IgxCalendarContainerComponent]
                },] }
    ];
    return IgxDatePickerModule;
}());
export { IgxDatePickerModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1waWNrZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vaWduaXRldWktYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9kYXRlLXBpY2tlci9kYXRlLXBpY2tlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNELE9BQU8sRUFDSCxTQUFTLEVBQ1QsWUFBWSxFQUNaLFlBQVksRUFDWixXQUFXLEVBQ1gsS0FBSyxFQUNMLFFBQVEsRUFFUixNQUFNLEVBQ04sU0FBUyxFQUNULFVBQVUsRUFDVixXQUFXLEVBQ1gsTUFBTSxFQUNOLGlCQUFpQixFQUNqQixZQUFZLEVBQ1osV0FBVyxFQUdkLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RSxPQUFPLEVBRUgsa0NBQWtDLEVBQ2xDLGlCQUFpQixFQUNqQixxQ0FBcUMsRUFDckMsUUFBUSxFQUNSLGNBQWMsRUFDakIsTUFBTSxtQkFBbUIsQ0FBQztBQUMzQixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxpQkFBaUIsRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3RHLE9BQU8sRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLHVCQUF1QixFQUFFLFFBQVEsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUM3RSxPQUFPLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU3RCxPQUFPLEVBRUgsaUJBQWlCLEVBRWpCLHNCQUFzQixFQUN0QixvQkFBb0IsRUFFdkIsTUFBTSxtQkFBbUIsQ0FBQztBQUczQixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDeEUs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QTBCLEVBQUUsd0JBQXdCLENBQUM7b0JBQ3pGLE9BQU8sRUFBRSxDQUFDLHNCQUFzQixFQUFFLDhCQUE4QixFQUFFLDZCQUE2Qjt3QkFDM0YsMEJBQTBCLEVBQUUsd0JBQXdCLENBQUM7b0JBQ3pELE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxhQUFhLEVBQUUsbUJBQW1CLEVBQUUsaUJBQWlCLEVBQUUsZUFBZSxFQUFFLGVBQWUsRUFBRSxhQUFhLENBQUM7b0JBQy9ILGVBQWUsRUFBRSxDQUFDLDZCQUE2QixDQUFDO2lCQUNuRDs7SUFDa0MsMEJBQUM7Q0FBQSxBQVJwQyxJQVFvQztTQUF2QixtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUsIGZvcm1hdERhdGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtcbiAgICBDb21wb25lbnQsXG4gICAgQ29udGVudENoaWxkLFxuICAgIEV2ZW50RW1pdHRlcixcbiAgICBIb3N0QmluZGluZyxcbiAgICBJbnB1dCxcbiAgICBOZ01vZHVsZSxcbiAgICBPbkRlc3Ryb3ksXG4gICAgT3V0cHV0LFxuICAgIFZpZXdDaGlsZCxcbiAgICBFbGVtZW50UmVmLFxuICAgIFRlbXBsYXRlUmVmLFxuICAgIEluamVjdCxcbiAgICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBIb3N0TGlzdGVuZXIsXG4gICAgTmdNb2R1bGVSZWYsXG4gICAgT25Jbml0LFxuICAgIEFmdGVyVmlld0luaXRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge1xuICAgIElneENhbGVuZGFyQ29tcG9uZW50LFxuICAgIElneENhbGVuZGFySGVhZGVyVGVtcGxhdGVEaXJlY3RpdmUsXG4gICAgSWd4Q2FsZW5kYXJNb2R1bGUsXG4gICAgSWd4Q2FsZW5kYXJTdWJoZWFkZXJUZW1wbGF0ZURpcmVjdGl2ZSxcbiAgICBXRUVLREFZUyxcbiAgICBpc0RhdGVJblJhbmdlc1xufSBmcm9tICcuLi9jYWxlbmRhci9pbmRleCc7XG5pbXBvcnQgeyBJZ3hJY29uTW9kdWxlIH0gZnJvbSAnLi4vaWNvbi9pbmRleCc7XG5pbXBvcnQgeyBJZ3hJbnB1dEdyb3VwTW9kdWxlLCBJZ3hJbnB1dERpcmVjdGl2ZSwgSWd4SW5wdXRHcm91cENvbXBvbmVudCB9IGZyb20gJy4uL2lucHV0LWdyb3VwL2luZGV4JztcbmltcG9ydCB7IFN1YmplY3QsIGZyb21FdmVudCwgYW5pbWF0aW9uRnJhbWVTY2hlZHVsZXIsIGludGVydmFsIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIHRha2VVbnRpbCwgdGhyb3R0bGUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBJZ3hPdmVybGF5T3V0bGV0RGlyZWN0aXZlIH0gZnJvbSAnLi4vZGlyZWN0aXZlcy90b2dnbGUvdG9nZ2xlLmRpcmVjdGl2ZSc7XG5pbXBvcnQge1xuICAgIE92ZXJsYXlTZXR0aW5ncyxcbiAgICBJZ3hPdmVybGF5U2VydmljZSxcbiAgICBQb3NpdGlvblNldHRpbmdzLFxuICAgIEFic29sdXRlU2Nyb2xsU3RyYXRlZ3ksXG4gICAgQXV0b1Bvc2l0aW9uU3RyYXRlZ3ksXG4gICAgT3ZlcmxheUNhbmNlbGFibGVFdmVudEFyZ3Ncbn0gZnJvbSAnLi4vc2VydmljZXMvaW5kZXgnO1xuaW1wb3J0IHsgRGF0ZVJhbmdlRGVzY3JpcHRvciB9IGZyb20gJy4uL2NvcmUvZGF0ZXMvZGF0ZVJhbmdlJztcbmltcG9ydCB7IEVkaXRvclByb3ZpZGVyIH0gZnJvbSAnLi4vY29yZS9lZGl0LXByb3ZpZGVyJztcbmltcG9ydCB7IElneEJ1dHRvbk1vZHVsZSB9IGZyb20gJy4uL2RpcmVjdGl2ZXMvYnV0dG9uL2J1dHRvbi5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgSWd4UmlwcGxlTW9kdWxlIH0gZnJvbSAnLi4vZGlyZWN0aXZlcy9yaXBwbGUvcmlwcGxlLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBJZ3hNYXNrTW9kdWxlIH0gZnJvbSAnLi4vZGlyZWN0aXZlcy9tYXNrL21hc2suZGlyZWN0aXZlJztcbmltcG9ydCB7XG4gICAgRGF0ZVBpY2tlclV0aWwsXG4gICAgRGF0ZVN0YXRlXG59IGZyb20gJy4vZGF0ZS1waWNrZXIudXRpbHMnO1xuaW1wb3J0IHsgRGF0ZVBpY2tlckRpc3BsYXlWYWx1ZVBpcGUsIERhdGVQaWNrZXJJbnB1dFZhbHVlUGlwZSB9IGZyb20gJy4vZGF0ZS1waWNrZXIucGlwZXMnO1xuaW1wb3J0IHsgSURhdGVQaWNrZXIgfSBmcm9tICcuL2RhdGUtcGlja2VyLmNvbW1vbic7XG5pbXBvcnQgeyBLRVlTLCBDYW5jZWxhYmxlQnJvd3NlckV2ZW50QXJncywgaXNJRSB9IGZyb20gJy4uL2NvcmUvdXRpbHMnO1xuaW1wb3J0IHsgSWd4RGF0ZVBpY2tlclRlbXBsYXRlRGlyZWN0aXZlLCBJZ3hEYXRlUGlja2VyQWN0aW9uc0RpcmVjdGl2ZSB9IGZyb20gJy4vZGF0ZS1waWNrZXIuZGlyZWN0aXZlcyc7XG5pbXBvcnQgeyBJZ3hDYWxlbmRhckNvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vY2FsZW5kYXItY29udGFpbmVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJbnRlcmFjdGlvbk1vZGUgfSBmcm9tICcuLi9jb3JlL2VudW1zJztcbmltcG9ydCB7IGZhZGVJbiwgZmFkZU91dCB9IGZyb20gJy4uL2FuaW1hdGlvbnMvZmFkZSc7XG5pbXBvcnQgeyBEZXByZWNhdGVQcm9wZXJ0eSB9IGZyb20gJy4uL2NvcmUvZGVwcmVjYXRlRGVjb3JhdG9ycyc7XG5cbmxldCBORVhUX0lEID0gMDtcblxuLyoqXG4gKiBUaGlzIGludGVyZmFjZSBpcyB1c2VkIHRvIHByb3ZpZGUgaW5mb3JtYXRpb24gYWJvdXQgZGF0ZSBwaWNrZXIgcmVmZXJlbmNlIGFuZCBpdHMgY3VycmVudCB2YWx1ZVxuICogd2hlbiBvbkRpc2FibGVkRGF0ZSBldmVudCBpcyBmaXJlZC5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJRGF0ZVBpY2tlckRpc2FibGVkRGF0ZUV2ZW50QXJncyB7XG4gICAgZGF0ZVBpY2tlcjogSWd4RGF0ZVBpY2tlckNvbXBvbmVudDtcbiAgICBjdXJyZW50VmFsdWU6IERhdGU7XG59XG5cbi8qKlxuICogVGhpcyBpbnRlcmZhY2UgaXMgdXNlZCB0byBwcm92aWRlIGluZm9ybWF0aW9uIGFib3V0IGRhdGUgcGlja2VyIHJlZmVyZW5jZSBhbmQgaXRzIHByZXZpb3VzbHkgdmFsaWQgdmFsdWVcbiAqIHdoZW4gb25WYWxpZGF0aW9uRmFpbGVkIGV2ZW50IGlzIGZpcmVkLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIElEYXRlUGlja2VyVmFsaWRhdGlvbkZhaWxlZEV2ZW50QXJncyB7XG4gICAgZGF0ZVBpY2tlcjogSWd4RGF0ZVBpY2tlckNvbXBvbmVudDtcbiAgICBwcmV2VmFsdWU6IERhdGU7XG59XG5cbi8qKlxuICogVGhpcyBpbnRlcmZhY2UgaXMgdXNlZCB0byBjb25maWd1cmUgY2FsZW5kYXIgZm9ybWF0IHZpZXcgb3B0aW9ucy5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJRm9ybWF0Vmlld3Mge1xuICAgIGRheT86IGJvb2xlYW47XG4gICAgbW9udGg/OiBib29sZWFuO1xuICAgIHllYXI/OiBib29sZWFuO1xufVxuXG4vKipcbiAqIFRoaXMgaW50ZXJmYWNlIGlzIHVzZWQgdG8gY29uZmlndXJlIGNhbGVuZGFyIGZvcm1hdCBvcHRpb25zLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIElGb3JtYXRPcHRpb25zIHtcbiAgICBkYXk/OiBzdHJpbmc7XG4gICAgbW9udGg/OiBzdHJpbmc7XG4gICAgd2Vla2RheT86IHN0cmluZztcbiAgICB5ZWFyPzogc3RyaW5nO1xufVxuXG4vKipcbiAqIFRoaXMgZW51bWVyYXRpb24gaXMgdXNlZCB0byBjb25maWd1cmUgdGhlIGRhdGUgcGlja2VyIHRvIG9wZXJhdGUgd2l0aCBwcmUtZGVmaW5lZCBmb3JtYXQgb3B0aW9uIHVzZWQgaW4gQW5ndWxhciBEYXRlUGlwZS5cbiAqICdodHRwczovL2FuZ3VsYXIuaW8vYXBpL2NvbW1vbi9EYXRlUGlwZSdcbiAqICdzaG9ydERhdGUnOiBlcXVpdmFsZW50IHRvICdNL2QveXknICg2LzE1LzE1KS5cbiAqICdtZWRpdW1EYXRlJzogZXF1aXZhbGVudCB0byAnTU1NIGQsIHknIChKdW4gMTUsIDIwMTUpLlxuICogJ2xvbmdEYXRlJzogZXF1aXZhbGVudCB0byAnTU1NTSBkLCB5JyAoSnVuZSAxNSwgMjAxNSkuXG4gKiAnZnVsbERhdGUnOiBlcXVpdmFsZW50IHRvICdFRUVFLCBNTU1NIGQsIHknIChNb25kYXksIEp1bmUgMTUsIDIwMTUpLlxuICovXG5leHBvcnQgZW51bSBQcmVkZWZpbmVkRm9ybWF0T3B0aW9ucyB7XG4gICAgU2hvcnREYXRlID0gJ3Nob3J0RGF0ZScsXG4gICAgTWVkaXVtRGF0ZSA9ICdtZWRpdW1EYXRlJyxcbiAgICBMb25nRGF0ZSA9ICdsb25nRGF0ZScsXG4gICAgRnVsbERhdGUgPSAnZnVsbERhdGUnXG59XG5cbi8qKlxuICogKipJZ25pdGUgVUkgZm9yIEFuZ3VsYXIgRGF0ZSBQaWNrZXIqKiAtXG4gKiBbRG9jdW1lbnRhdGlvbl0oaHR0cHM6Ly93d3cuaW5mcmFnaXN0aWNzLmNvbS9wcm9kdWN0cy9pZ25pdGUtdWktYW5ndWxhci9hbmd1bGFyL2NvbXBvbmVudHMvZGF0ZV9waWNrZXIuaHRtbClcbiAqXG4gKiBUaGUgSWduaXRlIFVJIERhdGUgUGlja2VyIGRpc3BsYXlzIGEgcG9wdXAgY2FsZW5kYXIgdGhhdCBsZXRzIHVzZXJzIHNlbGVjdCBhIHNpbmdsZSBkYXRlLlxuICpcbiAqIEV4YW1wbGU6XG4gKiBgYGBodG1sXG4gKiA8aWd4LWRhdGUtcGlja2VyIFsobmdNb2RlbCldPVwic2VsZWN0ZWREYXRlXCI+PC9pZ3gtZGF0ZS1waWNrZXI+XG4gKiBgYGBcbiAqL1xuQENvbXBvbmVudCh7XG4gICAgcHJvdmlkZXJzOlxuICAgICAgICBbe1xuICAgICAgICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICAgICAgICB1c2VFeGlzdGluZzogSWd4RGF0ZVBpY2tlckNvbXBvbmVudCxcbiAgICAgICAgICAgIG11bHRpOiB0cnVlXG4gICAgICAgIH1dLFxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcbiAgICBzZWxlY3RvcjogJ2lneC1kYXRlLXBpY2tlcicsXG4gICAgdGVtcGxhdGVVcmw6ICdkYXRlLXBpY2tlci5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVzOiBbYFxuICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgfVxuICAgIGBdXG59KVxuZXhwb3J0IGNsYXNzIElneERhdGVQaWNrZXJDb21wb25lbnQgaW1wbGVtZW50cyBJRGF0ZVBpY2tlciwgQ29udHJvbFZhbHVlQWNjZXNzb3IsIEVkaXRvclByb3ZpZGVyLCBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XG4gICAgLyoqXG4gICAgICogQW4gQElucHV0IHByb3BlcnR5IHRoYXQgc2V0cyB0aGUgYElneERhdGVQaWNrZXJDb21wb25lbnRgIGxhYmVsLlxuICAgICAqIFRoZSBkZWZhdWx0IGxhYmVsIGlzICdEYXRlJy5cbiAgICAgKiBgYGBodG1sXG4gICAgICogPGlneC1kYXRlLXBpY2tlciBbbGFiZWxdPVwiQ2FsZW5kYXJcIj48L2lneC1kYXRlLXBpY2tlcj5cbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBsYWJlbCA9ICdEYXRlJztcblxuICAgIC8qKlxuICAgICAqIEFuIEBJbnB1dCBwcm9wZXJ0eSB0aGF0IHNldHMgdGhlIGBJZ3hEYXRlUGlja2VyQ29tcG9uZW50YCBsYWJlbCB2aXNpYmlsaXR5LlxuICAgICAqIEJ5IGRlZmF1bHQgdGhlIHZpc2liaWxpdHkgaXMgc2V0IHRvIHRydWUuXG4gICAgICogPGlneC1kYXRlLXBpY2tlciBbbGFiZWxWaXNpYmlsaXR5XT1cImZhbHNlXCI+PC9pZ3gtZGF0ZS1waWNrZXI+XG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgbGFiZWxWaXNpYmlsaXR5ID0gdHJ1ZTtcblxuICAgIC8qKlxuICAgICAqQW4gQElucHV0IHByb3BlcnR5IHRoYXQgc2V0cyBsb2NhbGVzLiBEZWZhdWx0IGxvY2FsZSBpcyBlbi5cbiAgICAgKmBgYGh0bWxcbiAgICAgKjxpZ3gtZGF0ZS1waWNrZXIgbG9jYWxlPVwiamEtSlBcIiBbdmFsdWVdPVwiZGF0ZVwiPjwvaWd4LWRhdGUtcGlja2VyPlxuICAgICAqYGBgXG4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIGxvY2FsZTogJ2VuJztcblxuICAgIC8qKlxuICAgICAqQW4gQElucHV0IHByb3BlcnR5IHRoYXQgc2V0cyBvbiB3aGljaCBkYXkgdGhlIHdlZWsgc3RhcnRzLlxuICAgICAqYGBgaHRtbFxuICAgICAqPGlneC1kYXRlLXBpY2tlciBbd2Vla1N0YXJ0XT1cIldFRUtEQVlTLkZSSURBWVwiIGNhbmNlbEJ1dHRvbkxhYmVsPVwiY2FuY2VsXCIgdG9kYXlCdXR0b25MYWJlbD1cInRvZGF5XCI+PC9pZ3gtZGF0ZS1waWNrZXI+XG4gICAgICpgYGBcbiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgd2Vla1N0YXJ0OiBXRUVLREFZUyB8IG51bWJlciA9IFdFRUtEQVlTLlNVTkRBWTtcblxuICAgIC8qKlxuICAgICAqUmV0dXJucyB0aGUgZm9ybWF0IG9wdGlvbnMgb2YgdGhlIGBJZ3hEYXRlUGlja2VyQ29tcG9uZW50YC5cbiAgICAgKmBgYHR5cGVzY3JpcHRcbiAgICAgKkBWaWV3Q2hpbGQoXCJNeURhdGVQaWNrZXJcIilcbiAgICAgKnB1YmxpYyBkYXRlUGlja2VyOiBJZ3hEYXRlUGlja2VyQ29tcG9uZW50O1xuICAgICAqbmdBZnRlclZpZXdJbml0KCl7XG4gICAgICogICAgbGV0IGZvcm1hdE9wdGlvbnMgPSB0aGlzLmRhdGVQaWNrZXIuZm9ybWF0T3B0aW9ucztcbiAgICAgKn1cbiAgICAgKmBgYFxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGdldCBmb3JtYXRPcHRpb25zKCk6IElGb3JtYXRPcHRpb25zIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Zvcm1hdE9wdGlvbnM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpTZXRzIHRoZSBmb3JtYXQgb3B0aW9ucyBvZiB0aGUgYElneERhdGVQaWNrZXJDb21wb25lbnRgLlxuICAgICAqYGBgdHlwZXNjcmlwdFxuICAgICAqcHVibGljIE9wdGlvbnM7XG4gICAgICpAVmlld0NoaWxkKFwiTXlEYXRlUGlja2VyXCIpXG4gICAgICpwdWJsaWMgZGF0ZVBpY2tlcjogSWd4RGF0ZVBpY2tlckNvbXBvbmVudDtcbiAgICAgKm5nQWZ0ZXJWaWV3SW5pdCgpe1xuICAgICAqICAgIHRoaXMuT3B0aW9ucyA9IHtcbiAgICAgKiAgICAgICAgZGF5OiBcIm51bWVyaWNcIixcbiAgICAgKiAgICAgICAgbW9udGg6IFwibG9uZ1wiLFxuICAgICAqICAgICAgICB3ZWVrZGF5OiBcImxvbmdcIixcbiAgICAgKiAgICAgICAgeWVhcjogXCJudW1lcmljXCJcbiAgICAgKiAgICB9XG4gICAgICp0aGlzLmRhdGVQaWNrZXIuZm9ybWF0T3B0aW9ucyA9IHRoaXMuT3B0aW9ucztcbiAgICAgKn1cbiAgICAgKmBgYFxuICAgICAqL1xuICAgIHB1YmxpYyBzZXQgZm9ybWF0T3B0aW9ucyhmb3JtYXRPcHRpb25zOiBJRm9ybWF0T3B0aW9ucykge1xuICAgICAgICB0aGlzLl9mb3JtYXRPcHRpb25zID0gT2JqZWN0LmFzc2lnbih0aGlzLl9mb3JtYXRPcHRpb25zLCBmb3JtYXRPcHRpb25zKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlJldHVybnMgdGhlIGRhdGUgZGlzcGxheSBmb3JtYXQgb2YgdGhlIGBJZ3hEYXRlUGlja2VyQ29tcG9uZW50YCBpbiBkcm9wZG93biBtb2RlLlxuICAgICAqYGBgdHlwZXNjcmlwdFxuICAgICAqQFZpZXdDaGlsZChcIk15RGF0ZVBpY2tlclwiKVxuICAgICAqcHVibGljIGRhdGVQaWNrZXI6IElneERhdGVQaWNrZXJDb21wb25lbnQ7XG4gICAgICpuZ0FmdGVyVmlld0luaXQoKXtcbiAgICAgKiAgICBsZXQgZm9ybWF0ID0gdGhpcy5kYXRlUGlja2VyLmZvcm1hdDtcbiAgICAgKn1cbiAgICAgKmBgYFxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGdldCBmb3JtYXQoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuICh0aGlzLl9mb3JtYXQgPT09IHVuZGVmaW5lZCkgPyBQcmVkZWZpbmVkRm9ybWF0T3B0aW9ucy5TaG9ydERhdGUgOiB0aGlzLl9mb3JtYXQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKlNldHMgdGhlIGRhdGUgZm9ybWF0IG9mIHRoZSBgSWd4RGF0ZVBpY2tlckNvbXBvbmVudGAgd2hlbiBpbiBlZGl0YWJsZSBkcm9wZG93biBtb2RlLlxuICAgICpgYGB0eXBlc2NyaXB0XG4gICAgKkBWaWV3Q2hpbGQoXCJNeURhdGVQaWNrZXJcIilcbiAgICAqcHVibGljIGRhdGVQaWNrZXI6IElneERhdGVQaWNrZXJDb21wb25lbnQ7XG4gICAgKnRoaXMuZGF0ZVBpY2tlci5mb3JtYXQgPSAneXl5eS1NLWQnO1xuICAgICp9XG4gICAgKmBgYFxuICAgICovXG4gICAgcHVibGljIHNldCBmb3JtYXQoZm9ybWF0OiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fZm9ybWF0ID0gZm9ybWF0O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqUmV0dXJucyB0aGUgZGF0ZSBtYXNrIG9mIHRoZSBgSWd4RGF0ZVBpY2tlckNvbXBvbmVudGAgd2hlbiBpbiBlZGl0YWJsZSBkcm9wZG93biBtb2RlLlxuICAgICAqYGBgdHlwZXNjcmlwdFxuICAgICAqQFZpZXdDaGlsZChcIk15RGF0ZVBpY2tlclwiKVxuICAgICAqcHVibGljIGRhdGVQaWNrZXI6IElneERhdGVQaWNrZXJDb21wb25lbnQ7XG4gICAgICpuZ0FmdGVyVmlld0luaXQoKXtcbiAgICAgKiAgICBsZXQgbWFzayA9IHRoaXMuZGF0ZVBpY2tlci5tYXNrO1xuICAgICAqfVxuICAgICAqYGBgXG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgbWFzazogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICpSZXR1cm5zIHRoZSBmb3JtYXQgdmlld3Mgb2YgdGhlIGBJZ3hEYXRlUGlja2VyQ29tcG9uZW50YC5cbiAgICAgKmBgYHR5cGVzY3JpcHRcbiAgICAgKkBWaWV3Q2hpbGQoXCJNeURhdGVQaWNrZXJcIilcbiAgICAgKnB1YmxpYyBkYXRlUGlja2VyOiBJZ3hEYXRlUGlja2VyQ29tcG9uZW50O1xuICAgICAqbmdBZnRlclZpZXdJbml0KCl7XG4gICAgICogICAgbGV0IGZvcm1hdFZpZXdzID0gdGhpcy5kYXRlUGlja2VyLmZvcm1hdFZpZXdzO1xuICAgICAqfVxuICAgICAqYGBgXG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZ2V0IGZvcm1hdFZpZXdzKCk6IElGb3JtYXRWaWV3cyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9mb3JtYXRWaWV3cztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlNldHMgdGhlIGZvcm1hdCB2aWV3cyBvZiB0aGUgYElneERhdGVQaWNrZXJDb21wb25lbnRgLlxuICAgICAqYGBgdHlwZXNjcmlwdFxuICAgICAqcHVibGljIFZpZXdzO1xuICAgICAqQFZpZXdDaGlsZChcIk15RGF0ZVBpY2tlclwiKVxuICAgICAqcHVibGljIGRhdGVQaWNrZXI6IElneERhdGVQaWNrZXJDb21wb25lbnQ7XG4gICAgICpuZ0FmdGVyVmlld0luaXQoKXtcbiAgICAgKiAgICB0aGlzLlZpZXdzID0ge2RheTpmYWxzZSwgbW9udGg6IGZhbHNlLCB5ZWFyOmZhbHNlfTtcbiAgICAgKiAgICB0aGlzLmRhdGVQaWNrZXIuZm9ybWF0Vmlld3MgPSB0aGlzLlZpZXdzO1xuICAgICAqfVxuICAgICAqYGBgXG4gICAgICovXG4gICAgcHVibGljIHNldCBmb3JtYXRWaWV3cyhmb3JtYXRWaWV3czogSUZvcm1hdFZpZXdzKSB7XG4gICAgICAgIHRoaXMuX2Zvcm1hdFZpZXdzID0gT2JqZWN0LmFzc2lnbih0aGlzLl9mb3JtYXRWaWV3cywgZm9ybWF0Vmlld3MpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIGRpc2FibGVkIGRhdGVzIGRlc2NyaXB0b3JzLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBsZXQgZGlzYWJsZWREYXRlcyA9IHRoaXMuZGF0ZXBpY2tlci5kaXNhYmxlZERhdGVzO1xuICAgICAqIGBgYFxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGdldCBkaXNhYmxlZERhdGVzKCk6IERhdGVSYW5nZURlc2NyaXB0b3JbXSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kaXNhYmxlZERhdGVzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIGRpc2FibGVkIGRhdGVzJyBkZXNjcmlwdG9ycy5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICpAVmlld0NoaWxkKFwiTXlEYXRlUGlja2VyXCIpXG4gICAgICpwdWJsaWMgZGF0ZVBpY2tlcjogSWd4RGF0ZVBpY2tlckNvbXBvbmVudDtcbiAgICAgKm5nQWZ0ZXJWaWV3SW5pdCgpe1xuICAgICAqICAgIHRoaXMuZGF0ZVBpY2tlci5kaXNhYmxlZERhdGVzID0gW1xuICAgICAqICAgICB7dHlwZTogRGF0ZVJhbmdlVHlwZS5CZXR3ZWVuLCBkYXRlUmFuZ2U6IFtuZXcgRGF0ZShcIjIwMjAtMS0xXCIpLCBuZXcgRGF0ZShcIjIwMjAtMS0xNVwiKV19LFxuICAgICAqICAgICB7dHlwZTogRGF0ZVJhbmdlVHlwZS5XZWVrZW5kc31dO1xuICAgICAqfVxuICAgICAqYGBgXG4gICAgICovXG4gICAgcHVibGljIHNldCBkaXNhYmxlZERhdGVzKHZhbHVlOiBEYXRlUmFuZ2VEZXNjcmlwdG9yW10pIHtcbiAgICAgICAgdGhpcy5fZGlzYWJsZWREYXRlcyA9IHZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIHNwZWNpYWwgZGF0ZXMgZGVzY3JpcHRvcnMuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGxldCBzcGVjaWFsRGF0ZXMgPSB0aGlzLmRhdGVwaWNrZXIuc3BlY2lhbERhdGVzO1xuICAgICAqIGBgYFxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGdldCBzcGVjaWFsRGF0ZXMoKTogRGF0ZVJhbmdlRGVzY3JpcHRvcltdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NwZWNpYWxEYXRlcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBzcGVjaWFsIGRhdGVzJyBkZXNjcmlwdG9ycy5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICpAVmlld0NoaWxkKFwiTXlEYXRlUGlja2VyXCIpXG4gICAgICpwdWJsaWMgZGF0ZVBpY2tlcjogSWd4RGF0ZVBpY2tlckNvbXBvbmVudDtcbiAgICAgKm5nQWZ0ZXJWaWV3SW5pdCgpe1xuICAgICAqICAgIHRoaXMuZGF0ZVBpY2tlci5zcGVjaWFsRGF0ZXMgPSBbXG4gICAgICogICAgIHt0eXBlOiBEYXRlUmFuZ2VUeXBlLkJldHdlZW4sIGRhdGVSYW5nZTogW25ldyBEYXRlKFwiMjAyMC0xLTFcIiksIG5ldyBEYXRlKFwiMjAyMC0xLTE1XCIpXX0sXG4gICAgICogICAgIHt0eXBlOiBEYXRlUmFuZ2VUeXBlLldlZWtlbmRzfV07XG4gICAgICp9XG4gICAgICpgYGBcbiAgICAgKi9cbiAgICBwdWJsaWMgc2V0IHNwZWNpYWxEYXRlcyh2YWx1ZTogRGF0ZVJhbmdlRGVzY3JpcHRvcltdKSB7XG4gICAgICAgIHRoaXMuX3NwZWNpYWxEYXRlcyA9IHZhbHVlO1xuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGdldCBtb2RhbE92ZXJsYXlTZXR0aW5ncygpOiBPdmVybGF5U2V0dGluZ3Mge1xuICAgICAgICByZXR1cm4gdGhpcy5fbW9kYWxPdmVybGF5O1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgbW9kYWxPdmVybGF5U2V0dGluZ3ModmFsdWU6IE92ZXJsYXlTZXR0aW5ncykge1xuICAgICAgICB0aGlzLl9tb2RhbE92ZXJsYXkgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBnZXQgZHJvcERvd25PdmVybGF5U2V0dGluZ3MoKTogT3ZlcmxheVNldHRpbmdzIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Ryb3BEb3duT3ZlcmxheVNldHRpbmdzIHx8IHRoaXMuX2RlZmF1bHREcm9wRG93bk92ZXJsYXlTZXR0aW5ncztcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IGRyb3BEb3duT3ZlcmxheVNldHRpbmdzKHZhbHVlOiBPdmVybGF5U2V0dGluZ3MpIHtcbiAgICAgICAgdGhpcy5fZHJvcERvd25PdmVybGF5U2V0dGluZ3MgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlJldHVybnMgdGhlIGZvcm1hdHRlZCBkYXRlIHdoZW4gYElneERhdGVQaWNrZXJDb21wb25lbnRgIGlzIGluIGRpYWxvZyBtb2RlLlxuICAgICAqYGBgdHlwZXNjcmlwdFxuICAgICAqQFZpZXdDaGlsZChcIk15RGF0ZVBpY2tlclwiKVxuICAgICAqcHVibGljIGRhdGVQaWNrZXI6IElneERhdGVQaWNrZXJDb21wb25lbnQ7XG4gICAgICpwdWJsaWMgc2VsZWN0aW9uKGV2ZW50KXtcbiAgICAgKiAgICBsZXQgc2VsZWN0ZWREYXRlID0gdGhpcy5kYXRlUGlja2VyLmRpc3BsYXlEYXRhO1xuICAgICAqICAgIGFsZXJ0KHNlbGVjdGVkRGF0ZSk7XG4gICAgICp9XG4gICAgICpgYGBcbiAgICAgKmBgYGh0bWxcbiAgICAgKjxpZ3gtZGF0ZS1waWNrZXIgI015RGF0ZVBpY2tlciAob25TZWxlY3Rpb24pPVwic2VsZWN0aW9uKClcIiB0b2RheUJ1dHRvbkxhYmVsPVwidG9kYXlcIj48L2lneC1kYXRlLXBpY2tlcj5cbiAgICAgKmBgYFxuICAgICAqL1xuICAgIHB1YmxpYyBnZXQgZGlzcGxheURhdGEoKTogc3RyaW5nIHtcbiAgICAgICAgaWYgKHRoaXMudmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9jdXN0b21Gb3JtYXRDaGVja2VyKHRoaXMuZm9ybWF0dGVyLCB0aGlzLnZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgIGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyBnZXQgdHJhbnNmb3JtZWREYXRlKCk6IHN0cmluZyB7XG4gICAgICAgIGlmICh0aGlzLl92YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fdHJhbnNmb3JtZWREYXRlID0gKHRoaXMuX2lzSW5FZGl0TW9kZSkgPyB0aGlzLl9nZXRFZGl0b3JEYXRlKHRoaXMuX3ZhbHVlKSA6IHRoaXMuX2dldERpc3BsYXlEYXRlKHRoaXMuX3ZhbHVlKTtcbiAgICAgICAgICAgIHRoaXMuaXNFbXB0eSA9IGZhbHNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fdHJhbnNmb3JtZWREYXRlID0gKHRoaXMuX2lzSW5FZGl0TW9kZSkgPyBEYXRlUGlja2VyVXRpbC5tYXNrVG9Qcm9tcHRDaGFycyh0aGlzLmlucHV0TWFzaykgOiAnJztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fdHJhbnNmb3JtZWREYXRlO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgdHJhbnNmb3JtZWREYXRlKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX3RyYW5zZm9ybWVkRGF0ZSA9IHZhbHVlO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKEBJbmplY3QoSWd4T3ZlcmxheVNlcnZpY2UpIHByaXZhdGUgX292ZXJsYXlTZXJ2aWNlOiBJZ3hPdmVybGF5U2VydmljZSwgcHVibGljIGVsZW1lbnQ6IEVsZW1lbnRSZWYsXG4gICAgICAgIHByaXZhdGUgX2NkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsIHByaXZhdGUgX21vZHVsZVJlZjogTmdNb2R1bGVSZWY8YW55PikgeyB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBpbnB1dCBncm91cCB0ZW1wbGF0ZS5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogbGV0IHRlbXBsYXRlID0gdGhpcy50ZW1wbGF0ZSgpO1xuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hEYXRlUGlja2VyQ29tcG9uZW50XG4gICAgICovXG4gICAgZ2V0IHRlbXBsYXRlKCk6IFRlbXBsYXRlUmVmPGFueT4ge1xuICAgICAgICBpZiAodGhpcy5kYXRlUGlja2VyVGVtcGxhdGVEaXJlY3RpdmUpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRhdGVQaWNrZXJUZW1wbGF0ZURpcmVjdGl2ZS50ZW1wbGF0ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKHRoaXMubW9kZSA9PT0gSW50ZXJhY3Rpb25Nb2RlLkRpYWxvZykgPyB0aGlzLnJlYWRPbmx5RGF0ZVBpY2tlclRlbXBsYXRlIDogdGhpcy5lZGl0YWJsZURhdGVQaWNrZXJUZW1wbGF0ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBjb250ZXh0IHBhc3NlZCB0byB0aGUgaW5wdXQgZ3JvdXAgdGVtcGxhdGUuXG4gICAgICogQG1lbWJlcm9mIElneERhdGVQaWNrZXJDb21wb25lbnRcbiAgICAgKi9cbiAgICBnZXQgY29udGV4dCgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGRpc2FibGVkOiB0aGlzLmRpc2FibGVkLFxuICAgICAgICAgICAgZGlzYWJsZWREYXRlczogdGhpcy5kaXNhYmxlZERhdGVzLFxuICAgICAgICAgICAgZGlzcGxheURhdGE6IHRoaXMuZGlzcGxheURhdGEsXG4gICAgICAgICAgICBmb3JtYXQ6IHRoaXMuZm9ybWF0LFxuICAgICAgICAgICAgaXNTcGluTG9vcDogdGhpcy5pc1NwaW5Mb29wLFxuICAgICAgICAgICAgbGFiZWw6IHRoaXMubGFiZWwsXG4gICAgICAgICAgICBsYWJlbFZpc2liaWxpdHk6IHRoaXMubGFiZWxWaXNpYmlsaXR5LFxuICAgICAgICAgICAgbG9jYWxlOiB0aGlzLmxvY2FsZSxcbiAgICAgICAgICAgIG1hc2s6IHRoaXMubWFzayxcbiAgICAgICAgICAgIG1vZGU6IHRoaXMubW9kZSxcbiAgICAgICAgICAgIHNwZWNpYWxEYXRlczogdGhpcy5zcGVjaWFsRGF0ZXMsXG4gICAgICAgICAgICB2YWx1ZTogdGhpcy52YWx1ZSxcbiAgICAgICAgICAgIG9wZW5EaWFsb2c6ICh0YXJnZXQ/OiBIVE1MRWxlbWVudCkgPT4gdGhpcy5vcGVuRGlhbG9nKHRhcmdldClcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKkFuIEBJbnB1dCBwcm9wZXJ0eSB0aGF0IGdldHMvc2V0cyB0aGUgc2VsZWN0ZWQgZGF0ZS5cbiAgICAgKmBgYHR5cGVzY3JpcHRcbiAgICAgKnB1YmxpYyBkYXRlOiBEYXRlID0gbmV3IERhdGUoKTtcbiAgICAgKmBgYFxuICAgICAqYGBgaHRtbFxuICAgICAqPGlneC1kYXRlLXBpY2tlciBbdmFsdWVdPVwiZGF0ZVwiPjwvaWd4LWRhdGUtcGlja2VyPlxuICAgICAqYGBgXG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZ2V0IHZhbHVlKCk6IERhdGUge1xuICAgICAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCB2YWx1ZShkYXRlOiBEYXRlKSB7XG4gICAgICAgIHRoaXMuX3ZhbHVlID0gZGF0ZTtcbiAgICAgICAgdGhpcy5fb25DaGFuZ2VDYWxsYmFjayhkYXRlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKkFuIEBJbnB1dCBwcm9wZXJ0eSB0aGF0IHNldHMgdGhlIHZhbHVlIG9mIGBpZGAgYXR0cmlidXRlLiBJZiBub3QgcHJvdmlkZWQgaXQgd2lsbCBiZSBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlZC5cbiAgICAgKmBgYGh0bWxcbiAgICAgKjxpZ3gtZGF0ZS1waWNrZXIgW2lkXT1cIidpZ3gtZGF0ZS1waWNrZXItMydcIiBjYW5jZWxCdXR0b25MYWJlbD1cImNhbmNlbFwiIHRvZGF5QnV0dG9uTGFiZWw9XCJ0b2RheVwiPjwvaWd4LWRhdGUtcGlja2VyPlxuICAgICAqYGBgXG4gICAgICovXG4gICAgQEhvc3RCaW5kaW5nKCdhdHRyLmlkJylcbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBpZCA9IGBpZ3gtZGF0ZS1waWNrZXItJHtORVhUX0lEKyt9YDtcblxuICAgIC8qKlxuICAgICAqQW4gQElucHV0IHByb3BlcnR5IHRoYXQgYXBwbGllcyBhIGN1c3RvbSBmb3JtYXR0ZXIgZnVuY3Rpb24gb24gdGhlIHNlbGVjdGVkIG9yIHBhc3NlZCBkYXRlLlxuICAgICAqYGBgdHlwZXNjcmlwdFxuICAgICAqcHVibGljIGRhdGU6IERhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAqcHJpdmF0ZSBkYXlGb3JtYXR0ZXIgPSBuZXcgSW50bC5EYXRlVGltZUZvcm1hdChcImVuXCIsIHsgd2Vla2RheTogXCJsb25nXCIgfSk7XG4gICAgICpwcml2YXRlIG1vbnRoRm9ybWF0dGVyID0gbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQoXCJlblwiLCB7IG1vbnRoOiBcImxvbmdcIiB9KTtcbiAgICAgKnB1YmxpYyBmb3JtYXR0ZXIgPSAoZGF0ZTogRGF0ZSkgPT4geyByZXR1cm4gYFlvdSBzZWxlY3RlZFxuICAgICAqICAgICAgICAgICAgICAgICAgICAgJHt0aGlzLmRheUZvcm1hdHRlci5mb3JtYXQoZGF0ZSl9LFxuICAgICAqICAgICAgICAgICAgICAgICAgICAgJHtkYXRlLmdldERhdGUoKX0gJHt0aGlzLm1vbnRoRm9ybWF0dGVyLmZvcm1hdChkYXRlKX0sXG4gICAgICogICAgICAgICAgICAgICAgICAgICAke2RhdGUuZ2V0RnVsbFllYXIoKX1gO1xuICAgICAqfVxuICAgICAqYGBgXG4gICAgICpgYGBodG1sXG4gICAgICo8aWd4LWRhdGUtcGlja2VyIFt2YWx1ZV09XCJkYXRlXCIgW2Zvcm1hdHRlcl09XCJmb3JtYXR0ZXJcIj48L2lneC1kYXRlLXBpY2tlcj5cbiAgICAgKmBgYFxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGZvcm1hdHRlcjogKHZhbDogRGF0ZSkgPT4gc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICpBbiBASW5wdXQgcHJvcGVydHkgdGhhdCBkaXNhYmxlcyB0aGUgYElneERhdGVQaWNrZXJDb21wb25lbnRgLlxuICAgICAqYGBgaHRtbFxuICAgICAqPGlneC1kYXRlLXBpY2tlciBbZGlzYWJsZWRdPVwiJ3RydWUnXCIgY2FuY2VsQnV0dG9uTGFiZWw9XCJjYW5jZWxcIiB0b2RheUJ1dHRvbkxhYmVsPVwidG9kYXlcIj48L2lneC1kYXRlLXBpY2tlcj5cbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBkaXNhYmxlZDogYm9vbGVhbjtcblxuICAgIC8qKlxuICAgICAqQW4gQElucHV0IHByb3BlcnR5IHRoYXQgc2V0cyB0aGUgb3JpZW50YXRpb24gb2YgdGhlIGBJZ3hEYXRlUGlja2VyQ29tcG9uZW50YCBoZWFkZXIuXG4gICAgICpgYGBodG1sXG4gICAgICo8aWd4LWRhdGUtcGlja2VyIFt2ZXJ0aWNhbF09XCIndHJ1ZSdcIiBjYW5jZWxCdXR0b25MYWJlbD1cImNhbmNlbFwiIHRvZGF5QnV0dG9uTGFiZWw9XCJ0b2RheVwiPjwvaWd4LWRhdGUtcGlja2VyPlxuICAgICAqYGBgXG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgdmVydGljYWwgPSBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqQW4gQElucHV0IHByb3BlcnR5IHRoYXQgcmVuZGVycyB0b2RheSBidXR0b24gd2l0aCBjdXN0b20gbGFiZWwuXG4gICAgICpgYGBodG1sXG4gICAgICo8aWd4LWRhdGUtcGlja2VyIGNhbmNlbEJ1dHRvbkxhYmVsPVwiY2FuY2VsXCIgdG9kYXlCdXR0b25MYWJlbD1cIlRvbW9ycm93XCI+PC9pZ3gtZGF0ZS1waWNrZXI+XG4gICAgICpgYGBcbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyB0b2RheUJ1dHRvbkxhYmVsOiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKkFuIEBJbnB1dCBwcm9wZXJ0eSB0aGF0IHJlbmRlcnMgY2FuY2VsIGJ1dHRvbiB3aXRoIGN1c3RvbSBsYWJlbC5cbiAgICAgKmBgYGh0bWxcbiAgICAgKjxpZ3gtZGF0ZS1waWNrZXIgY2FuY2VsQnV0dG9uTGFiZWw9XCJDbG9zZVwiIHRvZGF5QnV0dG9uTGFiZWw9XCJUb2RheVwiPjwvaWd4LWRhdGUtcGlja2VyPlxuICAgICAqYGBgXG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgY2FuY2VsQnV0dG9uTGFiZWw6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqQW4gQElucHV0IHByb3BlcnR5IHRoYXQgc2V0cyB3aGV0aGVyIGBJZ3hEYXRlUGlja2VyQ29tcG9uZW50YCBpcyBpbiBkaWFsb2cgb3IgZHJvcCBkb3duIG1vZGUuXG4gICAgICpgYGBodG1sXG4gICAgICo8aWd4LWRhdGUtcGlja2VyIG1vZGU9XCJkcm9wZG93blwiPjwvaWd4LWRhdGUtcGlja2VyPlxuICAgICAqYGBgXG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgbW9kZSA9IEludGVyYWN0aW9uTW9kZS5EaWFsb2c7XG5cbiAgICAvKipcbiAgICAgKkFuIEBJbnB1dCBwcm9wZXJ0eSB0aGF0IHNldHMgd2hldGhlciB0aGUgYElneERhdGVQaWNrZXJDb21wb25lbnRgIGRhdGUgcGFydHMgd291bGQgc3BpbiBjb250aW51b3VzbHkgb3Igc3RvcCB3aGVuIG1pbi9tYXggaXMgcmVhY2hlZC5cbiAgICAgKmBgYGh0bWxcbiAgICAgKjxpZ3gtZGF0ZS1waWNrZXIgW2lzU3Bpbkxvb3BdPVwiZmFsc2VcIj48L2lneC1kYXRlLXBpY2tlcj5cbiAgICAgKmBgYFxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGlzU3Bpbkxvb3AgPSB0cnVlO1xuXG4gICAgLyoqXG4gICAgICogRGV0ZXJtaW5lcyB0aGUgY29udGFpbmVyIHRoZSBwb3B1cCBlbGVtZW50IHNob3VsZCBiZSBhdHRhY2hlZCB0by5cbiAgICAgKlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8ZGl2IGlneE92ZXJsYXlPdXRsZXQgI291dGxldD1cIm92ZXJsYXktb3V0bGV0XCI+PC9kaXY+XG4gICAgICogLy8uLlxuICAgICAqIDxpZ3gtZGF0ZS1waWNrZXIgW291dGxldF09XCJvdXRsZXRcIj48L2lneC1kYXRlLXBpY2tlcj5cbiAgICAgKiAvLy4uXG4gICAgICogYGBgXG4gICAgICogV2hlcmUgYG91dGxldGAgaXMgYW4gaW5zdGFuY2Ugb2YgYElneE92ZXJsYXlPdXRsZXREaXJlY3RpdmVgIG9yIGFuIGBFbGVtZW50UmVmYC5cbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBvdXRsZXQ6IElneE92ZXJsYXlPdXRsZXREaXJlY3RpdmUgfCBFbGVtZW50UmVmO1xuXG4gICAgLyoqXG4gICAgICogQGRlcHJlY2F0ZWQgVXNlICdvbk9wZW5lZCcgaW5zdGVhZC5cbiAgICAgKkFuIGV2ZW50IHRoYXQgaXMgZW1pdHRlZCB3aGVuIHRoZSBgSWd4RGF0ZVBpY2tlckNvbXBvbmVudGAgY2FsZW5kYXIgaXMgb3BlbmVkLlxuICAgICAqYGBgdHlwZXNjcmlwdFxuICAgICAqcHVibGljIG9wZW4oZXZlbnQpe1xuICAgICAqICAgIGFsZXJ0KFwiVGhlIGRhdGUtcGlja2VyIGNhbGVuZGFyIGhhcyBiZWVuIG9wZW5lZCFcIik7XG4gICAgICp9XG4gICAgICpgYGBcbiAgICAgKmBgYGh0bWxcbiAgICAgKjxpZ3gtZGF0ZS1waWNrZXIgKG9uT3Blbik9XCJvcGVuKCRldmVudClcIiBjYW5jZWxCdXR0b25MYWJlbD1cImNhbmNlbFwiIHRvZGF5QnV0dG9uTGFiZWw9XCJ0b2RheVwiPjwvaWd4LWRhdGUtcGlja2VyPlxuICAgICAqYGBgXG4gICAgICovXG4gICAgQERlcHJlY2F0ZVByb3BlcnR5KGAnb25PcGVuJyBAT3V0cHV0IHByb3BlcnR5IGlzIGRlcHJlY2F0ZWQuIFVzZSAnb25PcGVuZWQnIGluc3RlYWQuYClcbiAgICBAT3V0cHV0KClcbiAgICBwdWJsaWMgZ2V0IG9uT3BlbigpOiBFdmVudEVtaXR0ZXI8SWd4RGF0ZVBpY2tlckNvbXBvbmVudD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fb25PcGVuO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgb25PcGVuKHZhbDogRXZlbnRFbWl0dGVyPElneERhdGVQaWNrZXJDb21wb25lbnQ+KSB7XG4gICAgICAgIHRoaXMuX29uT3BlbiA9IHZhbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKkFuIGV2ZW50IHRoYXQgaXMgZW1pdHRlZCB3aGVuIHRoZSBgSWd4RGF0ZVBpY2tlckNvbXBvbmVudGAgY2FsZW5kYXIgaXMgb3BlbmVkLlxuICAgICovXG4gICAgQE91dHB1dCgpXG4gICAgcHVibGljIG9uT3BlbmVkID0gbmV3IEV2ZW50RW1pdHRlcjxJZ3hEYXRlUGlja2VyQ29tcG9uZW50PigpO1xuXG4gICAgLyoqXG4gICAgICogQGRlcHJlY2F0ZWQgVXNlICdvbkNsb3NlZCcgaW5zdGVhZC5cbiAgICAgKlwiQW4gZXZlbnQgdGhhdCBpcyBlbWl0dGVkIHdoZW4gdGhlIGBJZ3hEYXRlUGlja2VyQ29tcG9uZW50YCBpcyBjbG9zZWQuXG4gICAgICpgYGB0eXBlc2NyaXB0XG4gICAgICpwdWJsaWMgY2xvc2UoZXZlbnQpe1xuICAgICAqICAgIGFsZXJ0KFwiVGhlIGRhdGUtcGlja2VyIGhhcyBiZWVuIGNsb3NlZCFcIik7XG4gICAgICp9XG4gICAgICpgYGBcbiAgICAgKmBgYGh0bWxcbiAgICAgKjxpZ3gtZGF0ZS1waWNrZXIgKG9uQ2xvc2UpPVwiY2xvc2UoJGV2ZW50KVwiIGNhbmNlbEJ1dHRvbkxhYmVsPVwiY2FuY2VsXCIgdG9kYXlCdXR0b25MYWJlbD1cInRvZGF5XCI+PC9pZ3gtZGF0ZS1waWNrZXI+XG4gICAgICpgYGBcbiAgICAgKi9cbiAgICBARGVwcmVjYXRlUHJvcGVydHkoYCdvbkNsb3NlJyBAT3V0cHV0IHByb3BlcnR5IGlzIGRlcHJlY2F0ZWQuIFVzZSAnb25DbG9zZWQnIGluc3RlYWQuYClcbiAgICBAT3V0cHV0KClcbiAgICBwdWJsaWMgZ2V0IG9uQ2xvc2UoKTogRXZlbnRFbWl0dGVyPElneERhdGVQaWNrZXJDb21wb25lbnQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX29uQ2xvc2U7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBvbkNsb3NlKHZhbDogRXZlbnRFbWl0dGVyPElneERhdGVQaWNrZXJDb21wb25lbnQ+KSB7XG4gICAgICAgIHRoaXMuX29uQ2xvc2UgPSB2YWw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpBbiBldmVudCB0aGF0IGlzIGVtaXR0ZWQgYWZ0ZXIgdGhlIGBJZ3hEYXRlUGlja2VyQ29tcG9uZW50YCBpcyBjbG9zZWQuXG4gICAgKi9cbiAgICBAT3V0cHV0KClcbiAgICBwdWJsaWMgb25DbG9zZWQgPSBuZXcgRXZlbnRFbWl0dGVyPElneERhdGVQaWNrZXJDb21wb25lbnQ+KCk7XG5cbiAgICAvKipcbiAgICAgKiBBbiBldmVudCB0aGF0IGlzIGVtaXR0ZWQgd2hlbiB0aGUgYElneERhdGVQaWNrZXJDb21wb25lbnRgIGlzIGJlaW5nIGNsb3NlZC5cbiAgICAgKi9cbiAgICBAT3V0cHV0KClcbiAgICBwdWJsaWMgb25DbG9zaW5nID0gbmV3IEV2ZW50RW1pdHRlcjxDYW5jZWxhYmxlQnJvd3NlckV2ZW50QXJncz4oKTtcblxuICAgIC8qKlxuICAgICAqQW4gQE91dHB1dCBwcm9wZXJ0eSB0aGF0IGlzIGZpcmVkIHdoZW4gc2VsZWN0aW9uIGlzIG1hZGUgaW4gdGhlIGNhbGVuZGFyLlxuICAgICAqYGBgdHlwZXNjcmlwdFxuICAgICAqcHVibGljIHNlbGVjdGlvbihldmVudCl7XG4gICAgICogICAgYWxlcnQoXCJBIGRhdGUgaGFzIGJlZW4gc2VsZWN0ZWQhXCIpO1xuICAgICAqfVxuICAgICAqYGBgXG4gICAgICpgYGBodG1sXG4gICAgICo8aWd4LWRhdGUtcGlja2VyIChvblNlbGVjdGlvbik9XCJzZWxlY3Rpb24oJGV2ZW50KVwiIGNhbmNlbEJ1dHRvbkxhYmVsPVwiY2FuY2VsXCIgdG9kYXlCdXR0b25MYWJlbD1cInRvZGF5XCI+PC9pZ3gtZGF0ZS1waWNrZXI+XG4gICAgICpgYGBcbiAgICAgKi9cbiAgICBAT3V0cHV0KClcbiAgICBwdWJsaWMgb25TZWxlY3Rpb24gPSBuZXcgRXZlbnRFbWl0dGVyPERhdGU+KCk7XG5cbiAgICAvKipcbiAgICAqQW4gQE91dHB1dCBwcm9wZXJ0eSB0aGF0IGZpcmVzIHdoZW4gdGhlIHVzZXIgdHlwZXMvc3BpbnMgdG8gYSBkaXNhYmxlZCBkYXRlIGluIHRoZSBkYXRlLXBpY2tlciBlZGl0b3IuXG4gICAgKmBgYHR5cGVzY3JpcHRcbiAgICAqcHVibGljIG9uRGlzYWJsZWREYXRlKGV2ZW50KXtcbiAgICAqICAgIGFsZXJ0KFwiVGhpcyBkYXRlIGlzIGRpc2FibGVkIVwiKTtcbiAgICAqfVxuICAgICpgYGBcbiAgICAqYGBgaHRtbFxuICAgICo8aWd4LWRhdGUtcGlja2VyIChvbkRpc2FibGVkRGF0ZSk9XCJvbkRpc2FibGVkRGF0ZSgkZXZlbnQpXCI+PC9pZ3gtZGF0ZS1waWNrZXI+XG4gICAgKmBgYFxuICAgICovXG4gICAgQE91dHB1dCgpXG4gICAgcHVibGljIG9uRGlzYWJsZWREYXRlID0gbmV3IEV2ZW50RW1pdHRlcjxJRGF0ZVBpY2tlckRpc2FibGVkRGF0ZUV2ZW50QXJncz4oKTtcblxuICAgIC8qKlxuICAgICpBbiBAT3V0cHV0IHByb3BlcnR5IHRoYXQgZmlyZXMgd2hlbiB0aGUgdXNlciB0eXBlcy9zcGlucyBpbnZhbGlkIGRhdGUgaW4gdGhlIGRhdGUtcGlja2VyIGVkaXRvci5cbiAgICAqYGBgdHlwZXNjcmlwdFxuICAgICpwdWJsaWMgb25WYWxpZGF0aW9uRmFpbGVkKGV2ZW50KXtcbiAgICAgICAgKiAgICBhbGVydChcIlRoaXMgZGF0ZSBpcyBub3QgdmFsaWQhXCIpO1xuICAgICAgICAqfVxuICAgICAgICAqYGBgXG4gICAgICAgICpgYGBodG1sXG4gICAgICAgICo8aWd4LWRhdGUtcGlja2VyIChvblZhbGlkYXRpb25GYWlsZWQpPVwib25WYWxpZGF0aW9uRmFpbGVkKCRldmVudClcIj48L2lneC1kYXRlLXBpY2tlcj5cbiAgICAgICAgKmBgYFxuICAgICAgICAqL1xuICAgIEBPdXRwdXQoKVxuICAgIHB1YmxpYyBvblZhbGlkYXRpb25GYWlsZWQgPSBuZXcgRXZlbnRFbWl0dGVyPElEYXRlUGlja2VyVmFsaWRhdGlvbkZhaWxlZEV2ZW50QXJncz4oKTtcblxuICAgIC8qXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIEBWaWV3Q2hpbGQoJ3JlYWRPbmx5RGF0ZVBpY2tlclRlbXBsYXRlJywgeyByZWFkOiBUZW1wbGF0ZVJlZiwgc3RhdGljOiB0cnVlIH0pXG4gICAgcHJvdGVjdGVkIHJlYWRPbmx5RGF0ZVBpY2tlclRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gICAgLypcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgQFZpZXdDaGlsZCgnZWRpdGFibGVEYXRlUGlja2VyVGVtcGxhdGUnLCB7IHJlYWQ6IFRlbXBsYXRlUmVmLCBzdGF0aWM6IHRydWUgfSlcbiAgICBwcm90ZWN0ZWQgZWRpdGFibGVEYXRlUGlja2VyVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgICAvKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBAVmlld0NoaWxkKElneElucHV0R3JvdXBDb21wb25lbnQsIHsgc3RhdGljOiBmYWxzZSB9KVxuICAgIHByb3RlY3RlZCBpbnB1dEdyb3VwOiBJZ3hJbnB1dEdyb3VwQ29tcG9uZW50O1xuXG4gICAgLypcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgQFZpZXdDaGlsZCgnZWRpdGFibGVJbnB1dCcsIHsgcmVhZDogRWxlbWVudFJlZiwgc3RhdGljOiBmYWxzZSB9KVxuICAgIHByb3RlY3RlZCBlZGl0YWJsZUlucHV0OiBFbGVtZW50UmVmO1xuXG4gICAgLypcbiAgICAqIEBoaWRkZW5cbiAgICAqL1xuICAgIEBWaWV3Q2hpbGQoJ3JlYWRvbmx5SW5wdXQnLCB7IHJlYWQ6IEVsZW1lbnRSZWYsIHN0YXRpYzogZmFsc2UgfSlcbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHlJbnB1dDogRWxlbWVudFJlZjtcblxuICAgIC8qXG4gICAgKiBAaGlkZGVuXG4gICAgKi9cbiAgICBAQ29udGVudENoaWxkKElneElucHV0RGlyZWN0aXZlLCB7IHN0YXRpYzogZmFsc2UgfSlcbiAgICBwcm90ZWN0ZWQgaW5wdXQ6IElneElucHV0RGlyZWN0aXZlO1xuXG4gICAgLyoqXG4gICAgICpAaGlkZGVuXG4gICAgICovXG4gICAgQENvbnRlbnRDaGlsZChJZ3hEYXRlUGlja2VyVGVtcGxhdGVEaXJlY3RpdmUsIHsgcmVhZDogSWd4RGF0ZVBpY2tlclRlbXBsYXRlRGlyZWN0aXZlLCBzdGF0aWM6IHRydWUgfSlcbiAgICBwcm90ZWN0ZWQgZGF0ZVBpY2tlclRlbXBsYXRlRGlyZWN0aXZlOiBJZ3hEYXRlUGlja2VyVGVtcGxhdGVEaXJlY3RpdmU7XG5cbiAgICAvKipcbiAgICAgKkBoaWRkZW5cbiAgICAgKi9cbiAgICBAQ29udGVudENoaWxkKElneENhbGVuZGFySGVhZGVyVGVtcGxhdGVEaXJlY3RpdmUsIHsgcmVhZDogSWd4Q2FsZW5kYXJIZWFkZXJUZW1wbGF0ZURpcmVjdGl2ZSwgc3RhdGljOiB0cnVlIH0pXG4gICAgcHVibGljIGhlYWRlclRlbXBsYXRlOiBJZ3hDYWxlbmRhckhlYWRlclRlbXBsYXRlRGlyZWN0aXZlO1xuXG4gICAgLyoqXG4gICAgICpAaGlkZGVuXG4gICAgICovXG4gICAgQENvbnRlbnRDaGlsZChJZ3hDYWxlbmRhclN1YmhlYWRlclRlbXBsYXRlRGlyZWN0aXZlLCB7IHJlYWQ6IElneENhbGVuZGFyU3ViaGVhZGVyVGVtcGxhdGVEaXJlY3RpdmUsIHN0YXRpYzogdHJ1ZSB9KVxuICAgIHB1YmxpYyBzdWJoZWFkZXJUZW1wbGF0ZTogSWd4Q2FsZW5kYXJTdWJoZWFkZXJUZW1wbGF0ZURpcmVjdGl2ZTtcblxuICAgIC8qKlxuICAgICAqQGhpZGRlblxuICAgICAqL1xuICAgIEBDb250ZW50Q2hpbGQoSWd4RGF0ZVBpY2tlckFjdGlvbnNEaXJlY3RpdmUsIHsgcmVhZDogSWd4RGF0ZVBpY2tlckFjdGlvbnNEaXJlY3RpdmUsIHN0YXRpYzogZmFsc2UgfSlcbiAgICBwdWJsaWMgZGF0ZVBpY2tlckFjdGlvbnNEaXJlY3RpdmU6IElneERhdGVQaWNrZXJBY3Rpb25zRGlyZWN0aXZlO1xuXG4gICAgcHVibGljIGNhbGVuZGFyOiBJZ3hDYWxlbmRhckNvbXBvbmVudDtcbiAgICBwdWJsaWMgaGFzSGVhZGVyID0gdHJ1ZTtcbiAgICBwdWJsaWMgY29sbGFwc2VkID0gdHJ1ZTtcbiAgICBwdWJsaWMgZGlzcGxheVZhbHVlUGlwZSA9IG5ldyBEYXRlUGlja2VyRGlzcGxheVZhbHVlUGlwZSh0aGlzKTtcbiAgICBwdWJsaWMgaW5wdXRWYWx1ZVBpcGUgPSBuZXcgRGF0ZVBpY2tlcklucHV0VmFsdWVQaXBlKHRoaXMpO1xuICAgIHB1YmxpYyBkYXRlRm9ybWF0UGFydHMgPSBbXTtcbiAgICBwdWJsaWMgcmF3RGF0ZVN0cmluZzogc3RyaW5nO1xuICAgIHB1YmxpYyBpbnB1dE1hc2s6IHN0cmluZztcbiAgICBwdWJsaWMgaXNFbXB0eSA9IHRydWU7XG4gICAgcHVibGljIGludmFsaWREYXRlID0gJyc7XG5cbiAgICBwcml2YXRlIHJlYWRvbmx5IHNwaW5EZWx0YSA9IDE7XG4gICAgcHJpdmF0ZSByZWFkb25seSBkZWZhdWx0TG9jYWxlID0gJ2VuJztcblxuICAgIHByaXZhdGUgX2Zvcm1hdE9wdGlvbnMgPSB7XG4gICAgICAgIGRheTogJ251bWVyaWMnLFxuICAgICAgICBtb250aDogJ3Nob3J0JyxcbiAgICAgICAgd2Vla2RheTogJ3Nob3J0JyxcbiAgICAgICAgeWVhcjogJ251bWVyaWMnXG4gICAgfTtcbiAgICBwcml2YXRlIF9mb3JtYXRWaWV3cyA9IHtcbiAgICAgICAgZGF5OiBmYWxzZSxcbiAgICAgICAgbW9udGg6IHRydWUsXG4gICAgICAgIHllYXI6IGZhbHNlXG4gICAgfTtcbiAgICBwcml2YXRlIF9kZXN0cm95JCA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XG4gICAgcHJpdmF0ZSBfY29tcG9uZW50SUQ6IHN0cmluZztcbiAgICBwcml2YXRlIF9mb3JtYXQ6IHN0cmluZztcbiAgICBwcml2YXRlIF92YWx1ZTogRGF0ZTtcbiAgICBwcml2YXRlIF9pc0luRWRpdE1vZGU6IGJvb2xlYW47XG4gICAgcHJpdmF0ZSBfZGlzYWJsZWREYXRlczogRGF0ZVJhbmdlRGVzY3JpcHRvcltdID0gbnVsbDtcbiAgICBwcml2YXRlIF9zcGVjaWFsRGF0ZXM6IERhdGVSYW5nZURlc2NyaXB0b3JbXSA9IG51bGw7XG4gICAgcHJpdmF0ZSBfbW9kYWxPdmVybGF5OiBPdmVybGF5U2V0dGluZ3M7XG4gICAgcHJpdmF0ZSBfZHJvcERvd25PdmVybGF5U2V0dGluZ3M6IE92ZXJsYXlTZXR0aW5ncztcbiAgICBwcml2YXRlIF9wb3NpdGlvblNldHRpbmdzOiBQb3NpdGlvblNldHRpbmdzO1xuICAgIHByaXZhdGUgX2RlZmF1bHREcm9wRG93bk92ZXJsYXlTZXR0aW5nczogT3ZlcmxheVNldHRpbmdzO1xuICAgIHByaXZhdGUgX21vZGFsT3ZlcmxheVNldHRpbmdzOiBPdmVybGF5U2V0dGluZ3M7XG4gICAgcHJpdmF0ZSBfdHJhbnNmb3JtZWREYXRlO1xuICAgIHByaXZhdGUgX29uT3BlbiA9IG5ldyBFdmVudEVtaXR0ZXI8SWd4RGF0ZVBpY2tlckNvbXBvbmVudD4oKTtcbiAgICBwcml2YXRlIF9vbkNsb3NlID0gbmV3IEV2ZW50RW1pdHRlcjxJZ3hEYXRlUGlja2VyQ29tcG9uZW50PigpO1xuXG4gICAgLyoqXG4gICAgKiBAaGlkZGVuXG4gICAgKi9cbiAgICBASG9zdExpc3RlbmVyKCdrZXlkb3duLnNwYWNlYmFyJywgWyckZXZlbnQnXSlcbiAgICBASG9zdExpc3RlbmVyKCdrZXlkb3duLnNwYWNlJywgWyckZXZlbnQnXSlcbiAgICBwdWJsaWMgb25TcGFjZUNsaWNrKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgICAgIHRoaXMub3BlbkRpYWxvZyh0aGlzLmdldElucHV0R3JvdXBFbGVtZW50KCkpO1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqTWV0aG9kIHRoYXQgc2V0cyB0aGUgc2VsZWN0ZWQgZGF0ZS5cbiAgICAgKmBgYHR5cGVzY3JpcHRcbiAgICAgKnB1YmxpYyBkYXRlID0gbmV3IERhdGUoKTtcbiAgICAgKkBWaWV3Q2hpbGQoXCJNeURhdGVQaWNrZXJcIilcbiAgICAgKnB1YmxpYyBkYXRlUGlja2VyOiBJZ3hEYXRlUGlja2VyQ29tcG9uZW50O1xuICAgICAqbmdBZnRlclZpZXdJbml0KCl7XG4gICAgICogICAgdGhpcy5kYXRlUGlja2VyLndyaXRlVmFsdWUodGhpcy5kYXRlKTtcbiAgICAgKn1cbiAgICAgKmBgYFxuICAgICAqQHBhcmFtIHZhbHVlIFRoZSBkYXRlIHlvdSB3YW50IHRvIHNlbGVjdC5cbiAgICAgKkBtZW1iZXJPZiB7QGxpbmsgSWd4RGF0ZVBpY2tlckNvbXBvbmVudH1cbiAgICAgKi9cbiAgICBwdWJsaWMgd3JpdGVWYWx1ZSh2YWx1ZTogRGF0ZSkge1xuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICAgIHRoaXMuX2Nkci5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKkBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVnaXN0ZXJPbkNoYW5nZShmbjogKF86IERhdGUpID0+IHZvaWQpIHsgdGhpcy5fb25DaGFuZ2VDYWxsYmFjayA9IGZuOyB9XG5cbiAgICAvKipcbiAgICAgKkBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHZvaWQpIHsgdGhpcy5fb25Ub3VjaGVkQ2FsbGJhY2sgPSBmbjsgfVxuXG4gICAgLyoqIEBoaWRkZW4gKi9cbiAgICBwdWJsaWMgZ2V0RWRpdEVsZW1lbnQoKSB7XG4gICAgICAgIGNvbnN0IGlucHV0RWxlbWVudCA9IHRoaXMuZWRpdGFibGVJbnB1dCB8fCB0aGlzLnJlYWRvbmx5SW5wdXQgfHwgdGhpcy5pbnB1dDtcbiAgICAgICAgcmV0dXJuIChpbnB1dEVsZW1lbnQpID8gaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQgOiBudWxsO1xuICAgIH1cblxuICAgIC8qKiBAaGlkZGVuICovXG4gICAgcHVibGljIGdldElucHV0R3JvdXBFbGVtZW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pbnB1dEdyb3VwID8gdGhpcy5pbnB1dEdyb3VwLmVsZW1lbnQubmF0aXZlRWxlbWVudCA6IG51bGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLl9wb3NpdGlvblNldHRpbmdzID0ge1xuICAgICAgICAgICAgb3BlbkFuaW1hdGlvbjogZmFkZUluLFxuICAgICAgICAgICAgY2xvc2VBbmltYXRpb246IGZhZGVPdXRcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLl9kZWZhdWx0RHJvcERvd25PdmVybGF5U2V0dGluZ3MgPSB7XG4gICAgICAgICAgICBjbG9zZU9uT3V0c2lkZUNsaWNrOiB0cnVlLFxuICAgICAgICAgICAgbW9kYWw6IGZhbHNlLFxuICAgICAgICAgICAgc2Nyb2xsU3RyYXRlZ3k6IG5ldyBBYnNvbHV0ZVNjcm9sbFN0cmF0ZWd5KCksXG4gICAgICAgICAgICBwb3NpdGlvblN0cmF0ZWd5OiBuZXcgQXV0b1Bvc2l0aW9uU3RyYXRlZ3kodGhpcy5fcG9zaXRpb25TZXR0aW5ncyksXG4gICAgICAgICAgICBvdXRsZXQ6IHRoaXMub3V0bGV0XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5fbW9kYWxPdmVybGF5U2V0dGluZ3MgPSB7XG4gICAgICAgICAgICBjbG9zZU9uT3V0c2lkZUNsaWNrOiB0cnVlLFxuICAgICAgICAgICAgbW9kYWw6IHRydWUsXG4gICAgICAgICAgICBvdXRsZXQ6IHRoaXMub3V0bGV0XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5fb3ZlcmxheVNlcnZpY2Uub25PcGVuaW5nLnBpcGUoXG4gICAgICAgICAgICBmaWx0ZXIoKG92ZXJsYXkpID0+IG92ZXJsYXkuaWQgPT09IHRoaXMuX2NvbXBvbmVudElEKSxcbiAgICAgICAgICAgIHRha2VVbnRpbCh0aGlzLl9kZXN0cm95JCkpLnN1YnNjcmliZSgoZXZlbnRBcmdzKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5fb25PcGVuaW5nKGV2ZW50QXJncyk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLl9vdmVybGF5U2VydmljZS5vbk9wZW5lZC5waXBlKFxuICAgICAgICAgICAgZmlsdGVyKChvdmVybGF5KSA9PiBvdmVybGF5LmlkID09PSB0aGlzLl9jb21wb25lbnRJRCksXG4gICAgICAgICAgICB0YWtlVW50aWwodGhpcy5fZGVzdHJveSQpKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuX29uT3BlbmVkKCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLl9vdmVybGF5U2VydmljZS5vbkNsb3NlZC5waXBlKFxuICAgICAgICAgICAgZmlsdGVyKG92ZXJsYXkgPT4gb3ZlcmxheS5pZCA9PT0gdGhpcy5fY29tcG9uZW50SUQpLFxuICAgICAgICAgICAgdGFrZVVudGlsKHRoaXMuX2Rlc3Ryb3kkKSkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLl9vbkNsb3NlZCgpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5fb3ZlcmxheVNlcnZpY2Uub25DbG9zaW5nLnBpcGUoXG4gICAgICAgICAgICBmaWx0ZXIob3ZlcmxheSA9PiBvdmVybGF5LmlkID09PSB0aGlzLl9jb21wb25lbnRJRCksXG4gICAgICAgICAgICB0YWtlVW50aWwodGhpcy5fZGVzdHJveSQpKS5zdWJzY3JpYmUoKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5vbkNsb3NpbmcuZW1pdChldmVudCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICBpZiAodGhpcy5tb2RlID09PSBJbnRlcmFjdGlvbk1vZGUuRHJvcERvd24pIHtcbiAgICAgICAgICAgIHRoaXMuZGF0ZUZvcm1hdFBhcnRzID0gRGF0ZVBpY2tlclV0aWwucGFyc2VEYXRlRm9ybWF0KHRoaXMubWFzaywgdGhpcy5sb2NhbGUpO1xuICAgICAgICAgICAgaWYgKHRoaXMubWFzayA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tYXNrID0gRGF0ZVBpY2tlclV0aWwuZ2V0TWFzayh0aGlzLmRhdGVGb3JtYXRQYXJ0cyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmlucHV0TWFzayA9IERhdGVQaWNrZXJVdGlsLmdldElucHV0TWFzayh0aGlzLmRhdGVGb3JtYXRQYXJ0cyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgICAgIGlmICh0aGlzLm1vZGUgPT09IEludGVyYWN0aW9uTW9kZS5Ecm9wRG93biAmJiB0aGlzLmVkaXRhYmxlSW5wdXQpIHtcbiAgICAgICAgICAgIGZyb21FdmVudCh0aGlzLmVkaXRhYmxlSW5wdXQubmF0aXZlRWxlbWVudCwgJ2tleWRvd24nKS5waXBlKFxuICAgICAgICAgICAgICAgIHRocm90dGxlKCgpID0+IGludGVydmFsKDAsIGFuaW1hdGlvbkZyYW1lU2NoZWR1bGVyKSksXG4gICAgICAgICAgICAgICAgdGFrZVVudGlsKHRoaXMuX2Rlc3Ryb3kkKVxuICAgICAgICAgICAgKS5zdWJzY3JpYmUoKHJlcykgPT4gdGhpcy5vbktleURvd24ocmVzKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKkBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLl9jb21wb25lbnRJRCkge1xuICAgICAgICAgICAgdGhpcy5fb3ZlcmxheVNlcnZpY2UuaGlkZSh0aGlzLl9jb21wb25lbnRJRCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fZGVzdHJveSQubmV4dCh0cnVlKTtcbiAgICAgICAgdGhpcy5fZGVzdHJveSQuY29tcGxldGUoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlNlbGVjdHMgdG9kYXkncyBkYXRlIGZyb20gY2FsZW5kYXIgYW5kIGNoYW5nZSB0aGUgaW5wdXQgZmllbGQgdmFsdWUsIEBjYWxlbmRhci52aWV3RGF0ZSBhbmQgQGNhbGVuZGFyLnZhbHVlLlxuICAgICAqYGBgdHlwZXNjcmlwdFxuICAgICAqQFZpZXdDaGlsZChcIk15RGF0ZVBpY2tlclwiKVxuICAgICAqcHVibGljIGRhdGVQaWNrZXI6IElneERhdGVQaWNrZXJDb21wb25lbnQ7XG4gICAgICpuZ0FmdGVyVmlld0luaXQoKXtcbiAgICAgKnRoaXMuZGF0ZVBpY2tlci50cmlnZ2VyVG9kYXlTZWxlY3Rpb24oKTtcbiAgICAgKn1cbiAgICAgKmBgYFxuICAgICAqQG1lbWJlck9mIHtAbGluayBJZ3hEYXRlUGlja2VyQ29tcG9uZW50fVxuICAgICAqL1xuICAgIHB1YmxpYyB0cmlnZ2VyVG9kYXlTZWxlY3Rpb24oKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoRGF0ZS5ub3coKSk7XG4gICAgICAgIHRoaXMuaGFuZGxlU2VsZWN0aW9uKHRvZGF5KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGFuZ2UgdGhlIGNhbGVuZGFyIHNlbGVjdGlvbiBhbmQgY2FsbGluZyB0aGlzIG1ldGhvZCB3aWxsIGVtaXQgdGhlIEBjYWxlbmRhci5vblNlbGVjdGlvbiBldmVudCxcbiAgICAgKiB3aGljaCB3aWxsIGZpcmUgQGhhbmRsZVNlbGVjdGlvbiBtZXRob2QuXG4gICAgICpgYGB0eXBlc2NyaXB0XG4gICAgICpAVmlld0NoaWxkKFwiTXlEYXRlUGlja2VyXCIpXG4gICAgICpwdWJsaWMgZGF0ZVBpY2tlcjogSWd4RGF0ZVBpY2tlckNvbXBvbmVudDtcbiAgICAgKm5nQWZ0ZXJWaWV3SW5pdCgpe1xuICAgICAqdGhpcy5kYXRlUGlja2VyLnNlbGVjdERhdGUodGhpcy5kYXRlKTtcbiAgICAgKn1cbiAgICAgKiBgYGBcbiAgICAgKiBAcGFyYW0gZGF0ZSBwYXNzZWQgZGF0ZSB0aGF0IGhhcyB0byBiZSBzZXQgdG8gdGhlIGNhbGVuZGFyLlxuICAgICAqIEBtZW1iZXJPZiB7QGxpbmsgSWd4RGF0ZVBpY2tlckNvbXBvbmVudH1cbiAgICAgKi9cbiAgICBwdWJsaWMgc2VsZWN0RGF0ZShkYXRlOiBEYXRlKTogdm9pZCB7XG4gICAgICAgIHRoaXMudmFsdWUgPSBkYXRlO1xuICAgICAgICB0aGlzLm9uU2VsZWN0aW9uLmVtaXQoZGF0ZSk7XG4gICAgICAgIHRoaXMuX29uQ2hhbmdlQ2FsbGJhY2soZGF0ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVzZWxlY3RzIHRoZSBjYWxlbmRhciBkYXRlLlxuICAgICAqYGBgdHlwZXNjcmlwdFxuICAgICAqQFZpZXdDaGlsZChcIk15RGF0ZVBpY2tlclwiKVxuICAgICAqcHVibGljIGRhdGVQaWNrZXI6IElneERhdGVQaWNrZXJDb21wb25lbnQ7XG4gICAgICpuZ0FmdGVyVmlld0luaXQoKXtcbiAgICAgKnRoaXMuZGF0ZVBpY2tlci5kZXNlbGVjdERhdGUoKTtcbiAgICAgKn1cbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyT2Yge0BsaW5rIElneERhdGVQaWNrZXJDb21wb25lbnR9XG4gICAgICovXG4gICAgcHVibGljIGRlc2VsZWN0RGF0ZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy52YWx1ZSA9IG51bGw7XG4gICAgICAgIGlmICh0aGlzLmNhbGVuZGFyKSB7XG4gICAgICAgICAgICB0aGlzLmNhbGVuZGFyLmRlc2VsZWN0RGF0ZSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX29uQ2hhbmdlQ2FsbGJhY2sobnVsbCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogT3BlbnMgdGhlIGRhdGUgcGlja2VyIGRyb3AgZG93biBvciBkaWFsb2cuXG4gICAgICogQHBhcmFtIHRhcmdldCBIVE1MRWxlbWVudCAtIHRoZSB0YXJnZXQgZWxlbWVudCB0byB1c2UgZm9yIHBvc2l0aW9uaW5nIHRoZSBkcm9wIGRvd24gY29udGFpbmVyIGFjY29yZGluZyB0b1xuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8aWd4LWRhdGUtcGlja2VyIFt2YWx1ZV09XCJkYXRlXCIgbW9kZT1cImRyb3Bkb3duXCIgI3JldGVtcGxhdGVkPlxuICAgICAqICAgPG5nLXRlbXBsYXRlIGlneERhdGVQaWNrZXJUZW1wbGF0ZSBsZXQtb3BlbkRpYWxvZz1cIm9wZW5EaWFsb2dcIlxuICAgICAqICAgICAgICAgICAgICAgIGxldC1kaXNwbGF5RGF0YT1cImRpc3BsYXlEYXRhXCI+XG4gICAgICogICAgIDxpZ3gtaW5wdXQtZ3JvdXA+XG4gICAgICogICAgICAgPGlucHV0ICNkcm9wRG93blRhcmdldCBpZ3hJbnB1dCBbdmFsdWVdPVwiZGlzcGxheURhdGFcIiAvPlxuICAgICAqICAgICAgIDxpZ3gtc3VmZml4IChjbGljayk9XCJvcGVuRGlhbG9nKGRyb3BEb3duVGFyZ2V0KVwiPlxuICAgICAqICAgICAgICAgPGlneC1pY29uPmFsYXJtPC9pZ3gtaWNvbj5cbiAgICAgKiAgICAgICA8L2lneC1zdWZmaXg+XG4gICAgICogICAgIDwvaWd4LWlucHV0LWdyb3VwPlxuICAgICAqICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgKiA8L2lneC1kYXRlLXBpY2tlcj5cbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBwdWJsaWMgb3BlbkRpYWxvZyh0YXJnZXQ/OiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgICAgICBpZiAoIXRoaXMuY29sbGFwc2VkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgc3dpdGNoICh0aGlzLm1vZGUpIHtcbiAgICAgICAgICAgIGNhc2UgSW50ZXJhY3Rpb25Nb2RlLkRpYWxvZzoge1xuICAgICAgICAgICAgICAgIHRoaXMuaGFzSGVhZGVyID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBjb25zdCBtb2RhbE92ZXJsYXkgPSAodGhpcy5tb2RhbE92ZXJsYXlTZXR0aW5ncyAhPT0gdW5kZWZpbmVkKSA/IHRoaXMuX21vZGFsT3ZlcmxheSA6IHRoaXMuX21vZGFsT3ZlcmxheVNldHRpbmdzO1xuICAgICAgICAgICAgICAgIHRoaXMuX2NvbXBvbmVudElEID0gdGhpcy5fb3ZlcmxheVNlcnZpY2UuYXR0YWNoKElneENhbGVuZGFyQ29udGFpbmVyQ29tcG9uZW50LCBtb2RhbE92ZXJsYXksIHRoaXMuX21vZHVsZVJlZik7XG4gICAgICAgICAgICAgICAgdGhpcy5fb3ZlcmxheVNlcnZpY2Uuc2hvdyh0aGlzLl9jb21wb25lbnRJRCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIEludGVyYWN0aW9uTW9kZS5Ecm9wRG93bjoge1xuICAgICAgICAgICAgICAgIHRoaXMuaGFzSGVhZGVyID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgaWYgKHRhcmdldCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRyb3BEb3duT3ZlcmxheVNldHRpbmdzLnBvc2l0aW9uU3RyYXRlZ3kuc2V0dGluZ3MudGFyZ2V0ID0gdGFyZ2V0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLl9jb21wb25lbnRJRCA9IHRoaXMuX292ZXJsYXlTZXJ2aWNlLmF0dGFjaChJZ3hDYWxlbmRhckNvbnRhaW5lckNvbXBvbmVudCxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kcm9wRG93bk92ZXJsYXlTZXR0aW5ncywgdGhpcy5fbW9kdWxlUmVmKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9vdmVybGF5U2VydmljZS5zaG93KHRoaXMuX2NvbXBvbmVudElEKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENsb3NlIHRoZSBjYWxlbmRhci5cbiAgICAgKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgY2xvc2VDYWxlbmRhcigpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fb3ZlcmxheVNlcnZpY2UuaGlkZSh0aGlzLl9jb21wb25lbnRJRCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2xlYXIgdGhlIGlucHV0IGZpZWxkLCBkYXRlIHBpY2tlciB2YWx1ZSBhbmQgY2FsZW5kYXIgc2VsZWN0aW9uLlxuICAgICAqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyBjbGVhcigpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5pc0VtcHR5ID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5pbnZhbGlkRGF0ZSA9ICcnO1xuICAgICAgICB0aGlzLmRlc2VsZWN0RGF0ZSgpO1xuICAgICAgICB0aGlzLl9zZXRDdXJzb3JQb3NpdGlvbigwKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBFdmFsdWF0ZXMgd2hlbiBAY2FsZW5kYXIub25TZWxlY3Rpb24gZXZlbnQgd2FzIGZpcmVkXG4gICAgICogYW5kIHVwZGF0ZSB0aGUgaW5wdXQgdmFsdWUuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZXZlbnQgc2VsZWN0ZWQgdmFsdWUgZnJvbSBjYWxlbmRhci5cbiAgICAgKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgaGFuZGxlU2VsZWN0aW9uKGRhdGU6IERhdGUpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMudmFsdWUpIHtcbiAgICAgICAgICAgIGRhdGUuc2V0SG91cnModGhpcy52YWx1ZS5nZXRIb3VycygpKTtcbiAgICAgICAgICAgIGRhdGUuc2V0TWludXRlcyh0aGlzLnZhbHVlLmdldE1pbnV0ZXMoKSk7XG4gICAgICAgICAgICBkYXRlLnNldFNlY29uZHModGhpcy52YWx1ZS5nZXRTZWNvbmRzKCkpO1xuICAgICAgICAgICAgZGF0ZS5zZXRNaWxsaXNlY29uZHModGhpcy52YWx1ZS5nZXRNaWxsaXNlY29uZHMoKSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnZhbHVlID0gZGF0ZTtcbiAgICAgICAgdGhpcy5jYWxlbmRhci52aWV3RGF0ZSA9IGRhdGU7XG4gICAgICAgIHRoaXMuX29uQ2hhbmdlQ2FsbGJhY2soZGF0ZSk7XG4gICAgICAgIHRoaXMuY2xvc2VDYWxlbmRhcigpO1xuICAgICAgICB0aGlzLm9uU2VsZWN0aW9uLmVtaXQoZGF0ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBFdmFsdWF0ZXMgd2hlbiB0aGUgaW5wdXQgYmx1ciBldmVudCB3YXMgZmlyZWRcbiAgICAqIGFuZCByZS1jYWxjdWxhdGUgdGhlIGRhdGUgcGlja2VyIHZhbHVlLlxuICAgICpcbiAgICAqIEBwYXJhbSBldmVudFxuICAgICpcbiAgICAqIEBoaWRkZW5cbiAgICAqL1xuICAgIHB1YmxpYyBvbkJsdXIoZXZlbnQpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5faXNJbkVkaXRNb2RlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY2FsY3VsYXRlRGF0ZShldmVudC50YXJnZXQudmFsdWUsIGV2ZW50LnR5cGUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogRXZhbHVhdGVzIHdoZW4gdGhlIGlucHV0IGZvY3VzIGV2ZW50IHdhcyBmaXJlZFxuICAgICogYW5kIHJlLWNhbGN1bGF0ZSB0aGUgZWRpdG9yIHRleHQuXG4gICAgKlxuICAgICogQHBhcmFtIGV2ZW50XG4gICAgKiBAaGlkZGVuXG4gICAgKi9cbiAgICBwdWJsaWMgb25Gb2N1cygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5faXNJbkVkaXRNb2RlID0gdHJ1ZTtcbiAgICAgICAgaWYgKHRoaXMudmFsdWUgJiYgdGhpcy5pbnZhbGlkRGF0ZSA9PT0gJycpIHtcbiAgICAgICAgICAgIHRoaXMuX3RyYW5zZm9ybWVkRGF0ZSA9IHRoaXMuX2dldEVkaXRvckRhdGUodGhpcy52YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAqIEV2YWx1YXRlcyB3aGVuIHRoZSBrZXlkb3duIGV2ZW50IHdhcyBmaXJlZCBmb3IgdXAvZG93biBrZXlzXG4gICAgKiB0byBwcm92aWRlIHNwaW5uaW5nIG9mIGRhdGUgcGFydHMuXG4gICAgKlxuICAgICogQHBhcmFtIGV2ZW50XG4gICAgKlxuICAgICogQGhpZGRlblxuICAgICovXG4gICAgcHVibGljIG9uS2V5RG93bihldmVudCkge1xuICAgICAgICBzd2l0Y2ggKGV2ZW50LmtleSkge1xuICAgICAgICAgICAgY2FzZSBLRVlTLlVQX0FSUk9XOlxuICAgICAgICAgICAgY2FzZSBLRVlTLlVQX0FSUk9XX0lFOlxuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zcGluVmFsdWUoZXZlbnQudGFyZ2V0LnZhbHVlLCAxLCBldmVudC50eXBlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgS0VZUy5ET1dOX0FSUk9XOlxuICAgICAgICAgICAgY2FzZSBLRVlTLkRPV05fQVJST1dfSUU6XG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50LmFsdEtleSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9wZW5EaWFsb2codGhpcy5nZXRJbnB1dEdyb3VwRWxlbWVudCgpKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zcGluVmFsdWUoZXZlbnQudGFyZ2V0LnZhbHVlLCAtMSwgZXZlbnQudHlwZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICogRXZhbHVhdGVzIHdoZW4gdGhlIG1vdXNlIHdoZWVsIGV2ZW50IHdhcyBmaXJlZFxuICAgICogdG8gcHJvdmlkZSBzcGlubmluZyBvZiBkYXRlIHBhcnRzLlxuICAgICpcbiAgICAqIEBwYXJhbSBldmVudFxuICAgICpcbiAgICAqIEBoaWRkZW5cbiAgICAqL1xuICAgIHB1YmxpYyBvbldoZWVsKGV2ZW50KSB7XG4gICAgICAgIGlmICh0aGlzLl9pc0luRWRpdE1vZGUpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIGNvbnN0IHNpZ24gPSAoZXZlbnQuZGVsdGFZID4gMCkgPyAtMSA6IDE7XG4gICAgICAgICAgICB0aGlzLnNwaW5WYWx1ZShldmVudC50YXJnZXQudmFsdWUsIHNpZ24sIGV2ZW50LnR5cGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBFdmFsdWF0ZXMgd2hlbiBpbnB1dCBldmVudCB3YXMgZmlyZWQgaW4gZWRpdG9yLlxuICAgICpcbiAgICAqIEBwYXJhbSBldmVudFxuICAgICpcbiAgICAqIEBoaWRkZW5cbiAgICAqL1xuICAgIHB1YmxpYyBvbklucHV0KGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IHRhcmdldFZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgICAgICBjb25zdCBjdXJzb3JQb3NpdGlvbiA9IHRoaXMuX2dldEN1cnNvclBvc2l0aW9uKCk7XG4gICAgICAgIGNvbnN0IGNoZWNrSW5wdXQgPSBEYXRlUGlja2VyVXRpbC5jaGVja0ZvckNvbXBsZXRlRGF0ZUlucHV0KHRoaXMuZGF0ZUZvcm1hdFBhcnRzLCB0YXJnZXRWYWx1ZSk7XG4gICAgICAgIHRoaXMuX2lzSW5FZGl0TW9kZSA9IHRydWU7XG5cbiAgICAgICAgaWYgKHRhcmdldFZhbHVlICE9PSBEYXRlUGlja2VyVXRpbC5tYXNrVG9Qcm9tcHRDaGFycyh0aGlzLmlucHV0TWFzaykpIHtcbiAgICAgICAgICAgIHRoaXMuaXNFbXB0eSA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgYWxsIGRhdGUgcGFydHMgYXJlIGNvbXBsZXRlZCwgY2hhbmdlIHRoZSBkYXRlLXBpY2tlciB2YWx1ZSwgc3RheSBpbiBlZGl0IG1vZGVcbiAgICAgICAgaWYgKGNoZWNrSW5wdXQgPT09ICdjb21wbGV0ZScgJiYgZXZlbnQuaW5wdXRUeXBlICE9PSAnZGVsZXRlQ29udGVudEJhY2t3YXJkJykge1xuICAgICAgICAgICAgdGhpcy5fdHJhbnNmb3JtZWREYXRlID0gdGFyZ2V0VmFsdWU7XG4gICAgICAgICAgICB0aGlzLmNhbGN1bGF0ZURhdGUodGFyZ2V0VmFsdWUsIGV2ZW50LnR5cGUpO1xuICAgICAgICAgICAgdGhpcy5fc2V0Q3Vyc29yUG9zaXRpb24oY3Vyc29yUG9zaXRpb24pO1xuICAgICAgICB9IGVsc2UgaWYgKGNoZWNrSW5wdXQgPT09ICdwYXJ0aWFsJykge1xuICAgICAgICAgICAgLy8gV2hpbGUgZWRpdGluZywgaWYgb25lIGRhdGUgcGFydCBpcyBkZWxldGVkLCBkYXRlLXBpY2tlciB2YWx1ZSBpcyBzZXQgdG8gbnVsbCwgdGhlIHJlbWFpbmluZyBpbnB1dCBzdGF5cyBpbnRhY3QuXG4gICAgICAgICAgICB0aGlzLmRlc2VsZWN0RGF0ZSgpO1xuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmdldEVkaXRFbGVtZW50KCkudmFsdWUgPSB0YXJnZXRWYWx1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLl9zZXRDdXJzb3JQb3NpdGlvbihjdXJzb3JQb3NpdGlvbik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIGlmIChjaGVja0lucHV0ID09PSAnZW1wdHknKSB7XG4gICAgICAgICAgICAvLyBUb3RhbCBjbGVhbi11cCBhcyBpbnB1dCBpcyBkZWxldGVkLlxuICAgICAgICAgICAgdGhpcy5pc0VtcHR5ID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuZGVzZWxlY3REYXRlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGNhbGN1bGF0ZURhdGUoZGF0ZVN0cmluZzogc3RyaW5nLCBpbnZva2VkQnlFdmVudDogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIGlmIChkYXRlU3RyaW5nICE9PSAnJykge1xuICAgICAgICAgICAgY29uc3QgcHJldkRhdGVWYWx1ZSA9IHRoaXMudmFsdWU7XG4gICAgICAgICAgICBjb25zdCBpbnB1dFZhbHVlID0gKGludm9rZWRCeUV2ZW50ID09PSAnYmx1cicpID8gdGhpcy5yYXdEYXRlU3RyaW5nIDogZGF0ZVN0cmluZztcbiAgICAgICAgICAgIGNvbnN0IG5ld0RhdGVBcnJheSA9IERhdGVQaWNrZXJVdGlsLnBhcnNlRGF0ZUFycmF5KHRoaXMuZGF0ZUZvcm1hdFBhcnRzLCBwcmV2RGF0ZVZhbHVlLCBpbnB1dFZhbHVlKTtcblxuICAgICAgICAgICAgaWYgKG5ld0RhdGVBcnJheS5zdGF0ZSA9PT0gRGF0ZVN0YXRlLlZhbGlkKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV3VmFsdWUgPSBuZXdEYXRlQXJyYXkuZGF0ZTtcbiAgICAgICAgICAgICAgICAvLyBSZXN0b3JlIHRoZSB0aW1lIHBhcnQgaWYgYW55XG4gICAgICAgICAgICAgICAgaWYgKHByZXZEYXRlVmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWUuc2V0SG91cnMocHJldkRhdGVWYWx1ZS5nZXRIb3VycygpKTtcbiAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWUuc2V0TWludXRlcyhwcmV2RGF0ZVZhbHVlLmdldE1pbnV0ZXMoKSk7XG4gICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlLnNldFNlY29uZHMocHJldkRhdGVWYWx1ZS5nZXRTZWNvbmRzKCkpO1xuICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZS5zZXRNaWxsaXNlY29uZHMocHJldkRhdGVWYWx1ZS5nZXRNaWxsaXNlY29uZHMoKSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZGlzYWJsZWREYXRlcyA9PT0gbnVsbFxuICAgICAgICAgICAgICAgICAgICB8fCAodGhpcy5kaXNhYmxlZERhdGVzICE9PSBudWxsICYmICFpc0RhdGVJblJhbmdlcyhuZXdWYWx1ZSwgdGhpcy5kaXNhYmxlZERhdGVzKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52YWx1ZSA9IG5ld1ZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmludmFsaWREYXRlID0gJyc7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX29uQ2hhbmdlQ2FsbGJhY2sobmV3VmFsdWUpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGFyZ3M6IElEYXRlUGlja2VyRGlzYWJsZWREYXRlRXZlbnRBcmdzID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZVBpY2tlcjogdGhpcyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRWYWx1ZTogbmV3VmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25EaXNhYmxlZERhdGUuZW1pdChhcmdzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IGFyZ3M6IElEYXRlUGlja2VyVmFsaWRhdGlvbkZhaWxlZEV2ZW50QXJncyA9IHtcbiAgICAgICAgICAgICAgICAgICAgZGF0ZVBpY2tlcjogdGhpcyxcbiAgICAgICAgICAgICAgICAgICAgcHJldlZhbHVlOiBwcmV2RGF0ZVZhbHVlXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB0aGlzLmludmFsaWREYXRlID0gZGF0ZVN0cmluZztcbiAgICAgICAgICAgICAgICB0aGlzLm9uVmFsaWRhdGlvbkZhaWxlZC5lbWl0KGFyZ3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzcGluVmFsdWUoaW5wdXRWYWx1ZTogc3RyaW5nLCBzaWduOiBudW1iZXIsIGV2ZW50VHlwZTogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX2lzSW5FZGl0TW9kZSA9IHRydWU7XG4gICAgICAgIHRoaXMuaXNFbXB0eSA9IGZhbHNlO1xuICAgICAgICBjb25zdCBjdXJzb3JQb3NpdGlvbiA9IHRoaXMuX2dldEN1cnNvclBvc2l0aW9uKCk7XG5cbiAgICAgICAgY29uc3QgbW9kaWZpZWRJbnB1dFZhbHVlID1cbiAgICAgICAgICAgIERhdGVQaWNrZXJVdGlsLmdldE1vZGlmaWVkRGF0ZUlucHV0KHRoaXMuZGF0ZUZvcm1hdFBhcnRzLCBpbnB1dFZhbHVlLCBjdXJzb3JQb3NpdGlvbiwgdGhpcy5zcGluRGVsdGEgKiBzaWduLCB0aGlzLmlzU3Bpbkxvb3ApO1xuXG4gICAgICAgIHRoaXMuZ2V0RWRpdEVsZW1lbnQoKS52YWx1ZSA9IG1vZGlmaWVkSW5wdXRWYWx1ZTtcbiAgICAgICAgdGhpcy5fc2V0Q3Vyc29yUG9zaXRpb24oY3Vyc29yUG9zaXRpb24pO1xuXG4gICAgICAgIGNvbnN0IGNoZWNrSW5wdXQgPSBEYXRlUGlja2VyVXRpbC5jaGVja0ZvckNvbXBsZXRlRGF0ZUlucHV0KHRoaXMuZGF0ZUZvcm1hdFBhcnRzLCBtb2RpZmllZElucHV0VmFsdWUpO1xuICAgICAgICBpZiAoY2hlY2tJbnB1dCA9PT0gJ2NvbXBsZXRlJykge1xuICAgICAgICAgICAgdGhpcy5faXNJbkVkaXRNb2RlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuY2FsY3VsYXRlRGF0ZShtb2RpZmllZElucHV0VmFsdWUsIGV2ZW50VHlwZSk7XG4gICAgICAgICAgICB0aGlzLl9zZXRDdXJzb3JQb3NpdGlvbihjdXJzb3JQb3NpdGlvbik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIF9vbk9wZW5pbmcoZXZlbnQ6IE92ZXJsYXlDYW5jZWxhYmxlRXZlbnRBcmdzKSB7XG4gICAgICAgIHRoaXMuX2luaXRpYWxpemVDYWxlbmRhckNvbnRhaW5lcihldmVudC5jb21wb25lbnRSZWYuaW5zdGFuY2UgYXMgSWd4Q2FsZW5kYXJDb250YWluZXJDb21wb25lbnQpO1xuICAgICAgICB0aGlzLmNvbGxhcHNlZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIHByaXZhdGUgX29uT3BlbmVkKCk6IHZvaWQge1xuICAgICAgICB0aGlzLl9vblRvdWNoZWRDYWxsYmFjaygpO1xuICAgICAgICB0aGlzLm9uT3BlbmVkLmVtaXQodGhpcyk7XG5cbiAgICAgICAgLy8gVE9ETzogcmVtb3ZlIHRoaXMgbGluZSBhZnRlciBkZXByZWNhdGluZyAnb25PcGVuJ1xuICAgICAgICB0aGlzLl9vbk9wZW4uZW1pdCh0aGlzKTtcblxuICAgICAgICBpZiAodGhpcy5jYWxlbmRhcikge1xuICAgICAgICAgICAgdGhpcy5fZm9jdXNDYWxlbmRhckRhdGUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgX29uQ2xvc2VkKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmNvbGxhcHNlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuX2NvbXBvbmVudElEID0gbnVsbDtcbiAgICAgICAgdGhpcy5vbkNsb3NlZC5lbWl0KHRoaXMpO1xuXG4gICAgICAgIC8vIFRPRE86IHJlbW92ZSB0aGlzIGxpbmUgYWZ0ZXIgZGVwcmVjYXRpbmcgJ29uQ2xvc2UnXG4gICAgICAgIHRoaXMub25DbG9zZS5lbWl0KHRoaXMpO1xuXG4gICAgICAgIGlmICh0aGlzLmdldEVkaXRFbGVtZW50KCkpIHtcbiAgICAgICAgICAgIHRoaXMuZ2V0RWRpdEVsZW1lbnQoKS5mb2N1cygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfaW5pdGlhbGl6ZUNhbGVuZGFyQ29udGFpbmVyKGNvbXBvbmVudEluc3RhbmNlOiBJZ3hDYWxlbmRhckNvbnRhaW5lckNvbXBvbmVudCkge1xuICAgICAgICB0aGlzLmNhbGVuZGFyID0gY29tcG9uZW50SW5zdGFuY2UuY2FsZW5kYXI7XG4gICAgICAgIGNvbnN0IGlzVmVydGljYWwgPSAodGhpcy52ZXJ0aWNhbCAmJiB0aGlzLm1vZGUgPT09IEludGVyYWN0aW9uTW9kZS5EaWFsb2cpO1xuICAgICAgICB0aGlzLmNhbGVuZGFyLmhhc0hlYWRlciA9IHRoaXMuaGFzSGVhZGVyO1xuICAgICAgICB0aGlzLmNhbGVuZGFyLmZvcm1hdE9wdGlvbnMgPSB0aGlzLmZvcm1hdE9wdGlvbnM7XG4gICAgICAgIHRoaXMuY2FsZW5kYXIuZm9ybWF0Vmlld3MgPSB0aGlzLmZvcm1hdFZpZXdzO1xuICAgICAgICB0aGlzLmNhbGVuZGFyLmxvY2FsZSA9IHRoaXMubG9jYWxlO1xuICAgICAgICB0aGlzLmNhbGVuZGFyLnZlcnRpY2FsID0gaXNWZXJ0aWNhbDtcbiAgICAgICAgdGhpcy5jYWxlbmRhci53ZWVrU3RhcnQgPSB0aGlzLndlZWtTdGFydDtcbiAgICAgICAgdGhpcy5jYWxlbmRhci5zcGVjaWFsRGF0ZXMgPSB0aGlzLnNwZWNpYWxEYXRlcztcbiAgICAgICAgdGhpcy5jYWxlbmRhci5kaXNhYmxlZERhdGVzID0gdGhpcy5kaXNhYmxlZERhdGVzO1xuICAgICAgICB0aGlzLmNhbGVuZGFyLmhlYWRlclRlbXBsYXRlID0gdGhpcy5oZWFkZXJUZW1wbGF0ZTtcbiAgICAgICAgdGhpcy5jYWxlbmRhci5zdWJoZWFkZXJUZW1wbGF0ZSA9IHRoaXMuc3ViaGVhZGVyVGVtcGxhdGU7XG4gICAgICAgIHRoaXMuY2FsZW5kYXIub25TZWxlY3Rpb24ucGlwZSh0YWtlVW50aWwodGhpcy5fZGVzdHJveSQpKS5zdWJzY3JpYmUoKGV2OiBEYXRlKSA9PiB0aGlzLmhhbmRsZVNlbGVjdGlvbihldikpO1xuXG4gICAgICAgIGlmICh0aGlzLnZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLmNhbGVuZGFyLnZhbHVlID0gdGhpcy52YWx1ZTtcbiAgICAgICAgICAgIHRoaXMuY2FsZW5kYXIudmlld0RhdGUgPSB0aGlzLnZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgY29tcG9uZW50SW5zdGFuY2UubW9kZSA9IHRoaXMubW9kZTtcbiAgICAgICAgY29tcG9uZW50SW5zdGFuY2UudmVydGljYWwgPSBpc1ZlcnRpY2FsO1xuICAgICAgICBjb21wb25lbnRJbnN0YW5jZS5jYW5jZWxCdXR0b25MYWJlbCA9IHRoaXMuY2FuY2VsQnV0dG9uTGFiZWw7XG4gICAgICAgIGNvbXBvbmVudEluc3RhbmNlLnRvZGF5QnV0dG9uTGFiZWwgPSB0aGlzLnRvZGF5QnV0dG9uTGFiZWw7XG4gICAgICAgIGNvbXBvbmVudEluc3RhbmNlLmRhdGVQaWNrZXJBY3Rpb25zID0gdGhpcy5kYXRlUGlja2VyQWN0aW9uc0RpcmVjdGl2ZTtcblxuICAgICAgICBjb21wb25lbnRJbnN0YW5jZS5vbkNsb3NlLnBpcGUodGFrZVVudGlsKHRoaXMuX2Rlc3Ryb3kkKSkuc3Vic2NyaWJlKCgpID0+IHRoaXMuY2xvc2VDYWxlbmRhcigpKTtcbiAgICAgICAgY29tcG9uZW50SW5zdGFuY2Uub25Ub2RheVNlbGVjdGlvbi5waXBlKHRha2VVbnRpbCh0aGlzLl9kZXN0cm95JCkpLnN1YnNjcmliZSgoKSA9PiB0aGlzLnRyaWdnZXJUb2RheVNlbGVjdGlvbigpKTtcbiAgICB9XG5cbiAgICAvLyBGb2N1cyBhIGRhdGUsIGFmdGVyIHRoZSBjYWxlbmRhciBhcHBlYXJhbmNlIGludG8gRE9NLlxuICAgIHByaXZhdGUgX2ZvY3VzQ2FsZW5kYXJEYXRlKCk6IHZvaWQge1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jYWxlbmRhci5kYXlzVmlldy5mb2N1c0FjdGl2ZURhdGUoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfc2V0TG9jYWxlVG9EYXRlKHZhbHVlOiBEYXRlKTogc3RyaW5nIHtcbiAgICAgICAgaWYgKGlzSUUoKSkge1xuICAgICAgICAgICAgLy8gdGhpcyBpcyBhIHdvcmthcm91bmQgZml4aW5nIHRoZSBmb2xsb3dpbmcgSUUxMSBpc3N1ZTpcbiAgICAgICAgICAgIC8vIElFMTEgaGFzIGFkZGVkIGNoYXJhY3RlciBjb2RlIDgyMDYgKG1hcmsgZm9yIFJUTCkgdG8gdGhlIG91dHB1dCBvZiB0b0xvY2FsZURhdGVTdHJpbmcoKSB0aGF0XG4gICAgICAgICAgICAvLyBwcmVjZWRlcyBlYWNoIHBvcnRpb24gdGhhdCBjb21wcmlzZXMgdGhlIHRvdGFsIGRhdGUuLi4gRm9yIG1vcmUgaW5mb3JtYXRpb24gcmVhZCB0aGlzIGFydGljbGU6XG4gICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG1heC1saW5lLWxlbmd0aFxuICAgICAgICAgICAgLy8gaHR0cHM6Ly93d3cuY3NncHJvLmNvbS9ibG9nLzIwMTYvMDgvYS1iYWQtZGF0ZS13aXRoLWludGVybmV0LWV4cGxvcmVyLTExLXRyb3VibGUtd2l0aC1uZXctdW5pY29kZS1jaGFyYWN0ZXJzLWluLWphdmFzY3JpcHQtZGF0ZS1zdHJpbmdzL1xuICAgICAgICAgICAgY29uc3QgbG9jYWxlRGF0ZVN0cklFID0gbmV3IERhdGUodmFsdWUuZ2V0RnVsbFllYXIoKSwgdmFsdWUuZ2V0TW9udGgoKSwgdmFsdWUuZ2V0RGF0ZSgpLFxuICAgICAgICAgICAgICAgIHZhbHVlLmdldEhvdXJzKCksIHZhbHVlLmdldE1pbnV0ZXMoKSwgdmFsdWUuZ2V0U2Vjb25kcygpLCB2YWx1ZS5nZXRNaWxsaXNlY29uZHMoKSk7XG4gICAgICAgICAgICByZXR1cm4gbG9jYWxlRGF0ZVN0cklFLnRvTG9jYWxlRGF0ZVN0cmluZyh0aGlzLmxvY2FsZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdmFsdWUudG9Mb2NhbGVEYXRlU3RyaW5nKHRoaXMubG9jYWxlKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9nZXRDdXJzb3JQb3NpdGlvbigpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRFZGl0RWxlbWVudCgpLnNlbGVjdGlvblN0YXJ0O1xuICAgIH1cblxuICAgIHByaXZhdGUgX3NldEN1cnNvclBvc2l0aW9uKHN0YXJ0OiBudW1iZXIsIGVuZDogbnVtYmVyID0gc3RhcnQpOiB2b2lkIHtcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZ2V0RWRpdEVsZW1lbnQoKS5zZXRTZWxlY3Rpb25SYW5nZShzdGFydCwgZW5kKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQXBwbHkgY3VzdG9tIHVzZXIgZm9ybWF0dGVyIHVwb24gZGF0ZS5cbiAgICAgKiBAcGFyYW0gZm9ybWF0dGVyIGN1c3RvbSBmb3JtYXR0ZXIgZnVuY3Rpb24uXG4gICAgICogQHBhcmFtIGRhdGUgcGFzc2VkIGRhdGVcbiAgICAgKi9cbiAgICBwcml2YXRlIF9jdXN0b21Gb3JtYXRDaGVja2VyKGZvcm1hdHRlcjogKF86IERhdGUpID0+IHN0cmluZywgZGF0ZTogRGF0ZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5mb3JtYXR0ZXIgPyB0aGlzLmZvcm1hdHRlcihkYXRlKSA6IHRoaXMuX3NldExvY2FsZVRvRGF0ZShkYXRlKTtcbiAgICB9XG5cbiAgICAvKlxuICAgICogVHJhbnNmb3JtcyB0aGUgZGF0ZSBhY2NvcmRpbmcgdG8gdGhlIHNwZWNpZmllZCBmb3JtYXQgd2hlbiBgSWd4RGF0ZVBpY2tlckNvbXBvbmVudGAgaXMgaW4gZWRpdCBtb2RlXG4gICAgKiB1c2luZyBAYW5ndWxhci9jb21tb24gZm9ybWF0RGF0ZSBtZXRob2Q6IGh0dHBzOi8vYW5ndWxhci5pby9hcGkvY29tbW9uL2Zvcm1hdERhdGVcbiAgICAqIEBwYXJhbSAgdmFsdWU6IHN0cmluZyB8IG51bWJlciB8IERhdGVcbiAgICAqIEByZXR1cm5zIGZvcm1hdHRlZCBzdHJpbmdcbiAgICAqL1xuICAgIHByaXZhdGUgX2dldERpc3BsYXlEYXRlKHZhbHVlOiBhbnkpOiBzdHJpbmcge1xuICAgICAgICBpZiAodGhpcy5mb3JtYXQgJiYgIXRoaXMuZm9ybWF0dGVyKSB7XG4gICAgICAgICAgICBjb25zdCBsb2NhbGUgPSB0aGlzLmxvY2FsZSB8fCB0aGlzLmRlZmF1bHRMb2NhbGU7XG4gICAgICAgICAgICByZXR1cm4gZm9ybWF0RGF0ZSh2YWx1ZSwgdGhpcy5mb3JtYXQsIGxvY2FsZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fY3VzdG9tRm9ybWF0Q2hlY2tlcih0aGlzLmZvcm1hdHRlciwgdmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfZ2V0RWRpdG9yRGF0ZSh2YWx1ZTogYW55KSB7XG4gICAgICAgIGNvbnN0IGxvY2FsZSA9IHRoaXMubG9jYWxlIHx8IHRoaXMuZGVmYXVsdExvY2FsZTtcbiAgICAgICAgY29uc3QgY2hhbmdlZFZhbHVlID0gKHZhbHVlKSA/IGZvcm1hdERhdGUodmFsdWUsIHRoaXMubWFzaywgbG9jYWxlKSA6ICcnO1xuICAgICAgICByZXR1cm4gRGF0ZVBpY2tlclV0aWwuYWRkUHJvbXB0Q2hhcnNFZGl0TW9kZSh0aGlzLmRhdGVGb3JtYXRQYXJ0cywgdGhpcy52YWx1ZSwgY2hhbmdlZFZhbHVlKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9vblRvdWNoZWRDYWxsYmFjazogKCkgPT4gdm9pZCA9ICgpID0+IHsgfTtcblxuICAgIHByaXZhdGUgX29uQ2hhbmdlQ2FsbGJhY2s6IChfOiBEYXRlKSA9PiB2b2lkID0gKCkgPT4geyB9O1xufVxuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuQE5nTW9kdWxlKHtcbiAgICBkZWNsYXJhdGlvbnM6IFtJZ3hEYXRlUGlja2VyQ29tcG9uZW50LCBJZ3hDYWxlbmRhckNvbnRhaW5lckNvbXBvbmVudCwgSWd4RGF0ZVBpY2tlckFjdGlvbnNEaXJlY3RpdmUsXG4gICAgICAgIElneERhdGVQaWNrZXJUZW1wbGF0ZURpcmVjdGl2ZSwgRGF0ZVBpY2tlckRpc3BsYXlWYWx1ZVBpcGUsIERhdGVQaWNrZXJJbnB1dFZhbHVlUGlwZV0sXG4gICAgZXhwb3J0czogW0lneERhdGVQaWNrZXJDb21wb25lbnQsIElneERhdGVQaWNrZXJUZW1wbGF0ZURpcmVjdGl2ZSwgSWd4RGF0ZVBpY2tlckFjdGlvbnNEaXJlY3RpdmUsXG4gICAgICAgIERhdGVQaWNrZXJEaXNwbGF5VmFsdWVQaXBlLCBEYXRlUGlja2VySW5wdXRWYWx1ZVBpcGVdLFxuICAgIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIElneEljb25Nb2R1bGUsIElneElucHV0R3JvdXBNb2R1bGUsIElneENhbGVuZGFyTW9kdWxlLCBJZ3hCdXR0b25Nb2R1bGUsIElneFJpcHBsZU1vZHVsZSwgSWd4TWFza01vZHVsZV0sXG4gICAgZW50cnlDb21wb25lbnRzOiBbSWd4Q2FsZW5kYXJDb250YWluZXJDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIElneERhdGVQaWNrZXJNb2R1bGUgeyB9XG4iXX0=