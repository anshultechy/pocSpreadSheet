/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { SplineSeriesBaseDescriptionMetadata } from "./SplineSeriesBaseDescriptionMetadata";
import { SplineSeriesDescription } from "./SplineSeriesDescription";
/**
 * @hidden
 */
var SplineSeriesDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(SplineSeriesDescriptionMetadata, _super);
    function SplineSeriesDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SplineSeriesDescriptionMetadata.b = function (a) {
        if (SplineSeriesDescriptionMetadata.a == null) {
            SplineSeriesDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            SplineSeriesDescriptionMetadata.c(a, SplineSeriesDescriptionMetadata.a);
        }
    };
    SplineSeriesDescriptionMetadata.c = function (a, b) {
        SplineSeriesBaseDescriptionMetadata.c(a, b);
    };
    SplineSeriesDescriptionMetadata.d = function (a) {
        SplineSeriesDescriptionMetadata.b(a);
        a.n("SplineSeries", function () { return new SplineSeriesDescription(); });
        a.m("SplineSeries", SplineSeriesDescriptionMetadata.a);
    };
    SplineSeriesDescriptionMetadata.$t = markType(SplineSeriesDescriptionMetadata, 'SplineSeriesDescriptionMetadata');
    SplineSeriesDescriptionMetadata.a = null;
    return SplineSeriesDescriptionMetadata;
}(Base));
export { SplineSeriesDescriptionMetadata };
//# sourceMappingURL=SplineSeriesDescriptionMetadata.js.map