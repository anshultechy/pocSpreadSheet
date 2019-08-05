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
export class TouchPointInfo extends Base {
    constructor(a, ..._rest) {
        super();
        this.a = 0;
        this.b = 0;
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0:
                {
                    let c = _rest[0];
                    let d = _rest[1];
                    this.a = c;
                    this.b = d;
                }
                break;
            case 1: break;
        }
    }
}
TouchPointInfo.$t = markType(TouchPointInfo, 'TouchPointInfo');
//# sourceMappingURL=TouchPointInfo.js.map