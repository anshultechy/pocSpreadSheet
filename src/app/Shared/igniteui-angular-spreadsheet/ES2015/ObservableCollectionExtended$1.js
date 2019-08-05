/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { List$1 } from "../../igniteui-angular-core/ES2015/List$1";
import { ISupportPropertyChangeNotifications_$type } from "./ISupportPropertyChangeNotifications";
import { INotifyPropertyChanged_$type, PropertyChangedEventArgs, fromEnum, typeCast, delegateCombine, runOn, delegateRemove, getBoxIfEnum, markType } from "../../igniteui-angular-core/ES2015/type";
import { IDeferUpdate_$type } from "./IDeferUpdate";
import { INotifyCollectionChanged_$type } from "../../igniteui-angular-core/ES2015/INotifyCollectionChanged";
import { PropertyChangeListenerList } from "./PropertyChangeListenerList";
import { ArgumentNullException } from "../../igniteui-angular-core/ES2015/ArgumentNullException";
import { ArgumentOutOfRangeException } from "../../igniteui-angular-core/ES2015/ArgumentOutOfRangeException";
import { NotifyCollectionChangedEventArgs } from "../../igniteui-angular-core/ES2015/NotifyCollectionChangedEventArgs";
import { ItemPropertyChangedEventArgs } from "./ItemPropertyChangedEventArgs";
/**
 * @hidden
 */
export class ObservableCollectionExtended$1 extends List$1 {
    constructor($t, a, ..._rest) {
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0:
                {
                    let c = [true, false];
                    {
                        let e = c[0];
                        let f = c[1];
                        super($t, 0);
                        this.$t = $t;
                        this.$type = this.$type.specialize(this.$t);
                        this._an = 0;
                        this._ae = false;
                        this._af = false;
                        this._al = null;
                        this._ac = null;
                        this._ag = false;
                        this._itemPropertyChanged = null;
                        this.propertyChanged = null;
                        this.collectionChanged = null;
                        this._aq(e, f);
                    }
                }
                break;
            case 1:
                {
                    let c = _rest[0];
                    super($t, 1, c);
                    this.$t = $t;
                    this.$type = this.$type.specialize(this.$t);
                    this._an = 0;
                    this._ae = false;
                    this._af = false;
                    this._al = null;
                    this._ac = null;
                    this._ag = false;
                    this._itemPropertyChanged = null;
                    this.propertyChanged = null;
                    this.collectionChanged = null;
                    this._aq(true, false);
                }
                break;
            case 2:
                {
                    let c = _rest[0];
                    let d = _rest[1];
                    super($t, 0);
                    this.$t = $t;
                    this.$type = this.$type.specialize(this.$t);
                    this._an = 0;
                    this._ae = false;
                    this._af = false;
                    this._al = null;
                    this._ac = null;
                    this._ag = false;
                    this._itemPropertyChanged = null;
                    this.propertyChanged = null;
                    this.collectionChanged = null;
                    this._aq(c, d);
                }
                break;
        }
    }
    get _ah() {
        return this._an != 0;
    }
    get__ai() {
        return false;
    }
    get _ai() {
        return this.get__ai();
    }
    get _ad() {
        if (null == this._ac) {
            this._ac = new PropertyChangeListenerList();
        }
        return this._ac;
    }
    get _aj() {
        return this;
    }
    o(a) {
        this.s(this.count, a);
    }
    beginUpdate() {
        let a = ++this._an;
        if (a == 1) {
            this._ar();
        }
    }
    endUpdate() {
        let a = --this._an;
        if (a == 0) {
            if (this._ae) {
                this._ae = false;
                this._a0("Count");
                this._a0("Item[]");
                this._a1();
            }
            this._at();
        }
    }
    s(a, b) {
        if (b == null) {
            throw new ArgumentNullException(0, "collection");
        }
        let c = this._ai;
        if (c) {
            for (let d of fromEnum(b)) {
                this._av(d);
            }
        }
        for (let e of fromEnum(b)) {
            this._ap(e);
            this.r(a++, e);
            if (c) {
                this._au(e);
            }
        }
        if (false == this._ah) {
            this._a0("Count");
            this._a0("Item[]");
            this._a1();
        }
        else {
            this._ae = true;
        }
    }
    _a3(a) {
        if (null == a) {
            throw new ArgumentNullException(0, "collection");
        }
        this.beginUpdate();
        this.clear();
        this.o(a);
        this.endUpdate();
    }
    v(a, b) {
        if (a < 0) {
            throw new ArgumentOutOfRangeException(1, "index");
        }
        if (b < 0) {
            throw new ArgumentOutOfRangeException(1, "count");
        }
        let c = this._ai;
        for (let d = a + b - 1; d >= a; d--) {
            let e = this._inner[d];
            if (c) {
                this._ay(e);
            }
            this._a4(e);
            this.u(d);
            if (c) {
                this._ax(e);
            }
        }
        if (this._ah == false) {
            this._a0("Count");
            this._a0("Item[]");
            this._a1();
        }
        else {
            this._ae = true;
        }
    }
    _ar() {
    }
    _at() {
    }
    _au(a) {
    }
    _av(a) {
    }
    _ax(a) {
    }
    _ay(a) {
    }
    _ao() {
    }
    _ap(a) {
        if (this._ag) {
            let b = typeCast(ISupportPropertyChangeNotifications_$type, a);
            if (null != b) {
                b.addListener(this._ad, false);
            }
        }
        if (this._af) {
            let c = typeCast(INotifyPropertyChanged_$type, a);
            if (c != null) {
                c.propertyChanged = delegateCombine(c.propertyChanged, this._al);
            }
        }
    }
    _aq(a, b) {
        this._af = a && INotifyPropertyChanged_$type.isAssignableFrom(this.$t);
        this._ag = b && ISupportPropertyChangeNotifications_$type.isAssignableFrom(this.$t);
        if (this._af || this._ag) {
            if (this._af) {
                this._al = runOn(this, this._a2);
            }
            for (let c of fromEnum(this._aj)) {
                this._ap(c);
            }
        }
    }
    _a0(a) {
        this._az(new PropertyChangedEventArgs(a));
    }
    _a1() {
        this._as(this.$type.getStaticFields(ObservableCollectionExtended$1.$)._ak);
    }
    _a2(a, b) {
        this._aw(new ItemPropertyChangedEventArgs(a, b.propertyName));
    }
    _a4(a) {
        if (this._ag) {
            let b = typeCast(ISupportPropertyChangeNotifications_$type, a);
            if (null != b) {
                b.removeListener(this._ad);
            }
        }
        if (this._af) {
            let c = typeCast(INotifyPropertyChanged_$type, a);
            if (c != null) {
                c.propertyChanged = delegateRemove(c.propertyChanged, this._al);
            }
        }
    }
    _aw(a) {
        if (this._itemPropertyChanged != null) {
            this._itemPropertyChanged(this, a);
        }
    }
    n(a) {
        this.r(this.count, a);
    }
    p() {
        let a = this._ai;
        let b = this._aj;
        let c = a ? new Array(b.count) : null;
        if (null != c) {
            b.copyTo(c, 0);
        }
        if (a) {
            for (let d = 0; d < c.length; d++) {
                this._ay(c[d]);
            }
        }
        if (this._af || this._ag) {
            let e = b;
            for (let f = 0, g = e.count; f < g; f++) {
                this._a4(e.item(f));
            }
        }
        super.p();
        if (c != null) {
            for (let h = 0; h < c.length; h++) {
                this._ax(c[h]);
            }
        }
        if (this._ah) {
            this._ae = true;
        }
        else {
            this._a0("Count");
            this._a0("Item[]");
            this._a1();
        }
    }
    r(a, b) {
        let c = this._ai;
        if (c) {
            this._av(b);
        }
        super.r(a, b);
        this._ap(b);
        if (c) {
            this._au(b);
        }
        if (this._ah) {
            this._ae = true;
        }
        else {
            this._a0("Count");
            this._a0("Item[]");
            this._as(new NotifyCollectionChangedEventArgs(1, 0, getBoxIfEnum(this.$t, b), a));
        }
    }
    _as(a) {
        let b = this.collectionChanged;
        if (b != null) {
            b(this, a);
        }
        if (null != this._ac) {
            this._ac.g(this, a);
        }
    }
    _az(a) {
        let b = this.propertyChanged;
        if (b != null) {
            b(this, a);
        }
        if (null != this._ac) {
            this._ac.onPropertyValueChanged(this, a.propertyName, null);
        }
    }
    u(a) {
        let b = this._inner[a];
        let c = this._ai;
        if (c) {
            this._ay(b);
        }
        this._a4(b);
        super.u(a);
        if (c) {
            this._ax(b);
        }
        if (this._ah) {
            this._ae = true;
        }
        else {
            this._a0("Count");
            this._a0("Item[]");
            this._as(new NotifyCollectionChangedEventArgs(1, 1, getBoxIfEnum(this.$t, b), a));
        }
    }
    x(a, b) {
        let c = this._ai;
        if (c) {
            this._ay(this._inner[a]);
            this._av(b);
        }
        let d = this._inner[a];
        this._a4(d);
        this._ap(b);
        super.x(a, b);
        if (c) {
            this._ax(d);
            this._au(b);
        }
        if (this._ah) {
            this._ae = true;
        }
        else {
            this._a0("Item[]");
            this._as(new NotifyCollectionChangedEventArgs(2, 2, getBoxIfEnum(this.$t, b), getBoxIfEnum(this.$t, d), a));
        }
    }
    addListener(a, b) {
        this._ad.b(a, b);
    }
    removeListener(a) {
        this._ad.d(a);
    }
}
ObservableCollectionExtended$1.$t = markType(ObservableCollectionExtended$1, 'ObservableCollectionExtended$1', List$1.$.specialize(0), [ISupportPropertyChangeNotifications_$type, IDeferUpdate_$type, INotifyPropertyChanged_$type, INotifyCollectionChanged_$type], function () {
    this._ak = new NotifyCollectionChangedEventArgs(0, 4);
});
//# sourceMappingURL=ObservableCollectionExtended$1.js.map