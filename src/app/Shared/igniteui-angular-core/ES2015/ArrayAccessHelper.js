/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, typeCast, Array_$type, markType } from "./type";
import { List$1 } from "./List$1";
/**
 * @hidden
 */
export class ArrayAccessHelper extends Base {
    static b(values_) {
        let a = (Array.isArray(values_) ? values_ : null);
        return a;
    }
    static c(values_) {
        let a = (Array.isArray(values_) ? values_ : null);
        return a;
    }
    static a(a) {
        if (typeCast(List$1.$.specialize(Array_$type), a) !== null) {
            return a.asArray();
        }
        return null;
    }
}
ArrayAccessHelper.$t = markType(ArrayAccessHelper, 'ArrayAccessHelper');
//# sourceMappingURL=ArrayAccessHelper.js.map