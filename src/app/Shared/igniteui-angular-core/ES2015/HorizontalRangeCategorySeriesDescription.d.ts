import { RangeCategorySeriesDescription } from "./RangeCategorySeriesDescription";
import { Type } from "./type";
/**
 * @hidden
 */
export declare abstract class HorizontalRangeCategorySeriesDescription extends RangeCategorySeriesDescription {
    static $t: Type;
    protected get_type(): string;
    constructor();
    private co;
    xAxisRef: string;
    private cp;
    yAxisRef: string;
}
