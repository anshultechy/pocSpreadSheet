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
import { RadialColumnSeriesDescription } from "./RadialColumnSeriesDescription";
/**
 * @hidden
 */
var RadialColumnSeriesDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(RadialColumnSeriesDescriptionMetadata, _super);
    function RadialColumnSeriesDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RadialColumnSeriesDescriptionMetadata.b = function (a) {
        if (RadialColumnSeriesDescriptionMetadata.a == null) {
            RadialColumnSeriesDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            RadialColumnSeriesDescriptionMetadata.c(a, RadialColumnSeriesDescriptionMetadata.a);
        }
    };
    RadialColumnSeriesDescriptionMetadata.c = function (a, b) {
        AnchoredRadialSeriesDescriptionMetadata.c(a, b);
        b.item("RadiusX", "Number:double");
        b.item("RadiusY", "Number:double");
    };
    RadialColumnSeriesDescriptionMetadata.d = function (a) {
        RadialColumnSeriesDescriptionMetadata.b(a);
        a.n("RadialColumnSeries", function () { return new RadialColumnSeriesDescription(); });
        a.m("RadialColumnSeries", RadialColumnSeriesDescriptionMetadata.a);
    };
    RadialColumnSeriesDescriptionMetadata.$t = markType(RadialColumnSeriesDescriptionMetadata, 'RadialColumnSeriesDescriptionMetadata');
    RadialColumnSeriesDescriptionMetadata.a = null;
    return RadialColumnSeriesDescriptionMetadata;
}(Base));
export { RadialColumnSeriesDescriptionMetadata };
//# sourceMappingURL=RadialColumnSeriesDescriptionMetadata.js.map