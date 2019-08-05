//
// XmlNamespaceManager.cs
//
// Authors:
//   Jason Diamond (jason@injektilo.org)
//   Ben Maurer (bmaurer@users.sourceforge.net)
//   Atsushi Enomoto (atsushi@ximian.com)
//
// (C) 2001 Jason Diamond  http://injektilo.org/
// (C) 2003 Ben Maurer
// (C) 2004 Novell Inc.
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
import { Base, IEnumerable_$type, markType, getEnumerator } from "./type";
import { IXmlNamespaceResolver_$type } from "./IXmlNamespaceResolver";
import { XmlNamespaceManager_NsDecl } from "./XmlNamespaceManager_NsDecl";
import { XmlNamespaceManager_NsScope } from "./XmlNamespaceManager_NsScope";
import { ArgumentNullException } from "./ArgumentNullException";
import { ArgumentException } from "./ArgumentException";
import { Hashtable } from "./Hashtable";
import { arrayCopy1 } from "./arrayExtended";
import { stringEmpty } from "./string";
import { stringFormat } from "./stringExtended";
/**
 * @hidden
 */
export class XmlNamespaceManager extends Base {
    constructor(a) {
        super();
        this.a = null;
        this.k = -1;
        this.b = null;
        this.l = -1;
        this.m = null;
        this.j = 0;
        this.af = null;
        this.f = false;
        if (a == null) {
            throw new ArgumentNullException(0, "nameTable");
        }
        this.af = a;
        a.b("xmlns");
        a.b("xml");
        a.b(stringEmpty());
        a.b("http://www.w3.org/2000/xmlns/");
        a.b("http://www.w3.org/XML/1998/namespace");
        this.ab();
    }
    ab() {
        this.a = new Array(10);
        this.b = new Array(40);
        for (let a = 0; a < this.a.length; a++) {
            this.a[a] = new XmlNamespaceManager_NsDecl();
        }
        for (let b = 0; b < this.b.length; b++) {
            this.b[b] = new XmlNamespaceManager_NsScope();
        }
    }
    z() {
        let a = this.a;
        this.a = new Array(this.k * 2 + 1);
        if (this.k > 0) {
            arrayCopy1(a, 0, this.a, 0, this.k);
        }
        for (let b = this.k; b < this.a.length; b++) {
            this.a[b] = new XmlNamespaceManager_NsDecl();
        }
    }
    aa() {
        let a = this.b;
        this.b = new Array(this.l * 2 + 1);
        if (this.l > 0) {
            arrayCopy1(a, 0, this.b, 0, this.l);
        }
        for (let b = this.l; b < this.b.length; b++) {
            this.b[b] = new XmlNamespaceManager_NsScope();
        }
    }
    get_n() {
        return this.m == null ? stringEmpty() : this.m;
    }
    get n() {
        return this.get_n();
    }
    get ag() {
        return this.af;
    }
    x(a, b) {
        this.y(a, b, false);
    }
    y(a, b, c) {
        if (a == null) {
            throw new ArgumentNullException(0, "prefix Value cannot be null.");
        }
        if (b == null) {
            throw new ArgumentNullException(0, "uri Value cannot be null.");
        }
        if (!c) {
            a = this.af.b(a);
            b = this.af.b(b);
        }
        if (a == "xml" && b == "http://www.w3.org/XML/1998/namespace") {
            return;
        }
        XmlNamespaceManager.o(a, b, true);
        if (a.length == 0) {
            this.m = b;
        }
        for (let d = this.k; d > this.k - this.j; d--) {
            if (Base.referenceEquals(this.a[d].a, a)) {
                this.a[d].b = b;
                return;
            }
        }
        this.k++;
        this.j++;
        if (this.k == this.a.length) {
            this.z();
        }
        this.a[this.k].a = a;
        this.a[this.k].b = b;
    }
    static o(a, b, c) {
        let d = null;
        if (a == "xml" && b != "http://www.w3.org/XML/1998/namespace") {
            d = stringFormat("Prefix \"xml\" can only be bound to the fixed namespace URI \"{0}\". \"{1}\" is invalid.", "http://www.w3.org/XML/1998/namespace", b);
        }
        else if (d == null && a == "xmlns") {
            d = "Declaring prefix named \"xmlns\" is not allowed to any namespace.";
        }
        else if (d == null && b == "http://www.w3.org/2000/xmlns/") {
            d = stringFormat("Namespace URI \"{0}\" cannot be declared with any namespace.", "http://www.w3.org/2000/xmlns/");
        }
        if (d != null && c) {
            throw new ArgumentException(1, d);
        }
        else {
            return d;
        }
    }
    getEnumeratorObject() {
        let a = new Hashtable();
        for (let b = 0; b <= this.k; b++) {
            if (this.a[b].a != stringEmpty() && this.a[b].b != null) {
                a.item(this.a[b].a, this.a[b].b);
            }
        }
        a.item(stringEmpty(), this.n);
        a.item("xml", "http://www.w3.org/XML/1998/namespace");
        a.item("xmlns", "http://www.w3.org/2000/xmlns/");
        return getEnumerator(a.c);
    }
    getNamespacesInScope(a) {
        return this.i(a);
    }
    i(a) {
        let b = new Hashtable();
        if (a == 2) {
            for (let c = 0; c < this.j; c++) {
                if (this.a[this.k - c].a == stringEmpty() && this.a[this.k - c].b == stringEmpty()) {
                    if (b.a(stringEmpty())) {
                        b.f(stringEmpty());
                    }
                }
                else if (this.a[this.k - c].b != null) {
                    b.e(this.a[this.k - c].a, this.a[this.k - c].b);
                }
            }
            return b;
        }
        else {
            for (let d = 0; d <= this.k; d++) {
                if (this.a[d].a == stringEmpty() && this.a[d].b == stringEmpty()) {
                    if (b.a(stringEmpty())) {
                        b.f(stringEmpty());
                    }
                }
                else if (this.a[d].b != null) {
                    b.item(this.a[d].a, this.a[d].b);
                }
            }
            if (a == 0) {
                b.e("xml", "http://www.w3.org/XML/1998/namespace");
            }
            return b;
        }
    }
    d(a) {
        return this.e(a, false);
    }
    e(a, b) {
        if (a == null || this.j == 0) {
            return false;
        }
        for (let c = this.k; c > this.k - this.j; c--) {
            if (this.a[c].a == a) {
                return true;
            }
        }
        return false;
    }
    lookupNamespace(a) {
        switch (a) {
            case "xmlns": return this.af.d("http://www.w3.org/2000/xmlns/");
            case "xml": return this.af.d("http://www.w3.org/XML/1998/namespace");
            case "": return this.n;
            case null: return null;
        }
        for (let b = this.k; b >= 0; b--) {
            if (this.c(this.a[b].a, a, this.f) && this.a[b].b != null) {
                return this.a[b].b;
            }
        }
        return null;
    }
    lookupNamespace1(a, b) {
        this.f = b;
        let c = this.lookupNamespace(a);
        this.f = false;
        return c;
    }
    lookupPrefix(a) {
        return this.lookupPrefix1(a, true);
    }
    c(a, b, c) {
        if (c) {
            return Base.referenceEquals(a, b);
        }
        else {
            return a == b;
        }
    }
    lookupPrefix1(a, b) {
        return this.r(a, b, false);
    }
    s(a, b) {
        return this.r(a, b, true);
    }
    r(a, b, c) {
        if (a == null) {
            return null;
        }
        if (this.c(a, this.n, b)) {
            return stringEmpty();
        }
        if (this.c(a, "http://www.w3.org/XML/1998/namespace", b)) {
            return "xml";
        }
        if (this.c(a, "http://www.w3.org/2000/xmlns/", b)) {
            return "xmlns";
        }
        for (let d = this.k; d >= 0; d--) {
            if (this.c(this.a[d].b, a, b) && this.a[d].a.length > 0) {
                if (!c || !this.g(d)) {
                    return this.a[d].a;
                }
            }
        }
        return null;
    }
    g(a) {
        if (a == this.k) {
            return false;
        }
        let b = this.a[a + 1].a;
        for (let c = a + 1; c <= this.k; c++) {
            if (this.a[a].a == b) {
                return true;
            }
        }
        return false;
    }
    h() {
        if (this.l == -1) {
            return false;
        }
        this.k -= this.j;
        this.m = this.b[this.l].b;
        this.j = this.b[this.l].a;
        this.l--;
        return true;
    }
    ac() {
        this.l++;
        if (this.l == this.b.length) {
            this.aa();
        }
        this.b[this.l].b = this.m;
        this.b[this.l].a = this.j;
        this.j = 0;
    }
    ad(a, b) {
        this.ae(a, b, false);
    }
    ae(a, b, c) {
        if (a == null) {
            throw new ArgumentNullException(0, "prefix");
        }
        if (b == null) {
            throw new ArgumentNullException(0, "uri");
        }
        if (this.j == 0) {
            return;
        }
        for (let d = this.k; d > this.k - this.j; d--) {
            if (this.c(this.a[d].a, a, c) && this.c(this.a[d].b, b, c)) {
                this.a[d].b = null;
            }
        }
    }
}
XmlNamespaceManager.$t = markType(XmlNamespaceManager, 'XmlNamespaceManager', Base.$, [IXmlNamespaceResolver_$type, IEnumerable_$type]);
//# sourceMappingURL=XmlNamespaceManager.js.map