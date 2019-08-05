import { AnnotationLayerDescription } from "./AnnotationLayerDescription";
import { Type } from "./type";
/**
 * @hidden
 */
export declare class CategoryItemHighlightLayerDescription extends AnnotationLayerDescription {
    static $t: Type;
    protected get_type(): string;
    constructor();
    private ca;
    targetSeriesRef: string;
    private b3;
    useInterpolation: boolean;
    private b8;
    highlightType: string;
    private b9;
    markerTemplateRef: string;
    private b6;
    bandHighlightWidth: number;
    private b2;
    skipUnknownValues: boolean;
}
