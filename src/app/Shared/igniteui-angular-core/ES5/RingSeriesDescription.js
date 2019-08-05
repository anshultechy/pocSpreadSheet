/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { RingSeriesBaseDescription } from "./RingSeriesBaseDescription";
import { markType } from "./type";
/**
 * @hidden
 */
var RingSeriesDescription = /** @class */ (function (_super) {
    tslib_1.__extends(RingSeriesDescription, _super);
    function RingSeriesDescription() {
        var _this = _super.call(this) || this;
        _this.bu = null;
        return _this;
    }
    RingSeriesDescription.prototype.get_type = function () {
        return "RingSeries";
    };
    Object.defineProperty(RingSeriesDescription.prototype, "ring", {
        get: function () {
            return this.bu;
        },
        set: function (a) {
            this.bu = a;
            this.e("Ring");
        },
        enumerable: true,
        configurable: true
    });
    RingSeriesDescription.$t = markType(RingSeriesDescription, 'RingSeriesDescription', RingSeriesBaseDescription.$);
    return RingSeriesDescription;
}(RingSeriesBaseDescription));
export { RingSeriesDescription };
//# sourceMappingURL=RingSeriesDescription.js.map