/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, markType } from "../../igniteui-angular-core/ES2015/type";
import { LongValue } from "./LongValue";
/**
 * @hidden
 */
export class CommandMap_KeyMapping extends Base {
    constructor(a, b, c, d, e, f) {
        super();
        this.f = 0;
        this.a = null;
        this.b = new LongValue();
        this.c = new LongValue();
        this.g = 0;
        this.i = 0;
        this.h = 0;
        this.f = a;
        this.b = b;
        this.c = c;
        this.g = d;
        this.i = e;
        this.h = f;
    }
    d(a, b) {
        return this.g == a && this.i == (this.i & b) && 0 == (this.h & b);
    }
    e(a) {
        return a.h(this.b, this.c) && (null == this.a || a.h(this.a.a, this.a.b));
    }
}
CommandMap_KeyMapping.$t = markType(CommandMap_KeyMapping, 'CommandMap_KeyMapping');
//# sourceMappingURL=CommandMap_KeyMapping.js.map
