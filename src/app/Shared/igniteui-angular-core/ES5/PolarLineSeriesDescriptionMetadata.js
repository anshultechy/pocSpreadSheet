/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { PolarLineSeriesBaseDescriptionMetadata } from "./PolarLineSeriesBaseDescriptionMetadata";
import { PolarLineSeriesDescription } from "./PolarLineSeriesDescription";
/**
 * @hidden
 */
var PolarLineSeriesDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(PolarLineSeriesDescriptionMetadata, _super);
    function PolarLineSeriesDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PolarLineSeriesDescriptionMetadata.b = function (a) {
        if (PolarLineSeriesDescriptionMetadata.a == null) {
            PolarLineSeriesDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            PolarLineSeriesDescriptionMetadata.c(a, PolarLineSeriesDescriptionMetadata.a);
        }
    };
    PolarLineSeriesDescriptionMetadata.c = function (a, b) {
        PolarLineSeriesBaseDescriptionMetadata.c(a, b);
        b.item("UnknownValuePlotting", "ExportedType:string:UnknownValuePlotting");
    };
    PolarLineSeriesDescriptionMetadata.d = function (a) {
        PolarLineSeriesDescriptionMetadata.b(a);
        a.n("PolarLineSeries", function () { return new PolarLineSeriesDescription(); });
        a.m("PolarLineSeries", PolarLineSeriesDescriptionMetadata.a);
    };
    PolarLineSeriesDescriptionMetadata.$t = markType(PolarLineSeriesDescriptionMetadata, 'PolarLineSeriesDescriptionMetadata');
    PolarLineSeriesDescriptionMetadata.a = null;
    return PolarLineSeriesDescriptionMetadata;
}(Base));
export { PolarLineSeriesDescriptionMetadata };
//# sourceMappingURL=PolarLineSeriesDescriptionMetadata.js.map