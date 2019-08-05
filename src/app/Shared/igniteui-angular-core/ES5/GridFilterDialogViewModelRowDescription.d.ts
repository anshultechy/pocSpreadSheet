import { Description } from "./Description";
import { Type } from "./type";
/**
 * @hidden
 */
export declare class GridFilterDialogViewModelRowDescription extends Description {
    static $t: Type;
    protected get_type(): string;
    readonly type: string;
    constructor();
    private h;
    operatorTypes: string[];
    private g;
    operators: string[];
    private l;
    currentOperator: string;
    private f;
    operandNumber: number[];
    private m;
    operand1Ref: string;
    private n;
    operand2Ref: string;
}
