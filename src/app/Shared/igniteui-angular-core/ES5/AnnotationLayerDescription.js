/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { SeriesDescription } from "./SeriesDescription";
import { markType } from "./type";
/**
 * @hidden
 */
var AnnotationLayerDescription = /** @class */ (function (_super) {
    tslib_1.__extends(AnnotationLayerDescription, _super);
    function AnnotationLayerDescription() {
        var _this = _super.call(this) || this;
        _this.bw = false;
        _this.bx = false;
        _this.bs = null;
        _this.bu = false;
        _this.bv = false;
        return _this;
    }
    AnnotationLayerDescription.prototype.get_type = function () {
        return "AnnotationLayer";
    };
    Object.defineProperty(AnnotationLayerDescription.prototype, "useIndex", {
        get: function () {
            return this.bw;
        },
        set: function (a) {
            this.bw = a;
            this.e("UseIndex");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AnnotationLayerDescription.prototype, "useLegend", {
        get: function () {
            return this.bx;
        },
        set: function (a) {
            this.bx = a;
            this.e("UseLegend");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AnnotationLayerDescription.prototype, "cursorPosition", {
        get: function () {
            return this.bs;
        },
        set: function (a) {
            this.bs = a;
            this.e("CursorPosition");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AnnotationLayerDescription.prototype, "isDefaultCrosshairDisabled", {
        get: function () {
            return this.bu;
        },
        set: function (a) {
            this.bu = a;
            this.e("IsDefaultCrosshairDisabled");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AnnotationLayerDescription.prototype, "shouldRenderAsOverlay", {
        get: function () {
            return this.bv;
        },
        set: function (a) {
            this.bv = a;
            this.e("ShouldRenderAsOverlay");
        },
        enumerable: true,
        configurable: true
    });
    AnnotationLayerDescription.$t = markType(AnnotationLayerDescription, 'AnnotationLayerDescription', SeriesDescription.$);
    return AnnotationLayerDescription;
}(SeriesDescription));
export { AnnotationLayerDescription };
//# sourceMappingURL=AnnotationLayerDescription.js.map