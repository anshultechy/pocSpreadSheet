/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Description } from "./Description";
import { markType } from "./type";
/**
 * @hidden
 */
var PropertyUpdatedEventArgsDescription = /** @class */ (function (_super) {
    tslib_1.__extends(PropertyUpdatedEventArgsDescription, _super);
    function PropertyUpdatedEventArgsDescription() {
        var _this = _super.call(this) || this;
        _this.h = null;
        _this.g = null;
        _this.f = null;
        return _this;
    }
    PropertyUpdatedEventArgsDescription.prototype.get_type = function () {
        return "PropertyUpdatedEventArgs";
    };
    Object.defineProperty(PropertyUpdatedEventArgsDescription.prototype, "type", {
        get: function () {
            return this.get_type();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PropertyUpdatedEventArgsDescription.prototype, "propertyName", {
        get: function () {
            return this.h;
        },
        set: function (a) {
            this.h = a;
            this.e("PropertyName");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PropertyUpdatedEventArgsDescription.prototype, "oldValueRef", {
        get: function () {
            return this.g;
        },
        set: function (a) {
            this.g = a;
            this.e("OldValueRef");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PropertyUpdatedEventArgsDescription.prototype, "newValueRef", {
        get: function () {
            return this.f;
        },
        set: function (a) {
            this.f = a;
            this.e("NewValueRef");
        },
        enumerable: true,
        configurable: true
    });
    PropertyUpdatedEventArgsDescription.$t = markType(PropertyUpdatedEventArgsDescription, 'PropertyUpdatedEventArgsDescription', Description.$);
    return PropertyUpdatedEventArgsDescription;
}(Description));
export { PropertyUpdatedEventArgsDescription };
//# sourceMappingURL=PropertyUpdatedEventArgsDescription.js.map