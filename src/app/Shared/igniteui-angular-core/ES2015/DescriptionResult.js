/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, markType } from "./type";
import { List$1 } from "./List$1";
/**
 * @hidden
 */
export class DescriptionResult extends Base {
    constructor() {
        super();
        this.c = new List$1(String_$type, 0);
        this._result = null;
    }
    d(a) {
        this.c.add(a);
    }
    e(a) {
        for (let b = 0; b < a.c.count; b++) {
            this.c.add(a.c._inner[b]);
        }
    }
    get result() {
        return this._result;
    }
    set result(a) {
        this._result = a;
    }
    get warnings() {
        return this.c.toArray();
    }
}
DescriptionResult.$t = markType(DescriptionResult, 'DescriptionResult');
//# sourceMappingURL=DescriptionResult.js.map