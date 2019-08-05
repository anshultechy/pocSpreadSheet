/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { VisualElement } from "./VisualElement";
import { ScrollInfo } from "./ScrollInfo";
import { runOn, delegateCombine, delegateRemove, markType } from "../../igniteui-angular-core/ES5/type";
import { RepeatButtonVisualElement } from "./RepeatButtonVisualElement";
import { JsScrollEventArgs } from "./JsScrollEventArgs";
/**
 * @hidden
 */
var ScrollBarVisualElement = /** @class */ (function (_super) {
    tslib_1.__extends(ScrollBarVisualElement, _super);
    function ScrollBarVisualElement(a, b, c) {
        var _this = _super.call(this, b, c) || this;
        _this.ck = null;
        _this.cl = 0;
        _this.cn = false;
        _this.cg = null;
        _this.cf = null;
        _this.ci = null;
        _this.ch = null;
        _this.cj = null;
        _this.cm = false;
        _this.cs = 0;
        _this.cr = 0;
        _this.cu = 0;
        _this.ct = 0;
        _this.scroll = null;
        var d = a == 1;
        _this.cn = d;
        _this.cl = a;
        _this.ck = new ScrollInfo();
        var e = _this.ck;
        e.propertyChanged = delegateCombine(e.propertyChanged, runOn(_this, _this.c6));
        _this.cg = new RepeatButtonVisualElement(_this, "ScrollBarNearButton");
        var f = _this.cg;
        f.click = delegateCombine(f.click, function (f, g) { return _this.c4(0, 1); });
        _this.cf = new RepeatButtonVisualElement(_this, "ScrollBarFarButton");
        var g = _this.cf;
        g.click = delegateCombine(g.click, function (g, h) { return _this.c4(1, 4); });
        _this.ci = new RepeatButtonVisualElement(_this, "ScrollBarNearTrack");
        var h = _this.ci;
        h.click = delegateCombine(h.click, function (h, i) { return _this.c4(2, 0); });
        _this.ch = new RepeatButtonVisualElement(_this, "ScrollBarFarTrack");
        var i = _this.ch;
        i.click = delegateCombine(i.click, function (i, j) { return _this.c4(3, 3); });
        _this.cj = new ScrollBarVisualElement_ScrollThumbVisualElement(_this, "ScrollBarThumb");
        return _this;
    }
    ScrollBarVisualElement.prototype.bz = function () {
        _super.prototype.bz.call(this);
        var a = this.ck;
        a.propertyChanged = delegateRemove(a.propertyChanged, runOn(this, this.c6));
    };
    ScrollBarVisualElement.prototype.b3 = function () {
        _super.prototype.b3.call(this);
        this.cg.u = this.cf.u = this.u;
        this.cj.ac = this.ch.ac = this.ci.ac = this.u;
        this.t = true;
    };
    ScrollBarVisualElement.prototype.b7 = function (a, b, c, d) {
        _super.prototype.b7.call(this, a, b, c, d);
        if (this.cn) {
            this.cg.al(a, b, c, this.cg.av);
            this.cf.al(a, b + d - this.cg.av, c, this.cf.av);
        }
        else {
            this.cg.al(a, b, this.cg.a3, d);
            this.cf.al(a + c - this.cg.a3, b, this.cf.a3, d);
        }
        var e = this.cn ? this.cg.av : this.cg.a3;
        var f = this.cn ? this.cf.av : this.cf.a3;
        var g = e + f;
        var h = this.cn ? d : c;
        var i = Math.max(h - g, 0);
        var j = 0;
        var k = 0;
        var l = this.ck._ab;
        if (i > 0) {
            var m = this.ck._z;
            var n = (this.ck._t + 1 - m) - l;
            if (m == 0) {
                j = this.cn ? c : d;
            }
            else {
                var o = m / (n + m);
                j = i * o;
                var p = 8;
                if (j < p) {
                    j = p;
                }
            }
            if (j > i) {
                j = i;
            }
            var q = 0;
            var r = this.ck._ac;
            if (n != 0) {
                q = Math.min(r - l, n) / n;
            }
            i -= j;
            k = (q * i);
        }
        var s = i - k;
        this.cr = k;
        this.cu = j;
        if (this.cn) {
            this.cj.al(a, b + e + k, c, j);
            this.ci.al(a, b + e, c, k);
            this.ch.al(a, b + e + k + j, c, s);
        }
        else {
            this.cj.al(a + e + k, b, j, d);
            this.ci.al(a + e, b, k, d);
            this.ch.al(a + e + k + j, b, s, d);
        }
    };
    ScrollBarVisualElement.prototype.cv = function (a) {
        var b = this.a3;
        var c = this.av;
        var d = this.cn ? this.cg.av : this.cg.a3;
        var e = this.cn ? this.cf.av : this.cf.a3;
        var f = d + e;
        var g = a.x;
        var h = a.y;
        var i, j;
        if (this.cn) {
            h += d + this.cr;
            if (g < -8 * b || g >= 9 * b || h < -f || h >= c + f) {
                return this.cs;
            }
            j = a.y + this.cr - this.ct;
            i = c - f - this.cu;
        }
        else {
            g += d + this.cr;
            if (h < -8 * c || h >= 9 * c || g < -f || g >= b + f) {
                return this.cs;
            }
            j = a.x + this.cr - this.ct;
            i = b - f - this.cu;
        }
        if (j < 0) {
            j = 0;
        }
        else if (j > i) {
            j = i;
        }
        var k = this.ck._ab;
        var l = this.ck._z;
        var m = (this.ck._t + 1 - l) - k;
        var n = (m * j / i) + k;
        if (n < k) {
            n = k;
        }
        else if (n > this.ck._aa) {
            n = this.ck._aa;
        }
        return n;
    };
    ScrollBarVisualElement.prototype.c3 = function () {
        if (this.cm) {
            this.cj.s = false;
            this.cm = false;
            this.c5(4, this.ck._ac);
            this.c5(8, this.ck._ac);
        }
    };
    ScrollBarVisualElement.prototype.co = function (a) {
        if (a.a() == 1 && a.d()) {
            this.cm = true;
            this.cj.s = false;
            var b = a.h();
            this.ct = this.cn ? b.y : b.x;
            this.cs = this.ck._ac;
            this.c5(5, this.cs);
            return true;
        }
        else {
            this.c3();
            return false;
        }
    };
    ScrollBarVisualElement.prototype.cp = function (a) {
        if (this.cm) {
            var b = a.h();
            var c = this.cv(b);
            if (c != this.ck._ac) {
                this.c5(5, c);
            }
            return true;
        }
        else {
            return _super.prototype.ag.call(this, a);
        }
    };
    ScrollBarVisualElement.prototype.cq = function (a) {
        if (this.cm) {
            this.c3();
            a.f();
            return true;
        }
        return false;
    };
    ScrollBarVisualElement.prototype.c4 = function (a, b) {
        this.c5(a, this.ck._s(b));
    };
    ScrollBarVisualElement.prototype.c5 = function (a, b) {
        var c = this.scroll;
        if (null != c) {
            var d = new JsScrollEventArgs(a, b);
            c(this, d);
            b = d._c;
        }
        this.ck._aq(b);
    };
    ScrollBarVisualElement.prototype.c6 = function (a, b) {
        switch (b.propertyName != null ? b.propertyName : "") {
            case "":
            case "Offset":
                this.t = true;
                break;
        }
    };
    ScrollBarVisualElement.$t = markType(ScrollBarVisualElement, 'ScrollBarVisualElement', VisualElement.$);
    return ScrollBarVisualElement;
}(VisualElement));
export { ScrollBarVisualElement };
/**
 * @hidden
 */
var ScrollBarVisualElement_ScrollThumbVisualElement = /** @class */ (function (_super) {
    tslib_1.__extends(ScrollBarVisualElement_ScrollThumbVisualElement, _super);
    function ScrollBarVisualElement_ScrollThumbVisualElement(a, b) {
        return _super.call(this, a, b) || this;
    }
    Object.defineProperty(ScrollBarVisualElement_ScrollThumbVisualElement.prototype, "cf", {
        get: function () {
            return this._parent;
        },
        enumerable: true,
        configurable: true
    });
    ScrollBarVisualElement_ScrollThumbVisualElement.prototype.get_x = function () {
        return true;
    };
    ScrollBarVisualElement_ScrollThumbVisualElement.prototype.ad = function (a) {
        return this.cf.co(a);
    };
    ScrollBarVisualElement_ScrollThumbVisualElement.prototype.ag = function (a) {
        return this.cf.cp(a);
    };
    ScrollBarVisualElement_ScrollThumbVisualElement.prototype.ah = function (a) {
        return this.cf.cq(a);
    };
    ScrollBarVisualElement_ScrollThumbVisualElement.$t = markType(ScrollBarVisualElement_ScrollThumbVisualElement, 'ScrollBarVisualElement_ScrollThumbVisualElement', VisualElement.$);
    return ScrollBarVisualElement_ScrollThumbVisualElement;
}(VisualElement));
export { ScrollBarVisualElement_ScrollThumbVisualElement };
//# sourceMappingURL=ScrollBarVisualElement_combined.js.map
