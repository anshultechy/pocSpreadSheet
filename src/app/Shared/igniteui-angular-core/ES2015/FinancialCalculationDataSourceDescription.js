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
export class FinancialCalculationDataSourceDescription extends Description {
    constructor() {
        super();
        this.h = null;
        this.g = null;
        this.f = null;
        this.x = 0;
        this.y = 0;
        this.w = 0;
        this.v = 0;
        this.u = 0;
        this.t = 0;
        this.p = 0;
        this.o = 0;
        this.n = 0;
        this.l = false;
    }
    get_type() {
        return "FinancialCalculationDataSource";
    }
    get type() {
        return this.get_type();
    }
    get typicalColumn() {
        return this.h;
    }
    set typicalColumn(a) {
        this.h = a;
        this.e("TypicalColumn");
    }
    get trueRange() {
        return this.g;
    }
    set trueRange(a) {
        this.g = a;
        this.e("TrueRange");
    }
    get trueLow() {
        return this.f;
    }
    set trueLow(a) {
        this.f = a;
        this.e("TrueLow");
    }
    get period() {
        return this.x;
    }
    set period(a) {
        this.x = a;
        this.e("Period");
    }
    get shortPeriod() {
        return this.y;
    }
    set shortPeriod(a) {
        this.y = a;
        this.e("ShortPeriod");
    }
    get longPeriod() {
        return this.w;
    }
    set longPeriod(a) {
        this.w = a;
        this.e("LongPeriod");
    }
    get count() {
        return this.v;
    }
    set count(a) {
        this.v = a;
        this.e("Count");
    }
    get calculateFrom() {
        return this.u;
    }
    set calculateFrom(a) {
        this.u = a;
        this.e("CalculateFrom");
    }
    get calculateCount() {
        return this.t;
    }
    set calculateCount(a) {
        this.t = a;
        this.e("CalculateCount");
    }
    get multiplier() {
        return this.p;
    }
    set multiplier(a) {
        this.p = a;
        this.e("Multiplier");
    }
    get minimumValue() {
        return this.o;
    }
    set minimumValue(a) {
        this.o = a;
        this.e("MinimumValue");
    }
    get maximumValue() {
        return this.n;
    }
    set maximumValue(a) {
        this.n = a;
        this.e("MaximumValue");
    }
    get specifiesRange() {
        return this.l;
    }
    set specifiesRange(a) {
        this.l = a;
        this.e("SpecifiesRange");
    }
}
FinancialCalculationDataSourceDescription.$t = markType(FinancialCalculationDataSourceDescription, 'FinancialCalculationDataSourceDescription', Description.$);
//# sourceMappingURL=FinancialCalculationDataSourceDescription.js.map