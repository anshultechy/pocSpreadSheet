import { FinancialOverlayDescription } from "./FinancialOverlayDescription";
import { Type } from "./type";
/**
 * @hidden
 */
export declare class PriceChannelOverlayDescription extends FinancialOverlayDescription {
    static $t: Type;
    protected get_type(): string;
    constructor();
    private cm;
    period: number;
}
