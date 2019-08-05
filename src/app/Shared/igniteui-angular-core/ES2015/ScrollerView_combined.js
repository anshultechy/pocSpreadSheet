/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, runOn, delegateCombine, markType, INotifyPropertyChanged_$type, PropertyChangedEventArgs, Point_$type } from "./type";
import { CanvasGestureDOMEventProxy } from "./CanvasGestureDOMEventProxy";
import { Brush } from "./Brush";
import { Rect } from "./Rect";
import { truncate, isNaN_ } from "./number";
import { ScrollerScrollingEventArgs } from "./ScrollerScrollingEventArgs";
/**
 * @hidden
 */
export class ScrollerView extends Base {
    constructor(a) {
        super();
        this.b = null;
        this.x = null;
        this.ab = null;
        this.w = null;
        this.a = null;
        this.aa = null;
        this.y = null;
        this.z = null;
        this.ac = null;
        this.d = false;
        this.c = null;
        this.h = false;
        this.g = false;
        this.s = 0;
        this.p = 0;
        this.t = -1;
        this.q = -1;
        this.f = false;
        this.e = false;
        this.r = 0;
        this.o = 0;
        this.b = a;
    }
    ay() {
        return ((() => {
            let $ret = new Brush();
            $ret.fill = "#666666";
            return $ret;
        })());
    }
    ar(a) {
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
        let b = Math.round(this.x.rootWrapper.width());
        let c = Math.round(this.x.rootWrapper.height());
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
        let d = this.a;
        d.onMouseWheel = delegateCombine(d.onMouseWheel, runOn(this, this.k));
        let e = this.a;
        e.onDragStarted = delegateCombine(e.onDragStarted, runOn(this, this.aj));
        let f = this.a;
        f.onDragDelta = delegateCombine(f.onDragDelta, runOn(this, this.ai));
        let g = this.a;
        g.onDragCompleted = delegateCombine(g.onDragCompleted, runOn(this, this.ah));
        let h = this.a;
        h.onFlingStarted = delegateCombine(h.onFlingStarted, runOn(this, this.i));
        let i = this.a;
        i.onContactStarted = delegateCombine(i.onContactStarted, runOn(this, this.ag));
        let j = this.a;
        j.onContactMoved = delegateCombine(j.onContactMoved, runOn(this, this.af));
        let k = this.a;
        k.onContactCompleted = delegateCombine(k.onContactCompleted, runOn(this, this.ae));
        this.a.z = true;
        this.a.ak = runOn(this, this.n);
        let l = this.a;
        l.onKeyDown = delegateCombine(l.onKeyDown, runOn(this, this.j));
        this.a.al = (m) => {
            let e_ = m.originalEvent;
            let n = (e_.type);
            if (n == "pointerdown" && !this.a.bj(m)) {
                return false;
            }
            return true;
        };
        this.b.b4(b, c);
    }
    j(a) {
        return this.b.q(a, (this.a.ba & 4) != 0, (this.a.ba & 2) != 0);
    }
    n(a, b, c) {
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
    }
    ae(a, b) {
        this.e = false;
        this.f = false;
    }
    af(a, b) {
        if (this.f) {
            let c = a.y - this.r;
            this.r = a.y;
            this.b.b3(c);
        }
        else if (this.e) {
            let d = a.x - this.o;
            this.o = a.x;
            this.b.b1(d);
        }
    }
    ag(a, b) {
        this.d = false;
        this.ad();
        let c = this.m(a, b);
        let d = this.l(a, b);
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
    }
    l(a, b) {
        if (!this.g) {
            return false;
        }
        if (a.y >= this.b.viewportHeight - this.b.scrollbarSpan && a.y <= this.b.viewportHeight && a.x >= this.q - this.p / 2 && a.x <= this.q + this.p / 2) {
            return true;
        }
        return false;
    }
    m(a, b) {
        if (!this.h) {
            return false;
        }
        if (a.x >= this.b.viewportWidth - this.b.scrollbarSpan && a.x <= this.b.viewportWidth && a.y >= this.t - this.s / 2 && a.y <= this.t + this.s / 2) {
            return true;
        }
        return false;
    }
    i(a, b, c) {
        this.d = true;
        return true;
    }
    ap(a) {
        this.a.bd = new Rect(0, 0, 0, this.b.viewportWidth, this.b.viewportHeight);
    }
    aq(a) {
        this.a.bd = new Rect(0, 0, 0, this.b.viewportWidth, this.b.viewportHeight);
    }
    an(a) {
        if (this.y != null) {
            this.y.setStyleProperty("height", a + "px");
        }
    }
    ao(a) {
        if (this.y != null) {
            this.y.setStyleProperty("width", a + "px");
        }
    }
    ad() {
    }
    ah(a) {
        if (this.e || this.f) {
            return;
        }
        this.d = false;
        this.b.by(a);
    }
    ai(a) {
        if (this.e || this.f) {
            return;
        }
        this.b.bz(a);
    }
    aw(a) {
        this.w.scrollTop = truncate(a);
    }
    aj(a) {
        if (this.e || this.f) {
            return;
        }
        this.d = false;
        this.b.b0(a);
    }
    u() {
        return this.w.scrollLeft;
    }
    v() {
        return this.w.scrollTop;
    }
    k(a, b) {
        this.d = false;
        this.ad();
        return this.b.s(a, b);
    }
    av(a) {
        this.w.scrollLeft = truncate(a);
    }
    as(a) {
        this.y = a;
        this.ab.append(this.y);
    }
    at(a) {
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
            this.c(() => a());
        }
    }
    am() {
        if (this.h) {
            this.h = false;
            this.ac.setStyleProperty("display", "none");
        }
    }
    al() {
        if (this.g) {
            this.g = false;
            this.z.setStyleProperty("display", "none");
        }
    }
    ax(a, b) {
        let c = false;
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
    }
    au(a, b) {
        let c = false;
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
    }
    ak() {
        this.x.rootWrapper.focus();
    }
}
ScrollerView.$t = markType(ScrollerView, 'ScrollerView');
/**
 * @hidden
 */
export class Scroller extends Base {
    constructor() {
        super();
        this.aq = 49;
        this._keyboardListener = null;
        this.ai = NaN;
        this.ad = 49;
        this.ab = NaN;
        this.ap = 48;
        this.ah = NaN;
        this.ac = 48;
        this.aa = NaN;
        this.ag = 0;
        this.aj = 20;
        this.am = 8;
        this.ar = 0;
        this.cf = null;
        this.k = false;
        this.af = 0;
        this.at = 0;
        this.as = 0;
        this.ao = 0;
        this.an = 0;
        this.c = null;
        this.i = true;
        this.l = false;
        this.ae = 0;
        this.z = 0;
        this.h = false;
        this.f = false;
        this.g = false;
        this.ch = null;
        this.e = false;
        this.propertyChanged = null;
        this.onScrolling = null;
        this.ak = 0;
        this.al = 0;
        this.j = false;
        this.cf = this.view.ay();
    }
    get smallVerticalChange() {
        return this.aq;
    }
    set smallVerticalChange(a) {
        let b = this.aq;
        this.aq = a;
        if (b != this.aq) {
            this.b2("SmallVerticalChange", b, this.aq);
        }
    }
    get keyboardListener() {
        return this._keyboardListener;
    }
    set keyboardListener(a) {
        this._keyboardListener = a;
    }
    get largeVerticalChange() {
        return this.ai;
    }
    set largeVerticalChange(a) {
        let b = this.ai;
        this.ai = a;
        if (b != this.ai) {
            this.b2("LargeVerticalChange", b, this.ai);
        }
    }
    get ay() {
        return this.ad;
    }
    set ay(a) {
        let b = this.ad;
        this.ad = a;
        if (b != this.ad) {
            this.b2("ActualSmallVerticalChange", b, this.ad);
        }
    }
    get aw() {
        return this.ab;
    }
    set aw(a) {
        let b = this.ab;
        this.ab = a;
        if (b != this.ab) {
            this.b2("ActualLargeVerticalChange", b, this.ab);
        }
    }
    get smallHorizontalChange() {
        return this.ap;
    }
    set smallHorizontalChange(a) {
        let b = this.ap;
        this.ap = a;
        if (b != this.ap) {
            this.b2("SmallHorizontalChange", b, this.ap);
        }
    }
    get largeHorizontalChange() {
        return this.ah;
    }
    set largeHorizontalChange(a) {
        let b = this.ah;
        this.ah = a;
        if (b != this.ah) {
            this.b2("LargeHorizontalChange", b, this.ah);
        }
    }
    get ax() {
        return this.ac;
    }
    set ax(a) {
        let b = this.ac;
        this.ac = a;
        if (b != this.ac) {
            this.b2("ActualSmallHorizontalChange", b, this.ac);
        }
    }
    get av() {
        return this.aa;
    }
    set av(a) {
        let b = this.aa;
        this.aa = a;
        if (b != this.aa) {
            this.b2("ActualLargeHorizontalChange", b, this.aa);
        }
    }
    get contentWidth() {
        return this.ag;
    }
    set contentWidth(a) {
        let b = this.ag;
        this.ag = a;
        if (b != this.ag) {
            this.b2("ContentWidth", b, this.ag);
        }
    }
    get minScrollbarSize() {
        return this.aj;
    }
    set minScrollbarSize(a) {
        let b = this.aj;
        this.aj = a;
        if (b != this.aj) {
            this.b2("MinScrollbarSize", b, this.aj);
        }
    }
    get scrollbarSpan() {
        return this.am;
    }
    set scrollbarSpan(a) {
        let b = this.am;
        this.am = a;
        if (b != this.am) {
            this.b2("ScrollbarSpan", b, this.am);
        }
    }
    q(a, b, c) {
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
    }
    w(a, b) {
        if (this.keyboardListener != null) {
            if (this.keyboardListener.onTab(a, b)) {
                return true;
            }
        }
        return false;
    }
    o(a, b) {
        if (this.keyboardListener != null) {
            if (this.keyboardListener.onEnd(a, b)) {
                return true;
            }
        }
        return false;
    }
    p(a, b) {
        if (this.keyboardListener != null) {
            if (this.keyboardListener.onHome(a, b)) {
                return true;
            }
        }
        return false;
    }
    v(a, b) {
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
    }
    r(a, b) {
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
    }
    x(a, b) {
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
    }
    n(a, b) {
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
    }
    u(a, b) {
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
    }
    t(a, b) {
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
    }
    get verticalTrackStartInset() {
        return this.ar;
    }
    set verticalTrackStartInset(a) {
        let b = this.ar;
        this.ar = a;
        if (b != this.ar) {
            this.b2("VerticalTrackStartInset", b, this.ar);
        }
    }
    get scrollbarBrush() {
        return this.cf;
    }
    set scrollbarBrush(a) {
        let b = this.cf;
        this.cf = a;
        if (b != this.cf) {
            this.b2("ScrollbarBrush", b, this.cf);
        }
    }
    b2(a, b, c) {
        if (this.propertyChanged != null) {
            this.propertyChanged(this, new PropertyChangedEventArgs(a));
        }
        this.b5(a, b, c);
    }
    get y() {
        return this.k;
    }
    set y(a) {
        this.k = a;
        if (!this.k) {
            this.view.aw(this.scrollTop);
            this.view.av(this.scrollLeft);
        }
    }
    b5(a, b, c) {
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
    }
    get contentHeight() {
        return this.af;
    }
    set contentHeight(a) {
        let b = this.af;
        this.af = a;
        if (b != this.af) {
            this.b2("ContentHeight", b, this.af);
        }
    }
    b3(a) {
        let b = Math.max(this.minScrollbarSize, this.actualVerticalScrollbarHeight);
        let c = this.verticalTrackStartInset + (b / 2);
        let d = this.viewportHeight - (b / 2);
        let e = a / (d - c);
        let f = e * (this.contentHeight - this.viewportHeight);
        this.b9(0, f);
    }
    b1(a) {
        let b = Math.max(this.minScrollbarSize, this.actualHorizontalScrollbarWidth);
        let c = 0 + (b / 2);
        let d = this.viewportWidth - (b / 2);
        let e = a / (d - c);
        let f = e * (this.contentWidth - this.viewportWidth);
        this.b9(f, 0);
    }
    b4(a, b) {
        this.at = a;
        this.as = b;
    }
    get viewportWidth() {
        return this.at;
    }
    set viewportWidth(a) {
        let b = this.at;
        this.at = a;
        if (b != this.at) {
            this.b2("ViewportWidth", b, this.at);
        }
    }
    get viewportHeight() {
        return this.as;
    }
    set viewportHeight(a) {
        let b = this.as;
        this.as = a;
        if (b != this.as) {
            this.b2("ViewportHeight", b, this.as);
        }
    }
    get scrollTop() {
        return this.ao;
    }
    set scrollTop(a) {
        let b = this.ao;
        this.ao = a;
        if (b != this.ao) {
            this.b2("ScrollTop", b, this.ao);
        }
    }
    get scrollLeft() {
        return this.an;
    }
    set scrollLeft(a) {
        let b = this.an;
        this.an = a;
        if (b != this.an) {
            this.b2("ScrollLeft", b, this.an);
        }
    }
    get view() {
        if (this.c == null) {
            this.c = new ScrollerView(this);
        }
        return this.c;
    }
    provideContainer(a) {
        this.view.ar(a);
        this.ao = this.view.v();
        this.an = this.view.u();
        this.cc();
        this.ce();
    }
    provideContent(a) {
        this.view.as(a);
    }
    s(a, b) {
        this.g = false;
        this.f = false;
        this.h = false;
        this.view.ad();
        if (this.keyboardListener != null) {
            this.keyboardListener.onWheel();
        }
        this.b9(0, b);
        return true;
    }
    get lockScrollDirection() {
        return this.i;
    }
    set lockScrollDirection(a) {
        this.i = true;
    }
    get actualVerticalScrollbarHeight() {
        return this.ae;
    }
    set actualVerticalScrollbarHeight(a) {
        let b = this.ae;
        this.ae = a;
        if (b != this.ae) {
            this.b2("ActualVerticalScrollbarHeight", b, this.ae);
        }
    }
    get actualHorizontalScrollbarWidth() {
        return this.z;
    }
    set actualHorizontalScrollbarWidth(a) {
        let b = this.z;
        this.z = a;
        if (b != this.z) {
            this.b2("ActualHorizontalScrollbarWidth", b, this.z);
        }
    }
    focus() {
        this.view.ak();
    }
    b0(a) {
        this.view.ak();
        this.h = false;
        this.f = false;
        this.g = false;
        this.e = true;
        this.ch = { $type: Point_$type, x: a.x, y: a.y };
    }
    bz(a) {
        if (this.e) {
            let b = a.y - this.ch.y;
            let c = a.x - this.ch.x;
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
    }
    scrollTo(a, b) {
        this.ak = a - this.scrollLeft;
        this.al = b - this.scrollTop;
        this.b8();
    }
    b9(a, b) {
        this.ak += a;
        this.al += b;
        this.b8();
    }
    b8() {
        if (this.j) {
            return;
        }
        this.j = true;
        this.view.at(runOn(this, this.cb));
    }
    cb() {
        this.j = false;
        let a = this.ak;
        let b = this.al;
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
        let c = Math.round(this.scrollTop + b);
        let d = Math.round(this.scrollLeft + a);
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
                    this.onScrolling(this, ((() => {
                        let $ret = new ScrollerScrollingEventArgs();
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
    }
    ce() {
        this.cd(this.contentHeight, this.viewportHeight, this.scrollTop, true);
    }
    cc() {
        this.cd(this.contentWidth, this.viewportWidth, this.scrollLeft, false);
    }
    cd(a, b, c, d) {
        let e = Math.round((b / a) * b);
        let f = d ? this.verticalTrackStartInset : 0;
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
        let g = f + (e / 2);
        let h = b - (e / 2);
        let i = c / (a - b);
        let j = Math.round(g + (h - g) * i);
        if (d) {
            this.actualVerticalScrollbarHeight = e;
            this.view.ax(j, e);
        }
        else {
            this.actualHorizontalScrollbarWidth = e;
            this.view.au(j, e);
        }
    }
    by(a) {
        this.g = false;
        this.f = false;
        this.h = false;
        this.e = false;
    }
}
Scroller.$t = markType(Scroller, 'Scroller', Base.$, [INotifyPropertyChanged_$type]);
//# sourceMappingURL=ScrollerView_combined.js.map