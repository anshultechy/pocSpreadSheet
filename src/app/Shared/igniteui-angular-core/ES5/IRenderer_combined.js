/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, Type, markType } from "./type";
import { isNaN_ } from "./number";
import { stringEmpty, stringReplace, stringIsNullOrEmpty } from "./string";
/**
 * @hidden
 */
export var IRenderer_$type = new Type(null, 'IRenderer');
/**
 * @hidden
 */
var FontInfo = /** @class */ (function (_super) {
    tslib_1.__extends(FontInfo, _super);
    function FontInfo() {
        var _this = _super.call(this) || this;
        _this.f = 0;
        _this.k = null;
        _this.l = null;
        _this.m = null;
        _this.b = 0;
        _this.c = 0;
        _this.h = null;
        _this.i = null;
        _this.j = null;
        _this.d = NaN;
        _this.e = NaN;
        return _this;
    }
    FontInfo.prototype.t = function (a) {
        if (isNaN_(this.d)) {
            var b = FontUtil.getFontInfoFromString(a, this.fontString);
            this.h = b.n;
            this.b = b.d;
            this.i = b.o;
            this.k = b.q;
            this.l = b.r;
            this.m = b.s;
        }
    };
    Object.defineProperty(FontInfo.prototype, "g", {
        get: function () {
            return this.f;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FontInfo.prototype, "q", {
        get: function () {
            return this.k;
        },
        set: function (a) {
            var b = this.k;
            this.k = a;
            if (b != this.k) {
                this.u("FontStyle");
            }
        },
        enumerable: true,
        configurable: true
    });
    FontInfo.prototype.u = function (a) {
        if (a != "FontString") {
            this.j = null;
        }
        if (this.f < 100000) {
            this.f++;
        }
        else {
            this.f = 0;
        }
    };
    Object.defineProperty(FontInfo.prototype, "r", {
        get: function () {
            return this.l;
        },
        set: function (a) {
            var b = this.l;
            this.l = a;
            if (this.l != b) {
                this.u("FontVariant");
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FontInfo.prototype, "s", {
        get: function () {
            return this.m;
        },
        set: function (a) {
            var b = this.m;
            this.m = a;
            if (this.m != b) {
                this.u("FontWeight");
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FontInfo.prototype, "d", {
        get: function () {
            return this.b;
        },
        set: function (a) {
            var b = this.b;
            this.b = a;
            if (this.b != b) {
                this.u("FontSize");
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FontInfo.prototype, "e", {
        get: function () {
            return this.c;
        },
        set: function (a) {
            var b = this.c;
            this.c = a;
            if (this.c != b) {
                this.u("LineHeight");
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FontInfo.prototype, "n", {
        get: function () {
            return this.h;
        },
        set: function (a) {
            var b = this.h;
            this.h = a;
            if (this.h != b) {
                this.u("FontFamily");
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FontInfo.prototype, "o", {
        get: function () {
            return this.i;
        },
        set: function (a) {
            var b = this.i;
            this.i = a;
            if (this.i != b) {
                this.u("FontStretch");
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FontInfo.prototype, "fontString", {
        get: function () {
            if (this.j == null) {
                FontUtil.updateFontString(this);
            }
            return this.j;
        },
        set: function (a) {
            var b = this.j;
            this.j = a;
            if (this.j != b) {
                this.u("FontString");
            }
        },
        enumerable: true,
        configurable: true
    });
    FontInfo.prototype.a = function () {
        var _this = this;
        return ((function () {
            var $ret = new FontInfo();
            $ret.q = _this.q;
            $ret.r = _this.r;
            $ret.s = _this.s;
            $ret.d = _this.d;
            $ret.e = _this.e;
            $ret.n = _this.n;
            $ret.o = _this.o;
            $ret.fontString = _this.fontString;
            return $ret;
        })());
    };
    FontInfo.$t = markType(FontInfo, 'FontInfo');
    return FontInfo;
}(Base));
export { FontInfo };
/**
 * @hidden
 */
var FontUtil = /** @class */ (function (_super) {
    tslib_1.__extends(FontUtil, _super);
    function FontUtil() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FontUtil.getCurrentFontHeight = function (a, b) {
        if (a == null) {
            return 14;
        }
        var c = null;
        if (b != null) {
            c = b.fontString;
        }
        return a.getHeightForFontString(c, "M", true);
    };
    FontUtil.measureStringHeight = function (a, b, c) {
        var d = a.getHeightForFontString(c.fontString, b, false);
        return d;
    };
    FontUtil.measureStringWidth1 = function (a, b, c) {
        c.z();
        c.ab(b);
        var d = c.f(a);
        c.y();
        return d;
    };
    FontUtil.measureStringWidth = function (a, b, c) {
        c.z();
        c.ac(b);
        var d = c.f(a);
        c.y();
        return d;
    };
    FontUtil.getDefaultFont = function (a) {
        if (FontUtil.a == null) {
            FontUtil.a = FontUtil.getFontInfoFromString(a, "12px Verdana");
        }
        return FontUtil.a;
    };
    FontUtil.getFontSize = function (a) {
        return a.d;
    };
    FontUtil.getFontWithNewFontSize = function (a, b) {
        var c = a.a();
        c.d = b;
        c.fontString = b + "px " + a.n;
        return c;
    };
    FontUtil.getFontInfoFromString = function (a, b) {
        a.startCSSQuery();
        a.setCssQueryFontString(b);
        var c = a.getCssDefaultPropertyValue("", "font-style");
        var d = a.getCssDefaultPropertyValue("", "font-variant");
        var e = a.getCssDefaultPropertyValue("", "font-weight");
        e = FontUtil.o(e);
        var f = a.getCssDefaultPropertyValue("", "font-size");
        var g = a.getCssDefaultPropertyValue("", "line-height");
        var h = a.getCssDefaultPropertyValue("", "font-family");
        a.endCSSQuery();
        var i = new FontInfo();
        var j = true;
        b = "";
        if (c.length > 0) {
            if (!j) {
                b += " ";
            }
            else {
                j = false;
            }
            b += c;
        }
        if (d.length > 0) {
            if (!j) {
                b += " ";
            }
            else {
                j = false;
            }
            b += d;
        }
        if (e.length > 0) {
            if (!j) {
                b += " ";
            }
            else {
                j = false;
            }
            b += e;
        }
        if (f.length > 0) {
            if (!j) {
                b += " ";
            }
            else {
                j = false;
            }
            b += f;
        }
        if (g.length > 0) {
            if (!j) {
                b += "/";
            }
            else {
                j = false;
            }
            b += g;
        }
        if (h.length > 0) {
            if (!j) {
                b += " ";
            }
            else {
                j = false;
            }
            b += h;
        }
        var k = new FontInfo();
        k.n = h;
        k.d = parseFloat(f);
        k.o = "Normal";
        k.q = c;
        k.r = d;
        k.s = e;
        k.fontString = b;
        return k;
    };
    FontUtil.getFontForClass = function (a, b) {
        var c = stringEmpty();
        a.startCSSQuery();
        var d = a.getCssDefaultPropertyValue(b, "font-style");
        var e = a.getCssDefaultPropertyValue(b, "font-variant");
        var f = a.getCssDefaultPropertyValue(b, "font-weight");
        f = FontUtil.o(f);
        var g = a.getCssDefaultPropertyValue(b, "font-size");
        var h = a.getCssDefaultPropertyValue(b, "line-height");
        var i = a.getCssDefaultPropertyValue(b, "font-family");
        a.endCSSQuery();
        var j = true;
        if (d.length > 0) {
            if (!j) {
                c += " ";
            }
            else {
                j = false;
            }
            c += d;
        }
        if (e.length > 0) {
            if (!j) {
                c += " ";
            }
            else {
                j = false;
            }
            c += e;
        }
        if (f.length > 0) {
            if (!j) {
                c += " ";
            }
            else {
                j = false;
            }
            c += f;
        }
        if (g.length > 0) {
            if (!j) {
                c += " ";
            }
            else {
                j = false;
            }
            c += g;
        }
        if (h.length > 0) {
            if (!j) {
                c += "/";
            }
            else {
                j = false;
            }
            c += h;
        }
        if (i.length > 0) {
            if (!j) {
                c += " ";
            }
            else {
                j = false;
            }
            c += i;
        }
        var k = new FontInfo();
        k.n = i;
        k.d = parseFloat(g);
        k.o = "Normal";
        k.q = d;
        k.r = e;
        k.s = f;
        k.fontString = c;
        return k;
    };
    FontUtil.getFont = function (a) {
        return FontUtil.getFontForClass(a, "");
    };
    FontUtil.updateFontString = function (a) {
        var b = stringEmpty();
        var c = a.q;
        var d = a.r;
        var e = a.s;
        var f = a.d.toString();
        var g = "normal";
        var h = a.n;
        var i = true;
        if (c != null && c.length > 0) {
            if (!i) {
                b += " ";
            }
            else {
                i = false;
            }
            b += c;
        }
        if (d != null && d.length > 0) {
            if (!i) {
                b += " ";
            }
            else {
                i = false;
            }
            b += d;
        }
        if (e != null && e.length > 0) {
            if (!i) {
                b += " ";
            }
            else {
                i = false;
            }
            b += e;
        }
        if (f.length > 0) {
            if (!i) {
                b += " ";
            }
            else {
                i = false;
            }
            b += f + "px";
        }
        if (g != null && g.length > 0) {
            if (!i) {
                b += "/";
            }
            else {
                i = false;
            }
            b += g;
        }
        if (h != null && h.length > 0) {
            if (!i) {
                b += " ";
            }
            else {
                i = false;
            }
            b += h;
        }
        a.fontString = b;
    };
    FontUtil.getFontInfo = function (a, b, c) {
        if (c == null) {
            var d = new FontInfo();
            a.startCSSQuery();
            var e = a.getCssDefaultPropertyValue("", "font-style");
            var f = a.getCssDefaultPropertyValue("", "font-variant");
            var g = a.getCssDefaultPropertyValue("", "font-weight");
            g = FontUtil.o(g);
            var h = a.getCssDefaultPropertyValue("", "font-size");
            var i = a.getCssDefaultPropertyValue("", "line-height");
            var j = a.getCssDefaultPropertyValue("", "font-family");
            d.n = stringReplace(j, "'", "");
            d.q = FontUtil.p(e);
            d.s = FontUtil.p(g.toString());
            d.r = f;
            d.e = parseFloat(i);
            d.d = parseFloat(h);
            a.endCSSQuery();
            return d;
        }
        return c;
    };
    FontUtil.p = function (a) {
        if (stringIsNullOrEmpty(a)) {
            return stringEmpty();
        }
        var b = a.substr(0, 1).toUpperCase();
        if (a.length > 1) {
            b += a.substr(1);
        }
        return b;
    };
    FontUtil.toFontInfo = function (a, b) {
        if (b == null) {
            return null;
        }
        return FontUtil.getFontInfoFromString(a, b);
    };
    FontUtil.interpolateFont = function (a, b, c, d) {
        if (c == null) {
            c = d;
        }
        if (d == null) {
            d = c;
        }
        if (c == null && d == null) {
            return;
        }
        if (b > 0.5) {
            a.n = d.n;
            a.o = d.o;
            a.q = d.q;
            a.r = d.r;
            a.s = d.s;
            a.e = d.e;
            a.d = d.d;
        }
        else {
            a.n = c.n;
            a.o = c.o;
            a.q = c.q;
            a.r = c.r;
            a.s = c.s;
            a.e = c.e;
            a.d = c.d;
        }
        if (!isNaN_(c.d) && !isNaN_(d.d)) {
            a.d = c.d + (d.d - c.d) * b;
        }
        FontUtil.updateFontString(a);
    };
    FontUtil.charsEqual = function (a, b, c, d) {
        return Base.equalsStatic(a.charAt(b), c[d]);
    };
    FontUtil.o = function (a) {
        switch (a) {
            case "400":
                a = "normal";
                break;
            case "700":
            case "800":
                a = "bold";
                break;
        }
        return a;
    };
    FontUtil.$t = markType(FontUtil, 'FontUtil');
    FontUtil.a = null;
    return FontUtil;
}(Base));
export { FontUtil };
/**
 * @hidden
 */
var RenderingContext = /** @class */ (function (_super) {
    tslib_1.__extends(RenderingContext, _super);
    function RenderingContext(a, b) {
        var _this = _super.call(this) || this;
        _this.c = null;
        _this.c = a;
        if (_this.c != null) {
            _this.c.h$d = b;
        }
        return _this;
    }
    RenderingContext.prototype.g = function () {
        if (this.c == null) {
            return null;
        }
        return this.c.h$e();
    };
    Object.defineProperty(RenderingContext.prototype, "d", {
        get: function () {
            if (this.c == null) {
                return false;
            }
            return true;
        },
        enumerable: true,
        configurable: true
    });
    RenderingContext.prototype.v = function (a) {
        if (this.c == null) {
            return;
        }
        this.c.h$t(a);
    };
    RenderingContext.prototype.s = function (a) {
        if (this.c == null) {
            return;
        }
        this.c.h$q(a);
    };
    RenderingContext.prototype.q = function (a) {
        if (this.c == null) {
            return;
        }
        this.c.h$o(a);
    };
    RenderingContext.prototype.w = function (a) {
        if (this.c == null) {
            return;
        }
        this.c.h$u(a);
    };
    RenderingContext.prototype.x = function (a, b, c) {
        if (this.c == null) {
            return;
        }
        this.c.h$v(a, b, c);
    };
    RenderingContext.prototype.t = function (a) {
        if (this.c == null) {
            return;
        }
        this.c.h$r(a);
    };
    RenderingContext.prototype.u = function (a) {
        if (this.c == null) {
            return;
        }
        this.c.h$s(a);
    };
    RenderingContext.prototype.p = function (a, b) {
        if (this.c == null) {
            return;
        }
        this.c.h$n(a, b);
    };
    RenderingContext.prototype.j = function (a) {
        if (this.c == null) {
            return;
        }
        this.c.h$h(a);
    };
    RenderingContext.prototype.r = function (a) {
        if (this.c == null) {
            return;
        }
        this.c.h$p(a);
    };
    RenderingContext.prototype.z = function () {
        if (this.c == null) {
            return;
        }
        this.c.h$x();
    };
    RenderingContext.prototype.y = function () {
        if (this.c == null) {
            return;
        }
        this.c.h$w();
    };
    RenderingContext.prototype.ae = function (a) {
        if (this.c == null) {
            return;
        }
        this.c.h$ac(a);
    };
    RenderingContext.prototype.aa = function (a, b) {
        if (this.c == null) {
            return;
        }
        this.c.h$y(a, b);
    };
    RenderingContext.prototype.af = function (a, b) {
        if (this.c == null) {
            return;
        }
        this.c.h$ad(a, b);
    };
    RenderingContext.prototype.k = function (a, b, c, d) {
        if (this.c == null) {
            return;
        }
        this.c.h$i(a, b, c, d);
    };
    RenderingContext.prototype.n = function (a, b, c, d, e, f, g, h, i, j) {
        if (this.c == null) {
            return;
        }
        this.c.h$l(a, b, c, d, e, f, g, h, i, j);
    };
    RenderingContext.prototype.m = function (a, b, c, d, e, f) {
        if (this.c == null) {
            return;
        }
        this.c.h$k(a, b, c, d, e, f);
    };
    RenderingContext.prototype.a = function (a, b) {
        if (this.c == null) {
            return null;
        }
        return this.c.h$a(a, b);
    };
    RenderingContext.prototype.h = function () {
        if (this.c == null) {
            return null;
        }
        return this.c.h$f();
    };
    RenderingContext.prototype.b = function () {
        if (this.c == null) {
            return null;
        }
        return this.c.h$b();
    };
    RenderingContext.prototype.ab = function (a) {
        if (this.c == null) {
            return;
        }
        this.c.h$z(a);
    };
    RenderingContext.prototype.ac = function (a) {
        if (this.c == null) {
            return;
        }
        this.c.h$aa(a);
    };
    RenderingContext.prototype.f = function (a) {
        if (this.c == null) {
            return NaN;
        }
        return this.c.h$c(a);
    };
    RenderingContext.prototype.e = function (a) {
        if (this.c == null) {
            return NaN;
        }
        var b = this.c.h$b();
        var c = 0;
        if (b == null) {
            b = this.c.h$f();
        }
        else {
            c = b.g;
        }
        var d = a.ag(b, c);
        if (d >= 0) {
            return d;
        }
        var e = this.c.h$c(a.ak);
        a.al(b, c, e);
        return e;
    };
    RenderingContext.prototype.ad = function (a) {
        if (this.c == null) {
            return;
        }
        this.c.h$ab(a);
    };
    RenderingContext.prototype.i = function (a, b) {
        if (this.c == null || b == null) {
            return;
        }
        this.c.h$g(a, b);
    };
    RenderingContext.prototype.o = function (a, b, c, d) {
        if (this.c == null) {
            return;
        }
        this.c.h$m(a, b, c, d);
    };
    RenderingContext.prototype.l = function () {
        if (this.c == null) {
            return;
        }
        this.c.h$j();
    };
    RenderingContext.$t = markType(RenderingContext, 'RenderingContext');
    return RenderingContext;
}(Base));
export { RenderingContext };
//# sourceMappingURL=IRenderer_combined.js.map