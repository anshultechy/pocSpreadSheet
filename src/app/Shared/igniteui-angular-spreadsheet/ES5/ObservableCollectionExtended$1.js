/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { List$1 } from "../../igniteui-angular-core/ES5/List$1";
import { ISupportPropertyChangeNotifications_$type } from "./ISupportPropertyChangeNotifications";
import { INotifyPropertyChanged_$type, PropertyChangedEventArgs, fromEnum, typeCast, delegateCombine, runOn, delegateRemove, getBoxIfEnum, markType } from "../../igniteui-angular-core/ES5/type";
import { IDeferUpdate_$type } from "./IDeferUpdate";
import { INotifyCollectionChanged_$type } from "../../igniteui-angular-core/ES5/INotifyCollectionChanged";
import { PropertyChangeListenerList } from "./PropertyChangeListenerList";
import { ArgumentNullException } from "../../igniteui-angular-core/ES5/ArgumentNullException";
import { ArgumentOutOfRangeException } from "../../igniteui-angular-core/ES5/ArgumentOutOfRangeException";
import { NotifyCollectionChangedEventArgs } from "../../igniteui-angular-core/ES5/NotifyCollectionChangedEventArgs";
import { ItemPropertyChangedEventArgs } from "./ItemPropertyChangedEventArgs";
/**
 * @hidden
 */
var ObservableCollectionExtended$1 = /** @class */ (function (_super) {
    tslib_1.__extends(ObservableCollectionExtended$1, _super);
    function ObservableCollectionExtended$1($t, a) {
        var _rest = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            _rest[_i - 2] = arguments[_i];
        }
        var _this = this;
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0:
                {
                    var c = [true, false];
                    {
                        var e = c[0];
                        var f = c[1];
                        _this = _super.call(this, $t, 0) || this;
                        _this.$t = $t;
                        _this.$type = _this.$type.specialize(_this.$t);
                        _this._an = 0;
                        _this._ae = false;
                        _this._af = false;
                        _this._al = null;
                        _this._ac = null;
                        _this._ag = false;
                        _this._itemPropertyChanged = null;
                        _this.propertyChanged = null;
                        _this.collectionChanged = null;
                        _this._aq(e, f);
                    }
                }
                break;
            case 1:
                {
                    var c = _rest[0];
                    _this = _super.call(this, $t, 1, c) || this;
                    _this.$t = $t;
                    _this.$type = _this.$type.specialize(_this.$t);
                    _this._an = 0;
                    _this._ae = false;
                    _this._af = false;
                    _this._al = null;
                    _this._ac = null;
                    _this._ag = false;
                    _this._itemPropertyChanged = null;
                    _this.propertyChanged = null;
                    _this.collectionChanged = null;
                    _this._aq(true, false);
                }
                break;
            case 2:
                {
                    var c = _rest[0];
                    var d = _rest[1];
                    _this = _super.call(this, $t, 0) || this;
                    _this.$t = $t;
                    _this.$type = _this.$type.specialize(_this.$t);
                    _this._an = 0;
                    _this._ae = false;
                    _this._af = false;
                    _this._al = null;
                    _this._ac = null;
                    _this._ag = false;
                    _this._itemPropertyChanged = null;
                    _this.propertyChanged = null;
                    _this.collectionChanged = null;
                    _this._aq(c, d);
                }
                break;
        }
        return _this;
    }
    Object.defineProperty(ObservableCollectionExtended$1.prototype, "_ah", {
        get: function () {
            return this._an != 0;
        },
        enumerable: true,
        configurable: true
    });
    ObservableCollectionExtended$1.prototype.get__ai = function () {
        return false;
    };
    Object.defineProperty(ObservableCollectionExtended$1.prototype, "_ai", {
        get: function () {
            return this.get__ai();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ObservableCollectionExtended$1.prototype, "_ad", {
        get: function () {
            if (null == this._ac) {
                this._ac = new PropertyChangeListenerList();
            }
            return this._ac;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ObservableCollectionExtended$1.prototype, "_aj", {
        get: function () {
            return this;
        },
        enumerable: true,
        configurable: true
    });
    ObservableCollectionExtended$1.prototype.o = function (a) {
        this.s(this.count, a);
    };
    ObservableCollectionExtended$1.prototype.beginUpdate = function () {
        var a = ++this._an;
        if (a == 1) {
            this._ar();
        }
    };
    ObservableCollectionExtended$1.prototype.endUpdate = function () {
        var a = --this._an;
        if (a == 0) {
            if (this._ae) {
                this._ae = false;
                this._a0("Count");
                this._a0("Item[]");
                this._a1();
            }
            this._at();
        }
    };
    ObservableCollectionExtended$1.prototype.s = function (a, b) {
        var e_1, _a, e_2, _b;
        if (b == null) {
            throw new ArgumentNullException(0, "collection");
        }
        var c = this._ai;
        if (c) {
            try {
                for (var _c = tslib_1.__values(fromEnum(b)), _d = _c.next(); !_d.done; _d = _c.next()) {
                    var d = _d.value;
                    this._av(d);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
        try {
            for (var _e = tslib_1.__values(fromEnum(b)), _f = _e.next(); !_f.done; _f = _e.next()) {
                var e = _f.value;
                this._ap(e);
                this.r(a++, e);
                if (c) {
                    this._au(e);
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
            }
            finally { if (e_2) throw e_2.error; }
        }
        if (false == this._ah) {
            this._a0("Count");
            this._a0("Item[]");
            this._a1();
        }
        else {
            this._ae = true;
        }
    };
    ObservableCollectionExtended$1.prototype._a3 = function (a) {
        if (null == a) {
            throw new ArgumentNullException(0, "collection");
        }
        this.beginUpdate();
        this.clear();
        this.o(a);
        this.endUpdate();
    };
    ObservableCollectionExtended$1.prototype.v = function (a, b) {
        if (a < 0) {
            throw new ArgumentOutOfRangeException(1, "index");
        }
        if (b < 0) {
            throw new ArgumentOutOfRangeException(1, "count");
        }
        var c = this._ai;
        for (var d = a + b - 1; d >= a; d--) {
            var e = this._inner[d];
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
    };
    ObservableCollectionExtended$1.prototype._ar = function () {
    };
    ObservableCollectionExtended$1.prototype._at = function () {
    };
    ObservableCollectionExtended$1.prototype._au = function (a) {
    };
    ObservableCollectionExtended$1.prototype._av = function (a) {
    };
    ObservableCollectionExtended$1.prototype._ax = function (a) {
    };
    ObservableCollectionExtended$1.prototype._ay = function (a) {
    };
    ObservableCollectionExtended$1.prototype._ao = function () {
    };
    ObservableCollectionExtended$1.prototype._ap = function (a) {
        if (this._ag) {
            var b = typeCast(ISupportPropertyChangeNotifications_$type, a);
            if (null != b) {
                b.addListener(this._ad, false);
            }
        }
        if (this._af) {
            var c = typeCast(INotifyPropertyChanged_$type, a);
            if (c != null) {
                c.propertyChanged = delegateCombine(c.propertyChanged, this._al);
            }
        }
    };
    ObservableCollectionExtended$1.prototype._aq = function (a, b) {
        var e_3, _a;
        this._af = a && INotifyPropertyChanged_$type.isAssignableFrom(this.$t);
        this._ag = b && ISupportPropertyChangeNotifications_$type.isAssignableFrom(this.$t);
        if (this._af || this._ag) {
            if (this._af) {
                this._al = runOn(this, this._a2);
            }
            try {
                for (var _b = tslib_1.__values(fromEnum(this._aj)), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var c = _c.value;
                    this._ap(c);
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_3) throw e_3.error; }
            }
        }
    };
    ObservableCollectionExtended$1.prototype._a0 = function (a) {
        this._az(new PropertyChangedEventArgs(a));
    };
    ObservableCollectionExtended$1.prototype._a1 = function () {
        this._as(this.$type.getStaticFields(ObservableCollectionExtended$1.$)._ak);
    };
    ObservableCollectionExtended$1.prototype._a2 = function (a, b) {
        this._aw(new ItemPropertyChangedEventArgs(a, b.propertyName));
    };
    ObservableCollectionExtended$1.prototype._a4 = function (a) {
        if (this._ag) {
            var b = typeCast(ISupportPropertyChangeNotifications_$type, a);
            if (null != b) {
                b.removeListener(this._ad);
            }
        }
        if (this._af) {
            var c = typeCast(INotifyPropertyChanged_$type, a);
            if (c != null) {
                c.propertyChanged = delegateRemove(c.propertyChanged, this._al);
            }
        }
    };
    ObservableCollectionExtended$1.prototype._aw = function (a) {
        if (this._itemPropertyChanged != null) {
            this._itemPropertyChanged(this, a);
        }
    };
    ObservableCollectionExtended$1.prototype.n = function (a) {
        this.r(this.count, a);
    };
    ObservableCollectionExtended$1.prototype.p = function () {
        var a = this._ai;
        var b = this._aj;
        var c = a ? new Array(b.count) : null;
        if (null != c) {
            b.copyTo(c, 0);
        }
        if (a) {
            for (var d = 0; d < c.length; d++) {
                this._ay(c[d]);
            }
        }
        if (this._af || this._ag) {
            var e = b;
            for (var f = 0, g = e.count; f < g; f++) {
                this._a4(e.item(f));
            }
        }
        _super.prototype.p.call(this);
        if (c != null) {
            for (var h = 0; h < c.length; h++) {
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
    };
    ObservableCollectionExtended$1.prototype.r = function (a, b) {
        var c = this._ai;
        if (c) {
            this._av(b);
        }
        _super.prototype.r.call(this, a, b);
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
    };
    ObservableCollectionExtended$1.prototype._as = function (a) {
        var b = this.collectionChanged;
        if (b != null) {
            b(this, a);
        }
        if (null != this._ac) {
            this._ac.g(this, a);
        }
    };
    ObservableCollectionExtended$1.prototype._az = function (a) {
        var b = this.propertyChanged;
        if (b != null) {
            b(this, a);
        }
        if (null != this._ac) {
            this._ac.onPropertyValueChanged(this, a.propertyName, null);
        }
    };
    ObservableCollectionExtended$1.prototype.u = function (a) {
        var b = this._inner[a];
        var c = this._ai;
        if (c) {
            this._ay(b);
        }
        this._a4(b);
        _super.prototype.u.call(this, a);
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
    };
    ObservableCollectionExtended$1.prototype.x = function (a, b) {
        var c = this._ai;
        if (c) {
            this._ay(this._inner[a]);
            this._av(b);
        }
        var d = this._inner[a];
        this._a4(d);
        this._ap(b);
        _super.prototype.x.call(this, a, b);
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
    };
    ObservableCollectionExtended$1.prototype.addListener = function (a, b) {
        this._ad.b(a, b);
    };
    ObservableCollectionExtended$1.prototype.removeListener = function (a) {
        this._ad.d(a);
    };
    ObservableCollectionExtended$1.$t = markType(ObservableCollectionExtended$1, 'ObservableCollectionExtended$1', List$1.$.specialize(0), [ISupportPropertyChangeNotifications_$type, IDeferUpdate_$type, INotifyPropertyChanged_$type, INotifyCollectionChanged_$type], function () {
        this._ak = new NotifyCollectionChangedEventArgs(0, 4);
    });
    return ObservableCollectionExtended$1;
}(List$1));
export { ObservableCollectionExtended$1 };
//# sourceMappingURL=ObservableCollectionExtended$1.js.map
