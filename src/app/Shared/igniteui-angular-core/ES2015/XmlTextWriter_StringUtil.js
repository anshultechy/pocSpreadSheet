// From https://github.com/mosa/Mono-Class-Libraries/blob/28840dee90750d61ed6cbdb753292cd64cac169e/mcs/class/System.XML/System.Xml/XmlTextWriter2.cs
//
// XmlTextWriter.cs
//
// Author:
//	Atsushi Enomoto  <atsushi@ximian.com>
//
// Copyright (C) 2006 Novell, Inc.
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
import { CultureInfo } from "./culture";
import { stringFormat2 } from "./stringExtended";
/**
 * @hidden
 */
export class XmlTextWriter_StringUtil extends Base {
    static d(a, b) {
        return XmlTextWriter_StringUtil.a.indexOf1(a, b);
    }
    static c(a, b) {
        return XmlTextWriter_StringUtil.a.compare4(a, b);
    }
    static e(a, ...b) {
        return stringFormat2(XmlTextWriter_StringUtil.b, a, ...b);
    }
}
XmlTextWriter_StringUtil.$t = markType(XmlTextWriter_StringUtil, 'XmlTextWriter_StringUtil');
XmlTextWriter_StringUtil.b = CultureInfo.invariantCulture;
XmlTextWriter_StringUtil.a = CultureInfo.invariantCulture.compareInfo;
//# sourceMappingURL=XmlTextWriter_StringUtil.js.map