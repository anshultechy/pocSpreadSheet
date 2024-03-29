/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, Type, markType } from "./type";
import { isNaN_ } from "./number";
import { stringEmpty, stringReplace, stringIsNullOrEmpty } from "./string";
/**
 * @hidden
 */
export let IRenderer_$type = new Type(null, 'IRenderer');
/**
 * @hidden
 */
export class FontInfo extends Base {
    constructor() {
        super();
        this.f = 0;
        this.k = null;
        this.l = null;
        this.m = null;
        this.b = 0;
        this.c = 0;
        this.h = null;
        this.i = null;
        this.j = null;
        this.d = NaN;
        this.e = NaN;
    }
    t(a) {
        if (isNaN_(this.d)) {
            let b = FontUtil.getFontInfoFromString(a, this.fontString);
            this.h = b.n;
            this.b = b.d;
            this.i = b.o;
            this.k = b.q;
            this.l = b.r;
            this.m = b.s;
        }
    }
    get g() {
        return this.f;
    }
    get q() {
        return this.k;
    }
    set q(a) {
        let b = this.k;
        this.k = a;
        if (b != this.k) {
            this.u("FontStyle");
        }
    }
    u(a) {
        if (a != "FontString") {
            this.j = null;
        }
        if (this.f < 100000) {
            this.f++;
        }
        else {
            this.f = 0;
        }
    }
    get r() {
        return this.l;
    }
    set r(a) {
        let b = this.l;
        this.l = a;
        if (this.l != b) {
            this.u("FontVariant");
        }
    }
    get s() {
        return this.m;
    }
    set s(a) {
        let b = this.m;
        this.m = a;
        if (this.m != b) {
            this.u("FontWeight");
        }
    }
    get d() {
        return this.b;
    }
    set d(a) {
        let b = this.b;
        this.b = a;
        if (this.b != b) {
            this.u("FontSize");
        }
    }
    get e() {
        return this.c;
    }
    set e(a) {
        let b = this.c;
        this.c = a;
        if (this.c != b) {
            this.u("LineHeight");
        }
    }
    get n() {
        return this.h;
    }
    set n(a) {
        let b = this.h;
        this.h = a;
        if (this.h != b) {
            this.u("FontFamily");
        }
    }
    get o() {
        return this.i;
    }
    set o(a) {
        let b = this.i;
        this.i = a;
        if (this.i != b) {
            this.u("FontStretch");
        }
    }
    get fontString() {
        if (this.j == null) {
            FontUtil.updateFontString(this);
        }
        return this.j;
    }
    set fontString(a) {
        let b = this.j;
        this.j = a;
        if (this.j != b) {
            this.u("FontString");
        }
    }
    a() {
        return ((() => {
            let $ret = new FontInfo();
            $ret.q = this.q;
            $ret.r = this.r;
            $ret.s = this.s;
            $ret.d = this.d;
            $ret.e = this.e;
            $ret.n = this.n;
            $ret.o = this.o;
            $ret.fontString = this.fontString;
            return $ret;
        })());
    }
}
FontInfo.$t = markType(FontInfo, 'FontInfo');
/**
 * @hidden
 */
export class FontUtil extends Base {
    static getCurrentFontHeight(a, b) {
        if (a == null) {
            return 14;
        }
        let c = null;
        if (b != null) {
            c = b.fontString;
        }
        return a.getHeightForFontString(c, "M", true);
    }
    static measureStringHeight(a, b, c) {
        let d = a.getHeightForFontString(c.fontString, b, false);
        return d;
    }
    static measureStringWidth1(a, b, c) {
        c.z();
        c.ab(b);
        let d = c.f(a);
        c.y();
        return d;
    }
    static measureStringWidth(a, b, c) {
        c.z();
        c.ac(b);
        let d = c.f(a);
        c.y();
        return d;
    }
    static getDefaultFont(a) {
        if (FontUtil.a == null) {
            FontUtil.a = FontUtil.getFontInfoFromString(a, "12px Verdana");
        }
        return FontUtil.a;
    }
    static getFontSize(a) {
        return a.d;
    }
    static getFontWithNewFontSize(a, b) {
        let c = a.a();
        c.d = b;
        c.fontString = b + "px " + a.n;
        return c;
    }
    static getFontInfoFromString(a, b) {
        a.startCSSQuery();
        a.setCssQueryFontString(b);
        let c = a.getCssDefaultPropertyValue("", "font-style");
        let d = a.getCssDefaultPropertyValue("", "font-variant");
        let e = a.getCssDefaultPropertyValue("", "font-weight");
        e = FontUtil.o(e);
        let f = a.getCssDefaultPropertyValue("", "font-size");
        let g = a.getCssDefaultPropertyValue("", "line-height");
        let h = a.getCssDefaultPropertyValue("", "font-family");
        a.endCSSQuery();
        let i = new FontInfo();
        let j = true;
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
        let k = new FontInfo();
        k.n = h;
        k.d = parseFloat(f);
        k.o = "Normal";
        k.q = c;
        k.r = d;
        k.s = e;
        k.fontString = b;
        return k;
    }
    static getFontForClass(a, b) {
        let c = stringEmpty();
        a.startCSSQuery();
        let d = a.getCssDefaultPropertyValue(b, "font-style");
        let e = a.getCssDefaultPropertyValue(b, "font-variant");
        let f = a.getCssDefaultPropertyValue(b, "font-weight");
        f = FontUtil.o(f);
        let g = a.getCssDefaultPropertyValue(b, "font-size");
        let h = a.getCssDefaultPropertyValue(b, "line-height");
        let i = a.getCssDefaultPropertyValue(b, "font-family");
        a.endCSSQuery();
        let j = true;
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
        let k = new FontInfo();
        k.n = i;
        k.d = parseFloat(g);
        k.o = "Normal";
        k.q = d;
        k.r = e;
        k.s = f;
        k.fontString = c;
        return k;
    }
    static getFont(a) {
        return FontUtil.getFontForClass(a, "");
    }
    static updateFontString(a) {
        let b = stringEmpty();
        let c = a.q;
        let d = a.r;
        let e = a.s;
        let f = a.d.toString();
        let g = "normal";
        let h = a.n;
        let i = true;
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
    }
    static getFontInfo(a, b, c) {
        if (c == null) {
            let d = new FontInfo();
            a.startCSSQuery();
            let e = a.getCssDefaultPropertyValue("", "font-style");
            let f = a.getCssDefaultPropertyValue("", "font-variant");
            let g = a.getCssDefaultPropertyValue("", "font-weight");
            g = FontUtil.o(g);
            let h = a.getCssDefaultPropertyValue("", "font-size");
            let i = a.getCssDefaultPropertyValue("", "line-height");
            let j = a.getCssDefaultPropertyValue("", "font-family");
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
    }
    static p(a) {
        if (stringIsNullOrEmpty(a)) {
            return stringEmpty();
        }
        let b = a.substr(0, 1).toUpperCase();
        if (a.length > 1) {
            b += a.substr(1);
        }
        return b;
    }
    static toFontInfo(a, b) {
        if (b == null) {
            return null;
        }
        return FontUtil.getFontInfoFromString(a, b);
    }
    static interpolateFont(a, b, c, d) {
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
    }
    static charsEqual(a, b, c, d) {
        return Base.equalsStatic(a.charAt(b), c[d]);
    }
    static o(a) {
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
    }
}
FontUtil.$t = markType(FontUtil, 'FontUtil');
FontUtil.a = null;
/**
 * @hidden
 */
export class RenderingContext extends Base {
    constructor(a, b) {
        super();
        this.c = null;
        this.c = a;
        if (this.c != null) {
            this.c.h$d = b;
        }
    }
    g() {
        if (this.c == null) {
            return null;
        }
        return this.c.h$e();
    }
    get d() {
        if (this.c == null) {
            return false;
        }
        return true;
    }
    v(a) {
        if (this.c == null) {
            return;
        }
        this.c.h$t(a);
    }
    s(a) {
        if (this.c == null) {
            return;
        }
        this.c.h$q(a);
    }
    q(a) {
        if (this.c == null) {
            return;
        }
        this.c.h$o(a);
    }
    w(a) {
        if (this.c == null) {
            return;
        }
        this.c.h$u(a);
    }
    x(a, b, c) {
        if (this.c == null) {
            return;
        }
        this.c.h$v(a, b, c);
    }
    t(a) {
        if (this.c == null) {
            return;
        }
        this.c.h$r(a);
    }
    u(a) {
        if (this.c == null) {
            return;
        }
        this.c.h$s(a);
    }
    p(a, b) {
        if (this.c == null) {
            return;
        }
        this.c.h$n(a, b);
    }
    j(a) {
        if (this.c == null) {
            return;
        }
        this.c.h$h(a);
    }
    r(a) {
        if (this.c == null) {
            return;
        }
        this.c.h$p(a);
    }
    z() {
        if (this.c == null) {
            return;
        }
        this.c.h$x();
    }
    y() {
        if (this.c == null) {
            return;
        }
        this.c.h$w();
    }
    ae(a) {
        if (this.c == null) {
            return;
        }
        this.c.h$ac(a);
    }
    aa(a, b) {
        if (this.c == null) {
            return;
        }
        this.c.h$y(a, b);
    }
    af(a, b) {
        if (this.c == null) {
            return;
        }
        this.c.h$ad(a, b);
    }
    k(a, b, c, d) {
        if (this.c == null) {
            return;
        }
        this.c.h$i(a, b, c, d);
    }
    n(a, b, c, d, e, f, g, h, i, j) {
        if (this.c == null) {
            return;
        }
        this.c.h$l(a, b, c, d, e, f, g, h, i, j);
    }
    m(a, b, c, d, e, f) {
        if (this.c == null) {
            return;
        }
        this.c.h$k(a, b, c, d, e, f);
    }
    a(a, b) {
        if (this.c == null) {
            return null;
        }
        return this.c.h$a(a, b);
    }
    h() {
        if (this.c == null) {
            return null;
        }
        return this.c.h$f();
    }
    b() {
        if (this.c == null) {
            return null;
        }
        return this.c.h$b();
    }
    ab(a) {
        if (this.c == null) {
            return;
        }
        this.c.h$z(a);
    }
    ac(a) {
        if (this.c == null) {
            return;
        }
        this.c.h$aa(a);
    }
    f(a) {
        if (this.c == null) {
            return NaN;
        }
        return this.c.h$c(a);
    }
    e(a) {
        if (this.c == null) {
            return NaN;
        }
        let b = this.c.h$b();
        let c = 0;
        if (b == null) {
            b = this.c.h$f();
        }
        else {
            c = b.g;
        }
        let d = a.ag(b, c);
        if (d >= 0) {
            return d;
        }
        let e = this.c.h$c(a.ak);
        a.al(b, c, e);
        return e;
    }
    ad(a) {
        if (this.c == null) {
            return;
        }
        this.c.h$ab(a);
    }
    i(a, b) {
        if (this.c == null || b == null) {
            return;
        }
        this.c.h$g(a, b);
    }
    o(a, b, c, d) {
        if (this.c == null) {
            return;
        }
        this.c.h$m(a, b, c, d);
    }
    l() {
        if (this.c == null) {
            return;
        }
        this.c.h$j();
    }
}
RenderingContext.$t = markType(RenderingContext, 'RenderingContext');
//# sourceMappingURL=IRenderer_combined.js.map