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
var ScatterTriangulationSeriesDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(ScatterTriangulationSeriesDescriptionMetadata, _super);
    function ScatterTriangulationSeriesDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ScatterTriangulationSeriesDescriptionMetadata.b = function (a) {
        if (ScatterTriangulationSeriesDescriptionMetadata.a == null) {
            ScatterTriangulationSeriesDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            ScatterTriangulationSeriesDescriptionMetadata.c(a, ScatterTriangulationSeriesDescriptionMetadata.a);
        }
    };
    ScatterTriangulationSeriesDescriptionMetadata.c = function (a, b) {
        SeriesDescriptionMetadata.c(a, b);
        b.item("XMemberPath", "String");
        b.item("YMemberPath", "String");
        b.item("XAxisRef", "(w:XAxis,wf:XAxis)DataRef::object");
        b.item("YAxisRef", "(w:YAxis,wf:YAxis)DataRef::object");
        b.item("TriangleVertexMemberPath1", "String");
        b.item("TriangleVertexMemberPath2", "String");
        b.item("TriangleVertexMemberPath3", "String");
    };
    ScatterTriangulationSeriesDescriptionMetadata.d = function (a) {
        ScatterTriangulationSeriesDescriptionMetadata.b(a);
        a.m("ScatterTriangulationSeries", ScatterTriangulationSeriesDescriptionMetadata.a);
    };
    ScatterTriangulationSeriesDescriptionMetadata.$t = markType(ScatterTriangulationSeriesDescriptionMetadata, 'ScatterTriangulationSeriesDescriptionMetadata');
    ScatterTriangulationSeriesDescriptionMetadata.a = null;
    return ScatterTriangulationSeriesDescriptionMetadata;
}(Base));
export { ScatterTriangulationSeriesDescriptionMetadata };
//# sourceMappingURL=ScatterTriangulationSeriesDescriptionMetadata.js.map