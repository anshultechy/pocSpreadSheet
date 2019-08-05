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
var AxisRangeChangedEventArgsDescription = /** @class */ (function (_super) {
    tslib_1.__extends(AxisRangeChangedEventArgsDescription, _super);
    function AxisRangeChangedEventArgsDescription() {
        var _this = _super.call(this) || this;
        _this.i = 0;
        _this.g = 0;
        _this.h = 0;
        _this.f = 0;
        return _this;
    }
    AxisRangeChangedEventArgsDescription.prototype.get_type = function () {
        return "AxisRangeChangedEventArgs";
    };
    Object.defineProperty(AxisRangeChangedEventArgsDescription.prototype, "type", {
        get: function () {
            return this.get_type();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AxisRangeChangedEventArgsDescription.prototype, "oldMinimumValue", {
        get: function () {
            return this.i;
        },
        set: function (a) {
            this.i = a;
            this.e("OldMinimumValue");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AxisRangeChangedEventArgsDescription.prototype, "minimumValue", {
        get: function () {
            return this.g;
        },
        set: function (a) {
            this.g = a;
            this.e("MinimumValue");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AxisRangeChangedEventArgsDescription.prototype, "oldMaximumValue", {
        get: function () {
            return this.h;
        },
        set: function (a) {
            this.h = a;
            this.e("OldMaximumValue");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AxisRangeChangedEventArgsDescription.prototype, "maximumValue", {
        get: function () {
            return this.f;
        },
        set: function (a) {
            this.f = a;
            this.e("MaximumValue");
        },
        enumerable: true,
        configurable: true
    });
    AxisRangeChangedEventArgsDescription.$t = markType(AxisRangeChangedEventArgsDescription, 'AxisRangeChangedEventArgsDescription', Description.$);
    return AxisRangeChangedEventArgsDescription;
}(Description));
export { AxisRangeChangedEventArgsDescription };
//# sourceMappingURL=AxisRangeChangedEventArgsDescription.js.map