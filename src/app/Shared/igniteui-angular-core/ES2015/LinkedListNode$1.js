/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, markType } from "./type";
/**
 * @hidden
 */
export class LinkedListNode$1 extends Base {
    constructor($t, a, ..._rest) {
        super();
        this.$t = null;
        this.c = null;
        this.b = null;
        this.a = null;
        this.$t = $t;
        this.$type = this.$type.specialize(this.$t);
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0: break;
            case 1:
                {
                    let c = _rest[0];
                    this.c = c;
                }
                break;
        }
    }
}
LinkedListNode$1.$t = markType(LinkedListNode$1, 'LinkedListNode$1');
//# sourceMappingURL=LinkedListNode$1.js.map