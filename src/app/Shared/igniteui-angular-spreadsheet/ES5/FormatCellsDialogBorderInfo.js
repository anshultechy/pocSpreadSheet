/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, INotifyPropertyChanged_$type, PropertyChangedEventArgs, markType } from "../../igniteui-angular-core/ES5/type";
import { WorkbookColorInfo } from "../../igniteui-angular-excel/ES5/excel.core";
/**
 * @hidden
 */
var FormatCellsDialogBorderInfo = /** @class */ (function (_super) {
    tslib_1.__extends(FormatCellsDialogBorderInfo, _super);
    function FormatCellsDialogBorderInfo(a, b) {
        var _this = _super.call(this) || this;
        _this._s = null;
        _this._a = 0;
        _this._ai = false;
        _this._v = null;
        _this._d = 0;
        _this._al = false;
        _this._w = null;
        _this._e = 0;
        _this._am = false;
        _this._x = null;
        _this._f = 0;
        _this._an = false;
        _this._y = null;
        _this._g = 0;
        _this._ao = false;
        _this._z = null;
        _this._h = 0;
        _this._ap = false;
        _this._t = null;
        _this._b = 0;
        _this._aj = false;
        _this._u = null;
        _this._c = 0;
        _this._ak = false;
        _this._q = 0;
        _this._av = false;
        _this._ax = false;
        _this.propertyChanged = null;
        _this._av = a;
        _this._ax = b;
        return _this;
    }
    Object.defineProperty(FormatCellsDialogBorderInfo.prototype, "_aa", {
        get: function () {
            return this._s;
        },
        set: function (a) {
            if (WorkbookColorInfo.l_op_Inequality(a, this._s)) {
                this._s = a;
                this._br("BottomCellBorderColorInfo");
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormatCellsDialogBorderInfo.prototype, "_i", {
        get: function () {
            return this._a;
        },
        set: function (a) {
            if (a != this._a) {
                this._a = a;
                this._br("BottomCellBorderStyle");
                this._br("IsBottomCellBorderVisible");
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormatCellsDialogBorderInfo.prototype, "_r", {
        get: function () {
            return this._q;
        },
        set: function (a) {
            if (a != this._q) {
                var b = this._as;
                var c = this._at;
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
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormatCellsDialogBorderInfo.prototype, "_ab", {
        get: function () {
            return this._t;
        },
        set: function (a) {
            if (WorkbookColorInfo.l_op_Inequality(a, this._t)) {
                this._t = a;
                this._u = a;
                this._br("DiagonalDownCellBorderColorInfo");
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormatCellsDialogBorderInfo.prototype, "_j", {
        get: function () {
            return this._b;
        },
        set: function (a) {
            if (a != this._b) {
                this._b = a;
                if (false == FormatCellsDialogBorderInfo._aq(a) && false == FormatCellsDialogBorderInfo._aq(this._c)) {
                    this._c = a;
                }
                this._bs();
                this._br("DiagonalDownCellBorderStyle");
                this._br("IsDiagonalDownCellBorderVisible");
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormatCellsDialogBorderInfo.prototype, "_ac", {
        get: function () {
            return this._u;
        },
        set: function (a) {
            if (WorkbookColorInfo.l_op_Inequality(a, this._u)) {
                this._u = a;
                this._t = a;
                this._br("DiagonalUpCellBorderColorInfo");
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormatCellsDialogBorderInfo.prototype, "_k", {
        get: function () {
            return this._c;
        },
        set: function (a) {
            if (a != this._c) {
                this._c = a;
                if (false == FormatCellsDialogBorderInfo._aq(a) && false == FormatCellsDialogBorderInfo._aq(this._b)) {
                    this._b = a;
                }
                this._bs();
                this._br("DiagonalUpCellBorderStyle");
                this._br("IsDiagonalUpCellBorderVisible");
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormatCellsDialogBorderInfo.prototype, "_ad", {
        get: function () {
            return this._v;
        },
        set: function (a) {
            if (WorkbookColorInfo.l_op_Inequality(a, this._v)) {
                this._v = a;
                this._br("InsideHorizontalCellBorderColorInfo");
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormatCellsDialogBorderInfo.prototype, "_l", {
        get: function () {
            return this._d;
        },
        set: function (a) {
            if (a != this._d) {
                this._d = a;
                this._br("InsideHorizontalCellBorderStyle");
                this._br("IsInsideHorizontalCellBorderVisible");
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormatCellsDialogBorderInfo.prototype, "_ae", {
        get: function () {
            return this._w;
        },
        set: function (a) {
            if (WorkbookColorInfo.l_op_Inequality(a, this._w)) {
                this._w = a;
                this._br("InsideVerticalCellBorderColorInfo");
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormatCellsDialogBorderInfo.prototype, "_m", {
        get: function () {
            return this._e;
        },
        set: function (a) {
            if (a != this._e) {
                this._e = a;
                this._br("InsideVerticalCellBorderStyle");
                this._br("IsInsideVerticalCellBorderVisible");
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormatCellsDialogBorderInfo.prototype, "_ar", {
        get: function () {
            return false == FormatCellsDialogBorderInfo._aq(this._i);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormatCellsDialogBorderInfo.prototype, "_au", {
        get: function () {
            return this._av || this._ax;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormatCellsDialogBorderInfo.prototype, "_aw", {
        get: function () {
            return false == FormatCellsDialogBorderInfo._aq(this._l);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormatCellsDialogBorderInfo.prototype, "_ay", {
        get: function () {
            return false == FormatCellsDialogBorderInfo._aq(this._m);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormatCellsDialogBorderInfo.prototype, "_az", {
        get: function () {
            return false == FormatCellsDialogBorderInfo._aq(this._n);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormatCellsDialogBorderInfo.prototype, "_a0", {
        get: function () {
            return false == FormatCellsDialogBorderInfo._aq(this._o);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormatCellsDialogBorderInfo.prototype, "_a1", {
        get: function () {
            return false == FormatCellsDialogBorderInfo._aq(this._p);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormatCellsDialogBorderInfo.prototype, "_as", {
        get: function () {
            return this._r == 3 || this._r == 7;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormatCellsDialogBorderInfo.prototype, "_at", {
        get: function () {
            return this._r == 5 || this._r == 7;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormatCellsDialogBorderInfo.prototype, "_af", {
        get: function () {
            return this._x;
        },
        set: function (a) {
            if (WorkbookColorInfo.l_op_Inequality(a, this._x)) {
                this._x = a;
                this._br("LeftCellBorderColorInfo");
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormatCellsDialogBorderInfo.prototype, "_n", {
        get: function () {
            return this._f;
        },
        set: function (a) {
            if (a != this._f) {
                this._f = a;
                this._br("LeftCellBorderStyle");
                this._br("IsLeftCellBorderVisible");
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormatCellsDialogBorderInfo.prototype, "_ag", {
        get: function () {
            return this._y;
        },
        set: function (a) {
            if (WorkbookColorInfo.l_op_Inequality(a, this._y)) {
                this._y = a;
                this._br("RightCellBorderColorInfo");
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormatCellsDialogBorderInfo.prototype, "_o", {
        get: function () {
            return this._g;
        },
        set: function (a) {
            if (a != this._g) {
                this._g = a;
                this._br("RightCellBorderStyle");
                this._br("IsRightCellBorderVisible");
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormatCellsDialogBorderInfo.prototype, "_ah", {
        get: function () {
            return this._z;
        },
        set: function (a) {
            if (WorkbookColorInfo.l_op_Inequality(a, this._z)) {
                this._z = a;
                this._br("TopCellBorderColorInfo");
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormatCellsDialogBorderInfo.prototype, "_p", {
        get: function () {
            return this._h;
        },
        set: function (a) {
            if (a != this._h) {
                this._h = a;
                this._br("TopCellBorderStyle");
                this._br("IsTopCellBorderVisible");
            }
        },
        enumerable: true,
        configurable: true
    });
    FormatCellsDialogBorderInfo._aq = function (a) {
        return a == 0 || a == -1;
    };
    FormatCellsDialogBorderInfo.prototype._bs = function () {
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
    };
    FormatCellsDialogBorderInfo.prototype._br = function (a) {
        var b = this.propertyChanged;
        if (null != b) {
            b(this, new PropertyChangedEventArgs(a));
        }
    };
    FormatCellsDialogBorderInfo.$t = markType(FormatCellsDialogBorderInfo, 'FormatCellsDialogBorderInfo', Base.$, [INotifyPropertyChanged_$type]);
    return FormatCellsDialogBorderInfo;
}(Base));
export { FormatCellsDialogBorderInfo };
//# sourceMappingURL=FormatCellsDialogBorderInfo.js.map
