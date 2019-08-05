/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { ColorScaleDescriptionMetadata } from "./ColorScaleDescriptionMetadata";
import { ScatterTriangulationSeriesDescriptionMetadata } from "./ScatterTriangulationSeriesDescriptionMetadata";
import { ScatterAreaSeriesDescription } from "./ScatterAreaSeriesDescription";
/**
 * @hidden
 */
var ScatterAreaSeriesDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(ScatterAreaSeriesDescriptionMetadata, _super);
    function ScatterAreaSeriesDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ScatterAreaSeriesDescriptionMetadata.b = function (a) {
        if (ScatterAreaSeriesDescriptionMetadata.a == null) {
            ScatterAreaSeriesDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            ScatterAreaSeriesDescriptionMetadata.c(a, ScatterAreaSeriesDescriptionMetadata.a);
            ColorScaleDescriptionMetadata.d(a);
        }
    };
    ScatterAreaSeriesDescriptionMetadata.c = function (a, b) {
        ScatterTriangulationSeriesDescriptionMetadata.c(a, b);
        b.item("ColorScale", "ExportedType");
        b.item("ColorMemberPath", "String");
    };
    ScatterAreaSeriesDescriptionMetadata.d = function (a) {
        ScatterAreaSeriesDescriptionMetadata.b(a);
        a.n("ScatterAreaSeries", function () { return new ScatterAreaSeriesDescription(); });
        a.m("ScatterAreaSeries", ScatterAreaSeriesDescriptionMetadata.a);
    };
    ScatterAreaSeriesDescriptionMetadata.$t = markType(ScatterAreaSeriesDescriptionMetadata, 'ScatterAreaSeriesDescriptionMetadata');
    ScatterAreaSeriesDescriptionMetadata.a = null;
    return ScatterAreaSeriesDescriptionMetadata;
}(Base));
export { ScatterAreaSeriesDescriptionMetadata };
//# sourceMappingURL=ScatterAreaSeriesDescriptionMetadata.js.map