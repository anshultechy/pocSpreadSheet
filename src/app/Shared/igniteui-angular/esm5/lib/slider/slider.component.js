/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { CommonModule } from '@angular/common';
import { Component, ElementRef, EventEmitter, HostBinding, Input, NgModule, Output, Renderer2, ViewChild, TemplateRef, ContentChild, HostListener, ViewChildren, QueryList, ChangeDetectorRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { DeprecateProperty } from '../core/deprecateDecorators';
import { IgxSliderThumbComponent } from './thumb/thumb-slider.component';
import { Subject, merge, timer } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { SliderHandle, IgxThumbFromTemplateDirective, IgxThumbToTemplateDirective, SliderType } from './slider.common';
/** @type {?} */
var noop = function () {
};
var ɵ0 = noop;
/** @type {?} */
var NEXT_ID = 0;
/**
 * **Ignite UI for Angular Slider** -
 * [Documentation](https://www.infragistics.com/products/ignite-ui-angular/angular/components/slider.html)
 *
 * The Ignite UI Slider allows selection in a given range by moving the thumb along the track. The track
 * can be defined as continuous or stepped, and you can choose between single and range slider types.
 *
 * Example:
 * ```html
 * <igx-slider id="slider"
 *            [minValue]="0" [maxValue]="100"
 *            [continuous]=true [(ngModel)]="volume">
 * </igx-slider>
 * ```
 */
var IgxSliderComponent = /** @class */ (function () {
    function IgxSliderComponent(renderer, _el, _cdr) {
        this.renderer = renderer;
        this._el = _el;
        this._cdr = _cdr;
        // Limit handle travel zone
        this._pMin = 0;
        this._pMax = 1;
        // From/upperValue in percent values
        this._hasViewInit = false;
        this._minValue = 0;
        this._maxValue = 100;
        this._continuous = false;
        this._disabled = false;
        this._step = 1;
        this._labels = new Array();
        this._type = SliderType.SLIDER;
        this._destroyer$ = new Subject();
        this._indicatorsDestroyer$ = new Subject();
        this._onChangeCallback = noop;
        this._onTouchedCallback = noop;
        /**
         * @hidden
         */
        this.thumbs = new QueryList();
        /**
         * @hidden
         */
        this.stepDistance = this._step;
        /**
         * @hidden
         */
        this.onPan = new Subject();
        /**
         * @hidden
         */
        this.role = 'slider';
        /**
         * @hidden
         */
        this.slierClass = true;
        /**
         * An \@Input property that sets the value of the `id` attribute.
         * If not provided it will be automatically generated.
         * ```html
         * <igx-slider [id]="'igx-slider-32'" [(ngModel)]="task.percentCompleted" [step]="5" [lowerBound]="20">
         * ```
         */
        this.id = "igx-slider-" + NEXT_ID++;
        /**
         * An \@Input property that sets the duration visibility of thumbs labels. The default value is 750 milliseconds.
         * ```html
         * <igx-slider #slider [thumbLabelVisibilityDuration]="3000" [(ngModel)]="task.percentCompleted" [step]="5">
         * ```
         */
        this.thumbLabelVisibilityDuration = 750;
        /**
         * This event is emitted when user has stopped interacting the thumb and value is changed.
         * ```typescript
         * public change(event){
         *    alert("The value has been changed!");
         * }
         * ```
         * ```html
         * <igx-slider (onValueChange)="change($event)" #slider [(ngModel)]="task.percentCompleted" [step]="5">
         * ```
         */
        this.onValueChange = new EventEmitter();
    }
    Object.defineProperty(IgxSliderComponent.prototype, "thumbFrom", {
        get: /**
         * @private
         * @return {?}
         */
        function () {
            return this.thumbs.find(function (thumb) { return thumb.type === SliderHandle.FROM; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxSliderComponent.prototype, "thumbTo", {
        get: /**
         * @private
         * @return {?}
         */
        function () {
            return this.thumbs.find(function (thumb) { return thumb.type === SliderHandle.TO; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxSliderComponent.prototype, "valuemin", {
        /**
         * @hidden
         */
        get: /**
         * @hidden
         * @return {?}
         */
        function () {
            return this.minValue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxSliderComponent.prototype, "valuemax", {
        /**
         * @hidden
         */
        get: /**
         * @hidden
         * @return {?}
         */
        function () {
            return this.maxValue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxSliderComponent.prototype, "readonly", {
        /**
         * @hidden
         */
        get: /**
         * @hidden
         * @return {?}
         */
        function () {
            return this.disabled;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxSliderComponent.prototype, "disabledClass", {
        /**
         * @hidden
         */
        get: /**
         * @hidden
         * @return {?}
         */
        function () {
            return this.disabled;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxSliderComponent.prototype, "type", {
        /**
         * An @Input property that gets the type of the `IgxSliderComponent`. The slider can be SliderType.SLIDER(default) or SliderType.RANGE.
         * ```typescript
         * @ViewChild("slider2")
         * public slider: IgxSliderComponent;
         * ngAfterViewInit(){
         *     let type = this.slider.type;
         * }
         */
        get: /**
         * An \@Input property that gets the type of the `IgxSliderComponent`. The slider can be SliderType.SLIDER(default) or SliderType.RANGE.
         * ```typescript
         * \@ViewChild("slider2")
         * public slider: IgxSliderComponent;
         * ngAfterViewInit(){
         *     let type = this.slider.type;
         * }
         * @return {?}
         */
        function () {
            return this._type;
        },
        /**
         * An @Input property that sets the type of the `IgxSliderComponent`. The slider can be SliderType.SLIDER(default) or SliderType.RANGE.
         * ```typescript
         * sliderType: SliderType = SliderType.RANGE;
         * ```
         * ```html
         * <igx-slider #slider2 [type]="sliderType" [(ngModel)]="rangeValue" [minValue]="0" [maxValue]="100">
         * ```
         */
        set: /**
         * An \@Input property that sets the type of the `IgxSliderComponent`. The slider can be SliderType.SLIDER(default) or SliderType.RANGE.
         * ```typescript
         * sliderType: SliderType = SliderType.RANGE;
         * ```
         * ```html
         * <igx-slider #slider2 [type]="sliderType" [(ngModel)]="rangeValue" [minValue]="0" [maxValue]="100">
         * ```
         * @param {?} type
         * @return {?}
         */
        function (type) {
            this._type = type;
            if (type === SliderType.SLIDER) {
                this.lowerValue = 0;
            }
            if (this.labelsViewEnabled && this.upperValue > this.maxValue) {
                this.upperValue = this.labels.length - 1;
            }
            if (this._hasViewInit) {
                this.updateTrack();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxSliderComponent.prototype, "labels", {
        /**
         * Enables `labelView`, by accepting a collection of primitive values with more than one element.
         * Each element will be equally spread over the slider and it will serve as a thumb label.
         * Once the property is set, it will precendence over {@link maxValue}, {@link minValue}, {@link step}.
         * This means that the manipulation for those properties won't be allowed.
         */
        get: /**
         * Enables `labelView`, by accepting a collection of primitive values with more than one element.
         * Each element will be equally spread over the slider and it will serve as a thumb label.
         * Once the property is set, it will precendence over {\@link maxValue}, {\@link minValue}, {\@link step}.
         * This means that the manipulation for those properties won't be allowed.
         * @return {?}
         */
        function () {
            return this._labels;
        },
        set: /**
         * @param {?} labels
         * @return {?}
         */
        function (labels) {
            this._labels = labels;
            this._pMax = 1;
            if (this._hasViewInit) {
                this.stepDistance = this.calculateStepDistance();
                this.positionHandlesAndUpdateTrack();
                this.setTickInterval(labels);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxSliderComponent.prototype, "context", {
        /**
         * Returns the template context corresponding
         * to {@link IgxThumbFromTemplateDirective} and {@link IgxThumbToTemplateDirective} templates.
         *
         * return {
         *  $implicit: {@link value},
         *  labels: {@link labels}
         * }
         * ```
         */
        get: /**
         * Returns the template context corresponding
         * to {\@link IgxThumbFromTemplateDirective} and {\@link IgxThumbToTemplateDirective} templates.
         *
         * return {
         *  $implicit: {\@link value},
         *  labels: {\@link labels}
         * }
         * ```
         * @return {?}
         */
        function () {
            return {
                $implicit: this.value,
                labels: this.labels
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxSliderComponent.prototype, "step", {
        /**
         * Returns the incremental/decremental dragging step of the {@link IgxSliderComponent}.
         * ```typescript
         * @ViewChild("slider2")
         * public slider: IgxSliderComponent;
         * ngAfterViewInit(){
         *     let step = this.slider.step;
         * }
         * ```
         */
        get: /**
         * Returns the incremental/decremental dragging step of the {\@link IgxSliderComponent}.
         * ```typescript
         * \@ViewChild("slider2")
         * public slider: IgxSliderComponent;
         * ngAfterViewInit(){
         *     let step = this.slider.step;
         * }
         * ```
         * @return {?}
         */
        function () {
            return this.labelsViewEnabled ? 1 : this._step;
        },
        /**
         * An @Input property that sets the incremental/decremental step of the value when dragging the thumb.
         * The default step is 1, and step should not be less or equal than 0.
         * ```html
         * <igx-slider #slider [(ngModel)]="task.percentCompleted" [step]="5">
         * ```
         */
        set: /**
         * An \@Input property that sets the incremental/decremental step of the value when dragging the thumb.
         * The default step is 1, and step should not be less or equal than 0.
         * ```html
         * <igx-slider #slider [(ngModel)]="task.percentCompleted" [step]="5">
         * ```
         * @param {?} step
         * @return {?}
         */
        function (step) {
            this._step = step;
            if (this._hasViewInit) {
                this.stepDistance = this.calculateStepDistance();
                this.normalizeByStep(this.value);
                this.setTickInterval(this.labels);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxSliderComponent.prototype, "disabled", {
        /**
         * Returns if the {@link IgxSliderComponent} is disabled.
         * ```typescript
         * @ViewChild("slider2")
         * public slider: IgxSliderComponent;
         * ngAfterViewInit(){
         *     let isDisabled = this.slider.disabled;
         * }
         * ```
         */
        get: /**
         * Returns if the {\@link IgxSliderComponent} is disabled.
         * ```typescript
         * \@ViewChild("slider2")
         * public slider: IgxSliderComponent;
         * ngAfterViewInit(){
         *     let isDisabled = this.slider.disabled;
         * }
         * ```
         * @return {?}
         */
        function () {
            return this._disabled;
        },
        /**
         *An @Input property that disables or enables UI interaction.
         *```html
         *<igx-slider #slider [disabled]="'true'" [(ngModel)]="task.percentCompleted" [step]="5" [lowerBound]="20">
         *```
         */
        set: /**
         * An \@Input property that disables or enables UI interaction.
         * ```html
         * <igx-slider #slider [disabled]="'true'" [(ngModel)]="task.percentCompleted" [step]="5" [lowerBound]="20">
         * ```
         * @param {?} disable
         * @return {?}
         */
        function (disable) {
            this._disabled = disable;
            if (this._hasViewInit) {
                this.changeThumbFocusableState(disable);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxSliderComponent.prototype, "continuous", {
        /**
         * Returns if the {@link IgxSliderComponent} is set as continuous.
         * ```typescript
         * @ViewChild("slider2")
         * public slider: IgxSliderComponent;
         * ngAfterViewInit(){
         *     let continuous = this.slider.continuous;
         * }
         * ```
         */
        get: /**
         * Returns if the {\@link IgxSliderComponent} is set as continuous.
         * ```typescript
         * \@ViewChild("slider2")
         * public slider: IgxSliderComponent;
         * ngAfterViewInit(){
         *     let continuous = this.slider.continuous;
         * }
         * ```
         * @return {?}
         */
        function () {
            return this._continuous;
        },
        /**
         * An @Input property that marks the {@link IgxSliderComponent} as continuous.
         * By default is considered that the {@link IgxSliderComponent} is discrete.
         * Discrete {@link IgxSliderComponent} does not have ticks and does not shows bubble labels for values.
         * ```html
         * <igx-slider #slider [continuous]="'true'" [(ngModel)]="task.percentCompleted" [step]="5" [lowerBound]="20">
         * ```
         */
        set: /**
         * An \@Input property that marks the {\@link IgxSliderComponent} as continuous.
         * By default is considered that the {\@link IgxSliderComponent} is discrete.
         * Discrete {\@link IgxSliderComponent} does not have ticks and does not shows bubble labels for values.
         * ```html
         * <igx-slider #slider [continuous]="'true'" [(ngModel)]="task.percentCompleted" [step]="5" [lowerBound]="20">
         * ```
         * @param {?} continuous
         * @return {?}
         */
        function (continuous) {
            if (this.labelsViewEnabled) {
                return;
            }
            this._continuous = continuous;
            this.setTickInterval(null);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxSliderComponent.prototype, "isContinuous", {
        /**
         * Returns if the {@link IgxSliderComponent} is set as continuous.
         * ```typescript
         * @ViewChild("slider2")
         * public slider: IgxSliderComponent;
         * ngAfterViewInit(){
         *     let continuous = this.slider.continuous;
         * }
         * ```
         */
        get: /**
         * Returns if the {\@link IgxSliderComponent} is set as continuous.
         * ```typescript
         * \@ViewChild("slider2")
         * public slider: IgxSliderComponent;
         * ngAfterViewInit(){
         *     let continuous = this.slider.continuous;
         * }
         * ```
         * @return {?}
         */
        function () {
            return this.continuous;
        },
        /**
         * @hidden
         * @internal
         */
        set: /**
         * @hidden
         * \@internal
         * @param {?} continuous
         * @return {?}
         */
        function (continuous) {
            this.continuous = continuous;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxSliderComponent.prototype, "maxValue", {
        /**
         * Returns the maximum value for the {@link IgxSliderComponent}.
         * ```typescript
         *@ViewChild("slider")
         *public slider: IgxSliderComponent;
         *ngAfterViewInit(){
         *    let sliderMax = this.slider.maxValue;
         *}
         * ```
         */
        get: /**
         * Returns the maximum value for the {\@link IgxSliderComponent}.
         * ```typescript
         * \@ViewChild("slider")
         * public slider: IgxSliderComponent;
         * ngAfterViewInit(){
         *    let sliderMax = this.slider.maxValue;
         * }
         * ```
         * @return {?}
         */
        function () {
            return this.labelsViewEnabled ?
                this.labels.length - 1 :
                this._maxValue;
        },
        /**
         * Sets the maximal value for the `IgxSliderComponent`.
         * The default maximum value is 100.
         * ```html
         * <igx-slider [type]="sliderType" [minValue]="56" [maxValue]="256">
         * ```
         */
        set: /**
         * Sets the maximal value for the `IgxSliderComponent`.
         * The default maximum value is 100.
         * ```html
         * <igx-slider [type]="sliderType" [minValue]="56" [maxValue]="256">
         * ```
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value <= this._minValue) {
                this._maxValue = this._minValue + 1;
            }
            else {
                this._maxValue = value;
            }
            if (value < this.lowerBound) {
                this.updateLowerBoundAndMinTravelZone();
                this.upperBound = value;
            }
            // refresh max travel zone limits.
            this._pMax = 1;
            // recalculate step distance.
            this.stepDistance = this.calculateStepDistance();
            this.positionHandlesAndUpdateTrack();
            this.setTickInterval(null);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxSliderComponent.prototype, "minValue", {
        /**
         *Returns the minimal value of the `IgxSliderComponent`.
         *```typescript
         *@ViewChild("slider2")
         *public slider: IgxSliderComponent;
         *ngAfterViewInit(){
         *    let sliderMin = this.slider.minValue;
         *}
         *```
         */
        get: /**
         * Returns the minimal value of the `IgxSliderComponent`.
         * ```typescript
         * \@ViewChild("slider2")
         * public slider: IgxSliderComponent;
         * ngAfterViewInit(){
         *    let sliderMin = this.slider.minValue;
         * }
         * ```
         * @return {?}
         */
        function () {
            if (this.labelsViewEnabled) {
                return 0;
            }
            return this._minValue;
        },
        /**
         * Sets the minimal value for the `IgxSliderComponent`.
         * The default minimal value is 0.
         * ```html
         * <igx-slider [type]="sliderType" [minValue]="56" [maxValue]="100">
         * ```
         */
        set: /**
         * Sets the minimal value for the `IgxSliderComponent`.
         * The default minimal value is 0.
         * ```html
         * <igx-slider [type]="sliderType" [minValue]="56" [maxValue]="100">
         * ```
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value >= this.maxValue) {
                this._minValue = this.maxValue - 1;
            }
            else {
                this._minValue = value;
            }
            if (value > this.upperBound) {
                this.updateUpperBoundAndMaxTravelZone();
                this.lowerBound = value;
            }
            // Refresh min travel zone limit.
            this._pMin = 0;
            // Recalculate step distance.
            this.stepDistance = this.calculateStepDistance();
            this.positionHandlesAndUpdateTrack();
            this.setTickInterval(null);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxSliderComponent.prototype, "lowerBound", {
        /**
         * Returns the lower boundary of the `IgxSliderComponent`.
         *```typescript
         *@ViewChild("slider")
         *public slider: IgxSliderComponent;
         *ngAfterViewInit(){
         *    let sliderLowBound = this.slider.lowerBound;
         *}
         *```
         */
        get: /**
         * Returns the lower boundary of the `IgxSliderComponent`.
         * ```typescript
         * \@ViewChild("slider")
         * public slider: IgxSliderComponent;
         * ngAfterViewInit(){
         *    let sliderLowBound = this.slider.lowerBound;
         * }
         * ```
         * @return {?}
         */
        function () {
            if (!Number.isNaN(this._lowerBound) && this._lowerBound !== undefined) {
                return this.valueInRange(this._lowerBound, this.minValue, this.maxValue);
            }
            return this.minValue;
        },
        /**
         * Sets the lower boundary of the `IgxSliderComponent`.
         * If not set is the same as min value.
         * ```html
         * <igx-slider [step]="5" [lowerBound]="20">
         * ```
         */
        set: /**
         * Sets the lower boundary of the `IgxSliderComponent`.
         * If not set is the same as min value.
         * ```html
         * <igx-slider [step]="5" [lowerBound]="20">
         * ```
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value >= this.upperBound || (this.labelsViewEnabled && value < 0)) {
                return;
            }
            this._lowerBound = this.valueInRange(value, this.minValue, this.maxValue);
            // Refresh time travel zone.
            this._pMin = this.valueToFraction(this._lowerBound) || 0;
            this.positionHandlesAndUpdateTrack();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxSliderComponent.prototype, "upperBound", {
        /**
         * Returns the upper boundary of the `IgxSliderComponent`.
         * ```typescript
         *@ViewChild("slider")
         *public slider: IgxSliderComponent;
         *ngAfterViewInit(){
         *    let sliderUpBound = this.slider.upperBound;
         *}
         * ```
         */
        get: /**
         * Returns the upper boundary of the `IgxSliderComponent`.
         * ```typescript
         * \@ViewChild("slider")
         * public slider: IgxSliderComponent;
         * ngAfterViewInit(){
         *    let sliderUpBound = this.slider.upperBound;
         * }
         * ```
         * @return {?}
         */
        function () {
            if (!Number.isNaN(this._upperBound) && this._upperBound !== undefined) {
                return this.valueInRange(this._upperBound, this.minValue, this.maxValue);
            }
            return this.maxValue;
        },
        /**
         * Sets the upper boundary of the `IgxSliderComponent`.
         * If not set is the same as max value.
         * ```html
         * <igx-slider [step]="5" [upperBound]="20">
         * ```
         */
        set: /**
         * Sets the upper boundary of the `IgxSliderComponent`.
         * If not set is the same as max value.
         * ```html
         * <igx-slider [step]="5" [upperBound]="20">
         * ```
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value <= this.lowerBound || (this.labelsViewEnabled && value > this.labels.length - 1)) {
                return;
            }
            this._upperBound = this.valueInRange(value, this.minValue, this.maxValue);
            // Refresh time travel zone.
            this._pMax = this.valueToFraction(this._upperBound) || 1;
            this.positionHandlesAndUpdateTrack();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxSliderComponent.prototype, "value", {
        /**
         * Returns the slider value. If the slider is of type {@link SliderType.SLIDER} the returned value is number.
         * If the slider type is {@link SliderType.RANGE} the returned value represents an object of {@link lowerValue} and {@link upperValue}.
         *```typescript
         *@ViewChild("slider2")
         *public slider: IgxSliderComponent;
         *public sliderValue(event){
         *    let sliderVal = this.slider.value;
         *}
         *```
         */
        get: /**
         * Returns the slider value. If the slider is of type {\@link SliderType.SLIDER} the returned value is number.
         * If the slider type is {\@link SliderType.RANGE} the returned value represents an object of {\@link lowerValue} and {\@link upperValue}.
         * ```typescript
         * \@ViewChild("slider2")
         * public slider: IgxSliderComponent;
         * public sliderValue(event){
         *    let sliderVal = this.slider.value;
         * }
         * ```
         * @return {?}
         */
        function () {
            if (this.isRange) {
                return {
                    lower: this.valueInRange(this.lowerValue, this.lowerBound, this.upperBound),
                    upper: this.valueInRange(this.upperValue, this.lowerBound, this.upperBound)
                };
            }
            else {
                return this.valueInRange(this.upperValue, this.lowerBound, this.upperBound);
            }
        },
        /**
         * Sets the slider value.
         * If the slider is of type {@link SliderType.SLIDER} the argument is number. By default the {@link value} gets the {@link lowerBound}.
         * If the slider type is {@link SliderType.RANGE} the argument
         * represents an object of {@link lowerValue} and {@link upperValue} properties.
         * By default the object is associated with the {@link lowerBound} and {@link upperBound} property values.
         * ```typescript
         *rangeValue = {
         *   lower: 30,
         *   upper: 60
         *};
         * ```
         * ```html
         * <igx-slider [type]="sliderType" [(ngModel)]="rangeValue" [minValue]="56" [maxValue]="256">
         * ```
         */
        set: /**
         * Sets the slider value.
         * If the slider is of type {\@link SliderType.SLIDER} the argument is number. By default the {\@link value} gets the {\@link lowerBound}.
         * If the slider type is {\@link SliderType.RANGE} the argument
         * represents an object of {\@link lowerValue} and {\@link upperValue} properties.
         * By default the object is associated with the {\@link lowerBound} and {\@link upperBound} property values.
         * ```typescript
         * rangeValue = {
         *   lower: 30,
         *   upper: 60
         * };
         * ```
         * ```html
         * <igx-slider [type]="sliderType" [(ngModel)]="rangeValue" [minValue]="56" [maxValue]="256">
         * ```
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (!this.isRange) {
                this.upperValue = (/** @type {?} */ (value));
            }
            else {
                value = this.validateInitialValue((/** @type {?} */ (value)));
                this.upperValue = ((/** @type {?} */ (value))).upper;
                this.lowerValue = ((/** @type {?} */ (value))).lower;
            }
            this._onChangeCallback(this.value);
            if (this._hasViewInit) {
                this.positionHandlesAndUpdateTrack();
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} $event
     * @return {?}
     */
    IgxSliderComponent.prototype.onPointerDown = /**
     * @hidden
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        this.findClosestThumb($event);
        if (!this.thumbTo.isActive && this.thumbFrom === undefined) {
            return;
        }
        /** @type {?} */
        var activeThumb = this.thumbTo.isActive ? this.thumbTo : this.thumbFrom;
        activeThumb.nativeElement.setPointerCapture($event.pointerId);
        this.showThumbsIndicators();
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} $event
     * @return {?}
     */
    IgxSliderComponent.prototype.onPointerUp = /**
     * @hidden
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        if (!this.thumbTo.isActive && this.thumbFrom === undefined) {
            return;
        }
        this.hideThumbsIndicators();
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @return {?}
     */
    IgxSliderComponent.prototype.onFocus = /**
     * @hidden
     * @return {?}
     */
    function () {
        this.toggleThumbLabels();
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} $event
     * @return {?}
     */
    IgxSliderComponent.prototype.onPanListener = /**
     * @hidden
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        this.update($event.srcEvent.clientX);
    };
    /**
     * @return {?}
     */
    IgxSliderComponent.prototype.onPanStart = /**
     * @return {?}
     */
    function () {
        this.showThumbsIndicators();
    };
    /**
     * @return {?}
     */
    IgxSliderComponent.prototype.onPanEnd = /**
     * @return {?}
     */
    function () {
        this.hideThumbsIndicators();
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} $event
     * @return {?}
     */
    IgxSliderComponent.prototype.onTapListener = /**
     * @hidden
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        this.onTap($event);
    };
    Object.defineProperty(IgxSliderComponent.prototype, "isRange", {
        /**
         *Returns whether the `IgxSliderComponent` type is RANGE.
         *```typescript
         *@ViewChild("slider")
         *public slider: IgxSliderComponent;
         *ngAfterViewInit(){
         *    let sliderRange = this.slider.isRange;
         *}
         * ```
         */
        get: /**
         * Returns whether the `IgxSliderComponent` type is RANGE.
         * ```typescript
         * \@ViewChild("slider")
         * public slider: IgxSliderComponent;
         * ngAfterViewInit(){
         *    let sliderRange = this.slider.isRange;
         * }
         * ```
         * @return {?}
         */
        function () {
            return this.type === SliderType.RANGE;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxSliderComponent.prototype, "lowerValue", {
        /**
         * Returns the lower value of the `IgxSliderComponent`.
         * ```typescript
         * @ViewChild("slider")
         * public slider: IgxSliderComponent;
         * public lowValue(event){
         *    let sliderLowValue = this.slider.lowerValue;
         *}
         *```
         */
        get: /**
         * Returns the lower value of the `IgxSliderComponent`.
         * ```typescript
         * \@ViewChild("slider")
         * public slider: IgxSliderComponent;
         * public lowValue(event){
         *    let sliderLowValue = this.slider.lowerValue;
         * }
         * ```
         * @return {?}
         */
        function () {
            if (!Number.isNaN(this._lowerValue) && this._lowerValue !== undefined && this._lowerValue >= this.lowerBound) {
                return this._lowerValue;
            }
            return this.lowerBound;
        },
        /**
         *Sets the lower value of the `IgxSliderComponent`.
         *```typescript
         *@ViewChild("slider2")
         *public slider: IgxSliderComponent;
         *public lowValue(event){
         *    this.slider.lowerValue = 120;
         *}
         *```
         */
        set: /**
         * Sets the lower value of the `IgxSliderComponent`.
         * ```typescript
         * \@ViewChild("slider2")
         * public slider: IgxSliderComponent;
         * public lowValue(event){
         *    this.slider.lowerValue = 120;
         * }
         * ```
         * @param {?} value
         * @return {?}
         */
        function (value) {
            value = this.valueInRange(value, this.lowerBound, this.upperBound);
            this._lowerValue = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxSliderComponent.prototype, "upperValue", {
        /**
         *Returns the upper value of the `IgxSliderComponent`.
         *```typescript
         *@ViewChild("slider2")
         *public slider: IgxSliderComponent;
         *public upperValue(event){
         *    let upperValue = this.slider.upperValue;
         *}
         *```
         */
        get: /**
         * Returns the upper value of the `IgxSliderComponent`.
         * ```typescript
         * \@ViewChild("slider2")
         * public slider: IgxSliderComponent;
         * public upperValue(event){
         *    let upperValue = this.slider.upperValue;
         * }
         * ```
         * @return {?}
         */
        function () {
            if (!Number.isNaN(this._upperValue) && this._upperValue !== undefined && this._upperValue <= this.upperBound) {
                return this._upperValue;
            }
            return this.upperBound;
        },
        /**
         *Sets the upper value of the `IgxSliderComponent`.
         *```typescript
         *@ViewChild("slider2")
         *public slider: IgxSliderComponent;
         *public upperValue(event){
         *    this.slider.upperValue = 120;
         *}
         *```
         */
        set: /**
         * Sets the upper value of the `IgxSliderComponent`.
         * ```typescript
         * \@ViewChild("slider2")
         * public slider: IgxSliderComponent;
         * public upperValue(event){
         *    this.slider.upperValue = 120;
         * }
         * ```
         * @param {?} value
         * @return {?}
         */
        function (value) {
            value = this.valueInRange(value, this.lowerBound, this.upperBound);
            this._upperValue = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxSliderComponent.prototype, "lowerLabel", {
        /**
         * Returns the value corresponding the lower label.
         *```typescript
         * @ViewChild("slider")
         * public slider: IgxSliderComponent;
         * let label = this.slider.lowerLabel;
         *```
         */
        get: /**
         * Returns the value corresponding the lower label.
         * ```typescript
         * \@ViewChild("slider")
         * public slider: IgxSliderComponent;
         * let label = this.slider.lowerLabel;
         * ```
         * @return {?}
         */
        function () {
            return this.labelsViewEnabled ?
                this.labels[this.lowerValue] :
                this.lowerValue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxSliderComponent.prototype, "upperLabel", {
        /**
         * Returns the value corresponding the upper label.
         *```typescript
         * @ViewChild("slider")
         * public slider: IgxSliderComponent;
         * let label = this.slider.upperLabel;
         *```
         */
        get: /**
         * Returns the value corresponding the upper label.
         * ```typescript
         * \@ViewChild("slider")
         * public slider: IgxSliderComponent;
         * let label = this.slider.upperLabel;
         * ```
         * @return {?}
         */
        function () {
            return this.labelsViewEnabled ?
                this.labels[this.upperValue] :
                this.upperValue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxSliderComponent.prototype, "labelsViewEnabled", {
        /**
         * Returns if label view is enabled.
         * If the {@link labels} is set, the view is automatically activated.
         *```typescript
         * @ViewChild("slider")
         * public slider: IgxSliderComponent;
         * let labelView = this.slider.labelsViewEnabled;
         *```
         */
        get: /**
         * Returns if label view is enabled.
         * If the {\@link labels} is set, the view is automatically activated.
         * ```typescript
         * \@ViewChild("slider")
         * public slider: IgxSliderComponent;
         * let labelView = this.slider.labelsViewEnabled;
         * ```
         * @return {?}
         */
        function () {
            return !!(this.labels && this.labels.length > 1);
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
    IgxSliderComponent.prototype.ngOnInit = /**
     * @hidden
     * @return {?}
     */
    function () {
        this.sliderSetup();
        // Set track travel zone
        this._pMin = this.valueToFraction(this.lowerBound) || 0;
        this._pMax = this.valueToFraction(this.upperBound) || 1;
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @return {?}
     */
    IgxSliderComponent.prototype.ngAfterViewInit = /**
     * @hidden
     * @return {?}
     */
    function () {
        var _this = this;
        this._hasViewInit = true;
        this.positionHandlesAndUpdateTrack();
        this.setTickInterval(this.labels);
        this.changeThumbFocusableState(this.disabled);
        this.subscribeTo(this.thumbFrom, this.thumbChanged.bind(this));
        this.subscribeTo(this.thumbTo, this.thumbChanged.bind(this));
        this.thumbs.changes.pipe(takeUntil(this._destroyer$)).subscribe(function (change) {
            /** @type {?} */
            var t = change.find(function (thumb) { return thumb.type === SliderHandle.FROM; });
            _this.positionHandle(t, _this.lowerValue);
            _this.subscribeTo(t, _this.thumbChanged.bind(_this));
            _this.changeThumbFocusableState(_this.disabled);
        });
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @return {?}
     */
    IgxSliderComponent.prototype.ngAfterContentInit = /**
     * @hidden
     * @return {?}
     */
    function () {
        // Calculates the distance between every step in pixels.
        this.stepDistance = this.calculateStepDistance();
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @return {?}
     */
    IgxSliderComponent.prototype.ngOnDestroy = /**
     * @hidden
     * @return {?}
     */
    function () {
        this._destroyer$.next(true);
        this._destroyer$.complete();
        this._indicatorsDestroyer$.next(true);
        this._indicatorsDestroyer$.complete();
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} value
     * @return {?}
     */
    IgxSliderComponent.prototype.writeValue = /**
     * @hidden
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (!value) {
            return;
        }
        this.normalizeByStep(value);
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} fn
     * @return {?}
     */
    IgxSliderComponent.prototype.registerOnChange = /**
     * @hidden
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this._onChangeCallback = fn;
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} fn
     * @return {?}
     */
    IgxSliderComponent.prototype.registerOnTouched = /**
     * @hidden
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this._onTouchedCallback = fn;
    };
    /** @hidden */
    /**
     * @hidden
     * @return {?}
     */
    IgxSliderComponent.prototype.getEditElement = /**
     * @hidden
     * @return {?}
     */
    function () {
        return this.isRange ? this.thumbFrom.nativeElement : this.thumbTo.nativeElement;
    };
    /**
     *
     * @hidden
     */
    /**
     *
     * @hidden
     * @param {?} $event
     * @return {?}
     */
    IgxSliderComponent.prototype.onTap = /**
     *
     * @hidden
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        this.update($event.srcEvent.clientX);
    };
    /**
     *
     * @hidden
     */
    /**
     *
     * @hidden
     * @param {?} mouseX
     * @return {?}
     */
    IgxSliderComponent.prototype.update = /**
     *
     * @hidden
     * @param {?} mouseX
     * @return {?}
     */
    function (mouseX) {
        if (this.disabled) {
            return;
        }
        // Update To/From Values
        this.onPan.next(mouseX);
        // Finally do positionHandlesAndUpdateTrack the DOM
        // based on data values
        this.positionHandlesAndUpdateTrack();
        this._onTouchedCallback();
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} value
     * @param {?} thumbType
     * @return {?}
     */
    IgxSliderComponent.prototype.thumbChanged = /**
     * @hidden
     * @param {?} value
     * @param {?} thumbType
     * @return {?}
     */
    function (value, thumbType) {
        /** @type {?} */
        var oldValue = this.value;
        /** @type {?} */
        var newVal;
        if (this.isRange) {
            if (thumbType === SliderHandle.FROM) {
                newVal = {
                    lower: ((/** @type {?} */ (this.value))).lower + value,
                    upper: ((/** @type {?} */ (this.value))).upper
                };
            }
            else {
                newVal = {
                    lower: ((/** @type {?} */ (this.value))).lower,
                    upper: ((/** @type {?} */ (this.value))).upper + value
                };
            }
            // Swap the thumbs if a collision appears.
            if (newVal.lower >= newVal.upper) {
                this.value = this.swapThumb(newVal);
            }
            else {
                this.value = newVal;
            }
        }
        else {
            this.value = (/** @type {?} */ (this.value)) + value;
        }
        if (this.hasValueChanged(oldValue)) {
            this.emitValueChanged(oldValue);
        }
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @return {?}
     */
    IgxSliderComponent.prototype.onThumbChange = /**
     * @hidden
     * @return {?}
     */
    function () {
        this.toggleThumbLabels();
    };
    /**
     * @param {?} state
     * @return {?}
     */
    IgxSliderComponent.prototype.onHoverChange = /**
     * @param {?} state
     * @return {?}
     */
    function (state) {
        return state ? this.showThumbsIndicators() : this.hideThumbsIndicators();
    };
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    IgxSliderComponent.prototype.swapThumb = /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (this.thumbFrom.isActive) {
            value.upper = this.upperValue;
            value.lower = this.upperValue;
        }
        else {
            value.upper = this.lowerValue;
            value.lower = this.lowerValue;
        }
        this.toggleThumb();
        return value;
    };
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    IgxSliderComponent.prototype.findClosestThumb = /**
     * @private
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.isRange) {
            this.closestHandle(event.clientX);
        }
        else {
            this.thumbTo.nativeElement.focus();
        }
        this.update(event.clientX);
    };
    /**
     * @private
     * @return {?}
     */
    IgxSliderComponent.prototype.updateLowerBoundAndMinTravelZone = /**
     * @private
     * @return {?}
     */
    function () {
        this.lowerBound = this.minValue;
        this._pMin = 0;
    };
    /**
     * @private
     * @return {?}
     */
    IgxSliderComponent.prototype.updateUpperBoundAndMaxTravelZone = /**
     * @private
     * @return {?}
     */
    function () {
        this.upperBound = this.maxValue;
        this._pMax = 1;
    };
    /**
     * @private
     * @return {?}
     */
    IgxSliderComponent.prototype.sliderSetup = /**
     * @private
     * @return {?}
     */
    function () {
        /**
         * if {@link SliderType.SLIDER} than the initial value shold be the lowest one.
         */
        if (!this.isRange && this.value === this.upperBound) {
            this.value = this.lowerBound;
        }
    };
    /**
     * @private
     * @return {?}
     */
    IgxSliderComponent.prototype.calculateStepDistance = /**
     * @private
     * @return {?}
     */
    function () {
        return this._el.nativeElement.getBoundingClientRect().width / (this.maxValue - this.minValue) * this.step;
    };
    /**
     * @private
     * @return {?}
     */
    IgxSliderComponent.prototype.toggleThumb = /**
     * @private
     * @return {?}
     */
    function () {
        return this.thumbFrom.isActive ?
            this.thumbTo.nativeElement.focus() :
            this.thumbFrom.nativeElement.focus();
    };
    /**
     * @private
     * @param {?} value
     * @param {?=} min
     * @param {?=} max
     * @return {?}
     */
    IgxSliderComponent.prototype.valueInRange = /**
     * @private
     * @param {?} value
     * @param {?=} min
     * @param {?=} max
     * @return {?}
     */
    function (value, min, max) {
        if (min === void 0) { min = 0; }
        if (max === void 0) { max = 100; }
        return Math.max(Math.min(value, max), min);
    };
    /**
     * @private
     * @param {?} color
     * @param {?} interval
     * @return {?}
     */
    IgxSliderComponent.prototype.generateTickMarks = /**
     * @private
     * @param {?} color
     * @param {?} interval
     * @return {?}
     */
    function (color, interval) {
        return interval !== null ? "repeating-linear-gradient(\n            " + 'to left' + ",\n            " + color + ",\n            " + color + " 1.5px,\n            transparent 1.5px,\n            transparent " + interval + "%\n        ), repeating-linear-gradient(\n            " + 'to right' + ",\n            " + color + ",\n            " + color + " 1.5px,\n            transparent 1.5px,\n            transparent " + interval + "%\n        )" : interval;
    };
    /**
     * @private
     * @param {?} handle
     * @param {?} position
     * @return {?}
     */
    IgxSliderComponent.prototype.positionHandle = /**
     * @private
     * @param {?} handle
     * @param {?} position
     * @return {?}
     */
    function (handle, position) {
        if (!handle) {
            return;
        }
        handle.nativeElement.style.left = this.valueToFraction(position) * 100 + "%";
    };
    /**
     * @private
     * @return {?}
     */
    IgxSliderComponent.prototype.positionHandlesAndUpdateTrack = /**
     * @private
     * @return {?}
     */
    function () {
        if (!this.isRange) {
            this.positionHandle(this.thumbTo, (/** @type {?} */ (this.value)));
        }
        else {
            this.positionHandle(this.thumbTo, ((/** @type {?} */ (this.value))).upper);
            this.positionHandle(this.thumbFrom, ((/** @type {?} */ (this.value))).lower);
        }
        this.updateTrack();
    };
    /**
     * @private
     * @param {?} mouseX
     * @return {?}
     */
    IgxSliderComponent.prototype.closestHandle = /**
     * @private
     * @param {?} mouseX
     * @return {?}
     */
    function (mouseX) {
        /** @type {?} */
        var fromOffset = this.thumbFrom.nativeElement.offsetLeft + this.thumbFrom.nativeElement.offsetWidth / 2;
        /** @type {?} */
        var toOffset = this.thumbTo.nativeElement.offsetLeft + this.thumbTo.nativeElement.offsetWidth / 2;
        /** @type {?} */
        var xPointer = mouseX - this._el.nativeElement.getBoundingClientRect().left;
        /** @type {?} */
        var match = this.closestTo(xPointer, [fromOffset, toOffset]);
        if (match === fromOffset) {
            this.thumbFrom.nativeElement.focus();
        }
        else if (match === toOffset) {
            this.thumbTo.nativeElement.focus();
        }
    };
    /**
     * @private
     * @param {?} labels
     * @return {?}
     */
    IgxSliderComponent.prototype.setTickInterval = /**
     * @private
     * @param {?} labels
     * @return {?}
     */
    function (labels) {
        /** @type {?} */
        var interval;
        /** @type {?} */
        var trackProgress = 100;
        if (this.labelsViewEnabled) {
            // Calc ticks depending on the labels length;
            interval = ((trackProgress / (this.labels.length - 1) * 10)) / 10;
        }
        else {
            /** @type {?} */
            var trackRange = this.maxValue - this.minValue;
            interval = this.step > 1 ?
                (trackProgress / ((trackRange / this.step)) * 10) / 10
                : null;
        }
        /** @type {?} */
        var renderCallbackExecution = !this.continuous ? this.generateTickMarks('white', interval) : null;
        this.renderer.setStyle(this.ticks.nativeElement, 'background', renderCallbackExecution);
    };
    /**
     * @private
     * @return {?}
     */
    IgxSliderComponent.prototype.showThumbsIndicators = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.disabled) {
            return;
        }
        if (this._indicatorsTimer) {
            this._indicatorsDestroyer$.next(true);
            this._indicatorsTimer = null;
        }
        this.thumbTo.showThumbIndicators();
        if (this.thumbFrom) {
            this.thumbFrom.showThumbIndicators();
        }
    };
    /**
     * @private
     * @return {?}
     */
    IgxSliderComponent.prototype.hideThumbsIndicators = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.disabled) {
            return;
        }
        this._indicatorsTimer = timer(this.thumbLabelVisibilityDuration);
        this._indicatorsTimer.pipe(takeUntil(this._indicatorsDestroyer$)).subscribe(function () {
            _this.thumbTo.hideThumbIndicators();
            if (_this.thumbFrom) {
                _this.thumbFrom.hideThumbIndicators();
            }
        });
    };
    /**
     * @private
     * @return {?}
     */
    IgxSliderComponent.prototype.toggleThumbLabels = /**
     * @private
     * @return {?}
     */
    function () {
        this.showThumbsIndicators();
        this.hideThumbsIndicators();
    };
    /**
     * @private
     * @param {?} state
     * @return {?}
     */
    IgxSliderComponent.prototype.changeThumbFocusableState = /**
     * @private
     * @param {?} state
     * @return {?}
     */
    function (state) {
        /** @type {?} */
        var value = state ? -1 : 1;
        if (this.isRange) {
            this.thumbFrom.tabindex = value;
        }
        this.thumbTo.tabindex = value;
        this._cdr.detectChanges();
    };
    /**
     * @private
     * @param {?} goal
     * @param {?} positions
     * @return {?}
     */
    IgxSliderComponent.prototype.closestTo = /**
     * @private
     * @param {?} goal
     * @param {?} positions
     * @return {?}
     */
    function (goal, positions) {
        return positions.reduce(function (previous, current) {
            return (Math.abs(goal - current) < Math.abs(goal - previous) ? current : previous);
        });
    };
    /**
     * @private
     * @param {?} value
     * @param {?=} pMin
     * @param {?=} pMax
     * @return {?}
     */
    IgxSliderComponent.prototype.valueToFraction = /**
     * @private
     * @param {?} value
     * @param {?=} pMin
     * @param {?=} pMax
     * @return {?}
     */
    function (value, pMin, pMax) {
        if (pMin === void 0) { pMin = this._pMin; }
        if (pMax === void 0) { pMax = this._pMax; }
        return this.valueInRange((value - this.minValue) / (this.maxValue - this.minValue), pMin, pMax);
    };
    /**
     * @hidden
     * Normalizе the value when two-way data bind is used and {@link this.step} is set.
     * @param value
     */
    /**
     * @hidden
     * Normalizе the value when two-way data bind is used and {\@link this.step} is set.
     * @private
     * @param {?} value
     * @return {?}
     */
    IgxSliderComponent.prototype.normalizeByStep = /**
     * @hidden
     * Normalizе the value when two-way data bind is used and {\@link this.step} is set.
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (this.isRange) {
            this.value = {
                lower: ((/** @type {?} */ (value))).lower - (((/** @type {?} */ (value))).lower % this.step),
                upper: ((/** @type {?} */ (value))).upper - (((/** @type {?} */ (value))).upper % this.step)
            };
        }
        else {
            this.value = ((/** @type {?} */ (value))) - (((/** @type {?} */ (value))) % this.step);
        }
    };
    /**
     * @private
     * @return {?}
     */
    IgxSliderComponent.prototype.updateTrack = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var fromPosition = this.valueToFraction(this.lowerValue);
        /** @type {?} */
        var toPosition = this.valueToFraction(this.upperValue);
        /** @type {?} */
        var positionGap = toPosition - fromPosition;
        /** @type {?} */
        var trackLeftIndention = fromPosition;
        if (this.isRange) {
            if (positionGap) {
                trackLeftIndention = Math.round((1 / positionGap * fromPosition) * 100);
            }
            this.renderer.setStyle(this.track.nativeElement, 'transform', "scaleX(" + positionGap + ") translateX(" + trackLeftIndention + "%)");
        }
        else {
            this.renderer.setStyle(this.track.nativeElement, 'transform', "scaleX(" + toPosition + ")");
        }
    };
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    IgxSliderComponent.prototype.validateInitialValue = /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (value.lower < this.lowerBound && value.upper < this.lowerBound) {
            value.upper = this.lowerBound;
            value.lower = this.lowerBound;
        }
        if (value.lower > this.upperBound && value.upper > this.upperBound) {
            value.upper = this.upperBound;
            value.lower = this.upperBound;
        }
        if (value.upper < value.lower) {
            value.upper = this.upperValue;
            value.lower = this.lowerValue;
        }
        return value;
    };
    /**
     * @private
     * @param {?} thumb
     * @param {?} callback
     * @return {?}
     */
    IgxSliderComponent.prototype.subscribeTo = /**
     * @private
     * @param {?} thumb
     * @param {?} callback
     * @return {?}
     */
    function (thumb, callback) {
        if (!thumb) {
            return;
        }
        thumb.onThumbValueChange
            .pipe(takeUntil(this.unsubscriber(thumb)))
            .subscribe(function (value) { return callback(value, thumb.type); });
    };
    /**
     * @private
     * @param {?} thumb
     * @return {?}
     */
    IgxSliderComponent.prototype.unsubscriber = /**
     * @private
     * @param {?} thumb
     * @return {?}
     */
    function (thumb) {
        return merge(this._destroyer$, thumb.destroy);
    };
    /**
     * @private
     * @param {?} oldValue
     * @return {?}
     */
    IgxSliderComponent.prototype.hasValueChanged = /**
     * @private
     * @param {?} oldValue
     * @return {?}
     */
    function (oldValue) {
        /** @type {?} */
        var isSliderWithDifferentValue = !this.isRange && oldValue !== this.value;
        /** @type {?} */
        var isRangeWithOneDifferentValue = this.isRange &&
            (((/** @type {?} */ (oldValue))).lower !== ((/** @type {?} */ (this.value))).lower ||
                ((/** @type {?} */ (oldValue))).upper !== ((/** @type {?} */ (this.value))).upper);
        return isSliderWithDifferentValue || isRangeWithOneDifferentValue;
    };
    /**
     * @private
     * @param {?} oldValue
     * @return {?}
     */
    IgxSliderComponent.prototype.emitValueChanged = /**
     * @private
     * @param {?} oldValue
     * @return {?}
     */
    function (oldValue) {
        this.onValueChange.emit({ oldValue: oldValue, value: this.value });
    };
    IgxSliderComponent.decorators = [
        { type: Component, args: [{
                    providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: IgxSliderComponent, multi: true }],
                    selector: 'igx-slider',
                    template: "<div class=\"igx-slider__track\">\n    <div #track class=\"igx-slider__track-fill\"></div>\n    <div #ticks class=\"igx-slider__track-ticks\"></div>\n</div>\n<div class=\"igx-slider__thumbs\">\n    <igx-thumb *ngIf=\"isRange\"\n        #thumbFrom\n        [type]=\"0\"\n        [value]=\"lowerLabel\"\n        [disabled]=\"disabled\"\n        [continuous]=\"continuous\"\n        [onPan]=\"onPan\"\n        [stepDistance]=\"stepDistance\"\n        [step]=\"step\"\n        [templateRef]=\"thumbFromTemplateRef\"\n        [context]=\"context\"\n        (onChange)=\"onThumbChange()\"\n        (onHoverChange)=\"onHoverChange($event)\"\n        [thumbLabelVisibilityDuration]=\"thumbLabelVisibilityDuration\"></igx-thumb>\n    <igx-thumb\n        #thumbTo\n        [type]=\"1\"\n        [value]=\"upperLabel\"\n        [disabled]=\"disabled\"\n        [continuous]=\"continuous\"\n        [onPan]=\"onPan\"\n        [stepDistance]=\"stepDistance\"\n        [step]=\"step\"\n        [templateRef]=\"thumbToTemplateRef\"\n        [context]=\"context\"\n        (onChange)=\"onThumbChange()\"\n        (onHoverChange)=\"onHoverChange($event)\"\n        [thumbLabelVisibilityDuration]=\"thumbLabelVisibilityDuration\"></igx-thumb>\n</div>\n",
                    styles: ["\n        :host {\n            display: block;\n        }\n    "]
                }] }
    ];
    /** @nocollapse */
    IgxSliderComponent.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: ElementRef },
        { type: ChangeDetectorRef }
    ]; };
    IgxSliderComponent.propDecorators = {
        track: [{ type: ViewChild, args: ['track', { static: true },] }],
        ticks: [{ type: ViewChild, args: ['ticks', { static: true },] }],
        thumbs: [{ type: ViewChildren, args: [IgxSliderThumbComponent,] }],
        thumbFromTemplateRef: [{ type: ContentChild, args: [IgxThumbFromTemplateDirective, { read: TemplateRef, static: false },] }],
        thumbToTemplateRef: [{ type: ContentChild, args: [IgxThumbToTemplateDirective, { read: TemplateRef, static: true },] }],
        role: [{ type: HostBinding, args: ["attr.role",] }],
        valuemin: [{ type: HostBinding, args: ["attr.aria-valuemin",] }],
        valuemax: [{ type: HostBinding, args: ["attr.aria-valuemax",] }],
        readonly: [{ type: HostBinding, args: ["attr.aria-readonly",] }],
        slierClass: [{ type: HostBinding, args: ['class.igx-slider',] }],
        disabledClass: [{ type: HostBinding, args: ['class.igx-slider--disabled',] }],
        id: [{ type: HostBinding, args: ['attr.id',] }, { type: Input }],
        type: [{ type: Input }],
        thumbLabelVisibilityDuration: [{ type: Input }],
        labels: [{ type: Input }],
        step: [{ type: Input }],
        disabled: [{ type: Input }],
        continuous: [{ type: Input }],
        isContinuous: [{ type: Input }],
        maxValue: [{ type: Input }],
        minValue: [{ type: Input }],
        lowerBound: [{ type: Input }],
        upperBound: [{ type: Input }],
        value: [{ type: Input }],
        onValueChange: [{ type: Output }],
        onPointerDown: [{ type: HostListener, args: ['pointerdown', ['$event'],] }],
        onPointerUp: [{ type: HostListener, args: ['pointerup', ['$event'],] }],
        onFocus: [{ type: HostListener, args: ['focus',] }],
        onPanListener: [{ type: HostListener, args: ['pan', ['$event'],] }],
        onPanStart: [{ type: HostListener, args: ['panstart',] }],
        onPanEnd: [{ type: HostListener, args: ['panend',] }],
        onTapListener: [{ type: HostListener, args: ['tap', ['$event'],] }]
    };
    tslib_1.__decorate([
        DeprecateProperty("IgxSliderComponent `isContinuous` property is deprecated.\nUse `continuous` instead."),
        tslib_1.__metadata("design:type", Boolean),
        tslib_1.__metadata("design:paramtypes", [Boolean])
    ], IgxSliderComponent.prototype, "isContinuous", null);
    return IgxSliderComponent;
}());
export { IgxSliderComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    IgxSliderComponent.prototype._pMin;
    /**
     * @type {?}
     * @private
     */
    IgxSliderComponent.prototype._pMax;
    /**
     * @type {?}
     * @private
     */
    IgxSliderComponent.prototype._hasViewInit;
    /**
     * @type {?}
     * @private
     */
    IgxSliderComponent.prototype._minValue;
    /**
     * @type {?}
     * @private
     */
    IgxSliderComponent.prototype._maxValue;
    /**
     * @type {?}
     * @private
     */
    IgxSliderComponent.prototype._lowerBound;
    /**
     * @type {?}
     * @private
     */
    IgxSliderComponent.prototype._upperBound;
    /**
     * @type {?}
     * @private
     */
    IgxSliderComponent.prototype._lowerValue;
    /**
     * @type {?}
     * @private
     */
    IgxSliderComponent.prototype._upperValue;
    /**
     * @type {?}
     * @private
     */
    IgxSliderComponent.prototype._continuous;
    /**
     * @type {?}
     * @private
     */
    IgxSliderComponent.prototype._disabled;
    /**
     * @type {?}
     * @private
     */
    IgxSliderComponent.prototype._step;
    /**
     * @type {?}
     * @private
     */
    IgxSliderComponent.prototype._labels;
    /**
     * @type {?}
     * @private
     */
    IgxSliderComponent.prototype._type;
    /**
     * @type {?}
     * @private
     */
    IgxSliderComponent.prototype._destroyer$;
    /**
     * @type {?}
     * @private
     */
    IgxSliderComponent.prototype._indicatorsDestroyer$;
    /**
     * @type {?}
     * @private
     */
    IgxSliderComponent.prototype._indicatorsTimer;
    /**
     * @type {?}
     * @private
     */
    IgxSliderComponent.prototype._onChangeCallback;
    /**
     * @type {?}
     * @private
     */
    IgxSliderComponent.prototype._onTouchedCallback;
    /**
     * @hidden
     * @type {?}
     * @private
     */
    IgxSliderComponent.prototype.track;
    /**
     * @hidden
     * @type {?}
     * @private
     */
    IgxSliderComponent.prototype.ticks;
    /**
     * @hidden
     * @type {?}
     * @private
     */
    IgxSliderComponent.prototype.thumbs;
    /**
     * @hidden
     * @type {?}
     */
    IgxSliderComponent.prototype.stepDistance;
    /**
     * @hidden
     * @type {?}
     */
    IgxSliderComponent.prototype.onPan;
    /**
     * @hidden
     * @type {?}
     */
    IgxSliderComponent.prototype.thumbFromTemplateRef;
    /**
     * @hidden
     * @type {?}
     */
    IgxSliderComponent.prototype.thumbToTemplateRef;
    /**
     * @hidden
     * @type {?}
     */
    IgxSliderComponent.prototype.role;
    /**
     * @hidden
     * @type {?}
     */
    IgxSliderComponent.prototype.slierClass;
    /**
     * An \@Input property that sets the value of the `id` attribute.
     * If not provided it will be automatically generated.
     * ```html
     * <igx-slider [id]="'igx-slider-32'" [(ngModel)]="task.percentCompleted" [step]="5" [lowerBound]="20">
     * ```
     * @type {?}
     */
    IgxSliderComponent.prototype.id;
    /**
     * An \@Input property that sets the duration visibility of thumbs labels. The default value is 750 milliseconds.
     * ```html
     * <igx-slider #slider [thumbLabelVisibilityDuration]="3000" [(ngModel)]="task.percentCompleted" [step]="5">
     * ```
     * @type {?}
     */
    IgxSliderComponent.prototype.thumbLabelVisibilityDuration;
    /**
     * This event is emitted when user has stopped interacting the thumb and value is changed.
     * ```typescript
     * public change(event){
     *    alert("The value has been changed!");
     * }
     * ```
     * ```html
     * <igx-slider (onValueChange)="change($event)" #slider [(ngModel)]="task.percentCompleted" [step]="5">
     * ```
     * @type {?}
     */
    IgxSliderComponent.prototype.onValueChange;
    /**
     * @type {?}
     * @private
     */
    IgxSliderComponent.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    IgxSliderComponent.prototype._el;
    /**
     * @type {?}
     * @private
     */
    IgxSliderComponent.prototype._cdr;
}
/**
 * @hidden
 */
var IgxSliderModule = /** @class */ (function () {
    function IgxSliderModule() {
    }
    IgxSliderModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [IgxSliderComponent, IgxThumbFromTemplateDirective, IgxThumbToTemplateDirective, IgxSliderThumbComponent],
                    exports: [IgxSliderComponent, IgxThumbFromTemplateDirective, IgxThumbToTemplateDirective, IgxSliderThumbComponent],
                    imports: [CommonModule]
                },] }
    ];
    return IgxSliderModule;
}());
export { IgxSliderModule };
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lnbml0ZXVpLWFuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvc2xpZGVyL3NsaWRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUNZLFNBQVMsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUNsRCxXQUFXLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBVSxNQUFNLEVBQUUsU0FBUyxFQUN2RCxTQUFTLEVBQ1QsV0FBVyxFQUNYLFlBQVksRUFHWixZQUFZLEVBQ1osWUFBWSxFQUNaLFNBQVMsRUFDVCxpQkFBaUIsRUFDcEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXpFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ2hFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFjLEtBQUssRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN6RCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFFLFlBQVksRUFDakIsNkJBQTZCLEVBQzdCLDJCQUEyQixFQUUzQixVQUFVLEVBRWIsTUFBTSxpQkFBaUIsQ0FBQzs7SUFHbkIsSUFBSSxHQUFHO0FBQ2IsQ0FBQzs7O0lBRUcsT0FBTyxHQUFHLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQmY7SUE2a0JJLDRCQUFvQixRQUFtQixFQUFVLEdBQWUsRUFBVSxJQUF1QjtRQUE3RSxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQVUsUUFBRyxHQUFILEdBQUcsQ0FBWTtRQUFVLFNBQUksR0FBSixJQUFJLENBQW1COztRQTFqQnpGLFVB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QTZCOzs7OztJQUM3Qix5Q0FBNkI7Ozs7O0lBQzdCLHlDQUE0Qjs7Ozs7SUFDNUIsdUNBQTBCOzs7OztJQUMxQixtQ0FBa0I7Ozs7O0lBRWxCLHFDQUFvRTs7Ozs7SUFDcEUsbUNBQWtDOzs7OztJQUVsQyx5Q0FBNkM7Ozs7O0lBQzdDLG1EQUF1RDs7Ozs7SUFDdkQsOENBQTBDOzs7OztJQUcxQywrQ0FBbUQ7Ozs7O0lBQ25ELGdEQUE4Qzs7Ozs7O0lBSzlDLG1DQUMwQjs7Ozs7O0lBSzFCLG1DQUMwQjs7Ozs7O0lBSzFCLG9DQUM4Rjs7Ozs7SUFhOUYsMENBQWlDOzs7OztJQUtqQyxtQ0FBc0Q7Ozs7O0lBS3RELGtEQUM4Qzs7Ozs7SUFLOUMsZ0RBQzRDOzs7OztJQUs1QyxrQ0FDdUI7Ozs7O0lBNkJ2Qix3Q0FDeUI7Ozs7Ozs7OztJQWlCekIsZ0NBRXNDOzs7Ozs7OztJQStDdEMsMERBQzBDOzs7Ozs7Ozs7Ozs7O0lBdVkxQywyQ0FDdUU7Ozs7O0lBRzNELHNDQUEyQjs7Ozs7SUFBRSxpQ0FBdUI7Ozs7O0lBQUUsa0NBQStCOzs7OztBQTJsQnJHO0lBQUE7SUFNQSxDQUFDOztnQkFOQSxRQUFRLFNBQUM7b0JBQ04sWUFBWSxFQUFFLENBQUMsa0JBQWtCLEVBQUUsNkJBQTZCLEVBQUUsMkJBQTJCLEVBQUUsdUJBQXVCLENBQUM7b0JBQ3ZILE9BQU8sRUFBRSxDQUFDLGtCQUFrQixFQUFFLDZCQUE2QixFQUFFLDJCQUEyQixFQUFFLHVCQUF1QixDQUFDO29CQUNsSCxPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7aUJBQzFCOztJQUVELHNCQUFDO0NBQUEsQUFORCxJQU1DO1NBRFksZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge1xuICAgIEFmdGVyVmlld0luaXQsIENvbXBvbmVudCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLFxuICAgIEhvc3RCaW5kaW5nLCBJbnB1dCwgTmdNb2R1bGUsIE9uSW5pdCwgT3V0cHV0LCBSZW5kZXJlcjIsXG4gICAgVmlld0NoaWxkLFxuICAgIFRlbXBsYXRlUmVmLFxuICAgIENvbnRlbnRDaGlsZCxcbiAgICBBZnRlckNvbnRlbnRJbml0LFxuICAgIE9uRGVzdHJveSxcbiAgICBIb3N0TGlzdGVuZXIsXG4gICAgVmlld0NoaWxkcmVuLFxuICAgIFF1ZXJ5TGlzdCxcbiAgICBDaGFuZ2VEZXRlY3RvclJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEVkaXRvclByb3ZpZGVyIH0gZnJvbSAnLi4vY29yZS9lZGl0LXByb3ZpZGVyJztcbmltcG9ydCB7IERlcHJlY2F0ZVByb3BlcnR5IH0gZnJvbSAnLi4vY29yZS9kZXByZWNhdGVEZWNvcmF0b3JzJztcbmltcG9ydCB7IElneFNsaWRlclRodW1iQ29tcG9uZW50IH0gZnJvbSAnLi90aHVtYi90aHVtYi1zbGlkZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFN1YmplY3QsIG1lcmdlLCBPYnNlcnZhYmxlLCB0aW1lciB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgU2xpZGVySGFuZGxlLFxuICAgIElneFRodW1iRnJvbVRlbXBsYXRlRGlyZWN0aXZlLFxuICAgIElneFRodW1iVG9UZW1wbGF0ZURpcmVjdGl2ZSxcbiAgICBJUmFuZ2VTbGlkZXJWYWx1ZSxcbiAgICBTbGlkZXJUeXBlLFxuICAgIElTbGlkZXJWYWx1ZUNoYW5nZUV2ZW50QXJnc1xufSBmcm9tICcuL3NsaWRlci5jb21tb24nO1xuXG5cbmNvbnN0IG5vb3AgPSAoKSA9PiB7XG59O1xuXG5sZXQgTkVYVF9JRCA9IDA7XG5cbi8qKlxuICogKipJZ25pdGUgVUkgZm9yIEFuZ3VsYXIgU2xpZGVyKiogLVxuICogW0RvY3VtZW50YXRpb25dKGh0dHBzOi8vd3d3LmluZnJhZ2lzdGljcy5jb20vcHJvZHVjdHMvaWduaXRlLXVpLWFuZ3VsYXIvYW5ndWxhci9jb21wb25lbnRzL3NsaWRlci5odG1sKVxuICpcbiAqIFRoZSBJZ25pdGUgVUkgU2xpZGVyIGFsbG93cyBzZWxlY3Rpb24gaW4gYSBnaXZlbiByYW5nZSBieSBtb3ZpbmcgdGhlIHRodW1iIGFsb25nIHRoZSB0cmFjay4gVGhlIHRyYWNrXG4gKiBjYW4gYmUgZGVmaW5lZCBhcyBjb250aW51b3VzIG9yIHN0ZXBwZWQsIGFuZCB5b3UgY2FuIGNob29zZSBiZXR3ZWVuIHNpbmdsZSBhbmQgcmFuZ2Ugc2xpZGVyIHR5cGVzLlxuICpcbiAqIEV4YW1wbGU6XG4gKiBgYGBodG1sXG4gKiA8aWd4LXNsaWRlciBpZD1cInNsaWRlclwiXG4gKiAgICAgICAgICAgIFttaW5WYWx1ZV09XCIwXCIgW21heFZhbHVlXT1cIjEwMFwiXG4gKiAgICAgICAgICAgIFtjb250aW51b3VzXT10cnVlIFsobmdNb2RlbCldPVwidm9sdW1lXCI+XG4gKiA8L2lneC1zbGlkZXI+XG4gKiBgYGBcbiAqL1xuQENvbXBvbmVudCh7XG4gICAgcHJvdmlkZXJzOiBbeyBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUiwgdXNlRXhpc3Rpbmc6IElneFNsaWRlckNvbXBvbmVudCwgbXVsdGk6IHRydWUgfV0sXG4gICAgc2VsZWN0b3I6ICdpZ3gtc2xpZGVyJyxcbiAgICB0ZW1wbGF0ZVVybDogJ3NsaWRlci5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVzOiBbYFxuICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgfVxuICAgIGBdXG59KVxuZXhwb3J0IGNsYXNzIElneFNsaWRlckNvbXBvbmVudCBpbXBsZW1lbnRzXG4gICAgQ29udHJvbFZhbHVlQWNjZXNzb3IsXG4gICAgRWRpdG9yUHJvdmlkZXIsXG4gICAgT25Jbml0LFxuICAgIEFmdGVyVmlld0luaXQsXG4gICAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgICBPbkRlc3Ryb3kge1xuXG4gICAgLy8gTGltaXQgaGFuZGxlIHRyYXZlbCB6b25lXG4gICAgcHJpdmF0ZSBfcE1pbiA9IDA7XG4gICAgcHJpdmF0ZSBfcE1heCA9IDE7XG5cbiAgICAvLyBGcm9tL3VwcGVyVmFsdWUgaW4gcGVyY2VudCB2YWx1ZXNcbiAgICBwcml2YXRlIF9oYXNWaWV3SW5pdCA9IGZhbHNlO1xuICAgIHByaXZhdGUgX21pblZhbHVlID0gMDtcbiAgICBwcml2YXRlIF9tYXhWYWx1ZSA9IDEwMDtcbiAgICBwcml2YXRlIF9sb3dlckJvdW5kPzogbnVtYmVyO1xuICAgIHByaXZhdGUgX3VwcGVyQm91bmQ/OiBudW1iZXI7XG4gICAgcHJpdmF0ZSBfbG93ZXJWYWx1ZT86IG51bWJlcjtcbiAgICBwcml2YXRlIF91cHBlclZhbHVlPzogbnVtYmVyO1xuICAgIHByaXZhdGUgX2NvbnRpbnVvdXMgPSBmYWxzZTtcbiAgICBwcml2YXRlIF9kaXNhYmxlZCA9IGZhbHNlO1xuICAgIHByaXZhdGUgX3N0ZXAgPSAxO1xuXG4gICAgcHJpdmF0ZSBfbGFiZWxzID0gbmV3IEFycmF5PG51bWJlcnxzdHJpbmd8Ym9vbGVhbnxudWxsfHVuZGVmaW5lZD4oKTtcbiAgICBwcml2YXRlIF90eXBlID0gU2xpZGVyVHlwZS5TTElERVI7XG5cbiAgICBwcml2YXRlIF9kZXN0cm95ZXIkID0gbmV3IFN1YmplY3Q8Ym9vbGVhbj4oKTtcbiAgICBwcml2YXRlIF9pbmRpY2F0b3JzRGVzdHJveWVyJCA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XG4gICAgcHJpdmF0ZSBfaW5kaWNhdG9yc1RpbWVyOiBPYnNlcnZhYmxlPGFueT47XG5cblxuICAgIHByaXZhdGUgX29uQ2hhbmdlQ2FsbGJhY2s6IChfOiBhbnkpID0+IHZvaWQgPSBub29wO1xuICAgIHByaXZhdGUgX29uVG91Y2hlZENhbGxiYWNrOiAoKSA9PiB2b2lkID0gbm9vcDtcblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBAVmlld0NoaWxkKCd0cmFjaycsIHsgc3RhdGljOiB0cnVlIH0pXG4gICAgcHJpdmF0ZSB0cmFjazogRWxlbWVudFJlZjtcblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBAVmlld0NoaWxkKCd0aWNrcycsIHsgc3RhdGljOiB0cnVlIH0pXG4gICAgcHJpdmF0ZSB0aWNrczogRWxlbWVudFJlZjtcblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBAVmlld0NoaWxkcmVuKElneFNsaWRlclRodW1iQ29tcG9uZW50KVxuICAgIHByaXZhdGUgdGh1bWJzOiBRdWVyeUxpc3Q8SWd4U2xpZGVyVGh1bWJDb21wb25lbnQ+ID0gbmV3IFF1ZXJ5TGlzdDxJZ3hTbGlkZXJUaHVtYkNvbXBvbmVudD4oKTtcblxuICAgIHByaXZhdGUgZ2V0IHRodW1iRnJvbSgpOiBJZ3hTbGlkZXJUaHVtYkNvbXBvbmVudCB7XG4gICAgICAgIHJldHVybiB0aGlzLnRodW1icy5maW5kKHRodW1iID0+IHRodW1iLnR5cGUgPT09IFNsaWRlckhhbmRsZS5GUk9NKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldCB0aHVtYlRvKCk6IElneFNsaWRlclRodW1iQ29tcG9uZW50IHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGh1bWJzLmZpbmQodGh1bWIgPT4gdGh1bWIudHlwZSA9PT0gU2xpZGVySGFuZGxlLlRPKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIHN0ZXBEaXN0YW5jZSA9IHRoaXMuX3N0ZXA7XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIG9uUGFuOiBTdWJqZWN0PG51bWJlcj4gPSBuZXcgU3ViamVjdDxudW1iZXI+KCk7XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgQENvbnRlbnRDaGlsZChJZ3hUaHVtYkZyb21UZW1wbGF0ZURpcmVjdGl2ZSwgeyByZWFkOiBUZW1wbGF0ZVJlZiwgc3RhdGljOiBmYWxzZSB9KVxuICAgIHB1YmxpYyB0aHVtYkZyb21UZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55PjtcblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBAQ29udGVudENoaWxkKElneFRodW1iVG9UZW1wbGF0ZURpcmVjdGl2ZSwgeyByZWFkOiBUZW1wbGF0ZVJlZiwgc3RhdGljOiB0cnVlIH0pXG4gICAgcHVibGljIHRodW1iVG9UZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55PjtcblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBASG9zdEJpbmRpbmcoYGF0dHIucm9sZWApXG4gICAgcHVibGljIHJvbGUgPSAnc2xpZGVyJztcblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBASG9zdEJpbmRpbmcoYGF0dHIuYXJpYS12YWx1ZW1pbmApXG4gICAgcHVibGljIGdldCB2YWx1ZW1pbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubWluVmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIEBIb3N0QmluZGluZyhgYXR0ci5hcmlhLXZhbHVlbWF4YClcbiAgICBwdWJsaWMgZ2V0IHZhbHVlbWF4KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5tYXhWYWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgQEhvc3RCaW5kaW5nKGBhdHRyLmFyaWEtcmVhZG9ubHlgKVxuICAgIHB1YmxpYyBnZXQgcmVhZG9ubHkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRpc2FibGVkO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBASG9zdEJpbmRpbmcoJ2NsYXNzLmlneC1zbGlkZXInKVxuICAgIHB1YmxpYyBzbGllckNsYXNzID0gdHJ1ZTtcblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBASG9zdEJpbmRpbmcoJ2NsYXNzLmlneC1zbGlkZXItLWRpc2FibGVkJylcbiAgICBwdWJsaWMgZ2V0IGRpc2FibGVkQ2xhc3MoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRpc2FibGVkO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFuIEBJbnB1dCBwcm9wZXJ0eSB0aGF0IHNldHMgdGhlIHZhbHVlIG9mIHRoZSBgaWRgIGF0dHJpYnV0ZS5cbiAgICAgKiBJZiBub3QgcHJvdmlkZWQgaXQgd2lsbCBiZSBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlZC5cbiAgICAgKiBgYGBodG1sXG4gICAgICogPGlneC1zbGlkZXIgW2lkXT1cIidpZ3gtc2xpZGVyLTMyJ1wiIFsobmdNb2RlbCldPVwidGFzay5wZXJjZW50Q29tcGxldGVkXCIgW3N0ZXBdPVwiNVwiIFtsb3dlckJvdW5kXT1cIjIwXCI+XG4gICAgICogYGBgXG4gICAgICovXG4gICAgQEhvc3RCaW5kaW5nKCdhdHRyLmlkJylcbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBpZCA9IGBpZ3gtc2xpZGVyLSR7TkVYVF9JRCsrfWA7XG5cbiAgICAvKipcbiAgICAgKiBBbiBASW5wdXQgcHJvcGVydHkgdGhhdCBnZXRzIHRoZSB0eXBlIG9mIHRoZSBgSWd4U2xpZGVyQ29tcG9uZW50YC4gVGhlIHNsaWRlciBjYW4gYmUgU2xpZGVyVHlwZS5TTElERVIoZGVmYXVsdCkgb3IgU2xpZGVyVHlwZS5SQU5HRS5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogQFZpZXdDaGlsZChcInNsaWRlcjJcIilcbiAgICAgKiBwdWJsaWMgc2xpZGVyOiBJZ3hTbGlkZXJDb21wb25lbnQ7XG4gICAgICogbmdBZnRlclZpZXdJbml0KCl7XG4gICAgICogICAgIGxldCB0eXBlID0gdGhpcy5zbGlkZXIudHlwZTtcbiAgICAgKiB9XG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZ2V0IHR5cGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl90eXBlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFuIEBJbnB1dCBwcm9wZXJ0eSB0aGF0IHNldHMgdGhlIHR5cGUgb2YgdGhlIGBJZ3hTbGlkZXJDb21wb25lbnRgLiBUaGUgc2xpZGVyIGNhbiBiZSBTbGlkZXJUeXBlLlNMSURFUihkZWZhdWx0KSBvciBTbGlkZXJUeXBlLlJBTkdFLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBzbGlkZXJUeXBlOiBTbGlkZXJUeXBlID0gU2xpZGVyVHlwZS5SQU5HRTtcbiAgICAgKiBgYGBcbiAgICAgKiBgYGBodG1sXG4gICAgICogPGlneC1zbGlkZXIgI3NsaWRlcjIgW3R5cGVdPVwic2xpZGVyVHlwZVwiIFsobmdNb2RlbCldPVwicmFuZ2VWYWx1ZVwiIFttaW5WYWx1ZV09XCIwXCIgW21heFZhbHVlXT1cIjEwMFwiPlxuICAgICAqIGBgYFxuICAgICAqL1xuICAgIHB1YmxpYyBzZXQgdHlwZSh0eXBlOiBTbGlkZXJUeXBlKSB7XG4gICAgICAgIHRoaXMuX3R5cGUgPSB0eXBlO1xuXG4gICAgICAgIGlmICh0eXBlID09PSBTbGlkZXJUeXBlLlNMSURFUikge1xuICAgICAgICAgICAgdGhpcy5sb3dlclZhbHVlID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmxhYmVsc1ZpZXdFbmFibGVkICYmIHRoaXMudXBwZXJWYWx1ZSA+IHRoaXMubWF4VmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMudXBwZXJWYWx1ZSA9IHRoaXMubGFiZWxzLmxlbmd0aCAtIDE7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5faGFzVmlld0luaXQpIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlVHJhY2soKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqQW4gQElucHV0IHByb3BlcnR5IHRoYXQgc2V0cyB0aGUgZHVyYXRpb24gdmlzaWJpbGl0eSBvZiB0aHVtYnMgbGFiZWxzLiBUaGUgZGVmYXVsdCB2YWx1ZSBpcyA3NTAgbWlsbGlzZWNvbmRzLlxuICAgICAqYGBgaHRtbFxuICAgICAqPGlneC1zbGlkZXIgI3NsaWRlciBbdGh1bWJMYWJlbFZpc2liaWxpdHlEdXJhdGlvbl09XCIzMDAwXCIgWyhuZ01vZGVsKV09XCJ0YXNrLnBlcmNlbnRDb21wbGV0ZWRcIiBbc3RlcF09XCI1XCI+XG4gICAgICpgYGBcbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyB0aHVtYkxhYmVsVmlzaWJpbGl0eUR1cmF0aW9uID0gNzUwO1xuXG5cbiAgICAvKipcbiAgICAgKiBFbmFibGVzIGBsYWJlbFZpZXdgLCBieSBhY2NlcHRpbmcgYSBjb2xsZWN0aW9uIG9mIHByaW1pdGl2ZSB2YWx1ZXMgd2l0aCBtb3JlIHRoYW4gb25lIGVsZW1lbnQuXG4gICAgICogRWFjaCBlbGVtZW50IHdpbGwgYmUgZXF1YWxseSBzcHJlYWQgb3ZlciB0aGUgc2xpZGVyIGFuZCBpdCB3aWxsIHNlcnZlIGFzIGEgdGh1bWIgbGFiZWwuXG4gICAgICogT25jZSB0aGUgcHJvcGVydHkgaXMgc2V0LCBpdCB3aWxsIHByZWNlbmRlbmNlIG92ZXIge0BsaW5rIG1heFZhbHVlfSwge0BsaW5rIG1pblZhbHVlfSwge0BsaW5rIHN0ZXB9LlxuICAgICAqIFRoaXMgbWVhbnMgdGhhdCB0aGUgbWFuaXB1bGF0aW9uIGZvciB0aG9zZSBwcm9wZXJ0aWVzIHdvbid0IGJlIGFsbG93ZWQuXG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZ2V0IGxhYmVscygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xhYmVscztcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IGxhYmVscyhsYWJlbHM6IEFycmF5PG51bWJlcnxzdHJpbmd8Ym9vbGVhbnxudWxsfHVuZGVmaW5lZD4pIHtcbiAgICAgICAgdGhpcy5fbGFiZWxzID0gbGFiZWxzO1xuXG4gICAgICAgIHRoaXMuX3BNYXggPSAxO1xuXG4gICAgICAgIGlmICh0aGlzLl9oYXNWaWV3SW5pdCkge1xuICAgICAgICAgICAgdGhpcy5zdGVwRGlzdGFuY2UgPSB0aGlzLmNhbGN1bGF0ZVN0ZXBEaXN0YW5jZSgpO1xuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbkhhbmRsZXNBbmRVcGRhdGVUcmFjaygpO1xuICAgICAgICAgICAgdGhpcy5zZXRUaWNrSW50ZXJ2YWwobGFiZWxzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHRlbXBsYXRlIGNvbnRleHQgY29ycmVzcG9uZGluZ1xuICAgICAqIHRvIHtAbGluayBJZ3hUaHVtYkZyb21UZW1wbGF0ZURpcmVjdGl2ZX0gYW5kIHtAbGluayBJZ3hUaHVtYlRvVGVtcGxhdGVEaXJlY3RpdmV9IHRlbXBsYXRlcy5cbiAgICAgKlxuICAgICAqIHJldHVybiB7XG4gICAgICogICRpbXBsaWNpdDoge0BsaW5rIHZhbHVlfSxcbiAgICAgKiAgbGFiZWxzOiB7QGxpbmsgbGFiZWxzfVxuICAgICAqIH1cbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0IGNvbnRleHQoKTogYW55IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICRpbXBsaWNpdDogdGhpcy52YWx1ZSxcbiAgICAgICAgICAgIGxhYmVsczogdGhpcy5sYWJlbHNcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBbiBASW5wdXQgcHJvcGVydHkgdGhhdCBzZXRzIHRoZSBpbmNyZW1lbnRhbC9kZWNyZW1lbnRhbCBzdGVwIG9mIHRoZSB2YWx1ZSB3aGVuIGRyYWdnaW5nIHRoZSB0aHVtYi5cbiAgICAgKiBUaGUgZGVmYXVsdCBzdGVwIGlzIDEsIGFuZCBzdGVwIHNob3VsZCBub3QgYmUgbGVzcyBvciBlcXVhbCB0aGFuIDAuXG4gICAgICogYGBgaHRtbFxuICAgICAqIDxpZ3gtc2xpZGVyICNzbGlkZXIgWyhuZ01vZGVsKV09XCJ0YXNrLnBlcmNlbnRDb21wbGV0ZWRcIiBbc3RlcF09XCI1XCI+XG4gICAgICogYGBgXG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgc2V0IHN0ZXAoc3RlcDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX3N0ZXAgPSBzdGVwO1xuXG4gICAgICAgIGlmICh0aGlzLl9oYXNWaWV3SW5pdCkge1xuICAgICAgICAgICAgdGhpcy5zdGVwRGlzdGFuY2UgPSB0aGlzLmNhbGN1bGF0ZVN0ZXBEaXN0YW5jZSgpO1xuICAgICAgICAgICAgdGhpcy5ub3JtYWxpemVCeVN0ZXAodGhpcy52YWx1ZSk7XG4gICAgICAgICAgICB0aGlzLnNldFRpY2tJbnRlcnZhbCh0aGlzLmxhYmVscyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBpbmNyZW1lbnRhbC9kZWNyZW1lbnRhbCBkcmFnZ2luZyBzdGVwIG9mIHRoZSB7QGxpbmsgSWd4U2xpZGVyQ29tcG9uZW50fS5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogQFZpZXdDaGlsZChcInNsaWRlcjJcIilcbiAgICAgKiBwdWJsaWMgc2xpZGVyOiBJZ3hTbGlkZXJDb21wb25lbnQ7XG4gICAgICogbmdBZnRlclZpZXdJbml0KCl7XG4gICAgICogICAgIGxldCBzdGVwID0gdGhpcy5zbGlkZXIuc3RlcDtcbiAgICAgKiB9XG4gICAgICogYGBgXG4gICAgICovXG4gICAgcHVibGljIGdldCBzdGVwKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5sYWJlbHNWaWV3RW5hYmxlZCA/IDEgOiB0aGlzLl9zdGVwO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgaWYgdGhlIHtAbGluayBJZ3hTbGlkZXJDb21wb25lbnR9IGlzIGRpc2FibGVkLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBAVmlld0NoaWxkKFwic2xpZGVyMlwiKVxuICAgICAqIHB1YmxpYyBzbGlkZXI6IElneFNsaWRlckNvbXBvbmVudDtcbiAgICAgKiBuZ0FmdGVyVmlld0luaXQoKXtcbiAgICAgKiAgICAgbGV0IGlzRGlzYWJsZWQgPSB0aGlzLnNsaWRlci5kaXNhYmxlZDtcbiAgICAgKiB9XG4gICAgICogYGBgXG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZ2V0IGRpc2FibGVkKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGlzYWJsZWQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpBbiBASW5wdXQgcHJvcGVydHkgdGhhdCBkaXNhYmxlcyBvciBlbmFibGVzIFVJIGludGVyYWN0aW9uLlxuICAgICAqYGBgaHRtbFxuICAgICAqPGlneC1zbGlkZXIgI3NsaWRlciBbZGlzYWJsZWRdPVwiJ3RydWUnXCIgWyhuZ01vZGVsKV09XCJ0YXNrLnBlcmNlbnRDb21wbGV0ZWRcIiBbc3RlcF09XCI1XCIgW2xvd2VyQm91bmRdPVwiMjBcIj5cbiAgICAgKmBgYFxuICAgICAqL1xuICAgIHB1YmxpYyBzZXQgZGlzYWJsZWQoZGlzYWJsZTogYm9vbGVhbikge1xuICAgICAgICB0aGlzLl9kaXNhYmxlZCA9IGRpc2FibGU7XG5cbiAgICAgICAgaWYgKHRoaXMuX2hhc1ZpZXdJbml0KSB7XG4gICAgICAgICAgICB0aGlzLmNoYW5nZVRodW1iRm9jdXNhYmxlU3RhdGUoZGlzYWJsZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGlmIHRoZSB7QGxpbmsgSWd4U2xpZGVyQ29tcG9uZW50fSBpcyBzZXQgYXMgY29udGludW91cy5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogQFZpZXdDaGlsZChcInNsaWRlcjJcIilcbiAgICAgKiBwdWJsaWMgc2xpZGVyOiBJZ3hTbGlkZXJDb21wb25lbnQ7XG4gICAgICogbmdBZnRlclZpZXdJbml0KCl7XG4gICAgICogICAgIGxldCBjb250aW51b3VzID0gdGhpcy5zbGlkZXIuY29udGludW91cztcbiAgICAgKiB9XG4gICAgICogYGBgXG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZ2V0IGNvbnRpbnVvdXMoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jb250aW51b3VzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFuIEBJbnB1dCBwcm9wZXJ0eSB0aGF0IG1hcmtzIHRoZSB7QGxpbmsgSWd4U2xpZGVyQ29tcG9uZW50fSBhcyBjb250aW51b3VzLlxuICAgICAqIEJ5IGRlZmF1bHQgaXMgY29uc2lkZXJlZCB0aGF0IHRoZSB7QGxpbmsgSWd4U2xpZGVyQ29tcG9uZW50fSBpcyBkaXNjcmV0ZS5cbiAgICAgKiBEaXNjcmV0ZSB7QGxpbmsgSWd4U2xpZGVyQ29tcG9uZW50fSBkb2VzIG5vdCBoYXZlIHRpY2tzIGFuZCBkb2VzIG5vdCBzaG93cyBidWJibGUgbGFiZWxzIGZvciB2YWx1ZXMuXG4gICAgICogYGBgaHRtbFxuICAgICAqIDxpZ3gtc2xpZGVyICNzbGlkZXIgW2NvbnRpbnVvdXNdPVwiJ3RydWUnXCIgWyhuZ01vZGVsKV09XCJ0YXNrLnBlcmNlbnRDb21wbGV0ZWRcIiBbc3RlcF09XCI1XCIgW2xvd2VyQm91bmRdPVwiMjBcIj5cbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBwdWJsaWMgc2V0IGNvbnRpbnVvdXMoY29udGludW91czogYm9vbGVhbikge1xuICAgICAgICBpZiAodGhpcy5sYWJlbHNWaWV3RW5hYmxlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fY29udGludW91cyA9IGNvbnRpbnVvdXM7XG4gICAgICAgIHRoaXMuc2V0VGlja0ludGVydmFsKG51bGwpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgaWYgdGhlIHtAbGluayBJZ3hTbGlkZXJDb21wb25lbnR9IGlzIHNldCBhcyBjb250aW51b3VzLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBAVmlld0NoaWxkKFwic2xpZGVyMlwiKVxuICAgICAqIHB1YmxpYyBzbGlkZXI6IElneFNsaWRlckNvbXBvbmVudDtcbiAgICAgKiBuZ0FmdGVyVmlld0luaXQoKXtcbiAgICAgKiAgICAgbGV0IGNvbnRpbnVvdXMgPSB0aGlzLnNsaWRlci5jb250aW51b3VzO1xuICAgICAqIH1cbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIEBEZXByZWNhdGVQcm9wZXJ0eShgSWd4U2xpZGVyQ29tcG9uZW50IFxcYGlzQ29udGludW91c1xcYCBwcm9wZXJ0eSBpcyBkZXByZWNhdGVkLlxcblVzZSBcXGBjb250aW51b3VzXFxgIGluc3RlYWQuYClcbiAgICBwdWJsaWMgZ2V0IGlzQ29udGludW91cygpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGludW91cztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICogQGludGVybmFsXG4gICAgICovXG4gICAgcHVibGljIHNldCBpc0NvbnRpbnVvdXMoY29udGludW91czogYm9vbGVhbikge1xuICAgICAgICB0aGlzLmNvbnRpbnVvdXMgPSBjb250aW51b3VzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIG1heGltdW0gdmFsdWUgZm9yIHRoZSB7QGxpbmsgSWd4U2xpZGVyQ29tcG9uZW50fS5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICpAVmlld0NoaWxkKFwic2xpZGVyXCIpXG4gICAgICpwdWJsaWMgc2xpZGVyOiBJZ3hTbGlkZXJDb21wb25lbnQ7XG4gICAgICpuZ0FmdGVyVmlld0luaXQoKXtcbiAgICAgKiAgICBsZXQgc2xpZGVyTWF4ID0gdGhpcy5zbGlkZXIubWF4VmFsdWU7XG4gICAgICp9XG4gICAgICogYGBgXG4gICAgICovXG4gICAgcHVibGljIGdldCBtYXhWYWx1ZSgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5sYWJlbHNWaWV3RW5hYmxlZCA/XG4gICAgICAgICAgICB0aGlzLmxhYmVscy5sZW5ndGggLSAxIDpcbiAgICAgICAgICAgIHRoaXMuX21heFZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIG1heGltYWwgdmFsdWUgZm9yIHRoZSBgSWd4U2xpZGVyQ29tcG9uZW50YC5cbiAgICAgKiBUaGUgZGVmYXVsdCBtYXhpbXVtIHZhbHVlIGlzIDEwMC5cbiAgICAgKiBgYGBodG1sXG4gICAgICogPGlneC1zbGlkZXIgW3R5cGVdPVwic2xpZGVyVHlwZVwiIFttaW5WYWx1ZV09XCI1NlwiIFttYXhWYWx1ZV09XCIyNTZcIj5cbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBzZXQgbWF4VmFsdWUodmFsdWU6IG51bWJlcikge1xuICAgICAgICBpZiAodmFsdWUgPD0gdGhpcy5fbWluVmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX21heFZhbHVlID0gdGhpcy5fbWluVmFsdWUgKyAxO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fbWF4VmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh2YWx1ZSA8IHRoaXMubG93ZXJCb3VuZCkge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVMb3dlckJvdW5kQW5kTWluVHJhdmVsWm9uZSgpO1xuICAgICAgICAgICAgdGhpcy51cHBlckJvdW5kID0gdmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICAvLyByZWZyZXNoIG1heCB0cmF2ZWwgem9uZSBsaW1pdHMuXG4gICAgICAgIHRoaXMuX3BNYXggPSAxO1xuICAgICAgICAvLyByZWNhbGN1bGF0ZSBzdGVwIGRpc3RhbmNlLlxuICAgICAgICB0aGlzLnN0ZXBEaXN0YW5jZSA9IHRoaXMuY2FsY3VsYXRlU3RlcERpc3RhbmNlKCk7XG4gICAgICAgIHRoaXMucG9zaXRpb25IYW5kbGVzQW5kVXBkYXRlVHJhY2soKTtcbiAgICAgICAgdGhpcy5zZXRUaWNrSW50ZXJ2YWwobnVsbCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpSZXR1cm5zIHRoZSBtaW5pbWFsIHZhbHVlIG9mIHRoZSBgSWd4U2xpZGVyQ29tcG9uZW50YC5cbiAgICAgKmBgYHR5cGVzY3JpcHRcbiAgICAgKkBWaWV3Q2hpbGQoXCJzbGlkZXIyXCIpXG4gICAgICpwdWJsaWMgc2xpZGVyOiBJZ3hTbGlkZXJDb21wb25lbnQ7XG4gICAgICpuZ0FmdGVyVmlld0luaXQoKXtcbiAgICAgKiAgICBsZXQgc2xpZGVyTWluID0gdGhpcy5zbGlkZXIubWluVmFsdWU7XG4gICAgICp9XG4gICAgICpgYGBcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0IG1pblZhbHVlKCk6IG51bWJlciB7XG4gICAgICAgIGlmICh0aGlzLmxhYmVsc1ZpZXdFbmFibGVkKSB7XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLl9taW5WYWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBtaW5pbWFsIHZhbHVlIGZvciB0aGUgYElneFNsaWRlckNvbXBvbmVudGAuXG4gICAgICogVGhlIGRlZmF1bHQgbWluaW1hbCB2YWx1ZSBpcyAwLlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8aWd4LXNsaWRlciBbdHlwZV09XCJzbGlkZXJUeXBlXCIgW21pblZhbHVlXT1cIjU2XCIgW21heFZhbHVlXT1cIjEwMFwiPlxuICAgICAqIGBgYFxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHNldCBtaW5WYWx1ZSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIGlmICh2YWx1ZSA+PSB0aGlzLm1heFZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl9taW5WYWx1ZSA9IHRoaXMubWF4VmFsdWUgLSAxO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fbWluVmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh2YWx1ZSA+IHRoaXMudXBwZXJCb3VuZCkge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVVcHBlckJvdW5kQW5kTWF4VHJhdmVsWm9uZSgpO1xuICAgICAgICAgICAgdGhpcy5sb3dlckJvdW5kID0gdmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBSZWZyZXNoIG1pbiB0cmF2ZWwgem9uZSBsaW1pdC5cbiAgICAgICAgdGhpcy5fcE1pbiA9IDA7XG4gICAgICAgIC8vIFJlY2FsY3VsYXRlIHN0ZXAgZGlzdGFuY2UuXG4gICAgICAgIHRoaXMuc3RlcERpc3RhbmNlID0gdGhpcy5jYWxjdWxhdGVTdGVwRGlzdGFuY2UoKTtcbiAgICAgICAgdGhpcy5wb3NpdGlvbkhhbmRsZXNBbmRVcGRhdGVUcmFjaygpO1xuICAgICAgICB0aGlzLnNldFRpY2tJbnRlcnZhbChudWxsKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBsb3dlciBib3VuZGFyeSBvZiB0aGUgYElneFNsaWRlckNvbXBvbmVudGAuXG4gICAgICpgYGB0eXBlc2NyaXB0XG4gICAgICpAVmlld0NoaWxkKFwic2xpZGVyXCIpXG4gICAgICpwdWJsaWMgc2xpZGVyOiBJZ3hTbGlkZXJDb21wb25lbnQ7XG4gICAgICpuZ0FmdGVyVmlld0luaXQoKXtcbiAgICAgKiAgICBsZXQgc2xpZGVyTG93Qm91bmQgPSB0aGlzLnNsaWRlci5sb3dlckJvdW5kO1xuICAgICAqfVxuICAgICAqYGBgXG4gICAgICovXG4gICAgcHVibGljIGdldCBsb3dlckJvdW5kKCk6IG51bWJlciB7XG4gICAgICAgIGlmICghTnVtYmVyLmlzTmFOKHRoaXMuX2xvd2VyQm91bmQpICYmIHRoaXMuX2xvd2VyQm91bmQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudmFsdWVJblJhbmdlKHRoaXMuX2xvd2VyQm91bmQsIHRoaXMubWluVmFsdWUsIHRoaXMubWF4VmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMubWluVmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgbG93ZXIgYm91bmRhcnkgb2YgdGhlIGBJZ3hTbGlkZXJDb21wb25lbnRgLlxuICAgICAqIElmIG5vdCBzZXQgaXMgdGhlIHNhbWUgYXMgbWluIHZhbHVlLlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8aWd4LXNsaWRlciBbc3RlcF09XCI1XCIgW2xvd2VyQm91bmRdPVwiMjBcIj5cbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBzZXQgbG93ZXJCb3VuZCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIGlmICh2YWx1ZSA+PSB0aGlzLnVwcGVyQm91bmQgfHwgKHRoaXMubGFiZWxzVmlld0VuYWJsZWQgJiYgdmFsdWUgPCAwKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fbG93ZXJCb3VuZCA9IHRoaXMudmFsdWVJblJhbmdlKHZhbHVlLCB0aGlzLm1pblZhbHVlLCB0aGlzLm1heFZhbHVlKTtcblxuICAgICAgICAvLyBSZWZyZXNoIHRpbWUgdHJhdmVsIHpvbmUuXG4gICAgICAgIHRoaXMuX3BNaW4gPSB0aGlzLnZhbHVlVG9GcmFjdGlvbih0aGlzLl9sb3dlckJvdW5kKSB8fCAwO1xuICAgICAgICB0aGlzLnBvc2l0aW9uSGFuZGxlc0FuZFVwZGF0ZVRyYWNrKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgdXBwZXIgYm91bmRhcnkgb2YgdGhlIGBJZ3hTbGlkZXJDb21wb25lbnRgLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKkBWaWV3Q2hpbGQoXCJzbGlkZXJcIilcbiAgICAgKnB1YmxpYyBzbGlkZXI6IElneFNsaWRlckNvbXBvbmVudDtcbiAgICAgKm5nQWZ0ZXJWaWV3SW5pdCgpe1xuICAgICAqICAgIGxldCBzbGlkZXJVcEJvdW5kID0gdGhpcy5zbGlkZXIudXBwZXJCb3VuZDtcbiAgICAgKn1cbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0IHVwcGVyQm91bmQoKTogbnVtYmVyIHtcbiAgICAgICAgaWYgKCFOdW1iZXIuaXNOYU4odGhpcy5fdXBwZXJCb3VuZCkgJiYgdGhpcy5fdXBwZXJCb3VuZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy52YWx1ZUluUmFuZ2UodGhpcy5fdXBwZXJCb3VuZCwgdGhpcy5taW5WYWx1ZSwgdGhpcy5tYXhWYWx1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5tYXhWYWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSB1cHBlciBib3VuZGFyeSBvZiB0aGUgYElneFNsaWRlckNvbXBvbmVudGAuXG4gICAgICogSWYgbm90IHNldCBpcyB0aGUgc2FtZSBhcyBtYXggdmFsdWUuXG4gICAgICogYGBgaHRtbFxuICAgICAqIDxpZ3gtc2xpZGVyIFtzdGVwXT1cIjVcIiBbdXBwZXJCb3VuZF09XCIyMFwiPlxuICAgICAqIGBgYFxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHNldCB1cHBlckJvdW5kKHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgaWYgKHZhbHVlIDw9IHRoaXMubG93ZXJCb3VuZCB8fCAodGhpcy5sYWJlbHNWaWV3RW5hYmxlZCAmJiB2YWx1ZSA+IHRoaXMubGFiZWxzLmxlbmd0aCAtIDEpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl91cHBlckJvdW5kID0gdGhpcy52YWx1ZUluUmFuZ2UodmFsdWUsIHRoaXMubWluVmFsdWUsIHRoaXMubWF4VmFsdWUpO1xuICAgICAgICAvLyBSZWZyZXNoIHRpbWUgdHJhdmVsIHpvbmUuXG4gICAgICAgIHRoaXMuX3BNYXggPSB0aGlzLnZhbHVlVG9GcmFjdGlvbih0aGlzLl91cHBlckJvdW5kKSB8fCAxO1xuICAgICAgICB0aGlzLnBvc2l0aW9uSGFuZGxlc0FuZFVwZGF0ZVRyYWNrKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgc2xpZGVyIHZhbHVlLiBJZiB0aGUgc2xpZGVyIGlzIG9mIHR5cGUge0BsaW5rIFNsaWRlclR5cGUuU0xJREVSfSB0aGUgcmV0dXJuZWQgdmFsdWUgaXMgbnVtYmVyLlxuICAgICAqIElmIHRoZSBzbGlkZXIgdHlwZSBpcyB7QGxpbmsgU2xpZGVyVHlwZS5SQU5HRX0gdGhlIHJldHVybmVkIHZhbHVlIHJlcHJlc2VudHMgYW4gb2JqZWN0IG9mIHtAbGluayBsb3dlclZhbHVlfSBhbmQge0BsaW5rIHVwcGVyVmFsdWV9LlxuICAgICAqYGBgdHlwZXNjcmlwdFxuICAgICAqQFZpZXdDaGlsZChcInNsaWRlcjJcIilcbiAgICAgKnB1YmxpYyBzbGlkZXI6IElneFNsaWRlckNvbXBvbmVudDtcbiAgICAgKnB1YmxpYyBzbGlkZXJWYWx1ZShldmVudCl7XG4gICAgICogICAgbGV0IHNsaWRlclZhbCA9IHRoaXMuc2xpZGVyLnZhbHVlO1xuICAgICAqfVxuICAgICAqYGBgXG4gICAgICovXG4gICAgcHVibGljIGdldCB2YWx1ZSgpOiBudW1iZXIgfCBJUmFuZ2VTbGlkZXJWYWx1ZSB7XG4gICAgICAgIGlmICh0aGlzLmlzUmFuZ2UpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgbG93ZXI6IHRoaXMudmFsdWVJblJhbmdlKHRoaXMubG93ZXJWYWx1ZSwgdGhpcy5sb3dlckJvdW5kLCB0aGlzLnVwcGVyQm91bmQpLFxuICAgICAgICAgICAgICAgIHVwcGVyOiB0aGlzLnZhbHVlSW5SYW5nZSh0aGlzLnVwcGVyVmFsdWUsIHRoaXMubG93ZXJCb3VuZCwgdGhpcy51cHBlckJvdW5kKVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnZhbHVlSW5SYW5nZSh0aGlzLnVwcGVyVmFsdWUsIHRoaXMubG93ZXJCb3VuZCwgdGhpcy51cHBlckJvdW5kKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIHNsaWRlciB2YWx1ZS5cbiAgICAgKiBJZiB0aGUgc2xpZGVyIGlzIG9mIHR5cGUge0BsaW5rIFNsaWRlclR5cGUuU0xJREVSfSB0aGUgYXJndW1lbnQgaXMgbnVtYmVyLiBCeSBkZWZhdWx0IHRoZSB7QGxpbmsgdmFsdWV9IGdldHMgdGhlIHtAbGluayBsb3dlckJvdW5kfS5cbiAgICAgKiBJZiB0aGUgc2xpZGVyIHR5cGUgaXMge0BsaW5rIFNsaWRlclR5cGUuUkFOR0V9IHRoZSBhcmd1bWVudFxuICAgICAqIHJlcHJlc2VudHMgYW4gb2JqZWN0IG9mIHtAbGluayBsb3dlclZhbHVlfSBhbmQge0BsaW5rIHVwcGVyVmFsdWV9IHByb3BlcnRpZXMuXG4gICAgICogQnkgZGVmYXVsdCB0aGUgb2JqZWN0IGlzIGFzc29jaWF0ZWQgd2l0aCB0aGUge0BsaW5rIGxvd2VyQm91bmR9IGFuZCB7QGxpbmsgdXBwZXJCb3VuZH0gcHJvcGVydHkgdmFsdWVzLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKnJhbmdlVmFsdWUgPSB7XG4gICAgICogICBsb3dlcjogMzAsXG4gICAgICogICB1cHBlcjogNjBcbiAgICAgKn07XG4gICAgICogYGBgXG4gICAgICogYGBgaHRtbFxuICAgICAqIDxpZ3gtc2xpZGVyIFt0eXBlXT1cInNsaWRlclR5cGVcIiBbKG5nTW9kZWwpXT1cInJhbmdlVmFsdWVcIiBbbWluVmFsdWVdPVwiNTZcIiBbbWF4VmFsdWVdPVwiMjU2XCI+XG4gICAgICogYGBgXG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgc2V0IHZhbHVlKHZhbHVlOiBudW1iZXIgfCBJUmFuZ2VTbGlkZXJWYWx1ZSkge1xuICAgICAgICBpZiAoIXRoaXMuaXNSYW5nZSkge1xuICAgICAgICAgICAgdGhpcy51cHBlclZhbHVlID0gdmFsdWUgYXMgbnVtYmVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFsdWUgPSB0aGlzLnZhbGlkYXRlSW5pdGlhbFZhbHVlKHZhbHVlIGFzIElSYW5nZVNsaWRlclZhbHVlKTtcbiAgICAgICAgICAgIHRoaXMudXBwZXJWYWx1ZSA9ICh2YWx1ZSBhcyBJUmFuZ2VTbGlkZXJWYWx1ZSkudXBwZXI7XG4gICAgICAgICAgICB0aGlzLmxvd2VyVmFsdWUgPSAodmFsdWUgYXMgSVJhbmdlU2xpZGVyVmFsdWUpLmxvd2VyO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fb25DaGFuZ2VDYWxsYmFjayh0aGlzLnZhbHVlKTtcblxuICAgICAgICBpZiAodGhpcy5faGFzVmlld0luaXQpIHtcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb25IYW5kbGVzQW5kVXBkYXRlVHJhY2soKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoaXMgZXZlbnQgaXMgZW1pdHRlZCB3aGVuIHVzZXIgaGFzIHN0b3BwZWQgaW50ZXJhY3RpbmcgdGhlIHRodW1iIGFuZCB2YWx1ZSBpcyBjaGFuZ2VkLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBwdWJsaWMgY2hhbmdlKGV2ZW50KXtcbiAgICAgKiAgICBhbGVydChcIlRoZSB2YWx1ZSBoYXMgYmVlbiBjaGFuZ2VkIVwiKTtcbiAgICAgKn1cbiAgICAgKiBgYGBcbiAgICAgKiBgYGBodG1sXG4gICAgICogPGlneC1zbGlkZXIgKG9uVmFsdWVDaGFuZ2UpPVwiY2hhbmdlKCRldmVudClcIiAjc2xpZGVyIFsobmdNb2RlbCldPVwidGFzay5wZXJjZW50Q29tcGxldGVkXCIgW3N0ZXBdPVwiNVwiPlxuICAgICAqIGBgYFxuICAgICAqL1xuICAgIEBPdXRwdXQoKVxuICAgIHB1YmxpYyBvblZhbHVlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxJU2xpZGVyVmFsdWVDaGFuZ2VFdmVudEFyZ3M+KCk7XG5cblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMiwgcHJpdmF0ZSBfZWw6IEVsZW1lbnRSZWYsIHByaXZhdGUgX2NkcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHsgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIEBIb3N0TGlzdGVuZXIoJ3BvaW50ZXJkb3duJywgWyckZXZlbnQnXSlcbiAgICBwdWJsaWMgb25Qb2ludGVyRG93bigkZXZlbnQpIHtcbiAgICAgICAgdGhpcy5maW5kQ2xvc2VzdFRodW1iKCRldmVudCk7XG5cbiAgICAgICAgaWYgKCF0aGlzLnRodW1iVG8uaXNBY3RpdmUgJiYgdGhpcy50aHVtYkZyb20gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgYWN0aXZlVGh1bWIgPSB0aGlzLnRodW1iVG8uaXNBY3RpdmUgPyB0aGlzLnRodW1iVG8gOiB0aGlzLnRodW1iRnJvbTtcbiAgICAgICAgYWN0aXZlVGh1bWIubmF0aXZlRWxlbWVudC5zZXRQb2ludGVyQ2FwdHVyZSgkZXZlbnQucG9pbnRlcklkKTtcbiAgICAgICAgdGhpcy5zaG93VGh1bWJzSW5kaWNhdG9ycygpO1xuXG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgQEhvc3RMaXN0ZW5lcigncG9pbnRlcnVwJywgWyckZXZlbnQnXSlcbiAgICBwdWJsaWMgb25Qb2ludGVyVXAoJGV2ZW50KSB7XG4gICAgICAgIGlmICghdGhpcy50aHVtYlRvLmlzQWN0aXZlICYmIHRoaXMudGh1bWJGcm9tID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaGlkZVRodW1ic0luZGljYXRvcnMoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgQEhvc3RMaXN0ZW5lcignZm9jdXMnKVxuICAgIHB1YmxpYyBvbkZvY3VzKCkge1xuICAgICAgICB0aGlzLnRvZ2dsZVRodW1iTGFiZWxzKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIEBIb3N0TGlzdGVuZXIoJ3BhbicsIFsnJGV2ZW50J10pXG4gICAgcHVibGljIG9uUGFuTGlzdGVuZXIoJGV2ZW50KSB7XG4gICAgICAgIHRoaXMudXBkYXRlKCRldmVudC5zcmNFdmVudC5jbGllbnRYKTtcbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKCdwYW5zdGFydCcpXG4gICAgcHVibGljIG9uUGFuU3RhcnQoKSB7XG4gICAgICAgIHRoaXMuc2hvd1RodW1ic0luZGljYXRvcnMoKTtcbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKCdwYW5lbmQnKVxuICAgIHB1YmxpYyBvblBhbkVuZCgpIHtcbiAgICAgICAgdGhpcy5oaWRlVGh1bWJzSW5kaWNhdG9ycygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBASG9zdExpc3RlbmVyKCd0YXAnLCBbJyRldmVudCddKVxuICAgIHB1YmxpYyBvblRhcExpc3RlbmVyKCRldmVudCkge1xuICAgICAgICB0aGlzLm9uVGFwKCRldmVudCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpSZXR1cm5zIHdoZXRoZXIgdGhlIGBJZ3hTbGlkZXJDb21wb25lbnRgIHR5cGUgaXMgUkFOR0UuXG4gICAgICpgYGB0eXBlc2NyaXB0XG4gICAgICpAVmlld0NoaWxkKFwic2xpZGVyXCIpXG4gICAgICpwdWJsaWMgc2xpZGVyOiBJZ3hTbGlkZXJDb21wb25lbnQ7XG4gICAgICpuZ0FmdGVyVmlld0luaXQoKXtcbiAgICAgKiAgICBsZXQgc2xpZGVyUmFuZ2UgPSB0aGlzLnNsaWRlci5pc1JhbmdlO1xuICAgICAqfVxuICAgICAqIGBgYFxuICAgICAqL1xuICAgIHB1YmxpYyBnZXQgaXNSYW5nZSgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudHlwZSA9PT0gU2xpZGVyVHlwZS5SQU5HRTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBsb3dlciB2YWx1ZSBvZiB0aGUgYElneFNsaWRlckNvbXBvbmVudGAuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIEBWaWV3Q2hpbGQoXCJzbGlkZXJcIilcbiAgICAgKiBwdWJsaWMgc2xpZGVyOiBJZ3hTbGlkZXJDb21wb25lbnQ7XG4gICAgICogcHVibGljIGxvd1ZhbHVlKGV2ZW50KXtcbiAgICAgKiAgICBsZXQgc2xpZGVyTG93VmFsdWUgPSB0aGlzLnNsaWRlci5sb3dlclZhbHVlO1xuICAgICAqfVxuICAgICAqYGBgXG4gICAgICovXG4gICAgcHVibGljIGdldCBsb3dlclZhbHVlKCk6IG51bWJlciB7XG4gICAgICAgIGlmICghTnVtYmVyLmlzTmFOKHRoaXMuX2xvd2VyVmFsdWUpICYmIHRoaXMuX2xvd2VyVmFsdWUgIT09IHVuZGVmaW5lZCAmJiB0aGlzLl9sb3dlclZhbHVlID49IHRoaXMubG93ZXJCb3VuZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2xvd2VyVmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5sb3dlckJvdW5kO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqU2V0cyB0aGUgbG93ZXIgdmFsdWUgb2YgdGhlIGBJZ3hTbGlkZXJDb21wb25lbnRgLlxuICAgICAqYGBgdHlwZXNjcmlwdFxuICAgICAqQFZpZXdDaGlsZChcInNsaWRlcjJcIilcbiAgICAgKnB1YmxpYyBzbGlkZXI6IElneFNsaWRlckNvbXBvbmVudDtcbiAgICAgKnB1YmxpYyBsb3dWYWx1ZShldmVudCl7XG4gICAgICogICAgdGhpcy5zbGlkZXIubG93ZXJWYWx1ZSA9IDEyMDtcbiAgICAgKn1cbiAgICAgKmBgYFxuICAgICAqL1xuICAgIHB1YmxpYyBzZXQgbG93ZXJWYWx1ZSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIHZhbHVlID0gdGhpcy52YWx1ZUluUmFuZ2UodmFsdWUsIHRoaXMubG93ZXJCb3VuZCwgdGhpcy51cHBlckJvdW5kKTtcbiAgICAgICAgdGhpcy5fbG93ZXJWYWx1ZSA9IHZhbHVlO1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpSZXR1cm5zIHRoZSB1cHBlciB2YWx1ZSBvZiB0aGUgYElneFNsaWRlckNvbXBvbmVudGAuXG4gICAgICpgYGB0eXBlc2NyaXB0XG4gICAgICpAVmlld0NoaWxkKFwic2xpZGVyMlwiKVxuICAgICAqcHVibGljIHNsaWRlcjogSWd4U2xpZGVyQ29tcG9uZW50O1xuICAgICAqcHVibGljIHVwcGVyVmFsdWUoZXZlbnQpe1xuICAgICAqICAgIGxldCB1cHBlclZhbHVlID0gdGhpcy5zbGlkZXIudXBwZXJWYWx1ZTtcbiAgICAgKn1cbiAgICAgKmBgYFxuICAgICAqL1xuICAgIHB1YmxpYyBnZXQgdXBwZXJWYWx1ZSgpIHtcbiAgICAgICAgaWYgKCFOdW1iZXIuaXNOYU4odGhpcy5fdXBwZXJWYWx1ZSkgJiYgdGhpcy5fdXBwZXJWYWx1ZSAhPT0gdW5kZWZpbmVkICYmIHRoaXMuX3VwcGVyVmFsdWUgPD0gdGhpcy51cHBlckJvdW5kKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdXBwZXJWYWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLnVwcGVyQm91bmQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpTZXRzIHRoZSB1cHBlciB2YWx1ZSBvZiB0aGUgYElneFNsaWRlckNvbXBvbmVudGAuXG4gICAgICpgYGB0eXBlc2NyaXB0XG4gICAgICpAVmlld0NoaWxkKFwic2xpZGVyMlwiKVxuICAgICAqcHVibGljIHNsaWRlcjogSWd4U2xpZGVyQ29tcG9uZW50O1xuICAgICAqcHVibGljIHVwcGVyVmFsdWUoZXZlbnQpe1xuICAgICAqICAgIHRoaXMuc2xpZGVyLnVwcGVyVmFsdWUgPSAxMjA7XG4gICAgICp9XG4gICAgICpgYGBcbiAgICAgKi9cbiAgICBwdWJsaWMgc2V0IHVwcGVyVmFsdWUodmFsdWU6IG51bWJlcikge1xuICAgICAgICB2YWx1ZSA9IHRoaXMudmFsdWVJblJhbmdlKHZhbHVlLCB0aGlzLmxvd2VyQm91bmQsIHRoaXMudXBwZXJCb3VuZCk7XG4gICAgICAgIHRoaXMuX3VwcGVyVmFsdWUgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSB2YWx1ZSBjb3JyZXNwb25kaW5nIHRoZSBsb3dlciBsYWJlbC5cbiAgICAgKmBgYHR5cGVzY3JpcHRcbiAgICAgKiBAVmlld0NoaWxkKFwic2xpZGVyXCIpXG4gICAgICogcHVibGljIHNsaWRlcjogSWd4U2xpZGVyQ29tcG9uZW50O1xuICAgICAqIGxldCBsYWJlbCA9IHRoaXMuc2xpZGVyLmxvd2VyTGFiZWw7XG4gICAgICpgYGBcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0IGxvd2VyTGFiZWwoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxhYmVsc1ZpZXdFbmFibGVkID9cbiAgICAgICAgICAgIHRoaXMubGFiZWxzW3RoaXMubG93ZXJWYWx1ZV0gOlxuICAgICAgICAgICAgdGhpcy5sb3dlclZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHZhbHVlIGNvcnJlc3BvbmRpbmcgdGhlIHVwcGVyIGxhYmVsLlxuICAgICAqYGBgdHlwZXNjcmlwdFxuICAgICAqIEBWaWV3Q2hpbGQoXCJzbGlkZXJcIilcbiAgICAgKiBwdWJsaWMgc2xpZGVyOiBJZ3hTbGlkZXJDb21wb25lbnQ7XG4gICAgICogbGV0IGxhYmVsID0gdGhpcy5zbGlkZXIudXBwZXJMYWJlbDtcbiAgICAgKmBgYFxuICAgICAqL1xuICAgIHB1YmxpYyBnZXQgdXBwZXJMYWJlbCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubGFiZWxzVmlld0VuYWJsZWQgP1xuICAgICAgICAgICAgdGhpcy5sYWJlbHNbdGhpcy51cHBlclZhbHVlXSA6XG4gICAgICAgICAgICB0aGlzLnVwcGVyVmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBpZiBsYWJlbCB2aWV3IGlzIGVuYWJsZWQuXG4gICAgICogSWYgdGhlIHtAbGluayBsYWJlbHN9IGlzIHNldCwgdGhlIHZpZXcgaXMgYXV0b21hdGljYWxseSBhY3RpdmF0ZWQuXG4gICAgICpgYGB0eXBlc2NyaXB0XG4gICAgICogQFZpZXdDaGlsZChcInNsaWRlclwiKVxuICAgICAqIHB1YmxpYyBzbGlkZXI6IElneFNsaWRlckNvbXBvbmVudDtcbiAgICAgKiBsZXQgbGFiZWxWaWV3ID0gdGhpcy5zbGlkZXIubGFiZWxzVmlld0VuYWJsZWQ7XG4gICAgICpgYGBcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0IGxhYmVsc1ZpZXdFbmFibGVkKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gISEodGhpcy5sYWJlbHMgJiYgdGhpcy5sYWJlbHMubGVuZ3RoID4gMSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5zbGlkZXJTZXR1cCgpO1xuXG4gICAgICAgIC8vIFNldCB0cmFjayB0cmF2ZWwgem9uZVxuICAgICAgICB0aGlzLl9wTWluID0gdGhpcy52YWx1ZVRvRnJhY3Rpb24odGhpcy5sb3dlckJvdW5kKSB8fCAwO1xuICAgICAgICB0aGlzLl9wTWF4ID0gdGhpcy52YWx1ZVRvRnJhY3Rpb24odGhpcy51cHBlckJvdW5kKSB8fCAxO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgICB0aGlzLl9oYXNWaWV3SW5pdCA9IHRydWU7XG4gICAgICAgIHRoaXMucG9zaXRpb25IYW5kbGVzQW5kVXBkYXRlVHJhY2soKTtcbiAgICAgICAgdGhpcy5zZXRUaWNrSW50ZXJ2YWwodGhpcy5sYWJlbHMpO1xuICAgICAgICB0aGlzLmNoYW5nZVRodW1iRm9jdXNhYmxlU3RhdGUodGhpcy5kaXNhYmxlZCk7XG5cbiAgICAgICAgdGhpcy5zdWJzY3JpYmVUbyh0aGlzLnRodW1iRnJvbSwgdGhpcy50aHVtYkNoYW5nZWQuYmluZCh0aGlzKSk7XG4gICAgICAgIHRoaXMuc3Vic2NyaWJlVG8odGhpcy50aHVtYlRvLCB0aGlzLnRodW1iQ2hhbmdlZC5iaW5kKHRoaXMpKTtcblxuICAgICAgICB0aGlzLnRodW1icy5jaGFuZ2VzLnBpcGUodGFrZVVudGlsKHRoaXMuX2Rlc3Ryb3llciQpKS5zdWJzY3JpYmUoY2hhbmdlID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHQgPSBjaGFuZ2UuZmluZCgodGh1bWI6IElneFNsaWRlclRodW1iQ29tcG9uZW50KSA9PiB0aHVtYi50eXBlID09PSBTbGlkZXJIYW5kbGUuRlJPTSk7XG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uSGFuZGxlKHQsIHRoaXMubG93ZXJWYWx1ZSk7XG4gICAgICAgICAgICB0aGlzLnN1YnNjcmliZVRvKHQsIHRoaXMudGh1bWJDaGFuZ2VkLmJpbmQodGhpcykpO1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VUaHVtYkZvY3VzYWJsZVN0YXRlKHRoaXMuZGlzYWJsZWQpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICAgICAgLy8gQ2FsY3VsYXRlcyB0aGUgZGlzdGFuY2UgYmV0d2VlbiBldmVyeSBzdGVwIGluIHBpeGVscy5cbiAgICAgICAgdGhpcy5zdGVwRGlzdGFuY2UgPSB0aGlzLmNhbGN1bGF0ZVN0ZXBEaXN0YW5jZSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuX2Rlc3Ryb3llciQubmV4dCh0cnVlKTtcbiAgICAgICAgdGhpcy5fZGVzdHJveWVyJC5jb21wbGV0ZSgpO1xuXG4gICAgICAgIHRoaXMuX2luZGljYXRvcnNEZXN0cm95ZXIkLm5leHQodHJ1ZSk7XG4gICAgICAgIHRoaXMuX2luZGljYXRvcnNEZXN0cm95ZXIkLmNvbXBsZXRlKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyB3cml0ZVZhbHVlKHZhbHVlOiBJUmFuZ2VTbGlkZXJWYWx1ZSB8IG51bWJlcik6IHZvaWQge1xuICAgICAgICBpZiAoIXZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm5vcm1hbGl6ZUJ5U3RlcCh2YWx1ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fb25DaGFuZ2VDYWxsYmFjayA9IGZuO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSk6IHZvaWQge1xuICAgICAgICB0aGlzLl9vblRvdWNoZWRDYWxsYmFjayA9IGZuO1xuICAgIH1cblxuICAgIC8qKiBAaGlkZGVuICovXG4gICAgcHVibGljIGdldEVkaXRFbGVtZW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pc1JhbmdlID8gdGhpcy50aHVtYkZyb20ubmF0aXZlRWxlbWVudCA6IHRoaXMudGh1bWJUby5uYXRpdmVFbGVtZW50O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyBvblRhcCgkZXZlbnQpIHtcbiAgICAgICAgdGhpcy51cGRhdGUoJGV2ZW50LnNyY0V2ZW50LmNsaWVudFgpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgdXBkYXRlKG1vdXNlWCkge1xuICAgICAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gVXBkYXRlIFRvL0Zyb20gVmFsdWVzXG4gICAgICAgIHRoaXMub25QYW4ubmV4dChtb3VzZVgpO1xuXG4gICAgICAgIC8vIEZpbmFsbHkgZG8gcG9zaXRpb25IYW5kbGVzQW5kVXBkYXRlVHJhY2sgdGhlIERPTVxuICAgICAgICAvLyBiYXNlZCBvbiBkYXRhIHZhbHVlc1xuICAgICAgICB0aGlzLnBvc2l0aW9uSGFuZGxlc0FuZFVwZGF0ZVRyYWNrKCk7XG4gICAgICAgIHRoaXMuX29uVG91Y2hlZENhbGxiYWNrKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyB0aHVtYkNoYW5nZWQodmFsdWU6IG51bWJlciwgdGh1bWJUeXBlOiBudW1iZXIpIHtcbiAgICAgICAgY29uc3Qgb2xkVmFsdWUgPSB0aGlzLnZhbHVlO1xuXG4gICAgICAgIGxldCBuZXdWYWw6IElSYW5nZVNsaWRlclZhbHVlO1xuICAgICAgICBpZiAodGhpcy5pc1JhbmdlKSB7XG4gICAgICAgICAgICBpZiAodGh1bWJUeXBlID09PSBTbGlkZXJIYW5kbGUuRlJPTSkge1xuICAgICAgICAgICAgICAgIG5ld1ZhbCA9IHtcbiAgICAgICAgICAgICAgICAgICAgbG93ZXI6ICh0aGlzLnZhbHVlIGFzIElSYW5nZVNsaWRlclZhbHVlKS5sb3dlciArIHZhbHVlLFxuICAgICAgICAgICAgICAgICAgICB1cHBlcjogKHRoaXMudmFsdWUgYXMgSVJhbmdlU2xpZGVyVmFsdWUpLnVwcGVyXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbmV3VmFsID0ge1xuICAgICAgICAgICAgICAgICAgICBsb3dlcjogKHRoaXMudmFsdWUgYXMgSVJhbmdlU2xpZGVyVmFsdWUpLmxvd2VyLFxuICAgICAgICAgICAgICAgICAgICB1cHBlcjogKHRoaXMudmFsdWUgYXMgSVJhbmdlU2xpZGVyVmFsdWUpLnVwcGVyICsgdmFsdWVcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBTd2FwIHRoZSB0aHVtYnMgaWYgYSBjb2xsaXNpb24gYXBwZWFycy5cbiAgICAgICAgICAgIGlmIChuZXdWYWwubG93ZXIgPj0gbmV3VmFsLnVwcGVyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy52YWx1ZSA9IHRoaXMuc3dhcFRodW1iKG5ld1ZhbCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMudmFsdWUgPSBuZXdWYWw7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSB0aGlzLnZhbHVlIGFzIG51bWJlciArIHZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuaGFzVmFsdWVDaGFuZ2VkKG9sZFZhbHVlKSkge1xuICAgICAgICAgICAgdGhpcy5lbWl0VmFsdWVDaGFuZ2VkKG9sZFZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgb25UaHVtYkNoYW5nZSgpIHtcbiAgICAgICAgdGhpcy50b2dnbGVUaHVtYkxhYmVscygpO1xuICAgIH1cblxuICAgIHB1YmxpYyBvbkhvdmVyQ2hhbmdlKHN0YXRlOiBib29sZWFuKSB7XG4gICAgICAgIHJldHVybiBzdGF0ZSA/IHRoaXMuc2hvd1RodW1ic0luZGljYXRvcnMoKSA6IHRoaXMuaGlkZVRodW1ic0luZGljYXRvcnMoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHN3YXBUaHVtYih2YWx1ZTogSVJhbmdlU2xpZGVyVmFsdWUpIHtcbiAgICAgICAgaWYgKHRoaXMudGh1bWJGcm9tLmlzQWN0aXZlKSB7XG4gICAgICAgICAgICB2YWx1ZS51cHBlciA9IHRoaXMudXBwZXJWYWx1ZTtcbiAgICAgICAgICAgIHZhbHVlLmxvd2VyID0gdGhpcy51cHBlclZhbHVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFsdWUudXBwZXIgPSB0aGlzLmxvd2VyVmFsdWU7XG4gICAgICAgICAgICB2YWx1ZS5sb3dlciA9IHRoaXMubG93ZXJWYWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudG9nZ2xlVGh1bWIoKTtcblxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBmaW5kQ2xvc2VzdFRodW1iKGV2ZW50KSB7XG4gICAgICAgIGlmICh0aGlzLmlzUmFuZ2UpIHtcbiAgICAgICAgICAgIHRoaXMuY2xvc2VzdEhhbmRsZShldmVudC5jbGllbnRYKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudGh1bWJUby5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnVwZGF0ZShldmVudC5jbGllbnRYKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHVwZGF0ZUxvd2VyQm91bmRBbmRNaW5UcmF2ZWxab25lKCkge1xuICAgICAgICB0aGlzLmxvd2VyQm91bmQgPSB0aGlzLm1pblZhbHVlO1xuICAgICAgICB0aGlzLl9wTWluID0gMDtcbiAgICB9XG5cbiAgICBwcml2YXRlIHVwZGF0ZVVwcGVyQm91bmRBbmRNYXhUcmF2ZWxab25lKCkge1xuICAgICAgICB0aGlzLnVwcGVyQm91bmQgPSB0aGlzLm1heFZhbHVlO1xuICAgICAgICB0aGlzLl9wTWF4ID0gMTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHNsaWRlclNldHVwKCkge1xuICAgICAgICAvKipcbiAgICAgICAgICogaWYge0BsaW5rIFNsaWRlclR5cGUuU0xJREVSfSB0aGFuIHRoZSBpbml0aWFsIHZhbHVlIHNob2xkIGJlIHRoZSBsb3dlc3Qgb25lLlxuICAgICAgICAgKi9cbiAgICAgICAgaWYgKCF0aGlzLmlzUmFuZ2UgJiYgdGhpcy52YWx1ZSA9PT0gdGhpcy51cHBlckJvdW5kKSB7XG4gICAgICAgICAgICB0aGlzLnZhbHVlID0gdGhpcy5sb3dlckJvdW5kO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjYWxjdWxhdGVTdGVwRGlzdGFuY2UoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9lbC5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoIC8gKHRoaXMubWF4VmFsdWUgLSB0aGlzLm1pblZhbHVlKSAqIHRoaXMuc3RlcDtcbiAgICB9XG5cbiAgICBwcml2YXRlIHRvZ2dsZVRodW1iKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50aHVtYkZyb20uaXNBY3RpdmUgP1xuICAgICAgICAgICAgdGhpcy50aHVtYlRvLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKSA6XG4gICAgICAgICAgICB0aGlzLnRodW1iRnJvbS5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB2YWx1ZUluUmFuZ2UodmFsdWUsIG1pbiA9IDAsIG1heCA9IDEwMCkge1xuICAgICAgICByZXR1cm4gTWF0aC5tYXgoTWF0aC5taW4odmFsdWUsIG1heCksIG1pbik7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZW5lcmF0ZVRpY2tNYXJrcyhjb2xvcjogc3RyaW5nLCBpbnRlcnZhbDogbnVtYmVyKSB7XG4gICAgICAgIHJldHVybiBpbnRlcnZhbCAhPT0gbnVsbCA/IGByZXBlYXRpbmctbGluZWFyLWdyYWRpZW50KFxuICAgICAgICAgICAgJHsndG8gbGVmdCd9LFxuICAgICAgICAgICAgJHtjb2xvcn0sXG4gICAgICAgICAgICAke2NvbG9yfSAxLjVweCxcbiAgICAgICAgICAgIHRyYW5zcGFyZW50IDEuNXB4LFxuICAgICAgICAgICAgdHJhbnNwYXJlbnQgJHtpbnRlcnZhbH0lXG4gICAgICAgICksIHJlcGVhdGluZy1saW5lYXItZ3JhZGllbnQoXG4gICAgICAgICAgICAkeyd0byByaWdodCd9LFxuICAgICAgICAgICAgJHtjb2xvcn0sXG4gICAgICAgICAgICAke2NvbG9yfSAxLjVweCxcbiAgICAgICAgICAgIHRyYW5zcGFyZW50IDEuNXB4LFxuICAgICAgICAgICAgdHJhbnNwYXJlbnQgJHtpbnRlcnZhbH0lXG4gICAgICAgIClgIDogaW50ZXJ2YWw7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBwb3NpdGlvbkhhbmRsZShoYW5kbGU6IEVsZW1lbnRSZWYsIHBvc2l0aW9uOiBudW1iZXIpIHtcbiAgICAgICAgaWYgKCFoYW5kbGUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGhhbmRsZS5uYXRpdmVFbGVtZW50LnN0eWxlLmxlZnQgPSBgJHt0aGlzLnZhbHVlVG9GcmFjdGlvbihwb3NpdGlvbikgKiAxMDB9JWA7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBwb3NpdGlvbkhhbmRsZXNBbmRVcGRhdGVUcmFjaygpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzUmFuZ2UpIHtcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb25IYW5kbGUodGhpcy50aHVtYlRvLCB0aGlzLnZhbHVlIGFzIG51bWJlcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uSGFuZGxlKHRoaXMudGh1bWJUbywgKHRoaXMudmFsdWUgYXMgSVJhbmdlU2xpZGVyVmFsdWUpLnVwcGVyKTtcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb25IYW5kbGUodGhpcy50aHVtYkZyb20sICh0aGlzLnZhbHVlIGFzIElSYW5nZVNsaWRlclZhbHVlKS5sb3dlcik7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnVwZGF0ZVRyYWNrKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjbG9zZXN0SGFuZGxlKG1vdXNlWCkge1xuICAgICAgICBjb25zdCBmcm9tT2Zmc2V0ID0gdGhpcy50aHVtYkZyb20ubmF0aXZlRWxlbWVudC5vZmZzZXRMZWZ0ICsgdGhpcy50aHVtYkZyb20ubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aCAvIDI7XG4gICAgICAgIGNvbnN0IHRvT2Zmc2V0ID0gdGhpcy50aHVtYlRvLm5hdGl2ZUVsZW1lbnQub2Zmc2V0TGVmdCArIHRoaXMudGh1bWJUby5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoIC8gMjtcbiAgICAgICAgY29uc3QgeFBvaW50ZXIgPSBtb3VzZVggLSB0aGlzLl9lbC5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQ7XG4gICAgICAgIGNvbnN0IG1hdGNoID0gdGhpcy5jbG9zZXN0VG8oeFBvaW50ZXIsIFtmcm9tT2Zmc2V0LCB0b09mZnNldF0pO1xuXG4gICAgICAgIGlmIChtYXRjaCA9PT0gZnJvbU9mZnNldCkge1xuICAgICAgICAgICAgdGhpcy50aHVtYkZyb20ubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgICAgICB9IGVsc2UgaWYgKG1hdGNoID09PSB0b09mZnNldCkge1xuICAgICAgICAgICAgdGhpcy50aHVtYlRvLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgc2V0VGlja0ludGVydmFsKGxhYmVscykge1xuICAgICAgICBsZXQgaW50ZXJ2YWw7XG4gICAgICAgIGNvbnN0IHRyYWNrUHJvZ3Jlc3MgPSAxMDA7XG4gICAgICAgIGlmICh0aGlzLmxhYmVsc1ZpZXdFbmFibGVkKSB7XG4gICAgICAgICAgICAvLyBDYWxjIHRpY2tzIGRlcGVuZGluZyBvbiB0aGUgbGFiZWxzIGxlbmd0aDtcbiAgICAgICAgICAgIGludGVydmFsID0gKCh0cmFja1Byb2dyZXNzIC8gKHRoaXMubGFiZWxzLmxlbmd0aCAtIDEpICogMTApKSAvIDEwO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgdHJhY2tSYW5nZSA9IHRoaXMubWF4VmFsdWUgLSB0aGlzLm1pblZhbHVlO1xuICAgICAgICAgICAgaW50ZXJ2YWwgPSB0aGlzLnN0ZXAgPiAxID9cbiAgICAgICAgICAgICAgICAodHJhY2tQcm9ncmVzcyAvICgodHJhY2tSYW5nZSAvIHRoaXMuc3RlcCkpICogMTApIC8gMTBcbiAgICAgICAgICAgICAgICA6IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCByZW5kZXJDYWxsYmFja0V4ZWN1dGlvbiA9ICF0aGlzLmNvbnRpbnVvdXMgPyB0aGlzLmdlbmVyYXRlVGlja01hcmtzKCd3aGl0ZScsIGludGVydmFsKSA6IG51bGw7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy50aWNrcy5uYXRpdmVFbGVtZW50LCAnYmFja2dyb3VuZCcsIHJlbmRlckNhbGxiYWNrRXhlY3V0aW9uKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHNob3dUaHVtYnNJbmRpY2F0b3JzKCkge1xuICAgICAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuX2luZGljYXRvcnNUaW1lcikge1xuICAgICAgICAgICAgdGhpcy5faW5kaWNhdG9yc0Rlc3Ryb3llciQubmV4dCh0cnVlKTtcbiAgICAgICAgICAgIHRoaXMuX2luZGljYXRvcnNUaW1lciA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnRodW1iVG8uc2hvd1RodW1iSW5kaWNhdG9ycygpO1xuICAgICAgICBpZiAodGhpcy50aHVtYkZyb20pIHtcbiAgICAgICAgICAgIHRoaXMudGh1bWJGcm9tLnNob3dUaHVtYkluZGljYXRvcnMoKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBoaWRlVGh1bWJzSW5kaWNhdG9ycygpIHtcbiAgICAgICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2luZGljYXRvcnNUaW1lciA9IHRpbWVyKHRoaXMudGh1bWJMYWJlbFZpc2liaWxpdHlEdXJhdGlvbik7XG4gICAgICAgIHRoaXMuX2luZGljYXRvcnNUaW1lci5waXBlKHRha2VVbnRpbCh0aGlzLl9pbmRpY2F0b3JzRGVzdHJveWVyJCkpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnRodW1iVG8uaGlkZVRodW1iSW5kaWNhdG9ycygpO1xuICAgICAgICAgICAgaWYgKHRoaXMudGh1bWJGcm9tKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50aHVtYkZyb20uaGlkZVRodW1iSW5kaWNhdG9ycygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHRvZ2dsZVRodW1iTGFiZWxzKCkge1xuICAgICAgICB0aGlzLnNob3dUaHVtYnNJbmRpY2F0b3JzKCk7XG4gICAgICAgIHRoaXMuaGlkZVRodW1ic0luZGljYXRvcnMoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGNoYW5nZVRodW1iRm9jdXNhYmxlU3RhdGUoc3RhdGU6IGJvb2xlYW4pIHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBzdGF0ZSA/IC0xIDogMTtcblxuICAgICAgICBpZiAodGhpcy5pc1JhbmdlKSB7XG4gICAgICAgICAgICB0aGlzLnRodW1iRnJvbS50YWJpbmRleCA9IHZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy50aHVtYlRvLnRhYmluZGV4ID0gdmFsdWU7XG5cbiAgICAgICAgdGhpcy5fY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGNsb3Nlc3RUbyhnb2FsOiBudW1iZXIsIHBvc2l0aW9uczogbnVtYmVyW10pOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gcG9zaXRpb25zLnJlZHVjZSgocHJldmlvdXMsIGN1cnJlbnQpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoTWF0aC5hYnMoZ29hbCAtIGN1cnJlbnQpIDwgTWF0aC5hYnMoZ29hbCAtIHByZXZpb3VzKSA/IGN1cnJlbnQgOiBwcmV2aW91cyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgdmFsdWVUb0ZyYWN0aW9uKHZhbHVlOiBudW1iZXIsIHBNaW4gPSB0aGlzLl9wTWluLCBwTWF4ID0gdGhpcy5fcE1heCkge1xuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZUluUmFuZ2UoKHZhbHVlIC0gdGhpcy5taW5WYWx1ZSkgLyAodGhpcy5tYXhWYWx1ZSAtIHRoaXMubWluVmFsdWUpLCBwTWluLCBwTWF4KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICogTm9ybWFsaXrQtSB0aGUgdmFsdWUgd2hlbiB0d28td2F5IGRhdGEgYmluZCBpcyB1c2VkIGFuZCB7QGxpbmsgdGhpcy5zdGVwfSBpcyBzZXQuXG4gICAgICogQHBhcmFtIHZhbHVlXG4gICAgICovXG4gICAgcHJpdmF0ZSBub3JtYWxpemVCeVN0ZXAodmFsdWU6IElSYW5nZVNsaWRlclZhbHVlIHwgbnVtYmVyKSB7XG4gICAgICAgIGlmICh0aGlzLmlzUmFuZ2UpIHtcbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSAge1xuICAgICAgICAgICAgICAgIGxvd2VyOiAodmFsdWUgYXMgSVJhbmdlU2xpZGVyVmFsdWUpLmxvd2VyIC0gKCh2YWx1ZSBhcyBJUmFuZ2VTbGlkZXJWYWx1ZSkubG93ZXIgJSB0aGlzLnN0ZXApLFxuICAgICAgICAgICAgICAgIHVwcGVyOiAodmFsdWUgYXMgSVJhbmdlU2xpZGVyVmFsdWUpLnVwcGVyIC0gKCh2YWx1ZSBhcyBJUmFuZ2VTbGlkZXJWYWx1ZSkudXBwZXIgJSB0aGlzLnN0ZXApXG4gICAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy52YWx1ZSA9ICh2YWx1ZSBhcyBudW1iZXIpIC0gKCh2YWx1ZSBhcyBudW1iZXIpICUgdGhpcy5zdGVwKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgdXBkYXRlVHJhY2soKSB7XG4gICAgICAgIGNvbnN0IGZyb21Qb3NpdGlvbiA9IHRoaXMudmFsdWVUb0ZyYWN0aW9uKHRoaXMubG93ZXJWYWx1ZSk7XG4gICAgICAgIGNvbnN0IHRvUG9zaXRpb24gPSB0aGlzLnZhbHVlVG9GcmFjdGlvbih0aGlzLnVwcGVyVmFsdWUpO1xuICAgICAgICBjb25zdCBwb3NpdGlvbkdhcCA9IHRvUG9zaXRpb24gLSBmcm9tUG9zaXRpb247XG5cbiAgICAgICAgbGV0IHRyYWNrTGVmdEluZGVudGlvbiA9IGZyb21Qb3NpdGlvbjtcbiAgICAgICAgaWYgKHRoaXMuaXNSYW5nZSkge1xuICAgICAgICAgICAgaWYgKHBvc2l0aW9uR2FwKSB7XG4gICAgICAgICAgICAgICAgdHJhY2tMZWZ0SW5kZW50aW9uID0gTWF0aC5yb3VuZCgoMSAvIHBvc2l0aW9uR2FwICogZnJvbVBvc2l0aW9uKSAqIDEwMCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy50cmFjay5uYXRpdmVFbGVtZW50LCAndHJhbnNmb3JtJywgYHNjYWxlWCgke3Bvc2l0aW9uR2FwfSkgdHJhbnNsYXRlWCgke3RyYWNrTGVmdEluZGVudGlvbn0lKWApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLnRyYWNrLm5hdGl2ZUVsZW1lbnQsICd0cmFuc2Zvcm0nLCBgc2NhbGVYKCR7dG9Qb3NpdGlvbn0pYCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIHZhbGlkYXRlSW5pdGlhbFZhbHVlKHZhbHVlOiBJUmFuZ2VTbGlkZXJWYWx1ZSkge1xuICAgICAgICBpZiAodmFsdWUubG93ZXIgPCB0aGlzLmxvd2VyQm91bmQgJiYgdmFsdWUudXBwZXIgPCB0aGlzLmxvd2VyQm91bmQpIHtcbiAgICAgICAgICAgIHZhbHVlLnVwcGVyID0gdGhpcy5sb3dlckJvdW5kO1xuICAgICAgICAgICAgdmFsdWUubG93ZXIgPSB0aGlzLmxvd2VyQm91bmQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodmFsdWUubG93ZXIgPiB0aGlzLnVwcGVyQm91bmQgJiYgdmFsdWUudXBwZXIgPiB0aGlzLnVwcGVyQm91bmQpIHtcbiAgICAgICAgICAgIHZhbHVlLnVwcGVyID0gdGhpcy51cHBlckJvdW5kO1xuICAgICAgICAgICAgdmFsdWUubG93ZXIgPSB0aGlzLnVwcGVyQm91bmQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodmFsdWUudXBwZXIgPCB2YWx1ZS5sb3dlcikge1xuICAgICAgICAgICAgdmFsdWUudXBwZXIgPSB0aGlzLnVwcGVyVmFsdWU7XG4gICAgICAgICAgICB2YWx1ZS5sb3dlciA9IHRoaXMubG93ZXJWYWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHN1YnNjcmliZVRvKHRodW1iOiBJZ3hTbGlkZXJUaHVtYkNvbXBvbmVudCwgY2FsbGJhY2s6IChhOiBudW1iZXIsIGI6IG51bWJlcikgPT4gdm9pZCkge1xuICAgICAgICBpZiAoIXRodW1iKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aHVtYi5vblRodW1iVmFsdWVDaGFuZ2VcbiAgICAgICAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlcih0aHVtYikpKVxuICAgICAgICAgICAgLnN1YnNjcmliZSh2YWx1ZSA9PiBjYWxsYmFjayh2YWx1ZSwgdGh1bWIudHlwZSkpO1xuICAgIH1cblxuICAgIHByaXZhdGUgdW5zdWJzY3JpYmVyKHRodW1iOiBJZ3hTbGlkZXJUaHVtYkNvbXBvbmVudCkge1xuICAgICAgICByZXR1cm4gbWVyZ2UodGhpcy5fZGVzdHJveWVyJCwgdGh1bWIuZGVzdHJveSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBoYXNWYWx1ZUNoYW5nZWQob2xkVmFsdWUpIHtcbiAgICAgICAgY29uc3QgaXNTbGlkZXJXaXRoRGlmZmVyZW50VmFsdWU6IGJvb2xlYW4gPSAhdGhpcy5pc1JhbmdlICYmIG9sZFZhbHVlICE9PSB0aGlzLnZhbHVlO1xuICAgICAgICBjb25zdCBpc1JhbmdlV2l0aE9uZURpZmZlcmVudFZhbHVlOiBib29sZWFuID0gdGhpcy5pc1JhbmdlICYmXG4gICAgICAgICAgICAoKG9sZFZhbHVlIGFzIElSYW5nZVNsaWRlclZhbHVlKS5sb3dlciAhPT0gKHRoaXMudmFsdWUgYXMgSVJhbmdlU2xpZGVyVmFsdWUpLmxvd2VyIHx8XG4gICAgICAgICAgICAgICAgKG9sZFZhbHVlIGFzIElSYW5nZVNsaWRlclZhbHVlKS51cHBlciAhPT0gKHRoaXMudmFsdWUgYXMgSVJhbmdlU2xpZGVyVmFsdWUpLnVwcGVyKTtcblxuICAgICAgICByZXR1cm4gaXNTbGlkZXJXaXRoRGlmZmVyZW50VmFsdWUgfHwgaXNSYW5nZVdpdGhPbmVEaWZmZXJlbnRWYWx1ZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGVtaXRWYWx1ZUNoYW5nZWQob2xkVmFsdWU6IG51bWJlciB8IElSYW5nZVNsaWRlclZhbHVlKSB7XG4gICAgICAgIHRoaXMub25WYWx1ZUNoYW5nZS5lbWl0KHsgb2xkVmFsdWUsIHZhbHVlOiB0aGlzLnZhbHVlIH0pO1xuICAgIH1cbn1cblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbkBOZ01vZHVsZSh7XG4gICAgZGVjbGFyYXRpb25zOiBbSWd4U2xpZGVyQ29tcG9uZW50LCBJZ3hUaHVtYkZyb21UZW1wbGF0ZURpcmVjdGl2ZSwgSWd4VGh1bWJUb1RlbXBsYXRlRGlyZWN0aXZlLCBJZ3hTbGlkZXJUaHVtYkNvbXBvbmVudF0sXG4gICAgZXhwb3J0czogW0lneFNsaWRlckNvbXBvbmVudCwgSWd4VGh1bWJGcm9tVGVtcGxhdGVEaXJlY3RpdmUsIElneFRodW1iVG9UZW1wbGF0ZURpcmVjdGl2ZSwgSWd4U2xpZGVyVGh1bWJDb21wb25lbnRdLFxuICAgIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIElneFNsaWRlck1vZHVsZSB7XG59XG4iXX0=