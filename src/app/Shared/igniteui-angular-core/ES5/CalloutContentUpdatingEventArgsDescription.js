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
var CalloutContentUpdatingEventArgsDescription = /** @class */ (function (_super) {
    tslib_1.__extends(CalloutContentUpdatingEventArgsDescription, _super);
    function CalloutContentUpdatingEventArgsDescription() {
        var _this = _super.call(this) || this;
        _this.h = null;
        _this.i = null;
        _this.g = null;
        _this.f = null;
        return _this;
    }
    CalloutContentUpdatingEventArgsDescription.prototype.get_type = function () {
        return "CalloutContentUpdatingEventArgs";
    };
    Object.defineProperty(CalloutContentUpdatingEventArgsDescription.prototype, "type", {
        get: function () {
            return this.get_type();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalloutContentUpdatingEventArgsDescription.prototype, "xValueRef", {
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
    Object.defineProperty(CalloutContentUpdatingEventArgsDescription.prototype, "yValueRef", {
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
    Object.defineProperty(CalloutContentUpdatingEventArgsDescription.prototype, "itemRef", {
        get: function () {
            return this.g;
        },
        set: function (a) {
            this.g = a;
            this.e("ItemRef");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalloutContentUpdatingEventArgsDescription.prototype, "contentRef", {
        get: function () {
            return this.f;
        },
        set: function (a) {
            this.f = a;
            this.e("ContentRef");
        },
        enumerable: true,
        configurable: true
    });
    CalloutContentUpdatingEventArgsDescription.$t = markType(CalloutContentUpdatingEventArgsDescription, 'CalloutContentUpdatingEventArgsDescription', Description.$);
    return CalloutContentUpdatingEventArgsDescription;
}(Description));
export { CalloutContentUpdatingEventArgsDescription };
//# sourceMappingURL=CalloutContentUpdatingEventArgsDescription.js.map