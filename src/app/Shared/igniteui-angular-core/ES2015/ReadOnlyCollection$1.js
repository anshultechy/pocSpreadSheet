/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, IList$1_$type, IList_$type, typeCastObjTo$t, markType, getEnumerator } from "./type";
/**
 * @hidden
 */
export class ReadOnlyCollection$1 extends Base {
    constructor($t, a, ..._rest) {
        super();
        this.$t = null;
        this.a = null;
        this.c = {};
        this.$t = $t;
        this.$type = this.$type.specialize(this.$t);
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0: break;
            case 1:
                {
                    let c = _rest[0];
                    this.a = c;
                }
                break;
        }
    }
    item(a, b) {
        if (arguments.length === 2) {
            this.a.item(a, b);
            return b;
        }
        else {
            return this.a.item(a);
        }
    }
    indexOf(a) {
        return this.a.indexOf(a);
    }
    insert(a, b) {
    }
    removeAt(a) {
    }
    get count() {
        return this.a.count;
    }
    get isReadOnly() {
        return true;
    }
    add(a) {
    }
    clear() {
    }
    contains(a) {
        return this.a.contains(a);
    }
    copyTo(a, b) {
        this.a.copyTo(a, b);
    }
    remove(a) {
        return false;
    }
    getEnumerator() {
        return getEnumerator(this.a);
    }
    getEnumeratorObject() {
        return getEnumerator(this.a);
    }
    get isFixedSize() {
        return true;
    }
    add1(a) {
        return -1;
    }
    contains1(a) {
        return this.a.contains(typeCastObjTo$t(this.$t, a));
    }
    indexOf1(a) {
        return this.a.indexOf(typeCastObjTo$t(this.$t, a));
    }
    insert1(a, b) {
    }
    remove1(a) {
    }
    copyTo1(a, b) {
        this.a.copyTo(a, b);
    }
    get b() {
        return this.a;
    }
    get isSynchronized() {
        return true;
    }
    get syncRoot() {
        return this.c;
    }
}
ReadOnlyCollection$1.$t = markType(ReadOnlyCollection$1, 'ReadOnlyCollection$1', Base.$, [IList$1_$type.specialize(0), IList_$type]);
//# sourceMappingURL=ReadOnlyCollection$1.js.map