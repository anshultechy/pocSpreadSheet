/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { EventArgs, markType } from "../../igniteui-angular-core/ES2015/type";
/**
 * @hidden
 */
export class SpreadsheetActiveWorksheetChangedEventArgs extends EventArgs {
    constructor(a, b) {
        super();
        this._c = null;
        this._b = null;
        this._c = a;
        this._b = b;
    }
    get newValue() {
        return this._b;
    }
    get oldValue() {
        return this._c;
    }
}
SpreadsheetActiveWorksheetChangedEventArgs.$t = markType(SpreadsheetActiveWorksheetChangedEventArgs, 'SpreadsheetActiveWorksheetChangedEventArgs', EventArgs.$);
//# sourceMappingURL=SpreadsheetActiveWorksheetChangedEventArgs.js.map