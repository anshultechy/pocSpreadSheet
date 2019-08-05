/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { EventArgs, Nullable$1, Number_$type, markType } from "../../igniteui-angular-core/ES2015/type";
/**
 * @hidden
 */
export class ActiveRowIndexChangedEventArgs extends EventArgs {
    constructor(a, b) {
        super();
        this._d = Nullable$1.toNullable(Number_$type, null);
        this._b = Nullable$1.toNullable(Number_$type, null);
        this._d = a;
        this._b = b;
    }
    get _oldActiveRowIndex() {
        return this._d;
    }
    get _newActiveRowIndex() {
        return this._b;
    }
}
ActiveRowIndexChangedEventArgs.$t = markType(ActiveRowIndexChangedEventArgs, 'ActiveRowIndexChangedEventArgs', EventArgs.$);
//# sourceMappingURL=ActiveRowIndexChangedEventArgs.js.map
