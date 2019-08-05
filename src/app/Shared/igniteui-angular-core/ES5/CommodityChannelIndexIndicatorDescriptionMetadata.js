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
import { CommodityChannelIndexIndicatorDescription } from "./CommodityChannelIndexIndicatorDescription";
/**
 * @hidden
 */
var CommodityChannelIndexIndicatorDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(CommodityChannelIndexIndicatorDescriptionMetadata, _super);
    function CommodityChannelIndexIndicatorDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CommodityChannelIndexIndicatorDescriptionMetadata.b = function (a) {
        if (CommodityChannelIndexIndicatorDescriptionMetadata.a == null) {
            CommodityChannelIndexIndicatorDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            CommodityChannelIndexIndicatorDescriptionMetadata.c(a, CommodityChannelIndexIndicatorDescriptionMetadata.a);
        }
    };
    CommodityChannelIndexIndicatorDescriptionMetadata.c = function (a, b) {
        StrategyBasedIndicatorDescriptionMetadata.c(a, b);
        b.item("Period", "Number:int");
    };
    CommodityChannelIndexIndicatorDescriptionMetadata.d = function (a) {
        CommodityChannelIndexIndicatorDescriptionMetadata.b(a);
        a.n("CommodityChannelIndexIndicator", function () { return new CommodityChannelIndexIndicatorDescription(); });
        a.m("CommodityChannelIndexIndicator", CommodityChannelIndexIndicatorDescriptionMetadata.a);
    };
    CommodityChannelIndexIndicatorDescriptionMetadata.$t = markType(CommodityChannelIndexIndicatorDescriptionMetadata, 'CommodityChannelIndexIndicatorDescriptionMetadata');
    CommodityChannelIndexIndicatorDescriptionMetadata.a = null;
    return CommodityChannelIndexIndicatorDescriptionMetadata;
}(Base));
export { CommodityChannelIndexIndicatorDescriptionMetadata };
//# sourceMappingURL=CommodityChannelIndexIndicatorDescriptionMetadata.js.map