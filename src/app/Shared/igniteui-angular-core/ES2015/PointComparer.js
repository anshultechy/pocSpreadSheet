/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, IEqualityComparer$1_$type, Point_$type, markType } from "./type";
/**
 * @hidden
 */
export class PointComparer extends Base {
    equalsC(a, b) {
        return a.x == b.x && a.y == b.y;
    }
    getHashCodeC(a) {
        return (a.x) ^ (a.y);
    }
}
PointComparer.$t = markType(PointComparer, 'PointComparer', Base.$, [IEqualityComparer$1_$type.specialize(Point_$type)]);
//# sourceMappingURL=PointComparer.js.map