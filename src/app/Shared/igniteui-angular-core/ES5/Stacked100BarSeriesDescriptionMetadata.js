/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { StackedBarSeriesDescriptionMetadata } from "./StackedBarSeriesDescriptionMetadata";
import { Stacked100BarSeriesDescription } from "./Stacked100BarSeriesDescription";
/**
 * @hidden
 */
var Stacked100BarSeriesDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(Stacked100BarSeriesDescriptionMetadata, _super);
    function Stacked100BarSeriesDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Stacked100BarSeriesDescriptionMetadata.b = function (a) {
        if (Stacked100BarSeriesDescriptionMetadata.a == null) {
            Stacked100BarSeriesDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            Stacked100BarSeriesDescriptionMetadata.c(a, Stacked100BarSeriesDescriptionMetadata.a);
        }
    };
    Stacked100BarSeriesDescriptionMetadata.c = function (a, b) {
        StackedBarSeriesDescriptionMetadata.c(a, b);
    };
    Stacked100BarSeriesDescriptionMetadata.d = function (a) {
        Stacked100BarSeriesDescriptionMetadata.b(a);
        a.n("Stacked100BarSeries", function () { return new Stacked100BarSeriesDescription(); });
        a.m("Stacked100BarSeries", Stacked100BarSeriesDescriptionMetadata.a);
    };
    Stacked100BarSeriesDescriptionMetadata.$t = markType(Stacked100BarSeriesDescriptionMetadata, 'Stacked100BarSeriesDescriptionMetadata');
    Stacked100BarSeriesDescriptionMetadata.a = null;
    return Stacked100BarSeriesDescriptionMetadata;
}(Base));
export { Stacked100BarSeriesDescriptionMetadata };
//# sourceMappingURL=Stacked100BarSeriesDescriptionMetadata.js.map