/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { CellInfoDescription } from "./CellInfoDescription";
import { markType } from "./type";
/**
 * @hidden
 */
export class NumericCellInfoDescription extends CellInfoDescription {
    constructor() {
        super();
        this.c6 = 0;
        this.c2 = false;
        this.de = null;
        this.df = null;
        this.dh = null;
        this.dg = null;
        this.di = null;
        this.c8 = 0;
        this.c9 = 0;
        this.da = 0;
        this.c3 = false;
    }
    get_type() {
        return "NumericCellInfo";
    }
    get numericValue() {
        return this.c6;
    }
    set numericValue(a) {
        this.c6 = a;
        this.e("NumericValue");
    }
    get hasDecimalValue() {
        return this.c2;
    }
    set hasDecimalValue(a) {
        this.c2 = a;
        this.e("HasDecimalValue");
    }
    get formatOverrideRef() {
        return this.de;
    }
    set formatOverrideRef(a) {
        this.de = a;
        this.e("FormatOverrideRef");
    }
    get negativePrefix() {
        return this.df;
    }
    set negativePrefix(a) {
        this.df = a;
        this.e("NegativePrefix");
    }
    get positivePrefix() {
        return this.dh;
    }
    set positivePrefix(a) {
        this.dh = a;
        this.e("PositivePrefix");
    }
    get negativeSuffix() {
        return this.dg;
    }
    set negativeSuffix(a) {
        this.dg = a;
        this.e("NegativeSuffix");
    }
    get positiveSuffix() {
        return this.di;
    }
    set positiveSuffix(a) {
        this.di = a;
        this.e("PositiveSuffix");
    }
    get maxFractionDigits() {
        return this.c8;
    }
    set maxFractionDigits(a) {
        this.c8 = a;
        this.e("MaxFractionDigits");
    }
    get minFractionDigits() {
        return this.c9;
    }
    set minFractionDigits(a) {
        this.c9 = a;
        this.e("MinFractionDigits");
    }
    get minIntegerDigits() {
        return this.da;
    }
    set minIntegerDigits(a) {
        this.da = a;
        this.e("MinIntegerDigits");
    }
    get showGroupingSeparator() {
        return this.c3;
    }
    set showGroupingSeparator(a) {
        this.c3 = a;
        this.e("ShowGroupingSeparator");
    }
}
NumericCellInfoDescription.$t = markType(NumericCellInfoDescription, 'NumericCellInfoDescription', CellInfoDescription.$);
//# sourceMappingURL=NumericCellInfoDescription.js.map