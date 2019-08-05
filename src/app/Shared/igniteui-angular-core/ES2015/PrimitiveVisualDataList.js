/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { List$1 } from "./List$1";
import { PrimitiveVisualData } from "./PrimitiveVisualData";
import { IVisualData_$type } from "./IVisualData";
import { StringBuilder } from "./StringBuilder";
import { markType } from "./type";
/**
 * @hidden
 */
export class PrimitiveVisualDataList extends List$1 {
    constructor() {
        super(PrimitiveVisualData.$, 0);
    }
    containingTag(a) {
        let b = new PrimitiveVisualDataList();
        for (let c = 0; c < this.count; c++) {
            let d = this._inner[c];
            for (let e = 0; e < d.tags.count; e++) {
                if (d.tags._inner[e] == a) {
                    b.add(d);
                    break;
                }
            }
        }
        return b;
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
PrimitiveVisualDataList.$t = markType(PrimitiveVisualDataList, 'PrimitiveVisualDataList', List$1.$.specialize(PrimitiveVisualData.$), [IVisualData_$type]);
//# sourceMappingURL=PrimitiveVisualDataList.js.map