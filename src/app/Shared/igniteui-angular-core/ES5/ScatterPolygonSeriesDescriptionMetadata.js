/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { StyleSelectorDescriptionMetadata } from "./StyleSelectorDescriptionMetadata";
import { StyleDescriptionMetadata } from "./StyleDescriptionMetadata";
import { ShapeSeriesBaseDescriptionMetadata } from "./ShapeSeriesBaseDescriptionMetadata";
import { ScatterPolygonSeriesDescription } from "./ScatterPolygonSeriesDescription";
/**
 * @hidden
 */
var ScatterPolygonSeriesDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(ScatterPolygonSeriesDescriptionMetadata, _super);
    function ScatterPolygonSeriesDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ScatterPolygonSeriesDescriptionMetadata.b = function (a) {
        if (ScatterPolygonSeriesDescriptionMetadata.a == null) {
            ScatterPolygonSeriesDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            ScatterPolygonSeriesDescriptionMetadata.c(a, ScatterPolygonSeriesDescriptionMetadata.a);
            StyleSelectorDescriptionMetadata.d(a);
            StyleDescriptionMetadata.d(a);
        }
    };
    ScatterPolygonSeriesDescriptionMetadata.c = function (a, b) {
        ShapeSeriesBaseDescriptionMetadata.c(a, b);
        b.item("ShapeStyleSelector", "ExportedType");
        b.item("ShapeStyle", "ExportedType");
        b.item("MarkerType", "ExportedType:string:MarkerType");
        b.item("MarkerTemplateRef", "(w:MarkerTemplate,wf:MarkerTemplate)DataRef::object");
        b.item("ActualMarkerTemplateRef", "(w:ActualMarkerTemplate,wf:ActualMarkerTemplate)DataRef::object");
        b.item("MarkerBrush", "Brush");
        b.item("ActualMarkerBrush", "Brush");
        b.item("MarkerOutline", "Brush");
        b.item("ActualMarkerOutline", "Brush");
        b.item("MarkerCollisionAvoidance", "ExportedType:string:CollisionAvoidanceType");
    };
    ScatterPolygonSeriesDescriptionMetadata.d = function (a) {
        ScatterPolygonSeriesDescriptionMetadata.b(a);
        a.n("ScatterPolygonSeries", function () { return new ScatterPolygonSeriesDescription(); });
        a.m("ScatterPolygonSeries", ScatterPolygonSeriesDescriptionMetadata.a);
    };
    ScatterPolygonSeriesDescriptionMetadata.$t = markType(ScatterPolygonSeriesDescriptionMetadata, 'ScatterPolygonSeriesDescriptionMetadata');
    ScatterPolygonSeriesDescriptionMetadata.a = null;
    return ScatterPolygonSeriesDescriptionMetadata;
}(Base));
export { ScatterPolygonSeriesDescriptionMetadata };
//# sourceMappingURL=ScatterPolygonSeriesDescriptionMetadata.js.map