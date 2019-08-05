/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { markEnum } from "./type";
export var CancelBehavior;
(function (CancelBehavior) {
    CancelBehavior[CancelBehavior["KeepCurrent"] = 0] = "KeepCurrent";
    CancelBehavior[CancelBehavior["ToEnd"] = 1] = "ToEnd";
    CancelBehavior[CancelBehavior["ToBeginning"] = 2] = "ToBeginning";
})(CancelBehavior || (CancelBehavior = {}));
/**
 * @hidden
 */
export let CancelBehavior_$type = markEnum('CancelBehavior', 'KeepCurrent,0|ToEnd,1|ToBeginning,2');
//# sourceMappingURL=CancelBehavior.js.map