/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { HorizontalAnchoredCategorySeriesDescription } from "./HorizontalAnchoredCategorySeriesDescription";
import { markType } from "./type";
/**
 * @hidden
 */
var AreaSeriesDescription = /** @class */ (function (_super) {
    tslib_1.__extends(AreaSeriesDescription, _super);
    function AreaSeriesDescription() {
        var _this = _super.call(this) || this;
        _this.c4 = null;
        return _this;
    }
    AreaSeriesDescription.prototype.get_type = function () {
        return "AreaSeries";
    };
    Object.defineProperty(AreaSeriesDescription.prototype, "unknownValuePlotting", {
        get: function () {
            return this.c4;
        },
        set: function (a) {
            this.c4 = a;
            this.e("UnknownValuePlotting");
        },
        enumerable: true,
        configurable: true
    });
    AreaSeriesDescription.$t = markType(AreaSeriesDescription, 'AreaSeriesDescription', HorizontalAnchoredCategorySeriesDescription.$);
    return AreaSeriesDescription;
}(HorizontalAnchoredCategorySeriesDescription));
export { AreaSeriesDescription };
//# sourceMappingURL=AreaSeriesDescription.js.map