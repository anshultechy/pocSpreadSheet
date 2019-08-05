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
export class MovingAverageConvergenceDivergenceIndicatorDescription extends StrategyBasedIndicatorDescription {
    constructor() {
        super();
        this.cz = 0;
        this.cy = 0;
        this.c0 = 0;
    }
    get_type() {
        return "MovingAverageConvergenceDivergenceIndicator";
    }
    get shortPeriod() {
        return this.cz;
    }
    set shortPeriod(a) {
        this.cz = a;
        this.e("ShortPeriod");
    }
    get longPeriod() {
        return this.cy;
    }
    set longPeriod(a) {
        this.cy = a;
        this.e("LongPeriod");
    }
    get signalPeriod() {
        return this.c0;
    }
    set signalPeriod(a) {
        this.c0 = a;
        this.e("SignalPeriod");
    }
}
MovingAverageConvergenceDivergenceIndicatorDescription.$t = markType(MovingAverageConvergenceDivergenceIndicatorDescription, 'MovingAverageConvergenceDivergenceIndicatorDescription', StrategyBasedIndicatorDescription.$);
//# sourceMappingURL=MovingAverageConvergenceDivergenceIndicatorDescription.js.map