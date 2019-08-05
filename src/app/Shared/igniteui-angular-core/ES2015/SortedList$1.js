/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { List$1 } from "./List$1";
import { IOrderedEnumerable$1_$type } from "./IOrderedEnumerable$1";
import { markType } from "./type";
/**
 * @hidden
 */
export class SortedList$1 extends List$1 {
    constructor($tElement, a) {
        super($tElement, 1, a);
        this.$tElement = null;
        this.$tElement = $tElement;
        this.$type = this.$type.specialize(this.$tElement);
    }
    getEnumeratorObject() {
        return super.getEnumerator();
    }
}
SortedList$1.$t = markType(SortedList$1, 'SortedList$1', List$1.$.specialize(0), [IOrderedEnumerable$1_$type.specialize(0)]);
//# sourceMappingURL=SortedList$1.js.map