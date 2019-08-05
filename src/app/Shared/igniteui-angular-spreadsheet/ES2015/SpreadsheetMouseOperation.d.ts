import { PropertyChangeNotifierExtended } from "./PropertyChangeNotifierExtended";
import { MouseOperationState } from "./MouseOperationState";
import { Type } from "../../igniteui-angular-core/ES2015/type";
import { SpreadsheetTransactionOperation } from "./SpreadsheetTransactionOperation";
import { SpreadsheetToolTipContext } from "./SpreadsheetToolTipContext";
import { InputProxy } from "./InputProxy";
import { MouseDownInProgressResult } from "./MouseDownInProgressResult";
/**
 * @hidden
 */
export declare abstract class SpreadsheetMouseOperation extends PropertyChangeNotifierExtended {
    static $t: Type;
    private _h;
    private _j;
    _i: MouseOperationState;
    _l: (arg1: SpreadsheetTransactionOperation, arg2: boolean, arg3: () => void) => void;
    _k: SpreadsheetToolTipContext;
    _n(): void;
    _p(a: InputProxy): void;
    _q(a: InputProxy): void;
    _r(a: InputProxy): void;
    _s(a: InputProxy): void;
    _t(a: InputProxy): void;
    _g(a: InputProxy): MouseDownInProgressResult;
    protected abstract _o(a: MouseOperationState, b: MouseOperationState): void;
    protected abstract _m(a: InputProxy): boolean;
    protected abstract _u(a: InputProxy): void;
}
