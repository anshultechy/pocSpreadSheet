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
export class XmlParserContext extends Base {
    constructor(a, ..._rest) {
        super();
        this.c = stringEmpty();
        this.e = stringEmpty();
        this.o = null;
        this.g = stringEmpty();
        this.u = null;
        this.w = null;
        this.i = stringEmpty();
        this.k = stringEmpty();
        this.m = stringEmpty();
        this.y = 0;
        this.a = null;
        this.b = 0;
        this.s = null;
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0:
                {
                    let c = _rest[0];
                    let d = _rest[1];
                    let e = _rest[2];
                    let f = _rest[3];
                    let g = [c, d, null, null, null, null, null, e, f, null];
                    {
                        let i = g[0];
                        let j = g[1];
                        let k = g[2];
                        let l = g[3];
                        let m = g[4];
                        let n = g[5];
                        let o = g[6];
                        let p = g[7];
                        let q = g[8];
                        let r = g[9];
                        let s = [i, j, (k != null && k != stringEmpty()) ? new XmlTextReader(9, TextReader.e, i).d8(k, l, m, n) : null, o, p, q, r];
                        {
                            let u = s[0];
                            let v = s[1];
                            let w = s[2];
                            let x = s[3];
                            let y = s[4];
                            let z = s[5];
                            let aa = s[6];
                            this.u = v;
                            this.w = u != null ? u : v != null ? v.ag : null;
                            if (w != null) {
                                this.f = w.b;
                                this.j = w.c;
                                this.l = w.d;
                                this.h = w.a;
                                this.s = w;
                            }
                            this.o = aa;
                            this.d = x;
                            this.n = y;
                            this.y = z;
                            this.a = arrayListCreate();
                        }
                    }
                }
                break;
            case 1:
                {
                    let c = _rest[0];
                    let d = _rest[1];
                    let e = _rest[2];
                    let f = _rest[3];
                    let g = _rest[4];
                    let h = [c, d, null, null, null, null, null, e, f, g];
                    {
                        let j = h[0];
                        let k = h[1];
                        let l = h[2];
                        let m = h[3];
                        let n = h[4];
                        let o = h[5];
                        let p = h[6];
                        let q = h[7];
                        let r = h[8];
                        let s = h[9];
                        let t = [j, k, (l != null && l != stringEmpty()) ? new XmlTextReader(9, TextReader.e, j).d8(l, m, n, o) : null, p, q, r, s];
                        {
                            let v = t[0];
                            let w = t[1];
                            let x = t[2];
                            let y = t[3];
                            let z = t[4];
                            let aa = t[5];
                            let ab = t[6];
                            this.u = w;
                            this.w = v != null ? v : w != null ? w.ag : null;
                            if (x != null) {
                                this.f = x.b;
                                this.j = x.c;
                                this.l = x.d;
                                this.h = x.a;
                                this.s = x;
                            }
                            this.o = ab;
                            this.d = y;
                            this.n = z;
                            this.y = aa;
                            this.a = arrayListCreate();
                        }
                    }
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
                    let l = [c, d, e, f, g, h, i, j, k, null];
                    {
                        let n = l[0];
                        let o = l[1];
                        let p = l[2];
                        let q = l[3];
                        let r = l[4];
                        let s = l[5];
                        let t = l[6];
                        let u = l[7];
                        let v = l[8];
                        let w = l[9];
                        let x = [n, o, (p != null && p != stringEmpty()) ? new XmlTextReader(9, TextReader.e, n).d8(p, q, r, s) : null, t, u, v, w];
                        {
                            let z = x[0];
                            let aa = x[1];
                            let ab = x[2];
                            let ac = x[3];
                            let ad = x[4];
                            let ae = x[5];
                            let af = x[6];
                            this.u = aa;
                            this.w = z != null ? z : aa != null ? aa.ag : null;
                            if (ab != null) {
                                this.f = ab.b;
                                this.j = ab.c;
                                this.l = ab.d;
                                this.h = ab.a;
                                this.s = ab;
                            }
                            this.o = af;
                            this.d = ac;
                            this.n = ad;
                            this.y = ae;
                            this.a = arrayListCreate();
                        }
                    }
                }
                break;
            case 3:
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
                    let m = [c, d, (e != null && e != stringEmpty()) ? new XmlTextReader(9, TextReader.e, c).d8(e, f, g, h) : null, i, j, k, l];
                    {
                        let o = m[0];
                        let p = m[1];
                        let q = m[2];
                        let r = m[3];
                        let s = m[4];
                        let t = m[5];
                        let u = m[6];
                        this.u = p;
                        this.w = o != null ? o : p != null ? p.ag : null;
                        if (q != null) {
                            this.f = q.b;
                            this.j = q.c;
                            this.l = q.d;
                            this.h = q.a;
                            this.s = q;
                        }
                        this.o = u;
                        this.d = r;
                        this.n = s;
                        this.y = t;
                        this.a = arrayListCreate();
                    }
                }
                break;
            case 4:
                {
                    let c = _rest[0];
                    let d = _rest[1];
                    let e = _rest[2];
                    let f = _rest[3];
                    let g = _rest[4];
                    let h = _rest[5];
                    let i = _rest[6];
                    this.u = d;
                    this.w = c != null ? c : d != null ? d.ag : null;
                    if (e != null) {
                        this.f = e.b;
                        this.j = e.c;
                        this.l = e.d;
                        this.h = e.a;
                        this.s = e;
                    }
                    this.o = i;
                    this.d = f;
                    this.n = g;
                    this.y = h;
                    this.a = arrayListCreate();
                }
                break;
        }
    }
    get d() {
        return this.c;
    }
    set d(a) {
        this.c = a != null ? a : stringEmpty();
    }
    get f() {
        return this.e != null ? this.e : this.s != null ? this.s.b : null;
    }
    set f(a) {
        this.e = a != null ? a : stringEmpty();
    }
    get t() {
        return this.s;
    }
    set t(a) {
        this.s = a;
    }
    get p() {
        return this.o;
    }
    set p(a) {
        this.o = a;
    }
    get h() {
        return this.g != null ? this.g : this.s != null ? this.s.a : null;
    }
    set h(a) {
        this.g = a != null ? a : stringEmpty();
    }
    get v() {
        return this.u;
    }
    set v(a) {
        this.u = a;
    }
    get x() {
        return this.w;
    }
    set x(a) {
        this.w = a;
    }
    get j() {
        return this.i != null ? this.i : this.s != null ? this.s.c : null;
    }
    set j(a) {
        this.i = a != null ? a : stringEmpty();
    }
    get l() {
        return this.k != null ? this.k : this.s != null ? this.s.d : null;
    }
    set l(a) {
        this.k = a != null ? a : stringEmpty();
    }
    get n() {
        return this.m;
    }
    set n(a) {
        this.m = a != null ? a : stringEmpty();
    }
    get z() {
        return this.y;
    }
    set z(a) {
        this.y = a;
    }
    r() {
        let a = null;
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
    }
    q() {
        if (this.b == 0) {
            throw new XmlException(3, "Unexpected end of element scope.");
        }
        this.b--;
        let a = this.a.item(this.b);
        this.c = a.a;
        this.m = a.b;
        this.y = a.c;
    }
}
XmlParserContext.$t = markType(XmlParserContext, 'XmlParserContext');
/**
 * @hidden
 */
export class XmlTextReader extends XmlReader {
    constructor(a, ..._rest) {
        super();
        this.es = null;
        this.er = null;
        this.ep = null;
        this.eq = null;
        this.a9 = new Array(10);
        this.ba = new Array(10);
        this.b6 = 0;
        this.b7 = 0;
        this.b3 = 0;
        this.ej = null;
        this.eg = null;
        this.ef = null;
        this.eb = 0;
        this.bk = false;
        this.ca = 0;
        this.cb = 0;
        this.bj = false;
        this.bq = false;
        this.bb = null;
        this.cc = 0;
        this.be = false;
        this.bl = false;
        this.bz = false;
        this.c0 = null;
        this.c7 = null;
        this.cy = null;
        this.bc = null;
        this.ck = 0;
        this.cl = 0;
        this.b5 = 0;
        this.br = false;
        this.ce = 0;
        this.b4 = 0;
        this.b8 = 0;
        this.b9 = 0;
        this.b2 = false;
        this.ei = 0;
        this.eh = 0;
        this.ch = 0;
        this.bu = false;
        this.bm = true;
        this.ec = 0;
        this.ek = new XmlUrlResolver();
        this.bo = false;
        this.bg = false;
        this.bs = false;
        this.bh = true;
        this.d9 = 0;
        this.ea = null;
        this.bd = null;
        this.eo = new XmlTextReader_DtdInputStateStack();
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0: break;
            case 1:
                {
                    let c = _rest[0];
                    let d = [new XmlStreamReader(1, c)];
                    {
                        let f = d[0];
                        let g = [f, new NameTable()];
                        {
                            let i = g[0];
                            let j = g[1];
                            let k = [stringEmpty(), i, j];
                            {
                                let m = k[0];
                                let n = k[1];
                                let o = k[2];
                                let p = [m, n, 9, null];
                                {
                                    let r = p[0];
                                    let s = p[1];
                                    let t = p[2];
                                    let u = p[3];
                                    this.dn(r, u, s, t);
                                }
                            }
                        }
                    }
                }
                break;
            case 2:
                {
                    let c = _rest[0];
                    let d = [c, new NameTable()];
                    {
                        let f = d[0];
                        let g = d[1];
                        let h;
                        let i = ((() => { let j = this.cw(f, h); h = j.p1; return j.ret; })());
                        let j = new XmlParserContext(0, g, new XmlNamespaceManager(g), stringEmpty(), 0);
                        this.dn(h, j, new XmlStreamReader(1, i), 9);
                    }
                }
                break;
            case 3:
                {
                    let c = _rest[0];
                    let d = [c, new NameTable()];
                    {
                        let f = d[0];
                        let g = d[1];
                        let h = [stringEmpty(), f, g];
                        {
                            let j = h[0];
                            let k = h[1];
                            let l = h[2];
                            let m = [j, k, 9, null];
                            {
                                let o = m[0];
                                let p = m[1];
                                let q = m[2];
                                let r = m[3];
                                this.dn(o, r, p, q);
                            }
                        }
                    }
                }
                break;
            case 4:
                {
                    let c = _rest[0];
                    let d = [stringEmpty(), null, 0, null];
                    {
                        let f = d[0];
                        let g = d[1];
                        let h = d[2];
                        let i = d[3];
                        this.dn(f, i, g, h);
                    }
                }
                break;
            case 5:
                {
                    let c = _rest[0];
                    let d = _rest[1];
                    let e = [new XmlStreamReader(1, c), d];
                    {
                        let g = e[0];
                        let h = e[1];
                        let i = [stringEmpty(), g, h];
                        {
                            let k = i[0];
                            let l = i[1];
                            let m = i[2];
                            let n = [k, l, 9, null];
                            {
                                let p = n[0];
                                let q = n[1];
                                let r = n[2];
                                let s = n[3];
                                this.dn(p, s, q, r);
                            }
                        }
                    }
                }
                break;
            case 6:
                {
                    let c = _rest[0];
                    let d = _rest[1];
                    let e = [c, new XmlStreamReader(1, d)];
                    {
                        let g = e[0];
                        let h = e[1];
                        let i = [g, h, new NameTable()];
                        {
                            let k = i[0];
                            let l = i[1];
                            let m = i[2];
                            let n = [k, l, 9, null];
                            {
                                let p = n[0];
                                let q = n[1];
                                let r = n[2];
                                let s = n[3];
                                this.dn(p, s, q, r);
                            }
                        }
                    }
                }
                break;
            case 7:
                {
                    let c = _rest[0];
                    let d = _rest[1];
                    let e = [c, d, new NameTable()];
                    {
                        let g = e[0];
                        let h = e[1];
                        let i = e[2];
                        let j = [g, h, 9, null];
                        {
                            let l = j[0];
                            let m = j[1];
                            let n = j[2];
                            let o = j[3];
                            this.dn(l, o, m, n);
                        }
                    }
                }
                break;
            case 8:
                {
                    let c = _rest[0];
                    let d = _rest[1];
                    let e;
                    let f = ((() => { let g = this.cw(c, e); e = g.p1; return g.ret; })());
                    let g = new XmlParserContext(0, d, new XmlNamespaceManager(d), stringEmpty(), 0);
                    this.dn(e, g, new XmlStreamReader(1, f), 9);
                }
                break;
            case 9:
                {
                    let c = _rest[0];
                    let d = _rest[1];
                    let e = [stringEmpty(), c, d];
                    {
                        let g = e[0];
                        let h = e[1];
                        let i = e[2];
                        let j = [g, h, 9, null];
                        {
                            let l = j[0];
                            let m = j[1];
                            let n = j[2];
                            let o = j[3];
                            this.dn(l, o, m, n);
                        }
                    }
                }
                break;
            case 10:
                {
                    let c = _rest[0];
                    let d = _rest[1];
                    let e = _rest[2];
                    let f = _rest[3];
                    let g = _rest[4];
                    if (d == null) {
                        d = new XmlUrlResolver();
                    }
                    this.em = d;
                    let h;
                    let i = ((() => { let j = this.cw(e, h); h = j.p1; return j.ret; })());
                    this.dn(h, g, new XmlStreamReader(1, i), f);
                }
                break;
            case 11:
                {
                    let c = _rest[0];
                    let d = _rest[1];
                    let e = _rest[2];
                    let f = [e != null ? e.d : stringEmpty(), new XmlStreamReader(1, c), d, e];
                    {
                        let h = f[0];
                        let i = f[1];
                        let j = f[2];
                        let k = f[3];
                        this.dn(h, k, i, j);
                    }
                    this.bk = true;
                }
                break;
            case 12:
                {
                    let c = _rest[0];
                    let d = _rest[1];
                    let e = _rest[2];
                    let f = [c, d, e, null];
                    {
                        let h = f[0];
                        let i = f[1];
                        let j = f[2];
                        let k = f[3];
                        this.dn(h, k, i, j);
                    }
                }
                break;
            case 13:
                {
                    let c = _rest[0];
                    let d = _rest[1];
                    let e = _rest[2];
                    let f = [c, new XmlStreamReader(1, d), e];
                    {
                        let h = f[0];
                        let i = f[1];
                        let j = f[2];
                        let k = [h, i, 9, null];
                        {
                            let m = k[0];
                            let n = k[1];
                            let o = k[2];
                            let p = k[3];
                            this.dn(m, p, n, o);
                        }
                    }
                }
                break;
            case 14:
                {
                    let c = _rest[0];
                    let d = _rest[1];
                    let e = _rest[2];
                    let f = [c, d, 9, null];
                    {
                        let h = f[0];
                        let i = f[1];
                        let j = f[2];
                        let k = f[3];
                        this.dn(h, k, i, j);
                    }
                }
                break;
            case 15:
                {
                    let c = _rest[0];
                    let d = _rest[1];
                    let e = _rest[2];
                    let f = [e != null ? e.d : stringEmpty(), new StringReader(c), d, e];
                    {
                        let h = f[0];
                        let i = f[1];
                        let j = f[2];
                        let k = f[3];
                        this.dn(h, k, i, j);
                    }
                    this.bk = true;
                }
                break;
            case 16:
                {
                    let c = _rest[0];
                    let d = _rest[1];
                    let e = _rest[2];
                    let f = _rest[3];
                    this.dn(c, f, d, e);
                }
                break;
        }
    }
    cw(a, b) {
        let c = this.ek.d(null, a);
        b = c != null ? c.toString() : stringEmpty();
        return {
            ret: typeCast(Stream.$, this.ek.b(c, null, Stream.$)),
            p1: b
        };
    }
    get_w() {
        return this.b3;
    }
    get w() {
        return this.get_w();
    }
    get_z() {
        return this.ej.d;
    }
    get z() {
        return this.get_z();
    }
    get_a() {
        return true;
    }
    get_b() {
        return true;
    }
    get bf() {
        return this.bg;
    }
    set bf(a) {
        this.bg = a;
    }
    get bi() {
        return this.bh;
    }
    set bi(a) {
        this.bh = a;
    }
    get_x() {
        let a = this.er.n == 1 ? 0 : -1;
        if (this.b7 >= 0) {
            return a + this.cb + 2;
        }
        else if (this.b6 >= 0) {
            return a + this.cb + 1;
        }
        return this.cb;
    }
    get x() {
        return this.get_x();
    }
    get c6() {
        return this.ej.p || Encoding.uTF8;
    }
    get_d() {
        return this.eb == 3;
    }
    get d() {
        return this.get_d();
    }
    get_f() {
        return this.es.k != null;
    }
    get f() {
        return this.get_f();
    }
    get_h() {
        return false;
    }
    get h() {
        return this.get_h();
    }
    get_i() {
        return this.es.a;
    }
    get i() {
        return this.get_i();
    }
    item(a) {
        return this.aa(a);
    }
    item1(a) {
        return this.ab(a);
    }
    item2(a, b) {
        return this.ac(a, b);
    }
    get cf() {
        if (this.b2) {
            return this.ce;
        }
        else {
            return this.es.c;
        }
    }
    get cg() {
        if (this.b2) {
            return this.b4;
        }
        else {
            return this.es.d;
        }
    }
    get_ag() {
        return this.es.g;
    }
    get ag() {
        return this.get_ag();
    }
    get_ai() {
        return this.es.h;
    }
    get ai() {
        return this.get_ai();
    }
    get bn() {
        return this.bm;
    }
    set bn(a) {
        if (this.eb != 0) {
            throw new InvalidOperationException(1, "Namespaces have to be set before reading.");
        }
        this.bm = a;
    }
    get_aj() {
        return this.es.i;
    }
    get aj() {
        return this.get_aj();
    }
    get_a5() {
        return this.eg;
    }
    get a5() {
        return this.get_a5();
    }
    get_a7() {
        return this.es.n;
    }
    get a7() {
        return this.get_a7();
    }
    get bp() {
        return this.bo;
    }
    set bp(a) {
        this.bo = a;
    }
    get_ak() {
        return this.es.j;
    }
    get ak() {
        return this.get_ak();
    }
    get bt() {
        return this.bs;
    }
    set bt(a) {
        this.bs = a;
    }
    get_v() {
        return this.es.b;
    }
    get v() {
        return this.get_v();
    }
    get_a3() {
        return this.eb;
    }
    get a3() {
        return this.get_a3();
    }
    get_ar() {
        return this.es.k != null ? this.es.k : stringEmpty();
    }
    get ar() {
        return this.get_ar();
    }
    get ed() {
        return this.ec;
    }
    set ed(a) {
        this.ec = a;
    }
    get_as() {
        return this.ej.n;
    }
    get as() {
        return this.get_as();
    }
    set em(a) {
        this.ek = a;
    }
    get_a8() {
        return this.ej.z;
    }
    get a8() {
        return this.get_a8();
    }
    au() {
        this.eb = 4;
        this.es.m();
        this.er.m();
        this.b3 = 0;
        if (this.bh && this.cy != null) {
            this.cy.i();
        }
    }
    aa(a) {
        if (a >= this.b3) {
            throw new ArgumentOutOfRangeException(1, "i is smaller than AttributeCount");
        }
        else {
            return this.a9[a].k;
        }
    }
    ab(a) {
        for (let b = 0; b < this.b3; b++) {
            if (this.a9[b].h == a) {
                return this.a9[b].k;
            }
        }
        return null;
    }
    cd(a, b) {
        b = b != null ? b : stringEmpty();
        for (let c = 0; c < this.b3; c++) {
            let d = this.a9[c];
            if (d.g == a && d.i == b) {
                return c;
            }
        }
        return -1;
    }
    ac(a, b) {
        let c = this.cd(a, b);
        if (c < 0) {
            return null;
        }
        return this.a9[c].k;
    }
    cx() {
        if (this.cl < 0) {
            return this.cy;
        }
        return new StringReader(stringCreateFromCharArraySlice(this.bc, this.ck, this.cl - this.ck) + this.cy.h());
    }
    ah(a) {
        return this.c1(a, false);
    }
    c1(a, b) {
        let c = this.ef.lookupNamespace1(a, b);
        return c == stringEmpty() ? null : c;
    }
    aw(a) {
        if (a >= this.b3) {
            throw new ArgumentOutOfRangeException(1, "attribute index out of range.");
        }
        this.b6 = a;
        this.b7 = -1;
        this.es = this.a9[a];
    }
    o(a) {
        for (let b = 0; b < this.b3; b++) {
            let c = this.a9[b];
            if (c.h == a) {
                this.aw(b);
                return true;
            }
        }
        return false;
    }
    p(a, b) {
        let c = this.cd(a, b);
        if (c < 0) {
            return false;
        }
        this.aw(c);
        return true;
    }
    q() {
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
    }
    r() {
        if (this.b3 == 0) {
            return false;
        }
        this.q();
        return this.s();
    }
    s() {
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
    }
    t() {
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
        let a = false;
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
    }
    u() {
        if (this.eb == 0 && this.ei == 2) {
            this.t();
        }
        if (this.b6 < 0) {
            return false;
        }
        let a = this.a9[this.b6];
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
    }
    cn(a, b, c) {
        return 0;
    }
    co(a, b, c) {
        return 0;
    }
    cr(a, b, c) {
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
    }
    d2() {
        if (this.bk) {
            throw new InvalidOperationException(1, "Cannot call ResetState when parsing an XML fragment.");
        }
        this.dd();
    }
    a1() {
        throw new InvalidOperationException(1, "XmlTextReader cannot resolve external entities.");
    }
    get el() {
        return this.ek;
    }
    ee(a) {
        return new XmlException(2, typeCast(IXmlLineInfo_$type, this), this.z, a);
    }
    initXmlTextReader() {
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
    }
    dd() {
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
    }
    dn(a, b, c, d) {
        this.ei = d;
        this.ej = b;
        if (b == null) {
            let e = new NameTable();
            this.ej = new XmlParserContext(0, e, new XmlNamespaceManager(e), stringEmpty(), 0);
        }
        this.eg = this.ej.x;
        this.eg = this.eg != null ? this.eg : new NameTable();
        this.ef = this.ej.v;
        this.ef = this.ef != null ? this.ef : new XmlNamespaceManager(this.eg);
        if (a != null && a.length > 0) {
            let f = null;
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
    }
    d4(a, b, c, d, e, f, g) {
        this.d5(this.er, a, b, c, d, e, f, g);
        this.er.c = this.b8;
        this.er.d = this.b9;
    }
    d5(a, b, c, d, e, f, g, h) {
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
    }
    de() {
        this.b3 = 0;
        this.b6 = -1;
        this.b7 = -1;
    }
    cm(a) {
        if (this.cl <= this.ck + 1) {
            if (!this.bw(a)) {
                return a;
            }
        }
        let b = this.bc[this.ck].charCodeAt(0);
        let c = this.bc[this.ck + 1].charCodeAt(0);
        if (((b & 64512) != 55296) || ((c & 64512) != 56320)) {
            return b;
        }
        return 65536 + (b - 55296) * 1024 + (c - 56320);
    }
    ci() {
        if (this.ck < this.cl) {
            let a = this.bc[this.ck].charCodeAt(0);
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
    }
    cp() {
        let a = this.ci();
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
    }
    c9(a) {
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
    }
    bw(a) {
        if (this.cl < 0) {
            this.cl = this.cy.c(this.bc, 0, this.bc.length);
            return this.cl > 0;
        }
        let b = a >= 0 ? 1 : 0;
        let c = this.cl - this.b5;
        if (!this.br) {
            this.b5 = 0;
            this.ck = 0;
        }
        else if (this.cl < this.bc.length) {
        }
        else if (this.b5 <= (this.cl >> 1)) {
            let d = new Array(this.bc.length * 2);
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
        let e = this.bc.length - this.ck - b;
        if (e > 1024) {
            e = 1024;
        }
        let f = this.cy.c(this.bc, this.ck + b, e);
        let g = b + f;
        this.cl = this.ck + g;
        return (g != 0);
    }
    bv() {
        if (this.bq) {
            this.ef.h();
            this.ej.q();
            this.bq = false;
        }
        if (this.bz) {
            this.d3();
        }
        else {
            let a = this.ci();
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
    }
    d3() {
        this.df();
        this.d4(5, this.c0, stringEmpty(), this.c0, false, null, true);
        this.bz = false;
        this.c0 = stringEmpty();
    }
    d0() {
        if (this.eh == 15) {
            throw this.ee("Multiple document element was detected.");
        }
        this.eh = 1;
        this.ef.ac();
        this.b8 = this.ce;
        this.b9 = this.b4;
        let a, b;
        let c = ((() => { let d = this.c3(a, b); a = d.p0; b = d.p1; return d.ret; })());
        if (this.eh == 15) {
            throw this.ee("document has terminated, cannot open new element");
        }
        let d = false;
        this.de();
        this.b0();
        if (XmlChar.e(this.ci())) {
            this.dr(false);
        }
        this.es = this.er;
        for (let e = 0; e < this.b3; e++) {
            this.a9[e].u();
        }
        for (let f = 0; f < this.b3; f++) {
            this.a9[f].t();
        }
        if (this.bm) {
            for (let g = 0; g < this.b3; g++) {
                if (this.a9[g].j == "xmlns" && this.a9[g].k == stringEmpty()) {
                    throw this.ee("Empty namespace URI cannot be mapped to non-empty prefix.");
                }
            }
        }
        for (let h = 0; h < this.b3; h++) {
            for (let i = h + 1; i < this.b3; i++) {
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
                for (let j = 0; j < this.b3; j++) {
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
        for (let k = 0; k < this.b3; k++) {
            if (!Base.referenceEquals(this.a9[k].j, "xml")) {
                continue;
            }
            let l = this.a9[k].g;
            let m = this.a9[k].k;
            switch (l) {
                case "base":
                    if (this.ek != null) {
                        let n = this.z != stringEmpty() ? new Uri(0, this.z) : null;
                        if (n == null && stringIsNullOrEmpty(m)) {
                            break;
                        }
                        let o = this.ek.d(n, m);
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
    }
    dq(a, b, c) {
        if (this.bb.length == this.cc) {
            let d = new Array(this.bb.length * 2);
            arrayCopy1(this.bb, 0, d, 0, this.cc);
            this.bb = d;
        }
        this.bb[this.cc++] = new XmlTextReader_TagName(1, a, b, c);
    }
    dx() {
        if (this.eh != 1) {
            throw this.ee("End tag cannot appear in this state.");
        }
        this.b8 = this.ce;
        this.b9 = this.b4;
        if (this.cc == 0) {
            throw this.ee("closing element without matching opening element");
        }
        let a = this.bb[--this.cc];
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
    }
    dc() {
        if (this.ca == 0 && !this.be && (this.i || this.a7 == 15)) {
            this.eh = 15;
        }
    }
    db(a) {
        if (a <= charMaxValue().charCodeAt(0)) {
            this.c7.h(String.fromCharCode(a));
        }
        else {
            this.da(a);
        }
    }
    da(a) {
        this.c7.h(String.fromCharCode((intDivide((a - 65536), 1024) + 55296)));
        this.c7.h(String.fromCharCode(((a - 65536) % 1024 + 56320)));
    }
    cz() {
        switch (this.a7) {
            case 13:
            case 14:
                let a = this.c7.c;
                if (this.bd == null) {
                    this.bd = new Array(32);
                }
                if (a >= this.bd.length) {
                    break;
                }
                if (this.ea == null) {
                    this.ea = new NameTable();
                }
                for (let b = 0; b < a; b++) {
                    this.bd[b] = this.c7.item(b);
                }
                return this.ea.a(this.bd, 0, this.c7.c);
        }
        return (this.c7.b < 100) ? this.c7.f(0, this.c7.c) : this.c7.toString();
    }
    df() {
        this.c7.c = 0;
    }
    d1(a) {
        if (this.eh != 1) {
            throw this.ee("Text node cannot appear in this state.");
        }
        this.br = false;
        if (a) {
            this.df();
        }
        let b = this.ci();
        let c = false;
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
            let d = a ? 3 : this.a8 == 2 ? 14 : 13;
            this.d4(d, stringEmpty(), stringEmpty(), stringEmpty(), false, null, true);
        }
    }
    cu(a) {
        if (this.ci() == '#'.charCodeAt(0)) {
            this.c9('#'.charCodeAt(0));
            return this.cq();
        }
        else {
            return this.ct(a);
        }
    }
    cq() {
        let a = 0;
        let b;
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
    }
    ct(a) {
        let b = this.c2();
        this.dg(';'.charCodeAt(0));
        let c = XmlChar.r(b);
        if (c >= 0) {
            return c;
        }
        else {
            if (a) {
                this.db('&'.charCodeAt(0));
                for (let d = 0; d < b.length; d++) {
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
    }
    dr(a) {
        let b = -1;
        let c = false;
        this.b6 = -1;
        this.b7 = -1;
        do {
            if (!this.b0() && c) {
                throw this.ee("Unexpected token. Name is required here.");
            }
            this.dk();
            this.ep.c = this.ce;
            this.ep.d = this.b4;
            let d, e;
            this.ep.h = ((() => { let f = this.c3(d, e); d = f.p0; e = f.p1; return f.ret; })());
            this.ep.j = d;
            this.ep.g = e;
            this.di('=');
            this.b0();
            this.ds(-1);
            let f;
            if (a) {
                f = this.ep.k;
            }
            this.b3++;
            if (!this.b0()) {
                c = true;
            }
            b = this.ci();
            if (a) {
                if (b == '?'.charCodeAt(0)) {
                    break;
                }
            }
            else if (b == '/'.charCodeAt(0) || b == '>'.charCodeAt(0)) {
                break;
            }
        } while (b != -1);
        this.b6 = -1;
        this.b7 = -1;
    }
    c8(a, b) {
        this.dk();
        let c = this.a9[this.b6];
        c.h = this.a5.b(a);
        c.j = stringEmpty();
        c.i = stringEmpty();
        this.dl();
        let d = this.ba[this.b7];
        this.d5(d, 3, stringEmpty(), stringEmpty(), stringEmpty(), false, b, false);
        c.k = b;
        this.b3++;
    }
    dk() {
        this.b6++;
        if (this.a9.length == this.b6) {
            let a = new Array(this.a9.length * 2);
            arrayCopyTo(this.a9, a, 0);
            this.a9 = a;
        }
        if (this.a9[this.b6] == null) {
            this.a9[this.b6] = new XmlTextReader_XmlAttributeTokenInfo(this);
        }
        this.ep = this.a9[this.b6];
        this.ep.m();
    }
    dl() {
        this.b7++;
        if (this.ba.length == this.b7) {
            let a = new Array(this.ba.length * 2);
            arrayCopyTo(this.ba, a, 0);
            this.ba = a;
        }
        if (this.ba[this.b7] == null) {
            this.ba[this.b7] = new XmlTextReader_XmlTokenInfo(this);
        }
        this.eq = this.ba[this.b7];
        this.eq.m();
    }
    ds(a) {
        let b = (a < 0) ? this.cp() : a;
        if (b != '\''.charCodeAt(0) && b != '\"'.charCodeAt(0)) {
            throw this.ee("an attribute value was not quoted");
        }
        this.ep.b = String.fromCharCode(b);
        this.dl();
        this.ep.q = this.b7;
        this.eq.c = this.ce;
        this.eq.d = this.b4;
        let c = false;
        let d = true;
        let e = true;
        let f = 0;
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
            let t1 = f;
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
                        let g = this.c2();
                        this.dg(';'.charCodeAt(0));
                        let h = XmlChar.r(g);
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
    }
    dz() {
        let a = this.c2();
        if (a != "xml" && stringToLocaleLower(a, CultureInfo.invariantCulture) == "xml") {
            throw this.ee("Not allowed processing instruction name which starts with 'X', 'M', 'L' was found.");
        }
        if (!this.b0()) {
            if (this.ci() != '?'.charCodeAt(0)) {
                throw this.ee("Invalid processing instruction name was found.");
            }
        }
        this.df();
        let b;
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
    }
    d7() {
        if (!this.be && this.eh != 0) {
            throw this.ee("XML declaration cannot appear in this state.");
        }
        this.eh = 17;
        let a = this.cz();
        this.de();
        let b = 0;
        let c = null, d = null;
        let e, f;
        let g = this.dp(a, b, e, f);
        b = g.p1;
        e = g.p2;
        f = g.p3;
        if (e != "version" || f != "1.0") {
            throw this.ee("'version' is expected.");
        }
        e = stringEmpty();
        if (((() => { let h = this.b1(a, b); b = h.p1; return h.ret; })()) && b < a.length) {
            let h = this.dp(a, b, e, f);
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
            if (((() => { let i = this.b1(a, b); b = i.p1; return i.ret; })()) && b < a.length) {
                let i = this.dp(a, b, e, f);
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
            let j = this.b1(a, b);
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
    }
    b1(a, b) {
        let c = b;
        while (b < a.length && XmlChar.p(a.charAt(b).charCodeAt(0))) {
            b++;
        }
        return {
            ret: b - c > 0,
            p1: b
        };
    }
    dp(a, b, c, d) {
        while (b < a.length && XmlChar.p(a.charAt(b).charCodeAt(0))) {
            b++;
        }
        let e = b;
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
        let f = a.charAt(b);
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
    }
    d6() {
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
            let a = this.cp();
            let b = new Array(3);
            let c = 0;
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
            let d = this.cp();
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
    }
    dv() {
        let a = this.ci();
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
    }
    du() {
        if (this.eh == 0) {
            this.eh = 17;
        }
        this.br = false;
        this.df();
        let a;
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
    }
    dt() {
        if (this.eh != 1) {
            throw this.ee("CDATA section cannot appear in this state.");
        }
        this.br = false;
        this.df();
        let a = false;
        let b = 0;
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
    }
    dw() {
        if (this.bs) {
            throw this.ee("Document Type Declaration (DTD) is prohibited in this XML.");
        }
        switch (this.eh) {
            case 10:
            case 1:
            case 15: throw this.ee("Document type cannot appear in this state.");
        }
        this.eh = 10;
        let a = null;
        let b = null;
        let c = null;
        let d = 0;
        let e = 0;
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
    }
    d8(a, b, c, d) {
        return new DTDObjectModel();
    }
    get en() {
        return this.eo.c();
    }
    cv() {
        let a = this.cp();
        this.db(a);
        return a;
    }
    dj(a) {
        this.dh(a);
        this.c7.l(a);
    }
    dy() {
        let a = true;
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
                    let b = this.cv();
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
                    let t1 = this.en;
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
    }
    c5(a) {
        if (a) {
            this.dh("SYSTEM");
            if (!this.b0()) {
                throw this.ee("Whitespace is required after 'SYSTEM'.");
            }
        }
        else {
            this.b0();
        }
        let b = this.cp();
        let c = 0;
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
    }
    c4() {
        this.dh("PUBLIC");
        if (!this.b0()) {
            throw this.ee("Whitespace is required after 'PUBLIC'.");
        }
        let a = this.cp();
        let b = 0;
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
    }
    c2() {
        let a, b;
        return ((() => { let c = this.c3(a, b); a = c.p0; b = c.p1; return c.ret; })());
    }
    c3(a, b) {
        let c = this.br;
        this.br = true;
        let d = this.ck - this.b5;
        let e = this.ci();
        if (!XmlChar.e(e)) {
            throw this.ee(stringFormat2(CultureInfo.invariantCulture, "a name did not start with a legal character {0} ({1})", e, String.fromCharCode(e)));
        }
        this.c9(e);
        let f = 1;
        let g = -1;
        while (XmlChar.h((e = this.ci()))) {
            this.c9(e);
            if (e == ':'.charCodeAt(0) && this.bm && g < 0) {
                g = f;
            }
            f++;
        }
        let h = this.b5 + d;
        let i = this.a5.a(this.bc, h, f);
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
    }
    dg(a) {
        let b = this.cp();
        if (b != a) {
            throw this.ee(stringFormat2(CultureInfo.invariantCulture, "expected '{0}' ({1:X}) but found '{2}' ({3:X})", String.fromCharCode(a), a, b < 0 ? "EOF" : String.fromCharCode(b), b));
        }
    }
    dh(a) {
        for (let b = 0; b < a.length; b++) {
            if (this.cp() != a.charAt(b).charCodeAt(0)) {
                throw this.ee(stringFormat2(CultureInfo.invariantCulture, "'{0}' is expected", a));
            }
        }
    }
    di(a) {
        while (true) {
            let b = this.cp();
            if (b < 33 && XmlChar.p(b)) {
                continue;
            }
            if (a.charCodeAt(0) != b) {
                throw this.ee(stringFormat2(CultureInfo.invariantCulture, "Expected {0}, but found {1} [{2}]", a, b < 0 ? "EOF" : String.fromCharCode(b), b));
            }
            break;
        }
    }
    b0() {
        let a = this.ci();
        let b = (a == 32 || a == 9 || a == 10 || a == 13);
        if (!b) {
            return false;
        }
        this.c9(a);
        while ((a = this.ci()) == 32 || a == 9 || a == 10 || a == 13) {
            this.c9(a);
        }
        return b;
    }
    by() {
        if (this.eh == 0) {
            this.eh = 17;
        }
        let a = this.br;
        this.br = true;
        let b = this.ck - this.b5;
        let c = this.ci();
        do {
            this.c9(c);
            c = this.ci();
        } while (c == 32 || c == 9 || c == 10 || c == 13);
        let d = this.eh == 1 && c != -1 && c != '<'.charCodeAt(0);
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
            let e = (this.a8 == 2) ? 14 : 13;
            this.d4(e, stringEmpty(), stringEmpty(), stringEmpty(), false, null, true);
        }
        return true;
    }
    cs(a, b, c) {
        let d = b;
        for (let e = 0; e < c; e++) {
            let f = this.ci();
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
    }
    bx() {
        if (this.x == 0) {
            this.eh = 15;
        }
        let a;
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
                    let b = this.c2();
                    if (b != this.bb[this.cc - 1].b) {
                        continue;
                    }
                    this.dg('>'.charCodeAt(0));
                    this.ca--;
                    return this.t();
            }
        } while (true);
    }
}
XmlTextReader.$t = markType(XmlTextReader, 'XmlTextReader', XmlReader.$);
/**
 * @hidden
 */
export class XmlTextReader_XmlTokenInfo extends Base {
    constructor(a) {
        super();
        this.l = null;
        this.o = null;
        this.h = null;
        this.g = null;
        this.j = null;
        this.i = null;
        this.a = false;
        this.b = '\0';
        this.c = 0;
        this.d = 0;
        this.f = 0;
        this.e = 0;
        this.n = 0;
        this.o = a;
        this.m();
    }
    get_k() {
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
    }
    set_k(a) {
        this.l = a;
    }
    get k() {
        return this.get_k();
    }
    set k(a) {
        this.set_k(a);
    }
    m() {
        this.f = -1;
        this.l = null;
        this.n = 0;
        this.h = this.g = this.j = this.i = stringEmpty();
        this.a = false;
        this.b = '\"';
        this.c = this.d = 0;
    }
}
XmlTextReader_XmlTokenInfo.$t = markType(XmlTextReader_XmlTokenInfo, 'XmlTextReader_XmlTokenInfo');
/**
 * @hidden
 */
export class XmlTextReader_XmlAttributeTokenInfo extends XmlTextReader_XmlTokenInfo {
    constructor(a) {
        super(a);
        this.q = 0;
        this.p = 0;
        this.r = null;
        this.s = new StringBuilder(0);
        this.n = 2;
    }
    get_k() {
        if (this.r != null) {
            return this.r;
        }
        if (this.q == this.p) {
            let a = this.o.ba[this.q];
            if (a.n == 5) {
                this.r = stringConcat("&", a.h, ";");
            }
            else {
                this.r = a.k;
            }
            return this.r;
        }
        this.s.c = 0;
        for (let b = this.q; b <= this.p; b++) {
            let c = this.o.ba[b];
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
    }
    set_k(a) {
        this.r = a;
    }
    m() {
        super.m();
        this.r = null;
        this.n = 2;
        this.q = this.p = 0;
    }
    u() {
        if (Base.referenceEquals(this.j, "xmlns")) {
            this.o.ef.x(this.g, this.k);
        }
        else if (Base.referenceEquals(this.h, "xmlns")) {
            this.o.ef.x(stringEmpty(), this.k);
        }
    }
    t() {
        if (Base.referenceEquals(this.j, "xmlns") || Base.referenceEquals(this.h, "xmlns")) {
            this.i = "http://www.w3.org/2000/xmlns/";
        }
        else if (this.j.length == 0) {
            this.i = stringEmpty();
        }
        else {
            this.i = this.o.c1(this.j, true);
        }
    }
}
XmlTextReader_XmlAttributeTokenInfo.$t = markType(XmlTextReader_XmlAttributeTokenInfo, 'XmlTextReader_XmlAttributeTokenInfo', XmlTextReader_XmlTokenInfo.$);
//# sourceMappingURL=XmlParserContext_combined.js.map