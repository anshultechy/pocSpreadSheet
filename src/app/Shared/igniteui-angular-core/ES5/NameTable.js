//
// System.Xml.NameTable.cs
//
// Authors:
//	Duncan Mak (duncan@ximian.com)
//	Ben Maurer (bmaurer@users.sourceforge.net)
//
// (C) Ximian, Inc.
// (C) 2003 Ben Maurer
//
import * as tslib_1 from "tslib";
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
import { XmlNameTable } from "./XmlNameTable";
import { NameTable_Entry } from "./NameTable_Entry";
import { IndexOutOfRangeException } from "./IndexOutOfRangeException";
import { ArgumentNullException } from "./ArgumentNullException";
import { markType } from "./type";
import { stringEmpty, stringCreateFromCharArraySlice } from "./string";
/**
 * @hidden
 */
var NameTable = /** @class */ (function (_super) {
    tslib_1.__extends(NameTable, _super);
    function NameTable() {
        var _this = _super.call(this) || this;
        _this.g = 128;
        _this.e = new Array(128);
        _this.i = 0;
        return _this;
    }
    NameTable.prototype.a = function (a, b, c) {
        if (((0 > b) && (b >= a.length)) || ((0 > c) && (c >= a.length - c))) {
            throw new IndexOutOfRangeException(1, "The Index is out of range.");
        }
        if (c == 0) {
            return stringEmpty();
        }
        var d = 0;
        var e = b + c;
        for (var f = b; f < e; f++) {
            d = (d << 5) - d + a[f].charCodeAt(0);
        }
        d &= 2147483647;
        for (var g = this.e[d % this.g]; g != null; g = g.d) {
            if (g.a == d && g.b == c && NameTable.f(g.c, a, b)) {
                return g.c;
            }
        }
        return this.j(stringCreateFromCharArraySlice(a, b, c), d);
    };
    NameTable.prototype.b = function (a) {
        if (a == null) {
            throw new ArgumentNullException(0, "key");
        }
        var b = a.length;
        if (b == 0) {
            return stringEmpty();
        }
        var c = 0;
        for (var d = 0; d < b; d++) {
            c = (c << 5) - c + a.charAt(d).charCodeAt(0);
        }
        c &= 2147483647;
        for (var e = this.e[c % this.g]; e != null; e = e.d) {
            if (e.a == c && e.b == a.length && e.c == a) {
                return e.c;
            }
        }
        return this.j(a, c);
    };
    NameTable.prototype.c = function (a, b, c) {
        if (((0 > b) && (b >= a.length)) || ((0 > c) && (c >= a.length - c))) {
            throw new IndexOutOfRangeException(1, "The Index is out of range.");
        }
        if (c == 0) {
            return stringEmpty();
        }
        var d = 0;
        var e = b + c;
        for (var f = b; f < e; f++) {
            d = (d << 5) - d + a[f].charCodeAt(0);
        }
        d &= 2147483647;
        for (var g = this.e[d % this.g]; g != null; g = g.d) {
            if (g.a == d && g.b == c && NameTable.f(g.c, a, b)) {
                return g.c;
            }
        }
        return null;
    };
    NameTable.prototype.d = function (a) {
        if (a == null) {
            throw new ArgumentNullException(0, "value");
        }
        var b = a.length;
        if (b == 0) {
            return stringEmpty();
        }
        var c = 0;
        for (var d = 0; d < b; d++) {
            c = (c << 5) - c + a.charAt(d).charCodeAt(0);
        }
        c &= 2147483647;
        for (var e = this.e[c % this.g]; e != null; e = e.d) {
            if (e.a == c && e.b == a.length && e.c == a) {
                return e.c;
            }
        }
        return null;
    };
    NameTable.prototype.j = function (a, b) {
        var c = b % this.g;
        this.e[c] = new NameTable_Entry(a, b, this.e[c]);
        if (this.i++ == this.g) {
            this.g <<= 1;
            var d = this.g - 1;
            var e = new Array(this.g);
            for (var f = 0; f < this.e.length; f++) {
                var g = this.e[f];
                var h = g;
                while (h != null) {
                    var i = h.a & d;
                    var j = h.d;
                    h.d = e[i];
                    e[i] = h;
                    h = j;
                }
            }
            this.e = e;
        }
        return a;
    };
    NameTable.f = function (a, b, c) {
        var d = a.length;
        d--;
        c += d;
        do {
            if (a.charAt(d) != b[c]) {
                return false;
            }
            d--;
            c--;
        } while (d >= 0);
        return true;
    };
    NameTable.$t = markType(NameTable, 'NameTable', XmlNameTable.$);
    return NameTable;
}(XmlNameTable));
export { NameTable };
//# sourceMappingURL=NameTable.js.map