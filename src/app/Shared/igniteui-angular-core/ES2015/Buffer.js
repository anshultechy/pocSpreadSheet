//
// System.Buffer.cs
//
// Authors:
//   Paolo Molaro (lupus@ximian.com)
//   Dan Lewis (dihlewis@yahoo.co.uk)
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
import { Base, typeGetValue, markType } from "./type";
import { ArgumentNullException } from "./ArgumentNullException";
import { ArgumentException } from "./ArgumentException";
import { ArgumentOutOfRangeException } from "./ArgumentOutOfRangeException";
/**
 * @hidden
 */
export class Buffer extends Base {
    static b(a) {
        try {
        }
        catch (b) {
        }
        if (a == null) {
            throw new ArgumentNullException(0, "array");
        }
        let c = a.length;
        if (c < 0) {
            throw new ArgumentException(1, "Object must be an array of primitives.");
        }
        return c;
    }
    static a(a, b) {
        if (b < 0 || b >= Buffer.b(a)) {
            throw new ArgumentOutOfRangeException(2, "index", "Value must be non-negative and less than the size of the collection.");
        }
        return typeGetValue(a[b]);
    }
    static d(a, b, c) {
        if (b < 0 || b >= Buffer.b(a)) {
            throw new ArgumentOutOfRangeException(2, "index", "Value must be non-negative and less than the size of the collection.");
        }
        a[b] = c;
    }
    static c(a, b, c, d, e) {
        if (a == null) {
            throw new ArgumentNullException(0, "src");
        }
        if (c == null) {
            throw new ArgumentNullException(0, "dst");
        }
        if (b < 0) {
            throw new ArgumentOutOfRangeException(2, "srcOffset", "Non-negative number required.");
        }
        if (d < 0) {
            throw new ArgumentOutOfRangeException(2, "dstOffset", "Non-negative number required.");
        }
        if (e < 0) {
            throw new ArgumentOutOfRangeException(2, "count", "Non-negative number required.");
        }
        if ((b > Buffer.b(a) - e) || (d > Buffer.b(c) - e)) {
            throw new ArgumentException(1, "Offset and length were out of bounds for the array or count is greater than " + "the number of elements from index to the end of the source collection.");
        }
        for (let f = 0; f < e; f++) {
            c[d++] = a[b++];
        }
    }
}
Buffer.$t = markType(Buffer, 'Buffer');
//# sourceMappingURL=Buffer.js.map