import { PolarLineSeriesBaseDescription } from "./PolarLineSeriesBaseDescription";
import { Type } from "./type";
/**
 * @hidden
 */
export declare class PolarAreaSeriesDescription extends PolarLineSeriesBaseDescription {
    static $t: Type;
    protected get_type(): string;
    constructor();
    private cw;
    unknownValuePlotting: string;
}
