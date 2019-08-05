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
const noop = () => {
};
const ɵ0 = noop;
/** @type {?} */
let NEXT_ID = 0;
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
export class IgxSliderComponent {
    /**
     * @param {?} renderer
     * @param {?} _el
     * @param {?} _cdr
     */
    constructor(renderer, _el, _cdr) {
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
        this.id = `igx-slider-${NEXT_ID++}`;
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
    /**
     * @private
     * @return {?}
     */
    get thumbFrom() {
        return this.thumbs.find(thumb => thumb.type === SliderHandle.FROM);
    }
    /**
     * @private
     * @return {?}
     */
    get thumbTo() {
        return this.thumbs.find(thumb => thumb.type === SliderHandle.TO);
    }
    /**
     * @hidden
     * @return {?}
     */
    get valuemin() {
        return this.minValue;
    }
    /**
     * @hidden
     * @return {?}
     */
    get valuemax() {
        return this.maxValue;
    }
    /**
     * @hidden
     * @return {?}
     */
    get readonly() {
        return this.disabled;
    }
    /**
     * @hidden
     * @return {?}
     */
    get disabledClass() {
        return this.disabled;
    }
    /**
     * An \@Input property that gets the type of the `IgxSliderComponent`. The slider can be SliderType.SLIDER(default) or SliderType.RANGE.
     * ```typescript
     * \@ViewChild("slider2")
     * public slider: IgxSliderComponent;
     * ngAfterViewInit(){
     *     let type = this.slider.type;
     * }
     * @return {?}
     */
    get type() {
        return this._type;
    }
    /**
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
    set type(type) {
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
    }
    /**
     * Enables `labelView`, by accepting a collection of primitive values with more than one element.
     * Each element will be equally spread over the slider and it will serve as a thumb label.
     * Once the property is set, it will precendence over {\@link maxValue}, {\@link minValue}, {\@link step}.
     * This means that the manipulation for those properties won't be allowed.
     * @return {?}
     */
    get labels() {
        return this._labels;
    }
    /**
     * @param {?} labels
     * @return {?}
     */
    set labels(labels) {
        this._labels = labels;
        this._pMax = 1;
        if (this._hasViewInit) {
            this.stepDistance = this.calculateStepDistance();
            this.positionHandlesAndUpdateTrack();
            this.setTickInterval(labels);
        }
    }
    /**
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
    get context() {
        return {
            $implicit: this.value,
            labels: this.labels
        };
    }
    /**
     * An \@Input property that sets the incremental/decremental step of the value when dragging the thumb.
     * The default step is 1, and step should not be less or equal than 0.
     * ```html
     * <igx-slider #slider [(ngModel)]="task.percentCompleted" [step]="5">
     * ```
     * @param {?} step
     * @return {?}
     */
    set step(step) {
        this._step = step;
        if (this._hasViewInit) {
            this.stepDistance = this.calculateStepDistance();
            this.normalizeByStep(this.value);
            this.setTickInterval(this.labels);
        }
    }
    /**
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
    get step() {
        return this.labelsViewEnabled ? 1 : this._step;
    }
    /**
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
    get disabled() {
        return this._disabled;
    }
    /**
     * An \@Input property that disables or enables UI interaction.
     * ```html
     * <igx-slider #slider [disabled]="'true'" [(ngModel)]="task.percentCompleted" [step]="5" [lowerBound]="20">
     * ```
     * @param {?} disable
     * @return {?}
     */
    set disabled(disable) {
        this._disabled = disable;
        if (this._hasViewInit) {
            this.changeThumbFocusableState(disable);
        }
    }
    /**
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
    get continuous() {
        return this._continuous;
    }
    /**
     * An \@Input property that marks the {\@link IgxSliderComponent} as continuous.
     * By default is considered that the {\@link IgxSliderComponent} is discrete.
     * Discrete {\@link IgxSliderComponent} does not have ticks and does not shows bubble labels for values.
     * ```html
     * <igx-slider #slider [continuous]="'true'" [(ngModel)]="task.percentCompleted" [step]="5" [lowerBound]="20">
     * ```
     * @param {?} continuous
     * @return {?}
     */
    set continuous(continuous) {
        if (this.labelsViewEnabled) {
            return;
        }
        this._continuous = continuous;
        this.setTickInterval(null);
    }
    /**
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
    get isContinuous() {
        return this.continuous;
    }
    /**
     * @hidden
     * \@internal
     * @param {?} continuous
     * @return {?}
     */
    set isContinuous(continuous) {
        this.continuous = continuous;
    }
    /**
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
    get maxValue() {
        return this.labelsViewEnabled ?
            this.labels.length - 1 :
            this._maxValue;
    }
    /**
     * Sets the maximal value for the `IgxSliderComponent`.
     * The default maximum value is 100.
     * ```html
     * <igx-slider [type]="sliderType" [minValue]="56" [maxValue]="256">
     * ```
     * @param {?} value
     * @return {?}
     */
    set maxValue(value) {
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
    }
    /**
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
    get minValue() {
        if (this.labelsViewEnabled) {
            return 0;
        }
        return this._minValue;
    }
    /**
     * Sets the minimal value for the `IgxSliderComponent`.
     * The default minimal value is 0.
     * ```html
     * <igx-slider [type]="sliderType" [minValue]="56" [maxValue]="100">
     * ```
     * @param {?} value
     * @return {?}
     */
    set minValue(value) {
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
    }
    /**
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
    get lowerBound() {
        if (!Number.isNaN(this._lowerBound) && this._lowerBound !== undefined) {
            return this.valueInRange(this._lowerBound, this.minValue, this.maxValue);
        }
        return this.minValue;
    }
    /**
     * Sets the lower boundary of the `IgxSliderComponent`.
     * If not set is the same as min value.
     * ```html
     * <igx-slider [step]="5" [lowerBound]="20">
     * ```
     * @param {?} value
     * @return {?}
     */
    set lowerBound(value) {
        if (value >= this.upperBound || (this.labelsViewEnabled && value < 0)) {
            return;
        }
        this._lowerBound = this.valueInRange(value, this.minValue, this.maxValue);
        // Refresh time travel zone.
        this._pMin = this.valueToFraction(this._lowerBound) || 0;
        this.positionHandlesAndUpdateTrack();
    }
    /**
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
    get upperBound() {
        if (!Number.isNaN(this._upperBound) && this._upperBound !== undefined) {
            return this.valueInRange(this._upperBound, this.minValue, this.maxValue);
        }
        return this.maxValue;
    }
    /**
     * Sets the upper boundary of the `IgxSliderComponent`.
     * If not set is the same as max value.
     * ```html
     * <igx-slider [step]="5" [upperBound]="20">
     * ```
     * @param {?} value
     * @return {?}
     */
    set upperBound(value) {
        if (value <= this.lowerBound || (this.labelsViewEnabled && value > this.labels.length - 1)) {
            return;
        }
        this._upperBound = this.valueInRange(value, this.minValue, this.maxValue);
        // Refresh time travel zone.
        this._pMax = this.valueToFraction(this._upperBound) || 1;
        this.positionHandlesAndUpdateTrack();
    }
    /**
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
    get value() {
        if (this.isRange) {
            return {
                lower: this.valueInRange(this.lowerValue, this.lowerBound, this.upperBound),
                upper: this.valueInRange(this.upperValue, this.lowerBound, this.upperBound)
            };
        }
        else {
            return this.valueInRange(this.upperValue, this.lowerBound, this.upperBound);
        }
    }
    /**
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
    set value(value) {
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
    }
    /**
     * @hidden
     * @param {?} $event
     * @return {?}
     */
    onPointerDown($event) {
        this.findClosestThumb($event);
        if (!this.thumbTo.isActive && this.thumbFrom === undefined) {
            return;
        }
        /** @type {?} */
        const activeThumb = this.thumbTo.isActive ? this.thumbTo : this.thumbFrom;
        activeThumb.nativeElement.setPointerCapture($event.pointerId);
        this.showThumbsIndicators();
    }
    /**
     * @hidden
     * @param {?} $event
     * @return {?}
     */
    onPointerUp($event) {
        if (!this.thumbTo.isActive && this.thumbFrom === undefined) {
            return;
        }
        this.hideThumbsIndicators();
    }
    /**
     * @hidden
     * @return {?}
     */
    onFocus() {
        this.toggleThumbLabels();
    }
    /**
     * @hidden
     * @param {?} $event
     * @return {?}
     */
    onPanListener($event) {
        this.update($event.srcEvent.clientX);
    }
    /**
     * @return {?}
     */
    onPanStart() {
        this.showThumbsIndicators();
    }
    /**
     * @return {?}
     */
    onPanEnd() {
        this.hideThumbsIndicators();
    }
    /**
     * @hidden
     * @param {?} $event
     * @return {?}
     */
    onTapListener($event) {
        this.onTap($event);
    }
    /**
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
    get isRange() {
        return this.type === SliderType.RANGE;
    }
    /**
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
    get lowerValue() {
        if (!Number.isNaN(this._lowerValue) && this._lowerValue !== undefined && this._lowerValue >= this.lowerBound) {
            return this._lowerValue;
        }
        return this.lowerBound;
    }
    /**
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
    set lowerValue(value) {
        value = this.valueInRange(value, this.lowerBound, this.upperBound);
        this._lowerValue = value;
    }
    /**
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
    get upperValue() {
        if (!Number.isNaN(this._upperValue) && this._upperValue !== undefined && this._upperValue <= this.upperBound) {
            return this._upperValue;
        }
        return this.upperBound;
    }
    /**
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
    set upperValue(value) {
        value = this.valueInRange(value, this.lowerBound, this.upperBound);
        this._upperValue = value;
    }
    /**
     * Returns the value corresponding the lower label.
     * ```typescript
     * \@ViewChild("slider")
     * public slider: IgxSliderComponent;
     * let label = this.slider.lowerLabel;
     * ```
     * @return {?}
     */
    get lowerLabel() {
        return this.labelsViewEnabled ?
            this.labels[this.lowerValue] :
            this.lowerValue;
    }
    /**
     * Returns the value corresponding the upper label.
     * ```typescript
     * \@ViewChild("slider")
     * public slider: IgxSliderComponent;
     * let label = this.slider.upperLabel;
     * ```
     * @return {?}
     */
    get upperLabel() {
        return this.labelsViewEnabled ?
            this.labels[this.upperValue] :
            this.upperValue;
    }
    /**
     * Returns if label view is enabled.
     * If the {\@link labels} is set, the view is automatically activated.
     * ```typescript
     * \@ViewChild("slider")
     * public slider: IgxSliderComponent;
     * let labelView = this.slider.labelsViewEnabled;
     * ```
     * @return {?}
     */
    get labelsViewEnabled() {
        return !!(this.labels && this.labels.length > 1);
    }
    /**
     * @hidden
     * @return {?}
     */
    ngOnInit() {
        this.sliderSetup();
        // Set track travel zone
        this._pMin = this.valueToFraction(this.lowerBound) || 0;
        this._pMax = this.valueToFraction(this.upperBound) || 1;
    }
    /**
     * @hidden
     * @return {?}
     */
    ngAfterViewInit() {
        this._hasViewInit = true;
        this.positionHandlesAndUpdateTrack();
        this.setTickInterval(this.labels);
        this.changeThumbFocusableState(this.disabled);
        this.subscribeTo(this.thumbFrom, this.thumbChanged.bind(this));
        this.subscribeTo(this.thumbTo, this.thumbChanged.bind(this));
        this.thumbs.changes.pipe(takeUntil(this._destroyer$)).subscribe(change => {
            /** @type {?} */
            const t = change.find((thumb) => thumb.type === SliderHandle.FROM);
            this.positionHandle(t, this.lowerValue);
            this.subscribeTo(t, this.thumbChanged.bind(this));
            this.changeThumbFocusableState(this.disabled);
        });
    }
    /**
     * @hidden
     * @return {?}
     */
    ngAfterContentInit() {
        // Calculates the distance between every step in pixels.
        this.stepDistance = this.calculateStepDistance();
    }
    /**
     * @hidden
     * @return {?}
     */
    ngOnDestroy() {
        this._destroyer$.next(true);
        this._destroyer$.complete();
        this._indicatorsDestroyer$.next(true);
        this._indicatorsDestroyer$.complete();
    }
    /**
     * @hidden
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        if (!value) {
            return;
        }
        this.normalizeByStep(value);
    }
    /**
     * @hidden
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this._onChangeCallback = fn;
    }
    /**
     * @hidden
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this._onTouchedCallback = fn;
    }
    /**
     * @hidden
     * @return {?}
     */
    getEditElement() {
        return this.isRange ? this.thumbFrom.nativeElement : this.thumbTo.nativeElement;
    }
    /**
     *
     * @hidden
     * @param {?} $event
     * @return {?}
     */
    onTap($event) {
        this.update($event.srcEvent.clientX);
    }
    /**
     *
     * @hidden
     * @param {?} mouseX
     * @return {?}
     */
    update(mouseX) {
        if (this.disabled) {
            return;
        }
        // Update To/From Values
        this.onPan.next(mouseX);
        // Finally do positionHandlesAndUpdateTrack the DOM
        // based on data values
        this.positionHandlesAndUpdateTrack();
        this._onTouchedCallback();
    }
    /**
     * @hidden
     * @param {?} value
     * @param {?} thumbType
     * @return {?}
     */
    thumbChanged(value, thumbType) {
        /** @type {?} */
        const oldValue = this.value;
        /** @type {?} */
        let newVal;
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
    }
    /**
     * @hidden
     * @return {?}
     */
    onThumbChange() {
        this.toggleThumbLabels();
    }
    /**
     * @param {?} state
     * @return {?}
     */
    onHoverChange(state) {
        return state ? this.showThumbsIndicators() : this.hideThumbsIndicators();
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    swapThumb(value) {
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
    }
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    findClosestThumb(event) {
        if (this.isRange) {
            this.closestHandle(event.clientX);
        }
        else {
            this.thumbTo.nativeElement.focus();
        }
        this.update(event.clientX);
    }
    /**
     * @private
     * @return {?}
     */
    updateLowerBoundAndMinTravelZone() {
        this.lowerBound = this.minValue;
        this._pMin = 0;
    }
    /**
     * @private
     * @return {?}
     */
    updateUpperBoundAndMaxTravelZone() {
        this.upperBound = this.maxValue;
        this._pMax = 1;
    }
    /**
     * @private
     * @return {?}
     */
    sliderSetup() {
        /**
         * if {@link SliderType.SLIDER} than the initial value shold be the lowest one.
         */
        if (!this.isRange && this.value === this.upperBound) {
            this.value = this.lowerBound;
        }
    }
    /**
     * @private
     * @return {?}
     */
    calculateStepDistance() {
        return this._el.nativeElement.getBoundingClientRect().width / (this.maxValue - this.minValue) * this.step;
    }
    /**
     * @private
     * @return {?}
     */
    toggleThumb() {
        return this.thumbFrom.isActive ?
            this.thumbTo.nativeElement.focus() :
            this.thumbFrom.nativeElement.focus();
    }
    /**
     * @private
     * @param {?} value
     * @param {?=} min
     * @param {?=} max
     * @return {?}
     */
    valueInRange(value, min = 0, max = 100) {
        return Math.max(Math.min(value, max), min);
    }
    /**
     * @private
     * @param {?} color
     * @param {?} interval
     * @return {?}
     */
    generateTickMarks(color, interval) {
        return interval !== null ? `repeating-linear-gradient(
            ${'to left'},
            ${color},
            ${color} 1.5px,
            transparent 1.5px,
            transparent ${interval}%
        ), repeating-linear-gradient(
            ${'to right'},
            ${color},
            ${color} 1.5px,
            transparent 1.5px,
            transparent ${interval}%
        )` : interval;
    }
    /**
     * @private
     * @param {?} handle
     * @param {?} position
     * @return {?}
     */
    positionHandle(handle, position) {
        if (!handle) {
            return;
        }
        handle.nativeElement.style.left = `${this.valueToFraction(position) * 100}%`;
    }
    /**
     * @private
     * @return {?}
     */
    positionHandlesAndUpdateTrack() {
        if (!this.isRange) {
            this.positionHandle(this.thumbTo, (/** @type {?} */ (this.value)));
        }
        else {
            this.positionHandle(this.thumbTo, ((/** @type {?} */ (this.value))).upper);
            this.positionHandle(this.thumbFrom, ((/** @type {?} */ (this.value))).lower);
        }
        this.updateTrack();
    }
    /**
     * @private
     * @param {?} mouseX
     * @return {?}
     */
    closestHandle(mouseX) {
        /** @type {?} */
        const fromOffset = this.thumbFrom.nativeElement.offsetLeft + this.thumbFrom.nativeElement.offsetWidth / 2;
        /** @type {?} */
        const toOffset = this.thumbTo.nativeElement.offsetLeft + this.thumbTo.nativeElement.offsetWidth / 2;
        /** @type {?} */
        const xPointer = mouseX - this._el.nativeElement.getBoundingClientRect().left;
        /** @type {?} */
        const match = this.closestTo(xPointer, [fromOffset, toOffset]);
        if (match === fromOffset) {
            this.thumbFrom.nativeElement.focus();
        }
        else if (match === toOffset) {
            this.thumbTo.nativeElement.focus();
        }
    }
    /**
     * @private
     * @param {?} labels
     * @return {?}
     */
    setTickInterval(labels) {
        /** @type {?} */
        let interval;
        /** @type {?} */
        const trackProgress = 100;
        if (this.labelsViewEnabled) {
            // Calc ticks depending on the labels length;
            interval = ((trackProgress / (this.labels.length - 1) * 10)) / 10;
        }
        else {
            /** @type {?} */
            const trackRange = this.maxValue - this.minValue;
            interval = this.step > 1 ?
                (trackProgress / ((trackRange / this.step)) * 10) / 10
                : null;
        }
        /** @type {?} */
        const renderCallbackExecution = !this.continuous ? this.generateTickMarks('white', interval) : null;
        this.renderer.setStyle(this.ticks.nativeElement, 'background', renderCallbackExecution);
    }
    /**
     * @private
     * @return {?}
     */
    showThumbsIndicators() {
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
    }
    /**
     * @private
     * @return {?}
     */
    hideThumbsIndicators() {
        if (this.disabled) {
            return;
        }
        this._indicatorsTimer = timer(this.thumbLabelVisibilityDuration);
        this._indicatorsTimer.pipe(takeUntil(this._indicatorsDestroyer$)).subscribe(() => {
            this.thumbTo.hideThumbIndicators();
            if (this.thumbFrom) {
                this.thumbFrom.hideThumbIndicators();
            }
        });
    }
    /**
     * @private
     * @return {?}
     */
    toggleThumbLabels() {
        this.showThumbsIndicators();
        this.hideThumbsIndicators();
    }
    /**
     * @private
     * @param {?} state
     * @return {?}
     */
    changeThumbFocusableState(state) {
        /** @type {?} */
        const value = state ? -1 : 1;
        if (this.isRange) {
            this.thumbFrom.tabindex = value;
        }
        this.thumbTo.tabindex = value;
        this._cdr.detectChanges();
    }
    /**
     * @private
     * @param {?} goal
     * @param {?} positions
     * @return {?}
     */
    closestTo(goal, positions) {
        return positions.reduce((previous, current) => {
            return (Math.abs(goal - current) < Math.abs(goal - previous) ? current : previous);
        });
    }
    /**
     * @private
     * @param {?} value
     * @param {?=} pMin
     * @param {?=} pMax
     * @return {?}
     */
    valueToFraction(value, pMin = this._pMin, pMax = this._pMax) {
        return this.valueInRange((value - this.minValue) / (this.maxValue - this.minValue), pMin, pMax);
    }
    /**
     * @hidden
     * Normalizе the value when two-way data bind is used and {\@link this.step} is set.
     * @private
     * @param {?} value
     * @return {?}
     */
    normalizeByStep(value) {
        if (this.isRange) {
            this.value = {
                lower: ((/** @type {?} */ (value))).lower - (((/** @type {?} */ (value))).lower % this.step),
                upper: ((/** @type {?} */ (value))).upper - (((/** @type {?} */ (value))).upper % this.step)
            };
        }
        else {
            this.value = ((/** @type {?} */ (value))) - (((/** @type {?} */ (value))) % this.step);
        }
    }
    /**
     * @private
     * @return {?}
     */
    updateTrack() {
        /** @type {?} */
        const fromPosition = this.valueToFraction(this.lowerValue);
        /** @type {?} */
        const toPosition = this.valueToFraction(this.upperValue);
        /** @type {?} */
        const positionGap = toPosition - fromPosition;
        /** @type {?} */
        let trackLeftIndention = fromPosition;
        if (this.isRange) {
            if (positionGap) {
                trackLeftIndention = Math.round((1 / positionGap * fromPosition) * 100);
            }
            this.renderer.setStyle(this.track.nativeElement, 'transform', `scaleX(${positionGap}) translateX(${trackLeftIndention}%)`);
        }
        else {
            this.renderer.setStyle(this.track.nativeElement, 'transform', `scaleX(${toPosition})`);
        }
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    validateInitialValue(value) {
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
    }
    /**
     * @private
     * @param {?} thumb
     * @param {?} callback
     * @return {?}
     */
    subscribeTo(thumb, callback) {
        if (!thumb) {
            return;
        }
        thumb.onThumbValueChange
            .pipe(takeUntil(this.unsubscriber(thumb)))
            .subscribe(value => callback(value, thumb.type));
    }
    /**
     * @private
     * @param {?} thumb
     * @return {?}
     */
    unsubscriber(thumb) {
        return merge(this._destroyer$, thumb.destroy);
    }
    /**
     * @private
     * @param {?} oldValue
     * @return {?}
     */
    hasValueChanged(oldValue) {
        /** @type {?} */
        const isSliderWithDifferentValue = !this.isRange && oldValue !== this.value;
        /** @type {?} */
        const isRangeWithOneDifferentValue = this.isRange &&
            (((/** @type {?} */ (oldValue))).lower !== ((/** @type {?} */ (this.value))).lower ||
                ((/** @type {?} */ (oldValue))).upper !== ((/** @type {?} */ (this.value))).upper);
        return isSliderWithDifferentValue || isRangeWithOneDifferentValue;
    }
    /**
     * @private
     * @param {?} oldValue
     * @return {?}
     */
    emitValueChanged(oldValue) {
        this.onValueChange.emit({ oldValue, value: this.value });
    }
}
IgxSliderComponent.decorators = [
    { type: Component, args: [{
                providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: IgxSliderComponent, multi: true }],
                selector: 'igx-slider',
                template: "<div class=\"igx-slider__track\">\n    <div #track class=\"igx-slider__track-fill\"></div>\n    <div #ticks class=\"igx-slider__track-ticks\"></div>\n</div>\n<div class=\"igx-slider__thumbs\">\n    <igx-thumb *ngIf=\"isRange\"\n        #thumbFrom\n        [type]=\"0\"\n        [value]=\"lowerLabel\"\n        [disabled]=\"disabled\"\n        [continuous]=\"continuous\"\n        [onPan]=\"onPan\"\n        [stepDistance]=\"stepDistance\"\n        [step]=\"step\"\n        [templateRef]=\"thumbFromTemplateRef\"\n        [context]=\"context\"\n        (onChange)=\"onThumbChange()\"\n        (onHoverChange)=\"onHoverChange($event)\"\n        [thumbLabelVisibilityDuration]=\"thumbLabelVisibilityDuration\"></igx-thumb>\n    <igx-thumb\n        #thumbTo\n        [type]=\"1\"\n        [value]=\"upperLabel\"\n        [disabled]=\"disabled\"\n        [continuous]=\"continuous\"\n        [onPan]=\"onPan\"\n        [stepDistance]=\"stepDistance\"\n        [step]=\"step\"\n        [templateRef]=\"thumbToTemplateRef\"\n        [context]=\"context\"\n        (onChange)=\"onThumbChange()\"\n        (onHoverChange)=\"onHoverChange($event)\"\n        [thumbLabelVisibilityDuration]=\"thumbLabelVisibilityDuration\"></igx-thumb>\n</div>\n",
                styles: [`
        :host {
            display: block;
        }
    `]
            }] }
];
/** @nocollapse */
IgxSliderComponent.ctorParameters = () => [
    { type: Renderer2 },
    { type: ElementRef },
    { type: ChangeDetectorRef }
];
IgxSliderComponent.propDecorators = {
    track: [{ type: ViewChild, args: ['track', { static: true },] }],
    ticks: [{ type: ViewChild, args: ['ticks', { static: true },] }],
    thumbs: [{ type: ViewChildren, args: [IgxSliderThumbComponent,] }],
    thumbFromTemplateRef: [{ type: ContentChild, args: [IgxThumbFromTemplateDirective, { read: TemplateRef, static: false },] }],
    thumbToTemplateRef: [{ type: ContentChild, args: [IgxThumbToTemplateDirective, { read: TemplateRef, static: true },] }],
    role: [{ type: HostBinding, args: [`attr.role`,] }],
    valuemin: [{ type: HostBinding, args: [`attr.aria-valuemin`,] }],
    valuemax: [{ type: HostBinding, args: [`attr.aria-valuemax`,] }],
    readonly: [{ type: HostBinding, args: [`attr.aria-readonly`,] }],
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
    DeprecateProperty(`IgxSliderComponent \`isContinuous\` property is deprecated.\nUse \`continuous\` instead.`),
    tslib_1.__metadata("design:type", Boolean),
    tslib_1.__metadata("design:paramtypes", [Boolean])
], IgxSliderComponent.prototype, "isContinuous", null);
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
export class IgxSliderModule {
}
IgxSliderModule.decorators = [
    { type: NgModule, args: [{
                declarations: [IgxSliderComponent, IgxThumbFromTemplateDirective, IgxThumbToTemplateDirective, IgxSliderThumbComponent],
                exports: [IgxSliderComponent, IgxThumbFromTemplateDirective, IgxThumbToTemplateDirective, IgxSliderThumbComponent],
                imports: [CommonModule]
            },] }
];
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lnbml0ZXVpLWFuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvc2xpZGVyL3NsaWRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUNZLFNBQVMsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUNsRCxXQUFXLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBVSxNQUFNLEVBQUUsU0FBUyxFQUN2RCxTQUFTLEVBQ1QsV0FBVyxFQUNYLFlBQVksRUFHWixZQUFZLEVBQ1osWUFBWSxFQUNaLFNBQVMsRUFDVCxpQkFBaUIsRUFDcEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXpFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ2hFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFjLEtBQUssRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN6RCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFFLFlBQVksRUFDakIsNkJBQTZCLEVBQzdCLDJCQUEyQixFQUUzQixVQUFVLEVBRWIsTUFBTSxpQkFBaUIsQ0FBQzs7TUFHbkIsSUFBSSxHQUFHLEdBQUcsRUFBRTtBQUNsQixDQUFDOzs7SUFFRyxPQUFPLEdBQUcsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztBQTJCZixNQUFNLE9BQU8sa0JBQWtCOzs7Ozs7SUFta0IzQixZQUFvQixRQUFtQixFQUFVLEdBQWUsRUFBVSxJQUF1QjtRQUE3RSxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQVUsUUFBRyxHQUFILEdBQUcsQ0FBWTtRQUFV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LENBQUM7OztzREFHN0c7Ozs7OztJQXJVRCxtQ0FBa0I7Ozs7O0lBQ2xCLG1DQUFrQjs7Ozs7SUFHbEIsMENBQTZCOzs7OztJQUM3Qix1Q0FBc0I7Ozs7O0lBQ3RCLHVDQUF3Qjs7Ozs7SUFDeEIseUNBQTZCOzs7OztJQUM3Qix5Q0FBNkI7Ozs7O0lBQzdCLHlDQUE2Qjs7Ozs7SUFDN0IseUNBQTZCOzs7OztJQUM3Qix5Q0FBNEI7Ozs7O0lBQzVCLHVDQUEwQjs7Ozs7SUFDMUIsbUNBQWtCOzs7OztJQUVsQixxQ0FBb0U7Ozs7O0lBQ3BFLG1DQUFrQzs7Ozs7SUFFbEMseUNBQTZDOzs7OztJQUM3QyxtREFBdUQ7Ozs7O0lBQ3ZELDhDQUEwQzs7Ozs7SUFHMUMsK0NBQW1EOzs7OztJQUNuRCxnREFBOEM7Ozs7OztJQUs5QyxtQ0FDMEI7Ozs7OztJQUsxQixtQ0FDMEI7Ozs7OztJQUsxQixvQ0FDOEY7Ozs7O0lBYTlGLDBDQUFpQzs7Ozs7SUFLakMsbUNBQXNEOzs7OztJQUt0RCxrREFDOEM7Ozs7O0lBSzlDLGdEQUM0Qzs7Ozs7SUFLNUMsa0NBQ3VCOzs7OztJQTZCdkIsd0NBQ3lCOzs7Ozs7Ozs7SUFpQnpCLGdDQUVzQzs7Ozs7Ozs7SUErQ3RDLDBEQUMwQzs7Ozs7Ozs7Ozs7OztJQXVZMUMsMkNBQ3VFOzs7OztJQUczRCxzQ0FBMkI7Ozs7O0lBQUUsaUNBQXVCOzs7OztJQUFFLGtDQUErQjs7Ozs7QUFnbUJyRyxNQUFNLE9BQU8sZUFBZTs7O1lBTDNCLFFBQVEsU0FBQztnQkFDTixZQUFZLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSw2QkFBNkIsRUFBRSwyQkFBMkIsRUFBRSx1QkFBdUIsQ0FBQztnQkFDdkgsT0FBTyxFQUFFLENBQUMsa0JBQWtCLEVBQUUsNkJBQTZCLEVBQUUsMkJBQTJCLEVBQUUsdUJBQXVCLENBQUM7Z0JBQ2xILE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQzthQUMxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge1xuICAgIEFmdGVyVmlld0luaXQsIENvbXBvbmVudCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLFxuICAgIEhvc3RCaW5kaW5nLCBJbnB1dCwgTmdNb2R1bGUsIE9uSW5pdCwgT3V0cHV0LCBSZW5kZXJlcjIsXG4gICAgVmlld0NoaWxkLFxuICAgIFRlbXBsYXRlUmVmLFxuICAgIENvbnRlbnRDaGlsZCxcbiAgICBBZnRlckNvbnRlbnRJbml0LFxuICAgIE9uRGVzdHJveSxcbiAgICBIb3N0TGlzdGVuZXIsXG4gICAgVmlld0NoaWxkcmVuLFxuICAgIFF1ZXJ5TGlzdCxcbiAgICBDaGFuZ2VEZXRlY3RvclJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEVkaXRvclByb3ZpZGVyIH0gZnJvbSAnLi4vY29yZS9lZGl0LXByb3ZpZGVyJztcbmltcG9ydCB7IERlcHJlY2F0ZVByb3BlcnR5IH0gZnJvbSAnLi4vY29yZS9kZXByZWNhdGVEZWNvcmF0b3JzJztcbmltcG9ydCB7IElneFNsaWRlclRodW1iQ29tcG9uZW50IH0gZnJvbSAnLi90aHVtYi90aHVtYi1zbGlkZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFN1YmplY3QsIG1lcmdlLCBPYnNlcnZhYmxlLCB0aW1lciB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgU2xpZGVySGFuZGxlLFxuICAgIElneFRodW1iRnJvbVRlbXBsYXRlRGlyZWN0aXZlLFxuICAgIElneFRodW1iVG9UZW1wbGF0ZURpcmVjdGl2ZSxcbiAgICBJUmFuZ2VTbGlkZXJWYWx1ZSxcbiAgICBTbGlkZXJUeXBlLFxuICAgIElTbGlkZXJWYWx1ZUNoYW5nZUV2ZW50QXJnc1xufSBmcm9tICcuL3NsaWRlci5jb21tb24nO1xuXG5cbmNvbnN0IG5vb3AgPSAoKSA9PiB7XG59O1xuXG5sZXQgTkVYVF9JRCA9IDA7XG5cbi8qKlxuICogKipJZ25pdGUgVUkgZm9yIEFuZ3VsYXIgU2xpZGVyKiogLVxuICogW0RvY3VtZW50YXRpb25dKGh0dHBzOi8vd3d3LmluZnJhZ2lzdGljcy5jb20vcHJvZHVjdHMvaWduaXRlLXVpLWFuZ3VsYXIvYW5ndWxhci9jb21wb25lbnRzL3NsaWRlci5odG1sKVxuICpcbiAqIFRoZSBJZ25pdGUgVUkgU2xpZGVyIGFsbG93cyBzZWxlY3Rpb24gaW4gYSBnaXZlbiByYW5nZSBieSBtb3ZpbmcgdGhlIHRodW1iIGFsb25nIHRoZSB0cmFjay4gVGhlIHRyYWNrXG4gKiBjYW4gYmUgZGVmaW5lZCBhcyBjb250aW51b3VzIG9yIHN0ZXBwZWQsIGFuZCB5b3UgY2FuIGNob29zZSBiZXR3ZWVuIHNpbmdsZSBhbmQgcmFuZ2Ugc2xpZGVyIHR5cGVzLlxuICpcbiAqIEV4YW1wbGU6XG4gKiBgYGBodG1sXG4gKiA8aWd4LXNsaWRlciBpZD1cInNsaWRlclwiXG4gKiAgICAgICAgICAgIFttaW5WYWx1ZV09XCIwXCIgW21heFZhbHVlXT1cIjEwMFwiXG4gKiAgICAgICAgICAgIFtjb250aW51b3VzXT10cnVlIFsobmdNb2RlbCldPVwidm9sdW1lXCI+XG4gKiA8L2lneC1zbGlkZXI+XG4gKiBgYGBcbiAqL1xuQENvbXBvbmVudCh7XG4gICAgcHJvdmlkZXJzOiBbeyBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUiwgdXNlRXhpc3Rpbmc6IElneFNsaWRlckNvbXBvbmVudCwgbXVsdGk6IHRydWUgfV0sXG4gICAgc2VsZWN0b3I6ICdpZ3gtc2xpZGVyJyxcbiAgICB0ZW1wbGF0ZVVybDogJ3NsaWRlci5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVzOiBbYFxuICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgfVxuICAgIGBdXG59KVxuZXhwb3J0IGNsYXNzIElneFNsaWRlckNvbXBvbmVudCBpbXBsZW1lbnRzXG4gICAgQ29udHJvbFZhbHVlQWNjZXNzb3IsXG4gICAgRWRpdG9yUHJvdmlkZXIsXG4gICAgT25Jbml0LFxuICAgIEFmdGVyVmlld0luaXQsXG4gICAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgICBPbkRlc3Ryb3kge1xuXG4gICAgLy8gTGltaXQgaGFuZGxlIHRyYXZlbCB6b25lXG4gICAgcHJpdmF0ZSBfcE1pbiA9IDA7XG4gICAgcHJpdmF0ZSBfcE1heCA9IDE7XG5cbiAgICAvLyBGcm9tL3VwcGVyVmFsdWUgaW4gcGVyY2VudCB2YWx1ZXNcbiAgICBwcml2YXRlIF9oYXNWaWV3SW5pdCA9IGZhbHNlO1xuICAgIHByaXZhdGUgX21pblZhbHVlID0gMDtcbiAgICBwcml2YXRlIF9tYXhWYWx1ZSA9IDEwMDtcbiAgICBwcml2YXRlIF9sb3dlckJvdW5kPzogbnVtYmVyO1xuICAgIHByaXZhdGUgX3VwcGVyQm91bmQ/OiBudW1iZXI7XG4gICAgcHJpdmF0ZSBfbG93ZXJWYWx1ZT86IG51bWJlcjtcbiAgICBwcml2YXRlIF91cHBlclZhbHVlPzogbnVtYmVyO1xuICAgIHByaXZhdGUgX2NvbnRpbnVvdXMgPSBmYWxzZTtcbiAgICBwcml2YXRlIF9kaXNhYmxlZCA9IGZhbHNlO1xuICAgIHByaXZhdGUgX3N0ZXAgPSAxO1xuXG4gICAgcHJpdmF0ZSBfbGFiZWxzID0gbmV3IEFycmF5PG51bWJlcnxzdHJpbmd8Ym9vbGVhbnxudWxsfHVuZGVmaW5lZD4oKTtcbiAgICBwcml2YXRlIF90eXBlID0gU2xpZGVyVHlwZS5TTElERVI7XG5cbiAgICBwcml2YXRlIF9kZXN0cm95ZXIkID0gbmV3IFN1YmplY3Q8Ym9vbGVhbj4oKTtcbiAgICBwcml2YXRlIF9pbmRpY2F0b3JzRGVzdHJveWVyJCA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XG4gICAgcHJpdmF0ZSBfaW5kaWNhdG9yc1RpbWVyOiBPYnNlcnZhYmxlPGFueT47XG5cblxuICAgIHByaXZhdGUgX29uQ2hhbmdlQ2FsbGJhY2s6IChfOiBhbnkpID0+IHZvaWQgPSBub29wO1xuICAgIHByaXZhdGUgX29uVG91Y2hlZENhbGxiYWNrOiAoKSA9PiB2b2lkID0gbm9vcDtcblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBAVmlld0NoaWxkKCd0cmFjaycsIHsgc3RhdGljOiB0cnVlIH0pXG4gICAgcHJpdmF0ZSB0cmFjazogRWxlbWVudFJlZjtcblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBAVmlld0NoaWxkKCd0aWNrcycsIHsgc3RhdGljOiB0cnVlIH0pXG4gICAgcHJpdmF0ZSB0aWNrczogRWxlbWVudFJlZjtcblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBAVmlld0NoaWxkcmVuKElneFNsaWRlclRodW1iQ29tcG9uZW50KVxuICAgIHByaXZhdGUgdGh1bWJzOiBRdWVyeUxpc3Q8SWd4U2xpZGVyVGh1bWJDb21wb25lbnQ+ID0gbmV3IFF1ZXJ5TGlzdDxJZ3hTbGlkZXJUaHVtYkNvbXBvbmVudD4oKTtcblxuICAgIHByaXZhdGUgZ2V0IHRodW1iRnJvbSgpOiBJZ3hTbGlkZXJUaHVtYkNvbXBvbmVudCB7XG4gICAgICAgIHJldHVybiB0aGlzLnRodW1icy5maW5kKHRodW1iID0+IHRodW1iLnR5cGUgPT09IFNsaWRlckhhbmRsZS5GUk9NKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldCB0aHVtYlRvKCk6IElneFNsaWRlclRodW1iQ29tcG9uZW50IHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGh1bWJzLmZpbmQodGh1bWIgPT4gdGh1bWIudHlwZSA9PT0gU2xpZGVySGFuZGxlLlRPKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIHN0ZXBEaXN0YW5jZSA9IHRoaXMuX3N0ZXA7XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIG9uUGFuOiBTdWJqZWN0PG51bWJlcj4gPSBuZXcgU3ViamVjdDxudW1iZXI+KCk7XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgQENvbnRlbnRDaGlsZChJZ3hUaHVtYkZyb21UZW1wbGF0ZURpcmVjdGl2ZSwgeyByZWFkOiBUZW1wbGF0ZVJlZiwgc3RhdGljOiBmYWxzZSB9KVxuICAgIHB1YmxpYyB0aHVtYkZyb21UZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55PjtcblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBAQ29udGVudENoaWxkKElneFRodW1iVG9UZW1wbGF0ZURpcmVjdGl2ZSwgeyByZWFkOiBUZW1wbGF0ZVJlZiwgc3RhdGljOiB0cnVlIH0pXG4gICAgcHVibGljIHRodW1iVG9UZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55PjtcblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBASG9zdEJpbmRpbmcoYGF0dHIucm9sZWApXG4gICAgcHVibGljIHJvbGUgPSAnc2xpZGVyJztcblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBASG9zdEJpbmRpbmcoYGF0dHIuYXJpYS12YWx1ZW1pbmApXG4gICAgcHVibGljIGdldCB2YWx1ZW1pbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubWluVmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIEBIb3N0QmluZGluZyhgYXR0ci5hcmlhLXZhbHVlbWF4YClcbiAgICBwdWJsaWMgZ2V0IHZhbHVlbWF4KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5tYXhWYWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgQEhvc3RCaW5kaW5nKGBhdHRyLmFyaWEtcmVhZG9ubHlgKVxuICAgIHB1YmxpYyBnZXQgcmVhZG9ubHkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRpc2FibGVkO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBASG9zdEJpbmRpbmcoJ2NsYXNzLmlneC1zbGlkZXInKVxuICAgIHB1YmxpYyBzbGllckNsYXNzID0gdHJ1ZTtcblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBASG9zdEJpbmRpbmcoJ2NsYXNzLmlneC1zbGlkZXItLWRpc2FibGVkJylcbiAgICBwdWJsaWMgZ2V0IGRpc2FibGVkQ2xhc3MoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRpc2FibGVkO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFuIEBJbnB1dCBwcm9wZXJ0eSB0aGF0IHNldHMgdGhlIHZhbHVlIG9mIHRoZSBgaWRgIGF0dHJpYnV0ZS5cbiAgICAgKiBJZiBub3QgcHJvdmlkZWQgaXQgd2lsbCBiZSBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlZC5cbiAgICAgKiBgYGBodG1sXG4gICAgICogPGlneC1zbGlkZXIgW2lkXT1cIidpZ3gtc2xpZGVyLTMyJ1wiIFsobmdNb2RlbCldPVwidGFzay5wZXJjZW50Q29tcGxldGVkXCIgW3N0ZXBdPVwiNVwiIFtsb3dlckJvdW5kXT1cIjIwXCI+XG4gICAgICogYGBgXG4gICAgICovXG4gICAgQEhvc3RCaW5kaW5nKCdhdHRyLmlkJylcbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBpZCA9IGBpZ3gtc2xpZGVyLSR7TkVYVF9JRCsrfWA7XG5cbiAgICAvKipcbiAgICAgKiBBbiBASW5wdXQgcHJvcGVydHkgdGhhdCBnZXRzIHRoZSB0eXBlIG9mIHRoZSBgSWd4U2xpZGVyQ29tcG9uZW50YC4gVGhlIHNsaWRlciBjYW4gYmUgU2xpZGVyVHlwZS5TTElERVIoZGVmYXVsdCkgb3IgU2xpZGVyVHlwZS5SQU5HRS5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogQFZpZXdDaGlsZChcInNsaWRlcjJcIilcbiAgICAgKiBwdWJsaWMgc2xpZGVyOiBJZ3hTbGlkZXJDb21wb25lbnQ7XG4gICAgICogbmdBZnRlclZpZXdJbml0KCl7XG4gICAgICogICAgIGxldCB0eXBlID0gdGhpcy5zbGlkZXIudHlwZTtcbiAgICAgKiB9XG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZ2V0IHR5cGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl90eXBlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFuIEBJbnB1dCBwcm9wZXJ0eSB0aGF0IHNldHMgdGhlIHR5cGUgb2YgdGhlIGBJZ3hTbGlkZXJDb21wb25lbnRgLiBUaGUgc2xpZGVyIGNhbiBiZSBTbGlkZXJUeXBlLlNMSURFUihkZWZhdWx0KSBvciBTbGlkZXJUeXBlLlJBTkdFLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBzbGlkZXJUeXBlOiBTbGlkZXJUeXBlID0gU2xpZGVyVHlwZS5SQU5HRTtcbiAgICAgKiBgYGBcbiAgICAgKiBgYGBodG1sXG4gICAgICogPGlneC1zbGlkZXIgI3NsaWRlcjIgW3R5cGVdPVwic2xpZGVyVHlwZVwiIFsobmdNb2RlbCldPVwicmFuZ2VWYWx1ZVwiIFttaW5WYWx1ZV09XCIwXCIgW21heFZhbHVlXT1cIjEwMFwiPlxuICAgICAqIGBgYFxuICAgICAqL1xuICAgIHB1YmxpYyBzZXQgdHlwZSh0eXBlOiBTbGlkZXJUeXBlKSB7XG4gICAgICAgIHRoaXMuX3R5cGUgPSB0eXBlO1xuXG4gICAgICAgIGlmICh0eXBlID09PSBTbGlkZXJUeXBlLlNMSURFUikge1xuICAgICAgICAgICAgdGhpcy5sb3dlclZhbHVlID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmxhYmVsc1ZpZXdFbmFibGVkICYmIHRoaXMudXBwZXJWYWx1ZSA+IHRoaXMubWF4VmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMudXBwZXJWYWx1ZSA9IHRoaXMubGFiZWxzLmxlbmd0aCAtIDE7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5faGFzVmlld0luaXQpIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlVHJhY2soKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqQW4gQElucHV0IHByb3BlcnR5IHRoYXQgc2V0cyB0aGUgZHVyYXRpb24gdmlzaWJpbGl0eSBvZiB0aHVtYnMgbGFiZWxzLiBUaGUgZGVmYXVsdCB2YWx1ZSBpcyA3NTAgbWlsbGlzZWNvbmRzLlxuICAgICAqYGBgaHRtbFxuICAgICAqPGlneC1zbGlkZXIgI3NsaWRlciBbdGh1bWJMYWJlbFZpc2liaWxpdHlEdXJhdGlvbl09XCIzMDAwXCIgWyhuZ01vZGVsKV09XCJ0YXNrLnBlcmNlbnRDb21wbGV0ZWRcIiBbc3RlcF09XCI1XCI+XG4gICAgICpgYGBcbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyB0aHVtYkxhYmVsVmlzaWJpbGl0eUR1cmF0aW9uID0gNzUwO1xuXG5cbiAgICAvKipcbiAgICAgKiBFbmFibGVzIGBsYWJlbFZpZXdgLCBieSBhY2NlcHRpbmcgYSBjb2xsZWN0aW9uIG9mIHByaW1pdGl2ZSB2YWx1ZXMgd2l0aCBtb3JlIHRoYW4gb25lIGVsZW1lbnQuXG4gICAgICogRWFjaCBlbGVtZW50IHdpbGwgYmUgZXF1YWxseSBzcHJlYWQgb3ZlciB0aGUgc2xpZGVyIGFuZCBpdCB3aWxsIHNlcnZlIGFzIGEgdGh1bWIgbGFiZWwuXG4gICAgICogT25jZSB0aGUgcHJvcGVydHkgaXMgc2V0LCBpdCB3aWxsIHByZWNlbmRlbmNlIG92ZXIge0BsaW5rIG1heFZhbHVlfSwge0BsaW5rIG1pblZhbHVlfSwge0BsaW5rIHN0ZXB9LlxuICAgICAqIFRoaXMgbWVhbnMgdGhhdCB0aGUgbWFuaXB1bGF0aW9uIGZvciB0aG9zZSBwcm9wZXJ0aWVzIHdvbid0IGJlIGFsbG93ZWQuXG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZ2V0IGxhYmVscygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xhYmVscztcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IGxhYmVscyhsYWJlbHM6IEFycmF5PG51bWJlcnxzdHJpbmd8Ym9vbGVhbnxudWxsfHVuZGVmaW5lZD4pIHtcbiAgICAgICAgdGhpcy5fbGFiZWxzID0gbGFiZWxzO1xuXG4gICAgICAgIHRoaXMuX3BNYXggPSAxO1xuXG4gICAgICAgIGlmICh0aGlzLl9oYXNWaWV3SW5pdCkge1xuICAgICAgICAgICAgdGhpcy5zdGVwRGlzdGFuY2UgPSB0aGlzLmNhbGN1bGF0ZVN0ZXBEaXN0YW5jZSgpO1xuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbkhhbmRsZXNBbmRVcGRhdGVUcmFjaygpO1xuICAgICAgICAgICAgdGhpcy5zZXRUaWNrSW50ZXJ2YWwobGFiZWxzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHRlbXBsYXRlIGNvbnRleHQgY29ycmVzcG9uZGluZ1xuICAgICAqIHRvIHtAbGluayBJZ3hUaHVtYkZyb21UZW1wbGF0ZURpcmVjdGl2ZX0gYW5kIHtAbGluayBJZ3hUaHVtYlRvVGVtcGxhdGVEaXJlY3RpdmV9IHRlbXBsYXRlcy5cbiAgICAgKlxuICAgICAqIHJldHVybiB7XG4gICAgICogICRpbXBsaWNpdDoge0BsaW5rIHZhbHVlfSxcbiAgICAgKiAgbGFiZWxzOiB7QGxpbmsgbGFiZWxzfVxuICAgICAqIH1cbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0IGNvbnRleHQoKTogYW55IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICRpbXBsaWNpdDogdGhpcy52YWx1ZSxcbiAgICAgICAgICAgIGxhYmVsczogdGhpcy5sYWJlbHNcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBbiBASW5wdXQgcHJvcGVydHkgdGhhdCBzZXRzIHRoZSBpbmNyZW1lbnRhbC9kZWNyZW1lbnRhbCBzdGVwIG9mIHRoZSB2YWx1ZSB3aGVuIGRyYWdnaW5nIHRoZSB0aHVtYi5cbiAgICAgKiBUaGUgZGVmYXVsdCBzdGVwIGlzIDEsIGFuZCBzdGVwIHNob3VsZCBub3QgYmUgbGVzcyBvciBlcXVhbCB0aGFuIDAuXG4gICAgICogYGBgaHRtbFxuICAgICAqIDxpZ3gtc2xpZGVyICNzbGlkZXIgWyhuZ01vZGVsKV09XCJ0YXNrLnBlcmNlbnRDb21wbGV0ZWRcIiBbc3RlcF09XCI1XCI+XG4gICAgICogYGBgXG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgc2V0IHN0ZXAoc3RlcDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX3N0ZXAgPSBzdGVwO1xuXG4gICAgICAgIGlmICh0aGlzLl9oYXNWaWV3SW5pdCkge1xuICAgICAgICAgICAgdGhpcy5zdGVwRGlzdGFuY2UgPSB0aGlzLmNhbGN1bGF0ZVN0ZXBEaXN0YW5jZSgpO1xuICAgICAgICAgICAgdGhpcy5ub3JtYWxpemVCeVN0ZXAodGhpcy52YWx1ZSk7XG4gICAgICAgICAgICB0aGlzLnNldFRpY2tJbnRlcnZhbCh0aGlzLmxhYmVscyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBpbmNyZW1lbnRhbC9kZWNyZW1lbnRhbCBkcmFnZ2luZyBzdGVwIG9mIHRoZSB7QGxpbmsgSWd4U2xpZGVyQ29tcG9uZW50fS5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogQFZpZXdDaGlsZChcInNsaWRlcjJcIilcbiAgICAgKiBwdWJsaWMgc2xpZGVyOiBJZ3hTbGlkZXJDb21wb25lbnQ7XG4gICAgICogbmdBZnRlclZpZXdJbml0KCl7XG4gICAgICogICAgIGxldCBzdGVwID0gdGhpcy5zbGlkZXIuc3RlcDtcbiAgICAgKiB9XG4gICAgICogYGBgXG4gICAgICovXG4gICAgcHVibGljIGdldCBzdGVwKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5sYWJlbHNWaWV3RW5hYmxlZCA/IDEgOiB0aGlzLl9zdGVwO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgaWYgdGhlIHtAbGluayBJZ3hTbGlkZXJDb21wb25lbnR9IGlzIGRpc2FibGVkLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBAVmlld0NoaWxkKFwic2xpZGVyMlwiKVxuICAgICAqIHB1YmxpYyBzbGlkZXI6IElneFNsaWRlckNvbXBvbmVudDtcbiAgICAgKiBuZ0FmdGVyVmlld0luaXQoKXtcbiAgICAgKiAgICAgbGV0IGlzRGlzYWJsZWQgPSB0aGlzLnNsaWRlci5kaXNhYmxlZDtcbiAgICAgKiB9XG4gICAgICogYGBgXG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZ2V0IGRpc2FibGVkKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGlzYWJsZWQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpBbiBASW5wdXQgcHJvcGVydHkgdGhhdCBkaXNhYmxlcyBvciBlbmFibGVzIFVJIGludGVyYWN0aW9uLlxuICAgICAqYGBgaHRtbFxuICAgICAqPGlneC1zbGlkZXIgI3NsaWRlciBbZGlzYWJsZWRdPVwiJ3RydWUnXCIgWyhuZ01vZGVsKV09XCJ0YXNrLnBlcmNlbnRDb21wbGV0ZWRcIiBbc3RlcF09XCI1XCIgW2xvd2VyQm91bmRdPVwiMjBcIj5cbiAgICAgKmBgYFxuICAgICAqL1xuICAgIHB1YmxpYyBzZXQgZGlzYWJsZWQoZGlzYWJsZTogYm9vbGVhbikge1xuICAgICAgICB0aGlzLl9kaXNhYmxlZCA9IGRpc2FibGU7XG5cbiAgICAgICAgaWYgKHRoaXMuX2hhc1ZpZXdJbml0KSB7XG4gICAgICAgICAgICB0aGlzLmNoYW5nZVRodW1iRm9jdXNhYmxlU3RhdGUoZGlzYWJsZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGlmIHRoZSB7QGxpbmsgSWd4U2xpZGVyQ29tcG9uZW50fSBpcyBzZXQgYXMgY29udGludW91cy5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogQFZpZXdDaGlsZChcInNsaWRlcjJcIilcbiAgICAgKiBwdWJsaWMgc2xpZGVyOiBJZ3hTbGlkZXJDb21wb25lbnQ7XG4gICAgICogbmdBZnRlclZpZXdJbml0KCl7XG4gICAgICogICAgIGxldCBjb250aW51b3VzID0gdGhpcy5zbGlkZXIuY29udGludW91cztcbiAgICAgKiB9XG4gICAgICogYGBgXG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZ2V0IGNvbnRpbnVvdXMoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jb250aW51b3VzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFuIEBJbnB1dCBwcm9wZXJ0eSB0aGF0IG1hcmtzIHRoZSB7QGxpbmsgSWd4U2xpZGVyQ29tcG9uZW50fSBhcyBjb250aW51b3VzLlxuICAgICAqIEJ5IGRlZmF1bHQgaXMgY29uc2lkZXJlZCB0aGF0IHRoZSB7QGxpbmsgSWd4U2xpZGVyQ29tcG9uZW50fSBpcyBkaXNjcmV0ZS5cbiAgICAgKiBEaXNjcmV0ZSB7QGxpbmsgSWd4U2xpZGVyQ29tcG9uZW50fSBkb2VzIG5vdCBoYXZlIHRpY2tzIGFuZCBkb2VzIG5vdCBzaG93cyBidWJibGUgbGFiZWxzIGZvciB2YWx1ZXMuXG4gICAgICogYGBgaHRtbFxuICAgICAqIDxpZ3gtc2xpZGVyICNzbGlkZXIgW2NvbnRpbnVvdXNdPVwiJ3RydWUnXCIgWyhuZ01vZGVsKV09XCJ0YXNrLnBlcmNlbnRDb21wbGV0ZWRcIiBbc3RlcF09XCI1XCIgW2xvd2VyQm91bmRdPVwiMjBcIj5cbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBwdWJsaWMgc2V0IGNvbnRpbnVvdXMoY29udGludW91czogYm9vbGVhbikge1xuICAgICAgICBpZiAodGhpcy5sYWJlbHNWaWV3RW5hYmxlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fY29udGludW91cyA9IGNvbnRpbnVvdXM7XG4gICAgICAgIHRoaXMuc2V0VGlja0ludGVydmFsKG51bGwpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgaWYgdGhlIHtAbGluayBJZ3hTbGlkZXJDb21wb25lbnR9IGlzIHNldCBhcyBjb250aW51b3VzLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBAVmlld0NoaWxkKFwic2xpZGVyMlwiKVxuICAgICAqIHB1YmxpYyBzbGlkZXI6IElneFNsaWRlckNvbXBvbmVudDtcbiAgICAgKiBuZ0FmdGVyVmlld0luaXQoKXtcbiAgICAgKiAgICAgbGV0IGNvbnRpbnVvdXMgPSB0aGlzLnNsaWRlci5jb250aW51b3VzO1xuICAgICAqIH1cbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIEBEZXByZWNhdGVQcm9wZXJ0eShgSWd4U2xpZGVyQ29tcG9uZW50IFxcYGlzQ29udGludW91c1xcYCBwcm9wZXJ0eSBpcyBkZXByZWNhdGVkLlxcblVzZSBcXGBjb250aW51b3VzXFxgIGluc3RlYWQuYClcbiAgICBwdWJsaWMgZ2V0IGlzQ29udGludW91cygpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGludW91cztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICogQGludGVybmFsXG4gICAgICovXG4gICAgcHVibGljIHNldCBpc0NvbnRpbnVvdXMoY29udGludW91czogYm9vbGVhbikge1xuICAgICAgICB0aGlzLmNvbnRpbnVvdXMgPSBjb250aW51b3VzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIG1heGltdW0gdmFsdWUgZm9yIHRoZSB7QGxpbmsgSWd4U2xpZGVyQ29tcG9uZW50fS5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICpAVmlld0NoaWxkKFwic2xpZGVyXCIpXG4gICAgICpwdWJsaWMgc2xpZGVyOiBJZ3hTbGlkZXJDb21wb25lbnQ7XG4gICAgICpuZ0FmdGVyVmlld0luaXQoKXtcbiAgICAgKiAgICBsZXQgc2xpZGVyTWF4ID0gdGhpcy5zbGlkZXIubWF4VmFsdWU7XG4gICAgICp9XG4gICAgICogYGBgXG4gICAgICovXG4gICAgcHVibGljIGdldCBtYXhWYWx1ZSgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5sYWJlbHNWaWV3RW5hYmxlZCA/XG4gICAgICAgICAgICB0aGlzLmxhYmVscy5sZW5ndGggLSAxIDpcbiAgICAgICAgICAgIHRoaXMuX21heFZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIG1heGltYWwgdmFsdWUgZm9yIHRoZSBgSWd4U2xpZGVyQ29tcG9uZW50YC5cbiAgICAgKiBUaGUgZGVmYXVsdCBtYXhpbXVtIHZhbHVlIGlzIDEwMC5cbiAgICAgKiBgYGBodG1sXG4gICAgICogPGlneC1zbGlkZXIgW3R5cGVdPVwic2xpZGVyVHlwZVwiIFttaW5WYWx1ZV09XCI1NlwiIFttYXhWYWx1ZV09XCIyNTZcIj5cbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBzZXQgbWF4VmFsdWUodmFsdWU6IG51bWJlcikge1xuICAgICAgICBpZiAodmFsdWUgPD0gdGhpcy5fbWluVmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX21heFZhbHVlID0gdGhpcy5fbWluVmFsdWUgKyAxO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fbWF4VmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh2YWx1ZSA8IHRoaXMubG93ZXJCb3VuZCkge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVMb3dlckJvdW5kQW5kTWluVHJhdmVsWm9uZSgpO1xuICAgICAgICAgICAgdGhpcy51cHBlckJvdW5kID0gdmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICAvLyByZWZyZXNoIG1heCB0cmF2ZWwgem9uZSBsaW1pdHMuXG4gICAgICAgIHRoaXMuX3BNYXggPSAxO1xuICAgICAgICAvLyByZWNhbGN1bGF0ZSBzdGVwIGRpc3RhbmNlLlxuICAgICAgICB0aGlzLnN0ZXBEaXN0YW5jZSA9IHRoaXMuY2FsY3VsYXRlU3RlcERpc3RhbmNlKCk7XG4gICAgICAgIHRoaXMucG9zaXRpb25IYW5kbGVzQW5kVXBkYXRlVHJhY2soKTtcbiAgICAgICAgdGhpcy5zZXRUaWNrSW50ZXJ2YWwobnVsbCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpSZXR1cm5zIHRoZSBtaW5pbWFsIHZhbHVlIG9mIHRoZSBgSWd4U2xpZGVyQ29tcG9uZW50YC5cbiAgICAgKmBgYHR5cGVzY3JpcHRcbiAgICAgKkBWaWV3Q2hpbGQoXCJzbGlkZXIyXCIpXG4gICAgICpwdWJsaWMgc2xpZGVyOiBJZ3hTbGlkZXJDb21wb25lbnQ7XG4gICAgICpuZ0FmdGVyVmlld0luaXQoKXtcbiAgICAgKiAgICBsZXQgc2xpZGVyTWluID0gdGhpcy5zbGlkZXIubWluVmFsdWU7XG4gICAgICp9XG4gICAgICpgYGBcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0IG1pblZhbHVlKCk6IG51bWJlciB7XG4gICAgICAgIGlmICh0aGlzLmxhYmVsc1ZpZXdFbmFibGVkKSB7XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLl9taW5WYWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBtaW5pbWFsIHZhbHVlIGZvciB0aGUgYElneFNsaWRlckNvbXBvbmVudGAuXG4gICAgICogVGhlIGRlZmF1bHQgbWluaW1hbCB2YWx1ZSBpcyAwLlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8aWd4LXNsaWRlciBbdHlwZV09XCJzbGlkZXJUeXBlXCIgW21pblZhbHVlXT1cIjU2XCIgW21heFZhbHVlXT1cIjEwMFwiPlxuICAgICAqIGBgYFxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHNldCBtaW5WYWx1ZSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIGlmICh2YWx1ZSA+PSB0aGlzLm1heFZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl9taW5WYWx1ZSA9IHRoaXMubWF4VmFsdWUgLSAxO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fbWluVmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh2YWx1ZSA+IHRoaXMudXBwZXJCb3VuZCkge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVVcHBlckJvdW5kQW5kTWF4VHJhdmVsWm9uZSgpO1xuICAgICAgICAgICAgdGhpcy5sb3dlckJvdW5kID0gdmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBSZWZyZXNoIG1pbiB0cmF2ZWwgem9uZSBsaW1pdC5cbiAgICAgICAgdGhpcy5fcE1pbiA9IDA7XG4gICAgICAgIC8vIFJlY2FsY3VsYXRlIHN0ZXAgZGlzdGFuY2UuXG4gICAgICAgIHRoaXMuc3RlcERpc3RhbmNlID0gdGhpcy5jYWxjdWxhdGVTdGVwRGlzdGFuY2UoKTtcbiAgICAgICAgdGhpcy5wb3NpdGlvbkhhbmRsZXNBbmRVcGRhdGVUcmFjaygpO1xuICAgICAgICB0aGlzLnNldFRpY2tJbnRlcnZhbChudWxsKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBsb3dlciBib3VuZGFyeSBvZiB0aGUgYElneFNsaWRlckNvbXBvbmVudGAuXG4gICAgICpgYGB0eXBlc2NyaXB0XG4gICAgICpAVmlld0NoaWxkKFwic2xpZGVyXCIpXG4gICAgICpwdWJsaWMgc2xpZGVyOiBJZ3hTbGlkZXJDb21wb25lbnQ7XG4gICAgICpuZ0FmdGVyVmlld0luaXQoKXtcbiAgICAgKiAgICBsZXQgc2xpZGVyTG93Qm91bmQgPSB0aGlzLnNsaWRlci5sb3dlckJvdW5kO1xuICAgICAqfVxuICAgICAqYGBgXG4gICAgICovXG4gICAgcHVibGljIGdldCBsb3dlckJvdW5kKCk6IG51bWJlciB7XG4gICAgICAgIGlmICghTnVtYmVyLmlzTmFOKHRoaXMuX2xvd2VyQm91bmQpICYmIHRoaXMuX2xvd2VyQm91bmQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudmFsdWVJblJhbmdlKHRoaXMuX2xvd2VyQm91bmQsIHRoaXMubWluVmFsdWUsIHRoaXMubWF4VmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMubWluVmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgbG93ZXIgYm91bmRhcnkgb2YgdGhlIGBJZ3hTbGlkZXJDb21wb25lbnRgLlxuICAgICAqIElmIG5vdCBzZXQgaXMgdGhlIHNhbWUgYXMgbWluIHZhbHVlLlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8aWd4LXNsaWRlciBbc3RlcF09XCI1XCIgW2xvd2VyQm91bmRdPVwiMjBcIj5cbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBzZXQgbG93ZXJCb3VuZCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIGlmICh2YWx1ZSA+PSB0aGlzLnVwcGVyQm91bmQgfHwgKHRoaXMubGFiZWxzVmlld0VuYWJsZWQgJiYgdmFsdWUgPCAwKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fbG93ZXJCb3VuZCA9IHRoaXMudmFsdWVJblJhbmdlKHZhbHVlLCB0aGlzLm1pblZhbHVlLCB0aGlzLm1heFZhbHVlKTtcblxuICAgICAgICAvLyBSZWZyZXNoIHRpbWUgdHJhdmVsIHpvbmUuXG4gICAgICAgIHRoaXMuX3BNaW4gPSB0aGlzLnZhbHVlVG9GcmFjdGlvbih0aGlzLl9sb3dlckJvdW5kKSB8fCAwO1xuICAgICAgICB0aGlzLnBvc2l0aW9uSGFuZGxlc0FuZFVwZGF0ZVRyYWNrKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgdXBwZXIgYm91bmRhcnkgb2YgdGhlIGBJZ3hTbGlkZXJDb21wb25lbnRgLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKkBWaWV3Q2hpbGQoXCJzbGlkZXJcIilcbiAgICAgKnB1YmxpYyBzbGlkZXI6IElneFNsaWRlckNvbXBvbmVudDtcbiAgICAgKm5nQWZ0ZXJWaWV3SW5pdCgpe1xuICAgICAqICAgIGxldCBzbGlkZXJVcEJvdW5kID0gdGhpcy5zbGlkZXIudXBwZXJCb3VuZDtcbiAgICAgKn1cbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0IHVwcGVyQm91bmQoKTogbnVtYmVyIHtcbiAgICAgICAgaWYgKCFOdW1iZXIuaXNOYU4odGhpcy5fdXBwZXJCb3VuZCkgJiYgdGhpcy5fdXBwZXJCb3VuZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy52YWx1ZUluUmFuZ2UodGhpcy5fdXBwZXJCb3VuZCwgdGhpcy5taW5WYWx1ZSwgdGhpcy5tYXhWYWx1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5tYXhWYWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSB1cHBlciBib3VuZGFyeSBvZiB0aGUgYElneFNsaWRlckNvbXBvbmVudGAuXG4gICAgICogSWYgbm90IHNldCBpcyB0aGUgc2FtZSBhcyBtYXggdmFsdWUuXG4gICAgICogYGBgaHRtbFxuICAgICAqIDxpZ3gtc2xpZGVyIFtzdGVwXT1cIjVcIiBbdXBwZXJCb3VuZF09XCIyMFwiPlxuICAgICAqIGBgYFxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHNldCB1cHBlckJvdW5kKHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgaWYgKHZhbHVlIDw9IHRoaXMubG93ZXJCb3VuZCB8fCAodGhpcy5sYWJlbHNWaWV3RW5hYmxlZCAmJiB2YWx1ZSA+IHRoaXMubGFiZWxzLmxlbmd0aCAtIDEpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl91cHBlckJvdW5kID0gdGhpcy52YWx1ZUluUmFuZ2UodmFsdWUsIHRoaXMubWluVmFsdWUsIHRoaXMubWF4VmFsdWUpO1xuICAgICAgICAvLyBSZWZyZXNoIHRpbWUgdHJhdmVsIHpvbmUuXG4gICAgICAgIHRoaXMuX3BNYXggPSB0aGlzLnZhbHVlVG9GcmFjdGlvbih0aGlzLl91cHBlckJvdW5kKSB8fCAxO1xuICAgICAgICB0aGlzLnBvc2l0aW9uSGFuZGxlc0FuZFVwZGF0ZVRyYWNrKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgc2xpZGVyIHZhbHVlLiBJZiB0aGUgc2xpZGVyIGlzIG9mIHR5cGUge0BsaW5rIFNsaWRlclR5cGUuU0xJREVSfSB0aGUgcmV0dXJuZWQgdmFsdWUgaXMgbnVtYmVyLlxuICAgICAqIElmIHRoZSBzbGlkZXIgdHlwZSBpcyB7QGxpbmsgU2xpZGVyVHlwZS5SQU5HRX0gdGhlIHJldHVybmVkIHZhbHVlIHJlcHJlc2VudHMgYW4gb2JqZWN0IG9mIHtAbGluayBsb3dlclZhbHVlfSBhbmQge0BsaW5rIHVwcGVyVmFsdWV9LlxuICAgICAqYGBgdHlwZXNjcmlwdFxuICAgICAqQFZpZXdDaGlsZChcInNsaWRlcjJcIilcbiAgICAgKnB1YmxpYyBzbGlkZXI6IElneFNsaWRlckNvbXBvbmVudDtcbiAgICAgKnB1YmxpYyBzbGlkZXJWYWx1ZShldmVudCl7XG4gICAgICogICAgbGV0IHNsaWRlclZhbCA9IHRoaXMuc2xpZGVyLnZhbHVlO1xuICAgICAqfVxuICAgICAqYGBgXG4gICAgICovXG4gICAgcHVibGljIGdldCB2YWx1ZSgpOiBudW1iZXIgfCBJUmFuZ2VTbGlkZXJWYWx1ZSB7XG4gICAgICAgIGlmICh0aGlzLmlzUmFuZ2UpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgbG93ZXI6IHRoaXMudmFsdWVJblJhbmdlKHRoaXMubG93ZXJWYWx1ZSwgdGhpcy5sb3dlckJvdW5kLCB0aGlzLnVwcGVyQm91bmQpLFxuICAgICAgICAgICAgICAgIHVwcGVyOiB0aGlzLnZhbHVlSW5SYW5nZSh0aGlzLnVwcGVyVmFsdWUsIHRoaXMubG93ZXJCb3VuZCwgdGhpcy51cHBlckJvdW5kKVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnZhbHVlSW5SYW5nZSh0aGlzLnVwcGVyVmFsdWUsIHRoaXMubG93ZXJCb3VuZCwgdGhpcy51cHBlckJvdW5kKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIHNsaWRlciB2YWx1ZS5cbiAgICAgKiBJZiB0aGUgc2xpZGVyIGlzIG9mIHR5cGUge0BsaW5rIFNsaWRlclR5cGUuU0xJREVSfSB0aGUgYXJndW1lbnQgaXMgbnVtYmVyLiBCeSBkZWZhdWx0IHRoZSB7QGxpbmsgdmFsdWV9IGdldHMgdGhlIHtAbGluayBsb3dlckJvdW5kfS5cbiAgICAgKiBJZiB0aGUgc2xpZGVyIHR5cGUgaXMge0BsaW5rIFNsaWRlclR5cGUuUkFOR0V9IHRoZSBhcmd1bWVudFxuICAgICAqIHJlcHJlc2VudHMgYW4gb2JqZWN0IG9mIHtAbGluayBsb3dlclZhbHVlfSBhbmQge0BsaW5rIHVwcGVyVmFsdWV9IHByb3BlcnRpZXMuXG4gICAgICogQnkgZGVmYXVsdCB0aGUgb2JqZWN0IGlzIGFzc29jaWF0ZWQgd2l0aCB0aGUge0BsaW5rIGxvd2VyQm91bmR9IGFuZCB7QGxpbmsgdXBwZXJCb3VuZH0gcHJvcGVydHkgdmFsdWVzLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKnJhbmdlVmFsdWUgPSB7XG4gICAgICogICBsb3dlcjogMzAsXG4gICAgICogICB1cHBlcjogNjBcbiAgICAgKn07XG4gICAgICogYGBgXG4gICAgICogYGBgaHRtbFxuICAgICAqIDxpZ3gtc2xpZGVyIFt0eXBlXT1cInNsaWRlclR5cGVcIiBbKG5nTW9kZWwpXT1cInJhbmdlVmFsdWVcIiBbbWluVmFsdWVdPVwiNTZcIiBbbWF4VmFsdWVdPVwiMjU2XCI+XG4gICAgICogYGBgXG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgc2V0IHZhbHVlKHZhbHVlOiBudW1iZXIgfCBJUmFuZ2VTbGlkZXJWYWx1ZSkge1xuICAgICAgICBpZiAoIXRoaXMuaXNSYW5nZSkge1xuICAgICAgICAgICAgdGhpcy51cHBlclZhbHVlID0gdmFsdWUgYXMgbnVtYmVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFsdWUgPSB0aGlzLnZhbGlkYXRlSW5pdGlhbFZhbHVlKHZhbHVlIGFzIElSYW5nZVNsaWRlclZhbHVlKTtcbiAgICAgICAgICAgIHRoaXMudXBwZXJWYWx1ZSA9ICh2YWx1ZSBhcyBJUmFuZ2VTbGlkZXJWYWx1ZSkudXBwZXI7XG4gICAgICAgICAgICB0aGlzLmxvd2VyVmFsdWUgPSAodmFsdWUgYXMgSVJhbmdlU2xpZGVyVmFsdWUpLmxvd2VyO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fb25DaGFuZ2VDYWxsYmFjayh0aGlzLnZhbHVlKTtcblxuICAgICAgICBpZiAodGhpcy5faGFzVmlld0luaXQpIHtcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb25IYW5kbGVzQW5kVXBkYXRlVHJhY2soKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoaXMgZXZlbnQgaXMgZW1pdHRlZCB3aGVuIHVzZXIgaGFzIHN0b3BwZWQgaW50ZXJhY3RpbmcgdGhlIHRodW1iIGFuZCB2YWx1ZSBpcyBjaGFuZ2VkLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBwdWJsaWMgY2hhbmdlKGV2ZW50KXtcbiAgICAgKiAgICBhbGVydChcIlRoZSB2YWx1ZSBoYXMgYmVlbiBjaGFuZ2VkIVwiKTtcbiAgICAgKn1cbiAgICAgKiBgYGBcbiAgICAgKiBgYGBodG1sXG4gICAgICogPGlneC1zbGlkZXIgKG9uVmFsdWVDaGFuZ2UpPVwiY2hhbmdlKCRldmVudClcIiAjc2xpZGVyIFsobmdNb2RlbCldPVwidGFzay5wZXJjZW50Q29tcGxldGVkXCIgW3N0ZXBdPVwiNVwiPlxuICAgICAqIGBgYFxuICAgICAqL1xuICAgIEBPdXRwdXQoKVxuICAgIHB1YmxpYyBvblZhbHVlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxJU2xpZGVyVmFsdWVDaGFuZ2VFdmVudEFyZ3M+KCk7XG5cblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMiwgcHJpdmF0ZSBfZWw6IEVsZW1lbnRSZWYsIHByaXZhdGUgX2NkcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHsgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIEBIb3N0TGlzdGVuZXIoJ3BvaW50ZXJkb3duJywgWyckZXZlbnQnXSlcbiAgICBwdWJsaWMgb25Qb2ludGVyRG93bigkZXZlbnQpIHtcbiAgICAgICAgdGhpcy5maW5kQ2xvc2VzdFRodW1iKCRldmVudCk7XG5cbiAgICAgICAgaWYgKCF0aGlzLnRodW1iVG8uaXNBY3RpdmUgJiYgdGhpcy50aHVtYkZyb20gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgYWN0aXZlVGh1bWIgPSB0aGlzLnRodW1iVG8uaXNBY3RpdmUgPyB0aGlzLnRodW1iVG8gOiB0aGlzLnRodW1iRnJvbTtcbiAgICAgICAgYWN0aXZlVGh1bWIubmF0aXZlRWxlbWVudC5zZXRQb2ludGVyQ2FwdHVyZSgkZXZlbnQucG9pbnRlcklkKTtcbiAgICAgICAgdGhpcy5zaG93VGh1bWJzSW5kaWNhdG9ycygpO1xuXG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgQEhvc3RMaXN0ZW5lcigncG9pbnRlcnVwJywgWyckZXZlbnQnXSlcbiAgICBwdWJsaWMgb25Qb2ludGVyVXAoJGV2ZW50KSB7XG4gICAgICAgIGlmICghdGhpcy50aHVtYlRvLmlzQWN0aXZlICYmIHRoaXMudGh1bWJGcm9tID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaGlkZVRodW1ic0luZGljYXRvcnMoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgQEhvc3RMaXN0ZW5lcignZm9jdXMnKVxuICAgIHB1YmxpYyBvbkZvY3VzKCkge1xuICAgICAgICB0aGlzLnRvZ2dsZVRodW1iTGFiZWxzKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIEBIb3N0TGlzdGVuZXIoJ3BhbicsIFsnJGV2ZW50J10pXG4gICAgcHVibGljIG9uUGFuTGlzdGVuZXIoJGV2ZW50KSB7XG4gICAgICAgIHRoaXMudXBkYXRlKCRldmVudC5zcmNFdmVudC5jbGllbnRYKTtcbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKCdwYW5zdGFydCcpXG4gICAgcHVibGljIG9uUGFuU3RhcnQoKSB7XG4gICAgICAgIHRoaXMuc2hvd1RodW1ic0luZGljYXRvcnMoKTtcbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKCdwYW5lbmQnKVxuICAgIHB1YmxpYyBvblBhbkVuZCgpIHtcbiAgICAgICAgdGhpcy5oaWRlVGh1bWJzSW5kaWNhdG9ycygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBASG9zdExpc3RlbmVyKCd0YXAnLCBbJyRldmVudCddKVxuICAgIHB1YmxpYyBvblRhcExpc3RlbmVyKCRldmVudCkge1xuICAgICAgICB0aGlzLm9uVGFwKCRldmVudCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpSZXR1cm5zIHdoZXRoZXIgdGhlIGBJZ3hTbGlkZXJDb21wb25lbnRgIHR5cGUgaXMgUkFOR0UuXG4gICAgICpgYGB0eXBlc2NyaXB0XG4gICAgICpAVmlld0NoaWxkKFwic2xpZGVyXCIpXG4gICAgICpwdWJsaWMgc2xpZGVyOiBJZ3hTbGlkZXJDb21wb25lbnQ7XG4gICAgICpuZ0FmdGVyVmlld0luaXQoKXtcbiAgICAgKiAgICBsZXQgc2xpZGVyUmFuZ2UgPSB0aGlzLnNsaWRlci5pc1JhbmdlO1xuICAgICAqfVxuICAgICAqIGBgYFxuICAgICAqL1xuICAgIHB1YmxpYyBnZXQgaXNSYW5nZSgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudHlwZSA9PT0gU2xpZGVyVHlwZS5SQU5HRTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBsb3dlciB2YWx1ZSBvZiB0aGUgYElneFNsaWRlckNvbXBvbmVudGAuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIEBWaWV3Q2hpbGQoXCJzbGlkZXJcIilcbiAgICAgKiBwdWJsaWMgc2xpZGVyOiBJZ3hTbGlkZXJDb21wb25lbnQ7XG4gICAgICogcHVibGljIGxvd1ZhbHVlKGV2ZW50KXtcbiAgICAgKiAgICBsZXQgc2xpZGVyTG93VmFsdWUgPSB0aGlzLnNsaWRlci5sb3dlclZhbHVlO1xuICAgICAqfVxuICAgICAqYGBgXG4gICAgICovXG4gICAgcHVibGljIGdldCBsb3dlclZhbHVlKCk6IG51bWJlciB7XG4gICAgICAgIGlmICghTnVtYmVyLmlzTmFOKHRoaXMuX2xvd2VyVmFsdWUpICYmIHRoaXMuX2xvd2VyVmFsdWUgIT09IHVuZGVmaW5lZCAmJiB0aGlzLl9sb3dlclZhbHVlID49IHRoaXMubG93ZXJCb3VuZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2xvd2VyVmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5sb3dlckJvdW5kO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqU2V0cyB0aGUgbG93ZXIgdmFsdWUgb2YgdGhlIGBJZ3hTbGlkZXJDb21wb25lbnRgLlxuICAgICAqYGBgdHlwZXNjcmlwdFxuICAgICAqQFZpZXdDaGlsZChcInNsaWRlcjJcIilcbiAgICAgKnB1YmxpYyBzbGlkZXI6IElneFNsaWRlckNvbXBvbmVudDtcbiAgICAgKnB1YmxpYyBsb3dWYWx1ZShldmVudCl7XG4gICAgICogICAgdGhpcy5zbGlkZXIubG93ZXJWYWx1ZSA9IDEyMDtcbiAgICAgKn1cbiAgICAgKmBgYFxuICAgICAqL1xuICAgIHB1YmxpYyBzZXQgbG93ZXJWYWx1ZSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIHZhbHVlID0gdGhpcy52YWx1ZUluUmFuZ2UodmFsdWUsIHRoaXMubG93ZXJCb3VuZCwgdGhpcy51cHBlckJvdW5kKTtcbiAgICAgICAgdGhpcy5fbG93ZXJWYWx1ZSA9IHZhbHVlO1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpSZXR1cm5zIHRoZSB1cHBlciB2YWx1ZSBvZiB0aGUgYElneFNsaWRlckNvbXBvbmVudGAuXG4gICAgICpgYGB0eXBlc2NyaXB0XG4gICAgICpAVmlld0NoaWxkKFwic2xpZGVyMlwiKVxuICAgICAqcHVibGljIHNsaWRlcjogSWd4U2xpZGVyQ29tcG9uZW50O1xuICAgICAqcHVibGljIHVwcGVyVmFsdWUoZXZlbnQpe1xuICAgICAqICAgIGxldCB1cHBlclZhbHVlID0gdGhpcy5zbGlkZXIudXBwZXJWYWx1ZTtcbiAgICAgKn1cbiAgICAgKmBgYFxuICAgICAqL1xuICAgIHB1YmxpYyBnZXQgdXBwZXJWYWx1ZSgpIHtcbiAgICAgICAgaWYgKCFOdW1iZXIuaXNOYU4odGhpcy5fdXBwZXJWYWx1ZSkgJiYgdGhpcy5fdXBwZXJWYWx1ZSAhPT0gdW5kZWZpbmVkICYmIHRoaXMuX3VwcGVyVmFsdWUgPD0gdGhpcy51cHBlckJvdW5kKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdXBwZXJWYWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLnVwcGVyQm91bmQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpTZXRzIHRoZSB1cHBlciB2YWx1ZSBvZiB0aGUgYElneFNsaWRlckNvbXBvbmVudGAuXG4gICAgICpgYGB0eXBlc2NyaXB0XG4gICAgICpAVmlld0NoaWxkKFwic2xpZGVyMlwiKVxuICAgICAqcHVibGljIHNsaWRlcjogSWd4U2xpZGVyQ29tcG9uZW50O1xuICAgICAqcHVibGljIHVwcGVyVmFsdWUoZXZlbnQpe1xuICAgICAqICAgIHRoaXMuc2xpZGVyLnVwcGVyVmFsdWUgPSAxMjA7XG4gICAgICp9XG4gICAgICpgYGBcbiAgICAgKi9cbiAgICBwdWJsaWMgc2V0IHVwcGVyVmFsdWUodmFsdWU6IG51bWJlcikge1xuICAgICAgICB2YWx1ZSA9IHRoaXMudmFsdWVJblJhbmdlKHZhbHVlLCB0aGlzLmxvd2VyQm91bmQsIHRoaXMudXBwZXJCb3VuZCk7XG4gICAgICAgIHRoaXMuX3VwcGVyVmFsdWUgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSB2YWx1ZSBjb3JyZXNwb25kaW5nIHRoZSBsb3dlciBsYWJlbC5cbiAgICAgKmBgYHR5cGVzY3JpcHRcbiAgICAgKiBAVmlld0NoaWxkKFwic2xpZGVyXCIpXG4gICAgICogcHVibGljIHNsaWRlcjogSWd4U2xpZGVyQ29tcG9uZW50O1xuICAgICAqIGxldCBsYWJlbCA9IHRoaXMuc2xpZGVyLmxvd2VyTGFiZWw7XG4gICAgICpgYGBcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0IGxvd2VyTGFiZWwoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxhYmVsc1ZpZXdFbmFibGVkID9cbiAgICAgICAgICAgIHRoaXMubGFiZWxzW3RoaXMubG93ZXJWYWx1ZV0gOlxuICAgICAgICAgICAgdGhpcy5sb3dlclZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHZhbHVlIGNvcnJlc3BvbmRpbmcgdGhlIHVwcGVyIGxhYmVsLlxuICAgICAqYGBgdHlwZXNjcmlwdFxuICAgICAqIEBWaWV3Q2hpbGQoXCJzbGlkZXJcIilcbiAgICAgKiBwdWJsaWMgc2xpZGVyOiBJZ3hTbGlkZXJDb21wb25lbnQ7XG4gICAgICogbGV0IGxhYmVsID0gdGhpcy5zbGlkZXIudXBwZXJMYWJlbDtcbiAgICAgKmBgYFxuICAgICAqL1xuICAgIHB1YmxpYyBnZXQgdXBwZXJMYWJlbCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubGFiZWxzVmlld0VuYWJsZWQgP1xuICAgICAgICAgICAgdGhpcy5sYWJlbHNbdGhpcy51cHBlclZhbHVlXSA6XG4gICAgICAgICAgICB0aGlzLnVwcGVyVmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBpZiBsYWJlbCB2aWV3IGlzIGVuYWJsZWQuXG4gICAgICogSWYgdGhlIHtAbGluayBsYWJlbHN9IGlzIHNldCwgdGhlIHZpZXcgaXMgYXV0b21hdGljYWxseSBhY3RpdmF0ZWQuXG4gICAgICpgYGB0eXBlc2NyaXB0XG4gICAgICogQFZpZXdDaGlsZChcInNsaWRlclwiKVxuICAgICAqIHB1YmxpYyBzbGlkZXI6IElneFNsaWRlckNvbXBvbmVudDtcbiAgICAgKiBsZXQgbGFiZWxWaWV3ID0gdGhpcy5zbGlkZXIubGFiZWxzVmlld0VuYWJsZWQ7XG4gICAgICpgYGBcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0IGxhYmVsc1ZpZXdFbmFibGVkKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gISEodGhpcy5sYWJlbHMgJiYgdGhpcy5sYWJlbHMubGVuZ3RoID4gMSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5zbGlkZXJTZXR1cCgpO1xuXG4gICAgICAgIC8vIFNldCB0cmFjayB0cmF2ZWwgem9uZVxuICAgICAgICB0aGlzLl9wTWluID0gdGhpcy52YWx1ZVRvRnJhY3Rpb24odGhpcy5sb3dlckJvdW5kKSB8fCAwO1xuICAgICAgICB0aGlzLl9wTWF4ID0gdGhpcy52YWx1ZVRvRnJhY3Rpb24odGhpcy51cHBlckJvdW5kKSB8fCAxO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgICB0aGlzLl9oYXNWaWV3SW5pdCA9IHRydWU7XG4gICAgICAgIHRoaXMucG9zaXRpb25IYW5kbGVzQW5kVXBkYXRlVHJhY2soKTtcbiAgICAgICAgdGhpcy5zZXRUaWNrSW50ZXJ2YWwodGhpcy5sYWJlbHMpO1xuICAgICAgICB0aGlzLmNoYW5nZVRodW1iRm9jdXNhYmxlU3RhdGUodGhpcy5kaXNhYmxlZCk7XG5cbiAgICAgICAgdGhpcy5zdWJzY3JpYmVUbyh0aGlzLnRodW1iRnJvbSwgdGhpcy50aHVtYkNoYW5nZWQuYmluZCh0aGlzKSk7XG4gICAgICAgIHRoaXMuc3Vic2NyaWJlVG8odGhpcy50aHVtYlRvLCB0aGlzLnRodW1iQ2hhbmdlZC5iaW5kKHRoaXMpKTtcblxuICAgICAgICB0aGlzLnRodW1icy5jaGFuZ2VzLnBpcGUodGFrZVVudGlsKHRoaXMuX2Rlc3Ryb3llciQpKS5zdWJzY3JpYmUoY2hhbmdlID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHQgPSBjaGFuZ2UuZmluZCgodGh1bWI6IElneFNsaWRlclRodW1iQ29tcG9uZW50KSA9PiB0aHVtYi50eXBlID09PSBTbGlkZXJIYW5kbGUuRlJPTSk7XG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uSGFuZGxlKHQsIHRoaXMubG93ZXJWYWx1ZSk7XG4gICAgICAgICAgICB0aGlzLnN1YnNjcmliZVRvKHQsIHRoaXMudGh1bWJDaGFuZ2VkLmJpbmQodGhpcykpO1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VUaHVtYkZvY3VzYWJsZVN0YXRlKHRoaXMuZGlzYWJsZWQpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICAgICAgLy8gQ2FsY3VsYXRlcyB0aGUgZGlzdGFuY2UgYmV0d2VlbiBldmVyeSBzdGVwIGluIHBpeGVscy5cbiAgICAgICAgdGhpcy5zdGVwRGlzdGFuY2UgPSB0aGlzLmNhbGN1bGF0ZVN0ZXBEaXN0YW5jZSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuX2Rlc3Ryb3llciQubmV4dCh0cnVlKTtcbiAgICAgICAgdGhpcy5fZGVzdHJveWVyJC5jb21wbGV0ZSgpO1xuXG4gICAgICAgIHRoaXMuX2luZGljYXRvcnNEZXN0cm95ZXIkLm5leHQodHJ1ZSk7XG4gICAgICAgIHRoaXMuX2luZGljYXRvcnNEZXN0cm95ZXIkLmNvbXBsZXRlKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyB3cml0ZVZhbHVlKHZhbHVlOiBJUmFuZ2VTbGlkZXJWYWx1ZSB8IG51bWJlcik6IHZvaWQge1xuICAgICAgICBpZiAoIXZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm5vcm1hbGl6ZUJ5U3RlcCh2YWx1ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fb25DaGFuZ2VDYWxsYmFjayA9IGZuO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSk6IHZvaWQge1xuICAgICAgICB0aGlzLl9vblRvdWNoZWRDYWxsYmFjayA9IGZuO1xuICAgIH1cblxuICAgIC8qKiBAaGlkZGVuICovXG4gICAgcHVibGljIGdldEVkaXRFbGVtZW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pc1JhbmdlID8gdGhpcy50aHVtYkZyb20ubmF0aXZlRWxlbWVudCA6IHRoaXMudGh1bWJUby5uYXRpdmVFbGVtZW50O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyBvblRhcCgkZXZlbnQpIHtcbiAgICAgICAgdGhpcy51cGRhdGUoJGV2ZW50LnNyY0V2ZW50LmNsaWVudFgpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgdXBkYXRlKG1vdXNlWCkge1xuICAgICAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gVXBkYXRlIFRvL0Zyb20gVmFsdWVzXG4gICAgICAgIHRoaXMub25QYW4ubmV4dChtb3VzZVgpO1xuXG4gICAgICAgIC8vIEZpbmFsbHkgZG8gcG9zaXRpb25IYW5kbGVzQW5kVXBkYXRlVHJhY2sgdGhlIERPTVxuICAgICAgICAvLyBiYXNlZCBvbiBkYXRhIHZhbHVlc1xuICAgICAgICB0aGlzLnBvc2l0aW9uSGFuZGxlc0FuZFVwZGF0ZVRyYWNrKCk7XG4gICAgICAgIHRoaXMuX29uVG91Y2hlZENhbGxiYWNrKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyB0aHVtYkNoYW5nZWQodmFsdWU6IG51bWJlciwgdGh1bWJUeXBlOiBudW1iZXIpIHtcbiAgICAgICAgY29uc3Qgb2xkVmFsdWUgPSB0aGlzLnZhbHVlO1xuXG4gICAgICAgIGxldCBuZXdWYWw6IElSYW5nZVNsaWRlclZhbHVlO1xuICAgICAgICBpZiAodGhpcy5pc1JhbmdlKSB7XG4gICAgICAgICAgICBpZiAodGh1bWJUeXBlID09PSBTbGlkZXJIYW5kbGUuRlJPTSkge1xuICAgICAgICAgICAgICAgIG5ld1ZhbCA9IHtcbiAgICAgICAgICAgICAgICAgICAgbG93ZXI6ICh0aGlzLnZhbHVlIGFzIElSYW5nZVNsaWRlclZhbHVlKS5sb3dlciArIHZhbHVlLFxuICAgICAgICAgICAgICAgICAgICB1cHBlcjogKHRoaXMudmFsdWUgYXMgSVJhbmdlU2xpZGVyVmFsdWUpLnVwcGVyXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbmV3VmFsID0ge1xuICAgICAgICAgICAgICAgICAgICBsb3dlcjogKHRoaXMudmFsdWUgYXMgSVJhbmdlU2xpZGVyVmFsdWUpLmxvd2VyLFxuICAgICAgICAgICAgICAgICAgICB1cHBlcjogKHRoaXMudmFsdWUgYXMgSVJhbmdlU2xpZGVyVmFsdWUpLnVwcGVyICsgdmFsdWVcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBTd2FwIHRoZSB0aHVtYnMgaWYgYSBjb2xsaXNpb24gYXBwZWFycy5cbiAgICAgICAgICAgIGlmIChuZXdWYWwubG93ZXIgPj0gbmV3VmFsLnVwcGVyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy52YWx1ZSA9IHRoaXMuc3dhcFRodW1iKG5ld1ZhbCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMudmFsdWUgPSBuZXdWYWw7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSB0aGlzLnZhbHVlIGFzIG51bWJlciArIHZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuaGFzVmFsdWVDaGFuZ2VkKG9sZFZhbHVlKSkge1xuICAgICAgICAgICAgdGhpcy5lbWl0VmFsdWVDaGFuZ2VkKG9sZFZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgb25UaHVtYkNoYW5nZSgpIHtcbiAgICAgICAgdGhpcy50b2dnbGVUaHVtYkxhYmVscygpO1xuICAgIH1cblxuICAgIHB1YmxpYyBvbkhvdmVyQ2hhbmdlKHN0YXRlOiBib29sZWFuKSB7XG4gICAgICAgIHJldHVybiBzdGF0ZSA/IHRoaXMuc2hvd1RodW1ic0luZGljYXRvcnMoKSA6IHRoaXMuaGlkZVRodW1ic0luZGljYXRvcnMoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHN3YXBUaHVtYih2YWx1ZTogSVJhbmdlU2xpZGVyVmFsdWUpIHtcbiAgICAgICAgaWYgKHRoaXMudGh1bWJGcm9tLmlzQWN0aXZlKSB7XG4gICAgICAgICAgICB2YWx1ZS51cHBlciA9IHRoaXMudXBwZXJWYWx1ZTtcbiAgICAgICAgICAgIHZhbHVlLmxvd2VyID0gdGhpcy51cHBlclZhbHVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFsdWUudXBwZXIgPSB0aGlzLmxvd2VyVmFsdWU7XG4gICAgICAgICAgICB2YWx1ZS5sb3dlciA9IHRoaXMubG93ZXJWYWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudG9nZ2xlVGh1bWIoKTtcblxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBmaW5kQ2xvc2VzdFRodW1iKGV2ZW50KSB7XG4gICAgICAgIGlmICh0aGlzLmlzUmFuZ2UpIHtcbiAgICAgICAgICAgIHRoaXMuY2xvc2VzdEhhbmRsZShldmVudC5jbGllbnRYKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudGh1bWJUby5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnVwZGF0ZShldmVudC5jbGllbnRYKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHVwZGF0ZUxvd2VyQm91bmRBbmRNaW5UcmF2ZWxab25lKCkge1xuICAgICAgICB0aGlzLmxvd2VyQm91bmQgPSB0aGlzLm1pblZhbHVlO1xuICAgICAgICB0aGlzLl9wTWluID0gMDtcbiAgICB9XG5cbiAgICBwcml2YXRlIHVwZGF0ZVVwcGVyQm91bmRBbmRNYXhUcmF2ZWxab25lKCkge1xuICAgICAgICB0aGlzLnVwcGVyQm91bmQgPSB0aGlzLm1heFZhbHVlO1xuICAgICAgICB0aGlzLl9wTWF4ID0gMTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHNsaWRlclNldHVwKCkge1xuICAgICAgICAvKipcbiAgICAgICAgICogaWYge0BsaW5rIFNsaWRlclR5cGUuU0xJREVSfSB0aGFuIHRoZSBpbml0aWFsIHZhbHVlIHNob2xkIGJlIHRoZSBsb3dlc3Qgb25lLlxuICAgICAgICAgKi9cbiAgICAgICAgaWYgKCF0aGlzLmlzUmFuZ2UgJiYgdGhpcy52YWx1ZSA9PT0gdGhpcy51cHBlckJvdW5kKSB7XG4gICAgICAgICAgICB0aGlzLnZhbHVlID0gdGhpcy5sb3dlckJvdW5kO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjYWxjdWxhdGVTdGVwRGlzdGFuY2UoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9lbC5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoIC8gKHRoaXMubWF4VmFsdWUgLSB0aGlzLm1pblZhbHVlKSAqIHRoaXMuc3RlcDtcbiAgICB9XG5cbiAgICBwcml2YXRlIHRvZ2dsZVRodW1iKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50aHVtYkZyb20uaXNBY3RpdmUgP1xuICAgICAgICAgICAgdGhpcy50aHVtYlRvLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKSA6XG4gICAgICAgICAgICB0aGlzLnRodW1iRnJvbS5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB2YWx1ZUluUmFuZ2UodmFsdWUsIG1pbiA9IDAsIG1heCA9IDEwMCkge1xuICAgICAgICByZXR1cm4gTWF0aC5tYXgoTWF0aC5taW4odmFsdWUsIG1heCksIG1pbik7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZW5lcmF0ZVRpY2tNYXJrcyhjb2xvcjogc3RyaW5nLCBpbnRlcnZhbDogbnVtYmVyKSB7XG4gICAgICAgIHJldHVybiBpbnRlcnZhbCAhPT0gbnVsbCA/IGByZXBlYXRpbmctbGluZWFyLWdyYWRpZW50KFxuICAgICAgICAgICAgJHsndG8gbGVmdCd9LFxuICAgICAgICAgICAgJHtjb2xvcn0sXG4gICAgICAgICAgICAke2NvbG9yfSAxLjVweCxcbiAgICAgICAgICAgIHRyYW5zcGFyZW50IDEuNXB4LFxuICAgICAgICAgICAgdHJhbnNwYXJlbnQgJHtpbnRlcnZhbH0lXG4gICAgICAgICksIHJlcGVhdGluZy1saW5lYXItZ3JhZGllbnQoXG4gICAgICAgICAgICAkeyd0byByaWdodCd9LFxuICAgICAgICAgICAgJHtjb2xvcn0sXG4gICAgICAgICAgICAke2NvbG9yfSAxLjVweCxcbiAgICAgICAgICAgIHRyYW5zcGFyZW50IDEuNXB4LFxuICAgICAgICAgICAgdHJhbnNwYXJlbnQgJHtpbnRlcnZhbH0lXG4gICAgICAgIClgIDogaW50ZXJ2YWw7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBwb3NpdGlvbkhhbmRsZShoYW5kbGU6IEVsZW1lbnRSZWYsIHBvc2l0aW9uOiBudW1iZXIpIHtcbiAgICAgICAgaWYgKCFoYW5kbGUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGhhbmRsZS5uYXRpdmVFbGVtZW50LnN0eWxlLmxlZnQgPSBgJHt0aGlzLnZhbHVlVG9GcmFjdGlvbihwb3NpdGlvbikgKiAxMDB9JWA7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBwb3NpdGlvbkhhbmRsZXNBbmRVcGRhdGVUcmFjaygpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzUmFuZ2UpIHtcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb25IYW5kbGUodGhpcy50aHVtYlRvLCB0aGlzLnZhbHVlIGFzIG51bWJlcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uSGFuZGxlKHRoaXMudGh1bWJUbywgKHRoaXMudmFsdWUgYXMgSVJhbmdlU2xpZGVyVmFsdWUpLnVwcGVyKTtcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb25IYW5kbGUodGhpcy50aHVtYkZyb20sICh0aGlzLnZhbHVlIGFzIElSYW5nZVNsaWRlclZhbHVlKS5sb3dlcik7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnVwZGF0ZVRyYWNrKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjbG9zZXN0SGFuZGxlKG1vdXNlWCkge1xuICAgICAgICBjb25zdCBmcm9tT2Zmc2V0ID0gdGhpcy50aHVtYkZyb20ubmF0aXZlRWxlbWVudC5vZmZzZXRMZWZ0ICsgdGhpcy50aHVtYkZyb20ubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aCAvIDI7XG4gICAgICAgIGNvbnN0IHRvT2Zmc2V0ID0gdGhpcy50aHVtYlRvLm5hdGl2ZUVsZW1lbnQub2Zmc2V0TGVmdCArIHRoaXMudGh1bWJUby5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoIC8gMjtcbiAgICAgICAgY29uc3QgeFBvaW50ZXIgPSBtb3VzZVggLSB0aGlzLl9lbC5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQ7XG4gICAgICAgIGNvbnN0IG1hdGNoID0gdGhpcy5jbG9zZXN0VG8oeFBvaW50ZXIsIFtmcm9tT2Zmc2V0LCB0b09mZnNldF0pO1xuXG4gICAgICAgIGlmIChtYXRjaCA9PT0gZnJvbU9mZnNldCkge1xuICAgICAgICAgICAgdGhpcy50aHVtYkZyb20ubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgICAgICB9IGVsc2UgaWYgKG1hdGNoID09PSB0b09mZnNldCkge1xuICAgICAgICAgICAgdGhpcy50aHVtYlRvLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgc2V0VGlja0ludGVydmFsKGxhYmVscykge1xuICAgICAgICBsZXQgaW50ZXJ2YWw7XG4gICAgICAgIGNvbnN0IHRyYWNrUHJvZ3Jlc3MgPSAxMDA7XG4gICAgICAgIGlmICh0aGlzLmxhYmVsc1ZpZXdFbmFibGVkKSB7XG4gICAgICAgICAgICAvLyBDYWxjIHRpY2tzIGRlcGVuZGluZyBvbiB0aGUgbGFiZWxzIGxlbmd0aDtcbiAgICAgICAgICAgIGludGVydmFsID0gKCh0cmFja1Byb2dyZXNzIC8gKHRoaXMubGFiZWxzLmxlbmd0aCAtIDEpICogMTApKSAvIDEwO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgdHJhY2tSYW5nZSA9IHRoaXMubWF4VmFsdWUgLSB0aGlzLm1pblZhbHVlO1xuICAgICAgICAgICAgaW50ZXJ2YWwgPSB0aGlzLnN0ZXAgPiAxID9cbiAgICAgICAgICAgICAgICAodHJhY2tQcm9ncmVzcyAvICgodHJhY2tSYW5nZSAvIHRoaXMuc3RlcCkpICogMTApIC8gMTBcbiAgICAgICAgICAgICAgICA6IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCByZW5kZXJDYWxsYmFja0V4ZWN1dGlvbiA9ICF0aGlzLmNvbnRpbnVvdXMgPyB0aGlzLmdlbmVyYXRlVGlja01hcmtzKCd3aGl0ZScsIGludGVydmFsKSA6IG51bGw7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy50aWNrcy5uYXRpdmVFbGVtZW50LCAnYmFja2dyb3VuZCcsIHJlbmRlckNhbGxiYWNrRXhlY3V0aW9uKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHNob3dUaHVtYnNJbmRpY2F0b3JzKCkge1xuICAgICAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuX2luZGljYXRvcnNUaW1lcikge1xuICAgICAgICAgICAgdGhpcy5faW5kaWNhdG9yc0Rlc3Ryb3llciQubmV4dCh0cnVlKTtcbiAgICAgICAgICAgIHRoaXMuX2luZGljYXRvcnNUaW1lciA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnRodW1iVG8uc2hvd1RodW1iSW5kaWNhdG9ycygpO1xuICAgICAgICBpZiAodGhpcy50aHVtYkZyb20pIHtcbiAgICAgICAgICAgIHRoaXMudGh1bWJGcm9tLnNob3dUaHVtYkluZGljYXRvcnMoKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBoaWRlVGh1bWJzSW5kaWNhdG9ycygpIHtcbiAgICAgICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2luZGljYXRvcnNUaW1lciA9IHRpbWVyKHRoaXMudGh1bWJMYWJlbFZpc2liaWxpdHlEdXJhdGlvbik7XG4gICAgICAgIHRoaXMuX2luZGljYXRvcnNUaW1lci5waXBlKHRha2VVbnRpbCh0aGlzLl9pbmRpY2F0b3JzRGVzdHJveWVyJCkpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnRodW1iVG8uaGlkZVRodW1iSW5kaWNhdG9ycygpO1xuICAgICAgICAgICAgaWYgKHRoaXMudGh1bWJGcm9tKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50aHVtYkZyb20uaGlkZVRodW1iSW5kaWNhdG9ycygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHRvZ2dsZVRodW1iTGFiZWxzKCkge1xuICAgICAgICB0aGlzLnNob3dUaHVtYnNJbmRpY2F0b3JzKCk7XG4gICAgICAgIHRoaXMuaGlkZVRodW1ic0luZGljYXRvcnMoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGNoYW5nZVRodW1iRm9jdXNhYmxlU3RhdGUoc3RhdGU6IGJvb2xlYW4pIHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBzdGF0ZSA/IC0xIDogMTtcblxuICAgICAgICBpZiAodGhpcy5pc1JhbmdlKSB7XG4gICAgICAgICAgICB0aGlzLnRodW1iRnJvbS50YWJpbmRleCA9IHZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy50aHVtYlRvLnRhYmluZGV4ID0gdmFsdWU7XG5cbiAgICAgICAgdGhpcy5fY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGNsb3Nlc3RUbyhnb2FsOiBudW1iZXIsIHBvc2l0aW9uczogbnVtYmVyW10pOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gcG9zaXRpb25zLnJlZHVjZSgocHJldmlvdXMsIGN1cnJlbnQpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoTWF0aC5hYnMoZ29hbCAtIGN1cnJlbnQpIDwgTWF0aC5hYnMoZ29hbCAtIHByZXZpb3VzKSA/IGN1cnJlbnQgOiBwcmV2aW91cyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgdmFsdWVUb0ZyYWN0aW9uKHZhbHVlOiBudW1iZXIsIHBNaW4gPSB0aGlzLl9wTWluLCBwTWF4ID0gdGhpcy5fcE1heCkge1xuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZUluUmFuZ2UoKHZhbHVlIC0gdGhpcy5taW5WYWx1ZSkgLyAodGhpcy5tYXhWYWx1ZSAtIHRoaXMubWluVmFsdWUpLCBwTWluLCBwTWF4KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICogTm9ybWFsaXrQtSB0aGUgdmFsdWUgd2hlbiB0d28td2F5IGRhdGEgYmluZCBpcyB1c2VkIGFuZCB7QGxpbmsgdGhpcy5zdGVwfSBpcyBzZXQuXG4gICAgICogQHBhcmFtIHZhbHVlXG4gICAgICovXG4gICAgcHJpdmF0ZSBub3JtYWxpemVCeVN0ZXAodmFsdWU6IElSYW5nZVNsaWRlclZhbHVlIHwgbnVtYmVyKSB7XG4gICAgICAgIGlmICh0aGlzLmlzUmFuZ2UpIHtcbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSAge1xuICAgICAgICAgICAgICAgIGxvd2VyOiAodmFsdWUgYXMgSVJhbmdlU2xpZGVyVmFsdWUpLmxvd2VyIC0gKCh2YWx1ZSBhcyBJUmFuZ2VTbGlkZXJWYWx1ZSkubG93ZXIgJSB0aGlzLnN0ZXApLFxuICAgICAgICAgICAgICAgIHVwcGVyOiAodmFsdWUgYXMgSVJhbmdlU2xpZGVyVmFsdWUpLnVwcGVyIC0gKCh2YWx1ZSBhcyBJUmFuZ2VTbGlkZXJWYWx1ZSkudXBwZXIgJSB0aGlzLnN0ZXApXG4gICAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy52YWx1ZSA9ICh2YWx1ZSBhcyBudW1iZXIpIC0gKCh2YWx1ZSBhcyBudW1iZXIpICUgdGhpcy5zdGVwKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgdXBkYXRlVHJhY2soKSB7XG4gICAgICAgIGNvbnN0IGZyb21Qb3NpdGlvbiA9IHRoaXMudmFsdWVUb0ZyYWN0aW9uKHRoaXMubG93ZXJWYWx1ZSk7XG4gICAgICAgIGNvbnN0IHRvUG9zaXRpb24gPSB0aGlzLnZhbHVlVG9GcmFjdGlvbih0aGlzLnVwcGVyVmFsdWUpO1xuICAgICAgICBjb25zdCBwb3NpdGlvbkdhcCA9IHRvUG9zaXRpb24gLSBmcm9tUG9zaXRpb247XG5cbiAgICAgICAgbGV0IHRyYWNrTGVmdEluZGVudGlvbiA9IGZyb21Qb3NpdGlvbjtcbiAgICAgICAgaWYgKHRoaXMuaXNSYW5nZSkge1xuICAgICAgICAgICAgaWYgKHBvc2l0aW9uR2FwKSB7XG4gICAgICAgICAgICAgICAgdHJhY2tMZWZ0SW5kZW50aW9uID0gTWF0aC5yb3VuZCgoMSAvIHBvc2l0aW9uR2FwICogZnJvbVBvc2l0aW9uKSAqIDEwMCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy50cmFjay5uYXRpdmVFbGVtZW50LCAndHJhbnNmb3JtJywgYHNjYWxlWCgke3Bvc2l0aW9uR2FwfSkgdHJhbnNsYXRlWCgke3RyYWNrTGVmdEluZGVudGlvbn0lKWApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLnRyYWNrLm5hdGl2ZUVsZW1lbnQsICd0cmFuc2Zvcm0nLCBgc2NhbGVYKCR7dG9Qb3NpdGlvbn0pYCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIHZhbGlkYXRlSW5pdGlhbFZhbHVlKHZhbHVlOiBJUmFuZ2VTbGlkZXJWYWx1ZSkge1xuICAgICAgICBpZiAodmFsdWUubG93ZXIgPCB0aGlzLmxvd2VyQm91bmQgJiYgdmFsdWUudXBwZXIgPCB0aGlzLmxvd2VyQm91bmQpIHtcbiAgICAgICAgICAgIHZhbHVlLnVwcGVyID0gdGhpcy5sb3dlckJvdW5kO1xuICAgICAgICAgICAgdmFsdWUubG93ZXIgPSB0aGlzLmxvd2VyQm91bmQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodmFsdWUubG93ZXIgPiB0aGlzLnVwcGVyQm91bmQgJiYgdmFsdWUudXBwZXIgPiB0aGlzLnVwcGVyQm91bmQpIHtcbiAgICAgICAgICAgIHZhbHVlLnVwcGVyID0gdGhpcy51cHBlckJvdW5kO1xuICAgICAgICAgICAgdmFsdWUubG93ZXIgPSB0aGlzLnVwcGVyQm91bmQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodmFsdWUudXBwZXIgPCB2YWx1ZS5sb3dlcikge1xuICAgICAgICAgICAgdmFsdWUudXBwZXIgPSB0aGlzLnVwcGVyVmFsdWU7XG4gICAgICAgICAgICB2YWx1ZS5sb3dlciA9IHRoaXMubG93ZXJWYWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHN1YnNjcmliZVRvKHRodW1iOiBJZ3hTbGlkZXJUaHVtYkNvbXBvbmVudCwgY2FsbGJhY2s6IChhOiBudW1iZXIsIGI6IG51bWJlcikgPT4gdm9pZCkge1xuICAgICAgICBpZiAoIXRodW1iKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aHVtYi5vblRodW1iVmFsdWVDaGFuZ2VcbiAgICAgICAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlcih0aHVtYikpKVxuICAgICAgICAgICAgLnN1YnNjcmliZSh2YWx1ZSA9PiBjYWxsYmFjayh2YWx1ZSwgdGh1bWIudHlwZSkpO1xuICAgIH1cblxuICAgIHByaXZhdGUgdW5zdWJzY3JpYmVyKHRodW1iOiBJZ3hTbGlkZXJUaHVtYkNvbXBvbmVudCkge1xuICAgICAgICByZXR1cm4gbWVyZ2UodGhpcy5fZGVzdHJveWVyJCwgdGh1bWIuZGVzdHJveSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBoYXNWYWx1ZUNoYW5nZWQob2xkVmFsdWUpIHtcbiAgICAgICAgY29uc3QgaXNTbGlkZXJXaXRoRGlmZmVyZW50VmFsdWU6IGJvb2xlYW4gPSAhdGhpcy5pc1JhbmdlICYmIG9sZFZhbHVlICE9PSB0aGlzLnZhbHVlO1xuICAgICAgICBjb25zdCBpc1JhbmdlV2l0aE9uZURpZmZlcmVudFZhbHVlOiBib29sZWFuID0gdGhpcy5pc1JhbmdlICYmXG4gICAgICAgICAgICAoKG9sZFZhbHVlIGFzIElSYW5nZVNsaWRlclZhbHVlKS5sb3dlciAhPT0gKHRoaXMudmFsdWUgYXMgSVJhbmdlU2xpZGVyVmFsdWUpLmxvd2VyIHx8XG4gICAgICAgICAgICAgICAgKG9sZFZhbHVlIGFzIElSYW5nZVNsaWRlclZhbHVlKS51cHBlciAhPT0gKHRoaXMudmFsdWUgYXMgSVJhbmdlU2xpZGVyVmFsdWUpLnVwcGVyKTtcblxuICAgICAgICByZXR1cm4gaXNTbGlkZXJXaXRoRGlmZmVyZW50VmFsdWUgfHwgaXNSYW5nZVdpdGhPbmVEaWZmZXJlbnRWYWx1ZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGVtaXRWYWx1ZUNoYW5nZWQob2xkVmFsdWU6IG51bWJlciB8IElSYW5nZVNsaWRlclZhbHVlKSB7XG4gICAgICAgIHRoaXMub25WYWx1ZUNoYW5nZS5lbWl0KHsgb2xkVmFsdWUsIHZhbHVlOiB0aGlzLnZhbHVlIH0pO1xuICAgIH1cbn1cblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbkBOZ01vZHVsZSh7XG4gICAgZGVjbGFyYXRpb25zOiBbSWd4U2xpZGVyQ29tcG9uZW50LCBJZ3hUaHVtYkZyb21UZW1wbGF0ZURpcmVjdGl2ZSwgSWd4VGh1bWJUb1RlbXBsYXRlRGlyZWN0aXZlLCBJZ3hTbGlkZXJUaHVtYkNvbXBvbmVudF0sXG4gICAgZXhwb3J0czogW0lneFNsaWRlckNvbXBvbmVudCwgSWd4VGh1bWJGcm9tVGVtcGxhdGVEaXJlY3RpdmUsIElneFRodW1iVG9UZW1wbGF0ZURpcmVjdGl2ZSwgSWd4U2xpZGVyVGh1bWJDb21wb25lbnRdLFxuICAgIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIElneFNsaWRlck1vZHVsZSB7XG59XG4iXX0=