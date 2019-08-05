/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base } from "./type";
export class CompareUtil {
    static compareToObject(obj1, obj2) {
        if (obj1.compareToObject) {
            return obj1.compareToObject(obj2);
        }
        return Base.compare(obj1, obj2);
    }
    static compareTo(obj1, obj2) {
        if (obj1.compareTo) {
            return obj1.compareTo(obj2);
        }
        return Base.compare(obj1, obj2);
    }
}
//# sourceMappingURL=compareUtil.js.map