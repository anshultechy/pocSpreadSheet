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
var PlainTextWorkbookSerializationProvider_ParseEditValue = /** @class */ (function (_super) {
    tslib_1.__extends(PlainTextWorkbookSerializationProvider_ParseEditValue, _super);
    function PlainTextWorkbookSerializationProvider_ParseEditValue() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.a = null;
        _this.b = null;
        return _this;
    }
    PlainTextWorkbookSerializationProvider_ParseEditValue.prototype.createDocument = function () {
        return null;
    };
    Object.defineProperty(PlainTextWorkbookSerializationProvider_ParseEditValue.prototype, "unformattedText", {
        get: function () {
            return this.b;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlainTextWorkbookSerializationProvider_ParseEditValue.prototype, "editCellFormat", {
        get: function () {
            return this.a;
        },
        enumerable: true,
        configurable: true
    });
    PlainTextWorkbookSerializationProvider_ParseEditValue.$t = markType(PlainTextWorkbookSerializationProvider_ParseEditValue, 'PlainTextWorkbookSerializationProvider_ParseEditValue', Base.$, [ISpreadsheetEditorValue_$type]);
    return PlainTextWorkbookSerializationProvider_ParseEditValue;
}(Base));
export { PlainTextWorkbookSerializationProvider_ParseEditValue };
//# sourceMappingURL=PlainTextWorkbookSerializationProvider_ParseEditValue.js.map
