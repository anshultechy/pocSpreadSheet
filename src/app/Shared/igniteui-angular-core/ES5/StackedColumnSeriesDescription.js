/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { HorizontalStackedSeriesBaseDescription } from "./HorizontalStackedSeriesBaseDescription";
import { markType } from "./type";
/**
 * @hidden
 */
var StackedColumnSeriesDescription = /** @class */ (function (_super) {
    tslib_1.__extends(StackedColumnSeriesDescription, _super);
    function StackedColumnSeriesDescription() {
        var _this = _super.call(this) || this;
        _this.cw = 0;
        _this.cx = 0;
        return _this;
    }
    StackedColumnSeriesDescription.prototype.get_type = function () {
        return "StackedColumnSeries";
    };
    Object.defineProperty(StackedColumnSeriesDescription.prototype, "radiusX", {
        get: function () {
            return this.cw;
        },
        set: function (a) {
            this.cw = a;
            this.e("RadiusX");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StackedColumnSeriesDescription.prototype, "radiusY", {
        get: function () {
            return this.cx;
        },
        set: function (a) {
            this.cx = a;
            this.e("RadiusY");
        },
        enumerable: true,
        configurable: true
    });
    StackedColumnSeriesDescription.$t = markType(StackedColumnSeriesDescription, 'StackedColumnSeriesDescription', HorizontalStackedSeriesBaseDescription.$);
    return StackedColumnSeriesDescription;
}(HorizontalStackedSeriesBaseDescription));
export { StackedColumnSeriesDescription };
//# sourceMappingURL=StackedColumnSeriesDescription.js.map