import { ElementRef, EventEmitter, OnInit, PipeTransform } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
export declare class IgxMaskDirective implements OnInit, ControlValueAccessor {
    private elementRef;
    /**
     * Sets the input mask.
     * ```html
     * <input [igxMask] = "'00/00/0000'">
     * ```
     * @memberof IgxMaskDirective
     */
    mask: string;
    /**
     * Sets the character representing a fillable spot in the input mask.
     * Default value is "'_'".
     * ```html
     * <input [promptChar] = "'/'">
     * ```
     * @memberof IgxMaskDirective
     */
    promptChar: string;
    /**
     * Specifies if the bound value includes the formatting symbols.
     * ```html
     * <input [includeLiterals] = "true">
     * ```
     * @memberof IgxMaskDirective
     */
    includeLiterals: boolean;
    /**
     * Specifies a placeholder.
     * ```html
     * <input placeholder = "enter text...">
     * ```
     * @memberof IgxMaskDirective
     */
    placeholder: string;
    /**
     * Specifies a pipe to be used on blur.
     * ```html
     * <input [displayValuePipe] = "displayFormatPipe">
     * ```
     * @memberof IgxMaskDirective
     */
    displayValuePipe: PipeTransform;
    /**
     * Specifies a pipe to be used on focus.
     * ```html
     * <input [focusedValuePipe] = "inputFormatPipe">
     * ```
     * @memberof IgxMaskDirective
     */
    focusedValuePipe: PipeTransform;
    /**
     *@hidden
     */
    private dataValue;
    /**
     * Emits an event each time the value changes.
     * Provides `rawValue: string` and `formattedValue: string` as event arguments.
     * ```html
     * <input (onValueChange) = "onValueChange(rawValue: string, formattedValue: string)">
     * ```
     */
    onValueChange: EventEmitter<IMaskEventArgs>;
    /**
     *@hidden
     */
    /**
    *@hidden
    */
    private value;
    /**
     *@hidden
     */
    private readonly nativeElement;
    /**
     *@hidden
     */
    private readonly selectionStart;
    /**
     *@hidden
     */
    private readonly selectionEnd;
    /**
     *@hidden
     */
    private _ctrlDown;
    /**
     *@hidden
     */
    private _paste;
    /**
     *@hidden
     */
    private _selection;
    /**
     *@hidden
     */
    private _placeholder;
    /**
     *@hidden
     */
    private _maskOptions;
    /**
     *@hidden
     */
    private _key;
    /**
     *@hidden
     */
    private _cursorOnPaste;
    /**
     *@hidden
     */
    private _valOnPaste;
    private _stopPropagation;
    /**
     *@hidden
     */
    private maskHelper;
    /**
     *@hidden
     */
    private _onTouchedCallback;
    /**
     *@hidden
     */
    private _onChangeCallback;
    constructor(elementRef: ElementRef);
    /**
     *@hidden
     */
    ngOnInit(): void;
    /**
     *@hidden
     */
    onKeydown(event: any): void;
    /**
     *@hidden
     */
    onKeyup(event: any): void;
    /**
     *@hidden
     */
    onPaste(event: any): void;
    /**
     *@hidden
     */
    onInputChanged(event: any): void;
    /**
     *@hidden
     */
    onFocus(value: any): void;
    /**
     *@hidden
     */
    onBlur(value: any): void;
    /**
     *@hidden
     */
    private getCursorPosition;
    /**
     *@hidden
     */
    private setCursorPosition;
    /**
     *@hidden
     */
    writeValue(value: any): void;
    /**
     *@hidden
     */
    registerOnChange(fn: (_: any) => void): void;
    /**
     *@hidden
     */
    registerOnTouched(fn: () => void): void;
}
/**
 * The IgxMaskModule provides the {@link IgxMaskDirective} inside your application.
 */
export interface IMaskEventArgs {
    rawValue: string;
    formattedValue: string;
}
/**
 * @hidden
 */
export declare class IgxMaskModule {
}
