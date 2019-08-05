/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { markEnum } from "../../igniteui-angular-core/ES2015/type";
/**
 * Enumeration used to identify how the validation error event should be handled.
 */
export var SpreadsheetEditModeValidationErrorAction;
(function (SpreadsheetEditModeValidationErrorAction) {
    /**
     * Displays a dialog to the end user to determine the action to be taken. The options displayed will depend on the ErrorStyle of the [[DataValidationRule.errorStyle]]
     */
    SpreadsheetEditModeValidationErrorAction[SpreadsheetEditModeValidationErrorAction["ShowPrompt"] = 0] = "ShowPrompt";
    /**
     * Keeps the cell in edit mode with the invalid value.
     */
    SpreadsheetEditModeValidationErrorAction[SpreadsheetEditModeValidationErrorAction["StayInEditMode"] = 1] = "StayInEditMode";
    /**
     * Exits edit mode but reverts to the previous value similar to what happens when the end user chooses Cancel from the displayed dialog.
     */
    SpreadsheetEditModeValidationErrorAction[SpreadsheetEditModeValidationErrorAction["RevertChange"] = 2] = "RevertChange";
    /**
     * Exits edit mode keeping the new value.
     */
    SpreadsheetEditModeValidationErrorAction[SpreadsheetEditModeValidationErrorAction["AcceptChange"] = 3] = "AcceptChange";
})(SpreadsheetEditModeValidationErrorAction || (SpreadsheetEditModeValidationErrorAction = {}));
/**
 * @hidden
 */
export let SpreadsheetEditModeValidationErrorAction_$type = markEnum('SpreadsheetEditModeValidationErrorAction', 'ShowPrompt,0|StayInEditMode,1|RevertChange,2|AcceptChange,3');
//# sourceMappingURL=SpreadsheetEditModeValidationErrorAction.js.map