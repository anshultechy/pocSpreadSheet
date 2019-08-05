/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { MarkerSeriesDescriptionMetadata } from "./MarkerSeriesDescriptionMetadata";
/**
 * @hidden
 */
var ScatterBaseDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(ScatterBaseDescriptionMetadata, _super);
    function ScatterBaseDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ScatterBaseDescriptionMetadata.b = function (a) {
        if (ScatterBaseDescriptionMetadata.a == null) {
            ScatterBaseDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            ScatterBaseDescriptionMetadata.c(a, ScatterBaseDescriptionMetadata.a);
        }
    };
    ScatterBaseDescriptionMetadata.c = function (a, b) {
        MarkerSeriesDescriptionMetadata.c(a, b);
        b.item("XAxisRef", "(w:XAxis,wf:XAxis)DataRef::object");
        b.item("YAxisRef", "(w:YAxis,wf:YAxis)DataRef::object");
        b.item("XMemberPath", "String");
        b.item("YMemberPath", "String");
        b.item("TrendLineType", "ExportedType:string:TrendLineType");
        b.item("TrendLineBrush", "Brush");
        b.item("ActualTrendLineBrush", "Brush");
        b.item("TrendLineThickness", "Number:double");
        b.item("TrendLinePeriod", "Number:int");
        b.item("MarkerCollisionAvoidance", "ExportedType:string:CollisionAvoidanceType");
        b.item("TrendLineZIndex", "Number:int");
        b.item("MaximumMarkers", "Number:int");
    };
    ScatterBaseDescriptionMetadata.d = function (a) {
        ScatterBaseDescriptionMetadata.b(a);
        a.m("ScatterBase", ScatterBaseDescriptionMetadata.a);
    };
    ScatterBaseDescriptionMetadata.$t = markType(ScatterBaseDescriptionMetadata, 'ScatterBaseDescriptionMetadata');
    ScatterBaseDescriptionMetadata.a = null;
    return ScatterBaseDescriptionMetadata;
}(Base));
export { ScatterBaseDescriptionMetadata };
//# sourceMappingURL=ScatterBaseDescriptionMetadata.js.map