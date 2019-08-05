/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, HostListener, Input, NgModule, ChangeDetectorRef, Output, EventEmitter, Optional, HostBinding, Inject } from '@angular/core';
import { useAnimation } from '@angular/animations';
import { scaleInCenter } from '../../animations/scale/index';
import { fadeOut } from '../../animations/fade/index';
import { IgxOverlayService } from '../../services/overlay/overlay';
import { HorizontalAlignment, AutoPositionStrategy } from '../../services';
import { CommonModule } from '@angular/common';
import { IgxNavigationService } from '../../core/navigation';
import { IgxToggleDirective, IgxToggleActionDirective } from '../toggle/toggle.directive';
/**
 * @record
 */
export function ITooltipShowEventArgs() { }
if (false) {
    /** @type {?} */
    ITooltipShowEventArgs.prototype.target;
    /** @type {?} */
    ITooltipShowEventArgs.prototype.tooltip;
    /** @type {?} */
    ITooltipShowEventArgs.prototype.cancel;
}
/**
 * @record
 */
export function ITooltipHideEventArgs() { }
if (false) {
    /** @type {?} */
    ITooltipHideEventArgs.prototype.target;
    /** @type {?} */
    ITooltipHideEventArgs.prototype.tooltip;
    /** @type {?} */
    ITooltipHideEventArgs.prototype.cancel;
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
export class IgxTooltipTargetDirective extends IgxToggleActionDirective {
    /**
     * @param {?} _element
     * @param {?} _navigationService
     */
    constructor(_element, _navigationService) {
        super(_element, _navigationService);
        this._element = _element;
        this._navigationService = _navigationService;
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
        this.showDelay = 500;
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
        this.hideDelay = 500;
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
        this.tooltipDisabled = false;
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
        this.onTooltipShow = new EventEmitter();
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
        this.onTooltipHide = new EventEmitter();
    }
    /**
     * @hidden
     * @param {?} target
     * @return {?}
     */
    set target(target) {
        if (target !== null && target !== '') {
            this._target = target;
        }
    }
    /**
     * @hidden
     * @return {?}
     */
    get target() {
        if (typeof this._target === 'string') {
            return this._navigationService.get(this._target);
        }
        return this._target;
    }
    /**
     * Gets the respective native element of the directive.
     *
     * ```typescript
     * let tooltipTargetElement = this.tooltipTarget.nativeElement;
     * ```
     * @return {?}
     */
    get nativeElement() {
        return this._element.nativeElement;
    }
    /**
     * Indicates if the tooltip that is is associated with this target is currently hidden.
     *
     * ```typescript
     * let tooltipHiddenValue = this.tooltipTarget.tooltipHidden;
     * ```
     * @return {?}
     */
    get tooltipHidden() {
        return !this.target || this.target.collapsed;
    }
    /**
     * @hidden
     * @return {?}
     */
    ngOnInit() {
        super.ngOnInit();
        /** @type {?} */
        const positionSettings = {
            target: this.nativeElement,
            horizontalDirection: HorizontalAlignment.Center,
            horizontalStartPoint: HorizontalAlignment.Center,
            openAnimation: useAnimation(scaleInCenter, { params: { duration: '150ms' } }),
            closeAnimation: useAnimation(fadeOut, { params: { duration: '75ms' } })
        };
        this._overlayDefaults.positionStrategy = new AutoPositionStrategy(positionSettings);
        this._overlayDefaults.closeOnOutsideClick = false;
    }
    /**
     * @private
     * @return {?}
     */
    checkOutletAndOutsideClick() {
        if (this.outlet) {
            this._overlayDefaults.outlet = this.outlet;
        }
    }
    /**
     * @private
     * @return {?}
     */
    get mergedOverlaySettings() {
        return Object.assign({}, this._overlayDefaults, this.overlaySettings);
    }
    // Return true if the execution in onMouseEnter should be terminated after this method
    /**
     * @private
     * @return {?}
     */
    preMouseEnterCheck() {
        // If tooltip is about to be opened
        if (this.target.toBeShown) {
            clearTimeout(this.target.timeoutId);
            this.target.toBeShown = false;
        }
        // If Tooltip is opened or about to be hidden
        if (!this.target.collapsed || this.target.toBeHidden) {
            clearTimeout(this.target.timeoutId);
            /** @type {?} */
            const hidingArgs = { target: this, tooltip: this.target, cancel: false };
            this.onTooltipHide.emit(hidingArgs);
            if (hidingArgs.cancel) {
                return true;
            }
            //  if close animation has started finish it, or close the tooltip with no animation
            this.target.forceClose(this.mergedOverlaySettings);
            this.target.toBeHidden = false;
        }
        return false;
    }
    // Return true if the execution in onMouseLeave should be terminated after this method
    /**
     * @private
     * @return {?}
     */
    preMouseLeaveCheck() {
        clearTimeout(this.target.timeoutId);
        // If tooltip is about to be opened
        if (this.target.toBeShown) {
            this.target.toBeShown = false;
            this.target.toBeHidden = false;
            return true;
        }
        return false;
    }
    /**
     * @hidden
     * @return {?}
     */
    onKeydownEscape() {
        /** @type {?} */
        const hidingArgs = { target: this, tooltip: this.target, cancel: false };
        this.onTooltipHide.emit(hidingArgs);
        if (hidingArgs.cancel) {
            return;
        }
        this.target.toBeHidden = true;
        this.target.close();
        this.target.toBeHidden = false;
    }
    /**
     * @hidden
     * @return {?}
     */
    onClick() {
        if (!this.target.collapsed) {
            /** @type {?} */
            const hidingArgs = { target: this, tooltip: this.target, cancel: false };
            this.onTooltipHide.emit(hidingArgs);
            if (hidingArgs.cancel) {
                return;
            }
            this.target.forceClose(this.mergedOverlaySettings);
        }
    }
    /**
     * @hidden
     * @return {?}
     */
    onMouseEnter() {
        if (this.tooltipDisabled) {
            return;
        }
        this.checkOutletAndOutsideClick();
        /** @type {?} */
        const shouldReturn = this.preMouseEnterCheck();
        if (shouldReturn) {
            return;
        }
        /** @type {?} */
        const showingArgs = { target: this, tooltip: this.target, cancel: false };
        this.onTooltipShow.emit(showingArgs);
        if (showingArgs.cancel) {
            return;
        }
        this.target.toBeShown = true;
        this.target.timeoutId = setTimeout(() => {
            this.target.open(this.mergedOverlaySettings); // Call open() of IgxTooltipDirective
            this.target.toBeShown = false;
        }, this.showDelay);
    }
    /**
     * @hidden
     * @return {?}
     */
    onMouseLeave() {
        if (this.tooltipDisabled) {
            return;
        }
        this.checkOutletAndOutsideClick();
        /** @type {?} */
        const shouldReturn = this.preMouseLeaveCheck();
        if (shouldReturn || this.target.collapsed) {
            return;
        }
        /** @type {?} */
        const hidingArgs = { target: this, tooltip: this.target, cancel: false };
        this.onTooltipHide.emit(hidingArgs);
        if (hidingArgs.cancel) {
            return;
        }
        this.target.toBeHidden = true;
        this.target.timeoutId = setTimeout(() => {
            this.target.close(); // Call close() of IgxTooltipDirective
            this.target.toBeHidden = false;
        }, this.hideDelay);
    }
    /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    onTouchStart(event) {
        if (this.tooltipDisabled) {
            return;
        }
        event.preventDefault();
        this.showTooltip();
    }
    /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    onDocumentTouchStart(event) {
        if (this.tooltipDisabled) {
            return;
        }
        if (this.nativeElement !== event.target &&
            !this.nativeElement.contains(event.target)) {
            this.hideTooltip();
        }
    }
    /**
     * Shows the tooltip by respecting the 'showDelay' property.
     *
     * ```typescript
     * this.tooltipTarget.showTooltip();
     * ```
     * @return {?}
     */
    showTooltip() {
        clearTimeout(this.target.timeoutId);
        if (!this.target.collapsed) {
            /** @type {?} */
            const hidingArgs = { target: this, tooltip: this.target, cancel: false };
            this.onTooltipHide.emit(hidingArgs);
            if (hidingArgs.cancel) {
                return;
            }
            //  if close animation has started finish it, or close the tooltip with no animation
            this.target.forceClose(this.mergedOverlaySettings);
            this.target.toBeHidden = false;
        }
        /** @type {?} */
        const showingArgs = { target: this, tooltip: this.target, cancel: false };
        this.onTooltipShow.emit(showingArgs);
        if (showingArgs.cancel) {
            return;
        }
        this.target.toBeShown = true;
        this.target.timeoutId = setTimeout(() => {
            this.target.open(this.mergedOverlaySettings); // Call open() of IgxTooltipDirective
            this.target.toBeShown = false;
        }, this.showDelay);
    }
    /**
     * Hides the tooltip by respecting the 'hideDelay' property.
     *
     * ```typescript
     * this.tooltipTarget.hideTooltip();
     * ```
     * @return {?}
     */
    hideTooltip() {
        if (this.target.collapsed && this.target.toBeShown) {
            clearTimeout(this.target.timeoutId);
        }
        if (this.target.collapsed || this.target.toBeHidden) {
            return;
        }
        /** @type {?} */
        const hidingArgs = { target: this, tooltip: this.target, cancel: false };
        this.onTooltipHide.emit(hidingArgs);
        if (hidingArgs.cancel) {
            return;
        }
        this.target.toBeHidden = true;
        this.target.timeoutId = setTimeout(() => {
            this.target.close(); // Call close() of IgxTooltipDirective
            this.target.toBeHidden = false;
        }, this.hideDelay);
    }
}
IgxTooltipTargetDirective.decorators = [
    { type: Directive, args: [{
                exportAs: 'tooltipTarget',
                selector: '[igxTooltipTarget]'
            },] }
];
/** @nocollapse */
IgxTooltipTargetDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: IgxNavigationService, decorators: [{ type: Optional }] }
];
IgxTooltipTargetDirective.propDecorators = {
    showDelay: [{ type: Input, args: ['showDelay',] }],
    hideDelay: [{ type: Input, args: ['hideDelay',] }],
    tooltipDisabled: [{ type: Input, args: ['tooltipDisabled',] }],
    target: [{ type: Input, args: ['igxTooltipTarget',] }],
    onTooltipShow: [{ type: Output }],
    onTooltipHide: [{ type: Output }],
    onKeydownEscape: [{ type: HostListener, args: ['document:keydown.escape', ['$event'],] }],
    onClick: [{ type: HostListener, args: ['click',] }],
    onMouseEnter: [{ type: HostListener, args: ['mouseenter',] }],
    onMouseLeave: [{ type: HostListener, args: ['mouseleave',] }],
    onTouchStart: [{ type: HostListener, args: ['touchstart', ['$event'],] }],
    onDocumentTouchStart: [{ type: HostListener, args: ['document:touchstart', ['$event'],] }]
};
if (false) {
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
     * @type {?}
     */
    IgxTooltipTargetDirective.prototype.showDelay;
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
     * @type {?}
     */
    IgxTooltipTargetDirective.prototype.hideDelay;
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
     * @type {?}
     */
    IgxTooltipTargetDirective.prototype.tooltipDisabled;
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
     * @type {?}
     */
    IgxTooltipTargetDirective.prototype.onTooltipShow;
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
     * @type {?}
     */
    IgxTooltipTargetDirective.prototype.onTooltipHide;
    /**
     * @type {?}
     * @private
     */
    IgxTooltipTargetDirective.prototype._element;
    /**
     * @type {?}
     * @private
     */
    IgxTooltipTargetDirective.prototype._navigationService;
}
/** @type {?} */
let NEXT_ID = 0;
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
export class IgxTooltipDirective extends IgxToggleDirective {
    /**
     * @hidden
     * @param {?} elementRef
     * @param {?} cdr
     * @param {?} overlayService
     * @param {?} navigationService
     */
    constructor(elementRef, cdr, overlayService, navigationService) {
        // D.P. constructor duplication due to es6 compilation, might be obsolete in the future
        super(elementRef, cdr, overlayService, navigationService);
        /**
         * @hidden
         * Returns whether close time out has started
         */
        this.toBeHidden = false;
        /**
         * @hidden
         * Returns whether open time out has started
         */
        this.toBeShown = false;
        /**
         * Identifier for the tooltip.
         * If this is property is not explicitly set, it will be automatically generated.
         *
         * ```typescript
         * let tooltipId = this.tooltip.id;
         * ```
         */
        this.id = `igx-tooltip-${NEXT_ID++}`;
    }
    /**
     * @hidden
     * @return {?}
     */
    get hiddenClass() {
        return this.collapsed;
    }
    /**
     * @hidden
     * @return {?}
     */
    get defaultClass() {
        return !this.collapsed;
    }
    /**
     * Get the role attribute of the tooltip.
     *
     * ```typescript
     * let tooltipRole = this.tooltip.role;
     * ```
     * @return {?}
     */
    get role() {
        return 'tooltip';
    }
    /**
     * If there is open animation in progress this method will finish is.
     * If there is no open animation in progress this method will open the toggle with no animation.
     * @protected
     * @param {?=} overlaySettings setting to use for opening the toggle
     * @return {?}
     */
    forceOpen(overlaySettings) {
        /** @type {?} */
        const info = this.overlayService.getOverlayById(this._overlayId);
        /** @type {?} */
        const hasOpenAnimation = info ? info.openAnimationPlayer : false;
        if (hasOpenAnimation) {
            info.openAnimationPlayer.finish();
            info.openAnimationPlayer.reset();
            info.openAnimationPlayer = null;
        }
        else if (this.collapsed) {
            /** @type {?} */
            const animation = overlaySettings.positionStrategy.settings.openAnimation;
            overlaySettings.positionStrategy.settings.openAnimation = null;
            this.open(overlaySettings);
            overlaySettings.positionStrategy.settings.openAnimation = animation;
        }
    }
    /**
     * If there is close animation in progress this method will finish is.
     * If there is no close animation in progress this method will close the toggle with no animation.
     * @protected
     * @param {?=} overlaySettings settings to use for closing the toggle
     * @return {?}
     */
    forceClose(overlaySettings) {
        /** @type {?} */
        const info = this.overlayService.getOverlayById(this._overlayId);
        /** @type {?} */
        const hasCloseAnimation = info ? info.closeAnimationPlayer : false;
        if (hasCloseAnimation) {
            info.closeAnimationPlayer.finish();
            info.closeAnimationPlayer.reset();
            info.closeAnimationPlayer = null;
        }
        else if (!this.collapsed) {
            /** @type {?} */
            const animation = overlaySettings.positionStrategy.settings.closeAnimation;
            overlaySettings.positionStrategy.settings.closeAnimation = null;
            this.close();
            overlaySettings.positionStrategy.settings.closeAnimation = animation;
        }
    }
}
IgxTooltipDirective.decorators = [
    { type: Directive, args: [{
                exportAs: 'tooltip',
                selector: '[igxTooltip]'
            },] }
];
/** @nocollapse */
IgxTooltipDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: IgxOverlayService, decorators: [{ type: Inject, args: [IgxOverlayService,] }] },
    { type: IgxNavigationService, decorators: [{ type: Optional }] }
];
IgxTooltipDirective.propDecorators = {
    hiddenClass: [{ type: HostBinding, args: ['class.igx-tooltip--hidden',] }],
    defaultClass: [{ type: HostBinding, args: ['class.igx-tooltip--desktop',] }],
    context: [{ type: Input, args: ['context',] }],
    id: [{ type: HostBinding, args: ['attr.id',] }, { type: Input }],
    role: [{ type: HostBinding, args: ['attr.role',] }]
};
if (false) {
    /**
     * @hidden
     * @type {?}
     */
    IgxTooltipDirective.prototype.timeoutId;
    /**
     * @hidden
     * Returns whether close time out has started
     * @type {?}
     */
    IgxTooltipDirective.prototype.toBeHidden;
    /**
     * @hidden
     * Returns whether open time out has started
     * @type {?}
     */
    IgxTooltipDirective.prototype.toBeShown;
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
     * @type {?}
     */
    IgxTooltipDirective.prototype.context;
    /**
     * Identifier for the tooltip.
     * If this is property is not explicitly set, it will be automatically generated.
     *
     * ```typescript
     * let tooltipId = this.tooltip.id;
     * ```
     * @type {?}
     */
    IgxTooltipDirective.prototype.id;
}
/**
 * @hidden
 */
export class IgxTooltipModule {
}
IgxTooltipModule.decorators = [
    { type: NgModule, args: [{
                declarations: [IgxTooltipDirective, IgxTooltipTargetDirective],
                exports: [IgxTooltipDirective, IgxTooltipTargetDirective],
                imports: [CommonModule],
                providers: [IgxOverlayService]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9pZ25pdGV1aS1hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL2RpcmVjdGl2ZXMvdG9vbHRpcC90b29sdGlwLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNILFNBQVMsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsaUJBQWlCLEVBQ3ZFLE1BQU0sRUFBRSxZQUFZLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBYSxNQUFNLEVBQ2pFLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDN0QsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3RELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ25FLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxvQkFBb0IsRUFBcUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUM5RyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDN0QsT0FBTyxFQUFFLGtCQUFrQixFQUFFLHdCQUF3QixFQUFFLE1BQU0sNEJBQTRCLENBQUM7Ozs7QUFHMUYsMkNBSUM7OztJQUhHLHVDQUFrQzs7SUFDbEMsd0NBQTZCOztJQUM3Qix1Q0FBZ0I7Ozs7O0FBRXBCLDJDQUlDOzs7SUFIRyx1Q0FBa0M7O0lBQ2xDLHdDQUE2Qjs7SUFDN0IsdUNBQWdCOzs7Ozs7Ozs7Ozs7Ozs7O0FBcUJwQixNQUFNLE9BQU8seUJBQTBCLFNBQVEsd0JBQXdCOzs7OztJQXNJbkUsWUFBb0IsUUFBb0IsRUFDaEIsa0JBQXdDO1FBQzVELEtBQUss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MUIsd0NBQXlCOzs7Ozs7Ozs7Ozs7Ozs7OztJQWlDekIsc0NBQ2U7Ozs7Ozs7Ozs7SUFVZixpQ0FFdUM7Ozs7O0FBMkUzQyxNQUFNLE9BQU8sZ0JBQWdCOzs7WUFONUIsUUFBUSxTQUFDO2dCQUNOLFlBQVksRUFBRSxDQUFDLG1CQUFtQixFQUFFLHlCQUF5QixDQUFDO2dCQUM5RCxPQUFPLEVBQUUsQ0FBQyxtQkFBbUIsRUFBRSx5QkFBeUIsQ0FBQztnQkFDekQsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO2dCQUN2QixTQUFTLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQzthQUNqQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICAgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBIb3N0TGlzdGVuZXIsIElucHV0LCBOZ01vZHVsZSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIE9uSW5pdCxcbiAgICBPdXRwdXQsIEV2ZW50RW1pdHRlciwgT3B0aW9uYWwsIEhvc3RCaW5kaW5nLCBPbkRlc3Ryb3ksIEluamVjdFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHVzZUFuaW1hdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHsgc2NhbGVJbkNlbnRlciB9IGZyb20gJy4uLy4uL2FuaW1hdGlvbnMvc2NhbGUvaW5kZXgnO1xuaW1wb3J0IHsgZmFkZU91dCB9IGZyb20gJy4uLy4uL2FuaW1hdGlvbnMvZmFkZS9pbmRleCc7XG5pbXBvcnQgeyBJZ3hPdmVybGF5U2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL292ZXJsYXkvb3ZlcmxheSc7XG5pbXBvcnQgeyBIb3Jpem9udGFsQWxpZ25tZW50LCBBdXRvUG9zaXRpb25TdHJhdGVneSwgUG9zaXRpb25TZXR0aW5ncywgT3ZlcmxheVNldHRpbmdzIH0gZnJvbSAnLi4vLi4vc2VydmljZXMnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IElneE5hdmlnYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vY29yZS9uYXZpZ2F0aW9uJztcbmltcG9ydCB7IElneFRvZ2dsZURpcmVjdGl2ZSwgSWd4VG9nZ2xlQWN0aW9uRGlyZWN0aXZlIH0gZnJvbSAnLi4vdG9nZ2xlL3RvZ2dsZS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRvb2x0aXBTaG93RXZlbnRBcmdzIHtcbiAgICB0YXJnZXQ6IElneFRvb2x0aXBUYXJnZXREaXJlY3RpdmU7XG4gICAgdG9vbHRpcDogSWd4VG9vbHRpcERpcmVjdGl2ZTtcbiAgICBjYW5jZWw6IGJvb2xlYW47XG59XG5leHBvcnQgaW50ZXJmYWNlIElUb29sdGlwSGlkZUV2ZW50QXJncyB7XG4gICAgdGFyZ2V0OiBJZ3hUb29sdGlwVGFyZ2V0RGlyZWN0aXZlO1xuICAgIHRvb2x0aXA6IElneFRvb2x0aXBEaXJlY3RpdmU7XG4gICAgY2FuY2VsOiBib29sZWFuO1xufVxuXG4vKipcbiAqICoqSWduaXRlIFVJIGZvciBBbmd1bGFyIFRvb2x0aXAgVGFyZ2V0KiogLVxuICogW0RvY3VtZW50YXRpb25dKGh0dHBzOi8vd3d3LmluZnJhZ2lzdGljcy5jb20vcHJvZHVjdHMvaWduaXRlLXVpLWFuZ3VsYXIvYW5ndWxhci9jb21wb25lbnRzL3Rvb2x0aXAuaHRtbClcbiAqXG4gKiBUaGUgSWduaXRlIFVJIGZvciBBbmd1bGFyIFRvb2x0aXAgVGFyZ2V0IGRpcmVjdGl2ZSBpcyB1c2VkIHRvIG1hcmsgYW4gSFRNTCBlbGVtZW50IGluIHRoZSBtYXJrdXAgYXMgb25lIHRoYXQgaGFzIGEgdG9vbHRpcC5cbiAqIFRoZSB0b29sdGlwIHRhcmdldCBpcyB1c2VkIGluIGNvbWJpbmF0aW9uIHdpdGggdGhlIElnbml0ZSBVSSBmb3IgQW5ndWxhciBUb29sdGlwIGJ5IGFzc2lnbmluZyB0aGUgZXhwb3J0ZWQgdG9vbHRpcCByZWZlcmVuY2UgdG8gdGhlXG4gKiB0YXJnZXQncyBzZWxlY3RvciBwcm9wZXJ0eS5cbiAqXG4gKiBFeGFtcGxlOlxuICogYGBgaHRtbFxuICogPGJ1dHRvbiBbaWd4VG9vbHRpcFRhcmdldF09XCJ0b29sdGlwUmVmXCI+SG92ZXIgbWU8L2J1dHRvbj5cbiAqIDxzcGFuICN0b29sdGlwUmVmPVwidG9vbHRpcFwiIGlneFRvb2x0aXA+SGVsbG8gdGhlcmUsIEkgYW0gYSB0b29sdGlwITwvc3Bhbj5cbiAqIGBgYFxuICovXG5ARGlyZWN0aXZlKHtcbiAgICBleHBvcnRBczogJ3Rvb2x0aXBUYXJnZXQnLFxuICAgIHNlbGVjdG9yOiAnW2lneFRvb2x0aXBUYXJnZXRdJ1xufSlcbmV4cG9ydCBjbGFzcyBJZ3hUb29sdGlwVGFyZ2V0RGlyZWN0aXZlIGV4dGVuZHMgSWd4VG9nZ2xlQWN0aW9uRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcbiAgICAvKipcbiAgICAgKiBHZXRzL3NldHMgdGhlIGFtb3VudCBvZiBtaWxsaXNlY29uZHMgdGhhdCBzaG91bGQgcGFzcyBiZWZvcmUgc2hvd2luZyB0aGUgdG9vbHRpcC5cbiAgICAgKlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiAvLyBnZXRcbiAgICAgKiBsZXQgdG9vbHRpcFNob3dEZWxheSA9IHRoaXMudG9vbHRpcFRhcmdldC5zaG93RGVsYXk7XG4gICAgICogYGBgXG4gICAgICpcbiAgICAgKiBgYGBodG1sXG4gICAgICogPCEtLXNldC0tPlxuICAgICAqIDxidXR0b24gW2lneFRvb2x0aXBUYXJnZXRdPVwidG9vbHRpcFJlZlwiIHNob3dEZWxheT1cIjE1MDBcIj5Ib3ZlciBtZTwvYnV0dG9uPlxuICAgICAqIDxzcGFuICN0b29sdGlwUmVmPVwidG9vbHRpcFwiIGlneFRvb2x0aXA+SGVsbG8gdGhlcmUsIEkgYW0gYSB0b29sdGlwITwvc3Bhbj5cbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBASW5wdXQoJ3Nob3dEZWxheScpXG4gICAgcHVibGljIHNob3dEZWxheSA9IDUwMDtcblxuICAgIC8qKlxuICAgICAqIEdldHMvc2V0cyB0aGUgYW1vdW50IG9mIG1pbGxpc2Vjb25kcyB0aGF0IHNob3VsZCBwYXNzIGJlZm9yZSBoaWRpbmcgdGhlIHRvb2x0aXAuXG4gICAgICpcbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogLy8gZ2V0XG4gICAgICogbGV0IHRvb2x0aXBIaWRlRGVsYXkgPSB0aGlzLnRvb2x0aXBUYXJnZXQuaGlkZURlbGF5O1xuICAgICAqIGBgYFxuICAgICAqXG4gICAgICogYGBgaHRtbFxuICAgICAqIDwhLS1zZXQtLT5cbiAgICAgKiA8YnV0dG9uIFtpZ3hUb29sdGlwVGFyZ2V0XT1cInRvb2x0aXBSZWZcIiBoaWRlRGVsYXk9XCIxNTAwXCI+SG92ZXIgbWU8L2J1dHRvbj5cbiAgICAgKiA8c3BhbiAjdG9vbHRpcFJlZj1cInRvb2x0aXBcIiBpZ3hUb29sdGlwPkhlbGxvIHRoZXJlLCBJIGFtIGEgdG9vbHRpcCE8L3NwYW4+XG4gICAgICogYGBgXG4gICAgICovXG4gICAgQElucHV0KCdoaWRlRGVsYXknKVxuICAgIHB1YmxpYyBoaWRlRGVsYXkgPSA1MDA7XG5cbiAgICAvKipcbiAgICAgKiBTcGVjaWZpZXMgaWYgdGhlIHRvb2x0aXAgc2hvdWxkIG5vdCBzaG93IHdoZW4gaG92ZXJpbmcgaXRzIHRhcmdldCB3aXRoIHRoZSBtb3VzZS4gKGRlZmF1bHRzIHRvIGZhbHNlKVxuICAgICAqIFdoaWxlIHNldHRpbmcgdGhpcyBwcm9wZXJ0eSB0byAndHJ1ZScgd2lsbCBkaXNhYmxlIHRoZSB1c2VyIGludGVyYWN0aW9ucyB0aGF0IHNob3dzL2hpZGVzIHRoZSB0b29sdGlwLFxuICAgICAqIHRoZSBkZXZlbG9wZXIgd2lsbCBzdGlsbCBiZSBhYmxlIHRvIHNob3cvaGlkZSB0aGUgdG9vbHRpcCB0aHJvdWdoIHRoZSBBUEkuXG4gICAgICpcbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogLy8gZ2V0XG4gICAgICogbGV0IHRvb2x0aXBEaXNhYmxlZFZhbHVlID0gdGhpcy50b29sdGlwVGFyZ2V0LnRvb2x0aXBEaXNhYmxlZDtcbiAgICAgKiBgYGBcbiAgICAgKlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8IS0tc2V0LS0+XG4gICAgICogPGJ1dHRvbiBbaWd4VG9vbHRpcFRhcmdldF09XCJ0b29sdGlwUmVmXCIgW3Rvb2x0aXBEaXNhYmxlZF09XCJ0cnVlXCI+SG92ZXIgbWU8L2J1dHRvbj5cbiAgICAgKiA8c3BhbiAjdG9vbHRpcFJlZj1cInRvb2x0aXBcIiBpZ3hUb29sdGlwPkhlbGxvIHRoZXJlLCBJIGFtIGEgdG9vbHRpcCE8L3NwYW4+XG4gICAgICogYGBgXG4gICAgICovXG4gICAgQElucHV0KCd0b29sdGlwRGlzYWJsZWQnKVxuICAgIHB1YmxpYyB0b29sdGlwRGlzYWJsZWQgPSBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBASW5wdXQoJ2lneFRvb2x0aXBUYXJnZXQnKVxuICAgIHNldCB0YXJnZXQodGFyZ2V0OiBhbnkpIHtcbiAgICAgICAgaWYgKHRhcmdldCAhPT0gbnVsbCAmJiB0YXJnZXQgIT09ICcnKSB7XG4gICAgICAgICAgICB0aGlzLl90YXJnZXQgPSB0YXJnZXQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgZ2V0IHRhcmdldCgpOiBhbnkge1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMuX3RhcmdldCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9uYXZpZ2F0aW9uU2VydmljZS5nZXQodGhpcy5fdGFyZ2V0KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fdGFyZ2V0O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIHJlc3BlY3RpdmUgbmF0aXZlIGVsZW1lbnQgb2YgdGhlIGRpcmVjdGl2ZS5cbiAgICAgKlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBsZXQgdG9vbHRpcFRhcmdldEVsZW1lbnQgPSB0aGlzLnRvb2x0aXBUYXJnZXQubmF0aXZlRWxlbWVudDtcbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0IG5hdGl2ZUVsZW1lbnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5kaWNhdGVzIGlmIHRoZSB0b29sdGlwIHRoYXQgaXMgaXMgYXNzb2NpYXRlZCB3aXRoIHRoaXMgdGFyZ2V0IGlzIGN1cnJlbnRseSBoaWRkZW4uXG4gICAgICpcbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogbGV0IHRvb2x0aXBIaWRkZW5WYWx1ZSA9IHRoaXMudG9vbHRpcFRhcmdldC50b29sdGlwSGlkZGVuO1xuICAgICAqIGBgYFxuICAgICAqL1xuICAgIHB1YmxpYyBnZXQgdG9vbHRpcEhpZGRlbigpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuICF0aGlzLnRhcmdldCB8fCB0aGlzLnRhcmdldC5jb2xsYXBzZWQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRW1pdHMgYW4gZXZlbnQgd2hlbiB0aGUgdG9vbHRpcCB0aGF0IGlzIGFzc29jaWF0ZWQgd2l0aCB0aGlzIHRhcmdldCBzdGFydHMgc2hvd2luZy5cbiAgICAgKiBUaGlzIGV2ZW50IGlzIGZpcmVkIGJlZm9yZSB0aGUgc3RhcnQgb2YgdGhlIGNvdW50ZG93biB0byBzaG93aW5nIHRoZSB0b29sdGlwLlxuICAgICAqXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIHRvb2x0aXBTaG93aW5nKGFyZ3M6IElUb29sdGlwU2hvd0V2ZW50QXJncykge1xuICAgICAqICAgIGFsZXJ0KFwiVG9vbHRpcCBzdGFydGVkIHNob3dpbmchXCIpO1xuICAgICAqIH1cbiAgICAgKiBgYGBcbiAgICAgKlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8YnV0dG9uIFtpZ3hUb29sdGlwVGFyZ2V0XT1cInRvb2x0aXBSZWZcIlxuICAgICAqICAgICAgICAgKG9uVG9vbHRpcFNob3cpPSd0b29sdGlwU2hvd2luZygkZXZlbnQpJz5Ib3ZlciBtZTwvYnV0dG9uPlxuICAgICAqIDxzcGFuICN0b29sdGlwUmVmPVwidG9vbHRpcFwiIGlneFRvb2x0aXA+SGVsbG8gdGhlcmUsIEkgYW0gYSB0b29sdGlwITwvc3Bhbj5cbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBAT3V0cHV0KClcbiAgICBwdWJsaWMgb25Ub29sdGlwU2hvdyA9IG5ldyBFdmVudEVtaXR0ZXI8SVRvb2x0aXBTaG93RXZlbnRBcmdzPigpO1xuXG4gICAgLyoqXG4gICAgICogRW1pdHMgYW4gZXZlbnQgd2hlbiB0aGUgdG9vbHRpcCB0aGF0IGlzIGFzc29jaWF0ZWQgd2l0aCB0aGlzIHRhcmdldCBzdGFydHMgaGlkaW5nLlxuICAgICAqIFRoaXMgZXZlbnQgaXMgZmlyZWQgYmVmb3JlIHRoZSBzdGFydCBvZiB0aGUgY291bnRkb3duIHRvIGhpZGluZyB0aGUgdG9vbHRpcC5cbiAgICAgKlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiB0b29sdGlwSGlkaW5nKGFyZ3M6IElUb29sdGlwSGlkZUV2ZW50QXJncykge1xuICAgICAqICAgIGFsZXJ0KFwiVG9vbHRpcCBzdGFydGVkIGhpZGluZyFcIik7XG4gICAgICogfVxuICAgICAqIGBgYFxuICAgICAqXG4gICAgICogYGBgaHRtbFxuICAgICAqIDxidXR0b24gW2lneFRvb2x0aXBUYXJnZXRdPVwidG9vbHRpcFJlZlwiXG4gICAgICogICAgICAgICAob25Ub29sdGlwSGlkZSk9J3Rvb2x0aXBIaWRpbmcoJGV2ZW50KSc+SG92ZXIgbWU8L2J1dHRvbj5cbiAgICAgKiA8c3BhbiAjdG9vbHRpcFJlZj1cInRvb2x0aXBcIiBpZ3hUb29sdGlwPkhlbGxvIHRoZXJlLCBJIGFtIGEgdG9vbHRpcCE8L3NwYW4+XG4gICAgICogYGBgXG4gICAgICovXG4gICAgQE91dHB1dCgpXG4gICAgcHVibGljIG9uVG9vbHRpcEhpZGUgPSBuZXcgRXZlbnRFbWl0dGVyPElUb29sdGlwSGlkZUV2ZW50QXJncz4oKTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2VsZW1lbnQ6IEVsZW1lbnRSZWYsXG4gICAgICAgIEBPcHRpb25hbCgpIHByaXZhdGUgX25hdmlnYXRpb25TZXJ2aWNlOiBJZ3hOYXZpZ2F0aW9uU2VydmljZSkge1xuICAgICAgICBzdXBlcihfZWxlbWVudCwgX25hdmlnYXRpb25TZXJ2aWNlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIG5nT25Jbml0KCkge1xuICAgICAgICBzdXBlci5uZ09uSW5pdCgpO1xuXG4gICAgICAgIGNvbnN0IHBvc2l0aW9uU2V0dGluZ3M6IFBvc2l0aW9uU2V0dGluZ3MgPSB7XG4gICAgICAgICAgICB0YXJnZXQ6IHRoaXMubmF0aXZlRWxlbWVudCxcbiAgICAgICAgICAgIGhvcml6b250YWxEaXJlY3Rpb246IEhvcml6b250YWxBbGlnbm1lbnQuQ2VudGVyLFxuICAgICAgICAgICAgaG9yaXpvbnRhbFN0YXJ0UG9pbnQ6IEhvcml6b250YWxBbGlnbm1lbnQuQ2VudGVyLFxuICAgICAgICAgICAgb3BlbkFuaW1hdGlvbjogdXNlQW5pbWF0aW9uKHNjYWxlSW5DZW50ZXIsIHsgcGFyYW1zOiB7IGR1cmF0aW9uOiAnMTUwbXMnIH0gfSksXG4gICAgICAgICAgICBjbG9zZUFuaW1hdGlvbjogdXNlQW5pbWF0aW9uKGZhZGVPdXQsIHsgcGFyYW1zOiB7IGR1cmF0aW9uOiAnNzVtcycgfSB9KVxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuX292ZXJsYXlEZWZhdWx0cy5wb3NpdGlvblN0cmF0ZWd5ID0gbmV3IEF1dG9Qb3NpdGlvblN0cmF0ZWd5KHBvc2l0aW9uU2V0dGluZ3MpO1xuICAgICAgICB0aGlzLl9vdmVybGF5RGVmYXVsdHMuY2xvc2VPbk91dHNpZGVDbGljayA9IGZhbHNlO1xuICAgIH1cblxuICAgIHByaXZhdGUgY2hlY2tPdXRsZXRBbmRPdXRzaWRlQ2xpY2soKSB7XG4gICAgICAgIGlmICh0aGlzLm91dGxldCkge1xuICAgICAgICAgICAgdGhpcy5fb3ZlcmxheURlZmF1bHRzLm91dGxldCA9IHRoaXMub3V0bGV0O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXQgbWVyZ2VkT3ZlcmxheVNldHRpbmdzKCkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5fb3ZlcmxheURlZmF1bHRzLCB0aGlzLm92ZXJsYXlTZXR0aW5ncyk7XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIHRydWUgaWYgdGhlIGV4ZWN1dGlvbiBpbiBvbk1vdXNlRW50ZXIgc2hvdWxkIGJlIHRlcm1pbmF0ZWQgYWZ0ZXIgdGhpcyBtZXRob2RcbiAgICBwcml2YXRlIHByZU1vdXNlRW50ZXJDaGVjaygpIHtcbiAgICAgICAgLy8gSWYgdG9vbHRpcCBpcyBhYm91dCB0byBiZSBvcGVuZWRcbiAgICAgICAgaWYgKHRoaXMudGFyZ2V0LnRvQmVTaG93bikge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGFyZ2V0LnRpbWVvdXRJZCk7XG4gICAgICAgICAgICB0aGlzLnRhcmdldC50b0JlU2hvd24gPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIFRvb2x0aXAgaXMgb3BlbmVkIG9yIGFib3V0IHRvIGJlIGhpZGRlblxuICAgICAgICBpZiAoIXRoaXMudGFyZ2V0LmNvbGxhcHNlZCB8fCB0aGlzLnRhcmdldC50b0JlSGlkZGVuKSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy50YXJnZXQudGltZW91dElkKTtcblxuICAgICAgICAgICAgY29uc3QgaGlkaW5nQXJncyA9IHsgdGFyZ2V0OiB0aGlzLCB0b29sdGlwOiB0aGlzLnRhcmdldCwgY2FuY2VsOiBmYWxzZSB9O1xuICAgICAgICAgICAgdGhpcy5vblRvb2x0aXBIaWRlLmVtaXQoaGlkaW5nQXJncyk7XG5cbiAgICAgICAgICAgIGlmIChoaWRpbmdBcmdzLmNhbmNlbCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyAgaWYgY2xvc2UgYW5pbWF0aW9uIGhhcyBzdGFydGVkIGZpbmlzaCBpdCwgb3IgY2xvc2UgdGhlIHRvb2x0aXAgd2l0aCBubyBhbmltYXRpb25cbiAgICAgICAgICAgIHRoaXMudGFyZ2V0LmZvcmNlQ2xvc2UodGhpcy5tZXJnZWRPdmVybGF5U2V0dGluZ3MpO1xuICAgICAgICAgICAgdGhpcy50YXJnZXQudG9CZUhpZGRlbiA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8vIFJldHVybiB0cnVlIGlmIHRoZSBleGVjdXRpb24gaW4gb25Nb3VzZUxlYXZlIHNob3VsZCBiZSB0ZXJtaW5hdGVkIGFmdGVyIHRoaXMgbWV0aG9kXG4gICAgcHJpdmF0ZSBwcmVNb3VzZUxlYXZlQ2hlY2soKTogYm9vbGVhbiB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRhcmdldC50aW1lb3V0SWQpO1xuXG4gICAgICAgIC8vIElmIHRvb2x0aXAgaXMgYWJvdXQgdG8gYmUgb3BlbmVkXG4gICAgICAgIGlmICh0aGlzLnRhcmdldC50b0JlU2hvd24pIHtcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0LnRvQmVTaG93biA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy50YXJnZXQudG9CZUhpZGRlbiA9IGZhbHNlO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIEBIb3N0TGlzdGVuZXIoJ2RvY3VtZW50OmtleWRvd24uZXNjYXBlJywgWyckZXZlbnQnXSlcbiAgICBwdWJsaWMgb25LZXlkb3duRXNjYXBlKCkge1xuICAgICAgICBjb25zdCBoaWRpbmdBcmdzID0geyB0YXJnZXQ6IHRoaXMsIHRvb2x0aXA6IHRoaXMudGFyZ2V0LCBjYW5jZWw6IGZhbHNlIH07XG4gICAgICAgIHRoaXMub25Ub29sdGlwSGlkZS5lbWl0KGhpZGluZ0FyZ3MpO1xuXG4gICAgICAgIGlmIChoaWRpbmdBcmdzLmNhbmNlbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy50YXJnZXQudG9CZUhpZGRlbiA9IHRydWU7XG4gICAgICAgIHRoaXMudGFyZ2V0LmNsb3NlKCk7XG4gICAgICAgIHRoaXMudGFyZ2V0LnRvQmVIaWRkZW4gPSBmYWxzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgQEhvc3RMaXN0ZW5lcignY2xpY2snKVxuICAgIHB1YmxpYyBvbkNsaWNrKCkge1xuICAgICAgICBpZiAoIXRoaXMudGFyZ2V0LmNvbGxhcHNlZCkge1xuICAgICAgICAgICAgY29uc3QgaGlkaW5nQXJncyA9IHsgdGFyZ2V0OiB0aGlzLCB0b29sdGlwOiB0aGlzLnRhcmdldCwgY2FuY2VsOiBmYWxzZSB9O1xuICAgICAgICAgICAgdGhpcy5vblRvb2x0aXBIaWRlLmVtaXQoaGlkaW5nQXJncyk7XG5cbiAgICAgICAgICAgIGlmIChoaWRpbmdBcmdzLmNhbmNlbCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy50YXJnZXQuZm9yY2VDbG9zZSh0aGlzLm1lcmdlZE92ZXJsYXlTZXR0aW5ncyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgQEhvc3RMaXN0ZW5lcignbW91c2VlbnRlcicpXG4gICAgcHVibGljIG9uTW91c2VFbnRlcigpIHtcbiAgICAgICAgaWYgKHRoaXMudG9vbHRpcERpc2FibGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNoZWNrT3V0bGV0QW5kT3V0c2lkZUNsaWNrKCk7XG4gICAgICAgIGNvbnN0IHNob3VsZFJldHVybiA9IHRoaXMucHJlTW91c2VFbnRlckNoZWNrKCk7XG4gICAgICAgIGlmIChzaG91bGRSZXR1cm4pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHNob3dpbmdBcmdzID0geyB0YXJnZXQ6IHRoaXMsIHRvb2x0aXA6IHRoaXMudGFyZ2V0LCBjYW5jZWw6IGZhbHNlIH07XG4gICAgICAgIHRoaXMub25Ub29sdGlwU2hvdy5lbWl0KHNob3dpbmdBcmdzKTtcblxuICAgICAgICBpZiAoc2hvd2luZ0FyZ3MuY2FuY2VsKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnRhcmdldC50b0JlU2hvd24gPSB0cnVlO1xuICAgICAgICB0aGlzLnRhcmdldC50aW1lb3V0SWQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0Lm9wZW4odGhpcy5tZXJnZWRPdmVybGF5U2V0dGluZ3MpOyAvLyBDYWxsIG9wZW4oKSBvZiBJZ3hUb29sdGlwRGlyZWN0aXZlXG4gICAgICAgICAgICB0aGlzLnRhcmdldC50b0JlU2hvd24gPSBmYWxzZTtcbiAgICAgICAgfSwgdGhpcy5zaG93RGVsYXkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBASG9zdExpc3RlbmVyKCdtb3VzZWxlYXZlJylcbiAgICBwdWJsaWMgb25Nb3VzZUxlYXZlKCkge1xuICAgICAgICBpZiAodGhpcy50b29sdGlwRGlzYWJsZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY2hlY2tPdXRsZXRBbmRPdXRzaWRlQ2xpY2soKTtcbiAgICAgICAgY29uc3Qgc2hvdWxkUmV0dXJuID0gdGhpcy5wcmVNb3VzZUxlYXZlQ2hlY2soKTtcbiAgICAgICAgaWYgKHNob3VsZFJldHVybiB8fCB0aGlzLnRhcmdldC5jb2xsYXBzZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGhpZGluZ0FyZ3MgPSB7IHRhcmdldDogdGhpcywgdG9vbHRpcDogdGhpcy50YXJnZXQsIGNhbmNlbDogZmFsc2UgfTtcbiAgICAgICAgdGhpcy5vblRvb2x0aXBIaWRlLmVtaXQoaGlkaW5nQXJncyk7XG5cbiAgICAgICAgaWYgKGhpZGluZ0FyZ3MuY2FuY2VsKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnRhcmdldC50b0JlSGlkZGVuID0gdHJ1ZTtcbiAgICAgICAgdGhpcy50YXJnZXQudGltZW91dElkID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnRhcmdldC5jbG9zZSgpOyAvLyBDYWxsIGNsb3NlKCkgb2YgSWd4VG9vbHRpcERpcmVjdGl2ZVxuICAgICAgICAgICAgdGhpcy50YXJnZXQudG9CZUhpZGRlbiA9IGZhbHNlO1xuICAgICAgICB9LCB0aGlzLmhpZGVEZWxheSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIEBIb3N0TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBbJyRldmVudCddKVxuICAgIHB1YmxpYyBvblRvdWNoU3RhcnQoZXZlbnQpIHtcbiAgICAgICAgaWYgKHRoaXMudG9vbHRpcERpc2FibGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLnNob3dUb29sdGlwKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIEBIb3N0TGlzdGVuZXIoJ2RvY3VtZW50OnRvdWNoc3RhcnQnLCBbJyRldmVudCddKVxuICAgIHB1YmxpYyBvbkRvY3VtZW50VG91Y2hTdGFydChldmVudCkge1xuICAgICAgICBpZiAodGhpcy50b29sdGlwRGlzYWJsZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQgIT09IGV2ZW50LnRhcmdldCAmJlxuICAgICAgICAgICAgIXRoaXMubmF0aXZlRWxlbWVudC5jb250YWlucyhldmVudC50YXJnZXQpXG4gICAgICAgICkge1xuICAgICAgICAgICAgdGhpcy5oaWRlVG9vbHRpcCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2hvd3MgdGhlIHRvb2x0aXAgYnkgcmVzcGVjdGluZyB0aGUgJ3Nob3dEZWxheScgcHJvcGVydHkuXG4gICAgICpcbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogdGhpcy50b29sdGlwVGFyZ2V0LnNob3dUb29sdGlwKCk7XG4gICAgICogYGBgXG4gICAgICovXG4gICAgcHVibGljIHNob3dUb29sdGlwKCkge1xuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy50YXJnZXQudGltZW91dElkKTtcblxuICAgICAgICBpZiAoIXRoaXMudGFyZ2V0LmNvbGxhcHNlZCkge1xuICAgICAgICAgICAgY29uc3QgaGlkaW5nQXJncyA9IHsgdGFyZ2V0OiB0aGlzLCB0b29sdGlwOiB0aGlzLnRhcmdldCwgY2FuY2VsOiBmYWxzZSB9O1xuICAgICAgICAgICAgdGhpcy5vblRvb2x0aXBIaWRlLmVtaXQoaGlkaW5nQXJncyk7XG5cbiAgICAgICAgICAgIGlmIChoaWRpbmdBcmdzLmNhbmNlbCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vICBpZiBjbG9zZSBhbmltYXRpb24gaGFzIHN0YXJ0ZWQgZmluaXNoIGl0LCBvciBjbG9zZSB0aGUgdG9vbHRpcCB3aXRoIG5vIGFuaW1hdGlvblxuICAgICAgICAgICAgdGhpcy50YXJnZXQuZm9yY2VDbG9zZSh0aGlzLm1lcmdlZE92ZXJsYXlTZXR0aW5ncyk7XG4gICAgICAgICAgICB0aGlzLnRhcmdldC50b0JlSGlkZGVuID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBzaG93aW5nQXJncyA9IHsgdGFyZ2V0OiB0aGlzLCB0b29sdGlwOiB0aGlzLnRhcmdldCwgY2FuY2VsOiBmYWxzZSB9O1xuICAgICAgICB0aGlzLm9uVG9vbHRpcFNob3cuZW1pdChzaG93aW5nQXJncyk7XG5cbiAgICAgICAgaWYgKHNob3dpbmdBcmdzLmNhbmNlbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy50YXJnZXQudG9CZVNob3duID0gdHJ1ZTtcbiAgICAgICAgdGhpcy50YXJnZXQudGltZW91dElkID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnRhcmdldC5vcGVuKHRoaXMubWVyZ2VkT3ZlcmxheVNldHRpbmdzKTsgLy8gQ2FsbCBvcGVuKCkgb2YgSWd4VG9vbHRpcERpcmVjdGl2ZVxuICAgICAgICAgICAgdGhpcy50YXJnZXQudG9CZVNob3duID0gZmFsc2U7XG4gICAgICAgIH0sIHRoaXMuc2hvd0RlbGF5KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIaWRlcyB0aGUgdG9vbHRpcCBieSByZXNwZWN0aW5nIHRoZSAnaGlkZURlbGF5JyBwcm9wZXJ0eS5cbiAgICAgKlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiB0aGlzLnRvb2x0aXBUYXJnZXQuaGlkZVRvb2x0aXAoKTtcbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBwdWJsaWMgaGlkZVRvb2x0aXAoKSB7XG4gICAgICAgIGlmICh0aGlzLnRhcmdldC5jb2xsYXBzZWQgJiYgdGhpcy50YXJnZXQudG9CZVNob3duKSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy50YXJnZXQudGltZW91dElkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnRhcmdldC5jb2xsYXBzZWQgfHwgdGhpcy50YXJnZXQudG9CZUhpZGRlbikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgaGlkaW5nQXJncyA9IHsgdGFyZ2V0OiB0aGlzLCB0b29sdGlwOiB0aGlzLnRhcmdldCwgY2FuY2VsOiBmYWxzZSB9O1xuICAgICAgICB0aGlzLm9uVG9vbHRpcEhpZGUuZW1pdChoaWRpbmdBcmdzKTtcblxuICAgICAgICBpZiAoaGlkaW5nQXJncy5jYW5jZWwpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudGFyZ2V0LnRvQmVIaWRkZW4gPSB0cnVlO1xuICAgICAgICB0aGlzLnRhcmdldC50aW1lb3V0SWQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0LmNsb3NlKCk7IC8vIENhbGwgY2xvc2UoKSBvZiBJZ3hUb29sdGlwRGlyZWN0aXZlXG4gICAgICAgICAgICB0aGlzLnRhcmdldC50b0JlSGlkZGVuID0gZmFsc2U7XG4gICAgICAgIH0sIHRoaXMuaGlkZURlbGF5KTtcbiAgICB9XG59XG5cbmxldCBORVhUX0lEID0gMDtcbi8qKlxuICogKipJZ25pdGUgVUkgZm9yIEFuZ3VsYXIgVG9vbHRpcCoqIC1cbiAqIFtEb2N1bWVudGF0aW9uXShodHRwczovL3d3dy5pbmZyYWdpc3RpY3MuY29tL3Byb2R1Y3RzL2lnbml0ZS11aS1hbmd1bGFyL2FuZ3VsYXIvY29tcG9uZW50cy90b29sdGlwLmh0bWwpXG4gKlxuICogVGhlIElnbml0ZSBVSSBmb3IgQW5ndWxhciBUb29sdGlwIGRpcmVjdGl2ZSBpcyB1c2VkIHRvIG1hcmsgYW4gSFRNTCBlbGVtZW50IGluIHRoZSBtYXJrdXAgYXMgb25lIHRoYXQgc2hvdWxkIGJlaGF2ZSBhcyBhIHRvb2x0aXAuXG4gKiBUaGUgdG9vbHRpcCBpcyB1c2VkIGluIGNvbWJpbmF0aW9uIHdpdGggdGhlIElnbml0ZSBVSSBmb3IgQW5ndWxhciBUb29sdGlwIFRhcmdldCBieSBhc3NpZ25pbmcgdGhlIGV4cG9ydGVkIHRvb2x0aXAgcmVmZXJlbmNlIHRvIHRoZVxuICogcmVzcGVjdGl2ZSB0YXJnZXQncyBzZWxlY3RvciBwcm9wZXJ0eS5cbiAqXG4gKiBFeGFtcGxlOlxuICogYGBgaHRtbFxuICogPGJ1dHRvbiBbaWd4VG9vbHRpcFRhcmdldF09XCJ0b29sdGlwUmVmXCI+SG92ZXIgbWU8L2J1dHRvbj5cbiAqIDxzcGFuICN0b29sdGlwUmVmPVwidG9vbHRpcFwiIGlneFRvb2x0aXA+SGVsbG8gdGhlcmUsIEkgYW0gYSB0b29sdGlwITwvc3Bhbj5cbiAqIGBgYFxuICovXG5ARGlyZWN0aXZlKHtcbiAgICBleHBvcnRBczogJ3Rvb2x0aXAnLFxuICAgIHNlbGVjdG9yOiAnW2lneFRvb2x0aXBdJ1xufSlcbmV4cG9ydCBjbGFzcyBJZ3hUb29sdGlwRGlyZWN0aXZlIGV4dGVuZHMgSWd4VG9nZ2xlRGlyZWN0aXZlIHtcblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgdGltZW91dElkO1xuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqIFJldHVybnMgd2hldGhlciBjbG9zZSB0aW1lIG91dCBoYXMgc3RhcnRlZFxuICAgICAqL1xuICAgIHB1YmxpYyB0b0JlSGlkZGVuID0gZmFsc2U7XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICogUmV0dXJucyB3aGV0aGVyIG9wZW4gdGltZSBvdXQgaGFzIHN0YXJ0ZWRcbiAgICAgKi9cbiAgICBwdWJsaWMgdG9CZVNob3duID0gZmFsc2U7XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pZ3gtdG9vbHRpcC0taGlkZGVuJylcbiAgICBwdWJsaWMgZ2V0IGhpZGRlbkNsYXNzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb2xsYXBzZWQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIEBIb3N0QmluZGluZygnY2xhc3MuaWd4LXRvb2x0aXAtLWRlc2t0b3AnKVxuICAgIHB1YmxpYyBnZXQgZGVmYXVsdENsYXNzKCkge1xuICAgICAgICByZXR1cm4gIXRoaXMuY29sbGFwc2VkO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMvc2V0cyBhbnkgdG9vbHRpcCByZWxhdGVkIGRhdGEuXG4gICAgICogVGhlICdjb250ZXh0JyBjYW4gYmUgdXNlZCBmb3Igc3RvcmluZyBhbnkgaW5mb3JtYXRpb24gdGhhdCBpcyBuZWNlc3NhcnlcbiAgICAgKiB0byBhY2Nlc3Mgd2hlbiB3b3JraW5nIHdpdGggdGhlIHRvb2x0aXAuXG4gICAgICpcbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogLy8gZ2V0XG4gICAgICogbGV0IHRvb2x0aXBDb250ZXh0ID0gdGhpcy50b29sdGlwLmNvbnRleHQ7XG4gICAgICogYGBgXG4gICAgICpcbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogLy8gc2V0XG4gICAgICogdGhpcy50b29sdGlwLmNvbnRleHQgPSBcIlRvb2x0aXAncyBjb250ZXh0XCI7XG4gICAgICogYGBgXG4gICAgICovXG4gICAgQElucHV0KCdjb250ZXh0JylcbiAgICBwdWJsaWMgY29udGV4dDtcblxuICAgIC8qKlxuICAgICAqIElkZW50aWZpZXIgZm9yIHRoZSB0b29sdGlwLlxuICAgICAqIElmIHRoaXMgaXMgcHJvcGVydHkgaXMgbm90IGV4cGxpY2l0bHkgc2V0LCBpdCB3aWxsIGJlIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkLlxuICAgICAqXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGxldCB0b29sdGlwSWQgPSB0aGlzLnRvb2x0aXAuaWQ7XG4gICAgICogYGBgXG4gICAgICovXG4gICAgQEhvc3RCaW5kaW5nKCdhdHRyLmlkJylcbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBpZCA9IGBpZ3gtdG9vbHRpcC0ke05FWFRfSUQrK31gO1xuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSByb2xlIGF0dHJpYnV0ZSBvZiB0aGUgdG9vbHRpcC5cbiAgICAgKlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBsZXQgdG9vbHRpcFJvbGUgPSB0aGlzLnRvb2x0aXAucm9sZTtcbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBASG9zdEJpbmRpbmcoJ2F0dHIucm9sZScpXG4gICAgcHVibGljIGdldCByb2xlKCkge1xuICAgICAgICByZXR1cm4gJ3Rvb2x0aXAnO1xuICAgIH1cblxuICAgIC8qKiBAaGlkZGVuICovXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgICAgIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgICAgIEBJbmplY3QoSWd4T3ZlcmxheVNlcnZpY2UpIG92ZXJsYXlTZXJ2aWNlOiBJZ3hPdmVybGF5U2VydmljZSxcbiAgICAgICAgQE9wdGlvbmFsKCkgbmF2aWdhdGlvblNlcnZpY2U6IElneE5hdmlnYXRpb25TZXJ2aWNlKSB7XG4gICAgICAgIC8vIEQuUC4gY29uc3RydWN0b3IgZHVwbGljYXRpb24gZHVlIHRvIGVzNiBjb21waWxhdGlvbiwgbWlnaHQgYmUgb2Jzb2xldGUgaW4gdGhlIGZ1dHVyZVxuICAgICAgICBzdXBlcihlbGVtZW50UmVmLCBjZHIsIG92ZXJsYXlTZXJ2aWNlLCBuYXZpZ2F0aW9uU2VydmljZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSWYgdGhlcmUgaXMgb3BlbiBhbmltYXRpb24gaW4gcHJvZ3Jlc3MgdGhpcyBtZXRob2Qgd2lsbCBmaW5pc2ggaXMuXG4gICAgICogSWYgdGhlcmUgaXMgbm8gb3BlbiBhbmltYXRpb24gaW4gcHJvZ3Jlc3MgdGhpcyBtZXRob2Qgd2lsbCBvcGVuIHRoZSB0b2dnbGUgd2l0aCBubyBhbmltYXRpb24uXG4gICAgICogQHBhcmFtIG92ZXJsYXlTZXR0aW5ncyBzZXR0aW5nIHRvIHVzZSBmb3Igb3BlbmluZyB0aGUgdG9nZ2xlXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGZvcmNlT3BlbihvdmVybGF5U2V0dGluZ3M/OiBPdmVybGF5U2V0dGluZ3MpIHtcbiAgICAgICAgY29uc3QgaW5mbyA9IHRoaXMub3ZlcmxheVNlcnZpY2UuZ2V0T3ZlcmxheUJ5SWQodGhpcy5fb3ZlcmxheUlkKTtcbiAgICAgICAgY29uc3QgaGFzT3BlbkFuaW1hdGlvbiA9IGluZm8gPyBpbmZvLm9wZW5BbmltYXRpb25QbGF5ZXIgOiBmYWxzZTtcbiAgICAgICAgaWYgKGhhc09wZW5BbmltYXRpb24pIHtcbiAgICAgICAgICAgIGluZm8ub3BlbkFuaW1hdGlvblBsYXllci5maW5pc2goKTtcbiAgICAgICAgICAgIGluZm8ub3BlbkFuaW1hdGlvblBsYXllci5yZXNldCgpO1xuICAgICAgICAgICAgaW5mby5vcGVuQW5pbWF0aW9uUGxheWVyID0gbnVsbDtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmNvbGxhcHNlZCkge1xuICAgICAgICAgICAgY29uc3QgYW5pbWF0aW9uID0gb3ZlcmxheVNldHRpbmdzLnBvc2l0aW9uU3RyYXRlZ3kuc2V0dGluZ3Mub3BlbkFuaW1hdGlvbjtcbiAgICAgICAgICAgIG92ZXJsYXlTZXR0aW5ncy5wb3NpdGlvblN0cmF0ZWd5LnNldHRpbmdzLm9wZW5BbmltYXRpb24gPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5vcGVuKG92ZXJsYXlTZXR0aW5ncyk7XG4gICAgICAgICAgICBvdmVybGF5U2V0dGluZ3MucG9zaXRpb25TdHJhdGVneS5zZXR0aW5ncy5vcGVuQW5pbWF0aW9uID0gYW5pbWF0aW9uO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSWYgdGhlcmUgaXMgY2xvc2UgYW5pbWF0aW9uIGluIHByb2dyZXNzIHRoaXMgbWV0aG9kIHdpbGwgZmluaXNoIGlzLlxuICAgICAqIElmIHRoZXJlIGlzIG5vIGNsb3NlIGFuaW1hdGlvbiBpbiBwcm9ncmVzcyB0aGlzIG1ldGhvZCB3aWxsIGNsb3NlIHRoZSB0b2dnbGUgd2l0aCBubyBhbmltYXRpb24uXG4gICAgICogQHBhcmFtIG92ZXJsYXlTZXR0aW5ncyBzZXR0aW5ncyB0byB1c2UgZm9yIGNsb3NpbmcgdGhlIHRvZ2dsZVxuICAgICAqL1xuICAgIHByb3RlY3RlZCBmb3JjZUNsb3NlKG92ZXJsYXlTZXR0aW5ncz86IE92ZXJsYXlTZXR0aW5ncykge1xuICAgICAgICBjb25zdCBpbmZvID0gdGhpcy5vdmVybGF5U2VydmljZS5nZXRPdmVybGF5QnlJZCh0aGlzLl9vdmVybGF5SWQpO1xuICAgICAgICBjb25zdCBoYXNDbG9zZUFuaW1hdGlvbiA9IGluZm8gPyBpbmZvLmNsb3NlQW5pbWF0aW9uUGxheWVyIDogZmFsc2U7XG5cbiAgICAgICAgaWYgKGhhc0Nsb3NlQW5pbWF0aW9uKSB7XG4gICAgICAgICAgICBpbmZvLmNsb3NlQW5pbWF0aW9uUGxheWVyLmZpbmlzaCgpO1xuICAgICAgICAgICAgaW5mby5jbG9zZUFuaW1hdGlvblBsYXllci5yZXNldCgpO1xuICAgICAgICAgICAgaW5mby5jbG9zZUFuaW1hdGlvblBsYXllciA9IG51bGw7XG4gICAgICAgIH0gZWxzZSBpZiAoIXRoaXMuY29sbGFwc2VkKSB7XG4gICAgICAgICAgICBjb25zdCBhbmltYXRpb24gPSBvdmVybGF5U2V0dGluZ3MucG9zaXRpb25TdHJhdGVneS5zZXR0aW5ncy5jbG9zZUFuaW1hdGlvbjtcbiAgICAgICAgICAgIG92ZXJsYXlTZXR0aW5ncy5wb3NpdGlvblN0cmF0ZWd5LnNldHRpbmdzLmNsb3NlQW5pbWF0aW9uID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgICAgIG92ZXJsYXlTZXR0aW5ncy5wb3NpdGlvblN0cmF0ZWd5LnNldHRpbmdzLmNsb3NlQW5pbWF0aW9uID0gYW5pbWF0aW9uO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuQE5nTW9kdWxlKHtcbiAgICBkZWNsYXJhdGlvbnM6IFtJZ3hUb29sdGlwRGlyZWN0aXZlLCBJZ3hUb29sdGlwVGFyZ2V0RGlyZWN0aXZlXSxcbiAgICBleHBvcnRzOiBbSWd4VG9vbHRpcERpcmVjdGl2ZSwgSWd4VG9vbHRpcFRhcmdldERpcmVjdGl2ZV0sXG4gICAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXG4gICAgcHJvdmlkZXJzOiBbSWd4T3ZlcmxheVNlcnZpY2VdXG59KVxuZXhwb3J0IGNsYXNzIElneFRvb2x0aXBNb2R1bGUgeyB9XG5cbiJdfQ==