import { ElementRef, EventEmitter, OnDestroy, OnInit, TemplateRef, AfterViewInit } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { HammerGestureConfig } from '@angular/platform-browser';
import { IgxTimePickerTemplateDirective, IgxTimePickerActionsDirective } from './time-picker.directives';
import { EditorProvider } from '../core/edit-provider';
import { IgxTimePickerBase } from './time-picker.common';
import { OverlaySettings } from '../services/overlay/utilities';
import { IgxOverlayOutletDirective, IgxToggleDirective } from '../directives/toggle/toggle.directive';
import { TimeDisplayFormatPipe, TimeInputFormatPipe } from './time-picker.pipes';
import { ITimePickerResourceStrings } from '../core/i18n/time-picker-resources';
import { CancelableBrowserEventArgs } from '../core/utils';
import { InteractionMode } from '../core/enums';
export declare class TimePickerHammerConfig extends HammerGestureConfig {
    overrides: {
        pan: {
            direction: number;
            threshold: number;
        };
    };
}
export interface IgxTimePickerValueChangedEventArgs {
    oldValue: Date;
    newValue: Date;
}
export interface IgxTimePickerValidationFailedEventArgs {
    timePicker: IgxTimePickerComponent;
    currentValue: Date;
    setThroughUI: boolean;
}
export declare class IgxTimePickerComponent implements IgxTimePickerBase, ControlValueAccessor, EditorProvider, OnInit, OnDestroy, AfterViewInit {
    /**
     * An @Input property that sets the value of the `id` attribute.
     * ```html
     * <igx-time-picker [id]="'igx-time-picker-5'" format="h:mm tt" ></igx-time-picker>
     * ```
     */
    id: string;
    /**
     * An accessor that allows you to set a time using the `value` input.
     * ```html
     *public date: Date = new Date(Date.now());
     *  //...
     *<igx-time-picker [value]="date" format="h:mm tt"></igx-time-picker>
     * ```
     */
    /**
    * An accessor that returns the value of `igx-time-picker` component.
    * ```html
    *@ViewChild("MyPick")
    *public pick: IgxTimePickerComponent;
    *ngAfterViewInit(){
    *    let pickSelect = this.pick.value;
    * }
    * ```
    */
    value: Date;
    /**
     * An @Input property that allows you to disable the `igx-time-picker` component. By default `disabled` is set to false.
     * ```html
     * <igx-time-picker [disabled]="'true'" [vertical]="true" format="h:mm tt" ></igx-time-picker>
     * ```
     */
    disabled: boolean;
    /**
     * An accessor that sets the resource strings.
     * By default it uses EN resources.
    */
    /**
     * An accessor that returns the resource strings.
    */
    resourceStrings: ITimePickerResourceStrings;
    /**
     * An @Input property that renders OK button with custom text. By default `okButtonLabel` is set to OK.
     * ```html
     * <igx-time-picker okButtonLabel='SET' [value]="date" format="h:mm tt"></igx-time-picker>
     * ```
     */
    /**
     * An accessor that returns the label of ok button.
    */
    okButtonLabel: string;
    /**
     * An @Input property that renders cancel button with custom text.
     * By default `cancelButtonLabel` is set to Cancel.
     * ```html
     * <igx-time-picker cancelButtonLabel='Exit' [value]="date" format="h:mm tt"></igx-time-picker>
     * ```
     */
    /**
    * An accessor that returns the label of cancel button.
    */
    cancelButtonLabel: string;
    /**
     * An @Input property that gets/sets the delta by which hour and minute items would be changed <br>
     * when the user presses the Up/Down keys.
     * By default `itemsDelta` is set to `{hours: 1, minutes:1}`
     * ```html
     *<igx-time-picker [itemsDelta]="{hours:3, minutes:5}" id="time-picker"></igx-time-picker>
     *```
     */
    itemsDelta: {
        hours: number;
        minutes: number;
    };
    /**
     * An @Input property that allows you to set the `minValue` to limit the user input.
     *```html
     *public min: string = "09:00";
     *  //..
     *<igx-time-picker format="HH:mm" [vertical]="true" [minValue]="min"></igx-time-picker>
     *```
     */
    minValue: string;
    /**
     * An @Input property that allows you to set the `maxValue` to limit the user input.
     *```html
     *public max: string = "18:00";
     *  //..
     *<igx-time-picker format="HH:mm" [vertical]="true" [maxValue]="max"></igx-time-picker>
     *```
     */
    maxValue: string;
    /**
     * An @Input property that determines the spin behavior. By default `isSpinLoop` is set to true.
     *The minutes and hour spinning will wrap around by default.
     *```html
     *<igx-time-picker [isSpinLoop]="false" id="time-picker"></igx-time-picker>
     *```
     */
    isSpinLoop: boolean;
    /**
     * An @Input property that Gets/Sets the orientation of the `igxTimePicker`. By default `vertical` is set to false.
     * ```html
     *<igx-time-picker [vertical]="true" id="time-picker"></igx-time-picker>
     * ```
     */
    vertical: boolean;
    /**
     * An @Input property that Gets/Sets format of time while `igxTimePicker` does not have focus. <br>
     * By default `format` is set to hh:mm tt. <br>
     * List of time-flags: <br>
     * `h` : hours field in 12-hours format without leading zero <br>
     * `hh` : hours field in 12-hours format with leading zero <br>
     * `H` : hours field in 24-hours format without leading zero <br>
     * `HH` : hours field in 24-hours format with leading zero <br>
     * `m` : minutes field without leading zero <br>
     * `mm` : minutes field with leading zero <br>
     * `tt` : 2 character string which represents AM/PM field <br>
     * ```html
     *<igx-time-picker format="HH:m" id="time-picker"></igx-time-picker>
     * ```
     */
    format: string;
    /**
     * Sets the character used to prompt the user for input.
     * Default value is "'-'".
     * ```html
     * <igx-time-picker [promptChar] = "'_'">
     * ```
     * @memberof IgxTimePickerComponent
     */
    promptChar: string;
    /**
     * An @Input property that allows you to switch the interaction mode between
     * a dialog picker or dropdown with editable masked input.
     * Deafult is dialog picker.
     *```html
     *public mode = InteractionMode.DROPDOWN;
     *  //..
     *<igx-time-picker [mode]="mode"></igx-time-picker>
     *```
     * @memberof IgxTimePickerComponent
     */
    mode: InteractionMode;
    /**
     * Determines the container the popup element should be attached to.
     *
     * ```html
     * <div igxOverlayOutlet #outlet="overlay-outlet"></div>
     * //..
     * <igx-time-picker [outlet]="outlet"></igx-time-picker>
     * //..
     * ```
     * Where `outlet` is an instance of `IgxOverlayOutletDirective` or an `ElementRef`.
     */
    outlet: IgxOverlayOutletDirective | ElementRef;
    /**
    * An @Input property that allows you to modify overlay positioning, interaction and scroll behavior.
    * ```typescript
    * const settings: OverlaySettings = {
    *      closeOnOutsideClick: true,
    *      modal: false
    *  }
    * ```
    * ---
    * ```html
    * <igx-time-picker [overlaySettings]="settings"></igx-time-picker>
    * ```
     * @memberof IgxTimePickerComponent
     */
    overlaySettings: OverlaySettings;
    /**
     * Emitted when selection is made. The event contains the selected value. Returns {`oldValue`: `Date`, `newValue`: `Date`}.
     *```typescript
     * @ViewChild("toast")
     *private toast: IgxToastComponent;
     *public onValueChanged(timepicker){
     *    this.toast.show()
     *}
     * //...
     * ```
     * ```html
     *<igx-time-picker (onValueChanged)="onValueChanged($event)"></igx-time-picker>
     *<igx-toast #toast message="The value has been changed!"></igx-toast>
     *```
     */
    onValueChanged: EventEmitter<IgxTimePickerValueChangedEventArgs>;
    /**
     * Emitted when an invalid value is being set. Returns {`timePicker`: `any`, `currentValue`: `Date`, `setThroughUI`: `boolean`}
     * ```typescript
     *public min: string = "09:00";
     *public max: string = "18:00";
     *@ViewChild("toast")
     *private toast: IgxToastComponent;
     *public onValidationFailed(timepicker){
     *    this.toast.show();
     *}
     * //...
     * ```
     * ```html
     *<igx-time-picker [minValue]="min" [maxValue]="max" (onValidationFailed)="onValidationFailed($event)"></igx-time-picker>
     *<igx-toast #toast message="Value must be between 09:00 and 18:00!"></igx-toast>
     * ```
     */
    onValidationFailed: EventEmitter<IgxTimePickerValidationFailedEventArgs>;
    /**
     * @deprecated Use 'onOpened' instead.
     * Emitted when a timePicker is being opened.
     * ```html
     *@ViewChild("toast")
     *private toast: IgxToastComponent;
     *public onOpen(timepicker){
     *    this.toast.show();
     *}
     * //...
     * ```
     * ```html
     *<igx-time-picker [minValue]="min" [maxValue]="max" (onOpen)="onOpen($event)"></igx-time-picker>
     *<igx-toast #toast message="The time picker has been opened!"></igx-toast>
     * ```
     */
    onOpen: EventEmitter<IgxTimePickerComponent>;
    /**
     * Emitted when a timePicker is opened.
     */
    onOpened: EventEmitter<IgxTimePickerComponent>;
    /**
     * @deprecated Use 'onClosed' instead.
     * Emitted when a timePicker is being closed.
     */
    onClose: EventEmitter<IgxTimePickerComponent>;
    /**
     * Emitted when a timePicker is closed.
     */
    onClosed: EventEmitter<IgxTimePickerComponent>;
    /**
     * Emitted when a timePicker is being closed.
     */
    onClosing: EventEmitter<CancelableBrowserEventArgs>;
    /**
     * @hidden
     */
    hourList: ElementRef;
    /**
     * @hidden
     */
    minuteList: ElementRef;
    /**
     * @hidden
     */
    ampmList: ElementRef;
    protected defaultTimePickerTemplate: TemplateRef<any>;
    /**
     *@hidden
     */
    protected timePickerTemplateDirective: IgxTimePickerTemplateDirective;
    /**
     *@hidden
     */
    timePickerActionsDirective: IgxTimePickerActionsDirective;
    /**
     * @hidden
     */
    private _input;
    /**
     * @hidden
     */
    toggleRef: IgxToggleDirective;
    /**
     * @hidden
     */
    private input;
    /**
     * @hidden
     */
    private group;
    /**
     * @hidden
     */
    private dropdownInputTemplate;
    private _overlaySettings;
    /**
     * @hidden
     */
    _hourItems: any[];
    /**
     * @hidden
     */
    _minuteItems: any[];
    /**
     * @hidden
     */
    _ampmItems: any[];
    /**
     * @hidden
    */
    cleared: boolean;
    /**
     * @hidden
    */
    isNotEmpty: boolean;
    /**
     * @hidden
    */
    displayFormat: TimeDisplayFormatPipe;
    /**
     * @hidden
    */
    inputFormat: TimeInputFormatPipe;
    /**
     * @hidden
     */
    selectedHour: string;
    /**
     * @hidden
     */
    selectedMinute: string;
    /**
     * @hidden
     */
    selectedAmPm: string;
    private _value;
    private _resourceStrings;
    private _okButtonLabel;
    private _cancelButtonLabel;
    private _format;
    private _mask;
    private _displayValue;
    private _isHourListLoop;
    private _isMinuteListLoop;
    private _hourView;
    private _minuteView;
    private _ampmView;
    private _dateFromModel;
    private _destroy$;
    private _dropDownOverlaySettings;
    private _dialogOverlaySettings;
    private _prevSelectedHour;
    private _prevSelectedMinute;
    private _prevSelectedAmPm;
    private _onOpen;
    private _onClose;
    private _onTouchedCallback;
    private _onChangeCallback;
    /**
     * @hidden
    */
    mask: string;
    /**
     * @hidden
     */
    displayValue: string;
    /**
     * Returns the current time formatted as string using the `format` option.
     * If there is no set time the return is an empty string.
     *```typescript
     *@ViewChild("MyChild")
     *private picker: IgxTimePickerComponent;
     *ngAfterViewInit(){
     *    let time = this.picker.displayTime;
     *}
     *```
     */
    readonly displayTime: string;
    /**
     * @hidden
     */
    readonly hourView: string[];
    /**
     * @hidden
     */
    readonly minuteView: string[];
    /**
     * @hidden
     */
    readonly ampmView: string[];
    /**
     * @hidden
     */
    readonly showClearButton: boolean;
    /**
     * @hidden
     */
    readonly showHoursList: boolean;
    /**
     * @hidden
     */
    readonly showMinutesList: boolean;
    /**
     * @hidden
     */
    readonly showAmPmList: boolean;
    /**
     * @hidden
     */
    readonly validMinuteEntries: any[];
    /**
     * @hidden
     */
    readonly validHourEntries: any[];
    /**
     * Gets the input group template.
     * ```typescript
     * let template = this.template();
     * ```
     * @memberof IgxTimePickerComponent
     */
    readonly template: TemplateRef<any>;
    /**
     * Gets the context passed to the input group template.
     * @memberof IgxTimePickerComponent
     */
    readonly context: {
        value: Date;
        displayTime: string;
        displayValue: string;
        openDialog: (target?: HTMLElement) => void;
    };
    /**
     * @hidden
     */
    ngOnInit(): void;
    /**
     * @hidden
     */
    ngAfterViewInit(): void;
    /**
     * @hidden
     */
    ngOnDestroy(): void;
    /**
     * @hidden
     */
    onKeydownSpace(event: any): void;
    /**
     * @hidden
     */
    onAltArrowDown(): void;
    private _scrollItemIntoView;
    private _viewToString;
    private _itemToString;
    private _prevItem;
    private _nextItem;
    private _formatTime;
    private _updateHourView;
    private _updateMinuteView;
    private _updateAmPmView;
    private _addEmptyItems;
    private _generateHours;
    private _generateMinutes;
    private _generateAmPm;
    private _getSelectedTime;
    private _convertMinMaxValue;
    private _isValueValid;
    private _isEntryValid;
    private _getCursorPosition;
    private _setCursorPosition;
    private _updateEditableInput;
    private _spinHours;
    private _spinMinutes;
    private _initializeContainer;
    private _onDropDownClosed;
    /**
     * @hidden
     */
    getEditElement(): any;
    /**
     * @hidden
     */
    getInputGroupElement(): any;
    /**
     * @hidden
     */
    writeValue(value: Date): void;
    /**
     * @hidden
     */
    registerOnChange(fn: (_: Date) => void): void;
    /**
     * @hidden
     */
    registerOnTouched(fn: () => void): void;
    /**
     * opens the dialog.
     * @param target HTMLElement - the target element to use for positioning the drop down container according to
     * ```html
     * <igx-time-picker [value]="date" mode="dropdown" #retemplated>
     *   <ng-template igxTimePickerTemplate let-openDialog="openDialog"
     *                let-displayTime="displayTime">
     *     <igx-input-group>
     *       <input #dropDownTarget igxInput [value]="displayTime" />
     *       <igx-suffix (click)="openDialog(dropDownTarget)">
     *         <igx-icon>alarm</igx-icon>
     *       </igx-suffix>
     *     </igx-input-group>
     *   </ng-template>
     * </igx-time-picker>
     * ```
     */
    openDialog(target?: HTMLElement): void;
    /**
     * Scrolls a hour item into view.
     * ```typescript
     *scrhintoView(picker) {
     *picker.scrollHourIntoView('2');
     *}
     * ```
     *```html
     *<igx-time-picker #picker format="h:mm tt" (onOpen)="scrhintoView(picker)"></igx-time-picker>
     *```
     *@param item to be scrolled in view.
     */
    scrollHourIntoView(item: string): void;
    /**
     * Scrolls a minute item into view.
     * ```typescript
     *scrMintoView(picker) {
     *picker.scrollMinuteIntoView('3');
     *}
     * ```
     *```html
     *<igx-time-picker #picker format="h:mm tt" (onOpen)="scrMintoView(picker)"></igx-time-picker>
     *```
     * @param item to be scrolled in view.
     */
    scrollMinuteIntoView(item: string): void;
    /**
     * Scrolls an ampm item into view.
     * ```typescript
     *scrAmPmIntoView(picker) {
     *picker.scrollAmPmIntoView('PM');
     *}
     * ```
     *```html
     *<igx-time-picker #picker format="h:mm tt" (onOpen)="scrAmPmIntoView(picker)"></igx-time-picker>
     *```
     * @param item to be scrolled in view.
     */
    scrollAmPmIntoView(item: string): void;
    /**
     * @hidden
     */
    nextHour(): void;
    /**
     * @hidden
     */
    prevHour(): void;
    /**
     * @hidden
     */
    nextMinute(): void;
    /**
     * @hidden
     */
    prevMinute(): void;
    /**
     * @hidden
     */
    nextAmPm(): void;
    /**
     * @hidden
     */
    prevAmPm(): void;
    /**
     * If current value is valid selects it, closes the dialog and returns true, otherwise returns false.
     * ```html
     * <igx-dialog class="igx-time-picker__dialog-popup" [rightButtonLabel]="okButtonLabel" (onRightButtonSelect)="okButtonClick()">
     * //..
     * </igx-dialog>
     * ```
     */
    okButtonClick(): boolean;
    /**
     * Closes the dialog without selecting the current value.
     * ```html
     * <igx-dialog class="igx-time-picker__dialog-popup" [leftButtonLabel]="cancelButtonLabel" (onLeftButtonSelect)="cancelButtonClick()">
     * //...
     * </igx-dialog>
     * ```
     */
    cancelButtonClick(): void;
    /**
     * Returns an array of the hours currently in view.
     *```html
     *@ViewChild("MyChild")
     *private picker: IgxTimePickerComponent;
     *ngAfterViewInit(){
     *    let hInView = this.picker.hoursInView;
     *}
     *```
     */
    hoursInView(): string[];
    /**
     * Returns an array of the minutes currently in view.
     *```html
     *@ViewChild("MyChild")
     *private picker: IgxTimePickerComponent;
     *ngAfterViewInit(){
     *    let minInView = this.picker.minutesInView;
     *}
     *```
     */
    minutesInView(): string[];
    /**
     * Returns an array of the AM/PM currently in view.
     *```html
     *@ViewChild("MyChild")
     *private picker: IgxTimePickerComponent;
     *ngAfterViewInit(){
     *    let ApInView = this.picker.ampmInView;
     *}
     *```
     */
    ampmInView(): string[];
    /**
     * Closes the dropdown/dialog.
     * ```html
     *<igx-time-picker #timePicker></igx-time-picker>
     * ```
     * ```typescript
     * @ViewChild('timePicker', { read: IgxTimePickerComponent }) picker: IgxTimePickerComponent;
     * picker.close();
     * ```
     */
    close(): void;
    /**
     * @hidden
     */
    parseMask(preserveAmPm?: boolean): string;
    /**
     * @hidden
     */
    clear(): void;
    /**
     * @hidden
     */
    onInput(event: any): void;
    /**
     * @hidden
     */
    onFocus(event: any): void;
    /**
     * @hidden
     */
    onBlur(event: any): void;
    /**
     * @hidden
     */
    spinOnEdit(event: any): void;
}
/**
 * @hidden
 */
export declare class IgxTimePickerModule {
}