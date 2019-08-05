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
var RenderRequestedEventArgsDescription = /** @class */ (function (_super) {
    tslib_1.__extends(RenderRequestedEventArgsDescription, _super);
    function RenderRequestedEventArgsDescription() {
        var _this = _super.call(this) || this;
        _this.f = false;
        return _this;
    }
    RenderRequestedEventArgsDescription.prototype.get_type = function () {
        return "RenderRequestedEventArgs";
    };
    Object.defineProperty(RenderRequestedEventArgsDescription.prototype, "type", {
        get: function () {
            return this.get_type();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RenderRequestedEventArgsDescription.prototype, "animate", {
        get: function () {
            return this.f;
        },
        set: function (a) {
            this.f = a;
            this.e("Animate");
        },
        enumerable: true,
        configurable: true
    });
    RenderRequestedEventArgsDescription.$t = markType(RenderRequestedEventArgsDescription, 'RenderRequestedEventArgsDescription', Description.$);
    return RenderRequestedEventArgsDescription;
}(Description));
export { RenderRequestedEventArgsDescription };
//# sourceMappingURL=RenderRequestedEventArgsDescription.js.map