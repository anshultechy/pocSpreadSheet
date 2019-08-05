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
var TimeAxisLabelFormatDescription = /** @class */ (function (_super) {
    tslib_1.__extends(TimeAxisLabelFormatDescription, _super);
    function TimeAxisLabelFormatDescription() {
        var _this = _super.call(this) || this;
        _this.f = 0;
        _this.h = null;
        return _this;
    }
    TimeAxisLabelFormatDescription.prototype.get_type = function () {
        return "TimeAxisLabelFormat";
    };
    Object.defineProperty(TimeAxisLabelFormatDescription.prototype, "type", {
        get: function () {
            return this.get_type();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimeAxisLabelFormatDescription.prototype, "range", {
        get: function () {
            return this.f;
        },
        set: function (a) {
            this.f = a;
            this.e("Range");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimeAxisLabelFormatDescription.prototype, "format", {
        get: function () {
            return this.h;
        },
        set: function (a) {
            this.h = a;
            this.e("Format");
        },
        enumerable: true,
        configurable: true
    });
    TimeAxisLabelFormatDescription.$t = markType(TimeAxisLabelFormatDescription, 'TimeAxisLabelFormatDescription', Description.$);
    return TimeAxisLabelFormatDescription;
}(Description));
export { TimeAxisLabelFormatDescription };
//# sourceMappingURL=TimeAxisLabelFormatDescription.js.map