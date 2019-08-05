/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { FinancialOverlayDescriptionMetadata } from "./FinancialOverlayDescriptionMetadata";
import { PriceChannelOverlayDescription } from "./PriceChannelOverlayDescription";
/**
 * @hidden
 */
var PriceChannelOverlayDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(PriceChannelOverlayDescriptionMetadata, _super);
    function PriceChannelOverlayDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PriceChannelOverlayDescriptionMetadata.b = function (a) {
        if (PriceChannelOverlayDescriptionMetadata.a == null) {
            PriceChannelOverlayDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            PriceChannelOverlayDescriptionMetadata.c(a, PriceChannelOverlayDescriptionMetadata.a);
        }
    };
    PriceChannelOverlayDescriptionMetadata.c = function (a, b) {
        FinancialOverlayDescriptionMetadata.c(a, b);
        b.item("Period", "Number:int");
    };
    PriceChannelOverlayDescriptionMetadata.d = function (a) {
        PriceChannelOverlayDescriptionMetadata.b(a);
        a.n("PriceChannelOverlay", function () { return new PriceChannelOverlayDescription(); });
        a.m("PriceChannelOverlay", PriceChannelOverlayDescriptionMetadata.a);
    };
    PriceChannelOverlayDescriptionMetadata.$t = markType(PriceChannelOverlayDescriptionMetadata, 'PriceChannelOverlayDescriptionMetadata');
    PriceChannelOverlayDescriptionMetadata.a = null;
    return PriceChannelOverlayDescriptionMetadata;
}(Base));
export { PriceChannelOverlayDescriptionMetadata };
//# sourceMappingURL=PriceChannelOverlayDescriptionMetadata.js.map