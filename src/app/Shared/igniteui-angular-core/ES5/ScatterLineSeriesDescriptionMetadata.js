/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { ScatterBaseDescriptionMetadata } from "./ScatterBaseDescriptionMetadata";
import { ScatterLineSeriesDescription } from "./ScatterLineSeriesDescription";
/**
 * @hidden
 */
var ScatterLineSeriesDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(ScatterLineSeriesDescriptionMetadata, _super);
    function ScatterLineSeriesDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ScatterLineSeriesDescriptionMetadata.b = function (a) {
        if (ScatterLineSeriesDescriptionMetadata.a == null) {
            ScatterLineSeriesDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            ScatterLineSeriesDescriptionMetadata.c(a, ScatterLineSeriesDescriptionMetadata.a);
        }
    };
    ScatterLineSeriesDescriptionMetadata.c = function (a, b) {
        ScatterBaseDescriptionMetadata.c(a, b);
        b.item("UnknownValuePlotting", "ExportedType:string:UnknownValuePlotting");
    };
    ScatterLineSeriesDescriptionMetadata.d = function (a) {
        ScatterLineSeriesDescriptionMetadata.b(a);
        a.n("ScatterLineSeries", function () { return new ScatterLineSeriesDescription(); });
        a.m("ScatterLineSeries", ScatterLineSeriesDescriptionMetadata.a);
    };
    ScatterLineSeriesDescriptionMetadata.$t = markType(ScatterLineSeriesDescriptionMetadata, 'ScatterLineSeriesDescriptionMetadata');
    ScatterLineSeriesDescriptionMetadata.a = null;
    return ScatterLineSeriesDescriptionMetadata;
}(Base));
export { ScatterLineSeriesDescriptionMetadata };
//# sourceMappingURL=ScatterLineSeriesDescriptionMetadata.js.map