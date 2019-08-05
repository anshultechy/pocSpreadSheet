//
// System.Xml.NameTable.cs
//
// Authors:
//	Duncan Mak (duncan@ximian.com)
//	Ben Maurer (bmaurer@users.sourceforge.net)
//
// (C) Ximian, Inc.
// (C) 2003 Ben Maurer
//
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
import { XmlNameTable } from "./XmlNameTable";
import { NameTable_Entry } from "./NameTable_Entry";
import { IndexOutOfRangeException } from "./IndexOutOfRangeException";
import { ArgumentNullException } from "./ArgumentNullException";
import { markType } from "./type";
import { stringEmpty, stringCreateFromCharArraySlice } from "./string";
/**
 * @hidden
 */
export class NameTable extends XmlNameTable {
    constructor() {
        super();
        this.g = 128;
        this.e = new Array(128);
        this.i = 0;
    }
    a(a, b, c) {
        if (((0 > b) && (b >= a.length)) || ((0 > c) && (c >= a.length - c))) {
            throw new IndexOutOfRangeException(1, "The Index is out of range.");
        }
        if (c == 0) {
            return stringEmpty();
        }
        let d = 0;
        let e = b + c;
        for (let f = b; f < e; f++) {
            d = (d << 5) - d + a[f].charCodeAt(0);
        }
        d &= 2147483647;
        for (let g = this.e[d % this.g]; g != null; g = g.d) {
            if (g.a == d && g.b == c && NameTable.f(g.c, a, b)) {
                return g.c;
            }
        }
        return this.j(stringCreateFromCharArraySlice(a, b, c), d);
    }
    b(a) {
        if (a == null) {
            throw new ArgumentNullException(0, "key");
        }
        let b = a.length;
        if (b == 0) {
            return stringEmpty();
        }
        let c = 0;
        for (let d = 0; d < b; d++) {
            c = (c << 5) - c + a.charAt(d).charCodeAt(0);
        }
        c &= 2147483647;
        for (let e = this.e[c % this.g]; e != null; e = e.d) {
            if (e.a == c && e.b == a.length && e.c == a) {
                return e.c;
            }
        }
        return this.j(a, c);
    }
    c(a, b, c) {
        if (((0 > b) && (b >= a.length)) || ((0 > c) && (c >= a.length - c))) {
            throw new IndexOutOfRangeException(1, "The Index is out of range.");
        }
        if (c == 0) {
            return stringEmpty();
        }
        let d = 0;
        let e = b + c;
        for (let f = b; f < e; f++) {
            d = (d << 5) - d + a[f].charCodeAt(0);
        }
        d &= 2147483647;
        for (let g = this.e[d % this.g]; g != null; g = g.d) {
            if (g.a == d && g.b == c && NameTable.f(g.c, a, b)) {
                return g.c;
            }
        }
        return null;
    }
    d(a) {
        if (a == null) {
            throw new ArgumentNullException(0, "value");
        }
        let b = a.length;
        if (b == 0) {
            return stringEmpty();
        }
        let c = 0;
        for (let d = 0; d < b; d++) {
            c = (c << 5) - c + a.charAt(d).charCodeAt(0);
        }
        c &= 2147483647;
        for (let e = this.e[c % this.g]; e != null; e = e.d) {
            if (e.a == c && e.b == a.length && e.c == a) {
                return e.c;
            }
        }
        return null;
    }
    j(a, b) {
        let c = b % this.g;
        this.e[c] = new NameTable_Entry(a, b, this.e[c]);
        if (this.i++ == this.g) {
            this.g <<= 1;
            let d = this.g - 1;
            let e = new Array(this.g);
            for (let f = 0; f < this.e.length; f++) {
                let g = this.e[f];
                let h = g;
                while (h != null) {
                    let i = h.a & d;
                    let j = h.d;
                    h.d = e[i];
                    e[i] = h;
                    h = j;
                }
            }
            this.e = e;
        }
        return a;
    }
    static f(a, b, c) {
        let d = a.length;
        d--;
        c += d;
        do {
            if (a.charAt(d) != b[c]) {
                return false;
            }
            d--;
            c--;
        } while (d >= 0);
        return true;
    }
}
NameTable.$t = markType(NameTable, 'NameTable', XmlNameTable.$);
//# sourceMappingURL=NameTable.js.map