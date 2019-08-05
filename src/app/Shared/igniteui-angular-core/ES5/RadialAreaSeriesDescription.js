/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { AnchoredRadialSeriesDescription } from "./AnchoredRadialSeriesDescription";
import { markType } from "./type";
/**
 * @hidden
 */
var RadialAreaSeriesDescription = /** @class */ (function (_super) {
    tslib_1.__extends(RadialAreaSeriesDescription, _super);
    function RadialAreaSeriesDescription() {
        var _this = _super.call(this) || this;
        _this.cq = null;
        return _this;
    }
    RadialAreaSeriesDescription.prototype.get_type = function () {
        return "RadialAreaSeries";
    };
    Object.defineProperty(RadialAreaSeriesDescription.prototype, "unknownValuePlotting", {
        get: function () {
            return this.cq;
        },
        set: function (a) {
            this.cq = a;
            this.e("UnknownValuePlotting");
        },
        enumerable: true,
        configurable: true
    });
    RadialAreaSeriesDescription.$t = markType(RadialAreaSeriesDescription, 'RadialAreaSeriesDescription', AnchoredRadialSeriesDescription.$);
    return RadialAreaSeriesDescription;
}(AnchoredRadialSeriesDescription));
export { RadialAreaSeriesDescription };
//# sourceMappingURL=RadialAreaSeriesDescription.js.map