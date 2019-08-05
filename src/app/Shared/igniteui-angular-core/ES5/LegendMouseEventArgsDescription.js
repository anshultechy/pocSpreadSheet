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
var LegendMouseEventArgsDescription = /** @class */ (function (_super) {
    tslib_1.__extends(LegendMouseEventArgsDescription, _super);
    function LegendMouseEventArgsDescription() {
        var _this = _super.call(this) || this;
        _this.f = null;
        _this.g = null;
        return _this;
    }
    LegendMouseEventArgsDescription.prototype.get_type = function () {
        return "LegendMouseEventArgs";
    };
    Object.defineProperty(LegendMouseEventArgsDescription.prototype, "type", {
        get: function () {
            return this.get_type();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LegendMouseEventArgsDescription.prototype, "itemRef", {
        get: function () {
            return this.f;
        },
        set: function (a) {
            this.f = a;
            this.e("ItemRef");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LegendMouseEventArgsDescription.prototype, "legendItemRef", {
        get: function () {
            return this.g;
        },
        set: function (a) {
            this.g = a;
            this.e("LegendItemRef");
        },
        enumerable: true,
        configurable: true
    });
    LegendMouseEventArgsDescription.$t = markType(LegendMouseEventArgsDescription, 'LegendMouseEventArgsDescription', Description.$);
    return LegendMouseEventArgsDescription;
}(Description));
export { LegendMouseEventArgsDescription };
//# sourceMappingURL=LegendMouseEventArgsDescription.js.map