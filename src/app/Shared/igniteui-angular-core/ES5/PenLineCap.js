/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { markEnum } from "./type";
/**
 * Indicates the type of shape at the end of a line.
 */
export var PenLineCap;
(function (PenLineCap) {
    /**
     * A flat end
     */
    PenLineCap[PenLineCap["Flat"] = 0] = "Flat";
    /**
     * A square end
     */
    PenLineCap[PenLineCap["Square"] = 1] = "Square";
    /**
     * A round end
     */
    PenLineCap[PenLineCap["Round"] = 2] = "Round";
    /**
     * A triangluar end
     */
    PenLineCap[PenLineCap["Triangle"] = 3] = "Triangle";
})(PenLineCap || (PenLineCap = {}));
/**
 * @hidden
 */
export var PenLineCap_$type = markEnum('PenLineCap', 'Flat,0|Square,1|Round,2|Triangle,3');
//# sourceMappingURL=PenLineCap.js.map