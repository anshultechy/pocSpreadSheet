/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, fromEnum, Number_$type, typeGetValue, markType } from "./type";
import { IFastItemColumnInternal_$type } from "./IFastItemColumnInternal";
import { IFastItemColumn$1_$type } from "./IFastItemColumn$1";
import { List$1 } from "./List$1";
import { FastReflectionHelper } from "./FastReflectionHelper";
import { NotImplementedException } from "./NotImplementedException";
import { isNaN_ } from "./number";
/**
 * @hidden
 */
export class FastItemColumn extends Base {
    constructor(a, b, c, d) {
        super();
        this.l = null;
        this.d = false;
        this.e = false;
        this.a = null;
        this.b = null;
        this._propertyName = null;
        this.j = 0;
        this.i = 0;
        this.h = null;
        this.m = 0;
        this.l = c;
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
        if (isNaN_(this.j) && this.h != null) {
            this.j = Number.POSITIVE_INFINITY;
            for (let a of fromEnum(this.h)) {
                if (!isNaN_(a)) {
                    this.j = Math.min(this.j, a);
                }
            }
        }
        return this.j;
    }
    set minimum(a) {
        this.j = a;
    }
    get maximum() {
        if (isNaN_(this.i) && this.h != null) {
            this.i = Number.NEGATIVE_INFINITY;
            for (let a of fromEnum(this.h)) {
                if (!isNaN_(a)) {
                    this.i = Math.max(this.i, a);
                }
            }
        }
        return this.i;
    }
    set maximum(a) {
        this.i = a;
    }
    item(a, b) {
        if (arguments.length === 2) {
            this.h._inner[a] = b;
            return b;
        }
        else {
            return this.h._inner[a];
        }
    }
    getEnumerator() {
        return this.h.getEnumerator();
    }
    getEnumeratorObject() {
        return this.h.getEnumerator();
    }
    contains(a) {
        return this.h.contains(a);
    }
    copyTo(a, b) {
        this.h.copyTo(a, b);
    }
    get count() {
        return this.h.count;
    }
    get isReadOnly() {
        return true;
    }
    indexOf(a) {
        return this.h.indexOf(a);
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
        this.h = null;
        this.minimum = NaN;
        this.maximum = NaN;
        this.m = 0;
        return this.c != null ? this.insertRange(0, this.c.count) : true;
    }
    insertRange(a, b) {
        let c = new Array(b);
        let source_ = this.b.asArray();
        let item_;
        let d = this.minimum;
        let e = this.maximum;
        let f = isNaN_(this.minimum);
        let g = isNaN_(this.maximum);
        let h = 0;
        let i;
        let j = this.l;
        let sourceItem_ = null;
        let propertyName_ = this._propertyName;
        if (this.e) {
            for (let i_ = a; i_ < a + b; ++i_) {
                sourceItem_ = source_[i_];
                if (sourceItem_ == null) {
                    item_ = NaN;
                }
                else {
                    item_ = this.a.getPropertyValue(sourceItem_);
                }
                if (this.d) {
                    if ((typeof (item_) == 'function')) {
                        item_ = item_.apply(sourceItem_);
                    }
                }
                if (j != null) {
                    item_ = j(item_);
                }
                i = item_ == null ? NaN : item_;
                let k = (i != i);
                if (k) {
                    this.m++;
                }
                if (f || i < d) {
                    d = i;
                    f = k;
                }
                if (g || i > e) {
                    e = i;
                    g = k;
                }
                c[h] = i;
                h++;
            }
        }
        else {
            if (this.l != null || this.d) {
                for (let i_ = a; i_ < a + b; ++i_) {
                    sourceItem_ = source_[i_];
                    if (sourceItem_ == null) {
                        item_ = NaN;
                    }
                    else {
                        item_ = (sourceItem_[propertyName_]);
                    }
                    if (this.d) {
                        if ((typeof (item_) == 'function')) {
                            item_ = item_.apply(sourceItem_);
                        }
                    }
                    if (j != null) {
                        item_ = j(item_);
                    }
                    i = item_ == null ? NaN : item_;
                    let l = (i != i);
                    if (l) {
                        this.m++;
                    }
                    if (f || i < d) {
                        d = i;
                        f = l;
                    }
                    if (g || i > e) {
                        e = i;
                        g = l;
                    }
                    c[h] = i;
                    h++;
                }
            }
            else {
                for (let i_ = a; i_ < a + b; ++i_) {
                    sourceItem_ = source_[i_];
                    if (sourceItem_ == null) {
                        item_ = NaN;
                    }
                    else {
                        item_ = (sourceItem_[propertyName_]);
                    }
                    i = item_ == null ? NaN : item_;
                    let m = (i != i);
                    if (m) {
                        this.m++;
                    }
                    if (f || i < d) {
                        d = i;
                        f = m;
                    }
                    if (g || i > e) {
                        e = i;
                        g = m;
                    }
                    c[h] = i;
                    h++;
                }
            }
        }
        this.minimum = d;
        this.maximum = e;
        if (this.h == null) {
            this.h = new List$1(Number_$type, 1, c);
        }
        else {
            this.h.t(a, c);
        }
        return true;
    }
    removeRange(a, b) {
        for (let c = a; c < a + b && !isNaN_(this.minimum) && !isNaN_(this.maximum); ++c) {
            if (this.item(c) == this.minimum) {
                this.minimum = NaN;
            }
            if (this.item(c) == this.maximum) {
                this.maximum = NaN;
            }
            if (isNaN_(this.item(c))) {
                this.m--;
            }
        }
        this.h.v(a, b);
        return true;
    }
    r(a, b) {
        if (isNaN_(a)) {
            if (!isNaN_(b)) {
                if (!isNaN_(this.minimum)) {
                    this.minimum = Math.min(b, this.minimum);
                }
                if (!isNaN_(this.maximum)) {
                    this.maximum = Math.max(b, this.maximum);
                }
            }
            return;
        }
        if (isNaN_(b)) {
            this.minimum = !isNaN_(this.minimum) && a == this.minimum ? NaN : this.minimum;
            this.maximum = !isNaN_(this.maximum) && a == this.maximum ? NaN : this.maximum;
            return;
        }
        if (!isNaN_(this.minimum)) {
            if (a == this.minimum && b > this.minimum) {
                this.minimum = NaN;
            }
            else {
                this.minimum = Math.min(b, this.minimum);
            }
        }
        if (!isNaN_(this.maximum)) {
            if (a == this.maximum && b < this.maximum) {
                this.maximum = NaN;
            }
            else {
                this.maximum = Math.max(b, this.maximum);
            }
        }
    }
    replaceRange(a, b) {
        let c = false;
        for (let d = 0; d < b; ++d) {
            let e = this.h._inner[a + d];
            let f = this.k(this.c.item(a + d));
            if (isNaN_(e)) {
                this.m--;
            }
            if (isNaN_(f)) {
                this.m++;
            }
            if (e != f) {
                this.h._inner[a + d] = f;
                c = true;
                this.r(e, f);
            }
        }
        return c;
    }
    k(a) {
        if (a == null) {
            return NaN;
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
        if (this.l != null) {
            a = this.l(a);
        }
        if (a == null) {
            return NaN;
        }
        return a;
    }
    get mayContainUnknowns() {
        return this.m > 0;
    }
    static p(a, b) {
        FastItemColumn.q(a, 0, a.count - 1, b);
    }
    static q(a, b, c, d) {
        if (b < c) {
            let e = FastItemColumn.n(a, b, c, d);
            FastItemColumn.q(a, b, e - 1, d);
            FastItemColumn.q(a, e + 1, c, d);
        }
    }
    static n(a, b, c, d) {
        let e = a.item(c);
        let f = b;
        for (let g = b; g < c; g++) {
            if (d(a.item(g), e) <= 0) {
                let h = a.item(f);
                a.item(f, a.item(g));
                a.item(g, h);
                f++;
            }
        }
        let i = a.item(f);
        a.item(f, a.item(c));
        a.item(c, i);
        return f;
    }
    static g(a, b) {
        let c = new List$1(Number_$type, 2, a.count);
        for (let d = 0; d < a.count; d++) {
            c.add(d);
        }
        if (a.count < 22) {
            FastItemColumn.p(c, (e, f) => {
                let g = a.item(typeGetValue(e));
                let h = a.item(typeGetValue(f));
                return b(g, h);
            });
        }
        else {
            c.aa((e, f) => {
                let g = a.item(e);
                let h = a.item(f);
                return b(g, h);
            });
        }
        return c;
    }
    f() {
        return FastItemColumn.g(this.h, (a, b) => {
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
        return this.h.asArray();
    }
    getItem(a) {
        return this.item(a);
    }
}
FastItemColumn.$t = markType(FastItemColumn, 'FastItemColumn', Base.$, [IFastItemColumnInternal_$type, IFastItemColumn$1_$type.specialize(Number_$type)]);
//# sourceMappingURL=FastItemColumn.js.map