/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var IgxTooltipTargetDirective = /** @class */ (function (_super) {
    tslib_1.__extends(IgxTooltipTargetDirective, _super);
    function IgxTooltipTargetDirective(_element, _navigationService) {
        var _this = _super.call(this, _element, _navigationService) || this;
        _this._element = _element;
        _this._navigationService = _navigationService;
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
        _this.showDelay = 500;
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
        _this.hideDelay = 500;
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
        _this.tooltipDisabled = false;
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
        _this.onTooltipShow = new EventEmitter();
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
        _this.onTooltipHide = new EventEmitter();
        return _this;
    }
    Object.defineProperty(IgxTooltipTargetDirective.prototype, "target", {
        /**
         * @hidden
         */
        get: /**
         * @hidden
         * @return {?}
         */
        function () {
            if (typeof this._target === 'string') {
                return this._navigationService.get(this._target);
            }
            return this._target;
        },
        /**
         * @hidden
         */
        set: /**
         * @hidden
         * @param {?} target
         * @return {?}
         */
        function (target) {
            if (target !== null && target !== '') {
                this._target = target;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxTooltipTargetDirective.prototype, "nativeElement", {
        /**
         * Gets the respective native element of the directive.
         *
         * ```typescript
         * let tooltipTargetElement = this.tooltipTarget.nativeElement;
         * ```
         */
        get: /**
         * Gets the respective native element of the directive.
         *
         * ```typescript
         * let tooltipTargetElement = this.tooltipTarget.nativeElement;
         * ```
         * @return {?}
         */
        function () {
            return this._element.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxTooltipTargetDirective.prototype, "tooltipHidden", {
        /**
         * Indicates if the tooltip that is is associated with this target is currently hidden.
         *
         * ```typescript
         * let tooltipHiddenValue = this.tooltipTarget.tooltipHidden;
         * ```
         */
        get: /**
         * Indicates if the tooltip that is is associated with this target is currently hidden.
         *
         * ```typescript
         * let tooltipHiddenValue = this.tooltipTarget.tooltipHidden;
         * ```
         * @return {?}
         */
        function () {
            return !this.target || this.target.collapsed;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @hidden
     */
    /**
     * @hidden
     * @return {?}
     */
    IgxTooltipTargetDirective.prototype.ngOnInit = /**
     * @hidden
     * @return {?}
     */
    function () {
        _super.prototype.ngOnInit.call(this);
        /** @type {?} */
        var positionSettings = {
            target: this.nativeElement,
            horizontalDirection: HorizontalAlignment.Center,
            horizontalStartPoint: HorizontalAlignment.Center,
            openAnimation: useAnimation(scaleInCenter, { params: { duration: '150ms' } }),
            closeAnimation: useAnimation(fadeOut, { params: { duration: '75ms' } })
        };
        this._overlayDefaults.positionStrategy = new AutoPositionStrategy(positionSettings);
        this._overlayDefaults.closeOnOutsideClick = false;
    };
    /**
     * @private
     * @return {?}
     */
    IgxTooltipTargetDirective.prototype.checkOutletAndOutsideClick = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.outlet) {
            this._overlayDefaults.outlet = this.outlet;
        }
    };
    Object.defineProperty(IgxTooltipTargetDirective.prototype, "mergedOverlaySettings", {
        get: /**
         * @private
         * @return {?}
         */
        function () {
            return Object.assign({}, this._overlayDefaults, this.overlaySettings);
        },
        enumerable: true,
        configurable: true
    });
    // Return true if the execution in onMouseEnter should be terminated after this method
    // Return true if the execution in onMouseEnter should be terminated after this method
    /**
     * @private
     * @return {?}
     */
    IgxTooltipTargetDirective.prototype.preMouseEnterCheck = 
    // Return true if the execution in onMouseEnter should be terminated after this method
    /**
     * @private
     * @return {?}
     */
    function () {
        // If tooltip is about to be opened
        if (this.target.toBeShown) {
            clearTimeout(this.target.timeoutId);
            this.target.toBeShown = false;
        }
        // If Tooltip is opened or about to be hidden
        if (!this.target.collapsed || this.target.toBeHidden) {
            clearTimeout(this.target.timeoutId);
            /** @type {?} */
            var hidingArgs = { target: this, tooltip: this.target, cancel: false };
            this.onTooltipHide.emit(hidingArgs);
            if (hidingArgs.cancel) {
                return true;
            }
            //  if close animation has started finish it, or close the tooltip with no animation
            this.target.forceClose(this.mergedOverlaySettings);
            this.target.toBeHidden = false;
        }
        return false;
    };
    // Return true if the execution in onMouseLeave should be terminated after this method
    // Return true if the execution in onMouseLeave should be terminated after this method
    /**
     * @private
     * @return {?}
     */
    IgxTooltipTargetDirective.prototype.preMouseLeaveCheck = 
    // Return true if the execution in onMouseLeave should be terminated after this method
    /**
     * @private
     * @return {?}
     */
    function () {
        clearTimeout(this.target.timeoutId);
        // If tooltip is about to be opened
        if (this.target.toBeShown) {
            this.target.toBeShown = false;
            this.target.toBeHidden = false;
            return true;
        }
        return false;
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @return {?}
     */
    IgxTooltipTargetDirective.prototype.onKeydownEscape = /**
     * @hidden
     * @return {?}
     */
    function () {
        /** @type {?} */
        var hidingArgs = { target: this, tooltip: this.target, cancel: false };
        this.onTooltipHide.emit(hidingArgs);
        if (hidingArgs.cancel) {
            return;
        }
        this.target.toBeHidden = true;
        this.target.close();
        this.target.toBeHidden = false;
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @return {?}
     */
    IgxTooltipTargetDirective.prototype.onClick = /**
     * @hidden
     * @return {?}
     */
    function () {
        if (!this.target.collapsed) {
            /** @type {?} */
            var hidingArgs = { target: this, tooltip: this.target, cancel: false };
            this.onTooltipHide.emit(hidingArgs);
            if (hidingArgs.cancel) {
                return;
            }
            this.target.forceClose(this.mergedOverlaySettings);
        }
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @return {?}
     */
    IgxTooltipTargetDirective.prototype.onMouseEnter = /**
     * @hidden
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.tooltipDisabled) {
            return;
        }
        this.checkOutletAndOutsideClick();
        /** @type {?} */
        var shouldReturn = this.preMouseEnterCheck();
        if (shouldReturn) {
            return;
        }
        /** @type {?} */
        var showingArgs = { target: this, tooltip: this.target, cancel: false };
        this.onTooltipShow.emit(showingArgs);
        if (showingArgs.cancel) {
            return;
        }
        this.target.toBeShown = true;
        this.target.timeoutId = setTimeout(function () {
            _this.target.open(_this.mergedOverlaySettings); // Call open() of IgxTooltipDirective
            _this.target.toBeShown = false;
        }, this.showDelay);
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @return {?}
     */
    IgxTooltipTargetDirective.prototype.onMouseLeave = /**
     * @hidden
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.tooltipDisabled) {
            return;
        }
        this.checkOutletAndOutsideClick();
        /** @type {?} */
        var shouldReturn = this.preMouseLeaveCheck();
        if (shouldReturn || this.target.collapsed) {
            return;
        }
        /** @type {?} */
        var hidingArgs = { target: this, tooltip: this.target, cancel: false };
        this.onTooltipHide.emit(hidingArgs);
        if (hidingArgs.cancel) {
            return;
        }
        this.target.toBeHidden = true;
        this.target.timeoutId = setTimeout(function () {
            _this.target.close(); // Call close() of IgxTooltipDirective
            _this.target.toBeHidden = false;
        }, this.hideDelay);
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    IgxTooltipTargetDirective.prototype.onTouchStart = /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.tooltipDisabled) {
            return;
        }
        event.preventDefault();
        this.showTooltip();
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    IgxTooltipTargetDirective.prototype.onDocumentTouchStart = /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.tooltipDisabled) {
            return;
        }
        if (this.nativeElement !== event.target &&
            !this.nativeElement.contains(event.target)) {
            this.hideTooltip();
        }
    };
    /**
     * Shows the tooltip by respecting the 'showDelay' property.
     *
     * ```typescript
     * this.tooltipTarget.showTooltip();
     * ```
     */
    /**
     * Shows the tooltip by respecting the 'showDelay' property.
     *
     * ```typescript
     * this.tooltipTarget.showTooltip();
     * ```
     * @return {?}
     */
    IgxTooltipTargetDirective.prototype.showTooltip = /**
     * Shows the tooltip by respecting the 'showDelay' property.
     *
     * ```typescript
     * this.tooltipTarget.showTooltip();
     * ```
     * @return {?}
     */
    function () {
        var _this = this;
        clearTimeout(this.target.timeoutId);
        if (!this.target.collapsed) {
            /** @type {?} */
            var hidingArgs = { target: this, tooltip: this.target, cancel: false };
            this.onTooltipHide.emit(hidingArgs);
            if (hidingArgs.cancel) {
                return;
            }
            //  if close animation has started finish it, or close the tooltip with no animation
            this.target.forceClose(this.mergedOverlaySettings);
            this.target.toBeHidden = false;
        }
        /** @type {?} */
        var showingArgs = { target: this, tooltip: this.target, cancel: false };
        this.onTooltipShow.emit(showingArgs);
        if (showingArgs.cancel) {
            return;
        }
        this.target.toBeShown = true;
        this.target.timeoutId = setTimeout(function () {
            _this.target.open(_this.mergedOverlaySettings); // Call open() of IgxTooltipDirective
            _this.target.toBeShown = false;
        }, this.showDelay);
    };
    /**
     * Hides the tooltip by respecting the 'hideDelay' property.
     *
     * ```typescript
     * this.tooltipTarget.hideTooltip();
     * ```
     */
    /**
     * Hides the tooltip by respecting the 'hideDelay' property.
     *
     * ```typescript
     * this.tooltipTarget.hideTooltip();
     * ```
     * @return {?}
     */
    IgxTooltipTargetDirective.prototype.hideTooltip = /**
     * Hides the tooltip by respecting the 'hideDelay' property.
     *
     * ```typescript
     * this.tooltipTarget.hideTooltip();
     * ```
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.target.collapsed && this.target.toBeShown) {
            clearTimeout(this.target.timeoutId);
        }
        if (this.target.collapsed || this.target.toBeHidden) {
            return;
        }
        /** @type {?} */
        var hidingArgs = { target: this, tooltip: this.target, cancel: false };
        this.onTooltipHide.emit(hidingArgs);
        if (hidingArgs.cancel) {
            return;
        }
        this.target.toBeHidden = true;
        this.target.timeoutId = setTimeout(function () {
            _this.target.close(); // Call close() of IgxTooltipDirective
            _this.target.toBeHidden = false;
        }, this.hideDelay);
    };
    IgxTooltipTargetDirective.decorators = [
        { type: Directive, args: [{
                    exportAs: 'tooltipTarget',
                    selector: '[igxTooltipTarget]'
                },] }
    ];
    /** @nocollapse */
    IgxTooltipTargetDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: IgxNavigationService, decorators: [{ type: Optional }] }
    ]; };
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
    return IgxTooltipTargetDirective;
}(IgxToggleActionDirective));
export { IgxTooltipTargetDirective };
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
var NEXT_ID = 0;
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
var IgxTooltipDirective = /** @class */ (function (_super) {
    tslib_1.__extends(IgxTooltipDirective, _super);
    /** @hidden */
    function IgxTooltipDirective(elementRef, cdr, overlayService, navigationService) {
        var _this = 
        // D.P. constructor duplication due to es6 compilation, might be obsolete in the future
        _super.call(this, elementRef, cdr, overlayService, navigationService) || this;
        /**
         * @hidden
         * Returns whether close time out has started
         */
        _this.toBeHidden = false;
        /**
         * @hidden
         * Returns whether open time out has started
         */
        _this.toBeShown = false;
        /**
         * Identifier for the tooltip.
         * If this is property is not explicitly set, it will be automatically generated.
         *
         * ```typescript
         * let tooltipId = this.tooltip.id;
         * ```
         */
        _this.id = "igx-tooltip-" + NEXT_ID++;
        return _this;
    }
    Object.defineProperty(IgxTooltipDirective.prototype, "hiddenClass", {
        /**
         * @hidden
         */
        get: /**
         * @hidden
         * @return {?}
         */
        function () {
            return this.collapsed;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxTooltipDirective.prototype, "defaultClass", {
        /**
         * @hidden
         */
        get: /**
         * @hidden
         * @return {?}
         */
        function () {
            return !this.collapsed;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxTooltipDirective.prototype, "role", {
        /**
         * Get the role attribute of the tooltip.
         *
         * ```typescript
         * let tooltipRole = this.tooltip.role;
         * ```
         */
        get: /**
         * Get the role attribute of the tooltip.
         *
         * ```typescript
         * let tooltipRole = this.tooltip.role;
         * ```
         * @return {?}
         */
        function () {
            return 'tooltip';
        },
        enumerable: true,
        configurable: true
    });
    /**
     * If there is open animation in progress this method will finish is.
     * If there is no open animation in progress this method will open the toggle with no animation.
     * @param overlaySettings setting to use for opening the toggle
     */
    /**
     * If there is open animation in progress this method will finish is.
     * If there is no open animation in progress this method will open the toggle with no animation.
     * @protected
     * @param {?=} overlaySettings setting to use for opening the toggle
     * @return {?}
     */
    IgxTooltipDirective.prototype.forceOpen = /**
     * If there is open animation in progress this method will finish is.
     * If there is no open animation in progress this method will open the toggle with no animation.
     * @protected
     * @param {?=} overlaySettings setting to use for opening the toggle
     * @return {?}
     */
    function (overlaySettings) {
        /** @type {?} */
        var info = this.overlayService.getOverlayById(this._overlayId);
        /** @type {?} */
        var hasOpenAnimation = info ? info.openAnimationPlayer : false;
        if (hasOpenAnimation) {
            info.openAnimationPlayer.finish();
            info.openAnimationPlayer.reset();
            info.openAnimationPlayer = null;
        }
        else if (this.collapsed) {
            /** @type {?} */
            var animation = overlaySettings.positionStrategy.settings.openAnimation;
            overlaySettings.positionStrategy.settings.openAnimation = null;
            this.open(overlaySettings);
            overlaySettings.positionStrategy.settings.openAnimation = animation;
        }
    };
    /**
     * If there is close animation in progress this method will finish is.
     * If there is no close animation in progress this method will close the toggle with no animation.
     * @param overlaySettings settings to use for closing the toggle
     */
    /**
     * If there is close animation in progress this method will finish is.
     * If there is no close animation in progress this method will close the toggle with no animation.
     * @protected
     * @param {?=} overlaySettings settings to use for closing the toggle
     * @return {?}
     */
    IgxTooltipDirective.prototype.forceClose = /**
     * If there is close animation in progress this method will finish is.
     * If there is no close animation in progress this method will close the toggle with no animation.
     * @protected
     * @param {?=} overlaySettings settings to use for closing the toggle
     * @return {?}
     */
    function (overlaySettings) {
        /** @type {?} */
        var info = this.overlayService.getOverlayById(this._overlayId);
        /** @type {?} */
        var hasCloseAnimation = info ? info.closeAnimationPlayer : false;
        if (hasCloseAnimation) {
            info.closeAnimationPlayer.finish();
            info.closeAnimationPlayer.reset();
            info.closeAnimationPlayer = null;
        }
        else if (!this.collapsed) {
            /** @type {?} */
            var animation = overlaySettings.positionStrategy.settings.closeAnimation;
            overlaySettings.positionStrategy.settings.closeAnimation = null;
            this.close();
            overlaySettings.positionStrategy.settings.closeAnimation = animation;
        }
    };
    IgxTooltipDirective.decorators = [
        { type: Directive, args: [{
                    exportAs: 'tooltip',
                    selector: '[igxTooltip]'
                },] }
    ];
    /** @nocollapse */
    IgxTooltipDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: IgxOverlayService, decorators: [{ type: Inject, args: [IgxOverlayService,] }] },
        { type: IgxNavigationService, decorators: [{ type: Optional }] }
    ]; };
    IgxTooltipDirective.propDecorators = {
        hiddenClass: [{ type: HostBinding, args: ['class.igx-tooltip--hidden',] }],
        defaultClass: [{ type: HostBinding, args: ['class.igx-tooltip--desktop',] }],
        context: [{ type: Input, args: ['context',] }],
        id: [{ type: HostBinding, args: ['attr.id',] }, { type: Input }],
        role: [{ type: HostBinding, args: ['attr.role',] }]
    };
    return IgxTooltipDirective;
}(IgxToggleDirective));
export { IgxTooltipDirective };
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
var IgxTooltipModule = /** @class */ (function () {
    function IgxTooltipModule() {
    }
    IgxTooltipModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [IgxTooltipDirective, IgxTooltipTargetDirective],
                    exports: [IgxTooltipDirective, IgxTooltipTargetDirective],
                    imports: [CommonModule],
                    providers: [IgxOverlayService]
                },] }
    ];
    return IgxTooltipModule;
}());
export { IgxTooltipModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9pZ25pdGV1aS1hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL2RpcmVjdGl2ZXMvdG9vbHRpcC90b29sdGlwLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDSCxTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLGlCQUFpQixFQUN2RSxNQUFNLEVBQUUsWUFBWSxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQWEsTUFBTSxFQUNqRSxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDbkQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzdELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNuRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsb0JBQW9CLEVBQXFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDOUcsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzdELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDOzs7O0FBRzFGLDJDQUlDOzs7SUFIRyx1Q0FBa0M7O0lBQ2xDLHdDQUE2Qjs7SUFDN0IsdUNBQWdCOzs7OztBQUVwQiwyQ0FJQzs7O0lBSEcsdUNBQWtDOztJQUNsQyx3Q0FBNkI7O0lBQzdCLHVDQUFnQjs7Ozs7Ozs7Ozs7Ozs7OztBQWlCcEI7SUFJK0MscURBQXdCO0lBc0luRSxtQ0FBb0IsUUFBb0IsRUFDaEIsa0JBQXdDO1FBRGhFLFlBRUksa0JBQU0sUUFBUSxFQUFFLGtC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QWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEhvc3RMaXN0ZW5lciwgSW5wdXQsIE5nTW9kdWxlLCBDaGFuZ2VEZXRlY3RvclJlZiwgT25Jbml0LFxuICAgIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBPcHRpb25hbCwgSG9zdEJpbmRpbmcsIE9uRGVzdHJveSwgSW5qZWN0XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgdXNlQW5pbWF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBzY2FsZUluQ2VudGVyIH0gZnJvbSAnLi4vLi4vYW5pbWF0aW9ucy9zY2FsZS9pbmRleCc7XG5pbXBvcnQgeyBmYWRlT3V0IH0gZnJvbSAnLi4vLi4vYW5pbWF0aW9ucy9mYWRlL2luZGV4JztcbmltcG9ydCB7IElneE92ZXJsYXlTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvb3ZlcmxheS9vdmVybGF5JztcbmltcG9ydCB7IEhvcml6b250YWxBbGlnbm1lbnQsIEF1dG9Qb3NpdGlvblN0cmF0ZWd5LCBQb3NpdGlvblNldHRpbmdzLCBPdmVybGF5U2V0dGluZ3MgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcyc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSWd4TmF2aWdhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi9jb3JlL25hdmlnYXRpb24nO1xuaW1wb3J0IHsgSWd4VG9nZ2xlRGlyZWN0aXZlLCBJZ3hUb2dnbGVBY3Rpb25EaXJlY3RpdmUgfSBmcm9tICcuLi90b2dnbGUvdG9nZ2xlLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuZXhwb3J0IGludGVyZmFjZSBJVG9vbHRpcFNob3dFdmVudEFyZ3Mge1xuICAgIHRhcmdldDogSWd4VG9vbHRpcFRhcmdldERpcmVjdGl2ZTtcbiAgICB0b29sdGlwOiBJZ3hUb29sdGlwRGlyZWN0aXZlO1xuICAgIGNhbmNlbDogYm9vbGVhbjtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgSVRvb2x0aXBIaWRlRXZlbnRBcmdzIHtcbiAgICB0YXJnZXQ6IElneFRvb2x0aXBUYXJnZXREaXJlY3RpdmU7XG4gICAgdG9vbHRpcDogSWd4VG9vbHRpcERpcmVjdGl2ZTtcbiAgICBjYW5jZWw6IGJvb2xlYW47XG59XG5cbi8qKlxuICogKipJZ25pdGUgVUkgZm9yIEFuZ3VsYXIgVG9vbHRpcCBUYXJnZXQqKiAtXG4gKiBbRG9jdW1lbnRhdGlvbl0oaHR0cHM6Ly93d3cuaW5mcmFnaXN0aWNzLmNvbS9wcm9kdWN0cy9pZ25pdGUtdWktYW5ndWxhci9hbmd1bGFyL2NvbXBvbmVudHMvdG9vbHRpcC5odG1sKVxuICpcbiAqIFRoZSBJZ25pdGUgVUkgZm9yIEFuZ3VsYXIgVG9vbHRpcCBUYXJnZXQgZGlyZWN0aXZlIGlzIHVzZWQgdG8gbWFyayBhbiBIVE1MIGVsZW1lbnQgaW4gdGhlIG1hcmt1cCBhcyBvbmUgdGhhdCBoYXMgYSB0b29sdGlwLlxuICogVGhlIHRvb2x0aXAgdGFyZ2V0IGlzIHVzZWQgaW4gY29tYmluYXRpb24gd2l0aCB0aGUgSWduaXRlIFVJIGZvciBBbmd1bGFyIFRvb2x0aXAgYnkgYXNzaWduaW5nIHRoZSBleHBvcnRlZCB0b29sdGlwIHJlZmVyZW5jZSB0byB0aGVcbiAqIHRhcmdldCdzIHNlbGVjdG9yIHByb3BlcnR5LlxuICpcbiAqIEV4YW1wbGU6XG4gKiBgYGBodG1sXG4gKiA8YnV0dG9uIFtpZ3hUb29sdGlwVGFyZ2V0XT1cInRvb2x0aXBSZWZcIj5Ib3ZlciBtZTwvYnV0dG9uPlxuICogPHNwYW4gI3Rvb2x0aXBSZWY9XCJ0b29sdGlwXCIgaWd4VG9vbHRpcD5IZWxsbyB0aGVyZSwgSSBhbSBhIHRvb2x0aXAhPC9zcGFuPlxuICogYGBgXG4gKi9cbkBEaXJlY3RpdmUoe1xuICAgIGV4cG9ydEFzOiAndG9vbHRpcFRhcmdldCcsXG4gICAgc2VsZWN0b3I6ICdbaWd4VG9vbHRpcFRhcmdldF0nXG59KVxuZXhwb3J0IGNsYXNzIElneFRvb2x0aXBUYXJnZXREaXJlY3RpdmUgZXh0ZW5kcyBJZ3hUb2dnbGVBY3Rpb25EaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIC8qKlxuICAgICAqIEdldHMvc2V0cyB0aGUgYW1vdW50IG9mIG1pbGxpc2Vjb25kcyB0aGF0IHNob3VsZCBwYXNzIGJlZm9yZSBzaG93aW5nIHRoZSB0b29sdGlwLlxuICAgICAqXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIC8vIGdldFxuICAgICAqIGxldCB0b29sdGlwU2hvd0RlbGF5ID0gdGhpcy50b29sdGlwVGFyZ2V0LnNob3dEZWxheTtcbiAgICAgKiBgYGBcbiAgICAgKlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8IS0tc2V0LS0+XG4gICAgICogPGJ1dHRvbiBbaWd4VG9vbHRpcFRhcmdldF09XCJ0b29sdGlwUmVmXCIgc2hvd0RlbGF5PVwiMTUwMFwiPkhvdmVyIG1lPC9idXR0b24+XG4gICAgICogPHNwYW4gI3Rvb2x0aXBSZWY9XCJ0b29sdGlwXCIgaWd4VG9vbHRpcD5IZWxsbyB0aGVyZSwgSSBhbSBhIHRvb2x0aXAhPC9zcGFuPlxuICAgICAqIGBgYFxuICAgICAqL1xuICAgIEBJbnB1dCgnc2hvd0RlbGF5JylcbiAgICBwdWJsaWMgc2hvd0RlbGF5ID0gNTAwO1xuXG4gICAgLyoqXG4gICAgICogR2V0cy9zZXRzIHRoZSBhbW91bnQgb2YgbWlsbGlzZWNvbmRzIHRoYXQgc2hvdWxkIHBhc3MgYmVmb3JlIGhpZGluZyB0aGUgdG9vbHRpcC5cbiAgICAgKlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiAvLyBnZXRcbiAgICAgKiBsZXQgdG9vbHRpcEhpZGVEZWxheSA9IHRoaXMudG9vbHRpcFRhcmdldC5oaWRlRGVsYXk7XG4gICAgICogYGBgXG4gICAgICpcbiAgICAgKiBgYGBodG1sXG4gICAgICogPCEtLXNldC0tPlxuICAgICAqIDxidXR0b24gW2lneFRvb2x0aXBUYXJnZXRdPVwidG9vbHRpcFJlZlwiIGhpZGVEZWxheT1cIjE1MDBcIj5Ib3ZlciBtZTwvYnV0dG9uPlxuICAgICAqIDxzcGFuICN0b29sdGlwUmVmPVwidG9vbHRpcFwiIGlneFRvb2x0aXA+SGVsbG8gdGhlcmUsIEkgYW0gYSB0b29sdGlwITwvc3Bhbj5cbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBASW5wdXQoJ2hpZGVEZWxheScpXG4gICAgcHVibGljIGhpZGVEZWxheSA9IDUwMDtcblxuICAgIC8qKlxuICAgICAqIFNwZWNpZmllcyBpZiB0aGUgdG9vbHRpcCBzaG91bGQgbm90IHNob3cgd2hlbiBob3ZlcmluZyBpdHMgdGFyZ2V0IHdpdGggdGhlIG1vdXNlLiAoZGVmYXVsdHMgdG8gZmFsc2UpXG4gICAgICogV2hpbGUgc2V0dGluZyB0aGlzIHByb3BlcnR5IHRvICd0cnVlJyB3aWxsIGRpc2FibGUgdGhlIHVzZXIgaW50ZXJhY3Rpb25zIHRoYXQgc2hvd3MvaGlkZXMgdGhlIHRvb2x0aXAsXG4gICAgICogdGhlIGRldmVsb3BlciB3aWxsIHN0aWxsIGJlIGFibGUgdG8gc2hvdy9oaWRlIHRoZSB0b29sdGlwIHRocm91Z2ggdGhlIEFQSS5cbiAgICAgKlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiAvLyBnZXRcbiAgICAgKiBsZXQgdG9vbHRpcERpc2FibGVkVmFsdWUgPSB0aGlzLnRvb2x0aXBUYXJnZXQudG9vbHRpcERpc2FibGVkO1xuICAgICAqIGBgYFxuICAgICAqXG4gICAgICogYGBgaHRtbFxuICAgICAqIDwhLS1zZXQtLT5cbiAgICAgKiA8YnV0dG9uIFtpZ3hUb29sdGlwVGFyZ2V0XT1cInRvb2x0aXBSZWZcIiBbdG9vbHRpcERpc2FibGVkXT1cInRydWVcIj5Ib3ZlciBtZTwvYnV0dG9uPlxuICAgICAqIDxzcGFuICN0b29sdGlwUmVmPVwidG9vbHRpcFwiIGlneFRvb2x0aXA+SGVsbG8gdGhlcmUsIEkgYW0gYSB0b29sdGlwITwvc3Bhbj5cbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBASW5wdXQoJ3Rvb2x0aXBEaXNhYmxlZCcpXG4gICAgcHVibGljIHRvb2x0aXBEaXNhYmxlZCA9IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIEBJbnB1dCgnaWd4VG9vbHRpcFRhcmdldCcpXG4gICAgc2V0IHRhcmdldCh0YXJnZXQ6IGFueSkge1xuICAgICAgICBpZiAodGFyZ2V0ICE9PSBudWxsICYmIHRhcmdldCAhPT0gJycpIHtcbiAgICAgICAgICAgIHRoaXMuX3RhcmdldCA9IHRhcmdldDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBnZXQgdGFyZ2V0KCk6IGFueSB7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5fdGFyZ2V0ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX25hdmlnYXRpb25TZXJ2aWNlLmdldCh0aGlzLl90YXJnZXQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl90YXJnZXQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgcmVzcGVjdGl2ZSBuYXRpdmUgZWxlbWVudCBvZiB0aGUgZGlyZWN0aXZlLlxuICAgICAqXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGxldCB0b29sdGlwVGFyZ2V0RWxlbWVudCA9IHRoaXMudG9vbHRpcFRhcmdldC5uYXRpdmVFbGVtZW50O1xuICAgICAqIGBgYFxuICAgICAqL1xuICAgIHB1YmxpYyBnZXQgbmF0aXZlRWxlbWVudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbmRpY2F0ZXMgaWYgdGhlIHRvb2x0aXAgdGhhdCBpcyBpcyBhc3NvY2lhdGVkIHdpdGggdGhpcyB0YXJnZXQgaXMgY3VycmVudGx5IGhpZGRlbi5cbiAgICAgKlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBsZXQgdG9vbHRpcEhpZGRlblZhbHVlID0gdGhpcy50b29sdGlwVGFyZ2V0LnRvb2x0aXBIaWRkZW47XG4gICAgICogYGBgXG4gICAgICovXG4gICAgcHVibGljIGdldCB0b29sdGlwSGlkZGVuKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gIXRoaXMudGFyZ2V0IHx8IHRoaXMudGFyZ2V0LmNvbGxhcHNlZDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBFbWl0cyBhbiBldmVudCB3aGVuIHRoZSB0b29sdGlwIHRoYXQgaXMgYXNzb2NpYXRlZCB3aXRoIHRoaXMgdGFyZ2V0IHN0YXJ0cyBzaG93aW5nLlxuICAgICAqIFRoaXMgZXZlbnQgaXMgZmlyZWQgYmVmb3JlIHRoZSBzdGFydCBvZiB0aGUgY291bnRkb3duIHRvIHNob3dpbmcgdGhlIHRvb2x0aXAuXG4gICAgICpcbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogdG9vbHRpcFNob3dpbmcoYXJnczogSVRvb2x0aXBTaG93RXZlbnRBcmdzKSB7XG4gICAgICogICAgYWxlcnQoXCJUb29sdGlwIHN0YXJ0ZWQgc2hvd2luZyFcIik7XG4gICAgICogfVxuICAgICAqIGBgYFxuICAgICAqXG4gICAgICogYGBgaHRtbFxuICAgICAqIDxidXR0b24gW2lneFRvb2x0aXBUYXJnZXRdPVwidG9vbHRpcFJlZlwiXG4gICAgICogICAgICAgICAob25Ub29sdGlwU2hvdyk9J3Rvb2x0aXBTaG93aW5nKCRldmVudCknPkhvdmVyIG1lPC9idXR0b24+XG4gICAgICogPHNwYW4gI3Rvb2x0aXBSZWY9XCJ0b29sdGlwXCIgaWd4VG9vbHRpcD5IZWxsbyB0aGVyZSwgSSBhbSBhIHRvb2x0aXAhPC9zcGFuPlxuICAgICAqIGBgYFxuICAgICAqL1xuICAgIEBPdXRwdXQoKVxuICAgIHB1YmxpYyBvblRvb2x0aXBTaG93ID0gbmV3IEV2ZW50RW1pdHRlcjxJVG9vbHRpcFNob3dFdmVudEFyZ3M+KCk7XG5cbiAgICAvKipcbiAgICAgKiBFbWl0cyBhbiBldmVudCB3aGVuIHRoZSB0b29sdGlwIHRoYXQgaXMgYXNzb2NpYXRlZCB3aXRoIHRoaXMgdGFyZ2V0IHN0YXJ0cyBoaWRpbmcuXG4gICAgICogVGhpcyBldmVudCBpcyBmaXJlZCBiZWZvcmUgdGhlIHN0YXJ0IG9mIHRoZSBjb3VudGRvd24gdG8gaGlkaW5nIHRoZSB0b29sdGlwLlxuICAgICAqXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIHRvb2x0aXBIaWRpbmcoYXJnczogSVRvb2x0aXBIaWRlRXZlbnRBcmdzKSB7XG4gICAgICogICAgYWxlcnQoXCJUb29sdGlwIHN0YXJ0ZWQgaGlkaW5nIVwiKTtcbiAgICAgKiB9XG4gICAgICogYGBgXG4gICAgICpcbiAgICAgKiBgYGBodG1sXG4gICAgICogPGJ1dHRvbiBbaWd4VG9vbHRpcFRhcmdldF09XCJ0b29sdGlwUmVmXCJcbiAgICAgKiAgICAgICAgIChvblRvb2x0aXBIaWRlKT0ndG9vbHRpcEhpZGluZygkZXZlbnQpJz5Ib3ZlciBtZTwvYnV0dG9uPlxuICAgICAqIDxzcGFuICN0b29sdGlwUmVmPVwidG9vbHRpcFwiIGlneFRvb2x0aXA+SGVsbG8gdGhlcmUsIEkgYW0gYSB0b29sdGlwITwvc3Bhbj5cbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBAT3V0cHV0KClcbiAgICBwdWJsaWMgb25Ub29sdGlwSGlkZSA9IG5ldyBFdmVudEVtaXR0ZXI8SVRvb2x0aXBIaWRlRXZlbnRBcmdzPigpO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfZWxlbWVudDogRWxlbWVudFJlZixcbiAgICAgICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBfbmF2aWdhdGlvblNlcnZpY2U6IElneE5hdmlnYXRpb25TZXJ2aWNlKSB7XG4gICAgICAgIHN1cGVyKF9lbGVtZW50LCBfbmF2aWdhdGlvblNlcnZpY2UpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgbmdPbkluaXQoKSB7XG4gICAgICAgIHN1cGVyLm5nT25Jbml0KCk7XG5cbiAgICAgICAgY29uc3QgcG9zaXRpb25TZXR0aW5nczogUG9zaXRpb25TZXR0aW5ncyA9IHtcbiAgICAgICAgICAgIHRhcmdldDogdGhpcy5uYXRpdmVFbGVtZW50LFxuICAgICAgICAgICAgaG9yaXpvbnRhbERpcmVjdGlvbjogSG9yaXpvbnRhbEFsaWdubWVudC5DZW50ZXIsXG4gICAgICAgICAgICBob3Jpem9udGFsU3RhcnRQb2ludDogSG9yaXpvbnRhbEFsaWdubWVudC5DZW50ZXIsXG4gICAgICAgICAgICBvcGVuQW5pbWF0aW9uOiB1c2VBbmltYXRpb24oc2NhbGVJbkNlbnRlciwgeyBwYXJhbXM6IHsgZHVyYXRpb246ICcxNTBtcycgfSB9KSxcbiAgICAgICAgICAgIGNsb3NlQW5pbWF0aW9uOiB1c2VBbmltYXRpb24oZmFkZU91dCwgeyBwYXJhbXM6IHsgZHVyYXRpb246ICc3NW1zJyB9IH0pXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5fb3ZlcmxheURlZmF1bHRzLnBvc2l0aW9uU3RyYXRlZ3kgPSBuZXcgQXV0b1Bvc2l0aW9uU3RyYXRlZ3kocG9zaXRpb25TZXR0aW5ncyk7XG4gICAgICAgIHRoaXMuX292ZXJsYXlEZWZhdWx0cy5jbG9zZU9uT3V0c2lkZUNsaWNrID0gZmFsc2U7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjaGVja091dGxldEFuZE91dHNpZGVDbGljaygpIHtcbiAgICAgICAgaWYgKHRoaXMub3V0bGV0KSB7XG4gICAgICAgICAgICB0aGlzLl9vdmVybGF5RGVmYXVsdHMub3V0bGV0ID0gdGhpcy5vdXRsZXQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGdldCBtZXJnZWRPdmVybGF5U2V0dGluZ3MoKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCB0aGlzLl9vdmVybGF5RGVmYXVsdHMsIHRoaXMub3ZlcmxheVNldHRpbmdzKTtcbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gdHJ1ZSBpZiB0aGUgZXhlY3V0aW9uIGluIG9uTW91c2VFbnRlciBzaG91bGQgYmUgdGVybWluYXRlZCBhZnRlciB0aGlzIG1ldGhvZFxuICAgIHByaXZhdGUgcHJlTW91c2VFbnRlckNoZWNrKCkge1xuICAgICAgICAvLyBJZiB0b29sdGlwIGlzIGFib3V0IHRvIGJlIG9wZW5lZFxuICAgICAgICBpZiAodGhpcy50YXJnZXQudG9CZVNob3duKSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy50YXJnZXQudGltZW91dElkKTtcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0LnRvQmVTaG93biA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgVG9vbHRpcCBpcyBvcGVuZWQgb3IgYWJvdXQgdG8gYmUgaGlkZGVuXG4gICAgICAgIGlmICghdGhpcy50YXJnZXQuY29sbGFwc2VkIHx8IHRoaXMudGFyZ2V0LnRvQmVIaWRkZW4pIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRhcmdldC50aW1lb3V0SWQpO1xuXG4gICAgICAgICAgICBjb25zdCBoaWRpbmdBcmdzID0geyB0YXJnZXQ6IHRoaXMsIHRvb2x0aXA6IHRoaXMudGFyZ2V0LCBjYW5jZWw6IGZhbHNlIH07XG4gICAgICAgICAgICB0aGlzLm9uVG9vbHRpcEhpZGUuZW1pdChoaWRpbmdBcmdzKTtcblxuICAgICAgICAgICAgaWYgKGhpZGluZ0FyZ3MuY2FuY2VsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vICBpZiBjbG9zZSBhbmltYXRpb24gaGFzIHN0YXJ0ZWQgZmluaXNoIGl0LCBvciBjbG9zZSB0aGUgdG9vbHRpcCB3aXRoIG5vIGFuaW1hdGlvblxuICAgICAgICAgICAgdGhpcy50YXJnZXQuZm9yY2VDbG9zZSh0aGlzLm1lcmdlZE92ZXJsYXlTZXR0aW5ncyk7XG4gICAgICAgICAgICB0aGlzLnRhcmdldC50b0JlSGlkZGVuID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIHRydWUgaWYgdGhlIGV4ZWN1dGlvbiBpbiBvbk1vdXNlTGVhdmUgc2hvdWxkIGJlIHRlcm1pbmF0ZWQgYWZ0ZXIgdGhpcyBtZXRob2RcbiAgICBwcml2YXRlIHByZU1vdXNlTGVhdmVDaGVjaygpOiBib29sZWFuIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGFyZ2V0LnRpbWVvdXRJZCk7XG5cbiAgICAgICAgLy8gSWYgdG9vbHRpcCBpcyBhYm91dCB0byBiZSBvcGVuZWRcbiAgICAgICAgaWYgKHRoaXMudGFyZ2V0LnRvQmVTaG93bikge1xuICAgICAgICAgICAgdGhpcy50YXJnZXQudG9CZVNob3duID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnRhcmdldC50b0JlSGlkZGVuID0gZmFsc2U7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgQEhvc3RMaXN0ZW5lcignZG9jdW1lbnQ6a2V5ZG93bi5lc2NhcGUnLCBbJyRldmVudCddKVxuICAgIHB1YmxpYyBvbktleWRvd25Fc2NhcGUoKSB7XG4gICAgICAgIGNvbnN0IGhpZGluZ0FyZ3MgPSB7IHRhcmdldDogdGhpcywgdG9vbHRpcDogdGhpcy50YXJnZXQsIGNhbmNlbDogZmFsc2UgfTtcbiAgICAgICAgdGhpcy5vblRvb2x0aXBIaWRlLmVtaXQoaGlkaW5nQXJncyk7XG5cbiAgICAgICAgaWYgKGhpZGluZ0FyZ3MuY2FuY2VsKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnRhcmdldC50b0JlSGlkZGVuID0gdHJ1ZTtcbiAgICAgICAgdGhpcy50YXJnZXQuY2xvc2UoKTtcbiAgICAgICAgdGhpcy50YXJnZXQudG9CZUhpZGRlbiA9IGZhbHNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBASG9zdExpc3RlbmVyKCdjbGljaycpXG4gICAgcHVibGljIG9uQ2xpY2soKSB7XG4gICAgICAgIGlmICghdGhpcy50YXJnZXQuY29sbGFwc2VkKSB7XG4gICAgICAgICAgICBjb25zdCBoaWRpbmdBcmdzID0geyB0YXJnZXQ6IHRoaXMsIHRvb2x0aXA6IHRoaXMudGFyZ2V0LCBjYW5jZWw6IGZhbHNlIH07XG4gICAgICAgICAgICB0aGlzLm9uVG9vbHRpcEhpZGUuZW1pdChoaWRpbmdBcmdzKTtcblxuICAgICAgICAgICAgaWYgKGhpZGluZ0FyZ3MuY2FuY2VsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnRhcmdldC5mb3JjZUNsb3NlKHRoaXMubWVyZ2VkT3ZlcmxheVNldHRpbmdzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBASG9zdExpc3RlbmVyKCdtb3VzZWVudGVyJylcbiAgICBwdWJsaWMgb25Nb3VzZUVudGVyKCkge1xuICAgICAgICBpZiAodGhpcy50b29sdGlwRGlzYWJsZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY2hlY2tPdXRsZXRBbmRPdXRzaWRlQ2xpY2soKTtcbiAgICAgICAgY29uc3Qgc2hvdWxkUmV0dXJuID0gdGhpcy5wcmVNb3VzZUVudGVyQ2hlY2soKTtcbiAgICAgICAgaWYgKHNob3VsZFJldHVybikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc2hvd2luZ0FyZ3MgPSB7IHRhcmdldDogdGhpcywgdG9vbHRpcDogdGhpcy50YXJnZXQsIGNhbmNlbDogZmFsc2UgfTtcbiAgICAgICAgdGhpcy5vblRvb2x0aXBTaG93LmVtaXQoc2hvd2luZ0FyZ3MpO1xuXG4gICAgICAgIGlmIChzaG93aW5nQXJncy5jYW5jZWwpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudGFyZ2V0LnRvQmVTaG93biA9IHRydWU7XG4gICAgICAgIHRoaXMudGFyZ2V0LnRpbWVvdXRJZCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy50YXJnZXQub3Blbih0aGlzLm1lcmdlZE92ZXJsYXlTZXR0aW5ncyk7IC8vIENhbGwgb3BlbigpIG9mIElneFRvb2x0aXBEaXJlY3RpdmVcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0LnRvQmVTaG93biA9IGZhbHNlO1xuICAgICAgICB9LCB0aGlzLnNob3dEZWxheSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIEBIb3N0TGlzdGVuZXIoJ21vdXNlbGVhdmUnKVxuICAgIHB1YmxpYyBvbk1vdXNlTGVhdmUoKSB7XG4gICAgICAgIGlmICh0aGlzLnRvb2x0aXBEaXNhYmxlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jaGVja091dGxldEFuZE91dHNpZGVDbGljaygpO1xuICAgICAgICBjb25zdCBzaG91bGRSZXR1cm4gPSB0aGlzLnByZU1vdXNlTGVhdmVDaGVjaygpO1xuICAgICAgICBpZiAoc2hvdWxkUmV0dXJuIHx8IHRoaXMudGFyZ2V0LmNvbGxhcHNlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgaGlkaW5nQXJncyA9IHsgdGFyZ2V0OiB0aGlzLCB0b29sdGlwOiB0aGlzLnRhcmdldCwgY2FuY2VsOiBmYWxzZSB9O1xuICAgICAgICB0aGlzLm9uVG9vbHRpcEhpZGUuZW1pdChoaWRpbmdBcmdzKTtcblxuICAgICAgICBpZiAoaGlkaW5nQXJncy5jYW5jZWwpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudGFyZ2V0LnRvQmVIaWRkZW4gPSB0cnVlO1xuICAgICAgICB0aGlzLnRhcmdldC50aW1lb3V0SWQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0LmNsb3NlKCk7IC8vIENhbGwgY2xvc2UoKSBvZiBJZ3hUb29sdGlwRGlyZWN0aXZlXG4gICAgICAgICAgICB0aGlzLnRhcmdldC50b0JlSGlkZGVuID0gZmFsc2U7XG4gICAgICAgIH0sIHRoaXMuaGlkZURlbGF5KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgQEhvc3RMaXN0ZW5lcigndG91Y2hzdGFydCcsIFsnJGV2ZW50J10pXG4gICAgcHVibGljIG9uVG91Y2hTdGFydChldmVudCkge1xuICAgICAgICBpZiAodGhpcy50b29sdGlwRGlzYWJsZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMuc2hvd1Rvb2x0aXAoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgQEhvc3RMaXN0ZW5lcignZG9jdW1lbnQ6dG91Y2hzdGFydCcsIFsnJGV2ZW50J10pXG4gICAgcHVibGljIG9uRG9jdW1lbnRUb3VjaFN0YXJ0KGV2ZW50KSB7XG4gICAgICAgIGlmICh0aGlzLnRvb2x0aXBEaXNhYmxlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudCAhPT0gZXZlbnQudGFyZ2V0ICYmXG4gICAgICAgICAgICAhdGhpcy5uYXRpdmVFbGVtZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldClcbiAgICAgICAgKSB7XG4gICAgICAgICAgICB0aGlzLmhpZGVUb29sdGlwKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTaG93cyB0aGUgdG9vbHRpcCBieSByZXNwZWN0aW5nIHRoZSAnc2hvd0RlbGF5JyBwcm9wZXJ0eS5cbiAgICAgKlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiB0aGlzLnRvb2x0aXBUYXJnZXQuc2hvd1Rvb2x0aXAoKTtcbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBwdWJsaWMgc2hvd1Rvb2x0aXAoKSB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRhcmdldC50aW1lb3V0SWQpO1xuXG4gICAgICAgIGlmICghdGhpcy50YXJnZXQuY29sbGFwc2VkKSB7XG4gICAgICAgICAgICBjb25zdCBoaWRpbmdBcmdzID0geyB0YXJnZXQ6IHRoaXMsIHRvb2x0aXA6IHRoaXMudGFyZ2V0LCBjYW5jZWw6IGZhbHNlIH07XG4gICAgICAgICAgICB0aGlzLm9uVG9vbHRpcEhpZGUuZW1pdChoaWRpbmdBcmdzKTtcblxuICAgICAgICAgICAgaWYgKGhpZGluZ0FyZ3MuY2FuY2VsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gIGlmIGNsb3NlIGFuaW1hdGlvbiBoYXMgc3RhcnRlZCBmaW5pc2ggaXQsIG9yIGNsb3NlIHRoZSB0b29sdGlwIHdpdGggbm8gYW5pbWF0aW9uXG4gICAgICAgICAgICB0aGlzLnRhcmdldC5mb3JjZUNsb3NlKHRoaXMubWVyZ2VkT3ZlcmxheVNldHRpbmdzKTtcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0LnRvQmVIaWRkZW4gPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHNob3dpbmdBcmdzID0geyB0YXJnZXQ6IHRoaXMsIHRvb2x0aXA6IHRoaXMudGFyZ2V0LCBjYW5jZWw6IGZhbHNlIH07XG4gICAgICAgIHRoaXMub25Ub29sdGlwU2hvdy5lbWl0KHNob3dpbmdBcmdzKTtcblxuICAgICAgICBpZiAoc2hvd2luZ0FyZ3MuY2FuY2VsKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnRhcmdldC50b0JlU2hvd24gPSB0cnVlO1xuICAgICAgICB0aGlzLnRhcmdldC50aW1lb3V0SWQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0Lm9wZW4odGhpcy5tZXJnZWRPdmVybGF5U2V0dGluZ3MpOyAvLyBDYWxsIG9wZW4oKSBvZiBJZ3hUb29sdGlwRGlyZWN0aXZlXG4gICAgICAgICAgICB0aGlzLnRhcmdldC50b0JlU2hvd24gPSBmYWxzZTtcbiAgICAgICAgfSwgdGhpcy5zaG93RGVsYXkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhpZGVzIHRoZSB0b29sdGlwIGJ5IHJlc3BlY3RpbmcgdGhlICdoaWRlRGVsYXknIHByb3BlcnR5LlxuICAgICAqXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIHRoaXMudG9vbHRpcFRhcmdldC5oaWRlVG9vbHRpcCgpO1xuICAgICAqIGBgYFxuICAgICAqL1xuICAgIHB1YmxpYyBoaWRlVG9vbHRpcCgpIHtcbiAgICAgICAgaWYgKHRoaXMudGFyZ2V0LmNvbGxhcHNlZCAmJiB0aGlzLnRhcmdldC50b0JlU2hvd24pIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRhcmdldC50aW1lb3V0SWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMudGFyZ2V0LmNvbGxhcHNlZCB8fCB0aGlzLnRhcmdldC50b0JlSGlkZGVuKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBoaWRpbmdBcmdzID0geyB0YXJnZXQ6IHRoaXMsIHRvb2x0aXA6IHRoaXMudGFyZ2V0LCBjYW5jZWw6IGZhbHNlIH07XG4gICAgICAgIHRoaXMub25Ub29sdGlwSGlkZS5lbWl0KGhpZGluZ0FyZ3MpO1xuXG4gICAgICAgIGlmIChoaWRpbmdBcmdzLmNhbmNlbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy50YXJnZXQudG9CZUhpZGRlbiA9IHRydWU7XG4gICAgICAgIHRoaXMudGFyZ2V0LnRpbWVvdXRJZCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy50YXJnZXQuY2xvc2UoKTsgLy8gQ2FsbCBjbG9zZSgpIG9mIElneFRvb2x0aXBEaXJlY3RpdmVcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0LnRvQmVIaWRkZW4gPSBmYWxzZTtcbiAgICAgICAgfSwgdGhpcy5oaWRlRGVsYXkpO1xuICAgIH1cbn1cblxubGV0IE5FWFRfSUQgPSAwO1xuLyoqXG4gKiAqKklnbml0ZSBVSSBmb3IgQW5ndWxhciBUb29sdGlwKiogLVxuICogW0RvY3VtZW50YXRpb25dKGh0dHBzOi8vd3d3LmluZnJhZ2lzdGljcy5jb20vcHJvZHVjdHMvaWduaXRlLXVpLWFuZ3VsYXIvYW5ndWxhci9jb21wb25lbnRzL3Rvb2x0aXAuaHRtbClcbiAqXG4gKiBUaGUgSWduaXRlIFVJIGZvciBBbmd1bGFyIFRvb2x0aXAgZGlyZWN0aXZlIGlzIHVzZWQgdG8gbWFyayBhbiBIVE1MIGVsZW1lbnQgaW4gdGhlIG1hcmt1cCBhcyBvbmUgdGhhdCBzaG91bGQgYmVoYXZlIGFzIGEgdG9vbHRpcC5cbiAqIFRoZSB0b29sdGlwIGlzIHVzZWQgaW4gY29tYmluYXRpb24gd2l0aCB0aGUgSWduaXRlIFVJIGZvciBBbmd1bGFyIFRvb2x0aXAgVGFyZ2V0IGJ5IGFzc2lnbmluZyB0aGUgZXhwb3J0ZWQgdG9vbHRpcCByZWZlcmVuY2UgdG8gdGhlXG4gKiByZXNwZWN0aXZlIHRhcmdldCdzIHNlbGVjdG9yIHByb3BlcnR5LlxuICpcbiAqIEV4YW1wbGU6XG4gKiBgYGBodG1sXG4gKiA8YnV0dG9uIFtpZ3hUb29sdGlwVGFyZ2V0XT1cInRvb2x0aXBSZWZcIj5Ib3ZlciBtZTwvYnV0dG9uPlxuICogPHNwYW4gI3Rvb2x0aXBSZWY9XCJ0b29sdGlwXCIgaWd4VG9vbHRpcD5IZWxsbyB0aGVyZSwgSSBhbSBhIHRvb2x0aXAhPC9zcGFuPlxuICogYGBgXG4gKi9cbkBEaXJlY3RpdmUoe1xuICAgIGV4cG9ydEFzOiAndG9vbHRpcCcsXG4gICAgc2VsZWN0b3I6ICdbaWd4VG9vbHRpcF0nXG59KVxuZXhwb3J0IGNsYXNzIElneFRvb2x0aXBEaXJlY3RpdmUgZXh0ZW5kcyBJZ3hUb2dnbGVEaXJlY3RpdmUge1xuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyB0aW1lb3V0SWQ7XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICogUmV0dXJucyB3aGV0aGVyIGNsb3NlIHRpbWUgb3V0IGhhcyBzdGFydGVkXG4gICAgICovXG4gICAgcHVibGljIHRvQmVIaWRkZW4gPSBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKiBSZXR1cm5zIHdoZXRoZXIgb3BlbiB0aW1lIG91dCBoYXMgc3RhcnRlZFxuICAgICAqL1xuICAgIHB1YmxpYyB0b0JlU2hvd24gPSBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBASG9zdEJpbmRpbmcoJ2NsYXNzLmlneC10b29sdGlwLS1oaWRkZW4nKVxuICAgIHB1YmxpYyBnZXQgaGlkZGVuQ2xhc3MoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbGxhcHNlZDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pZ3gtdG9vbHRpcC0tZGVza3RvcCcpXG4gICAgcHVibGljIGdldCBkZWZhdWx0Q2xhc3MoKSB7XG4gICAgICAgIHJldHVybiAhdGhpcy5jb2xsYXBzZWQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cy9zZXRzIGFueSB0b29sdGlwIHJlbGF0ZWQgZGF0YS5cbiAgICAgKiBUaGUgJ2NvbnRleHQnIGNhbiBiZSB1c2VkIGZvciBzdG9yaW5nIGFueSBpbmZvcm1hdGlvbiB0aGF0IGlzIG5lY2Vzc2FyeVxuICAgICAqIHRvIGFjY2VzcyB3aGVuIHdvcmtpbmcgd2l0aCB0aGUgdG9vbHRpcC5cbiAgICAgKlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiAvLyBnZXRcbiAgICAgKiBsZXQgdG9vbHRpcENvbnRleHQgPSB0aGlzLnRvb2x0aXAuY29udGV4dDtcbiAgICAgKiBgYGBcbiAgICAgKlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiAvLyBzZXRcbiAgICAgKiB0aGlzLnRvb2x0aXAuY29udGV4dCA9IFwiVG9vbHRpcCdzIGNvbnRleHRcIjtcbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBASW5wdXQoJ2NvbnRleHQnKVxuICAgIHB1YmxpYyBjb250ZXh0O1xuXG4gICAgLyoqXG4gICAgICogSWRlbnRpZmllciBmb3IgdGhlIHRvb2x0aXAuXG4gICAgICogSWYgdGhpcyBpcyBwcm9wZXJ0eSBpcyBub3QgZXhwbGljaXRseSBzZXQsIGl0IHdpbGwgYmUgYXV0b21hdGljYWxseSBnZW5lcmF0ZWQuXG4gICAgICpcbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogbGV0IHRvb2x0aXBJZCA9IHRoaXMudG9vbHRpcC5pZDtcbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBASG9zdEJpbmRpbmcoJ2F0dHIuaWQnKVxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGlkID0gYGlneC10b29sdGlwLSR7TkVYVF9JRCsrfWA7XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIHJvbGUgYXR0cmlidXRlIG9mIHRoZSB0b29sdGlwLlxuICAgICAqXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGxldCB0b29sdGlwUm9sZSA9IHRoaXMudG9vbHRpcC5yb2xlO1xuICAgICAqIGBgYFxuICAgICAqL1xuICAgIEBIb3N0QmluZGluZygnYXR0ci5yb2xlJylcbiAgICBwdWJsaWMgZ2V0IHJvbGUoKSB7XG4gICAgICAgIHJldHVybiAndG9vbHRpcCc7XG4gICAgfVxuXG4gICAgLyoqIEBoaWRkZW4gKi9cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICAgICAgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICAgICAgQEluamVjdChJZ3hPdmVybGF5U2VydmljZSkgb3ZlcmxheVNlcnZpY2U6IElneE92ZXJsYXlTZXJ2aWNlLFxuICAgICAgICBAT3B0aW9uYWwoKSBuYXZpZ2F0aW9uU2VydmljZTogSWd4TmF2aWdhdGlvblNlcnZpY2UpIHtcbiAgICAgICAgLy8gRC5QLiBjb25zdHJ1Y3RvciBkdXBsaWNhdGlvbiBkdWUgdG8gZXM2IGNvbXBpbGF0aW9uLCBtaWdodCBiZSBvYnNvbGV0ZSBpbiB0aGUgZnV0dXJlXG4gICAgICAgIHN1cGVyKGVsZW1lbnRSZWYsIGNkciwgb3ZlcmxheVNlcnZpY2UsIG5hdmlnYXRpb25TZXJ2aWNlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJZiB0aGVyZSBpcyBvcGVuIGFuaW1hdGlvbiBpbiBwcm9ncmVzcyB0aGlzIG1ldGhvZCB3aWxsIGZpbmlzaCBpcy5cbiAgICAgKiBJZiB0aGVyZSBpcyBubyBvcGVuIGFuaW1hdGlvbiBpbiBwcm9ncmVzcyB0aGlzIG1ldGhvZCB3aWxsIG9wZW4gdGhlIHRvZ2dsZSB3aXRoIG5vIGFuaW1hdGlvbi5cbiAgICAgKiBAcGFyYW0gb3ZlcmxheVNldHRpbmdzIHNldHRpbmcgdG8gdXNlIGZvciBvcGVuaW5nIHRoZSB0b2dnbGVcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgZm9yY2VPcGVuKG92ZXJsYXlTZXR0aW5ncz86IE92ZXJsYXlTZXR0aW5ncykge1xuICAgICAgICBjb25zdCBpbmZvID0gdGhpcy5vdmVybGF5U2VydmljZS5nZXRPdmVybGF5QnlJZCh0aGlzLl9vdmVybGF5SWQpO1xuICAgICAgICBjb25zdCBoYXNPcGVuQW5pbWF0aW9uID0gaW5mbyA/IGluZm8ub3BlbkFuaW1hdGlvblBsYXllciA6IGZhbHNlO1xuICAgICAgICBpZiAoaGFzT3BlbkFuaW1hdGlvbikge1xuICAgICAgICAgICAgaW5mby5vcGVuQW5pbWF0aW9uUGxheWVyLmZpbmlzaCgpO1xuICAgICAgICAgICAgaW5mby5vcGVuQW5pbWF0aW9uUGxheWVyLnJlc2V0KCk7XG4gICAgICAgICAgICBpbmZvLm9wZW5BbmltYXRpb25QbGF5ZXIgPSBudWxsO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuY29sbGFwc2VkKSB7XG4gICAgICAgICAgICBjb25zdCBhbmltYXRpb24gPSBvdmVybGF5U2V0dGluZ3MucG9zaXRpb25TdHJhdGVneS5zZXR0aW5ncy5vcGVuQW5pbWF0aW9uO1xuICAgICAgICAgICAgb3ZlcmxheVNldHRpbmdzLnBvc2l0aW9uU3RyYXRlZ3kuc2V0dGluZ3Mub3BlbkFuaW1hdGlvbiA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLm9wZW4ob3ZlcmxheVNldHRpbmdzKTtcbiAgICAgICAgICAgIG92ZXJsYXlTZXR0aW5ncy5wb3NpdGlvblN0cmF0ZWd5LnNldHRpbmdzLm9wZW5BbmltYXRpb24gPSBhbmltYXRpb247XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJZiB0aGVyZSBpcyBjbG9zZSBhbmltYXRpb24gaW4gcHJvZ3Jlc3MgdGhpcyBtZXRob2Qgd2lsbCBmaW5pc2ggaXMuXG4gICAgICogSWYgdGhlcmUgaXMgbm8gY2xvc2UgYW5pbWF0aW9uIGluIHByb2dyZXNzIHRoaXMgbWV0aG9kIHdpbGwgY2xvc2UgdGhlIHRvZ2dsZSB3aXRoIG5vIGFuaW1hdGlvbi5cbiAgICAgKiBAcGFyYW0gb3ZlcmxheVNldHRpbmdzIHNldHRpbmdzIHRvIHVzZSBmb3IgY2xvc2luZyB0aGUgdG9nZ2xlXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGZvcmNlQ2xvc2Uob3ZlcmxheVNldHRpbmdzPzogT3ZlcmxheVNldHRpbmdzKSB7XG4gICAgICAgIGNvbnN0IGluZm8gPSB0aGlzLm92ZXJsYXlTZXJ2aWNlLmdldE92ZXJsYXlCeUlkKHRoaXMuX292ZXJsYXlJZCk7XG4gICAgICAgIGNvbnN0IGhhc0Nsb3NlQW5pbWF0aW9uID0gaW5mbyA/IGluZm8uY2xvc2VBbmltYXRpb25QbGF5ZXIgOiBmYWxzZTtcblxuICAgICAgICBpZiAoaGFzQ2xvc2VBbmltYXRpb24pIHtcbiAgICAgICAgICAgIGluZm8uY2xvc2VBbmltYXRpb25QbGF5ZXIuZmluaXNoKCk7XG4gICAgICAgICAgICBpbmZvLmNsb3NlQW5pbWF0aW9uUGxheWVyLnJlc2V0KCk7XG4gICAgICAgICAgICBpbmZvLmNsb3NlQW5pbWF0aW9uUGxheWVyID0gbnVsbDtcbiAgICAgICAgfSBlbHNlIGlmICghdGhpcy5jb2xsYXBzZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IGFuaW1hdGlvbiA9IG92ZXJsYXlTZXR0aW5ncy5wb3NpdGlvblN0cmF0ZWd5LnNldHRpbmdzLmNsb3NlQW5pbWF0aW9uO1xuICAgICAgICAgICAgb3ZlcmxheVNldHRpbmdzLnBvc2l0aW9uU3RyYXRlZ3kuc2V0dGluZ3MuY2xvc2VBbmltYXRpb24gPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgICAgICAgb3ZlcmxheVNldHRpbmdzLnBvc2l0aW9uU3RyYXRlZ3kuc2V0dGluZ3MuY2xvc2VBbmltYXRpb24gPSBhbmltYXRpb247XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5ATmdNb2R1bGUoe1xuICAgIGRlY2xhcmF0aW9uczogW0lneFRvb2x0aXBEaXJlY3RpdmUsIElneFRvb2x0aXBUYXJnZXREaXJlY3RpdmVdLFxuICAgIGV4cG9ydHM6IFtJZ3hUb29sdGlwRGlyZWN0aXZlLCBJZ3hUb29sdGlwVGFyZ2V0RGlyZWN0aXZlXSxcbiAgICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcbiAgICBwcm92aWRlcnM6IFtJZ3hPdmVybGF5U2VydmljZV1cbn0pXG5leHBvcnQgY2xhc3MgSWd4VG9vbHRpcE1vZHVsZSB7IH1cblxuIl19