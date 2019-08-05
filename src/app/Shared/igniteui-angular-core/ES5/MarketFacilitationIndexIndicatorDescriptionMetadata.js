/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { ItemwiseStrategyBasedIndicatorDescriptionMetadata } from "./ItemwiseStrategyBasedIndicatorDescriptionMetadata";
import { MarketFacilitationIndexIndicatorDescription } from "./MarketFacilitationIndexIndicatorDescription";
/**
 * @hidden
 */
var MarketFacilitationIndexIndicatorDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(MarketFacilitationIndexIndicatorDescriptionMetadata, _super);
    function MarketFacilitationIndexIndicatorDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MarketFacilitationIndexIndicatorDescriptionMetadata.b = function (a) {
        if (MarketFacilitationIndexIndicatorDescriptionMetadata.a == null) {
            MarketFacilitationIndexIndicatorDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            MarketFacilitationIndexIndicatorDescriptionMetadata.c(a, MarketFacilitationIndexIndicatorDescriptionMetadata.a);
        }
    };
    MarketFacilitationIndexIndicatorDescriptionMetadata.c = function (a, b) {
        ItemwiseStrategyBasedIndicatorDescriptionMetadata.c(a, b);
    };
    MarketFacilitationIndexIndicatorDescriptionMetadata.d = function (a) {
        MarketFacilitationIndexIndicatorDescriptionMetadata.b(a);
        a.n("MarketFacilitationIndexIndicator", function () { return new MarketFacilitationIndexIndicatorDescription(); });
        a.m("MarketFacilitationIndexIndicator", MarketFacilitationIndexIndicatorDescriptionMetadata.a);
    };
    MarketFacilitationIndexIndicatorDescriptionMetadata.$t = markType(MarketFacilitationIndexIndicatorDescriptionMetadata, 'MarketFacilitationIndexIndicatorDescriptionMetadata');
    MarketFacilitationIndexIndicatorDescriptionMetadata.a = null;
    return MarketFacilitationIndexIndicatorDescriptionMetadata;
}(Base));
export { MarketFacilitationIndexIndicatorDescriptionMetadata };
//# sourceMappingURL=MarketFacilitationIndexIndicatorDescriptionMetadata.js.map