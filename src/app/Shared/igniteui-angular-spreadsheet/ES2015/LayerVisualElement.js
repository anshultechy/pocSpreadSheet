/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { VisualElement } from "./VisualElement";
import { Size } from "../../igniteui-angular-core/ES2015/Size";
import { markType } from "../../igniteui-angular-core/ES2015/type";
/**
 * @hidden
 */
export class LayerVisualElement extends VisualElement {
    constructor(a, b) {
        super(a, b);
    }
    b7(a, b, c, d) {
        super.b7(a, b, c, d);
        this.cf(new Size(1, c, d));
    }
}
LayerVisualElement.$t = markType(LayerVisualElement, 'LayerVisualElement', VisualElement.$);
//# sourceMappingURL=LayerVisualElement.js.map