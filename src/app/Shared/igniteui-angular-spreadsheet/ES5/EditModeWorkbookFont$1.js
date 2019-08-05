/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { EditModeWorkbookFont } from "./EditModeWorkbookFont";
import { markType } from "../../igniteui-angular-core/ES5/type";
/**
 * @hidden
 */
var EditModeWorkbookFont$1 = /** @class */ (function (_super) {
    tslib_1.__extends(EditModeWorkbookFont$1, _super);
    function EditModeWorkbookFont$1($tEditor, a) {
        var _this = _super.call(this, a) || this;
        _this.$tEditor = null;
        _this.$tEditor = $tEditor;
        _this.$type = _this.$type.specialize(_this.$tEditor);
        return _this;
    }
    Object.defineProperty(EditModeWorkbookFont$1.prototype, "_z", {
        get: function () {
            return this._j;
        },
        enumerable: true,
        configurable: true
    });
    EditModeWorkbookFont$1.$t = markType(EditModeWorkbookFont$1, 'EditModeWorkbookFont$1', EditModeWorkbookFont.$);
    return EditModeWorkbookFont$1;
}(EditModeWorkbookFont));
export { EditModeWorkbookFont$1 };
//# sourceMappingURL=EditModeWorkbookFont$1.js.map
