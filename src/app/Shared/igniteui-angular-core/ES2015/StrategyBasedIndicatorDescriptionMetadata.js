/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { FinancialIndicatorDescriptionMetadata } from "./FinancialIndicatorDescriptionMetadata";
/**
 * @hidden
 */
export class StrategyBasedIndicatorDescriptionMetadata extends Base {
    static b(a) {
        if (StrategyBasedIndicatorDescriptionMetadata.a == null) {
            StrategyBasedIndicatorDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            StrategyBasedIndicatorDescriptionMetadata.c(a, StrategyBasedIndicatorDescriptionMetadata.a);
        }
    }
    static c(a, b) {
        FinancialIndicatorDescriptionMetadata.c(a, b);
    }
    static d(a) {
        StrategyBasedIndicatorDescriptionMetadata.b(a);
        a.m("StrategyBasedIndicator", StrategyBasedIndicatorDescriptionMetadata.a);
    }
}
StrategyBasedIndicatorDescriptionMetadata.$t = markType(StrategyBasedIndicatorDescriptionMetadata, 'StrategyBasedIndicatorDescriptionMetadata');
StrategyBasedIndicatorDescriptionMetadata.a = null;
//# sourceMappingURL=StrategyBasedIndicatorDescriptionMetadata.js.map