/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { SpreadsheetDialogFormatBase } from "./SpreadsheetDialogFormatBase";
import { SpreadsheetDialogFormat } from "./SpreadsheetDialogFormat";
import { List$1 } from "../../igniteui-angular-core/ES2015/List$1";
import { markType } from "../../igniteui-angular-core/ES2015/type";
import { Enumerable } from "../../igniteui-angular-core/ES2015/Enumerable";
/**
 * @hidden
 */
export class SpreadsheetDialogFormatCategory extends SpreadsheetDialogFormatBase {
    constructor() {
        super();
        this._d = null;
        this._z = null;
        this._ad = null;
        this._ab = null;
        this._v = null;
        this._x = 0;
        this._k = false;
        this._g = false;
        this._f = 0;
        this._w = new List$1(SpreadsheetDialogFormat.$, 0);
        this._y = 2;
        this._l = false;
        this._h = true;
        this._e = 1;
    }
    toString() {
        return this._aa;
    }
    get _aa() {
        return this._z;
    }
    set _aa(a) {
        this._z = a;
        this._a("CategoryName");
    }
    get _ae() {
        return this._ad;
    }
    set _ae(a) {
        this._ad = a;
        this._a("FormatsHeader");
    }
    get _ac() {
        return this._ab;
    }
    set _ac(a) {
        this._ab = a;
        this._a("Description");
    }
    get _w() {
        return this._v;
    }
    set _w(a) {
        this._v = a;
        this._a("Formats");
    }
    get _y() {
        return this._x;
    }
    set _y(a) {
        this._x = a;
        this._a("DecimalPlaces");
    }
    get _l() {
        return this._k;
    }
    set _l(a) {
        this._k = a;
        this._a("IsCustom");
    }
    get _h() {
        return this._g;
    }
    set _h(a) {
        this._g = a;
        this._a("AreFormatsVisible");
    }
    get _e() {
        return this._f;
    }
    set _e(a) {
        this._f = a;
        this._a("CategoryType");
    }
    _b(a) {
        let b = new SpreadsheetDialogFormat(0, a, a);
        this._w.add(b);
        return b;
    }
    _af(a, b) {
        this._w.add(new SpreadsheetDialogFormat(0, a, b));
    }
    _c(a) {
        return Enumerable.ag(SpreadsheetDialogFormat.$, this._w, (b) => b._e.toLowerCase() == a.toLowerCase());
    }
    get _o() {
        return this._f == 0;
    }
    get _p() {
        return this._f == 1;
    }
    get _j() {
        return this._f == 2;
    }
    get _i() {
        return this._f == 3;
    }
    get _m() {
        return this._f == 4;
    }
    get _u() {
        return this._f == 5;
    }
    get _q() {
        return this._f == 6;
    }
    get _n() {
        return this._f == 7;
    }
    get _r() {
        return this._f == 8;
    }
    get _t() {
        return this._f == 9;
    }
    get _s() {
        return this._f == 10;
    }
}
SpreadsheetDialogFormatCategory.$t = markType(SpreadsheetDialogFormatCategory, 'SpreadsheetDialogFormatCategory', SpreadsheetDialogFormatBase.$);
//# sourceMappingURL=SpreadsheetDialogFormatCategory.js.map