import * as tslib_1 from "tslib";
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
var XmlStreamReader = /** @class */ (function (_super) {
    tslib_1.__extends(XmlStreamReader, _super);
    function XmlStreamReader(a) {
        var _rest = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            _rest[_i - 1] = arguments[_i];
        }
        var _this = this;
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0:
                {
                    var c = _rest[0];
                    _this = _super.call(this, c, c.actualEncoding != null ? c.actualEncoding : XmlInputStream.strictUTF8) || this;
                    _this.ae = null;
                    _this.ae = c;
                }
                break;
            case 1:
                {
                    var c = _rest[0];
                    var d = [new XmlInputStream(c)];
                    {
                        var f = d[0];
                        _this = _super.call(this, f, f.actualEncoding != null ? f.actualEncoding : XmlInputStream.strictUTF8) || this;
                        _this.ae = null;
                        _this.ae = f;
                    }
                }
                break;
        }
        return _this;
    }
    XmlStreamReader.prototype.i = function () {
        this.ae.close();
    };
    XmlStreamReader.prototype.c = function (a, b, c) {
        try {
            return _super.prototype.c.call(this, a, b, c);
        }
        catch (d) {
            throw new XmlException(3, "invalid data.");
        }
    };
    XmlStreamReader.prototype.dispose1 = function (a) {
        _super.prototype.dispose1.call(this, a);
        if (a) {
            this.i();
        }
    };
    XmlStreamReader.$t = markType(XmlStreamReader, 'XmlStreamReader', NonBlockingStreamReader.$);
    XmlStreamReader.ad = new XmlException(3, "invalid data.");
    return XmlStreamReader;
}(NonBlockingStreamReader));
export { XmlStreamReader };
//# sourceMappingURL=XmlStreamReader.js.map