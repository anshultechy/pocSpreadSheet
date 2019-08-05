//
// System.IO.StreamWriter.cs
//
// Authors:
//   Dietmar Maurer (dietmar@ximian.com)
//   Paolo Molaro (lupus@ximian.com)
//
// (C) Ximian, Inc.  http://www.ximian.com
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
import { markType } from "./type";
import { Encoding } from "./Encoding";
import { ArgumentNullException } from "./ArgumentNullException";
import { ArgumentOutOfRangeException } from "./ArgumentOutOfRangeException";
import { ArgumentException } from "./ArgumentException";
import { ObjectDisposedException } from "./ObjectDisposedException";
import { NullStream } from "./NullStream";
import { arrayCopy1 } from "./arrayExtended";
/**
 * @hidden
 */
export class StreamWriter extends TextWriter {
    constructor(a, ..._rest) {
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0:
                {
                    let c = _rest[0];
                    let d = [c, Encoding.uTF8Unmarked, 1024];
                    {
                        let f = d[0];
                        let g = d[1];
                        let h = d[2];
                        super(0);
                        this.a8 = null;
                        this.a6 = null;
                        this.ay = false;
                        this.au = null;
                        this.a0 = 0;
                        this.av = null;
                        this.a1 = 0;
                        this.ax = false;
                        this.az = false;
                        if (null == f) {
                            throw new ArgumentNullException(0, "stream");
                        }
                        if (null == g) {
                            throw new ArgumentNullException(0, "encoding");
                        }
                        if (h <= 0) {
                            throw new ArgumentOutOfRangeException(1, "bufferSize");
                        }
                        if (!f.canWrite) {
                            throw new ArgumentException(1, "Can not write to stream");
                        }
                        this.a6 = f;
                        this.bb(g, h);
                    }
                }
                break;
            case 1:
                {
                    let c = _rest[0];
                    let d = _rest[1];
                    let e = [c, d, 1024];
                    {
                        let g = e[0];
                        let h = e[1];
                        let i = e[2];
                        super(0);
                        this.a8 = null;
                        this.a6 = null;
                        this.ay = false;
                        this.au = null;
                        this.a0 = 0;
                        this.av = null;
                        this.a1 = 0;
                        this.ax = false;
                        this.az = false;
                        if (null == g) {
                            throw new ArgumentNullException(0, "stream");
                        }
                        if (null == h) {
                            throw new ArgumentNullException(0, "encoding");
                        }
                        if (i <= 0) {
                            throw new ArgumentOutOfRangeException(1, "bufferSize");
                        }
                        if (!g.canWrite) {
                            throw new ArgumentException(1, "Can not write to stream");
                        }
                        this.a6 = g;
                        this.bb(h, i);
                    }
                }
                break;
            case 2:
                {
                    let c = _rest[0];
                    let d = _rest[1];
                    let e = _rest[2];
                    super(0);
                    this.a8 = null;
                    this.a6 = null;
                    this.ay = false;
                    this.au = null;
                    this.a0 = 0;
                    this.av = null;
                    this.a1 = 0;
                    this.ax = false;
                    this.az = false;
                    if (null == c) {
                        throw new ArgumentNullException(0, "stream");
                    }
                    if (null == d) {
                        throw new ArgumentNullException(0, "encoding");
                    }
                    if (e <= 0) {
                        throw new ArgumentOutOfRangeException(1, "bufferSize");
                    }
                    if (!c.canWrite) {
                        throw new ArgumentException(1, "Can not write to stream");
                    }
                    this.a6 = c;
                    this.bb(d, e);
                }
                break;
        }
    }
    bb(a, b) {
        this.a8 = a;
        this.a1 = this.a0 = 0;
        let c = Math.max(b, 256);
        this.av = new Array(c);
        this.au = new Array(a.getMaxByteCount(c));
        if (this.a6.canSeek && this.a6.position > 0) {
            this.az = true;
        }
    }
    get_aw() {
        return this.ay;
    }
    set_aw(a) {
        this.ay = a;
        if (this.ay) {
            this.k();
        }
    }
    get aw() {
        return this.get_aw();
    }
    set aw(a) {
        this.set_aw(a);
    }
    get_a5() {
        return this.a6;
    }
    get a5() {
        return this.get_a5();
    }
    get_h() {
        return this.a8;
    }
    get h() {
        return this.get_h();
    }
    dispose1(a) {
        let b = null;
        if (!this.ax && a && this.a6 != null) {
            try {
                this.k();
            }
            catch (c) {
                b = c;
            }
            this.ax = true;
            try {
                this.a6.close();
            }
            catch (d) {
                if (b == null) {
                    b = d;
                }
            }
        }
        this.a6 = null;
        this.au = null;
        this.a8 = null;
        this.av = null;
        if (b != null) {
            throw b;
        }
    }
    k() {
        if (this.ax) {
            throw new ObjectDisposedException(0, "StreamWriter");
        }
        this.a9();
        if (this.a0 > 0) {
            this.ba();
            this.a6.flush();
        }
    }
    ba() {
        if (!this.az && this.a0 > 0) {
            let a = this.a8.getPreamble();
            if (a.length > 0) {
                this.a6.write(a, 0, a.length);
            }
            this.az = true;
        }
        this.a6.write(this.au, 0, this.a0);
        this.a0 = 0;
    }
    a9() {
        if (this.a0 > 0) {
            this.ba();
        }
        if (this.a1 > 0) {
            let a = this.a8.getBytes2(this.av, 0, this.a1, this.au, this.a0);
            this.a0 += a;
            this.a1 = 0;
        }
    }
    m(a, b, c) {
        if (this.ax) {
            throw new ObjectDisposedException(0, "StreamWriter");
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
        this.bc(a, b, c);
        if (this.ay) {
            this.k();
        }
    }
    bc(a, b, c) {
        while (c > 0) {
            let d = this.av.length - this.a1;
            if (d == 0) {
                this.a9();
                d = this.av.length;
            }
            if (d > c) {
                d = c;
            }
            arrayCopy1(a, b, this.av, this.a1, d);
            c -= d;
            b += d;
            this.a1 += d;
        }
    }
    bd(a) {
        let b = a.length;
        let c = 0;
        while (b > 0) {
            let d = this.av.length - this.a1;
            if (d == 0) {
                this.a9();
                d = this.av.length;
            }
            if (d > b) {
                d = b;
            }
            for (let e = 0; e < d; e++) {
                this.av[e + this.a1] = a.charAt(e + c);
            }
            b -= d;
            c += d;
            this.a1 += d;
        }
    }
    o(a) {
        if (this.ax) {
            throw new ObjectDisposedException(0, "StreamWriter");
        }
        if (this.a1 >= this.av.length) {
            this.a9();
        }
        this.av[this.a1++] = a;
        if (this.ay) {
            this.k();
        }
    }
    l(a) {
        if (this.ax) {
            throw new ObjectDisposedException(0, "StreamWriter");
        }
        if (a != null) {
            this.bc(a, 0, a.length);
        }
        if (this.ay) {
            this.k();
        }
    }
    v(a) {
        if (this.ax) {
            throw new ObjectDisposedException(0, "StreamWriter");
        }
        if (a != null) {
            this.bd(a);
        }
        if (this.ay) {
            this.k();
        }
    }
    i() {
        this.dispose1(true);
    }
}
StreamWriter.$t = markType(StreamWriter, 'StreamWriter', TextWriter.$);
StreamWriter.a7 = new StreamWriter(2, new NullStream(), Encoding.uTF8Unmarked, 1);
//# sourceMappingURL=StreamWriter.js.map