import { VerticalAnchoredCategorySeriesDescription } from "./VerticalAnchoredCategorySeriesDescription";
import { Type } from "./type";
/**
 * @hidden
 */
export declare class BarSeriesDescription extends VerticalAnchoredCategorySeriesDescription {
    static $t: Type;
    protected get_type(): string;
    constructor();
    private c4;
    radiusX: number;
    private c5;
    radiusY: number;
}
