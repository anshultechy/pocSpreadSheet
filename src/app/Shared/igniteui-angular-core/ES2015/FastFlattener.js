/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, Number_$type, markType } from "./type";
import { List$1 } from "./List$1";
import { FlattenerSettings } from "./FlattenerSettings";
import { isNaN_ } from "./number";
/**
 * @hidden
 */
export class FastFlattener extends Base {
    constructor() {
        super();
    }
    static e(a, b, c, d, e, f) {
        if (d > e) {
            return a;
        }
        let g = b[d];
        let h = c[d];
        while ((isNaN_(g) || isNaN_(h)) && d < e) {
            ++d;
            g = b[d];
            h = c[d];
        }
        let i = b[e];
        let j = c[e];
        while ((isNaN_(i) || isNaN_(j)) && d < e) {
            --e;
            i = b[e];
            j = c[e];
        }
        if (d == e) {
            a.add(d);
            return a;
        }
        a.add(d);
        FastFlattener.h(a, b, c, d, e, f);
        a.add(e);
        return a;
    }
    static c(a, b, c, d, e) {
        let f;
        let g;
        if (c) {
            f = 0;
            g = 1;
        }
        else if (d) {
            f = 0;
            g = 2;
        }
        else {
            f = 2;
            g = 3;
        }
        return FastFlattener.d(a, b, f, g, e);
    }
    static b(a, b, c, d, e) {
        let f = new List$1(Number_$type, 0);
        let g = FastFlattener.a(f, b, c, d, 0, a - 1, e);
        return g;
    }
    static d(a, b, c, d, e) {
        let f = new List$1(Number_$type, 0);
        FastFlattener.g(f, b, c, d, 0, a - 1, e);
        return f;
    }
    static a(a, b, c, d, e, f, g) {
        let h = FlattenerSettings.instance.chunkingAmount;
        if ((f - e + 1) <= h) {
            return FastFlattener.f(a, b, c, d, e, f, g);
        }
        let i = a;
        if (h < 0) {
            for (let j = e; j <= f; j++) {
                i.add(j);
            }
            return i;
        }
        let k = e;
        let l = f;
        let m = l - k + 1;
        while (m > 0) {
            if (m <= h) {
                FastFlattener.f(i, b, c, d, k, l, g);
                k = l + 1;
            }
            else {
                let n = k + h - 1;
                FastFlattener.f(i, b, c, d, k, n, g);
                k = n + 1;
            }
            m = l - k + 1;
        }
        return i;
    }
    static f(a, b, c, d, e, f, g) {
        let h;
        let i;
        if (c) {
            h = 0;
            i = 1;
        }
        else if (d) {
            h = 0;
            i = 2;
        }
        else {
            h = 2;
            i = 3;
        }
        return FastFlattener.g(a, b, h, i, e, f, g);
    }
    static g(a, b, c, d, e, f, g) {
        if (e > f) {
            return a;
        }
        let h = b._inner[e];
        let i, j;
        i = h[c];
        j = h[d];
        while ((isNaN_(i) || isNaN_(j)) && e < f) {
            ++e;
            h = b._inner[e];
            i = h[c];
            j = h[d];
        }
        let k = b._inner[f];
        let l, m;
        l = k[c];
        m = k[d];
        while ((isNaN_(l) || isNaN_(m)) && e < f) {
            --f;
            k = b._inner[f];
            l = k[c];
            m = k[d];
        }
        if (e == f) {
            a.add(e);
            return a;
        }
        a.add(e);
        FastFlattener.i(a, b, c, d, e, f, g);
        a.add(f);
        return a;
    }
    static h(a, b, c, d, e, f) {
        let g = b[d];
        let h = c[d];
        while ((isNaN_(g) || isNaN_(h)) && d < e) {
            ++d;
            g = b[d];
            h = c[d];
        }
        let i = b[e];
        let j = c[e];
        while ((isNaN_(i) || isNaN_(j)) && d < e) {
            --e;
            i = b[e];
            j = c[e];
        }
        if (d + 1 >= e) {
            return;
        }
        let k = -1;
        let l = f * f;
        let m;
        let n;
        m = i - g;
        n = j - h;
        let o = m * m + n * n;
        if (o == 0) {
            for (let p = d + 1; p < e; ++p) {
                let q = b[p];
                let r = c[p];
                if (isNaN_(q) || isNaN_(r)) {
                    continue;
                }
                m = i - q;
                n = j - r;
                let s = m * m + n * n;
                if (s >= l) {
                    l = s;
                    k = p;
                }
            }
        }
        else {
            let t = i - g;
            let u = j - h;
            for (let v = d + 1; v < e; ++v) {
                let w = b[v];
                let x = c[v];
                if (isNaN_(w) || isNaN_(x)) {
                    continue;
                }
                let y = NaN;
                let z = b[v] - g;
                let aa = c[v] - h;
                let ab = t * z + u * aa;
                if (ab <= 0) {
                    m = g - w;
                    n = h - x;
                    y = m * m + n * n;
                }
                else {
                    let ac = t * t + u * u;
                    if (ac <= ab) {
                        m = i - w;
                        n = j - x;
                        y = m * m + n * n;
                    }
                    else {
                        let ad = ab / ac;
                        m = g + ad * t - w;
                        n = h + ad * u - x;
                        y = m * m + n * n;
                    }
                }
                if (y >= l) {
                    l = y;
                    k = v;
                }
            }
        }
        if (k != -1) {
            FastFlattener.h(a, b, c, d, k, f);
            a.add(k);
            FastFlattener.h(a, b, c, k, e, f);
        }
        return;
    }
    static i(a, b, c, d, e, f, g) {
        let h = b._inner[e];
        let i, j;
        i = h[c];
        j = h[d];
        while ((i != i) || (j != j) && e < f) {
            ++e;
            h = b._inner[e];
            i = h[c];
            j = h[d];
        }
        let k = b._inner[f];
        let l, m;
        l = k[c];
        m = k[d];
        while ((l != l) || (m != m) && e < f) {
            --f;
            k = b._inner[f];
            l = k[c];
            m = k[d];
        }
        if (e + 1 >= f) {
            return;
        }
        let n = -1;
        let o = g * g;
        let p;
        let q;
        p = l - i;
        q = m - j;
        let r = p * p + q * q;
        if (r == 0) {
            for (let s = e + 1; s < f; ++s) {
                let t = b._inner[s];
                let u, v;
                u = t[c];
                v = t[d];
                if ((u != u) || (v != v)) {
                    continue;
                }
                p = l - u;
                q = m - v;
                let w = p * p + q * q;
                if (w >= o) {
                    o = w;
                    n = s;
                }
            }
        }
        else {
            let x = l - i;
            let y = m - j;
            for (let z = e + 1; z < f; ++z) {
                let aa = b._inner[z];
                let ab, ac;
                ab = aa[c];
                ac = aa[d];
                if ((ab != ab) || (ac != ac)) {
                    continue;
                }
                let ad = NaN;
                let ae = ab - i;
                let af = ac - j;
                let ag = x * ae + y * af;
                if (ag <= 0) {
                    p = i - ab;
                    q = j - ac;
                    ad = p * p + q * q;
                }
                else {
                    let ah = x * x + y * y;
                    if (ah <= ag) {
                        p = l - ab;
                        q = m - ac;
                        ad = p * p + q * q;
                    }
                    else {
                        let ai = ag / ah;
                        p = i + ai * x - ab;
                        q = j + ai * y - ac;
                        ad = p * p + q * q;
                    }
                }
                if (ad >= o) {
                    o = ad;
                    n = z;
                }
            }
        }
        if (n != -1) {
            FastFlattener.i(a, b, c, d, e, n, g);
            a.add(n);
            FastFlattener.i(a, b, c, d, n, f, g);
        }
        return;
    }
}
FastFlattener.$t = markType(FastFlattener, 'FastFlattener');
//# sourceMappingURL=FastFlattener.js.map