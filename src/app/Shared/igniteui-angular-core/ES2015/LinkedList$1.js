/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, markType } from "./type";
import { LinkedListNode$1 } from "./LinkedListNode$1";
/**
 * @hidden
 */
export class LinkedList$1 extends Base {
    constructor($t) {
        super();
        this.$t = null;
        this.a = null;
        this.b = null;
        this.$t = $t;
        this.$type = this.$type.specialize(this.$t);
    }
    get c() {
        return this.a;
    }
    get d() {
        return this.b;
    }
    e(a) {
        if (this.a == null) {
            this.a = new LinkedListNode$1(this.$t, 1, a);
            this.b = this.a;
        }
        else {
            let b = this.a;
            this.a = new LinkedListNode$1(this.$t, 1, a);
            this.a.a = b;
            b.b = this.a;
        }
    }
    f(a) {
        if (this.b == null) {
            this.a = new LinkedListNode$1(this.$t, 1, a);
            this.b = this.a;
        }
        else {
            let b = this.b;
            this.b = new LinkedListNode$1(this.$t, 1, a);
            this.b.b = b;
            b.a = this.b;
        }
    }
    i() {
        this.h(this.c);
    }
    g() {
        this.a = null;
        this.b = null;
    }
    h(a) {
        if (this.a == a) {
            this.a = a.a;
            if (a.a != null) {
                a.a.b = null;
            }
        }
        if (this.b == a) {
            this.b = a.b;
            if (a.b != null) {
                a.b.a = null;
            }
        }
        if (a.b != null) {
            a.b.a = a.a;
        }
        if (a.a != null) {
            a.a.b = a.b;
        }
        a.a = null;
        a.b = null;
    }
}
LinkedList$1.$t = markType(LinkedList$1, 'LinkedList$1');
//# sourceMappingURL=LinkedList$1.js.map