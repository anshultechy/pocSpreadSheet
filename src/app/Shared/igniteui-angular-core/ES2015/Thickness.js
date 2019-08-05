/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, markType } from "./type";
/**
 * @hidden
 */
export class Thickness extends Base {
    constructor(a, ..._rest) {
        super();
        this.b = 0;
        this.c = 0;
        this.d = 0;
        this.e = 0;
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0:
                {
                    let c = _rest[0];
                    this.b = this.c = this.d = this.e = c;
                }
                break;
            case 1:
                {
                    let c = _rest[0];
                    let d = _rest[1];
                    let e = _rest[2];
                    let f = _rest[3];
                    this.c = c;
                    this.e = d;
                    this.d = e;
                    this.b = f;
                }
                break;
        }
    }
    a(a) {
        return this.b == a.b && this.e == a.e && this.c == a.c && this.d == a.d;
    }
    toString() {
        let a = this.c.toString() + "," + this.e.toString() + "," + this.d.toString() + "," + this.b.toString();
        return a;
    }
}
Thickness.$t = markType(Thickness, 'Thickness');
//# sourceMappingURL=Thickness.js.map