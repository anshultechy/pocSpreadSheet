//
// System.FormatException.cs
//
// Authors:
//   Joe Shaw (joe@ximian.com)
//   Andreas Nahr (ClassDevelopment@A-SoftTech.com)
//
// (C) 2001 Ximian, Inc.  http://www.ximian.com
//
//
// Copyright (C) 2004 Novell, Inc (http://www.novell.com)
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
import { Locale } from "./Locale";
/**
 * @hidden
 */
export class FormatException2 extends BaseError {
    constructor(a, ..._rest) {
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0:
                {
                    super(1, Locale.a("Invalid format."));
                    this._hResult = 0;
                    this.hResult = -2146233033;
                }
                break;
            case 1:
                {
                    let c = _rest[0];
                    super(1, c);
                    this._hResult = 0;
                    this.hResult = -2146233033;
                }
                break;
            case 2:
                {
                    let c = _rest[0];
                    let d = _rest[1];
                    super(2, c, d);
                    this._hResult = 0;
                    this.hResult = -2146233033;
                }
                break;
        }
    }
    get hResult() {
        return this._hResult;
    }
    set hResult(a) {
        this._hResult = a;
    }
}
FormatException2.$t = markType(FormatException2, 'FormatException2', BaseError.$);
//# sourceMappingURL=FormatException2.js.map