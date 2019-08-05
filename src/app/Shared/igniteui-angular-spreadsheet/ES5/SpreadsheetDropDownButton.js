/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, enumGetBox, markType } from "../../igniteui-angular-core/ES5/type";
import { CellAddress } from "../../igniteui-angular-excel/ES5/excel.core";
import { SpreadsheetDropDownButtonType_$type } from "./SpreadsheetDropDownButtonType";
import { Rect } from "../../igniteui-angular-core/ES5/Rect";
/**
 * @hidden
 */
var SpreadsheetDropDownButton = /** @class */ (function (_super) {
    tslib_1.__extends(SpreadsheetDropDownButton, _super);
    function SpreadsheetDropDownButton() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.d = 0;
        _this.c = 0;
        _this.b = 0;
        _this.a = 0;
        _this.g = SpreadsheetDropDownButton.f;
        return _this;
    }
    SpreadsheetDropDownButton.prototype.toString = function () {
        return CellAddress.u(this.d, this.c) + " " + enumGetBox(SpreadsheetDropDownButtonType_$type, this.b);
    };
    SpreadsheetDropDownButton.$t = markType(SpreadsheetDropDownButton, 'SpreadsheetDropDownButton');
    SpreadsheetDropDownButton.f = Rect.empty;
    return SpreadsheetDropDownButton;
}(Base));
export { SpreadsheetDropDownButton };
//# sourceMappingURL=SpreadsheetDropDownButton.js.map
