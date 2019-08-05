/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { VisualElement } from "./VisualElement";
import { markType } from "../../igniteui-angular-core/ES5/type";
/**
 * @hidden
 */
var LineVisualElement = /** @class */ (function (_super) {
    tslib_1.__extends(LineVisualElement, _super);
    function LineVisualElement(a, b) {
        var _this = _super.call(this, a, b) || this;
        _this.ch = null;
        _this.cf = false;
        return _this;
    }
    Object.defineProperty(LineVisualElement.prototype, "ci", {
        get: function () {
            return this.ch;
        },
        set: function (a) {
            if (a != this.ch) {
                this.ch = a;
                this.cg = true;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LineVisualElement.prototype, "cg", {
        get: function () {
            return this.cf;
        },
        set: function (a) {
            if (a != this.cf) {
                this.cf = a;
                if (a) {
                    this.b1();
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    LineVisualElement.$t = markType(LineVisualElement, 'LineVisualElement', VisualElement.$);
    return LineVisualElement;
}(VisualElement));
export { LineVisualElement };
//# sourceMappingURL=LineVisualElement.js.map
