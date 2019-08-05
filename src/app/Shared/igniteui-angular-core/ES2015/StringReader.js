//
// System.IO.StringReader
//
// Author: Marcin Szczepanski (marcins@zipworld.com.au)
//
// Copyright (C) 2004 Novell (http://www.novell.com)
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
import { TextReader } from "./TextReader";
import { ArgumentNullException } from "./ArgumentNullException";
import { ArgumentException } from "./ArgumentException";
import { ArgumentOutOfRangeException } from "./ArgumentOutOfRangeException";
import { ObjectDisposedException } from "./ObjectDisposedException";
import { markType } from "./type";
import { stringEmpty, stringCopyToCharArray } from "./string";
/**
 * @hidden
 */
export class StringReader extends TextReader {
    constructor(a) {
        super();
        this.m = null;
        this.k = 0;
        this.l = 0;
        if (a == null) {
            throw new ArgumentNullException(0, "s");
        }
        this.m = a;
        this.k = 0;
        this.l = a.length;
    }
    i() {
        this.dispose1(true);
    }
    dispose1(a) {
        this.m = null;
        super.dispose1(a);
    }
    a() {
        this.n();
        if (this.k >= this.l) {
            return -1;
        }
        else {
            return this.m.charAt(this.k).charCodeAt(0);
        }
    }
    b() {
        this.n();
        if (this.k >= this.l) {
            return -1;
        }
        else {
            return this.m.charAt(this.k++).charCodeAt(0);
        }
    }
    c(a, b, c) {
        this.n();
        if (a == null) {
            throw new ArgumentNullException(0, "buffer");
        }
        if (a.length - b < c) {
            throw new ArgumentException(1, stringEmpty());
        }
        if (b < 0 || c < 0) {
            throw new ArgumentOutOfRangeException(0);
        }
        let d;
        if (this.k > this.l - c) {
            d = this.l - this.k;
        }
        else {
            d = c;
        }
        stringCopyToCharArray(this.m, this.k, a, b, d);
        this.k += d;
        return d;
    }
    g() {
        this.n();
        if (this.k >= this.m.length) {
            return null;
        }
        let a = this.m.indexOf('\r', this.k);
        let b = this.m.indexOf('\n', this.k);
        let c;
        let d = false;
        if (a == -1) {
            if (b == -1) {
                return this.h();
            }
            c = b;
        }
        else if (b == -1) {
            c = a;
        }
        else {
            c = (a > b) ? b : a;
            d = (a + 1 == b);
        }
        let e = this.m.substr(this.k, c - this.k);
        this.k = c + ((d) ? 2 : 1);
        return e;
    }
    h() {
        this.n();
        let a = this.m.substr(this.k, this.l - this.k);
        this.k = this.l;
        return a;
    }
    n() {
        if (this.m == null) {
            throw new ObjectDisposedException(1, "StringReader", "Cannot read from a closed StringReader");
        }
    }
}
StringReader.$t = markType(StringReader, 'StringReader', TextReader.$);
//# sourceMappingURL=StringReader.js.map