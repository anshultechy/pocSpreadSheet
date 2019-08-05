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
export class IgxSliderThumbComponent {
    /**
     * @param {?} _elementRef
     */
    constructor(_elementRef) {
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
    /**
     * @private
     * @return {?}
     */
    get thumbPositionX() {
        /** @type {?} */
        const thumbBounderies = this.nativeElement.getBoundingClientRect();
        /** @type {?} */
        const thumbCenter = (thumbBounderies.right - thumbBounderies.left) / 2;
        return thumbBounderies.left + thumbCenter;
    }
    /**
     * @return {?}
     */
    get thumbFromClass() {
        return this.type === SliderHandle.FROM;
    }
    /**
     * @return {?}
     */
    get thumbToClass() {
        return this.type === SliderHandle.TO;
    }
    /**
     * @return {?}
     */
    get thumbFromActiveClass() {
        return this.type === SliderHandle.FROM && this._isActiveLabel;
    }
    /**
     * @return {?}
     */
    get thumbToActiveClass() {
        return this.type === SliderHandle.TO && this._isActiveLabel;
    }
    /**
     * @return {?}
     */
    get thumbPressedClass() {
        return this.isActive && this._isPressed;
    }
    /**
     * @return {?}
     */
    get nativeElement() {
        return this._elementRef.nativeElement;
    }
    /**
     * @return {?}
     */
    get destroy() {
        return this._destroy$;
    }
    /**
     * @hidden
     * @return {?}
     */
    ngOnInit() {
        this.onPan
            .pipe(takeUntil(this._destroy$))
            .subscribe(mouseX => this.updateThumbValue(mouseX));
    }
    /**
     * @hidden
     * @return {?}
     */
    ngOnDestroy() {
        this._destroy$.next(true);
        this._destroy$.complete();
    }
    /**
     * @return {?}
     */
    onPinterEnter() {
        this.onHoverChange.emit(true);
    }
    /**
     * @return {?}
     */
    onPointerLeave() {
        this.onHoverChange.emit(false);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onKeyDown(event) {
        if (this.disabled) {
            return;
        }
        /** @type {?} */
        let increment = 0;
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
    }
    /**
     * @return {?}
     */
    onBlur() {
        this.isActive = false;
        this.zIndex = 0;
    }
    /**
     * @return {?}
     */
    onFocusListener() {
        this.isActive = true;
        this.zIndex = 1;
    }
    /**
     * Show thumb label and ripple.
     * @return {?}
     */
    showThumbIndicators() {
        this.toggleThumbIndicators(true);
    }
    /**
     * Hide thumb label and ripple.
     * @return {?}
     */
    hideThumbIndicators() {
        this.toggleThumbIndicators(false);
    }
    /**
     * @private
     * @param {?} mouseX
     * @return {?}
     */
    updateThumbValue(mouseX) {
        /** @type {?} */
        const updateValue = this.calculateTrackUpdate(mouseX);
        if (this.isActive && updateValue !== 0) {
            this.onThumbValueChange.emit(updateValue);
        }
    }
    /**
     * @private
     * @param {?} mouseX
     * @return {?}
     */
    calculateTrackUpdate(mouseX) {
        /** @type {?} */
        const scaleX = mouseX - this.thumbPositionX;
        /** @type {?} */
        const stepDistanceCenter = this.stepDistance / 2;
        // If the thumb scale range (slider update) is less thàn a half step,
        // the position stays the same.
        /** @type {?} */
        const scaleXPositive = Math.abs(scaleX);
        if (scaleXPositive < stepDistanceCenter) {
            return 0;
        }
        return this.stepToProceed(scaleX, this.stepDistance);
    }
    /**
     * @private
     * @param {?} scaleX
     * @param {?} stepDist
     * @return {?}
     */
    stepToProceed(scaleX, stepDist) {
        return Math.round(scaleX / stepDist) * this.step;
    }
    /**
     * @private
     * @param {?} visible
     * @return {?}
     */
    toggleThumbIndicators(visible) {
        this._isPressed = visible;
        if (!this.continuous) {
            this._isActiveLabel = visible;
        }
    }
}
IgxSliderThumbComponent.decorators = [
    { type: Component, args: [{
                selector: 'igx-thumb',
                template: "<div class=\"label\">\n    <ng-container *ngTemplateOutlet=\"templateRef ? templateRef : thumbFromDefaultTemplate; context: context\"></ng-container>\n</div>\n<div class=\"dot\"></div>\n\n\n<ng-template #thumbFromDefaultTemplate>\n    {{ value }}\n</ng-template>\n"
            }] }
];
/** @nocollapse */
IgxSliderThumbComponent.ctorParameters = () => [
    { type: ElementRef }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGh1bWItc2xpZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lnbml0ZXVpLWFuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvc2xpZGVyL3RodW1iL3RodW1iLXNsaWRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDSCxTQUFTLEVBQ1QsS0FBSyxFQUNMLFlBQVksRUFDWixVQUFVLEVBQ1YsV0FBVyxFQUNYLE1BQU0sRUFDTixZQUFZLEVBR1osV0FBVyxFQUNkLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDaEQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQzs7OztBQVMvQixNQUFNLE9BQU8sdUJBQXVCOzs7O0lBNEZoQyxZQUFvQixXQUF1QjtRQUF2QixnQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQTFGbkMsbUJBQWMsR0FBRyxLQUFLLENBQUM7UUFDdkIsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUNuQixjQUFTLEdBQUcsSUFBSSxPQUFPLEVBQVcsQ0FBQztRQVFwQyxhQUFRLEdBQUcsS0FBSyxDQUFDO1FBaUNqQix1QkFBa0IsR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO1FBR2hELGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBR25DLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQUc1QyxhQUFRLEdBQUcsQ0FBQyxDQUFDO1FBR2IsV0FBTSxHQUFHLENBQUMsQ0FBQztJQW1DNkIsQ0FBQzs7Ozs7SUF0RmhELElBQVksY0FBYzs7Y0FDaEIsZUFBZSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMscUJBQXFCLEVBQUU7O2NBQzVELFdBQVcsR0FBRyxDQUFDLGVBQWUsQ0FBQyxLQUFLLEdBQUcsZUFBZSxDQUFDLElBQUks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LEtBQUs7MkNBR0wsS0FBSzt1QkFHTCxLQUFLO29CQUdMLEtBQUs7MkJBR0wsS0FBSzttQkFHTCxLQUFLOzBCQUdMLEtBQUs7c0JBR0wsS0FBSzttQkFHTCxLQUFLO2lDQUdMLE1BQU07dUJBR04sTUFBTTs0QkFHTixNQUFNO3VCQUdOLFdBQVcsU0FBQyxlQUFlO3FCQUczQixXQUFXLFNBQUMsY0FBYzs2QkFHMUIsV0FBVyxTQUFDLDhCQUE4QjsyQkFLMUMsV0FBVyxTQUFDLDRCQUE0QjttQ0FLeEMsV0FBVyxTQUFDLHNDQUFzQztpQ0FLbEQsV0FBVyxTQUFDLG9DQUFvQztnQ0FLaEQsV0FBVyxTQUFDLGtDQUFrQzs0QkFrQzlDLFlBQVksU0FBQyxjQUFjOzZCQUszQixZQUFZLFNBQUMsY0FBYzt3QkFLM0IsWUFBWSxTQUFDLFNBQVMsRUFBRSxDQUFDLFFBQVEsQ0FBQztxQkFtQmxDLFlBQVksU0FBQyxNQUFNOzhCQU1uQixZQUFZLFNBQUMsT0FBTzs7Ozs7OztJQWxKckIsaURBQStCOzs7OztJQUMvQiw2Q0FBMkI7Ozs7O0lBQzNCLDRDQUEyQzs7SUFRM0MsMkNBQXdCOztJQUV4Qix3Q0FDcUI7O0lBRXJCLDZDQUMyQjs7SUFFM0IsK0RBQ29DOztJQUVwQywyQ0FDeUI7O0lBRXpCLHdDQUM4Qjs7SUFFOUIsK0NBQzRCOztJQUU1Qix1Q0FDb0I7O0lBRXBCLDhDQUNxQzs7SUFFckMsMENBQ29COztJQUVwQix1Q0FDMEI7O0lBRTFCLHFEQUN1RDs7SUFFdkQsMkNBQzBDOztJQUUxQyxnREFDbUQ7O0lBRW5ELDJDQUNvQjs7SUFFcEIseUNBQ2tCOzs7OztJQW1DTiw4Q0FBK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIENvbXBvbmVudCxcbiAgICBJbnB1dCxcbiAgICBIb3N0TGlzdGVuZXIsXG4gICAgRWxlbWVudFJlZixcbiAgICBIb3N0QmluZGluZyxcbiAgICBPdXRwdXQsXG4gICAgRXZlbnRFbWl0dGVyLFxuICAgIE9uSW5pdCxcbiAgICBPbkRlc3Ryb3ksXG4gICAgVGVtcGxhdGVSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBTbGlkZXJIYW5kbGUgfSBmcm9tICcuLi9zbGlkZXIuY29tbW9uJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnaWd4LXRodW1iJyxcbiAgICB0ZW1wbGF0ZVVybDogJ3RodW1iLXNsaWRlci5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIElneFNsaWRlclRodW1iQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gICAgcHJpdmF0ZSBfaXNBY3RpdmVMYWJlbCA9IGZhbHNlO1xuICAgIHByaXZhdGUgX2lzUHJlc3NlZCA9IGZhbHNlO1xuICAgIHByaXZhdGUgX2Rlc3Ryb3kkID0gbmV3IFN1YmplY3Q8Ym9vbGVhbj4oKTtcblxuICAgIHByaXZhdGUgZ2V0IHRodW1iUG9zaXRpb25YKCkge1xuICAgICAgICBjb25zdCB0aHVtYkJvdW5kZXJpZXMgPSB0aGlzLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIGNvbnN0IHRodW1iQ2VudGVyID0gKHRodW1iQm91bmRlcmllcy5yaWdodCAtIHRodW1iQm91bmRlcmllcy5sZWZ0KSAvIDI7XG4gICAgICAgIHJldHVybiB0aHVtYkJvdW5kZXJpZXMubGVmdCArIHRodW1iQ2VudGVyO1xuICAgIH1cblxuICAgIHB1YmxpYyBpc0FjdGl2ZSA9IGZhbHNlO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgdmFsdWU6IG51bWJlcjtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGNvbnRpbnVvdXM6IGJvb2xlYW47XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyB0aHVtYkxhYmVsVmlzaWJpbGl0eUR1cmF0aW9uO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZGlzYWJsZWQ6IGJvb2xlYW47XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBvblBhbjogU3ViamVjdDxudW1iZXI+O1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgc3RlcERpc3RhbmNlOiBudW1iZXI7XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBzdGVwOiBudW1iZXI7XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55PjtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGNvbnRleHQ6IGFueTtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHR5cGU6IFNsaWRlckhhbmRsZTtcblxuICAgIEBPdXRwdXQoKVxuICAgIHB1YmxpYyBvblRodW1iVmFsdWVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcblxuICAgIEBPdXRwdXQoKVxuICAgIHB1YmxpYyBvbkNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gICAgQE91dHB1dCgpXG4gICAgcHVibGljIG9uSG92ZXJDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cbiAgICBASG9zdEJpbmRpbmcoJ2F0dHIudGFiaW5kZXgnKVxuICAgIHB1YmxpYyB0YWJpbmRleCA9IDA7XG5cbiAgICBASG9zdEJpbmRpbmcoJ2F0dHIuei1pbmRleCcpXG4gICAgcHVibGljIHpJbmRleCA9IDA7XG5cbiAgICBASG9zdEJpbmRpbmcoJ2NsYXNzLmlneC1zbGlkZXJfX3RodW1iLWZyb20nKVxuICAgIHB1YmxpYyBnZXQgdGh1bWJGcm9tQ2xhc3MoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnR5cGUgPT09IFNsaWRlckhhbmRsZS5GUk9NO1xuICAgIH1cblxuICAgIEBIb3N0QmluZGluZygnY2xhc3MuaWd4LXNsaWRlcl9fdGh1bWItdG8nKVxuICAgIHB1YmxpYyBnZXQgdGh1bWJUb0NsYXNzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50eXBlID09PSBTbGlkZXJIYW5kbGUuVE87XG4gICAgfVxuXG4gICAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pZ3gtc2xpZGVyX190aHVtYi1mcm9tLS1hY3RpdmUnKVxuICAgIHB1YmxpYyBnZXQgdGh1bWJGcm9tQWN0aXZlQ2xhc3MoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnR5cGUgPT09IFNsaWRlckhhbmRsZS5GUk9NICYmIHRoaXMuX2lzQWN0aXZlTGFiZWw7XG4gICAgfVxuXG4gICAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pZ3gtc2xpZGVyX190aHVtYi10by0tYWN0aXZlJylcbiAgICBwdWJsaWMgZ2V0IHRodW1iVG9BY3RpdmVDbGFzcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudHlwZSA9PT0gU2xpZGVySGFuZGxlLlRPICYmIHRoaXMuX2lzQWN0aXZlTGFiZWw7XG4gICAgfVxuXG4gICAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pZ3gtc2xpZGVyX190aHVtYi0tcHJlc3NlZCcpXG4gICAgcHVibGljIGdldCB0aHVtYlByZXNzZWRDbGFzcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNBY3RpdmUgJiYgdGhpcy5faXNQcmVzc2VkO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgbmF0aXZlRWxlbWVudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGRlc3Ryb3koKTogU3ViamVjdDxib29sZWFuPiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZXN0cm95JDtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7IH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMub25QYW5cbiAgICAgICAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLl9kZXN0cm95JCkpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKG1vdXNlWCA9PlxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlVGh1bWJWYWx1ZShtb3VzZVgpXG4gICAgICAgICAgICApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuX2Rlc3Ryb3kkLm5leHQodHJ1ZSk7XG4gICAgICAgIHRoaXMuX2Rlc3Ryb3kkLmNvbXBsZXRlKCk7XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcigncG9pbnRlcmVudGVyJylcbiAgICBwdWJsaWMgb25QaW50ZXJFbnRlcigpIHtcbiAgICAgICAgdGhpcy5vbkhvdmVyQ2hhbmdlLmVtaXQodHJ1ZSk7XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcigncG9pbnRlcmxlYXZlJylcbiAgICBwdWJsaWMgb25Qb2ludGVyTGVhdmUoKSB7XG4gICAgICAgIHRoaXMub25Ib3ZlckNoYW5nZS5lbWl0KGZhbHNlKTtcbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKCdrZXlkb3duJywgWyckZXZlbnQnXSlcbiAgICBwdWJsaWMgb25LZXlEb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgaW5jcmVtZW50ID0gMDtcbiAgICAgICAgaWYgKGV2ZW50LmtleS5lbmRzV2l0aCgnTGVmdCcpKSB7XG4gICAgICAgICAgICBpbmNyZW1lbnQgPSB0aGlzLnN0ZXAgKiAtIDE7XG4gICAgICAgIH0gZWxzZSBpZiAoZXZlbnQua2V5LmVuZHNXaXRoKCdSaWdodCcpKSB7XG4gICAgICAgICAgICBpbmNyZW1lbnQgPSB0aGlzLnN0ZXA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm9uQ2hhbmdlLmVtaXQoKTtcbiAgICAgICAgdGhpcy5vblRodW1iVmFsdWVDaGFuZ2UuZW1pdChpbmNyZW1lbnQpO1xuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoJ2JsdXInKVxuICAgIHB1YmxpYyBvbkJsdXIoKSB7XG4gICAgICAgIHRoaXMuaXNBY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy56SW5kZXggPSAwO1xuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoJ2ZvY3VzJylcbiAgICBwdWJsaWMgb25Gb2N1c0xpc3RlbmVyKCkge1xuICAgICAgICB0aGlzLmlzQWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy56SW5kZXggPSAxO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNob3cgdGh1bWIgbGFiZWwgYW5kIHJpcHBsZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgc2hvd1RodW1iSW5kaWNhdG9ycygpIHtcbiAgICAgICAgdGhpcy50b2dnbGVUaHVtYkluZGljYXRvcnModHJ1ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGlkZSB0aHVtYiBsYWJlbCBhbmQgcmlwcGxlLlxuICAgICAqL1xuICAgIHB1YmxpYyBoaWRlVGh1bWJJbmRpY2F0b3JzKCkge1xuICAgICAgICB0aGlzLnRvZ2dsZVRodW1iSW5kaWNhdG9ycyhmYWxzZSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB1cGRhdGVUaHVtYlZhbHVlKG1vdXNlWDogbnVtYmVyKSB7XG4gICAgICAgIGNvbnN0IHVwZGF0ZVZhbHVlID0gdGhpcy5jYWxjdWxhdGVUcmFja1VwZGF0ZShtb3VzZVgpO1xuICAgICAgICBpZiAodGhpcy5pc0FjdGl2ZSAmJiB1cGRhdGVWYWx1ZSAhPT0gMCkge1xuICAgICAgICAgICAgdGhpcy5vblRodW1iVmFsdWVDaGFuZ2UuZW1pdCh1cGRhdGVWYWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGNhbGN1bGF0ZVRyYWNrVXBkYXRlKG1vdXNlWDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgY29uc3Qgc2NhbGVYID0gbW91c2VYIC0gdGhpcy50aHVtYlBvc2l0aW9uWDtcbiAgICAgICAgY29uc3Qgc3RlcERpc3RhbmNlQ2VudGVyID0gdGhpcy5zdGVwRGlzdGFuY2UgLyAyO1xuXG4gICAgICAgIC8vIElmIHRoZSB0aHVtYiBzY2FsZSByYW5nZSAoc2xpZGVyIHVwZGF0ZSkgaXMgbGVzcyB0aMOgbiBhIGhhbGYgc3RlcCxcbiAgICAgICAgLy8gdGhlIHBvc2l0aW9uIHN0YXlzIHRoZSBzYW1lLlxuICAgICAgICBjb25zdCBzY2FsZVhQb3NpdGl2ZSA9IE1hdGguYWJzKHNjYWxlWCk7XG4gICAgICAgIGlmIChzY2FsZVhQb3NpdGl2ZSA8IHN0ZXBEaXN0YW5jZUNlbnRlcikge1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5zdGVwVG9Qcm9jZWVkKHNjYWxlWCwgdGhpcy5zdGVwRGlzdGFuY2UpO1xuICAgIH1cblxuICAgIHByaXZhdGUgc3RlcFRvUHJvY2VlZChzY2FsZVgsIHN0ZXBEaXN0KSB7XG4gICAgICAgIHJldHVybiBNYXRoLnJvdW5kKHNjYWxlWCAvIHN0ZXBEaXN0KSAqIHRoaXMuc3RlcDtcbiAgICB9XG5cbiAgICBwcml2YXRlIHRvZ2dsZVRodW1iSW5kaWNhdG9ycyh2aXNpYmxlOiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMuX2lzUHJlc3NlZCA9IHZpc2libGU7XG5cbiAgICAgICAgaWYgKCF0aGlzLmNvbnRpbnVvdXMpIHtcbiAgICAgICAgICAgIHRoaXMuX2lzQWN0aXZlTGFiZWwgPSB2aXNpYmxlO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19