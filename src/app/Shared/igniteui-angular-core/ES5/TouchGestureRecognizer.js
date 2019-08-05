/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, Point_$type, runOn, markType } from "./type";
import { TouchVelocityTracker } from "./TouchVelocityTracker";
import { TouchPointInfo } from "./TouchPointInfo";
import { TouchGestureEventArgs } from "./TouchGestureEventArgs";
import { isNaN_ } from "./number";
/**
 * @hidden
 */
var TouchGestureRecognizer = /** @class */ (function (_super) {
    tslib_1.__extends(TouchGestureRecognizer, _super);
    function TouchGestureRecognizer(a) {
        var _this = _super.call(this) || this;
        _this.n = 0;
        _this.p = new TouchVelocityTracker();
        _this.t = 0;
        _this.u = 0;
        _this.aa = 0;
        _this.ab = 0;
        _this.v = 0;
        _this.w = 0;
        _this.am = NaN;
        _this.an = NaN;
        _this.al = NaN;
        _this.aj = 1;
        _this.ak = 1;
        _this.y = 1;
        _this.x = 10;
        _this.ay = -1;
        _this.ao = 0;
        _this.ap = 0;
        _this.af = 1;
        _this.ag = 1;
        _this.ac = 1;
        _this.ad = NaN;
        _this.ae = NaN;
        _this.o = null;
        _this.au = 800;
        _this.aw = -1;
        _this.b = null;
        _this.q = false;
        _this.ax = -1;
        _this.holdStarting = null;
        _this.holdEnding = null;
        _this.panStarting = null;
        _this.manipulationStarting = null;
        _this.manipulationChanging = null;
        _this.manipulationEnding = null;
        _this.panEnding = null;
        _this.zoomStarting = null;
        _this.zoomEnding = null;
        _this.flingStarting = null;
        _this.doubleTapped = null;
        _this.ah = 0;
        _this.ai = 0;
        _this.z = 0;
        _this.aq = 0;
        _this.ar = 0;
        _this.b = a;
        return _this;
    }
    Object.defineProperty(TouchGestureRecognizer.prototype, "av", {
        get: function () {
            return this.x;
        },
        set: function (a) {
            this.x = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TouchGestureRecognizer.prototype, "as", {
        get: function () {
            return this.t;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TouchGestureRecognizer.prototype, "at", {
        get: function () {
            return this.u;
        },
        enumerable: true,
        configurable: true
    });
    TouchGestureRecognizer.prototype.bf = function () {
        return { $type: Point_$type, x: Math.abs(this.v - this.aa), y: Math.abs(this.w - this.ab) };
    };
    TouchGestureRecognizer.prototype.bd = function (a) {
        var b = false;
        if (!isNaN_(this.aa) && !isNaN_(this.ab)) {
            this.v = a._inner[0].a;
            this.w = a._inner[0].b;
            if (Math.abs(a._inner[0].a - this.aa) > this.x || Math.abs(a._inner[0].b - this.ab) > this.x) {
                b = true;
            }
        }
        if (b) {
            this.bc();
        }
    };
    TouchGestureRecognizer.prototype.a6 = function (a) {
        var b = a.count;
        var c = this.n;
        var d = false;
        var e = false;
        var f = false;
        var g = false;
        var h = false;
        var i = false;
        var j = false;
        var k = false;
        var l = 0;
        var m = 0;
        var n = 0;
        var o = this.n;
        if (b > 0 && b < 2) {
            switch (this.n) {
                case 5:
                    c = 4;
                    e = true;
                    j = true;
                    break;
                case 0:
                    c = 4;
                    e = true;
                    break;
                case 2:
                    c = 1;
                    j = true;
                    g = true;
                    break;
            }
        }
        if (b > 1) {
            switch (this.n) {
                case 5:
                    c = 2;
                    h = true;
                    k = true;
                    break;
                case 4:
                    f = true;
                    c = 2;
                    h = true;
                    break;
                case 0:
                    c = 2;
                    h = true;
                    break;
                case 1:
                    c = 2;
                    i = true;
                    h = true;
                    break;
            }
        }
        if (b == 0) {
            switch (this.n) {
                case 4:
                    if (this.r(new TouchPointInfo(0, this.t, this.u))) {
                        c = 0;
                        f = true;
                        if (this.doubleTapped != null) {
                            this.doubleTapped(this, this.c());
                        }
                    }
                    else {
                        f = true;
                        c = 0;
                    }
                    break;
                case 1:
                    c = 0;
                    i = true;
                    break;
                case 2:
                    c = 0;
                    g = true;
                    break;
                case 3:
                    c = 0;
                    d = true;
                    break;
            }
        }
        if (k) {
            if (j) {
                if (this.panEnding != null) {
                    this.panEnding(this, this.c());
                }
                if (this.manipulationEnding != null) {
                    this.manipulationEnding(this, this.c());
                }
            }
            this.a1();
        }
        if (e) {
            this.aa = a._inner[0].a;
            this.ab = a._inner[0].b;
        }
        if (c == 4) {
            if (!isNaN_(this.aa) && !isNaN_(this.ab)) {
                this.v = a._inner[0].a;
                this.w = a._inner[0].b;
                if (Math.abs(a._inner[0].a - this.aa) > this.x || Math.abs(a._inner[0].b - this.ab) > this.x) {
                    f = true;
                    j = true;
                    c = 1;
                }
            }
        }
        var p = 0;
        var q = 0;
        for (var r = 0; r < b; r++) {
            p += a._inner[r].a;
            q += a._inner[r].b;
        }
        p /= b;
        q /= b;
        if (b == 0) {
            p = this.ad;
            q = this.ae;
        }
        this.t = p;
        this.u = q;
        this.p.g(this.t, this.u, this.a0());
        if (h) {
            var s = a._inner[0].a - a._inner[1].a;
            var t = a._inner[0].b - a._inner[1].b;
            this.am = Math.abs(s);
            this.an = Math.abs(t);
            this.al = Math.sqrt(s * s + t * t);
            if (this.am < 1) {
                this.am = 1;
            }
            if (this.an < 1) {
                this.an = 1;
            }
            if (this.al < 1) {
                this.al = 1;
            }
        }
        if (c == 2) {
            var u = a._inner[0].a - a._inner[1].a;
            var v = a._inner[0].b - a._inner[1].b;
            l = Math.abs(u);
            m = Math.abs(v);
            n = Math.sqrt(u * u + v * v);
            if (l < 1) {
                l = 1;
            }
            if (m < 1) {
                m = 1;
            }
            if (n < 1) {
                n = 1;
            }
            this.aj = l / this.am;
            this.ak = m / this.an;
            this.y = n / this.al;
        }
        else {
            this.am = NaN;
            this.an = NaN;
            this.aj = 1;
            this.ak = 1;
            this.ah = 1;
            this.ai = 1;
            this.z = 1;
        }
        this.n = c;
        if (o == 0 && this.n == 1 || this.n == 2) {
            if (this.manipulationStarting != null) {
                this.manipulationStarting(this, this.c());
            }
        }
        if (g) {
            this.a5();
        }
        if (i) {
            this.a4();
        }
        if (d) {
            this.a3();
        }
        if (f) {
            this.bc();
        }
        if (j) {
            this.ba();
        }
        if (e) {
            this.a9();
        }
        if (h) {
            this.bb();
        }
        if (this.n == 2) {
            this.ah = this.aj / this.af;
            this.ai = this.ak / this.ag;
            this.z = this.y / this.ac;
            this.aq = this.t - this.ad;
            this.ar = this.u - this.ae;
            this.af = this.af * this.ah;
            this.ag = this.ag * this.ai;
            this.ac = this.ac * this.z;
            this.ad = this.t;
            this.ae = this.u;
            if (this.manipulationChanging != null) {
                this.manipulationChanging(this, this.c());
            }
        }
        if (this.n == 1) {
            this.aq = this.t - this.ad;
            this.ar = this.u - this.ae;
            this.ad = this.t;
            this.ae = this.u;
            if (this.manipulationChanging != null) {
                this.manipulationChanging(this, this.c());
            }
        }
        this.ad = this.t;
        this.ae = this.u;
        if ((i || g) && this.n == 0) {
            if (this.manipulationEnding != null) {
                this.manipulationEnding(this, this.c());
            }
        }
    };
    TouchGestureRecognizer.prototype.r = function (a) {
        var b = this.a0();
        if ((b - this.ay) < 500) {
            if (Math.abs(a.a - this.ao) < 50 && Math.abs(a.b - this.ap) < 50) {
                return true;
            }
        }
        this.ao = a.a;
        this.ap = a.b;
        this.ay = b;
        return false;
    };
    TouchGestureRecognizer.prototype.a9 = function () {
        this.ax = this.a0();
        if (!this.q) {
            this.q = true;
            this.b.executeDelayed(runOn(this, this.a2), 1000);
        }
    };
    TouchGestureRecognizer.prototype.a2 = function () {
        if (!this.q) {
            return;
        }
        var a = this.a0();
        if (a - this.ax >= 1000) {
            this.a8();
        }
        else {
            this.b.executeDelayed(runOn(this, this.a2), (1000 - (a - this.ax)));
        }
    };
    TouchGestureRecognizer.prototype.bc = function () {
        this.q = false;
    };
    TouchGestureRecognizer.prototype.a5 = function () {
        this.p.f();
        if (this.zoomEnding != null) {
            this.zoomEnding(this, this.c());
        }
    };
    TouchGestureRecognizer.prototype.a8 = function () {
        if (this.holdStarting != null) {
            this.holdStarting(this, this.c());
        }
    };
    TouchGestureRecognizer.prototype.bb = function () {
        this.p.f();
        this.a1();
        this.af = 1;
        this.ag = 1;
        this.ac = 1;
        this.ad = this.t;
        this.ae = this.u;
        if (this.zoomStarting != null) {
            this.zoomStarting(this, this.c());
        }
    };
    TouchGestureRecognizer.prototype.a3 = function () {
        if (this.holdEnding != null) {
            this.holdEnding(this, this.c());
        }
    };
    TouchGestureRecognizer.prototype.ba = function () {
        this.p.f();
        this.a1();
        this.ad = this.t;
        this.ae = this.u;
        if (this.panStarting != null) {
            this.panStarting(this, this.c());
        }
    };
    TouchGestureRecognizer.prototype.a1 = function () {
        if (this.n == 5) {
            this.n = 0;
        }
    };
    TouchGestureRecognizer.prototype.be = function () {
        if (this.n != 5) {
            return;
        }
        if (this.o == null || this.aw == -1) {
            this.a1();
            return;
        }
        var a = this.a0();
        var b = a - this.aw;
        if (b < 16) {
            this.a7(runOn(this, this.be));
            return;
        }
        this.aw = a;
        var c = b / 1000;
        var d = this.au * c;
        var e = this.o;
        if (e.a > 0) {
            e.a -= d;
            if (e.a < 0) {
                e.a = 0;
            }
        }
        if (e.a < 0) {
            e.a += d;
            if (e.a > 0) {
                e.a = 0;
            }
        }
        if (e.b > 0) {
            e.b -= d;
            if (e.b < 0) {
                e.b = 0;
            }
        }
        if (e.b < 0) {
            e.b += d;
            if (e.b > 0) {
                e.b = 0;
            }
        }
        if (e.a == 0 && e.b == 0) {
            this.n = 0;
            if (this.panEnding != null) {
                this.panEnding(this, this.c());
            }
            if (this.manipulationEnding != null) {
                this.manipulationEnding(this, this.c());
            }
            this.a1();
            return;
        }
        this.t += e.a * c;
        this.u += e.b * c;
        this.aq = this.t - this.ad;
        this.ar = this.u - this.ae;
        this.ad = this.t;
        this.ae = this.u;
        if (this.manipulationChanging != null) {
            this.manipulationChanging(this, this.c());
        }
        this.a7(runOn(this, this.be));
    };
    TouchGestureRecognizer.prototype.s = function (a) {
        if (this.n == 5) {
            this.a1();
        }
        this.aw = this.a0();
        this.o = a;
        this.n = 5;
        this.a7(runOn(this, this.be));
        if (this.flingStarting != null) {
            if (!this.flingStarting(this, this.c())) {
                this.a1();
                return false;
            }
        }
        return true;
    };
    TouchGestureRecognizer.prototype.a7 = function (a) {
        this.b.enqueueAnimationAction(a);
    };
    TouchGestureRecognizer.prototype.a4 = function () {
        var a = this.p.b(this.a0());
        if ((a.a > 5 || a.a < -5 || a.b > 5 || a.b < -5) && this.n == 0) {
            this.n = 1;
            if (!this.s(a)) {
                if (this.n == 0) {
                    if (this.panEnding != null) {
                        this.panEnding(this, this.c());
                    }
                    if (this.manipulationEnding != null) {
                        this.manipulationEnding(this, this.c());
                    }
                }
            }
        }
        else {
            if (this.panEnding != null) {
                this.panEnding(this, this.c());
            }
            if (this.n == 0) {
                if (this.manipulationEnding != null) {
                    this.manipulationEnding(this, this.c());
                }
            }
        }
    };
    TouchGestureRecognizer.prototype.c = function () {
        var a = new TouchGestureEventArgs();
        a.a = this.t;
        a.b = this.u;
        a.d = this.ah;
        a.e = this.ai;
        a.c = this.z;
        a.f = this.aq;
        a.g = this.ar;
        a.h = this.o != null ? this.o.a : this.p.b(this.a0()).a;
        a.i = this.o != null ? this.o.b : this.p.b(this.a0()).b;
        return a;
    };
    TouchGestureRecognizer.prototype.a0 = function () {
        return this.b.getCurrentRelativeTime();
    };
    TouchGestureRecognizer.$t = markType(TouchGestureRecognizer, 'TouchGestureRecognizer');
    return TouchGestureRecognizer;
}(Base));
export { TouchGestureRecognizer };
//# sourceMappingURL=TouchGestureRecognizer.js.map