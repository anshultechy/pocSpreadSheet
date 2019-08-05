/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { StrategyBasedIndicatorDescriptionMetadata } from "./StrategyBasedIndicatorDescriptionMetadata";
import { AverageDirectionalIndexIndicatorDescription } from "./AverageDirectionalIndexIndicatorDescription";
/**
 * @hidden
 */
var AverageDirectionalIndexIndicatorDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(AverageDirectionalIndexIndicatorDescriptionMetadata, _super);
    function AverageDirectionalIndexIndicatorDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AverageDirectionalIndexIndicatorDescriptionMetadata.b = function (a) {
        if (AverageDirectionalIndexIndicatorDescriptionMetadata.a == null) {
            AverageDirectionalIndexIndicatorDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            AverageDirectionalIndexIndicatorDescriptionMetadata.c(a, AverageDirectionalIndexIndicatorDescriptionMetadata.a);
        }
    };
    AverageDirectionalIndexIndicatorDescriptionMetadata.c = function (a, b) {
        StrategyBasedIndicatorDescriptionMetadata.c(a, b);
        b.item("Period", "Number:int");
    };
    AverageDirectionalIndexIndicatorDescriptionMetadata.d = function (a) {
        AverageDirectionalIndexIndicatorDescriptionMetadata.b(a);
        a.n("AverageDirectionalIndexIndicator", function () { return new AverageDirectionalIndexIndicatorDescription(); });
        a.m("AverageDirectionalIndexIndicator", AverageDirectionalIndexIndicatorDescriptionMetadata.a);
    };
    AverageDirectionalIndexIndicatorDescriptionMetadata.$t = markType(AverageDirectionalIndexIndicatorDescriptionMetadata, 'AverageDirectionalIndexIndicatorDescriptionMetadata');
    AverageDirectionalIndexIndicatorDescriptionMetadata.a = null;
    return AverageDirectionalIndexIndicatorDescriptionMetadata;
}(Base));
export { AverageDirectionalIndexIndicatorDescriptionMetadata };
//# sourceMappingURL=AverageDirectionalIndexIndicatorDescriptionMetadata.js.map