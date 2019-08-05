//
// Original version: https://github.com/mosa/Mono-Class-Libraries/blob/master/mcs/class/System.XML/System.Xml/XmlTextReader.cs
//
// System.Xml.XmlInputStream 
//	encoding-specification-wise XML input stream and reader
//
// Author:
//	Atsushi Enomoto (ginga@kit.hi-ho.ne.jp)
//
//	(C)2003 Atsushi Enomoto
//
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
import { TextReader } from "./TextReader";
import { markType } from "./type";
import { ObjectDisposedException } from "./ObjectDisposedException";
import { ArgumentNullException } from "./ArgumentNullException";
import { ArgumentOutOfRangeException } from "./ArgumentOutOfRangeException";
import { ArgumentException } from "./ArgumentException";
import { StringBuilder } from "./StringBuilder";
import { arrayCopy1 } from "./arrayExtended";
import { stringCreateFromCharArraySlice } from "./string";
/**
 * @hidden
 */
export class NonBlockingStreamReader extends TextReader {
    constructor(a, b) {
        super();
        this.l = null;
        this.k = null;
        this.p = 0;
        this.u = 0;
        this.o = 0;
        this.z = null;
        this.x = null;
        this.w = null;
        this.n = false;
        this.ab = null;
        this.m = false;
        let c = 1024;
        this.w = a;
        this.l = new Array(c);
        this.o = c;
        this.z = b;
        this.x = this.y();
        this.k = new Array(b.getMaxCharCount(c));
        this.p = 0;
        this.u = 0;
    }
    y() {
        return this.z.getDecoder();
    }
    get aa() {
        return this.z;
    }
    i() {
        this.dispose1(true);
    }
    dispose1(a) {
        if (a && this.w != null) {
            this.w.close();
        }
        this.l = null;
        this.k = null;
        this.z = null;
        this.x = null;
        this.w = null;
        super.dispose1(a);
    }
    ac() {
        this.u = this.p = 0;
        this.n = false;
        this.x = this.y();
    }
    v() {
        this.u = 0;
        let a = 0;
        this.p = 0;
        let b = 0;
        do {
            a = this.w.read(this.l, 0, this.o);
            if (a == 0) {
                return 0;
            }
            this.n = (a < this.o);
            this.p += this.x.c(this.l, b, a, this.k, 0);
            b = 0;
        } while (this.p == 0);
        return this.p;
    }
    a() {
        if (this.w == null) {
            throw new ObjectDisposedException(1, "StreamReader", "Cannot read from a closed StreamReader");
        }
        if (this.u >= this.p && (this.n || this.v() == 0)) {
            return -1;
        }
        return this.k[this.u].charCodeAt(0);
    }
    b() {
        if (this.w == null) {
            throw new ObjectDisposedException(1, "StreamReader", "Cannot read from a closed StreamReader");
        }
        if (this.u >= this.p && this.v() == 0) {
            return -1;
        }
        return this.k[this.u++].charCodeAt(0);
    }
    c(a, b, c) {
        if (this.w == null) {
            throw new ObjectDisposedException(1, "StreamReader", "Cannot read from a closed StreamReader");
        }
        if (a == null) {
            throw new ArgumentNullException(0, "dest_buffer");
        }
        if (b < 0) {
            throw new ArgumentOutOfRangeException(2, "index", "< 0");
        }
        if (c < 0) {
            throw new ArgumentOutOfRangeException(2, "count", "< 0");
        }
        if (b > a.length - c) {
            throw new ArgumentException(1, "index + count > dest_buffer.Length");
        }
        let d = 0;
        {
            if (this.u >= this.p && this.v() == 0) {
                return d > 0 ? d : 0;
            }
            let e = Math.min(this.p - this.u, c);
            arrayCopy1(this.k, this.u, a, b, e);
            this.u += e;
            b += e;
            c -= e;
            d += e;
        }
        return d;
    }
    s() {
        let a = '\0';
        for (; this.u < this.p; this.u++) {
            a = this.k[this.u];
            if (a == '\n') {
                this.u++;
                let b = (this.m) ? (this.u - 2) : (this.u - 1);
                if (b < 0) {
                    b = 0;
                }
                this.m = false;
                return b;
            }
            else if (this.m) {
                this.m = false;
                return this.u - 1;
            }
            this.m = (a == '\r');
        }
        return -1;
    }
    g() {
        if (this.w == null) {
            throw new ObjectDisposedException(1, "StreamReader", "Cannot read from a closed StreamReader");
        }
        if (this.u >= this.p && this.v() == 0) {
            return null;
        }
        let a = this.u;
        let b = this.s();
        if (b < this.p && b >= a) {
            return stringCreateFromCharArraySlice(this.k, a, b - a);
        }
        if (this.ab == null) {
            this.ab = new StringBuilder(0);
        }
        else {
            this.ab.c = 0;
        }
        while (true) {
            if (this.m) {
                this.p--;
            }
            this.ab.l(stringCreateFromCharArraySlice(this.k, a, this.p - a));
            if (this.v() == 0) {
                if (this.ab.b > 32768) {
                    let c = this.ab;
                    this.ab = null;
                    return c.f(0, c.c);
                }
                return this.ab.f(0, this.ab.c);
            }
            a = this.u;
            b = this.s();
            if (b < this.p && b >= a) {
                this.ab.l(stringCreateFromCharArraySlice(this.k, a, b - a));
                if (this.ab.b > 32768) {
                    let d = this.ab;
                    this.ab = null;
                    return d.f(0, d.c);
                }
                return this.ab.f(0, this.ab.c);
            }
        }
    }
    h() {
        if (this.w == null) {
            throw new ObjectDisposedException(1, "StreamReader", "Cannot read from a closed StreamReader");
        }
        let a = new StringBuilder(0);
        let b = this.k.length;
        let c = new Array(b);
        let d;
        while ((d = this.c(c, 0, b)) != 0) {
            a.g(c, 0, d);
        }
        return a.toString();
    }
}
NonBlockingStreamReader.$t = markType(NonBlockingStreamReader, 'NonBlockingStreamReader', TextReader.$);
//# sourceMappingURL=NonBlockingStreamReader.js.map