/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, runOn, fromEnum, markType } from "../../igniteui-angular-core/ES5/type";
import { ReadOnlyCollection$1 } from "../../igniteui-angular-core/ES5/ReadOnlyCollection$1";
import { ScrollBarInfoMediator } from "./ScrollBarInfoMediator";
import { DeferredOperation } from "./DeferredOperation";
import { List$1 } from "../../igniteui-angular-core/ES5/List$1";
/**
 * @hidden
 */
var ScrollBarVisibilityCoordinator = /** @class */ (function (_super) {
    tslib_1.__extends(ScrollBarVisibilityCoordinator, _super);
    function ScrollBarVisibilityCoordinator() {
        var _this = _super.call(this) || this;
        _this.a = null;
        _this.c = null;
        _this.d = null;
        _this.a = new DeferredOperation(runOn(_this, _this.g));
        _this.c = new List$1(ScrollBarInfoMediator.$, 0);
        _this.d = new ReadOnlyCollection$1(ScrollBarInfoMediator.$, 1, _this.c);
        return _this;
    }
    Object.defineProperty(ScrollBarVisibilityCoordinator.prototype, "e", {
        get: function () {
            return this.d;
        },
        enumerable: true,
        configurable: true
    });
    ScrollBarVisibilityCoordinator.prototype.f = function (a) {
        this.c.add(a);
        a.h = runOn(this, this.i);
        this.a.m();
    };
    ScrollBarVisibilityCoordinator.prototype.b = function (a) {
        return this.c.contains(a);
    };
    ScrollBarVisibilityCoordinator.prototype.h = function (a) {
        if (this.c.remove(a)) {
            a.h = null;
        }
        if (this.c.count > 0) {
            this.a.m();
        }
    };
    ScrollBarVisibilityCoordinator.prototype.j = function () {
        this.a.m();
    };
    ScrollBarVisibilityCoordinator.prototype.i = function () {
        this.a.m();
    };
    ScrollBarVisibilityCoordinator.prototype.g = function () {
        var e_1, _a, e_2, _b;
        var a = false;
        try {
            for (var _c = tslib_1.__values(fromEnum(this.c)), _d = _c.next(); !_d.done; _d = _c.next()) {
                var b = _d.value;
                if (null == b.b) {
                    continue;
                }
                if (b.d._h) {
                    a = true;
                    break;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_1) throw e_1.error; }
        }
        try {
            for (var _e = tslib_1.__values(fromEnum(this.c)), _f = _e.next(); !_f.done; _f = _e.next()) {
                var c = _f.value;
                var d = c.b;
                if (null != d) {
                    d.setIsVisible(a);
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
            }
            finally { if (e_2) throw e_2.error; }
        }
    };
    ScrollBarVisibilityCoordinator.$t = markType(ScrollBarVisibilityCoordinator, 'ScrollBarVisibilityCoordinator');
    return ScrollBarVisibilityCoordinator;
}(Base));
export { ScrollBarVisibilityCoordinator };
//# sourceMappingURL=ScrollBarVisibilityCoordinator.js.map
