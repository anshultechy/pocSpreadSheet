/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, IList$1_$type, IList_$type, fromEnum, getBoxIfEnum, typeCast, typeCastObjTo$t, fromEn, Number_$type, typeGetValue, Date_$type, runOn, markType, getEnumeratorObject } from "./type";
import { IArray_$type } from "./IArray";
import { IArrayList_$type } from "./IArrayList";
import { arrayCopyTo } from "./array";
import { Comparer$1 } from "./Comparer$1";
import { ReadOnlyCollection$1 } from "./ReadOnlyCollection$1";
import { NotImplementedException } from "./NotImplementedException";
import { intDivide } from "./number";
import { stringCompareTo } from "./string";
/**
 * @hidden
 */
export class List$1 extends Base {
    constructor($t, a, ..._rest) {
        super();
        this.$t = null;
        this._inner = null;
        this.c = false;
        this.h = 0;
        this.m = {};
        this.$t = $t;
        this.$type = this.$type.specialize(this.$t);
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0:
                {
                    this._inner = ([]);
                    this.c = (this.$t.InstanceConstructor && this.$t.InstanceConstructor.prototype.equals === Base.prototype.equals);
                }
                break;
            case 1:
                {
                    let c = _rest[0];
                    {
                        this._inner = ([]);
                        this.c = (this.$t.InstanceConstructor && this.$t.InstanceConstructor.prototype.equals === Base.prototype.equals);
                    }
                    if (this.d(0, c, true)) {
                        return;
                    }
                    for (let d of fromEnum(c)) {
                        this.add(d);
                    }
                }
                break;
            case 2:
                {
                    let c = _rest[0];
                    {
                        this._inner = ([]);
                        this.c = (this.$t.InstanceConstructor && this.$t.InstanceConstructor.prototype.equals === Base.prototype.equals);
                    }
                }
                break;
        }
    }
    x(a, b) {
        this._inner[a] = b;
    }
    r(a, b) {
        this._inner.splice(a, 0, b);
    }
    n(a) {
        this._inner.push(a);
    }
    u(a) {
        if (a == 0) {
            this._inner.shift();
            return;
        }
        this._inner.splice(a, 1);
    }
    p() {
        this._inner = ([]);
    }
    item(a, b) {
        if (arguments.length === 2) {
            this.x(a, b);
            return b;
        }
        else {
            return this._inner[a];
        }
    }
    indexOf(a) {
        if (this.c) {
            return (this._inner.indexOf(a));
        }
        for (let b = 0; b < this._inner.length; b++) {
            if (Base.equalsStatic(getBoxIfEnum(this.$t, a), getBoxIfEnum(this.$t, this._inner[b]))) {
                return b;
            }
        }
        return -1;
    }
    indexOf2(a, b) {
        if (this.c) {
            return (this._inner.indexOf(a, b));
        }
        for (; b < this._inner.length; b++) {
            if (Base.equalsStatic(getBoxIfEnum(this.$t, a), getBoxIfEnum(this.$t, this._inner[b]))) {
                return b;
            }
        }
        return -1;
    }
    k(a) {
        if (this.c) {
            return (this._inner.lastIndexOf(a));
        }
        for (let b = this._inner.length - 1; b >= 0; b--) {
            if (Base.equalsStatic(getBoxIfEnum(this.$t, a), getBoxIfEnum(this.$t, this._inner[b]))) {
                return b;
            }
        }
        return -1;
    }
    insert(a, b) {
        this.r(a, b);
    }
    removeAt(a) {
        this.u(a);
    }
    get count() {
        return this._inner.length;
    }
    get isReadOnly() {
        return false;
    }
    add(a) {
        this.n(a);
    }
    clear() {
        this.p();
    }
    contains(a) {
        return this.indexOf(a) >= 0;
    }
    copyTo(a, b) {
        for (let c = 0; c < this._inner.length; c++) {
            a[b + c] = this._inner[c];
        }
    }
    remove(a) {
        let b = this.indexOf(a);
        if (b < 0) {
            return false;
        }
        this.u(b);
        return true;
    }
    getEnumerator() {
        return getEnumeratorObject(this._inner);
    }
    getEnumeratorObject() {
        return getEnumeratorObject(this._inner);
    }
    asArray() {
        return this._inner;
    }
    d(index_, collection_, a) {
        let b = typeCast(IArrayList_$type, collection_);
        if (b != null) {
            let a_ = b.asArrayList();
            Array.prototype.splice.apply(this._inner, Array.prototype.concat.apply([index_, 0], a_));
            return true;
        }
        let c = typeCast(IArray_$type, collection_);
        if (c != null) {
            let a_ = c.asArray();
            Array.prototype.splice.apply(this._inner, Array.prototype.concat.apply([index_, 0], a_));
            return true;
        }
        let asList_ = typeCast(IList$1_$type.specialize(this.$t), collection_);
        if (asList_ != null) {
            for (let i_ = 0; i_ < asList_.count; i_++) {
                let item_ = asList_.item(i_);
                this._inner.splice(index_ + i_, 0, item_);
            }
            return true;
        }
        let arr_ = (Array.isArray(collection_) ? collection_ : null);
        if (arr_ != null) {
            let inn_ = this._inner;
            if (this._inner.length == 0) {
                if (a) {
                    let parr_ = arr_;
                    let d = arr_.length;
                    for (let i_ = 0; i_ < d; i_++) {
                        inn_[index_++] = parr_[i_];
                    }
                }
                else {
                    let e = arr_.length;
                    for (let i_ = 0; i_ < e; i_++) {
                        inn_[index_++] = typeCastObjTo$t(this.$t, arr_[i_]);
                    }
                }
            }
            else {
                for (let i_ = 0; i_ < arr_.length; i_++) {
                    inn_.splice(index_++, 0, arr_[i_]);
                }
            }
            return true;
        }
        return false;
    }
    t(a, b) {
        if (this.d(a, b, false)) {
            return;
        }
        let j_ = a;
        for (let item_ of fromEn(b)) {
            this._inner.splice(j_, 0, item_);
            j_++;
        }
    }
    s(a, b) {
        if (this.d(a, b, true)) {
            return;
        }
        let j_ = a;
        for (let item_ of fromEnum(b)) {
            this._inner.splice(j_, 0, item_);
            j_++;
        }
    }
    v(index_, numToRemove_) {
        if (index_ == 0 && numToRemove_ == 1) {
            this._inner.shift();
            return;
        }
        this._inner.splice(index_, numToRemove_);
    }
    copyTo1(a, b) {
        arrayCopyTo(this._inner, a, b);
    }
    get isFixedSize() {
        return false;
    }
    add1(a) {
        this.n(typeCastObjTo$t(this.$t, a));
        return this._inner.length - 1;
    }
    contains1(a) {
        return this.indexOf1(a) >= 0;
    }
    indexOf1(a) {
        return this.indexOf(typeCastObjTo$t(this.$t, a));
    }
    insert1(a, b) {
        this.r(a, typeCastObjTo$t(this.$t, b));
    }
    remove1(a) {
        let b = this.indexOf1(a);
        if (b < 0) {
            return;
        }
        this.u(b);
    }
    y() {
        let a = null;
        if (this.$t == Number_$type) {
            a = (b, c) => {
                let d = b;
                let e = c;
                if (d < e) {
                    return -1;
                }
                if (d == e) {
                    return 0;
                }
                return 1;
            };
        }
        else if (this.$t == Number_$type) {
            a = (b, c) => {
                let d = b;
                let e = c;
                if (d < e) {
                    return -1;
                }
                if (d == e) {
                    return 0;
                }
                return 1;
            };
        }
        else if (this.$t == Number_$type) {
            a = (b, c) => {
                let d = typeGetValue(b);
                let e = typeGetValue(c);
                if (d < e) {
                    return -1;
                }
                if (d == e) {
                    return 0;
                }
                return 1;
            };
        }
        else if (this.$t == Date_$type) {
            a = (b, c) => {
                let d = b;
                let e = c;
                if (d.getTime() < e.getTime()) {
                    return -1;
                }
                if (d.getTime() == e.getTime()) {
                    return 0;
                }
                return 1;
            };
        }
        else {
            a = (b, c) => stringCompareTo(b, c);
        }
        this.ab(a);
    }
    ab(compare_) {
        this._inner.sort(compare_);
    }
    aa(compare_) {
        this._inner.sort(compare_);
    }
    o(a) {
        for (let item_ of fromEnum(a)) {
            this._inner.push(item_);
        }
    }
    toArray() {
        return this._inner;
    }
    q(a) {
        for (let b = 0; b < this._inner.length; b++) {
            a(this._inner[b]);
        }
    }
    get isSynchronized() {
        return true;
    }
    get syncRoot() {
        return this.m;
    }
    f(a) {
        return this.g(a, Comparer$1.defaultComparerValue(this.$t));
    }
    g(a, b) {
        let c = 0;
        let d = this.count - 1;
        while (c <= d) {
            let e = c + (intDivide((d - c), 2));
            let f = this._inner[e];
            let g = b.compare(f, a);
            if (g == 0) {
                return e;
            }
            if (g < 0) {
                c = e + 1;
            }
            else {
                d = e - 1;
            }
        }
        return ~c;
    }
    e() {
        return new ReadOnlyCollection$1(this.$t, 1, this);
    }
    w() {
        for (let a = 0; a < intDivide(this.count, 2); a++) {
            let b = this.count - a - 1;
            let c = this._inner[a];
            this._inner[a] = this._inner[b];
            this._inner[b] = c;
        }
    }
    z(a) {
        this.aa(runOn(a, a.compare));
    }
    i(a) {
        for (let b = 0; b < this._inner.length; b++) {
            if (a(this._inner[b])) {
                return b;
            }
        }
        return -1;
    }
    l(a) {
        throw new NotImplementedException(0);
    }
}
List$1.$t = markType(List$1, 'List$1', Base.$, [IList$1_$type.specialize(0), IArray_$type, IList_$type]);
//# sourceMappingURL=List$1.js.map