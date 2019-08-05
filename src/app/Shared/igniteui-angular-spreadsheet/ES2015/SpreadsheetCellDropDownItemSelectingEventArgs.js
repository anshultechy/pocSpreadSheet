/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { EventArgs, markType } from "../../igniteui-angular-core/ES2015/type";
import { SpreadsheetCell } from "./SpreadsheetCell";
/**
 * @hidden
 */
export class SpreadsheetCellDropDownItemSelectingEventArgs extends EventArgs {
    constructor(a, b) {
        super();
        this._b = new SpreadsheetCell();
        this._d = null;
        this._b = a;
        this._d = b;
    }
    get _cell() {
        return this._b;
    }
    get _selectedItem() {
        return this._d;
    }
}
SpreadsheetCellDropDownItemSelectingEventArgs.$t = markType(SpreadsheetCellDropDownItemSelectingEventArgs, 'SpreadsheetCellDropDownItemSelectingEventArgs', EventArgs.$);
//# sourceMappingURL=SpreadsheetCellDropDownItemSelectingEventArgs.js.map