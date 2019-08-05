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
var LegendMouseButtonEventArgsDescription = /** @class */ (function (_super) {
    tslib_1.__extends(LegendMouseButtonEventArgsDescription, _super);
    function LegendMouseButtonEventArgsDescription() {
        var _this = _super.call(this) || this;
        _this.f = false;
        _this.h = null;
        _this.i = null;
        return _this;
    }
    LegendMouseButtonEventArgsDescription.prototype.get_type = function () {
        return "LegendMouseButtonEventArgs";
    };
    Object.defineProperty(LegendMouseButtonEventArgsDescription.prototype, "type", {
        get: function () {
            return this.get_type();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LegendMouseButtonEventArgsDescription.prototype, "handled", {
        get: function () {
            return this.f;
        },
        set: function (a) {
            this.f = a;
            this.e("Handled");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LegendMouseButtonEventArgsDescription.prototype, "itemRef", {
        get: function () {
            return this.h;
        },
        set: function (a) {
            this.h = a;
            this.e("ItemRef");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LegendMouseButtonEventArgsDescription.prototype, "legendItemRef", {
        get: function () {
            return this.i;
        },
        set: function (a) {
            this.i = a;
            this.e("LegendItemRef");
        },
        enumerable: true,
        configurable: true
    });
    LegendMouseButtonEventArgsDescription.$t = markType(LegendMouseButtonEventArgsDescription, 'LegendMouseButtonEventArgsDescription', Description.$);
    return LegendMouseButtonEventArgsDescription;
}(Description));
export { LegendMouseButtonEventArgsDescription };
//# sourceMappingURL=LegendMouseButtonEventArgsDescription.js.map