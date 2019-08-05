/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, IList$1_$type, fromEnum, toEnum, getBoxIfEnum, markType } from "./type";
import { NotImplementedException } from "./NotImplementedException";
/**
 * @hidden
 */
export class RearrangedList$1 extends Base {
    constructor($t, a, b) {
        super();
        this.$t = null;
        this.b = null;
        this.a = null;
        this.$t = $t;
        this.$type = this.$type.specialize(this.$t);
        this.b = a;
        this.a = b;
    }
    indexOf(a) {
        let b = this.b.indexOf(a);
        if (b == -1) {
            return -1;
        }
        return this.a.indexOf(b);
    }
    insert(a, b) {
        throw new NotImplementedException(0);
    }
    removeAt(a) {
        throw new NotImplementedException(0);
    }
    item(a, b) {
        if (arguments.length === 2) {
            return b;
        }
        else {
            return this.b.item(this.a.item(a));
        }
    }
    add(a) {
        throw new NotImplementedException(0);
    }
    clear() {
        this.a.clear();
    }
    contains(a) {
        return this.b.contains(a);
    }
    copyTo(a, b) {
        throw new NotImplementedException(0);
    }
    get count() {
        return this.a.count;
    }
    get isReadOnly() {
        return true;
    }
    remove(a) {
        throw new NotImplementedException(0);
    }
    *_getEnumerator() {
        for (let a of fromEnum(this.a)) {
            yield this.b.item(a);
        }
    }
    getEnumerator() {
        return toEnum(() => this._getEnumerator()).getEnumerator();
    }
    *_getEnumeratorObject() {
        for (let a of fromEnum(this.a)) {
            yield getBoxIfEnum(this.$t, this.b.item(a));
        }
    }
    getEnumeratorObject() {
        return toEnum(() => this._getEnumeratorObject()).getEnumeratorObject();
    }
}
RearrangedList$1.$t = markType(RearrangedList$1, 'RearrangedList$1', Base.$, [IList$1_$type.specialize(0)]);
//# sourceMappingURL=RearrangedList$1.js.map