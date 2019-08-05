import { SeriesDescription } from "./SeriesDescription";
import { PointDescription } from "./PointDescription";
import { Type } from "./type";
/**
 * @hidden
 */
export declare abstract class AnnotationLayerDescription extends SeriesDescription {
    static $t: Type;
    protected get_type(): string;
    constructor();
    private bw;
    useIndex: boolean;
    private bx;
    useLegend: boolean;
    private bs;
    cursorPosition: PointDescription;
    private bu;
    isDefaultCrosshairDisabled: boolean;
    private bv;
    shouldRenderAsOverlay: boolean;
}
