/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, runOn, delegateCombine, markType, INotifyPropertyChanged_$type, PropertyChangedEventArgs, Point_$type } from "./type";
import { CanvasGestureDOMEventProxy } from "./CanvasGestureDOMEventProxy";
import { Brush } from "./Brush";
import { Rect } from "./Rect";
import { truncate, isNaN_ } from "./number";
import { ScrollerScrollingEventArgs } from "./ScrollerScrollingEventArgs";
/**
 * @hidden
 */
var ScrollerView = /** @class */ (function (_super) {
    tslib_1.__extends(ScrollerView, _super);
    function ScrollerView(a) {
        var _this = _super.call(this) || this;
        _this.b = null;
        _this.x = null;
        _this.ab = null;
        _this.w = null;
        _this.a = null;
        _this.aa = null;
        _this.y = null;
        _this.z = null;
        _this.ac = null;
        _this.d = false;
        _this.c = null;
        _this.h = false;
        _this.g = false;
        _this.s = 0;
        _this.p = 0;
        _this.t = -1;
        _this.q = -1;
        _this.f = false;
        _this.e = false;
        _this.r = 0;
        _this.o = 0;
        _this.b = a;
        return _this;
    }
    ScrollerView.prototype.ay = function () {
        return ((function () {
            var $ret = new Brush();
            $ret.fill = "#666666";
            return $ret;
        })());
    };
    ScrollerView.prototype.ar = function (a) {
        var _this = this;
        if (a == null) {
            if (this.x != null) {
                this.x = null;
            }
            if (this.a != null) {
                this.a.ai = null;
                this.a.ao();
            }
            return;
        }
        this.x = a;
        var b = Math.round(this.x.rootWrapper.width());
        var c = Math.round(this.x.rootWrapper.height());
        this.aa = this.x.rootWrapper;
        this.aa.setStyleProperty("position", "relative");
        this.ab = this.x.createElement("div");
        this.ab.setStyleProperty("position", "relative");
        this.ab.setStyleProperty("width", "100%");
        this.ab.setStyleProperty("height", "100%");
        this.ab.setStyleProperty("overflow", "hidden");
        this.aa.append(this.ab);
        this.z = this.x.createElement("div");
        this.z.setStyleProperty("position", "absolute");
        this.z.setStyleProperty("height", this.b.scrollbarSpan + "px");
        this.z.setStyleProperty("width", this.b.minScrollbarSize + "px");
        this.z.setStyleProperty("background-color", this.b.scrollbarBrush._fill);
        this.z.setStyleProperty("display", "none");
        this.z.setStyleProperty("border-radius", "5px");
        this.z.setStyleProperty("z-index", "10000");
        this.z.setStyleProperty("bottom", "0px");
        this.aa.append(this.z);
        this.ac = this.x.createElement("div");
        this.ac.setStyleProperty("position", "absolute");
        this.ac.setStyleProperty("width", this.b.scrollbarSpan + "px");
        this.ac.setStyleProperty("height", this.b.minScrollbarSize + "px");
        this.ac.setStyleProperty("background-color", this.b.scrollbarBrush._fill);
        this.ac.setStyleProperty("display", "none");
        this.ac.setStyleProperty("border-radius", "5px");
        this.ac.setStyleProperty("z-index", "10000");
        this.ac.setStyleProperty("right", "0px");
        this.aa.append(this.ac);
        this.w = this.ab.getNativeElement();
        this.a = new CanvasGestureDOMEventProxy(this.x.rootWrapper, this.x, true);
        this.x.rootWrapper.setProperty("tabIndex", 1000);
        this.x.rootWrapper.setRawStyleProperty("outline", "none");
        this.a.cz = true;
        var d = this.a;
        d.onMouseWheel = delegateCombine(d.onMouseWheel, runOn(this, this.k));
        var e = this.a;
        e.onDragStarted = delegateCombine(e.onDragStarted, runOn(this, this.aj));
        var f = this.a;
        f.onDragDelta = delegateCombine(f.onDragDelta, runOn(this, this.ai));
        var g = this.a;
        g.onDragCompleted = delegateCombine(g.onDragCompleted, runOn(this, this.ah));
        var h = this.a;
        h.onFlingStarted = delegateCombine(h.onFlingStarted, runOn(this, this.i));
        var i = this.a;
        i.onContactStarted = delegateCombine(i.onContactStarted, runOn(this, this.ag));
        var j = this.a;
        j.onContactMoved = delegateCombine(j.onContactMoved, runOn(this, this.af));
        var k = this.a;
        k.onContactCompleted = delegateCombine(k.onContactCompleted, runOn(this, this.ae));
        this.a.z = true;
        this.a.ak = runOn(this, this.n);
        var l = this.a;
        l.onKeyDown = delegateCombine(l.onKeyDown, runOn(this, this.j));
        this.a.al = function (m) {
            var e_ = m.originalEvent;
            var n = (e_.type);
            if (n == "pointerdown" && !_this.a.bj(m)) {
                return false;
            }
            return true;
        };
        this.b.b4(b, c);
    };
    ScrollerView.prototype.j = function (a) {
        return this.b.q(a, (this.a.ba & 4) != 0, (this.a.ba & 2) != 0);
    };
    ScrollerView.prototype.n = function (a, b, c) {
        if (this.e || this.f) {
            return true;
        }
        if (c || b) {
            return true;
        }
        if (this.l(a, b)) {
            return true;
        }
        if (this.m(a, b)) {
            return true;
        }
        return false;
    };
    ScrollerView.prototype.ae = function (a, b) {
        this.e = false;
        this.f = false;
    };
    ScrollerView.prototype.af = function (a, b) {
        if (this.f) {
            var c = a.y - this.r;
            this.r = a.y;
            this.b.b3(c);
        }
        else if (this.e) {
            var d = a.x - this.o;
            this.o = a.x;
            this.b.b1(d);
        }
    };
    ScrollerView.prototype.ag = function (a, b) {
        this.d = false;
        this.ad();
        var c = this.m(a, b);
        var d = this.l(a, b);
        if (c) {
            this.f = true;
            this.r = a.y;
            this.ak();
        }
        else if (d) {
            this.e = true;
            this.o = a.x;
            this.ak();
        }
    };
    ScrollerView.prototype.l = function (a, b) {
        if (!this.g) {
            return false;
        }
        if (a.y >= this.b.viewportHeight - this.b.scrollbarSpan && a.y <= this.b.viewportHeight && a.x >= this.q - this.p / 2 && a.x <= this.q + this.p / 2) {
            return true;
        }
        return false;
    };
    ScrollerView.prototype.m = function (a, b) {
        if (!this.h) {
            return false;
        }
        if (a.x >= this.b.viewportWidth - this.b.scrollbarSpan && a.x <= this.b.viewportWidth && a.y >= this.t - this.s / 2 && a.y <= this.t + this.s / 2) {
            return true;
        }
        return false;
    };
    ScrollerView.prototype.i = function (a, b, c) {
        this.d = true;
        return true;
    };
    ScrollerView.prototype.ap = function (a) {
        this.a.bd = new Rect(0, 0, 0, this.b.viewportWidth, this.b.viewportHeight);
    };
    ScrollerView.prototype.aq = function (a) {
        this.a.bd = new Rect(0, 0, 0, this.b.viewportWidth, this.b.viewportHeight);
    };
    ScrollerView.prototype.an = function (a) {
        if (this.y != null) {
            this.y.setStyleProperty("height", a + "px");
        }
    };
    ScrollerView.prototype.ao = function (a) {
        if (this.y != null) {
            this.y.setStyleProperty("width", a + "px");
        }
    };
    ScrollerView.prototype.ad = function () {
    };
    ScrollerView.prototype.ah = function (a) {
        if (this.e || this.f) {
            return;
        }
        this.d = false;
        this.b.by(a);
    };
    ScrollerView.prototype.ai = function (a) {
        if (this.e || this.f) {
            return;
        }
        this.b.bz(a);
    };
    ScrollerView.prototype.aw = function (a) {
        this.w.scrollTop = truncate(a);
    };
    ScrollerView.prototype.aj = function (a) {
        if (this.e || this.f) {
            return;
        }
        this.d = false;
        this.b.b0(a);
    };
    ScrollerView.prototype.u = function () {
        return this.w.scrollLeft;
    };
    ScrollerView.prototype.v = function () {
        return this.w.scrollTop;
    };
    ScrollerView.prototype.k = function (a, b) {
        this.d = false;
        this.ad();
        return this.b.s(a, b);
    };
    ScrollerView.prototype.av = function (a) {
        this.w.scrollLeft = truncate(a);
    };
    ScrollerView.prototype.as = function (a) {
        this.y = a;
        this.ab.append(this.y);
    };
    ScrollerView.prototype.at = function (a) {
        if (this.x == null) {
            return;
        }
        if (this.c == null) {
            this.c = this.x.getRequestAnimationFrame();
        }
        if (this.d) {
            a();
        }
        else {
            this.c(function () { return a(); });
        }
    };
    ScrollerView.prototype.am = function () {
        if (this.h) {
            this.h = false;
            this.ac.setStyleProperty("display", "none");
        }
    };
    ScrollerView.prototype.al = function () {
        if (this.g) {
            this.g = false;
            this.z.setStyleProperty("display", "none");
        }
    };
    ScrollerView.prototype.ax = function (a, b) {
        var c = false;
        if (!this.h) {
            c = true;
            this.h = true;
            this.ac.setStyleProperty("display", "block");
        }
        if (a != this.t || c) {
            this.t = a;
            if (this.h) {
                this.ac.setRawYPosition(a - b / 2);
            }
        }
        if (b != this.s || c) {
            this.s = b;
            if (this.h) {
                this.ac.setRawSize(this.b.scrollbarSpan, b);
            }
        }
    };
    ScrollerView.prototype.au = function (a, b) {
        var c = false;
        if (!this.g) {
            c = true;
            this.g = true;
            this.z.setStyleProperty("display", "block");
        }
        if (a != this.q || c) {
            this.q = a;
            if (this.g) {
                this.z.setRawXPosition(a - b / 2);
            }
        }
        if (b != this.p || c) {
            this.p = b;
            if (this.g) {
                this.z.setRawSize(b, this.b.scrollbarSpan);
            }
        }
    };
    ScrollerView.prototype.ak = function () {
        this.x.rootWrapper.focus();
    };
    ScrollerView.$t = markType(ScrollerView, 'ScrollerView');
    return ScrollerView;
}(Base));
export { ScrollerView };
/**
 * @hidden
 */
var Scroller = /** @class */ (function (_super) {
    tslib_1.__extends(Scroller, _super);
    function Scroller() {
        var _this = _super.call(this) || this;
        _this.aq = 49;
        _this._keyboardListener = null;
        _this.ai = NaN;
        _this.ad = 49;
        _this.ab = NaN;
        _this.ap = 48;
        _this.ah = NaN;
        _this.ac = 48;
        _this.aa = NaN;
        _this.ag = 0;
        _this.aj = 20;
        _this.am = 8;
        _this.ar = 0;
        _this.cf = null;
        _this.k = false;
        _this.af = 0;
        _this.at = 0;
        _this.as = 0;
        _this.ao = 0;
        _this.an = 0;
        _this.c = null;
        _this.i = true;
        _this.l = false;
        _this.ae = 0;
        _this.z = 0;
        _this.h = false;
        _this.f = false;
        _this.g = false;
        _this.ch = null;
        _this.e = false;
        _this.propertyChanged = null;
        _this.onScrolling = null;
        _this.ak = 0;
        _this.al = 0;
        _this.j = false;
        _this.cf = _this.view.ay();
        return _this;
    }
    Object.defineProperty(Scroller.prototype, "smallVerticalChange", {
        get: function () {
            return this.aq;
        },
        set: function (a) {
            var b = this.aq;
            this.aq = a;
            if (b != this.aq) {
                this.b2("SmallVerticalChange", b, this.aq);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Scroller.prototype, "keyboardListener", {
        get: function () {
            return this._keyboardListener;
        },
        set: function (a) {
            this._keyboardListener = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Scroller.prototype, "largeVerticalChange", {
        get: function () {
            return this.ai;
        },
        set: function (a) {
            var b = this.ai;
            this.ai = a;
            if (b != this.ai) {
                this.b2("LargeVerticalChange", b, this.ai);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Scroller.prototype, "ay", {
        get: function () {
            return this.ad;
        },
        set: function (a) {
            var b = this.ad;
            this.ad = a;
            if (b != this.ad) {
                this.b2("ActualSmallVerticalChange", b, this.ad);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Scroller.prototype, "aw", {
        get: function () {
            return this.ab;
        },
        set: function (a) {
            var b = this.ab;
            this.ab = a;
            if (b != this.ab) {
                this.b2("ActualLargeVerticalChange", b, this.ab);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Scroller.prototype, "smallHorizontalChange", {
        get: function () {
            return this.ap;
        },
        set: function (a) {
            var b = this.ap;
            this.ap = a;
            if (b != this.ap) {
                this.b2("SmallHorizontalChange", b, this.ap);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Scroller.prototype, "largeHorizontalChange", {
        get: function () {
            return this.ah;
        },
        set: function (a) {
            var b = this.ah;
            this.ah = a;
            if (b != this.ah) {
                this.b2("LargeHorizontalChange", b, this.ah);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Scroller.prototype, "ax", {
        get: function () {
            return this.ac;
        },
        set: function (a) {
            var b = this.ac;
            this.ac = a;
            if (b != this.ac) {
                this.b2("ActualSmallHorizontalChange", b, this.ac);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Scroller.prototype, "av", {
        get: function () {
            return this.aa;
        },
        set: function (a) {
            var b = this.aa;
            this.aa = a;
            if (b != this.aa) {
                this.b2("ActualLargeHorizontalChange", b, this.aa);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Scroller.prototype, "contentWidth", {
        get: function () {
            return this.ag;
        },
        set: function (a) {
            var b = this.ag;
            this.ag = a;
            if (b != this.ag) {
                this.b2("ContentWidth", b, this.ag);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Scroller.prototype, "minScrollbarSize", {
        get: function () {
            return this.aj;
        },
        set: function (a) {
            var b = this.aj;
            this.aj = a;
            if (b != this.aj) {
                this.b2("MinScrollbarSize", b, this.aj);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Scroller.prototype, "scrollbarSpan", {
        get: function () {
            return this.am;
        },
        set: function (a) {
            var b = this.am;
            this.am = a;
            if (b != this.am) {
                this.b2("ScrollbarSpan", b, this.am);
            }
        },
        enumerable: true,
        configurable: true
    });
    Scroller.prototype.q = function (a, b, c) {
        switch (a) {
            case 11: return this.t(b, c);
            case 10: return this.u(b, c);
            case 17: return this.n(b, c);
            case 15: return this.x(b, c);
            case 14: return this.r(b, c);
            case 16: return this.v(b, c);
            case 13: return this.p(b, c);
            case 12: return this.o(b, c);
            case 2: return this.w(b, c);
        }
        return false;
    };
    Scroller.prototype.w = function (a, b) {
        if (this.keyboardListener != null) {
            if (this.keyboardListener.onTab(a, b)) {
                return true;
            }
        }
        return false;
    };
    Scroller.prototype.o = function (a, b) {
        if (this.keyboardListener != null) {
            if (this.keyboardListener.onEnd(a, b)) {
                return true;
            }
        }
        return false;
    };
    Scroller.prototype.p = function (a, b) {
        if (this.keyboardListener != null) {
            if (this.keyboardListener.onHome(a, b)) {
                return true;
            }
        }
        return false;
    };
    Scroller.prototype.v = function (a, b) {
        if (this.keyboardListener != null) {
            if (this.keyboardListener.onRightArrow(a, b)) {
                return true;
            }
        }
        if (this.scrollLeft + this.viewportWidth >= this.contentWidth) {
            return false;
        }
        this.b9(this.ax, 0);
        return true;
    };
    Scroller.prototype.r = function (a, b) {
        if (this.keyboardListener != null) {
            if (this.keyboardListener.onLeftArrow(a, b)) {
                return true;
            }
        }
        if (this.scrollLeft <= 0) {
            return false;
        }
        this.b9(this.ax * -1, 0);
        return true;
    };
    Scroller.prototype.x = function (a, b) {
        if (this.keyboardListener != null) {
            if (this.keyboardListener.onUpArrow(a, b)) {
                return true;
            }
        }
        if (this.scrollTop <= 0) {
            return false;
        }
        this.b9(0, this.ay * -1);
        return true;
    };
    Scroller.prototype.n = function (a, b) {
        if (this.keyboardListener != null) {
            if (this.keyboardListener.onDownArrow(a, b)) {
                return true;
            }
        }
        if (this.scrollTop + this.viewportHeight >= this.contentHeight) {
            return false;
        }
        this.b9(0, this.ay);
        return true;
    };
    Scroller.prototype.u = function (a, b) {
        if (this.keyboardListener != null) {
            if (this.keyboardListener.onPageUp(a, b)) {
                return true;
            }
        }
        if (this.scrollTop < 0) {
            return false;
        }
        this.b9(0, this.aw * -1);
        return true;
    };
    Scroller.prototype.t = function (a, b) {
        if (this.keyboardListener != null) {
            if (this.keyboardListener.onPageDown(a, b)) {
                return true;
            }
        }
        if (this.scrollTop + this.viewportHeight >= this.contentHeight) {
            return false;
        }
        this.b9(0, this.aw);
        return true;
    };
    Object.defineProperty(Scroller.prototype, "verticalTrackStartInset", {
        get: function () {
            return this.ar;
        },
        set: function (a) {
            var b = this.ar;
            this.ar = a;
            if (b != this.ar) {
                this.b2("VerticalTrackStartInset", b, this.ar);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Scroller.prototype, "scrollbarBrush", {
        get: function () {
            return this.cf;
        },
        set: function (a) {
            var b = this.cf;
            this.cf = a;
            if (b != this.cf) {
                this.b2("ScrollbarBrush", b, this.cf);
            }
        },
        enumerable: true,
        configurable: true
    });
    Scroller.prototype.b2 = function (a, b, c) {
        if (this.propertyChanged != null) {
            this.propertyChanged(this, new PropertyChangedEventArgs(a));
        }
        this.b5(a, b, c);
    };
    Object.defineProperty(Scroller.prototype, "y", {
        get: function () {
            return this.k;
        },
        set: function (a) {
            this.k = a;
            if (!this.k) {
                this.view.aw(this.scrollTop);
                this.view.av(this.scrollLeft);
            }
        },
        enumerable: true,
        configurable: true
    });
    Scroller.prototype.b5 = function (a, b, c) {
        switch (a) {
            case "ContentWidth":
                this.view.ao(this.contentWidth);
                this.cc();
                break;
            case "ContentHeight":
                this.view.an(this.contentHeight);
                this.ce();
                break;
            case "ScrollTop":
                if (!this.y) {
                    this.view.aw(this.scrollTop);
                }
                break;
            case "ScrollLeft":
                if (!this.y) {
                    this.view.av(this.scrollLeft);
                }
                break;
            case "ViewportWidth":
                this.view.aq(this.viewportWidth);
                if (isNaN_(this.largeVerticalChange)) {
                    this.av = this.viewportWidth;
                }
                break;
            case "ViewportHeight":
                this.view.ap(this.viewportHeight);
                if (isNaN_(this.largeVerticalChange)) {
                    this.aw = this.viewportHeight;
                }
                break;
            case "ScrollbarBrush":
            case "ScrollbarSpan":
            case "MinScrollbarSize":
            case "VerticalTrackStartInset":
                this.ce();
                this.cc();
                break;
        }
    };
    Object.defineProperty(Scroller.prototype, "contentHeight", {
        get: function () {
            return this.af;
        },
        set: function (a) {
            var b = this.af;
            this.af = a;
            if (b != this.af) {
                this.b2("ContentHeight", b, this.af);
            }
        },
        enumerable: true,
        configurable: true
    });
    Scroller.prototype.b3 = function (a) {
        var b = Math.max(this.minScrollbarSize, this.actualVerticalScrollbarHeight);
        var c = this.verticalTrackStartInset + (b / 2);
        var d = this.viewportHeight - (b / 2);
        var e = a / (d - c);
        var f = e * (this.contentHeight - this.viewportHeight);
        this.b9(0, f);
    };
    Scroller.prototype.b1 = function (a) {
        var b = Math.max(this.minScrollbarSize, this.actualHorizontalScrollbarWidth);
        var c = 0 + (b / 2);
        var d = this.viewportWidth - (b / 2);
        var e = a / (d - c);
        var f = e * (this.contentWidth - this.viewportWidth);
        this.b9(f, 0);
    };
    Scroller.prototype.b4 = function (a, b) {
        this.at = a;
        this.as = b;
    };
    Object.defineProperty(Scroller.prototype, "viewportWidth", {
        get: function () {
            return this.at;
        },
        set: function (a) {
            var b = this.at;
            this.at = a;
            if (b != this.at) {
                this.b2("ViewportWidth", b, this.at);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Scroller.prototype, "viewportHeight", {
        get: function () {
            return this.as;
        },
        set: function (a) {
            var b = this.as;
            this.as = a;
            if (b != this.as) {
                this.b2("ViewportHeight", b, this.as);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Scroller.prototype, "scrollTop", {
        get: function () {
            return this.ao;
        },
        set: function (a) {
            var b = this.ao;
            this.ao = a;
            if (b != this.ao) {
                this.b2("ScrollTop", b, this.ao);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Scroller.prototype, "scrollLeft", {
        get: function () {
            return this.an;
        },
        set: function (a) {
            var b = this.an;
            this.an = a;
            if (b != this.an) {
                this.b2("ScrollLeft", b, this.an);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Scroller.prototype, "view", {
        get: function () {
            if (this.c == null) {
                this.c = new ScrollerView(this);
            }
            return this.c;
        },
        enumerable: true,
        configurable: true
    });
    Scroller.prototype.provideContainer = function (a) {
        this.view.ar(a);
        this.ao = this.view.v();
        this.an = this.view.u();
        this.cc();
        this.ce();
    };
    Scroller.prototype.provideContent = function (a) {
        this.view.as(a);
    };
    Scroller.prototype.s = function (a, b) {
        this.g = false;
        this.f = false;
        this.h = false;
        this.view.ad();
        if (this.keyboardListener != null) {
            this.keyboardListener.onWheel();
        }
        this.b9(0, b);
        return true;
    };
    Object.defineProperty(Scroller.prototype, "lockScrollDirection", {
        get: function () {
            return this.i;
        },
        set: function (a) {
            this.i = true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Scroller.prototype, "actualVerticalScrollbarHeight", {
        get: function () {
            return this.ae;
        },
        set: function (a) {
            var b = this.ae;
            this.ae = a;
            if (b != this.ae) {
                this.b2("ActualVerticalScrollbarHeight", b, this.ae);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Scroller.prototype, "actualHorizontalScrollbarWidth", {
        get: function () {
            return this.z;
        },
        set: function (a) {
            var b = this.z;
            this.z = a;
            if (b != this.z) {
                this.b2("ActualHorizontalScrollbarWidth", b, this.z);
            }
        },
        enumerable: true,
        configurable: true
    });
    Scroller.prototype.focus = function () {
        this.view.ak();
    };
    Scroller.prototype.b0 = function (a) {
        this.view.ak();
        this.h = false;
        this.f = false;
        this.g = false;
        this.e = true;
        this.ch = { $type: Point_$type, x: a.x, y: a.y };
    };
    Scroller.prototype.bz = function (a) {
        if (this.e) {
            var b = a.y - this.ch.y;
            var c = a.x - this.ch.x;
            if (this.lockScrollDirection && !this.g) {
                this.g = true;
                if (b > 0 || c > 0) {
                    if (b > c) {
                        this.h = true;
                    }
                    else {
                        this.h = true;
                    }
                }
            }
            this.ch = { $type: Point_$type, x: a.x, y: a.y };
            this.b9(-c, -b);
        }
    };
    Scroller.prototype.scrollTo = function (a, b) {
        this.ak = a - this.scrollLeft;
        this.al = b - this.scrollTop;
        this.b8();
    };
    Scroller.prototype.b9 = function (a, b) {
        this.ak += a;
        this.al += b;
        this.b8();
    };
    Scroller.prototype.b8 = function () {
        if (this.j) {
            return;
        }
        this.j = true;
        this.view.at(runOn(this, this.cb));
    };
    Scroller.prototype.cb = function () {
        this.j = false;
        var a = this.ak;
        var b = this.al;
        this.ak = 0;
        this.al = 0;
        if (this.g) {
            if (this.h) {
                a = 0;
            }
            if (this.f) {
                b = 0;
            }
        }
        var c = Math.round(this.scrollTop + b);
        var d = Math.round(this.scrollLeft + a);
        if (c < 0) {
            c = 0;
            this.view.ad();
        }
        if (d < 0) {
            d = 0;
            this.view.ad();
        }
        if (c + this.viewportHeight > this.contentHeight) {
            c = this.contentHeight - this.viewportHeight;
            if (c < 0) {
                c = 0;
            }
            this.view.ad();
        }
        if (d + this.viewportWidth > this.contentWidth) {
            d = this.contentWidth - this.viewportWidth;
            if (d < 0) {
                d = 0;
            }
            this.view.ad();
        }
        b = c - this.scrollTop;
        a = d - this.scrollLeft;
        if (b != 0 || a != 0) {
            try {
                this.y = true;
                this.l = true;
                this.scrollTop = c;
                this.scrollLeft = d;
                this.ce();
                this.cc();
                this.l = false;
                if (this.onScrolling != null) {
                    this.onScrolling(this, ((function () {
                        var $ret = new ScrollerScrollingEventArgs();
                        $ret.deltaX = a;
                        $ret.deltaY = b;
                        return $ret;
                    })()));
                }
            }
            finally {
                this.y = false;
            }
        }
    };
    Scroller.prototype.ce = function () {
        this.cd(this.contentHeight, this.viewportHeight, this.scrollTop, true);
    };
    Scroller.prototype.cc = function () {
        this.cd(this.contentWidth, this.viewportWidth, this.scrollLeft, false);
    };
    Scroller.prototype.cd = function (a, b, c, d) {
        var e = Math.round((b / a) * b);
        var f = d ? this.verticalTrackStartInset : 0;
        e = e - f;
        if (e < this.minScrollbarSize) {
            e = this.minScrollbarSize;
        }
        if (e >= b) {
            if (d) {
                this.view.am();
            }
            else {
                this.view.al();
            }
            return;
        }
        var g = f + (e / 2);
        var h = b - (e / 2);
        var i = c / (a - b);
        var j = Math.round(g + (h - g) * i);
        if (d) {
            this.actualVerticalScrollbarHeight = e;
            this.view.ax(j, e);
        }
        else {
            this.actualHorizontalScrollbarWidth = e;
            this.view.au(j, e);
        }
    };
    Scroller.prototype.by = function (a) {
        this.g = false;
        this.f = false;
        this.h = false;
        this.e = false;
    };
    Scroller.$t = markType(Scroller, 'Scroller', Base.$, [INotifyPropertyChanged_$type]);
    return Scroller;
}(Base));
export { Scroller };
//# sourceMappingURL=ScrollerView_combined.js.map