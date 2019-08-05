/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Comparer$1 } from "../../igniteui-angular-core/ES2015/Comparer$1";
import { markType } from "../../igniteui-angular-core/ES2015/type";
/**
 * @hidden
 */
export class ComparisonComparer$1 extends Comparer$1 {
    constructor($t, a) {
        super($t);
        this.$t = null;
        this._c = null;
        this.$t = $t;
        this.$type = this.$type.specialize(this.$t);
        this._c = a;
    }
    compare(a, b) {
        return this._c(a, b);
    }
}
ComparisonComparer$1.$t = markType(ComparisonComparer$1, 'ComparisonComparer$1', Comparer$1.$.specialize(0));
//# sourceMappingURL=ComparisonComparer$1.js.map
