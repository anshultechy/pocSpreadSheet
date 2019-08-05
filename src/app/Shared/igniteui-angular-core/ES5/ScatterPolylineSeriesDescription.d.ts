import { ShapeSeriesBaseDescription } from "./ShapeSeriesBaseDescription";
import { StyleSelectorDescription } from "./StyleSelectorDescription";
import { StyleDescription } from "./StyleDescription";
import { Type } from "./type";
/**
 * @hidden
 */
export declare class ScatterPolylineSeriesDescription extends ShapeSeriesBaseDescription {
    static $t: Type;
    protected get_type(): string;
    constructor();
    private b2;
    shapeStyleSelector: StyleSelectorDescription;
    private b0;
    shapeStyle: StyleDescription;
}
