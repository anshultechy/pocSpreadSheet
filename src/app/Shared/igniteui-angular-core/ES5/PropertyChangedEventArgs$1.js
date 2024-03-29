/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { PropertyChangedEventArgs, markType } from "./type";
/**
 * @hidden
 */
var PropertyChangedEventArgs$1 = /** @class */ (function (_super) {
    tslib_1.__extends(PropertyChangedEventArgs$1, _super);
    function PropertyChangedEventArgs$1($t, a, b, c) {
        var _this = _super.call(this, a) || this;
        _this.$t = null;
        _this._oldValue = null;
        _this._newValue = null;
        _this.$t = $t;
        _this.$type = _this.$type.specialize(_this.$t);
        _this.oldValue = b;
        _this.newValue = c;
        return _this;
    }
    Object.defineProperty(PropertyChangedEventArgs$1.prototype, "oldValue", {
        get: function () {
            return this._oldValue;
        },
        set: function (a) {
            this._oldValue = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PropertyChangedEventArgs$1.prototype, "newValue", {
        get: function () {
            return this._newValue;
        },
        set: function (a) {
            this._newValue = a;
        },
        enumerable: true,
        configurable: true
    });
    PropertyChangedEventArgs$1.$t = markType(PropertyChangedEventArgs$1, 'PropertyChangedEventArgs$1', PropertyChangedEventArgs.$);
    return PropertyChangedEventArgs$1;
}(PropertyChangedEventArgs));
export { PropertyChangedEventArgs$1 };
//# sourceMappingURL=PropertyChangedEventArgs$1.js.map