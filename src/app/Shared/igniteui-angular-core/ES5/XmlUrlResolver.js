// System.Xml.XmlUrlResolver.cs
//
// Author: Duncan Mak (duncan@ximian.com)
//	   Atsushi Enomoto (ginga@kit.hi-ho.ne.jp)
//
// (C) Ximian, Inc.
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
import { XmlResolver } from "./XmlResolver";
import { markType } from "./type";
import { NotImplementedException } from "./NotImplementedException";
import { stringReplace } from "./string";
/**
 * @hidden
 */
var XmlUrlResolver = /** @class */ (function (_super) {
    tslib_1.__extends(XmlUrlResolver, _super);
    function XmlUrlResolver() {
        var _this = _super.call(this) || this;
        _this.e = null;
        return _this;
    }
    XmlUrlResolver.prototype.set_a = function (a) {
        this.e = a;
    };
    Object.defineProperty(XmlUrlResolver.prototype, "a", {
        set: function (a) {
            this.set_a(a);
        },
        enumerable: true,
        configurable: true
    });
    XmlUrlResolver.prototype.b = function (a, b, c) {
        throw new NotImplementedException(0);
    };
    XmlUrlResolver.prototype.f = function (a) {
        return stringReplace(stringReplace(stringReplace(stringReplace(stringReplace(stringReplace(a, "%3C", "<"), "%3E", ">"), "%23", "#"), "%22", "\""), "%20", " "), "%25", "%");
    };
    XmlUrlResolver.$t = markType(XmlUrlResolver, 'XmlUrlResolver', XmlResolver.$);
    return XmlUrlResolver;
}(XmlResolver));
export { XmlUrlResolver };
//# sourceMappingURL=XmlUrlResolver.js.map