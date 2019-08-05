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
var BubbleSeriesDescription = /** @class */ (function (_super) {
    tslib_1.__extends(BubbleSeriesDescription, _super);
    function BubbleSeriesDescription() {
        var _this = _super.call(this) || this;
        _this.c0 = null;
        _this.cw = null;
        _this.cz = null;
        _this.cy = null;
        _this.cu = null;
        return _this;
    }
    BubbleSeriesDescription.prototype.get_type = function () {
        return "BubbleSeries";
    };
    Object.defineProperty(BubbleSeriesDescription.prototype, "radiusMemberPath", {
        get: function () {
            return this.c0;
        },
        set: function (a) {
            this.c0 = a;
            this.e("RadiusMemberPath");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BubbleSeriesDescription.prototype, "radiusScale", {
        get: function () {
            return this.cw;
        },
        set: function (a) {
            this.cw = a;
            this.e("RadiusScale");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BubbleSeriesDescription.prototype, "labelMemberPath", {
        get: function () {
            return this.cz;
        },
        set: function (a) {
            this.cz = a;
            this.e("LabelMemberPath");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BubbleSeriesDescription.prototype, "fillMemberPath", {
        get: function () {
            return this.cy;
        },
        set: function (a) {
            this.cy = a;
            this.e("FillMemberPath");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BubbleSeriesDescription.prototype, "fillScale", {
        get: function () {
            return this.cu;
        },
        set: function (a) {
            this.cu = a;
            this.e("FillScale");
        },
        enumerable: true,
        configurable: true
    });
    BubbleSeriesDescription.$t = markType(BubbleSeriesDescription, 'BubbleSeriesDescription', ScatterBaseDescription.$);
    return BubbleSeriesDescription;
}(ScatterBaseDescription));
export { BubbleSeriesDescription };
//# sourceMappingURL=BubbleSeriesDescription.js.map