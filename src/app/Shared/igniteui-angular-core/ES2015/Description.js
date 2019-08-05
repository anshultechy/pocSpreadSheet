/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, Boolean_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
/**
 * @hidden
 */
export class Description extends Base {
    constructor() {
        super(...arguments);
        this.b = new Dictionary$2(String_$type, Boolean_$type, 0);
        this.c = null;
    }
    e(a) {
        this.b.item(a, true);
    }
    a(a) {
        if (this.b.containsKey(a)) {
            return this.b.item(a);
        }
        return false;
    }
    get name() {
        return this.c;
    }
    set name(a) {
        this.c = a;
        this.e("Name");
    }
}
Description.$t = markType(Description, 'Description');
//# sourceMappingURL=Description.js.map