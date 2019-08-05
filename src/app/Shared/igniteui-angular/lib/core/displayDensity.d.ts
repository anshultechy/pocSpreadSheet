import { InjectionToken, EventEmitter, DoCheck, OnInit } from '@angular/core';
/**
 * Defines the posible values of the components' display density.
 */
export declare enum DisplayDensity {
    comfortable = "comfortable",
    cosy = "cosy",
    compact = "compact"
}
/**
 * Describes the object used to configure the DisplayDensity in Angular DI.
 */
export interface IDisplayDensityOptions {
    displayDensity: DisplayDensity;
}
export interface IDensityChangedEventArgs {
    oldDensity: DisplayDensity;
    newDensity: DisplayDensity;
}
/**
 * Defines the DisplayDensity DI token.
 */
export declare const DisplayDensityToken: InjectionToken<IDisplayDensityOptions>;
/**
 * Base class containing all logic required for implementing DisplayDensity.
 */
export declare class DisplayDensityBase implements DoCheck, OnInit {
    protected displayDensityOptions: IDisplayDensityOptions;
    protected _displayDensity: DisplayDensity;
    /**
    * @hidden
    */
    initialDensity: DisplayDensity;
    /**
     * Returns the theme of the component.
     * The default theme is `comfortable`.
     * Available options are `comfortable`, `cosy`, `compact`.
     * ```typescript
     * let componentTheme = this.component.displayDensity;
     * ```
     */
    /**
    * Sets the theme of the component.
    */
    displayDensity: DisplayDensity | string;
    onDensityChanged: EventEmitter<IDensityChangedEventArgs>;
    protected oldDisplayDensityOptions: IDisplayDensityOptions;
    constructor(displayDensityOptions: IDisplayDensityOptions);
    /**
     * @hidden
     */
    ngOnInit(): void;
    ngDoCheck(): void;
    /**
     * Given a style class of a component/element returns the modified version of it based
     * on the current display density.
     */
    protected getComponentDensityClass(baseStyleClass: string): string;
}