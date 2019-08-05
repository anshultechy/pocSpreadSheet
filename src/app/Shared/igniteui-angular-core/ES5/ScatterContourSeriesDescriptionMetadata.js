/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { ValueBrushScaleDescriptionMetadata } from "./ValueBrushScaleDescriptionMetadata";
import { ContourValueResolverDescriptionMetadata } from "./ContourValueResolverDescriptionMetadata";
import { ScatterTriangulationSeriesDescriptionMetadata } from "./ScatterTriangulationSeriesDescriptionMetadata";
import { ScatterContourSeriesDescription } from "./ScatterContourSeriesDescription";
/**
 * @hidden
 */
var ScatterContourSeriesDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(ScatterContourSeriesDescriptionMetadata, _super);
    function ScatterContourSeriesDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ScatterContourSeriesDescriptionMetadata.b = function (a) {
        if (ScatterContourSeriesDescriptionMetadata.a == null) {
            ScatterContourSeriesDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            ScatterContourSeriesDescriptionMetadata.c(a, ScatterContourSeriesDescriptionMetadata.a);
            ValueBrushScaleDescriptionMetadata.d(a);
            ContourValueResolverDescriptionMetadata.d(a);
        }
    };
    ScatterContourSeriesDescriptionMetadata.c = function (a, b) {
        ScatterTriangulationSeriesDescriptionMetadata.c(a, b);
        b.item("ValueMemberPath", "String");
        b.item("FillScale", "ExportedType");
        b.item("ValueResolver", "ExportedType");
    };
    ScatterContourSeriesDescriptionMetadata.d = function (a) {
        ScatterContourSeriesDescriptionMetadata.b(a);
        a.n("ScatterContourSeries", function () { return new ScatterContourSeriesDescription(); });
        a.m("ScatterContourSeries", ScatterContourSeriesDescriptionMetadata.a);
    };
    ScatterContourSeriesDescriptionMetadata.$t = markType(ScatterContourSeriesDescriptionMetadata, 'ScatterContourSeriesDescriptionMetadata');
    ScatterContourSeriesDescriptionMetadata.a = null;
    return ScatterContourSeriesDescriptionMetadata;
}(Base));
export { ScatterContourSeriesDescriptionMetadata };
//# sourceMappingURL=ScatterContourSeriesDescriptionMetadata.js.map