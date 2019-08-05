/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { RingDescriptionMetadata } from "./RingDescriptionMetadata";
import { RingSeriesBaseDescriptionMetadata } from "./RingSeriesBaseDescriptionMetadata";
import { RingSeriesDescription } from "./RingSeriesDescription";
/**
 * @hidden
 */
var RingSeriesDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(RingSeriesDescriptionMetadata, _super);
    function RingSeriesDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RingSeriesDescriptionMetadata.b = function (a) {
        if (RingSeriesDescriptionMetadata.a == null) {
            RingSeriesDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            RingSeriesDescriptionMetadata.c(a, RingSeriesDescriptionMetadata.a);
            RingDescriptionMetadata.d(a);
        }
    };
    RingSeriesDescriptionMetadata.c = function (a, b) {
        RingSeriesBaseDescriptionMetadata.c(a, b);
        b.item("Ring", "ExportedType");
    };
    RingSeriesDescriptionMetadata.d = function (a) {
        RingSeriesDescriptionMetadata.b(a);
        a.n("RingSeries", function () { return new RingSeriesDescription(); });
        a.m("RingSeries", RingSeriesDescriptionMetadata.a);
    };
    RingSeriesDescriptionMetadata.$t = markType(RingSeriesDescriptionMetadata, 'RingSeriesDescriptionMetadata');
    RingSeriesDescriptionMetadata.a = null;
    return RingSeriesDescriptionMetadata;
}(Base));
export { RingSeriesDescriptionMetadata };
//# sourceMappingURL=RingSeriesDescriptionMetadata.js.map