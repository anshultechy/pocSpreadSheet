import { ElementRef, ChangeDetectorRef, OnInit, EventEmitter } from '@angular/core';
import { IgxOverlayService } from '../../services/overlay/overlay';
import { OverlaySettings } from '../../services';
import { IgxNavigationService } from '../../core/navigation';
import { IgxToggleDirective, IgxToggleActionDirective } from '../toggle/toggle.directive';
export interface ITooltipShowEventArgs {
    target: IgxTooltipTargetDirective;
    tooltip: IgxTooltipDirective;
    cancel: boolean;
}
export interface ITooltipHideEventArgs {
    target: IgxTooltipTargetDirective;
    tooltip: IgxTooltipDirective;
    cancel: boolean;
}
/**
 * **Ignite UI for Angular Tooltip Target** -
 * [Documentation](https://www.infragistics.com/products/ignite-ui-angular/angular/components/tooltip.html)
 *
 * The Ignite UI for Angular Tooltip Target directive is used to mark an HTML element in the markup as one that has a tooltip.
 * The tooltip target is used in combination with the Ignite UI for Angular Tooltip by assigning the exported tooltip reference to the
 * target's selector property.
 *
 * Example:
 * ```html
 * <button [igxTooltipTarget]="tooltipRef">Hover me</button>
 * <span #tooltipRef="tooltip" igxTooltip>Hello there, I am a tooltip!</span>
 * ```
 */
export declare class IgxTooltipTargetDirective extends IgxToggleActionDirective implements OnInit {
    private _element;
    private _navigationService;
    /**
     * Gets/sets the amount of milliseconds that should pass before showing the tooltip.
     *
     * ```typescript
     * // get
     * let tooltipShowDelay = this.tooltipTarget.showDelay;
     * ```
     *
     * ```html
     * <!--set-->
     * <button [igxTooltipTarget]="tooltipRef" showDelay="1500">Hover me</button>
     * <span #tooltipRef="tooltip" igxTooltip>Hello there, I am a tooltip!</span>
     * ```
     */
    showDelay: number;
    /**
     * Gets/sets the amount of milliseconds that should pass before hiding the tooltip.
     *
     * ```typescript
     * // get
     * let tooltipHideDelay = this.tooltipTarget.hideDelay;
     * ```
     *
     * ```html
     * <!--set-->
     * <button [igxTooltipTarget]="tooltipRef" hideDelay="1500">Hover me</button>
     * <span #tooltipRef="tooltip" igxTooltip>Hello there, I am a tooltip!</span>
     * ```
     */
    hideDelay: number;
    /**
     * Specifies if the tooltip should not show when hovering its target with the mouse. (defaults to false)
     * While setting this property to 'true' will disable the user interactions that shows/hides the tooltip,
     * the developer will still be able to show/hide the tooltip through the API.
     *
     * ```typescript
     * // get
     * let tooltipDisabledValue = this.tooltipTarget.tooltipDisabled;
     * ```
     *
     * ```html
     * <!--set-->
     * <button [igxTooltipTarget]="tooltipRef" [tooltipDisabled]="true">Hover me</button>
     * <span #tooltipRef="tooltip" igxTooltip>Hello there, I am a tooltip!</span>
     * ```
     */
    tooltipDisabled: boolean;
    /**
     * @hidden
     */
    /**
    * @hidden
    */
    target: any;
    /**
     * Gets the respective native element of the directive.
     *
     * ```typescript
     * let tooltipTargetElement = this.tooltipTarget.nativeElement;
     * ```
     */
    readonly nativeElement: any;
    /**
     * Indicates if the tooltip that is is associated with this target is currently hidden.
     *
     * ```typescript
     * let tooltipHiddenValue = this.tooltipTarget.tooltipHidden;
     * ```
     */
    readonly tooltipHidden: boolean;
    /**
     * Emits an event when the tooltip that is associated with this target starts showing.
     * This event is fired before the start of the countdown to showing the tooltip.
     *
     * ```typescript
     * tooltipShowing(args: ITooltipShowEventArgs) {
     *    alert("Tooltip started showing!");
     * }
     * ```
     *
     * ```html
     * <button [igxTooltipTarget]="tooltipRef"
     *         (onTooltipShow)='tooltipShowing($event)'>Hover me</button>
     * <span #tooltipRef="tooltip" igxTooltip>Hello there, I am a tooltip!</span>
     * ```
     */
    onTooltipShow: EventEmitter<ITooltipShowEventArgs>;
    /**
     * Emits an event when the tooltip that is associated with this target starts hiding.
     * This event is fired before the start of the countdown to hiding the tooltip.
     *
     * ```typescript
     * tooltipHiding(args: ITooltipHideEventArgs) {
     *    alert("Tooltip started hiding!");
     * }
     * ```
     *
     * ```html
     * <button [igxTooltipTarget]="tooltipRef"
     *         (onTooltipHide)='tooltipHiding($event)'>Hover me</button>
     * <span #tooltipRef="tooltip" igxTooltip>Hello there, I am a tooltip!</span>
     * ```
     */
    onTooltipHide: EventEmitter<ITooltipHideEventArgs>;
    constructor(_element: ElementRef, _navigationService: IgxNavigationService);
    /**
     * @hidden
     */
    ngOnInit(): void;
    private checkOutletAndOutsideClick;
    private readonly mergedOverlaySettings;
    private preMouseEnterCheck;
    private preMouseLeaveCheck;
    /**
     * @hidden
     */
    onKeydownEscape(): void;
    /**
     * @hidden
     */
    onClick(): void;
    /**
     * @hidden
     */
    onMouseEnter(): void;
    /**
     * @hidden
     */
    onMouseLeave(): void;
    /**
     * @hidden
     */
    onTouchStart(event: any): void;
    /**
     * @hidden
     */
    onDocumentTouchStart(event: any): void;
    /**
     * Shows the tooltip by respecting the 'showDelay' property.
     *
     * ```typescript
     * this.tooltipTarget.showTooltip();
     * ```
     */
    showTooltip(): void;
    /**
     * Hides the tooltip by respecting the 'hideDelay' property.
     *
     * ```typescript
     * this.tooltipTarget.hideTooltip();
     * ```
     */
    hideTooltip(): void;
}
/**
 * **Ignite UI for Angular Tooltip** -
 * [Documentation](https://www.infragistics.com/products/ignite-ui-angular/angular/components/tooltip.html)
 *
 * The Ignite UI for Angular Tooltip directive is used to mark an HTML element in the markup as one that should behave as a tooltip.
 * The tooltip is used in combination with the Ignite UI for Angular Tooltip Target by assigning the exported tooltip reference to the
 * respective target's selector property.
 *
 * Example:
 * ```html
 * <button [igxTooltipTarget]="tooltipRef">Hover me</button>
 * <span #tooltipRef="tooltip" igxTooltip>Hello there, I am a tooltip!</span>
 * ```
 */
export declare class IgxTooltipDirective extends IgxToggleDirective {
    /**
     * @hidden
     */
    timeoutId: any;
    /**
     * @hidden
     * Returns whether close time out has started
     */
    toBeHidden: boolean;
    /**
     * @hidden
     * Returns whether open time out has started
     */
    toBeShown: boolean;
    /**
     * @hidden
     */
    readonly hiddenClass: boolean;
    /**
     * @hidden
     */
    readonly defaultClass: boolean;
    /**
     * Gets/sets any tooltip related data.
     * The 'context' can be used for storing any information that is necessary
     * to access when working with the tooltip.
     *
     * ```typescript
     * // get
     * let tooltipContext = this.tooltip.context;
     * ```
     *
     * ```typescript
     * // set
     * this.tooltip.context = "Tooltip's context";
     * ```
     */
    context: any;
    /**
     * Identifier for the tooltip.
     * If this is property is not explicitly set, it will be automatically generated.
     *
     * ```typescript
     * let tooltipId = this.tooltip.id;
     * ```
     */
    id: string;
    /**
     * Get the role attribute of the tooltip.
     *
     * ```typescript
     * let tooltipRole = this.tooltip.role;
     * ```
     */
    readonly role: string;
    /** @hidden */
    constructor(elementRef: ElementRef, cdr: ChangeDetectorRef, overlayService: IgxOverlayService, navigationService: IgxNavigationService);
    /**
     * If there is open animation in progress this method will finish is.
     * If there is no open animation in progress this method will open the toggle with no animation.
     * @param overlaySettings setting to use for opening the toggle
     */
    protected forceOpen(overlaySettings?: OverlaySettings): void;
    /**
     * If there is close animation in progress this method will finish is.
     * If there is no close animation in progress this method will close the toggle with no animation.
     * @param overlaySettings settings to use for closing the toggle
     */
    protected forceClose(overlaySettings?: OverlaySettings): void;
}
/**
 * @hidden
 */
export declare class IgxTooltipModule {
}
