/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, IEnumerable$1_$type, Type, getBoxIfEnum, typeCastObjTo$t, markType } from "./type";
import { arrayListCreate } from "./array";
import { ReverseArrayEnumerator$1 } from "./ReverseArrayEnumerator$1";
/**
 * @hidden
 */
export class Stack$1 extends Base {
    constructor($t) {
        super();
        this.$t = null;
        this.c = arrayListCreate();
        this.$t = $t;
        this.$type = this.$type.specialize(this.$t);
    }
    h(a) {
        this.c.add(getBoxIfEnum(this.$t, a));
    }
    d() {
        if (this.c.count < 1) {
            return Type.getDefaultValue(this.$t);
        }
        return typeCastObjTo$t(this.$t, this.c.item(this.c.count - 1));
    }
    e() {
        let a = this.c.item(this.c.count - 1);
        this.c.removeAt(this.c.count - 1);
        return typeCastObjTo$t(this.$t, a);
    }
    get f() {
        return this.c.count;
    }
    g() {
        this.c.clear();
    }
    b(a) {
        return this.c.contains(getBoxIfEnum(this.$t, a));
    }
    getEnumeratorObject() {
        return new ReverseArrayEnumerator$1(this.$t, this.c);
    }
    getEnumerator() {
        return new ReverseArrayEnumerator$1(this.$t, this.c);
    }
    a() {
        let a = this.c.count;
        let b = new Array(a);
        for (let c = 0; c < a; c++) {
            b[c] = typeCastObjTo$t(this.$t, this.c.item(a - (c + 1)));
        }
        return b;
    }
}
Stack$1.$t = markType(Stack$1, 'Stack$1', Base.$, [IEnumerable$1_$type.specialize(0)]);
//# sourceMappingURL=Stack$1.js.map