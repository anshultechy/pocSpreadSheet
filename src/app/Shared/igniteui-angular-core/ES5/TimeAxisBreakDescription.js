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
var TimeAxisBreakDescription = /** @class */ (function (_super) {
    tslib_1.__extends(TimeAxisBreakDescription, _super);
    function TimeAxisBreakDescription() {
        var _this = _super.call(this) || this;
        _this.g = new Date();
        _this.f = new Date();
        _this.j = 0;
        return _this;
    }
    TimeAxisBreakDescription.prototype.get_type = function () {
        return "TimeAxisBreak";
    };
    Object.defineProperty(TimeAxisBreakDescription.prototype, "type", {
        get: function () {
            return this.get_type();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimeAxisBreakDescription.prototype, "start", {
        get: function () {
            return this.g;
        },
        set: function (a) {
            this.g = a;
            this.e("Start");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimeAxisBreakDescription.prototype, "end", {
        get: function () {
            return this.f;
        },
        set: function (a) {
            this.f = a;
            this.e("End");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimeAxisBreakDescription.prototype, "interval", {
        get: function () {
            return this.j;
        },
        set: function (a) {
            this.j = a;
            this.e("Interval");
        },
        enumerable: true,
        configurable: true
    });
    TimeAxisBreakDescription.$t = markType(TimeAxisBreakDescription, 'TimeAxisBreakDescription', Description.$);
    return TimeAxisBreakDescription;
}(Description));
export { TimeAxisBreakDescription };
//# sourceMappingURL=TimeAxisBreakDescription.js.map