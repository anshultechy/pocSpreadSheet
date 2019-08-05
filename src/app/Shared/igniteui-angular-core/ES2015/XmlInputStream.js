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
import { Stream, NotSupportedException, callStaticConstructors, markType } from "./type";
import { Encoding } from "./Encoding";
import { XmlException } from "./XmlException";
import { UTF8Encoding } from "./UTF8Encoding";
import { StringBuilder } from "./StringBuilder";
import { XmlChar } from "./XmlChar";
import { Buffer } from "./Buffer";
/**
 * @hidden
 */
export class XmlInputStream extends Stream {
    constructor(a) {
        super();
        this.w = null;
        this.t = null;
        this.o = null;
        this.p = 0;
        this.q = 0;
        this.y(a);
    }
    static staticInit() {
        XmlInputStream.strictUTF8 = new UTF8Encoding(0, false, true);
    }
    u(a, b) {
        let c = this.q;
        while (this.q < a + b) {
            if (this.r() < 0) {
                return null;
            }
        }
        this.q = c;
        return Encoding.aSCII.getString1(this.o, a, b);
    }
    y(a) {
        this.o = new Array(6);
        this.t = a;
        this.w = XmlInputStream.strictUTF8;
        this.p = a.read(this.o, 0, this.o.length);
        if (this.p == -1 || this.p == 0) {
            return;
        }
        let b = this.r();
        switch (b) {
            case 255:
                b = this.r();
                if (b == 254) {
                    this.w = Encoding.unicode;
                }
                else {
                    this.q = 0;
                }
                break;
            case 254:
                b = this.r();
                if (b == 255) {
                    this.w = Encoding.bigEndianUnicode;
                    return;
                }
                else {
                    this.q = 0;
                }
                break;
            case 239:
                b = this.r();
                if (b == 187) {
                    b = this.r();
                    if (b != 191) {
                        this.q = 0;
                    }
                }
                else {
                    this.o[--this.q] = 239;
                }
                break;
            case '<'.charCodeAt(0):
                if (this.p >= 5 && this.u(1, 4) == "?xml") {
                    this.q += 4;
                    b = this.s();
                    if (b == 'v'.charCodeAt(0)) {
                        while (b >= 0) {
                            b = this.r();
                            if (b == '0'.charCodeAt(0)) {
                                this.r();
                                break;
                            }
                        }
                        b = this.s();
                    }
                    if (b == 'e'.charCodeAt(0)) {
                        if (this.u(this.q, 7) == "ncoding") {
                            this.q += 7;
                            b = this.s();
                            if (b != '='.charCodeAt(0)) {
                                throw XmlInputStream.z;
                            }
                            b = this.s();
                            let c = b;
                            let d = new StringBuilder(0);
                            while (true) {
                                b = this.r();
                                if (b == c) {
                                    break;
                                }
                                else if (b < 0) {
                                    throw XmlInputStream.z;
                                }
                                d.h(String.fromCharCode(b));
                            }
                            let e = d.toString();
                            if (!XmlChar.o(e)) {
                                throw XmlInputStream.z;
                            }
                            this.w = Encoding.getEncoding(e);
                        }
                    }
                }
                this.q = 0;
                break;
            default:
                this.q = 0;
                break;
        }
    }
    r() {
        if (this.p > this.q) {
            return this.o[this.q++];
        }
        let a = new Array(this.o.length * 2);
        Buffer.c(this.o, 0, a, 0, this.p);
        let b = this.t.read(a, this.p, this.o.length);
        if (b == -1 || b == 0) {
            return -1;
        }
        this.p += b;
        this.o = a;
        return this.o[this.q++];
    }
    s() {
        let a;
        L0: while (true) {
            a = this.r();
            let t1 = String.fromCharCode(a);
            L1: while (true) {
                switch (t1) {
                    case '\r':
                        t1 = ' ';
                        continue L1;
                    case '\n':
                        t1 = ' ';
                        continue L1;
                    case '\t':
                        t1 = ' ';
                        continue L1;
                    case ' ': continue L0;
                    default: return a;
                }
                break;
            }
        }
    }
    get actualEncoding() {
        return this.w;
    }
    get_canRead() {
        if (this.p > this.q) {
            return true;
        }
        else {
            return this.t.canRead;
        }
    }
    get canRead() {
        return this.get_canRead();
    }
    get_canSeek() {
        return false;
    }
    get canSeek() {
        return this.get_canSeek();
    }
    get_canWrite() {
        return false;
    }
    get canWrite() {
        return this.get_canWrite();
    }
    get_length() {
        return this.t.length;
    }
    get length() {
        return this.get_length();
    }
    get_position() {
        return this.t.position - this.p + this.q;
    }
    set_position(a) {
        if (a < this.p) {
            this.q = a;
        }
        else {
            this.t.position = a - this.p;
        }
    }
    get position() {
        return this.get_position();
    }
    set position(a) {
        this.set_position(a);
    }
    close() {
        this.t.close();
    }
    flush() {
        this.t.flush();
    }
    read(a, b, c) {
        let d;
        if (c <= this.p - this.q) {
            Buffer.c(this.o, this.q, a, b, c);
            this.q += c;
            d = c;
        }
        else {
            let e = this.p - this.q;
            if (this.p > this.q) {
                Buffer.c(this.o, this.q, a, b, e);
                this.q += e;
            }
            d = e + this.t.read(a, b + e, c - e);
        }
        return d;
    }
    readByte() {
        if (this.p > this.q) {
            return this.o[this.q++];
        }
        return this.t.readByte();
    }
    seek(a, b) {
        let c = this.p - this.q;
        if (b == 1) {
            if (a < c) {
                return this.o[this.q + a];
            }
            else {
                return this.t.seek(a - c, b);
            }
        }
        else {
            return this.t.seek(a, b);
        }
    }
    setLength(a) {
        this.t.setLength(a);
    }
    write(a, b, c) {
        throw new NotSupportedException(0);
    }
}
XmlInputStream.$t = markType(XmlInputStream, 'XmlInputStream', Stream.$);
XmlInputStream.strictUTF8 = null;
XmlInputStream.z = new XmlException(3, "invalid encoding specification.");
callStaticConstructors();
//# sourceMappingURL=XmlInputStream.js.map