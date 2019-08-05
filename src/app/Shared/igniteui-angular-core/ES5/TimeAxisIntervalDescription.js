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
var TimeAxisIntervalDescription = /** @class */ (function (_super) {
    tslib_1.__extends(TimeAxisIntervalDescription, _super);
    function TimeAxisIntervalDescription() {
        var _this = _super.call(this) || this;
        _this.h = 0;
        _this.f = 0;
        _this.j = null;
        return _this;
    }
    TimeAxisIntervalDescription.prototype.get_type = function () {
        return "TimeAxisInterval";
    };
    Object.defineProperty(TimeAxisIntervalDescription.prototype, "type", {
        get: function () {
            return this.get_type();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimeAxisIntervalDescription.prototype, "range", {
        get: function () {
            return this.h;
        },
        set: function (a) {
            this.h = a;
            this.e("Range");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimeAxisIntervalDescription.prototype, "interval", {
        get: function () {
            return this.f;
        },
        set: function (a) {
            this.f = a;
            this.e("Interval");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimeAxisIntervalDescription.prototype, "intervalType", {
        get: function () {
            return this.j;
        },
        set: function (a) {
            this.j = a;
            this.e("IntervalType");
        },
        enumerable: true,
        configurable: true
    });
    TimeAxisIntervalDescription.$t = markType(TimeAxisIntervalDescription, 'TimeAxisIntervalDescription', Description.$);
    return TimeAxisIntervalDescription;
}(Description));
export { TimeAxisIntervalDescription };
//# sourceMappingURL=TimeAxisIntervalDescription.js.map