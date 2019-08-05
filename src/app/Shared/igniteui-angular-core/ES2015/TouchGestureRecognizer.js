/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, Point_$type, runOn, markType } from "./type";
import { TouchVelocityTracker } from "./TouchVelocityTracker";
import { TouchPointInfo } from "./TouchPointInfo";
import { TouchGestureEventArgs } from "./TouchGestureEventArgs";
import { isNaN_ } from "./number";
/**
 * @hidden
 */
export class TouchGestureRecognizer extends Base {
    constructor(a) {
        super();
        this.n = 0;
        this.p = new TouchVelocityTracker();
        this.t = 0;
        this.u = 0;
        this.aa = 0;
        this.ab = 0;
        this.v = 0;
        this.w = 0;
        this.am = NaN;
        this.an = NaN;
        this.al = NaN;
        this.aj = 1;
        this.ak = 1;
        this.y = 1;
        this.x = 10;
        this.ay = -1;
        this.ao = 0;
        this.ap = 0;
        this.af = 1;
        this.ag = 1;
        this.ac = 1;
        this.ad = NaN;
        this.ae = NaN;
        this.o = null;
        this.au = 800;
        this.aw = -1;
        this.b = null;
        this.q = false;
        this.ax = -1;
        this.holdStarting = null;
        this.holdEnding = null;
        this.panStarting = null;
        this.manipulationStarting = null;
        this.manipulationChanging = null;
        this.manipulationEnding = null;
        this.panEnding = null;
        this.zoomStarting = null;
        this.zoomEnding = null;
        this.flingStarting = null;
        this.doubleTapped = null;
        this.ah = 0;
        this.ai = 0;
        this.z = 0;
        this.aq = 0;
        this.ar = 0;
        this.b = a;
    }
    get av() {
        return this.x;
    }
    set av(a) {
        this.x = a;
    }
    get as() {
        return this.t;
    }
    get at() {
        return this.u;
    }
    bf() {
        return { $type: Point_$type, x: Math.abs(this.v - this.aa), y: Math.abs(this.w - this.ab) };
    }
    bd(a) {
        let b = false;
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
    }
    a6(a) {
        let b = a.count;
        let c = this.n;
        let d = false;
        let e = false;
        let f = false;
        let g = false;
        let h = false;
        let i = false;
        let j = false;
        let k = false;
        let l = 0;
        let m = 0;
        let n = 0;
        let o = this.n;
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
        let p = 0;
        let q = 0;
        for (let r = 0; r < b; r++) {
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
            let s = a._inner[0].a - a._inner[1].a;
            let t = a._inner[0].b - a._inner[1].b;
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
            let u = a._inner[0].a - a._inner[1].a;
            let v = a._inner[0].b - a._inner[1].b;
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
    }
    r(a) {
        let b = this.a0();
        if ((b - this.ay) < 500) {
            if (Math.abs(a.a - this.ao) < 50 && Math.abs(a.b - this.ap) < 50) {
                return true;
            }
        }
        this.ao = a.a;
        this.ap = a.b;
        this.ay = b;
        return false;
    }
    a9() {
        this.ax = this.a0();
        if (!this.q) {
            this.q = true;
            this.b.executeDelayed(runOn(this, this.a2), 1000);
        }
    }
    a2() {
        if (!this.q) {
            return;
        }
        let a = this.a0();
        if (a - this.ax >= 1000) {
            this.a8();
        }
        else {
            this.b.executeDelayed(runOn(this, this.a2), (1000 - (a - this.ax)));
        }
    }
    bc() {
        this.q = false;
    }
    a5() {
        this.p.f();
        if (this.zoomEnding != null) {
            this.zoomEnding(this, this.c());
        }
    }
    a8() {
        if (this.holdStarting != null) {
            this.holdStarting(this, this.c());
        }
    }
    bb() {
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
    }
    a3() {
        if (this.holdEnding != null) {
            this.holdEnding(this, this.c());
        }
    }
    ba() {
        this.p.f();
        this.a1();
        this.ad = this.t;
        this.ae = this.u;
        if (this.panStarting != null) {
            this.panStarting(this, this.c());
        }
    }
    a1() {
        if (this.n == 5) {
            this.n = 0;
        }
    }
    be() {
        if (this.n != 5) {
            return;
        }
        if (this.o == null || this.aw == -1) {
            this.a1();
            return;
        }
        let a = this.a0();
        let b = a - this.aw;
        if (b < 16) {
            this.a7(runOn(this, this.be));
            return;
        }
        this.aw = a;
        let c = b / 1000;
        let d = this.au * c;
        let e = this.o;
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
    }
    s(a) {
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
    }
    a7(a) {
        this.b.enqueueAnimationAction(a);
    }
    a4() {
        let a = this.p.b(this.a0());
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
    }
    c() {
        let a = new TouchGestureEventArgs();
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
    }
    a0() {
        return this.b.getCurrentRelativeTime();
    }
}
TouchGestureRecognizer.$t = markType(TouchGestureRecognizer, 'TouchGestureRecognizer');
//# sourceMappingURL=TouchGestureRecognizer.js.map