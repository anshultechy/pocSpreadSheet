/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, runOn, markType } from "./type";
import { List$1 } from "./List$1";
import { ISchedulableRender_$type } from "./ISchedulableRender";
/**
 * @hidden
 */
var CanvasRenderScheduler = /** @class */ (function (_super) {
    tslib_1.__extends(CanvasRenderScheduler, _super);
    function CanvasRenderScheduler() {
        var _this = _super.call(this) || this;
        _this.b = true;
        _this.f = null;
        _this.e = null;
        _this.a = false;
        _this.h = -1;
        _this.g = null;
        _this.c = false;
        _this.f = new List$1(ISchedulableRender_$type, 0);
        _this.e = new List$1(CanvasRenderScheduler.$, 0);
        return _this;
    }
    CanvasRenderScheduler.prototype.l = function (a) {
        this.b = true;
        this.f.add(a);
    };
    CanvasRenderScheduler.prototype.r = function (a) {
        this.b = true;
        this.f.remove(a);
    };
    CanvasRenderScheduler.prototype.p = function () {
        this.b = true;
        this.n();
    };
    Object.defineProperty(CanvasRenderScheduler.prototype, "d", {
        get: function () {
            return this.a;
        },
        enumerable: true,
        configurable: true
    });
    CanvasRenderScheduler.prototype.j = function (a) {
        var b = this.g;
        this.g = a;
        if (this.a && this.g != null && b == null) {
            this.g.setTimeout(runOn(this, this.k), 0);
        }
    };
    CanvasRenderScheduler.prototype.n = function () {
        if (!this.a) {
            this.a = true;
            if (this.g != null) {
                this.g.setTimeout(runOn(this, this.k), 0);
            }
            else {
                window.setTimeout(runOn(this, this.k), 0);
            }
        }
    };
    CanvasRenderScheduler.prototype.o = function (a, b) {
        this.n();
    };
    CanvasRenderScheduler.prototype.i = function () {
        if (this.h != -1) {
            window.clearTimeout(this.h);
            this.h = -1;
        }
        if (this.a) {
            this.k();
        }
    };
    CanvasRenderScheduler.prototype.k = function () {
        this.h = -1;
        if (this.a) {
            this.a = false;
            if (this.e.count > 0) {
                for (var a = 0; a < this.e.count; a++) {
                    this.e._inner[a].i();
                }
            }
            if (this.b) {
                this.q();
            }
            this.m();
        }
    };
    CanvasRenderScheduler.prototype.m = function () {
        if (this.c) {
            return;
        }
        var a = true;
        for (var b = 0; b < this.f.count; b++) {
            var c = this.f._inner[b];
            c.preRender();
        }
        for (var d = 0; d < this.f.count; d++) {
            var e = this.f._inner[d];
            e.undirty(a);
            a = false;
        }
        for (var f = 0; f < this.f.count; f++) {
            var g = this.f._inner[f];
            g.postRender();
        }
    };
    CanvasRenderScheduler.prototype.q = function () {
        this.f.aa(function (a, b) {
            var c = a;
            var d = b;
            if (c.index < d.index) {
                return -1;
            }
            if (c.index > d.index) {
                return 1;
            }
            return 0;
        });
        this.b = false;
    };
    CanvasRenderScheduler.$t = markType(CanvasRenderScheduler, 'CanvasRenderScheduler');
    return CanvasRenderScheduler;
}(Base));
export { CanvasRenderScheduler };
//# sourceMappingURL=CanvasRenderScheduler.js.map