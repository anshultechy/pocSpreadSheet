/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { CategorySeriesDescription } from "./CategorySeriesDescription";
import { markType } from "./type";
/**
 * @hidden
 */
var StackedSeriesBaseDescription = /** @class */ (function (_super) {
    tslib_1.__extends(StackedSeriesBaseDescription, _super);
    function StackedSeriesBaseDescription() {
        var _this = _super.call(this) || this;
        _this.cm = false;
        _this.cn = false;
        _this.cq = null;
        _this.ck = null;
        return _this;
    }
    StackedSeriesBaseDescription.prototype.get_type = function () {
        return "StackedSeriesBase";
    };
    Object.defineProperty(StackedSeriesBaseDescription.prototype, "autoGenerateSeries", {
        get: function () {
            return this.cm;
        },
        set: function (a) {
            this.cm = a;
            this.e("AutoGenerateSeries");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StackedSeriesBaseDescription.prototype, "reverseLegendOrder", {
        get: function () {
            return this.cn;
        },
        set: function (a) {
            this.cn = a;
            this.e("ReverseLegendOrder");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StackedSeriesBaseDescription.prototype, "SeriesCreatedRef", {
        get: function () {
            return this.cq;
        },
        set: function (a) {
            this.cq = a;
            this.e("SeriesCreatedRef");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StackedSeriesBaseDescription.prototype, "series", {
        get: function () {
            return this.ck;
        },
        set: function (a) {
            this.ck = a;
            this.e("Series");
        },
        enumerable: true,
        configurable: true
    });
    StackedSeriesBaseDescription.$t = markType(StackedSeriesBaseDescription, 'StackedSeriesBaseDescription', CategorySeriesDescription.$);
    return StackedSeriesBaseDescription;
}(CategorySeriesDescription));
export { StackedSeriesBaseDescription };
//# sourceMappingURL=StackedSeriesBaseDescription.js.map