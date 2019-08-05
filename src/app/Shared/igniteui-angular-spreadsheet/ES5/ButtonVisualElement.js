/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { VisualElement } from "./VisualElement";
import { EventArgs, markType } from "../../igniteui-angular-core/ES5/type";
/**
 * @hidden
 */
var ButtonVisualElement = /** @class */ (function (_super) {
    tslib_1.__extends(ButtonVisualElement, _super);
    function ButtonVisualElement(a, b) {
        var _this = _super.call(this, a, b) || this;
        _this.click = null;
        return _this;
    }
    ButtonVisualElement.prototype.get_x = function () {
        return true;
    };
    ButtonVisualElement.prototype.b2 = function () {
        this.s = true;
        _super.prototype.b2.call(this);
    };
    ButtonVisualElement.prototype.b4 = function () {
        this.s = false;
        _super.prototype.b4.call(this);
    };
    ButtonVisualElement.prototype.ad = function (a) {
        if (a.a() == 1) {
            return a.d();
        }
        return _super.prototype.ad.call(this, a);
    };
    ButtonVisualElement.prototype.ah = function (a) {
        if (a.b()) {
            var b = a.h();
            a.f();
            if (this.aa(b.x, b.y)) {
                this.ch();
            }
            return true;
        }
        return _super.prototype.ah.call(this, a);
    };
    ButtonVisualElement.prototype.ch = function () {
        var a = this.click;
        if (a != null) {
            a(this, EventArgs.empty);
        }
    };
    ButtonVisualElement.$t = markType(ButtonVisualElement, 'ButtonVisualElement', VisualElement.$);
    return ButtonVisualElement;
}(VisualElement));
export { ButtonVisualElement };
//# sourceMappingURL=ButtonVisualElement.js.map
