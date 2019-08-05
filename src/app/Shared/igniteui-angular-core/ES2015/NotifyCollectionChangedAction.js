/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { markEnum } from "./type";
export var NotifyCollectionChangedAction;
(function (NotifyCollectionChangedAction) {
    NotifyCollectionChangedAction[NotifyCollectionChangedAction["Add"] = 0] = "Add";
    NotifyCollectionChangedAction[NotifyCollectionChangedAction["Remove"] = 1] = "Remove";
    NotifyCollectionChangedAction[NotifyCollectionChangedAction["Replace"] = 2] = "Replace";
    NotifyCollectionChangedAction[NotifyCollectionChangedAction["Reset"] = 4] = "Reset";
})(NotifyCollectionChangedAction || (NotifyCollectionChangedAction = {}));
/**
 * @hidden
 */
export let NotifyCollectionChangedAction_$type = markEnum('NotifyCollectionChangedAction', 'Add,0|Remove,1|Replace,2|Reset,4');
//# sourceMappingURL=NotifyCollectionChangedAction.js.map