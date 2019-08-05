import * as tslib_1 from "tslib";
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
var NonBlockingStreamReader = /** @class */ (function (_super) {
    tslib_1.__extends(NonBlockingStreamReader, _super);
    function NonBlockingStreamReader(a, b) {
        var _this = _super.call(this) || this;
        _this.l = null;
        _this.k = null;
        _this.p = 0;
        _this.u = 0;
        _this.o = 0;
        _this.z = null;
        _this.x = null;
        _this.w = null;
        _this.n = false;
        _this.ab = null;
        _this.m = false;
        var c = 1024;
        _this.w = a;
        _this.l = new Array(c);
        _this.o = c;
        _this.z = b;
        _this.x = _this.y();
        _this.k = new Array(b.getMaxCharCount(c));
        _this.p = 0;
        _this.u = 0;
        return _this;
    }
    NonBlockingStreamReader.prototype.y = function () {
        return this.z.getDecoder();
    };
    Object.defineProperty(NonBlockingStreamReader.prototype, "aa", {
        get: function () {
            return this.z;
        },
        enumerable: true,
        configurable: true
    });
    NonBlockingStreamReader.prototype.i = function () {
        this.dispose1(true);
    };
    NonBlockingStreamReader.prototype.dispose1 = function (a) {
        if (a && this.w != null) {
            this.w.close();
        }
        this.l = null;
        this.k = null;
        this.z = null;
        this.x = null;
        this.w = null;
        _super.prototype.dispose1.call(this, a);
    };
    NonBlockingStreamReader.prototype.ac = function () {
        this.u = this.p = 0;
        this.n = false;
        this.x = this.y();
    };
    NonBlockingStreamReader.prototype.v = function () {
        this.u = 0;
        var a = 0;
        this.p = 0;
        var b = 0;
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
    };
    NonBlockingStreamReader.prototype.a = function () {
        if (this.w == null) {
            throw new ObjectDisposedException(1, "StreamReader", "Cannot read from a closed StreamReader");
        }
        if (this.u >= this.p && (this.n || this.v() == 0)) {
            return -1;
        }
        return this.k[this.u].charCodeAt(0);
    };
    NonBlockingStreamReader.prototype.b = function () {
        if (this.w == null) {
            throw new ObjectDisposedException(1, "StreamReader", "Cannot read from a closed StreamReader");
        }
        if (this.u >= this.p && this.v() == 0) {
            return -1;
        }
        return this.k[this.u++].charCodeAt(0);
    };
    NonBlockingStreamReader.prototype.c = function (a, b, c) {
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
        var d = 0;
        {
            if (this.u >= this.p && this.v() == 0) {
                return d > 0 ? d : 0;
            }
            var e = Math.min(this.p - this.u, c);
            arrayCopy1(this.k, this.u, a, b, e);
            this.u += e;
            b += e;
            c -= e;
            d += e;
        }
        return d;
    };
    NonBlockingStreamReader.prototype.s = function () {
        var a = '\0';
        for (; this.u < this.p; this.u++) {
            a = this.k[this.u];
            if (a == '\n') {
                this.u++;
                var b = (this.m) ? (this.u - 2) : (this.u - 1);
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
    };
    NonBlockingStreamReader.prototype.g = function () {
        if (this.w == null) {
            throw new ObjectDisposedException(1, "StreamReader", "Cannot read from a closed StreamReader");
        }
        if (this.u >= this.p && this.v() == 0) {
            return null;
        }
        var a = this.u;
        var b = this.s();
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
                    var c = this.ab;
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
                    var d = this.ab;
                    this.ab = null;
                    return d.f(0, d.c);
                }
                return this.ab.f(0, this.ab.c);
            }
        }
    };
    NonBlockingStreamReader.prototype.h = function () {
        if (this.w == null) {
            throw new ObjectDisposedException(1, "StreamReader", "Cannot read from a closed StreamReader");
        }
        var a = new StringBuilder(0);
        var b = this.k.length;
        var c = new Array(b);
        var d;
        while ((d = this.c(c, 0, b)) != 0) {
            a.g(c, 0, d);
        }
        return a.toString();
    };
    NonBlockingStreamReader.$t = markType(NonBlockingStreamReader, 'NonBlockingStreamReader', TextReader.$);
    return NonBlockingStreamReader;
}(TextReader));
export { NonBlockingStreamReader };
//# sourceMappingURL=NonBlockingStreamReader.js.map