/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { StackedSeriesBaseDescription } from "./StackedSeriesBaseDescription";
import { markType } from "./type";
/**
 * @hidden
 */
var VerticalStackedSeriesBaseDescription = /** @class */ (function (_super) {
    tslib_1.__extends(VerticalStackedSeriesBaseDescription, _super);
    function VerticalStackedSeriesBaseDescription() {
        var _this = _super.call(this) || this;
        _this.cs = null;
        _this.ct = null;
        return _this;
    }
    VerticalStackedSeriesBaseDescription.prototype.get_type = function () {
        return "VerticalStackedSeriesBase";
    };
    Object.defineProperty(VerticalStackedSeriesBaseDescription.prototype, "xAxisRef", {
        get: function () {
            return this.cs;
        },
        set: function (a) {
            this.cs = a;
            this.e("XAxisRef");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VerticalStackedSeriesBaseDescription.prototype, "yAxisRef", {
        get: function () {
            return this.ct;
        },
        set: function (a) {
            this.ct = a;
            this.e("YAxisRef");
        },
        enumerable: true,
        configurable: true
    });
    VerticalStackedSeriesBaseDescription.$t = markType(VerticalStackedSeriesBaseDescription, 'VerticalStackedSeriesBaseDescription', StackedSeriesBaseDescription.$);
    return VerticalStackedSeriesBaseDescription;
}(StackedSeriesBaseDescription));
export { VerticalStackedSeriesBaseDescription };
//# sourceMappingURL=VerticalStackedSeriesBaseDescription.js.map