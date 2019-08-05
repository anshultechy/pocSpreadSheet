import { HorizontalAnchoredCategorySeriesDescription } from "./HorizontalAnchoredCategorySeriesDescription";
import { Type } from "./type";
/**
 * @hidden
 */
export declare class AreaSeriesDescription extends HorizontalAnchoredCategorySeriesDescription {
    static $t: Type;
    protected get_type(): string;
    constructor();
    private c4;
    unknownValuePlotting: string;
}
