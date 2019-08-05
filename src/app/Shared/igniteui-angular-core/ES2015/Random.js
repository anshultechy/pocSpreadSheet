/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, markType } from "./type";
import { truncate } from "./number";
/**
 * @hidden
 */
export class Random extends Base {
    constructor(a, ..._rest) {
        super();
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0: break;
            case 1:
                {
                    let c = _rest[0];
                }
                break;
        }
    }
    nextDouble() {
        return Math.random();
    }
    next() {
        return this.next1(0x7FFFFFFF);
    }
    next1(a) {
        return truncate(Math.round(this.nextDouble() * (a - 1)));
    }
    next2(a, b) {
        return a + truncate(Math.round(this.nextDouble() * ((b - a) - 1)));
    }
}
Random.$t = markType(Random, 'Random');
//# sourceMappingURL=Random.js.map