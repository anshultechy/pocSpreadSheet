/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { BrushScaleDescription } from "./BrushScaleDescription";
import { markType } from "./type";
/**
 * @hidden
 */
export class ValueBrushScaleDescription extends BrushScaleDescription {
    constructor() {
        super();
        this.n = 0;
        this.m = 0;
        this.k = false;
        this.q = 0;
    }
    get_type() {
        return "ValueBrushScale";
    }
    get minimumValue() {
        return this.n;
    }
    set minimumValue(a) {
        this.n = a;
        this.e("MinimumValue");
    }
    get maximumValue() {
        return this.m;
    }
    set maximumValue(a) {
        this.m = a;
        this.e("MaximumValue");
    }
    get isLogarithmic() {
        return this.k;
    }
    set isLogarithmic(a) {
        this.k = a;
        this.e("IsLogarithmic");
    }
    get logarithmBase() {
        return this.q;
    }
    set logarithmBase(a) {
        this.q = a;
        this.e("LogarithmBase");
    }
}
ValueBrushScaleDescription.$t = markType(ValueBrushScaleDescription, 'ValueBrushScaleDescription', BrushScaleDescription.$);
//# sourceMappingURL=ValueBrushScaleDescription.js.map