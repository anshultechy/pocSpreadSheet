//
// System.Xml.XmlConvert
//
// Authors:
//      Dwivedi, Ajay kumar (Adwiv@Yahoo.com)
//	Gonzalo Paniagua Javier (gonzalo@ximian.com)
//      Alan Tam Siu Lung (Tam@SiuLung.com)
//	Atsushi Enomoto (ginga@kit.hi-ho.ne.jp)
//
// (C) 2002 Ximian, Inc (http://www.ximian.com)
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
import { Base, FormatException, markType } from "./type";
import { CultureInfo } from "./culture";
import { XmlChar } from "./XmlChar";
import { StringBuilder } from "./StringBuilder";
import { XmlException } from "./XmlException";
import { StringWriter } from "./StringWriter";
import { ArgumentNullException } from "./ArgumentNullException";
import { ArgumentOutOfRangeException } from "./ArgumentOutOfRangeException";
import { parseInt32_2, parseUInt8_2, parseNumber, parseNumber1, parseInt16_2, parseInt64_2, parseInt8_2, numberToString, parseInt32_1, parseUInt16_2, parseUInt32_2, parseUInt64_2 } from "./numberExtended";
import { intDivide, isNegativeInfinity, isPositiveInfinity, isNaN_ } from "./number";
import { stringReplace, stringEmpty, stringToCharArray } from "./string";
import { trim, stringCompareOrdinal } from "./stringExtended";
import { ConvertUtil } from "./convertUtil";
import { timeSpanTicks, timeSpanNegate, timeSpanDays, timeSpanHours, timeSpanMinutes, timeSpanSeconds, timeSpanMilliseconds, timeSpanInit3, timeSpanFromTicks } from "./timespan";
import { dateToStringFormat } from "./dateExtended";
/**
 * @hidden
 */
var XmlConvert = /** @class */ (function (_super) {
    tslib_1.__extends(XmlConvert, _super);
    function XmlConvert() {
        return _super.call(this) || this;
    }
    XmlConvert.ap = function (a) {
        if (a == null || a.length < 6) {
            return a;
        }
        var b = '\uffff';
        try {
            b = String.fromCharCode(parseInt32_2(a.substr(1, 4), 515, CultureInfo.invariantCulture));
        }
        catch (c) {
            return a.charAt(0) + XmlConvert.s(a.substr(1));
        }
        if (a.length == 6) {
            return b.toString();
        }
        return b + XmlConvert.s(a.substr(6));
    };
    XmlConvert.s = function (a) {
        if (a == null || a.length == 0) {
            return a;
        }
        var b = a.indexOf('_');
        if (b == -1 || b + 6 >= a.length) {
            return a;
        }
        if ((a.charAt(b + 1) != 'X' && a.charAt(b + 1) != 'x') || a.charAt(b + 6) != '_') {
            return a.charAt(0) + XmlConvert.s(a.substr(1));
        }
        return a.substr(0, b) + XmlConvert.ap(a.substr(b + 1));
    };
    XmlConvert.u = function (a) {
        if (a == null) {
            return a;
        }
        var b = XmlConvert.v(a);
        var c = b.indexOf(':');
        if (c == -1) {
            return b;
        }
        return stringReplace(b, ":", "_x003A_");
    };
    XmlConvert.c = function (a, b) {
        if (a == ':') {
            return false;
        }
        if (b) {
            return !XmlChar.e(a.charCodeAt(0));
        }
        else {
            return !XmlChar.h(a.charCodeAt(0));
        }
    };
    XmlConvert.w = function (a, b) {
        if (a == null || a.length == 0) {
            return a;
        }
        var c = new StringBuilder(0);
        var d = a.length;
        for (var e = 0; e < d; e++) {
            var f = a.charAt(e);
            if (XmlConvert.c(f, e == 0 && !b)) {
                c.q("_x{0:X4}_", f.charCodeAt(0));
            }
            else if (f == '_' && e + 6 < d && a.charAt(e + 1) == 'x' && a.charAt(e + 6) == '_') {
                c.l("_x005F_");
            }
            else {
                c.h(f);
            }
        }
        return c.toString();
    };
    XmlConvert.v = function (a) {
        return XmlConvert.w(a, false);
    };
    XmlConvert.x = function (a) {
        if (a == stringEmpty()) {
            throw new XmlException(3, "Invalid NmToken: ''");
        }
        return XmlConvert.w(a, true);
    };
    XmlConvert.d = function (a) {
        a = trim.apply(void 0, tslib_1.__spread([a], XmlChar.d));
        switch (a) {
            case "1": return true;
            case "true": return true;
            case "0": return false;
            case "false": return false;
            default: throw new FormatException(1, a + " is not a valid boolean value");
        }
    };
    XmlConvert.y = function (a) {
        var b = new StringWriter(0);
        XmlConvert.ay(a, 0, a.length, b);
        return b.toString();
    };
    XmlConvert.ay = function (a, b, c, d) {
        if (a == null) {
            throw new ArgumentNullException(0, "buffer");
        }
        if (b < 0) {
            throw new ArgumentOutOfRangeException(3, "index", b, "index must be non negative integer.");
        }
        if (c < 0) {
            throw new ArgumentOutOfRangeException(3, "count", c, "count must be non negative integer.");
        }
        if (a.length < b + c) {
            throw new ArgumentOutOfRangeException(1, "index and count must be smaller than the length of the buffer.");
        }
        var e = b + c;
        for (var f = b; f < e; f++) {
            var g = a[f];
            var h = g >> 4;
            var i = g & 15;
            if (h > 9) {
                d.o(String.fromCharCode((h + 55)));
            }
            else {
                d.o(String.fromCharCode((h + 48)));
            }
            if (i > 9) {
                d.o(String.fromCharCode((i + 55)));
            }
            else {
                d.o(String.fromCharCode((i + 48)));
            }
        }
    };
    XmlConvert.f = function (a) {
        return parseUInt8_2(a, 7, CultureInfo.invariantCulture);
    };
    XmlConvert.g = function (a) {
        return ConvertUtil.toChar(a);
    };
    XmlConvert.h = function (a) {
        return parseNumber(a, CultureInfo.invariantCulture);
    };
    XmlConvert.i = function (a) {
        if (a == null) {
            throw new ArgumentNullException(1);
        }
        var b = XmlConvert.r(a);
        if (b != 0) {
            return b;
        }
        return parseNumber1(a, 423, CultureInfo.invariantCulture);
    };
    XmlConvert.r = function (a) {
        var b = 0;
        while (b < a.length && /\s/i.test(a.charAt(b))) {
            b++;
        }
        if (b == a.length) {
            throw new FormatException(0);
        }
        var c = a.length - 1;
        while (/\s/i.test(a.charAt(c))) {
            c--;
        }
        if (XmlConvert.e("NaN", a, b, c)) {
            return NaN;
        }
        if (XmlConvert.e("INF", a, b, c)) {
            return Number.POSITIVE_INFINITY;
        }
        if (XmlConvert.e("-INF", a, b, c)) {
            return Number.NEGATIVE_INFINITY;
        }
        if (XmlConvert.e("Infinity", a, b, c)) {
            return Number.POSITIVE_INFINITY;
        }
        if (XmlConvert.e("-Infinity", a, b, c)) {
            return Number.NEGATIVE_INFINITY;
        }
        return 0;
    };
    XmlConvert.e = function (a, b, c, d) {
        return d - c + 1 == a.length && stringCompareOrdinal(a, 0, b, c, a.length) == 0;
    };
    XmlConvert.l = function (a) {
        return parseInt16_2(a, 7, CultureInfo.invariantCulture);
    };
    XmlConvert.n = function (a) {
        return parseInt32_2(a, 7, CultureInfo.invariantCulture);
    };
    XmlConvert.o = function (a) {
        return parseInt64_2(a, 7, CultureInfo.invariantCulture);
    };
    XmlConvert.p = function (a) {
        return parseInt8_2(a, 7, CultureInfo.invariantCulture);
    };
    XmlConvert.q = function (a) {
        if (a == null) {
            throw new ArgumentNullException(1);
        }
        var b = XmlConvert.r(a);
        if (b != 0) {
            return b;
        }
        return parseNumber1(a, 423, CultureInfo.invariantCulture);
    };
    XmlConvert.ah = function (a) {
        return a.toString();
    };
    XmlConvert.ag = function (a) {
        return a.toString();
    };
    XmlConvert.aa = function (a) {
        return a.toString();
    };
    XmlConvert.ai = function (a) {
        return a.toString();
    };
    XmlConvert.ab = function (a) {
        return ConvertUtil.toString1(a, CultureInfo.invariantCulture);
    };
    XmlConvert.z = function (a) {
        if (a) {
            return "true";
        }
        return "false";
    };
    XmlConvert.aj = function (a) {
        return a.toString();
    };
    XmlConvert.ae = function (a) {
        return numberToString(a, CultureInfo.invariantCulture);
    };
    XmlConvert.ao = function (a) {
        return a.toString();
    };
    XmlConvert.al = function (a) {
        if (a == (0)) {
            return "PT0S";
        }
        var b = new StringBuilder(0);
        if (timeSpanTicks(a) < 0) {
            if (a == (-9007199254740991)) {
                return "-P10675199DT2H48M5.4775808S";
            }
            b.h('-');
            a = timeSpanNegate(a);
        }
        b.h('P');
        if (timeSpanDays(a) > 0) {
            b.j(timeSpanDays(a)).h('D');
        }
        var c = timeSpanTicks(a) % (10000);
        if (timeSpanDays(a) > 0 || timeSpanHours(a) > 0 || timeSpanMinutes(a) > 0 || timeSpanSeconds(a) > 0 || timeSpanMilliseconds(a) > 0 || c > 0) {
            b.h('T');
            if (timeSpanHours(a) > 0) {
                b.j(timeSpanHours(a)).h('H');
            }
            if (timeSpanMinutes(a) > 0) {
                b.j(timeSpanMinutes(a)).h('M');
            }
            if (timeSpanSeconds(a) > 0 || timeSpanMilliseconds(a) > 0 || c > 0) {
                b.j(timeSpanSeconds(a));
                var d = true;
                if (c > 0) {
                    b.h('.').q("{0:0000000}", timeSpanTicks(a) % (10000000));
                }
                else if (timeSpanMilliseconds(a) > 0) {
                    b.h('.').q("{0:000}", timeSpanMilliseconds(a));
                }
                else {
                    d = false;
                }
                if (d) {
                    while (b.item(b.c - 1) == '0') {
                        b.y(b.c - 1, 1);
                    }
                }
                b.h('S');
            }
        }
        return b.toString();
    };
    XmlConvert.af = function (a) {
        if (isNegativeInfinity(a)) {
            return "-INF";
        }
        if (isPositiveInfinity(a)) {
            return "INF";
        }
        if (isNaN_(a)) {
            return "NaN";
        }
        return a.toString();
    };
    XmlConvert.ak = function (a) {
        if (isNegativeInfinity(a)) {
            return "-INF";
        }
        if (isPositiveInfinity(a)) {
            return "INF";
        }
        if (isNaN_(a)) {
            return "NaN";
        }
        return a.toString();
    };
    XmlConvert.an = function (a) {
        return a.toString();
    };
    XmlConvert.am = function (a) {
        return a.toString();
    };
    XmlConvert.ac = function (a) {
        return dateToStringFormat(a, "yyyy-MM-ddTHH:mm:ss.fffffffzzz", CultureInfo.invariantCulture);
    };
    XmlConvert.ad = function (a, b) {
        return dateToStringFormat(a, b, CultureInfo.invariantCulture);
    };
    XmlConvert.au = function (a) {
        a = trim.apply(void 0, tslib_1.__spread([a], XmlChar.d));
        if (a.length == 0) {
            throw new FormatException(1, "Invalid format string for duration schema datatype.");
        }
        var b = 0;
        if (a.charAt(0) == '-') {
            b = 1;
        }
        var c = (b == 1);
        if (a.charAt(b) != 'P') {
            throw new FormatException(1, "Invalid format string for duration schema datatype.");
        }
        b++;
        var d = 0;
        var e = 0;
        var f = false;
        var g = 0;
        var h = 0;
        var i = 0;
        var j = 0;
        var k = 0;
        var l = false;
        var m = b;
        while (m < a.length) {
            if (a.charAt(m) == 'T') {
                f = true;
                d = 4;
                m++;
                b = m;
                continue;
            }
            for (; m < a.length; m++) {
                if (a.charAt(m).charCodeAt(0) < '0'.charCodeAt(0) || '9'.charCodeAt(0) < a.charAt(m).charCodeAt(0)) {
                    break;
                }
            }
            if (d == 7) {
                k = m - b;
            }
            var n = parseInt32_1(a.substr(b, m - b), CultureInfo.invariantCulture);
            if (d == 7) {
                for (; k > 7; k--) {
                    n = intDivide(n, 10);
                }
                for (; k < 7; k++) {
                    n *= 10;
                }
            }
            switch (a.charAt(m)) {
                case 'Y':
                    e += n * 365;
                    if (d > 0) {
                        l = true;
                    }
                    else {
                        d = 1;
                    }
                    break;
                case 'M':
                    if (d < 2) {
                        e += 365 * (intDivide(n, 12)) + 30 * (n % 12);
                        d = 2;
                    }
                    else if (f && d < 6) {
                        h = n;
                        d = 6;
                    }
                    else {
                        l = true;
                    }
                    break;
                case 'D':
                    e += n;
                    if (d > 2) {
                        l = true;
                    }
                    else {
                        d = 3;
                    }
                    break;
                case 'H':
                    g = n;
                    if (!f || d > 4) {
                        l = true;
                    }
                    else {
                        d = 5;
                    }
                    break;
                case 'S':
                    if (d == 7) {
                        j = n;
                    }
                    else {
                        i = n;
                    }
                    if (!f || d > 7) {
                        l = true;
                    }
                    else {
                        d = 8;
                    }
                    break;
                case '.':
                    if (d > 7) {
                        l = true;
                    }
                    i = n;
                    d = 7;
                    break;
                default:
                    l = true;
                    break;
            }
            if (l) {
                break;
            }
            ++m;
            b = m;
        }
        if (l) {
            throw new FormatException(1, "Invalid format string for duration schema datatype.");
        }
        var o = timeSpanInit3(e, g, h, i);
        if (c) {
            return timeSpanFromTicks(-(timeSpanTicks(o) + j));
        }
        else {
            return timeSpanFromTicks(timeSpanTicks(o) + j);
        }
    };
    XmlConvert.av = function (a) {
        return parseUInt16_2(a, 7, CultureInfo.invariantCulture);
    };
    XmlConvert.aw = function (a) {
        return parseUInt32_2(a, 7, CultureInfo.invariantCulture);
    };
    XmlConvert.ax = function (a) {
        return parseUInt64_2(a, 7, CultureInfo.invariantCulture);
    };
    XmlConvert.aq = function (a) {
        if (a == null || a.length == 0) {
            throw new ArgumentNullException(0, "name");
        }
        if (!XmlChar.g(a)) {
            throw new XmlException(3, "'" + a + "' is not a valid XML Name");
        }
        return a;
    };
    XmlConvert.ar = function (a) {
        if (a == null || a.length == 0) {
            throw new ArgumentNullException(0, "ncname");
        }
        if (!XmlChar.i(a)) {
            throw new XmlException(3, "'" + a + "' is not a valid XML NCName");
        }
        return a;
    };
    XmlConvert.at = function (a) {
        if (a == null) {
            throw new ArgumentNullException(0, "name");
        }
        if (a.length == 0) {
            return a;
        }
        if (XmlChar.p(a.charAt(0).charCodeAt(0)) || XmlChar.p(a.charAt(a.length - 1).charCodeAt(0))) {
            throw new XmlException(3, "Whitespace characters (#xA, #xD, #x9, #x20) are not allowed as leading or trailing whitespaces of xs:token.");
        }
        for (var b = 0; b < a.length; b++) {
            if (XmlChar.p(a.charAt(b).charCodeAt(0)) && a.charAt(b) != ' ') {
                throw new XmlException(3, "Either #xA, #xD or #x9 are not allowed inside xs:token.");
            }
        }
        return a;
    };
    XmlConvert.as = function (a) {
        if (a == null) {
            throw new ArgumentNullException(0, "name");
        }
        if (!XmlChar.k(a)) {
            throw new XmlException(3, "'" + a + "' is not a valid XML NMTOKEN");
        }
        return a;
    };
    XmlConvert.b = function (a) {
        var b = stringToCharArray(a);
        var c = new Array(intDivide(b.length, 2) + b.length % 2);
        XmlConvert.m(b, 0, b.length, c);
        return c;
    };
    XmlConvert.m = function (a, b, c, d) {
        var e = b;
        for (var f = 0; f < c - 1; f += 2) {
            d[e] = (a[f].charCodeAt(0) > '9'.charCodeAt(0) ? (a[f].charCodeAt(0) - 'A'.charCodeAt(0) + 10) : (a[f].charCodeAt(0) - '0'.charCodeAt(0)));
            d[e] <<= 4;
            d[e] += a[f + 1].charCodeAt(0) > '9'.charCodeAt(0) ? (a[f + 1].charCodeAt(0) - 'A'.charCodeAt(0) + 10) : (a[f + 1].charCodeAt(0) - '0'.charCodeAt(0));
            e++;
        }
        if (c % 2 != 0) {
            d[e++] = ((a[c - 1].charCodeAt(0) > '9'.charCodeAt(0) ? (a[c - 1].charCodeAt(0) - 'A'.charCodeAt(0) + 10) : (a[c - 1].charCodeAt(0) - '0'.charCodeAt(0))) << 4);
        }
        return e - b;
    };
    XmlConvert.$t = markType(XmlConvert, 'XmlConvert');
    XmlConvert.a = ["yyyy-MM-ddTHH:mm:sszzz", "yyyy-MM-ddTHH:mm:ss.fzzz", "yyyy-MM-ddTHH:mm:ss.ffzzz", "yyyy-MM-ddTHH:mm:ss.fffzzz", "yyyy-MM-ddTHH:mm:ss.ffffzzz", "yyyy-MM-ddTHH:mm:ss.fffffzzz", "yyyy-MM-ddTHH:mm:ss.ffffffzzz", "yyyy-MM-ddTHH:mm:ss.fffffffzzz", "yyyy-MM-ddTHH:mm:ssZ", "yyyy-MM-ddTHH:mm:ss.fZ", "yyyy-MM-ddTHH:mm:ss.ffZ", "yyyy-MM-ddTHH:mm:ss.fffZ", "yyyy-MM-ddTHH:mm:ss.ffffZ", "yyyy-MM-ddTHH:mm:ss.fffffZ", "yyyy-MM-ddTHH:mm:ss.ffffffZ", "yyyy-MM-ddTHH:mm:ss.fffffffZ", "yyyy-MM-ddTHH:mm:ss", "yyyy-MM-ddTHH:mm:ss.f", "yyyy-MM-ddTHH:mm:ss.ff", "yyyy-MM-ddTHH:mm:ss.fff", "yyyy-MM-ddTHH:mm:ss.ffff", "yyyy-MM-ddTHH:mm:ss.fffff", "yyyy-MM-ddTHH:mm:ss.ffffff", "yyyy-MM-ddTHH:mm:ss.fffffff", "HH:mm:ss", "HH:mm:ss.f", "HH:mm:ss.ff", "HH:mm:ss.fff", "HH:mm:ss.ffff", "HH:mm:ss.fffff", "HH:mm:ss.ffffff", "HH:mm:ss.fffffff", "HH:mm:sszzz", "HH:mm:ss.fzzz", "HH:mm:ss.ffzzz", "HH:mm:ss.fffzzz", "HH:mm:ss.ffffzzz", "HH:mm:ss.fffffzzz", "HH:mm:ss.ffffffzzz", "HH:mm:ss.fffffffzzz", "HH:mm:ssZ", "HH:mm:ss.fZ", "HH:mm:ss.ffZ", "HH:mm:ss.fffZ", "HH:mm:ss.ffffZ", "HH:mm:ss.fffffZ", "HH:mm:ss.ffffffZ", "HH:mm:ss.fffffffZ", "yyyy-MM-dd", "yyyy-MM-ddzzz", "yyyy-MM-ddZ", "yyyy-MM", "yyyy-MMzzz", "yyyy-MMZ", "yyyy", "yyyyzzz", "yyyyZ", "--MM-dd", "--MM-ddzzz", "--MM-ddZ", "---dd", "---ddzzz", "---ddZ"];
    return XmlConvert;
}(Base));
export { XmlConvert };
//# sourceMappingURL=XmlConvert.js.map