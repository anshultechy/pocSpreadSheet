import { HorizontalRangeCategorySeriesDescription } from "./HorizontalRangeCategorySeriesDescription";
import { Type } from "./type";
/**
 * @hidden
 */
export declare class RangeColumnSeriesDescription extends HorizontalRangeCategorySeriesDescription {
    static $t: Type;
    protected get_type(): string;
    constructor();
    private cs;
    radiusX: number;
    private ct;
    radiusY: number;
}
