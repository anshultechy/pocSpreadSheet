import { EventEmitter, OnDestroy, ElementRef, TemplateRef, ChangeDetectorRef, NgModuleRef, OnInit, AfterViewInit } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { IgxCalendarComponent, IgxCalendarHeaderTemplateDirective, IgxCalendarSubheaderTemplateDirective, WEEKDAYS } from '../calendar/index';
import { IgxInputDirective, IgxInputGroupComponent } from '../input-group/index';
import { IgxOverlayOutletDirective } from '../directives/toggle/toggle.directive';
import { OverlaySettings, IgxOverlayService } from '../services/index';
import { DateRangeDescriptor } from '../core/dates/dateRange';
import { EditorProvider } from '../core/edit-provider';
import { DatePickerDisplayValuePipe, DatePickerInputValuePipe } from './date-picker.pipes';
import { IDatePicker } from './date-picker.common';
import { CancelableBrowserEventArgs } from '../core/utils';
import { IgxDatePickerTemplateDirective, IgxDatePickerActionsDirective } from './date-picker.directives';
import { InteractionMode } from '../core/enums';
/**
 * This interface is used to provide information about date picker reference and its current value
 * when onDisabledDate event is fired.
 */
export interface IDatePickerDisabledDateEventArgs {
    datePicker: IgxDatePickerComponent;
    currentValue: Date;
}
/**
 * This interface is used to provide information about date picker reference and its previously valid value
 * when onValidationFailed event is fired.
 */
export interface IDatePickerValidationFailedEventArgs {
    datePicker: IgxDatePickerComponent;
    prevValue: Date;
}
/**
 * This interface is used to configure calendar format view options.
 */
export interface IFormatViews {
    day?: boolean;
    month?: boolean;
    year?: boolean;
}
/**
 * This interface is used to configure calendar format options.
 */
export interface IFormatOptions {
    day?: string;
    month?: string;
    weekday?: string;
    year?: string;
}
/**
 * This enumeration is used to configure the date picker to operate with pre-defined format option used in Angular DatePipe.
 * 'https://angular.io/api/common/DatePipe'
 * 'shortDate': equivalent to 'M/d/yy' (6/15/15).
 * 'mediumDate': equivalent to 'MMM d, y' (Jun 15, 2015).
 * 'longDate': equivalent to 'MMMM d, y' (June 15, 2015).
 * 'fullDate': equivalent to 'EEEE, MMMM d, y' (Monday, June 15, 2015).
 */
export declare enum PredefinedFormatOptions {
    ShortDate = "shortDate",
    MediumDate = "mediumDate",
    LongDate = "longDate",
    FullDate = "fullDate"
}
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
export declare class IgxDatePickerComponent implements IDatePicker, ControlValueAccessor, EditorProvider, OnInit, AfterViewInit, OnDestroy {
    private _overlayService;
    element: ElementRef;
    private _cdr;
    private _moduleRef;
    /**
     * An @Input property that sets the `IgxDatePickerComponent` label.
     * The default label is 'Date'.
     * ```html
     * <igx-date-picker [label]="Calendar"></igx-date-picker>
     * ```
     */
    label: string;
    /**
     * An @Input property that sets the `IgxDatePickerComponent` label visibility.
     * By default the visibility is set to true.
     * <igx-date-picker [labelVisibility]="false"></igx-date-picker>
     */
    labelVisibility: boolean;
    /**
     *An @Input property that sets locales. Default locale is en.
     *```html
     *<igx-date-picker locale="ja-JP" [value]="date"></igx-date-picker>
     *```
     */
    locale: 'en';
    /**
     *An @Input property that sets on which day the week starts.
     *```html
     *<igx-date-picker [weekStart]="WEEKDAYS.FRIDAY" cancelButtonLabel="cancel" todayButtonLabel="today"></igx-date-picker>
     *```
     */
    weekStart: WEEKDAYS | number;
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
    formatOptions: IFormatOptions;
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
    /**
    *Sets the date format of the `IgxDatePickerComponent` when in editable dropdown mode.
    *```typescript
    *@ViewChild("MyDatePicker")
    *public datePicker: IgxDatePickerComponent;
    *this.datePicker.format = 'yyyy-M-d';
    *}
    *```
    */
    format: string;
    /**
     *Returns the date mask of the `IgxDatePickerComponent` when in editable dropdown mode.
     *```typescript
     *@ViewChild("MyDatePicker")
     *public datePicker: IgxDatePickerComponent;
     *ngAfterViewInit(){
     *    let mask = this.datePicker.mask;
     *}
     *```
     */
    mask: string;
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
    formatViews: IFormatViews;
    /**
     * Gets the disabled dates descriptors.
     * ```typescript
     * let disabledDates = this.datepicker.disabledDates;
     * ```
     */
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
    disabledDates: DateRangeDescriptor[];
    /**
     * Gets the special dates descriptors.
     * ```typescript
     * let specialDates = this.datepicker.specialDates;
     * ```
     */
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
    specialDates: DateRangeDescriptor[];
    modalOverlaySettings: OverlaySettings;
    dropDownOverlaySettings: OverlaySettings;
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
    readonly displayData: string;
    /**
     hidden
     */
    transformedDate: string;
    constructor(_overlayService: IgxOverlayService, element: ElementRef, _cdr: ChangeDetectorRef, _moduleRef: NgModuleRef<any>);
    /**
     * Gets the input group template.
     * ```typescript
     * let template = this.template();
     * ```
     * @memberof IgxDatePickerComponent
     */
    readonly template: TemplateRef<any>;
    /**
     * Gets the context passed to the input group template.
     * @memberof IgxDatePickerComponent
     */
    readonly context: {
        disabled: boolean;
        disabledDates: DateRangeDescriptor[];
        displayData: string;
        format: string;
        isSpinLoop: boolean;
        label: string;
        labelVisibility: boolean;
        locale: "en";
        mask: string;
        mode: InteractionMode;
        specialDates: DateRangeDescriptor[];
        value: Date;
        openDialog: (target?: HTMLElement) => void;
    };
    /**
     *An @Input property that gets/sets the selected date.
     *```typescript
     *public date: Date = new Date();
     *```
     *```html
     *<igx-date-picker [value]="date"></igx-date-picker>
     *```
     */
    value: Date;
    /**
     *An @Input property that sets the value of `id` attribute. If not provided it will be automatically generated.
     *```html
     *<igx-date-picker [id]="'igx-date-picker-3'" cancelButtonLabel="cancel" todayButtonLabel="today"></igx-date-picker>
     *```
     */
    id: string;
    /**
     *An @Input property that applies a custom formatter function on the selected or passed date.
     *```typescript
     *public date: Date = new Date();
     *private dayFormatter = new Intl.DateTimeFormat("en", { weekday: "long" });
     *private monthFormatter = new Intl.DateTimeFormat("en", { month: "long" });
     *public formatter = (date: Date) => { return `You selected
     *                     ${this.dayFormatter.format(date)},
     *                     ${date.getDate()} ${this.monthFormatter.format(date)},
     *                     ${date.getFullYear()}`;
     *}
     *```
     *```html
     *<igx-date-picker [value]="date" [formatter]="formatter"></igx-date-picker>
     *```
     */
    formatter: (val: Date) => string;
    /**
     *An @Input property that disables the `IgxDatePickerComponent`.
     *```html
     *<igx-date-picker [disabled]="'true'" cancelButtonLabel="cancel" todayButtonLabel="today"></igx-date-picker>
     * ```
     */
    disabled: boolean;
    /**
     *An @Input property that sets the orientation of the `IgxDatePickerComponent` header.
     *```html
     *<igx-date-picker [vertical]="'true'" cancelButtonLabel="cancel" todayButtonLabel="today"></igx-date-picker>
     *```
     */
    vertical: boolean;
    /**
     *An @Input property that renders today button with custom label.
     *```html
     *<igx-date-picker cancelButtonLabel="cancel" todayButtonLabel="Tomorrow"></igx-date-picker>
     *```
     */
    todayButtonLabel: string;
    /**
     *An @Input property that renders cancel button with custom label.
     *```html
     *<igx-date-picker cancelButtonLabel="Close" todayButtonLabel="Today"></igx-date-picker>
     *```
     */
    cancelButtonLabel: string;
    /**
     *An @Input property that sets whether `IgxDatePickerComponent` is in dialog or drop down mode.
     *```html
     *<igx-date-picker mode="dropdown"></igx-date-picker>
     *```
     */
    mode: InteractionMode;
    /**
     *An @Input property that sets whether the `IgxDatePickerComponent` date parts would spin continuously or stop when min/max is reached.
     *```html
     *<igx-date-picker [isSpinLoop]="false"></igx-date-picker>
     *```
     */
    isSpinLoop: boolean;
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
     */
    outlet: IgxOverlayOutletDirective | ElementRef;
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
    onOpen: EventEmitter<IgxDatePickerComponent>;
    /**
     *An event that is emitted when the `IgxDatePickerComponent` calendar is opened.
    */
    onOpened: EventEmitter<IgxDatePickerComponent>;
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
    onClose: EventEmitter<IgxDatePickerComponent>;
    /**
     *An event that is emitted after the `IgxDatePickerComponent` is closed.
    */
    onClosed: EventEmitter<IgxDatePickerComponent>;
    /**
     * An event that is emitted when the `IgxDatePickerComponent` is being closed.
     */
    onClosing: EventEmitter<CancelableBrowserEventArgs>;
    /**
     *An @Output property that is fired when selection is made in the calendar.
     *```typescript
     *public selection(event){
     *    alert("A date has been selected!");
     *}
     *```
     *```html
     *<igx-date-picker (onSelection)="selection($event)" cancelButtonLabel="cancel" todayButtonLabel="today"></igx-date-picker>
     *```
     */
    onSelection: EventEmitter<Date>;
    /**
    *An @Output property that fires when the user types/spins to a disabled date in the date-picker editor.
    *```typescript
    *public onDisabledDate(event){
    *    alert("This date is disabled!");
    *}
    *```
    *```html
    *<igx-date-picker (onDisabledDate)="onDisabledDate($event)"></igx-date-picker>
    *```
    */
    onDisabledDate: EventEmitter<IDatePickerDisabledDateEventArgs>;
    /**
    *An @Output property that fires when the user types/spins invalid date in the date-picker editor.
    *```typescript
    *public onValidationFailed(event){
        *    alert("This date is not valid!");
        *}
        *```
        *```html
        *<igx-date-picker (onValidationFailed)="onValidationFailed($event)"></igx-date-picker>
        *```
        */
    onValidationFailed: EventEmitter<IDatePickerValidationFailedEventArgs>;
    protected readOnlyDatePickerTemplate: TemplateRef<any>;
    protected editableDatePickerTemplate: TemplateRef<any>;
    protected inputGroup: IgxInputGroupComponent;
    protected editableInput: ElementRef;
    protected readonlyInput: ElementRef;
    protected input: IgxInputDirective;
    /**
     *@hidden
     */
    protected datePickerTemplateDirective: IgxDatePickerTemplateDirective;
    /**
     *@hidden
     */
    headerTemplate: IgxCalendarHeaderTemplateDirective;
    /**
     *@hidden
     */
    subheaderTemplate: IgxCalendarSubheaderTemplateDirective;
    /**
     *@hidden
     */
    datePickerActionsDirective: IgxDatePickerActionsDirective;
    calendar: IgxCalendarComponent;
    hasHeader: boolean;
    collapsed: boolean;
    displayValuePipe: DatePickerDisplayValuePipe;
    inputValuePipe: DatePickerInputValuePipe;
    dateFormatParts: any[];
    rawDateString: string;
    inputMask: string;
    isEmpty: boolean;
    invalidDate: string;
    private readonly spinDelta;
    private readonly defaultLocale;
    private _formatOptions;
    private _formatViews;
    private _destroy$;
    private _componentID;
    private _format;
    private _value;
    private _isInEditMode;
    private _disabledDates;
    private _specialDates;
    private _modalOverlay;
    private _dropDownOverlaySettings;
    private _positionSettings;
    private _defaultDropDownOverlaySettings;
    private _modalOverlaySettings;
    private _transformedDate;
    private _onOpen;
    private _onClose;
    /**
    * @hidden
    */
    onSpaceClick(event: KeyboardEvent): void;
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
    writeValue(value: Date): void;
    /**
     *@hidden
     */
    registerOnChange(fn: (_: Date) => void): void;
    /**
     *@hidden
     */
    registerOnTouched(fn: () => void): void;
    /** @hidden */
    getEditElement(): any;
    /** @hidden */
    getInputGroupElement(): any;
    /**
     *@hidden
     */
    ngOnInit(): void;
    ngAfterViewInit(): void;
    /**
     *@hidden
     */
    ngOnDestroy(): void;
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
    triggerTodaySelection(): void;
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
    selectDate(date: Date): void;
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
    deselectDate(): void;
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
    openDialog(target?: HTMLElement): void;
    /**
     * Close the calendar.
     *
     * @hidden
     */
    closeCalendar(): void;
    /**
     * Clear the input field, date picker value and calendar selection.
     *
     * @hidden
     */
    clear(): void;
    /**
     * Evaluates when @calendar.onSelection event was fired
     * and update the input value.
     *
     * @param event selected value from calendar.
     *
     * @hidden
     */
    handleSelection(date: Date): void;
    /**
    * Evaluates when the input blur event was fired
    * and re-calculate the date picker value.
    *
    * @param event
    *
    * @hidden
    */
    onBlur(event: any): void;
    /**
    * Evaluates when the input focus event was fired
    * and re-calculate the editor text.
    *
    * @param event
    * @hidden
    */
    onFocus(): void;
    /**
    * Evaluates when the keydown event was fired for up/down keys
    * to provide spinning of date parts.
    *
    * @param event
    *
    * @hidden
    */
    onKeyDown(event: any): void;
    /**
    * Evaluates when the mouse wheel event was fired
    * to provide spinning of date parts.
    *
    * @param event
    *
    * @hidden
    */
    onWheel(event: any): void;
    /**
    * Evaluates when input event was fired in editor.
    *
    * @param event
    *
    * @hidden
    */
    onInput(event: any): void;
    private calculateDate;
    private spinValue;
    private _onOpening;
    private _onOpened;
    private _onClosed;
    private _initializeCalendarContainer;
    private _focusCalendarDate;
    private _setLocaleToDate;
    private _getCursorPosition;
    private _setCursorPosition;
    /**
     * Apply custom user formatter upon date.
     * @param formatter custom formatter function.
     * @param date passed date
     */
    private _customFormatChecker;
    private _getDisplayDate;
    private _getEditorDate;
    private _onTouchedCallback;
    private _onChangeCallback;
}
/**
 * @hidden
 */
export declare class IgxDatePickerModule {
}
