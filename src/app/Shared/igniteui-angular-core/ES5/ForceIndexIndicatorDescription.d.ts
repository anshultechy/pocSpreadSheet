import { StrategyBasedIndicatorDescription } from "./StrategyBasedIndicatorDescription";
import { Type } from "./type";
/**
 * @hidden
 */
export declare class ForceIndexIndicatorDescription extends StrategyBasedIndicatorDescription {
    static $t: Type;
    protected get_type(): string;
    constructor();
    private cy;
    period: number;
}