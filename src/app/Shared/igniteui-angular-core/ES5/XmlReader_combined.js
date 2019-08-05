// From https://github.com/mosa/Mono-Class-Libraries/blob/28840dee90750d61ed6cbdb753292cd64cac169e/mcs/class/System.XML/System.Xml/XmlTextWriter2.cs
//
// XmlTextWriter.cs
//
// Author:
//	Atsushi Enomoto  <atsushi@ximian.com>
//
// Copyright (C) 2006 Novell, Inc.
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
import { Base, IDisposable_$type, NotSupportedException, EnumUtil, typeCast, markType, enumGetBox } from "./type";
import { XmlNodeType_$type } from "./xml";
import { XmlChar } from "./XmlChar";
import { StringWriter } from "./StringWriter";
import { StringBuilder } from "./StringBuilder";
import { XmlException } from "./XmlException";
import { IXmlLineInfo_$type } from "./IXmlLineInfo";
import { stringFormat, stringFormat1, indexOfAny } from "./stringExtended";
import { stringEmpty, stringCreateFromChar, stringToCharArray } from "./string";
import { WriteState_$type } from "./WriteState";
import { ArgumentException } from "./ArgumentException";
import { XmlConvert } from "./XmlConvert";
import { XmlTextWriter_XmlNodeInfo } from "./XmlTextWriter_XmlNodeInfo";
import { StreamWriter } from "./StreamWriter";
import { arrayListCreate } from "./array";
import { ArgumentNullException } from "./ArgumentNullException";
import { NameTable } from "./NameTable";
import { XmlNamespaceManager } from "./XmlNamespaceManager";
import { XmlTextWriter_StringUtil } from "./XmlTextWriter_StringUtil";
import { CultureInfo } from "./culture";
import { NotImplementedException } from "./NotImplementedException";
import { ArgumentOutOfRangeException } from "./ArgumentOutOfRangeException";
import { InvalidOperationException } from "./InvalidOperationException";
import { UTF8Encoding } from "./UTF8Encoding";
import { arrayCopy2, arrayContains } from "./arrayExtended";
import { intToString1 } from "./numberExtended";
/**
 * @hidden
 */
var XmlReader = /** @class */ (function (_super) {
    tslib_1.__extends(XmlReader, _super);
    function XmlReader() {
        var _this = _super.call(this) || this;
        _this.at = null;
        return _this;
    }
    XmlReader.prototype.get_a = function () {
        return false;
    };
    Object.defineProperty(XmlReader.prototype, "a", {
        get: function () {
            return this.get_a();
        },
        enumerable: true,
        configurable: true
    });
    XmlReader.prototype.get_b = function () {
        return false;
    };
    Object.defineProperty(XmlReader.prototype, "b", {
        get: function () {
            return this.get_b();
        },
        enumerable: true,
        configurable: true
    });
    XmlReader.prototype.get_c = function () {
        return false;
    };
    Object.defineProperty(XmlReader.prototype, "c", {
        get: function () {
            return this.get_c();
        },
        enumerable: true,
        configurable: true
    });
    XmlReader.prototype.get_e = function () {
        return this.w > 0;
    };
    Object.defineProperty(XmlReader.prototype, "e", {
        get: function () {
            return this.get_e();
        },
        enumerable: true,
        configurable: true
    });
    XmlReader.j = function (a) {
        return a != null && XmlChar.g(a);
    };
    XmlReader.k = function (a) {
        return a != null && XmlChar.k(a);
    };
    XmlReader.prototype.l = function () {
        return (this.a6() == 1);
    };
    XmlReader.prototype.m = function (a) {
        if (!this.l()) {
            return false;
        }
        return (this.ai == a);
    };
    XmlReader.prototype.n = function (a, b) {
        if (!this.l()) {
            return false;
        }
        return (this.ag == a && this.aj == b);
    };
    XmlReader.prototype.g = function (a) {
        switch (a) {
            case 3: return true;
            case 4: return true;
            case 1: return true;
            case 15: return true;
            case 5: return true;
            case 16: return true;
        }
        return false;
    };
    XmlReader.prototype.a6 = function () {
        switch (this.a3) {
            case 0:
            case 1: break;
            default: return this.a7;
        }
        if (this.a7 == 2) {
            this.q();
        }
        do {
            if (this.g(this.a7)) {
                return this.a7;
            }
            this.t();
        } while (!this.d);
        return 0;
    };
    XmlReader.prototype.al = function () {
        if (this.a6() != 1) {
            var a = stringFormat("'{0}' is an invalid node type.", EnumUtil.getName(XmlNodeType_$type, this.a7));
            throw this.a4(a);
        }
        var b = stringEmpty();
        if (!this.i) {
            this.t();
            b = this.aq();
            if (this.a7 != 15) {
                var c = stringFormat("'{0}' is an invalid node type.", EnumUtil.getName(XmlNodeType_$type, this.a7));
                throw this.a4(c);
            }
        }
        this.t();
        return b;
    };
    XmlReader.prototype.am = function (a) {
        if (this.a6() != 1) {
            var b = stringFormat("'{0}' is an invalid node type.", EnumUtil.getName(XmlNodeType_$type, this.a7));
            throw this.a4(b);
        }
        if (a != this.ai) {
            var c = stringFormat("The {0} tag from namespace {1} is expected.", this.ai, this.aj);
            throw this.a4(c);
        }
        var d = stringEmpty();
        if (!this.i) {
            this.t();
            d = this.aq();
            if (this.a7 != 15) {
                var e = stringFormat("'{0}' is an invalid node type.", EnumUtil.getName(XmlNodeType_$type, this.a7));
                throw this.a4(e);
            }
        }
        this.t();
        return d;
    };
    XmlReader.prototype.an = function (a, b) {
        if (this.a6() != 1) {
            var c = stringFormat("'{0}' is an invalid node type.", EnumUtil.getName(XmlNodeType_$type, this.a7));
            throw this.a4(c);
        }
        if (a != this.ag || this.aj != b) {
            var d = stringFormat("The {0} tag from namespace {1} is expected.", this.ag, this.aj);
            throw this.a4(d);
        }
        var e = stringEmpty();
        if (!this.i) {
            this.t();
            e = this.aq();
            if (this.a7 != 15) {
                var f = stringFormat("'{0}' is an invalid node type.", EnumUtil.getName(XmlNodeType_$type, this.a7));
                throw this.a4(f);
            }
        }
        this.t();
        return e;
    };
    XmlReader.prototype.ax = function () {
        if (this.a6() != 15) {
            var a = stringFormat("'{0}' is an invalid node type.", EnumUtil.getName(XmlNodeType_$type, this.a7));
            throw this.a4(a);
        }
        this.t();
    };
    XmlReader.prototype.ao = function () {
        if (this.a3 != 1 || this.a7 == 15) {
            return stringEmpty();
        }
        if (this.i) {
            this.t();
            return stringEmpty();
        }
        var a = new StringWriter(0);
        var b = new XmlTextWriter(1, a);
        if (this.a7 == 1) {
            var c = this.x;
            this.t();
            while (c < this.x) {
                if (this.a3 != 1) {
                    throw this.a4("Unexpected end of the XML reader.");
                }
                b.ac(this, false);
            }
            this.t();
        }
        else {
            b.ac(this, false);
        }
        return a.toString();
    };
    XmlReader.prototype.ap = function () {
        if (this.a3 != 1 || this.a7 == 15) {
            return stringEmpty();
        }
        switch (this.a7) {
            case 1:
            case 2:
                var a = new StringWriter(0);
                var b = new XmlTextWriter(1, a);
                b.ac(this, false);
                return a.toString();
            default:
                this.a2();
                return stringEmpty();
        }
    };
    XmlReader.prototype.ay = function () {
        if (this.a6() != 1) {
            var a = stringFormat("'{0}' is an invalid node type.", EnumUtil.getName(XmlNodeType_$type, this.a7));
            throw this.a4(a);
        }
        this.t();
    };
    XmlReader.prototype.az = function (a) {
        if (this.a6() != 1) {
            var b = stringFormat("'{0}' is an invalid node type.", EnumUtil.getName(XmlNodeType_$type, this.a7));
            throw this.a4(b);
        }
        if (a != this.ai) {
            var c = stringFormat("The {0} tag from namespace {1} is expected.", this.ai, this.aj);
            throw this.a4(c);
        }
        this.t();
    };
    XmlReader.prototype.a0 = function (a, b) {
        if (this.a6() != 1) {
            var c = stringFormat("'{0}' is an invalid node type.", EnumUtil.getName(XmlNodeType_$type, this.a7));
            throw this.a4(c);
        }
        if (a != this.ag || this.aj != b) {
            var d = stringFormat1("Expecting {0} tag from namespace {1}, got {2} and {3} instead", a, b, this.ag, this.aj);
            throw this.a4(d);
        }
        this.t();
    };
    XmlReader.prototype.aq = function () {
        if (this.at == null) {
            this.at = new StringBuilder(0);
        }
        this.at.c = 0;
        this.q();
        switch (this.a7) {
            default: return stringEmpty();
            case 1:
                if (this.i) {
                    return stringEmpty();
                }
                do {
                    this.t();
                    switch (this.a7) {
                        case 3:
                        case 4:
                        case 13:
                        case 14:
                            this.at.l(this.ar);
                            continue;
                    }
                    break;
                } while (true);
                break;
            case 3:
            case 4:
            case 13:
            case 14:
                do {
                    switch (this.a7) {
                        case 3:
                        case 4:
                        case 13:
                        case 14:
                            this.at.l(this.ar);
                            this.t();
                            continue;
                    }
                    break;
                } while (true);
                break;
        }
        var a = this.at.toString();
        this.at.c = 0;
        return a;
    };
    XmlReader.prototype.y = function (a, b, c) {
        throw new NotSupportedException(0);
    };
    XmlReader.prototype.a2 = function () {
        if (this.a3 != 1) {
            return;
        }
        this.q();
        if (this.a7 != 1 || this.i) {
            this.t();
            return;
        }
        var a = this.x;
        while (this.t() && a < this.x) {
            ;
        }
        if (this.a7 == 15) {
            this.t();
        }
    };
    XmlReader.prototype.a4 = function (a) {
        return new XmlException(2, typeCast(IXmlLineInfo_$type, this), this.z, a);
    };
    XmlReader.prototype.dispose = function () {
        this.disposeCore(true);
    };
    XmlReader.prototype.disposeCore = function (a) {
        if (a && this.a3 != 4) {
            this.au();
        }
    };
    XmlReader.$t = markType(XmlReader, 'XmlReader', Base.$, [IDisposable_$type]);
    return XmlReader;
}(Base));
export { XmlReader };
/**
 * @hidden
 */
var XmlWriter = /** @class */ (function (_super) {
    tslib_1.__extends(XmlWriter, _super);
    function XmlWriter() {
        return _super.call(this) || this;
    }
    XmlWriter.prototype.DisposeImpl = function (a) {
        this.c();
    };
    XmlWriter.prototype.dispose = function () {
        this.DisposeImpl(false);
    };
    XmlWriter.prototype.f = function (a, b) {
        if (!b && a.h) {
            return;
        }
        this.aj(a.ak, a.ag, a.aj);
        while (a.u()) {
            switch (a.a7) {
                case 3:
                    this.ap(a.ar);
                    break;
                case 5:
                    this.w(a.ai);
                    break;
            }
        }
        this.t();
    };
    XmlWriter.prototype.g = function (a, b) {
        if (a == null) {
            throw new ArgumentException(2, "null XmlReader specified.", "reader");
        }
        var t1 = a.a7;
        L0: while (true) {
            switch (t1) {
                case 17:
                    this.h("version", a.item1("version"));
                    if (a.item1("encoding") != null) {
                        this.h("encoding", a.item1("encoding"));
                    }
                    if (a.item1("standalone") != null) {
                        this.h("standalone", a.item1("standalone"));
                    }
                    break;
                case 1:
                    if (a.r()) {
                        t1 = 2;
                        continue L0;
                    }
                    break;
                case 2:
                    do {
                        this.f(a, b);
                    } while (a.s());
                    a.q();
                    break;
                default: throw new XmlException(3, "NodeType is not one of Element, Attribute, nor XmlDeclaration.");
            }
            break;
        }
    };
    XmlWriter.prototype.h = function (a, b) {
        this.j("", a, null, b);
    };
    XmlWriter.prototype.i = function (a, b, c) {
        this.j("", a, b, c);
    };
    XmlWriter.prototype.j = function (a, b, c, d) {
        this.aj(a, b, c);
        if (d != null && d.length > 0) {
            this.ap(d);
        }
        this.t();
    };
    XmlWriter.prototype.r = function (a, b) {
        this.am(a);
        if (b != null && b.length > 0) {
            this.ap(b);
        }
        this.v();
    };
    XmlWriter.prototype.s = function (a, b, c) {
        this.an(a, b);
        if (c != null && c.length > 0) {
            this.ap(c);
        }
        this.v();
    };
    XmlWriter.prototype.z = function (a) {
        XmlConvert.aq(a);
        this.ap(a);
    };
    XmlWriter.prototype.ab = function (a) {
        var b = true;
        b = XmlChar.k(a);
        if (!b) {
            throw new ArgumentException(1, "Argument name is not a valid NMTOKEN.");
        }
        this.ap(a);
    };
    XmlWriter.prototype.af = function (a, b) {
        if (a == null || a == stringEmpty()) {
            throw new ArgumentException(0);
        }
        if (b == null) {
            b = stringEmpty();
        }
        XmlConvert.ar(a);
        var c = b.length > 0 ? this.a(b) : stringEmpty();
        if (c == null) {
            throw new ArgumentException(1, stringFormat("Namespace '{0}' is not declared.", b));
        }
        if (c != stringEmpty()) {
            this.ap(c);
            this.ap(":");
            this.ap(a);
        }
        else {
            this.ap(a);
        }
    };
    XmlWriter.prototype.ac = function (a, b) {
        if (a == null) {
            throw new ArgumentException(0);
        }
        if (a.a3 == 0) {
            a.t();
            do {
                this.ac(a, b);
            } while (!a.d);
            return;
        }
        var t1 = a.a7;
        L0: while (true) {
            switch (t1) {
                case 1:
                    this.ao(a.ak, a.ag, a.aj);
                    if (a.e) {
                        for (var c = 0; c < a.w; c++) {
                            a.aw(c);
                            this.f(a, b);
                        }
                        a.q();
                    }
                    if (a.i) {
                        this.v();
                    }
                    else {
                        var d = a.x;
                        a.t();
                        if (a.a7 != 15) {
                            do {
                                this.ac(a, b);
                            } while (d < a.x);
                        }
                        this.x();
                    }
                    break;
                case 2: return;
                case 3:
                    this.ap(a.ar);
                    break;
                case 4:
                    this.m(a.ar);
                    break;
                case 5:
                    this.w(a.ai);
                    break;
                case 17:
                case 7:
                    this.ad(a.ai, a.ar);
                    break;
                case 8:
                    this.p(a.ar);
                    break;
                case 10:
                    this.q(a.ai, a.item1("PUBLIC"), a.item1("SYSTEM"), a.ar);
                    break;
                case 14:
                    t1 = 13;
                    continue L0;
                case 13:
                    this.ar(a.ar);
                    break;
                case 15:
                    this.x();
                    break;
                case 16: break;
                case 0: break;
                default: throw new XmlException(3, "Unexpected node " + a.ai + " of type " + enumGetBox(XmlNodeType_$type, a.a7));
            }
            break;
        }
        a.t();
    };
    XmlWriter.prototype.ai = function (a, b) {
        this.aj(null, a, b);
    };
    XmlWriter.prototype.am = function (a) {
        this.ao(null, a, null);
    };
    XmlWriter.prototype.an = function (a, b) {
        this.ao(null, a, b);
    };
    XmlWriter.$t = markType(XmlWriter, 'XmlWriter', Base.$, [IDisposable_$type]);
    return XmlWriter;
}(Base));
export { XmlWriter };
/**
 * @hidden
 */
var XmlTextWriter = /** @class */ (function (_super) {
    tslib_1.__extends(XmlTextWriter, _super);
    function XmlTextWriter(a) {
        var _rest = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            _rest[_i - 1] = arguments[_i];
        }
        var _this = _super.call(this) || this;
        _this.bm = null;
        _this.bp = null;
        _this.bq = null;
        _this.bo = null;
        _this.bv = null;
        _this.a4 = false;
        _this.ax = false;
        _this.az = true;
        _this.a0 = false;
        _this.a5 = true;
        _this.cn = 0;
        _this.ay = false;
        _this.cj = 2;
        _this.a3 = false;
        _this.ck = 0;
        _this.cm = 0;
        _this.cl = null;
        _this.bl = 0;
        _this.au = new Array(10);
        _this.be = new Array();
        _this.bd = arrayListCreate();
        _this.ci = 0;
        _this.a1 = false;
        _this.bj = 2;
        _this.a9 = ' ';
        _this.bs = "  ";
        _this.bu = null;
        _this.a2 = false;
        _this.bb = '\"';
        _this.a7 = false;
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0:
                {
                    var c = _rest[0];
                    var d = _rest[1];
                    var e = [new StreamWriter(1, c, d == null ? XmlTextWriter.by : d)];
                    {
                        var g = e[0];
                        if (g == null) {
                            throw new ArgumentNullException(0, "writer");
                        }
                        _this.a0 = (g.h == null);
                        _this.b3(g);
                        _this.ax = true;
                    }
                    _this.a0 = (d == null);
                    _this.b3(_this.bq);
                    _this.ax = true;
                }
                break;
            case 1:
                {
                    var c = _rest[0];
                    if (c == null) {
                        throw new ArgumentNullException(0, "writer");
                    }
                    _this.a0 = (c.h == null);
                    _this.b3(c);
                    _this.ax = true;
                }
                break;
        }
        return _this;
    }
    XmlTextWriter.prototype.b3 = function (a) {
        if (a == null) {
            throw new ArgumentNullException(0, "writer");
        }
        var b = new NameTable();
        this.bq = a;
        if (typeCast(StreamWriter.$, a) !== null) {
            this.bm = a.a5;
        }
        this.bp = a;
        this.cl = new XmlNamespaceManager(b);
        this.bu = a.g;
        XmlTextWriter.aw = this.cj != 2 ? ['&', '<', '>', '\r', '\n'] : ['&', '<', '>'];
        XmlTextWriter.av = ['\"', '&', '<', '>', '\r', '\n'];
    };
    Object.defineProperty(XmlTextWriter.prototype, "ch", {
        get: function () {
            return this.a1 ? 1 : 0;
        },
        set: function (a) {
            this.a1 = (a == 1);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(XmlTextWriter.prototype, "bk", {
        get: function () {
            return this.bj;
        },
        set: function (a) {
            if (a < 0) {
                throw this.bf("Indentation must be non-negative integer.");
            }
            this.bj = a;
            this.bs = a == 0 ? stringEmpty() : stringCreateFromChar(this.a9, this.bj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(XmlTextWriter.prototype, "ba", {
        get: function () {
            return this.a9;
        },
        set: function (a) {
            this.a9 = a;
            this.bs = stringCreateFromChar(this.a9, this.bj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(XmlTextWriter.prototype, "bc", {
        get: function () {
            return this.bb;
        },
        set: function (a) {
            if (this.ck == 3) {
                throw this.bh("QuoteChar must not be changed inside attribute value.");
            }
            if ((a != '\'') && (a != '\"')) {
                throw this.bf("Only ' and \" are allowed as an attribute quote character.");
            }
            this.bb = a;
            XmlTextWriter.av[0] = this.bb;
        },
        enumerable: true,
        configurable: true
    });
    XmlTextWriter.prototype.get_b = function () {
        return this.bl == 0 ? null : this.au[this.bl - 1].f;
    };
    Object.defineProperty(XmlTextWriter.prototype, "b", {
        get: function () {
            return this.get_b();
        },
        enumerable: true,
        configurable: true
    });
    XmlTextWriter.prototype.get_at = function () {
        return this.bl == 0 ? 0 : this.au[this.bl - 1].g;
    };
    Object.defineProperty(XmlTextWriter.prototype, "at", {
        get: function () {
            return this.get_at();
        },
        enumerable: true,
        configurable: true
    });
    XmlTextWriter.prototype.get_as = function () {
        return this.ck;
    };
    Object.defineProperty(XmlTextWriter.prototype, "as", {
        get: function () {
            return this.get_as();
        },
        enumerable: true,
        configurable: true
    });
    XmlTextWriter.prototype.a = function (a) {
        if (a == null || a == stringEmpty()) {
            throw this.bf("The Namespace cannot be empty.");
        }
        if (a == this.cl.n) {
            return stringEmpty();
        }
        var b = this.cl.s(a, false);
        return b;
    };
    Object.defineProperty(XmlTextWriter.prototype, "bn", {
        get: function () {
            return this.bm;
        },
        enumerable: true,
        configurable: true
    });
    XmlTextWriter.prototype.c = function () {
        if (this.ck == 3) {
            this.t();
        }
        while (this.bl > 0) {
            this.v();
        }
        if (this.az) {
            this.bq.i();
        }
        else {
            this.bq.k();
        }
        this.ck = 5;
    };
    XmlTextWriter.prototype.e = function () {
        this.bq.k();
    };
    Object.defineProperty(XmlTextWriter.prototype, "a6", {
        get: function () {
            return this.a5;
        },
        set: function (a) {
            if (this.ck != 0) {
                throw this.bh("This property must be set before writing output.");
            }
            this.a5 = a;
        },
        enumerable: true,
        configurable: true
    });
    XmlTextWriter.prototype.ak = function () {
        this.cg(false, false);
        this.a3 = true;
    };
    XmlTextWriter.prototype.al = function (a) {
        this.cg(true, a);
        this.a3 = true;
    };
    XmlTextWriter.prototype.cg = function (a, b) {
        if (this.ck != 0) {
            throw this.bi("XmlDeclaration");
        }
        switch (this.cn) {
            case 1: return;
            case 3: throw this.bh("WriteStartDocument cannot be called when ConformanceLevel is Fragment.");
        }
        this.ck = 1;
        this.bq.v("<?xml version=");
        this.bq.o(this.bb);
        this.bq.v("1.0");
        this.bq.o(this.bb);
        if (!this.a0) {
            this.bq.v(" encoding=");
            this.bq.o(this.bb);
            this.bq.v(this.bq.h.webName);
            this.bq.o(this.bb);
        }
        if (a) {
            this.bq.v(" standalone=");
            this.bq.o(this.bb);
            this.bq.v(b ? "yes" : "no");
            this.bq.o(this.bb);
        }
        this.bq.v("?>");
        this.cn = 1;
    };
    XmlTextWriter.prototype.u = function () {
        switch (this.ck) {
            case 5:
            case 0: throw this.bi("EndDocument");
        }
        if (this.ck == 3) {
            this.t();
        }
        while (this.bl > 0) {
            this.v();
        }
        this.ck = 0;
        this.a3 = false;
    };
    XmlTextWriter.prototype.q = function (a, b, c, d) {
        if (a == null) {
            throw this.bf("name");
        }
        if (!XmlChar.g(a)) {
            throw this.bf("name");
        }
        if (this.cm != 0) {
            throw this.bi("DocType");
        }
        this.cm = 10;
        if (this.cn == 2) {
            this.b4();
        }
        this.cd();
        this.bq.v("<!DOCTYPE ");
        this.bq.v(a);
        if (b != null) {
            this.bq.v(" PUBLIC ");
            this.bq.o(this.bb);
            this.bq.v(b);
            this.bq.o(this.bb);
            this.bq.o(' ');
            this.bq.o(this.bb);
            if (c != null) {
                this.bq.v(c);
            }
            this.bq.o(this.bb);
        }
        else if (c != null) {
            this.bq.v(" SYSTEM ");
            this.bq.o(this.bb);
            this.bq.v(c);
            this.bq.o(this.bb);
        }
        if (d != null) {
            this.bq.v("[");
            this.bq.v(d);
            this.bq.v("]");
        }
        this.bq.o('>');
        this.ck = 1;
    };
    XmlTextWriter.prototype.ao = function (a, b, c) {
        if (this.ck == 5) {
            throw this.bi("StartTag");
        }
        this.cm = 1;
        var d = (a == null);
        if (a == null) {
            a = stringEmpty();
        }
        if (!this.a5 && c != null && c.length > 0) {
            throw this.bf("Namespace is disabled in this XmlTextWriter.");
        }
        if (!this.a5 && a.length > 0) {
            throw this.bf("Namespace prefix is disabled in this XmlTextWriter.");
        }
        if (a.length > 0 && c == null) {
            c = this.cl.lookupNamespace1(a, false);
            if (c == null || c.length == 0) {
                throw this.bf("Namespace URI must not be null when prefix is not an empty string.");
            }
        }
        if (this.a5 && a != null && a.length == 3 && c != "http://www.w3.org/XML/1998/namespace" && (a.charAt(0) == 'x' || a.charAt(0) == 'X') && (a.charAt(1) == 'm' || a.charAt(1) == 'M') && (a.charAt(2) == 'l' || a.charAt(2) == 'L')) {
            throw new ArgumentException(1, "A prefix cannot be equivalent to \"xml\" in case-insensitive match.");
        }
        if (this.cn == 2) {
            this.b4();
        }
        if (this.ck == 2) {
            this.b1();
        }
        if (this.bl > 0) {
            this.au[this.bl - 1].a = true;
        }
        this.cl.ac();
        if (this.a5 && c != null) {
            if (d && c.length > 0) {
                a = this.a(c);
            }
            if (a == null || c.length == 0) {
                a = stringEmpty();
            }
        }
        this.cd();
        this.bq.v("<");
        if (a.length > 0) {
            this.bq.v(a);
            this.bq.o(':');
        }
        this.bq.v(b);
        if (this.au.length == this.bl) {
            var e = new Array(this.bl << 1);
            arrayCopy2(this.au, e, this.bl);
            this.au = e;
        }
        if (this.au[this.bl] == null) {
            this.au[this.bl] = new XmlTextWriter_XmlNodeInfo();
        }
        var f = this.au[this.bl];
        f.e = a;
        f.c = b;
        f.d = c;
        f.b = false;
        f.a = false;
        f.f = this.b;
        f.g = this.at;
        this.bl++;
        if (this.a5 && c != null) {
            var g = this.cl.lookupNamespace1(a, false);
            if (g != c) {
                this.cl.x(a, c);
                this.be.push(a);
            }
        }
        this.ck = 2;
    };
    XmlTextWriter.prototype.b1 = function () {
        this.b2();
        if (this.ck == 2) {
            this.bq.o('>');
        }
        this.ck = 4;
    };
    XmlTextWriter.prototype.b2 = function () {
        if (this.ck == 3) {
            this.t();
        }
        if (this.be.length == 0) {
            if (this.bd.count > 0) {
                this.bd.clear();
            }
            return;
        }
        var a = this.bd.count;
        while (this.be.length > 0) {
            var b = this.be.pop();
            var c = false;
            for (var d = 0; d < this.bd.count; d++) {
                if (this.bd.item(d) == b) {
                    c = true;
                    break;
                }
            }
            if (c) {
                continue;
            }
            this.bd.add(b);
        }
        for (var e = a; e < this.bd.count; e++) {
            var f = this.bd.item(e);
            var g = this.cl.lookupNamespace1(f, false);
            if (g == null) {
                continue;
            }
            if (f.length > 0) {
                this.bq.v(" xmlns:");
                this.bq.v(f);
            }
            else {
                this.bq.v(" xmlns");
            }
            this.bq.o('=');
            this.bq.o(this.bb);
            this.cc(g, true);
            this.bq.o(this.bb);
        }
        this.bd.clear();
    };
    XmlTextWriter.prototype.v = function () {
        this.ca(false);
    };
    XmlTextWriter.prototype.x = function () {
        this.ca(true);
    };
    XmlTextWriter.prototype.ca = function (a) {
        if (this.ck == 5) {
            throw this.bi("EndElement");
        }
        if (this.bl == 0) {
            throw this.bh("There is no more open element.");
        }
        this.b2();
        this.cl.h();
        if (this.ck == 2) {
            if (a) {
                this.bq.o('>');
            }
            else {
                this.bq.v(" />");
            }
        }
        if (a || this.ck == 4) {
            this.cf();
        }
        var b = this.au[--this.bl];
        if (a || this.ck == 4) {
            this.bq.v("</");
            if (b.e.length > 0) {
                this.bq.v(b.e);
                this.bq.o(':');
            }
            this.bq.v(b.c);
            this.bq.o('>');
        }
        this.ck = 4;
        if (this.bl == 0) {
            this.cm = 15;
        }
    };
    XmlTextWriter.prototype.aj = function (a, b, c) {
        if (this.ck == 3) {
            this.t();
        }
        if (this.ck != 2 && this.ck != 0) {
            throw this.bi("Attribute");
        }
        if (a == null) {
            a = stringEmpty();
        }
        var d = false;
        if (c == "http://www.w3.org/2000/xmlns/") {
            d = true;
            if (a.length == 0 && b != "xmlns") {
                a = "xmlns";
            }
        }
        else {
            d = (a == "xmlns" || b == "xmlns" && a.length == 0);
        }
        if (d) {
            if (b == null || b.length == 0) {
                b = a;
                a = stringEmpty();
            }
        }
        if (this.a5) {
            if (a == "xml") {
                c = "http://www.w3.org/XML/1998/namespace";
            }
            else if (c == null || (this.a7 && c.length == 0)) {
                if (d) {
                    c = "http://www.w3.org/2000/xmlns/";
                }
                else {
                    c = stringEmpty();
                }
            }
            if (d && c != "http://www.w3.org/2000/xmlns/") {
                throw this.bf(stringFormat("The 'xmlns' attribute is bound to the reserved namespace '{0}'", "http://www.w3.org/2000/xmlns/"));
            }
            if (a.length > 0 && c.length == 0) {
                c = this.cl.lookupNamespace1(a, false);
                if (c == null || c.length == 0) {
                    throw this.bf("Namespace URI must not be null when prefix is not an empty string.");
                }
            }
            if (!d && c.length > 0) {
                a = this.br(a, b, c);
            }
        }
        if (this.a2) {
            this.ce();
        }
        else if (this.ck != 0) {
            this.bq.o(' ');
        }
        if (a.length > 0) {
            this.bq.v(a);
            this.bq.o(':');
        }
        this.bq.v(b);
        this.bq.o('=');
        this.bq.o(this.bb);
        if (d || a == "xml") {
            if (this.bo == null) {
                this.bo = new StringWriter(0);
            }
            else {
                this.bo.av().c = 0;
            }
            this.bq = this.bo;
            if (!d) {
                this.a4 = false;
                this.bv = b;
            }
            else {
                this.a4 = true;
                this.bv = b == "xmlns" ? stringEmpty() : b;
            }
        }
        this.ck = 3;
    };
    XmlTextWriter.prototype.br = function (a, b, c) {
        var d = false;
        if (a.length == 0) {
            a = this.a(c);
            if (a != null && a.length > 0) {
                return a;
            }
            d = true;
        }
        else {
            a = this.cl.ag.b(a);
            var e = this.cl.lookupNamespace1(a, true);
            if (e == c) {
                return a;
            }
            if (e != null) {
                this.cl.ad(a, e);
                if (this.cl.lookupNamespace1(a, true) != e) {
                    d = true;
                    this.cl.x(a, e);
                }
            }
        }
        if (d) {
            a = this.bt(c, true);
        }
        this.be.push(a);
        this.cl.x(a, c);
        return a;
    };
    XmlTextWriter.prototype.bt = function (a, b) {
        var c = b ? null : this.a(a);
        if (c != null && c.length > 0) {
            return c;
        }
        for (var d = 1;; d++) {
            c = XmlTextWriter_StringUtil.e("d{0}p{1}", this.bl, d);
            if (arrayContains(this.be, c)) {
                continue;
            }
            if (null != this.cl.lookupNamespace(this.cl.ag.d(c))) {
                continue;
            }
            this.cl.x(c, a);
            this.be.push(c);
            return c;
        }
    };
    XmlTextWriter.prototype.t = function () {
        if (this.ck != 3) {
            throw this.bi("End of attribute");
        }
        if (this.bq == this.bo) {
            this.bq = this.bp;
            var a = this.bo.toString();
            if (this.a4) {
                if (this.bv.length > 0 && a.length == 0) {
                    throw this.bf("Non-empty prefix must be mapped to non-empty namespace URI.");
                }
                var b = this.cl.lookupNamespace1(this.bv, false);
                if ((this.ci & 1) == 0 || b != a) {
                    this.bd.add(this.bv);
                }
                if (this.bl > 0) {
                    if (this.a7 && this.au[this.bl - 1].e == this.bv && this.au[this.bl - 1].d != a) {
                        throw new XmlException(3, stringFormat("Cannot redefine the namespace for prefix '{0}' used at current element", this.bv));
                    }
                    if (this.au[this.bl - 1].d == stringEmpty() && this.au[this.bl - 1].e == this.bv) {
                        ;
                    }
                    else if (b != a) {
                        this.cl.x(this.bv, a);
                    }
                }
            }
            else {
                switch (this.bv) {
                    case "lang":
                        if (this.bl > 0) {
                            this.au[this.bl - 1].f = a;
                        }
                        break;
                    case "space":
                        switch (a) {
                            case "default":
                                if (this.bl > 0) {
                                    this.au[this.bl - 1].g = 1;
                                }
                                break;
                            case "preserve":
                                if (this.bl > 0) {
                                    this.au[this.bl - 1].g = 2;
                                }
                                break;
                            default: throw this.bf("Invalid value for xml:space.");
                        }
                        break;
                }
            }
            this.bq.v(a);
        }
        this.bq.o(this.bb);
        this.ck = 2;
    };
    XmlTextWriter.prototype.p = function (a) {
        if (a == null) {
            throw this.bf("text");
        }
        if (a.length > 0 && a.charAt(a.length - 1) == '-') {
            throw this.bf("An input string to WriteComment method must not end with '-'. Escape it with '&#2D;'.");
        }
        if (XmlTextWriter_StringUtil.d(a, "--") > 0) {
            throw this.bf("An XML comment cannot end with \"-\".");
        }
        if (this.ck == 3 || this.ck == 2) {
            this.b1();
        }
        this.cd();
        this.b6("Comment", false, false, false);
        this.bq.v("<!--");
        this.bq.v(a);
        this.bq.v("-->");
    };
    XmlTextWriter.prototype.ad = function (a, b) {
        if (a == null) {
            throw this.bf("name");
        }
        if (b == null) {
            throw this.bf("text");
        }
        this.cd();
        if (!XmlChar.g(a)) {
            throw this.bf("A processing instruction name must be a valid XML name.");
        }
        if (XmlTextWriter_StringUtil.d(b, "?>") > 0) {
            throw this.bf("Processing instruction cannot contain \"?>\" as its value.");
        }
        this.b6("ProcessingInstruction", false, a == "xml", false);
        this.bq.v("<?");
        this.bq.v(a);
        this.bq.o(' ');
        this.bq.v(b);
        this.bq.v("?>");
        if (this.ck == 0) {
            this.ck = 1;
        }
    };
    XmlTextWriter.prototype.ar = function (a) {
        if (a == null) {
            throw this.bf("text");
        }
        if (a.length == 0 || XmlChar.u(a) >= 0) {
            throw this.bf("WriteWhitespace method accepts only whitespaces.");
        }
        this.b6("Whitespace", true, false, true);
        this.bq.v(a);
    };
    XmlTextWriter.prototype.m = function (a) {
        if (a == null) {
            a = stringEmpty();
        }
        this.b5("CData", false);
        if (XmlTextWriter_StringUtil.d(a, "]]>") >= 0) {
            throw this.bf("CDATA section must not contain ']]>'.");
        }
        this.bq.v("<![CDATA[");
        this.b9(a);
        this.bq.v("]]>");
    };
    XmlTextWriter.prototype.ap = function (a) {
        if (a == null || (a.length == 0 && !this.a7)) {
            return;
        }
        this.b5("Text", true);
        this.cc(a, this.ck == 3);
    };
    XmlTextWriter.prototype.ah = function (a) {
        if (a == null) {
            return;
        }
        this.b6("Raw string", true, true, true);
        this.bq.v(a);
    };
    XmlTextWriter.prototype.n = function (a) {
        this.b7(a, '\0', false);
    };
    XmlTextWriter.prototype.aq = function (a, b) {
        this.b7(a, b, true);
    };
    XmlTextWriter.prototype.b7 = function (a, b, c) {
        if (c && ('�'.charCodeAt(0) > b.charCodeAt(0) || b.charCodeAt(0) > '�'.charCodeAt(0) || '�'.charCodeAt(0) > a.charCodeAt(0) || a.charCodeAt(0) > '�'.charCodeAt(0))) {
            throw this.bf(stringFormat("Invalid surrogate pair was found. Low: &#x{0:X}; High: &#x{0:X};", a.charCodeAt(0), b.charCodeAt(0)));
        }
        else if (this.ay && XmlChar.f(a.charCodeAt(0))) {
            throw this.bf(stringFormat("Invalid character &#x{0:X};", a.charCodeAt(0)));
        }
        this.b5("Character", true);
        var d = c ? (b.charCodeAt(0) - 55296) * 1024 + a.charCodeAt(0) - 56320 + 65536 : a.charCodeAt(0);
        this.bq.v("&#x");
        this.bq.v(intToString1(d, "X", CultureInfo.invariantCulture));
        this.bq.o(';');
    };
    XmlTextWriter.prototype.w = function (a) {
        if (a == null) {
            throw this.bf("name");
        }
        if (!XmlChar.g(a)) {
            throw this.bf("Argument name must be a valid XML name.");
        }
        this.b5("Entity reference", true);
        this.bq.o('&');
        this.bq.v(a);
        this.bq.o(';');
    };
    XmlTextWriter.prototype.y = function (a) {
        if (a == null) {
            throw this.bf("name");
        }
        if (!XmlChar.g(a)) {
            throw this.bf("Not a valid name string.");
        }
        this.ap(a);
    };
    XmlTextWriter.prototype.aa = function (a) {
        if (a == null) {
            throw this.bf("nmtoken");
        }
        if (!XmlChar.k(a)) {
            throw this.bf("Not a valid NMTOKEN string.");
        }
        this.ap(a);
    };
    XmlTextWriter.prototype.ae = function (a, b) {
        if (a == null) {
            throw this.bf("localName");
        }
        if (b == null) {
            b = stringEmpty();
        }
        if (b == "http://www.w3.org/2000/xmlns/") {
            throw this.bf("Prefix 'xmlns' is reserved and cannot be overriden.");
        }
        if (!XmlChar.i(a)) {
            throw this.bf("localName must be a valid NCName.");
        }
        this.b5("QName", true);
        var c = b.length > 0 ? this.a(b) : stringEmpty();
        if (c == null) {
            if (this.ck == 3) {
                c = this.bt(b, false);
            }
            else {
                throw this.bf(stringFormat("Namespace '{0}' is not declared.", b));
            }
        }
        if (c != stringEmpty()) {
            this.bq.v(c);
            this.bq.v(":");
        }
        this.bq.v(a);
    };
    XmlTextWriter.prototype.bz = function (a, b, c) {
        if (a == null) {
            throw new ArgumentNullException(0, "buffer");
        }
        if (b < 0 || a.length < b) {
            throw this.bg("index");
        }
        if (c < 0 || a.length < b + c) {
            throw this.bg("count");
        }
    };
    XmlTextWriter.prototype.k = function (a, b, c) {
        throw new NotImplementedException(1, "WriteBase64 not implemented");
    };
    XmlTextWriter.prototype.l = function (a, b, c) {
        this.bz(a, b, c);
        this.b5("BinHex", true);
        XmlConvert.ay(a, b, c, this.bq);
    };
    XmlTextWriter.prototype.o = function (a, b, c) {
        this.bz(a, b, c);
        this.b5("Chars", true);
        this.cb(a, b, c, this.ck == 3);
    };
    XmlTextWriter.prototype.ag = function (a, b, c) {
        this.bz(a, b, c);
        this.b5("Raw text", false);
        this.bq.m(a, b, c);
    };
    XmlTextWriter.prototype.cd = function () {
        this.a8(0, false);
    };
    XmlTextWriter.prototype.cf = function () {
        this.a8(-1, false);
    };
    XmlTextWriter.prototype.ce = function () {
        if (!this.a8(0, true)) {
            this.bq.o(' ');
        }
    };
    XmlTextWriter.prototype.a8 = function (a, b) {
        if (!this.a1) {
            return false;
        }
        for (var c = this.bl - 1; c >= 0; c--) {
            if (!b && this.au[c].b) {
                return false;
            }
        }
        if (this.ck != 0) {
            this.bq.v(this.bu);
        }
        for (var d = 0; d < this.bl + a; d++) {
            this.bq.v(this.bs);
        }
        return true;
    };
    XmlTextWriter.prototype.b4 = function () {
        if (this.ck != 0) {
            return;
        }
        this.cg(false, false);
    };
    XmlTextWriter.prototype.b6 = function (a, b, c, d) {
        var t1 = this.ck;
        L0: while (true) {
            switch (t1) {
                case 5: throw this.bi(a);
                case 0:
                    if (d) {
                        this.b0();
                    }
                    if (this.cn == 2 && !c) {
                        this.b4();
                    }
                    this.ck = 1;
                    break;
                case 3:
                    if (b) {
                        break;
                    }
                    t1 = 5;
                    continue L0;
                case 2:
                    if (d) {
                        this.b0();
                    }
                    this.b1();
                    break;
                case 4:
                    if (d) {
                        this.b0();
                    }
                    break;
            }
            break;
        }
    };
    XmlTextWriter.prototype.b0 = function () {
        if (this.bl > 0) {
            this.au[this.bl - 1].b = true;
        }
    };
    XmlTextWriter.prototype.b5 = function (a, b) {
        var t1 = this.ck;
        L0: while (true) {
            switch (t1) {
                case 5: throw this.bi(a);
                case 1:
                case 0:
                    if (!this.ax || this.a3) {
                        t1 = 5;
                        continue L0;
                    }
                    if (this.cn == 2) {
                        this.b4();
                    }
                    this.b0();
                    this.ck = 4;
                    break;
                case 3:
                    if (b) {
                        break;
                    }
                    t1 = 5;
                    continue L0;
                case 2:
                    this.b1();
                    this.b0();
                    break;
                case 4:
                    this.b0();
                    break;
            }
            break;
        }
    };
    XmlTextWriter.prototype.cc = function (a, b) {
        var c = b ? XmlTextWriter.av : XmlTextWriter.aw;
        var d = indexOfAny(a, c);
        if (d >= 0) {
            var e = stringToCharArray(a);
            this.b8(e, 0, d);
            this.cb(e, d, e.length - d, b);
        }
        else {
            this.b9(a);
        }
    };
    XmlTextWriter.prototype.b9 = function (a) {
        var b = XmlChar.t(a, true);
        if (b >= 0) {
            var c = stringToCharArray(a);
            this.bq.m(c, 0, b);
            this.b8(c, b, c.length - b);
        }
        else {
            this.bq.v(a);
        }
    };
    XmlTextWriter.prototype.b8 = function (a, b, c) {
        var d = b;
        var e = b + c;
        while ((b = XmlChar.s(a, d, c, true)) >= 0) {
            if (this.ay) {
                throw this.bf(stringFormat("Input contains invalid character at {0} : &#x{1:X};", b, a[b].charCodeAt(0)));
            }
            if (d < b) {
                this.bq.m(a, d, b - d);
            }
            this.bq.v("&#x");
            this.bq.v(intToString1(a[b].charCodeAt(0), "X", CultureInfo.invariantCulture));
            this.bq.o(';');
            c -= b - d + 1;
            d = b + 1;
        }
        if (d < e) {
            this.bq.m(a, d, e - d);
        }
    };
    XmlTextWriter.prototype.cb = function (a, b, c, d) {
        var e = b;
        var f = b + c;
        L0: for (var g = e; g < f; g++) {
            var t1 = a[g];
            L1: while (true) {
                switch (t1) {
                    default: continue L0;
                    case '&':
                    case '<':
                    case '>':
                        if (e < g) {
                            this.b8(a, e, g - e);
                        }
                        this.bq.o('&');
                        switch (a[g]) {
                            case '&':
                                this.bq.v("amp;");
                                break;
                            case '<':
                                this.bq.v("lt;");
                                break;
                            case '>':
                                this.bq.v("gt;");
                                break;
                            case '\'':
                                this.bq.v("apos;");
                                break;
                            case '\"':
                                this.bq.v("quot;");
                                break;
                        }
                        break;
                    case '\"':
                    case '\'':
                        if (d && a[g] == this.bb) {
                            t1 = '&';
                            continue L1;
                        }
                        continue L0;
                    case '\r':
                        if (g + 1 < f && a[g] == '\n') {
                            g++;
                        }
                        t1 = '\n';
                        continue L1;
                    case '\n':
                        if (e < g) {
                            this.b8(a, e, g - e);
                        }
                        if (d) {
                            this.bq.v(a[g] == '\r' ? "&#xD;" : "&#xA;");
                            break;
                        }
                        switch (this.cj) {
                            case 1:
                                this.bq.v(a[g] == '\r' ? "&#xD;" : "&#xA;");
                                break;
                            case 0:
                                this.bq.v(this.bu);
                                break;
                            default:
                                this.bq.o(a[g]);
                                break;
                        }
                        break;
                }
                break;
            }
            e = g + 1;
        }
        if (e < f) {
            this.b8(a, e, f - e);
        }
    };
    XmlTextWriter.prototype.bg = function (a) {
        return new ArgumentOutOfRangeException(1, a);
    };
    XmlTextWriter.prototype.bf = function (a) {
        return new ArgumentException(1, a);
    };
    XmlTextWriter.prototype.bh = function (a) {
        return new InvalidOperationException(1, a);
    };
    XmlTextWriter.prototype.bi = function (a) {
        return this.bh(stringFormat("This XmlWriter does not accept {0} at this state {1}.", a, enumGetBox(WriteState_$type, this.ck)));
    };
    XmlTextWriter.$t = markType(XmlTextWriter, 'XmlTextWriter', XmlWriter.$);
    XmlTextWriter.by = new UTF8Encoding(0, false, false);
    XmlTextWriter.aw = null;
    XmlTextWriter.av = null;
    return XmlTextWriter;
}(XmlWriter));
export { XmlTextWriter };
//# sourceMappingURL=XmlReader_combined.js.map