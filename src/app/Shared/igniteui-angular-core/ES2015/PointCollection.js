/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { List$1 } from "./List$1";
import { Point_$type, markType } from "./type";
/**
 * @hidden
 */
export class PointCollection extends List$1 {
    constructor(a, ..._rest) {
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0:
                {
                    super(Point_$type, 0);
                }
                break;
            case 1:
                {
                    let source_ = _rest[0];
                    super(Point_$type, 0);
                    this._inner = source_._inner;
                }
                break;
        }
    }
}
PointCollection.$t = markType(PointCollection, 'PointCollection', List$1.$.specialize(Point_$type));
//# sourceMappingURL=PointCollection.js.map