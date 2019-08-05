/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { BrushAppearanceData } from "./BrushAppearanceData";
import { markType } from "./type";
/**
 * @hidden
 */
var SolidBrushAppearanceData = /** @class */ (function (_super) {
    tslib_1.__extends(SolidBrushAppearanceData, _super);
    function SolidBrushAppearanceData() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._colorValue = null;
        return _this;
    }
    SolidBrushAppearanceData.prototype.get_type = function () {
        return "solid";
    };
    Object.defineProperty(SolidBrushAppearanceData.prototype, "type", {
        get: function () {
            return this.get_type();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SolidBrushAppearanceData.prototype, "colorValue", {
        get: function () {
            return this._colorValue;
        },
        set: function (a) {
            this._colorValue = a;
        },
        enumerable: true,
        configurable: true
    });
    SolidBrushAppearanceData.prototype.a = function () {
        return "colorValue: " + (this.colorValue != null ? this.colorValue.serialize() : "null");
    };
    SolidBrushAppearanceData.$t = markType(SolidBrushAppearanceData, 'SolidBrushAppearanceData', BrushAppearanceData.$);
    return SolidBrushAppearanceData;
}(BrushAppearanceData));
export { SolidBrushAppearanceData };
//# sourceMappingURL=SolidBrushAppearanceData.js.map