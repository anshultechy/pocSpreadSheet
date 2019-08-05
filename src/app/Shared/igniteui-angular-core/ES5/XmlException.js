import * as tslib_1 from "tslib";
//
// XmlException.cs
//
// Author:
//   Jason Diamond (jason@injektilo.org)
//   Atsushi Enomoto (atsushi@ximian.com)
//
// (C) 2002 Jason Diamond  http://injektilo.org/
// Copyright (C) 2004-2005 Novell, Inc (http://www.novell.com)
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
import { BaseError, markType } from "./type";
/**
 * @hidden
 */
var XmlException = /** @class */ (function (_super) {
    tslib_1.__extends(XmlException, _super);
    function XmlException(a) {
        var _rest = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            _rest[_i - 1] = arguments[_i];
        }
        var _this = this;
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0:
                {
                    _this = _super.call(this, 0) || this;
                    _this.d = 0;
                    _this.f = 0;
                    _this.i = null;
                    _this.h = null;
                    _this.c = null;
                    _this.h = "Xml_DefaultException";
                    _this.c = new Array(1);
                }
                break;
            case 1:
                {
                    var c = _rest[0];
                    var d = _rest[1];
                    _this = _super.call(this, 2, c, d) || this;
                    _this.d = 0;
                    _this.f = 0;
                    _this.i = null;
                    _this.h = null;
                    _this.c = null;
                    _this.h = "Xml_UserException";
                    _this.c = [c];
                }
                break;
            case 2:
                {
                    var c = _rest[0];
                    var d = _rest[1];
                    var e = _rest[2];
                    _this = _super.call(this, 0) || this;
                    _this.d = 0;
                    _this.f = 0;
                    _this.i = null;
                    _this.h = null;
                    _this.c = null;
                }
                break;
            case 3:
                {
                    var c = _rest[0];
                    _this = _super.call(this, 1, c) || this;
                    _this.d = 0;
                    _this.f = 0;
                    _this.i = null;
                    _this.h = null;
                    _this.c = null;
                    _this.h = "Xml_UserException";
                    _this.c = [c];
                }
                break;
            case 4:
                {
                    var c = _rest[0];
                    var d = _rest[1];
                    var e = _rest[2];
                    var f = _rest[3];
                    var g = [c, d];
                    {
                        var i = g[0];
                        var j = g[1];
                        _this = _super.call(this, 2, i, j) || this;
                        _this.d = 0;
                        _this.f = 0;
                        _this.i = null;
                        _this.h = null;
                        _this.c = null;
                        _this.h = "Xml_UserException";
                        _this.c = [i];
                    }
                    _this.d = e;
                    _this.f = f;
                }
                break;
        }
        return _this;
    }
    Object.defineProperty(XmlException.prototype, "lineNumber", {
        get: function () {
            return this.d;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(XmlException.prototype, "linePosition", {
        get: function () {
            return this.f;
        },
        enumerable: true,
        configurable: true
    });
    XmlException.$t = markType(XmlException, 'XmlException', BaseError.$);
    return XmlException;
}(BaseError));
export { XmlException };
//# sourceMappingURL=XmlException.js.map