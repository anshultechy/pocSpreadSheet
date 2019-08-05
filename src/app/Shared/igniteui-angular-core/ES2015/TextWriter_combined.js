//
// System.IO.TextWriter.cs
//
// Authors:
//   Marcin Szczepanski (marcins@zipworld.com.au)
//   Miguel de Icaza (miguel@gnome.org)
//   Paolo Molaro (lupus@ximian.com)
//
//
// Copyright (C) 2004 Novell, Inc (http://www.novell.com)
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
import { MarshalByRefObject } from "./MarshalByRefObject";
import { IDisposable_$type, callStaticConstructors, typeCast, markType } from "./type";
import { Encoding } from "./Encoding";
import { Environment } from "./Environment";
import { ArgumentNullException } from "./ArgumentNullException";
import { ArgumentOutOfRangeException } from "./ArgumentOutOfRangeException";
import { stringToCharArray, stringCreateFromCharArray } from "./string";
import { numberToString, intToString } from "./numberExtended";
import { stringFormat, stringFormat1 } from "./stringExtended";
/**
 * @hidden
 */
export class TextWriter extends MarshalByRefObject {
    constructor(a, ..._rest) {
        super();
        this.a = null;
        this.c = null;
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0:
                {
                    this.a = stringToCharArray(Environment.newLine);
                }
                break;
            case 1:
                {
                    let c = _rest[0];
                    this.a = stringToCharArray(Environment.newLine);
                    this.c = c;
                }
                break;
        }
    }
    static staticInit() {
        TextWriter.d = new TextWriter_NullTextWriter();
    }
    get_b() {
        return this.c;
    }
    get b() {
        return this.get_b();
    }
    get_g() {
        return stringCreateFromCharArray(this.a);
    }
    set_g(a) {
        if (a == null) {
            a = Environment.newLine;
        }
        this.a = stringToCharArray(a);
    }
    get g() {
        return this.get_g();
    }
    set g(a) {
        this.set_g(a);
    }
    i() {
        this.dispose1(true);
    }
    dispose1(a) {
        if (a) {
        }
    }
    dispose() {
        this.dispose1(true);
    }
    k() {
    }
    static e(a) {
        return TextWriter.f(a, false);
    }
    static f(a, b) {
        if (a == null) {
            throw new ArgumentNullException(0, "writer is null");
        }
        if (typeCast(SynchronizedWriter.$, a) !== null) {
            return a;
        }
        return new SynchronizedWriter(1, a, b);
    }
    n(a) {
        this.v(a.toString());
    }
    o(a) {
    }
    l(a) {
        if (a == null) {
            return;
        }
        this.m(a, 0, a.length);
    }
    p(a) {
        this.v(numberToString(a, this.c));
    }
    q(a) {
        this.v(numberToString(a, this.c));
    }
    r(a) {
        this.v(numberToString(a, this.c));
    }
    s(a) {
        this.v(numberToString(a, this.c));
    }
    t(a) {
        if (a != null) {
            this.v(a.toString());
        }
    }
    u(a) {
        this.v(numberToString(a, this.c));
    }
    v(a) {
        if (a != null) {
            this.l(stringToCharArray(a));
        }
    }
    aa(a) {
        this.v(intToString(a, this.c));
    }
    ab(a) {
        this.v(numberToString(a, this.c));
    }
    x(a, b) {
        this.v(stringFormat(a, b));
    }
    w(a, ...b) {
        this.v(stringFormat1(a, ...b));
    }
    m(a, b, c) {
        if (a == null) {
            throw new ArgumentNullException(0, "buffer");
        }
        if (b < 0 || b > a.length) {
            throw new ArgumentOutOfRangeException(1, "index");
        }
        if (c < 0 || (b > a.length - c)) {
            throw new ArgumentOutOfRangeException(1, "count");
        }
        for (; c > 0; --c, ++b) {
            this.o(a[b]);
        }
    }
    y(a, b, c) {
        this.v(stringFormat(a, b, c));
    }
    z(a, b, c, d) {
        this.v(stringFormat(a, b, c, d));
    }
    ac() {
        this.l(this.a);
    }
    af(a) {
        this.n(a);
        this.ac();
    }
    ag(a) {
        this.o(a);
        this.ac();
    }
    ad(a) {
        this.l(a);
        this.ac();
    }
    ah(a) {
        this.p(a);
        this.ac();
    }
    ai(a) {
        this.q(a);
        this.ac();
    }
    aj(a) {
        this.r(a);
        this.ac();
    }
    ak(a) {
        this.s(a);
        this.ac();
    }
    al(a) {
        this.t(a);
        this.ac();
    }
    am(a) {
        this.u(a);
        this.ac();
    }
    an(a) {
        this.v(a);
        this.ac();
    }
    as(a) {
        this.aa(a);
        this.ac();
    }
    at(a) {
        this.ab(a);
        this.ac();
    }
    ap(a, b) {
        this.x(a, b);
        this.ac();
    }
    ao(a, ...b) {
        this.w(a, ...b);
        this.ac();
    }
    ae(a, b, c) {
        this.m(a, b, c);
        this.ac();
    }
    aq(a, b, c) {
        this.y(a, b, c);
        this.ac();
    }
    ar(a, b, c, d) {
        this.z(a, b, c, d);
        this.ac();
    }
}
TextWriter.$t = markType(TextWriter, 'TextWriter', MarshalByRefObject.$, [IDisposable_$type]);
TextWriter.d = null;
/**
 * @hidden
 */
export class TextWriter_NullTextWriter extends TextWriter {
    constructor() {
        super(0);
    }
    get_h() {
        return Encoding.defaultValue;
    }
    get h() {
        return this.get_h();
    }
    v(a) {
    }
    o(a) {
    }
    m(a, b, c) {
    }
}
TextWriter_NullTextWriter.$t = markType(TextWriter_NullTextWriter, 'TextWriter_NullTextWriter', TextWriter.$);
/**
 * @hidden
 */
export class SynchronizedWriter extends TextWriter {
    constructor(a, ..._rest) {
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0:
                {
                    let c = _rest[0];
                    let d = [c, false];
                    {
                        let f = d[0];
                        let g = d[1];
                        super(0);
                        this.av = null;
                        this.au = false;
                        this.av = f;
                        this.au = g;
                    }
                }
                break;
            case 1:
                {
                    let c = _rest[0];
                    let d = _rest[1];
                    super(0);
                    this.av = null;
                    this.au = false;
                    this.av = c;
                    this.au = d;
                }
                break;
        }
    }
    i() {
        if (this.au) {
            return;
        }
        this.av.i();
    }
    k() {
        this.av.k();
    }
    n(a) {
        this.av.n(a);
    }
    o(a) {
        this.av.o(a);
    }
    l(a) {
        this.av.l(a);
    }
    p(a) {
        this.av.p(a);
    }
    r(a) {
        this.av.r(a);
    }
    s(a) {
        this.av.s(a);
    }
    t(a) {
        this.av.t(a);
    }
    u(a) {
        this.av.u(a);
    }
    v(a) {
        this.av.v(a);
    }
    aa(a) {
        this.av.aa(a);
    }
    ab(a) {
        this.av.ab(a);
    }
    x(a, b) {
        this.av.x(a, b);
    }
    w(a, ...b) {
        this.av.w(a, ...b);
    }
    m(a, b, c) {
        this.av.m(a, b, c);
    }
    y(a, b, c) {
        this.av.y(a, b, c);
    }
    z(a, b, c, d) {
        this.av.z(a, b, c, d);
    }
    ac() {
        this.av.ac();
    }
    af(a) {
        this.av.af(a);
    }
    ag(a) {
        this.av.ag(a);
    }
    ad(a) {
        this.av.ad(a);
    }
    ah(a) {
        this.av.ah(a);
    }
    ai(a) {
        this.av.ai(a);
    }
    aj(a) {
        this.av.aj(a);
    }
    ak(a) {
        this.av.ak(a);
    }
    al(a) {
        this.av.al(a);
    }
    am(a) {
        this.av.am(a);
    }
    an(a) {
        this.av.an(a);
    }
    as(a) {
        this.av.as(a);
    }
    at(a) {
        this.av.at(a);
    }
    ap(a, b) {
        this.av.ap(a, b);
    }
    ao(a, ...b) {
        this.av.ao(a, ...b);
    }
    ae(a, b, c) {
        this.av.ae(a, b, c);
    }
    aq(a, b, c) {
        this.av.aq(a, b, c);
    }
    ar(a, b, c, d) {
        this.av.ar(a, b, c, d);
    }
    get_h() {
        return this.av.h;
    }
    get h() {
        return this.get_h();
    }
    get_b() {
        return this.av.b;
    }
    get_g() {
        return this.av.g;
    }
    set_g(a) {
        this.av.g = a;
    }
}
SynchronizedWriter.$t = markType(SynchronizedWriter, 'SynchronizedWriter', TextWriter.$);
callStaticConstructors();
//# sourceMappingURL=TextWriter_combined.js.map