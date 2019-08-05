/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Description } from "./Description";
import { markType } from "./type";
/**
 * @hidden
 */
var ChartSeriesEventArgsDescription = /** @class */ (function (_super) {
    tslib_1.__extends(ChartSeriesEventArgsDescription, _super);
    function ChartSeriesEventArgsDescription() {
        var _this = _super.call(this) || this;
        _this.f = null;
        return _this;
    }
    ChartSeriesEventArgsDescription.prototype.get_type = function () {
        return "ChartSeriesEventArgs";
    };
    Object.defineProperty(ChartSeriesEventArgsDescription.prototype, "type", {
        get: function () {
            return this.get_type();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChartSeriesEventArgsDescription.prototype, "series", {
        get: function () {
            return this.f;
        },
        set: function (a) {
            this.f = a;
            this.e("Series");
        },
        enumerable: true,
        configurable: true
    });
    ChartSeriesEventArgsDescription.$t = markType(ChartSeriesEventArgsDescription, 'ChartSeriesEventArgsDescription', Description.$);
    return ChartSeriesEventArgsDescription;
}(Description));
export { ChartSeriesEventArgsDescription };
//# sourceMappingURL=ChartSeriesEventArgsDescription.js.map