//
// DecoderReplacementFallbackBuffer.cs
//
// Author:
//	Atsushi Enomoto <atsushi@ximian.com>
//
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
export class DecoderFallback extends Base {
    constructor() {
        super();
    }
    static staticInit() {
        DecoderFallback.b = new DecoderExceptionFallback();
        DecoderFallback.d = new DecoderReplacementFallback(0);
        DecoderFallback.f = new DecoderReplacementFallback(1, "�");
    }
    static get c() {
        return DecoderFallback.b;
    }
    static get e() {
        return DecoderFallback.d;
    }
    static get g() {
        return DecoderFallback.f;
    }
}
DecoderFallback.$t = markType(DecoderFallback, 'DecoderFallback');
DecoderFallback.b = null;
DecoderFallback.d = null;
DecoderFallback.f = null;
/**
 * @hidden
 */
export class DecoderExceptionFallback extends DecoderFallback {
    constructor() {
        super();
    }
    get_a() {
        return 0;
    }
    get a() {
        return this.get_a();
    }
    h() {
        return new DecoderExceptionFallbackBuffer();
    }
    equals(a) {
        return (typeCast(DecoderExceptionFallback.$, a) !== null);
    }
    getHashCode() {
        return 0;
    }
}
DecoderExceptionFallback.$t = markType(DecoderExceptionFallback, 'DecoderExceptionFallback', DecoderFallback.$);
/**
 * @hidden
 */
export class DecoderReplacementFallback extends DecoderFallback {
    constructor(a, ..._rest) {
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0:
                {
                    let c = ["?"];
                    {
                        let e = c[0];
                        super();
                        this.j = null;
                        if (e == null) {
                            throw new ArgumentNullException(0, "replacement");
                        }
                        this.j = e;
                    }
                }
                break;
            case 1:
                {
                    let c = _rest[0];
                    super();
                    this.j = null;
                    if (c == null) {
                        throw new ArgumentNullException(0, "replacement");
                    }
                    this.j = c;
                }
                break;
        }
    }
    get i() {
        return this.j;
    }
    get_a() {
        return this.j.length;
    }
    get a() {
        return this.get_a();
    }
    h() {
        return new DecoderReplacementFallbackBuffer(this);
    }
    equals(a) {
        let b = typeCast(DecoderReplacementFallback.$, a);
        return b != null && this.j == b.j;
    }
    getHashCode() {
        return Base.getHashCodeStatic(this.j);
    }
}
DecoderReplacementFallback.$t = markType(DecoderReplacementFallback, 'DecoderReplacementFallback', DecoderFallback.$);
/**
 * @hidden
 */
export class DecoderReplacementFallbackBuffer extends DecoderFallbackBuffer {
    constructor(a) {
        super();
        this.f = false;
        this.g = 0;
        this.h = null;
        if (a == null) {
            throw new ArgumentNullException(0, "fallback");
        }
        this.h = a.i;
        this.g = 0;
    }
    get_d() {
        return this.f ? this.h.length - this.g : 0;
    }
    get d() {
        return this.get_d();
    }
    a(a, b) {
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
    }
    c() {
        if (!this.f) {
            return '\0';
        }
        if (this.g >= this.h.length) {
            return charMinValue();
        }
        return this.h.charAt(this.g++);
    }
    b() {
        if (this.g == 0) {
            return false;
        }
        this.g--;
        return true;
    }
    e() {
        this.f = false;
        this.g = 0;
    }
}
DecoderReplacementFallbackBuffer.$t = markType(DecoderReplacementFallbackBuffer, 'DecoderReplacementFallbackBuffer', DecoderFallbackBuffer.$);
callStaticConstructors();
//# sourceMappingURL=DecoderFallback_combined.js.map