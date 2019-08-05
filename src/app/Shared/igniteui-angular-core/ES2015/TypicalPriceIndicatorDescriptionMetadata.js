/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { StrategyBasedIndicatorDescriptionMetadata } from "./StrategyBasedIndicatorDescriptionMetadata";
import { TypicalPriceIndicatorDescription } from "./TypicalPriceIndicatorDescription";
/**
 * @hidden
 */
export class TypicalPriceIndicatorDescriptionMetadata extends Base {
    static b(a) {
        if (TypicalPriceIndicatorDescriptionMetadata.a == null) {
            TypicalPriceIndicatorDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            TypicalPriceIndicatorDescriptionMetadata.c(a, TypicalPriceIndicatorDescriptionMetadata.a);
        }
    }
    static c(a, b) {
        StrategyBasedIndicatorDescriptionMetadata.c(a, b);
    }
    static d(a) {
        TypicalPriceIndicatorDescriptionMetadata.b(a);
        a.n("TypicalPriceIndicator", () => new TypicalPriceIndicatorDescription());
        a.m("TypicalPriceIndicator", TypicalPriceIndicatorDescriptionMetadata.a);
    }
}
TypicalPriceIndicatorDescriptionMetadata.$t = markType(TypicalPriceIndicatorDescriptionMetadata, 'TypicalPriceIndicatorDescriptionMetadata');
TypicalPriceIndicatorDescriptionMetadata.a = null;
//# sourceMappingURL=TypicalPriceIndicatorDescriptionMetadata.js.map