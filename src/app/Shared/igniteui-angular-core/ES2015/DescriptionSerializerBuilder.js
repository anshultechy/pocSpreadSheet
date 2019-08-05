/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, markType } from "./type";
import { StringBuilder } from "./StringBuilder";
/**
 * @hidden
 */
export class DescriptionSerializerBuilder extends Base {
    constructor() {
        super();
        this.d = null;
        this.b = 0;
        this.a = false;
        this.d = new StringBuilder(0);
    }
    toString() {
        return this.d.toString();
    }
    e(a) {
        this.g();
        this.d.l(a);
    }
    f(a) {
        this.g();
        this.d.u(a);
        this.a = true;
    }
    g() {
        if (this.a) {
            for (let a = 0; a < this.b; a++) {
                this.d.l("\t");
            }
            this.a = false;
        }
    }
    i() {
        this.b++;
    }
    h() {
        this.b--;
    }
}
DescriptionSerializerBuilder.$t = markType(DescriptionSerializerBuilder, 'DescriptionSerializerBuilder');
//# sourceMappingURL=DescriptionSerializerBuilder.js.map