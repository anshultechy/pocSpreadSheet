/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { ButtonVisualElement } from "./ButtonVisualElement";
import { EventArgs, markType } from "../../igniteui-angular-core/ES5/type";
/**
 * @hidden
 */
var ToggleButtonVisualElement = /** @class */ (function (_super) {
    tslib_1.__extends(ToggleButtonVisualElement, _super);
    function ToggleButtonVisualElement(a, b) {
        var _this = _super.call(this, a, b) || this;
        _this.cj = false;
        _this.ci = true;
        _this.isCheckedChanged = null;
        return _this;
    }
    ToggleButtonVisualElement.prototype.ch = function () {
        this.cl = !this.cl;
        _super.prototype.ch.call(this);
    };
    Object.defineProperty(ToggleButtonVisualElement.prototype, "ck", {
        get: function () {
            return this.ci;
        },
        set: function (a) {
            if (a != this.ci) {
                this.ci = a;
                if (a) {
                    this.b1();
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ToggleButtonVisualElement.prototype, "cl", {
        get: function () {
            return this.cj;
        },
        set: function (a) {
            if (a != this.cj) {
                this.cj = a;
                this.ck = true;
                var b = this.isCheckedChanged;
                if (b != null) {
                    b(this, EventArgs.empty);
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    ToggleButtonVisualElement.$t = markType(ToggleButtonVisualElement, 'ToggleButtonVisualElement', ButtonVisualElement.$);
    return ToggleButtonVisualElement;
}(ButtonVisualElement));
export { ToggleButtonVisualElement };
//# sourceMappingURL=ToggleButtonVisualElement.js.map
