/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, markType } from "../../igniteui-angular-core/ES2015/type";
/**
 * @hidden
 */
export class CellBorderValue extends Base {
    constructor() {
        super(...arguments);
        this.c = false;
        this.a = 0;
        this.b = null;
        this.d = false;
    }
    e(a, b) {
        if (!this.c) {
            this.c = true;
            this.a = a;
            this.b = b;
        }
        else if (this.d) {
            return false;
        }
        else if (this.a != a || !Base.equalsStatic(this.b, b)) {
            this.d = true;
            this.a = -1;
            this.b = null;
            return false;
        }
        return true;
    }
}
CellBorderValue.$t = markType(CellBorderValue, 'CellBorderValue');
//# sourceMappingURL=CellBorderValue.js.map
