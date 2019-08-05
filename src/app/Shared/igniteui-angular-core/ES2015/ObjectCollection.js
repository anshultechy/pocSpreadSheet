/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { ObservableCollection$1 } from "./ObservableCollection$1";
import { Base, markType } from "./type";
/**
 * @hidden
 */
export class ObjectCollection extends ObservableCollection$1 {
    constructor(a, ..._rest) {
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0:
                {
                    super(Base.$, 0);
                }
                break;
            case 1:
                {
                    let c = _rest[0];
                    super(Base.$, 1, c);
                }
                break;
            case 2:
                {
                    let c = _rest[0];
                    super(Base.$, 2, c);
                }
                break;
        }
    }
}
ObjectCollection.$t = markType(ObjectCollection, 'ObjectCollection', ObservableCollection$1.$.specialize(Base.$));
//# sourceMappingURL=ObjectCollection.js.map