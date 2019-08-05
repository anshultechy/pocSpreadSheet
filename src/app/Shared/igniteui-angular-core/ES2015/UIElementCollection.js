/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { ObservableCollection$1 } from "./ObservableCollection$1";
import { UIElement } from "./UIElement";
import { fromEn, fromEnum, markType } from "./type";
/**
 * @hidden
 */
export class UIElementCollection extends ObservableCollection$1 {
    constructor(a) {
        super(UIElement.$, 0);
        this.ae = null;
        this.ae = a;
    }
    ac(a) {
        super.ac(a);
        if (a.oldItems != null) {
            for (let b of fromEn(a.oldItems)) {
                b.x = null;
            }
        }
        if (a.newItems != null) {
            for (let c of fromEn(a.newItems)) {
                c.x = this.ae;
            }
        }
    }
    p() {
        for (let a of fromEnum(this)) {
            a.x = null;
        }
        super.p();
    }
}
UIElementCollection.$t = markType(UIElementCollection, 'UIElementCollection', ObservableCollection$1.$.specialize(UIElement.$));
//# sourceMappingURL=UIElementCollection.js.map