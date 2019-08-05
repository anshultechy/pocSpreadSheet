/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Description } from "./Description";
import { markType } from "./type";
/**
 * @hidden
 */
var LabelClickEventArgsDescription = /** @class */ (function (_super) {
    tslib_1.__extends(LabelClickEventArgsDescription, _super);
    function LabelClickEventArgsDescription() {
        var _this = _super.call(this) || this;
        _this.f = false;
        return _this;
    }
    LabelClickEventArgsDescription.prototype.get_type = function () {
        return "LabelClickEventArgs";
    };
    Object.defineProperty(LabelClickEventArgsDescription.prototype, "type", {
        get: function () {
            return this.get_type();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LabelClickEventArgsDescription.prototype, "allowSliceClick", {
        get: function () {
            return this.f;
        },
        set: function (a) {
            this.f = a;
            this.e("AllowSliceClick");
        },
        enumerable: true,
        configurable: true
    });
    LabelClickEventArgsDescription.$t = markType(LabelClickEventArgsDescription, 'LabelClickEventArgsDescription', Description.$);
    return LabelClickEventArgsDescription;
}(Description));
export { LabelClickEventArgsDescription };
//# sourceMappingURL=LabelClickEventArgsDescription.js.map