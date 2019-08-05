/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { EventArgs, markType } from "../../igniteui-angular-core/ES5/type";
import { SpreadsheetCell } from "./SpreadsheetCell";
/**
 * @hidden
 */
var SpreadsheetEditModeValidationErrorEventArgs = /** @class */ (function (_super) {
    tslib_1.__extends(SpreadsheetEditModeValidationErrorEventArgs, _super);
    function SpreadsheetEditModeValidationErrorEventArgs(a, b, c) {
        var _this = _super.call(this) || this;
        _this._action = 0;
        _this._canStayInEditMode = false;
        _this._cell = new SpreadsheetCell();
        _this._validationRule = null;
        _this.action = 0;
        _this.cell = a;
        _this.validationRule = b;
        _this.canStayInEditMode = !c;
        return _this;
    }
    Object.defineProperty(SpreadsheetEditModeValidationErrorEventArgs.prototype, "action", {
        get: function () {
            return this._action;
        },
        set: function (a) {
            this._action = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpreadsheetEditModeValidationErrorEventArgs.prototype, "canStayInEditMode", {
        get: function () {
            return this._canStayInEditMode;
        },
        set: function (a) {
            this._canStayInEditMode = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpreadsheetEditModeValidationErrorEventArgs.prototype, "cell", {
        get: function () {
            return this._cell;
        },
        set: function (a) {
            this._cell = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpreadsheetEditModeValidationErrorEventArgs.prototype, "validationRule", {
        get: function () {
            return this._validationRule;
        },
        set: function (a) {
            this._validationRule = a;
        },
        enumerable: true,
        configurable: true
    });
    SpreadsheetEditModeValidationErrorEventArgs.$t = markType(SpreadsheetEditModeValidationErrorEventArgs, 'SpreadsheetEditModeValidationErrorEventArgs', EventArgs.$);
    return SpreadsheetEditModeValidationErrorEventArgs;
}(EventArgs));
export { SpreadsheetEditModeValidationErrorEventArgs };
//# sourceMappingURL=SpreadsheetEditModeValidationErrorEventArgs.js.map
