/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { StrategyBasedIndicatorDescriptionMetadata } from "./StrategyBasedIndicatorDescriptionMetadata";
/**
 * @hidden
 */
export class ItemwiseStrategyBasedIndicatorDescriptionMetadata extends Base {
    static b(a) {
        if (ItemwiseStrategyBasedIndicatorDescriptionMetadata.a == null) {
            ItemwiseStrategyBasedIndicatorDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            ItemwiseStrategyBasedIndicatorDescriptionMetadata.c(a, ItemwiseStrategyBasedIndicatorDescriptionMetadata.a);
        }
    }
    static c(a, b) {
        StrategyBasedIndicatorDescriptionMetadata.c(a, b);
    }
    static d(a) {
        ItemwiseStrategyBasedIndicatorDescriptionMetadata.b(a);
        a.m("ItemwiseStrategyBasedIndicator", ItemwiseStrategyBasedIndicatorDescriptionMetadata.a);
    }
}
ItemwiseStrategyBasedIndicatorDescriptionMetadata.$t = markType(ItemwiseStrategyBasedIndicatorDescriptionMetadata, 'ItemwiseStrategyBasedIndicatorDescriptionMetadata');
ItemwiseStrategyBasedIndicatorDescriptionMetadata.a = null;
//# sourceMappingURL=ItemwiseStrategyBasedIndicatorDescriptionMetadata.js.map