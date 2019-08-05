/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { PolarBaseDescriptionMetadata } from "./PolarBaseDescriptionMetadata";
import { PolarScatterSeriesDescription } from "./PolarScatterSeriesDescription";
/**
 * @hidden
 */
var PolarScatterSeriesDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(PolarScatterSeriesDescriptionMetadata, _super);
    function PolarScatterSeriesDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PolarScatterSeriesDescriptionMetadata.b = function (a) {
        if (PolarScatterSeriesDescriptionMetadata.a == null) {
            PolarScatterSeriesDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            PolarScatterSeriesDescriptionMetadata.c(a, PolarScatterSeriesDescriptionMetadata.a);
        }
    };
    PolarScatterSeriesDescriptionMetadata.c = function (a, b) {
        PolarBaseDescriptionMetadata.c(a, b);
    };
    PolarScatterSeriesDescriptionMetadata.d = function (a) {
        PolarScatterSeriesDescriptionMetadata.b(a);
        a.n("PolarScatterSeries", function () { return new PolarScatterSeriesDescription(); });
        a.m("PolarScatterSeries", PolarScatterSeriesDescriptionMetadata.a);
    };
    PolarScatterSeriesDescriptionMetadata.$t = markType(PolarScatterSeriesDescriptionMetadata, 'PolarScatterSeriesDescriptionMetadata');
    PolarScatterSeriesDescriptionMetadata.a = null;
    return PolarScatterSeriesDescriptionMetadata;
}(Base));
export { PolarScatterSeriesDescriptionMetadata };
//# sourceMappingURL=PolarScatterSeriesDescriptionMetadata.js.map