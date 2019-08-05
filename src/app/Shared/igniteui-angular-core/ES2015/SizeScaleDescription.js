/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Description } from "./Description";
import { markType } from "./type";
/**
 * @hidden
 */
export class SizeScaleDescription extends Description {
    constructor() {
        super();
        this.i = 0;
        this.h = 0;
        this.f = false;
        this.l = 0;
        this.n = null;
    }
    get_type() {
        return "SizeScale";
    }
    get type() {
        return this.get_type();
    }
    get minimumValue() {
        return this.i;
    }
    set minimumValue(a) {
        this.i = a;
        this.e("MinimumValue");
    }
    get maximumValue() {
        return this.h;
    }
    set maximumValue(a) {
        this.h = a;
        this.e("MaximumValue");
    }
    get isLogarithmic() {
        return this.f;
    }
    set isLogarithmic(a) {
        this.f = a;
        this.e("IsLogarithmic");
    }
    get logarithmBase() {
        return this.l;
    }
    set logarithmBase(a) {
        this.l = a;
        this.e("LogarithmBase");
    }
    get PropertyUpdatedRef() {
        return this.n;
    }
    set PropertyUpdatedRef(a) {
        this.n = a;
        this.e("PropertyUpdatedRef");
    }
}
SizeScaleDescription.$t = markType(SizeScaleDescription, 'SizeScaleDescription', Description.$);
//# sourceMappingURL=SizeScaleDescription.js.map