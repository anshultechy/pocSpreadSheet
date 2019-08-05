/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
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
export class DescriptionSerializer extends Base {
    constructor() {
        super();
        this.e = false;
    }
    h(a, b) {
        let c = DescriptionTreeBuilder.createTree(a, b);
        let d = new DescriptionSerializerBuilder();
        this.i(a, c, d);
        return d.toString();
    }
    l(a, b, c) {
        this.i(a, b, c);
    }
    c(a, b) {
        let c = new JsonDictionaryParser();
        let d = c.parse(b);
        return this.d(a, d, false);
    }
    d(a, b, c) {
        if (!(typeCast(JsonDictionaryObject.$, b) !== null)) {
            throw new NotSupportedException(1, "expected an object at the root of the json");
        }
        let d = b;
        if (c) {
            this.e = true;
        }
        let e = this.b(a, d);
        this.e = false;
        return e;
    }
    b(a, b, c = 8) {
        if (!b.c("type")) {
            throw new NotSupportedException(1, "expected type to be defined for the json object");
        }
        let d = new DescriptionResult();
        let e = b.item("type").value;
        let f = a.i(e);
        d.result = f;
        if (f == null) {
            d.d("couldn't find registered description for type: " + e);
            return d;
        }
        let g = b.a();
        for (let h = 0; h < g.length; h++) {
            let i = g[h];
            let j = a.b(e, TypeDescriptionContext.l(i));
            if (j == null) {
                if (TypeDescriptionContext.l(i) == "Name") {
                    let k = "string";
                    let l = b.item(i);
                    let m = this.f(d, a, l, k);
                    f.name = m;
                }
                continue;
            }
            let n = b.item(i);
            if (typeCast(JsonDictionaryObject.$, n) !== null) {
                let o = n;
                let p = this.b(a, o, j.knownType);
                d.e(p);
                a.o(f, i, p.result);
            }
            else if (typeCast(JsonDictionaryArray.$, n) !== null) {
                let q = n;
                let r = "string";
                if (j.knownType == 10) {
                    r = j.specificExternalType;
                }
                if (j.knownType == 9) {
                    r = j.collectionElementType;
                }
                let s = this.a(d, a, q, r);
                a.o(f, i, s);
            }
            else {
                let t = j.specificExternalType;
                if (t == null) {
                    t = "String";
                }
                let u = n;
                let v = this.f(d, a, u, t);
                if (this.e) {
                    if (stringEndsWith(j.propertyName, "MemberPath") || (e != null && stringEndsWith(e, "Axis") && j.propertyName.toLowerCase() == "label")) {
                        let w = v.toString();
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
    }
    a(a, b, c, d) {
        let e = new Array(c.items.length);
        for (let f = 0; f < c.items.length; f++) {
            let g = c.items[f];
            if (typeCast(JsonDictionaryObject.$, g) !== null) {
                let h = g;
                let i = this.b(b, h);
                a.e(i);
                e[f] = i.result;
            }
            else if (typeCast(JsonDictionaryArray.$, g) !== null) {
                let j = g;
                let k = this.a(a, b, j, d);
                e[f] = k;
            }
            else {
                let l = g;
                let m = this.f(a, b, l, d);
                e[f] = m;
            }
        }
        return e;
    }
    f(a, b, c, d) {
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
                    let val_ = c.value;
                    let e = (new Date(val_));
                    return e;
                }
                return c.value;
            default:
                a.d("unexpected value type");
                return c.value;
        }
    }
    i(a, b, c) {
        c.f("{");
        c.i();
        c.f("\"type\": \"" + b.h + "\",");
        let d = b.e();
        for (let e = 0; e < d.count; e++) {
            let f = d._inner[e];
            this.j(a, b, f, c);
        }
        c.h();
        c.f("}");
    }
    g(a) {
        if (a == null) {
            return null;
        }
        return a.substr(0, 1).toLowerCase() + a.substr(1);
    }
    j(a, b, c, d) {
        if (c.c.toLowerCase() == "type") {
            return;
        }
        d.e("\"" + this.g(c.c) + "\": ");
        this.m(a, b, c, c.b, d);
        d.f(",");
    }
    m(a, b, c, d, e) {
        let f = 2;
        if (c.a != null) {
            f = c.a.knownType;
        }
        switch (f) {
            case 6:
            case 16:
            case 10:
                {
                    e.e("[");
                    let g = c.b;
                    let h = c.a.specificType;
                    if (c.a.knownType == 6 || c.a.knownType == 16) {
                        h = "String";
                    }
                    for (let i = 0; i < g.length; i++) {
                        if (i > 0) {
                            e.e(", ");
                        }
                        let j = h;
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
                    let k = c.b;
                    let l = c.a.collectionElementType;
                    for (let m = 0; m < k.length; m++) {
                        if (m > 0) {
                            e.e(", ");
                        }
                        let n = l;
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
    }
    k(a, b, c, d) {
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
                let v_ = c;
                d.e("\"" + (v_.toJSON()) + "\"");
                break;
        }
    }
}
DescriptionSerializer.$t = markType(DescriptionSerializer, 'DescriptionSerializer');
//# sourceMappingURL=DescriptionSerializer.js.map