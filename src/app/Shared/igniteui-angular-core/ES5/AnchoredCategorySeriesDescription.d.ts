import { CategorySeriesDescription } from "./CategorySeriesDescription";
import { Type } from "./type";
/**
 * @hidden
 */
export declare abstract class AnchoredCategorySeriesDescription extends CategorySeriesDescription {
    static $t: Type;
    protected get_type(): string;
    constructor();
    private ct;
    valueMemberPath: string;
    private cs;
    trendLineType: string;
    private cr;
    trendLineBrush: string;
    private co;
    actualTrendLineBrush: string;
    private ck;
    trendLineThickness: number;
    private cm;
    trendLinePeriod: number;
    private cq;
    markerCollisionAvoidance: string;
    private cp;
    consolidatedItemHitTestBehavior: string;
}
