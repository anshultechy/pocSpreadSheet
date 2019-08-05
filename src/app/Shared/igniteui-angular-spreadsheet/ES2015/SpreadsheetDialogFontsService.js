/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, Number_$type, markType } from "../../igniteui-angular-core/ES2015/type";
import { ISpreadsheetDialogFontsService_$type } from "./ISpreadsheetDialogFontsService";
import { List$1 } from "../../igniteui-angular-core/ES2015/List$1";
import { Color } from "../../igniteui-angular-core/ES2015/Color";
import { Colors } from "../../igniteui-angular-excel/ES2015/excel.core";
/**
 * @hidden
 */
export class SpreadsheetDialogFontsService extends Base {
    getFontNames() {
        return new List$1(String_$type, 1, ["Arial", "Arial Black", "Bookman", "Calibri", "Comic Sans MS", "Courier", "Courier New", "Garamond", "Georgia", "Helvetica", "Impact", "Palatino", "Times", "Times New Roman", "Trebuchet MS", "Verdana"]);
    }
    getFontSizes() {
        return ((() => {
            let $ret = new List$1(Number_$type, 0);
            $ret.add(8);
            $ret.add(9);
            $ret.add(10);
            $ret.add(11);
            $ret.add(12);
            $ret.add(14);
            $ret.add(16);
            $ret.add(18);
            $ret.add(20);
            $ret.add(22);
            $ret.add(24);
            $ret.add(26);
            $ret.add(28);
            $ret.add(36);
            $ret.add(48);
            $ret.add(72);
            return $ret;
        })());
    }
    getHighlightColors() {
        return ((() => {
            let $ret = new List$1(Color.$, 0);
            $ret.add(Colors.o);
            $ret.add(Colors.g);
            $ret.add(Colors.u);
            $ret.add(Colors.f);
            $ret.add(Colors.o);
            $ret.add(Colors.o);
            $ret.add(Colors.o);
            $ret.add(Colors.o);
            return $ret;
        })());
    }
}
SpreadsheetDialogFontsService.$t = markType(SpreadsheetDialogFontsService, 'SpreadsheetDialogFontsService', Base.$, [ISpreadsheetDialogFontsService_$type]);
//# sourceMappingURL=SpreadsheetDialogFontsService.js.map
