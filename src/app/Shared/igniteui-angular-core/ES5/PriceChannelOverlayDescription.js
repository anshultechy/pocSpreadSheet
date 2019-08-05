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
var PriceChannelOverlayDescription = /** @class */ (function (_super) {
    tslib_1.__extends(PriceChannelOverlayDescription, _super);
    function PriceChannelOverlayDescription() {
        var _this = _super.call(this) || this;
        _this.cm = 0;
        return _this;
    }
    PriceChannelOverlayDescription.prototype.get_type = function () {
        return "PriceChannelOverlay";
    };
    Object.defineProperty(PriceChannelOverlayDescription.prototype, "period", {
        get: function () {
            return this.cm;
        },
        set: function (a) {
            this.cm = a;
            this.e("Period");
        },
        enumerable: true,
        configurable: true
    });
    PriceChannelOverlayDescription.$t = markType(PriceChannelOverlayDescription, 'PriceChannelOverlayDescription', FinancialOverlayDescription.$);
    return PriceChannelOverlayDescription;
}(FinancialOverlayDescription));
export { PriceChannelOverlayDescription };
//# sourceMappingURL=PriceChannelOverlayDescription.js.map