/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, String_$type, runOn, fromEnum, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { AnimationState } from "./AnimationState";
import { List$1 } from "./List$1";
import { dateNow } from "./date";
/**
 * @hidden
 */
var AnimationManager = /** @class */ (function (_super) {
    tslib_1.__extends(AnimationManager, _super);
    function AnimationManager(a) {
        var _this = _super.call(this) || this;
        _this.a = null;
        _this.c = new Dictionary$2(String_$type, AnimationState.$, 0);
        _this.b = false;
        _this.e = -1;
        _this.a = a;
        return _this;
    }
    AnimationManager.prototype.d = function () {
        return dateNow();
    };
    AnimationManager.prototype.h = function (a, b, c, d, e, f, g) {
        var h = new AnimationState();
        h.d = f;
        h.e = g;
        h.i = b;
        h.g = c;
        h.c = this.d();
        h.a = d;
        h.f = e;
        this.f(h);
    };
    AnimationManager.prototype.g = function (a, b, c, d, e) {
        var f = new AnimationState();
        f.j = a;
        f.i = b;
        f.g = c;
        f.c = this.d();
        f.a = d;
        f.f = e;
        this.f(f);
    };
    AnimationManager.prototype.f = function (a) {
        if (this.c.containsKey(a.j)) {
            this.i(a.j, 0);
        }
        this.c.addItem(a.j, a);
        this.j();
        this.a.requestFrame(this.e);
    };
    AnimationManager.prototype.i = function (a, b) {
        if (!this.c.containsKey(a)) {
            return;
        }
        var c = this.c.item(a);
        var d = c.a;
        if (b == 2) {
            c.a(c.f(0), c);
        }
        if (b == 1) {
            c.a(c.f(1), c);
        }
        this.c.removeItem(a);
        this.j();
    };
    AnimationManager.prototype.j = function () {
        if (this.c.count == 0) {
            this.m();
        }
        else {
            this.l();
        }
    };
    AnimationManager.prototype.l = function () {
        if (this.b) {
            return;
        }
        this.b = true;
        this.e = this.a.setupTicking(runOn(this, this.n));
    };
    AnimationManager.prototype.m = function () {
        if (this.b) {
            this.a.teardownTicking(this.e);
            this.e = -1;
        }
        this.b = false;
    };
    AnimationManager.prototype.n = function () {
        var e_1, _a, e_2, _b;
        var a = dateNow();
        var b = new List$1(String_$type, 0);
        try {
            for (var _c = tslib_1.__values(fromEnum(this.c.values)), _d = _c.next(); !_d.done; _d = _c.next()) {
                var c = _d.value;
                var d = false;
                var e = (a.getTime() - c.c.getTime());
                if (e >= c.g) {
                    e = c.g;
                    d = true;
                }
                if ((e - c.h < 16 && e != c.g)) {
                    continue;
                }
                c.h = e;
                c.b = d;
                var f = (e / c.g);
                f = c.f(f);
                c.a(f, c);
                if (d) {
                    b.add(c.j);
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
            for (var _e = tslib_1.__values(fromEnum(b)), _f = _e.next(); !_f.done; _f = _e.next()) {
                var g = _f.value;
                this.c.removeItem(g);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
            }
            finally { if (e_2) throw e_2.error; }
        }
        this.j();
        if (this.b) {
            this.a.requestFrame(this.e);
        }
    };
    AnimationManager.prototype.k = function () {
        this.c.clear();
        this.m();
    };
    AnimationManager.$t = markType(AnimationManager, 'AnimationManager');
    return AnimationManager;
}(Base));
export { AnimationManager };
//# sourceMappingURL=AnimationManager.js.map