/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, IList$1_$type, INotifyPropertyChanged_$type, PropertyChangedEventArgs, typeCast, runOn, delegateCombine, delegateRemove, markType, getEnumerator } from "../../igniteui-angular-core/ES2015/type";
import { INotifyCollectionChanged_$type } from "../../igniteui-angular-core/ES2015/INotifyCollectionChanged";
import { ISupportPropertyChangeNotifications_$type } from "./ISupportPropertyChangeNotifications";
import { CoreUtilities } from "./CoreUtilities";
import { PropertyChangeListenerList } from "./PropertyChangeListenerList";
import { PropertyChangeListener$1 } from "./PropertyChangeListener$1";
import { NotifyCollectionChangedEventArgs } from "../../igniteui-angular-core/ES2015/NotifyCollectionChangedEventArgs";
/**
 * @hidden
 */
export class ReadOnlyNotifyCollection$1 extends Base {
    constructor($t, a) {
        super();
        this.$t = null;
        this.c = null;
        this.a = null;
        this.collectionChanged = null;
        this.propertyChanged = null;
        this.$t = $t;
        this.$type = this.$type.specialize(this.$t);
        this.m(a);
    }
    item(a, b) {
        if (arguments.length === 2) {
            CoreUtilities.t();
            return b;
        }
        else {
            return this.c.item(a);
        }
    }
    contains(a) {
        return this.c.contains(a);
    }
    copyTo(a, b) {
        CoreUtilities.s(this.$t, this.c, a, b);
    }
    getEnumerator() {
        return getEnumerator(this.c);
    }
    indexOf(a) {
        return this.c.indexOf(a);
    }
    h(a, b) {
        this.j(b, true);
    }
    i(a, b) {
        this.l(b, true);
    }
    j(a, b) {
        let c = this.collectionChanged;
        if (c != null) {
            c(this, a);
        }
        if (b && null != this.a) {
            this.a.g(this, a);
        }
    }
    k() {
        this.l(new PropertyChangedEventArgs("Count"), true);
        this.l(new PropertyChangedEventArgs("Item[]"), true);
        this.j(new NotifyCollectionChangedEventArgs(0, 4), true);
    }
    l(a, b) {
        let c = this.propertyChanged;
        if (c != null) {
            c(this, a);
        }
        if (b && null != this.a) {
            this.a.onPropertyValueChanged(this, a.propertyName, a);
        }
    }
    m(a) {
        CoreUtilities.y(a);
        if (this.c != a) {
            this.f(this.c, false);
            this.c = a;
            this.f(this.c, true);
            this.k();
        }
    }
    f(a, b) {
        if (null != a) {
            let c = typeCast(ISupportPropertyChangeNotifications_$type, a);
            if (null != c) {
                if (b) {
                    c.addListener(this.b, false);
                }
                else {
                    c.removeListener(this.b);
                }
            }
            else {
                let d = typeCast(INotifyCollectionChanged_$type, this.c);
                if (null != d) {
                    if (b) {
                        d.collectionChanged = delegateCombine(d.collectionChanged, runOn(this, this.h));
                    }
                    else {
                        d.collectionChanged = delegateRemove(d.collectionChanged, runOn(this, this.h));
                    }
                }
                else {
                }
                let e = typeCast(INotifyPropertyChanged_$type, this.c);
                if (null != e) {
                    if (b) {
                        e.propertyChanged = delegateCombine(e.propertyChanged, runOn(this, this.i));
                    }
                    else {
                        e.propertyChanged = delegateRemove(e.propertyChanged, runOn(this, this.i));
                    }
                }
            }
        }
    }
    e() {
        if (this.a != null) {
            this.a.c();
        }
    }
    get count() {
        return this.c.count;
    }
    get isReadOnly() {
        return true;
    }
    get d() {
        return this.c;
    }
    get b() {
        if (null == this.a) {
            this.a = new PropertyChangeListenerList();
            this.a.b(new PropertyChangeListener$1(ReadOnlyNotifyCollection$1.$.specialize(this.$t), this, runOn(this, this.g), true), false);
        }
        return this.a;
    }
    g(a, b, c, d) {
        if (b == this.c) {
            let e = typeCast(NotifyCollectionChangedEventArgs.$, d);
            if (null != e) {
                this.j(e, true);
            }
            else {
                let f = typeCast(PropertyChangedEventArgs.$, d);
                if (null != f) {
                    this.l(f, true);
                }
            }
        }
    }
    insert(a, b) {
        CoreUtilities.t();
    }
    removeAt(a) {
        CoreUtilities.t();
    }
    add(a) {
        CoreUtilities.t();
    }
    clear() {
        CoreUtilities.t();
    }
    remove(a) {
        CoreUtilities.t();
        return false;
    }
    getEnumeratorObject() {
        return this.getEnumerator();
    }
    addListener(a, b) {
        this.b.b(a, b);
    }
    removeListener(a) {
        this.b.d(a);
    }
}
ReadOnlyNotifyCollection$1.$t = markType(ReadOnlyNotifyCollection$1, 'ReadOnlyNotifyCollection$1', Base.$, [IList$1_$type.specialize(0), INotifyCollectionChanged_$type, ISupportPropertyChangeNotifications_$type, INotifyPropertyChanged_$type]);
//# sourceMappingURL=ReadOnlyNotifyCollection$1.js.map