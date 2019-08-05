/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, markType } from "../../igniteui-angular-core/ES5/type";
import { Workbook } from "../../igniteui-angular-excel/ES5/excel.core";
import { truncate } from "../../igniteui-angular-core/ES5/number";
import { NotImplementedException } from "../../igniteui-angular-core/ES5/NotImplementedException";
/**
 * @hidden
 */
var SingleCellSpreadsheetPreviewHelper = /** @class */ (function (_super) {
    tslib_1.__extends(SingleCellSpreadsheetPreviewHelper, _super);
    function SingleCellSpreadsheetPreviewHelper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SingleCellSpreadsheetPreviewHelper.a = function (a, b, c, d, e) {
        if (c === void 0) { c = 2; }
        if (d === void 0) { d = 1; }
        if (e === void 0) { e = true; }
        var f = new Workbook(2);
        f.windowOptions.tabBarVisible = false;
        f.windowOptions.scrollBars = 0;
        f._worksheets$i._add1("sheet1");
        var g = f._worksheets$i._item(0);
        g._rows$i.item(0)._cells$i.item(0).cellFormat.verticalAlignment = d;
        g._rows$i.item(0)._cells$i.item(0).cellFormat.alignment = c;
        g.displayOptions.showRowAndColumnHeaders = false;
        g.displayOptions.showGridlines = false;
        if (e) {
            g._rows$i.item(0).height = truncate(Workbook._ep(f, b, true));
            g._columns$i.item(0).setWidth(a, 3);
        }
        return f;
    };
    SingleCellSpreadsheetPreviewHelper.e = function (a, b) {
        b._worksheets$i._item(0)._rows$i.item(0)._cells$i.item(0).value = a;
    };
    SingleCellSpreadsheetPreviewHelper.d = function (a, b) {
        throw new NotImplementedException(0);
    };
    SingleCellSpreadsheetPreviewHelper.c = function (a, b) {
        b._worksheets$i._item(0)._rows$i.item(0)._cells$i.item(0).cellFormat.formatString = a;
    };
    SingleCellSpreadsheetPreviewHelper.b = function (a, b) {
        throw new NotImplementedException(0);
    };
    SingleCellSpreadsheetPreviewHelper.f = function (a, b) {
        b._worksheets$i._item(0)._rows$i.item(0)._cells$i.item(0).cellFormat.fill = a;
    };
    SingleCellSpreadsheetPreviewHelper.g = function (a, b) {
        throw new NotImplementedException(0);
    };
    SingleCellSpreadsheetPreviewHelper.$t = markType(SingleCellSpreadsheetPreviewHelper, 'SingleCellSpreadsheetPreviewHelper');
    return SingleCellSpreadsheetPreviewHelper;
}(Base));
export { SingleCellSpreadsheetPreviewHelper };
//# sourceMappingURL=SingleCellSpreadsheetPreviewHelper.js.map
