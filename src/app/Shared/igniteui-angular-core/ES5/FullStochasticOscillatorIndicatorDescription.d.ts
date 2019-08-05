import { StrategyBasedIndicatorDescription } from "./StrategyBasedIndicatorDescription";
import { Type } from "./type";
/**
 * @hidden
 */
export declare class FullStochasticOscillatorIndicatorDescription extends StrategyBasedIndicatorDescription {
    static $t: Type;
    protected get_type(): string;
    constructor();
    private cy;
    period: number;
    private cz;
    smoothingPeriod: number;
    private c0;
    triggerPeriod: number;
}
