/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, runOn, markType } from "../../igniteui-angular-core/ES2015/type";
/**
 * @hidden
 */
export class TimedOperation extends Base {
    constructor(a, b) {
        super();
        this.b = 0;
        this.a = null;
        this.a = a;
        this.b = window.setTimeout(runOn(this, this.d), b);
    }
    c() {
        if (this.a != null) {
            window.clearTimeout(this.b);
        }
        this.a = null;
    }
    d() {
        if (this.a != null) {
            let a = this.a;
            this.a = null;
            a();
        }
    }
}
TimedOperation.$t = markType(TimedOperation, 'TimedOperation');
//# sourceMappingURL=TimedOperation.js.map