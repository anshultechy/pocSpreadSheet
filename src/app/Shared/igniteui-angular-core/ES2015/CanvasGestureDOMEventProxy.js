/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
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
export class CanvasGestureDOMEventProxy extends BaseDOMEventProxy {
    constructor(a, b, c) {
        super();
        this.c9 = 0;
        this.da = "";
        this.cw = null;
        this.c7 = null;
        this.c2 = new Dictionary$2(String_$type, List$1.$.specialize(Delegate_$type), 0);
        this.dy = null;
        this.cx = false;
        this.c3 = new List$1(Number_$type, 0);
        this.c4 = new List$1(Point_$type, 0);
        this.cz = false;
        this.c5 = new List$1(TouchPointInfo.$, 0);
        this.bo = c;
        this.bu = b;
        this.cw = new TouchGestureRecognizer(new DOMExecutionContext(b));
        let d = this.cw;
        d.holdEnding = delegateCombine(d.holdEnding, runOn(this, this.dc));
        let e = this.cw;
        e.holdStarting = delegateCombine(e.holdStarting, runOn(this, this.dd));
        let f = this.cw;
        f.zoomStarting = delegateCombine(f.zoomStarting, runOn(this, this.dk));
        let g = this.cw;
        g.zoomEnding = delegateCombine(g.zoomEnding, runOn(this, this.dj));
        let h = this.cw;
        h.panStarting = delegateCombine(h.panStarting, runOn(this, this.di));
        let i = this.cw;
        i.panEnding = delegateCombine(i.panEnding, runOn(this, this.dh));
        let j = this.cw;
        j.manipulationStarting = delegateCombine(j.manipulationStarting, runOn(this, this.dg));
        let k = this.cw;
        k.manipulationChanging = delegateCombine(k.manipulationChanging, runOn(this, this.de));
        let l = this.cw;
        l.manipulationEnding = delegateCombine(l.manipulationEnding, runOn(this, this.df));
        let m = this.cw;
        m.doubleTapped = delegateCombine(m.doubleTapped, runOn(this, this.db));
        let n = this.cw;
        n.flingStarting = delegateCombine(n.flingStarting, runOn(this, this.cy));
        this.aj = (o) => true;
        this.z = true;
        CanvasGestureDOMEventProxy.c8++;
        this.c9 = CanvasGestureDOMEventProxy.c8;
        this.da = ".DOMProxy" + this.c9.toString();
        this.ba = 0;
        this.bv = a;
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
            this.z = false;
        }
        BaseDOMEventProxy.b3 = this.b2();
        BaseDOMEventProxy.b0 = this.b1();
        this.an(this.bv, "");
        this.ai = (q) => true;
    }
    d() {
        let a = new CanvasGestureDOMEventProxy(this.bv, this.bu, this.bo);
        a.z = this.z;
        a.aj = this.aj;
        return a;
    }
    cy(a, b) {
        return this.ac({ $type: Point_$type, x: b.a, y: b.b }, b.h, b.i);
    }
    db(a, b) {
        this.at({ $type: Point_$type, x: b.a, y: b.b });
    }
    get_ah() {
        return true;
    }
    df(a, b) {
        if (this.cw.n == 0) {
            this.ax({ $type: Point_$type, x: b.a, y: b.b }, b.d);
            this.ci();
        }
    }
    de(a, b) {
        if (this.cw.n == 2) {
            this.a4({ $type: Point_$type, x: b.a, y: b.b }, b.d);
            this.a7({ $type: Point_$type, x: b.a, y: b.b }, b.d, b.e, b.c);
        }
        if (this.cw.n == 1 || this.cw.n == 5) {
            this.ar({ $type: Point_$type, x: b.a, y: b.b }, true);
            this.av({ $type: Point_$type, x: b.a, y: b.b });
        }
    }
    dg(a, b) {
    }
    dh(a, b) {
        this.cx = false;
        if (this.cw.n == 0) {
            this.aq({ $type: Point_$type, x: b.a, y: b.b }, true);
            this.au({ $type: Point_$type, x: b.a, y: b.b });
        }
    }
    di(a, b) {
        this.aw({ $type: Point_$type, x: b.a, y: b.b });
    }
    dj(a, b) {
        this.a6({ $type: Point_$type, x: b.a, y: b.b }, b.d, b.e, b.c);
    }
    dk(a, b) {
        this.a5({ $type: Point_$type, x: b.a, y: b.b }, 1);
        this.a8({ $type: Point_$type, x: b.a, y: b.b }, 1, 1, 1);
    }
    dd(a, b) {
        this.cx = true;
        this.ay({ $type: Point_$type, x: b.a, y: b.b });
    }
    dc(a, b) {
        if (this.cw.n == 0) {
            this.aq({ $type: Point_$type, x: b.a, y: b.b }, true);
        }
    }
    static c0() {
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
    }
    dl(a, b, c) {
    }
    an(a, b) {
        let c = a;
        if (!this.bu.supportsDOMEvents()) {
            return;
        }
        let d = this.da + b;
        let e = new List$1(Delegate_$type, 0);
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
            let source_ = this.bv.getNativeElement();
            BaseDOMEventProxy.ck(source_);
            let f = this.bv.getNativeElement();
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
    }
    ds(e_) {
        let a = this.bj(e_);
        let b = this.c3.indexOf((e_.originalEvent.pointerId));
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
    }
    dm(e_) {
        let a = this.bj(e_);
    }
    dn(e_) {
        let a = this.bj(e_);
        let b = this.c3.indexOf((e_.originalEvent.pointerId));
        if (b >= 0) {
            this.c3.removeAt(b);
            this.c4.removeAt(b);
            this.bz = this.c3.count;
        }
    }
    dp(e_) {
        let a = this.bj(e_);
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
            let eventSource_ = this.bv.getNativeElement();
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
    }
    dq(e_) {
        let a = this.bj(e_);
        BaseDOMEventProxy.cj(e_);
        this.cn(e_);
        this.cp(e_);
        let b = this.c3.indexOf((e_.originalEvent.pointerId));
        if (b >= 0) {
            this.c4._inner[b] = { $type: Point_$type, x: e_.pageX, y: e_.pageY };
        }
        if (this.cz && this.aa(this.cu, a, false)) {
            let eventSource_ = this.bv.getNativeElement();
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
    }
    dr(e_) {
        let a = this.bj(e_);
        if (a) {
        }
        else {
            this.b9(e_);
        }
    }
    dv(e_) {
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
    }
    c6(e_) {
        let a = BaseDOMEventProxy.cv(this.bv);
        let b = this.bd;
        this.c5.clear();
        if (BaseDOMEventProxy.bp) {
            let c = this.c3.count;
            for (let j_ = 0; j_ < c; j_++) {
                let d = this.c3._inner[j_];
                let e = this.c4._inner[j_];
                let f = e.x;
                let g = e.y;
                let h = new TouchPointInfo(1);
                h.a = (f - a.left) - b.left;
                h.b = (g - a.top) - b.top;
                this.c5.add(h);
            }
        }
        else {
            let i = (e_.originalEvent.targetTouches.length);
            for (let j_ = 0; j_ < i; j_++) {
                let j = (e_.originalEvent.targetTouches[j_].pageX);
                let k = (e_.originalEvent.targetTouches[j_].pageY);
                let l = new TouchPointInfo(1);
                l.a = (j - a.left) - b.left;
                l.b = (k - a.top) - b.top;
                this.c5.add(l);
            }
        }
        return this.c5;
    }
    du(a) {
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
    }
    c1() {
        let a = { $type: Point_$type, x: this.dy.x - this.ct.x, y: this.dy.y - this.ct.y };
        if (Math.abs(a.x) > Math.abs(a.y)) {
            a.y = 0;
        }
        if (Math.abs(a.y) > Math.abs(a.x)) {
            a.x = 0;
        }
        return this.aj(a);
    }
    dt(a) {
        this.bk = false;
        this.cn(a);
        this.cp(a);
        if (this.bn) {
            this.bn = false;
            this.b4();
        }
        let b = this.cw.n;
        let c = this.aa(this.cu, true, false) || b != 0;
        if (this.cw.n != 2 && this.cw.n != 5) {
            this.a2(this.cu, false, true);
            this.a3(this.cu);
        }
        let d = this.cw.n == 2;
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
    }
    dw(a) {
        if (this.c2.containsKey(a)) {
            let b = this.c2.item(a);
            this.c2.removeItem(a);
            for (let c = 0; c < b.count; c++) {
                b._inner[c]();
            }
            b.clear();
        }
    }
    a9(a, b) {
        let c = a;
        let d = this.da + b;
        this.dw(d);
    }
    ao() {
        if (this.bv == null) {
            return;
        }
        this.dw(this.da);
        this.bv = null;
    }
    static register() {
        TypeRegistrar.register("CanvasGestureDOMEventProxy", CanvasGestureDOMEventProxy.$);
    }
}
CanvasGestureDOMEventProxy.$t = markType(CanvasGestureDOMEventProxy, 'CanvasGestureDOMEventProxy', BaseDOMEventProxy.$);
CanvasGestureDOMEventProxy.c8 = 0;
//# sourceMappingURL=CanvasGestureDOMEventProxy.js.map