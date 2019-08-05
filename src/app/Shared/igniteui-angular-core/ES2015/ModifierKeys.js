/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { markEnum } from "./type";
export var ModifierKeys;
(function (ModifierKeys) {
    ModifierKeys[ModifierKeys["None"] = 0] = "None";
    ModifierKeys[ModifierKeys["Alt"] = 1] = "Alt";
    ModifierKeys[ModifierKeys["Control"] = 2] = "Control";
    ModifierKeys[ModifierKeys["Shift"] = 4] = "Shift";
    ModifierKeys[ModifierKeys["Windows"] = 8] = "Windows";
    ModifierKeys[ModifierKeys["Apple"] = 8] = "Apple";
})(ModifierKeys || (ModifierKeys = {}));
/**
 * @hidden
 */
export let ModifierKeys_$type = markEnum('ModifierKeys', 'None,0|Alt,1|Control,2|Shift,4|Windows,8|Apple,8');
//# sourceMappingURL=ModifierKeys.js.map