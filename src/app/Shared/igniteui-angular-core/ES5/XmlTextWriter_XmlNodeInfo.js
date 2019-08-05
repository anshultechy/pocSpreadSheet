// From https://github.com/mosa/Mono-Class-Libraries/blob/28840dee90750d61ed6cbdb753292cd64cac169e/mcs/class/System.XML/System.Xml/XmlTextWriter2.cs
//
// XmlTextWriter.cs
//
// Author:
//	Atsushi Enomoto  <atsushi@ximian.com>
//
// Copyright (C) 2006 Novell, Inc.
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
var XmlTextWriter_XmlNodeInfo = /** @class */ (function (_super) {
    tslib_1.__extends(XmlTextWriter_XmlNodeInfo, _super);
    function XmlTextWriter_XmlNodeInfo() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.e = null;
        _this.c = null;
        _this.d = null;
        _this.b = false;
        _this.a = false;
        _this.f = null;
        _this.g = 0;
        return _this;
    }
    XmlTextWriter_XmlNodeInfo.$t = markType(XmlTextWriter_XmlNodeInfo, 'XmlTextWriter_XmlNodeInfo');
    return XmlTextWriter_XmlNodeInfo;
}(Base));
export { XmlTextWriter_XmlNodeInfo };
//# sourceMappingURL=XmlTextWriter_XmlNodeInfo.js.map