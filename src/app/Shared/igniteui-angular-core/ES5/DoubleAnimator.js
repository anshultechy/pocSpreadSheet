/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, INotifyPropertyChanged_$type, PropertyChangedEventArgs, runOn, markType } from "./type";
import { dateNow } from "./date";
/**
 * @hidden
 */
var DoubleAnimator = /** @class */ (function (_super) {
    tslib_1.__extends(DoubleAnimator, _super);
    function DoubleAnimator(a, b, c) {
        var _this = _super.call(this) || this;
        _this.k = 0;
        _this.p = 0;
        _this.a = null;
        _this.i = 0;
        _this.j = 0;
        _this._requestAnimationFrame = null;
        _this.d = false;
        _this.h = new Date();
        _this.q = 0;
        _this.propertyChanged = null;
        _this.i = a;
        _this.j = b;
        _this.p = c;
        _this.s();
        return _this;
    }
    DoubleAnimator.prototype.get_g = function () {
        return this.o == 0;
    };
    Object.defineProperty(DoubleAnimator.prototype, "g", {
        get: function () {
            return this.get_g();
        },
        enumerable: true,
        configurable: true
    });
    DoubleAnimator.prototype.u = function (a) {
        if (a == null) {
            this.s();
        }
        else if (a.supportsAnimation()) {
            this.requestAnimationFrame = a.getRequestAnimationFrame();
        }
    };
    DoubleAnimator.prototype.t = function () {
        this.y(true);
    };
    Object.defineProperty(DoubleAnimator.prototype, "o", {
        get: function () {
            return this.k;
        },
        set: function (a) {
            this.k = a;
            if (this.propertyChanged != null) {
                this.propertyChanged(this, new PropertyChangedEventArgs("TransitionProgress"));
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DoubleAnimator.prototype, "r", {
        get: function () {
            return this.p;
        },
        set: function (a) {
            this.p = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DoubleAnimator.prototype, "b", {
        get: function () {
            return this.a;
        },
        set: function (a) {
            this.a = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DoubleAnimator.prototype, "l", {
        get: function () {
            return this.i;
        },
        set: function (a) {
            this.i = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DoubleAnimator.prototype, "n", {
        get: function () {
            return this.j;
        },
        set: function (a) {
            this.j = a;
        },
        enumerable: true,
        configurable: true
    });
    DoubleAnimator.prototype.s = function () {
        this.requestAnimationFrame = (window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.oRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            function (callback) {
                window.setTimeout(callback, 1000 / 60);
            });
    };
    Object.defineProperty(DoubleAnimator.prototype, "requestAnimationFrame", {
        get: function () {
            return this._requestAnimationFrame;
        },
        set: function (a) {
            this._requestAnimationFrame = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DoubleAnimator.prototype, "e", {
        get: function () {
            return this.d;
        },
        set: function (a) {
            this.d = a;
        },
        enumerable: true,
        configurable: true
    });
    DoubleAnimator.prototype.v = function () {
        this.k = 0;
        this.q = 0;
        this.h = dateNow();
        if (!this.d) {
            this.d = true;
            this.requestAnimationFrame(runOn(this, this.x));
        }
    };
    DoubleAnimator.prototype.w = function () {
        this.d = false;
        this.k = 0;
        this.q = 0;
    };
    DoubleAnimator.prototype.x = function () {
        this.y(false);
    };
    DoubleAnimator.prototype.y = function (a) {
        if (!this.d) {
            this.w();
            return;
        }
        var b = dateNow();
        var c = b.getTime() - this.h.getTime();
        if (c > this.p) {
            c = this.p;
        }
        if ((c - this.q < 16 && c != this.p) && !a) {
            this.requestAnimationFrame(runOn(this, this.x));
            return;
        }
        this.q = c;
        var d = (c / this.p);
        if (this.a != null) {
            d = this.a(d);
        }
        var e = this.i + ((this.j - this.i) * d);
        if (!a) {
            if (c == this.p) {
                this.w();
            }
            else {
                this.requestAnimationFrame(runOn(this, this.x));
            }
        }
        this.o = e;
    };
    DoubleAnimator.prototype.m = function () {
        return this.d ? dateNow().getTime() - this.h.getTime() : 0;
    };
    DoubleAnimator.prototype.f = function () {
        return this.d;
    };
    DoubleAnimator.$t = markType(DoubleAnimator, 'DoubleAnimator', Base.$, [INotifyPropertyChanged_$type]);
    return DoubleAnimator;
}(Base));
export { DoubleAnimator };
//# sourceMappingURL=DoubleAnimator.js.map