/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { PolarLineSeriesBaseDescriptionMetadata } from "./PolarLineSeriesBaseDescriptionMetadata";
import { PolarSplineAreaSeriesDescription } from "./PolarSplineAreaSeriesDescription";
/**
 * @hidden
 */
var PolarSplineAreaSeriesDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(PolarSplineAreaSeriesDescriptionMetadata, _super);
    function PolarSplineAreaSeriesDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PolarSplineAreaSeriesDescriptionMetadata.b = function (a) {
        if (PolarSplineAreaSeriesDescriptionMetadata.a == null) {
            PolarSplineAreaSeriesDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            PolarSplineAreaSeriesDescriptionMetadata.c(a, PolarSplineAreaSeriesDescriptionMetadata.a);
        }
    };
    PolarSplineAreaSeriesDescriptionMetadata.c = function (a, b) {
        PolarLineSeriesBaseDescriptionMetadata.c(a, b);
        b.item("Stiffness", "Number:double");
    };
    PolarSplineAreaSeriesDescriptionMetadata.d = function (a) {
        PolarSplineAreaSeriesDescriptionMetadata.b(a);
        a.n("PolarSplineAreaSeries", function () { return new PolarSplineAreaSeriesDescription(); });
        a.m("PolarSplineAreaSeries", PolarSplineAreaSeriesDescriptionMetadata.a);
    };
    PolarSplineAreaSeriesDescriptionMetadata.$t = markType(PolarSplineAreaSeriesDescriptionMetadata, 'PolarSplineAreaSeriesDescriptionMetadata');
    PolarSplineAreaSeriesDescriptionMetadata.a = null;
    return PolarSplineAreaSeriesDescriptionMetadata;
}(Base));
export { PolarSplineAreaSeriesDescriptionMetadata };
//# sourceMappingURL=PolarSplineAreaSeriesDescriptionMetadata.js.map