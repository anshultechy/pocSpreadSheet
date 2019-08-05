import { NumericAxisBaseDescription } from "./NumericAxisBaseDescription";
import { Type } from "./type";
/**
 * @hidden
 */
export declare class NumericAngleAxisDescription extends NumericAxisBaseDescription {
    static $t: Type;
    protected get_type(): string;
    constructor();
    private dv;
    startAngleOffset: number;
}
