import { ScatterBaseDescription } from "./ScatterBaseDescription";
import { Type } from "./type";
/**
 * @hidden
 */
export declare class ScatterSplineSeriesDescription extends ScatterBaseDescription {
    static $t: Type;
    protected get_type(): string;
    constructor();
    private cu;
    stiffness: number;
}
