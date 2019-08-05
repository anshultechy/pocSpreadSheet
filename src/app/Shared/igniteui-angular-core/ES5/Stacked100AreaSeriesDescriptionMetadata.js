/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { StackedAreaSeriesDescriptionMetadata } from "./StackedAreaSeriesDescriptionMetadata";
import { Stacked100AreaSeriesDescription } from "./Stacked100AreaSeriesDescription";
/**
 * @hidden
 */
var Stacked100AreaSeriesDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(Stacked100AreaSeriesDescriptionMetadata, _super);
    function Stacked100AreaSeriesDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Stacked100AreaSeriesDescriptionMetadata.b = function (a) {
        if (Stacked100AreaSeriesDescriptionMetadata.a == null) {
            Stacked100AreaSeriesDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            Stacked100AreaSeriesDescriptionMetadata.c(a, Stacked100AreaSeriesDescriptionMetadata.a);
        }
    };
    Stacked100AreaSeriesDescriptionMetadata.c = function (a, b) {
        StackedAreaSeriesDescriptionMetadata.c(a, b);
    };
    Stacked100AreaSeriesDescriptionMetadata.d = function (a) {
        Stacked100AreaSeriesDescriptionMetadata.b(a);
        a.n("Stacked100AreaSeries", function () { return new Stacked100AreaSeriesDescription(); });
        a.m("Stacked100AreaSeries", Stacked100AreaSeriesDescriptionMetadata.a);
    };
    Stacked100AreaSeriesDescriptionMetadata.$t = markType(Stacked100AreaSeriesDescriptionMetadata, 'Stacked100AreaSeriesDescriptionMetadata');
    Stacked100AreaSeriesDescriptionMetadata.a = null;
    return Stacked100AreaSeriesDescriptionMetadata;
}(Base));
export { Stacked100AreaSeriesDescriptionMetadata };
//# sourceMappingURL=Stacked100AreaSeriesDescriptionMetadata.js.map