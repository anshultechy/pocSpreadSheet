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
import { ScatterSeriesDescription } from "./ScatterSeriesDescription";
/**
 * @hidden
 */
var ScatterSeriesDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(ScatterSeriesDescriptionMetadata, _super);
    function ScatterSeriesDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ScatterSeriesDescriptionMetadata.b = function (a) {
        if (ScatterSeriesDescriptionMetadata.a == null) {
            ScatterSeriesDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            ScatterSeriesDescriptionMetadata.c(a, ScatterSeriesDescriptionMetadata.a);
        }
    };
    ScatterSeriesDescriptionMetadata.c = function (a, b) {
        ScatterBaseDescriptionMetadata.c(a, b);
    };
    ScatterSeriesDescriptionMetadata.d = function (a) {
        ScatterSeriesDescriptionMetadata.b(a);
        a.n("ScatterSeries", function () { return new ScatterSeriesDescription(); });
        a.m("ScatterSeries", ScatterSeriesDescriptionMetadata.a);
    };
    ScatterSeriesDescriptionMetadata.$t = markType(ScatterSeriesDescriptionMetadata, 'ScatterSeriesDescriptionMetadata');
    ScatterSeriesDescriptionMetadata.a = null;
    return ScatterSeriesDescriptionMetadata;
}(Base));
export { ScatterSeriesDescriptionMetadata };
//# sourceMappingURL=ScatterSeriesDescriptionMetadata.js.map