//
// DecoderFallbackException.cs
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
import { ArgumentException } from "./ArgumentException";
import { markType } from "./type";
/**
 * @hidden
 */
export class DecoderFallbackException extends ArgumentException {
    constructor(a, ..._rest) {
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0:
                {
                    let c = [null];
                    {
                        let e = c[0];
                        super(1, e);
                        this.c = null;
                        this.e = -1;
                    }
                }
                break;
            case 1:
                {
                    let c = _rest[0];
                    super(1, c);
                    this.c = null;
                    this.e = -1;
                }
                break;
            case 2:
                {
                    let c = _rest[0];
                    let d = _rest[1];
                    super(3, c, d);
                    this.c = null;
                    this.e = -1;
                }
                break;
            case 3:
                {
                    let c = _rest[0];
                    let d = _rest[1];
                    let e = _rest[2];
                    super(1, c);
                    this.c = null;
                    this.e = -1;
                    this.c = d;
                    this.e = e;
                }
                break;
        }
    }
    get bytesUnknown() {
        return this.c;
    }
    get index() {
        return this.e;
    }
}
DecoderFallbackException.$t = markType(DecoderFallbackException, 'DecoderFallbackException', ArgumentException.$);
//# sourceMappingURL=DecoderFallbackException.js.map