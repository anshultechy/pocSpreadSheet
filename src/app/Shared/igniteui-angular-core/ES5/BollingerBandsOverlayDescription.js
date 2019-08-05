/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { FinancialOverlayDescription } from "./FinancialOverlayDescription";
import { markType } from "./type";
/**
 * @hidden
 */
var BollingerBandsOverlayDescription = /** @class */ (function (_super) {
    tslib_1.__extends(BollingerBandsOverlayDescription, _super);
    function BollingerBandsOverlayDescription() {
        var _this = _super.call(this) || this;
        _this.co = 0;
        _this.cm = 0;
        return _this;
    }
    BollingerBandsOverlayDescription.prototype.get_type = function () {
        return "BollingerBandsOverlay";
    };
    Object.defineProperty(BollingerBandsOverlayDescription.prototype, "period", {
        get: function () {
            return this.co;
        },
        set: function (a) {
            this.co = a;
            this.e("Period");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BollingerBandsOverlayDescription.prototype, "multiplier", {
        get: function () {
            return this.cm;
        },
        set: function (a) {
            this.cm = a;
            this.e("Multiplier");
        },
        enumerable: true,
        configurable: true
    });
    BollingerBandsOverlayDescription.$t = markType(BollingerBandsOverlayDescription, 'BollingerBandsOverlayDescription', FinancialOverlayDescription.$);
    return BollingerBandsOverlayDescription;
}(FinancialOverlayDescription));
export { BollingerBandsOverlayDescription };
//# sourceMappingURL=BollingerBandsOverlayDescription.js.map