/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { SpreadsheetDialogFormatBase } from "./SpreadsheetDialogFormatBase";
import { markType } from "../../igniteui-angular-core/ES5/type";
/**
 * @hidden
 */
var SpreadsheetDialogFormat = /** @class */ (function (_super) {
    tslib_1.__extends(SpreadsheetDialogFormat, _super);
    function SpreadsheetDialogFormat(a) {
        var _rest = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            _rest[_i - 1] = arguments[_i];
        }
        var _this = _super.call(this) || this;
        _this._d = null;
        _this._b = null;
        _this._f = null;
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0:
                {
                    var c = _rest[0];
                    var d = _rest[1];
                    _this._d = c;
                    _this._f = d;
                    _this._b = "#1E1E1E";
                }
                break;
            case 1:
                {
                    var c = _rest[0];
                    var d = _rest[1];
                    var e = _rest[2];
                    _this._d = c;
                    _this._f = d;
                    _this._b = e;
                }
                break;
        }
        return _this;
    }
    Object.defineProperty(SpreadsheetDialogFormat.prototype, "_e", {
        get: function () {
            return this._d;
        },
        set: function (a) {
            this._d = a;
            this._a("Mask");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpreadsheetDialogFormat.prototype, "_c", {
        get: function () {
            return this._b;
        },
        set: function (a) {
            this._b = a;
            this._a("Color");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpreadsheetDialogFormat.prototype, "_g", {
        get: function () {
            return this._f;
        },
        set: function (a) {
            this._f = a;
            this._a("PreviewText");
        },
        enumerable: true,
        configurable: true
    });
    SpreadsheetDialogFormat.$t = markType(SpreadsheetDialogFormat, 'SpreadsheetDialogFormat', SpreadsheetDialogFormatBase.$);
    return SpreadsheetDialogFormat;
}(SpreadsheetDialogFormatBase));
export { SpreadsheetDialogFormat };
//# sourceMappingURL=SpreadsheetDialogFormat.js.map
