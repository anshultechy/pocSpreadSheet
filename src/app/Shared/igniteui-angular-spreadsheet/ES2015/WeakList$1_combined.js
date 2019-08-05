/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, IList$1_$type, IList_$type, IEnumerator$1_$type, fromEnum, typeCastObjTo$t, typeCast, markType } from "../../igniteui-angular-core/ES2015/type";
import { List$1 } from "../../igniteui-angular-core/ES2015/List$1";
import { WeakReference } from "../../igniteui-angular-core/ES2015/WeakReference";
import { CoreUtilities } from "./CoreUtilities";
/**
 * @hidden
 */
export class WeakList$1 extends Base {
    constructor($t) {
        super();
        this.$t = null;
        this._b = new List$1(WeakReference.$, 0);
        this.$t = $t;
        this.$type = this.$type.specialize(this.$t);
    }
    get count() {
        return this._b.count;
    }
    item(a, b) {
        if (arguments.length === 2) {
            this._b._inner[a] = this._g(b);
            return b;
        }
        else {
            return this._a(a);
        }
    }
    get syncRoot() {
        return this._b.syncRoot;
    }
    _add(a) {
        this._b.add(this._g(a));
        return this._b.count - 1;
    }
    _d(a) {
        for (let b of fromEnum(a)) {
            this._add(b);
        }
    }
    clear() {
        this._b.clear();
    }
    _e() {
        for (let a = 0, b = this._b.count; a < b; a++) {
            this._a(a);
        }
        CoreUtilities.v(WeakReference.$, this._b, null);
    }
    contains(a) {
        return this.indexOf(a) >= 0;
    }
    copyTo(a, b) {
        this.copyTo(a, b);
    }
    getEnumerator() {
        return new WeakList_Enumerator$1(this.$t, this);
    }
    indexOf(a) {
        for (let b = 0, c = this._b.count; b < c; b++) {
            if (a == this._a(b)) {
                return b;
            }
        }
        return -1;
    }
    insert(a, b) {
        this._b.insert(a, this._g(b));
    }
    remove(a) {
        let b = this.indexOf(a);
        if (b >= 0) {
            this.removeAt(b);
            return true;
        }
        return false;
    }
    removeAt(a) {
        this._b.removeAt(a);
    }
    _f(a, b) {
        this._b.v(a, b);
    }
    _g(a) {
        return new WeakReference(a);
    }
    _a(a) {
        let b = this._b._inner[a];
        let c = null;
        if (null != b) {
            c = typeCastObjTo$t(this.$t, CoreUtilities.p(b));
            if (null == c) {
                this._b._inner[a] = null;
            }
        }
        return c;
    }
    getEnumeratorObject() {
        return new WeakList_Enumerator$1(this.$t, this);
    }
    add(a) {
        this._add(a);
    }
    get isReadOnly() {
        return false;
    }
    add1(a) {
        return this._add(typeCastObjTo$t(this.$t, a));
    }
    contains1(a) {
        return typeCast(this.$t, a) !== null && this.contains(typeCastObjTo$t(this.$t, a));
    }
    copyTo1(a, b) {
        for (let c = 0, d = this._b.count; c < d; c++) {
            a[b++] = this._a(c);
        }
    }
    indexOf1(a) {
        return typeCast(this.$t, a) !== null ? this.indexOf(typeCastObjTo$t(this.$t, a)) : -1;
    }
    get isFixedSize() {
        return false;
    }
    get isReadOnly1() {
        return false;
    }
    remove1(a) {
        if (typeCast(this.$t, a) !== null) {
            this.remove(typeCastObjTo$t(this.$t, a));
        }
    }
    get isSynchronized() {
        return this._b.isSynchronized;
    }
}
WeakList$1.$t = markType(WeakList$1, 'WeakList$1', Base.$, [IList$1_$type.specialize(0), IList_$type]);
/**
 * @hidden
 */
export class WeakList_Enumerator$1 extends Base {
    constructor($t, a) {
        super();
        this.$t = null;
        this._a = null;
        this._b = null;
        this._c = 0;
        this.$t = $t;
        this.$type = this.$type.specialize(this.$t);
        this._a = a;
        this.reset();
    }
    get current() {
        return this._b;
    }
    moveNext() {
        this._b = null;
        while (++this._c < this._a.count) {
            this._b = this._a.item(this._c);
            if (null != this._b) {
                break;
            }
        }
        return null != this._b;
    }
    reset() {
        this._c = -1;
        this._b = null;
    }
    get currentObject() {
        return this.current;
    }
    dispose() {
    }
}
WeakList_Enumerator$1.$t = markType(WeakList_Enumerator$1, 'WeakList_Enumerator$1', Base.$, [IEnumerator$1_$type.specialize(0)]);
//# sourceMappingURL=WeakList$1_combined.js.map