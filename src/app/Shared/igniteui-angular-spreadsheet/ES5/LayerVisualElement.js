/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { VisualElement } from "./VisualElement";
import { Size } from "../../igniteui-angular-core/ES5/Size";
import { markType } from "../../igniteui-angular-core/ES5/type";
/**
 * @hidden
 */
var LayerVisualElement = /** @class */ (function (_super) {
    tslib_1.__extends(LayerVisualElement, _super);
    function LayerVisualElement(a, b) {
        return _super.call(this, a, b) || this;
    }
    LayerVisualElement.prototype.b7 = function (a, b, c, d) {
        _super.prototype.b7.call(this, a, b, c, d);
        this.cf(new Size(1, c, d));
    };
    LayerVisualElement.$t = markType(LayerVisualElement, 'LayerVisualElement', VisualElement.$);
    return LayerVisualElement;
}(VisualElement));
export { LayerVisualElement };
//# sourceMappingURL=LayerVisualElement.js.map
