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
var ColumnSeriesDescription = /** @class */ (function (_super) {
    tslib_1.__extends(ColumnSeriesDescription, _super);
    function ColumnSeriesDescription() {
        var _this = _super.call(this) || this;
        _this.c4 = 0;
        _this.c5 = 0;
        _this.c8 = null;
        return _this;
    }
    ColumnSeriesDescription.prototype.get_type = function () {
        return "ColumnSeries";
    };
    Object.defineProperty(ColumnSeriesDescription.prototype, "radiusX", {
        get: function () {
            return this.c4;
        },
        set: function (a) {
            this.c4 = a;
            this.e("RadiusX");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ColumnSeriesDescription.prototype, "radiusY", {
        get: function () {
            return this.c5;
        },
        set: function (a) {
            this.c5 = a;
            this.e("RadiusY");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ColumnSeriesDescription.prototype, "consolidatedColumnVerticalPosition", {
        get: function () {
            return this.c8;
        },
        set: function (a) {
            this.c8 = a;
            this.e("ConsolidatedColumnVerticalPosition");
        },
        enumerable: true,
        configurable: true
    });
    ColumnSeriesDescription.$t = markType(ColumnSeriesDescription, 'ColumnSeriesDescription', HorizontalAnchoredCategorySeriesDescription.$);
    return ColumnSeriesDescription;
}(HorizontalAnchoredCategorySeriesDescription));
export { ColumnSeriesDescription };
//# sourceMappingURL=ColumnSeriesDescription.js.map