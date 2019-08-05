//
// System.IO.TextReader
//
// Authors:
//   Marcin Szczepanski (marcins@zipworld.com.au)
//   Miguel de Icaza (miguel@gnome.org)
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
import { Base, IDisposable_$type, callStaticConstructors, typeCast, markType } from "./type";
import { ArgumentNullException } from "./ArgumentNullException";
import { stringEmpty } from "./string";
/**
 * @hidden
 */
export class TextReader extends Base {
    constructor() {
        super();
    }
    static staticInit() {
        TextReader.e = new TextReader_NullTextReader();
    }
    i() {
        this.dispose1(true);
    }
    dispose() {
        this.dispose1(true);
    }
    dispose1(a) {
        if (a) {
        }
        return;
    }
    a() {
        return -1;
    }
    b() {
        return -1;
    }
    c(a, b, c) {
        let d, e;
        for (e = 0; e < c; e++) {
            if ((d = this.b()) == -1) {
                return e;
            }
            a[b + e] = String.fromCharCode(d);
        }
        return e;
    }
    d(a, b, c) {
        let d = 0;
        let e = 0;
        do {
            e = this.c(a, b, c);
            b += e;
            d += e;
            c -= e;
        } while (e != 0 && c > 0);
        return d;
    }
    g() {
        return stringEmpty();
    }
    h() {
        return stringEmpty();
    }
    static f(a) {
        if (a == null) {
            throw new ArgumentNullException(0, "reader is null");
        }
        if (typeCast(SynchronizedReader.$, a) !== null) {
            return a;
        }
        return new SynchronizedReader(a);
    }
}
TextReader.$t = markType(TextReader, 'TextReader', Base.$, [IDisposable_$type]);
TextReader.e = null;
/**
 * @hidden
 */
export class TextReader_NullTextReader extends TextReader {
    g() {
        return null;
    }
}
TextReader_NullTextReader.$t = markType(TextReader_NullTextReader, 'TextReader_NullTextReader', TextReader.$);
/**
 * @hidden
 */
export class SynchronizedReader extends TextReader {
    constructor(a) {
        super();
        this.k = null;
        this.k = a;
    }
    i() {
        this.k.i();
    }
    a() {
        return this.k.a();
    }
    d(a, b, c) {
        return this.k.d(a, b, c);
    }
    g() {
        return this.k.g();
    }
    h() {
        return this.k.h();
    }
    b() {
        return this.k.b();
    }
    c(a, b, c) {
        return this.k.c(a, b, c);
    }
}
SynchronizedReader.$t = markType(SynchronizedReader, 'SynchronizedReader', TextReader.$);
callStaticConstructors();
//# sourceMappingURL=TextReader_combined.js.map