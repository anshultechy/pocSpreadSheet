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
var ScatterLineSeriesDescription = /** @class */ (function (_super) {
    tslib_1.__extends(ScatterLineSeriesDescription, _super);
    function ScatterLineSeriesDescription() {
        var _this = _super.call(this) || this;
        _this.cu = null;
        return _this;
    }
    ScatterLineSeriesDescription.prototype.get_type = function () {
        return "ScatterLineSeries";
    };
    Object.defineProperty(ScatterLineSeriesDescription.prototype, "unknownValuePlotting", {
        get: function () {
            return this.cu;
        },
        set: function (a) {
            this.cu = a;
            this.e("UnknownValuePlotting");
        },
        enumerable: true,
        configurable: true
    });
    ScatterLineSeriesDescription.$t = markType(ScatterLineSeriesDescription, 'ScatterLineSeriesDescription', ScatterBaseDescription.$);
    return ScatterLineSeriesDescription;
}(ScatterBaseDescription));
export { ScatterLineSeriesDescription };
//# sourceMappingURL=ScatterLineSeriesDescription.js.map