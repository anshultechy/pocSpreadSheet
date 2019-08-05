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
var CalloutStyleUpdatingEventArgsDescription = /** @class */ (function (_super) {
    tslib_1.__extends(CalloutStyleUpdatingEventArgsDescription, _super);
    function CalloutStyleUpdatingEventArgsDescription() {
        var _this = _super.call(this) || this;
        _this.o = null;
        _this.p = null;
        _this.k = null;
        _this.f = null;
        _this.j = null;
        _this.n = null;
        _this.m = null;
        _this.l = null;
        _this.h = 0;
        return _this;
    }
    CalloutStyleUpdatingEventArgsDescription.prototype.get_type = function () {
        return "CalloutStyleUpdatingEventArgs";
    };
    Object.defineProperty(CalloutStyleUpdatingEventArgsDescription.prototype, "type", {
        get: function () {
            return this.get_type();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalloutStyleUpdatingEventArgsDescription.prototype, "xValueRef", {
        get: function () {
            return this.o;
        },
        set: function (a) {
            this.o = a;
            this.e("XValueRef");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalloutStyleUpdatingEventArgsDescription.prototype, "yValueRef", {
        get: function () {
            return this.p;
        },
        set: function (a) {
            this.p = a;
            this.e("YValueRef");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalloutStyleUpdatingEventArgsDescription.prototype, "itemRef", {
        get: function () {
            return this.k;
        },
        set: function (a) {
            this.k = a;
            this.e("ItemRef");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalloutStyleUpdatingEventArgsDescription.prototype, "series", {
        get: function () {
            return this.f;
        },
        set: function (a) {
            this.f = a;
            this.e("Series");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalloutStyleUpdatingEventArgsDescription.prototype, "background", {
        get: function () {
            return this.j;
        },
        set: function (a) {
            this.j = a;
            this.e("Background");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalloutStyleUpdatingEventArgsDescription.prototype, "textColor", {
        get: function () {
            return this.n;
        },
        set: function (a) {
            this.n = a;
            this.e("TextColor");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalloutStyleUpdatingEventArgsDescription.prototype, "outline", {
        get: function () {
            return this.m;
        },
        set: function (a) {
            this.m = a;
            this.e("Outline");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalloutStyleUpdatingEventArgsDescription.prototype, "leaderBrush", {
        get: function () {
            return this.l;
        },
        set: function (a) {
            this.l = a;
            this.e("LeaderBrush");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalloutStyleUpdatingEventArgsDescription.prototype, "strokeThickness", {
        get: function () {
            return this.h;
        },
        set: function (a) {
            this.h = a;
            this.e("StrokeThickness");
        },
        enumerable: true,
        configurable: true
    });
    CalloutStyleUpdatingEventArgsDescription.$t = markType(CalloutStyleUpdatingEventArgsDescription, 'CalloutStyleUpdatingEventArgsDescription', Description.$);
    return CalloutStyleUpdatingEventArgsDescription;
}(Description));
export { CalloutStyleUpdatingEventArgsDescription };
//# sourceMappingURL=CalloutStyleUpdatingEventArgsDescription.js.map