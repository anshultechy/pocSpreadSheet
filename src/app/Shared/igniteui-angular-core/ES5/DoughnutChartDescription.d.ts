import { Description } from "./Description";
import { RingSeriesBaseDescription } from "./RingSeriesBaseDescription";
import { Type } from "./type";
/**
 * @hidden
 */
export declare class DoughnutChartDescription extends Description {
    static $t: Type;
    private f;
    series: RingSeriesBaseDescription[];
    private x;
    background: string;
    protected get_type(): string;
    readonly type: string;
    constructor();
    private i;
    allowSliceSelection: boolean;
    private j;
    isSurfaceInteractionDisabled: boolean;
    private h;
    allowSliceExplosion: boolean;
    private o;
    innerExtent: number;
    private z;
    selectedSliceFill: string;
    private aa;
    selectedSliceStroke: string;
    private r;
    selectedSliceStrokeThickness: number;
    private q;
    selectedSliceOpacity: number;
    private p;
    pixelScalingRatio: number;
    private n;
    actualPixelScalingRatio: number;
    private ab;
    SliceClickRef: string;
    private y;
    HoleDimensionsChangedRef: string;
}
