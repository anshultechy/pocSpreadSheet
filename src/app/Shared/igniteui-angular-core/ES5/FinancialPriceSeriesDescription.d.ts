import { FinancialSeriesDescription } from "./FinancialSeriesDescription";
import { Type } from "./type";
/**
 * @hidden
 */
export declare class FinancialPriceSeriesDescription extends FinancialSeriesDescription {
    static $t: Type;
    protected get_type(): string;
    constructor();
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
    private cp;
    displayType: string;
    private cq;
    negativeOutline: string;
}
