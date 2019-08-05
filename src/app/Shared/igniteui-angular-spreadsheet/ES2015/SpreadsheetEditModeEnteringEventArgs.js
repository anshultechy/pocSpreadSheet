/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { CancelEventArgs } from "../../igniteui-angular-core/ES2015/CancelEventArgs";
import { SpreadsheetCell } from "./SpreadsheetCell";
import { markType } from "../../igniteui-angular-core/ES2015/type";
/**
 * @hidden
 */
export class SpreadsheetEditModeEnteringEventArgs extends CancelEventArgs {
    constructor(a) {
        super(0);
        this._c = new SpreadsheetCell();
        this._c = a;
    }
    get cell() {
        return this._c;
    }
}
SpreadsheetEditModeEnteringEventArgs.$t = markType(SpreadsheetEditModeEnteringEventArgs, 'SpreadsheetEditModeEnteringEventArgs', CancelEventArgs.$);
//# sourceMappingURL=SpreadsheetEditModeEnteringEventArgs.js.map