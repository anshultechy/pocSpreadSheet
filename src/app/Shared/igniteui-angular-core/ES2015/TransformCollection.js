/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { List$1 } from "./List$1";
import { Transform } from "./Transform";
import { markType } from "./type";
/**
 * @hidden
 */
export class TransformCollection extends List$1 {
    constructor() {
        super(Transform.$, 0);
    }
}
TransformCollection.$t = markType(TransformCollection, 'TransformCollection', List$1.$.specialize(Transform.$));
//# sourceMappingURL=TransformCollection.js.map