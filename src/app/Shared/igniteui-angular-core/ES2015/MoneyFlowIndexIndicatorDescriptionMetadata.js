/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { StrategyBasedIndicatorDescriptionMetadata } from "./StrategyBasedIndicatorDescriptionMetadata";
import { MoneyFlowIndexIndicatorDescription } from "./MoneyFlowIndexIndicatorDescription";
/**
 * @hidden
 */
export class MoneyFlowIndexIndicatorDescriptionMetadata extends Base {
    static b(a) {
        if (MoneyFlowIndexIndicatorDescriptionMetadata.a == null) {
            MoneyFlowIndexIndicatorDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            MoneyFlowIndexIndicatorDescriptionMetadata.c(a, MoneyFlowIndexIndicatorDescriptionMetadata.a);
        }
    }
    static c(a, b) {
        StrategyBasedIndicatorDescriptionMetadata.c(a, b);
        b.item("Period", "Number:int");
    }
    static d(a) {
        MoneyFlowIndexIndicatorDescriptionMetadata.b(a);
        a.n("MoneyFlowIndexIndicator", () => new MoneyFlowIndexIndicatorDescription());
        a.m("MoneyFlowIndexIndicator", MoneyFlowIndexIndicatorDescriptionMetadata.a);
    }
}
MoneyFlowIndexIndicatorDescriptionMetadata.$t = markType(MoneyFlowIndexIndicatorDescriptionMetadata, 'MoneyFlowIndexIndicatorDescriptionMetadata');
MoneyFlowIndexIndicatorDescriptionMetadata.a = null;
//# sourceMappingURL=MoneyFlowIndexIndicatorDescriptionMetadata.js.map