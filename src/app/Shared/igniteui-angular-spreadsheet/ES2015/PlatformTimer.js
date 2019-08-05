/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, EventArgs, runOn, markType } from "../../igniteui-angular-core/ES2015/type";
/**
 * @hidden
 */
export class PlatformTimer extends Base {
    constructor() {
        super();
        this.a = false;
        this.d = 0;
        this.e = 0;
        this.tick = null;
        this.g = 100;
    }
    get g() {
        return this.d;
    }
    set g(a) {
        this.d = a;
        if (this.e != 0 && this.a) {
            this.k();
        }
    }
    get b() {
        return this.a;
    }
    i() {
        let a = this.tick;
        if (a != null) {
            a(this, EventArgs.empty);
        }
    }
    j() {
        let a = this.e;
        this.e = 0;
        this.i();
        if (this.a) {
            this.k();
        }
    }
    k() {
        this.l();
        if (this.a) {
            return;
        }
        this.a = true;
        this.e = window.setTimeout(runOn(this, this.j), this.d);
    }
    l() {
        this.a = false;
        if (this.e != 0) {
            let a = this.e;
            this.e = 0;
            window.clearTimeout(a);
        }
    }
}
PlatformTimer.$t = markType(PlatformTimer, 'PlatformTimer');
//# sourceMappingURL=PlatformTimer.js.map