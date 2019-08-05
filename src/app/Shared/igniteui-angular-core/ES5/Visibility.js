/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { markEnum } from "./type";
/**
 * Specifies the display state of an element.
 */
export var Visibility;
(function (Visibility) {
    /**
     * Display the element.
     */
    Visibility[Visibility["Visible"] = 0] = "Visible";
    /**
     * Do not display the element.
     */
    Visibility[Visibility["Collapsed"] = 1] = "Collapsed";
})(Visibility || (Visibility = {}));
/**
 * @hidden
 */
export var Visibility_$type = markEnum('Visibility', 'Visible,0|Collapsed,1');
//# sourceMappingURL=Visibility.js.map