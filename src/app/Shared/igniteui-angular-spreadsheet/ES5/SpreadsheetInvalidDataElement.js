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
var SpreadsheetInvalidDataElement = /** @class */ (function (_super) {
    tslib_1.__extends(SpreadsheetInvalidDataElement, _super);
    function SpreadsheetInvalidDataElement(a) {
        var _this = _super.call(this, a, "InvalidData") || this;
        _this.cl = null;
        _this.cf = false;
        _this.cj = 0;
        _this.cg = false;
        return _this;
    }
    Object.defineProperty(SpreadsheetInvalidDataElement.prototype, "cm", {
        get: function () {
            return this.cl;
        },
        set: function (a) {
            if (a != this.cl) {
                this.cl = a;
                this.ch = true;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpreadsheetInvalidDataElement.prototype, "ch", {
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
    Object.defineProperty(SpreadsheetInvalidDataElement.prototype, "ck", {
        get: function () {
            return this.cj;
        },
        set: function (a) {
            if (a != this.cj) {
                this.cj = a;
                this.ci = true;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpreadsheetInvalidDataElement.prototype, "ci", {
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
    SpreadsheetInvalidDataElement.prototype.an = function (a, b, c, d) {
        var e = this.a3;
        var f = this.av;
        var g = _super.prototype.an.call(this, a, b, c, d);
        if (g && (e != this.a3 || f != this.av)) {
            this.ch = true;
        }
        return g;
    };
    SpreadsheetInvalidDataElement.$t = markType(SpreadsheetInvalidDataElement, 'SpreadsheetInvalidDataElement', VisualElement.$);
    return SpreadsheetInvalidDataElement;
}(VisualElement));
export { SpreadsheetInvalidDataElement };
//# sourceMappingURL=SpreadsheetInvalidDataElement.js.map
