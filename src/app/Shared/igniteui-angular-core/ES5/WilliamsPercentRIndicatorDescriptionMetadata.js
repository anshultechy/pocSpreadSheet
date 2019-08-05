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
import { WilliamsPercentRIndicatorDescription } from "./WilliamsPercentRIndicatorDescription";
/**
 * @hidden
 */
var WilliamsPercentRIndicatorDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(WilliamsPercentRIndicatorDescriptionMetadata, _super);
    function WilliamsPercentRIndicatorDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WilliamsPercentRIndicatorDescriptionMetadata.b = function (a) {
        if (WilliamsPercentRIndicatorDescriptionMetadata.a == null) {
            WilliamsPercentRIndicatorDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            WilliamsPercentRIndicatorDescriptionMetadata.c(a, WilliamsPercentRIndicatorDescriptionMetadata.a);
        }
    };
    WilliamsPercentRIndicatorDescriptionMetadata.c = function (a, b) {
        StrategyBasedIndicatorDescriptionMetadata.c(a, b);
        b.item("Period", "Number:int");
    };
    WilliamsPercentRIndicatorDescriptionMetadata.d = function (a) {
        WilliamsPercentRIndicatorDescriptionMetadata.b(a);
        a.n("WilliamsPercentRIndicator", function () { return new WilliamsPercentRIndicatorDescription(); });
        a.m("WilliamsPercentRIndicator", WilliamsPercentRIndicatorDescriptionMetadata.a);
    };
    WilliamsPercentRIndicatorDescriptionMetadata.$t = markType(WilliamsPercentRIndicatorDescriptionMetadata, 'WilliamsPercentRIndicatorDescriptionMetadata');
    WilliamsPercentRIndicatorDescriptionMetadata.a = null;
    return WilliamsPercentRIndicatorDescriptionMetadata;
}(Base));
export { WilliamsPercentRIndicatorDescriptionMetadata };
//# sourceMappingURL=WilliamsPercentRIndicatorDescriptionMetadata.js.map