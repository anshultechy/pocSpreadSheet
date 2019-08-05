//
// System.IO.StringWriter
//
// Authors
//	Marcin Szczepanski (marcins@zipworld.com.au)
//	Sebastien Pouliot  <sebastien@ximian.com>
//
// Copyright (C) 2004 Novell (http://www.novell.com)
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
import { TextWriter } from "./TextWriter";
import { Encoding } from "./Encoding";
import { StringBuilder } from "./StringBuilder";
import { markType } from "./type";
import { ArgumentNullException } from "./ArgumentNullException";
import { Locale } from "./Locale";
import { ObjectDisposedException } from "./ObjectDisposedException";
import { ArgumentOutOfRangeException } from "./ArgumentOutOfRangeException";
import { ArgumentException } from "./ArgumentException";
/**
 * @hidden
 */
var StringWriter = /** @class */ (function (_super) {
    tslib_1.__extends(StringWriter, _super);
    function StringWriter(a) {
        var _rest = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            _rest[_i - 1] = arguments[_i];
        }
        var _this = this;
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0:
                {
                    var c = [new StringBuilder(0)];
                    {
                        var e = c[0];
                        var f = [e, null];
                        {
                            var h = f[0];
                            var i = f[1];
                            _this = _super.call(this, 0) || this;
                            _this.aw = null;
                            _this.au = false;
                            if (h == null) {
                                throw new ArgumentNullException(0, "sb");
                            }
                            _this.aw = h;
                            _this.c = i;
                        }
                    }
                }
                break;
            case 1:
                {
                    var c = _rest[0];
                    var d = [new StringBuilder(0), c];
                    {
                        var f = d[0];
                        var g = d[1];
                        _this = _super.call(this, 0) || this;
                        _this.aw = null;
                        _this.au = false;
                        if (f == null) {
                            throw new ArgumentNullException(0, "sb");
                        }
                        _this.aw = f;
                        _this.c = g;
                    }
                }
                break;
            case 2:
                {
                    var c = _rest[0];
                    var d = [c, null];
                    {
                        var f = d[0];
                        var g = d[1];
                        _this = _super.call(this, 0) || this;
                        _this.aw = null;
                        _this.au = false;
                        if (f == null) {
                            throw new ArgumentNullException(0, "sb");
                        }
                        _this.aw = f;
                        _this.c = g;
                    }
                }
                break;
            case 3:
                {
                    var c = _rest[0];
                    var d = _rest[1];
                    _this = _super.call(this, 0) || this;
                    _this.aw = null;
                    _this.au = false;
                    if (c == null) {
                        throw new ArgumentNullException(0, "sb");
                    }
                    _this.aw = c;
                    _this.c = d;
                }
                break;
        }
        return _this;
    }
    StringWriter.prototype.get_h = function () {
        return Encoding.unicode;
    };
    Object.defineProperty(StringWriter.prototype, "h", {
        get: function () {
            return this.get_h();
        },
        enumerable: true,
        configurable: true
    });
    StringWriter.prototype.i = function () {
        this.dispose1(true);
        this.au = true;
    };
    StringWriter.prototype.dispose1 = function (a) {
        _super.prototype.dispose1.call(this, a);
        this.au = true;
    };
    StringWriter.prototype.av = function () {
        return this.aw;
    };
    StringWriter.prototype.toString = function () {
        return this.aw.toString();
    };
    StringWriter.prototype.o = function (a) {
        if (this.au) {
            throw new ObjectDisposedException(1, "StringReader", Locale.a("Cannot write to a closed StringWriter"));
        }
        this.aw.h(a);
    };
    StringWriter.prototype.v = function (a) {
        if (this.au) {
            throw new ObjectDisposedException(1, "StringReader", Locale.a("Cannot write to a closed StringWriter"));
        }
        this.aw.l(a);
    };
    StringWriter.prototype.m = function (a, b, c) {
        if (this.au) {
            throw new ObjectDisposedException(1, "StringReader", Locale.a("Cannot write to a closed StringWriter"));
        }
        if (a == null) {
            throw new ArgumentNullException(0, "buffer");
        }
        if (b < 0) {
            throw new ArgumentOutOfRangeException(2, "index", "< 0");
        }
        if (c < 0) {
            throw new ArgumentOutOfRangeException(2, "count", "< 0");
        }
        if (b > a.length - c) {
            throw new ArgumentException(1, "index + count > buffer.Length");
        }
        this.aw.g(a, b, c);
    };
    StringWriter.$t = markType(StringWriter, 'StringWriter', TextWriter.$);
    return StringWriter;
}(TextWriter));
export { StringWriter };
//# sourceMappingURL=StringWriter.js.map