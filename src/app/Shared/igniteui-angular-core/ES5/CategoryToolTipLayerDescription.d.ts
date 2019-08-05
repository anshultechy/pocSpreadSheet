import { AnnotationLayerDescription } from "./AnnotationLayerDescription";
import { Type } from "./type";
/**
 * @hidden
 */
export declare class CategoryToolTipLayerDescription extends AnnotationLayerDescription {
    static $t: Type;
    protected get_type(): string;
    constructor();
    private b2;
    useInterpolation: boolean;
}
