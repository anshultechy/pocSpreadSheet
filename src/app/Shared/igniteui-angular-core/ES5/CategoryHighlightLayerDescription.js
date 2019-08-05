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
var CategoryHighlightLayerDescription = /** @class */ (function (_super) {
    tslib_1.__extends(CategoryHighlightLayerDescription, _super);
    function CategoryHighlightLayerDescription() {
        var _this = _super.call(this) || this;
        _this.b6 = null;
        _this.b2 = false;
        _this.b4 = 0;
        return _this;
    }
    CategoryHighlightLayerDescription.prototype.get_type = function () {
        return "CategoryHighlightLayer";
    };
    Object.defineProperty(CategoryHighlightLayerDescription.prototype, "targetAxisRef", {
        get: function () {
            return this.b6;
        },
        set: function (a) {
            this.b6 = a;
            this.e("TargetAxisRef");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CategoryHighlightLayerDescription.prototype, "useInterpolation", {
        get: function () {
            return this.b2;
        },
        set: function (a) {
            this.b2 = a;
            this.e("UseInterpolation");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CategoryHighlightLayerDescription.prototype, "bandHighlightWidth", {
        get: function () {
            return this.b4;
        },
        set: function (a) {
            this.b4 = a;
            this.e("BandHighlightWidth");
        },
        enumerable: true,
        configurable: true
    });
    CategoryHighlightLayerDescription.$t = markType(CategoryHighlightLayerDescription, 'CategoryHighlightLayerDescription', AnnotationLayerDescription.$);
    return CategoryHighlightLayerDescription;
}(AnnotationLayerDescription));
export { CategoryHighlightLayerDescription };
//# sourceMappingURL=CategoryHighlightLayerDescription.js.map