/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { AxisDescription } from "./AxisDescription";
import { markType } from "./type";
/**
 * @hidden
 */
export class NumericAxisBaseDescription extends AxisDescription {
    constructor() {
        super();
        this.de = 0;
        this.c8 = 0;
        this.db = 0;
        this.dd = 0;
        this.c7 = 0;
        this.da = 0;
        this.dc = 0;
        this.c6 = 0;
        this.df = 0;
        this.c9 = 0;
        this.dg = 0;
        this.c2 = false;
        this.c1 = false;
        this.dt = 0;
        this.c0 = false;
    }
    get_type() {
        return "NumericAxisBase";
    }
    get minimumValue() {
        return this.de;
    }
    set minimumValue(a) {
        this.de = a;
        this.e("MinimumValue");
    }
    get actualMinimumValue() {
        return this.c8;
    }
    set actualMinimumValue(a) {
        this.c8 = a;
        this.e("ActualMinimumValue");
    }
    get actualVisibleMinimumValue() {
        return this.db;
    }
    set actualVisibleMinimumValue(a) {
        this.db = a;
        this.e("ActualVisibleMinimumValue");
    }
    get maximumValue() {
        return this.dd;
    }
    set maximumValue(a) {
        this.dd = a;
        this.e("MaximumValue");
    }
    get actualMaximumValue() {
        return this.c7;
    }
    set actualMaximumValue(a) {
        this.c7 = a;
        this.e("ActualMaximumValue");
    }
    get actualVisibleMaximumValue() {
        return this.da;
    }
    set actualVisibleMaximumValue(a) {
        this.da = a;
        this.e("ActualVisibleMaximumValue");
    }
    get interval() {
        return this.dc;
    }
    set interval(a) {
        this.dc = a;
        this.e("Interval");
    }
    get actualInterval() {
        return this.c6;
    }
    set actualInterval(a) {
        this.c6 = a;
        this.e("ActualInterval");
    }
    get minorInterval() {
        return this.df;
    }
    set minorInterval(a) {
        this.df = a;
        this.e("MinorInterval");
    }
    get actualMinorInterval() {
        return this.c9;
    }
    set actualMinorInterval(a) {
        this.c9 = a;
        this.e("ActualMinorInterval");
    }
    get referenceValue() {
        return this.dg;
    }
    set referenceValue(a) {
        this.dg = a;
        this.e("ReferenceValue");
    }
    get isLogarithmic() {
        return this.c2;
    }
    set isLogarithmic(a) {
        this.c2 = a;
        this.e("IsLogarithmic");
    }
    get actualIsLogarithmic() {
        return this.c1;
    }
    set actualIsLogarithmic(a) {
        this.c1 = a;
        this.e("ActualIsLogarithmic");
    }
    get logarithmBase() {
        return this.dt;
    }
    set logarithmBase(a) {
        this.dt = a;
        this.e("LogarithmBase");
    }
    get abbreviateLargeNumbers() {
        return this.c0;
    }
    set abbreviateLargeNumbers(a) {
        this.c0 = a;
        this.e("AbbreviateLargeNumbers");
    }
}
NumericAxisBaseDescription.$t = markType(NumericAxisBaseDescription, 'NumericAxisBaseDescription', AxisDescription.$);
//# sourceMappingURL=NumericAxisBaseDescription.js.map