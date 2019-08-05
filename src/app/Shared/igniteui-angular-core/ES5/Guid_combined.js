/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
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
var Guid = /** @class */ (function (_super) {
    tslib_1.__extends(Guid, _super);
    function Guid(a) {
        var _rest = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            _rest[_i - 1] = arguments[_i];
        }
        var _this = _super.call(this) || this;
        _this.ae = 0;
        _this.ac = 0;
        _this.ad = 0;
        _this.r = 0;
        _this.s = 0;
        _this.t = 0;
        _this.u = 0;
        _this.v = 0;
        _this.w = 0;
        _this.x = 0;
        _this.y = 0;
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0: break;
            case 1:
                {
                    var c = _rest[0];
                    _this.ae = (((c[3] << 24) | (c[2] << 16)) | (c[1] << 8)) | c[0];
                    _this.ac = ((c[5] << 8) | c[4]);
                    _this.ad = ((c[7] << 8) | c[6]);
                    _this.r = c[8];
                    _this.s = c[9];
                    _this.t = c[10];
                    _this.u = c[11];
                    _this.v = c[12];
                    _this.w = c[13];
                    _this.x = c[14];
                    _this.y = c[15];
                }
                break;
            case 2:
                {
                    var c = _rest[0];
                    var d = _rest[1];
                    var e = _rest[2];
                    var f = _rest[3];
                    var g = _rest[4];
                    var h = _rest[5];
                    var i = _rest[6];
                    var j = _rest[7];
                    var k = _rest[8];
                    var l = _rest[9];
                    var m = _rest[10];
                    _this.ae = c;
                    _this.ac = d;
                    _this.ad = e;
                    _this.r = f;
                    _this.s = g;
                    _this.t = h;
                    _this.u = i;
                    _this.v = j;
                    _this.w = k;
                    _this.x = l;
                    _this.y = m;
                }
                break;
            case 3:
                {
                    var c_1 = _rest[0];
                    if (c_1 == null) {
                        throw new ArgumentNullException(0, "g");
                    }
                    var d_1 = new Guid_GuidResult();
                    d_1.i(1);
                    if (!((function () { var e = Guid.n(c_1, 15, d_1); d_1 = e.p2; return e.ret; })())) {
                        throw d_1.a();
                    }
                    _this.ae = d_1.c.ae;
                    _this.ac = d_1.c.ac;
                    _this.ad = d_1.c.ad;
                    _this.r = d_1.c.r;
                    _this.s = d_1.c.s;
                    _this.t = d_1.c.t;
                    _this.u = d_1.c.u;
                    _this.v = d_1.c.v;
                    _this.w = d_1.c.w;
                    _this.x = d_1.c.x;
                    _this.y = d_1.c.y;
                }
                break;
        }
        return _this;
    }
    Guid.prototype.compareTo = function (a) {
        var b = this.ae - a.ae;
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
    };
    Guid.prototype.compareToObject = function (a) {
        if (typeCast(Guid.$, a) !== null) {
            return this.compareTo(a);
        }
        return 1;
    };
    Guid.prototype.equals = function (a) {
        return Guid.l_op_Equality(this, a);
    };
    Guid.newGuid = function () {
        return new Guid(3, (createGuid()));
    };
    Guid.prototype.toByteArray = function () {
        return [this.ae, (this.ae >> 8), (this.ae >> 16), (this.ae >> 24), this.ac, (this.ac >> 8), this.ad, (this.ad >> 8), this.r, this.s, this.t, this.u, this.v, this.w, this.x, this.y];
    };
    Guid.prototype.toString = function () {
        return this.toString1("D", null);
    };
    Guid.prototype.toString2 = function (a) {
        return this.toString1(a, null);
    };
    Guid.prototype.toString1 = function (a, b) {
        var c;
        if ((a == null) || (a.length == 0)) {
            a = "D";
        }
        var d = 0;
        var e = 38;
        var f = true;
        var g = false;
        if (a.length != 1) {
            throw new FormatException(0);
        }
        var h = a.charAt(0);
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
    };
    Guid.af = function (a, b, c, d) {
        return Guid.ag(a, b, c, d, false);
    };
    Guid.ag = function (a, b, c, d, e) {
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
    };
    Guid.z = function (a) {
        a &= 15;
        return ((a > 9) ? String.fromCharCode(((a - 10) + 97)) : String.fromCharCode((a + 48)));
    };
    Guid.tryParse = function (a, b) {
        var c = new Guid_GuidResult();
        c.i(0);
        if (((function () { var d = Guid.n(a, 15, c); c = d.p2; return d.ret; })())) {
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
    };
    Guid.n = function (a, b, c) {
        if (a == null) {
            c.k(2, "Format_GuidUnrecognized");
            return {
                ret: false,
                p2: c
            };
        }
        var d = a.trim();
        if (d.length == 0) {
            c.k(2, "Format_GuidUnrecognized");
            return {
                ret: false,
                p2: c
            };
        }
        var e = d.indexOf('-', 0) >= 0;
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
        var f = d.indexOf('{', 0) >= 0;
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
                    ret: ((function () { var g = Guid.o(d, c); c = g.p1; return g.ret; })()),
                    p2: c
                };
            }
            if (f) {
                return {
                    ret: ((function () { var g = Guid.p(d, c); c = g.p1; return g.ret; })()),
                    p2: c
                };
            }
            return {
                ret: ((function () { var g = Guid.q(d, c); c = g.p1; return g.ret; })()),
                p2: c
            };
        }
        catch (g) {
            var h = typeCast(IndexOutOfRangeException.$, g);
            if (h != null) {
                c.m(5, "Format_GuidUnrecognized", null, null, h);
                return {
                    ret: false,
                    p2: c
                };
            }
            var i = typeCast(ArgumentException.$, g);
            if (i != null) {
                c.m(5, "Format_GuidUnrecognized", null, null, i);
                return {
                    ret: false,
                    p2: c
                };
            }
            throw g;
        }
    };
    Guid.o = function (a, b) {
        var c;
        var d;
        var e;
        var f = 0;
        var g = 0;
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
        if (!((function () { var h = Guid.j(a, g, 8, 8192, c, b); g = h.p1; c = h.p4; b = h.p5; return h.ret; })())) {
            return {
                ret: false,
                p1: b
            };
        }
        b.c.ae = c;
        g++;
        if (!((function () { var h = Guid.j(a, g, 4, 8192, c, b); g = h.p1; c = h.p4; b = h.p5; return h.ret; })())) {
            return {
                ret: false,
                p1: b
            };
        }
        b.c.ac = c;
        g++;
        if (!((function () { var h = Guid.j(a, g, 4, 8192, c, b); g = h.p1; c = h.p4; b = h.p5; return h.ret; })())) {
            return {
                ret: false,
                p1: b
            };
        }
        b.c.ad = c;
        g++;
        if (!((function () { var h = Guid.j(a, g, 4, 8192, c, b); g = h.p1; c = h.p4; b = h.p5; return h.ret; })())) {
            return {
                ret: false,
                p1: b
            };
        }
        g++;
        f = g;
        if (!((function () { var h = Guid.j(a, g, 4, 8192, d, b); g = h.p1; d = h.p4; b = h.p5; return h.ret; })())) {
            return {
                ret: false,
                p1: b
            };
        }
        if (!((function () { var h = Guid.j(a, g, 8, 8192, e, b); g = h.p1; e = h.p4; b = h.p5; return h.ret; })())) {
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
    };
    Guid.ah = function (a) {
        var b = 0;
        var c = new Array(a.length);
        for (var d = 0; d < a.length; d++) {
            var e = a.charAt(d);
            if (!/\s/i.test(e)) {
                c[b++] = e;
            }
        }
        return stringCreateFromCharArraySlice(c, 0, b);
    };
    Guid.p = function (a, b) {
        var c = 0;
        var d = 0;
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
        if (!((function () { var e = Guid.i(a.substr(c, d), -1, 4096, b.c.ae, b); b.c.ae = e.p3; b = e.p4; return e.ret; })())) {
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
        if (!((function () { var e = Guid.k(a.substr(c, d), -1, 4096, b.c.ac, b); b.c.ac = e.p3; b = e.p4; return e.ret; })())) {
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
        if (!((function () { var e = Guid.k(a.substr(c, d), -1, 4096, b.c.ad, b); b.c.ad = e.p3; b = e.p4; return e.ret; })())) {
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
        var e = new Array(8);
        for (var f = 0; f < 8; f++) {
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
            var g = intSToU(parseInt32_2(a.substr(c, d), 515));
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
    };
    Guid.q = function (a, b) {
        var c;
        var d;
        var e;
        var f = 0;
        if (a.length != 32) {
            b.k(2, "Format_GuidInvLen");
            return {
                ret: false,
                p1: b
            };
        }
        for (var g = 0; g < a.length; g++) {
            var h = a.charAt(g);
            if ((h.charCodeAt(0) < '0'.charCodeAt(0)) || (h.charCodeAt(0) > '9'.charCodeAt(0))) {
                var i = h.toUpperCase();
                if ((i.charCodeAt(0) < 'A'.charCodeAt(0)) || (i.charCodeAt(0) > 'F'.charCodeAt(0))) {
                    b.k(2, "Format_GuidInvalidChar");
                    return {
                        ret: false,
                        p1: b
                    };
                }
            }
        }
        if (!((function () { var j = Guid.i(a.substr(f, 8), -1, 4096, b.c.ae, b); b.c.ae = j.p3; b = j.p4; return j.ret; })())) {
            return {
                ret: false,
                p1: b
            };
        }
        f += 8;
        if (!((function () { var j = Guid.k(a.substr(f, 4), -1, 4096, b.c.ac, b); b.c.ac = j.p3; b = j.p4; return j.ret; })())) {
            return {
                ret: false,
                p1: b
            };
        }
        f += 4;
        if (!((function () { var j = Guid.k(a.substr(f, 4), -1, 4096, b.c.ad, b); b.c.ad = j.p3; b = j.p4; return j.ret; })())) {
            return {
                ret: false,
                p1: b
            };
        }
        f += 4;
        if (!((function () { var j = Guid.i(a.substr(f, 4), -1, 4096, c, b); c = j.p3; b = j.p4; return j.ret; })())) {
            return {
                ret: false,
                p1: b
            };
        }
        f += 4;
        if (!((function () { var j = Guid.i(a.substr(f, 4), -1, f, d, b); d = j.p3; b = j.p4; return j.ret; })())) {
            return {
                ret: false,
                p1: b
            };
        }
        f += 4;
        if (!((function () { var j = Guid.i(a.substr(f, 8), -1, f, e, b); e = j.p3; b = j.p4; return j.ret; })())) {
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
    };
    Guid.k = function (a, b, c, d, e) {
        var f = 0;
        return {
            ret: ((function () { var g = Guid.l(a, f, b, c, d, e); f = g.p1; d = g.p4; e = g.p5; return g.ret; })()),
            p3: d,
            p4: e
        };
    };
    Guid.l = function (a, b, c, d, e, f) {
        var g;
        e = 0;
        var h = ((function () { var i = Guid.j(a, b, c, d, g, f); b = i.p1; g = i.p4; f = i.p5; return i.ret; })());
        e = g;
        return {
            ret: h,
            p1: b,
            p4: e,
            p5: f
        };
    };
    Guid.i = function (a, b, c, d, e) {
        var f = 0;
        return {
            ret: ((function () { var g = Guid.j(a, f, b, c, d, e); f = g.p1; d = g.p4; e = g.p5; return g.ret; })()),
            p3: d,
            p4: e
        };
    };
    Guid.j = function (a, b, c, d, e, f) {
        e = 0;
        var g = b;
        try {
            if (c == -1) {
                var h_1 = a.length - b;
                while (true) {
                    if (((function () { var i = tryParseInt32_2(a.substr(b, h_1), 515, CultureInfo.invariantCulture, e); e = i.p3; return i.ret; })())) {
                        break;
                    }
                    h_1--;
                }
                b += h_1;
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
    };
    Guid.b = function (a, b) {
        return (((a.length > (b + 1)) && (a.charAt(b) == '0')) && (a.charAt(b + 1).toLowerCase() == 'x'));
    };
    Guid.l_op_Inequality = function (a, b) {
        return !(Guid.l_op_Equality(a, b));
    };
    Guid.l_op_Inequality_Lifted = function (a, b) {
        if (!a.hasValue) {
            return b.hasValue;
        }
        else if (!b.hasValue) {
            return true;
        }
        return Guid.l_op_Inequality(a.value, b.value);
    };
    Guid.l_op_Equality = function (a, b) {
        return a.ae == b.ae && a.ac == b.ac && a.ad == b.ad && a.r == b.r && a.s == b.s && a.t == b.t && a.u == b.u && a.v == b.v && a.w == b.w && a.x == b.x && a.y == b.y;
    };
    Guid.l_op_Equality_Lifted = function (a, b) {
        if (!a.hasValue) {
            return !b.hasValue;
        }
        else if (!b.hasValue) {
            return false;
        }
        return Guid.l_op_Equality(a.value, b.value);
    };
    Guid.$t = markStruct(Guid, 'Guid', ValueType.$, [IFormattable_$type, IComparable_$type, IComparable$1_$type.specialize(-1), IEquatable$1_$type.specialize(-1)]).initSelfReferences();
    Guid.empty = new Guid(0);
    return Guid;
}(ValueType));
export { Guid };
/**
 * @hidden
 */
var Guid_GuidResult = /** @class */ (function (_super) {
    tslib_1.__extends(Guid_GuidResult, _super);
    function Guid_GuidResult() {
        var _this = _super.call(this) || this;
        _this.c = new Guid();
        _this.d = 0;
        _this.e = 0;
        _this.h = null;
        _this.f = null;
        _this.g = null;
        _this.b = null;
        return _this;
    }
    Guid_GuidResult.prototype.i = function (a) {
        this.c = Guid.empty;
        this.d = a;
    };
    Guid_GuidResult.prototype.j = function (a) {
        this.e = 4;
        this.b = a;
    };
    Guid_GuidResult.prototype.k = function (a, b) {
        this.m(a, b, null, null, null);
    };
    Guid_GuidResult.prototype.l = function (a, b, c) {
        this.m(a, b, c, null, null);
    };
    Guid_GuidResult.prototype.m = function (a, b, c, d, e) {
        this.e = a;
        this.h = b;
        this.f = c;
        this.g = d;
        this.b = e;
        if (this.d != 0) {
            throw this.a();
        }
    };
    Guid_GuidResult.prototype.a = function () {
        switch (this.e) {
            case 1: return new ArgumentNullException(0, this.g);
            case 2: return new FormatException(0);
            case 3: return new FormatException(0);
            case 4: return this.b;
            case 5: return new FormatException(2, "The format of the Guid was incorrect.", this.b);
        }
        return new FormatException(0);
    };
    Guid_GuidResult.$t = markStruct(Guid_GuidResult, 'Guid_GuidResult');
    return Guid_GuidResult;
}(ValueType));
export { Guid_GuidResult };
//# sourceMappingURL=Guid_combined.js.map