/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, markType } from "../../igniteui-angular-core/ES2015/type";
import { Workbook } from "../../igniteui-angular-excel/ES2015/excel.core";
import { truncate } from "../../igniteui-angular-core/ES2015/number";
import { NotImplementedException } from "../../igniteui-angular-core/ES2015/NotImplementedException";
/**
 * @hidden
 */
export class SingleCellSpreadsheetPreviewHelper extends Base {
    static a(a, b, c = 2, d = 1, e = true) {
        let f = new Workbook(2);
        f.windowOptions.tabBarVisible = false;
        f.windowOptions.scrollBars = 0;
        f._worksheets$i._add1("sheet1");
        let g = f._worksheets$i._item(0);
        g._rows$i.item(0)._cells$i.item(0).cellFormat.verticalAlignment = d;
        g._rows$i.item(0)._cells$i.item(0).cellFormat.alignment = c;
        g.displayOptions.showRowAndColumnHeaders = false;
        g.displayOptions.showGridlines = false;
        if (e) {
            g._rows$i.item(0).height = truncate(Workbook._ep(f, b, true));
            g._columns$i.item(0).setWidth(a, 3);
        }
        return f;
    }
    static e(a, b) {
        b._worksheets$i._item(0)._rows$i.item(0)._cells$i.item(0).value = a;
    }
    static d(a, b) {
        throw new NotImplementedException(0);
    }
    static c(a, b) {
        b._worksheets$i._item(0)._rows$i.item(0)._cells$i.item(0).cellFormat.formatString = a;
    }
    static b(a, b) {
        throw new NotImplementedException(0);
    }
    static f(a, b) {
        b._worksheets$i._item(0)._rows$i.item(0)._cells$i.item(0).cellFormat.fill = a;
    }
    static g(a, b) {
        throw new NotImplementedException(0);
    }
}
SingleCellSpreadsheetPreviewHelper.$t = markType(SingleCellSpreadsheetPreviewHelper, 'SingleCellSpreadsheetPreviewHelper');
//# sourceMappingURL=SingleCellSpreadsheetPreviewHelper.js.map
