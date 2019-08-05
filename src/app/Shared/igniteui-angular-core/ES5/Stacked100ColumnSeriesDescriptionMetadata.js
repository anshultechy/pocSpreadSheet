/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { StackedColumnSeriesDescriptionMetadata } from "./StackedColumnSeriesDescriptionMetadata";
import { Stacked100ColumnSeriesDescription } from "./Stacked100ColumnSeriesDescription";
/**
 * @hidden
 */
var Stacked100ColumnSeriesDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(Stacked100ColumnSeriesDescriptionMetadata, _super);
    function Stacked100ColumnSeriesDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Stacked100ColumnSeriesDescriptionMetadata.b = function (a) {
        if (Stacked100ColumnSeriesDescriptionMetadata.a == null) {
            Stacked100ColumnSeriesDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            Stacked100ColumnSeriesDescriptionMetadata.c(a, Stacked100ColumnSeriesDescriptionMetadata.a);
        }
    };
    Stacked100ColumnSeriesDescriptionMetadata.c = function (a, b) {
        StackedColumnSeriesDescriptionMetadata.c(a, b);
    };
    Stacked100ColumnSeriesDescriptionMetadata.d = function (a) {
        Stacked100ColumnSeriesDescriptionMetadata.b(a);
        a.n("Stacked100ColumnSeries", function () { return new Stacked100ColumnSeriesDescription(); });
        a.m("Stacked100ColumnSeries", Stacked100ColumnSeriesDescriptionMetadata.a);
    };
    Stacked100ColumnSeriesDescriptionMetadata.$t = markType(Stacked100ColumnSeriesDescriptionMetadata, 'Stacked100ColumnSeriesDescriptionMetadata');
    Stacked100ColumnSeriesDescriptionMetadata.a = null;
    return Stacked100ColumnSeriesDescriptionMetadata;
}(Base));
export { Stacked100ColumnSeriesDescriptionMetadata };
//# sourceMappingURL=Stacked100ColumnSeriesDescriptionMetadata.js.map