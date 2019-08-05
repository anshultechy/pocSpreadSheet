//
// System.IO.TextWriter.cs
//
// Authors:
//   Marcin Szczepanski (marcins@zipworld.com.au)
//   Miguel de Icaza (miguel@gnome.org)
//   Paolo Molaro (lupus@ximian.com)
//
import * as tslib_1 from "tslib";
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
var TextWriter = /** @class */ (function (_super) {
    tslib_1.__extends(TextWriter, _super);
    function TextWriter(a) {
        var _rest = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            _rest[_i - 1] = arguments[_i];
        }
        var _this = _super.call(this) || this;
        _this.a = null;
        _this.c = null;
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0:
                {
                    _this.a = stringToCharArray(Environment.newLine);
                }
                break;
            case 1:
                {
                    var c = _rest[0];
                    _this.a = stringToCharArray(Environment.newLine);
                    _this.c = c;
                }
                break;
        }
        return _this;
    }
    TextWriter.staticInit = function () {
        TextWriter.d = new TextWriter_NullTextWriter();
    };
    TextWriter.prototype.get_b = function () {
        return this.c;
    };
    Object.defineProperty(TextWriter.prototype, "b", {
        get: function () {
            return this.get_b();
        },
        enumerable: true,
        configurable: true
    });
    TextWriter.prototype.get_g = function () {
        return stringCreateFromCharArray(this.a);
    };
    TextWriter.prototype.set_g = function (a) {
        if (a == null) {
            a = Environment.newLine;
        }
        this.a = stringToCharArray(a);
    };
    Object.defineProperty(TextWriter.prototype, "g", {
        get: function () {
            return this.get_g();
        },
        set: function (a) {
            this.set_g(a);
        },
        enumerable: true,
        configurable: true
    });
    TextWriter.prototype.i = function () {
        this.dispose1(true);
    };
    TextWriter.prototype.dispose1 = function (a) {
        if (a) {
        }
    };
    TextWriter.prototype.dispose = function () {
        this.dispose1(true);
    };
    TextWriter.prototype.k = function () {
    };
    TextWriter.e = function (a) {
        return TextWriter.f(a, false);
    };
    TextWriter.f = function (a, b) {
        if (a == null) {
            throw new ArgumentNullException(0, "writer is null");
        }
        if (typeCast(SynchronizedWriter.$, a) !== null) {
            return a;
        }
        return new SynchronizedWriter(1, a, b);
    };
    TextWriter.prototype.n = function (a) {
        this.v(a.toString());
    };
    TextWriter.prototype.o = function (a) {
    };
    TextWriter.prototype.l = function (a) {
        if (a == null) {
            return;
        }
        this.m(a, 0, a.length);
    };
    TextWriter.prototype.p = function (a) {
        this.v(numberToString(a, this.c));
    };
    TextWriter.prototype.q = function (a) {
        this.v(numberToString(a, this.c));
    };
    TextWriter.prototype.r = function (a) {
        this.v(numberToString(a, this.c));
    };
    TextWriter.prototype.s = function (a) {
        this.v(numberToString(a, this.c));
    };
    TextWriter.prototype.t = function (a) {
        if (a != null) {
            this.v(a.toString());
        }
    };
    TextWriter.prototype.u = function (a) {
        this.v(numberToString(a, this.c));
    };
    TextWriter.prototype.v = function (a) {
        if (a != null) {
            this.l(stringToCharArray(a));
        }
    };
    TextWriter.prototype.aa = function (a) {
        this.v(intToString(a, this.c));
    };
    TextWriter.prototype.ab = function (a) {
        this.v(numberToString(a, this.c));
    };
    TextWriter.prototype.x = function (a, b) {
        this.v(stringFormat(a, b));
    };
    TextWriter.prototype.w = function (a) {
        var b = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            b[_i - 1] = arguments[_i];
        }
        this.v(stringFormat1.apply(void 0, tslib_1.__spread([a], b)));
    };
    TextWriter.prototype.m = function (a, b, c) {
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
    };
    TextWriter.prototype.y = function (a, b, c) {
        this.v(stringFormat(a, b, c));
    };
    TextWriter.prototype.z = function (a, b, c, d) {
        this.v(stringFormat(a, b, c, d));
    };
    TextWriter.prototype.ac = function () {
        this.l(this.a);
    };
    TextWriter.prototype.af = function (a) {
        this.n(a);
        this.ac();
    };
    TextWriter.prototype.ag = function (a) {
        this.o(a);
        this.ac();
    };
    TextWriter.prototype.ad = function (a) {
        this.l(a);
        this.ac();
    };
    TextWriter.prototype.ah = function (a) {
        this.p(a);
        this.ac();
    };
    TextWriter.prototype.ai = function (a) {
        this.q(a);
        this.ac();
    };
    TextWriter.prototype.aj = function (a) {
        this.r(a);
        this.ac();
    };
    TextWriter.prototype.ak = function (a) {
        this.s(a);
        this.ac();
    };
    TextWriter.prototype.al = function (a) {
        this.t(a);
        this.ac();
    };
    TextWriter.prototype.am = function (a) {
        this.u(a);
        this.ac();
    };
    TextWriter.prototype.an = function (a) {
        this.v(a);
        this.ac();
    };
    TextWriter.prototype.as = function (a) {
        this.aa(a);
        this.ac();
    };
    TextWriter.prototype.at = function (a) {
        this.ab(a);
        this.ac();
    };
    TextWriter.prototype.ap = function (a, b) {
        this.x(a, b);
        this.ac();
    };
    TextWriter.prototype.ao = function (a) {
        var b = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            b[_i - 1] = arguments[_i];
        }
        this.w.apply(this, tslib_1.__spread([a], b));
        this.ac();
    };
    TextWriter.prototype.ae = function (a, b, c) {
        this.m(a, b, c);
        this.ac();
    };
    TextWriter.prototype.aq = function (a, b, c) {
        this.y(a, b, c);
        this.ac();
    };
    TextWriter.prototype.ar = function (a, b, c, d) {
        this.z(a, b, c, d);
        this.ac();
    };
    TextWriter.$t = markType(TextWriter, 'TextWriter', MarshalByRefObject.$, [IDisposable_$type]);
    TextWriter.d = null;
    return TextWriter;
}(MarshalByRefObject));
export { TextWriter };
/**
 * @hidden
 */
var TextWriter_NullTextWriter = /** @class */ (function (_super) {
    tslib_1.__extends(TextWriter_NullTextWriter, _super);
    function TextWriter_NullTextWriter() {
        return _super.call(this, 0) || this;
    }
    TextWriter_NullTextWriter.prototype.get_h = function () {
        return Encoding.defaultValue;
    };
    Object.defineProperty(TextWriter_NullTextWriter.prototype, "h", {
        get: function () {
            return this.get_h();
        },
        enumerable: true,
        configurable: true
    });
    TextWriter_NullTextWriter.prototype.v = function (a) {
    };
    TextWriter_NullTextWriter.prototype.o = function (a) {
    };
    TextWriter_NullTextWriter.prototype.m = function (a, b, c) {
    };
    TextWriter_NullTextWriter.$t = markType(TextWriter_NullTextWriter, 'TextWriter_NullTextWriter', TextWriter.$);
    return TextWriter_NullTextWriter;
}(TextWriter));
export { TextWriter_NullTextWriter };
/**
 * @hidden
 */
var SynchronizedWriter = /** @class */ (function (_super) {
    tslib_1.__extends(SynchronizedWriter, _super);
    function SynchronizedWriter(a) {
        var _rest = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            _rest[_i - 1] = arguments[_i];
        }
        var _this = this;
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0:
                {
                    var c = _rest[0];
                    var d = [c, false];
                    {
                        var f = d[0];
                        var g = d[1];
                        _this = _super.call(this, 0) || this;
                        _this.av = null;
                        _this.au = false;
                        _this.av = f;
                        _this.au = g;
                    }
                }
                break;
            case 1:
                {
                    var c = _rest[0];
                    var d = _rest[1];
                    _this = _super.call(this, 0) || this;
                    _this.av = null;
                    _this.au = false;
                    _this.av = c;
                    _this.au = d;
                }
                break;
        }
        return _this;
    }
    SynchronizedWriter.prototype.i = function () {
        if (this.au) {
            return;
        }
        this.av.i();
    };
    SynchronizedWriter.prototype.k = function () {
        this.av.k();
    };
    SynchronizedWriter.prototype.n = function (a) {
        this.av.n(a);
    };
    SynchronizedWriter.prototype.o = function (a) {
        this.av.o(a);
    };
    SynchronizedWriter.prototype.l = function (a) {
        this.av.l(a);
    };
    SynchronizedWriter.prototype.p = function (a) {
        this.av.p(a);
    };
    SynchronizedWriter.prototype.r = function (a) {
        this.av.r(a);
    };
    SynchronizedWriter.prototype.s = function (a) {
        this.av.s(a);
    };
    SynchronizedWriter.prototype.t = function (a) {
        this.av.t(a);
    };
    SynchronizedWriter.prototype.u = function (a) {
        this.av.u(a);
    };
    SynchronizedWriter.prototype.v = function (a) {
        this.av.v(a);
    };
    SynchronizedWriter.prototype.aa = function (a) {
        this.av.aa(a);
    };
    SynchronizedWriter.prototype.ab = function (a) {
        this.av.ab(a);
    };
    SynchronizedWriter.prototype.x = function (a, b) {
        this.av.x(a, b);
    };
    SynchronizedWriter.prototype.w = function (a) {
        var _a;
        var b = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            b[_i - 1] = arguments[_i];
        }
        (_a = this.av).w.apply(_a, tslib_1.__spread([a], b));
    };
    SynchronizedWriter.prototype.m = function (a, b, c) {
        this.av.m(a, b, c);
    };
    SynchronizedWriter.prototype.y = function (a, b, c) {
        this.av.y(a, b, c);
    };
    SynchronizedWriter.prototype.z = function (a, b, c, d) {
        this.av.z(a, b, c, d);
    };
    SynchronizedWriter.prototype.ac = function () {
        this.av.ac();
    };
    SynchronizedWriter.prototype.af = function (a) {
        this.av.af(a);
    };
    SynchronizedWriter.prototype.ag = function (a) {
        this.av.ag(a);
    };
    SynchronizedWriter.prototype.ad = function (a) {
        this.av.ad(a);
    };
    SynchronizedWriter.prototype.ah = function (a) {
        this.av.ah(a);
    };
    SynchronizedWriter.prototype.ai = function (a) {
        this.av.ai(a);
    };
    SynchronizedWriter.prototype.aj = function (a) {
        this.av.aj(a);
    };
    SynchronizedWriter.prototype.ak = function (a) {
        this.av.ak(a);
    };
    SynchronizedWriter.prototype.al = function (a) {
        this.av.al(a);
    };
    SynchronizedWriter.prototype.am = function (a) {
        this.av.am(a);
    };
    SynchronizedWriter.prototype.an = function (a) {
        this.av.an(a);
    };
    SynchronizedWriter.prototype.as = function (a) {
        this.av.as(a);
    };
    SynchronizedWriter.prototype.at = function (a) {
        this.av.at(a);
    };
    SynchronizedWriter.prototype.ap = function (a, b) {
        this.av.ap(a, b);
    };
    SynchronizedWriter.prototype.ao = function (a) {
        var _a;
        var b = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            b[_i - 1] = arguments[_i];
        }
        (_a = this.av).ao.apply(_a, tslib_1.__spread([a], b));
    };
    SynchronizedWriter.prototype.ae = function (a, b, c) {
        this.av.ae(a, b, c);
    };
    SynchronizedWriter.prototype.aq = function (a, b, c) {
        this.av.aq(a, b, c);
    };
    SynchronizedWriter.prototype.ar = function (a, b, c, d) {
        this.av.ar(a, b, c, d);
    };
    SynchronizedWriter.prototype.get_h = function () {
        return this.av.h;
    };
    Object.defineProperty(SynchronizedWriter.prototype, "h", {
        get: function () {
            return this.get_h();
        },
        enumerable: true,
        configurable: true
    });
    SynchronizedWriter.prototype.get_b = function () {
        return this.av.b;
    };
    SynchronizedWriter.prototype.get_g = function () {
        return this.av.g;
    };
    SynchronizedWriter.prototype.set_g = function (a) {
        this.av.g = a;
    };
    SynchronizedWriter.$t = markType(SynchronizedWriter, 'SynchronizedWriter', TextWriter.$);
    return SynchronizedWriter;
}(TextWriter));
export { SynchronizedWriter };
callStaticConstructors();
//# sourceMappingURL=TextWriter_combined.js.map