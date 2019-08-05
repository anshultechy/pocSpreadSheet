/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { markEnum } from "../../igniteui-angular-core/ES2015/type";
/**
 * Used to identify the result of a call to [[UndoUnit.merge]]
 */
export var UndoMergeAction;
(function (UndoMergeAction) {
    /**
     * The information from the specified unit could not be merged and should be added to the undo stack.
     */
    UndoMergeAction[UndoMergeAction["NotMerged"] = 0] = "NotMerged";
    /**
     * The information from the specified unit was merged in and doesn't need to be added to the undo stack.
     */
    UndoMergeAction[UndoMergeAction["Merged"] = 1] = "Merged";
    /**
     * The information from the specified unit was merged and the original unit should be removed from the undo stack.
     */
    UndoMergeAction[UndoMergeAction["MergedRemoveUnit"] = 2] = "MergedRemoveUnit";
})(UndoMergeAction || (UndoMergeAction = {}));
/**
 * @hidden
 */
export let UndoMergeAction_$type = markEnum('UndoMergeAction', 'NotMerged,0|Merged,1|MergedRemoveUnit,2');
//# sourceMappingURL=UndoMergeAction.js.map