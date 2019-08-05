/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { EventProxy } from "./EventProxy";
import { Point_$type, runOn, markType, PointUtil, String_$type, Delegate_$type } from "./type";
import { Rect } from "./Rect";
import { MouseEventArgs } from "./MouseEventArgs";
import { Dictionary$2 } from "./Dictionary$2";
import { List$1 } from "./List$1";
/**
 * @hidden
 */
var BaseDOMEventProxy = /** @class */ (function (_super) {
    tslib_1.__extends(BaseDOMEventProxy, _super);
    function BaseDOMEventProxy() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.bv = null;
        _this.bo = false;
        _this.bu = null;
        _this.bg = false;
        _this.bs = 0;
        _this.bt = 0;
        _this.bq = 0;
        _this.br = 0;
        _this.bw = 0;
        _this.cu = null;
        _this.ct = null;
        _this.bf = false;
        _this.bx = -1;
        _this.bk = false;
        _this.bh = false;
        _this.be = false;
        return _this;
    }
    BaseDOMEventProxy.prototype.d = function () {
        var a = new DOMEventProxy(this.bv, this.bu, this.bo);
        a.z = this.z;
        a.aj = this.aj;
        return a;
    };
    Object.defineProperty(BaseDOMEventProxy, "bp", {
        get: function () {
            return (BaseDOMEventProxy.bl || BaseDOMEventProxy.bm);
        },
        enumerable: true,
        configurable: true
    });
    BaseDOMEventProxy.prototype.bc = function (a) {
        return DOMEventProxy.cv(a);
    };
    BaseDOMEventProxy.prototype.bj = function (e_) {
        var pointerEvent_ = e_.originalEvent;
        var a = false;
        if (BaseDOMEventProxy.bm) {
            a = (pointerEvent_.pointerType == 'touch');
        }
        else {
            a = (pointerEvent_.pointerType == pointerEvent_.MSPOINTER_TYPE_TOUCH);
        }
        return a;
    };
    BaseDOMEventProxy.prototype.cl = function (a) {
        if (!this.ab) {
            if (this.bi(a)) {
                if (this.al == null || this.al(a)) {
                    a.preventDefault();
                }
            }
        }
    };
    BaseDOMEventProxy.prototype.bi = function (e_) {
        return (e_.originalEvent.cancelable || e_.originalEvent.cancelable == undefined);
    };
    BaseDOMEventProxy.prototype.ch = function () {
        var source_ = this.bv.getNativeElement();
        BaseDOMEventProxy.ck(source_);
    };
    BaseDOMEventProxy.ck = function (source_) {
        if (BaseDOMEventProxy.bm) {
            source_.style.touchAction = 'none';
        }
        else {
            source_.style.msTouchAction = 'none';
        }
        source_.style.msUserSelect = 'none';
        source_.style.webkitTouchCallout = 'none';
        source_.style.webkitUserSelect = 'none';
        source_.style.khtmlUserSelect = 'none';
        source_.style.mozUserSelect = 'none';
        source_.style.userSelect = 'none';
    };
    BaseDOMEventProxy.ce = function (source_) {
        if (BaseDOMEventProxy.bm) {
            source_.style.touchAction = 'auto';
        }
        else {
            source_.style.msTouchAction = 'auto';
        }
        source_.style.msUserSelect = 'auto';
        source_.style.webkitTouchCallout = 'none';
        source_.style.webkitUserSelect = 'auto';
        source_.style.khtmlUserSelect = 'auto';
        source_.style.mozUserSelect = 'auto';
        source_.style.userSelect = 'auto';
    };
    BaseDOMEventProxy.prototype.cf = function () {
        var source_ = this.bv.getNativeElement();
        BaseDOMEventProxy.ce(source_);
    };
    BaseDOMEventProxy.prototype.ap = function () {
        _super.prototype.ap.call(this);
        if (!this.ab) {
            this.ch();
        }
        else {
            this.cf();
        }
    };
    BaseDOMEventProxy.prototype.b2 = function () {
        var ver_ = -1;
        var matchIE_ = /Trident\/([\d.]+)/;
        if ((matchIE_.exec(navigator.userAgent) != null)) {
            ver_ = (parseFloat(RegExp.$1));
        }
        return ver_;
    };
    BaseDOMEventProxy.prototype.b1 = function () {
        var ver_ = -1;
        var matchIE_ = /Edge\/([\d.]+)/;
        if ((matchIE_.exec(navigator.userAgent) != null)) {
            ver_ = (parseFloat(RegExp.$1));
        }
        return ver_;
    };
    BaseDOMEventProxy.cj = function (e_) {
        var a = BaseDOMEventProxy.b3 >= 6;
        var oe_ = e_.originalEvent;
        if ((((typeof e_.pageX == 'undefined')) || a) && oe_.clientX != null) {
            var od_ = void 0;
            if ((e_.target !== undefined)) {
                od_ = e_.target.ownerDocument;
            }
            else {
                od_ = e_.originalEvent.target.ownerDocument;
            }
            var ed_ = od_ ? od_ : document;
            var doc_ = ed_.documentElement;
            var body_ = ed_.body;
            var clientX_ = oe_.clientX;
            var clientY_ = oe_.clientY;
            var scrollLeft_ = doc_ && doc_.scrollLeft || body_ && body_.scrollLeft || 0;
            var scrollTop_ = doc_ && doc_.scrollTop || body_ && body_.scrollTop || 0;
            var clientLeft_ = doc_ && doc_.clientLeft || body_ && body_.clientLeft || 0;
            var clientTop_ = doc_ && doc_.clientTop || body_ && body_.clientTop || 0;
            e_.pageX = clientX_ + (scrollLeft_ - clientLeft_);
            e_.pageY = clientY_ + (scrollTop_ - clientTop_);
        }
        if ((!e_.pageX)) {
            e_.pageX = e_.originalEvent.pageX;
        }
        if ((!e_.pageY)) {
            e_.pageY = e_.originalEvent.pageY;
        }
        if (((typeof e_.button == 'undefined')) && ((typeof oe_.button != 'undefined'))) {
            e_.button = oe_.button;
        }
    };
    BaseDOMEventProxy.cv = function (a) {
        var b = BaseDOMEventProxy.b3 >= 6;
        var source_ = a.getNativeElement();
        var d_ = source_.ownerDocument;
        var doc_ = d_ ? d_.documentElement : null;
        var z_ = doc_ ? doc_.msContentZoomFactor : null;
        var body_ = doc_.body;
        if ((z_ && z_ > 1) || b) {
            var rect_ = source_.getBoundingClientRect();
            var x_ = (rect_.left);
            var y_ = (rect_.top);
            var scrollLeft_ = (doc_ && doc_.scrollLeft || body_ && body_.scrollLeft || 0);
            var scrollTop_ = (doc_ && doc_.scrollTop || body_ && body_.scrollTop || 0);
            var clientLeft_ = (doc_ && doc_.clientLeft || body_ && body_.clientLeft || 0);
            var clientTop_ = (doc_ && doc_.clientTop || body_ && body_.clientTop || 0);
            var c = x_ + scrollLeft_ - clientLeft_;
            var d = y_ + scrollTop_ - clientTop_;
            return new Rect(0, c, d, 0, 0);
        }
        else {
            var e = a.getOffset();
            return new Rect(0, e.left, e.top, 0, 0);
        }
    };
    Object.defineProperty(BaseDOMEventProxy.prototype, "bz", {
        get: function () {
            return this.bw;
        },
        set: function (a) {
            this.bw = a;
        },
        enumerable: true,
        configurable: true
    });
    BaseDOMEventProxy.prototype.co = function (a) {
        this.am = a;
        BaseDOMEventProxy.cj(a);
        var b = BaseDOMEventProxy.cv(this.bv);
        this.bs = a.pageX - b.left;
        this.bt = a.pageY - b.top;
        this.bq = this.bs - this.bd.left;
        this.br = this.bt - this.bd.top;
        this.cu = { $type: Point_$type, x: this.bs, y: this.bt };
        this.ct = { $type: Point_$type, x: this.bq, y: this.br };
    };
    BaseDOMEventProxy.prototype.cp = function (e_) {
        this.am = e_;
        BaseDOMEventProxy.cj(e_);
        if (BaseDOMEventProxy.bp) {
            var a = e_.pageX;
            var b = e_.pageY;
            var c = BaseDOMEventProxy.cv(this.bv);
            this.bs = a - c.left;
            this.bt = b - c.top;
        }
        else {
            this.bw = 0;
            if (!e_.originalEvent.targetTouches || e_.originalEvent.targetTouches.length < 1) {
                return;
            }
            ;
            this.bw = (e_.originalEvent.targetTouches.length);
            var d = (e_.originalEvent.targetTouches[0].pageX);
            var e = (e_.originalEvent.targetTouches[0].pageY);
            var f = BaseDOMEventProxy.cv(this.bv);
            this.bs = d - f.left;
            this.bt = e - f.top;
        }
        this.bq = this.bs - this.bd.left;
        this.br = this.bt - this.bd.top;
        this.cu = { $type: Point_$type, x: this.bs, y: this.bt };
        this.ct = { $type: Point_$type, x: this.bq, y: this.br };
    };
    BaseDOMEventProxy.prototype.cd = function (e_) {
        this.cn(e_);
        if (this.aa(this.cu, false, true)) {
            var deltaY_ = 0;
            var ev_ = e_;
            deltaY_ = (ev_.originalEvent ? ev_.originalEvent.deltaY : ev_.deltaY);
            var deltaX_ = 0;
            deltaX_ = (ev_.originalEvent ? ev_.originalEvent.deltaX : ev_.deltaX);
            var a = (ev_.originalEvent ? (ev_.originalEvent.deltaMode == 1) : (ev_.deltaMode == 1));
            if (a) {
                deltaY_ = deltaY_ * 40;
                deltaX_ = deltaX_ * 40;
            }
            var b = this.af(this.ct, deltaY_);
            if (b) {
                this.cl(e_);
            }
        }
    };
    BaseDOMEventProxy.prototype.cb = function (e_) {
        this.cn(e_);
        this.co(e_);
        if (this.aa(this.cu, false, true)) {
            var ev_ = e_;
            var delta_ = 0;
            if (ev_.wheelDelta) {
                delta_ = ev_.wheelDelta / 120;
            }
            ;
            if (ev_.originalEvent && ev_.originalEvent.wheelDelta) {
                delta_ = ev_.originalEvent.wheelDelta / 120;
            }
            ;
            if (ev_.detail) {
                delta_ = -ev_.detail / 3;
            }
            ;
            if (ev_.originalEvent && ev_.originalEvent.detail) {
                delta_ = -ev_.originalEvent.detail / 3;
            }
            ;
            delta_ = delta_ / 10;
            var a = this.af(this.ct, delta_);
            if (a) {
                this.cl(e_);
            }
        }
    };
    BaseDOMEventProxy.prototype.ci = function () {
        if (this.bf) {
            if (this.bx == -1) {
                this.bx = this.bu.setTimeout(runOn(this, this.cg), 500);
            }
            else {
                window.clearTimeout(this.bx);
                this.bx = -1;
                this.bx = this.bu.setTimeout(runOn(this, this.cg), 500);
            }
        }
    };
    BaseDOMEventProxy.prototype.b4 = function () {
        this.bf = true;
        if (this.bx != -1) {
            window.clearTimeout(this.bx);
            this.bx = -1;
        }
    };
    BaseDOMEventProxy.prototype.cg = function () {
        this.bf = false;
    };
    Object.defineProperty(BaseDOMEventProxy.prototype, "bn", {
        get: function () {
            return this.bh;
        },
        set: function (a) {
            this.bh = a;
        },
        enumerable: true,
        configurable: true
    });
    BaseDOMEventProxy.prototype.b9 = function (a) {
        if (this.bh || this.bf) {
            return;
        }
        this.co(a);
        if (this.bk) {
            this.bk = false;
            this.a1(this.ct);
        }
    };
    BaseDOMEventProxy.prototype.ca = function (a) {
        if (this.bh || this.bf) {
            return;
        }
        this.co(a);
        this.cn(a);
        var b = new MouseEventArgs();
        b.position = this.cu;
        if (this.aa(this.cu, false, false)) {
            if (!this.bk) {
                this.bk = true;
                this.a0(this.cu);
            }
            this.a2(this.cu, true, false);
            this.ar(this.ct, false);
        }
        else if (this.bk) {
            this.b9(a);
        }
    };
    BaseDOMEventProxy.prototype.cm = function (a) {
        this.bv.focus();
    };
    BaseDOMEventProxy.prototype.b8 = function (a) {
        if (this.bh || this.bf) {
            return;
        }
        this.cm(a);
        this.co(a);
        this.cn(a);
        if (this.aa(this.cu, false, false)) {
            this.be = true;
            this.az(this.cu);
            this.as(this.ct, false);
            this.cl(a);
        }
    };
    BaseDOMEventProxy.prototype.cq = function (a) {
        if (this.bh || this.bf) {
            return;
        }
        if (this.be) {
            this.cc(a);
        }
    };
    BaseDOMEventProxy.prototype.cc = function (a) {
        if (this.bh || this.bf) {
            return;
        }
        this.cn(a);
        if (PointUtil.equals(this.cu, null) || PointUtil.equals(this.ct, null)) {
            this.co(a);
        }
        var b = this.aa(this.cu, false, false) || this.be || this.bk;
        this.be = false;
        this.a3(this.cu);
        this.aq(this.ct, false);
        if (b) {
            this.cl(a);
        }
    };
    BaseDOMEventProxy.prototype.b5 = function (a) {
        this.b6(a, true);
    };
    BaseDOMEventProxy.prototype.b7 = function (a) {
        this.b6(a, false);
    };
    BaseDOMEventProxy.prototype.cs = function (a) {
        return BaseDOMEventProxy.cr(a);
    };
    BaseDOMEventProxy.cr = function (a) {
        var b;
        switch (a.which) {
            case 33:
                b = 10;
                break;
            case 34:
                b = 11;
                break;
            case 36:
                b = 13;
                break;
            case 37:
                b = 14;
                break;
            case 38:
                b = 15;
                break;
            case 39:
                b = 16;
                break;
            case 40:
                b = 17;
                break;
            case 9:
                b = 2;
                break;
            case 32:
                b = 9;
                break;
            case 13:
                b = 3;
                break;
            case 27:
                b = 8;
                break;
            case 16:
                b = 4;
                break;
            case 17:
                b = 5;
                break;
            case 18:
                b = 6;
                break;
            case 8:
                b = 1;
                break;
            case 35:
                b = 12;
                break;
            case 45:
                b = 18;
                break;
            case 46:
                b = 19;
                break;
            case 106:
                b = 78;
                break;
            case 107:
                b = 79;
                break;
            case 109:
                b = 80;
                break;
            case 110:
                b = 81;
                break;
            case 111:
                b = 82;
                break;
            case 220:
                b = 85;
                break;
            case 192:
                b = 86;
                break;
            case 191:
                b = 84;
                break;
            case 186:
                b = 83;
                break;
            case 189:
                b = 88;
                break;
            case 187:
                b = 87;
                break;
            default:
                if (112 <= a.which && a.which <= 123) {
                    b = (56 + a.which - 112);
                }
                else if (65 <= a.which && a.which <= 90) {
                    b = (30 + a.which - 65);
                }
                else if (48 <= a.which && a.which <= 57) {
                    b = (20 + a.which - 48);
                }
                else if (96 <= a.which && a.which <= 105) {
                    b = (68 + a.which - 96);
                }
                else {
                    b = 0;
                }
                break;
        }
        return b;
    };
    BaseDOMEventProxy.prototype.b6 = function (a, b) {
        var c = this.cs(a);
        var d = c != 0;
        this.cn(a);
        if (d) {
            var e = false;
            if (b) {
                e = this.ad(c);
            }
            else {
                e = this.ae(c);
            }
            if (e) {
                this.cl(a);
            }
        }
    };
    BaseDOMEventProxy.prototype.cn = function (a) {
        this.am = a;
        this.ba = 0;
        if (a.shiftKey) {
            this.ba = this.ba | 4;
        }
        if (a.altKey) {
            this.ba = this.ba | 1;
        }
        if (a.ctrlKey) {
            this.ba = this.ba | 2;
        }
        this.ag = a.button == 2;
    };
    BaseDOMEventProxy.prototype.bb = function () {
        var a = BaseDOMEventProxy.cv(this.bv);
        var b = a.left;
        var c = a.top;
        return { $type: Point_$type, x: b, y: c };
    };
    BaseDOMEventProxy.$t = markType(BaseDOMEventProxy, 'BaseDOMEventProxy', EventProxy.$);
    BaseDOMEventProxy.bl = false;
    BaseDOMEventProxy.bm = false;
    BaseDOMEventProxy.b3 = 0;
    BaseDOMEventProxy.b0 = 0;
    return BaseDOMEventProxy;
}(EventProxy));
export { BaseDOMEventProxy };
/**
 * @hidden
 */
var DOMEventProxy = /** @class */ (function (_super) {
    tslib_1.__extends(DOMEventProxy, _super);
    function DOMEventProxy(a, b, c) {
        var _this = _super.call(this) || this;
        _this.c6 = 0;
        _this.c7 = "";
        _this.cx = false;
        _this.c3 = null;
        _this.cz = new Dictionary$2(String_$type, List$1.$.specialize(Delegate_$type), 0);
        _this.du = null;
        _this.c4 = -1;
        _this.dv = null;
        _this.c1 = 0;
        _this.c2 = 0;
        _this.c0 = 5;
        _this.cw = false;
        _this.dt = null;
        _this.bo = c;
        _this.bu = b;
        _this.aj = function (d) { return true; };
        _this.z = false;
        DOMEventProxy.c5++;
        _this.c6 = DOMEventProxy.c5;
        _this.c7 = ".DOMProxy" + _this.c6.toString();
        _this.ba = 0;
        _this.bv = a;
        BaseDOMEventProxy.bl = false;
        try {
            BaseDOMEventProxy.bl = (window.navigator.msPointerEnabled && MSGesture !== undefined);
        }
        catch (d) {
        }
        BaseDOMEventProxy.bm = false;
        try {
            BaseDOMEventProxy.bm = (window.PointerEvent || window.navigator.pointerEnabled);
        }
        catch (e) {
        }
        BaseDOMEventProxy.b3 = _this.b2();
        BaseDOMEventProxy.b0 = _this.b1();
        _this.an(_this.bv, "");
        _this.ai = function (f) { return true; };
        return _this;
    }
    DOMEventProxy.prototype.c8 = function (a, b, c) {
    };
    DOMEventProxy.prototype.an = function (a, b) {
        var c = a;
        var d = this.c7 + b;
        if (!this.bu.supportsDOMEvents()) {
            return;
        }
        var e = new List$1(Delegate_$type, 0);
        this.cz.addItem(d, e);
        this.c8(a, b, e);
        if (!BaseDOMEventProxy.bp) {
            e.add(c.listen("mousemove", runOn(this, this.ca)));
            e.add(c.listen("mouseleave", runOn(this, this.b9)));
            e.add(c.listen("mousedown", runOn(this, this.b8)));
            e.add(c.listen("mouseup", runOn(this, this.cc)));
            e.add(this.bu.globalListen("window", "mouseup", runOn(this, this.cq)));
        }
        e.add(c.listen("keydown", runOn(this, this.b5)));
        e.add(c.listen("keyup", runOn(this, this.b7)));
        var source_ = this.bv.getNativeElement();
        if (!this.ab) {
            BaseDOMEventProxy.ck(source_);
        }
        if (BaseDOMEventProxy.bp) {
            var f = this.bv.getNativeElement();
            if ((window.MSGesture !== undefined)) {
                var g = (new MSGesture());
                g.target = f;
                this.c3 = g;
                e.add(c.listen("MSGestureStart", runOn(this, this.db)));
                e.add(c.listen("MSGestureChange", runOn(this, this.c9)));
                e.add(c.listen("MSGestureEnd", runOn(this, this.da)));
            }
            if (BaseDOMEventProxy.bm) {
                e.add(c.listen("pointerdown", runOn(this, this.de)));
                e.add(c.listen("pointerup", runOn(this, this.dh)));
                e.add(c.listen("pointercancel", runOn(this, this.dd)));
                e.add(c.listen("pointermove", runOn(this, this.df)));
                e.add(c.listen("pointerout", runOn(this, this.dg)));
                e.add(c.listen("lostpointercapture", runOn(this, this.dc)));
            }
            else {
                e.add(c.listen("MSPointerDown", runOn(this, this.de)));
                e.add(c.listen("MSPointerUp", runOn(this, this.dh)));
                e.add(c.listen("MSPointerCancel", runOn(this, this.dd)));
                e.add(c.listen("MSPointerMove", runOn(this, this.df)));
                e.add(c.listen("MSPointerOut", runOn(this, this.dg)));
                e.add(c.listen("MSLostPointerCapture", runOn(this, this.dc)));
            }
        }
        else {
            e.add(c.listen("gesturestart", runOn(this, this.db)));
            e.add(c.listen("gesturechange", runOn(this, this.c9)));
            e.add(c.listen("gestureend", runOn(this, this.da)));
            e.add(c.listen("touchstart", runOn(this, this.dk)));
            e.add(c.listen("touchmove", runOn(this, this.dj)));
            e.add(c.listen("touchend", runOn(this, this.di)));
        }
        if (this.bo) {
            e.add(c.listen("wheel", runOn(this, this.cd)));
        }
        else {
            e.add(c.listen("DOMMouseScroll", runOn(this, this.cb)));
            e.add(c.listen("mousewheel", runOn(this, this.cb)));
        }
    };
    DOMEventProxy.prototype.dh = function (e_) {
        var a = this.bj(e_);
        if (a) {
            this.bz = this.bz - 1;
            if (this.bz < 0) {
                this.bz = 0;
            }
        }
        if (this.bz < 2 && this.cx && a) {
            this.cx = false;
            var b = (e_.originalEvent.scale);
            this.ax(this.ct, b);
        }
        else {
            if (a) {
                this.di(e_);
            }
            else {
                this.cc(e_);
            }
        }
    };
    DOMEventProxy.prototype.dc = function (e_) {
        var a = this.bj(e_);
        if (a) {
            this.bz--;
            if (this.bz < 0) {
                this.bz = 0;
            }
        }
        if (this.bz < 2 && this.cx && a) {
            this.cx = false;
            var b = (e_.originalEvent.scale);
            this.ax(this.ct, b);
        }
    };
    DOMEventProxy.prototype.dd = function (e_) {
        var a = this.bj(e_);
        if (a) {
            this.bz--;
            if (this.bz < 0) {
                this.bz = 0;
            }
        }
        if (this.bz < 2 && this.cx && a) {
            this.cx = false;
            var b = (e_.originalEvent.scale);
            this.ax(this.ct, b);
        }
    };
    DOMEventProxy.prototype.de = function (e_) {
        var a = this.bj(e_);
        if (this.c3 != null && a) {
            this.bz++;
            this.c3.addPointer((e_.originalEvent.pointerId));
        }
        var eventSource_ = this.bv.getNativeElement();
        if (BaseDOMEventProxy.bm) {
            eventSource_.setPointerCapture(e_.originalEvent.pointerId);
        }
        else {
            eventSource_.msSetPointerCapture(e_.originalEvent.pointerId);
        }
        if (this.bz > 1 && !this.cx && a) {
            this.cx = true;
            this.cp(e_);
            var b = (e_.originalEvent.scale);
            this.a5(this.ct, b);
        }
        else {
            if (a) {
                this.dk(e_);
            }
            else {
                this.b8(e_);
            }
        }
    };
    DOMEventProxy.prototype.df = function (e_) {
        var a = this.bj(e_);
        if (this.cx) {
            return;
        }
        if (a) {
            this.dj(e_);
        }
        else {
            this.ca(e_);
        }
    };
    DOMEventProxy.prototype.dg = function (e_) {
        var a = this.bj(e_);
        if (this.cx) {
            return;
        }
        if (a) {
        }
        else {
            this.b9(e_);
        }
    };
    DOMEventProxy.prototype.db = function (e_) {
        this.bk = true;
        this.cn(e_);
        this.cp(e_);
        this.dm();
        if (this.aa(this.cu, true, false)) {
            this.cl(e_);
            if (BaseDOMEventProxy.bp && this.bz < 2) {
                return;
            }
            var a = (e_.originalEvent.scale);
            this.a5(this.ct, a);
        }
    };
    DOMEventProxy.prototype.c9 = function (e_) {
        this.bk = true;
        this.cn(e_);
        this.cp(e_);
        if (this.aa(this.cu, true, false)) {
            this.cl(e_);
            if (BaseDOMEventProxy.bp && this.bz < 2) {
                return;
            }
            var a = (e_.originalEvent.scale);
            this.a4(this.ct, a);
        }
    };
    DOMEventProxy.prototype.da = function (e_) {
        this.cl(e_);
        var a = (e_.originalEvent.scale);
        this.bk = false;
        this.cn(e_);
        this.cp(e_);
        if (!BaseDOMEventProxy.bp || this.cx) {
            this.ax(this.ct, a);
        }
    };
    DOMEventProxy.prototype.dk = function (e_) {
        this.bk = true;
        this.cn(e_);
        this.cp(e_);
        this.du = this.ct;
        if (this.aa(this.cu, true, false)) {
            if (!this.z) {
                this.cl(e_);
            }
            else {
                this.bn = true;
            }
            this.a2(this.cu, false, true);
            this.az(this.cu);
            this.as(this.ct, true);
            this.dq();
        }
    };
    DOMEventProxy.prototype.dq = function () {
        if (this.c4 == -1) {
            this.c1 = this.cu.x;
            this.c2 = this.cu.y;
            this.c4 = this.bu.setTimeout(runOn(this, this.dn), 1500);
        }
    };
    DOMEventProxy.prototype.dm = function () {
        if (Math.abs(this.c1 - this.cu.x) > this.c0 || Math.abs(this.c2 - this.cu.y) > this.c0) {
            this.dr();
        }
    };
    DOMEventProxy.prototype.dr = function () {
        if (this.c4 != -1) {
            window.clearTimeout(this.c4);
            this.c4 = -1;
        }
    };
    DOMEventProxy.prototype.dn = function () {
        this.c4 = -1;
        if (this.bn) {
            this.bn = false;
            this.b4();
        }
        this.ay(this.ct);
    };
    DOMEventProxy.prototype.dj = function (a) {
        this.bk = true;
        this.cn(a);
        this.cp(a);
        if (this.bn) {
            if (this.aa(this.cu, true, false) && this.cy()) {
                this.bn = false;
                this.b4();
            }
        }
        this.dm();
        this.ds();
        if (this.aa(this.cu, true, false) && this.bz == 1 && !this.bn) {
            this.cl(a);
            if (!this.cw) {
                this.cw = true;
                this.dt = this.ct;
                this.aw(this.dt);
            }
            else {
                this.a2(this.cu, true, true);
                this.ar(this.ct, true);
                this.av(this.ct);
            }
        }
    };
    DOMEventProxy.prototype.cy = function () {
        var a = { $type: Point_$type, x: this.du.x - this.ct.x, y: this.du.y - this.ct.y };
        if (Math.abs(a.x) < 2 && Math.abs(a.y) < 2) {
            return false;
        }
        if (Math.abs(a.x) > Math.abs(a.y)) {
            a.y = 0;
        }
        if (Math.abs(a.y) > Math.abs(a.x)) {
            a.x = 0;
        }
        return this.aj(a);
    };
    DOMEventProxy.prototype.di = function (a) {
        this.bk = false;
        this.cn(a);
        this.cp(a);
        this.dr();
        if (this.bn) {
            this.bn = false;
            this.b4();
        }
        this.cl(a);
        this.a2(this.cu, false, true);
        this.a3(this.cu);
        if (this.bz == 0) {
            this.dp(this.cu);
            this.ci();
        }
        if (this.cw && this.bz == 0) {
            this.cw = false;
            this.dt = null;
            this.au(this.ct);
            this.ci();
        }
        this.aq(this.ct, true);
    };
    DOMEventProxy.prototype.dp = function (a) {
        if (Rect.l_op_Equality(this.dv, null)) {
            this.dv = new Rect(0, a.x - 50, a.y - 50, 100, 100);
            this.bu.setTimeout(runOn(this, this.ds), 500);
        }
        else {
            if (a.x >= this.dv.x && a.x <= this.dv.right && a.y >= this.dv.y && a.y <= this.dv.bottom) {
                this.ds();
                this.at(a);
            }
        }
    };
    DOMEventProxy.prototype.ds = function () {
        this.dv = null;
    };
    DOMEventProxy.prototype.dl = function (a) {
        if (this.cz.containsKey(a)) {
            var b = this.cz.item(a);
            this.cz.removeItem(a);
            for (var c = 0; c < b.count; c++) {
                b._inner[c]();
            }
            b.clear();
        }
    };
    DOMEventProxy.prototype.a9 = function (a, b) {
        var c = a;
        var d = this.c7 + b;
        this.dl(d);
    };
    DOMEventProxy.prototype.ao = function () {
        if (this.bv == null) {
            return;
        }
        this.dl(this.c7);
        this.bv = null;
    };
    DOMEventProxy.$t = markType(DOMEventProxy, 'DOMEventProxy', BaseDOMEventProxy.$);
    DOMEventProxy.c5 = 0;
    return DOMEventProxy;
}(BaseDOMEventProxy));
export { DOMEventProxy };
//# sourceMappingURL=BaseDOMEventProxy_combined.js.map