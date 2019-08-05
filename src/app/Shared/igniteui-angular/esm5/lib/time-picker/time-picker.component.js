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
var NEXT_ID = 0;
/** @type {?} */
var HOURS_POS = [0, 1, 2];
/** @type {?} */
var MINUTES_POS = [3, 4, 5];
/** @type {?} */
var AMPM_POS = [6, 7, 8];
/** @type {?} */
var ITEMS_COUNT = 7;
var TimePickerHammerConfig = /** @class */ (function (_super) {
    tslib_1.__extends(TimePickerHammerConfig, _super);
    function TimePickerHammerConfig() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.overrides = {
            pan: { direction: Hammer.DIRECTION_VERTICAL, threshold: 1 }
        };
        return _this;
    }
    TimePickerHammerConfig.decorators = [
        { type: Injectable }
    ];
    return TimePickerHammerConfig;
}(HammerGestureConfig));
export { TimePickerHammerConfig };
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
var IgxTimePickerComponent = /** @class */ (function () {
    function IgxTimePickerComponent() {
        /**
         * An \@Input property that sets the value of the `id` attribute.
         * ```html
         * <igx-time-picker [id]="'igx-time-picker-5'" format="h:mm tt" ></igx-time-picker>
         * ```
         */
        this.id = "igx-time-picker-" + NEXT_ID++;
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
        this._onTouchedCallback = function () { };
        this._onChangeCallback = function () { };
    }
    Object.defineProperty(IgxTimePickerComponent.prototype, "value", {
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
        get: /**
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
        function () {
            return this._value;
        },
        /**
         * An accessor that allows you to set a time using the `value` input.
         * ```html
         *public date: Date = new Date(Date.now());
         *  //...
         *<igx-time-picker [value]="date" format="h:mm tt"></igx-time-picker>
         * ```
         */
        set: /**
         * An accessor that allows you to set a time using the `value` input.
         * ```html
         * public date: Date = new Date(Date.now());
         *  //...
         * <igx-time-picker [value]="date" format="h:mm tt"></igx-time-picker>
         * ```
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (this._isValueValid(value)) {
                /** @type {?} */
                var oldVal = this._value;
                this._value = value;
                this._onChangeCallback(value);
                /** @type {?} */
                var dispVal = this._formatTime(this.value, this.format);
                if (this.mode === InteractionMode.DropDown && this._displayValue !== dispVal) {
                    this.displayValue = dispVal;
                }
                /** @type {?} */
                var args = {
                    oldValue: oldVal,
                    newValue: value
                };
                this.onValueChanged.emit(args);
            }
            else {
                /** @type {?} */
                var args = {
                    timePicker: this,
                    currentValue: value,
                    setThroughUI: false
                };
                this.onValidationFailed.emit(args);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxTimePickerComponent.prototype, "resourceStrings", {
        /**
         * An accessor that returns the resource strings.
        */
        get: /**
         * An accessor that returns the resource strings.
         * @return {?}
         */
        function () {
            return this._resourceStrings;
        },
        /**
         * An accessor that sets the resource strings.
         * By default it uses EN resources.
        */
        set: /**
         * An accessor that sets the resource strings.
         * By default it uses EN resources.
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._resourceStrings = Object.assign({}, this._resourceStrings, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxTimePickerComponent.prototype, "okButtonLabel", {
        /**
         * An accessor that returns the label of ok button.
        */
        get: /**
         * An accessor that returns the label of ok button.
         * @return {?}
         */
        function () {
            if (this._okButtonLabel === null) {
                return this.resourceStrings.igx_time_picker_ok;
            }
            return this._okButtonLabel;
        },
        /**
         * An @Input property that renders OK button with custom text. By default `okButtonLabel` is set to OK.
         * ```html
         * <igx-time-picker okButtonLabel='SET' [value]="date" format="h:mm tt"></igx-time-picker>
         * ```
         */
        set: /**
         * An \@Input property that renders OK button with custom text. By default `okButtonLabel` is set to OK.
         * ```html
         * <igx-time-picker okButtonLabel='SET' [value]="date" format="h:mm tt"></igx-time-picker>
         * ```
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._okButtonLabel = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxTimePickerComponent.prototype, "cancelButtonLabel", {
        /**
        * An accessor that returns the label of cancel button.
        */
        get: /**
         * An accessor that returns the label of cancel button.
         * @return {?}
         */
        function () {
            if (this._cancelButtonLabel === null) {
                return this.resourceStrings.igx_time_picker_cancel;
            }
            return this._cancelButtonLabel;
        },
        /**
         * An @Input property that renders cancel button with custom text.
         * By default `cancelButtonLabel` is set to Cancel.
         * ```html
         * <igx-time-picker cancelButtonLabel='Exit' [value]="date" format="h:mm tt"></igx-time-picker>
         * ```
         */
        set: /**
         * An \@Input property that renders cancel button with custom text.
         * By default `cancelButtonLabel` is set to Cancel.
         * ```html
         * <igx-time-picker cancelButtonLabel='Exit' [value]="date" format="h:mm tt"></igx-time-picker>
         * ```
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._cancelButtonLabel = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxTimePickerComponent.prototype, "format", {
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
        get: /**
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
        function () {
            return this._format || 'hh:mm tt';
        },
        set: /**
         * @param {?} formatValue
         * @return {?}
         */
        function (formatValue) {
            this._format = formatValue;
            this.mask = this._format.indexOf('tt') !== -1 ? '00:00 LL' : '00:00';
            if (!this.showHoursList || !this.showMinutesList) {
                this.mask = this.mask.slice(this.mask.indexOf(':') + 1, this.mask.length);
            }
            if (this.displayValue) {
                this.displayValue = this._formatTime(this.value, this._format);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxTimePickerComponent.prototype, "overlaySettings", {
        get: /**
         * @return {?}
         */
        function () {
            return this._overlaySettings ? this._overlaySettings :
                (this.mode === InteractionMode.Dialog ? this._dialogOverlaySettings : this._dropDownOverlaySettings);
        },
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
        set: /**
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
        function (value) {
            this._overlaySettings = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxTimePickerComponent.prototype, "onOpen", {
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
        get: /**
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
    Object.defineProperty(IgxTimePickerComponent.prototype, "onClose", {
        /**
         * @deprecated Use 'onClosed' instead.
         * Emitted when a timePicker is being closed.
         */
        get: /**
         * @deprecated Use 'onClosed' instead.
         * Emitted when a timePicker is being closed.
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
    Object.defineProperty(IgxTimePickerComponent.prototype, "mask", {
        /**
         * @hidden
        */
        get: /**
         * @hidden
         * @return {?}
         */
        function () {
            return this._mask || '00:00 LL';
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._mask = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxTimePickerComponent.prototype, "displayValue", {
        /**
         * @hidden
         */
        get: /**
         * @hidden
         * @return {?}
         */
        function () {
            if (this._displayValue === undefined) {
                return this._formatTime(this.value, this.format);
            }
            return this._displayValue;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._displayValue = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxTimePickerComponent.prototype, "displayTime", {
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
        get: /**
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
        function () {
            if (this.value) {
                return this._formatTime(this.value, this.format);
            }
            return '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxTimePickerComponent.prototype, "hourView", {
        /**
         * @hidden
         */
        get: /**
         * @hidden
         * @return {?}
         */
        function () {
            return this._hourView;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxTimePickerComponent.prototype, "minuteView", {
        /**
         * @hidden
         */
        get: /**
         * @hidden
         * @return {?}
         */
        function () {
            return this._minuteView;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxTimePickerComponent.prototype, "ampmView", {
        /**
         * @hidden
         */
        get: /**
         * @hidden
         * @return {?}
         */
        function () {
            return this._ampmView;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxTimePickerComponent.prototype, "showClearButton", {
        /**
         * @hidden
         */
        get: /**
         * @hidden
         * @return {?}
         */
        function () {
            return (this.displayValue && this.displayValue !== this.parseMask(false)) || this.isNotEmpty;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxTimePickerComponent.prototype, "showHoursList", {
        /**
         * @hidden
         */
        get: /**
         * @hidden
         * @return {?}
         */
        function () {
            return this.format.indexOf('h') !== -1 || this.format.indexOf('H') !== -1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxTimePickerComponent.prototype, "showMinutesList", {
        /**
         * @hidden
         */
        get: /**
         * @hidden
         * @return {?}
         */
        function () {
            return this.format.indexOf('m') !== -1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxTimePickerComponent.prototype, "showAmPmList", {
        /**
         * @hidden
         */
        get: /**
         * @hidden
         * @return {?}
         */
        function () {
            return this.format.indexOf('t') !== -1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxTimePickerComponent.prototype, "validMinuteEntries", {
        /**
         * @hidden
         */
        get: /**
         * @hidden
         * @return {?}
         */
        function () {
            /** @type {?} */
            var minuteEntries = [];
            for (var i = 0; i < 60; i++) {
                minuteEntries.push(i);
            }
            return minuteEntries;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxTimePickerComponent.prototype, "validHourEntries", {
        /**
         * @hidden
         */
        get: /**
         * @hidden
         * @return {?}
         */
        function () {
            /** @type {?} */
            var hourEntries = [];
            /** @type {?} */
            var index = this.format.indexOf('h') !== -1 ? 13 : 24;
            for (var i = 0; i < index; i++) {
                hourEntries.push(i);
            }
            return hourEntries;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxTimePickerComponent.prototype, "template", {
        /**
         * Gets the input group template.
         * ```typescript
         * let template = this.template();
         * ```
         * @memberof IgxTimePickerComponent
         */
        get: /**
         * Gets the input group template.
         * ```typescript
         * let template = this.template();
         * ```
         * \@memberof IgxTimePickerComponent
         * @return {?}
         */
        function () {
            if (this.timePickerTemplateDirective) {
                return this.timePickerTemplateDirective.template;
            }
            return this.mode === InteractionMode.Dialog ? this.defaultTimePickerTemplate : this.dropdownInputTemplate;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxTimePickerComponent.prototype, "context", {
        /**
         * Gets the context passed to the input group template.
         * @memberof IgxTimePickerComponent
         */
        get: /**
         * Gets the context passed to the input group template.
         * \@memberof IgxTimePickerComponent
         * @return {?}
         */
        function () {
            var _this = this;
            return {
                value: this.value,
                displayTime: this.displayTime,
                displayValue: this.displayValue,
                openDialog: function (target) { return _this.openDialog(target); }
            };
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @hidden
     */
    /**
     * @hidden
     * @return {?}
     */
    IgxTimePickerComponent.prototype.ngOnInit = /**
     * @hidden
     * @return {?}
     */
    function () {
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
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @return {?}
     */
    IgxTimePickerComponent.prototype.ngAfterViewInit = /**
     * @hidden
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.mode === InteractionMode.DropDown && this.input) {
            fromEvent(this.input.nativeElement, 'keydown').pipe(throttle(function () { return interval(0, animationFrameScheduler); }), takeUntil(this._destroy$)).subscribe(function (event) {
                if (event.key === "ArrowUp" /* UP_ARROW */ || event.key === "Up" /* UP_ARROW_IE */ ||
                    event.key === "ArrowDown" /* DOWN_ARROW */ || event.key === "Down" /* DOWN_ARROW_IE */) {
                    _this.spinOnEdit(event);
                }
            });
        }
        if (this.toggleRef && this.group) {
            this.toggleRef.element.style.width = this.group.element.nativeElement.getBoundingClientRect().width + 'px';
        }
        if (this.toggleRef) {
            this.toggleRef.onClosed.pipe(takeUntil(this._destroy$)).subscribe(function () {
                if (_this._input) {
                    _this._input.nativeElement.focus();
                }
                if (_this.mode === InteractionMode.DropDown) {
                    _this._onDropDownClosed();
                }
                _this.onClosed.emit(_this);
                // TODO: remove this line after deprecating 'onClose'
                _this._onClose.emit(_this);
            });
            this.toggleRef.onOpened.pipe(takeUntil(this._destroy$)).subscribe(function () {
                _this.onOpened.emit(_this);
                // TODO: remove this line after deprecating 'onOpen'
                _this._onOpen.emit(_this);
            });
            this.toggleRef.onClosing.pipe(takeUntil(this._destroy$)).subscribe(function (event) {
                _this.onClosing.emit(event);
            });
        }
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @return {?}
     */
    IgxTimePickerComponent.prototype.ngOnDestroy = /**
     * @hidden
     * @return {?}
     */
    function () {
        this._destroy$.next(true);
        this._destroy$.complete();
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    IgxTimePickerComponent.prototype.onKeydownSpace = /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.openDialog(this.getInputGroupElement());
        event.preventDefault();
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @return {?}
     */
    IgxTimePickerComponent.prototype.onAltArrowDown = /**
     * @hidden
     * @return {?}
     */
    function () {
        this.openDialog(this.getInputGroupElement());
    };
    /**
     * @private
     * @param {?} item
     * @param {?} items
     * @param {?} selectedItem
     * @param {?} isListLoop
     * @param {?} viewType
     * @return {?}
     */
    IgxTimePickerComponent.prototype._scrollItemIntoView = /**
     * @private
     * @param {?} item
     * @param {?} items
     * @param {?} selectedItem
     * @param {?} isListLoop
     * @param {?} viewType
     * @return {?}
     */
    function (item, items, selectedItem, isListLoop, viewType) {
        /** @type {?} */
        var itemIntoView;
        if (items) {
            /** @type {?} */
            var index = (item === 'AM' || item === 'PM') ? items.indexOf(item) : items.indexOf(parseInt(item, 10));
            /** @type {?} */
            var view = void 0;
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
                    itemIntoView = { selectedItem: selectedItem, view: view };
                }
                itemIntoView.view = this._viewToString(itemIntoView.view, viewType);
            }
        }
        return itemIntoView;
    };
    /**
     * @private
     * @param {?} view
     * @param {?} viewType
     * @return {?}
     */
    IgxTimePickerComponent.prototype._viewToString = /**
     * @private
     * @param {?} view
     * @param {?} viewType
     * @return {?}
     */
    function (view, viewType) {
        for (var i = 0; i < view.length; i++) {
            if (typeof (view[i]) !== 'string') {
                view[i] = this._itemToString(view[i], viewType);
            }
        }
        return view;
    };
    /**
     * @private
     * @param {?} item
     * @param {?} viewType
     * @return {?}
     */
    IgxTimePickerComponent.prototype._itemToString = /**
     * @private
     * @param {?} item
     * @param {?} viewType
     * @return {?}
     */
    function (item, viewType) {
        if (item === null) {
            item = '';
        }
        else if (viewType && typeof (item) !== 'string') {
            /** @type {?} */
            var leadZeroHour = (item < 10 && (this.format.indexOf('hh') !== -1 || this.format.indexOf('HH') !== -1));
            /** @type {?} */
            var leadZeroMinute = (item < 10 && this.format.indexOf('mm') !== -1);
            /** @type {?} */
            var leadZero = (viewType === 'hour') ? leadZeroHour : leadZeroMinute;
            item = (leadZero) ? '0' + item : "" + item;
        }
        return item;
    };
    /**
     * @private
     * @param {?} items
     * @param {?} selectedItem
     * @param {?} isListLoop
     * @param {?} viewType
     * @return {?}
     */
    IgxTimePickerComponent.prototype._prevItem = /**
     * @private
     * @param {?} items
     * @param {?} selectedItem
     * @param {?} isListLoop
     * @param {?} viewType
     * @return {?}
     */
    function (items, selectedItem, isListLoop, viewType) {
        /** @type {?} */
        var selectedIndex = items.indexOf(parseInt(selectedItem, 10));
        /** @type {?} */
        var itemsCount = items.length;
        /** @type {?} */
        var view;
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
            selectedItem: selectedItem,
            view: view
        };
    };
    /**
     * @private
     * @param {?} items
     * @param {?} selectedItem
     * @param {?} isListLoop
     * @param {?} viewType
     * @return {?}
     */
    IgxTimePickerComponent.prototype._nextItem = /**
     * @private
     * @param {?} items
     * @param {?} selectedItem
     * @param {?} isListLoop
     * @param {?} viewType
     * @return {?}
     */
    function (items, selectedItem, isListLoop, viewType) {
        /** @type {?} */
        var selectedIndex = items.indexOf(parseInt(selectedItem, 10));
        /** @type {?} */
        var itemsCount = items.length;
        /** @type {?} */
        var view;
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
            selectedItem: selectedItem,
            view: view
        };
    };
    /**
     * @private
     * @param {?} value
     * @param {?} format
     * @return {?}
     */
    IgxTimePickerComponent.prototype._formatTime = /**
     * @private
     * @param {?} value
     * @param {?} format
     * @return {?}
     */
    function (value, format) {
        if (!value) {
            return '';
        }
        else {
            /** @type {?} */
            var hour = value.getHours();
            /** @type {?} */
            var formattedMinute = void 0;
            /** @type {?} */
            var formattedHour = void 0;
            /** @type {?} */
            var minute = value.getMinutes();
            /** @type {?} */
            var amPM = (hour > 11) ? 'PM' : 'AM';
            if (format.indexOf('h') !== -1) {
                if (hour > 12) {
                    hour -= 12;
                    formattedHour = hour < 10 && format.indexOf('hh') !== -1 ? '0' + hour : "" + hour;
                }
                else if (hour === 0) {
                    formattedHour = '12';
                }
                else if (hour < 10 && format.indexOf('hh') !== -1) {
                    formattedHour = '0' + hour;
                }
                else {
                    formattedHour = "" + hour;
                }
            }
            else {
                if (hour < 10 && format.indexOf('HH') !== -1) {
                    formattedHour = '0' + hour;
                }
                else {
                    formattedHour = "" + hour;
                }
            }
            formattedMinute = minute < 10 && format.indexOf('mm') !== -1 ? '0' + minute : "" + minute;
            return format.replace('hh', formattedHour).replace('h', formattedHour)
                .replace('HH', formattedHour).replace('H', formattedHour)
                .replace('mm', formattedMinute).replace('m', formattedMinute)
                .replace('tt', amPM);
        }
    };
    /**
     * @private
     * @param {?} start
     * @param {?} end
     * @return {?}
     */
    IgxTimePickerComponent.prototype._updateHourView = /**
     * @private
     * @param {?} start
     * @param {?} end
     * @return {?}
     */
    function (start, end) {
        this._hourView = this._viewToString(this._hourItems.slice(start, end), 'hour');
    };
    /**
     * @private
     * @param {?} start
     * @param {?} end
     * @return {?}
     */
    IgxTimePickerComponent.prototype._updateMinuteView = /**
     * @private
     * @param {?} start
     * @param {?} end
     * @return {?}
     */
    function (start, end) {
        this._minuteView = this._viewToString(this._minuteItems.slice(start, end), 'minute');
    };
    /**
     * @private
     * @param {?} start
     * @param {?} end
     * @return {?}
     */
    IgxTimePickerComponent.prototype._updateAmPmView = /**
     * @private
     * @param {?} start
     * @param {?} end
     * @return {?}
     */
    function (start, end) {
        this._ampmView = this._ampmItems.slice(start, end);
    };
    /**
     * @private
     * @param {?} items
     * @return {?}
     */
    IgxTimePickerComponent.prototype._addEmptyItems = /**
     * @private
     * @param {?} items
     * @return {?}
     */
    function (items) {
        for (var i = 0; i < 3; i++) {
            items.push(null);
        }
    };
    /**
     * @private
     * @return {?}
     */
    IgxTimePickerComponent.prototype._generateHours = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var hourItemsCount = 24;
        if (this.format.indexOf('h') !== -1) {
            hourItemsCount = 13;
        }
        hourItemsCount /= this.itemsDelta.hours;
        /** @type {?} */
        var i = this.format.indexOf('H') !== -1 ? 0 : 1;
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
    };
    /**
     * @private
     * @return {?}
     */
    IgxTimePickerComponent.prototype._generateMinutes = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var minuteItemsCount = 60 / this.itemsDelta.minutes;
        if (minuteItemsCount < 7 || !this.isSpinLoop) {
            this._addEmptyItems(this._minuteItems);
            this._isMinuteListLoop = false;
        }
        for (var i = 0; i < minuteItemsCount; i++) {
            this._minuteItems.push(i * this.itemsDelta.minutes);
        }
        if (minuteItemsCount < 7 || !this.isSpinLoop) {
            this._addEmptyItems(this._minuteItems);
        }
    };
    /**
     * @private
     * @return {?}
     */
    IgxTimePickerComponent.prototype._generateAmPm = /**
     * @private
     * @return {?}
     */
    function () {
        this._addEmptyItems(this._ampmItems);
        this._ampmItems.push('AM');
        this._ampmItems.push('PM');
        this._addEmptyItems(this._ampmItems);
    };
    /**
     * @private
     * @return {?}
     */
    IgxTimePickerComponent.prototype._getSelectedTime = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var date = this.value ? new Date(this.value) : new Date();
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
    };
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    IgxTimePickerComponent.prototype._convertMinMaxValue = /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var date = this.value ? new Date(this.value) : this._dateFromModel ? new Date(this._dateFromModel) : new Date();
        /** @type {?} */
        var sections = value.split(/[\s:]+/);
        /** @type {?} */
        var hour;
        /** @type {?} */
        var minutes;
        /** @type {?} */
        var amPM;
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
    };
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    IgxTimePickerComponent.prototype._isValueValid = /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (this.maxValue && value > this._convertMinMaxValue(this.maxValue)) {
            return false;
        }
        else if (this.minValue && value < this._convertMinMaxValue(this.minValue)) {
            return false;
        }
        else {
            return true;
        }
    };
    /**
     * @private
     * @param {?} val
     * @return {?}
     */
    IgxTimePickerComponent.prototype._isEntryValid = /**
     * @private
     * @param {?} val
     * @return {?}
     */
    function (val) {
        /** @type {?} */
        var validH = true;
        /** @type {?} */
        var validM = true;
        /** @type {?} */
        var sections = val.split(/[\s:]+/);
        /** @type {?} */
        var re = new RegExp(this.promptChar, 'g');
        if (this.showHoursList) {
            validH = this.validHourEntries.indexOf(parseInt(sections[0].replace(re, ''), 10)) !== -1;
        }
        if (this.showMinutesList) {
            /** @type {?} */
            var minutes = this.showHoursList ? sections[1] : sections[0];
            validM = this.validMinuteEntries.indexOf(parseInt(minutes.replace(re, ''), 10)) !== -1;
        }
        return validH && validM;
    };
    /**
     * @private
     * @return {?}
     */
    IgxTimePickerComponent.prototype._getCursorPosition = /**
     * @private
     * @return {?}
     */
    function () {
        return this.input.nativeElement.selectionStart;
    };
    /**
     * @private
     * @param {?} start
     * @param {?=} end
     * @return {?}
     */
    IgxTimePickerComponent.prototype._setCursorPosition = /**
     * @private
     * @param {?} start
     * @param {?=} end
     * @return {?}
     */
    function (start, end) {
        if (end === void 0) { end = start; }
        this.input.nativeElement.setSelectionRange(start, end);
    };
    /**
     * @private
     * @return {?}
     */
    IgxTimePickerComponent.prototype._updateEditableInput = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.mode === InteractionMode.DropDown) {
            this.displayValue = this._formatTime(this._getSelectedTime(), this.format);
        }
    };
    /**
     * @private
     * @param {?} currentVal
     * @param {?} minVal
     * @param {?} maxVal
     * @param {?} hDelta
     * @param {?} sign
     * @return {?}
     */
    IgxTimePickerComponent.prototype._spinHours = /**
     * @private
     * @param {?} currentVal
     * @param {?} minVal
     * @param {?} maxVal
     * @param {?} hDelta
     * @param {?} sign
     * @return {?}
     */
    function (currentVal, minVal, maxVal, hDelta, sign) {
        /** @type {?} */
        var oldVal = new Date(currentVal);
        currentVal.setMinutes(sign * hDelta);
        if (currentVal.getDate() !== oldVal.getDate() && this.isSpinLoop) {
            currentVal.setDate(oldVal.getDate());
        }
        /** @type {?} */
        var minutes = currentVal.getMinutes();
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
    };
    /**
     * @private
     * @param {?} currentVal
     * @param {?} mDelta
     * @param {?} sign
     * @return {?}
     */
    IgxTimePickerComponent.prototype._spinMinutes = /**
     * @private
     * @param {?} currentVal
     * @param {?} mDelta
     * @param {?} sign
     * @return {?}
     */
    function (currentVal, mDelta, sign) {
        /** @type {?} */
        var minutes = currentVal.getMinutes() + (sign * mDelta);
        if (minutes < 0 || minutes >= 60) {
            minutes = this.isSpinLoop ? minutes - (sign * 60) : currentVal.getMinutes();
        }
        currentVal.setMinutes(minutes);
        return currentVal;
    };
    /**
     * @private
     * @return {?}
     */
    IgxTimePickerComponent.prototype._initializeContainer = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.value) {
            /** @type {?} */
            var formttedTime = this._formatTime(this.value, this.format);
            /** @type {?} */
            var sections = formttedTime.split(/[\s:]+/);
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
                this.showHoursList ? "" + this._hourItems[3] : '0';
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
        requestAnimationFrame(function () {
            if (_this.hourList) {
                _this.hourList.nativeElement.focus();
            }
            else if (_this.minuteList) {
                _this.minuteList.nativeElement.focus();
            }
        });
    };
    /**
     * @private
     * @return {?}
     */
    IgxTimePickerComponent.prototype._onDropDownClosed = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var oldValue = this.value;
        /** @type {?} */
        var newVal = this._convertMinMaxValue(this.displayValue);
        if (this._isValueValid(newVal)) {
            if (!this.value || oldValue.getTime() !== newVal.getTime()) {
                this.value = newVal;
            }
        }
        else {
            this.displayValue = this.inputFormat.transform(this._formatTime(oldValue, this.format));
            /** @type {?} */
            var args = {
                timePicker: this,
                currentValue: newVal,
                setThroughUI: true
            };
            this.onValidationFailed.emit(args);
        }
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @return {?}
     */
    IgxTimePickerComponent.prototype.getEditElement = /**
     * @hidden
     * @return {?}
     */
    function () {
        return this._input ? this._input.nativeElement : null;
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @return {?}
     */
    IgxTimePickerComponent.prototype.getInputGroupElement = /**
     * @hidden
     * @return {?}
     */
    function () {
        return this.group ? this.group.element.nativeElement : null;
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} value
     * @return {?}
     */
    IgxTimePickerComponent.prototype.writeValue = /**
     * @hidden
     * @param {?} value
     * @return {?}
     */
    function (value) {
        // use this flag to make sure that min/maxValue are checked (in _convertMinMaxValue() method)
        // against the real value when initializing the component and value is bound via ngModel
        this._dateFromModel = value;
        this.value = value;
        if (this.mode === InteractionMode.DropDown) {
            this.displayValue = this._formatTime(this.value, this.format);
        }
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} fn
     * @return {?}
     */
    IgxTimePickerComponent.prototype.registerOnChange = /**
     * @hidden
     * @param {?} fn
     * @return {?}
     */
    function (fn) { this._onChangeCallback = fn; };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} fn
     * @return {?}
     */
    IgxTimePickerComponent.prototype.registerOnTouched = /**
     * @hidden
     * @param {?} fn
     * @return {?}
     */
    function (fn) { this._onTouchedCallback = fn; };
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
    IgxTimePickerComponent.prototype.openDialog = /**
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
    function (target) {
        if (!this.toggleRef.collapsed) {
            return this._onDropDownClosed();
        }
        /** @type {?} */
        var settings = this.overlaySettings;
        if (target && settings && settings.positionStrategy) {
            settings.positionStrategy.settings.target = target;
        }
        if (this.outlet) {
            settings.outlet = this.outlet;
        }
        this.toggleRef.open(settings);
        this._initializeContainer();
    };
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
    IgxTimePickerComponent.prototype.scrollHourIntoView = /**
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
    function (item) {
        if (this.showHoursList) {
            /** @type {?} */
            var hourIntoView = this._scrollItemIntoView(item, this._hourItems, this.selectedHour, this._isHourListLoop, 'hour');
            if (hourIntoView) {
                this._hourView = hourIntoView.view;
                this.selectedHour = hourIntoView.selectedItem;
                this._updateEditableInput();
            }
        }
    };
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
    IgxTimePickerComponent.prototype.scrollMinuteIntoView = /**
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
    function (item) {
        if (this.showMinutesList) {
            /** @type {?} */
            var minuteIntoView = this._scrollItemIntoView(item, this._minuteItems, this.selectedMinute, this._isMinuteListLoop, 'minute');
            if (minuteIntoView) {
                this._minuteView = minuteIntoView.view;
                this.selectedMinute = minuteIntoView.selectedItem;
                this._updateEditableInput();
            }
        }
    };
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
    IgxTimePickerComponent.prototype.scrollAmPmIntoView = /**
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
    function (item) {
        if (this.showAmPmList) {
            /** @type {?} */
            var ampmIntoView = this._scrollItemIntoView(item, this._ampmItems, this.selectedAmPm, false, null);
            if (ampmIntoView) {
                this._ampmView = ampmIntoView.view;
                this.selectedAmPm = ampmIntoView.selectedItem;
                this._updateEditableInput();
            }
        }
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @return {?}
     */
    IgxTimePickerComponent.prototype.nextHour = /**
     * @hidden
     * @return {?}
     */
    function () {
        /** @type {?} */
        var nextHour = this._nextItem(this._hourItems, this.selectedHour, this._isHourListLoop, 'hour');
        this._hourView = nextHour.view;
        this.selectedHour = nextHour.selectedItem;
        this._updateEditableInput();
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @return {?}
     */
    IgxTimePickerComponent.prototype.prevHour = /**
     * @hidden
     * @return {?}
     */
    function () {
        /** @type {?} */
        var prevHour = this._prevItem(this._hourItems, this.selectedHour, this._isHourListLoop, 'hour');
        this._hourView = prevHour.view;
        this.selectedHour = prevHour.selectedItem;
        this._updateEditableInput();
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @return {?}
     */
    IgxTimePickerComponent.prototype.nextMinute = /**
     * @hidden
     * @return {?}
     */
    function () {
        /** @type {?} */
        var nextMinute = this._nextItem(this._minuteItems, this.selectedMinute, this._isMinuteListLoop, 'minute');
        this._minuteView = nextMinute.view;
        this.selectedMinute = nextMinute.selectedItem;
        this._updateEditableInput();
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @return {?}
     */
    IgxTimePickerComponent.prototype.prevMinute = /**
     * @hidden
     * @return {?}
     */
    function () {
        /** @type {?} */
        var prevMinute = this._prevItem(this._minuteItems, this.selectedMinute, this._isMinuteListLoop, 'minute');
        this._minuteView = prevMinute.view;
        this.selectedMinute = prevMinute.selectedItem;
        this._updateEditableInput();
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @return {?}
     */
    IgxTimePickerComponent.prototype.nextAmPm = /**
     * @hidden
     * @return {?}
     */
    function () {
        /** @type {?} */
        var selectedIndex = this._ampmItems.indexOf(this.selectedAmPm);
        if (selectedIndex + 1 < this._ampmItems.length - 3) {
            this._updateAmPmView(selectedIndex - 2, selectedIndex + 5);
            this.selectedAmPm = this._ampmItems[selectedIndex + 1];
            this._updateEditableInput();
        }
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @return {?}
     */
    IgxTimePickerComponent.prototype.prevAmPm = /**
     * @hidden
     * @return {?}
     */
    function () {
        /** @type {?} */
        var selectedIndex = this._ampmItems.indexOf(this.selectedAmPm);
        if (selectedIndex > 3) {
            this._updateAmPmView(selectedIndex - 4, selectedIndex + 3);
            this.selectedAmPm = this._ampmItems[selectedIndex - 1];
            this._updateEditableInput();
        }
    };
    /**
     * If current value is valid selects it, closes the dialog and returns true, otherwise returns false.
     * ```html
     * <igx-dialog class="igx-time-picker__dialog-popup" [rightButtonLabel]="okButtonLabel" (onRightButtonSelect)="okButtonClick()">
     * //..
     * </igx-dialog>
     * ```
     */
    /**
     * If current value is valid selects it, closes the dialog and returns true, otherwise returns false.
     * ```html
     * <igx-dialog class="igx-time-picker__dialog-popup" [rightButtonLabel]="okButtonLabel" (onRightButtonSelect)="okButtonClick()">
     * //..
     * </igx-dialog>
     * ```
     * @return {?}
     */
    IgxTimePickerComponent.prototype.okButtonClick = /**
     * If current value is valid selects it, closes the dialog and returns true, otherwise returns false.
     * ```html
     * <igx-dialog class="igx-time-picker__dialog-popup" [rightButtonLabel]="okButtonLabel" (onRightButtonSelect)="okButtonClick()">
     * //..
     * </igx-dialog>
     * ```
     * @return {?}
     */
    function () {
        /** @type {?} */
        var time = this._getSelectedTime();
        if (this._isValueValid(time)) {
            this.close();
            this.value = time;
            return true;
        }
        else {
            /** @type {?} */
            var args = {
                timePicker: this,
                currentValue: time,
                setThroughUI: true
            };
            this.onValidationFailed.emit(args);
            return false;
        }
    };
    /**
     * Closes the dialog without selecting the current value.
     * ```html
     * <igx-dialog class="igx-time-picker__dialog-popup" [leftButtonLabel]="cancelButtonLabel" (onLeftButtonSelect)="cancelButtonClick()">
     * //...
     * </igx-dialog>
     * ```
     */
    /**
     * Closes the dialog without selecting the current value.
     * ```html
     * <igx-dialog class="igx-time-picker__dialog-popup" [leftButtonLabel]="cancelButtonLabel" (onLeftButtonSelect)="cancelButtonClick()">
     * //...
     * </igx-dialog>
     * ```
     * @return {?}
     */
    IgxTimePickerComponent.prototype.cancelButtonClick = /**
     * Closes the dialog without selecting the current value.
     * ```html
     * <igx-dialog class="igx-time-picker__dialog-popup" [leftButtonLabel]="cancelButtonLabel" (onLeftButtonSelect)="cancelButtonClick()">
     * //...
     * </igx-dialog>
     * ```
     * @return {?}
     */
    function () {
        if (this.mode === InteractionMode.DropDown) {
            this.displayValue = this._formatTime(this.value, this.format);
        }
        this.close();
        this.selectedHour = this._prevSelectedHour;
        this.selectedMinute = this._prevSelectedMinute;
        this.selectedAmPm = this._prevSelectedAmPm;
    };
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
    IgxTimePickerComponent.prototype.hoursInView = /**
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
    function () {
        return this._hourView.filter(function (hour) { return hour !== ''; });
    };
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
    IgxTimePickerComponent.prototype.minutesInView = /**
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
    function () {
        return this._minuteView.filter(function (minute) { return minute !== ''; });
    };
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
    IgxTimePickerComponent.prototype.ampmInView = /**
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
    function () {
        return this._ampmView.filter(function (ampm) { return ampm !== ''; });
    };
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
    IgxTimePickerComponent.prototype.close = /**
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
    function () {
        this.toggleRef.close();
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?=} preserveAmPm
     * @return {?}
     */
    IgxTimePickerComponent.prototype.parseMask = /**
     * @hidden
     * @param {?=} preserveAmPm
     * @return {?}
     */
    function (preserveAmPm) {
        if (preserveAmPm === void 0) { preserveAmPm = true; }
        /** @type {?} */
        var maskWithAmPm = this.mask.replace(new RegExp('0', 'g'), this.promptChar).replace('LL', 'AM');
        /** @type {?} */
        var pureMask = this.mask.replace(new RegExp('0', 'g'), this.promptChar).replace(new RegExp('L', 'g'), this.promptChar);
        return preserveAmPm ? maskWithAmPm : pureMask;
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @return {?}
     */
    IgxTimePickerComponent.prototype.clear = /**
     * @hidden
     * @return {?}
     */
    function () {
        if (this.toggleRef.collapsed) {
            this.cleared = true;
            this.isNotEmpty = false;
            /** @type {?} */
            var oldVal = new Date(this.value);
            this.displayValue = '';
            this.value.setHours(0, 0);
            if (oldVal.getTime() !== this.value.getTime()) {
                /** @type {?} */
                var args = {
                    oldValue: oldVal,
                    newValue: this.value
                };
                this.onValueChanged.emit(args);
            }
        }
        else {
            this.close();
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
    IgxTimePickerComponent.prototype.onInput = /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var val = event.target.value;
        /** @type {?} */
        var oldVal = new Date(this.value);
        this.isNotEmpty = val !== this.parseMask(false);
        // handle cases where all empty positions (promts) are filled and we want to update
        // timepicker own value property if it is a valid Date
        if (val.indexOf(this.promptChar) === -1) {
            if (this._isEntryValid(val)) {
                /** @type {?} */
                var newVal = this._convertMinMaxValue(val);
                if (oldVal.getTime() !== newVal.getTime()) {
                    this.value = newVal;
                }
            }
            else {
                /** @type {?} */
                var args = {
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
                var args = {
                    oldValue: oldVal,
                    newValue: this.value
                };
                this.onValueChanged.emit(args);
            }
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
    IgxTimePickerComponent.prototype.onFocus = /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.isNotEmpty = event.target.value !== this.parseMask(false);
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    IgxTimePickerComponent.prototype.onBlur = /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var value = event.target.value;
        this.isNotEmpty = value !== '';
        this.displayValue = value;
        if (value && value !== this.parseMask()) {
            if (this._isEntryValid(value)) {
                /** @type {?} */
                var newVal = this._convertMinMaxValue(value);
                if (!this.value || this.value.getTime() !== newVal.getTime()) {
                    this.value = newVal;
                }
            }
            else {
                /** @type {?} */
                var args = {
                    timePicker: this,
                    currentValue: value,
                    setThroughUI: false
                };
                this.onValidationFailed.emit(args);
            }
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
    IgxTimePickerComponent.prototype.spinOnEdit = /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var _this = this;
        event.preventDefault();
        /** @type {?} */
        var sign;
        /** @type {?} */
        var displayVal;
        /** @type {?} */
        var currentVal = new Date(this.value);
        /** @type {?} */
        var min = this.minValue ? this._convertMinMaxValue(this.minValue) : this._convertMinMaxValue('00:00');
        /** @type {?} */
        var max = this.maxValue ? this._convertMinMaxValue(this.maxValue) : this._convertMinMaxValue('24:00');
        /** @type {?} */
        var cursor = this._getCursorPosition();
        if (event.key) {
            /** @type {?} */
            var key = event.key;
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
            var hDelta = this.itemsDelta.hours * 60 + (sign * this.value.getMinutes());
            /** @type {?} */
            var mDelta = this.itemsDelta.minutes;
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
                    var sections = this.displayValue.split(/[\s:]+/);
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
        requestAnimationFrame(function () {
            _this._setCursorPosition(cursor);
        });
    };
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
                    styles: [":host {\n            display: block;\n        }"]
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
        DeprecateProperty("'onOpen' @Output property is deprecated. Use 'onOpened' instead."),
        tslib_1.__metadata("design:type", EventEmitter),
        tslib_1.__metadata("design:paramtypes", [EventEmitter])
    ], IgxTimePickerComponent.prototype, "onOpen", null);
    tslib_1.__decorate([
        DeprecateProperty("'onClose' @Output property is deprecated. Use 'onClosed' instead."),
        tslib_1.__metadata("design:type", EventEmitter),
        tslib_1.__metadata("design:paramtypes", [EventEmitter])
    ], IgxTimePickerComponent.prototype, "onClose", null);
    return IgxTimePickerComponent;
}());
export { IgxTimePickerComponent };
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
var IgxTimePickerModule = /** @class */ (function () {
    function IgxTimePickerModule() {
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
    return IgxTimePickerModule;
}());
export { IgxTimePickerModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZS1waWNrZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vaWduaXRldWktYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi90aW1lLXBpY2tlci90aW1lLXBpY2tlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0gsWUFBWSxFQUNmLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUNILFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLFdBQVcsRUFDWCxZQUFZLEVBQ1osS0FBSyxFQUNMLFFBQVEsRUFHUixNQUFNLEVBQ04sV0FBVyxFQUNYLFNBQVMsRUFDVCxZQUFZLEVBQ1osVUFBVSxFQUViLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUN2RixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ25HLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ3hFLE9BQU8sRUFDSCxvQkFBb0IsRUFDcEIsb0JBQW9CLEVBQ3BCLG9CQUFvQixFQUNwQixzQkFBc0IsRUFDdEIsOEJBQThCLEVBQzlCLDZCQUE2QixFQUNoQyxNQUFNLDBCQUEwQixDQUFDO0FBQ2xDLE9BQU8sRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSx1QkFBdUIsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUU3RSxPQUFPLEVBQXFCLHlCQUF5QixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDcEYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDcEUsT0FBTyxFQUFFLG9C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QkFDdEIsb0JBQW9CO3dCQUNwQiw4QkFBOEI7d0JBQzlCLDZCQUE2Qjt3QkFDN0IscUJBQXFCO3dCQUNyQixtQkFBbUI7cUJBQ3RCO29CQUNELE9BQU8sRUFBRTt3QkFDTCxzQkFBc0I7d0JBQ3RCLDhCQUE4Qjt3QkFDOUIsNkJBQTZCO3dCQUM3QixxQkFBcUI7d0JBQ3JCLG1CQUFtQjtxQkFDdEI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNMLFlBQVk7d0JBQ1osbUJBQW1CO3dCQUNuQixhQUFhO3dCQUNiLGVBQWU7d0JBQ2YsYUFBYTt3QkFDYixlQUFlO3FCQUNsQjtvQkFDRCxTQUFTLEVBQUUsRUFBRTtpQkFDaEI7O0lBQ2tDLDBCQUFDO0NBQUEsQUE3QnBDLElBNkJvQztTQUF2QixtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIENvbW1vbk1vZHVsZVxufSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtcbiAgICBDb21wb25lbnQsXG4gICAgRWxlbWVudFJlZixcbiAgICBFdmVudEVtaXR0ZXIsXG4gICAgSG9zdEJpbmRpbmcsXG4gICAgSG9zdExpc3RlbmVyLFxuICAgIElucHV0LFxuICAgIE5nTW9kdWxlLFxuICAgIE9uRGVzdHJveSxcbiAgICBPbkluaXQsXG4gICAgT3V0cHV0LFxuICAgIFRlbXBsYXRlUmVmLFxuICAgIFZpZXdDaGlsZCxcbiAgICBDb250ZW50Q2hpbGQsXG4gICAgSW5qZWN0YWJsZSxcbiAgICBBZnRlclZpZXdJbml0XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgSEFNTUVSX0dFU1RVUkVfQ09ORklHLCBIYW1tZXJHZXN0dXJlQ29uZmlnIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBJZ3hJY29uTW9kdWxlIH0gZnJvbSAnLi4vaWNvbi9pbmRleCc7XG5pbXBvcnQgeyBJZ3hJbnB1dEdyb3VwTW9kdWxlLCBJZ3hJbnB1dEdyb3VwQ29tcG9uZW50IH0gZnJvbSAnLi4vaW5wdXQtZ3JvdXAvaW5wdXQtZ3JvdXAuY29tcG9uZW50JztcbmltcG9ydCB7IElneElucHV0RGlyZWN0aXZlIH0gZnJvbSAnLi4vZGlyZWN0aXZlcy9pbnB1dC9pbnB1dC5kaXJlY3RpdmUnO1xuaW1wb3J0IHtcbiAgICBJZ3hBbVBtSXRlbURpcmVjdGl2ZSxcbiAgICBJZ3hIb3VySXRlbURpcmVjdGl2ZSxcbiAgICBJZ3hJdGVtTGlzdERpcmVjdGl2ZSxcbiAgICBJZ3hNaW51dGVJdGVtRGlyZWN0aXZlLFxuICAgIElneFRpbWVQaWNrZXJUZW1wbGF0ZURpcmVjdGl2ZSxcbiAgICBJZ3hUaW1lUGlja2VyQWN0aW9uc0RpcmVjdGl2ZVxufSBmcm9tICcuL3RpbWUtcGlja2VyLmRpcmVjdGl2ZXMnO1xuaW1wb3J0IHsgU3ViamVjdCwgZnJvbUV2ZW50LCBpbnRlcnZhbCwgYW5pbWF0aW9uRnJhbWVTY2hlZHVsZXIgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEVkaXRvclByb3ZpZGVyIH0gZnJvbSAnLi4vY29yZS9lZGl0LXByb3ZpZGVyJztcbmltcG9ydCB7IElneFRpbWVQaWNrZXJCYXNlLCBJR1hfVElNRV9QSUNLRVJfQ09NUE9ORU5UIH0gZnJvbSAnLi90aW1lLXBpY2tlci5jb21tb24nO1xuaW1wb3J0IHsgQWJzb2x1dGVTY3JvbGxTdHJhdGVneSB9IGZyb20gJy4uL3NlcnZpY2VzL292ZXJsYXkvc2Nyb2xsJztcbmltcG9ydCB7IEF1dG9Qb3NpdGlvblN0cmF0ZWd5IH0gZnJvbSAnLi4vc2VydmljZXMvb3ZlcmxheS9wb3NpdGlvbic7XG5pbXBvcnQgeyBPdmVybGF5U2V0dGluZ3MgfSBmcm9tICcuLi9zZXJ2aWNlcy9vdmVybGF5L3V0aWxpdGllcyc7XG5pbXBvcnQgeyB0YWtlVW50aWwsIHRocm90dGxlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgSWd4QnV0dG9uTW9kdWxlIH0gZnJvbSAnLi4vZGlyZWN0aXZlcy9idXR0b24vYnV0dG9uLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBJZ3hNYXNrTW9kdWxlIH0gZnJvbSAnLi4vZGlyZWN0aXZlcy9tYXNrL21hc2suZGlyZWN0aXZlJztcbmltcG9ydCB7IElneE92ZXJsYXlPdXRsZXREaXJlY3RpdmUsIElneFRvZ2dsZU1vZHVsZSwgSWd4VG9nZ2xlRGlyZWN0aXZlIH0gZnJvbSAnLi4vZGlyZWN0aXZlcy90b2dnbGUvdG9nZ2xlLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBUaW1lRGlzcGxheUZvcm1hdFBpcGUsIFRpbWVJbnB1dEZvcm1hdFBpcGUgfSBmcm9tICcuL3RpbWUtcGlja2VyLnBpcGVzJztcbmltcG9ydCB7IElUaW1lUGlja2VyUmVzb3VyY2VTdHJpbmdzLCBUaW1lUGlja2VyUmVzb3VyY2VTdHJpbmdzRU4gfSBmcm9tICcuLi9jb3JlL2kxOG4vdGltZS1waWNrZXItcmVzb3VyY2VzJztcbmltcG9ydCB7IEN1cnJlbnRSZXNvdXJjZVN0cmluZ3MgfSBmcm9tICcuLi9jb3JlL2kxOG4vcmVzb3VyY2VzJztcbmltcG9ydCB7IEtFWVMsIENhbmNlbGFibGVCcm93c2VyRXZlbnRBcmdzIH0gZnJvbSAnLi4vY29yZS91dGlscyc7XG5pbXBvcnQgeyBJbnRlcmFjdGlvbk1vZGUgfSBmcm9tICcuLi9jb3JlL2VudW1zJztcbmltcG9ydCB7IERlcHJlY2F0ZVByb3BlcnR5IH0gZnJvbSAnLi4vY29yZS9kZXByZWNhdGVEZWNvcmF0b3JzJztcblxubGV0IE5FWFRfSUQgPSAwO1xuXG5jb25zdCBIT1VSU19QT1MgPSBbMCwgMSwgMl07XG5jb25zdCBNSU5VVEVTX1BPUyA9IFszLCA0LCA1XTtcbmNvbnN0IEFNUE1fUE9TID0gWzYsIDcsIDhdO1xuXG5jb25zdCBJVEVNU19DT1VOVCA9IDc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBUaW1lUGlja2VySGFtbWVyQ29uZmlnIGV4dGVuZHMgSGFtbWVyR2VzdHVyZUNvbmZpZyB7XG4gICAgcHVibGljIG92ZXJyaWRlcyA9IHtcbiAgICAgICAgcGFuOiB7IGRpcmVjdGlvbjogSGFtbWVyLkRJUkVDVElPTl9WRVJUSUNBTCwgdGhyZXNob2xkOiAxIH1cbiAgICB9O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElneFRpbWVQaWNrZXJWYWx1ZUNoYW5nZWRFdmVudEFyZ3Mge1xuICAgIG9sZFZhbHVlOiBEYXRlO1xuICAgIG5ld1ZhbHVlOiBEYXRlO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElneFRpbWVQaWNrZXJWYWxpZGF0aW9uRmFpbGVkRXZlbnRBcmdzIHtcbiAgICB0aW1lUGlja2VyOiBJZ3hUaW1lUGlja2VyQ29tcG9uZW50O1xuICAgIGN1cnJlbnRWYWx1ZTogRGF0ZTtcbiAgICBzZXRUaHJvdWdoVUk6IGJvb2xlYW47XG59XG5cbkBDb21wb25lbnQoe1xuICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7XG4gICAgICAgICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgICAgICAgIHVzZUV4aXN0aW5nOiBJZ3hUaW1lUGlja2VyQ29tcG9uZW50LFxuICAgICAgICAgICAgbXVsdGk6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgcHJvdmlkZTogSEFNTUVSX0dFU1RVUkVfQ09ORklHLFxuICAgICAgICAgICAgdXNlQ2xhc3M6IFRpbWVQaWNrZXJIYW1tZXJDb25maWdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgcHJvdmlkZTogSUdYX1RJTUVfUElDS0VSX0NPTVBPTkVOVCxcbiAgICAgICAgICAgIHVzZUV4aXN0aW5nOiBJZ3hUaW1lUGlja2VyQ29tcG9uZW50XG4gICAgICAgIH1cbiAgICBdLFxuICAgIHNlbGVjdG9yOiAnaWd4LXRpbWUtcGlja2VyJyxcbiAgICB0ZW1wbGF0ZVVybDogJ3RpbWUtcGlja2VyLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZXM6IFtcbiAgICAgICAgYDpob3N0IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB9YFxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgSWd4VGltZVBpY2tlckNvbXBvbmVudCBpbXBsZW1lbnRzXG4gICAgSWd4VGltZVBpY2tlckJhc2UsXG4gICAgQ29udHJvbFZhbHVlQWNjZXNzb3IsXG4gICAgRWRpdG9yUHJvdmlkZXIsXG4gICAgT25Jbml0LFxuICAgIE9uRGVzdHJveSxcbiAgICBBZnRlclZpZXdJbml0IHtcblxuICAgIC8qKlxuICAgICAqIEFuIEBJbnB1dCBwcm9wZXJ0eSB0aGF0IHNldHMgdGhlIHZhbHVlIG9mIHRoZSBgaWRgIGF0dHJpYnV0ZS5cbiAgICAgKiBgYGBodG1sXG4gICAgICogPGlneC10aW1lLXBpY2tlciBbaWRdPVwiJ2lneC10aW1lLXBpY2tlci01J1wiIGZvcm1hdD1cImg6bW0gdHRcIiA+PC9pZ3gtdGltZS1waWNrZXI+XG4gICAgICogYGBgXG4gICAgICovXG4gICAgQEhvc3RCaW5kaW5nKCdhdHRyLmlkJylcbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBpZCA9IGBpZ3gtdGltZS1waWNrZXItJHtORVhUX0lEKyt9YDtcblxuICAgIC8qKlxuICAgICAqIEFuIGFjY2Vzc29yIHRoYXQgYWxsb3dzIHlvdSB0byBzZXQgYSB0aW1lIHVzaW5nIHRoZSBgdmFsdWVgIGlucHV0LlxuICAgICAqIGBgYGh0bWxcbiAgICAgKnB1YmxpYyBkYXRlOiBEYXRlID0gbmV3IERhdGUoRGF0ZS5ub3coKSk7XG4gICAgICogIC8vLi4uXG4gICAgICo8aWd4LXRpbWUtcGlja2VyIFt2YWx1ZV09XCJkYXRlXCIgZm9ybWF0PVwiaDptbSB0dFwiPjwvaWd4LXRpbWUtcGlja2VyPlxuICAgICAqIGBgYFxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgc2V0IHZhbHVlKHZhbHVlOiBEYXRlKSB7XG4gICAgICAgIGlmICh0aGlzLl9pc1ZhbHVlVmFsaWQodmFsdWUpKSB7XG4gICAgICAgICAgICBjb25zdCBvbGRWYWwgPSB0aGlzLl92YWx1ZTtcblxuICAgICAgICAgICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgICAgIHRoaXMuX29uQ2hhbmdlQ2FsbGJhY2sodmFsdWUpO1xuXG4gICAgICAgICAgICBjb25zdCBkaXNwVmFsID0gdGhpcy5fZm9ybWF0VGltZSh0aGlzLnZhbHVlLCB0aGlzLmZvcm1hdCk7XG4gICAgICAgICAgICBpZiAodGhpcy5tb2RlID09PSBJbnRlcmFjdGlvbk1vZGUuRHJvcERvd24gJiYgdGhpcy5fZGlzcGxheVZhbHVlICE9PSBkaXNwVmFsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kaXNwbGF5VmFsdWUgPSBkaXNwVmFsO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBhcmdzOiBJZ3hUaW1lUGlja2VyVmFsdWVDaGFuZ2VkRXZlbnRBcmdzID0ge1xuICAgICAgICAgICAgICAgIG9sZFZhbHVlOiBvbGRWYWwsXG4gICAgICAgICAgICAgICAgbmV3VmFsdWU6IHZhbHVlXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdGhpcy5vblZhbHVlQ2hhbmdlZC5lbWl0KGFyZ3MpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgYXJnczogSWd4VGltZVBpY2tlclZhbGlkYXRpb25GYWlsZWRFdmVudEFyZ3MgPSB7XG4gICAgICAgICAgICAgICAgdGltZVBpY2tlcjogdGhpcyxcbiAgICAgICAgICAgICAgICBjdXJyZW50VmFsdWU6IHZhbHVlLFxuICAgICAgICAgICAgICAgIHNldFRocm91Z2hVSTogZmFsc2VcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB0aGlzLm9uVmFsaWRhdGlvbkZhaWxlZC5lbWl0KGFyZ3MpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQW4gYWNjZXNzb3IgdGhhdCByZXR1cm5zIHRoZSB2YWx1ZSBvZiBgaWd4LXRpbWUtcGlja2VyYCBjb21wb25lbnQuXG4gICAgICogYGBgaHRtbFxuICAgICAqQFZpZXdDaGlsZChcIk15UGlja1wiKVxuICAgICAqcHVibGljIHBpY2s6IElneFRpbWVQaWNrZXJDb21wb25lbnQ7XG4gICAgICpuZ0FmdGVyVmlld0luaXQoKXtcbiAgICAgKiAgICBsZXQgcGlja1NlbGVjdCA9IHRoaXMucGljay52YWx1ZTtcbiAgICAgKiB9XG4gICAgICogYGBgXG4gICAgICovXG4gICAgZ2V0IHZhbHVlKCk6IERhdGUge1xuICAgICAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQW4gQElucHV0IHByb3BlcnR5IHRoYXQgYWxsb3dzIHlvdSB0byBkaXNhYmxlIHRoZSBgaWd4LXRpbWUtcGlja2VyYCBjb21wb25lbnQuIEJ5IGRlZmF1bHQgYGRpc2FibGVkYCBpcyBzZXQgdG8gZmFsc2UuXG4gICAgICogYGBgaHRtbFxuICAgICAqIDxpZ3gtdGltZS1waWNrZXIgW2Rpc2FibGVkXT1cIid0cnVlJ1wiIFt2ZXJ0aWNhbF09XCJ0cnVlXCIgZm9ybWF0PVwiaDptbSB0dFwiID48L2lneC10aW1lLXBpY2tlcj5cbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBkaXNhYmxlZCA9IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICogQW4gYWNjZXNzb3IgdGhhdCBzZXRzIHRoZSByZXNvdXJjZSBzdHJpbmdzLlxuICAgICAqIEJ5IGRlZmF1bHQgaXQgdXNlcyBFTiByZXNvdXJjZXMuXG4gICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHNldCByZXNvdXJjZVN0cmluZ3ModmFsdWU6IElUaW1lUGlja2VyUmVzb3VyY2VTdHJpbmdzKSB7XG4gICAgICAgIHRoaXMuX3Jlc291cmNlU3RyaW5ncyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuX3Jlc291cmNlU3RyaW5ncywgdmFsdWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFuIGFjY2Vzc29yIHRoYXQgcmV0dXJucyB0aGUgcmVzb3VyY2Ugc3RyaW5ncy5cbiAgICAqL1xuICAgIGdldCByZXNvdXJjZVN0cmluZ3MoKTogSVRpbWVQaWNrZXJSZXNvdXJjZVN0cmluZ3Mge1xuICAgICAgICByZXR1cm4gdGhpcy5fcmVzb3VyY2VTdHJpbmdzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFuIEBJbnB1dCBwcm9wZXJ0eSB0aGF0IHJlbmRlcnMgT0sgYnV0dG9uIHdpdGggY3VzdG9tIHRleHQuIEJ5IGRlZmF1bHQgYG9rQnV0dG9uTGFiZWxgIGlzIHNldCB0byBPSy5cbiAgICAgKiBgYGBodG1sXG4gICAgICogPGlneC10aW1lLXBpY2tlciBva0J1dHRvbkxhYmVsPSdTRVQnIFt2YWx1ZV09XCJkYXRlXCIgZm9ybWF0PVwiaDptbSB0dFwiPjwvaWd4LXRpbWUtcGlja2VyPlxuICAgICAqIGBgYFxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgc2V0IG9rQnV0dG9uTGFiZWwodmFsdWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLl9va0J1dHRvbkxhYmVsID0gdmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQW4gYWNjZXNzb3IgdGhhdCByZXR1cm5zIHRoZSBsYWJlbCBvZiBvayBidXR0b24uXG4gICAgKi9cbiAgICBnZXQgb2tCdXR0b25MYWJlbCgpOiBzdHJpbmcge1xuICAgICAgICBpZiAodGhpcy5fb2tCdXR0b25MYWJlbCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVzb3VyY2VTdHJpbmdzLmlneF90aW1lX3BpY2tlcl9vaztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fb2tCdXR0b25MYWJlbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBbiBASW5wdXQgcHJvcGVydHkgdGhhdCByZW5kZXJzIGNhbmNlbCBidXR0b24gd2l0aCBjdXN0b20gdGV4dC5cbiAgICAgKiBCeSBkZWZhdWx0IGBjYW5jZWxCdXR0b25MYWJlbGAgaXMgc2V0IHRvIENhbmNlbC5cbiAgICAgKiBgYGBodG1sXG4gICAgICogPGlneC10aW1lLXBpY2tlciBjYW5jZWxCdXR0b25MYWJlbD0nRXhpdCcgW3ZhbHVlXT1cImRhdGVcIiBmb3JtYXQ9XCJoOm1tIHR0XCI+PC9pZ3gtdGltZS1waWNrZXI+XG4gICAgICogYGBgXG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBzZXQgY2FuY2VsQnV0dG9uTGFiZWwodmFsdWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLl9jYW5jZWxCdXR0b25MYWJlbCA9IHZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogQW4gYWNjZXNzb3IgdGhhdCByZXR1cm5zIHRoZSBsYWJlbCBvZiBjYW5jZWwgYnV0dG9uLlxuICAgICovXG4gICAgZ2V0IGNhbmNlbEJ1dHRvbkxhYmVsKCk6IHN0cmluZyB7XG4gICAgICAgIGlmICh0aGlzLl9jYW5jZWxCdXR0b25MYWJlbCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVzb3VyY2VTdHJpbmdzLmlneF90aW1lX3BpY2tlcl9jYW5jZWw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX2NhbmNlbEJ1dHRvbkxhYmVsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFuIEBJbnB1dCBwcm9wZXJ0eSB0aGF0IGdldHMvc2V0cyB0aGUgZGVsdGEgYnkgd2hpY2ggaG91ciBhbmQgbWludXRlIGl0ZW1zIHdvdWxkIGJlIGNoYW5nZWQgPGJyPlxuICAgICAqIHdoZW4gdGhlIHVzZXIgcHJlc3NlcyB0aGUgVXAvRG93biBrZXlzLlxuICAgICAqIEJ5IGRlZmF1bHQgYGl0ZW1zRGVsdGFgIGlzIHNldCB0byBge2hvdXJzOiAxLCBtaW51dGVzOjF9YFxuICAgICAqIGBgYGh0bWxcbiAgICAgKjxpZ3gtdGltZS1waWNrZXIgW2l0ZW1zRGVsdGFdPVwie2hvdXJzOjMsIG1pbnV0ZXM6NX1cIiBpZD1cInRpbWUtcGlja2VyXCI+PC9pZ3gtdGltZS1waWNrZXI+XG4gICAgICpgYGBcbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBpdGVtc0RlbHRhID0geyBob3VyczogMSwgbWludXRlczogMSB9O1xuXG4gICAgLyoqXG4gICAgICogQW4gQElucHV0IHByb3BlcnR5IHRoYXQgYWxsb3dzIHlvdSB0byBzZXQgdGhlIGBtaW5WYWx1ZWAgdG8gbGltaXQgdGhlIHVzZXIgaW5wdXQuXG4gICAgICpgYGBodG1sXG4gICAgICpwdWJsaWMgbWluOiBzdHJpbmcgPSBcIjA5OjAwXCI7XG4gICAgICogIC8vLi5cbiAgICAgKjxpZ3gtdGltZS1waWNrZXIgZm9ybWF0PVwiSEg6bW1cIiBbdmVydGljYWxdPVwidHJ1ZVwiIFttaW5WYWx1ZV09XCJtaW5cIj48L2lneC10aW1lLXBpY2tlcj5cbiAgICAgKmBgYFxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIG1pblZhbHVlOiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBBbiBASW5wdXQgcHJvcGVydHkgdGhhdCBhbGxvd3MgeW91IHRvIHNldCB0aGUgYG1heFZhbHVlYCB0byBsaW1pdCB0aGUgdXNlciBpbnB1dC5cbiAgICAgKmBgYGh0bWxcbiAgICAgKnB1YmxpYyBtYXg6IHN0cmluZyA9IFwiMTg6MDBcIjtcbiAgICAgKiAgLy8uLlxuICAgICAqPGlneC10aW1lLXBpY2tlciBmb3JtYXQ9XCJISDptbVwiIFt2ZXJ0aWNhbF09XCJ0cnVlXCIgW21heFZhbHVlXT1cIm1heFwiPjwvaWd4LXRpbWUtcGlja2VyPlxuICAgICAqYGBgXG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgbWF4VmFsdWU6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEFuIEBJbnB1dCBwcm9wZXJ0eSB0aGF0IGRldGVybWluZXMgdGhlIHNwaW4gYmVoYXZpb3IuIEJ5IGRlZmF1bHQgYGlzU3Bpbkxvb3BgIGlzIHNldCB0byB0cnVlLlxuICAgICAqVGhlIG1pbnV0ZXMgYW5kIGhvdXIgc3Bpbm5pbmcgd2lsbCB3cmFwIGFyb3VuZCBieSBkZWZhdWx0LlxuICAgICAqYGBgaHRtbFxuICAgICAqPGlneC10aW1lLXBpY2tlciBbaXNTcGluTG9vcF09XCJmYWxzZVwiIGlkPVwidGltZS1waWNrZXJcIj48L2lneC10aW1lLXBpY2tlcj5cbiAgICAgKmBgYFxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGlzU3Bpbkxvb3AgPSB0cnVlO1xuXG4gICAgLyoqXG4gICAgICogQW4gQElucHV0IHByb3BlcnR5IHRoYXQgR2V0cy9TZXRzIHRoZSBvcmllbnRhdGlvbiBvZiB0aGUgYGlneFRpbWVQaWNrZXJgLiBCeSBkZWZhdWx0IGB2ZXJ0aWNhbGAgaXMgc2V0IHRvIGZhbHNlLlxuICAgICAqIGBgYGh0bWxcbiAgICAgKjxpZ3gtdGltZS1waWNrZXIgW3ZlcnRpY2FsXT1cInRydWVcIiBpZD1cInRpbWUtcGlja2VyXCI+PC9pZ3gtdGltZS1waWNrZXI+XG4gICAgICogYGBgXG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgdmVydGljYWwgPSBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqIEFuIEBJbnB1dCBwcm9wZXJ0eSB0aGF0IEdldHMvU2V0cyBmb3JtYXQgb2YgdGltZSB3aGlsZSBgaWd4VGltZVBpY2tlcmAgZG9lcyBub3QgaGF2ZSBmb2N1cy4gPGJyPlxuICAgICAqIEJ5IGRlZmF1bHQgYGZvcm1hdGAgaXMgc2V0IHRvIGhoOm1tIHR0LiA8YnI+XG4gICAgICogTGlzdCBvZiB0aW1lLWZsYWdzOiA8YnI+XG4gICAgICogYGhgIDogaG91cnMgZmllbGQgaW4gMTItaG91cnMgZm9ybWF0IHdpdGhvdXQgbGVhZGluZyB6ZXJvIDxicj5cbiAgICAgKiBgaGhgIDogaG91cnMgZmllbGQgaW4gMTItaG91cnMgZm9ybWF0IHdpdGggbGVhZGluZyB6ZXJvIDxicj5cbiAgICAgKiBgSGAgOiBob3VycyBmaWVsZCBpbiAyNC1ob3VycyBmb3JtYXQgd2l0aG91dCBsZWFkaW5nIHplcm8gPGJyPlxuICAgICAqIGBISGAgOiBob3VycyBmaWVsZCBpbiAyNC1ob3VycyBmb3JtYXQgd2l0aCBsZWFkaW5nIHplcm8gPGJyPlxuICAgICAqIGBtYCA6IG1pbnV0ZXMgZmllbGQgd2l0aG91dCBsZWFkaW5nIHplcm8gPGJyPlxuICAgICAqIGBtbWAgOiBtaW51dGVzIGZpZWxkIHdpdGggbGVhZGluZyB6ZXJvIDxicj5cbiAgICAgKiBgdHRgIDogMiBjaGFyYWN0ZXIgc3RyaW5nIHdoaWNoIHJlcHJlc2VudHMgQU0vUE0gZmllbGQgPGJyPlxuICAgICAqIGBgYGh0bWxcbiAgICAgKjxpZ3gtdGltZS1waWNrZXIgZm9ybWF0PVwiSEg6bVwiIGlkPVwidGltZS1waWNrZXJcIj48L2lneC10aW1lLXBpY2tlcj5cbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIGdldCBmb3JtYXQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9mb3JtYXQgfHwgJ2hoOm1tIHR0JztcbiAgICB9XG5cbiAgICBzZXQgZm9ybWF0KGZvcm1hdFZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fZm9ybWF0ID0gZm9ybWF0VmFsdWU7XG4gICAgICAgIHRoaXMubWFzayA9IHRoaXMuX2Zvcm1hdC5pbmRleE9mKCd0dCcpICE9PSAtMSA/ICcwMDowMCBMTCcgOiAnMDA6MDAnO1xuXG4gICAgICAgIGlmICghdGhpcy5zaG93SG91cnNMaXN0IHx8ICF0aGlzLnNob3dNaW51dGVzTGlzdCkge1xuICAgICAgICAgICAgdGhpcy5tYXNrID0gdGhpcy5tYXNrLnNsaWNlKHRoaXMubWFzay5pbmRleE9mKCc6JykgKyAxLCB0aGlzLm1hc2subGVuZ3RoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmRpc3BsYXlWYWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5kaXNwbGF5VmFsdWUgPSB0aGlzLl9mb3JtYXRUaW1lKHRoaXMudmFsdWUsIHRoaXMuX2Zvcm1hdCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBjaGFyYWN0ZXIgdXNlZCB0byBwcm9tcHQgdGhlIHVzZXIgZm9yIGlucHV0LlxuICAgICAqIERlZmF1bHQgdmFsdWUgaXMgXCInLSdcIi5cbiAgICAgKiBgYGBodG1sXG4gICAgICogPGlneC10aW1lLXBpY2tlciBbcHJvbXB0Q2hhcl0gPSBcIidfJ1wiPlxuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hUaW1lUGlja2VyQ29tcG9uZW50XG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgcHJvbXB0Q2hhciA9ICctJztcblxuICAgIC8qKlxuICAgICAqIEFuIEBJbnB1dCBwcm9wZXJ0eSB0aGF0IGFsbG93cyB5b3UgdG8gc3dpdGNoIHRoZSBpbnRlcmFjdGlvbiBtb2RlIGJldHdlZW5cbiAgICAgKiBhIGRpYWxvZyBwaWNrZXIgb3IgZHJvcGRvd24gd2l0aCBlZGl0YWJsZSBtYXNrZWQgaW5wdXQuXG4gICAgICogRGVhZnVsdCBpcyBkaWFsb2cgcGlja2VyLlxuICAgICAqYGBgaHRtbFxuICAgICAqcHVibGljIG1vZGUgPSBJbnRlcmFjdGlvbk1vZGUuRFJPUERPV047XG4gICAgICogIC8vLi5cbiAgICAgKjxpZ3gtdGltZS1waWNrZXIgW21vZGVdPVwibW9kZVwiPjwvaWd4LXRpbWUtcGlja2VyPlxuICAgICAqYGBgXG4gICAgICogQG1lbWJlcm9mIElneFRpbWVQaWNrZXJDb21wb25lbnRcbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBtb2RlID0gSW50ZXJhY3Rpb25Nb2RlLkRpYWxvZztcblxuICAgIC8qKlxuICAgICAqIERldGVybWluZXMgdGhlIGNvbnRhaW5lciB0aGUgcG9wdXAgZWxlbWVudCBzaG91bGQgYmUgYXR0YWNoZWQgdG8uXG4gICAgICpcbiAgICAgKiBgYGBodG1sXG4gICAgICogPGRpdiBpZ3hPdmVybGF5T3V0bGV0ICNvdXRsZXQ9XCJvdmVybGF5LW91dGxldFwiPjwvZGl2PlxuICAgICAqIC8vLi5cbiAgICAgKiA8aWd4LXRpbWUtcGlja2VyIFtvdXRsZXRdPVwib3V0bGV0XCI+PC9pZ3gtdGltZS1waWNrZXI+XG4gICAgICogLy8uLlxuICAgICAqIGBgYFxuICAgICAqIFdoZXJlIGBvdXRsZXRgIGlzIGFuIGluc3RhbmNlIG9mIGBJZ3hPdmVybGF5T3V0bGV0RGlyZWN0aXZlYCBvciBhbiBgRWxlbWVudFJlZmAuXG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgb3V0bGV0OiBJZ3hPdmVybGF5T3V0bGV0RGlyZWN0aXZlIHwgRWxlbWVudFJlZjtcblxuICAgIC8qKlxuICAgICogQW4gQElucHV0IHByb3BlcnR5IHRoYXQgYWxsb3dzIHlvdSB0byBtb2RpZnkgb3ZlcmxheSBwb3NpdGlvbmluZywgaW50ZXJhY3Rpb24gYW5kIHNjcm9sbCBiZWhhdmlvci5cbiAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAqIGNvbnN0IHNldHRpbmdzOiBPdmVybGF5U2V0dGluZ3MgPSB7XG4gICAgKiAgICAgIGNsb3NlT25PdXRzaWRlQ2xpY2s6IHRydWUsXG4gICAgKiAgICAgIG1vZGFsOiBmYWxzZVxuICAgICogIH1cbiAgICAqIGBgYFxuICAgICogLS0tXG4gICAgKiBgYGBodG1sXG4gICAgKiA8aWd4LXRpbWUtcGlja2VyIFtvdmVybGF5U2V0dGluZ3NdPVwic2V0dGluZ3NcIj48L2lneC10aW1lLXBpY2tlcj5cbiAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hUaW1lUGlja2VyQ29tcG9uZW50XG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgc2V0IG92ZXJsYXlTZXR0aW5ncyh2YWx1ZTogT3ZlcmxheVNldHRpbmdzKSB7XG4gICAgICAgIHRoaXMuX292ZXJsYXlTZXR0aW5ncyA9IHZhbHVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgb3ZlcmxheVNldHRpbmdzKCk6IE92ZXJsYXlTZXR0aW5ncyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9vdmVybGF5U2V0dGluZ3MgPyB0aGlzLl9vdmVybGF5U2V0dGluZ3MgOlxuICAgICAgICAgICAgKHRoaXMubW9kZSA9PT0gSW50ZXJhY3Rpb25Nb2RlLkRpYWxvZyA/IHRoaXMuX2RpYWxvZ092ZXJsYXlTZXR0aW5ncyA6IHRoaXMuX2Ryb3BEb3duT3ZlcmxheVNldHRpbmdzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBFbWl0dGVkIHdoZW4gc2VsZWN0aW9uIGlzIG1hZGUuIFRoZSBldmVudCBjb250YWlucyB0aGUgc2VsZWN0ZWQgdmFsdWUuIFJldHVybnMge2BvbGRWYWx1ZWA6IGBEYXRlYCwgYG5ld1ZhbHVlYDogYERhdGVgfS5cbiAgICAgKmBgYHR5cGVzY3JpcHRcbiAgICAgKiBAVmlld0NoaWxkKFwidG9hc3RcIilcbiAgICAgKnByaXZhdGUgdG9hc3Q6IElneFRvYXN0Q29tcG9uZW50O1xuICAgICAqcHVibGljIG9uVmFsdWVDaGFuZ2VkKHRpbWVwaWNrZXIpe1xuICAgICAqICAgIHRoaXMudG9hc3Quc2hvdygpXG4gICAgICp9XG4gICAgICogLy8uLi5cbiAgICAgKiBgYGBcbiAgICAgKiBgYGBodG1sXG4gICAgICo8aWd4LXRpbWUtcGlja2VyIChvblZhbHVlQ2hhbmdlZCk9XCJvblZhbHVlQ2hhbmdlZCgkZXZlbnQpXCI+PC9pZ3gtdGltZS1waWNrZXI+XG4gICAgICo8aWd4LXRvYXN0ICN0b2FzdCBtZXNzYWdlPVwiVGhlIHZhbHVlIGhhcyBiZWVuIGNoYW5nZWQhXCI+PC9pZ3gtdG9hc3Q+XG4gICAgICpgYGBcbiAgICAgKi9cbiAgICBAT3V0cHV0KClcbiAgICBwdWJsaWMgb25WYWx1ZUNoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyPElneFRpbWVQaWNrZXJWYWx1ZUNoYW5nZWRFdmVudEFyZ3M+KCk7XG5cbiAgICAvKipcbiAgICAgKiBFbWl0dGVkIHdoZW4gYW4gaW52YWxpZCB2YWx1ZSBpcyBiZWluZyBzZXQuIFJldHVybnMge2B0aW1lUGlja2VyYDogYGFueWAsIGBjdXJyZW50VmFsdWVgOiBgRGF0ZWAsIGBzZXRUaHJvdWdoVUlgOiBgYm9vbGVhbmB9XG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqcHVibGljIG1pbjogc3RyaW5nID0gXCIwOTowMFwiO1xuICAgICAqcHVibGljIG1heDogc3RyaW5nID0gXCIxODowMFwiO1xuICAgICAqQFZpZXdDaGlsZChcInRvYXN0XCIpXG4gICAgICpwcml2YXRlIHRvYXN0OiBJZ3hUb2FzdENvbXBvbmVudDtcbiAgICAgKnB1YmxpYyBvblZhbGlkYXRpb25GYWlsZWQodGltZXBpY2tlcil7XG4gICAgICogICAgdGhpcy50b2FzdC5zaG93KCk7XG4gICAgICp9XG4gICAgICogLy8uLi5cbiAgICAgKiBgYGBcbiAgICAgKiBgYGBodG1sXG4gICAgICo8aWd4LXRpbWUtcGlja2VyIFttaW5WYWx1ZV09XCJtaW5cIiBbbWF4VmFsdWVdPVwibWF4XCIgKG9uVmFsaWRhdGlvbkZhaWxlZCk9XCJvblZhbGlkYXRpb25GYWlsZWQoJGV2ZW50KVwiPjwvaWd4LXRpbWUtcGlja2VyPlxuICAgICAqPGlneC10b2FzdCAjdG9hc3QgbWVzc2FnZT1cIlZhbHVlIG11c3QgYmUgYmV0d2VlbiAwOTowMCBhbmQgMTg6MDAhXCI+PC9pZ3gtdG9hc3Q+XG4gICAgICogYGBgXG4gICAgICovXG4gICAgQE91dHB1dCgpXG4gICAgcHVibGljIG9uVmFsaWRhdGlvbkZhaWxlZCA9IG5ldyBFdmVudEVtaXR0ZXI8SWd4VGltZVBpY2tlclZhbGlkYXRpb25GYWlsZWRFdmVudEFyZ3M+KCk7XG5cbiAgICAvKipcbiAgICAgKiBAZGVwcmVjYXRlZCBVc2UgJ29uT3BlbmVkJyBpbnN0ZWFkLlxuICAgICAqIEVtaXR0ZWQgd2hlbiBhIHRpbWVQaWNrZXIgaXMgYmVpbmcgb3BlbmVkLlxuICAgICAqIGBgYGh0bWxcbiAgICAgKkBWaWV3Q2hpbGQoXCJ0b2FzdFwiKVxuICAgICAqcHJpdmF0ZSB0b2FzdDogSWd4VG9hc3RDb21wb25lbnQ7XG4gICAgICpwdWJsaWMgb25PcGVuKHRpbWVwaWNrZXIpe1xuICAgICAqICAgIHRoaXMudG9hc3Quc2hvdygpO1xuICAgICAqfVxuICAgICAqIC8vLi4uXG4gICAgICogYGBgXG4gICAgICogYGBgaHRtbFxuICAgICAqPGlneC10aW1lLXBpY2tlciBbbWluVmFsdWVdPVwibWluXCIgW21heFZhbHVlXT1cIm1heFwiIChvbk9wZW4pPVwib25PcGVuKCRldmVudClcIj48L2lneC10aW1lLXBpY2tlcj5cbiAgICAgKjxpZ3gtdG9hc3QgI3RvYXN0IG1lc3NhZ2U9XCJUaGUgdGltZSBwaWNrZXIgaGFzIGJlZW4gb3BlbmVkIVwiPjwvaWd4LXRvYXN0PlxuICAgICAqIGBgYFxuICAgICAqL1xuICAgIEBEZXByZWNhdGVQcm9wZXJ0eShgJ29uT3BlbicgQE91dHB1dCBwcm9wZXJ0eSBpcyBkZXByZWNhdGVkLiBVc2UgJ29uT3BlbmVkJyBpbnN0ZWFkLmApXG4gICAgQE91dHB1dCgpXG4gICAgcHVibGljIGdldCBvbk9wZW4oKTogRXZlbnRFbWl0dGVyPElneFRpbWVQaWNrZXJDb21wb25lbnQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX29uT3BlbjtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IG9uT3Blbih2YWw6IEV2ZW50RW1pdHRlcjxJZ3hUaW1lUGlja2VyQ29tcG9uZW50Pikge1xuICAgICAgICB0aGlzLl9vbk9wZW4gPSB2YWw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRW1pdHRlZCB3aGVuIGEgdGltZVBpY2tlciBpcyBvcGVuZWQuXG4gICAgICovXG4gICAgQE91dHB1dCgpXG4gICAgcHVibGljIG9uT3BlbmVkID0gbmV3IEV2ZW50RW1pdHRlcjxJZ3hUaW1lUGlja2VyQ29tcG9uZW50PigpO1xuXG4gICAgLyoqXG4gICAgICogQGRlcHJlY2F0ZWQgVXNlICdvbkNsb3NlZCcgaW5zdGVhZC5cbiAgICAgKiBFbWl0dGVkIHdoZW4gYSB0aW1lUGlja2VyIGlzIGJlaW5nIGNsb3NlZC5cbiAgICAgKi9cbiAgICBARGVwcmVjYXRlUHJvcGVydHkoYCdvbkNsb3NlJyBAT3V0cHV0IHByb3BlcnR5IGlzIGRlcHJlY2F0ZWQuIFVzZSAnb25DbG9zZWQnIGluc3RlYWQuYClcbiAgICBAT3V0cHV0KClcbiAgICBwdWJsaWMgZ2V0IG9uQ2xvc2UoKTogRXZlbnRFbWl0dGVyPElneFRpbWVQaWNrZXJDb21wb25lbnQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX29uQ2xvc2U7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBvbkNsb3NlKHZhbDogRXZlbnRFbWl0dGVyPElneFRpbWVQaWNrZXJDb21wb25lbnQ+KSB7XG4gICAgICAgIHRoaXMuX29uQ2xvc2UgPSB2YWw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRW1pdHRlZCB3aGVuIGEgdGltZVBpY2tlciBpcyBjbG9zZWQuXG4gICAgICovXG4gICAgQE91dHB1dCgpXG4gICAgcHVibGljIG9uQ2xvc2VkID0gbmV3IEV2ZW50RW1pdHRlcjxJZ3hUaW1lUGlja2VyQ29tcG9uZW50PigpO1xuXG4gICAgLyoqXG4gICAgICogRW1pdHRlZCB3aGVuIGEgdGltZVBpY2tlciBpcyBiZWluZyBjbG9zZWQuXG4gICAgICovXG4gICAgQE91dHB1dCgpXG4gICAgcHVibGljIG9uQ2xvc2luZyA9IG5ldyBFdmVudEVtaXR0ZXI8Q2FuY2VsYWJsZUJyb3dzZXJFdmVudEFyZ3M+KCk7XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgQFZpZXdDaGlsZCgnaG91ckxpc3QnLCB7IHN0YXRpYzogZmFsc2UgfSlcbiAgICBwdWJsaWMgaG91ckxpc3Q6IEVsZW1lbnRSZWY7XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgQFZpZXdDaGlsZCgnbWludXRlTGlzdCcsIHsgc3RhdGljOiBmYWxzZSB9KVxuICAgIHB1YmxpYyBtaW51dGVMaXN0OiBFbGVtZW50UmVmO1xuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIEBWaWV3Q2hpbGQoJ2FtcG1MaXN0JywgeyBzdGF0aWM6IGZhbHNlIH0pXG4gICAgcHVibGljIGFtcG1MaXN0OiBFbGVtZW50UmVmO1xuXG4gICAgLypcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgQFZpZXdDaGlsZCgnZGVmYXVsdFRpbWVQaWNrZXJUZW1wbGF0ZScsIHsgcmVhZDogVGVtcGxhdGVSZWYsIHN0YXRpYzogdHJ1ZSB9KVxuICAgIHByb3RlY3RlZCBkZWZhdWx0VGltZVBpY2tlclRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gICAgLyoqXG4gICAgICpAaGlkZGVuXG4gICAgICovXG4gICAgQENvbnRlbnRDaGlsZChJZ3hUaW1lUGlja2VyVGVtcGxhdGVEaXJlY3RpdmUsIHsgcmVhZDogSWd4VGltZVBpY2tlclRlbXBsYXRlRGlyZWN0aXZlLCBzdGF0aWM6IHRydWUgfSlcbiAgICBwcm90ZWN0ZWQgdGltZVBpY2tlclRlbXBsYXRlRGlyZWN0aXZlOiBJZ3hUaW1lUGlja2VyVGVtcGxhdGVEaXJlY3RpdmU7XG5cbiAgICAvKipcbiAgICAgKkBoaWRkZW5cbiAgICAgKi9cbiAgICBAQ29udGVudENoaWxkKElneFRpbWVQaWNrZXJBY3Rpb25zRGlyZWN0aXZlLCB7IHJlYWQ6IElneFRpbWVQaWNrZXJBY3Rpb25zRGlyZWN0aXZlLCBzdGF0aWM6IGZhbHNlIH0pXG4gICAgcHVibGljIHRpbWVQaWNrZXJBY3Rpb25zRGlyZWN0aXZlOiBJZ3hUaW1lUGlja2VyQWN0aW9uc0RpcmVjdGl2ZTtcblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBAVmlld0NoaWxkKElneElucHV0RGlyZWN0aXZlLCB7IHJlYWQ6IEVsZW1lbnRSZWYsIHN0YXRpYzogZmFsc2UgfSlcbiAgICBwcml2YXRlIF9pbnB1dDogRWxlbWVudFJlZjtcblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBAVmlld0NoaWxkKElneFRvZ2dsZURpcmVjdGl2ZSwgeyBzdGF0aWM6IHRydWUgfSlcbiAgICBwdWJsaWMgdG9nZ2xlUmVmOiBJZ3hUb2dnbGVEaXJlY3RpdmU7XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgQFZpZXdDaGlsZCgnaW5wdXQnLCB7IHJlYWQ6IEVsZW1lbnRSZWYsIHN0YXRpYzogZmFsc2UgfSlcbiAgICBwcml2YXRlIGlucHV0OiBFbGVtZW50UmVmO1xuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIEBWaWV3Q2hpbGQoJ2dyb3VwJywgeyByZWFkOiBJZ3hJbnB1dEdyb3VwQ29tcG9uZW50LCBzdGF0aWM6IGZhbHNlIH0pXG4gICAgcHJpdmF0ZSBncm91cDogSWd4SW5wdXRHcm91cENvbXBvbmVudDtcblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBAVmlld0NoaWxkKCdkcm9wZG93bklucHV0VGVtcGxhdGUnLCB7IHJlYWQ6IFRlbXBsYXRlUmVmLCBzdGF0aWM6IHRydWUgfSlcbiAgICBwcml2YXRlIGRyb3Bkb3duSW5wdXRUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICAgIHByaXZhdGUgX292ZXJsYXlTZXR0aW5nczogT3ZlcmxheVNldHRpbmdzO1xuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyBfaG91ckl0ZW1zID0gW107XG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyBfbWludXRlSXRlbXMgPSBbXTtcbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIF9hbXBtSXRlbXMgPSBbXTtcblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAqL1xuICAgIHB1YmxpYyBjbGVhcmVkID0gZmFsc2U7XG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICovXG4gICAgcHVibGljIGlzTm90RW1wdHkgPSBmYWxzZTtcbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgKi9cbiAgICBwdWJsaWMgZGlzcGxheUZvcm1hdCA9IG5ldyBUaW1lRGlzcGxheUZvcm1hdFBpcGUodGhpcyk7XG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICovXG4gICAgcHVibGljIGlucHV0Rm9ybWF0ID0gbmV3IFRpbWVJbnB1dEZvcm1hdFBpcGUodGhpcyk7XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIHNlbGVjdGVkSG91cjogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgc2VsZWN0ZWRNaW51dGU6IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIHNlbGVjdGVkQW1QbTogc3RyaW5nO1xuXG4gICAgcHJpdmF0ZSBfdmFsdWU6IERhdGU7XG4gICAgcHJpdmF0ZSBfcmVzb3VyY2VTdHJpbmdzID0gQ3VycmVudFJlc291cmNlU3RyaW5ncy5UaW1lUGlja2VyUmVzU3RyaW5ncztcbiAgICBwcml2YXRlIF9va0J1dHRvbkxhYmVsID0gbnVsbDtcbiAgICBwcml2YXRlIF9jYW5jZWxCdXR0b25MYWJlbCA9IG51bGw7XG4gICAgcHJpdmF0ZSBfZm9ybWF0OiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBfbWFzazogc3RyaW5nO1xuICAgIHByaXZhdGUgX2Rpc3BsYXlWYWx1ZTogc3RyaW5nO1xuXG4gICAgcHJpdmF0ZSBfaXNIb3VyTGlzdExvb3AgPSB0aGlzLmlzU3Bpbkxvb3A7XG4gICAgcHJpdmF0ZSBfaXNNaW51dGVMaXN0TG9vcCA9IHRoaXMuaXNTcGluTG9vcDtcblxuICAgIHByaXZhdGUgX2hvdXJWaWV3ID0gW107XG4gICAgcHJpdmF0ZSBfbWludXRlVmlldyA9IFtdO1xuICAgIHByaXZhdGUgX2FtcG1WaWV3ID0gW107XG5cbiAgICBwcml2YXRlIF9kYXRlRnJvbU1vZGVsOiBEYXRlO1xuICAgIHByaXZhdGUgX2Rlc3Ryb3kkID0gbmV3IFN1YmplY3Q8Ym9vbGVhbj4oKTtcbiAgICBwcml2YXRlIF9kcm9wRG93bk92ZXJsYXlTZXR0aW5nczogT3ZlcmxheVNldHRpbmdzO1xuICAgIHByaXZhdGUgX2RpYWxvZ092ZXJsYXlTZXR0aW5nczogT3ZlcmxheVNldHRpbmdzO1xuXG4gICAgcHJpdmF0ZSBfcHJldlNlbGVjdGVkSG91cjogc3RyaW5nO1xuICAgIHByaXZhdGUgX3ByZXZTZWxlY3RlZE1pbnV0ZTogc3RyaW5nO1xuICAgIHByaXZhdGUgX3ByZXZTZWxlY3RlZEFtUG06IHN0cmluZztcblxuICAgIHByaXZhdGUgX29uT3BlbiA9IG5ldyBFdmVudEVtaXR0ZXI8SWd4VGltZVBpY2tlckNvbXBvbmVudD4oKTtcbiAgICBwcml2YXRlIF9vbkNsb3NlID0gbmV3IEV2ZW50RW1pdHRlcjxJZ3hUaW1lUGlja2VyQ29tcG9uZW50PigpO1xuXG4gICAgcHJpdmF0ZSBfb25Ub3VjaGVkQ2FsbGJhY2s6ICgpID0+IHZvaWQgPSAoKSA9PiB7IH07XG4gICAgcHJpdmF0ZSBfb25DaGFuZ2VDYWxsYmFjazogKF86IERhdGUpID0+IHZvaWQgPSAoKSA9PiB7IH07XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgKi9cbiAgICBnZXQgbWFzaygpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5fbWFzayB8fCAnMDA6MDAgTEwnO1xuICAgIH1cblxuICAgIHNldCBtYXNrKHZhbDogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX21hc2sgPSB2YWw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIGdldCBkaXNwbGF5VmFsdWUoKTogc3RyaW5nIHtcbiAgICAgICAgaWYgKHRoaXMuX2Rpc3BsYXlWYWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZm9ybWF0VGltZSh0aGlzLnZhbHVlLCB0aGlzLmZvcm1hdCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX2Rpc3BsYXlWYWx1ZTtcbiAgICB9XG5cbiAgICBzZXQgZGlzcGxheVZhbHVlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fZGlzcGxheVZhbHVlID0gdmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgY3VycmVudCB0aW1lIGZvcm1hdHRlZCBhcyBzdHJpbmcgdXNpbmcgdGhlIGBmb3JtYXRgIG9wdGlvbi5cbiAgICAgKiBJZiB0aGVyZSBpcyBubyBzZXQgdGltZSB0aGUgcmV0dXJuIGlzIGFuIGVtcHR5IHN0cmluZy5cbiAgICAgKmBgYHR5cGVzY3JpcHRcbiAgICAgKkBWaWV3Q2hpbGQoXCJNeUNoaWxkXCIpXG4gICAgICpwcml2YXRlIHBpY2tlcjogSWd4VGltZVBpY2tlckNvbXBvbmVudDtcbiAgICAgKm5nQWZ0ZXJWaWV3SW5pdCgpe1xuICAgICAqICAgIGxldCB0aW1lID0gdGhpcy5waWNrZXIuZGlzcGxheVRpbWU7XG4gICAgICp9XG4gICAgICpgYGBcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0IGRpc3BsYXlUaW1lKCk6IHN0cmluZyB7XG4gICAgICAgIGlmICh0aGlzLnZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZm9ybWF0VGltZSh0aGlzLnZhbHVlLCB0aGlzLmZvcm1hdCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBnZXQgaG91clZpZXcoKTogc3RyaW5nW10ge1xuICAgICAgICByZXR1cm4gdGhpcy5faG91clZpZXc7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIGdldCBtaW51dGVWaWV3KCk6IHN0cmluZ1tdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX21pbnV0ZVZpZXc7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIGdldCBhbXBtVmlldygpOiBzdHJpbmdbXSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hbXBtVmlldztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgZ2V0IHNob3dDbGVhckJ1dHRvbigpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuICh0aGlzLmRpc3BsYXlWYWx1ZSAmJiB0aGlzLmRpc3BsYXlWYWx1ZSAhPT0gdGhpcy5wYXJzZU1hc2soZmFsc2UpKSB8fCB0aGlzLmlzTm90RW1wdHk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIGdldCBzaG93SG91cnNMaXN0KCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5mb3JtYXQuaW5kZXhPZignaCcpICE9PSAtIDEgfHwgdGhpcy5mb3JtYXQuaW5kZXhPZignSCcpICE9PSAtIDE7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIGdldCBzaG93TWludXRlc0xpc3QoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmZvcm1hdC5pbmRleE9mKCdtJykgIT09IC0gMTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgZ2V0IHNob3dBbVBtTGlzdCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZm9ybWF0LmluZGV4T2YoJ3QnKSAhPT0gLSAxO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBnZXQgdmFsaWRNaW51dGVFbnRyaWVzKCk6IGFueVtdIHtcbiAgICAgICAgY29uc3QgbWludXRlRW50cmllcyA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDYwOyBpKyspIHtcbiAgICAgICAgICAgIG1pbnV0ZUVudHJpZXMucHVzaChpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbWludXRlRW50cmllcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgZ2V0IHZhbGlkSG91ckVudHJpZXMoKTogYW55W10ge1xuICAgICAgICBjb25zdCBob3VyRW50cmllcyA9IFtdO1xuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuZm9ybWF0LmluZGV4T2YoJ2gnKSAhPT0gLTEgPyAxMyA6IDI0O1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGluZGV4OyBpKyspIHtcbiAgICAgICAgICAgIGhvdXJFbnRyaWVzLnB1c2goaSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGhvdXJFbnRyaWVzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIGlucHV0IGdyb3VwIHRlbXBsYXRlLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBsZXQgdGVtcGxhdGUgPSB0aGlzLnRlbXBsYXRlKCk7XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneFRpbWVQaWNrZXJDb21wb25lbnRcbiAgICAgKi9cbiAgICBnZXQgdGVtcGxhdGUoKTogVGVtcGxhdGVSZWY8YW55PiB7XG4gICAgICAgIGlmICh0aGlzLnRpbWVQaWNrZXJUZW1wbGF0ZURpcmVjdGl2ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudGltZVBpY2tlclRlbXBsYXRlRGlyZWN0aXZlLnRlbXBsYXRlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLm1vZGUgPT09IEludGVyYWN0aW9uTW9kZS5EaWFsb2cgPyB0aGlzLmRlZmF1bHRUaW1lUGlja2VyVGVtcGxhdGUgOiB0aGlzLmRyb3Bkb3duSW5wdXRUZW1wbGF0ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBjb250ZXh0IHBhc3NlZCB0byB0aGUgaW5wdXQgZ3JvdXAgdGVtcGxhdGUuXG4gICAgICogQG1lbWJlcm9mIElneFRpbWVQaWNrZXJDb21wb25lbnRcbiAgICAgKi9cbiAgICBnZXQgY29udGV4dCgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiB0aGlzLnZhbHVlLFxuICAgICAgICAgICAgZGlzcGxheVRpbWU6IHRoaXMuZGlzcGxheVRpbWUsXG4gICAgICAgICAgICBkaXNwbGF5VmFsdWU6IHRoaXMuZGlzcGxheVZhbHVlLFxuICAgICAgICAgICAgb3BlbkRpYWxvZzogKHRhcmdldD86IEhUTUxFbGVtZW50KSA9PiB0aGlzLm9wZW5EaWFsb2codGFyZ2V0KVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX2dlbmVyYXRlSG91cnMoKTtcbiAgICAgICAgdGhpcy5fZ2VuZXJhdGVNaW51dGVzKCk7XG4gICAgICAgIGlmICh0aGlzLmZvcm1hdC5pbmRleE9mKCd0dCcpICE9PSAtMSkge1xuICAgICAgICAgICAgdGhpcy5fZ2VuZXJhdGVBbVBtKCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9kcm9wRG93bk92ZXJsYXlTZXR0aW5ncyA9IHtcbiAgICAgICAgICAgIG1vZGFsOiBmYWxzZSxcbiAgICAgICAgICAgIGNsb3NlT25PdXRzaWRlQ2xpY2s6IHRydWUsXG4gICAgICAgICAgICBzY3JvbGxTdHJhdGVneTogbmV3IEFic29sdXRlU2Nyb2xsU3RyYXRlZ3koKSxcbiAgICAgICAgICAgIHBvc2l0aW9uU3RyYXRlZ3k6IG5ldyBBdXRvUG9zaXRpb25TdHJhdGVneSgpXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuX2RpYWxvZ092ZXJsYXlTZXR0aW5ncyA9IHt9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5tb2RlID09PSBJbnRlcmFjdGlvbk1vZGUuRHJvcERvd24gJiYgdGhpcy5pbnB1dCkge1xuICAgICAgICAgICAgZnJvbUV2ZW50KHRoaXMuaW5wdXQubmF0aXZlRWxlbWVudCwgJ2tleWRvd24nKS5waXBlKFxuICAgICAgICAgICAgICAgIHRocm90dGxlKCgpID0+IGludGVydmFsKDAsIGFuaW1hdGlvbkZyYW1lU2NoZWR1bGVyKSksXG4gICAgICAgICAgICAgICAgdGFrZVVudGlsKHRoaXMuX2Rlc3Ryb3kkKVxuICAgICAgICAgICAgKS5zdWJzY3JpYmUoKGV2ZW50OiBLZXlib2FyZEV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50LmtleSA9PT0gS0VZUy5VUF9BUlJPVyB8fCBldmVudC5rZXkgPT09IEtFWVMuVVBfQVJST1dfSUUgfHxcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQua2V5ID09PSBLRVlTLkRPV05fQVJST1cgfHwgZXZlbnQua2V5ID09PSBLRVlTLkRPV05fQVJST1dfSUUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zcGluT25FZGl0KGV2ZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnRvZ2dsZVJlZiAmJiB0aGlzLmdyb3VwKSB7XG4gICAgICAgICAgICB0aGlzLnRvZ2dsZVJlZi5lbGVtZW50LnN0eWxlLndpZHRoID0gdGhpcy5ncm91cC5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGggKyAncHgnO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMudG9nZ2xlUmVmKSB7XG4gICAgICAgICAgICB0aGlzLnRvZ2dsZVJlZi5vbkNsb3NlZC5waXBlKHRha2VVbnRpbCh0aGlzLl9kZXN0cm95JCkpLnN1YnNjcmliZSgoKSA9PiB7XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5faW5wdXQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5faW5wdXQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm1vZGUgPT09IEludGVyYWN0aW9uTW9kZS5Ecm9wRG93bikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9vbkRyb3BEb3duQ2xvc2VkKCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy5vbkNsb3NlZC5lbWl0KHRoaXMpO1xuXG4gICAgICAgICAgICAgICAgLy8gVE9ETzogcmVtb3ZlIHRoaXMgbGluZSBhZnRlciBkZXByZWNhdGluZyAnb25DbG9zZSdcbiAgICAgICAgICAgICAgICB0aGlzLl9vbkNsb3NlLmVtaXQodGhpcyk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgdGhpcy50b2dnbGVSZWYub25PcGVuZWQucGlwZSh0YWtlVW50aWwodGhpcy5fZGVzdHJveSQpKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMub25PcGVuZWQuZW1pdCh0aGlzKTtcblxuICAgICAgICAgICAgICAgIC8vIFRPRE86IHJlbW92ZSB0aGlzIGxpbmUgYWZ0ZXIgZGVwcmVjYXRpbmcgJ29uT3BlbidcbiAgICAgICAgICAgICAgICB0aGlzLl9vbk9wZW4uZW1pdCh0aGlzKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB0aGlzLnRvZ2dsZVJlZi5vbkNsb3NpbmcucGlwZSh0YWtlVW50aWwodGhpcy5fZGVzdHJveSQpKS5zdWJzY3JpYmUoKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5vbkNsb3NpbmcuZW1pdChldmVudCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX2Rlc3Ryb3kkLm5leHQodHJ1ZSk7XG4gICAgICAgIHRoaXMuX2Rlc3Ryb3kkLmNvbXBsZXRlKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIEBIb3N0TGlzdGVuZXIoJ2tleWRvd24uc3BhY2ViYXInLCBbJyRldmVudCddKVxuICAgIEBIb3N0TGlzdGVuZXIoJ2tleWRvd24uc3BhY2UnLCBbJyRldmVudCddKVxuICAgIHB1YmxpYyBvbktleWRvd25TcGFjZShldmVudCkge1xuICAgICAgICB0aGlzLm9wZW5EaWFsb2codGhpcy5nZXRJbnB1dEdyb3VwRWxlbWVudCgpKTtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgQEhvc3RMaXN0ZW5lcigna2V5ZG93bi5BbHQuQXJyb3dEb3duJylcbiAgICBwdWJsaWMgb25BbHRBcnJvd0Rvd24oKSB7XG4gICAgICAgIHRoaXMub3BlbkRpYWxvZyh0aGlzLmdldElucHV0R3JvdXBFbGVtZW50KCkpO1xuICAgIH1cblxuICAgIHByaXZhdGUgX3Njcm9sbEl0ZW1JbnRvVmlldyhpdGVtOiBzdHJpbmcsIGl0ZW1zOiBhbnlbXSwgc2VsZWN0ZWRJdGVtOiBzdHJpbmcsIGlzTGlzdExvb3A6IGJvb2xlYW4sIHZpZXdUeXBlOiBzdHJpbmcpOiBhbnkge1xuICAgICAgICBsZXQgaXRlbUludG9WaWV3O1xuICAgICAgICBpZiAoaXRlbXMpIHtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gKGl0ZW0gPT09ICdBTScgfHwgaXRlbSA9PT0gJ1BNJykgPyBpdGVtcy5pbmRleE9mKGl0ZW0pIDogaXRlbXMuaW5kZXhPZihwYXJzZUludChpdGVtLCAxMCkpO1xuICAgICAgICAgICAgbGV0IHZpZXc7XG5cbiAgICAgICAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICBpZiAoaXNMaXN0TG9vcCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaW5kZXggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZEl0ZW0gPSB0aGlzLl9pdGVtVG9TdHJpbmcoaXRlbXNbaW5kZXggLSAxXSwgdmlld1R5cGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbUludG9WaWV3ID0gdGhpcy5fbmV4dEl0ZW0oaXRlbXMsIHNlbGVjdGVkSXRlbSwgaXNMaXN0TG9vcCwgdmlld1R5cGUpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRJdGVtID0gdGhpcy5faXRlbVRvU3RyaW5nKGl0ZW1zWzFdLCB2aWV3VHlwZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtSW50b1ZpZXcgPSB0aGlzLl9wcmV2SXRlbShpdGVtcywgc2VsZWN0ZWRJdGVtLCBpc0xpc3RMb29wLCB2aWV3VHlwZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB2aWV3ID0gaXRlbXMuc2xpY2UoaW5kZXggLSAzLCBpbmRleCArIDQpO1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZEl0ZW0gPSB0aGlzLl9pdGVtVG9TdHJpbmcoaXRlbXNbaW5kZXhdLCB2aWV3VHlwZSk7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW1JbnRvVmlldyA9IHsgc2VsZWN0ZWRJdGVtLCB2aWV3IH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGl0ZW1JbnRvVmlldy52aWV3ID0gdGhpcy5fdmlld1RvU3RyaW5nKGl0ZW1JbnRvVmlldy52aWV3LCB2aWV3VHlwZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGl0ZW1JbnRvVmlldztcbiAgICB9XG5cbiAgICBwcml2YXRlIF92aWV3VG9TdHJpbmcodmlldzogYW55LCB2aWV3VHlwZTogc3RyaW5nKTogYW55IHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2aWV3Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mICh2aWV3W2ldKSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICB2aWV3W2ldID0gdGhpcy5faXRlbVRvU3RyaW5nKHZpZXdbaV0sIHZpZXdUeXBlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmlldztcbiAgICB9XG5cbiAgICBwcml2YXRlIF9pdGVtVG9TdHJpbmcoaXRlbTogYW55LCB2aWV3VHlwZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgaWYgKGl0ZW0gPT09IG51bGwpIHtcbiAgICAgICAgICAgIGl0ZW0gPSAnJztcbiAgICAgICAgfSBlbHNlIGlmICh2aWV3VHlwZSAmJiB0eXBlb2YgKGl0ZW0pICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgY29uc3QgbGVhZFplcm9Ib3VyID0gKGl0ZW0gPCAxMCAmJiAodGhpcy5mb3JtYXQuaW5kZXhPZignaGgnKSAhPT0gLTEgfHwgdGhpcy5mb3JtYXQuaW5kZXhPZignSEgnKSAhPT0gLTEpKTtcbiAgICAgICAgICAgIGNvbnN0IGxlYWRaZXJvTWludXRlID0gKGl0ZW0gPCAxMCAmJiB0aGlzLmZvcm1hdC5pbmRleE9mKCdtbScpICE9PSAtMSk7XG5cbiAgICAgICAgICAgIGNvbnN0IGxlYWRaZXJvID0gKHZpZXdUeXBlID09PSAnaG91cicpID8gbGVhZFplcm9Ib3VyIDogbGVhZFplcm9NaW51dGU7XG4gICAgICAgICAgICBpdGVtID0gKGxlYWRaZXJvKSA/ICcwJyArIGl0ZW0gOiBgJHtpdGVtfWA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfcHJldkl0ZW0oaXRlbXM6IGFueVtdLCBzZWxlY3RlZEl0ZW06IHN0cmluZywgaXNMaXN0TG9vcDogYm9vbGVhbiwgdmlld1R5cGU6IHN0cmluZyk6IGFueSB7XG4gICAgICAgIGNvbnN0IHNlbGVjdGVkSW5kZXggPSBpdGVtcy5pbmRleE9mKHBhcnNlSW50KHNlbGVjdGVkSXRlbSwgMTApKTtcbiAgICAgICAgY29uc3QgaXRlbXNDb3VudCA9IGl0ZW1zLmxlbmd0aDtcbiAgICAgICAgbGV0IHZpZXc7XG5cbiAgICAgICAgaWYgKHNlbGVjdGVkSW5kZXggPT09IC0xKSB7XG4gICAgICAgICAgICB2aWV3ID0gaXRlbXMuc2xpY2UoMCwgNyk7XG4gICAgICAgICAgICBzZWxlY3RlZEl0ZW0gPSBpdGVtc1szXTtcbiAgICAgICAgfSBlbHNlIGlmIChpc0xpc3RMb29wKSB7XG4gICAgICAgICAgICBpZiAoc2VsZWN0ZWRJbmRleCAtIDQgPCAwKSB7XG4gICAgICAgICAgICAgICAgdmlldyA9IGl0ZW1zLnNsaWNlKGl0ZW1zQ291bnQgLSAoNCAtIHNlbGVjdGVkSW5kZXgpLCBpdGVtc0NvdW50KTtcbiAgICAgICAgICAgICAgICB2aWV3ID0gdmlldy5jb25jYXQoaXRlbXMuc2xpY2UoMCwgc2VsZWN0ZWRJbmRleCArIDMpKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc2VsZWN0ZWRJbmRleCArIDQgPiBpdGVtc0NvdW50KSB7XG4gICAgICAgICAgICAgICAgdmlldyA9IGl0ZW1zLnNsaWNlKHNlbGVjdGVkSW5kZXggLSA0LCBpdGVtc0NvdW50KTtcbiAgICAgICAgICAgICAgICB2aWV3ID0gdmlldy5jb25jYXQoaXRlbXMuc2xpY2UoMCwgc2VsZWN0ZWRJbmRleCArIDMgLSBpdGVtc0NvdW50KSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZpZXcgPSBpdGVtcy5zbGljZShzZWxlY3RlZEluZGV4IC0gNCwgc2VsZWN0ZWRJbmRleCArIDMpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzZWxlY3RlZEl0ZW0gPSAoc2VsZWN0ZWRJbmRleCA9PT0gMCkgPyBpdGVtc1tpdGVtc0NvdW50IC0gMV0gOiBpdGVtc1tzZWxlY3RlZEluZGV4IC0gMV07XG4gICAgICAgIH0gZWxzZSBpZiAoc2VsZWN0ZWRJbmRleCA+IDMpIHtcbiAgICAgICAgICAgIHZpZXcgPSBpdGVtcy5zbGljZShzZWxlY3RlZEluZGV4IC0gNCwgc2VsZWN0ZWRJbmRleCArIDMpO1xuICAgICAgICAgICAgc2VsZWN0ZWRJdGVtID0gaXRlbXNbc2VsZWN0ZWRJbmRleCAtIDFdO1xuICAgICAgICB9IGVsc2UgaWYgKHNlbGVjdGVkSW5kZXggPT09IDMpIHtcbiAgICAgICAgICAgIHZpZXcgPSBpdGVtcy5zbGljZSgwLCA3KTtcbiAgICAgICAgfVxuICAgICAgICB2aWV3ID0gdGhpcy5fdmlld1RvU3RyaW5nKHZpZXcsIHZpZXdUeXBlKTtcbiAgICAgICAgc2VsZWN0ZWRJdGVtID0gdGhpcy5faXRlbVRvU3RyaW5nKHNlbGVjdGVkSXRlbSwgdmlld1R5cGUpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc2VsZWN0ZWRJdGVtLFxuICAgICAgICAgICAgdmlld1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIHByaXZhdGUgX25leHRJdGVtKGl0ZW1zOiBhbnlbXSwgc2VsZWN0ZWRJdGVtOiBzdHJpbmcsIGlzTGlzdExvb3A6IGJvb2xlYW4sIHZpZXdUeXBlOiBzdHJpbmcpOiBhbnkge1xuICAgICAgICBjb25zdCBzZWxlY3RlZEluZGV4ID0gaXRlbXMuaW5kZXhPZihwYXJzZUludChzZWxlY3RlZEl0ZW0sIDEwKSk7XG4gICAgICAgIGNvbnN0IGl0ZW1zQ291bnQgPSBpdGVtcy5sZW5ndGg7XG4gICAgICAgIGxldCB2aWV3O1xuXG4gICAgICAgIGlmIChzZWxlY3RlZEluZGV4ID09PSAtMSkge1xuICAgICAgICAgICAgdmlldyA9IGl0ZW1zLnNsaWNlKDAsIDcpO1xuICAgICAgICAgICAgc2VsZWN0ZWRJdGVtID0gaXRlbXNbM107XG4gICAgICAgIH0gZWxzZSBpZiAoaXNMaXN0TG9vcCkge1xuICAgICAgICAgICAgaWYgKHNlbGVjdGVkSW5kZXggPCAyKSB7XG4gICAgICAgICAgICAgICAgdmlldyA9IGl0ZW1zLnNsaWNlKGl0ZW1zQ291bnQgLSAoMiAtIHNlbGVjdGVkSW5kZXgpLCBpdGVtc0NvdW50KTtcbiAgICAgICAgICAgICAgICB2aWV3ID0gdmlldy5jb25jYXQoaXRlbXMuc2xpY2UoMCwgc2VsZWN0ZWRJbmRleCArIDUpKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc2VsZWN0ZWRJbmRleCArIDQgPj0gaXRlbXNDb3VudCkge1xuICAgICAgICAgICAgICAgIHZpZXcgPSBpdGVtcy5zbGljZShzZWxlY3RlZEluZGV4IC0gMiwgaXRlbXNDb3VudCk7XG4gICAgICAgICAgICAgICAgdmlldyA9IHZpZXcuY29uY2F0KGl0ZW1zLnNsaWNlKDAsIHNlbGVjdGVkSW5kZXggKyA1IC0gaXRlbXNDb3VudCkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2aWV3ID0gaXRlbXMuc2xpY2Uoc2VsZWN0ZWRJbmRleCAtIDIsIHNlbGVjdGVkSW5kZXggKyA1KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc2VsZWN0ZWRJdGVtID0gKHNlbGVjdGVkSW5kZXggPT09IGl0ZW1zQ291bnQgLSAxKSA/IGl0ZW1zWzBdIDogaXRlbXNbc2VsZWN0ZWRJbmRleCArIDFdO1xuICAgICAgICB9IGVsc2UgaWYgKHNlbGVjdGVkSW5kZXggKyAxIDwgaXRlbXNDb3VudCAtIDMpIHtcbiAgICAgICAgICAgIHZpZXcgPSBpdGVtcy5zbGljZShzZWxlY3RlZEluZGV4IC0gMiwgc2VsZWN0ZWRJbmRleCArIDUpO1xuICAgICAgICAgICAgc2VsZWN0ZWRJdGVtID0gaXRlbXNbc2VsZWN0ZWRJbmRleCArIDFdO1xuICAgICAgICB9IGVsc2UgaWYgKHNlbGVjdGVkSW5kZXggPT09IGl0ZW1zQ291bnQgLSA0KSB7XG4gICAgICAgICAgICB2aWV3ID0gaXRlbXMuc2xpY2Uoc2VsZWN0ZWRJbmRleCAtIDMsIGl0ZW1zQ291bnQpO1xuICAgICAgICB9XG4gICAgICAgIHZpZXcgPSB0aGlzLl92aWV3VG9TdHJpbmcodmlldywgdmlld1R5cGUpO1xuICAgICAgICBzZWxlY3RlZEl0ZW0gPSB0aGlzLl9pdGVtVG9TdHJpbmcoc2VsZWN0ZWRJdGVtLCB2aWV3VHlwZSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzZWxlY3RlZEl0ZW0sXG4gICAgICAgICAgICB2aWV3XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfZm9ybWF0VGltZSh2YWx1ZTogRGF0ZSwgZm9ybWF0OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICBpZiAoIXZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgaG91ciA9IHZhbHVlLmdldEhvdXJzKCk7XG4gICAgICAgICAgICBsZXQgZm9ybWF0dGVkTWludXRlLCBmb3JtYXR0ZWRIb3VyO1xuXG4gICAgICAgICAgICBjb25zdCBtaW51dGUgPSB2YWx1ZS5nZXRNaW51dGVzKCk7XG4gICAgICAgICAgICBjb25zdCBhbVBNID0gKGhvdXIgPiAxMSkgPyAnUE0nIDogJ0FNJztcblxuICAgICAgICAgICAgaWYgKGZvcm1hdC5pbmRleE9mKCdoJykgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgaWYgKGhvdXIgPiAxMikge1xuICAgICAgICAgICAgICAgICAgICBob3VyIC09IDEyO1xuICAgICAgICAgICAgICAgICAgICBmb3JtYXR0ZWRIb3VyID0gaG91ciA8IDEwICYmIGZvcm1hdC5pbmRleE9mKCdoaCcpICE9PSAtMSA/ICcwJyArIGhvdXIgOiBgJHtob3VyfWA7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChob3VyID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvcm1hdHRlZEhvdXIgPSAnMTInO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaG91ciA8IDEwICYmIGZvcm1hdC5pbmRleE9mKCdoaCcpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICBmb3JtYXR0ZWRIb3VyID0gJzAnICsgaG91cjtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBmb3JtYXR0ZWRIb3VyID0gYCR7aG91cn1gO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKGhvdXIgPCAxMCAmJiBmb3JtYXQuaW5kZXhPZignSEgnKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9ybWF0dGVkSG91ciA9ICcwJyArIGhvdXI7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZm9ybWF0dGVkSG91ciA9IGAke2hvdXJ9YDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZvcm1hdHRlZE1pbnV0ZSA9IG1pbnV0ZSA8IDEwICYmIGZvcm1hdC5pbmRleE9mKCdtbScpICE9PSAtMSA/ICcwJyArIG1pbnV0ZSA6IGAke21pbnV0ZX1gO1xuXG4gICAgICAgICAgICByZXR1cm4gZm9ybWF0LnJlcGxhY2UoJ2hoJywgZm9ybWF0dGVkSG91cikucmVwbGFjZSgnaCcsIGZvcm1hdHRlZEhvdXIpXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoJ0hIJywgZm9ybWF0dGVkSG91cikucmVwbGFjZSgnSCcsIGZvcm1hdHRlZEhvdXIpXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoJ21tJywgZm9ybWF0dGVkTWludXRlKS5yZXBsYWNlKCdtJywgZm9ybWF0dGVkTWludXRlKVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKCd0dCcsIGFtUE0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfdXBkYXRlSG91clZpZXcoc3RhcnQ6IGFueSwgZW5kOiBhbnkpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5faG91clZpZXcgPSB0aGlzLl92aWV3VG9TdHJpbmcodGhpcy5faG91ckl0ZW1zLnNsaWNlKHN0YXJ0LCBlbmQpLCAnaG91cicpO1xuICAgIH1cblxuICAgIHByaXZhdGUgX3VwZGF0ZU1pbnV0ZVZpZXcoc3RhcnQ6IGFueSwgZW5kOiBhbnkpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fbWludXRlVmlldyA9IHRoaXMuX3ZpZXdUb1N0cmluZyh0aGlzLl9taW51dGVJdGVtcy5zbGljZShzdGFydCwgZW5kKSwgJ21pbnV0ZScpO1xuICAgIH1cblxuICAgIHByaXZhdGUgX3VwZGF0ZUFtUG1WaWV3KHN0YXJ0OiBhbnksIGVuZDogYW55KTogdm9pZCB7XG4gICAgICAgIHRoaXMuX2FtcG1WaWV3ID0gdGhpcy5fYW1wbUl0ZW1zLnNsaWNlKHN0YXJ0LCBlbmQpO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2FkZEVtcHR5SXRlbXMoaXRlbXM6IHN0cmluZ1tdKTogdm9pZCB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XG4gICAgICAgICAgICBpdGVtcy5wdXNoKG51bGwpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfZ2VuZXJhdGVIb3VycygpOiB2b2lkIHtcbiAgICAgICAgbGV0IGhvdXJJdGVtc0NvdW50ID0gMjQ7XG4gICAgICAgIGlmICh0aGlzLmZvcm1hdC5pbmRleE9mKCdoJykgIT09IC0xKSB7XG4gICAgICAgICAgICBob3VySXRlbXNDb3VudCA9IDEzO1xuICAgICAgICB9XG5cbiAgICAgICAgaG91ckl0ZW1zQ291bnQgLz0gdGhpcy5pdGVtc0RlbHRhLmhvdXJzO1xuXG4gICAgICAgIGxldCBpID0gdGhpcy5mb3JtYXQuaW5kZXhPZignSCcpICE9PSAtMSA/IDAgOiAxO1xuXG4gICAgICAgIGlmIChob3VySXRlbXNDb3VudCA8IDcgfHwgIXRoaXMuaXNTcGluTG9vcCkge1xuICAgICAgICAgICAgdGhpcy5fYWRkRW1wdHlJdGVtcyh0aGlzLl9ob3VySXRlbXMpO1xuICAgICAgICAgICAgdGhpcy5faXNIb3VyTGlzdExvb3AgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChob3VySXRlbXNDb3VudCA+IDEpIHtcbiAgICAgICAgICAgIGZvciAoaTsgaSA8IGhvdXJJdGVtc0NvdW50OyBpKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9ob3VySXRlbXMucHVzaChpICogdGhpcy5pdGVtc0RlbHRhLmhvdXJzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX2hvdXJJdGVtcy5wdXNoKDApO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGhvdXJJdGVtc0NvdW50IDwgNyB8fCAhdGhpcy5pc1NwaW5Mb29wKSB7XG4gICAgICAgICAgICB0aGlzLl9hZGRFbXB0eUl0ZW1zKHRoaXMuX2hvdXJJdGVtcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIF9nZW5lcmF0ZU1pbnV0ZXMoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IG1pbnV0ZUl0ZW1zQ291bnQgPSA2MCAvIHRoaXMuaXRlbXNEZWx0YS5taW51dGVzO1xuXG4gICAgICAgIGlmIChtaW51dGVJdGVtc0NvdW50IDwgNyB8fCAhdGhpcy5pc1NwaW5Mb29wKSB7XG4gICAgICAgICAgICB0aGlzLl9hZGRFbXB0eUl0ZW1zKHRoaXMuX21pbnV0ZUl0ZW1zKTtcbiAgICAgICAgICAgIHRoaXMuX2lzTWludXRlTGlzdExvb3AgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWludXRlSXRlbXNDb3VudDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLl9taW51dGVJdGVtcy5wdXNoKGkgKiB0aGlzLml0ZW1zRGVsdGEubWludXRlcyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobWludXRlSXRlbXNDb3VudCA8IDcgfHwgIXRoaXMuaXNTcGluTG9vcCkge1xuICAgICAgICAgICAgdGhpcy5fYWRkRW1wdHlJdGVtcyh0aGlzLl9taW51dGVJdGVtcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIF9nZW5lcmF0ZUFtUG0oKTogdm9pZCB7XG5cbiAgICAgICAgdGhpcy5fYWRkRW1wdHlJdGVtcyh0aGlzLl9hbXBtSXRlbXMpO1xuXG4gICAgICAgIHRoaXMuX2FtcG1JdGVtcy5wdXNoKCdBTScpO1xuICAgICAgICB0aGlzLl9hbXBtSXRlbXMucHVzaCgnUE0nKTtcblxuICAgICAgICB0aGlzLl9hZGRFbXB0eUl0ZW1zKHRoaXMuX2FtcG1JdGVtcyk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfZ2V0U2VsZWN0ZWRUaW1lKCk6IERhdGUge1xuICAgICAgICBjb25zdCBkYXRlID0gdGhpcy52YWx1ZSA/IG5ldyBEYXRlKHRoaXMudmFsdWUpIDogbmV3IERhdGUoKTtcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRIb3VyKSB7XG4gICAgICAgICAgICBkYXRlLnNldEhvdXJzKHBhcnNlSW50KHRoaXMuc2VsZWN0ZWRIb3VyLCAxMCkpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGVkTWludXRlKSB7XG4gICAgICAgICAgICBkYXRlLnNldE1pbnV0ZXMocGFyc2VJbnQodGhpcy5zZWxlY3RlZE1pbnV0ZSwgMTApKTtcbiAgICAgICAgfVxuICAgICAgICBkYXRlLnNldFNlY29uZHMoMCk7XG4gICAgICAgIGlmICgoKHRoaXMuc2hvd0hvdXJzTGlzdCAmJiB0aGlzLnNlbGVjdGVkSG91ciAhPT0gJzEyJykgfHwgKCF0aGlzLnNob3dIb3Vyc0xpc3QgJiYgdGhpcy5zZWxlY3RlZEhvdXIgPD0gJzExJykpICYmXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEFtUG0gPT09ICdQTScpIHtcbiAgICAgICAgICAgIGRhdGUuc2V0SG91cnMoZGF0ZS5nZXRIb3VycygpICsgMTIpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5zaG93SG91cnNMaXN0ICYmIHRoaXMuc2VsZWN0ZWRBbVBtID09PSAnQU0nICYmIHRoaXMuc2VsZWN0ZWRIb3VyID4gJzExJykge1xuICAgICAgICAgICAgZGF0ZS5zZXRIb3VycyhkYXRlLmdldEhvdXJzKCkgLSAxMik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRBbVBtID09PSAnQU0nICYmIHRoaXMuc2VsZWN0ZWRIb3VyID09PSAnMTInKSB7XG4gICAgICAgICAgICBkYXRlLnNldEhvdXJzKDApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkYXRlO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2NvbnZlcnRNaW5NYXhWYWx1ZSh2YWx1ZTogc3RyaW5nKTogRGF0ZSB7XG4gICAgICAgIGNvbnN0IGRhdGUgPSB0aGlzLnZhbHVlID8gbmV3IERhdGUodGhpcy52YWx1ZSkgOiB0aGlzLl9kYXRlRnJvbU1vZGVsID8gbmV3IERhdGUodGhpcy5fZGF0ZUZyb21Nb2RlbCkgOiBuZXcgRGF0ZSgpO1xuICAgICAgICBjb25zdCBzZWN0aW9ucyA9IHZhbHVlLnNwbGl0KC9bXFxzOl0rLyk7XG4gICAgICAgIGxldCBob3VyLCBtaW51dGVzLCBhbVBNO1xuXG4gICAgICAgIGRhdGUuc2V0U2Vjb25kcygwKTtcblxuICAgICAgICBpZiAodGhpcy5zaG93SG91cnNMaXN0KSB7XG4gICAgICAgICAgICBob3VyID0gc2VjdGlvbnNbMF07XG4gICAgICAgICAgICBkYXRlLnNldEhvdXJzKHBhcnNlSW50KGhvdXIsIDEwKSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5zaG93TWludXRlc0xpc3QpIHtcbiAgICAgICAgICAgIG1pbnV0ZXMgPSB0aGlzLnNob3dIb3Vyc0xpc3QgPyBzZWN0aW9uc1sxXSA6IHNlY3Rpb25zWzBdO1xuICAgICAgICAgICAgZGF0ZS5zZXRNaW51dGVzKHBhcnNlSW50KG1pbnV0ZXMsIDEwKSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5zaG93QW1QbUxpc3QpIHtcbiAgICAgICAgICAgIGFtUE0gPSBzZWN0aW9uc1tzZWN0aW9ucy5sZW5ndGggLSAxXTtcblxuICAgICAgICAgICAgaWYgKCgodGhpcy5zaG93SG91cnNMaXN0ICYmIGRhdGUuZ2V0SG91cnMoKS50b1N0cmluZygpICE9PSAnMTInKSB8fFxuICAgICAgICAgICAgICAgICAgICAoIXRoaXMuc2hvd0hvdXJzTGlzdCAmJiBkYXRlLmdldEhvdXJzKCkudG9TdHJpbmcoKSA8PSAnMTEnKSkgJiYgYW1QTSA9PT0gJ1BNJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZS5zZXRIb3VycyhkYXRlLmdldEhvdXJzKCkgKyAxMik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghdGhpcy5zaG93SG91cnNMaXN0ICYmIGFtUE0gPT09ICdBTScgJiYgZGF0ZS5nZXRIb3VycygpLnRvU3RyaW5nKCkgPiAnMTEnKSB7XG4gICAgICAgICAgICAgICAgZGF0ZS5zZXRIb3VycyhkYXRlLmdldEhvdXJzKCkgLSAxMik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnNob3dIb3Vyc0xpc3QgJiYgZGF0ZS5nZXRIb3VycygpID09PSAxMiAmJiBhbVBNID09PSAnQU0nKSB7XG4gICAgICAgICAgICAgICAgZGF0ZS5zZXRIb3VycygwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBkYXRlO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2lzVmFsdWVWYWxpZCh2YWx1ZTogRGF0ZSk6IGJvb2xlYW4ge1xuICAgICAgICBpZiAodGhpcy5tYXhWYWx1ZSAmJiB2YWx1ZSA+IHRoaXMuX2NvbnZlcnRNaW5NYXhWYWx1ZSh0aGlzLm1heFZhbHVlKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMubWluVmFsdWUgJiYgdmFsdWUgPCB0aGlzLl9jb252ZXJ0TWluTWF4VmFsdWUodGhpcy5taW5WYWx1ZSkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfaXNFbnRyeVZhbGlkKHZhbDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgICAgIGxldCB2YWxpZEggPSB0cnVlO1xuICAgICAgICBsZXQgdmFsaWRNID0gdHJ1ZTtcblxuICAgICAgICBjb25zdCBzZWN0aW9ucyA9IHZhbC5zcGxpdCgvW1xcczpdKy8pO1xuICAgICAgICBjb25zdCByZSA9IG5ldyBSZWdFeHAodGhpcy5wcm9tcHRDaGFyLCAnZycpO1xuXG4gICAgICAgIGlmICh0aGlzLnNob3dIb3Vyc0xpc3QpIHtcbiAgICAgICAgICAgIHZhbGlkSCA9IHRoaXMudmFsaWRIb3VyRW50cmllcy5pbmRleE9mKHBhcnNlSW50KHNlY3Rpb25zWzBdLnJlcGxhY2UocmUsICcnKSwgMTApKSAhPT0gLTE7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5zaG93TWludXRlc0xpc3QpIHtcbiAgICAgICAgICAgIGNvbnN0IG1pbnV0ZXMgPSB0aGlzLnNob3dIb3Vyc0xpc3QgPyBzZWN0aW9uc1sxXSA6IHNlY3Rpb25zWzBdO1xuICAgICAgICAgICAgdmFsaWRNID0gdGhpcy52YWxpZE1pbnV0ZUVudHJpZXMuaW5kZXhPZihwYXJzZUludChtaW51dGVzLnJlcGxhY2UocmUsICcnKSwgMTApKSAhPT0gLTE7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdmFsaWRIICYmIHZhbGlkTTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9nZXRDdXJzb3JQb3NpdGlvbigpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5pbnB1dC5uYXRpdmVFbGVtZW50LnNlbGVjdGlvblN0YXJ0O1xuICAgIH1cblxuICAgIHByaXZhdGUgX3NldEN1cnNvclBvc2l0aW9uKHN0YXJ0OiBudW1iZXIsIGVuZDogbnVtYmVyID0gc3RhcnQpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5pbnB1dC5uYXRpdmVFbGVtZW50LnNldFNlbGVjdGlvblJhbmdlKHN0YXJ0LCBlbmQpO1xuICAgIH1cblxuICAgIHByaXZhdGUgX3VwZGF0ZUVkaXRhYmxlSW5wdXQoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm1vZGUgPT09IEludGVyYWN0aW9uTW9kZS5Ecm9wRG93bikge1xuICAgICAgICAgICAgdGhpcy5kaXNwbGF5VmFsdWUgPSB0aGlzLl9mb3JtYXRUaW1lKHRoaXMuX2dldFNlbGVjdGVkVGltZSgpLCB0aGlzLmZvcm1hdCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIF9zcGluSG91cnMoY3VycmVudFZhbDogRGF0ZSwgbWluVmFsOiBEYXRlLCBtYXhWYWw6IERhdGUsIGhEZWx0YTogbnVtYmVyLCBzaWduOiBudW1iZXIpOiBEYXRlIHtcbiAgICAgICAgY29uc3Qgb2xkVmFsID0gbmV3IERhdGUoY3VycmVudFZhbCk7XG5cbiAgICAgICAgY3VycmVudFZhbC5zZXRNaW51dGVzKHNpZ24gKiBoRGVsdGEpO1xuICAgICAgICBpZiAoY3VycmVudFZhbC5nZXREYXRlKCkgIT09IG9sZFZhbC5nZXREYXRlKCkgJiYgdGhpcy5pc1NwaW5Mb29wKSB7XG4gICAgICAgICAgICBjdXJyZW50VmFsLnNldERhdGUob2xkVmFsLmdldERhdGUoKSk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgbWludXRlcyA9IGN1cnJlbnRWYWwuZ2V0TWludXRlcygpO1xuICAgICAgICBpZiAoY3VycmVudFZhbC5nZXRUaW1lKCkgPiBtYXhWYWwuZ2V0VGltZSgpKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5pc1NwaW5Mb29wKSB7XG4gICAgICAgICAgICAgICAgbWludXRlcyA9IG1pbnV0ZXMgPCBtaW5WYWwuZ2V0TWludXRlcygpID8gNjAgKyBtaW51dGVzIDogbWludXRlcztcbiAgICAgICAgICAgICAgICBtaW5WYWwuc2V0TWludXRlcyhzaWduICogbWludXRlcyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1pblZhbDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9sZFZhbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChjdXJyZW50VmFsLmdldFRpbWUoKSA8IG1pblZhbC5nZXRUaW1lKCkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmlzU3Bpbkxvb3ApIHtcbiAgICAgICAgICAgICAgICBtaW51dGVzID0gbWludXRlcyA8PSBtYXhWYWwuZ2V0TWludXRlcygpID8gbWludXRlcyA6IG1pbnV0ZXMgLSA2MDtcbiAgICAgICAgICAgICAgICBtYXhWYWwuc2V0TWludXRlcyhtaW51dGVzKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbWF4VmFsO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gb2xkVmFsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGN1cnJlbnRWYWw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIF9zcGluTWludXRlcyhjdXJyZW50VmFsOiBEYXRlLCBtRGVsdGE6IG51bWJlciwgc2lnbjogbnVtYmVyKSB7XG4gICAgICAgIGxldCBtaW51dGVzID0gY3VycmVudFZhbC5nZXRNaW51dGVzKCkgKyAoc2lnbiAqIG1EZWx0YSk7XG5cbiAgICAgICAgaWYgKG1pbnV0ZXMgPCAwIHx8IG1pbnV0ZXMgPj0gNjApIHtcbiAgICAgICAgICAgIG1pbnV0ZXMgPSB0aGlzLmlzU3Bpbkxvb3AgPyBtaW51dGVzIC0gKHNpZ24gKiA2MCkgOiBjdXJyZW50VmFsLmdldE1pbnV0ZXMoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGN1cnJlbnRWYWwuc2V0TWludXRlcyhtaW51dGVzKTtcbiAgICAgICAgcmV0dXJuIGN1cnJlbnRWYWw7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfaW5pdGlhbGl6ZUNvbnRhaW5lcigpIHtcbiAgICAgICAgaWYgKHRoaXMudmFsdWUpIHtcbiAgICAgICAgICAgIGNvbnN0IGZvcm10dGVkVGltZSA9IHRoaXMuX2Zvcm1hdFRpbWUodGhpcy52YWx1ZSwgdGhpcy5mb3JtYXQpO1xuICAgICAgICAgICAgY29uc3Qgc2VjdGlvbnMgPSBmb3JtdHRlZFRpbWUuc3BsaXQoL1tcXHM6XSsvKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuc2hvd0hvdXJzTGlzdCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRIb3VyID0gc2VjdGlvbnNbMF07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnNob3dNaW51dGVzTGlzdCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRNaW51dGUgPSB0aGlzLnNob3dIb3Vyc0xpc3QgPyBzZWN0aW9uc1sxXSA6IHNlY3Rpb25zWzBdO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy5zaG93QW1QbUxpc3QgJiYgdGhpcy5fYW1wbUl0ZW1zICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEFtUG0gPSBzZWN0aW9uc1tzZWN0aW9ucy5sZW5ndGggLSAxXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGVkSG91ciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkSG91ciA9ICF0aGlzLnNob3dIb3Vyc0xpc3QgJiYgdGhpcy52YWx1ZSA/IHRoaXMudmFsdWUuZ2V0SG91cnMoKS50b1N0cmluZygpIDpcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dIb3Vyc0xpc3QgPyBgJHt0aGlzLl9ob3VySXRlbXNbM119YCA6ICcwJztcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5zZWxlY3RlZE1pbnV0ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkTWludXRlID0gIXRoaXMuc2hvd01pbnV0ZXNMaXN0ICYmIHRoaXMudmFsdWUgPyB0aGlzLnZhbHVlLmdldE1pbnV0ZXMoKS50b1N0cmluZygpIDogJzAnO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGVkQW1QbSA9PT0gdW5kZWZpbmVkICYmIHRoaXMuX2FtcG1JdGVtcyAhPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEFtUG0gPSB0aGlzLl9hbXBtSXRlbXNbM107XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9wcmV2U2VsZWN0ZWRIb3VyID0gdGhpcy5zZWxlY3RlZEhvdXI7XG4gICAgICAgIHRoaXMuX3ByZXZTZWxlY3RlZE1pbnV0ZSA9IHRoaXMuc2VsZWN0ZWRNaW51dGU7XG4gICAgICAgIHRoaXMuX3ByZXZTZWxlY3RlZEFtUG0gPSB0aGlzLnNlbGVjdGVkQW1QbTtcblxuICAgICAgICB0aGlzLl9vblRvdWNoZWRDYWxsYmFjaygpO1xuXG4gICAgICAgIHRoaXMuX3VwZGF0ZUhvdXJWaWV3KDAsIElURU1TX0NPVU5UKTtcbiAgICAgICAgdGhpcy5fdXBkYXRlTWludXRlVmlldygwLCBJVEVNU19DT1VOVCk7XG4gICAgICAgIHRoaXMuX3VwZGF0ZUFtUG1WaWV3KDAsIElURU1TX0NPVU5UKTtcblxuICAgICAgICBpZiAodGhpcy5zZWxlY3RlZEhvdXIpIHtcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsSG91ckludG9WaWV3KHRoaXMuc2VsZWN0ZWRIb3VyKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5zZWxlY3RlZE1pbnV0ZSkge1xuICAgICAgICAgICAgdGhpcy5zY3JvbGxNaW51dGVJbnRvVmlldyh0aGlzLnNlbGVjdGVkTWludXRlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5zZWxlY3RlZEFtUG0pIHtcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsQW1QbUludG9WaWV3KHRoaXMuc2VsZWN0ZWRBbVBtKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5ob3VyTGlzdCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaG91ckxpc3QubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLm1pbnV0ZUxpc3QpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1pbnV0ZUxpc3QubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9vbkRyb3BEb3duQ2xvc2VkKCk6IHZvaWQge1xuICAgICAgICBjb25zdCBvbGRWYWx1ZSA9IHRoaXMudmFsdWU7XG4gICAgICAgIGNvbnN0IG5ld1ZhbCA9IHRoaXMuX2NvbnZlcnRNaW5NYXhWYWx1ZSh0aGlzLmRpc3BsYXlWYWx1ZSk7XG5cbiAgICAgICAgaWYgKHRoaXMuX2lzVmFsdWVWYWxpZChuZXdWYWwpKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMudmFsdWUgfHwgb2xkVmFsdWUuZ2V0VGltZSgpICE9PSBuZXdWYWwuZ2V0VGltZSgpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy52YWx1ZSA9IG5ld1ZhbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZGlzcGxheVZhbHVlID0gdGhpcy5pbnB1dEZvcm1hdC50cmFuc2Zvcm0odGhpcy5fZm9ybWF0VGltZShvbGRWYWx1ZSwgdGhpcy5mb3JtYXQpKTtcblxuICAgICAgICAgICAgY29uc3QgYXJnczogSWd4VGltZVBpY2tlclZhbGlkYXRpb25GYWlsZWRFdmVudEFyZ3MgPSB7XG4gICAgICAgICAgICAgICAgdGltZVBpY2tlcjogdGhpcyxcbiAgICAgICAgICAgICAgICBjdXJyZW50VmFsdWU6IG5ld1ZhbCxcbiAgICAgICAgICAgICAgICBzZXRUaHJvdWdoVUk6IHRydWVcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB0aGlzLm9uVmFsaWRhdGlvbkZhaWxlZC5lbWl0KGFyZ3MpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIGdldEVkaXRFbGVtZW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faW5wdXQgPyB0aGlzLl9pbnB1dC5uYXRpdmVFbGVtZW50IDogbnVsbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIGdldElucHV0R3JvdXBFbGVtZW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ncm91cCA/IHRoaXMuZ3JvdXAuZWxlbWVudC5uYXRpdmVFbGVtZW50IDogbnVsbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIHdyaXRlVmFsdWUodmFsdWU6IERhdGUpIHtcbiAgICAgICAgLy8gdXNlIHRoaXMgZmxhZyB0byBtYWtlIHN1cmUgdGhhdCBtaW4vbWF4VmFsdWUgYXJlIGNoZWNrZWQgKGluIF9jb252ZXJ0TWluTWF4VmFsdWUoKSBtZXRob2QpXG4gICAgICAgIC8vIGFnYWluc3QgdGhlIHJlYWwgdmFsdWUgd2hlbiBpbml0aWFsaXppbmcgdGhlIGNvbXBvbmVudCBhbmQgdmFsdWUgaXMgYm91bmQgdmlhIG5nTW9kZWxcbiAgICAgICAgdGhpcy5fZGF0ZUZyb21Nb2RlbCA9IHZhbHVlO1xuXG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcblxuICAgICAgICBpZiAodGhpcy5tb2RlID09PSBJbnRlcmFjdGlvbk1vZGUuRHJvcERvd24pIHtcbiAgICAgICAgICAgIHRoaXMuZGlzcGxheVZhbHVlID0gdGhpcy5fZm9ybWF0VGltZSh0aGlzLnZhbHVlLCB0aGlzLmZvcm1hdCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIHJlZ2lzdGVyT25DaGFuZ2UoZm46IChfOiBEYXRlKSA9PiB2b2lkKSB7IHRoaXMuX29uQ2hhbmdlQ2FsbGJhY2sgPSBmbjsgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4gdm9pZCkgeyB0aGlzLl9vblRvdWNoZWRDYWxsYmFjayA9IGZuOyB9XG5cbiAgICAvKipcbiAgICAgKiBvcGVucyB0aGUgZGlhbG9nLlxuICAgICAqIEBwYXJhbSB0YXJnZXQgSFRNTEVsZW1lbnQgLSB0aGUgdGFyZ2V0IGVsZW1lbnQgdG8gdXNlIGZvciBwb3NpdGlvbmluZyB0aGUgZHJvcCBkb3duIGNvbnRhaW5lciBhY2NvcmRpbmcgdG9cbiAgICAgKiBgYGBodG1sXG4gICAgICogPGlneC10aW1lLXBpY2tlciBbdmFsdWVdPVwiZGF0ZVwiIG1vZGU9XCJkcm9wZG93blwiICNyZXRlbXBsYXRlZD5cbiAgICAgKiAgIDxuZy10ZW1wbGF0ZSBpZ3hUaW1lUGlja2VyVGVtcGxhdGUgbGV0LW9wZW5EaWFsb2c9XCJvcGVuRGlhbG9nXCJcbiAgICAgKiAgICAgICAgICAgICAgICBsZXQtZGlzcGxheVRpbWU9XCJkaXNwbGF5VGltZVwiPlxuICAgICAqICAgICA8aWd4LWlucHV0LWdyb3VwPlxuICAgICAqICAgICAgIDxpbnB1dCAjZHJvcERvd25UYXJnZXQgaWd4SW5wdXQgW3ZhbHVlXT1cImRpc3BsYXlUaW1lXCIgLz5cbiAgICAgKiAgICAgICA8aWd4LXN1ZmZpeCAoY2xpY2spPVwib3BlbkRpYWxvZyhkcm9wRG93blRhcmdldClcIj5cbiAgICAgKiAgICAgICAgIDxpZ3gtaWNvbj5hbGFybTwvaWd4LWljb24+XG4gICAgICogICAgICAgPC9pZ3gtc3VmZml4PlxuICAgICAqICAgICA8L2lneC1pbnB1dC1ncm91cD5cbiAgICAgKiAgIDwvbmctdGVtcGxhdGU+XG4gICAgICogPC9pZ3gtdGltZS1waWNrZXI+XG4gICAgICogYGBgXG4gICAgICovXG4gICAgcHVibGljIG9wZW5EaWFsb2codGFyZ2V0PzogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICAgICAgaWYgKCF0aGlzLnRvZ2dsZVJlZi5jb2xsYXBzZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9vbkRyb3BEb3duQ2xvc2VkKCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc2V0dGluZ3MgPSB0aGlzLm92ZXJsYXlTZXR0aW5ncztcblxuICAgICAgICBpZiAodGFyZ2V0ICYmIHNldHRpbmdzICYmIHNldHRpbmdzLnBvc2l0aW9uU3RyYXRlZ3kpIHtcbiAgICAgICAgICAgIHNldHRpbmdzLnBvc2l0aW9uU3RyYXRlZ3kuc2V0dGluZ3MudGFyZ2V0ID0gdGFyZ2V0O1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm91dGxldCkge1xuICAgICAgICAgICAgc2V0dGluZ3Mub3V0bGV0ID0gdGhpcy5vdXRsZXQ7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnRvZ2dsZVJlZi5vcGVuKHNldHRpbmdzKTtcbiAgICAgICAgdGhpcy5faW5pdGlhbGl6ZUNvbnRhaW5lcigpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNjcm9sbHMgYSBob3VyIGl0ZW0gaW50byB2aWV3LlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKnNjcmhpbnRvVmlldyhwaWNrZXIpIHtcbiAgICAgKnBpY2tlci5zY3JvbGxIb3VySW50b1ZpZXcoJzInKTtcbiAgICAgKn1cbiAgICAgKiBgYGBcbiAgICAgKmBgYGh0bWxcbiAgICAgKjxpZ3gtdGltZS1waWNrZXIgI3BpY2tlciBmb3JtYXQ9XCJoOm1tIHR0XCIgKG9uT3Blbik9XCJzY3JoaW50b1ZpZXcocGlja2VyKVwiPjwvaWd4LXRpbWUtcGlja2VyPlxuICAgICAqYGBgXG4gICAgICpAcGFyYW0gaXRlbSB0byBiZSBzY3JvbGxlZCBpbiB2aWV3LlxuICAgICAqL1xuICAgIHB1YmxpYyBzY3JvbGxIb3VySW50b1ZpZXcoaXRlbTogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLnNob3dIb3Vyc0xpc3QpIHtcbiAgICAgICAgICAgIGNvbnN0IGhvdXJJbnRvVmlldyA9IHRoaXMuX3Njcm9sbEl0ZW1JbnRvVmlldyhpdGVtLCB0aGlzLl9ob3VySXRlbXMsIHRoaXMuc2VsZWN0ZWRIb3VyLCB0aGlzLl9pc0hvdXJMaXN0TG9vcCwgJ2hvdXInKTtcbiAgICAgICAgICAgIGlmIChob3VySW50b1ZpZXcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9ob3VyVmlldyA9IGhvdXJJbnRvVmlldy52aWV3O1xuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRIb3VyID0gaG91ckludG9WaWV3LnNlbGVjdGVkSXRlbTtcbiAgICAgICAgICAgICAgICB0aGlzLl91cGRhdGVFZGl0YWJsZUlucHV0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTY3JvbGxzIGEgbWludXRlIGl0ZW0gaW50byB2aWV3LlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKnNjck1pbnRvVmlldyhwaWNrZXIpIHtcbiAgICAgKnBpY2tlci5zY3JvbGxNaW51dGVJbnRvVmlldygnMycpO1xuICAgICAqfVxuICAgICAqIGBgYFxuICAgICAqYGBgaHRtbFxuICAgICAqPGlneC10aW1lLXBpY2tlciAjcGlja2VyIGZvcm1hdD1cImg6bW0gdHRcIiAob25PcGVuKT1cInNjck1pbnRvVmlldyhwaWNrZXIpXCI+PC9pZ3gtdGltZS1waWNrZXI+XG4gICAgICpgYGBcbiAgICAgKiBAcGFyYW0gaXRlbSB0byBiZSBzY3JvbGxlZCBpbiB2aWV3LlxuICAgICAqL1xuICAgIHB1YmxpYyBzY3JvbGxNaW51dGVJbnRvVmlldyhpdGVtOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuc2hvd01pbnV0ZXNMaXN0KSB7XG4gICAgICAgICAgICBjb25zdCBtaW51dGVJbnRvVmlldyA9IHRoaXMuX3Njcm9sbEl0ZW1JbnRvVmlldyhpdGVtLCB0aGlzLl9taW51dGVJdGVtcywgdGhpcy5zZWxlY3RlZE1pbnV0ZSwgdGhpcy5faXNNaW51dGVMaXN0TG9vcCwgJ21pbnV0ZScpO1xuICAgICAgICAgICAgaWYgKG1pbnV0ZUludG9WaWV3KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fbWludXRlVmlldyA9IG1pbnV0ZUludG9WaWV3LnZpZXc7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZE1pbnV0ZSA9IG1pbnV0ZUludG9WaWV3LnNlbGVjdGVkSXRlbTtcbiAgICAgICAgICAgICAgICB0aGlzLl91cGRhdGVFZGl0YWJsZUlucHV0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTY3JvbGxzIGFuIGFtcG0gaXRlbSBpbnRvIHZpZXcuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqc2NyQW1QbUludG9WaWV3KHBpY2tlcikge1xuICAgICAqcGlja2VyLnNjcm9sbEFtUG1JbnRvVmlldygnUE0nKTtcbiAgICAgKn1cbiAgICAgKiBgYGBcbiAgICAgKmBgYGh0bWxcbiAgICAgKjxpZ3gtdGltZS1waWNrZXIgI3BpY2tlciBmb3JtYXQ9XCJoOm1tIHR0XCIgKG9uT3Blbik9XCJzY3JBbVBtSW50b1ZpZXcocGlja2VyKVwiPjwvaWd4LXRpbWUtcGlja2VyPlxuICAgICAqYGBgXG4gICAgICogQHBhcmFtIGl0ZW0gdG8gYmUgc2Nyb2xsZWQgaW4gdmlldy5cbiAgICAgKi9cbiAgICBwdWJsaWMgc2Nyb2xsQW1QbUludG9WaWV3KGl0ZW06IHN0cmluZyk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5zaG93QW1QbUxpc3QpIHtcbiAgICAgICAgICAgIGNvbnN0IGFtcG1JbnRvVmlldyA9IHRoaXMuX3Njcm9sbEl0ZW1JbnRvVmlldyhpdGVtLCB0aGlzLl9hbXBtSXRlbXMsIHRoaXMuc2VsZWN0ZWRBbVBtLCBmYWxzZSwgbnVsbCk7XG4gICAgICAgICAgICBpZiAoYW1wbUludG9WaWV3KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fYW1wbVZpZXcgPSBhbXBtSW50b1ZpZXcudmlldztcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkQW1QbSA9IGFtcG1JbnRvVmlldy5zZWxlY3RlZEl0ZW07XG4gICAgICAgICAgICAgICAgdGhpcy5fdXBkYXRlRWRpdGFibGVJbnB1dCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyBuZXh0SG91cigpIHtcbiAgICAgICAgY29uc3QgbmV4dEhvdXIgPSB0aGlzLl9uZXh0SXRlbSh0aGlzLl9ob3VySXRlbXMsIHRoaXMuc2VsZWN0ZWRIb3VyLCB0aGlzLl9pc0hvdXJMaXN0TG9vcCwgJ2hvdXInKTtcbiAgICAgICAgdGhpcy5faG91clZpZXcgPSBuZXh0SG91ci52aWV3O1xuICAgICAgICB0aGlzLnNlbGVjdGVkSG91ciA9IG5leHRIb3VyLnNlbGVjdGVkSXRlbTtcblxuICAgICAgICB0aGlzLl91cGRhdGVFZGl0YWJsZUlucHV0KCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyBwcmV2SG91cigpIHtcbiAgICAgICAgY29uc3QgcHJldkhvdXIgPSB0aGlzLl9wcmV2SXRlbSh0aGlzLl9ob3VySXRlbXMsIHRoaXMuc2VsZWN0ZWRIb3VyLCB0aGlzLl9pc0hvdXJMaXN0TG9vcCwgJ2hvdXInKTtcbiAgICAgICAgdGhpcy5faG91clZpZXcgPSBwcmV2SG91ci52aWV3O1xuICAgICAgICB0aGlzLnNlbGVjdGVkSG91ciA9IHByZXZIb3VyLnNlbGVjdGVkSXRlbTtcblxuICAgICAgICB0aGlzLl91cGRhdGVFZGl0YWJsZUlucHV0KCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyBuZXh0TWludXRlKCkge1xuICAgICAgICBjb25zdCBuZXh0TWludXRlID0gdGhpcy5fbmV4dEl0ZW0odGhpcy5fbWludXRlSXRlbXMsIHRoaXMuc2VsZWN0ZWRNaW51dGUsIHRoaXMuX2lzTWludXRlTGlzdExvb3AsICdtaW51dGUnKTtcbiAgICAgICAgdGhpcy5fbWludXRlVmlldyA9IG5leHRNaW51dGUudmlldztcbiAgICAgICAgdGhpcy5zZWxlY3RlZE1pbnV0ZSA9IG5leHRNaW51dGUuc2VsZWN0ZWRJdGVtO1xuXG4gICAgICAgIHRoaXMuX3VwZGF0ZUVkaXRhYmxlSW5wdXQoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIHByZXZNaW51dGUoKSB7XG4gICAgICAgIGNvbnN0IHByZXZNaW51dGUgPSB0aGlzLl9wcmV2SXRlbSh0aGlzLl9taW51dGVJdGVtcywgdGhpcy5zZWxlY3RlZE1pbnV0ZSwgdGhpcy5faXNNaW51dGVMaXN0TG9vcCwgJ21pbnV0ZScpO1xuICAgICAgICB0aGlzLl9taW51dGVWaWV3ID0gcHJldk1pbnV0ZS52aWV3O1xuICAgICAgICB0aGlzLnNlbGVjdGVkTWludXRlID0gcHJldk1pbnV0ZS5zZWxlY3RlZEl0ZW07XG5cbiAgICAgICAgdGhpcy5fdXBkYXRlRWRpdGFibGVJbnB1dCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgbmV4dEFtUG0oKSB7XG4gICAgICAgIGNvbnN0IHNlbGVjdGVkSW5kZXggPSB0aGlzLl9hbXBtSXRlbXMuaW5kZXhPZih0aGlzLnNlbGVjdGVkQW1QbSk7XG5cbiAgICAgICAgaWYgKHNlbGVjdGVkSW5kZXggKyAxIDwgdGhpcy5fYW1wbUl0ZW1zLmxlbmd0aCAtIDMpIHtcbiAgICAgICAgICAgIHRoaXMuX3VwZGF0ZUFtUG1WaWV3KHNlbGVjdGVkSW5kZXggLSAyLCBzZWxlY3RlZEluZGV4ICsgNSk7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkQW1QbSA9IHRoaXMuX2FtcG1JdGVtc1tzZWxlY3RlZEluZGV4ICsgMV07XG5cbiAgICAgICAgICAgIHRoaXMuX3VwZGF0ZUVkaXRhYmxlSW5wdXQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgcHJldkFtUG0oKSB7XG4gICAgICAgIGNvbnN0IHNlbGVjdGVkSW5kZXggPSB0aGlzLl9hbXBtSXRlbXMuaW5kZXhPZih0aGlzLnNlbGVjdGVkQW1QbSk7XG5cbiAgICAgICAgaWYgKHNlbGVjdGVkSW5kZXggPiAzKSB7XG4gICAgICAgICAgICB0aGlzLl91cGRhdGVBbVBtVmlldyhzZWxlY3RlZEluZGV4IC0gNCwgc2VsZWN0ZWRJbmRleCArIDMpO1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEFtUG0gPSB0aGlzLl9hbXBtSXRlbXNbc2VsZWN0ZWRJbmRleCAtIDFdO1xuXG4gICAgICAgICAgICB0aGlzLl91cGRhdGVFZGl0YWJsZUlucHV0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJZiBjdXJyZW50IHZhbHVlIGlzIHZhbGlkIHNlbGVjdHMgaXQsIGNsb3NlcyB0aGUgZGlhbG9nIGFuZCByZXR1cm5zIHRydWUsIG90aGVyd2lzZSByZXR1cm5zIGZhbHNlLlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8aWd4LWRpYWxvZyBjbGFzcz1cImlneC10aW1lLXBpY2tlcl9fZGlhbG9nLXBvcHVwXCIgW3JpZ2h0QnV0dG9uTGFiZWxdPVwib2tCdXR0b25MYWJlbFwiIChvblJpZ2h0QnV0dG9uU2VsZWN0KT1cIm9rQnV0dG9uQ2xpY2soKVwiPlxuICAgICAqIC8vLi5cbiAgICAgKiA8L2lneC1kaWFsb2c+XG4gICAgICogYGBgXG4gICAgICovXG4gICAgcHVibGljIG9rQnV0dG9uQ2xpY2soKTogYm9vbGVhbiB7XG4gICAgICAgIGNvbnN0IHRpbWUgPSB0aGlzLl9nZXRTZWxlY3RlZFRpbWUoKTtcbiAgICAgICAgaWYgKHRoaXMuX2lzVmFsdWVWYWxpZCh0aW1lKSkge1xuICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgICAgICAgdGhpcy52YWx1ZSA9IHRpbWU7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGFyZ3M6IElneFRpbWVQaWNrZXJWYWxpZGF0aW9uRmFpbGVkRXZlbnRBcmdzID0ge1xuICAgICAgICAgICAgICAgIHRpbWVQaWNrZXI6IHRoaXMsXG4gICAgICAgICAgICAgICAgY3VycmVudFZhbHVlOiB0aW1lLFxuICAgICAgICAgICAgICAgIHNldFRocm91Z2hVSTogdHJ1ZVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHRoaXMub25WYWxpZGF0aW9uRmFpbGVkLmVtaXQoYXJncyk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDbG9zZXMgdGhlIGRpYWxvZyB3aXRob3V0IHNlbGVjdGluZyB0aGUgY3VycmVudCB2YWx1ZS5cbiAgICAgKiBgYGBodG1sXG4gICAgICogPGlneC1kaWFsb2cgY2xhc3M9XCJpZ3gtdGltZS1waWNrZXJfX2RpYWxvZy1wb3B1cFwiIFtsZWZ0QnV0dG9uTGFiZWxdPVwiY2FuY2VsQnV0dG9uTGFiZWxcIiAob25MZWZ0QnV0dG9uU2VsZWN0KT1cImNhbmNlbEJ1dHRvbkNsaWNrKClcIj5cbiAgICAgKiAvLy4uLlxuICAgICAqIDwvaWd4LWRpYWxvZz5cbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBwdWJsaWMgY2FuY2VsQnV0dG9uQ2xpY2soKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm1vZGUgPT09IEludGVyYWN0aW9uTW9kZS5Ecm9wRG93bikge1xuICAgICAgICAgICAgdGhpcy5kaXNwbGF5VmFsdWUgPSB0aGlzLl9mb3JtYXRUaW1lKHRoaXMudmFsdWUsIHRoaXMuZm9ybWF0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY2xvc2UoKTtcblxuICAgICAgICB0aGlzLnNlbGVjdGVkSG91ciA9IHRoaXMuX3ByZXZTZWxlY3RlZEhvdXI7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRNaW51dGUgPSB0aGlzLl9wcmV2U2VsZWN0ZWRNaW51dGU7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRBbVBtID0gdGhpcy5fcHJldlNlbGVjdGVkQW1QbTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGFuIGFycmF5IG9mIHRoZSBob3VycyBjdXJyZW50bHkgaW4gdmlldy5cbiAgICAgKmBgYGh0bWxcbiAgICAgKkBWaWV3Q2hpbGQoXCJNeUNoaWxkXCIpXG4gICAgICpwcml2YXRlIHBpY2tlcjogSWd4VGltZVBpY2tlckNvbXBvbmVudDtcbiAgICAgKm5nQWZ0ZXJWaWV3SW5pdCgpe1xuICAgICAqICAgIGxldCBoSW5WaWV3ID0gdGhpcy5waWNrZXIuaG91cnNJblZpZXc7XG4gICAgICp9XG4gICAgICpgYGBcbiAgICAgKi9cbiAgICBwdWJsaWMgaG91cnNJblZpZXcoKTogc3RyaW5nW10ge1xuICAgICAgICByZXR1cm4gdGhpcy5faG91clZpZXcuZmlsdGVyKChob3VyKSA9PiBob3VyICE9PSAnJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbiBhcnJheSBvZiB0aGUgbWludXRlcyBjdXJyZW50bHkgaW4gdmlldy5cbiAgICAgKmBgYGh0bWxcbiAgICAgKkBWaWV3Q2hpbGQoXCJNeUNoaWxkXCIpXG4gICAgICpwcml2YXRlIHBpY2tlcjogSWd4VGltZVBpY2tlckNvbXBvbmVudDtcbiAgICAgKm5nQWZ0ZXJWaWV3SW5pdCgpe1xuICAgICAqICAgIGxldCBtaW5JblZpZXcgPSB0aGlzLnBpY2tlci5taW51dGVzSW5WaWV3O1xuICAgICAqfVxuICAgICAqYGBgXG4gICAgICovXG4gICAgcHVibGljIG1pbnV0ZXNJblZpZXcoKTogc3RyaW5nW10ge1xuICAgICAgICByZXR1cm4gdGhpcy5fbWludXRlVmlldy5maWx0ZXIoKG1pbnV0ZSkgPT4gbWludXRlICE9PSAnJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbiBhcnJheSBvZiB0aGUgQU0vUE0gY3VycmVudGx5IGluIHZpZXcuXG4gICAgICpgYGBodG1sXG4gICAgICpAVmlld0NoaWxkKFwiTXlDaGlsZFwiKVxuICAgICAqcHJpdmF0ZSBwaWNrZXI6IElneFRpbWVQaWNrZXJDb21wb25lbnQ7XG4gICAgICpuZ0FmdGVyVmlld0luaXQoKXtcbiAgICAgKiAgICBsZXQgQXBJblZpZXcgPSB0aGlzLnBpY2tlci5hbXBtSW5WaWV3O1xuICAgICAqfVxuICAgICAqYGBgXG4gICAgICovXG4gICAgcHVibGljIGFtcG1JblZpZXcoKTogc3RyaW5nW10ge1xuICAgICAgICByZXR1cm4gdGhpcy5fYW1wbVZpZXcuZmlsdGVyKChhbXBtKSA9PiBhbXBtICE9PSAnJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2xvc2VzIHRoZSBkcm9wZG93bi9kaWFsb2cuXG4gICAgICogYGBgaHRtbFxuICAgICAqPGlneC10aW1lLXBpY2tlciAjdGltZVBpY2tlcj48L2lneC10aW1lLXBpY2tlcj5cbiAgICAgKiBgYGBcbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogQFZpZXdDaGlsZCgndGltZVBpY2tlcicsIHsgcmVhZDogSWd4VGltZVBpY2tlckNvbXBvbmVudCB9KSBwaWNrZXI6IElneFRpbWVQaWNrZXJDb21wb25lbnQ7XG4gICAgICogcGlja2VyLmNsb3NlKCk7XG4gICAgICogYGBgXG4gICAgICovXG4gICAgcHVibGljIGNsb3NlKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnRvZ2dsZVJlZi5jbG9zZSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgcGFyc2VNYXNrKHByZXNlcnZlQW1QbSA9IHRydWUpOiBzdHJpbmcge1xuICAgICAgICBjb25zdCBtYXNrV2l0aEFtUG0gPSB0aGlzLm1hc2sucmVwbGFjZShuZXcgUmVnRXhwKCcwJywgJ2cnKSwgdGhpcy5wcm9tcHRDaGFyKS5yZXBsYWNlKCdMTCcsICdBTScpO1xuICAgICAgICBjb25zdCBwdXJlTWFzayA9IHRoaXMubWFzay5yZXBsYWNlKG5ldyBSZWdFeHAoJzAnLCAnZycpLCB0aGlzLnByb21wdENoYXIpLnJlcGxhY2UobmV3IFJlZ0V4cCgnTCcsICdnJyksIHRoaXMucHJvbXB0Q2hhcik7XG5cbiAgICAgICAgcmV0dXJuIHByZXNlcnZlQW1QbSA/IG1hc2tXaXRoQW1QbSA6IHB1cmVNYXNrO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgY2xlYXIoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLnRvZ2dsZVJlZi5jb2xsYXBzZWQpIHtcbiAgICAgICAgICAgIHRoaXMuY2xlYXJlZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmlzTm90RW1wdHkgPSBmYWxzZTtcblxuICAgICAgICAgICAgY29uc3Qgb2xkVmFsID0gbmV3IERhdGUodGhpcy52YWx1ZSk7XG5cbiAgICAgICAgICAgIHRoaXMuZGlzcGxheVZhbHVlID0gJyc7XG4gICAgICAgICAgICB0aGlzLnZhbHVlLnNldEhvdXJzKDAsIDApO1xuXG4gICAgICAgICAgICBpZiAob2xkVmFsLmdldFRpbWUoKSAhPT0gdGhpcy52YWx1ZS5nZXRUaW1lKCkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBhcmdzOiBJZ3hUaW1lUGlja2VyVmFsdWVDaGFuZ2VkRXZlbnRBcmdzID0ge1xuICAgICAgICAgICAgICAgICAgICBvbGRWYWx1ZTogb2xkVmFsLFxuICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZTogdGhpcy52YWx1ZVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgdGhpcy5vblZhbHVlQ2hhbmdlZC5lbWl0KGFyZ3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyBvbklucHV0KGV2ZW50KTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHZhbCA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICAgICAgY29uc3Qgb2xkVmFsID0gbmV3IERhdGUodGhpcy52YWx1ZSk7XG5cbiAgICAgICAgdGhpcy5pc05vdEVtcHR5ID0gdmFsICE9PSB0aGlzLnBhcnNlTWFzayhmYWxzZSk7XG5cbiAgICAgICAgLy8gaGFuZGxlIGNhc2VzIHdoZXJlIGFsbCBlbXB0eSBwb3NpdGlvbnMgKHByb210cykgYXJlIGZpbGxlZCBhbmQgd2Ugd2FudCB0byB1cGRhdGVcbiAgICAgICAgLy8gdGltZXBpY2tlciBvd24gdmFsdWUgcHJvcGVydHkgaWYgaXQgaXMgYSB2YWxpZCBEYXRlXG4gICAgICAgIGlmICh2YWwuaW5kZXhPZih0aGlzLnByb21wdENoYXIpID09PSAtMSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuX2lzRW50cnlWYWxpZCh2YWwpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV3VmFsID0gdGhpcy5fY29udmVydE1pbk1heFZhbHVlKHZhbCk7XG4gICAgICAgICAgICAgICAgaWYgKG9sZFZhbC5nZXRUaW1lKCkgIT09IG5ld1ZhbC5nZXRUaW1lKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52YWx1ZSA9IG5ld1ZhbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IGFyZ3M6IElneFRpbWVQaWNrZXJWYWxpZGF0aW9uRmFpbGVkRXZlbnRBcmdzID0ge1xuICAgICAgICAgICAgICAgICAgICB0aW1lUGlja2VyOiB0aGlzLFxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50VmFsdWU6IHZhbCxcbiAgICAgICAgICAgICAgICAgICAgc2V0VGhyb3VnaFVJOiBmYWxzZVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgdGhpcy5vblZhbGlkYXRpb25GYWlsZWQuZW1pdChhcmdzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGhhbmRsZSBjYXNlcyB3aGVyZSB0aGUgdXNlciBkZWxldGVzIHRoZSBkaXNwbGF5IHZhbHVlICh3aGVuIHByZXNzaW5nIGJhY2tzcGFjZSBvciBkZWxldGUpXG4gICAgICAgIH0gZWxzZSBpZiAoIXRoaXMudmFsdWUgfHwgIXZhbCB8fCB2YWwgPT09IHRoaXMucGFyc2VNYXNrKGZhbHNlKSkge1xuICAgICAgICAgICAgdGhpcy5pc05vdEVtcHR5ID0gZmFsc2U7XG5cbiAgICAgICAgICAgIHRoaXMudmFsdWUuc2V0SG91cnMoMCwgMCk7XG4gICAgICAgICAgICB0aGlzLmRpc3BsYXlWYWx1ZSA9IHZhbDtcblxuICAgICAgICAgICAgaWYgKG9sZFZhbC5nZXRUaW1lKCkgIT09IHRoaXMudmFsdWUuZ2V0VGltZSgpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYXJnczogSWd4VGltZVBpY2tlclZhbHVlQ2hhbmdlZEV2ZW50QXJncyA9IHtcbiAgICAgICAgICAgICAgICAgICAgb2xkVmFsdWU6IG9sZFZhbCxcbiAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWU6IHRoaXMudmFsdWVcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHRoaXMub25WYWx1ZUNoYW5nZWQuZW1pdChhcmdzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgb25Gb2N1cyhldmVudCk6IHZvaWQge1xuICAgICAgICB0aGlzLmlzTm90RW1wdHkgPSBldmVudC50YXJnZXQudmFsdWUgIT09IHRoaXMucGFyc2VNYXNrKGZhbHNlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIG9uQmx1cihldmVudCk6IHZvaWQge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcblxuICAgICAgICB0aGlzLmlzTm90RW1wdHkgPSB2YWx1ZSAhPT0gJyc7XG4gICAgICAgIHRoaXMuZGlzcGxheVZhbHVlID0gdmFsdWU7XG5cbiAgICAgICAgaWYgKHZhbHVlICYmIHZhbHVlICE9PSB0aGlzLnBhcnNlTWFzaygpKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5faXNFbnRyeVZhbGlkKHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld1ZhbCA9IHRoaXMuX2NvbnZlcnRNaW5NYXhWYWx1ZSh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLnZhbHVlIHx8IHRoaXMudmFsdWUuZ2V0VGltZSgpICE9PSBuZXdWYWwuZ2V0VGltZSgpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmFsdWUgPSBuZXdWYWw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCBhcmdzOiBJZ3hUaW1lUGlja2VyVmFsaWRhdGlvbkZhaWxlZEV2ZW50QXJncyA9IHtcbiAgICAgICAgICAgICAgICAgICAgdGltZVBpY2tlcjogdGhpcyxcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFZhbHVlOiB2YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgc2V0VGhyb3VnaFVJOiBmYWxzZVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgdGhpcy5vblZhbGlkYXRpb25GYWlsZWQuZW1pdChhcmdzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3Bpbk9uRWRpdChldmVudCk6IHZvaWQge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGxldCBzaWduOiBudW1iZXI7XG4gICAgICAgIGxldCBkaXNwbGF5VmFsOiBzdHJpbmc7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRWYWwgPSBuZXcgRGF0ZSh0aGlzLnZhbHVlKTtcbiAgICAgICAgY29uc3QgbWluID0gdGhpcy5taW5WYWx1ZSA/IHRoaXMuX2NvbnZlcnRNaW5NYXhWYWx1ZSh0aGlzLm1pblZhbHVlKSA6IHRoaXMuX2NvbnZlcnRNaW5NYXhWYWx1ZSgnMDA6MDAnKTtcbiAgICAgICAgY29uc3QgbWF4ID0gdGhpcy5tYXhWYWx1ZSA/IHRoaXMuX2NvbnZlcnRNaW5NYXhWYWx1ZSh0aGlzLm1heFZhbHVlKSA6IHRoaXMuX2NvbnZlcnRNaW5NYXhWYWx1ZSgnMjQ6MDAnKTtcblxuICAgICAgICBjb25zdCBjdXJzb3IgPSB0aGlzLl9nZXRDdXJzb3JQb3NpdGlvbigpO1xuXG4gICAgICAgIGlmIChldmVudC5rZXkpIHtcbiAgICAgICAgICAgIGNvbnN0IGtleSA9IGV2ZW50LmtleTtcbiAgICAgICAgICAgIHNpZ24gPSBrZXkgPT09IEtFWVMuRE9XTl9BUlJPVyB8fCBrZXkgPT09IEtFWVMuRE9XTl9BUlJPV19JRSA/IC0xIDogMTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChldmVudC5kZWx0YVkpIHtcbiAgICAgICAgICAgIHNpZ24gPSBldmVudC5kZWx0YVkgPCAwID8gMSA6IC0xO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0aGlzLmRpc3BsYXlWYWx1ZSkge1xuICAgICAgICAgICAgdGhpcy52YWx1ZSA9IG1pbjtcbiAgICAgICAgICAgIGRpc3BsYXlWYWwgPSB0aGlzLl9mb3JtYXRUaW1lKHRoaXMudmFsdWUsIHRoaXMuZm9ybWF0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGhEZWx0YSA9IHRoaXMuaXRlbXNEZWx0YS5ob3VycyAqIDYwICsgKHNpZ24gKiB0aGlzLnZhbHVlLmdldE1pbnV0ZXMoKSk7XG4gICAgICAgICAgICBjb25zdCBtRGVsdGEgPSB0aGlzLml0ZW1zRGVsdGEubWludXRlcztcblxuICAgICAgICAgICAgaWYgKHRoaXMuc2hvd0hvdXJzTGlzdCAmJiBIT1VSU19QT1MuaW5kZXhPZihjdXJzb3IpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIHRoaXMudmFsdWUgPSB0aGlzLl9zcGluSG91cnMoY3VycmVudFZhbCwgbWluLCBtYXgsIGhEZWx0YSwgc2lnbik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnNob3dNaW51dGVzTGlzdCAmJlxuICAgICAgICAgICAgICAgICgodGhpcy5zaG93SG91cnNMaXN0ICYmIE1JTlVURVNfUE9TLmluZGV4T2YoY3Vyc29yKSAhPT0gLTEpIHx8ICghdGhpcy5zaG93SG91cnNMaXN0ICYmIEhPVVJTX1BPUy5pbmRleE9mKGN1cnNvcikgIT09IC0xKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52YWx1ZSA9IHRoaXMuX3NwaW5NaW51dGVzKGN1cnJlbnRWYWwsIG1EZWx0YSwgc2lnbik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnNob3dBbVBtTGlzdCkge1xuICAgICAgICAgICAgICAgIGlmICgoKCF0aGlzLnNob3dIb3Vyc0xpc3QgfHwgIXRoaXMuc2hvd01pbnV0ZXNMaXN0KSAmJiBNSU5VVEVTX1BPUy5pbmRleE9mKGN1cnNvcikgIT09IC0xKSB8fFxuICAgICAgICAgICAgICAgICAgICAodGhpcy5zaG93SG91cnNMaXN0ICYmIHRoaXMuc2hvd01pbnV0ZXNMaXN0ICYmICBBTVBNX1BPUy5pbmRleE9mKGN1cnNvcikgIT09IC0xKSkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzZWN0aW9ucyA9IHRoaXMuZGlzcGxheVZhbHVlLnNwbGl0KC9bXFxzOl0rLyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaWduID0gc2VjdGlvbnNbc2VjdGlvbnMubGVuZ3RoIC0gMV0gPT09ICdBTScgPyAxIDogLTE7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50VmFsLnNldEhvdXJzKGN1cnJlbnRWYWwuZ2V0SG91cnMoKSArIChzaWduICogMTIpKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy52YWx1ZSA9IGN1cnJlbnRWYWw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBkaXNwbGF5VmFsID0gdGhpcy5fZm9ybWF0VGltZSh0aGlzLnZhbHVlLCB0aGlzLmZvcm1hdCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBtaW5vciBoYWNrIGZvciBwcmV2ZW50aW5nIGN1cnNvciBqdW1waW5nIGluIElFXG4gICAgICAgIHRoaXMuX2Rpc3BsYXlWYWx1ZSA9IHRoaXMuaW5wdXRGb3JtYXQudHJhbnNmb3JtKGRpc3BsYXlWYWwpO1xuICAgICAgICB0aGlzLmlucHV0Lm5hdGl2ZUVsZW1lbnQudmFsdWUgPSB0aGlzLl9kaXNwbGF5VmFsdWU7XG4gICAgICAgIHRoaXMuX3NldEN1cnNvclBvc2l0aW9uKGN1cnNvcik7XG5cbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuX3NldEN1cnNvclBvc2l0aW9uKGN1cnNvcik7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbkBOZ01vZHVsZSh7XG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIElneFRpbWVQaWNrZXJDb21wb25lbnQsXG4gICAgICAgIElneEhvdXJJdGVtRGlyZWN0aXZlLFxuICAgICAgICBJZ3hJdGVtTGlzdERpcmVjdGl2ZSxcbiAgICAgICAgSWd4TWludXRlSXRlbURpcmVjdGl2ZSxcbiAgICAgICAgSWd4QW1QbUl0ZW1EaXJlY3RpdmUsXG4gICAgICAgIElneFRpbWVQaWNrZXJUZW1wbGF0ZURpcmVjdGl2ZSxcbiAgICAgICAgSWd4VGltZVBpY2tlckFjdGlvbnNEaXJlY3RpdmUsXG4gICAgICAgIFRpbWVEaXNwbGF5Rm9ybWF0UGlwZSxcbiAgICAgICAgVGltZUlucHV0Rm9ybWF0UGlwZVxuICAgIF0sXG4gICAgZXhwb3J0czogW1xuICAgICAgICBJZ3hUaW1lUGlja2VyQ29tcG9uZW50LFxuICAgICAgICBJZ3hUaW1lUGlja2VyVGVtcGxhdGVEaXJlY3RpdmUsXG4gICAgICAgIElneFRpbWVQaWNrZXJBY3Rpb25zRGlyZWN0aXZlLFxuICAgICAgICBUaW1lRGlzcGxheUZvcm1hdFBpcGUsXG4gICAgICAgIFRpbWVJbnB1dEZvcm1hdFBpcGVcbiAgICBdLFxuICAgIGltcG9ydHM6IFtcbiAgICAgICAgQ29tbW9uTW9kdWxlLFxuICAgICAgICBJZ3hJbnB1dEdyb3VwTW9kdWxlLFxuICAgICAgICBJZ3hJY29uTW9kdWxlLFxuICAgICAgICBJZ3hCdXR0b25Nb2R1bGUsXG4gICAgICAgIElneE1hc2tNb2R1bGUsXG4gICAgICAgIElneFRvZ2dsZU1vZHVsZVxuICAgIF0sXG4gICAgcHJvdmlkZXJzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBJZ3hUaW1lUGlja2VyTW9kdWxlIHsgfVxuIl19