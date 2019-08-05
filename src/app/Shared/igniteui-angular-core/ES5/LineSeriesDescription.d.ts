import { HorizontalAnchoredCategorySeriesDescription } from "./HorizontalAnchoredCategorySeriesDescription";
import { Type } from "./type";
/**
 * @hidden
 */
export declare class LineSeriesDescription extends HorizontalAnchoredCategorySeriesDescription {
    static $t: Type;
    protected get_type(): string;
    constructor();
    private c4;
    unknownValuePlotting: string;
}
