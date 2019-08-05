/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { ScatterBaseDescriptionMetadata } from "./ScatterBaseDescriptionMetadata";
import { ScatterSplineSeriesDescription } from "./ScatterSplineSeriesDescription";
/**
 * @hidden
 */
var ScatterSplineSeriesDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(ScatterSplineSeriesDescriptionMetadata, _super);
    function ScatterSplineSeriesDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ScatterSplineSeriesDescriptionMetadata.b = function (a) {
        if (ScatterSplineSeriesDescriptionMetadata.a == null) {
            ScatterSplineSeriesDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            ScatterSplineSeriesDescriptionMetadata.c(a, ScatterSplineSeriesDescriptionMetadata.a);
        }
    };
    ScatterSplineSeriesDescriptionMetadata.c = function (a, b) {
        ScatterBaseDescriptionMetadata.c(a, b);
        b.item("Stiffness", "Number:double");
    };
    ScatterSplineSeriesDescriptionMetadata.d = function (a) {
        ScatterSplineSeriesDescriptionMetadata.b(a);
        a.n("ScatterSplineSeries", function () { return new ScatterSplineSeriesDescription(); });
        a.m("ScatterSplineSeries", ScatterSplineSeriesDescriptionMetadata.a);
    };
    ScatterSplineSeriesDescriptionMetadata.$t = markType(ScatterSplineSeriesDescriptionMetadata, 'ScatterSplineSeriesDescriptionMetadata');
    ScatterSplineSeriesDescriptionMetadata.a = null;
    return ScatterSplineSeriesDescriptionMetadata;
}(Base));
export { ScatterSplineSeriesDescriptionMetadata };
//# sourceMappingURL=ScatterSplineSeriesDescriptionMetadata.js.map