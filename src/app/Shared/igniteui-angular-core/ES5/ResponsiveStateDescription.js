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
var ResponsiveStateDescription = /** @class */ (function (_super) {
    tslib_1.__extends(ResponsiveStateDescription, _super);
    function ResponsiveStateDescription() {
        var _this = _super.call(this) || this;
        _this.l = null;
        _this.i = 0;
        _this.h = 0;
        _this.f = false;
        _this.n = null;
        _this.m = null;
        _this.o = null;
        return _this;
    }
    ResponsiveStateDescription.prototype.get_type = function () {
        return "ResponsiveState";
    };
    Object.defineProperty(ResponsiveStateDescription.prototype, "type", {
        get: function () {
            return this.get_type();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ResponsiveStateDescription.prototype, "name", {
        get: function () {
            return this.l;
        },
        set: function (a) {
            this.l = a;
            this.e("Name");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ResponsiveStateDescription.prototype, "minimumWidth", {
        get: function () {
            return this.i;
        },
        set: function (a) {
            this.i = a;
            this.e("MinimumWidth");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ResponsiveStateDescription.prototype, "maximumWidth", {
        get: function () {
            return this.h;
        },
        set: function (a) {
            this.h = a;
            this.e("MaximumWidth");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ResponsiveStateDescription.prototype, "isManualState", {
        get: function () {
            return this.f;
        },
        set: function (a) {
            this.f = a;
            this.e("IsManualState");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ResponsiveStateDescription.prototype, "StateEnteringRef", {
        get: function () {
            return this.n;
        },
        set: function (a) {
            this.n = a;
            this.e("StateEnteringRef");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ResponsiveStateDescription.prototype, "StateEnteredRef", {
        get: function () {
            return this.m;
        },
        set: function (a) {
            this.m = a;
            this.e("StateEnteredRef");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ResponsiveStateDescription.prototype, "StateExitedRef", {
        get: function () {
            return this.o;
        },
        set: function (a) {
            this.o = a;
            this.e("StateExitedRef");
        },
        enumerable: true,
        configurable: true
    });
    ResponsiveStateDescription.$t = markType(ResponsiveStateDescription, 'ResponsiveStateDescription', Description.$);
    return ResponsiveStateDescription;
}(Description));
export { ResponsiveStateDescription };
//# sourceMappingURL=ResponsiveStateDescription.js.map