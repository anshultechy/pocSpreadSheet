/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, fromEnum, toEnum, markType, getEnumerator } from "./type";
import { isNaN_ } from "./number";
/**
 * @hidden
 */
export class TrendCalculators extends Base {
    static *_g(a, b) {
        let c = new Array(b);
        let d = 0;
        for (d = 0; d < b; d++) {
            c[d] = 0;
        }
        let e = NaN;
        let f = NaN;
        let g = NaN;
        let h = NaN;
        d = 0;
        for (let i of fromEnum(a)) {
            if (!isNaN_(i)) {
                let j = d % b;
                if (d == 0) {
                    g = 1;
                    h = f = e = i;
                }
                else if (d < b) {
                    g += (d + 1);
                    e += i;
                    f += (d + 1) * i;
                    h = f / g;
                }
                else {
                    f = f + (b * i) - e;
                    h = f / g;
                    e = e + i - c[j];
                }
                c[j] = i;
                ++d;
            }
            yield h;
        }
    }
    static g(a, b) {
        return toEnum(() => TrendCalculators._g(a, b));
    }
    static *_b(a, b) {
        let c = 0;
        let d = NaN;
        let e = 2 / (1 + b);
        for (let f of fromEnum(a)) {
            if (!isNaN_(f)) {
                if (c < b) {
                    d = isNaN_(d) ? f : (d * c + f) / (c + 1);
                }
                else {
                    d = (f - d) * e + d;
                }
                ++c;
            }
            yield d;
        }
    }
    static b(a, b) {
        return toEnum(() => TrendCalculators._b(a, b));
    }
    static *_c(a, b) {
        let c = 0;
        let d = NaN;
        let e = 1 / b;
        for (let f of fromEnum(a)) {
            if (!isNaN_(f)) {
                if (c < b) {
                    d = isNaN_(d) ? f : (d * c + f) / (c + 1);
                }
                else {
                    d = (f - d) * e + d;
                }
                ++c;
            }
            yield d;
        }
    }
    static c(a, b) {
        return toEnum(() => TrendCalculators._c(a, b));
    }
    static *_a(a) {
        let b = NaN;
        let c = 0;
        for (let d of fromEnum(a)) {
            if (!isNaN_(d)) {
                b = isNaN_(b) ? d : (b * c + d) / (c + 1);
                ++c;
            }
            yield b;
        }
    }
    static a(a) {
        return toEnum(() => TrendCalculators._a(a));
    }
    static *_e(a, b) {
        let c = new Array(b);
        let d = 0;
        for (d = 0; d < b; d++) {
            c[d] = 0;
        }
        d = 0;
        let e = NaN;
        for (let f of fromEnum(a)) {
            if (!isNaN_(f)) {
                let g = f / b;
                let h = d % b;
                if (d < b) {
                    e = isNaN_(e) ? f : (e * d + f) / (d + 1);
                }
                else {
                    e = e + g - c[h];
                }
                c[h] = g;
                ++d;
            }
            yield e;
        }
    }
    static e(a, b) {
        return toEnum(() => TrendCalculators._e(a, b));
    }
    static *_d(a, b) {
        let c = new Array(b);
        let d = 0;
        for (d = 0; d < b; d++) {
            c[d] = 0;
        }
        d = 0;
        let e = NaN;
        for (let f of fromEnum(a)) {
            if (!isNaN_(f)) {
                let g = f;
                let h = d % b;
                if (d < b) {
                    e = isNaN_(e) ? g : e + g;
                }
                else {
                    e = e + g - c[h];
                }
                c[h] = g;
                ++d;
            }
            yield e;
        }
    }
    static d(a, b) {
        return toEnum(() => TrendCalculators._d(a, b));
    }
    static *_f(a, b) {
        let c = getEnumerator(TrendCalculators.e(a, b));
        let d = getEnumerator(a);
        let e = new Array(b);
        let f = 0;
        for (f = 0; f < b; f++) {
            e[f] = 0;
        }
        f = 0;
        while (d.moveNext() && c.moveNext()) {
            e[(f++) % b] = d.current;
            let g = 0;
            if (f < b) {
                let h = 0;
                for (let i = 0; i < f; i++) {
                    let j = (c.current - e[i]);
                    g += j * j;
                    h++;
                }
                yield Math.sqrt(g / h);
            }
            else {
                for (let k = 0; k < b; ++k) {
                    let l = (c.current - e[k]);
                    g += l * l;
                }
                yield Math.sqrt(g / b);
            }
        }
    }
    static f(a, b) {
        return toEnum(() => TrendCalculators._f(a, b));
    }
}
TrendCalculators.$t = markType(TrendCalculators, 'TrendCalculators');
//# sourceMappingURL=TrendCalculators.js.map