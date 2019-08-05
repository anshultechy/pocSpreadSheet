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
export class FinancialCalculationSupportingCalculationsDescription extends Description {
    constructor() {
        super();
        this.f = null;
        this.h = null;
        this.i = null;
        this.g = null;
        this.q = null;
        this.o = null;
        this.p = null;
        this.n = null;
        this.v = null;
    }
    get_type() {
        return "FinancialCalculationSupportingCalculations";
    }
    get type() {
        return this.get_type();
    }
    get eMA() {
        return this.f;
    }
    set eMA(a) {
        this.f = a;
        this.e("EMA");
    }
    get sMA() {
        return this.h;
    }
    set sMA(a) {
        this.h = a;
        this.e("SMA");
    }
    get sTDEV() {
        return this.i;
    }
    set sTDEV(a) {
        this.i = a;
        this.e("STDEV");
    }
    get movingSum() {
        return this.g;
    }
    set movingSum(a) {
        this.g = a;
        this.e("MovingSum");
    }
    get shortVolumeOscillatorAverage() {
        return this.q;
    }
    set shortVolumeOscillatorAverage(a) {
        this.q = a;
        this.e("ShortVolumeOscillatorAverage");
    }
    get longVolumeOscillatorAverage() {
        return this.o;
    }
    set longVolumeOscillatorAverage(a) {
        this.o = a;
        this.e("LongVolumeOscillatorAverage");
    }
    get shortPriceOscillatorAverage() {
        return this.p;
    }
    set shortPriceOscillatorAverage(a) {
        this.p = a;
        this.e("ShortPriceOscillatorAverage");
    }
    get longPriceOscillatorAverage() {
        return this.n;
    }
    set longPriceOscillatorAverage(a) {
        this.n = a;
        this.e("LongPriceOscillatorAverage");
    }
    get makeSafeRef() {
        return this.v;
    }
    set makeSafeRef(a) {
        this.v = a;
        this.e("MakeSafeRef");
    }
}
FinancialCalculationSupportingCalculationsDescription.$t = markType(FinancialCalculationSupportingCalculationsDescription, 'FinancialCalculationSupportingCalculationsDescription', Description.$);
//# sourceMappingURL=FinancialCalculationSupportingCalculationsDescription.js.map