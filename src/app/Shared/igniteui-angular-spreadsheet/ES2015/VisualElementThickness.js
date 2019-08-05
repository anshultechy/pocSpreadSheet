/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, markType } from "../../igniteui-angular-core/ES2015/type";
import { isNaN_ } from "../../igniteui-angular-core/ES2015/number";
/**
 * @hidden
 */
export class VisualElementThickness extends Base {
    constructor(a, b, c, d) {
        super();
        this.b = 0;
        this.c = 0;
        this.d = 0;
        this.a = 0;
        this.b = isNaN_(a) ? 0 : a;
        this.c = isNaN_(b) ? 0 : b;
        this.d = this.b + (isNaN_(c) ? 0 : c);
        this.a = this.c + (isNaN_(d) ? 0 : d);
    }
}
VisualElementThickness.$t = markType(VisualElementThickness, 'VisualElementThickness');
//# sourceMappingURL=VisualElementThickness.js.map