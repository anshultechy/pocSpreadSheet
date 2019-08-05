/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, markType } from "../../igniteui-angular-core/ES5/type";
import { WorksheetRegionAddress, WorksheetCellAddress } from "../../igniteui-angular-excel/ES5/excel.core";
/**
 * @hidden
 */
var SortTargetResult = /** @class */ (function (_super) {
    tslib_1.__extends(SortTargetResult, _super);
    function SortTargetResult(a, b, c, d, e, f) {
        var _this = _super.call(this) || this;
        _this.e = null;
        _this.d = new WorksheetRegionAddress();
        _this.b = null;
        _this.c = new WorksheetCellAddress();
        _this.g = 0;
        _this.a = 0;
        _this.f = false;
        _this.e = a;
        _this.d = c;
        _this.c = d;
        _this.g = e;
        _this.b = b;
        _this.a = f;
        _this.f = _this.g > 0;
        return _this;
    }
    SortTargetResult.$t = markType(SortTargetResult, 'SortTargetResult');
    return SortTargetResult;
}(Base));
export { SortTargetResult };
//# sourceMappingURL=SortTargetResult.js.map
