/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { CommonModule } from '@angular/common';
import { Component, ElementRef, EventEmitter, HostBinding, HostListener, Input, NgModule, Output, TemplateRef, ViewChild, ContentChild, Injectable } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { HAMMER_GESTURE_CONFIG, HammerGestureConfig } from '@angular/platform-browser';
import { IgxIconModule } from '../icon/index';
import { IgxInputGroupModule, IgxInputGroupComponent } from '../input-group/input-group.component';
import { IgxInputDirective } from '../directives/input/input.directive';
import { IgxAmPmItemDirective, IgxHourItemDirective, IgxItemListDirective, IgxMinuteItemDirective, IgxTimePickerTemplateDirective, IgxTimePickerActionsDirective } from './time-picker.directives';
import { Subject, fromEvent, interval, animationFrameScheduler } from 'rxjs';
import { IGX_TIME_PICKER_COMPONENT } from './time-picker.common';
import { AbsoluteScrollStrategy } from '../services/overlay/scroll';
import { AutoPositionStrategy } from '../services/overlay/position';
import { takeUntil, throttle } from 'rxjs/operators';
import { IgxButtonModule } from '../directives/button/button.directive';
import { IgxMaskModule } from '../directives/mask/mask.directive';
import { IgxToggleModule, IgxToggleDirective } from '../directives/toggle/toggle.directive';
import { TimeDisplayFormatPipe, TimeInputFormatPipe } from './time-picker.pipes';
import { CurrentResourceStrings } from '../core/i18n/resources';
import { InteractionMode } from '../core/enums';
import { DeprecateProperty } from '../core/deprecateDecorators';
/** @type {?} */
let NEXT_ID = 0;
/** @type {?} */
const HOURS_POS = [0, 1, 2];
/** @type {?} */
const MINUTES_POS = [3, 4, 5];
/** @type {?} */
const AMPM_POS = [6, 7, 8];
/** @type {?} */
const ITEMS_COUNT = 7;
export class TimePickerHammerConfig extends HammerGestureConfig {
    constructor() {
        super(...arguments);
        this.overrides = {
            pan: { direction: Hammer.DIRECTION_VERTICAL, threshold: 1 }
        };
    }
}
TimePickerHammerConfig.decorators = [
    { type: Injectable }
];
if (false) {
    /** @type {?} */
    TimePickerHammerConfig.prototype.overrides;
}
/**
 * @record
 */
export function IgxTimePickerValueChangedEventArgs() { }
if (false) {
    /** @type {?} */
    IgxTimePickerValueChangedEventArgs.prototype.oldValue;
    /** @type {?} */
    IgxTimePickerValueChangedEventArgs.prototype.newValue;
}
/**
 * @record
 */
export function IgxTimePickerValidationFailedEventArgs() { }
if (false) {
    /** @type {?} */
    IgxTimePickerValidationFailedEventArgs.prototype.timePicker;
    /** @type {?} */
    IgxTimePickerValidationFailedEventArgs.prototype.currentValue;
    /** @type {?} */
    IgxTimePickerValidationFailedEventArgs.prototype.setThroughUI;
}
export class IgxTimePickerComponent {
    constructor() {
        /**
         * An \@Input property that sets the value of the `id` attribute.
         * ```html
         * <igx-time-picker [id]="'igx-time-picker-5'" format="h:mm tt" ></igx-time-picker>
         * ```
         */
        this.id = `igx-time-picker-${NEXT_ID++}`;
        /**
         * An \@Input property that allows you to disable the `igx-time-picker` component. By default `disabled` is set to false.
         * ```html
         * <igx-time-picker [disabled]="'true'" [vertical]="true" format="h:mm tt" ></igx-time-picker>
         * ```
         */
        this.disabled = false;
        /**
         * An \@Input property that gets/sets the delta by which hour and minute items would be changed <br>
         * when the user presses the Up/Down keys.
         * By default `itemsDelta` is set to `{hours: 1, minutes:1}`
         * ```html
         * <igx-time-picker [itemsDelta]="{hours:3, minutes:5}" id="time-picker"></igx-time-picker>
         * ```
         */
        this.itemsDelta = { hours: 1, minutes: 1 };
        /**
         * An \@Input property that determines the spin behavior. By default `isSpinLoop` is set to true.
         * The minutes and hour spinning will wrap around by default.
         * ```html
         * <igx-time-picker [isSpinLoop]="false" id="time-picker"></igx-time-picker>
         * ```
         */
        this.isSpinLoop = true;
        /**
         * An \@Input property that Gets/Sets the orientation of the `igxTimePicker`. By default `vertical` is set to false.
         * ```html
         * <igx-time-picker [vertical]="true" id="time-picker"></igx-time-picker>
         * ```
         */
        this.vertical = false;
        /**
         * Sets the character used to prompt the user for input.
         * Default value is "'-'".
         * ```html
         * <igx-time-picker [promptChar] = "'_'">
         * ```
         * \@memberof IgxTimePickerComponent
         */
        this.promptChar = '-';
        /**
         * An \@Input property that allows you to switch the interaction mode between
         * a dialog picker or dropdown with editable masked input.
         * Deafult is dialog picker.
         * ```html
         * public mode = InteractionMode.DROPDOWN;
         *  //..
         * <igx-time-picker [mode]="mode"></igx-time-picker>
         * ```
         * \@memberof IgxTimePickerComponent
         */
        this.mode = InteractionMode.Dialog;
        /**
         * Emitted when selection is made. The event contains the selected value. Returns {`oldValue`: `Date`, `newValue`: `Date`}.
         * ```typescript
         * \@ViewChild("toast")
         * private toast: IgxToastComponent;
         * public onValueChanged(timepicker){
         *    this.toast.show()
         * }
         * //...
         * ```
         * ```html
         * <igx-time-picker (onValueChanged)="onValueChanged($event)"></igx-time-picker>
         * <igx-toast #toast message="The value has been changed!"></igx-toast>
         * ```
         */
        this.onValueChanged = new EventEmitter();
        /**
         * Emitted when an invalid value is being set. Returns {`timePicker`: `any`, `currentValue`: `Date`, `setThroughUI`: `boolean`}
         * ```typescript
         * public min: string = "09:00";
         * public max: string = "18:00";
         * \@ViewChild("toast")
         * private toast: IgxToastComponent;
         * public onValidationFailed(timepicker){
         *    this.toast.show();
         * }
         * //...
         * ```
         * ```html
         * <igx-time-picker [minValue]="min" [maxValue]="max" (onValidationFailed)="onValidationFailed($event)"></igx-time-picker>
         * <igx-toast #toast message="Value must be between 09:00 and 18:00!"></igx-toast>
         * ```
         */
        this.onValidationFailed = new EventEmitter();
        /**
         * Emitted when a timePicker is opened.
         */
        this.onOpened = new EventEmitter();
        /**
         * Emitted when a timePicker is closed.
         */
        this.onClosed = new EventEmitter();
        /**
         * Emitted when a timePicker is being closed.
         */
        this.onClosing = new EventEmitter();
        /**
         * @hidden
         */
        this._hourItems = [];
        /**
         * @hidden
         */
        this._minuteItems = [];
        /**
         * @hidden
         */
        this._ampmItems = [];
        /**
         * @hidden
         */
        this.cleared = false;
        /**
         * @hidden
         */
        this.isNotEmpty = false;
        /**
         * @hidden
         */
        this.displayFormat = new TimeDisplayFormatPipe(this);
        /**
         * @hidden
         */
        this.inputFormat = new TimeInputFormatPipe(this);
        this._resourceStrings = CurrentResourceStrings.TimePickerResStrings;
        this._okButtonLabel = null;
        this._cancelButtonLabel = null;
        this._isHourListLoop = this.isSpinLoop;
        this._isMinuteListLoop = this.isSpinLoop;
        this._hourView = [];
        this._minuteView = [];
        this._ampmView = [];
        this._destroy$ = new Subject();
        this._onOpen = new EventEmitter();
        this._onClose = new EventEmitter();
        this._onTouchedCallback = () => { };
        this._onChangeCallback = () => { };
    }
    /**
     * An accessor that allows you to set a time using the `value` input.
     * ```html
     * public date: Date = new Date(Date.now());
     *  //...
     * <igx-time-picker [value]="date" format="h:mm tt"></igx-time-picker>
     * ```
     * @param {?} value
     * @return {?}
     */
    set value(value) {
        if (this._isValueValid(value)) {
            /** @type {?} */
            const oldVal = this._value;
            this._value = value;
            this._onChangeCallback(value);
            /** @type {?} */
            const dispVal = this._formatTime(this.value, this.format);
            if (this.mode === InteractionMode.DropDown && this._displayValue !== dispVal) {
                this.displayValue = dispVal;
            }
            /** @type {?} */
            const args = {
                oldValue: oldVal,
                newValue: value
            };
            this.onValueChanged.emit(args);
        }
        else {
            /** @type {?} */
            const args = {
                timePicker: this,
                currentValue: value,
                setThroughUI: false
            };
            this.onValidationFailed.emit(args);
        }
    }
    /**
     * An accessor that returns the value of `igx-time-picker` component.
     * ```html
     * \@ViewChild("MyPick")
     * public pick: IgxTimePickerComponent;
     * ngAfterViewInit(){
     *    let pickSelect = this.pick.value;
     * }
     * ```
     * @return {?}
     */
    get value() {
        return this._value;
    }
    /**
     * An accessor that sets the resource strings.
     * By default it uses EN resources.
     * @param {?} value
     * @return {?}
     */
    set resourceStrings(value) {
        this._resourceStrings = Object.assign({}, this._resourceStrings, value);
    }
    /**
     * An accessor that returns the resource strings.
     * @return {?}
     */
    get resourceStrings() {
        return this._resourceStrings;
    }
    /**
     * An \@Input property that renders OK button with custom text. By default `okButtonLabel` is set to OK.
     * ```html
     * <igx-time-picker okButtonLabel='SET' [value]="date" format="h:mm tt"></igx-time-picker>
     * ```
     * @param {?} value
     * @return {?}
     */
    set okButtonLabel(value) {
        this._okButtonLabel = value;
    }
    /**
     * An accessor that returns the label of ok button.
     * @return {?}
     */
    get okButtonLabel() {
        if (this._okButtonLabel === null) {
            return this.resourceStrings.igx_time_picker_ok;
        }
        return this._okButtonLabel;
    }
    /**
     * An \@Input property that renders cancel button with custom text.
     * By default `cancelButtonLabel` is set to Cancel.
     * ```html
     * <igx-time-picker cancelButtonLabel='Exit' [value]="date" format="h:mm tt"></igx-time-picker>
     * ```
     * @param {?} value
     * @return {?}
     */
    set cancelButtonLabel(value) {
        this._cancelButtonLabel = value;
    }
    /**
     * An accessor that returns the label of cancel button.
     * @return {?}
     */
    get cancelButtonLabel() {
        if (this._cancelButtonLabel === null) {
            return this.resourceStrings.igx_time_picker_cancel;
        }
        return this._cancelButtonLabel;
    }
    /**
     * An \@Input property that Gets/Sets format of time while `igxTimePicker` does not have focus. <br>
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
     * <igx-time-picker format="HH:m" id="time-picker"></igx-time-picker>
     * ```
     * @return {?}
     */
    get format() {
        return this._format || 'hh:mm tt';
    }
    /**
     * @param {?} formatValue
     * @return {?}
     */
    set format(formatValue) {
        this._format = formatValue;
        this.mask = this._format.indexOf('tt') !== -1 ? '00:00 LL' : '00:00';
        if (!this.showHoursList || !this.showMinutesList) {
            this.mask = this.mask.slice(this.mask.indexOf(':') + 1, this.mask.length);
        }
        if (this.displayValue) {
            this.displayValue = this._formatTime(this.value, this._format);
        }
    }
    /**
     * An \@Input property that allows you to modify overlay positioning, interaction and scroll behavior.
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
     * \@memberof IgxTimePickerComponent
     * @param {?} value
     * @return {?}
     */
    set overlaySettings(value) {
        this._overlaySettings = value;
    }
    /**
     * @return {?}
     */
    get overlaySettings() {
        return this._overlaySettings ? this._overlaySettings :
            (this.mode === InteractionMode.Dialog ? this._dialogOverlaySettings : this._dropDownOverlaySettings);
    }
    /**
     * @deprecated Use 'onOpened' instead.
     * Emitted when a timePicker is being opened.
     * ```html
     * \@ViewChild("toast")
     * private toast: IgxToastComponent;
     * public onOpen(timepicker){
     *    this.toast.show();
     * }
     * //...
     * ```
     * ```html
     * <igx-time-picker [minValue]="min" [maxValue]="max" (onOpen)="onOpen($event)"></igx-time-picker>
     * <igx-toast #toast message="The time picker has been opened!"></igx-toast>
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
     * Emitted when a timePicker is being closed.
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
     * @return {?}
     */
    get mask() {
        return this._mask || '00:00 LL';
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set mask(val) {
        this._mask = val;
    }
    /**
     * @hidden
     * @return {?}
     */
    get displayValue() {
        if (this._displayValue === undefined) {
            return this._formatTime(this.value, this.format);
        }
        return this._displayValue;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set displayValue(value) {
        this._displayValue = value;
    }
    /**
     * Returns the current time formatted as string using the `format` option.
     * If there is no set time the return is an empty string.
     * ```typescript
     * \@ViewChild("MyChild")
     * private picker: IgxTimePickerComponent;
     * ngAfterViewInit(){
     *    let time = this.picker.displayTime;
     * }
     * ```
     * @return {?}
     */
    get displayTime() {
        if (this.value) {
            return this._formatTime(this.value, this.format);
        }
        return '';
    }
    /**
     * @hidden
     * @return {?}
     */
    get hourView() {
        return this._hourView;
    }
    /**
     * @hidden
     * @return {?}
     */
    get minuteView() {
        return this._minuteView;
    }
    /**
     * @hidden
     * @return {?}
     */
    get ampmView() {
        return this._ampmView;
    }
    /**
     * @hidden
     * @return {?}
     */
    get showClearButton() {
        return (this.displayValue && this.displayValue !== this.parseMask(false)) || this.isNotEmpty;
    }
    /**
     * @hidden
     * @return {?}
     */
    get showHoursList() {
        return this.format.indexOf('h') !== -1 || this.format.indexOf('H') !== -1;
    }
    /**
     * @hidden
     * @return {?}
     */
    get showMinutesList() {
        return this.format.indexOf('m') !== -1;
    }
    /**
     * @hidden
     * @return {?}
     */
    get showAmPmList() {
        return this.format.indexOf('t') !== -1;
    }
    /**
     * @hidden
     * @return {?}
     */
    get validMinuteEntries() {
        /** @type {?} */
        const minuteEntries = [];
        for (let i = 0; i < 60; i++) {
            minuteEntries.push(i);
        }
        return minuteEntries;
    }
    /**
     * @hidden
     * @return {?}
     */
    get validHourEntries() {
        /** @type {?} */
        const hourEntries = [];
        /** @type {?} */
        const index = this.format.indexOf('h') !== -1 ? 13 : 24;
        for (let i = 0; i < index; i++) {
            hourEntries.push(i);
        }
        return hourEntries;
    }
    /**
     * Gets the input group template.
     * ```typescript
     * let template = this.template();
     * ```
     * \@memberof IgxTimePickerComponent
     * @return {?}
     */
    get template() {
        if (this.timePickerTemplateDirective) {
            return this.timePickerTemplateDirective.template;
        }
        return this.mode === InteractionMode.Dialog ? this.defaultTimePickerTemplate : this.dropdownInputTemplate;
    }
    /**
     * Gets the context passed to the input group template.
     * \@memberof IgxTimePickerComponent
     * @return {?}
     */
    get context() {
        return {
            value: this.value,
            displayTime: this.displayTime,
            displayValue: this.displayValue,
            openDialog: (target) => this.openDialog(target)
        };
    }
    /**
     * @hidden
     * @return {?}
     */
    ngOnInit() {
        this._generateHours();
        this._generateMinutes();
        if (this.format.indexOf('tt') !== -1) {
            this._generateAmPm();
        }
        this._dropDownOverlaySettings = {
            modal: false,
            closeOnOutsideClick: true,
            scrollStrategy: new AbsoluteScrollStrategy(),
            positionStrategy: new AutoPositionStrategy()
        };
        this._dialogOverlaySettings = {};
    }
    /**
     * @hidden
     * @return {?}
     */
    ngAfterViewInit() {
        if (this.mode === InteractionMode.DropDown && this.input) {
            fromEvent(this.input.nativeElement, 'keydown').pipe(throttle(() => interval(0, animationFrameScheduler)), takeUntil(this._destroy$)).subscribe((event) => {
                if (event.key === "ArrowUp" /* UP_ARROW */ || event.key === "Up" /* UP_ARROW_IE */ ||
                    event.key === "ArrowDown" /* DOWN_ARROW */ || event.key === "Down" /* DOWN_ARROW_IE */) {
                    this.spinOnEdit(event);
                }
            });
        }
        if (this.toggleRef && this.group) {
            this.toggleRef.element.style.width = this.group.element.nativeElement.getBoundingClientRect().width + 'px';
        }
        if (this.toggleRef) {
            this.toggleRef.onClosed.pipe(takeUntil(this._destroy$)).subscribe(() => {
                if (this._input) {
                    this._input.nativeElement.focus();
                }
                if (this.mode === InteractionMode.DropDown) {
                    this._onDropDownClosed();
                }
                this.onClosed.emit(this);
                // TODO: remove this line after deprecating 'onClose'
                this._onClose.emit(this);
            });
            this.toggleRef.onOpened.pipe(takeUntil(this._destroy$)).subscribe(() => {
                this.onOpened.emit(this);
                // TODO: remove this line after deprecating 'onOpen'
                this._onOpen.emit(this);
            });
            this.toggleRef.onClosing.pipe(takeUntil(this._destroy$)).subscribe((event) => {
                this.onClosing.emit(event);
            });
        }
    }
    /**
     * @hidden
     * @return {?}
     */
    ngOnDestroy() {
        this._destroy$.next(true);
        this._destroy$.complete();
    }
    /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    onKeydownSpace(event) {
        this.openDialog(this.getInputGroupElement());
        event.preventDefault();
    }
    /**
     * @hidden
     * @return {?}
     */
    onAltArrowDown() {
        this.openDialog(this.getInputGroupElement());
    }
    /**
     * @private
     * @param {?} item
     * @param {?} items
     * @param {?} selectedItem
     * @param {?} isListLoop
     * @param {?} viewType
     * @return {?}
     */
    _scrollItemIntoView(item, items, selectedItem, isListLoop, viewType) {
        /** @type {?} */
        let itemIntoView;
        if (items) {
            /** @type {?} */
            const index = (item === 'AM' || item === 'PM') ? items.indexOf(item) : items.indexOf(parseInt(item, 10));
            /** @type {?} */
            let view;
            if (index !== -1) {
                if (isListLoop) {
                    if (index > 0) {
                        selectedItem = this._itemToString(items[index - 1], viewType);
                        itemIntoView = this._nextItem(items, selectedItem, isListLoop, viewType);
                    }
                    else {
                        selectedItem = this._itemToString(items[1], viewType);
                        itemIntoView = this._prevItem(items, selectedItem, isListLoop, viewType);
                    }
                }
                else {
                    view = items.slice(index - 3, index + 4);
                    selectedItem = this._itemToString(items[index], viewType);
                    itemIntoView = { selectedItem, view };
                }
                itemIntoView.view = this._viewToString(itemIntoView.view, viewType);
            }
        }
        return itemIntoView;
    }
    /**
     * @private
     * @param {?} view
     * @param {?} viewType
     * @return {?}
     */
    _viewToString(view, viewType) {
        for (let i = 0; i < view.length; i++) {
            if (typeof (view[i]) !== 'string') {
                view[i] = this._itemToString(view[i], viewType);
            }
        }
        return view;
    }
    /**
     * @private
     * @param {?} item
     * @param {?} viewType
     * @return {?}
     */
    _itemToString(item, viewType) {
        if (item === null) {
            item = '';
        }
        else if (viewType && typeof (item) !== 'string') {
            /** @type {?} */
            const leadZeroHour = (item < 10 && (this.format.indexOf('hh') !== -1 || this.format.indexOf('HH') !== -1));
            /** @type {?} */
            const leadZeroMinute = (item < 10 && this.format.indexOf('mm') !== -1);
            /** @type {?} */
            const leadZero = (viewType === 'hour') ? leadZeroHour : leadZeroMinute;
            item = (leadZero) ? '0' + item : `${item}`;
        }
        return item;
    }
    /**
     * @private
     * @param {?} items
     * @param {?} selectedItem
     * @param {?} isListLoop
     * @param {?} viewType
     * @return {?}
     */
    _prevItem(items, selectedItem, isListLoop, viewType) {
        /** @type {?} */
        const selectedIndex = items.indexOf(parseInt(selectedItem, 10));
        /** @type {?} */
        const itemsCount = items.length;
        /** @type {?} */
        let view;
        if (selectedIndex === -1) {
            view = items.slice(0, 7);
            selectedItem = items[3];
        }
        else if (isListLoop) {
            if (selectedIndex - 4 < 0) {
                view = items.slice(itemsCount - (4 - selectedIndex), itemsCount);
                view = view.concat(items.slice(0, selectedIndex + 3));
            }
            else if (selectedIndex + 4 > itemsCount) {
                view = items.slice(selectedIndex - 4, itemsCount);
                view = view.concat(items.slice(0, selectedIndex + 3 - itemsCount));
            }
            else {
                view = items.slice(selectedIndex - 4, selectedIndex + 3);
            }
            selectedItem = (selectedIndex === 0) ? items[itemsCount - 1] : items[selectedIndex - 1];
        }
        else if (selectedIndex > 3) {
            view = items.slice(selectedIndex - 4, selectedIndex + 3);
            selectedItem = items[selectedIndex - 1];
        }
        else if (selectedIndex === 3) {
            view = items.slice(0, 7);
        }
        view = this._viewToString(view, viewType);
        selectedItem = this._itemToString(selectedItem, viewType);
        return {
            selectedItem,
            view
        };
    }
    /**
     * @private
     * @param {?} items
     * @param {?} selectedItem
     * @param {?} isListLoop
     * @param {?} viewType
     * @return {?}
     */
    _nextItem(items, selectedItem, isListLoop, viewType) {
        /** @type {?} */
        const selectedIndex = items.indexOf(parseInt(selectedItem, 10));
        /** @type {?} */
        const itemsCount = items.length;
        /** @type {?} */
        let view;
        if (selectedIndex === -1) {
            view = items.slice(0, 7);
            selectedItem = items[3];
        }
        else if (isListLoop) {
            if (selectedIndex < 2) {
                view = items.slice(itemsCount - (2 - selectedIndex), itemsCount);
                view = view.concat(items.slice(0, selectedIndex + 5));
            }
            else if (selectedIndex + 4 >= itemsCount) {
                view = items.slice(selectedIndex - 2, itemsCount);
                view = view.concat(items.slice(0, selectedIndex + 5 - itemsCount));
            }
            else {
                view = items.slice(selectedIndex - 2, selectedIndex + 5);
            }
            selectedItem = (selectedIndex === itemsCount - 1) ? items[0] : items[selectedIndex + 1];
        }
        else if (selectedIndex + 1 < itemsCount - 3) {
            view = items.slice(selectedIndex - 2, selectedIndex + 5);
            selectedItem = items[selectedIndex + 1];
        }
        else if (selectedIndex === itemsCount - 4) {
            view = items.slice(selectedIndex - 3, itemsCount);
        }
        view = this._viewToString(view, viewType);
        selectedItem = this._itemToString(selectedItem, viewType);
        return {
            selectedItem,
            view
        };
    }
    /**
     * @private
     * @param {?} value
     * @param {?} format
     * @return {?}
     */
    _formatTime(value, format) {
        if (!value) {
            return '';
        }
        else {
            /** @type {?} */
            let hour = value.getHours();
            /** @type {?} */
            let formattedMinute;
            /** @type {?} */
            let formattedHour;
            /** @type {?} */
            const minute = value.getMinutes();
            /** @type {?} */
            const amPM = (hour > 11) ? 'PM' : 'AM';
            if (format.indexOf('h') !== -1) {
                if (hour > 12) {
                    hour -= 12;
                    formattedHour = hour < 10 && format.indexOf('hh') !== -1 ? '0' + hour : `${hour}`;
                }
                else if (hour === 0) {
                    formattedHour = '12';
                }
                else if (hour < 10 && format.indexOf('hh') !== -1) {
                    formattedHour = '0' + hour;
                }
                else {
                    formattedHour = `${hour}`;
                }
            }
            else {
                if (hour < 10 && format.indexOf('HH') !== -1) {
                    formattedHour = '0' + hour;
                }
                else {
                    formattedHour = `${hour}`;
                }
            }
            formattedMinute = minute < 10 && format.indexOf('mm') !== -1 ? '0' + minute : `${minute}`;
            return format.replace('hh', formattedHour).replace('h', formattedHour)
                .replace('HH', formattedHour).replace('H', formattedHour)
                .replace('mm', formattedMinute).replace('m', formattedMinute)
                .replace('tt', amPM);
        }
    }
    /**
     * @private
     * @param {?} start
     * @param {?} end
     * @return {?}
     */
    _updateHourView(start, end) {
        this._hourView = this._viewToString(this._hourItems.slice(start, end), 'hour');
    }
    /**
     * @private
     * @param {?} start
     * @param {?} end
     * @return {?}
     */
    _updateMinuteView(start, end) {
        this._minuteView = this._viewToString(this._minuteItems.slice(start, end), 'minute');
    }
    /**
     * @private
     * @param {?} start
     * @param {?} end
     * @return {?}
     */
    _updateAmPmView(start, end) {
        this._ampmView = this._ampmItems.slice(start, end);
    }
    /**
     * @private
     * @param {?} items
     * @return {?}
     */
    _addEmptyItems(items) {
        for (let i = 0; i < 3; i++) {
            items.push(null);
        }
    }
    /**
     * @private
     * @return {?}
     */
    _generateHours() {
        /** @type {?} */
        let hourItemsCount = 24;
        if (this.format.indexOf('h') !== -1) {
            hourItemsCount = 13;
        }
        hourItemsCount /= this.itemsDelta.hours;
        /** @type {?} */
        let i = this.format.indexOf('H') !== -1 ? 0 : 1;
        if (hourItemsCount < 7 || !this.isSpinLoop) {
            this._addEmptyItems(this._hourItems);
            this._isHourListLoop = false;
        }
        if (hourItemsCount > 1) {
            for (i; i < hourItemsCount; i++) {
                this._hourItems.push(i * this.itemsDelta.hours);
            }
        }
        else {
            this._hourItems.push(0);
        }
        if (hourItemsCount < 7 || !this.isSpinLoop) {
            this._addEmptyItems(this._hourItems);
        }
    }
    /**
     * @private
     * @return {?}
     */
    _generateMinutes() {
        /** @type {?} */
        const minuteItemsCount = 60 / this.itemsDelta.minutes;
        if (minuteItemsCount < 7 || !this.isSpinLoop) {
            this._addEmptyItems(this._minuteItems);
            this._isMinuteListLoop = false;
        }
        for (let i = 0; i < minuteItemsCount; i++) {
            this._minuteItems.push(i * this.itemsDelta.minutes);
        }
        if (minuteItemsCount < 7 || !this.isSpinLoop) {
            this._addEmptyItems(this._minuteItems);
        }
    }
    /**
     * @private
     * @return {?}
     */
    _generateAmPm() {
        this._addEmptyItems(this._ampmItems);
        this._ampmItems.push('AM');
        this._ampmItems.push('PM');
        this._addEmptyItems(this._ampmItems);
    }
    /**
     * @private
     * @return {?}
     */
    _getSelectedTime() {
        /** @type {?} */
        const date = this.value ? new Date(this.value) : new Date();
        if (this.selectedHour) {
            date.setHours(parseInt(this.selectedHour, 10));
        }
        if (this.selectedMinute) {
            date.setMinutes(parseInt(this.selectedMinute, 10));
        }
        date.setSeconds(0);
        if (((this.showHoursList && this.selectedHour !== '12') || (!this.showHoursList && this.selectedHour <= '11')) &&
            this.selectedAmPm === 'PM') {
            date.setHours(date.getHours() + 12);
        }
        if (!this.showHoursList && this.selectedAmPm === 'AM' && this.selectedHour > '11') {
            date.setHours(date.getHours() - 12);
        }
        if (this.selectedAmPm === 'AM' && this.selectedHour === '12') {
            date.setHours(0);
        }
        return date;
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    _convertMinMaxValue(value) {
        /** @type {?} */
        const date = this.value ? new Date(this.value) : this._dateFromModel ? new Date(this._dateFromModel) : new Date();
        /** @type {?} */
        const sections = value.split(/[\s:]+/);
        /** @type {?} */
        let hour;
        /** @type {?} */
        let minutes;
        /** @type {?} */
        let amPM;
        date.setSeconds(0);
        if (this.showHoursList) {
            hour = sections[0];
            date.setHours(parseInt(hour, 10));
        }
        if (this.showMinutesList) {
            minutes = this.showHoursList ? sections[1] : sections[0];
            date.setMinutes(parseInt(minutes, 10));
        }
        if (this.showAmPmList) {
            amPM = sections[sections.length - 1];
            if (((this.showHoursList && date.getHours().toString() !== '12') ||
                (!this.showHoursList && date.getHours().toString() <= '11')) && amPM === 'PM') {
                date.setHours(date.getHours() + 12);
            }
            if (!this.showHoursList && amPM === 'AM' && date.getHours().toString() > '11') {
                date.setHours(date.getHours() - 12);
            }
            if (this.showHoursList && date.getHours() === 12 && amPM === 'AM') {
                date.setHours(0);
            }
        }
        return date;
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    _isValueValid(value) {
        if (this.maxValue && value > this._convertMinMaxValue(this.maxValue)) {
            return false;
        }
        else if (this.minValue && value < this._convertMinMaxValue(this.minValue)) {
            return false;
        }
        else {
            return true;
        }
    }
    /**
     * @private
     * @param {?} val
     * @return {?}
     */
    _isEntryValid(val) {
        /** @type {?} */
        let validH = true;
        /** @type {?} */
        let validM = true;
        /** @type {?} */
        const sections = val.split(/[\s:]+/);
        /** @type {?} */
        const re = new RegExp(this.promptChar, 'g');
        if (this.showHoursList) {
            validH = this.validHourEntries.indexOf(parseInt(sections[0].replace(re, ''), 10)) !== -1;
        }
        if (this.showMinutesList) {
            /** @type {?} */
            const minutes = this.showHoursList ? sections[1] : sections[0];
            validM = this.validMinuteEntries.indexOf(parseInt(minutes.replace(re, ''), 10)) !== -1;
        }
        return validH && validM;
    }
    /**
     * @private
     * @return {?}
     */
    _getCursorPosition() {
        return this.input.nativeElement.selectionStart;
    }
    /**
     * @private
     * @param {?} start
     * @param {?=} end
     * @return {?}
     */
    _setCursorPosition(start, end = start) {
        this.input.nativeElement.setSelectionRange(start, end);
    }
    /**
     * @private
     * @return {?}
     */
    _updateEditableInput() {
        if (this.mode === InteractionMode.DropDown) {
            this.displayValue = this._formatTime(this._getSelectedTime(), this.format);
        }
    }
    /**
     * @private
     * @param {?} currentVal
     * @param {?} minVal
     * @param {?} maxVal
     * @param {?} hDelta
     * @param {?} sign
     * @return {?}
     */
    _spinHours(currentVal, minVal, maxVal, hDelta, sign) {
        /** @type {?} */
        const oldVal = new Date(currentVal);
        currentVal.setMinutes(sign * hDelta);
        if (currentVal.getDate() !== oldVal.getDate() && this.isSpinLoop) {
            currentVal.setDate(oldVal.getDate());
        }
        /** @type {?} */
        let minutes = currentVal.getMinutes();
        if (currentVal.getTime() > maxVal.getTime()) {
            if (this.isSpinLoop) {
                minutes = minutes < minVal.getMinutes() ? 60 + minutes : minutes;
                minVal.setMinutes(sign * minutes);
                return minVal;
            }
            else {
                return oldVal;
            }
        }
        else if (currentVal.getTime() < minVal.getTime()) {
            if (this.isSpinLoop) {
                minutes = minutes <= maxVal.getMinutes() ? minutes : minutes - 60;
                maxVal.setMinutes(minutes);
                return maxVal;
            }
            else {
                return oldVal;
            }
        }
        else {
            return currentVal;
        }
    }
    /**
     * @private
     * @param {?} currentVal
     * @param {?} mDelta
     * @param {?} sign
     * @return {?}
     */
    _spinMinutes(currentVal, mDelta, sign) {
        /** @type {?} */
        let minutes = currentVal.getMinutes() + (sign * mDelta);
        if (minutes < 0 || minutes >= 60) {
            minutes = this.isSpinLoop ? minutes - (sign * 60) : currentVal.getMinutes();
        }
        currentVal.setMinutes(minutes);
        return currentVal;
    }
    /**
     * @private
     * @return {?}
     */
    _initializeContainer() {
        if (this.value) {
            /** @type {?} */
            const formttedTime = this._formatTime(this.value, this.format);
            /** @type {?} */
            const sections = formttedTime.split(/[\s:]+/);
            if (this.showHoursList) {
                this.selectedHour = sections[0];
            }
            if (this.showMinutesList) {
                this.selectedMinute = this.showHoursList ? sections[1] : sections[0];
            }
            if (this.showAmPmList && this._ampmItems !== null) {
                this.selectedAmPm = sections[sections.length - 1];
            }
        }
        if (this.selectedHour === undefined) {
            this.selectedHour = !this.showHoursList && this.value ? this.value.getHours().toString() :
                this.showHoursList ? `${this._hourItems[3]}` : '0';
        }
        if (this.selectedMinute === undefined) {
            this.selectedMinute = !this.showMinutesList && this.value ? this.value.getMinutes().toString() : '0';
        }
        if (this.selectedAmPm === undefined && this._ampmItems !== null) {
            this.selectedAmPm = this._ampmItems[3];
        }
        this._prevSelectedHour = this.selectedHour;
        this._prevSelectedMinute = this.selectedMinute;
        this._prevSelectedAmPm = this.selectedAmPm;
        this._onTouchedCallback();
        this._updateHourView(0, ITEMS_COUNT);
        this._updateMinuteView(0, ITEMS_COUNT);
        this._updateAmPmView(0, ITEMS_COUNT);
        if (this.selectedHour) {
            this.scrollHourIntoView(this.selectedHour);
        }
        if (this.selectedMinute) {
            this.scrollMinuteIntoView(this.selectedMinute);
        }
        if (this.selectedAmPm) {
            this.scrollAmPmIntoView(this.selectedAmPm);
        }
        requestAnimationFrame(() => {
            if (this.hourList) {
                this.hourList.nativeElement.focus();
            }
            else if (this.minuteList) {
                this.minuteList.nativeElement.focus();
            }
        });
    }
    /**
     * @private
     * @return {?}
     */
    _onDropDownClosed() {
        /** @type {?} */
        const oldValue = this.value;
        /** @type {?} */
        const newVal = this._convertMinMaxValue(this.displayValue);
        if (this._isValueValid(newVal)) {
            if (!this.value || oldValue.getTime() !== newVal.getTime()) {
                this.value = newVal;
            }
        }
        else {
            this.displayValue = this.inputFormat.transform(this._formatTime(oldValue, this.format));
            /** @type {?} */
            const args = {
                timePicker: this,
                currentValue: newVal,
                setThroughUI: true
            };
            this.onValidationFailed.emit(args);
        }
    }
    /**
     * @hidden
     * @return {?}
     */
    getEditElement() {
        return this._input ? this._input.nativeElement : null;
    }
    /**
     * @hidden
     * @return {?}
     */
    getInputGroupElement() {
        return this.group ? this.group.element.nativeElement : null;
    }
    /**
     * @hidden
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        // use this flag to make sure that min/maxValue are checked (in _convertMinMaxValue() method)
        // against the real value when initializing the component and value is bound via ngModel
        this._dateFromModel = value;
        this.value = value;
        if (this.mode === InteractionMode.DropDown) {
            this.displayValue = this._formatTime(this.value, this.format);
        }
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
     * opens the dialog.
     * @param {?=} target HTMLElement - the target element to use for positioning the drop down container according to
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
     * @return {?}
     */
    openDialog(target) {
        if (!this.toggleRef.collapsed) {
            return this._onDropDownClosed();
        }
        /** @type {?} */
        const settings = this.overlaySettings;
        if (target && settings && settings.positionStrategy) {
            settings.positionStrategy.settings.target = target;
        }
        if (this.outlet) {
            settings.outlet = this.outlet;
        }
        this.toggleRef.open(settings);
        this._initializeContainer();
    }
    /**
     * Scrolls a hour item into view.
     * ```typescript
     * scrhintoView(picker) {
     * picker.scrollHourIntoView('2');
     * }
     * ```
     * ```html
     * <igx-time-picker #picker format="h:mm tt" (onOpen)="scrhintoView(picker)"></igx-time-picker>
     * ```
     * @param {?} item to be scrolled in view.
     * @return {?}
     */
    scrollHourIntoView(item) {
        if (this.showHoursList) {
            /** @type {?} */
            const hourIntoView = this._scrollItemIntoView(item, this._hourItems, this.selectedHour, this._isHourListLoop, 'hour');
            if (hourIntoView) {
                this._hourView = hourIntoView.view;
                this.selectedHour = hourIntoView.selectedItem;
                this._updateEditableInput();
            }
        }
    }
    /**
     * Scrolls a minute item into view.
     * ```typescript
     * scrMintoView(picker) {
     * picker.scrollMinuteIntoView('3');
     * }
     * ```
     * ```html
     * <igx-time-picker #picker format="h:mm tt" (onOpen)="scrMintoView(picker)"></igx-time-picker>
     * ```
     * @param {?} item to be scrolled in view.
     * @return {?}
     */
    scrollMinuteIntoView(item) {
        if (this.showMinutesList) {
            /** @type {?} */
            const minuteIntoView = this._scrollItemIntoView(item, this._minuteItems, this.selectedMinute, this._isMinuteListLoop, 'minute');
            if (minuteIntoView) {
                this._minuteView = minuteIntoView.view;
                this.selectedMinute = minuteIntoView.selectedItem;
                this._updateEditableInput();
            }
        }
    }
    /**
     * Scrolls an ampm item into view.
     * ```typescript
     * scrAmPmIntoView(picker) {
     * picker.scrollAmPmIntoView('PM');
     * }
     * ```
     * ```html
     * <igx-time-picker #picker format="h:mm tt" (onOpen)="scrAmPmIntoView(picker)"></igx-time-picker>
     * ```
     * @param {?} item to be scrolled in view.
     * @return {?}
     */
    scrollAmPmIntoView(item) {
        if (this.showAmPmList) {
            /** @type {?} */
            const ampmIntoView = this._scrollItemIntoView(item, this._ampmItems, this.selectedAmPm, false, null);
            if (ampmIntoView) {
                this._ampmView = ampmIntoView.view;
                this.selectedAmPm = ampmIntoView.selectedItem;
                this._updateEditableInput();
            }
        }
    }
    /**
     * @hidden
     * @return {?}
     */
    nextHour() {
        /** @type {?} */
        const nextHour = this._nextItem(this._hourItems, this.selectedHour, this._isHourListLoop, 'hour');
        this._hourView = nextHour.view;
        this.selectedHour = nextHour.selectedItem;
        this._updateEditableInput();
    }
    /**
     * @hidden
     * @return {?}
     */
    prevHour() {
        /** @type {?} */
        const prevHour = this._prevItem(this._hourItems, this.selectedHour, this._isHourListLoop, 'hour');
        this._hourView = prevHour.view;
        this.selectedHour = prevHour.selectedItem;
        this._updateEditableInput();
    }
    /**
     * @hidden
     * @return {?}
     */
    nextMinute() {
        /** @type {?} */
        const nextMinute = this._nextItem(this._minuteItems, this.selectedMinute, this._isMinuteListLoop, 'minute');
        this._minuteView = nextMinute.view;
        this.selectedMinute = nextMinute.selectedItem;
        this._updateEditableInput();
    }
    /**
     * @hidden
     * @return {?}
     */
    prevMinute() {
        /** @type {?} */
        const prevMinute = this._prevItem(this._minuteItems, this.selectedMinute, this._isMinuteListLoop, 'minute');
        this._minuteView = prevMinute.view;
        this.selectedMinute = prevMinute.selectedItem;
        this._updateEditableInput();
    }
    /**
     * @hidden
     * @return {?}
     */
    nextAmPm() {
        /** @type {?} */
        const selectedIndex = this._ampmItems.indexOf(this.selectedAmPm);
        if (selectedIndex + 1 < this._ampmItems.length - 3) {
            this._updateAmPmView(selectedIndex - 2, selectedIndex + 5);
            this.selectedAmPm = this._ampmItems[selectedIndex + 1];
            this._updateEditableInput();
        }
    }
    /**
     * @hidden
     * @return {?}
     */
    prevAmPm() {
        /** @type {?} */
        const selectedIndex = this._ampmItems.indexOf(this.selectedAmPm);
        if (selectedIndex > 3) {
            this._updateAmPmView(selectedIndex - 4, selectedIndex + 3);
            this.selectedAmPm = this._ampmItems[selectedIndex - 1];
            this._updateEditableInput();
        }
    }
    /**
     * If current value is valid selects it, closes the dialog and returns true, otherwise returns false.
     * ```html
     * <igx-dialog class="igx-time-picker__dialog-popup" [rightButtonLabel]="okButtonLabel" (onRightButtonSelect)="okButtonClick()">
     * //..
     * </igx-dialog>
     * ```
     * @return {?}
     */
    okButtonClick() {
        /** @type {?} */
        const time = this._getSelectedTime();
        if (this._isValueValid(time)) {
            this.close();
            this.value = time;
            return true;
        }
        else {
            /** @type {?} */
            const args = {
                timePicker: this,
                currentValue: time,
                setThroughUI: true
            };
            this.onValidationFailed.emit(args);
            return false;
        }
    }
    /**
     * Closes the dialog without selecting the current value.
     * ```html
     * <igx-dialog class="igx-time-picker__dialog-popup" [leftButtonLabel]="cancelButtonLabel" (onLeftButtonSelect)="cancelButtonClick()">
     * //...
     * </igx-dialog>
     * ```
     * @return {?}
     */
    cancelButtonClick() {
        if (this.mode === InteractionMode.DropDown) {
            this.displayValue = this._formatTime(this.value, this.format);
        }
        this.close();
        this.selectedHour = this._prevSelectedHour;
        this.selectedMinute = this._prevSelectedMinute;
        this.selectedAmPm = this._prevSelectedAmPm;
    }
    /**
     * Returns an array of the hours currently in view.
     * ```html
     * \@ViewChild("MyChild")
     * private picker: IgxTimePickerComponent;
     * ngAfterViewInit(){
     *    let hInView = this.picker.hoursInView;
     * }
     * ```
     * @return {?}
     */
    hoursInView() {
        return this._hourView.filter((hour) => hour !== '');
    }
    /**
     * Returns an array of the minutes currently in view.
     * ```html
     * \@ViewChild("MyChild")
     * private picker: IgxTimePickerComponent;
     * ngAfterViewInit(){
     *    let minInView = this.picker.minutesInView;
     * }
     * ```
     * @return {?}
     */
    minutesInView() {
        return this._minuteView.filter((minute) => minute !== '');
    }
    /**
     * Returns an array of the AM/PM currently in view.
     * ```html
     * \@ViewChild("MyChild")
     * private picker: IgxTimePickerComponent;
     * ngAfterViewInit(){
     *    let ApInView = this.picker.ampmInView;
     * }
     * ```
     * @return {?}
     */
    ampmInView() {
        return this._ampmView.filter((ampm) => ampm !== '');
    }
    /**
     * Closes the dropdown/dialog.
     * ```html
     * <igx-time-picker #timePicker></igx-time-picker>
     * ```
     * ```typescript
     * \@ViewChild('timePicker', { read: IgxTimePickerComponent }) picker: IgxTimePickerComponent;
     * picker.close();
     * ```
     * @return {?}
     */
    close() {
        this.toggleRef.close();
    }
    /**
     * @hidden
     * @param {?=} preserveAmPm
     * @return {?}
     */
    parseMask(preserveAmPm = true) {
        /** @type {?} */
        const maskWithAmPm = this.mask.replace(new RegExp('0', 'g'), this.promptChar).replace('LL', 'AM');
        /** @type {?} */
        const pureMask = this.mask.replace(new RegExp('0', 'g'), this.promptChar).replace(new RegExp('L', 'g'), this.promptChar);
        return preserveAmPm ? maskWithAmPm : pureMask;
    }
    /**
     * @hidden
     * @return {?}
     */
    clear() {
        if (this.toggleRef.collapsed) {
            this.cleared = true;
            this.isNotEmpty = false;
            /** @type {?} */
            const oldVal = new Date(this.value);
            this.displayValue = '';
            this.value.setHours(0, 0);
            if (oldVal.getTime() !== this.value.getTime()) {
                /** @type {?} */
                const args = {
                    oldValue: oldVal,
                    newValue: this.value
                };
                this.onValueChanged.emit(args);
            }
        }
        else {
            this.close();
        }
    }
    /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    onInput(event) {
        /** @type {?} */
        const val = event.target.value;
        /** @type {?} */
        const oldVal = new Date(this.value);
        this.isNotEmpty = val !== this.parseMask(false);
        // handle cases where all empty positions (promts) are filled and we want to update
        // timepicker own value property if it is a valid Date
        if (val.indexOf(this.promptChar) === -1) {
            if (this._isEntryValid(val)) {
                /** @type {?} */
                const newVal = this._convertMinMaxValue(val);
                if (oldVal.getTime() !== newVal.getTime()) {
                    this.value = newVal;
                }
            }
            else {
                /** @type {?} */
                const args = {
                    timePicker: this,
                    currentValue: val,
                    setThroughUI: false
                };
                this.onValidationFailed.emit(args);
            }
            // handle cases where the user deletes the display value (when pressing backspace or delete)
        }
        else if (!this.value || !val || val === this.parseMask(false)) {
            this.isNotEmpty = false;
            this.value.setHours(0, 0);
            this.displayValue = val;
            if (oldVal.getTime() !== this.value.getTime()) {
                /** @type {?} */
                const args = {
                    oldValue: oldVal,
                    newValue: this.value
                };
                this.onValueChanged.emit(args);
            }
        }
    }
    /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    onFocus(event) {
        this.isNotEmpty = event.target.value !== this.parseMask(false);
    }
    /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    onBlur(event) {
        /** @type {?} */
        const value = event.target.value;
        this.isNotEmpty = value !== '';
        this.displayValue = value;
        if (value && value !== this.parseMask()) {
            if (this._isEntryValid(value)) {
                /** @type {?} */
                const newVal = this._convertMinMaxValue(value);
                if (!this.value || this.value.getTime() !== newVal.getTime()) {
                    this.value = newVal;
                }
            }
            else {
                /** @type {?} */
                const args = {
                    timePicker: this,
                    currentValue: value,
                    setThroughUI: false
                };
                this.onValidationFailed.emit(args);
            }
        }
    }
    /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    spinOnEdit(event) {
        event.preventDefault();
        /** @type {?} */
        let sign;
        /** @type {?} */
        let displayVal;
        /** @type {?} */
        const currentVal = new Date(this.value);
        /** @type {?} */
        const min = this.minValue ? this._convertMinMaxValue(this.minValue) : this._convertMinMaxValue('00:00');
        /** @type {?} */
        const max = this.maxValue ? this._convertMinMaxValue(this.maxValue) : this._convertMinMaxValue('24:00');
        /** @type {?} */
        const cursor = this._getCursorPosition();
        if (event.key) {
            /** @type {?} */
            const key = event.key;
            sign = key === "ArrowDown" /* DOWN_ARROW */ || key === "Down" /* DOWN_ARROW_IE */ ? -1 : 1;
        }
        if (event.deltaY) {
            sign = event.deltaY < 0 ? 1 : -1;
        }
        if (!this.displayValue) {
            this.value = min;
            displayVal = this._formatTime(this.value, this.format);
        }
        else {
            /** @type {?} */
            const hDelta = this.itemsDelta.hours * 60 + (sign * this.value.getMinutes());
            /** @type {?} */
            const mDelta = this.itemsDelta.minutes;
            if (this.showHoursList && HOURS_POS.indexOf(cursor) !== -1) {
                this.value = this._spinHours(currentVal, min, max, hDelta, sign);
            }
            if (this.showMinutesList &&
                ((this.showHoursList && MINUTES_POS.indexOf(cursor) !== -1) || (!this.showHoursList && HOURS_POS.indexOf(cursor) !== -1))) {
                this.value = this._spinMinutes(currentVal, mDelta, sign);
            }
            if (this.showAmPmList) {
                if (((!this.showHoursList || !this.showMinutesList) && MINUTES_POS.indexOf(cursor) !== -1) ||
                    (this.showHoursList && this.showMinutesList && AMPM_POS.indexOf(cursor) !== -1)) {
                    /** @type {?} */
                    const sections = this.displayValue.split(/[\s:]+/);
                    sign = sections[sections.length - 1] === 'AM' ? 1 : -1;
                    currentVal.setHours(currentVal.getHours() + (sign * 12));
                    this.value = currentVal;
                }
            }
            displayVal = this._formatTime(this.value, this.format);
        }
        // minor hack for preventing cursor jumping in IE
        this._displayValue = this.inputFormat.transform(displayVal);
        this.input.nativeElement.value = this._displayValue;
        this._setCursorPosition(cursor);
        requestAnimationFrame(() => {
            this._setCursorPosition(cursor);
        });
    }
}
IgxTimePickerComponent.decorators = [
    { type: Component, args: [{
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: IgxTimePickerComponent,
                        multi: true
                    },
                    {
                        provide: HAMMER_GESTURE_CONFIG,
                        useClass: TimePickerHammerConfig
                    },
                    {
                        provide: IGX_TIME_PICKER_COMPONENT,
                        useExisting: IgxTimePickerComponent
                    }
                ],
                selector: 'igx-time-picker',
                template: "<ng-template #dropdownInputTemplate>\n    <igx-input-group #group>\n        <label igxLabel>Time</label>\n        <igx-prefix (click)=\"openDialog(group.element.nativeElement)\">\n            <igx-icon>access_time</igx-icon>\n        </igx-prefix>\n        <input #input type=\"text\" [igxMask]=\"mask\" igxInput [includeLiterals]=\"false\" [placeholder]=\"format\"\n            [displayValuePipe]=\"displayFormat\" [focusedValuePipe]=\"inputFormat\" [promptChar]=\"promptChar\"\n            [value]=\"displayValue\" (input)=\"onInput($event)\" (blur)=\"onBlur($event)\" (focus)=\"onFocus($event)\"\n            (wheel)=\"spinOnEdit($event)\" [disabled]=\"disabled\" />\n        <igx-suffix *ngIf=\"showClearButton\" igxRipple (click)=\"clear()\">\n            <igx-icon fontSet=\"material\">clear</igx-icon>\n        </igx-suffix>\n    </igx-input-group>\n</ng-template>\n<ng-template #defaultTimePickerTemplate>\n    <igx-input-group (click)=\"openDialog()\">\n        <igx-prefix>\n            <igx-icon>access_time</igx-icon>\n        </igx-prefix>\n        <label igxLabel>Time</label>\n        <input igxInput [value]=\"displayTime || ''\" [disabled]=\"disabled\" tabindex=\"0\" readonly />\n    </igx-input-group>\n</ng-template>\n<ng-container *ngTemplateOutlet=\"template; context: context\"></ng-container>\n\n<ng-template #defaultTimePickerActions>\n    <div *ngIf=\"cancelButtonLabel || okButtonLabel\" class=\"igx-time-picker__buttons\">\n        <button *ngIf=\"cancelButtonLabel\" igxButton=\"flat\" (click)=\"cancelButtonClick()\">\n            {{cancelButtonLabel}}\n        </button>\n        <button *ngIf=\"okButtonLabel\" igxButton=\"flat\" (click)=\"okButtonClick()\">\n            {{okButtonLabel}}\n        </button>\n    </div>\n</ng-template>\n<div igxToggle class=\"igx-time-picker\"\n    [ngClass]=\"{'igx-time-picker--dropdown': mode === 'dropdown', 'igx-time-picker--vertical': vertical && mode === 'dialog'}\">\n    <div *ngIf=\"mode === 'dialog'\" class=\"igx-time-picker__header\">\n        <h5 class=\"igx-time-picker__header-ampm\">{{ selectedAmPm }}</h5>\n        <h2 class=\"igx-time-picker__header-hour\">\n            <span>{{ selectedHour }}</span>:<span>{{ selectedMinute }}</span>\n        </h2>\n    </div>\n    <div class=\"igx-time-picker__main\">\n        <div class=\"igx-time-picker__body\">\n            <div *ngIf=\"showHoursList\" #hourList [igxItemList]=\"'hourList'\">\n                <span [igxHourItem]=\"hour\" *ngFor=\"let hour of hourView\">{{ hour }}</span>\n            </div>\n            <div *ngIf=\"showMinutesList\" #minuteList [igxItemList]=\"'minuteList'\">\n                <span [igxMinuteItem]=\"minute\" *ngFor=\"let minute of minuteView\">{{ minute }}</span>\n            </div>\n            <div *ngIf=\"showAmPmList\" #ampmList [igxItemList]=\"'ampmList'\">\n                <span [igxAmPmItem]=\"ampm\" *ngFor=\"let ampm of ampmView\">{{ ampm }}</span>\n            </div>\n        </div>\n        <ng-container *ngTemplateOutlet=\"timePickerActionsDirective ? timePickerActionsDirective.template : defaultTimePickerActions\"></ng-container>\n    </div>\n</div>",
                styles: [`:host {
            display: block;
        }`]
            }] }
];
IgxTimePickerComponent.propDecorators = {
    id: [{ type: HostBinding, args: ['attr.id',] }, { type: Input }],
    value: [{ type: Input }],
    disabled: [{ type: Input }],
    resourceStrings: [{ type: Input }],
    okButtonLabel: [{ type: Input }],
    cancelButtonLabel: [{ type: Input }],
    itemsDelta: [{ type: Input }],
    minValue: [{ type: Input }],
    maxValue: [{ type: Input }],
    isSpinLoop: [{ type: Input }],
    vertical: [{ type: Input }],
    format: [{ type: Input }],
    promptChar: [{ type: Input }],
    mode: [{ type: Input }],
    outlet: [{ type: Input }],
    overlaySettings: [{ type: Input }],
    onValueChanged: [{ type: Output }],
    onValidationFailed: [{ type: Output }],
    onOpen: [{ type: Output }],
    onOpened: [{ type: Output }],
    onClose: [{ type: Output }],
    onClosed: [{ type: Output }],
    onClosing: [{ type: Output }],
    hourList: [{ type: ViewChild, args: ['hourList', { static: false },] }],
    minuteList: [{ type: ViewChild, args: ['minuteList', { static: false },] }],
    ampmList: [{ type: ViewChild, args: ['ampmList', { static: false },] }],
    defaultTimePickerTemplate: [{ type: ViewChild, args: ['defaultTimePickerTemplate', { read: TemplateRef, static: true },] }],
    timePickerTemplateDirective: [{ type: ContentChild, args: [IgxTimePickerTemplateDirective, { read: IgxTimePickerTemplateDirective, static: true },] }],
    timePickerActionsDirective: [{ type: ContentChild, args: [IgxTimePickerActionsDirective, { read: IgxTimePickerActionsDirective, static: false },] }],
    _input: [{ type: ViewChild, args: [IgxInputDirective, { read: ElementRef, static: false },] }],
    toggleRef: [{ type: ViewChild, args: [IgxToggleDirective, { static: true },] }],
    input: [{ type: ViewChild, args: ['input', { read: ElementRef, static: false },] }],
    group: [{ type: ViewChild, args: ['group', { read: IgxInputGroupComponent, static: false },] }],
    dropdownInputTemplate: [{ type: ViewChild, args: ['dropdownInputTemplate', { read: TemplateRef, static: true },] }],
    onKeydownSpace: [{ type: HostListener, args: ['keydown.spacebar', ['$event'],] }, { type: HostListener, args: ['keydown.space', ['$event'],] }],
    onAltArrowDown: [{ type: HostListener, args: ['keydown.Alt.ArrowDown',] }]
};
tslib_1.__decorate([
    DeprecateProperty(`'onOpen' @Output property is deprecated. Use 'onOpened' instead.`),
    tslib_1.__metadata("design:type", EventEmitter),
    tslib_1.__metadata("design:paramtypes", [EventEmitter])
], IgxTimePickerComponent.prototype, "onOpen", null);
tslib_1.__decorate([
    DeprecateProperty(`'onClose' @Output property is deprecated. Use 'onClosed' instead.`),
    tslib_1.__metadata("design:type", EventEmitter),
    tslib_1.__metadata("design:paramtypes", [EventEmitter])
], IgxTimePickerComponent.prototype, "onClose", null);
if (false) {
    /**
     * An \@Input property that sets the value of the `id` attribute.
     * ```html
     * <igx-time-picker [id]="'igx-time-picker-5'" format="h:mm tt" ></igx-time-picker>
     * ```
     * @type {?}
     */
    IgxTimePickerComponent.prototype.id;
    /**
     * An \@Input property that allows you to disable the `igx-time-picker` component. By default `disabled` is set to false.
     * ```html
     * <igx-time-picker [disabled]="'true'" [vertical]="true" format="h:mm tt" ></igx-time-picker>
     * ```
     * @type {?}
     */
    IgxTimePickerComponent.prototype.disabled;
    /**
     * An \@Input property that gets/sets the delta by which hour and minute items would be changed <br>
     * when the user presses the Up/Down keys.
     * By default `itemsDelta` is set to `{hours: 1, minutes:1}`
     * ```html
     * <igx-time-picker [itemsDelta]="{hours:3, minutes:5}" id="time-picker"></igx-time-picker>
     * ```
     * @type {?}
     */
    IgxTimePickerComponent.prototype.itemsDelta;
    /**
     * An \@Input property that allows you to set the `minValue` to limit the user input.
     * ```html
     * public min: string = "09:00";
     *  //..
     * <igx-time-picker format="HH:mm" [vertical]="true" [minValue]="min"></igx-time-picker>
     * ```
     * @type {?}
     */
    IgxTimePickerComponent.prototype.minValue;
    /**
     * An \@Input property that allows you to set the `maxValue` to limit the user input.
     * ```html
     * public max: string = "18:00";
     *  //..
     * <igx-time-picker format="HH:mm" [vertical]="true" [maxValue]="max"></igx-time-picker>
     * ```
     * @type {?}
     */
    IgxTimePickerComponent.prototype.maxValue;
    /**
     * An \@Input property that determines the spin behavior. By default `isSpinLoop` is set to true.
     * The minutes and hour spinning will wrap around by default.
     * ```html
     * <igx-time-picker [isSpinLoop]="false" id="time-picker"></igx-time-picker>
     * ```
     * @type {?}
     */
    IgxTimePickerComponent.prototype.isSpinLoop;
    /**
     * An \@Input property that Gets/Sets the orientation of the `igxTimePicker`. By default `vertical` is set to false.
     * ```html
     * <igx-time-picker [vertical]="true" id="time-picker"></igx-time-picker>
     * ```
     * @type {?}
     */
    IgxTimePickerComponent.prototype.vertical;
    /**
     * Sets the character used to prompt the user for input.
     * Default value is "'-'".
     * ```html
     * <igx-time-picker [promptChar] = "'_'">
     * ```
     * \@memberof IgxTimePickerComponent
     * @type {?}
     */
    IgxTimePickerComponent.prototype.promptChar;
    /**
     * An \@Input property that allows you to switch the interaction mode between
     * a dialog picker or dropdown with editable masked input.
     * Deafult is dialog picker.
     * ```html
     * public mode = InteractionMode.DROPDOWN;
     *  //..
     * <igx-time-picker [mode]="mode"></igx-time-picker>
     * ```
     * \@memberof IgxTimePickerComponent
     * @type {?}
     */
    IgxTimePickerComponent.prototype.mode;
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
     * @type {?}
     */
    IgxTimePickerComponent.prototype.outlet;
    /**
     * Emitted when selection is made. The event contains the selected value. Returns {`oldValue`: `Date`, `newValue`: `Date`}.
     * ```typescript
     * \@ViewChild("toast")
     * private toast: IgxToastComponent;
     * public onValueChanged(timepicker){
     *    this.toast.show()
     * }
     * //...
     * ```
     * ```html
     * <igx-time-picker (onValueChanged)="onValueChanged($event)"></igx-time-picker>
     * <igx-toast #toast message="The value has been changed!"></igx-toast>
     * ```
     * @type {?}
     */
    IgxTimePickerComponent.prototype.onValueChanged;
    /**
     * Emitted when an invalid value is being set. Returns {`timePicker`: `any`, `currentValue`: `Date`, `setThroughUI`: `boolean`}
     * ```typescript
     * public min: string = "09:00";
     * public max: string = "18:00";
     * \@ViewChild("toast")
     * private toast: IgxToastComponent;
     * public onValidationFailed(timepicker){
     *    this.toast.show();
     * }
     * //...
     * ```
     * ```html
     * <igx-time-picker [minValue]="min" [maxValue]="max" (onValidationFailed)="onValidationFailed($event)"></igx-time-picker>
     * <igx-toast #toast message="Value must be between 09:00 and 18:00!"></igx-toast>
     * ```
     * @type {?}
     */
    IgxTimePickerComponent.prototype.onValidationFailed;
    /**
     * Emitted when a timePicker is opened.
     * @type {?}
     */
    IgxTimePickerComponent.prototype.onOpened;
    /**
     * Emitted when a timePicker is closed.
     * @type {?}
     */
    IgxTimePickerComponent.prototype.onClosed;
    /**
     * Emitted when a timePicker is being closed.
     * @type {?}
     */
    IgxTimePickerComponent.prototype.onClosing;
    /**
     * @hidden
     * @type {?}
     */
    IgxTimePickerComponent.prototype.hourList;
    /**
     * @hidden
     * @type {?}
     */
    IgxTimePickerComponent.prototype.minuteList;
    /**
     * @hidden
     * @type {?}
     */
    IgxTimePickerComponent.prototype.ampmList;
    /**
     * @type {?}
     * @protected
     */
    IgxTimePickerComponent.prototype.defaultTimePickerTemplate;
    /**
     * @hidden
     * @type {?}
     * @protected
     */
    IgxTimePickerComponent.prototype.timePickerTemplateDirective;
    /**
     * @hidden
     * @type {?}
     */
    IgxTimePickerComponent.prototype.timePickerActionsDirective;
    /**
     * @hidden
     * @type {?}
     * @private
     */
    IgxTimePickerComponent.prototype._input;
    /**
     * @hidden
     * @type {?}
     */
    IgxTimePickerComponent.prototype.toggleRef;
    /**
     * @hidden
     * @type {?}
     * @private
     */
    IgxTimePickerComponent.prototype.input;
    /**
     * @hidden
     * @type {?}
     * @private
     */
    IgxTimePickerComponent.prototype.group;
    /**
     * @hidden
     * @type {?}
     * @private
     */
    IgxTimePickerComponent.prototype.dropdownInputTemplate;
    /**
     * @type {?}
     * @private
     */
    IgxTimePickerComponent.prototype._overlaySettings;
    /**
     * @hidden
     * @type {?}
     */
    IgxTimePickerComponent.prototype._hourItems;
    /**
     * @hidden
     * @type {?}
     */
    IgxTimePickerComponent.prototype._minuteItems;
    /**
     * @hidden
     * @type {?}
     */
    IgxTimePickerComponent.prototype._ampmItems;
    /**
     * @hidden
     * @type {?}
     */
    IgxTimePickerComponent.prototype.cleared;
    /**
     * @hidden
     * @type {?}
     */
    IgxTimePickerComponent.prototype.isNotEmpty;
    /**
     * @hidden
     * @type {?}
     */
    IgxTimePickerComponent.prototype.displayFormat;
    /**
     * @hidden
     * @type {?}
     */
    IgxTimePickerComponent.prototype.inputFormat;
    /**
     * @hidden
     * @type {?}
     */
    IgxTimePickerComponent.prototype.selectedHour;
    /**
     * @hidden
     * @type {?}
     */
    IgxTimePickerComponent.prototype.selectedMinute;
    /**
     * @hidden
     * @type {?}
     */
    IgxTimePickerComponent.prototype.selectedAmPm;
    /**
     * @type {?}
     * @private
     */
    IgxTimePickerComponent.prototype._value;
    /**
     * @type {?}
     * @private
     */
    IgxTimePickerComponent.prototype._resourceStrings;
    /**
     * @type {?}
     * @private
     */
    IgxTimePickerComponent.prototype._okButtonLabel;
    /**
     * @type {?}
     * @private
     */
    IgxTimePickerComponent.prototype._cancelButtonLabel;
    /**
     * @type {?}
     * @private
     */
    IgxTimePickerComponent.prototype._format;
    /**
     * @type {?}
     * @private
     */
    IgxTimePickerComponent.prototype._mask;
    /**
     * @type {?}
     * @private
     */
    IgxTimePickerComponent.prototype._displayValue;
    /**
     * @type {?}
     * @private
     */
    IgxTimePickerComponent.prototype._isHourListLoop;
    /**
     * @type {?}
     * @private
     */
    IgxTimePickerComponent.prototype._isMinuteListLoop;
    /**
     * @type {?}
     * @private
     */
    IgxTimePickerComponent.prototype._hourView;
    /**
     * @type {?}
     * @private
     */
    IgxTimePickerComponent.prototype._minuteView;
    /**
     * @type {?}
     * @private
     */
    IgxTimePickerComponent.prototype._ampmView;
    /**
     * @type {?}
     * @private
     */
    IgxTimePickerComponent.prototype._dateFromModel;
    /**
     * @type {?}
     * @private
     */
    IgxTimePickerComponent.prototype._destroy$;
    /**
     * @type {?}
     * @private
     */
    IgxTimePickerComponent.prototype._dropDownOverlaySettings;
    /**
     * @type {?}
     * @private
     */
    IgxTimePickerComponent.prototype._dialogOverlaySettings;
    /**
     * @type {?}
     * @private
     */
    IgxTimePickerComponent.prototype._prevSelectedHour;
    /**
     * @type {?}
     * @private
     */
    IgxTimePickerComponent.prototype._prevSelectedMinute;
    /**
     * @type {?}
     * @private
     */
    IgxTimePickerComponent.prototype._prevSelectedAmPm;
    /**
     * @type {?}
     * @private
     */
    IgxTimePickerComponent.prototype._onOpen;
    /**
     * @type {?}
     * @private
     */
    IgxTimePickerComponent.prototype._onClose;
    /**
     * @type {?}
     * @private
     */
    IgxTimePickerComponent.prototype._onTouchedCallback;
    /**
     * @type {?}
     * @private
     */
    IgxTimePickerComponent.prototype._onChangeCallback;
}
/**
 * @hidden
 */
export class IgxTimePickerModule {
}
IgxTimePickerModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    IgxTimePickerComponent,
                    IgxHourItemDirective,
                    IgxItemListDirective,
                    IgxMinuteItemDirective,
                    IgxAmPmItemDirective,
                    IgxTimePickerTemplateDirective,
                    IgxTimePickerActionsDirective,
                    TimeDisplayFormatPipe,
                    TimeInputFormatPipe
                ],
                exports: [
                    IgxTimePickerComponent,
                    IgxTimePickerTemplateDirective,
                    IgxTimePickerActionsDirective,
                    TimeDisplayFormatPipe,
                    TimeInputFormatPipe
                ],
                imports: [
                    CommonModule,
                    IgxInputGroupModule,
                    IgxIconModule,
                    IgxButtonModule,
                    IgxMaskModule,
                    IgxToggleModule
                ],
                providers: []
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZS1waWNrZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vaWduaXRldWktYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi90aW1lLXBpY2tlci90aW1lLXBpY2tlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0gsWUFBWSxFQUNmLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUNILFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLFdBQVcsRUFDWCxZQUFZLEVBQ1osS0FBSyxFQUNMLFFBQVEsRUFHUixNQUFNLEVBQ04sV0FBVyxFQUNYLFNBQVMsRUFDVCxZQUFZLEVBQ1osVUFBVSxFQUViLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUN2RixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ25HLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ3hFLE9BQU8sRUFDSCxvQkFBb0IsRUFDcEIsb0JBQW9CLEVBQ3BCLG9CQUFvQixFQUNwQixzQkFBc0IsRUFDdEIsOEJBQThCLEVBQzlCLDZCQUE2QixFQUNoQyxNQUFNLDBCQUEwQixDQUFDO0FBQ2xDLE9BQU8sRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSx1QkFBdUIsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUU3RSxPQUFPLEVBQXFCLHlCQUF5QixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDcEYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDcEUsT0FBTyxFQUFFLG9C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QjtvQkFDN0IscUJBQXFCO29CQUNyQixtQkFBbUI7aUJBQ3RCO2dCQUNELE9BQU8sRUFBRTtvQkFDTCxzQkFBc0I7b0JBQ3RCLDhCQUE4QjtvQkFDOUIsNkJBQTZCO29CQUM3QixxQkFBcUI7b0JBQ3JCLG1CQUFtQjtpQkFDdEI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNMLFlBQVk7b0JBQ1osbUJBQW1CO29CQUNuQixhQUFhO29CQUNiLGVBQWU7b0JBQ2YsYUFBYTtvQkFDYixlQUFlO2lCQUNsQjtnQkFDRCxTQUFTLEVBQUUsRUFBRTthQUNoQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICAgQ29tbW9uTW9kdWxlXG59IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge1xuICAgIENvbXBvbmVudCxcbiAgICBFbGVtZW50UmVmLFxuICAgIEV2ZW50RW1pdHRlcixcbiAgICBIb3N0QmluZGluZyxcbiAgICBIb3N0TGlzdGVuZXIsXG4gICAgSW5wdXQsXG4gICAgTmdNb2R1bGUsXG4gICAgT25EZXN0cm95LFxuICAgIE9uSW5pdCxcbiAgICBPdXRwdXQsXG4gICAgVGVtcGxhdGVSZWYsXG4gICAgVmlld0NoaWxkLFxuICAgIENvbnRlbnRDaGlsZCxcbiAgICBJbmplY3RhYmxlLFxuICAgIEFmdGVyVmlld0luaXRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBIQU1NRVJfR0VTVFVSRV9DT05GSUcsIEhhbW1lckdlc3R1cmVDb25maWcgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IElneEljb25Nb2R1bGUgfSBmcm9tICcuLi9pY29uL2luZGV4JztcbmltcG9ydCB7IElneElucHV0R3JvdXBNb2R1bGUsIElneElucHV0R3JvdXBDb21wb25lbnQgfSBmcm9tICcuLi9pbnB1dC1ncm91cC9pbnB1dC1ncm91cC5jb21wb25lbnQnO1xuaW1wb3J0IHsgSWd4SW5wdXREaXJlY3RpdmUgfSBmcm9tICcuLi9kaXJlY3RpdmVzL2lucHV0L2lucHV0LmRpcmVjdGl2ZSc7XG5pbXBvcnQge1xuICAgIElneEFtUG1JdGVtRGlyZWN0aXZlLFxuICAgIElneEhvdXJJdGVtRGlyZWN0aXZlLFxuICAgIElneEl0ZW1MaXN0RGlyZWN0aXZlLFxuICAgIElneE1pbnV0ZUl0ZW1EaXJlY3RpdmUsXG4gICAgSWd4VGltZVBpY2tlclRlbXBsYXRlRGlyZWN0aXZlLFxuICAgIElneFRpbWVQaWNrZXJBY3Rpb25zRGlyZWN0aXZlXG59IGZyb20gJy4vdGltZS1waWNrZXIuZGlyZWN0aXZlcyc7XG5pbXBvcnQgeyBTdWJqZWN0LCBmcm9tRXZlbnQsIGludGVydmFsLCBhbmltYXRpb25GcmFtZVNjaGVkdWxlciB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgRWRpdG9yUHJvdmlkZXIgfSBmcm9tICcuLi9jb3JlL2VkaXQtcHJvdmlkZXInO1xuaW1wb3J0IHsgSWd4VGltZVBpY2tlckJhc2UsIElHWF9USU1FX1BJQ0tFUl9DT01QT05FTlQgfSBmcm9tICcuL3RpbWUtcGlja2VyLmNvbW1vbic7XG5pbXBvcnQgeyBBYnNvbHV0ZVNjcm9sbFN0cmF0ZWd5IH0gZnJvbSAnLi4vc2VydmljZXMvb3ZlcmxheS9zY3JvbGwnO1xuaW1wb3J0IHsgQXV0b1Bvc2l0aW9uU3RyYXRlZ3kgfSBmcm9tICcuLi9zZXJ2aWNlcy9vdmVybGF5L3Bvc2l0aW9uJztcbmltcG9ydCB7IE92ZXJsYXlTZXR0aW5ncyB9IGZyb20gJy4uL3NlcnZpY2VzL292ZXJsYXkvdXRpbGl0aWVzJztcbmltcG9ydCB7IHRha2VVbnRpbCwgdGhyb3R0bGUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBJZ3hCdXR0b25Nb2R1bGUgfSBmcm9tICcuLi9kaXJlY3RpdmVzL2J1dHRvbi9idXR0b24uZGlyZWN0aXZlJztcbmltcG9ydCB7IElneE1hc2tNb2R1bGUgfSBmcm9tICcuLi9kaXJlY3RpdmVzL21hc2svbWFzay5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgSWd4T3ZlcmxheU91dGxldERpcmVjdGl2ZSwgSWd4VG9nZ2xlTW9kdWxlLCBJZ3hUb2dnbGVEaXJlY3RpdmUgfSBmcm9tICcuLi9kaXJlY3RpdmVzL3RvZ2dsZS90b2dnbGUuZGlyZWN0aXZlJztcbmltcG9ydCB7IFRpbWVEaXNwbGF5Rm9ybWF0UGlwZSwgVGltZUlucHV0Rm9ybWF0UGlwZSB9IGZyb20gJy4vdGltZS1waWNrZXIucGlwZXMnO1xuaW1wb3J0IHsgSVRpbWVQaWNrZXJSZXNvdXJjZVN0cmluZ3MsIFRpbWVQaWNrZXJSZXNvdXJjZVN0cmluZ3NFTiB9IGZyb20gJy4uL2NvcmUvaTE4bi90aW1lLXBpY2tlci1yZXNvdXJjZXMnO1xuaW1wb3J0IHsgQ3VycmVudFJlc291cmNlU3RyaW5ncyB9IGZyb20gJy4uL2NvcmUvaTE4bi9yZXNvdXJjZXMnO1xuaW1wb3J0IHsgS0VZUywgQ2FuY2VsYWJsZUJyb3dzZXJFdmVudEFyZ3MgfSBmcm9tICcuLi9jb3JlL3V0aWxzJztcbmltcG9ydCB7IEludGVyYWN0aW9uTW9kZSB9IGZyb20gJy4uL2NvcmUvZW51bXMnO1xuaW1wb3J0IHsgRGVwcmVjYXRlUHJvcGVydHkgfSBmcm9tICcuLi9jb3JlL2RlcHJlY2F0ZURlY29yYXRvcnMnO1xuXG5sZXQgTkVYVF9JRCA9IDA7XG5cbmNvbnN0IEhPVVJTX1BPUyA9IFswLCAxLCAyXTtcbmNvbnN0IE1JTlVURVNfUE9TID0gWzMsIDQsIDVdO1xuY29uc3QgQU1QTV9QT1MgPSBbNiwgNywgOF07XG5cbmNvbnN0IElURU1TX0NPVU5UID0gNztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFRpbWVQaWNrZXJIYW1tZXJDb25maWcgZXh0ZW5kcyBIYW1tZXJHZXN0dXJlQ29uZmlnIHtcbiAgICBwdWJsaWMgb3ZlcnJpZGVzID0ge1xuICAgICAgICBwYW46IHsgZGlyZWN0aW9uOiBIYW1tZXIuRElSRUNUSU9OX1ZFUlRJQ0FMLCB0aHJlc2hvbGQ6IDEgfVxuICAgIH07XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSWd4VGltZVBpY2tlclZhbHVlQ2hhbmdlZEV2ZW50QXJncyB7XG4gICAgb2xkVmFsdWU6IERhdGU7XG4gICAgbmV3VmFsdWU6IERhdGU7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSWd4VGltZVBpY2tlclZhbGlkYXRpb25GYWlsZWRFdmVudEFyZ3Mge1xuICAgIHRpbWVQaWNrZXI6IElneFRpbWVQaWNrZXJDb21wb25lbnQ7XG4gICAgY3VycmVudFZhbHVlOiBEYXRlO1xuICAgIHNldFRocm91Z2hVSTogYm9vbGVhbjtcbn1cblxuQENvbXBvbmVudCh7XG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgICAgICAgdXNlRXhpc3Rpbmc6IElneFRpbWVQaWNrZXJDb21wb25lbnQsXG4gICAgICAgICAgICBtdWx0aTogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBwcm92aWRlOiBIQU1NRVJfR0VTVFVSRV9DT05GSUcsXG4gICAgICAgICAgICB1c2VDbGFzczogVGltZVBpY2tlckhhbW1lckNvbmZpZ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBwcm92aWRlOiBJR1hfVElNRV9QSUNLRVJfQ09NUE9ORU5ULFxuICAgICAgICAgICAgdXNlRXhpc3Rpbmc6IElneFRpbWVQaWNrZXJDb21wb25lbnRcbiAgICAgICAgfVxuICAgIF0sXG4gICAgc2VsZWN0b3I6ICdpZ3gtdGltZS1waWNrZXInLFxuICAgIHRlbXBsYXRlVXJsOiAndGltZS1waWNrZXIuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlczogW1xuICAgICAgICBgOmhvc3Qge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIH1gXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBJZ3hUaW1lUGlja2VyQ29tcG9uZW50IGltcGxlbWVudHNcbiAgICBJZ3hUaW1lUGlja2VyQmFzZSxcbiAgICBDb250cm9sVmFsdWVBY2Nlc3NvcixcbiAgICBFZGl0b3JQcm92aWRlcixcbiAgICBPbkluaXQsXG4gICAgT25EZXN0cm95LFxuICAgIEFmdGVyVmlld0luaXQge1xuXG4gICAgLyoqXG4gICAgICogQW4gQElucHV0IHByb3BlcnR5IHRoYXQgc2V0cyB0aGUgdmFsdWUgb2YgdGhlIGBpZGAgYXR0cmlidXRlLlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8aWd4LXRpbWUtcGlja2VyIFtpZF09XCInaWd4LXRpbWUtcGlja2VyLTUnXCIgZm9ybWF0PVwiaDptbSB0dFwiID48L2lneC10aW1lLXBpY2tlcj5cbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBASG9zdEJpbmRpbmcoJ2F0dHIuaWQnKVxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGlkID0gYGlneC10aW1lLXBpY2tlci0ke05FWFRfSUQrK31gO1xuXG4gICAgLyoqXG4gICAgICogQW4gYWNjZXNzb3IgdGhhdCBhbGxvd3MgeW91IHRvIHNldCBhIHRpbWUgdXNpbmcgdGhlIGB2YWx1ZWAgaW5wdXQuXG4gICAgICogYGBgaHRtbFxuICAgICAqcHVibGljIGRhdGU6IERhdGUgPSBuZXcgRGF0ZShEYXRlLm5vdygpKTtcbiAgICAgKiAgLy8uLi5cbiAgICAgKjxpZ3gtdGltZS1waWNrZXIgW3ZhbHVlXT1cImRhdGVcIiBmb3JtYXQ9XCJoOm1tIHR0XCI+PC9pZ3gtdGltZS1waWNrZXI+XG4gICAgICogYGBgXG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBzZXQgdmFsdWUodmFsdWU6IERhdGUpIHtcbiAgICAgICAgaWYgKHRoaXMuX2lzVmFsdWVWYWxpZCh2YWx1ZSkpIHtcbiAgICAgICAgICAgIGNvbnN0IG9sZFZhbCA9IHRoaXMuX3ZhbHVlO1xuXG4gICAgICAgICAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICAgICAgICAgICAgdGhpcy5fb25DaGFuZ2VDYWxsYmFjayh2YWx1ZSk7XG5cbiAgICAgICAgICAgIGNvbnN0IGRpc3BWYWwgPSB0aGlzLl9mb3JtYXRUaW1lKHRoaXMudmFsdWUsIHRoaXMuZm9ybWF0KTtcbiAgICAgICAgICAgIGlmICh0aGlzLm1vZGUgPT09IEludGVyYWN0aW9uTW9kZS5Ecm9wRG93biAmJiB0aGlzLl9kaXNwbGF5VmFsdWUgIT09IGRpc3BWYWwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRpc3BsYXlWYWx1ZSA9IGRpc3BWYWw7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IGFyZ3M6IElneFRpbWVQaWNrZXJWYWx1ZUNoYW5nZWRFdmVudEFyZ3MgPSB7XG4gICAgICAgICAgICAgICAgb2xkVmFsdWU6IG9sZFZhbCxcbiAgICAgICAgICAgICAgICBuZXdWYWx1ZTogdmFsdWVcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB0aGlzLm9uVmFsdWVDaGFuZ2VkLmVtaXQoYXJncyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBhcmdzOiBJZ3hUaW1lUGlja2VyVmFsaWRhdGlvbkZhaWxlZEV2ZW50QXJncyA9IHtcbiAgICAgICAgICAgICAgICB0aW1lUGlja2VyOiB0aGlzLFxuICAgICAgICAgICAgICAgIGN1cnJlbnRWYWx1ZTogdmFsdWUsXG4gICAgICAgICAgICAgICAgc2V0VGhyb3VnaFVJOiBmYWxzZVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHRoaXMub25WYWxpZGF0aW9uRmFpbGVkLmVtaXQoYXJncyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBbiBhY2Nlc3NvciB0aGF0IHJldHVybnMgdGhlIHZhbHVlIG9mIGBpZ3gtdGltZS1waWNrZXJgIGNvbXBvbmVudC5cbiAgICAgKiBgYGBodG1sXG4gICAgICpAVmlld0NoaWxkKFwiTXlQaWNrXCIpXG4gICAgICpwdWJsaWMgcGljazogSWd4VGltZVBpY2tlckNvbXBvbmVudDtcbiAgICAgKm5nQWZ0ZXJWaWV3SW5pdCgpe1xuICAgICAqICAgIGxldCBwaWNrU2VsZWN0ID0gdGhpcy5waWNrLnZhbHVlO1xuICAgICAqIH1cbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBnZXQgdmFsdWUoKTogRGF0ZSB7XG4gICAgICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBbiBASW5wdXQgcHJvcGVydHkgdGhhdCBhbGxvd3MgeW91IHRvIGRpc2FibGUgdGhlIGBpZ3gtdGltZS1waWNrZXJgIGNvbXBvbmVudC4gQnkgZGVmYXVsdCBgZGlzYWJsZWRgIGlzIHNldCB0byBmYWxzZS5cbiAgICAgKiBgYGBodG1sXG4gICAgICogPGlneC10aW1lLXBpY2tlciBbZGlzYWJsZWRdPVwiJ3RydWUnXCIgW3ZlcnRpY2FsXT1cInRydWVcIiBmb3JtYXQ9XCJoOm1tIHR0XCIgPjwvaWd4LXRpbWUtcGlja2VyPlxuICAgICAqIGBgYFxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGRpc2FibGVkID0gZmFsc2U7XG5cbiAgICAvKipcbiAgICAgKiBBbiBhY2Nlc3NvciB0aGF0IHNldHMgdGhlIHJlc291cmNlIHN0cmluZ3MuXG4gICAgICogQnkgZGVmYXVsdCBpdCB1c2VzIEVOIHJlc291cmNlcy5cbiAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgc2V0IHJlc291cmNlU3RyaW5ncyh2YWx1ZTogSVRpbWVQaWNrZXJSZXNvdXJjZVN0cmluZ3MpIHtcbiAgICAgICAgdGhpcy5fcmVzb3VyY2VTdHJpbmdzID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5fcmVzb3VyY2VTdHJpbmdzLCB2YWx1ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQW4gYWNjZXNzb3IgdGhhdCByZXR1cm5zIHRoZSByZXNvdXJjZSBzdHJpbmdzLlxuICAgICovXG4gICAgZ2V0IHJlc291cmNlU3RyaW5ncygpOiBJVGltZVBpY2tlclJlc291cmNlU3RyaW5ncyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9yZXNvdXJjZVN0cmluZ3M7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQW4gQElucHV0IHByb3BlcnR5IHRoYXQgcmVuZGVycyBPSyBidXR0b24gd2l0aCBjdXN0b20gdGV4dC4gQnkgZGVmYXVsdCBgb2tCdXR0b25MYWJlbGAgaXMgc2V0IHRvIE9LLlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8aWd4LXRpbWUtcGlja2VyIG9rQnV0dG9uTGFiZWw9J1NFVCcgW3ZhbHVlXT1cImRhdGVcIiBmb3JtYXQ9XCJoOm1tIHR0XCI+PC9pZ3gtdGltZS1waWNrZXI+XG4gICAgICogYGBgXG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBzZXQgb2tCdXR0b25MYWJlbCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX29rQnV0dG9uTGFiZWwgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBbiBhY2Nlc3NvciB0aGF0IHJldHVybnMgdGhlIGxhYmVsIG9mIG9rIGJ1dHRvbi5cbiAgICAqL1xuICAgIGdldCBva0J1dHRvbkxhYmVsKCk6IHN0cmluZyB7XG4gICAgICAgIGlmICh0aGlzLl9va0J1dHRvbkxhYmVsID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yZXNvdXJjZVN0cmluZ3MuaWd4X3RpbWVfcGlja2VyX29rO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9va0J1dHRvbkxhYmVsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFuIEBJbnB1dCBwcm9wZXJ0eSB0aGF0IHJlbmRlcnMgY2FuY2VsIGJ1dHRvbiB3aXRoIGN1c3RvbSB0ZXh0LlxuICAgICAqIEJ5IGRlZmF1bHQgYGNhbmNlbEJ1dHRvbkxhYmVsYCBpcyBzZXQgdG8gQ2FuY2VsLlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8aWd4LXRpbWUtcGlja2VyIGNhbmNlbEJ1dHRvbkxhYmVsPSdFeGl0JyBbdmFsdWVdPVwiZGF0ZVwiIGZvcm1hdD1cImg6bW0gdHRcIj48L2lneC10aW1lLXBpY2tlcj5cbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHNldCBjYW5jZWxCdXR0b25MYWJlbCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX2NhbmNlbEJ1dHRvbkxhYmVsID0gdmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBBbiBhY2Nlc3NvciB0aGF0IHJldHVybnMgdGhlIGxhYmVsIG9mIGNhbmNlbCBidXR0b24uXG4gICAgKi9cbiAgICBnZXQgY2FuY2VsQnV0dG9uTGFiZWwoKTogc3RyaW5nIHtcbiAgICAgICAgaWYgKHRoaXMuX2NhbmNlbEJ1dHRvbkxhYmVsID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yZXNvdXJjZVN0cmluZ3MuaWd4X3RpbWVfcGlja2VyX2NhbmNlbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fY2FuY2VsQnV0dG9uTGFiZWw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQW4gQElucHV0IHByb3BlcnR5IHRoYXQgZ2V0cy9zZXRzIHRoZSBkZWx0YSBieSB3aGljaCBob3VyIGFuZCBtaW51dGUgaXRlbXMgd291bGQgYmUgY2hhbmdlZCA8YnI+XG4gICAgICogd2hlbiB0aGUgdXNlciBwcmVzc2VzIHRoZSBVcC9Eb3duIGtleXMuXG4gICAgICogQnkgZGVmYXVsdCBgaXRlbXNEZWx0YWAgaXMgc2V0IHRvIGB7aG91cnM6IDEsIG1pbnV0ZXM6MX1gXG4gICAgICogYGBgaHRtbFxuICAgICAqPGlneC10aW1lLXBpY2tlciBbaXRlbXNEZWx0YV09XCJ7aG91cnM6MywgbWludXRlczo1fVwiIGlkPVwidGltZS1waWNrZXJcIj48L2lneC10aW1lLXBpY2tlcj5cbiAgICAgKmBgYFxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGl0ZW1zRGVsdGEgPSB7IGhvdXJzOiAxLCBtaW51dGVzOiAxIH07XG5cbiAgICAvKipcbiAgICAgKiBBbiBASW5wdXQgcHJvcGVydHkgdGhhdCBhbGxvd3MgeW91IHRvIHNldCB0aGUgYG1pblZhbHVlYCB0byBsaW1pdCB0aGUgdXNlciBpbnB1dC5cbiAgICAgKmBgYGh0bWxcbiAgICAgKnB1YmxpYyBtaW46IHN0cmluZyA9IFwiMDk6MDBcIjtcbiAgICAgKiAgLy8uLlxuICAgICAqPGlneC10aW1lLXBpY2tlciBmb3JtYXQ9XCJISDptbVwiIFt2ZXJ0aWNhbF09XCJ0cnVlXCIgW21pblZhbHVlXT1cIm1pblwiPjwvaWd4LXRpbWUtcGlja2VyPlxuICAgICAqYGBgXG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgbWluVmFsdWU6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEFuIEBJbnB1dCBwcm9wZXJ0eSB0aGF0IGFsbG93cyB5b3UgdG8gc2V0IHRoZSBgbWF4VmFsdWVgIHRvIGxpbWl0IHRoZSB1c2VyIGlucHV0LlxuICAgICAqYGBgaHRtbFxuICAgICAqcHVibGljIG1heDogc3RyaW5nID0gXCIxODowMFwiO1xuICAgICAqICAvLy4uXG4gICAgICo8aWd4LXRpbWUtcGlja2VyIGZvcm1hdD1cIkhIOm1tXCIgW3ZlcnRpY2FsXT1cInRydWVcIiBbbWF4VmFsdWVdPVwibWF4XCI+PC9pZ3gtdGltZS1waWNrZXI+XG4gICAgICpgYGBcbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBtYXhWYWx1ZTogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQW4gQElucHV0IHByb3BlcnR5IHRoYXQgZGV0ZXJtaW5lcyB0aGUgc3BpbiBiZWhhdmlvci4gQnkgZGVmYXVsdCBgaXNTcGluTG9vcGAgaXMgc2V0IHRvIHRydWUuXG4gICAgICpUaGUgbWludXRlcyBhbmQgaG91ciBzcGlubmluZyB3aWxsIHdyYXAgYXJvdW5kIGJ5IGRlZmF1bHQuXG4gICAgICpgYGBodG1sXG4gICAgICo8aWd4LXRpbWUtcGlja2VyIFtpc1NwaW5Mb29wXT1cImZhbHNlXCIgaWQ9XCJ0aW1lLXBpY2tlclwiPjwvaWd4LXRpbWUtcGlja2VyPlxuICAgICAqYGBgXG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgaXNTcGluTG9vcCA9IHRydWU7XG5cbiAgICAvKipcbiAgICAgKiBBbiBASW5wdXQgcHJvcGVydHkgdGhhdCBHZXRzL1NldHMgdGhlIG9yaWVudGF0aW9uIG9mIHRoZSBgaWd4VGltZVBpY2tlcmAuIEJ5IGRlZmF1bHQgYHZlcnRpY2FsYCBpcyBzZXQgdG8gZmFsc2UuXG4gICAgICogYGBgaHRtbFxuICAgICAqPGlneC10aW1lLXBpY2tlciBbdmVydGljYWxdPVwidHJ1ZVwiIGlkPVwidGltZS1waWNrZXJcIj48L2lneC10aW1lLXBpY2tlcj5cbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyB2ZXJ0aWNhbCA9IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICogQW4gQElucHV0IHByb3BlcnR5IHRoYXQgR2V0cy9TZXRzIGZvcm1hdCBvZiB0aW1lIHdoaWxlIGBpZ3hUaW1lUGlja2VyYCBkb2VzIG5vdCBoYXZlIGZvY3VzLiA8YnI+XG4gICAgICogQnkgZGVmYXVsdCBgZm9ybWF0YCBpcyBzZXQgdG8gaGg6bW0gdHQuIDxicj5cbiAgICAgKiBMaXN0IG9mIHRpbWUtZmxhZ3M6IDxicj5cbiAgICAgKiBgaGAgOiBob3VycyBmaWVsZCBpbiAxMi1ob3VycyBmb3JtYXQgd2l0aG91dCBsZWFkaW5nIHplcm8gPGJyPlxuICAgICAqIGBoaGAgOiBob3VycyBmaWVsZCBpbiAxMi1ob3VycyBmb3JtYXQgd2l0aCBsZWFkaW5nIHplcm8gPGJyPlxuICAgICAqIGBIYCA6IGhvdXJzIGZpZWxkIGluIDI0LWhvdXJzIGZvcm1hdCB3aXRob3V0IGxlYWRpbmcgemVybyA8YnI+XG4gICAgICogYEhIYCA6IGhvdXJzIGZpZWxkIGluIDI0LWhvdXJzIGZvcm1hdCB3aXRoIGxlYWRpbmcgemVybyA8YnI+XG4gICAgICogYG1gIDogbWludXRlcyBmaWVsZCB3aXRob3V0IGxlYWRpbmcgemVybyA8YnI+XG4gICAgICogYG1tYCA6IG1pbnV0ZXMgZmllbGQgd2l0aCBsZWFkaW5nIHplcm8gPGJyPlxuICAgICAqIGB0dGAgOiAyIGNoYXJhY3RlciBzdHJpbmcgd2hpY2ggcmVwcmVzZW50cyBBTS9QTSBmaWVsZCA8YnI+XG4gICAgICogYGBgaHRtbFxuICAgICAqPGlneC10aW1lLXBpY2tlciBmb3JtYXQ9XCJISDptXCIgaWQ9XCJ0aW1lLXBpY2tlclwiPjwvaWd4LXRpbWUtcGlja2VyPlxuICAgICAqIGBgYFxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgZ2V0IGZvcm1hdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Zvcm1hdCB8fCAnaGg6bW0gdHQnO1xuICAgIH1cblxuICAgIHNldCBmb3JtYXQoZm9ybWF0VmFsdWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLl9mb3JtYXQgPSBmb3JtYXRWYWx1ZTtcbiAgICAgICAgdGhpcy5tYXNrID0gdGhpcy5fZm9ybWF0LmluZGV4T2YoJ3R0JykgIT09IC0xID8gJzAwOjAwIExMJyA6ICcwMDowMCc7XG5cbiAgICAgICAgaWYgKCF0aGlzLnNob3dIb3Vyc0xpc3QgfHwgIXRoaXMuc2hvd01pbnV0ZXNMaXN0KSB7XG4gICAgICAgICAgICB0aGlzLm1hc2sgPSB0aGlzLm1hc2suc2xpY2UodGhpcy5tYXNrLmluZGV4T2YoJzonKSArIDEsIHRoaXMubWFzay5sZW5ndGgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuZGlzcGxheVZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLmRpc3BsYXlWYWx1ZSA9IHRoaXMuX2Zvcm1hdFRpbWUodGhpcy52YWx1ZSwgdGhpcy5fZm9ybWF0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIGNoYXJhY3RlciB1c2VkIHRvIHByb21wdCB0aGUgdXNlciBmb3IgaW5wdXQuXG4gICAgICogRGVmYXVsdCB2YWx1ZSBpcyBcIictJ1wiLlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8aWd4LXRpbWUtcGlja2VyIFtwcm9tcHRDaGFyXSA9IFwiJ18nXCI+XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneFRpbWVQaWNrZXJDb21wb25lbnRcbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBwcm9tcHRDaGFyID0gJy0nO1xuXG4gICAgLyoqXG4gICAgICogQW4gQElucHV0IHByb3BlcnR5IHRoYXQgYWxsb3dzIHlvdSB0byBzd2l0Y2ggdGhlIGludGVyYWN0aW9uIG1vZGUgYmV0d2VlblxuICAgICAqIGEgZGlhbG9nIHBpY2tlciBvciBkcm9wZG93biB3aXRoIGVkaXRhYmxlIG1hc2tlZCBpbnB1dC5cbiAgICAgKiBEZWFmdWx0IGlzIGRpYWxvZyBwaWNrZXIuXG4gICAgICpgYGBodG1sXG4gICAgICpwdWJsaWMgbW9kZSA9IEludGVyYWN0aW9uTW9kZS5EUk9QRE9XTjtcbiAgICAgKiAgLy8uLlxuICAgICAqPGlneC10aW1lLXBpY2tlciBbbW9kZV09XCJtb2RlXCI+PC9pZ3gtdGltZS1waWNrZXI+XG4gICAgICpgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4VGltZVBpY2tlckNvbXBvbmVudFxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIG1vZGUgPSBJbnRlcmFjdGlvbk1vZGUuRGlhbG9nO1xuXG4gICAgLyoqXG4gICAgICogRGV0ZXJtaW5lcyB0aGUgY29udGFpbmVyIHRoZSBwb3B1cCBlbGVtZW50IHNob3VsZCBiZSBhdHRhY2hlZCB0by5cbiAgICAgKlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8ZGl2IGlneE92ZXJsYXlPdXRsZXQgI291dGxldD1cIm92ZXJsYXktb3V0bGV0XCI+PC9kaXY+XG4gICAgICogLy8uLlxuICAgICAqIDxpZ3gtdGltZS1waWNrZXIgW291dGxldF09XCJvdXRsZXRcIj48L2lneC10aW1lLXBpY2tlcj5cbiAgICAgKiAvLy4uXG4gICAgICogYGBgXG4gICAgICogV2hlcmUgYG91dGxldGAgaXMgYW4gaW5zdGFuY2Ugb2YgYElneE92ZXJsYXlPdXRsZXREaXJlY3RpdmVgIG9yIGFuIGBFbGVtZW50UmVmYC5cbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBvdXRsZXQ6IElneE92ZXJsYXlPdXRsZXREaXJlY3RpdmUgfCBFbGVtZW50UmVmO1xuXG4gICAgLyoqXG4gICAgKiBBbiBASW5wdXQgcHJvcGVydHkgdGhhdCBhbGxvd3MgeW91IHRvIG1vZGlmeSBvdmVybGF5IHBvc2l0aW9uaW5nLCBpbnRlcmFjdGlvbiBhbmQgc2Nyb2xsIGJlaGF2aW9yLlxuICAgICogYGBgdHlwZXNjcmlwdFxuICAgICogY29uc3Qgc2V0dGluZ3M6IE92ZXJsYXlTZXR0aW5ncyA9IHtcbiAgICAqICAgICAgY2xvc2VPbk91dHNpZGVDbGljazogdHJ1ZSxcbiAgICAqICAgICAgbW9kYWw6IGZhbHNlXG4gICAgKiAgfVxuICAgICogYGBgXG4gICAgKiAtLS1cbiAgICAqIGBgYGh0bWxcbiAgICAqIDxpZ3gtdGltZS1waWNrZXIgW292ZXJsYXlTZXR0aW5nc109XCJzZXR0aW5nc1wiPjwvaWd4LXRpbWUtcGlja2VyPlxuICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneFRpbWVQaWNrZXJDb21wb25lbnRcbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBzZXQgb3ZlcmxheVNldHRpbmdzKHZhbHVlOiBPdmVybGF5U2V0dGluZ3MpIHtcbiAgICAgICAgdGhpcy5fb3ZlcmxheVNldHRpbmdzID0gdmFsdWU7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBvdmVybGF5U2V0dGluZ3MoKTogT3ZlcmxheVNldHRpbmdzIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX292ZXJsYXlTZXR0aW5ncyA/IHRoaXMuX292ZXJsYXlTZXR0aW5ncyA6XG4gICAgICAgICAgICAodGhpcy5tb2RlID09PSBJbnRlcmFjdGlvbk1vZGUuRGlhbG9nID8gdGhpcy5fZGlhbG9nT3ZlcmxheVNldHRpbmdzIDogdGhpcy5fZHJvcERvd25PdmVybGF5U2V0dGluZ3MpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEVtaXR0ZWQgd2hlbiBzZWxlY3Rpb24gaXMgbWFkZS4gVGhlIGV2ZW50IGNvbnRhaW5zIHRoZSBzZWxlY3RlZCB2YWx1ZS4gUmV0dXJucyB7YG9sZFZhbHVlYDogYERhdGVgLCBgbmV3VmFsdWVgOiBgRGF0ZWB9LlxuICAgICAqYGBgdHlwZXNjcmlwdFxuICAgICAqIEBWaWV3Q2hpbGQoXCJ0b2FzdFwiKVxuICAgICAqcHJpdmF0ZSB0b2FzdDogSWd4VG9hc3RDb21wb25lbnQ7XG4gICAgICpwdWJsaWMgb25WYWx1ZUNoYW5nZWQodGltZXBpY2tlcil7XG4gICAgICogICAgdGhpcy50b2FzdC5zaG93KClcbiAgICAgKn1cbiAgICAgKiAvLy4uLlxuICAgICAqIGBgYFxuICAgICAqIGBgYGh0bWxcbiAgICAgKjxpZ3gtdGltZS1waWNrZXIgKG9uVmFsdWVDaGFuZ2VkKT1cIm9uVmFsdWVDaGFuZ2VkKCRldmVudClcIj48L2lneC10aW1lLXBpY2tlcj5cbiAgICAgKjxpZ3gtdG9hc3QgI3RvYXN0IG1lc3NhZ2U9XCJUaGUgdmFsdWUgaGFzIGJlZW4gY2hhbmdlZCFcIj48L2lneC10b2FzdD5cbiAgICAgKmBgYFxuICAgICAqL1xuICAgIEBPdXRwdXQoKVxuICAgIHB1YmxpYyBvblZhbHVlQ2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXI8SWd4VGltZVBpY2tlclZhbHVlQ2hhbmdlZEV2ZW50QXJncz4oKTtcblxuICAgIC8qKlxuICAgICAqIEVtaXR0ZWQgd2hlbiBhbiBpbnZhbGlkIHZhbHVlIGlzIGJlaW5nIHNldC4gUmV0dXJucyB7YHRpbWVQaWNrZXJgOiBgYW55YCwgYGN1cnJlbnRWYWx1ZWA6IGBEYXRlYCwgYHNldFRocm91Z2hVSWA6IGBib29sZWFuYH1cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICpwdWJsaWMgbWluOiBzdHJpbmcgPSBcIjA5OjAwXCI7XG4gICAgICpwdWJsaWMgbWF4OiBzdHJpbmcgPSBcIjE4OjAwXCI7XG4gICAgICpAVmlld0NoaWxkKFwidG9hc3RcIilcbiAgICAgKnByaXZhdGUgdG9hc3Q6IElneFRvYXN0Q29tcG9uZW50O1xuICAgICAqcHVibGljIG9uVmFsaWRhdGlvbkZhaWxlZCh0aW1lcGlja2VyKXtcbiAgICAgKiAgICB0aGlzLnRvYXN0LnNob3coKTtcbiAgICAgKn1cbiAgICAgKiAvLy4uLlxuICAgICAqIGBgYFxuICAgICAqIGBgYGh0bWxcbiAgICAgKjxpZ3gtdGltZS1waWNrZXIgW21pblZhbHVlXT1cIm1pblwiIFttYXhWYWx1ZV09XCJtYXhcIiAob25WYWxpZGF0aW9uRmFpbGVkKT1cIm9uVmFsaWRhdGlvbkZhaWxlZCgkZXZlbnQpXCI+PC9pZ3gtdGltZS1waWNrZXI+XG4gICAgICo8aWd4LXRvYXN0ICN0b2FzdCBtZXNzYWdlPVwiVmFsdWUgbXVzdCBiZSBiZXR3ZWVuIDA5OjAwIGFuZCAxODowMCFcIj48L2lneC10b2FzdD5cbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBAT3V0cHV0KClcbiAgICBwdWJsaWMgb25WYWxpZGF0aW9uRmFpbGVkID0gbmV3IEV2ZW50RW1pdHRlcjxJZ3hUaW1lUGlja2VyVmFsaWRhdGlvbkZhaWxlZEV2ZW50QXJncz4oKTtcblxuICAgIC8qKlxuICAgICAqIEBkZXByZWNhdGVkIFVzZSAnb25PcGVuZWQnIGluc3RlYWQuXG4gICAgICogRW1pdHRlZCB3aGVuIGEgdGltZVBpY2tlciBpcyBiZWluZyBvcGVuZWQuXG4gICAgICogYGBgaHRtbFxuICAgICAqQFZpZXdDaGlsZChcInRvYXN0XCIpXG4gICAgICpwcml2YXRlIHRvYXN0OiBJZ3hUb2FzdENvbXBvbmVudDtcbiAgICAgKnB1YmxpYyBvbk9wZW4odGltZXBpY2tlcil7XG4gICAgICogICAgdGhpcy50b2FzdC5zaG93KCk7XG4gICAgICp9XG4gICAgICogLy8uLi5cbiAgICAgKiBgYGBcbiAgICAgKiBgYGBodG1sXG4gICAgICo8aWd4LXRpbWUtcGlja2VyIFttaW5WYWx1ZV09XCJtaW5cIiBbbWF4VmFsdWVdPVwibWF4XCIgKG9uT3Blbik9XCJvbk9wZW4oJGV2ZW50KVwiPjwvaWd4LXRpbWUtcGlja2VyPlxuICAgICAqPGlneC10b2FzdCAjdG9hc3QgbWVzc2FnZT1cIlRoZSB0aW1lIHBpY2tlciBoYXMgYmVlbiBvcGVuZWQhXCI+PC9pZ3gtdG9hc3Q+XG4gICAgICogYGBgXG4gICAgICovXG4gICAgQERlcHJlY2F0ZVByb3BlcnR5KGAnb25PcGVuJyBAT3V0cHV0IHByb3BlcnR5IGlzIGRlcHJlY2F0ZWQuIFVzZSAnb25PcGVuZWQnIGluc3RlYWQuYClcbiAgICBAT3V0cHV0KClcbiAgICBwdWJsaWMgZ2V0IG9uT3BlbigpOiBFdmVudEVtaXR0ZXI8SWd4VGltZVBpY2tlckNvbXBvbmVudD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fb25PcGVuO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgb25PcGVuKHZhbDogRXZlbnRFbWl0dGVyPElneFRpbWVQaWNrZXJDb21wb25lbnQ+KSB7XG4gICAgICAgIHRoaXMuX29uT3BlbiA9IHZhbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBFbWl0dGVkIHdoZW4gYSB0aW1lUGlja2VyIGlzIG9wZW5lZC5cbiAgICAgKi9cbiAgICBAT3V0cHV0KClcbiAgICBwdWJsaWMgb25PcGVuZWQgPSBuZXcgRXZlbnRFbWl0dGVyPElneFRpbWVQaWNrZXJDb21wb25lbnQ+KCk7XG5cbiAgICAvKipcbiAgICAgKiBAZGVwcmVjYXRlZCBVc2UgJ29uQ2xvc2VkJyBpbnN0ZWFkLlxuICAgICAqIEVtaXR0ZWQgd2hlbiBhIHRpbWVQaWNrZXIgaXMgYmVpbmcgY2xvc2VkLlxuICAgICAqL1xuICAgIEBEZXByZWNhdGVQcm9wZXJ0eShgJ29uQ2xvc2UnIEBPdXRwdXQgcHJvcGVydHkgaXMgZGVwcmVjYXRlZC4gVXNlICdvbkNsb3NlZCcgaW5zdGVhZC5gKVxuICAgIEBPdXRwdXQoKVxuICAgIHB1YmxpYyBnZXQgb25DbG9zZSgpOiBFdmVudEVtaXR0ZXI8SWd4VGltZVBpY2tlckNvbXBvbmVudD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fb25DbG9zZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IG9uQ2xvc2UodmFsOiBFdmVudEVtaXR0ZXI8SWd4VGltZVBpY2tlckNvbXBvbmVudD4pIHtcbiAgICAgICAgdGhpcy5fb25DbG9zZSA9IHZhbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBFbWl0dGVkIHdoZW4gYSB0aW1lUGlja2VyIGlzIGNsb3NlZC5cbiAgICAgKi9cbiAgICBAT3V0cHV0KClcbiAgICBwdWJsaWMgb25DbG9zZWQgPSBuZXcgRXZlbnRFbWl0dGVyPElneFRpbWVQaWNrZXJDb21wb25lbnQ+KCk7XG5cbiAgICAvKipcbiAgICAgKiBFbWl0dGVkIHdoZW4gYSB0aW1lUGlja2VyIGlzIGJlaW5nIGNsb3NlZC5cbiAgICAgKi9cbiAgICBAT3V0cHV0KClcbiAgICBwdWJsaWMgb25DbG9zaW5nID0gbmV3IEV2ZW50RW1pdHRlcjxDYW5jZWxhYmxlQnJvd3NlckV2ZW50QXJncz4oKTtcblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBAVmlld0NoaWxkKCdob3VyTGlzdCcsIHsgc3RhdGljOiBmYWxzZSB9KVxuICAgIHB1YmxpYyBob3VyTGlzdDogRWxlbWVudFJlZjtcblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBAVmlld0NoaWxkKCdtaW51dGVMaXN0JywgeyBzdGF0aWM6IGZhbHNlIH0pXG4gICAgcHVibGljIG1pbnV0ZUxpc3Q6IEVsZW1lbnRSZWY7XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgQFZpZXdDaGlsZCgnYW1wbUxpc3QnLCB7IHN0YXRpYzogZmFsc2UgfSlcbiAgICBwdWJsaWMgYW1wbUxpc3Q6IEVsZW1lbnRSZWY7XG5cbiAgICAvKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBAVmlld0NoaWxkKCdkZWZhdWx0VGltZVBpY2tlclRlbXBsYXRlJywgeyByZWFkOiBUZW1wbGF0ZVJlZiwgc3RhdGljOiB0cnVlIH0pXG4gICAgcHJvdGVjdGVkIGRlZmF1bHRUaW1lUGlja2VyVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgICAvKipcbiAgICAgKkBoaWRkZW5cbiAgICAgKi9cbiAgICBAQ29udGVudENoaWxkKElneFRpbWVQaWNrZXJUZW1wbGF0ZURpcmVjdGl2ZSwgeyByZWFkOiBJZ3hUaW1lUGlja2VyVGVtcGxhdGVEaXJlY3RpdmUsIHN0YXRpYzogdHJ1ZSB9KVxuICAgIHByb3RlY3RlZCB0aW1lUGlja2VyVGVtcGxhdGVEaXJlY3RpdmU6IElneFRpbWVQaWNrZXJUZW1wbGF0ZURpcmVjdGl2ZTtcblxuICAgIC8qKlxuICAgICAqQGhpZGRlblxuICAgICAqL1xuICAgIEBDb250ZW50Q2hpbGQoSWd4VGltZVBpY2tlckFjdGlvbnNEaXJlY3RpdmUsIHsgcmVhZDogSWd4VGltZVBpY2tlckFjdGlvbnNEaXJlY3RpdmUsIHN0YXRpYzogZmFsc2UgfSlcbiAgICBwdWJsaWMgdGltZVBpY2tlckFjdGlvbnNEaXJlY3RpdmU6IElneFRpbWVQaWNrZXJBY3Rpb25zRGlyZWN0aXZlO1xuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIEBWaWV3Q2hpbGQoSWd4SW5wdXREaXJlY3RpdmUsIHsgcmVhZDogRWxlbWVudFJlZiwgc3RhdGljOiBmYWxzZSB9KVxuICAgIHByaXZhdGUgX2lucHV0OiBFbGVtZW50UmVmO1xuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIEBWaWV3Q2hpbGQoSWd4VG9nZ2xlRGlyZWN0aXZlLCB7IHN0YXRpYzogdHJ1ZSB9KVxuICAgIHB1YmxpYyB0b2dnbGVSZWY6IElneFRvZ2dsZURpcmVjdGl2ZTtcblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBAVmlld0NoaWxkKCdpbnB1dCcsIHsgcmVhZDogRWxlbWVudFJlZiwgc3RhdGljOiBmYWxzZSB9KVxuICAgIHByaXZhdGUgaW5wdXQ6IEVsZW1lbnRSZWY7XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgQFZpZXdDaGlsZCgnZ3JvdXAnLCB7IHJlYWQ6IElneElucHV0R3JvdXBDb21wb25lbnQsIHN0YXRpYzogZmFsc2UgfSlcbiAgICBwcml2YXRlIGdyb3VwOiBJZ3hJbnB1dEdyb3VwQ29tcG9uZW50O1xuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIEBWaWV3Q2hpbGQoJ2Ryb3Bkb3duSW5wdXRUZW1wbGF0ZScsIHsgcmVhZDogVGVtcGxhdGVSZWYsIHN0YXRpYzogdHJ1ZSB9KVxuICAgIHByaXZhdGUgZHJvcGRvd25JbnB1dFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gICAgcHJpdmF0ZSBfb3ZlcmxheVNldHRpbmdzOiBPdmVybGF5U2V0dGluZ3M7XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIF9ob3VySXRlbXMgPSBbXTtcbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIF9taW51dGVJdGVtcyA9IFtdO1xuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgX2FtcG1JdGVtcyA9IFtdO1xuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICovXG4gICAgcHVibGljIGNsZWFyZWQgPSBmYWxzZTtcbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgKi9cbiAgICBwdWJsaWMgaXNOb3RFbXB0eSA9IGZhbHNlO1xuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAqL1xuICAgIHB1YmxpYyBkaXNwbGF5Rm9ybWF0ID0gbmV3IFRpbWVEaXNwbGF5Rm9ybWF0UGlwZSh0aGlzKTtcbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgKi9cbiAgICBwdWJsaWMgaW5wdXRGb3JtYXQgPSBuZXcgVGltZUlucHV0Rm9ybWF0UGlwZSh0aGlzKTtcblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgc2VsZWN0ZWRIb3VyOiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyBzZWxlY3RlZE1pbnV0ZTogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgc2VsZWN0ZWRBbVBtOiBzdHJpbmc7XG5cbiAgICBwcml2YXRlIF92YWx1ZTogRGF0ZTtcbiAgICBwcml2YXRlIF9yZXNvdXJjZVN0cmluZ3MgPSBDdXJyZW50UmVzb3VyY2VTdHJpbmdzLlRpbWVQaWNrZXJSZXNTdHJpbmdzO1xuICAgIHByaXZhdGUgX29rQnV0dG9uTGFiZWwgPSBudWxsO1xuICAgIHByaXZhdGUgX2NhbmNlbEJ1dHRvbkxhYmVsID0gbnVsbDtcbiAgICBwcml2YXRlIF9mb3JtYXQ6IHN0cmluZztcbiAgICBwcml2YXRlIF9tYXNrOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBfZGlzcGxheVZhbHVlOiBzdHJpbmc7XG5cbiAgICBwcml2YXRlIF9pc0hvdXJMaXN0TG9vcCA9IHRoaXMuaXNTcGluTG9vcDtcbiAgICBwcml2YXRlIF9pc01pbnV0ZUxpc3RMb29wID0gdGhpcy5pc1NwaW5Mb29wO1xuXG4gICAgcHJpdmF0ZSBfaG91clZpZXcgPSBbXTtcbiAgICBwcml2YXRlIF9taW51dGVWaWV3ID0gW107XG4gICAgcHJpdmF0ZSBfYW1wbVZpZXcgPSBbXTtcblxuICAgIHByaXZhdGUgX2RhdGVGcm9tTW9kZWw6IERhdGU7XG4gICAgcHJpdmF0ZSBfZGVzdHJveSQgPSBuZXcgU3ViamVjdDxib29sZWFuPigpO1xuICAgIHByaXZhdGUgX2Ryb3BEb3duT3ZlcmxheVNldHRpbmdzOiBPdmVybGF5U2V0dGluZ3M7XG4gICAgcHJpdmF0ZSBfZGlhbG9nT3ZlcmxheVNldHRpbmdzOiBPdmVybGF5U2V0dGluZ3M7XG5cbiAgICBwcml2YXRlIF9wcmV2U2VsZWN0ZWRIb3VyOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBfcHJldlNlbGVjdGVkTWludXRlOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBfcHJldlNlbGVjdGVkQW1QbTogc3RyaW5nO1xuXG4gICAgcHJpdmF0ZSBfb25PcGVuID0gbmV3IEV2ZW50RW1pdHRlcjxJZ3hUaW1lUGlja2VyQ29tcG9uZW50PigpO1xuICAgIHByaXZhdGUgX29uQ2xvc2UgPSBuZXcgRXZlbnRFbWl0dGVyPElneFRpbWVQaWNrZXJDb21wb25lbnQ+KCk7XG5cbiAgICBwcml2YXRlIF9vblRvdWNoZWRDYWxsYmFjazogKCkgPT4gdm9pZCA9ICgpID0+IHsgfTtcbiAgICBwcml2YXRlIF9vbkNoYW5nZUNhbGxiYWNrOiAoXzogRGF0ZSkgPT4gdm9pZCA9ICgpID0+IHsgfTtcblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAqL1xuICAgIGdldCBtYXNrKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9tYXNrIHx8ICcwMDowMCBMTCc7XG4gICAgfVxuXG4gICAgc2V0IG1hc2sodmFsOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fbWFzayA9IHZhbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgZ2V0IGRpc3BsYXlWYWx1ZSgpOiBzdHJpbmcge1xuICAgICAgICBpZiAodGhpcy5fZGlzcGxheVZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9mb3JtYXRUaW1lKHRoaXMudmFsdWUsIHRoaXMuZm9ybWF0KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fZGlzcGxheVZhbHVlO1xuICAgIH1cblxuICAgIHNldCBkaXNwbGF5VmFsdWUodmFsdWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLl9kaXNwbGF5VmFsdWUgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBjdXJyZW50IHRpbWUgZm9ybWF0dGVkIGFzIHN0cmluZyB1c2luZyB0aGUgYGZvcm1hdGAgb3B0aW9uLlxuICAgICAqIElmIHRoZXJlIGlzIG5vIHNldCB0aW1lIHRoZSByZXR1cm4gaXMgYW4gZW1wdHkgc3RyaW5nLlxuICAgICAqYGBgdHlwZXNjcmlwdFxuICAgICAqQFZpZXdDaGlsZChcIk15Q2hpbGRcIilcbiAgICAgKnByaXZhdGUgcGlja2VyOiBJZ3hUaW1lUGlja2VyQ29tcG9uZW50O1xuICAgICAqbmdBZnRlclZpZXdJbml0KCl7XG4gICAgICogICAgbGV0IHRpbWUgPSB0aGlzLnBpY2tlci5kaXNwbGF5VGltZTtcbiAgICAgKn1cbiAgICAgKmBgYFxuICAgICAqL1xuICAgIHB1YmxpYyBnZXQgZGlzcGxheVRpbWUoKTogc3RyaW5nIHtcbiAgICAgICAgaWYgKHRoaXMudmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9mb3JtYXRUaW1lKHRoaXMudmFsdWUsIHRoaXMuZm9ybWF0KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIGdldCBob3VyVmlldygpOiBzdHJpbmdbXSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9ob3VyVmlldztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgZ2V0IG1pbnV0ZVZpZXcoKTogc3RyaW5nW10ge1xuICAgICAgICByZXR1cm4gdGhpcy5fbWludXRlVmlldztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgZ2V0IGFtcG1WaWV3KCk6IHN0cmluZ1tdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FtcG1WaWV3O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBnZXQgc2hvd0NsZWFyQnV0dG9uKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gKHRoaXMuZGlzcGxheVZhbHVlICYmIHRoaXMuZGlzcGxheVZhbHVlICE9PSB0aGlzLnBhcnNlTWFzayhmYWxzZSkpIHx8IHRoaXMuaXNOb3RFbXB0eTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgZ2V0IHNob3dIb3Vyc0xpc3QoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmZvcm1hdC5pbmRleE9mKCdoJykgIT09IC0gMSB8fCB0aGlzLmZvcm1hdC5pbmRleE9mKCdIJykgIT09IC0gMTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgZ2V0IHNob3dNaW51dGVzTGlzdCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZm9ybWF0LmluZGV4T2YoJ20nKSAhPT0gLSAxO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBnZXQgc2hvd0FtUG1MaXN0KCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5mb3JtYXQuaW5kZXhPZigndCcpICE9PSAtIDE7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIGdldCB2YWxpZE1pbnV0ZUVudHJpZXMoKTogYW55W10ge1xuICAgICAgICBjb25zdCBtaW51dGVFbnRyaWVzID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNjA7IGkrKykge1xuICAgICAgICAgICAgbWludXRlRW50cmllcy5wdXNoKGkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtaW51dGVFbnRyaWVzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBnZXQgdmFsaWRIb3VyRW50cmllcygpOiBhbnlbXSB7XG4gICAgICAgIGNvbnN0IGhvdXJFbnRyaWVzID0gW107XG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5mb3JtYXQuaW5kZXhPZignaCcpICE9PSAtMSA/IDEzIDogMjQ7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW5kZXg7IGkrKykge1xuICAgICAgICAgICAgaG91ckVudHJpZXMucHVzaChpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaG91ckVudHJpZXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgaW5wdXQgZ3JvdXAgdGVtcGxhdGUuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGxldCB0ZW1wbGF0ZSA9IHRoaXMudGVtcGxhdGUoKTtcbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4VGltZVBpY2tlckNvbXBvbmVudFxuICAgICAqL1xuICAgIGdldCB0ZW1wbGF0ZSgpOiBUZW1wbGF0ZVJlZjxhbnk+IHtcbiAgICAgICAgaWYgKHRoaXMudGltZVBpY2tlclRlbXBsYXRlRGlyZWN0aXZlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy50aW1lUGlja2VyVGVtcGxhdGVEaXJlY3RpdmUudGVtcGxhdGU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMubW9kZSA9PT0gSW50ZXJhY3Rpb25Nb2RlLkRpYWxvZyA/IHRoaXMuZGVmYXVsdFRpbWVQaWNrZXJUZW1wbGF0ZSA6IHRoaXMuZHJvcGRvd25JbnB1dFRlbXBsYXRlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIGNvbnRleHQgcGFzc2VkIHRvIHRoZSBpbnB1dCBncm91cCB0ZW1wbGF0ZS5cbiAgICAgKiBAbWVtYmVyb2YgSWd4VGltZVBpY2tlckNvbXBvbmVudFxuICAgICAqL1xuICAgIGdldCBjb250ZXh0KCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsdWU6IHRoaXMudmFsdWUsXG4gICAgICAgICAgICBkaXNwbGF5VGltZTogdGhpcy5kaXNwbGF5VGltZSxcbiAgICAgICAgICAgIGRpc3BsYXlWYWx1ZTogdGhpcy5kaXNwbGF5VmFsdWUsXG4gICAgICAgICAgICBvcGVuRGlhbG9nOiAodGFyZ2V0PzogSFRNTEVsZW1lbnQpID0+IHRoaXMub3BlbkRpYWxvZyh0YXJnZXQpXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fZ2VuZXJhdGVIb3VycygpO1xuICAgICAgICB0aGlzLl9nZW5lcmF0ZU1pbnV0ZXMoKTtcbiAgICAgICAgaWYgKHRoaXMuZm9ybWF0LmluZGV4T2YoJ3R0JykgIT09IC0xKSB7XG4gICAgICAgICAgICB0aGlzLl9nZW5lcmF0ZUFtUG0oKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2Ryb3BEb3duT3ZlcmxheVNldHRpbmdzID0ge1xuICAgICAgICAgICAgbW9kYWw6IGZhbHNlLFxuICAgICAgICAgICAgY2xvc2VPbk91dHNpZGVDbGljazogdHJ1ZSxcbiAgICAgICAgICAgIHNjcm9sbFN0cmF0ZWd5OiBuZXcgQWJzb2x1dGVTY3JvbGxTdHJhdGVneSgpLFxuICAgICAgICAgICAgcG9zaXRpb25TdHJhdGVneTogbmV3IEF1dG9Qb3NpdGlvblN0cmF0ZWd5KClcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5fZGlhbG9nT3ZlcmxheVNldHRpbmdzID0ge307XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm1vZGUgPT09IEludGVyYWN0aW9uTW9kZS5Ecm9wRG93biAmJiB0aGlzLmlucHV0KSB7XG4gICAgICAgICAgICBmcm9tRXZlbnQodGhpcy5pbnB1dC5uYXRpdmVFbGVtZW50LCAna2V5ZG93bicpLnBpcGUoXG4gICAgICAgICAgICAgICAgdGhyb3R0bGUoKCkgPT4gaW50ZXJ2YWwoMCwgYW5pbWF0aW9uRnJhbWVTY2hlZHVsZXIpKSxcbiAgICAgICAgICAgICAgICB0YWtlVW50aWwodGhpcy5fZGVzdHJveSQpXG4gICAgICAgICAgICApLnN1YnNjcmliZSgoZXZlbnQ6IEtleWJvYXJkRXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnQua2V5ID09PSBLRVlTLlVQX0FSUk9XIHx8IGV2ZW50LmtleSA9PT0gS0VZUy5VUF9BUlJPV19JRSB8fFxuICAgICAgICAgICAgICAgICAgICBldmVudC5rZXkgPT09IEtFWVMuRE9XTl9BUlJPVyB8fCBldmVudC5rZXkgPT09IEtFWVMuRE9XTl9BUlJPV19JRSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNwaW5PbkVkaXQoZXZlbnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMudG9nZ2xlUmVmICYmIHRoaXMuZ3JvdXApIHtcbiAgICAgICAgICAgIHRoaXMudG9nZ2xlUmVmLmVsZW1lbnQuc3R5bGUud2lkdGggPSB0aGlzLmdyb3VwLmVsZW1lbnQubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCArICdweCc7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy50b2dnbGVSZWYpIHtcbiAgICAgICAgICAgIHRoaXMudG9nZ2xlUmVmLm9uQ2xvc2VkLnBpcGUodGFrZVVudGlsKHRoaXMuX2Rlc3Ryb3kkKSkuc3Vic2NyaWJlKCgpID0+IHtcblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9pbnB1dCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9pbnB1dC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubW9kZSA9PT0gSW50ZXJhY3Rpb25Nb2RlLkRyb3BEb3duKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX29uRHJvcERvd25DbG9zZWQoKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLm9uQ2xvc2VkLmVtaXQodGhpcyk7XG5cbiAgICAgICAgICAgICAgICAvLyBUT0RPOiByZW1vdmUgdGhpcyBsaW5lIGFmdGVyIGRlcHJlY2F0aW5nICdvbkNsb3NlJ1xuICAgICAgICAgICAgICAgIHRoaXMuX29uQ2xvc2UuZW1pdCh0aGlzKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB0aGlzLnRvZ2dsZVJlZi5vbk9wZW5lZC5waXBlKHRha2VVbnRpbCh0aGlzLl9kZXN0cm95JCkpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5vbk9wZW5lZC5lbWl0KHRoaXMpO1xuXG4gICAgICAgICAgICAgICAgLy8gVE9ETzogcmVtb3ZlIHRoaXMgbGluZSBhZnRlciBkZXByZWNhdGluZyAnb25PcGVuJ1xuICAgICAgICAgICAgICAgIHRoaXMuX29uT3Blbi5lbWl0KHRoaXMpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHRoaXMudG9nZ2xlUmVmLm9uQ2xvc2luZy5waXBlKHRha2VVbnRpbCh0aGlzLl9kZXN0cm95JCkpLnN1YnNjcmliZSgoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm9uQ2xvc2luZy5lbWl0KGV2ZW50KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fZGVzdHJveSQubmV4dCh0cnVlKTtcbiAgICAgICAgdGhpcy5fZGVzdHJveSQuY29tcGxldGUoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgQEhvc3RMaXN0ZW5lcigna2V5ZG93bi5zcGFjZWJhcicsIFsnJGV2ZW50J10pXG4gICAgQEhvc3RMaXN0ZW5lcigna2V5ZG93bi5zcGFjZScsIFsnJGV2ZW50J10pXG4gICAgcHVibGljIG9uS2V5ZG93blNwYWNlKGV2ZW50KSB7XG4gICAgICAgIHRoaXMub3BlbkRpYWxvZyh0aGlzLmdldElucHV0R3JvdXBFbGVtZW50KCkpO1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBASG9zdExpc3RlbmVyKCdrZXlkb3duLkFsdC5BcnJvd0Rvd24nKVxuICAgIHB1YmxpYyBvbkFsdEFycm93RG93bigpIHtcbiAgICAgICAgdGhpcy5vcGVuRGlhbG9nKHRoaXMuZ2V0SW5wdXRHcm91cEVsZW1lbnQoKSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfc2Nyb2xsSXRlbUludG9WaWV3KGl0ZW06IHN0cmluZywgaXRlbXM6IGFueVtdLCBzZWxlY3RlZEl0ZW06IHN0cmluZywgaXNMaXN0TG9vcDogYm9vbGVhbiwgdmlld1R5cGU6IHN0cmluZyk6IGFueSB7XG4gICAgICAgIGxldCBpdGVtSW50b1ZpZXc7XG4gICAgICAgIGlmIChpdGVtcykge1xuICAgICAgICAgICAgY29uc3QgaW5kZXggPSAoaXRlbSA9PT0gJ0FNJyB8fCBpdGVtID09PSAnUE0nKSA/IGl0ZW1zLmluZGV4T2YoaXRlbSkgOiBpdGVtcy5pbmRleE9mKHBhcnNlSW50KGl0ZW0sIDEwKSk7XG4gICAgICAgICAgICBsZXQgdmlldztcblxuICAgICAgICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIGlmIChpc0xpc3RMb29wKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpbmRleCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkSXRlbSA9IHRoaXMuX2l0ZW1Ub1N0cmluZyhpdGVtc1tpbmRleCAtIDFdLCB2aWV3VHlwZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtSW50b1ZpZXcgPSB0aGlzLl9uZXh0SXRlbShpdGVtcywgc2VsZWN0ZWRJdGVtLCBpc0xpc3RMb29wLCB2aWV3VHlwZSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZEl0ZW0gPSB0aGlzLl9pdGVtVG9TdHJpbmcoaXRlbXNbMV0sIHZpZXdUeXBlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1JbnRvVmlldyA9IHRoaXMuX3ByZXZJdGVtKGl0ZW1zLCBzZWxlY3RlZEl0ZW0sIGlzTGlzdExvb3AsIHZpZXdUeXBlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHZpZXcgPSBpdGVtcy5zbGljZShpbmRleCAtIDMsIGluZGV4ICsgNCk7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkSXRlbSA9IHRoaXMuX2l0ZW1Ub1N0cmluZyhpdGVtc1tpbmRleF0sIHZpZXdUeXBlKTtcbiAgICAgICAgICAgICAgICAgICAgaXRlbUludG9WaWV3ID0geyBzZWxlY3RlZEl0ZW0sIHZpZXcgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaXRlbUludG9WaWV3LnZpZXcgPSB0aGlzLl92aWV3VG9TdHJpbmcoaXRlbUludG9WaWV3LnZpZXcsIHZpZXdUeXBlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaXRlbUludG9WaWV3O1xuICAgIH1cblxuICAgIHByaXZhdGUgX3ZpZXdUb1N0cmluZyh2aWV3OiBhbnksIHZpZXdUeXBlOiBzdHJpbmcpOiBhbnkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZpZXcubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgKHZpZXdbaV0pICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIHZpZXdbaV0gPSB0aGlzLl9pdGVtVG9TdHJpbmcodmlld1tpXSwgdmlld1R5cGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2aWV3O1xuICAgIH1cblxuICAgIHByaXZhdGUgX2l0ZW1Ub1N0cmluZyhpdGVtOiBhbnksIHZpZXdUeXBlOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICBpZiAoaXRlbSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgaXRlbSA9ICcnO1xuICAgICAgICB9IGVsc2UgaWYgKHZpZXdUeXBlICYmIHR5cGVvZiAoaXRlbSkgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBjb25zdCBsZWFkWmVyb0hvdXIgPSAoaXRlbSA8IDEwICYmICh0aGlzLmZvcm1hdC5pbmRleE9mKCdoaCcpICE9PSAtMSB8fCB0aGlzLmZvcm1hdC5pbmRleE9mKCdISCcpICE9PSAtMSkpO1xuICAgICAgICAgICAgY29uc3QgbGVhZFplcm9NaW51dGUgPSAoaXRlbSA8IDEwICYmIHRoaXMuZm9ybWF0LmluZGV4T2YoJ21tJykgIT09IC0xKTtcblxuICAgICAgICAgICAgY29uc3QgbGVhZFplcm8gPSAodmlld1R5cGUgPT09ICdob3VyJykgPyBsZWFkWmVyb0hvdXIgOiBsZWFkWmVyb01pbnV0ZTtcbiAgICAgICAgICAgIGl0ZW0gPSAobGVhZFplcm8pID8gJzAnICsgaXRlbSA6IGAke2l0ZW19YDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaXRlbTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9wcmV2SXRlbShpdGVtczogYW55W10sIHNlbGVjdGVkSXRlbTogc3RyaW5nLCBpc0xpc3RMb29wOiBib29sZWFuLCB2aWV3VHlwZTogc3RyaW5nKTogYW55IHtcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRJbmRleCA9IGl0ZW1zLmluZGV4T2YocGFyc2VJbnQoc2VsZWN0ZWRJdGVtLCAxMCkpO1xuICAgICAgICBjb25zdCBpdGVtc0NvdW50ID0gaXRlbXMubGVuZ3RoO1xuICAgICAgICBsZXQgdmlldztcblxuICAgICAgICBpZiAoc2VsZWN0ZWRJbmRleCA9PT0gLTEpIHtcbiAgICAgICAgICAgIHZpZXcgPSBpdGVtcy5zbGljZSgwLCA3KTtcbiAgICAgICAgICAgIHNlbGVjdGVkSXRlbSA9IGl0ZW1zWzNdO1xuICAgICAgICB9IGVsc2UgaWYgKGlzTGlzdExvb3ApIHtcbiAgICAgICAgICAgIGlmIChzZWxlY3RlZEluZGV4IC0gNCA8IDApIHtcbiAgICAgICAgICAgICAgICB2aWV3ID0gaXRlbXMuc2xpY2UoaXRlbXNDb3VudCAtICg0IC0gc2VsZWN0ZWRJbmRleCksIGl0ZW1zQ291bnQpO1xuICAgICAgICAgICAgICAgIHZpZXcgPSB2aWV3LmNvbmNhdChpdGVtcy5zbGljZSgwLCBzZWxlY3RlZEluZGV4ICsgMykpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChzZWxlY3RlZEluZGV4ICsgNCA+IGl0ZW1zQ291bnQpIHtcbiAgICAgICAgICAgICAgICB2aWV3ID0gaXRlbXMuc2xpY2Uoc2VsZWN0ZWRJbmRleCAtIDQsIGl0ZW1zQ291bnQpO1xuICAgICAgICAgICAgICAgIHZpZXcgPSB2aWV3LmNvbmNhdChpdGVtcy5zbGljZSgwLCBzZWxlY3RlZEluZGV4ICsgMyAtIGl0ZW1zQ291bnQpKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdmlldyA9IGl0ZW1zLnNsaWNlKHNlbGVjdGVkSW5kZXggLSA0LCBzZWxlY3RlZEluZGV4ICsgMyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNlbGVjdGVkSXRlbSA9IChzZWxlY3RlZEluZGV4ID09PSAwKSA/IGl0ZW1zW2l0ZW1zQ291bnQgLSAxXSA6IGl0ZW1zW3NlbGVjdGVkSW5kZXggLSAxXTtcbiAgICAgICAgfSBlbHNlIGlmIChzZWxlY3RlZEluZGV4ID4gMykge1xuICAgICAgICAgICAgdmlldyA9IGl0ZW1zLnNsaWNlKHNlbGVjdGVkSW5kZXggLSA0LCBzZWxlY3RlZEluZGV4ICsgMyk7XG4gICAgICAgICAgICBzZWxlY3RlZEl0ZW0gPSBpdGVtc1tzZWxlY3RlZEluZGV4IC0gMV07XG4gICAgICAgIH0gZWxzZSBpZiAoc2VsZWN0ZWRJbmRleCA9PT0gMykge1xuICAgICAgICAgICAgdmlldyA9IGl0ZW1zLnNsaWNlKDAsIDcpO1xuICAgICAgICB9XG4gICAgICAgIHZpZXcgPSB0aGlzLl92aWV3VG9TdHJpbmcodmlldywgdmlld1R5cGUpO1xuICAgICAgICBzZWxlY3RlZEl0ZW0gPSB0aGlzLl9pdGVtVG9TdHJpbmcoc2VsZWN0ZWRJdGVtLCB2aWV3VHlwZSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzZWxlY3RlZEl0ZW0sXG4gICAgICAgICAgICB2aWV3XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfbmV4dEl0ZW0oaXRlbXM6IGFueVtdLCBzZWxlY3RlZEl0ZW06IHN0cmluZywgaXNMaXN0TG9vcDogYm9vbGVhbiwgdmlld1R5cGU6IHN0cmluZyk6IGFueSB7XG4gICAgICAgIGNvbnN0IHNlbGVjdGVkSW5kZXggPSBpdGVtcy5pbmRleE9mKHBhcnNlSW50KHNlbGVjdGVkSXRlbSwgMTApKTtcbiAgICAgICAgY29uc3QgaXRlbXNDb3VudCA9IGl0ZW1zLmxlbmd0aDtcbiAgICAgICAgbGV0IHZpZXc7XG5cbiAgICAgICAgaWYgKHNlbGVjdGVkSW5kZXggPT09IC0xKSB7XG4gICAgICAgICAgICB2aWV3ID0gaXRlbXMuc2xpY2UoMCwgNyk7XG4gICAgICAgICAgICBzZWxlY3RlZEl0ZW0gPSBpdGVtc1szXTtcbiAgICAgICAgfSBlbHNlIGlmIChpc0xpc3RMb29wKSB7XG4gICAgICAgICAgICBpZiAoc2VsZWN0ZWRJbmRleCA8IDIpIHtcbiAgICAgICAgICAgICAgICB2aWV3ID0gaXRlbXMuc2xpY2UoaXRlbXNDb3VudCAtICgyIC0gc2VsZWN0ZWRJbmRleCksIGl0ZW1zQ291bnQpO1xuICAgICAgICAgICAgICAgIHZpZXcgPSB2aWV3LmNvbmNhdChpdGVtcy5zbGljZSgwLCBzZWxlY3RlZEluZGV4ICsgNSkpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChzZWxlY3RlZEluZGV4ICsgNCA+PSBpdGVtc0NvdW50KSB7XG4gICAgICAgICAgICAgICAgdmlldyA9IGl0ZW1zLnNsaWNlKHNlbGVjdGVkSW5kZXggLSAyLCBpdGVtc0NvdW50KTtcbiAgICAgICAgICAgICAgICB2aWV3ID0gdmlldy5jb25jYXQoaXRlbXMuc2xpY2UoMCwgc2VsZWN0ZWRJbmRleCArIDUgLSBpdGVtc0NvdW50KSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZpZXcgPSBpdGVtcy5zbGljZShzZWxlY3RlZEluZGV4IC0gMiwgc2VsZWN0ZWRJbmRleCArIDUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzZWxlY3RlZEl0ZW0gPSAoc2VsZWN0ZWRJbmRleCA9PT0gaXRlbXNDb3VudCAtIDEpID8gaXRlbXNbMF0gOiBpdGVtc1tzZWxlY3RlZEluZGV4ICsgMV07XG4gICAgICAgIH0gZWxzZSBpZiAoc2VsZWN0ZWRJbmRleCArIDEgPCBpdGVtc0NvdW50IC0gMykge1xuICAgICAgICAgICAgdmlldyA9IGl0ZW1zLnNsaWNlKHNlbGVjdGVkSW5kZXggLSAyLCBzZWxlY3RlZEluZGV4ICsgNSk7XG4gICAgICAgICAgICBzZWxlY3RlZEl0ZW0gPSBpdGVtc1tzZWxlY3RlZEluZGV4ICsgMV07XG4gICAgICAgIH0gZWxzZSBpZiAoc2VsZWN0ZWRJbmRleCA9PT0gaXRlbXNDb3VudCAtIDQpIHtcbiAgICAgICAgICAgIHZpZXcgPSBpdGVtcy5zbGljZShzZWxlY3RlZEluZGV4IC0gMywgaXRlbXNDb3VudCk7XG4gICAgICAgIH1cbiAgICAgICAgdmlldyA9IHRoaXMuX3ZpZXdUb1N0cmluZyh2aWV3LCB2aWV3VHlwZSk7XG4gICAgICAgIHNlbGVjdGVkSXRlbSA9IHRoaXMuX2l0ZW1Ub1N0cmluZyhzZWxlY3RlZEl0ZW0sIHZpZXdUeXBlKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHNlbGVjdGVkSXRlbSxcbiAgICAgICAgICAgIHZpZXdcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9mb3JtYXRUaW1lKHZhbHVlOiBEYXRlLCBmb3JtYXQ6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICAgIGlmICghdmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBob3VyID0gdmFsdWUuZ2V0SG91cnMoKTtcbiAgICAgICAgICAgIGxldCBmb3JtYXR0ZWRNaW51dGUsIGZvcm1hdHRlZEhvdXI7XG5cbiAgICAgICAgICAgIGNvbnN0IG1pbnV0ZSA9IHZhbHVlLmdldE1pbnV0ZXMoKTtcbiAgICAgICAgICAgIGNvbnN0IGFtUE0gPSAoaG91ciA+IDExKSA/ICdQTScgOiAnQU0nO1xuXG4gICAgICAgICAgICBpZiAoZm9ybWF0LmluZGV4T2YoJ2gnKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICBpZiAoaG91ciA+IDEyKSB7XG4gICAgICAgICAgICAgICAgICAgIGhvdXIgLT0gMTI7XG4gICAgICAgICAgICAgICAgICAgIGZvcm1hdHRlZEhvdXIgPSBob3VyIDwgMTAgJiYgZm9ybWF0LmluZGV4T2YoJ2hoJykgIT09IC0xID8gJzAnICsgaG91ciA6IGAke2hvdXJ9YDtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGhvdXIgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgZm9ybWF0dGVkSG91ciA9ICcxMic7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChob3VyIDwgMTAgJiYgZm9ybWF0LmluZGV4T2YoJ2hoJykgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvcm1hdHRlZEhvdXIgPSAnMCcgKyBob3VyO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGZvcm1hdHRlZEhvdXIgPSBgJHtob3VyfWA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoaG91ciA8IDEwICYmIGZvcm1hdC5pbmRleE9mKCdISCcpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICBmb3JtYXR0ZWRIb3VyID0gJzAnICsgaG91cjtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBmb3JtYXR0ZWRIb3VyID0gYCR7aG91cn1gO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm9ybWF0dGVkTWludXRlID0gbWludXRlIDwgMTAgJiYgZm9ybWF0LmluZGV4T2YoJ21tJykgIT09IC0xID8gJzAnICsgbWludXRlIDogYCR7bWludXRlfWA7XG5cbiAgICAgICAgICAgIHJldHVybiBmb3JtYXQucmVwbGFjZSgnaGgnLCBmb3JtYXR0ZWRIb3VyKS5yZXBsYWNlKCdoJywgZm9ybWF0dGVkSG91cilcbiAgICAgICAgICAgICAgICAucmVwbGFjZSgnSEgnLCBmb3JtYXR0ZWRIb3VyKS5yZXBsYWNlKCdIJywgZm9ybWF0dGVkSG91cilcbiAgICAgICAgICAgICAgICAucmVwbGFjZSgnbW0nLCBmb3JtYXR0ZWRNaW51dGUpLnJlcGxhY2UoJ20nLCBmb3JtYXR0ZWRNaW51dGUpXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoJ3R0JywgYW1QTSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIF91cGRhdGVIb3VyVmlldyhzdGFydDogYW55LCBlbmQ6IGFueSk6IHZvaWQge1xuICAgICAgICB0aGlzLl9ob3VyVmlldyA9IHRoaXMuX3ZpZXdUb1N0cmluZyh0aGlzLl9ob3VySXRlbXMuc2xpY2Uoc3RhcnQsIGVuZCksICdob3VyJyk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfdXBkYXRlTWludXRlVmlldyhzdGFydDogYW55LCBlbmQ6IGFueSk6IHZvaWQge1xuICAgICAgICB0aGlzLl9taW51dGVWaWV3ID0gdGhpcy5fdmlld1RvU3RyaW5nKHRoaXMuX21pbnV0ZUl0ZW1zLnNsaWNlKHN0YXJ0LCBlbmQpLCAnbWludXRlJyk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfdXBkYXRlQW1QbVZpZXcoc3RhcnQ6IGFueSwgZW5kOiBhbnkpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fYW1wbVZpZXcgPSB0aGlzLl9hbXBtSXRlbXMuc2xpY2Uoc3RhcnQsIGVuZCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfYWRkRW1wdHlJdGVtcyhpdGVtczogc3RyaW5nW10pOiB2b2lkIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcbiAgICAgICAgICAgIGl0ZW1zLnB1c2gobnVsbCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIF9nZW5lcmF0ZUhvdXJzKCk6IHZvaWQge1xuICAgICAgICBsZXQgaG91ckl0ZW1zQ291bnQgPSAyNDtcbiAgICAgICAgaWYgKHRoaXMuZm9ybWF0LmluZGV4T2YoJ2gnKSAhPT0gLTEpIHtcbiAgICAgICAgICAgIGhvdXJJdGVtc0NvdW50ID0gMTM7XG4gICAgICAgIH1cblxuICAgICAgICBob3VySXRlbXNDb3VudCAvPSB0aGlzLml0ZW1zRGVsdGEuaG91cnM7XG5cbiAgICAgICAgbGV0IGkgPSB0aGlzLmZvcm1hdC5pbmRleE9mKCdIJykgIT09IC0xID8gMCA6IDE7XG5cbiAgICAgICAgaWYgKGhvdXJJdGVtc0NvdW50IDwgNyB8fCAhdGhpcy5pc1NwaW5Mb29wKSB7XG4gICAgICAgICAgICB0aGlzLl9hZGRFbXB0eUl0ZW1zKHRoaXMuX2hvdXJJdGVtcyk7XG4gICAgICAgICAgICB0aGlzLl9pc0hvdXJMaXN0TG9vcCA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGhvdXJJdGVtc0NvdW50ID4gMSkge1xuICAgICAgICAgICAgZm9yIChpOyBpIDwgaG91ckl0ZW1zQ291bnQ7IGkrKykge1xuICAgICAgICAgICAgICAgIHRoaXMuX2hvdXJJdGVtcy5wdXNoKGkgKiB0aGlzLml0ZW1zRGVsdGEuaG91cnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5faG91ckl0ZW1zLnB1c2goMCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaG91ckl0ZW1zQ291bnQgPCA3IHx8ICF0aGlzLmlzU3Bpbkxvb3ApIHtcbiAgICAgICAgICAgIHRoaXMuX2FkZEVtcHR5SXRlbXModGhpcy5faG91ckl0ZW1zKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgX2dlbmVyYXRlTWludXRlcygpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgbWludXRlSXRlbXNDb3VudCA9IDYwIC8gdGhpcy5pdGVtc0RlbHRhLm1pbnV0ZXM7XG5cbiAgICAgICAgaWYgKG1pbnV0ZUl0ZW1zQ291bnQgPCA3IHx8ICF0aGlzLmlzU3Bpbkxvb3ApIHtcbiAgICAgICAgICAgIHRoaXMuX2FkZEVtcHR5SXRlbXModGhpcy5fbWludXRlSXRlbXMpO1xuICAgICAgICAgICAgdGhpcy5faXNNaW51dGVMaXN0TG9vcCA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtaW51dGVJdGVtc0NvdW50OyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuX21pbnV0ZUl0ZW1zLnB1c2goaSAqIHRoaXMuaXRlbXNEZWx0YS5taW51dGVzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChtaW51dGVJdGVtc0NvdW50IDwgNyB8fCAhdGhpcy5pc1NwaW5Mb29wKSB7XG4gICAgICAgICAgICB0aGlzLl9hZGRFbXB0eUl0ZW1zKHRoaXMuX21pbnV0ZUl0ZW1zKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgX2dlbmVyYXRlQW1QbSgpOiB2b2lkIHtcblxuICAgICAgICB0aGlzLl9hZGRFbXB0eUl0ZW1zKHRoaXMuX2FtcG1JdGVtcyk7XG5cbiAgICAgICAgdGhpcy5fYW1wbUl0ZW1zLnB1c2goJ0FNJyk7XG4gICAgICAgIHRoaXMuX2FtcG1JdGVtcy5wdXNoKCdQTScpO1xuXG4gICAgICAgIHRoaXMuX2FkZEVtcHR5SXRlbXModGhpcy5fYW1wbUl0ZW1zKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9nZXRTZWxlY3RlZFRpbWUoKTogRGF0ZSB7XG4gICAgICAgIGNvbnN0IGRhdGUgPSB0aGlzLnZhbHVlID8gbmV3IERhdGUodGhpcy52YWx1ZSkgOiBuZXcgRGF0ZSgpO1xuICAgICAgICBpZiAodGhpcy5zZWxlY3RlZEhvdXIpIHtcbiAgICAgICAgICAgIGRhdGUuc2V0SG91cnMocGFyc2VJbnQodGhpcy5zZWxlY3RlZEhvdXIsIDEwKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRNaW51dGUpIHtcbiAgICAgICAgICAgIGRhdGUuc2V0TWludXRlcyhwYXJzZUludCh0aGlzLnNlbGVjdGVkTWludXRlLCAxMCkpO1xuICAgICAgICB9XG4gICAgICAgIGRhdGUuc2V0U2Vjb25kcygwKTtcbiAgICAgICAgaWYgKCgodGhpcy5zaG93SG91cnNMaXN0ICYmIHRoaXMuc2VsZWN0ZWRIb3VyICE9PSAnMTInKSB8fCAoIXRoaXMuc2hvd0hvdXJzTGlzdCAmJiB0aGlzLnNlbGVjdGVkSG91ciA8PSAnMTEnKSkgJiZcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkQW1QbSA9PT0gJ1BNJykge1xuICAgICAgICAgICAgZGF0ZS5zZXRIb3VycyhkYXRlLmdldEhvdXJzKCkgKyAxMik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLnNob3dIb3Vyc0xpc3QgJiYgdGhpcy5zZWxlY3RlZEFtUG0gPT09ICdBTScgJiYgdGhpcy5zZWxlY3RlZEhvdXIgPiAnMTEnKSB7XG4gICAgICAgICAgICBkYXRlLnNldEhvdXJzKGRhdGUuZ2V0SG91cnMoKSAtIDEyKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5zZWxlY3RlZEFtUG0gPT09ICdBTScgJiYgdGhpcy5zZWxlY3RlZEhvdXIgPT09ICcxMicpIHtcbiAgICAgICAgICAgIGRhdGUuc2V0SG91cnMoMCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRhdGU7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfY29udmVydE1pbk1heFZhbHVlKHZhbHVlOiBzdHJpbmcpOiBEYXRlIHtcbiAgICAgICAgY29uc3QgZGF0ZSA9IHRoaXMudmFsdWUgPyBuZXcgRGF0ZSh0aGlzLnZhbHVlKSA6IHRoaXMuX2RhdGVGcm9tTW9kZWwgPyBuZXcgRGF0ZSh0aGlzLl9kYXRlRnJvbU1vZGVsKSA6IG5ldyBEYXRlKCk7XG4gICAgICAgIGNvbnN0IHNlY3Rpb25zID0gdmFsdWUuc3BsaXQoL1tcXHM6XSsvKTtcbiAgICAgICAgbGV0IGhvdXIsIG1pbnV0ZXMsIGFtUE07XG5cbiAgICAgICAgZGF0ZS5zZXRTZWNvbmRzKDApO1xuXG4gICAgICAgIGlmICh0aGlzLnNob3dIb3Vyc0xpc3QpIHtcbiAgICAgICAgICAgIGhvdXIgPSBzZWN0aW9uc1swXTtcbiAgICAgICAgICAgIGRhdGUuc2V0SG91cnMocGFyc2VJbnQoaG91ciwgMTApKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnNob3dNaW51dGVzTGlzdCkge1xuICAgICAgICAgICAgbWludXRlcyA9IHRoaXMuc2hvd0hvdXJzTGlzdCA/IHNlY3Rpb25zWzFdIDogc2VjdGlvbnNbMF07XG4gICAgICAgICAgICBkYXRlLnNldE1pbnV0ZXMocGFyc2VJbnQobWludXRlcywgMTApKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnNob3dBbVBtTGlzdCkge1xuICAgICAgICAgICAgYW1QTSA9IHNlY3Rpb25zW3NlY3Rpb25zLmxlbmd0aCAtIDFdO1xuXG4gICAgICAgICAgICBpZiAoKCh0aGlzLnNob3dIb3Vyc0xpc3QgJiYgZGF0ZS5nZXRIb3VycygpLnRvU3RyaW5nKCkgIT09ICcxMicpIHx8XG4gICAgICAgICAgICAgICAgICAgICghdGhpcy5zaG93SG91cnNMaXN0ICYmIGRhdGUuZ2V0SG91cnMoKS50b1N0cmluZygpIDw9ICcxMScpKSAmJiBhbVBNID09PSAnUE0nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRlLnNldEhvdXJzKGRhdGUuZ2V0SG91cnMoKSArIDEyKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCF0aGlzLnNob3dIb3Vyc0xpc3QgJiYgYW1QTSA9PT0gJ0FNJyAmJiBkYXRlLmdldEhvdXJzKCkudG9TdHJpbmcoKSA+ICcxMScpIHtcbiAgICAgICAgICAgICAgICBkYXRlLnNldEhvdXJzKGRhdGUuZ2V0SG91cnMoKSAtIDEyKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMuc2hvd0hvdXJzTGlzdCAmJiBkYXRlLmdldEhvdXJzKCkgPT09IDEyICYmIGFtUE0gPT09ICdBTScpIHtcbiAgICAgICAgICAgICAgICBkYXRlLnNldEhvdXJzKDApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGRhdGU7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfaXNWYWx1ZVZhbGlkKHZhbHVlOiBEYXRlKTogYm9vbGVhbiB7XG4gICAgICAgIGlmICh0aGlzLm1heFZhbHVlICYmIHZhbHVlID4gdGhpcy5fY29udmVydE1pbk1heFZhbHVlKHRoaXMubWF4VmFsdWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5taW5WYWx1ZSAmJiB2YWx1ZSA8IHRoaXMuX2NvbnZlcnRNaW5NYXhWYWx1ZSh0aGlzLm1pblZhbHVlKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIF9pc0VudHJ5VmFsaWQodmFsOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICAgICAgbGV0IHZhbGlkSCA9IHRydWU7XG4gICAgICAgIGxldCB2YWxpZE0gPSB0cnVlO1xuXG4gICAgICAgIGNvbnN0IHNlY3Rpb25zID0gdmFsLnNwbGl0KC9bXFxzOl0rLyk7XG4gICAgICAgIGNvbnN0IHJlID0gbmV3IFJlZ0V4cCh0aGlzLnByb21wdENoYXIsICdnJyk7XG5cbiAgICAgICAgaWYgKHRoaXMuc2hvd0hvdXJzTGlzdCkge1xuICAgICAgICAgICAgdmFsaWRIID0gdGhpcy52YWxpZEhvdXJFbnRyaWVzLmluZGV4T2YocGFyc2VJbnQoc2VjdGlvbnNbMF0ucmVwbGFjZShyZSwgJycpLCAxMCkpICE9PSAtMTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnNob3dNaW51dGVzTGlzdCkge1xuICAgICAgICAgICAgY29uc3QgbWludXRlcyA9IHRoaXMuc2hvd0hvdXJzTGlzdCA/IHNlY3Rpb25zWzFdIDogc2VjdGlvbnNbMF07XG4gICAgICAgICAgICB2YWxpZE0gPSB0aGlzLnZhbGlkTWludXRlRW50cmllcy5pbmRleE9mKHBhcnNlSW50KG1pbnV0ZXMucmVwbGFjZShyZSwgJycpLCAxMCkpICE9PSAtMTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB2YWxpZEggJiYgdmFsaWRNO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2dldEN1cnNvclBvc2l0aW9uKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLmlucHV0Lm5hdGl2ZUVsZW1lbnQuc2VsZWN0aW9uU3RhcnQ7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfc2V0Q3Vyc29yUG9zaXRpb24oc3RhcnQ6IG51bWJlciwgZW5kOiBudW1iZXIgPSBzdGFydCk6IHZvaWQge1xuICAgICAgICB0aGlzLmlucHV0Lm5hdGl2ZUVsZW1lbnQuc2V0U2VsZWN0aW9uUmFuZ2Uoc3RhcnQsIGVuZCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfdXBkYXRlRWRpdGFibGVJbnB1dCgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubW9kZSA9PT0gSW50ZXJhY3Rpb25Nb2RlLkRyb3BEb3duKSB7XG4gICAgICAgICAgICB0aGlzLmRpc3BsYXlWYWx1ZSA9IHRoaXMuX2Zvcm1hdFRpbWUodGhpcy5fZ2V0U2VsZWN0ZWRUaW1lKCksIHRoaXMuZm9ybWF0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgX3NwaW5Ib3VycyhjdXJyZW50VmFsOiBEYXRlLCBtaW5WYWw6IERhdGUsIG1heFZhbDogRGF0ZSwgaERlbHRhOiBudW1iZXIsIHNpZ246IG51bWJlcik6IERhdGUge1xuICAgICAgICBjb25zdCBvbGRWYWwgPSBuZXcgRGF0ZShjdXJyZW50VmFsKTtcblxuICAgICAgICBjdXJyZW50VmFsLnNldE1pbnV0ZXMoc2lnbiAqIGhEZWx0YSk7XG4gICAgICAgIGlmIChjdXJyZW50VmFsLmdldERhdGUoKSAhPT0gb2xkVmFsLmdldERhdGUoKSAmJiB0aGlzLmlzU3Bpbkxvb3ApIHtcbiAgICAgICAgICAgIGN1cnJlbnRWYWwuc2V0RGF0ZShvbGRWYWwuZ2V0RGF0ZSgpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBtaW51dGVzID0gY3VycmVudFZhbC5nZXRNaW51dGVzKCk7XG4gICAgICAgIGlmIChjdXJyZW50VmFsLmdldFRpbWUoKSA+IG1heFZhbC5nZXRUaW1lKCkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmlzU3Bpbkxvb3ApIHtcbiAgICAgICAgICAgICAgICBtaW51dGVzID0gbWludXRlcyA8IG1pblZhbC5nZXRNaW51dGVzKCkgPyA2MCArIG1pbnV0ZXMgOiBtaW51dGVzO1xuICAgICAgICAgICAgICAgIG1pblZhbC5zZXRNaW51dGVzKHNpZ24gKiBtaW51dGVzKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbWluVmFsO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gb2xkVmFsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGN1cnJlbnRWYWwuZ2V0VGltZSgpIDwgbWluVmFsLmdldFRpbWUoKSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNTcGluTG9vcCkge1xuICAgICAgICAgICAgICAgIG1pbnV0ZXMgPSBtaW51dGVzIDw9IG1heFZhbC5nZXRNaW51dGVzKCkgPyBtaW51dGVzIDogbWludXRlcyAtIDYwO1xuICAgICAgICAgICAgICAgIG1heFZhbC5zZXRNaW51dGVzKG1pbnV0ZXMpO1xuICAgICAgICAgICAgICAgIHJldHVybiBtYXhWYWw7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBvbGRWYWw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gY3VycmVudFZhbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgX3NwaW5NaW51dGVzKGN1cnJlbnRWYWw6IERhdGUsIG1EZWx0YTogbnVtYmVyLCBzaWduOiBudW1iZXIpIHtcbiAgICAgICAgbGV0IG1pbnV0ZXMgPSBjdXJyZW50VmFsLmdldE1pbnV0ZXMoKSArIChzaWduICogbURlbHRhKTtcblxuICAgICAgICBpZiAobWludXRlcyA8IDAgfHwgbWludXRlcyA+PSA2MCkge1xuICAgICAgICAgICAgbWludXRlcyA9IHRoaXMuaXNTcGluTG9vcCA/IG1pbnV0ZXMgLSAoc2lnbiAqIDYwKSA6IGN1cnJlbnRWYWwuZ2V0TWludXRlcygpO1xuICAgICAgICB9XG5cbiAgICAgICAgY3VycmVudFZhbC5zZXRNaW51dGVzKG1pbnV0ZXMpO1xuICAgICAgICByZXR1cm4gY3VycmVudFZhbDtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9pbml0aWFsaXplQ29udGFpbmVyKCkge1xuICAgICAgICBpZiAodGhpcy52YWx1ZSkge1xuICAgICAgICAgICAgY29uc3QgZm9ybXR0ZWRUaW1lID0gdGhpcy5fZm9ybWF0VGltZSh0aGlzLnZhbHVlLCB0aGlzLmZvcm1hdCk7XG4gICAgICAgICAgICBjb25zdCBzZWN0aW9ucyA9IGZvcm10dGVkVGltZS5zcGxpdCgvW1xcczpdKy8pO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5zaG93SG91cnNMaXN0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEhvdXIgPSBzZWN0aW9uc1swXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMuc2hvd01pbnV0ZXNMaXN0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZE1pbnV0ZSA9IHRoaXMuc2hvd0hvdXJzTGlzdCA/IHNlY3Rpb25zWzFdIDogc2VjdGlvbnNbMF07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnNob3dBbVBtTGlzdCAmJiB0aGlzLl9hbXBtSXRlbXMgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkQW1QbSA9IHNlY3Rpb25zW3NlY3Rpb25zLmxlbmd0aCAtIDFdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRIb3VyID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRIb3VyID0gIXRoaXMuc2hvd0hvdXJzTGlzdCAmJiB0aGlzLnZhbHVlID8gdGhpcy52YWx1ZS5nZXRIb3VycygpLnRvU3RyaW5nKCkgOlxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd0hvdXJzTGlzdCA/IGAke3RoaXMuX2hvdXJJdGVtc1szXX1gIDogJzAnO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGVkTWludXRlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRNaW51dGUgPSAhdGhpcy5zaG93TWludXRlc0xpc3QgJiYgdGhpcy52YWx1ZSA/IHRoaXMudmFsdWUuZ2V0TWludXRlcygpLnRvU3RyaW5nKCkgOiAnMCc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRBbVBtID09PSB1bmRlZmluZWQgJiYgdGhpcy5fYW1wbUl0ZW1zICE9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkQW1QbSA9IHRoaXMuX2FtcG1JdGVtc1szXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX3ByZXZTZWxlY3RlZEhvdXIgPSB0aGlzLnNlbGVjdGVkSG91cjtcbiAgICAgICAgdGhpcy5fcHJldlNlbGVjdGVkTWludXRlID0gdGhpcy5zZWxlY3RlZE1pbnV0ZTtcbiAgICAgICAgdGhpcy5fcHJldlNlbGVjdGVkQW1QbSA9IHRoaXMuc2VsZWN0ZWRBbVBtO1xuXG4gICAgICAgIHRoaXMuX29uVG91Y2hlZENhbGxiYWNrKCk7XG5cbiAgICAgICAgdGhpcy5fdXBkYXRlSG91clZpZXcoMCwgSVRFTVNfQ09VTlQpO1xuICAgICAgICB0aGlzLl91cGRhdGVNaW51dGVWaWV3KDAsIElURU1TX0NPVU5UKTtcbiAgICAgICAgdGhpcy5fdXBkYXRlQW1QbVZpZXcoMCwgSVRFTVNfQ09VTlQpO1xuXG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGVkSG91cikge1xuICAgICAgICAgICAgdGhpcy5zY3JvbGxIb3VySW50b1ZpZXcodGhpcy5zZWxlY3RlZEhvdXIpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGVkTWludXRlKSB7XG4gICAgICAgICAgICB0aGlzLnNjcm9sbE1pbnV0ZUludG9WaWV3KHRoaXMuc2VsZWN0ZWRNaW51dGUpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGVkQW1QbSkge1xuICAgICAgICAgICAgdGhpcy5zY3JvbGxBbVBtSW50b1ZpZXcodGhpcy5zZWxlY3RlZEFtUG0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLmhvdXJMaXN0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ob3VyTGlzdC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMubWludXRlTGlzdCkge1xuICAgICAgICAgICAgICAgIHRoaXMubWludXRlTGlzdC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgX29uRHJvcERvd25DbG9zZWQoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IG9sZFZhbHVlID0gdGhpcy52YWx1ZTtcbiAgICAgICAgY29uc3QgbmV3VmFsID0gdGhpcy5fY29udmVydE1pbk1heFZhbHVlKHRoaXMuZGlzcGxheVZhbHVlKTtcblxuICAgICAgICBpZiAodGhpcy5faXNWYWx1ZVZhbGlkKG5ld1ZhbCkpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy52YWx1ZSB8fCBvbGRWYWx1ZS5nZXRUaW1lKCkgIT09IG5ld1ZhbC5nZXRUaW1lKCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnZhbHVlID0gbmV3VmFsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5kaXNwbGF5VmFsdWUgPSB0aGlzLmlucHV0Rm9ybWF0LnRyYW5zZm9ybSh0aGlzLl9mb3JtYXRUaW1lKG9sZFZhbHVlLCB0aGlzLmZvcm1hdCkpO1xuXG4gICAgICAgICAgICBjb25zdCBhcmdzOiBJZ3hUaW1lUGlja2VyVmFsaWRhdGlvbkZhaWxlZEV2ZW50QXJncyA9IHtcbiAgICAgICAgICAgICAgICB0aW1lUGlja2VyOiB0aGlzLFxuICAgICAgICAgICAgICAgIGN1cnJlbnRWYWx1ZTogbmV3VmFsLFxuICAgICAgICAgICAgICAgIHNldFRocm91Z2hVSTogdHJ1ZVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHRoaXMub25WYWxpZGF0aW9uRmFpbGVkLmVtaXQoYXJncyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgZ2V0RWRpdEVsZW1lbnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnB1dCA/IHRoaXMuX2lucHV0Lm5hdGl2ZUVsZW1lbnQgOiBudWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0SW5wdXRHcm91cEVsZW1lbnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdyb3VwID8gdGhpcy5ncm91cC5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQgOiBudWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgd3JpdGVWYWx1ZSh2YWx1ZTogRGF0ZSkge1xuICAgICAgICAvLyB1c2UgdGhpcyBmbGFnIHRvIG1ha2Ugc3VyZSB0aGF0IG1pbi9tYXhWYWx1ZSBhcmUgY2hlY2tlZCAoaW4gX2NvbnZlcnRNaW5NYXhWYWx1ZSgpIG1ldGhvZClcbiAgICAgICAgLy8gYWdhaW5zdCB0aGUgcmVhbCB2YWx1ZSB3aGVuIGluaXRpYWxpemluZyB0aGUgY29tcG9uZW50IGFuZCB2YWx1ZSBpcyBib3VuZCB2aWEgbmdNb2RlbFxuICAgICAgICB0aGlzLl9kYXRlRnJvbU1vZGVsID0gdmFsdWU7XG5cbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuXG4gICAgICAgIGlmICh0aGlzLm1vZGUgPT09IEludGVyYWN0aW9uTW9kZS5Ecm9wRG93bikge1xuICAgICAgICAgICAgdGhpcy5kaXNwbGF5VmFsdWUgPSB0aGlzLl9mb3JtYXRUaW1lKHRoaXMudmFsdWUsIHRoaXMuZm9ybWF0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVnaXN0ZXJPbkNoYW5nZShmbjogKF86IERhdGUpID0+IHZvaWQpIHsgdGhpcy5fb25DaGFuZ2VDYWxsYmFjayA9IGZuOyB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB2b2lkKSB7IHRoaXMuX29uVG91Y2hlZENhbGxiYWNrID0gZm47IH1cblxuICAgIC8qKlxuICAgICAqIG9wZW5zIHRoZSBkaWFsb2cuXG4gICAgICogQHBhcmFtIHRhcmdldCBIVE1MRWxlbWVudCAtIHRoZSB0YXJnZXQgZWxlbWVudCB0byB1c2UgZm9yIHBvc2l0aW9uaW5nIHRoZSBkcm9wIGRvd24gY29udGFpbmVyIGFjY29yZGluZyB0b1xuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8aWd4LXRpbWUtcGlja2VyIFt2YWx1ZV09XCJkYXRlXCIgbW9kZT1cImRyb3Bkb3duXCIgI3JldGVtcGxhdGVkPlxuICAgICAqICAgPG5nLXRlbXBsYXRlIGlneFRpbWVQaWNrZXJUZW1wbGF0ZSBsZXQtb3BlbkRpYWxvZz1cIm9wZW5EaWFsb2dcIlxuICAgICAqICAgICAgICAgICAgICAgIGxldC1kaXNwbGF5VGltZT1cImRpc3BsYXlUaW1lXCI+XG4gICAgICogICAgIDxpZ3gtaW5wdXQtZ3JvdXA+XG4gICAgICogICAgICAgPGlucHV0ICNkcm9wRG93blRhcmdldCBpZ3hJbnB1dCBbdmFsdWVdPVwiZGlzcGxheVRpbWVcIiAvPlxuICAgICAqICAgICAgIDxpZ3gtc3VmZml4IChjbGljayk9XCJvcGVuRGlhbG9nKGRyb3BEb3duVGFyZ2V0KVwiPlxuICAgICAqICAgICAgICAgPGlneC1pY29uPmFsYXJtPC9pZ3gtaWNvbj5cbiAgICAgKiAgICAgICA8L2lneC1zdWZmaXg+XG4gICAgICogICAgIDwvaWd4LWlucHV0LWdyb3VwPlxuICAgICAqICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgKiA8L2lneC10aW1lLXBpY2tlcj5cbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBwdWJsaWMgb3BlbkRpYWxvZyh0YXJnZXQ/OiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgICAgICBpZiAoIXRoaXMudG9nZ2xlUmVmLmNvbGxhcHNlZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX29uRHJvcERvd25DbG9zZWQoKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzZXR0aW5ncyA9IHRoaXMub3ZlcmxheVNldHRpbmdzO1xuXG4gICAgICAgIGlmICh0YXJnZXQgJiYgc2V0dGluZ3MgJiYgc2V0dGluZ3MucG9zaXRpb25TdHJhdGVneSkge1xuICAgICAgICAgICAgc2V0dGluZ3MucG9zaXRpb25TdHJhdGVneS5zZXR0aW5ncy50YXJnZXQgPSB0YXJnZXQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMub3V0bGV0KSB7XG4gICAgICAgICAgICBzZXR0aW5ncy5vdXRsZXQgPSB0aGlzLm91dGxldDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudG9nZ2xlUmVmLm9wZW4oc2V0dGluZ3MpO1xuICAgICAgICB0aGlzLl9pbml0aWFsaXplQ29udGFpbmVyKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2Nyb2xscyBhIGhvdXIgaXRlbSBpbnRvIHZpZXcuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqc2NyaGludG9WaWV3KHBpY2tlcikge1xuICAgICAqcGlja2VyLnNjcm9sbEhvdXJJbnRvVmlldygnMicpO1xuICAgICAqfVxuICAgICAqIGBgYFxuICAgICAqYGBgaHRtbFxuICAgICAqPGlneC10aW1lLXBpY2tlciAjcGlja2VyIGZvcm1hdD1cImg6bW0gdHRcIiAob25PcGVuKT1cInNjcmhpbnRvVmlldyhwaWNrZXIpXCI+PC9pZ3gtdGltZS1waWNrZXI+XG4gICAgICpgYGBcbiAgICAgKkBwYXJhbSBpdGVtIHRvIGJlIHNjcm9sbGVkIGluIHZpZXcuXG4gICAgICovXG4gICAgcHVibGljIHNjcm9sbEhvdXJJbnRvVmlldyhpdGVtOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuc2hvd0hvdXJzTGlzdCkge1xuICAgICAgICAgICAgY29uc3QgaG91ckludG9WaWV3ID0gdGhpcy5fc2Nyb2xsSXRlbUludG9WaWV3KGl0ZW0sIHRoaXMuX2hvdXJJdGVtcywgdGhpcy5zZWxlY3RlZEhvdXIsIHRoaXMuX2lzSG91ckxpc3RMb29wLCAnaG91cicpO1xuICAgICAgICAgICAgaWYgKGhvdXJJbnRvVmlldykge1xuICAgICAgICAgICAgICAgIHRoaXMuX2hvdXJWaWV3ID0gaG91ckludG9WaWV3LnZpZXc7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEhvdXIgPSBob3VySW50b1ZpZXcuc2VsZWN0ZWRJdGVtO1xuICAgICAgICAgICAgICAgIHRoaXMuX3VwZGF0ZUVkaXRhYmxlSW5wdXQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNjcm9sbHMgYSBtaW51dGUgaXRlbSBpbnRvIHZpZXcuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqc2NyTWludG9WaWV3KHBpY2tlcikge1xuICAgICAqcGlja2VyLnNjcm9sbE1pbnV0ZUludG9WaWV3KCczJyk7XG4gICAgICp9XG4gICAgICogYGBgXG4gICAgICpgYGBodG1sXG4gICAgICo8aWd4LXRpbWUtcGlja2VyICNwaWNrZXIgZm9ybWF0PVwiaDptbSB0dFwiIChvbk9wZW4pPVwic2NyTWludG9WaWV3KHBpY2tlcilcIj48L2lneC10aW1lLXBpY2tlcj5cbiAgICAgKmBgYFxuICAgICAqIEBwYXJhbSBpdGVtIHRvIGJlIHNjcm9sbGVkIGluIHZpZXcuXG4gICAgICovXG4gICAgcHVibGljIHNjcm9sbE1pbnV0ZUludG9WaWV3KGl0ZW06IHN0cmluZyk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5zaG93TWludXRlc0xpc3QpIHtcbiAgICAgICAgICAgIGNvbnN0IG1pbnV0ZUludG9WaWV3ID0gdGhpcy5fc2Nyb2xsSXRlbUludG9WaWV3KGl0ZW0sIHRoaXMuX21pbnV0ZUl0ZW1zLCB0aGlzLnNlbGVjdGVkTWludXRlLCB0aGlzLl9pc01pbnV0ZUxpc3RMb29wLCAnbWludXRlJyk7XG4gICAgICAgICAgICBpZiAobWludXRlSW50b1ZpZXcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9taW51dGVWaWV3ID0gbWludXRlSW50b1ZpZXcudmlldztcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkTWludXRlID0gbWludXRlSW50b1ZpZXcuc2VsZWN0ZWRJdGVtO1xuICAgICAgICAgICAgICAgIHRoaXMuX3VwZGF0ZUVkaXRhYmxlSW5wdXQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNjcm9sbHMgYW4gYW1wbSBpdGVtIGludG8gdmlldy5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICpzY3JBbVBtSW50b1ZpZXcocGlja2VyKSB7XG4gICAgICpwaWNrZXIuc2Nyb2xsQW1QbUludG9WaWV3KCdQTScpO1xuICAgICAqfVxuICAgICAqIGBgYFxuICAgICAqYGBgaHRtbFxuICAgICAqPGlneC10aW1lLXBpY2tlciAjcGlja2VyIGZvcm1hdD1cImg6bW0gdHRcIiAob25PcGVuKT1cInNjckFtUG1JbnRvVmlldyhwaWNrZXIpXCI+PC9pZ3gtdGltZS1waWNrZXI+XG4gICAgICpgYGBcbiAgICAgKiBAcGFyYW0gaXRlbSB0byBiZSBzY3JvbGxlZCBpbiB2aWV3LlxuICAgICAqL1xuICAgIHB1YmxpYyBzY3JvbGxBbVBtSW50b1ZpZXcoaXRlbTogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLnNob3dBbVBtTGlzdCkge1xuICAgICAgICAgICAgY29uc3QgYW1wbUludG9WaWV3ID0gdGhpcy5fc2Nyb2xsSXRlbUludG9WaWV3KGl0ZW0sIHRoaXMuX2FtcG1JdGVtcywgdGhpcy5zZWxlY3RlZEFtUG0sIGZhbHNlLCBudWxsKTtcbiAgICAgICAgICAgIGlmIChhbXBtSW50b1ZpZXcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9hbXBtVmlldyA9IGFtcG1JbnRvVmlldy52aWV3O1xuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRBbVBtID0gYW1wbUludG9WaWV3LnNlbGVjdGVkSXRlbTtcbiAgICAgICAgICAgICAgICB0aGlzLl91cGRhdGVFZGl0YWJsZUlucHV0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIG5leHRIb3VyKCkge1xuICAgICAgICBjb25zdCBuZXh0SG91ciA9IHRoaXMuX25leHRJdGVtKHRoaXMuX2hvdXJJdGVtcywgdGhpcy5zZWxlY3RlZEhvdXIsIHRoaXMuX2lzSG91ckxpc3RMb29wLCAnaG91cicpO1xuICAgICAgICB0aGlzLl9ob3VyVmlldyA9IG5leHRIb3VyLnZpZXc7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRIb3VyID0gbmV4dEhvdXIuc2VsZWN0ZWRJdGVtO1xuXG4gICAgICAgIHRoaXMuX3VwZGF0ZUVkaXRhYmxlSW5wdXQoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIHByZXZIb3VyKCkge1xuICAgICAgICBjb25zdCBwcmV2SG91ciA9IHRoaXMuX3ByZXZJdGVtKHRoaXMuX2hvdXJJdGVtcywgdGhpcy5zZWxlY3RlZEhvdXIsIHRoaXMuX2lzSG91ckxpc3RMb29wLCAnaG91cicpO1xuICAgICAgICB0aGlzLl9ob3VyVmlldyA9IHByZXZIb3VyLnZpZXc7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRIb3VyID0gcHJldkhvdXIuc2VsZWN0ZWRJdGVtO1xuXG4gICAgICAgIHRoaXMuX3VwZGF0ZUVkaXRhYmxlSW5wdXQoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIG5leHRNaW51dGUoKSB7XG4gICAgICAgIGNvbnN0IG5leHRNaW51dGUgPSB0aGlzLl9uZXh0SXRlbSh0aGlzLl9taW51dGVJdGVtcywgdGhpcy5zZWxlY3RlZE1pbnV0ZSwgdGhpcy5faXNNaW51dGVMaXN0TG9vcCwgJ21pbnV0ZScpO1xuICAgICAgICB0aGlzLl9taW51dGVWaWV3ID0gbmV4dE1pbnV0ZS52aWV3O1xuICAgICAgICB0aGlzLnNlbGVjdGVkTWludXRlID0gbmV4dE1pbnV0ZS5zZWxlY3RlZEl0ZW07XG5cbiAgICAgICAgdGhpcy5fdXBkYXRlRWRpdGFibGVJbnB1dCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgcHJldk1pbnV0ZSgpIHtcbiAgICAgICAgY29uc3QgcHJldk1pbnV0ZSA9IHRoaXMuX3ByZXZJdGVtKHRoaXMuX21pbnV0ZUl0ZW1zLCB0aGlzLnNlbGVjdGVkTWludXRlLCB0aGlzLl9pc01pbnV0ZUxpc3RMb29wLCAnbWludXRlJyk7XG4gICAgICAgIHRoaXMuX21pbnV0ZVZpZXcgPSBwcmV2TWludXRlLnZpZXc7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRNaW51dGUgPSBwcmV2TWludXRlLnNlbGVjdGVkSXRlbTtcblxuICAgICAgICB0aGlzLl91cGRhdGVFZGl0YWJsZUlucHV0KCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyBuZXh0QW1QbSgpIHtcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRJbmRleCA9IHRoaXMuX2FtcG1JdGVtcy5pbmRleE9mKHRoaXMuc2VsZWN0ZWRBbVBtKTtcblxuICAgICAgICBpZiAoc2VsZWN0ZWRJbmRleCArIDEgPCB0aGlzLl9hbXBtSXRlbXMubGVuZ3RoIC0gMykge1xuICAgICAgICAgICAgdGhpcy5fdXBkYXRlQW1QbVZpZXcoc2VsZWN0ZWRJbmRleCAtIDIsIHNlbGVjdGVkSW5kZXggKyA1KTtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRBbVBtID0gdGhpcy5fYW1wbUl0ZW1zW3NlbGVjdGVkSW5kZXggKyAxXTtcblxuICAgICAgICAgICAgdGhpcy5fdXBkYXRlRWRpdGFibGVJbnB1dCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyBwcmV2QW1QbSgpIHtcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRJbmRleCA9IHRoaXMuX2FtcG1JdGVtcy5pbmRleE9mKHRoaXMuc2VsZWN0ZWRBbVBtKTtcblxuICAgICAgICBpZiAoc2VsZWN0ZWRJbmRleCA+IDMpIHtcbiAgICAgICAgICAgIHRoaXMuX3VwZGF0ZUFtUG1WaWV3KHNlbGVjdGVkSW5kZXggLSA0LCBzZWxlY3RlZEluZGV4ICsgMyk7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkQW1QbSA9IHRoaXMuX2FtcG1JdGVtc1tzZWxlY3RlZEluZGV4IC0gMV07XG5cbiAgICAgICAgICAgIHRoaXMuX3VwZGF0ZUVkaXRhYmxlSW5wdXQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIElmIGN1cnJlbnQgdmFsdWUgaXMgdmFsaWQgc2VsZWN0cyBpdCwgY2xvc2VzIHRoZSBkaWFsb2cgYW5kIHJldHVybnMgdHJ1ZSwgb3RoZXJ3aXNlIHJldHVybnMgZmFsc2UuXG4gICAgICogYGBgaHRtbFxuICAgICAqIDxpZ3gtZGlhbG9nIGNsYXNzPVwiaWd4LXRpbWUtcGlja2VyX19kaWFsb2ctcG9wdXBcIiBbcmlnaHRCdXR0b25MYWJlbF09XCJva0J1dHRvbkxhYmVsXCIgKG9uUmlnaHRCdXR0b25TZWxlY3QpPVwib2tCdXR0b25DbGljaygpXCI+XG4gICAgICogLy8uLlxuICAgICAqIDwvaWd4LWRpYWxvZz5cbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBwdWJsaWMgb2tCdXR0b25DbGljaygpOiBib29sZWFuIHtcbiAgICAgICAgY29uc3QgdGltZSA9IHRoaXMuX2dldFNlbGVjdGVkVGltZSgpO1xuICAgICAgICBpZiAodGhpcy5faXNWYWx1ZVZhbGlkKHRpbWUpKSB7XG4gICAgICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICAgICAgICB0aGlzLnZhbHVlID0gdGltZTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgYXJnczogSWd4VGltZVBpY2tlclZhbGlkYXRpb25GYWlsZWRFdmVudEFyZ3MgPSB7XG4gICAgICAgICAgICAgICAgdGltZVBpY2tlcjogdGhpcyxcbiAgICAgICAgICAgICAgICBjdXJyZW50VmFsdWU6IHRpbWUsXG4gICAgICAgICAgICAgICAgc2V0VGhyb3VnaFVJOiB0cnVlXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdGhpcy5vblZhbGlkYXRpb25GYWlsZWQuZW1pdChhcmdzKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENsb3NlcyB0aGUgZGlhbG9nIHdpdGhvdXQgc2VsZWN0aW5nIHRoZSBjdXJyZW50IHZhbHVlLlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8aWd4LWRpYWxvZyBjbGFzcz1cImlneC10aW1lLXBpY2tlcl9fZGlhbG9nLXBvcHVwXCIgW2xlZnRCdXR0b25MYWJlbF09XCJjYW5jZWxCdXR0b25MYWJlbFwiIChvbkxlZnRCdXR0b25TZWxlY3QpPVwiY2FuY2VsQnV0dG9uQ2xpY2soKVwiPlxuICAgICAqIC8vLi4uXG4gICAgICogPC9pZ3gtZGlhbG9nPlxuICAgICAqIGBgYFxuICAgICAqL1xuICAgIHB1YmxpYyBjYW5jZWxCdXR0b25DbGljaygpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubW9kZSA9PT0gSW50ZXJhY3Rpb25Nb2RlLkRyb3BEb3duKSB7XG4gICAgICAgICAgICB0aGlzLmRpc3BsYXlWYWx1ZSA9IHRoaXMuX2Zvcm1hdFRpbWUodGhpcy52YWx1ZSwgdGhpcy5mb3JtYXQpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jbG9zZSgpO1xuXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRIb3VyID0gdGhpcy5fcHJldlNlbGVjdGVkSG91cjtcbiAgICAgICAgdGhpcy5zZWxlY3RlZE1pbnV0ZSA9IHRoaXMuX3ByZXZTZWxlY3RlZE1pbnV0ZTtcbiAgICAgICAgdGhpcy5zZWxlY3RlZEFtUG0gPSB0aGlzLl9wcmV2U2VsZWN0ZWRBbVBtO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYW4gYXJyYXkgb2YgdGhlIGhvdXJzIGN1cnJlbnRseSBpbiB2aWV3LlxuICAgICAqYGBgaHRtbFxuICAgICAqQFZpZXdDaGlsZChcIk15Q2hpbGRcIilcbiAgICAgKnByaXZhdGUgcGlja2VyOiBJZ3hUaW1lUGlja2VyQ29tcG9uZW50O1xuICAgICAqbmdBZnRlclZpZXdJbml0KCl7XG4gICAgICogICAgbGV0IGhJblZpZXcgPSB0aGlzLnBpY2tlci5ob3Vyc0luVmlldztcbiAgICAgKn1cbiAgICAgKmBgYFxuICAgICAqL1xuICAgIHB1YmxpYyBob3Vyc0luVmlldygpOiBzdHJpbmdbXSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9ob3VyVmlldy5maWx0ZXIoKGhvdXIpID0+IGhvdXIgIT09ICcnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGFuIGFycmF5IG9mIHRoZSBtaW51dGVzIGN1cnJlbnRseSBpbiB2aWV3LlxuICAgICAqYGBgaHRtbFxuICAgICAqQFZpZXdDaGlsZChcIk15Q2hpbGRcIilcbiAgICAgKnByaXZhdGUgcGlja2VyOiBJZ3hUaW1lUGlja2VyQ29tcG9uZW50O1xuICAgICAqbmdBZnRlclZpZXdJbml0KCl7XG4gICAgICogICAgbGV0IG1pbkluVmlldyA9IHRoaXMucGlja2VyLm1pbnV0ZXNJblZpZXc7XG4gICAgICp9XG4gICAgICpgYGBcbiAgICAgKi9cbiAgICBwdWJsaWMgbWludXRlc0luVmlldygpOiBzdHJpbmdbXSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9taW51dGVWaWV3LmZpbHRlcigobWludXRlKSA9PiBtaW51dGUgIT09ICcnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGFuIGFycmF5IG9mIHRoZSBBTS9QTSBjdXJyZW50bHkgaW4gdmlldy5cbiAgICAgKmBgYGh0bWxcbiAgICAgKkBWaWV3Q2hpbGQoXCJNeUNoaWxkXCIpXG4gICAgICpwcml2YXRlIHBpY2tlcjogSWd4VGltZVBpY2tlckNvbXBvbmVudDtcbiAgICAgKm5nQWZ0ZXJWaWV3SW5pdCgpe1xuICAgICAqICAgIGxldCBBcEluVmlldyA9IHRoaXMucGlja2VyLmFtcG1JblZpZXc7XG4gICAgICp9XG4gICAgICpgYGBcbiAgICAgKi9cbiAgICBwdWJsaWMgYW1wbUluVmlldygpOiBzdHJpbmdbXSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hbXBtVmlldy5maWx0ZXIoKGFtcG0pID0+IGFtcG0gIT09ICcnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDbG9zZXMgdGhlIGRyb3Bkb3duL2RpYWxvZy5cbiAgICAgKiBgYGBodG1sXG4gICAgICo8aWd4LXRpbWUtcGlja2VyICN0aW1lUGlja2VyPjwvaWd4LXRpbWUtcGlja2VyPlxuICAgICAqIGBgYFxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBAVmlld0NoaWxkKCd0aW1lUGlja2VyJywgeyByZWFkOiBJZ3hUaW1lUGlja2VyQ29tcG9uZW50IH0pIHBpY2tlcjogSWd4VGltZVBpY2tlckNvbXBvbmVudDtcbiAgICAgKiBwaWNrZXIuY2xvc2UoKTtcbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBwdWJsaWMgY2xvc2UoKTogdm9pZCB7XG4gICAgICAgIHRoaXMudG9nZ2xlUmVmLmNsb3NlKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyBwYXJzZU1hc2socHJlc2VydmVBbVBtID0gdHJ1ZSk6IHN0cmluZyB7XG4gICAgICAgIGNvbnN0IG1hc2tXaXRoQW1QbSA9IHRoaXMubWFzay5yZXBsYWNlKG5ldyBSZWdFeHAoJzAnLCAnZycpLCB0aGlzLnByb21wdENoYXIpLnJlcGxhY2UoJ0xMJywgJ0FNJyk7XG4gICAgICAgIGNvbnN0IHB1cmVNYXNrID0gdGhpcy5tYXNrLnJlcGxhY2UobmV3IFJlZ0V4cCgnMCcsICdnJyksIHRoaXMucHJvbXB0Q2hhcikucmVwbGFjZShuZXcgUmVnRXhwKCdMJywgJ2cnKSwgdGhpcy5wcm9tcHRDaGFyKTtcblxuICAgICAgICByZXR1cm4gcHJlc2VydmVBbVBtID8gbWFza1dpdGhBbVBtIDogcHVyZU1hc2s7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyBjbGVhcigpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMudG9nZ2xlUmVmLmNvbGxhcHNlZCkge1xuICAgICAgICAgICAgdGhpcy5jbGVhcmVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuaXNOb3RFbXB0eSA9IGZhbHNlO1xuXG4gICAgICAgICAgICBjb25zdCBvbGRWYWwgPSBuZXcgRGF0ZSh0aGlzLnZhbHVlKTtcblxuICAgICAgICAgICAgdGhpcy5kaXNwbGF5VmFsdWUgPSAnJztcbiAgICAgICAgICAgIHRoaXMudmFsdWUuc2V0SG91cnMoMCwgMCk7XG5cbiAgICAgICAgICAgIGlmIChvbGRWYWwuZ2V0VGltZSgpICE9PSB0aGlzLnZhbHVlLmdldFRpbWUoKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGFyZ3M6IElneFRpbWVQaWNrZXJWYWx1ZUNoYW5nZWRFdmVudEFyZ3MgPSB7XG4gICAgICAgICAgICAgICAgICAgIG9sZFZhbHVlOiBvbGRWYWwsXG4gICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlOiB0aGlzLnZhbHVlXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB0aGlzLm9uVmFsdWVDaGFuZ2VkLmVtaXQoYXJncyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIG9uSW5wdXQoZXZlbnQpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgdmFsID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgICAgICBjb25zdCBvbGRWYWwgPSBuZXcgRGF0ZSh0aGlzLnZhbHVlKTtcblxuICAgICAgICB0aGlzLmlzTm90RW1wdHkgPSB2YWwgIT09IHRoaXMucGFyc2VNYXNrKGZhbHNlKTtcblxuICAgICAgICAvLyBoYW5kbGUgY2FzZXMgd2hlcmUgYWxsIGVtcHR5IHBvc2l0aW9ucyAocHJvbXRzKSBhcmUgZmlsbGVkIGFuZCB3ZSB3YW50IHRvIHVwZGF0ZVxuICAgICAgICAvLyB0aW1lcGlja2VyIG93biB2YWx1ZSBwcm9wZXJ0eSBpZiBpdCBpcyBhIHZhbGlkIERhdGVcbiAgICAgICAgaWYgKHZhbC5pbmRleE9mKHRoaXMucHJvbXB0Q2hhcikgPT09IC0xKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5faXNFbnRyeVZhbGlkKHZhbCkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdWYWwgPSB0aGlzLl9jb252ZXJ0TWluTWF4VmFsdWUodmFsKTtcbiAgICAgICAgICAgICAgICBpZiAob2xkVmFsLmdldFRpbWUoKSAhPT0gbmV3VmFsLmdldFRpbWUoKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnZhbHVlID0gbmV3VmFsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYXJnczogSWd4VGltZVBpY2tlclZhbGlkYXRpb25GYWlsZWRFdmVudEFyZ3MgPSB7XG4gICAgICAgICAgICAgICAgICAgIHRpbWVQaWNrZXI6IHRoaXMsXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRWYWx1ZTogdmFsLFxuICAgICAgICAgICAgICAgICAgICBzZXRUaHJvdWdoVUk6IGZhbHNlXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB0aGlzLm9uVmFsaWRhdGlvbkZhaWxlZC5lbWl0KGFyZ3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gaGFuZGxlIGNhc2VzIHdoZXJlIHRoZSB1c2VyIGRlbGV0ZXMgdGhlIGRpc3BsYXkgdmFsdWUgKHdoZW4gcHJlc3NpbmcgYmFja3NwYWNlIG9yIGRlbGV0ZSlcbiAgICAgICAgfSBlbHNlIGlmICghdGhpcy52YWx1ZSB8fCAhdmFsIHx8IHZhbCA9PT0gdGhpcy5wYXJzZU1hc2soZmFsc2UpKSB7XG4gICAgICAgICAgICB0aGlzLmlzTm90RW1wdHkgPSBmYWxzZTtcblxuICAgICAgICAgICAgdGhpcy52YWx1ZS5zZXRIb3VycygwLCAwKTtcbiAgICAgICAgICAgIHRoaXMuZGlzcGxheVZhbHVlID0gdmFsO1xuXG4gICAgICAgICAgICBpZiAob2xkVmFsLmdldFRpbWUoKSAhPT0gdGhpcy52YWx1ZS5nZXRUaW1lKCkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBhcmdzOiBJZ3hUaW1lUGlja2VyVmFsdWVDaGFuZ2VkRXZlbnRBcmdzID0ge1xuICAgICAgICAgICAgICAgICAgICBvbGRWYWx1ZTogb2xkVmFsLFxuICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZTogdGhpcy52YWx1ZVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgdGhpcy5vblZhbHVlQ2hhbmdlZC5lbWl0KGFyZ3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyBvbkZvY3VzKGV2ZW50KTogdm9pZCB7XG4gICAgICAgIHRoaXMuaXNOb3RFbXB0eSA9IGV2ZW50LnRhcmdldC52YWx1ZSAhPT0gdGhpcy5wYXJzZU1hc2soZmFsc2UpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgb25CbHVyKGV2ZW50KTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuXG4gICAgICAgIHRoaXMuaXNOb3RFbXB0eSA9IHZhbHVlICE9PSAnJztcbiAgICAgICAgdGhpcy5kaXNwbGF5VmFsdWUgPSB2YWx1ZTtcblxuICAgICAgICBpZiAodmFsdWUgJiYgdmFsdWUgIT09IHRoaXMucGFyc2VNYXNrKCkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9pc0VudHJ5VmFsaWQodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV3VmFsID0gdGhpcy5fY29udmVydE1pbk1heFZhbHVlKHZhbHVlKTtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMudmFsdWUgfHwgdGhpcy52YWx1ZS5nZXRUaW1lKCkgIT09IG5ld1ZhbC5nZXRUaW1lKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52YWx1ZSA9IG5ld1ZhbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IGFyZ3M6IElneFRpbWVQaWNrZXJWYWxpZGF0aW9uRmFpbGVkRXZlbnRBcmdzID0ge1xuICAgICAgICAgICAgICAgICAgICB0aW1lUGlja2VyOiB0aGlzLFxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50VmFsdWU6IHZhbHVlLFxuICAgICAgICAgICAgICAgICAgICBzZXRUaHJvdWdoVUk6IGZhbHNlXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB0aGlzLm9uVmFsaWRhdGlvbkZhaWxlZC5lbWl0KGFyZ3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyBzcGluT25FZGl0KGV2ZW50KTogdm9pZCB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgbGV0IHNpZ246IG51bWJlcjtcbiAgICAgICAgbGV0IGRpc3BsYXlWYWw6IHN0cmluZztcbiAgICAgICAgY29uc3QgY3VycmVudFZhbCA9IG5ldyBEYXRlKHRoaXMudmFsdWUpO1xuICAgICAgICBjb25zdCBtaW4gPSB0aGlzLm1pblZhbHVlID8gdGhpcy5fY29udmVydE1pbk1heFZhbHVlKHRoaXMubWluVmFsdWUpIDogdGhpcy5fY29udmVydE1pbk1heFZhbHVlKCcwMDowMCcpO1xuICAgICAgICBjb25zdCBtYXggPSB0aGlzLm1heFZhbHVlID8gdGhpcy5fY29udmVydE1pbk1heFZhbHVlKHRoaXMubWF4VmFsdWUpIDogdGhpcy5fY29udmVydE1pbk1heFZhbHVlKCcyNDowMCcpO1xuXG4gICAgICAgIGNvbnN0IGN1cnNvciA9IHRoaXMuX2dldEN1cnNvclBvc2l0aW9uKCk7XG5cbiAgICAgICAgaWYgKGV2ZW50LmtleSkge1xuICAgICAgICAgICAgY29uc3Qga2V5ID0gZXZlbnQua2V5O1xuICAgICAgICAgICAgc2lnbiA9IGtleSA9PT0gS0VZUy5ET1dOX0FSUk9XIHx8IGtleSA9PT0gS0VZUy5ET1dOX0FSUk9XX0lFID8gLTEgOiAxO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGV2ZW50LmRlbHRhWSkge1xuICAgICAgICAgICAgc2lnbiA9IGV2ZW50LmRlbHRhWSA8IDAgPyAxIDogLTE7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRoaXMuZGlzcGxheVZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLnZhbHVlID0gbWluO1xuICAgICAgICAgICAgZGlzcGxheVZhbCA9IHRoaXMuX2Zvcm1hdFRpbWUodGhpcy52YWx1ZSwgdGhpcy5mb3JtYXQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgaERlbHRhID0gdGhpcy5pdGVtc0RlbHRhLmhvdXJzICogNjAgKyAoc2lnbiAqIHRoaXMudmFsdWUuZ2V0TWludXRlcygpKTtcbiAgICAgICAgICAgIGNvbnN0IG1EZWx0YSA9IHRoaXMuaXRlbXNEZWx0YS5taW51dGVzO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5zaG93SG91cnNMaXN0ICYmIEhPVVJTX1BPUy5pbmRleE9mKGN1cnNvcikgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgdGhpcy52YWx1ZSA9IHRoaXMuX3NwaW5Ib3VycyhjdXJyZW50VmFsLCBtaW4sIG1heCwgaERlbHRhLCBzaWduKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMuc2hvd01pbnV0ZXNMaXN0ICYmXG4gICAgICAgICAgICAgICAgKCh0aGlzLnNob3dIb3Vyc0xpc3QgJiYgTUlOVVRFU19QT1MuaW5kZXhPZihjdXJzb3IpICE9PSAtMSkgfHwgKCF0aGlzLnNob3dIb3Vyc0xpc3QgJiYgSE9VUlNfUE9TLmluZGV4T2YoY3Vyc29yKSAhPT0gLTEpKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnZhbHVlID0gdGhpcy5fc3Bpbk1pbnV0ZXMoY3VycmVudFZhbCwgbURlbHRhLCBzaWduKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMuc2hvd0FtUG1MaXN0KSB7XG4gICAgICAgICAgICAgICAgaWYgKCgoIXRoaXMuc2hvd0hvdXJzTGlzdCB8fCAhdGhpcy5zaG93TWludXRlc0xpc3QpICYmIE1JTlVURVNfUE9TLmluZGV4T2YoY3Vyc29yKSAhPT0gLTEpIHx8XG4gICAgICAgICAgICAgICAgICAgICh0aGlzLnNob3dIb3Vyc0xpc3QgJiYgdGhpcy5zaG93TWludXRlc0xpc3QgJiYgIEFNUE1fUE9TLmluZGV4T2YoY3Vyc29yKSAhPT0gLTEpKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNlY3Rpb25zID0gdGhpcy5kaXNwbGF5VmFsdWUuc3BsaXQoL1tcXHM6XSsvKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpZ24gPSBzZWN0aW9uc1tzZWN0aW9ucy5sZW5ndGggLSAxXSA9PT0gJ0FNJyA/IDEgOiAtMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRWYWwuc2V0SG91cnMoY3VycmVudFZhbC5nZXRIb3VycygpICsgKHNpZ24gKiAxMikpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnZhbHVlID0gY3VycmVudFZhbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGRpc3BsYXlWYWwgPSB0aGlzLl9mb3JtYXRUaW1lKHRoaXMudmFsdWUsIHRoaXMuZm9ybWF0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIG1pbm9yIGhhY2sgZm9yIHByZXZlbnRpbmcgY3Vyc29yIGp1bXBpbmcgaW4gSUVcbiAgICAgICAgdGhpcy5fZGlzcGxheVZhbHVlID0gdGhpcy5pbnB1dEZvcm1hdC50cmFuc2Zvcm0oZGlzcGxheVZhbCk7XG4gICAgICAgIHRoaXMuaW5wdXQubmF0aXZlRWxlbWVudC52YWx1ZSA9IHRoaXMuX2Rpc3BsYXlWYWx1ZTtcbiAgICAgICAgdGhpcy5fc2V0Q3Vyc29yUG9zaXRpb24oY3Vyc29yKTtcblxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5fc2V0Q3Vyc29yUG9zaXRpb24oY3Vyc29yKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuQE5nTW9kdWxlKHtcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgSWd4VGltZVBpY2tlckNvbXBvbmVudCxcbiAgICAgICAgSWd4SG91ckl0ZW1EaXJlY3RpdmUsXG4gICAgICAgIElneEl0ZW1MaXN0RGlyZWN0aXZlLFxuICAgICAgICBJZ3hNaW51dGVJdGVtRGlyZWN0aXZlLFxuICAgICAgICBJZ3hBbVBtSXRlbURpcmVjdGl2ZSxcbiAgICAgICAgSWd4VGltZVBpY2tlclRlbXBsYXRlRGlyZWN0aXZlLFxuICAgICAgICBJZ3hUaW1lUGlja2VyQWN0aW9uc0RpcmVjdGl2ZSxcbiAgICAgICAgVGltZURpc3BsYXlGb3JtYXRQaXBlLFxuICAgICAgICBUaW1lSW5wdXRGb3JtYXRQaXBlXG4gICAgXSxcbiAgICBleHBvcnRzOiBbXG4gICAgICAgIElneFRpbWVQaWNrZXJDb21wb25lbnQsXG4gICAgICAgIElneFRpbWVQaWNrZXJUZW1wbGF0ZURpcmVjdGl2ZSxcbiAgICAgICAgSWd4VGltZVBpY2tlckFjdGlvbnNEaXJlY3RpdmUsXG4gICAgICAgIFRpbWVEaXNwbGF5Rm9ybWF0UGlwZSxcbiAgICAgICAgVGltZUlucHV0Rm9ybWF0UGlwZVxuICAgIF0sXG4gICAgaW1wb3J0czogW1xuICAgICAgICBDb21tb25Nb2R1bGUsXG4gICAgICAgIElneElucHV0R3JvdXBNb2R1bGUsXG4gICAgICAgIElneEljb25Nb2R1bGUsXG4gICAgICAgIElneEJ1dHRvbk1vZHVsZSxcbiAgICAgICAgSWd4TWFza01vZHVsZSxcbiAgICAgICAgSWd4VG9nZ2xlTW9kdWxlXG4gICAgXSxcbiAgICBwcm92aWRlcnM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIElneFRpbWVQaWNrZXJNb2R1bGUgeyB9XG4iXX0=