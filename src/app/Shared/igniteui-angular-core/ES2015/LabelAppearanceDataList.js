/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { List$1 } from "./List$1";
import { LabelAppearanceData } from "./LabelAppearanceData";
import { IVisualData_$type } from "./IVisualData";
import { StringBuilder } from "./StringBuilder";
import { markType } from "./type";
/**
 * @hidden
 */
export class LabelAppearanceDataList extends List$1 {
    constructor() {
        super(LabelAppearanceData.$, 0);
    }
    serialize() {
        let a = new StringBuilder(0);
        a.l("{ items: [");
        for (let b = 0; b < this.count; b++) {
            if (b != 0) {
                a.l(", ");
            }
            a.l(this._inner[b].serialize());
        }
        return a.toString();
    }
}
LabelAppearanceDataList.$t = markType(LabelAppearanceDataList, 'LabelAppearanceDataList', List$1.$.specialize(LabelAppearanceData.$), [IVisualData_$type]);
//# sourceMappingURL=LabelAppearanceDataList.js.map