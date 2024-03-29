//
// System.Xml.XmlTextReader
//
// Author:
//   Jason Diamond (jason@injektilo.org)
//   Adam Treat (manyoso@yahoo.com)
//   Atsushi Enomoto  (ginga@kit.hi-ho.ne.jp)
//
// (C) 2001, 2002 Jason Diamond  http://injektilo.org/
// Copyright (C) 2005-2006 Novell, Inc (http://www.novell.com)
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
//#define USE_NAME_BUFFER
import * as tslib_1 from "tslib";
//
// Optimization TODOs:
//
//	- support PushbackChar() which reverts one character read.
//		- ReadTextReader() should always keep one pushback buffer
//		  as pushback safety net.
//	- Replace (peek,read) * n -> read * n + pushback
//
import { ValueType, markStruct } from "./type";
/**
 * @hidden
 */
var XmlTextReader_TagName = /** @class */ (function (_super) {
    tslib_1.__extends(XmlTextReader_TagName, _super);
    function XmlTextReader_TagName(a) {
        var _rest = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            _rest[_i - 1] = arguments[_i];
        }
        var _this = _super.call(this) || this;
        _this.b = null;
        _this.a = null;
        _this.c = null;
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0: break;
            case 1:
                {
                    var c = _rest[0];
                    var d = _rest[1];
                    var e = _rest[2];
                    _this.b = c;
                    _this.a = d;
                    _this.c = e;
                }
                break;
        }
        return _this;
    }
    XmlTextReader_TagName.$t = markStruct(XmlTextReader_TagName, 'XmlTextReader_TagName');
    return XmlTextReader_TagName;
}(ValueType));
export { XmlTextReader_TagName };
//# sourceMappingURL=XmlTextReader_TagName.js.map