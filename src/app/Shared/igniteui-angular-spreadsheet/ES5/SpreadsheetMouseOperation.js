/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { PropertyChangeNotifierExtended } from "./PropertyChangeNotifierExtended";
import { markType } from "../../igniteui-angular-core/ES5/type";
/**
 * @hidden
 */
var SpreadsheetMouseOperation = /** @class */ (function (_super) {
    tslib_1.__extends(SpreadsheetMouseOperation, _super);
    function SpreadsheetMouseOperation() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._h = 0;
        _this._j = null;
        _this._l = null;
        return _this;
    }
    Object.defineProperty(SpreadsheetMouseOperation.prototype, "_i", {
        get: function () {
            return this._h;
        },
        set: function (a) {
            if (this._h != a) {
                var b = this._h;
                this._h = a;
                this._o(b, a);
                this.a("CurrentState");
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpreadsheetMouseOperation.prototype, "_k", {
        get: function () {
            return this._j;
        },
        set: function (a) {
            if (this._j != a) {
                this._j = a;
                this.a("ToolTip");
            }
        },
        enumerable: true,
        configurable: true
    });
    SpreadsheetMouseOperation.prototype._n = function () {
        if (this._i == 2 || this._i == 1) {
            this._i = 4;
            this._i = 0;
        }
    };
    SpreadsheetMouseOperation.prototype._p = function (a) {
        if (a.b()) {
            a.f();
        }
        this._i = 1;
        if (this._m(a) && a.c() && this._i == 1) {
            this._i = 2;
            if (!a.b()) {
                a.d();
            }
        }
        else if (this._i == 1) {
            this._i = 0;
        }
    };
    SpreadsheetMouseOperation.prototype._q = function (a) {
    };
    SpreadsheetMouseOperation.prototype._r = function (a) {
    };
    SpreadsheetMouseOperation.prototype._s = function (a) {
    };
    SpreadsheetMouseOperation.prototype._t = function (a) {
        if (this._i == 2) {
            this._i = 3;
            if (a.b()) {
                a.f();
            }
            this._u(a);
            this._i = 0;
        }
    };
    SpreadsheetMouseOperation.prototype._g = function (a) {
        return 0;
    };
    SpreadsheetMouseOperation.$t = markType(SpreadsheetMouseOperation, 'SpreadsheetMouseOperation', PropertyChangeNotifierExtended.$);
    return SpreadsheetMouseOperation;
}(PropertyChangeNotifierExtended));
export { SpreadsheetMouseOperation };
//# sourceMappingURL=SpreadsheetMouseOperation.js.map
