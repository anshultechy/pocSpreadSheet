/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, NotSupportedException, typeCast, typeGetValue, markType } from "./type";
import { TypeDescriptionContext } from "./TypeDescriptionContext";
import { DescriptionTreeNode } from "./DescriptionTreeNode";
import { DescriptionSerializerBuilder } from "./DescriptionSerializerBuilder";
import { DescriptionTreeBuilder } from "./DescriptionTreeBuilder";
import { DescriptionResult } from "./DescriptionResult";
import { JsonDictionaryParser } from "./JsonDictionaryParser";
import { JsonDictionaryObject } from "./JsonDictionaryObject";
import { JsonDictionaryArray } from "./JsonDictionaryArray";
import { NotImplementedException } from "./NotImplementedException";
import { stringEndsWith, stringStartsWith, stringReplace } from "./string";
/**
 * @hidden
 */
var DescriptionSerializer = /** @class */ (function (_super) {
    tslib_1.__extends(DescriptionSerializer, _super);
    function DescriptionSerializer() {
        var _this = _super.call(this) || this;
        _this.e = false;
        return _this;
    }
    DescriptionSerializer.prototype.h = function (a, b) {
        var c = DescriptionTreeBuilder.createTree(a, b);
        var d = new DescriptionSerializerBuilder();
        this.i(a, c, d);
        return d.toString();
    };
    DescriptionSerializer.prototype.l = function (a, b, c) {
        this.i(a, b, c);
    };
    DescriptionSerializer.prototype.c = function (a, b) {
        var c = new JsonDictionaryParser();
        var d = c.parse(b);
        return this.d(a, d, false);
    };
    DescriptionSerializer.prototype.d = function (a, b, c) {
        if (!(typeCast(JsonDictionaryObject.$, b) !== null)) {
            throw new NotSupportedException(1, "expected an object at the root of the json");
        }
        var d = b;
        if (c) {
            this.e = true;
        }
        var e = this.b(a, d);
        this.e = false;
        return e;
    };
    DescriptionSerializer.prototype.b = function (a, b, c) {
        if (c === void 0) { c = 8; }
        if (!b.c("type")) {
            throw new NotSupportedException(1, "expected type to be defined for the json object");
        }
        var d = new DescriptionResult();
        var e = b.item("type").value;
        var f = a.i(e);
        d.result = f;
        if (f == null) {
            d.d("couldn't find registered description for type: " + e);
            return d;
        }
        var g = b.a();
        for (var h = 0; h < g.length; h++) {
            var i = g[h];
            var j = a.b(e, TypeDescriptionContext.l(i));
            if (j == null) {
                if (TypeDescriptionContext.l(i) == "Name") {
                    var k = "string";
                    var l = b.item(i);
                    var m = this.f(d, a, l, k);
                    f.name = m;
                }
                continue;
            }
            var n = b.item(i);
            if (typeCast(JsonDictionaryObject.$, n) !== null) {
                var o = n;
                var p = this.b(a, o, j.knownType);
                d.e(p);
                a.o(f, i, p.result);
            }
            else if (typeCast(JsonDictionaryArray.$, n) !== null) {
                var q = n;
                var r = "string";
                if (j.knownType == 10) {
                    r = j.specificExternalType;
                }
                if (j.knownType == 9) {
                    r = j.collectionElementType;
                }
                var s = this.a(d, a, q, r);
                a.o(f, i, s);
            }
            else {
                var t = j.specificExternalType;
                if (t == null) {
                    t = "String";
                }
                var u = n;
                var v = this.f(d, a, u, t);
                if (this.e) {
                    if (stringEndsWith(j.propertyName, "MemberPath") || (e != null && stringEndsWith(e, "Axis") && j.propertyName.toLowerCase() == "label")) {
                        var w = v.toString();
                        if (stringStartsWith(w, "{")) {
                            if (!stringStartsWith(w, "{[")) {
                                w = w.substr(1, w.length - 2);
                                w = "{[" + w + "]}";
                                v = w;
                            }
                        }
                        else {
                            if (!stringStartsWith(w, "[")) {
                                w = "[" + w + "]";
                                v = w;
                            }
                        }
                    }
                }
                a.o(f, i, v);
            }
        }
        return d;
    };
    DescriptionSerializer.prototype.a = function (a, b, c, d) {
        var e = new Array(c.items.length);
        for (var f = 0; f < c.items.length; f++) {
            var g = c.items[f];
            if (typeCast(JsonDictionaryObject.$, g) !== null) {
                var h = g;
                var i = this.b(b, h);
                a.e(i);
                e[f] = i.result;
            }
            else if (typeCast(JsonDictionaryArray.$, g) !== null) {
                var j = g;
                var k = this.a(a, b, j, d);
                e[f] = k;
            }
            else {
                var l = g;
                var m = this.f(a, b, l, d);
                e[f] = m;
            }
        }
        return e;
    };
    DescriptionSerializer.prototype.f = function (a, b, c, d) {
        switch (c.a) {
            case 1: return c.value;
            case 3: return c.value;
            case 0: switch (d.toLowerCase()) {
                case "int": return typeGetValue(c.value);
                case "double": return c.value;
                case "timespan": return c.value;
                case "short": return typeGetValue(c.value);
                case "long": return typeGetValue(c.value);
                case "float": return c.value;
                case "byte": return typeGetValue(c.value);
                default:
                    a.d("unexpected target type for number: " + d);
                    return c.value;
            }
            case 2:
                if (d.toLowerCase() == "datetime") {
                    var val_ = c.value;
                    var e = (new Date(val_));
                    return e;
                }
                return c.value;
            default:
                a.d("unexpected value type");
                return c.value;
        }
    };
    DescriptionSerializer.prototype.i = function (a, b, c) {
        c.f("{");
        c.i();
        c.f("\"type\": \"" + b.h + "\",");
        var d = b.e();
        for (var e = 0; e < d.count; e++) {
            var f = d._inner[e];
            this.j(a, b, f, c);
        }
        c.h();
        c.f("}");
    };
    DescriptionSerializer.prototype.g = function (a) {
        if (a == null) {
            return null;
        }
        return a.substr(0, 1).toLowerCase() + a.substr(1);
    };
    DescriptionSerializer.prototype.j = function (a, b, c, d) {
        if (c.c.toLowerCase() == "type") {
            return;
        }
        d.e("\"" + this.g(c.c) + "\": ");
        this.m(a, b, c, c.b, d);
        d.f(",");
    };
    DescriptionSerializer.prototype.m = function (a, b, c, d, e) {
        var f = 2;
        if (c.a != null) {
            f = c.a.knownType;
        }
        switch (f) {
            case 6:
            case 16:
            case 10:
                {
                    e.e("[");
                    var g = c.b;
                    var h = c.a.specificType;
                    if (c.a.knownType == 6 || c.a.knownType == 16) {
                        h = "String";
                    }
                    for (var i = 0; i < g.length; i++) {
                        if (i > 0) {
                            e.e(", ");
                        }
                        var j = h;
                        if (typeCast(DescriptionTreeNode.$, g[i]) !== null) {
                            this.i(a, g[i], e);
                        }
                        else {
                            this.k(a, h, g[i], e);
                        }
                    }
                    e.e("]");
                }
                break;
            case 7:
                this.k(a, "Boolean", d, e);
                break;
            case 9:
                {
                    e.e("[");
                    var k = c.b;
                    var l = c.a.collectionElementType;
                    for (var m = 0; m < k.length; m++) {
                        if (m > 0) {
                            e.e(", ");
                        }
                        var n = l;
                        if (typeCast(DescriptionTreeNode.$, k[m]) !== null) {
                            this.i(a, k[m], e);
                        }
                        else {
                            this.k(a, l, k[m], e);
                        }
                    }
                    e.e("]");
                }
                break;
            case 4:
            case 18:
            case 19:
            case 20:
            case 5:
            case 2:
                this.k(a, "String", d, e);
                break;
            case 3:
                this.k(a, "DateTime", d, e);
                break;
            case 8:
                if (c.a.specificExternalType.toLowerCase() == "string") {
                    this.k(a, "String", d, e);
                }
                else {
                    this.i(a, d, e);
                }
                break;
            case 1:
                this.k(a, "Double", d, e);
                break;
            case 14:
            case 12:
            case 11:
                this.i(a, d, e);
                break;
            case 21:
                this.k(a, "TimeSpan", d, e);
                break;
            case 17:
            case 0:
            case 15:
            case 13: throw new NotImplementedException(0);
        }
    };
    DescriptionSerializer.prototype.k = function (a, b, c, d) {
        switch (b.toLowerCase()) {
            case "string":
                if (c == null) {
                    d.e("null");
                }
                else {
                    d.e("\"" + stringReplace(c, "\"", "\\\"") + "\"");
                }
                break;
            case "number":
            case "double":
                d.e(c.toString());
                break;
            case "int":
                d.e(c.toString());
                break;
            case "float":
                d.e(c.toString());
                break;
            case "long":
                d.e(c.toString());
                break;
            case "decimal":
                d.e(c.toString());
                break;
            case "timespan":
                d.e(c.toString());
                break;
            case "boolean":
                d.e(c.toString().toLowerCase());
                break;
            case "datetime":
                var v_ = c;
                d.e("\"" + (v_.toJSON()) + "\"");
                break;
        }
    };
    DescriptionSerializer.$t = markType(DescriptionSerializer, 'DescriptionSerializer');
    return DescriptionSerializer;
}(Base));
export { DescriptionSerializer };
//# sourceMappingURL=DescriptionSerializer.js.map