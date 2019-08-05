/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, typeCast, getBoxIfEnum, markType } from "./type";
/**
 * @hidden
 */
export class Tuple$3 extends Base {
    constructor($t1, $t2, $t3, a, b, c) {
        super();
        this.$t1 = null;
        this.$t2 = null;
        this.$t3 = null;
        this.c = null;
        this.d = null;
        this.e = null;
        this.$t1 = $t1;
        this.$t2 = $t2;
        this.$t3 = $t3;
        this.$type = this.$type.specialize(this.$t1, this.$t2, this.$t3);
        this.c = a;
        this.d = b;
        this.e = c;
    }
    equals(a) {
        let b = typeCast(Tuple$3.$.specialize(this.$t1, this.$t2, this.$t3), a);
        return b != null && Base.equalsStatic(getBoxIfEnum(this.$t1, this.c), getBoxIfEnum(this.$t1, b.c)) && Base.equalsStatic(getBoxIfEnum(this.$t2, this.d), getBoxIfEnum(this.$t2, b.d)) && Base.equalsStatic(getBoxIfEnum(this.$t3, this.e), getBoxIfEnum(this.$t3, b.e));
    }
    getHashCode() {
        let a = 0;
        if (getBoxIfEnum(this.$t1, this.c) != null) {
            a = Base.getHashCodeStatic(this.c);
        }
        if (getBoxIfEnum(this.$t2, this.d) != null) {
            a = a ^ Base.getHashCodeStatic(this.d) << 8;
        }
        if (getBoxIfEnum(this.$t3, this.e) != null) {
            a = a ^ Base.getHashCodeStatic(this.e) << 16;
        }
        return a;
    }
}
Tuple$3.$t = markType(Tuple$3, 'Tuple$3');
//# sourceMappingURL=Tuple$3.js.map