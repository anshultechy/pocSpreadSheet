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
export class NumericRadiusAxisDescription extends NumericAxisBaseDescription {
    constructor() {
        super();
        this.dw = 0;
        this.dv = 0;
    }
    get_type() {
        return "NumericRadiusAxis";
    }
    get radiusExtentScale() {
        return this.dw;
    }
    set radiusExtentScale(a) {
        this.dw = a;
        this.e("RadiusExtentScale");
    }
    get innerRadiusExtentScale() {
        return this.dv;
    }
    set innerRadiusExtentScale(a) {
        this.dv = a;
        this.e("InnerRadiusExtentScale");
    }
}
NumericRadiusAxisDescription.$t = markType(NumericRadiusAxisDescription, 'NumericRadiusAxisDescription', NumericAxisBaseDescription.$);
//# sourceMappingURL=NumericRadiusAxisDescription.js.map