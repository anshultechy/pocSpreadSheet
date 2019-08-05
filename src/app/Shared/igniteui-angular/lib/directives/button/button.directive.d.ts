import { ElementRef, EventEmitter, Renderer2 } from '@angular/core';
import { DisplayDensityBase, IDisplayDensityOptions } from '../../core/density';
export declare class IgxButtonDirective extends DisplayDensityBase {
    element: ElementRef;
    private _renderer;
    protected _displayDensityOptions: IDisplayDensityOptions;
    /**
     *@hidden
     */
    private _type;
    /**
     *@hidden
     */
    private _cssClass;
    /**
     *@hidden
     */
    private _color;
    /**
     *@hidden
     */
    private _label;
    /**
     *@hidden
     */
    private _backgroundColor;
    constructor(element: ElementRef, _renderer: Renderer2, _displayDensityOptions: IDisplayDensityOptions);
    /**
     * Returns the underlying DOM element
     */
    readonly nativeElement: any;
    /**
     * Called when the button is clicked
     */
    buttonClick: EventEmitter<any>;
    /**
     * Sets/gets the `role` attribute.
     * ```typescript
     * this.button.role = 'navbutton';
     * ```
     * ```typescript
     * let buttonRole =  this.button.role;
     * ```
     * @memberof IgxButtonDirective
     */
    role: string;
    /**
     * Sets the type of the button.
     * ```html
     * <button  igxButton= "icon"></button>
     * ```
     * @memberof IgxButtonDirective
     */
    type: string;
    /**
     * Sets the button text color.
     * ```html
     * <button igxButton="gradient" igxButtonColor="blue"></button>
     * ```
     * @memberof IgxButtonDirective
     */
    color: string;
    /**
     * Sets the background color of the button.
     * ```html
     * <button igxButton="raised" igxButtonBackground="red"></button>
     * ```
     * @memberof IgxButtonDirective
     */
    background: string;
    /**
     * Sets the `aria-label` attribute.
     * ```html
     * <button igxButton= "flat" igxLabel="Label"></button>
     * ```
     * @memberof IgxButtonDirective
     */
    label: string;
    /**
     * Enables/disables the button.
     *  ```html
     * <button igxButton= "fab" [disabled]="true"></button>
     * ```
     * @memberof IgxButtonDirective
     */
    disabled: any;
    /**
     * @hidden
     */
    readonly cssClassCosy: boolean;
    /**
     * @hidden
     */
    readonly cssClassCompact: boolean;
    /**
     * @hidden
     */
    readonly cssClassCosyFab: boolean;
    /**
     * @hidden
     */
    readonly cssClassCompactFab: boolean;
    /**
     * Gets or sets whether the button is selected.
     * Mainly used in the IgxButtonGroup component and it will have no effect if set separately.
     * ```html
     * <button igxButton="flat" [selected]="button.selected"></button>
     * ```
     * @memberof IgxButtonDirective
     */
    selected: boolean;
    /**
     *@hidden
     */
    onClick(ev: any): void;
}
/**
 * @hidden
 */
export declare class IgxButtonModule {
}