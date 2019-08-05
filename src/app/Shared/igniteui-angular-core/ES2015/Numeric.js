/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, Number_$type, Point_$type, markType } from "./type";
import { List$1 } from "./List$1";
import { PathFigureCollection } from "./PathFigureCollection";
import { PathFigure } from "./PathFigure";
import { PolyBezierSegment } from "./PolyBezierSegment";
import { LineSegment } from "./LineSegment";
import { MathUtil } from "./MathUtil";
import { arrayGetLength } from "./array";
import { isNaN_ } from "./number";
/**
 * @hidden
 */
export class Numeric extends Base {
    constructor() {
        super();
    }
    static e(a, b, c, d, e) {
        let f;
        let g = a.count;
        let h = new Array(g);
        if (b._inner[0] == 0) {
            return false;
        }
        let i = b._inner[0];
        e._inner[0] = d._inner[0] / (i);
        for (f = 1; f < g; f++) {
            h[f] = c._inner[f - 1] / i;
            i = b._inner[f] - a._inner[f] * h[f];
            if (i == 0) {
                return false;
            }
            e._inner[f] = (d._inner[f] - a._inner[f] * e._inner[f - 1]) / i;
        }
        for (f = (g - 2); f >= 0; f--) {
            e._inner[f] -= h[f + 1] * e._inner[f + 1];
        }
        return true;
    }
    static d(a, b) {
        let c = arrayGetLength(a, 0);
        let d = new Array(c);
        let e = new Array(c);
        let f = new Array(c);
        for (let g = 0; g < c; g++) {
            f[g] = 0;
        }
        for (let h = 0; h < c; h++) {
            let i = 0;
            let j = 0;
            let k = 0;
            for (let l = 0; l < c; l++) {
                if (f[l] != 1) {
                    for (let m = 0; m < c; m++) {
                        if (f[m] == 0) {
                            if (Math.abs(a[l][m]) >= i) {
                                i = Math.abs(a[l][m]);
                                j = l;
                                k = m;
                            }
                        }
                    }
                }
            }
            ++(f[k]);
            if (j != k) {
                for (let n = 0; n < c; n++) {
                    let o = a[j][n];
                    a[j][n] = a[k][n];
                    a[k][n] = o;
                }
                {
                    let p = b[j];
                    b[j] = b[k];
                    b[k] = p;
                }
            }
            e[h] = j;
            d[h] = k;
            if (a[k][k] == 0) {
                return false;
            }
            let q = 1 / a[k][k];
            a[k][k] = 1;
            for (let r = 0; r < c; r++) {
                a[k][r] *= q;
            }
            b[k] *= q;
            for (let s = 0; s < c; s++) {
                if (s != k) {
                    let t = a[s][k];
                    a[s][k] = 0;
                    for (let u = 0; u < c; u++) {
                        a[s][u] -= a[k][u] * t;
                    }
                    b[s] -= b[k] * t;
                }
            }
        }
        for (let v = c - 1; v >= 0; v--) {
            if (e[v] != d[v]) {
                for (let w = 0; w < c; w++) {
                    let x = a[w][e[v]];
                    a[w][e[v]] = a[w][d[v]];
                    a[w][d[v]] = x;
                }
            }
        }
        return true;
    }
    static c(a, b, c, d, e) {
        let f = new List$1(Number_$type, 0);
        for (let g = 0; g < a; ++g) {
            while (g < a && (isNaN_(b(g)) || isNaN_(c(g)))) {
                f.add(NaN);
                ++g;
            }
            let h = g;
            while (g < a && !isNaN_(b(g)) && !isNaN_(c(g))) {
                ++g;
            }
            --g;
            if (g - h > 0) {
                f.o(Numeric.b(h, g - h + 1, b, c, d, e));
            }
            else {
                for (; h <= g; ++h) {
                    f.add(NaN);
                }
            }
        }
        return f.toArray();
    }
    static b(a, b, c, d, e, f) {
        return Numeric.a(b, (g) => c(g + a), (g) => d(g + a), e, f);
    }
    static a(a, b, c, d, e) {
        let f = new Array(a - 1);
        let g = new Array(a);
        g[0] = isNaN_(d) ? 0 : -0.5;
        f[0] = isNaN_(d) ? 0 : (3 / (b(1) - b(0))) * ((c(1) - c(0)) / (b(1) - b(0)) - d);
        for (let h = 1; h < a - 1; h++) {
            let i = (b(h) - b(h - 1)) / (b(h + 1) - b(h - 1));
            let j = i * g[h - 1] + 2;
            g[h] = (i - 1) / j;
            f[h] = (c(h + 1) - c(h)) / (b(h + 1) - b(h)) - (c(h) - c(h - 1)) / (b(h) - b(h - 1));
            f[h] = (6 * f[h] / (b(h + 1) - b(h - 1)) - i * f[h - 1]) / j;
        }
        let k = isNaN_(e) ? 0 : 0.5;
        let l = isNaN_(e) ? 0 : (3 / (b(a - 1) - b(a - 2))) * (e - (c(a - 1) - c(a - 2)) / (b(a - 1) - b(a - 2)));
        g[a - 1] = (l - k * f[a - 2]) / (k * g[a - 2] + 1);
        for (let m = a - 2; m >= 0; m--) {
            g[m] = g[m] * g[m + 1] + f[m];
        }
        return g;
    }
    f(a, b, c, d, e, f, g) {
        let h = d - b;
        let i = (d - a) / h;
        let j = (a - b) / h;
        return i * c + j * e + ((i * i * i - i) * f + (j * j * j - j) * g) * (h * h) / 6;
    }
    static h(a, b, c, d) {
        let e = new PathFigureCollection();
        let f = 0;
        let g = -1;
        let h = NaN;
        let i = NaN;
        for (let j = 0; j < a; j++) {
            h = b(j);
            i = c(j);
            if (isNaN_(h) || isNaN_(i)) {
                g = j - 1;
                if (g - f > 0) {
                    e.add(Numeric.g(f, g, b, c, d));
                }
                f = j + 1;
            }
        }
        if (!isNaN_(h) && !isNaN_(i)) {
            g = a - 1;
        }
        if (g - f > 0) {
            e.add(Numeric.g(f, g, b, c, d));
        }
        return e;
    }
    static g(a, b, c, d, e) {
        e = 0.5 * MathUtil.b(isNaN_(e) ? 0.5 : e, 0, 1);
        let f = new PathFigure();
        let g = b - a + 1;
        if (g < 2) {
            return f;
        }
        if (g == 2) {
            f._startPoint = { $type: Point_$type, x: c(a), y: d(a) };
            let h = ((() => {
                let $ret = new LineSegment(1);
                $ret.c = { $type: Point_$type, x: c(a + 1), y: d(a + 1) };
                return $ret;
            })());
            f._segments.add(h);
            return f;
        }
        let i = new PolyBezierSegment();
        let j = c(a);
        let k = d(a);
        let l = c(a + 1);
        let m = d(a + 1);
        while (l == j && m == k && a + 1 <= b) {
            a++;
            l = c(a + 1);
            m = d(a + 1);
        }
        let n = l - j;
        let o = m - k;
        let p = Math.sqrt(n * n + o * o);
        for (let q = a + 1; q < b; ++q) {
            let r = c(q);
            let s = d(q);
            if (r == j && s == k) {
                continue;
            }
            let t = c(q + 1) - c(q - 1);
            let u = d(q + 1) - d(q - 1);
            let v = t * t + u * u;
            if (v < 0.01) {
                t = -(d(q + 1) - d(q));
                u = c(q + 1) - c(q);
                v = t * t + u * u;
            }
            v = Math.sqrt(v);
            let w = e * Math.sqrt((r - j) * (r - j) + (s - k) * (s - k));
            if (v > 0.01) {
                i.b.add({ $type: Point_$type, x: j + n * w / p, y: k + o * w / p });
                i.b.add({ $type: Point_$type, x: r - t * w / v, y: s - u * w / v });
                i.b.add({ $type: Point_$type, x: r, y: s });
                j = r;
                k = s;
                n = t;
                o = u;
                p = v;
            }
        }
        {
            let x = b;
            let y = c(x);
            let z = d(x);
            if (!(y == j && z == k)) {
                let aa = c(x) - c(x - 1);
                let ab = d(x) - d(x - 1);
                let ac = aa * aa + ab * ab;
                let ad = e * Math.sqrt((y - j) * (y - j) + (z - k) * (z - k));
                i.b.add({ $type: Point_$type, x: j + n * ad / p, y: k + o * ad / p });
                i.b.add({ $type: Point_$type, x: y - aa * ad / ac, y: z - ab * ad / ac });
                i.b.add({ $type: Point_$type, x: y, y: z });
            }
        }
        f._startPoint = { $type: Point_$type, x: c(a), y: d(a) };
        f._segments.add(i);
        return f;
    }
}
Numeric.$t = markType(Numeric, 'Numeric');
//# sourceMappingURL=Numeric.js.map