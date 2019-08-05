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
import { MoneyFlowIndexIndicatorDescription } from "./MoneyFlowIndexIndicatorDescription";
/**
 * @hidden
 */
var MoneyFlowIndexIndicatorDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(MoneyFlowIndexIndicatorDescriptionMetadata, _super);
    function MoneyFlowIndexIndicatorDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MoneyFlowIndexIndicatorDescriptionMetadata.b = function (a) {
        if (MoneyFlowIndexIndicatorDescriptionMetadata.a == null) {
            MoneyFlowIndexIndicatorDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            MoneyFlowIndexIndicatorDescriptionMetadata.c(a, MoneyFlowIndexIndicatorDescriptionMetadata.a);
        }
    };
    MoneyFlowIndexIndicatorDescriptionMetadata.c = function (a, b) {
        StrategyBasedIndicatorDescriptionMetadata.c(a, b);
        b.item("Period", "Number:int");
    };
    MoneyFlowIndexIndicatorDescriptionMetadata.d = function (a) {
        MoneyFlowIndexIndicatorDescriptionMetadata.b(a);
        a.n("MoneyFlowIndexIndicator", function () { return new MoneyFlowIndexIndicatorDescription(); });
        a.m("MoneyFlowIndexIndicator", MoneyFlowIndexIndicatorDescriptionMetadata.a);
    };
    MoneyFlowIndexIndicatorDescriptionMetadata.$t = markType(MoneyFlowIndexIndicatorDescriptionMetadata, 'MoneyFlowIndexIndicatorDescriptionMetadata');
    MoneyFlowIndexIndicatorDescriptionMetadata.a = null;
    return MoneyFlowIndexIndicatorDescriptionMetadata;
}(Base));
export { MoneyFlowIndexIndicatorDescriptionMetadata };
//# sourceMappingURL=MoneyFlowIndexIndicatorDescriptionMetadata.js.map