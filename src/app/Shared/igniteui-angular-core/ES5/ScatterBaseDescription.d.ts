import { MarkerSeriesDescription } from "./MarkerSeriesDescription";
import { Type } from "./type";
/**
 * @hidden
 */
export declare abstract class ScatterBaseDescription extends MarkerSeriesDescription {
    static $t: Type;
    protected get_type(): string;
    constructor();
    private ci;
    xAxisRef: string;
    private ck;
    yAxisRef: string;
    private cj;
    xMemberPath: string;
    private cl;
    yMemberPath: string;
    private ch;
    trendLineType: string;
    private cg;
    trendLineBrush: string;
    private ce;
    actualTrendLineBrush: string;
    private b6;
    trendLineThickness: number;
    private b9;
    trendLinePeriod: number;
    private cf;
    markerCollisionAvoidance: string;
    private ca;
    trendLineZIndex: number;
    private b8;
    maximumMarkers: number;
}
