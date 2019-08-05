//
// System.IO.StringReader
//
// Author: Marcin Szczepanski (marcins@zipworld.com.au)
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
import { TextReader } from "./TextReader";
import { ArgumentNullException } from "./ArgumentNullException";
import { ArgumentException } from "./ArgumentException";
import { ArgumentOutOfRangeException } from "./ArgumentOutOfRangeException";
import { ObjectDisposedException } from "./ObjectDisposedException";
import { markType } from "./type";
import { stringEmpty, stringCopyToCharArray } from "./string";
/**
 * @hidden
 */
var StringReader = /** @class */ (function (_super) {
    tslib_1.__extends(StringReader, _super);
    function StringReader(a) {
        var _this = _super.call(this) || this;
        _this.m = null;
        _this.k = 0;
        _this.l = 0;
        if (a == null) {
            throw new ArgumentNullException(0, "s");
        }
        _this.m = a;
        _this.k = 0;
        _this.l = a.length;
        return _this;
    }
    StringReader.prototype.i = function () {
        this.dispose1(true);
    };
    StringReader.prototype.dispose1 = function (a) {
        this.m = null;
        _super.prototype.dispose1.call(this, a);
    };
    StringReader.prototype.a = function () {
        this.n();
        if (this.k >= this.l) {
            return -1;
        }
        else {
            return this.m.charAt(this.k).charCodeAt(0);
        }
    };
    StringReader.prototype.b = function () {
        this.n();
        if (this.k >= this.l) {
            return -1;
        }
        else {
            return this.m.charAt(this.k++).charCodeAt(0);
        }
    };
    StringReader.prototype.c = function (a, b, c) {
        this.n();
        if (a == null) {
            throw new ArgumentNullException(0, "buffer");
        }
        if (a.length - b < c) {
            throw new ArgumentException(1, stringEmpty());
        }
        if (b < 0 || c < 0) {
            throw new ArgumentOutOfRangeException(0);
        }
        var d;
        if (this.k > this.l - c) {
            d = this.l - this.k;
        }
        else {
            d = c;
        }
        stringCopyToCharArray(this.m, this.k, a, b, d);
        this.k += d;
        return d;
    };
    StringReader.prototype.g = function () {
        this.n();
        if (this.k >= this.m.length) {
            return null;
        }
        var a = this.m.indexOf('\r', this.k);
        var b = this.m.indexOf('\n', this.k);
        var c;
        var d = false;
        if (a == -1) {
            if (b == -1) {
                return this.h();
            }
            c = b;
        }
        else if (b == -1) {
            c = a;
        }
        else {
            c = (a > b) ? b : a;
            d = (a + 1 == b);
        }
        var e = this.m.substr(this.k, c - this.k);
        this.k = c + ((d) ? 2 : 1);
        return e;
    };
    StringReader.prototype.h = function () {
        this.n();
        var a = this.m.substr(this.k, this.l - this.k);
        this.k = this.l;
        return a;
    };
    StringReader.prototype.n = function () {
        if (this.m == null) {
            throw new ObjectDisposedException(1, "StringReader", "Cannot read from a closed StringReader");
        }
    };
    StringReader.$t = markType(StringReader, 'StringReader', TextReader.$);
    return StringReader;
}(TextReader));
export { StringReader };
//# sourceMappingURL=StringReader.js.map