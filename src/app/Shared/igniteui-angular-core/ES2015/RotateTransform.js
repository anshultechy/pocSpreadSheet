/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Transform } from "./Transform";
import { markType } from "./type";
/**
 * @hidden
 */
export class RotateTransform extends Transform {
    constructor() {
        super(...arguments);
        this.j = 0;
        this.k = 0;
        this.l = 0;
    }
}
RotateTransform.$t = markType(RotateTransform, 'RotateTransform', Transform.$);
//# sourceMappingURL=RotateTransform.js.map