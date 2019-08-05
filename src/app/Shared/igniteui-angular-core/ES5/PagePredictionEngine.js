/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, INotifyPropertyChanged_$type, PropertyChangedEventArgs, Number_$type, runOn, typeGetValue, Point_$type, markType } from "./type";
import { List$1 } from "./List$1";
import { DataSourceVelocityTracker } from "./DataSourceVelocityTracker";
import { FastIterationDictionary$2 } from "./FastIterationDictionary$2";
import { truncate } from "./number";
/**
 * @hidden
 */
var PagePredictionEngine = /** @class */ (function (_super) {
    tslib_1.__extends(PagePredictionEngine, _super);
    function PagePredictionEngine() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.a = null;
        _this.s = 0;
        _this.u = 0;
        _this.x = -1;
        _this.t = -1;
        _this.y = 500;
        _this.r = 1000;
        _this.v = 8;
        _this.d = null;
        _this.f = null;
        _this.w = 0;
        _this.propertyChanged = null;
        _this.i = false;
        _this.h = false;
        _this.g = new FastIterationDictionary$2(Base.$, Number_$type, 0);
        _this.p = new List$1(Number_$type, 0);
        _this.o = new List$1(Number_$type, 0);
        _this.c = new DataSourceVelocityTracker();
        _this.q = 0;
        return _this;
    }
    Object.defineProperty(PagePredictionEngine.prototype, "b", {
        get: function () {
            return this.a;
        },
        set: function (a) {
            var b = this.a;
            this.a = a;
            if (b != this.a) {
                this.ay("ExecutionContext", b, this.a);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PagePredictionEngine.prototype, "aa", {
        get: function () {
            return this.s;
        },
        set: function (a) {
            var b = this.s;
            this.s = a;
            if (b != this.s) {
                this.ay("FirstVisibleIndexRequested", b, this.s);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PagePredictionEngine.prototype, "ae", {
        get: function () {
            return this.u;
        },
        set: function (a) {
            var b = this.u;
            this.u = a;
            if (b != this.u) {
                this.ay("LastVisibleIndexRequested", b, this.u);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PagePredictionEngine.prototype, "ag", {
        get: function () {
            return this.x;
        },
        set: function (a) {
            var b = this.x;
            this.x = a;
            if (b != this.x) {
                this.ay("PageSize", b, this.x);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PagePredictionEngine.prototype, "ab", {
        get: function () {
            return this.t;
        },
        set: function (a) {
            var b = this.t;
            this.t = a;
            if (b != this.t) {
                this.ay("FullCount", b, this.t);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PagePredictionEngine.prototype, "ah", {
        get: function () {
            return this.y;
        },
        set: function (a) {
            var b = this.y;
            this.y = a;
            if (b != this.y) {
                this.ay(PagePredictionEngine.aq, b, this.y);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PagePredictionEngine.prototype, "z", {
        get: function () {
            return this.r;
        },
        set: function (a) {
            var b = this.r;
            this.r = a;
            if (b != this.r) {
                this.ay("FetchAheadMilliseconds", b, this.r);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PagePredictionEngine.prototype, "af", {
        get: function () {
            return this.v;
        },
        set: function (a) {
            var b = this.v;
            this.v = a;
            if (b != this.v) {
                this.ay("MaximumPageCandidates", b, this.v);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PagePredictionEngine.prototype, "e", {
        get: function () {
            return this.d;
        },
        set: function (a) {
            var b = this.d;
            this.d = a;
            if (b != this.d) {
                this.ay("PageCandidatesSink", b, this.d);
            }
        },
        enumerable: true,
        configurable: true
    });
    PagePredictionEngine.prototype.ay = function (a, b, c) {
        if (this.propertyChanged != null) {
            this.propertyChanged(this, new PropertyChangedEventArgs(a));
        }
        this.az(a, b, c);
    };
    PagePredictionEngine.prototype.az = function (a, b, c) {
        switch (a) {
            case "FirstVisibleIndexRequested":
            case "LastVisibleIndexRequested":
                this.aw();
                break;
            case "ExecutionContext":
                this.ax();
                break;
            case "FullCount":
                this.a2();
                break;
            case "PageSize":
                this.a2();
                break;
        }
    };
    PagePredictionEngine.prototype.a2 = function () {
        this.c.h();
        this.q = 0;
        var a = new List$1(Number_$type, 0);
        for (var b = 0; b < this.g.q.count; b++) {
            if (this.g.p._inner[b]) {
                continue;
            }
            a.add(this.g.q._inner[b]);
        }
        for (var c = 0; c < a.count; c++) {
            this.a1(a._inner[c]);
        }
        if (this.ab > 0 && this.ag > 0) {
            this.w = truncate(Math.ceil(this.ab / this.ag));
        }
    };
    PagePredictionEngine.prototype.ax = function () {
        this.au();
    };
    PagePredictionEngine.prototype.au = function () {
        if (this.i) {
            return;
        }
        if (this.b != null) {
            this.i = true;
            this.b.enqueueAction(runOn(this, this.av));
        }
    };
    PagePredictionEngine.prototype.av = function () {
        this.i = false;
        this.a4();
    };
    PagePredictionEngine.prototype.a4 = function () {
        if (this.t == -1 || this.x == -1) {
            return;
        }
        this.at();
        this.a5();
        this.a6();
        if (this.q != 0) {
            this.as();
        }
    };
    PagePredictionEngine.prototype.a3 = function () {
        this.h = false;
        this.a4();
    };
    PagePredictionEngine.prototype.as = function () {
        if (this.h) {
            return;
        }
        if (this.b != null) {
            this.h = true;
            this.b.executeDelayed(runOn(this, this.a3), 0);
        }
    };
    PagePredictionEngine.prototype.a6 = function () {
        var a = this.ac();
        var b = this.ad();
        var c = true;
        var d;
        for (var e = a; e <= b; e++) {
            d = e;
            c = this.j(d, 2);
        }
        if (this.q > 0) {
            d = b;
            while (c) {
                d++;
                c = this.j(d, 1);
            }
        }
        else if (this.q < 0) {
            d = a;
            while (c) {
                d--;
                c = this.j(d, 1);
            }
        }
        this.a0();
    };
    PagePredictionEngine.prototype.a0 = function () {
        this.o.clear();
        var a = this.g.o;
        var b = this.g.o.count;
        var c = this.g.p;
        for (var d = 0; d < b; d++) {
            if (c._inner[d]) {
                continue;
            }
            var e = typeGetValue(a._inner[d]);
            this.o.add(e);
        }
        for (var f = 0; f < this.o.count; f++) {
            this.j(this.o._inner[f], 1);
        }
    };
    PagePredictionEngine.prototype.j = function (a, b) {
        if (a < 0 || a > this.w) {
            return false;
        }
        if (this.l(a)) {
            this.a1(a);
            return false;
        }
        if (this.m(a, this.z)) {
            this.a1(a);
            return false;
        }
        if (this.n()) {
            this.a1(a);
            return false;
        }
        this.ar(a, b);
        return true;
    };
    PagePredictionEngine.prototype.ar = function (a, b) {
        if (!this.g.d(a)) {
            if (this.d != null) {
                if (this.d.addCandidate(a, b)) {
                    this.g.s(a, a);
                }
            }
        }
    };
    PagePredictionEngine.prototype.a1 = function (a) {
        if (this.g.d(a)) {
            this.g.f(a);
            if (this.d != null) {
                this.d.removeCandidate(a);
            }
        }
    };
    PagePredictionEngine.prototype.n = function () {
        return this.g.r >= this.af;
    };
    PagePredictionEngine.prototype.m = function (a, b) {
        var c = b / 1000;
        var d = c * this.q;
        if (this.k(a)) {
            return false;
        }
        if (d > 0) {
            var e = d + this.ae;
            if (e >= (a * this.ag)) {
                return false;
            }
        }
        else {
            var f = this.aa + d;
            if (f <= ((a * this.ag) + this.ag)) {
                return false;
            }
        }
        return true;
    };
    PagePredictionEngine.prototype.k = function (a) {
        var b = a * this.ag;
        var c = b + this.ag;
        if (this.ae < b || this.aa > c) {
            return false;
        }
        return true;
    };
    PagePredictionEngine.prototype.l = function (a) {
        var b = this.ah / 1000;
        var c = b * this.q;
        if (c > 0) {
            var d = c + this.aa;
            if (d > (a * this.ag) + this.ag) {
                return true;
            }
        }
        else {
            var e = this.ae + c;
            if (e < (a * this.ag)) {
                return true;
            }
        }
        return false;
    };
    PagePredictionEngine.prototype.ac = function () {
        return truncate(Math.floor(this.aa / this.ag));
    };
    PagePredictionEngine.prototype.ad = function () {
        return truncate(Math.floor(this.ae / this.ag));
    };
    PagePredictionEngine.prototype.a5 = function () {
        this.q = this.c.j().y;
    };
    PagePredictionEngine.prototype.at = function () {
        this.c.i({ $type: Point_$type, x: 0, y: this.aa });
    };
    PagePredictionEngine.prototype.aw = function () {
        if (this.b != null) {
            this.b.enqueueAction(runOn(this, this.a4));
        }
    };
    PagePredictionEngine.$t = markType(PagePredictionEngine, 'PagePredictionEngine', Base.$, [INotifyPropertyChanged_$type]);
    PagePredictionEngine.aq = "PageVisibilityDisplayThresholdMilliseconds";
    return PagePredictionEngine;
}(Base));
export { PagePredictionEngine };
//# sourceMappingURL=PagePredictionEngine.js.map