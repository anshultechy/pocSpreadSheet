//
// XmlException.cs
//
// Author:
//   Jason Diamond (jason@injektilo.org)
//   Atsushi Enomoto (atsushi@ximian.com)
//
// (C) 2002 Jason Diamond  http://injektilo.org/
// Copyright (C) 2004-2005 Novell, Inc (http://www.novell.com)
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
/**
 * @hidden
 */
export class XmlException extends BaseError {
    constructor(a, ..._rest) {
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0:
                {
                    super(0);
                    this.d = 0;
                    this.f = 0;
                    this.i = null;
                    this.h = null;
                    this.c = null;
                    this.h = "Xml_DefaultException";
                    this.c = new Array(1);
                }
                break;
            case 1:
                {
                    let c = _rest[0];
                    let d = _rest[1];
                    super(2, c, d);
                    this.d = 0;
                    this.f = 0;
                    this.i = null;
                    this.h = null;
                    this.c = null;
                    this.h = "Xml_UserException";
                    this.c = [c];
                }
                break;
            case 2:
                {
                    let c = _rest[0];
                    let d = _rest[1];
                    let e = _rest[2];
                    super(0);
                    this.d = 0;
                    this.f = 0;
                    this.i = null;
                    this.h = null;
                    this.c = null;
                }
                break;
            case 3:
                {
                    let c = _rest[0];
                    super(1, c);
                    this.d = 0;
                    this.f = 0;
                    this.i = null;
                    this.h = null;
                    this.c = null;
                    this.h = "Xml_UserException";
                    this.c = [c];
                }
                break;
            case 4:
                {
                    let c = _rest[0];
                    let d = _rest[1];
                    let e = _rest[2];
                    let f = _rest[3];
                    let g = [c, d];
                    {
                        let i = g[0];
                        let j = g[1];
                        super(2, i, j);
                        this.d = 0;
                        this.f = 0;
                        this.i = null;
                        this.h = null;
                        this.c = null;
                        this.h = "Xml_UserException";
                        this.c = [i];
                    }
                    this.d = e;
                    this.f = f;
                }
                break;
        }
    }
    get lineNumber() {
        return this.d;
    }
    get linePosition() {
        return this.f;
    }
}
XmlException.$t = markType(XmlException, 'XmlException', BaseError.$);
//# sourceMappingURL=XmlException.js.map