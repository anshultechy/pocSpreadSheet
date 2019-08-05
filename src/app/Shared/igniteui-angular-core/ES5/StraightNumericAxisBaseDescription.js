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
var StraightNumericAxisBaseDescription = /** @class */ (function (_super) {
    tslib_1.__extends(StraightNumericAxisBaseDescription, _super);
    function StraightNumericAxisBaseDescription() {
        var _this = _super.call(this) || this;
        _this.dv = null;
        return _this;
    }
    StraightNumericAxisBaseDescription.prototype.get_type = function () {
        return "StraightNumericAxisBase";
    };
    Object.defineProperty(StraightNumericAxisBaseDescription.prototype, "scaleMode", {
        get: function () {
            return this.dv;
        },
        set: function (a) {
            this.dv = a;
            this.e("ScaleMode");
        },
        enumerable: true,
        configurable: true
    });
    StraightNumericAxisBaseDescription.$t = markType(StraightNumericAxisBaseDescription, 'StraightNumericAxisBaseDescription', NumericAxisBaseDescription.$);
    return StraightNumericAxisBaseDescription;
}(NumericAxisBaseDescription));
export { StraightNumericAxisBaseDescription };
//# sourceMappingURL=StraightNumericAxisBaseDescription.js.map