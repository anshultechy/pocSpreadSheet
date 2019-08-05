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
var RectChangedEventArgsDescription = /** @class */ (function (_super) {
    tslib_1.__extends(RectChangedEventArgsDescription, _super);
    function RectChangedEventArgsDescription() {
        var _this = _super.call(this) || this;
        _this.g = null;
        _this.f = null;
        return _this;
    }
    RectChangedEventArgsDescription.prototype.get_type = function () {
        return "RectChangedEventArgs";
    };
    Object.defineProperty(RectChangedEventArgsDescription.prototype, "type", {
        get: function () {
            return this.get_type();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RectChangedEventArgsDescription.prototype, "oldRect", {
        get: function () {
            return this.g;
        },
        set: function (a) {
            this.g = a;
            this.e("OldRect");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RectChangedEventArgsDescription.prototype, "newRect", {
        get: function () {
            return this.f;
        },
        set: function (a) {
            this.f = a;
            this.e("NewRect");
        },
        enumerable: true,
        configurable: true
    });
    RectChangedEventArgsDescription.$t = markType(RectChangedEventArgsDescription, 'RectChangedEventArgsDescription', Description.$);
    return RectChangedEventArgsDescription;
}(Description));
export { RectChangedEventArgsDescription };
//# sourceMappingURL=RectChangedEventArgsDescription.js.map