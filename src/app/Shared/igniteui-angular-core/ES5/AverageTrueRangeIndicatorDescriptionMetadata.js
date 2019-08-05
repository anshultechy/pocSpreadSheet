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
import { AverageTrueRangeIndicatorDescription } from "./AverageTrueRangeIndicatorDescription";
/**
 * @hidden
 */
var AverageTrueRangeIndicatorDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(AverageTrueRangeIndicatorDescriptionMetadata, _super);
    function AverageTrueRangeIndicatorDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AverageTrueRangeIndicatorDescriptionMetadata.b = function (a) {
        if (AverageTrueRangeIndicatorDescriptionMetadata.a == null) {
            AverageTrueRangeIndicatorDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            AverageTrueRangeIndicatorDescriptionMetadata.c(a, AverageTrueRangeIndicatorDescriptionMetadata.a);
        }
    };
    AverageTrueRangeIndicatorDescriptionMetadata.c = function (a, b) {
        StrategyBasedIndicatorDescriptionMetadata.c(a, b);
        b.item("Period", "Number:int");
    };
    AverageTrueRangeIndicatorDescriptionMetadata.d = function (a) {
        AverageTrueRangeIndicatorDescriptionMetadata.b(a);
        a.n("AverageTrueRangeIndicator", function () { return new AverageTrueRangeIndicatorDescription(); });
        a.m("AverageTrueRangeIndicator", AverageTrueRangeIndicatorDescriptionMetadata.a);
    };
    AverageTrueRangeIndicatorDescriptionMetadata.$t = markType(AverageTrueRangeIndicatorDescriptionMetadata, 'AverageTrueRangeIndicatorDescriptionMetadata');
    AverageTrueRangeIndicatorDescriptionMetadata.a = null;
    return AverageTrueRangeIndicatorDescriptionMetadata;
}(Base));
export { AverageTrueRangeIndicatorDescriptionMetadata };
//# sourceMappingURL=AverageTrueRangeIndicatorDescriptionMetadata.js.map