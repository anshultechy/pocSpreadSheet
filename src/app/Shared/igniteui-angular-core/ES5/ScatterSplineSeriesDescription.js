/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { ScatterBaseDescription } from "./ScatterBaseDescription";
import { markType } from "./type";
/**
 * @hidden
 */
var ScatterSplineSeriesDescription = /** @class */ (function (_super) {
    tslib_1.__extends(ScatterSplineSeriesDescription, _super);
    function ScatterSplineSeriesDescription() {
        var _this = _super.call(this) || this;
        _this.cu = 0;
        return _this;
    }
    ScatterSplineSeriesDescription.prototype.get_type = function () {
        return "ScatterSplineSeries";
    };
    Object.defineProperty(ScatterSplineSeriesDescription.prototype, "stiffness", {
        get: function () {
            return this.cu;
        },
        set: function (a) {
            this.cu = a;
            this.e("Stiffness");
        },
        enumerable: true,
        configurable: true
    });
    ScatterSplineSeriesDescription.$t = markType(ScatterSplineSeriesDescription, 'ScatterSplineSeriesDescription', ScatterBaseDescription.$);
    return ScatterSplineSeriesDescription;
}(ScatterBaseDescription));
export { ScatterSplineSeriesDescription };
//# sourceMappingURL=ScatterSplineSeriesDescription.js.map