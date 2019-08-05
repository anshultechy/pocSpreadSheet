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
var FormatGroupTextEventArgsDescription = /** @class */ (function (_super) {
    tslib_1.__extends(FormatGroupTextEventArgsDescription, _super);
    function FormatGroupTextEventArgsDescription() {
        var _this = _super.call(this) || this;
        _this.h = null;
        _this.i = null;
        _this.g = null;
        _this.f = null;
        return _this;
    }
    FormatGroupTextEventArgsDescription.prototype.get_type = function () {
        return "FormatGroupTextEventArgs";
    };
    Object.defineProperty(FormatGroupTextEventArgsDescription.prototype, "type", {
        get: function () {
            return this.get_type();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormatGroupTextEventArgsDescription.prototype, "groupName", {
        get: function () {
            return this.h;
        },
        set: function (a) {
            this.h = a;
            this.e("GroupName");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormatGroupTextEventArgsDescription.prototype, "groupValueRef", {
        get: function () {
            return this.i;
        },
        set: function (a) {
            this.i = a;
            this.e("GroupValueRef");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormatGroupTextEventArgsDescription.prototype, "formattedValue", {
        get: function () {
            return this.g;
        },
        set: function (a) {
            this.g = a;
            this.e("FormattedValue");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormatGroupTextEventArgsDescription.prototype, "formattedText", {
        get: function () {
            return this.f;
        },
        set: function (a) {
            this.f = a;
            this.e("FormattedText");
        },
        enumerable: true,
        configurable: true
    });
    FormatGroupTextEventArgsDescription.$t = markType(FormatGroupTextEventArgsDescription, 'FormatGroupTextEventArgsDescription', Description.$);
    return FormatGroupTextEventArgsDescription;
}(Description));
export { FormatGroupTextEventArgsDescription };
//# sourceMappingURL=FormatGroupTextEventArgsDescription.js.map