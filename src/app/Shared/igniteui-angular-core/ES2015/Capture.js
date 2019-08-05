/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, NotSupportedException, markType } from "./type";
/**
 * @hidden
 */
export class Capture extends Base {
    constructor(a, b, c) {
        super();
        this.a = 0;
        this.c = 0;
        this.f = null;
        this.a = a;
        this.c = b;
        this.f = c;
    }
    get b() {
        if (this.a < 0) {
            throw new NotSupportedException(1, "Cannot get the index of regex groups");
        }
        return this.a;
    }
    get d() {
        return this.c;
    }
    get g() {
        return this.f;
    }
    toString() {
        return this.f;
    }
}
Capture.$t = markType(Capture, 'Capture');
//# sourceMappingURL=Capture.js.map