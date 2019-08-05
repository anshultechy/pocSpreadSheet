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
var LegendBaseDescription = /** @class */ (function (_super) {
    tslib_1.__extends(LegendBaseDescription, _super);
    function LegendBaseDescription() {
        var _this = _super.call(this) || this;
        _this.f = null;
        _this.i = null;
        _this.j = null;
        _this.g = null;
        _this.h = null;
        _this.k = null;
        return _this;
    }
    Object.defineProperty(LegendBaseDescription.prototype, "background", {
        get: function () {
            return this.f;
        },
        set: function (a) {
            this.f = a;
            this.e("Background");
        },
        enumerable: true,
        configurable: true
    });
    LegendBaseDescription.prototype.get_type = function () {
        return "LegendBase";
    };
    Object.defineProperty(LegendBaseDescription.prototype, "type", {
        get: function () {
            return this.get_type();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LegendBaseDescription.prototype, "LegendItemMouseLeftButtonDownRef", {
        get: function () {
            return this.i;
        },
        set: function (a) {
            this.i = a;
            this.e("LegendItemMouseLeftButtonDownRef");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LegendBaseDescription.prototype, "LegendItemMouseLeftButtonUpRef", {
        get: function () {
            return this.j;
        },
        set: function (a) {
            this.j = a;
            this.e("LegendItemMouseLeftButtonUpRef");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LegendBaseDescription.prototype, "LegendItemMouseEnterRef", {
        get: function () {
            return this.g;
        },
        set: function (a) {
            this.g = a;
            this.e("LegendItemMouseEnterRef");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LegendBaseDescription.prototype, "LegendItemMouseLeaveRef", {
        get: function () {
            return this.h;
        },
        set: function (a) {
            this.h = a;
            this.e("LegendItemMouseLeaveRef");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LegendBaseDescription.prototype, "LegendItemMouseMoveRef", {
        get: function () {
            return this.k;
        },
        set: function (a) {
            this.k = a;
            this.e("LegendItemMouseMoveRef");
        },
        enumerable: true,
        configurable: true
    });
    LegendBaseDescription.$t = markType(LegendBaseDescription, 'LegendBaseDescription', Description.$);
    return LegendBaseDescription;
}(Description));
export { LegendBaseDescription };
//# sourceMappingURL=LegendBaseDescription.js.map