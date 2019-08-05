/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { Component, ElementRef, EventEmitter, HostBinding, Input, NgModule, Output, Renderer2, ViewChild, ContentChild } from '@angular/core';
import { IgxProcessBarTextTemplateDirective } from './progressbar.common';
/** @type {?} */
const ONE_PERCENT = 0.01;
/** @type {?} */
const MIN_VALUE = 0;
/** @enum {string} */
const IgxTextAlign = {
    START: 'start',
    CENTER: 'center',
    END: 'end',
};
export { IgxTextAlign };
/** @enum {string} */
const IgxProgressType = {
    DANGER: 'danger',
    INFO: 'info',
    WARNING: 'warning',
    SUCCESS: 'success',
};
export { IgxProgressType };
/**
 * @record
 */
export function IChangeProgressEventArgs() { }
if (false) {
    /** @type {?} */
    IChangeProgressEventArgs.prototype.previousValue;
    /** @type {?} */
    IChangeProgressEventArgs.prototype.currentValue;
}
/**
 * @abstract
 */
export class BaseProgress {
    constructor() {
        /**
         * @hidden
         */
        this.requestAnimationId = undefined;
        /**
         * @hidden
         */
        this._valueInPercent = MIN_VALUE;
        /**
         * @hidden
         */
        this._max = 100;
        /**
         * @hidden
         */
        this._value = MIN_VALUE;
        /**
         * @hidden
         */
        this._animate = true;
    }
    /**
     * Returns the `IgxLinearProgressBarComponent`/`IgxCircularProgressBarComponent` value in percentage.
     * ```typescript
     * \@ViewChild("MyProgressBar")
     * public progressBar: IgxLinearProgressBarComponent; // IgxCircularProgressBarComponent
     * public valuePercent(event){
     *    let percentValue = this.progressBar.valueInPercent;
     *    alert(percentValue);
     * }
     * ```
     * @return {?}
     */
    get valueInPercent() {
        return this._valueInPercent;
    }
    /**
     * Sets the `IgxLinearProgressBarComponent`/`IgxCircularProgressBarComponent` value in percentage.
     * ```typescript
     * \@ViewChild("MyProgressBar")
     * public progressBar: IgxLinearProgressBarComponent; // IgxCircularProgressBarComponent
     *    public setValue(event){
     *    this.progressBar.valueInPercent = 56;
     * }
     * //...
     * ```
     * ```html
     * <button igxButton="fab" igxRipple="" (click)="setValue()">setValue</button>
     * ```
     * @param {?} value
     * @return {?}
     */
    set valueInPercent(value) {
        this._valueInPercent = value;
    }
    /**
     * @hidden
     * @protected
     * @param {?} val
     * @param {?} step
     * @return {?}
     */
    runAnimation(val, step) {
        this.requestAnimationId = requestAnimationFrame(() => this.updateProgressSmoothly.call(this, val, step));
    }
    /**
     * @hidden
     * @protected
     * @param {?} val
     * @param {?} step
     * @return {?}
     */
    updateProgressSmoothly(val, step) {
        this._value += step;
        /** @type {?} */
        const passedValue = convertInPercentage(val, this._max);
        /** @type {?} */
        const progressValue = convertInPercentage(this._value, this._max);
        if (this.valueInPercent === passedValue) {
            this.updateProgress(val);
            cancelAnimationFrame(this.requestAnimationId);
        }
        else if (this.isInLimitRange(progressValue, passedValue, step)) {
            this.updateProgress(val);
            cancelAnimationFrame(this.requestAnimationId);
        }
        else {
            this.valueInPercent = progressValue;
            this.requestAnimationId = requestAnimationFrame(() => this.updateProgressSmoothly.call(this, val, step));
        }
    }
    /**
     * @hidden
     * @protected
     * @param {?} val
     * @return {?}
     */
    updateProgressDirectly(val) {
        this._value = val;
        this.valueInPercent = convertInPercentage(this._value, this._max);
    }
    /**
     * @hidden
     * @protected
     * @param {?} currentValue
     * @param {?} prevValue
     * @param {?} step
     * @return {?}
     */
    directionFlow(currentValue, prevValue, step) {
        if (currentValue < prevValue) {
            return step;
        }
        return -step;
    }
    /**
     * @hidden
     * @private
     * @param {?} val
     * @param {?} comparator
     * @param {?} step
     * @return {?}
     */
    isInLimitRange(val, comparator, step) {
        return this.isExceedingUpperLimit(val, comparator, step) || this.isExceedingLowerLimit(val, comparator, step);
    }
    /**
     * @hidden
     *
     *
     * @private
     * @param {?} val
     * @param {?} comparator
     * @param {?} step
     * @return {?}
     */
    isExceedingUpperLimit(val, comparator, step) {
        return val > comparator && step > 0;
    }
    /**
     * @hidden
     *
     * @private
     * @param {?} val
     * @param {?} comparator
     * @param {?} step
     * @return {?}
     */
    isExceedingLowerLimit(val, comparator, step) {
        return val < comparator && step < 0;
    }
    /**
     * @hidden
     * @private
     * @param {?} val
     * @return {?}
     */
    updateProgress(val) {
        this._value = val;
        this.valueInPercent = convertInPercentage(this._value, this._max);
    }
}
if (false) {
    /**
     * @hidden
     * @type {?}
     * @private
     */
    BaseProgress.prototype.requestAnimationId;
    /**
     * @hidden
     * @type {?}
     * @protected
     */
    BaseProgress.prototype._valueInPercent;
    /**
     * @hidden
     * @type {?}
     * @protected
     */
    BaseProgress.prototype._max;
    /**
     * @hidden
     * @type {?}
     * @protected
     */
    BaseProgress.prototype._value;
    /**
     * @hidden
     * @type {?}
     * @protected
     */
    BaseProgress.prototype._animate;
    /**
     * @hidden
     * @type {?}
     * @protected
     */
    BaseProgress.prototype._step;
}
/** @type {?} */
let NEXT_LINEAR_ID = 0;
/** @type {?} */
let NEXT_CIRCULAR_ID = 0;
export class IgxLinearProgressBarComponent extends BaseProgress {
    constructor() {
        super();
        this.valueMin = 0;
        this.cssClass = 'igx-linear-bar';
        /**
         * Set `IgxLinearProgressBarComponent` to have striped style. By default it is set to false.
         * ```html
         * <igx-linear-bar [striped]="true" [max]="200" [value]="50"></igx-linear-bar>
         * ```
         */
        this.striped = false;
        /**
         * Set `IgxLinearProgressBarComponent` to have indeterminate. By default it is set to false.
         * ```html
         * <igx-linear-bar [indeterminate]="true"></igx-linear-bar>
         * ```
         */
        this.indeterminate = false;
        /**
         * An \@Input property that sets the value of the `role` attribute. If not provided it will be automatically set to `progressbar`.
         * ```html
         * <igx-linear-bar role="progressbar"></igx-linear-bar>
         * ```
         */
        this.role = 'progressbar';
        /**
         * An \@Input property that sets the value of `id` attribute. If not provided it will be automatically generated.
         * ```html
         * <igx-linear-bar [id]="'igx-linear-bar-55'" [striped]="true" [max]="200" [value]="50"></igx-linear-bar>
         * ```
         */
        this.id = `igx-linear-bar-${NEXT_LINEAR_ID++}`;
        /**
         * Set the position that defines where the text is aligned.
         * Possible options - `IgxTextAlign.START` (default), `IgxTextAlign.CENTER`, `IgxTextAlign.END`.
         * ```typescript
         * public positionCenter: IgxTextAlign;
         * public ngOnInit() {
         *    this.positionCenter = IgxTextAlign.CENTER;
         * }
         * //...
         * ```
         * ```html
         * <igx-linear-bar type="warning" [text]="'Custom text'" [textAlign]="positionCenter" [striped]="true"></igx-linear-bar>
         * ```
         */
        this.textAlign = IgxTextAlign.START;
        /**
         * Set the text to be visible. By default it is set to true.
         * ```html
         * <igx-linear-bar type="default" [textVisibility]="false"></igx-linear-bar>
         * ```
         */
        this.textVisibility = true;
        /**
         * Set the position that defines if the text should be aligned above the progress line. By default is set to false.
         * ```html
         * <igx-linear-bar type="danger" [textTop]="true"></igx-linear-bar>
         * ```
         */
        this.textTop = false;
        /**
         * Set type of the `IgxLinearProgressBarComponent`. Possible options - `default`, `success`, `info`, `warning`, and `danger`.
         * ```html
         * <igx-linear-bar [striped]="false" [max]="100" [value]="0" type="danger"></igx-linear-bar>
         * ```
         */
        this.type = 'default';
        /**
         * An event, which is triggered after a progress is changed.
         * ```typescript
         * public progressChange(event) {
         *    alert("Progress made!");
         * }
         * //...
         * ```
         * ```html
         * <igx-linear-bar (onProgressChanged)="progressChange($event)" type="success">
         * ```
         */
        this.onProgressChanged = new EventEmitter();
    }
    /**
     * Animation on progress `IgxLinearProgressBarComponent`. By default it is set to true.
     * ```html
     * <igx-linear-bar [animate]="false" [striped]="true" [max]="200" [value]="50"></igx-linear-bar>
     * ```
     * @param {?} animate
     * @return {?}
     */
    set animate(animate) {
        this._animate = animate;
    }
    /**
     * Returns whether the `IgxLinearProgressBarComponent` has animation true/false.
     * ```typescript
     * \@ViewChild("MyProgressBar")
     * public progressBar: IgxLinearProgressBarComponent;
     * public animationStatus(event) {
     *    let animationStatus = this.progressBar.animate;
     *    alert(animationStatus);
     * }
     * ```
     * @return {?}
     */
    get animate() {
        return this._animate;
    }
    /**
     * Set maximum value that can be passed. By default it is set to 100.
     * ```html
     * <igx-linear-bar [striped]="false" [max]="200" [value]="0"></igx-linear-bar>
     * ```
     * @param {?} maxNum
     * @return {?}
     */
    set max(maxNum) {
        this._max = maxNum;
    }
    /**
     * Returns the the maximum progress value of the `IgxLinearProgressBarComponent`.
     * ```typescript
     * \@ViewChild("MyProgressBar")
     * public progressBar: IgxLinearProgressBarComponent;
     * public maxValue(event) {
     *    let max = this.progressBar.max;
     *    alert(max);
     * }
     * ```
     * @return {?}
     */
    get max() {
        return this._max;
    }
    /**
     * Returns the value which update the progress indicator of the `IgxLinearProgressBarComponent`.
     * ```typescript
     * \@ViewChild("MyProgressBar")
     * public progressBar: IgxLinearProgressBarComponent;
     * public stepValue(event) {
     *    let step = this.progressBar.step;
     *    alert(step);
     * }
     * ```
     * @return {?}
     */
    get step() {
        if (this._step) {
            return this._step;
        }
        return this._max * ONE_PERCENT;
    }
    /**
     * Sets the value by which progress indicator is updated. By default it is 1% of the maximum value.
     * ```html
     * <igx-linear-bar [striped]="false" [max]="200" [value]="0" [step]="1"></igx-linear-bar>
     * ```
     * @param {?} val
     * @return {?}
     */
    set step(val) {
        this._step = Number(val);
    }
    /**
     * Returns value that indicates the current `IgxLinearProgressBarComponent` position.
     * ```typescript
     * \@ViewChild("MyProgressBar")
     * public progressBar: IgxLinearProgressBarComponent;
     * public getValue(event) {
     *    let value = this.progressBar.value;
     *    alert(value);
     * }
     * ```
     * @return {?}
     */
    get value() {
        return this._value;
    }
    /**
     * Set value that indicates the current `IgxLinearProgressBarComponent` position.
     * ```html
     * <igx-linear-bar [striped]="false" [max]="200" [value]="50"></igx-linear-bar>
     * ```
     * @param {?} val
     * @return {?}
     */
    set value(val) {
        val = Number(val);
        if (this._value === val || this.indeterminate) {
            return;
        }
        /** @type {?} */
        const valueInRange = getValueInProperRange(val, this.max);
        if (isNaN(valueInRange)) {
            return;
        }
        /** @type {?} */
        const changedValues = {
            currentValue: valueInRange,
            previousValue: this._value
        };
        /** @type {?} */
        const updateValue = super.directionFlow(this._value, val, this.step);
        if (this._animate && val >= this.step) {
            super.runAnimation(valueInRange, updateValue);
        }
        else {
            super.updateProgressDirectly(valueInRange);
        }
        this.onProgressChanged.emit(changedValues);
    }
    /**
     * @hidden
     * @return {?}
     */
    get danger() {
        return this.type === IgxProgressType.DANGER;
    }
    /**
     * @hidden
     * @return {?}
     */
    get info() {
        return this.type === IgxProgressType.INFO;
    }
    /**
     * @hidden
     * @return {?}
     */
    get warning() {
        return this.type === IgxProgressType.WARNING;
    }
    /**
     * @hidden
     * @return {?}
     */
    get success() {
        return this.type === IgxProgressType.SUCCESS;
    }
}
IgxLinearProgressBarComponent.decorators = [
    { type: Component, args: [{
                selector: 'igx-linear-bar',
                template: "<div class=\"igx-linear-bar__base\">\n    <div class=\"igx-linear-bar__indicator\"\n    [style.width.%]=\"valueInPercent\"></div>\n</div>\n\n<span\n    class=\"igx-linear-bar__value\"\n    [ngClass]=\"{\n        'igx-linear-bar__value--start': textAlign === 'start',\n        'igx-linear-bar__value--center': textAlign === 'center',\n        'igx-linear-bar__value--end': textAlign === 'end',\n        'igx-linear-bar__value--top': textTop,\n        'igx-linear-bar__value--hidden': !textVisibility\n    }\">\n        {{text ? text : valueInPercent + '%'}}\n</span>\n"
            }] }
];
/** @nocollapse */
IgxLinearProgressBarComponent.ctorParameters = () => [];
IgxLinearProgressBarComponent.propDecorators = {
    animate: [{ type: Input }],
    max: [{ type: HostBinding, args: ['attr.aria-valuemax',] }, { type: Input }],
    step: [{ type: Input }],
    valueMin: [{ type: HostBinding, args: ['attr.aria-valuemin',] }],
    cssClass: [{ type: HostBinding, args: ['class.igx-linear-bar',] }],
    striped: [{ type: HostBinding, args: ['class.igx-linear-bar--striped',] }, { type: Input }],
    indeterminate: [{ type: HostBinding, args: ['class.igx-linear-bar--indeterminate',] }, { type: Input }],
    role: [{ type: HostBinding, args: ['attr.role',] }, { type: Input }],
    id: [{ type: HostBinding, args: ['attr.id',] }, { type: Input }],
    textAlign: [{ type: Input }],
    textVisibility: [{ type: Input }],
    textTop: [{ type: Input }],
    text: [{ type: Input }],
    type: [{ type: Input }],
    value: [{ type: HostBinding, args: ['attr.aria-valuenow',] }, { type: Input }],
    onProgressChanged: [{ type: Output }],
    danger: [{ type: HostBinding, args: ['class.igx-linear-bar--danger',] }],
    info: [{ type: HostBinding, args: ['class.igx-linear-bar--info',] }],
    warning: [{ type: HostBinding, args: ['class.igx-linear-bar--warning',] }],
    success: [{ type: HostBinding, args: ['class.igx-linear-bar--success',] }]
};
if (false) {
    /** @type {?} */
    IgxLinearProgressBarComponent.prototype.valueMin;
    /** @type {?} */
    IgxLinearProgressBarComponent.prototype.cssClass;
    /**
     * Set `IgxLinearProgressBarComponent` to have striped style. By default it is set to false.
     * ```html
     * <igx-linear-bar [striped]="true" [max]="200" [value]="50"></igx-linear-bar>
     * ```
     * @type {?}
     */
    IgxLinearProgressBarComponent.prototype.striped;
    /**
     * Set `IgxLinearProgressBarComponent` to have indeterminate. By default it is set to false.
     * ```html
     * <igx-linear-bar [indeterminate]="true"></igx-linear-bar>
     * ```
     * @type {?}
     */
    IgxLinearProgressBarComponent.prototype.indeterminate;
    /**
     * An \@Input property that sets the value of the `role` attribute. If not provided it will be automatically set to `progressbar`.
     * ```html
     * <igx-linear-bar role="progressbar"></igx-linear-bar>
     * ```
     * @type {?}
     */
    IgxLinearProgressBarComponent.prototype.role;
    /**
     * An \@Input property that sets the value of `id` attribute. If not provided it will be automatically generated.
     * ```html
     * <igx-linear-bar [id]="'igx-linear-bar-55'" [striped]="true" [max]="200" [value]="50"></igx-linear-bar>
     * ```
     * @type {?}
     */
    IgxLinearProgressBarComponent.prototype.id;
    /**
     * Set the position that defines where the text is aligned.
     * Possible options - `IgxTextAlign.START` (default), `IgxTextAlign.CENTER`, `IgxTextAlign.END`.
     * ```typescript
     * public positionCenter: IgxTextAlign;
     * public ngOnInit() {
     *    this.positionCenter = IgxTextAlign.CENTER;
     * }
     * //...
     * ```
     * ```html
     * <igx-linear-bar type="warning" [text]="'Custom text'" [textAlign]="positionCenter" [striped]="true"></igx-linear-bar>
     * ```
     * @type {?}
     */
    IgxLinearProgressBarComponent.prototype.textAlign;
    /**
     * Set the text to be visible. By default it is set to true.
     * ```html
     * <igx-linear-bar type="default" [textVisibility]="false"></igx-linear-bar>
     * ```
     * @type {?}
     */
    IgxLinearProgressBarComponent.prototype.textVisibility;
    /**
     * Set the position that defines if the text should be aligned above the progress line. By default is set to false.
     * ```html
     * <igx-linear-bar type="danger" [textTop]="true"></igx-linear-bar>
     * ```
     * @type {?}
     */
    IgxLinearProgressBarComponent.prototype.textTop;
    /**
     * Set a custom text that is displayed according to the defined position.
     * ```html
     * <igx-linear-bar type="warning" [text]="'Custom text'" [textAlign]="positionCenter" [striped]="true"></igx-linear-bar>
     * ```
     * @type {?}
     */
    IgxLinearProgressBarComponent.prototype.text;
    /**
     * Set type of the `IgxLinearProgressBarComponent`. Possible options - `default`, `success`, `info`, `warning`, and `danger`.
     * ```html
     * <igx-linear-bar [striped]="false" [max]="100" [value]="0" type="danger"></igx-linear-bar>
     * ```
     * @type {?}
     */
    IgxLinearProgressBarComponent.prototype.type;
    /**
     * An event, which is triggered after a progress is changed.
     * ```typescript
     * public progressChange(event) {
     *    alert("Progress made!");
     * }
     * //...
     * ```
     * ```html
     * <igx-linear-bar (onProgressChanged)="progressChange($event)" type="success">
     * ```
     * @type {?}
     */
    IgxLinearProgressBarComponent.prototype.onProgressChanged;
}
export class IgxCircularProgressBarComponent extends BaseProgress {
    /**
     * @param {?} renderer
     */
    constructor(renderer) {
        super();
        this.renderer = renderer;
        this.STROKE_OPACITY_DVIDER = 100;
        this.STROKE_OPACITY_ADDITION = .2;
        /**
         * @hidden
         */
        this.cssClass = 'igx-circular-bar';
        /**
         * An event, which is triggered after a progress is changed.
         * ```typescript
         * public progressChange(event) {
         *    alert("Progress made!");
         * }
         * //...
         * ```
         * ```html
         * <igx-circular-bar [value]="currentValue" (onProgressChanged)="progressChange($event)"></igx-circular-bar>
         * ```
         */
        this.onProgressChanged = new EventEmitter();
        /**
         * An \@Input property that sets the value of `id` attribute. If not provided it will be automatically generated.
         * ```html
         * <igx-circular-bar [id]="'igx-circular-bar-55'" [value]="50"></igx-circular-bar>
         * ```
         */
        this.id = `igx-circular-bar-${NEXT_CIRCULAR_ID++}`;
        /**
         * An \@Input property that sets the value of the `indeterminate` attribute. If not provided it will be automatically set to false.
         * ```html
         * <igx-circular-bar [indeterminate]="true"></igx-circular-bar>
         * ```
         */
        this.indeterminate = false;
        /**
         * Sets the text visibility. By default it is set to true.
         * ```html
         * <igx-circular-bar [textVisibility]="false"></igx-circular-bar>
         * ```
         */
        this.textVisibility = true;
        this._circleRadius = 46;
        this._circumference = 2 * Math.PI * this._circleRadius;
    }
    /**
     * @hidden
     * @return {?}
     */
    get context() {
        return {
            $implicit: { value: this.value, valueInPercent: this.valueInPercent, max: this.max }
        };
    }
    /**
     * Animation on progress `IgxCircularProgressBarComponent`. By default it is set to true.
     * ```html
     * <igx-circular-bar [animate]="false" [value]="50"></igx-circular-bar>
     * ```
     * @param {?} animate
     * @return {?}
     */
    set animate(animate) {
        this._animate = animate;
    }
    /**
     * Returns whether the `IgxCircularProgressBarComponent` has animation true/false.
     * ```typescript
     * \@ViewChild("MyProgressBar")
     * public progressBar: IgxCircularProgressBarComponent;
     * public animationStatus(event) {
     *    let animationStatus = this.progressBar.animate;
     *    alert(animationStatus);
     * }
     * ```
     * @return {?}
     */
    get animate() {
        return this._animate;
    }
    /**
     * Set maximum value that can be passed. By default it is set to 100.
     * ```html
     * <igx-circular-bar [max]="200" [value]="0"></igx-circular-bar>
     * ```
     * @param {?} maxNum
     * @return {?}
     */
    set max(maxNum) {
        this._max = maxNum;
    }
    /**
     * Returns the the maximum progress value of the `IgxCircularProgressBarComponent`.
     * ```typescript
     * \@ViewChild("MyProgressBar")
     * public progressBar: IgxCircularProgressBarComponent;
     * public maxValue(event) {
     *    let max = this.progressBar.max;
     *    alert(max);
     * }
     * ```
     * ```html
     * <igx-circular-bar [max]="245" [animate]="false" [value]="currentValue"></igx-circular-bar>
     * ```
     * @return {?}
     */
    get max() {
        return this._max;
    }
    /**
     * Returns the value which update the progress indicator of the `IgxCircularProgressBarComponent`.
     * ```typescript
     * \@ViewChild("MyProgressBar")
     * public progressBar: IgxCircularProgressBarComponent;
     * public stepValue(event) {
     *    let step = this.progressBar.step;
     *    alert(step);
     * }
     * ```
     * @return {?}
     */
    get step() {
        if (this._step) {
            return this._step;
        }
        return this._max * ONE_PERCENT;
    }
    /**
     * Sets the value by which progress indicator is updated. By default it is 1% of the maximum value.
     * ```html
     * <igx-circular-bar [striped]="false" [max]="200" [value]="0" [step]="1"></igx-circular-bar>
     * ```
     * @param {?} val
     * @return {?}
     */
    set step(val) {
        this._step = Number(val);
    }
    /**
     * Returns value that indicates the current `IgxCircularProgressBarComponent` position.
     * ```typescript
     * \@ViewChild("MyProgressBar")
     * public progressBar: IgxCircularProgressBarComponent;
     * public getValue(event) {
     *    let value = this.progressBar.value;
     *    alert(value);
     * }
     * ```
     * ```html
     * <button igxButton="fab" igxRipple="" (click)="getValue()">Click</button>
     * ```
     * @return {?}
     */
    get value() {
        return this._value;
    }
    /**
     * Set value that indicates the current `IgxCircularProgressBarComponent` position.
     * ```html
     * <igx-circular-bar [value]="50"></igx-circular-bar>
     * ```
     * @param {?} val
     * @return {?}
     */
    set value(val) {
        val = Number(val);
        if (this._value === val || this.indeterminate) {
            return;
        }
        /** @type {?} */
        const valueInProperRange = getValueInProperRange(val, this.max);
        if (isNaN(valueInProperRange)) {
            return;
        }
        /** @type {?} */
        const changedValues = {
            currentValue: valueInProperRange,
            previousValue: this._value
        };
        /** @type {?} */
        const updateValue = super.directionFlow(this._value, val, this.step);
        if (this.animate && val >= this.step) {
            super.runAnimation(valueInProperRange, updateValue);
        }
        else {
            this.updateProgressDirectly(valueInProperRange);
        }
        this.onProgressChanged.emit(changedValues);
    }
    /**
     * @hidden
     * @param {?} val
     * @param {?} step
     * @return {?}
     */
    updateProgressSmoothly(val, step) {
        // Set frames for the animation
        /** @type {?} */
        const FRAMES = [{
                strokeDashoffset: this.getProgress(this._value),
                strokeOpacity: (this._value / this.STROKE_OPACITY_DVIDER) + this.STROKE_OPACITY_ADDITION
            }, {
                strokeDashoffset: this.getProgress(this.valueInPercent),
                strokeOpacity: (this.valueInPercent / this.STROKE_OPACITY_DVIDER) + this.STROKE_OPACITY_ADDITION
            }];
        this._svgCircle.nativeElement.animate(FRAMES, {
            easing: 'ease-out',
            fill: 'forwards'
        });
        super.updateProgressSmoothly(val, step);
    }
    /**
     * @hidden
     * @return {?}
     */
    get textContent() {
        return this.text;
    }
    /**
     * @hidden
     * @param {?} val
     * @return {?}
     */
    updateProgressDirectly(val) {
        super.updateProgressDirectly(val);
        this.renderer.setStyle(this._svgCircle.nativeElement, 'stroke-dashoffset', this.getProgress(this.valueInPercent));
        this.renderer.setStyle(this._svgCircle.nativeElement, 'stroke-opacity', (this.valueInPercent / this.STROKE_OPACITY_DVIDER) + this.STROKE_OPACITY_ADDITION);
    }
    /**
     * @private
     * @param {?} percentage
     * @return {?}
     */
    getProgress(percentage) {
        return this._circumference - (percentage * this._circumference / 100);
    }
}
IgxCircularProgressBarComponent.decorators = [
    { type: Component, args: [{
                selector: 'igx-circular-bar',
                template: "<svg #svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\"\n    viewBox=\"0 0 100 100\"\n    preserveAspectRatio=\"xMidYMid meet\"\n    role=\"progressbar\"\n    aria-valuemin=\"0\"\n    [attr.aria-valuemax]=\"max\"\n    [attr.aria-valuenow]=\"value\">\n    <circle class=\"igx-circular-bar__inner\" cx=\"50\" cy=\"50\" r=\"46\" />\n    <circle #circle class=\"igx-circular-bar__outer\" cx=\"50\" cy=\"50\" r=\"46\" />\n    <text [class.igx-circular-bar__text--hidden]=\"!textVisibility\" text-anchor=\"middle\" x=\"50\" y=\"60\">\n        <ng-container *ngTemplateOutlet=\"textTemplate ? textTemplate.template : defaultTextTemplate; context: context\">\n        </ng-container>\n    </text>\n\n    <ng-template #defaultTextTemplate>\n        <tspan class=\"igx-circular-bar__text\"> {{textContent ? textContent: valueInPercent + '%'}}</tspan>\n    </ng-template>\n</svg>\n"
            }] }
];
/** @nocollapse */
IgxCircularProgressBarComponent.ctorParameters = () => [
    { type: Renderer2 }
];
IgxCircularProgressBarComponent.propDecorators = {
    cssClass: [{ type: HostBinding, args: ['class.igx-circular-bar',] }],
    onProgressChanged: [{ type: Output }],
    id: [{ type: HostBinding, args: ['attr.id',] }, { type: Input }],
    indeterminate: [{ type: HostBinding, args: ['class.igx-circular-bar--indeterminate',] }, { type: Input }],
    textVisibility: [{ type: Input }],
    text: [{ type: Input }],
    textTemplate: [{ type: ContentChild, args: [IgxProcessBarTextTemplateDirective, { read: IgxProcessBarTextTemplateDirective, static: true },] }],
    animate: [{ type: Input }],
    max: [{ type: Input }],
    step: [{ type: Input }],
    value: [{ type: Input }],
    _svgCircle: [{ type: ViewChild, args: ['circle', { static: true },] }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    IgxCircularProgressBarComponent.prototype.STROKE_OPACITY_DVIDER;
    /**
     * @type {?}
     * @private
     */
    IgxCircularProgressBarComponent.prototype.STROKE_OPACITY_ADDITION;
    /**
     * @hidden
     * @type {?}
     */
    IgxCircularProgressBarComponent.prototype.cssClass;
    /**
     * An event, which is triggered after a progress is changed.
     * ```typescript
     * public progressChange(event) {
     *    alert("Progress made!");
     * }
     * //...
     * ```
     * ```html
     * <igx-circular-bar [value]="currentValue" (onProgressChanged)="progressChange($event)"></igx-circular-bar>
     * ```
     * @type {?}
     */
    IgxCircularProgressBarComponent.prototype.onProgressChanged;
    /**
     * An \@Input property that sets the value of `id` attribute. If not provided it will be automatically generated.
     * ```html
     * <igx-circular-bar [id]="'igx-circular-bar-55'" [value]="50"></igx-circular-bar>
     * ```
     * @type {?}
     */
    IgxCircularProgressBarComponent.prototype.id;
    /**
     * An \@Input property that sets the value of the `indeterminate` attribute. If not provided it will be automatically set to false.
     * ```html
     * <igx-circular-bar [indeterminate]="true"></igx-circular-bar>
     * ```
     * @type {?}
     */
    IgxCircularProgressBarComponent.prototype.indeterminate;
    /**
     * Sets the text visibility. By default it is set to true.
     * ```html
     * <igx-circular-bar [textVisibility]="false"></igx-circular-bar>
     * ```
     * @type {?}
     */
    IgxCircularProgressBarComponent.prototype.textVisibility;
    /**
     * Sets/gets the text to be displayed inside the `igxCircularBar`.
     * ```html
     * <igx-circular-bar text="Progress"></igx-circular-bar>
     * ```
     * ```typescript
     * let text = this.circularBar.text;
     * ```
     * @type {?}
     */
    IgxCircularProgressBarComponent.prototype.text;
    /** @type {?} */
    IgxCircularProgressBarComponent.prototype.textTemplate;
    /**
     * @type {?}
     * @private
     */
    IgxCircularProgressBarComponent.prototype._circleRadius;
    /**
     * @type {?}
     * @private
     */
    IgxCircularProgressBarComponent.prototype._circumference;
    /**
     * @type {?}
     * @private
     */
    IgxCircularProgressBarComponent.prototype._svgCircle;
    /**
     * @type {?}
     * @private
     */
    IgxCircularProgressBarComponent.prototype.renderer;
}
/**
 * @param {?} value
 * @param {?} max
 * @param {?=} min
 * @return {?}
 */
export function getValueInProperRange(value, max, min = 0) {
    return Math.max(Math.min(value, max), min);
}
/**
 * @param {?} value
 * @param {?} max
 * @return {?}
 */
export function convertInPercentage(value, max) {
    return Math.floor(100 * value / max);
}
/**
 * @hidden
 */
export class IgxProgressBarModule {
}
IgxProgressBarModule.decorators = [
    { type: NgModule, args: [{
                declarations: [IgxLinearProgressBarComponent, IgxCircularProgressBarComponent, IgxProcessBarTextTemplateDirective],
                exports: [IgxLinearProgressBarComponent, IgxCircularProgressBarComponent, IgxProcessBarTextTemplateDirective],
                imports: [CommonModule]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3NiYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vaWduaXRldWktYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9wcm9ncmVzc2Jhci9wcm9ncmVzc2Jhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQ0gsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osV0FBVyxFQUNYLEtBQUssRUFDTCxRQUFRLEVBQ1IsTUFBTSxFQUNOLFNBQVMsRUFDVCxTQUFTLEVBQ1QsWUFBWSxFQUNmLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxrQ0FBa0MsRUFBRSxNQUFNLHNCQUFzQixDQUFDOztNQUVwRSxXQUFXLEdBQUcsSUFBSTs7TUFDbEIsU0FBUyxHQUFHLENBQUM7OztJQUdmLE9BQVEsT0FBTztJQUNmLFFBQVMsUUFBUTtJQUNqQixLQUFNLEtBQUs7Ozs7O0lBSVgsUUFBUyxRQUFRO0lBQ2pCLE1BQU8sTUFBTTtJQUNiLFNBQVUsU0FBUztJQUNuQixTQUFVLFNBQVM7Ozs7OztBQUd2Qiw4Q0FHQzs7O0lBRkcsaURBQXNCOztJQUN0QixnREFBcUI7Ozs7O0FBR3pCLE1BQU0sT0FBZ0IsWUFBWTtJQUFsQzs7OztRQUlZLHVCQUFrQixHQUFXLFNBQVMsQ0FBQzs7OztRQUtyQyxvQkFBZSxHQUFHLFNBQVMsQ0FBQzs7OztRQUk1QixTQUFJLEdBQUcsR0FBRyxDQUFDOzs7O1FBSVgsV0FBTSxHQUFHLFNBQVMsQ0FBQzs7OztRQUluQixhQUFRLEdBQUcsSUFBSSxDQUFDO0lBNEg5QixDQUFDOzs7Ozs7Ozs7Ozs7O0lBMUdHLElBQVcsY0FBYztRQUNyQixPQUFPLElBQUksQ0FBQyxlQUFlLENBQUM7SUFDaEMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFnQkQsSUFBVyxjQUFjLENBQUMsS0FBYTtRQUNuQyxJQUFJ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Ozs7Ozs7O0lBdE5yQyxnRUFBNkM7Ozs7O0lBQzdDLGtFQUE4Qzs7Ozs7SUFHOUMsbURBQ3FDOzs7Ozs7Ozs7Ozs7OztJQWNyQyw0REFDd0U7Ozs7Ozs7O0lBUXhFLDZDQUVxRDs7Ozs7Ozs7SUFRckQsd0RBRTZCOzs7Ozs7OztJQVE3Qix5REFDNkI7Ozs7Ozs7Ozs7O0lBVzdCLCtDQUNvQjs7SUFFcEIsdURBQ3dEOzs7OztJQW1KeEQsd0RBQTJCOzs7OztJQUMzQix5REFBMEQ7Ozs7O0lBRTFELHFEQUFzRTs7Ozs7SUFFMUQsbURBQTJCOzs7Ozs7OztBQXFEM0MsTUFBTSxVQUFVLHFCQUFxQixDQUFDLEtBQWEsRUFBRSxHQUFXLEVBQUUsR0FBRyxHQUFHLENBQUM7SUFDckUsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBQy9DLENBQUM7Ozs7OztBQUVELE1BQU0sVUFBVSxtQkFBbUIsQ0FBQyxLQUFhLEVBQUUsR0FBVztJQUMxRCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLEtBQUssR0FBRyxHQUFHLENBQUMsQ0FBQztBQUN6QyxDQUFDOzs7O0FBVUQsTUFBTSxPQUFPLG9CQUFvQjs7O1lBTGhDLFFBQVEsU0FBQztnQkFDTixZQUFZLEVBQUUsQ0FBQyw2QkFBNkIsRUFBRSwrQkFBK0IsRUFBRSxrQ0FBa0MsQ0FBQztnQkFDbEgsT0FBTyxFQUFFLENBQUMsNkJBQTZCLEVBQUUsK0JBQStCLEVBQUUsa0NBQWtDLENBQUM7Z0JBQzdHLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQzthQUMxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge1xuICAgIENvbXBvbmVudCxcbiAgICBFbGVtZW50UmVmLFxuICAgIEV2ZW50RW1pdHRlcixcbiAgICBIb3N0QmluZGluZyxcbiAgICBJbnB1dCxcbiAgICBOZ01vZHVsZSxcbiAgICBPdXRwdXQsXG4gICAgUmVuZGVyZXIyLFxuICAgIFZpZXdDaGlsZCxcbiAgICBDb250ZW50Q2hpbGRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJZ3hQcm9jZXNzQmFyVGV4dFRlbXBsYXRlRGlyZWN0aXZlIH0gZnJvbSAnLi9wcm9ncmVzc2Jhci5jb21tb24nO1xuXG5jb25zdCBPTkVfUEVSQ0VOVCA9IDAuMDE7XG5jb25zdCBNSU5fVkFMVUUgPSAwO1xuXG5leHBvcnQgZW51bSBJZ3hUZXh0QWxpZ24ge1xuICAgIFNUQVJUID0gJ3N0YXJ0JyxcbiAgICBDRU5URVIgPSAnY2VudGVyJyxcbiAgICBFTkQgPSAnZW5kJ1xufVxuXG5leHBvcnQgZW51bSBJZ3hQcm9ncmVzc1R5cGUge1xuICAgIERBTkdFUiA9ICdkYW5nZXInLFxuICAgIElORk8gPSAnaW5mbycsXG4gICAgV0FSTklORyA9ICd3YXJuaW5nJyxcbiAgICBTVUNDRVNTID0gJ3N1Y2Nlc3MnXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUNoYW5nZVByb2dyZXNzRXZlbnRBcmdzIHtcbiAgICBwcmV2aW91c1ZhbHVlOiBudW1iZXI7XG4gICAgY3VycmVudFZhbHVlOiBudW1iZXI7XG59XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBCYXNlUHJvZ3Jlc3Mge1xuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwcml2YXRlIHJlcXVlc3RBbmltYXRpb25JZDogbnVtYmVyID0gdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHByb3RlY3RlZCBfdmFsdWVJblBlcmNlbnQgPSBNSU5fVkFMVUU7XG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHByb3RlY3RlZCBfbWF4ID0gMTAwO1xuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgX3ZhbHVlID0gTUlOX1ZBTFVFO1xuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgX2FuaW1hdGUgPSB0cnVlO1xuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHByb3RlY3RlZCBfc3RlcDtcblxuICAgIC8qKlxuICAgICAqUmV0dXJucyB0aGUgYElneExpbmVhclByb2dyZXNzQmFyQ29tcG9uZW50YC9gSWd4Q2lyY3VsYXJQcm9ncmVzc0JhckNvbXBvbmVudGAgdmFsdWUgaW4gcGVyY2VudGFnZS5cbiAgICAgKmBgYHR5cGVzY3JpcHRcbiAgICAgKkBWaWV3Q2hpbGQoXCJNeVByb2dyZXNzQmFyXCIpXG4gICAgICpwdWJsaWMgcHJvZ3Jlc3NCYXI6IElneExpbmVhclByb2dyZXNzQmFyQ29tcG9uZW50OyAvLyBJZ3hDaXJjdWxhclByb2dyZXNzQmFyQ29tcG9uZW50XG4gICAgICpwdWJsaWMgdmFsdWVQZXJjZW50KGV2ZW50KXtcbiAgICAgKiAgICBsZXQgcGVyY2VudFZhbHVlID0gdGhpcy5wcm9ncmVzc0Jhci52YWx1ZUluUGVyY2VudDtcbiAgICAgKiAgICBhbGVydChwZXJjZW50VmFsdWUpO1xuICAgICAqfVxuICAgICAqYGBgXG4gICAgICovXG4gICAgcHVibGljIGdldCB2YWx1ZUluUGVyY2VudCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fdmFsdWVJblBlcmNlbnQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpTZXRzIHRoZSBgSWd4TGluZWFyUHJvZ3Jlc3NCYXJDb21wb25lbnRgL2BJZ3hDaXJjdWxhclByb2dyZXNzQmFyQ29tcG9uZW50YCB2YWx1ZSBpbiBwZXJjZW50YWdlLlxuICAgICAqYGBgdHlwZXNjcmlwdFxuICAgICAqQFZpZXdDaGlsZChcIk15UHJvZ3Jlc3NCYXJcIilcbiAgICAgKnB1YmxpYyBwcm9ncmVzc0JhcjogSWd4TGluZWFyUHJvZ3Jlc3NCYXJDb21wb25lbnQ7IC8vIElneENpcmN1bGFyUHJvZ3Jlc3NCYXJDb21wb25lbnRcbiAgICAgKiAgICBwdWJsaWMgc2V0VmFsdWUoZXZlbnQpe1xuICAgICAqICAgIHRoaXMucHJvZ3Jlc3NCYXIudmFsdWVJblBlcmNlbnQgPSA1NjtcbiAgICAgKn1cbiAgICAgKiAvLy4uLlxuICAgICAqYGBgXG4gICAgICpgYGBodG1sXG4gICAgICo8YnV0dG9uIGlneEJ1dHRvbj1cImZhYlwiIGlneFJpcHBsZT1cIlwiIChjbGljayk9XCJzZXRWYWx1ZSgpXCI+c2V0VmFsdWU8L2J1dHRvbj5cbiAgICAgKmBgYFxuICAgICAqL1xuICAgIHB1YmxpYyBzZXQgdmFsdWVJblBlcmNlbnQodmFsdWU6IG51bWJlcikge1xuICAgICAgICB0aGlzLl92YWx1ZUluUGVyY2VudCA9IHZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgcnVuQW5pbWF0aW9uKHZhbDogbnVtYmVyLCBzdGVwOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5yZXF1ZXN0QW5pbWF0aW9uSWQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoXG4gICAgICAgICAgICAoKSA9PiB0aGlzLnVwZGF0ZVByb2dyZXNzU21vb3RobHkuY2FsbCh0aGlzLCB2YWwsIHN0ZXApKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHJvdGVjdGVkIHVwZGF0ZVByb2dyZXNzU21vb3RobHkodmFsOiBudW1iZXIsIHN0ZXA6IG51bWJlcikge1xuICAgICAgICB0aGlzLl92YWx1ZSArPSBzdGVwO1xuICAgICAgICBjb25zdCBwYXNzZWRWYWx1ZSA9IGNvbnZlcnRJblBlcmNlbnRhZ2UodmFsLCB0aGlzLl9tYXgpO1xuICAgICAgICBjb25zdCBwcm9ncmVzc1ZhbHVlID0gY29udmVydEluUGVyY2VudGFnZSh0aGlzLl92YWx1ZSwgdGhpcy5fbWF4KTtcbiAgICAgICAgaWYgKHRoaXMudmFsdWVJblBlcmNlbnQgPT09IHBhc3NlZFZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVByb2dyZXNzKHZhbCk7XG4gICAgICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLnJlcXVlc3RBbmltYXRpb25JZCk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5pc0luTGltaXRSYW5nZShwcm9ncmVzc1ZhbHVlLCBwYXNzZWRWYWx1ZSwgc3RlcCkpIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlUHJvZ3Jlc3ModmFsKTtcbiAgICAgICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMucmVxdWVzdEFuaW1hdGlvbklkKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudmFsdWVJblBlcmNlbnQgPSBwcm9ncmVzc1ZhbHVlO1xuICAgICAgICAgICAgdGhpcy5yZXF1ZXN0QW5pbWF0aW9uSWQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4gdGhpcy51cGRhdGVQcm9ncmVzc1Ntb290aGx5LmNhbGwodGhpcywgdmFsLCBzdGVwKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHJvdGVjdGVkIHVwZGF0ZVByb2dyZXNzRGlyZWN0bHkodmFsOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fdmFsdWUgPSB2YWw7XG4gICAgICAgIHRoaXMudmFsdWVJblBlcmNlbnQgPSBjb252ZXJ0SW5QZXJjZW50YWdlKHRoaXMuX3ZhbHVlLCB0aGlzLl9tYXgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgZGlyZWN0aW9uRmxvdyhjdXJyZW50VmFsdWU6IG51bWJlciwgcHJldlZhbHVlOiBudW1iZXIsIHN0ZXA6IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIGlmIChjdXJyZW50VmFsdWUgPCBwcmV2VmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiBzdGVwO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIC1zdGVwO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwcml2YXRlIGlzSW5MaW1pdFJhbmdlKHZhbDogbnVtYmVyLCBjb21wYXJhdG9yOiBudW1iZXIsIHN0ZXA6IG51bWJlcikge1xuICAgICAgICByZXR1cm4gdGhpcy5pc0V4Y2VlZGluZ1VwcGVyTGltaXQodmFsLCBjb21wYXJhdG9yLCBzdGVwKSB8fCB0aGlzLmlzRXhjZWVkaW5nTG93ZXJMaW1pdCh2YWwsIGNvbXBhcmF0b3IsIHN0ZXApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKlxuICAgICAqXG4gICAgICogQHBhcmFtIHZhbFxuICAgICAqIEBwYXJhbSBjb21wYXJhdG9yXG4gICAgICogQHBhcmFtIHN0ZXBcbiAgICAgKi9cbiAgICBwcml2YXRlIGlzRXhjZWVkaW5nVXBwZXJMaW1pdCh2YWw6IG51bWJlciwgY29tcGFyYXRvcjogbnVtYmVyLCBzdGVwOiBudW1iZXIpIHtcbiAgICAgICAgcmV0dXJuIHZhbCA+IGNvbXBhcmF0b3IgJiYgc3RlcCA+IDA7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqXG4gICAgICogQHBhcmFtIHZhbFxuICAgICAqIEBwYXJhbSBjb21wYXJhdG9yXG4gICAgICogQHBhcmFtIHN0ZXBcbiAgICAgKi9cbiAgICBwcml2YXRlIGlzRXhjZWVkaW5nTG93ZXJMaW1pdCh2YWw6IG51bWJlciwgY29tcGFyYXRvcjogbnVtYmVyLCBzdGVwOiBudW1iZXIpIHtcbiAgICAgICAgcmV0dXJuIHZhbCA8IGNvbXBhcmF0b3IgJiYgc3RlcCA8IDA7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqIEBwYXJhbSBzdGVwXG4gICAgICovXG4gICAgcHJpdmF0ZSB1cGRhdGVQcm9ncmVzcyh2YWw6IG51bWJlcikge1xuICAgICAgICB0aGlzLl92YWx1ZSA9IHZhbDtcbiAgICAgICAgdGhpcy52YWx1ZUluUGVyY2VudCA9IGNvbnZlcnRJblBlcmNlbnRhZ2UodGhpcy5fdmFsdWUsIHRoaXMuX21heCk7XG4gICAgfVxufVxubGV0IE5FWFRfTElORUFSX0lEID0gMDtcbmxldCBORVhUX0NJUkNVTEFSX0lEID0gMDtcbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnaWd4LWxpbmVhci1iYXInLFxuICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGVzL2xpbmVhci1iYXIuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIElneExpbmVhclByb2dyZXNzQmFyQ29tcG9uZW50IGV4dGVuZHMgQmFzZVByb2dyZXNzIHtcblxuICAgIC8qKlxuICAgICAqQW5pbWF0aW9uIG9uIHByb2dyZXNzIGBJZ3hMaW5lYXJQcm9ncmVzc0JhckNvbXBvbmVudGAuIEJ5IGRlZmF1bHQgaXQgaXMgc2V0IHRvIHRydWUuXG4gICAgICpgYGBodG1sXG4gICAgICo8aWd4LWxpbmVhci1iYXIgW2FuaW1hdGVdPVwiZmFsc2VcIiBbc3RyaXBlZF09XCJ0cnVlXCIgW21heF09XCIyMDBcIiBbdmFsdWVdPVwiNTBcIj48L2lneC1saW5lYXItYmFyPlxuICAgICAqYGBgXG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBzZXQgYW5pbWF0ZShhbmltYXRlOiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMuX2FuaW1hdGUgPSBhbmltYXRlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqUmV0dXJucyB3aGV0aGVyIHRoZSBgSWd4TGluZWFyUHJvZ3Jlc3NCYXJDb21wb25lbnRgIGhhcyBhbmltYXRpb24gdHJ1ZS9mYWxzZS5cbiAgICAgKmBgYHR5cGVzY3JpcHRcbiAgICAgKkBWaWV3Q2hpbGQoXCJNeVByb2dyZXNzQmFyXCIpXG4gICAgICpwdWJsaWMgcHJvZ3Jlc3NCYXI6IElneExpbmVhclByb2dyZXNzQmFyQ29tcG9uZW50O1xuICAgICAqcHVibGljIGFuaW1hdGlvblN0YXR1cyhldmVudCkge1xuICAgICAqICAgIGxldCBhbmltYXRpb25TdGF0dXMgPSB0aGlzLnByb2dyZXNzQmFyLmFuaW1hdGU7XG4gICAgICogICAgYWxlcnQoYW5pbWF0aW9uU3RhdHVzKTtcbiAgICAgKn1cbiAgICAgKmBgYFxuICAgICAqL1xuICAgIGdldCBhbmltYXRlKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fYW5pbWF0ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlNldCBtYXhpbXVtIHZhbHVlIHRoYXQgY2FuIGJlIHBhc3NlZC4gQnkgZGVmYXVsdCBpdCBpcyBzZXQgdG8gMTAwLlxuICAgICAqYGBgaHRtbFxuICAgICAqPGlneC1saW5lYXItYmFyIFtzdHJpcGVkXT1cImZhbHNlXCIgW21heF09XCIyMDBcIiBbdmFsdWVdPVwiMFwiPjwvaWd4LWxpbmVhci1iYXI+XG4gICAgICpgYGBcbiAgICAgKi9cbiAgICBASG9zdEJpbmRpbmcoJ2F0dHIuYXJpYS12YWx1ZW1heCcpXG4gICAgQElucHV0KClcbiAgICBzZXQgbWF4KG1heE51bTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX21heCA9IG1heE51bTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlJldHVybnMgdGhlIHRoZSBtYXhpbXVtIHByb2dyZXNzIHZhbHVlIG9mIHRoZSBgSWd4TGluZWFyUHJvZ3Jlc3NCYXJDb21wb25lbnRgLlxuICAgICAqYGBgdHlwZXNjcmlwdFxuICAgICAqQFZpZXdDaGlsZChcIk15UHJvZ3Jlc3NCYXJcIilcbiAgICAgKnB1YmxpYyBwcm9ncmVzc0JhcjogSWd4TGluZWFyUHJvZ3Jlc3NCYXJDb21wb25lbnQ7XG4gICAgICpwdWJsaWMgbWF4VmFsdWUoZXZlbnQpIHtcbiAgICAgKiAgICBsZXQgbWF4ID0gdGhpcy5wcm9ncmVzc0Jhci5tYXg7XG4gICAgICogICAgYWxlcnQobWF4KTtcbiAgICAgKn1cbiAgICAgKmBgYFxuICAgICAqL1xuICAgIGdldCBtYXgoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9tYXg7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpSZXR1cm5zIHRoZSB2YWx1ZSB3aGljaCB1cGRhdGUgdGhlIHByb2dyZXNzIGluZGljYXRvciBvZiB0aGUgYElneExpbmVhclByb2dyZXNzQmFyQ29tcG9uZW50YC5cbiAgICAgKmBgYHR5cGVzY3JpcHRcbiAgICAgKkBWaWV3Q2hpbGQoXCJNeVByb2dyZXNzQmFyXCIpXG4gICAgICpwdWJsaWMgcHJvZ3Jlc3NCYXI6IElneExpbmVhclByb2dyZXNzQmFyQ29tcG9uZW50O1xuICAgICAqcHVibGljIHN0ZXBWYWx1ZShldmVudCkge1xuICAgICAqICAgIGxldCBzdGVwID0gdGhpcy5wcm9ncmVzc0Jhci5zdGVwO1xuICAgICAqICAgIGFsZXJ0KHN0ZXApO1xuICAgICAqfVxuICAgICAqYGBgXG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBnZXQgc3RlcCgpOiBudW1iZXIge1xuICAgICAgICBpZiAodGhpcy5fc3RlcCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3N0ZXA7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5fbWF4ICogT05FX1BFUkNFTlQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpTZXRzIHRoZSB2YWx1ZSBieSB3aGljaCBwcm9ncmVzcyBpbmRpY2F0b3IgaXMgdXBkYXRlZC4gQnkgZGVmYXVsdCBpdCBpcyAxJSBvZiB0aGUgbWF4aW11bSB2YWx1ZS5cbiAgICAgKmBgYGh0bWxcbiAgICAgKjxpZ3gtbGluZWFyLWJhciBbc3RyaXBlZF09XCJmYWxzZVwiIFttYXhdPVwiMjAwXCIgW3ZhbHVlXT1cIjBcIiBbc3RlcF09XCIxXCI+PC9pZ3gtbGluZWFyLWJhcj5cbiAgICAgKmBgYFxuICAgICAqL1xuICAgIHNldCBzdGVwKHZhbDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX3N0ZXAgPSBOdW1iZXIodmFsKTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgICBASG9zdEJpbmRpbmcoJ2F0dHIuYXJpYS12YWx1ZW1pbicpXG4gICAgcHVibGljIHZhbHVlTWluID0gMDtcblxuICAgIEBIb3N0QmluZGluZygnY2xhc3MuaWd4LWxpbmVhci1iYXInKVxuICAgIHB1YmxpYyBjc3NDbGFzcyA9ICdpZ3gtbGluZWFyLWJhcic7XG5cbiAgICAvKipcbiAgICAgKlNldCBgSWd4TGluZWFyUHJvZ3Jlc3NCYXJDb21wb25lbnRgIHRvIGhhdmUgc3RyaXBlZCBzdHlsZS4gQnkgZGVmYXVsdCBpdCBpcyBzZXQgdG8gZmFsc2UuXG4gICAgICpgYGBodG1sXG4gICAgICo8aWd4LWxpbmVhci1iYXIgW3N0cmlwZWRdPVwidHJ1ZVwiIFttYXhdPVwiMjAwXCIgW3ZhbHVlXT1cIjUwXCI+PC9pZ3gtbGluZWFyLWJhcj5cbiAgICAgKmBgYFxuICAgICAqL1xuICAgIEBIb3N0QmluZGluZygnY2xhc3MuaWd4LWxpbmVhci1iYXItLXN0cmlwZWQnKVxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHN0cmlwZWQgPSBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqU2V0IGBJZ3hMaW5lYXJQcm9ncmVzc0JhckNvbXBvbmVudGAgdG8gaGF2ZSBpbmRldGVybWluYXRlLiBCeSBkZWZhdWx0IGl0IGlzIHNldCB0byBmYWxzZS5cbiAgICAgKmBgYGh0bWxcbiAgICAgKjxpZ3gtbGluZWFyLWJhciBbaW5kZXRlcm1pbmF0ZV09XCJ0cnVlXCI+PC9pZ3gtbGluZWFyLWJhcj5cbiAgICAgKmBgYFxuICAgICAqL1xuICAgIEBIb3N0QmluZGluZygnY2xhc3MuaWd4LWxpbmVhci1iYXItLWluZGV0ZXJtaW5hdGUnKVxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGluZGV0ZXJtaW5hdGUgPSBmYWxzZTtcblxuICAgIC8qKkFuIEBJbnB1dCBwcm9wZXJ0eSB0aGF0IHNldHMgdGhlIHZhbHVlIG9mIHRoZSBgcm9sZWAgYXR0cmlidXRlLiBJZiBub3QgcHJvdmlkZWQgaXQgd2lsbCBiZSBhdXRvbWF0aWNhbGx5IHNldCB0byBgcHJvZ3Jlc3NiYXJgLlxuICAgICAqIGBgYGh0bWxcbiAgICAgKjxpZ3gtbGluZWFyLWJhciByb2xlPVwicHJvZ3Jlc3NiYXJcIj48L2lneC1saW5lYXItYmFyPlxuICAgICAqIGBgYFxuICAgICAqL1xuICAgIEBIb3N0QmluZGluZygnYXR0ci5yb2xlJylcbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyByb2xlID0gJ3Byb2dyZXNzYmFyJztcblxuICAgIC8qKkFuIEBJbnB1dCBwcm9wZXJ0eSB0aGF0IHNldHMgdGhlIHZhbHVlIG9mIGBpZGAgYXR0cmlidXRlLiBJZiBub3QgcHJvdmlkZWQgaXQgd2lsbCBiZSBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlZC5cbiAgICAgKiBgYGBodG1sXG4gICAgICo8aWd4LWxpbmVhci1iYXIgW2lkXT1cIidpZ3gtbGluZWFyLWJhci01NSdcIiBbc3RyaXBlZF09XCJ0cnVlXCIgW21heF09XCIyMDBcIiBbdmFsdWVdPVwiNTBcIj48L2lneC1saW5lYXItYmFyPlxuICAgICAqIGBgYFxuICAgICAqL1xuICAgIEBIb3N0QmluZGluZygnYXR0ci5pZCcpXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgaWQgPSBgaWd4LWxpbmVhci1iYXItJHtORVhUX0xJTkVBUl9JRCsrfWA7XG5cbiAgICAvKipcbiAgICAgKlNldCB0aGUgcG9zaXRpb24gdGhhdCBkZWZpbmVzIHdoZXJlIHRoZSB0ZXh0IGlzIGFsaWduZWQuXG4gICAgIFBvc3NpYmxlIG9wdGlvbnMgLSBgSWd4VGV4dEFsaWduLlNUQVJUYCAoZGVmYXVsdCksIGBJZ3hUZXh0QWxpZ24uQ0VOVEVSYCwgYElneFRleHRBbGlnbi5FTkRgLlxuICAgICAqYGBgdHlwZXNjcmlwdFxuICAgICAqcHVibGljIHBvc2l0aW9uQ2VudGVyOiBJZ3hUZXh0QWxpZ247XG4gICAgICpwdWJsaWMgbmdPbkluaXQoKSB7XG4gICAgICogICAgdGhpcy5wb3NpdGlvbkNlbnRlciA9IElneFRleHRBbGlnbi5DRU5URVI7XG4gICAgICp9XG4gICAgICogLy8uLi5cbiAgICAgKmBgYFxuICAgICAqIGBgYGh0bWxcbiAgICAgKjxpZ3gtbGluZWFyLWJhciB0eXBlPVwid2FybmluZ1wiIFt0ZXh0XT1cIidDdXN0b20gdGV4dCdcIiBbdGV4dEFsaWduXT1cInBvc2l0aW9uQ2VudGVyXCIgW3N0cmlwZWRdPVwidHJ1ZVwiPjwvaWd4LWxpbmVhci1iYXI+XG4gICAgICpgYGBcbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyB0ZXh0QWxpZ246IElneFRleHRBbGlnbiA9IElneFRleHRBbGlnbi5TVEFSVDtcblxuICAgIC8qKlxuICAgICAqU2V0IHRoZSB0ZXh0IHRvIGJlIHZpc2libGUuIEJ5IGRlZmF1bHQgaXQgaXMgc2V0IHRvIHRydWUuXG4gICAgICogYGBgaHRtbFxuICAgICAqPGlneC1saW5lYXItYmFyIHR5cGU9XCJkZWZhdWx0XCIgW3RleHRWaXNpYmlsaXR5XT1cImZhbHNlXCI+PC9pZ3gtbGluZWFyLWJhcj5cbiAgICAgKmBgYFxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHRleHRWaXNpYmlsaXR5ID0gdHJ1ZTtcblxuICAgIC8qKlxuICAgICAqU2V0IHRoZSBwb3NpdGlvbiB0aGF0IGRlZmluZXMgaWYgdGhlIHRleHQgc2hvdWxkIGJlIGFsaWduZWQgYWJvdmUgdGhlIHByb2dyZXNzIGxpbmUuIEJ5IGRlZmF1bHQgaXMgc2V0IHRvIGZhbHNlLlxuICAgICAqYGBgaHRtbFxuICAgICAqPGlneC1saW5lYXItYmFyIHR5cGU9XCJkYW5nZXJcIiBbdGV4dFRvcF09XCJ0cnVlXCI+PC9pZ3gtbGluZWFyLWJhcj5cbiAgICAgKmBgYFxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHRleHRUb3AgPSBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqU2V0IGEgY3VzdG9tIHRleHQgdGhhdCBpcyBkaXNwbGF5ZWQgYWNjb3JkaW5nIHRvIHRoZSBkZWZpbmVkIHBvc2l0aW9uLlxuICAgICAqIGBgYGh0bWxcbiAgICAgKjxpZ3gtbGluZWFyLWJhciB0eXBlPVwid2FybmluZ1wiIFt0ZXh0XT1cIidDdXN0b20gdGV4dCdcIiBbdGV4dEFsaWduXT1cInBvc2l0aW9uQ2VudGVyXCIgW3N0cmlwZWRdPVwidHJ1ZVwiPjwvaWd4LWxpbmVhci1iYXI+XG4gICAgICpgYGBcbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyB0ZXh0OiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKlNldCB0eXBlIG9mIHRoZSBgSWd4TGluZWFyUHJvZ3Jlc3NCYXJDb21wb25lbnRgLiBQb3NzaWJsZSBvcHRpb25zIC0gYGRlZmF1bHRgLCBgc3VjY2Vzc2AsIGBpbmZvYCwgYHdhcm5pbmdgLCBhbmQgYGRhbmdlcmAuXG4gICAgICpgYGBodG1sXG4gICAgICo8aWd4LWxpbmVhci1iYXIgW3N0cmlwZWRdPVwiZmFsc2VcIiBbbWF4XT1cIjEwMFwiIFt2YWx1ZV09XCIwXCIgdHlwZT1cImRhbmdlclwiPjwvaWd4LWxpbmVhci1iYXI+XG4gICAgICpgYGBcbiAgICAgKi9cblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHR5cGUgPSAnZGVmYXVsdCc7XG5cbiAgICAgLyoqXG4gICAgICpSZXR1cm5zIHZhbHVlIHRoYXQgaW5kaWNhdGVzIHRoZSBjdXJyZW50IGBJZ3hMaW5lYXJQcm9ncmVzc0JhckNvbXBvbmVudGAgcG9zaXRpb24uXG4gICAgICpgYGB0eXBlc2NyaXB0XG4gICAgICpAVmlld0NoaWxkKFwiTXlQcm9ncmVzc0JhclwiKVxuICAgICAqcHVibGljIHByb2dyZXNzQmFyOiBJZ3hMaW5lYXJQcm9ncmVzc0JhckNvbXBvbmVudDtcbiAgICAgKnB1YmxpYyBnZXRWYWx1ZShldmVudCkge1xuICAgICAqICAgIGxldCB2YWx1ZSA9IHRoaXMucHJvZ3Jlc3NCYXIudmFsdWU7XG4gICAgICogICAgYWxlcnQodmFsdWUpO1xuICAgICAqfVxuICAgICAqYGBgXG4gICAgICovXG4gICAgQEhvc3RCaW5kaW5nKCdhdHRyLmFyaWEtdmFsdWVub3cnKVxuICAgIEBJbnB1dCgpXG4gICAgZ2V0IHZhbHVlKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlNldCB2YWx1ZSB0aGF0IGluZGljYXRlcyB0aGUgY3VycmVudCBgSWd4TGluZWFyUHJvZ3Jlc3NCYXJDb21wb25lbnRgIHBvc2l0aW9uLlxuICAgICAqYGBgaHRtbFxuICAgICAqPGlneC1saW5lYXItYmFyIFtzdHJpcGVkXT1cImZhbHNlXCIgW21heF09XCIyMDBcIiBbdmFsdWVdPVwiNTBcIj48L2lneC1saW5lYXItYmFyPlxuICAgICAqYGBgXG4gICAgICovXG4gICAgc2V0IHZhbHVlKHZhbCkge1xuICAgICAgICB2YWwgPSBOdW1iZXIodmFsKTtcbiAgICAgICAgaWYgKHRoaXMuX3ZhbHVlID09PSB2YWwgfHwgdGhpcy5pbmRldGVybWluYXRlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB2YWx1ZUluUmFuZ2UgPSBnZXRWYWx1ZUluUHJvcGVyUmFuZ2UodmFsLCB0aGlzLm1heCk7XG4gICAgICAgIGlmIChpc05hTih2YWx1ZUluUmFuZ2UpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY2hhbmdlZFZhbHVlcyA9IHtcbiAgICAgICAgICAgIGN1cnJlbnRWYWx1ZTogdmFsdWVJblJhbmdlLFxuICAgICAgICAgICAgcHJldmlvdXNWYWx1ZTogdGhpcy5fdmFsdWVcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCB1cGRhdGVWYWx1ZSA9IHN1cGVyLmRpcmVjdGlvbkZsb3codGhpcy5fdmFsdWUsIHZhbCwgdGhpcy5zdGVwKTtcbiAgICAgICAgaWYgKHRoaXMuX2FuaW1hdGUgJiYgdmFsID49IHRoaXMuc3RlcCkge1xuICAgICAgICAgICAgc3VwZXIucnVuQW5pbWF0aW9uKHZhbHVlSW5SYW5nZSwgdXBkYXRlVmFsdWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3VwZXIudXBkYXRlUHJvZ3Jlc3NEaXJlY3RseSh2YWx1ZUluUmFuZ2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5vblByb2dyZXNzQ2hhbmdlZC5lbWl0KGNoYW5nZWRWYWx1ZXMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqQW4gZXZlbnQsIHdoaWNoIGlzIHRyaWdnZXJlZCBhZnRlciBhIHByb2dyZXNzIGlzIGNoYW5nZWQuXG4gICAgICpgYGB0eXBlc2NyaXB0XG4gICAgICpwdWJsaWMgcHJvZ3Jlc3NDaGFuZ2UoZXZlbnQpIHtcbiAgICAgKiAgICBhbGVydChcIlByb2dyZXNzIG1hZGUhXCIpO1xuICAgICAqfVxuICAgICAqIC8vLi4uXG4gICAgICpgYGBcbiAgICAgKmBgYGh0bWxcbiAgICAgKjxpZ3gtbGluZWFyLWJhciAob25Qcm9ncmVzc0NoYW5nZWQpPVwicHJvZ3Jlc3NDaGFuZ2UoJGV2ZW50KVwiIHR5cGU9XCJzdWNjZXNzXCI+XG4gICAgICpgYGBcbiAgICAgKi9cbiAgICBAT3V0cHV0KCkgcHVibGljIG9uUHJvZ3Jlc3NDaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcjxJQ2hhbmdlUHJvZ3Jlc3NFdmVudEFyZ3M+KCk7XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pZ3gtbGluZWFyLWJhci0tZGFuZ2VyJylcbiAgICBwdWJsaWMgZ2V0IGRhbmdlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudHlwZSA9PT0gSWd4UHJvZ3Jlc3NUeXBlLkRBTkdFUjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pZ3gtbGluZWFyLWJhci0taW5mbycpXG4gICAgcHVibGljIGdldCBpbmZvKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50eXBlID09PSBJZ3hQcm9ncmVzc1R5cGUuSU5GTztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pZ3gtbGluZWFyLWJhci0td2FybmluZycpXG4gICAgcHVibGljIGdldCB3YXJuaW5nKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50eXBlID09PSBJZ3hQcm9ncmVzc1R5cGUuV0FSTklORztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pZ3gtbGluZWFyLWJhci0tc3VjY2VzcycpXG4gICAgcHVibGljIGdldCBzdWNjZXNzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50eXBlID09PSBJZ3hQcm9ncmVzc1R5cGUuU1VDQ0VTUztcbiAgICB9XG59XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnaWd4LWNpcmN1bGFyLWJhcicsXG4gICAgdGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZXMvY2lyY3VsYXItYmFyLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBJZ3hDaXJjdWxhclByb2dyZXNzQmFyQ29tcG9uZW50IGV4dGVuZHMgQmFzZVByb2dyZXNzIHtcblxuICAgIHByaXZhdGUgcmVhZG9ubHkgU1RST0tFX09QQUNJVFlfRFZJREVSID0gMTAwO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgU1RST0tFX09QQUNJVFlfQURESVRJT04gPSAuMjtcblxuICAgIC8qKiBAaGlkZGVuICovXG4gICAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pZ3gtY2lyY3VsYXItYmFyJylcbiAgICBwdWJsaWMgY3NzQ2xhc3MgPSAnaWd4LWNpcmN1bGFyLWJhcic7XG5cbiAgICAvKipcbiAgICAgKkFuIGV2ZW50LCB3aGljaCBpcyB0cmlnZ2VyZWQgYWZ0ZXIgYSBwcm9ncmVzcyBpcyBjaGFuZ2VkLlxuICAgICAqYGBgdHlwZXNjcmlwdFxuICAgICAqcHVibGljIHByb2dyZXNzQ2hhbmdlKGV2ZW50KSB7XG4gICAgICogICAgYWxlcnQoXCJQcm9ncmVzcyBtYWRlIVwiKTtcbiAgICAgKn1cbiAgICAgKiAvLy4uLlxuICAgICAqYGBgXG4gICAgICpgYGBodG1sXG4gICAgICo8aWd4LWNpcmN1bGFyLWJhciBbdmFsdWVdPVwiY3VycmVudFZhbHVlXCIgKG9uUHJvZ3Jlc3NDaGFuZ2VkKT1cInByb2dyZXNzQ2hhbmdlKCRldmVudClcIj48L2lneC1jaXJjdWxhci1iYXI+XG4gICAgICpgYGBcbiAgICAgKi9cbiAgICBAT3V0cHV0KClcbiAgICBwdWJsaWMgb25Qcm9ncmVzc0NoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyPElDaGFuZ2VQcm9ncmVzc0V2ZW50QXJncz4oKTtcblxuICAgIC8qKlxuICAgICAqQW4gQElucHV0IHByb3BlcnR5IHRoYXQgc2V0cyB0aGUgdmFsdWUgb2YgYGlkYCBhdHRyaWJ1dGUuIElmIG5vdCBwcm92aWRlZCBpdCB3aWxsIGJlIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkLlxuICAgICAqYGBgaHRtbFxuICAgICAqPGlneC1jaXJjdWxhci1iYXIgW2lkXT1cIidpZ3gtY2lyY3VsYXItYmFyLTU1J1wiIFt2YWx1ZV09XCI1MFwiPjwvaWd4LWNpcmN1bGFyLWJhcj5cbiAgICAgKmBgYFxuICAgICAqL1xuICAgIEBIb3N0QmluZGluZygnYXR0ci5pZCcpXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgaWQgPSBgaWd4LWNpcmN1bGFyLWJhci0ke05FWFRfQ0lSQ1VMQVJfSUQrK31gO1xuXG4gICAgLyoqXG4gICAgICpBbiBASW5wdXQgcHJvcGVydHkgdGhhdCBzZXRzIHRoZSB2YWx1ZSBvZiB0aGUgYGluZGV0ZXJtaW5hdGVgIGF0dHJpYnV0ZS4gSWYgbm90IHByb3ZpZGVkIGl0IHdpbGwgYmUgYXV0b21hdGljYWxseSBzZXQgdG8gZmFsc2UuXG4gICAgICpgYGBodG1sXG4gICAgICo8aWd4LWNpcmN1bGFyLWJhciBbaW5kZXRlcm1pbmF0ZV09XCJ0cnVlXCI+PC9pZ3gtY2lyY3VsYXItYmFyPlxuICAgICAqYGBgXG4gICAgICovXG4gICAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pZ3gtY2lyY3VsYXItYmFyLS1pbmRldGVybWluYXRlJylcbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBpbmRldGVybWluYXRlID0gZmFsc2U7XG5cbiAgICAvKipcbiAgICAgKlNldHMgdGhlIHRleHQgdmlzaWJpbGl0eS4gQnkgZGVmYXVsdCBpdCBpcyBzZXQgdG8gdHJ1ZS5cbiAgICAgKmBgYGh0bWxcbiAgICAgKjxpZ3gtY2lyY3VsYXItYmFyIFt0ZXh0VmlzaWJpbGl0eV09XCJmYWxzZVwiPjwvaWd4LWNpcmN1bGFyLWJhcj5cbiAgICAgKmBgYFxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHRleHRWaXNpYmlsaXR5ID0gdHJ1ZTtcblxuICAgIC8qKlxuICAgICAqIFNldHMvZ2V0cyB0aGUgdGV4dCB0byBiZSBkaXNwbGF5ZWQgaW5zaWRlIHRoZSBgaWd4Q2lyY3VsYXJCYXJgLlxuICAgICAqYGBgaHRtbFxuICAgICAqPGlneC1jaXJjdWxhci1iYXIgdGV4dD1cIlByb2dyZXNzXCI+PC9pZ3gtY2lyY3VsYXItYmFyPlxuICAgICAqYGBgXG4gICAgICpgYGB0eXBlc2NyaXB0XG4gICAgICpsZXQgdGV4dCA9IHRoaXMuY2lyY3VsYXJCYXIudGV4dDtcbiAgICAgKmBgYFxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHRleHQ6IHN0cmluZztcblxuICAgIEBDb250ZW50Q2hpbGQoSWd4UHJvY2Vzc0JhclRleHRUZW1wbGF0ZURpcmVjdGl2ZSwgeyByZWFkOiBJZ3hQcm9jZXNzQmFyVGV4dFRlbXBsYXRlRGlyZWN0aXZlLCBzdGF0aWM6IHRydWUgfSlcbiAgICBwdWJsaWMgdGV4dFRlbXBsYXRlOiBJZ3hQcm9jZXNzQmFyVGV4dFRlbXBsYXRlRGlyZWN0aXZlO1xuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICovXG4gICAgcHVibGljIGdldCBjb250ZXh0KCk6IGFueSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAkaW1wbGljaXQ6IHsgdmFsdWU6IHRoaXMudmFsdWUsIHZhbHVlSW5QZXJjZW50OiB0aGlzLnZhbHVlSW5QZXJjZW50LCBtYXg6IHRoaXMubWF4IH1cbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqQW5pbWF0aW9uIG9uIHByb2dyZXNzIGBJZ3hDaXJjdWxhclByb2dyZXNzQmFyQ29tcG9uZW50YC4gQnkgZGVmYXVsdCBpdCBpcyBzZXQgdG8gdHJ1ZS5cbiAgICAgKmBgYGh0bWxcbiAgICAgKjxpZ3gtY2lyY3VsYXItYmFyIFthbmltYXRlXT1cImZhbHNlXCIgW3ZhbHVlXT1cIjUwXCI+PC9pZ3gtY2lyY3VsYXItYmFyPlxuICAgICAqYGBgXG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBzZXQgYW5pbWF0ZShhbmltYXRlOiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMuX2FuaW1hdGUgPSBhbmltYXRlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqUmV0dXJucyB3aGV0aGVyIHRoZSBgSWd4Q2lyY3VsYXJQcm9ncmVzc0JhckNvbXBvbmVudGAgaGFzIGFuaW1hdGlvbiB0cnVlL2ZhbHNlLlxuICAgICAqYGBgdHlwZXNjcmlwdFxuICAgICAqQFZpZXdDaGlsZChcIk15UHJvZ3Jlc3NCYXJcIilcbiAgICAgKnB1YmxpYyBwcm9ncmVzc0JhcjogSWd4Q2lyY3VsYXJQcm9ncmVzc0JhckNvbXBvbmVudDtcbiAgICAgKnB1YmxpYyBhbmltYXRpb25TdGF0dXMoZXZlbnQpIHtcbiAgICAgKiAgICBsZXQgYW5pbWF0aW9uU3RhdHVzID0gdGhpcy5wcm9ncmVzc0Jhci5hbmltYXRlO1xuICAgICAqICAgIGFsZXJ0KGFuaW1hdGlvblN0YXR1cyk7XG4gICAgICp9XG4gICAgICpgYGBcbiAgICAgKi9cbiAgICBnZXQgYW5pbWF0ZSgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FuaW1hdGU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpTZXQgbWF4aW11bSB2YWx1ZSB0aGF0IGNhbiBiZSBwYXNzZWQuIEJ5IGRlZmF1bHQgaXQgaXMgc2V0IHRvIDEwMC5cbiAgICAgKmBgYGh0bWxcbiAgICAgKjxpZ3gtY2lyY3VsYXItYmFyIFttYXhdPVwiMjAwXCIgW3ZhbHVlXT1cIjBcIj48L2lneC1jaXJjdWxhci1iYXI+XG4gICAgICpgYGBcbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHNldCBtYXgobWF4TnVtOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fbWF4ID0gbWF4TnVtO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqUmV0dXJucyB0aGUgdGhlIG1heGltdW0gcHJvZ3Jlc3MgdmFsdWUgb2YgdGhlIGBJZ3hDaXJjdWxhclByb2dyZXNzQmFyQ29tcG9uZW50YC5cbiAgICAgKmBgYHR5cGVzY3JpcHRcbiAgICAgKkBWaWV3Q2hpbGQoXCJNeVByb2dyZXNzQmFyXCIpXG4gICAgICpwdWJsaWMgcHJvZ3Jlc3NCYXI6IElneENpcmN1bGFyUHJvZ3Jlc3NCYXJDb21wb25lbnQ7XG4gICAgICpwdWJsaWMgbWF4VmFsdWUoZXZlbnQpIHtcbiAgICAgKiAgICBsZXQgbWF4ID0gdGhpcy5wcm9ncmVzc0Jhci5tYXg7XG4gICAgICogICAgYWxlcnQobWF4KTtcbiAgICAgKn1cbiAgICAgKmBgYFxuICAgICAqYGBgaHRtbFxuICAgICAqPGlneC1jaXJjdWxhci1iYXIgW21heF09XCIyNDVcIiBbYW5pbWF0ZV09XCJmYWxzZVwiIFt2YWx1ZV09XCJjdXJyZW50VmFsdWVcIj48L2lneC1jaXJjdWxhci1iYXI+XG4gICAgICpgYGBcbiAgICAgKi9cbiAgICBnZXQgbWF4KCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9tYXg7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpSZXR1cm5zIHRoZSB2YWx1ZSB3aGljaCB1cGRhdGUgdGhlIHByb2dyZXNzIGluZGljYXRvciBvZiB0aGUgYElneENpcmN1bGFyUHJvZ3Jlc3NCYXJDb21wb25lbnRgLlxuICAgICAqYGBgdHlwZXNjcmlwdFxuICAgICAqQFZpZXdDaGlsZChcIk15UHJvZ3Jlc3NCYXJcIilcbiAgICAgKnB1YmxpYyBwcm9ncmVzc0JhcjogSWd4Q2lyY3VsYXJQcm9ncmVzc0JhckNvbXBvbmVudDtcbiAgICAgKnB1YmxpYyBzdGVwVmFsdWUoZXZlbnQpIHtcbiAgICAgKiAgICBsZXQgc3RlcCA9IHRoaXMucHJvZ3Jlc3NCYXIuc3RlcDtcbiAgICAgKiAgICBhbGVydChzdGVwKTtcbiAgICAgKn1cbiAgICAgKmBgYFxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgZ2V0IHN0ZXAoKTogbnVtYmVyIHtcbiAgICAgICAgaWYgKHRoaXMuX3N0ZXApIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9zdGVwO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuX21heCAqIE9ORV9QRVJDRU5UO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqU2V0cyB0aGUgdmFsdWUgYnkgd2hpY2ggcHJvZ3Jlc3MgaW5kaWNhdG9yIGlzIHVwZGF0ZWQuIEJ5IGRlZmF1bHQgaXQgaXMgMSUgb2YgdGhlIG1heGltdW0gdmFsdWUuXG4gICAgICpgYGBodG1sXG4gICAgICo8aWd4LWNpcmN1bGFyLWJhciBbc3RyaXBlZF09XCJmYWxzZVwiIFttYXhdPVwiMjAwXCIgW3ZhbHVlXT1cIjBcIiBbc3RlcF09XCIxXCI+PC9pZ3gtY2lyY3VsYXItYmFyPlxuICAgICAqYGBgXG4gICAgKi9cbiAgICBzZXQgc3RlcCh2YWw6IG51bWJlcikge1xuICAgICAgICB0aGlzLl9zdGVwID0gTnVtYmVyKHZhbCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpSZXR1cm5zIHZhbHVlIHRoYXQgaW5kaWNhdGVzIHRoZSBjdXJyZW50IGBJZ3hDaXJjdWxhclByb2dyZXNzQmFyQ29tcG9uZW50YCBwb3NpdGlvbi5cbiAgICAgKmBgYHR5cGVzY3JpcHRcbiAgICAgKkBWaWV3Q2hpbGQoXCJNeVByb2dyZXNzQmFyXCIpXG4gICAgICpwdWJsaWMgcHJvZ3Jlc3NCYXI6IElneENpcmN1bGFyUHJvZ3Jlc3NCYXJDb21wb25lbnQ7XG4gICAgICpwdWJsaWMgZ2V0VmFsdWUoZXZlbnQpIHtcbiAgICAgKiAgICBsZXQgdmFsdWUgPSB0aGlzLnByb2dyZXNzQmFyLnZhbHVlO1xuICAgICAqICAgIGFsZXJ0KHZhbHVlKTtcbiAgICAgKn1cbiAgICAgKmBgYFxuICAgICAqYGBgaHRtbFxuICAgICAqPGJ1dHRvbiBpZ3hCdXR0b249XCJmYWJcIiBpZ3hSaXBwbGU9XCJcIiAoY2xpY2spPVwiZ2V0VmFsdWUoKVwiPkNsaWNrPC9idXR0b24+XG4gICAgICpgYGBcbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIGdldCB2YWx1ZSgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpTZXQgdmFsdWUgdGhhdCBpbmRpY2F0ZXMgdGhlIGN1cnJlbnQgYElneENpcmN1bGFyUHJvZ3Jlc3NCYXJDb21wb25lbnRgIHBvc2l0aW9uLlxuICAgICAqYGBgaHRtbFxuICAgICAqPGlneC1jaXJjdWxhci1iYXIgW3ZhbHVlXT1cIjUwXCI+PC9pZ3gtY2lyY3VsYXItYmFyPlxuICAgICAqYGBgXG4gICAgICovXG4gICAgc2V0IHZhbHVlKHZhbDogbnVtYmVyKSB7XG4gICAgICAgIHZhbCA9IE51bWJlcih2YWwpO1xuICAgICAgICBpZiAodGhpcy5fdmFsdWUgPT09IHZhbCB8fCB0aGlzLmluZGV0ZXJtaW5hdGUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHZhbHVlSW5Qcm9wZXJSYW5nZSA9IGdldFZhbHVlSW5Qcm9wZXJSYW5nZSh2YWwsIHRoaXMubWF4KTtcbiAgICAgICAgaWYgKGlzTmFOKHZhbHVlSW5Qcm9wZXJSYW5nZSkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNoYW5nZWRWYWx1ZXMgPSB7XG4gICAgICAgICAgICBjdXJyZW50VmFsdWU6IHZhbHVlSW5Qcm9wZXJSYW5nZSxcbiAgICAgICAgICAgIHByZXZpb3VzVmFsdWU6IHRoaXMuX3ZhbHVlXG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgdXBkYXRlVmFsdWUgPSBzdXBlci5kaXJlY3Rpb25GbG93KHRoaXMuX3ZhbHVlLCB2YWwsIHRoaXMuc3RlcCk7XG4gICAgICAgIGlmICh0aGlzLmFuaW1hdGUgJiYgdmFsID49IHRoaXMuc3RlcCkge1xuICAgICAgICAgICAgc3VwZXIucnVuQW5pbWF0aW9uKHZhbHVlSW5Qcm9wZXJSYW5nZSwgdXBkYXRlVmFsdWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVQcm9ncmVzc0RpcmVjdGx5KHZhbHVlSW5Qcm9wZXJSYW5nZSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm9uUHJvZ3Jlc3NDaGFuZ2VkLmVtaXQoY2hhbmdlZFZhbHVlcyk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfY2lyY2xlUmFkaXVzID0gNDY7XG4gICAgcHJpdmF0ZSBfY2lyY3VtZmVyZW5jZSA9IDIgKiBNYXRoLlBJICogdGhpcy5fY2lyY2xlUmFkaXVzO1xuXG4gICAgQFZpZXdDaGlsZCgnY2lyY2xlJywgeyBzdGF0aWM6IHRydWUgfSkgcHJpdmF0ZSBfc3ZnQ2lyY2xlOiBFbGVtZW50UmVmO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyB1cGRhdGVQcm9ncmVzc1Ntb290aGx5KHZhbDogbnVtYmVyLCBzdGVwOiBudW1iZXIpIHtcbiAgICAgICAgLy8gU2V0IGZyYW1lcyBmb3IgdGhlIGFuaW1hdGlvblxuICAgICAgICBjb25zdCBGUkFNRVMgPSBbe1xuICAgICAgICAgICAgc3Ryb2tlRGFzaG9mZnNldDogdGhpcy5nZXRQcm9ncmVzcyh0aGlzLl92YWx1ZSksXG4gICAgICAgICAgICBzdHJva2VPcGFjaXR5OiAodGhpcy5fdmFsdWUgLyB0aGlzLlNUUk9LRV9PUEFDSVRZX0RWSURFUikgKyB0aGlzLlNUUk9LRV9PUEFDSVRZX0FERElUSU9OXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIHN0cm9rZURhc2hvZmZzZXQ6IHRoaXMuZ2V0UHJvZ3Jlc3ModGhpcy52YWx1ZUluUGVyY2VudCksXG4gICAgICAgICAgICBzdHJva2VPcGFjaXR5OiAodGhpcy52YWx1ZUluUGVyY2VudCAvIHRoaXMuU1RST0tFX09QQUNJVFlfRFZJREVSKSArIHRoaXMuU1RST0tFX09QQUNJVFlfQURESVRJT05cbiAgICAgICAgfV07XG4gICAgICAgIHRoaXMuX3N2Z0NpcmNsZS5uYXRpdmVFbGVtZW50LmFuaW1hdGUoRlJBTUVTLCB7XG4gICAgICAgICAgICBlYXNpbmc6ICdlYXNlLW91dCcsXG4gICAgICAgICAgICBmaWxsOiAnZm9yd2FyZHMnXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHN1cGVyLnVwZGF0ZVByb2dyZXNzU21vb3RobHkodmFsLCBzdGVwKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgKi9cbiAgICBwdWJsaWMgZ2V0IHRleHRDb250ZW50KCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLnRleHQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICovXG4gICAgcHVibGljIHVwZGF0ZVByb2dyZXNzRGlyZWN0bHkodmFsOiBudW1iZXIpIHtcbiAgICAgICAgc3VwZXIudXBkYXRlUHJvZ3Jlc3NEaXJlY3RseSh2YWwpO1xuXG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoXG4gICAgICAgICAgICB0aGlzLl9zdmdDaXJjbGUubmF0aXZlRWxlbWVudCxcbiAgICAgICAgICAgICdzdHJva2UtZGFzaG9mZnNldCcsXG4gICAgICAgICAgICB0aGlzLmdldFByb2dyZXNzKHRoaXMudmFsdWVJblBlcmNlbnQpKTtcblxuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKFxuICAgICAgICAgICAgdGhpcy5fc3ZnQ2lyY2xlLm5hdGl2ZUVsZW1lbnQsXG4gICAgICAgICAgICAnc3Ryb2tlLW9wYWNpdHknLFxuICAgICAgICAgICAgKHRoaXMudmFsdWVJblBlcmNlbnQgLyB0aGlzLlNUUk9LRV9PUEFDSVRZX0RWSURFUikgKyB0aGlzLlNUUk9LRV9PUEFDSVRZX0FERElUSU9OKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldFByb2dyZXNzKHBlcmNlbnRhZ2U6IG51bWJlcikge1xuICAgICAgICByZXR1cm4gdGhpcy5fY2lyY3VtZmVyZW5jZSAtIChwZXJjZW50YWdlICogdGhpcy5fY2lyY3VtZmVyZW5jZSAvIDEwMCk7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VmFsdWVJblByb3BlclJhbmdlKHZhbHVlOiBudW1iZXIsIG1heDogbnVtYmVyLCBtaW4gPSAwKTogbnVtYmVyIHtcbiAgICByZXR1cm4gTWF0aC5tYXgoTWF0aC5taW4odmFsdWUsIG1heCksIG1pbik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0SW5QZXJjZW50YWdlKHZhbHVlOiBudW1iZXIsIG1heDogbnVtYmVyKSB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoMTAwICogdmFsdWUgLyBtYXgpO1xufVxuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuQE5nTW9kdWxlKHtcbiAgICBkZWNsYXJhdGlvbnM6IFtJZ3hMaW5lYXJQcm9ncmVzc0JhckNvbXBvbmVudCwgSWd4Q2lyY3VsYXJQcm9ncmVzc0JhckNvbXBvbmVudCwgSWd4UHJvY2Vzc0JhclRleHRUZW1wbGF0ZURpcmVjdGl2ZV0sXG4gICAgZXhwb3J0czogW0lneExpbmVhclByb2dyZXNzQmFyQ29tcG9uZW50LCBJZ3hDaXJjdWxhclByb2dyZXNzQmFyQ29tcG9uZW50LCBJZ3hQcm9jZXNzQmFyVGV4dFRlbXBsYXRlRGlyZWN0aXZlXSxcbiAgICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBJZ3hQcm9ncmVzc0Jhck1vZHVsZSB7XG59XG4iXX0=