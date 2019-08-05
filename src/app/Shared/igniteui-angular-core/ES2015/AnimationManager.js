/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, runOn, fromEnum, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { AnimationState } from "./AnimationState";
import { List$1 } from "./List$1";
import { dateNow } from "./date";
/**
 * @hidden
 */
export class AnimationManager extends Base {
    constructor(a) {
        super();
        this.a = null;
        this.c = new Dictionary$2(String_$type, AnimationState.$, 0);
        this.b = false;
        this.e = -1;
        this.a = a;
    }
    d() {
        return dateNow();
    }
    h(a, b, c, d, e, f, g) {
        let h = new AnimationState();
        h.d = f;
        h.e = g;
        h.i = b;
        h.g = c;
        h.c = this.d();
        h.a = d;
        h.f = e;
        this.f(h);
    }
    g(a, b, c, d, e) {
        let f = new AnimationState();
        f.j = a;
        f.i = b;
        f.g = c;
        f.c = this.d();
        f.a = d;
        f.f = e;
        this.f(f);
    }
    f(a) {
        if (this.c.containsKey(a.j)) {
            this.i(a.j, 0);
        }
        this.c.addItem(a.j, a);
        this.j();
        this.a.requestFrame(this.e);
    }
    i(a, b) {
        if (!this.c.containsKey(a)) {
            return;
        }
        let c = this.c.item(a);
        let d = c.a;
        if (b == 2) {
            c.a(c.f(0), c);
        }
        if (b == 1) {
            c.a(c.f(1), c);
        }
        this.c.removeItem(a);
        this.j();
    }
    j() {
        if (this.c.count == 0) {
            this.m();
        }
        else {
            this.l();
        }
    }
    l() {
        if (this.b) {
            return;
        }
        this.b = true;
        this.e = this.a.setupTicking(runOn(this, this.n));
    }
    m() {
        if (this.b) {
            this.a.teardownTicking(this.e);
            this.e = -1;
        }
        this.b = false;
    }
    n() {
        let a = dateNow();
        let b = new List$1(String_$type, 0);
        for (let c of fromEnum(this.c.values)) {
            let d = false;
            let e = (a.getTime() - c.c.getTime());
            if (e >= c.g) {
                e = c.g;
                d = true;
            }
            if ((e - c.h < 16 && e != c.g)) {
                continue;
            }
            c.h = e;
            c.b = d;
            let f = (e / c.g);
            f = c.f(f);
            c.a(f, c);
            if (d) {
                b.add(c.j);
            }
        }
        for (let g of fromEnum(b)) {
            this.c.removeItem(g);
        }
        this.j();
        if (this.b) {
            this.a.requestFrame(this.e);
        }
    }
    k() {
        this.c.clear();
        this.m();
    }
}
AnimationManager.$t = markType(AnimationManager, 'AnimationManager');
//# sourceMappingURL=AnimationManager.js.map