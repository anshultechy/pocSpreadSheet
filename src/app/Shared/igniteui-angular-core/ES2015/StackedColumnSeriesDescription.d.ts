import { HorizontalStackedSeriesBaseDescription } from "./HorizontalStackedSeriesBaseDescription";
import { Type } from "./type";
/**
 * @hidden
 */
export declare class StackedColumnSeriesDescription extends HorizontalStackedSeriesBaseDescription {
    static $t: Type;
    protected get_type(): string;
    constructor();
    private cw;
    radiusX: number;
    private cx;
    radiusY: number;
}
