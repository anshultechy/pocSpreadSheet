/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { markEnum } from "./type";
/**
 * Describes available modes for color interpolation.
 */
export var InterpolationMode;
(function (InterpolationMode) {
    /**
     * Interpolation in RGB space.
     */
    InterpolationMode[InterpolationMode["RGB"] = 0] = "RGB";
    /**
     * Interpolation in HSV space.
     */
    InterpolationMode[InterpolationMode["HSV"] = 1] = "HSV";
})(InterpolationMode || (InterpolationMode = {}));
/**
 * @hidden
 */
export let InterpolationMode_$type = markEnum('InterpolationMode', 'RGB,0|HSV,1');
//# sourceMappingURL=InterpolationMode.js.map