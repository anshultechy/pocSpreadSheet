//
// XmlNamespaceManager.cs
//
// Authors:
//   Jason Diamond (jason@injektilo.org)
//   Ben Maurer (bmaurer@users.sourceforge.net)
//   Atsushi Enomoto (atsushi@ximian.com)
//
// (C) 2001 Jason Diamond  http://injektilo.org/
// (C) 2003 Ben Maurer
// (C) 2004 Novell Inc.
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
import { ValueType, markStruct } from "./type";
/**
 * @hidden
 */
var XmlNamespaceManager_NsDecl = /** @class */ (function (_super) {
    tslib_1.__extends(XmlNamespaceManager_NsDecl, _super);
    function XmlNamespaceManager_NsDecl() {
        var _this = _super.call(this) || this;
        _this.a = null;
        _this.b = null;
        return _this;
    }
    XmlNamespaceManager_NsDecl.$t = markStruct(XmlNamespaceManager_NsDecl, 'XmlNamespaceManager_NsDecl');
    return XmlNamespaceManager_NsDecl;
}(ValueType));
export { XmlNamespaceManager_NsDecl };
//# sourceMappingURL=XmlNamespaceManager_NsDecl.js.map