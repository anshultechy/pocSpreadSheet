/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, Point_$type, markType } from "./type";
import { List$1 } from "./List$1";
import { XBaseField } from "./XBaseField";
/**
 * @hidden
 */
export class Header extends Base {
    constructor() {
        super(...arguments);
        this.a = 0;
        this.e = null;
        this.b = new List$1(XBaseField.$, 0);
    }
    get d() {
        return { $type: Point_$type, x: this.e.left, y: this.e.top };
    }
    get c() {
        return { $type: Point_$type, x: this.e.right, y: this.e.bottom };
    }
}
Header.$t = markType(Header, 'Header');
//# sourceMappingURL=Header.js.map