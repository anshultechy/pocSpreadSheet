/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { RadialBaseDescriptionMetadata } from "./RadialBaseDescriptionMetadata";
/**
 * @hidden
 */
var AnchoredRadialSeriesDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(AnchoredRadialSeriesDescriptionMetadata, _super);
    function AnchoredRadialSeriesDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AnchoredRadialSeriesDescriptionMetadata.b = function (a) {
        if (AnchoredRadialSeriesDescriptionMetadata.a == null) {
            AnchoredRadialSeriesDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            AnchoredRadialSeriesDescriptionMetadata.c(a, AnchoredRadialSeriesDescriptionMetadata.a);
        }
    };
    AnchoredRadialSeriesDescriptionMetadata.c = function (a, b) {
        RadialBaseDescriptionMetadata.c(a, b);
        b.item("ValueMemberPath", "String");
        b.item("TrendLineType", "ExportedType:string:TrendLineType");
        b.item("TrendLineBrush", "Brush");
        b.item("ActualTrendLineBrush", "Brush");
        b.item("TrendLineThickness", "Number:double");
        b.item("TrendLinePeriod", "Number:int");
        b.item("TrendLineZIndex", "Number:int");
    };
    AnchoredRadialSeriesDescriptionMetadata.d = function (a) {
        AnchoredRadialSeriesDescriptionMetadata.b(a);
        a.m("AnchoredRadialSeries", AnchoredRadialSeriesDescriptionMetadata.a);
    };
    AnchoredRadialSeriesDescriptionMetadata.$t = markType(AnchoredRadialSeriesDescriptionMetadata, 'AnchoredRadialSeriesDescriptionMetadata');
    AnchoredRadialSeriesDescriptionMetadata.a = null;
    return AnchoredRadialSeriesDescriptionMetadata;
}(Base));
export { AnchoredRadialSeriesDescriptionMetadata };
//# sourceMappingURL=AnchoredRadialSeriesDescriptionMetadata.js.map