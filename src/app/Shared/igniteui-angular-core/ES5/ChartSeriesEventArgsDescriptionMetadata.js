/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { SeriesDescriptionMetadata } from "./SeriesDescriptionMetadata";
import { ChartSeriesEventArgsDescription } from "./ChartSeriesEventArgsDescription";
/**
 * @hidden
 */
var ChartSeriesEventArgsDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(ChartSeriesEventArgsDescriptionMetadata, _super);
    function ChartSeriesEventArgsDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ChartSeriesEventArgsDescriptionMetadata.b = function (a) {
        if (ChartSeriesEventArgsDescriptionMetadata.a == null) {
            ChartSeriesEventArgsDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            ChartSeriesEventArgsDescriptionMetadata.c(a, ChartSeriesEventArgsDescriptionMetadata.a);
            SeriesDescriptionMetadata.d(a);
        }
    };
    ChartSeriesEventArgsDescriptionMetadata.c = function (a, b) {
        b.item("Series", "ExportedType");
    };
    ChartSeriesEventArgsDescriptionMetadata.d = function (a) {
        ChartSeriesEventArgsDescriptionMetadata.b(a);
        a.n("ChartSeriesEventArgs", function () { return new ChartSeriesEventArgsDescription(); });
        a.m("ChartSeriesEventArgs", ChartSeriesEventArgsDescriptionMetadata.a);
    };
    ChartSeriesEventArgsDescriptionMetadata.$t = markType(ChartSeriesEventArgsDescriptionMetadata, 'ChartSeriesEventArgsDescriptionMetadata');
    ChartSeriesEventArgsDescriptionMetadata.a = null;
    return ChartSeriesEventArgsDescriptionMetadata;
}(Base));
export { ChartSeriesEventArgsDescriptionMetadata };
//# sourceMappingURL=ChartSeriesEventArgsDescriptionMetadata.js.map