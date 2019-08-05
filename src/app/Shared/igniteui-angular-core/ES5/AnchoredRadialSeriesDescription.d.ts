import { RadialBaseDescription } from "./RadialBaseDescription";
import { Type } from "./type";
/**
 * @hidden
 */
export declare abstract class AnchoredRadialSeriesDescription extends RadialBaseDescription {
    static $t: Type;
    protected get_type(): string;
    constructor();
    private cl;
    valueMemberPath: string;
    private ck;
    trendLineType: string;
    private cj;
    trendLineBrush: string;
    private ci;
    actualTrendLineBrush: string;
    private cc;
    trendLineThickness: number;
    private ce;
    trendLinePeriod: number;
    private cf;
    trendLineZIndex: number;
}
