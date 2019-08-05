import { CellInfoDescription } from "./CellInfoDescription";
import { Type } from "./type";
/**
 * @hidden
 */
export declare class NumericCellInfoDescription extends CellInfoDescription {
    static $t: Type;
    protected get_type(): string;
    constructor();
    private c6;
    numericValue: number;
    private c2;
    hasDecimalValue: boolean;
    private de;
    formatOverrideRef: string;
    private df;
    negativePrefix: string;
    private dh;
    positivePrefix: string;
    private dg;
    negativeSuffix: string;
    private di;
    positiveSuffix: string;
    private c8;
    maxFractionDigits: number;
    private c9;
    minFractionDigits: number;
    private da;
    minIntegerDigits: number;
    private c3;
    showGroupingSeparator: boolean;
}
