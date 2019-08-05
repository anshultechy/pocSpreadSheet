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
const RadioLabelPosition = {
    BEFORE: 'before',
    AFTER: 'after',
};
export { RadioLabelPosition };
/** @type {?} */
let nextId = 0;
/** @type {?} */
const noop = () => { };
const ɵ0 = noop;
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
export class IgxRadioComponent {
    constructor() {
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
        this.id = `igx-radio-${nextId++}`;
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
        this.labelId = `${this.id}-label`;
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
        this.inputId = `${this.id}-input`;
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
     * @hidden
     * @param {?} event
     * @return {?}
     */
    _onRadioChange(event) {
        event.stopPropagation();
    }
    /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    _onRadioClick(event) {
        event.stopPropagation();
        this.select();
        if (isIE()) {
            this.nativeRadio.nativeElement.blur();
        }
    }
    /**
     * @hidden
     * @return {?}
     */
    _onLabelClick() {
        this.select();
    }
    /**
     * Selects the current radio button.
     * ```typescript
     * this.radio.select();
     * ```
     * \@memberof IgxRadioComponent
     * @return {?}
     */
    select() {
        if (this.disabled) {
            return;
        }
        this.checked = true;
        this.focused = false;
        this.change.emit({ value: this.value, radio: this });
        this._onChangeCallback(this.value);
    }
    /**
     * Checks whether the provided value is consistent to the current radio button.
     * If it is, the checked attribute will have value `true`;
     * ```typescript
     * this.radio.writeValue('radioButtonValue');
     * ```
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this._value = value;
        this.checked = (this._value === this.value);
    }
    /**
     * @hidden
     * @return {?}
     */
    getEditElement() {
        return this.nativeRadio.nativeElement;
    }
    /**
     * @hidden
     * @return {?}
     */
    get labelClass() {
        switch (this.labelPosition) {
            case RadioLabelPosition.BEFORE:
                return `${this.cssClass}__label--before`;
            case RadioLabelPosition.AFTER:
            default:
                return `${this.cssClass}__label`;
        }
    }
    /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    onFocus(event) {
        this.focused = true;
    }
    /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    onBlur(event) {
        this.focused = false;
        this._onTouchedCallback();
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
}
IgxRadioComponent.decorators = [
    { type: Component, args: [{
                providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: IgxRadioComponent, multi: true }],
                selector: 'igx-radio',
                template: "<input #radio class=\"igx-radio__input\" type=\"radio\"\n    [id]=\"inputId\"\n    [name]=\"name\"\n    [value]=\"value\"\n    [tabindex]=\"tabindex\"\n    [disabled]=\"disabled\"\n    [checked]=\"checked\"\n    [required]=\"required\"\n    [attr.aria-checked]=\"checked\"\n    [attr.aria-labelledby]=\"ariaLabelledBy\"\n    [attr.aria-label]=\"ariaLabel\"\n    (click)=\"_onRadioClick($event)\"\n    (change)=\"_onRadioChange($event)\"\n    (focus)=\"onFocus($event)\"\n    (blur)=\"onBlur($event)\" />\n\n<label #nativeLabel class=\"igx-radio__composite\" igxRipple\n    igxRippleTarget=\".igx-radio__ripple\"\n    [igxRippleDisabled]=\"disableRipple\"\n    [igxRippleCentered]=\"true\"\n    [igxRippleDuration]=\"300\"\n    [for]=\"inputId\">\n    <div class=\"igx-radio__ripple\"></div>\n</label>\n\n<span #placeholderLabel role=\"label\"\n    [id]=\"labelId\"\n    [class]=\"labelClass\"\n    (click)=\"_onLabelClick()\">\n    <ng-content></ng-content>\n</span>\n"
            }] }
];
/** @nocollapse */
IgxRadioComponent.ctorParameters = () => [];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vaWduaXRldWktYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9yYWRpby9yYWRpby5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDSCxTQUFTLEVBQ1QsWUFBWSxFQUNaLFdBQVcsRUFDWCxLQUFLLEVBQ0wsTUFBTSxFQUNOLFNBQVMsRUFDVCxVQUFVLEVBQ2IsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7QUFHckMsMkNBR0M7OztJQUZHLHNDQUFXOztJQUNYLHNDQUF5Qjs7OztJQUl6QixRQUFTLFFBQVE7SUFDakIsT0FBUSxPQUFPOzs7O0lBR2YsTUFBTSxHQUFHLENBQUM7O01BQ1IsSUFBSSxHQUFHLEdBQUcsRUFBRSxHQUFHLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQW9CdEIsTUFBTSxPQUFPLGlCQUFpQjtJQWlOMUI7Ozs7Ozs7Ozs7OztRQTNLZ0IsT0FBRSxHQUFHLGFBQWEsTUFBTSxFQUFFLEVBQUUsQ0FBQzs7Ozs7Ozs7Ozs7O1FBWTdCLFlBQU8sR0FBRyxHQUFHLElBQUksQ0FBQyxFQUFFLFFBQVEsQ0FBQzs7Ozs7Ozs7Ozs7O1FBWTdCLGtCQUFhLEdBQWdDLE9BQU8sQ0FBQzs7Ozs7Ozs7Ozs7UUFpQ3JELGFBQVEsR0FBVyxJQUFJLENBQUM7Ozs7Ozs7Ozs7OztRQVl4QixrQkFBYSxHQUFHLEtBQUssQ0FBQzs7Ozs7Ozs7Ozs7O1FBWXRCLGFBQVEsR0FBRyxLQUFLLENBQUM7Ozs7Ozs7Ozs7OztRQWExQixtQkFBYyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7Ozs7Ozs7Ozs7O1FBWTlCLGNBQVMsR0FBa0IsSUFBSSxDQUFDOzs7Ozs7UUFPOUIsV0FBTSxHQUF3QyxJQUFJLFlBQVksRUFBeUIs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QUFvQzs7Ozs7O0lBSXBDLG1DQUE2Qjs7Ozs7O0lBTTdCLCtDQUE4Qzs7Ozs7O0lBSTlDLDhDQUFtRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICAgQ29tcG9uZW50LFxuICAgIEV2ZW50RW1pdHRlcixcbiAgICBIb3N0QmluZGluZyxcbiAgICBJbnB1dCxcbiAgICBPdXRwdXQsXG4gICAgVmlld0NoaWxkLFxuICAgIEVsZW1lbnRSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBpc0lFIH0gZnJvbSAnLi4vY29yZS91dGlscyc7XG5pbXBvcnQgeyBFZGl0b3JQcm92aWRlciB9IGZyb20gJy4uL2NvcmUvZWRpdC1wcm92aWRlcic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUNoYW5nZVJhZGlvRXZlbnRBcmdzIHtcbiAgICB2YWx1ZTogYW55O1xuICAgIHJhZGlvOiBJZ3hSYWRpb0NvbXBvbmVudDtcbn1cblxuZXhwb3J0IGVudW0gUmFkaW9MYWJlbFBvc2l0aW9uIHtcbiAgICBCRUZPUkUgPSAnYmVmb3JlJyxcbiAgICBBRlRFUiA9ICdhZnRlcidcbn1cblxubGV0IG5leHRJZCA9IDA7XG5jb25zdCBub29wID0gKCkgPT4geyB9O1xuLyoqXG4gKiAqKklnbml0ZSBVSSBmb3IgQW5ndWxhciBSYWRpbyBCdXR0b24qKiAtXG4gKiBbRG9jdW1lbnRhdGlvbl0oaHR0cHM6Ly93d3cuaW5mcmFnaXN0aWNzLmNvbS9wcm9kdWN0cy9pZ25pdGUtdWktYW5ndWxhci9hbmd1bGFyL2NvbXBvbmVudHMvcmFkaW9fYnV0dG9uLmh0bWwpXG4gKlxuICogVGhlIElnbml0ZSBVSSBSYWRpbyBCdXR0b24gYWxsb3dzIHRoZSB1c2VyIHRvIHNlbGVjdCBhIHNpbmdsZSBvcHRpb24gZnJvbSBhbiBhdmFpbGFibGUgc2V0IG9mIG9wdGlvbnMgdGhhdCBhcmUgbGlzdGVkIHNpZGUgYnkgc2lkZS5cbiAqXG4gKiBFeGFtcGxlOlxuICogYGBgaHRtbFxuICogPGlneC1yYWRpbz5cbiAqICAgU2ltcGxlIHJhZGlvIGJ1dHRvblxuICogPC9pZ3gtcmFkaW8+XG4gKiBgYGBcbiAqL1xuQENvbXBvbmVudCh7XG4gICAgcHJvdmlkZXJzOiBbeyBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUiwgdXNlRXhpc3Rpbmc6IElneFJhZGlvQ29tcG9uZW50LCBtdWx0aTogdHJ1ZSB9XSxcbiAgICBzZWxlY3RvcjogJ2lneC1yYWRpbycsXG4gICAgdGVtcGxhdGVVcmw6ICdyYWRpby5jb21wb25lbnQuaHRtbCdcbn0pXG5cbmV4cG9ydCBjbGFzcyBJZ3hSYWRpb0NvbXBvbmVudCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBFZGl0b3JQcm92aWRlciB7XG4gICAgLyoqXG4gICAgICogUmV0dXJucyByZWZlcmVuY2UgdG8gbmF0aXZlIHJhZGlvIGVsZW1lbnQuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGxldCByYWRpb0VsZW1lbnQgPSAgdGhpcy5yYWRpby5uYXRpdmVSYWRpbztcbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4U3dpdGNoQ29tcG9uZW50XG4gICAgICovXG4gICAgQFZpZXdDaGlsZCgncmFkaW8nLCB7IHN0YXRpYzogdHJ1ZSB9KSBwdWJsaWMgbmF0aXZlUmFkaW86IEVsZW1lbnRSZWY7XG4gICAgLyoqXG4gICAgICogUmV0dXJucyByZWZlcmVuY2UgdG8gbmF0aXZlIGxhYmVsIGVsZW1lbnQuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGxldCBsYWJlbEVsZW1lbnQgPSAgdGhpcy5yYWRpby5uYXRpdmVMYWJlbDtcbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4U3dpdGNoQ29tcG9uZW50XG4gICAgICovXG4gICAgQFZpZXdDaGlsZCgnbmF0aXZlTGFiZWwnLCB7IHN0YXRpYzogdHJ1ZSB9KSBwdWJsaWMgbmF0aXZlTGFiZWw7XG4gICAgLyoqXG4gICAgICogUmV0dXJucyByZWZlcmVuY2UgdG8gdGhlIGxhYmVsIHBsYWNlaG9sZGVyIGVsZW1lbnQuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGxldCBsYWJlbFBsYWNlaG9sZGVyID0gIHRoaXMucmFkaW8ucGxhY2Vob2xkZXJMYWJlbDtcbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4U3dpdGNoQ29tcG9uZW50XG4gICAgICovXG4gICAgQFZpZXdDaGlsZCgncGxhY2Vob2xkZXJMYWJlbCcsIHsgc3RhdGljOiB0cnVlIH0pIHB1YmxpYyBwbGFjZWhvbGRlckxhYmVsO1xuXG4gICAgLyoqXG4gICAgICogU2V0cy9nZXRzIHRoZSBgaWRgIG9mIHRoZSByYWRpbyBjb21wb25lbnQuXG4gICAgICogSWYgbm90IHNldCwgdGhlIGBpZGAgb2YgdGhlIGZpcnN0IHJhZGlvIGNvbXBvbmVudCB3aWxsIGJlIGBcImlneC1yYWRpby0wXCJgLlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8aWd4LXJhZGlvIGlkID0gXCJteS1maXJzdC1yYWRpb1wiPjwvaWd4LXJhZGlvPlxuICAgICAqIGBgYFxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBsZXQgcmFkaW9JZCA9ICB0aGlzLnJhZGlvLmlkO1xuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hSYWRpb0NvbXBvbmVudFxuICAgICAqL1xuICAgIEBIb3N0QmluZGluZygnYXR0ci5pZCcpXG4gICAgQElucHV0KCkgcHVibGljIGlkID0gYGlneC1yYWRpby0ke25leHRJZCsrfWA7XG4gICAgLyoqXG4gICAgICogU2V0cy9nZXRzIHRoZSBpZCBvZiB0aGUgYGxhYmVsYCBlbGVtZW50IGluIHRoZSByYWRpbyBjb21wb25lbnQuXG4gICAgICogSWYgbm90IHNldCwgdGhlIGlkIG9mIHRoZSBgbGFiZWxgIGluIHRoZSBmaXJzdCByYWRpbyBjb21wb25lbnQgd2lsbCBiZSBgXCJpZ3gtcmFkaW8tMC1sYWJlbFwiYC5cbiAgICAgKiBgYGBodG1sXG4gICAgICogPGlneC1yYWRpbyBsYWJlbElkID0gXCJMYWJlbDFcIj48L2lneC1yYWRpbz5cbiAgICAgKiBgYGBcbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogbGV0IGxhYmVsSWQgPSAgdGhpcy5yYWRpby5sYWJlbElkO1xuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hSYWRpb0NvbXBvbmVudFxuICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBsYWJlbElkID0gYCR7dGhpcy5pZH0tbGFiZWxgO1xuICAgIC8qKlxuICAgICAqIFNldHMvZ2V0cyB0aGUgcG9zaXRpb24gb2YgdGhlIGBsYWJlbGAgaW4gdGhlIHJhZGlvIGNvbXBvbmVudC5cbiAgICAgKiBJZiBub3Qgc2V0LCBgbGFiZWxQb3NpdGlvbmAgd2lsbCBoYXZlIHZhbHVlIGBcImFmdGVyXCJgLlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8aWd4LXJhZGlvIGxhYmVsUG9zaXRpb24gPSBcImJlZm9yZVwiPjwvaWd4LXJhZGlvPlxuICAgICAqIGBgYFxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBsZXQgbGFiZWxQb3NpdGlvbiA9ICB0aGlzLnJhZGlvLmxhYmVsUG9zaXRpb247XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneFJhZGlvQ29tcG9uZW50XG4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIGxhYmVsUG9zaXRpb246IFJhZGlvTGFiZWxQb3NpdGlvbiB8IHN0cmluZyA9ICdhZnRlcic7XG4gICAgLyoqXG4gICAgICogU2V0cy9nZXRzIHRoZSBgdmFsdWVgIGF0dHJpYnV0ZS5cbiAgICAgKiBgYGBodG1sXG4gICAgICogPGlneC1yYWRpbyBbdmFsdWVdID0gXCIncmFkaW9CdXR0b25WYWx1ZSdcIj48L2lneC1yYWRpbz5cbiAgICAgKiBgYGBcbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogbGV0IHZhbHVlID0gIHRoaXMucmFkaW8udmFsdWU7XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneFJhZGlvQ29tcG9uZW50XG4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIHZhbHVlOiBhbnk7XG4gICAgLyoqXG4gICAgICogU2V0cy9nZXRzIHRoZSBgbmFtZWAgYXR0cmlidXRlIG9mIHRoZSByYWRpbyBjb21wb25lbnQuXG4gICAgICogYGBgaHRtbFxuICAgICAqIDxpZ3gtcmFkaW8gbmFtZSA9IFwiUmFkaW8xXCI+PC9pZ3gtcmFkaW8+XG4gICAgICogIGBgYFxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBsZXQgbmFtZSA9ICB0aGlzLnJhZGlvLm5hbWU7XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneFJhZGlvQ29tcG9uZW50XG4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIG5hbWU6IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSB2YWx1ZSBvZiB0aGUgYHRhYmluZGV4YCBhdHRyaWJ1dGUuXG4gICAgICogYGBgaHRtbFxuICAgICAqIDxpZ3gtcmFkaW8gW3RhYmluZGV4XSA9IFwiMVwiPjwvaWd4LXJhZGlvPlxuICAgICAqIGBgYFxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBsZXQgdGFiSW5kZXggPSAgdGhpcy5yYWRpby50YWJpbmRleDtcbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4UmFkaW9Db21wb25lbnRcbiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgdGFiaW5kZXg6IG51bWJlciA9IG51bGw7XG4gICAgLyoqXG4gICAgICogRW5hYmxlcy9kaXNhYmxlcyB0aGUgcmlwcGxlIGVmZmVjdCBvbiB0aGUgcmFkaW8gYnV0dG9uLi5cbiAgICAgKiBJZiBub3Qgc2V0LCB0aGUgYGRpc2FibGVSaXBwbGVgIHdpbGwgaGF2ZSB2YWx1ZSBgZmFsc2VgLlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8aWd4LXJhZGlvIFtkaXNhYmxlUmlwcGxlXSA9IFwidHJ1ZVwiPjwvaWd4LXJhZGlvPlxuICAgICAqIGBgYFxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBsZXQgaXNEaXNhYmxlZFJpcHBsZSA9ICB0aGlzLnJhZGlvLmRpc2FibGVSaXBwbGU7XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneFJhZGlvQ29tcG9uZW50XG4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIGRpc2FibGVSaXBwbGUgPSBmYWxzZTtcbiAgICAvKipcbiAgICAgKiBTZXRzL2dldHMgd2hldGhlciB0aGUgcmFkaW8gYnV0dG9uIGlzIHJlcXVpcmVkLlxuICAgICAqIElmIG5vdCBzZXQsIGByZXF1aXJlZGAgd2lsbCBoYXZlIHZhbHVlIGBmYWxzZWAuXG4gICAgICogYGBgaHRtbFxuICAgICAqIDxpZ3gtcmFkaW8gW3JlcXVpcmVkXSA9IFwidHJ1ZVwiPjwvaWd4LXJhZGlvPlxuICAgICAqIGBgYFxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBsZXQgaXNSZXF1aXJlZCA9ICB0aGlzLnJhZGlvLnJlcXVpcmVkO1xuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hSYWRpb0NvbXBvbmVudFxuICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyByZXF1aXJlZCA9IGZhbHNlO1xuICAgIC8qKlxuICAgICAqIFNldHMvZ2V0cyB0aGUgYGFyaWEtbGFiZWxsZWRieWAgYXR0cmlidXRlIG9mIHRoZSByYWRpbyBjb21wb25lbnQuXG4gICAgICogSWYgbm90IHNldCwgdGhlIGBhcmlhLWxhYmVsbGVkYnlgIHdpbGwgYmUgZXF1YWwgdG8gdGhlIHZhbHVlIG9mIGBsYWJlbElkYCBhdHRyaWJ1dGUuXG4gICAgICogYGBgaHRtbFxuICAgICAqIDxpZ3gtcmFkaW8gYXJpYS1sYWJlbGxlZGJ5ID0gXCJSYWRpbzFcIj48L2lneC1yYWRpbz5cbiAgICAgKiBgYGBcbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogbGV0IGFyaWFMYWJlbGxlZEJ5ID0gdGhpcy5yYWRpby5hcmlhTGFiZWxsZWRCeTtcbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4UmFkaW9Db21wb25lbnRcbiAgICAgKi9cbiAgICBASW5wdXQoJ2FyaWEtbGFiZWxsZWRieScpXG4gICAgcHVibGljIGFyaWFMYWJlbGxlZEJ5ID0gdGhpcy5sYWJlbElkO1xuICAgIC8qKlxuICAgICAqIFNldHMvZ2V0cyB0aGUgYGFyaWEtbGFiZWxgIGF0dHJpYnV0ZSBvZiB0aGUgcmFkaW8gY29tcG9uZW50LlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8aWd4LXJhZGlvIGFyaWEtbGFiZWwgPSBcIlJhZGlvMVwiPjwvaWd4LXJhZGlvPlxuICAgICAqIGBgYFxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBsZXQgYXJpYUxhYmVsID0gIHRoaXMucmFkaW8uYXJpYUxhYmVsO1xuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hSYWRpb0NvbXBvbmVudFxuICAgICAqL1xuICAgIEBJbnB1dCgnYXJpYS1sYWJlbCcpXG4gICAgcHVibGljIGFyaWFMYWJlbDogc3RyaW5nIHwgbnVsbCA9IG51bGw7XG4gICAgLyoqXG4gICAgICogQW4gZXZlbnQgdGhhdCBpcyBlbWl0dGVkIGFmdGVyIHRoZSByYWRpbyBgdmFsdWVgIGlzIGNoYW5nZWQuXG4gICAgICogUHJvdmlkZXMgcmVmZXJlbmNlcyB0byB0aGUgYElneFJhZGlvQ29tcG9uZW50YCBhbmQgdGhlIGB2YWx1ZWAgcHJvcGVydHkgYXMgZXZlbnQgYXJndW1lbnRzLlxuICAgICAqIEBtZW1iZXJvZiBJZ3hSYWRpb0NvbXBvbmVudFxuICAgICAqL1xuICAgIEBPdXRwdXQoKVxuICAgIHJlYWRvbmx5IGNoYW5nZTogRXZlbnRFbWl0dGVyPElDaGFuZ2VSYWRpb0V2ZW50QXJncz4gPSBuZXcgRXZlbnRFbWl0dGVyPElDaGFuZ2VSYWRpb0V2ZW50QXJncz4oKTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBjbGFzcyBvZiB0aGUgcmFkaW8gY29tcG9uZW50LlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBsZXQgcmFkaW9DbGFzcyA9IHRoaXMucmFkaW8uY3NzQ2xhc3M7XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneFJhZGlvQ29tcG9uZW50XG4gICAgICovXG4gICAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pZ3gtcmFkaW8nKVxuICAgIHB1YmxpYyBjc3NDbGFzcyA9ICdpZ3gtcmFkaW8nO1xuICAgIC8qKlxuICAgICAqIFNldHMvZ2V0cyAgdGhlIGBjaGVja2VkYCBhdHRyaWJ1dGUuXG4gICAgICogRGVmYXVsdCB2YWx1ZSBpcyBgZmFsc2VgLlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8aWd4LXJhZGlvIFtjaGVja2VkXSA9IFwidHJ1ZVwiPjwvaWd4LXJhZGlvPlxuICAgICAqIGBgYFxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBsZXQgaXNDaGVja2VkID0gIHRoaXMucmFkaW8uY2hlY2tlZDtcbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4UmFkaW9Db21wb25lbnRcbiAgICAgKi9cbiAgICBASG9zdEJpbmRpbmcoJ2NsYXNzLmlneC1yYWRpby0tY2hlY2tlZCcpXG4gICAgQElucHV0KCkgcHVibGljIGNoZWNrZWQgPSBmYWxzZTtcbiAgICAvKipcbiAgICAgKiBTZXRzL2dldHMgIHRoZSBgZGlzYWJsZWRgIGF0dHJpYnV0ZS5cbiAgICAgKiBEZWZhdWx0IHZhbHVlIGlzIGBmYWxzZWAuXG4gICAgICogYGBgaHRtbFxuICAgICAqIDxpZ3gtcmFkaW8gW2Rpc2FibGVkXSA9IFwidHJ1ZVwiPjwvaWd4LXJhZGlvPlxuICAgICAqIGBgYFxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBsZXQgaXNEaXNhYmxlZCA9ICB0aGlzLnJhZGlvLmRpc2FibGVkO1xuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hSYWRpb0NvbXBvbmVudFxuICAgICAqL1xuICAgIEBIb3N0QmluZGluZygnY2xhc3MuaWd4LXJhZGlvLS1kaXNhYmxlZCcpXG4gICAgQElucHV0KCkgcHVibGljIGRpc2FibGVkID0gZmFsc2U7XG4gICAgLyoqXG4gICAgICogU2V0cy9nZXRzIHdoZXRoZXIgdGhlIHJhZGlvIGNvbXBvbmVudCBpcyBvbiBmb2N1cy5cbiAgICAgKiBEZWZhdWx0IHZhbHVlIGlzIGBmYWxzZWAuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIHRoaXMucmFkaW8uZm9jdXMgPSB0cnVlO1xuICAgICAqIGBgYFxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBsZXQgaXNGb2N1c2VkID0gIHRoaXMucmFkaW8uZm9jdXNlZDtcbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4UmFkaW9Db21wb25lbnRcbiAgICAgKi9cbiAgICBASG9zdEJpbmRpbmcoJ2NsYXNzLmlneC1yYWRpby0tZm9jdXNlZCcpXG4gICAgcHVibGljIGZvY3VzZWQgPSBmYWxzZTtcbiAgICAvKipcbiAgICAgKkBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgaW5wdXRJZCA9IGAke3RoaXMuaWR9LWlucHV0YDtcbiAgICAvKipcbiAgICAgKkBoaWRkZW5cbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgX3ZhbHVlOiBhbnkgPSBudWxsO1xuXG4gICAgY29uc3RydWN0b3IoKSB7IH1cbiAgICAvKipcbiAgICAgKkBoaWRkZW5cbiAgICAgKi9cbiAgICBwcml2YXRlIF9vblRvdWNoZWRDYWxsYmFjazogKCkgPT4gdm9pZCA9IG5vb3A7XG4gICAgLyoqXG4gICAgICpAaGlkZGVuXG4gICAgICovXG4gICAgcHJpdmF0ZSBfb25DaGFuZ2VDYWxsYmFjazogKF86IGFueSkgPT4gdm9pZCA9IG5vb3A7XG4gICAgLyoqXG4gICAgICpAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIF9vblJhZGlvQ2hhbmdlKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKkBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgX29uUmFkaW9DbGljayhldmVudCkge1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgdGhpcy5zZWxlY3QoKTtcblxuICAgICAgICBpZiAoaXNJRSgpKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZVJhZGlvLm5hdGl2ZUVsZW1lbnQuYmx1cigpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyBfb25MYWJlbENsaWNrKCkge1xuICAgICAgICB0aGlzLnNlbGVjdCgpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTZWxlY3RzIHRoZSBjdXJyZW50IHJhZGlvIGJ1dHRvbi5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogdGhpcy5yYWRpby5zZWxlY3QoKTtcbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4UmFkaW9Db21wb25lbnRcbiAgICAgKi9cbiAgICBwdWJsaWMgc2VsZWN0KCkge1xuICAgICAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5mb2N1c2VkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY2hhbmdlLmVtaXQoeyB2YWx1ZTogdGhpcy52YWx1ZSwgcmFkaW86IHRoaXMgfSk7XG4gICAgICAgIHRoaXMuX29uQ2hhbmdlQ2FsbGJhY2sodGhpcy52YWx1ZSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENoZWNrcyB3aGV0aGVyIHRoZSBwcm92aWRlZCB2YWx1ZSBpcyBjb25zaXN0ZW50IHRvIHRoZSBjdXJyZW50IHJhZGlvIGJ1dHRvbi5cbiAgICAgKiBJZiBpdCBpcywgdGhlIGNoZWNrZWQgYXR0cmlidXRlIHdpbGwgaGF2ZSB2YWx1ZSBgdHJ1ZWA7XG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIHRoaXMucmFkaW8ud3JpdGVWYWx1ZSgncmFkaW9CdXR0b25WYWx1ZScpO1xuICAgICAqIGBgYFxuICAgICAqL1xuICAgIHB1YmxpYyB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpIHtcbiAgICAgICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5jaGVja2VkID0gKHRoaXMuX3ZhbHVlID09PSB0aGlzLnZhbHVlKTtcbiAgICB9XG4gICAgLyoqIEBoaWRkZW4gKi9cbiAgICBnZXRFZGl0RWxlbWVudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubmF0aXZlUmFkaW8ubmF0aXZlRWxlbWVudDtcbiAgICB9XG4gICAgLyoqXG4gICAgICpAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIGdldCBsYWJlbENsYXNzKCk6IHN0cmluZyB7XG4gICAgICAgIHN3aXRjaCAodGhpcy5sYWJlbFBvc2l0aW9uKSB7XG4gICAgICAgICAgICBjYXNlIFJhZGlvTGFiZWxQb3NpdGlvbi5CRUZPUkU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIGAke3RoaXMuY3NzQ2xhc3N9X19sYWJlbC0tYmVmb3JlYDtcbiAgICAgICAgICAgIGNhc2UgUmFkaW9MYWJlbFBvc2l0aW9uLkFGVEVSOlxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gYCR7dGhpcy5jc3NDbGFzc31fX2xhYmVsYDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKkBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgb25Gb2N1cyhldmVudCkge1xuICAgICAgICB0aGlzLmZvY3VzZWQgPSB0cnVlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKkBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgb25CbHVyKGV2ZW50KSB7XG4gICAgICAgIHRoaXMuZm9jdXNlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9vblRvdWNoZWRDYWxsYmFjaygpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKkBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVnaXN0ZXJPbkNoYW5nZShmbjogKF86IGFueSkgPT4gdm9pZCkgeyB0aGlzLl9vbkNoYW5nZUNhbGxiYWNrID0gZm47IH1cbiAgICAvKipcbiAgICAgKkBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHZvaWQpIHsgdGhpcy5fb25Ub3VjaGVkQ2FsbGJhY2sgPSBmbjsgfVxufVxuIl19