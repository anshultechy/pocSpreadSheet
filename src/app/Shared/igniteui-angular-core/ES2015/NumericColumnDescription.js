/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { ColumnDescription } from "./ColumnDescription";
import { markType } from "./type";
/**
 * @hidden
 */
export class NumericColumnDescription extends ColumnDescription {
    constructor() {
        super();
        this.cl = null;
        this.cn = null;
        this.cm = null;
        this.co = null;
        this.ce = 0;
        this.cf = 0;
        this.cg = 0;
        this.cc = false;
        this.ck = null;
    }
    get_type() {
        return "NumericColumn";
    }
    get negativePrefix() {
        return this.cl;
    }
    set negativePrefix(a) {
        this.cl = a;
        this.e("NegativePrefix");
    }
    get positivePrefix() {
        return this.cn;
    }
    set positivePrefix(a) {
        this.cn = a;
        this.e("PositivePrefix");
    }
    get negativeSuffix() {
        return this.cm;
    }
    set negativeSuffix(a) {
        this.cm = a;
        this.e("NegativeSuffix");
    }
    get positiveSuffix() {
        return this.co;
    }
    set positiveSuffix(a) {
        this.co = a;
        this.e("PositiveSuffix");
    }
    get maxFractionDigits() {
        return this.ce;
    }
    set maxFractionDigits(a) {
        this.ce = a;
        this.e("MaxFractionDigits");
    }
    get minFractionDigits() {
        return this.cf;
    }
    set minFractionDigits(a) {
        this.cf = a;
        this.e("MinFractionDigits");
    }
    get minIntegerDigits() {
        return this.cg;
    }
    set minIntegerDigits(a) {
        this.cg = a;
        this.e("MinIntegerDigits");
    }
    get showGroupingSeparator() {
        return this.cc;
    }
    set showGroupingSeparator(a) {
        this.cc = a;
        this.e("ShowGroupingSeparator");
    }
    get formatOverrideRef() {
        return this.ck;
    }
    set formatOverrideRef(a) {
        this.ck = a;
        this.e("FormatOverrideRef");
    }
}
NumericColumnDescription.$t = markType(NumericColumnDescription, 'NumericColumnDescription', ColumnDescription.$);
//# sourceMappingURL=NumericColumnDescription.js.map