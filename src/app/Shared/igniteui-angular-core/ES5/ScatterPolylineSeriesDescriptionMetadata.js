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
import { ScatterPolylineSeriesDescription } from "./ScatterPolylineSeriesDescription";
/**
 * @hidden
 */
var ScatterPolylineSeriesDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(ScatterPolylineSeriesDescriptionMetadata, _super);
    function ScatterPolylineSeriesDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ScatterPolylineSeriesDescriptionMetadata.b = function (a) {
        if (ScatterPolylineSeriesDescriptionMetadata.a == null) {
            ScatterPolylineSeriesDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            ScatterPolylineSeriesDescriptionMetadata.c(a, ScatterPolylineSeriesDescriptionMetadata.a);
            StyleSelectorDescriptionMetadata.d(a);
            StyleDescriptionMetadata.d(a);
        }
    };
    ScatterPolylineSeriesDescriptionMetadata.c = function (a, b) {
        ShapeSeriesBaseDescriptionMetadata.c(a, b);
        b.item("ShapeStyleSelector", "ExportedType");
        b.item("ShapeStyle", "ExportedType");
    };
    ScatterPolylineSeriesDescriptionMetadata.d = function (a) {
        ScatterPolylineSeriesDescriptionMetadata.b(a);
        a.n("ScatterPolylineSeries", function () { return new ScatterPolylineSeriesDescription(); });
        a.m("ScatterPolylineSeries", ScatterPolylineSeriesDescriptionMetadata.a);
    };
    ScatterPolylineSeriesDescriptionMetadata.$t = markType(ScatterPolylineSeriesDescriptionMetadata, 'ScatterPolylineSeriesDescriptionMetadata');
    ScatterPolylineSeriesDescriptionMetadata.a = null;
    return ScatterPolylineSeriesDescriptionMetadata;
}(Base));
export { ScatterPolylineSeriesDescriptionMetadata };
//# sourceMappingURL=ScatterPolylineSeriesDescriptionMetadata.js.map