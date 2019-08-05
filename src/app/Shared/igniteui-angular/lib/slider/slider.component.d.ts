import { AfterViewInit, ElementRef, EventEmitter, OnInit, Renderer2, TemplateRef, AfterContentInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { EditorProvider } from '../core/edit-provider';
import { Subject } from 'rxjs';
import { IRangeSliderValue, SliderType, ISliderValueChangeEventArgs } from './slider.common';
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
export declare class IgxSliderComponent implements ControlValueAccessor, EditorProvider, OnInit, AfterViewInit, AfterContentInit, OnDestroy {
    private renderer;
    private _el;
    private _cdr;
    private _pMin;
    private _pMax;
    private _hasViewInit;
    private _minValue;
    private _maxValue;
    private _lowerBound?;
    private _upperBound?;
    private _lowerValue?;
    private _upperValue?;
    private _continuous;
    private _disabled;
    private _step;
    private _labels;
    private _type;
    private _destroyer$;
    private _indicatorsDestroyer$;
    private _indicatorsTimer;
    private _onChangeCallback;
    private _onTouchedCallback;
    /**
     * @hidden
     */
    private track;
    /**
     * @hidden
     */
    private ticks;
    /**
     * @hidden
     */
    private thumbs;
    private readonly thumbFrom;
    private readonly thumbTo;
    /**
     * @hidden
     */
    stepDistance: number;
    /**
     * @hidden
     */
    onPan: Subject<number>;
    /**
     * @hidden
     */
    thumbFromTemplateRef: TemplateRef<any>;
    /**
     * @hidden
     */
    thumbToTemplateRef: TemplateRef<any>;
    /**
     * @hidden
     */
    role: string;
    /**
     * @hidden
     */
    readonly valuemin: number;
    /**
     * @hidden
     */
    readonly valuemax: number;
    /**
     * @hidden
     */
    readonly readonly: boolean;
    /**
     * @hidden
     */
    slierClass: boolean;
    /**
     * @hidden
     */
    readonly disabledClass: boolean;
    /**
     * An @Input property that sets the value of the `id` attribute.
     * If not provided it will be automatically generated.
     * ```html
     * <igx-slider [id]="'igx-slider-32'" [(ngModel)]="task.percentCompleted" [step]="5" [lowerBound]="20">
     * ```
     */
    id: string;
    /**
     * An @Input property that gets the type of the `IgxSliderComponent`. The slider can be SliderType.SLIDER(default) or SliderType.RANGE.
     * ```typescript
     * @ViewChild("slider2")
     * public slider: IgxSliderComponent;
     * ngAfterViewInit(){
     *     let type = this.slider.type;
     * }
     */
    /**
    * An @Input property that sets the type of the `IgxSliderComponent`. The slider can be SliderType.SLIDER(default) or SliderType.RANGE.
    * ```typescript
    * sliderType: SliderType = SliderType.RANGE;
    * ```
    * ```html
    * <igx-slider #slider2 [type]="sliderType" [(ngModel)]="rangeValue" [minValue]="0" [maxValue]="100">
    * ```
    */
    type: SliderType;
    /**
     *An @Input property that sets the duration visibility of thumbs labels. The default value is 750 milliseconds.
     *```html
     *<igx-slider #slider [thumbLabelVisibilityDuration]="3000" [(ngModel)]="task.percentCompleted" [step]="5">
     *```
     */
    thumbLabelVisibilityDuration: number;
    /**
     * Enables `labelView`, by accepting a collection of primitive values with more than one element.
     * Each element will be equally spread over the slider and it will serve as a thumb label.
     * Once the property is set, it will precendence over {@link maxValue}, {@link minValue}, {@link step}.
     * This means that the manipulation for those properties won't be allowed.
     */
    labels: Array<number | string | boolean | null | undefined>;
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
    readonly context: any;
    /**
     * An @Input property that sets the incremental/decremental step of the value when dragging the thumb.
     * The default step is 1, and step should not be less or equal than 0.
     * ```html
     * <igx-slider #slider [(ngModel)]="task.percentCompleted" [step]="5">
     * ```
     */
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
    step: number;
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
    /**
    *An @Input property that disables or enables UI interaction.
    *```html
    *<igx-slider #slider [disabled]="'true'" [(ngModel)]="task.percentCompleted" [step]="5" [lowerBound]="20">
    *```
    */
    disabled: boolean;
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
    /**
    * An @Input property that marks the {@link IgxSliderComponent} as continuous.
    * By default is considered that the {@link IgxSliderComponent} is discrete.
    * Discrete {@link IgxSliderComponent} does not have ticks and does not shows bubble labels for values.
    * ```html
    * <igx-slider #slider [continuous]="'true'" [(ngModel)]="task.percentCompleted" [step]="5" [lowerBound]="20">
    * ```
    */
    continuous: boolean;
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
    /**
    * @hidden
    * @internal
    */
    isContinuous: boolean;
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
    /**
    * Sets the maximal value for the `IgxSliderComponent`.
    * The default maximum value is 100.
    * ```html
    * <igx-slider [type]="sliderType" [minValue]="56" [maxValue]="256">
    * ```
    */
    maxValue: number;
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
    /**
    * Sets the minimal value for the `IgxSliderComponent`.
    * The default minimal value is 0.
    * ```html
    * <igx-slider [type]="sliderType" [minValue]="56" [maxValue]="100">
    * ```
    */
    minValue: number;
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
    /**
    * Sets the lower boundary of the `IgxSliderComponent`.
    * If not set is the same as min value.
    * ```html
    * <igx-slider [step]="5" [lowerBound]="20">
    * ```
    */
    lowerBound: number;
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
    /**
    * Sets the upper boundary of the `IgxSliderComponent`.
    * If not set is the same as max value.
    * ```html
    * <igx-slider [step]="5" [upperBound]="20">
    * ```
    */
    upperBound: number;
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
    value: number | IRangeSliderValue;
    /**
     * This event is emitted when user has stopped interacting the thumb and value is changed.
     * ```typescript
     * public change(event){
     *    alert("The value has been changed!");
     *}
     * ```
     * ```html
     * <igx-slider (onValueChange)="change($event)" #slider [(ngModel)]="task.percentCompleted" [step]="5">
     * ```
     */
    onValueChange: EventEmitter<ISliderValueChangeEventArgs>;
    constructor(renderer: Renderer2, _el: ElementRef, _cdr: ChangeDetectorRef);
    /**
     * @hidden
     */
    onPointerDown($event: any): void;
    /**
     * @hidden
     */
    onPointerUp($event: any): void;
    /**
     * @hidden
     */
    onFocus(): void;
    /**
     * @hidden
     */
    onPanListener($event: any): void;
    onPanStart(): void;
    onPanEnd(): void;
    /**
     * @hidden
     */
    onTapListener($event: any): void;
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
    readonly isRange: boolean;
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
    lowerValue: number;
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
    upperValue: number;
    /**
     * Returns the value corresponding the lower label.
     *```typescript
     * @ViewChild("slider")
     * public slider: IgxSliderComponent;
     * let label = this.slider.lowerLabel;
     *```
     */
    readonly lowerLabel: string | number | boolean;
    /**
     * Returns the value corresponding the upper label.
     *```typescript
     * @ViewChild("slider")
     * public slider: IgxSliderComponent;
     * let label = this.slider.upperLabel;
     *```
     */
    readonly upperLabel: string | number | boolean;
    /**
     * Returns if label view is enabled.
     * If the {@link labels} is set, the view is automatically activated.
     *```typescript
     * @ViewChild("slider")
     * public slider: IgxSliderComponent;
     * let labelView = this.slider.labelsViewEnabled;
     *```
     */
    readonly labelsViewEnabled: boolean;
    /**
     * @hidden
     */
    ngOnInit(): void;
    /**
     * @hidden
     */
    ngAfterViewInit(): void;
    /**
     * @hidden
     */
    ngAfterContentInit(): void;
    /**
     * @hidden
     */
    ngOnDestroy(): void;
    /**
     * @hidden
     */
    writeValue(value: IRangeSliderValue | number): void;
    /**
     * @hidden
     */
    registerOnChange(fn: any): void;
    /**
     * @hidden
     */
    registerOnTouched(fn: any): void;
    /** @hidden */
    getEditElement(): any;
    /**
     *
     * @hidden
     */
    onTap($event: any): void;
    /**
     *
     * @hidden
     */
    update(mouseX: any): void;
    /**
     * @hidden
     */
    thumbChanged(value: number, thumbType: number): void;
    /**
     * @hidden
     */
    onThumbChange(): void;
    onHoverChange(state: boolean): void;
    private swapThumb;
    private findClosestThumb;
    private updateLowerBoundAndMinTravelZone;
    private updateUpperBoundAndMaxTravelZone;
    private sliderSetup;
    private calculateStepDistance;
    private toggleThumb;
    private valueInRange;
    private generateTickMarks;
    private positionHandle;
    private positionHandlesAndUpdateTrack;
    private closestHandle;
    private setTickInterval;
    private showThumbsIndicators;
    private hideThumbsIndicators;
    private toggleThumbLabels;
    private changeThumbFocusableState;
    private closestTo;
    private valueToFraction;
    /**
     * @hidden
     * Normalizе the value when two-way data bind is used and {@link this.step} is set.
     * @param value
     */
    private normalizeByStep;
    private updateTrack;
    private validateInitialValue;
    private subscribeTo;
    private unsubscriber;
    private hasValueChanged;
    private emitValueChanged;
}
/**
 * @hidden
 */
export declare class IgxSliderModule {
}
