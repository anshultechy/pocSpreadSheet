import { FinancialSeriesDescription } from "./FinancialSeriesDescription";
import { Type } from "./type";
/**
 * @hidden
 */
export declare abstract class FinancialIndicatorDescription extends FinancialSeriesDescription {
    static $t: Type;
    protected get_type(): string;
    constructor();
    private cr;
    displayType: string;
    private cm;
    ignoreFirst: number;
    private ct;
    trendLineType: string;
    private cs;
    trendLineBrush: string;
    private cq;
    actualTrendLineBrush: string;
    private ck;
    trendLineThickness: number;
    private cn;
    trendLinePeriod: number;
}
