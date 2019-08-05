/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, EventArgs, runOn, markType } from "../../igniteui-angular-core/ES5/type";
/**
 * @hidden
 */
var PlatformTimer = /** @class */ (function (_super) {
    tslib_1.__extends(PlatformTimer, _super);
    function PlatformTimer() {
        var _this = _super.call(this) || this;
        _this.a = false;
        _this.d = 0;
        _this.e = 0;
        _this.tick = null;
        _this.g = 100;
        return _this;
    }
    Object.defineProperty(PlatformTimer.prototype, "g", {
        get: function () {
            return this.d;
        },
        set: function (a) {
            this.d = a;
            if (this.e != 0 && this.a) {
                this.k();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlatformTimer.prototype, "b", {
        get: function () {
            return this.a;
        },
        enumerable: true,
        configurable: true
    });
    PlatformTimer.prototype.i = function () {
        var a = this.tick;
        if (a != null) {
            a(this, EventArgs.empty);
        }
    };
    PlatformTimer.prototype.j = function () {
        var a = this.e;
        this.e = 0;
        this.i();
        if (this.a) {
            this.k();
        }
    };
    PlatformTimer.prototype.k = function () {
        this.l();
        if (this.a) {
            return;
        }
        this.a = true;
        this.e = window.setTimeout(runOn(this, this.j), this.d);
    };
    PlatformTimer.prototype.l = function () {
        this.a = false;
        if (this.e != 0) {
            var a = this.e;
            this.e = 0;
            window.clearTimeout(a);
        }
    };
    PlatformTimer.$t = markType(PlatformTimer, 'PlatformTimer');
    return PlatformTimer;
}(Base));
export { PlatformTimer };
//# sourceMappingURL=PlatformTimer.js.map
