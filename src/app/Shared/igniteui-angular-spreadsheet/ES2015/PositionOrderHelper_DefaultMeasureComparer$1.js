/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, markType } from "../../igniteui-angular-core/ES2015/type";
import { IComparer$1_$type } from "../../igniteui-angular-core/ES2015/IComparer$1";
import { ISupportPositioning_$type } from "./ISupportPositioning";
import { CoreUtilities } from "./CoreUtilities";
import { boolCompare } from "../../igniteui-angular-core/ES2015/bool";
/**
 * @hidden
 */
export class PositionOrderHelper_DefaultMeasureComparer$1 extends Base {
    constructor($tChild, a) {
        super();
        this.$tChild = null;
        this._a = null;
        this.$tChild = $tChild;
        this.$type = this.$type.specialize(this.$tChild);
        this._a = a;
    }
    compare(a, b) {
        if (a == b) {
            return 0;
        }
        let c = CoreUtilities.g(a.after) || CoreUtilities.g(a.before);
        let d = CoreUtilities.g(b.after) || CoreUtilities.g(b.before);
        if (c != d) {
            return boolCompare(d, c);
        }
        return Base.compareSimple(this._a.indexOf(a), this._a.indexOf(b));
    }
}
PositionOrderHelper_DefaultMeasureComparer$1.$t = markType(PositionOrderHelper_DefaultMeasureComparer$1, 'PositionOrderHelper_DefaultMeasureComparer$1', Base.$, [IComparer$1_$type.specialize(ISupportPositioning_$type)]);
//# sourceMappingURL=PositionOrderHelper_DefaultMeasureComparer$1.js.map