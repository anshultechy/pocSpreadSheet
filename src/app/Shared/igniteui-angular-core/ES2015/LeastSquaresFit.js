/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Numeric } from "./Numeric";
import { Number_$type, markType } from "./type";
import { Random } from "./Random";
import { List$1 } from "./List$1";
import { isNaN_, isInfinity } from "./number";
/**
 * @hidden
 */
export class LeastSquaresFit extends Numeric {
    constructor() {
        super();
    }
    static aa() {
        return LeastSquaresFit.t() && LeastSquaresFit.u() && LeastSquaresFit.s() && LeastSquaresFit.w() && LeastSquaresFit.x() && LeastSquaresFit.r() && LeastSquaresFit.y() && LeastSquaresFit.z();
    }
    static k(a, b, c) {
        let d = 0;
        let e = 0;
        let f = 0;
        let g = 0;
        let h = 0;
        for (let i = 0; i < a; ++i) {
            let j = b(i);
            let k = c(i);
            if (!isNaN_(j) && !isNaN_(k)) {
                d += k;
                e += j * j;
                f += j;
                g += j * k;
                ++h;
            }
        }
        if (h < 2) {
            return null;
        }
        let l = (d * e - f * g) / (h * e - f * f);
        let m = (h * g - f * d) / (h * e - f * f);
        return [l, m];
    }
    static ad(a, b) {
        if (a.length != 2) {
            return NaN;
        }
        return a[0] + a[1] * b;
    }
    static t() {
        let a = new Random(0);
        let b = new Array(2);
        for (let c = 0; c < b.length; ++c) {
            b[c] = 10 * a.nextDouble();
        }
        let d = new List$1(Number_$type, 0);
        let e = new List$1(Number_$type, 0);
        for (let f = -100; f < 100; ++f) {
            let g = f;
            let h = LeastSquaresFit.ad(b, g);
            if (!isNaN_(h)) {
                d.add(g);
                e.add(h);
            }
        }
        let i = LeastSquaresFit.k(d.count, (j) => d._inner[j], (j) => e._inner[j]);
        for (let j = 0; j < b.length; ++j) {
            if (Math.abs(b[j] - i[j]) > 0.0001) {
            }
        }
        return true;
    }
    static l(a, b, c) {
        let d = 0;
        let e = 0;
        let f = 0;
        let g = 0;
        let h = 0;
        for (let i = 0; i < a; ++i) {
            let j = b(i);
            let k = c(i);
            if (!isNaN_(j) && !isNaN_(k) && j > 0) {
                let l = Math.log(j);
                d += k * l;
                e += k;
                f += l;
                g += l * l;
                ++h;
            }
        }
        if (h < 2) {
            return null;
        }
        let m = (h * d - e * f) / (h * g - f * f);
        let n = (e - m * f) / h;
        return [n, m];
    }
    static ae(a, b) {
        if (a.length != 2 || b < 0 || isInfinity(b) || isNaN_(b)) {
            return NaN;
        }
        return a[0] + a[1] * Math.log(b);
    }
    static u() {
        let a = new Random(0);
        let b = new Array(2);
        for (let c = 0; c < b.length; ++c) {
            b[c] = 10 * a.nextDouble();
        }
        let d = new List$1(Number_$type, 0);
        let e = new List$1(Number_$type, 0);
        for (let f = 1; f < 100; ++f) {
            let g = f;
            let h = LeastSquaresFit.ae(b, g);
            if (!isNaN_(h)) {
                d.add(g);
                e.add(h);
            }
        }
        let i = LeastSquaresFit.l(d.count, (j) => d._inner[j], (j) => e._inner[j]);
        for (let j = 0; j < b.length; ++j) {
            if (Math.abs(b[j] - i[j]) > 0.0001) {
            }
        }
        return true;
    }
    static j(a, b, c) {
        let d = 0;
        let e = 0;
        let f = 0;
        let g = 0;
        let h = 0;
        let i = 0;
        for (let j = 0; j < a; ++j) {
            let k = b(j);
            let l = c(j);
            if (!isNaN_(k) && !isNaN_(l) && l > 0) {
                let m = Math.log(l);
                d += k * k * l;
                e += l * m;
                f += k * l;
                g += k * l * m;
                h += l;
                ++i;
            }
        }
        if (i < 2) {
            return null;
        }
        let n = (d * e - f * g) / (h * d - f * f);
        let o = (h * g - f * e) / (h * d - f * f);
        return [Math.exp(n), o];
    }
    static ac(a, b) {
        if (a.length != 2 || b < 0 || isInfinity(b) || isNaN_(b)) {
            return NaN;
        }
        return a[0] * Math.exp(a[1] * b);
    }
    static s() {
        let a = new Random(0);
        let b = new Array(2);
        for (let c = 0; c < b.length; ++c) {
            b[c] = 2 * a.nextDouble();
        }
        let d = new List$1(Number_$type, 0);
        let e = new List$1(Number_$type, 0);
        for (let f = 1; f < 100; ++f) {
            let g = f;
            let h = LeastSquaresFit.ac(b, g);
            if (!isNaN_(h)) {
                d.add(g);
                e.add(h);
            }
        }
        let i = LeastSquaresFit.j(d.count, (j) => d._inner[j], (j) => e._inner[j]);
        for (let j = 0; j < b.length; ++j) {
            if (Math.abs(b[j] - i[j]) > 0.0001) {
                return false;
            }
        }
        return true;
    }
    static n(a, b, c) {
        let d = 0;
        let e = 0;
        let f = 0;
        let g = 0;
        let h = 0;
        for (let i = 0; i < a; ++i) {
            let j = b(i);
            let k = c(i);
            if (!isNaN_(j) && !isNaN_(k) && j > 0 && k > 0) {
                let l = Math.log(b(i));
                let m = Math.log(c(i));
                d += l * m;
                e += l;
                f += m;
                g += l * l;
                ++h;
            }
        }
        if (h < 2) {
            return null;
        }
        let n = (h * d - e * f) / (h * g - e * e);
        let o = Math.exp((f - n * e) / h);
        return [o, n];
    }
    static ag(a, b) {
        if (a.length != 2 || b < 0 || isInfinity(b) || isNaN_(b)) {
            return NaN;
        }
        return a[0] * Math.pow(b, a[1]);
    }
    static w() {
        let a = new Random(0);
        let b = new Array(2);
        for (let c = 0; c < b.length; ++c) {
            b[c] = 10 * a.nextDouble();
        }
        let d = new List$1(Number_$type, 0);
        let e = new List$1(Number_$type, 0);
        for (let f = -100; f < 100; ++f) {
            d.add(f);
            e.add(LeastSquaresFit.ag(b, f));
        }
        let g = LeastSquaresFit.n(d.count, (h) => d._inner[h], (h) => e._inner[h]);
        for (let h = 0; h < b.length; ++h) {
            if (Math.abs(b[h] - g[h]) > 0.0001) {
                return false;
            }
        }
        return true;
    }
    static o(a, b, c) {
        return LeastSquaresFit.m(a, 2, b, c);
    }
    static ah(a, b) {
        return LeastSquaresFit.af(a, b);
    }
    static x() {
        return LeastSquaresFit.v(2);
    }
    static i(a, b, c) {
        return LeastSquaresFit.m(a, 3, b, c);
    }
    static ab(a, b) {
        return LeastSquaresFit.af(a, b);
    }
    static r() {
        return LeastSquaresFit.v(3);
    }
    static p(a, b, c) {
        return LeastSquaresFit.m(a, 4, b, c);
    }
    static ai(a, b) {
        return LeastSquaresFit.af(a, b);
    }
    static y() {
        return LeastSquaresFit.v(4);
    }
    static q(a, b, c) {
        return LeastSquaresFit.m(a, 5, b, c);
    }
    static aj(a, b) {
        return LeastSquaresFit.af(a, b);
    }
    static z() {
        return LeastSquaresFit.v(5);
    }
    static m(a, b, c, d) {
        let e = new Array(1 + 2 * b);
        for (let f = 0; f < e.length; f++) {
            e[f] = 0;
        }
        let g = ((() => {
            let $firstRank;
            let $ret = new Array($firstRank = b + 1);
            let $currRet = $ret;
            for (let $rankInit = 0; $rankInit < $firstRank; $rankInit++) {
                $currRet[$rankInit] = new Array(b + 1);
            }
            return $ret;
        })());
        let h = new Array(b + 1);
        for (let i = 0; i < h.length; i++) {
            h[i] = 0;
        }
        let j = 0;
        for (let k = 0; k < a; ++k) {
            let l = 1;
            let m = c(k);
            if (!isNaN_(m) && !isNaN_(d(k))) {
                for (let n = 0; n < e.length; ++n) {
                    e[n] += l;
                    l *= m;
                    ++j;
                }
            }
        }
        if (j < b) {
            return null;
        }
        for (let o = 0; o <= b; ++o) {
            for (let p = 0; p <= b; ++p) {
                g[o][p] = e[o + p];
            }
        }
        for (let q = 0; q < a; ++q) {
            let r = c(q);
            let s = d(q);
            if (!isNaN_(r) && !isNaN_(s)) {
                for (let t = 0; t <= b; ++t) {
                    h[t] += (Math.pow(r, t) * s);
                }
            }
        }
        return Numeric.d(g, h) ? h : null;
    }
    static af(a, b) {
        if (a.length < 1 || isInfinity(b) || isNaN_(b)) {
            return NaN;
        }
        let c = 0;
        for (let d = 0; d < a.length; ++d) {
            c += a[d] * Math.pow(b, d);
        }
        return c;
    }
    static v(a) {
        let b = new Random(0);
        let c = new Array(a + 1);
        for (let d = 0; d < c.length; ++d) {
            c[d] = 2 * b.nextDouble();
        }
        let e = new List$1(Number_$type, 0);
        let f = new List$1(Number_$type, 0);
        for (let g = -100; g < 100; ++g) {
            let h = g;
            let i = LeastSquaresFit.af(c, h);
            if (!isNaN_(i)) {
                e.add(h);
                f.add(i);
            }
        }
        let j = LeastSquaresFit.m(e.count, a, (k) => e._inner[k], (k) => f._inner[k]);
        for (let k = 0; k < a; ++k) {
            if (Math.abs(c[k] - j[k]) > 0.0001) {
                return false;
            }
        }
        return true;
    }
}
LeastSquaresFit.$t = markType(LeastSquaresFit, 'LeastSquaresFit', Numeric.$);
//# sourceMappingURL=LeastSquaresFit.js.map