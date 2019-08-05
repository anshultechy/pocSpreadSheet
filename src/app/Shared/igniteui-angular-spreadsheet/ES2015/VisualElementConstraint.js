/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, markType } from "../../igniteui-angular-core/ES2015/type";
import { isNaN_ } from "../../igniteui-angular-core/ES2015/number";
/**
 * @hidden
 */
export class VisualElementConstraint extends Base {
    constructor(a, b, c, d, e, f, g, h, i) {
        super();
        this.k = 0;
        this.j = 0;
        this.m = 0;
        this.l = 0;
        this.n = 0;
        this.i = 0;
        this.b = null;
        this.c = null;
        this.a = null;
        if (b > c) {
            c = b;
        }
        if (a < b) {
            a = b;
        }
        else if (a > c) {
            a = c;
        }
        if (e > f) {
            f = e;
        }
        if (d < e) {
            d = e;
        }
        else if (d > f) {
            d = f;
        }
        this.n = a;
        this.m = b;
        this.k = c;
        this.j = f;
        this.l = e;
        this.i = d;
        this.b = g;
        this.a = h;
        this.c = i;
    }
    e(a) {
        if (!isNaN_(this.i)) {
            a = this.i;
        }
        else if (a > this.j) {
            a = this.j;
        }
        else if (a < this.l) {
            a = this.l;
        }
        return a;
    }
    f(a) {
        if (!isNaN_(this.n)) {
            a = this.n;
        }
        else if (a > this.k) {
            a = this.k;
        }
        else if (a < this.m) {
            a = this.m;
        }
        return a;
    }
    g(a) {
        let b = a;
        b += this.c.a;
        b += this.a.a;
        b += this.b.a;
        return b;
    }
    h(a) {
        let b = a;
        b += this.c.d;
        b += this.a.d;
        b += this.b.d;
        return b;
    }
    d(a, b, c, d, e) {
        let f = this.b;
        if (f != null) {
            a += f.b;
            b += f.c;
            c -= f.d;
            d -= f.a;
        }
        let g = c;
        c = this.f(c);
        if (g != c) {
            a += (g - c) / 2;
        }
        let h = d;
        d = this.e(d);
        if (h != d) {
            b += (h - d) / 2;
        }
        return e(a, b, c, d);
    }
}
VisualElementConstraint.$t = markType(VisualElementConstraint, 'VisualElementConstraint');
//# sourceMappingURL=VisualElementConstraint.js.map