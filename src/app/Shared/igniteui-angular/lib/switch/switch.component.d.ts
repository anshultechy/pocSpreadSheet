import { EventEmitter, Provider, ElementRef } from '@angular/core';
import { CheckboxRequiredValidator, ControlValueAccessor } from '@angular/forms';
import { EditorProvider } from '../core/edit-provider';
export declare enum SwitchLabelPosition {
    BEFORE = "before",
    AFTER = "after"
}
export interface IChangeSwitchEventArgs {
    checked: boolean;
    switch: IgxSwitchComponent;
}
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
export declare class IgxSwitchComponent implements ControlValueAccessor, EditorProvider {
    /**
     *@hidden
     */
    protected _value: any;
    /**
     * Returns reference to the native checkbox element.
     * ```typescript
     * let checkboxElement =  this.switch.nativeCheckbox;
     * ```
     * @memberof IgxSwitchComponent
     */
    nativeCheckbox: ElementRef;
    /**
     * Returns reference to the native label element.
     * ```typescript
     * let labelElement =  this.switch.nativeLabel;
     * ```
     * @memberof IgxSwitchComponent
     */
    nativeLabel: any;
    /**
     * Returns reference to the label placeholder element.
     * ```typescript
     * let labelPlaceholder =  this.switch.placeholderLabel;
     * ```
     * @memberof IgxSwitchComponent
     */
    placeholderLabel: any;
    /**
     * Sets/gets the `id` of the switch component.
     * If not set, the `id` of the first switch component will be `"igx-switch-0"`.
     * ```html
     * <igx-switch id="my-first-switch"></igx-switch>
     * ```
     * ```typescript
     * let switchId =  this.switch.id;
     * ```
     * @memberof IgxSwitchComponent
     */
    id: string;
    /**
     * Sets/gets the id of the `label` element in the switch component.
     * If not set, the label of the first switch component will have value `"igx-switch-0-label"`.
     * ```html
     * <igx-switch labelId="Label1"></igx-switch>
     * ```
     * ```typescript
     * let labelId =  this.switch.labelId;
     * ```
     * @memberof IgxSwitchComponent
     */
    labelId: string;
    /**
     * Sets/gets the `value` attribute of the switch component.
     * ```html
     * <igx-switch [value] = "switchValue"></igx-switch>
     * ```
     * ```typescript
     * let value =  this.switch.value;
     * ```
     * @memberof IgxSwitchComponent
     */
    value: any;
    /**
     * Sets/gets the `name` attribute of the switch component.
     * ```html
     * <igx-switch name = "Switch1"></igx-switch>
     * ```
     * ```typescript
     * let name =  this.switch.name;
     * ```
     * @memberof IgxSwitchComponent
     */
    name: string;
    /**
     * Sets/gets the value of the `tabindex` attribute.
     * ```html
     * <igx-switch [tabindex]="1"></igx-switch>
     * ```
     * ```typescript
     * let tabIndex =  this.switch.tabindex;
     * ```
     * @memberof IgxSwitchComponent
     */
    tabindex: number;
    /**
     * Sets/gets the position of the `label` in the switch component.
     * If not set, `labelPosition` will have value `"after"`.
     * ```html
     * <igx-switch labelPosition="before"></igx-switch>
     * ```
     * ```typescript
     * let labelPosition =  this.switch.labelPosition;
     * ```
     * @memberof IgxSwitchComponent
     */
    labelPosition: SwitchLabelPosition | string;
    /**
     * Enables/Disables the ripple effect
     * If not set, `disableRipple` will have value `false`.
     * ```html
     * <igx-switch [disableRipple]="true"></igx-switch>
     * ```
     * ```typescript
     * let isRippleDisabled = this.switch.disableRipple;
     * ```
     * @memberof IgxSwitchComponent
     */
    disableRipple: boolean;
    /**
     * Sets/gets whether switch is required.
     * If not set, `required` will have value `false`.
     * ```html
     * <igx-switch [required]="true"></igx-switch>
     * ```
     * ```typescript
     * let isRequired = this.switch.required;
     * ```
     * @memberof IgxSwitchComponent
     */
    required: boolean;
    /**
     * Sets/gets the `aria-labelledBy` attribute.
     * If not set, the  value of `aria-labelledBy` will be equal to the value of `labelId` attribute.
     * ```html
     * <igx-switch aria-labelledby = "Label1"></igx-switch>
     * ```
     * ```typescript
     * let ariaLabelledBy = this.switch.ariaLabelledBy;
     * ```
     * @memberof IgxSwitchComponent
     */
    ariaLabelledBy: string;
    /**
     * Sets/gets the value of the `aria-label` attribute.
     * ```html
     * <igx-switch aria-label="Label1"></igx-switch>
     * ```
     * ```typescript
     * let ariaLabel =  this.switch.ariaLabel;
     * ```
     * @memberof IgxSwitchComponent
     */
    ariaLabel: string | null;
    /**
     * An event that is emitted after the switch state is changed.
     * Provides references to the `IgxSwitchComponent` and the `checked` property as event arguments.
     * @memberof IgxSwitchComponent
     */
    readonly change: EventEmitter<IChangeSwitchEventArgs>;
    /**
     *@hidden
     * @memberof IgxSwitchComponent
     */
    private _onTouchedCallback;
    /**
     *@hidden
     * @memberof IgxSwitchComponent
     */
    private _onChangeCallback;
    /**
     * Returns the class of the switch component.
     * ```typescript
     * let switchClass = this.switch.cssClass;
     * ```
     * @memberof IgxSwitchComponent
     */
    cssClass: string;
    /**
     * Sets/gets whether the switch is on or off.
     * Default value is 'false'.
     * ```html
     *  <igx-switch [checked] = "true"></igx-switch>
     * ```
     * ```typescript
     * let isChecked =  this.switch.checked;
     * ```
     * @memberof IgxSwitchComponent
     */
    checked: boolean;
    /**
     * Sets/gets the `disabled` attribute.
     * Default value is `false`.
     * ```html
     * <igx-switch [disabled] = "true"><igx-switch>
     * ```
     * ```typescript
     * let isDisabled =  this.switch.disabled;
     * ```
     * @memberof IgxSwitchComponent
     */
    disabled: boolean;
    /**
     * Sets/gets whether the switch component is on focus.
     * Default value is `false`.
     * ```typescript
     * this.switch.focused = true;
     * ```
     * ```typescript
     * let isFocused =  this.switch.focused;
     * ```
     * @memberof IgxSwitchComponent
     */
    focused: boolean;
    /**
     *@hidden
     */
    inputId: string;
    /**
     * Toggles the checked state of the switch.
     * ```typescript
     * this.switch.toggle();
     * ```
     * @memberof IgxSwitchComponent
     */
    toggle(): void;
    /**
     *@hidden
     */
    _onSwitchChange(event: any): void;
    /**
     *@hidden
     */
    _onSwitchClick(event: any): void;
    /**
     *@hidden
     */
    _onLabelClick(event: any): void;
    /**
     *@hidden
     */
    onFocus(event: any): void;
    /**
     *@hidden
     */
    onBlur(event: any): void;
    /**
     *@hidden
     */
    writeValue(value: any): void;
    /** @hidden */
    getEditElement(): any;
    /**
     *@hidden
     */
    readonly labelClass: string;
    /**
     *@hidden
     */
    registerOnChange(fn: (_: any) => void): void;
    /**
     *@hidden
     */
    registerOnTouched(fn: () => void): void;
}
export declare const IGX_SWITCH_REQUIRED_VALIDATOR: Provider;
export declare class IgxSwitchRequiredDirective extends CheckboxRequiredValidator {
}
/**
 * @hidden
 */
export declare class IgxSwitchModule {
}