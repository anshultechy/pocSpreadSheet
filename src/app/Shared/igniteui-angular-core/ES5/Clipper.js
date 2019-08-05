/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, markType } from "./type";
import { LeftClipper } from "./LeftClipper";
import { BottomClipper } from "./BottomClipper";
import { RightClipper } from "./RightClipper";
import { TopClipper } from "./TopClipper";
import { isNaN_ } from "./number";
/**
 * @hidden
 */
var Clipper = /** @class */ (function (_super) {
    tslib_1.__extends(Clipper, _super);
    function Clipper(a) {
        var _rest = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            _rest[_i - 1] = arguments[_i];
        }
        var _this = _super.call(this) || this;
        _this.g = null;
        _this.b = null;
        _this.h = null;
        _this.c = null;
        _this.a = null;
        _this.d = null;
        _this.e = null;
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0:
                {
                    var c_1 = _rest[0];
                    var d_1 = _rest[1];
                    _this.c = ((function () {
                        var $ret = new LeftClipper();
                        $ret.m = c_1.left;
                        $ret.d = d_1;
                        return $ret;
                    })());
                    _this.a = ((function () {
                        var $ret = new BottomClipper();
                        $ret.m = c_1.bottom;
                        $ret.d = d_1;
                        return $ret;
                    })());
                    _this.d = ((function () {
                        var $ret = new RightClipper();
                        $ret.m = c_1.right;
                        $ret.d = d_1;
                        return $ret;
                    })());
                    _this.e = ((function () {
                        var $ret = new TopClipper();
                        $ret.m = c_1.top;
                        $ret.d = d_1;
                        return $ret;
                    })());
                }
                break;
            case 1:
                {
                    var c_2 = _rest[0];
                    var d_2 = _rest[1];
                    var e_1 = _rest[2];
                    var f_1 = _rest[3];
                    var g_1 = _rest[4];
                    _this.c = !isNaN_(c_2) ? ((function () {
                        var $ret = new LeftClipper();
                        $ret.m = c_2;
                        $ret.d = g_1;
                        return $ret;
                    })()) : null;
                    _this.a = !isNaN_(d_2) ? ((function () {
                        var $ret = new BottomClipper();
                        $ret.m = d_2;
                        $ret.d = g_1;
                        return $ret;
                    })()) : null;
                    _this.d = !isNaN_(e_1) ? ((function () {
                        var $ret = new RightClipper();
                        $ret.m = e_1;
                        $ret.d = g_1;
                        return $ret;
                    })()) : null;
                    _this.e = !isNaN_(f_1) ? ((function () {
                        var $ret = new TopClipper();
                        $ret.m = f_1;
                        $ret.d = g_1;
                        return $ret;
                    })()) : null;
                }
                break;
        }
        return _this;
    }
    Object.defineProperty(Clipper.prototype, "i", {
        get: function () {
            return this.h;
        },
        set: function (a) {
            if (this.b != null) {
                this.b.clear();
            }
            this.b = null;
            this.h = a;
            var b = this.h;
            if (this.c != null) {
                this.c.i = b;
                b = this.c;
                this.b = this.c;
            }
            if (this.a != null) {
                this.a.i = b;
                b = this.a;
                this.a._nextClipper = this.b;
                this.b = this.a;
            }
            if (this.d != null) {
                this.d.i = b;
                b = this.d;
                this.d._nextClipper = this.b;
                this.b = this.d;
            }
            if (this.e != null) {
                this.e.i = b;
                b = this.e;
                this.e._nextClipper = this.b;
                this.b = this.e;
            }
            this.g = b;
        },
        enumerable: true,
        configurable: true
    });
    Clipper.prototype.j = function (a) {
        this.g.add(a);
    };
    Clipper.prototype.k = function (a, b) {
        var c = a;
        var d = a.count;
        var e = new Array(4);
        e[0] = this.e;
        e[1] = this.d;
        e[2] = this.a;
        e[3] = this.c;
        var f = 0;
        var g = 0;
        var h = 0;
        var i = 0;
        if (this.e != null) {
            f = this.e.m;
        }
        if (this.d != null) {
            g = this.d.m;
        }
        if (this.a != null) {
            h = this.a.m;
        }
        if (this.c != null) {
            i = this.c.m;
        }
        var j = false;
        var k;
        var l = e.length;
        var m = l + 1;
        var n = null;
        var o;
        var p;
        var q = 0;
        var r = new Array(16);
        var s = 0;
        var t = new Array(16);
        var u = 0;
        var v = 1;
        var w;
        var x;
        if (b) {
            u = d - 1;
            v = -1;
        }
        for (var y = u; y < d && y >= 0; y += v) {
            o = c.item(y);
            r[q] = o;
            q++;
            for (k = 0; k < m; k++) {
                if (k < l) {
                    n = e[k];
                    if (n == null) {
                        continue;
                    }
                }
                for (p = 0; p < q; p++) {
                    o = r[p];
                    x = o.x;
                    w = o.y;
                    if (k >= l) {
                        this.h.add(o);
                        continue;
                    }
                    j = (k == 0 && w >= f) || (k == 1 && x <= g) || (k == 2 && w <= h) || (k == 3 && x >= i);
                    if (n.c) {
                        n.c = false;
                        n.j = o;
                    }
                    else {
                        if (true) {
                            if (j) {
                                if (!n.g) {
                                    t[s] = n.k(n.l, o);
                                    s++;
                                }
                                else {
                                    if (!n.d && !n.f) {
                                        t[s] = n.l;
                                        s++;
                                        n.f = true;
                                    }
                                }
                                t[s] = o;
                                s++;
                            }
                            else {
                                if (n.g) {
                                    if (!n.d && !n.f) {
                                        t[s] = n.l;
                                        s++;
                                        n.f = true;
                                    }
                                    t[s] = n.k(n.l, o);
                                    s++;
                                }
                            }
                        }
                    }
                    n.l = o;
                    n.g = j;
                }
                var z = r;
                r = t;
                t = z;
                q = s;
                s = 0;
            }
        }
    };
    Object.defineProperty(Clipper.prototype, "f", {
        get: function () {
            return (this.c == null || this.c.d) && (this.a == null || this.a.d) && (this.d == null || this.d.d) && (this.e == null || this.e.d);
        },
        set: function (a) {
            if (this.c != null) {
                this.c.d = a;
            }
            if (this.a != null) {
                this.a.d = a;
            }
            if (this.d != null) {
                this.d.d = a;
            }
            if (this.e != null) {
                this.e.d = a;
            }
        },
        enumerable: true,
        configurable: true
    });
    Clipper.$t = markType(Clipper, 'Clipper');
    return Clipper;
}(Base));
export { Clipper };
//# sourceMappingURL=Clipper.js.map