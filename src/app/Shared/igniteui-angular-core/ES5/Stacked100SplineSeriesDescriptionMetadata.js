/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { StackedSplineSeriesDescriptionMetadata } from "./StackedSplineSeriesDescriptionMetadata";
import { Stacked100SplineSeriesDescription } from "./Stacked100SplineSeriesDescription";
/**
 * @hidden
 */
var Stacked100SplineSeriesDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(Stacked100SplineSeriesDescriptionMetadata, _super);
    function Stacked100SplineSeriesDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Stacked100SplineSeriesDescriptionMetadata.b = function (a) {
        if (Stacked100SplineSeriesDescriptionMetadata.a == null) {
            Stacked100SplineSeriesDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            Stacked100SplineSeriesDescriptionMetadata.c(a, Stacked100SplineSeriesDescriptionMetadata.a);
        }
    };
    Stacked100SplineSeriesDescriptionMetadata.c = function (a, b) {
        StackedSplineSeriesDescriptionMetadata.c(a, b);
    };
    Stacked100SplineSeriesDescriptionMetadata.d = function (a) {
        Stacked100SplineSeriesDescriptionMetadata.b(a);
        a.n("Stacked100SplineSeries", function () { return new Stacked100SplineSeriesDescription(); });
        a.m("Stacked100SplineSeries", Stacked100SplineSeriesDescriptionMetadata.a);
    };
    Stacked100SplineSeriesDescriptionMetadata.$t = markType(Stacked100SplineSeriesDescriptionMetadata, 'Stacked100SplineSeriesDescriptionMetadata');
    Stacked100SplineSeriesDescriptionMetadata.a = null;
    return Stacked100SplineSeriesDescriptionMetadata;
}(Base));
export { Stacked100SplineSeriesDescriptionMetadata };
//# sourceMappingURL=Stacked100SplineSeriesDescriptionMetadata.js.map