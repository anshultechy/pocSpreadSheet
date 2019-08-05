/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, IEnumerator$1_$type, typeCastObjTo$t, getBoxIfEnum, markType } from "../../igniteui-angular-core/ES2015/type";
/**
 * @hidden
 */
export class TypedEnumerable_Enumerator$1 extends Base {
    constructor($t, a) {
        super();
        this.$t = null;
        this.a = null;
        this.$t = $t;
        this.$type = this.$type.specialize(this.$t);
        this.a = a;
    }
    reset() {
        this.a.reset();
    }
    moveNext() {
        return this.a.moveNext();
    }
    get current() {
        return typeCastObjTo$t(this.$t, this.a.currentObject);
    }
    get currentObject() {
        return getBoxIfEnum(this.$t, this.current);
    }
    dispose() {
    }
}
TypedEnumerable_Enumerator$1.$t = markType(TypedEnumerable_Enumerator$1, 'TypedEnumerable_Enumerator$1', Base.$, [IEnumerator$1_$type.specialize(0)]);
//# sourceMappingURL=TypedEnumerable_Enumerator$1.js.map