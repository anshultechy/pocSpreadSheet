import { AnnotationLayerDescription } from "./AnnotationLayerDescription";
import { Type } from "./type";
/**
 * @hidden
 */
export declare class FinalValueLayerDescription extends AnnotationLayerDescription {
    static $t: Type;
    protected get_type(): string;
    constructor();
    private ci;
    targetSeriesRef: string;
    private ch;
    finalValueSelectionMode: string;
    private cg;
    axisAnnotationTextColor: string;
    private ce;
    axisAnnotationBackground: string;
    private cc;
    axisAnnotationInterpolatedValuePrecision: number;
    private cf;
    axisAnnotationOutline: string;
    private b3;
    axisAnnotationPaddingLeft: number;
    private b5;
    axisAnnotationPaddingTop: number;
    private b4;
    axisAnnotationPaddingRight: number;
    private b2;
    axisAnnotationPaddingBottom: number;
    private b6;
    axisAnnotationStrokeThickness: number;
}
