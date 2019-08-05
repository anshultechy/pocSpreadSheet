/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, HostListener, ElementRef, HostBinding, Output, EventEmitter, TemplateRef } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { SliderHandle } from '../slider.common';
import { Subject } from 'rxjs';
/**
 * @hidden
 */
var IgxSliderThumbComponent = /** @class */ (function () {
    function IgxSliderThumbComponent(_elementRef) {
        this._elementRef = _elementRef;
        this._isActiveLabel = false;
        this._isPressed = false;
        this._destroy$ = new Subject();
        this.isActive = false;
        this.onThumbValueChange = new EventEmitter();
        this.onChange = new EventEmitter();
        this.onHoverChange = new EventEmitter();
        this.tabindex = 0;
        this.zIndex = 0;
    }
    Object.defineProperty(IgxSliderThumbComponent.prototype, "thumbPositionX", {
        get: /**
         * @private
         * @return {?}
         */
        function () {
            /** @type {?} */
            var thumbBounderies = this.nativeElement.getBoundingClientRect();
            /** @type {?} */
            var thumbCenter = (thumbBounderies.right - thumbBounderies.left) / 2;
            return thumbBounderies.left + thumbCenter;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxSliderThumbComponent.prototype, "thumbFromClass", {
        get: /**
         * @return {?}
         */
        function () {
            return this.type === SliderHandle.FROM;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxSliderThumbComponent.prototype, "thumbToClass", {
        get: /**
         * @return {?}
         */
        function () {
            return this.type === SliderHandle.TO;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxSliderThumbComponent.prototype, "thumbFromActiveClass", {
        get: /**
         * @return {?}
         */
        function () {
            return this.type === SliderHandle.FROM && this._isActiveLabel;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxSliderThumbComponent.prototype, "thumbToActiveClass", {
        get: /**
         * @return {?}
         */
        function () {
            return this.type === SliderHandle.TO && this._isActiveLabel;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxSliderThumbComponent.prototype, "thumbPressedClass", {
        get: /**
         * @return {?}
         */
        function () {
            return this.isActive && this._isPressed;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxSliderThumbComponent.prototype, "nativeElement", {
        get: /**
         * @return {?}
         */
        function () {
            return this._elementRef.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxSliderThumbComponent.prototype, "destroy", {
        get: /**
         * @return {?}
         */
        function () {
            return this._destroy$;
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
    IgxSliderThumbComponent.prototype.ngOnInit = /**
     * @hidden
     * @return {?}
     */
    function () {
        var _this = this;
        this.onPan
            .pipe(takeUntil(this._destroy$))
            .subscribe(function (mouseX) {
            return _this.updateThumbValue(mouseX);
        });
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @return {?}
     */
    IgxSliderThumbComponent.prototype.ngOnDestroy = /**
     * @hidden
     * @return {?}
     */
    function () {
        this._destroy$.next(true);
        this._destroy$.complete();
    };
    /**
     * @return {?}
     */
    IgxSliderThumbComponent.prototype.onPinterEnter = /**
     * @return {?}
     */
    function () {
        this.onHoverChange.emit(true);
    };
    /**
     * @return {?}
     */
    IgxSliderThumbComponent.prototype.onPointerLeave = /**
     * @return {?}
     */
    function () {
        this.onHoverChange.emit(false);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    IgxSliderThumbComponent.prototype.onKeyDown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.disabled) {
            return;
        }
        /** @type {?} */
        var increment = 0;
        if (event.key.endsWith('Left')) {
            increment = this.step * -1;
        }
        else if (event.key.endsWith('Right')) {
            increment = this.step;
        }
        else {
            return;
        }
        this.onChange.emit();
        this.onThumbValueChange.emit(increment);
    };
    /**
     * @return {?}
     */
    IgxSliderThumbComponent.prototype.onBlur = /**
     * @return {?}
     */
    function () {
        this.isActive = false;
        this.zIndex = 0;
    };
    /**
     * @return {?}
     */
    IgxSliderThumbComponent.prototype.onFocusListener = /**
     * @return {?}
     */
    function () {
        this.isActive = true;
        this.zIndex = 1;
    };
    /**
     * Show thumb label and ripple.
     */
    /**
     * Show thumb label and ripple.
     * @return {?}
     */
    IgxSliderThumbComponent.prototype.showThumbIndicators = /**
     * Show thumb label and ripple.
     * @return {?}
     */
    function () {
        this.toggleThumbIndicators(true);
    };
    /**
     * Hide thumb label and ripple.
     */
    /**
     * Hide thumb label and ripple.
     * @return {?}
     */
    IgxSliderThumbComponent.prototype.hideThumbIndicators = /**
     * Hide thumb label and ripple.
     * @return {?}
     */
    function () {
        this.toggleThumbIndicators(false);
    };
    /**
     * @private
     * @param {?} mouseX
     * @return {?}
     */
    IgxSliderThumbComponent.prototype.updateThumbValue = /**
     * @private
     * @param {?} mouseX
     * @return {?}
     */
    function (mouseX) {
        /** @type {?} */
        var updateValue = this.calculateTrackUpdate(mouseX);
        if (this.isActive && updateValue !== 0) {
            this.onThumbValueChange.emit(updateValue);
        }
    };
    /**
     * @private
     * @param {?} mouseX
     * @return {?}
     */
    IgxSliderThumbComponent.prototype.calculateTrackUpdate = /**
     * @private
     * @param {?} mouseX
     * @return {?}
     */
    function (mouseX) {
        /** @type {?} */
        var scaleX = mouseX - this.thumbPositionX;
        /** @type {?} */
        var stepDistanceCenter = this.stepDistance / 2;
        // If the thumb scale range (slider update) is less thàn a half step,
        // the position stays the same.
        /** @type {?} */
        var scaleXPositive = Math.abs(scaleX);
        if (scaleXPositive < stepDistanceCenter) {
            return 0;
        }
        return this.stepToProceed(scaleX, this.stepDistance);
    };
    /**
     * @private
     * @param {?} scaleX
     * @param {?} stepDist
     * @return {?}
     */
    IgxSliderThumbComponent.prototype.stepToProceed = /**
     * @private
     * @param {?} scaleX
     * @param {?} stepDist
     * @return {?}
     */
    function (scaleX, stepDist) {
        return Math.round(scaleX / stepDist) * this.step;
    };
    /**
     * @private
     * @param {?} visible
     * @return {?}
     */
    IgxSliderThumbComponent.prototype.toggleThumbIndicators = /**
     * @private
     * @param {?} visible
     * @return {?}
     */
    function (visible) {
        this._isPressed = visible;
        if (!this.continuous) {
            this._isActiveLabel = visible;
        }
    };
    IgxSliderThumbComponent.decorators = [
        { type: Component, args: [{
                    selector: 'igx-thumb',
                    template: "<div class=\"label\">\n    <ng-container *ngTemplateOutlet=\"templateRef ? templateRef : thumbFromDefaultTemplate; context: context\"></ng-container>\n</div>\n<div class=\"dot\"></div>\n\n\n<ng-template #thumbFromDefaultTemplate>\n    {{ value }}\n</ng-template>\n"
                }] }
    ];
    /** @nocollapse */
    IgxSliderThumbComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    IgxSliderThumbComponent.propDecorators = {
        value: [{ type: Input }],
        continuous: [{ type: Input }],
        thumbLabelVisibilityDuration: [{ type: Input }],
        disabled: [{ type: Input }],
        onPan: [{ type: Input }],
        stepDistance: [{ type: Input }],
        step: [{ type: Input }],
        templateRef: [{ type: Input }],
        context: [{ type: Input }],
        type: [{ type: Input }],
        onThumbValueChange: [{ type: Output }],
        onChange: [{ type: Output }],
        onHoverChange: [{ type: Output }],
        tabindex: [{ type: HostBinding, args: ['attr.tabindex',] }],
        zIndex: [{ type: HostBinding, args: ['attr.z-index',] }],
        thumbFromClass: [{ type: HostBinding, args: ['class.igx-slider__thumb-from',] }],
        thumbToClass: [{ type: HostBinding, args: ['class.igx-slider__thumb-to',] }],
        thumbFromActiveClass: [{ type: HostBinding, args: ['class.igx-slider__thumb-from--active',] }],
        thumbToActiveClass: [{ type: HostBinding, args: ['class.igx-slider__thumb-to--active',] }],
        thumbPressedClass: [{ type: HostBinding, args: ['class.igx-slider__thumb--pressed',] }],
        onPinterEnter: [{ type: HostListener, args: ['pointerenter',] }],
        onPointerLeave: [{ type: HostListener, args: ['pointerleave',] }],
        onKeyDown: [{ type: HostListener, args: ['keydown', ['$event'],] }],
        onBlur: [{ type: HostListener, args: ['blur',] }],
        onFocusListener: [{ type: HostListener, args: ['focus',] }]
    };
    return IgxSliderThumbComponent;
}());
export { IgxSliderThumbComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    IgxSliderThumbComponent.prototype._isActiveLabel;
    /**
     * @type {?}
     * @private
     */
    IgxSliderThumbComponent.prototype._isPressed;
    /**
     * @type {?}
     * @private
     */
    IgxSliderThumbComponent.prototype._destroy$;
    /** @type {?} */
    IgxSliderThumbComponent.prototype.isActive;
    /** @type {?} */
    IgxSliderThumbComponent.prototype.value;
    /** @type {?} */
    IgxSliderThumbComponent.prototype.continuous;
    /** @type {?} */
    IgxSliderThumbComponent.prototype.thumbLabelVisibilityDuration;
    /** @type {?} */
    IgxSliderThumbComponent.prototype.disabled;
    /** @type {?} */
    IgxSliderThumbComponent.prototype.onPan;
    /** @type {?} */
    IgxSliderThumbComponent.prototype.stepDistance;
    /** @type {?} */
    IgxSliderThumbComponent.prototype.step;
    /** @type {?} */
    IgxSliderThumbComponent.prototype.templateRef;
    /** @type {?} */
    IgxSliderThumbComponent.prototype.context;
    /** @type {?} */
    IgxSliderThumbComponent.prototype.type;
    /** @type {?} */
    IgxSliderThumbComponent.prototype.onThumbValueChange;
    /** @type {?} */
    IgxSliderThumbComponent.prototype.onChange;
    /** @type {?} */
    IgxSliderThumbComponent.prototype.onHoverChange;
    /** @type {?} */
    IgxSliderThumbComponent.prototype.tabindex;
    /** @type {?} */
    IgxSliderThumbComponent.prototype.zIndex;
    /**
     * @type {?}
     * @private
     */
    IgxSliderThumbComponent.prototype._elementRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGh1bWItc2xpZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lnbml0ZXVpLWFuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvc2xpZGVyL3RodW1iL3RodW1iLXNsaWRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDSCxTQUFTLEVBQ1QsS0FBSyxFQUNMLFlBQVksRUFDWixVQUFVLEVBQ1YsV0FBVyxFQUNYLE1BQU0sRUFDTixZQUFZLEVBR1osV0FBVyxFQUNkLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDaEQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQzs7OztBQUsvQjtJQWdHSSxpQ0FBb0IsV0FBdUI7UUFBdkIsZ0JBQVcsR0FBWCxXQUFXLENBQVk7UUExRm5DLG1CQUFjLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFDbkIsY0FBUyxHQUFHLElBQUksT0FBTyxFQUFXLENBQUM7UUFRcEMsYUFBUSxHQUFHLEtBQUssQ0FBQztRQWlDakIsdUJBQWtCLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUdoRCxhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUduQyxrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7UUFHNUMsYUFBUSxHQUFHLENBQUMsQ0FBQztRQUdiLFdBQU0sR0FBRyxDQUFDLENBQUM7SUFtQzZCLENBQUM7SUF0RmhELHNCQUFZLG1EQUFjOzs7OztRQUExQjs7Z0JBQ1UsZUFBZSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMscUJBQXFCLEVBQUU7O2dCQUM1RCxXQUFXLEdBQUcsQ0FBQyxlQUFlLENBQUMsS0FBSyxHQUFHLGVBQWUsQ0FBQyxJQUFJLENBQUMsR0FBRyxD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O0lBRTVCLHVDQUNvQjs7SUFFcEIsOENBQ3FDOztJQUVyQywwQ0FDb0I7O0lBRXBCLHVDQUMwQjs7SUFFMUIscURBQ3VEOztJQUV2RCwyQ0FDMEM7O0lBRTFDLGdEQUNtRDs7SUFFbkQsMkNBQ29COztJQUVwQix5Q0FDa0I7Ozs7O0lBbUNOLDhDQUErQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICAgQ29tcG9uZW50LFxuICAgIElucHV0LFxuICAgIEhvc3RMaXN0ZW5lcixcbiAgICBFbGVtZW50UmVmLFxuICAgIEhvc3RCaW5kaW5nLFxuICAgIE91dHB1dCxcbiAgICBFdmVudEVtaXR0ZXIsXG4gICAgT25Jbml0LFxuICAgIE9uRGVzdHJveSxcbiAgICBUZW1wbGF0ZVJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFNsaWRlckhhbmRsZSB9IGZyb20gJy4uL3NsaWRlci5jb21tb24nO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdpZ3gtdGh1bWInLFxuICAgIHRlbXBsYXRlVXJsOiAndGh1bWItc2xpZGVyLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgSWd4U2xpZGVyVGh1bWJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgICBwcml2YXRlIF9pc0FjdGl2ZUxhYmVsID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBfaXNQcmVzc2VkID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBfZGVzdHJveSQgPSBuZXcgU3ViamVjdDxib29sZWFuPigpO1xuXG4gICAgcHJpdmF0ZSBnZXQgdGh1bWJQb3NpdGlvblgoKSB7XG4gICAgICAgIGNvbnN0IHRodW1iQm91bmRlcmllcyA9IHRoaXMubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgY29uc3QgdGh1bWJDZW50ZXIgPSAodGh1bWJCb3VuZGVyaWVzLnJpZ2h0IC0gdGh1bWJCb3VuZGVyaWVzLmxlZnQpIC8gMjtcbiAgICAgICAgcmV0dXJuIHRodW1iQm91bmRlcmllcy5sZWZ0ICsgdGh1bWJDZW50ZXI7XG4gICAgfVxuXG4gICAgcHVibGljIGlzQWN0aXZlID0gZmFsc2U7XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyB2YWx1ZTogbnVtYmVyO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgY29udGludW91czogYm9vbGVhbjtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHRodW1iTGFiZWxWaXNpYmlsaXR5RHVyYXRpb247XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBkaXNhYmxlZDogYm9vbGVhbjtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIG9uUGFuOiBTdWJqZWN0PG51bWJlcj47XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBzdGVwRGlzdGFuY2U6IG51bWJlcjtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHN0ZXA6IG51bWJlcjtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgY29udGV4dDogYW55O1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgdHlwZTogU2xpZGVySGFuZGxlO1xuXG4gICAgQE91dHB1dCgpXG4gICAgcHVibGljIG9uVGh1bWJWYWx1ZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuXG4gICAgQE91dHB1dCgpXG4gICAgcHVibGljIG9uQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgICBAT3V0cHV0KClcbiAgICBwdWJsaWMgb25Ib3ZlckNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcblxuICAgIEBIb3N0QmluZGluZygnYXR0ci50YWJpbmRleCcpXG4gICAgcHVibGljIHRhYmluZGV4ID0gMDtcblxuICAgIEBIb3N0QmluZGluZygnYXR0ci56LWluZGV4JylcbiAgICBwdWJsaWMgekluZGV4ID0gMDtcblxuICAgIEBIb3N0QmluZGluZygnY2xhc3MuaWd4LXNsaWRlcl9fdGh1bWItZnJvbScpXG4gICAgcHVibGljIGdldCB0aHVtYkZyb21DbGFzcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudHlwZSA9PT0gU2xpZGVySGFuZGxlLkZST007XG4gICAgfVxuXG4gICAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pZ3gtc2xpZGVyX190aHVtYi10bycpXG4gICAgcHVibGljIGdldCB0aHVtYlRvQ2xhc3MoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnR5cGUgPT09IFNsaWRlckhhbmRsZS5UTztcbiAgICB9XG5cbiAgICBASG9zdEJpbmRpbmcoJ2NsYXNzLmlneC1zbGlkZXJfX3RodW1iLWZyb20tLWFjdGl2ZScpXG4gICAgcHVibGljIGdldCB0aHVtYkZyb21BY3RpdmVDbGFzcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudHlwZSA9PT0gU2xpZGVySGFuZGxlLkZST00gJiYgdGhpcy5faXNBY3RpdmVMYWJlbDtcbiAgICB9XG5cbiAgICBASG9zdEJpbmRpbmcoJ2NsYXNzLmlneC1zbGlkZXJfX3RodW1iLXRvLS1hY3RpdmUnKVxuICAgIHB1YmxpYyBnZXQgdGh1bWJUb0FjdGl2ZUNsYXNzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50eXBlID09PSBTbGlkZXJIYW5kbGUuVE8gJiYgdGhpcy5faXNBY3RpdmVMYWJlbDtcbiAgICB9XG5cbiAgICBASG9zdEJpbmRpbmcoJ2NsYXNzLmlneC1zbGlkZXJfX3RodW1iLS1wcmVzc2VkJylcbiAgICBwdWJsaWMgZ2V0IHRodW1iUHJlc3NlZENsYXNzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pc0FjdGl2ZSAmJiB0aGlzLl9pc1ByZXNzZWQ7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBuYXRpdmVFbGVtZW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgZGVzdHJveSgpOiBTdWJqZWN0PGJvb2xlYW4+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Rlc3Ryb3kkO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHsgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5vblBhblxuICAgICAgICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuX2Rlc3Ryb3kkKSlcbiAgICAgICAgICAgIC5zdWJzY3JpYmUobW91c2VYID0+XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVUaHVtYlZhbHVlKG1vdXNlWClcbiAgICAgICAgICAgICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5fZGVzdHJveSQubmV4dCh0cnVlKTtcbiAgICAgICAgdGhpcy5fZGVzdHJveSQuY29tcGxldGUoKTtcbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKCdwb2ludGVyZW50ZXInKVxuICAgIHB1YmxpYyBvblBpbnRlckVudGVyKCkge1xuICAgICAgICB0aGlzLm9uSG92ZXJDaGFuZ2UuZW1pdCh0cnVlKTtcbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKCdwb2ludGVybGVhdmUnKVxuICAgIHB1YmxpYyBvblBvaW50ZXJMZWF2ZSgpIHtcbiAgICAgICAgdGhpcy5vbkhvdmVyQ2hhbmdlLmVtaXQoZmFsc2UpO1xuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoJ2tleWRvd24nLCBbJyRldmVudCddKVxuICAgIHB1YmxpYyBvbktleURvd24oZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICAgICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBpbmNyZW1lbnQgPSAwO1xuICAgICAgICBpZiAoZXZlbnQua2V5LmVuZHNXaXRoKCdMZWZ0JykpIHtcbiAgICAgICAgICAgIGluY3JlbWVudCA9IHRoaXMuc3RlcCAqIC0gMTtcbiAgICAgICAgfSBlbHNlIGlmIChldmVudC5rZXkuZW5kc1dpdGgoJ1JpZ2h0JykpIHtcbiAgICAgICAgICAgIGluY3JlbWVudCA9IHRoaXMuc3RlcDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMub25DaGFuZ2UuZW1pdCgpO1xuICAgICAgICB0aGlzLm9uVGh1bWJWYWx1ZUNoYW5nZS5lbWl0KGluY3JlbWVudCk7XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcignYmx1cicpXG4gICAgcHVibGljIG9uQmx1cigpIHtcbiAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnpJbmRleCA9IDA7XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcignZm9jdXMnKVxuICAgIHB1YmxpYyBvbkZvY3VzTGlzdGVuZXIoKSB7XG4gICAgICAgIHRoaXMuaXNBY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLnpJbmRleCA9IDE7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2hvdyB0aHVtYiBsYWJlbCBhbmQgcmlwcGxlLlxuICAgICAqL1xuICAgIHB1YmxpYyBzaG93VGh1bWJJbmRpY2F0b3JzKCkge1xuICAgICAgICB0aGlzLnRvZ2dsZVRodW1iSW5kaWNhdG9ycyh0cnVlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIaWRlIHRodW1iIGxhYmVsIGFuZCByaXBwbGUuXG4gICAgICovXG4gICAgcHVibGljIGhpZGVUaHVtYkluZGljYXRvcnMoKSB7XG4gICAgICAgIHRoaXMudG9nZ2xlVGh1bWJJbmRpY2F0b3JzKGZhbHNlKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHVwZGF0ZVRodW1iVmFsdWUobW91c2VYOiBudW1iZXIpIHtcbiAgICAgICAgY29uc3QgdXBkYXRlVmFsdWUgPSB0aGlzLmNhbGN1bGF0ZVRyYWNrVXBkYXRlKG1vdXNlWCk7XG4gICAgICAgIGlmICh0aGlzLmlzQWN0aXZlICYmIHVwZGF0ZVZhbHVlICE9PSAwKSB7XG4gICAgICAgICAgICB0aGlzLm9uVGh1bWJWYWx1ZUNoYW5nZS5lbWl0KHVwZGF0ZVZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgY2FsY3VsYXRlVHJhY2tVcGRhdGUobW91c2VYOiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICBjb25zdCBzY2FsZVggPSBtb3VzZVggLSB0aGlzLnRodW1iUG9zaXRpb25YO1xuICAgICAgICBjb25zdCBzdGVwRGlzdGFuY2VDZW50ZXIgPSB0aGlzLnN0ZXBEaXN0YW5jZSAvIDI7XG5cbiAgICAgICAgLy8gSWYgdGhlIHRodW1iIHNjYWxlIHJhbmdlIChzbGlkZXIgdXBkYXRlKSBpcyBsZXNzIHRow6BuIGEgaGFsZiBzdGVwLFxuICAgICAgICAvLyB0aGUgcG9zaXRpb24gc3RheXMgdGhlIHNhbWUuXG4gICAgICAgIGNvbnN0IHNjYWxlWFBvc2l0aXZlID0gTWF0aC5hYnMoc2NhbGVYKTtcbiAgICAgICAgaWYgKHNjYWxlWFBvc2l0aXZlIDwgc3RlcERpc3RhbmNlQ2VudGVyKSB7XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLnN0ZXBUb1Byb2NlZWQoc2NhbGVYLCB0aGlzLnN0ZXBEaXN0YW5jZSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdGVwVG9Qcm9jZWVkKHNjYWxlWCwgc3RlcERpc3QpIHtcbiAgICAgICAgcmV0dXJuIE1hdGgucm91bmQoc2NhbGVYIC8gc3RlcERpc3QpICogdGhpcy5zdGVwO1xuICAgIH1cblxuICAgIHByaXZhdGUgdG9nZ2xlVGh1bWJJbmRpY2F0b3JzKHZpc2libGU6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5faXNQcmVzc2VkID0gdmlzaWJsZTtcblxuICAgICAgICBpZiAoIXRoaXMuY29udGludW91cykge1xuICAgICAgICAgICAgdGhpcy5faXNBY3RpdmVMYWJlbCA9IHZpc2libGU7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=