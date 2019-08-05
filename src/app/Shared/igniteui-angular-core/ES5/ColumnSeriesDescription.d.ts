import { HorizontalAnchoredCategorySeriesDescription } from "./HorizontalAnchoredCategorySeriesDescription";
import { Type } from "./type";
/**
 * @hidden
 */
export declare class ColumnSeriesDescription extends HorizontalAnchoredCategorySeriesDescription {
    static $t: Type;
    protected get_type(): string;
    constructor();
    private c4;
    radiusX: number;
    private c5;
    radiusY: number;
    private c8;
    consolidatedColumnVerticalPosition: string;
}
