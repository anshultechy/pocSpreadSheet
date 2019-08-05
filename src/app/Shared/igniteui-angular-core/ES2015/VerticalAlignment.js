/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { markEnum } from "./type";
/**
 * Indicates the vertica position of an item relative to another object.
 */
export var VerticalAlignment;
(function (VerticalAlignment) {
    /**
     * Align the item to the top
     */
    VerticalAlignment[VerticalAlignment["Top"] = 0] = "Top";
    /**
     * Center the item
     */
    VerticalAlignment[VerticalAlignment["Center"] = 1] = "Center";
    /**
     * Align the item to the bottom
     */
    VerticalAlignment[VerticalAlignment["Bottom"] = 2] = "Bottom";
    /**
     * Stretch the item to the full height
     */
    VerticalAlignment[VerticalAlignment["Stretch"] = 3] = "Stretch";
})(VerticalAlignment || (VerticalAlignment = {}));
/**
 * @hidden
 */
export let VerticalAlignment_$type = markEnum('VerticalAlignment', 'Top,0|Center,1|Bottom,2|Stretch,3');
//# sourceMappingURL=VerticalAlignment.js.map