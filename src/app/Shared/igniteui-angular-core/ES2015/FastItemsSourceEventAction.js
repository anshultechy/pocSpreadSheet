/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { markEnum } from "./type";
/**
 * Describes available actions that can cause a DataSource event.
 */
export var FastItemsSourceEventAction;
(function (FastItemsSourceEventAction) {
    /**
     * One or more rows were removed from the data source.
     */
    FastItemsSourceEventAction[FastItemsSourceEventAction["Remove"] = 0] = "Remove";
    /**
     * One or more rows were added to the data source.
     */
    FastItemsSourceEventAction[FastItemsSourceEventAction["Insert"] = 1] = "Insert";
    /**
     * One or more rows were replaced in the data source.
     */
    FastItemsSourceEventAction[FastItemsSourceEventAction["Replace"] = 2] = "Replace";
    /**
     * An item property value changed in the data source.
     */
    FastItemsSourceEventAction[FastItemsSourceEventAction["Change"] = 3] = "Change";
    /**
     * The entire data source contents were reset.
     */
    FastItemsSourceEventAction[FastItemsSourceEventAction["Reset"] = 4] = "Reset";
})(FastItemsSourceEventAction || (FastItemsSourceEventAction = {}));
/**
 * @hidden
 */
export let FastItemsSourceEventAction_$type = markEnum('FastItemsSourceEventAction', 'Remove,0|Insert,1|Replace,2|Change,3|Reset,4');
//# sourceMappingURL=FastItemsSourceEventAction.js.map