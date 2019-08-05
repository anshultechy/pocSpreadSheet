/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, IList$1_$type, ICollection$1_$type, IEnumerable$1_$type, IEnumerable_$type, IList_$type, ICollection_$type, INotifyPropertyChanged_$type, PropertyChangedEventArgs, IEnumerator$1_$type, Type, String_$type, EnumUtil, markType, getBoxIfEnum } from "../../igniteui-angular-core/ES5/type";
import { INotifyCollectionChanged_$type } from "../../igniteui-angular-core/ES5/INotifyCollectionChanged";
import { ISupportPropertyChangeNotifications_$type } from "./ISupportPropertyChangeNotifications";
import { List$1 } from "../../igniteui-angular-core/ES5/List$1";
import { CoreUtilities } from "./CoreUtilities";
import { PropertyChangeListenerList } from "./PropertyChangeListenerList";
import { ListenerList } from "./ListenerList";
import { NotifyCollectionChangedEventArgs } from "../../igniteui-angular-core/ES5/NotifyCollectionChangedEventArgs";
import { NotifyCollectionChangedAction_$type } from "../../igniteui-angular-core/ES5/NotifyCollectionChangedAction";
import { InvalidOperationException } from "../../igniteui-angular-core/ES5/InvalidOperationException";
/**
 * @hidden
 */
var LazyReadOnlyNotifyCollection$1 = /** @class */ (function (_super) {
    tslib_1.__extends(LazyReadOnlyNotifyCollection$1, _super);
    function LazyReadOnlyNotifyCollection$1($t) {
        var _this = _super.call(this) || this;
        _this.$t = null;
        _this._e = null;
        _this._b = true;
        _this._a = null;
        _this._g = 0;
        _this.propertyChanged = null;
        _this.collectionChanged = null;
        _this.$t = $t;
        _this.$type = _this.$type.specialize(_this.$t);
        _this._a = new PropertyChangeListenerList();
        _this._e = new List$1(_this.$t, 0);
        return _this;
    }
    LazyReadOnlyNotifyCollection$1.prototype.item = function (a, b) {
        if (arguments.length === 2) {
            CoreUtilities.t();
            return b;
        }
        else {
            this._n();
            return this._e._inner[a];
        }
    };
    Object.defineProperty(LazyReadOnlyNotifyCollection$1.prototype, "_d", {
        get: function () {
            return this._e;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LazyReadOnlyNotifyCollection$1.prototype, "_c", {
        get: function () {
            return this._b;
        },
        enumerable: true,
        configurable: true
    });
    LazyReadOnlyNotifyCollection$1.prototype._i = function (a, b, c) {
        this._m(a, b, c);
    };
    LazyReadOnlyNotifyCollection$1.prototype._m = function (a, b, c) {
        if (null != this._a) {
            ListenerList.aj(Base.$, String_$type, this._a, a, b, c);
        }
    };
    LazyReadOnlyNotifyCollection$1.prototype._h = function () {
        this._g++;
        this._b = true;
        this._j();
    };
    LazyReadOnlyNotifyCollection$1.prototype._k = function (a) {
        var b = this.collectionChanged;
        if (null != b) {
            b(this, a);
        }
        this._i(this, EnumUtil.getName(NotifyCollectionChangedAction_$type, a.action), a);
    };
    LazyReadOnlyNotifyCollection$1.prototype._l = function (a) {
        var b = this.propertyChanged;
        if (null != b) {
            b(this, new PropertyChangedEventArgs(a));
        }
        this._i(this, a, null);
    };
    LazyReadOnlyNotifyCollection$1.prototype._j = function () {
        this._k(this.$type.getStaticFields(LazyReadOnlyNotifyCollection$1.$)._f);
        this._l("Count");
        this._l("Item[]");
    };
    LazyReadOnlyNotifyCollection$1.prototype._n = function () {
        if (this._b) {
            this._b = false;
            this._o(this._e);
        }
    };
    LazyReadOnlyNotifyCollection$1.prototype.addListener = function (a, b) {
        this._a.b(a, b);
    };
    LazyReadOnlyNotifyCollection$1.prototype.removeListener = function (a) {
        this._a.d(a);
    };
    LazyReadOnlyNotifyCollection$1.prototype.getEnumeratorObject = function () {
        return new LazyReadOnlyNotifyCollection_Enumerator$1(this.$t, this);
    };
    LazyReadOnlyNotifyCollection$1.prototype.getEnumerator = function () {
        return new LazyReadOnlyNotifyCollection_Enumerator$1(this.$t, this);
    };
    LazyReadOnlyNotifyCollection$1.prototype.add = function (a) {
        CoreUtilities.t();
    };
    LazyReadOnlyNotifyCollection$1.prototype.clear = function () {
        CoreUtilities.t();
    };
    LazyReadOnlyNotifyCollection$1.prototype.contains = function (a) {
        this._n();
        return this._e.contains(a);
    };
    LazyReadOnlyNotifyCollection$1.prototype.copyTo = function (a, b) {
        this._n();
        this._e.copyTo(a, b);
    };
    LazyReadOnlyNotifyCollection$1.prototype.get_count = function () {
        this._n();
        return this._e.count;
    };
    Object.defineProperty(LazyReadOnlyNotifyCollection$1.prototype, "count", {
        get: function () {
            return this.get_count();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LazyReadOnlyNotifyCollection$1.prototype, "isReadOnly", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    LazyReadOnlyNotifyCollection$1.prototype.remove = function (a) {
        CoreUtilities.t();
        return false;
    };
    LazyReadOnlyNotifyCollection$1.prototype.indexOf = function (a) {
        this._n();
        return this._e.indexOf(a);
    };
    LazyReadOnlyNotifyCollection$1.prototype.insert = function (a, b) {
        CoreUtilities.t();
    };
    LazyReadOnlyNotifyCollection$1.prototype.copyTo1 = function (a, b) {
        this._n();
        this._e.copyTo(a, b);
    };
    Object.defineProperty(LazyReadOnlyNotifyCollection$1.prototype, "isSynchronized", {
        get: function () {
            return false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LazyReadOnlyNotifyCollection$1.prototype, "syncRoot", {
        get: function () {
            return this._e;
        },
        enumerable: true,
        configurable: true
    });
    LazyReadOnlyNotifyCollection$1.prototype.add1 = function (a) {
        CoreUtilities.t();
        return -1;
    };
    LazyReadOnlyNotifyCollection$1.prototype.contains1 = function (a) {
        this._n();
        return this._e.contains(a);
    };
    LazyReadOnlyNotifyCollection$1.prototype.indexOf1 = function (a) {
        this._n();
        return this._e.indexOf(a);
    };
    LazyReadOnlyNotifyCollection$1.prototype.insert1 = function (a, b) {
        CoreUtilities.t();
    };
    Object.defineProperty(LazyReadOnlyNotifyCollection$1.prototype, "isFixedSize", {
        get: function () {
            return false;
        },
        enumerable: true,
        configurable: true
    });
    LazyReadOnlyNotifyCollection$1.prototype.remove1 = function (a) {
        CoreUtilities.t();
    };
    LazyReadOnlyNotifyCollection$1.prototype.removeAt = function (a) {
        CoreUtilities.t();
    };
    LazyReadOnlyNotifyCollection$1.$t = markType(LazyReadOnlyNotifyCollection$1, 'LazyReadOnlyNotifyCollection$1', Base.$, [IList$1_$type.specialize(0), ICollection$1_$type.specialize(0), IEnumerable$1_$type.specialize(0), IList_$type, ICollection_$type, IEnumerable_$type, INotifyCollectionChanged_$type, INotifyPropertyChanged_$type, ISupportPropertyChangeNotifications_$type], function () {
        this._f = new NotifyCollectionChangedEventArgs(0, 4);
    });
    return LazyReadOnlyNotifyCollection$1;
}(Base));
export { LazyReadOnlyNotifyCollection$1 };
/**
 * @hidden
 */
var LazyReadOnlyNotifyCollection_Enumerator$1 = /** @class */ (function (_super) {
    tslib_1.__extends(LazyReadOnlyNotifyCollection_Enumerator$1, _super);
    function LazyReadOnlyNotifyCollection_Enumerator$1($t, a) {
        var _this = _super.call(this) || this;
        _this.$t = null;
        _this._a = null;
        _this._d = 0;
        _this._b = null;
        _this._c = 0;
        _this.$t = $t;
        _this.$type = _this.$type.specialize(_this.$t);
        _this._a = a;
        _this._a._n();
        _this._d = a._g;
        _this.reset();
        return _this;
    }
    LazyReadOnlyNotifyCollection_Enumerator$1.prototype._e = function () {
        if (this._d != this._a._g) {
            throw new InvalidOperationException(0);
        }
    };
    LazyReadOnlyNotifyCollection_Enumerator$1.prototype.dispose = function () {
    };
    Object.defineProperty(LazyReadOnlyNotifyCollection_Enumerator$1.prototype, "currentObject", {
        get: function () {
            return getBoxIfEnum(this.$t, this._b);
        },
        enumerable: true,
        configurable: true
    });
    LazyReadOnlyNotifyCollection_Enumerator$1.prototype.moveNext = function () {
        this._e();
        if (this._c < this._a.count) {
            this._b = this._a.item(this._c);
            this._c++;
            return true;
        }
        this._c = this._a.count;
        this._b = Type.getDefaultValue(this.$t);
        return false;
    };
    LazyReadOnlyNotifyCollection_Enumerator$1.prototype.reset = function () {
        this._e();
        this._c = 0;
        this._b = Type.getDefaultValue(this.$t);
    };
    Object.defineProperty(LazyReadOnlyNotifyCollection_Enumerator$1.prototype, "current", {
        get: function () {
            return this._b;
        },
        enumerable: true,
        configurable: true
    });
    LazyReadOnlyNotifyCollection_Enumerator$1.$t = markType(LazyReadOnlyNotifyCollection_Enumerator$1, 'LazyReadOnlyNotifyCollection_Enumerator$1', Base.$, [IEnumerator$1_$type.specialize(0)]);
    return LazyReadOnlyNotifyCollection_Enumerator$1;
}(Base));
export { LazyReadOnlyNotifyCollection_Enumerator$1 };
//# sourceMappingURL=LazyReadOnlyNotifyCollection$1_combined.js.map
