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
import { SplineAreaSeriesDescription } from "./SplineAreaSeriesDescription";
/**
 * @hidden
 */
var SplineAreaSeriesDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(SplineAreaSeriesDescriptionMetadata, _super);
    function SplineAreaSeriesDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SplineAreaSeriesDescriptionMetadata.b = function (a) {
        if (SplineAreaSeriesDescriptionMetadata.a == null) {
            SplineAreaSeriesDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            SplineAreaSeriesDescriptionMetadata.c(a, SplineAreaSeriesDescriptionMetadata.a);
        }
    };
    SplineAreaSeriesDescriptionMetadata.c = function (a, b) {
        SplineSeriesBaseDescriptionMetadata.c(a, b);
    };
    SplineAreaSeriesDescriptionMetadata.d = function (a) {
        SplineAreaSeriesDescriptionMetadata.b(a);
        a.n("SplineAreaSeries", function () { return new SplineAreaSeriesDescription(); });
        a.m("SplineAreaSeries", SplineAreaSeriesDescriptionMetadata.a);
    };
    SplineAreaSeriesDescriptionMetadata.$t = markType(SplineAreaSeriesDescriptionMetadata, 'SplineAreaSeriesDescriptionMetadata');
    SplineAreaSeriesDescriptionMetadata.a = null;
    return SplineAreaSeriesDescriptionMetadata;
}(Base));
export { SplineAreaSeriesDescriptionMetadata };
//# sourceMappingURL=SplineAreaSeriesDescriptionMetadata.js.map