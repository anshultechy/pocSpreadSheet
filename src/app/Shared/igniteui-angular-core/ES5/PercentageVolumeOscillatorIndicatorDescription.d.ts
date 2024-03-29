import { StrategyBasedIndicatorDescription } from "./StrategyBasedIndicatorDescription";
import { Type } from "./type";
/**
 * @hidden
 */
export declare class PercentageVolumeOscillatorIndicatorDescription extends StrategyBasedIndicatorDescription {
    static $t: Type;
    protected get_type(): string;
    constructor();
    private cz;
    shortPeriod: number;
    private cy;
    longPeriod: number;
}
