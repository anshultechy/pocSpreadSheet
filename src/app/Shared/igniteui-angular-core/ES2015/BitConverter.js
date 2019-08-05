/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, markType } from "./type";
import { NotImplementedException } from "./NotImplementedException";
import { truncate, intDivide, isNaN_ } from "./number";
import { u32BitwiseAnd, u32LS, u32BitwiseOr, intSToU } from "./numberExtended";
/**
 * @hidden
 */
export class BitConverter extends Base {
    static r(a) {
        throw new NotImplementedException(0);
    }
    static a(a) {
        return [a ? 1 : 0];
    }
    static b(a) {
        throw new NotImplementedException(0);
    }
    static c(a) {
        let b = 0;
        let c = 0;
        if (a == Number.POSITIVE_INFINITY) {
            b = 2146435072;
        }
        else if (a == Number.NEGATIVE_INFINITY) {
            b = 4293918720;
        }
        else if (a == 0) {
            if (1 / a == 1 / 0) {
                b = 0;
            }
            else {
                b = 2147483648;
            }
        }
        else if (isNaN_(a)) {
            b = 4294443008;
        }
        else {
            if (a < -0) {
                b = 2147483648;
                a = -a;
            }
            let d = Math.floor(Math.log(a) / Math.log(2));
            let e = truncate(Math.floor((a / Math.pow(2, d)) * Math.pow(2, 52)));
            c = (u32BitwiseAnd(e, 4294967295));
            e = intDivide(e, truncate(Math.pow(2, 32)));
            d += 1023;
            if (d >= 2047) {
                d = 2047;
                e = 0;
            }
            else if (d < 0) {
                d = 0;
            }
            b = u32BitwiseOr(b, u32LS(truncate(d), 20));
            b = u32BitwiseOr(b, u32BitwiseAnd(e, ~(-1 << 20)));
        }
        return [(c & 255), ((c >>> 8) & 255), ((c >>> 16) & 255), ((c >>> 24) & 255), (b & 255), ((b >>> 8) & 255), ((b >>> 16) & 255), ((b >>> 24) & 255)];
    }
    static g(a) {
        throw new NotImplementedException(0);
    }
    static e(a) {
        return BitConverter.i(intSToU(a));
    }
    static f(a) {
        return BitConverter.j(a);
    }
    static d(a) {
        return BitConverter.h(a);
    }
    static i(a) {
        return [(a & 255), ((a >>> 8) & 255), ((a >>> 16) & 255), ((a >>> 24) & 255)];
    }
    static j(a) {
        let b = (a | 0);
        let c = u32BitwiseOr(truncate((a / Math.pow(2, 32))), 0);
        return [(b & 255), ((b >>> 8) & 255), ((b >>> 16) & 255), ((b >>> 24) & 255), (c & 255), ((c >>> 8) & 255), ((c >>> 16) & 255), ((c >>> 24) & 255)];
    }
    static h(a) {
        return [(a & 255), ((a >>> 8) & 255)];
    }
    static n(a) {
        throw new NotImplementedException(0);
    }
    static l(a, b) {
        return a[b] != 0;
    }
    static m(a, b) {
        throw new NotImplementedException(0);
    }
    static o(a, b) {
        let c = (a[b + 7] & 1 << 7) >> 7;
        let d = (((a[b + 7] & 127) << 4) | (a[b + 6] & (15 << 4)) >> 4);
        if (d == 0) {
            return (c == 0) ? 0 : -0;
        }
        if (d == 2047) {
            if ((a[b + 6] & 8) != 0) {
                return NaN;
            }
            return (c == 0) ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY;
        }
        let e = Math.pow(2, d - 1023 - 52);
        let f = a[b] + a[b + 1] * Math.pow(2, 8 * 1) + a[b + 2] * Math.pow(2, 8 * 2) + a[b + 3] * Math.pow(2, 8 * 3) + a[b + 4] * Math.pow(2, 8 * 4) + a[b + 5] * Math.pow(2, 8 * 5) + (a[b + 6] & 15) * Math.pow(2, 8 * 6) + Math.pow(2, 52);
        return Math.pow(-1, c) * f * e;
    }
    static p(a, b) {
        let c = BitConverter.w(a, b);
        if (c > 32767) {
            c -= (65535 + 1);
        }
        return c;
    }
    static q(a, b) {
        return a[b] | (a[b + 1] << 8) | (a[b + 2] << 16) | (a[b + 3] << 24);
    }
    static s(a, b) {
        throw new NotImplementedException(0);
    }
    static t(a) {
        throw new NotImplementedException(0);
    }
    static u(a, b) {
        throw new NotImplementedException(0);
    }
    static v(a, b, c) {
        throw new NotImplementedException(0);
    }
    static w(a, b) {
        return (a[b] | (a[b + 1] << 8));
    }
    static x(a, b) {
        return intSToU(BitConverter.q(a, b));
    }
}
BitConverter.$t = markType(BitConverter, 'BitConverter');
BitConverter.k = false;
//# sourceMappingURL=BitConverter.js.map