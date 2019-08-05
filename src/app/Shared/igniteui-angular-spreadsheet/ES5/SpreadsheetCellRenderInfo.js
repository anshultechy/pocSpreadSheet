/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, markType } from "../../igniteui-angular-core/ES5/type";
import { Color } from "../../igniteui-angular-core/ES5/Color";
import { ExcelUtils } from "../../igniteui-angular-excel/ES5/excel.core";
/**
 * @hidden
 */
var SpreadsheetCellRenderInfo = /** @class */ (function (_super) {
    tslib_1.__extends(SpreadsheetCellRenderInfo, _super);
    function SpreadsheetCellRenderInfo() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.f = null;
        _this.d = 0;
        _this.m = new Color();
        _this.e = 0;
        _this.n = new Color();
        _this.k = 0;
        _this.h = 0;
        _this.i = 0;
        _this.j = 0;
        _this.g = null;
        _this.c = 0;
        _this.l = new Color();
        _this.a = 0;
        return _this;
    }
    SpreadsheetCellRenderInfo.b = function () {
        var a = new SpreadsheetCellRenderInfo();
        a.l = a.m = a.n = ExcelUtils.gv;
        return a;
    };
    SpreadsheetCellRenderInfo.$t = markType(SpreadsheetCellRenderInfo, 'SpreadsheetCellRenderInfo');
    return SpreadsheetCellRenderInfo;
}(Base));
export { SpreadsheetCellRenderInfo };
//# sourceMappingURL=SpreadsheetCellRenderInfo.js.map
