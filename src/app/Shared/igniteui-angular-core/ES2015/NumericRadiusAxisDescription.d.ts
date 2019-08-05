import { NumericAxisBaseDescription } from "./NumericAxisBaseDescription";
import { Type } from "./type";
/**
 * @hidden
 */
export declare class NumericRadiusAxisDescription extends NumericAxisBaseDescription {
    static $t: Type;
    protected get_type(): string;
    constructor();
    private dw;
    radiusExtentScale: number;
    private dv;
    innerRadiusExtentScale: number;
}
