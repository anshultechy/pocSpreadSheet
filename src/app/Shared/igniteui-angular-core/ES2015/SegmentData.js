/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, markType } from "./type";
import { IVisualData_$type } from "./IVisualData";
import { StringBuilder } from "./StringBuilder";
/**
 * @hidden
 */
export class SegmentData extends Base {
    serialize() {
        let a = new StringBuilder(0);
        a.u("{");
        a.u("type: \"" + this.type + "\", ");
        a.u(this.a());
        a.u("}");
        return a.toString();
    }
    a() {
        return "";
    }
}
SegmentData.$t = markType(SegmentData, 'SegmentData', Base.$, [IVisualData_$type]);
//# sourceMappingURL=SegmentData.js.map