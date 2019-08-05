/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, markType } from "../../igniteui-angular-core/ES5/type";
import { CoreUtilities } from "./CoreUtilities";
/**
 * @hidden
 */
var SpreadsheetAreaLayoutManager_SheetLayerInfo$1 = /** @class */ (function (_super) {
    tslib_1.__extends(SpreadsheetAreaLayoutManager_SheetLayerInfo$1, _super);
    function SpreadsheetAreaLayoutManager_SheetLayerInfo$1($t, a, b) {
        var _this = _super.call(this) || this;
        _this.$t = null;
        _this.a = null;
        _this.b = null;
        _this.c = null;
        _this.$t = $t;
        _this.$type = _this.$type.specialize(_this.$t);
        CoreUtilities.z(a, "viewObject");
        _this.a = a;
        _this.b = b;
        return _this;
    }
    SpreadsheetAreaLayoutManager_SheetLayerInfo$1.$t = markType(SpreadsheetAreaLayoutManager_SheetLayerInfo$1, 'SpreadsheetAreaLayoutManager_SheetLayerInfo$1');
    return SpreadsheetAreaLayoutManager_SheetLayerInfo$1;
}(Base));
export { SpreadsheetAreaLayoutManager_SheetLayerInfo$1 };
//# sourceMappingURL=SpreadsheetAreaLayoutManager_SheetLayerInfo$1.js.map
