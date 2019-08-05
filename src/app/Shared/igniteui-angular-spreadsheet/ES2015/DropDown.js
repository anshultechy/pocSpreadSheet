/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, runOn, delegateCombine, fromEnum, markType } from "../../igniteui-angular-core/ES2015/type";
import { DomWrapper_$type } from "../../igniteui-angular-core/ES2015/dom";
import { DropDownItem } from "./DropDownItem";
import { Dictionary$2 } from "../../igniteui-angular-core/ES2015/Dictionary$2";
import { List$1 } from "../../igniteui-angular-core/ES2015/List$1";
import { Tuple } from "../../igniteui-angular-core/ES2015/Tuple";
import { CustomDOMEventProxy } from "./CustomDOMEventProxy";
import { RelativePositionInfo } from "./RelativePositionInfo";
import { Rect } from "../../igniteui-angular-core/ES2015/Rect";
/**
 * @hidden
 */
export class DropDown extends Base {
    constructor(a, b, c, d, e, f) {
        super();
        this.z = null;
        this.ab = null;
        this.aa = null;
        this.o = null;
        this.n = null;
        this.d = null;
        this.af = 0;
        this.ah = -1;
        this.e = false;
        this.ag = 0;
        this.y = null;
        this.a = null;
        this.b = null;
        this.m = false;
        this.childRequested = null;
        this.closed = null;
        this.itemClicked = null;
        this.opened = null;
        this.selectedItemChanged = null;
        this.z = a;
        this.o = new List$1(DomWrapper_$type, 0);
        this.n = new Dictionary$2(DomWrapper_$type, DropDownItem.$, 0);
        this.a = d;
        this.b = e;
        this.af = d == null ? 0 : d.af + 1;
        this.ap(a, c, this.af, f);
        this.aa.setRawStyleProperty("position", "absolute");
        this.aa.setRawStyleProperty("visibility", "hidden");
        b.append(this.aa);
        this.d = ((() => {
            let $ret = new CustomDOMEventProxy(this.aa, a, false);
            $ret._dz = (g) => true;
            return $ret;
        })());
        let g = this.d;
        g.onKeyDown = delegateCombine(g.onKeyDown, runOn(this, this.k));
        let h = this.d;
        h.onMouseUp = delegateCombine(h.onMouseUp, runOn(this, this.aw));
        let i = this.d;
        i.onMouseOver = delegateCombine(i.onMouseOver, runOn(this, this.av));
    }
    get ac() {
        return this.aa;
    }
    get f() {
        return this.e;
    }
    get c() {
        return this.ah < 0 ? null : this.n.item(this.o._inner[this.ah]);
    }
    get ai() {
        return this.ah;
    }
    set ai(a) {
        this.a1();
        if (this.ah != a) {
            let b = this.ah >= 0 ? this.o._inner[this.ah] : null;
            let c = a >= 0 ? this.o._inner[a] : null;
            this.ah = a;
            if (b != null) {
                b.removeClass("selected");
            }
            if (c != null) {
                c.addClass("selected");
                this.az(c);
            }
            let d = this.selectedItemChanged;
            if (d != null) {
                d(this, Tuple.a(DropDownItem.$, DropDownItem.$, b != null ? this.n.item(b) : null, c != null ? this.n.item(c) : null));
            }
        }
    }
    ao() {
        this.a1();
        this.e = false;
        this.aa.setRawStyleProperty("visibility", "hidden");
        this.d.ab = true;
        let a = this.closed;
        if (a != null) {
            a(this, null);
        }
    }
    ap(a, b, c, d) {
        let e = a.createElement("div");
        let f = a.createElement("div");
        this.ab = f;
        this.aa = e;
        this.as(a, b, d);
        e.setRawStyleProperty("z-index", 10000 + c);
        e.setAttribute("tabIndex", -1);
        e.append(f);
    }
    aq() {
        this.a1();
        if (this.aa != null) {
            this.e = false;
            this.d.ao();
            this.d = null;
            let a = this.aa;
            this.aa = null;
            this.ab = null;
            a.remove();
        }
    }
    ar() {
        this.a1();
        let a = this.c;
        if (a != null && a.c && a.f) {
            this.ax(a);
        }
    }
    static p(a, b, c, d) {
        let e = d - c;
        if (c < a) {
            e -= a - c;
        }
        if (d > b) {
            e -= d - b;
        }
        return e;
    }
    ad() {
        let a = this.aa.getNativeElement();
        let b = this.d.am.originalEvent;
        let c = (b.target);
        while (c != null && c != a) {
            let d = c.classList;
            if (d != null && (d.contains("ui-ig-internal-dropdownitem"))) {
                for (let e = 0; e < this.o.count; e++) {
                    if (c == this.o._inner[e].getNativeElement()) {
                        return this.o._inner[e];
                    }
                }
            }
            c = (c.parentNode);
        }
        let f = (b.clientX);
        let g = (b.clientY);
        let h = this.ah < 0 ? 0 : this.ah;
        let i = this.o.count;
        for (let j = h, k = h + i; j < k; j++) {
            let l = this.o._inner[j % i];
            let m = l.getNativeElement().getBoundingClientRect();
            let n = (m.top <= g && m.left <= f && m.bottom >= g && m.right >= f);
            if (n) {
                return l;
            }
        }
        return null;
    }
    static r(a, b, c = false) {
        if (!c) {
            return DropDown.q(a.b, a.i, a.g, b);
        }
        else {
            let d = a.b;
            if (d == 1) {
                d = 2;
            }
            else if (d == 2) {
                d = 1;
            }
            return DropDown.q(d, -a.i, a.g, b);
        }
    }
    static q(a, b, c, d) {
        let e = 0;
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
    }
    static s(a, b, c, d, e, f, g, h, i) {
        i = e;
        let j = b - a;
        let k = a + DropDown.r(f, j) - DropDown.r(g, e);
        if (h != 0) {
            let l = DropDown.p(c, d, k, k + e);
            if (l < e) {
                if ((h & 1) != 0) {
                    let m = a + DropDown.r(f, j, true) - DropDown.r(g, e, true);
                    let n = DropDown.p(c, d, m, m + e);
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
    }
    ae(a) {
        for (let b of fromEnum(this.n)) {
            if (b.value == a) {
                return b.key;
            }
        }
        return null;
    }
    as(a, b, c) {
        this.ab.removeChildren();
        this.n.clear();
        for (let d of fromEnum(this.o)) {
            d.destroy();
        }
        this.o.clear();
        for (let e = 0; e < b.count; e++) {
            let f = b.item(e);
            let g = a.createElement("div");
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
    }
    g(a) {
        return this.h(this.ah, a);
    }
    h(a, b) {
        let c = this.o.count;
        let d = b ? 1 : -1;
        let e, f;
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
        for (let g = e; g != f; g += d) {
            let h = g % c;
            let i = this.n.item(this.o._inner[h]);
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
    }
    i() {
        return this.h(0, true);
    }
    j() {
        return this.h(this.n.count - 1, false);
    }
    at() {
        this.ag = 0;
        this.ar();
    }
    au(a) {
        let b = this.n.item(a);
        if (!b.f || b.g) {
            return;
        }
        if (!b.c && !b.i) {
            let c = this;
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
        let d = this.itemClicked;
        if (d != null) {
            d(this, b);
        }
    }
    k(a) {
        let b = this.d.am;
        if (this.y != null && this.y(this, a, this.d.ba, b)) {
            return true;
        }
        if (this.l(a, this.d.ba)) {
            b.stopPropagation();
            b.preventDefault();
        }
        return true;
    }
    av(a, b, c) {
        let d = this.ad();
        if (d != null) {
            let e = this.n.item(d);
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
    }
    aw(a) {
        let b = this.ad();
        if (b != null) {
            this.au(b);
        }
    }
    ax(a) {
        if (!this.e) {
            return;
        }
        let b = this.childRequested;
        if (b != null) {
            b(this, a);
        }
    }
    ay(a, b, c, d = true) {
        let e = c.d || RelativePositionInfo.c;
        let f = c.f || RelativePositionInfo.c;
        let g = c.c || RelativePositionInfo.c;
        let h = c.e || RelativePositionInfo.c;
        let i = a.getNativeElement();
        let j = i.parentElement;
        let k = j.getBoundingClientRect();
        let l = i.scrollWidth + (i.offsetWidth - i.clientWidth);
        let m = i.scrollHeight + (i.offsetHeight - i.clientHeight);
        let n = -(k.left);
        let o = (window.innerWidth || document.documentElement.clientWidth);
        let p = -(k.top);
        let q = (window.innerHeight || document.documentElement.clientHeight);
        let r, s;
        let t = ((() => { let u = DropDown.s(b.x, b.right, n + 1, n + o - 2, l, e, g, c.a, r); r = u.p8; return u.ret; })());
        let u = ((() => { let v = DropDown.s(b.y, b.bottom, p + 1, p + q - 2, m, f, h, c.b, s); s = v.p8; return v.ret; })());
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
            let v = i.scrollWidth + (i.offsetWidth - i.clientWidth);
            let w = i.scrollHeight + (i.offsetHeight - i.clientHeight);
            this.ay(a, b, c, false);
        }
    }
    l(a, b) {
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
    }
    az(a) {
        let b = a.getNativeElement().getBoundingClientRect();
        let c = this.aa.getNativeElement().getBoundingClientRect();
        let d = (b.height);
        let e = (b.y);
        let f = (b.bottom);
        let g = (c.y);
        let h = (c.bottom);
        if (DropDown.p(g, h, e, f) != d) {
            let i = this.aa.getProperty("scrollTop");
            if (e < g) {
                i -= g - e;
            }
            else if (f > h) {
                i += Math.min(f - h, e - g);
            }
            this.aa.setProperty("scrollTop", i);
        }
    }
    a0(a, b) {
        let c = this.aa;
        this.e = true;
        this.d.bd = new Rect(0, 0, 0, c.outerWidth(), c.outerHeight());
        this.d.ab = false;
        this.ay(c, a, b);
        if (this.ah >= 0) {
            this.az(this.o._inner[this.ah]);
        }
        this.aa.setRawStyleProperty("visibility", "");
        let d = this.opened;
        if (d != null) {
            d(this, null);
        }
    }
    a1() {
        if (this.ag != 0) {
            let a = this.ag;
            this.ag = 0;
            this.z.clearTimeout(a);
        }
    }
}
DropDown.$t = markType(DropDown, 'DropDown');
//# sourceMappingURL=DropDown.js.map
