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
import { PolarAreaSeriesDescription } from "./PolarAreaSeriesDescription";
/**
 * @hidden
 */
var PolarAreaSeriesDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(PolarAreaSeriesDescriptionMetadata, _super);
    function PolarAreaSeriesDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PolarAreaSeriesDescriptionMetadata.b = function (a) {
        if (PolarAreaSeriesDescriptionMetadata.a == null) {
            PolarAreaSeriesDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            PolarAreaSeriesDescriptionMetadata.c(a, PolarAreaSeriesDescriptionMetadata.a);
        }
    };
    PolarAreaSeriesDescriptionMetadata.c = function (a, b) {
        PolarLineSeriesBaseDescriptionMetadata.c(a, b);
        b.item("UnknownValuePlotting", "ExportedType:string:UnknownValuePlotting");
    };
    PolarAreaSeriesDescriptionMetadata.d = function (a) {
        PolarAreaSeriesDescriptionMetadata.b(a);
        a.n("PolarAreaSeries", function () { return new PolarAreaSeriesDescription(); });
        a.m("PolarAreaSeries", PolarAreaSeriesDescriptionMetadata.a);
    };
    PolarAreaSeriesDescriptionMetadata.$t = markType(PolarAreaSeriesDescriptionMetadata, 'PolarAreaSeriesDescriptionMetadata');
    PolarAreaSeriesDescriptionMetadata.a = null;
    return PolarAreaSeriesDescriptionMetadata;
}(Base));
export { PolarAreaSeriesDescriptionMetadata };
//# sourceMappingURL=PolarAreaSeriesDescriptionMetadata.js.map