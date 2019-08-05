//
// System.IO.TextReader
//
// Authors:
//   Marcin Szczepanski (marcins@zipworld.com.au)
//   Miguel de Icaza (miguel@gnome.org)
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
import { Base, IDisposable_$type, callStaticConstructors, typeCast, markType } from "./type";
import { ArgumentNullException } from "./ArgumentNullException";
import { stringEmpty } from "./string";
/**
 * @hidden
 */
var TextReader = /** @class */ (function (_super) {
    tslib_1.__extends(TextReader, _super);
    function TextReader() {
        return _super.call(this) || this;
    }
    TextReader.staticInit = function () {
        TextReader.e = new TextReader_NullTextReader();
    };
    TextReader.prototype.i = function () {
        this.dispose1(true);
    };
    TextReader.prototype.dispose = function () {
        this.dispose1(true);
    };
    TextReader.prototype.dispose1 = function (a) {
        if (a) {
        }
        return;
    };
    TextReader.prototype.a = function () {
        return -1;
    };
    TextReader.prototype.b = function () {
        return -1;
    };
    TextReader.prototype.c = function (a, b, c) {
        var d, e;
        for (e = 0; e < c; e++) {
            if ((d = this.b()) == -1) {
                return e;
            }
            a[b + e] = String.fromCharCode(d);
        }
        return e;
    };
    TextReader.prototype.d = function (a, b, c) {
        var d = 0;
        var e = 0;
        do {
            e = this.c(a, b, c);
            b += e;
            d += e;
            c -= e;
        } while (e != 0 && c > 0);
        return d;
    };
    TextReader.prototype.g = function () {
        return stringEmpty();
    };
    TextReader.prototype.h = function () {
        return stringEmpty();
    };
    TextReader.f = function (a) {
        if (a == null) {
            throw new ArgumentNullException(0, "reader is null");
        }
        if (typeCast(SynchronizedReader.$, a) !== null) {
            return a;
        }
        return new SynchronizedReader(a);
    };
    TextReader.$t = markType(TextReader, 'TextReader', Base.$, [IDisposable_$type]);
    TextReader.e = null;
    return TextReader;
}(Base));
export { TextReader };
/**
 * @hidden
 */
var TextReader_NullTextReader = /** @class */ (function (_super) {
    tslib_1.__extends(TextReader_NullTextReader, _super);
    function TextReader_NullTextReader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TextReader_NullTextReader.prototype.g = function () {
        return null;
    };
    TextReader_NullTextReader.$t = markType(TextReader_NullTextReader, 'TextReader_NullTextReader', TextReader.$);
    return TextReader_NullTextReader;
}(TextReader));
export { TextReader_NullTextReader };
/**
 * @hidden
 */
var SynchronizedReader = /** @class */ (function (_super) {
    tslib_1.__extends(SynchronizedReader, _super);
    function SynchronizedReader(a) {
        var _this = _super.call(this) || this;
        _this.k = null;
        _this.k = a;
        return _this;
    }
    SynchronizedReader.prototype.i = function () {
        this.k.i();
    };
    SynchronizedReader.prototype.a = function () {
        return this.k.a();
    };
    SynchronizedReader.prototype.d = function (a, b, c) {
        return this.k.d(a, b, c);
    };
    SynchronizedReader.prototype.g = function () {
        return this.k.g();
    };
    SynchronizedReader.prototype.h = function () {
        return this.k.h();
    };
    SynchronizedReader.prototype.b = function () {
        return this.k.b();
    };
    SynchronizedReader.prototype.c = function (a, b, c) {
        return this.k.c(a, b, c);
    };
    SynchronizedReader.$t = markType(SynchronizedReader, 'SynchronizedReader', TextReader.$);
    return SynchronizedReader;
}(TextReader));
export { SynchronizedReader };
callStaticConstructors();
//# sourceMappingURL=TextReader_combined.js.map