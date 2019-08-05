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
var MarkerSeriesDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(MarkerSeriesDescriptionMetadata, _super);
    function MarkerSeriesDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MarkerSeriesDescriptionMetadata.b = function (a) {
        if (MarkerSeriesDescriptionMetadata.a == null) {
            MarkerSeriesDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            MarkerSeriesDescriptionMetadata.c(a, MarkerSeriesDescriptionMetadata.a);
        }
    };
    MarkerSeriesDescriptionMetadata.c = function (a, b) {
        SeriesDescriptionMetadata.c(a, b);
        b.item("MarkerType", "ExportedType:string:MarkerType");
        b.item("MarkerTemplateRef", "(w:MarkerTemplate,wf:MarkerTemplate)DataRef::object");
        b.item("ActualMarkerTemplateRef", "(w:ActualMarkerTemplate,wf:ActualMarkerTemplate)DataRef::object");
        b.item("MarkerBrush", "Brush");
        b.item("ActualMarkerBrush", "Brush");
        b.item("MarkerOutline", "Brush");
        b.item("ActualMarkerOutline", "Brush");
    };
    MarkerSeriesDescriptionMetadata.d = function (a) {
        MarkerSeriesDescriptionMetadata.b(a);
        a.m("MarkerSeries", MarkerSeriesDescriptionMetadata.a);
    };
    MarkerSeriesDescriptionMetadata.$t = markType(MarkerSeriesDescriptionMetadata, 'MarkerSeriesDescriptionMetadata');
    MarkerSeriesDescriptionMetadata.a = null;
    return MarkerSeriesDescriptionMetadata;
}(Base));
export { MarkerSeriesDescriptionMetadata };
//# sourceMappingURL=MarkerSeriesDescriptionMetadata.js.map