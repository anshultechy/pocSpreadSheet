/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { AnnotationLayerDescription } from "./AnnotationLayerDescription";
import { markType } from "./type";
/**
 * @hidden
 */
var FinalValueLayerDescription = /** @class */ (function (_super) {
    tslib_1.__extends(FinalValueLayerDescription, _super);
    function FinalValueLayerDescription() {
        var _this = _super.call(this) || this;
        _this.ci = null;
        _this.ch = null;
        _this.cg = null;
        _this.ce = null;
        _this.cc = 0;
        _this.cf = null;
        _this.b3 = 0;
        _this.b5 = 0;
        _this.b4 = 0;
        _this.b2 = 0;
        _this.b6 = 0;
        return _this;
    }
    FinalValueLayerDescription.prototype.get_type = function () {
        return "FinalValueLayer";
    };
    Object.defineProperty(FinalValueLayerDescription.prototype, "targetSeriesRef", {
        get: function () {
            return this.ci;
        },
        set: function (a) {
            this.ci = a;
            this.e("TargetSeriesRef");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FinalValueLayerDescription.prototype, "finalValueSelectionMode", {
        get: function () {
            return this.ch;
        },
        set: function (a) {
            this.ch = a;
            this.e("FinalValueSelectionMode");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FinalValueLayerDescription.prototype, "axisAnnotationTextColor", {
        get: function () {
            return this.cg;
        },
        set: function (a) {
            this.cg = a;
            this.e("AxisAnnotationTextColor");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FinalValueLayerDescription.prototype, "axisAnnotationBackground", {
        get: function () {
            return this.ce;
        },
        set: function (a) {
            this.ce = a;
            this.e("AxisAnnotationBackground");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FinalValueLayerDescription.prototype, "axisAnnotationInterpolatedValuePrecision", {
        get: function () {
            return this.cc;
        },
        set: function (a) {
            this.cc = a;
            this.e("AxisAnnotationInterpolatedValuePrecision");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FinalValueLayerDescription.prototype, "axisAnnotationOutline", {
        get: function () {
            return this.cf;
        },
        set: function (a) {
            this.cf = a;
            this.e("AxisAnnotationOutline");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FinalValueLayerDescription.prototype, "axisAnnotationPaddingLeft", {
        get: function () {
            return this.b3;
        },
        set: function (a) {
            this.b3 = a;
            this.e("AxisAnnotationPaddingLeft");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FinalValueLayerDescription.prototype, "axisAnnotationPaddingTop", {
        get: function () {
            return this.b5;
        },
        set: function (a) {
            this.b5 = a;
            this.e("AxisAnnotationPaddingTop");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FinalValueLayerDescription.prototype, "axisAnnotationPaddingRight", {
        get: function () {
            return this.b4;
        },
        set: function (a) {
            this.b4 = a;
            this.e("AxisAnnotationPaddingRight");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FinalValueLayerDescription.prototype, "axisAnnotationPaddingBottom", {
        get: function () {
            return this.b2;
        },
        set: function (a) {
            this.b2 = a;
            this.e("AxisAnnotationPaddingBottom");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FinalValueLayerDescription.prototype, "axisAnnotationStrokeThickness", {
        get: function () {
            return this.b6;
        },
        set: function (a) {
            this.b6 = a;
            this.e("AxisAnnotationStrokeThickness");
        },
        enumerable: true,
        configurable: true
    });
    FinalValueLayerDescription.$t = markType(FinalValueLayerDescription, 'FinalValueLayerDescription', AnnotationLayerDescription.$);
    return FinalValueLayerDescription;
}(AnnotationLayerDescription));
export { FinalValueLayerDescription };
//# sourceMappingURL=FinalValueLayerDescription.js.map