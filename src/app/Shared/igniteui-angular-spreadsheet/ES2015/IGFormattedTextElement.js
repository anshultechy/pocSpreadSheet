/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, fromEnum, markType } from "../../igniteui-angular-core/ES2015/type";
import { IGFormattedTextSettings } from "./IGFormattedTextSettings";
/**
 * @hidden
 */
export class IGFormattedTextElement extends Base {
    constructor() {
        super();
        this.a = new IGFormattedTextSettings();
        this.f = 0;
        this.e = 0;
    }
    b(a) {
        return this.f <= a && a < this.f + this.e;
    }
    c() {
        return this.a._f();
    }
    static d($t, a) {
        for (let b of fromEnum(a)) {
            if (b.c()) {
                return true;
            }
        }
        return false;
    }
}
IGFormattedTextElement.$t = markType(IGFormattedTextElement, 'IGFormattedTextElement');
//# sourceMappingURL=IGFormattedTextElement.js.map