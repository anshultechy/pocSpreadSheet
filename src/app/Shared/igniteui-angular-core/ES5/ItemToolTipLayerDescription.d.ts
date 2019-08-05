import { AnnotationLayerDescription } from "./AnnotationLayerDescription";
import { Type } from "./type";
/**
 * @hidden
 */
export declare class ItemToolTipLayerDescription extends AnnotationLayerDescription {
    static $t: Type;
    protected get_type(): string;
    constructor();
    private b3;
    useInterpolation: boolean;
    private b2;
    skipUnknownValues: boolean;
}
