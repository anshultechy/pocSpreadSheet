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
import { RadialAreaSeriesDescription } from "./RadialAreaSeriesDescription";
/**
 * @hidden
 */
var RadialAreaSeriesDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(RadialAreaSeriesDescriptionMetadata, _super);
    function RadialAreaSeriesDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RadialAreaSeriesDescriptionMetadata.b = function (a) {
        if (RadialAreaSeriesDescriptionMetadata.a == null) {
            RadialAreaSeriesDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            RadialAreaSeriesDescriptionMetadata.c(a, RadialAreaSeriesDescriptionMetadata.a);
        }
    };
    RadialAreaSeriesDescriptionMetadata.c = function (a, b) {
        AnchoredRadialSeriesDescriptionMetadata.c(a, b);
        b.item("UnknownValuePlotting", "ExportedType:string:UnknownValuePlotting");
    };
    RadialAreaSeriesDescriptionMetadata.d = function (a) {
        RadialAreaSeriesDescriptionMetadata.b(a);
        a.n("RadialAreaSeries", function () { return new RadialAreaSeriesDescription(); });
        a.m("RadialAreaSeries", RadialAreaSeriesDescriptionMetadata.a);
    };
    RadialAreaSeriesDescriptionMetadata.$t = markType(RadialAreaSeriesDescriptionMetadata, 'RadialAreaSeriesDescriptionMetadata');
    RadialAreaSeriesDescriptionMetadata.a = null;
    return RadialAreaSeriesDescriptionMetadata;
}(Base));
export { RadialAreaSeriesDescriptionMetadata };
//# sourceMappingURL=RadialAreaSeriesDescriptionMetadata.js.map