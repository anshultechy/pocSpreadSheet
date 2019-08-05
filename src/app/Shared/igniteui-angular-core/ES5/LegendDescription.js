/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { LegendBaseDescription } from "./LegendBaseDescription";
import { markType } from "./type";
/**
 * @hidden
 */
var LegendDescription = /** @class */ (function (_super) {
    tslib_1.__extends(LegendDescription, _super);
    function LegendDescription() {
        var _this = _super.call(this) || this;
        _this.w = null;
        _this.s = null;
        _this.t = null;
        _this.u = null;
        _this.v = null;
        return _this;
    }
    Object.defineProperty(LegendDescription.prototype, "width", {
        get: function () {
            return this.w;
        },
        set: function (a) {
            this.w = a;
            this.e("Width");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LegendDescription.prototype, "height", {
        get: function () {
            return this.s;
        },
        set: function (a) {
            this.s = a;
            this.e("Height");
        },
        enumerable: true,
        configurable: true
    });
    LegendDescription.prototype.get_type = function () {
        return "Legend";
    };
    Object.defineProperty(LegendDescription.prototype, "orientation", {
        get: function () {
            return this.t;
        },
        set: function (a) {
            this.t = a;
            this.e("Orientation");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LegendDescription.prototype, "textColor", {
        get: function () {
            return this.u;
        },
        set: function (a) {
            this.u = a;
            this.e("TextColor");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LegendDescription.prototype, "textStyle", {
        get: function () {
            return this.v;
        },
        set: function (a) {
            this.v = a;
            this.e("TextStyle");
        },
        enumerable: true,
        configurable: true
    });
    LegendDescription.$t = markType(LegendDescription, 'LegendDescription', LegendBaseDescription.$);
    return LegendDescription;
}(LegendBaseDescription));
export { LegendDescription };
//# sourceMappingURL=LegendDescription.js.map