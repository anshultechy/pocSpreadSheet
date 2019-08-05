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
import { BollingerBandWidthIndicatorDescription } from "./BollingerBandWidthIndicatorDescription";
/**
 * @hidden
 */
var BollingerBandWidthIndicatorDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(BollingerBandWidthIndicatorDescriptionMetadata, _super);
    function BollingerBandWidthIndicatorDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BollingerBandWidthIndicatorDescriptionMetadata.b = function (a) {
        if (BollingerBandWidthIndicatorDescriptionMetadata.a == null) {
            BollingerBandWidthIndicatorDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            BollingerBandWidthIndicatorDescriptionMetadata.c(a, BollingerBandWidthIndicatorDescriptionMetadata.a);
        }
    };
    BollingerBandWidthIndicatorDescriptionMetadata.c = function (a, b) {
        StrategyBasedIndicatorDescriptionMetadata.c(a, b);
        b.item("Period", "Number:int");
        b.item("Multiplier", "Number:double");
    };
    BollingerBandWidthIndicatorDescriptionMetadata.d = function (a) {
        BollingerBandWidthIndicatorDescriptionMetadata.b(a);
        a.n("BollingerBandWidthIndicator", function () { return new BollingerBandWidthIndicatorDescription(); });
        a.m("BollingerBandWidthIndicator", BollingerBandWidthIndicatorDescriptionMetadata.a);
    };
    BollingerBandWidthIndicatorDescriptionMetadata.$t = markType(BollingerBandWidthIndicatorDescriptionMetadata, 'BollingerBandWidthIndicatorDescriptionMetadata');
    BollingerBandWidthIndicatorDescriptionMetadata.a = null;
    return BollingerBandWidthIndicatorDescriptionMetadata;
}(Base));
export { BollingerBandWidthIndicatorDescriptionMetadata };
//# sourceMappingURL=BollingerBandWidthIndicatorDescriptionMetadata.js.map