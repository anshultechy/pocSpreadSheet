/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, enumGetBox, markType } from "../../igniteui-angular-core/ES2015/type";
import { CellAddress } from "../../igniteui-angular-excel/ES2015/excel.core";
import { SpreadsheetDropDownButtonType_$type } from "./SpreadsheetDropDownButtonType";
import { Rect } from "../../igniteui-angular-core/ES2015/Rect";
/**
 * @hidden
 */
export class SpreadsheetDropDownButton extends Base {
    constructor() {
        super(...arguments);
        this.d = 0;
        this.c = 0;
        this.b = 0;
        this.a = 0;
        this.g = SpreadsheetDropDownButton.f;
    }
    toString() {
        return CellAddress.u(this.d, this.c) + " " + enumGetBox(SpreadsheetDropDownButtonType_$type, this.b);
    }
}
SpreadsheetDropDownButton.$t = markType(SpreadsheetDropDownButton, 'SpreadsheetDropDownButton');
SpreadsheetDropDownButton.f = Rect.empty;
//# sourceMappingURL=SpreadsheetDropDownButton.js.map
