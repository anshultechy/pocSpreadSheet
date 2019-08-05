/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { CellRegionMapBase } from "./CellRegionMapBase";
import { IComparer$1_$type } from "../../igniteui-angular-core/ES5/IComparer$1";
import { WorksheetRegionAddress } from "../../igniteui-angular-excel/ES5/excel.core";
import { IntRange } from "./IntRange";
import { List$1 } from "../../igniteui-angular-core/ES5/List$1";
import { ArgumentNullException } from "../../igniteui-angular-core/ES5/ArgumentNullException";
import { ArgumentException } from "../../igniteui-angular-core/ES5/ArgumentException";
import { InvalidMultipleRangeSelection } from "./InvalidMultipleRangeSelection";
import { Enumerable } from "../../igniteui-angular-core/ES5/Enumerable";
import { CellRegionMapSingle } from "./CellRegionMapSingle";
import { Base, markType } from "../../igniteui-angular-core/ES5/type";
import { intDivide } from "../../igniteui-angular-core/ES5/number";
/**
 * @hidden
 */
var CellRegionMapMany = /** @class */ (function (_super) {
    tslib_1.__extends(CellRegionMapMany, _super);
    function CellRegionMapMany(a) {
        var _this = _super.call(this) || this;
        _this._q = null;
        _this._m = null;
        _this._n = null;
        _this._s = 0;
        _this._r = 0;
        _this._p = null;
        _this._o = null;
        if (a == null) {
            throw new ArgumentNullException(1);
        }
        if (a.length < 2) {
            throw new ArgumentException(0);
        }
        var b = new List$1(WorksheetRegionAddress.$, 1, a);
        b.z(_this);
        _this._q = b.toArray();
        var c = 0;
        var d = _this._q[0]._ac;
        for (var e = 0; e < _this._q.length; e++) {
            if (_this._q[e]._ac == d) {
                c++;
            }
            else {
                break;
            }
        }
        if (_this._q.length % c != 0) {
            throw new InvalidMultipleRangeSelection();
        }
        for (var f = 0; f < a.length; f++) {
            var g = f % c;
            if (f != g) {
                if (_this._q[f]._w != _this._q[g]._w || _this._q[f]._x != _this._q[g]._x) {
                    throw new InvalidMultipleRangeSelection();
                }
            }
            else if (f > 0 && _this._q[f]._w <= _this._q[f - 1]._x) {
                throw new InvalidMultipleRangeSelection();
            }
            if (f % c != 0) {
                if (_this._q[f]._ac != _this._q[f - 1]._ac || _this._q[f]._ae != _this._q[f - 1]._ae) {
                    throw new InvalidMultipleRangeSelection();
                }
            }
            else if (f > 0 && _this._q[f]._ac <= _this._q[f - 1]._ae) {
                throw new InvalidMultipleRangeSelection();
            }
        }
        var h = intDivide(_this._q.length, c);
        _this._m = new Array(c);
        _this._o = new Array(c);
        for (var i = 0; i < c; i++) {
            var j = _this._q[i];
            _this._m[i] = j._af;
            _this._o[i] = new IntRange(1, j._w, j._x);
        }
        _this._n = new Array(h);
        _this._p = new Array(h);
        for (var k = 0; k < h; k++) {
            var l = _this._q[k * c];
            _this._n[k] = l._ad;
            _this._p[k] = new IntRange(1, l._ac, l._ae);
        }
        _this._s = CellRegionMapMany._u(_this._m);
        _this._r = CellRegionMapMany._u(_this._n);
        return _this;
    }
    CellRegionMapMany.prototype.g = function (a) {
        var _this = this;
        var b = a % this._s;
        var c;
        var d = ((function () { var e = CellRegionMapMany._t(_this._m, b, c); c = e.p2; return e.ret; })());
        return this._q[d]._w + c;
    };
    CellRegionMapMany.prototype.h = function (a) {
        var _this = this;
        var b = a % this._r;
        var c;
        var d = ((function () { var e = CellRegionMapMany._t(_this._n, b, c); c = e.p2; return e.ret; })()) * this._m.length;
        return this._q[d]._ac + c;
    };
    CellRegionMapMany.prototype.j = function (a) {
        var b = this._q[a];
        var c = 0;
        var f = this._p;
        for (var e = 0; e < f.length; e++) {
            var d = f[e];
            if (d._i == b._ac) {
                break;
            }
            else {
                c += d._h - d._i;
            }
        }
        return c;
    };
    CellRegionMapMany.prototype.i = function (a) {
        var b = this._q[a];
        var c = 0;
        var f = this._o;
        for (var e = 0; e < f.length; e++) {
            var d = f[e];
            if (d._i == b._w) {
                break;
            }
            else {
                c += (d._h - d._i) + 1;
            }
        }
        return c;
    };
    CellRegionMapMany.prototype.get_a = function () {
        return this._o;
    };
    Object.defineProperty(CellRegionMapMany.prototype, "a", {
        get: function () {
            return this.get_a();
        },
        enumerable: true,
        configurable: true
    });
    CellRegionMapMany.prototype.get_c = function () {
        return this._p;
    };
    Object.defineProperty(CellRegionMapMany.prototype, "c", {
        get: function () {
            return this.get_c();
        },
        enumerable: true,
        configurable: true
    });
    CellRegionMapMany.prototype.get_b = function () {
        return this._q;
    };
    Object.defineProperty(CellRegionMapMany.prototype, "b", {
        get: function () {
            return this.get_b();
        },
        enumerable: true,
        configurable: true
    });
    CellRegionMapMany.prototype.get_l = function () {
        return this._s;
    };
    Object.defineProperty(CellRegionMapMany.prototype, "l", {
        get: function () {
            return this.get_l();
        },
        enumerable: true,
        configurable: true
    });
    CellRegionMapMany.prototype.get_k = function () {
        return this._r;
    };
    Object.defineProperty(CellRegionMapMany.prototype, "k", {
        get: function () {
            return this.get_k();
        },
        enumerable: true,
        configurable: true
    });
    CellRegionMapMany.prototype.d = function () {
        var a = new WorksheetRegionAddress(1, this._p[0]._i, Enumerable.ah(IntRange.$, this._p)._h, this._o[0]._i, Enumerable.ah(IntRange.$, this._o)._h);
        return new CellRegionMapSingle(a);
    };
    CellRegionMapMany._t = function (a, b, c) {
        for (var d = 0; d < a.length; d++) {
            if (b < a[d]) {
                c = b;
                return {
                    ret: d,
                    p2: c
                };
            }
            b -= a[d];
        }
        c = 0;
        return {
            ret: 0,
            p2: c
        };
    };
    CellRegionMapMany._u = function (a) {
        var b = 0;
        for (var c = 0; c < a.length; c++) {
            b += a[c];
        }
        return b;
    };
    CellRegionMapMany.prototype.compare = function (a, b) {
        var c = Base.compareSimple(a._ac, b._ac);
        if (c == 0) {
            c = Base.compareSimple(a._w, b._w);
        }
        return c;
    };
    CellRegionMapMany.$t = markType(CellRegionMapMany, 'CellRegionMapMany', CellRegionMapBase.$, [IComparer$1_$type.specialize(WorksheetRegionAddress.$)]);
    return CellRegionMapMany;
}(CellRegionMapBase));
export { CellRegionMapMany };
//# sourceMappingURL=CellRegionMapMany.js.map
