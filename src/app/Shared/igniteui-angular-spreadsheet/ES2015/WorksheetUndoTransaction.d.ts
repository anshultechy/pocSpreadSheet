import { UndoTransaction } from "./UndoTransaction";
import { UndoExecuteContext } from "./UndoExecuteContext";
import { Type } from "../../igniteui-angular-core/ES2015/type";
/**
 * @hidden
 */
export declare class WorksheetUndoTransaction extends UndoTransaction {
    static $t: Type;
    constructor(a: string);
    protected k(a: UndoExecuteContext): UndoTransaction;
    b(a: UndoExecuteContext): boolean;
}
