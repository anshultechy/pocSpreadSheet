/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { NumericAxisBaseDescription } from "./NumericAxisBaseDescription";
import { markType } from "./type";
/**
 * @hidden
 */
export class NumericAngleAxisDescription extends NumericAxisBaseDescription {
    constructor() {
        super();
        this.dv = 0;
    }
    get_type() {
        return "NumericAngleAxis";
    }
    get startAngleOffset() {
        return this.dv;
    }
    set startAngleOffset(a) {
        this.dv = a;
        this.e("StartAngleOffset");
    }
}
NumericAngleAxisDescription.$t = markType(NumericAngleAxisDescription, 'NumericAngleAxisDescription', NumericAxisBaseDescription.$);
//# sourceMappingURL=NumericAngleAxisDescription.js.map