/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, Number_$type, markType } from "./type";
import { List$1 } from "./List$1";
import { MathUtil } from "./MathUtil";
import { isNaN_ } from "./number";
/**
 * @hidden
 */
export class Flattener extends Base {
    constructor() {
        super();
    }
    static d(a, b, c, d) {
        let e = new List$1(Number_$type, 0);
        Flattener.c(e, b, c, 0, a - 1, d);
        return e;
    }
    static c(a, b, c, d, e, f) {
        return Flattener.b(a, (g) => g, b, c, d, e, f);
    }
    static a(a, b, c, d, e, f, g) {
        return Flattener.b(a, (h) => b.item(h), c, d, e, f, g);
    }
    static b(a, b, c, d, e, f, g) {
        if (e > f) {
            return a;
        }
        let h = c(b(e));
        let i = d(b(e));
        while ((isNaN_(h) || isNaN_(i)) && e < f) {
            ++e;
            h = c(b(e));
            i = d(b(e));
        }
        let j = c(b(f));
        let k = d(b(f));
        while ((isNaN_(j) || isNaN_(k)) && e < f) {
            --f;
            j = c(b(f));
            k = d(b(f));
        }
        if (e == f) {
            a.add(b(e));
            return a;
        }
        a.add(b(e));
        Flattener.e(a, b, c, d, e, f, g);
        a.add(b(f));
        return a;
    }
    static e(a, b, c, d, e, f, g) {
        let h = c(b(e));
        let i = d(b(e));
        while ((isNaN_(h) || isNaN_(i)) && e < f) {
            ++e;
            h = c(b(e));
            i = d(b(e));
        }
        let j = c(b(f));
        let k = d(b(f));
        while ((isNaN_(j) || isNaN_(k)) && e < f) {
            --f;
            j = c(b(f));
            k = d(b(f));
        }
        if (e + 1 >= f) {
            return;
        }
        let l = -1;
        let m = g;
        let n = MathUtil.e(j - h, k - i);
        if (n == 0) {
            for (let o = e + 1; o < f; ++o) {
                let p = c(b(o));
                let q = d(b(o));
                if (isNaN_(p) || isNaN_(q)) {
                    continue;
                }
                let r = MathUtil.e(j - p, k - q);
                if (r >= m) {
                    m = r;
                    l = o;
                }
            }
        }
        else {
            let s = j - h;
            let t = k - i;
            for (let u = e + 1; u < f; ++u) {
                let v = c(b(u));
                let w = d(b(u));
                if (isNaN_(v) || isNaN_(w)) {
                    continue;
                }
                let x = NaN;
                let y = c(b(u)) - h;
                let z = d(b(u)) - i;
                let aa = s * y + t * z;
                if (aa <= 0) {
                    x = MathUtil.e(h - v, i - w);
                }
                else {
                    let ab = s * s + t * t;
                    if (ab <= aa) {
                        x = MathUtil.e(j - v, k - w);
                    }
                    else {
                        let ac = aa / ab;
                        x = MathUtil.e(h + ac * s - v, i + ac * t - w);
                    }
                }
                if (x >= m) {
                    m = x;
                    l = u;
                }
            }
        }
        if (l != -1) {
            Flattener.e(a, b, c, d, e, l, g);
            a.add(b(l));
            Flattener.e(a, b, c, d, l, f, g);
        }
        return;
    }
}
Flattener.$t = markType(Flattener, 'Flattener');
//# sourceMappingURL=Flattener.js.map