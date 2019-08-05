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
/**
 * @hidden
 */
var ItemwiseStrategyBasedIndicatorDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(ItemwiseStrategyBasedIndicatorDescriptionMetadata, _super);
    function ItemwiseStrategyBasedIndicatorDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ItemwiseStrategyBasedIndicatorDescriptionMetadata.b = function (a) {
        if (ItemwiseStrategyBasedIndicatorDescriptionMetadata.a == null) {
            ItemwiseStrategyBasedIndicatorDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            ItemwiseStrategyBasedIndicatorDescriptionMetadata.c(a, ItemwiseStrategyBasedIndicatorDescriptionMetadata.a);
        }
    };
    ItemwiseStrategyBasedIndicatorDescriptionMetadata.c = function (a, b) {
        StrategyBasedIndicatorDescriptionMetadata.c(a, b);
    };
    ItemwiseStrategyBasedIndicatorDescriptionMetadata.d = function (a) {
        ItemwiseStrategyBasedIndicatorDescriptionMetadata.b(a);
        a.m("ItemwiseStrategyBasedIndicator", ItemwiseStrategyBasedIndicatorDescriptionMetadata.a);
    };
    ItemwiseStrategyBasedIndicatorDescriptionMetadata.$t = markType(ItemwiseStrategyBasedIndicatorDescriptionMetadata, 'ItemwiseStrategyBasedIndicatorDescriptionMetadata');
    ItemwiseStrategyBasedIndicatorDescriptionMetadata.a = null;
    return ItemwiseStrategyBasedIndicatorDescriptionMetadata;
}(Base));
export { ItemwiseStrategyBasedIndicatorDescriptionMetadata };
//# sourceMappingURL=ItemwiseStrategyBasedIndicatorDescriptionMetadata.js.map