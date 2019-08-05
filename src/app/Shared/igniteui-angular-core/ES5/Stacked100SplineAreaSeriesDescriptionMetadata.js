/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { StackedSplineAreaSeriesDescriptionMetadata } from "./StackedSplineAreaSeriesDescriptionMetadata";
import { Stacked100SplineAreaSeriesDescription } from "./Stacked100SplineAreaSeriesDescription";
/**
 * @hidden
 */
var Stacked100SplineAreaSeriesDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(Stacked100SplineAreaSeriesDescriptionMetadata, _super);
    function Stacked100SplineAreaSeriesDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Stacked100SplineAreaSeriesDescriptionMetadata.b = function (a) {
        if (Stacked100SplineAreaSeriesDescriptionMetadata.a == null) {
            Stacked100SplineAreaSeriesDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            Stacked100SplineAreaSeriesDescriptionMetadata.c(a, Stacked100SplineAreaSeriesDescriptionMetadata.a);
        }
    };
    Stacked100SplineAreaSeriesDescriptionMetadata.c = function (a, b) {
        StackedSplineAreaSeriesDescriptionMetadata.c(a, b);
    };
    Stacked100SplineAreaSeriesDescriptionMetadata.d = function (a) {
        Stacked100SplineAreaSeriesDescriptionMetadata.b(a);
        a.n("Stacked100SplineAreaSeries", function () { return new Stacked100SplineAreaSeriesDescription(); });
        a.m("Stacked100SplineAreaSeries", Stacked100SplineAreaSeriesDescriptionMetadata.a);
    };
    Stacked100SplineAreaSeriesDescriptionMetadata.$t = markType(Stacked100SplineAreaSeriesDescriptionMetadata, 'Stacked100SplineAreaSeriesDescriptionMetadata');
    Stacked100SplineAreaSeriesDescriptionMetadata.a = null;
    return Stacked100SplineAreaSeriesDescriptionMetadata;
}(Base));
export { Stacked100SplineAreaSeriesDescriptionMetadata };
//# sourceMappingURL=Stacked100SplineAreaSeriesDescriptionMetadata.js.map