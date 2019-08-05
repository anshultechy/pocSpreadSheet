//
// System.IO.StringWriter
//
// Authors
//	Marcin Szczepanski (marcins@zipworld.com.au)
//	Sebastien Pouliot  <sebastien@ximian.com>
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
import { TextWriter } from "./TextWriter";
import { Encoding } from "./Encoding";
import { StringBuilder } from "./StringBuilder";
import { markType } from "./type";
import { ArgumentNullException } from "./ArgumentNullException";
import { Locale } from "./Locale";
import { ObjectDisposedException } from "./ObjectDisposedException";
import { ArgumentOutOfRangeException } from "./ArgumentOutOfRangeException";
import { ArgumentException } from "./ArgumentException";
/**
 * @hidden
 */
export class StringWriter extends TextWriter {
    constructor(a, ..._rest) {
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0:
                {
                    let c = [new StringBuilder(0)];
                    {
                        let e = c[0];
                        let f = [e, null];
                        {
                            let h = f[0];
                            let i = f[1];
                            super(0);
                            this.aw = null;
                            this.au = false;
                            if (h == null) {
                                throw new ArgumentNullException(0, "sb");
                            }
                            this.aw = h;
                            this.c = i;
                        }
                    }
                }
                break;
            case 1:
                {
                    let c = _rest[0];
                    let d = [new StringBuilder(0), c];
                    {
                        let f = d[0];
                        let g = d[1];
                        super(0);
                        this.aw = null;
                        this.au = false;
                        if (f == null) {
                            throw new ArgumentNullException(0, "sb");
                        }
                        this.aw = f;
                        this.c = g;
                    }
                }
                break;
            case 2:
                {
                    let c = _rest[0];
                    let d = [c, null];
                    {
                        let f = d[0];
                        let g = d[1];
                        super(0);
                        this.aw = null;
                        this.au = false;
                        if (f == null) {
                            throw new ArgumentNullException(0, "sb");
                        }
                        this.aw = f;
                        this.c = g;
                    }
                }
                break;
            case 3:
                {
                    let c = _rest[0];
                    let d = _rest[1];
                    super(0);
                    this.aw = null;
                    this.au = false;
                    if (c == null) {
                        throw new ArgumentNullException(0, "sb");
                    }
                    this.aw = c;
                    this.c = d;
                }
                break;
        }
    }
    get_h() {
        return Encoding.unicode;
    }
    get h() {
        return this.get_h();
    }
    i() {
        this.dispose1(true);
        this.au = true;
    }
    dispose1(a) {
        super.dispose1(a);
        this.au = true;
    }
    av() {
        return this.aw;
    }
    toString() {
        return this.aw.toString();
    }
    o(a) {
        if (this.au) {
            throw new ObjectDisposedException(1, "StringReader", Locale.a("Cannot write to a closed StringWriter"));
        }
        this.aw.h(a);
    }
    v(a) {
        if (this.au) {
            throw new ObjectDisposedException(1, "StringReader", Locale.a("Cannot write to a closed StringWriter"));
        }
        this.aw.l(a);
    }
    m(a, b, c) {
        if (this.au) {
            throw new ObjectDisposedException(1, "StringReader", Locale.a("Cannot write to a closed StringWriter"));
        }
        if (a == null) {
            throw new ArgumentNullException(0, "buffer");
        }
        if (b < 0) {
            throw new ArgumentOutOfRangeException(2, "index", "< 0");
        }
        if (c < 0) {
            throw new ArgumentOutOfRangeException(2, "count", "< 0");
        }
        if (b > a.length - c) {
            throw new ArgumentException(1, "index + count > buffer.Length");
        }
        this.aw.g(a, b, c);
    }
}
StringWriter.$t = markType(StringWriter, 'StringWriter', TextWriter.$);
//# sourceMappingURL=StringWriter.js.map