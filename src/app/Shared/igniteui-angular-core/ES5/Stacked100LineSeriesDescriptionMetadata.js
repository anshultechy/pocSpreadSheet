/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { StackedLineSeriesDescriptionMetadata } from "./StackedLineSeriesDescriptionMetadata";
import { Stacked100LineSeriesDescription } from "./Stacked100LineSeriesDescription";
/**
 * @hidden
 */
var Stacked100LineSeriesDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(Stacked100LineSeriesDescriptionMetadata, _super);
    function Stacked100LineSeriesDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Stacked100LineSeriesDescriptionMetadata.b = function (a) {
        if (Stacked100LineSeriesDescriptionMetadata.a == null) {
            Stacked100LineSeriesDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            Stacked100LineSeriesDescriptionMetadata.c(a, Stacked100LineSeriesDescriptionMetadata.a);
        }
    };
    Stacked100LineSeriesDescriptionMetadata.c = function (a, b) {
        StackedLineSeriesDescriptionMetadata.c(a, b);
    };
    Stacked100LineSeriesDescriptionMetadata.d = function (a) {
        Stacked100LineSeriesDescriptionMetadata.b(a);
        a.n("Stacked100LineSeries", function () { return new Stacked100LineSeriesDescription(); });
        a.m("Stacked100LineSeries", Stacked100LineSeriesDescriptionMetadata.a);
    };
    Stacked100LineSeriesDescriptionMetadata.$t = markType(Stacked100LineSeriesDescriptionMetadata, 'Stacked100LineSeriesDescriptionMetadata');
    Stacked100LineSeriesDescriptionMetadata.a = null;
    return Stacked100LineSeriesDescriptionMetadata;
}(Base));
export { Stacked100LineSeriesDescriptionMetadata };
//# sourceMappingURL=Stacked100LineSeriesDescriptionMetadata.js.map