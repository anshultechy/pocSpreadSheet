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
var PolarSplineAreaSeriesDescription = /** @class */ (function (_super) {
    tslib_1.__extends(PolarSplineAreaSeriesDescription, _super);
    function PolarSplineAreaSeriesDescription() {
        var _this = _super.call(this) || this;
        _this.cw = 0;
        return _this;
    }
    PolarSplineAreaSeriesDescription.prototype.get_type = function () {
        return "PolarSplineAreaSeries";
    };
    Object.defineProperty(PolarSplineAreaSeriesDescription.prototype, "stiffness", {
        get: function () {
            return this.cw;
        },
        set: function (a) {
            this.cw = a;
            this.e("Stiffness");
        },
        enumerable: true,
        configurable: true
    });
    PolarSplineAreaSeriesDescription.$t = markType(PolarSplineAreaSeriesDescription, 'PolarSplineAreaSeriesDescription', PolarLineSeriesBaseDescription.$);
    return PolarSplineAreaSeriesDescription;
}(PolarLineSeriesBaseDescription));
export { PolarSplineAreaSeriesDescription };
//# sourceMappingURL=PolarSplineAreaSeriesDescription.js.map