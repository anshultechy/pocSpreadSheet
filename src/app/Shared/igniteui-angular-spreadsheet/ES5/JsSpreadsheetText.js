/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { SpreadsheetText } from "./SpreadsheetText";
import { typeCast, markType } from "../../igniteui-angular-core/ES5/type";
/**
 * @hidden
 */
var JsSpreadsheetText = /** @class */ (function (_super) {
    tslib_1.__extends(JsSpreadsheetText, _super);
    function JsSpreadsheetText() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.c = 0;
        _this.d = 0;
        _this.e = null;
        return _this;
    }
    JsSpreadsheetText.prototype.equals = function (a) {
        var b = typeCast(JsSpreadsheetText.$, a);
        return b != null && b.e == this.e && b.c == this.c && b.d == this.d;
    };
    JsSpreadsheetText.prototype.get_a = function () {
        return this.c;
    };
    Object.defineProperty(JsSpreadsheetText.prototype, "a", {
        get: function () {
            return this.get_a();
        },
        enumerable: true,
        configurable: true
    });
    JsSpreadsheetText.prototype.get_b = function () {
        return this.d;
    };
    Object.defineProperty(JsSpreadsheetText.prototype, "b", {
        get: function () {
            return this.get_b();
        },
        enumerable: true,
        configurable: true
    });
    JsSpreadsheetText.$t = markType(JsSpreadsheetText, 'JsSpreadsheetText', SpreadsheetText.$);
    return JsSpreadsheetText;
}(SpreadsheetText));
export { JsSpreadsheetText };
//# sourceMappingURL=JsSpreadsheetText.js.map
