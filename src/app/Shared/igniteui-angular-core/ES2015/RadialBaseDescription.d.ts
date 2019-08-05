import { MarkerSeriesDescription } from "./MarkerSeriesDescription";
import { Type } from "./type";
/**
 * @hidden
 */
export declare abstract class RadialBaseDescription extends MarkerSeriesDescription {
    static $t: Type;
    protected get_type(): string;
    constructor();
    private b8;
    angleAxisRef: string;
    private b9;
    valueAxisRef: string;
    private b6;
    clipSeriesToBounds: boolean;
}
