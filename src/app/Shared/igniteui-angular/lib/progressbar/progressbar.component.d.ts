import { EventEmitter, Renderer2 } from '@angular/core';
import { IgxProcessBarTextTemplateDirective } from './progressbar.common';
export declare enum IgxTextAlign {
    START = "start",
    CENTER = "center",
    END = "end"
}
export declare enum IgxProgressType {
    DANGER = "danger",
    INFO = "info",
    WARNING = "warning",
    SUCCESS = "success"
}
export interface IChangeProgressEventArgs {
    previousValue: number;
    currentValue: number;
}
export declare abstract class BaseProgress {
    /**
     * @hidden
     */
    private requestAnimationId;
    /**
     * @hidden
     */
    protected _valueInPercent: number;
    /**
     * @hidden
     */
    protected _max: number;
    /**
     * @hidden
     */
    protected _value: number;
    /**
     * @hidden
     */
    protected _animate: boolean;
    /**
     * @hidden
     */
    protected _step: any;
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
    valueInPercent: number;
    /**
     * @hidden
     */
    protected runAnimation(val: number, step: number): void;
    /**
     * @hidden
     */
    protected updateProgressSmoothly(val: number, step: number): void;
    /**
     * @hidden
     */
    protected updateProgressDirectly(val: number): void;
    /**
     * @hidden
     */
    protected directionFlow(currentValue: number, prevValue: number, step: number): number;
    /**
     * @hidden
     */
    private isInLimitRange;
    /**
     * @hidden
     *
     *
     * @param val
     * @param comparator
     * @param step
     */
    private isExceedingUpperLimit;
    /**
     * @hidden
     *
     * @param val
     * @param comparator
     * @param step
     */
    private isExceedingLowerLimit;
    /**
     * @hidden
     * @param step
     */
    private updateProgress;
}
export declare class IgxLinearProgressBarComponent extends BaseProgress {
    /**
     *Animation on progress `IgxLinearProgressBarComponent`. By default it is set to true.
     *```html
     *<igx-linear-bar [animate]="false" [striped]="true" [max]="200" [value]="50"></igx-linear-bar>
     *```
     */
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
    animate: boolean;
    /**
     *Set maximum value that can be passed. By default it is set to 100.
     *```html
     *<igx-linear-bar [striped]="false" [max]="200" [value]="0"></igx-linear-bar>
     *```
     */
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
    max: number;
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
    /**
    *Sets the value by which progress indicator is updated. By default it is 1% of the maximum value.
    *```html
    *<igx-linear-bar [striped]="false" [max]="200" [value]="0" [step]="1"></igx-linear-bar>
    *```
    */
    step: number;
    constructor();
    valueMin: number;
    cssClass: string;
    /**
     *Set `IgxLinearProgressBarComponent` to have striped style. By default it is set to false.
     *```html
     *<igx-linear-bar [striped]="true" [max]="200" [value]="50"></igx-linear-bar>
     *```
     */
    striped: boolean;
    /**
     *Set `IgxLinearProgressBarComponent` to have indeterminate. By default it is set to false.
     *```html
     *<igx-linear-bar [indeterminate]="true"></igx-linear-bar>
     *```
     */
    indeterminate: boolean;
    /**An @Input property that sets the value of the `role` attribute. If not provided it will be automatically set to `progressbar`.
     * ```html
     *<igx-linear-bar role="progressbar"></igx-linear-bar>
     * ```
     */
    role: string;
    /**An @Input property that sets the value of `id` attribute. If not provided it will be automatically generated.
     * ```html
     *<igx-linear-bar [id]="'igx-linear-bar-55'" [striped]="true" [max]="200" [value]="50"></igx-linear-bar>
     * ```
     */
    id: string;
    /**
     *Set the position that defines where the text is aligned.
     Possible options - `IgxTextAlign.START` (default), `IgxTextAlign.CENTER`, `IgxTextAlign.END`.
     *```typescript
     *public positionCenter: IgxTextAlign;
     *public ngOnInit() {
     *    this.positionCenter = IgxTextAlign.CENTER;
     *}
     * //...
     *```
     * ```html
     *<igx-linear-bar type="warning" [text]="'Custom text'" [textAlign]="positionCenter" [striped]="true"></igx-linear-bar>
     *```
     */
    textAlign: IgxTextAlign;
    /**
     *Set the text to be visible. By default it is set to true.
     * ```html
     *<igx-linear-bar type="default" [textVisibility]="false"></igx-linear-bar>
     *```
     */
    textVisibility: boolean;
    /**
     *Set the position that defines if the text should be aligned above the progress line. By default is set to false.
     *```html
     *<igx-linear-bar type="danger" [textTop]="true"></igx-linear-bar>
     *```
     */
    textTop: boolean;
    /**
     *Set a custom text that is displayed according to the defined position.
     * ```html
     *<igx-linear-bar type="warning" [text]="'Custom text'" [textAlign]="positionCenter" [striped]="true"></igx-linear-bar>
     *```
     */
    text: string;
    /**
     *Set type of the `IgxLinearProgressBarComponent`. Possible options - `default`, `success`, `info`, `warning`, and `danger`.
     *```html
     *<igx-linear-bar [striped]="false" [max]="100" [value]="0" type="danger"></igx-linear-bar>
     *```
     */
    type: string;
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
    /**
    *Set value that indicates the current `IgxLinearProgressBarComponent` position.
    *```html
    *<igx-linear-bar [striped]="false" [max]="200" [value]="50"></igx-linear-bar>
    *```
    */
    value: number;
    /**
     *An event, which is triggered after a progress is changed.
     *```typescript
     *public progressChange(event) {
     *    alert("Progress made!");
     *}
     * //...
     *```
     *```html
     *<igx-linear-bar (onProgressChanged)="progressChange($event)" type="success">
     *```
     */
    onProgressChanged: EventEmitter<IChangeProgressEventArgs>;
    /**
     * @hidden
     */
    readonly danger: boolean;
    /**
     * @hidden
     */
    readonly info: boolean;
    /**
     * @hidden
     */
    readonly warning: boolean;
    /**
     * @hidden
     */
    readonly success: boolean;
}
export declare class IgxCircularProgressBarComponent extends BaseProgress {
    private renderer;
    private readonly STROKE_OPACITY_DVIDER;
    private readonly STROKE_OPACITY_ADDITION;
    /** @hidden */
    cssClass: string;
    /**
     *An event, which is triggered after a progress is changed.
     *```typescript
     *public progressChange(event) {
     *    alert("Progress made!");
     *}
     * //...
     *```
     *```html
     *<igx-circular-bar [value]="currentValue" (onProgressChanged)="progressChange($event)"></igx-circular-bar>
     *```
     */
    onProgressChanged: EventEmitter<IChangeProgressEventArgs>;
    /**
     *An @Input property that sets the value of `id` attribute. If not provided it will be automatically generated.
     *```html
     *<igx-circular-bar [id]="'igx-circular-bar-55'" [value]="50"></igx-circular-bar>
     *```
     */
    id: string;
    /**
     *An @Input property that sets the value of the `indeterminate` attribute. If not provided it will be automatically set to false.
     *```html
     *<igx-circular-bar [indeterminate]="true"></igx-circular-bar>
     *```
     */
    indeterminate: boolean;
    /**
     *Sets the text visibility. By default it is set to true.
     *```html
     *<igx-circular-bar [textVisibility]="false"></igx-circular-bar>
     *```
     */
    textVisibility: boolean;
    /**
     * Sets/gets the text to be displayed inside the `igxCircularBar`.
     *```html
     *<igx-circular-bar text="Progress"></igx-circular-bar>
     *```
     *```typescript
     *let text = this.circularBar.text;
     *```
     */
    text: string;
    textTemplate: IgxProcessBarTextTemplateDirective;
    /**
     * @hidden
    */
    readonly context: any;
    /**
    *Animation on progress `IgxCircularProgressBarComponent`. By default it is set to true.
     *```html
     *<igx-circular-bar [animate]="false" [value]="50"></igx-circular-bar>
     *```
     */
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
    animate: boolean;
    /**
     *Set maximum value that can be passed. By default it is set to 100.
     *```html
     *<igx-circular-bar [max]="200" [value]="0"></igx-circular-bar>
     *```
     */
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
    max: number;
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
    /**
     *Sets the value by which progress indicator is updated. By default it is 1% of the maximum value.
     *```html
     *<igx-circular-bar [striped]="false" [max]="200" [value]="0" [step]="1"></igx-circular-bar>
     *```
    */
    step: number;
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
    /**
    *Set value that indicates the current `IgxCircularProgressBarComponent` position.
    *```html
    *<igx-circular-bar [value]="50"></igx-circular-bar>
    *```
    */
    value: number;
    private _circleRadius;
    private _circumference;
    private _svgCircle;
    constructor(renderer: Renderer2);
    /**
     * @hidden
     */
    updateProgressSmoothly(val: number, step: number): void;
    /**
     * @hidden
    */
    readonly textContent: string;
    /**
     * @hidden
    */
    updateProgressDirectly(val: number): void;
    private getProgress;
}
export declare function getValueInProperRange(value: number, max: number, min?: number): number;
export declare function convertInPercentage(value: number, max: number): number;
/**
 * @hidden
 */
export declare class IgxProgressBarModule {
}
