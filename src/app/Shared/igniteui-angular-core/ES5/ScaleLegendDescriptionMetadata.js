/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { LegendBaseDescriptionMetadata } from "./LegendBaseDescriptionMetadata";
import { ScaleLegendDescription } from "./ScaleLegendDescription";
/**
 * @hidden
 */
var ScaleLegendDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(ScaleLegendDescriptionMetadata, _super);
    function ScaleLegendDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ScaleLegendDescriptionMetadata.b = function (a) {
        if (ScaleLegendDescriptionMetadata.a == null) {
            ScaleLegendDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            ScaleLegendDescriptionMetadata.c(a, ScaleLegendDescriptionMetadata.a);
        }
    };
    ScaleLegendDescriptionMetadata.c = function (a, b) {
        LegendBaseDescriptionMetadata.c(a, b);
    };
    ScaleLegendDescriptionMetadata.d = function (a) {
        ScaleLegendDescriptionMetadata.b(a);
        a.n("ScaleLegend", function () { return new ScaleLegendDescription(); });
        a.m("ScaleLegend", ScaleLegendDescriptionMetadata.a);
    };
    ScaleLegendDescriptionMetadata.$t = markType(ScaleLegendDescriptionMetadata, 'ScaleLegendDescriptionMetadata');
    ScaleLegendDescriptionMetadata.a = null;
    return ScaleLegendDescriptionMetadata;
}(Base));
export { ScaleLegendDescriptionMetadata };
//# sourceMappingURL=ScaleLegendDescriptionMetadata.js.map