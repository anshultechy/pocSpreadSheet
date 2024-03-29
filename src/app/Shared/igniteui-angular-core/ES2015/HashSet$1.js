/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, ICollection$1_$type, IEnumerable$1_$type, IEnumerable_$type, fromEnum, typeCastObjTo$t, markType, String_$type, getEnumeratorObject } from "./type";
import { EqualityComparer$1 } from "./EqualityComparer$1";
import { NotImplementedException } from "./NotImplementedException";
import { arrayRemoveItem } from "./array";
/**
 * @hidden
 */
export class HashSet$1 extends Base {
    constructor($t, a, ..._rest) {
        super();
        this.$t = null;
        this.k = null;
        this.n = 0;
        this._values = null;
        this.c = false;
        this._stringPlaceholder = null;
        this.b = false;
        this.$t = $t;
        this.$type = this.$type.specialize(this.$t);
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0:
                {
                    let c = [null];
                    {
                        let e = c[0];
                        this._values = ({});
                        this.k = e || EqualityComparer$1.defaultEqualityComparerValue(this.$t);
                        this.c = e == null && (($t === String_$type));
                        this.b = ($t === Base.$type || ($t.InstanceConstructor && !$t.InstanceConstructor.prototype.getHashCode));
                        this._stringPlaceholder = ({});
                    }
                }
                break;
            case 1:
                {
                    let c = _rest[0];
                    let d = [c, null];
                    {
                        let f = d[0];
                        let g = d[1];
                        let h = [g];
                        {
                            let j = h[0];
                            this._values = ({});
                            this.k = j || EqualityComparer$1.defaultEqualityComparerValue(this.$t);
                            this.c = j == null && (($t === String_$type));
                            this.b = ($t === Base.$type || ($t.InstanceConstructor && !$t.InstanceConstructor.prototype.getHashCode));
                            this._stringPlaceholder = ({});
                        }
                        for (let i of fromEnum(f)) {
                            this.add_1(i);
                        }
                    }
                }
                break;
            case 2:
                {
                    let c = _rest[0];
                    this._values = ({});
                    this.k = c || EqualityComparer$1.defaultEqualityComparerValue(this.$t);
                    this.c = c == null && (($t === String_$type));
                    this.b = ($t === Base.$type || ($t.InstanceConstructor && !$t.InstanceConstructor.prototype.getHashCode));
                    this._stringPlaceholder = ({});
                }
                break;
            case 3:
                {
                    let c = _rest[0];
                    let d = _rest[1];
                    let e = [d];
                    {
                        let g = e[0];
                        this._values = ({});
                        this.k = g || EqualityComparer$1.defaultEqualityComparerValue(this.$t);
                        this.c = g == null && (($t === String_$type));
                        this.b = ($t === Base.$type || ($t.InstanceConstructor && !$t.InstanceConstructor.prototype.getHashCode));
                        this._stringPlaceholder = ({});
                    }
                    for (let f of fromEnum(c)) {
                        this.add_1(f);
                    }
                }
                break;
        }
    }
    add(a) {
        this.add_1(a);
    }
    get isReadOnly() {
        return false;
    }
    getEnumeratorObject() {
        return this.getEnumerator();
    }
    get l() {
        return this.k;
    }
    get count() {
        return this.n;
    }
    add_1(item_) {
        if (this.c) {
            if ((this._values[item_])) {
                return false;
            }
            this._values[item_] = this._stringPlaceholder;
            this.n++;
            return true;
        }
        let a = this.k.getHashCodeC(item_);
        let current_ = this._values[a];
        if ((current_)) {
            if ((current_.$isHashSetBucket)) {
                let b = (current_);
                for (let d = 0; d < b.length; d++) {
                    let c = b[d];
                    if (this.k.equalsC(c, item_)) {
                        return false;
                    }
                }
                current_.push(item_);
            }
            else {
                if (this.k.equalsC(current_, item_)) {
                    return false;
                }
                let bucket_ = typeCastObjTo$t(this.$t, ([current_, item_]));
                bucket_.$isHashSetBucket = true;
                ;
                this._values[a] = bucket_;
            }
        }
        else {
            this._values[a] = item_;
        }
        this.n++;
        return true;
    }
    clear() {
        this.n = 0;
        this._values = ({});
    }
    contains(item_) {
        if (this.c) {
            return (!!this._values[item_]);
        }
        let a = this.k.getHashCodeC(item_);
        let current_ = this._values[a];
        if ((current_ !== undefined)) {
            if ((current_.$isHashSetBucket)) {
                let b = (current_);
                for (let d = 0; d < b.length; d++) {
                    let c = b[d];
                    if (this.k.equalsC(c, item_)) {
                        return true;
                    }
                }
            }
            else {
                if (this.k.equalsC(current_, item_)) {
                    return true;
                }
            }
        }
        return false;
    }
    copyTo1(a) {
        throw new NotImplementedException(0);
    }
    copyTo(a, b) {
        throw new NotImplementedException(0);
    }
    copyTo2(a, b, c) {
        throw new NotImplementedException(0);
    }
    static m($t) {
        throw new NotImplementedException(0);
    }
    r(a) {
        throw new NotImplementedException(0);
    }
    getEnumerator() {
        if (this.c) {
            let a = (Base.getArrayOfProperties(this._values));
            return getEnumeratorObject(a);
        }
        let result_ = new Array(0);
        let b = (Base.getArrayOfValues(this._values));
        for (let c = 0; c < b.length; c++) {
            let item_ = b[c];
            if ((item_.$isHashSetBucket)) {
                let d = (item_);
                for (let e = 0; e < d.length; e++) {
                    let subItem_ = d[e];
                    result_.push(subItem_);
                }
            }
            else {
                result_.push(item_);
            }
        }
        return getEnumeratorObject(result_);
    }
    s(a) {
        throw new NotImplementedException(0);
    }
    e(a) {
        throw new NotImplementedException(0);
    }
    f(a) {
        throw new NotImplementedException(0);
    }
    g(a) {
        throw new NotImplementedException(0);
    }
    h(a) {
        throw new NotImplementedException(0);
    }
    t(a) {
        throw new NotImplementedException(0);
    }
    i(a) {
        if (this.count > 0) {
            for (let b of fromEnum(a)) {
                if (this.contains(b)) {
                    return true;
                }
            }
        }
        return false;
    }
    remove(item_) {
        if (this.c) {
            if ((this._values[item_])) {
                return false;
            }
            delete this._values[item_];
            this.n--;
            return true;
        }
        let hashCode_ = this.k.getHashCodeC(item_);
        let current_ = this._values[hashCode_];
        if ((current_)) {
            if ((current_.$isHashSetBucket)) {
                let a = (current_);
                for (let b = 0; b < a.length; b++) {
                    let currentItem_ = a[b];
                    if (this.k.equalsC(currentItem_, item_)) {
                        arrayRemoveItem(current_, currentItem_);
                        if ((current_.length) == 1) {
                            this._values[hashCode_] = (current_[0]);
                        }
                        this.n--;
                        return true;
                    }
                }
            }
            else {
                if (this.k.equalsC(current_, item_)) {
                    delete this._values[hashCode_];
                    this.n--;
                    return true;
                }
            }
        }
        return false;
    }
    j(a) {
        throw new NotImplementedException(0);
    }
    u(a) {
        throw new NotImplementedException(0);
    }
    v() {
    }
    w(a) {
        for (let b of fromEnum(a)) {
            this.add_1(b);
        }
    }
}
HashSet$1.$t = markType(HashSet$1, 'HashSet$1', Base.$, [ICollection$1_$type.specialize(0), IEnumerable$1_$type.specialize(0), IEnumerable_$type]);
//# sourceMappingURL=HashSet$1.js.map