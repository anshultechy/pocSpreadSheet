import { AnchoredCategorySeriesDescription } from "./AnchoredCategorySeriesDescription";
import { Type } from "./type";
/**
 * @hidden
 */
export declare abstract class HorizontalAnchoredCategorySeriesDescription extends AnchoredCategorySeriesDescription {
    static $t: Type;
    protected get_type(): string;
    constructor();
    private c0;
    xAxisRef: string;
    private c1;
    yAxisRef: string;
}
