//
// DecoderExceptionFallbackBuffer.cs
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
import { DecoderFallbackBuffer } from "./DecoderFallbackBuffer";
import { DecoderFallbackException } from "./DecoderFallbackException";
import { markType } from "./type";
import { charMinValue } from "./string";
/**
 * @hidden
 */
var DecoderExceptionFallbackBuffer = /** @class */ (function (_super) {
    tslib_1.__extends(DecoderExceptionFallbackBuffer, _super);
    function DecoderExceptionFallbackBuffer() {
        return _super.call(this) || this;
    }
    DecoderExceptionFallbackBuffer.prototype.get_d = function () {
        return 0;
    };
    Object.defineProperty(DecoderExceptionFallbackBuffer.prototype, "d", {
        get: function () {
            return this.get_d();
        },
        enumerable: true,
        configurable: true
    });
    DecoderExceptionFallbackBuffer.prototype.a = function (a, b) {
        throw new DecoderFallbackException(3, null, a, b);
    };
    DecoderExceptionFallbackBuffer.prototype.c = function () {
        return charMinValue();
    };
    DecoderExceptionFallbackBuffer.prototype.b = function () {
        return false;
    };
    DecoderExceptionFallbackBuffer.$t = markType(DecoderExceptionFallbackBuffer, 'DecoderExceptionFallbackBuffer', DecoderFallbackBuffer.$);
    return DecoderExceptionFallbackBuffer;
}(DecoderFallbackBuffer));
export { DecoderExceptionFallbackBuffer };
//# sourceMappingURL=DecoderExceptionFallbackBuffer.js.map