/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, typeGetValue, Number_$type, markType, TypeRegistrar } from "./type";
import { IFastItemColumnInternal_$type } from "./IFastItemColumnInternal";
import { IFastItemColumn$1_$type } from "./IFastItemColumn$1";
import { List$1 } from "./List$1";
import { FastReflectionHelper } from "./FastReflectionHelper";
import { NotImplementedException } from "./NotImplementedException";
import { FastItemColumn } from "./FastItemColumn";
/**
 * @hidden
 */
export class FastItemIntColumn extends Base {
    constructor(a, b, c, d) {
        super();
        this.h = null;
        this.d = false;
        this.e = false;
        this.a = null;
        this.b = null;
        this._propertyName = null;
        this.j = 0;
        this.i = 0;
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
        return this.g.contains(a);
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
        return this.g.indexOf(a);
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
        let c = new Array(b);
        let source_ = this.b.asArray();
        let item_;
        let d = this.minimum;
        let e = this.maximum;
        let f = 0;
        let g = this.h;
        let propertyName_ = this._propertyName;
        let sourceItem_;
        if (this.e) {
            for (let i_ = a; i_ < a + b; ++i_) {
                sourceItem_ = source_[i_];
                item_ = typeGetValue(this.a.getPropertyValue(sourceItem_));
                if (this.d) {
                    if ((typeof (item_) == 'function')) {
                        item_ = item_.apply(sourceItem_);
                    }
                }
                if (g != null) {
                    item_ = g(item_);
                }
                let h = item_ == null ? 0 : typeGetValue(item_);
                c[f] = h;
                f++;
            }
        }
        else {
            if (this.h != null || this.d) {
                for (let i_ = a; i_ < a + b; ++i_) {
                    sourceItem_ = source_[i_];
                    item_ = (source_[i_][propertyName_]);
                    if (this.d) {
                        if ((typeof (item_) == 'function')) {
                            item_ = item_.apply(sourceItem_);
                        }
                    }
                    if (g != null) {
                        item_ = g(item_);
                    }
                    let i = item_ == null ? 0 : typeGetValue(item_);
                    c[f] = i;
                    f++;
                }
            }
            else {
                for (let i_ = a; i_ < a + b; ++i_) {
                    item_ = (source_[i_][propertyName_]);
                    let j = item_ == null ? 0 : typeGetValue(item_);
                    c[f] = j;
                    f++;
                }
            }
        }
        if (this.g == null) {
            this.g = new List$1(Number_$type, 1, c);
        }
        else {
            this.g.t(a, c);
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
        if (a == null) {
            return 0;
        }
        return typeGetValue(a);
    }
    get mayContainUnknowns() {
        return true;
    }
    f() {
        return FastItemColumn.g(this.g, (a, b) => {
            let c = typeGetValue(a);
            let d = typeGetValue(b);
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
        TypeRegistrar.register("FastItemIntColumn", FastItemIntColumn.$);
    }
}
FastItemIntColumn.$t = markType(FastItemIntColumn, 'FastItemIntColumn', Base.$, [IFastItemColumnInternal_$type, IFastItemColumn$1_$type.specialize(Number_$type)]);
//# sourceMappingURL=FastItemIntColumn.js.map