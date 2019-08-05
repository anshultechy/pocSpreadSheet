/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { markEnum } from "../../igniteui-angular-core/ES5/type";
/**
 * Enumeration used to identify the cell to which the [[Spreadsheet]] should navigate when the enter key (or shift + enter) are pressed.
 */
export var SpreadsheetEnterKeyNavigationDirection;
(function (SpreadsheetEnterKeyNavigationDirection) {
    /**
     * The cell below should be activated.
     */
    SpreadsheetEnterKeyNavigationDirection[SpreadsheetEnterKeyNavigationDirection["Down"] = 0] = "Down";
    /**
     * The cell to the right should be activated
     */
    SpreadsheetEnterKeyNavigationDirection[SpreadsheetEnterKeyNavigationDirection["Right"] = 1] = "Right";
    /**
     * The cell above should be activated.
     */
    SpreadsheetEnterKeyNavigationDirection[SpreadsheetEnterKeyNavigationDirection["Up"] = 2] = "Up";
    /**
     * The cell to the left should be activated
     */
    SpreadsheetEnterKeyNavigationDirection[SpreadsheetEnterKeyNavigationDirection["Left"] = 3] = "Left";
})(SpreadsheetEnterKeyNavigationDirection || (SpreadsheetEnterKeyNavigationDirection = {}));
/**
 * @hidden
 */
export var SpreadsheetEnterKeyNavigationDirection_$type = markEnum('SpreadsheetEnterKeyNavigationDirection', 'Down,0|Right,1|Up,2|Left,3');
//# sourceMappingURL=SpreadsheetEnterKeyNavigationDirection.js.map
