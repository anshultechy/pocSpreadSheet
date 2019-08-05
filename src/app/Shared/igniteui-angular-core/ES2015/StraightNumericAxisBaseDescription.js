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
export class StraightNumericAxisBaseDescription extends NumericAxisBaseDescription {
    constructor() {
        super();
        this.dv = null;
    }
    get_type() {
        return "StraightNumericAxisBase";
    }
    get scaleMode() {
        return this.dv;
    }
    set scaleMode(a) {
        this.dv = a;
        this.e("ScaleMode");
    }
}
StraightNumericAxisBaseDescription.$t = markType(StraightNumericAxisBaseDescription, 'StraightNumericAxisBaseDescription', NumericAxisBaseDescription.$);
//# sourceMappingURL=StraightNumericAxisBaseDescription.js.map