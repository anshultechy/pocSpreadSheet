/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, IEnumerator$1_$type, typeCastObjTo$t, markType } from "./type";
import { NotImplementedException } from "./NotImplementedException";
/**
 * @hidden
 */
export class ReverseArrayEnumerator$1 extends Base {
    constructor($t, a) {
        super();
        this.$t = null;
        this.b = 0;
        this.a = null;
        this.$t = $t;
        this.$type = this.$type.specialize(this.$t);
        this.a = a;
        this.b = a.count;
    }
    get current() {
        return typeCastObjTo$t(this.$t, this.a.item(this.b));
    }
    get currentObject() {
        return this.a.item(this.b);
    }
    moveNext() {
        this.b--;
        return this.b >= 0;
    }
    reset() {
        this.b = this.a.count;
    }
    dispose() {
        throw new NotImplementedException(0);
    }
}
ReverseArrayEnumerator$1.$t = markType(ReverseArrayEnumerator$1, 'ReverseArrayEnumerator$1', Base.$, [IEnumerator$1_$type.specialize(0)]);
//# sourceMappingURL=ReverseArrayEnumerator$1.js.map