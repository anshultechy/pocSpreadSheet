/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, markType, TypeRegistrar } from "./type";
import { IFastItemColumnInternal_$type } from "./IFastItemColumnInternal";
import { IFastItemColumn$1_$type } from "./IFastItemColumn$1";
import { List$1 } from "./List$1";
import { FastReflectionHelper } from "./FastReflectionHelper";
import { NotImplementedException } from "./NotImplementedException";
import { FastItemColumn } from "./FastItemColumn";
/**
 * @hidden
 */
export class FastItemObjectColumn extends Base {
    constructor(a, b, c, d) {
        super();
        this.h = null;
        this.d = false;
        this.e = false;
        this.a = null;
        this.b = null;
        this._propertyName = null;
        this.j = null;
        this.i = null;
        this.g = null;
        this.h = c;
        this.d = d;
        this.propertyName = b;
        this.e = FastReflectionHelper.needsHelper(b);
        if (this.e) {
            this.a = new FastReflectionHelper(true, this.propertyName);
        }
        this.c = a;
    }
    get c() {
        return this.b;
    }
    set c(a) {
        this.b = a;
        this.reset();
    }
    get propertyName() {
        return this._propertyName;
    }
    set propertyName(a) {
        this._propertyName = a;
    }
    get minimum() {
        return this.j;
    }
    set minimum(a) {
        this.j = a;
    }
    get maximum() {
        return this.i;
    }
    set maximum(a) {
        this.i = a;
    }
    item(a, b) {
        if (arguments.length === 2) {
            return b;
        }
        else {
            return this.g._inner[a];
        }
    }
    getEnumerator() {
        return this.g.getEnumerator();
    }
    getEnumeratorObject() {
        return this.g.getEnumerator();
    }
    contains(a) {
        return this.g.contains1(a);
    }
    copyTo(a, b) {
        this.g.copyTo(a, b);
    }
    get count() {
        return this.g.count;
    }
    get isReadOnly() {
        return true;
    }
    indexOf(a) {
        return this.g.indexOf1(a);
    }
    add(a) {
        throw new NotImplementedException(0);
    }
    clear() {
        throw new NotImplementedException(0);
    }
    remove(a) {
        throw new NotImplementedException(0);
    }
    insert(a, b) {
        throw new NotImplementedException(0);
    }
    removeAt(a) {
        throw new NotImplementedException(0);
    }
    reset() {
        this.g = null;
        return this.c != null ? this.insertRange(0, this.c.count) : true;
    }
    insertRange(a, b) {
        let c = ((() => {
            let $ret = new List$1(Base.$, 0);
            $ret.h = b;
            return $ret;
        })());
        for (let d = a; d < a + b; ++d) {
            let e = this.k(this.c.item(d));
            c.add1(e);
        }
        if (this.g == null) {
            this.g = c;
        }
        else {
            this.g.t(a, (c));
        }
        return true;
    }
    replaceRange(a, b) {
        let c = false;
        for (let d = 0; d < b; ++d) {
            let e = this.g._inner[a + d];
            let f = this.k(this.c.item(a + d));
            if (e != f) {
                this.g._inner[a + d] = f;
                c = true;
            }
        }
        return c;
    }
    removeRange(a, b) {
        this.g.v(a, b);
        return true;
    }
    k(a) {
        if (a == null) {
            return null;
        }
        let sourceItem_ = a;
        let from_ = a;
        let propertyName_ = this._propertyName;
        if (this.e) {
            a = this.a.getPropertyValue(from_);
        }
        else {
            a = from_[propertyName_];
        }
        if (this.d) {
            from_ = a;
            if ((typeof (from_) == 'function')) {
                a = from_.apply(sourceItem_);
            }
        }
        if (this.h != null) {
            a = this.h(a);
        }
        return a;
    }
    get mayContainUnknowns() {
        return true;
    }
    f() {
        return FastItemColumn.g(this.g, (a, b) => {
            let c = parseFloat(a);
            let d = parseFloat(b);
            if (c < d) {
                return -1;
            }
            if (c > d) {
                return 1;
            }
            return 0;
        });
    }
    asArray() {
        return this.g.asArray();
    }
    getItem(a) {
        return this.item(a);
    }
    static m() {
        TypeRegistrar.register("FastItemObjectColumn", FastItemObjectColumn.$);
    }
}
FastItemObjectColumn.$t = markType(FastItemObjectColumn, 'FastItemObjectColumn', Base.$, [IFastItemColumnInternal_$type, IFastItemColumn$1_$type.specialize(Base.$)]);
//# sourceMappingURL=FastItemObjectColumn.js.map