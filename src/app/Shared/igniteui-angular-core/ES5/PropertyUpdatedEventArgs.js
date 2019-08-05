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
var PropertyUpdatedEventArgs = /** @class */ (function (_super) {
    tslib_1.__extends(PropertyUpdatedEventArgs, _super);
    function PropertyUpdatedEventArgs(a, b, c) {
        var _this = _super.call(this) || this;
        _this._propertyName = null;
        _this._oldValue = null;
        _this._newValue = null;
        _this.propertyName = a;
        _this.oldValue = b;
        _this.newValue = c;
        return _this;
    }
    Object.defineProperty(PropertyUpdatedEventArgs.prototype, "propertyName", {
        get: function () {
            return this._propertyName;
        },
        set: function (a) {
            this._propertyName = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PropertyUpdatedEventArgs.prototype, "oldValue", {
        get: function () {
            return this._oldValue;
        },
        set: function (a) {
            this._oldValue = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PropertyUpdatedEventArgs.prototype, "newValue", {
        get: function () {
            return this._newValue;
        },
        set: function (a) {
            this._newValue = a;
        },
        enumerable: true,
        configurable: true
    });
    PropertyUpdatedEventArgs.$t = markType(PropertyUpdatedEventArgs, 'PropertyUpdatedEventArgs', EventArgs.$);
    return PropertyUpdatedEventArgs;
}(EventArgs));
export { PropertyUpdatedEventArgs };
//# sourceMappingURL=PropertyUpdatedEventArgs.js.map