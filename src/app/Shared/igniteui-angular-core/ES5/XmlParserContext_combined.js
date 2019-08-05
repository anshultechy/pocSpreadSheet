//
// System.Xml.XmlTextReader
//
// Author:
//   Jason Diamond (jason@injektilo.org)
//   Adam Treat (manyoso@yahoo.com)
//   Atsushi Enomoto  (ginga@kit.hi-ho.ne.jp)
//
// (C) 2001, 2002 Jason Diamond  http://injektilo.org/
// Copyright (C) 2005-2006 Novell, Inc (http://www.novell.com)
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
//#define USE_NAME_BUFFER
import * as tslib_1 from "tslib";
//
// Optimization TODOs:
//
//	- support PushbackChar() which reverts one character read.
//		- ReadTextReader() should always keep one pushback buffer
//		  as pushback safety net.
//	- Replace (peek,read) * n -> read * n + pushback
//
import { Base, markType, Stream, typeCast, enumGetBox } from "./type";
import { DTDObjectModel } from "./DTDObjectModel";
import { Encoding } from "./Encoding";
import { XmlNamespaceManager } from "./XmlNamespaceManager";
import { TextReader } from "./TextReader";
import { arrayListCreate, arrayCopyTo } from "./array";
import { XmlParserContext_ContextItem } from "./XmlParserContext_ContextItem";
import { XmlException } from "./XmlException";
import { stringEmpty, stringCreateFromCharArraySlice, stringReplace, stringIsNullOrEmpty, charMaxValue, stringToLocaleLower, stringCreateFromCharArray, stringConcat } from "./string";
import { XmlReader } from "./XmlReader";
import { XmlNodeType_$type } from "./xml";
import { InvalidOperationException } from "./InvalidOperationException";
import { XmlTextReader_DtdInputStateStack } from "./XmlTextReader_DtdInputStateStack";
import { XmlUrlResolver } from "./XmlUrlResolver";
import { XmlStreamReader } from "./XmlStreamReader";
import { NameTable } from "./NameTable";
import { StringReader } from "./StringReader";
import { Uri } from "./Uri";
import { ArgumentOutOfRangeException } from "./ArgumentOutOfRangeException";
import { IXmlLineInfo_$type } from "./IXmlLineInfo";
import { XmlTextReader_TagName } from "./XmlTextReader_TagName";
import { StringBuilder } from "./StringBuilder";
import { XmlChar } from "./XmlChar";
import { CultureInfo } from "./culture";
import { intDivide } from "./number";
import { stringFormat, stringFormat2, stringCompare1 } from "./stringExtended";
import { arrayCopy1 } from "./arrayExtended";
/**
 * @hidden
 */
var XmlParserContext = /** @class */ (function (_super) {
    tslib_1.__extends(XmlParserContext, _super);
    function XmlParserContext(a) {
        var _rest = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            _rest[_i - 1] = arguments[_i];
        }
        var _this = _super.call(this) || this;
        _this.c = stringEmpty();
        _this.e = stringEmpty();
        _this.o = null;
        _this.g = stringEmpty();
        _this.u = null;
        _this.w = null;
        _this.i = stringEmpty();
        _this.k = stringEmpty();
        _this.m = stringEmpty();
        _this.y = 0;
        _this.a = null;
        _this.b = 0;
        _this.s = null;
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0:
                {
                    var c = _rest[0];
                    var d = _rest[1];
                    var e = _rest[2];
                    var f = _rest[3];
                    var g = [c, d, null, null, null, null, null, e, f, null];
                    {
                        var i = g[0];
                        var j = g[1];
                        var k = g[2];
                        var l = g[3];
                        var m = g[4];
                        var n = g[5];
                        var o = g[6];
                        var p = g[7];
                        var q = g[8];
                        var r = g[9];
                        var s = [i, j, (k != null && k != stringEmpty()) ? new XmlTextReader(9, TextReader.e, i).d8(k, l, m, n) : null, o, p, q, r];
                        {
                            var u = s[0];
                            var v = s[1];
                            var w = s[2];
                            var x = s[3];
                            var y = s[4];
                            var z = s[5];
                            var aa = s[6];
                            _this.u = v;
                            _this.w = u != null ? u : v != null ? v.ag : null;
                            if (w != null) {
                                _this.f = w.b;
                                _this.j = w.c;
                                _this.l = w.d;
                                _this.h = w.a;
                                _this.s = w;
                            }
                            _this.o = aa;
                            _this.d = x;
                            _this.n = y;
                            _this.y = z;
                            _this.a = arrayListCreate();
                        }
                    }
                }
                break;
            case 1:
                {
                    var c = _rest[0];
                    var d = _rest[1];
                    var e = _rest[2];
                    var f = _rest[3];
                    var g = _rest[4];
                    var h = [c, d, null, null, null, null, null, e, f, g];
                    {
                        var j = h[0];
                        var k = h[1];
                        var l = h[2];
                        var m = h[3];
                        var n = h[4];
                        var o = h[5];
                        var p = h[6];
                        var q = h[7];
                        var r = h[8];
                        var s = h[9];
                        var t = [j, k, (l != null && l != stringEmpty()) ? new XmlTextReader(9, TextReader.e, j).d8(l, m, n, o) : null, p, q, r, s];
                        {
                            var v = t[0];
                            var w = t[1];
                            var x = t[2];
                            var y = t[3];
                            var z = t[4];
                            var aa = t[5];
                            var ab = t[6];
                            _this.u = w;
                            _this.w = v != null ? v : w != null ? w.ag : null;
                            if (x != null) {
                                _this.f = x.b;
                                _this.j = x.c;
                                _this.l = x.d;
                                _this.h = x.a;
                                _this.s = x;
                            }
                            _this.o = ab;
                            _this.d = y;
                            _this.n = z;
                            _this.y = aa;
                            _this.a = arrayListCreate();
                        }
                    }
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
                    var l = [c, d, e, f, g, h, i, j, k, null];
                    {
                        var n = l[0];
                        var o = l[1];
                        var p = l[2];
                        var q = l[3];
                        var r = l[4];
                        var s = l[5];
                        var t = l[6];
                        var u = l[7];
                        var v = l[8];
                        var w = l[9];
                        var x = [n, o, (p != null && p != stringEmpty()) ? new XmlTextReader(9, TextReader.e, n).d8(p, q, r, s) : null, t, u, v, w];
                        {
                            var z = x[0];
                            var aa = x[1];
                            var ab = x[2];
                            var ac = x[3];
                            var ad = x[4];
                            var ae = x[5];
                            var af = x[6];
                            _this.u = aa;
                            _this.w = z != null ? z : aa != null ? aa.ag : null;
                            if (ab != null) {
                                _this.f = ab.b;
                                _this.j = ab.c;
                                _this.l = ab.d;
                                _this.h = ab.a;
                                _this.s = ab;
                            }
                            _this.o = af;
                            _this.d = ac;
                            _this.n = ad;
                            _this.y = ae;
                            _this.a = arrayListCreate();
                        }
                    }
                }
                break;
            case 3:
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
                    var m = [c, d, (e != null && e != stringEmpty()) ? new XmlTextReader(9, TextReader.e, c).d8(e, f, g, h) : null, i, j, k, l];
                    {
                        var o = m[0];
                        var p = m[1];
                        var q = m[2];
                        var r = m[3];
                        var s = m[4];
                        var t = m[5];
                        var u = m[6];
                        _this.u = p;
                        _this.w = o != null ? o : p != null ? p.ag : null;
                        if (q != null) {
                            _this.f = q.b;
                            _this.j = q.c;
                            _this.l = q.d;
                            _this.h = q.a;
                            _this.s = q;
                        }
                        _this.o = u;
                        _this.d = r;
                        _this.n = s;
                        _this.y = t;
                        _this.a = arrayListCreate();
                    }
                }
                break;
            case 4:
                {
                    var c = _rest[0];
                    var d = _rest[1];
                    var e = _rest[2];
                    var f = _rest[3];
                    var g = _rest[4];
                    var h = _rest[5];
                    var i = _rest[6];
                    _this.u = d;
                    _this.w = c != null ? c : d != null ? d.ag : null;
                    if (e != null) {
                        _this.f = e.b;
                        _this.j = e.c;
                        _this.l = e.d;
                        _this.h = e.a;
                        _this.s = e;
                    }
                    _this.o = i;
                    _this.d = f;
                    _this.n = g;
                    _this.y = h;
                    _this.a = arrayListCreate();
                }
                break;
        }
        return _this;
    }
    Object.defineProperty(XmlParserContext.prototype, "d", {
        get: function () {
            return this.c;
        },
        set: function (a) {
            this.c = a != null ? a : stringEmpty();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(XmlParserContext.prototype, "f", {
        get: function () {
            return this.e != null ? this.e : this.s != null ? this.s.b : null;
        },
        set: function (a) {
            this.e = a != null ? a : stringEmpty();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(XmlParserContext.prototype, "t", {
        get: function () {
            return this.s;
        },
        set: function (a) {
            this.s = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(XmlParserContext.prototype, "p", {
        get: function () {
            return this.o;
        },
        set: function (a) {
            this.o = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(XmlParserContext.prototype, "h", {
        get: function () {
            return this.g != null ? this.g : this.s != null ? this.s.a : null;
        },
        set: function (a) {
            this.g = a != null ? a : stringEmpty();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(XmlParserContext.prototype, "v", {
        get: function () {
            return this.u;
        },
        set: function (a) {
            this.u = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(XmlParserContext.prototype, "x", {
        get: function () {
            return this.w;
        },
        set: function (a) {
            this.w = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(XmlParserContext.prototype, "j", {
        get: function () {
            return this.i != null ? this.i : this.s != null ? this.s.c : null;
        },
        set: function (a) {
            this.i = a != null ? a : stringEmpty();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(XmlParserContext.prototype, "l", {
        get: function () {
            return this.k != null ? this.k : this.s != null ? this.s.d : null;
        },
        set: function (a) {
            this.k = a != null ? a : stringEmpty();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(XmlParserContext.prototype, "n", {
        get: function () {
            return this.m;
        },
        set: function (a) {
            this.m = a != null ? a : stringEmpty();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(XmlParserContext.prototype, "z", {
        get: function () {
            return this.y;
        },
        set: function (a) {
            this.y = a;
        },
        enumerable: true,
        configurable: true
    });
    XmlParserContext.prototype.r = function () {
        var a = null;
        if (this.a.count == this.b) {
            a = new XmlParserContext_ContextItem();
            this.a.add(a);
        }
        else {
            a = this.a.item(this.b);
        }
        a.a = this.d;
        a.b = this.n;
        a.c = this.z;
        this.b++;
    };
    XmlParserContext.prototype.q = function () {
        if (this.b == 0) {
            throw new XmlException(3, "Unexpected end of element scope.");
        }
        this.b--;
        var a = this.a.item(this.b);
        this.c = a.a;
        this.m = a.b;
        this.y = a.c;
    };
    XmlParserContext.$t = markType(XmlParserContext, 'XmlParserContext');
    return XmlParserContext;
}(Base));
export { XmlParserContext };
/**
 * @hidden
 */
var XmlTextReader = /** @class */ (function (_super) {
    tslib_1.__extends(XmlTextReader, _super);
    function XmlTextReader(a) {
        var _rest = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            _rest[_i - 1] = arguments[_i];
        }
        var _this = _super.call(this) || this;
        _this.es = null;
        _this.er = null;
        _this.ep = null;
        _this.eq = null;
        _this.a9 = new Array(10);
        _this.ba = new Array(10);
        _this.b6 = 0;
        _this.b7 = 0;
        _this.b3 = 0;
        _this.ej = null;
        _this.eg = null;
        _this.ef = null;
        _this.eb = 0;
        _this.bk = false;
        _this.ca = 0;
        _this.cb = 0;
        _this.bj = false;
        _this.bq = false;
        _this.bb = null;
        _this.cc = 0;
        _this.be = false;
        _this.bl = false;
        _this.bz = false;
        _this.c0 = null;
        _this.c7 = null;
        _this.cy = null;
        _this.bc = null;
        _this.ck = 0;
        _this.cl = 0;
        _this.b5 = 0;
        _this.br = false;
        _this.ce = 0;
        _this.b4 = 0;
        _this.b8 = 0;
        _this.b9 = 0;
        _this.b2 = false;
        _this.ei = 0;
        _this.eh = 0;
        _this.ch = 0;
        _this.bu = false;
        _this.bm = true;
        _this.ec = 0;
        _this.ek = new XmlUrlResolver();
        _this.bo = false;
        _this.bg = false;
        _this.bs = false;
        _this.bh = true;
        _this.d9 = 0;
        _this.ea = null;
        _this.bd = null;
        _this.eo = new XmlTextReader_DtdInputStateStack();
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0: break;
            case 1:
                {
                    var c = _rest[0];
                    var d = [new XmlStreamReader(1, c)];
                    {
                        var f = d[0];
                        var g = [f, new NameTable()];
                        {
                            var i = g[0];
                            var j = g[1];
                            var k = [stringEmpty(), i, j];
                            {
                                var m = k[0];
                                var n = k[1];
                                var o = k[2];
                                var p = [m, n, 9, null];
                                {
                                    var r = p[0];
                                    var s = p[1];
                                    var t = p[2];
                                    var u = p[3];
                                    _this.dn(r, u, s, t);
                                }
                            }
                        }
                    }
                }
                break;
            case 2:
                {
                    var c = _rest[0];
                    var d = [c, new NameTable()];
                    {
                        var f_1 = d[0];
                        var g = d[1];
                        var h_1;
                        var i = ((function () { var j = _this.cw(f_1, h_1); h_1 = j.p1; return j.ret; })());
                        var j = new XmlParserContext(0, g, new XmlNamespaceManager(g), stringEmpty(), 0);
                        _this.dn(h_1, j, new XmlStreamReader(1, i), 9);
                    }
                }
                break;
            case 3:
                {
                    var c = _rest[0];
                    var d = [c, new NameTable()];
                    {
                        var f = d[0];
                        var g = d[1];
                        var h = [stringEmpty(), f, g];
                        {
                            var j = h[0];
                            var k = h[1];
                            var l = h[2];
                            var m = [j, k, 9, null];
                            {
                                var o = m[0];
                                var p = m[1];
                                var q = m[2];
                                var r = m[3];
                                _this.dn(o, r, p, q);
                            }
                        }
                    }
                }
                break;
            case 4:
                {
                    var c = _rest[0];
                    var d = [stringEmpty(), null, 0, null];
                    {
                        var f = d[0];
                        var g = d[1];
                        var h = d[2];
                        var i = d[3];
                        _this.dn(f, i, g, h);
                    }
                }
                break;
            case 5:
                {
                    var c = _rest[0];
                    var d = _rest[1];
                    var e = [new XmlStreamReader(1, c), d];
                    {
                        var g = e[0];
                        var h = e[1];
                        var i = [stringEmpty(), g, h];
                        {
                            var k = i[0];
                            var l = i[1];
                            var m = i[2];
                            var n = [k, l, 9, null];
                            {
                                var p = n[0];
                                var q = n[1];
                                var r = n[2];
                                var s = n[3];
                                _this.dn(p, s, q, r);
                            }
                        }
                    }
                }
                break;
            case 6:
                {
                    var c = _rest[0];
                    var d = _rest[1];
                    var e = [c, new XmlStreamReader(1, d)];
                    {
                        var g = e[0];
                        var h = e[1];
                        var i = [g, h, new NameTable()];
                        {
                            var k = i[0];
                            var l = i[1];
                            var m = i[2];
                            var n = [k, l, 9, null];
                            {
                                var p = n[0];
                                var q = n[1];
                                var r = n[2];
                                var s = n[3];
                                _this.dn(p, s, q, r);
                            }
                        }
                    }
                }
                break;
            case 7:
                {
                    var c = _rest[0];
                    var d = _rest[1];
                    var e = [c, d, new NameTable()];
                    {
                        var g = e[0];
                        var h = e[1];
                        var i = e[2];
                        var j = [g, h, 9, null];
                        {
                            var l = j[0];
                            var m = j[1];
                            var n = j[2];
                            var o = j[3];
                            _this.dn(l, o, m, n);
                        }
                    }
                }
                break;
            case 8:
                {
                    var c_1 = _rest[0];
                    var d = _rest[1];
                    var e_1;
                    var f = ((function () { var g = _this.cw(c_1, e_1); e_1 = g.p1; return g.ret; })());
                    var g = new XmlParserContext(0, d, new XmlNamespaceManager(d), stringEmpty(), 0);
                    _this.dn(e_1, g, new XmlStreamReader(1, f), 9);
                }
                break;
            case 9:
                {
                    var c = _rest[0];
                    var d = _rest[1];
                    var e = [stringEmpty(), c, d];
                    {
                        var g = e[0];
                        var h = e[1];
                        var i = e[2];
                        var j = [g, h, 9, null];
                        {
                            var l = j[0];
                            var m = j[1];
                            var n = j[2];
                            var o = j[3];
                            _this.dn(l, o, m, n);
                        }
                    }
                }
                break;
            case 10:
                {
                    var c = _rest[0];
                    var d = _rest[1];
                    var e_2 = _rest[2];
                    var f = _rest[3];
                    var g = _rest[4];
                    if (d == null) {
                        d = new XmlUrlResolver();
                    }
                    _this.em = d;
                    var h_2;
                    var i = ((function () { var j = _this.cw(e_2, h_2); h_2 = j.p1; return j.ret; })());
                    _this.dn(h_2, g, new XmlStreamReader(1, i), f);
                }
                break;
            case 11:
                {
                    var c = _rest[0];
                    var d = _rest[1];
                    var e = _rest[2];
                    var f = [e != null ? e.d : stringEmpty(), new XmlStreamReader(1, c), d, e];
                    {
                        var h = f[0];
                        var i = f[1];
                        var j = f[2];
                        var k = f[3];
                        _this.dn(h, k, i, j);
                    }
                    _this.bk = true;
                }
                break;
            case 12:
                {
                    var c = _rest[0];
                    var d = _rest[1];
                    var e = _rest[2];
                    var f = [c, d, e, null];
                    {
                        var h = f[0];
                        var i = f[1];
                        var j = f[2];
                        var k = f[3];
                        _this.dn(h, k, i, j);
                    }
                }
                break;
            case 13:
                {
                    var c = _rest[0];
                    var d = _rest[1];
                    var e = _rest[2];
                    var f = [c, new XmlStreamReader(1, d), e];
                    {
                        var h = f[0];
                        var i = f[1];
                        var j = f[2];
                        var k = [h, i, 9, null];
                        {
                            var m = k[0];
                            var n = k[1];
                            var o = k[2];
                            var p = k[3];
                            _this.dn(m, p, n, o);
                        }
                    }
                }
                break;
            case 14:
                {
                    var c = _rest[0];
                    var d = _rest[1];
                    var e = _rest[2];
                    var f = [c, d, 9, null];
                    {
                        var h = f[0];
                        var i = f[1];
                        var j = f[2];
                        var k = f[3];
                        _this.dn(h, k, i, j);
                    }
                }
                break;
            case 15:
                {
                    var c = _rest[0];
                    var d = _rest[1];
                    var e = _rest[2];
                    var f = [e != null ? e.d : stringEmpty(), new StringReader(c), d, e];
                    {
                        var h = f[0];
                        var i = f[1];
                        var j = f[2];
                        var k = f[3];
                        _this.dn(h, k, i, j);
                    }
                    _this.bk = true;
                }
                break;
            case 16:
                {
                    var c = _rest[0];
                    var d = _rest[1];
                    var e = _rest[2];
                    var f = _rest[3];
                    _this.dn(c, f, d, e);
                }
                break;
        }
        return _this;
    }
    XmlTextReader.prototype.cw = function (a, b) {
        var c = this.ek.d(null, a);
        b = c != null ? c.toString() : stringEmpty();
        return {
            ret: typeCast(Stream.$, this.ek.b(c, null, Stream.$)),
            p1: b
        };
    };
    XmlTextReader.prototype.get_w = function () {
        return this.b3;
    };
    Object.defineProperty(XmlTextReader.prototype, "w", {
        get: function () {
            return this.get_w();
        },
        enumerable: true,
        configurable: true
    });
    XmlTextReader.prototype.get_z = function () {
        return this.ej.d;
    };
    Object.defineProperty(XmlTextReader.prototype, "z", {
        get: function () {
            return this.get_z();
        },
        enumerable: true,
        configurable: true
    });
    XmlTextReader.prototype.get_a = function () {
        return true;
    };
    XmlTextReader.prototype.get_b = function () {
        return true;
    };
    Object.defineProperty(XmlTextReader.prototype, "bf", {
        get: function () {
            return this.bg;
        },
        set: function (a) {
            this.bg = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(XmlTextReader.prototype, "bi", {
        get: function () {
            return this.bh;
        },
        set: function (a) {
            this.bh = a;
        },
        enumerable: true,
        configurable: true
    });
    XmlTextReader.prototype.get_x = function () {
        var a = this.er.n == 1 ? 0 : -1;
        if (this.b7 >= 0) {
            return a + this.cb + 2;
        }
        else if (this.b6 >= 0) {
            return a + this.cb + 1;
        }
        return this.cb;
    };
    Object.defineProperty(XmlTextReader.prototype, "x", {
        get: function () {
            return this.get_x();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(XmlTextReader.prototype, "c6", {
        get: function () {
            return this.ej.p || Encoding.uTF8;
        },
        enumerable: true,
        configurable: true
    });
    XmlTextReader.prototype.get_d = function () {
        return this.eb == 3;
    };
    Object.defineProperty(XmlTextReader.prototype, "d", {
        get: function () {
            return this.get_d();
        },
        enumerable: true,
        configurable: true
    });
    XmlTextReader.prototype.get_f = function () {
        return this.es.k != null;
    };
    Object.defineProperty(XmlTextReader.prototype, "f", {
        get: function () {
            return this.get_f();
        },
        enumerable: true,
        configurable: true
    });
    XmlTextReader.prototype.get_h = function () {
        return false;
    };
    Object.defineProperty(XmlTextReader.prototype, "h", {
        get: function () {
            return this.get_h();
        },
        enumerable: true,
        configurable: true
    });
    XmlTextReader.prototype.get_i = function () {
        return this.es.a;
    };
    Object.defineProperty(XmlTextReader.prototype, "i", {
        get: function () {
            return this.get_i();
        },
        enumerable: true,
        configurable: true
    });
    XmlTextReader.prototype.item = function (a) {
        return this.aa(a);
    };
    XmlTextReader.prototype.item1 = function (a) {
        return this.ab(a);
    };
    XmlTextReader.prototype.item2 = function (a, b) {
        return this.ac(a, b);
    };
    Object.defineProperty(XmlTextReader.prototype, "cf", {
        get: function () {
            if (this.b2) {
                return this.ce;
            }
            else {
                return this.es.c;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(XmlTextReader.prototype, "cg", {
        get: function () {
            if (this.b2) {
                return this.b4;
            }
            else {
                return this.es.d;
            }
        },
        enumerable: true,
        configurable: true
    });
    XmlTextReader.prototype.get_ag = function () {
        return this.es.g;
    };
    Object.defineProperty(XmlTextReader.prototype, "ag", {
        get: function () {
            return this.get_ag();
        },
        enumerable: true,
        configurable: true
    });
    XmlTextReader.prototype.get_ai = function () {
        return this.es.h;
    };
    Object.defineProperty(XmlTextReader.prototype, "ai", {
        get: function () {
            return this.get_ai();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(XmlTextReader.prototype, "bn", {
        get: function () {
            return this.bm;
        },
        set: function (a) {
            if (this.eb != 0) {
                throw new InvalidOperationException(1, "Namespaces have to be set before reading.");
            }
            this.bm = a;
        },
        enumerable: true,
        configurable: true
    });
    XmlTextReader.prototype.get_aj = function () {
        return this.es.i;
    };
    Object.defineProperty(XmlTextReader.prototype, "aj", {
        get: function () {
            return this.get_aj();
        },
        enumerable: true,
        configurable: true
    });
    XmlTextReader.prototype.get_a5 = function () {
        return this.eg;
    };
    Object.defineProperty(XmlTextReader.prototype, "a5", {
        get: function () {
            return this.get_a5();
        },
        enumerable: true,
        configurable: true
    });
    XmlTextReader.prototype.get_a7 = function () {
        return this.es.n;
    };
    Object.defineProperty(XmlTextReader.prototype, "a7", {
        get: function () {
            return this.get_a7();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(XmlTextReader.prototype, "bp", {
        get: function () {
            return this.bo;
        },
        set: function (a) {
            this.bo = a;
        },
        enumerable: true,
        configurable: true
    });
    XmlTextReader.prototype.get_ak = function () {
        return this.es.j;
    };
    Object.defineProperty(XmlTextReader.prototype, "ak", {
        get: function () {
            return this.get_ak();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(XmlTextReader.prototype, "bt", {
        get: function () {
            return this.bs;
        },
        set: function (a) {
            this.bs = a;
        },
        enumerable: true,
        configurable: true
    });
    XmlTextReader.prototype.get_v = function () {
        return this.es.b;
    };
    Object.defineProperty(XmlTextReader.prototype, "v", {
        get: function () {
            return this.get_v();
        },
        enumerable: true,
        configurable: true
    });
    XmlTextReader.prototype.get_a3 = function () {
        return this.eb;
    };
    Object.defineProperty(XmlTextReader.prototype, "a3", {
        get: function () {
            return this.get_a3();
        },
        enumerable: true,
        configurable: true
    });
    XmlTextReader.prototype.get_ar = function () {
        return this.es.k != null ? this.es.k : stringEmpty();
    };
    Object.defineProperty(XmlTextReader.prototype, "ar", {
        get: function () {
            return this.get_ar();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(XmlTextReader.prototype, "ed", {
        get: function () {
            return this.ec;
        },
        set: function (a) {
            this.ec = a;
        },
        enumerable: true,
        configurable: true
    });
    XmlTextReader.prototype.get_as = function () {
        return this.ej.n;
    };
    Object.defineProperty(XmlTextReader.prototype, "as", {
        get: function () {
            return this.get_as();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(XmlTextReader.prototype, "em", {
        set: function (a) {
            this.ek = a;
        },
        enumerable: true,
        configurable: true
    });
    XmlTextReader.prototype.get_a8 = function () {
        return this.ej.z;
    };
    Object.defineProperty(XmlTextReader.prototype, "a8", {
        get: function () {
            return this.get_a8();
        },
        enumerable: true,
        configurable: true
    });
    XmlTextReader.prototype.au = function () {
        this.eb = 4;
        this.es.m();
        this.er.m();
        this.b3 = 0;
        if (this.bh && this.cy != null) {
            this.cy.i();
        }
    };
    XmlTextReader.prototype.aa = function (a) {
        if (a >= this.b3) {
            throw new ArgumentOutOfRangeException(1, "i is smaller than AttributeCount");
        }
        else {
            return this.a9[a].k;
        }
    };
    XmlTextReader.prototype.ab = function (a) {
        for (var b = 0; b < this.b3; b++) {
            if (this.a9[b].h == a) {
                return this.a9[b].k;
            }
        }
        return null;
    };
    XmlTextReader.prototype.cd = function (a, b) {
        b = b != null ? b : stringEmpty();
        for (var c = 0; c < this.b3; c++) {
            var d = this.a9[c];
            if (d.g == a && d.i == b) {
                return c;
            }
        }
        return -1;
    };
    XmlTextReader.prototype.ac = function (a, b) {
        var c = this.cd(a, b);
        if (c < 0) {
            return null;
        }
        return this.a9[c].k;
    };
    XmlTextReader.prototype.cx = function () {
        if (this.cl < 0) {
            return this.cy;
        }
        return new StringReader(stringCreateFromCharArraySlice(this.bc, this.ck, this.cl - this.ck) + this.cy.h());
    };
    XmlTextReader.prototype.ah = function (a) {
        return this.c1(a, false);
    };
    XmlTextReader.prototype.c1 = function (a, b) {
        var c = this.ef.lookupNamespace1(a, b);
        return c == stringEmpty() ? null : c;
    };
    XmlTextReader.prototype.aw = function (a) {
        if (a >= this.b3) {
            throw new ArgumentOutOfRangeException(1, "attribute index out of range.");
        }
        this.b6 = a;
        this.b7 = -1;
        this.es = this.a9[a];
    };
    XmlTextReader.prototype.o = function (a) {
        for (var b = 0; b < this.b3; b++) {
            var c = this.a9[b];
            if (c.h == a) {
                this.aw(b);
                return true;
            }
        }
        return false;
    };
    XmlTextReader.prototype.p = function (a, b) {
        var c = this.cd(a, b);
        if (c < 0) {
            return false;
        }
        this.aw(c);
        return true;
    };
    XmlTextReader.prototype.q = function () {
        if (this.er == null) {
            return false;
        }
        if (this.es == this.er) {
            return false;
        }
        if (this.b6 >= 0) {
            this.b6 = -1;
            this.b7 = -1;
            this.es = this.er;
            return true;
        }
        else {
            return false;
        }
    };
    XmlTextReader.prototype.r = function () {
        if (this.b3 == 0) {
            return false;
        }
        this.q();
        return this.s();
    };
    XmlTextReader.prototype.s = function () {
        if (this.b6 == 0 && this.b3 == 0) {
            return false;
        }
        if (this.b6 + 1 < this.b3) {
            this.b6++;
            this.b7 = -1;
            this.es = this.a9[this.b6];
            return true;
        }
        else {
            return false;
        }
    };
    XmlTextReader.prototype.t = function () {
        if (this.eb == 4) {
            return false;
        }
        this.b5 = this.ck;
        this.br = true;
        this.ch = 0;
        this.df();
        if (this.ei == 2) {
            if (this.b6 == 0) {
                return false;
            }
            this.d6();
            this.de();
            this.dk();
            this.ds('\"'.charCodeAt(0));
            this.es = this.a9[0];
            this.b7 = -1;
            this.eb = 1;
            return true;
        }
        if (this.eb == 0 && this.eh == 1) {
            this.d6();
        }
        var a = false;
        this.eb = 1;
        this.b8 = this.ce;
        this.b9 = this.b4;
        this.b2 = true;
        this.es = this.er;
        this.b3 = 0;
        this.b6 = this.b7 = -1;
        this.er.m();
        if (this.bj) {
            ++this.ca;
            this.bj = false;
        }
        if (this.bu) {
            this.bu = false;
            return this.bx();
        }
        a = this.bv();
        if (!a && this.ei == 9 && this.eh != 15) {
            throw this.ee("Document element did not appear.");
        }
        this.b2 = false;
        return a;
    };
    XmlTextReader.prototype.u = function () {
        if (this.eb == 0 && this.ei == 2) {
            this.t();
        }
        if (this.b6 < 0) {
            return false;
        }
        var a = this.a9[this.b6];
        if (this.b7 < 0) {
            this.b7 = a.q - 1;
        }
        if (this.b7 < a.p) {
            this.b7++;
            this.es = this.ba[this.b7];
            return true;
        }
        else {
            return false;
        }
    };
    XmlTextReader.prototype.cn = function (a, b, c) {
        return 0;
    };
    XmlTextReader.prototype.co = function (a, b, c) {
        return 0;
    };
    XmlTextReader.prototype.cr = function (a, b, c) {
        if (b < 0) {
            throw new ArgumentOutOfRangeException(3, "offset", b, "Offset must be non-negative integer.");
        }
        else if (c < 0) {
            throw new ArgumentOutOfRangeException(3, "length", c, "Length must be non-negative integer.");
        }
        else if (a.length < b + c) {
            throw new ArgumentOutOfRangeException(1, "buffer length is smaller than the sum of offset and length.");
        }
        if (this.i) {
            this.t();
            return 0;
        }
        if (!this.bu && this.a7 != 1) {
            return 0;
        }
        this.br = false;
        this.bu = true;
        this.b2 = true;
        return this.cs(a, b, c);
    };
    XmlTextReader.prototype.d2 = function () {
        if (this.bk) {
            throw new InvalidOperationException(1, "Cannot call ResetState when parsing an XML fragment.");
        }
        this.dd();
    };
    XmlTextReader.prototype.a1 = function () {
        throw new InvalidOperationException(1, "XmlTextReader cannot resolve external entities.");
    };
    Object.defineProperty(XmlTextReader.prototype, "el", {
        get: function () {
            return this.ek;
        },
        enumerable: true,
        configurable: true
    });
    XmlTextReader.prototype.ee = function (a) {
        return new XmlException(2, typeCast(IXmlLineInfo_$type, this), this.z, a);
    };
    XmlTextReader.prototype.initXmlTextReader = function () {
        this.be = false;
        this.bb = new Array(10);
        this.c7 = new StringBuilder(0);
        this.bg = true;
        this.bs = false;
        this.bh = true;
        this.d9 = 2;
        this.ck = 0;
        if (this.bc == null) {
            this.bc = new Array(1024);
        }
        this.cl = -1;
        this.b5 = -1;
        this.ce = 1;
        this.b4 = 1;
        this.b8 = this.b9 = 0;
        this.dd();
    };
    XmlTextReader.prototype.dd = function () {
        this.er = new XmlTextReader_XmlTokenInfo(this);
        this.es = this.er;
        this.b6 = -1;
        this.b7 = -1;
        this.b3 = 0;
        this.eb = 0;
        this.ca = 0;
        this.cb = 0;
        this.bj = false;
        this.bq = this.be = false;
        this.cc = 0;
        this.bl = false;
        this.bz = false;
        this.c0 = stringEmpty();
        this.b2 = false;
        this.eh = 0;
        this.bu = false;
    };
    XmlTextReader.prototype.dn = function (a, b, c, d) {
        this.ei = d;
        this.ej = b;
        if (b == null) {
            var e = new NameTable();
            this.ej = new XmlParserContext(0, e, new XmlNamespaceManager(e), stringEmpty(), 0);
        }
        this.eg = this.ej.x;
        this.eg = this.eg != null ? this.eg : new NameTable();
        this.ef = this.ej.v;
        this.ef = this.ef != null ? this.ef : new XmlNamespaceManager(this.eg);
        if (a != null && a.length > 0) {
            var f = null;
            try {
                f = new Uri(0, a);
            }
            catch (g) {
                throw g;
            }
            this.ej.d = f.toString();
        }
        this.initXmlTextReader();
        this.cy = c;
        switch (d) {
            case 2:
                this.cy = new StringReader(stringReplace(c.h(), "\"", "&quot;"));
                break;
            case 1:
                this.eh = 1;
                this.be = true;
                break;
            case 9: break;
            default: throw new XmlException(3, stringFormat("NodeType {0} is not allowed to create XmlTextReader.", enumGetBox(XmlNodeType_$type, d)));
        }
    };
    XmlTextReader.prototype.d4 = function (a, b, c, d, e, f, g) {
        this.d5(this.er, a, b, c, d, e, f, g);
        this.er.c = this.b8;
        this.er.d = this.b9;
    };
    XmlTextReader.prototype.d5 = function (a, b, c, d, e, f, g, h) {
        a.n = b;
        a.h = c;
        a.j = d;
        a.g = e;
        a.a = f;
        a.k = g;
        this.cb = this.ca;
        if (h) {
            this.de();
        }
    };
    XmlTextReader.prototype.de = function () {
        this.b3 = 0;
        this.b6 = -1;
        this.b7 = -1;
    };
    XmlTextReader.prototype.cm = function (a) {
        if (this.cl <= this.ck + 1) {
            if (!this.bw(a)) {
                return a;
            }
        }
        var b = this.bc[this.ck].charCodeAt(0);
        var c = this.bc[this.ck + 1].charCodeAt(0);
        if (((b & 64512) != 55296) || ((c & 64512) != 56320)) {
            return b;
        }
        return 65536 + (b - 55296) * 1024 + (c - 56320);
    };
    XmlTextReader.prototype.ci = function () {
        if (this.ck < this.cl) {
            var a = this.bc[this.ck].charCodeAt(0);
            if (a == 0) {
                return -1;
            }
            if (a < 55296 || a >= 57343) {
                return a;
            }
            return this.cm(a);
        }
        else {
            if (!this.bw(-1)) {
                return -1;
            }
            return this.ci();
        }
    };
    XmlTextReader.prototype.cp = function () {
        var a = this.ci();
        this.ck++;
        if (a >= 65536) {
            this.ck++;
        }
        if (a == '\n'.charCodeAt(0)) {
            this.ce++;
            this.b4 = 1;
        }
        else if (a != -1) {
            this.b4++;
        }
        return a;
    };
    XmlTextReader.prototype.c9 = function (a) {
        this.ck++;
        if (a >= 65536) {
            this.ck++;
        }
        if (a == '\n'.charCodeAt(0)) {
            this.ce++;
            this.b4 = 1;
        }
        else if (a != -1) {
            this.b4++;
        }
    };
    XmlTextReader.prototype.bw = function (a) {
        if (this.cl < 0) {
            this.cl = this.cy.c(this.bc, 0, this.bc.length);
            return this.cl > 0;
        }
        var b = a >= 0 ? 1 : 0;
        var c = this.cl - this.b5;
        if (!this.br) {
            this.b5 = 0;
            this.ck = 0;
        }
        else if (this.cl < this.bc.length) {
        }
        else if (this.b5 <= (this.cl >> 1)) {
            var d = new Array(this.bc.length * 2);
            arrayCopy1(this.bc, this.b5, d, 0, c);
            this.bc = d;
            this.b5 = 0;
            this.ck = c;
        }
        else {
            arrayCopy1(this.bc, this.b5, this.bc, 0, c);
            this.b5 = 0;
            this.ck = c;
        }
        if (a >= 0) {
            this.bc[this.ck] = String.fromCharCode(a);
        }
        var e = this.bc.length - this.ck - b;
        if (e > 1024) {
            e = 1024;
        }
        var f = this.cy.c(this.bc, this.ck + b, e);
        var g = b + f;
        this.cl = this.ck + g;
        return (g != 0);
    };
    XmlTextReader.prototype.bv = function () {
        if (this.bq) {
            this.ef.h();
            this.ej.q();
            this.bq = false;
        }
        if (this.bz) {
            this.d3();
        }
        else {
            var a = this.ci();
            if (a == -1) {
                this.eb = 3;
                this.df();
                this.d4(0, stringEmpty(), stringEmpty(), stringEmpty(), false, null, true);
                if (this.ca > 0) {
                    throw this.ee("unexpected end of file. Current depth is " + this.ca);
                }
                return false;
            }
            else {
                switch (a) {
                    case 60:
                        this.c9(a);
                        switch (this.ci()) {
                            case 47:
                                this.c9(47);
                                this.dx();
                                break;
                            case 63:
                                this.c9(63);
                                this.dz();
                                break;
                            case 33:
                                this.c9(33);
                                this.dv();
                                break;
                            default:
                                this.d0();
                                break;
                        }
                        break;
                    case 13:
                    case 10:
                    case 9:
                    case 32:
                        if (!this.by()) {
                            return this.bv();
                        }
                        break;
                    default:
                        this.d1(true);
                        break;
                }
            }
        }
        return this.a3 != 3;
    };
    XmlTextReader.prototype.d3 = function () {
        this.df();
        this.d4(5, this.c0, stringEmpty(), this.c0, false, null, true);
        this.bz = false;
        this.c0 = stringEmpty();
    };
    XmlTextReader.prototype.d0 = function () {
        var _this = this;
        if (this.eh == 15) {
            throw this.ee("Multiple document element was detected.");
        }
        this.eh = 1;
        this.ef.ac();
        this.b8 = this.ce;
        this.b9 = this.b4;
        var a, b;
        var c = ((function () { var d = _this.c3(a, b); a = d.p0; b = d.p1; return d.ret; })());
        if (this.eh == 15) {
            throw this.ee("document has terminated, cannot open new element");
        }
        var d = false;
        this.de();
        this.b0();
        if (XmlChar.e(this.ci())) {
            this.dr(false);
        }
        this.es = this.er;
        for (var e = 0; e < this.b3; e++) {
            this.a9[e].u();
        }
        for (var f = 0; f < this.b3; f++) {
            this.a9[f].t();
        }
        if (this.bm) {
            for (var g = 0; g < this.b3; g++) {
                if (this.a9[g].j == "xmlns" && this.a9[g].k == stringEmpty()) {
                    throw this.ee("Empty namespace URI cannot be mapped to non-empty prefix.");
                }
            }
        }
        for (var h = 0; h < this.b3; h++) {
            for (var i = h + 1; i < this.b3; i++) {
                if (Base.referenceEquals(this.a9[h].h, this.a9[i].h) || (Base.referenceEquals(this.a9[h].g, this.a9[i].g) && Base.referenceEquals(this.a9[h].i, this.a9[i].i))) {
                    throw this.ee("Attribute name and qualified name must be identical.");
                }
            }
        }
        if (this.ci() == '/'.charCodeAt(0)) {
            this.c9('/'.charCodeAt(0));
            d = true;
            this.bq = true;
        }
        else {
            this.bj = true;
            this.dq(c, b, a);
        }
        this.ej.r();
        this.dg('>'.charCodeAt(0));
        this.d4(1, c, a, b, d, null, false);
        if (a.length > 0) {
            this.er.i = this.c1(a, true);
        }
        else if (this.bm) {
            this.er.i = this.ef.n;
        }
        if (this.bm) {
            if (this.aj == null) {
                throw this.ee(stringFormat("'{0}' is undeclared namespace.", this.ak));
            }
            try {
                for (var j = 0; j < this.b3; j++) {
                    this.aw(j);
                    if (this.aj == null) {
                        throw this.ee(stringFormat("'{0}' is undeclared namespace.", this.ak));
                    }
                }
            }
            finally {
                this.q();
            }
        }
        for (var k = 0; k < this.b3; k++) {
            if (!Base.referenceEquals(this.a9[k].j, "xml")) {
                continue;
            }
            var l = this.a9[k].g;
            var m = this.a9[k].k;
            switch (l) {
                case "base":
                    if (this.ek != null) {
                        var n = this.z != stringEmpty() ? new Uri(0, this.z) : null;
                        if (n == null && stringIsNullOrEmpty(m)) {
                            break;
                        }
                        var o = this.ek.d(n, m);
                        this.ej.d = o != null ? o.toString() : stringEmpty();
                    }
                    else {
                        this.ej.d = m;
                    }
                    break;
                case "lang":
                    this.ej.n = m;
                    break;
                case "space":
                    switch (m) {
                        case "preserve":
                            this.ej.z = 2;
                            break;
                        case "default":
                            this.ej.z = 1;
                            break;
                        default: throw this.ee(stringFormat("Invalid xml:space value: {0}", m));
                    }
                    break;
            }
        }
        if (this.i) {
            this.dc();
        }
    };
    XmlTextReader.prototype.dq = function (a, b, c) {
        if (this.bb.length == this.cc) {
            var d = new Array(this.bb.length * 2);
            arrayCopy1(this.bb, 0, d, 0, this.cc);
            this.bb = d;
        }
        this.bb[this.cc++] = new XmlTextReader_TagName(1, a, b, c);
    };
    XmlTextReader.prototype.dx = function () {
        if (this.eh != 1) {
            throw this.ee("End tag cannot appear in this state.");
        }
        this.b8 = this.ce;
        this.b9 = this.b4;
        if (this.cc == 0) {
            throw this.ee("closing element without matching opening element");
        }
        var a = this.bb[--this.cc];
        this.dh(a.b);
        this.di('>');
        --this.ca;
        this.d4(15, a.b, a.c, a.a, false, null, true);
        if (a.c.length > 0) {
            this.er.i = this.c1(a.c, true);
        }
        else if (this.bm) {
            this.er.i = this.ef.n;
        }
        this.bq = true;
        this.dc();
    };
    XmlTextReader.prototype.dc = function () {
        if (this.ca == 0 && !this.be && (this.i || this.a7 == 15)) {
            this.eh = 15;
        }
    };
    XmlTextReader.prototype.db = function (a) {
        if (a <= charMaxValue().charCodeAt(0)) {
            this.c7.h(String.fromCharCode(a));
        }
        else {
            this.da(a);
        }
    };
    XmlTextReader.prototype.da = function (a) {
        this.c7.h(String.fromCharCode((intDivide((a - 65536), 1024) + 55296)));
        this.c7.h(String.fromCharCode(((a - 65536) % 1024 + 56320)));
    };
    XmlTextReader.prototype.cz = function () {
        switch (this.a7) {
            case 13:
            case 14:
                var a = this.c7.c;
                if (this.bd == null) {
                    this.bd = new Array(32);
                }
                if (a >= this.bd.length) {
                    break;
                }
                if (this.ea == null) {
                    this.ea = new NameTable();
                }
                for (var b = 0; b < a; b++) {
                    this.bd[b] = this.c7.item(b);
                }
                return this.ea.a(this.bd, 0, this.c7.c);
        }
        return (this.c7.b < 100) ? this.c7.f(0, this.c7.c) : this.c7.toString();
    };
    XmlTextReader.prototype.df = function () {
        this.c7.c = 0;
    };
    XmlTextReader.prototype.d1 = function (a) {
        if (this.eh != 1) {
            throw this.ee("Text node cannot appear in this state.");
        }
        this.br = false;
        if (a) {
            this.df();
        }
        var b = this.ci();
        var c = false;
        while (b != '<'.charCodeAt(0) && b != -1) {
            if (b == '&'.charCodeAt(0)) {
                this.cp();
                b = this.cu(false);
                if (this.bz) {
                    break;
                }
            }
            else if (this.bo && b == '\r'.charCodeAt(0)) {
                this.cp();
                b = this.ci();
                if (b != '\n'.charCodeAt(0)) {
                    this.db('\n'.charCodeAt(0));
                }
                continue;
            }
            else {
                if (this.bf && XmlChar.f(b)) {
                    throw this.ee("Not allowed character was found.");
                }
                b = this.cp();
            }
            {
                if (b <= charMaxValue().charCodeAt(0)) {
                    this.c7.h(String.fromCharCode(b));
                }
                else {
                    this.da(b);
                }
            }
            if (b == ']'.charCodeAt(0)) {
                if (c) {
                    if (this.ci() == '>'.charCodeAt(0)) {
                        throw this.ee("Inside text content, character sequence ']]>' is not allowed.");
                    }
                }
                c = true;
            }
            else if (c) {
                c = false;
            }
            b = this.ci();
            a = true;
        }
        if (this.bz && this.c7.c == 0) {
            this.d3();
        }
        else {
            var d = a ? 3 : this.a8 == 2 ? 14 : 13;
            this.d4(d, stringEmpty(), stringEmpty(), stringEmpty(), false, null, true);
        }
    };
    XmlTextReader.prototype.cu = function (a) {
        if (this.ci() == '#'.charCodeAt(0)) {
            this.c9('#'.charCodeAt(0));
            return this.cq();
        }
        else {
            return this.ct(a);
        }
    };
    XmlTextReader.prototype.cq = function () {
        var a = 0;
        var b;
        if (this.ci() == 'x'.charCodeAt(0)) {
            this.c9('x'.charCodeAt(0));
            while ((b = this.ci()) != ';'.charCodeAt(0) && b != -1) {
                this.c9(b);
                if (b >= '0'.charCodeAt(0) && b <= '9'.charCodeAt(0)) {
                    a = (a << 4) + b - '0'.charCodeAt(0);
                }
                else if (b >= 'A'.charCodeAt(0) && b <= 'F'.charCodeAt(0)) {
                    a = (a << 4) + b - 'A'.charCodeAt(0) + 10;
                }
                else if (b >= 'a'.charCodeAt(0) && b <= 'f'.charCodeAt(0)) {
                    a = (a << 4) + b - 'a'.charCodeAt(0) + 10;
                }
                else {
                    throw this.ee(stringFormat2(CultureInfo.invariantCulture, "invalid hexadecimal digit: {0} (#x{1:X})", String.fromCharCode(b), b));
                }
            }
        }
        else {
            while ((b = this.ci()) != ';'.charCodeAt(0) && b != -1) {
                this.c9(b);
                if (b >= '0'.charCodeAt(0) && b <= '9'.charCodeAt(0)) {
                    a = a * 10 + b - '0'.charCodeAt(0);
                }
                else {
                    throw this.ee(stringFormat2(CultureInfo.invariantCulture, "invalid decimal digit: {0} (#x{1:X})", String.fromCharCode(b), b));
                }
            }
        }
        this.cp();
        if (this.bf && this.bp && XmlChar.f(a)) {
            throw this.ee("Referenced character was not allowed in XML. Normalization is " + this.bo + ", checkCharacters = " + this.bg);
        }
        return a;
    };
    XmlTextReader.prototype.ct = function (a) {
        var b = this.c2();
        this.dg(';'.charCodeAt(0));
        var c = XmlChar.r(b);
        if (c >= 0) {
            return c;
        }
        else {
            if (a) {
                this.db('&'.charCodeAt(0));
                for (var d = 0; d < b.length; d++) {
                    this.db(b.charAt(d).charCodeAt(0));
                }
                this.db(';'.charCodeAt(0));
            }
            else {
                this.bz = true;
                this.c0 = b;
            }
        }
        return -1;
    };
    XmlTextReader.prototype.dr = function (a) {
        var _this = this;
        var b = -1;
        var c = false;
        this.b6 = -1;
        this.b7 = -1;
        var _loop_1 = function () {
            if (!this_1.b0() && c) {
                throw this_1.ee("Unexpected token. Name is required here.");
            }
            this_1.dk();
            this_1.ep.c = this_1.ce;
            this_1.ep.d = this_1.b4;
            var d, e;
            this_1.ep.h = ((function () { var f = _this.c3(d, e); d = f.p0; e = f.p1; return f.ret; })());
            this_1.ep.j = d;
            this_1.ep.g = e;
            this_1.di('=');
            this_1.b0();
            this_1.ds(-1);
            var f = void 0;
            if (a) {
                f = this_1.ep.k;
            }
            this_1.b3++;
            if (!this_1.b0()) {
                c = true;
            }
            b = this_1.ci();
            if (a) {
                if (b == '?'.charCodeAt(0)) {
                    return "break";
                }
            }
            else if (b == '/'.charCodeAt(0) || b == '>'.charCodeAt(0)) {
                return "break";
            }
        };
        var this_1 = this;
        do {
            var state_1 = _loop_1();
            if (state_1 === "break")
                break;
        } while (b != -1);
        this.b6 = -1;
        this.b7 = -1;
    };
    XmlTextReader.prototype.c8 = function (a, b) {
        this.dk();
        var c = this.a9[this.b6];
        c.h = this.a5.b(a);
        c.j = stringEmpty();
        c.i = stringEmpty();
        this.dl();
        var d = this.ba[this.b7];
        this.d5(d, 3, stringEmpty(), stringEmpty(), stringEmpty(), false, b, false);
        c.k = b;
        this.b3++;
    };
    XmlTextReader.prototype.dk = function () {
        this.b6++;
        if (this.a9.length == this.b6) {
            var a = new Array(this.a9.length * 2);
            arrayCopyTo(this.a9, a, 0);
            this.a9 = a;
        }
        if (this.a9[this.b6] == null) {
            this.a9[this.b6] = new XmlTextReader_XmlAttributeTokenInfo(this);
        }
        this.ep = this.a9[this.b6];
        this.ep.m();
    };
    XmlTextReader.prototype.dl = function () {
        this.b7++;
        if (this.ba.length == this.b7) {
            var a = new Array(this.ba.length * 2);
            arrayCopyTo(this.ba, a, 0);
            this.ba = a;
        }
        if (this.ba[this.b7] == null) {
            this.ba[this.b7] = new XmlTextReader_XmlTokenInfo(this);
        }
        this.eq = this.ba[this.b7];
        this.eq.m();
    };
    XmlTextReader.prototype.ds = function (a) {
        var b = (a < 0) ? this.cp() : a;
        if (b != '\''.charCodeAt(0) && b != '\"'.charCodeAt(0)) {
            throw this.ee("an attribute value was not quoted");
        }
        this.ep.b = String.fromCharCode(b);
        this.dl();
        this.ep.q = this.b7;
        this.eq.c = this.ce;
        this.eq.d = this.b4;
        var c = false;
        var d = true;
        var e = true;
        var f = 0;
        this.eq.f = this.c7.c;
        L0: while (e) {
            f = this.cp();
            if (f == b) {
                break;
            }
            if (c) {
                this.dl();
                this.eq.f = this.c7.c;
                this.eq.c = this.ce;
                this.eq.d = this.b4;
                c = false;
                d = true;
            }
            var t1 = f;
            L1: while (true) {
                switch (t1) {
                    case '<'.charCodeAt(0): throw this.ee("attribute values cannot contain '<'");
                    case -1:
                        if (a < 0) {
                            throw this.ee("unexpected end of file in an attribute value");
                        }
                        else {
                            e = false;
                        }
                        break;
                    case '\r'.charCodeAt(0):
                        if (!this.bo) {
                            t1 = void 0;
                            continue L1;
                        }
                        if (this.ci() == '\n'.charCodeAt(0)) {
                            continue L0;
                        }
                        if (!this.bo) {
                            t1 = void 0;
                            continue L1;
                        }
                        f = ' '.charCodeAt(0);
                        t1 = void 0;
                        continue L1;
                    case '\n'.charCodeAt(0):
                    case '\t'.charCodeAt(0):
                        if (!this.bo) {
                            t1 = void 0;
                            continue L1;
                        }
                        f = ' '.charCodeAt(0);
                        t1 = void 0;
                        continue L1;
                    case '&'.charCodeAt(0):
                        if (this.ci() == '#'.charCodeAt(0)) {
                            this.c9('#'.charCodeAt(0));
                            f = this.cq();
                            this.db(f);
                            break;
                        }
                        var g = this.c2();
                        this.dg(';'.charCodeAt(0));
                        var h = XmlChar.r(g);
                        if (h < 0) {
                            {
                                this.eq.e = this.c7.c;
                                this.eq.n = 3;
                                if (!d) {
                                    this.dl();
                                }
                                this.eq.h = g;
                                this.eq.k = stringEmpty();
                                this.eq.n = 5;
                                c = true;
                            }
                        }
                        else {
                            this.db(h);
                        }
                        break;
                    default:
                        if (this.bf && XmlChar.f(f)) {
                            throw this.ee("Invalid character was found.");
                        }
                        {
                            if (f <= charMaxValue().charCodeAt(0)) {
                                this.c7.h(String.fromCharCode(f));
                            }
                            else {
                                this.da(f);
                            }
                        }
                        break;
                }
                break;
            }
            d = false;
        }
        if (!c) {
            this.eq.e = this.c7.c;
            this.eq.n = 3;
        }
        this.ep.p = this.b7;
    };
    XmlTextReader.prototype.dz = function () {
        var a = this.c2();
        if (a != "xml" && stringToLocaleLower(a, CultureInfo.invariantCulture) == "xml") {
            throw this.ee("Not allowed processing instruction name which starts with 'X', 'M', 'L' was found.");
        }
        if (!this.b0()) {
            if (this.ci() != '?'.charCodeAt(0)) {
                throw this.ee("Invalid processing instruction name was found.");
            }
        }
        this.df();
        var b;
        while ((b = this.ci()) != -1) {
            this.c9(b);
            if (b == '?'.charCodeAt(0) && this.ci() == '>'.charCodeAt(0)) {
                this.c9('>'.charCodeAt(0));
                break;
            }
            if (this.bf && XmlChar.f(b)) {
                throw this.ee("Invalid character was found.");
            }
            this.db(b);
        }
        if (Base.referenceEquals(a, "xml")) {
            this.d7();
        }
        else {
            if (this.eh == 0) {
                this.eh = 17;
            }
            this.d4(7, a, stringEmpty(), a, false, null, true);
        }
    };
    XmlTextReader.prototype.d7 = function () {
        var _this = this;
        if (!this.be && this.eh != 0) {
            throw this.ee("XML declaration cannot appear in this state.");
        }
        this.eh = 17;
        var a = this.cz();
        this.de();
        var b = 0;
        var c = null, d = null;
        var e, f;
        var g = this.dp(a, b, e, f);
        b = g.p1;
        e = g.p2;
        f = g.p3;
        if (e != "version" || f != "1.0") {
            throw this.ee("'version' is expected.");
        }
        e = stringEmpty();
        if (((function () { var h = _this.b1(a, b); b = h.p1; return h.ret; })()) && b < a.length) {
            var h = this.dp(a, b, e, f);
            b = h.p1;
            e = h.p2;
            f = h.p3;
        }
        if (e == "encoding") {
            if (!XmlChar.o(f)) {
                throw this.ee("'encoding' must be a valid IANA encoding name.");
            }
            if (typeCast(XmlStreamReader.$, this.cy) !== null) {
                this.ej.p = this.cy.aa;
            }
            else {
                if (this.ej.p == null && stringCompare1(f, "UTF-8", 2) == 0) {
                    this.ej.p = Encoding.uTF8;
                }
                else {
                    this.ej.p = Encoding.unicode;
                }
            }
            c = f;
            e = stringEmpty();
            if (((function () { var i = _this.b1(a, b); b = i.p1; return i.ret; })()) && b < a.length) {
                var i = this.dp(a, b, e, f);
                b = i.p1;
                e = i.p2;
                f = i.p3;
            }
        }
        if (e == "standalone") {
            this.bl = f == "yes";
            if (f != "yes" && f != "no") {
                throw this.ee("Only 'yes' or 'no' is allow for 'standalone'");
            }
            d = f;
            var j = this.b1(a, b);
            b = j.p1;
        }
        else if (e.length != 0) {
            throw this.ee(stringFormat("Unexpected token: '{0}'", e));
        }
        if (b < a.length) {
            throw this.ee("'?' is expected.");
        }
        this.c8("version", "1.0");
        if (c != null) {
            this.c8("encoding", c);
        }
        if (d != null) {
            this.c8("standalone", d);
        }
        this.b6 = this.b7 = -1;
        this.d4(17, "xml", stringEmpty(), "xml", false, a, false);
    };
    XmlTextReader.prototype.b1 = function (a, b) {
        var c = b;
        while (b < a.length && XmlChar.p(a.charAt(b).charCodeAt(0))) {
            b++;
        }
        return {
            ret: b - c > 0,
            p1: b
        };
    };
    XmlTextReader.prototype.dp = function (a, b, c, d) {
        while (b < a.length && XmlChar.p(a.charAt(b).charCodeAt(0))) {
            b++;
        }
        var e = b;
        while (b < a.length && XmlChar.h(a.charAt(b).charCodeAt(0))) {
            b++;
        }
        c = a.substr(e, b - e);
        while (b < a.length && XmlChar.p(a.charAt(b).charCodeAt(0))) {
            b++;
        }
        if (b == a.length || a.charAt(b) != '=') {
            throw this.ee(stringFormat("'=' is expected after {0}", c));
        }
        b++;
        while (b < a.length && XmlChar.p(a.charAt(b).charCodeAt(0))) {
            b++;
        }
        if (b == a.length || a.charAt(b) != '\"' && a.charAt(b) != '\'') {
            throw this.ee("'\"' or ''' is expected.");
        }
        var f = a.charAt(b);
        b++;
        e = b;
        while (b < a.length && a.charAt(b) != f) {
            b++;
        }
        b++;
        d = a.substr(e, b - e - 1);
        return {
            p1: b,
            p2: c,
            p3: d
        };
    };
    XmlTextReader.prototype.d6 = function () {
        if (this.ci() != '<'.charCodeAt(0)) {
            return;
        }
        this.cp();
        if (this.ci() != '?'.charCodeAt(0)) {
            this.ck = 0;
            return;
        }
        this.cp();
        while (this.ck < 6) {
            if (this.ci() < 0) {
                break;
            }
            else {
                this.cp();
            }
        }
        if (stringCreateFromCharArraySlice(this.bc, 2, 4) != "xml ") {
            if (stringToLocaleLower(stringCreateFromCharArraySlice(this.bc, 2, 4), CultureInfo.invariantCulture) == "xml ") {
                throw this.ee("Processing instruction name must not be character sequence 'X' 'M' 'L' with case insensitivity.");
            }
            this.ck = 0;
            return;
        }
        this.b0();
        if (this.ci() == 'v'.charCodeAt(0)) {
            this.dh("version");
            this.di('=');
            this.b0();
            var a = this.cp();
            var b = new Array(3);
            var c = 0;
            switch (a) {
                case '\''.charCodeAt(0):
                case '\"'.charCodeAt(0):
                    while (this.ci() != a) {
                        if (this.ci() == -1) {
                            throw this.ee("Invalid version declaration inside text declaration.");
                        }
                        else if (c == 3) {
                            throw this.ee("Invalid version number inside text declaration.");
                        }
                        else {
                            b[c] = String.fromCharCode(this.cp());
                            c++;
                            if (c == 3 && stringCreateFromCharArray(b) != "1.0") {
                                throw this.ee("Invalid version number inside text declaration.");
                            }
                        }
                    }
                    this.cp();
                    this.b0();
                    break;
                default: throw this.ee("Invalid version declaration inside text declaration.");
            }
        }
        if (this.ci() == 'e'.charCodeAt(0)) {
            this.dh("encoding");
            this.di('=');
            this.b0();
            var d = this.cp();
            switch (d) {
                case '\''.charCodeAt(0):
                case '\"'.charCodeAt(0):
                    while (this.ci() != d) {
                        if (this.cp() == -1) {
                            throw this.ee("Invalid encoding declaration inside text declaration.");
                        }
                    }
                    this.cp();
                    this.b0();
                    break;
                default: throw this.ee("Invalid encoding declaration inside text declaration.");
            }
        }
        this.dh("?>");
        this.b5 = this.ck;
    };
    XmlTextReader.prototype.dv = function () {
        var a = this.ci();
        switch (a) {
            case '-'.charCodeAt(0):
                this.dh("--");
                this.du();
                break;
            case '['.charCodeAt(0):
                this.cp();
                this.dh("CDATA[");
                this.dt();
                break;
            case 'D'.charCodeAt(0):
                this.dh("DOCTYPE");
                this.dw();
                break;
            default: throw this.ee("Unexpected declaration markup was found.");
        }
    };
    XmlTextReader.prototype.du = function () {
        if (this.eh == 0) {
            this.eh = 17;
        }
        this.br = false;
        this.df();
        var a;
        while ((a = this.ci()) != -1) {
            this.c9(a);
            if (a == '-'.charCodeAt(0) && this.ci() == '-'.charCodeAt(0)) {
                this.c9('-'.charCodeAt(0));
                if (this.ci() != '>'.charCodeAt(0)) {
                    throw this.ee("comments cannot contain '--'");
                }
                this.c9('>'.charCodeAt(0));
                break;
            }
            if (XmlChar.f(a)) {
                throw this.ee("Not allowed character was found.");
            }
            this.db(a);
        }
        this.d4(8, stringEmpty(), stringEmpty(), stringEmpty(), false, null, true);
    };
    XmlTextReader.prototype.dt = function () {
        if (this.eh != 1) {
            throw this.ee("CDATA section cannot appear in this state.");
        }
        this.br = false;
        this.df();
        var a = false;
        var b = 0;
        while (this.ci() != -1) {
            if (!a) {
                b = this.cp();
            }
            a = false;
            if (b == ']'.charCodeAt(0) && this.ci() == ']'.charCodeAt(0)) {
                b = this.cp();
                if (this.ci() == '>'.charCodeAt(0)) {
                    this.cp();
                    break;
                }
                else {
                    a = true;
                }
            }
            if (this.bo && b == '\r'.charCodeAt(0)) {
                b = this.ci();
                if (b != '\n'.charCodeAt(0)) {
                    this.db('\n'.charCodeAt(0));
                }
                continue;
            }
            if (this.bf && XmlChar.f(b)) {
                throw this.ee("Invalid character was found.");
            }
            {
                if (b <= charMaxValue().charCodeAt(0)) {
                    this.c7.h(String.fromCharCode(b));
                }
                else {
                    this.da(b);
                }
            }
        }
        this.d4(4, stringEmpty(), stringEmpty(), stringEmpty(), false, null, true);
    };
    XmlTextReader.prototype.dw = function () {
        if (this.bs) {
            throw this.ee("Document Type Declaration (DTD) is prohibited in this XML.");
        }
        switch (this.eh) {
            case 10:
            case 1:
            case 15: throw this.ee("Document type cannot appear in this state.");
        }
        this.eh = 10;
        var a = null;
        var b = null;
        var c = null;
        var d = 0;
        var e = 0;
        this.b0();
        a = this.c2();
        this.b0();
        switch (this.ci()) {
            case 'S'.charCodeAt(0):
                c = this.c5(true);
                break;
            case 'P'.charCodeAt(0):
                b = this.c4();
                if (!this.b0()) {
                    throw this.ee("Whitespace is required between PUBLIC id and SYSTEM id.");
                }
                c = this.c5(false);
                break;
        }
        this.b0();
        if (this.ci() == '['.charCodeAt(0)) {
            this.cp();
            d = this.cf;
            e = this.cg;
            this.df();
            this.dy();
            this.ej.h = this.cz();
        }
        this.di('>');
        this.d4(10, a, stringEmpty(), a, false, this.ej.h, true);
        if (b != null) {
            this.c8("PUBLIC", b);
        }
        if (c != null) {
            this.c8("SYSTEM", c);
        }
        this.b6 = this.b7 = -1;
    };
    XmlTextReader.prototype.d8 = function (a, b, c, d) {
        return new DTDObjectModel();
    };
    Object.defineProperty(XmlTextReader.prototype, "en", {
        get: function () {
            return this.eo.c();
        },
        enumerable: true,
        configurable: true
    });
    XmlTextReader.prototype.cv = function () {
        var a = this.cp();
        this.db(a);
        return a;
    };
    XmlTextReader.prototype.dj = function (a) {
        this.dh(a);
        this.c7.l(a);
    };
    XmlTextReader.prototype.dy = function () {
        var a = true;
        L0: while (a) {
            switch (this.cv()) {
                case ']'.charCodeAt(0):
                    switch (this.en) {
                        case 1:
                            this.c7.y(this.c7.c - 1, 1);
                            a = false;
                            break;
                        case 9:
                        case 8:
                        case 7: continue L0;
                        default: throw this.ee("unexpected end of file at DTD.");
                    }
                    break;
                case -1: throw this.ee("unexpected end of file at DTD.");
                case '<'.charCodeAt(0):
                    switch (this.en) {
                        case 9:
                        case 8:
                        case 7: continue L0;
                    }
                    var b = this.cv();
                    switch (b) {
                        case '?'.charCodeAt(0):
                            this.eo.b(6);
                            break;
                        case '!'.charCodeAt(0):
                            switch (this.cv()) {
                                case 'E'.charCodeAt(0):
                                    switch (this.cv()) {
                                        case 'L'.charCodeAt(0):
                                            this.dj("EMENT");
                                            this.eo.b(2);
                                            break;
                                        case 'N'.charCodeAt(0):
                                            this.dj("TITY");
                                            this.eo.b(4);
                                            break;
                                        default: throw this.ee("unexpected token '<!E'.");
                                    }
                                    break;
                                case 'A'.charCodeAt(0):
                                    this.dj("TTLIST");
                                    this.eo.b(3);
                                    break;
                                case 'N'.charCodeAt(0):
                                    this.dj("OTATION");
                                    this.eo.b(5);
                                    break;
                                case '-'.charCodeAt(0):
                                    this.dj("-");
                                    this.eo.b(7);
                                    break;
                            }
                            break;
                        default: throw this.ee(stringFormat("unexpected '<{0}'.", String.fromCharCode(b)));
                    }
                    break;
                case '\''.charCodeAt(0):
                    if (this.en == 8) {
                        this.eo.d();
                    }
                    else if (this.en != 9 && this.en != 7) {
                        this.eo.b(8);
                    }
                    break;
                case '\"'.charCodeAt(0):
                    if (this.en == 9) {
                        this.eo.d();
                    }
                    else if (this.en != 8 && this.en != 7) {
                        this.eo.b(9);
                    }
                    break;
                case '>'.charCodeAt(0):
                    var t1 = this.en;
                    L1: while (true) {
                        switch (t1) {
                            case 2:
                                t1 = 5;
                                continue L1;
                            case 3:
                                t1 = 5;
                                continue L1;
                            case 4:
                                t1 = 5;
                                continue L1;
                            case 5:
                                this.eo.d();
                                break;
                            case 9:
                            case 8:
                            case 7: continue L0;
                            default: throw this.ee("unexpected token '>'");
                        }
                        break;
                    }
                    break;
                case '?'.charCodeAt(0):
                    if (this.en == 6) {
                        if (this.cv() == '>'.charCodeAt(0)) {
                            this.eo.d();
                        }
                    }
                    break;
                case '-'.charCodeAt(0):
                    if (this.en == 7) {
                        if (this.ci() == '-'.charCodeAt(0)) {
                            this.cv();
                            this.dj(">");
                            this.eo.d();
                        }
                    }
                    break;
                case '%'.charCodeAt(0):
                    if (this.en != 1 && this.en != 4 && this.en != 7 && this.en != 9 && this.en != 8) {
                        throw this.ee("Parameter Entity Reference cannot appear as a part of markupdecl (see XML spec 2.8).");
                    }
                    break;
            }
        }
    };
    XmlTextReader.prototype.c5 = function (a) {
        if (a) {
            this.dh("SYSTEM");
            if (!this.b0()) {
                throw this.ee("Whitespace is required after 'SYSTEM'.");
            }
        }
        else {
            this.b0();
        }
        var b = this.cp();
        var c = 0;
        this.df();
        while (c != b) {
            c = this.cp();
            if (c < 0) {
                throw this.ee("Unexpected end of stream in ExternalID.");
            }
            if (c != b) {
                this.db(c);
            }
        }
        return this.cz();
    };
    XmlTextReader.prototype.c4 = function () {
        this.dh("PUBLIC");
        if (!this.b0()) {
            throw this.ee("Whitespace is required after 'PUBLIC'.");
        }
        var a = this.cp();
        var b = 0;
        this.df();
        while (b != a) {
            b = this.cp();
            if (b < 0) {
                throw this.ee("Unexpected end of stream in ExternalID.");
            }
            if (b != a && !XmlChar.m(b)) {
                throw this.ee(stringFormat("character '{0}' not allowed for PUBLIC ID", String.fromCharCode(b)));
            }
            if (b != a) {
                this.db(b);
            }
        }
        return this.cz();
    };
    XmlTextReader.prototype.c2 = function () {
        var _this = this;
        var a, b;
        return ((function () { var c = _this.c3(a, b); a = c.p0; b = c.p1; return c.ret; })());
    };
    XmlTextReader.prototype.c3 = function (a, b) {
        var c = this.br;
        this.br = true;
        var d = this.ck - this.b5;
        var e = this.ci();
        if (!XmlChar.e(e)) {
            throw this.ee(stringFormat2(CultureInfo.invariantCulture, "a name did not start with a legal character {0} ({1})", e, String.fromCharCode(e)));
        }
        this.c9(e);
        var f = 1;
        var g = -1;
        while (XmlChar.h((e = this.ci()))) {
            this.c9(e);
            if (e == ':'.charCodeAt(0) && this.bm && g < 0) {
                g = f;
            }
            f++;
        }
        var h = this.b5 + d;
        var i = this.a5.a(this.bc, h, f);
        if (g > 0) {
            a = this.a5.a(this.bc, h, g);
            b = this.a5.a(this.bc, h + g + 1, f - g - 1);
        }
        else {
            a = stringEmpty();
            b = i;
        }
        this.br = c;
        return {
            ret: i,
            p0: a,
            p1: b
        };
    };
    XmlTextReader.prototype.dg = function (a) {
        var b = this.cp();
        if (b != a) {
            throw this.ee(stringFormat2(CultureInfo.invariantCulture, "expected '{0}' ({1:X}) but found '{2}' ({3:X})", String.fromCharCode(a), a, b < 0 ? "EOF" : String.fromCharCode(b), b));
        }
    };
    XmlTextReader.prototype.dh = function (a) {
        for (var b = 0; b < a.length; b++) {
            if (this.cp() != a.charAt(b).charCodeAt(0)) {
                throw this.ee(stringFormat2(CultureInfo.invariantCulture, "'{0}' is expected", a));
            }
        }
    };
    XmlTextReader.prototype.di = function (a) {
        while (true) {
            var b = this.cp();
            if (b < 33 && XmlChar.p(b)) {
                continue;
            }
            if (a.charCodeAt(0) != b) {
                throw this.ee(stringFormat2(CultureInfo.invariantCulture, "Expected {0}, but found {1} [{2}]", a, b < 0 ? "EOF" : String.fromCharCode(b), b));
            }
            break;
        }
    };
    XmlTextReader.prototype.b0 = function () {
        var a = this.ci();
        var b = (a == 32 || a == 9 || a == 10 || a == 13);
        if (!b) {
            return false;
        }
        this.c9(a);
        while ((a = this.ci()) == 32 || a == 9 || a == 10 || a == 13) {
            this.c9(a);
        }
        return b;
    };
    XmlTextReader.prototype.by = function () {
        if (this.eh == 0) {
            this.eh = 17;
        }
        var a = this.br;
        this.br = true;
        var b = this.ck - this.b5;
        var c = this.ci();
        do {
            this.c9(c);
            c = this.ci();
        } while (c == 32 || c == 9 || c == 10 || c == 13);
        var d = this.eh == 1 && c != -1 && c != '<'.charCodeAt(0);
        if (!d && (this.ec == 2 || this.ec == 1 && this.a8 != 2)) {
            return false;
        }
        this.df();
        this.c7.g(this.bc, this.b5, this.ck - this.b5 - b);
        this.br = a;
        if (d) {
            this.d1(false);
        }
        else {
            var e = (this.a8 == 2) ? 14 : 13;
            this.d4(e, stringEmpty(), stringEmpty(), stringEmpty(), false, null, true);
        }
        return true;
    };
    XmlTextReader.prototype.cs = function (a, b, c) {
        var d = b;
        for (var e = 0; e < c; e++) {
            var f = this.ci();
            switch (f) {
                case -1: throw this.ee("Unexpected end of xml.");
                case '<'.charCodeAt(0):
                    if (e + 1 == c) {
                        return e;
                    }
                    this.c9(f);
                    if (this.ci() != '/'.charCodeAt(0)) {
                        this.ch++;
                        a[d++] = '<';
                        continue;
                    }
                    else if (this.ch-- > 0) {
                        a[d++] = '<';
                        continue;
                    }
                    this.dg('/'.charCodeAt(0));
                    if (this.bj) {
                        this.ca++;
                        this.bj = false;
                    }
                    this.dx();
                    this.bu = false;
                    this.t();
                    return e;
                default:
                    this.c9(f);
                    if (f <= charMaxValue().charCodeAt(0)) {
                        a[d++] = String.fromCharCode(f);
                    }
                    else {
                        a[d++] = String.fromCharCode((intDivide((f - 65536), 1024) + 55296));
                        a[d++] = String.fromCharCode(((f - 65536) % 1024 + 56320));
                    }
                    break;
            }
        }
        return c;
    };
    XmlTextReader.prototype.bx = function () {
        if (this.x == 0) {
            this.eh = 15;
        }
        var a;
        do {
            a = this.cp();
            switch (a) {
                case -1: throw this.ee("Unexpected end of xml.");
                case '<'.charCodeAt(0):
                    if (this.ci() != '/'.charCodeAt(0)) {
                        this.ch++;
                        continue;
                    }
                    else if (--this.ch > 0) {
                        continue;
                    }
                    this.cp();
                    var b = this.c2();
                    if (b != this.bb[this.cc - 1].b) {
                        continue;
                    }
                    this.dg('>'.charCodeAt(0));
                    this.ca--;
                    return this.t();
            }
        } while (true);
    };
    XmlTextReader.$t = markType(XmlTextReader, 'XmlTextReader', XmlReader.$);
    return XmlTextReader;
}(XmlReader));
export { XmlTextReader };
/**
 * @hidden
 */
var XmlTextReader_XmlTokenInfo = /** @class */ (function (_super) {
    tslib_1.__extends(XmlTextReader_XmlTokenInfo, _super);
    function XmlTextReader_XmlTokenInfo(a) {
        var _this = _super.call(this) || this;
        _this.l = null;
        _this.o = null;
        _this.h = null;
        _this.g = null;
        _this.j = null;
        _this.i = null;
        _this.a = false;
        _this.b = '\0';
        _this.c = 0;
        _this.d = 0;
        _this.f = 0;
        _this.e = 0;
        _this.n = 0;
        _this.o = a;
        _this.m();
        return _this;
    }
    XmlTextReader_XmlTokenInfo.prototype.get_k = function () {
        if (this.l == null) {
            if (this.f >= 0) {
                this.l = this.o.c7.f(this.f, this.e - this.f);
            }
            else {
                switch (this.n) {
                    case 3:
                    case 14:
                    case 13:
                    case 8:
                    case 4:
                    case 7:
                        this.l = this.o.cz();
                        break;
                }
            }
        }
        return this.l;
    };
    XmlTextReader_XmlTokenInfo.prototype.set_k = function (a) {
        this.l = a;
    };
    Object.defineProperty(XmlTextReader_XmlTokenInfo.prototype, "k", {
        get: function () {
            return this.get_k();
        },
        set: function (a) {
            this.set_k(a);
        },
        enumerable: true,
        configurable: true
    });
    XmlTextReader_XmlTokenInfo.prototype.m = function () {
        this.f = -1;
        this.l = null;
        this.n = 0;
        this.h = this.g = this.j = this.i = stringEmpty();
        this.a = false;
        this.b = '\"';
        this.c = this.d = 0;
    };
    XmlTextReader_XmlTokenInfo.$t = markType(XmlTextReader_XmlTokenInfo, 'XmlTextReader_XmlTokenInfo');
    return XmlTextReader_XmlTokenInfo;
}(Base));
export { XmlTextReader_XmlTokenInfo };
/**
 * @hidden
 */
var XmlTextReader_XmlAttributeTokenInfo = /** @class */ (function (_super) {
    tslib_1.__extends(XmlTextReader_XmlAttributeTokenInfo, _super);
    function XmlTextReader_XmlAttributeTokenInfo(a) {
        var _this = _super.call(this, a) || this;
        _this.q = 0;
        _this.p = 0;
        _this.r = null;
        _this.s = new StringBuilder(0);
        _this.n = 2;
        return _this;
    }
    XmlTextReader_XmlAttributeTokenInfo.prototype.get_k = function () {
        if (this.r != null) {
            return this.r;
        }
        if (this.q == this.p) {
            var a = this.o.ba[this.q];
            if (a.n == 5) {
                this.r = stringConcat("&", a.h, ";");
            }
            else {
                this.r = a.k;
            }
            return this.r;
        }
        this.s.c = 0;
        for (var b = this.q; b <= this.p; b++) {
            var c = this.o.ba[b];
            if (c.n == 3) {
                this.s.l(c.k);
            }
            else {
                this.s.h('&');
                this.s.l(c.h);
                this.s.h(';');
            }
        }
        this.r = this.s.f(0, this.s.c);
        return this.r;
    };
    XmlTextReader_XmlAttributeTokenInfo.prototype.set_k = function (a) {
        this.r = a;
    };
    XmlTextReader_XmlAttributeTokenInfo.prototype.m = function () {
        _super.prototype.m.call(this);
        this.r = null;
        this.n = 2;
        this.q = this.p = 0;
    };
    XmlTextReader_XmlAttributeTokenInfo.prototype.u = function () {
        if (Base.referenceEquals(this.j, "xmlns")) {
            this.o.ef.x(this.g, this.k);
        }
        else if (Base.referenceEquals(this.h, "xmlns")) {
            this.o.ef.x(stringEmpty(), this.k);
        }
    };
    XmlTextReader_XmlAttributeTokenInfo.prototype.t = function () {
        if (Base.referenceEquals(this.j, "xmlns") || Base.referenceEquals(this.h, "xmlns")) {
            this.i = "http://www.w3.org/2000/xmlns/";
        }
        else if (this.j.length == 0) {
            this.i = stringEmpty();
        }
        else {
            this.i = this.o.c1(this.j, true);
        }
    };
    XmlTextReader_XmlAttributeTokenInfo.$t = markType(XmlTextReader_XmlAttributeTokenInfo, 'XmlTextReader_XmlAttributeTokenInfo', XmlTextReader_XmlTokenInfo.$);
    return XmlTextReader_XmlAttributeTokenInfo;
}(XmlTextReader_XmlTokenInfo));
export { XmlTextReader_XmlAttributeTokenInfo };
//# sourceMappingURL=XmlParserContext_combined.js.map