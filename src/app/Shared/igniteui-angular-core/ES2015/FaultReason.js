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
export class FaultReason extends Base {
    constructor(a) {
        super();
        this.a = null;
        this.a = a;
    }
    toString() {
        return this.a;
    }
}
FaultReason.$t = markType(FaultReason, 'FaultReason');
//# sourceMappingURL=FaultReason.js.map