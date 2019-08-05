/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, markType } from "./type";
import { IVisualData_$type } from "./IVisualData";
/**
 * @hidden
 */
var GradientStopAppearanceData = /** @class */ (function (_super) {
    tslib_1.__extends(GradientStopAppearanceData, _super);
    function GradientStopAppearanceData() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._colorValue = null;
        _this._offset = 0;
        return _this;
    }
    Object.defineProperty(GradientStopAppearanceData.prototype, "colorValue", {
        get: function () {
            return this._colorValue;
        },
        set: function (a) {
            this._colorValue = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GradientStopAppearanceData.prototype, "offset", {
        get: function () {
            return this._offset;
        },
        set: function (a) {
            this._offset = a;
        },
        enumerable: true,
        configurable: true
    });
    GradientStopAppearanceData.prototype.serialize = function () {
        return "{ " + "colorValue: " + (this.colorValue != null ? this.colorValue.serialize() : "null") + ", offset: " + this.offset + " }";
    };
    GradientStopAppearanceData.$t = markType(GradientStopAppearanceData, 'GradientStopAppearanceData', Base.$, [IVisualData_$type]);
    return GradientStopAppearanceData;
}(Base));
export { GradientStopAppearanceData };
//# sourceMappingURL=GradientStopAppearanceData.js.map