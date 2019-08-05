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
export class FinancialChartCustomIndicatorArgsDescription extends Description {
    constructor() {
        super();
        this.f = null;
        this.h = 0;
    }
    get_type() {
        return "FinancialChartCustomIndicatorArgs";
    }
    get type() {
        return this.get_type();
    }
    get series() {
        return this.f;
    }
    set series(a) {
        this.f = a;
        this.e("Series");
    }
    get index() {
        return this.h;
    }
    set index(a) {
        this.h = a;
        this.e("Index");
    }
}
FinancialChartCustomIndicatorArgsDescription.$t = markType(FinancialChartCustomIndicatorArgsDescription, 'FinancialChartCustomIndicatorArgsDescription', Description.$);
//# sourceMappingURL=FinancialChartCustomIndicatorArgsDescription.js.map