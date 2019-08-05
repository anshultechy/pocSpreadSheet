import { NumericAxisBaseDescription } from "./NumericAxisBaseDescription";
import { Type } from "./type";
/**
 * @hidden
 */
export declare abstract class StraightNumericAxisBaseDescription extends NumericAxisBaseDescription {
    static $t: Type;
    protected get_type(): string;
    constructor();
    private dv;
    scaleMode: string;
}
