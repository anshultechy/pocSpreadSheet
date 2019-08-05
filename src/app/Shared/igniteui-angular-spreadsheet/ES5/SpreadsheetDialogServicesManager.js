/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, markType } from "../../igniteui-angular-core/ES5/type";
import { ISpreadsheetDialogServicesManager_$type } from "./ISpreadsheetDialogServicesManager";
import { SpreadsheetDialogFontsService } from "./SpreadsheetDialogFontsService";
/**
 * @hidden
 */
var SpreadsheetDialogServicesManager = /** @class */ (function (_super) {
    tslib_1.__extends(SpreadsheetDialogServicesManager, _super);
    function SpreadsheetDialogServicesManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.a = null;
        return _this;
    }
    Object.defineProperty(SpreadsheetDialogServicesManager.prototype, "fontsService", {
        get: function () {
            if (null == this.a) {
                this.a = new SpreadsheetDialogFontsService();
            }
            return this.a;
        },
        enumerable: true,
        configurable: true
    });
    SpreadsheetDialogServicesManager.$t = markType(SpreadsheetDialogServicesManager, 'SpreadsheetDialogServicesManager', Base.$, [ISpreadsheetDialogServicesManager_$type]);
    return SpreadsheetDialogServicesManager;
}(Base));
export { SpreadsheetDialogServicesManager };
//# sourceMappingURL=SpreadsheetDialogServicesManager.js.map
