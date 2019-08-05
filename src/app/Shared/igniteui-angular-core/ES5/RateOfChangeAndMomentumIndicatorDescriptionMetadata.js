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
import { RateOfChangeAndMomentumIndicatorDescription } from "./RateOfChangeAndMomentumIndicatorDescription";
/**
 * @hidden
 */
var RateOfChangeAndMomentumIndicatorDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(RateOfChangeAndMomentumIndicatorDescriptionMetadata, _super);
    function RateOfChangeAndMomentumIndicatorDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RateOfChangeAndMomentumIndicatorDescriptionMetadata.b = function (a) {
        if (RateOfChangeAndMomentumIndicatorDescriptionMetadata.a == null) {
            RateOfChangeAndMomentumIndicatorDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            RateOfChangeAndMomentumIndicatorDescriptionMetadata.c(a, RateOfChangeAndMomentumIndicatorDescriptionMetadata.a);
        }
    };
    RateOfChangeAndMomentumIndicatorDescriptionMetadata.c = function (a, b) {
        StrategyBasedIndicatorDescriptionMetadata.c(a, b);
        b.item("Period", "Number:int");
    };
    RateOfChangeAndMomentumIndicatorDescriptionMetadata.d = function (a) {
        RateOfChangeAndMomentumIndicatorDescriptionMetadata.b(a);
        a.n("RateOfChangeAndMomentumIndicator", function () { return new RateOfChangeAndMomentumIndicatorDescription(); });
        a.m("RateOfChangeAndMomentumIndicator", RateOfChangeAndMomentumIndicatorDescriptionMetadata.a);
    };
    RateOfChangeAndMomentumIndicatorDescriptionMetadata.$t = markType(RateOfChangeAndMomentumIndicatorDescriptionMetadata, 'RateOfChangeAndMomentumIndicatorDescriptionMetadata');
    RateOfChangeAndMomentumIndicatorDescriptionMetadata.a = null;
    return RateOfChangeAndMomentumIndicatorDescriptionMetadata;
}(Base));
export { RateOfChangeAndMomentumIndicatorDescriptionMetadata };
//# sourceMappingURL=RateOfChangeAndMomentumIndicatorDescriptionMetadata.js.map