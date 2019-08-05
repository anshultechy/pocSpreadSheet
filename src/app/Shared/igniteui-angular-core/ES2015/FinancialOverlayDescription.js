/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { FinancialSeriesDescription } from "./FinancialSeriesDescription";
import { markType } from "./type";
/**
 * @hidden
 */
export class FinancialOverlayDescription extends FinancialSeriesDescription {
    constructor() {
        super();
        this.ck = 0;
    }
    get_type() {
        return "FinancialOverlay";
    }
    get ignoreFirst() {
        return this.ck;
    }
    set ignoreFirst(a) {
        this.ck = a;
        this.e("IgnoreFirst");
    }
}
FinancialOverlayDescription.$t = markType(FinancialOverlayDescription, 'FinancialOverlayDescription', FinancialSeriesDescription.$);
//# sourceMappingURL=FinancialOverlayDescription.js.map