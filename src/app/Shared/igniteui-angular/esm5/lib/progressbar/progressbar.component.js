/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { CommonModule } from '@angular/common';
import { Component, ElementRef, EventEmitter, HostBinding, Input, NgModule, Output, Renderer2, ViewChild, ContentChild } from '@angular/core';
import { IgxProcessBarTextTemplateDirective } from './progressbar.common';
/** @type {?} */
var ONE_PERCENT = 0.01;
/** @type {?} */
var MIN_VALUE = 0;
/** @enum {string} */
var IgxTextAlign = {
    START: 'start',
    CENTER: 'center',
    END: 'end',
};
export { IgxTextAlign };
/** @enum {string} */
var IgxProgressType = {
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
var /**
 * @abstract
 */
BaseProgress = /** @class */ (function () {
    function BaseProgress() {
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
    Object.defineProperty(BaseProgress.prototype, "valueInPercent", {
        /**
         *Returns the `IgxLinearProgressBarComponent`/`IgxCircularProgressBarComponent` value in percentage.
         *```typescript
         *@ViewChild("MyProgressBar")
         *public progressBar: IgxLinearProgressBarComponent; // IgxCircularProgressBarComponent
         *public valuePercent(event){
         *    let percentValue = this.progressBar.valueInPercent;
         *    alert(percentValue);
         *}
         *```
         */
        get: /**
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
        function () {
            return this._valueInPercent;
        },
        /**
         *Sets the `IgxLinearProgressBarComponent`/`IgxCircularProgressBarComponent` value in percentage.
         *```typescript
         *@ViewChild("MyProgressBar")
         *public progressBar: IgxLinearProgressBarComponent; // IgxCircularProgressBarComponent
         *    public setValue(event){
         *    this.progressBar.valueInPercent = 56;
         *}
         * //...
         *```
         *```html
         *<button igxButton="fab" igxRipple="" (click)="setValue()">setValue</button>
         *```
         */
        set: /**
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
        function (value) {
            this._valueInPercent = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @hidden
     */
    /**
     * @hidden
     * @protected
     * @param {?} val
     * @param {?} step
     * @return {?}
     */
    BaseProgress.prototype.runAnimation = /**
     * @hidden
     * @protected
     * @param {?} val
     * @param {?} step
     * @return {?}
     */
    function (val, step) {
        var _this = this;
        this.requestAnimationId = requestAnimationFrame(function () { return _this.updateProgressSmoothly.call(_this, val, step); });
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @protected
     * @param {?} val
     * @param {?} step
     * @return {?}
     */
    BaseProgress.prototype.updateProgressSmoothly = /**
     * @hidden
     * @protected
     * @param {?} val
     * @param {?} step
     * @return {?}
     */
    function (val, step) {
        var _this = this;
        this._value += step;
        /** @type {?} */
        var passedValue = convertInPercentage(val, this._max);
        /** @type {?} */
        var progressValue = convertInPercentage(this._value, this._max);
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
            this.requestAnimationId = requestAnimationFrame(function () { return _this.updateProgressSmoothly.call(_this, val, step); });
        }
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @protected
     * @param {?} val
     * @return {?}
     */
    BaseProgress.prototype.updateProgressDirectly = /**
     * @hidden
     * @protected
     * @param {?} val
     * @return {?}
     */
    function (val) {
        this._value = val;
        this.valueInPercent = convertInPercentage(this._value, this._max);
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @protected
     * @param {?} currentValue
     * @param {?} prevValue
     * @param {?} step
     * @return {?}
     */
    BaseProgress.prototype.directionFlow = /**
     * @hidden
     * @protected
     * @param {?} currentValue
     * @param {?} prevValue
     * @param {?} step
     * @return {?}
     */
    function (currentValue, prevValue, step) {
        if (currentValue < prevValue) {
            return step;
        }
        return -step;
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @private
     * @param {?} val
     * @param {?} comparator
     * @param {?} step
     * @return {?}
     */
    BaseProgress.prototype.isInLimitRange = /**
     * @hidden
     * @private
     * @param {?} val
     * @param {?} comparator
     * @param {?} step
     * @return {?}
     */
    function (val, comparator, step) {
        return this.isExceedingUpperLimit(val, comparator, step) || this.isExceedingLowerLimit(val, comparator, step);
    };
    /**
     * @hidden
     *
     *
     * @param val
     * @param comparator
     * @param step
     */
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
    BaseProgress.prototype.isExceedingUpperLimit = /**
     * @hidden
     *
     *
     * @private
     * @param {?} val
     * @param {?} comparator
     * @param {?} step
     * @return {?}
     */
    function (val, comparator, step) {
        return val > comparator && step > 0;
    };
    /**
     * @hidden
     *
     * @param val
     * @param comparator
     * @param step
     */
    /**
     * @hidden
     *
     * @private
     * @param {?} val
     * @param {?} comparator
     * @param {?} step
     * @return {?}
     */
    BaseProgress.prototype.isExceedingLowerLimit = /**
     * @hidden
     *
     * @private
     * @param {?} val
     * @param {?} comparator
     * @param {?} step
     * @return {?}
     */
    function (val, comparator, step) {
        return val < comparator && step < 0;
    };
    /**
     * @hidden
     * @param step
     */
    /**
     * @hidden
     * @private
     * @param {?} val
     * @return {?}
     */
    BaseProgress.prototype.updateProgress = /**
     * @hidden
     * @private
     * @param {?} val
     * @return {?}
     */
    function (val) {
        this._value = val;
        this.valueInPercent = convertInPercentage(this._value, this._max);
    };
    return BaseProgress;
}());
/**
 * @abstract
 */
export { BaseProgress };
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
var NEXT_LINEAR_ID = 0;
/** @type {?} */
var NEXT_CIRCULAR_ID = 0;
var IgxLinearProgressBarComponent = /** @class */ (function (_super) {
    tslib_1.__extends(IgxLinearProgressBarComponent, _super);
    function IgxLinearProgressBarComponent() {
        var _this = _super.call(this) || this;
        _this.valueMin = 0;
        _this.cssClass = 'igx-linear-bar';
        /**
         * Set `IgxLinearProgressBarComponent` to have striped style. By default it is set to false.
         * ```html
         * <igx-linear-bar [striped]="true" [max]="200" [value]="50"></igx-linear-bar>
         * ```
         */
        _this.striped = false;
        /**
         * Set `IgxLinearProgressBarComponent` to have indeterminate. By default it is set to false.
         * ```html
         * <igx-linear-bar [indeterminate]="true"></igx-linear-bar>
         * ```
         */
        _this.indeterminate = false;
        /**
         * An \@Input property that sets the value of the `role` attribute. If not provided it will be automatically set to `progressbar`.
         * ```html
         * <igx-linear-bar role="progressbar"></igx-linear-bar>
         * ```
         */
        _this.role = 'progressbar';
        /**
         * An \@Input property that sets the value of `id` attribute. If not provided it will be automatically generated.
         * ```html
         * <igx-linear-bar [id]="'igx-linear-bar-55'" [striped]="true" [max]="200" [value]="50"></igx-linear-bar>
         * ```
         */
        _this.id = "igx-linear-bar-" + NEXT_LINEAR_ID++;
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
        _this.textAlign = IgxTextAlign.START;
        /**
         * Set the text to be visible. By default it is set to true.
         * ```html
         * <igx-linear-bar type="default" [textVisibility]="false"></igx-linear-bar>
         * ```
         */
        _this.textVisibility = true;
        /**
         * Set the position that defines if the text should be aligned above the progress line. By default is set to false.
         * ```html
         * <igx-linear-bar type="danger" [textTop]="true"></igx-linear-bar>
         * ```
         */
        _this.textTop = false;
        /**
         * Set type of the `IgxLinearProgressBarComponent`. Possible options - `default`, `success`, `info`, `warning`, and `danger`.
         * ```html
         * <igx-linear-bar [striped]="false" [max]="100" [value]="0" type="danger"></igx-linear-bar>
         * ```
         */
        _this.type = 'default';
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
        _this.onProgressChanged = new EventEmitter();
        return _this;
    }
    Object.defineProperty(IgxLinearProgressBarComponent.prototype, "animate", {
        /**
         *Returns whether the `IgxLinearProgressBarComponent` has animation true/false.
         *```typescript
         *@ViewChild("MyProgressBar")
         *public progressBar: IgxLinearProgressBarComponent;
         *public animationStatus(event) {
         *    let animationStatus = this.progressBar.animate;
         *    alert(animationStatus);
         *}
         *```
         */
        get: /**
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
        function () {
            return this._animate;
        },
        /**
         *Animation on progress `IgxLinearProgressBarComponent`. By default it is set to true.
         *```html
         *<igx-linear-bar [animate]="false" [striped]="true" [max]="200" [value]="50"></igx-linear-bar>
         *```
         */
        set: /**
         * Animation on progress `IgxLinearProgressBarComponent`. By default it is set to true.
         * ```html
         * <igx-linear-bar [animate]="false" [striped]="true" [max]="200" [value]="50"></igx-linear-bar>
         * ```
         * @param {?} animate
         * @return {?}
         */
        function (animate) {
            this._animate = animate;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxLinearProgressBarComponent.prototype, "max", {
        /**
         *Returns the the maximum progress value of the `IgxLinearProgressBarComponent`.
         *```typescript
         *@ViewChild("MyProgressBar")
         *public progressBar: IgxLinearProgressBarComponent;
         *public maxValue(event) {
         *    let max = this.progressBar.max;
         *    alert(max);
         *}
         *```
         */
        get: /**
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
        function () {
            return this._max;
        },
        /**
         *Set maximum value that can be passed. By default it is set to 100.
         *```html
         *<igx-linear-bar [striped]="false" [max]="200" [value]="0"></igx-linear-bar>
         *```
         */
        set: /**
         * Set maximum value that can be passed. By default it is set to 100.
         * ```html
         * <igx-linear-bar [striped]="false" [max]="200" [value]="0"></igx-linear-bar>
         * ```
         * @param {?} maxNum
         * @return {?}
         */
        function (maxNum) {
            this._max = maxNum;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxLinearProgressBarComponent.prototype, "step", {
        /**
         *Returns the value which update the progress indicator of the `IgxLinearProgressBarComponent`.
         *```typescript
         *@ViewChild("MyProgressBar")
         *public progressBar: IgxLinearProgressBarComponent;
         *public stepValue(event) {
         *    let step = this.progressBar.step;
         *    alert(step);
         *}
         *```
         */
        get: /**
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
        function () {
            if (this._step) {
                return this._step;
            }
            return this._max * ONE_PERCENT;
        },
        /**
         *Sets the value by which progress indicator is updated. By default it is 1% of the maximum value.
         *```html
         *<igx-linear-bar [striped]="false" [max]="200" [value]="0" [step]="1"></igx-linear-bar>
         *```
         */
        set: /**
         * Sets the value by which progress indicator is updated. By default it is 1% of the maximum value.
         * ```html
         * <igx-linear-bar [striped]="false" [max]="200" [value]="0" [step]="1"></igx-linear-bar>
         * ```
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._step = Number(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxLinearProgressBarComponent.prototype, "value", {
        /**
        *Returns value that indicates the current `IgxLinearProgressBarComponent` position.
        *```typescript
        *@ViewChild("MyProgressBar")
        *public progressBar: IgxLinearProgressBarComponent;
        *public getValue(event) {
        *    let value = this.progressBar.value;
        *    alert(value);
        *}
        *```
        */
        get: /**
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
        function () {
            return this._value;
        },
        /**
         *Set value that indicates the current `IgxLinearProgressBarComponent` position.
         *```html
         *<igx-linear-bar [striped]="false" [max]="200" [value]="50"></igx-linear-bar>
         *```
         */
        set: /**
         * Set value that indicates the current `IgxLinearProgressBarComponent` position.
         * ```html
         * <igx-linear-bar [striped]="false" [max]="200" [value]="50"></igx-linear-bar>
         * ```
         * @param {?} val
         * @return {?}
         */
        function (val) {
            val = Number(val);
            if (this._value === val || this.indeterminate) {
                return;
            }
            /** @type {?} */
            var valueInRange = getValueInProperRange(val, this.max);
            if (isNaN(valueInRange)) {
                return;
            }
            /** @type {?} */
            var changedValues = {
                currentValue: valueInRange,
                previousValue: this._value
            };
            /** @type {?} */
            var updateValue = _super.prototype.directionFlow.call(this, this._value, val, this.step);
            if (this._animate && val >= this.step) {
                _super.prototype.runAnimation.call(this, valueInRange, updateValue);
            }
            else {
                _super.prototype.updateProgressDirectly.call(this, valueInRange);
            }
            this.onProgressChanged.emit(changedValues);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxLinearProgressBarComponent.prototype, "danger", {
        /**
         * @hidden
         */
        get: /**
         * @hidden
         * @return {?}
         */
        function () {
            return this.type === IgxProgressType.DANGER;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxLinearProgressBarComponent.prototype, "info", {
        /**
         * @hidden
         */
        get: /**
         * @hidden
         * @return {?}
         */
        function () {
            return this.type === IgxProgressType.INFO;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxLinearProgressBarComponent.prototype, "warning", {
        /**
         * @hidden
         */
        get: /**
         * @hidden
         * @return {?}
         */
        function () {
            return this.type === IgxProgressType.WARNING;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxLinearProgressBarComponent.prototype, "success", {
        /**
         * @hidden
         */
        get: /**
         * @hidden
         * @return {?}
         */
        function () {
            return this.type === IgxProgressType.SUCCESS;
        },
        enumerable: true,
        configurable: true
    });
    IgxLinearProgressBarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'igx-linear-bar',
                    template: "<div class=\"igx-linear-bar__base\">\n    <div class=\"igx-linear-bar__indicator\"\n    [style.width.%]=\"valueInPercent\"></div>\n</div>\n\n<span\n    class=\"igx-linear-bar__value\"\n    [ngClass]=\"{\n        'igx-linear-bar__value--start': textAlign === 'start',\n        'igx-linear-bar__value--center': textAlign === 'center',\n        'igx-linear-bar__value--end': textAlign === 'end',\n        'igx-linear-bar__value--top': textTop,\n        'igx-linear-bar__value--hidden': !textVisibility\n    }\">\n        {{text ? text : valueInPercent + '%'}}\n</span>\n"
                }] }
    ];
    /** @nocollapse */
    IgxLinearProgressBarComponent.ctorParameters = function () { return []; };
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
    return IgxLinearProgressBarComponent;
}(BaseProgress));
export { IgxLinearProgressBarComponent };
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
var IgxCircularProgressBarComponent = /** @class */ (function (_super) {
    tslib_1.__extends(IgxCircularProgressBarComponent, _super);
    function IgxCircularProgressBarComponent(renderer) {
        var _this = _super.call(this) || this;
        _this.renderer = renderer;
        _this.STROKE_OPACITY_DVIDER = 100;
        _this.STROKE_OPACITY_ADDITION = .2;
        /**
         * @hidden
         */
        _this.cssClass = 'igx-circular-bar';
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
        _this.onProgressChanged = new EventEmitter();
        /**
         * An \@Input property that sets the value of `id` attribute. If not provided it will be automatically generated.
         * ```html
         * <igx-circular-bar [id]="'igx-circular-bar-55'" [value]="50"></igx-circular-bar>
         * ```
         */
        _this.id = "igx-circular-bar-" + NEXT_CIRCULAR_ID++;
        /**
         * An \@Input property that sets the value of the `indeterminate` attribute. If not provided it will be automatically set to false.
         * ```html
         * <igx-circular-bar [indeterminate]="true"></igx-circular-bar>
         * ```
         */
        _this.indeterminate = false;
        /**
         * Sets the text visibility. By default it is set to true.
         * ```html
         * <igx-circular-bar [textVisibility]="false"></igx-circular-bar>
         * ```
         */
        _this.textVisibility = true;
        _this._circleRadius = 46;
        _this._circumference = 2 * Math.PI * _this._circleRadius;
        return _this;
    }
    Object.defineProperty(IgxCircularProgressBarComponent.prototype, "context", {
        /**
         * @hidden
        */
        get: /**
         * @hidden
         * @return {?}
         */
        function () {
            return {
                $implicit: { value: this.value, valueInPercent: this.valueInPercent, max: this.max }
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxCircularProgressBarComponent.prototype, "animate", {
        /**
         *Returns whether the `IgxCircularProgressBarComponent` has animation true/false.
         *```typescript
         *@ViewChild("MyProgressBar")
         *public progressBar: IgxCircularProgressBarComponent;
         *public animationStatus(event) {
         *    let animationStatus = this.progressBar.animate;
         *    alert(animationStatus);
         *}
         *```
         */
        get: /**
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
        function () {
            return this._animate;
        },
        /**
        *Animation on progress `IgxCircularProgressBarComponent`. By default it is set to true.
         *```html
         *<igx-circular-bar [animate]="false" [value]="50"></igx-circular-bar>
         *```
         */
        set: /**
         * Animation on progress `IgxCircularProgressBarComponent`. By default it is set to true.
         * ```html
         * <igx-circular-bar [animate]="false" [value]="50"></igx-circular-bar>
         * ```
         * @param {?} animate
         * @return {?}
         */
        function (animate) {
            this._animate = animate;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxCircularProgressBarComponent.prototype, "max", {
        /**
         *Returns the the maximum progress value of the `IgxCircularProgressBarComponent`.
         *```typescript
         *@ViewChild("MyProgressBar")
         *public progressBar: IgxCircularProgressBarComponent;
         *public maxValue(event) {
         *    let max = this.progressBar.max;
         *    alert(max);
         *}
         *```
         *```html
         *<igx-circular-bar [max]="245" [animate]="false" [value]="currentValue"></igx-circular-bar>
         *```
         */
        get: /**
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
        function () {
            return this._max;
        },
        /**
         *Set maximum value that can be passed. By default it is set to 100.
         *```html
         *<igx-circular-bar [max]="200" [value]="0"></igx-circular-bar>
         *```
         */
        set: /**
         * Set maximum value that can be passed. By default it is set to 100.
         * ```html
         * <igx-circular-bar [max]="200" [value]="0"></igx-circular-bar>
         * ```
         * @param {?} maxNum
         * @return {?}
         */
        function (maxNum) {
            this._max = maxNum;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxCircularProgressBarComponent.prototype, "step", {
        /**
         *Returns the value which update the progress indicator of the `IgxCircularProgressBarComponent`.
         *```typescript
         *@ViewChild("MyProgressBar")
         *public progressBar: IgxCircularProgressBarComponent;
         *public stepValue(event) {
         *    let step = this.progressBar.step;
         *    alert(step);
         *}
         *```
         */
        get: /**
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
        function () {
            if (this._step) {
                return this._step;
            }
            return this._max * ONE_PERCENT;
        },
        /**
         *Sets the value by which progress indicator is updated. By default it is 1% of the maximum value.
         *```html
         *<igx-circular-bar [striped]="false" [max]="200" [value]="0" [step]="1"></igx-circular-bar>
         *```
        */
        set: /**
         * Sets the value by which progress indicator is updated. By default it is 1% of the maximum value.
         * ```html
         * <igx-circular-bar [striped]="false" [max]="200" [value]="0" [step]="1"></igx-circular-bar>
         * ```
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._step = Number(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxCircularProgressBarComponent.prototype, "value", {
        /**
         *Returns value that indicates the current `IgxCircularProgressBarComponent` position.
         *```typescript
         *@ViewChild("MyProgressBar")
         *public progressBar: IgxCircularProgressBarComponent;
         *public getValue(event) {
         *    let value = this.progressBar.value;
         *    alert(value);
         *}
         *```
         *```html
         *<button igxButton="fab" igxRipple="" (click)="getValue()">Click</button>
         *```
         */
        get: /**
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
        function () {
            return this._value;
        },
        /**
         *Set value that indicates the current `IgxCircularProgressBarComponent` position.
         *```html
         *<igx-circular-bar [value]="50"></igx-circular-bar>
         *```
         */
        set: /**
         * Set value that indicates the current `IgxCircularProgressBarComponent` position.
         * ```html
         * <igx-circular-bar [value]="50"></igx-circular-bar>
         * ```
         * @param {?} val
         * @return {?}
         */
        function (val) {
            val = Number(val);
            if (this._value === val || this.indeterminate) {
                return;
            }
            /** @type {?} */
            var valueInProperRange = getValueInProperRange(val, this.max);
            if (isNaN(valueInProperRange)) {
                return;
            }
            /** @type {?} */
            var changedValues = {
                currentValue: valueInProperRange,
                previousValue: this._value
            };
            /** @type {?} */
            var updateValue = _super.prototype.directionFlow.call(this, this._value, val, this.step);
            if (this.animate && val >= this.step) {
                _super.prototype.runAnimation.call(this, valueInProperRange, updateValue);
            }
            else {
                this.updateProgressDirectly(valueInProperRange);
            }
            this.onProgressChanged.emit(changedValues);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} val
     * @param {?} step
     * @return {?}
     */
    IgxCircularProgressBarComponent.prototype.updateProgressSmoothly = /**
     * @hidden
     * @param {?} val
     * @param {?} step
     * @return {?}
     */
    function (val, step) {
        // Set frames for the animation
        /** @type {?} */
        var FRAMES = [{
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
        _super.prototype.updateProgressSmoothly.call(this, val, step);
    };
    Object.defineProperty(IgxCircularProgressBarComponent.prototype, "textContent", {
        /**
         * @hidden
        */
        get: /**
         * @hidden
         * @return {?}
         */
        function () {
            return this.text;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @hidden
    */
    /**
     * @hidden
     * @param {?} val
     * @return {?}
     */
    IgxCircularProgressBarComponent.prototype.updateProgressDirectly = /**
     * @hidden
     * @param {?} val
     * @return {?}
     */
    function (val) {
        _super.prototype.updateProgressDirectly.call(this, val);
        this.renderer.setStyle(this._svgCircle.nativeElement, 'stroke-dashoffset', this.getProgress(this.valueInPercent));
        this.renderer.setStyle(this._svgCircle.nativeElement, 'stroke-opacity', (this.valueInPercent / this.STROKE_OPACITY_DVIDER) + this.STROKE_OPACITY_ADDITION);
    };
    /**
     * @private
     * @param {?} percentage
     * @return {?}
     */
    IgxCircularProgressBarComponent.prototype.getProgress = /**
     * @private
     * @param {?} percentage
     * @return {?}
     */
    function (percentage) {
        return this._circumference - (percentage * this._circumference / 100);
    };
    IgxCircularProgressBarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'igx-circular-bar',
                    template: "<svg #svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\"\n    viewBox=\"0 0 100 100\"\n    preserveAspectRatio=\"xMidYMid meet\"\n    role=\"progressbar\"\n    aria-valuemin=\"0\"\n    [attr.aria-valuemax]=\"max\"\n    [attr.aria-valuenow]=\"value\">\n    <circle class=\"igx-circular-bar__inner\" cx=\"50\" cy=\"50\" r=\"46\" />\n    <circle #circle class=\"igx-circular-bar__outer\" cx=\"50\" cy=\"50\" r=\"46\" />\n    <text [class.igx-circular-bar__text--hidden]=\"!textVisibility\" text-anchor=\"middle\" x=\"50\" y=\"60\">\n        <ng-container *ngTemplateOutlet=\"textTemplate ? textTemplate.template : defaultTextTemplate; context: context\">\n        </ng-container>\n    </text>\n\n    <ng-template #defaultTextTemplate>\n        <tspan class=\"igx-circular-bar__text\"> {{textContent ? textContent: valueInPercent + '%'}}</tspan>\n    </ng-template>\n</svg>\n"
                }] }
    ];
    /** @nocollapse */
    IgxCircularProgressBarComponent.ctorParameters = function () { return [
        { type: Renderer2 }
    ]; };
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
    return IgxCircularProgressBarComponent;
}(BaseProgress));
export { IgxCircularProgressBarComponent };
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
export function getValueInProperRange(value, max, min) {
    if (min === void 0) { min = 0; }
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
var IgxProgressBarModule = /** @class */ (function () {
    function IgxProgressBarModule() {
    }
    IgxProgressBarModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [IgxLinearProgressBarComponent, IgxCircularProgressBarComponent, IgxProcessBarTextTemplateDirective],
                    exports: [IgxLinearProgressBarComponent, IgxCircularProgressBarComponent, IgxProcessBarTextTemplateDirective],
                    imports: [CommonModule]
                },] }
    ];
    return IgxProgressBarModule;
}());
export { IgxProgressBarModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3NiYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vaWduaXRldWktYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9wcm9ncmVzc2Jhci9wcm9ncmVzc2Jhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUNILFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLFdBQVcsRUFDWCxLQUFLLEVBQ0wsUUFBUSxFQUNSLE1BQU0sRUFDTixTQUFTLEVBQ1QsU0FBUyxFQUNULFlBQVksRUFDZixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsa0NBQWtDLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7SUFFcEUsV0FBVyxHQUFHLElBQUk7O0lBQ2xCLFNBQVMsR0FBRyxDQUFDOzs7SUFHZixPQUFRLE9BQU87SUFDZixRQUFTLFFBQVE7SUFDakIsS0FBTSxLQUFLOzs7OztJQUlYLFFBQVMsUUFBUTtJQUNqQixNQUFPLE1BQU07SUFDYixTQUFVLFNBQVM7SUFDbkIsU0FBVSxTQUFTOzs7Ozs7QUFHdkIsOENBR0M7OztJQUZHLGlEQUFzQjs7SUFDdEIsZ0RBQXFCOzs7OztBQUd6Qjs7OztJQUFBOzs7O1FBSVksdUJBQWtCLEdBQVcsU0FBUyxDQUFDOzs7O1FBS3JDLG9CQUFlLEdBQUcsU0FBUyxDQUFDOzs7O1FBSTVCLFNBQUksR0FBRyxHQUFHLENBQUM7Ozs7UUFJWCxXQUFNLEdBQUcsU0FBUyxDQUFDOzs7O1FBSW5CLGFBQVEsR0FBRyxJQUFJLENBQUM7SUE0SDlCLENBQUM7SUExR0csc0JBQVcsd0NBQWM7UUFYekI7Ozs7Ozs7Ozs7V0FVRzs7Ozs7Ozs7Ozs7OztRQUNIO1lBQ0ksT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDO1FBQ2hDLENBQUM7UUFFRDs7Ozs7Ozs7Ozs7OztXQWFHOzs7Ozs7Ozs7Ozs7Ozs7OztR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LCtCQUErQjs7Ozs7O0lBRXhDLGdFQUE2Qzs7Ozs7SUFDN0Msa0VBQThDOzs7OztJQUc5QyxtREFDcUM7Ozs7Ozs7Ozs7Ozs7O0lBY3JDLDREQUN3RTs7Ozs7Ozs7SUFReEUsNkNBRXFEOzs7Ozs7OztJQVFyRCx3REFFNkI7Ozs7Ozs7O0lBUTdCLHlEQUM2Qjs7Ozs7Ozs7Ozs7SUFXN0IsK0NBQ29COztJQUVwQix1REFDd0Q7Ozs7O0lBbUp4RCx3REFBMkI7Ozs7O0lBQzNCLHlEQUEwRDs7Ozs7SUFFMUQscURBQXNFOzs7OztJQUUxRCxtREFBMkI7Ozs7Ozs7O0FBcUQzQyxNQUFNLFVBQVUscUJBQXFCLENBQUMsS0FBYSxFQUFFLEdBQVcsRUFBRSxHQUFPO0lBQVAsb0JBQUEsRUFBQSxPQUFPO0lBQ3JFLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztBQUMvQyxDQUFDOzs7Ozs7QUFFRCxNQUFNLFVBQVUsbUJBQW1CLENBQUMsS0FBYSxFQUFFLEdBQVc7SUFDMUQsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxLQUFLLEdBQUcsR0FBRyxDQUFDLENBQUM7QUFDekMsQ0FBQzs7OztBQUtEO0lBQUE7SUFNQSxDQUFDOztnQkFOQSxRQUFRLFNBQUM7b0JBQ04sWUFBWSxFQUFFLENBQUMsNkJBQTZCLEVBQUUsK0JBQStCLEVBQUUsa0NBQWtDLENBQUM7b0JBQ2xILE9BQU8sRUFBRSxDQUFDLDZCQUE2QixFQUFFLCtCQUErQixFQUFFLGtDQUFrQyxDQUFDO29CQUM3RyxPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7aUJBQzFCOztJQUVELDJCQUFDO0NBQUEsQUFORCxJQU1DO1NBRFksb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7XG4gICAgQ29tcG9uZW50LFxuICAgIEVsZW1lbnRSZWYsXG4gICAgRXZlbnRFbWl0dGVyLFxuICAgIEhvc3RCaW5kaW5nLFxuICAgIElucHV0LFxuICAgIE5nTW9kdWxlLFxuICAgIE91dHB1dCxcbiAgICBSZW5kZXJlcjIsXG4gICAgVmlld0NoaWxkLFxuICAgIENvbnRlbnRDaGlsZFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElneFByb2Nlc3NCYXJUZXh0VGVtcGxhdGVEaXJlY3RpdmUgfSBmcm9tICcuL3Byb2dyZXNzYmFyLmNvbW1vbic7XG5cbmNvbnN0IE9ORV9QRVJDRU5UID0gMC4wMTtcbmNvbnN0IE1JTl9WQUxVRSA9IDA7XG5cbmV4cG9ydCBlbnVtIElneFRleHRBbGlnbiB7XG4gICAgU1RBUlQgPSAnc3RhcnQnLFxuICAgIENFTlRFUiA9ICdjZW50ZXInLFxuICAgIEVORCA9ICdlbmQnXG59XG5cbmV4cG9ydCBlbnVtIElneFByb2dyZXNzVHlwZSB7XG4gICAgREFOR0VSID0gJ2RhbmdlcicsXG4gICAgSU5GTyA9ICdpbmZvJyxcbiAgICBXQVJOSU5HID0gJ3dhcm5pbmcnLFxuICAgIFNVQ0NFU1MgPSAnc3VjY2Vzcydcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJQ2hhbmdlUHJvZ3Jlc3NFdmVudEFyZ3Mge1xuICAgIHByZXZpb3VzVmFsdWU6IG51bWJlcjtcbiAgICBjdXJyZW50VmFsdWU6IG51bWJlcjtcbn1cblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEJhc2VQcm9ncmVzcyB7XG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHByaXZhdGUgcmVxdWVzdEFuaW1hdGlvbklkOiBudW1iZXIgPSB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHJvdGVjdGVkIF92YWx1ZUluUGVyY2VudCA9IE1JTl9WQUxVRTtcbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHJvdGVjdGVkIF9tYXggPSAxMDA7XG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHByb3RlY3RlZCBfdmFsdWUgPSBNSU5fVkFMVUU7XG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHByb3RlY3RlZCBfYW5pbWF0ZSA9IHRydWU7XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHJvdGVjdGVkIF9zdGVwO1xuXG4gICAgLyoqXG4gICAgICpSZXR1cm5zIHRoZSBgSWd4TGluZWFyUHJvZ3Jlc3NCYXJDb21wb25lbnRgL2BJZ3hDaXJjdWxhclByb2dyZXNzQmFyQ29tcG9uZW50YCB2YWx1ZSBpbiBwZXJjZW50YWdlLlxuICAgICAqYGBgdHlwZXNjcmlwdFxuICAgICAqQFZpZXdDaGlsZChcIk15UHJvZ3Jlc3NCYXJcIilcbiAgICAgKnB1YmxpYyBwcm9ncmVzc0JhcjogSWd4TGluZWFyUHJvZ3Jlc3NCYXJDb21wb25lbnQ7IC8vIElneENpcmN1bGFyUHJvZ3Jlc3NCYXJDb21wb25lbnRcbiAgICAgKnB1YmxpYyB2YWx1ZVBlcmNlbnQoZXZlbnQpe1xuICAgICAqICAgIGxldCBwZXJjZW50VmFsdWUgPSB0aGlzLnByb2dyZXNzQmFyLnZhbHVlSW5QZXJjZW50O1xuICAgICAqICAgIGFsZXJ0KHBlcmNlbnRWYWx1ZSk7XG4gICAgICp9XG4gICAgICpgYGBcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0IHZhbHVlSW5QZXJjZW50KCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl92YWx1ZUluUGVyY2VudDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlNldHMgdGhlIGBJZ3hMaW5lYXJQcm9ncmVzc0JhckNvbXBvbmVudGAvYElneENpcmN1bGFyUHJvZ3Jlc3NCYXJDb21wb25lbnRgIHZhbHVlIGluIHBlcmNlbnRhZ2UuXG4gICAgICpgYGB0eXBlc2NyaXB0XG4gICAgICpAVmlld0NoaWxkKFwiTXlQcm9ncmVzc0JhclwiKVxuICAgICAqcHVibGljIHByb2dyZXNzQmFyOiBJZ3hMaW5lYXJQcm9ncmVzc0JhckNvbXBvbmVudDsgLy8gSWd4Q2lyY3VsYXJQcm9ncmVzc0JhckNvbXBvbmVudFxuICAgICAqICAgIHB1YmxpYyBzZXRWYWx1ZShldmVudCl7XG4gICAgICogICAgdGhpcy5wcm9ncmVzc0Jhci52YWx1ZUluUGVyY2VudCA9IDU2O1xuICAgICAqfVxuICAgICAqIC8vLi4uXG4gICAgICpgYGBcbiAgICAgKmBgYGh0bWxcbiAgICAgKjxidXR0b24gaWd4QnV0dG9uPVwiZmFiXCIgaWd4UmlwcGxlPVwiXCIgKGNsaWNrKT1cInNldFZhbHVlKClcIj5zZXRWYWx1ZTwvYnV0dG9uPlxuICAgICAqYGBgXG4gICAgICovXG4gICAgcHVibGljIHNldCB2YWx1ZUluUGVyY2VudCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX3ZhbHVlSW5QZXJjZW50ID0gdmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHByb3RlY3RlZCBydW5BbmltYXRpb24odmFsOiBudW1iZXIsIHN0ZXA6IG51bWJlcikge1xuICAgICAgICB0aGlzLnJlcXVlc3RBbmltYXRpb25JZCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShcbiAgICAgICAgICAgICgpID0+IHRoaXMudXBkYXRlUHJvZ3Jlc3NTbW9vdGhseS5jYWxsKHRoaXMsIHZhbCwgc3RlcCkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgdXBkYXRlUHJvZ3Jlc3NTbW9vdGhseSh2YWw6IG51bWJlciwgc3RlcDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX3ZhbHVlICs9IHN0ZXA7XG4gICAgICAgIGNvbnN0IHBhc3NlZFZhbHVlID0gY29udmVydEluUGVyY2VudGFnZSh2YWwsIHRoaXMuX21heCk7XG4gICAgICAgIGNvbnN0IHByb2dyZXNzVmFsdWUgPSBjb252ZXJ0SW5QZXJjZW50YWdlKHRoaXMuX3ZhbHVlLCB0aGlzLl9tYXgpO1xuICAgICAgICBpZiAodGhpcy52YWx1ZUluUGVyY2VudCA9PT0gcGFzc2VkVmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlUHJvZ3Jlc3ModmFsKTtcbiAgICAgICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMucmVxdWVzdEFuaW1hdGlvbklkKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmlzSW5MaW1pdFJhbmdlKHByb2dyZXNzVmFsdWUsIHBhc3NlZFZhbHVlLCBzdGVwKSkge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVQcm9ncmVzcyh2YWwpO1xuICAgICAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5yZXF1ZXN0QW5pbWF0aW9uSWQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy52YWx1ZUluUGVyY2VudCA9IHByb2dyZXNzVmFsdWU7XG4gICAgICAgICAgICB0aGlzLnJlcXVlc3RBbmltYXRpb25JZCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB0aGlzLnVwZGF0ZVByb2dyZXNzU21vb3RobHkuY2FsbCh0aGlzLCB2YWwsIHN0ZXApKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgdXBkYXRlUHJvZ3Jlc3NEaXJlY3RseSh2YWw6IG51bWJlcikge1xuICAgICAgICB0aGlzLl92YWx1ZSA9IHZhbDtcbiAgICAgICAgdGhpcy52YWx1ZUluUGVyY2VudCA9IGNvbnZlcnRJblBlcmNlbnRhZ2UodGhpcy5fdmFsdWUsIHRoaXMuX21heCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHByb3RlY3RlZCBkaXJlY3Rpb25GbG93KGN1cnJlbnRWYWx1ZTogbnVtYmVyLCBwcmV2VmFsdWU6IG51bWJlciwgc3RlcDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgaWYgKGN1cnJlbnRWYWx1ZSA8IHByZXZWYWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHN0ZXA7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gLXN0ZXA7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHByaXZhdGUgaXNJbkxpbWl0UmFuZ2UodmFsOiBudW1iZXIsIGNvbXBhcmF0b3I6IG51bWJlciwgc3RlcDogbnVtYmVyKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmlzRXhjZWVkaW5nVXBwZXJMaW1pdCh2YWwsIGNvbXBhcmF0b3IsIHN0ZXApIHx8IHRoaXMuaXNFeGNlZWRpbmdMb3dlckxpbWl0KHZhbCwgY29tcGFyYXRvciwgc3RlcCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gdmFsXG4gICAgICogQHBhcmFtIGNvbXBhcmF0b3JcbiAgICAgKiBAcGFyYW0gc3RlcFxuICAgICAqL1xuICAgIHByaXZhdGUgaXNFeGNlZWRpbmdVcHBlckxpbWl0KHZhbDogbnVtYmVyLCBjb21wYXJhdG9yOiBudW1iZXIsIHN0ZXA6IG51bWJlcikge1xuICAgICAgICByZXR1cm4gdmFsID4gY29tcGFyYXRvciAmJiBzdGVwID4gMDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gdmFsXG4gICAgICogQHBhcmFtIGNvbXBhcmF0b3JcbiAgICAgKiBAcGFyYW0gc3RlcFxuICAgICAqL1xuICAgIHByaXZhdGUgaXNFeGNlZWRpbmdMb3dlckxpbWl0KHZhbDogbnVtYmVyLCBjb21wYXJhdG9yOiBudW1iZXIsIHN0ZXA6IG51bWJlcikge1xuICAgICAgICByZXR1cm4gdmFsIDwgY29tcGFyYXRvciAmJiBzdGVwIDwgMDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICogQHBhcmFtIHN0ZXBcbiAgICAgKi9cbiAgICBwcml2YXRlIHVwZGF0ZVByb2dyZXNzKHZhbDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX3ZhbHVlID0gdmFsO1xuICAgICAgICB0aGlzLnZhbHVlSW5QZXJjZW50ID0gY29udmVydEluUGVyY2VudGFnZSh0aGlzLl92YWx1ZSwgdGhpcy5fbWF4KTtcbiAgICB9XG59XG5sZXQgTkVYVF9MSU5FQVJfSUQgPSAwO1xubGV0IE5FWFRfQ0lSQ1VMQVJfSUQgPSAwO1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdpZ3gtbGluZWFyLWJhcicsXG4gICAgdGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZXMvbGluZWFyLWJhci5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgSWd4TGluZWFyUHJvZ3Jlc3NCYXJDb21wb25lbnQgZXh0ZW5kcyBCYXNlUHJvZ3Jlc3Mge1xuXG4gICAgLyoqXG4gICAgICpBbmltYXRpb24gb24gcHJvZ3Jlc3MgYElneExpbmVhclByb2dyZXNzQmFyQ29tcG9uZW50YC4gQnkgZGVmYXVsdCBpdCBpcyBzZXQgdG8gdHJ1ZS5cbiAgICAgKmBgYGh0bWxcbiAgICAgKjxpZ3gtbGluZWFyLWJhciBbYW5pbWF0ZV09XCJmYWxzZVwiIFtzdHJpcGVkXT1cInRydWVcIiBbbWF4XT1cIjIwMFwiIFt2YWx1ZV09XCI1MFwiPjwvaWd4LWxpbmVhci1iYXI+XG4gICAgICpgYGBcbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHNldCBhbmltYXRlKGFuaW1hdGU6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5fYW5pbWF0ZSA9IGFuaW1hdGU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpSZXR1cm5zIHdoZXRoZXIgdGhlIGBJZ3hMaW5lYXJQcm9ncmVzc0JhckNvbXBvbmVudGAgaGFzIGFuaW1hdGlvbiB0cnVlL2ZhbHNlLlxuICAgICAqYGBgdHlwZXNjcmlwdFxuICAgICAqQFZpZXdDaGlsZChcIk15UHJvZ3Jlc3NCYXJcIilcbiAgICAgKnB1YmxpYyBwcm9ncmVzc0JhcjogSWd4TGluZWFyUHJvZ3Jlc3NCYXJDb21wb25lbnQ7XG4gICAgICpwdWJsaWMgYW5pbWF0aW9uU3RhdHVzKGV2ZW50KSB7XG4gICAgICogICAgbGV0IGFuaW1hdGlvblN0YXR1cyA9IHRoaXMucHJvZ3Jlc3NCYXIuYW5pbWF0ZTtcbiAgICAgKiAgICBhbGVydChhbmltYXRpb25TdGF0dXMpO1xuICAgICAqfVxuICAgICAqYGBgXG4gICAgICovXG4gICAgZ2V0IGFuaW1hdGUoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hbmltYXRlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqU2V0IG1heGltdW0gdmFsdWUgdGhhdCBjYW4gYmUgcGFzc2VkLiBCeSBkZWZhdWx0IGl0IGlzIHNldCB0byAxMDAuXG4gICAgICpgYGBodG1sXG4gICAgICo8aWd4LWxpbmVhci1iYXIgW3N0cmlwZWRdPVwiZmFsc2VcIiBbbWF4XT1cIjIwMFwiIFt2YWx1ZV09XCIwXCI+PC9pZ3gtbGluZWFyLWJhcj5cbiAgICAgKmBgYFxuICAgICAqL1xuICAgIEBIb3N0QmluZGluZygnYXR0ci5hcmlhLXZhbHVlbWF4JylcbiAgICBASW5wdXQoKVxuICAgIHNldCBtYXgobWF4TnVtOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fbWF4ID0gbWF4TnVtO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqUmV0dXJucyB0aGUgdGhlIG1heGltdW0gcHJvZ3Jlc3MgdmFsdWUgb2YgdGhlIGBJZ3hMaW5lYXJQcm9ncmVzc0JhckNvbXBvbmVudGAuXG4gICAgICpgYGB0eXBlc2NyaXB0XG4gICAgICpAVmlld0NoaWxkKFwiTXlQcm9ncmVzc0JhclwiKVxuICAgICAqcHVibGljIHByb2dyZXNzQmFyOiBJZ3hMaW5lYXJQcm9ncmVzc0JhckNvbXBvbmVudDtcbiAgICAgKnB1YmxpYyBtYXhWYWx1ZShldmVudCkge1xuICAgICAqICAgIGxldCBtYXggPSB0aGlzLnByb2dyZXNzQmFyLm1heDtcbiAgICAgKiAgICBhbGVydChtYXgpO1xuICAgICAqfVxuICAgICAqYGBgXG4gICAgICovXG4gICAgZ2V0IG1heCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX21heDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlJldHVybnMgdGhlIHZhbHVlIHdoaWNoIHVwZGF0ZSB0aGUgcHJvZ3Jlc3MgaW5kaWNhdG9yIG9mIHRoZSBgSWd4TGluZWFyUHJvZ3Jlc3NCYXJDb21wb25lbnRgLlxuICAgICAqYGBgdHlwZXNjcmlwdFxuICAgICAqQFZpZXdDaGlsZChcIk15UHJvZ3Jlc3NCYXJcIilcbiAgICAgKnB1YmxpYyBwcm9ncmVzc0JhcjogSWd4TGluZWFyUHJvZ3Jlc3NCYXJDb21wb25lbnQ7XG4gICAgICpwdWJsaWMgc3RlcFZhbHVlKGV2ZW50KSB7XG4gICAgICogICAgbGV0IHN0ZXAgPSB0aGlzLnByb2dyZXNzQmFyLnN0ZXA7XG4gICAgICogICAgYWxlcnQoc3RlcCk7XG4gICAgICp9XG4gICAgICpgYGBcbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIGdldCBzdGVwKCk6IG51bWJlciB7XG4gICAgICAgIGlmICh0aGlzLl9zdGVwKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fc3RlcDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLl9tYXggKiBPTkVfUEVSQ0VOVDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlNldHMgdGhlIHZhbHVlIGJ5IHdoaWNoIHByb2dyZXNzIGluZGljYXRvciBpcyB1cGRhdGVkLiBCeSBkZWZhdWx0IGl0IGlzIDElIG9mIHRoZSBtYXhpbXVtIHZhbHVlLlxuICAgICAqYGBgaHRtbFxuICAgICAqPGlneC1saW5lYXItYmFyIFtzdHJpcGVkXT1cImZhbHNlXCIgW21heF09XCIyMDBcIiBbdmFsdWVdPVwiMFwiIFtzdGVwXT1cIjFcIj48L2lneC1saW5lYXItYmFyPlxuICAgICAqYGBgXG4gICAgICovXG4gICAgc2V0IHN0ZXAodmFsOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fc3RlcCA9IE51bWJlcih2YWwpO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIEBIb3N0QmluZGluZygnYXR0ci5hcmlhLXZhbHVlbWluJylcbiAgICBwdWJsaWMgdmFsdWVNaW4gPSAwO1xuXG4gICAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pZ3gtbGluZWFyLWJhcicpXG4gICAgcHVibGljIGNzc0NsYXNzID0gJ2lneC1saW5lYXItYmFyJztcblxuICAgIC8qKlxuICAgICAqU2V0IGBJZ3hMaW5lYXJQcm9ncmVzc0JhckNvbXBvbmVudGAgdG8gaGF2ZSBzdHJpcGVkIHN0eWxlLiBCeSBkZWZhdWx0IGl0IGlzIHNldCB0byBmYWxzZS5cbiAgICAgKmBgYGh0bWxcbiAgICAgKjxpZ3gtbGluZWFyLWJhciBbc3RyaXBlZF09XCJ0cnVlXCIgW21heF09XCIyMDBcIiBbdmFsdWVdPVwiNTBcIj48L2lneC1saW5lYXItYmFyPlxuICAgICAqYGBgXG4gICAgICovXG4gICAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pZ3gtbGluZWFyLWJhci0tc3RyaXBlZCcpXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgc3RyaXBlZCA9IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICpTZXQgYElneExpbmVhclByb2dyZXNzQmFyQ29tcG9uZW50YCB0byBoYXZlIGluZGV0ZXJtaW5hdGUuIEJ5IGRlZmF1bHQgaXQgaXMgc2V0IHRvIGZhbHNlLlxuICAgICAqYGBgaHRtbFxuICAgICAqPGlneC1saW5lYXItYmFyIFtpbmRldGVybWluYXRlXT1cInRydWVcIj48L2lneC1saW5lYXItYmFyPlxuICAgICAqYGBgXG4gICAgICovXG4gICAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pZ3gtbGluZWFyLWJhci0taW5kZXRlcm1pbmF0ZScpXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgaW5kZXRlcm1pbmF0ZSA9IGZhbHNlO1xuXG4gICAgLyoqQW4gQElucHV0IHByb3BlcnR5IHRoYXQgc2V0cyB0aGUgdmFsdWUgb2YgdGhlIGByb2xlYCBhdHRyaWJ1dGUuIElmIG5vdCBwcm92aWRlZCBpdCB3aWxsIGJlIGF1dG9tYXRpY2FsbHkgc2V0IHRvIGBwcm9ncmVzc2JhcmAuXG4gICAgICogYGBgaHRtbFxuICAgICAqPGlneC1saW5lYXItYmFyIHJvbGU9XCJwcm9ncmVzc2JhclwiPjwvaWd4LWxpbmVhci1iYXI+XG4gICAgICogYGBgXG4gICAgICovXG4gICAgQEhvc3RCaW5kaW5nKCdhdHRyLnJvbGUnKVxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHJvbGUgPSAncHJvZ3Jlc3NiYXInO1xuXG4gICAgLyoqQW4gQElucHV0IHByb3BlcnR5IHRoYXQgc2V0cyB0aGUgdmFsdWUgb2YgYGlkYCBhdHRyaWJ1dGUuIElmIG5vdCBwcm92aWRlZCBpdCB3aWxsIGJlIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkLlxuICAgICAqIGBgYGh0bWxcbiAgICAgKjxpZ3gtbGluZWFyLWJhciBbaWRdPVwiJ2lneC1saW5lYXItYmFyLTU1J1wiIFtzdHJpcGVkXT1cInRydWVcIiBbbWF4XT1cIjIwMFwiIFt2YWx1ZV09XCI1MFwiPjwvaWd4LWxpbmVhci1iYXI+XG4gICAgICogYGBgXG4gICAgICovXG4gICAgQEhvc3RCaW5kaW5nKCdhdHRyLmlkJylcbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBpZCA9IGBpZ3gtbGluZWFyLWJhci0ke05FWFRfTElORUFSX0lEKyt9YDtcblxuICAgIC8qKlxuICAgICAqU2V0IHRoZSBwb3NpdGlvbiB0aGF0IGRlZmluZXMgd2hlcmUgdGhlIHRleHQgaXMgYWxpZ25lZC5cbiAgICAgUG9zc2libGUgb3B0aW9ucyAtIGBJZ3hUZXh0QWxpZ24uU1RBUlRgIChkZWZhdWx0KSwgYElneFRleHRBbGlnbi5DRU5URVJgLCBgSWd4VGV4dEFsaWduLkVORGAuXG4gICAgICpgYGB0eXBlc2NyaXB0XG4gICAgICpwdWJsaWMgcG9zaXRpb25DZW50ZXI6IElneFRleHRBbGlnbjtcbiAgICAgKnB1YmxpYyBuZ09uSW5pdCgpIHtcbiAgICAgKiAgICB0aGlzLnBvc2l0aW9uQ2VudGVyID0gSWd4VGV4dEFsaWduLkNFTlRFUjtcbiAgICAgKn1cbiAgICAgKiAvLy4uLlxuICAgICAqYGBgXG4gICAgICogYGBgaHRtbFxuICAgICAqPGlneC1saW5lYXItYmFyIHR5cGU9XCJ3YXJuaW5nXCIgW3RleHRdPVwiJ0N1c3RvbSB0ZXh0J1wiIFt0ZXh0QWxpZ25dPVwicG9zaXRpb25DZW50ZXJcIiBbc3RyaXBlZF09XCJ0cnVlXCI+PC9pZ3gtbGluZWFyLWJhcj5cbiAgICAgKmBgYFxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHRleHRBbGlnbjogSWd4VGV4dEFsaWduID0gSWd4VGV4dEFsaWduLlNUQVJUO1xuXG4gICAgLyoqXG4gICAgICpTZXQgdGhlIHRleHQgdG8gYmUgdmlzaWJsZS4gQnkgZGVmYXVsdCBpdCBpcyBzZXQgdG8gdHJ1ZS5cbiAgICAgKiBgYGBodG1sXG4gICAgICo8aWd4LWxpbmVhci1iYXIgdHlwZT1cImRlZmF1bHRcIiBbdGV4dFZpc2liaWxpdHldPVwiZmFsc2VcIj48L2lneC1saW5lYXItYmFyPlxuICAgICAqYGBgXG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgdGV4dFZpc2liaWxpdHkgPSB0cnVlO1xuXG4gICAgLyoqXG4gICAgICpTZXQgdGhlIHBvc2l0aW9uIHRoYXQgZGVmaW5lcyBpZiB0aGUgdGV4dCBzaG91bGQgYmUgYWxpZ25lZCBhYm92ZSB0aGUgcHJvZ3Jlc3MgbGluZS4gQnkgZGVmYXVsdCBpcyBzZXQgdG8gZmFsc2UuXG4gICAgICpgYGBodG1sXG4gICAgICo8aWd4LWxpbmVhci1iYXIgdHlwZT1cImRhbmdlclwiIFt0ZXh0VG9wXT1cInRydWVcIj48L2lneC1saW5lYXItYmFyPlxuICAgICAqYGBgXG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgdGV4dFRvcCA9IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICpTZXQgYSBjdXN0b20gdGV4dCB0aGF0IGlzIGRpc3BsYXllZCBhY2NvcmRpbmcgdG8gdGhlIGRlZmluZWQgcG9zaXRpb24uXG4gICAgICogYGBgaHRtbFxuICAgICAqPGlneC1saW5lYXItYmFyIHR5cGU9XCJ3YXJuaW5nXCIgW3RleHRdPVwiJ0N1c3RvbSB0ZXh0J1wiIFt0ZXh0QWxpZ25dPVwicG9zaXRpb25DZW50ZXJcIiBbc3RyaXBlZF09XCJ0cnVlXCI+PC9pZ3gtbGluZWFyLWJhcj5cbiAgICAgKmBgYFxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHRleHQ6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqU2V0IHR5cGUgb2YgdGhlIGBJZ3hMaW5lYXJQcm9ncmVzc0JhckNvbXBvbmVudGAuIFBvc3NpYmxlIG9wdGlvbnMgLSBgZGVmYXVsdGAsIGBzdWNjZXNzYCwgYGluZm9gLCBgd2FybmluZ2AsIGFuZCBgZGFuZ2VyYC5cbiAgICAgKmBgYGh0bWxcbiAgICAgKjxpZ3gtbGluZWFyLWJhciBbc3RyaXBlZF09XCJmYWxzZVwiIFttYXhdPVwiMTAwXCIgW3ZhbHVlXT1cIjBcIiB0eXBlPVwiZGFuZ2VyXCI+PC9pZ3gtbGluZWFyLWJhcj5cbiAgICAgKmBgYFxuICAgICAqL1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgdHlwZSA9ICdkZWZhdWx0JztcblxuICAgICAvKipcbiAgICAgKlJldHVybnMgdmFsdWUgdGhhdCBpbmRpY2F0ZXMgdGhlIGN1cnJlbnQgYElneExpbmVhclByb2dyZXNzQmFyQ29tcG9uZW50YCBwb3NpdGlvbi5cbiAgICAgKmBgYHR5cGVzY3JpcHRcbiAgICAgKkBWaWV3Q2hpbGQoXCJNeVByb2dyZXNzQmFyXCIpXG4gICAgICpwdWJsaWMgcHJvZ3Jlc3NCYXI6IElneExpbmVhclByb2dyZXNzQmFyQ29tcG9uZW50O1xuICAgICAqcHVibGljIGdldFZhbHVlKGV2ZW50KSB7XG4gICAgICogICAgbGV0IHZhbHVlID0gdGhpcy5wcm9ncmVzc0Jhci52YWx1ZTtcbiAgICAgKiAgICBhbGVydCh2YWx1ZSk7XG4gICAgICp9XG4gICAgICpgYGBcbiAgICAgKi9cbiAgICBASG9zdEJpbmRpbmcoJ2F0dHIuYXJpYS12YWx1ZW5vdycpXG4gICAgQElucHV0KClcbiAgICBnZXQgdmFsdWUoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqU2V0IHZhbHVlIHRoYXQgaW5kaWNhdGVzIHRoZSBjdXJyZW50IGBJZ3hMaW5lYXJQcm9ncmVzc0JhckNvbXBvbmVudGAgcG9zaXRpb24uXG4gICAgICpgYGBodG1sXG4gICAgICo8aWd4LWxpbmVhci1iYXIgW3N0cmlwZWRdPVwiZmFsc2VcIiBbbWF4XT1cIjIwMFwiIFt2YWx1ZV09XCI1MFwiPjwvaWd4LWxpbmVhci1iYXI+XG4gICAgICpgYGBcbiAgICAgKi9cbiAgICBzZXQgdmFsdWUodmFsKSB7XG4gICAgICAgIHZhbCA9IE51bWJlcih2YWwpO1xuICAgICAgICBpZiAodGhpcy5fdmFsdWUgPT09IHZhbCB8fCB0aGlzLmluZGV0ZXJtaW5hdGUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHZhbHVlSW5SYW5nZSA9IGdldFZhbHVlSW5Qcm9wZXJSYW5nZSh2YWwsIHRoaXMubWF4KTtcbiAgICAgICAgaWYgKGlzTmFOKHZhbHVlSW5SYW5nZSkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjaGFuZ2VkVmFsdWVzID0ge1xuICAgICAgICAgICAgY3VycmVudFZhbHVlOiB2YWx1ZUluUmFuZ2UsXG4gICAgICAgICAgICBwcmV2aW91c1ZhbHVlOiB0aGlzLl92YWx1ZVxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IHVwZGF0ZVZhbHVlID0gc3VwZXIuZGlyZWN0aW9uRmxvdyh0aGlzLl92YWx1ZSwgdmFsLCB0aGlzLnN0ZXApO1xuICAgICAgICBpZiAodGhpcy5fYW5pbWF0ZSAmJiB2YWwgPj0gdGhpcy5zdGVwKSB7XG4gICAgICAgICAgICBzdXBlci5ydW5BbmltYXRpb24odmFsdWVJblJhbmdlLCB1cGRhdGVWYWx1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdXBlci51cGRhdGVQcm9ncmVzc0RpcmVjdGx5KHZhbHVlSW5SYW5nZSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm9uUHJvZ3Jlc3NDaGFuZ2VkLmVtaXQoY2hhbmdlZFZhbHVlcyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpBbiBldmVudCwgd2hpY2ggaXMgdHJpZ2dlcmVkIGFmdGVyIGEgcHJvZ3Jlc3MgaXMgY2hhbmdlZC5cbiAgICAgKmBgYHR5cGVzY3JpcHRcbiAgICAgKnB1YmxpYyBwcm9ncmVzc0NoYW5nZShldmVudCkge1xuICAgICAqICAgIGFsZXJ0KFwiUHJvZ3Jlc3MgbWFkZSFcIik7XG4gICAgICp9XG4gICAgICogLy8uLi5cbiAgICAgKmBgYFxuICAgICAqYGBgaHRtbFxuICAgICAqPGlneC1saW5lYXItYmFyIChvblByb2dyZXNzQ2hhbmdlZCk9XCJwcm9ncmVzc0NoYW5nZSgkZXZlbnQpXCIgdHlwZT1cInN1Y2Nlc3NcIj5cbiAgICAgKmBgYFxuICAgICAqL1xuICAgIEBPdXRwdXQoKSBwdWJsaWMgb25Qcm9ncmVzc0NoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyPElDaGFuZ2VQcm9ncmVzc0V2ZW50QXJncz4oKTtcblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBASG9zdEJpbmRpbmcoJ2NsYXNzLmlneC1saW5lYXItYmFyLS1kYW5nZXInKVxuICAgIHB1YmxpYyBnZXQgZGFuZ2VyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50eXBlID09PSBJZ3hQcm9ncmVzc1R5cGUuREFOR0VSO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBASG9zdEJpbmRpbmcoJ2NsYXNzLmlneC1saW5lYXItYmFyLS1pbmZvJylcbiAgICBwdWJsaWMgZ2V0IGluZm8oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnR5cGUgPT09IElneFByb2dyZXNzVHlwZS5JTkZPO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBASG9zdEJpbmRpbmcoJ2NsYXNzLmlneC1saW5lYXItYmFyLS13YXJuaW5nJylcbiAgICBwdWJsaWMgZ2V0IHdhcm5pbmcoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnR5cGUgPT09IElneFByb2dyZXNzVHlwZS5XQVJOSU5HO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBASG9zdEJpbmRpbmcoJ2NsYXNzLmlneC1saW5lYXItYmFyLS1zdWNjZXNzJylcbiAgICBwdWJsaWMgZ2V0IHN1Y2Nlc3MoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnR5cGUgPT09IElneFByb2dyZXNzVHlwZS5TVUNDRVNTO1xuICAgIH1cbn1cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdpZ3gtY2lyY3VsYXItYmFyJyxcbiAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlcy9jaXJjdWxhci1iYXIuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIElneENpcmN1bGFyUHJvZ3Jlc3NCYXJDb21wb25lbnQgZXh0ZW5kcyBCYXNlUHJvZ3Jlc3Mge1xuXG4gICAgcHJpdmF0ZSByZWFkb25seSBTVFJPS0VfT1BBQ0lUWV9EVklERVIgPSAxMDA7XG4gICAgcHJpdmF0ZSByZWFkb25seSBTVFJPS0VfT1BBQ0lUWV9BRERJVElPTiA9IC4yO1xuXG4gICAgLyoqIEBoaWRkZW4gKi9cbiAgICBASG9zdEJpbmRpbmcoJ2NsYXNzLmlneC1jaXJjdWxhci1iYXInKVxuICAgIHB1YmxpYyBjc3NDbGFzcyA9ICdpZ3gtY2lyY3VsYXItYmFyJztcblxuICAgIC8qKlxuICAgICAqQW4gZXZlbnQsIHdoaWNoIGlzIHRyaWdnZXJlZCBhZnRlciBhIHByb2dyZXNzIGlzIGNoYW5nZWQuXG4gICAgICpgYGB0eXBlc2NyaXB0XG4gICAgICpwdWJsaWMgcHJvZ3Jlc3NDaGFuZ2UoZXZlbnQpIHtcbiAgICAgKiAgICBhbGVydChcIlByb2dyZXNzIG1hZGUhXCIpO1xuICAgICAqfVxuICAgICAqIC8vLi4uXG4gICAgICpgYGBcbiAgICAgKmBgYGh0bWxcbiAgICAgKjxpZ3gtY2lyY3VsYXItYmFyIFt2YWx1ZV09XCJjdXJyZW50VmFsdWVcIiAob25Qcm9ncmVzc0NoYW5nZWQpPVwicHJvZ3Jlc3NDaGFuZ2UoJGV2ZW50KVwiPjwvaWd4LWNpcmN1bGFyLWJhcj5cbiAgICAgKmBgYFxuICAgICAqL1xuICAgIEBPdXRwdXQoKVxuICAgIHB1YmxpYyBvblByb2dyZXNzQ2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXI8SUNoYW5nZVByb2dyZXNzRXZlbnRBcmdzPigpO1xuXG4gICAgLyoqXG4gICAgICpBbiBASW5wdXQgcHJvcGVydHkgdGhhdCBzZXRzIHRoZSB2YWx1ZSBvZiBgaWRgIGF0dHJpYnV0ZS4gSWYgbm90IHByb3ZpZGVkIGl0IHdpbGwgYmUgYXV0b21hdGljYWxseSBnZW5lcmF0ZWQuXG4gICAgICpgYGBodG1sXG4gICAgICo8aWd4LWNpcmN1bGFyLWJhciBbaWRdPVwiJ2lneC1jaXJjdWxhci1iYXItNTUnXCIgW3ZhbHVlXT1cIjUwXCI+PC9pZ3gtY2lyY3VsYXItYmFyPlxuICAgICAqYGBgXG4gICAgICovXG4gICAgQEhvc3RCaW5kaW5nKCdhdHRyLmlkJylcbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBpZCA9IGBpZ3gtY2lyY3VsYXItYmFyLSR7TkVYVF9DSVJDVUxBUl9JRCsrfWA7XG5cbiAgICAvKipcbiAgICAgKkFuIEBJbnB1dCBwcm9wZXJ0eSB0aGF0IHNldHMgdGhlIHZhbHVlIG9mIHRoZSBgaW5kZXRlcm1pbmF0ZWAgYXR0cmlidXRlLiBJZiBub3QgcHJvdmlkZWQgaXQgd2lsbCBiZSBhdXRvbWF0aWNhbGx5IHNldCB0byBmYWxzZS5cbiAgICAgKmBgYGh0bWxcbiAgICAgKjxpZ3gtY2lyY3VsYXItYmFyIFtpbmRldGVybWluYXRlXT1cInRydWVcIj48L2lneC1jaXJjdWxhci1iYXI+XG4gICAgICpgYGBcbiAgICAgKi9cbiAgICBASG9zdEJpbmRpbmcoJ2NsYXNzLmlneC1jaXJjdWxhci1iYXItLWluZGV0ZXJtaW5hdGUnKVxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGluZGV0ZXJtaW5hdGUgPSBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqU2V0cyB0aGUgdGV4dCB2aXNpYmlsaXR5LiBCeSBkZWZhdWx0IGl0IGlzIHNldCB0byB0cnVlLlxuICAgICAqYGBgaHRtbFxuICAgICAqPGlneC1jaXJjdWxhci1iYXIgW3RleHRWaXNpYmlsaXR5XT1cImZhbHNlXCI+PC9pZ3gtY2lyY3VsYXItYmFyPlxuICAgICAqYGBgXG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgdGV4dFZpc2liaWxpdHkgPSB0cnVlO1xuXG4gICAgLyoqXG4gICAgICogU2V0cy9nZXRzIHRoZSB0ZXh0IHRvIGJlIGRpc3BsYXllZCBpbnNpZGUgdGhlIGBpZ3hDaXJjdWxhckJhcmAuXG4gICAgICpgYGBodG1sXG4gICAgICo8aWd4LWNpcmN1bGFyLWJhciB0ZXh0PVwiUHJvZ3Jlc3NcIj48L2lneC1jaXJjdWxhci1iYXI+XG4gICAgICpgYGBcbiAgICAgKmBgYHR5cGVzY3JpcHRcbiAgICAgKmxldCB0ZXh0ID0gdGhpcy5jaXJjdWxhckJhci50ZXh0O1xuICAgICAqYGBgXG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgdGV4dDogc3RyaW5nO1xuXG4gICAgQENvbnRlbnRDaGlsZChJZ3hQcm9jZXNzQmFyVGV4dFRlbXBsYXRlRGlyZWN0aXZlLCB7IHJlYWQ6IElneFByb2Nlc3NCYXJUZXh0VGVtcGxhdGVEaXJlY3RpdmUsIHN0YXRpYzogdHJ1ZSB9KVxuICAgIHB1YmxpYyB0ZXh0VGVtcGxhdGU6IElneFByb2Nlc3NCYXJUZXh0VGVtcGxhdGVEaXJlY3RpdmU7XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgKi9cbiAgICBwdWJsaWMgZ2V0IGNvbnRleHQoKTogYW55IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICRpbXBsaWNpdDogeyB2YWx1ZTogdGhpcy52YWx1ZSwgdmFsdWVJblBlcmNlbnQ6IHRoaXMudmFsdWVJblBlcmNlbnQsIG1heDogdGhpcy5tYXggfVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICpBbmltYXRpb24gb24gcHJvZ3Jlc3MgYElneENpcmN1bGFyUHJvZ3Jlc3NCYXJDb21wb25lbnRgLiBCeSBkZWZhdWx0IGl0IGlzIHNldCB0byB0cnVlLlxuICAgICAqYGBgaHRtbFxuICAgICAqPGlneC1jaXJjdWxhci1iYXIgW2FuaW1hdGVdPVwiZmFsc2VcIiBbdmFsdWVdPVwiNTBcIj48L2lneC1jaXJjdWxhci1iYXI+XG4gICAgICpgYGBcbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHNldCBhbmltYXRlKGFuaW1hdGU6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5fYW5pbWF0ZSA9IGFuaW1hdGU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpSZXR1cm5zIHdoZXRoZXIgdGhlIGBJZ3hDaXJjdWxhclByb2dyZXNzQmFyQ29tcG9uZW50YCBoYXMgYW5pbWF0aW9uIHRydWUvZmFsc2UuXG4gICAgICpgYGB0eXBlc2NyaXB0XG4gICAgICpAVmlld0NoaWxkKFwiTXlQcm9ncmVzc0JhclwiKVxuICAgICAqcHVibGljIHByb2dyZXNzQmFyOiBJZ3hDaXJjdWxhclByb2dyZXNzQmFyQ29tcG9uZW50O1xuICAgICAqcHVibGljIGFuaW1hdGlvblN0YXR1cyhldmVudCkge1xuICAgICAqICAgIGxldCBhbmltYXRpb25TdGF0dXMgPSB0aGlzLnByb2dyZXNzQmFyLmFuaW1hdGU7XG4gICAgICogICAgYWxlcnQoYW5pbWF0aW9uU3RhdHVzKTtcbiAgICAgKn1cbiAgICAgKmBgYFxuICAgICAqL1xuICAgIGdldCBhbmltYXRlKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fYW5pbWF0ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlNldCBtYXhpbXVtIHZhbHVlIHRoYXQgY2FuIGJlIHBhc3NlZC4gQnkgZGVmYXVsdCBpdCBpcyBzZXQgdG8gMTAwLlxuICAgICAqYGBgaHRtbFxuICAgICAqPGlneC1jaXJjdWxhci1iYXIgW21heF09XCIyMDBcIiBbdmFsdWVdPVwiMFwiPjwvaWd4LWNpcmN1bGFyLWJhcj5cbiAgICAgKmBgYFxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgc2V0IG1heChtYXhOdW06IG51bWJlcikge1xuICAgICAgICB0aGlzLl9tYXggPSBtYXhOdW07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpSZXR1cm5zIHRoZSB0aGUgbWF4aW11bSBwcm9ncmVzcyB2YWx1ZSBvZiB0aGUgYElneENpcmN1bGFyUHJvZ3Jlc3NCYXJDb21wb25lbnRgLlxuICAgICAqYGBgdHlwZXNjcmlwdFxuICAgICAqQFZpZXdDaGlsZChcIk15UHJvZ3Jlc3NCYXJcIilcbiAgICAgKnB1YmxpYyBwcm9ncmVzc0JhcjogSWd4Q2lyY3VsYXJQcm9ncmVzc0JhckNvbXBvbmVudDtcbiAgICAgKnB1YmxpYyBtYXhWYWx1ZShldmVudCkge1xuICAgICAqICAgIGxldCBtYXggPSB0aGlzLnByb2dyZXNzQmFyLm1heDtcbiAgICAgKiAgICBhbGVydChtYXgpO1xuICAgICAqfVxuICAgICAqYGBgXG4gICAgICpgYGBodG1sXG4gICAgICo8aWd4LWNpcmN1bGFyLWJhciBbbWF4XT1cIjI0NVwiIFthbmltYXRlXT1cImZhbHNlXCIgW3ZhbHVlXT1cImN1cnJlbnRWYWx1ZVwiPjwvaWd4LWNpcmN1bGFyLWJhcj5cbiAgICAgKmBgYFxuICAgICAqL1xuICAgIGdldCBtYXgoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX21heDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlJldHVybnMgdGhlIHZhbHVlIHdoaWNoIHVwZGF0ZSB0aGUgcHJvZ3Jlc3MgaW5kaWNhdG9yIG9mIHRoZSBgSWd4Q2lyY3VsYXJQcm9ncmVzc0JhckNvbXBvbmVudGAuXG4gICAgICpgYGB0eXBlc2NyaXB0XG4gICAgICpAVmlld0NoaWxkKFwiTXlQcm9ncmVzc0JhclwiKVxuICAgICAqcHVibGljIHByb2dyZXNzQmFyOiBJZ3hDaXJjdWxhclByb2dyZXNzQmFyQ29tcG9uZW50O1xuICAgICAqcHVibGljIHN0ZXBWYWx1ZShldmVudCkge1xuICAgICAqICAgIGxldCBzdGVwID0gdGhpcy5wcm9ncmVzc0Jhci5zdGVwO1xuICAgICAqICAgIGFsZXJ0KHN0ZXApO1xuICAgICAqfVxuICAgICAqYGBgXG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBnZXQgc3RlcCgpOiBudW1iZXIge1xuICAgICAgICBpZiAodGhpcy5fc3RlcCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3N0ZXA7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5fbWF4ICogT05FX1BFUkNFTlQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpTZXRzIHRoZSB2YWx1ZSBieSB3aGljaCBwcm9ncmVzcyBpbmRpY2F0b3IgaXMgdXBkYXRlZC4gQnkgZGVmYXVsdCBpdCBpcyAxJSBvZiB0aGUgbWF4aW11bSB2YWx1ZS5cbiAgICAgKmBgYGh0bWxcbiAgICAgKjxpZ3gtY2lyY3VsYXItYmFyIFtzdHJpcGVkXT1cImZhbHNlXCIgW21heF09XCIyMDBcIiBbdmFsdWVdPVwiMFwiIFtzdGVwXT1cIjFcIj48L2lneC1jaXJjdWxhci1iYXI+XG4gICAgICpgYGBcbiAgICAqL1xuICAgIHNldCBzdGVwKHZhbDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX3N0ZXAgPSBOdW1iZXIodmFsKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlJldHVybnMgdmFsdWUgdGhhdCBpbmRpY2F0ZXMgdGhlIGN1cnJlbnQgYElneENpcmN1bGFyUHJvZ3Jlc3NCYXJDb21wb25lbnRgIHBvc2l0aW9uLlxuICAgICAqYGBgdHlwZXNjcmlwdFxuICAgICAqQFZpZXdDaGlsZChcIk15UHJvZ3Jlc3NCYXJcIilcbiAgICAgKnB1YmxpYyBwcm9ncmVzc0JhcjogSWd4Q2lyY3VsYXJQcm9ncmVzc0JhckNvbXBvbmVudDtcbiAgICAgKnB1YmxpYyBnZXRWYWx1ZShldmVudCkge1xuICAgICAqICAgIGxldCB2YWx1ZSA9IHRoaXMucHJvZ3Jlc3NCYXIudmFsdWU7XG4gICAgICogICAgYWxlcnQodmFsdWUpO1xuICAgICAqfVxuICAgICAqYGBgXG4gICAgICpgYGBodG1sXG4gICAgICo8YnV0dG9uIGlneEJ1dHRvbj1cImZhYlwiIGlneFJpcHBsZT1cIlwiIChjbGljayk9XCJnZXRWYWx1ZSgpXCI+Q2xpY2s8L2J1dHRvbj5cbiAgICAgKmBgYFxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgZ2V0IHZhbHVlKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlNldCB2YWx1ZSB0aGF0IGluZGljYXRlcyB0aGUgY3VycmVudCBgSWd4Q2lyY3VsYXJQcm9ncmVzc0JhckNvbXBvbmVudGAgcG9zaXRpb24uXG4gICAgICpgYGBodG1sXG4gICAgICo8aWd4LWNpcmN1bGFyLWJhciBbdmFsdWVdPVwiNTBcIj48L2lneC1jaXJjdWxhci1iYXI+XG4gICAgICpgYGBcbiAgICAgKi9cbiAgICBzZXQgdmFsdWUodmFsOiBudW1iZXIpIHtcbiAgICAgICAgdmFsID0gTnVtYmVyKHZhbCk7XG4gICAgICAgIGlmICh0aGlzLl92YWx1ZSA9PT0gdmFsIHx8IHRoaXMuaW5kZXRlcm1pbmF0ZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdmFsdWVJblByb3BlclJhbmdlID0gZ2V0VmFsdWVJblByb3BlclJhbmdlKHZhbCwgdGhpcy5tYXgpO1xuICAgICAgICBpZiAoaXNOYU4odmFsdWVJblByb3BlclJhbmdlKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY2hhbmdlZFZhbHVlcyA9IHtcbiAgICAgICAgICAgIGN1cnJlbnRWYWx1ZTogdmFsdWVJblByb3BlclJhbmdlLFxuICAgICAgICAgICAgcHJldmlvdXNWYWx1ZTogdGhpcy5fdmFsdWVcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCB1cGRhdGVWYWx1ZSA9IHN1cGVyLmRpcmVjdGlvbkZsb3codGhpcy5fdmFsdWUsIHZhbCwgdGhpcy5zdGVwKTtcbiAgICAgICAgaWYgKHRoaXMuYW5pbWF0ZSAmJiB2YWwgPj0gdGhpcy5zdGVwKSB7XG4gICAgICAgICAgICBzdXBlci5ydW5BbmltYXRpb24odmFsdWVJblByb3BlclJhbmdlLCB1cGRhdGVWYWx1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVByb2dyZXNzRGlyZWN0bHkodmFsdWVJblByb3BlclJhbmdlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMub25Qcm9ncmVzc0NoYW5nZWQuZW1pdChjaGFuZ2VkVmFsdWVzKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9jaXJjbGVSYWRpdXMgPSA0NjtcbiAgICBwcml2YXRlIF9jaXJjdW1mZXJlbmNlID0gMiAqIE1hdGguUEkgKiB0aGlzLl9jaXJjbGVSYWRpdXM7XG5cbiAgICBAVmlld0NoaWxkKCdjaXJjbGUnLCB7IHN0YXRpYzogdHJ1ZSB9KSBwcml2YXRlIF9zdmdDaXJjbGU6IEVsZW1lbnRSZWY7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIHVwZGF0ZVByb2dyZXNzU21vb3RobHkodmFsOiBudW1iZXIsIHN0ZXA6IG51bWJlcikge1xuICAgICAgICAvLyBTZXQgZnJhbWVzIGZvciB0aGUgYW5pbWF0aW9uXG4gICAgICAgIGNvbnN0IEZSQU1FUyA9IFt7XG4gICAgICAgICAgICBzdHJva2VEYXNob2Zmc2V0OiB0aGlzLmdldFByb2dyZXNzKHRoaXMuX3ZhbHVlKSxcbiAgICAgICAgICAgIHN0cm9rZU9wYWNpdHk6ICh0aGlzLl92YWx1ZSAvIHRoaXMuU1RST0tFX09QQUNJVFlfRFZJREVSKSArIHRoaXMuU1RST0tFX09QQUNJVFlfQURESVRJT05cbiAgICAgICAgfSwge1xuICAgICAgICAgICAgc3Ryb2tlRGFzaG9mZnNldDogdGhpcy5nZXRQcm9ncmVzcyh0aGlzLnZhbHVlSW5QZXJjZW50KSxcbiAgICAgICAgICAgIHN0cm9rZU9wYWNpdHk6ICh0aGlzLnZhbHVlSW5QZXJjZW50IC8gdGhpcy5TVFJPS0VfT1BBQ0lUWV9EVklERVIpICsgdGhpcy5TVFJPS0VfT1BBQ0lUWV9BRERJVElPTlxuICAgICAgICB9XTtcbiAgICAgICAgdGhpcy5fc3ZnQ2lyY2xlLm5hdGl2ZUVsZW1lbnQuYW5pbWF0ZShGUkFNRVMsIHtcbiAgICAgICAgICAgIGVhc2luZzogJ2Vhc2Utb3V0JyxcbiAgICAgICAgICAgIGZpbGw6ICdmb3J3YXJkcydcbiAgICAgICAgfSk7XG5cbiAgICAgICAgc3VwZXIudXBkYXRlUHJvZ3Jlc3NTbW9vdGhseSh2YWwsIHN0ZXApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAqL1xuICAgIHB1YmxpYyBnZXQgdGV4dENvbnRlbnQoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGV4dDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgKi9cbiAgICBwdWJsaWMgdXBkYXRlUHJvZ3Jlc3NEaXJlY3RseSh2YWw6IG51bWJlcikge1xuICAgICAgICBzdXBlci51cGRhdGVQcm9ncmVzc0RpcmVjdGx5KHZhbCk7XG5cbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShcbiAgICAgICAgICAgIHRoaXMuX3N2Z0NpcmNsZS5uYXRpdmVFbGVtZW50LFxuICAgICAgICAgICAgJ3N0cm9rZS1kYXNob2Zmc2V0JyxcbiAgICAgICAgICAgIHRoaXMuZ2V0UHJvZ3Jlc3ModGhpcy52YWx1ZUluUGVyY2VudCkpO1xuXG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoXG4gICAgICAgICAgICB0aGlzLl9zdmdDaXJjbGUubmF0aXZlRWxlbWVudCxcbiAgICAgICAgICAgICdzdHJva2Utb3BhY2l0eScsXG4gICAgICAgICAgICAodGhpcy52YWx1ZUluUGVyY2VudCAvIHRoaXMuU1RST0tFX09QQUNJVFlfRFZJREVSKSArIHRoaXMuU1RST0tFX09QQUNJVFlfQURESVRJT04pO1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0UHJvZ3Jlc3MocGVyY2VudGFnZTogbnVtYmVyKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jaXJjdW1mZXJlbmNlIC0gKHBlcmNlbnRhZ2UgKiB0aGlzLl9jaXJjdW1mZXJlbmNlIC8gMTAwKTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRWYWx1ZUluUHJvcGVyUmFuZ2UodmFsdWU6IG51bWJlciwgbWF4OiBudW1iZXIsIG1pbiA9IDApOiBudW1iZXIge1xuICAgIHJldHVybiBNYXRoLm1heChNYXRoLm1pbih2YWx1ZSwgbWF4KSwgbWluKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnRJblBlcmNlbnRhZ2UodmFsdWU6IG51bWJlciwgbWF4OiBudW1iZXIpIHtcbiAgICByZXR1cm4gTWF0aC5mbG9vcigxMDAgKiB2YWx1ZSAvIG1heCk7XG59XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5ATmdNb2R1bGUoe1xuICAgIGRlY2xhcmF0aW9uczogW0lneExpbmVhclByb2dyZXNzQmFyQ29tcG9uZW50LCBJZ3hDaXJjdWxhclByb2dyZXNzQmFyQ29tcG9uZW50LCBJZ3hQcm9jZXNzQmFyVGV4dFRlbXBsYXRlRGlyZWN0aXZlXSxcbiAgICBleHBvcnRzOiBbSWd4TGluZWFyUHJvZ3Jlc3NCYXJDb21wb25lbnQsIElneENpcmN1bGFyUHJvZ3Jlc3NCYXJDb21wb25lbnQsIElneFByb2Nlc3NCYXJUZXh0VGVtcGxhdGVEaXJlY3RpdmVdLFxuICAgIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIElneFByb2dyZXNzQmFyTW9kdWxlIHtcbn1cbiJdfQ==