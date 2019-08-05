/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Transform } from "./Transform";
import { TransformCollection } from "./TransformCollection";
import { markType } from "./type";
/**
 * @hidden
 */
export class TransformGroup extends Transform {
    constructor() {
        super();
        this.j = null;
        this.j = new TransformCollection();
    }
}
TransformGroup.$t = markType(TransformGroup, 'TransformGroup', Transform.$);
//# sourceMappingURL=TransformGroup.js.map