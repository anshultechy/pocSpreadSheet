/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { PieChartBaseDescription } from "./PieChartBaseDescription";
import { markType } from "./type";
/**
 * @hidden
 */
var PieChartDescription = /** @class */ (function (_super) {
    tslib_1.__extends(PieChartDescription, _super);
    function PieChartDescription() {
        var _this = _super.call(this) || this;
        _this.ct = null;
        _this.cr = null;
        _this.cs = null;
        _this.cq = null;
        return _this;
    }
    Object.defineProperty(PieChartDescription.prototype, "width", {
        get: function () {
            return this.ct;
        },
        set: function (a) {
            this.ct = a;
            this.e("Width");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PieChartDescription.prototype, "height", {
        get: function () {
            return this.cr;
        },
        set: function (a) {
            this.cr = a;
            this.e("Height");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PieChartDescription.prototype, "legendRef", {
        get: function () {
            return this.cs;
        },
        set: function (a) {
            this.cs = a;
            this.e("LegendRef");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PieChartDescription.prototype, "background", {
        get: function () {
            return this.cq;
        },
        set: function (a) {
            this.cq = a;
            this.e("Background");
        },
        enumerable: true,
        configurable: true
    });
    PieChartDescription.prototype.get_type = function () {
        return "PieChart";
    };
    PieChartDescription.$t = markType(PieChartDescription, 'PieChartDescription', PieChartBaseDescription.$);
    return PieChartDescription;
}(PieChartBaseDescription));
export { PieChartDescription };
//# sourceMappingURL=PieChartDescription.js.map