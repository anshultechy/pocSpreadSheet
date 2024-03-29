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
import { BollingerBandsOverlayDescription } from "./BollingerBandsOverlayDescription";
/**
 * @hidden
 */
var BollingerBandsOverlayDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(BollingerBandsOverlayDescriptionMetadata, _super);
    function BollingerBandsOverlayDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BollingerBandsOverlayDescriptionMetadata.b = function (a) {
        if (BollingerBandsOverlayDescriptionMetadata.a == null) {
            BollingerBandsOverlayDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            BollingerBandsOverlayDescriptionMetadata.c(a, BollingerBandsOverlayDescriptionMetadata.a);
        }
    };
    BollingerBandsOverlayDescriptionMetadata.c = function (a, b) {
        FinancialOverlayDescriptionMetadata.c(a, b);
        b.item("Period", "Number:int");
        b.item("Multiplier", "Number:double");
    };
    BollingerBandsOverlayDescriptionMetadata.d = function (a) {
        BollingerBandsOverlayDescriptionMetadata.b(a);
        a.n("BollingerBandsOverlay", function () { return new BollingerBandsOverlayDescription(); });
        a.m("BollingerBandsOverlay", BollingerBandsOverlayDescriptionMetadata.a);
    };
    BollingerBandsOverlayDescriptionMetadata.$t = markType(BollingerBandsOverlayDescriptionMetadata, 'BollingerBandsOverlayDescriptionMetadata');
    BollingerBandsOverlayDescriptionMetadata.a = null;
    return BollingerBandsOverlayDescriptionMetadata;
}(Base));
export { BollingerBandsOverlayDescriptionMetadata };
//# sourceMappingURL=BollingerBandsOverlayDescriptionMetadata.js.map