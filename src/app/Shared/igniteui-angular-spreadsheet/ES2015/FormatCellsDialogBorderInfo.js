/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, INotifyPropertyChanged_$type, PropertyChangedEventArgs, markType } from "../../igniteui-angular-core/ES2015/type";
import { WorkbookColorInfo } from "../../igniteui-angular-excel/ES2015/excel.core";
/**
 * @hidden
 */
export class FormatCellsDialogBorderInfo extends Base {
    constructor(a, b) {
        super();
        this._s = null;
        this._a = 0;
        this._ai = false;
        this._v = null;
        this._d = 0;
        this._al = false;
        this._w = null;
        this._e = 0;
        this._am = false;
        this._x = null;
        this._f = 0;
        this._an = false;
        this._y = null;
        this._g = 0;
        this._ao = false;
        this._z = null;
        this._h = 0;
        this._ap = false;
        this._t = null;
        this._b = 0;
        this._aj = false;
        this._u = null;
        this._c = 0;
        this._ak = false;
        this._q = 0;
        this._av = false;
        this._ax = false;
        this.propertyChanged = null;
        this._av = a;
        this._ax = b;
    }
    get _aa() {
        return this._s;
    }
    set _aa(a) {
        if (WorkbookColorInfo.l_op_Inequality(a, this._s)) {
            this._s = a;
            this._br("BottomCellBorderColorInfo");
        }
    }
    get _i() {
        return this._a;
    }
    set _i(a) {
        if (a != this._a) {
            this._a = a;
            this._br("BottomCellBorderStyle");
            this._br("IsBottomCellBorderVisible");
        }
    }
    get _r() {
        return this._q;
    }
    set _r(a) {
        if (a != this._q) {
            let b = this._as;
            let c = this._at;
            this._q = a;
            this._br("DiagonalBorders");
            if (this._q == 3 || this._q == 7) {
                if (false == b) {
                    this._br("IsDiagonalDownCellBorderVisible");
                }
            }
            else if (true == b) {
                this._br("IsDiagonalDownCellBorderVisible");
            }
            if (this._q == 5 || this._q == 7) {
                if (false == c) {
                    this._br("IsDiagonalUpCellBorderVisible");
                }
            }
            else if (true == c) {
                this._br("IsDiagonalUpCellBorderVisible");
            }
        }
    }
    get _ab() {
        return this._t;
    }
    set _ab(a) {
        if (WorkbookColorInfo.l_op_Inequality(a, this._t)) {
            this._t = a;
            this._u = a;
            this._br("DiagonalDownCellBorderColorInfo");
        }
    }
    get _j() {
        return this._b;
    }
    set _j(a) {
        if (a != this._b) {
            this._b = a;
            if (false == FormatCellsDialogBorderInfo._aq(a) && false == FormatCellsDialogBorderInfo._aq(this._c)) {
                this._c = a;
            }
            this._bs();
            this._br("DiagonalDownCellBorderStyle");
            this._br("IsDiagonalDownCellBorderVisible");
        }
    }
    get _ac() {
        return this._u;
    }
    set _ac(a) {
        if (WorkbookColorInfo.l_op_Inequality(a, this._u)) {
            this._u = a;
            this._t = a;
            this._br("DiagonalUpCellBorderColorInfo");
        }
    }
    get _k() {
        return this._c;
    }
    set _k(a) {
        if (a != this._c) {
            this._c = a;
            if (false == FormatCellsDialogBorderInfo._aq(a) && false == FormatCellsDialogBorderInfo._aq(this._b)) {
                this._b = a;
            }
            this._bs();
            this._br("DiagonalUpCellBorderStyle");
            this._br("IsDiagonalUpCellBorderVisible");
        }
    }
    get _ad() {
        return this._v;
    }
    set _ad(a) {
        if (WorkbookColorInfo.l_op_Inequality(a, this._v)) {
            this._v = a;
            this._br("InsideHorizontalCellBorderColorInfo");
        }
    }
    get _l() {
        return this._d;
    }
    set _l(a) {
        if (a != this._d) {
            this._d = a;
            this._br("InsideHorizontalCellBorderStyle");
            this._br("IsInsideHorizontalCellBorderVisible");
        }
    }
    get _ae() {
        return this._w;
    }
    set _ae(a) {
        if (WorkbookColorInfo.l_op_Inequality(a, this._w)) {
            this._w = a;
            this._br("InsideVerticalCellBorderColorInfo");
        }
    }
    get _m() {
        return this._e;
    }
    set _m(a) {
        if (a != this._e) {
            this._e = a;
            this._br("InsideVerticalCellBorderStyle");
            this._br("IsInsideVerticalCellBorderVisible");
        }
    }
    get _ar() {
        return false == FormatCellsDialogBorderInfo._aq(this._i);
    }
    get _au() {
        return this._av || this._ax;
    }
    get _aw() {
        return false == FormatCellsDialogBorderInfo._aq(this._l);
    }
    get _ay() {
        return false == FormatCellsDialogBorderInfo._aq(this._m);
    }
    get _az() {
        return false == FormatCellsDialogBorderInfo._aq(this._n);
    }
    get _a0() {
        return false == FormatCellsDialogBorderInfo._aq(this._o);
    }
    get _a1() {
        return false == FormatCellsDialogBorderInfo._aq(this._p);
    }
    get _as() {
        return this._r == 3 || this._r == 7;
    }
    get _at() {
        return this._r == 5 || this._r == 7;
    }
    get _af() {
        return this._x;
    }
    set _af(a) {
        if (WorkbookColorInfo.l_op_Inequality(a, this._x)) {
            this._x = a;
            this._br("LeftCellBorderColorInfo");
        }
    }
    get _n() {
        return this._f;
    }
    set _n(a) {
        if (a != this._f) {
            this._f = a;
            this._br("LeftCellBorderStyle");
            this._br("IsLeftCellBorderVisible");
        }
    }
    get _ag() {
        return this._y;
    }
    set _ag(a) {
        if (WorkbookColorInfo.l_op_Inequality(a, this._y)) {
            this._y = a;
            this._br("RightCellBorderColorInfo");
        }
    }
    get _o() {
        return this._g;
    }
    set _o(a) {
        if (a != this._g) {
            this._g = a;
            this._br("RightCellBorderStyle");
            this._br("IsRightCellBorderVisible");
        }
    }
    get _ah() {
        return this._z;
    }
    set _ah(a) {
        if (WorkbookColorInfo.l_op_Inequality(a, this._z)) {
            this._z = a;
            this._br("TopCellBorderColorInfo");
        }
    }
    get _p() {
        return this._h;
    }
    set _p(a) {
        if (a != this._h) {
            this._h = a;
            this._br("TopCellBorderStyle");
            this._br("IsTopCellBorderVisible");
        }
    }
    static _aq(a) {
        return a == 0 || a == -1;
    }
    _bs() {
        if (this._j != 0 && this._j != -1 && this._k != 0 && this._k != -1) {
            this._r = 7;
        }
        else if (this._j != 0 && this._j != -1) {
            this._r = 3;
        }
        else if (this._k != 0 && this._k != -1) {
            this._r = 5;
        }
        else {
            this._r = 1;
        }
    }
    _br(a) {
        let b = this.propertyChanged;
        if (null != b) {
            b(this, new PropertyChangedEventArgs(a));
        }
    }
}
FormatCellsDialogBorderInfo.$t = markType(FormatCellsDialogBorderInfo, 'FormatCellsDialogBorderInfo', Base.$, [INotifyPropertyChanged_$type]);
//# sourceMappingURL=FormatCellsDialogBorderInfo.js.map
