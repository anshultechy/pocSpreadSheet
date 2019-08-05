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
let NEXT_ID = 0;
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
const PredefinedFormatOptions = {
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
export class IgxDatePickerComponent {
    /**
     * @param {?} _overlayService
     * @param {?} element
     * @param {?} _cdr
     * @param {?} _moduleRef
     */
    constructor(_overlayService, element, _cdr, _moduleRef) {
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
        this.id = `igx-date-picker-${NEXT_ID++}`;
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
        this._onTouchedCallback = () => { };
        this._onChangeCallback = () => { };
    }
    /**
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
    get formatOptions() {
        return this._formatOptions;
    }
    /**
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
    set formatOptions(formatOptions) {
        this._formatOptions = Object.assign(this._formatOptions, formatOptions);
    }
    /**
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
    get format() {
        return (this._format === undefined) ? PredefinedFormatOptions.ShortDate : this._format;
    }
    /**
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
    set format(format) {
        this._format = format;
    }
    /**
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
    get formatViews() {
        return this._formatViews;
    }
    /**
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
    set formatViews(formatViews) {
        this._formatViews = Object.assign(this._formatViews, formatViews);
    }
    /**
     * Gets the disabled dates descriptors.
     * ```typescript
     * let disabledDates = this.datepicker.disabledDates;
     * ```
     * @return {?}
     */
    get disabledDates() {
        return this._disabledDates;
    }
    /**
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
    set disabledDates(value) {
        this._disabledDates = value;
    }
    /**
     * Gets the special dates descriptors.
     * ```typescript
     * let specialDates = this.datepicker.specialDates;
     * ```
     * @return {?}
     */
    get specialDates() {
        return this._specialDates;
    }
    /**
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
    set specialDates(value) {
        this._specialDates = value;
    }
    /**
     * @return {?}
     */
    get modalOverlaySettings() {
        return this._modalOverlay;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set modalOverlaySettings(value) {
        this._modalOverlay = value;
    }
    /**
     * @return {?}
     */
    get dropDownOverlaySettings() {
        return this._dropDownOverlaySettings || this._defaultDropDownOverlaySettings;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dropDownOverlaySettings(value) {
        this._dropDownOverlaySettings = value;
    }
    /**
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
    get displayData() {
        if (this.value) {
            return this._customFormatChecker(this.formatter, this.value);
        }
        return '';
    }
    /**
     * hidden
     * @return {?}
     */
    get transformedDate() {
        if (this._value) {
            this._transformedDate = (this._isInEditMode) ? this._getEditorDate(this._value) : this._getDisplayDate(this._value);
            this.isEmpty = false;
        }
        else {
            this._transformedDate = (this._isInEditMode) ? DatePickerUtil.maskToPromptChars(this.inputMask) : '';
        }
        return this._transformedDate;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set transformedDate(value) {
        this._transformedDate = value;
    }
    /**
     * Gets the input group template.
     * ```typescript
     * let template = this.template();
     * ```
     * \@memberof IgxDatePickerComponent
     * @return {?}
     */
    get template() {
        if (this.datePickerTemplateDirective) {
            return this.datePickerTemplateDirective.template;
        }
        return (this.mode === InteractionMode.Dialog) ? this.readOnlyDatePickerTemplate : this.editableDatePickerTemplate;
    }
    /**
     * Gets the context passed to the input group template.
     * \@memberof IgxDatePickerComponent
     * @return {?}
     */
    get context() {
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
            openDialog: (target) => this.openDialog(target)
        };
    }
    /**
     * An \@Input property that gets/sets the selected date.
     * ```typescript
     * public date: Date = new Date();
     * ```
     * ```html
     * <igx-date-picker [value]="date"></igx-date-picker>
     * ```
     * @return {?}
     */
    get value() {
        return this._value;
    }
    /**
     * @param {?} date
     * @return {?}
     */
    set value(date) {
        this._value = date;
        this._onChangeCallback(date);
    }
    /**
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
    get onOpen() {
        return this._onOpen;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set onOpen(val) {
        this._onOpen = val;
    }
    /**
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
    get onClose() {
        return this._onClose;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set onClose(val) {
        this._onClose = val;
    }
    /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    onSpaceClick(event) {
        this.openDialog(this.getInputGroupElement());
        event.preventDefault();
    }
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
    writeValue(value) {
        this.value = value;
        this._cdr.markForCheck();
    }
    /**
     * @hidden
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) { this._onChangeCallback = fn; }
    /**
     * @hidden
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) { this._onTouchedCallback = fn; }
    /**
     * @hidden
     * @return {?}
     */
    getEditElement() {
        /** @type {?} */
        const inputElement = this.editableInput || this.readonlyInput || this.input;
        return (inputElement) ? inputElement.nativeElement : null;
    }
    /**
     * @hidden
     * @return {?}
     */
    getInputGroupElement() {
        return this.inputGroup ? this.inputGroup.element.nativeElement : null;
    }
    /**
     * @hidden
     * @return {?}
     */
    ngOnInit() {
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
        this._overlayService.onOpening.pipe(filter((overlay) => overlay.id === this._componentID), takeUntil(this._destroy$)).subscribe((eventArgs) => {
            this._onOpening(eventArgs);
        });
        this._overlayService.onOpened.pipe(filter((overlay) => overlay.id === this._componentID), takeUntil(this._destroy$)).subscribe(() => {
            this._onOpened();
        });
        this._overlayService.onClosed.pipe(filter(overlay => overlay.id === this._componentID), takeUntil(this._destroy$)).subscribe(() => {
            this._onClosed();
        });
        this._overlayService.onClosing.pipe(filter(overlay => overlay.id === this._componentID), takeUntil(this._destroy$)).subscribe((event) => {
            this.onClosing.emit(event);
        });
        if (this.mode === InteractionMode.DropDown) {
            this.dateFormatParts = DatePickerUtil.parseDateFormat(this.mask, this.locale);
            if (this.mask === undefined) {
                this.mask = DatePickerUtil.getMask(this.dateFormatParts);
            }
            this.inputMask = DatePickerUtil.getInputMask(this.dateFormatParts);
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (this.mode === InteractionMode.DropDown && this.editableInput) {
            fromEvent(this.editableInput.nativeElement, 'keydown').pipe(throttle(() => interval(0, animationFrameScheduler)), takeUntil(this._destroy$)).subscribe((res) => this.onKeyDown(res));
        }
    }
    /**
     * @hidden
     * @return {?}
     */
    ngOnDestroy() {
        if (this._componentID) {
            this._overlayService.hide(this._componentID);
        }
        this._destroy$.next(true);
        this._destroy$.complete();
    }
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
    triggerTodaySelection() {
        /** @type {?} */
        const today = new Date(Date.now());
        this.handleSelection(today);
    }
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
    selectDate(date) {
        this.value = date;
        this.onSelection.emit(date);
        this._onChangeCallback(date);
    }
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
    deselectDate() {
        this.value = null;
        if (this.calendar) {
            this.calendar.deselectDate();
        }
        this._onChangeCallback(null);
    }
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
    openDialog(target) {
        if (!this.collapsed) {
            return;
        }
        switch (this.mode) {
            case InteractionMode.Dialog: {
                this.hasHeader = true;
                /** @type {?} */
                const modalOverlay = (this.modalOverlaySettings !== undefined) ? this._modalOverlay : this._modalOverlaySettings;
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
    }
    /**
     * Close the calendar.
     *
     * @hidden
     * @return {?}
     */
    closeCalendar() {
        this._overlayService.hide(this._componentID);
    }
    /**
     * Clear the input field, date picker value and calendar selection.
     *
     * @hidden
     * @return {?}
     */
    clear() {
        this.isEmpty = true;
        this.invalidDate = '';
        this.deselectDate();
        this._setCursorPosition(0);
    }
    /**
     * Evaluates when \@calendar.onSelection event was fired
     * and update the input value.
     *
     * @hidden
     * @param {?} date
     * @return {?}
     */
    handleSelection(date) {
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
    }
    /**
     * Evaluates when the input blur event was fired
     * and re-calculate the date picker value.
     *
     * @hidden
     * @param {?} event
     *
     * @return {?}
     */
    onBlur(event) {
        this._isInEditMode = false;
        this.calculateDate(event.target.value, event.type);
    }
    /**
     * Evaluates when the input focus event was fired
     * and re-calculate the editor text.
     *
     * @hidden
     * @return {?}
     */
    onFocus() {
        this._isInEditMode = true;
        if (this.value && this.invalidDate === '') {
            this._transformedDate = this._getEditorDate(this.value);
        }
    }
    /**
     * Evaluates when the keydown event was fired for up/down keys
     * to provide spinning of date parts.
     *
     * @hidden
     * @param {?} event
     *
     * @return {?}
     */
    onKeyDown(event) {
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
    }
    /**
     * Evaluates when the mouse wheel event was fired
     * to provide spinning of date parts.
     *
     * @hidden
     * @param {?} event
     *
     * @return {?}
     */
    onWheel(event) {
        if (this._isInEditMode) {
            event.preventDefault();
            event.stopPropagation();
            /** @type {?} */
            const sign = (event.deltaY > 0) ? -1 : 1;
            this.spinValue(event.target.value, sign, event.type);
        }
    }
    /**
     * Evaluates when input event was fired in editor.
     *
     * @hidden
     * @param {?} event
     *
     * @return {?}
     */
    onInput(event) {
        /** @type {?} */
        const targetValue = event.target.value;
        /** @type {?} */
        const cursorPosition = this._getCursorPosition();
        /** @type {?} */
        const checkInput = DatePickerUtil.checkForCompleteDateInput(this.dateFormatParts, targetValue);
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
            requestAnimationFrame(() => {
                this.getEditElement().value = targetValue;
                this._setCursorPosition(cursorPosition);
            });
        }
        else if (checkInput === 'empty') {
            // Total clean-up as input is deleted.
            this.isEmpty = true;
            this.deselectDate();
        }
    }
    /**
     * @private
     * @param {?} dateString
     * @param {?} invokedByEvent
     * @return {?}
     */
    calculateDate(dateString, invokedByEvent) {
        if (dateString !== '') {
            /** @type {?} */
            const prevDateValue = this.value;
            /** @type {?} */
            const inputValue = (invokedByEvent === 'blur') ? this.rawDateString : dateString;
            /** @type {?} */
            const newDateArray = DatePickerUtil.parseDateArray(this.dateFormatParts, prevDateValue, inputValue);
            if (newDateArray.state === "valid" /* Valid */) {
                /** @type {?} */
                const newValue = newDateArray.date;
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
                    const args = {
                        datePicker: this,
                        currentValue: newValue,
                    };
                    this.onDisabledDate.emit(args);
                }
            }
            else {
                /** @type {?} */
                const args = {
                    datePicker: this,
                    prevValue: prevDateValue
                };
                this.invalidDate = dateString;
                this.onValidationFailed.emit(args);
            }
        }
    }
    /**
     * @private
     * @param {?} inputValue
     * @param {?} sign
     * @param {?} eventType
     * @return {?}
     */
    spinValue(inputValue, sign, eventType) {
        this._isInEditMode = true;
        this.isEmpty = false;
        /** @type {?} */
        const cursorPosition = this._getCursorPosition();
        /** @type {?} */
        const modifiedInputValue = DatePickerUtil.getModifiedDateInput(this.dateFormatParts, inputValue, cursorPosition, this.spinDelta * sign, this.isSpinLoop);
        this.getEditElement().value = modifiedInputValue;
        this._setCursorPosition(cursorPosition);
        /** @type {?} */
        const checkInput = DatePickerUtil.checkForCompleteDateInput(this.dateFormatParts, modifiedInputValue);
        if (checkInput === 'complete') {
            this._isInEditMode = true;
            this.calculateDate(modifiedInputValue, eventType);
            this._setCursorPosition(cursorPosition);
        }
    }
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    _onOpening(event) {
        this._initializeCalendarContainer((/** @type {?} */ (event.componentRef.instance)));
        this.collapsed = false;
    }
    /**
     * @private
     * @return {?}
     */
    _onOpened() {
        this._onTouchedCallback();
        this.onOpened.emit(this);
        // TODO: remove this line after deprecating 'onOpen'
        this._onOpen.emit(this);
        if (this.calendar) {
            this._focusCalendarDate();
        }
    }
    /**
     * @private
     * @return {?}
     */
    _onClosed() {
        this.collapsed = true;
        this._componentID = null;
        this.onClosed.emit(this);
        // TODO: remove this line after deprecating 'onClose'
        this.onClose.emit(this);
        if (this.getEditElement()) {
            this.getEditElement().focus();
        }
    }
    /**
     * @private
     * @param {?} componentInstance
     * @return {?}
     */
    _initializeCalendarContainer(componentInstance) {
        this.calendar = componentInstance.calendar;
        /** @type {?} */
        const isVertical = (this.vertical && this.mode === InteractionMode.Dialog);
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
        this.calendar.onSelection.pipe(takeUntil(this._destroy$)).subscribe((ev) => this.handleSelection(ev));
        if (this.value) {
            this.calendar.value = this.value;
            this.calendar.viewDate = this.value;
        }
        componentInstance.mode = this.mode;
        componentInstance.vertical = isVertical;
        componentInstance.cancelButtonLabel = this.cancelButtonLabel;
        componentInstance.todayButtonLabel = this.todayButtonLabel;
        componentInstance.datePickerActions = this.datePickerActionsDirective;
        componentInstance.onClose.pipe(takeUntil(this._destroy$)).subscribe(() => this.closeCalendar());
        componentInstance.onTodaySelection.pipe(takeUntil(this._destroy$)).subscribe(() => this.triggerTodaySelection());
    }
    // Focus a date, after the calendar appearance into DOM.
    /**
     * @private
     * @return {?}
     */
    _focusCalendarDate() {
        requestAnimationFrame(() => {
            this.calendar.daysView.focusActiveDate();
        });
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    _setLocaleToDate(value) {
        if (isIE()) {
            // this is a workaround fixing the following IE11 issue:
            // IE11 has added character code 8206 (mark for RTL) to the output of toLocaleDateString() that
            // precedes each portion that comprises the total date... For more information read this article:
            // tslint:disable-next-line: max-line-length
            // https://www.csgpro.com/blog/2016/08/a-bad-date-with-internet-explorer-11-trouble-with-new-unicode-characters-in-javascript-date-strings/
            /** @type {?} */
            const localeDateStrIE = new Date(value.getFullYear(), value.getMonth(), value.getDate(), value.getHours(), value.getMinutes(), value.getSeconds(), value.getMilliseconds());
            return localeDateStrIE.toLocaleDateString(this.locale);
        }
        return value.toLocaleDateString(this.locale);
    }
    /**
     * @private
     * @return {?}
     */
    _getCursorPosition() {
        return this.getEditElement().selectionStart;
    }
    /**
     * @private
     * @param {?} start
     * @param {?=} end
     * @return {?}
     */
    _setCursorPosition(start, end = start) {
        requestAnimationFrame(() => {
            this.getEditElement().setSelectionRange(start, end);
        });
    }
    /**
     * Apply custom user formatter upon date.
     * @private
     * @param {?} formatter custom formatter function.
     * @param {?} date passed date
     * @return {?}
     */
    _customFormatChecker(formatter, date) {
        return this.formatter ? this.formatter(date) : this._setLocaleToDate(date);
    }
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
    _getDisplayDate(value) {
        if (this.format && !this.formatter) {
            /** @type {?} */
            const locale = this.locale || this.defaultLocale;
            return formatDate(value, this.format, locale);
        }
        else {
            return this._customFormatChecker(this.formatter, value);
        }
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    _getEditorDate(value) {
        /** @type {?} */
        const locale = this.locale || this.defaultLocale;
        /** @type {?} */
        const changedValue = (value) ? formatDate(value, this.mask, locale) : '';
        return DatePickerUtil.addPromptCharsEditMode(this.dateFormatParts, this.value, changedValue);
    }
}
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
                styles: [`
        :host {
            display: block;
        }
    `]
            }] }
];
/** @nocollapse */
IgxDatePickerComponent.ctorParameters = () => [
    { type: IgxOverlayService, decorators: [{ type: Inject, args: [IgxOverlayService,] }] },
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: NgModuleRef }
];
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
    DeprecateProperty(`'onOpen' @Output property is deprecated. Use 'onOpened' instead.`),
    tslib_1.__metadata("design:type", EventEmitter),
    tslib_1.__metadata("design:paramtypes", [EventEmitter])
], IgxDatePickerComponent.prototype, "onOpen", null);
tslib_1.__decorate([
    DeprecateProperty(`'onClose' @Output property is deprecated. Use 'onClosed' instead.`),
    tslib_1.__metadata("design:type", EventEmitter),
    tslib_1.__metadata("design:paramtypes", [EventEmitter])
], IgxDatePickerComponent.prototype, "onClose", null);
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
export class IgxDatePickerModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1waWNrZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vaWduaXRldWktYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9kYXRlLXBpY2tlci9kYXRlLXBpY2tlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNELE9BQU8sRUFDSCxTQUFTLEVBQ1QsWUFBWSxFQUNaLFlBQVksRUFDWixXQUFXLEVBQ1gsS0FBSyxFQUNMLFFBQVEsRUFFUixNQUFNLEVBQ04sU0FBUyxFQUNULFVBQVUsRUFDVixXQUFXLEVBQ1gsTUFBTSxFQUNOLGlCQUFpQixFQUNqQixZQUFZLEVBQ1osV0FBVyxFQUdkLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RSxPQUFPLEVBRUgsa0NBQWtDLEVBQ2xDLGlCQUFpQixFQUNqQixxQ0FBcUMsRUFDckMsUUFBUSxFQUNSLGNBQWMsRUFDakIsTUFBTSxtQkFBbUIsQ0FBQztBQUMzQixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxpQkFBaUIsRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3RHLE9BQU8sRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLHVCQUF1QixFQUFFLFFBQVEsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUM3RSxPQUFPLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU3RCxPQUFPLEVBRUgsaUJBQWlCLEVBRWpCLHNCQUFzQixFQUN0QixvQkFBb0IsRUFFdkIsTUFBTSxtQkFBbUIsQ0FBQztBQUczQixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDeEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNsRSxPQUFPLEVBQ0gsY0FBYyxFQUVqQixNQUFNLHFCQUFxQixDQUFDO0FBQzdCLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRTNGLE9BQU8sRUFBb0MsSUFBSSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSw2QkFBNkIsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3pHLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEQsT0FBTyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQzs7SUFFNUQsT0FBTyxHQUFHLENBQUM7Ozs7OztBQU1mLHNEQUdDOzs7SUFGRyxzREFBbUM7O0lBQ25DLHdEQUFtQjs7Ozs7OztBQU92QiwwREFHQzs7O0lBRkcsMERBQW1DOztJQUNuQyx5REFBZ0I7Ozs7OztBQU1wQixrQ0FJQzs7O0lBSEcsMkJBQWM7O0lBQ2QsNkJBQWdCOztJQUNoQiw0QkFBZTs7Ozs7O0FBTW5CLG9DQUtDOzs7SUFKRyw2QkFBYTs7SUFDYiwrQkFBZTs7SUFDZixpQ0FBaUI7O0lBQ2pCLDhCQUFjOzs7O0lBWWQsV0FBWSxXQUFXO0lBQ3ZCLFlBQWEsWUFBWTtJQUN6QixVQUFXLFVBQVU7SUFDckIsVUFBVyxVQUFVOzs7Ozs7Ozs7Ozs7OztBQThCekIsTUFBTSxPQUFPLHNCQUFzQjs7Ozs7OztJQTZQL0IsWUFBK0MsZUFBa0MsRUFBUyxPQUFtQixFQUNqRyxJQUF1QixFQUFVLFVBQTRCO1FBRDFCLG9CQUFlLEdBQWYsZUFBZSxDQUFtQjtRQUFTLFlBQU8sR0FBUCxPQUFPLENBQVk7UUFDakcsU0FBSSxHQUFKLElBQUksQ0FBbUI7UUFBVSxlQUFVLEdBQVYsVUFBVSxDQUFrQjs7Ozs7Ozs7UUFyUGxFLFVBQUssR0FBRyxNQUFNLENBQUM7Ozs7OztRQVFmLG9CQUFlLEdBQUcsSUFBSSxDQUFDOzs7Ozs7O1FBZ0JkLGNBQVMsR0FBc0IsUUFBUSxDQUFDLE1BQU0sQ0FBQzs7Ozs7OztRQThSeEQsT0FBRSxHQUFHLG1CQUFtQixPQUFPLEVBQUUsRUFBRSxDQUFDOzs7Ozs7O1FBcUNwQyxhQUFRLEdBQUcsS0FBSyxDQUFDOzs7Ozs7O1FBMkJqQixTQUFJLEdBQUcsZUFBZSxDQUFDLE1BQU0sQ0FBQzs7Ozs7OztRQVM5QixlQUFVLEdBQUcsSUFBSSxDQUFDOzs7O1FBMENsQixhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQTBCLENBQUM7Ozs7UUE0QnRELGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBMEIsQ0FBQzs7OztRQU10RCxjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQThCLENBQUM7Ozs7Ozs7Ozs7OztRQWMzRCxnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFRLENBQUM7Ozs7Ozs7Ozs7OztRQWN2QyxtQkFBYyxHQUFHLElBQUksWUFBWSxFQUFvQyxDQUFDOzs7Ozs7Ozs7Ozs7UUFjdEUsdUJBQWtCLEdBQUcsSUFBSSxZQUFZLEVBQXdDLENBQUM7UUErRDlFLGNBQVMsR0FBRyxJQUFJLENBQUM7UUFDakIsY0FBUyxHQUFHLElBQUksQ0FBQztRQUNqQixxQkFBZ0IsR0FBRyxJQUFJLDBCQUEwQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hELG1CQUFjLEdBQUcsSUFBSSx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwRCxvQkFBZSxHQUFHLEVBQUUsQ0FBQztRQUdyQixZQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ2YsZ0JBQVcsR0FBRyxFQUFFLENBQUM7UUFFUCxjQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ2Qsa0JBQWEsR0FBRyxJQUFJLENBQUM7UUFFOUIsbUJBQWMsR0FBRztZQUNyQixHQUFHLEVBQUUsU0FBUztZQUNkLEtBQUssRUFBRSxPQUFPO1lBQ2QsT0FBTyxFQUFFLE9BQU87WUFDaEIsSUFBSSxFQUFFLFNBQVM7U0FDbEIsQ0FBQztRQUNNLGlCQUFZLEdBQUc7WUFDbkIsR0FBRyxFQUFFLEtBQUs7WUFDVixLQUFLLEVBQUUsSUFBSTtZQUNYLElBQUksRUFBRSxLQUFLO1NBQ2QsQ0FBQztRQUNNLGNBQVMsR0FBRyxJQUFJLE9BQU8sRUFBVyxDQUFDO1FBS25DLG1CQUFjLEdBQTBCLElBQUksQ0FBQztRQUM3QyxrQkFBYSxHQUEwQixJQUFJLENBQUM7UUFPNUMsWUFBTyxHQUFHLElBQUksWUFBWSxFQUEwQixDQUFDO1FBQ3JELGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBMEIsQ0FBQztRQThpQnRELHVCQUFrQixHQUFlLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUUzQyxzQkFBaUIsR0FBc0IsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBcjVCb0IsQ0FBQzs7Ozs7Ozs7Ozs7O0lBak45RSxJQUNXLGFBQWE7UUFDcEIsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO0lBQy9CLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBbUJELElBQVcsYUFBYSxDQUFDLGFBQTZCO1FBQ2xELElBQUksQ0FBQyxjQUFjLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLGFBQWEsQ0FBQyxDQUFDO0lBQzVFLENBQUM7Ozs7Ozs7Ozs7OztJQVlELElBQ1csTUFBTTtRQUNiLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyx1QkFBdUIsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDM0YsQ0FBQzs7Ozs7Ozs7Ozs7O0lBV0QsSUFBVyxNQUFNLENBQUMsTUFBYztRQUM1QixJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztJQUMxQixDQUFDOzs7Ozs7Ozs7Ozs7SUF5QkQsSUFDVyxXQUFXO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztJQUM3QixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7SUFjRCxJQUFXLFdBQVcsQ0FBQyxXQUF5QjtRQUM1QyxJQUFJLENBQUMsWUFBWSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxXQUFXLENBQUMsQ0FBQztJQUN0RSxDQUFDOzs7Ozs7OztJQVFELElBQ1csYUFBYTtRQUNwQixPQUFPLElBQUksQ0FBQyxjQUFjLENBQUM7SUFDL0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0lBY0QsSUFBVyxhQUFhLENBQUMsS0FBNEI7UUFDakQsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7SUFDaEMsQ0FBQzs7Ozs7Ozs7SUFRRCxJQUNXLFlBQVk7UUFDbkIsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQzlCLENBQUM7Ozs7Ozs7Ozs7Ozs7OztJQWNELElBQVcsWUFBWSxDQUFDLEtBQTRCO1FBQ2hELElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO0lBQy9CLENBQUM7Ozs7SUFFRCxJQUNXLG9CQUFvQjtRQUMzQixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7SUFDOUIsQ0FBQzs7Ozs7SUFFRCxJQUFXLG9CQUFvQixDQUFDLEtBQXNCO1FBQ2xELElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO0lBQy9CLENBQUM7Ozs7SUFFRCxJQUNXLHVCQUF1QjtRQUM5QixPQUFPLElBQUksQ0FBQyx3QkFBd0IsSUFBSSxJQUFJLENBQUMsK0JBQStCLENBQUM7SUFDakYsQ0FBQzs7Ozs7SUFFRCxJQUFXLHVCQUF1QixDQUFDLEtBQXNCO1FBQ3JELElBQUksQ0FBQyx3QkFBd0IsR0FBRyxLQUFLLENBQUM7SUFDMUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztJQWdCRCxJQUFXLFdBQVc7UUFDbEIsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ1osT0FBTyxJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDaEU7UUFDRCxPQUFPLEVBQUUsQ0FBQztJQUNkLENBQUM7Ozs7O0lBS0QsSUFBVyxlQUFlO1FBQ3RCLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNiLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3BILElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1NBQ3hCO2FBQU07WUFDSCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztTQUN4RztRQUNELE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDO0lBQ2pDLENBQUM7Ozs7O0lBRUQsSUFBVyxlQUFlLENBQUMsS0FBSztRQUM1QixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDO0lBQ2xDLENBQUM7Ozs7Ozs7OztJQVlELElBQUksUUFBUTtRQUNSLElBQUksSUFBSSxDQUFDLDJCQUEyQixFQUFFO1lBQ2xDLE9BQU8sSUFBSSxDQUFDLDJCQUEyQixDQUFDLFFBQVEsQ0FBQztTQUNwRDtRQUNELE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLDBCQUEwQixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsMEJBQTBCLENBQUM7SUFDdEgsQ0FBQzs7Ozs7O0lBTUQsSUFBSSxPQUFPO1FBQ1AsT0FBTztZQUNILFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtZQUN2QixhQUFhLEVBQUUsSUFBSSxDQUFDLGFBQWE7WUFDakMsV0FBVyxFQUFFLElBQUksQ0FBQyxXQUFXO1lBQzdCLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtZQUNuQixVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVU7WUFDM0IsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO1lBQ2pCLGVBQWUsRUFBRSxJQUFJLENBQUMsZUFBZTtZQUNyQyxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07WUFDbkIsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO1lBQ2YsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO1lBQ2YsWUFBWSxFQUFFLElBQUksQ0FBQyxZQUFZO1lBQy9CLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztZQUNqQixVQUFVLEVBQUUsQ0FBQyxNQUFvQixFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQztTQUNoRSxDQUFDO0lBQ04sQ0FBQzs7Ozs7Ozs7Ozs7SUFXRCxJQUNXLEtBQUs7UUFDWixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDdkIsQ0FBQzs7Ozs7SUFFRCxJQUFXLEtBQUssQ0FBQyxJQUFVO1FBQ3ZCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ25CLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNqQyxDQUFDOzs7Ozs7Ozs7Ozs7OztJQWlIRCxJQUFXLE1BQU07UUFDYixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDeEIsQ0FBQzs7Ozs7SUFFRCxJQUFXLE1BQU0sQ0FBQyxHQUF5QztRQUN2RCxJQUFJLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztJQUN2QixDQUFDOzs7Ozs7Ozs7Ozs7OztJQXNCRCxJQUFXLE9BQU87UUFDZCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDekIsQ0FBQzs7Ozs7SUFFRCxJQUFXLE9BQU8sQ0FBQyxHQUF5QztRQUN4RCxJQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQztJQUN4QixDQUFDOzs7Ozs7SUFrS00sWUFBWSxDQUFDLEtBQW9CO1FBQ3BDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUMsQ0FBQztRQUM3QyxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDM0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0lBZU0sVUFBVSxDQUFDLEtBQVc7UUFDekIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUM3QixDQUFDOzs7Ozs7SUFLTSxnQkFBZ0IsQ0FBQyxFQUFxQixJQUFJLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDOzs7Ozs7SUFLeEUsaUJBQWlCLENBQUMsRUFBYyxJQUFJLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDOzs7OztJQUduRSxjQUFjOztjQUNYLFlBQVksR0FBRyxJQUFJLENBQUMsYUFBYSxJQUFJLElBQUksQ0FBQyxhQUFhLElBQUksSUFBSSxDQUFDLEtBQUs7UUFDM0UsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDOUQsQ0FBQzs7Ozs7SUFHTSxvQkFBb0I7UUFDdkIsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUMxRSxDQUFDOzs7OztJQUtNLFFBQVE7UUFDWCxJQUFJLENBQUMsaUJBQWlCLEdBQUc7WUFDckIsYUFBYSxFQUFFLE1BQU07WUFDckIsY0FBYyxFQUFFLE9BQU87U0FDMUIsQ0FBQztRQUVGLElBQUksQ0FBQywrQkFBK0IsR0FBRztZQUNuQyxtQkFBbUIsRUFBRSxJQUFJO1lBQ3pCLEtBQUssRUFBRSxLQUFLO1lBQ1osY0FBYyxFQUFFLElBQUksc0JBQXNCLEVBQUU7WUFDNUMsZ0JBQWdCLEVBQUUsSUFBSSxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUM7WUFDbEUsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO1NBQ3RCLENBQUM7UUFFRixJQUFJLENBQUMscUJBQXFCLEdBQUc7WUFDekIsbUJBQW1CLEVBQUUsSUFBSTtZQUN6QixLQUFLLEVBQUUsSUFBSTtZQUNYLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtTQUN0QixDQUFDO1FBRUYsSUFBSSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUMvQixNQUFNLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEtBQUssSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUNyRCxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsU0FBUyxFQUFFLEVBQUU7WUFDL0MsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUMvQixDQUFDLENBQUMsQ0FBQztRQUVQLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDOUIsTUFBTSxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsRUFBRSxLQUFLLElBQUksQ0FBQyxZQUFZLENBQUMsRUFDckQsU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUU7WUFDdEMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ3JCLENBQUMsQ0FBQyxDQUFDO1FBRVAsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUM5QixNQUFNLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsRUFBRSxLQUFLLElBQUksQ0FBQyxZQUFZLENBQUMsRUFDbkQsU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUU7WUFDdEMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ3JCLENBQUMsQ0FBQyxDQUFDO1FBRVAsSUFBSSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUMvQixNQUFNLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsRUFBRSxLQUFLLElBQUksQ0FBQyxZQUFZLENBQUMsRUFDbkQsU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFO1lBQzNDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQy9CLENBQUMsQ0FBQyxDQUFDO1FBRVAsSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLGVBQWUsQ0FBQyxRQUFRLEVBQUU7WUFDeEMsSUFBSSxDQUFDLGVBQWUsR0FBRyxjQUFjLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzlFLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxTQUFTLEVBQUU7Z0JBQ3pCLElBQUksQ0FBQyxJQUFJLEdBQUcsY0FBYyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7YUFDNUQ7WUFDRCxJQUFJLENBQUMsU0FBUyxHQUFHLGNBQWMsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1NBQ3RFO0lBQ0wsQ0FBQzs7OztJQUVELGVBQWU7UUFDWCxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssZUFBZSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQzlELFNBQVMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsRUFBRSxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQ3ZELFFBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLHVCQUF1QixDQUFDLENBQUMsRUFDcEQsU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FDNUIsQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUM3QztJQUNMLENBQUM7Ozs7O0lBS00sV0FBVztRQUNkLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNuQixJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDaEQ7UUFDRCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMxQixJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzlCLENBQUM7Ozs7Ozs7Ozs7Ozs7SUFhTSxxQkFBcUI7O2NBQ2xCLEtBQUssR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDbEMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNoQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7SUFlTSxVQUFVLENBQUMsSUFBVTtRQUN4QixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztRQUNsQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM1QixJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDakMsQ0FBQzs7Ozs7Ozs7Ozs7OztJQWFNLFlBQVk7UUFDZixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztRQUNsQixJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDZixJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksRUFBRSxDQUFDO1NBQ2hDO1FBQ0QsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2pDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFtQk0sVUFBVSxDQUFDLE1BQW9CO1FBQ2xDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2pCLE9BQU87U0FDVjtRQUNELFFBQVEsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNmLEtBQUssZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUN6QixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQzs7c0JBQ2hCLFlBQVksR0FBRyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLHFCQUFxQjtnQkFDaEgsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyw2QkFBNkIsRUFBRSxZQUFZLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2dCQUM5RyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7Z0JBQzdDLE1BQU07YUFDVDtZQUNELEtBQUssZUFBZSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUMzQixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztnQkFDdkIsSUFBSSxNQUFNLEVBQUU7b0JBQ1IsSUFBSSxDQUFDLHVCQUF1QixDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO2lCQUMxRTtnQkFDRCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLDZCQUE2QixFQUN6RSxJQUFJLENBQUMsdUJBQXVCLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2dCQUNuRCxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7Z0JBQzdDLE1BQU07YUFDVDtTQUNKO0lBQ0wsQ0FBQzs7Ozs7OztJQU9NLGFBQWE7UUFDaEIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ2pELENBQUM7Ozs7Ozs7SUFPTSxLQUFLO1FBQ1IsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDcEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMvQixDQUFDOzs7Ozs7Ozs7SUFVTSxlQUFlLENBQUMsSUFBVTtRQUM3QixJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDWixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztZQUNyQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQztZQUN6QyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQztZQUN6QyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQztTQUN0RDtRQUVELElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUM5QixJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2hDLENBQUM7Ozs7Ozs7Ozs7SUFVTSxNQUFNLENBQUMsS0FBSztRQUNmLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1FBQzNCLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3ZELENBQUM7Ozs7Ozs7O0lBU00sT0FBTztRQUNWLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO1FBQzFCLElBQUksSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsV0FBVyxLQUFLLEVBQUUsRUFBRTtZQUN2QyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDM0Q7SUFDTCxDQUFDOzs7Ozs7Ozs7O0lBVU0sU0FBUyxDQUFDLEtBQUs7UUFDbEIsUUFBUSxLQUFLLENBQUMsR0FBRyxFQUFFO1lBQ2YsOEJBQW1CO1lBQ25CO2dCQUNJLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztnQkFDdkIsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO2dCQUN4QixJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ2xELE1BQU07WUFDVixrQ0FBcUI7WUFDckI7Z0JBQ0ksSUFBSSxLQUFLLENBQUMsTUFBTSxFQUFFO29CQUNkLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUMsQ0FBQztpQkFDaEQ7cUJBQU07b0JBQ0gsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO29CQUN2QixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7b0JBQ3hCLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO2lCQUN0RDtnQkFDRCxNQUFNO1lBQ1Y7Z0JBQ0ksTUFBTTtTQUNiO0lBQ0wsQ0FBQzs7Ozs7Ozs7OztJQVVNLE9BQU8sQ0FBQyxLQUFLO1FBQ2hCLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUNwQixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDdkIsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDOztrQkFDbEIsSUFBSSxHQUFHLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDeEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3hEO0lBQ0wsQ0FBQzs7Ozs7Ozs7O0lBU00sT0FBTyxDQUFDLEtBQUs7O2NBQ1YsV0FBVyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSzs7Y0FDaEMsY0FBYyxHQUFHLElBQUksQ0FBQyxrQkFBa0IsRUFBRTs7Y0FDMUMsVUFBVSxHQUFHLGNBQWMsQ0FBQyx5QkFBeUIsQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLFdBQVcsQ0FBQztRQUM5RixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztRQUUxQixJQUFJLFdBQVcsS0FBSyxjQUFjLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQ2xFLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1NBQ3hCO1FBRUQsbUZBQW1GO1FBQ25GLElBQUksVUFBVSxLQUFLLFVBQVUsSUFBSSxLQUFLLENBQUMsU0FBUyxLQUFLLHVCQUF1QixFQUFFO1lBQzFFLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxXQUFXLENBQUM7WUFDcEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzVDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxjQUFjLENBQUMsQ0FBQztTQUMzQzthQUFNLElBQUksVUFBVSxLQUFLLFNBQVMsRUFBRTtZQUNqQyxrSEFBa0g7WUFDbEgsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1lBQ3BCLHFCQUFxQixDQUFDLEdBQUcsRUFBRTtnQkFDdkIsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLEtBQUssR0FBRyxXQUFXLENBQUM7Z0JBQzFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUM1QyxDQUFDLENBQUMsQ0FBQztTQUNOO2FBQU0sSUFBSSxVQUFVLEtBQUssT0FBTyxFQUFFO1lBQy9CLHNDQUFzQztZQUN0QyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztZQUNwQixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7U0FDdkI7SUFDTCxDQUFDOzs7Ozs7O0lBRU8sYUFBYSxDQUFDLFVBQWtCLEVBQUUsY0FBc0I7UUFDNUQsSUFBSSxVQUFVLEtBQUssRUFBRSxFQUFFOztrQkFDYixhQUFhLEdBQUcsSUFBSSxDQUFDLEtBQUs7O2tCQUMxQixVQUFVLEdBQUcsQ0FBQyxjQUFjLEtBQUssTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLFVBQVU7O2tCQUMxRSxZQUFZLEdBQUcsY0FBYyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLGFBQWEsRUFBRSxVQUFVLENBQUM7WUFFbkcsSUFBSSxZQUFZLENBQUMsS0FBSyx3QkFBb0IsRUFBRTs7c0JBQ2xDLFFBQVEsR0FBRyxZQUFZLENBQUMsSUFBSTtnQkFDbEMsK0JBQStCO2dCQUMvQixJQUFJLGFBQWEsRUFBRTtvQkFDZixRQUFRLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO29CQUM1QyxRQUFRLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDO29CQUNoRCxRQUFRLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDO29CQUNoRCxRQUFRLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFDO2lCQUM3RDtnQkFFRCxJQUFJLElBQUksQ0FBQyxhQUFhLEtBQUssSUFBSTt1QkFDeEIsQ0FBQyxJQUFJLENBQUMsYUFBYSxLQUFLLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLEVBQUU7b0JBQ25GLElBQUksQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDO29CQUN0QixJQUFJLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQztvQkFDdEIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxDQUFDO2lCQUNwQztxQkFBTTs7MEJBQ0csSUFBSSxHQUFxQzt3QkFDM0MsVUFBVSxFQUFFLElBQUk7d0JBQ2hCLFlBQVksRUFBRSxRQUFRO3FCQUN6QjtvQkFDRCxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFDbEM7YUFDSjtpQkFBTTs7c0JBQ0csSUFBSSxHQUF5QztvQkFDL0MsVUFBVSxFQUFFLElBQUk7b0JBQ2hCLFNBQVMsRUFBRSxhQUFhO2lCQUMzQjtnQkFDRCxJQUFJLENBQUMsV0FBVyxHQUFHLFVBQVUsQ0FBQztnQkFDOUIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUN0QztTQUNKO0lBQ0wsQ0FBQzs7Ozs7Ozs7SUFFTyxTQUFTLENBQUMsVUFBa0IsRUFBRSxJQUFZLEVBQUUsU0FBaUI7UUFDakUsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7UUFDMUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7O2NBQ2YsY0FBYyxHQUFHLElBQUksQ0FBQyxrQkFBa0IsRUFBRTs7Y0FFMUMsa0JBQWtCLEdBQ3BCLGNBQWMsQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLFVBQVUsRUFBRSxjQUFjLEVBQUUsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUVqSSxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsS0FBSyxHQUFHLGtCQUFrQixDQUFDO1FBQ2pELElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxjQUFjLENBQUMsQ0FBQzs7Y0FFbEMsVUFBVSxHQUFHLGNBQWMsQ0FBQyx5QkFBeUIsQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLGtCQUFrQixDQUFDO1FBQ3JHLElBQUksVUFBVSxLQUFLLFVBQVUsRUFBRTtZQUMzQixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztZQUMxQixJQUFJLENBQUMsYUFBYSxDQUFDLGtCQUFrQixFQUFFLFNBQVMsQ0FBQyxDQUFDO1lBQ2xELElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxjQUFjLENBQUMsQ0FBQztTQUMzQztJQUNMLENBQUM7Ozs7OztJQUVPLFVBQVUsQ0FBQyxLQUFpQztRQUNoRCxJQUFJLENBQUMsNEJBQTRCLENBQUMsbUJBQUEsS0FBSyxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQWlDLENBQUMsQ0FBQztRQUNoRyxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztJQUMzQixDQUFDOzs7OztJQUVPLFNBQVM7UUFDYixJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUMxQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUV6QixvREFBb0Q7UUFDcEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFeEIsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2YsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7U0FDN0I7SUFDTCxDQUFDOzs7OztJQUVPLFNBQVM7UUFDYixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUN0QixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztRQUN6QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUV6QixxREFBcUQ7UUFDckQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFeEIsSUFBSSxJQUFJLENBQUMsY0FBYyxFQUFFLEVBQUU7WUFDdkIsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ2pDO0lBQ0wsQ0FBQzs7Ozs7O0lBRU8sNEJBQTRCLENBQUMsaUJBQWdEO1FBQ2pGLElBQUksQ0FBQyxRQUFRLEdBQUcsaUJBQWlCLENBQUMsUUFBUSxDQUFDOztjQUNyQyxVQUFVLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssZUFBZSxDQUFDLE1BQU0sQ0FBQztRQUMxRSxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDakQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUM3QyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ25DLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQztRQUNwQyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDL0MsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUNqRCxJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDO1FBQ25ELElBQUksQ0FBQyxRQUFRLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDO1FBQ3pELElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBUSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFFNUcsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ1osSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUNqQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1NBQ3ZDO1FBRUQsaUJBQWlCLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDbkMsaUJBQWlCLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQztRQUN4QyxpQkFBaUIsQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUM7UUFDN0QsaUJBQWlCLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDO1FBQzNELGlCQUFpQixDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQywwQkFBMEIsQ0FBQztRQUV0RSxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUM7UUFDaEcsaUJBQWlCLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUMsQ0FBQztJQUNySCxDQUFDOzs7Ozs7SUFHTyxrQkFBa0I7UUFDdEIscUJBQXFCLENBQUMsR0FBRyxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQzdDLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQzs7Ozs7O0lBRU8sZ0JBQWdCLENBQUMsS0FBVztRQUNoQyxJQUFJLElBQUksRUFBRSxFQUFFOzs7Ozs7O2tCQU1GLGVBQWUsR0FBRyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLEVBQUUsS0FBSyxDQUFDLFFBQVEsRUFBRSxFQUFFLEtBQUssQ0FBQyxPQUFPLEVBQUUsRUFDbkYsS0FBSyxDQUFDLFFBQVEsRUFBRSxFQUFFLEtBQUssQ0FBQyxVQUFVLEVBQUUsRUFBRSxLQUFLLENBQUMsVUFBVSxFQUFFLEVBQUUsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1lBQ3RGLE9BQU8sZUFBZSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUMxRDtRQUVELE9BQU8sS0FBSyxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNqRCxDQUFDOzs7OztJQUVPLGtCQUFrQjtRQUN0QixPQUFPLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxjQUFjLENBQUM7SUFDaEQsQ0FBQzs7Ozs7OztJQUVPLGtCQUFrQixDQUFDLEtBQWEsRUFBRSxNQUFjLEtBQUs7UUFDekQscUJBQXFCLENBQUMsR0FBRyxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDeEQsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDOzs7Ozs7OztJQU9PLG9CQUFvQixDQUFDLFNBQThCLEVBQUUsSUFBVTtRQUNuRSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMvRSxDQUFDOzs7Ozs7Ozs7Ozs7SUFRTyxlQUFlLENBQUMsS0FBVTtRQUM5QixJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFOztrQkFDMUIsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLGFBQWE7WUFDaEQsT0FBTyxVQUFVLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7U0FDakQ7YUFBTTtZQUNILE9BQU8sSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDM0Q7SUFDTCxDQUFDOzs7Ozs7SUFFTyxjQUFjLENBQUMsS0FBVTs7Y0FDdkIsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLGFBQWE7O2NBQzFDLFlBQVksR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7UUFDeEUsT0FBTyxjQUFjLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLFlBQVksQ0FBQyxDQUFDO0lBQ2pHLENBQUM7OztZQS9wQ0osU0FBUyxTQUFDO2dCQUNQLFNBQVMsRUFDTCxDQUFDO3dCQUNHLE9BQU8sRUFBRSxpQkFBaUI7d0JBQzFCLFdBQVcsRUFBRSxzQkFBc0I7d0JBQ25DLEtBQUssRUFBRSxJQUFJO3FCQUNkLENBQUM7O2dCQUVOLFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLDY2Q0FBeUM7eUJBQ2hDOzs7O0tBSVI7YUFDSjs7OztZQXhHRyxpQkFBaUIsdUJBc1dKLE1BQU0sU0FBQyxpQkFBaUI7WUEvWHJDLFVBQVU7WUFHVixpQkFBaUI7WUFFakIsV0FBVzs7O29CQXFJVixLQUFLOzhCQVFMLEtBQUs7cUJBU0wsS0FBSzt3QkFRTCxLQUFLOzRCQVlMLEtBQUs7cUJBb0NMLEtBQUs7bUJBNEJMLEtBQUs7MEJBYUwsS0FBSzs0QkEyQkwsS0FBSzsyQkEyQkwsS0FBSzttQ0FxQkwsS0FBSztzQ0FTTCxLQUFLO29CQStGTCxLQUFLO2lCQWdCTCxXQUFXLFNBQUMsU0FBUyxjQUNyQixLQUFLO3dCQW1CTCxLQUFLO3VCQVNMLEtBQUs7dUJBU0wsS0FBSzsrQkFTTCxLQUFLO2dDQVNMLEtBQUs7bUJBU0wsS0FBSzt5QkFTTCxLQUFLO3FCQWNMLEtBQUs7cUJBZ0JMLE1BQU07dUJBWU4sTUFBTTtzQkFnQk4sTUFBTTt1QkFZTixNQUFNO3dCQU1OLE1BQU07MEJBY04sTUFBTTs2QkFjTixNQUFNO2lDQWNOLE1BQU07eUNBTU4sU0FBUyxTQUFDLDRCQUE0QixFQUFFLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO3lDQU0zRSxTQUFTLFNBQUMsNEJBQTRCLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7eUJBTTNFLFNBQVMsU0FBQyxzQkFBc0IsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7NEJBTW5ELFNBQVMsU0FBQyxlQUFlLEVBQUUsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7NEJBTTlELFNBQVMsU0FBQyxlQUFlLEVBQUUsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7b0JBTTlELFlBQVksU0FBQyxpQkFBaUIsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7MENBTWpELFlBQVksU0FBQyw4QkFBOEIsRUFBRSxFQUFFLElBQUksRUFBRSw4QkFBOEIsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFOzZCQU1uRyxZQUFZLFNBQUMsa0NBQWtDLEVBQUUsRUFBRSxJQUFJLEVBQUUsa0NBQWtDLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtnQ0FNM0csWUFBWSxTQUFDLHFDQUFxQyxFQUFFLEVBQUUsSUFBSSxFQUFFLHFDQUFxQyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7eUNBTWpILFlBQVksU0FBQyw2QkFBNkIsRUFBRSxFQUFFLElBQUksRUFBRSw2QkFBNkIsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFOzJCQStDbEcsWUFBWSxTQUFDLGtCQUFrQixFQUFFLENBQUMsUUFBUSxDQUFDLGNBQzNDLFlBQVksU0FBQyxlQUFlLEVBQUUsQ0FBQyxRQUFRLENBQUM7O0FBbk16QztJQUZDLGlCQUFpQixDQUFDLGtFQUFrRSxDQUFDO3NDQU0vRCxZQUFZOzZDQUFaLFlBQVk7b0RBRmxDO0FBMEJEO0lBRkMsaUJBQWlCLENBQUMsbUVBQW1FLENBQUM7c0NBTS9ELFlBQVk7NkNBQVosWUFBWTtxREFGbkM7Ozs7Ozs7Ozs7SUE1YkQsdUNBQ3NCOzs7Ozs7O0lBT3RCLGlEQUM4Qjs7Ozs7Ozs7SUFROUIsd0NBQTZCOzs7Ozs7OztJQVE3QiwyQ0FBK0Q7Ozs7Ozs7Ozs7OztJQTRFL0Qsc0NBQ29COzs7Ozs7OztJQStNcEIsb0NBRTJDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFrQjNDLDJDQUN3Qzs7Ozs7Ozs7SUFReEMsMENBQ3lCOzs7Ozs7OztJQVF6QiwwQ0FDd0I7Ozs7Ozs7O0lBUXhCLGtEQUNnQzs7Ozs7Ozs7SUFRaEMsbURBQ2lDOzs7Ozs7OztJQVFqQyxzQ0FDcUM7Ozs7Ozs7O0lBUXJDLDRDQUN5Qjs7Ozs7Ozs7Ozs7OztJQWF6Qix3Q0FDc0Q7Ozs7O0lBMkJ0RCwwQ0FDNkQ7Ozs7O0lBMkI3RCwwQ0FDNkQ7Ozs7O0lBSzdELDJDQUNrRTs7Ozs7Ozs7Ozs7OztJQWFsRSw2Q0FDOEM7Ozs7Ozs7Ozs7Ozs7SUFhOUMsZ0RBQzZFOzs7Ozs7Ozs7Ozs7O0lBYTdFLG9EQUNxRjs7Ozs7SUFLckYsNERBQ3VEOzs7OztJQUt2RCw0REFDdUQ7Ozs7O0lBS3ZELDRDQUM2Qzs7Ozs7SUFLN0MsK0NBQ29DOzs7OztJQUtwQywrQ0FDb0M7Ozs7O0lBS3BDLHVDQUNtQzs7Ozs7O0lBS25DLDZEQUNzRTs7Ozs7SUFLdEUsZ0RBQzBEOzs7OztJQUsxRCxtREFDZ0U7Ozs7O0lBS2hFLDREQUNpRTs7SUFFakUsMENBQXNDOztJQUN0QywyQ0FBd0I7O0lBQ3hCLDJDQUF3Qjs7SUFDeEIsa0RBQStEOztJQUMvRCxnREFBMkQ7O0lBQzNELGlEQUE0Qjs7SUFDNUIsK0NBQTZCOztJQUM3QiwyQ0FBeUI7O0lBQ3pCLHlDQUFzQjs7SUFDdEIsNkNBQXdCOzs7OztJQUV4QiwyQ0FBK0I7Ozs7O0lBQy9CLCtDQUFzQzs7Ozs7SUFFdEMsZ0RBS0U7Ozs7O0lBQ0YsOENBSUU7Ozs7O0lBQ0YsMkNBQTJDOzs7OztJQUMzQyw4Q0FBNkI7Ozs7O0lBQzdCLHlDQUF3Qjs7Ozs7SUFDeEIsd0NBQXFCOzs7OztJQUNyQiwrQ0FBK0I7Ozs7O0lBQy9CLGdEQUFxRDs7Ozs7SUFDckQsK0NBQW9EOzs7OztJQUNwRCwrQ0FBdUM7Ozs7O0lBQ3ZDLDBEQUFrRDs7Ozs7SUFDbEQsbURBQTRDOzs7OztJQUM1QyxpRUFBeUQ7Ozs7O0lBQ3pELHVEQUErQzs7Ozs7SUFDL0Msa0RBQXlCOzs7OztJQUN6Qix5Q0FBNkQ7Ozs7O0lBQzdELDBDQUE4RDs7Ozs7SUE4aUI5RCxvREFBbUQ7Ozs7O0lBRW5ELG1EQUF5RDs7Ozs7SUF0NUI3QyxpREFBcUU7O0lBQUUseUNBQTBCOzs7OztJQUN6RyxzQ0FBK0I7Ozs7O0lBQUUsNENBQW9DOzs7OztBQW02QjdFLE1BQU0sT0FBTyxtQkFBbUI7OztZQVIvQixRQUFRLFNBQUM7Z0JBQ04sWUFBWSxFQUFFLENBQUMsc0JBQXNCLEVBQUUsNkJBQTZCLEVBQUUsNkJBQTZCO29CQUMvRiw4QkFBOEIsRUFBRSwwQkFBMEIsRUFBRSx3QkFBd0IsQ0FBQztnQkFDekYsT0FBTyxFQUFFLENBQUMsc0JBQXNCLEVBQUUsOEJBQThCLEVBQUUsNkJBQTZCO29CQUMzRiwwQkFBMEIsRUFBRSx3QkFBd0IsQ0FBQztnQkFDekQsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLGFBQWEsRUFBRSxtQkFBbUIsRUFBRSxpQkFBaUIsRUFBRSxlQUFlLEVBQUUsZUFBZSxFQUFFLGFBQWEsQ0FBQztnQkFDL0gsZUFBZSxFQUFFLENBQUMsNkJBQTZCLENBQUM7YUFDbkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUsIGZvcm1hdERhdGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtcbiAgICBDb21wb25lbnQsXG4gICAgQ29udGVudENoaWxkLFxuICAgIEV2ZW50RW1pdHRlcixcbiAgICBIb3N0QmluZGluZyxcbiAgICBJbnB1dCxcbiAgICBOZ01vZHVsZSxcbiAgICBPbkRlc3Ryb3ksXG4gICAgT3V0cHV0LFxuICAgIFZpZXdDaGlsZCxcbiAgICBFbGVtZW50UmVmLFxuICAgIFRlbXBsYXRlUmVmLFxuICAgIEluamVjdCxcbiAgICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBIb3N0TGlzdGVuZXIsXG4gICAgTmdNb2R1bGVSZWYsXG4gICAgT25Jbml0LFxuICAgIEFmdGVyVmlld0luaXRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge1xuICAgIElneENhbGVuZGFyQ29tcG9uZW50LFxuICAgIElneENhbGVuZGFySGVhZGVyVGVtcGxhdGVEaXJlY3RpdmUsXG4gICAgSWd4Q2FsZW5kYXJNb2R1bGUsXG4gICAgSWd4Q2FsZW5kYXJTdWJoZWFkZXJUZW1wbGF0ZURpcmVjdGl2ZSxcbiAgICBXRUVLREFZUyxcbiAgICBpc0RhdGVJblJhbmdlc1xufSBmcm9tICcuLi9jYWxlbmRhci9pbmRleCc7XG5pbXBvcnQgeyBJZ3hJY29uTW9kdWxlIH0gZnJvbSAnLi4vaWNvbi9pbmRleCc7XG5pbXBvcnQgeyBJZ3hJbnB1dEdyb3VwTW9kdWxlLCBJZ3hJbnB1dERpcmVjdGl2ZSwgSWd4SW5wdXRHcm91cENvbXBvbmVudCB9IGZyb20gJy4uL2lucHV0LWdyb3VwL2luZGV4JztcbmltcG9ydCB7IFN1YmplY3QsIGZyb21FdmVudCwgYW5pbWF0aW9uRnJhbWVTY2hlZHVsZXIsIGludGVydmFsIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIHRha2VVbnRpbCwgdGhyb3R0bGUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBJZ3hPdmVybGF5T3V0bGV0RGlyZWN0aXZlIH0gZnJvbSAnLi4vZGlyZWN0aXZlcy90b2dnbGUvdG9nZ2xlLmRpcmVjdGl2ZSc7XG5pbXBvcnQge1xuICAgIE92ZXJsYXlTZXR0aW5ncyxcbiAgICBJZ3hPdmVybGF5U2VydmljZSxcbiAgICBQb3NpdGlvblNldHRpbmdzLFxuICAgIEFic29sdXRlU2Nyb2xsU3RyYXRlZ3ksXG4gICAgQXV0b1Bvc2l0aW9uU3RyYXRlZ3ksXG4gICAgT3ZlcmxheUNhbmNlbGFibGVFdmVudEFyZ3Ncbn0gZnJvbSAnLi4vc2VydmljZXMvaW5kZXgnO1xuaW1wb3J0IHsgRGF0ZVJhbmdlRGVzY3JpcHRvciB9IGZyb20gJy4uL2NvcmUvZGF0ZXMvZGF0ZVJhbmdlJztcbmltcG9ydCB7IEVkaXRvclByb3ZpZGVyIH0gZnJvbSAnLi4vY29yZS9lZGl0LXByb3ZpZGVyJztcbmltcG9ydCB7IElneEJ1dHRvbk1vZHVsZSB9IGZyb20gJy4uL2RpcmVjdGl2ZXMvYnV0dG9uL2J1dHRvbi5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgSWd4UmlwcGxlTW9kdWxlIH0gZnJvbSAnLi4vZGlyZWN0aXZlcy9yaXBwbGUvcmlwcGxlLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBJZ3hNYXNrTW9kdWxlIH0gZnJvbSAnLi4vZGlyZWN0aXZlcy9tYXNrL21hc2suZGlyZWN0aXZlJztcbmltcG9ydCB7XG4gICAgRGF0ZVBpY2tlclV0aWwsXG4gICAgRGF0ZVN0YXRlXG59IGZyb20gJy4vZGF0ZS1waWNrZXIudXRpbHMnO1xuaW1wb3J0IHsgRGF0ZVBpY2tlckRpc3BsYXlWYWx1ZVBpcGUsIERhdGVQaWNrZXJJbnB1dFZhbHVlUGlwZSB9IGZyb20gJy4vZGF0ZS1waWNrZXIucGlwZXMnO1xuaW1wb3J0IHsgSURhdGVQaWNrZXIgfSBmcm9tICcuL2RhdGUtcGlja2VyLmNvbW1vbic7XG5pbXBvcnQgeyBLRVlTLCBDYW5jZWxhYmxlQnJvd3NlckV2ZW50QXJncywgaXNJRSB9IGZyb20gJy4uL2NvcmUvdXRpbHMnO1xuaW1wb3J0IHsgSWd4RGF0ZVBpY2tlclRlbXBsYXRlRGlyZWN0aXZlLCBJZ3hEYXRlUGlja2VyQWN0aW9uc0RpcmVjdGl2ZSB9IGZyb20gJy4vZGF0ZS1waWNrZXIuZGlyZWN0aXZlcyc7XG5pbXBvcnQgeyBJZ3hDYWxlbmRhckNvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vY2FsZW5kYXItY29udGFpbmVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJbnRlcmFjdGlvbk1vZGUgfSBmcm9tICcuLi9jb3JlL2VudW1zJztcbmltcG9ydCB7IGZhZGVJbiwgZmFkZU91dCB9IGZyb20gJy4uL2FuaW1hdGlvbnMvZmFkZSc7XG5pbXBvcnQgeyBEZXByZWNhdGVQcm9wZXJ0eSB9IGZyb20gJy4uL2NvcmUvZGVwcmVjYXRlRGVjb3JhdG9ycyc7XG5cbmxldCBORVhUX0lEID0gMDtcblxuLyoqXG4gKiBUaGlzIGludGVyZmFjZSBpcyB1c2VkIHRvIHByb3ZpZGUgaW5mb3JtYXRpb24gYWJvdXQgZGF0ZSBwaWNrZXIgcmVmZXJlbmNlIGFuZCBpdHMgY3VycmVudCB2YWx1ZVxuICogd2hlbiBvbkRpc2FibGVkRGF0ZSBldmVudCBpcyBmaXJlZC5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJRGF0ZVBpY2tlckRpc2FibGVkRGF0ZUV2ZW50QXJncyB7XG4gICAgZGF0ZVBpY2tlcjogSWd4RGF0ZVBpY2tlckNvbXBvbmVudDtcbiAgICBjdXJyZW50VmFsdWU6IERhdGU7XG59XG5cbi8qKlxuICogVGhpcyBpbnRlcmZhY2UgaXMgdXNlZCB0byBwcm92aWRlIGluZm9ybWF0aW9uIGFib3V0IGRhdGUgcGlja2VyIHJlZmVyZW5jZSBhbmQgaXRzIHByZXZpb3VzbHkgdmFsaWQgdmFsdWVcbiAqIHdoZW4gb25WYWxpZGF0aW9uRmFpbGVkIGV2ZW50IGlzIGZpcmVkLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIElEYXRlUGlja2VyVmFsaWRhdGlvbkZhaWxlZEV2ZW50QXJncyB7XG4gICAgZGF0ZVBpY2tlcjogSWd4RGF0ZVBpY2tlckNvbXBvbmVudDtcbiAgICBwcmV2VmFsdWU6IERhdGU7XG59XG5cbi8qKlxuICogVGhpcyBpbnRlcmZhY2UgaXMgdXNlZCB0byBjb25maWd1cmUgY2FsZW5kYXIgZm9ybWF0IHZpZXcgb3B0aW9ucy5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJRm9ybWF0Vmlld3Mge1xuICAgIGRheT86IGJvb2xlYW47XG4gICAgbW9udGg/OiBib29sZWFuO1xuICAgIHllYXI/OiBib29sZWFuO1xufVxuXG4vKipcbiAqIFRoaXMgaW50ZXJmYWNlIGlzIHVzZWQgdG8gY29uZmlndXJlIGNhbGVuZGFyIGZvcm1hdCBvcHRpb25zLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIElGb3JtYXRPcHRpb25zIHtcbiAgICBkYXk/OiBzdHJpbmc7XG4gICAgbW9udGg/OiBzdHJpbmc7XG4gICAgd2Vla2RheT86IHN0cmluZztcbiAgICB5ZWFyPzogc3RyaW5nO1xufVxuXG4vKipcbiAqIFRoaXMgZW51bWVyYXRpb24gaXMgdXNlZCB0byBjb25maWd1cmUgdGhlIGRhdGUgcGlja2VyIHRvIG9wZXJhdGUgd2l0aCBwcmUtZGVmaW5lZCBmb3JtYXQgb3B0aW9uIHVzZWQgaW4gQW5ndWxhciBEYXRlUGlwZS5cbiAqICdodHRwczovL2FuZ3VsYXIuaW8vYXBpL2NvbW1vbi9EYXRlUGlwZSdcbiAqICdzaG9ydERhdGUnOiBlcXVpdmFsZW50IHRvICdNL2QveXknICg2LzE1LzE1KS5cbiAqICdtZWRpdW1EYXRlJzogZXF1aXZhbGVudCB0byAnTU1NIGQsIHknIChKdW4gMTUsIDIwMTUpLlxuICogJ2xvbmdEYXRlJzogZXF1aXZhbGVudCB0byAnTU1NTSBkLCB5JyAoSnVuZSAxNSwgMjAxNSkuXG4gKiAnZnVsbERhdGUnOiBlcXVpdmFsZW50IHRvICdFRUVFLCBNTU1NIGQsIHknIChNb25kYXksIEp1bmUgMTUsIDIwMTUpLlxuICovXG5leHBvcnQgZW51bSBQcmVkZWZpbmVkRm9ybWF0T3B0aW9ucyB7XG4gICAgU2hvcnREYXRlID0gJ3Nob3J0RGF0ZScsXG4gICAgTWVkaXVtRGF0ZSA9ICdtZWRpdW1EYXRlJyxcbiAgICBMb25nRGF0ZSA9ICdsb25nRGF0ZScsXG4gICAgRnVsbERhdGUgPSAnZnVsbERhdGUnXG59XG5cbi8qKlxuICogKipJZ25pdGUgVUkgZm9yIEFuZ3VsYXIgRGF0ZSBQaWNrZXIqKiAtXG4gKiBbRG9jdW1lbnRhdGlvbl0oaHR0cHM6Ly93d3cuaW5mcmFnaXN0aWNzLmNvbS9wcm9kdWN0cy9pZ25pdGUtdWktYW5ndWxhci9hbmd1bGFyL2NvbXBvbmVudHMvZGF0ZV9waWNrZXIuaHRtbClcbiAqXG4gKiBUaGUgSWduaXRlIFVJIERhdGUgUGlja2VyIGRpc3BsYXlzIGEgcG9wdXAgY2FsZW5kYXIgdGhhdCBsZXRzIHVzZXJzIHNlbGVjdCBhIHNpbmdsZSBkYXRlLlxuICpcbiAqIEV4YW1wbGU6XG4gKiBgYGBodG1sXG4gKiA8aWd4LWRhdGUtcGlja2VyIFsobmdNb2RlbCldPVwic2VsZWN0ZWREYXRlXCI+PC9pZ3gtZGF0ZS1waWNrZXI+XG4gKiBgYGBcbiAqL1xuQENvbXBvbmVudCh7XG4gICAgcHJvdmlkZXJzOlxuICAgICAgICBbe1xuICAgICAgICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICAgICAgICB1c2VFeGlzdGluZzogSWd4RGF0ZVBpY2tlckNvbXBvbmVudCxcbiAgICAgICAgICAgIG11bHRpOiB0cnVlXG4gICAgICAgIH1dLFxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcbiAgICBzZWxlY3RvcjogJ2lneC1kYXRlLXBpY2tlcicsXG4gICAgdGVtcGxhdGVVcmw6ICdkYXRlLXBpY2tlci5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVzOiBbYFxuICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgfVxuICAgIGBdXG59KVxuZXhwb3J0IGNsYXNzIElneERhdGVQaWNrZXJDb21wb25lbnQgaW1wbGVtZW50cyBJRGF0ZVBpY2tlciwgQ29udHJvbFZhbHVlQWNjZXNzb3IsIEVkaXRvclByb3ZpZGVyLCBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XG4gICAgLyoqXG4gICAgICogQW4gQElucHV0IHByb3BlcnR5IHRoYXQgc2V0cyB0aGUgYElneERhdGVQaWNrZXJDb21wb25lbnRgIGxhYmVsLlxuICAgICAqIFRoZSBkZWZhdWx0IGxhYmVsIGlzICdEYXRlJy5cbiAgICAgKiBgYGBodG1sXG4gICAgICogPGlneC1kYXRlLXBpY2tlciBbbGFiZWxdPVwiQ2FsZW5kYXJcIj48L2lneC1kYXRlLXBpY2tlcj5cbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBsYWJlbCA9ICdEYXRlJztcblxuICAgIC8qKlxuICAgICAqIEFuIEBJbnB1dCBwcm9wZXJ0eSB0aGF0IHNldHMgdGhlIGBJZ3hEYXRlUGlja2VyQ29tcG9uZW50YCBsYWJlbCB2aXNpYmlsaXR5LlxuICAgICAqIEJ5IGRlZmF1bHQgdGhlIHZpc2liaWxpdHkgaXMgc2V0IHRvIHRydWUuXG4gICAgICogPGlneC1kYXRlLXBpY2tlciBbbGFiZWxWaXNpYmlsaXR5XT1cImZhbHNlXCI+PC9pZ3gtZGF0ZS1waWNrZXI+XG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgbGFiZWxWaXNpYmlsaXR5ID0gdHJ1ZTtcblxuICAgIC8qKlxuICAgICAqQW4gQElucHV0IHByb3BlcnR5IHRoYXQgc2V0cyBsb2NhbGVzLiBEZWZhdWx0IGxvY2FsZSBpcyBlbi5cbiAgICAgKmBgYGh0bWxcbiAgICAgKjxpZ3gtZGF0ZS1waWNrZXIgbG9jYWxlPVwiamEtSlBcIiBbdmFsdWVdPVwiZGF0ZVwiPjwvaWd4LWRhdGUtcGlja2VyPlxuICAgICAqYGBgXG4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIGxvY2FsZTogJ2VuJztcblxuICAgIC8qKlxuICAgICAqQW4gQElucHV0IHByb3BlcnR5IHRoYXQgc2V0cyBvbiB3aGljaCBkYXkgdGhlIHdlZWsgc3RhcnRzLlxuICAgICAqYGBgaHRtbFxuICAgICAqPGlneC1kYXRlLXBpY2tlciBbd2Vla1N0YXJ0XT1cIldFRUtEQVlTLkZSSURBWVwiIGNhbmNlbEJ1dHRvbkxhYmVsPVwiY2FuY2VsXCIgdG9kYXlCdXR0b25MYWJlbD1cInRvZGF5XCI+PC9pZ3gtZGF0ZS1waWNrZXI+XG4gICAgICpgYGBcbiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgd2Vla1N0YXJ0OiBXRUVLREFZUyB8IG51bWJlciA9IFdFRUtEQVlTLlNVTkRBWTtcblxuICAgIC8qKlxuICAgICAqUmV0dXJucyB0aGUgZm9ybWF0IG9wdGlvbnMgb2YgdGhlIGBJZ3hEYXRlUGlja2VyQ29tcG9uZW50YC5cbiAgICAgKmBgYHR5cGVzY3JpcHRcbiAgICAgKkBWaWV3Q2hpbGQoXCJNeURhdGVQaWNrZXJcIilcbiAgICAgKnB1YmxpYyBkYXRlUGlja2VyOiBJZ3hEYXRlUGlja2VyQ29tcG9uZW50O1xuICAgICAqbmdBZnRlclZpZXdJbml0KCl7XG4gICAgICogICAgbGV0IGZvcm1hdE9wdGlvbnMgPSB0aGlzLmRhdGVQaWNrZXIuZm9ybWF0T3B0aW9ucztcbiAgICAgKn1cbiAgICAgKmBgYFxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGdldCBmb3JtYXRPcHRpb25zKCk6IElGb3JtYXRPcHRpb25zIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Zvcm1hdE9wdGlvbnM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpTZXRzIHRoZSBmb3JtYXQgb3B0aW9ucyBvZiB0aGUgYElneERhdGVQaWNrZXJDb21wb25lbnRgLlxuICAgICAqYGBgdHlwZXNjcmlwdFxuICAgICAqcHVibGljIE9wdGlvbnM7XG4gICAgICpAVmlld0NoaWxkKFwiTXlEYXRlUGlja2VyXCIpXG4gICAgICpwdWJsaWMgZGF0ZVBpY2tlcjogSWd4RGF0ZVBpY2tlckNvbXBvbmVudDtcbiAgICAgKm5nQWZ0ZXJWaWV3SW5pdCgpe1xuICAgICAqICAgIHRoaXMuT3B0aW9ucyA9IHtcbiAgICAgKiAgICAgICAgZGF5OiBcIm51bWVyaWNcIixcbiAgICAgKiAgICAgICAgbW9udGg6IFwibG9uZ1wiLFxuICAgICAqICAgICAgICB3ZWVrZGF5OiBcImxvbmdcIixcbiAgICAgKiAgICAgICAgeWVhcjogXCJudW1lcmljXCJcbiAgICAgKiAgICB9XG4gICAgICp0aGlzLmRhdGVQaWNrZXIuZm9ybWF0T3B0aW9ucyA9IHRoaXMuT3B0aW9ucztcbiAgICAgKn1cbiAgICAgKmBgYFxuICAgICAqL1xuICAgIHB1YmxpYyBzZXQgZm9ybWF0T3B0aW9ucyhmb3JtYXRPcHRpb25zOiBJRm9ybWF0T3B0aW9ucykge1xuICAgICAgICB0aGlzLl9mb3JtYXRPcHRpb25zID0gT2JqZWN0LmFzc2lnbih0aGlzLl9mb3JtYXRPcHRpb25zLCBmb3JtYXRPcHRpb25zKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlJldHVybnMgdGhlIGRhdGUgZGlzcGxheSBmb3JtYXQgb2YgdGhlIGBJZ3hEYXRlUGlja2VyQ29tcG9uZW50YCBpbiBkcm9wZG93biBtb2RlLlxuICAgICAqYGBgdHlwZXNjcmlwdFxuICAgICAqQFZpZXdDaGlsZChcIk15RGF0ZVBpY2tlclwiKVxuICAgICAqcHVibGljIGRhdGVQaWNrZXI6IElneERhdGVQaWNrZXJDb21wb25lbnQ7XG4gICAgICpuZ0FmdGVyVmlld0luaXQoKXtcbiAgICAgKiAgICBsZXQgZm9ybWF0ID0gdGhpcy5kYXRlUGlja2VyLmZvcm1hdDtcbiAgICAgKn1cbiAgICAgKmBgYFxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGdldCBmb3JtYXQoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuICh0aGlzLl9mb3JtYXQgPT09IHVuZGVmaW5lZCkgPyBQcmVkZWZpbmVkRm9ybWF0T3B0aW9ucy5TaG9ydERhdGUgOiB0aGlzLl9mb3JtYXQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKlNldHMgdGhlIGRhdGUgZm9ybWF0IG9mIHRoZSBgSWd4RGF0ZVBpY2tlckNvbXBvbmVudGAgd2hlbiBpbiBlZGl0YWJsZSBkcm9wZG93biBtb2RlLlxuICAgICpgYGB0eXBlc2NyaXB0XG4gICAgKkBWaWV3Q2hpbGQoXCJNeURhdGVQaWNrZXJcIilcbiAgICAqcHVibGljIGRhdGVQaWNrZXI6IElneERhdGVQaWNrZXJDb21wb25lbnQ7XG4gICAgKnRoaXMuZGF0ZVBpY2tlci5mb3JtYXQgPSAneXl5eS1NLWQnO1xuICAgICp9XG4gICAgKmBgYFxuICAgICovXG4gICAgcHVibGljIHNldCBmb3JtYXQoZm9ybWF0OiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fZm9ybWF0ID0gZm9ybWF0O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqUmV0dXJucyB0aGUgZGF0ZSBtYXNrIG9mIHRoZSBgSWd4RGF0ZVBpY2tlckNvbXBvbmVudGAgd2hlbiBpbiBlZGl0YWJsZSBkcm9wZG93biBtb2RlLlxuICAgICAqYGBgdHlwZXNjcmlwdFxuICAgICAqQFZpZXdDaGlsZChcIk15RGF0ZVBpY2tlclwiKVxuICAgICAqcHVibGljIGRhdGVQaWNrZXI6IElneERhdGVQaWNrZXJDb21wb25lbnQ7XG4gICAgICpuZ0FmdGVyVmlld0luaXQoKXtcbiAgICAgKiAgICBsZXQgbWFzayA9IHRoaXMuZGF0ZVBpY2tlci5tYXNrO1xuICAgICAqfVxuICAgICAqYGBgXG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgbWFzazogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICpSZXR1cm5zIHRoZSBmb3JtYXQgdmlld3Mgb2YgdGhlIGBJZ3hEYXRlUGlja2VyQ29tcG9uZW50YC5cbiAgICAgKmBgYHR5cGVzY3JpcHRcbiAgICAgKkBWaWV3Q2hpbGQoXCJNeURhdGVQaWNrZXJcIilcbiAgICAgKnB1YmxpYyBkYXRlUGlja2VyOiBJZ3hEYXRlUGlja2VyQ29tcG9uZW50O1xuICAgICAqbmdBZnRlclZpZXdJbml0KCl7XG4gICAgICogICAgbGV0IGZvcm1hdFZpZXdzID0gdGhpcy5kYXRlUGlja2VyLmZvcm1hdFZpZXdzO1xuICAgICAqfVxuICAgICAqYGBgXG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZ2V0IGZvcm1hdFZpZXdzKCk6IElGb3JtYXRWaWV3cyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9mb3JtYXRWaWV3cztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlNldHMgdGhlIGZvcm1hdCB2aWV3cyBvZiB0aGUgYElneERhdGVQaWNrZXJDb21wb25lbnRgLlxuICAgICAqYGBgdHlwZXNjcmlwdFxuICAgICAqcHVibGljIFZpZXdzO1xuICAgICAqQFZpZXdDaGlsZChcIk15RGF0ZVBpY2tlclwiKVxuICAgICAqcHVibGljIGRhdGVQaWNrZXI6IElneERhdGVQaWNrZXJDb21wb25lbnQ7XG4gICAgICpuZ0FmdGVyVmlld0luaXQoKXtcbiAgICAgKiAgICB0aGlzLlZpZXdzID0ge2RheTpmYWxzZSwgbW9udGg6IGZhbHNlLCB5ZWFyOmZhbHNlfTtcbiAgICAgKiAgICB0aGlzLmRhdGVQaWNrZXIuZm9ybWF0Vmlld3MgPSB0aGlzLlZpZXdzO1xuICAgICAqfVxuICAgICAqYGBgXG4gICAgICovXG4gICAgcHVibGljIHNldCBmb3JtYXRWaWV3cyhmb3JtYXRWaWV3czogSUZvcm1hdFZpZXdzKSB7XG4gICAgICAgIHRoaXMuX2Zvcm1hdFZpZXdzID0gT2JqZWN0LmFzc2lnbih0aGlzLl9mb3JtYXRWaWV3cywgZm9ybWF0Vmlld3MpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIGRpc2FibGVkIGRhdGVzIGRlc2NyaXB0b3JzLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBsZXQgZGlzYWJsZWREYXRlcyA9IHRoaXMuZGF0ZXBpY2tlci5kaXNhYmxlZERhdGVzO1xuICAgICAqIGBgYFxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGdldCBkaXNhYmxlZERhdGVzKCk6IERhdGVSYW5nZURlc2NyaXB0b3JbXSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kaXNhYmxlZERhdGVzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIGRpc2FibGVkIGRhdGVzJyBkZXNjcmlwdG9ycy5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICpAVmlld0NoaWxkKFwiTXlEYXRlUGlja2VyXCIpXG4gICAgICpwdWJsaWMgZGF0ZVBpY2tlcjogSWd4RGF0ZVBpY2tlckNvbXBvbmVudDtcbiAgICAgKm5nQWZ0ZXJWaWV3SW5pdCgpe1xuICAgICAqICAgIHRoaXMuZGF0ZVBpY2tlci5kaXNhYmxlZERhdGVzID0gW1xuICAgICAqICAgICB7dHlwZTogRGF0ZVJhbmdlVHlwZS5CZXR3ZWVuLCBkYXRlUmFuZ2U6IFtuZXcgRGF0ZShcIjIwMjAtMS0xXCIpLCBuZXcgRGF0ZShcIjIwMjAtMS0xNVwiKV19LFxuICAgICAqICAgICB7dHlwZTogRGF0ZVJhbmdlVHlwZS5XZWVrZW5kc31dO1xuICAgICAqfVxuICAgICAqYGBgXG4gICAgICovXG4gICAgcHVibGljIHNldCBkaXNhYmxlZERhdGVzKHZhbHVlOiBEYXRlUmFuZ2VEZXNjcmlwdG9yW10pIHtcbiAgICAgICAgdGhpcy5fZGlzYWJsZWREYXRlcyA9IHZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIHNwZWNpYWwgZGF0ZXMgZGVzY3JpcHRvcnMuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGxldCBzcGVjaWFsRGF0ZXMgPSB0aGlzLmRhdGVwaWNrZXIuc3BlY2lhbERhdGVzO1xuICAgICAqIGBgYFxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGdldCBzcGVjaWFsRGF0ZXMoKTogRGF0ZVJhbmdlRGVzY3JpcHRvcltdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NwZWNpYWxEYXRlcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBzcGVjaWFsIGRhdGVzJyBkZXNjcmlwdG9ycy5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICpAVmlld0NoaWxkKFwiTXlEYXRlUGlja2VyXCIpXG4gICAgICpwdWJsaWMgZGF0ZVBpY2tlcjogSWd4RGF0ZVBpY2tlckNvbXBvbmVudDtcbiAgICAgKm5nQWZ0ZXJWaWV3SW5pdCgpe1xuICAgICAqICAgIHRoaXMuZGF0ZVBpY2tlci5zcGVjaWFsRGF0ZXMgPSBbXG4gICAgICogICAgIHt0eXBlOiBEYXRlUmFuZ2VUeXBlLkJldHdlZW4sIGRhdGVSYW5nZTogW25ldyBEYXRlKFwiMjAyMC0xLTFcIiksIG5ldyBEYXRlKFwiMjAyMC0xLTE1XCIpXX0sXG4gICAgICogICAgIHt0eXBlOiBEYXRlUmFuZ2VUeXBlLldlZWtlbmRzfV07XG4gICAgICp9XG4gICAgICpgYGBcbiAgICAgKi9cbiAgICBwdWJsaWMgc2V0IHNwZWNpYWxEYXRlcyh2YWx1ZTogRGF0ZVJhbmdlRGVzY3JpcHRvcltdKSB7XG4gICAgICAgIHRoaXMuX3NwZWNpYWxEYXRlcyA9IHZhbHVlO1xuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGdldCBtb2RhbE92ZXJsYXlTZXR0aW5ncygpOiBPdmVybGF5U2V0dGluZ3Mge1xuICAgICAgICByZXR1cm4gdGhpcy5fbW9kYWxPdmVybGF5O1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgbW9kYWxPdmVybGF5U2V0dGluZ3ModmFsdWU6IE92ZXJsYXlTZXR0aW5ncykge1xuICAgICAgICB0aGlzLl9tb2RhbE92ZXJsYXkgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBnZXQgZHJvcERvd25PdmVybGF5U2V0dGluZ3MoKTogT3ZlcmxheVNldHRpbmdzIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Ryb3BEb3duT3ZlcmxheVNldHRpbmdzIHx8IHRoaXMuX2RlZmF1bHREcm9wRG93bk92ZXJsYXlTZXR0aW5ncztcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IGRyb3BEb3duT3ZlcmxheVNldHRpbmdzKHZhbHVlOiBPdmVybGF5U2V0dGluZ3MpIHtcbiAgICAgICAgdGhpcy5fZHJvcERvd25PdmVybGF5U2V0dGluZ3MgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlJldHVybnMgdGhlIGZvcm1hdHRlZCBkYXRlIHdoZW4gYElneERhdGVQaWNrZXJDb21wb25lbnRgIGlzIGluIGRpYWxvZyBtb2RlLlxuICAgICAqYGBgdHlwZXNjcmlwdFxuICAgICAqQFZpZXdDaGlsZChcIk15RGF0ZVBpY2tlclwiKVxuICAgICAqcHVibGljIGRhdGVQaWNrZXI6IElneERhdGVQaWNrZXJDb21wb25lbnQ7XG4gICAgICpwdWJsaWMgc2VsZWN0aW9uKGV2ZW50KXtcbiAgICAgKiAgICBsZXQgc2VsZWN0ZWREYXRlID0gdGhpcy5kYXRlUGlja2VyLmRpc3BsYXlEYXRhO1xuICAgICAqICAgIGFsZXJ0KHNlbGVjdGVkRGF0ZSk7XG4gICAgICp9XG4gICAgICpgYGBcbiAgICAgKmBgYGh0bWxcbiAgICAgKjxpZ3gtZGF0ZS1waWNrZXIgI015RGF0ZVBpY2tlciAob25TZWxlY3Rpb24pPVwic2VsZWN0aW9uKClcIiB0b2RheUJ1dHRvbkxhYmVsPVwidG9kYXlcIj48L2lneC1kYXRlLXBpY2tlcj5cbiAgICAgKmBgYFxuICAgICAqL1xuICAgIHB1YmxpYyBnZXQgZGlzcGxheURhdGEoKTogc3RyaW5nIHtcbiAgICAgICAgaWYgKHRoaXMudmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9jdXN0b21Gb3JtYXRDaGVja2VyKHRoaXMuZm9ybWF0dGVyLCB0aGlzLnZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgIGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyBnZXQgdHJhbnNmb3JtZWREYXRlKCk6IHN0cmluZyB7XG4gICAgICAgIGlmICh0aGlzLl92YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fdHJhbnNmb3JtZWREYXRlID0gKHRoaXMuX2lzSW5FZGl0TW9kZSkgPyB0aGlzLl9nZXRFZGl0b3JEYXRlKHRoaXMuX3ZhbHVlKSA6IHRoaXMuX2dldERpc3BsYXlEYXRlKHRoaXMuX3ZhbHVlKTtcbiAgICAgICAgICAgIHRoaXMuaXNFbXB0eSA9IGZhbHNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fdHJhbnNmb3JtZWREYXRlID0gKHRoaXMuX2lzSW5FZGl0TW9kZSkgPyBEYXRlUGlja2VyVXRpbC5tYXNrVG9Qcm9tcHRDaGFycyh0aGlzLmlucHV0TWFzaykgOiAnJztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fdHJhbnNmb3JtZWREYXRlO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgdHJhbnNmb3JtZWREYXRlKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX3RyYW5zZm9ybWVkRGF0ZSA9IHZhbHVlO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKEBJbmplY3QoSWd4T3ZlcmxheVNlcnZpY2UpIHByaXZhdGUgX292ZXJsYXlTZXJ2aWNlOiBJZ3hPdmVybGF5U2VydmljZSwgcHVibGljIGVsZW1lbnQ6IEVsZW1lbnRSZWYsXG4gICAgICAgIHByaXZhdGUgX2NkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsIHByaXZhdGUgX21vZHVsZVJlZjogTmdNb2R1bGVSZWY8YW55PikgeyB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBpbnB1dCBncm91cCB0ZW1wbGF0ZS5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogbGV0IHRlbXBsYXRlID0gdGhpcy50ZW1wbGF0ZSgpO1xuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hEYXRlUGlja2VyQ29tcG9uZW50XG4gICAgICovXG4gICAgZ2V0IHRlbXBsYXRlKCk6IFRlbXBsYXRlUmVmPGFueT4ge1xuICAgICAgICBpZiAodGhpcy5kYXRlUGlja2VyVGVtcGxhdGVEaXJlY3RpdmUpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRhdGVQaWNrZXJUZW1wbGF0ZURpcmVjdGl2ZS50ZW1wbGF0ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKHRoaXMubW9kZSA9PT0gSW50ZXJhY3Rpb25Nb2RlLkRpYWxvZykgPyB0aGlzLnJlYWRPbmx5RGF0ZVBpY2tlclRlbXBsYXRlIDogdGhpcy5lZGl0YWJsZURhdGVQaWNrZXJUZW1wbGF0ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBjb250ZXh0IHBhc3NlZCB0byB0aGUgaW5wdXQgZ3JvdXAgdGVtcGxhdGUuXG4gICAgICogQG1lbWJlcm9mIElneERhdGVQaWNrZXJDb21wb25lbnRcbiAgICAgKi9cbiAgICBnZXQgY29udGV4dCgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGRpc2FibGVkOiB0aGlzLmRpc2FibGVkLFxuICAgICAgICAgICAgZGlzYWJsZWREYXRlczogdGhpcy5kaXNhYmxlZERhdGVzLFxuICAgICAgICAgICAgZGlzcGxheURhdGE6IHRoaXMuZGlzcGxheURhdGEsXG4gICAgICAgICAgICBmb3JtYXQ6IHRoaXMuZm9ybWF0LFxuICAgICAgICAgICAgaXNTcGluTG9vcDogdGhpcy5pc1NwaW5Mb29wLFxuICAgICAgICAgICAgbGFiZWw6IHRoaXMubGFiZWwsXG4gICAgICAgICAgICBsYWJlbFZpc2liaWxpdHk6IHRoaXMubGFiZWxWaXNpYmlsaXR5LFxuICAgICAgICAgICAgbG9jYWxlOiB0aGlzLmxvY2FsZSxcbiAgICAgICAgICAgIG1hc2s6IHRoaXMubWFzayxcbiAgICAgICAgICAgIG1vZGU6IHRoaXMubW9kZSxcbiAgICAgICAgICAgIHNwZWNpYWxEYXRlczogdGhpcy5zcGVjaWFsRGF0ZXMsXG4gICAgICAgICAgICB2YWx1ZTogdGhpcy52YWx1ZSxcbiAgICAgICAgICAgIG9wZW5EaWFsb2c6ICh0YXJnZXQ/OiBIVE1MRWxlbWVudCkgPT4gdGhpcy5vcGVuRGlhbG9nKHRhcmdldClcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKkFuIEBJbnB1dCBwcm9wZXJ0eSB0aGF0IGdldHMvc2V0cyB0aGUgc2VsZWN0ZWQgZGF0ZS5cbiAgICAgKmBgYHR5cGVzY3JpcHRcbiAgICAgKnB1YmxpYyBkYXRlOiBEYXRlID0gbmV3IERhdGUoKTtcbiAgICAgKmBgYFxuICAgICAqYGBgaHRtbFxuICAgICAqPGlneC1kYXRlLXBpY2tlciBbdmFsdWVdPVwiZGF0ZVwiPjwvaWd4LWRhdGUtcGlja2VyPlxuICAgICAqYGBgXG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZ2V0IHZhbHVlKCk6IERhdGUge1xuICAgICAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCB2YWx1ZShkYXRlOiBEYXRlKSB7XG4gICAgICAgIHRoaXMuX3ZhbHVlID0gZGF0ZTtcbiAgICAgICAgdGhpcy5fb25DaGFuZ2VDYWxsYmFjayhkYXRlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKkFuIEBJbnB1dCBwcm9wZXJ0eSB0aGF0IHNldHMgdGhlIHZhbHVlIG9mIGBpZGAgYXR0cmlidXRlLiBJZiBub3QgcHJvdmlkZWQgaXQgd2lsbCBiZSBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlZC5cbiAgICAgKmBgYGh0bWxcbiAgICAgKjxpZ3gtZGF0ZS1waWNrZXIgW2lkXT1cIidpZ3gtZGF0ZS1waWNrZXItMydcIiBjYW5jZWxCdXR0b25MYWJlbD1cImNhbmNlbFwiIHRvZGF5QnV0dG9uTGFiZWw9XCJ0b2RheVwiPjwvaWd4LWRhdGUtcGlja2VyPlxuICAgICAqYGBgXG4gICAgICovXG4gICAgQEhvc3RCaW5kaW5nKCdhdHRyLmlkJylcbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBpZCA9IGBpZ3gtZGF0ZS1waWNrZXItJHtORVhUX0lEKyt9YDtcblxuICAgIC8qKlxuICAgICAqQW4gQElucHV0IHByb3BlcnR5IHRoYXQgYXBwbGllcyBhIGN1c3RvbSBmb3JtYXR0ZXIgZnVuY3Rpb24gb24gdGhlIHNlbGVjdGVkIG9yIHBhc3NlZCBkYXRlLlxuICAgICAqYGBgdHlwZXNjcmlwdFxuICAgICAqcHVibGljIGRhdGU6IERhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAqcHJpdmF0ZSBkYXlGb3JtYXR0ZXIgPSBuZXcgSW50bC5EYXRlVGltZUZvcm1hdChcImVuXCIsIHsgd2Vla2RheTogXCJsb25nXCIgfSk7XG4gICAgICpwcml2YXRlIG1vbnRoRm9ybWF0dGVyID0gbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQoXCJlblwiLCB7IG1vbnRoOiBcImxvbmdcIiB9KTtcbiAgICAgKnB1YmxpYyBmb3JtYXR0ZXIgPSAoZGF0ZTogRGF0ZSkgPT4geyByZXR1cm4gYFlvdSBzZWxlY3RlZFxuICAgICAqICAgICAgICAgICAgICAgICAgICAgJHt0aGlzLmRheUZvcm1hdHRlci5mb3JtYXQoZGF0ZSl9LFxuICAgICAqICAgICAgICAgICAgICAgICAgICAgJHtkYXRlLmdldERhdGUoKX0gJHt0aGlzLm1vbnRoRm9ybWF0dGVyLmZvcm1hdChkYXRlKX0sXG4gICAgICogICAgICAgICAgICAgICAgICAgICAke2RhdGUuZ2V0RnVsbFllYXIoKX1gO1xuICAgICAqfVxuICAgICAqYGBgXG4gICAgICpgYGBodG1sXG4gICAgICo8aWd4LWRhdGUtcGlja2VyIFt2YWx1ZV09XCJkYXRlXCIgW2Zvcm1hdHRlcl09XCJmb3JtYXR0ZXJcIj48L2lneC1kYXRlLXBpY2tlcj5cbiAgICAgKmBgYFxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGZvcm1hdHRlcjogKHZhbDogRGF0ZSkgPT4gc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICpBbiBASW5wdXQgcHJvcGVydHkgdGhhdCBkaXNhYmxlcyB0aGUgYElneERhdGVQaWNrZXJDb21wb25lbnRgLlxuICAgICAqYGBgaHRtbFxuICAgICAqPGlneC1kYXRlLXBpY2tlciBbZGlzYWJsZWRdPVwiJ3RydWUnXCIgY2FuY2VsQnV0dG9uTGFiZWw9XCJjYW5jZWxcIiB0b2RheUJ1dHRvbkxhYmVsPVwidG9kYXlcIj48L2lneC1kYXRlLXBpY2tlcj5cbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBkaXNhYmxlZDogYm9vbGVhbjtcblxuICAgIC8qKlxuICAgICAqQW4gQElucHV0IHByb3BlcnR5IHRoYXQgc2V0cyB0aGUgb3JpZW50YXRpb24gb2YgdGhlIGBJZ3hEYXRlUGlja2VyQ29tcG9uZW50YCBoZWFkZXIuXG4gICAgICpgYGBodG1sXG4gICAgICo8aWd4LWRhdGUtcGlja2VyIFt2ZXJ0aWNhbF09XCIndHJ1ZSdcIiBjYW5jZWxCdXR0b25MYWJlbD1cImNhbmNlbFwiIHRvZGF5QnV0dG9uTGFiZWw9XCJ0b2RheVwiPjwvaWd4LWRhdGUtcGlja2VyPlxuICAgICAqYGBgXG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgdmVydGljYWwgPSBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqQW4gQElucHV0IHByb3BlcnR5IHRoYXQgcmVuZGVycyB0b2RheSBidXR0b24gd2l0aCBjdXN0b20gbGFiZWwuXG4gICAgICpgYGBodG1sXG4gICAgICo8aWd4LWRhdGUtcGlja2VyIGNhbmNlbEJ1dHRvbkxhYmVsPVwiY2FuY2VsXCIgdG9kYXlCdXR0b25MYWJlbD1cIlRvbW9ycm93XCI+PC9pZ3gtZGF0ZS1waWNrZXI+XG4gICAgICpgYGBcbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyB0b2RheUJ1dHRvbkxhYmVsOiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKkFuIEBJbnB1dCBwcm9wZXJ0eSB0aGF0IHJlbmRlcnMgY2FuY2VsIGJ1dHRvbiB3aXRoIGN1c3RvbSBsYWJlbC5cbiAgICAgKmBgYGh0bWxcbiAgICAgKjxpZ3gtZGF0ZS1waWNrZXIgY2FuY2VsQnV0dG9uTGFiZWw9XCJDbG9zZVwiIHRvZGF5QnV0dG9uTGFiZWw9XCJUb2RheVwiPjwvaWd4LWRhdGUtcGlja2VyPlxuICAgICAqYGBgXG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgY2FuY2VsQnV0dG9uTGFiZWw6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqQW4gQElucHV0IHByb3BlcnR5IHRoYXQgc2V0cyB3aGV0aGVyIGBJZ3hEYXRlUGlja2VyQ29tcG9uZW50YCBpcyBpbiBkaWFsb2cgb3IgZHJvcCBkb3duIG1vZGUuXG4gICAgICpgYGBodG1sXG4gICAgICo8aWd4LWRhdGUtcGlja2VyIG1vZGU9XCJkcm9wZG93blwiPjwvaWd4LWRhdGUtcGlja2VyPlxuICAgICAqYGBgXG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgbW9kZSA9IEludGVyYWN0aW9uTW9kZS5EaWFsb2c7XG5cbiAgICAvKipcbiAgICAgKkFuIEBJbnB1dCBwcm9wZXJ0eSB0aGF0IHNldHMgd2hldGhlciB0aGUgYElneERhdGVQaWNrZXJDb21wb25lbnRgIGRhdGUgcGFydHMgd291bGQgc3BpbiBjb250aW51b3VzbHkgb3Igc3RvcCB3aGVuIG1pbi9tYXggaXMgcmVhY2hlZC5cbiAgICAgKmBgYGh0bWxcbiAgICAgKjxpZ3gtZGF0ZS1waWNrZXIgW2lzU3Bpbkxvb3BdPVwiZmFsc2VcIj48L2lneC1kYXRlLXBpY2tlcj5cbiAgICAgKmBgYFxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGlzU3Bpbkxvb3AgPSB0cnVlO1xuXG4gICAgLyoqXG4gICAgICogRGV0ZXJtaW5lcyB0aGUgY29udGFpbmVyIHRoZSBwb3B1cCBlbGVtZW50IHNob3VsZCBiZSBhdHRhY2hlZCB0by5cbiAgICAgKlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8ZGl2IGlneE92ZXJsYXlPdXRsZXQgI291dGxldD1cIm92ZXJsYXktb3V0bGV0XCI+PC9kaXY+XG4gICAgICogLy8uLlxuICAgICAqIDxpZ3gtZGF0ZS1waWNrZXIgW291dGxldF09XCJvdXRsZXRcIj48L2lneC1kYXRlLXBpY2tlcj5cbiAgICAgKiAvLy4uXG4gICAgICogYGBgXG4gICAgICogV2hlcmUgYG91dGxldGAgaXMgYW4gaW5zdGFuY2Ugb2YgYElneE92ZXJsYXlPdXRsZXREaXJlY3RpdmVgIG9yIGFuIGBFbGVtZW50UmVmYC5cbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBvdXRsZXQ6IElneE92ZXJsYXlPdXRsZXREaXJlY3RpdmUgfCBFbGVtZW50UmVmO1xuXG4gICAgLyoqXG4gICAgICogQGRlcHJlY2F0ZWQgVXNlICdvbk9wZW5lZCcgaW5zdGVhZC5cbiAgICAgKkFuIGV2ZW50IHRoYXQgaXMgZW1pdHRlZCB3aGVuIHRoZSBgSWd4RGF0ZVBpY2tlckNvbXBvbmVudGAgY2FsZW5kYXIgaXMgb3BlbmVkLlxuICAgICAqYGBgdHlwZXNjcmlwdFxuICAgICAqcHVibGljIG9wZW4oZXZlbnQpe1xuICAgICAqICAgIGFsZXJ0KFwiVGhlIGRhdGUtcGlja2VyIGNhbGVuZGFyIGhhcyBiZWVuIG9wZW5lZCFcIik7XG4gICAgICp9XG4gICAgICpgYGBcbiAgICAgKmBgYGh0bWxcbiAgICAgKjxpZ3gtZGF0ZS1waWNrZXIgKG9uT3Blbik9XCJvcGVuKCRldmVudClcIiBjYW5jZWxCdXR0b25MYWJlbD1cImNhbmNlbFwiIHRvZGF5QnV0dG9uTGFiZWw9XCJ0b2RheVwiPjwvaWd4LWRhdGUtcGlja2VyPlxuICAgICAqYGBgXG4gICAgICovXG4gICAgQERlcHJlY2F0ZVByb3BlcnR5KGAnb25PcGVuJyBAT3V0cHV0IHByb3BlcnR5IGlzIGRlcHJlY2F0ZWQuIFVzZSAnb25PcGVuZWQnIGluc3RlYWQuYClcbiAgICBAT3V0cHV0KClcbiAgICBwdWJsaWMgZ2V0IG9uT3BlbigpOiBFdmVudEVtaXR0ZXI8SWd4RGF0ZVBpY2tlckNvbXBvbmVudD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fb25PcGVuO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgb25PcGVuKHZhbDogRXZlbnRFbWl0dGVyPElneERhdGVQaWNrZXJDb21wb25lbnQ+KSB7XG4gICAgICAgIHRoaXMuX29uT3BlbiA9IHZhbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKkFuIGV2ZW50IHRoYXQgaXMgZW1pdHRlZCB3aGVuIHRoZSBgSWd4RGF0ZVBpY2tlckNvbXBvbmVudGAgY2FsZW5kYXIgaXMgb3BlbmVkLlxuICAgICovXG4gICAgQE91dHB1dCgpXG4gICAgcHVibGljIG9uT3BlbmVkID0gbmV3IEV2ZW50RW1pdHRlcjxJZ3hEYXRlUGlja2VyQ29tcG9uZW50PigpO1xuXG4gICAgLyoqXG4gICAgICogQGRlcHJlY2F0ZWQgVXNlICdvbkNsb3NlZCcgaW5zdGVhZC5cbiAgICAgKlwiQW4gZXZlbnQgdGhhdCBpcyBlbWl0dGVkIHdoZW4gdGhlIGBJZ3hEYXRlUGlja2VyQ29tcG9uZW50YCBpcyBjbG9zZWQuXG4gICAgICpgYGB0eXBlc2NyaXB0XG4gICAgICpwdWJsaWMgY2xvc2UoZXZlbnQpe1xuICAgICAqICAgIGFsZXJ0KFwiVGhlIGRhdGUtcGlja2VyIGhhcyBiZWVuIGNsb3NlZCFcIik7XG4gICAgICp9XG4gICAgICpgYGBcbiAgICAgKmBgYGh0bWxcbiAgICAgKjxpZ3gtZGF0ZS1waWNrZXIgKG9uQ2xvc2UpPVwiY2xvc2UoJGV2ZW50KVwiIGNhbmNlbEJ1dHRvbkxhYmVsPVwiY2FuY2VsXCIgdG9kYXlCdXR0b25MYWJlbD1cInRvZGF5XCI+PC9pZ3gtZGF0ZS1waWNrZXI+XG4gICAgICpgYGBcbiAgICAgKi9cbiAgICBARGVwcmVjYXRlUHJvcGVydHkoYCdvbkNsb3NlJyBAT3V0cHV0IHByb3BlcnR5IGlzIGRlcHJlY2F0ZWQuIFVzZSAnb25DbG9zZWQnIGluc3RlYWQuYClcbiAgICBAT3V0cHV0KClcbiAgICBwdWJsaWMgZ2V0IG9uQ2xvc2UoKTogRXZlbnRFbWl0dGVyPElneERhdGVQaWNrZXJDb21wb25lbnQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX29uQ2xvc2U7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBvbkNsb3NlKHZhbDogRXZlbnRFbWl0dGVyPElneERhdGVQaWNrZXJDb21wb25lbnQ+KSB7XG4gICAgICAgIHRoaXMuX29uQ2xvc2UgPSB2YWw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpBbiBldmVudCB0aGF0IGlzIGVtaXR0ZWQgYWZ0ZXIgdGhlIGBJZ3hEYXRlUGlja2VyQ29tcG9uZW50YCBpcyBjbG9zZWQuXG4gICAgKi9cbiAgICBAT3V0cHV0KClcbiAgICBwdWJsaWMgb25DbG9zZWQgPSBuZXcgRXZlbnRFbWl0dGVyPElneERhdGVQaWNrZXJDb21wb25lbnQ+KCk7XG5cbiAgICAvKipcbiAgICAgKiBBbiBldmVudCB0aGF0IGlzIGVtaXR0ZWQgd2hlbiB0aGUgYElneERhdGVQaWNrZXJDb21wb25lbnRgIGlzIGJlaW5nIGNsb3NlZC5cbiAgICAgKi9cbiAgICBAT3V0cHV0KClcbiAgICBwdWJsaWMgb25DbG9zaW5nID0gbmV3IEV2ZW50RW1pdHRlcjxDYW5jZWxhYmxlQnJvd3NlckV2ZW50QXJncz4oKTtcblxuICAgIC8qKlxuICAgICAqQW4gQE91dHB1dCBwcm9wZXJ0eSB0aGF0IGlzIGZpcmVkIHdoZW4gc2VsZWN0aW9uIGlzIG1hZGUgaW4gdGhlIGNhbGVuZGFyLlxuICAgICAqYGBgdHlwZXNjcmlwdFxuICAgICAqcHVibGljIHNlbGVjdGlvbihldmVudCl7XG4gICAgICogICAgYWxlcnQoXCJBIGRhdGUgaGFzIGJlZW4gc2VsZWN0ZWQhXCIpO1xuICAgICAqfVxuICAgICAqYGBgXG4gICAgICpgYGBodG1sXG4gICAgICo8aWd4LWRhdGUtcGlja2VyIChvblNlbGVjdGlvbik9XCJzZWxlY3Rpb24oJGV2ZW50KVwiIGNhbmNlbEJ1dHRvbkxhYmVsPVwiY2FuY2VsXCIgdG9kYXlCdXR0b25MYWJlbD1cInRvZGF5XCI+PC9pZ3gtZGF0ZS1waWNrZXI+XG4gICAgICpgYGBcbiAgICAgKi9cbiAgICBAT3V0cHV0KClcbiAgICBwdWJsaWMgb25TZWxlY3Rpb24gPSBuZXcgRXZlbnRFbWl0dGVyPERhdGU+KCk7XG5cbiAgICAvKipcbiAgICAqQW4gQE91dHB1dCBwcm9wZXJ0eSB0aGF0IGZpcmVzIHdoZW4gdGhlIHVzZXIgdHlwZXMvc3BpbnMgdG8gYSBkaXNhYmxlZCBkYXRlIGluIHRoZSBkYXRlLXBpY2tlciBlZGl0b3IuXG4gICAgKmBgYHR5cGVzY3JpcHRcbiAgICAqcHVibGljIG9uRGlzYWJsZWREYXRlKGV2ZW50KXtcbiAgICAqICAgIGFsZXJ0KFwiVGhpcyBkYXRlIGlzIGRpc2FibGVkIVwiKTtcbiAgICAqfVxuICAgICpgYGBcbiAgICAqYGBgaHRtbFxuICAgICo8aWd4LWRhdGUtcGlja2VyIChvbkRpc2FibGVkRGF0ZSk9XCJvbkRpc2FibGVkRGF0ZSgkZXZlbnQpXCI+PC9pZ3gtZGF0ZS1waWNrZXI+XG4gICAgKmBgYFxuICAgICovXG4gICAgQE91dHB1dCgpXG4gICAgcHVibGljIG9uRGlzYWJsZWREYXRlID0gbmV3IEV2ZW50RW1pdHRlcjxJRGF0ZVBpY2tlckRpc2FibGVkRGF0ZUV2ZW50QXJncz4oKTtcblxuICAgIC8qKlxuICAgICpBbiBAT3V0cHV0IHByb3BlcnR5IHRoYXQgZmlyZXMgd2hlbiB0aGUgdXNlciB0eXBlcy9zcGlucyBpbnZhbGlkIGRhdGUgaW4gdGhlIGRhdGUtcGlja2VyIGVkaXRvci5cbiAgICAqYGBgdHlwZXNjcmlwdFxuICAgICpwdWJsaWMgb25WYWxpZGF0aW9uRmFpbGVkKGV2ZW50KXtcbiAgICAgICAgKiAgICBhbGVydChcIlRoaXMgZGF0ZSBpcyBub3QgdmFsaWQhXCIpO1xuICAgICAgICAqfVxuICAgICAgICAqYGBgXG4gICAgICAgICpgYGBodG1sXG4gICAgICAgICo8aWd4LWRhdGUtcGlja2VyIChvblZhbGlkYXRpb25GYWlsZWQpPVwib25WYWxpZGF0aW9uRmFpbGVkKCRldmVudClcIj48L2lneC1kYXRlLXBpY2tlcj5cbiAgICAgICAgKmBgYFxuICAgICAgICAqL1xuICAgIEBPdXRwdXQoKVxuICAgIHB1YmxpYyBvblZhbGlkYXRpb25GYWlsZWQgPSBuZXcgRXZlbnRFbWl0dGVyPElEYXRlUGlja2VyVmFsaWRhdGlvbkZhaWxlZEV2ZW50QXJncz4oKTtcblxuICAgIC8qXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIEBWaWV3Q2hpbGQoJ3JlYWRPbmx5RGF0ZVBpY2tlclRlbXBsYXRlJywgeyByZWFkOiBUZW1wbGF0ZVJlZiwgc3RhdGljOiB0cnVlIH0pXG4gICAgcHJvdGVjdGVkIHJlYWRPbmx5RGF0ZVBpY2tlclRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gICAgLypcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgQFZpZXdDaGlsZCgnZWRpdGFibGVEYXRlUGlja2VyVGVtcGxhdGUnLCB7IHJlYWQ6IFRlbXBsYXRlUmVmLCBzdGF0aWM6IHRydWUgfSlcbiAgICBwcm90ZWN0ZWQgZWRpdGFibGVEYXRlUGlja2VyVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgICAvKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBAVmlld0NoaWxkKElneElucHV0R3JvdXBDb21wb25lbnQsIHsgc3RhdGljOiBmYWxzZSB9KVxuICAgIHByb3RlY3RlZCBpbnB1dEdyb3VwOiBJZ3hJbnB1dEdyb3VwQ29tcG9uZW50O1xuXG4gICAgLypcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgQFZpZXdDaGlsZCgnZWRpdGFibGVJbnB1dCcsIHsgcmVhZDogRWxlbWVudFJlZiwgc3RhdGljOiBmYWxzZSB9KVxuICAgIHByb3RlY3RlZCBlZGl0YWJsZUlucHV0OiBFbGVtZW50UmVmO1xuXG4gICAgLypcbiAgICAqIEBoaWRkZW5cbiAgICAqL1xuICAgIEBWaWV3Q2hpbGQoJ3JlYWRvbmx5SW5wdXQnLCB7IHJlYWQ6IEVsZW1lbnRSZWYsIHN0YXRpYzogZmFsc2UgfSlcbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHlJbnB1dDogRWxlbWVudFJlZjtcblxuICAgIC8qXG4gICAgKiBAaGlkZGVuXG4gICAgKi9cbiAgICBAQ29udGVudENoaWxkKElneElucHV0RGlyZWN0aXZlLCB7IHN0YXRpYzogZmFsc2UgfSlcbiAgICBwcm90ZWN0ZWQgaW5wdXQ6IElneElucHV0RGlyZWN0aXZlO1xuXG4gICAgLyoqXG4gICAgICpAaGlkZGVuXG4gICAgICovXG4gICAgQENvbnRlbnRDaGlsZChJZ3hEYXRlUGlja2VyVGVtcGxhdGVEaXJlY3RpdmUsIHsgcmVhZDogSWd4RGF0ZVBpY2tlclRlbXBsYXRlRGlyZWN0aXZlLCBzdGF0aWM6IHRydWUgfSlcbiAgICBwcm90ZWN0ZWQgZGF0ZVBpY2tlclRlbXBsYXRlRGlyZWN0aXZlOiBJZ3hEYXRlUGlja2VyVGVtcGxhdGVEaXJlY3RpdmU7XG5cbiAgICAvKipcbiAgICAgKkBoaWRkZW5cbiAgICAgKi9cbiAgICBAQ29udGVudENoaWxkKElneENhbGVuZGFySGVhZGVyVGVtcGxhdGVEaXJlY3RpdmUsIHsgcmVhZDogSWd4Q2FsZW5kYXJIZWFkZXJUZW1wbGF0ZURpcmVjdGl2ZSwgc3RhdGljOiB0cnVlIH0pXG4gICAgcHVibGljIGhlYWRlclRlbXBsYXRlOiBJZ3hDYWxlbmRhckhlYWRlclRlbXBsYXRlRGlyZWN0aXZlO1xuXG4gICAgLyoqXG4gICAgICpAaGlkZGVuXG4gICAgICovXG4gICAgQENvbnRlbnRDaGlsZChJZ3hDYWxlbmRhclN1YmhlYWRlclRlbXBsYXRlRGlyZWN0aXZlLCB7IHJlYWQ6IElneENhbGVuZGFyU3ViaGVhZGVyVGVtcGxhdGVEaXJlY3RpdmUsIHN0YXRpYzogdHJ1ZSB9KVxuICAgIHB1YmxpYyBzdWJoZWFkZXJUZW1wbGF0ZTogSWd4Q2FsZW5kYXJTdWJoZWFkZXJUZW1wbGF0ZURpcmVjdGl2ZTtcblxuICAgIC8qKlxuICAgICAqQGhpZGRlblxuICAgICAqL1xuICAgIEBDb250ZW50Q2hpbGQoSWd4RGF0ZVBpY2tlckFjdGlvbnNEaXJlY3RpdmUsIHsgcmVhZDogSWd4RGF0ZVBpY2tlckFjdGlvbnNEaXJlY3RpdmUsIHN0YXRpYzogZmFsc2UgfSlcbiAgICBwdWJsaWMgZGF0ZVBpY2tlckFjdGlvbnNEaXJlY3RpdmU6IElneERhdGVQaWNrZXJBY3Rpb25zRGlyZWN0aXZlO1xuXG4gICAgcHVibGljIGNhbGVuZGFyOiBJZ3hDYWxlbmRhckNvbXBvbmVudDtcbiAgICBwdWJsaWMgaGFzSGVhZGVyID0gdHJ1ZTtcbiAgICBwdWJsaWMgY29sbGFwc2VkID0gdHJ1ZTtcbiAgICBwdWJsaWMgZGlzcGxheVZhbHVlUGlwZSA9IG5ldyBEYXRlUGlja2VyRGlzcGxheVZhbHVlUGlwZSh0aGlzKTtcbiAgICBwdWJsaWMgaW5wdXRWYWx1ZVBpcGUgPSBuZXcgRGF0ZVBpY2tlcklucHV0VmFsdWVQaXBlKHRoaXMpO1xuICAgIHB1YmxpYyBkYXRlRm9ybWF0UGFydHMgPSBbXTtcbiAgICBwdWJsaWMgcmF3RGF0ZVN0cmluZzogc3RyaW5nO1xuICAgIHB1YmxpYyBpbnB1dE1hc2s6IHN0cmluZztcbiAgICBwdWJsaWMgaXNFbXB0eSA9IHRydWU7XG4gICAgcHVibGljIGludmFsaWREYXRlID0gJyc7XG5cbiAgICBwcml2YXRlIHJlYWRvbmx5IHNwaW5EZWx0YSA9IDE7XG4gICAgcHJpdmF0ZSByZWFkb25seSBkZWZhdWx0TG9jYWxlID0gJ2VuJztcblxuICAgIHByaXZhdGUgX2Zvcm1hdE9wdGlvbnMgPSB7XG4gICAgICAgIGRheTogJ251bWVyaWMnLFxuICAgICAgICBtb250aDogJ3Nob3J0JyxcbiAgICAgICAgd2Vla2RheTogJ3Nob3J0JyxcbiAgICAgICAgeWVhcjogJ251bWVyaWMnXG4gICAgfTtcbiAgICBwcml2YXRlIF9mb3JtYXRWaWV3cyA9IHtcbiAgICAgICAgZGF5OiBmYWxzZSxcbiAgICAgICAgbW9udGg6IHRydWUsXG4gICAgICAgIHllYXI6IGZhbHNlXG4gICAgfTtcbiAgICBwcml2YXRlIF9kZXN0cm95JCA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XG4gICAgcHJpdmF0ZSBfY29tcG9uZW50SUQ6IHN0cmluZztcbiAgICBwcml2YXRlIF9mb3JtYXQ6IHN0cmluZztcbiAgICBwcml2YXRlIF92YWx1ZTogRGF0ZTtcbiAgICBwcml2YXRlIF9pc0luRWRpdE1vZGU6IGJvb2xlYW47XG4gICAgcHJpdmF0ZSBfZGlzYWJsZWREYXRlczogRGF0ZVJhbmdlRGVzY3JpcHRvcltdID0gbnVsbDtcbiAgICBwcml2YXRlIF9zcGVjaWFsRGF0ZXM6IERhdGVSYW5nZURlc2NyaXB0b3JbXSA9IG51bGw7XG4gICAgcHJpdmF0ZSBfbW9kYWxPdmVybGF5OiBPdmVybGF5U2V0dGluZ3M7XG4gICAgcHJpdmF0ZSBfZHJvcERvd25PdmVybGF5U2V0dGluZ3M6IE92ZXJsYXlTZXR0aW5ncztcbiAgICBwcml2YXRlIF9wb3NpdGlvblNldHRpbmdzOiBQb3NpdGlvblNldHRpbmdzO1xuICAgIHByaXZhdGUgX2RlZmF1bHREcm9wRG93bk92ZXJsYXlTZXR0aW5nczogT3ZlcmxheVNldHRpbmdzO1xuICAgIHByaXZhdGUgX21vZGFsT3ZlcmxheVNldHRpbmdzOiBPdmVybGF5U2V0dGluZ3M7XG4gICAgcHJpdmF0ZSBfdHJhbnNmb3JtZWREYXRlO1xuICAgIHByaXZhdGUgX29uT3BlbiA9IG5ldyBFdmVudEVtaXR0ZXI8SWd4RGF0ZVBpY2tlckNvbXBvbmVudD4oKTtcbiAgICBwcml2YXRlIF9vbkNsb3NlID0gbmV3IEV2ZW50RW1pdHRlcjxJZ3hEYXRlUGlja2VyQ29tcG9uZW50PigpO1xuXG4gICAgLyoqXG4gICAgKiBAaGlkZGVuXG4gICAgKi9cbiAgICBASG9zdExpc3RlbmVyKCdrZXlkb3duLnNwYWNlYmFyJywgWyckZXZlbnQnXSlcbiAgICBASG9zdExpc3RlbmVyKCdrZXlkb3duLnNwYWNlJywgWyckZXZlbnQnXSlcbiAgICBwdWJsaWMgb25TcGFjZUNsaWNrKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgICAgIHRoaXMub3BlbkRpYWxvZyh0aGlzLmdldElucHV0R3JvdXBFbGVtZW50KCkpO1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqTWV0aG9kIHRoYXQgc2V0cyB0aGUgc2VsZWN0ZWQgZGF0ZS5cbiAgICAgKmBgYHR5cGVzY3JpcHRcbiAgICAgKnB1YmxpYyBkYXRlID0gbmV3IERhdGUoKTtcbiAgICAgKkBWaWV3Q2hpbGQoXCJNeURhdGVQaWNrZXJcIilcbiAgICAgKnB1YmxpYyBkYXRlUGlja2VyOiBJZ3hEYXRlUGlja2VyQ29tcG9uZW50O1xuICAgICAqbmdBZnRlclZpZXdJbml0KCl7XG4gICAgICogICAgdGhpcy5kYXRlUGlja2VyLndyaXRlVmFsdWUodGhpcy5kYXRlKTtcbiAgICAgKn1cbiAgICAgKmBgYFxuICAgICAqQHBhcmFtIHZhbHVlIFRoZSBkYXRlIHlvdSB3YW50IHRvIHNlbGVjdC5cbiAgICAgKkBtZW1iZXJPZiB7QGxpbmsgSWd4RGF0ZVBpY2tlckNvbXBvbmVudH1cbiAgICAgKi9cbiAgICBwdWJsaWMgd3JpdGVWYWx1ZSh2YWx1ZTogRGF0ZSkge1xuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICAgIHRoaXMuX2Nkci5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKkBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVnaXN0ZXJPbkNoYW5nZShmbjogKF86IERhdGUpID0+IHZvaWQpIHsgdGhpcy5fb25DaGFuZ2VDYWxsYmFjayA9IGZuOyB9XG5cbiAgICAvKipcbiAgICAgKkBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHZvaWQpIHsgdGhpcy5fb25Ub3VjaGVkQ2FsbGJhY2sgPSBmbjsgfVxuXG4gICAgLyoqIEBoaWRkZW4gKi9cbiAgICBwdWJsaWMgZ2V0RWRpdEVsZW1lbnQoKSB7XG4gICAgICAgIGNvbnN0IGlucHV0RWxlbWVudCA9IHRoaXMuZWRpdGFibGVJbnB1dCB8fCB0aGlzLnJlYWRvbmx5SW5wdXQgfHwgdGhpcy5pbnB1dDtcbiAgICAgICAgcmV0dXJuIChpbnB1dEVsZW1lbnQpID8gaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQgOiBudWxsO1xuICAgIH1cblxuICAgIC8qKiBAaGlkZGVuICovXG4gICAgcHVibGljIGdldElucHV0R3JvdXBFbGVtZW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pbnB1dEdyb3VwID8gdGhpcy5pbnB1dEdyb3VwLmVsZW1lbnQubmF0aXZlRWxlbWVudCA6IG51bGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLl9wb3NpdGlvblNldHRpbmdzID0ge1xuICAgICAgICAgICAgb3BlbkFuaW1hdGlvbjogZmFkZUluLFxuICAgICAgICAgICAgY2xvc2VBbmltYXRpb246IGZhZGVPdXRcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLl9kZWZhdWx0RHJvcERvd25PdmVybGF5U2V0dGluZ3MgPSB7XG4gICAgICAgICAgICBjbG9zZU9uT3V0c2lkZUNsaWNrOiB0cnVlLFxuICAgICAgICAgICAgbW9kYWw6IGZhbHNlLFxuICAgICAgICAgICAgc2Nyb2xsU3RyYXRlZ3k6IG5ldyBBYnNvbHV0ZVNjcm9sbFN0cmF0ZWd5KCksXG4gICAgICAgICAgICBwb3NpdGlvblN0cmF0ZWd5OiBuZXcgQXV0b1Bvc2l0aW9uU3RyYXRlZ3kodGhpcy5fcG9zaXRpb25TZXR0aW5ncyksXG4gICAgICAgICAgICBvdXRsZXQ6IHRoaXMub3V0bGV0XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5fbW9kYWxPdmVybGF5U2V0dGluZ3MgPSB7XG4gICAgICAgICAgICBjbG9zZU9uT3V0c2lkZUNsaWNrOiB0cnVlLFxuICAgICAgICAgICAgbW9kYWw6IHRydWUsXG4gICAgICAgICAgICBvdXRsZXQ6IHRoaXMub3V0bGV0XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5fb3ZlcmxheVNlcnZpY2Uub25PcGVuaW5nLnBpcGUoXG4gICAgICAgICAgICBmaWx0ZXIoKG92ZXJsYXkpID0+IG92ZXJsYXkuaWQgPT09IHRoaXMuX2NvbXBvbmVudElEKSxcbiAgICAgICAgICAgIHRha2VVbnRpbCh0aGlzLl9kZXN0cm95JCkpLnN1YnNjcmliZSgoZXZlbnRBcmdzKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5fb25PcGVuaW5nKGV2ZW50QXJncyk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLl9vdmVybGF5U2VydmljZS5vbk9wZW5lZC5waXBlKFxuICAgICAgICAgICAgZmlsdGVyKChvdmVybGF5KSA9PiBvdmVybGF5LmlkID09PSB0aGlzLl9jb21wb25lbnRJRCksXG4gICAgICAgICAgICB0YWtlVW50aWwodGhpcy5fZGVzdHJveSQpKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuX29uT3BlbmVkKCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLl9vdmVybGF5U2VydmljZS5vbkNsb3NlZC5waXBlKFxuICAgICAgICAgICAgZmlsdGVyKG92ZXJsYXkgPT4gb3ZlcmxheS5pZCA9PT0gdGhpcy5fY29tcG9uZW50SUQpLFxuICAgICAgICAgICAgdGFrZVVudGlsKHRoaXMuX2Rlc3Ryb3kkKSkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLl9vbkNsb3NlZCgpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5fb3ZlcmxheVNlcnZpY2Uub25DbG9zaW5nLnBpcGUoXG4gICAgICAgICAgICBmaWx0ZXIob3ZlcmxheSA9PiBvdmVybGF5LmlkID09PSB0aGlzLl9jb21wb25lbnRJRCksXG4gICAgICAgICAgICB0YWtlVW50aWwodGhpcy5fZGVzdHJveSQpKS5zdWJzY3JpYmUoKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5vbkNsb3NpbmcuZW1pdChldmVudCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICBpZiAodGhpcy5tb2RlID09PSBJbnRlcmFjdGlvbk1vZGUuRHJvcERvd24pIHtcbiAgICAgICAgICAgIHRoaXMuZGF0ZUZvcm1hdFBhcnRzID0gRGF0ZVBpY2tlclV0aWwucGFyc2VEYXRlRm9ybWF0KHRoaXMubWFzaywgdGhpcy5sb2NhbGUpO1xuICAgICAgICAgICAgaWYgKHRoaXMubWFzayA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tYXNrID0gRGF0ZVBpY2tlclV0aWwuZ2V0TWFzayh0aGlzLmRhdGVGb3JtYXRQYXJ0cyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmlucHV0TWFzayA9IERhdGVQaWNrZXJVdGlsLmdldElucHV0TWFzayh0aGlzLmRhdGVGb3JtYXRQYXJ0cyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgICAgIGlmICh0aGlzLm1vZGUgPT09IEludGVyYWN0aW9uTW9kZS5Ecm9wRG93biAmJiB0aGlzLmVkaXRhYmxlSW5wdXQpIHtcbiAgICAgICAgICAgIGZyb21FdmVudCh0aGlzLmVkaXRhYmxlSW5wdXQubmF0aXZlRWxlbWVudCwgJ2tleWRvd24nKS5waXBlKFxuICAgICAgICAgICAgICAgIHRocm90dGxlKCgpID0+IGludGVydmFsKDAsIGFuaW1hdGlvbkZyYW1lU2NoZWR1bGVyKSksXG4gICAgICAgICAgICAgICAgdGFrZVVudGlsKHRoaXMuX2Rlc3Ryb3kkKVxuICAgICAgICAgICAgKS5zdWJzY3JpYmUoKHJlcykgPT4gdGhpcy5vbktleURvd24ocmVzKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKkBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLl9jb21wb25lbnRJRCkge1xuICAgICAgICAgICAgdGhpcy5fb3ZlcmxheVNlcnZpY2UuaGlkZSh0aGlzLl9jb21wb25lbnRJRCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fZGVzdHJveSQubmV4dCh0cnVlKTtcbiAgICAgICAgdGhpcy5fZGVzdHJveSQuY29tcGxldGUoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlNlbGVjdHMgdG9kYXkncyBkYXRlIGZyb20gY2FsZW5kYXIgYW5kIGNoYW5nZSB0aGUgaW5wdXQgZmllbGQgdmFsdWUsIEBjYWxlbmRhci52aWV3RGF0ZSBhbmQgQGNhbGVuZGFyLnZhbHVlLlxuICAgICAqYGBgdHlwZXNjcmlwdFxuICAgICAqQFZpZXdDaGlsZChcIk15RGF0ZVBpY2tlclwiKVxuICAgICAqcHVibGljIGRhdGVQaWNrZXI6IElneERhdGVQaWNrZXJDb21wb25lbnQ7XG4gICAgICpuZ0FmdGVyVmlld0luaXQoKXtcbiAgICAgKnRoaXMuZGF0ZVBpY2tlci50cmlnZ2VyVG9kYXlTZWxlY3Rpb24oKTtcbiAgICAgKn1cbiAgICAgKmBgYFxuICAgICAqQG1lbWJlck9mIHtAbGluayBJZ3hEYXRlUGlja2VyQ29tcG9uZW50fVxuICAgICAqL1xuICAgIHB1YmxpYyB0cmlnZ2VyVG9kYXlTZWxlY3Rpb24oKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoRGF0ZS5ub3coKSk7XG4gICAgICAgIHRoaXMuaGFuZGxlU2VsZWN0aW9uKHRvZGF5KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGFuZ2UgdGhlIGNhbGVuZGFyIHNlbGVjdGlvbiBhbmQgY2FsbGluZyB0aGlzIG1ldGhvZCB3aWxsIGVtaXQgdGhlIEBjYWxlbmRhci5vblNlbGVjdGlvbiBldmVudCxcbiAgICAgKiB3aGljaCB3aWxsIGZpcmUgQGhhbmRsZVNlbGVjdGlvbiBtZXRob2QuXG4gICAgICpgYGB0eXBlc2NyaXB0XG4gICAgICpAVmlld0NoaWxkKFwiTXlEYXRlUGlja2VyXCIpXG4gICAgICpwdWJsaWMgZGF0ZVBpY2tlcjogSWd4RGF0ZVBpY2tlckNvbXBvbmVudDtcbiAgICAgKm5nQWZ0ZXJWaWV3SW5pdCgpe1xuICAgICAqdGhpcy5kYXRlUGlja2VyLnNlbGVjdERhdGUodGhpcy5kYXRlKTtcbiAgICAgKn1cbiAgICAgKiBgYGBcbiAgICAgKiBAcGFyYW0gZGF0ZSBwYXNzZWQgZGF0ZSB0aGF0IGhhcyB0byBiZSBzZXQgdG8gdGhlIGNhbGVuZGFyLlxuICAgICAqIEBtZW1iZXJPZiB7QGxpbmsgSWd4RGF0ZVBpY2tlckNvbXBvbmVudH1cbiAgICAgKi9cbiAgICBwdWJsaWMgc2VsZWN0RGF0ZShkYXRlOiBEYXRlKTogdm9pZCB7XG4gICAgICAgIHRoaXMudmFsdWUgPSBkYXRlO1xuICAgICAgICB0aGlzLm9uU2VsZWN0aW9uLmVtaXQoZGF0ZSk7XG4gICAgICAgIHRoaXMuX29uQ2hhbmdlQ2FsbGJhY2soZGF0ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVzZWxlY3RzIHRoZSBjYWxlbmRhciBkYXRlLlxuICAgICAqYGBgdHlwZXNjcmlwdFxuICAgICAqQFZpZXdDaGlsZChcIk15RGF0ZVBpY2tlclwiKVxuICAgICAqcHVibGljIGRhdGVQaWNrZXI6IElneERhdGVQaWNrZXJDb21wb25lbnQ7XG4gICAgICpuZ0FmdGVyVmlld0luaXQoKXtcbiAgICAgKnRoaXMuZGF0ZVBpY2tlci5kZXNlbGVjdERhdGUoKTtcbiAgICAgKn1cbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyT2Yge0BsaW5rIElneERhdGVQaWNrZXJDb21wb25lbnR9XG4gICAgICovXG4gICAgcHVibGljIGRlc2VsZWN0RGF0ZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy52YWx1ZSA9IG51bGw7XG4gICAgICAgIGlmICh0aGlzLmNhbGVuZGFyKSB7XG4gICAgICAgICAgICB0aGlzLmNhbGVuZGFyLmRlc2VsZWN0RGF0ZSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX29uQ2hhbmdlQ2FsbGJhY2sobnVsbCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogT3BlbnMgdGhlIGRhdGUgcGlja2VyIGRyb3AgZG93biBvciBkaWFsb2cuXG4gICAgICogQHBhcmFtIHRhcmdldCBIVE1MRWxlbWVudCAtIHRoZSB0YXJnZXQgZWxlbWVudCB0byB1c2UgZm9yIHBvc2l0aW9uaW5nIHRoZSBkcm9wIGRvd24gY29udGFpbmVyIGFjY29yZGluZyB0b1xuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8aWd4LWRhdGUtcGlja2VyIFt2YWx1ZV09XCJkYXRlXCIgbW9kZT1cImRyb3Bkb3duXCIgI3JldGVtcGxhdGVkPlxuICAgICAqICAgPG5nLXRlbXBsYXRlIGlneERhdGVQaWNrZXJUZW1wbGF0ZSBsZXQtb3BlbkRpYWxvZz1cIm9wZW5EaWFsb2dcIlxuICAgICAqICAgICAgICAgICAgICAgIGxldC1kaXNwbGF5RGF0YT1cImRpc3BsYXlEYXRhXCI+XG4gICAgICogICAgIDxpZ3gtaW5wdXQtZ3JvdXA+XG4gICAgICogICAgICAgPGlucHV0ICNkcm9wRG93blRhcmdldCBpZ3hJbnB1dCBbdmFsdWVdPVwiZGlzcGxheURhdGFcIiAvPlxuICAgICAqICAgICAgIDxpZ3gtc3VmZml4IChjbGljayk9XCJvcGVuRGlhbG9nKGRyb3BEb3duVGFyZ2V0KVwiPlxuICAgICAqICAgICAgICAgPGlneC1pY29uPmFsYXJtPC9pZ3gtaWNvbj5cbiAgICAgKiAgICAgICA8L2lneC1zdWZmaXg+XG4gICAgICogICAgIDwvaWd4LWlucHV0LWdyb3VwPlxuICAgICAqICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgKiA8L2lneC1kYXRlLXBpY2tlcj5cbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBwdWJsaWMgb3BlbkRpYWxvZyh0YXJnZXQ/OiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgICAgICBpZiAoIXRoaXMuY29sbGFwc2VkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgc3dpdGNoICh0aGlzLm1vZGUpIHtcbiAgICAgICAgICAgIGNhc2UgSW50ZXJhY3Rpb25Nb2RlLkRpYWxvZzoge1xuICAgICAgICAgICAgICAgIHRoaXMuaGFzSGVhZGVyID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBjb25zdCBtb2RhbE92ZXJsYXkgPSAodGhpcy5tb2RhbE92ZXJsYXlTZXR0aW5ncyAhPT0gdW5kZWZpbmVkKSA/IHRoaXMuX21vZGFsT3ZlcmxheSA6IHRoaXMuX21vZGFsT3ZlcmxheVNldHRpbmdzO1xuICAgICAgICAgICAgICAgIHRoaXMuX2NvbXBvbmVudElEID0gdGhpcy5fb3ZlcmxheVNlcnZpY2UuYXR0YWNoKElneENhbGVuZGFyQ29udGFpbmVyQ29tcG9uZW50LCBtb2RhbE92ZXJsYXksIHRoaXMuX21vZHVsZVJlZik7XG4gICAgICAgICAgICAgICAgdGhpcy5fb3ZlcmxheVNlcnZpY2Uuc2hvdyh0aGlzLl9jb21wb25lbnRJRCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIEludGVyYWN0aW9uTW9kZS5Ecm9wRG93bjoge1xuICAgICAgICAgICAgICAgIHRoaXMuaGFzSGVhZGVyID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgaWYgKHRhcmdldCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRyb3BEb3duT3ZlcmxheVNldHRpbmdzLnBvc2l0aW9uU3RyYXRlZ3kuc2V0dGluZ3MudGFyZ2V0ID0gdGFyZ2V0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLl9jb21wb25lbnRJRCA9IHRoaXMuX292ZXJsYXlTZXJ2aWNlLmF0dGFjaChJZ3hDYWxlbmRhckNvbnRhaW5lckNvbXBvbmVudCxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kcm9wRG93bk92ZXJsYXlTZXR0aW5ncywgdGhpcy5fbW9kdWxlUmVmKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9vdmVybGF5U2VydmljZS5zaG93KHRoaXMuX2NvbXBvbmVudElEKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENsb3NlIHRoZSBjYWxlbmRhci5cbiAgICAgKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgY2xvc2VDYWxlbmRhcigpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fb3ZlcmxheVNlcnZpY2UuaGlkZSh0aGlzLl9jb21wb25lbnRJRCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2xlYXIgdGhlIGlucHV0IGZpZWxkLCBkYXRlIHBpY2tlciB2YWx1ZSBhbmQgY2FsZW5kYXIgc2VsZWN0aW9uLlxuICAgICAqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyBjbGVhcigpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5pc0VtcHR5ID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5pbnZhbGlkRGF0ZSA9ICcnO1xuICAgICAgICB0aGlzLmRlc2VsZWN0RGF0ZSgpO1xuICAgICAgICB0aGlzLl9zZXRDdXJzb3JQb3NpdGlvbigwKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBFdmFsdWF0ZXMgd2hlbiBAY2FsZW5kYXIub25TZWxlY3Rpb24gZXZlbnQgd2FzIGZpcmVkXG4gICAgICogYW5kIHVwZGF0ZSB0aGUgaW5wdXQgdmFsdWUuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZXZlbnQgc2VsZWN0ZWQgdmFsdWUgZnJvbSBjYWxlbmRhci5cbiAgICAgKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgaGFuZGxlU2VsZWN0aW9uKGRhdGU6IERhdGUpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMudmFsdWUpIHtcbiAgICAgICAgICAgIGRhdGUuc2V0SG91cnModGhpcy52YWx1ZS5nZXRIb3VycygpKTtcbiAgICAgICAgICAgIGRhdGUuc2V0TWludXRlcyh0aGlzLnZhbHVlLmdldE1pbnV0ZXMoKSk7XG4gICAgICAgICAgICBkYXRlLnNldFNlY29uZHModGhpcy52YWx1ZS5nZXRTZWNvbmRzKCkpO1xuICAgICAgICAgICAgZGF0ZS5zZXRNaWxsaXNlY29uZHModGhpcy52YWx1ZS5nZXRNaWxsaXNlY29uZHMoKSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnZhbHVlID0gZGF0ZTtcbiAgICAgICAgdGhpcy5jYWxlbmRhci52aWV3RGF0ZSA9IGRhdGU7XG4gICAgICAgIHRoaXMuX29uQ2hhbmdlQ2FsbGJhY2soZGF0ZSk7XG4gICAgICAgIHRoaXMuY2xvc2VDYWxlbmRhcigpO1xuICAgICAgICB0aGlzLm9uU2VsZWN0aW9uLmVtaXQoZGF0ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBFdmFsdWF0ZXMgd2hlbiB0aGUgaW5wdXQgYmx1ciBldmVudCB3YXMgZmlyZWRcbiAgICAqIGFuZCByZS1jYWxjdWxhdGUgdGhlIGRhdGUgcGlja2VyIHZhbHVlLlxuICAgICpcbiAgICAqIEBwYXJhbSBldmVudFxuICAgICpcbiAgICAqIEBoaWRkZW5cbiAgICAqL1xuICAgIHB1YmxpYyBvbkJsdXIoZXZlbnQpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5faXNJbkVkaXRNb2RlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY2FsY3VsYXRlRGF0ZShldmVudC50YXJnZXQudmFsdWUsIGV2ZW50LnR5cGUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogRXZhbHVhdGVzIHdoZW4gdGhlIGlucHV0IGZvY3VzIGV2ZW50IHdhcyBmaXJlZFxuICAgICogYW5kIHJlLWNhbGN1bGF0ZSB0aGUgZWRpdG9yIHRleHQuXG4gICAgKlxuICAgICogQHBhcmFtIGV2ZW50XG4gICAgKiBAaGlkZGVuXG4gICAgKi9cbiAgICBwdWJsaWMgb25Gb2N1cygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5faXNJbkVkaXRNb2RlID0gdHJ1ZTtcbiAgICAgICAgaWYgKHRoaXMudmFsdWUgJiYgdGhpcy5pbnZhbGlkRGF0ZSA9PT0gJycpIHtcbiAgICAgICAgICAgIHRoaXMuX3RyYW5zZm9ybWVkRGF0ZSA9IHRoaXMuX2dldEVkaXRvckRhdGUodGhpcy52YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAqIEV2YWx1YXRlcyB3aGVuIHRoZSBrZXlkb3duIGV2ZW50IHdhcyBmaXJlZCBmb3IgdXAvZG93biBrZXlzXG4gICAgKiB0byBwcm92aWRlIHNwaW5uaW5nIG9mIGRhdGUgcGFydHMuXG4gICAgKlxuICAgICogQHBhcmFtIGV2ZW50XG4gICAgKlxuICAgICogQGhpZGRlblxuICAgICovXG4gICAgcHVibGljIG9uS2V5RG93bihldmVudCkge1xuICAgICAgICBzd2l0Y2ggKGV2ZW50LmtleSkge1xuICAgICAgICAgICAgY2FzZSBLRVlTLlVQX0FSUk9XOlxuICAgICAgICAgICAgY2FzZSBLRVlTLlVQX0FSUk9XX0lFOlxuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zcGluVmFsdWUoZXZlbnQudGFyZ2V0LnZhbHVlLCAxLCBldmVudC50eXBlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgS0VZUy5ET1dOX0FSUk9XOlxuICAgICAgICAgICAgY2FzZSBLRVlTLkRPV05fQVJST1dfSUU6XG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50LmFsdEtleSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9wZW5EaWFsb2codGhpcy5nZXRJbnB1dEdyb3VwRWxlbWVudCgpKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zcGluVmFsdWUoZXZlbnQudGFyZ2V0LnZhbHVlLCAtMSwgZXZlbnQudHlwZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICogRXZhbHVhdGVzIHdoZW4gdGhlIG1vdXNlIHdoZWVsIGV2ZW50IHdhcyBmaXJlZFxuICAgICogdG8gcHJvdmlkZSBzcGlubmluZyBvZiBkYXRlIHBhcnRzLlxuICAgICpcbiAgICAqIEBwYXJhbSBldmVudFxuICAgICpcbiAgICAqIEBoaWRkZW5cbiAgICAqL1xuICAgIHB1YmxpYyBvbldoZWVsKGV2ZW50KSB7XG4gICAgICAgIGlmICh0aGlzLl9pc0luRWRpdE1vZGUpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIGNvbnN0IHNpZ24gPSAoZXZlbnQuZGVsdGFZID4gMCkgPyAtMSA6IDE7XG4gICAgICAgICAgICB0aGlzLnNwaW5WYWx1ZShldmVudC50YXJnZXQudmFsdWUsIHNpZ24sIGV2ZW50LnR5cGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBFdmFsdWF0ZXMgd2hlbiBpbnB1dCBldmVudCB3YXMgZmlyZWQgaW4gZWRpdG9yLlxuICAgICpcbiAgICAqIEBwYXJhbSBldmVudFxuICAgICpcbiAgICAqIEBoaWRkZW5cbiAgICAqL1xuICAgIHB1YmxpYyBvbklucHV0KGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IHRhcmdldFZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgICAgICBjb25zdCBjdXJzb3JQb3NpdGlvbiA9IHRoaXMuX2dldEN1cnNvclBvc2l0aW9uKCk7XG4gICAgICAgIGNvbnN0IGNoZWNrSW5wdXQgPSBEYXRlUGlja2VyVXRpbC5jaGVja0ZvckNvbXBsZXRlRGF0ZUlucHV0KHRoaXMuZGF0ZUZvcm1hdFBhcnRzLCB0YXJnZXRWYWx1ZSk7XG4gICAgICAgIHRoaXMuX2lzSW5FZGl0TW9kZSA9IHRydWU7XG5cbiAgICAgICAgaWYgKHRhcmdldFZhbHVlICE9PSBEYXRlUGlja2VyVXRpbC5tYXNrVG9Qcm9tcHRDaGFycyh0aGlzLmlucHV0TWFzaykpIHtcbiAgICAgICAgICAgIHRoaXMuaXNFbXB0eSA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgYWxsIGRhdGUgcGFydHMgYXJlIGNvbXBsZXRlZCwgY2hhbmdlIHRoZSBkYXRlLXBpY2tlciB2YWx1ZSwgc3RheSBpbiBlZGl0IG1vZGVcbiAgICAgICAgaWYgKGNoZWNrSW5wdXQgPT09ICdjb21wbGV0ZScgJiYgZXZlbnQuaW5wdXRUeXBlICE9PSAnZGVsZXRlQ29udGVudEJhY2t3YXJkJykge1xuICAgICAgICAgICAgdGhpcy5fdHJhbnNmb3JtZWREYXRlID0gdGFyZ2V0VmFsdWU7XG4gICAgICAgICAgICB0aGlzLmNhbGN1bGF0ZURhdGUodGFyZ2V0VmFsdWUsIGV2ZW50LnR5cGUpO1xuICAgICAgICAgICAgdGhpcy5fc2V0Q3Vyc29yUG9zaXRpb24oY3Vyc29yUG9zaXRpb24pO1xuICAgICAgICB9IGVsc2UgaWYgKGNoZWNrSW5wdXQgPT09ICdwYXJ0aWFsJykge1xuICAgICAgICAgICAgLy8gV2hpbGUgZWRpdGluZywgaWYgb25lIGRhdGUgcGFydCBpcyBkZWxldGVkLCBkYXRlLXBpY2tlciB2YWx1ZSBpcyBzZXQgdG8gbnVsbCwgdGhlIHJlbWFpbmluZyBpbnB1dCBzdGF5cyBpbnRhY3QuXG4gICAgICAgICAgICB0aGlzLmRlc2VsZWN0RGF0ZSgpO1xuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmdldEVkaXRFbGVtZW50KCkudmFsdWUgPSB0YXJnZXRWYWx1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLl9zZXRDdXJzb3JQb3NpdGlvbihjdXJzb3JQb3NpdGlvbik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIGlmIChjaGVja0lucHV0ID09PSAnZW1wdHknKSB7XG4gICAgICAgICAgICAvLyBUb3RhbCBjbGVhbi11cCBhcyBpbnB1dCBpcyBkZWxldGVkLlxuICAgICAgICAgICAgdGhpcy5pc0VtcHR5ID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuZGVzZWxlY3REYXRlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGNhbGN1bGF0ZURhdGUoZGF0ZVN0cmluZzogc3RyaW5nLCBpbnZva2VkQnlFdmVudDogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIGlmIChkYXRlU3RyaW5nICE9PSAnJykge1xuICAgICAgICAgICAgY29uc3QgcHJldkRhdGVWYWx1ZSA9IHRoaXMudmFsdWU7XG4gICAgICAgICAgICBjb25zdCBpbnB1dFZhbHVlID0gKGludm9rZWRCeUV2ZW50ID09PSAnYmx1cicpID8gdGhpcy5yYXdEYXRlU3RyaW5nIDogZGF0ZVN0cmluZztcbiAgICAgICAgICAgIGNvbnN0IG5ld0RhdGVBcnJheSA9IERhdGVQaWNrZXJVdGlsLnBhcnNlRGF0ZUFycmF5KHRoaXMuZGF0ZUZvcm1hdFBhcnRzLCBwcmV2RGF0ZVZhbHVlLCBpbnB1dFZhbHVlKTtcblxuICAgICAgICAgICAgaWYgKG5ld0RhdGVBcnJheS5zdGF0ZSA9PT0gRGF0ZVN0YXRlLlZhbGlkKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV3VmFsdWUgPSBuZXdEYXRlQXJyYXkuZGF0ZTtcbiAgICAgICAgICAgICAgICAvLyBSZXN0b3JlIHRoZSB0aW1lIHBhcnQgaWYgYW55XG4gICAgICAgICAgICAgICAgaWYgKHByZXZEYXRlVmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWUuc2V0SG91cnMocHJldkRhdGVWYWx1ZS5nZXRIb3VycygpKTtcbiAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWUuc2V0TWludXRlcyhwcmV2RGF0ZVZhbHVlLmdldE1pbnV0ZXMoKSk7XG4gICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlLnNldFNlY29uZHMocHJldkRhdGVWYWx1ZS5nZXRTZWNvbmRzKCkpO1xuICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZS5zZXRNaWxsaXNlY29uZHMocHJldkRhdGVWYWx1ZS5nZXRNaWxsaXNlY29uZHMoKSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZGlzYWJsZWREYXRlcyA9PT0gbnVsbFxuICAgICAgICAgICAgICAgICAgICB8fCAodGhpcy5kaXNhYmxlZERhdGVzICE9PSBudWxsICYmICFpc0RhdGVJblJhbmdlcyhuZXdWYWx1ZSwgdGhpcy5kaXNhYmxlZERhdGVzKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52YWx1ZSA9IG5ld1ZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmludmFsaWREYXRlID0gJyc7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX29uQ2hhbmdlQ2FsbGJhY2sobmV3VmFsdWUpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGFyZ3M6IElEYXRlUGlja2VyRGlzYWJsZWREYXRlRXZlbnRBcmdzID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZVBpY2tlcjogdGhpcyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRWYWx1ZTogbmV3VmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25EaXNhYmxlZERhdGUuZW1pdChhcmdzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IGFyZ3M6IElEYXRlUGlja2VyVmFsaWRhdGlvbkZhaWxlZEV2ZW50QXJncyA9IHtcbiAgICAgICAgICAgICAgICAgICAgZGF0ZVBpY2tlcjogdGhpcyxcbiAgICAgICAgICAgICAgICAgICAgcHJldlZhbHVlOiBwcmV2RGF0ZVZhbHVlXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB0aGlzLmludmFsaWREYXRlID0gZGF0ZVN0cmluZztcbiAgICAgICAgICAgICAgICB0aGlzLm9uVmFsaWRhdGlvbkZhaWxlZC5lbWl0KGFyZ3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzcGluVmFsdWUoaW5wdXRWYWx1ZTogc3RyaW5nLCBzaWduOiBudW1iZXIsIGV2ZW50VHlwZTogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX2lzSW5FZGl0TW9kZSA9IHRydWU7XG4gICAgICAgIHRoaXMuaXNFbXB0eSA9IGZhbHNlO1xuICAgICAgICBjb25zdCBjdXJzb3JQb3NpdGlvbiA9IHRoaXMuX2dldEN1cnNvclBvc2l0aW9uKCk7XG5cbiAgICAgICAgY29uc3QgbW9kaWZpZWRJbnB1dFZhbHVlID1cbiAgICAgICAgICAgIERhdGVQaWNrZXJVdGlsLmdldE1vZGlmaWVkRGF0ZUlucHV0KHRoaXMuZGF0ZUZvcm1hdFBhcnRzLCBpbnB1dFZhbHVlLCBjdXJzb3JQb3NpdGlvbiwgdGhpcy5zcGluRGVsdGEgKiBzaWduLCB0aGlzLmlzU3Bpbkxvb3ApO1xuXG4gICAgICAgIHRoaXMuZ2V0RWRpdEVsZW1lbnQoKS52YWx1ZSA9IG1vZGlmaWVkSW5wdXRWYWx1ZTtcbiAgICAgICAgdGhpcy5fc2V0Q3Vyc29yUG9zaXRpb24oY3Vyc29yUG9zaXRpb24pO1xuXG4gICAgICAgIGNvbnN0IGNoZWNrSW5wdXQgPSBEYXRlUGlja2VyVXRpbC5jaGVja0ZvckNvbXBsZXRlRGF0ZUlucHV0KHRoaXMuZGF0ZUZvcm1hdFBhcnRzLCBtb2RpZmllZElucHV0VmFsdWUpO1xuICAgICAgICBpZiAoY2hlY2tJbnB1dCA9PT0gJ2NvbXBsZXRlJykge1xuICAgICAgICAgICAgdGhpcy5faXNJbkVkaXRNb2RlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuY2FsY3VsYXRlRGF0ZShtb2RpZmllZElucHV0VmFsdWUsIGV2ZW50VHlwZSk7XG4gICAgICAgICAgICB0aGlzLl9zZXRDdXJzb3JQb3NpdGlvbihjdXJzb3JQb3NpdGlvbik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIF9vbk9wZW5pbmcoZXZlbnQ6IE92ZXJsYXlDYW5jZWxhYmxlRXZlbnRBcmdzKSB7XG4gICAgICAgIHRoaXMuX2luaXRpYWxpemVDYWxlbmRhckNvbnRhaW5lcihldmVudC5jb21wb25lbnRSZWYuaW5zdGFuY2UgYXMgSWd4Q2FsZW5kYXJDb250YWluZXJDb21wb25lbnQpO1xuICAgICAgICB0aGlzLmNvbGxhcHNlZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIHByaXZhdGUgX29uT3BlbmVkKCk6IHZvaWQge1xuICAgICAgICB0aGlzLl9vblRvdWNoZWRDYWxsYmFjaygpO1xuICAgICAgICB0aGlzLm9uT3BlbmVkLmVtaXQodGhpcyk7XG5cbiAgICAgICAgLy8gVE9ETzogcmVtb3ZlIHRoaXMgbGluZSBhZnRlciBkZXByZWNhdGluZyAnb25PcGVuJ1xuICAgICAgICB0aGlzLl9vbk9wZW4uZW1pdCh0aGlzKTtcblxuICAgICAgICBpZiAodGhpcy5jYWxlbmRhcikge1xuICAgICAgICAgICAgdGhpcy5fZm9jdXNDYWxlbmRhckRhdGUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgX29uQ2xvc2VkKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmNvbGxhcHNlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuX2NvbXBvbmVudElEID0gbnVsbDtcbiAgICAgICAgdGhpcy5vbkNsb3NlZC5lbWl0KHRoaXMpO1xuXG4gICAgICAgIC8vIFRPRE86IHJlbW92ZSB0aGlzIGxpbmUgYWZ0ZXIgZGVwcmVjYXRpbmcgJ29uQ2xvc2UnXG4gICAgICAgIHRoaXMub25DbG9zZS5lbWl0KHRoaXMpO1xuXG4gICAgICAgIGlmICh0aGlzLmdldEVkaXRFbGVtZW50KCkpIHtcbiAgICAgICAgICAgIHRoaXMuZ2V0RWRpdEVsZW1lbnQoKS5mb2N1cygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfaW5pdGlhbGl6ZUNhbGVuZGFyQ29udGFpbmVyKGNvbXBvbmVudEluc3RhbmNlOiBJZ3hDYWxlbmRhckNvbnRhaW5lckNvbXBvbmVudCkge1xuICAgICAgICB0aGlzLmNhbGVuZGFyID0gY29tcG9uZW50SW5zdGFuY2UuY2FsZW5kYXI7XG4gICAgICAgIGNvbnN0IGlzVmVydGljYWwgPSAodGhpcy52ZXJ0aWNhbCAmJiB0aGlzLm1vZGUgPT09IEludGVyYWN0aW9uTW9kZS5EaWFsb2cpO1xuICAgICAgICB0aGlzLmNhbGVuZGFyLmhhc0hlYWRlciA9IHRoaXMuaGFzSGVhZGVyO1xuICAgICAgICB0aGlzLmNhbGVuZGFyLmZvcm1hdE9wdGlvbnMgPSB0aGlzLmZvcm1hdE9wdGlvbnM7XG4gICAgICAgIHRoaXMuY2FsZW5kYXIuZm9ybWF0Vmlld3MgPSB0aGlzLmZvcm1hdFZpZXdzO1xuICAgICAgICB0aGlzLmNhbGVuZGFyLmxvY2FsZSA9IHRoaXMubG9jYWxlO1xuICAgICAgICB0aGlzLmNhbGVuZGFyLnZlcnRpY2FsID0gaXNWZXJ0aWNhbDtcbiAgICAgICAgdGhpcy5jYWxlbmRhci53ZWVrU3RhcnQgPSB0aGlzLndlZWtTdGFydDtcbiAgICAgICAgdGhpcy5jYWxlbmRhci5zcGVjaWFsRGF0ZXMgPSB0aGlzLnNwZWNpYWxEYXRlcztcbiAgICAgICAgdGhpcy5jYWxlbmRhci5kaXNhYmxlZERhdGVzID0gdGhpcy5kaXNhYmxlZERhdGVzO1xuICAgICAgICB0aGlzLmNhbGVuZGFyLmhlYWRlclRlbXBsYXRlID0gdGhpcy5oZWFkZXJUZW1wbGF0ZTtcbiAgICAgICAgdGhpcy5jYWxlbmRhci5zdWJoZWFkZXJUZW1wbGF0ZSA9IHRoaXMuc3ViaGVhZGVyVGVtcGxhdGU7XG4gICAgICAgIHRoaXMuY2FsZW5kYXIub25TZWxlY3Rpb24ucGlwZSh0YWtlVW50aWwodGhpcy5fZGVzdHJveSQpKS5zdWJzY3JpYmUoKGV2OiBEYXRlKSA9PiB0aGlzLmhhbmRsZVNlbGVjdGlvbihldikpO1xuXG4gICAgICAgIGlmICh0aGlzLnZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLmNhbGVuZGFyLnZhbHVlID0gdGhpcy52YWx1ZTtcbiAgICAgICAgICAgIHRoaXMuY2FsZW5kYXIudmlld0RhdGUgPSB0aGlzLnZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgY29tcG9uZW50SW5zdGFuY2UubW9kZSA9IHRoaXMubW9kZTtcbiAgICAgICAgY29tcG9uZW50SW5zdGFuY2UudmVydGljYWwgPSBpc1ZlcnRpY2FsO1xuICAgICAgICBjb21wb25lbnRJbnN0YW5jZS5jYW5jZWxCdXR0b25MYWJlbCA9IHRoaXMuY2FuY2VsQnV0dG9uTGFiZWw7XG4gICAgICAgIGNvbXBvbmVudEluc3RhbmNlLnRvZGF5QnV0dG9uTGFiZWwgPSB0aGlzLnRvZGF5QnV0dG9uTGFiZWw7XG4gICAgICAgIGNvbXBvbmVudEluc3RhbmNlLmRhdGVQaWNrZXJBY3Rpb25zID0gdGhpcy5kYXRlUGlja2VyQWN0aW9uc0RpcmVjdGl2ZTtcblxuICAgICAgICBjb21wb25lbnRJbnN0YW5jZS5vbkNsb3NlLnBpcGUodGFrZVVudGlsKHRoaXMuX2Rlc3Ryb3kkKSkuc3Vic2NyaWJlKCgpID0+IHRoaXMuY2xvc2VDYWxlbmRhcigpKTtcbiAgICAgICAgY29tcG9uZW50SW5zdGFuY2Uub25Ub2RheVNlbGVjdGlvbi5waXBlKHRha2VVbnRpbCh0aGlzLl9kZXN0cm95JCkpLnN1YnNjcmliZSgoKSA9PiB0aGlzLnRyaWdnZXJUb2RheVNlbGVjdGlvbigpKTtcbiAgICB9XG5cbiAgICAvLyBGb2N1cyBhIGRhdGUsIGFmdGVyIHRoZSBjYWxlbmRhciBhcHBlYXJhbmNlIGludG8gRE9NLlxuICAgIHByaXZhdGUgX2ZvY3VzQ2FsZW5kYXJEYXRlKCk6IHZvaWQge1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jYWxlbmRhci5kYXlzVmlldy5mb2N1c0FjdGl2ZURhdGUoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfc2V0TG9jYWxlVG9EYXRlKHZhbHVlOiBEYXRlKTogc3RyaW5nIHtcbiAgICAgICAgaWYgKGlzSUUoKSkge1xuICAgICAgICAgICAgLy8gdGhpcyBpcyBhIHdvcmthcm91bmQgZml4aW5nIHRoZSBmb2xsb3dpbmcgSUUxMSBpc3N1ZTpcbiAgICAgICAgICAgIC8vIElFMTEgaGFzIGFkZGVkIGNoYXJhY3RlciBjb2RlIDgyMDYgKG1hcmsgZm9yIFJUTCkgdG8gdGhlIG91dHB1dCBvZiB0b0xvY2FsZURhdGVTdHJpbmcoKSB0aGF0XG4gICAgICAgICAgICAvLyBwcmVjZWRlcyBlYWNoIHBvcnRpb24gdGhhdCBjb21wcmlzZXMgdGhlIHRvdGFsIGRhdGUuLi4gRm9yIG1vcmUgaW5mb3JtYXRpb24gcmVhZCB0aGlzIGFydGljbGU6XG4gICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG1heC1saW5lLWxlbmd0aFxuICAgICAgICAgICAgLy8gaHR0cHM6Ly93d3cuY3NncHJvLmNvbS9ibG9nLzIwMTYvMDgvYS1iYWQtZGF0ZS13aXRoLWludGVybmV0LWV4cGxvcmVyLTExLXRyb3VibGUtd2l0aC1uZXctdW5pY29kZS1jaGFyYWN0ZXJzLWluLWphdmFzY3JpcHQtZGF0ZS1zdHJpbmdzL1xuICAgICAgICAgICAgY29uc3QgbG9jYWxlRGF0ZVN0cklFID0gbmV3IERhdGUodmFsdWUuZ2V0RnVsbFllYXIoKSwgdmFsdWUuZ2V0TW9udGgoKSwgdmFsdWUuZ2V0RGF0ZSgpLFxuICAgICAgICAgICAgICAgIHZhbHVlLmdldEhvdXJzKCksIHZhbHVlLmdldE1pbnV0ZXMoKSwgdmFsdWUuZ2V0U2Vjb25kcygpLCB2YWx1ZS5nZXRNaWxsaXNlY29uZHMoKSk7XG4gICAgICAgICAgICByZXR1cm4gbG9jYWxlRGF0ZVN0cklFLnRvTG9jYWxlRGF0ZVN0cmluZyh0aGlzLmxvY2FsZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdmFsdWUudG9Mb2NhbGVEYXRlU3RyaW5nKHRoaXMubG9jYWxlKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9nZXRDdXJzb3JQb3NpdGlvbigpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRFZGl0RWxlbWVudCgpLnNlbGVjdGlvblN0YXJ0O1xuICAgIH1cblxuICAgIHByaXZhdGUgX3NldEN1cnNvclBvc2l0aW9uKHN0YXJ0OiBudW1iZXIsIGVuZDogbnVtYmVyID0gc3RhcnQpOiB2b2lkIHtcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZ2V0RWRpdEVsZW1lbnQoKS5zZXRTZWxlY3Rpb25SYW5nZShzdGFydCwgZW5kKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQXBwbHkgY3VzdG9tIHVzZXIgZm9ybWF0dGVyIHVwb24gZGF0ZS5cbiAgICAgKiBAcGFyYW0gZm9ybWF0dGVyIGN1c3RvbSBmb3JtYXR0ZXIgZnVuY3Rpb24uXG4gICAgICogQHBhcmFtIGRhdGUgcGFzc2VkIGRhdGVcbiAgICAgKi9cbiAgICBwcml2YXRlIF9jdXN0b21Gb3JtYXRDaGVja2VyKGZvcm1hdHRlcjogKF86IERhdGUpID0+IHN0cmluZywgZGF0ZTogRGF0ZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5mb3JtYXR0ZXIgPyB0aGlzLmZvcm1hdHRlcihkYXRlKSA6IHRoaXMuX3NldExvY2FsZVRvRGF0ZShkYXRlKTtcbiAgICB9XG5cbiAgICAvKlxuICAgICogVHJhbnNmb3JtcyB0aGUgZGF0ZSBhY2NvcmRpbmcgdG8gdGhlIHNwZWNpZmllZCBmb3JtYXQgd2hlbiBgSWd4RGF0ZVBpY2tlckNvbXBvbmVudGAgaXMgaW4gZWRpdCBtb2RlXG4gICAgKiB1c2luZyBAYW5ndWxhci9jb21tb24gZm9ybWF0RGF0ZSBtZXRob2Q6IGh0dHBzOi8vYW5ndWxhci5pby9hcGkvY29tbW9uL2Zvcm1hdERhdGVcbiAgICAqIEBwYXJhbSAgdmFsdWU6IHN0cmluZyB8IG51bWJlciB8IERhdGVcbiAgICAqIEByZXR1cm5zIGZvcm1hdHRlZCBzdHJpbmdcbiAgICAqL1xuICAgIHByaXZhdGUgX2dldERpc3BsYXlEYXRlKHZhbHVlOiBhbnkpOiBzdHJpbmcge1xuICAgICAgICBpZiAodGhpcy5mb3JtYXQgJiYgIXRoaXMuZm9ybWF0dGVyKSB7XG4gICAgICAgICAgICBjb25zdCBsb2NhbGUgPSB0aGlzLmxvY2FsZSB8fCB0aGlzLmRlZmF1bHRMb2NhbGU7XG4gICAgICAgICAgICByZXR1cm4gZm9ybWF0RGF0ZSh2YWx1ZSwgdGhpcy5mb3JtYXQsIGxvY2FsZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fY3VzdG9tRm9ybWF0Q2hlY2tlcih0aGlzLmZvcm1hdHRlciwgdmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfZ2V0RWRpdG9yRGF0ZSh2YWx1ZTogYW55KSB7XG4gICAgICAgIGNvbnN0IGxvY2FsZSA9IHRoaXMubG9jYWxlIHx8IHRoaXMuZGVmYXVsdExvY2FsZTtcbiAgICAgICAgY29uc3QgY2hhbmdlZFZhbHVlID0gKHZhbHVlKSA/IGZvcm1hdERhdGUodmFsdWUsIHRoaXMubWFzaywgbG9jYWxlKSA6ICcnO1xuICAgICAgICByZXR1cm4gRGF0ZVBpY2tlclV0aWwuYWRkUHJvbXB0Q2hhcnNFZGl0TW9kZSh0aGlzLmRhdGVGb3JtYXRQYXJ0cywgdGhpcy52YWx1ZSwgY2hhbmdlZFZhbHVlKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9vblRvdWNoZWRDYWxsYmFjazogKCkgPT4gdm9pZCA9ICgpID0+IHsgfTtcblxuICAgIHByaXZhdGUgX29uQ2hhbmdlQ2FsbGJhY2s6IChfOiBEYXRlKSA9PiB2b2lkID0gKCkgPT4geyB9O1xufVxuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuQE5nTW9kdWxlKHtcbiAgICBkZWNsYXJhdGlvbnM6IFtJZ3hEYXRlUGlja2VyQ29tcG9uZW50LCBJZ3hDYWxlbmRhckNvbnRhaW5lckNvbXBvbmVudCwgSWd4RGF0ZVBpY2tlckFjdGlvbnNEaXJlY3RpdmUsXG4gICAgICAgIElneERhdGVQaWNrZXJUZW1wbGF0ZURpcmVjdGl2ZSwgRGF0ZVBpY2tlckRpc3BsYXlWYWx1ZVBpcGUsIERhdGVQaWNrZXJJbnB1dFZhbHVlUGlwZV0sXG4gICAgZXhwb3J0czogW0lneERhdGVQaWNrZXJDb21wb25lbnQsIElneERhdGVQaWNrZXJUZW1wbGF0ZURpcmVjdGl2ZSwgSWd4RGF0ZVBpY2tlckFjdGlvbnNEaXJlY3RpdmUsXG4gICAgICAgIERhdGVQaWNrZXJEaXNwbGF5VmFsdWVQaXBlLCBEYXRlUGlja2VySW5wdXRWYWx1ZVBpcGVdLFxuICAgIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIElneEljb25Nb2R1bGUsIElneElucHV0R3JvdXBNb2R1bGUsIElneENhbGVuZGFyTW9kdWxlLCBJZ3hCdXR0b25Nb2R1bGUsIElneFJpcHBsZU1vZHVsZSwgSWd4TWFza01vZHVsZV0sXG4gICAgZW50cnlDb21wb25lbnRzOiBbSWd4Q2FsZW5kYXJDb250YWluZXJDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIElneERhdGVQaWNrZXJNb2R1bGUgeyB9XG4iXX0=