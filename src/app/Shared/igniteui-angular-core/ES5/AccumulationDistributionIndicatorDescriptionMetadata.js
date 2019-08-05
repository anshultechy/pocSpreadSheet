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
import { AccumulationDistributionIndicatorDescription } from "./AccumulationDistributionIndicatorDescription";
/**
 * @hidden
 */
var AccumulationDistributionIndicatorDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(AccumulationDistributionIndicatorDescriptionMetadata, _super);
    function AccumulationDistributionIndicatorDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AccumulationDistributionIndicatorDescriptionMetadata.b = function (a) {
        if (AccumulationDistributionIndicatorDescriptionMetadata.a == null) {
            AccumulationDistributionIndicatorDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            AccumulationDistributionIndicatorDescriptionMetadata.c(a, AccumulationDistributionIndicatorDescriptionMetadata.a);
        }
    };
    AccumulationDistributionIndicatorDescriptionMetadata.c = function (a, b) {
        StrategyBasedIndicatorDescriptionMetadata.c(a, b);
    };
    AccumulationDistributionIndicatorDescriptionMetadata.d = function (a) {
        AccumulationDistributionIndicatorDescriptionMetadata.b(a);
        a.n("AccumulationDistributionIndicator", function () { return new AccumulationDistributionIndicatorDescription(); });
        a.m("AccumulationDistributionIndicator", AccumulationDistributionIndicatorDescriptionMetadata.a);
    };
    AccumulationDistributionIndicatorDescriptionMetadata.$t = markType(AccumulationDistributionIndicatorDescriptionMetadata, 'AccumulationDistributionIndicatorDescriptionMetadata');
    AccumulationDistributionIndicatorDescriptionMetadata.a = null;
    return AccumulationDistributionIndicatorDescriptionMetadata;
}(Base));
export { AccumulationDistributionIndicatorDescriptionMetadata };
//# sourceMappingURL=AccumulationDistributionIndicatorDescriptionMetadata.js.map