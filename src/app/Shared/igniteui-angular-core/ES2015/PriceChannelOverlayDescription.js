/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { FinancialOverlayDescription } from "./FinancialOverlayDescription";
import { markType } from "./type";
/**
 * @hidden
 */
export class PriceChannelOverlayDescription extends FinancialOverlayDescription {
    constructor() {
        super();
        this.cm = 0;
    }
    get_type() {
        return "PriceChannelOverlay";
    }
    get period() {
        return this.cm;
    }
    set period(a) {
        this.cm = a;
        this.e("Period");
    }
}
PriceChannelOverlayDescription.$t = markType(PriceChannelOverlayDescription, 'PriceChannelOverlayDescription', FinancialOverlayDescription.$);
//# sourceMappingURL=PriceChannelOverlayDescription.js.map