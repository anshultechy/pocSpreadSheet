/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, String_$type, Number_$type, markType } from "../../igniteui-angular-core/ES5/type";
import { ISpreadsheetDialogFontsService_$type } from "./ISpreadsheetDialogFontsService";
import { List$1 } from "../../igniteui-angular-core/ES5/List$1";
import { Color } from "../../igniteui-angular-core/ES5/Color";
import { Colors } from "../../igniteui-angular-excel/ES5/excel.core";
/**
 * @hidden
 */
var SpreadsheetDialogFontsService = /** @class */ (function (_super) {
    tslib_1.__extends(SpreadsheetDialogFontsService, _super);
    function SpreadsheetDialogFontsService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SpreadsheetDialogFontsService.prototype.getFontNames = function () {
        return new List$1(String_$type, 1, ["Arial", "Arial Black", "Bookman", "Calibri", "Comic Sans MS", "Courier", "Courier New", "Garamond", "Georgia", "Helvetica", "Impact", "Palatino", "Times", "Times New Roman", "Trebuchet MS", "Verdana"]);
    };
    SpreadsheetDialogFontsService.prototype.getFontSizes = function () {
        return ((function () {
            var $ret = new List$1(Number_$type, 0);
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
    };
    SpreadsheetDialogFontsService.prototype.getHighlightColors = function () {
        return ((function () {
            var $ret = new List$1(Color.$, 0);
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
    };
    SpreadsheetDialogFontsService.$t = markType(SpreadsheetDialogFontsService, 'SpreadsheetDialogFontsService', Base.$, [ISpreadsheetDialogFontsService_$type]);
    return SpreadsheetDialogFontsService;
}(Base));
export { SpreadsheetDialogFontsService };
//# sourceMappingURL=SpreadsheetDialogFontsService.js.map
