/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { FrameworkElement } from "./FrameworkElement";
import { UIElementCollection } from "./UIElementCollection";
import { markType } from "./type";
/**
 * @hidden
 */
var Panel = /** @class */ (function (_super) {
    tslib_1.__extends(Panel, _super);
    function Panel() {
        var _this = _super.call(this) || this;
        _this.ab = null;
        _this.ab = new UIElementCollection(_this);
        return _this;
    }
    Panel.$t = markType(Panel, 'Panel', FrameworkElement.$);
    return Panel;
}(FrameworkElement));
export { Panel };
//# sourceMappingURL=Panel.js.map