/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, getBoxIfEnum, typeCastObjTo$t, typeCast, markType } from "../../igniteui-angular-core/ES2015/type";
import { WeakReference } from "../../igniteui-angular-core/ES2015/WeakReference";
import { CoreUtilities } from "./CoreUtilities";
/**
 * @hidden
 */
export class WeakEventHandler$3 extends Base {
    constructor($tInstance, $tEventSource, $tEventArgs, a, b, c, d) {
        super();
        this.$tInstance = null;
        this.$tEventSource = null;
        this.$tEventArgs = null;
        this.h = null;
        this.g = null;
        this.d = null;
        this.c = null;
        this.$tInstance = $tInstance;
        this.$tEventSource = $tEventSource;
        this.$tEventArgs = $tEventArgs;
        this.$type = this.$type.specialize(this.$tInstance, this.$tEventSource, this.$tEventArgs);
        this.h = new WeakReference(a);
        this.g = new WeakReference(getBoxIfEnum(this.$tEventSource, b));
        this.d = c;
        this.c = d;
    }
    get a() {
        return typeCastObjTo$t(this.$tEventSource, CoreUtilities.p(this.g));
    }
    get b() {
        return typeCast(this.$tInstance, CoreUtilities.p(this.h));
    }
    f(a, b) {
        let c = typeCast(this.$tInstance, CoreUtilities.p(this.h));
        if (c != null) {
            if (this.d != null) {
                this.d(c, a, b);
            }
        }
        else {
            this.e();
        }
    }
    e() {
        let a = typeCastObjTo$t(this.$tEventSource, CoreUtilities.p(this.g));
        if (this.c != null && this.g.a) {
            this.c(this, a);
        }
        this.c = null;
    }
}
WeakEventHandler$3.$t = markType(WeakEventHandler$3, 'WeakEventHandler$3');
//# sourceMappingURL=WeakEventHandler$3.js.map