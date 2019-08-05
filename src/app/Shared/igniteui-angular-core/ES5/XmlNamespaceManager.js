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
import * as tslib_1 from "tslib";
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
var XmlNamespaceManager = /** @class */ (function (_super) {
    tslib_1.__extends(XmlNamespaceManager, _super);
    function XmlNamespaceManager(a) {
        var _this = _super.call(this) || this;
        _this.a = null;
        _this.k = -1;
        _this.b = null;
        _this.l = -1;
        _this.m = null;
        _this.j = 0;
        _this.af = null;
        _this.f = false;
        if (a == null) {
            throw new ArgumentNullException(0, "nameTable");
        }
        _this.af = a;
        a.b("xmlns");
        a.b("xml");
        a.b(stringEmpty());
        a.b("http://www.w3.org/2000/xmlns/");
        a.b("http://www.w3.org/XML/1998/namespace");
        _this.ab();
        return _this;
    }
    XmlNamespaceManager.prototype.ab = function () {
        this.a = new Array(10);
        this.b = new Array(40);
        for (var a = 0; a < this.a.length; a++) {
            this.a[a] = new XmlNamespaceManager_NsDecl();
        }
        for (var b = 0; b < this.b.length; b++) {
            this.b[b] = new XmlNamespaceManager_NsScope();
        }
    };
    XmlNamespaceManager.prototype.z = function () {
        var a = this.a;
        this.a = new Array(this.k * 2 + 1);
        if (this.k > 0) {
            arrayCopy1(a, 0, this.a, 0, this.k);
        }
        for (var b = this.k; b < this.a.length; b++) {
            this.a[b] = new XmlNamespaceManager_NsDecl();
        }
    };
    XmlNamespaceManager.prototype.aa = function () {
        var a = this.b;
        this.b = new Array(this.l * 2 + 1);
        if (this.l > 0) {
            arrayCopy1(a, 0, this.b, 0, this.l);
        }
        for (var b = this.l; b < this.b.length; b++) {
            this.b[b] = new XmlNamespaceManager_NsScope();
        }
    };
    XmlNamespaceManager.prototype.get_n = function () {
        return this.m == null ? stringEmpty() : this.m;
    };
    Object.defineProperty(XmlNamespaceManager.prototype, "n", {
        get: function () {
            return this.get_n();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(XmlNamespaceManager.prototype, "ag", {
        get: function () {
            return this.af;
        },
        enumerable: true,
        configurable: true
    });
    XmlNamespaceManager.prototype.x = function (a, b) {
        this.y(a, b, false);
    };
    XmlNamespaceManager.prototype.y = function (a, b, c) {
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
        for (var d = this.k; d > this.k - this.j; d--) {
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
    };
    XmlNamespaceManager.o = function (a, b, c) {
        var d = null;
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
    };
    XmlNamespaceManager.prototype.getEnumeratorObject = function () {
        var a = new Hashtable();
        for (var b = 0; b <= this.k; b++) {
            if (this.a[b].a != stringEmpty() && this.a[b].b != null) {
                a.item(this.a[b].a, this.a[b].b);
            }
        }
        a.item(stringEmpty(), this.n);
        a.item("xml", "http://www.w3.org/XML/1998/namespace");
        a.item("xmlns", "http://www.w3.org/2000/xmlns/");
        return getEnumerator(a.c);
    };
    XmlNamespaceManager.prototype.getNamespacesInScope = function (a) {
        return this.i(a);
    };
    XmlNamespaceManager.prototype.i = function (a) {
        var b = new Hashtable();
        if (a == 2) {
            for (var c = 0; c < this.j; c++) {
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
            for (var d = 0; d <= this.k; d++) {
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
    };
    XmlNamespaceManager.prototype.d = function (a) {
        return this.e(a, false);
    };
    XmlNamespaceManager.prototype.e = function (a, b) {
        if (a == null || this.j == 0) {
            return false;
        }
        for (var c = this.k; c > this.k - this.j; c--) {
            if (this.a[c].a == a) {
                return true;
            }
        }
        return false;
    };
    XmlNamespaceManager.prototype.lookupNamespace = function (a) {
        switch (a) {
            case "xmlns": return this.af.d("http://www.w3.org/2000/xmlns/");
            case "xml": return this.af.d("http://www.w3.org/XML/1998/namespace");
            case "": return this.n;
            case null: return null;
        }
        for (var b = this.k; b >= 0; b--) {
            if (this.c(this.a[b].a, a, this.f) && this.a[b].b != null) {
                return this.a[b].b;
            }
        }
        return null;
    };
    XmlNamespaceManager.prototype.lookupNamespace1 = function (a, b) {
        this.f = b;
        var c = this.lookupNamespace(a);
        this.f = false;
        return c;
    };
    XmlNamespaceManager.prototype.lookupPrefix = function (a) {
        return this.lookupPrefix1(a, true);
    };
    XmlNamespaceManager.prototype.c = function (a, b, c) {
        if (c) {
            return Base.referenceEquals(a, b);
        }
        else {
            return a == b;
        }
    };
    XmlNamespaceManager.prototype.lookupPrefix1 = function (a, b) {
        return this.r(a, b, false);
    };
    XmlNamespaceManager.prototype.s = function (a, b) {
        return this.r(a, b, true);
    };
    XmlNamespaceManager.prototype.r = function (a, b, c) {
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
        for (var d = this.k; d >= 0; d--) {
            if (this.c(this.a[d].b, a, b) && this.a[d].a.length > 0) {
                if (!c || !this.g(d)) {
                    return this.a[d].a;
                }
            }
        }
        return null;
    };
    XmlNamespaceManager.prototype.g = function (a) {
        if (a == this.k) {
            return false;
        }
        var b = this.a[a + 1].a;
        for (var c = a + 1; c <= this.k; c++) {
            if (this.a[a].a == b) {
                return true;
            }
        }
        return false;
    };
    XmlNamespaceManager.prototype.h = function () {
        if (this.l == -1) {
            return false;
        }
        this.k -= this.j;
        this.m = this.b[this.l].b;
        this.j = this.b[this.l].a;
        this.l--;
        return true;
    };
    XmlNamespaceManager.prototype.ac = function () {
        this.l++;
        if (this.l == this.b.length) {
            this.aa();
        }
        this.b[this.l].b = this.m;
        this.b[this.l].a = this.j;
        this.j = 0;
    };
    XmlNamespaceManager.prototype.ad = function (a, b) {
        this.ae(a, b, false);
    };
    XmlNamespaceManager.prototype.ae = function (a, b, c) {
        if (a == null) {
            throw new ArgumentNullException(0, "prefix");
        }
        if (b == null) {
            throw new ArgumentNullException(0, "uri");
        }
        if (this.j == 0) {
            return;
        }
        for (var d = this.k; d > this.k - this.j; d--) {
            if (this.c(this.a[d].a, a, c) && this.c(this.a[d].b, b, c)) {
                this.a[d].b = null;
            }
        }
    };
    XmlNamespaceManager.$t = markType(XmlNamespaceManager, 'XmlNamespaceManager', Base.$, [IXmlNamespaceResolver_$type, IEnumerable_$type]);
    return XmlNamespaceManager;
}(Base));
export { XmlNamespaceManager };
//# sourceMappingURL=XmlNamespaceManager.js.map