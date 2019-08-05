/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { EventArgs, markType } from "./type";
/**
 * @hidden
 */
var DoubleValueChangedEventArgs = /** @class */ (function (_super) {
    tslib_1.__extends(DoubleValueChangedEventArgs, _super);
    function DoubleValueChangedEventArgs(a, b) {
        var _this = _super.call(this) || this;
        _this._oldValue = 0;
        _this._newValue = 0;
        _this.oldValue = a;
        _this.newValue = b;
        return _this;
    }
    Object.defineProperty(DoubleValueChangedEventArgs.prototype, "oldValue", {
        get: function () {
            return this._oldValue;
        },
        set: function (a) {
            this._oldValue = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DoubleValueChangedEventArgs.prototype, "newValue", {
        get: function () {
            return this._newValue;
        },
        set: function (a) {
            this._newValue = a;
        },
        enumerable: true,
        configurable: true
    });
    DoubleValueChangedEventArgs.$t = markType(DoubleValueChangedEventArgs, 'DoubleValueChangedEventArgs', EventArgs.$);
    return DoubleValueChangedEventArgs;
}(EventArgs));
export { DoubleValueChangedEventArgs };
//# sourceMappingURL=DoubleValueChangedEventArgs.js.map