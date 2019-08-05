/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { ColorScaleDescription } from "./ColorScaleDescription";
import { markType } from "./type";
/**
 * @hidden
 */
var CustomPaletteColorScaleDescription = /** @class */ (function (_super) {
    tslib_1.__extends(CustomPaletteColorScaleDescription, _super);
    function CustomPaletteColorScaleDescription() {
        var _this = _super.call(this) || this;
        _this.l = 0;
        _this.k = 0;
        _this.i = null;
        _this.o = null;
        return _this;
    }
    CustomPaletteColorScaleDescription.prototype.get_type = function () {
        return "CustomPaletteColorScale";
    };
    Object.defineProperty(CustomPaletteColorScaleDescription.prototype, "minimumValue", {
        get: function () {
            return this.l;
        },
        set: function (a) {
            this.l = a;
            this.e("MinimumValue");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomPaletteColorScaleDescription.prototype, "maximumValue", {
        get: function () {
            return this.k;
        },
        set: function (a) {
            this.k = a;
            this.e("MaximumValue");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomPaletteColorScaleDescription.prototype, "palette", {
        get: function () {
            return this.i;
        },
        set: function (a) {
            this.i = a;
            this.e("Palette");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomPaletteColorScaleDescription.prototype, "interpolationMode", {
        get: function () {
            return this.o;
        },
        set: function (a) {
            this.o = a;
            this.e("InterpolationMode");
        },
        enumerable: true,
        configurable: true
    });
    CustomPaletteColorScaleDescription.$t = markType(CustomPaletteColorScaleDescription, 'CustomPaletteColorScaleDescription', ColorScaleDescription.$);
    return CustomPaletteColorScaleDescription;
}(ColorScaleDescription));
export { CustomPaletteColorScaleDescription };
//# sourceMappingURL=CustomPaletteColorScaleDescription.js.map