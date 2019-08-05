import { ColumnDescription } from "./ColumnDescription";
import { Type } from "./type";
/**
 * @hidden
 */
export declare class NumericColumnDescription extends ColumnDescription {
    static $t: Type;
    protected get_type(): string;
    constructor();
    private cl;
    negativePrefix: string;
    private cn;
    positivePrefix: string;
    private cm;
    negativeSuffix: string;
    private co;
    positiveSuffix: string;
    private ce;
    maxFractionDigits: number;
    private cf;
    minFractionDigits: number;
    private cg;
    minIntegerDigits: number;
    private cc;
    showGroupingSeparator: boolean;
    private ck;
    formatOverrideRef: string;
}
