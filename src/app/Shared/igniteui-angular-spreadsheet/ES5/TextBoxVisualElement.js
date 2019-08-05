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
var TextBoxVisualElement = /** @class */ (function (_super) {
    tslib_1.__extends(TextBoxVisualElement, _super);
    function TextBoxVisualElement(a, b) {
        var _this = _super.call(this, a, b) || this;
        _this.cg = false;
        _this.cm = null;
        _this.cf = false;
        _this.ck = 1;
        _this.textChanged = null;
        return _this;
    }
    Object.defineProperty(TextBoxVisualElement.prototype, "ch", {
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
    Object.defineProperty(TextBoxVisualElement.prototype, "cl", {
        get: function () {
            return this.ck;
        },
        set: function (a) {
            if (a != this.ck) {
                this.ck = a;
                if (this._parent != null) {
                    this._parent.t = true;
                }
                this.ch = true;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TextBoxVisualElement.prototype, "co", {
        get: function () {
            return this.cm;
        },
        set: function (a) {
            if (a != this.cm) {
                this.cm = a;
                this.ci = true;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TextBoxVisualElement.prototype, "ci", {
        get: function () {
            return this.cg;
        },
        set: function (a) {
            if (a != this.cg) {
                this.cg = a;
                if (a) {
                    this.b1();
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    TextBoxVisualElement.prototype.cp = function () {
        var a = this.textChanged;
        if (a != null) {
            a(this, EventArgs.empty);
        }
    };
    TextBoxVisualElement.$t = markType(TextBoxVisualElement, 'TextBoxVisualElement', VisualElement.$);
    return TextBoxVisualElement;
}(VisualElement));
export { TextBoxVisualElement };
//# sourceMappingURL=TextBoxVisualElement.js.map
