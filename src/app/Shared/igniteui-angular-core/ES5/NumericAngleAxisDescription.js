/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { NumericAxisBaseDescription } from "./NumericAxisBaseDescription";
import { markType } from "./type";
/**
 * @hidden
 */
var NumericAngleAxisDescription = /** @class */ (function (_super) {
    tslib_1.__extends(NumericAngleAxisDescription, _super);
    function NumericAngleAxisDescription() {
        var _this = _super.call(this) || this;
        _this.dv = 0;
        return _this;
    }
    NumericAngleAxisDescription.prototype.get_type = function () {
        return "NumericAngleAxis";
    };
    Object.defineProperty(NumericAngleAxisDescription.prototype, "startAngleOffset", {
        get: function () {
            return this.dv;
        },
        set: function (a) {
            this.dv = a;
            this.e("StartAngleOffset");
        },
        enumerable: true,
        configurable: true
    });
    NumericAngleAxisDescription.$t = markType(NumericAngleAxisDescription, 'NumericAngleAxisDescription', NumericAxisBaseDescription.$);
    return NumericAngleAxisDescription;
}(NumericAxisBaseDescription));
export { NumericAngleAxisDescription };
//# sourceMappingURL=NumericAngleAxisDescription.js.map