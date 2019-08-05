/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, runOn, delegateCombine, fromEnum, markType } from "../../igniteui-angular-core/ES5/type";
import { DomWrapper_$type } from "../../igniteui-angular-core/ES5/dom";
import { DropDownItem } from "./DropDownItem";
import { Dictionary$2 } from "../../igniteui-angular-core/ES5/Dictionary$2";
import { List$1 } from "../../igniteui-angular-core/ES5/List$1";
import { Tuple } from "../../igniteui-angular-core/ES5/Tuple";
import { CustomDOMEventProxy } from "./CustomDOMEventProxy";
import { RelativePositionInfo } from "./RelativePositionInfo";
import { Rect } from "../../igniteui-angular-core/ES5/Rect";
/**
 * @hidden
 */
var DropDown = /** @class */ (function (_super) {
    tslib_1.__extends(DropDown, _super);
    function DropDown(a, b, c, d, e, f) {
        var _this = _super.call(this) || this;
        _this.z = null;
        _this.ab = null;
        _this.aa = null;
        _this.o = null;
        _this.n = null;
        _this.d = null;
        _this.af = 0;
        _this.ah = -1;
        _this.e = false;
        _this.ag = 0;
        _this.y = null;
        _this.a = null;
        _this.b = null;
        _this.m = false;
        _this.childRequested = null;
        _this.closed = null;
        _this.itemClicked = null;
        _this.opened = null;
        _this.selectedItemChanged = null;
        _this.z = a;
        _this.o = new List$1(DomWrapper_$type, 0);
        _this.n = new Dictionary$2(DomWrapper_$type, DropDownItem.$, 0);
        _this.a = d;
        _this.b = e;
        _this.af = d == null ? 0 : d.af + 1;
        _this.ap(a, c, _this.af, f);
        _this.aa.setRawStyleProperty("position", "absolute");
        _this.aa.setRawStyleProperty("visibility", "hidden");
        b.append(_this.aa);
        _this.d = ((function () {
            var $ret = new CustomDOMEventProxy(_this.aa, a, false);
            $ret._dz = function (g) { return true; };
            return $ret;
        })());
        var g = _this.d;
        g.onKeyDown = delegateCombine(g.onKeyDown, runOn(_this, _this.k));
        var h = _this.d;
        h.onMouseUp = delegateCombine(h.onMouseUp, runOn(_this, _this.aw));
        var i = _this.d;
        i.onMouseOver = delegateCombine(i.onMouseOver, runOn(_this, _this.av));
        return _this;
    }
    Object.defineProperty(DropDown.prototype, "ac", {
        get: function () {
            return this.aa;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropDown.prototype, "f", {
        get: function () {
            return this.e;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropDown.prototype, "c", {
        get: function () {
            return this.ah < 0 ? null : this.n.item(this.o._inner[this.ah]);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropDown.prototype, "ai", {
        get: function () {
            return this.ah;
        },
        set: function (a) {
            this.a1();
            if (this.ah != a) {
                var b = this.ah >= 0 ? this.o._inner[this.ah] : null;
                var c = a >= 0 ? this.o._inner[a] : null;
                this.ah = a;
                if (b != null) {
                    b.removeClass("selected");
                }
                if (c != null) {
                    c.addClass("selected");
                    this.az(c);
                }
                var d = this.selectedItemChanged;
                if (d != null) {
                    d(this, Tuple.a(DropDownItem.$, DropDownItem.$, b != null ? this.n.item(b) : null, c != null ? this.n.item(c) : null));
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    DropDown.prototype.ao = function () {
        this.a1();
        this.e = false;
        this.aa.setRawStyleProperty("visibility", "hidden");
        this.d.ab = true;
        var a = this.closed;
        if (a != null) {
            a(this, null);
        }
    };
    DropDown.prototype.ap = function (a, b, c, d) {
        var e = a.createElement("div");
        var f = a.createElement("div");
        this.ab = f;
        this.aa = e;
        this.as(a, b, d);
        e.setRawStyleProperty("z-index", 10000 + c);
        e.setAttribute("tabIndex", -1);
        e.append(f);
    };
    DropDown.prototype.aq = function () {
        this.a1();
        if (this.aa != null) {
            this.e = false;
            this.d.ao();
            this.d = null;
            var a = this.aa;
            this.aa = null;
            this.ab = null;
            a.remove();
        }
    };
    DropDown.prototype.ar = function () {
        this.a1();
        var a = this.c;
        if (a != null && a.c && a.f) {
            this.ax(a);
        }
    };
    DropDown.p = function (a, b, c, d) {
        var e = d - c;
        if (c < a) {
            e -= a - c;
        }
        if (d > b) {
            e -= d - b;
        }
        return e;
    };
    DropDown.prototype.ad = function () {
        var a = this.aa.getNativeElement();
        var b = this.d.am.originalEvent;
        var c = (b.target);
        while (c != null && c != a) {
            var d = c.classList;
            if (d != null && (d.contains("ui-ig-internal-dropdownitem"))) {
                for (var e = 0; e < this.o.count; e++) {
                    if (c == this.o._inner[e].getNativeElement()) {
                        return this.o._inner[e];
                    }
                }
            }
            c = (c.parentNode);
        }
        var f = (b.clientX);
        var g = (b.clientY);
        var h = this.ah < 0 ? 0 : this.ah;
        var i = this.o.count;
        for (var j = h, k = h + i; j < k; j++) {
            var l = this.o._inner[j % i];
            var m = l.getNativeElement().getBoundingClientRect();
            var n = (m.top <= g && m.left <= f && m.bottom >= g && m.right >= f);
            if (n) {
                return l;
            }
        }
        return null;
    };
    DropDown.r = function (a, b, c) {
        if (c === void 0) { c = false; }
        if (!c) {
            return DropDown.q(a.b, a.i, a.g, b);
        }
        else {
            var d = a.b;
            if (d == 1) {
                d = 2;
            }
            else if (d == 2) {
                d = 1;
            }
            return DropDown.q(d, -a.i, a.g, b);
        }
    };
    DropDown.q = function (a, b, c, d) {
        var e = 0;
        switch (a) {
            default:
            case 1: break;
            case 0:
                e += d / 2;
                break;
            case 2:
                e += d;
                break;
        }
        if (c) {
            b *= d;
        }
        return e + b;
    };
    DropDown.s = function (a, b, c, d, e, f, g, h, i) {
        i = e;
        var j = b - a;
        var k = a + DropDown.r(f, j) - DropDown.r(g, e);
        if (h != 0) {
            var l = DropDown.p(c, d, k, k + e);
            if (l < e) {
                if ((h & 1) != 0) {
                    var m = a + DropDown.r(f, j, true) - DropDown.r(g, e, true);
                    var n = DropDown.p(c, d, m, m + e);
                    if (n > l) {
                        k = m;
                        l = n;
                    }
                }
                if (l < e && (h & 2) != 0) {
                    if (k + e > d) {
                        k -= (k + e) - d;
                    }
                    if (k < c) {
                        k += c - k;
                    }
                    l = DropDown.p(c, d, k, k + e);
                }
                if (l < e && (h & 4) != 0) {
                    if (k + e > d) {
                        i -= Math.ceil((k + e) - d);
                    }
                    if (k < c) {
                        i -= Math.ceil(c - k);
                        k += Math.floor(c - k);
                    }
                }
            }
        }
        return {
            ret: k,
            p8: i
        };
    };
    DropDown.prototype.ae = function (a) {
        var e_1, _a;
        try {
            for (var _b = tslib_1.__values(fromEnum(this.n)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var b = _c.value;
                if (b.value == a) {
                    return b.key;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return null;
    };
    DropDown.prototype.as = function (a, b, c) {
        var e_2, _a;
        this.ab.removeChildren();
        this.n.clear();
        try {
            for (var _b = tslib_1.__values(fromEnum(this.o)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var d = _c.value;
                d.destroy();
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
        this.o.clear();
        for (var e = 0; e < b.count; e++) {
            var f = b.item(e);
            var g = a.createElement("div");
            g.addClass("ui-ig-internal-dropdownitem");
            this.o.add(g);
            this.n.addItem(g, f);
            if (!f.f) {
                g.addClass("disabled");
            }
            if (f.e) {
                g.addClass("checked");
            }
            if (e == this.ah) {
                g.addClass("selected");
            }
            if (f.c) {
                g.addClass("hassubitems");
            }
            if (!f.h) {
                g.setRawStyleProperty("display", "none");
            }
            c(g, f);
            this.ab.append(g);
        }
        if (this.ah >= b.count) {
            this.ai = -1;
        }
    };
    DropDown.prototype.g = function (a) {
        return this.h(this.ah, a);
    };
    DropDown.prototype.h = function (a, b) {
        var c = this.o.count;
        var d = b ? 1 : -1;
        var e, f;
        if (a < 0) {
            e = b ? 0 : c - 1;
            f = b ? c : -1;
        }
        else {
            e = b ? a + 1 : a - 1;
            if (!this.m) {
                if (!b) {
                    if (a == 0) {
                        return false;
                    }
                    f = c;
                }
                else {
                    if (a >= c - 1) {
                        return false;
                    }
                    f = -1;
                }
            }
            else if (b) {
                f = e + c;
            }
            else {
                e += c;
                f = e - c;
            }
        }
        for (var g = e; g != f; g += d) {
            var h = g % c;
            var i = this.n.item(this.o._inner[h]);
            if (i.g) {
                continue;
            }
            if (!i.h) {
                continue;
            }
            this.ai = h;
            return true;
        }
        return false;
    };
    DropDown.prototype.i = function () {
        return this.h(0, true);
    };
    DropDown.prototype.j = function () {
        return this.h(this.n.count - 1, false);
    };
    DropDown.prototype.at = function () {
        this.ag = 0;
        this.ar();
    };
    DropDown.prototype.au = function (a) {
        var b = this.n.item(a);
        if (!b.f || b.g) {
            return;
        }
        if (!b.c && !b.i) {
            var c = this;
            while (c.a != null) {
                c = c.a;
            }
            c.ao();
        }
        if (b.d) {
            if (b.e) {
                a.removeClass("checked");
            }
            else {
                a.addClass("checked");
            }
            b.e = !b.e;
        }
        if (b.l != null) {
            b.l(b, b);
        }
        if (b.c) {
            this.ax(b);
        }
        var d = this.itemClicked;
        if (d != null) {
            d(this, b);
        }
    };
    DropDown.prototype.k = function (a) {
        var b = this.d.am;
        if (this.y != null && this.y(this, a, this.d.ba, b)) {
            return true;
        }
        if (this.l(a, this.d.ba)) {
            b.stopPropagation();
            b.preventDefault();
        }
        return true;
    };
    DropDown.prototype.av = function (a, b, c) {
        var d = this.ad();
        if (d != null) {
            var e = this.n.item(d);
            if (e.g) {
            }
            else if (e.f) {
                this.ai = this.o.indexOf(d);
                if (e.c) {
                    this.ag = this.z.setTimeout(runOn(this, this.at), 300);
                }
            }
            else {
                this.ai = -1;
            }
        }
    };
    DropDown.prototype.aw = function (a) {
        var b = this.ad();
        if (b != null) {
            this.au(b);
        }
    };
    DropDown.prototype.ax = function (a) {
        if (!this.e) {
            return;
        }
        var b = this.childRequested;
        if (b != null) {
            b(this, a);
        }
    };
    DropDown.prototype.ay = function (a, b, c, d) {
        if (d === void 0) { d = true; }
        var e = c.d || RelativePositionInfo.c;
        var f = c.f || RelativePositionInfo.c;
        var g = c.c || RelativePositionInfo.c;
        var h = c.e || RelativePositionInfo.c;
        var i = a.getNativeElement();
        var j = i.parentElement;
        var k = j.getBoundingClientRect();
        var l = i.scrollWidth + (i.offsetWidth - i.clientWidth);
        var m = i.scrollHeight + (i.offsetHeight - i.clientHeight);
        var n = -(k.left);
        var o = (window.innerWidth || document.documentElement.clientWidth);
        var p = -(k.top);
        var q = (window.innerHeight || document.documentElement.clientHeight);
        var r, s;
        var t = ((function () { var u = DropDown.s(b.x, b.right, n + 1, n + o - 2, l, e, g, c.a, r); r = u.p8; return u.ret; })());
        var u = ((function () { var v = DropDown.s(b.y, b.bottom, p + 1, p + q - 2, m, f, h, c.b, s); s = v.p8; return v.ret; })());
        a.setRawStyleProperty("left", t + "px");
        a.setRawStyleProperty("top", u + "px");
        if (r == l) {
            a.setRawStyleProperty("width", "");
        }
        else {
            a.setRawStyleProperty("width", r + "px");
        }
        if (s == m) {
            a.setRawStyleProperty("height", "");
        }
        else {
            a.setRawStyleProperty("height", s + "px");
        }
        if (d) {
            var v = i.scrollWidth + (i.offsetWidth - i.clientWidth);
            var w = i.scrollHeight + (i.offsetHeight - i.clientHeight);
            this.ay(a, b, c, false);
        }
    };
    DropDown.prototype.l = function (a, b) {
        switch (a) {
            case 14:
                if (this.a != null) {
                    this.ao();
                }
                break;
            case 16:
                this.ar();
                break;
            case 8:
                this.ao();
                break;
            case 17:
                this.g(true);
                break;
            case 15:
                this.g(false);
                break;
            case 9:
            case 3:
                if (this.ah >= 0) {
                    this.au(this.o._inner[this.ah]);
                }
                break;
            case 13:
                this.i();
                break;
            case 12:
                this.j();
                break;
            case 10: return false;
            case 11: return false;
            default: return false;
        }
        return true;
    };
    DropDown.prototype.az = function (a) {
        var b = a.getNativeElement().getBoundingClientRect();
        var c = this.aa.getNativeElement().getBoundingClientRect();
        var d = (b.height);
        var e = (b.y);
        var f = (b.bottom);
        var g = (c.y);
        var h = (c.bottom);
        if (DropDown.p(g, h, e, f) != d) {
            var i = this.aa.getProperty("scrollTop");
            if (e < g) {
                i -= g - e;
            }
            else if (f > h) {
                i += Math.min(f - h, e - g);
            }
            this.aa.setProperty("scrollTop", i);
        }
    };
    DropDown.prototype.a0 = function (a, b) {
        var c = this.aa;
        this.e = true;
        this.d.bd = new Rect(0, 0, 0, c.outerWidth(), c.outerHeight());
        this.d.ab = false;
        this.ay(c, a, b);
        if (this.ah >= 0) {
            this.az(this.o._inner[this.ah]);
        }
        this.aa.setRawStyleProperty("visibility", "");
        var d = this.opened;
        if (d != null) {
            d(this, null);
        }
    };
    DropDown.prototype.a1 = function () {
        if (this.ag != 0) {
            var a = this.ag;
            this.ag = 0;
            this.z.clearTimeout(a);
        }
    };
    DropDown.$t = markType(DropDown, 'DropDown');
    return DropDown;
}(Base));
export { DropDown };
//# sourceMappingURL=DropDown.js.map
