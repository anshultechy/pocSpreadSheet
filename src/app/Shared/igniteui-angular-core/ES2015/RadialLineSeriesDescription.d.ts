import { AnchoredRadialSeriesDescription } from "./AnchoredRadialSeriesDescription";
import { Type } from "./type";
/**
 * @hidden
 */
export declare class RadialLineSeriesDescription extends AnchoredRadialSeriesDescription {
    static $t: Type;
    protected get_type(): string;
    constructor();
    private cq;
    unknownValuePlotting: string;
}
