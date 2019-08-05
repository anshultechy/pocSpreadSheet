/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Directive, EventEmitter, forwardRef, HostBinding, Input, NgModule, Output, ViewChild, ElementRef } from '@angular/core';
import { CheckboxRequiredValidator, NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { IgxRippleModule } from '../directives/ripple/ripple.directive';
import { isIE } from '../core/utils';
/** @enum {string} */
const LabelPosition = {
    BEFORE: 'before',
    AFTER: 'after',
};
export { LabelPosition };
/**
 * @record
 */
export function IChangeCheckboxEventArgs() { }
if (false) {
    /** @type {?} */
    IChangeCheckboxEventArgs.prototype.checked;
    /** @type {?} */
    IChangeCheckboxEventArgs.prototype.checkbox;
}
/** @type {?} */
const noop = () => { };
const ɵ0 = noop;
/** @type {?} */
let nextId = 0;
/**
 * **Ignite UI for Angular Checkbox** -
 * [Documentation](https://www.infragistics.com/products/ignite-ui-angular/angular/components/checkbox.html)
 *
 * The Ignite UI Checkbox is a selection control that allows users to make a binary choice. It behaves similarly
 * to the native browser checkbox.
 *
 * Example:
 * ```html
 * <igx-checkbox checked="true">
 *   simple checkbox
 * </igx-checkbox>
 * ```
 */
export class IgxCheckboxComponent {
    constructor() {
        /**
         * Sets/gets the `id` of the checkbox component.
         * If not set, the `id` of the first checkbox component will be `"igx-checkbox-0"`.
         * ```html
         * <igx-checkbox id="my-first-checkbox"></igx-checkbox>
         * ```
         * ```typescript
         * let checkboxId =  this.checkbox.id;
         * ```
         * \@memberof IgxCheckboxComponent
         */
        this.id = `igx-checkbox-${nextId++}`;
        /**
         * Sets/gets the id of the `label` element.
         * If not set, the id of the `label` in the first checkbox component will be `"igx-checkbox-0-label"`.
         * ```html
         * <igx-checkbox labelId = "Label1"></igx-checkbox>
         * ```
         * ```typescript
         * let labelId =  this.checkbox.labelId;
         * ```
         * \@memberof IgxCheckboxComponent
         */
        this.labelId = `${this.id}-label`;
        /**
         * Sets/gets the value of the `tabindex` attribute.
         * ```html
         * <igx-checkbox [tabindex] = "1"></igx-checkbox>
         * ```
         * ```typescript
         * let tabIndex =  this.checkbox.tabindex;
         * ```
         * \@memberof IgxCheckboxComponent
         */
        this.tabindex = null;
        /**
         *  Sets/gets the position of the `label`.
         *  If not set, the `labelPosition` will have value `"after"`.
         * ```html
         * <igx-checkbox labelPosition = "before"></igx-checkbox>
         * ```
         * ```typescript
         * let labelPosition =  this.checkbox.labelPosition;
         * ```
         * \@memberof IgxCheckboxComponent
         */
        this.labelPosition = LabelPosition.AFTER;
        /**
         * Enables/Disables the ripple effect.
         * If not set, `disableRipple` will have value `false`.
         * ```html
         * <igx-checkbox [disableRipple] = "true"></igx-checkbox>
         * ```
         * ```typescript
         * let isRippleDisabled = this.checkbox.desableRipple;
         * ```
         * \@memberof IgxCheckboxComponent
         */
        this.disableRipple = false;
        /**
         * Sets/gets whether the checkbox is required.
         * If not set, `required` will have value `false`.
         * ```html
         * <igx-checkbox [required] = "true"></igx-checkbox>
         * ```
         * ```typescript
         * let isRequired =  this.checkbox.required;
         * ```
         * \@memberof IgxCheckboxComponent
         */
        this.required = false;
        /**
         * Sets/gets the `aria-labelledby` attribute.
         * If not set, the `aria-labelledby` will be equal to the value of `labelId` attribute.
         * ```html
         * <igx-checkbox aria-labelledby = "Checkbox1"></igx-checkbox>
         * ```
         * ```typescript
         * let ariaLabelledBy =  this.checkbox.ariaLabelledBy;
         * ```
         * \@memberof IgxCheckboxComponent
         */
        this.ariaLabelledBy = this.labelId;
        /**
         * Sets/gets the value of the `aria-label` attribute.
         * ```html
         * <igx-checkbox aria-label = "Checkbox1"></igx-checkbox>
         * ```
         * ```typescript
         * let ariaLabel = this.checkbox.aruaLabel;
         * ```
         * \@memberof IgxCheckboxComponent
         */
        this.ariaLabel = null;
        /**
         * An event that is emitted after the checkbox state is changed.
         * Provides references to the `IgxCheckboxComponent` and the `checked` property as event arguments.
         * \@memberof IgxCheckboxComponent
         */
        this.change = new EventEmitter();
        /**
         * Returns the class of the checkbox component.
         * ```typescript
         * let class =  this.checkbox.cssClass;
         * ```
         * \@memberof IgxCheckboxComponent
         */
        this.cssClass = 'igx-checkbox';
        /**
         * Sets/gets whether the checkbox component is on focus.
         * Default value is `false`.
         * ```typescript
         * this.checkbox.focused =  true;
         * ```
         * ```typescript
         * let isFocused =  this.checkbox.focused;
         * ```
         * \@memberof IgxCheckboxComponent
         */
        this.focused = false;
        /**
         * Sets/gets the checkbox indeterminate visual state.
         * Default value is `false`;
         * ```html
         * <igx-checkbox [indeterminate] = "true"></igx-checkbox>
         * ```
         * ```typescript
         * let isIndeterminate = this.checkbox.indeterminate;
         * ```
         * \@memberof IgxCheckboxComponent
         */
        this.indeterminate = false;
        /**
         * Sets/gets whether the checkbox is checked.
         * Default value is `false`.
         * ```html
         * <igx-checkbox [checked] = "true"></igx-checkbox>
         * ```
         * ```typescript
         * let isChecked =  this.checkbox.checked;
         * ```
         * \@memberof IgxCheckboxComponent
         */
        this.checked = false;
        /**
         * Sets/gets whether the checkbox is disabled.
         * Default value is `false`.
         * ```html
         * <igx-checkbox [disabled] = "true"></igx-checkbox>
         * ```
         * ```typescript
         * let isDesabled = this.checkbox.disabled;
         * ```
         * \@memberof IgxCheckboxComponent
         */
        this.disabled = false;
        /**
         * Sets/gets whether the checkbox should disable all css transitions.
         * Default value is `false`.
         * ```html
         * <igx-checkbox [disableTransitions]="true"></igx-checkbox>
         * ```
         * ```typescript
         * let disableTransitions = this.checkbox.disableTransitions;
         * ```
         * \@memberof IgxCheckboxComponent
         */
        this.disableTransitions = false;
        /**
         * @hidden
         */
        this.inputId = `${this.id}-input`;
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
     * If `disabled` is `false`, switches the `checked` state.
     * ```typescript
     * this.checkbox.toggle();
     * ```
     * \@memberof IgxCheckboxComponent
     * @return {?}
     */
    toggle() {
        if (this.disabled) {
            return;
        }
        this.indeterminate = false;
        this.focused = false;
        this.checked = !this.checked;
        this.change.emit({ checked: this.checked, checkbox: this });
        this._onChangeCallback(this.checked);
    }
    /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    _onCheckboxChange(event) {
        // We have to stop the original checkbox change event
        // from bubbling up since we emit our own change event
        event.stopPropagation();
    }
    /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    _onCheckboxClick(event) {
        // Since the original checkbox is hidden and the label
        // is used for styling and to change the checked state of the checkbox,
        // we need to prevent the checkbox click event from bubbling up
        // as it gets triggered on label click
        event.stopPropagation();
        if (isIE()) {
            this.nativeCheckbox.nativeElement.blur();
        }
        this.toggle();
    }
    /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    _onLabelClick(event) {
        // We use a span element as a placeholder label
        // in place of the native label, we need to emit
        // the change event separately here alongside
        // the click event emitted on click
        this.toggle();
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
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this._value = value;
        this.checked = !!this._value;
    }
    /**
     * @hidden
     * @return {?}
     */
    get labelClass() {
        switch (this.labelPosition) {
            case LabelPosition.BEFORE:
                return `${this.cssClass}__label--before`;
            case LabelPosition.AFTER:
            default:
                return `${this.cssClass}__label`;
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
     * @hidden
     * @return {?}
     */
    getEditElement() {
        return this.nativeCheckbox.nativeElement;
    }
}
IgxCheckboxComponent.decorators = [
    { type: Component, args: [{
                providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: IgxCheckboxComponent, multi: true }],
                selector: 'igx-checkbox',
                preserveWhitespaces: false,
                template: "<input #checkbox class=\"igx-checkbox__input\"\n    type=\"checkbox\"\n    [id]=\"inputId\"\n    [name]=\"name\"\n    [value]=\"value\"\n    [tabindex]=\"tabindex\"\n    [disabled]=\"disabled\"\n    [indeterminate]=\"indeterminate\"\n    [checked]=\"checked\"\n    [required]=\"required\"\n    [attr.aria-checked]=\"checked\"\n    [attr.aria-labelledby]=\"ariaLabelledBy\"\n    [attr.aria-label]=\"ariaLabel\"\n    (change)=\"_onCheckboxChange($event)\"\n    (click)=\"_onCheckboxClick($event)\"\n    (focus)=\"onFocus($event)\"\n    (blur)=\"onBlur($event)\" />\n\n<div\n    igxRipple\n    igxRippleTarget=\".igx-checkbox__ripple\"\n    [igxRippleDisabled]=\"disableRipple\"\n    [igxRippleCentered]=\"true\"\n    [igxRippleDuration]=\"300\"\n    class=\"igx-checkbox__composite-wrapper\"\n>\n    <label #label class=\"igx-checkbox__composite\"\n        [attr.for]=\"inputId\">\n        <svg class=\"igx-checkbox__composite-mark\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\">\n            <path d=\"M4.1,12.7 9,17.6 20.3,6.3\" />\n        </svg>\n    </label>\n\n    <div class=\"igx-checkbox__ripple\"></div>\n</div>\n\n<span #placeholderLabel role=\"label\"\n    [class]=\"labelClass\"\n    [id]=\"labelId\"\n    (click)=\"_onLabelClick($event)\">\n    <ng-content></ng-content>\n</span>\n"
            }] }
];
IgxCheckboxComponent.propDecorators = {
    nativeCheckbox: [{ type: ViewChild, args: ['checkbox', { static: true },] }],
    nativeLabel: [{ type: ViewChild, args: ['label', { static: true },] }],
    placeholderLabel: [{ type: ViewChild, args: ['placeholderLabel', { static: true },] }],
    id: [{ type: HostBinding, args: ['attr.id',] }, { type: Input }],
    labelId: [{ type: Input }],
    value: [{ type: Input }],
    name: [{ type: Input }],
    tabindex: [{ type: Input }],
    labelPosition: [{ type: Input }],
    disableRipple: [{ type: Input }],
    required: [{ type: Input }],
    ariaLabelledBy: [{ type: Input, args: ['aria-labelledby',] }],
    ariaLabel: [{ type: Input, args: ['aria-label',] }],
    change: [{ type: Output }],
    cssClass: [{ type: HostBinding, args: ['class.igx-checkbox',] }],
    focused: [{ type: HostBinding, args: ['class.igx-checkbox--focused',] }],
    indeterminate: [{ type: HostBinding, args: ['class.igx-checkbox--indeterminate',] }, { type: Input }],
    checked: [{ type: HostBinding, args: ['class.igx-checkbox--checked',] }, { type: Input }],
    disabled: [{ type: HostBinding, args: ['class.igx-checkbox--disabled',] }, { type: Input }],
    disableTransitions: [{ type: HostBinding, args: ['class.igx-checkbox--plain',] }, { type: Input }]
};
if (false) {
    /**
     * @hidden
     * @type {?}
     * @protected
     */
    IgxCheckboxComponent.prototype._value;
    /**
     * Returns reference to the native checkbox element.
     * ```typescript
     * let checkboxElement =  this.checkbox.checkboxElement;
     * ```
     * \@memberof IgxSwitchComponent
     * @type {?}
     */
    IgxCheckboxComponent.prototype.nativeCheckbox;
    /**
     * Returns reference to the native label element.
     * ```typescript
     * let labelElement =  this.checkbox.nativeLabel;
     * ```
     * \@memberof IgxSwitchComponent
     * @type {?}
     */
    IgxCheckboxComponent.prototype.nativeLabel;
    /**
     * Returns reference to the label placeholder element.
     * ```typescript
     * let labelPlaceholder =  this.checkbox.placeholderLabel;
     * ```
     * \@memberof IgxSwitchComponent
     * @type {?}
     */
    IgxCheckboxComponent.prototype.placeholderLabel;
    /**
     * Sets/gets the `id` of the checkbox component.
     * If not set, the `id` of the first checkbox component will be `"igx-checkbox-0"`.
     * ```html
     * <igx-checkbox id="my-first-checkbox"></igx-checkbox>
     * ```
     * ```typescript
     * let checkboxId =  this.checkbox.id;
     * ```
     * \@memberof IgxCheckboxComponent
     * @type {?}
     */
    IgxCheckboxComponent.prototype.id;
    /**
     * Sets/gets the id of the `label` element.
     * If not set, the id of the `label` in the first checkbox component will be `"igx-checkbox-0-label"`.
     * ```html
     * <igx-checkbox labelId = "Label1"></igx-checkbox>
     * ```
     * ```typescript
     * let labelId =  this.checkbox.labelId;
     * ```
     * \@memberof IgxCheckboxComponent
     * @type {?}
     */
    IgxCheckboxComponent.prototype.labelId;
    /**
     * Sets/gets the `value` attribute.
     * ```html
     * <igx-checkbox [value] = "'CheckboxValue'"></igx-checkbox>
     * ```
     * ```typescript
     * let value =  this.checkbox.value;
     * ```
     * \@memberof IgxCheckboxComponent
     * @type {?}
     */
    IgxCheckboxComponent.prototype.value;
    /**
     * Sets/gets the `name` attribute.
     * ```html
     * <igx-checkbox name = "Checkbox1"></igx-checkbox>
     * ```
     * ```typescript
     * let name =  this.checkbox.name;
     * ```
     * \@memberof IgxCheckboxComponent
     * @type {?}
     */
    IgxCheckboxComponent.prototype.name;
    /**
     * Sets/gets the value of the `tabindex` attribute.
     * ```html
     * <igx-checkbox [tabindex] = "1"></igx-checkbox>
     * ```
     * ```typescript
     * let tabIndex =  this.checkbox.tabindex;
     * ```
     * \@memberof IgxCheckboxComponent
     * @type {?}
     */
    IgxCheckboxComponent.prototype.tabindex;
    /**
     *  Sets/gets the position of the `label`.
     *  If not set, the `labelPosition` will have value `"after"`.
     * ```html
     * <igx-checkbox labelPosition = "before"></igx-checkbox>
     * ```
     * ```typescript
     * let labelPosition =  this.checkbox.labelPosition;
     * ```
     * \@memberof IgxCheckboxComponent
     * @type {?}
     */
    IgxCheckboxComponent.prototype.labelPosition;
    /**
     * Enables/Disables the ripple effect.
     * If not set, `disableRipple` will have value `false`.
     * ```html
     * <igx-checkbox [disableRipple] = "true"></igx-checkbox>
     * ```
     * ```typescript
     * let isRippleDisabled = this.checkbox.desableRipple;
     * ```
     * \@memberof IgxCheckboxComponent
     * @type {?}
     */
    IgxCheckboxComponent.prototype.disableRipple;
    /**
     * Sets/gets whether the checkbox is required.
     * If not set, `required` will have value `false`.
     * ```html
     * <igx-checkbox [required] = "true"></igx-checkbox>
     * ```
     * ```typescript
     * let isRequired =  this.checkbox.required;
     * ```
     * \@memberof IgxCheckboxComponent
     * @type {?}
     */
    IgxCheckboxComponent.prototype.required;
    /**
     * Sets/gets the `aria-labelledby` attribute.
     * If not set, the `aria-labelledby` will be equal to the value of `labelId` attribute.
     * ```html
     * <igx-checkbox aria-labelledby = "Checkbox1"></igx-checkbox>
     * ```
     * ```typescript
     * let ariaLabelledBy =  this.checkbox.ariaLabelledBy;
     * ```
     * \@memberof IgxCheckboxComponent
     * @type {?}
     */
    IgxCheckboxComponent.prototype.ariaLabelledBy;
    /**
     * Sets/gets the value of the `aria-label` attribute.
     * ```html
     * <igx-checkbox aria-label = "Checkbox1"></igx-checkbox>
     * ```
     * ```typescript
     * let ariaLabel = this.checkbox.aruaLabel;
     * ```
     * \@memberof IgxCheckboxComponent
     * @type {?}
     */
    IgxCheckboxComponent.prototype.ariaLabel;
    /**
     * An event that is emitted after the checkbox state is changed.
     * Provides references to the `IgxCheckboxComponent` and the `checked` property as event arguments.
     * \@memberof IgxCheckboxComponent
     * @type {?}
     */
    IgxCheckboxComponent.prototype.change;
    /**
     * Returns the class of the checkbox component.
     * ```typescript
     * let class =  this.checkbox.cssClass;
     * ```
     * \@memberof IgxCheckboxComponent
     * @type {?}
     */
    IgxCheckboxComponent.prototype.cssClass;
    /**
     * Sets/gets whether the checkbox component is on focus.
     * Default value is `false`.
     * ```typescript
     * this.checkbox.focused =  true;
     * ```
     * ```typescript
     * let isFocused =  this.checkbox.focused;
     * ```
     * \@memberof IgxCheckboxComponent
     * @type {?}
     */
    IgxCheckboxComponent.prototype.focused;
    /**
     * Sets/gets the checkbox indeterminate visual state.
     * Default value is `false`;
     * ```html
     * <igx-checkbox [indeterminate] = "true"></igx-checkbox>
     * ```
     * ```typescript
     * let isIndeterminate = this.checkbox.indeterminate;
     * ```
     * \@memberof IgxCheckboxComponent
     * @type {?}
     */
    IgxCheckboxComponent.prototype.indeterminate;
    /**
     * Sets/gets whether the checkbox is checked.
     * Default value is `false`.
     * ```html
     * <igx-checkbox [checked] = "true"></igx-checkbox>
     * ```
     * ```typescript
     * let isChecked =  this.checkbox.checked;
     * ```
     * \@memberof IgxCheckboxComponent
     * @type {?}
     */
    IgxCheckboxComponent.prototype.checked;
    /**
     * Sets/gets whether the checkbox is disabled.
     * Default value is `false`.
     * ```html
     * <igx-checkbox [disabled] = "true"></igx-checkbox>
     * ```
     * ```typescript
     * let isDesabled = this.checkbox.disabled;
     * ```
     * \@memberof IgxCheckboxComponent
     * @type {?}
     */
    IgxCheckboxComponent.prototype.disabled;
    /**
     * Sets/gets whether the checkbox should disable all css transitions.
     * Default value is `false`.
     * ```html
     * <igx-checkbox [disableTransitions]="true"></igx-checkbox>
     * ```
     * ```typescript
     * let disableTransitions = this.checkbox.disableTransitions;
     * ```
     * \@memberof IgxCheckboxComponent
     * @type {?}
     */
    IgxCheckboxComponent.prototype.disableTransitions;
    /**
     * @hidden
     * @type {?}
     */
    IgxCheckboxComponent.prototype.inputId;
    /**
     * @hidden
     * @type {?}
     * @private
     */
    IgxCheckboxComponent.prototype._onTouchedCallback;
    /**
     * @hidden
     * @type {?}
     * @private
     */
    IgxCheckboxComponent.prototype._onChangeCallback;
}
/** @type {?} */
export const IGX_CHECKBOX_REQUIRED_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => IgxCheckboxRequiredDirective),
    multi: true
};
/* tslint:disable directive-selector */
export class IgxCheckboxRequiredDirective extends CheckboxRequiredValidator {
}
IgxCheckboxRequiredDirective.decorators = [
    { type: Directive, args: [{
                selector: `igx-checkbox[required][formControlName],
    igx-checkbox[required][formControl],
    igx-checkbox[required][ngModel]`,
                providers: [IGX_CHECKBOX_REQUIRED_VALIDATOR]
            },] }
];
/**
 * @hidden
 */
export class IgxCheckboxModule {
}
IgxCheckboxModule.decorators = [
    { type: NgModule, args: [{
                declarations: [IgxCheckboxComponent, IgxCheckboxRequiredDirective],
                exports: [IgxCheckboxComponent, IgxCheckboxRequiredDirective],
                imports: [IgxRippleModule]
            },] }
];
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vaWduaXRldWktYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9jaGVja2JveC9jaGVja2JveC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDSCxTQUFTLEVBQ1QsU0FBUyxFQUNULFlBQVksRUFDWixVQUFVLEVBQ1YsV0FBVyxFQUNYLEtBQUssRUFDTCxRQUFRLEVBQ1IsTUFBTSxFQUVOLFNBQVMsRUFDVCxVQUFVLEVBQ2IsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLHlCQUF5QixFQUF3QixhQUFhLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNuSCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDeEUsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLGVBQWUsQ0FBQzs7O0lBSWpDLFFBQVMsUUFBUTtJQUNqQixPQUFRLE9BQU87Ozs7OztBQUduQiw4Q0FHQzs7O0lBRkcsMkNBQWlCOztJQUNqQiw0Q0FBK0I7OztNQUc3QixJQUFJLEdBQUcsR0FBRyxFQUFFLEdBQUcsQ0FBQzs7O0lBQ2xCLE1BQU0sR0FBRyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUFxQmQsTUFBTSxPQUFPLG9CQUFvQjtJQU5qQzs7Ozs7Ozs7Ozs7O1FBK0NvQixPQUFFLEdBQUcsZ0JBQWdCLE1BQU0sRUFBRSxFQUFFLENBQUM7Ozs7Ozs7Ozs7OztRQVloQyxZQUFPLEdBQUcsR0FBRyxJQUFJLENBQUMsRUFBRSxRQUFRLENBQUM7Ozs7Ozs7Ozs7O1FBaUM3QixhQUFRLEdBQVcsSUFBSSxDQUFDOzs7Ozs7Ozs7Ozs7UUFZeEIsa0JBQWEsR0FBMkIsYUFBYSxDQUFDLEtBQUssQ0FBQzs7Ozs7Ozs7Ozs7O1FBWTVELGtCQUFhLEdBQUcsS0FBSyxDQUFDOzs7Ozs7Ozs7Ozs7UUFZdEIsYUFBUSxHQUFHLEtBQUssQ0FBQzs7Ozs7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b0IsRUFBRSw0QkFBNEIsQ0FBQztnQkFDN0QsT0FBTyxFQUFFLENBQUMsZUFBZSxDQUFDO2FBQzdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBDb21wb25lbnQsXG4gICAgRGlyZWN0aXZlLFxuICAgIEV2ZW50RW1pdHRlcixcbiAgICBmb3J3YXJkUmVmLFxuICAgIEhvc3RCaW5kaW5nLFxuICAgIElucHV0LFxuICAgIE5nTW9kdWxlLFxuICAgIE91dHB1dCxcbiAgICBQcm92aWRlcixcbiAgICBWaWV3Q2hpbGQsXG4gICAgRWxlbWVudFJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENoZWNrYm94UmVxdWlyZWRWYWxpZGF0b3IsIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxJREFUT1JTLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IElneFJpcHBsZU1vZHVsZSB9IGZyb20gJy4uL2RpcmVjdGl2ZXMvcmlwcGxlL3JpcHBsZS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgaXNJRSB9IGZyb20gJy4uL2NvcmUvdXRpbHMnO1xuaW1wb3J0IHsgRWRpdG9yUHJvdmlkZXIgfSBmcm9tICcuLi9jb3JlL2VkaXQtcHJvdmlkZXInO1xuXG5leHBvcnQgZW51bSBMYWJlbFBvc2l0aW9uIHtcbiAgICBCRUZPUkUgPSAnYmVmb3JlJyxcbiAgICBBRlRFUiA9ICdhZnRlcidcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJQ2hhbmdlQ2hlY2tib3hFdmVudEFyZ3Mge1xuICAgIGNoZWNrZWQ6IGJvb2xlYW47XG4gICAgY2hlY2tib3g6IElneENoZWNrYm94Q29tcG9uZW50O1xufVxuXG5jb25zdCBub29wID0gKCkgPT4geyB9O1xubGV0IG5leHRJZCA9IDA7XG4vKipcbiAqICoqSWduaXRlIFVJIGZvciBBbmd1bGFyIENoZWNrYm94KiogLVxuICogW0RvY3VtZW50YXRpb25dKGh0dHBzOi8vd3d3LmluZnJhZ2lzdGljcy5jb20vcHJvZHVjdHMvaWduaXRlLXVpLWFuZ3VsYXIvYW5ndWxhci9jb21wb25lbnRzL2NoZWNrYm94Lmh0bWwpXG4gKlxuICogVGhlIElnbml0ZSBVSSBDaGVja2JveCBpcyBhIHNlbGVjdGlvbiBjb250cm9sIHRoYXQgYWxsb3dzIHVzZXJzIHRvIG1ha2UgYSBiaW5hcnkgY2hvaWNlLiBJdCBiZWhhdmVzIHNpbWlsYXJseVxuICogdG8gdGhlIG5hdGl2ZSBicm93c2VyIGNoZWNrYm94LlxuICpcbiAqIEV4YW1wbGU6XG4gKiBgYGBodG1sXG4gKiA8aWd4LWNoZWNrYm94IGNoZWNrZWQ9XCJ0cnVlXCI+XG4gKiAgIHNpbXBsZSBjaGVja2JveFxuICogPC9pZ3gtY2hlY2tib3g+XG4gKiBgYGBcbiAqL1xuQENvbXBvbmVudCh7XG4gICAgcHJvdmlkZXJzOiBbeyBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUiwgdXNlRXhpc3Rpbmc6IElneENoZWNrYm94Q29tcG9uZW50LCBtdWx0aTogdHJ1ZSB9XSxcbiAgICBzZWxlY3RvcjogJ2lneC1jaGVja2JveCcsXG4gICAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gICAgdGVtcGxhdGVVcmw6ICdjaGVja2JveC5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgSWd4Q2hlY2tib3hDb21wb25lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgRWRpdG9yUHJvdmlkZXIge1xuICAgIC8qKlxuICAgICAqQGhpZGRlblxuICAgICAqL1xuICAgIHByb3RlY3RlZCBfdmFsdWU6IGFueTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHJlZmVyZW5jZSB0byB0aGUgbmF0aXZlIGNoZWNrYm94IGVsZW1lbnQuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGxldCBjaGVja2JveEVsZW1lbnQgPSAgdGhpcy5jaGVja2JveC5jaGVja2JveEVsZW1lbnQ7XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneFN3aXRjaENvbXBvbmVudFxuICAgICAqL1xuICAgIEBWaWV3Q2hpbGQoJ2NoZWNrYm94JywgeyBzdGF0aWM6IHRydWUgfSkgcHVibGljIG5hdGl2ZUNoZWNrYm94OiBFbGVtZW50UmVmO1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgcmVmZXJlbmNlIHRvIHRoZSBuYXRpdmUgbGFiZWwgZWxlbWVudC5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogbGV0IGxhYmVsRWxlbWVudCA9ICB0aGlzLmNoZWNrYm94Lm5hdGl2ZUxhYmVsO1xuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hTd2l0Y2hDb21wb25lbnRcbiAgICAgKi9cbiAgICBAVmlld0NoaWxkKCdsYWJlbCcsIHsgc3RhdGljOiB0cnVlIH0pIHB1YmxpYyBuYXRpdmVMYWJlbDtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHJlZmVyZW5jZSB0byB0aGUgbGFiZWwgcGxhY2Vob2xkZXIgZWxlbWVudC5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogbGV0IGxhYmVsUGxhY2Vob2xkZXIgPSAgdGhpcy5jaGVja2JveC5wbGFjZWhvbGRlckxhYmVsO1xuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hTd2l0Y2hDb21wb25lbnRcbiAgICAgKi9cbiAgICBAVmlld0NoaWxkKCdwbGFjZWhvbGRlckxhYmVsJywgeyBzdGF0aWM6IHRydWUgfSkgcHVibGljIHBsYWNlaG9sZGVyTGFiZWw7XG4gICAgLyoqXG4gICAgICogU2V0cy9nZXRzIHRoZSBgaWRgIG9mIHRoZSBjaGVja2JveCBjb21wb25lbnQuXG4gICAgICogSWYgbm90IHNldCwgdGhlIGBpZGAgb2YgdGhlIGZpcnN0IGNoZWNrYm94IGNvbXBvbmVudCB3aWxsIGJlIGBcImlneC1jaGVja2JveC0wXCJgLlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8aWd4LWNoZWNrYm94IGlkPVwibXktZmlyc3QtY2hlY2tib3hcIj48L2lneC1jaGVja2JveD5cbiAgICAgKiBgYGBcbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogbGV0IGNoZWNrYm94SWQgPSAgdGhpcy5jaGVja2JveC5pZDtcbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4Q2hlY2tib3hDb21wb25lbnRcbiAgICAgKi9cbiAgICBASG9zdEJpbmRpbmcoJ2F0dHIuaWQnKVxuICAgIEBJbnB1dCgpIHB1YmxpYyBpZCA9IGBpZ3gtY2hlY2tib3gtJHtuZXh0SWQrK31gO1xuICAgIC8qKlxuICAgICAqIFNldHMvZ2V0cyB0aGUgaWQgb2YgdGhlIGBsYWJlbGAgZWxlbWVudC5cbiAgICAgKiBJZiBub3Qgc2V0LCB0aGUgaWQgb2YgdGhlIGBsYWJlbGAgaW4gdGhlIGZpcnN0IGNoZWNrYm94IGNvbXBvbmVudCB3aWxsIGJlIGBcImlneC1jaGVja2JveC0wLWxhYmVsXCJgLlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8aWd4LWNoZWNrYm94IGxhYmVsSWQgPSBcIkxhYmVsMVwiPjwvaWd4LWNoZWNrYm94PlxuICAgICAqIGBgYFxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBsZXQgbGFiZWxJZCA9ICB0aGlzLmNoZWNrYm94LmxhYmVsSWQ7XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneENoZWNrYm94Q29tcG9uZW50XG4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIGxhYmVsSWQgPSBgJHt0aGlzLmlkfS1sYWJlbGA7XG4gICAgLyoqXG4gICAgICogU2V0cy9nZXRzIHRoZSBgdmFsdWVgIGF0dHJpYnV0ZS5cbiAgICAgKiBgYGBodG1sXG4gICAgICogPGlneC1jaGVja2JveCBbdmFsdWVdID0gXCInQ2hlY2tib3hWYWx1ZSdcIj48L2lneC1jaGVja2JveD5cbiAgICAgKiBgYGBcbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogbGV0IHZhbHVlID0gIHRoaXMuY2hlY2tib3gudmFsdWU7XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneENoZWNrYm94Q29tcG9uZW50XG4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIHZhbHVlOiBhbnk7XG4gICAgLyoqXG4gICAgICogU2V0cy9nZXRzIHRoZSBgbmFtZWAgYXR0cmlidXRlLlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8aWd4LWNoZWNrYm94IG5hbWUgPSBcIkNoZWNrYm94MVwiPjwvaWd4LWNoZWNrYm94PlxuICAgICAqIGBgYFxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBsZXQgbmFtZSA9ICB0aGlzLmNoZWNrYm94Lm5hbWU7XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneENoZWNrYm94Q29tcG9uZW50XG4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIG5hbWU6IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBTZXRzL2dldHMgdGhlIHZhbHVlIG9mIHRoZSBgdGFiaW5kZXhgIGF0dHJpYnV0ZS5cbiAgICAgKiBgYGBodG1sXG4gICAgICogPGlneC1jaGVja2JveCBbdGFiaW5kZXhdID0gXCIxXCI+PC9pZ3gtY2hlY2tib3g+XG4gICAgICogYGBgXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGxldCB0YWJJbmRleCA9ICB0aGlzLmNoZWNrYm94LnRhYmluZGV4O1xuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hDaGVja2JveENvbXBvbmVudFxuICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyB0YWJpbmRleDogbnVtYmVyID0gbnVsbDtcbiAgICAvKipcbiAgICAgKiAgU2V0cy9nZXRzIHRoZSBwb3NpdGlvbiBvZiB0aGUgYGxhYmVsYC5cbiAgICAgKiAgSWYgbm90IHNldCwgdGhlIGBsYWJlbFBvc2l0aW9uYCB3aWxsIGhhdmUgdmFsdWUgYFwiYWZ0ZXJcImAuXG4gICAgICogYGBgaHRtbFxuICAgICAqIDxpZ3gtY2hlY2tib3ggbGFiZWxQb3NpdGlvbiA9IFwiYmVmb3JlXCI+PC9pZ3gtY2hlY2tib3g+XG4gICAgICogYGBgXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGxldCBsYWJlbFBvc2l0aW9uID0gIHRoaXMuY2hlY2tib3gubGFiZWxQb3NpdGlvbjtcbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4Q2hlY2tib3hDb21wb25lbnRcbiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgbGFiZWxQb3NpdGlvbjogTGFiZWxQb3NpdGlvbiB8IHN0cmluZyA9IExhYmVsUG9zaXRpb24uQUZURVI7XG4gICAgLyoqXG4gICAgICogRW5hYmxlcy9EaXNhYmxlcyB0aGUgcmlwcGxlIGVmZmVjdC5cbiAgICAgKiBJZiBub3Qgc2V0LCBgZGlzYWJsZVJpcHBsZWAgd2lsbCBoYXZlIHZhbHVlIGBmYWxzZWAuXG4gICAgICogYGBgaHRtbFxuICAgICAqIDxpZ3gtY2hlY2tib3ggW2Rpc2FibGVSaXBwbGVdID0gXCJ0cnVlXCI+PC9pZ3gtY2hlY2tib3g+XG4gICAgICogYGBgXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGxldCBpc1JpcHBsZURpc2FibGVkID0gdGhpcy5jaGVja2JveC5kZXNhYmxlUmlwcGxlO1xuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hDaGVja2JveENvbXBvbmVudFxuICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBkaXNhYmxlUmlwcGxlID0gZmFsc2U7XG4gICAgLyoqXG4gICAgICogU2V0cy9nZXRzIHdoZXRoZXIgdGhlIGNoZWNrYm94IGlzIHJlcXVpcmVkLlxuICAgICAqIElmIG5vdCBzZXQsIGByZXF1aXJlZGAgd2lsbCBoYXZlIHZhbHVlIGBmYWxzZWAuXG4gICAgICogYGBgaHRtbFxuICAgICAqIDxpZ3gtY2hlY2tib3ggW3JlcXVpcmVkXSA9IFwidHJ1ZVwiPjwvaWd4LWNoZWNrYm94PlxuICAgICAqIGBgYFxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBsZXQgaXNSZXF1aXJlZCA9ICB0aGlzLmNoZWNrYm94LnJlcXVpcmVkO1xuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hDaGVja2JveENvbXBvbmVudFxuICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyByZXF1aXJlZCA9IGZhbHNlO1xuICAgIC8qKlxuICAgICAqIFNldHMvZ2V0cyB0aGUgYGFyaWEtbGFiZWxsZWRieWAgYXR0cmlidXRlLlxuICAgICAqIElmIG5vdCBzZXQsIHRoZSBgYXJpYS1sYWJlbGxlZGJ5YCB3aWxsIGJlIGVxdWFsIHRvIHRoZSB2YWx1ZSBvZiBgbGFiZWxJZGAgYXR0cmlidXRlLlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8aWd4LWNoZWNrYm94IGFyaWEtbGFiZWxsZWRieSA9IFwiQ2hlY2tib3gxXCI+PC9pZ3gtY2hlY2tib3g+XG4gICAgICogYGBgXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGxldCBhcmlhTGFiZWxsZWRCeSA9ICB0aGlzLmNoZWNrYm94LmFyaWFMYWJlbGxlZEJ5O1xuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hDaGVja2JveENvbXBvbmVudFxuICAgICAqL1xuICAgIEBJbnB1dCgnYXJpYS1sYWJlbGxlZGJ5JylcbiAgICBwdWJsaWMgYXJpYUxhYmVsbGVkQnkgPSB0aGlzLmxhYmVsSWQ7XG4gICAgLyoqXG4gICAgICogU2V0cy9nZXRzIHRoZSB2YWx1ZSBvZiB0aGUgYGFyaWEtbGFiZWxgIGF0dHJpYnV0ZS5cbiAgICAgKiBgYGBodG1sXG4gICAgICogPGlneC1jaGVja2JveCBhcmlhLWxhYmVsID0gXCJDaGVja2JveDFcIj48L2lneC1jaGVja2JveD5cbiAgICAgKiBgYGBcbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogbGV0IGFyaWFMYWJlbCA9IHRoaXMuY2hlY2tib3guYXJ1YUxhYmVsO1xuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hDaGVja2JveENvbXBvbmVudFxuICAgICAqL1xuICAgIEBJbnB1dCgnYXJpYS1sYWJlbCcpXG4gICAgcHVibGljIGFyaWFMYWJlbDogc3RyaW5nIHwgbnVsbCA9IG51bGw7XG4gICAgLyoqXG4gICAgICogQW4gZXZlbnQgdGhhdCBpcyBlbWl0dGVkIGFmdGVyIHRoZSBjaGVja2JveCBzdGF0ZSBpcyBjaGFuZ2VkLlxuICAgICAqIFByb3ZpZGVzIHJlZmVyZW5jZXMgdG8gdGhlIGBJZ3hDaGVja2JveENvbXBvbmVudGAgYW5kIHRoZSBgY2hlY2tlZGAgcHJvcGVydHkgYXMgZXZlbnQgYXJndW1lbnRzLlxuICAgICAqIEBtZW1iZXJvZiBJZ3hDaGVja2JveENvbXBvbmVudFxuICAgICAqL1xuICAgIEBPdXRwdXQoKVxuICAgIHJlYWRvbmx5IGNoYW5nZTogRXZlbnRFbWl0dGVyPElDaGFuZ2VDaGVja2JveEV2ZW50QXJncz4gPSBuZXcgRXZlbnRFbWl0dGVyPElDaGFuZ2VDaGVja2JveEV2ZW50QXJncz4oKTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBjbGFzcyBvZiB0aGUgY2hlY2tib3ggY29tcG9uZW50LlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBsZXQgY2xhc3MgPSAgdGhpcy5jaGVja2JveC5jc3NDbGFzcztcbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4Q2hlY2tib3hDb21wb25lbnRcbiAgICAgKi9cbiAgICBASG9zdEJpbmRpbmcoJ2NsYXNzLmlneC1jaGVja2JveCcpXG4gICAgcHVibGljIGNzc0NsYXNzID0gJ2lneC1jaGVja2JveCc7XG4gICAgLyoqXG4gICAgICogU2V0cy9nZXRzIHdoZXRoZXIgdGhlIGNoZWNrYm94IGNvbXBvbmVudCBpcyBvbiBmb2N1cy5cbiAgICAgKiBEZWZhdWx0IHZhbHVlIGlzIGBmYWxzZWAuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIHRoaXMuY2hlY2tib3guZm9jdXNlZCA9ICB0cnVlO1xuICAgICAqIGBgYFxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBsZXQgaXNGb2N1c2VkID0gIHRoaXMuY2hlY2tib3guZm9jdXNlZDtcbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4Q2hlY2tib3hDb21wb25lbnRcbiAgICAgKi9cbiAgICBASG9zdEJpbmRpbmcoJ2NsYXNzLmlneC1jaGVja2JveC0tZm9jdXNlZCcpXG4gICAgcHVibGljIGZvY3VzZWQgPSBmYWxzZTtcbiAgICAvKipcbiAgICAgKiBTZXRzL2dldHMgdGhlIGNoZWNrYm94IGluZGV0ZXJtaW5hdGUgdmlzdWFsIHN0YXRlLlxuICAgICAqIERlZmF1bHQgdmFsdWUgaXMgYGZhbHNlYDtcbiAgICAgKiBgYGBodG1sXG4gICAgICogPGlneC1jaGVja2JveCBbaW5kZXRlcm1pbmF0ZV0gPSBcInRydWVcIj48L2lneC1jaGVja2JveD5cbiAgICAgKiBgYGBcbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogbGV0IGlzSW5kZXRlcm1pbmF0ZSA9IHRoaXMuY2hlY2tib3guaW5kZXRlcm1pbmF0ZTtcbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4Q2hlY2tib3hDb21wb25lbnRcbiAgICAgKi9cbiAgICBASG9zdEJpbmRpbmcoJ2NsYXNzLmlneC1jaGVja2JveC0taW5kZXRlcm1pbmF0ZScpXG4gICAgQElucHV0KCkgcHVibGljIGluZGV0ZXJtaW5hdGUgPSBmYWxzZTtcbiAgICAvKipcbiAgICAgKiBTZXRzL2dldHMgd2hldGhlciB0aGUgY2hlY2tib3ggaXMgY2hlY2tlZC5cbiAgICAgKiBEZWZhdWx0IHZhbHVlIGlzIGBmYWxzZWAuXG4gICAgICogYGBgaHRtbFxuICAgICAqIDxpZ3gtY2hlY2tib3ggW2NoZWNrZWRdID0gXCJ0cnVlXCI+PC9pZ3gtY2hlY2tib3g+XG4gICAgICogYGBgXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGxldCBpc0NoZWNrZWQgPSAgdGhpcy5jaGVja2JveC5jaGVja2VkO1xuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hDaGVja2JveENvbXBvbmVudFxuICAgICAqL1xuICAgIEBIb3N0QmluZGluZygnY2xhc3MuaWd4LWNoZWNrYm94LS1jaGVja2VkJylcbiAgICBASW5wdXQoKSBwdWJsaWMgY2hlY2tlZCA9IGZhbHNlO1xuICAgIC8qKlxuICAgICAqIFNldHMvZ2V0cyB3aGV0aGVyIHRoZSBjaGVja2JveCBpcyBkaXNhYmxlZC5cbiAgICAgKiBEZWZhdWx0IHZhbHVlIGlzIGBmYWxzZWAuXG4gICAgICogYGBgaHRtbFxuICAgICAqIDxpZ3gtY2hlY2tib3ggW2Rpc2FibGVkXSA9IFwidHJ1ZVwiPjwvaWd4LWNoZWNrYm94PlxuICAgICAqIGBgYFxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBsZXQgaXNEZXNhYmxlZCA9IHRoaXMuY2hlY2tib3guZGlzYWJsZWQ7XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneENoZWNrYm94Q29tcG9uZW50XG4gICAgICovXG4gICAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pZ3gtY2hlY2tib3gtLWRpc2FibGVkJylcbiAgICBASW5wdXQoKSBwdWJsaWMgZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAvKipcbiAgICAgKiBTZXRzL2dldHMgd2hldGhlciB0aGUgY2hlY2tib3ggc2hvdWxkIGRpc2FibGUgYWxsIGNzcyB0cmFuc2l0aW9ucy5cbiAgICAgKiBEZWZhdWx0IHZhbHVlIGlzIGBmYWxzZWAuXG4gICAgICogYGBgaHRtbFxuICAgICAqIDxpZ3gtY2hlY2tib3ggW2Rpc2FibGVUcmFuc2l0aW9uc109XCJ0cnVlXCI+PC9pZ3gtY2hlY2tib3g+XG4gICAgICogYGBgXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGxldCBkaXNhYmxlVHJhbnNpdGlvbnMgPSB0aGlzLmNoZWNrYm94LmRpc2FibGVUcmFuc2l0aW9ucztcbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4Q2hlY2tib3hDb21wb25lbnRcbiAgICAgKi9cbiAgICBASG9zdEJpbmRpbmcoJ2NsYXNzLmlneC1jaGVja2JveC0tcGxhaW4nKVxuICAgIEBJbnB1dCgpIHB1YmxpYyBkaXNhYmxlVHJhbnNpdGlvbnMgPSBmYWxzZTtcbiAgICAvKipcbiAgICAgKkBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgaW5wdXRJZCA9IGAke3RoaXMuaWR9LWlucHV0YDtcbiAgICAvKipcbiAgICAgKkBoaWRkZW5cbiAgICAgKi9cbiAgICBwcml2YXRlIF9vblRvdWNoZWRDYWxsYmFjazogKCkgPT4gdm9pZCA9IG5vb3A7XG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHByaXZhdGUgX29uQ2hhbmdlQ2FsbGJhY2s6IChfOiBhbnkpID0+IHZvaWQgPSBub29wO1xuICAgIC8qKlxuICAgICAqIElmIGBkaXNhYmxlZGAgaXMgYGZhbHNlYCwgc3dpdGNoZXMgdGhlIGBjaGVja2VkYCBzdGF0ZS5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogdGhpcy5jaGVja2JveC50b2dnbGUoKTtcbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4Q2hlY2tib3hDb21wb25lbnRcbiAgICAgKi9cbiAgICBwdWJsaWMgdG9nZ2xlKCkge1xuICAgICAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5pbmRldGVybWluYXRlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZm9jdXNlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmNoZWNrZWQgPSAhdGhpcy5jaGVja2VkO1xuXG4gICAgICAgIHRoaXMuY2hhbmdlLmVtaXQoeyBjaGVja2VkOiB0aGlzLmNoZWNrZWQsIGNoZWNrYm94OiB0aGlzIH0pO1xuICAgICAgICB0aGlzLl9vbkNoYW5nZUNhbGxiYWNrKHRoaXMuY2hlY2tlZCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyBfb25DaGVja2JveENoYW5nZShldmVudCkge1xuICAgICAgICAvLyBXZSBoYXZlIHRvIHN0b3AgdGhlIG9yaWdpbmFsIGNoZWNrYm94IGNoYW5nZSBldmVudFxuICAgICAgICAvLyBmcm9tIGJ1YmJsaW5nIHVwIHNpbmNlIHdlIGVtaXQgb3VyIG93biBjaGFuZ2UgZXZlbnRcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyBfb25DaGVja2JveENsaWNrKGV2ZW50KSB7XG4gICAgICAgIC8vIFNpbmNlIHRoZSBvcmlnaW5hbCBjaGVja2JveCBpcyBoaWRkZW4gYW5kIHRoZSBsYWJlbFxuICAgICAgICAvLyBpcyB1c2VkIGZvciBzdHlsaW5nIGFuZCB0byBjaGFuZ2UgdGhlIGNoZWNrZWQgc3RhdGUgb2YgdGhlIGNoZWNrYm94LFxuICAgICAgICAvLyB3ZSBuZWVkIHRvIHByZXZlbnQgdGhlIGNoZWNrYm94IGNsaWNrIGV2ZW50IGZyb20gYnViYmxpbmcgdXBcbiAgICAgICAgLy8gYXMgaXQgZ2V0cyB0cmlnZ2VyZWQgb24gbGFiZWwgY2xpY2tcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgICAgaWYgKGlzSUUoKSkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVDaGVja2JveC5uYXRpdmVFbGVtZW50LmJsdXIoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudG9nZ2xlKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyBfb25MYWJlbENsaWNrKGV2ZW50KSB7XG4gICAgICAgIC8vIFdlIHVzZSBhIHNwYW4gZWxlbWVudCBhcyBhIHBsYWNlaG9sZGVyIGxhYmVsXG4gICAgICAgIC8vIGluIHBsYWNlIG9mIHRoZSBuYXRpdmUgbGFiZWwsIHdlIG5lZWQgdG8gZW1pdFxuICAgICAgICAvLyB0aGUgY2hhbmdlIGV2ZW50IHNlcGFyYXRlbHkgaGVyZSBhbG9uZ3NpZGVcbiAgICAgICAgLy8gdGhlIGNsaWNrIGV2ZW50IGVtaXR0ZWQgb24gY2xpY2tcbiAgICAgICAgdGhpcy50b2dnbGUoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICpAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIG9uRm9jdXMoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5mb2N1c2VkID0gdHJ1ZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICpAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIG9uQmx1cihldmVudCkge1xuICAgICAgICB0aGlzLmZvY3VzZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fb25Ub3VjaGVkQ2FsbGJhY2soKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICpAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIHdyaXRlVmFsdWUodmFsdWUpIHtcbiAgICAgICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5jaGVja2VkID0gISF0aGlzLl92YWx1ZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICpAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIGdldCBsYWJlbENsYXNzKCk6IHN0cmluZyB7XG4gICAgICAgIHN3aXRjaCAodGhpcy5sYWJlbFBvc2l0aW9uKSB7XG4gICAgICAgICAgICBjYXNlIExhYmVsUG9zaXRpb24uQkVGT1JFOlxuICAgICAgICAgICAgICAgIHJldHVybiBgJHt0aGlzLmNzc0NsYXNzfV9fbGFiZWwtLWJlZm9yZWA7XG4gICAgICAgICAgICBjYXNlIExhYmVsUG9zaXRpb24uQUZURVI6XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiBgJHt0aGlzLmNzc0NsYXNzfV9fbGFiZWxgO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyByZWdpc3Rlck9uQ2hhbmdlKGZuOiAoXzogYW55KSA9PiB2b2lkKSB7IHRoaXMuX29uQ2hhbmdlQ2FsbGJhY2sgPSBmbjsgfVxuICAgIC8qKlxuICAgICAqQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4gdm9pZCkgeyB0aGlzLl9vblRvdWNoZWRDYWxsYmFjayA9IGZuOyB9XG5cbiAgICAvKiogQGhpZGRlbiAqL1xuICAgIGdldEVkaXRFbGVtZW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5uYXRpdmVDaGVja2JveC5uYXRpdmVFbGVtZW50O1xuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IElHWF9DSEVDS0JPWF9SRVFVSVJFRF9WQUxJREFUT1I6IFByb3ZpZGVyID0ge1xuICAgIHByb3ZpZGU6IE5HX1ZBTElEQVRPUlMsXG4gICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gSWd4Q2hlY2tib3hSZXF1aXJlZERpcmVjdGl2ZSksXG4gICAgbXVsdGk6IHRydWVcbn07XG5cbi8qIHRzbGludDpkaXNhYmxlIGRpcmVjdGl2ZS1zZWxlY3RvciAqL1xuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6IGBpZ3gtY2hlY2tib3hbcmVxdWlyZWRdW2Zvcm1Db250cm9sTmFtZV0sXG4gICAgaWd4LWNoZWNrYm94W3JlcXVpcmVkXVtmb3JtQ29udHJvbF0sXG4gICAgaWd4LWNoZWNrYm94W3JlcXVpcmVkXVtuZ01vZGVsXWAsXG4gICAgcHJvdmlkZXJzOiBbSUdYX0NIRUNLQk9YX1JFUVVJUkVEX1ZBTElEQVRPUl1cbn0pXG5leHBvcnQgY2xhc3MgSWd4Q2hlY2tib3hSZXF1aXJlZERpcmVjdGl2ZSBleHRlbmRzIENoZWNrYm94UmVxdWlyZWRWYWxpZGF0b3IgeyB9XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5ATmdNb2R1bGUoe1xuICAgIGRlY2xhcmF0aW9uczogW0lneENoZWNrYm94Q29tcG9uZW50LCBJZ3hDaGVja2JveFJlcXVpcmVkRGlyZWN0aXZlXSxcbiAgICBleHBvcnRzOiBbSWd4Q2hlY2tib3hDb21wb25lbnQsIElneENoZWNrYm94UmVxdWlyZWREaXJlY3RpdmVdLFxuICAgIGltcG9ydHM6IFtJZ3hSaXBwbGVNb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIElneENoZWNrYm94TW9kdWxlIHsgfVxuIl19