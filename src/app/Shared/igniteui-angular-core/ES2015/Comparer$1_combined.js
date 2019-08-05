/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, typeCastObjTo$t, markType, IComparable$1_$type, typeCast } from "./type";
import { IComparer_$type } from "./IComparer";
import { IComparer$1_$type } from "./IComparer$1";
import { CompareUtil } from "./compareUtil";
/**
 * @hidden
 */
export class Comparer$1 extends Base {
    constructor($t) {
        super();
        this.$t = null;
        this.$t = $t;
        this.$type = this.$type.specialize(this.$t);
    }
    static defaultComparerValue($t) {
        return new DefaultComparer$1($t);
    }
    static a($t, a) {
        return null;
    }
    compareObject(a, b) {
        return this.compare(typeCastObjTo$t(this.$t, a), typeCastObjTo$t(this.$t, b));
    }
}
Comparer$1.$t = markType(Comparer$1, 'Comparer$1', Base.$, [IComparer_$type, IComparer$1_$type.specialize(0)]);
/**
 * @hidden
 */
export class DefaultComparer$1 extends Comparer$1 {
    constructor($t) {
        super($t);
        this.$t = null;
        this.$t = $t;
        this.$type = this.$type.specialize(this.$t);
    }
    compare(a, b) {
        let c = typeCast(IComparable$1_$type.specialize(this.$t), a);
        if (c != null) {
            return CompareUtil.compareTo(c, b);
        }
        let d = typeCast(IComparable$1_$type.specialize(this.$t), b);
        if (d != null) {
            return -CompareUtil.compareTo(d, a);
        }
        return (Base.compare(a, b));
    }
}
DefaultComparer$1.$t = markType(DefaultComparer$1, 'DefaultComparer$1', Comparer$1.$.specialize(0));
//# sourceMappingURL=Comparer$1_combined.js.map