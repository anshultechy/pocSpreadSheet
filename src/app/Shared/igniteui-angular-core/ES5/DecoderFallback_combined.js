//
// DecoderReplacementFallbackBuffer.cs
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
import { Base, callStaticConstructors, markType, typeCast } from "./type";
import { DecoderFallbackBuffer } from "./DecoderFallbackBuffer";
import { DecoderExceptionFallbackBuffer } from "./DecoderExceptionFallbackBuffer";
import { ArgumentNullException } from "./ArgumentNullException";
import { ArgumentException } from "./ArgumentException";
import { ArgumentOutOfRangeException } from "./ArgumentOutOfRangeException";
import { charMinValue } from "./string";
/**
 * @hidden
 */
var DecoderFallback = /** @class */ (function (_super) {
    tslib_1.__extends(DecoderFallback, _super);
    function DecoderFallback() {
        return _super.call(this) || this;
    }
    DecoderFallback.staticInit = function () {
        DecoderFallback.b = new DecoderExceptionFallback();
        DecoderFallback.d = new DecoderReplacementFallback(0);
        DecoderFallback.f = new DecoderReplacementFallback(1, "�");
    };
    Object.defineProperty(DecoderFallback, "c", {
        get: function () {
            return DecoderFallback.b;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DecoderFallback, "e", {
        get: function () {
            return DecoderFallback.d;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DecoderFallback, "g", {
        get: function () {
            return DecoderFallback.f;
        },
        enumerable: true,
        configurable: true
    });
    DecoderFallback.$t = markType(DecoderFallback, 'DecoderFallback');
    DecoderFallback.b = null;
    DecoderFallback.d = null;
    DecoderFallback.f = null;
    return DecoderFallback;
}(Base));
export { DecoderFallback };
/**
 * @hidden
 */
var DecoderExceptionFallback = /** @class */ (function (_super) {
    tslib_1.__extends(DecoderExceptionFallback, _super);
    function DecoderExceptionFallback() {
        return _super.call(this) || this;
    }
    DecoderExceptionFallback.prototype.get_a = function () {
        return 0;
    };
    Object.defineProperty(DecoderExceptionFallback.prototype, "a", {
        get: function () {
            return this.get_a();
        },
        enumerable: true,
        configurable: true
    });
    DecoderExceptionFallback.prototype.h = function () {
        return new DecoderExceptionFallbackBuffer();
    };
    DecoderExceptionFallback.prototype.equals = function (a) {
        return (typeCast(DecoderExceptionFallback.$, a) !== null);
    };
    DecoderExceptionFallback.prototype.getHashCode = function () {
        return 0;
    };
    DecoderExceptionFallback.$t = markType(DecoderExceptionFallback, 'DecoderExceptionFallback', DecoderFallback.$);
    return DecoderExceptionFallback;
}(DecoderFallback));
export { DecoderExceptionFallback };
/**
 * @hidden
 */
var DecoderReplacementFallback = /** @class */ (function (_super) {
    tslib_1.__extends(DecoderReplacementFallback, _super);
    function DecoderReplacementFallback(a) {
        var _rest = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            _rest[_i - 1] = arguments[_i];
        }
        var _this = this;
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0:
                {
                    var c = ["?"];
                    {
                        var e = c[0];
                        _this = _super.call(this) || this;
                        _this.j = null;
                        if (e == null) {
                            throw new ArgumentNullException(0, "replacement");
                        }
                        _this.j = e;
                    }
                }
                break;
            case 1:
                {
                    var c = _rest[0];
                    _this = _super.call(this) || this;
                    _this.j = null;
                    if (c == null) {
                        throw new ArgumentNullException(0, "replacement");
                    }
                    _this.j = c;
                }
                break;
        }
        return _this;
    }
    Object.defineProperty(DecoderReplacementFallback.prototype, "i", {
        get: function () {
            return this.j;
        },
        enumerable: true,
        configurable: true
    });
    DecoderReplacementFallback.prototype.get_a = function () {
        return this.j.length;
    };
    Object.defineProperty(DecoderReplacementFallback.prototype, "a", {
        get: function () {
            return this.get_a();
        },
        enumerable: true,
        configurable: true
    });
    DecoderReplacementFallback.prototype.h = function () {
        return new DecoderReplacementFallbackBuffer(this);
    };
    DecoderReplacementFallback.prototype.equals = function (a) {
        var b = typeCast(DecoderReplacementFallback.$, a);
        return b != null && this.j == b.j;
    };
    DecoderReplacementFallback.prototype.getHashCode = function () {
        return Base.getHashCodeStatic(this.j);
    };
    DecoderReplacementFallback.$t = markType(DecoderReplacementFallback, 'DecoderReplacementFallback', DecoderFallback.$);
    return DecoderReplacementFallback;
}(DecoderFallback));
export { DecoderReplacementFallback };
/**
 * @hidden
 */
var DecoderReplacementFallbackBuffer = /** @class */ (function (_super) {
    tslib_1.__extends(DecoderReplacementFallbackBuffer, _super);
    function DecoderReplacementFallbackBuffer(a) {
        var _this = _super.call(this) || this;
        _this.f = false;
        _this.g = 0;
        _this.h = null;
        if (a == null) {
            throw new ArgumentNullException(0, "fallback");
        }
        _this.h = a.i;
        _this.g = 0;
        return _this;
    }
    DecoderReplacementFallbackBuffer.prototype.get_d = function () {
        return this.f ? this.h.length - this.g : 0;
    };
    Object.defineProperty(DecoderReplacementFallbackBuffer.prototype, "d", {
        get: function () {
            return this.get_d();
        },
        enumerable: true,
        configurable: true
    });
    DecoderReplacementFallbackBuffer.prototype.a = function (a, b) {
        if (a == null) {
            throw new ArgumentNullException(0, "bytesUnknown");
        }
        if (this.f && this.d != 0) {
            throw new ArgumentException(1, "Reentrant Fallback method invocation occured. It might be because either this FallbackBuffer is incorrectly shared by multiple threads, invoked inside Encoding recursively, or Reset invocation is forgotten.");
        }
        if (b < 0 || a.length < b) {
            throw new ArgumentOutOfRangeException(1, "index");
        }
        this.f = true;
        this.g = 0;
        return this.h.length > 0;
    };
    DecoderReplacementFallbackBuffer.prototype.c = function () {
        if (!this.f) {
            return '\0';
        }
        if (this.g >= this.h.length) {
            return charMinValue();
        }
        return this.h.charAt(this.g++);
    };
    DecoderReplacementFallbackBuffer.prototype.b = function () {
        if (this.g == 0) {
            return false;
        }
        this.g--;
        return true;
    };
    DecoderReplacementFallbackBuffer.prototype.e = function () {
        this.f = false;
        this.g = 0;
    };
    DecoderReplacementFallbackBuffer.$t = markType(DecoderReplacementFallbackBuffer, 'DecoderReplacementFallbackBuffer', DecoderFallbackBuffer.$);
    return DecoderReplacementFallbackBuffer;
}(DecoderFallbackBuffer));
export { DecoderReplacementFallbackBuffer };
callStaticConstructors();
//# sourceMappingURL=DecoderFallback_combined.js.map