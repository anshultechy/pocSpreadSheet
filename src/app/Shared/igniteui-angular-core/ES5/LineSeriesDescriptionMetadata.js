/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { HorizontalAnchoredCategorySeriesDescriptionMetadata } from "./HorizontalAnchoredCategorySeriesDescriptionMetadata";
import { LineSeriesDescription } from "./LineSeriesDescription";
/**
 * @hidden
 */
var LineSeriesDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(LineSeriesDescriptionMetadata, _super);
    function LineSeriesDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LineSeriesDescriptionMetadata.b = function (a) {
        if (LineSeriesDescriptionMetadata.a == null) {
            LineSeriesDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            LineSeriesDescriptionMetadata.c(a, LineSeriesDescriptionMetadata.a);
        }
    };
    LineSeriesDescriptionMetadata.c = function (a, b) {
        HorizontalAnchoredCategorySeriesDescriptionMetadata.c(a, b);
        b.item("UnknownValuePlotting", "ExportedType:string:UnknownValuePlotting");
    };
    LineSeriesDescriptionMetadata.d = function (a) {
        LineSeriesDescriptionMetadata.b(a);
        a.n("LineSeries", function () { return new LineSeriesDescription(); });
        a.m("LineSeries", LineSeriesDescriptionMetadata.a);
    };
    LineSeriesDescriptionMetadata.$t = markType(LineSeriesDescriptionMetadata, 'LineSeriesDescriptionMetadata');
    LineSeriesDescriptionMetadata.a = null;
    return LineSeriesDescriptionMetadata;
}(Base));
export { LineSeriesDescriptionMetadata };
//# sourceMappingURL=LineSeriesDescriptionMetadata.js.map