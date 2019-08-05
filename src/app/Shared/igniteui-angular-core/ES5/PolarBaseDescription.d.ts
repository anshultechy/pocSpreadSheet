import { MarkerSeriesDescription } from "./MarkerSeriesDescription";
import { Type } from "./type";
/**
 * @hidden
 */
export declare abstract class PolarBaseDescription extends MarkerSeriesDescription {
    static $t: Type;
    protected get_type(): string;
    constructor();
    private ck;
    angleMemberPath: string;
    private cm;
    radiusMemberPath: string;
    private cj;
    angleAxisRef: string;
    private cl;
    radiusAxisRef: string;
    private b7;
    useCartesianInterpolation: boolean;
    private cc;
    maximumMarkers: number;
    private co;
    trendLineType: string;
    private cn;
    trendLineBrush: string;
    private ci;
    actualTrendLineBrush: string;
    private ca;
    trendLineThickness: number;
    private cd;
    trendLinePeriod: number;
    private ce;
    trendLineZIndex: number;
    private b6;
    clipSeriesToBounds: boolean;
}
