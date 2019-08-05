/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { ScalerParamsDescription } from "./ScalerParamsDescription";
/**
 * @hidden
 */
var ScalerParamsDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(ScalerParamsDescriptionMetadata, _super);
    function ScalerParamsDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ScalerParamsDescriptionMetadata.b = function (a) {
        if (ScalerParamsDescriptionMetadata.a == null) {
            ScalerParamsDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            ScalerParamsDescriptionMetadata.c(a, ScalerParamsDescriptionMetadata.a);
        }
    };
    ScalerParamsDescriptionMetadata.c = function (a, b) {
        b.item("ReferenceValue", "Number:double");
    };
    ScalerParamsDescriptionMetadata.d = function (a) {
        ScalerParamsDescriptionMetadata.b(a);
        a.n("ScalerParams", function () { return new ScalerParamsDescription(); });
        a.m("ScalerParams", ScalerParamsDescriptionMetadata.a);
    };
    ScalerParamsDescriptionMetadata.$t = markType(ScalerParamsDescriptionMetadata, 'ScalerParamsDescriptionMetadata');
    ScalerParamsDescriptionMetadata.a = null;
    return ScalerParamsDescriptionMetadata;
}(Base));
export { ScalerParamsDescriptionMetadata };
//# sourceMappingURL=ScalerParamsDescriptionMetadata.js.map