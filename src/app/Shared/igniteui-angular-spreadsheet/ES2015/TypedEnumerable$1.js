/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, IEnumerable$1_$type, markType, getEnumeratorObject } from "../../igniteui-angular-core/ES2015/type";
import { TypedEnumerable_Enumerator$1 } from "./TypedEnumerable_Enumerator$1";
/**
 * @hidden
 */
export class TypedEnumerable$1 extends Base {
    constructor($t, a) {
        super();
        this.$t = null;
        this.a = null;
        this.$t = $t;
        this.$type = this.$type.specialize(this.$t);
        this.a = a || new Array(0);
    }
    b(a) {
        this.a = a || new Array(0);
    }
    getEnumerator() {
        return new TypedEnumerable_Enumerator$1(this.$t, getEnumeratorObject(this.a));
    }
    getEnumeratorObject() {
        return this.getEnumerator();
    }
}
TypedEnumerable$1.$t = markType(TypedEnumerable$1, 'TypedEnumerable$1', Base.$, [IEnumerable$1_$type.specialize(0)]);
//# sourceMappingURL=TypedEnumerable$1.js.map