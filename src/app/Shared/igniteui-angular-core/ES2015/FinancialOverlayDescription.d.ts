import { FinancialSeriesDescription } from "./FinancialSeriesDescription";
import { Type } from "./type";
/**
 * @hidden
 */
export declare abstract class FinancialOverlayDescription extends FinancialSeriesDescription {
    static $t: Type;
    protected get_type(): string;
    constructor();
    private ck;
    ignoreFirst: number;
}
