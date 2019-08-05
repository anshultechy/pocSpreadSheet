/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, IEnumerable$1_$type, ICollection_$type, IList$1_$type, INotifyPropertyChanged_$type, NotSupportedException, IEnumerator$1_$type, PropertyChangedEventArgs, Type, getBoxIfEnum, markType } from "../../igniteui-angular-core/ES2015/type";
import { INotifyCollectionChanged_$type } from "../../igniteui-angular-core/ES2015/INotifyCollectionChanged";
import { List$1 } from "../../igniteui-angular-core/ES2015/List$1";
import { CoreUtilities } from "./CoreUtilities";
import { NotifyCollectionChangedEventArgs } from "../../igniteui-angular-core/ES2015/NotifyCollectionChangedEventArgs";
import { InvalidOperationException } from "../../igniteui-angular-core/ES2015/InvalidOperationException";
import { UndoUtils } from "./UndoUtils";
/**
 * @hidden
 */
export class StackList$1 extends Base {
    constructor($t, a) {
        super();
        this.$t = null;
        this.g = 0;
        this.e = null;
        this.h = 0;
        this.collectionChanged = null;
        this.propertyChanged = null;
        this.$t = $t;
        this.$type = this.$type.specialize(this.$t);
        this.j = a;
        this.e = new List$1(this.$t, 0);
    }
    get count() {
        return this.e.count;
    }
    get j() {
        return this.g;
    }
    set j(a) {
        if (a != this.g) {
            CoreUtilities.x(a, "value");
            this.g = a > 0 ? a : 0x7FFFFFFF;
            if (null != this.e && this.e.count > this.g) {
                this.e.v(0, this.e.count - this.g);
                this.h++;
                this.m();
            }
        }
    }
    clear() {
        if (this.count == 0) {
            return;
        }
        this.e.clear();
        this.h++;
        this.m();
    }
    contains(a) {
        return this.e.indexOf(a) >= 0;
    }
    getEnumerator() {
        return new StackList_Enumerator$1(this.$t, this);
    }
    b(a) {
        return this.e._inner[this.e.count - ++a];
    }
    l(a, b, c) {
        let d = this.propertyChanged;
        if (null != d) {
            d(this, new PropertyChangedEventArgs("Count"));
            d(this, new PropertyChangedEventArgs("Item[]"));
        }
        let e = this.collectionChanged;
        if (null != e) {
            let f = new NotifyCollectionChangedEventArgs(1, c ? 0 : 1, getBoxIfEnum(this.$t, a), b);
            e(this, f);
        }
    }
    m() {
        let a = this.propertyChanged;
        if (null != a) {
            a(this, new PropertyChangedEventArgs("Count"));
            a(this, new PropertyChangedEventArgs("Item[]"));
        }
        let b = this.collectionChanged;
        if (null != b) {
            b(this, this.$type.getStaticFields(StackList$1.$).f);
        }
    }
    c() {
        if (this.count == 0) {
            throw new InvalidOperationException(0);
        }
        return this.e._inner[this.count - 1];
    }
    d() {
        let a = this.c();
        this.e.removeAt(this.count - 1);
        this.h++;
        this.l(a, 0, false);
        return a;
    }
    n(a) {
        this.h++;
        if (this.g > 0 && this.count == this.g) {
            let b = this.e._inner[0];
            this.e.removeAt(0);
            this.l(b, this.g - 1, false);
        }
        this.e.add(a);
        this.l(a, 0, true);
    }
    o(a) {
        CoreUtilities.z(a, "match");
        let b = this.h;
        for (let c = this.e.count - 1; c >= 0; c--) {
            let d = this.e._inner[c];
            if (a(d)) {
                this.e.removeAt(c);
                this.l(d, this.e.count - c, false);
                if (b != this.h) {
                    throw new InvalidOperationException(1, UndoUtils.a("LE_RemoveAllFailedVersion"));
                }
            }
        }
    }
    a() {
        return this.e.toArray();
    }
    indexOf(a) {
        let b = this.e.indexOf(a);
        if (b >= 0) {
            b = this.e.count - ++b;
        }
        return b;
    }
    insert(a, b) {
        throw new NotSupportedException(0);
    }
    removeAt(a) {
        throw new NotSupportedException(0);
    }
    item(a, b) {
        if (arguments.length === 2) {
            throw new NotSupportedException(0);
            return b;
        }
        else {
            return this.b(a);
        }
    }
    add(a) {
        this.n(a);
    }
    copyTo1(a, b) {
        let c = this.e;
        for (let d = c.count - 1; d >= 0; d--) {
            a[b++] = c._inner[d];
        }
    }
    get isReadOnly() {
        return false;
    }
    remove(a) {
        throw new NotSupportedException(0);
    }
    copyTo(a, b) {
        this.e.copyTo(a, b);
    }
    get isSynchronized() {
        return false;
    }
    get syncRoot() {
        return this.e.syncRoot;
    }
    getEnumeratorObject() {
        return this.getEnumerator();
    }
}
StackList$1.$t = markType(StackList$1, 'StackList$1', Base.$, [IEnumerable$1_$type.specialize(0), ICollection_$type, INotifyCollectionChanged_$type, IList$1_$type.specialize(0), INotifyPropertyChanged_$type], function () {
    this.f = new NotifyCollectionChangedEventArgs(0, 4);
});
/**
 * @hidden
 */
export class StackList_Enumerator$1 extends Base {
    constructor($t, a) {
        super();
        this.$t = null;
        this.a = null;
        this.d = 0;
        this.c = 0;
        this.b = null;
        this.$t = $t;
        this.$type = this.$type.specialize(this.$t);
        this.a = a;
        this.reset();
    }
    moveNext() {
        if (this.d != this.a.h) {
            throw new InvalidOperationException(1, UndoUtils.a("LE_EnumFailedVersion"));
        }
        if (this.c == -1) {
            return false;
        }
        if (this.c == -2) {
            this.c = this.a.count;
        }
        this.c--;
        if (this.c >= 0) {
            this.b = this.a.e._inner[this.c];
            return true;
        }
        this.b = Type.getDefaultValue(this.$t);
        return false;
    }
    get current() {
        if (this.c == -2) {
            throw new InvalidOperationException(1, UndoUtils.a("LE_EnumNotStarted"));
        }
        else if (this.c == -1) {
            throw new InvalidOperationException(1, UndoUtils.a("LE_EnumEnded"));
        }
        return this.b;
    }
    reset() {
        this.d = this.a.h;
        this.c = -2;
        this.b = Type.getDefaultValue(this.$t);
    }
    dispose() {
        this.c = -1;
    }
    get currentObject() {
        return getBoxIfEnum(this.$t, this.current);
    }
}
StackList_Enumerator$1.$t = markType(StackList_Enumerator$1, 'StackList_Enumerator$1', Base.$, [IEnumerator$1_$type.specialize(0)]);
//# sourceMappingURL=StackList$1_combined.js.map