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
import { Base, EnumUtil, enumGetBox, markType } from "./type";
import { XmlTextReader_DtdInputState_$type } from "./XmlTextReader_DtdInputState";
import { arrayLast } from "./arrayExtended";
/**
 * @hidden
 */
var XmlTextReader_DtdInputStateStack = /** @class */ (function (_super) {
    tslib_1.__extends(XmlTextReader_DtdInputStateStack, _super);
    function XmlTextReader_DtdInputStateStack() {
        var _this = _super.call(this) || this;
        _this.a = new Array();
        _this.b(1);
        return _this;
    }
    XmlTextReader_DtdInputStateStack.prototype.c = function () {
        return EnumUtil.getEnumValue(XmlTextReader_DtdInputState_$type, arrayLast(this.a));
    };
    XmlTextReader_DtdInputStateStack.prototype.d = function () {
        return EnumUtil.getEnumValue(XmlTextReader_DtdInputState_$type, this.a.pop());
    };
    XmlTextReader_DtdInputStateStack.prototype.b = function (a) {
        this.a.push(enumGetBox(XmlTextReader_DtdInputState_$type, a));
    };
    XmlTextReader_DtdInputStateStack.$t = markType(XmlTextReader_DtdInputStateStack, 'XmlTextReader_DtdInputStateStack');
    return XmlTextReader_DtdInputStateStack;
}(Base));
export { XmlTextReader_DtdInputStateStack };
//# sourceMappingURL=XmlTextReader_DtdInputStateStack.js.map