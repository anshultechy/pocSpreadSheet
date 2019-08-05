/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { markEnum } from "./type";
/**
 * Indicates the horizontal position of an item relative to another object.
 */
export var HorizontalAlignment;
(function (HorizontalAlignment) {
    /**
     * Align the item to the left
     */
    HorizontalAlignment[HorizontalAlignment["Left"] = 0] = "Left";
    /**
     * Center the item
     */
    HorizontalAlignment[HorizontalAlignment["Center"] = 1] = "Center";
    /**
     * Align the item to the right
     */
    HorizontalAlignment[HorizontalAlignment["Right"] = 2] = "Right";
    /**
     * Stretch the item to the full width
     */
    HorizontalAlignment[HorizontalAlignment["Stretch"] = 3] = "Stretch";
})(HorizontalAlignment || (HorizontalAlignment = {}));
/**
 * @hidden
 */
export var HorizontalAlignment_$type = markEnum('HorizontalAlignment', 'Left,0|Center,1|Right,2|Stretch,3');
//# sourceMappingURL=HorizontalAlignment.js.map