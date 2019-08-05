/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, IList$1_$type, INotifyPropertyChanged_$type, PropertyChangedEventArgs, typeCast, runOn, delegateCombine, delegateRemove, markType, getEnumerator } from "../../igniteui-angular-core/ES5/type";
import { INotifyCollectionChanged_$type } from "../../igniteui-angular-core/ES5/INotifyCollectionChanged";
import { ISupportPropertyChangeNotifications_$type } from "./ISupportPropertyChangeNotifications";
import { CoreUtilities } from "./CoreUtilities";
import { PropertyChangeListenerList } from "./PropertyChangeListenerList";
import { PropertyChangeListener$1 } from "./PropertyChangeListener$1";
import { NotifyCollectionChangedEventArgs } from "../../igniteui-angular-core/ES5/NotifyCollectionChangedEventArgs";
/**
 * @hidden
 */
var ReadOnlyNotifyCollection$1 = /** @class */ (function (_super) {
    tslib_1.__extends(ReadOnlyNotifyCollection$1, _super);
    function ReadOnlyNotifyCollection$1($t, a) {
        var _this = _super.call(this) || this;
        _this.$t = null;
        _this.c = null;
        _this.a = null;
        _this.collectionChanged = null;
        _this.propertyChanged = null;
        _this.$t = $t;
        _this.$type = _this.$type.specialize(_this.$t);
        _this.m(a);
        return _this;
    }
    ReadOnlyNotifyCollection$1.prototype.item = function (a, b) {
        if (arguments.length === 2) {
            CoreUtilities.t();
            return b;
        }
        else {
            return this.c.item(a);
        }
    };
    ReadOnlyNotifyCollection$1.prototype.contains = function (a) {
        return this.c.contains(a);
    };
    ReadOnlyNotifyCollection$1.prototype.copyTo = function (a, b) {
        CoreUtilities.s(this.$t, this.c, a, b);
    };
    ReadOnlyNotifyCollection$1.prototype.getEnumerator = function () {
        return getEnumerator(this.c);
    };
    ReadOnlyNotifyCollection$1.prototype.indexOf = function (a) {
        return this.c.indexOf(a);
    };
    ReadOnlyNotifyCollection$1.prototype.h = function (a, b) {
        this.j(b, true);
    };
    ReadOnlyNotifyCollection$1.prototype.i = function (a, b) {
        this.l(b, true);
    };
    ReadOnlyNotifyCollection$1.prototype.j = function (a, b) {
        var c = this.collectionChanged;
        if (c != null) {
            c(this, a);
        }
        if (b && null != this.a) {
            this.a.g(this, a);
        }
    };
    ReadOnlyNotifyCollection$1.prototype.k = function () {
        this.l(new PropertyChangedEventArgs("Count"), true);
        this.l(new PropertyChangedEventArgs("Item[]"), true);
        this.j(new NotifyCollectionChangedEventArgs(0, 4), true);
    };
    ReadOnlyNotifyCollection$1.prototype.l = function (a, b) {
        var c = this.propertyChanged;
        if (c != null) {
            c(this, a);
        }
        if (b && null != this.a) {
            this.a.onPropertyValueChanged(this, a.propertyName, a);
        }
    };
    ReadOnlyNotifyCollection$1.prototype.m = function (a) {
        CoreUtilities.y(a);
        if (this.c != a) {
            this.f(this.c, false);
            this.c = a;
            this.f(this.c, true);
            this.k();
        }
    };
    ReadOnlyNotifyCollection$1.prototype.f = function (a, b) {
        if (null != a) {
            var c = typeCast(ISupportPropertyChangeNotifications_$type, a);
            if (null != c) {
                if (b) {
                    c.addListener(this.b, false);
                }
                else {
                    c.removeListener(this.b);
                }
            }
            else {
                var d = typeCast(INotifyCollectionChanged_$type, this.c);
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
                var e = typeCast(INotifyPropertyChanged_$type, this.c);
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
    };
    ReadOnlyNotifyCollection$1.prototype.e = function () {
        if (this.a != null) {
            this.a.c();
        }
    };
    Object.defineProperty(ReadOnlyNotifyCollection$1.prototype, "count", {
        get: function () {
            return this.c.count;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReadOnlyNotifyCollection$1.prototype, "isReadOnly", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReadOnlyNotifyCollection$1.prototype, "d", {
        get: function () {
            return this.c;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReadOnlyNotifyCollection$1.prototype, "b", {
        get: function () {
            if (null == this.a) {
                this.a = new PropertyChangeListenerList();
                this.a.b(new PropertyChangeListener$1(ReadOnlyNotifyCollection$1.$.specialize(this.$t), this, runOn(this, this.g), true), false);
            }
            return this.a;
        },
        enumerable: true,
        configurable: true
    });
    ReadOnlyNotifyCollection$1.prototype.g = function (a, b, c, d) {
        if (b == this.c) {
            var e = typeCast(NotifyCollectionChangedEventArgs.$, d);
            if (null != e) {
                this.j(e, true);
            }
            else {
                var f = typeCast(PropertyChangedEventArgs.$, d);
                if (null != f) {
                    this.l(f, true);
                }
            }
        }
    };
    ReadOnlyNotifyCollection$1.prototype.insert = function (a, b) {
        CoreUtilities.t();
    };
    ReadOnlyNotifyCollection$1.prototype.removeAt = function (a) {
        CoreUtilities.t();
    };
    ReadOnlyNotifyCollection$1.prototype.add = function (a) {
        CoreUtilities.t();
    };
    ReadOnlyNotifyCollection$1.prototype.clear = function () {
        CoreUtilities.t();
    };
    ReadOnlyNotifyCollection$1.prototype.remove = function (a) {
        CoreUtilities.t();
        return false;
    };
    ReadOnlyNotifyCollection$1.prototype.getEnumeratorObject = function () {
        return this.getEnumerator();
    };
    ReadOnlyNotifyCollection$1.prototype.addListener = function (a, b) {
        this.b.b(a, b);
    };
    ReadOnlyNotifyCollection$1.prototype.removeListener = function (a) {
        this.b.d(a);
    };
    ReadOnlyNotifyCollection$1.$t = markType(ReadOnlyNotifyCollection$1, 'ReadOnlyNotifyCollection$1', Base.$, [IList$1_$type.specialize(0), INotifyCollectionChanged_$type, ISupportPropertyChangeNotifications_$type, INotifyPropertyChanged_$type]);
    return ReadOnlyNotifyCollection$1;
}(Base));
export { ReadOnlyNotifyCollection$1 };
//# sourceMappingURL=ReadOnlyNotifyCollection$1.js.map
