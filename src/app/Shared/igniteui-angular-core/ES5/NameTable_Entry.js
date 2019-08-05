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
import { Base, markType } from "./type";
/**
 * @hidden
 */
var NameTable_Entry = /** @class */ (function (_super) {
    tslib_1.__extends(NameTable_Entry, _super);
    function NameTable_Entry(a, b, c) {
        var _this = _super.call(this) || this;
        _this.c = null;
        _this.a = 0;
        _this.b = 0;
        _this.d = null;
        _this.c = a;
        _this.b = a.length;
        _this.a = b;
        _this.d = c;
        return _this;
    }
    NameTable_Entry.$t = markType(NameTable_Entry, 'NameTable_Entry');
    return NameTable_Entry;
}(Base));
export { NameTable_Entry };
//# sourceMappingURL=NameTable_Entry.js.map