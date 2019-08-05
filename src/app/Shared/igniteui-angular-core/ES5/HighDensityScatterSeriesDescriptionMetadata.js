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
import { HighDensityScatterSeriesDescription } from "./HighDensityScatterSeriesDescription";
/**
 * @hidden
 */
var HighDensityScatterSeriesDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(HighDensityScatterSeriesDescriptionMetadata, _super);
    function HighDensityScatterSeriesDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HighDensityScatterSeriesDescriptionMetadata.b = function (a) {
        if (HighDensityScatterSeriesDescriptionMetadata.a == null) {
            HighDensityScatterSeriesDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            HighDensityScatterSeriesDescriptionMetadata.c(a, HighDensityScatterSeriesDescriptionMetadata.a);
        }
    };
    HighDensityScatterSeriesDescriptionMetadata.c = function (a, b) {
        SeriesDescriptionMetadata.c(a, b);
        b.item("XAxisRef", "(w:XAxis,wf:XAxis)DataRef::object");
        b.item("YAxisRef", "(w:YAxis,wf:YAxis)DataRef::object");
        b.item("XMemberPath", "String");
        b.item("YMemberPath", "String");
        b.item("UseBruteForce", "Boolean");
        b.item("ProgressiveLoad", "Boolean");
        b.item("HeatMinimum", "Number:double");
        b.item("HeatMaximum", "Number:double");
        b.item("HeatMinimumColor", "Color");
        b.item("HeatMaximumColor", "Color");
        b.item("PointExtent", "Number:int");
        b.item("ProgressiveStatus", "Number:int");
    };
    HighDensityScatterSeriesDescriptionMetadata.d = function (a) {
        HighDensityScatterSeriesDescriptionMetadata.b(a);
        a.n("HighDensityScatterSeries", function () { return new HighDensityScatterSeriesDescription(); });
        a.m("HighDensityScatterSeries", HighDensityScatterSeriesDescriptionMetadata.a);
    };
    HighDensityScatterSeriesDescriptionMetadata.$t = markType(HighDensityScatterSeriesDescriptionMetadata, 'HighDensityScatterSeriesDescriptionMetadata');
    HighDensityScatterSeriesDescriptionMetadata.a = null;
    return HighDensityScatterSeriesDescriptionMetadata;
}(Base));
export { HighDensityScatterSeriesDescriptionMetadata };
//# sourceMappingURL=HighDensityScatterSeriesDescriptionMetadata.js.map