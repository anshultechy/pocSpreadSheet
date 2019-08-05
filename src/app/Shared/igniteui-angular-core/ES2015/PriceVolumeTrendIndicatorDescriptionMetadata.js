/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { StrategyBasedIndicatorDescriptionMetadata } from "./StrategyBasedIndicatorDescriptionMetadata";
import { PriceVolumeTrendIndicatorDescription } from "./PriceVolumeTrendIndicatorDescription";
/**
 * @hidden
 */
export class PriceVolumeTrendIndicatorDescriptionMetadata extends Base {
    static b(a) {
        if (PriceVolumeTrendIndicatorDescriptionMetadata.a == null) {
            PriceVolumeTrendIndicatorDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            PriceVolumeTrendIndicatorDescriptionMetadata.c(a, PriceVolumeTrendIndicatorDescriptionMetadata.a);
        }
    }
    static c(a, b) {
        StrategyBasedIndicatorDescriptionMetadata.c(a, b);
    }
    static d(a) {
        PriceVolumeTrendIndicatorDescriptionMetadata.b(a);
        a.n("PriceVolumeTrendIndicator", () => new PriceVolumeTrendIndicatorDescription());
        a.m("PriceVolumeTrendIndicator", PriceVolumeTrendIndicatorDescriptionMetadata.a);
    }
}
PriceVolumeTrendIndicatorDescriptionMetadata.$t = markType(PriceVolumeTrendIndicatorDescriptionMetadata, 'PriceVolumeTrendIndicatorDescriptionMetadata');
PriceVolumeTrendIndicatorDescriptionMetadata.a = null;
//# sourceMappingURL=PriceVolumeTrendIndicatorDescriptionMetadata.js.map