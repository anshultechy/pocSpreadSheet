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
var SpreadsheetIconElement = /** @class */ (function (_super) {
    tslib_1.__extends(SpreadsheetIconElement, _super);
    function SpreadsheetIconElement(a) {
        var _this = _super.call(this, a, "Icon") || this;
        _this.cf = 0;
        _this.ch = false;
        _this.cj = null;
        return _this;
    }
    Object.defineProperty(SpreadsheetIconElement.prototype, "cg", {
        get: function () {
            return this.cf;
        },
        set: function (a) {
            if (a != this.cf) {
                this.cf = a;
                this.ci = true;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpreadsheetIconElement.prototype, "ci", {
        get: function () {
            return this.ch;
        },
        set: function (a) {
            if (a != this.ch) {
                this.ch = a;
                if (a) {
                    this.b1();
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    SpreadsheetIconElement.prototype.an = function (a, b, c, d) {
        var e = this.a3;
        var f = this.av;
        var g = _super.prototype.an.call(this, a, b, c, d);
        if (g && (e != this.a3 || f != this.av)) {
            this.ci = true;
        }
        return g;
    };
    SpreadsheetIconElement.$t = markType(SpreadsheetIconElement, 'SpreadsheetIconElement', VisualElement.$);
    return SpreadsheetIconElement;
}(VisualElement));
export { SpreadsheetIconElement };
//# sourceMappingURL=SpreadsheetIconElement.js.map
