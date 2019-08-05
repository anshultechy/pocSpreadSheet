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
var CalloutLabelUpdatingEventArgsDescription = /** @class */ (function (_super) {
    tslib_1.__extends(CalloutLabelUpdatingEventArgsDescription, _super);
    function CalloutLabelUpdatingEventArgsDescription() {
        var _this = _super.call(this) || this;
        _this.h = null;
        _this.i = null;
        _this.f = null;
        _this.g = null;
        return _this;
    }
    CalloutLabelUpdatingEventArgsDescription.prototype.get_type = function () {
        return "CalloutLabelUpdatingEventArgs";
    };
    Object.defineProperty(CalloutLabelUpdatingEventArgsDescription.prototype, "type", {
        get: function () {
            return this.get_type();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalloutLabelUpdatingEventArgsDescription.prototype, "xValueRef", {
        get: function () {
            return this.h;
        },
        set: function (a) {
            this.h = a;
            this.e("XValueRef");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalloutLabelUpdatingEventArgsDescription.prototype, "yValueRef", {
        get: function () {
            return this.i;
        },
        set: function (a) {
            this.i = a;
            this.e("YValueRef");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalloutLabelUpdatingEventArgsDescription.prototype, "itemRef", {
        get: function () {
            return this.f;
        },
        set: function (a) {
            this.f = a;
            this.e("ItemRef");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalloutLabelUpdatingEventArgsDescription.prototype, "labelRef", {
        get: function () {
            return this.g;
        },
        set: function (a) {
            this.g = a;
            this.e("LabelRef");
        },
        enumerable: true,
        configurable: true
    });
    CalloutLabelUpdatingEventArgsDescription.$t = markType(CalloutLabelUpdatingEventArgsDescription, 'CalloutLabelUpdatingEventArgsDescription', Description.$);
    return CalloutLabelUpdatingEventArgsDescription;
}(Description));
export { CalloutLabelUpdatingEventArgsDescription };
//# sourceMappingURL=CalloutLabelUpdatingEventArgsDescription.js.map