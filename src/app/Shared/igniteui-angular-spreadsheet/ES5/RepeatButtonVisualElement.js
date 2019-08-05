/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { ButtonVisualElement } from "./ButtonVisualElement";
import { runOn, delegateCombine, markType } from "../../igniteui-angular-core/ES5/type";
import { PlatformTimer } from "./PlatformTimer";
/**
 * @hidden
 */
var RepeatButtonVisualElement = /** @class */ (function (_super) {
    tslib_1.__extends(RepeatButtonVisualElement, _super);
    function RepeatButtonVisualElement(a, b) {
        var _this = _super.call(this, a, b) || this;
        _this.cn = 250;
        _this.cl = 50;
        _this.ci = null;
        _this.cm = 0;
        _this.cj = 0;
        _this.ck = 0;
        return _this;
    }
    RepeatButtonVisualElement.prototype.ad = function (a) {
        if (a.a() == 1) {
            this.cm = 0;
            this.cu(a.h());
            if (a.d()) {
                this.cs();
            }
        }
        else {
            this.ct();
            a.f();
        }
        return true;
    };
    RepeatButtonVisualElement.prototype.ag = function (a) {
        if (a.b()) {
            var b = a.h();
            var c = this.aa(b.x, b.y);
            if (!c) {
                this.ct();
            }
            else if (this.ci == null || !this.ci.b) {
                this.cs();
            }
            this.cu(b);
        }
        return _super.prototype.ag.call(this, a);
    };
    RepeatButtonVisualElement.prototype.ah = function (a) {
        this.ct();
        if (a.b()) {
            var b = a.h();
            a.f();
            this.cu(b);
            if (this.cm == 0) {
                var c = this.aa(b.x, b.y);
                if (c) {
                    this.ch();
                }
            }
        }
        return _super.prototype.ah.call(this, a);
    };
    RepeatButtonVisualElement.prototype.cr = function (a, b) {
        var c = this.cj;
        var d = this.ck;
        var e = this;
        while (e._parent != null) {
            c -= e.ax;
            d -= e.a2;
            e = e._parent;
        }
        if (this.aa(c, d)) {
            this.cm++;
            this.ch();
        }
        if (this.ci != null) {
            this.ci.g = this.cl;
        }
    };
    RepeatButtonVisualElement.prototype.cs = function () {
        var a = this.ci == null || !this.ci.b;
        if (this.ci != null && !a) {
            this.ci.l();
        }
        else if (this.ci == null) {
            this.ci = new PlatformTimer();
            var b = this.ci;
            b.tick = delegateCombine(b.tick, runOn(this, this.cr));
        }
        this.ci.g = a ? this.cn : this.cl;
        this.ci.k();
    };
    RepeatButtonVisualElement.prototype.ct = function () {
        if (this.ci != null) {
            this.ci.l();
        }
    };
    RepeatButtonVisualElement.prototype.cu = function (a) {
        var b = a.x;
        var c = a.y;
        var d = this;
        while (d._parent != null) {
            b += d.ax;
            c += d.a2;
            d = d._parent;
        }
        this.cj = b;
        this.ck = c;
    };
    RepeatButtonVisualElement.$t = markType(RepeatButtonVisualElement, 'RepeatButtonVisualElement', ButtonVisualElement.$);
    return RepeatButtonVisualElement;
}(ButtonVisualElement));
export { RepeatButtonVisualElement };
//# sourceMappingURL=RepeatButtonVisualElement.js.map
