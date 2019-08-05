//
// Original version: https://github.com/mosa/Mono-Class-Libraries/blob/master/mcs/class/System.XML/System.Xml/XmlTextReader.cs
//
// System.Xml.XmlInputStream 
//	encoding-specification-wise XML input stream and reader
//
// Author:
//	Atsushi Enomoto (ginga@kit.hi-ho.ne.jp)
//
//	(C)2003 Atsushi Enomoto
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
import { NonBlockingStreamReader } from "./NonBlockingStreamReader";
import { XmlInputStream } from "./XmlInputStream";
import { markType } from "./type";
import { XmlException } from "./XmlException";
/**
 * @hidden
 */
export class XmlStreamReader extends NonBlockingStreamReader {
    constructor(a, ..._rest) {
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0:
                {
                    let c = _rest[0];
                    super(c, c.actualEncoding != null ? c.actualEncoding : XmlInputStream.strictUTF8);
                    this.ae = null;
                    this.ae = c;
                }
                break;
            case 1:
                {
                    let c = _rest[0];
                    let d = [new XmlInputStream(c)];
                    {
                        let f = d[0];
                        super(f, f.actualEncoding != null ? f.actualEncoding : XmlInputStream.strictUTF8);
                        this.ae = null;
                        this.ae = f;
                    }
                }
                break;
        }
    }
    i() {
        this.ae.close();
    }
    c(a, b, c) {
        try {
            return super.c(a, b, c);
        }
        catch (d) {
            throw new XmlException(3, "invalid data.");
        }
    }
    dispose1(a) {
        super.dispose1(a);
        if (a) {
            this.i();
        }
    }
}
XmlStreamReader.$t = markType(XmlStreamReader, 'XmlStreamReader', NonBlockingStreamReader.$);
XmlStreamReader.ad = new XmlException(3, "invalid data.");
//# sourceMappingURL=XmlStreamReader.js.map