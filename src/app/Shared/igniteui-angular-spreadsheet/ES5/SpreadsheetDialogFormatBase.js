/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, INotifyPropertyChanged_$type, PropertyChangedEventArgs, markType } from "../../igniteui-angular-core/ES5/type";
/**
 * @hidden
 */
var SpreadsheetDialogFormatBase = /** @class */ (function (_super) {
    tslib_1.__extends(SpreadsheetDialogFormatBase, _super);
    function SpreadsheetDialogFormatBase() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.propertyChanged = null;
        return _this;
    }
    SpreadsheetDialogFormatBase.prototype._a = function (a) {
        var b = this.propertyChanged;
        if (null != b) {
            b(this, new PropertyChangedEventArgs(a));
        }
    };
    SpreadsheetDialogFormatBase.$t = markType(SpreadsheetDialogFormatBase, 'SpreadsheetDialogFormatBase', Base.$, [INotifyPropertyChanged_$type]);
    return SpreadsheetDialogFormatBase;
}(Base));
export { SpreadsheetDialogFormatBase };
//# sourceMappingURL=SpreadsheetDialogFormatBase.js.map
