import { Type } from "../../igniteui-angular-core/ES5/type";
/**
 * Used to identify the result of a call to [[UndoUnit.merge]]
 */
export declare enum UndoMergeAction {
    /**
     * The information from the specified unit could not be merged and should be added to the undo stack.
     */
    NotMerged = 0,
    /**
     * The information from the specified unit was merged in and doesn't need to be added to the undo stack.
     */
    Merged = 1,
    /**
     * The information from the specified unit was merged and the original unit should be removed from the undo stack.
     */
    MergedRemoveUnit = 2
}
/**
 * @hidden
 */
export declare let UndoMergeAction_$type: Type;
