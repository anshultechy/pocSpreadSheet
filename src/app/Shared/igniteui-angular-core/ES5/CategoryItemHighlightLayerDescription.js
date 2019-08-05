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
var CategoryItemHighlightLayerDescription = /** @class */ (function (_super) {
    tslib_1.__extends(CategoryItemHighlightLayerDescription, _super);
    function CategoryItemHighlightLayerDescription() {
        var _this = _super.call(this) || this;
        _this.ca = null;
        _this.b3 = false;
        _this.b8 = null;
        _this.b9 = null;
        _this.b6 = 0;
        _this.b2 = false;
        return _this;
    }
    CategoryItemHighlightLayerDescription.prototype.get_type = function () {
        return "CategoryItemHighlightLayer";
    };
    Object.defineProperty(CategoryItemHighlightLayerDescription.prototype, "targetSeriesRef", {
        get: function () {
            return this.ca;
        },
        set: function (a) {
            this.ca = a;
            this.e("TargetSeriesRef");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CategoryItemHighlightLayerDescription.prototype, "useInterpolation", {
        get: function () {
            return this.b3;
        },
        set: function (a) {
            this.b3 = a;
            this.e("UseInterpolation");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CategoryItemHighlightLayerDescription.prototype, "highlightType", {
        get: function () {
            return this.b8;
        },
        set: function (a) {
            this.b8 = a;
            this.e("HighlightType");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CategoryItemHighlightLayerDescription.prototype, "markerTemplateRef", {
        get: function () {
            return this.b9;
        },
        set: function (a) {
            this.b9 = a;
            this.e("MarkerTemplateRef");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CategoryItemHighlightLayerDescription.prototype, "bandHighlightWidth", {
        get: function () {
            return this.b6;
        },
        set: function (a) {
            this.b6 = a;
            this.e("BandHighlightWidth");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CategoryItemHighlightLayerDescription.prototype, "skipUnknownValues", {
        get: function () {
            return this.b2;
        },
        set: function (a) {
            this.b2 = a;
            this.e("SkipUnknownValues");
        },
        enumerable: true,
        configurable: true
    });
    CategoryItemHighlightLayerDescription.$t = markType(CategoryItemHighlightLayerDescription, 'CategoryItemHighlightLayerDescription', AnnotationLayerDescription.$);
    return CategoryItemHighlightLayerDescription;
}(AnnotationLayerDescription));
export { CategoryItemHighlightLayerDescription };
//# sourceMappingURL=CategoryItemHighlightLayerDescription.js.map