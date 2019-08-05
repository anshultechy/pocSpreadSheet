import { AnnotationLayerDescription } from "./AnnotationLayerDescription";
import { Type } from "./type";
/**
 * @hidden
 */
export declare class CategoryHighlightLayerDescription extends AnnotationLayerDescription {
    static $t: Type;
    protected get_type(): string;
    constructor();
    private b6;
    targetAxisRef: string;
    private b2;
    useInterpolation: boolean;
    private b4;
    bandHighlightWidth: number;
}
