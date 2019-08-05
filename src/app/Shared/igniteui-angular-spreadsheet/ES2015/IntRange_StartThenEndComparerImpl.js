/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, markType } from "../../igniteui-angular-core/ES2015/type";
import { IComparer$1_$type } from "../../igniteui-angular-core/ES2015/IComparer$1";
import { IntRange } from "./IntRange";
/**
 * @hidden
 */
export class IntRange_StartThenEndComparerImpl extends Base {
    compare(a, b) {
        let c = Base.compareSimple(a._i, b._i);
        if (c == 0) {
            c = Base.compareSimple(a._h, b._h);
        }
        return c;
    }
}
IntRange_StartThenEndComparerImpl.$t = markType(IntRange_StartThenEndComparerImpl, 'IntRange_StartThenEndComparerImpl', Base.$, [IComparer$1_$type.specialize(IntRange.$)]);
//# sourceMappingURL=IntRange_StartThenEndComparerImpl.js.map