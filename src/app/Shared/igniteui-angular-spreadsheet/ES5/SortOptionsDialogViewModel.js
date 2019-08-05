/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, INotifyPropertyChanged_$type, PropertyChangedEventArgs, markType } from "../../igniteui-angular-core/ES5/type";
import { ArgumentNullException } from "../../igniteui-angular-core/ES5/ArgumentNullException";
/**
 * @hidden
 */
var SortOptionsDialogViewModel = /** @class */ (function (_super) {
    tslib_1.__extends(SortOptionsDialogViewModel, _super);
    function SortOptionsDialogViewModel(a) {
        var _this = _super.call(this) || this;
        _this._a = null;
        _this._e = false;
        _this._b = 0;
        _this.propertyChanged = null;
        if (a == null) {
            throw new ArgumentNullException(0, "sortDialogViewModel");
        }
        _this._a = a;
        _this._f = _this._a._ab;
        _this._c = _this._a._p;
        return _this;
    }
    SortOptionsDialogViewModel.prototype._j = function (a) {
        var _u;
        var b = [];
        for (var _v = 1; _v < arguments.length; _v++) {
            b[_v - 1] = arguments[_v];
        }
        return (_u = this._a)._a8.apply(_u, tslib_1.__spread([a], b));
    };
    SortOptionsDialogViewModel.prototype._s = function () {
        this._a._ab = this._f;
        this._a._p = this._c;
    };
    SortOptionsDialogViewModel.prototype._t = function (a) {
        switch (a) {
        }
        var b = this.propertyChanged;
        if (null != b) {
            b(this, new PropertyChangedEventArgs(a));
        }
    };
    Object.defineProperty(SortOptionsDialogViewModel.prototype, "_d", {
        get: function () {
            return this._a._t;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SortOptionsDialogViewModel.prototype, "_i", {
        get: function () {
            return this._j("SortDialog_Cancel");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SortOptionsDialogViewModel.prototype, "_f", {
        get: function () {
            return this._e;
        },
        set: function (a) {
            if (a == this._e) {
                return;
            }
            this._e = a;
            this._t("CaseSensitive");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SortOptionsDialogViewModel.prototype, "_g", {
        get: function () {
            return this._c == 1;
        },
        set: function (a) {
            var b = a ? 1 : 0;
            if (this._b == b) {
                return;
            }
            this._c = b;
            this._t("IsSortingColumns");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SortOptionsDialogViewModel.prototype, "_h", {
        get: function () {
            return this._c == 0;
        },
        set: function (a) {
            var b = a ? 0 : 1;
            if (this._b == b) {
                return;
            }
            this._c = b;
            this._t("IsSortingRows");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SortOptionsDialogViewModel.prototype, "_k", {
        get: function () {
            return this._j("SortOptionsDialog_OK");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SortOptionsDialogViewModel.prototype, "_m", {
        get: function () {
            return this._j("SortOptionsDialog_CaseSensitive");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SortOptionsDialogViewModel.prototype, "_l", {
        get: function () {
            return this._j("SortOptionsDialog_Cancel");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SortOptionsDialogViewModel.prototype, "_p", {
        get: function () {
            return this._j("SortOptionsDialog_SortLeftToRight");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SortOptionsDialogViewModel.prototype, "_q", {
        get: function () {
            return this._j("SortOptionsDialog_SortTopToBottom");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SortOptionsDialogViewModel.prototype, "_r", {
        get: function () {
            return this._j("SortOptionsDialog_Title");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SortOptionsDialogViewModel.prototype, "_n", {
        get: function () {
            return this._j("SortOptionsDialog_OK");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SortOptionsDialogViewModel.prototype, "_o", {
        get: function () {
            return this._j("SortOptionsDialog_Orientation");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SortOptionsDialogViewModel.prototype, "_c", {
        get: function () {
            return this._b;
        },
        set: function (a) {
            if (a == this._b) {
                return;
            }
            this._b = a;
            this._t("SortOrientation");
        },
        enumerable: true,
        configurable: true
    });
    SortOptionsDialogViewModel.$t = markType(SortOptionsDialogViewModel, 'SortOptionsDialogViewModel', Base.$, [INotifyPropertyChanged_$type]);
    return SortOptionsDialogViewModel;
}(Base));
export { SortOptionsDialogViewModel };
//# sourceMappingURL=SortOptionsDialogViewModel.js.map
