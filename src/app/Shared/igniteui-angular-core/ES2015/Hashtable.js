/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, IDictionary_$type, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
/**
 * @hidden
 */
export class Hashtable extends Base {
    constructor() {
        super();
        this.b = new Dictionary$2(String_$type, Base.$, 0);
    }
    get c() {
        return this.b.keys;
    }
    f(a) {
        this.b.removeItem(a);
    }
    e(a, b) {
        this.b.addItem(a, b);
    }
    a(a) {
        return this.b.containsKey(a);
    }
    item(a, b) {
        if (arguments.length === 2) {
            this.b.item(a, b);
            return b;
        }
        else {
            return this.b.item(a);
        }
    }
}
Hashtable.$t = markType(Hashtable, 'Hashtable', Base.$, [IDictionary_$type]);
//# sourceMappingURL=Hashtable.js.map