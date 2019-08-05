/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { markEnum } from "../../igniteui-angular-core/ES2015/type";
/**
 * Enumeration used to identify the cause of the [[UndoUnit.execute]]
 * @see [[UndoExecuteContext.reason]]
 */
export var UndoExecuteReason;
(function (UndoExecuteReason) {
    /**
     * The execute is being performed because an Undo was requested.
     */
    UndoExecuteReason[UndoExecuteReason["Undo"] = 0] = "Undo";
    /**
     * The execute is being performed because a Redo was requested
     */
    UndoExecuteReason[UndoExecuteReason["Redo"] = 1] = "Redo";
    /**
     * The execute is being performed because an [[UndoTransaction]] was being rolled back.
     */
    UndoExecuteReason[UndoExecuteReason["Rollback"] = 2] = "Rollback";
})(UndoExecuteReason || (UndoExecuteReason = {}));
/**
 * @hidden
 */
export let UndoExecuteReason_$type = markEnum('UndoExecuteReason', 'Undo,0|Redo,1|Rollback,2');
//# sourceMappingURL=UndoExecuteReason.js.map