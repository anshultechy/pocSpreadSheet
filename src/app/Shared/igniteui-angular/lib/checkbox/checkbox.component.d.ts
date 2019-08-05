import { EventEmitter, Provider, ElementRef } from '@angular/core';
import { CheckboxRequiredValidator, ControlValueAccessor } from '@angular/forms';
import { EditorProvider } from '../core/edit-provider';
export declare enum LabelPosition {
    BEFORE = "before",
    AFTER = "after"
}
export interface IChangeCheckboxEventArgs {
    checked: boolean;
    checkbox: IgxCheckboxComponent;
}
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
export declare class IgxCheckboxComponent implements ControlValueAccessor, EditorProvider {
    /**
     *@hidden
     */
    protected _value: any;
    /**
     * Returns reference to the native checkbox element.
     * ```typescript
     * let checkboxElement =  this.checkbox.checkboxElement;
     * ```
     * @memberof IgxSwitchComponent
     */
    nativeCheckbox: ElementRef;
    /**
     * Returns reference to the native label element.
     * ```typescript
     * let labelElement =  this.checkbox.nativeLabel;
     * ```
     * @memberof IgxSwitchComponent
     */
    nativeLabel: any;
    /**
     * Returns reference to the label placeholder element.
     * ```typescript
     * let labelPlaceholder =  this.checkbox.placeholderLabel;
     * ```
     * @memberof IgxSwitchComponent
     */
    placeholderLabel: any;
    /**
     * Sets/gets the `id` of the checkbox component.
     * If not set, the `id` of the first checkbox component will be `"igx-checkbox-0"`.
     * ```html
     * <igx-checkbox id="my-first-checkbox"></igx-checkbox>
     * ```
     * ```typescript
     * let checkboxId =  this.checkbox.id;
     * ```
     * @memberof IgxCheckboxComponent
     */
    id: string;
    /**
     * Sets/gets the id of the `label` element.
     * If not set, the id of the `label` in the first checkbox component will be `"igx-checkbox-0-label"`.
     * ```html
     * <igx-checkbox labelId = "Label1"></igx-checkbox>
     * ```
     * ```typescript
     * let labelId =  this.checkbox.labelId;
     * ```
     * @memberof IgxCheckboxComponent
     */
    labelId: string;
    /**
     * Sets/gets the `value` attribute.
     * ```html
     * <igx-checkbox [value] = "'CheckboxValue'"></igx-checkbox>
     * ```
     * ```typescript
     * let value =  this.checkbox.value;
     * ```
     * @memberof IgxCheckboxComponent
     */
    value: any;
    /**
     * Sets/gets the `name` attribute.
     * ```html
     * <igx-checkbox name = "Checkbox1"></igx-checkbox>
     * ```
     * ```typescript
     * let name =  this.checkbox.name;
     * ```
     * @memberof IgxCheckboxComponent
     */
    name: string;
    /**
     * Sets/gets the value of the `tabindex` attribute.
     * ```html
     * <igx-checkbox [tabindex] = "1"></igx-checkbox>
     * ```
     * ```typescript
     * let tabIndex =  this.checkbox.tabindex;
     * ```
     * @memberof IgxCheckboxComponent
     */
    tabindex: number;
    /**
     *  Sets/gets the position of the `label`.
     *  If not set, the `labelPosition` will have value `"after"`.
     * ```html
     * <igx-checkbox labelPosition = "before"></igx-checkbox>
     * ```
     * ```typescript
     * let labelPosition =  this.checkbox.labelPosition;
     * ```
     * @memberof IgxCheckboxComponent
     */
    labelPosition: LabelPosition | string;
    /**
     * Enables/Disables the ripple effect.
     * If not set, `disableRipple` will have value `false`.
     * ```html
     * <igx-checkbox [disableRipple] = "true"></igx-checkbox>
     * ```
     * ```typescript
     * let isRippleDisabled = this.checkbox.desableRipple;
     * ```
     * @memberof IgxCheckboxComponent
     */
    disableRipple: boolean;
    /**
     * Sets/gets whether the checkbox is required.
     * If not set, `required` will have value `false`.
     * ```html
     * <igx-checkbox [required] = "true"></igx-checkbox>
     * ```
     * ```typescript
     * let isRequired =  this.checkbox.required;
     * ```
     * @memberof IgxCheckboxComponent
     */
    required: boolean;
    /**
     * Sets/gets the `aria-labelledby` attribute.
     * If not set, the `aria-labelledby` will be equal to the value of `labelId` attribute.
     * ```html
     * <igx-checkbox aria-labelledby = "Checkbox1"></igx-checkbox>
     * ```
     * ```typescript
     * let ariaLabelledBy =  this.checkbox.ariaLabelledBy;
     * ```
     * @memberof IgxCheckboxComponent
     */
    ariaLabelledBy: string;
    /**
     * Sets/gets the value of the `aria-label` attribute.
     * ```html
     * <igx-checkbox aria-label = "Checkbox1"></igx-checkbox>
     * ```
     * ```typescript
     * let ariaLabel = this.checkbox.aruaLabel;
     * ```
     * @memberof IgxCheckboxComponent
     */
    ariaLabel: string | null;
    /**
     * An event that is emitted after the checkbox state is changed.
     * Provides references to the `IgxCheckboxComponent` and the `checked` property as event arguments.
     * @memberof IgxCheckboxComponent
     */
    readonly change: EventEmitter<IChangeCheckboxEventArgs>;
    /**
     * Returns the class of the checkbox component.
     * ```typescript
     * let class =  this.checkbox.cssClass;
     * ```
     * @memberof IgxCheckboxComponent
     */
    cssClass: string;
    /**
     * Sets/gets whether the checkbox component is on focus.
     * Default value is `false`.
     * ```typescript
     * this.checkbox.focused =  true;
     * ```
     * ```typescript
     * let isFocused =  this.checkbox.focused;
     * ```
     * @memberof IgxCheckboxComponent
     */
    focused: boolean;
    /**
     * Sets/gets the checkbox indeterminate visual state.
     * Default value is `false`;
     * ```html
     * <igx-checkbox [indeterminate] = "true"></igx-checkbox>
     * ```
     * ```typescript
     * let isIndeterminate = this.checkbox.indeterminate;
     * ```
     * @memberof IgxCheckboxComponent
     */
    indeterminate: boolean;
    /**
     * Sets/gets whether the checkbox is checked.
     * Default value is `false`.
     * ```html
     * <igx-checkbox [checked] = "true"></igx-checkbox>
     * ```
     * ```typescript
     * let isChecked =  this.checkbox.checked;
     * ```
     * @memberof IgxCheckboxComponent
     */
    checked: boolean;
    /**
     * Sets/gets whether the checkbox is disabled.
     * Default value is `false`.
     * ```html
     * <igx-checkbox [disabled] = "true"></igx-checkbox>
     * ```
     * ```typescript
     * let isDesabled = this.checkbox.disabled;
     * ```
     * @memberof IgxCheckboxComponent
     */
    disabled: boolean;
    /**
     * Sets/gets whether the checkbox should disable all css transitions.
     * Default value is `false`.
     * ```html
     * <igx-checkbox [disableTransitions]="true"></igx-checkbox>
     * ```
     * ```typescript
     * let disableTransitions = this.checkbox.disableTransitions;
     * ```
     * @memberof IgxCheckboxComponent
     */
    disableTransitions: boolean;
    /**
     *@hidden
     */
    inputId: string;
    /**
     *@hidden
     */
    private _onTouchedCallback;
    /**
     * @hidden
     */
    private _onChangeCallback;
    /**
     * If `disabled` is `false`, switches the `checked` state.
     * ```typescript
     * this.checkbox.toggle();
     * ```
     * @memberof IgxCheckboxComponent
     */
    toggle(): void;
    /**
     *@hidden
     */
    _onCheckboxChange(event: any): void;
    /**
     *@hidden
     */
    _onCheckboxClick(event: any): void;
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
    /** @hidden */
    getEditElement(): any;
}
export declare const IGX_CHECKBOX_REQUIRED_VALIDATOR: Provider;
export declare class IgxCheckboxRequiredDirective extends CheckboxRequiredValidator {
}
/**
 * @hidden
 */
export declare class IgxCheckboxModule {
}
