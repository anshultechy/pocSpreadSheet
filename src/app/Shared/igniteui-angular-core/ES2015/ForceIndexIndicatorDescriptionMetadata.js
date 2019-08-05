/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { StrategyBasedIndicatorDescriptionMetadata } from "./StrategyBasedIndicatorDescriptionMetadata";
import { ForceIndexIndicatorDescription } from "./ForceIndexIndicatorDescription";
/**
 * @hidden
 */
export class ForceIndexIndicatorDescriptionMetadata extends Base {
    static b(a) {
        if (ForceIndexIndicatorDescriptionMetadata.a == null) {
            ForceIndexIndicatorDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            ForceIndexIndicatorDescriptionMetadata.c(a, ForceIndexIndicatorDescriptionMetadata.a);
        }
    }
    static c(a, b) {
        StrategyBasedIndicatorDescriptionMetadata.c(a, b);
        b.item("Period", "Number:int");
    }
    static d(a) {
        ForceIndexIndicatorDescriptionMetadata.b(a);
        a.n("ForceIndexIndicator", () => new ForceIndexIndicatorDescription());
        a.m("ForceIndexIndicator", ForceIndexIndicatorDescriptionMetadata.a);
    }
}
ForceIndexIndicatorDescriptionMetadata.$t = markType(ForceIndexIndicatorDescriptionMetadata, 'ForceIndexIndicatorDescriptionMetadata');
ForceIndexIndicatorDescriptionMetadata.a = null;
//# sourceMappingURL=ForceIndexIndicatorDescriptionMetadata.js.map