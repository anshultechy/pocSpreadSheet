import { RingSeriesBaseDescription } from "./RingSeriesBaseDescription";
import { Type } from "./type";
/**
 * @hidden
 */
export declare class HierarchicalRingSeriesDescription extends RingSeriesBaseDescription {
    static $t: Type;
    protected get_type(): string;
    constructor();
    private bu;
    childrenMemberPath: string;
}
