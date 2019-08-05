import { AnchoredRadialSeriesDescription } from "./AnchoredRadialSeriesDescription";
import { Type } from "./type";
/**
 * @hidden
 */
export declare class RadialPieSeriesDescription extends AnchoredRadialSeriesDescription {
    static $t: Type;
    protected get_type(): string;
    constructor();
    private cq;
    radiusX: number;
    private cr;
    radiusY: number;
}
