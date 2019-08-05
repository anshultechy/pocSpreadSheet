/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, fromEnum, markType } from "../../igniteui-angular-core/ES2015/type";
import { ISupportPositioning_$type } from "./ISupportPositioning";
import { WeakList$1 } from "./WeakList$1";
import { List$1 } from "../../igniteui-angular-core/ES2015/List$1";
import { Dictionary$2 } from "../../igniteui-angular-core/ES2015/Dictionary$2";
import { PositionOrderHelper_EmptySortPosition$1 } from "./PositionOrderHelper_EmptySortPosition$1";
import { PositionOrderHelper_DefaultMeasureComparer$1 } from "./PositionOrderHelper_DefaultMeasureComparer$1";
import { PositionSorter } from "./PositionSorter";
import { CoreUtilities } from "./CoreUtilities";
/**
 * @hidden
 */
export class PositionOrderHelper$1 extends Base {
    constructor($tChild, a, b) {
        super();
        this.$tChild = null;
        this.a = null;
        this.b = null;
        this.d = null;
        this.e = null;
        this.$tChild = $tChild;
        this.$type = this.$type.specialize(this.$tChild);
        this.d = a;
        this.e = b;
        this.a = new WeakList$1(this.$tChild);
        this.b = new WeakList$1(this.$tChild);
    }
    f() {
        this.a.clear();
        this.b.clear();
        let a = new List$1(ISupportPositioning_$type, 0);
        let b = new List$1(ISupportPositioning_$type, 0);
        let c = new Dictionary$2(ISupportPositioning_$type, this.$tChild, 0);
        for (let d of fromEnum(this.d)) {
            this.a._add(d);
            let e = this.e(d) || new PositionOrderHelper_EmptySortPosition$1(this.$tChild);
            a.add(e);
            b.add(e);
            c.item(e, d);
        }
        let f;
        let g = PositionSorter.n(a, f, new PositionOrderHelper_DefaultMeasureComparer$1(this.$tChild, b));
        f = g.p1;
        if (!f) {
            a = b;
        }
        for (let h of fromEnum(a)) {
            this.b._add(c.item(h));
        }
    }
    c() {
        if (!CoreUtilities.d(this.$tChild, this.a, this.d)) {
            this.f();
        }
        return this.b;
    }
}
PositionOrderHelper$1.$t = markType(PositionOrderHelper$1, 'PositionOrderHelper$1');
//# sourceMappingURL=PositionOrderHelper$1.js.map