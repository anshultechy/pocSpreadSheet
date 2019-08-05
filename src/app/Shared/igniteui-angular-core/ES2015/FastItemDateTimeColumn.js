/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, fromEnum, Date_$type, markType, TypeRegistrar } from "./type";
import { IFastItemColumnInternal_$type } from "./IFastItemColumnInternal";
import { IFastItemColumn$1_$type } from "./IFastItemColumn$1";
import { List$1 } from "./List$1";
import { FastReflectionHelper } from "./FastReflectionHelper";
import { NotImplementedException } from "./NotImplementedException";
import { FastItemColumn } from "./FastItemColumn";
import { dateMinValue } from "./date";
/**
 * @hidden
 */
export class FastItemDateTimeColumn extends Base {
    constructor(a, b, c, d) {
        super();
        this.m = null;
        this.d = false;
        this.e = false;
        this.a = null;
        this.b = null;
        this._propertyName = null;
        this.g = false;
        this.f = false;
        this.k = new Date();
        this.j = new Date();
        this.i = null;
        this.m = c;
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
        if (!this.g && this.i != null) {
            for (let a of fromEnum(this.i)) {
                if (a < this.k) {
                    this.k = a;
                }
            }
            if (this.i.count > 0) {
                this.g = true;
            }
        }
        return this.k;
    }
    set minimum(a) {
        this.k = a;
    }
    get maximum() {
        if (!this.f && this.i != null) {
            for (let a of fromEnum(this.i)) {
                if (a > this.j) {
                    this.j = a;
                }
            }
            if (this.i.count > 0) {
                this.f = true;
            }
        }
        return this.j;
    }
    set maximum(a) {
        this.j = a;
    }
    item(a, b) {
        if (arguments.length === 2) {
            return b;
        }
        else {
            return this.i._inner[a];
        }
    }
    getEnumerator() {
        return this.i.getEnumerator();
    }
    getEnumeratorObject() {
        return this.i.getEnumerator();
    }
    contains(a) {
        return this.i.contains(a);
    }
    copyTo(a, b) {
        this.i.copyTo(a, b);
    }
    get count() {
        return this.i.count;
    }
    get isReadOnly() {
        return true;
    }
    indexOf(a) {
        return this.i.indexOf(a);
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
        this.i = null;
        this.g = false;
        this.f = false;
        return this.c != null ? this.insertRange(0, this.c.count) : true;
    }
    insertRange(a, b) {
        let c = new Array(b);
        let source_ = this.b.asArray();
        let item_;
        let d = this.minimum;
        let e = this.maximum;
        let f;
        let g = 0;
        let h = this.m;
        let propertyName_ = this._propertyName;
        let sourceItem_ = null;
        if (this.e) {
            for (let i_ = a; i_ < a + b; ++i_) {
                sourceItem_ = source_[i_];
                item_ = this.a.getPropertyValue(sourceItem_);
                if (this.d) {
                    if ((typeof (item_) == 'function')) {
                        item_ = item_.apply(sourceItem_);
                    }
                }
                if (h != null) {
                    item_ = h(item_);
                }
                f = item_ == null ? (new Date()) : item_;
                if (!this.g) {
                    d = f;
                    this.g = true;
                }
                else if (f < d) {
                    d = f;
                }
                if (!this.f) {
                    e = f;
                    this.f = true;
                }
                else if (f > e) {
                    e = f;
                }
                c[g] = f;
                g++;
            }
        }
        else {
            if (this.m != null || this.d) {
                for (let i_ = a; i_ < a + b; ++i_) {
                    sourceItem_ = source_[i_];
                    item_ = (source_[i_][propertyName_]);
                    if (this.d) {
                        if ((typeof (item_) == 'function')) {
                            item_ = item_.apply(sourceItem_);
                        }
                    }
                    if (h != null) {
                        item_ = h(item_);
                    }
                    f = item_ == null ? (new Date()) : item_;
                    if (!this.g) {
                        d = f;
                        this.g = true;
                    }
                    else if (f < d) {
                        d = f;
                    }
                    if (!this.f) {
                        e = f;
                        this.f = true;
                    }
                    else if (f > e) {
                        e = f;
                    }
                    c[g] = f;
                    g++;
                }
            }
            else {
                for (let i_ = a; i_ < a + b; ++i_) {
                    item_ = (source_[i_][propertyName_]);
                    f = item_ == null ? (new Date()) : item_;
                    if (!this.g) {
                        d = f;
                        this.g = true;
                    }
                    else if (f < d) {
                        d = f;
                    }
                    if (!this.f) {
                        e = f;
                        this.f = true;
                    }
                    else if (f > e) {
                        e = f;
                    }
                    c[g] = f;
                    g++;
                }
            }
        }
        this.minimum = d;
        this.maximum = e;
        if (this.i == null) {
            this.i = new List$1(Date_$type, 1, c);
        }
        else {
            this.i.t(a, c);
        }
        return true;
    }
    removeRange(a, b) {
        for (let c = a; c < a + b; ++c) {
            if (+(this.item(c)) == +(this.minimum)) {
                this.g = false;
            }
            if (+(this.item(c)) == +(this.maximum)) {
                this.f = false;
            }
        }
        this.i.v(a, b);
        return true;
    }
    p(a, b) {
        if (+a != +(dateMinValue())) {
            if (+b != +(dateMinValue())) {
                this.minimum = b < this.minimum ? b : this.minimum;
                this.maximum = b > this.maximum ? b : this.maximum;
            }
            return;
        }
        this.minimum = b < this.minimum ? b : this.minimum;
        this.maximum = b > this.maximum ? b : this.maximum;
    }
    replaceRange(a, b) {
        let c = false;
        for (let d = 0; d < b; ++d) {
            let e = this.i._inner[a + d];
            let f = this.l(this.c.item(a + d));
            if (+e != +f) {
                this.i._inner[a + d] = f;
                c = true;
                this.p(e, f);
            }
        }
        return c;
    }
    l(a) {
        if (a == null) {
            return dateMinValue();
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
        if (this.m != null) {
            a = this.m(a);
        }
        if (a == null) {
            return dateMinValue();
        }
        return a;
    }
    get mayContainUnknowns() {
        return true;
    }
    h() {
        return FastItemColumn.g(this.i, (a, b) => {
            let c = a;
            let d = b;
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
        return this.i.asArray();
    }
    getItem(a) {
        return this.item(a);
    }
    static o() {
        TypeRegistrar.register("FastItemDateTimeColumn", FastItemDateTimeColumn.$);
    }
}
FastItemDateTimeColumn.$t = markType(FastItemDateTimeColumn, 'FastItemDateTimeColumn', Base.$, [IFastItemColumnInternal_$type, IFastItemColumn$1_$type.specialize(Date_$type)]);
//# sourceMappingURL=FastItemDateTimeColumn.js.map