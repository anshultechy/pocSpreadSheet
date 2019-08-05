// -*- Mode: C; tab-width: 8; indent-tabs-mode: t; c-basic-offset: 8 -*-
//
// System.Xml.XmlChar.cs
//
// Author:
//   Jason Diamond (jason@injektilo.org)
//
// (C) 2001 Jason Diamond  http://injektilo.org/
//
import * as tslib_1 from "tslib";
//
// Permission is hereby granted, free of charge, to any person obtaining
// a copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to
// permit persons to whom the Software is furnished to do so, subject to
// the following conditions:
// 
// The above copyright notice and this permission notice shall be
// included in all copies or substantial portions of the Software.
// 
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
// EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
// NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
// LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
// OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
// WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
//
import { Base, markType } from "./type";
import { ArgumentOutOfRangeException } from "./ArgumentOutOfRangeException";
import { intSToU, u32BitwiseAnd } from "./numberExtended";
/**
 * @hidden
 */
var XmlChar = /** @class */ (function (_super) {
    tslib_1.__extends(XmlChar, _super);
    function XmlChar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    XmlChar.p = function (a) {
        return a == 32 || a == 9 || a == 13 || a == 10;
    };
    XmlChar.q = function (a) {
        for (var b = 0; b < a.length; b++) {
            if (!XmlChar.p(a.charAt(b).charCodeAt(0))) {
                return false;
            }
        }
        return true;
    };
    XmlChar.u = function (a) {
        for (var b = 0; b < a.length; b++) {
            if (!XmlChar.p(a.charAt(b).charCodeAt(0))) {
                return b;
            }
        }
        return -1;
    };
    XmlChar.e = function (a) {
        if ((a >= 'a'.charCodeAt(0) && a <= 'z'.charCodeAt(0)) || (a >= 'A'.charCodeAt(0) && a <= 'Z'.charCodeAt(0))) {
            return true;
        }
        else if (intSToU(a) <= 65535) {
            return (u32BitwiseAnd(XmlChar.b[(XmlChar.a[a >> 8] << 3) + ((a & 255) >> 5)], (1 << (a & 31)))) != 0;
        }
        return false;
    };
    XmlChar.n = function (a) {
        return !XmlChar.f(a);
    };
    XmlChar.f = function (a) {
        switch (a) {
            case 9:
            case 10:
            case 13: return false;
        }
        if (a < 32) {
            return true;
        }
        if (a < 55296) {
            return false;
        }
        if (a < 57344) {
            return true;
        }
        if (a < 65534) {
            return false;
        }
        if (a < 65536) {
            return true;
        }
        if (a < 1114112) {
            return false;
        }
        else {
            return true;
        }
    };
    XmlChar.t = function (a, b) {
        for (var c = 0; c < a.length; c++) {
            if (XmlChar.f(a.charAt(c).charCodeAt(0))) {
                if (!b || c + 1 == a.length || a.charAt(c).charCodeAt(0) < '�'.charCodeAt(0) || a.charAt(c).charCodeAt(0) >= '�'.charCodeAt(0) || a.charAt(c + 1).charCodeAt(0) < '�'.charCodeAt(0) || a.charAt(c + 1).charCodeAt(0) >= ''.charCodeAt(0)) {
                    return c;
                }
                c++;
            }
        }
        return -1;
    };
    XmlChar.s = function (a, b, c, d) {
        var e = b + c;
        if (a.length < e) {
            throw new ArgumentOutOfRangeException(1, "length");
        }
        for (var f = b; f < e; f++) {
            if (XmlChar.f(a[f].charCodeAt(0))) {
                if (!d || f + 1 == e || a[f].charCodeAt(0) < '�'.charCodeAt(0) || a[f].charCodeAt(0) >= '�'.charCodeAt(0) || a[f + 1].charCodeAt(0) < '�'.charCodeAt(0) || a[f + 1].charCodeAt(0) >= ''.charCodeAt(0)) {
                    return f;
                }
                f++;
            }
        }
        return -1;
    };
    XmlChar.h = function (a) {
        if ((a >= 'a'.charCodeAt(0) && a <= 'z'.charCodeAt(0)) || (a >= 'A'.charCodeAt(0) && a <= 'Z'.charCodeAt(0))) {
            return true;
        }
        else if (intSToU(a) <= 65535) {
            return (u32BitwiseAnd(XmlChar.b[(XmlChar.c[a >> 8] << 3) + ((a & 255) >> 5)], (1 << (a & 31)))) != 0;
        }
        else {
            return false;
        }
    };
    XmlChar.j = function (a) {
        var b = false;
        if (a >= 0 && a <= 65535 && a != ':'.charCodeAt(0)) {
            b = (u32BitwiseAnd(XmlChar.b[(XmlChar.c[a >> 8] << 3) + ((a & 255) >> 5)], (1 << (a & 31)))) != 0;
        }
        return b;
    };
    XmlChar.g = function (a) {
        if (a.length == 0) {
            return false;
        }
        if (!XmlChar.e(a.charAt(0).charCodeAt(0))) {
            return false;
        }
        for (var b = 1; b < a.length; b++) {
            if (!XmlChar.h(a.charAt(b).charCodeAt(0))) {
                return false;
            }
        }
        return true;
    };
    XmlChar.i = function (a) {
        if (a.length == 0) {
            return false;
        }
        if (!XmlChar.e(a.charAt(0).charCodeAt(0))) {
            return false;
        }
        for (var b = 0; b < a.length; b++) {
            if (!XmlChar.j(a.charAt(b).charCodeAt(0))) {
                return false;
            }
        }
        return true;
    };
    XmlChar.k = function (a) {
        if (a.length == 0) {
            return false;
        }
        for (var b = 0; b < a.length; b++) {
            if (!XmlChar.h(a.charAt(b).charCodeAt(0))) {
                return false;
            }
        }
        return true;
    };
    XmlChar.m = function (a) {
        return (XmlChar.p(a) && a != '\t'.charCodeAt(0)) || ('a'.charCodeAt(0) <= a && a <= 'z'.charCodeAt(0)) || ('A'.charCodeAt(0) <= a && a <= 'Z'.charCodeAt(0)) || ('0'.charCodeAt(0) <= a && a <= '9'.charCodeAt(0)) || (("-'()+,./:=?;!*#@$_%").indexOf(String.fromCharCode(a)) >= 0);
    };
    XmlChar.l = function (a) {
        for (var b = 0; b < a.length; b++) {
            if (!XmlChar.m(a.charAt(b).charCodeAt(0))) {
                return false;
            }
        }
        return true;
    };
    XmlChar.o = function (a) {
        if (a != null) {
            var b = a.length;
            if (b > 0) {
                var c = a.charAt(0);
                if ((c.charCodeAt(0) >= 'A'.charCodeAt(0) && c.charCodeAt(0) <= 'Z'.charCodeAt(0)) || (c.charCodeAt(0) >= 'a'.charCodeAt(0) && c.charCodeAt(0) <= 'z'.charCodeAt(0))) {
                    for (var d = 1; d < b; d++) {
                        c = a.charAt(d);
                        if ((c.charCodeAt(0) < 'A'.charCodeAt(0) || c.charCodeAt(0) > 'Z'.charCodeAt(0)) && (c.charCodeAt(0) < 'a'.charCodeAt(0) || c.charCodeAt(0) > 'z'.charCodeAt(0)) && (c.charCodeAt(0) < '0'.charCodeAt(0) || c.charCodeAt(0) > '9'.charCodeAt(0)) && c != '.' && c != '_' && c != '-') {
                            return false;
                        }
                    }
                    return true;
                }
            }
        }
        return false;
    };
    XmlChar.r = function (a) {
        switch (a) {
            case "amp": return '&'.charCodeAt(0);
            case "lt": return '<'.charCodeAt(0);
            case "gt": return '>'.charCodeAt(0);
            case "quot": return '\"'.charCodeAt(0);
            case "apos": return '\''.charCodeAt(0);
            default: return -1;
        }
    };
    XmlChar.$t = markType(XmlChar, 'XmlChar');
    XmlChar.d = [' ', '\n', '\t', '\r'];
    XmlChar.a = [2, 3, 4, 5, 6, 7, 8, 0, 0, 9, 10, 11, 12, 13, 14, 15, 16, 17, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 18, 19, 0, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21, 22, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 23, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    XmlChar.c = [25, 3, 26, 27, 28, 29, 30, 0, 0, 31, 32, 33, 34, 35, 36, 37, 16, 17, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 18, 19, 38, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 39, 22, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 23, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    XmlChar.b = [0, 0, 0, 0, 0, 0, 0, 0, 4294967295, 4294967295, 4294967295, 4294967295, 4294967295, 4294967295, 4294967295, 4294967295, 0, 67108864, 2281701374, 134217726, 0, 0, 4286578687, 4286578687, 4294967295, 2146697215, 4294966782, 2147483647, 4294967295, 4294967295, 4294959119, 4231135231, 16777215, 0, 4294901760, 4294967295, 4294967295, 4160750079, 3, 0, 0, 0, 0, 0, 4294956864, 4294967291, 1417641983, 1048573, 4294959102, 4294967295, 3758030847, 4294967295, 4294901763, 4294967295, 4294908319, 54513663, 0, 4294836224, 41943039, 4294967294, 127, 0, 4294901760, 460799, 0, 134217726, 2046, 4294836224, 4294967295, 2097151999, 3112959, 96, 4294967264, 603979775, 4278190080, 3, 4294549472, 63307263, 2952790016, 196611, 4294543328, 57540095, 1577058304, 1835008, 4294684640, 602799615, 0, 1, 4294549472, 600702463, 2952790016, 3, 3594373088, 62899992, 0, 0, 4294828000, 66059775, 0, 3, 4294828000, 66059775, 1073741824, 3, 4294828000, 67108351, 0, 3, 0, 0, 0, 0, 4294967294, 884735, 63, 0, 4277151126, 537750702, 31, 0, 0, 0, 4294967039, 1023, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4294967295, 4294901823, 8388607, 514797, 1342177280, 2184269825, 2908843, 1073741824, 4118857984, 7, 33622016, 4294967295, 4294967295, 4294967295, 4294967295, 268435455, 4294967295, 4294967295, 67108863, 1061158911, 4294967295, 2868854591, 1073741823, 4294967295, 1608515583, 265232348, 534519807, 0, 19520, 0, 0, 7, 0, 0, 0, 128, 1022, 4294967294, 4294967295, 2097151, 4294967294, 4294967295, 134217727, 4294967264, 8191, 0, 0, 0, 0, 0, 0, 4294967295, 4294967295, 4294967295, 4294967295, 4294967295, 63, 0, 0, 4294967295, 4294967295, 4294967295, 4294967295, 4294967295, 15, 0, 0, 0, 134176768, 2281701374, 134217726, 0, 8388608, 4286578687, 4286578687, 16777215, 0, 4294901760, 4294967295, 4294967295, 4160750079, 196611, 0, 4294967295, 4294967295, 63, 3, 4294956992, 4294967291, 1417641983, 1048573, 4294959102, 4294967295, 3758030847, 4294967295, 4294901883, 4294967295, 4294908319, 54513663, 0, 4294836224, 41943039, 4294967294, 4294836351, 3154116603, 4294901782, 460799, 0, 134217726, 524287, 4294902783, 4294967295, 2097151999, 4293885951, 67059199, 4294967278, 4093640703, 4280172543, 65487, 4294549486, 3552968191, 2961193375, 262095, 4294543332, 3547201023, 1577073031, 2097088, 4294684654, 4092460543, 15295, 65473, 4294549486, 4090363391, 2965387663, 65475, 3594373100, 3284125464, 8404423, 65408, 4294828014, 3287285247, 6307295, 65475, 4294828012, 3287285247, 1080049119, 65475, 4294828012, 3288333823, 8404431, 65475, 0, 0, 0, 0, 4294967294, 134184959, 67076095, 0, 4277151126, 1006595246, 67059551, 0, 50331648, 3265266687, 4294967039, 4294837247, 4273934303, 50216959, 0, 0, 0, 0, 0, 0, 0, 0, 536805376, 2, 160, 4128766, 4294967294, 4294967295, 1713373183, 4294967294, 4294967295, 2013265919];
    return XmlChar;
}(Base));
export { XmlChar };
//# sourceMappingURL=XmlChar.js.map