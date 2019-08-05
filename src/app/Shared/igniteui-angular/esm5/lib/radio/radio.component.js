/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, HostBinding, Input, Output, ViewChild, ElementRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { isIE } from '../core/utils';
/**
 * @record
 */
export function IChangeRadioEventArgs() { }
if (false) {
    /** @type {?} */
    IChangeRadioEventArgs.prototype.value;
    /** @type {?} */
    IChangeRadioEventArgs.prototype.radio;
}
/** @enum {string} */
var RadioLabelPosition = {
    BEFORE: 'before',
    AFTER: 'after',
};
export { RadioLabelPosition };
/** @type {?} */
var nextId = 0;
/** @type {?} */
var noop = function () { };
var ɵ0 = noop;
/**
 * **Ignite UI for Angular Radio Button** -
 * [Documentation](https://www.infragistics.com/products/ignite-ui-angular/angular/components/radio_button.html)
 *
 * The Ignite UI Radio Button allows the user to select a single option from an available set of options that are listed side by side.
 *
 * Example:
 * ```html
 * <igx-radio>
 *   Simple radio button
 * </igx-radio>
 * ```
 */
var IgxRadioComponent = /** @class */ (function () {
    function IgxRadioComponent() {
        /**
         * Sets/gets the `id` of the radio component.
         * If not set, the `id` of the first radio component will be `"igx-radio-0"`.
         * ```html
         * <igx-radio id = "my-first-radio"></igx-radio>
         * ```
         * ```typescript
         * let radioId =  this.radio.id;
         * ```
         * \@memberof IgxRadioComponent
         */
        this.id = "igx-radio-" + nextId++;
        /**
         * Sets/gets the id of the `label` element in the radio component.
         * If not set, the id of the `label` in the first radio component will be `"igx-radio-0-label"`.
         * ```html
         * <igx-radio labelId = "Label1"></igx-radio>
         * ```
         * ```typescript
         * let labelId =  this.radio.labelId;
         * ```
         * \@memberof IgxRadioComponent
         */
        this.labelId = this.id + "-label";
        /**
         * Sets/gets the position of the `label` in the radio component.
         * If not set, `labelPosition` will have value `"after"`.
         * ```html
         * <igx-radio labelPosition = "before"></igx-radio>
         * ```
         * ```typescript
         * let labelPosition =  this.radio.labelPosition;
         * ```
         * \@memberof IgxRadioComponent
         */
        this.labelPosition = 'after';
        /**
         * Sets the value of the `tabindex` attribute.
         * ```html
         * <igx-radio [tabindex] = "1"></igx-radio>
         * ```
         * ```typescript
         * let tabIndex =  this.radio.tabindex;
         * ```
         * \@memberof IgxRadioComponent
         */
        this.tabindex = null;
        /**
         * Enables/disables the ripple effect on the radio button..
         * If not set, the `disableRipple` will have value `false`.
         * ```html
         * <igx-radio [disableRipple] = "true"></igx-radio>
         * ```
         * ```typescript
         * let isDisabledRipple =  this.radio.disableRipple;
         * ```
         * \@memberof IgxRadioComponent
         */
        this.disableRipple = false;
        /**
         * Sets/gets whether the radio button is required.
         * If not set, `required` will have value `false`.
         * ```html
         * <igx-radio [required] = "true"></igx-radio>
         * ```
         * ```typescript
         * let isRequired =  this.radio.required;
         * ```
         * \@memberof IgxRadioComponent
         */
        this.required = false;
        /**
         * Sets/gets the `aria-labelledby` attribute of the radio component.
         * If not set, the `aria-labelledby` will be equal to the value of `labelId` attribute.
         * ```html
         * <igx-radio aria-labelledby = "Radio1"></igx-radio>
         * ```
         * ```typescript
         * let ariaLabelledBy = this.radio.ariaLabelledBy;
         * ```
         * \@memberof IgxRadioComponent
         */
        this.ariaLabelledBy = this.labelId;
        /**
         * Sets/gets the `aria-label` attribute of the radio component.
         * ```html
         * <igx-radio aria-label = "Radio1"></igx-radio>
         * ```
         * ```typescript
         * let ariaLabel =  this.radio.ariaLabel;
         * ```
         * \@memberof IgxRadioComponent
         */
        this.ariaLabel = null;
        /**
         * An event that is emitted after the radio `value` is changed.
         * Provides references to the `IgxRadioComponent` and the `value` property as event arguments.
         * \@memberof IgxRadioComponent
         */
        this.change = new EventEmitter();
        /**
         * Returns the class of the radio component.
         * ```typescript
         * let radioClass = this.radio.cssClass;
         * ```
         * \@memberof IgxRadioComponent
         */
        this.cssClass = 'igx-radio';
        /**
         * Sets/gets  the `checked` attribute.
         * Default value is `false`.
         * ```html
         * <igx-radio [checked] = "true"></igx-radio>
         * ```
         * ```typescript
         * let isChecked =  this.radio.checked;
         * ```
         * \@memberof IgxRadioComponent
         */
        this.checked = false;
        /**
         * Sets/gets  the `disabled` attribute.
         * Default value is `false`.
         * ```html
         * <igx-radio [disabled] = "true"></igx-radio>
         * ```
         * ```typescript
         * let isDisabled =  this.radio.disabled;
         * ```
         * \@memberof IgxRadioComponent
         */
        this.disabled = false;
        /**
         * Sets/gets whether the radio component is on focus.
         * Default value is `false`.
         * ```typescript
         * this.radio.focus = true;
         * ```
         * ```typescript
         * let isFocused =  this.radio.focused;
         * ```
         * \@memberof IgxRadioComponent
         */
        this.focused = false;
        /**
         * @hidden
         */
        this.inputId = this.id + "-input";
        /**
         * @hidden
         */
        this._value = null;
        /**
         * @hidden
         */
        this._onTouchedCallback = noop;
        /**
         * @hidden
         */
        this._onChangeCallback = noop;
    }
    /**
     *@hidden
     */
    /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    IgxRadioComponent.prototype._onRadioChange = /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.stopPropagation();
    };
    /**
     *@hidden
     */
    /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    IgxRadioComponent.prototype._onRadioClick = /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.stopPropagation();
        this.select();
        if (isIE()) {
            this.nativeRadio.nativeElement.blur();
        }
    };
    /**
     *@hidden
     */
    /**
     * @hidden
     * @return {?}
     */
    IgxRadioComponent.prototype._onLabelClick = /**
     * @hidden
     * @return {?}
     */
    function () {
        this.select();
    };
    /**
     * Selects the current radio button.
     * ```typescript
     * this.radio.select();
     * ```
     * @memberof IgxRadioComponent
     */
    /**
     * Selects the current radio button.
     * ```typescript
     * this.radio.select();
     * ```
     * \@memberof IgxRadioComponent
     * @return {?}
     */
    IgxRadioComponent.prototype.select = /**
     * Selects the current radio button.
     * ```typescript
     * this.radio.select();
     * ```
     * \@memberof IgxRadioComponent
     * @return {?}
     */
    function () {
        if (this.disabled) {
            return;
        }
        this.checked = true;
        this.focused = false;
        this.change.emit({ value: this.value, radio: this });
        this._onChangeCallback(this.value);
    };
    /**
     * Checks whether the provided value is consistent to the current radio button.
     * If it is, the checked attribute will have value `true`;
     * ```typescript
     * this.radio.writeValue('radioButtonValue');
     * ```
     */
    /**
     * Checks whether the provided value is consistent to the current radio button.
     * If it is, the checked attribute will have value `true`;
     * ```typescript
     * this.radio.writeValue('radioButtonValue');
     * ```
     * @param {?} value
     * @return {?}
     */
    IgxRadioComponent.prototype.writeValue = /**
     * Checks whether the provided value is consistent to the current radio button.
     * If it is, the checked attribute will have value `true`;
     * ```typescript
     * this.radio.writeValue('radioButtonValue');
     * ```
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this._value = value;
        this.checked = (this._value === this.value);
    };
    /** @hidden */
    /**
     * @hidden
     * @return {?}
     */
    IgxRadioComponent.prototype.getEditElement = /**
     * @hidden
     * @return {?}
     */
    function () {
        return this.nativeRadio.nativeElement;
    };
    Object.defineProperty(IgxRadioComponent.prototype, "labelClass", {
        /**
         *@hidden
         */
        get: /**
         * @hidden
         * @return {?}
         */
        function () {
            switch (this.labelPosition) {
                case RadioLabelPosition.BEFORE:
                    return this.cssClass + "__label--before";
                case RadioLabelPosition.AFTER:
                default:
                    return this.cssClass + "__label";
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     *@hidden
     */
    /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    IgxRadioComponent.prototype.onFocus = /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.focused = true;
    };
    /**
     *@hidden
     */
    /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    IgxRadioComponent.prototype.onBlur = /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.focused = false;
        this._onTouchedCallback();
    };
    /**
     *@hidden
     */
    /**
     * @hidden
     * @param {?} fn
     * @return {?}
     */
    IgxRadioComponent.prototype.registerOnChange = /**
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
    IgxRadioComponent.prototype.registerOnTouched = /**
     * @hidden
     * @param {?} fn
     * @return {?}
     */
    function (fn) { this._onTouchedCallback = fn; };
    IgxRadioComponent.decorators = [
        { type: Component, args: [{
                    providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: IgxRadioComponent, multi: true }],
                    selector: 'igx-radio',
                    template: "<input #radio class=\"igx-radio__input\" type=\"radio\"\n    [id]=\"inputId\"\n    [name]=\"name\"\n    [value]=\"value\"\n    [tabindex]=\"tabindex\"\n    [disabled]=\"disabled\"\n    [checked]=\"checked\"\n    [required]=\"required\"\n    [attr.aria-checked]=\"checked\"\n    [attr.aria-labelledby]=\"ariaLabelledBy\"\n    [attr.aria-label]=\"ariaLabel\"\n    (click)=\"_onRadioClick($event)\"\n    (change)=\"_onRadioChange($event)\"\n    (focus)=\"onFocus($event)\"\n    (blur)=\"onBlur($event)\" />\n\n<label #nativeLabel class=\"igx-radio__composite\" igxRipple\n    igxRippleTarget=\".igx-radio__ripple\"\n    [igxRippleDisabled]=\"disableRipple\"\n    [igxRippleCentered]=\"true\"\n    [igxRippleDuration]=\"300\"\n    [for]=\"inputId\">\n    <div class=\"igx-radio__ripple\"></div>\n</label>\n\n<span #placeholderLabel role=\"label\"\n    [id]=\"labelId\"\n    [class]=\"labelClass\"\n    (click)=\"_onLabelClick()\">\n    <ng-content></ng-content>\n</span>\n"
                }] }
    ];
    /** @nocollapse */
    IgxRadioComponent.ctorParameters = function () { return []; };
    IgxRadioComponent.propDecorators = {
        nativeRadio: [{ type: ViewChild, args: ['radio', { static: true },] }],
        nativeLabel: [{ type: ViewChild, args: ['nativeLabel', { static: true },] }],
        placeholderLabel: [{ type: ViewChild, args: ['placeholderLabel', { static: true },] }],
        id: [{ type: HostBinding, args: ['attr.id',] }, { type: Input }],
        labelId: [{ type: Input }],
        labelPosition: [{ type: Input }],
        value: [{ type: Input }],
        name: [{ type: Input }],
        tabindex: [{ type: Input }],
        disableRipple: [{ type: Input }],
        required: [{ type: Input }],
        ariaLabelledBy: [{ type: Input, args: ['aria-labelledby',] }],
        ariaLabel: [{ type: Input, args: ['aria-label',] }],
        change: [{ type: Output }],
        cssClass: [{ type: HostBinding, args: ['class.igx-radio',] }],
        checked: [{ type: HostBinding, args: ['class.igx-radio--checked',] }, { type: Input }],
        disabled: [{ type: HostBinding, args: ['class.igx-radio--disabled',] }, { type: Input }],
        focused: [{ type: HostBinding, args: ['class.igx-radio--focused',] }]
    };
    return IgxRadioComponent;
}());
export { IgxRadioComponent };
if (false) {
    /**
     * Returns reference to native radio element.
     * ```typescript
     * let radioElement =  this.radio.nativeRadio;
     * ```
     * \@memberof IgxSwitchComponent
     * @type {?}
     */
    IgxRadioComponent.prototype.nativeRadio;
    /**
     * Returns reference to native label element.
     * ```typescript
     * let labelElement =  this.radio.nativeLabel;
     * ```
     * \@memberof IgxSwitchComponent
     * @type {?}
     */
    IgxRadioComponent.prototype.nativeLabel;
    /**
     * Returns reference to the label placeholder element.
     * ```typescript
     * let labelPlaceholder =  this.radio.placeholderLabel;
     * ```
     * \@memberof IgxSwitchComponent
     * @type {?}
     */
    IgxRadioComponent.prototype.placeholderLabel;
    /**
     * Sets/gets the `id` of the radio component.
     * If not set, the `id` of the first radio component will be `"igx-radio-0"`.
     * ```html
     * <igx-radio id = "my-first-radio"></igx-radio>
     * ```
     * ```typescript
     * let radioId =  this.radio.id;
     * ```
     * \@memberof IgxRadioComponent
     * @type {?}
     */
    IgxRadioComponent.prototype.id;
    /**
     * Sets/gets the id of the `label` element in the radio component.
     * If not set, the id of the `label` in the first radio component will be `"igx-radio-0-label"`.
     * ```html
     * <igx-radio labelId = "Label1"></igx-radio>
     * ```
     * ```typescript
     * let labelId =  this.radio.labelId;
     * ```
     * \@memberof IgxRadioComponent
     * @type {?}
     */
    IgxRadioComponent.prototype.labelId;
    /**
     * Sets/gets the position of the `label` in the radio component.
     * If not set, `labelPosition` will have value `"after"`.
     * ```html
     * <igx-radio labelPosition = "before"></igx-radio>
     * ```
     * ```typescript
     * let labelPosition =  this.radio.labelPosition;
     * ```
     * \@memberof IgxRadioComponent
     * @type {?}
     */
    IgxRadioComponent.prototype.labelPosition;
    /**
     * Sets/gets the `value` attribute.
     * ```html
     * <igx-radio [value] = "'radioButtonValue'"></igx-radio>
     * ```
     * ```typescript
     * let value =  this.radio.value;
     * ```
     * \@memberof IgxRadioComponent
     * @type {?}
     */
    IgxRadioComponent.prototype.value;
    /**
     * Sets/gets the `name` attribute of the radio component.
     * ```html
     * <igx-radio name = "Radio1"></igx-radio>
     *  ```
     * ```typescript
     * let name =  this.radio.name;
     * ```
     * \@memberof IgxRadioComponent
     * @type {?}
     */
    IgxRadioComponent.prototype.name;
    /**
     * Sets the value of the `tabindex` attribute.
     * ```html
     * <igx-radio [tabindex] = "1"></igx-radio>
     * ```
     * ```typescript
     * let tabIndex =  this.radio.tabindex;
     * ```
     * \@memberof IgxRadioComponent
     * @type {?}
     */
    IgxRadioComponent.prototype.tabindex;
    /**
     * Enables/disables the ripple effect on the radio button..
     * If not set, the `disableRipple` will have value `false`.
     * ```html
     * <igx-radio [disableRipple] = "true"></igx-radio>
     * ```
     * ```typescript
     * let isDisabledRipple =  this.radio.disableRipple;
     * ```
     * \@memberof IgxRadioComponent
     * @type {?}
     */
    IgxRadioComponent.prototype.disableRipple;
    /**
     * Sets/gets whether the radio button is required.
     * If not set, `required` will have value `false`.
     * ```html
     * <igx-radio [required] = "true"></igx-radio>
     * ```
     * ```typescript
     * let isRequired =  this.radio.required;
     * ```
     * \@memberof IgxRadioComponent
     * @type {?}
     */
    IgxRadioComponent.prototype.required;
    /**
     * Sets/gets the `aria-labelledby` attribute of the radio component.
     * If not set, the `aria-labelledby` will be equal to the value of `labelId` attribute.
     * ```html
     * <igx-radio aria-labelledby = "Radio1"></igx-radio>
     * ```
     * ```typescript
     * let ariaLabelledBy = this.radio.ariaLabelledBy;
     * ```
     * \@memberof IgxRadioComponent
     * @type {?}
     */
    IgxRadioComponent.prototype.ariaLabelledBy;
    /**
     * Sets/gets the `aria-label` attribute of the radio component.
     * ```html
     * <igx-radio aria-label = "Radio1"></igx-radio>
     * ```
     * ```typescript
     * let ariaLabel =  this.radio.ariaLabel;
     * ```
     * \@memberof IgxRadioComponent
     * @type {?}
     */
    IgxRadioComponent.prototype.ariaLabel;
    /**
     * An event that is emitted after the radio `value` is changed.
     * Provides references to the `IgxRadioComponent` and the `value` property as event arguments.
     * \@memberof IgxRadioComponent
     * @type {?}
     */
    IgxRadioComponent.prototype.change;
    /**
     * Returns the class of the radio component.
     * ```typescript
     * let radioClass = this.radio.cssClass;
     * ```
     * \@memberof IgxRadioComponent
     * @type {?}
     */
    IgxRadioComponent.prototype.cssClass;
    /**
     * Sets/gets  the `checked` attribute.
     * Default value is `false`.
     * ```html
     * <igx-radio [checked] = "true"></igx-radio>
     * ```
     * ```typescript
     * let isChecked =  this.radio.checked;
     * ```
     * \@memberof IgxRadioComponent
     * @type {?}
     */
    IgxRadioComponent.prototype.checked;
    /**
     * Sets/gets  the `disabled` attribute.
     * Default value is `false`.
     * ```html
     * <igx-radio [disabled] = "true"></igx-radio>
     * ```
     * ```typescript
     * let isDisabled =  this.radio.disabled;
     * ```
     * \@memberof IgxRadioComponent
     * @type {?}
     */
    IgxRadioComponent.prototype.disabled;
    /**
     * Sets/gets whether the radio component is on focus.
     * Default value is `false`.
     * ```typescript
     * this.radio.focus = true;
     * ```
     * ```typescript
     * let isFocused =  this.radio.focused;
     * ```
     * \@memberof IgxRadioComponent
     * @type {?}
     */
    IgxRadioComponent.prototype.focused;
    /**
     * @hidden
     * @type {?}
     */
    IgxRadioComponent.prototype.inputId;
    /**
     * @hidden
     * @type {?}
     * @protected
     */
    IgxRadioComponent.prototype._value;
    /**
     * @hidden
     * @type {?}
     * @private
     */
    IgxRadioComponent.prototype._onTouchedCallback;
    /**
     * @hidden
     * @type {?}
     * @private
     */
    IgxRadioComponent.prototype._onChangeCallback;
}
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vaWduaXRldWktYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9yYWRpby9yYWRpby5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDSCxTQUFTLEVBQ1QsWUFBWSxFQUNaLFdBQVcsRUFDWCxLQUFLLEVBQ0wsTUFBTSxFQUNOLFNBQVMsRUFDVCxVQUFVLEVBQ2IsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7QUFHckMsMkNBR0M7OztJQUZHLHNDQUFXOztJQUNYLHNDQUF5Qjs7OztJQUl6QixRQUFTLFFBQVE7SUFDakIsT0FBUSxPQUFPOzs7O0lBR2YsTUFBTSxHQUFHLENBQUM7O0lBQ1IsSUFBSSxHQUFHLGNBQVEsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FBY3RCO0lBdU5JOzs7Ozs7Ozs7Ozs7UUEzS2dCLE9BQUUsR0FBRyxlQUFhLE1BQU0sRUFBSSxDQUFDOzs7Ozs7Ozs7Ozs7UUFZN0IsWUFBTyxHQUFNLElBQUksQ0FBQyxFQUFFLFdBQVEsQ0FBQzs7Ozs7Ozs7Ozs7O1FBWTdCLGtCQUFhLEdBQWdDLE9BQU8sQ0FBQzs7Ozs7Ozs7Ozs7UUFpQ3JELGFBQVEsR0FBVyxJQUFJLENBQUM7Ozs7Ozs7Ozs7OztRQVl4QixrQkFBYSxHQUFHLEtBQUssQ0FBQzs7Ozs7Ozs7Ozs7O1FBWXRCLGFBQVEsR0FBRyxLQUFLLENBQUM7Ozs7Ozs7Ozs7OztRQWExQixtQkFBYyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7Ozs7Ozs7Ozs7O1FBWTlCLGNBQVMsR0FBa0IsSUFBSSxDQUFDOzs7Ozs7UUFPOUIsV0FBTSxHQUF3QyxJQUFJLFlBQVksRUFBeUIsQ0FBQzs7Ozs7Ozs7UUFTMUYsYUFBUSxHQUFHLFdBQVcsQ0FBQzs7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Ozs7Ozs7Ozs7SUFXN0IscUNBQXdDOzs7Ozs7Ozs7Ozs7O0lBWXhDLDBDQUFzQzs7Ozs7Ozs7Ozs7OztJQVl0QyxxQ0FBaUM7Ozs7Ozs7Ozs7Ozs7SUFZakMsMkNBQ3FDOzs7Ozs7Ozs7Ozs7SUFXckMsc0NBQ3VDOzs7Ozs7O0lBTXZDLG1DQUNpRzs7Ozs7Ozs7O0lBUWpHLHFDQUM4Qjs7Ozs7Ozs7Ozs7OztJQVk5QixvQ0FDZ0M7Ozs7Ozs7Ozs7Ozs7SUFZaEMscUNBQ2lDOzs7Ozs7Ozs7Ozs7O0lBWWpDLG9DQUN1Qjs7Ozs7SUFJdkIsb0NBQW9DOzs7Ozs7SUFJcEMsbUNBQTZCOzs7Ozs7SUFNN0IsK0NBQThDOzs7Ozs7SUFJOUMsOENBQW1EIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBDb21wb25lbnQsXG4gICAgRXZlbnRFbWl0dGVyLFxuICAgIEhvc3RCaW5kaW5nLFxuICAgIElucHV0LFxuICAgIE91dHB1dCxcbiAgICBWaWV3Q2hpbGQsXG4gICAgRWxlbWVudFJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IGlzSUUgfSBmcm9tICcuLi9jb3JlL3V0aWxzJztcbmltcG9ydCB7IEVkaXRvclByb3ZpZGVyIH0gZnJvbSAnLi4vY29yZS9lZGl0LXByb3ZpZGVyJztcblxuZXhwb3J0IGludGVyZmFjZSBJQ2hhbmdlUmFkaW9FdmVudEFyZ3Mge1xuICAgIHZhbHVlOiBhbnk7XG4gICAgcmFkaW86IElneFJhZGlvQ29tcG9uZW50O1xufVxuXG5leHBvcnQgZW51bSBSYWRpb0xhYmVsUG9zaXRpb24ge1xuICAgIEJFRk9SRSA9ICdiZWZvcmUnLFxuICAgIEFGVEVSID0gJ2FmdGVyJ1xufVxuXG5sZXQgbmV4dElkID0gMDtcbmNvbnN0IG5vb3AgPSAoKSA9PiB7IH07XG4vKipcbiAqICoqSWduaXRlIFVJIGZvciBBbmd1bGFyIFJhZGlvIEJ1dHRvbioqIC1cbiAqIFtEb2N1bWVudGF0aW9uXShodHRwczovL3d3dy5pbmZyYWdpc3RpY3MuY29tL3Byb2R1Y3RzL2lnbml0ZS11aS1hbmd1bGFyL2FuZ3VsYXIvY29tcG9uZW50cy9yYWRpb19idXR0b24uaHRtbClcbiAqXG4gKiBUaGUgSWduaXRlIFVJIFJhZGlvIEJ1dHRvbiBhbGxvd3MgdGhlIHVzZXIgdG8gc2VsZWN0IGEgc2luZ2xlIG9wdGlvbiBmcm9tIGFuIGF2YWlsYWJsZSBzZXQgb2Ygb3B0aW9ucyB0aGF0IGFyZSBsaXN0ZWQgc2lkZSBieSBzaWRlLlxuICpcbiAqIEV4YW1wbGU6XG4gKiBgYGBodG1sXG4gKiA8aWd4LXJhZGlvPlxuICogICBTaW1wbGUgcmFkaW8gYnV0dG9uXG4gKiA8L2lneC1yYWRpbz5cbiAqIGBgYFxuICovXG5AQ29tcG9uZW50KHtcbiAgICBwcm92aWRlcnM6IFt7IHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLCB1c2VFeGlzdGluZzogSWd4UmFkaW9Db21wb25lbnQsIG11bHRpOiB0cnVlIH1dLFxuICAgIHNlbGVjdG9yOiAnaWd4LXJhZGlvJyxcbiAgICB0ZW1wbGF0ZVVybDogJ3JhZGlvLmNvbXBvbmVudC5odG1sJ1xufSlcblxuZXhwb3J0IGNsYXNzIElneFJhZGlvQ29tcG9uZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIEVkaXRvclByb3ZpZGVyIHtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHJlZmVyZW5jZSB0byBuYXRpdmUgcmFkaW8gZWxlbWVudC5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogbGV0IHJhZGlvRWxlbWVudCA9ICB0aGlzLnJhZGlvLm5hdGl2ZVJhZGlvO1xuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hTd2l0Y2hDb21wb25lbnRcbiAgICAgKi9cbiAgICBAVmlld0NoaWxkKCdyYWRpbycsIHsgc3RhdGljOiB0cnVlIH0pIHB1YmxpYyBuYXRpdmVSYWRpbzogRWxlbWVudFJlZjtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHJlZmVyZW5jZSB0byBuYXRpdmUgbGFiZWwgZWxlbWVudC5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogbGV0IGxhYmVsRWxlbWVudCA9ICB0aGlzLnJhZGlvLm5hdGl2ZUxhYmVsO1xuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hTd2l0Y2hDb21wb25lbnRcbiAgICAgKi9cbiAgICBAVmlld0NoaWxkKCduYXRpdmVMYWJlbCcsIHsgc3RhdGljOiB0cnVlIH0pIHB1YmxpYyBuYXRpdmVMYWJlbDtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHJlZmVyZW5jZSB0byB0aGUgbGFiZWwgcGxhY2Vob2xkZXIgZWxlbWVudC5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogbGV0IGxhYmVsUGxhY2Vob2xkZXIgPSAgdGhpcy5yYWRpby5wbGFjZWhvbGRlckxhYmVsO1xuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hTd2l0Y2hDb21wb25lbnRcbiAgICAgKi9cbiAgICBAVmlld0NoaWxkKCdwbGFjZWhvbGRlckxhYmVsJywgeyBzdGF0aWM6IHRydWUgfSkgcHVibGljIHBsYWNlaG9sZGVyTGFiZWw7XG5cbiAgICAvKipcbiAgICAgKiBTZXRzL2dldHMgdGhlIGBpZGAgb2YgdGhlIHJhZGlvIGNvbXBvbmVudC5cbiAgICAgKiBJZiBub3Qgc2V0LCB0aGUgYGlkYCBvZiB0aGUgZmlyc3QgcmFkaW8gY29tcG9uZW50IHdpbGwgYmUgYFwiaWd4LXJhZGlvLTBcImAuXG4gICAgICogYGBgaHRtbFxuICAgICAqIDxpZ3gtcmFkaW8gaWQgPSBcIm15LWZpcnN0LXJhZGlvXCI+PC9pZ3gtcmFkaW8+XG4gICAgICogYGBgXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGxldCByYWRpb0lkID0gIHRoaXMucmFkaW8uaWQ7XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneFJhZGlvQ29tcG9uZW50XG4gICAgICovXG4gICAgQEhvc3RCaW5kaW5nKCdhdHRyLmlkJylcbiAgICBASW5wdXQoKSBwdWJsaWMgaWQgPSBgaWd4LXJhZGlvLSR7bmV4dElkKyt9YDtcbiAgICAvKipcbiAgICAgKiBTZXRzL2dldHMgdGhlIGlkIG9mIHRoZSBgbGFiZWxgIGVsZW1lbnQgaW4gdGhlIHJhZGlvIGNvbXBvbmVudC5cbiAgICAgKiBJZiBub3Qgc2V0LCB0aGUgaWQgb2YgdGhlIGBsYWJlbGAgaW4gdGhlIGZpcnN0IHJhZGlvIGNvbXBvbmVudCB3aWxsIGJlIGBcImlneC1yYWRpby0wLWxhYmVsXCJgLlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8aWd4LXJhZGlvIGxhYmVsSWQgPSBcIkxhYmVsMVwiPjwvaWd4LXJhZGlvPlxuICAgICAqIGBgYFxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBsZXQgbGFiZWxJZCA9ICB0aGlzLnJhZGlvLmxhYmVsSWQ7XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneFJhZGlvQ29tcG9uZW50XG4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIGxhYmVsSWQgPSBgJHt0aGlzLmlkfS1sYWJlbGA7XG4gICAgLyoqXG4gICAgICogU2V0cy9nZXRzIHRoZSBwb3NpdGlvbiBvZiB0aGUgYGxhYmVsYCBpbiB0aGUgcmFkaW8gY29tcG9uZW50LlxuICAgICAqIElmIG5vdCBzZXQsIGBsYWJlbFBvc2l0aW9uYCB3aWxsIGhhdmUgdmFsdWUgYFwiYWZ0ZXJcImAuXG4gICAgICogYGBgaHRtbFxuICAgICAqIDxpZ3gtcmFkaW8gbGFiZWxQb3NpdGlvbiA9IFwiYmVmb3JlXCI+PC9pZ3gtcmFkaW8+XG4gICAgICogYGBgXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGxldCBsYWJlbFBvc2l0aW9uID0gIHRoaXMucmFkaW8ubGFiZWxQb3NpdGlvbjtcbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4UmFkaW9Db21wb25lbnRcbiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgbGFiZWxQb3NpdGlvbjogUmFkaW9MYWJlbFBvc2l0aW9uIHwgc3RyaW5nID0gJ2FmdGVyJztcbiAgICAvKipcbiAgICAgKiBTZXRzL2dldHMgdGhlIGB2YWx1ZWAgYXR0cmlidXRlLlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8aWd4LXJhZGlvIFt2YWx1ZV0gPSBcIidyYWRpb0J1dHRvblZhbHVlJ1wiPjwvaWd4LXJhZGlvPlxuICAgICAqIGBgYFxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBsZXQgdmFsdWUgPSAgdGhpcy5yYWRpby52YWx1ZTtcbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4UmFkaW9Db21wb25lbnRcbiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgdmFsdWU6IGFueTtcbiAgICAvKipcbiAgICAgKiBTZXRzL2dldHMgdGhlIGBuYW1lYCBhdHRyaWJ1dGUgb2YgdGhlIHJhZGlvIGNvbXBvbmVudC5cbiAgICAgKiBgYGBodG1sXG4gICAgICogPGlneC1yYWRpbyBuYW1lID0gXCJSYWRpbzFcIj48L2lneC1yYWRpbz5cbiAgICAgKiAgYGBgXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGxldCBuYW1lID0gIHRoaXMucmFkaW8ubmFtZTtcbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4UmFkaW9Db21wb25lbnRcbiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgbmFtZTogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIHZhbHVlIG9mIHRoZSBgdGFiaW5kZXhgIGF0dHJpYnV0ZS5cbiAgICAgKiBgYGBodG1sXG4gICAgICogPGlneC1yYWRpbyBbdGFiaW5kZXhdID0gXCIxXCI+PC9pZ3gtcmFkaW8+XG4gICAgICogYGBgXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGxldCB0YWJJbmRleCA9ICB0aGlzLnJhZGlvLnRhYmluZGV4O1xuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hSYWRpb0NvbXBvbmVudFxuICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyB0YWJpbmRleDogbnVtYmVyID0gbnVsbDtcbiAgICAvKipcbiAgICAgKiBFbmFibGVzL2Rpc2FibGVzIHRoZSByaXBwbGUgZWZmZWN0IG9uIHRoZSByYWRpbyBidXR0b24uLlxuICAgICAqIElmIG5vdCBzZXQsIHRoZSBgZGlzYWJsZVJpcHBsZWAgd2lsbCBoYXZlIHZhbHVlIGBmYWxzZWAuXG4gICAgICogYGBgaHRtbFxuICAgICAqIDxpZ3gtcmFkaW8gW2Rpc2FibGVSaXBwbGVdID0gXCJ0cnVlXCI+PC9pZ3gtcmFkaW8+XG4gICAgICogYGBgXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGxldCBpc0Rpc2FibGVkUmlwcGxlID0gIHRoaXMucmFkaW8uZGlzYWJsZVJpcHBsZTtcbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4UmFkaW9Db21wb25lbnRcbiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgZGlzYWJsZVJpcHBsZSA9IGZhbHNlO1xuICAgIC8qKlxuICAgICAqIFNldHMvZ2V0cyB3aGV0aGVyIHRoZSByYWRpbyBidXR0b24gaXMgcmVxdWlyZWQuXG4gICAgICogSWYgbm90IHNldCwgYHJlcXVpcmVkYCB3aWxsIGhhdmUgdmFsdWUgYGZhbHNlYC5cbiAgICAgKiBgYGBodG1sXG4gICAgICogPGlneC1yYWRpbyBbcmVxdWlyZWRdID0gXCJ0cnVlXCI+PC9pZ3gtcmFkaW8+XG4gICAgICogYGBgXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGxldCBpc1JlcXVpcmVkID0gIHRoaXMucmFkaW8ucmVxdWlyZWQ7XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneFJhZGlvQ29tcG9uZW50XG4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIHJlcXVpcmVkID0gZmFsc2U7XG4gICAgLyoqXG4gICAgICogU2V0cy9nZXRzIHRoZSBgYXJpYS1sYWJlbGxlZGJ5YCBhdHRyaWJ1dGUgb2YgdGhlIHJhZGlvIGNvbXBvbmVudC5cbiAgICAgKiBJZiBub3Qgc2V0LCB0aGUgYGFyaWEtbGFiZWxsZWRieWAgd2lsbCBiZSBlcXVhbCB0byB0aGUgdmFsdWUgb2YgYGxhYmVsSWRgIGF0dHJpYnV0ZS5cbiAgICAgKiBgYGBodG1sXG4gICAgICogPGlneC1yYWRpbyBhcmlhLWxhYmVsbGVkYnkgPSBcIlJhZGlvMVwiPjwvaWd4LXJhZGlvPlxuICAgICAqIGBgYFxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBsZXQgYXJpYUxhYmVsbGVkQnkgPSB0aGlzLnJhZGlvLmFyaWFMYWJlbGxlZEJ5O1xuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hSYWRpb0NvbXBvbmVudFxuICAgICAqL1xuICAgIEBJbnB1dCgnYXJpYS1sYWJlbGxlZGJ5JylcbiAgICBwdWJsaWMgYXJpYUxhYmVsbGVkQnkgPSB0aGlzLmxhYmVsSWQ7XG4gICAgLyoqXG4gICAgICogU2V0cy9nZXRzIHRoZSBgYXJpYS1sYWJlbGAgYXR0cmlidXRlIG9mIHRoZSByYWRpbyBjb21wb25lbnQuXG4gICAgICogYGBgaHRtbFxuICAgICAqIDxpZ3gtcmFkaW8gYXJpYS1sYWJlbCA9IFwiUmFkaW8xXCI+PC9pZ3gtcmFkaW8+XG4gICAgICogYGBgXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGxldCBhcmlhTGFiZWwgPSAgdGhpcy5yYWRpby5hcmlhTGFiZWw7XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneFJhZGlvQ29tcG9uZW50XG4gICAgICovXG4gICAgQElucHV0KCdhcmlhLWxhYmVsJylcbiAgICBwdWJsaWMgYXJpYUxhYmVsOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcbiAgICAvKipcbiAgICAgKiBBbiBldmVudCB0aGF0IGlzIGVtaXR0ZWQgYWZ0ZXIgdGhlIHJhZGlvIGB2YWx1ZWAgaXMgY2hhbmdlZC5cbiAgICAgKiBQcm92aWRlcyByZWZlcmVuY2VzIHRvIHRoZSBgSWd4UmFkaW9Db21wb25lbnRgIGFuZCB0aGUgYHZhbHVlYCBwcm9wZXJ0eSBhcyBldmVudCBhcmd1bWVudHMuXG4gICAgICogQG1lbWJlcm9mIElneFJhZGlvQ29tcG9uZW50XG4gICAgICovXG4gICAgQE91dHB1dCgpXG4gICAgcmVhZG9ubHkgY2hhbmdlOiBFdmVudEVtaXR0ZXI8SUNoYW5nZVJhZGlvRXZlbnRBcmdzPiA9IG5ldyBFdmVudEVtaXR0ZXI8SUNoYW5nZVJhZGlvRXZlbnRBcmdzPigpO1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGNsYXNzIG9mIHRoZSByYWRpbyBjb21wb25lbnQuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGxldCByYWRpb0NsYXNzID0gdGhpcy5yYWRpby5jc3NDbGFzcztcbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4UmFkaW9Db21wb25lbnRcbiAgICAgKi9cbiAgICBASG9zdEJpbmRpbmcoJ2NsYXNzLmlneC1yYWRpbycpXG4gICAgcHVibGljIGNzc0NsYXNzID0gJ2lneC1yYWRpbyc7XG4gICAgLyoqXG4gICAgICogU2V0cy9nZXRzICB0aGUgYGNoZWNrZWRgIGF0dHJpYnV0ZS5cbiAgICAgKiBEZWZhdWx0IHZhbHVlIGlzIGBmYWxzZWAuXG4gICAgICogYGBgaHRtbFxuICAgICAqIDxpZ3gtcmFkaW8gW2NoZWNrZWRdID0gXCJ0cnVlXCI+PC9pZ3gtcmFkaW8+XG4gICAgICogYGBgXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGxldCBpc0NoZWNrZWQgPSAgdGhpcy5yYWRpby5jaGVja2VkO1xuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hSYWRpb0NvbXBvbmVudFxuICAgICAqL1xuICAgIEBIb3N0QmluZGluZygnY2xhc3MuaWd4LXJhZGlvLS1jaGVja2VkJylcbiAgICBASW5wdXQoKSBwdWJsaWMgY2hlY2tlZCA9IGZhbHNlO1xuICAgIC8qKlxuICAgICAqIFNldHMvZ2V0cyAgdGhlIGBkaXNhYmxlZGAgYXR0cmlidXRlLlxuICAgICAqIERlZmF1bHQgdmFsdWUgaXMgYGZhbHNlYC5cbiAgICAgKiBgYGBodG1sXG4gICAgICogPGlneC1yYWRpbyBbZGlzYWJsZWRdID0gXCJ0cnVlXCI+PC9pZ3gtcmFkaW8+XG4gICAgICogYGBgXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGxldCBpc0Rpc2FibGVkID0gIHRoaXMucmFkaW8uZGlzYWJsZWQ7XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneFJhZGlvQ29tcG9uZW50XG4gICAgICovXG4gICAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pZ3gtcmFkaW8tLWRpc2FibGVkJylcbiAgICBASW5wdXQoKSBwdWJsaWMgZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAvKipcbiAgICAgKiBTZXRzL2dldHMgd2hldGhlciB0aGUgcmFkaW8gY29tcG9uZW50IGlzIG9uIGZvY3VzLlxuICAgICAqIERlZmF1bHQgdmFsdWUgaXMgYGZhbHNlYC5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogdGhpcy5yYWRpby5mb2N1cyA9IHRydWU7XG4gICAgICogYGBgXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGxldCBpc0ZvY3VzZWQgPSAgdGhpcy5yYWRpby5mb2N1c2VkO1xuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hSYWRpb0NvbXBvbmVudFxuICAgICAqL1xuICAgIEBIb3N0QmluZGluZygnY2xhc3MuaWd4LXJhZGlvLS1mb2N1c2VkJylcbiAgICBwdWJsaWMgZm9jdXNlZCA9IGZhbHNlO1xuICAgIC8qKlxuICAgICAqQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyBpbnB1dElkID0gYCR7dGhpcy5pZH0taW5wdXRgO1xuICAgIC8qKlxuICAgICAqQGhpZGRlblxuICAgICAqL1xuICAgIHByb3RlY3RlZCBfdmFsdWU6IGFueSA9IG51bGw7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHsgfVxuICAgIC8qKlxuICAgICAqQGhpZGRlblxuICAgICAqL1xuICAgIHByaXZhdGUgX29uVG91Y2hlZENhbGxiYWNrOiAoKSA9PiB2b2lkID0gbm9vcDtcbiAgICAvKipcbiAgICAgKkBoaWRkZW5cbiAgICAgKi9cbiAgICBwcml2YXRlIF9vbkNoYW5nZUNhbGxiYWNrOiAoXzogYW55KSA9PiB2b2lkID0gbm9vcDtcbiAgICAvKipcbiAgICAgKkBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgX29uUmFkaW9DaGFuZ2UoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyBfb25SYWRpb0NsaWNrKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB0aGlzLnNlbGVjdCgpO1xuXG4gICAgICAgIGlmIChpc0lFKCkpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlUmFkaW8ubmF0aXZlRWxlbWVudC5ibHVyKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICpAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIF9vbkxhYmVsQ2xpY2soKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0KCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNlbGVjdHMgdGhlIGN1cnJlbnQgcmFkaW8gYnV0dG9uLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiB0aGlzLnJhZGlvLnNlbGVjdCgpO1xuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hSYWRpb0NvbXBvbmVudFxuICAgICAqL1xuICAgIHB1YmxpYyBzZWxlY3QoKSB7XG4gICAgICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLmZvY3VzZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5jaGFuZ2UuZW1pdCh7IHZhbHVlOiB0aGlzLnZhbHVlLCByYWRpbzogdGhpcyB9KTtcbiAgICAgICAgdGhpcy5fb25DaGFuZ2VDYWxsYmFjayh0aGlzLnZhbHVlKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2hlY2tzIHdoZXRoZXIgdGhlIHByb3ZpZGVkIHZhbHVlIGlzIGNvbnNpc3RlbnQgdG8gdGhlIGN1cnJlbnQgcmFkaW8gYnV0dG9uLlxuICAgICAqIElmIGl0IGlzLCB0aGUgY2hlY2tlZCBhdHRyaWJ1dGUgd2lsbCBoYXZlIHZhbHVlIGB0cnVlYDtcbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogdGhpcy5yYWRpby53cml0ZVZhbHVlKCdyYWRpb0J1dHRvblZhbHVlJyk7XG4gICAgICogYGBgXG4gICAgICovXG4gICAgcHVibGljIHdyaXRlVmFsdWUodmFsdWU6IGFueSkge1xuICAgICAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLmNoZWNrZWQgPSAodGhpcy5fdmFsdWUgPT09IHRoaXMudmFsdWUpO1xuICAgIH1cbiAgICAvKiogQGhpZGRlbiAqL1xuICAgIGdldEVkaXRFbGVtZW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5uYXRpdmVSYWRpby5uYXRpdmVFbGVtZW50O1xuICAgIH1cbiAgICAvKipcbiAgICAgKkBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0IGxhYmVsQ2xhc3MoKTogc3RyaW5nIHtcbiAgICAgICAgc3dpdGNoICh0aGlzLmxhYmVsUG9zaXRpb24pIHtcbiAgICAgICAgICAgIGNhc2UgUmFkaW9MYWJlbFBvc2l0aW9uLkJFRk9SRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gYCR7dGhpcy5jc3NDbGFzc31fX2xhYmVsLS1iZWZvcmVgO1xuICAgICAgICAgICAgY2FzZSBSYWRpb0xhYmVsUG9zaXRpb24uQUZURVI6XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiBgJHt0aGlzLmNzc0NsYXNzfV9fbGFiZWxgO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyBvbkZvY3VzKGV2ZW50KSB7XG4gICAgICAgIHRoaXMuZm9jdXNlZCA9IHRydWU7XG4gICAgfVxuICAgIC8qKlxuICAgICAqQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyBvbkJsdXIoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5mb2N1c2VkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX29uVG91Y2hlZENhbGxiYWNrKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyByZWdpc3Rlck9uQ2hhbmdlKGZuOiAoXzogYW55KSA9PiB2b2lkKSB7IHRoaXMuX29uQ2hhbmdlQ2FsbGJhY2sgPSBmbjsgfVxuICAgIC8qKlxuICAgICAqQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4gdm9pZCkgeyB0aGlzLl9vblRvdWNoZWRDYWxsYmFjayA9IGZuOyB9XG59XG4iXX0=