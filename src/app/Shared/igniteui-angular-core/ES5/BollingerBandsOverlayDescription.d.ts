import { FinancialOverlayDescription } from "./FinancialOverlayDescription";
import { Type } from "./type";
/**
 * @hidden
 */
export declare class BollingerBandsOverlayDescription extends FinancialOverlayDescription {
    static $t: Type;
    protected get_type(): string;
    constructor();
    private co;
    period: number;
    private cm;
    multiplier: number;
}
