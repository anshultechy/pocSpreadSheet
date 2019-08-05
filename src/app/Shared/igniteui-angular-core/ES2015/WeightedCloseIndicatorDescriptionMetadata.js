/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { ItemwiseStrategyBasedIndicatorDescriptionMetadata } from "./ItemwiseStrategyBasedIndicatorDescriptionMetadata";
import { WeightedCloseIndicatorDescription } from "./WeightedCloseIndicatorDescription";
/**
 * @hidden
 */
export class WeightedCloseIndicatorDescriptionMetadata extends Base {
    static b(a) {
        if (WeightedCloseIndicatorDescriptionMetadata.a == null) {
            WeightedCloseIndicatorDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            WeightedCloseIndicatorDescriptionMetadata.c(a, WeightedCloseIndicatorDescriptionMetadata.a);
        }
    }
    static c(a, b) {
        ItemwiseStrategyBasedIndicatorDescriptionMetadata.c(a, b);
    }
    static d(a) {
        WeightedCloseIndicatorDescriptionMetadata.b(a);
        a.n("WeightedCloseIndicator", () => new WeightedCloseIndicatorDescription());
        a.m("WeightedCloseIndicator", WeightedCloseIndicatorDescriptionMetadata.a);
    }
}
WeightedCloseIndicatorDescriptionMetadata.$t = markType(WeightedCloseIndicatorDescriptionMetadata, 'WeightedCloseIndicatorDescriptionMetadata');
WeightedCloseIndicatorDescriptionMetadata.a = null;
//# sourceMappingURL=WeightedCloseIndicatorDescriptionMetadata.js.map