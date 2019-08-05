/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, IEnumerable_$type, fromEnum, fromEn, Number_$type, typeCast, Date_$type, String_$type, markType, TypeRegistrar } from "./type";
import { IFastItemsSource_$type } from "./IFastItemsSource";
import { ColumnReference } from "./ColumnReference";
import { List$1 } from "./List$1";
import { Dictionary$2 } from "./Dictionary$2";
import { FastItemsSourceEventArgs } from "./FastItemsSourceEventArgs";
import { ArgumentException } from "./ArgumentException";
import { IFastItemColumn$1_$type } from "./IFastItemColumn$1";
import { Tuple$2 } from "./Tuple$2";
import { FastItemColumn } from "./FastItemColumn";
import { stringIsNullOrEmpty, stringStartsWith, stringEndsWith } from "./string";
/**
 * @hidden
 */
export class FastItemsSource extends Base {
    constructor() {
        super();
        this.event = null;
        this.a = new Dictionary$2(String_$type, ColumnReference.$, 0);
        this.d = null;
        this.c = new List$1(Base.$, 0);
        this.b = null;
    }
    o(a, b, c) {
        if (this.event != null) {
            this.event(this, new FastItemsSourceEventArgs(0, a, b, c));
        }
    }
    p(a, b) {
        if (this.event != null) {
            this.event(this, new FastItemsSourceEventArgs(1, a, b));
        }
    }
    get e() {
        return this.d;
    }
    set e(a) {
        if (this.d == a) {
            return;
        }
        this.m();
        this.d = a;
        this.c.clear();
        this.b = null;
        this.g();
        for (let b of fromEnum(this.a.values)) {
            b.a.reset();
        }
        this.o(1, 0, this.c.count);
    }
    m() {
    }
    n(a, b, c) {
        let d = a;
        switch (c.action) {
            case 0:
                d.h(c.newStartingIndex, c.newItems);
                break;
            case 1:
                d.j(c.oldStartingIndex, c.oldItems);
                break;
            case 2:
                d.k(c.newStartingIndex, c.oldItems, c.newItems);
                break;
            case 4:
                d.l();
                break;
        }
    }
    g() {
        this.c.t(this.c.count, this.d);
    }
    h(a, b) {
        if (this.b != null) {
            for (let c = 0; c < b.count; ++c) {
                this.b.addItem(b.item(c), a + c);
            }
            for (let d = a; d < this.c.count; ++d) {
                this.b.item(this.c._inner[d], d + b.count);
            }
        }
        this.c.t(a, b);
        for (let e of fromEnum(this.a.values)) {
            e.a.insertRange(a, b.count);
        }
        this.o(1, a, b.count);
    }
    j(a, b) {
        this.c.v(a, b.count);
        if (this.b != null) {
            for (let c of fromEn(b)) {
                this.b.removeItem(c);
            }
            for (let d = a; d < this.c.count; ++d) {
                this.b.item(this.c._inner[d], d);
            }
        }
        for (let e of fromEnum(this.a.values)) {
            e.a.removeRange(a, b.count);
        }
        this.o(0, a, b.count);
    }
    k(a, b, c) {
        for (let d = 0; d < c.count; ++d) {
            this.c._inner[a + d] = c.item(d);
        }
        if (this.b != null) {
            for (let e of fromEn(b)) {
                this.b.removeItem(e);
            }
            for (let f = 0; f < c.count; ++f) {
                this.b.addItem(c.item(f), a + f);
            }
        }
        for (let g of fromEnum(this.a.values)) {
            g.a.replaceRange(a, c.count);
        }
        this.o(2, a, b.count);
    }
    l() {
        this.c.clear();
        this.b = null;
        this.c.t(0, this.d);
        for (let a of fromEnum(this.a.values)) {
            a.a.reset();
        }
        this.o(4, 0, this.c.count);
    }
    i(a, b) {
        let c = null;
        let d = this.indexOf(a);
        if (d == -1) {
            throw new ArgumentException(1, "item");
        }
        if (stringIsNullOrEmpty(b)) {
            for (let e of fromEnum(this.a)) {
                e.value.a.replaceRange(d, 1);
                this.p(d, e.value.a.propertyName);
            }
        }
        else if (b == "Item[]") {
            for (let f of fromEnum(this.a)) {
                if (f.key != null && stringStartsWith(f.key, "[") && stringEndsWith(f.key, "]")) {
                    f.value.a.replaceRange(d, 1);
                    this.p(d, f.value.a.propertyName);
                }
            }
        }
        else {
            if (((() => { let g = this.a.tryGetValue(b, c); c = g.p1; return g.ret; })())) {
                c.a.replaceRange(d, 1);
            }
            if (((() => { let g = this.a.tryGetValue(b + "_object", c); c = g.p1; return g.ret; })())) {
                c.a.replaceRange(d, 1);
            }
            this.p(d, b);
        }
    }
    get count() {
        return this.c.count;
    }
    item(a) {
        return this.c._inner[a];
    }
    getEnumeratorObject() {
        return this.c.getEnumerator();
    }
    indexOf(a) {
        let b;
        if (this.b == null && this.c.count > 0) {
            this.b = new Dictionary$2(Base.$, Number_$type, 0);
            let contents_ = this.c;
            let index_ = this.b;
            for (let j_ = 0; j_ < this.c.count; j_++) {
                let c = contents_._inner[j_];
                if (!this.b.containsKey(c)) {
                    this.b.addItem(c, j_);
                }
            }
        }
        if (this.b != null && ((() => { let d = this.b.tryGetValue(a, b); b = d.p1; return d.ret; })())) {
            return b;
        }
        else {
            return -1;
        }
    }
    registerColumnDateTime(a, b, c) {
        let d = null;
        if (a != null) {
            let e = null;
            if (!((() => { let f = this.a.tryGetValue(a, e); e = f.p1; return f.ret; })())) {
                let f = FastItemsSource.f(a).c;
                e = new ColumnReference(TypeRegistrar.create("FastItemDateTimeColumn", this, f, b, c));
                this.a.addItem(a, e);
            }
            e.b = e.b + 1;
            d = typeCast(IFastItemColumn$1_$type.specialize(Date_$type), e.a);
        }
        return d;
    }
    registerColumnObject(a, b, c) {
        let d = null;
        let e = a + "_object";
        if (a != null) {
            let f = null;
            if (!((() => { let g = this.a.tryGetValue(e, f); f = g.p1; return g.ret; })())) {
                let g = FastItemsSource.f(a).c;
                f = new ColumnReference(TypeRegistrar.create("FastItemObjectColumn", this, g, b, c));
                this.a.addItem(e, f);
            }
            f.b = f.b + 1;
            d = typeCast(IFastItemColumn$1_$type.specialize(Base.$), f.a);
        }
        return d;
    }
    registerColumnInt(a, b, c) {
        let d = null;
        if (a == null) {
            a = "";
        }
        let e = null;
        if (!((() => { let f = this.a.tryGetValue(a, e); e = f.p1; return f.ret; })())) {
            let f = FastItemsSource.f(a).c;
            e = new ColumnReference(TypeRegistrar.create("FastItemIntColumn", this, f, b, c));
            this.a.addItem(a, e);
        }
        e.b = e.b + 1;
        d = typeCast(IFastItemColumn$1_$type.specialize(Number_$type), e.a);
        return d;
    }
    registerColumn(a, b, c) {
        let d = null;
        if (a == null) {
            a = "";
        }
        let e = null;
        if (!((() => { let f = this.a.tryGetValue(a, e); e = f.p1; return f.ret; })())) {
            let f = FastItemsSource.f(a).c;
            e = new ColumnReference(new FastItemColumn(this, f, b, c));
            this.a.addItem(a, e);
        }
        e.b = e.b + 1;
        d = typeCast(IFastItemColumn$1_$type.specialize(Number_$type), e.a);
        return d;
    }
    deregisterColumn(a) {
        let b = a != null ? a.propertyName : null;
        let c = b;
        if (typeCast(IFastItemColumn$1_$type.specialize(Base.$), a) !== null) {
            c += "_object";
        }
        if (b != null) {
            let d = null;
            if (((() => { let e = this.a.tryGetValue(b, d); d = e.p1; return e.ret; })())) {
                d.b = d.b - 1;
                if (d.b == 0) {
                    this.a.removeItem(c);
                }
            }
        }
    }
    asArray() {
        return this.c.asArray();
    }
    handleCollectionChanged(a) {
        switch (a.action) {
            case 0:
                this.h(a.newStartingIndex, a.newItems);
                break;
            case 1:
                this.j(a.oldStartingIndex, a.oldItems);
                break;
            case 2:
                this.k(a.newStartingIndex, a.oldItems, a.newItems);
                break;
            case 4:
                this.l();
                break;
        }
    }
    static f(a) {
        let b = a.split('!');
        if (b.length == 2) {
            return new Tuple$2(String_$type, String_$type, b[0], b[1]);
        }
        else {
            return new Tuple$2(String_$type, String_$type, a, null);
        }
    }
    getItem(a) {
        return this.item(a);
    }
}
FastItemsSource.$t = markType(FastItemsSource, 'FastItemsSource', Base.$, [IEnumerable_$type, IFastItemsSource_$type]);
//# sourceMappingURL=FastItemsSource.js.map