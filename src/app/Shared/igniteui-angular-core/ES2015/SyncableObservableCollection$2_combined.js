/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, runOn, fromEnum, Number_$type, getBoxIfEnum, typeCastObjTo$t, delegateCombine, delegateRemove, markType } from "./type";
import { ObservableCollection$1 } from "./ObservableCollection$1";
import { List$1 } from "./List$1";
import { HashSet$1 } from "./HashSet$1";
import { InvalidOperationException } from "./InvalidOperationException";
import { SyncableObservableCollectionChangedListener_$type } from "./SyncableObservableCollectionChangedListener";
/**
 * @hidden
 */
export class SyncableObservableCollection$2 extends Base {
    constructor($t1, $t2, a, ..._rest) {
        super();
        this.$t1 = null;
        this.$t2 = null;
        this.a = null;
        this._compare = null;
        this._createTo = null;
        this._createFrom = null;
        this.h = false;
        this.i = false;
        this.g = false;
        this._inner = null;
        this.n = new List$1(SyncableObservableCollectionChangedListener_$type, 0);
        this.f = null;
        this.$t1 = $t1;
        this.$t2 = $t2;
        this.$type = this.$type.specialize(this.$t1, this.$t2);
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0:
                {
                    this._inner = new ObservableCollection$1(this.$t1, 0);
                    this.addListener(runOn(this, this.ad));
                    let c = this._inner;
                    c.collectionChanged = delegateCombine(c.collectionChanged, runOn(this, this.u));
                }
                break;
            case 1:
                {
                    let c = _rest[0];
                    this._inner = c;
                }
                break;
        }
    }
    get syncTarget() {
        return this.a;
    }
    set syncTarget(a) {
        let b = this.a;
        this.a = a;
        this.aa(b, this.a);
    }
    get compare() {
        return this._compare;
    }
    set compare(a) {
        this._compare = a;
    }
    get createTo() {
        return this._createTo;
    }
    set createTo(a) {
        this._createTo = a;
    }
    get createFrom() {
        return this._createFrom;
    }
    set createFrom(a) {
        this._createFrom = a;
    }
    aa(a, b) {
        if (a != null) {
            a.removeListener(runOn(this, this.ai));
        }
        this.af();
        if (b != null) {
            b.addListener(runOn(this, this.ai));
        }
    }
    af() {
        if (this.a == null) {
            return;
        }
        this.h = true;
        let a = new List$1(this.$t1, 0);
        let b = new HashSet$1(this.$t1, 0);
        for (let c = 0; c < this.all.count; c++) {
            if (!b.contains(this.all.item(c))) {
                a.add(this.all.item(c));
                b.add_1(this.all.item(c));
            }
        }
        for (let d = 0; d < this.a.all.count; d++) {
            if (!this.k(b, this.a.all.item(d))) {
                let e = this.createFrom(this.a.all.item(d));
                a.add(e);
                b.add_1(e);
            }
        }
        this.ag(a, this.all);
        this.ah(a, this.a.all);
        this.h = false;
    }
    k(a, b) {
        if (this.compare == null) {
            throw new InvalidOperationException(1, "SyncableObservableCollection has no Compare function provided.");
        }
        for (let c of fromEnum(a)) {
            if (this.compare(c, b)) {
                return true;
            }
        }
        return false;
    }
    ag(a, b) {
        let c = new List$1(Number_$type, 0);
        let d = 0;
        for (let e = 0; e < b.count; e++) {
            if (getBoxIfEnum(this.$t1, b.item(e)) == null) {
                c.add(e);
                continue;
            }
            if (d > a.count - 1) {
                c.add(e);
                continue;
            }
            if (Base.equalsStatic(b.item(e), getBoxIfEnum(this.$t1, a._inner[d]))) {
                d++;
                continue;
            }
            b.insert(e, a._inner[d]);
            d++;
        }
        for (let f = c.count - 1; f >= 0; f--) {
            b.removeAt(f);
        }
        for (; d < a.count; d++) {
            b.add(a._inner[d]);
        }
    }
    ah(a, b) {
        let c = new List$1(Number_$type, 0);
        let d = 0;
        for (let e = 0; e < b.count; e++) {
            if (getBoxIfEnum(this.$t2, b.item(e)) == null) {
                c.add(e);
                continue;
            }
            if (d > a.count - 1) {
                c.add(e);
                continue;
            }
            if (Base.equalsStatic(b.item(e), getBoxIfEnum(this.$t1, a._inner[d]))) {
                d++;
                continue;
            }
            b.insert(e, this.createTo(a._inner[d]));
            d++;
        }
        for (let f = c.count - 1; f >= 0; f--) {
            b.removeAt(f);
        }
        for (; d < a.count; d++) {
            b.add(this.createTo(a._inner[d]));
        }
    }
    ai(a, b) {
        if (this.a == null) {
            return;
        }
        if (this.h) {
            return;
        }
        if (this.g) {
            return;
        }
        let c = this.a.all;
        this.i = true;
        this.ae(this.$t1, this.$t2, b, this.all, c);
        this.i = false;
    }
    z(a) {
    }
    ad(a, b) {
        this.z(b);
        if (this.a == null) {
            return;
        }
        if (this.h) {
            return;
        }
        if (this.i) {
            return;
        }
        let c = this.a.all;
        this.g = true;
        this.ae(this.$t2, this.$t1, b, c, this.all);
        this.g = false;
    }
    ae($t, $f, a, b, c) {
        switch (a.action) {
            case 0:
                if (a.newItems != null) {
                    for (let d = 0; d < a.newItems.count; d++) {
                        let e = a.newItems.item(d);
                        if ($f != $t) {
                            if ($f == this.$t1) {
                                e = getBoxIfEnum(this.$t2, this.createTo(typeCastObjTo$t(this.$t1, a.newItems.item(d))));
                            }
                            if ($f == this.$t2) {
                                e = getBoxIfEnum(this.$t1, this.createFrom(typeCastObjTo$t(this.$t2, a.newItems.item(d))));
                            }
                        }
                        b.insert(d + a.newStartingIndex, typeCastObjTo$t($t, e));
                    }
                }
                break;
            case 1:
                if (a.oldItems != null) {
                    for (let f = 0; f < a.oldItems.count; f++) {
                        b.removeAt(a.oldStartingIndex);
                    }
                }
                break;
            case 2:
                if (a.oldItems != null) {
                    for (let g = 0; g < a.oldItems.count; g++) {
                        b.removeAt(a.oldStartingIndex);
                    }
                }
                if (a.newItems != null) {
                    for (let h = 0; h < a.newItems.count; h++) {
                        let i = a.newItems.item(h);
                        if ($f != $t) {
                            if ($f == this.$t1) {
                                i = getBoxIfEnum(this.$t2, this.createTo(typeCastObjTo$t(this.$t1, a.newItems.item(h))));
                            }
                            if ($f == this.$t2) {
                                i = getBoxIfEnum(this.$t1, this.createFrom(typeCastObjTo$t(this.$t2, a.newItems.item(h))));
                            }
                        }
                        b.insert(h + a.newStartingIndex, typeCastObjTo$t($t, a.newItems.item(h)));
                    }
                }
                break;
            case 4:
                b.clear();
                for (let j of fromEnum(c)) {
                    let k = getBoxIfEnum($f, j);
                    if ($f != $t) {
                        if ($f == this.$t1) {
                            k = getBoxIfEnum(this.$t2, this.createTo(typeCastObjTo$t(this.$t1, k)));
                        }
                        if ($f == this.$t2) {
                            k = getBoxIfEnum(this.$t1, this.createFrom(typeCastObjTo$t(this.$t2, k)));
                        }
                    }
                    b.add(typeCastObjTo$t($t, k));
                }
                break;
        }
    }
    u(a, b) {
        if (this.f != null) {
            this.f();
        }
        for (let c of fromEnum(this.n)) {
            c.onChanged(this);
        }
    }
    add(a) {
        this._inner.add(a);
        return true;
    }
    add1(a, b) {
        this._inner.insert(a, b);
    }
    clear() {
        this._inner.clear();
    }
    get(a) {
        return this._inner._inner[a];
    }
    indexOf(a) {
        return this._inner.indexOf(a);
    }
    remove1(a) {
        let b = this._inner.contains(a);
        this._inner.remove(a);
        return b;
    }
    remove(a) {
        let b = this._inner._inner[a];
        this._inner.removeAt(a);
        return b;
    }
    set(a, b) {
        this._inner.item(a, b);
        return b;
    }
    size() {
        return this._inner.count;
    }
    addChangedListener(a) {
        this.n.add(a);
    }
    removeChangedListener(a) {
        this.n.remove(a);
    }
    addListener(a) {
        let b = this._inner;
        b.collectionChanged = delegateCombine(b.collectionChanged, a);
    }
    removeListener(a) {
        let b = this._inner;
        b.collectionChanged = delegateRemove(b.collectionChanged, a);
    }
    get all() {
        return this._inner;
    }
}
SyncableObservableCollection$2.$t = markType(SyncableObservableCollection$2, 'SyncableObservableCollection$2');
/**
 * @hidden
 */
export class SyncableObservableCollection$1 extends SyncableObservableCollection$2 {
    constructor($t) {
        super($t, $t, 0);
        this.$t = null;
        this.$t = $t;
        this.$type = this.$type.specialize(this.$t);
        this.compare = (a, b) => Base.equalsStatic(a, getBoxIfEnum(this.$t, b));
        this.createFrom = (a) => a;
        this.createTo = (a) => a;
    }
}
SyncableObservableCollection$1.$t = markType(SyncableObservableCollection$1, 'SyncableObservableCollection$1', SyncableObservableCollection$2.$.specialize(0, 0));
//# sourceMappingURL=SyncableObservableCollection$2_combined.js.map