/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { StrategyBasedIndicatorDescriptionMetadata } from "./StrategyBasedIndicatorDescriptionMetadata";
import { BollingerBandWidthIndicatorDescription } from "./BollingerBandWidthIndicatorDescription";
/**
 * @hidden
 */
export class BollingerBandWidthIndicatorDescriptionMetadata extends Base {
    static b(a) {
        if (BollingerBandWidthIndicatorDescriptionMetadata.a == null) {
            BollingerBandWidthIndicatorDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            BollingerBandWidthIndicatorDescriptionMetadata.c(a, BollingerBandWidthIndicatorDescriptionMetadata.a);
        }
    }
    static c(a, b) {
        StrategyBasedIndicatorDescriptionMetadata.c(a, b);
        b.item("Period", "Number:int");
        b.item("Multiplier", "Number:double");
    }
    static d(a) {
        BollingerBandWidthIndicatorDescriptionMetadata.b(a);
        a.n("BollingerBandWidthIndicator", () => new BollingerBandWidthIndicatorDescription());
        a.m("BollingerBandWidthIndicator", BollingerBandWidthIndicatorDescriptionMetadata.a);
    }
}
BollingerBandWidthIndicatorDescriptionMetadata.$t = markType(BollingerBandWidthIndicatorDescriptionMetadata, 'BollingerBandWidthIndicatorDescriptionMetadata');
BollingerBandWidthIndicatorDescriptionMetadata.a = null;
//# sourceMappingURL=BollingerBandWidthIndicatorDescriptionMetadata.js.map