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
var WaterfallSeriesDescription = /** @class */ (function (_super) {
    tslib_1.__extends(WaterfallSeriesDescription, _super);
    function WaterfallSeriesDescription() {
        var _this = _super.call(this) || this;
        _this.c8 = null;
        _this.c4 = 0;
        _this.c5 = 0;
        _this.c9 = null;
        return _this;
    }
    WaterfallSeriesDescription.prototype.get_type = function () {
        return "WaterfallSeries";
    };
    Object.defineProperty(WaterfallSeriesDescription.prototype, "negativeBrush", {
        get: function () {
            return this.c8;
        },
        set: function (a) {
            this.c8 = a;
            this.e("NegativeBrush");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WaterfallSeriesDescription.prototype, "radiusX", {
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
    Object.defineProperty(WaterfallSeriesDescription.prototype, "radiusY", {
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
    Object.defineProperty(WaterfallSeriesDescription.prototype, "negativeOutline", {
        get: function () {
            return this.c9;
        },
        set: function (a) {
            this.c9 = a;
            this.e("NegativeOutline");
        },
        enumerable: true,
        configurable: true
    });
    WaterfallSeriesDescription.$t = markType(WaterfallSeriesDescription, 'WaterfallSeriesDescription', HorizontalAnchoredCategorySeriesDescription.$);
    return WaterfallSeriesDescription;
}(HorizontalAnchoredCategorySeriesDescription));
export { WaterfallSeriesDescription };
//# sourceMappingURL=WaterfallSeriesDescription.js.map