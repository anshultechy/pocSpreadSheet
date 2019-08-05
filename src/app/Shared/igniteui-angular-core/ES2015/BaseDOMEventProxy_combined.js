/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { EventProxy } from "./EventProxy";
import { Point_$type, runOn, markType, PointUtil, String_$type, Delegate_$type } from "./type";
import { Rect } from "./Rect";
import { MouseEventArgs } from "./MouseEventArgs";
import { Dictionary$2 } from "./Dictionary$2";
import { List$1 } from "./List$1";
/**
 * @hidden
 */
export class BaseDOMEventProxy extends EventProxy {
    constructor() {
        super(...arguments);
        this.bv = null;
        this.bo = false;
        this.bu = null;
        this.bg = false;
        this.bs = 0;
        this.bt = 0;
        this.bq = 0;
        this.br = 0;
        this.bw = 0;
        this.cu = null;
        this.ct = null;
        this.bf = false;
        this.bx = -1;
        this.bk = false;
        this.bh = false;
        this.be = false;
    }
    d() {
        let a = new DOMEventProxy(this.bv, this.bu, this.bo);
        a.z = this.z;
        a.aj = this.aj;
        return a;
    }
    static get bp() {
        return (BaseDOMEventProxy.bl || BaseDOMEventProxy.bm);
    }
    bc(a) {
        return DOMEventProxy.cv(a);
    }
    bj(e_) {
        let pointerEvent_ = e_.originalEvent;
        let a = false;
        if (BaseDOMEventProxy.bm) {
            a = (pointerEvent_.pointerType == 'touch');
        }
        else {
            a = (pointerEvent_.pointerType == pointerEvent_.MSPOINTER_TYPE_TOUCH);
        }
        return a;
    }
    cl(a) {
        if (!this.ab) {
            if (this.bi(a)) {
                if (this.al == null || this.al(a)) {
                    a.preventDefault();
                }
            }
        }
    }
    bi(e_) {
        return (e_.originalEvent.cancelable || e_.originalEvent.cancelable == undefined);
    }
    ch() {
        let source_ = this.bv.getNativeElement();
        BaseDOMEventProxy.ck(source_);
    }
    static ck(source_) {
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
    }
    static ce(source_) {
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
    }
    cf() {
        let source_ = this.bv.getNativeElement();
        BaseDOMEventProxy.ce(source_);
    }
    ap() {
        super.ap();
        if (!this.ab) {
            this.ch();
        }
        else {
            this.cf();
        }
    }
    b2() {
        let ver_ = -1;
        let matchIE_ = /Trident\/([\d.]+)/;
        if ((matchIE_.exec(navigator.userAgent) != null)) {
            ver_ = (parseFloat(RegExp.$1));
        }
        return ver_;
    }
    b1() {
        let ver_ = -1;
        let matchIE_ = /Edge\/([\d.]+)/;
        if ((matchIE_.exec(navigator.userAgent) != null)) {
            ver_ = (parseFloat(RegExp.$1));
        }
        return ver_;
    }
    static cj(e_) {
        let a = BaseDOMEventProxy.b3 >= 6;
        let oe_ = e_.originalEvent;
        if ((((typeof e_.pageX == 'undefined')) || a) && oe_.clientX != null) {
            let od_;
            if ((e_.target !== undefined)) {
                od_ = e_.target.ownerDocument;
            }
            else {
                od_ = e_.originalEvent.target.ownerDocument;
            }
            let ed_ = od_ ? od_ : document;
            let doc_ = ed_.documentElement;
            let body_ = ed_.body;
            let clientX_ = oe_.clientX;
            let clientY_ = oe_.clientY;
            let scrollLeft_ = doc_ && doc_.scrollLeft || body_ && body_.scrollLeft || 0;
            let scrollTop_ = doc_ && doc_.scrollTop || body_ && body_.scrollTop || 0;
            let clientLeft_ = doc_ && doc_.clientLeft || body_ && body_.clientLeft || 0;
            let clientTop_ = doc_ && doc_.clientTop || body_ && body_.clientTop || 0;
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
    }
    static cv(a) {
        let b = BaseDOMEventProxy.b3 >= 6;
        let source_ = a.getNativeElement();
        let d_ = source_.ownerDocument;
        let doc_ = d_ ? d_.documentElement : null;
        let z_ = doc_ ? doc_.msContentZoomFactor : null;
        let body_ = doc_.body;
        if ((z_ && z_ > 1) || b) {
            let rect_ = source_.getBoundingClientRect();
            let x_ = (rect_.left);
            let y_ = (rect_.top);
            let scrollLeft_ = (doc_ && doc_.scrollLeft || body_ && body_.scrollLeft || 0);
            let scrollTop_ = (doc_ && doc_.scrollTop || body_ && body_.scrollTop || 0);
            let clientLeft_ = (doc_ && doc_.clientLeft || body_ && body_.clientLeft || 0);
            let clientTop_ = (doc_ && doc_.clientTop || body_ && body_.clientTop || 0);
            let c = x_ + scrollLeft_ - clientLeft_;
            let d = y_ + scrollTop_ - clientTop_;
            return new Rect(0, c, d, 0, 0);
        }
        else {
            let e = a.getOffset();
            return new Rect(0, e.left, e.top, 0, 0);
        }
    }
    get bz() {
        return this.bw;
    }
    set bz(a) {
        this.bw = a;
    }
    co(a) {
        this.am = a;
        BaseDOMEventProxy.cj(a);
        let b = BaseDOMEventProxy.cv(this.bv);
        this.bs = a.pageX - b.left;
        this.bt = a.pageY - b.top;
        this.bq = this.bs - this.bd.left;
        this.br = this.bt - this.bd.top;
        this.cu = { $type: Point_$type, x: this.bs, y: this.bt };
        this.ct = { $type: Point_$type, x: this.bq, y: this.br };
    }
    cp(e_) {
        this.am = e_;
        BaseDOMEventProxy.cj(e_);
        if (BaseDOMEventProxy.bp) {
            let a = e_.pageX;
            let b = e_.pageY;
            let c = BaseDOMEventProxy.cv(this.bv);
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
            let d = (e_.originalEvent.targetTouches[0].pageX);
            let e = (e_.originalEvent.targetTouches[0].pageY);
            let f = BaseDOMEventProxy.cv(this.bv);
            this.bs = d - f.left;
            this.bt = e - f.top;
        }
        this.bq = this.bs - this.bd.left;
        this.br = this.bt - this.bd.top;
        this.cu = { $type: Point_$type, x: this.bs, y: this.bt };
        this.ct = { $type: Point_$type, x: this.bq, y: this.br };
    }
    cd(e_) {
        this.cn(e_);
        if (this.aa(this.cu, false, true)) {
            let deltaY_ = 0;
            let ev_ = e_;
            deltaY_ = (ev_.originalEvent ? ev_.originalEvent.deltaY : ev_.deltaY);
            let deltaX_ = 0;
            deltaX_ = (ev_.originalEvent ? ev_.originalEvent.deltaX : ev_.deltaX);
            let a = (ev_.originalEvent ? (ev_.originalEvent.deltaMode == 1) : (ev_.deltaMode == 1));
            if (a) {
                deltaY_ = deltaY_ * 40;
                deltaX_ = deltaX_ * 40;
            }
            let b = this.af(this.ct, deltaY_);
            if (b) {
                this.cl(e_);
            }
        }
    }
    cb(e_) {
        this.cn(e_);
        this.co(e_);
        if (this.aa(this.cu, false, true)) {
            let ev_ = e_;
            let delta_ = 0;
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
            let a = this.af(this.ct, delta_);
            if (a) {
                this.cl(e_);
            }
        }
    }
    ci() {
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
    }
    b4() {
        this.bf = true;
        if (this.bx != -1) {
            window.clearTimeout(this.bx);
            this.bx = -1;
        }
    }
    cg() {
        this.bf = false;
    }
    get bn() {
        return this.bh;
    }
    set bn(a) {
        this.bh = a;
    }
    b9(a) {
        if (this.bh || this.bf) {
            return;
        }
        this.co(a);
        if (this.bk) {
            this.bk = false;
            this.a1(this.ct);
        }
    }
    ca(a) {
        if (this.bh || this.bf) {
            return;
        }
        this.co(a);
        this.cn(a);
        let b = new MouseEventArgs();
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
    }
    cm(a) {
        this.bv.focus();
    }
    b8(a) {
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
    }
    cq(a) {
        if (this.bh || this.bf) {
            return;
        }
        if (this.be) {
            this.cc(a);
        }
    }
    cc(a) {
        if (this.bh || this.bf) {
            return;
        }
        this.cn(a);
        if (PointUtil.equals(this.cu, null) || PointUtil.equals(this.ct, null)) {
            this.co(a);
        }
        let b = this.aa(this.cu, false, false) || this.be || this.bk;
        this.be = false;
        this.a3(this.cu);
        this.aq(this.ct, false);
        if (b) {
            this.cl(a);
        }
    }
    b5(a) {
        this.b6(a, true);
    }
    b7(a) {
        this.b6(a, false);
    }
    cs(a) {
        return BaseDOMEventProxy.cr(a);
    }
    static cr(a) {
        let b;
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
    }
    b6(a, b) {
        let c = this.cs(a);
        let d = c != 0;
        this.cn(a);
        if (d) {
            let e = false;
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
    }
    cn(a) {
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
    }
    bb() {
        let a = BaseDOMEventProxy.cv(this.bv);
        let b = a.left;
        let c = a.top;
        return { $type: Point_$type, x: b, y: c };
    }
}
BaseDOMEventProxy.$t = markType(BaseDOMEventProxy, 'BaseDOMEventProxy', EventProxy.$);
BaseDOMEventProxy.bl = false;
BaseDOMEventProxy.bm = false;
BaseDOMEventProxy.b3 = 0;
BaseDOMEventProxy.b0 = 0;
/**
 * @hidden
 */
export class DOMEventProxy extends BaseDOMEventProxy {
    constructor(a, b, c) {
        super();
        this.c6 = 0;
        this.c7 = "";
        this.cx = false;
        this.c3 = null;
        this.cz = new Dictionary$2(String_$type, List$1.$.specialize(Delegate_$type), 0);
        this.du = null;
        this.c4 = -1;
        this.dv = null;
        this.c1 = 0;
        this.c2 = 0;
        this.c0 = 5;
        this.cw = false;
        this.dt = null;
        this.bo = c;
        this.bu = b;
        this.aj = (d) => true;
        this.z = false;
        DOMEventProxy.c5++;
        this.c6 = DOMEventProxy.c5;
        this.c7 = ".DOMProxy" + this.c6.toString();
        this.ba = 0;
        this.bv = a;
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
        BaseDOMEventProxy.b3 = this.b2();
        BaseDOMEventProxy.b0 = this.b1();
        this.an(this.bv, "");
        this.ai = (f) => true;
    }
    c8(a, b, c) {
    }
    an(a, b) {
        let c = a;
        let d = this.c7 + b;
        if (!this.bu.supportsDOMEvents()) {
            return;
        }
        let e = new List$1(Delegate_$type, 0);
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
        let source_ = this.bv.getNativeElement();
        if (!this.ab) {
            BaseDOMEventProxy.ck(source_);
        }
        if (BaseDOMEventProxy.bp) {
            let f = this.bv.getNativeElement();
            if ((window.MSGesture !== undefined)) {
                let g = (new MSGesture());
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
    }
    dh(e_) {
        let a = this.bj(e_);
        if (a) {
            this.bz = this.bz - 1;
            if (this.bz < 0) {
                this.bz = 0;
            }
        }
        if (this.bz < 2 && this.cx && a) {
            this.cx = false;
            let b = (e_.originalEvent.scale);
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
    }
    dc(e_) {
        let a = this.bj(e_);
        if (a) {
            this.bz--;
            if (this.bz < 0) {
                this.bz = 0;
            }
        }
        if (this.bz < 2 && this.cx && a) {
            this.cx = false;
            let b = (e_.originalEvent.scale);
            this.ax(this.ct, b);
        }
    }
    dd(e_) {
        let a = this.bj(e_);
        if (a) {
            this.bz--;
            if (this.bz < 0) {
                this.bz = 0;
            }
        }
        if (this.bz < 2 && this.cx && a) {
            this.cx = false;
            let b = (e_.originalEvent.scale);
            this.ax(this.ct, b);
        }
    }
    de(e_) {
        let a = this.bj(e_);
        if (this.c3 != null && a) {
            this.bz++;
            this.c3.addPointer((e_.originalEvent.pointerId));
        }
        let eventSource_ = this.bv.getNativeElement();
        if (BaseDOMEventProxy.bm) {
            eventSource_.setPointerCapture(e_.originalEvent.pointerId);
        }
        else {
            eventSource_.msSetPointerCapture(e_.originalEvent.pointerId);
        }
        if (this.bz > 1 && !this.cx && a) {
            this.cx = true;
            this.cp(e_);
            let b = (e_.originalEvent.scale);
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
    }
    df(e_) {
        let a = this.bj(e_);
        if (this.cx) {
            return;
        }
        if (a) {
            this.dj(e_);
        }
        else {
            this.ca(e_);
        }
    }
    dg(e_) {
        let a = this.bj(e_);
        if (this.cx) {
            return;
        }
        if (a) {
        }
        else {
            this.b9(e_);
        }
    }
    db(e_) {
        this.bk = true;
        this.cn(e_);
        this.cp(e_);
        this.dm();
        if (this.aa(this.cu, true, false)) {
            this.cl(e_);
            if (BaseDOMEventProxy.bp && this.bz < 2) {
                return;
            }
            let a = (e_.originalEvent.scale);
            this.a5(this.ct, a);
        }
    }
    c9(e_) {
        this.bk = true;
        this.cn(e_);
        this.cp(e_);
        if (this.aa(this.cu, true, false)) {
            this.cl(e_);
            if (BaseDOMEventProxy.bp && this.bz < 2) {
                return;
            }
            let a = (e_.originalEvent.scale);
            this.a4(this.ct, a);
        }
    }
    da(e_) {
        this.cl(e_);
        let a = (e_.originalEvent.scale);
        this.bk = false;
        this.cn(e_);
        this.cp(e_);
        if (!BaseDOMEventProxy.bp || this.cx) {
            this.ax(this.ct, a);
        }
    }
    dk(e_) {
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
    }
    dq() {
        if (this.c4 == -1) {
            this.c1 = this.cu.x;
            this.c2 = this.cu.y;
            this.c4 = this.bu.setTimeout(runOn(this, this.dn), 1500);
        }
    }
    dm() {
        if (Math.abs(this.c1 - this.cu.x) > this.c0 || Math.abs(this.c2 - this.cu.y) > this.c0) {
            this.dr();
        }
    }
    dr() {
        if (this.c4 != -1) {
            window.clearTimeout(this.c4);
            this.c4 = -1;
        }
    }
    dn() {
        this.c4 = -1;
        if (this.bn) {
            this.bn = false;
            this.b4();
        }
        this.ay(this.ct);
    }
    dj(a) {
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
    }
    cy() {
        let a = { $type: Point_$type, x: this.du.x - this.ct.x, y: this.du.y - this.ct.y };
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
    }
    di(a) {
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
    }
    dp(a) {
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
    }
    ds() {
        this.dv = null;
    }
    dl(a) {
        if (this.cz.containsKey(a)) {
            let b = this.cz.item(a);
            this.cz.removeItem(a);
            for (let c = 0; c < b.count; c++) {
                b._inner[c]();
            }
            b.clear();
        }
    }
    a9(a, b) {
        let c = a;
        let d = this.c7 + b;
        this.dl(d);
    }
    ao() {
        if (this.bv == null) {
            return;
        }
        this.dl(this.c7);
        this.bv = null;
    }
}
DOMEventProxy.$t = markType(DOMEventProxy, 'DOMEventProxy', BaseDOMEventProxy.$);
DOMEventProxy.c5 = 0;
//# sourceMappingURL=BaseDOMEventProxy_combined.js.map