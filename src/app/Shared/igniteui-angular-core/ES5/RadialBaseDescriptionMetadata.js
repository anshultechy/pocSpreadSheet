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
var RadialBaseDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(RadialBaseDescriptionMetadata, _super);
    function RadialBaseDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RadialBaseDescriptionMetadata.b = function (a) {
        if (RadialBaseDescriptionMetadata.a == null) {
            RadialBaseDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            RadialBaseDescriptionMetadata.c(a, RadialBaseDescriptionMetadata.a);
        }
    };
    RadialBaseDescriptionMetadata.c = function (a, b) {
        MarkerSeriesDescriptionMetadata.c(a, b);
        b.item("AngleAxisRef", "(w:AngleAxis,wf:AngleAxis)DataRef::object");
        b.item("ValueAxisRef", "(w:ValueAxis,wf:ValueAxis)DataRef::object");
        b.item("ClipSeriesToBounds", "Boolean");
    };
    RadialBaseDescriptionMetadata.d = function (a) {
        RadialBaseDescriptionMetadata.b(a);
        a.m("RadialBase", RadialBaseDescriptionMetadata.a);
    };
    RadialBaseDescriptionMetadata.$t = markType(RadialBaseDescriptionMetadata, 'RadialBaseDescriptionMetadata');
    RadialBaseDescriptionMetadata.a = null;
    return RadialBaseDescriptionMetadata;
}(Base));
export { RadialBaseDescriptionMetadata };
//# sourceMappingURL=RadialBaseDescriptionMetadata.js.map