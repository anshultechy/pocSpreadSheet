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
import { ChaikinVolatilityIndicatorDescription } from "./ChaikinVolatilityIndicatorDescription";
/**
 * @hidden
 */
var ChaikinVolatilityIndicatorDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(ChaikinVolatilityIndicatorDescriptionMetadata, _super);
    function ChaikinVolatilityIndicatorDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ChaikinVolatilityIndicatorDescriptionMetadata.b = function (a) {
        if (ChaikinVolatilityIndicatorDescriptionMetadata.a == null) {
            ChaikinVolatilityIndicatorDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            ChaikinVolatilityIndicatorDescriptionMetadata.c(a, ChaikinVolatilityIndicatorDescriptionMetadata.a);
        }
    };
    ChaikinVolatilityIndicatorDescriptionMetadata.c = function (a, b) {
        StrategyBasedIndicatorDescriptionMetadata.c(a, b);
        b.item("Period", "Number:int");
    };
    ChaikinVolatilityIndicatorDescriptionMetadata.d = function (a) {
        ChaikinVolatilityIndicatorDescriptionMetadata.b(a);
        a.n("ChaikinVolatilityIndicator", function () { return new ChaikinVolatilityIndicatorDescription(); });
        a.m("ChaikinVolatilityIndicator", ChaikinVolatilityIndicatorDescriptionMetadata.a);
    };
    ChaikinVolatilityIndicatorDescriptionMetadata.$t = markType(ChaikinVolatilityIndicatorDescriptionMetadata, 'ChaikinVolatilityIndicatorDescriptionMetadata');
    ChaikinVolatilityIndicatorDescriptionMetadata.a = null;
    return ChaikinVolatilityIndicatorDescriptionMetadata;
}(Base));
export { ChaikinVolatilityIndicatorDescriptionMetadata };
//# sourceMappingURL=ChaikinVolatilityIndicatorDescriptionMetadata.js.map