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
var SplineSeriesBaseDescription = /** @class */ (function (_super) {
    tslib_1.__extends(SplineSeriesBaseDescription, _super);
    function SplineSeriesBaseDescription() {
        var _this = _super.call(this) || this;
        _this.c4 = null;
        return _this;
    }
    SplineSeriesBaseDescription.prototype.get_type = function () {
        return "SplineSeriesBase";
    };
    Object.defineProperty(SplineSeriesBaseDescription.prototype, "splineType", {
        get: function () {
            return this.c4;
        },
        set: function (a) {
            this.c4 = a;
            this.e("SplineType");
        },
        enumerable: true,
        configurable: true
    });
    SplineSeriesBaseDescription.$t = markType(SplineSeriesBaseDescription, 'SplineSeriesBaseDescription', HorizontalAnchoredCategorySeriesDescription.$);
    return SplineSeriesBaseDescription;
}(HorizontalAnchoredCategorySeriesDescription));
export { SplineSeriesBaseDescription };
//# sourceMappingURL=SplineSeriesBaseDescription.js.map