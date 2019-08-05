import { StrategyBasedIndicatorDescription } from "./StrategyBasedIndicatorDescription";
import { Type } from "./type";
/**
 * @hidden
 */
export declare class RelativeStrengthIndexIndicatorDescription extends StrategyBasedIndicatorDescription {
    static $t: Type;
    protected get_type(): string;
    constructor();
    private cy;
    period: number;
}