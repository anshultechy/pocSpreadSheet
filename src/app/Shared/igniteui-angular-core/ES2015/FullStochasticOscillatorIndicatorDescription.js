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
export class FullStochasticOscillatorIndicatorDescription extends StrategyBasedIndicatorDescription {
    constructor() {
        super();
        this.cy = 0;
        this.cz = 0;
        this.c0 = 0;
    }
    get_type() {
        return "FullStochasticOscillatorIndicator";
    }
    get period() {
        return this.cy;
    }
    set period(a) {
        this.cy = a;
        this.e("Period");
    }
    get smoothingPeriod() {
        return this.cz;
    }
    set smoothingPeriod(a) {
        this.cz = a;
        this.e("SmoothingPeriod");
    }
    get triggerPeriod() {
        return this.c0;
    }
    set triggerPeriod(a) {
        this.c0 = a;
        this.e("TriggerPeriod");
    }
}
FullStochasticOscillatorIndicatorDescription.$t = markType(FullStochasticOscillatorIndicatorDescription, 'FullStochasticOscillatorIndicatorDescription', StrategyBasedIndicatorDescription.$);
//# sourceMappingURL=FullStochasticOscillatorIndicatorDescription.js.map