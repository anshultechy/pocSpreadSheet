//
// System.Xml.XmlResolver.cs
//
// Author:
//   Jason Diamond (jason@injektilo.org)
//   Atsushi Enomoto (atsushi@ximian.com)
//
// (C) 2001 Jason Diamond  http://injektilo.org/
// Copyright (C) 2004,2009 Novell, Inc (http://www.novell.com)
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
import { Uri } from "./Uri";
import { ArgumentNullException } from "./ArgumentNullException";
import { InvalidOperationException } from "./InvalidOperationException";
import { stringStartsWith, stringReplace } from "./string";
/**
 * @hidden
 */
var XmlResolver = /** @class */ (function (_super) {
    tslib_1.__extends(XmlResolver, _super);
    function XmlResolver() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    XmlResolver.prototype.d = function (a, b) {
        if (a == null) {
            if (b == null) {
                throw new ArgumentNullException(0, "Either baseUri or relativeUri are required.");
            }
            if (stringStartsWith(b, "http:") || stringStartsWith(b, "https:") || stringStartsWith(b, "ftp:") || stringStartsWith(b, "file:")) {
                return new Uri(0, b);
            }
            throw new InvalidOperationException(1, b + " not supported");
        }
        if (b == null) {
            return a;
        }
        return new Uri(3, a, this.c(b));
    };
    XmlResolver.prototype.c = function (a) {
        return stringReplace(stringReplace(stringReplace(stringReplace(stringReplace(a, "<", "%3C"), ">", "%3E"), "#", "%23"), "%", "%25"), "\"", "%22");
    };
    XmlResolver.$t = markType(XmlResolver, 'XmlResolver');
    return XmlResolver;
}(Base));
export { XmlResolver };
//# sourceMappingURL=XmlResolver.js.map