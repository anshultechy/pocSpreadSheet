/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { SeriesDescriptionMetadata } from "./SeriesDescriptionMetadata";
/**
 * @hidden
 */
var AnnotationLayerDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(AnnotationLayerDescriptionMetadata, _super);
    function AnnotationLayerDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AnnotationLayerDescriptionMetadata.b = function (a) {
        if (AnnotationLayerDescriptionMetadata.a == null) {
            AnnotationLayerDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            AnnotationLayerDescriptionMetadata.c(a, AnnotationLayerDescriptionMetadata.a);
        }
    };
    AnnotationLayerDescriptionMetadata.c = function (a, b) {
        SeriesDescriptionMetadata.c(a, b);
        b.item("UseIndex", "Boolean");
        b.item("UseLegend", "Boolean");
        b.item("CursorPosition", "Point");
        b.item("IsDefaultCrosshairDisabled", "Boolean");
        b.item("ShouldRenderAsOverlay", "Boolean");
    };
    AnnotationLayerDescriptionMetadata.d = function (a) {
        AnnotationLayerDescriptionMetadata.b(a);
        a.m("AnnotationLayer", AnnotationLayerDescriptionMetadata.a);
    };
    AnnotationLayerDescriptionMetadata.$t = markType(AnnotationLayerDescriptionMetadata, 'AnnotationLayerDescriptionMetadata');
    AnnotationLayerDescriptionMetadata.a = null;
    return AnnotationLayerDescriptionMetadata;
}(Base));
export { AnnotationLayerDescriptionMetadata };
//# sourceMappingURL=AnnotationLayerDescriptionMetadata.js.map