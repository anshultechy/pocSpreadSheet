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
var RadialColumnSeriesDescription = /** @class */ (function (_super) {
    tslib_1.__extends(RadialColumnSeriesDescription, _super);
    function RadialColumnSeriesDescription() {
        var _this = _super.call(this) || this;
        _this.cq = 0;
        _this.cr = 0;
        return _this;
    }
    RadialColumnSeriesDescription.prototype.get_type = function () {
        return "RadialColumnSeries";
    };
    Object.defineProperty(RadialColumnSeriesDescription.prototype, "radiusX", {
        get: function () {
            return this.cq;
        },
        set: function (a) {
            this.cq = a;
            this.e("RadiusX");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RadialColumnSeriesDescription.prototype, "radiusY", {
        get: function () {
            return this.cr;
        },
        set: function (a) {
            this.cr = a;
            this.e("RadiusY");
        },
        enumerable: true,
        configurable: true
    });
    RadialColumnSeriesDescription.$t = markType(RadialColumnSeriesDescription, 'RadialColumnSeriesDescription', AnchoredRadialSeriesDescription.$);
    return RadialColumnSeriesDescription;
}(AnchoredRadialSeriesDescription));
export { RadialColumnSeriesDescription };
//# sourceMappingURL=RadialColumnSeriesDescription.js.map