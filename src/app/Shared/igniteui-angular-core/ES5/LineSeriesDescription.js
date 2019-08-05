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
var LineSeriesDescription = /** @class */ (function (_super) {
    tslib_1.__extends(LineSeriesDescription, _super);
    function LineSeriesDescription() {
        var _this = _super.call(this) || this;
        _this.c4 = null;
        return _this;
    }
    LineSeriesDescription.prototype.get_type = function () {
        return "LineSeries";
    };
    Object.defineProperty(LineSeriesDescription.prototype, "unknownValuePlotting", {
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
    LineSeriesDescription.$t = markType(LineSeriesDescription, 'LineSeriesDescription', HorizontalAnchoredCategorySeriesDescription.$);
    return LineSeriesDescription;
}(HorizontalAnchoredCategorySeriesDescription));
export { LineSeriesDescription };
//# sourceMappingURL=LineSeriesDescription.js.map