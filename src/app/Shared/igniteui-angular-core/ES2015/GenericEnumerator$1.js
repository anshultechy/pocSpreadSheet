/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, IEnumerator$1_$type, getBoxIfEnum, markType } from "./type";
/**
 * @hidden
 */
export class GenericEnumerator$1 extends Base {
    constructor($t, a) {
        super();
        this.$t = null;
        this.a = null;
        this.$t = $t;
        this.$type = this.$type.specialize(this.$t);
        this.a = a;
    }
    get current() {
        return this.a.current;
    }
    get currentObject() {
        return getBoxIfEnum(this.$t, this.a.current);
    }
    moveNext() {
        return this.a.moveNext();
    }
    reset() {
        this.a.reset();
    }
    dispose() {
    }
}
GenericEnumerator$1.$t = markType(GenericEnumerator$1, 'GenericEnumerator$1', Base.$, [IEnumerator$1_$type.specialize(0)]);
//# sourceMappingURL=GenericEnumerator$1.js.map