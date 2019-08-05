/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { markEnum } from "../../igniteui-angular-core/ES2015/type";
/**
 * Used to indicate the type of operation that [[UndoHistoryItem]] represents.
 */
export var UndoHistoryItemType;
(function (UndoHistoryItemType) {
    /**
     * The item represents an undo operation.
     */
    UndoHistoryItemType[UndoHistoryItemType["Undo"] = 0] = "Undo";
    /**
     * The item represents a redo operation.
     */
    UndoHistoryItemType[UndoHistoryItemType["Redo"] = 1] = "Redo";
})(UndoHistoryItemType || (UndoHistoryItemType = {}));
/**
 * @hidden
 */
export let UndoHistoryItemType_$type = markEnum('UndoHistoryItemType', 'Undo,0|Redo,1');
//# sourceMappingURL=UndoHistoryItemType.js.map