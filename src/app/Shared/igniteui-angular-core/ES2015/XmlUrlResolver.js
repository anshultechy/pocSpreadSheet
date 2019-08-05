// System.Xml.XmlUrlResolver.cs
//
// Author: Duncan Mak (duncan@ximian.com)
//	   Atsushi Enomoto (ginga@kit.hi-ho.ne.jp)
//
// (C) Ximian, Inc.
//
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
export class XmlUrlResolver extends XmlResolver {
    constructor() {
        super();
        this.e = null;
    }
    set_a(a) {
        this.e = a;
    }
    set a(a) {
        this.set_a(a);
    }
    b(a, b, c) {
        throw new NotImplementedException(0);
    }
    f(a) {
        return stringReplace(stringReplace(stringReplace(stringReplace(stringReplace(stringReplace(a, "%3C", "<"), "%3E", ">"), "%23", "#"), "%22", "\""), "%20", " "), "%25", "%");
    }
}
XmlUrlResolver.$t = markType(XmlUrlResolver, 'XmlUrlResolver', XmlResolver.$);
//# sourceMappingURL=XmlUrlResolver.js.map