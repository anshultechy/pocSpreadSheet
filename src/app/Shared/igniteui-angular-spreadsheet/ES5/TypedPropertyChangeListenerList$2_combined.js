/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, IList_$type, typeCast, markType, String_$type, getBoxIfEnum, EnumUtil } from "../../igniteui-angular-core/ES5/type";
import { ITypedPropertyChangeListener$2_$type } from "./ITypedPropertyChangeListener$2";
import { ListenerList } from "./ListenerList";
import { WeakReference } from "../../igniteui-angular-core/ES5/WeakReference";
import { PropertyChangeListenerBase } from "./PropertyChangeListenerBase";
import { IPropertyChangeListener_$type } from "./IPropertyChangeListener";
import { ISupportPropertyChangeNotifications_$type } from "./ISupportPropertyChangeNotifications";
import { NotifyCollectionChangedAction_$type } from "../../igniteui-angular-core/ES5/NotifyCollectionChangedAction";
/**
 * @hidden
 */
var TypedPropertyChangeListenerList$2 = /** @class */ (function (_super) {
    tslib_1.__extends(TypedPropertyChangeListenerList$2, _super);
    function TypedPropertyChangeListenerList$2($tItem, $tProperty) {
        var _this = _super.call(this) || this;
        _this.$tItem = null;
        _this.$tProperty = null;
        _this.a = null;
        _this.$tItem = $tItem;
        _this.$tProperty = $tProperty;
        _this.$type = _this.$type.specialize(_this.$tItem, _this.$tProperty);
        return _this;
    }
    TypedPropertyChangeListenerList$2.prototype.b = function (a, b) {
        this.a = ListenerList.add2(this.a, a, b);
    };
    TypedPropertyChangeListenerList$2.prototype.d = function (a) {
        this.a = ListenerList.remove2(this.a, a);
    };
    TypedPropertyChangeListenerList$2.prototype.onPropertyValueChanged = function (a, b, c) {
        if (null != this.a) {
            ListenerList.aj(this.$tItem, this.$tProperty, this.a, a, b, c);
        }
    };
    TypedPropertyChangeListenerList$2.prototype.c = function () {
        var a = typeCast(WeakReference.$, this.a);
        var b = a == null ? typeCast(IList_$type, this.a) : null;
        var c = b == null ? typeCast(PropertyChangeListenerList.$, this.a) : null;
        if (c != null) {
            c.c();
            return;
        }
        if (b != null) {
            for (var d = b.count - 1; d >= 0; d -= 1) {
                var e = b.item(d);
                var f = false;
                if (f == false) {
                    a = typeCast(WeakReference.$, e);
                    if (a != null) {
                        if (a.c == null) {
                            f = true;
                        }
                    }
                }
                if (f == false) {
                    var g = typeCast(PropertyChangeListenerBase.$, e);
                    if (g != null) {
                        var h = g.a();
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
            var i = a.c;
        }
    };
    TypedPropertyChangeListenerList$2.$t = markType(TypedPropertyChangeListenerList$2, 'TypedPropertyChangeListenerList$2', Base.$, [ITypedPropertyChangeListener$2_$type.specialize(0, 1)]);
    return TypedPropertyChangeListenerList$2;
}(Base));
export { TypedPropertyChangeListenerList$2 };
/**
 * @hidden
 */
var PropertyChangeListenerList = /** @class */ (function (_super) {
    tslib_1.__extends(PropertyChangeListenerList, _super);
    function PropertyChangeListenerList() {
        return _super.call(this, Base.$, String_$type) || this;
    }
    PropertyChangeListenerList.e = function ($t, a, b, c, d) {
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
    };
    PropertyChangeListenerList.f = function ($t, a, b, c, d) {
        var e = typeCast(ISupportPropertyChangeNotifications_$type, a);
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
    };
    PropertyChangeListenerList.prototype.g = function (a, b) {
        this.onPropertyValueChanged(a, EnumUtil.getName(NotifyCollectionChangedAction_$type, b.action), b);
    };
    PropertyChangeListenerList.h = function (a, b, c, d) {
        ListenerList.aj(Base.$, String_$type, a, b, c, d);
    };
    PropertyChangeListenerList.$t = markType(PropertyChangeListenerList, 'PropertyChangeListenerList', TypedPropertyChangeListenerList$2.$.specialize(Base.$, String_$type), [IPropertyChangeListener_$type]);
    return PropertyChangeListenerList;
}(TypedPropertyChangeListenerList$2));
export { PropertyChangeListenerList };
//# sourceMappingURL=TypedPropertyChangeListenerList$2_combined.js.map
