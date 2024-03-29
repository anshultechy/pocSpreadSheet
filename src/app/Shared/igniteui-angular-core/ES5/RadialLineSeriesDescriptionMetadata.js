/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { AnchoredRadialSeriesDescriptionMetadata } from "./AnchoredRadialSeriesDescriptionMetadata";
import { RadialLineSeriesDescription } from "./RadialLineSeriesDescription";
/**
 * @hidden
 */
var RadialLineSeriesDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(RadialLineSeriesDescriptionMetadata, _super);
    function RadialLineSeriesDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RadialLineSeriesDescriptionMetadata.b = function (a) {
        if (RadialLineSeriesDescriptionMetadata.a == null) {
            RadialLineSeriesDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            RadialLineSeriesDescriptionMetadata.c(a, RadialLineSeriesDescriptionMetadata.a);
        }
    };
    RadialLineSeriesDescriptionMetadata.c = function (a, b) {
        AnchoredRadialSeriesDescriptionMetadata.c(a, b);
        b.item("UnknownValuePlotting", "ExportedType:string:UnknownValuePlotting");
    };
    RadialLineSeriesDescriptionMetadata.d = function (a) {
        RadialLineSeriesDescriptionMetadata.b(a);
        a.n("RadialLineSeries", function () { return new RadialLineSeriesDescription(); });
        a.m("RadialLineSeries", RadialLineSeriesDescriptionMetadata.a);
    };
    RadialLineSeriesDescriptionMetadata.$t = markType(RadialLineSeriesDescriptionMetadata, 'RadialLineSeriesDescriptionMetadata');
    RadialLineSeriesDescriptionMetadata.a = null;
    return RadialLineSeriesDescriptionMetadata;
}(Base));
export { RadialLineSeriesDescriptionMetadata };
//# sourceMappingURL=RadialLineSeriesDescriptionMetadata.js.map