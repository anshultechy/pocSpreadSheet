/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, IList$1_$type, ICollection$1_$type, IEnumerable$1_$type, IEnumerable_$type, IList_$type, ICollection_$type, INotifyPropertyChanged_$type, PropertyChangedEventArgs, IEnumerator$1_$type, Type, String_$type, EnumUtil, markType, getBoxIfEnum } from "../../igniteui-angular-core/ES2015/type";
import { INotifyCollectionChanged_$type } from "../../igniteui-angular-core/ES2015/INotifyCollectionChanged";
import { ISupportPropertyChangeNotifications_$type } from "./ISupportPropertyChangeNotifications";
import { List$1 } from "../../igniteui-angular-core/ES2015/List$1";
import { CoreUtilities } from "./CoreUtilities";
import { PropertyChangeListenerList } from "./PropertyChangeListenerList";
import { ListenerList } from "./ListenerList";
import { NotifyCollectionChangedEventArgs } from "../../igniteui-angular-core/ES2015/NotifyCollectionChangedEventArgs";
import { NotifyCollectionChangedAction_$type } from "../../igniteui-angular-core/ES2015/NotifyCollectionChangedAction";
import { InvalidOperationException } from "../../igniteui-angular-core/ES2015/InvalidOperationException";
/**
 * @hidden
 */
export class LazyReadOnlyNotifyCollection$1 extends Base {
    constructor($t) {
        super();
        this.$t = null;
        this._e = null;
        this._b = true;
        this._a = null;
        this._g = 0;
        this.propertyChanged = null;
        this.collectionChanged = null;
        this.$t = $t;
        this.$type = this.$type.specialize(this.$t);
        this._a = new PropertyChangeListenerList();
        this._e = new List$1(this.$t, 0);
    }
    item(a, b) {
        if (arguments.length === 2) {
            CoreUtilities.t();
            return b;
        }
        else {
            this._n();
            return this._e._inner[a];
        }
    }
    get _d() {
        return this._e;
    }
    get _c() {
        return this._b;
    }
    _i(a, b, c) {
        this._m(a, b, c);
    }
    _m(a, b, c) {
        if (null != this._a) {
            ListenerList.aj(Base.$, String_$type, this._a, a, b, c);
        }
    }
    _h() {
        this._g++;
        this._b = true;
        this._j();
    }
    _k(a) {
        let b = this.collectionChanged;
        if (null != b) {
            b(this, a);
        }
        this._i(this, EnumUtil.getName(NotifyCollectionChangedAction_$type, a.action), a);
    }
    _l(a) {
        let b = this.propertyChanged;
        if (null != b) {
            b(this, new PropertyChangedEventArgs(a));
        }
        this._i(this, a, null);
    }
    _j() {
        this._k(this.$type.getStaticFields(LazyReadOnlyNotifyCollection$1.$)._f);
        this._l("Count");
        this._l("Item[]");
    }
    _n() {
        if (this._b) {
            this._b = false;
            this._o(this._e);
        }
    }
    addListener(a, b) {
        this._a.b(a, b);
    }
    removeListener(a) {
        this._a.d(a);
    }
    getEnumeratorObject() {
        return new LazyReadOnlyNotifyCollection_Enumerator$1(this.$t, this);
    }
    getEnumerator() {
        return new LazyReadOnlyNotifyCollection_Enumerator$1(this.$t, this);
    }
    add(a) {
        CoreUtilities.t();
    }
    clear() {
        CoreUtilities.t();
    }
    contains(a) {
        this._n();
        return this._e.contains(a);
    }
    copyTo(a, b) {
        this._n();
        this._e.copyTo(a, b);
    }
    get_count() {
        this._n();
        return this._e.count;
    }
    get count() {
        return this.get_count();
    }
    get isReadOnly() {
        return true;
    }
    remove(a) {
        CoreUtilities.t();
        return false;
    }
    indexOf(a) {
        this._n();
        return this._e.indexOf(a);
    }
    insert(a, b) {
        CoreUtilities.t();
    }
    copyTo1(a, b) {
        this._n();
        this._e.copyTo(a, b);
    }
    get isSynchronized() {
        return false;
    }
    get syncRoot() {
        return this._e;
    }
    add1(a) {
        CoreUtilities.t();
        return -1;
    }
    contains1(a) {
        this._n();
        return this._e.contains(a);
    }
    indexOf1(a) {
        this._n();
        return this._e.indexOf(a);
    }
    insert1(a, b) {
        CoreUtilities.t();
    }
    get isFixedSize() {
        return false;
    }
    remove1(a) {
        CoreUtilities.t();
    }
    removeAt(a) {
        CoreUtilities.t();
    }
}
LazyReadOnlyNotifyCollection$1.$t = markType(LazyReadOnlyNotifyCollection$1, 'LazyReadOnlyNotifyCollection$1', Base.$, [IList$1_$type.specialize(0), ICollection$1_$type.specialize(0), IEnumerable$1_$type.specialize(0), IList_$type, ICollection_$type, IEnumerable_$type, INotifyCollectionChanged_$type, INotifyPropertyChanged_$type, ISupportPropertyChangeNotifications_$type], function () {
    this._f = new NotifyCollectionChangedEventArgs(0, 4);
});
/**
 * @hidden
 */
export class LazyReadOnlyNotifyCollection_Enumerator$1 extends Base {
    constructor($t, a) {
        super();
        this.$t = null;
        this._a = null;
        this._d = 0;
        this._b = null;
        this._c = 0;
        this.$t = $t;
        this.$type = this.$type.specialize(this.$t);
        this._a = a;
        this._a._n();
        this._d = a._g;
        this.reset();
    }
    _e() {
        if (this._d != this._a._g) {
            throw new InvalidOperationException(0);
        }
    }
    dispose() {
    }
    get currentObject() {
        return getBoxIfEnum(this.$t, this._b);
    }
    moveNext() {
        this._e();
        if (this._c < this._a.count) {
            this._b = this._a.item(this._c);
            this._c++;
            return true;
        }
        this._c = this._a.count;
        this._b = Type.getDefaultValue(this.$t);
        return false;
    }
    reset() {
        this._e();
        this._c = 0;
        this._b = Type.getDefaultValue(this.$t);
    }
    get current() {
        return this._b;
    }
}
LazyReadOnlyNotifyCollection_Enumerator$1.$t = markType(LazyReadOnlyNotifyCollection_Enumerator$1, 'LazyReadOnlyNotifyCollection_Enumerator$1', Base.$, [IEnumerator$1_$type.specialize(0)]);
//# sourceMappingURL=LazyReadOnlyNotifyCollection$1_combined.js.map