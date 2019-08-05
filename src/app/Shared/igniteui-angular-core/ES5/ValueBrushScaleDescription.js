/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { BrushScaleDescription } from "./BrushScaleDescription";
import { markType } from "./type";
/**
 * @hidden
 */
var ValueBrushScaleDescription = /** @class */ (function (_super) {
    tslib_1.__extends(ValueBrushScaleDescription, _super);
    function ValueBrushScaleDescription() {
        var _this = _super.call(this) || this;
        _this.n = 0;
        _this.m = 0;
        _this.k = false;
        _this.q = 0;
        return _this;
    }
    ValueBrushScaleDescription.prototype.get_type = function () {
        return "ValueBrushScale";
    };
    Object.defineProperty(ValueBrushScaleDescription.prototype, "minimumValue", {
        get: function () {
            return this.n;
        },
        set: function (a) {
            this.n = a;
            this.e("MinimumValue");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ValueBrushScaleDescription.prototype, "maximumValue", {
        get: function () {
            return this.m;
        },
        set: function (a) {
            this.m = a;
            this.e("MaximumValue");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ValueBrushScaleDescription.prototype, "isLogarithmic", {
        get: function () {
            return this.k;
        },
        set: function (a) {
            this.k = a;
            this.e("IsLogarithmic");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ValueBrushScaleDescription.prototype, "logarithmBase", {
        get: function () {
            return this.q;
        },
        set: function (a) {
            this.q = a;
            this.e("LogarithmBase");
        },
        enumerable: true,
        configurable: true
    });
    ValueBrushScaleDescription.$t = markType(ValueBrushScaleDescription, 'ValueBrushScaleDescription', BrushScaleDescription.$);
    return ValueBrushScaleDescription;
}(BrushScaleDescription));
export { ValueBrushScaleDescription };
//# sourceMappingURL=ValueBrushScaleDescription.js.map