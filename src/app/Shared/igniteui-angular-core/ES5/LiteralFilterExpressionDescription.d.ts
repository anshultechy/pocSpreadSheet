import { FilterExpressionDescription } from "./FilterExpressionDescription";
import { Type } from "./type";
/**
 * @hidden
 */
export declare class LiteralFilterExpressionDescription extends FilterExpressionDescription {
    static $t: Type;
    protected get_type(): string;
    constructor();
    private i;
    literalValueRef: string;
    private g;
    leaveUnquoted: boolean;
}
