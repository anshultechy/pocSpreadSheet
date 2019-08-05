/**
 * Template directive that allows you to set a custom template representing the lower label value of the {@link IgxSliderComponent}
 *
 *```html
 * <igx-slider>
 *  <ng-template igxSliderThumbFrom let-value let-labels>{{value}}</ng-template>
 * </igx-slider>
 * ```
 *
 * @context {@link IgxSliderComponent.context}
 */
export declare class IgxThumbFromTemplateDirective {
}
/**
 * Template directive that allows you to set a custom template representing the upper label value of the {@link IgxSliderComponent}
 *
 * ```html
 * <igx-slider>
 *  <ng-template igxSliderThumbTo let-value let-labels>{{value}}</ng-template>
 * </igx-slider>
 * ```
 *
 * @context {@link IgxSliderComponent.context}
 */
export declare class IgxThumbToTemplateDirective {
}
export declare enum SliderType {
    /**
     * Slider with single thumb.
     */
    SLIDER = 0,
    /**
     *  Range slider with multiple thumbs, that can mark the range.
     */
    RANGE = 1
}
export declare enum SliderHandle {
    FROM = 0,
    TO = 1
}
export interface IRangeSliderValue {
    lower: number;
    upper: number;
}
export interface ISliderValueChangeEventArgs {
    oldValue: number | IRangeSliderValue;
    value: number | IRangeSliderValue;
}
