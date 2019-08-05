/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, IEnumerable$1_$type, markType, getEnumerator } from "./type";
import { GenericEnumerator$1 } from "./GenericEnumerator$1";
/**
 * @hidden
 */
export class GenericEnumerable$1 extends Base {
    constructor($t, a) {
        super();
        this.$t = null;
        this.a = null;
        this.$t = $t;
        this.$type = this.$type.specialize(this.$t);
        this.a = a;
    }
    getEnumerator() {
        return new GenericEnumerator$1(this.$t, getEnumerator(this.a()));
    }
    getEnumeratorObject() {
        return new GenericEnumerator$1(this.$t, getEnumerator(this.a()));
    }
}
GenericEnumerable$1.$t = markType(GenericEnumerable$1, 'GenericEnumerable$1', Base.$, [IEnumerable$1_$type.specialize(0)]);
//# sourceMappingURL=GenericEnumerable$1.js.map