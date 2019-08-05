/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, runOn, fromEnum, markType } from "../../igniteui-angular-core/ES2015/type";
import { ReadOnlyCollection$1 } from "../../igniteui-angular-core/ES2015/ReadOnlyCollection$1";
import { ScrollBarInfoMediator } from "./ScrollBarInfoMediator";
import { DeferredOperation } from "./DeferredOperation";
import { List$1 } from "../../igniteui-angular-core/ES2015/List$1";
/**
 * @hidden
 */
export class ScrollBarVisibilityCoordinator extends Base {
    constructor() {
        super();
        this.a = null;
        this.c = null;
        this.d = null;
        this.a = new DeferredOperation(runOn(this, this.g));
        this.c = new List$1(ScrollBarInfoMediator.$, 0);
        this.d = new ReadOnlyCollection$1(ScrollBarInfoMediator.$, 1, this.c);
    }
    get e() {
        return this.d;
    }
    f(a) {
        this.c.add(a);
        a.h = runOn(this, this.i);
        this.a.m();
    }
    b(a) {
        return this.c.contains(a);
    }
    h(a) {
        if (this.c.remove(a)) {
            a.h = null;
        }
        if (this.c.count > 0) {
            this.a.m();
        }
    }
    j() {
        this.a.m();
    }
    i() {
        this.a.m();
    }
    g() {
        let a = false;
        for (let b of fromEnum(this.c)) {
            if (null == b.b) {
                continue;
            }
            if (b.d._h) {
                a = true;
                break;
            }
        }
        for (let c of fromEnum(this.c)) {
            let d = c.b;
            if (null != d) {
                d.setIsVisible(a);
            }
        }
    }
}
ScrollBarVisibilityCoordinator.$t = markType(ScrollBarVisibilityCoordinator, 'ScrollBarVisibilityCoordinator');
//# sourceMappingURL=ScrollBarVisibilityCoordinator.js.map