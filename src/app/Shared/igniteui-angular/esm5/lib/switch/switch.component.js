/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Directive, EventEmitter, forwardRef, HostBinding, Input, NgModule, Output, ViewChild, ElementRef } from '@angular/core';
import { CheckboxRequiredValidator, NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { IgxRippleModule } from '../directives/ripple/ripple.directive';
import { isIE } from '../core/utils';
/** @enum {string} */
var SwitchLabelPosition = {
    BEFORE: 'before',
    AFTER: 'after',
};
export { SwitchLabelPosition };
/**
 * @record
 */
export function IChangeSwitchEventArgs() { }
if (false) {
    /** @type {?} */
    IChangeSwitchEventArgs.prototype.checked;
    /** @type {?} */
    IChangeSwitchEventArgs.prototype.switch;
}
/** @type {?} */
var noop = function () { };
var ɵ0 = noop;
/** @type {?} */
var nextId = 0;
/**
 * **Ignite UI for Angular Switch** -
 * [Documentation](https://www.infragistics.com/products/ignite-ui-angular/angular/components/switch.html)
 *
 * The Ignite UI Switch lets the user toggle between on/off or true/false states.
 *
 * Example:
 * ```html
 * <igx-switch [checked]="true">
 *   Simple switch
 * </igx-switch>
 * ```
 */
var IgxSwitchComponent = /** @class */ (function () {
    function IgxSwitchComponent() {
        /**
         * Sets/gets the `id` of the switch component.
         * If not set, the `id` of the first switch component will be `"igx-switch-0"`.
         * ```html
         * <igx-switch id="my-first-switch"></igx-switch>
         * ```
         * ```typescript
         * let switchId =  this.switch.id;
         * ```
         * \@memberof IgxSwitchComponent
         */
        this.id = "igx-switch-" + nextId++;
        /**
         * Sets/gets the id of the `label` element in the switch component.
         * If not set, the label of the first switch component will have value `"igx-switch-0-label"`.
         * ```html
         * <igx-switch labelId="Label1"></igx-switch>
         * ```
         * ```typescript
         * let labelId =  this.switch.labelId;
         * ```
         * \@memberof IgxSwitchComponent
         */
        this.labelId = this.id + "-label";
        /**
         * Sets/gets the value of the `tabindex` attribute.
         * ```html
         * <igx-switch [tabindex]="1"></igx-switch>
         * ```
         * ```typescript
         * let tabIndex =  this.switch.tabindex;
         * ```
         * \@memberof IgxSwitchComponent
         */
        this.tabindex = null;
        /**
         * Sets/gets the position of the `label` in the switch component.
         * If not set, `labelPosition` will have value `"after"`.
         * ```html
         * <igx-switch labelPosition="before"></igx-switch>
         * ```
         * ```typescript
         * let labelPosition =  this.switch.labelPosition;
         * ```
         * \@memberof IgxSwitchComponent
         */
        this.labelPosition = 'after';
        /**
         * Enables/Disables the ripple effect
         * If not set, `disableRipple` will have value `false`.
         * ```html
         * <igx-switch [disableRipple]="true"></igx-switch>
         * ```
         * ```typescript
         * let isRippleDisabled = this.switch.disableRipple;
         * ```
         * \@memberof IgxSwitchComponent
         */
        this.disableRipple = false;
        /**
         * Sets/gets whether switch is required.
         * If not set, `required` will have value `false`.
         * ```html
         * <igx-switch [required]="true"></igx-switch>
         * ```
         * ```typescript
         * let isRequired = this.switch.required;
         * ```
         * \@memberof IgxSwitchComponent
         */
        this.required = false;
        /**
         * Sets/gets the `aria-labelledBy` attribute.
         * If not set, the  value of `aria-labelledBy` will be equal to the value of `labelId` attribute.
         * ```html
         * <igx-switch aria-labelledby = "Label1"></igx-switch>
         * ```
         * ```typescript
         * let ariaLabelledBy = this.switch.ariaLabelledBy;
         * ```
         * \@memberof IgxSwitchComponent
         */
        this.ariaLabelledBy = this.labelId;
        /**
         * Sets/gets the value of the `aria-label` attribute.
         * ```html
         * <igx-switch aria-label="Label1"></igx-switch>
         * ```
         * ```typescript
         * let ariaLabel =  this.switch.ariaLabel;
         * ```
         * \@memberof IgxSwitchComponent
         */
        this.ariaLabel = null;
        /**
         * An event that is emitted after the switch state is changed.
         * Provides references to the `IgxSwitchComponent` and the `checked` property as event arguments.
         * \@memberof IgxSwitchComponent
         */
        this.change = new EventEmitter();
        /**
         * @hidden
         * \@memberof IgxSwitchComponent
         */
        this._onTouchedCallback = noop;
        /**
         * @hidden
         * \@memberof IgxSwitchComponent
         */
        this._onChangeCallback = noop;
        /**
         * Returns the class of the switch component.
         * ```typescript
         * let switchClass = this.switch.cssClass;
         * ```
         * \@memberof IgxSwitchComponent
         */
        this.cssClass = 'igx-switch';
        /**
         * Sets/gets whether the switch is on or off.
         * Default value is 'false'.
         * ```html
         *  <igx-switch [checked] = "true"></igx-switch>
         * ```
         * ```typescript
         * let isChecked =  this.switch.checked;
         * ```
         * \@memberof IgxSwitchComponent
         */
        this.checked = false;
        /**
         * Sets/gets the `disabled` attribute.
         * Default value is `false`.
         * ```html
         * <igx-switch [disabled] = "true"><igx-switch>
         * ```
         * ```typescript
         * let isDisabled =  this.switch.disabled;
         * ```
         * \@memberof IgxSwitchComponent
         */
        this.disabled = false;
        /**
         * Sets/gets whether the switch component is on focus.
         * Default value is `false`.
         * ```typescript
         * this.switch.focused = true;
         * ```
         * ```typescript
         * let isFocused =  this.switch.focused;
         * ```
         * \@memberof IgxSwitchComponent
         */
        this.focused = false;
        /**
         * @hidden
         */
        this.inputId = this.id + "-input";
    }
    /**
     * Toggles the checked state of the switch.
     * ```typescript
     * this.switch.toggle();
     * ```
     * @memberof IgxSwitchComponent
     */
    /**
     * Toggles the checked state of the switch.
     * ```typescript
     * this.switch.toggle();
     * ```
     * \@memberof IgxSwitchComponent
     * @return {?}
     */
    IgxSwitchComponent.prototype.toggle = /**
     * Toggles the checked state of the switch.
     * ```typescript
     * this.switch.toggle();
     * ```
     * \@memberof IgxSwitchComponent
     * @return {?}
     */
    function () {
        if (this.disabled) {
            return;
        }
        this.checked = !this.checked;
        this.focused = false;
        this.change.emit({ checked: this.checked, switch: this });
        this._onChangeCallback(this.checked);
    };
    /**
     *@hidden
     */
    /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    IgxSwitchComponent.prototype._onSwitchChange = /**
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
    IgxSwitchComponent.prototype._onSwitchClick = /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.stopPropagation();
        this.toggle();
        if (isIE()) {
            this.nativeCheckbox.nativeElement.blur();
        }
    };
    /**
     *@hidden
     */
    /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    IgxSwitchComponent.prototype._onLabelClick = /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.toggle();
    };
    /**
     *@hidden
     */
    /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    IgxSwitchComponent.prototype.onFocus = /**
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
    IgxSwitchComponent.prototype.onBlur = /**
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
     * @param {?} value
     * @return {?}
     */
    IgxSwitchComponent.prototype.writeValue = /**
     * @hidden
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this._value = value;
        this.checked = !!this._value;
    };
    /** @hidden */
    /**
     * @hidden
     * @return {?}
     */
    IgxSwitchComponent.prototype.getEditElement = /**
     * @hidden
     * @return {?}
     */
    function () {
        return this.nativeCheckbox.nativeElement;
    };
    Object.defineProperty(IgxSwitchComponent.prototype, "labelClass", {
        /**
         *@hidden
         */
        get: /**
         * @hidden
         * @return {?}
         */
        function () {
            switch (this.labelPosition) {
                case SwitchLabelPosition.BEFORE:
                    return this.cssClass + "__label--before";
                case SwitchLabelPosition.AFTER:
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
     * @param {?} fn
     * @return {?}
     */
    IgxSwitchComponent.prototype.registerOnChange = /**
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
    IgxSwitchComponent.prototype.registerOnTouched = /**
     * @hidden
     * @param {?} fn
     * @return {?}
     */
    function (fn) { this._onTouchedCallback = fn; };
    IgxSwitchComponent.decorators = [
        { type: Component, args: [{
                    providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: IgxSwitchComponent, multi: true }],
                    selector: 'igx-switch',
                    template: "<input #checkbox class=\"igx-switch__input\" type=\"checkbox\"\n    [id]=\"inputId\"\n    [name]=\"name\"\n    [value]=\"value\"\n    [tabindex]=\"tabindex\"\n    [disabled]=\"disabled\"\n    [checked]=\"checked\"\n    [required]=\"required\"\n    [attr.aria-checked]=\"checked\"\n    [attr.aria-labelledby]=\"ariaLabelledBy\"\n    [attr.aria-label]=\"ariaLabel\"\n    (change)=\"_onSwitchChange($event)\"\n    (click)=\"_onSwitchClick($event)\"\n    (focus)=\"onFocus($event)\"\n    (blur)=\"onBlur($event)\" />\n\n<label #label class =\"igx-switch__composite\" [for]=\"inputId\"\n    igxRipple\n    igxRippleTarget=\".igx-switch__ripple\"\n    [igxRippleDisabled]=\"disableRipple\"\n    [igxRippleCentered]=\"true\"\n    [igxRippleDuration]=\"300\">\n    <div class=\"igx-switch__composite-thumb\">\n        <div class=\"igx-switch__ripple\"></div>\n    </div>\n</label>\n\n<span #placeholderLabel role=\"label\"\n    [class]=\"labelClass\"\n    [id]=\"labelId\"\n    (click)=\"_onLabelClick($event)\">\n    <ng-content></ng-content>\n</span>\n"
                }] }
    ];
    IgxSwitchComponent.propDecorators = {
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
        cssClass: [{ type: HostBinding, args: ['class.igx-switch',] }],
        checked: [{ type: HostBinding, args: ['class.igx-switch--checked',] }, { type: Input }],
        disabled: [{ type: HostBinding, args: ['class.igx-switch--disabled',] }, { type: Input }],
        focused: [{ type: HostBinding, args: ['class.igx-switch--focused',] }]
    };
    return IgxSwitchComponent;
}());
export { IgxSwitchComponent };
if (false) {
    /**
     * @hidden
     * @type {?}
     * @protected
     */
    IgxSwitchComponent.prototype._value;
    /**
     * Returns reference to the native checkbox element.
     * ```typescript
     * let checkboxElement =  this.switch.nativeCheckbox;
     * ```
     * \@memberof IgxSwitchComponent
     * @type {?}
     */
    IgxSwitchComponent.prototype.nativeCheckbox;
    /**
     * Returns reference to the native label element.
     * ```typescript
     * let labelElement =  this.switch.nativeLabel;
     * ```
     * \@memberof IgxSwitchComponent
     * @type {?}
     */
    IgxSwitchComponent.prototype.nativeLabel;
    /**
     * Returns reference to the label placeholder element.
     * ```typescript
     * let labelPlaceholder =  this.switch.placeholderLabel;
     * ```
     * \@memberof IgxSwitchComponent
     * @type {?}
     */
    IgxSwitchComponent.prototype.placeholderLabel;
    /**
     * Sets/gets the `id` of the switch component.
     * If not set, the `id` of the first switch component will be `"igx-switch-0"`.
     * ```html
     * <igx-switch id="my-first-switch"></igx-switch>
     * ```
     * ```typescript
     * let switchId =  this.switch.id;
     * ```
     * \@memberof IgxSwitchComponent
     * @type {?}
     */
    IgxSwitchComponent.prototype.id;
    /**
     * Sets/gets the id of the `label` element in the switch component.
     * If not set, the label of the first switch component will have value `"igx-switch-0-label"`.
     * ```html
     * <igx-switch labelId="Label1"></igx-switch>
     * ```
     * ```typescript
     * let labelId =  this.switch.labelId;
     * ```
     * \@memberof IgxSwitchComponent
     * @type {?}
     */
    IgxSwitchComponent.prototype.labelId;
    /**
     * Sets/gets the `value` attribute of the switch component.
     * ```html
     * <igx-switch [value] = "switchValue"></igx-switch>
     * ```
     * ```typescript
     * let value =  this.switch.value;
     * ```
     * \@memberof IgxSwitchComponent
     * @type {?}
     */
    IgxSwitchComponent.prototype.value;
    /**
     * Sets/gets the `name` attribute of the switch component.
     * ```html
     * <igx-switch name = "Switch1"></igx-switch>
     * ```
     * ```typescript
     * let name =  this.switch.name;
     * ```
     * \@memberof IgxSwitchComponent
     * @type {?}
     */
    IgxSwitchComponent.prototype.name;
    /**
     * Sets/gets the value of the `tabindex` attribute.
     * ```html
     * <igx-switch [tabindex]="1"></igx-switch>
     * ```
     * ```typescript
     * let tabIndex =  this.switch.tabindex;
     * ```
     * \@memberof IgxSwitchComponent
     * @type {?}
     */
    IgxSwitchComponent.prototype.tabindex;
    /**
     * Sets/gets the position of the `label` in the switch component.
     * If not set, `labelPosition` will have value `"after"`.
     * ```html
     * <igx-switch labelPosition="before"></igx-switch>
     * ```
     * ```typescript
     * let labelPosition =  this.switch.labelPosition;
     * ```
     * \@memberof IgxSwitchComponent
     * @type {?}
     */
    IgxSwitchComponent.prototype.labelPosition;
    /**
     * Enables/Disables the ripple effect
     * If not set, `disableRipple` will have value `false`.
     * ```html
     * <igx-switch [disableRipple]="true"></igx-switch>
     * ```
     * ```typescript
     * let isRippleDisabled = this.switch.disableRipple;
     * ```
     * \@memberof IgxSwitchComponent
     * @type {?}
     */
    IgxSwitchComponent.prototype.disableRipple;
    /**
     * Sets/gets whether switch is required.
     * If not set, `required` will have value `false`.
     * ```html
     * <igx-switch [required]="true"></igx-switch>
     * ```
     * ```typescript
     * let isRequired = this.switch.required;
     * ```
     * \@memberof IgxSwitchComponent
     * @type {?}
     */
    IgxSwitchComponent.prototype.required;
    /**
     * Sets/gets the `aria-labelledBy` attribute.
     * If not set, the  value of `aria-labelledBy` will be equal to the value of `labelId` attribute.
     * ```html
     * <igx-switch aria-labelledby = "Label1"></igx-switch>
     * ```
     * ```typescript
     * let ariaLabelledBy = this.switch.ariaLabelledBy;
     * ```
     * \@memberof IgxSwitchComponent
     * @type {?}
     */
    IgxSwitchComponent.prototype.ariaLabelledBy;
    /**
     * Sets/gets the value of the `aria-label` attribute.
     * ```html
     * <igx-switch aria-label="Label1"></igx-switch>
     * ```
     * ```typescript
     * let ariaLabel =  this.switch.ariaLabel;
     * ```
     * \@memberof IgxSwitchComponent
     * @type {?}
     */
    IgxSwitchComponent.prototype.ariaLabel;
    /**
     * An event that is emitted after the switch state is changed.
     * Provides references to the `IgxSwitchComponent` and the `checked` property as event arguments.
     * \@memberof IgxSwitchComponent
     * @type {?}
     */
    IgxSwitchComponent.prototype.change;
    /**
     * @hidden
     * \@memberof IgxSwitchComponent
     * @type {?}
     * @private
     */
    IgxSwitchComponent.prototype._onTouchedCallback;
    /**
     * @hidden
     * \@memberof IgxSwitchComponent
     * @type {?}
     * @private
     */
    IgxSwitchComponent.prototype._onChangeCallback;
    /**
     * Returns the class of the switch component.
     * ```typescript
     * let switchClass = this.switch.cssClass;
     * ```
     * \@memberof IgxSwitchComponent
     * @type {?}
     */
    IgxSwitchComponent.prototype.cssClass;
    /**
     * Sets/gets whether the switch is on or off.
     * Default value is 'false'.
     * ```html
     *  <igx-switch [checked] = "true"></igx-switch>
     * ```
     * ```typescript
     * let isChecked =  this.switch.checked;
     * ```
     * \@memberof IgxSwitchComponent
     * @type {?}
     */
    IgxSwitchComponent.prototype.checked;
    /**
     * Sets/gets the `disabled` attribute.
     * Default value is `false`.
     * ```html
     * <igx-switch [disabled] = "true"><igx-switch>
     * ```
     * ```typescript
     * let isDisabled =  this.switch.disabled;
     * ```
     * \@memberof IgxSwitchComponent
     * @type {?}
     */
    IgxSwitchComponent.prototype.disabled;
    /**
     * Sets/gets whether the switch component is on focus.
     * Default value is `false`.
     * ```typescript
     * this.switch.focused = true;
     * ```
     * ```typescript
     * let isFocused =  this.switch.focused;
     * ```
     * \@memberof IgxSwitchComponent
     * @type {?}
     */
    IgxSwitchComponent.prototype.focused;
    /**
     * @hidden
     * @type {?}
     */
    IgxSwitchComponent.prototype.inputId;
}
/** @type {?} */
export var IGX_SWITCH_REQUIRED_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(function () { return IgxSwitchRequiredDirective; }),
    multi: true
};
/* tslint:disable directive-selector */
var IgxSwitchRequiredDirective = /** @class */ (function (_super) {
    tslib_1.__extends(IgxSwitchRequiredDirective, _super);
    function IgxSwitchRequiredDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IgxSwitchRequiredDirective.decorators = [
        { type: Directive, args: [{
                    selector: "igx-switch[required][formControlName],\n    igx-switch[required][formControl],\n    igx-switch[required][ngModel]",
                    providers: [IGX_SWITCH_REQUIRED_VALIDATOR]
                },] }
    ];
    return IgxSwitchRequiredDirective;
}(CheckboxRequiredValidator));
export { IgxSwitchRequiredDirective };
/**
 * @hidden
 */
var IgxSwitchModule = /** @class */ (function () {
    function IgxSwitchModule() {
    }
    IgxSwitchModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [IgxSwitchComponent, IgxSwitchRequiredDirective],
                    exports: [IgxSwitchComponent, IgxSwitchRequiredDirective],
                    imports: [IgxRippleModule]
                },] }
    ];
    return IgxSwitchModule;
}());
export { IgxSwitchModule };
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3dpdGNoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lnbml0ZXVpLWFuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvc3dpdGNoL3N3aXRjaC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0gsU0FBUyxFQUNULFNBQVMsRUFDVCxZQUFZLEVBQ1osVUFBVSxFQUNWLFdBQVcsRUFDWCxLQUFLLEVBQ0wsUUFBUSxFQUNSLE1BQU0sRUFFTixTQUFTLEVBQ1QsVUFBVSxFQUNiLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSx5QkFBeUIsRUFBd0IsYUFBYSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbkgsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxlQUFlLENBQUM7OztJQUlqQyxRQUFTLFFBQVE7SUFDakIsT0FBUSxPQUFPOzs7Ozs7QUFHbkIsNENBR0M7OztJQUZHLHlDQUFpQjs7SUFDakIsd0NBQTJCOzs7SUFHekIsSUFBSSxHQUFHLGNBQVEsQ0FBQzs7O0lBQ2xCLE1BQU0sR0FBRyxDQUFDOzs7Ozs7Ozs7Ozs7OztBQWNkO0lBQUE7Ozs7Ozs7Ozs7OztRQStDb0IsT0FBRSxHQUFHLGdCQUFjLE1BQU0sRUFBSSxDQUFDOzs7Ozs7Ozs7Ozs7UUFZOUIsWUFBTyxHQUFNLElBQUksQ0FBQyxFQUFFLFdBQVEsQ0FBQzs7Ozs7Ozs7Ozs7UUFpQzdCLGFBQVEsR0FBVyxJQUFJLENBQUM7Ozs7Ozs7Ozs7OztRQVl4QixrQkFBYSxHQUFpQyxPQUFPLENBQUM7Ozs7Ozs7Ozs7OztRQVl0RCxrQkFBYSxHQUFHLEtBQUssQ0FBQzs7Ozs7Ozs7Ozs7O1FBWXRCLGFBQVEsR0FBRyxLQUFLLENBQUM7Ozs7Ozs7Ozs7OztRQWExQixtQkFBYyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7Ozs7Ozs7Ozs7O1FB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QixlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBDb21wb25lbnQsXG4gICAgRGlyZWN0aXZlLFxuICAgIEV2ZW50RW1pdHRlcixcbiAgICBmb3J3YXJkUmVmLFxuICAgIEhvc3RCaW5kaW5nLFxuICAgIElucHV0LFxuICAgIE5nTW9kdWxlLFxuICAgIE91dHB1dCxcbiAgICBQcm92aWRlcixcbiAgICBWaWV3Q2hpbGQsXG4gICAgRWxlbWVudFJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENoZWNrYm94UmVxdWlyZWRWYWxpZGF0b3IsIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxJREFUT1JTLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IElneFJpcHBsZU1vZHVsZSB9IGZyb20gJy4uL2RpcmVjdGl2ZXMvcmlwcGxlL3JpcHBsZS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgaXNJRSB9IGZyb20gJy4uL2NvcmUvdXRpbHMnO1xuaW1wb3J0IHsgRWRpdG9yUHJvdmlkZXIgfSBmcm9tICcuLi9jb3JlL2VkaXQtcHJvdmlkZXInO1xuXG5leHBvcnQgZW51bSBTd2l0Y2hMYWJlbFBvc2l0aW9uIHtcbiAgICBCRUZPUkUgPSAnYmVmb3JlJyxcbiAgICBBRlRFUiA9ICdhZnRlcidcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJQ2hhbmdlU3dpdGNoRXZlbnRBcmdzIHtcbiAgICBjaGVja2VkOiBib29sZWFuO1xuICAgIHN3aXRjaDogSWd4U3dpdGNoQ29tcG9uZW50O1xufVxuXG5jb25zdCBub29wID0gKCkgPT4geyB9O1xubGV0IG5leHRJZCA9IDA7XG4vKipcbiAqICoqSWduaXRlIFVJIGZvciBBbmd1bGFyIFN3aXRjaCoqIC1cbiAqIFtEb2N1bWVudGF0aW9uXShodHRwczovL3d3dy5pbmZyYWdpc3RpY3MuY29tL3Byb2R1Y3RzL2lnbml0ZS11aS1hbmd1bGFyL2FuZ3VsYXIvY29tcG9uZW50cy9zd2l0Y2guaHRtbClcbiAqXG4gKiBUaGUgSWduaXRlIFVJIFN3aXRjaCBsZXRzIHRoZSB1c2VyIHRvZ2dsZSBiZXR3ZWVuIG9uL29mZiBvciB0cnVlL2ZhbHNlIHN0YXRlcy5cbiAqXG4gKiBFeGFtcGxlOlxuICogYGBgaHRtbFxuICogPGlneC1zd2l0Y2ggW2NoZWNrZWRdPVwidHJ1ZVwiPlxuICogICBTaW1wbGUgc3dpdGNoXG4gKiA8L2lneC1zd2l0Y2g+XG4gKiBgYGBcbiAqL1xuQENvbXBvbmVudCh7XG4gICAgcHJvdmlkZXJzOiBbeyBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUiwgdXNlRXhpc3Rpbmc6IElneFN3aXRjaENvbXBvbmVudCwgbXVsdGk6IHRydWUgfV0sXG4gICAgc2VsZWN0b3I6ICdpZ3gtc3dpdGNoJyxcbiAgICB0ZW1wbGF0ZVVybDogJ3N3aXRjaC5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgSWd4U3dpdGNoQ29tcG9uZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIEVkaXRvclByb3ZpZGVyIHtcbiAgICAvKipcbiAgICAgKkBoaWRkZW5cbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgX3ZhbHVlOiBhbnk7XG4gICAgLyoqXG4gICAgICogUmV0dXJucyByZWZlcmVuY2UgdG8gdGhlIG5hdGl2ZSBjaGVja2JveCBlbGVtZW50LlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBsZXQgY2hlY2tib3hFbGVtZW50ID0gIHRoaXMuc3dpdGNoLm5hdGl2ZUNoZWNrYm94O1xuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hTd2l0Y2hDb21wb25lbnRcbiAgICAgKi9cbiAgICBAVmlld0NoaWxkKCdjaGVja2JveCcsIHsgc3RhdGljOiB0cnVlIH0pIHB1YmxpYyBuYXRpdmVDaGVja2JveDogRWxlbWVudFJlZjtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHJlZmVyZW5jZSB0byB0aGUgbmF0aXZlIGxhYmVsIGVsZW1lbnQuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGxldCBsYWJlbEVsZW1lbnQgPSAgdGhpcy5zd2l0Y2gubmF0aXZlTGFiZWw7XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneFN3aXRjaENvbXBvbmVudFxuICAgICAqL1xuICAgIEBWaWV3Q2hpbGQoJ2xhYmVsJywgeyBzdGF0aWM6IHRydWUgfSkgcHVibGljIG5hdGl2ZUxhYmVsO1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgcmVmZXJlbmNlIHRvIHRoZSBsYWJlbCBwbGFjZWhvbGRlciBlbGVtZW50LlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBsZXQgbGFiZWxQbGFjZWhvbGRlciA9ICB0aGlzLnN3aXRjaC5wbGFjZWhvbGRlckxhYmVsO1xuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hTd2l0Y2hDb21wb25lbnRcbiAgICAgKi9cbiAgICBAVmlld0NoaWxkKCdwbGFjZWhvbGRlckxhYmVsJywgeyBzdGF0aWM6IHRydWUgfSkgcHVibGljIHBsYWNlaG9sZGVyTGFiZWw7XG5cbiAgICAvKipcbiAgICAgKiBTZXRzL2dldHMgdGhlIGBpZGAgb2YgdGhlIHN3aXRjaCBjb21wb25lbnQuXG4gICAgICogSWYgbm90IHNldCwgdGhlIGBpZGAgb2YgdGhlIGZpcnN0IHN3aXRjaCBjb21wb25lbnQgd2lsbCBiZSBgXCJpZ3gtc3dpdGNoLTBcImAuXG4gICAgICogYGBgaHRtbFxuICAgICAqIDxpZ3gtc3dpdGNoIGlkPVwibXktZmlyc3Qtc3dpdGNoXCI+PC9pZ3gtc3dpdGNoPlxuICAgICAqIGBgYFxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBsZXQgc3dpdGNoSWQgPSAgdGhpcy5zd2l0Y2guaWQ7XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneFN3aXRjaENvbXBvbmVudFxuICAgICAqL1xuICAgIEBIb3N0QmluZGluZygnYXR0ci5pZCcpXG4gICAgQElucHV0KCkgcHVibGljIGlkID0gYGlneC1zd2l0Y2gtJHtuZXh0SWQrK31gO1xuICAgIC8qKlxuICAgICAqIFNldHMvZ2V0cyB0aGUgaWQgb2YgdGhlIGBsYWJlbGAgZWxlbWVudCBpbiB0aGUgc3dpdGNoIGNvbXBvbmVudC5cbiAgICAgKiBJZiBub3Qgc2V0LCB0aGUgbGFiZWwgb2YgdGhlIGZpcnN0IHN3aXRjaCBjb21wb25lbnQgd2lsbCBoYXZlIHZhbHVlIGBcImlneC1zd2l0Y2gtMC1sYWJlbFwiYC5cbiAgICAgKiBgYGBodG1sXG4gICAgICogPGlneC1zd2l0Y2ggbGFiZWxJZD1cIkxhYmVsMVwiPjwvaWd4LXN3aXRjaD5cbiAgICAgKiBgYGBcbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogbGV0IGxhYmVsSWQgPSAgdGhpcy5zd2l0Y2gubGFiZWxJZDtcbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4U3dpdGNoQ29tcG9uZW50XG4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIGxhYmVsSWQgPSBgJHt0aGlzLmlkfS1sYWJlbGA7XG4gICAgLyoqXG4gICAgICogU2V0cy9nZXRzIHRoZSBgdmFsdWVgIGF0dHJpYnV0ZSBvZiB0aGUgc3dpdGNoIGNvbXBvbmVudC5cbiAgICAgKiBgYGBodG1sXG4gICAgICogPGlneC1zd2l0Y2ggW3ZhbHVlXSA9IFwic3dpdGNoVmFsdWVcIj48L2lneC1zd2l0Y2g+XG4gICAgICogYGBgXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGxldCB2YWx1ZSA9ICB0aGlzLnN3aXRjaC52YWx1ZTtcbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4U3dpdGNoQ29tcG9uZW50XG4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIHZhbHVlOiBhbnk7XG4gICAgLyoqXG4gICAgICogU2V0cy9nZXRzIHRoZSBgbmFtZWAgYXR0cmlidXRlIG9mIHRoZSBzd2l0Y2ggY29tcG9uZW50LlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8aWd4LXN3aXRjaCBuYW1lID0gXCJTd2l0Y2gxXCI+PC9pZ3gtc3dpdGNoPlxuICAgICAqIGBgYFxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBsZXQgbmFtZSA9ICB0aGlzLnN3aXRjaC5uYW1lO1xuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hTd2l0Y2hDb21wb25lbnRcbiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgbmFtZTogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIFNldHMvZ2V0cyB0aGUgdmFsdWUgb2YgdGhlIGB0YWJpbmRleGAgYXR0cmlidXRlLlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8aWd4LXN3aXRjaCBbdGFiaW5kZXhdPVwiMVwiPjwvaWd4LXN3aXRjaD5cbiAgICAgKiBgYGBcbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogbGV0IHRhYkluZGV4ID0gIHRoaXMuc3dpdGNoLnRhYmluZGV4O1xuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hTd2l0Y2hDb21wb25lbnRcbiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgdGFiaW5kZXg6IG51bWJlciA9IG51bGw7XG4gICAgLyoqXG4gICAgICogU2V0cy9nZXRzIHRoZSBwb3NpdGlvbiBvZiB0aGUgYGxhYmVsYCBpbiB0aGUgc3dpdGNoIGNvbXBvbmVudC5cbiAgICAgKiBJZiBub3Qgc2V0LCBgbGFiZWxQb3NpdGlvbmAgd2lsbCBoYXZlIHZhbHVlIGBcImFmdGVyXCJgLlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8aWd4LXN3aXRjaCBsYWJlbFBvc2l0aW9uPVwiYmVmb3JlXCI+PC9pZ3gtc3dpdGNoPlxuICAgICAqIGBgYFxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBsZXQgbGFiZWxQb3NpdGlvbiA9ICB0aGlzLnN3aXRjaC5sYWJlbFBvc2l0aW9uO1xuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hTd2l0Y2hDb21wb25lbnRcbiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgbGFiZWxQb3NpdGlvbjogU3dpdGNoTGFiZWxQb3NpdGlvbiB8IHN0cmluZyA9ICdhZnRlcic7XG4gICAgLyoqXG4gICAgICogRW5hYmxlcy9EaXNhYmxlcyB0aGUgcmlwcGxlIGVmZmVjdFxuICAgICAqIElmIG5vdCBzZXQsIGBkaXNhYmxlUmlwcGxlYCB3aWxsIGhhdmUgdmFsdWUgYGZhbHNlYC5cbiAgICAgKiBgYGBodG1sXG4gICAgICogPGlneC1zd2l0Y2ggW2Rpc2FibGVSaXBwbGVdPVwidHJ1ZVwiPjwvaWd4LXN3aXRjaD5cbiAgICAgKiBgYGBcbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogbGV0IGlzUmlwcGxlRGlzYWJsZWQgPSB0aGlzLnN3aXRjaC5kaXNhYmxlUmlwcGxlO1xuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hTd2l0Y2hDb21wb25lbnRcbiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgZGlzYWJsZVJpcHBsZSA9IGZhbHNlO1xuICAgIC8qKlxuICAgICAqIFNldHMvZ2V0cyB3aGV0aGVyIHN3aXRjaCBpcyByZXF1aXJlZC5cbiAgICAgKiBJZiBub3Qgc2V0LCBgcmVxdWlyZWRgIHdpbGwgaGF2ZSB2YWx1ZSBgZmFsc2VgLlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8aWd4LXN3aXRjaCBbcmVxdWlyZWRdPVwidHJ1ZVwiPjwvaWd4LXN3aXRjaD5cbiAgICAgKiBgYGBcbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogbGV0IGlzUmVxdWlyZWQgPSB0aGlzLnN3aXRjaC5yZXF1aXJlZDtcbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4U3dpdGNoQ29tcG9uZW50XG4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIHJlcXVpcmVkID0gZmFsc2U7XG4gICAgLyoqXG4gICAgICogU2V0cy9nZXRzIHRoZSBgYXJpYS1sYWJlbGxlZEJ5YCBhdHRyaWJ1dGUuXG4gICAgICogSWYgbm90IHNldCwgdGhlICB2YWx1ZSBvZiBgYXJpYS1sYWJlbGxlZEJ5YCB3aWxsIGJlIGVxdWFsIHRvIHRoZSB2YWx1ZSBvZiBgbGFiZWxJZGAgYXR0cmlidXRlLlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8aWd4LXN3aXRjaCBhcmlhLWxhYmVsbGVkYnkgPSBcIkxhYmVsMVwiPjwvaWd4LXN3aXRjaD5cbiAgICAgKiBgYGBcbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogbGV0IGFyaWFMYWJlbGxlZEJ5ID0gdGhpcy5zd2l0Y2guYXJpYUxhYmVsbGVkQnk7XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneFN3aXRjaENvbXBvbmVudFxuICAgICAqL1xuICAgIEBJbnB1dCgnYXJpYS1sYWJlbGxlZGJ5JylcbiAgICBwdWJsaWMgYXJpYUxhYmVsbGVkQnkgPSB0aGlzLmxhYmVsSWQ7XG4gICAgLyoqXG4gICAgICogU2V0cy9nZXRzIHRoZSB2YWx1ZSBvZiB0aGUgYGFyaWEtbGFiZWxgIGF0dHJpYnV0ZS5cbiAgICAgKiBgYGBodG1sXG4gICAgICogPGlneC1zd2l0Y2ggYXJpYS1sYWJlbD1cIkxhYmVsMVwiPjwvaWd4LXN3aXRjaD5cbiAgICAgKiBgYGBcbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogbGV0IGFyaWFMYWJlbCA9ICB0aGlzLnN3aXRjaC5hcmlhTGFiZWw7XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneFN3aXRjaENvbXBvbmVudFxuICAgICAqL1xuICAgIEBJbnB1dCgnYXJpYS1sYWJlbCcpXG4gICAgcHVibGljIGFyaWFMYWJlbDogc3RyaW5nIHwgbnVsbCA9IG51bGw7XG4gICAgLyoqXG4gICAgICogQW4gZXZlbnQgdGhhdCBpcyBlbWl0dGVkIGFmdGVyIHRoZSBzd2l0Y2ggc3RhdGUgaXMgY2hhbmdlZC5cbiAgICAgKiBQcm92aWRlcyByZWZlcmVuY2VzIHRvIHRoZSBgSWd4U3dpdGNoQ29tcG9uZW50YCBhbmQgdGhlIGBjaGVja2VkYCBwcm9wZXJ0eSBhcyBldmVudCBhcmd1bWVudHMuXG4gICAgICogQG1lbWJlcm9mIElneFN3aXRjaENvbXBvbmVudFxuICAgICAqL1xuICAgIEBPdXRwdXQoKVxuICAgIHJlYWRvbmx5IGNoYW5nZTogRXZlbnRFbWl0dGVyPElDaGFuZ2VTd2l0Y2hFdmVudEFyZ3M+ID0gbmV3IEV2ZW50RW1pdHRlcjxJQ2hhbmdlU3dpdGNoRXZlbnRBcmdzPigpO1xuICAgIC8qKlxuICAgICAqQGhpZGRlblxuICAgICAqIEBtZW1iZXJvZiBJZ3hTd2l0Y2hDb21wb25lbnRcbiAgICAgKi9cbiAgICBwcml2YXRlIF9vblRvdWNoZWRDYWxsYmFjazogKCkgPT4gdm9pZCA9IG5vb3A7XG4gICAgLyoqXG4gICAgICpAaGlkZGVuXG4gICAgICogQG1lbWJlcm9mIElneFN3aXRjaENvbXBvbmVudFxuICAgICAqL1xuICAgIHByaXZhdGUgX29uQ2hhbmdlQ2FsbGJhY2s6IChfOiBhbnkpID0+IHZvaWQgPSBub29wO1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGNsYXNzIG9mIHRoZSBzd2l0Y2ggY29tcG9uZW50LlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBsZXQgc3dpdGNoQ2xhc3MgPSB0aGlzLnN3aXRjaC5jc3NDbGFzcztcbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4U3dpdGNoQ29tcG9uZW50XG4gICAgICovXG4gICAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pZ3gtc3dpdGNoJylcbiAgICBwdWJsaWMgY3NzQ2xhc3MgPSAnaWd4LXN3aXRjaCc7XG4gICAgLyoqXG4gICAgICogU2V0cy9nZXRzIHdoZXRoZXIgdGhlIHN3aXRjaCBpcyBvbiBvciBvZmYuXG4gICAgICogRGVmYXVsdCB2YWx1ZSBpcyAnZmFsc2UnLlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiAgPGlneC1zd2l0Y2ggW2NoZWNrZWRdID0gXCJ0cnVlXCI+PC9pZ3gtc3dpdGNoPlxuICAgICAqIGBgYFxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBsZXQgaXNDaGVja2VkID0gIHRoaXMuc3dpdGNoLmNoZWNrZWQ7XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneFN3aXRjaENvbXBvbmVudFxuICAgICAqL1xuICAgIEBIb3N0QmluZGluZygnY2xhc3MuaWd4LXN3aXRjaC0tY2hlY2tlZCcpXG4gICAgQElucHV0KCkgcHVibGljIGNoZWNrZWQgPSBmYWxzZTtcbiAgICAvKipcbiAgICAgKiBTZXRzL2dldHMgdGhlIGBkaXNhYmxlZGAgYXR0cmlidXRlLlxuICAgICAqIERlZmF1bHQgdmFsdWUgaXMgYGZhbHNlYC5cbiAgICAgKiBgYGBodG1sXG4gICAgICogPGlneC1zd2l0Y2ggW2Rpc2FibGVkXSA9IFwidHJ1ZVwiPjxpZ3gtc3dpdGNoPlxuICAgICAqIGBgYFxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBsZXQgaXNEaXNhYmxlZCA9ICB0aGlzLnN3aXRjaC5kaXNhYmxlZDtcbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4U3dpdGNoQ29tcG9uZW50XG4gICAgICovXG4gICAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pZ3gtc3dpdGNoLS1kaXNhYmxlZCcpXG4gICAgQElucHV0KCkgcHVibGljIGRpc2FibGVkID0gZmFsc2U7XG4gICAgLyoqXG4gICAgICogU2V0cy9nZXRzIHdoZXRoZXIgdGhlIHN3aXRjaCBjb21wb25lbnQgaXMgb24gZm9jdXMuXG4gICAgICogRGVmYXVsdCB2YWx1ZSBpcyBgZmFsc2VgLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiB0aGlzLnN3aXRjaC5mb2N1c2VkID0gdHJ1ZTtcbiAgICAgKiBgYGBcbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogbGV0IGlzRm9jdXNlZCA9ICB0aGlzLnN3aXRjaC5mb2N1c2VkO1xuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hTd2l0Y2hDb21wb25lbnRcbiAgICAgKi9cbiAgICBASG9zdEJpbmRpbmcoJ2NsYXNzLmlneC1zd2l0Y2gtLWZvY3VzZWQnKVxuICAgIHB1YmxpYyBmb2N1c2VkID0gZmFsc2U7XG4gICAgLyoqXG4gICAgICpAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIGlucHV0SWQgPSBgJHt0aGlzLmlkfS1pbnB1dGA7XG4gICAgLyoqXG4gICAgICogVG9nZ2xlcyB0aGUgY2hlY2tlZCBzdGF0ZSBvZiB0aGUgc3dpdGNoLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiB0aGlzLnN3aXRjaC50b2dnbGUoKTtcbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4U3dpdGNoQ29tcG9uZW50XG4gICAgICovXG4gICAgcHVibGljIHRvZ2dsZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY2hlY2tlZCA9ICF0aGlzLmNoZWNrZWQ7XG4gICAgICAgIHRoaXMuZm9jdXNlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmNoYW5nZS5lbWl0KHsgY2hlY2tlZDogdGhpcy5jaGVja2VkLCBzd2l0Y2g6IHRoaXMgfSk7XG4gICAgICAgIHRoaXMuX29uQ2hhbmdlQ2FsbGJhY2sodGhpcy5jaGVja2VkKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICpAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIF9vblN3aXRjaENoYW5nZShldmVudCkge1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICpAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIF9vblN3aXRjaENsaWNrKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB0aGlzLnRvZ2dsZSgpO1xuXG4gICAgICAgIGlmIChpc0lFKCkpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlQ2hlY2tib3gubmF0aXZlRWxlbWVudC5ibHVyKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICpAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIF9vbkxhYmVsQ2xpY2soZXZlbnQpIHtcbiAgICAgICAgdGhpcy50b2dnbGUoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICpAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIG9uRm9jdXMoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5mb2N1c2VkID0gdHJ1ZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICpAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIG9uQmx1cihldmVudCkge1xuICAgICAgICB0aGlzLmZvY3VzZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fb25Ub3VjaGVkQ2FsbGJhY2soKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICpAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIHdyaXRlVmFsdWUodmFsdWUpIHtcbiAgICAgICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5jaGVja2VkID0gISF0aGlzLl92YWx1ZTtcbiAgICB9XG4gICAgLyoqIEBoaWRkZW4gKi9cbiAgICBnZXRFZGl0RWxlbWVudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubmF0aXZlQ2hlY2tib3gubmF0aXZlRWxlbWVudDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKkBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0IGxhYmVsQ2xhc3MoKTogc3RyaW5nIHtcbiAgICAgICAgc3dpdGNoICh0aGlzLmxhYmVsUG9zaXRpb24pIHtcbiAgICAgICAgICAgIGNhc2UgU3dpdGNoTGFiZWxQb3NpdGlvbi5CRUZPUkU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIGAke3RoaXMuY3NzQ2xhc3N9X19sYWJlbC0tYmVmb3JlYDtcbiAgICAgICAgICAgIGNhc2UgU3dpdGNoTGFiZWxQb3NpdGlvbi5BRlRFUjpcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIGAke3RoaXMuY3NzQ2xhc3N9X19sYWJlbGA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICpAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIHJlZ2lzdGVyT25DaGFuZ2UoZm46IChfOiBhbnkpID0+IHZvaWQpIHsgdGhpcy5fb25DaGFuZ2VDYWxsYmFjayA9IGZuOyB9XG4gICAgLyoqXG4gICAgICpAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB2b2lkKSB7IHRoaXMuX29uVG91Y2hlZENhbGxiYWNrID0gZm47IH1cbn1cblxuZXhwb3J0IGNvbnN0IElHWF9TV0lUQ0hfUkVRVUlSRURfVkFMSURBVE9SOiBQcm92aWRlciA9IHtcbiAgICBwcm92aWRlOiBOR19WQUxJREFUT1JTLFxuICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IElneFN3aXRjaFJlcXVpcmVkRGlyZWN0aXZlKSxcbiAgICBtdWx0aTogdHJ1ZVxufTtcblxuLyogdHNsaW50OmRpc2FibGUgZGlyZWN0aXZlLXNlbGVjdG9yICovXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogYGlneC1zd2l0Y2hbcmVxdWlyZWRdW2Zvcm1Db250cm9sTmFtZV0sXG4gICAgaWd4LXN3aXRjaFtyZXF1aXJlZF1bZm9ybUNvbnRyb2xdLFxuICAgIGlneC1zd2l0Y2hbcmVxdWlyZWRdW25nTW9kZWxdYCxcbiAgICBwcm92aWRlcnM6IFtJR1hfU1dJVENIX1JFUVVJUkVEX1ZBTElEQVRPUl1cbn0pXG5leHBvcnQgY2xhc3MgSWd4U3dpdGNoUmVxdWlyZWREaXJlY3RpdmUgZXh0ZW5kcyBDaGVja2JveFJlcXVpcmVkVmFsaWRhdG9yIHsgfVxuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuQE5nTW9kdWxlKHtcbiAgICBkZWNsYXJhdGlvbnM6IFtJZ3hTd2l0Y2hDb21wb25lbnQsIElneFN3aXRjaFJlcXVpcmVkRGlyZWN0aXZlXSxcbiAgICBleHBvcnRzOiBbSWd4U3dpdGNoQ29tcG9uZW50LCBJZ3hTd2l0Y2hSZXF1aXJlZERpcmVjdGl2ZV0sXG4gICAgaW1wb3J0czogW0lneFJpcHBsZU1vZHVsZV1cbn0pXG5leHBvcnQgY2xhc3MgSWd4U3dpdGNoTW9kdWxlIHsgfVxuIl19