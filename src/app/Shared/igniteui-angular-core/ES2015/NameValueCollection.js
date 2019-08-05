/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
/**
 * @hidden
 */
export class NameValueCollection extends Base {
    constructor() {
        super();
        this.a = null;
        this.a = new Dictionary$2(String_$type, String_$type, 0);
    }
    item(a, b) {
        if (arguments.length === 2) {
            if (this.a.containsKey(a)) {
                this.a.item(a, b);
            }
            else {
                this.a.addItem(a, b);
            }
            return b;
        }
        else {
            if (this.a.containsKey(a)) {
                return this.a.item(a);
            }
            else {
                return null;
            }
        }
    }
}
NameValueCollection.$t = markType(NameValueCollection, 'NameValueCollection');
//# sourceMappingURL=NameValueCollection.js.map