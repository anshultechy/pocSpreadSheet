import { HorizontalAnchoredCategorySeriesDescription } from "./HorizontalAnchoredCategorySeriesDescription";
import { Type } from "./type";
/**
 * @hidden
 */
export declare abstract class SplineSeriesBaseDescription extends HorizontalAnchoredCategorySeriesDescription {
    static $t: Type;
    protected get_type(): string;
    constructor();
    private c4;
    splineType: string;
}