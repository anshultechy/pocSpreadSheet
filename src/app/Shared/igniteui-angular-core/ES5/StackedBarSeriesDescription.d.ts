import { VerticalStackedSeriesBaseDescription } from "./VerticalStackedSeriesBaseDescription";
import { Type } from "./type";
/**
 * @hidden
 */
export declare class StackedBarSeriesDescription extends VerticalStackedSeriesBaseDescription {
    static $t: Type;
    protected get_type(): string;
    constructor();
    private cw;
    radiusX: number;
    private cx;
    radiusY: number;
}
