/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { VisualElement } from "./VisualElement";
import { ScrollInfo } from "./ScrollInfo";
import { runOn, delegateCombine, delegateRemove, markType } from "../../igniteui-angular-core/ES2015/type";
import { RepeatButtonVisualElement } from "./RepeatButtonVisualElement";
import { JsScrollEventArgs } from "./JsScrollEventArgs";
/**
 * @hidden
 */
export class ScrollBarVisualElement extends VisualElement {
    constructor(a, b, c) {
        super(b, c);
        this.ck = null;
        this.cl = 0;
        this.cn = false;
        this.cg = null;
        this.cf = null;
        this.ci = null;
        this.ch = null;
        this.cj = null;
        this.cm = false;
        this.cs = 0;
        this.cr = 0;
        this.cu = 0;
        this.ct = 0;
        this.scroll = null;
        let d = a == 1;
        this.cn = d;
        this.cl = a;
        this.ck = new ScrollInfo();
        let e = this.ck;
        e.propertyChanged = delegateCombine(e.propertyChanged, runOn(this, this.c6));
        this.cg = new RepeatButtonVisualElement(this, "ScrollBarNearButton");
        let f = this.cg;
        f.click = delegateCombine(f.click, (f, g) => this.c4(0, 1));
        this.cf = new RepeatButtonVisualElement(this, "ScrollBarFarButton");
        let g = this.cf;
        g.click = delegateCombine(g.click, (g, h) => this.c4(1, 4));
        this.ci = new RepeatButtonVisualElement(this, "ScrollBarNearTrack");
        let h = this.ci;
        h.click = delegateCombine(h.click, (h, i) => this.c4(2, 0));
        this.ch = new RepeatButtonVisualElement(this, "ScrollBarFarTrack");
        let i = this.ch;
        i.click = delegateCombine(i.click, (i, j) => this.c4(3, 3));
        this.cj = new ScrollBarVisualElement_ScrollThumbVisualElement(this, "ScrollBarThumb");
    }
    bz() {
        super.bz();
        let a = this.ck;
        a.propertyChanged = delegateRemove(a.propertyChanged, runOn(this, this.c6));
    }
    b3() {
        super.b3();
        this.cg.u = this.cf.u = this.u;
        this.cj.ac = this.ch.ac = this.ci.ac = this.u;
        this.t = true;
    }
    b7(a, b, c, d) {
        super.b7(a, b, c, d);
        if (this.cn) {
            this.cg.al(a, b, c, this.cg.av);
            this.cf.al(a, b + d - this.cg.av, c, this.cf.av);
        }
        else {
            this.cg.al(a, b, this.cg.a3, d);
            this.cf.al(a + c - this.cg.a3, b, this.cf.a3, d);
        }
        let e = this.cn ? this.cg.av : this.cg.a3;
        let f = this.cn ? this.cf.av : this.cf.a3;
        let g = e + f;
        let h = this.cn ? d : c;
        let i = Math.max(h - g, 0);
        let j = 0;
        let k = 0;
        let l = this.ck._ab;
        if (i > 0) {
            let m = this.ck._z;
            let n = (this.ck._t + 1 - m) - l;
            if (m == 0) {
                j = this.cn ? c : d;
            }
            else {
                let o = m / (n + m);
                j = i * o;
                let p = 8;
                if (j < p) {
                    j = p;
                }
            }
            if (j > i) {
                j = i;
            }
            let q = 0;
            let r = this.ck._ac;
            if (n != 0) {
                q = Math.min(r - l, n) / n;
            }
            i -= j;
            k = (q * i);
        }
        let s = i - k;
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
    }
    cv(a) {
        let b = this.a3;
        let c = this.av;
        let d = this.cn ? this.cg.av : this.cg.a3;
        let e = this.cn ? this.cf.av : this.cf.a3;
        let f = d + e;
        let g = a.x;
        let h = a.y;
        let i, j;
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
        let k = this.ck._ab;
        let l = this.ck._z;
        let m = (this.ck._t + 1 - l) - k;
        let n = (m * j / i) + k;
        if (n < k) {
            n = k;
        }
        else if (n > this.ck._aa) {
            n = this.ck._aa;
        }
        return n;
    }
    c3() {
        if (this.cm) {
            this.cj.s = false;
            this.cm = false;
            this.c5(4, this.ck._ac);
            this.c5(8, this.ck._ac);
        }
    }
    co(a) {
        if (a.a() == 1 && a.d()) {
            this.cm = true;
            this.cj.s = false;
            let b = a.h();
            this.ct = this.cn ? b.y : b.x;
            this.cs = this.ck._ac;
            this.c5(5, this.cs);
            return true;
        }
        else {
            this.c3();
            return false;
        }
    }
    cp(a) {
        if (this.cm) {
            let b = a.h();
            let c = this.cv(b);
            if (c != this.ck._ac) {
                this.c5(5, c);
            }
            return true;
        }
        else {
            return super.ag(a);
        }
    }
    cq(a) {
        if (this.cm) {
            this.c3();
            a.f();
            return true;
        }
        return false;
    }
    c4(a, b) {
        this.c5(a, this.ck._s(b));
    }
    c5(a, b) {
        let c = this.scroll;
        if (null != c) {
            let d = new JsScrollEventArgs(a, b);
            c(this, d);
            b = d._c;
        }
        this.ck._aq(b);
    }
    c6(a, b) {
        switch (b.propertyName != null ? b.propertyName : "") {
            case "":
            case "Offset":
                this.t = true;
                break;
        }
    }
}
ScrollBarVisualElement.$t = markType(ScrollBarVisualElement, 'ScrollBarVisualElement', VisualElement.$);
/**
 * @hidden
 */
export class ScrollBarVisualElement_ScrollThumbVisualElement extends VisualElement {
    constructor(a, b) {
        super(a, b);
    }
    get cf() {
        return this._parent;
    }
    get_x() {
        return true;
    }
    ad(a) {
        return this.cf.co(a);
    }
    ag(a) {
        return this.cf.cp(a);
    }
    ah(a) {
        return this.cf.cq(a);
    }
}
ScrollBarVisualElement_ScrollThumbVisualElement.$t = markType(ScrollBarVisualElement_ScrollThumbVisualElement, 'ScrollBarVisualElement_ScrollThumbVisualElement', VisualElement.$);
//# sourceMappingURL=ScrollBarVisualElement_combined.js.map