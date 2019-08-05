/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { ValueType, IComparable_$type, IComparable$1_$type, IEquatable$1_$type, FormatException, typeCast, markStruct } from "./type";
import { IFormattable_$type } from "./IFormattable";
import { ArgumentNullException } from "./ArgumentNullException";
import { IndexOutOfRangeException } from "./IndexOutOfRangeException";
import { ArgumentException } from "./ArgumentException";
import { CultureInfo } from "./culture";
import { intSToU, parseInt32_2, tryParseInt32_2 } from "./numberExtended";
import { createGuid, stringCreateFromCharArraySlice, stringIsNullOrEmpty } from "./string";
/**
 * @hidden
 */
export class Guid extends ValueType {
    constructor(a, ..._rest) {
        super();
        this.ae = 0;
        this.ac = 0;
        this.ad = 0;
        this.r = 0;
        this.s = 0;
        this.t = 0;
        this.u = 0;
        this.v = 0;
        this.w = 0;
        this.x = 0;
        this.y = 0;
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0: break;
            case 1:
                {
                    let c = _rest[0];
                    this.ae = (((c[3] << 24) | (c[2] << 16)) | (c[1] << 8)) | c[0];
                    this.ac = ((c[5] << 8) | c[4]);
                    this.ad = ((c[7] << 8) | c[6]);
                    this.r = c[8];
                    this.s = c[9];
                    this.t = c[10];
                    this.u = c[11];
                    this.v = c[12];
                    this.w = c[13];
                    this.x = c[14];
                    this.y = c[15];
                }
                break;
            case 2:
                {
                    let c = _rest[0];
                    let d = _rest[1];
                    let e = _rest[2];
                    let f = _rest[3];
                    let g = _rest[4];
                    let h = _rest[5];
                    let i = _rest[6];
                    let j = _rest[7];
                    let k = _rest[8];
                    let l = _rest[9];
                    let m = _rest[10];
                    this.ae = c;
                    this.ac = d;
                    this.ad = e;
                    this.r = f;
                    this.s = g;
                    this.t = h;
                    this.u = i;
                    this.v = j;
                    this.w = k;
                    this.x = l;
                    this.y = m;
                }
                break;
            case 3:
                {
                    let c = _rest[0];
                    if (c == null) {
                        throw new ArgumentNullException(0, "g");
                    }
                    let d = new Guid_GuidResult();
                    d.i(1);
                    if (!((() => { let e = Guid.n(c, 15, d); d = e.p2; return e.ret; })())) {
                        throw d.a();
                    }
                    this.ae = d.c.ae;
                    this.ac = d.c.ac;
                    this.ad = d.c.ad;
                    this.r = d.c.r;
                    this.s = d.c.s;
                    this.t = d.c.t;
                    this.u = d.c.u;
                    this.v = d.c.v;
                    this.w = d.c.w;
                    this.x = d.c.x;
                    this.y = d.c.y;
                }
                break;
        }
    }
    compareTo(a) {
        let b = this.ae - a.ae;
        if (b != 0) {
            return b;
        }
        b = this.ac - a.ac;
        if (b != 0) {
            return b;
        }
        b = this.ad - a.ad;
        if (b != 0) {
            return b;
        }
        b = this.r - a.r;
        if (b != 0) {
            return b;
        }
        b = this.s - a.s;
        if (b != 0) {
            return b;
        }
        b = this.t - a.t;
        if (b != 0) {
            return b;
        }
        b = this.u - a.u;
        if (b != 0) {
            return b;
        }
        b = this.v - a.v;
        if (b != 0) {
            return b;
        }
        b = this.w - a.w;
        if (b != 0) {
            return b;
        }
        b = this.x - a.x;
        if (b != 0) {
            return b;
        }
        b = this.y - a.y;
        return b;
    }
    compareToObject(a) {
        if (typeCast(Guid.$, a) !== null) {
            return this.compareTo(a);
        }
        return 1;
    }
    equals(a) {
        return Guid.l_op_Equality(this, a);
    }
    static newGuid() {
        return new Guid(3, (createGuid()));
    }
    toByteArray() {
        return [this.ae, (this.ae >> 8), (this.ae >> 16), (this.ae >> 24), this.ac, (this.ac >> 8), this.ad, (this.ad >> 8), this.r, this.s, this.t, this.u, this.v, this.w, this.x, this.y];
    }
    toString() {
        return this.toString1("D", null);
    }
    toString2(a) {
        return this.toString1(a, null);
    }
    toString1(a, b) {
        let c;
        if ((a == null) || (a.length == 0)) {
            a = "D";
        }
        let d = 0;
        let e = 38;
        let f = true;
        let g = false;
        if (a.length != 1) {
            throw new FormatException(0);
        }
        let h = a.charAt(0);
        switch (h) {
            case 'D':
            case 'd':
                c = new Array(36);
                e = 36;
                break;
            case 'N':
            case 'n':
                c = new Array(32);
                e = 32;
                f = false;
                break;
            case 'B':
            case 'b':
                c = new Array(38);
                c[d++] = '{';
                c[37] = '}';
                break;
            case 'P':
            case 'p':
                c = new Array(38);
                c[d++] = '(';
                c[37] = ')';
                break;
            default:
                if ((h != 'X') && (h != 'x')) {
                    throw new FormatException(0);
                }
                c = new Array(68);
                c[d++] = '{';
                c[67] = '}';
                e = 68;
                f = false;
                g = true;
                break;
        }
        if (g) {
            c[d++] = '0';
            c[d++] = 'x';
            d = Guid.af(c, d, this.ae >> 24, this.ae >> 16);
            d = Guid.af(c, d, this.ae >> 8, this.ae);
            c[d++] = ',';
            c[d++] = '0';
            c[d++] = 'x';
            d = Guid.af(c, d, this.ac >> 8, this.ac);
            c[d++] = ',';
            c[d++] = '0';
            c[d++] = 'x';
            d = Guid.af(c, d, this.ad >> 8, this.ad);
            c[d++] = ',';
            c[d++] = '{';
            d = Guid.ag(c, d, this.r, this.s, true);
            c[d++] = ',';
            d = Guid.ag(c, d, this.t, this.u, true);
            c[d++] = ',';
            d = Guid.ag(c, d, this.v, this.w, true);
            c[d++] = ',';
            d = Guid.ag(c, d, this.x, this.y, true);
            c[d++] = '}';
        }
        else {
            d = Guid.af(c, d, this.ae >> 24, this.ae >> 16);
            d = Guid.af(c, d, this.ae >> 8, this.ae);
            if (f) {
                c[d++] = '-';
            }
            d = Guid.af(c, d, this.ac >> 8, this.ac);
            if (f) {
                c[d++] = '-';
            }
            d = Guid.af(c, d, this.ad >> 8, this.ad);
            if (f) {
                c[d++] = '-';
            }
            d = Guid.af(c, d, this.r, this.s);
            if (f) {
                c[d++] = '-';
            }
            d = Guid.af(c, d, this.t, this.u);
            d = Guid.af(c, d, this.v, this.w);
            d = Guid.af(c, d, this.x, this.y);
        }
        return stringCreateFromCharArraySlice(c, 0, e);
    }
    static af(a, b, c, d) {
        return Guid.ag(a, b, c, d, false);
    }
    static ag(a, b, c, d, e) {
        if (e) {
            a[b++] = '0';
            a[b++] = 'x';
        }
        a[b++] = Guid.z(c >> 4);
        a[b++] = Guid.z(c);
        if (e) {
            a[b++] = ',';
            a[b++] = '0';
            a[b++] = 'x';
        }
        a[b++] = Guid.z(d >> 4);
        a[b++] = Guid.z(d);
        return b;
    }
    static z(a) {
        a &= 15;
        return ((a > 9) ? String.fromCharCode(((a - 10) + 97)) : String.fromCharCode((a + 48)));
    }
    static tryParse(a, b) {
        let c = new Guid_GuidResult();
        c.i(0);
        if (((() => { let d = Guid.n(a, 15, c); c = d.p2; return d.ret; })())) {
            b = c.c;
            return {
                ret: true,
                p1: b
            };
        }
        b = Guid.empty;
        return {
            ret: false,
            p1: b
        };
    }
    static n(a, b, c) {
        if (a == null) {
            c.k(2, "Format_GuidUnrecognized");
            return {
                ret: false,
                p2: c
            };
        }
        let d = a.trim();
        if (d.length == 0) {
            c.k(2, "Format_GuidUnrecognized");
            return {
                ret: false,
                p2: c
            };
        }
        let e = d.indexOf('-', 0) >= 0;
        if (e) {
            if ((b & (64 | 4)) == 0) {
                c.k(2, "Format_GuidUnrecognized");
                return {
                    ret: false,
                    p2: c
                };
            }
        }
        else if ((b & 64) != 0) {
            c.k(2, "Format_GuidUnrecognized");
            return {
                ret: false,
                p2: c
            };
        }
        let f = d.indexOf('{', 0) >= 0;
        if (f) {
            if ((b & (32 | 2)) == 0) {
                c.k(2, "Format_GuidUnrecognized");
                return {
                    ret: false,
                    p2: c
                };
            }
        }
        else if ((b & 32) != 0) {
            c.k(2, "Format_GuidUnrecognized");
            return {
                ret: false,
                p2: c
            };
        }
        if (d.indexOf('(', 0) >= 0) {
            if ((b & (16 | 1)) == 0) {
                c.k(2, "Format_GuidUnrecognized");
                return {
                    ret: false,
                    p2: c
                };
            }
        }
        else if ((b & 16) != 0) {
            c.k(2, "Format_GuidUnrecognized");
            return {
                ret: false,
                p2: c
            };
        }
        try {
            if (e) {
                return {
                    ret: ((() => { let g = Guid.o(d, c); c = g.p1; return g.ret; })()),
                    p2: c
                };
            }
            if (f) {
                return {
                    ret: ((() => { let g = Guid.p(d, c); c = g.p1; return g.ret; })()),
                    p2: c
                };
            }
            return {
                ret: ((() => { let g = Guid.q(d, c); c = g.p1; return g.ret; })()),
                p2: c
            };
        }
        catch (g) {
            let h = typeCast(IndexOutOfRangeException.$, g);
            if (h != null) {
                c.m(5, "Format_GuidUnrecognized", null, null, h);
                return {
                    ret: false,
                    p2: c
                };
            }
            let i = typeCast(ArgumentException.$, g);
            if (i != null) {
                c.m(5, "Format_GuidUnrecognized", null, null, i);
                return {
                    ret: false,
                    p2: c
                };
            }
            throw g;
        }
    }
    static o(a, b) {
        let c;
        let d;
        let e;
        let f = 0;
        let g = 0;
        if (a.charAt(0) == '{') {
            if ((a.length != 38) || (a.charAt(37) != '}')) {
                b.k(2, "Format_GuidInvLen");
                return {
                    ret: false,
                    p1: b
                };
            }
            f = 1;
        }
        else if (a.charAt(0) == '(') {
            if ((a.length != 38) || (a.charAt(37) != ')')) {
                b.k(2, "Format_GuidInvLen");
                return {
                    ret: false,
                    p1: b
                };
            }
            f = 1;
        }
        else if (a.length != 36) {
            b.k(2, "Format_GuidInvLen");
            return {
                ret: false,
                p1: b
            };
        }
        if (((a.charAt(8 + f) != '-') || (a.charAt(13 + f) != '-')) || ((a.charAt(18 + f) != '-') || (a.charAt(23 + f) != '-'))) {
            b.k(2, "Format_GuidDashes");
            return {
                ret: false,
                p1: b
            };
        }
        g = f;
        if (!((() => { let h = Guid.j(a, g, 8, 8192, c, b); g = h.p1; c = h.p4; b = h.p5; return h.ret; })())) {
            return {
                ret: false,
                p1: b
            };
        }
        b.c.ae = c;
        g++;
        if (!((() => { let h = Guid.j(a, g, 4, 8192, c, b); g = h.p1; c = h.p4; b = h.p5; return h.ret; })())) {
            return {
                ret: false,
                p1: b
            };
        }
        b.c.ac = c;
        g++;
        if (!((() => { let h = Guid.j(a, g, 4, 8192, c, b); g = h.p1; c = h.p4; b = h.p5; return h.ret; })())) {
            return {
                ret: false,
                p1: b
            };
        }
        b.c.ad = c;
        g++;
        if (!((() => { let h = Guid.j(a, g, 4, 8192, c, b); g = h.p1; c = h.p4; b = h.p5; return h.ret; })())) {
            return {
                ret: false,
                p1: b
            };
        }
        g++;
        f = g;
        if (!((() => { let h = Guid.j(a, g, 4, 8192, d, b); g = h.p1; d = h.p4; b = h.p5; return h.ret; })())) {
            return {
                ret: false,
                p1: b
            };
        }
        if (!((() => { let h = Guid.j(a, g, 8, 8192, e, b); g = h.p1; e = h.p4; b = h.p5; return h.ret; })())) {
            return {
                ret: false,
                p1: b
            };
        }
        b.c.r = ((c >> 8) & 255);
        b.c.s = (c & 255);
        c = d;
        b.c.t = ((c >> 8) & 255);
        b.c.u = (c & 255);
        c = e;
        b.c.v = ((c >> 24) & 255);
        b.c.w = ((c >> 16) & 255);
        b.c.x = ((c >> 8) & 255);
        b.c.y = (c & 255);
        return {
            ret: true,
            p1: b
        };
    }
    static ah(a) {
        let b = 0;
        let c = new Array(a.length);
        for (let d = 0; d < a.length; d++) {
            let e = a.charAt(d);
            if (!/\s/i.test(e)) {
                c[b++] = e;
            }
        }
        return stringCreateFromCharArraySlice(c, 0, b);
    }
    static p(a, b) {
        let c = 0;
        let d = 0;
        a = Guid.ah(a);
        if (stringIsNullOrEmpty(a) || (a.charAt(0) != '{')) {
            b.k(2, "Format_GuidBrace");
            return {
                ret: false,
                p1: b
            };
        }
        if (!Guid.b(a, 1)) {
            b.l(2, "Format_GuidHexPrefix", "{0xdddddddd, etc}");
            return {
                ret: false,
                p1: b
            };
        }
        c = 3;
        d = a.indexOf(',', c) - c;
        if (d <= 0) {
            b.k(2, "Format_GuidComma");
            return {
                ret: false,
                p1: b
            };
        }
        if (!((() => { let e = Guid.i(a.substr(c, d), -1, 4096, b.c.ae, b); b.c.ae = e.p3; b = e.p4; return e.ret; })())) {
            return {
                ret: false,
                p1: b
            };
        }
        if (!Guid.b(a, (c + d) + 1)) {
            b.l(2, "Format_GuidHexPrefix", "{0xdddddddd, 0xdddd, etc}");
            return {
                ret: false,
                p1: b
            };
        }
        c = (c + d) + 3;
        d = a.indexOf(',', c) - c;
        if (d <= 0) {
            b.k(2, "Format_GuidComma");
            return {
                ret: false,
                p1: b
            };
        }
        if (!((() => { let e = Guid.k(a.substr(c, d), -1, 4096, b.c.ac, b); b.c.ac = e.p3; b = e.p4; return e.ret; })())) {
            return {
                ret: false,
                p1: b
            };
        }
        if (!Guid.b(a, (c + d) + 1)) {
            b.l(2, "Format_GuidHexPrefix", "{0xdddddddd, 0xdddd, 0xdddd, etc}");
            return {
                ret: false,
                p1: b
            };
        }
        c = (c + d) + 3;
        d = a.indexOf(',', c) - c;
        if (d <= 0) {
            b.k(2, "Format_GuidComma");
            return {
                ret: false,
                p1: b
            };
        }
        if (!((() => { let e = Guid.k(a.substr(c, d), -1, 4096, b.c.ad, b); b.c.ad = e.p3; b = e.p4; return e.ret; })())) {
            return {
                ret: false,
                p1: b
            };
        }
        if ((a.length <= ((c + d) + 1)) || (a.charAt((c + d) + 1) != '{')) {
            b.k(2, "Format_GuidBrace");
            return {
                ret: false,
                p1: b
            };
        }
        d++;
        let e = new Array(8);
        for (let f = 0; f < 8; f++) {
            if (!Guid.b(a, (c + d) + 1)) {
                b.l(2, "Format_GuidHexPrefix", "{... { ... 0xdd, ...}}");
                return {
                    ret: false,
                    p1: b
                };
            }
            c = (c + d) + 3;
            if (f < 7) {
                d = a.indexOf(',', c) - c;
                if (d <= 0) {
                    b.k(2, "Format_GuidComma");
                    return {
                        ret: false,
                        p1: b
                    };
                }
            }
            else {
                d = a.indexOf('}', c) - c;
                if (d <= 0) {
                    b.k(2, "Format_GuidBraceAfterLastNumber");
                    return {
                        ret: false,
                        p1: b
                    };
                }
            }
            let g = intSToU(parseInt32_2(a.substr(c, d), 515));
            if (g > 255) {
                b.k(2, "Overflow_Byte");
                return {
                    ret: false,
                    p1: b
                };
            }
            e[f] = g;
        }
        b.c.r = e[0];
        b.c.s = e[1];
        b.c.t = e[2];
        b.c.u = e[3];
        b.c.v = e[4];
        b.c.w = e[5];
        b.c.x = e[6];
        b.c.y = e[7];
        if ((((c + d) + 1) >= a.length) || (a.charAt((c + d) + 1) != '}')) {
            b.k(2, "Format_GuidEndBrace");
            return {
                ret: false,
                p1: b
            };
        }
        if (((c + d) + 1) != (a.length - 1)) {
            b.k(2, "Format_ExtraJunkAtEnd");
            return {
                ret: false,
                p1: b
            };
        }
        return {
            ret: true,
            p1: b
        };
    }
    static q(a, b) {
        let c;
        let d;
        let e;
        let f = 0;
        if (a.length != 32) {
            b.k(2, "Format_GuidInvLen");
            return {
                ret: false,
                p1: b
            };
        }
        for (let g = 0; g < a.length; g++) {
            let h = a.charAt(g);
            if ((h.charCodeAt(0) < '0'.charCodeAt(0)) || (h.charCodeAt(0) > '9'.charCodeAt(0))) {
                let i = h.toUpperCase();
                if ((i.charCodeAt(0) < 'A'.charCodeAt(0)) || (i.charCodeAt(0) > 'F'.charCodeAt(0))) {
                    b.k(2, "Format_GuidInvalidChar");
                    return {
                        ret: false,
                        p1: b
                    };
                }
            }
        }
        if (!((() => { let j = Guid.i(a.substr(f, 8), -1, 4096, b.c.ae, b); b.c.ae = j.p3; b = j.p4; return j.ret; })())) {
            return {
                ret: false,
                p1: b
            };
        }
        f += 8;
        if (!((() => { let j = Guid.k(a.substr(f, 4), -1, 4096, b.c.ac, b); b.c.ac = j.p3; b = j.p4; return j.ret; })())) {
            return {
                ret: false,
                p1: b
            };
        }
        f += 4;
        if (!((() => { let j = Guid.k(a.substr(f, 4), -1, 4096, b.c.ad, b); b.c.ad = j.p3; b = j.p4; return j.ret; })())) {
            return {
                ret: false,
                p1: b
            };
        }
        f += 4;
        if (!((() => { let j = Guid.i(a.substr(f, 4), -1, 4096, c, b); c = j.p3; b = j.p4; return j.ret; })())) {
            return {
                ret: false,
                p1: b
            };
        }
        f += 4;
        if (!((() => { let j = Guid.i(a.substr(f, 4), -1, f, d, b); d = j.p3; b = j.p4; return j.ret; })())) {
            return {
                ret: false,
                p1: b
            };
        }
        f += 4;
        if (!((() => { let j = Guid.i(a.substr(f, 8), -1, f, e, b); e = j.p3; b = j.p4; return j.ret; })())) {
            return {
                ret: false,
                p1: b
            };
        }
        b.c.r = ((c >> 8) & 255);
        b.c.s = (c & 255);
        c = d;
        b.c.t = ((c >> 8) & 255);
        b.c.u = (c & 255);
        c = e;
        b.c.v = ((c >> 24) & 255);
        b.c.w = ((c >> 16) & 255);
        b.c.x = ((c >> 8) & 255);
        b.c.y = (c & 255);
        return {
            ret: true,
            p1: b
        };
    }
    static k(a, b, c, d, e) {
        let f = 0;
        return {
            ret: ((() => { let g = Guid.l(a, f, b, c, d, e); f = g.p1; d = g.p4; e = g.p5; return g.ret; })()),
            p3: d,
            p4: e
        };
    }
    static l(a, b, c, d, e, f) {
        let g;
        e = 0;
        let h = ((() => { let i = Guid.j(a, b, c, d, g, f); b = i.p1; g = i.p4; f = i.p5; return i.ret; })());
        e = g;
        return {
            ret: h,
            p1: b,
            p4: e,
            p5: f
        };
    }
    static i(a, b, c, d, e) {
        let f = 0;
        return {
            ret: ((() => { let g = Guid.j(a, f, b, c, d, e); f = g.p1; d = g.p4; e = g.p5; return g.ret; })()),
            p3: d,
            p4: e
        };
    }
    static j(a, b, c, d, e, f) {
        e = 0;
        let g = b;
        try {
            if (c == -1) {
                let h = a.length - b;
                while (true) {
                    if (((() => { let i = tryParseInt32_2(a.substr(b, h), 515, CultureInfo.invariantCulture, e); e = i.p3; return i.ret; })())) {
                        break;
                    }
                    h--;
                }
                b += h;
            }
            else {
                e = parseInt32_2(a.substr(b, c), 515);
                b += c;
            }
        }
        catch (i) {
            if (f.d != 0) {
                throw i;
            }
            f.j(i);
            return {
                ret: false,
                p1: b,
                p4: e,
                p5: f
            };
        }
        if (c != -1 && (b - g) != c) {
            f.k(2, "Format_GuidInvalidChar");
            return {
                ret: false,
                p1: b,
                p4: e,
                p5: f
            };
        }
        return {
            ret: true,
            p1: b,
            p4: e,
            p5: f
        };
    }
    static b(a, b) {
        return (((a.length > (b + 1)) && (a.charAt(b) == '0')) && (a.charAt(b + 1).toLowerCase() == 'x'));
    }
    static l_op_Inequality(a, b) {
        return !(Guid.l_op_Equality(a, b));
    }
    static l_op_Inequality_Lifted(a, b) {
        if (!a.hasValue) {
            return b.hasValue;
        }
        else if (!b.hasValue) {
            return true;
        }
        return Guid.l_op_Inequality(a.value, b.value);
    }
    static l_op_Equality(a, b) {
        return a.ae == b.ae && a.ac == b.ac && a.ad == b.ad && a.r == b.r && a.s == b.s && a.t == b.t && a.u == b.u && a.v == b.v && a.w == b.w && a.x == b.x && a.y == b.y;
    }
    static l_op_Equality_Lifted(a, b) {
        if (!a.hasValue) {
            return !b.hasValue;
        }
        else if (!b.hasValue) {
            return false;
        }
        return Guid.l_op_Equality(a.value, b.value);
    }
}
Guid.$t = markStruct(Guid, 'Guid', ValueType.$, [IFormattable_$type, IComparable_$type, IComparable$1_$type.specialize(-1), IEquatable$1_$type.specialize(-1)]).initSelfReferences();
Guid.empty = new Guid(0);
/**
 * @hidden
 */
export class Guid_GuidResult extends ValueType {
    constructor() {
        super();
        this.c = new Guid();
        this.d = 0;
        this.e = 0;
        this.h = null;
        this.f = null;
        this.g = null;
        this.b = null;
    }
    i(a) {
        this.c = Guid.empty;
        this.d = a;
    }
    j(a) {
        this.e = 4;
        this.b = a;
    }
    k(a, b) {
        this.m(a, b, null, null, null);
    }
    l(a, b, c) {
        this.m(a, b, c, null, null);
    }
    m(a, b, c, d, e) {
        this.e = a;
        this.h = b;
        this.f = c;
        this.g = d;
        this.b = e;
        if (this.d != 0) {
            throw this.a();
        }
    }
    a() {
        switch (this.e) {
            case 1: return new ArgumentNullException(0, this.g);
            case 2: return new FormatException(0);
            case 3: return new FormatException(0);
            case 4: return this.b;
            case 5: return new FormatException(2, "The format of the Guid was incorrect.", this.b);
        }
        return new FormatException(0);
    }
}
Guid_GuidResult.$t = markStruct(Guid_GuidResult, 'Guid_GuidResult');
//# sourceMappingURL=Guid_combined.js.map