/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, markType } from "./type";
/**
 * @hidden
 */
export class Pair$2 extends Base {
    constructor($t1, $t2, a, b) {
        super();
        this.$t1 = null;
        this.$t2 = null;
        this.a = null;
        this.b = null;
        this.$t1 = $t1;
        this.$t2 = $t2;
        this.$type = this.$type.specialize(this.$t1, this.$t2);
        this.a = a;
        this.b = b;
    }
}
Pair$2.$t = markType(Pair$2, 'Pair$2');
//# sourceMappingURL=Pair$2.js.map