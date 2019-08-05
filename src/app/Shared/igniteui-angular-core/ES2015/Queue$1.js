/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, ICollection_$type, IEnumerable$1_$type, getBoxIfEnum, toEnum, markType } from "./type";
import { InvalidOperationException } from "./InvalidOperationException";
/**
 * @hidden
 */
export class Queue$1 extends Base {
    constructor($t) {
        super();
        this.$t = null;
        this.d = 0;
        this.e = 0;
        this.f = 0;
        this.a = null;
        this.$t = $t;
        this.$type = this.$type.specialize(this.$t);
        this.a = new Array(4);
    }
    get count() {
        return this.d;
    }
    copyTo(a, b) {
        if (this.e < this.f) {
            for (let c = this.e; c < this.f; c++) {
                a[b++] = getBoxIfEnum(this.$t, this.a[c]);
            }
        }
        else {
            for (let d = this.e; d < this.a.length; d++) {
                a[b++] = getBoxIfEnum(this.$t, this.a[d]);
            }
            for (let e = 0; e < this.f; e++) {
                a[b++] = getBoxIfEnum(this.$t, this.a[e]);
            }
        }
    }
    get isSynchronized() {
        return false;
    }
    get syncRoot() {
        return null;
    }
    *_getEnumerator() {
        if (this.e < this.f) {
            for (let a = this.e; a < this.f; a++) {
                yield this.a[a];
            }
        }
        else {
            for (let b = this.e; b < this.a.length; b++) {
                yield this.a[b];
            }
            for (let c = 0; c < this.f; c++) {
                yield this.a[c];
            }
        }
    }
    getEnumerator() {
        return toEnum(() => this._getEnumerator()).getEnumerator();
    }
    getEnumeratorObject() {
        return this.getEnumerator();
    }
    g(a) {
        if (this.d == this.a.length) {
            let b = new Array(Math.max(2, this.a.length * 2));
            this.copyTo(b, 0);
            this.e = 0;
            this.f = this.a.length;
            this.a = b;
        }
        this.a[this.f] = a;
        this.f = (this.f + 1) % this.a.length;
        this.d++;
    }
    b() {
        if (this.d == 0) {
            throw new InvalidOperationException(1, "The Queue is empty.");
        }
        let a = this.a[this.e];
        this.a[this.e] = (null);
        this.e = (this.e + 1) % this.a.length;
        this.d--;
        return a;
    }
    c() {
        if (this.d == 0) {
            throw new InvalidOperationException(1, "The Queue is empty.");
        }
        return this.a[this.e];
    }
}
Queue$1.$t = markType(Queue$1, 'Queue$1', Base.$, [ICollection_$type, IEnumerable$1_$type.specialize(0)]);
//# sourceMappingURL=Queue$1.js.map