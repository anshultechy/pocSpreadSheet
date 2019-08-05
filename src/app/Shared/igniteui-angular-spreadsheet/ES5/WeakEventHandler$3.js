/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, getBoxIfEnum, typeCastObjTo$t, typeCast, markType } from "../../igniteui-angular-core/ES5/type";
import { WeakReference } from "../../igniteui-angular-core/ES5/WeakReference";
import { CoreUtilities } from "./CoreUtilities";
/**
 * @hidden
 */
var WeakEventHandler$3 = /** @class */ (function (_super) {
    tslib_1.__extends(WeakEventHandler$3, _super);
    function WeakEventHandler$3($tInstance, $tEventSource, $tEventArgs, a, b, c, d) {
        var _this = _super.call(this) || this;
        _this.$tInstance = null;
        _this.$tEventSource = null;
        _this.$tEventArgs = null;
        _this.h = null;
        _this.g = null;
        _this.d = null;
        _this.c = null;
        _this.$tInstance = $tInstance;
        _this.$tEventSource = $tEventSource;
        _this.$tEventArgs = $tEventArgs;
        _this.$type = _this.$type.specialize(_this.$tInstance, _this.$tEventSource, _this.$tEventArgs);
        _this.h = new WeakReference(a);
        _this.g = new WeakReference(getBoxIfEnum(_this.$tEventSource, b));
        _this.d = c;
        _this.c = d;
        return _this;
    }
    Object.defineProperty(WeakEventHandler$3.prototype, "a", {
        get: function () {
            return typeCastObjTo$t(this.$tEventSource, CoreUtilities.p(this.g));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WeakEventHandler$3.prototype, "b", {
        get: function () {
            return typeCast(this.$tInstance, CoreUtilities.p(this.h));
        },
        enumerable: true,
        configurable: true
    });
    WeakEventHandler$3.prototype.f = function (a, b) {
        var c = typeCast(this.$tInstance, CoreUtilities.p(this.h));
        if (c != null) {
            if (this.d != null) {
                this.d(c, a, b);
            }
        }
        else {
            this.e();
        }
    };
    WeakEventHandler$3.prototype.e = function () {
        var a = typeCastObjTo$t(this.$tEventSource, CoreUtilities.p(this.g));
        if (this.c != null && this.g.a) {
            this.c(this, a);
        }
        this.c = null;
    };
    WeakEventHandler$3.$t = markType(WeakEventHandler$3, 'WeakEventHandler$3');
    return WeakEventHandler$3;
}(Base));
export { WeakEventHandler$3 };
//# sourceMappingURL=WeakEventHandler$3.js.map
