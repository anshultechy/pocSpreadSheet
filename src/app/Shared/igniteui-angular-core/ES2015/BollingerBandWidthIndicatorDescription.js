/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { StrategyBasedIndicatorDescription } from "./StrategyBasedIndicatorDescription";
import { markType } from "./type";
/**
 * @hidden
 */
export class BollingerBandWidthIndicatorDescription extends StrategyBasedIndicatorDescription {
    constructor() {
        super();
        this.c0 = 0;
        this.cy = 0;
    }
    get_type() {
        return "BollingerBandWidthIndicator";
    }
    get period() {
        return this.c0;
    }
    set period(a) {
        this.c0 = a;
        this.e("Period");
    }
    get multiplier() {
        return this.cy;
    }
    set multiplier(a) {
        this.cy = a;
        this.e("Multiplier");
    }
}
BollingerBandWidthIndicatorDescription.$t = markType(BollingerBandWidthIndicatorDescription, 'BollingerBandWidthIndicatorDescription', StrategyBasedIndicatorDescription.$);
//# sourceMappingURL=BollingerBandWidthIndicatorDescription.js.map