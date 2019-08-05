/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { ButtonVisualElement } from "./ButtonVisualElement";
import { runOn, delegateCombine, markType } from "../../igniteui-angular-core/ES2015/type";
import { PlatformTimer } from "./PlatformTimer";
/**
 * @hidden
 */
export class RepeatButtonVisualElement extends ButtonVisualElement {
    constructor(a, b) {
        super(a, b);
        this.cn = 250;
        this.cl = 50;
        this.ci = null;
        this.cm = 0;
        this.cj = 0;
        this.ck = 0;
    }
    ad(a) {
        if (a.a() == 1) {
            this.cm = 0;
            this.cu(a.h());
            if (a.d()) {
                this.cs();
            }
        }
        else {
            this.ct();
            a.f();
        }
        return true;
    }
    ag(a) {
        if (a.b()) {
            let b = a.h();
            let c = this.aa(b.x, b.y);
            if (!c) {
                this.ct();
            }
            else if (this.ci == null || !this.ci.b) {
                this.cs();
            }
            this.cu(b);
        }
        return super.ag(a);
    }
    ah(a) {
        this.ct();
        if (a.b()) {
            let b = a.h();
            a.f();
            this.cu(b);
            if (this.cm == 0) {
                let c = this.aa(b.x, b.y);
                if (c) {
                    this.ch();
                }
            }
        }
        return super.ah(a);
    }
    cr(a, b) {
        let c = this.cj;
        let d = this.ck;
        let e = this;
        while (e._parent != null) {
            c -= e.ax;
            d -= e.a2;
            e = e._parent;
        }
        if (this.aa(c, d)) {
            this.cm++;
            this.ch();
        }
        if (this.ci != null) {
            this.ci.g = this.cl;
        }
    }
    cs() {
        let a = this.ci == null || !this.ci.b;
        if (this.ci != null && !a) {
            this.ci.l();
        }
        else if (this.ci == null) {
            this.ci = new PlatformTimer();
            let b = this.ci;
            b.tick = delegateCombine(b.tick, runOn(this, this.cr));
        }
        this.ci.g = a ? this.cn : this.cl;
        this.ci.k();
    }
    ct() {
        if (this.ci != null) {
            this.ci.l();
        }
    }
    cu(a) {
        let b = a.x;
        let c = a.y;
        let d = this;
        while (d._parent != null) {
            b += d.ax;
            c += d.a2;
            d = d._parent;
        }
        this.cj = b;
        this.ck = c;
    }
}
RepeatButtonVisualElement.$t = markType(RepeatButtonVisualElement, 'RepeatButtonVisualElement', ButtonVisualElement.$);
//# sourceMappingURL=RepeatButtonVisualElement.js.map