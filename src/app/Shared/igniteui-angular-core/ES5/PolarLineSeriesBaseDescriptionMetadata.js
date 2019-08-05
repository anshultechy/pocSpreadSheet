/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { PolarBaseDescriptionMetadata } from "./PolarBaseDescriptionMetadata";
/**
 * @hidden
 */
var PolarLineSeriesBaseDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(PolarLineSeriesBaseDescriptionMetadata, _super);
    function PolarLineSeriesBaseDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PolarLineSeriesBaseDescriptionMetadata.b = function (a) {
        if (PolarLineSeriesBaseDescriptionMetadata.a == null) {
            PolarLineSeriesBaseDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            PolarLineSeriesBaseDescriptionMetadata.c(a, PolarLineSeriesBaseDescriptionMetadata.a);
        }
    };
    PolarLineSeriesBaseDescriptionMetadata.c = function (a, b) {
        PolarBaseDescriptionMetadata.c(a, b);
    };
    PolarLineSeriesBaseDescriptionMetadata.d = function (a) {
        PolarLineSeriesBaseDescriptionMetadata.b(a);
        a.m("PolarLineSeriesBase", PolarLineSeriesBaseDescriptionMetadata.a);
    };
    PolarLineSeriesBaseDescriptionMetadata.$t = markType(PolarLineSeriesBaseDescriptionMetadata, 'PolarLineSeriesBaseDescriptionMetadata');
    PolarLineSeriesBaseDescriptionMetadata.a = null;
    return PolarLineSeriesBaseDescriptionMetadata;
}(Base));
export { PolarLineSeriesBaseDescriptionMetadata };
//# sourceMappingURL=PolarLineSeriesBaseDescriptionMetadata.js.map