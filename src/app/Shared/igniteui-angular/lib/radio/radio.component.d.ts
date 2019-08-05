import { EventEmitter, ElementRef } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { EditorProvider } from '../core/edit-provider';
export interface IChangeRadioEventArgs {
    value: any;
    radio: IgxRadioComponent;
}
export declare enum RadioLabelPosition {
    BEFORE = "before",
    AFTER = "after"
}
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
export declare class IgxRadioComponent implements ControlValueAccessor, EditorProvider {
    /**
     * Returns reference to native radio element.
     * ```typescript
     * let radioElement =  this.radio.nativeRadio;
     * ```
     * @memberof IgxSwitchComponent
     */
    nativeRadio: ElementRef;
    /**
     * Returns reference to native label element.
     * ```typescript
     * let labelElement =  this.radio.nativeLabel;
     * ```
     * @memberof IgxSwitchComponent
     */
    nativeLabel: any;
    /**
     * Returns reference to the label placeholder element.
     * ```typescript
     * let labelPlaceholder =  this.radio.placeholderLabel;
     * ```
     * @memberof IgxSwitchComponent
     */
    placeholderLabel: any;
    /**
     * Sets/gets the `id` of the radio component.
     * If not set, the `id` of the first radio component will be `"igx-radio-0"`.
     * ```html
     * <igx-radio id = "my-first-radio"></igx-radio>
     * ```
     * ```typescript
     * let radioId =  this.radio.id;
     * ```
     * @memberof IgxRadioComponent
     */
    id: string;
    /**
     * Sets/gets the id of the `label` element in the radio component.
     * If not set, the id of the `label` in the first radio component will be `"igx-radio-0-label"`.
     * ```html
     * <igx-radio labelId = "Label1"></igx-radio>
     * ```
     * ```typescript
     * let labelId =  this.radio.labelId;
     * ```
     * @memberof IgxRadioComponent
     */
    labelId: string;
    /**
     * Sets/gets the position of the `label` in the radio component.
     * If not set, `labelPosition` will have value `"after"`.
     * ```html
     * <igx-radio labelPosition = "before"></igx-radio>
     * ```
     * ```typescript
     * let labelPosition =  this.radio.labelPosition;
     * ```
     * @memberof IgxRadioComponent
     */
    labelPosition: RadioLabelPosition | string;
    /**
     * Sets/gets the `value` attribute.
     * ```html
     * <igx-radio [value] = "'radioButtonValue'"></igx-radio>
     * ```
     * ```typescript
     * let value =  this.radio.value;
     * ```
     * @memberof IgxRadioComponent
     */
    value: any;
    /**
     * Sets/gets the `name` attribute of the radio component.
     * ```html
     * <igx-radio name = "Radio1"></igx-radio>
     *  ```
     * ```typescript
     * let name =  this.radio.name;
     * ```
     * @memberof IgxRadioComponent
     */
    name: string;
    /**
     * Sets the value of the `tabindex` attribute.
     * ```html
     * <igx-radio [tabindex] = "1"></igx-radio>
     * ```
     * ```typescript
     * let tabIndex =  this.radio.tabindex;
     * ```
     * @memberof IgxRadioComponent
     */
    tabindex: number;
    /**
     * Enables/disables the ripple effect on the radio button..
     * If not set, the `disableRipple` will have value `false`.
     * ```html
     * <igx-radio [disableRipple] = "true"></igx-radio>
     * ```
     * ```typescript
     * let isDisabledRipple =  this.radio.disableRipple;
     * ```
     * @memberof IgxRadioComponent
     */
    disableRipple: boolean;
    /**
     * Sets/gets whether the radio button is required.
     * If not set, `required` will have value `false`.
     * ```html
     * <igx-radio [required] = "true"></igx-radio>
     * ```
     * ```typescript
     * let isRequired =  this.radio.required;
     * ```
     * @memberof IgxRadioComponent
     */
    required: boolean;
    /**
     * Sets/gets the `aria-labelledby` attribute of the radio component.
     * If not set, the `aria-labelledby` will be equal to the value of `labelId` attribute.
     * ```html
     * <igx-radio aria-labelledby = "Radio1"></igx-radio>
     * ```
     * ```typescript
     * let ariaLabelledBy = this.radio.ariaLabelledBy;
     * ```
     * @memberof IgxRadioComponent
     */
    ariaLabelledBy: string;
    /**
     * Sets/gets the `aria-label` attribute of the radio component.
     * ```html
     * <igx-radio aria-label = "Radio1"></igx-radio>
     * ```
     * ```typescript
     * let ariaLabel =  this.radio.ariaLabel;
     * ```
     * @memberof IgxRadioComponent
     */
    ariaLabel: string | null;
    /**
     * An event that is emitted after the radio `value` is changed.
     * Provides references to the `IgxRadioComponent` and the `value` property as event arguments.
     * @memberof IgxRadioComponent
     */
    readonly change: EventEmitter<IChangeRadioEventArgs>;
    /**
     * Returns the class of the radio component.
     * ```typescript
     * let radioClass = this.radio.cssClass;
     * ```
     * @memberof IgxRadioComponent
     */
    cssClass: string;
    /**
     * Sets/gets  the `checked` attribute.
     * Default value is `false`.
     * ```html
     * <igx-radio [checked] = "true"></igx-radio>
     * ```
     * ```typescript
     * let isChecked =  this.radio.checked;
     * ```
     * @memberof IgxRadioComponent
     */
    checked: boolean;
    /**
     * Sets/gets  the `disabled` attribute.
     * Default value is `false`.
     * ```html
     * <igx-radio [disabled] = "true"></igx-radio>
     * ```
     * ```typescript
     * let isDisabled =  this.radio.disabled;
     * ```
     * @memberof IgxRadioComponent
     */
    disabled: boolean;
    /**
     * Sets/gets whether the radio component is on focus.
     * Default value is `false`.
     * ```typescript
     * this.radio.focus = true;
     * ```
     * ```typescript
     * let isFocused =  this.radio.focused;
     * ```
     * @memberof IgxRadioComponent
     */
    focused: boolean;
    /**
     *@hidden
     */
    inputId: string;
    /**
     *@hidden
     */
    protected _value: any;
    constructor();
    /**
     *@hidden
     */
    private _onTouchedCallback;
    /**
     *@hidden
     */
    private _onChangeCallback;
    /**
     *@hidden
     */
    _onRadioChange(event: any): void;
    /**
     *@hidden
     */
    _onRadioClick(event: any): void;
    /**
     *@hidden
     */
    _onLabelClick(): void;
    /**
     * Selects the current radio button.
     * ```typescript
     * this.radio.select();
     * ```
     * @memberof IgxRadioComponent
     */
    select(): void;
    /**
     * Checks whether the provided value is consistent to the current radio button.
     * If it is, the checked attribute will have value `true`;
     * ```typescript
     * this.radio.writeValue('radioButtonValue');
     * ```
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
    onFocus(event: any): void;
    /**
     *@hidden
     */
    onBlur(event: any): void;
    /**
     *@hidden
     */
    registerOnChange(fn: (_: any) => void): void;
    /**
     *@hidden
     */
    registerOnTouched(fn: () => void): void;
}
