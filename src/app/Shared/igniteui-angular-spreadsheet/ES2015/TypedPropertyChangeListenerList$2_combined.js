/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, IList_$type, typeCast, markType, String_$type, getBoxIfEnum, EnumUtil } from "../../igniteui-angular-core/ES2015/type";
import { ITypedPropertyChangeListener$2_$type } from "./ITypedPropertyChangeListener$2";
import { ListenerList } from "./ListenerList";
import { WeakReference } from "../../igniteui-angular-core/ES2015/WeakReference";
import { PropertyChangeListenerBase } from "./PropertyChangeListenerBase";
import { IPropertyChangeListener_$type } from "./IPropertyChangeListener";
import { ISupportPropertyChangeNotifications_$type } from "./ISupportPropertyChangeNotifications";
import { NotifyCollectionChangedAction_$type } from "../../igniteui-angular-core/ES2015/NotifyCollectionChangedAction";
/**
 * @hidden
 */
export class TypedPropertyChangeListenerList$2 extends Base {
    constructor($tItem, $tProperty) {
        super();
        this.$tItem = null;
        this.$tProperty = null;
        this.a = null;
        this.$tItem = $tItem;
        this.$tProperty = $tProperty;
        this.$type = this.$type.specialize(this.$tItem, this.$tProperty);
    }
    b(a, b) {
        this.a = ListenerList.add2(this.a, a, b);
    }
    d(a) {
        this.a = ListenerList.remove2(this.a, a);
    }
    onPropertyValueChanged(a, b, c) {
        if (null != this.a) {
            ListenerList.aj(this.$tItem, this.$tProperty, this.a, a, b, c);
        }
    }
    c() {
        let a = typeCast(WeakReference.$, this.a);
        let b = a == null ? typeCast(IList_$type, this.a) : null;
        let c = b == null ? typeCast(PropertyChangeListenerList.$, this.a) : null;
        if (c != null) {
            c.c();
            return;
        }
        if (b != null) {
            for (let d = b.count - 1; d >= 0; d -= 1) {
                let e = b.item(d);
                let f = false;
                if (f == false) {
                    a = typeCast(WeakReference.$, e);
                    if (a != null) {
                        if (a.c == null) {
                            f = true;
                        }
                    }
                }
                if (f == false) {
                    let g = typeCast(PropertyChangeListenerBase.$, e);
                    if (g != null) {
                        let h = g.a();
                        if (f == false) {
                            a = typeCast(WeakReference.$, h);
                            if (a != null) {
                                if (a.c == null) {
                                    f = true;
                                }
                            }
                        }
                    }
                }
                if (f) {
                    b.removeAt(d);
                }
            }
        }
        else if (a != null) {
            let i = a.c;
        }
    }
}
TypedPropertyChangeListenerList$2.$t = markType(TypedPropertyChangeListenerList$2, 'TypedPropertyChangeListenerList$2', Base.$, [ITypedPropertyChangeListener$2_$type.specialize(0, 1)]);
/**
 * @hidden
 */
export class PropertyChangeListenerList extends TypedPropertyChangeListenerList$2 {
    constructor() {
        super(Base.$, String_$type);
    }
    static e($t, a, b, c, d) {
        if (getBoxIfEnum($t, a) != null) {
            a.removeListener(c);
        }
        a = b;
        if (getBoxIfEnum($t, a) != null) {
            a.addListener(c, d);
        }
        return {
            p0: a
        };
    }
    static f($t, a, b, c, d) {
        let e = typeCast(ISupportPropertyChangeNotifications_$type, a);
        if (e != null) {
            e.removeListener(c);
        }
        a = b;
        e = typeCast(ISupportPropertyChangeNotifications_$type, b);
        if (e != null) {
            e.addListener(c, d);
        }
        return {
            p0: a
        };
    }
    g(a, b) {
        this.onPropertyValueChanged(a, EnumUtil.getName(NotifyCollectionChangedAction_$type, b.action), b);
    }
    static h(a, b, c, d) {
        ListenerList.aj(Base.$, String_$type, a, b, c, d);
    }
}
PropertyChangeListenerList.$t = markType(PropertyChangeListenerList, 'PropertyChangeListenerList', TypedPropertyChangeListenerList$2.$.specialize(Base.$, String_$type), [IPropertyChangeListener_$type]);
//# sourceMappingURL=TypedPropertyChangeListenerList$2_combined.js.map