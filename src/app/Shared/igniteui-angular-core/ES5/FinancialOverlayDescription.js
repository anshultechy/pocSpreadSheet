/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { FinancialSeriesDescription } from "./FinancialSeriesDescription";
import { markType } from "./type";
/**
 * @hidden
 */
var FinancialOverlayDescription = /** @class */ (function (_super) {
    tslib_1.__extends(FinancialOverlayDescription, _super);
    function FinancialOverlayDescription() {
        var _this = _super.call(this) || this;
        _this.ck = 0;
        return _this;
    }
    FinancialOverlayDescription.prototype.get_type = function () {
        return "FinancialOverlay";
    };
    Object.defineProperty(FinancialOverlayDescription.prototype, "ignoreFirst", {
        get: function () {
            return this.ck;
        },
        set: function (a) {
            this.ck = a;
            this.e("IgnoreFirst");
        },
        enumerable: true,
        configurable: true
    });
    FinancialOverlayDescription.$t = markType(FinancialOverlayDescription, 'FinancialOverlayDescription', FinancialSeriesDescription.$);
    return FinancialOverlayDescription;
}(FinancialSeriesDescription));
export { FinancialOverlayDescription };
//# sourceMappingURL=FinancialOverlayDescription.js.map