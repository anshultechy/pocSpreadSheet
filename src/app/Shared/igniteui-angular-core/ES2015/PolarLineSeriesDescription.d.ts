import { PolarLineSeriesBaseDescription } from "./PolarLineSeriesBaseDescription";
import { Type } from "./type";
/**
 * @hidden
 */
export declare class PolarLineSeriesDescription extends PolarLineSeriesBaseDescription {
    static $t: Type;
    protected get_type(): string;
    constructor();
    private cw;
    unknownValuePlotting: string;
}