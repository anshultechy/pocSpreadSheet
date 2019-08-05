/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, ICollection$1_$type, getBoxIfEnum, fromEn, markType, getEnumeratorObject } from "./type";
import { InvalidOperationException } from "./InvalidOperationException";
/**
 * @hidden
 */
export class Dictionary_EnumerableCollection$3 extends Base {
    constructor($tKey, $tValue, $t, a, b, c) {
        super();
        this.$tKey = null;
        this.$tValue = null;
        this.$t = null;
        this.c = null;
        this.b = null;
        this.a = null;
        this.$tKey = $tKey;
        this.$tValue = $tValue;
        this.$t = $t;
        this.$type = this.$type.specialize(this.$tKey, this.$tValue, this.$t);
        this.c = b;
        this.b = c;
        this.a = a;
    }
    get count() {
        return this.a.count;
    }
    get isReadOnly() {
        return true;
    }
    add(a) {
        throw new InvalidOperationException(0);
    }
    clear() {
        throw new InvalidOperationException(0);
    }
    contains(a) {
        for (let b of fromEn(this.c)) {
            if (Base.equalsStatic(getBoxIfEnum(this.$t, b), getBoxIfEnum(this.$t, a))) {
                return true;
            }
        }
        return false;
    }
    copyTo(a, b) {
        for (let c of fromEn(this.c)) {
            a[b++] = c;
        }
    }
    remove(a) {
        throw new InvalidOperationException(0);
    }
    getEnumerator() {
        return getEnumeratorObject(this.c);
    }
    getEnumeratorObject() {
        return getEnumeratorObject(this.c);
    }
}
Dictionary_EnumerableCollection$3.$t = markType(Dictionary_EnumerableCollection$3, 'Dictionary_EnumerableCollection$3', Base.$, [ICollection$1_$type.specialize(2)]);
//# sourceMappingURL=Dictionary_EnumerableCollection$3.js.map