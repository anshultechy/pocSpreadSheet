/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { PolarLineSeriesBaseDescription } from "./PolarLineSeriesBaseDescription";
import { markType } from "./type";
/**
 * @hidden
 */
var PolarAreaSeriesDescription = /** @class */ (function (_super) {
    tslib_1.__extends(PolarAreaSeriesDescription, _super);
    function PolarAreaSeriesDescription() {
        var _this = _super.call(this) || this;
        _this.cw = null;
        return _this;
    }
    PolarAreaSeriesDescription.prototype.get_type = function () {
        return "PolarAreaSeries";
    };
    Object.defineProperty(PolarAreaSeriesDescription.prototype, "unknownValuePlotting", {
        get: function () {
            return this.cw;
        },
        set: function (a) {
            this.cw = a;
            this.e("UnknownValuePlotting");
        },
        enumerable: true,
        configurable: true
    });
    PolarAreaSeriesDescription.$t = markType(PolarAreaSeriesDescription, 'PolarAreaSeriesDescription', PolarLineSeriesBaseDescription.$);
    return PolarAreaSeriesDescription;
}(PolarLineSeriesBaseDescription));
export { PolarAreaSeriesDescription };
//# sourceMappingURL=PolarAreaSeriesDescription.js.map