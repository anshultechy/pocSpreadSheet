/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { ElementLayerView } from "./ElementLayerView";
import { markType } from "../../igniteui-angular-core/ES2015/type";
/**
 * @hidden
 */
export class ElementLayerViewSingle extends ElementLayerView {
    constructor() {
        super();
        this.a = null;
    }
    attach(a) {
        this.a = a;
    }
    detach(a) {
        this.a = null;
    }
    get b() {
        return this.a;
    }
}
ElementLayerViewSingle.$t = markType(ElementLayerViewSingle, 'ElementLayerViewSingle', ElementLayerView.$);
//# sourceMappingURL=ElementLayerViewSingle.js.map
