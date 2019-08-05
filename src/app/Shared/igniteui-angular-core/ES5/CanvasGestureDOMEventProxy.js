/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { BaseDOMEventProxy } from "./BaseDOMEventProxy";
import { TypeRegistrar, runOn, delegateCombine, Point_$type, String_$type, Delegate_$type, Number_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { List$1 } from "./List$1";
import { TouchPointInfo } from "./TouchPointInfo";
import { DOMExecutionContext } from "./DOMExecutionContext";
import { TouchGestureRecognizer } from "./TouchGestureRecognizer";
/**
 * @hidden
 */
var CanvasGestureDOMEventProxy = /** @class */ (function (_super) {
    tslib_1.__extends(CanvasGestureDOMEventProxy, _super);
    function CanvasGestureDOMEventProxy(a, b, c) {
        var _this = _super.call(this) || this;
        _this.c9 = 0;
        _this.da = "";
        _this.cw = null;
        _this.c7 = null;
        _this.c2 = new Dictionary$2(String_$type, List$1.$.specialize(Delegate_$type), 0);
        _this.dy = null;
        _this.cx = false;
        _this.c3 = new List$1(Number_$type, 0);
        _this.c4 = new List$1(Point_$type, 0);
        _this.cz = false;
        _this.c5 = new List$1(TouchPointInfo.$, 0);
        _this.bo = c;
        _this.bu = b;
        _this.cw = new TouchGestureRecognizer(new DOMExecutionContext(b));
        var d = _this.cw;
        d.holdEnding = delegateCombine(d.holdEnding, runOn(_this, _this.dc));
        var e = _this.cw;
        e.holdStarting = delegateCombine(e.holdStarting, runOn(_this, _this.dd));
        var f = _this.cw;
        f.zoomStarting = delegateCombine(f.zoomStarting, runOn(_this, _this.dk));
        var g = _this.cw;
        g.zoomEnding = delegateCombine(g.zoomEnding, runOn(_this, _this.dj));
        var h = _this.cw;
        h.panStarting = delegateCombine(h.panStarting, runOn(_this, _this.di));
        var i = _this.cw;
        i.panEnding = delegateCombine(i.panEnding, runOn(_this, _this.dh));
        var j = _this.cw;
        j.manipulationStarting = delegateCombine(j.manipulationStarting, runOn(_this, _this.dg));
        var k = _this.cw;
        k.manipulationChanging = delegateCombine(k.manipulationChanging, runOn(_this, _this.de));
        var l = _this.cw;
        l.manipulationEnding = delegateCombine(l.manipulationEnding, runOn(_this, _this.df));
        var m = _this.cw;
        m.doubleTapped = delegateCombine(m.doubleTapped, runOn(_this, _this.db));
        var n = _this.cw;
        n.flingStarting = delegateCombine(n.flingStarting, runOn(_this, _this.cy));
        _this.aj = function (o) { return true; };
        _this.z = true;
        CanvasGestureDOMEventProxy.c8++;
        _this.c9 = CanvasGestureDOMEventProxy.c8;
        _this.da = ".DOMProxy" + _this.c9.toString();
        _this.ba = 0;
        _this.bv = a;
        BaseDOMEventProxy.bl = false;
        try {
            BaseDOMEventProxy.bl = (window.navigator.msPointerEnabled && MSGesture !== undefined);
        }
        catch (o) {
        }
        BaseDOMEventProxy.bm = false;
        try {
            BaseDOMEventProxy.bm = (window.PointerEvent || window.navigator.pointerEnabled);
        }
        catch (p) {
        }
        if (BaseDOMEventProxy.bp) {
            _this.z = false;
        }
        BaseDOMEventProxy.b3 = _this.b2();
        BaseDOMEventProxy.b0 = _this.b1();
        _this.an(_this.bv, "");
        _this.ai = function (q) { return true; };
        return _this;
    }
    CanvasGestureDOMEventProxy.prototype.d = function () {
        var a = new CanvasGestureDOMEventProxy(this.bv, this.bu, this.bo);
        a.z = this.z;
        a.aj = this.aj;
        return a;
    };
    CanvasGestureDOMEventProxy.prototype.cy = function (a, b) {
        return this.ac({ $type: Point_$type, x: b.a, y: b.b }, b.h, b.i);
    };
    CanvasGestureDOMEventProxy.prototype.db = function (a, b) {
        this.at({ $type: Point_$type, x: b.a, y: b.b });
    };
    CanvasGestureDOMEventProxy.prototype.get_ah = function () {
        return true;
    };
    CanvasGestureDOMEventProxy.prototype.df = function (a, b) {
        if (this.cw.n == 0) {
            this.ax({ $type: Point_$type, x: b.a, y: b.b }, b.d);
            this.ci();
        }
    };
    CanvasGestureDOMEventProxy.prototype.de = function (a, b) {
        if (this.cw.n == 2) {
            this.a4({ $type: Point_$type, x: b.a, y: b.b }, b.d);
            this.a7({ $type: Point_$type, x: b.a, y: b.b }, b.d, b.e, b.c);
        }
        if (this.cw.n == 1 || this.cw.n == 5) {
            this.ar({ $type: Point_$type, x: b.a, y: b.b }, true);
            this.av({ $type: Point_$type, x: b.a, y: b.b });
        }
    };
    CanvasGestureDOMEventProxy.prototype.dg = function (a, b) {
    };
    CanvasGestureDOMEventProxy.prototype.dh = function (a, b) {
        this.cx = false;
        if (this.cw.n == 0) {
            this.aq({ $type: Point_$type, x: b.a, y: b.b }, true);
            this.au({ $type: Point_$type, x: b.a, y: b.b });
        }
    };
    CanvasGestureDOMEventProxy.prototype.di = function (a, b) {
        this.aw({ $type: Point_$type, x: b.a, y: b.b });
    };
    CanvasGestureDOMEventProxy.prototype.dj = function (a, b) {
        this.a6({ $type: Point_$type, x: b.a, y: b.b }, b.d, b.e, b.c);
    };
    CanvasGestureDOMEventProxy.prototype.dk = function (a, b) {
        this.a5({ $type: Point_$type, x: b.a, y: b.b }, 1);
        this.a8({ $type: Point_$type, x: b.a, y: b.b }, 1, 1, 1);
    };
    CanvasGestureDOMEventProxy.prototype.dd = function (a, b) {
        this.cx = true;
        this.ay({ $type: Point_$type, x: b.a, y: b.b });
    };
    CanvasGestureDOMEventProxy.prototype.dc = function (a, b) {
        if (this.cw.n == 0) {
            this.aq({ $type: Point_$type, x: b.a, y: b.b }, true);
        }
    };
    CanvasGestureDOMEventProxy.c0 = function () {
        BaseDOMEventProxy.bl = false;
        try {
            BaseDOMEventProxy.bl = (window.navigator.msPointerEnabled && MSGesture !== undefined);
        }
        catch (a) {
        }
        BaseDOMEventProxy.bm = false;
        try {
            BaseDOMEventProxy.bm = (window.PointerEvent || window.navigator.pointerEnabled);
        }
        catch (b) {
        }
        return BaseDOMEventProxy.bp;
    };
    CanvasGestureDOMEventProxy.prototype.dl = function (a, b, c) {
    };
    CanvasGestureDOMEventProxy.prototype.an = function (a, b) {
        var c = a;
        if (!this.bu.supportsDOMEvents()) {
            return;
        }
        var d = this.da + b;
        var e = new List$1(Delegate_$type, 0);
        this.c2.addItem(d, e);
        this.dl(a, b, e);
        if (!BaseDOMEventProxy.bp) {
            e.add(c.listen("mousemove", runOn(this, this.ca)));
            e.add(c.listen("mouseleave", runOn(this, this.b9)));
            e.add(c.listen("mousedown", runOn(this, this.b8)));
            e.add(c.listen("mouseup", runOn(this, this.cc)));
            e.add(this.bu.globalListen("window", "mouseup", runOn(this, this.cq)));
        }
        e.add(c.listen("keydown", runOn(this, this.b5)));
        e.add(c.listen("keyup", runOn(this, this.b7)));
        if (BaseDOMEventProxy.bp) {
            var source_ = this.bv.getNativeElement();
            BaseDOMEventProxy.ck(source_);
            var f = this.bv.getNativeElement();
            if (BaseDOMEventProxy.bm) {
                e.add(c.listen("pointerdown", runOn(this, this.dp)));
                e.add(c.listen("pointerup", runOn(this, this.ds)));
                e.add(c.listen("pointercancel", runOn(this, this.dn)));
                e.add(c.listen("pointermove", runOn(this, this.dq)));
                e.add(c.listen("pointerleave", runOn(this, this.dr)));
                e.add(c.listen("lostpointercapture", runOn(this, this.dm)));
            }
            else {
                e.add(c.listen("MSPointerDown", runOn(this, this.dp)));
                e.add(c.listen("MSPointerUp", runOn(this, this.ds)));
                e.add(c.listen("MSPointerCancel", runOn(this, this.dn)));
                e.add(c.listen("MSPointerMove", runOn(this, this.dq)));
                e.add(c.listen("MSPointerLeave", runOn(this, this.dr)));
                e.add(c.listen("MSLostPointerCapture", runOn(this, this.dm)));
            }
        }
        else {
            e.add(c.listen("touchstart", runOn(this, this.dv)));
            e.add(c.listen("touchmove", runOn(this, this.du)));
            e.add(c.listen("touchend", runOn(this, this.dt)));
        }
        if (this.bo) {
            e.add(c.listen("wheel", runOn(this, this.cd)));
        }
        else {
            e.add(c.listen("DOMMouseScroll", runOn(this, this.cb)));
            e.add(c.listen("mousewheel", runOn(this, this.cb)));
        }
    };
    CanvasGestureDOMEventProxy.prototype.ds = function (e_) {
        var a = this.bj(e_);
        var b = this.c3.indexOf((e_.originalEvent.pointerId));
        if (b >= 0) {
            this.c3.removeAt(b);
            this.c4.removeAt(b);
            this.bz = this.c3.count;
        }
        if (a) {
            this.dt(e_);
        }
        else {
            this.cc(e_);
        }
    };
    CanvasGestureDOMEventProxy.prototype.dm = function (e_) {
        var a = this.bj(e_);
    };
    CanvasGestureDOMEventProxy.prototype.dn = function (e_) {
        var a = this.bj(e_);
        var b = this.c3.indexOf((e_.originalEvent.pointerId));
        if (b >= 0) {
            this.c3.removeAt(b);
            this.c4.removeAt(b);
            this.bz = this.c3.count;
        }
    };
    CanvasGestureDOMEventProxy.prototype.dp = function (e_) {
        var a = this.bj(e_);
        BaseDOMEventProxy.cj(e_);
        this.c3.add((e_.originalEvent.pointerId));
        this.c4.add({ $type: Point_$type, x: e_.pageX, y: e_.pageY });
        this.bz = this.c3.count;
        if (a) {
            this.cp(e_);
        }
        else {
            this.co(e_);
        }
        this.cn(e_);
        if (!this.cz && this.aa(this.cu, a, false)) {
            var eventSource_ = this.bv.getNativeElement();
            if (BaseDOMEventProxy.bm) {
                eventSource_.setPointerCapture(e_.originalEvent.pointerId);
            }
            else {
                eventSource_.msSetPointerCapture(e_.originalEvent.pointerId);
            }
        }
        if (a) {
            this.dv(e_);
        }
        else {
            this.b8(e_);
        }
    };
    CanvasGestureDOMEventProxy.prototype.dq = function (e_) {
        var a = this.bj(e_);
        BaseDOMEventProxy.cj(e_);
        this.cn(e_);
        this.cp(e_);
        var b = this.c3.indexOf((e_.originalEvent.pointerId));
        if (b >= 0) {
            this.c4._inner[b] = { $type: Point_$type, x: e_.pageX, y: e_.pageY };
        }
        if (this.cz && this.aa(this.cu, a, false)) {
            var eventSource_ = this.bv.getNativeElement();
            if (BaseDOMEventProxy.bm) {
                eventSource_.setPointerCapture(e_.originalEvent.pointerId);
            }
            else {
                eventSource_.msSetPointerCapture(e_.originalEvent.pointerId);
            }
        }
        if (a) {
            this.du(e_);
        }
        else {
            this.ca(e_);
        }
    };
    CanvasGestureDOMEventProxy.prototype.dr = function (e_) {
        var a = this.bj(e_);
        if (a) {
        }
        else {
            this.b9(e_);
        }
    };
    CanvasGestureDOMEventProxy.prototype.dv = function (e_) {
        this.bk = true;
        this.cn(e_);
        this.cp(e_);
        this.dy = this.ct;
        if (this.aa(this.cu, true, false)) {
            if (!this.z || this.bz > 1) {
                if (this.bn) {
                    this.bn = false;
                    this.b4();
                }
                this.cl(e_);
            }
            else {
                this.bn = true;
                this.cx = false;
            }
            this.a2(this.cu, false, true);
            this.az(this.cu);
            this.as(this.ct, true);
            this.cw.a6(this.c6(e_));
        }
    };
    CanvasGestureDOMEventProxy.prototype.c6 = function (e_) {
        var a = BaseDOMEventProxy.cv(this.bv);
        var b = this.bd;
        this.c5.clear();
        if (BaseDOMEventProxy.bp) {
            var c = this.c3.count;
            for (var j_ = 0; j_ < c; j_++) {
                var d = this.c3._inner[j_];
                var e = this.c4._inner[j_];
                var f = e.x;
                var g = e.y;
                var h = new TouchPointInfo(1);
                h.a = (f - a.left) - b.left;
                h.b = (g - a.top) - b.top;
                this.c5.add(h);
            }
        }
        else {
            var i = (e_.originalEvent.targetTouches.length);
            for (var j_ = 0; j_ < i; j_++) {
                var j = (e_.originalEvent.targetTouches[j_].pageX);
                var k = (e_.originalEvent.targetTouches[j_].pageY);
                var l = new TouchPointInfo(1);
                l.a = (j - a.left) - b.left;
                l.b = (k - a.top) - b.top;
                this.c5.add(l);
            }
        }
        return this.c5;
    };
    CanvasGestureDOMEventProxy.prototype.du = function (a) {
        this.bk = true;
        this.cn(a);
        this.cp(a);
        if (this.bn) {
            if ((this.aa(this.cu, true, false) && this.c1()) || this.cx == true || this.cw.n == 2) {
                this.bn = false;
                this.b4();
            }
        }
        if ((this.cx || this.cw.n == 2 || this.aa(this.cu, true, false)) && !this.bn) {
            this.cx = true;
            this.cl(a);
            this.cw.a6(this.c6(a));
        }
    };
    CanvasGestureDOMEventProxy.prototype.c1 = function () {
        var a = { $type: Point_$type, x: this.dy.x - this.ct.x, y: this.dy.y - this.ct.y };
        if (Math.abs(a.x) > Math.abs(a.y)) {
            a.y = 0;
        }
        if (Math.abs(a.y) > Math.abs(a.x)) {
            a.x = 0;
        }
        return this.aj(a);
    };
    CanvasGestureDOMEventProxy.prototype.dt = function (a) {
        this.bk = false;
        this.cn(a);
        this.cp(a);
        if (this.bn) {
            this.bn = false;
            this.b4();
        }
        var b = this.cw.n;
        var c = this.aa(this.cu, true, false) || b != 0;
        if (this.cw.n != 2 && this.cw.n != 5) {
            this.a2(this.cu, false, true);
            this.a3(this.cu);
        }
        var d = this.cw.n == 2;
        if (d) {
            c = true;
            this.aq({ $type: Point_$type, x: this.cw.as, y: this.cw.at }, true);
        }
        this.cw.a6(this.c6(a));
        if (this.cw.n == 0) {
            this.ci();
        }
        if (!d && this.cw.n == 0) {
            this.aq({ $type: Point_$type, x: this.cw.as, y: this.cw.at }, true);
        }
        if (this.cw.n != 0) {
            c = true;
        }
        if (c) {
            this.cl(a);
        }
    };
    CanvasGestureDOMEventProxy.prototype.dw = function (a) {
        if (this.c2.containsKey(a)) {
            var b = this.c2.item(a);
            this.c2.removeItem(a);
            for (var c = 0; c < b.count; c++) {
                b._inner[c]();
            }
            b.clear();
        }
    };
    CanvasGestureDOMEventProxy.prototype.a9 = function (a, b) {
        var c = a;
        var d = this.da + b;
        this.dw(d);
    };
    CanvasGestureDOMEventProxy.prototype.ao = function () {
        if (this.bv == null) {
            return;
        }
        this.dw(this.da);
        this.bv = null;
    };
    CanvasGestureDOMEventProxy.register = function () {
        TypeRegistrar.register("CanvasGestureDOMEventProxy", CanvasGestureDOMEventProxy.$);
    };
    CanvasGestureDOMEventProxy.$t = markType(CanvasGestureDOMEventProxy, 'CanvasGestureDOMEventProxy', BaseDOMEventProxy.$);
    CanvasGestureDOMEventProxy.c8 = 0;
    return CanvasGestureDOMEventProxy;
}(BaseDOMEventProxy));
export { CanvasGestureDOMEventProxy };
//# sourceMappingURL=CanvasGestureDOMEventProxy.js.map