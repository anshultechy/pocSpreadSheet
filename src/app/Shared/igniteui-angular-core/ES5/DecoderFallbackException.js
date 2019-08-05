//
// DecoderFallbackException.cs
//
// Author:
//	Atsushi Enomoto <atsushi@ximian.com>
//
import * as tslib_1 from "tslib";
//
// Copyright (C) 2005 Novell, Inc (http://www.novell.com)
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
import { ArgumentException } from "./ArgumentException";
import { markType } from "./type";
/**
 * @hidden
 */
var DecoderFallbackException = /** @class */ (function (_super) {
    tslib_1.__extends(DecoderFallbackException, _super);
    function DecoderFallbackException(a) {
        var _rest = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            _rest[_i - 1] = arguments[_i];
        }
        var _this = this;
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0:
                {
                    var c = [null];
                    {
                        var e = c[0];
                        _this = _super.call(this, 1, e) || this;
                        _this.c = null;
                        _this.e = -1;
                    }
                }
                break;
            case 1:
                {
                    var c = _rest[0];
                    _this = _super.call(this, 1, c) || this;
                    _this.c = null;
                    _this.e = -1;
                }
                break;
            case 2:
                {
                    var c = _rest[0];
                    var d = _rest[1];
                    _this = _super.call(this, 3, c, d) || this;
                    _this.c = null;
                    _this.e = -1;
                }
                break;
            case 3:
                {
                    var c = _rest[0];
                    var d = _rest[1];
                    var e = _rest[2];
                    _this = _super.call(this, 1, c) || this;
                    _this.c = null;
                    _this.e = -1;
                    _this.c = d;
                    _this.e = e;
                }
                break;
        }
        return _this;
    }
    Object.defineProperty(DecoderFallbackException.prototype, "bytesUnknown", {
        get: function () {
            return this.c;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DecoderFallbackException.prototype, "index", {
        get: function () {
            return this.e;
        },
        enumerable: true,
        configurable: true
    });
    DecoderFallbackException.$t = markType(DecoderFallbackException, 'DecoderFallbackException', ArgumentException.$);
    return DecoderFallbackException;
}(ArgumentException));
export { DecoderFallbackException };
//# sourceMappingURL=DecoderFallbackException.js.map