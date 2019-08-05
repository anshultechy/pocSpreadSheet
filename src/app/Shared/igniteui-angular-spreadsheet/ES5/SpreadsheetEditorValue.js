/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, markType } from "../../igniteui-angular-core/ES5/type";
import { ISpreadsheetEditorValue_$type } from "./ISpreadsheetEditorValue";
/**
 * @hidden
 */
var SpreadsheetEditorValue = /** @class */ (function (_super) {
    tslib_1.__extends(SpreadsheetEditorValue, _super);
    function SpreadsheetEditorValue(a, b) {
        var _this = _super.call(this) || this;
        _this.b = null;
        _this.a = null;
        _this.b = a;
        _this.a = b;
        return _this;
    }
    Object.defineProperty(SpreadsheetEditorValue.prototype, "editCellFormat", {
        get: function () {
            return this.a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpreadsheetEditorValue.prototype, "unformattedText", {
        get: function () {
            return this.b;
        },
        enumerable: true,
        configurable: true
    });
    SpreadsheetEditorValue.prototype.createDocument = function () {
        return null;
    };
    SpreadsheetEditorValue.$t = markType(SpreadsheetEditorValue, 'SpreadsheetEditorValue', Base.$, [ISpreadsheetEditorValue_$type]);
    return SpreadsheetEditorValue;
}(Base));
export { SpreadsheetEditorValue };
//# sourceMappingURL=SpreadsheetEditorValue.js.map
