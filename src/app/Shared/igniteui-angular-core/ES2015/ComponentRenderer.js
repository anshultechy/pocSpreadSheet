/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, IEnumerable_$type, fromEnum, typeCast, Date_$type, Boolean_$type, Array_$type, String_$type, runOn, markType } from "./type";
import { TypeDescriptionContext } from "./TypeDescriptionContext";
import { TypeDescriptionPropretyTransforms } from "./TypeDescriptionPropretyTransforms";
import { TypeDescriptionCleanups } from "./TypeDescriptionCleanups";
import { Dictionary$2 } from "./Dictionary$2";
import { Description } from "./Description";
import { DescriptionTreeNode } from "./DescriptionTreeNode";
import { ContainerState } from "./ContainerState";
import { Queue$1 } from "./Queue$1";
import { DescriptionTreeAction } from "./DescriptionTreeAction";
import { DescriptionRef } from "./DescriptionRef";
import { DescriptionSerializerBuilder } from "./DescriptionSerializerBuilder";
import { DescriptionSerializer } from "./DescriptionSerializer";
import { DataSourceLocalDataProvider } from "./DataSourceLocalDataProvider";
import { JsonDictionaryParser } from "./JsonDictionaryParser";
import { JsonDictionaryObject } from "./JsonDictionaryObject";
import { JsonDictionaryValue } from "./JsonDictionaryValue";
import { JsonDictionaryArray } from "./JsonDictionaryArray";
import { List$1 } from "./List$1";
import { DescriptionTreeBuilder } from "./DescriptionTreeBuilder";
import { DescriptionTreeReconciler } from "./DescriptionTreeReconciler";
import { NotImplementedException } from "./NotImplementedException";
import { ComponentRendererAdapter } from "./ComponentRendererAdapter";
import { stringIsNullOrEmpty, stringStartsWith } from "./string";
/**
 * @hidden
 */
export class ComponentRenderer extends Base {
    constructor() {
        super();
        this.d = null;
        this._context = null;
        this.i = null;
        this.f = null;
        this.ag = new Dictionary$2(Base.$, Description.$, 0);
        this.af = new Dictionary$2(Base.$, DescriptionTreeNode.$, 0);
        this.aj = new Dictionary$2(Base.$, ContainerState.$, 0);
        this.ah = new Dictionary$2(Base.$, Queue$1.$.specialize(Queue$1.$.specialize(DescriptionTreeAction.$)), 0);
        this.ae = new Dictionary$2(Base.$, Boolean_$type, 0);
        this.ai = new Dictionary$2(String_$type, DescriptionRef.$, 0);
        this.ak = new Dictionary$2(String_$type, Base.$, 0);
        this.al = new Dictionary$2(String_$type, Base.$, 0);
        let a = this.e();
        this.d = a;
        this.context = new TypeDescriptionContext(a, ComponentRenderer.platform);
        this.i = new TypeDescriptionPropretyTransforms();
        this.f = new TypeDescriptionCleanups();
    }
    get context() {
        return this._context;
    }
    set context(a) {
        this._context = a;
    }
    e() {
        return (new ComponentRendererAdapter());
    }
    toJson(a) {
        let b = new DescriptionSerializerBuilder();
        let c = new DescriptionSerializer();
        b.f("{");
        b.i();
        b.f("\"descriptions\": {");
        b.i();
        let d = true;
        for (let e of fromEnum(this.af.keys)) {
            if (d) {
                d = false;
            }
            else {
                b.f(",");
            }
            let f = e;
            let g = this.af.item(e);
            let h = "root";
            h = a(f);
            if (stringIsNullOrEmpty(h)) {
                h = "root";
            }
            b.e("\"" + h + "\"");
            b.e(": ");
            c.l(this.context, g, b);
        }
        b.f("");
        b.h();
        b.e("}");
        if (this.al.count > 0) {
            b.e(",");
        }
        b.f("");
        if (this.al.count > 0) {
            d = true;
            b.f("refs: {");
            b.i();
            for (let i of fromEnum(this.al.keys)) {
                if (!this.k(i, this.al.item(i))) {
                    continue;
                }
                if (d) {
                    d = false;
                }
                else {
                    b.f(",");
                }
                this.b1(b, i, this.al.item(i));
            }
            b.f("");
            b.h();
            b.f("}");
        }
        b.h();
        b.f("}");
        return b.toString();
    }
    b1(a, b, c) {
        a.e("\"" + b + "\": ");
        this.b2(a, c);
    }
    b2(a, b) {
        if (this.r(b)) {
            if (typeof b === 'string') {
                a.e(b == null ? "null" : "\"" + b.toString() + "\"");
            }
            else if (typeof b === 'number') {
                a.e(b == null ? "null" : b.toString());
            }
            else if (typeof b === 'number') {
                a.e(b == null ? "null" : b.toString());
            }
            else if (typeof b === 'number') {
                a.e(b == null ? "null" : b.toString());
            }
            else if (typeof b === 'number') {
                a.e(b == null ? "null" : b.toString());
            }
            else if (typeof b === 'number') {
                a.e(b == null ? "null" : b.toString());
            }
            else if (typeof b === 'number') {
                a.e(b == null ? "null" : b.toString());
            }
            else if (typeof b === 'number') {
                a.e(b == null ? "null" : b.toString());
            }
            else if (typeCast(Date_$type, b) !== null) {
                let v_ = b;
                a.e("\"" + (v_.toJSON()) + "\"");
            }
            else if (typeCast(Boolean_$type, b) !== null) {
                a.e(b == null ? "null" : b.toString().toLowerCase());
            }
            else {
                a.e("null");
            }
        }
        else {
            if (b == null) {
                a.e("null");
                return;
            }
            if (this.p(b)) {
                a.f("[");
                a.i();
                let c = new DataSourceLocalDataProvider();
                c.dataSource = b;
                for (let d = 0; d < c.actualCount; d++) {
                    if (d > 0) {
                        a.f(",");
                    }
                    this.b0(a, c, d);
                }
                a.f("");
                a.h();
                a.e("]");
            }
            else {
                let e = [b];
                let f = new DataSourceLocalDataProvider();
                f.dataSource = e;
                this.b0(a, f, 0);
            }
        }
    }
    r(a) {
        if (typeof a === 'string') {
            return true;
        }
        if (typeof a === 'number' || typeof a === 'number' || typeof a === 'number' || typeof a === 'number' || typeof a === 'number' || typeof a === 'number' || typeof a === 'number') {
            return true;
        }
        if (typeCast(Date_$type, a) !== null) {
            return true;
        }
        if (typeCast(Boolean_$type, a) !== null) {
            return true;
        }
        return false;
    }
    p(a) {
        if (typeCast(Array_$type, a) !== null) {
            return true;
        }
        if (typeCast(IEnumerable_$type, a) !== null) {
            return true;
        }
        return false;
    }
    b0(a, b, c) {
        a.f("{");
        a.i();
        let d = b.actualSchema;
        for (let e = 0; e < d.propertyNames.length; e++) {
            if (e > 0) {
                a.f(",");
            }
            let f = d.propertyNames[e];
            if (stringStartsWith(f, "[")) {
                f = f.substr(1, f.length - 2);
            }
            a.e("\"" + f + "\"");
            a.e(": ");
            let g = b.getItemValue(b.getItemAtIndex(c), d.propertyNames[e]);
            switch (d.propertyTypes[e]) {
                case 0:
                    a.e(g == null ? "null" : "\"" + g.toString() + "\"");
                    break;
                case 2:
                    a.e(g == null ? "null" : "\"" + g.toString() + "\"");
                    break;
                case 10:
                case 6:
                case 5:
                case 1:
                case 3:
                case 4:
                case 7:
                    a.e(g == null ? "null" : g.toString());
                    break;
                case 8:
                    let v_ = g;
                    a.e("\"" + (v_.toJSON()) + "\"");
                    break;
                case 11:
                    this.b2(a, g);
                    break;
            }
        }
        a.h();
        a.f("}");
    }
    k(a, b) {
        if (b == null) {
            return true;
        }
        let v_ = b;
        if ((typeof v_ === 'function')) {
            return false;
        }
        return true;
    }
    loadJson(a, b) {
        let c = new JsonDictionaryParser();
        let d = c.parse(a);
        let e = new DescriptionSerializer();
        let f = null;
        if (typeCast(JsonDictionaryObject.$, d) !== null) {
            let g = d;
            if (g.c("descriptions")) {
                let h = g.item("descriptions");
                if (typeCast(JsonDictionaryObject.$, h) !== null) {
                    let i = h;
                    let j = i.a();
                    for (let k = 0; k < j.length; k++) {
                        let l = j[k];
                        let m = i.item(l);
                        let n = b(l);
                        if (n == null) {
                            continue;
                        }
                        f = n;
                        let o = false;
                        let p = e.d(this.context, m, o);
                        if (p.result == null) {
                            continue;
                        }
                        this.render(p.result, n);
                    }
                }
            }
            if (g.c("refs") && f != null) {
                let q = g.item("refs");
                if (typeCast(JsonDictionaryObject.$, q) !== null) {
                    let r = q;
                    let s = r.a();
                    for (let t = 0; t < s.length; t++) {
                        let u = s[t];
                        let v = r.item(u);
                        if (typeCast(JsonDictionaryValue.$, v) !== null) {
                            let w = v;
                            this.provideRefValue(f, u, w.value);
                        }
                        else if (typeCast(JsonDictionaryArray.$, v) !== null) {
                            let x = v;
                            let y = this.a(x);
                            this.provideRefValue(f, u, y);
                        }
                        else {
                            let z = this.a4(v);
                            this.provideRefValue(f, u, z);
                        }
                    }
                }
            }
        }
    }
    a(a) {
        let b = new Array(a.items.length);
        for (let c = 0; c < a.items.length; c++) {
            let d = this.a4(a.items[c]);
            b[c] = d;
        }
        return b;
    }
    a4(a) {
        let b = {};
        let dict_ = b;
        let c = a.a();
        for (let d = 0; d < c.length; d++) {
            let key_ = c[d];
            if (typeCast(JsonDictionaryObject.$, a.item(key_)) !== null) {
                let val_ = this.a4(a.item(key_));
                dict_[key_] = val_;
            }
            else if (typeCast(JsonDictionaryArray.$, a.item(key_)) !== null) {
                let val_ = this.a(a.item(key_));
                dict_[key_] = val_;
            }
            else {
                let val_ = a.item(key_).value;
                dict_[key_] = val_;
            }
        }
        return dict_;
    }
    render(a, b) {
        if (!this.aj.containsKey(b)) {
            this.aj.item(b, new ContainerState());
            this.aj.item(b).e = b;
        }
        this.ag.item(b, a);
        this.bn(b, () => this.bw(b));
    }
    bn(a, b) {
        this.d.onUIThread(a, b);
    }
    bw(a) {
        if (this.ag.containsKey(a)) {
            let b = this.ag.item(a);
            this.ag.removeItem(a);
            let c = DescriptionTreeBuilder.createTree(this.context, b);
            let d = null;
            if (this.af.containsKey(a)) {
                d = this.af.item(a);
            }
            let e = DescriptionTreeReconciler.b(d, c);
            this.af.item(a, c);
            this.bx(a, e);
        }
    }
    provideRefValue(a, b, c) {
        this.bn(a, () => {
            if (!this.aj.containsKey(a)) {
                this.aj.addItem(a, ((() => {
                    let $ret = new ContainerState();
                    $ret.e = a;
                    return $ret;
                })()));
            }
            let d = this.aj.item(a);
            this.br(b, c, true);
        });
    }
    removeRefValue(a, b) {
        this.bn(a, () => {
            if (!this.aj.containsKey(a)) {
                this.aj.addItem(a, ((() => {
                    let $ret = new ContainerState();
                    $ret.e = a;
                    return $ret;
                })()));
            }
            let c = this.aj.item(a);
            this.removeRefValueCore(b, true);
        });
    }
    clearRefValues(a) {
        this.bn(a, () => {
            if (!this.aj.containsKey(a)) {
                this.aj.addItem(a, ((() => {
                    let $ret = new ContainerState();
                    $ret.e = a;
                    return $ret;
                })()));
            }
            let b = this.aj.item(a);
            this.clearUserRefValues();
        });
    }
    bx(a, b) {
        let c = this.aj.item(a);
        this.bo(a, c, b);
    }
    bz(a, b) {
        this.bl(a, b, true);
    }
    b5(a, b) {
        this.bl(a, b, false);
    }
    bl(a, b, c) {
        if (!c) {
            if (this.ae.containsKey(a) && this.ae.item(a)) {
                return;
            }
        }
        this.ae.item(a, true);
        let d = true;
        while (d && this.ah.item(a).count > 0) {
            while (this.ah.item(a).count > 0 && this.ah.item(a).c().count < 1) {
                this.ah.item(a).b();
            }
            if (this.ah.item(a).count < 1) {
                break;
            }
            let e = this.ah.item(a).c();
            while (e.count > 0) {
                let f = e.b();
                d = this.s(a, b, f);
                if (!d) {
                    break;
                }
            }
        }
        if (d) {
            this.ae.item(a, false);
        }
    }
    bo(a, b, c) {
        let d = new Queue$1(DescriptionTreeAction.$);
        for (let e = 0; e < c.count; e++) {
            d.g(c._inner[e]);
        }
        if (!this.ah.containsKey(a)) {
            this.ah.addItem(a, new Queue$1(Queue$1.$.specialize(DescriptionTreeAction.$)));
        }
        this.ah.item(a).g(d);
        this.b5(a, b);
    }
    bp(a, b, c) {
        for (let d = 0; d < c.count; d++) {
            this.s(a, b, c._inner[d]);
        }
    }
    s(a, b, c) {
        switch (c.a) {
            case 5: return this.t(a, b, c);
            case 2: return this.u(a, b, c);
            case 4: return this.v(a, b, c);
            case 3: return this.w(a, b, c);
            case 1: return this.x(a, b, c);
            case 0: return this.y(a, b, c);
        }
        return true;
    }
    y(a, b, c) {
        let d = this.a9(a, b, c);
        this.ad(a, b, c, d);
        return true;
    }
    ad(a, b, c, d) {
        let e = this.a6(c, a, b);
        e = this.i.b(ComponentRenderer.platform, e, c);
        if (c.c != null && c.c.knownType == 9) {
            this.ac(a, b, c.h(ComponentRenderer.platform), c.c, e, d);
        }
        else {
            this.b3(a, b, c.h(ComponentRenderer.platform), e, c.g, d);
        }
        return true;
    }
    ac(a, b, c, d, e, f) {
        this.d.setOrUpdateCollectionOnTarget(a, c, d, this.context, f, e);
        return true;
    }
    a6(a, b, c) {
        if (a.c == null) {
            return a.f;
        }
        switch (a.c.knownType) {
            case 10: return this.ao(a, b, c);
            case 7: return this.ap(a);
            case 4: return this.aq(a);
            case 6: return this.ar(a);
            case 9: return this.ao(a, b, c);
            case 5: return this.as(a);
            case 16: return this.at(a);
            case 20: return this.ba(a, c);
            case 15: return null;
            case 3: return this.au(a);
            case 19: return this.bb(a, c);
            case 8: return this.aw(a, b, c);
            case 13: return null;
            case 18: return this.bc(a, c);
            case 1: return this.ax(a);
            case 11: return this.ay(a);
            case 14: return this.az(a);
            case 12: return this.a0(a);
            case 2: return this.a1(a);
            case 21: return this.a2(a);
            case 17: return this.a3(a);
            case 0: return null;
        }
        return null;
    }
    a3(a) {
        throw new NotImplementedException(0);
    }
    a2(a) {
        return a.f;
    }
    a1(a) {
        return a.f != null ? a.f.toString() : null;
    }
    a0(a) {
        let b = a.f;
        let width_ = b.width;
        let height_ = b.height;
        let c = { width: width_, height: height_ };
        return c;
    }
    az(a) {
        let b = a.f;
        let top_ = b.top;
        let left_ = b.left;
        let width_ = b.width;
        let height_ = b.height;
        let c = { left: left_, top: top_, width: width_, height: height_ };
        return c;
    }
    ay(a) {
        let b = a.f;
        let x_ = b.x;
        let y_ = b.y;
        let c = { x: x_, y: y_ };
        return c;
    }
    ax(a) {
        return a.f;
    }
    b(a) {
        if (this.ai.containsKey(a)) {
            let b = this.ai.item(a);
            return b;
        }
        let c = new DescriptionRef(a);
        this.ai.addItem(a, c);
        return c;
    }
    bc(a, b) {
        return a.f == null ? null : this.b(a.f);
    }
    aw(a, b, c) {
        let d = this.a5(a.c.specificType, a.f, b, c);
        return d;
    }
    bb(a, b) {
        return a.f == null ? null : this.b(a.f);
    }
    au(a) {
        return a.f;
    }
    ba(a, b) {
        return a.f == null ? null : this.b(a.f);
    }
    be(a) {
        return a;
    }
    at(a) {
        let b = a.f;
        if (b == null) {
            return null;
        }
        let c = new Array(b.length);
        for (let d = 0; d < b.length; d++) {
            c[d] = this.be(b[d]);
        }
        return c;
    }
    as(a) {
        return this.be(a.f);
    }
    ar(a) {
        let b = a.f;
        if (b == null) {
            return null;
        }
        let c = new Array(b.length);
        for (let d = 0; d < b.length; d++) {
            c[d] = this.bd(b[d]);
        }
        return c;
    }
    bd(a) {
        return a;
    }
    aq(a) {
        return this.bd(a.f);
    }
    ap(a) {
        return a.f;
    }
    ao(a, b, c) {
        if (a.f == null) {
            return null;
        }
        let d = a.f;
        let e = new List$1(Base.$, 0);
        let f = a.c.specificType;
        if (a.c.knownType == 9) {
            f = a.c.collectionElementType;
        }
        for (let g = 0; g < d.length; g++) {
            let h = f;
            if (typeCast(DescriptionTreeNode.$, d[g]) !== null) {
                let i = d[g];
                if (i.b("Type")) {
                    h = i.a("Type").b;
                }
            }
            let j = this.a5(h, d[g], b, c);
            e.add1(j);
        }
        return e.toArray();
    }
    b3(a, b, c, d, e, f) {
        if (typeCast(DescriptionRef.$, d) !== null) {
            let g = d;
            let h = false;
            if (e != null && typeof e === 'string') {
                if (this.n(e)) {
                    let i = this.c(e);
                    if (Base.equalsStatic(i, d)) {
                        h = true;
                    }
                    else {
                        i.i(f, c);
                    }
                }
            }
            if (this.o(d)) {
                d = this.a8(d);
                this.b4(f, c, d, e);
            }
            let j = null;
            j = (k, l) => {
                let m = this.a8(k);
                this.b4(f, c, m, e);
            };
            if (!h) {
                g.f(f, c, j);
            }
            return;
        }
        this.b4(f, c, d, e);
    }
    br(a, b, c) {
        let d = null;
        if (c) {
            if (this.al.containsKey(a)) {
                d = this.al.item(a);
            }
            this.al.item(a, b);
        }
        else {
            if (this.ak.containsKey(a)) {
                d = this.ak.item(a);
            }
            this.ak.item(a, b);
        }
        if (this.ai.containsKey(a)) {
            this.ai.item(a).e(d, b);
        }
    }
    removeRefValueCore(a, b) {
        let c = null;
        if (b) {
            if (this.al.containsKey(a)) {
                c = this.al.item(a);
            }
            this.al.removeItem(a);
        }
        else {
            if (this.ak.containsKey(a)) {
                c = this.ak.item(a);
            }
            this.ak.removeItem(a);
        }
        if (this.ai.containsKey(a)) {
            this.ai.item(a).e(c, this.a8(this.ai.item(a)));
            if (this.ai.item(a).b <= 0) {
                this.ai.item(a).g();
                this.ai.removeItem(a);
            }
        }
    }
    clearUserRefValues() {
        let a = new List$1(String_$type, 0);
        for (let b of fromEnum(this.al.keys)) {
            a.add(b);
        }
        for (let c of fromEnum(a)) {
            this.removeRefValueCore(c, true);
        }
    }
    o(a) {
        return this.al.containsKey(a.d) || this.ak.containsKey(a.d);
    }
    a8(a) {
        if (this.al.containsKey(a.d)) {
            return this.al.item(a.d);
        }
        if (this.ak.containsKey(a.d)) {
            return this.ak.item(a.d);
        }
        return null;
    }
    n(a) {
        return this.ai.containsKey(a);
    }
    c(a) {
        return this.ai.item(a);
    }
    a9(a, b, c) {
        return b.f(c.b.f);
    }
    x(a, b, c) {
        let d = this.a9(a, b, c);
        this.ab(a, b, c, d);
        return true;
    }
    ab(a, b, c, d) {
        this.d.resetPropertyOnTarget(a, c.h(ComponentRenderer.platform), c.c, d);
        return true;
    }
    w(a, b, c) {
        if (c.b == null) {
            return this.aa(a, b, c);
        }
        else {
            let d = this.a9(a, b, c);
            this.by(a, b, c, d);
        }
        return true;
    }
    by(a, b, c, d) {
        let e = c.h(ComponentRenderer.platform);
        let f = this.a5(c.c.collectionElementType, c.f, a, b);
        this.d.replaceItemInCollection(e, c.c, d, c.d, f);
        if (c.g != null && typeCast(DescriptionTreeNode.$, c.g) !== null) {
            let g = c.g.f;
            if (g >= 0) {
                let h = b.f(g);
                if (h != null) {
                    this.bk(a, h, b);
                }
            }
        }
    }
    aa(a, b, c) {
        let d = this.d.getRootObject(a);
        if (d != null) {
            this.bk(a, d, b);
        }
        if (!(typeCast(DescriptionTreeNode.$, c.f) !== null)) {
            throw new NotImplementedException(0);
        }
        let e = c.f;
        let f = false;
        this.d.replaceRootItem(a, e.h, this.context, (g) => {
            let h = this.d.getRootObject(a);
            b.g(e.f, h, e, runOn(this, this.br));
            let i = this.am(e);
            this.bp(a, b, i);
            f = true;
            if (g) {
                this.bz(a, b);
            }
        });
        return f;
    }
    bk(a, b, c) {
        let d = this.an(a, b, c);
        for (let e of fromEnum(this.ai.values)) {
            e.h(b);
        }
        if (d != -1) {
            c.h(d, runOn(this, this.removeRefValueCore));
        }
        this.f.b(ComponentRenderer.platform, b);
    }
    an(a, b, c) {
        return c.d(b);
    }
    v(a, b, c) {
        if (c.b == null) {
            return this.z(a, b, c);
        }
        else {
            let d = this.a9(a, b, c);
            this.bs(a, b, c, d);
        }
        return true;
    }
    bs(a, b, c, d) {
        let e = c.h(ComponentRenderer.platform);
        this.d.removeItemFromCollection(e, c.c, d, c.e);
        if (c.g != null && typeCast(DescriptionTreeNode.$, c.g) !== null) {
            let f = c.g.f;
            if (f >= 0) {
                let g = b.f(f);
                if (g != null) {
                    this.bk(a, g, b);
                }
            }
        }
    }
    z(a, b, c) {
        let d = this.d.getRootObject(a);
        if (d != null) {
            this.bk(a, d, b);
        }
        let e = false;
        this.d.removeRootItem(a, this.context, (f) => {
            e = true;
            if (f) {
                this.bz(a, b);
            }
        });
        return e;
    }
    u(a, b, c) {
        if (c.b == null) {
            return this.j(a, b, c);
        }
        else {
            let d = this.a9(a, b, c);
            this.bg(a, b, c, d);
        }
        return true;
    }
    j(a, b, c) {
        if (!(typeCast(DescriptionTreeNode.$, c.f) !== null)) {
            throw new NotImplementedException(0);
        }
        let d = c.f;
        let e = false;
        this.d.replaceRootItem(a, d.h, this.context, (f) => {
            let g = this.d.getRootObject(a);
            b.g(d.f, g, d, runOn(this, this.br));
            let h = this.am(d);
            this.bp(a, b, h);
            e = true;
            if (f) {
                this.bz(a, b);
            }
        });
        return e;
    }
    bg(a, b, c, d) {
        let e = c.h(ComponentRenderer.platform);
        let f = c.c.collectionElementType;
        if (typeCast(DescriptionTreeNode.$, c.f) !== null) {
            let g = c.f;
            if (g.b("Type")) {
                f = g.a("Type").b;
            }
        }
        let h = this.a5(f, c.f, a, b);
        this.d.addItemToCollection(e, c.c, d, c.d, h);
    }
    a5(a, b, c, d) {
        if (this.q(a)) {
            return b;
        }
        let e = this.context.j(a, c);
        if (b == null) {
            return e;
        }
        if (typeCast(DescriptionTreeNode.$, b) !== null) {
            let f = b;
            d.g(f.f, e, f, runOn(this, this.br));
            let g = this.am(f);
            this.bp(c, d, g);
        }
        if (typeof b === 'string' && a.toLowerCase() != "string") {
            return this.av(a, b);
        }
        return e;
    }
    q(a) {
        return a == "int" || a == "Int32" || a == "short" || a == "Int16" || a == "double" || a == "Double" || a == "float" || a == "Float" || a == "Single" || a == "single" || a == "DateTime" || a == "decimal" || a == "Decimal" || a == "long" || a == "Int64" || a == "byte" || a == "bool" || a == "string" || a == "String";
    }
    av(a, b) {
        return this.context.f(a, b);
    }
    am(a) {
        let b = a.e();
        let c = new List$1(DescriptionTreeAction.$, 0);
        for (let d = 0; d < b.count; d++) {
            let e = new DescriptionTreeAction();
            e.a = 0;
            e.i = b._inner[d].c;
            e.c = b._inner[d].a;
            e.b = a;
            e.f = b._inner[d].b;
            c.add(e);
        }
        return c;
    }
    t(a, b, c) {
        if (c.b == null) {
            return this.m(a, b, c);
        }
        else {
            let d = this.a9(a, b, c);
            this.bh(a, b, c, d);
        }
        return true;
    }
    bh(a, b, c, d) {
        let e = c.h(ComponentRenderer.platform);
        this.d.clearCollection(d, e, c.c);
        if (c.g != null && typeCast(Array_$type, c.g) !== null) {
            let f = c.g;
            for (let g = 0; g < f.length; g++) {
                let h = f[g];
                if (h != null && typeCast(DescriptionTreeNode.$, h) !== null) {
                    let i = h.f;
                    if (i >= 0) {
                        let j = b.f(i);
                        if (j != null) {
                            this.bk(a, j, b);
                        }
                    }
                }
            }
        }
    }
    b4(a, b, c, d) {
        this.d.setPropertyValue(a, b, c, d);
    }
    a7(a, b) {
        return this.d.getPropertyValue(a, b);
    }
    m(a, b, c) {
        return this.l(a, b);
    }
    l(a, b) {
        let c = this.d.getRootObject(a);
        if (c != null) {
            this.bk(a, c, b);
        }
        let d = false;
        this.d.clearContainer(a, this.context, (e) => {
            d = true;
            if (e) {
                this.bz(a, b);
            }
        });
        return d;
    }
}
ComponentRenderer.$t = markType(ComponentRenderer, 'ComponentRenderer');
ComponentRenderer.platform = 3;
//# sourceMappingURL=ComponentRenderer.js.map