/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, IDictionary_$type, Type, fromEnum, typeCastObjTo$t, getBoxIfEnum, toEnum, markType, String_$type, getEnumerator } from "./type";
import { IDictionary$2_$type } from "./IDictionary$2";
import { KeyValuePair$2 } from "./KeyValuePair$2";
import { EqualityComparer$1 } from "./EqualityComparer$1";
import { Dictionary_EnumerableCollection$3 } from "./Dictionary_EnumerableCollection$3";
import { ArgumentException } from "./ArgumentException";
import { NotImplementedException } from "./NotImplementedException";
import { stringToString$1 } from "./string";
import { arrayRemoveItem } from "./array";
/**
 * @hidden
 */
export class Dictionary$2 extends Base {
    constructor($tKey, $tValue, a, ..._rest) {
        super();
        this.$tKey = null;
        this.$tValue = null;
        this.j = null;
        this.k = 0;
        this.e = false;
        this.d = false;
        this.c = false;
        this.a = null;
        this.b = null;
        this.$tKey = $tKey;
        this.$tValue = $tValue;
        this.$type = this.$type.specialize(this.$tKey, this.$tValue);
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0:
                {
                    let c = [0, null];
                    {
                        let e = c[0];
                        let f = c[1];
                        this.a = ({});
                        this.b = ({});
                        this.j = f || EqualityComparer$1.defaultEqualityComparerValue(this.$tKey);
                        this.e = f == null && (($tKey === String_$type));
                        this.d = ($tKey === Base.$type || ($tKey.InstanceConstructor && !$tKey.InstanceConstructor.prototype.getHashCode));
                        this.c = f == null && (this.e || this.d || ($tKey.InstanceConstructor && $tKey.InstanceConstructor.prototype.getHashCode == Base.prototype.getHashCode));
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
                        this.a = ({});
                        this.b = ({});
                        this.j = g || EqualityComparer$1.defaultEqualityComparerValue(this.$tKey);
                        this.e = g == null && (($tKey === String_$type));
                        this.d = ($tKey === Base.$type || ($tKey.InstanceConstructor && !$tKey.InstanceConstructor.prototype.getHashCode));
                        this.c = g == null && (this.e || this.d || ($tKey.InstanceConstructor && $tKey.InstanceConstructor.prototype.getHashCode == Base.prototype.getHashCode));
                    }
                }
                break;
            case 2:
                {
                    let c = _rest[0];
                    let d = [0, c];
                    {
                        let f = d[0];
                        let g = d[1];
                        this.a = ({});
                        this.b = ({});
                        this.j = g || EqualityComparer$1.defaultEqualityComparerValue(this.$tKey);
                        this.e = g == null && (($tKey === String_$type));
                        this.d = ($tKey === Base.$type || ($tKey.InstanceConstructor && !$tKey.InstanceConstructor.prototype.getHashCode));
                        this.c = g == null && (this.e || this.d || ($tKey.InstanceConstructor && $tKey.InstanceConstructor.prototype.getHashCode == Base.prototype.getHashCode));
                    }
                }
                break;
            case 3:
                {
                    let c = _rest[0];
                    let d = [c.count];
                    {
                        let f = d[0];
                        let g = [f, null];
                        {
                            let i = g[0];
                            let j = g[1];
                            this.a = ({});
                            this.b = ({});
                            this.j = j || EqualityComparer$1.defaultEqualityComparerValue(this.$tKey);
                            this.e = j == null && (($tKey === String_$type));
                            this.d = ($tKey === Base.$type || ($tKey.InstanceConstructor && !$tKey.InstanceConstructor.prototype.getHashCode));
                            this.c = j == null && (this.e || this.d || ($tKey.InstanceConstructor && $tKey.InstanceConstructor.prototype.getHashCode == Base.prototype.getHashCode));
                        }
                    }
                    for (let e of fromEnum(c)) {
                        this.item(e.key, e.value);
                    }
                }
                break;
            case 4:
                {
                    let c = _rest[0];
                    let d = _rest[1];
                    this.a = ({});
                    this.b = ({});
                    this.j = d || EqualityComparer$1.defaultEqualityComparerValue(this.$tKey);
                    this.e = d == null && (($tKey === String_$type));
                    this.d = ($tKey === Base.$type || ($tKey.InstanceConstructor && !$tKey.InstanceConstructor.prototype.getHashCode));
                    this.c = d == null && (this.e || this.d || ($tKey.InstanceConstructor && $tKey.InstanceConstructor.prototype.getHashCode == Base.prototype.getHashCode));
                }
                break;
        }
    }
    get count() {
        return this.k;
    }
    item(key_, a) {
        if (arguments.length === 2) {
            this.o(key_, a, false);
            return a;
        }
        else {
            let result_ = this.f(key_);
            let a = (result_);
            return a ? result_ : Type.getDefaultValue(this.$tValue);
        }
    }
    get m() {
        return this.k;
    }
    containsKey(a) {
        if (this.c) {
            let b = this.n(a);
            return (this.a.hasOwnProperty(b));
        }
        else {
            let c = this.l(a);
            let d = this.b[c];
            if (d) {
                if ((d.$isHashSetBucket)) {
                    let g = (d);
                    for (let f = 0; f < g.length; f++) {
                        let e = g[f];
                        if (this.j.equalsC((e.key), a)) {
                            return true;
                        }
                    }
                }
                else {
                    return this.j.equalsC((d.key), a);
                }
            }
        }
        return false;
    }
    removeItem(a) {
        if (this.c) {
            let b = this.n(a);
            if ((!this.a.hasOwnProperty(b))) {
                return false;
            }
            delete this.a[b];
            delete this.b[b];
            this.k--;
            return true;
        }
        let c = this.l(a);
        let d = this.b[c];
        if (d) {
            if ((d.$isHashSetBucket)) {
                let g = (d);
                for (let f = 0; f < g.length; f++) {
                    let e = g[f];
                    if (this.j.equalsC((e.key), a)) {
                        arrayRemoveItem(d, e);
                        if ((d.length) == 1) {
                            this.b[c] = (d[0]);
                        }
                        this.k--;
                        return true;
                    }
                }
            }
            else {
                if (this.j.equalsC((d.key), a)) {
                    delete this.b[c];
                    this.k--;
                    return true;
                }
            }
        }
        return false;
    }
    clear() {
        this.k = 0;
        this.a = ({});
        this.b = ({});
    }
    n(a) {
        if (this.e) {
            return stringToString$1(this.$tKey, a);
        }
        else {
            return Base.getHashCodeStatic(a).toString();
        }
    }
    l(a) {
        return this.j.getHashCodeC(a);
    }
    addItem(a, b) {
        this.o(a, b, true);
    }
    o(a, b, c) {
        if (this.c) {
            let d = this.n(a);
            if ((!this.a.hasOwnProperty(d))) {
                this.k++;
            }
            else if (c) {
                throw new ArgumentException(1, "Duplicate key added to the dictionary");
            }
            this.a[d] = a;
            this.b[d] = b;
        }
        else {
            let e = this.l(a);
            let f = this.b[e];
            if (f) {
                if ((f.$isHashSetBucket)) {
                    let i = (f);
                    for (let h = 0; h < i.length; h++) {
                        let g = i[h];
                        if (this.j.equalsC((g.key), a)) {
                            if (c) {
                                throw new ArgumentException(1, "Duplicate key added to the dictionary");
                            }
                            g.value = b;
                            return;
                        }
                    }
                    f.push({ key: a, value: b });
                    this.k++;
                }
                else {
                    if (this.j.equalsC((f.key), a)) {
                        if (c) {
                            throw new ArgumentException(1, "Duplicate key added to the dictionary");
                        }
                        f.value = b;
                    }
                    else {
                        let j = typeCastObjTo$t(this.$tValue, ([f, { key: a, value: b }]));
                        j.$isHashSetBucket = true;
                        ;
                        this.b[e] = j;
                        this.k++;
                    }
                }
            }
            else {
                this.b[e] = { key: a, value: b };
                this.k++;
            }
        }
    }
    f(a) {
        if (this.c) {
            let b = this.n(a);
            if ((this.a.hasOwnProperty(b))) {
                let c = (this.b[b]);
                return c;
            }
        }
        else {
            let d = this.l(a);
            let e = this.b[d];
            if (e) {
                if ((e.$isHashSetBucket)) {
                    let h = (e);
                    for (let g = 0; g < h.length; g++) {
                        let f = h[g];
                        if (this.j.equalsC((f.key), a)) {
                            let i = (f.value);
                            return i;
                        }
                    }
                }
                else {
                    if (this.j.equalsC((e.key), a)) {
                        let j = (e.value);
                        return j;
                    }
                }
            }
        }
        return typeCastObjTo$t(this.$tValue, (undefined));
    }
    tryGetValue(a, b) {
        if (this.c) {
            let c = this.n(a);
            if ((this.a.hasOwnProperty(c))) {
                b = (this.b[c]);
                return {
                    ret: true,
                    p1: b
                };
            }
        }
        else {
            let d = this.l(a);
            let e = this.b[d];
            if (e) {
                if ((e.$isHashSetBucket)) {
                    let h = (e);
                    for (let g = 0; g < h.length; g++) {
                        let f = h[g];
                        if (this.j.equalsC((f.key), a)) {
                            b = (f.value);
                            return {
                                ret: true,
                                p1: b
                            };
                        }
                    }
                }
                else {
                    if (this.j.equalsC((e.key), a)) {
                        b = (e.value);
                        return {
                            ret: true,
                            p1: b
                        };
                    }
                }
            }
        }
        b = Type.getDefaultValue(this.$tValue);
        return {
            ret: false,
            p1: b
        };
    }
    get isReadOnly() {
        return false;
    }
    add(a) {
        this.addItem(a.key, a.value);
    }
    contains(a) {
        let b;
        return ((() => { let c = this.tryGetValue(a.key, b); b = c.p1; return c.ret; })()) && Base.equalsStatic(getBoxIfEnum(this.$tValue, b), getBoxIfEnum(this.$tValue, a.value));
    }
    copyTo(a, b) {
        throw new NotImplementedException(0);
    }
    remove(a) {
        this.removeItem(a.key);
        return true;
    }
    getEnumerator() {
        return getEnumerator(this.g());
    }
    *_g() {
        if (this.c) {
            let a = (Base.getArrayOfProperties(this.a));
            for (let b = 0; b < a.length; b++) {
                yield new KeyValuePair$2(this.$tKey, this.$tValue, 1, this.a[a[b]], this.b[a[b]]);
            }
        }
        else {
            let c = (Base.getArrayOfProperties(this.b));
            for (let d = 0; d < c.length; d++) {
                let e = this.b[c[d]];
                if ((e.$isHashSetBucket)) {
                    let f = (e);
                    for (let g = 0; g < f.length; g++) {
                        let subItem_ = f[g];
                        yield new KeyValuePair$2(this.$tKey, this.$tValue, 1, (subItem_.key), (subItem_.value));
                    }
                }
                else {
                    yield new KeyValuePair$2(this.$tKey, this.$tValue, 1, (e.key), (e.value));
                }
            }
        }
    }
    g() {
        return toEnum(() => this._g());
    }
    *_h() {
        if (this.c) {
            let a = (Base.getArrayOfProperties(this.a));
            for (let b = 0; b < a.length; b++) {
                yield this.a[a[b]];
            }
        }
        else {
            let c = (Base.getArrayOfProperties(this.b));
            for (let d = 0; d < c.length; d++) {
                let e = this.b[c[d]];
                if ((e.$isHashSetBucket)) {
                    let f = (e);
                    for (let g = 0; g < f.length; g++) {
                        let subItem_ = f[g];
                        yield (subItem_.key);
                    }
                }
                else {
                    yield (e.key);
                }
            }
        }
    }
    h() {
        return toEnum(() => this._h());
    }
    *_i() {
        if (this.c) {
            let a = (Base.getArrayOfProperties(this.a));
            for (let b = 0; b < a.length; b++) {
                yield this.b[a[b]];
            }
        }
        else {
            let c = (Base.getArrayOfProperties(this.b));
            for (let d = 0; d < c.length; d++) {
                let e = this.b[c[d]];
                if ((e.$isHashSetBucket)) {
                    let f = (e);
                    for (let g = 0; g < f.length; g++) {
                        let subItem_ = f[g];
                        yield (subItem_.value);
                    }
                }
                else {
                    yield (e.value);
                }
            }
        }
    }
    i() {
        return toEnum(() => this._i());
    }
    getEnumeratorObject() {
        return getEnumerator(this.g());
    }
    get keys() {
        return new Dictionary_EnumerableCollection$3(this.$tKey, this.$tValue, this.$tKey, this, this.h(), this.j || EqualityComparer$1.defaultEqualityComparerValue(this.$tKey));
    }
    get values() {
        return new Dictionary_EnumerableCollection$3(this.$tKey, this.$tValue, this.$tValue, this, this.i(), EqualityComparer$1.defaultEqualityComparerValue(this.$tValue));
    }
}
Dictionary$2.$t = markType(Dictionary$2, 'Dictionary$2', Base.$, [IDictionary$2_$type.specialize(0, 1), IDictionary_$type]);
//# sourceMappingURL=Dictionary$2.js.map