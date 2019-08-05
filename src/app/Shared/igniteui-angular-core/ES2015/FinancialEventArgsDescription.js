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
export class FinancialEventArgsDescription extends Description {
    constructor() {
        super();
        this.k = 0;
        this.j = 0;
        this.f = null;
        this.h = null;
    }
    get_type() {
        return "FinancialEventArgs";
    }
    get type() {
        return this.get_type();
    }
    get position() {
        return this.k;
    }
    set position(a) {
        this.k = a;
        this.e("Position");
    }
    get count() {
        return this.j;
    }
    set count(a) {
        this.j = a;
        this.e("Count");
    }
    get dataSource() {
        return this.f;
    }
    set dataSource(a) {
        this.f = a;
        this.e("DataSource");
    }
    get supportingCalculations() {
        return this.h;
    }
    set supportingCalculations(a) {
        this.h = a;
        this.e("SupportingCalculations");
    }
}
FinancialEventArgsDescription.$t = markType(FinancialEventArgsDescription, 'FinancialEventArgsDescription', Description.$);
//# sourceMappingURL=FinancialEventArgsDescription.js.map