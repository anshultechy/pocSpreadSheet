/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, runOn, markType } from "./type";
import { List$1 } from "./List$1";
import { ISchedulableRender_$type } from "./ISchedulableRender";
/**
 * @hidden
 */
export class CanvasRenderScheduler extends Base {
    constructor() {
        super();
        this.b = true;
        this.f = null;
        this.e = null;
        this.a = false;
        this.h = -1;
        this.g = null;
        this.c = false;
        this.f = new List$1(ISchedulableRender_$type, 0);
        this.e = new List$1(CanvasRenderScheduler.$, 0);
    }
    l(a) {
        this.b = true;
        this.f.add(a);
    }
    r(a) {
        this.b = true;
        this.f.remove(a);
    }
    p() {
        this.b = true;
        this.n();
    }
    get d() {
        return this.a;
    }
    j(a) {
        let b = this.g;
        this.g = a;
        if (this.a && this.g != null && b == null) {
            this.g.setTimeout(runOn(this, this.k), 0);
        }
    }
    n() {
        if (!this.a) {
            this.a = true;
            if (this.g != null) {
                this.g.setTimeout(runOn(this, this.k), 0);
            }
            else {
                window.setTimeout(runOn(this, this.k), 0);
            }
        }
    }
    o(a, b) {
        this.n();
    }
    i() {
        if (this.h != -1) {
            window.clearTimeout(this.h);
            this.h = -1;
        }
        if (this.a) {
            this.k();
        }
    }
    k() {
        this.h = -1;
        if (this.a) {
            this.a = false;
            if (this.e.count > 0) {
                for (let a = 0; a < this.e.count; a++) {
                    this.e._inner[a].i();
                }
            }
            if (this.b) {
                this.q();
            }
            this.m();
        }
    }
    m() {
        if (this.c) {
            return;
        }
        let a = true;
        for (let b = 0; b < this.f.count; b++) {
            let c = this.f._inner[b];
            c.preRender();
        }
        for (let d = 0; d < this.f.count; d++) {
            let e = this.f._inner[d];
            e.undirty(a);
            a = false;
        }
        for (let f = 0; f < this.f.count; f++) {
            let g = this.f._inner[f];
            g.postRender();
        }
    }
    q() {
        this.f.aa((a, b) => {
            let c = a;
            let d = b;
            if (c.index < d.index) {
                return -1;
            }
            if (c.index > d.index) {
                return 1;
            }
            return 0;
        });
        this.b = false;
    }
}
CanvasRenderScheduler.$t = markType(CanvasRenderScheduler, 'CanvasRenderScheduler');
//# sourceMappingURL=CanvasRenderScheduler.js.map