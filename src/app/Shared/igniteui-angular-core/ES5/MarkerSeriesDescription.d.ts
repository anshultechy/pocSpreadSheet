import { SeriesDescription } from "./SeriesDescription";
import { Type } from "./type";
/**
 * @hidden
 */
export declare abstract class MarkerSeriesDescription extends SeriesDescription {
    static $t: Type;
    protected get_type(): string;
    constructor();
    private by;
    markerType: string;
    private bx;
    markerTemplateRef: string;
    private bu;
    actualMarkerTemplateRef: string;
    private bv;
    markerBrush: string;
    private bs;
    actualMarkerBrush: string;
    private bw;
    markerOutline: string;
    private bt;
    actualMarkerOutline: string;
}
