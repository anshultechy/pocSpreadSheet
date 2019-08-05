/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { List$1 } from "./List$1";
import { INotifyCollectionChanged_$type } from "./INotifyCollectionChanged";
import { INotifyPropertyChanged_$type, PropertyChangedEventArgs, getBoxIfEnum, markType } from "./type";
import { NotifyCollectionChangedEventArgs } from "./NotifyCollectionChangedEventArgs";
/**
 * @hidden
 */
var ObservableCollection$1 = /** @class */ (function (_super) {
    tslib_1.__extends(ObservableCollection$1, _super);
    function ObservableCollection$1($t, a) {
        var _rest = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            _rest[_i - 2] = arguments[_i];
        }
        var _this = this;
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0:
                {
                    _this = _super.call(this, $t, 0) || this;
                    _this.$t = $t;
                    _this.$type = _this.$type.specialize(_this.$t);
                    _this.collectionChanged = null;
                    _this.propertyChanged = null;
                }
                break;
            case 1:
                {
                    var c = _rest[0];
                    _this = _super.call(this, $t, 1, c) || this;
                    _this.$t = $t;
                    _this.$type = _this.$type.specialize(_this.$t);
                    _this.collectionChanged = null;
                    _this.propertyChanged = null;
                }
                break;
            case 2:
                {
                    var c = _rest[0];
                    _this = _super.call(this, $t, 2, c) || this;
                    _this.$t = $t;
                    _this.$type = _this.$type.specialize(_this.$t);
                    _this.collectionChanged = null;
                    _this.propertyChanged = null;
                }
                break;
        }
        return _this;
    }
    ObservableCollection$1.prototype.x = function (a, b) {
        var c = this._inner[a];
        _super.prototype.x.call(this, a, b);
        if (this.propertyChanged != null) {
            this.ad(new PropertyChangedEventArgs("Item[]"));
        }
        if (this.collectionChanged != null) {
            var d = new NotifyCollectionChangedEventArgs(2, 2, getBoxIfEnum(this.$t, b), getBoxIfEnum(this.$t, c), a);
            this.ac(d);
        }
    };
    ObservableCollection$1.prototype.p = function () {
        _super.prototype.p.call(this);
        if (this.propertyChanged != null) {
            this.ad(new PropertyChangedEventArgs("Count"));
            this.ad(new PropertyChangedEventArgs("Item[]"));
        }
        if (this.collectionChanged != null) {
            var a = new NotifyCollectionChangedEventArgs(0, 4);
            this.ac(a);
        }
    };
    ObservableCollection$1.prototype.r = function (a, b) {
        _super.prototype.r.call(this, a, b);
        if (this.propertyChanged != null) {
            this.ad(new PropertyChangedEventArgs("Count"));
            this.ad(new PropertyChangedEventArgs("Item[]"));
        }
        if (this.collectionChanged != null) {
            var c = new NotifyCollectionChangedEventArgs(1, 0, getBoxIfEnum(this.$t, b), a);
            this.ac(c);
        }
    };
    ObservableCollection$1.prototype.n = function (a) {
        _super.prototype.n.call(this, a);
        if (this.propertyChanged != null) {
            this.ad(new PropertyChangedEventArgs("Count"));
            this.ad(new PropertyChangedEventArgs("Item[]"));
        }
        if (this.collectionChanged != null) {
            var b = new NotifyCollectionChangedEventArgs(1, 0, getBoxIfEnum(this.$t, a), this.count - 1);
            this.ac(b);
        }
    };
    ObservableCollection$1.prototype.u = function (a) {
        var b = this._inner[a];
        _super.prototype.u.call(this, a);
        if (this.propertyChanged != null) {
            this.ad(new PropertyChangedEventArgs("Count"));
            this.ad(new PropertyChangedEventArgs("Item[]"));
        }
        if (this.collectionChanged != null) {
            var c = new NotifyCollectionChangedEventArgs(1, 1, getBoxIfEnum(this.$t, b), a);
            this.ac(c);
        }
    };
    ObservableCollection$1.prototype.ad = function (a) {
        if (this.propertyChanged != null) {
            this.propertyChanged(this, a);
        }
    };
    ObservableCollection$1.prototype.ac = function (a) {
        if (this.collectionChanged != null) {
            this.collectionChanged(this, a);
        }
    };
    ObservableCollection$1.$t = markType(ObservableCollection$1, 'ObservableCollection$1', List$1.$.specialize(0), [INotifyCollectionChanged_$type, INotifyPropertyChanged_$type]);
    return ObservableCollection$1;
}(List$1));
export { ObservableCollection$1 };
//# sourceMappingURL=ObservableCollection$1.js.map