import { Type } from "../../igniteui-angular-core/ES5/type";
/**
 * Enumeration used to identify the cause of the [[UndoUnit.execute]]
 * @see [[UndoExecuteContext.reason]]
 */
export declare enum UndoExecuteReason {
    /**
     * The execute is being performed because an Undo was requested.
     */
    Undo = 0,
    /**
     * The execute is being performed because a Redo was requested
     */
    Redo = 1,
    /**
     * The execute is being performed because an [[UndoTransaction]] was being rolled back.
     */
    Rollback = 2
}
/**
 * @hidden
 */
export declare let UndoExecuteReason_$type: Type;
