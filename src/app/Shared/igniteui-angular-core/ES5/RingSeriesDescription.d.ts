import { RingSeriesBaseDescription } from "./RingSeriesBaseDescription";
import { RingDescription } from "./RingDescription";
import { Type } from "./type";
/**
 * @hidden
 */
export declare class RingSeriesDescription extends RingSeriesBaseDescription {
    static $t: Type;
    protected get_type(): string;
    constructor();
    private bu;
    ring: RingDescription;
}
