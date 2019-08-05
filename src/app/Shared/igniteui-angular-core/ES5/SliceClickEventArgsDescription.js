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
var SliceClickEventArgsDescription = /** @class */ (function (_super) {
    tslib_1.__extends(SliceClickEventArgsDescription, _super);
    function SliceClickEventArgsDescription() {
        var _this = _super.call(this) || this;
        _this.g = false;
        _this.f = false;
        _this.j = null;
        return _this;
    }
    SliceClickEventArgsDescription.prototype.get_type = function () {
        return "SliceClickEventArgs";
    };
    Object.defineProperty(SliceClickEventArgsDescription.prototype, "type", {
        get: function () {
            return this.get_type();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SliceClickEventArgsDescription.prototype, "isSelected", {
        get: function () {
            return this.g;
        },
        set: function (a) {
            this.g = a;
            this.e("IsSelected");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SliceClickEventArgsDescription.prototype, "isExploded", {
        get: function () {
            return this.f;
        },
        set: function (a) {
            this.f = a;
            this.e("IsExploded");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SliceClickEventArgsDescription.prototype, "originalEventRef", {
        get: function () {
            return this.j;
        },
        set: function (a) {
            this.j = a;
            this.e("OriginalEventRef");
        },
        enumerable: true,
        configurable: true
    });
    SliceClickEventArgsDescription.$t = markType(SliceClickEventArgsDescription, 'SliceClickEventArgsDescription', Description.$);
    return SliceClickEventArgsDescription;
}(Description));
export { SliceClickEventArgsDescription };
//# sourceMappingURL=SliceClickEventArgsDescription.js.map